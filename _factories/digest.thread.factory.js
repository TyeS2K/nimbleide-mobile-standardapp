/* DigestThread Component Manager/Factory :
*/

FACTORY.Register('DigestThread', function DigestThreadFactory() {
	var DigestThread = function (config) {
		var self = this;

		var _tmr, buffer = [];
		function startDigestThread(item) {
			buffer.push(Object.assign(item, {index: -1, total: item.items.length}));
			
			_tmr = setInterval(function() {
				var rndr, data;
				
				for (var i = 0; i < item.count; i++) {
					if (buffer.length > 0) {
						rndr = buffer[0];
						if (rndr.items.length > 0) {
							rndr.index++;
							data = rndr.items.shift();
							if (data && rndr.fn) {
								rndr.fn(data, rndr.index, rndr.total, (rndr.index == 0 && rndr.clear));
							}
						} else {
							if (rndr.cbk) { rndr.cbk(rndr); }
							buffer.shift();
						}
					} else {
						clearInterval(_tmr);
					}
				}
			}, 50);
		}
		
		self.digest = function(name, items, count, render, cbk) {
			var idx = buffer.findIndex(function(it) { return it.name == name; });
			
			if (items.length < 1) {
				if (render) { render({}, -1, 0, true); }
				if (cbk) { cbk({name: name, clear: true, items: [], index: -1, total: 0}); }
			} else {
				if (idx > -1) { buffer.splice(idx, 1); }
				startDigestThread({name: name, count: count, clear: idx > -1, items: items, fn: render, cbk: cbk});
			}
		};
	};
		
	DigestThread.prototype.type = function () {
		return "DigestThread";
	};
	DigestThread.prototype.toDto = function () {
		return { };
	};
	return DigestThread;
});
