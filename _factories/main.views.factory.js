/* Views Component Manager/Factory :
   A template factory example.
   Updated: 1-28-2025
*/

FACTORY.Register("Views", function ViewsFactory() {
	var Views = function (config) {
		var self = this;
		var $notify, $api, $route, $strings;
		var curView, _views = {};
      
      	var _view = {
          "name": "",
          "namepattern": "",
          "src": { "dlg": "", "nodata": "nodata" },
          "des": { "dlg": "frmmain", "ctrl": "content", "nodata": "nocontent" },
          "items": [],
          "push": false,"clear": true,"fadeout": true,"onDone": {
          }
        };
        var mapRte = {
          login: 'App/Login',
          reset: 'App/Reset',
          forgot: 'App/Forgot',
          register: 'App/Register',
          home: 'Home'
        };
      
        function createView(name, src, asset) {
          return Object.assign({}, _view, {
            name: name + 'Asset',
            src: {dlg: src, nodata: 'nocontent'},
            namepattern: name,	//  + '(<idx>)',
            items: [ asset ]
          });
        }
		function generateViews() {
          ['login', 'reset', 'forgot', 'register'].forEach(function(name) {
            _views[name] = JSON.parse(JSON.stringify(createView(name, 'loginassets', name) || {}));
          });
        }
      
      	self.unload = function(name) {
          curView = "";
          $f.unload('frmmain', name);
        };
      	self.hide = function(name) {
          curView = "";
          $f.hide('frmmain', name);
        };
      	self.curView = function() {
          return curView;
        };
      	self.view = function(name) {
          return _views[name] || {};
        };
      	self.setView = function(name, json) {
          json = json || {};
          _views[name] = json;
        };
      	self.updateNav = function(page, name) {
           var prfx = mapRte[page.toLowerCase()] || 'Home/' + page + '/';
          
           name = name || '';
           $f.list.addlist('frmmain', 'route', $route.createCrumb(prfx + name), true);
        };
      	self.show = function(name, dlg, ctrl, cbk) {
          var view = JSON.parse(JSON.stringify(_views[name] || {}));

          if (cbk) { view.done = cbk; }
          if (view.name) {
            curView = name;
            view.des.dlg = dlg || view.des.dlg;
            view.des.ctrl = ctrl || view.des.ctrl;
            $notify.publish('show-view', view);
            self.updateNav(name, '');
            AppEvents.main.clearPopups();
          }
        };

		self.onload = function(main) {
			// STEP: 1
			// Save shared references from Main
			// --------------------------------------------
			$api = main.shared.api || $fctry.new('API') || {};
			$notify = main.shared.notify || $fctry.new('Notify') || {};
			$strings = main.shared.strings || $fctry.new('Strings') || {};
          	$route = main.shared.route || $fctry.new('Route') || {};
          
          	generateViews();
		};
	};

	Views.prototype.type = function () {
		return "Views";
	};
	Views.prototype.toDto = function () {
		var self = this;
		return { };
	};
	return Views;
});

