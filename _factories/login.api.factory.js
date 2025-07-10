/* Login Manager Component Manager/Factory :
   
*/

FACTORY.Register("LoginAPI", function loginFactory() {
	var login = function (config) {
		var self = this;
      	var _sv, _dlg, _app = '';
      	var server = '';

      	var _prev = [];
		// 'global', 'home', etc..
      	self.appContext = function(app) {
          if (url) {
            _app = app;
          } else {
            return _app;
          }
        };
		
		// Overwrite the domain server to login.
      	self.domain = function(url) {
          if (url) {
            server = url;
          } else {
            return server;
          }
        };
		self.initMethods = function(dlg) {
          _dlg = dlg;
          server = Env ? Env.domain() : 'https://www.nimble-ide.com';
          
          var url = window.location.href, uiReady = false; 
          var parmMap = {
            p: 'post',
            t: 'wintype',
            s: 'redir',
            f: 'fail',
            l: 'lic',
            c: 'count',
            v: 'verify'
          };

          if (!window.ajax) {
            window.ajax = function(type, api, payload, fn) {
              $ajx.call({
                type: type,
                dataType: payload ? 'text' : '',
                url: server + '/' + (api ? api + '/' : ''),
                data: payload,
                headers: {
                  'content-type': payload ? 'application/json' : 'text/plain;charset=UTF-8',
                  'accept': '*/*'
                },
                success: function(resp) {
                  var ary;
                  if (payload && payload.version == 2.0) {
                    ary = JSON.parse(resp);
                    if (fn) { fn('ok', ary); }
                  } else {
                    ary = resp.split(':');
                  	if (fn) { fn(ary.shift() || "", ary.join(':') || ""); }
                  }
                },
                error: function(xhr, opt, err) {
                  if (typeof(AppEvents) != 'undefined' && AppEvents.msg) {
                    AppEvents.msg.post({
                      title: 'Error: ping',
                      msg: 'Server Unreachable. Check network configuration.',
                    });
                  }
                  console.log('Error: "' + api + '" API - ' + xhr.status + ' : ' + err);
                }
              });
            };
          }

          window.win_fetch = function(msg) {
            if (ipcRenderer) {
              return ipcRenderer.sendSync('synchronous-message', JSON.stringify(msg));
            } else {
                  switch (msg.cmd) {
                      case 'set':
                          window[msg.data] = msg.value;
                          break;
                      case 'setuser':
                          window.user = msg.data;
                          break;
                      case 'get':
                          return window[msg.data] || '';
                      case 'nav':
                          if (window.wintype == 'iframe' || msg.data.indexOf('file:') > -1) {
                            window.postMessage(JSON.stringify(msg));
                          } else { window.location.href = msg.data; }
                          break;
                  }
            }
          };
          window.wintype = ''; window.redir = ''; window.post = ''; window.fail = ''; window.lic = ''; window.count = 0;
          window.authComplete = function(usr, sessid, cbk) {
            // Add a delay so popup window is dismissed.
            if (sessid) win_fetch({cmd: 'set', data: 'sessid', value: sessid || ''});
            setTimeout(function() {
              var path, url, win;
              var user = usr, sessdata;

              function startApp() {
                var sess = redir.indexOf('?') > -1 ?
                    '&id=' + win_fetch({cmd: 'get', data: 'token'}) : '?id=' + win_fetch({cmd: 'get', data: 'token'});
                sess += '&year=' + (new Date()).getFullYear() + '&img=' + user.image;

                // Create a Mobile pcid, pcos similar to electron.
                if (redir.indexOf('#app#') > -1) {
                  if (AppEvents && AppEvents.startSession) {
                    delete user.token;
                    window.USER = Object.assign(window.USER, user, {sessid: sessid, pcid: '', pcos: ''});
                    if (USER.sessid && !USER.acct) {
                      _sv = _secureacct(_sv);
                    }
                    sessdata = win_fetch({cmd: 'get', data: 'sessid'});
                    
                    // CleanUP:
                    delete window.user;
                    delete window.ajax;
                    delete window.wintype;
                    // delete window.win_fetch;
                    delete window.authComplete;
                    AppEvents.startSession(sessdata);
                  }
                } else if (redir.indexOf('file:///') > -1) {
                  win_fetch({cmd: 'nav', data: win_fetch({cmd: 'get', data: 'redir'}) + sess});
                } else if (redir.indexOf('file:') > -1) {
                  win_fetch({cmd: 'nav', data: 'file:///' + win_fetch({cmd: 'get', data: 'path'}) + '/' + redir.split(':')[1] + sess});
                } else {
                  redir += sess;
                  win_fetch({cmd: 'nav', data: 'https://' + window.domain + '/' + redir});
                }
                
                if (cbk) cbk();
              }
              
			  function verifyLogin() {
				  var payload = {
					  version: 2.0,
					  token: user.token
				  };
				  if (win_fetch({cmd: 'get', data: 'verify'})) {
					  ajax('POST', win_fetch({cmd: 'get', data: 'verify'}), payload, function(hStatus, msg) {
						  if (hStatus == 'ok') {
							 win_fetch({cmd: 'set', data: 'sessid', value: msg.data || ''});
							 startApp();
						  }
					  });
				  } else {
					  startApp();
				  }
			  }

              blElectron = (window && window.process && window.process.type && require);
              if (blElectron) {
                remote = require('electron').remote;
                path = require('path');

                url = require('url');
                win = window.glbWin || {};
              }

              win_fetch({cmd: 'setuser', data: user});
              if (post) {
                ajax('POST', post, user, function(hStatus, hResp) {
                  if (hStatus == 'ok') { 
                    verifyLogin(); 
                  }
                });
              } else { verifyLogin(); }
            }, 800);
          };
          window.authFailure = function() {
            count++;
            if (count > 2) { 
              window.location.href = window.fail;
            } else {
              window.location.href = window.base + '?' +
                'p=' + window.post + '&' +
                's=' + window.redir + '&' +
                'f=' + window.fail + '&' +
                'l=' + window.lic + '&' +
                'c=' + window.count;
            }
          };

          // Save the base domain name.
          window.domain = url.split('/')[2] || server;
          
          // *************
          // *   START   *
          // *************
          ajax('GET', 'ping', null, function(resp, data) {
            // Pull out parameters.
            url = url.split(/\?|\&/);
            window.base = url[0];
            
            // Map Parameters from URL.
            url.forEach(function(itm) {
              if (itm.split('=')[1]) {
                if (parmMap[itm.split('=')[0]]) window[parmMap[itm.split('=')[0]]] = itm.split('=')[1];
              }
            });
            
            // If No redirect URL, simply close app.
            if (!window.redir) { window.redir = '#app#'; }
          });
		};
      
		self.addListener = function() {
		  window.addEventListener('message', function(e) {
              var msg = JSON.parse(e.data);
            
              switch (msg.cmd) {
                case 'enable':
                case 'disable':
                case 'hide':
                case 'show':
                  if (msg.data) { $f[msg.cmd](_dlg, msg.data); }
                  break;
                case 'reload':
                  window.location.reload();
                  break;
                case 'nav':
                  window.location.href = msg.data;
                  break;
                case 'log':
                  console.log('iframe: ' + msg.data);
                  break;
                case 'close':
                  break;
              }
          });
          if (window.parent) window.parent.postMessage(JSON.stringify({cmd: 'onload', data: ''}), '*');
		};
       	self.postLogin = function(dlg, cbk) {
          dlg = dlg || 'loginmain';
          
          var ui = $f.pull(dlg, true);
          var user = {};
          var payload = {
            login: ui.username || ui.login,
            pass: ui.password || ui.pass
          };
          payload = Object.assign({ version: 2.0, appkey: _app || 'global'}, payload);
          ajax('POST', 'login', payload, function(resp, msg) {
              if (resp == 'ok' && msg.result) {
                  user.token = msg.data;
                  win_fetch({cmd: 'set', data: 'token', value: user.token || ''});
              
              	  // fetch profile from token
              	  ajax('POST', 'me/' + user.token, {fields: 'id,sessionid,type,app,pubkey,name,email,firstname,lastname,image'}, function(resp, data) {
                  	if (resp == 'ok') {
                      var profile = JSON.parse(data);
                      
                      console.log('Good to see you, ' + profile.name + '.');
                      user.type = 'nimblesolutions';
                      user.access = profile.type;
                      user.isAdmin = (profile.type == 'admin');
                      user.isOwner = (profile.type == 'owner');
                      user.app = profile.app || 'global';
                      user.pubid = profile.id;
                      user.firstname = profile.firstname;
                      user.lastname = profile.lastname;
                      user.name = profile.name;
                      user.pubkey = profile.pubkey;
                      user.sessionImg = profile.image || '';
                      user.email = profile.email;

                      // Complete login process.
                      window.authComplete(user, profile.sessionid, function() {
                        if (cbk) cbk(true, user);
                      });
                  	} else {
                      self.showError('Access Denied', 'Invalid user profile.');
                      if (cbk) cbk(false);
                    }
                  });
              } else {
                self.showError('Access Denied', 'Invalid login or password.');
                if (cbk) cbk(false);
              }
            });
        };
        self.postLogout = function(cbk) {
          var payload = {
            version: 2.0,
            pubid: USER.acct.pubid,
            sessid: USER.acct.sessionId
          };
          
          ajax('POST', 'logout', payload, function(resp, data) {
            console.log('Goodbye, ' + USER.acct.name + '.');
            delete USER.acct;
            USER.data = {};
            
            if (cbk) cbk();
          });
        };
      
      	self.postRegister = function(dlg, cbk) {
          dlg = dlg || 'frmmain';

          var user = {}, payload = $f.pull(dlg, true);
          payload = Object.assign({ version: 2.0, appkey: _app || 'global'}, payload);
          ajax('POST', 'register', payload, function(resp, data) {
              var msgObj;
              if (resp == 'ok') {
                msgObj = {
                  title: 'Success',
                  msg: 'A confirmation link has been sent to your email address. Please click the link.'
                };
              } else {
				msgObj = {
                  title: 'Ooops!',
                  msg: 'Registration failed or already exists.'  // update this with better messaging.
                };
              }
            
              if (cbk) { cbk(resp, msgObj); }
            });
          
        };
      	self.postForgot = function(dlg, cbk) {
          dlg = dlg || 'frmmain';

          var user = {}, payload = $f.pull(dlg, true);
          payload = Object.assign({ version: 2.0, appkey: _app || 'global'}, payload);
          ajax('POST', 'forgot', payload, function(resp, data) {
              var msgObj;
              if (resp == 'ok') {
				msgObj = {
                  title: 'Account found.',
                  msg: 'A reset code has been sent to your email address. (Allow up to 10 minutes.)'
                };
              } else {
				msgObj = {
                  title: 'Ooops!',
                  msg: 'Msg: ' + data
                };
              }
              if (cbk) { cbk(resp, msgObj); }
            });
        };
      	self.postReset = function(dlg) {
          dlg = dlg || 'loginreset';

          var user = {}, payload = $f.pull(dlg, true);
          payload = Object.assign({ version: 2.0, appkey: _app || 'global'}, payload);
          ajax('POST', 'changepw', payload, function(resp, data) {
              var msgObj;
              if (resp == 'ok') {
                msgObj = {
                  title: 'Success!',
                  msg: 'You password has been reset successfully.'
                };
              } else {
                msgObj = {
                  title: 'Ooops!',
                  msg: 'Msg: ' + data
                };
              }
            
              if (cbk) { cbk(resp, msgObj); }
            });
        };
      	self.showError = function(title, msg) {
          AppEvents.msg.post({
            title: title,
            msg: msg
          });
        };

		self.onload = function(main) {
          Env = main.shared.env || $fctry.new('Env') || {};

          server = Env ? Env.domain() : 'https://www.nimble-ide.com';
        };
	};
  
	login.prototype.type = function () {
		return "login";
	};
	login.prototype.toDto = function () {
		var self = this;
		return { };
	};
	return login;
});

