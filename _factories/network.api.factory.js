/* API Component Manager/Factory :
   A template factory example.
   Updated: 1-28-2025
*/

FACTORY.Register("API", function APIFactory() {
	var API = function (config) {
		var self = this;
		var $rest, $strings;
		var FORMAT = {
			DATETIME: '#YYYY#-#MM#-#DD# #hhh#:#mm#:#ss#',
			TIME: '#hhh#:#mm#:#ss#',
			DATE: '#YYYY#-#MM#-#DD#',
			NORMALDATE: '#MM#/#DD#/#YYYY#',
			NORMALTIME: '#hhh#:#mm# #AMPM#'
		};

      	function getAction(cmd, fn) {
			$rest.get(Env.server('store') + '/' + cmd, function(msg, data) {
              if (msg == 'ok') {
                if (fn) { fn(data); }
              }
            });
        }
		function postAction(parms, fn) {
          	parms = Object.assign({
              version: 2.0,
              appkey: USER.acct.app,
              pubid: USER.acct.pubid,
              sessid: USER.acct.sessid
            }, parms || {});
          
			$rest.post(Env.server('store') + '/action', parms, function(msg, data) {
              if (msg == 'ok') {
                if (fn) { fn(data); }
              }
            });
        }

		//THINK ABOUT:
		//  get data and store under given repo field name:
		//  proper naming / data classification label.
		//
		//  Items in NimbleIDE you'd like to store in repo.
		// constants, enumerators, lists,reserved words.
		// so fixes would be dynamic.
		//
		// - What's new information?
		// - 
      	self.listInventory = function(like, fn) {
		  like = like || '';
          getAction('search/' + (encodeURI(like) || '*'), fn);
        };
		self.getResource = function(itemname, fn) {
          getAction('getitem/' + (encodeURI(itemname) || '*'), fn);
        };
      	self.getData = function(itemname, fn) {
          getAction('get/' + (encodeURI(itemname) || '*'), fn);
        };
		self.findNews = function(itemname, fn) {
          getAction('find/' + (encodeURI(itemname) || '*'), fn);
        };
      	self.postAction = function(parms, fn) {
          postAction(parms, fn);
        };	

      	self.ping = function(fn) {
			$rest.get(Env.server() + '/ping', parms, function(msg, data) {
              if (msg == 'ok') {
                if (fn) { fn(data); }
              }
            });
        };

		self.onload = function(main) {
			// STEP: 1
			// Save shared references from Main
			// --------------------------------------------
          	Env = main.shared.env || $fctry.new('Env') || {};
			$rest = main.shared.$rest || $fctry.new('Rest') || {};
		};
	};

	API.prototype.type = function () {
		return "API";
	};
	API.prototype.toDto = function () {
		var self = this;
		return { };
	};
	return API;
});

