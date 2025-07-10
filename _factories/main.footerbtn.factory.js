/* FooterButtons Component Manager/Factory :
   A template factory example.
   Updated: 1-28-2025
*/

FACTORY.Register("FooterButtons", function FooterButtonsFactory() {
	var FooterButtons = function (config) {
		var self = this;
		var $notify, $api, $route, $strings;

      	self.showBack = function() {
          $notify.publish('show-view', {
            "name": "footerMenu",
            "namepattern": "uiback",
            "src": { "dlg": "appassets", "nodata": "nodata" },
            "des": { "dlg": "frmmain", "ctrl": "footer", "nodata": "nocontent" },
            "items": [ "navback" ],
            "push": false,"clear": true,"fadeout": false,"onDone": {
            }
          });
        };
      	self.showMain = function() {
          $notify.publish('show-view', {
            "name": "footerMenu",
            "namepattern": "uimenu",
            "src": { "dlg": "appassets", "nodata": "nodata" },
            "des": { "dlg": "frmmain", "ctrl": "footer", "nodata": "nocontent" },
            "items": [ "footer" ],
            "push": false,"clear": true,"fadeout": false,"onDone": {
            }
          });
        };
      	self.showAuth = function() {
          $notify.publish('show-view', {
            "name": "footerMenu",
            "namepattern": "openauth",
            "src": { "dlg": "appassets", "nodata": "nodata" },
            "des": { "dlg": "frmmain", "ctrl": "footer", "nodata": "nocontent" },
            "items": [ "openauth" ],
            "push": false,"clear": true,"fadeout": false,"onDone": {
            }
          });
        };

		self.onload = function(main) {
			// STEP: 1
			// Save shared references from Main
			// --------------------------------------------
			$api = main.shared.api || $fctry.new('API') || {};
			$notify = main.shared.notify || $fctry.new('Notify') || {};
			$strings = main.shared.strings || $fctry.new('Strings') || {};
          	$route = main.shared.route || $fctry.new('Route') || {};
		};
	};

	FooterButtons.prototype.type = function () {
		return "FooterButtons";
	};
	FooterButtons.prototype.toDto = function () {
		var self = this;
		return { };
	};
	return FooterButtons;
});

