/* Digest Component Manager/Factory :
*/

FACTORY.Register('Digest', function DigestFactory() {
	var Digest = function (config) {
		var self = this;

		// PARAMETERS:
		//
		// resp = API 2.0 {result: T/F, msg: $, data: "[]"} 
		//		(JSON string data array)
		//
		// targInst = $f.instname(<form>, <divname>) 
		//		String of div where UI is rendered.
		//
		/* digMap = {
        		ctrlKeys: (options array of src asset names for each dataitem)
				count: # items to digest each interval (1=default),
				src: {dlg: <copyfrom.dlg>, ctrl: <copy.ctrl>, nodata: <assets.nodata>},
				des: {dlg: <copyto.dlg>, ctrl: <copyto.ctrl>, nodata: <nodata>},
				newname: 'item(<idx>-<count>)',
				before: fn(digMap, data, index, total)
				after: fn(item, data, index, total)
		   } 
		*/

		var $thread = $fctry.new('DigestThread');
		
		self.render = function(resp, digMap, blClear) {
		  var inst = $f.instname(digMap.des.dlg, digMap.des.ctrl);
		  var arrItems = (resp && typeof(resp.data) == "string" && resp.data.isJSON()) ? JSON.parse(resp.data) : resp;
		  var blFade = arrItems.length > 1;
          
          function variance(arr) {
            arr = arr || [];
            var idx = Math.floor(arr.length * Math.random());
            
            if (arr.length > 0) {
              return arr[idx];
            } else {
              return '';
            }
          }
		  function renderElement(itmRec, index, total, blSysClear) {
			  var id, item;
			  var count, newname, ctrlname;
			
              index = index || digMap.index || 0;
              ctrlname = variance(digMap.variance) || digMap.src.ctrl || digMap.ctrlKeys[index];

			  if (blClear || blSysClear || $f.elem(digMap.des.dlg, digMap.des.nodata)) { 
                blClear = false; $f.children(digMap.des.dlg, digMap.des.ctrl, 'clear');
              }
			  if (total < 1) {
				id = $f.clone(digMap.src.dlg, digMap.src.nodata, digMap.des.nodata, inst);
                item = id.resolveName();
			  } else {
				  if (digMap.before) { digMap.before(digMap, itmRec, index, total); }
				  count = $f.children(digMap.des.dlg, digMap.des.ctrl, 'count');
                  newname = digMap.newname.replace('<idx>', index).replace('<count>', count);
				  
				  id = $f.clone(digMap.src.dlg, ctrlname, newname, inst);
				  item = id.resolveName();
				  if (digMap.push && typeof(itmRec) == 'object') {
                    $f.children(item.Form, item.Control, 'digest', itmRec);
                  }
				  $f.setprop(item.Form, item.Control, 'dataitem', JSON.stringify(itmRec));
				  if (digMap.after) { digMap.after(item, itmRec, index, total); }
			  }
		  }
		  
          if ((blFade && digMap.fade) || digMap.fadeout) { $f.setstyle(digMap.des.dlg, digMap.des.ctrl, {opacity: 0.0}); }
		  $thread.digest(digMap.name, arrItems, digMap.count || 1, renderElement, function(res) {
			if (digMap.done) { digMap.done(res); }
            if ((blFade && digMap.fade) || digMap.fadein) {
              setTimeout(function() {
              	$f.fadein(digMap.des.dlg, digMap.des.ctrl, 50);
              }, 250);
            }
            console.log('complete rendering: ' + res.name + ', ' + res.count + ' item(s).');
		  });
		};
	};
		
	Digest.prototype.type = function () {
		return "Digest";
	};
	Digest.prototype.toDto = function () {
		return { };
	};
	return Digest;
});
