/* Application Component Manager/Factory :
   A template factory example.
   Updated: 1-28-2025
*/

FACTORY.Register("Application", function ApplicationFactory() {
	var Application = function (config) {
		var self = this;
		var $dos, $rest, $strings;

		self.events = {
          	init: function() {},
          	start: function() {},
			onload: function(e, itm) {
			},
			onactivate: function(e, itm) {
			},
			beforeunload: function(e, itm) {
			}
		};

		self.onload = function(main) {
			// STEP: 1
			// Save shared references from Main
			// --------------------------------------------
			$rest = main.shared.rest || $fctry.new('Rest') || {};
			$dos = main.shared.dos || $fctry.new('Dos') || {};
			$strings = main.shared.strings || $fctry.new('Strings') || {};
		};
	};

	Application.prototype.type = function () {
		return "Application";
	};
	Application.prototype.toDto = function () {
		var self = this;
		return { };
	};
	return Application;
});

