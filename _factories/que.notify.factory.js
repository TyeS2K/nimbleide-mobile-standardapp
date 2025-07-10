/* Notify Component Manager/Factory :
   A template factory example.
   Updated: 1-28-2025
*/

FACTORY.Register("Notify", function NotifyFactory() {
	var Notify = function (config) {
		var self = this;
		var _subs = [];
        var _notify = [];
      	
      	self.subscribe = function(msg, fn) {
          var idx = _subs.findIndex(function(it) { return it.msg == msg && it.fn === fn; });
          if (idx == -1) {
            if (fn) {
              _subs.push({msg: msg, fn: fn});
            }
          } else {
            console.log('Subscribe Event Exists: ' + msg);
          }
        };
        self.unsubscribe = function(msg, fn) {
		  var idx = _subs.findIndex(function(it) { return it.msg == msg && it.fn === fn; });
          if (idx > -1) {
            _subs.splice(idx, 1);
          } else {
            return false;
          }
        };
        self.publish = function(msg, parms) {
          parms = parms || {};
          _notify.push({msg: msg, parms: parms});
        };
      	self.stop = function() {
          clearInterval(_tmr);
        };
      	self.start = function() {
          start();
        };
      	
      	function start() {
          _tmr = setInterval(function() {
            var itm;

            if (_notify.length > 0) {
              itm = _notify.shift();

              _subs.forEach(function(it) {
                if (it.msg == itm.msg) {
                  if (itm.parms.cbk) {
                    itm.parms.cbk(false, it.fn(itm.parms));
                  } else {
                    it.fn(itm.parms);
                  }
                }
              });
            }
          }, 70);
        }
      	start();
		
		self.onload = function(main) {
		};
	};

	Notify.prototype.type = function () {
		return "Notify";
	};
	Notify.prototype.toDto = function () {
		var self = this;
		return { };
	};
	return Notify;
});

