/* Main Component Manager/Factory :
   A template factory example.
   Updated: 1-28-2025
*/

FACTORY.Register("Events", function MainFactory() {
	var Main = function (config) {
		var self = this;

		// STEP 1:
		// Attach factories/dependencies that you 
		// want to share between UI factories.
		// ----------------------------------------
		var $config = $fctry.new('Config');
        if (typeof(Env) == 'undefined') { Env = $fctry.new('Env'); $config.update(); }
      
      	var $app = null; // $fctry.new('Application');
      
		var $pubsub = $fctry.new('PubSub');
		var $strings = $fctry.new('Strings');
      	var $notify = $fctry.new('Notify');
      	var $session = $fctry.new('Session');
      	var $route = $fctry.new('Route');
      	var $views = $fctry.new('Views');
      	var $footer = $fctry.new('FooterButtons');
		var $side = $fctry.new('SideMenu');
      
      	self.login = $fctry.new('Login');
      	self.register = $fctry.new('Register');
      	self.reset = $fctry.new('Reset');
      	self.forgot = $fctry.new('Forgot');
      
      	self.shared = { 
          env: Env, 
          strings: $strings, 
          views: $views,
          route: $route,
          notify: $notify,
          
          _login: self.login,
          _register: self.register,
          _reset: self.reset,
          _forgot: self.forgot
        };
      
      	self.startSession = function(sessid) {
		  // Trigger this after a user has logged into
		  // the site and created a sessionid.

          function start() {
            self.login.unload();
            if ($app) {
              $app.events.init();
              $app.events.start();
            } else {
              // Load Title Image
              $notify.publish('show-view', {
                "name": "successImage",
                "namepattern": "loginok",
                "src": { "dlg": "appassets", "nodata": "nodata" },
                "des": { "dlg": "frmmain", "ctrl": "content", "nodata": "nocontent" },
                "items": [ "success" ],
                "push": false,"clear": true,"fadeout": false,"onDone": {
                  "success": {
                    "style": [
                      { ctrl: "loginok", prop: 'div.margin-top', value: Math.floor((DESKTOP.height - 300) / 2) + 'px' }
                    ]
                  }
                }
              });
            }
            
            // Add Main Footer icon buttons.
            $footer.showMain();
            
            // Show Nave and Footer bars.
            self.main.toggleHeader(true);
            self.main.toggleFooter(true);
            self.main.clearPopups();
            
            //Load Side Menu.
            $side.load();
          }
          
		  // Login Complete.
          // - Current sessionID passed as sessid. 
          // - Current User Details located on USER.acct.
          if (USER.token && !USER.acct) {
            $rest.post($nim.core_server + 'me/' + USER.token, {clear: false, fields: 'type,firstname,lastname,email'}, function(resp, data) {
              var regcode;

              if (resp == 'ok' && data) {
                data = sdkString.restJson(data);
                USER.isAdmin = (data.type == 'admin');
                USER.isPaid = false;
                USER.type = data.type;
                USER.email = data.email;
                USER.token = USER.sessionId;
                USER.sessid = USER.session.id;
                USER.pubid = USER.session.pubid;
                USER.app = USER.session.app;
                USER.name = (data.firstname + ' ' + data.lastname).trim() || USER.session.name;
                delete USER.sessionId;
                delete USER.session;
                _secureacct();
                
                start();
              }
            });
          } else {
            start();
          }
        };
      
      	var blSideMnu = false, blMnuInView = false;
      	self.msg = {
          _que: [],
          _tmr: 0,
          _cancel: 0,
          _pause: true,
          post: function(msg, cbk) {
            var me = self.msg;
            var idx = me._que.findIndex(function(it) {
              return msg.info == it.info;
            });
            
            if (idx == -1) {
              msg.cbk = cbk;
              me._que.push(msg);

              if (!me._cancel && !me._tmr) {
                me.start();
              }
            }
          },
          start: function() {
            var me = self.msg;
            $f.setstyle('frmmain', 'info', {
              opacity: 0
            });
            $f.hide('frmmain', 'info');
            me.tmr = setInterval(function() {
              if (!me._pause) {
                // get next msg and process.
                if (me._que.length > 0) {
                  me.process(me._que.shift());
                }
              }
            }, 250);
            me._pause = false;
          },
          clear: function() {
            var me = self.msg;
            
            me._que.length = 0;
            clearTimeout(me._cancel);
            me._cancel = 0;
            $f.setstyle('frmmain', 'info', {
              opacity: 0
            });
            $f.hide('frmmain', 'info');
          },
          close: function(e, itm) {
            var me = self.msg;
            
            clearTimeout(me._cancel);
            me._cancel = 0;
            $f.fadeout('frmmain', 'info', 25, function() {
              $f.hide('frmmain', 'info');
              me._pause = false;
            });
          },
          process: function(msg) {
            var me = self.msg;
            
            me._pause = true;
            $side.hide();
            $f.text('frmmain', 'info:title', msg.title);
            $f.text('frmmain', 'info:msg', msg.msg);
            $f.show('frmmain', 'info');
            $f.fadein('frmmain', 'info', 25, function() {
              if (msg.cbk) { msg.cbk(); }
              me._cancel = setTimeout(function() {
                me.close();
              }, 6000);
            });
          }
        };
      	self.err = {
          start: function() {
            $f.setstyle('frmmain', 'err', {
              opacity: 0
            });
            $f.hide('frmmain', 'err');
          },
          close: function() {
            $f.fadeout('frmmain', 'err', 25, function() {
              $f.hide('frmmain', 'err');
            });
          },
          clear: function() {
            $f.setstyle('frmmain', 'err', {
              opacity: 0
            });
            $f.hide('frmmain', 'err');
          },
          post: function(msg, cbk) {
            var me = self.err;
            
            $side.hide();
            $f.text('frmmain', 'err:msg', msg.msg);
            $f.show('frmmain', 'err');
            $f.fadein('frmmain', 'err', 25, function() {
              if (msg.cbk) { msg.cbk(); }
              me._cancel = setTimeout(function() {
                me.close();
              }, 3000);
            });
          }
        };
      
      	self.side = $side;
		self.main = {
            clearPopups: function() {
              self.msg.clear();
              self.err.clear();
            },
          	toggleHeader: function(blShow) {
              $f.slideto("frmmain", "header", 0, 0 - (blShow ? 0 : 50), DESKTOP.width, 48, 0.25, $nim.animFn);
            },
          	toggleFooter: function(blShow) {
              blMnuInView = blShow;
              $f.slideto("frmmain", "footer", 0, DESKTOP.height - (blShow ? 70 : 0), DESKTOP.width, 72, 0.25, $nim.animFn);
            },
			events: {
              	onLoadTitle: function(e, itm) {
                  Env.viewport('mobile');
                  // Hide Desktop information.
                  ['title', 'author', 'date', 'library', 'logo', 'logon', 'ip'].forEach(function(id) {
                    $f.hide('app.' + id);
                  });
                  // ---------------------------
                  $f.full('frmtitle', function() {
                    $f.load('loginassets');
                    $f.load('appassets');
                    // Load Title Image
                    $notify.publish('show-view', {
                      "name": "titleImage",
                      "namepattern": "uilogo",
                      "src": { "dlg": "appassets", "nodata": "nodata" },
                      "des": { "dlg": "frmtitle", "ctrl": "image", "nodata": "nocontent" },
                      "items": [ "logo" ],
                      "push": false,"clear": true,"fadeout": false,"onDone": {
                      }
                    });
                    
                    // Update Title
                    $f.show('frmtitle');
                  });
                },
              	onCloseTitle: function(e, itm) {
                  $f.load('frmmain');
                  self.err.start();
                  self.msg.start();
                  $f.full('frmmain', function() {
                 	$f.unload('frmtitle');
                    
                    self.main.toggleFooter(false);
                    // Show OpenAuth in Taskbar.
                    $footer.showAuth();
                    
                    $f.show('frmmain');
                    self.login.show();
                  });
                },
              	onTaskBarClick: function(e, itm) {
                  blMnuInView = !blMnuInView;
                  if (blMnuInView) {
                  	self.main.toggleHeader(blMnuInView);
                  } else {
                    if (blSideMnu) { self.main.events.onShowSideMenu(); }
                  }
                  self.main.toggleFooter(blMnuInView);
                },
                onTaskBarHide: function(e, itm) {
                  blMnuInView = !blMnuInView;
                  if (blMnuInView) {
                  	self.main.toggleHeader(blMnuInView);
                  } else {
                    if (blSideMnu) { self.main.events.onShowSideMenu(); }
                  }
                  self.main.toggleFooter(blMnuInView);
                },
                onBreadCrumbClick: function(e, itm) {
              	  e.stopPropagation();
                },
              	onHeaderClick: function(e, itm) {
              	  e.stopPropagation();
                },
                onLostFocus: function(e, itm) {
                  blMnuInView = false;
                  self.main.toggleHeader(false);
                  self.main.toggleFooter(false);
                  if (blSideMnu) { self.main.events.onShowSideMenu(); }
                },
              	onShowSideMenu: function(e, itm) {
                  blSideMnu = !blSideMnu;
                  $side[blSideMnu ? 'show' : 'hide']();
                },
				onload: function(e, itm) {
				},
				onactivate: function(e, itm) {
				},
				beforeunload: function(e, itm) {
				}
			}
		};

      	$pubsub.onload(self);
      	$views.onload(self);
      	$route.onload(self);
      	$notify.onload(self);
        $side.onload(self);
        $footer.onload(self);
		for (var mod in self) {
			if (self[mod].type && self[mod].type() != self.type()) {
				if (self[mod].onload) { self[mod].onload(self); }
			}
		}
	};

	Main.prototype.type = function () {
		return "Main";
	};
	Main.prototype.toDto = function () {
		var self = this;
		return { };
	};
	return Main;
});

