try {
	// Check for Node/Electron cross-compatibility.
	if (typeof(Env) != 'undefined' && !Env.isElectron) {
		if (typeof(FACTORY) == 'undefined' && typeof(require) != 'undefined') { FACTORY = require('../factory.js'); }
	}
} catch(err) {
	console.log(err);
}
/* CONFIG Component Manager/Factory :
   NOTE: This factory should be deprecated!!!!!!
   
   Use the Env.factory.js file instead.
*/
FACTORY.Register("Config", function blankFactory() {
	var config = function () {
		var self = this;
		var urlPrm, _state = '';
        var _ip = '127.0.0.1', home = 'https://www.nimble-ide.com';
        var _port = 3031;

		if (!FACTORY.node) {
			urlPrm = new URL(window.location.href).searchParams;
			_state = urlPrm.get('env') || '';	//local
		}
		
        function getQueryParams(url) {
          url = url || window.location.href;
          var params = {};
          var queryString = url.split('?')[1];
          if (!queryString) return params;

          
          var pairs = queryString.split('&');
          for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i], parts = pair.split('=');
            params[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1] || '');
          }

          return params;
        }
		
		self.port = function(blSock) {
          return (_state != 'local') ?
            (blSock ? (':' + _port + 1) : "") :
            (":" + (blSock ? _port + 1 : _port));
        };
		self.server = function(svc, blSock) {
		  svc = svc || '';
          return (_state == 'local') ? 
            'http://' + _ip + self.port(blSock) + '/' + svc : home + self.port(blSock) + '/' + svc;
		};
      	self.domain = function(blSock) {
          return (_state == 'local') ? 
            'http://' + _ip + self.port(blSock) : home + self.port(blSock);
		};
      	self.host = function(blSock) {
          return (_state == 'local') ? 
            'http://' + _ip : home;
		};
		self.update = function() {
			if (typeof(Env) != "undefined") {
			  Env.config(self);
			  Env.state(_state);
			  Env.beta_server = _ip;
			}
		};
		self.getParms = getQueryParams;
		self.update();
	};
	config.prototype.type = function () {
		return "config";
	};
	config.prototype.toDto = function () {
		return { };
	};
	return config;
});

if (FACTORY.node) { 
	module.exports = FACTORY.New('Config');
} else {
	_Config = FACTORY.New('Config');
}
