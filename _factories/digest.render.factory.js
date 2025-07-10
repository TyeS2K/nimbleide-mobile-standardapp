/* Render Component Manager/Factory :
*/

FACTORY.Register('Render', function RenderFactory() {
	var Render = function (config) {
		var self = this;
      	var DATE_FORMAT = '#MMM# #DD#, #YYYY#';
      	var TIME_FORMAT = '#h#:#mm# #AMPM#';
		var $digest = $fctry.new('Digest');

      	function copy(obj) {
          return JSON.parse(JSON.stringify(obj));
        }
      
      	self.layout = function(parms, blClear) {
			var items = (parms && typeof(parms.items) == "string" && parms.items.isJSON()) ? JSON.parse(parms.items) : parms.items || [];
            var digest = Object.assign({ctrlKeys: copy(items)}, parms, {
              newname: parms.namepattern,
              src: {dlg: parms.src.dlg, ctrl: null, nodata: parms.src.nodata},
              after: function(item, data, index, total) {
				var x, attr, name = digest.ctrlKeys[index] || '';
                if (!total) {
                  $f.text(item.Form, item.Control + ':caption', 'No news found.');
                } else {
                  if (digest.onDone && digest.onDone[name]) {
                    if (digest.onDone[name].prop) {
                      for (x = 0; x < digest.onDone[name].prop.length; x++) {
                        attr = digest.onDone[name].prop[x];
                        $f.setprop(digest.des.dlg, attr.ctrl, attr.prop, attr.value);
                      }
                    }
                    if (digest.onDone[name].style) {
                      for (x = 0; x < digest.onDone[name].style.length; x++) {
                        attr = digest.onDone[name].style[x];
                        $f.setstyle(digest.des.dlg, attr.ctrl, attr.prop, attr.value);
                      }
                    }
                  }
                }
                if (parms.after) { parms.after(item, data, index, total); }
              },
              done: function(res) {
                // FORMAT:
                // res = {name: name, clear: T/F, items: [], index: -1, total: 0}
                console.log('Render complete: ' + res.name);
                console.log(res);
                
                if (parms.done) { parms.done(); }
              }
            });
          
          	// START DIGEST.
            $digest.render(items, digest, blClear);
		};
      	self.results = function(parms, blClear) {
			var items = (parms && typeof(parms.items) == "string" && parms.items.isJSON()) ? JSON.parse(parms.items) : parms.items || [];
          	var digest = Object.assign({}, parms, {
              newname: parms.namepattern,
              after: function(item, data, index, total) {
                if (!total) {
                  $f.text(item.Form, item.Control + ':caption', 'No news found.');
                } else {
                  // Update any digest item props.
                  if (parms.after) { parms.after(item, data, index, total); }
                }
              },
              done: function(res) {
                // FORMAT:
                // res = {name: name, clear: T/F, items: [], index: -1, total: 0}
                console.log('Render complete: ' + res.name);
                console.log(res);
                if (parms.done) { parms.done(); }
              }
            });
          
          	// START DIGEST.
            $digest.render(items, digest, blClear);
		};
        self.bydatatype = function(parms, blClear) {
			var items = (parms && typeof(parms.items) == "string" && parms.items.isJSON()) ? JSON.parse(parms.items) : parms.items || [];
          	var digest = Object.assign({
              ctrlKeys: items.map(function(it) { return rec._type; })
            }, parms, {
              newname: parms.namepattern,
              src: {dlg: parms.src.dlg, ctrl: rec._type, nodata: parms.src.nodata},
              after: function(item, data, index, total) {
                var x, attr, name = digest.ctrlKeys[index] || '';
                if (!total) {
                  $f.text(item.Form, item.Control + ':caption', 'No news found.');
                } else {
                  // Update any digest item props.
                  if (digest.onDone && digest.onDone[name]) {
                    if (digest.onDone[name].prop) {
                      for (x = 0; x < digest.onDone[name].prop.length; x++) {
                        attr = digest.onDone[name].prop[x];
                        $f.setprop(digest.des.dlg, attr.ctrl, attr.prop, attr.value);
                      }
                    }
                    if (digest.onDone[name].style) {
                      for (x = 0; x < digest.onDone[name].style.length; x++) {
                        attr = digest.onDone[name].style[x];
                        $f.setstyle(digest.des.dlg, attr.ctrl, attr.prop, attr.value);
                      }
                    }
                  }
                  if (parms.after) { parms.after(item, data, index, total); }
                }
              },
              done: function(res) {
                // FORMAT:
                // res = {name: name, clear: T/F, items: [], index: -1, total: 0}
                console.log('Render complete: ' + res.name);
                console.log(res);
                
                if (parms.done) { parms.done(); }
              }
            });
          
          	// START DIGEST.
            $digest.render(items, digest, blClear);
		};
	};
		
	Render.prototype.type = function () {
		return "Render";
	};
	Render.prototype.toDto = function () {
		return { };
	};
	return Render;
});
