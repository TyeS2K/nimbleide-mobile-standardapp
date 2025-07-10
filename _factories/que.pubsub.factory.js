/* PubSub Component Manager/Factory :
   A template factory example.
   Updated: 1-28-2025
*/

FACTORY.Register("PubSub", function PubSubFactory() {
	var PubSub = function (config) {
		var self = this;
		var $api, $render, $notify;

      	$api = $fctry.new('API');
      	$render = $fctry.new('Render');
      
      	function subscribe() {
          // These are STATIC notifications for use with
          // Data Store Pub/Sub trigger.
          $notify.subscribe('render-layout', self.events._renderLayout);
          $notify.subscribe('render-results', self.events._renderResults);
          $notify.subscribe('render-bydatatype', self.events._renderByDataType);
          // ---------------------------------------------
          
          $notify.subscribe('get-view', self.events.getview);
          $notify.subscribe('show-view', self.events.showview);
        }
      	function unsubscribe() {
          $notify.stop();
          // These are STATIC notifications for use with
          // Data Store Pub/Sub trigger.
          $notify.unsubscribe('render-layout', self.events._renderLayout);
          $notify.unsubscribe('render-results', self.events._renderResults);
          $notify.unsubscribe('render-bydatatype', self.events._renderByDataType);
          // ---------------------------------------------
          
          $notify.unsubscribe('get-view', self.events.getview);
          $notify.unsubscribe('show-view', self.events.showview);
        }
      	function resolveCallback(parms, resp) {
          resp = resp || {};
          resp = resp.data ? (resp.data.isJSON() ? JSON.parse(resp.data) : resp.data) : resp;
          if (parms.cbk) { return parms.cbk(true, resp); }
        }
      
		self.events = {
            _renderLayout: function(parms) {
              $render.layout(parms, parms.clear);
            },
            _renderResults: function(parms) {
              $render.results(parms, parms.clear);
            },
            _renderByDataType: function(parms) {
              $render.bydatatype(parms, parms.clear);
            },
          
          	getview: function(parms) {
              $api.getData(parms.url, function(view) {
                resolveCallback(parms, view);
              });
            },
          	showview: function(parms) {
              $render.layout(parms, (typeof(parms.clear) == 'undefined') ? true : parms.clear);
            },
			unload: function(e, itm) {
              unsubscribe();
			}
		};

		self.onload = function(main) {
			// STEP: 1
			// Save shared references from Main
			// --------------------------------------------
			$notify = main.shared.notify || $fctry.new('Notify') || {};
			$api.onload(main);
          
          	subscribe();
		};
	};

	PubSub.prototype.type = function () {
		return "PubSub";
	};
	PubSub.prototype.toDto = function () {
		var self = this;
		return { };
	};
	return PubSub;
});

