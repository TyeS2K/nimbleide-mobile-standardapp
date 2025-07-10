/* REST Component Manager/Factory :
   
*/
FACTORY.Register("Rest", function blankFactory() {
	var restObj = function () {
		var self = this;
		var $string = $fctry.new('Strings'), $config;

		if (typeof(Env) == 'undefined') {
			if (FACTORY.Exists('Env')) {
				Env = FACTORY.New('Env');
			} else {
				Env = {
					state: ""
				};
			}
		}
		function resolveServer(env, url) {
			if (env && env.state) {
				if (window.$nim && $nim.home_server) {
					url = $string.replaceAll($nim.home_server, env.domain() + "/", url);
					url = $string.replaceAll($nim.core_server, env.domain() + "/", url);
				}
				return url;
			} else { return url; }
		}
		function ajaxCMD(type, url, blASync, payload, callbk) {
			var xhr  = new XMLHttpRequest();
			var json = null;

			if (type == "POST") {
              if (payload instanceof FormData) {
                json = payload;
              } else {
                json = (typeof(payload) == 'object') ? JSON.stringify(payload) : payload;
              }
			} else { 
				if (typeof(payload) == 'function') { callbk = payload; payload = null; }
			}
			xhr.onerror = function() {
				if (callbk) { callbk ('error'); }
			};
          	xhr.onloadend = function() {
                if(xhr.status == 404) {
                  if (callbk) { callbk ('error'); }
                }
            };
			xhr.onreadystatechange = function () {
				var resp;
				
				if (xhr.readyState < 4) { return; }
				if (xhr.readyState == 4 && xhr.status == 200) {
					try {
						resp = JSON.parse(xhr.responseText);
					} catch (err) {
						resp = xhr.responseText || {};
					} finally {
						if (callbk) { callbk ('ok', resp); }
					}
				}
			};

			xhr.open(type, resolveServer(Env, url), blASync);
			if (type == "POST" && typeof(json) == 'string') {
				xhr.setRequestHeader('Content-Type','application/json');
			}
			try {
				xhr.send(json);
			} catch(err) {
				if (callbk) { callbk ('error'); }
			}
		}
		function restJson(inval) {
			var ary = inval.split(':');
			ary.shift();
			return JSON.parse(ary.join(':') || "") || {};
		}
      	function _post(url, payload, callbk) {
			ajaxCMD('POST', url, true, payload, callbk);
        }
        function _get(url, callbk) {
			ajaxCMD('GET', url, true, null, callbk);
        }
      	function cleanPayload(payload) {
          ['news','video','home','code','bookmark',
          'version','svr','app','sessid','pubid'].forEach(function(it) {
            delete payload[it];
          });
          return payload;
        }
      	function authPayload(url, payload) {
          if (url.toLowerCase().indexOf('nimble-ide.com') > -1) {
          	payload = cleanPayload(payload);
            return Object.assign(payload, {
              version: 2.0,
              svr: 'home',
              app: USER.acct ? USER.acct.app : '',
              pubid: USER.acct ? USER.acct.pubid : '',
              sessid: USER.acct ? USER.acct.sessid : ''
            });
          } return payload;
        }
      
        self.get = _get;
        self.post = _post;
      	self.auth = authPayload;
        self.restJson = restJson;
		
		self.onload = function(main) {
          $config = main.shared.config || $fctry.new('Config') || {};
        };
	};
  
	restObj.prototype.type = function () {
		return "rest";
	};
	restObj.prototype.toDto = function () {
		return { };
	};
	return restObj;
});

