/* SideMenu Component Manager/Factory :
   A template factory example.
   Updated: 1-28-2025
*/

FACTORY.Register("SideMenu", function SideMenuFactory() {
	var SideMenu = function (config) {
		var self = this;
		var $main, $notify, $api, $route, $strings;

      
      	self.load = function() {
          $notify.publish('show-view', {
            "name": "sideMenu",
            "namepattern": "sidemenu",
            "src": { "dlg": "appassets", "nodata": "nodata" },
            "des": { "dlg": "frmmain", "ctrl": "body", "nodata": "nocontent" },
            "items": [ "sidemenu" ],
            "push": false,"clear": false,"fadeout": false,"onDone": {
              "sidemenu": {
                "prop": [
                ],
                "style": [
                  { "ctrl": "sidemenu", "prop": "display", "value": "none" },
                  { "ctrl": "sidemenu", "prop": "top", "value": "0px" },
                  { "ctrl": "sidemenu", "prop": "left", "value": "-200px" },
                  { "ctrl": "sidemenu", "prop": "height", "value": "100%" },
                  { "ctrl": "sidemenu", "prop": "max-height", "value": "100%" }
                ]
              }
            }
          });
        };
      	self.show = function() {
          $f.show("frmmain", "sidemenu");
          $f.slideto("frmmain", "sidemenu", 0, 0, -1, -1, 0.65, $nim.animFn);
        };
      	self.hide = function() {
          $f.slideto("frmmain", "sidemenu", -200, 0, -1, -1, 0.65, function(anim) {
            if (anim.pos == 100) {
              $f.hide("frmmain", "sidemenu");
            }
          });
        };
      	self.unload = function() {
          $f.hide("frmmain", "sidemenu");
        };
      
      	var itemid = {};
		self.events = {
          	onMenuItem: function(e, itm) {
              $route.setBreadCrumb('frmmain', 'route', 'App/Menu/' + itm.ctrl._caption);
              // setview
              $main.events.onTaskBarHide(e, itm);
              e.stopPropagation();
            },
          	onmouseover: function(e, itm) {
              if (itemid.ctrl != '') {
                $f.setstyle(itemid.dlg, itemid.ctrl, {
                  border: ""
                });
                itemid = { dlg: '', ctrl: '' };
              }
              
              $f.setstyle(itm.Form, itm.Control, {
                border: "1px solid #224488"
              });
              itemid = { dlg: itm.Form, ctrl: itm.Control };
              e.stopPropagation();
            },
          	stopEvent: function(e, itm) {
              e.stopPropagation();
            },
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
			$api = main.shared.api || $fctry.new('API') || {};
			$notify = main.shared.notify || $fctry.new('Notify') || {};
			$strings = main.shared.strings || $fctry.new('Strings') || {};
          	$route = main.shared.route || $fctry.new('Route') || {};
          	$main = main.main;
		};
	};

	SideMenu.prototype.type = function () {
		return "SideMenu";
	};
	SideMenu.prototype.toDto = function () {
		var self = this;
		return { };
	};
	return SideMenu;
});

