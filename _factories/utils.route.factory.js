/* Route Component Manager/Factory :
*/

FACTORY.Register('Route', function RouteFactory() {
	var Route = function (config) {
		var self = this;
      	var $api, $strings;

      	// NOTES: Creates route array from string:
      	//  ex:  Home/News/UI Frameworks
      	function createCrumb(str) {
          var arr = str.split('/').join(',/,').split(',');
          var retval = [];
          
          arr.forEach(function(it, idx) {
            if (it) {
              if (it == '/') {
                retval.push({ caption: '/', value: 'div' + idx });
              } else {
                retval.push({ caption: it, value: $strings.alphaNumOnly(it.toLowerCase()) });
              }
            }
          });
          return retval;
        }
      
      	self.createCrumb = createCrumb;
      	self.setBreadCrumb = function(dlg, ctrl, str) {
          $f.list.addlist(dlg, ctrl, createCrumb(str), true);
        };
      
		self.onload = function(main) {
		  // Save any needed shared factories.
          Env = main.shared.env || $fctry.new('Env') || {};
          $api = main.shared.api || $fctry.new('API') || {};
          $strings = main.shared.strings || $fctry.new('Strings') || {};
        };
	};
		
	Route.prototype.type = function () {
		return "Route";
	};
	Route.prototype.toDto = function () {
		var self = this;
		return { };
	};
	return Route;
});
