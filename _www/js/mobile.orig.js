/**
 * Generated with nimble-ide v5.1 on 06/16/2025 01:14 pm.
 * Created for the nimbleJS runtime.
 * (c)2016 by Nimble Solutions, All rights reserved.
 *
 * version: 5.0
 **/
 
if (!$heap) { var $heap = { }; }
$heap.mobile = { };
$heap.mobile.Code = {
	_callback: null,
	SlideDesktop: function(oldD, newD) {
		var desk = $f.elem('desktop' + newD + '.body');
		if (!desk) return;
		
		function fadeIn() {
		    if (desk.style.opacity < 1) {
		        desk.style.opacity = (Number(desk.style.opacity) + 0.1).toFixed(2);
		        setTimeout( fadeIn, 60 );
		    } else { 
		        desk.style.opacity = 1;
		        $d.setactive(newD);
		        DESKTOP.switching = false;
		    }
		}
		
		DESKTOP.switching = true;
		desk.style.opacity = 0;
		$d.show('desktop'+ newD +'.body');
		$f.setpos('desktop' + newD + '.body', '', 0, 0);
		$f.slideto('desktop' + oldD + '.body', '', 100, 0, -1, -1, 0.25, function(anim) {
			if (anim.pos == 100) {
				$f.slideto('desktop' + oldD + '.body', '', -(1.35 * DESKTOP.width), 0, -1, -1, 0.50, function(anim) {
					if (anim.pos == 100) {
						fadeIn();
					}
				});
			}
		});
	},
	Ini: { 
	 },
	Csv: { 
	 },
	Data: { 
		"black.json": {
			'data' : '{<CR>' + 
			'	<DQ>name<DQ>: <DQ>black<DQ>,<CR>' + 
			'	<DQ>jsonType<DQ>: <DQ>palette<DQ>,<CR>' + 
			'	<DQ>data<DQ>: {<CR>' + 
			'		<DQ>b50<DQ>: <DQ>#fafafa<DQ>, <CR>' + 
			'		<DQ>b100<DQ>: <DQ>#f5f5f5<DQ>, <CR>' + 
			'		<DQ>b200<DQ>: <DQ>#eeeeee<DQ>, <CR>' + 
			'		<DQ>b300<DQ>: <DQ>#e0e0e0<DQ>, <CR>' + 
			'		<DQ>b400<DQ>: <DQ>#bdbdbd<DQ>, <CR>' + 
			'		<DQ>b500<DQ>: <DQ>#9e9e9e<DQ>, <CR>' + 
			'		<DQ>b600<DQ>: <DQ>#757575<DQ>, <CR>' + 
			'		<DQ>b700<DQ>: <DQ>#616161<DQ>, <CR>' + 
			'		<DQ>b800<DQ>: <DQ>#424242<DQ>, <CR>' + 
			'		<DQ>b900<DQ>: <DQ>#212121<DQ><CR>' + 
			'	}<CR>' + 
			'}<CR>' + 
			''
		},
		"bluegray.json": {
			'data' : '{<CR>' + 
			'	<DQ>name<DQ>: <DQ>bluegray<DQ>,<CR>' + 
			'	<DQ>jsonType<DQ>: <DQ>palette<DQ>,<CR>' + 
			'	<DQ>data<DQ>: {<CR>' + 
			'		<DQ>bg50<DQ>: <DQ>#eceff1<DQ>, <CR>' + 
			'		<DQ>bg100<DQ>: <DQ>#cfd8dc<DQ>, <CR>' + 
			'		<DQ>bg200<DQ>: <DQ>#b0bec5<DQ>, <CR>' + 
			'		<DQ>bg300<DQ>: <DQ>#90a4ae<DQ>, <CR>' + 
			'		<DQ>bg400<DQ>: <DQ>#78909c<DQ>, <CR>' + 
			'		<DQ>bg500<DQ>: <DQ>#607d8b<DQ>, <CR>' + 
			'		<DQ>bg600<DQ>: <DQ>#546e7a<DQ>, <CR>' + 
			'		<DQ>bg700<DQ>: <DQ>#455a64<DQ>, <CR>' + 
			'		<DQ>bg800<DQ>: <DQ>#37474f<DQ>, <CR>' + 
			'		<DQ>bg900<DQ>: <DQ>#263238<DQ><CR>' + 
			'	}<CR>' + 
			'}<CR>' + 
			''
		},
		"brown.json": {
			'data' : '{<CR>' + 
			'	<DQ>name<DQ>: <DQ>brown<DQ>,<CR>' + 
			'	<DQ>jsonType<DQ>: <DQ>palette<DQ>,<CR>' + 
			'	<DQ>data<DQ>: {<CR>' + 
			'		<DQ>br50<DQ>: <DQ>#efebe9<DQ>, <CR>' + 
			'		<DQ>br100<DQ>: <DQ>#d7ccc8<DQ>, <CR>' + 
			'		<DQ>br200<DQ>: <DQ>#bcaaa4<DQ>, <CR>' + 
			'		<DQ>br300<DQ>: <DQ>#a1887f<DQ>, <CR>' + 
			'		<DQ>br400<DQ>: <DQ>#8d6e63<DQ>, <CR>' + 
			'		<DQ>br500<DQ>: <DQ>#795548<DQ>, <CR>' + 
			'		<DQ>br600<DQ>: <DQ>#6d4c41<DQ>, <CR>' + 
			'		<DQ>br700<DQ>: <DQ>#5d4037<DQ>, <CR>' + 
			'		<DQ>br800<DQ>: <DQ>#4e342e<DQ>, <CR>' + 
			'		<DQ>br900<DQ>: <DQ>#3e2723<DQ><CR>' + 
			'	}<CR>' + 
			'}<CR>' + 
			''
		},
		"palette.json": {
			'data' : '{<CR>' + 
			'	<DQ>name<DQ>: <DQ>light blue<DQ>,<CR>' + 
			'	<DQ>jsonType<DQ>: <DQ>palette<DQ>,<CR>' + 
			'	<DQ>data<DQ>: {<CR>' + 
			'		<DQ>color50<DQ>: <DQ>#e1f5fe<DQ>, <CR>' + 
			'		<DQ>color100<DQ>: <DQ>#b3e5fc<DQ>, <CR>' + 
			'		<DQ>color200<DQ>: <DQ>#81d4fa<DQ>, <CR>' + 
			'		<DQ>color300<DQ>: <DQ>#4fc3f7<DQ>, <CR>' + 
			'		<DQ>color400<DQ>: <DQ>#29b6f6<DQ>, <CR>' + 
			'		<DQ>color500<DQ>: <DQ>#03a9f4<DQ>, <CR>' + 
			'		<DQ>color600<DQ>: <DQ>#039be5<DQ>, <CR>' + 
			'		<DQ>color700<DQ>: <DQ>#0288d1<DQ>, <CR>' + 
			'		<DQ>color800<DQ>: <DQ>#0277bd<DQ>, <CR>' + 
			'		<DQ>color900<DQ>: <DQ>#01579b<DQ>, <CR>' + 
			'		<DQ>colora100<DQ>: <DQ>#80d8ff<DQ>, <CR>' + 
			'		<DQ>colora200<DQ>: <DQ>#40c4ff<DQ>, <CR>' + 
			'		<DQ>colora400<DQ>: <DQ>#00b0ff<DQ>, <CR>' + 
			'		<DQ>colora700<DQ>: <DQ>#0091ea<DQ><CR>' + 
			'	}<CR>' + 
			'}<CR>' + 
			''
		}
	 },
	Lists: { 
				
		"nav.lst": [{"caption":"App","value":"app"},{"caption":"/","value":"div1"},{"caption":"Login","value":"login"}]
					 },
	i18n: { 
	 },
	Vars: { },
	
	Services: function(in_msg) {
			/**
		* Build a router to parse messages coming to
		* this applications PostBox.
		*
		* version: 5.0
		**/
		switch (in_msg.msg) {
			case 'ping':
				alert("mobile received ping sent from: " + in_msg.from);
				break;
				
			default:
		}
		
	},
	Components: {
	
	
	},
	RegisterFactories: function() {
	
		
		try {
			// Check for Node/Electron cross-compatibility.
			if (!Env.isElectron) {
				if (typeof(FACTORY) == 'undefined' && typeof(require) != 'undefined') { FACTORY = require('../factory.js'); }
			}
		} catch(err) {
			console.log(err);
		}
		/* CONFIG Component Manager/Factory :
		   NOTE: This factory should be deprecated!!!!!!
		   
		   Use the Env.factory.js file instead.
		*/
		FACTORY.Register("Config", function blankFactory() {
			var config = function () {
				var self = this;
				var urlPrm, _state = '';
		        var _ip = '127.0.0.1', home = 'https://www.nimble-ide.com';
		        var _port = 3031;
				if (!FACTORY.node) {
					urlPrm = new URL(window.location.href).searchParams;
					_state = urlPrm.get('env') || '';	//local
				}
				
		        function getQueryParams(url) {
		          url = url || window.location.href;
		          var params = {};
		          var queryString = url.split('?')[1];
		          if (!queryString) return params;
		          
		          var pairs = queryString.split('&');
		          for (var i = 0; i < pairs.length; i++) {
		            var pair = pairs[i], parts = pair.split('=');
		            params[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1] || '');
		          }
		          return params;
		        }
				
				self.port = function(blSock) {
		          return (_state != 'local') ?
		            (blSock ? (':' + _port + 1) : "") :
		            (":" + (blSock ? _port + 1 : _port));
		        };
				self.server = function(svc, blSock) {
				  svc = svc || '';
		          return (_state == 'local') ? 
		            'http://' + _ip + self.port(blSock) + '/' + svc : home + self.port(blSock) + '/' + svc;
				};
		      	self.domain = function(blSock) {
		          return (_state == 'local') ? 
		            'http://' + _ip + self.port(blSock) : home + self.port(blSock);
				};
		      	self.host = function(blSock) {
		          return (_state == 'local') ? 
		            'http://' + _ip : home;
				};
				self.update = function() {
					if (typeof(Env) != "undefined") {
					  Env.config(self);
					  Env.state(_state);
					  Env.beta_server = _ip;
					}
				};
				self.getParms = getQueryParams;
				self.update();
			};
			config.prototype.type = function () {
				return "config";
			};
			config.prototype.toDto = function () {
				return { };
			};
			return config;
		});
		if (FACTORY.node) { 
			module.exports = FACTORY.New('Config');
		} else {
			_Config = FACTORY.New('Config');
		}
		try {
			// 12-29-2024
			// Changes for Node/Electron cross-compatibility.
			var isElectron = false;
			isElectron = require('electron');
			isElectron = isElectron ? isElectron.shell : false;
		} catch(err) {
			isElectron = false;
		}
		FACTORY.Register('Env', function envFactory() {
			var _Env = function () {
				var self = this;
				var folder, ipc, shell, os;
				var envPaths;
				var win = window || {};
				var glob = globals || {};
			  
				var $config;		// This will be set by Config.factory.js
				var _state = '';	// This will be set by Config.factory.js
		        var viewport = {
		          mobile: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
		          desktop: 'width=device-width, initial-scale=1.0'
		        };
		      
				if (isElectron) {
					ipc = require('electron').ipcRenderer;
					shell = require('electron').shell;
					os = require('os');
				}
				function getPath(fldr) {
					return folder + '/' + fldr;
				}
				function getAppPath() {
					return folder;
				}
		        function setViewport(content) {
		          var existing = document.querySelector('meta[name="viewport"]');
		          if (existing) {
		            existing.setAttribute('content', content);
		          } else {
		            var meta = document.createElement('meta');
		            meta.name = 'viewport';
		            meta.content = content;
		            document.head.appendChild(meta);
		          }
		        }
		      
				envPaths = {};
				if (isElectron) {
					if (!glob.mockFS) {
						['base', 'nimblev5', 'exe', 'temp', 'videos', 'pictures', 'music', 'appData', 'userData', 'documents', 'downloads'].forEach(function(itm) {
							envPaths[itm] = (itm == 'base') ? ipc.sendSync('path', itm) : 
								(itm == 'nimblev5') ? getPath(itm) : ipc.sendSync('path', itm);
							envPaths[itm] += (itm != 'exe') ? '/' : '';
						});
					}
					self.getPath = function(name) {
						if (glob.mockFS) { return ''; }
						return envPaths[name];
					};
					self.isWin = win.os ? os.platform() == 'win32' : 'win32';
				} else {
					if (FACTORY.node) {
						folder = '../Build.node/build-server';
						
						var app = { 
							getAppPath: getAppPath,
							getPath: getPath
						};
						self.getPath = function(name) {
							if (glob.mockFS) { return ''; }
							return app.getPath(name);
						};
						
						['base', 'nimblev5', 'exe', 'temp', 'videos', 'pictures', 'music', 'appData', 'userData', 'documents', 'downloads'].forEach(function(itm) {
							envPaths[itm] = (itm == 'base') ? app.getAppPath() : 
								(itm == 'nimblev5') ? getPath(itm) : app.getPath(itm);
							envPaths[itm] += (itm != 'exe') ? '/' : '';
						});
					}
					self.isWin = false;
				}
				self.config = function(cfg) {
				  if (cfg) {
					$config = cfg;
				  } else {
					return $config;
				  }
				};
				self.state = function(st) {
				  if (st) {
					_state = st;
				  } else {
					return _state;
				  }
				};
				self.envPaths = function() {
					return JSON.parse(JSON.stringify(envPaths));
				};
			  
				self.beta_server = '';	 // This will be set by Config.factory.js
				self.isElectron = !!(isElectron);
				self.notSecure = function() { return (_state == 'local' || window.location.href.indexOf('127.0.0.1') > -1); };
				self.server = function(svc, blSock) {
				  return $config.server(svc, blSock);
				};
				self.domain = function(blSock) {
				  return $config.domain(blSock);
				};
				self.host = function() {
				  var ret = $config.host();
				  return (ret.indexOf('www.') > -1) ? ret.split('www.')[1] : 
						(ret.indexOf('://') > -1) ? ret.split('/')[2] : ret;
				};
		        self.port = function(blSock) {
		          return $config.port(blSock);
		        };
				self.getShell = function() {
				  return shell;
				};
				if (isElectron) {
					self.cmDialog = function(cfg, cbk) {
						if (glob.mockFS) { if (cbk) { cbk(''); } }
						
						var ref = ipc.on('dlg-data', function(event, result) {
							if (result) {
								result = JSON.parse(result);
							}
							ref.removeAllListeners('dlg-data');
							if (cbk) { cbk(result); }
						});
						
						ipc.send('dlg-msg', JSON.stringify(cfg));
					};
				} else {
					self.cmDialog = function(cfg, cbk) {};
				}
				self.unload = function() {
					FACTORY.UnRegister('Env');
				};
		      	self.viewport = function(mode) {
		          setViewport(viewport[mode] || viewport.desktop);
		        };
			};
			_Env.prototype.type = function () {
				return "Env";
			};
			_Env.prototype.toDto = function () {
				return { };
			};
			return _Env;
		});
		if (FACTORY.node) { 
			module.exports = FACTORY.New('Env');
		} else {
			Env = FACTORY.New('Env');
			if (typeof(_Config) != "undefined") {
				_Config.update();
			}
		}
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
		/* Login Manager Component Manager/Factory :
		   
		*/
		FACTORY.Register("LoginAPI", function loginFactory() {
			var login = function (config) {
				var self = this;
		      	var _sv, _dlg, _app = '';
		      	var server = '';
		      	var _prev = [];
				// 'global', 'home', etc..
		      	self.appContext = function(app) {
		          if (url) {
		            _app = app;
		          } else {
		            return _app;
		          }
		        };
				
				// Overwrite the domain server to login.
		      	self.domain = function(url) {
		          if (url) {
		            server = url;
		          } else {
		            return server;
		          }
		        };
				self.initMethods = function(dlg) {
		          _dlg = dlg;
		          server = Env ? Env.domain() : 'https://www.nimble-ide.com';
		          
		          var url = window.location.href, uiReady = false; 
		          var parmMap = {
		            p: 'post',
		            t: 'wintype',
		            s: 'redir',
		            f: 'fail',
		            l: 'lic',
		            c: 'count',
		            v: 'verify'
		          };
		          if (!window.ajax) {
		            window.ajax = function(type, api, payload, fn) {
		              $ajx.call({
		                type: type,
		                dataType: payload ? 'text' : '',
		                url: server + '/' + (api ? api + '/' : ''),
		                data: payload,
		                headers: {
		                  'content-type': payload ? 'application/json' : 'text/plain;charset=UTF-8',
		                  'accept': '*/*'
		                },
		                success: function(resp) {
		                  var ary;
		                  if (payload && payload.version == 2.0) {
		                    ary = JSON.parse(resp);
		                    if (fn) { fn('ok', ary); }
		                  } else {
		                    ary = resp.split(':');
		                  	if (fn) { fn(ary.shift() || "", ary.join(':') || ""); }
		                  }
		                },
		                error: function(xhr, opt, err) {
		                  if (typeof(AppEvents) != 'undefined' && AppEvents.msg) {
		                    AppEvents.msg.post({
		                      title: 'Error: ping',
		                      msg: 'Server Unreachable. Check network configuration.',
		                    });
		                  }
		                  console.log('Error: "' + api + '" API - ' + xhr.status + ' : ' + err);
		                }
		              });
		            };
		          }
		          window.win_fetch = function(msg) {
		            if (ipcRenderer) {
		              return ipcRenderer.sendSync('synchronous-message', JSON.stringify(msg));
		            } else {
		                  switch (msg.cmd) {
		                      case 'set':
		                          window[msg.data] = msg.value;
		                          break;
		                      case 'setuser':
		                          window.user = msg.data;
		                          break;
		                      case 'get':
		                          return window[msg.data] || '';
		                      case 'nav':
		                          if (window.wintype == 'iframe' || msg.data.indexOf('file:') > -1) {
		                            window.postMessage(JSON.stringify(msg));
		                          } else { window.location.href = msg.data; }
		                          break;
		                  }
		            }
		          };
		          window.wintype = ''; window.redir = ''; window.post = ''; window.fail = ''; window.lic = ''; window.count = 0;
		          window.authComplete = function(usr, sessid, cbk) {
		            // Add a delay so popup window is dismissed.
		            if (sessid) win_fetch({cmd: 'set', data: 'sessid', value: sessid || ''});
		            setTimeout(function() {
		              var path, url, win;
		              var user = usr, sessdata;
		              function startApp() {
		                var sess = redir.indexOf('?') > -1 ?
		                    '&id=' + win_fetch({cmd: 'get', data: 'token'}) : '?id=' + win_fetch({cmd: 'get', data: 'token'});
		                sess += '&year=' + (new Date()).getFullYear() + '&img=' + user.image;
		                // Create a Mobile pcid, pcos similar to electron.
		                if (redir.indexOf('#app#') > -1) {
		                  if (AppEvents && AppEvents.startSession) {
		                    delete user.token;
		                    window.USER = Object.assign(window.USER, user, {sessid: sessid, pcid: '', pcos: ''});
		                    if (USER.sessid && !USER.acct) {
		                      _sv = _secureacct(_sv);
		                    }
		                    sessdata = win_fetch({cmd: 'get', data: 'sessid'});
		                    
		                    // CleanUP:
		                    delete window.user;
		                    delete window.ajax;
		                    delete window.wintype;
		                    // delete window.win_fetch;
		                    delete window.authComplete;
		                    AppEvents.startSession(sessdata);
		                  }
		                } else if (redir.indexOf('file:///') > -1) {
		                  win_fetch({cmd: 'nav', data: win_fetch({cmd: 'get', data: 'redir'}) + sess});
		                } else if (redir.indexOf('file:') > -1) {
		                  win_fetch({cmd: 'nav', data: 'file:///' + win_fetch({cmd: 'get', data: 'path'}) + '/' + redir.split(':')[1] + sess});
		                } else {
		                  redir += sess;
		                  win_fetch({cmd: 'nav', data: 'https://' + window.domain + '/' + redir});
		                }
		                
		                if (cbk) cbk();
		              }
		              
					  function verifyLogin() {
						  var payload = {
							  version: 2.0,
							  token: user.token
						  };
						  if (win_fetch({cmd: 'get', data: 'verify'})) {
							  ajax('POST', win_fetch({cmd: 'get', data: 'verify'}), payload, function(hStatus, msg) {
								  if (hStatus == 'ok') {
									 win_fetch({cmd: 'set', data: 'sessid', value: msg.data || ''});
									 startApp();
								  }
							  });
						  } else {
							  startApp();
						  }
					  }
		              blElectron = (window && window.process && window.process.type && require);
		              if (blElectron) {
		                remote = require('electron').remote;
		                path = require('path');
		                url = require('url');
		                win = window.glbWin || {};
		              }
		              win_fetch({cmd: 'setuser', data: user});
		              if (post) {
		                ajax('POST', post, user, function(hStatus, hResp) {
		                  if (hStatus == 'ok') { 
		                    verifyLogin(); 
		                  }
		                });
		              } else { verifyLogin(); }
		            }, 800);
		          };
		          window.authFailure = function() {
		            count++;
		            if (count > 2) { 
		              window.location.href = window.fail;
		            } else {
		              window.location.href = window.base + '?' +
		                'p=' + window.post + '&' +
		                's=' + window.redir + '&' +
		                'f=' + window.fail + '&' +
		                'l=' + window.lic + '&' +
		                'c=' + window.count;
		            }
		          };
		          // Save the base domain name.
		          window.domain = url.split('/')[2] || server;
		          
		          // *************
		          // *   START   *
		          // *************
		          ajax('GET', 'ping', null, function(resp, data) {
		            // Pull out parameters.
		            url = url.split(/\?|\&/);
		            window.base = url[0];
		            
		            // Map Parameters from URL.
		            url.forEach(function(itm) {
		              if (itm.split('=')[1]) {
		                if (parmMap[itm.split('=')[0]]) window[parmMap[itm.split('=')[0]]] = itm.split('=')[1];
		              }
		            });
		            
		            // If No redirect URL, simply close app.
		            if (!window.redir) { window.redir = '#app#'; }
		          });
				};
		      
				self.addListener = function() {
				  window.addEventListener('message', function(e) {
		              var msg = JSON.parse(e.data);
		            
		              switch (msg.cmd) {
		                case 'enable':
		                case 'disable':
		                case 'hide':
		                case 'show':
		                  if (msg.data) { $f[msg.cmd](_dlg, msg.data); }
		                  break;
		                case 'reload':
		                  window.location.reload();
		                  break;
		                case 'nav':
		                  window.location.href = msg.data;
		                  break;
		                case 'log':
		                  console.log('iframe: ' + msg.data);
		                  break;
		                case 'close':
		                  break;
		              }
		          });
		          if (window.parent) window.parent.postMessage(JSON.stringify({cmd: 'onload', data: ''}), '*');
				};
		       	self.postLogin = function(dlg, cbk) {
		          dlg = dlg || 'loginmain';
		          
		          var ui = $f.pull(dlg, true);
		          var user = {};
		          var payload = {
		            login: ui.username || ui.login,
		            pass: ui.password || ui.pass
		          };
		          payload = Object.assign({ version: 2.0, appkey: _app || 'global'}, payload);
		          ajax('POST', 'login', payload, function(resp, msg) {
		              if (resp == 'ok' && msg.result) {
		                  user.token = msg.data;
		                  win_fetch({cmd: 'set', data: 'token', value: user.token || ''});
		              
		              	  // fetch profile from token
		              	  ajax('POST', 'me/' + user.token, {fields: 'id,sessionid,type,app,pubkey,name,email,firstname,lastname,image'}, function(resp, data) {
		                  	if (resp == 'ok') {
		                      var profile = JSON.parse(data);
		                      
		                      console.log('Good to see you, ' + profile.name + '.');
		                      user.type = 'nimblesolutions';
		                      user.access = profile.type;
		                      user.isAdmin = (profile.type == 'admin');
		                      user.isOwner = (profile.type == 'owner');
		                      user.app = profile.app || 'global';
		                      user.pubid = profile.id;
		                      user.firstname = profile.firstname;
		                      user.lastname = profile.lastname;
		                      user.name = profile.name;
		                      user.pubkey = profile.pubkey;
		                      user.sessionImg = profile.image || '';
		                      user.email = profile.email;
		                      // Complete login process.
		                      window.authComplete(user, profile.sessionid, function() {
		                        if (cbk) cbk(true, user);
		                      });
		                  	} else {
		                      self.showError('Access Denied', 'Invalid user profile.');
		                      if (cbk) cbk(false);
		                    }
		                  });
		              } else {
		                self.showError('Access Denied', 'Invalid login or password.');
		                if (cbk) cbk(false);
		              }
		            });
		        };
		        self.postLogout = function(cbk) {
		          var payload = {
		            version: 2.0,
		            pubid: USER.acct.pubid,
		            sessid: USER.acct.sessionId
		          };
		          
		          ajax('POST', 'logout', payload, function(resp, data) {
		            console.log('Goodbye, ' + USER.acct.name + '.');
		            delete USER.acct;
		            USER.data = {};
		            
		            if (cbk) cbk();
		          });
		        };
		      
		      	self.postRegister = function(dlg, cbk) {
		          dlg = dlg || 'frmmain';
		          var user = {}, payload = $f.pull(dlg, true);
		          payload = Object.assign({ version: 2.0, appkey: _app || 'global'}, payload);
		          ajax('POST', 'register', payload, function(resp, data) {
		              var msgObj;
		              if (resp == 'ok') {
		                msgObj = {
		                  title: 'Success',
		                  msg: 'A confirmation link has been sent to your email address. Please click the link.'
		                };
		              } else {
						msgObj = {
		                  title: 'Ooops!',
		                  msg: 'Registration failed or already exists.'  // update this with better messaging.
		                };
		              }
		            
		              if (cbk) { cbk(resp, msgObj); }
		            });
		          
		        };
		      	self.postForgot = function(dlg, cbk) {
		          dlg = dlg || 'frmmain';
		          var user = {}, payload = $f.pull(dlg, true);
		          payload = Object.assign({ version: 2.0, appkey: _app || 'global'}, payload);
		          ajax('POST', 'forgot', payload, function(resp, data) {
		              var msgObj;
		              if (resp == 'ok') {
						msgObj = {
		                  title: 'Account found.',
		                  msg: 'A reset code has been sent to your email address. (Allow up to 10 minutes.)'
		                };
		              } else {
						msgObj = {
		                  title: 'Ooops!',
		                  msg: 'Msg: ' + data
		                };
		              }
		              if (cbk) { cbk(resp, msgObj); }
		            });
		        };
		      	self.postReset = function(dlg) {
		          dlg = dlg || 'loginreset';
		          var user = {}, payload = $f.pull(dlg, true);
		          payload = Object.assign({ version: 2.0, appkey: _app || 'global'}, payload);
		          ajax('POST', 'changepw', payload, function(resp, data) {
		              var msgObj;
		              if (resp == 'ok') {
		                msgObj = {
		                  title: 'Success!',
		                  msg: 'You password has been reset successfully.'
		                };
		              } else {
		                msgObj = {
		                  title: 'Ooops!',
		                  msg: 'Msg: ' + data
		                };
		              }
		            
		              if (cbk) { cbk(resp, msgObj); }
		            });
		        };
		      	self.showError = function(title, msg) {
		          AppEvents.msg.post({
		            title: title,
		            msg: msg
		          });
		        };
				self.onload = function(main) {
		          Env = main.shared.env || $fctry.new('Env') || {};
		          server = Env ? Env.domain() : 'https://www.nimble-ide.com';
		        };
			};
		  
			login.prototype.type = function () {
				return "login";
			};
			login.prototype.toDto = function () {
				var self = this;
				return { };
			};
			return login;
		});
		
		/* Forgot Component Manager/Factory :
		   A template factory example.
		*/
		FACTORY.Register("Forgot", function ForgotFactory() {
			var Forgot = function (config) {
				var self = this;
		      	var $api, $views, $reset, $strings, $login;
				var _tmr;
		      	function initValidation() {
		          var checks = { 
		            email: {
		              presence: { allowEmpty: false, message: "is required." },
		              email: { message: "doesn't look like a valid email." }
		            },
		            login: {
		              presence: { allowEmpty: false, message: "is required." },
		              length: { minimum: 6, tooShort: "must be a minimum of 6 chars.", maximum: 28, tooLong: "can be a maximum of 28 chars." }
		            }
		          };
		          return {
		            rules: checks,
		            validate: function() {
		                var fld, obj = $f.pull('frmmain', true);
		               // Clear state
		               for (fld in obj) {
		                 $f.setprop('frmmain', 'forgot:' + fld, 'title', '');
		                 $f.setstyle('frmmain', 'forgot:' + fld, 'border-color', '#222'); 
		               }
		               // Validate & highlight.
		               var result = validate(obj, this.rules);
		               if (result && Object.keys(result).length == 2) {
		                 for (fld in result) {
		                   if ($views.curView() == "forgot") {
		                     AppEvents.err.post({
		                       title: 'ERROR:',
		                       msg: result[fld][0]
		                     });
		                   }
		                   $f.setprop('frmmain', 'forgot:' + fld, 'title', result[fld][0]);
		                   $f.setstyle('frmmain', 'forgot:' + fld, 'border-color', 'red'); 
		                 }
		                 return result;
		               } else { return null; }
		            }
		          };
		        }
		      	function validateForm() {
		            var hnd = initValidation();
		          	var result = hnd.validate();
		          	$f[result ? 'disable' : 'enable']("frmmain", "forgot:btnreset");
		        }
		      	function check() {
		          if (_tmr) {
		            clearTimeout(_tmr);
		            _tmr = null;
		          }
		          _tmr = setTimeout(validateForm, 250);
		        }
		      
				// Create your Events.
		      	self.show = function(_api) {
		          $api = _api || {};
		          $views.show('forgot', null, null, function() {
		            //center in frmmain,content
		            $f.setstyle('frmmain', 'forgot', {
		              'margin-top': Math.floor((DESKTOP.height - 300) / 2) + 'px'
		            });
		            $f.fadein('frmmain', 'content', 50);
		          });
		        };
		        self.hide = function() {
		          $views.hide('forgot');
		        };
		      	self.unload = function() {
		          $views.unload('forgot');
		          $login.show();
		        };
				self.events = {
					onload: function(e, itm) {
		              if ($d.isenabled()) {
		                  $f.setprop('frmmain', 'forgot', 'tag', 'yes');
		                  $d.disable();
		              }
					},
					emailBlur: function(e, itm) {
		              var obj = $f.pull('frmmain', true);
		              if (obj.email || obj.login) $f.enable('frmmain', 'forgot:btnreset');
					},
					loginBlur: function(e, itm) {
		              var obj = $f.pull('frmmain', true);
		              if (obj.email || obj.login) $f.enable('frmmain', 'forgot:btnreset');
					},
					resetClick: function(e, itm) {
		              var obj = $f.pull('frmmain', true);
		              var result = !(obj.email || obj.login);
		              if (!result) {
		                  $api.postForgot('frmmain', function(res, msgObj) {
		                    AppEvents.msg.post(msgObj);
		                  });
		              } else { $f[result ? 'disable' : 'enable']("frmmain", "forgot:btnreset"); }
					},
					activate: function(e, itm) {
		              $f.zindex('frmmain', 10);
		              $f.setfocus('frmmain', 'forgot:login');
		              $f.disable('frmmain', 'forgot:btnreset');
					},
					beforeunload: function(e, itm) {
		              if ($f.getprop('frmmain', 'forgot', 'tag')) { $d.enable(); }
		              $f.setprop('frmmain', 'forgot', 'tag', '');
		              self.hide();
					},
					closeClick: function(e, itm) {
		              if ($f.getprop('frmmain', 'forgot', 'tag')) { $d.enable(); }
		              $f.setprop('frmmain', 'forgot', 'tag', '');
		              self.unload();
					},
		            validate: function(e, itm) {
		              check();
					},
					emailKeyDown: function(e, itm) {
		              if (e.which == 13) {
		                  self.forgot.resetClick(e, itm);
		              } else {
		                  var obj = $f.pull('frmmain', true);
		                  if (obj.email || obj.login) { $f.enable('frmmain', 'forgot:btnreset'); }
		              }
		              check();
					},
					loginKeyDown: function(e, itm) {
		              if (e.which == 13) {
		                  self.forgot.resetClick(e, itm);
		              } else {
		                  var obj = $f.pull('frmmain', true);
		                  if (obj.email || obj.login) { $f.enable('frmmain', 'forgot:btnreset'); }
		              }
		              check();
					}
				};
				// When a child factory onLoad is trigger,
				// attach any methods/object from main.
				self.onload = function(main) {
		          Env = main.shared.env || $fctry.new('Env') || {};
		          $strings = main.shared.strings || $fctry.new('Strings') || {};
		          $views = main.shared.views || $fctry.new('Views') || {};
		          
		          // Reset Dialog Controller
		          $reset = main.shared._reset || $fctry.new('Reset') || {};
		          $login = main.shared._login || $fctry.new('Login') || {};
				};
			};
			Forgot.prototype.type = function () {
				return "Forgot";
			};
			Forgot.prototype.toDto = function () {
				var self = this;
				return { };
			};
			return Forgot;
		});
		
		/* Login Component Manager/Factory :
		   A template factory example.
		*/
		FACTORY.Register("Login", function LoginFactory() {
			var Login = function (config) {
				var self = this;
				var _tmr;
		     	var $api, $views, $strings, $reset, $forgot, $register;
		      
		      	function initValidation() {
		          var checks = { 
		              login: {
		                presence: { allowEmpty: false, message: "is required." },
		                length: { minimum: 5, tooShort: "must be a minimum of 5 chars.", maximum: 60, tooLong: "can be a maximum of 60 chars." }
		              },
		              password: {
		                presence: { allowEmpty: false, message: "is required." },
		                length: { minimum: 4, tooShort: "must be a minimum of 4 chars.", maximum: 28, tooLong: "can be a maximum of 28 chars." }
		              }
		          };
		          return {
		            rules: checks,
		            validate: function() {
		               var fld, obj = $f.pull('frmmain', true);
		               // Clear state
		               for (fld in obj) {
		                 $f.setprop('frmmain', 'login:' + fld, 'title', '');
		                 $f.setstyle('frmmain', 'login:' + fld, 'border-color', '#222'); 
		               }
		               // Validate & highlight.
		               var result = validate(obj, this.rules);
		               for (fld in result) {
		                 if ($views.curView() == "login") {
		                   AppEvents.err.post({
		                     title: 'ERROR:',
		                     msg: result[fld][0]
		                   });
		                 }
		                 $f.setprop('frmmain', 'login:' + fld, 'title', result[fld][0]);
		                 $f.setstyle('frmmain', 'login:' + fld, 'border-color', 'red'); 
		               }
		               return result;
		            }
		          };
		        }
		      	function validateForm() {
		            var hnd = initValidation();
		          	var result = hnd.validate();
		          	$f[result ? 'disable' : 'enable']("frmmain", "login:btnlogin");
		        }
		      	function check() {
		          if (_tmr) {
		            clearTimeout(_tmr);
		            _tmr = null;
		          }
		          _tmr = setTimeout(validateForm, 250);
		        }
				// Create your Events.
		      	self.show = function() {
		          $views.show('login', null, null, function() {
		            //center in frmmain,content
		            $f.setstyle('frmmain', 'login', {
		              'margin-top': Math.floor((DESKTOP.height - 360) / 2) + 'px'
		            });
		            $f.fadein('frmmain', 'content', 50);
					self.events.onload();
		          });
		        };
		        self.hide = function() {
		          $views.hide('login');
		        };
		      	self.unload = function() {
		          $views.unload('login');
		        };
				
				self.events = {
					onload: function(e, itm) {
		              $api.initMethods('frmmain');
		              $f.setfocus('frmmain', 'login:login');
					},
		          	activate: function(e, itm) {
		              $api.addListener();
					},
		            resetClick: function(e, itm) {
		              $reset.show($api);
					},
		            registerClick: function(e, itm) {
		              $register.show($api);
					},
		            loginClick: function(e, itm) {
		              var user = {};
		              $api.postLogin('frmmain', function(blStatus, user) {
		                // login complete
		                AppEvents.msg.post({
		                  title: 'Success:',
		                  msg: 'Login complete!'
		                });
		              });
		            },
		            logoutClick: function(e, itm) {
		              AppEvents.msg.post({
		                title: 'Logging out...',
		                msg: ''
		              });
		              $api.postLogout(function() {
		                 AppEvents.msg.post({
		                  title: 'Status:',
		                  msg: 'Logout complete.'
		                });
		              });
					},
		            cancelClick: function(e, itm) {
					},
		            loginKeyDown: function(e, itm) {
		              if (e.which == 13) {
		                  $f.setfocus('frmmain', 'login:password');
		              }
					},
		            passKeyDown: function(e, itm) {
		              var hnd, result;
		              
		              if (e.which == 13) {
		                 self.events.loginClick(e, itm);
		              } else {
		               	 check();
		              }
					},
		            validate: function(e, itm) {
		              check();
					},
		          	forgotClick: function(e, itm) {
		              $forgot.show($api);
		            }
				};
				// When a child factory onLoad is trigger,
				// attach any methods/object from main.
				self.onload = function(main) {
		          Env = main.shared.env || $fctry.new('Env') || {};
		          $api = $fctry.new('LoginAPI') || {};
		          
		          $strings = main.shared.strings || $fctry.new('Strings') || {};
		          $views = main.shared.views || $fctry.new('Views') || {};
		          
		          $reset = main.shared._reset || $fctry.new('Reset') || {};
		          $forgot = main.shared._forgot || $fctry.new('Forgot') || {};
		          $register = main.shared._register || $fctry.new('Register') || {};
				};
			};
			Login.prototype.type = function () {
				return "Login";
			};
			Login.prototype.toDto = function () {
				var self = this;
				return { };
			};
			return Login;
		});
		
		/* Register Component Manager/Factory :
		   A template factory example.
		*/
		FACTORY.Register("Register", function RegisterFactory() {
			var Register = function (config) {
				var self = this;
				var _tmr;
		        var $api, $views, $strings, $login;
		      	function initValidation() {
		          var checks = { 
		            login: {
		              presence: { allowEmpty: false, message: "is required." },
		              length: { minimum: 5, tooShort: "must be a minimum of 5 chars.", maximum: 40, tooLong: "can be a maximum of 40 chars." }
		            },
		            password: {
		              presence: { allowEmpty: false, message: "is required." },
		              length: { minimum: 8, tooShort: "must be a minimum of 4 chars.", maximum: 28, tooLong: "can be a maximum of 28 chars." }
		            },
		            confirm: {
		              equality: "password",
		              presence: { minimum: 8, allowEmpty: false, message: "is required." },
		            },
		            email: {
		              presence: { allowEmpty: false, message: "is required." },
		              email: { message: "doesn't look like a valid email." }
		            },
		          };
		          return {
		            rules: checks,
		            validate: function() {
		               var fld, obj = $f.pull('frmmain', true);
		               // Clear state
		               for (fld in obj) {
		                 $f.setprop('frmmain', 'register:' + fld, 'title', '');
		                 $f.setstyle('frmmain', 'register:' + fld, 'border-color', '#222'); 
		               }
		               // Validate & highlight.
		               var result = validate(obj, this.rules);         
		               for (fld in result) {
		                 if ($views.curView() == "register") {
		                   AppEvents.err.post({
		                     title: 'ERROR:',
		                     msg: result[fld][0]
		                   });
		                 }
		                 $f.setprop('frmmain', 'register:' + fld, 'title', result[fld][0]);
		                 $f.setstyle('frmmain', 'register:' + fld, 'border-color', 'red'); 
		               }
		               return result;
		            }
		          };
		        }
		      	function validateForm() {
		            var hnd = initValidation();
		          	var result = hnd.validate();
		          	$f[result ? 'disable' : 'enable']("frmmain", "register:btnregister");
		        }
		      	function check() {
		          if (_tmr) {
		            clearTimeout(_tmr);
		            _tmr = null;
		          }
		          _tmr = setTimeout(validateForm, 250);
		        }
		      
				// Create your Events.
		      	self.show = function(_api) {
		          $api = _api || {};
		          $views.show('register', null, null, function() {
		            //center in frmmain,content
		            $f.setstyle('frmmain', 'register', {
		              'margin-top': Math.floor((DESKTOP.height - 360) / 2) + 'px'
		            });
		            $f.fadein('frmmain', 'content', 50);
		          });
		        };
		        self.hide = function() {
		          $views.hide('register');
		        };
		      	self.unload = function() {
		          $views.unload('register');
		          $login.show();
		        };
				self.events = {
					onload: function(e, itm) {
		              if ($d.isenabled()) {
		                  $f.setprop('frmmain', 'register', 'tag', 'yes');
		                  $d.disable();
		              }
					},
					activate: function(e, itm) {
		              $f.zindex('frmmain', 10);
		              $f.setfocus('frmmain', 'register:login');
		              $f.disable('frmmain', 'register:btnregister');
					},
					closeClick: function(e, itm) {
		              if ($f.getprop('frmmain', 'register', 'tag')) { $d.enable(); }
		              $f.setprop('frmmain', 'register', 'tag', '');
		              self.unload();
					},
					registerClick: function(e, itm) {
		              var hnd = initValidation();
		              var result = hnd.validate();
		              if (!result) {
		                self.hide();
		                $api.postRegister('frmmain', function(resp, msgObj) {
		                  AppEvents.msg.post(msgObj);
		                });
		              } else { $f[result ? 'disable' : 'enable']("frmmain", "register:btnregister"); }
					},
					beforeunload: function(e, itm) {
		              if ($f.getprop('frmmain', 'register', 'tag')) $d.enable();
		              $f.setprop('frmmain', 'register', 'tag', '');
		              self.hide();
					},
					validate: function(e, itm) {
		              check();
					},
					emailKeyDown: function(e, itm) {
		              if (e.which == 13) {
		                  $f.setfocus('frmmain', 'register:password');
		              } else {
		                  check();
		              }
					},
					passwordKeyDown: function(e, itm) {
		              if (e.which == 13) {
		                  $f.setfocus('frmmain', 'register:confirm');
		              } else {
		                  check();
		              }
					},
					confirmKeyDown: function(e, itm) {
		              if (e.which == 13) {
		                  self.register.register(e, itm);
		              } else {
		                  check();
		              }
					},
					loginKeyDown: function(e, itm) {
		              if (e.which == 13) {
		                  $f.setfocus('frmmain', 'register:email');
		              } else {
		                  check();
		              }
					}
				};
				// When a child factory onLoad is trigger,
				// attach any methods/object from main.
				self.onload = function(main) {
		          Env = main.shared.env || $fctry.new('Env') || {};
		          $strings = main.shared.strings || $fctry.new('Strings') || {};
		          $views = main.shared.views || $fctry.new('Views') || {};
		          
		          // Dialog Controller
		          $login = main.shared._login || $fctry.new('Login') || {};
				};
			};
			Register.prototype.type = function () {
				return "Register";
			};
			Register.prototype.toDto = function () {
				var self = this;
				return { };
			};
			return Register;
		});
		
		/* Reset Component Manager/Factory :
		   A template factory example.
		*/
		FACTORY.Register("Reset", function ResetFactory() {
			var Reset = function (config) {
				var self = this;
				var _tmr;
		      	var $api, $views, $strings, $login;
		      
		      	function initValidation() {
		          var checks = { 
		            email: {
		              presence: { allowEmpty: false, message: "is required." },
		              email: { message: "doesn't look like a valid email." }
		            },
		            newpw: {
		              presence: { allowEmpty: false, message: "is required." },
		              length: { minimum: 6, tooShort: "must be a minimum of 6 chars.", maximum: 28, tooLong: "can be a maximum of 28 chars." }
		            },
		            confirm: {
		              equality: {
		                attribute: "newpw",
		                message: "password is not equal.",
		                comparator: function(v1, v2) { return v1 == v2; }
		              },
		              presence: { allowEmpty: false, message: "is required." },
		            },
		            token: {
		              presence: { allowEmpty: false, message: "is required." },
		              length: 6
		            },
		          };
		        return {
		          rules: checks,
		          validate: function() {
		              var fld, obj = $f.pull('frmmain', true);
		             // Clear state
		             for (fld in obj) {
		               $f.setprop('frmmain', 'reset:' + fld, 'title', '');
		               $f.setstyle('frmmain', 'reset:' + fld, 'border-color', '#222'); 
		             }
		             // Validate & highlight.
		             var result = validate(obj, this.rules);
		             for (fld in result) {
		               if ($views.curView() == "reset") {
		                 AppEvents.err.post({
		                   title: 'ERROR:',
		                   msg: result[fld][0]
		                 });
		               }
		               $f.setprop('frmmain', 'reset:' + fld, 'title', result[fld][0]);
		               $f.setstyle('frmmain', 'reset:' + fld, 'border-color', 'red'); 
		             }
		             return result;
		          }
		        };
		        }
		      	function validateForm() {
		            var hnd = initValidation();
		          	var result = hnd.validate();
		          	$f[result ? 'disable' : 'enable']("frmmain", "reset:btnupdate");
		        }
		      	function check() {
		          if (_tmr) {
		            clearTimeout(_tmr);
		            _tmr = null;
		          }
		          _tmr = setTimeout(validateForm, 250);
		        }
		      
				// Create your Events.
		      	self.show = function(_api) {
		          $api = _api || {};
		          $views.show('reset', null, null, function() {
		            //center in frmmain,content
		            $f.setstyle('frmmain', 'reset', {
		              'margin-top': Math.floor((DESKTOP.height - 350) / 2) + 'px'
		            });
		            $f.fadein('frmmain', 'content', 50);
		          });
		        };
		        self.hide = function() {
		          $views.hide('reset');
		        };
		      	self.unload = function() {
		          $views.unload('reset');
		          $login.show();
		        };
				self.events = {
					onload: function(e, itm) {
		              if ($d.isenabled()) {
		                  $f.setprop('frmmain', 'reset', 'tag', 'yes');
		                  $d.disable();
		              }
					},
					activate: function(e, itm) {
		              $f.zindex('frmmain', 10);
		              $f.setfocus('frmmain', 'reset:email');
		              $f.disable("frmmain", "reset:btnupdate");
					},
					beforeunload: function(e, itm) {
		              if ($f.getprop('frmmain', 'reset', 'tag')) { $d.enable(); }
		              $f.setprop('frmmain', 'reset', 'tag', '');
		              self.hide();
					},
					resetClick: function(e, itm) {
		              var hnd = initValidation();
		              var result = hnd.validate();
		              if (!result) {
		                  $api.resetPost('frmmain', function(resp, msgObj) {
		                    AppEvents.msg.post(msgObj);
		                  });
		              } else {
		                  $f[result ? 'disable' : 'enable']("frmmain", "reset:btnupdate");
		              }
					},
					closeClick: function(e, itm) {
		              if ($f.getprop('frmmain', 'reset', 'tag')) { $d.enable(); }
		              $f.setprop('frmmain', 'reset', 'tag', '');
		              self.unload();
					},
					validate: function(e, itm) {
		              check();
					},
		          	newPwKeyDown: function(e, itm) {
		              if (e.which == 13) {
		                  $f.setfocus('frmmain', 'reset:confirm');
		              }
		              check();
		            },
		          	confirmKeyDown: function(e, itm) {
		              if (e.which == 13) {
		                  $f.setfocus('frmmain', 'reset:token');
		              }
		              check();
		            },
		          	tokenKeyDown: function(e, itm) {
		              if (e.which == 13) {
		              	  $f.setfocus('frmmain', 'reset:newpw');
		                  self.reset.resetClick(e, itm);
		              } else {
		               	  validateForm();
		              }
		            }
				};
				// When a child factory onLoad is trigger,
				// attach any methods/object from main.
				self.onload = function(main) {
		          Env = main.shared.env || $fctry.new('Env') || {};
		          $strings = main.shared.strings || $fctry.new('Strings') || {};
		          $views = main.shared.views || $fctry.new('Views') || {};
		          
		          // Dialog Controller
		          $login = main.shared._login || $fctry.new('Login') || {};
				};
			};
			Reset.prototype.type = function () {
				return "Reset";
			};
			Reset.prototype.toDto = function () {
				var self = this;
				return { };
			};
			return Reset;
		});
		
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
		
		/* Main Component Manager/Factory :
		   A template factory example.
		   Updated: 1-28-2025
		*/
		FACTORY.Register("Events", function MainFactory() {
			var Main = function (config) {
				var self = this;
				// STEP 1:
				// Attach factories/dependencies that you 
				// want to share between UI factories.
				// ----------------------------------------
				var $config = $fctry.new('Config');
		        if (typeof(Env) == 'undefined') { Env = $fctry.new('Env'); $config.update(); }
		      
		      	var $app = null; // $fctry.new('Application');
		      
				var $pubsub = $fctry.new('PubSub');
				var $strings = $fctry.new('Strings');
		      	var $notify = $fctry.new('Notify');
		      	var $session = $fctry.new('Session');
		      	var $route = $fctry.new('Route');
		      	var $views = $fctry.new('Views');
		      	var $footer = $fctry.new('FooterButtons');
				var $side = $fctry.new('SideMenu');
		      
		      	self.login = $fctry.new('Login');
		      	self.register = $fctry.new('Register');
		      	self.reset = $fctry.new('Reset');
		      	self.forgot = $fctry.new('Forgot');
		      
		      	self.shared = { 
		          env: Env, 
		          strings: $strings, 
		          views: $views,
		          route: $route,
		          notify: $notify,
		          
		          _login: self.login,
		          _register: self.register,
		          _reset: self.reset,
		          _forgot: self.forgot
		        };
		      
		      	self.startSession = function(sessid) {
				  // Trigger this after a user has logged into
				  // the site and created a sessionid.
		          function start() {
		            self.login.unload();
		            if ($app) {
		              $app.events.init();
		              $app.events.start();
		            } else {
		              // Load Title Image
		              $notify.publish('show-view', {
		                "name": "successImage",
		                "namepattern": "loginok",
		                "src": { "dlg": "appassets", "nodata": "nodata" },
		                "des": { "dlg": "frmmain", "ctrl": "content", "nodata": "nocontent" },
		                "items": [ "success" ],
		                "push": false,"clear": true,"fadeout": false,"onDone": {
		                  "success": {
		                    "style": [
		                      { ctrl: "loginok", prop: 'div.margin-top', value: Math.floor((DESKTOP.height - 300) / 2) + 'px' }
		                    ]
		                  }
		                }
		              });
		            }
		            
		            // Add Main Footer icon buttons.
		            $footer.showMain();
		            
		            // Show Nave and Footer bars.
		            self.main.toggleHeader(true);
		            self.main.toggleFooter(true);
		            self.main.clearPopups();
		            
		            //Load Side Menu.
		            $side.load();
		          }
		          
				  // Login Complete.
		          // - Current sessionID passed as sessid. 
		          // - Current User Details located on USER.acct.
		          if (USER.token && !USER.acct) {
		            $rest.post($nim.core_server + 'me/' + USER.token, {clear: false, fields: 'type,firstname,lastname,email'}, function(resp, data) {
		              var regcode;
		              if (resp == 'ok' && data) {
		                data = sdkString.restJson(data);
		                USER.isAdmin = (data.type == 'admin');
		                USER.isPaid = false;
		                USER.type = data.type;
		                USER.email = data.email;
		                USER.token = USER.sessionId;
		                USER.sessid = USER.session.id;
		                USER.pubid = USER.session.pubid;
		                USER.app = USER.session.app;
		                USER.name = (data.firstname + ' ' + data.lastname).trim() || USER.session.name;
		                delete USER.sessionId;
		                delete USER.session;
		                _secureacct();
		                
		                start();
		              }
		            });
		          } else {
		            start();
		          }
		        };
		      
		      	var blSideMnu = false, blMnuInView = false;
		      	self.msg = {
		          _que: [],
		          _tmr: 0,
		          _cancel: 0,
		          _pause: true,
		          post: function(msg, cbk) {
		            var me = self.msg;
		            var idx = me._que.findIndex(function(it) {
		              return msg.info == it.info;
		            });
		            
		            if (idx == -1) {
		              msg.cbk = cbk;
		              me._que.push(msg);
		              if (!me._cancel && !me._tmr) {
		                me.start();
		              }
		            }
		          },
		          start: function() {
		            var me = self.msg;
		            $f.setstyle('frmmain', 'info', {
		              opacity: 0
		            });
		            $f.hide('frmmain', 'info');
		            me.tmr = setInterval(function() {
		              if (!me._pause) {
		                // get next msg and process.
		                if (me._que.length > 0) {
		                  me.process(me._que.shift());
		                }
		              }
		            }, 250);
		            me._pause = false;
		          },
		          clear: function() {
		            var me = self.msg;
		            
		            me._que.length = 0;
		            clearTimeout(me._cancel);
		            me._cancel = 0;
		            $f.setstyle('frmmain', 'info', {
		              opacity: 0
		            });
		            $f.hide('frmmain', 'info');
		          },
		          close: function(e, itm) {
		            var me = self.msg;
		            
		            clearTimeout(me._cancel);
		            me._cancel = 0;
		            $f.fadeout('frmmain', 'info', 25, function() {
		              $f.hide('frmmain', 'info');
		              me._pause = false;
		            });
		          },
		          process: function(msg) {
		            var me = self.msg;
		            
		            me._pause = true;
		            $side.hide();
		            $f.text('frmmain', 'info:title', msg.title);
		            $f.text('frmmain', 'info:msg', msg.msg);
		            $f.show('frmmain', 'info');
		            $f.fadein('frmmain', 'info', 25, function() {
		              if (msg.cbk) { msg.cbk(); }
		              me._cancel = setTimeout(function() {
		                me.close();
		              }, 6000);
		            });
		          }
		        };
		      	self.err = {
		          start: function() {
		            $f.setstyle('frmmain', 'err', {
		              opacity: 0
		            });
		            $f.hide('frmmain', 'err');
		          },
		          close: function() {
		            $f.fadeout('frmmain', 'err', 25, function() {
		              $f.hide('frmmain', 'err');
		            });
		          },
		          clear: function() {
		            $f.setstyle('frmmain', 'err', {
		              opacity: 0
		            });
		            $f.hide('frmmain', 'err');
		          },
		          post: function(msg, cbk) {
		            var me = self.err;
		            
		            $side.hide();
		            $f.text('frmmain', 'err:msg', msg.msg);
		            $f.show('frmmain', 'err');
		            $f.fadein('frmmain', 'err', 25, function() {
		              if (msg.cbk) { msg.cbk(); }
		              me._cancel = setTimeout(function() {
		                me.close();
		              }, 3000);
		            });
		          }
		        };
		      
		      	self.side = $side;
				self.main = {
		            clearPopups: function() {
		              self.msg.clear();
		              self.err.clear();
		            },
		          	toggleHeader: function(blShow) {
		              $f.slideto("frmmain", "header", 0, 0 - (blShow ? 0 : 50), DESKTOP.width, 48, 0.25, $nim.animFn);
		            },
		          	toggleFooter: function(blShow) {
		              blMnuInView = blShow;
		              $f.slideto("frmmain", "footer", 0, DESKTOP.height - (blShow ? 70 : 0), DESKTOP.width, 72, 0.25, $nim.animFn);
		            },
					events: {
		              	onLoadTitle: function(e, itm) {
		                  Env.viewport('mobile');
		                  // Hide Desktop information.
		                  ['title', 'author', 'date', 'library', 'logo', 'logon', 'ip'].forEach(function(id) {
		                    $f.hide('app.' + id);
		                  });
		                  // ---------------------------
		                  $f.full('frmtitle', function() {
		                    $f.load('loginassets');
		                    $f.load('appassets');
		                    // Load Title Image
		                    $notify.publish('show-view', {
		                      "name": "titleImage",
		                      "namepattern": "uilogo",
		                      "src": { "dlg": "appassets", "nodata": "nodata" },
		                      "des": { "dlg": "frmtitle", "ctrl": "image", "nodata": "nocontent" },
		                      "items": [ "logo" ],
		                      "push": false,"clear": true,"fadeout": false,"onDone": {
		                      }
		                    });
		                    
		                    // Update Title
		                    $f.show('frmtitle');
		                  });
		                },
		              	onCloseTitle: function(e, itm) {
		                  $f.load('frmmain');
		                  self.err.start();
		                  self.msg.start();
		                  $f.full('frmmain', function() {
		                 	$f.unload('frmtitle');
		                    
		                    self.main.toggleFooter(false);
		                    // Show OpenAuth in Taskbar.
		                    $footer.showAuth();
		                    
		                    $f.show('frmmain');
		                    self.login.show();
		                  });
		                },
		              	onTaskBarClick: function(e, itm) {
		                  blMnuInView = !blMnuInView;
		                  if (blMnuInView) {
		                  	self.main.toggleHeader(blMnuInView);
		                  } else {
		                    if (blSideMnu) { self.main.events.onShowSideMenu(); }
		                  }
		                  self.main.toggleFooter(blMnuInView);
		                },
		                onTaskBarHide: function(e, itm) {
		                  blMnuInView = !blMnuInView;
		                  if (blMnuInView) {
		                  	self.main.toggleHeader(blMnuInView);
		                  } else {
		                    if (blSideMnu) { self.main.events.onShowSideMenu(); }
		                  }
		                  self.main.toggleFooter(blMnuInView);
		                },
		                onBreadCrumbClick: function(e, itm) {
		              	  e.stopPropagation();
		                },
		              	onHeaderClick: function(e, itm) {
		              	  e.stopPropagation();
		                },
		                onLostFocus: function(e, itm) {
		                  blMnuInView = false;
		                  self.main.toggleHeader(false);
		                  self.main.toggleFooter(false);
		                  if (blSideMnu) { self.main.events.onShowSideMenu(); }
		                },
		              	onShowSideMenu: function(e, itm) {
		                  blSideMnu = !blSideMnu;
		                  $side[blSideMnu ? 'show' : 'hide']();
		                },
						onload: function(e, itm) {
						},
						onactivate: function(e, itm) {
						},
						beforeunload: function(e, itm) {
						}
					}
				};
		      	$pubsub.onload(self);
		      	$views.onload(self);
		      	$route.onload(self);
		      	$notify.onload(self);
		        $side.onload(self);
		        $footer.onload(self);
				for (var mod in self) {
					if (self.type != self[mod].type) {
						if (self[mod].onload) { self[mod].onload(self); }
					}
				}
			};
			Main.prototype.type = function () {
				return "Main";
			};
			Main.prototype.toDto = function () {
				var self = this;
				return { };
			};
			return Main;
		});
		
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
		
		/* REST Component Manager/Factory :
		   
		*/
		FACTORY.Register("Rest", function blankFactory() {
			var restObj = function () {
				var self = this;
				var $string = $fctry.new('Strings'), $config;
				if (typeof(Env) == 'undefined') {
					if (FACTORY.Exists('Env')) {
						Env = FACTORY.New('Env');
					} else {
						Env = {
							state: ""
						};
					}
				}
				function resolveServer(env, url) {
					if (env && env.state) {
						if (window.$nim && $nim.home_server) {
							url = $string.replaceAll($nim.home_server, env.domain() + "/", url);
							url = $string.replaceAll($nim.core_server, env.domain() + "/", url);
						}
						return url;
					} else { return url; }
				}
				function ajaxCMD(type, url, blASync, payload, callbk) {
					var xhr  = new XMLHttpRequest();
					var json = null;
					if (type == "POST") {
		              if (payload instanceof FormData) {
		                json = payload;
		              } else {
		                json = (typeof(payload) == 'object') ? JSON.stringify(payload) : payload;
		              }
					} else { 
						if (typeof(payload) == 'function') { callbk = payload; payload = null; }
					}
					xhr.onerror = function() {
						if (callbk) { callbk ('error'); }
					};
		          	xhr.onloadend = function() {
		                if(xhr.status == 404) {
		                  if (callbk) { callbk ('error'); }
		                }
		            };
					xhr.onreadystatechange = function () {
						var resp;
						
						if (xhr.readyState < 4) { return; }
						if (xhr.readyState == 4 && xhr.status == 200) {
							try {
								resp = JSON.parse(xhr.responseText);
							} catch (err) {
								resp = xhr.responseText || {};
							} finally {
								if (callbk) { callbk ('ok', resp); }
							}
						}
					};
					xhr.open(type, resolveServer(Env, url), blASync);
					if (type == "POST" && typeof(json) == 'string') {
						xhr.setRequestHeader('Content-Type','application/json');
					}
					try {
						xhr.send(json);
					} catch(err) {
						if (callbk) { callbk ('error'); }
					}
				}
				function restJson(inval) {
					var ary = inval.split(':');
					ary.shift();
					return JSON.parse(ary.join(':') || "") || {};
				}
		      	function _post(url, payload, callbk) {
					ajaxCMD('POST', url, true, payload, callbk);
		        }
		        function _get(url, callbk) {
					ajaxCMD('GET', url, true, null, callbk);
		        }
		      	function cleanPayload(payload) {
		          ['news','video','home','code','bookmark',
		          'version','svr','app','sessid','pubid'].forEach(function(it) {
		            delete payload[it];
		          });
		          return payload;
		        }
		      	function authPayload(url, payload) {
		          if (url.toLowerCase().indexOf('nimble-ide.com') > -1) {
		          	payload = cleanPayload(payload);
		            return Object.assign(payload, {
		              version: 2.0,
		              svr: 'home',
		              app: USER.acct ? USER.acct.app : '',
		              pubid: USER.acct ? USER.acct.pubid : '',
		              sessid: USER.acct ? USER.acct.sessid : ''
		            });
		          } return payload;
		        }
		      
		        self.get = _get;
		        self.post = _post;
		      	self.auth = authPayload;
		        self.restJson = restJson;
				
				self.onload = function(main) {
		          $config = main.shared.config || $fctry.new('Config') || {};
		        };
			};
		  
			restObj.prototype.type = function () {
				return "rest";
			};
			restObj.prototype.toDto = function () {
				return { };
			};
			return restObj;
		});
		
		/* Notify Component Manager/Factory :
		   A template factory example.
		   Updated: 1-28-2025
		*/
		FACTORY.Register("Notify", function NotifyFactory() {
			var Notify = function (config) {
				var self = this;
				var _subs = [];
		        var _notify = [];
		      	
		      	self.subscribe = function(msg, fn) {
		          var idx = _subs.findIndex(function(it) { return it.msg == msg && it.fn === fn; });
		          if (idx == -1) {
		            if (fn) {
		              _subs.push({msg: msg, fn: fn});
		            }
		          } else {
		            console.log('Subscribe Event Exists: ' + msg);
		          }
		        };
		        self.unsubscribe = function(msg, fn) {
				  var idx = _subs.findIndex(function(it) { return it.msg == msg && it.fn === fn; });
		          if (idx > -1) {
		            _subs.splice(idx, 1);
		          } else {
		            return false;
		          }
		        };
		        self.publish = function(msg, parms) {
		          parms = parms || {};
		          _notify.push({msg: msg, parms: parms});
		        };
		      	self.stop = function() {
		          clearInterval(_tmr);
		        };
		      	self.start = function() {
		          start();
		        };
		      	
		      	function start() {
		          _tmr = setInterval(function() {
		            var itm;
		            if (_notify.length > 0) {
		              itm = _notify.shift();
		              _subs.forEach(function(it) {
		                if (it.msg == itm.msg) {
		                  if (itm.parms.cbk) {
		                    itm.parms.cbk(false, it.fn(itm.parms));
		                  } else {
		                    it.fn(itm.parms);
		                  }
		                }
		              });
		            }
		          }, 70);
		        }
		      	start();
				
				self.onload = function(main) {
				};
			};
			Notify.prototype.type = function () {
				return "Notify";
			};
			Notify.prototype.toDto = function () {
				var self = this;
				return { };
			};
			return Notify;
		});
		
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
		
		/* Phone Cordova Manager/Factory :
		   
		*/
		FACTORY.Register("Phone", function PhoneFactory() {
			var Phone = function () {
				var self = this;
		      	var _cfg = {};
		      	var smsList = [];
		      
		      	var _fsType = '';
		      	if (typeof(LocalFileSystem) != 'undefined') {
		      		_fsType = LocalFileSystem.PERSISTENT;
		        }
		      	var permissions = {}, enable = {};
				var NOTIFY = {
		          DEFAULT_SUCCESS: 'SUCCESS',
		          DEFAULT_ERROR: 'ERROR',
		          
		          MEDIA_SUCCESS: 'MEDIA_SUCCESS',
		          MEDIA_ERROR: 'MEDIA_ERROR',
		          MEDIA_POS_SUCCESS: 'MEDIA_POS_SUCCESS',
		          MEDIA_POS_ERROR: 'MEDIA_POS_ERROR',
		          MEDIA_AMP_SUCCESS: 'MEDIA_AMP_SUCCESS',
		          MEDIA_AMP_ERROR: 'MEDIA_AMP_ERROR',
		          MEDIA_DUR_SUCCESS: 'MEDIA_DUR_SUCCESS',
		          MEDIA_DUR_ERROR: 'MEDIA_DUR_ERROR',
		          MEDIA_INTERVAL: 'MEDIA_INTERVAL',
		          
		          
		          FS_SUCCESS: 'FS_SUCCESS',
		          FS_ERROR: 'FS_ERROR',
		          FS_GETFILE_SUCCESS: 'FS_GETFILE_SUCCESS',
		          FS_GETFILE_ERROR: 'FS_GETFILE_ERROR',
		          FS_STREAM_SUCCESS: 'FS_STREAM_SUCCESS',
		          FS_STREAM_ERROR: 'FS_STREAM_ERROR',
		          FS_EXISTS_SUCCESS: 'FS_EXISTS_SUCCESS',
		          FS_EXISTS_ERROR: 'FS_EXISTS_ERROR',
		          FS_READ_SUCCESS: 'FS_READ_SUCCESS',
		          FS_READ_ERROR: 'FS_READ_ERROR',
		          FS_WRITE_SUCCESS: 'FS_WRITE_SUCCESS',
		          FS_WRITE_ERROR: 'FS_WRITE_ERROR',
		          FS_DELETE_SUCCESS: 'FS_DELETE_SUCCESS',
		          FS_DELETE_ERROR: 'FS_DELETE_ERROR',
		          FS_LIST_SUCCESS: 'FS_LIST_SUCCESS',
		          FS_LIST_ERROR: 'FS_LIST_ERROR',
		          FS_MKDIR_SUCCESS: 'FS_MKDIR_SUCCESS',
		          FS_MKDIR_ERROR: 'FS_MKDIR_ERROR',
		          FS_DELDIR_SUCCESS: 'FS_DELDIR_SUCCESS',
		          FS_DELDIR_ERROR: 'FS_DELDIR_ERROR',
		          FS_DELALL_SUCCESS: 'FS_DELALL_SUCCESS',
		          FS_DELALL_ERROR: 'FS_DELALL_ERROR',
		          
		          GEOLOC_SUCCESS: 'GEOLOC_SUCCESS',
		          GEOLOC_ERROR: 'GEOLOC_ERROR',
		          
		          COMPASS_SUCCESS: 'COMPASS_SUCCESS',
		          COMPASS_ERROR: 'COMPASS_ERROR',
		          
		          MOTION_SUCCESS: 'MOTION_SUCCESS',
		          MOTION_ERROR: 'MOTION_ERROR',
		          
		          GETLIBRARY_SUCCESS: 'GETLIBRARY_SUCCESS',
		          GETLIBRARY_ERROR: 'GETLIBRARY_ERROR',
		          GETALBUM_SUCCESS: 'GETALBUMN_SUCCESS',
		          GETALBUM_ERROR: 'GETALBUMN_ERROR',
		          SAVEIMAGE_SUCCESS: 'SAVEIMAGE_SUCCESS',
		          SAVEIMAGE_ERROR: 'SAVEIMAGE_ERROR',
		          SAVEVIDEO_SUCCESS: 'SAVEVIDEO_SUCCESS',
		          SAVEVIDEO_ERROR: 'SAVEVIDEO_ERROR',
		          
		          CAMERA_SUCCESS: 'CAMERA_SUCCESS',
		          CAMERA_ERROR: 'CAMERA_ERROR',
		          CAMCLENUP_SUCCESS: 'CAMCLEANUP_SUCCESS',
		          CAMCLENUP_ERROR: 'CAMCLEANUP_ERROR',
		          
		          FINDCONTACT_SUCCESS: 'FINDCONTACT_SUCCESS',
		          FINDCONTACT_ERROR: 'FINDCONTACT_ERROR',
		          CREATECONTACT_SUCCESS: 'CREATECONTACT_SUCCESS',
		          CREATECONTACT_ERROR: 'CREATECONTACT_ERROR',
		          PICKCONTACT_SUCCESS: 'PICKCONTACT_SUCCESS',
		          PICKCONTACT_ERROR: 'PICKCONTACT_ERROR',
		          
		          SENDMSGS_SUCCESS: 'SENDMSGS_SUCCESS',
		          SENDMSGS_ERROR: 'SENDMSGS_ERROR',
		          LISTMSGS_SUCCESS: 'LISTMSGS_SUCCESS',
		          LISTMSGS_ERROR: 'LISTMSGS_ERROR',
		          DELETEMSGS_SUCCESS: 'DELETEMSGS_SUCCESS',
		          DELETEMSGS_ERROR: 'DELETEMSGS_ERROR',
		          
		          RESTOREMSGS_SUCCESS: 'RESTOREMSGS_SUCCESS',
		          RESTOREMSGS_ERROR: 'RESTOREMSGS_ERROR',
		          DISABLE_INTERCEPT_SUCCESS: 'DISABLE_INTERCEPT_SUCCESS',
		          DISABLE_INTERCEPT_ERROR: 'DISABLE_INTERCEPT_ERROR',
		          ENABLE_INTERCEPT_SUCCESS: 'ENABLE_INTERCEPT_SUCCESS',
		          ENABLE_INTERCEPT_ERROR: 'ENABLE_INTERCEPT_ERROR',
		          DISABLE_WATCH_SUCCESS: 'DISABLE_WATCH_SUCCESS',
		          DISABLE_WATCH_ERROR: 'DISABLE_WATCH_ERROR',
		          ENABLE_WATCH_SUCCESS: 'ENABLE_WATCH_SUCCESS',
		          ENABLE_WATCH_ERROR: 'ENABLE_WATCH_ERROR'
		        };
		      
		      	if (window.cordova) {
		      	  permissions = cordova.plugins.permissions;
		        }
		        function checkPermission(perm, onSuccess, stub) {
		          self[stub.type] = self[stub.type] || {};
		          
		          function onFailed(type, methods) {
		            if (methods.length > 0) {
		              methods.forEach(function(itm) {
		                self[type][itm] = function() { };
		              });
		            } else {
		              self[type] = function() { };
		            }
		            self[type]._enabled = false;
		            self[type]._status = 'failed';
		          }
		          function error() {
		            if (!self[stub.type]._enabled) { onFailed(stub.type, stub.methods); }
		          }
		          
		          permissions.checkPermission(perm, function(status) {
		            if (status.hasPermission) {
		              if (!self[stub.type]._enabled) {
		                self[stub.type]._enabled = true;
		                self[stub.type]._status = 'success';
		                onSuccess();
		              }
		            } else { permissions.requestPermission(perm, function() {
						if (!self[stub.type]._enabled) {
							self[stub.type]._enabled = true;
							self[stub.type]._status = 'success';
							onSuccess();
						  }
						}, error);
					}
		          }, error);
		        }
		      	
		      	self.info = function() {
		          return (window.device && device.cordova) ? {
		            cordova: device.cordova,
		            model: device.model,
		            platform: device.platform,
		            uuid: device.uuid,
		            version: device.version,
		            sernum: device.serial
		          } : null;
		        };
		      	self.isMobile = function() {
		          return $nim.Agent.isMobile && ($nim.Agent.usingAndroid || $nim.Agent.usingIPad);
		        };
		      	self.Agent = function() {
		          return navigator.userAgent;
		        };
		      	self.Vendor = function() {
		          return navigator.vendor;
		        };
				self.PluginList = function() {
		            if (typeof(cordova) != 'undefined') {
		              var itms = cordova.plugins ? Object.keys(cordova.plugins) : [];
		              itms.forEach(function(itm) {
		                console.log('  - ' + itm);
		              });
		            }
				};
				
				enable.orientation = function() {
					self.orientation = {
		              get: function() {
		                return screen.orientation.type;
		              },
		              notify: function() {
		                console.log(screen.orientation.type); // e.g. portrait
		              }
					};
					window.addEventListener("orientationchange", self.orientation.notfy);
				};
				enable.battery = function() {
		          if (!self.battery) {
					self.battery = {
		              	_status: '',
		              	get: function() {
		                  return self.battery._status;
		                },
						notify: function(msg, status) {
		                  	self.battery._status = {msg: msg, status: status};
							console.log(msg);
							console.log(JSON.stringify(status));
						}
					};
					window.addEventListener("batterystatus", function(status) {
						self.battery.notify('battery status', status);
					}, false);
					window.addEventListener("batterylow", function(status) {
						self.battery.notify('battery low', status);
					}, false);
					window.addEventListener("batterycritical", function(status) {
						self.battery.notify('battery critical', status);
					}, false);
		          }
				};
				enable.device = function() {
					self.device = {
						// key: model | platform | uuid | version | manufacturer |
						//      isVirtual | isiOSAppOnMac | serial
						get: function(key) {
							return (device && device[key]) ? device[key] : '';
						}
					};
				};
				enable.compass = function() {
					var compID;
		          
		          	if (navigator.compass) {
		              self.compass = {
		                  _status: '',
		                  get: function() {
		                    return self.compass._status;
		                  },
		                  notify: function(heading) {
		                    self.compass._status = heading;
		                    console.log('Heading: ' + heading.magneticHeading);
		                  },
		                  getHeading: function(fn) {
		                    navigator.compass.getCurrentHeading(function(heading) {
		                      self.compass.notify(heading);
		                      if (fn) { fn(NOTIFY.COMPASS_SUCCESS, heading); }
		                    }, self.compass.error);
		                  },
		                  error: function(errMsg) {
		                    console.log(NOTIFY.COMPASS_ERROR);
		                    console.log(errMsg);
		                  },
		                  start: function() {
		                      compID = navigator.compass.watchHeading(
		                          self.compass.notify, 
		                          self.compass.error,
		                          {frequency: 3000});
		                  },
		                  stop: function() {
		                      navigator.compass.clearWatch(compID);
		                  }
		              };
		            }
				};
				enable.motion = function() {
				  var watchID;
					
		          if (navigator.accelerometer) {
					self.motion = {
		                _status: '',
		              	get: function() {
		                    return self.motion._status;
		                },
						notify: function(acceleration) {
		                  self.motion._status = acceleration;
		                  console.log('Acceleration X: ' + acceleration.x + '\n' +
		                              'Acceleration Y: ' + acceleration.y + '\n' +
		                              'Acceleration Z: ' + acceleration.z + '\n' +
		                              'Timestamp: '      + acceleration.timestamp + '\n');
						},
						getMotion: function(fn) {
							navigator.accelerometer.getCurrentAcceleration(function(acceleration) {
		                      self.motion.notify(acceleration);
		                      if (fn) { fn(NOTIFY.MOTION_SUCCESS, acceleration); }
		                    }, self.motion.error);
						},
						error: function() {
							console.log(NOTIFY.MOTION_ERROR);
						},
						start: function() {
							watchID = navigator.accelerometer.watchAcceleration(
								self.motion.notify, 
								self.motion.error,
								{frequency: 3000});
						},
						stop: function() {
							navigator.accelerometer.clearWatch(watchID);
						}
					};
		          }
				};
				
				enable.globalize = function() {
		          if (navigator.globalization) {
					self.globalize = {
						notify: function(success, res) {
							console.log('response:' + success);
							console.log('  result:' + res);
						},
						getLanguage: function() {
							navigator.globalization.getPreferredLanguage(function(lang) {
								self.globalize.notify(true, lang);
							}, function() {
								self.globalize.notify(false, null);
							});
						},
						getCurrency: function(curCode) {
							navigator.globalization.getCurrencyPattern(curCode, function(pattern) {
								self.globalize.notify(true, pattern);
							}, function() {
								self.globalize.notify(false, null);
							});
						},
						getLocaleName: function() {
							navigator.globalization.getLocaleName(function(locale) {
								self.globalize.notify(true, locale);
							}, function() {
								self.globalize.notify(false, null);
							});
						},
						stringToDate: function(str, options) { // {formatLength:'short', selector:'date and time'}
							navigator.globalization.stringToDate(str, function(date) {
								self.globalize.notify(true, date);
							}, function() {
								self.globalize.notify(false, null);
							}, options);
						},
						stringToNumber: function(str, options) { // { type: 'decimal' }
							navigator.globalization.stringToDate(str, function(num) {
								self.globalize.notify(true, num);
							}, function() {
								self.globalize.notify(false, null);
							}, options);
						},
						dateToString: function(date, options) {  // { formatLength: 'short', selector: 'date and time' }
							navigator.globalization.dateToString(date, function(lDate) {
								self.globalize.notify(true, lDate);
							}, function() {
								self.globalize.notify(false, null);
							}, options);
						},
						numberToString: function(num, options) { // { type: 'decimal' }
							navigator.globalization.numberToString(num, function(number) {
								self.globalize.notify(true, number);
							}, function() {
								self.globalize.notify(false, null);
							}, options);
						},
						getDateNames: function(options) { // { type: 'wide', item: 'months' }
							navigator.globalization.getDateNames(function(names) {
								self.globalize.notify(true, names);
							}, function() {
								self.globalize.notify(false, null);
							}, options);
						},
						getDatePattern: function(options) { // { formatLength: 'short', selector: 'date and time' }
							navigator.globalization.getDatePattern(function(date) {
								self.globalize.notify(true, date);
							}, function() {
								self.globalize.notify(false, null);
							}, options);
						},
						getFirstDayOfWeek: function() {
							navigator.globalization.getFirstDayOfWeek(function(day) {
								self.globalize.notify(true, day);
							}, function() {
								self.globalize.notify(false, null);
							});
						},
						getNumberPattern: function(options) { // {type: 'decimal'}
							navigator.globalization.getNumberPattern(function(pattern) {
								self.globalize.notify(true, pattern);
							}, function() {
								self.globalize.notify(false, null);
							}, options);
						},
						isDayLightSavingsTime: function(date) {
							navigator.globalization.isDayLightSavingsTime(date, function(date) {
								self.globalize.notify(true, date);
							}, function() {
								self.globalize.notify(false, null);
							});
						}
					};
		          }
				};
				enable.network = function() {
		          if (!self.network) {
					self.network = {
						state: '',
		                get: function() {
		                  return self.network.state;
		                },
						notify: function(msg) {
							console.log('Network Type  :' + self.network.state);
							console.log('Network Status:' + msg);
						},
						update: function() {
							var networkState = navigator.connection.type;
							var states = {};
							
							if (typeof(Connection) == 'object') {
								states[Connection.UNKNOWN]  = 'Unknown';
								states[Connection.ETHERNET] = 'Ethernet';
								states[Connection.WIFI]     = 'WiFi';
								states[Connection.CELL_2G]  = 'Cell 2G';
								states[Connection.CELL_3G]  = 'Cell 3G';
								states[Connection.CELL_4G]  = 'Cell 4G';
								states[Connection.CELL]     = 'Cell generic';
								states[Connection.NONE]     = 'No network';
							}
							
							self.network.state = states[networkState] || 'Unknown';
						}
					};
					
					document.addEventListener("offline", function() {
						self.network.notify('offline');
					}, false);
					document.addEventListener("online", function() {
						self.network.notify('online');
					}, false);
		          }
				};
				enable.browser = function() {
		          if (window.cordova && cordova.InAppBrowser) {
					self.browser = {
						open: cordova.InAppBrowser.open
					};
		          }
				};
				enable.statusbar = function() {
		          if (typeof(StatusBar) == 'object') {
					self.statusbar = {
						get: function() {
							return StatusBar;
						},
						hide: StatusBar.hide,
						show: StatusBar.show
					};
		          }
				};
				
		      	var _vibrate = {
		          play: function(dur) {
		            if (navigator.vibrate) { navigator.vibrate(dur); }
		          }
		        };
		        enable.vibrate = function() {
		          checkPermission(permissions.VIBRATE, function() {
		              self.vibrate = Object.assign(self.vibrate, _vibrate);
					}, {type: 'vibrate', methods: Object.keys(_vibrate)});
		        };
		      
		        var _contacts = {
		            create: function(obj, fn) {
		              var myContact;
		              // {"displayName": "Test User"}
		              if (navigator.contacts) {
		                try {
		                  myContact = navigator.contacts.create(obj);
		                  if (_cfg.notify) { _cfg.notify(NOTIFY.CREATECONTACT_SUCCESS, myContact); }
		                  if (fn) { fn(NOTIFY.CREATECONTACT_SUCCESS, myContact); }
		                } catch(err) {
		                  if (_cfg.notify) { _cfg.notify(NOTIFY.CREATECONTACT_ERROR); }
		                  if (fn) { fn(NOTIFY.CREATECONTACT_ERROR); }
		                }
		              }
		            },
		            find: function(filter, fields, fn) {
		              if (navigator.contacts) {
		                // find all contacts with 'Bob' in any name field
		                // var fields       = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
		                var options      = new ContactFindOptions();
		                options.filter   = filter;
		                options.multiple = true;
		                options.desiredFields = [ fields[0] || navigator.contacts.fieldType.id ];
		                options.hasPhoneNumber = true;
		                navigator.contacts.find(fields, function(contacts) {
		                  if (_cfg.notify) { _cfg.notify(NOTIFY.FINDCONTACT_SUCCESS, contacts); }
		                  if (fn) { fn(NOTIFY.FINDCONTACT_SUCCESS, contacts); }
		                }, function(err) {
		                  if (_cfg.notify) { _cfg.notify(NOTIFY.FINDCONTACT_ERROR, err); }
		                  if (fn) { fn(NOTIFY.FINDCONTACT_ERROR, err); }
		                }, options);
		              }
		            },
		            pickContact: function(fn) {
		              if (navigator.contacts) {
		                navigator.contacts.pickContact(function(contact) {
		                  if (_cfg.notify) { _cfg.notify(NOTIFY.PICKCONTACT_SUCCESS, contact); }
		                  if (fn) { fn(NOTIFY.PICKCONTACT_SUCCESS, contact); }
		                },function(err) {
		                  if (_cfg.notify) { _cfg.notify(NOTIFY.PICKCONTACT_ERROR, err); }
		                  if (fn) { fn(NOTIFY.PICKCONTACT_ERROR, err); }
		                });
		              }
		            }
		        };
		      	enable.contacts = function() {
					checkPermission(permissions.GET_ACCOUNTS, function() {
					  checkPermission(permissions.READ_CONTACTS, function() {
						checkPermission(permissions.WRITE_CONTACTS, function() { 
						  self.contacts = Object.assign(self.contacts, _contacts);
						}, {type: 'contacts', methods: Object.keys(_contacts)});
					  }, {type: 'contacts', methods: Object.keys(_contacts)});
					}, {type: 'contacts', methods: Object.keys(_contacts)});
				};
		      
		      	/*
		        	CORDOVA App Folder:
		            cordova.file.applicationDirectory
		            
		        	FILE SYSTEM Types:
		            - window.TEMPORARY
		            = LocalFileSystem.PERSISTENT
		        */
		        var _files = {
		            type: function(type) {
		              if (type) {
		                _fsType = type;
		              } else {
		                return _fsType;
		              }
		            },
		            exists: function(file, fn) {
		               window.requestFileSystem(_fsType, 0, fsSuccess, fsError);
		               function fsSuccess(fs) {
		                  fs.root.getFile(file, {create: false}, function() {
		                    if (_cfg.notify) { _cfg.notify(NOTIFY.FS_EXISTS_SUCCESS, true); }
		                    if (fn) { fn(NOTIFY.FS_EXISTS_SUCCESS, true); }
		                  }, function() {
		                    if (_cfg.notify) { _cfg.notify(NOTIFY.FS_EXISTS_ERROR, false); }
		                    if (fn) { fn(NOTIFY.FS_EXISTS_ERROR, false); }
		                  });
		               }
		               function fsError(err) {
		                  if (_cfg.notify) { _cfg.notify(NOTIFY.FS_ERROR, err); }
		                  if (fn) { fn(NOTIFY.FS_ERROR, err); }
		               }
		            },
		          	path: function(key) {
		              switch (key.toLowerCase()) {
		                case 'app':
		                  return cordova.file.applicationDirectory;
		                  
		                case 'store':
		                  return cordova.file.applicationStorageDirectory;
		 
		                case 'temp':
		                  return cordova.file.tempDirectory || cordova.file.applicationDirectory + 'temp/';
		                  
		                case 'cache':
		                  return cordova.file.cacheDirectory;
		                  
		                case 'docs':
		                  return cordova.file.documentsDirectory || cordova.file.applicationDirectory + 'docs/';
		                  
		                case 'shared':
		                  return cordova.file.sharedDirectory || cordova.file.applicationDirectory + 'shared/';
		                  
		                case 'sync':
		                  return cordova.file.syncedDataDirectory || cordova.file.applicationDirectory + 'sync/';
		                  
		                default:
		                  return cordova.file.tempDirectory || cordova.file.applicationDirectory + 'temp/';
		              }
		            },
		            list: function(path, fn) {
		               window.requestFileSystem(_fsType, 0, fsSuccess, fsError);
		               function fsSuccess(fs) {
		                  var reader = fs.createReader();
		                  reader.readEntries(
		                    function (entries) {
		                      if (_cfg.notify) { _cfg.notify(NOTIFY.FS_LIST_SUCCESS, entries); }
		                      if (fn) { fn(NOTIFY.FS_LIST_SUCCESS, entries); }
		                    },
		                    function (err) {
		                      if (_cfg.notify) { _cfg.notify(NOTIFY.FS_LIST_ERROR, err); }
		                      if (fn) { fn(NOTIFY.FS_LIST_ERROR, err); }
		                    }
		                  );
		               }
		               function fsError(err) {
		                  if (_cfg.notify) { _cfg.notify(NOTIFY.FS_ERROR, err); }
		                  if (fn) { fn(NOTIFY.FS_ERROR, err); }
		               }
		            },
		            dirExists: function(folder, fn) {
		               window.requestFileSystem(_fsType, 0, fsSuccess, fsError);
		               function fsSuccess(fs) {
		                  fs.root.getDirectory(folder, {create: false, exclusive: false}, function() {
							if (_cfg.notify) { _cfg.notify(NOTIFY.FS_EXISTS_SUCCESS, true); }
							if (fn) { fn(NOTIFY.FS_EXISTS_SUCCESS, true); }
		                  }, function() {
		                    if (_cfg.notify) { _cfg.notify(NOTIFY.FS_EXISTS_ERROR, false); }
		                    if (fn) { fn(NOTIFY.FS_EXISTS_ERROR, false); }
		                  });
		               }
		               function fsError(err) {
		                  if (_cfg.notify) { _cfg.notify(NOTIFY.FS_ERROR, err); }
		                  if (fn) { fn(NOTIFY.FS_ERROR, err); }
		               }
					},
					delDir: function(folder, fn) {
		               window.requestFileSystem(_fsType, 0, fsSuccess, fsError);
		               function fsSuccess(fs) {
		                  fs.root.getDirectory(folder, {create: false, exclusive: false}, function(parent) {
		                    parent.remove(function() {
		                      if (_cfg.notify) { _cfg.notify(NOTIFY.FS_DELDIR_SUCCESS, true); }
		                      if (fn) { fn(NOTIFY.FS_DELDIR_SUCCESS, true); }
		                    }, function() {
		                      if (_cfg.notify) { _cfg.notify(NOTIFY.FS_DELDIR_ERROR, false); }
		                      if (fn) { fn(NOTIFY.FS_DELDIR_ERROR, false); }
		                    });
		                  }, function(err) {
		                    if (_cfg.notify) { _cfg.notify(NOTIFY.FS_DELDIR_ERROR, err); }
		                    if (fn) { fn(NOTIFY.FS_DELDIR_ERROR, err); }
		                  });
		               }
		               function fsError(err) {
		                  if (_cfg.notify) { _cfg.notify(NOTIFY.FS_ERROR, err); }
		                  if (fn) { fn(NOTIFY.FS_ERROR, err); }
		               }
		            },
		            makeDir: function(folder, fn) {
		               window.requestFileSystem(_fsType, 0, fsSuccess, fsError);
		               function fsSuccess(fs) {
		                  folder = folder || fs.root;
		                  fs.root.getDirectory(folder, {create: true, exclusive: false}, function(parent) {
		                    if (_cfg.notify) { _cfg.notify(NOTIFY.FS_MKDIR_SUCCESS, parent); }
		                    if (fn) { fn(NOTIFY.FS_MKDIR_SUCCESS, parent); }
		                  }, function() {
		                    if (_cfg.notify) { _cfg.notify(NOTIFY.FS_MKDIR_ERROR, false); }
		                    if (fn) { fn(NOTIFY.FS_MKDIR_ERROR, false); }
		                  });
		               }
		               function fsError(err) {
		                  if (_cfg.notify) { _cfg.notify(NOTIFY.FS_ERROR, err); }
		                  if (fn) { fn(NOTIFY.FS_ERROR, err); }
		               }
		            },
		            read: function(file, fn) {
		               window.requestFileSystem(_fsType, 0, fsSuccess, fsError);
		               function fsSuccess(fs) {
		                  fs.root.getFile(file, {}, function(fileEntry) {
		                     fileEntry.file(function(fileHnd) {
		                        var reader = new FileReader();
		                        reader.onloadend = function() {
		                           if (_cfg.notify) { _cfg.notify(NOTIFY.FS_READ_SUCCESS, this.result); }
		                           if (fn) { fn(NOTIFY.FS_READ_SUCCESS, this.result); }
		                        };
		                        reader.readAsText(fileHnd);
		                     }, function(err) {
		                       if (_cfg.notify) { _cfg.notify(NOTIFY.FS_STREAM_ERROR, err); }
		                       if (fn) { fn(NOTIFY.FS_STREAM_ERROR, err); }
		                     });
		                  }, function(err) {
		                    if (_cfg.notify) { _cfg.notify(NOTIFY.FS_GETFILE_ERROR, err); }
		                    if (fn) { fn(NOTIFY.FS_GETFILE_ERROR, err); }
		                  });
		               }
		               function fsError(err) {
		                 if (_cfg.notify) { _cfg.notify(NOTIFY.FS_ERROR, err); }
		                 if (fn) { fn(NOTIFY.FS_ERROR, err); }
		               }
		            },
		            write: function(file, data, fn) {
		               window.requestFileSystem(_fsType, 0, fsSuccess, fsError);
		               function fsSuccess(fs) {
		                  fs.root.getFile(file, {create: true}, function(fileEntry) {
		                     fileEntry.createWriter(function(fileWriter) {
		                        fileWriter.onwriteend = function(e) {
		                           if (_cfg.notify) { _cfg.notify(NOTIFY.FS_WRITE_SUCCESS, e); }
		                           if (fn) { fn(NOTIFY.FS_WRITE_SUCCESS, e); }
		                        };
		                        fileWriter.onerror = function(e) {
		                           if (_cfg.notify) { _cfg.notify(NOTIFY.FS_WRITE_ERROR, e); }
		                           if (fn) { fn(NOTIFY.FS_WRITE_ERROR, e); }
		                        };
		                        var blob = new Blob([data], {type: 'text/plain'});
		                        fileWriter.write(blob);
		                     }, function(err) {
		                       if (_cfg.notify) { _cfg.notify(NOTIFY.FS_STREAM_ERROR, err); }
		                       if (fn) { fn(NOTIFY.FS_STREAM_ERROR, err); }
		                     });
		                  }, function(err) {
		                    if (_cfg.notify) { _cfg.notify(NOTIFY.FS_GETFILE_ERROR, err); }
		                    if (fn) { fn(NOTIFY.FS_GETFILE_ERROR, err); }
		                  });
		               }
		               function fsError(err) {
		                 if (_cfg.notify) { _cfg.notify(NOTIFY.FS_ERROR, err); }
						 if (fn) { fn(NOTIFY.FS_ERROR, err); }
		               }
		            },
		            delete: function(file, fn) {
		               window.requestFileSystem(_fsType, 0, fsSuccess, fsError);
		               function fsSuccess(fs) {
		                  fs.root.getFile(file, {create: false}, function(fileEntry) {
		                     fileEntry.remove(function() {
		                       if (_cfg.notify) { _cfg.notify(NOTIFY.FS_DELETE_SUCCESS, true); }
		                       if (fn) { fn(NOTIFY.FS_DELETE_SUCCESS, true); }
		                     }, function(err) {
		                       if (_cfg.notify) { _cfg.notify(NOTIFY.FS_DELETE_ERROR, err); }
		                       if (fn) { fn(NOTIFY.FS_DELETE_ERROR, err); }
		                     });
		                  }, function(err) {
		                    if (_cfg.notify) { _cfg.notify(NOTIFY.FS_GETFILE_ERROR, err); }
		                    if (fn) { fn(NOTIFY.FS_GETFILE_ERROR, err); }
		                  });
		               }
		               function fsError(err) {
		                  if (_cfg.notify) { _cfg.notify(NOTIFY.FS_ERROR, err); }
		                  if (fn) { fn(NOTIFY.FS_ERROR, err); }
		               }
		            },
		            deleteAll: function(path, fn) {
		              self.files.list(path, function(status, items) {
		                if (status == NOTIFY.FS_LIST_SUCCESS) {
		                  items.forEach(function(item) {
		                    self.files.delete(path + item);
		                    if (_cfg.notify) { _cfg.notify(NOTIFY.FS_DELALL_SUCCESS, true); }
		                    if (fn) { fn(NOTIFY.FS_DELALL_SUCCESS, true); }
		                  });
		                }
		              });
		            }
		        };
		      	enable.files = function() {
					checkPermission(permissions.WRITE_EXTERNAL_STORAGE, function() {
					  self.files = Object.assign(self.files, _files);
					}, {type: 'files', methods: Object.keys(_files)});
				};
		        var _media = {
		            init: function(src, fn) {
		              return new Media(src, function() {
		                   if (_cfg.notify) { _cfg.notify(NOTIFY.MEDIA_SUCCESS, true); }
		                   if (fn) { fn(NOTIFY.MEDIA_SUCCESS, true); }
		              }, function(err) {
		                   if (_cfg.notify) { _cfg.notify(NOTIFY.MEDIA_ERROR, err); }
		                   if (fn) { fn(NOTIFY.MEDIA_ERROR, err); }
		              });
		            },
		            watch: function(dur, fn) {
		              var counter = 0;
		              return setInterval(function() {
		                counter += dur;
		                if (fn) { fn(NOTIFY.MEDIA_INTERVAL, counter); }
		              }, dur);
		            },
		            clear: function(watchId) {
		              clearInterval(watchId);
		            },
		            pos: function() {},
		            duration: function() {},
		            getCurrentAmplitude: function(media, fn) {
		              media.getCurrentAmplitude(
		                function (pct) {
		                  if (_cfg.notify) { _cfg.notify(NOTIFY.MEDIA_AMP_SUCCESS, pct); }
		                  if (fn) { fn(NOTIFY.MEDIA_AMP_SUCCESS, pct); }
		                },
		                function (err) {
		                  if (_cfg.notify) { _cfg.notify(NOTIFY.MEDIA_AMP_ERROR, err); }
						  if (fn) { fn(NOTIFY.MEDIA_AMP_ERROR, err); }
		                }
		              );
		            },
		            getCurrentPosition: function(media, fn) {
		              media.getCurrentPosition(
		                function (pos) {
		                  if (pos > -1) {
		                    if (_cfg.notify) { _cfg.notify(NOTIFY.MEDIA_POS_SUCCESS, pos); }
		                    if (fn) { fn(NOTIFY.MEDIA_POS_SUCCESS, pos); }
		                  }
		                },
		                function (err) {
		                  if (_cfg.notify) { _cfg.notify(NOTIFY.MEDIA_POS_ERROR, err); }
		                  if (fn) { fn(NOTIFY.MEDIA_POS_ERROR, err); }
		                }
		              );
		            },
		            getDuration: function(media, fn) {
		              var counter = 0;
		              var timerDur = setInterval(function() {
		                  counter = counter + 100;
		                  if (counter > 2000) {
		                      clearInterval(timerDur);
		                      if (_cfg.notify) { _cfg.notify(NOTIFY.MEDIA_DUR_ERROR, null); }
		                      if (fn) { fn(NOTIFY.MEDIA_DUR_ERROR, null); }
		                  }
		                  var dur = media.getDuration();
		                  if (dur > 0) {
		                      clearInterval(timerDur);
		                      if (_cfg.notify) { _cfg.notify(NOTIFY.MEDIA_DUR_SUCCESS, dur); }
		                      if (fn) { fn(NOTIFY.MEDIA_DUR_SUCCESS, dur); }
		                  }
		              }, 100);
		            },
		            play: function(media) {
		              media.play();
		            },
		            pause: function(media) {
		              media.pause();
		            },
		            pauseRecord: function(media) {
		              media.pauseRecord();
		            },
		            release: function(media) {
		              media.release();
		            },
		            resumeRecord: function(media) {
		              media.resumeRecord();
		            },
		            startRecord: function(media) {
		              media.startRecord();
		            },
		            stopRecord: function(media) {
		              media.stopRecord();
		            },
		            stop: function(media) {
		              media.stop();
		            },
		            seekTo: function(media, pos) {
		              // pos in milliseconds. 1 sec = 1000
		              media.seekTo(pos);
		            },
		            setVolume: function(media, vol) {
		              // vol is string from '0.0' to '1.0'
		              media.setVolume(vol);
		            },
		            setRate: function(media, speed) {
		              // Playback speed is number from 0.1 - 4.0; (unknown range)
		              media.setRate(speed);
		            }
		        };
		      	enable.media = function() {
					checkPermission(permissions.READ_AUDIO, function() { 
					  checkPermission(permissions.MODIFY_AUDIO_SETTINGS, function() { 
						checkPermission(permissions.WRITE_EXTERNAL_STORAGE, function() {
						  self.media = Object.assign(self.media, _media);
						}, {type: 'media', methods: Object.keys(_media)});
					  }, {type: 'media', methods: Object.keys(_media)});
					}, {type: 'media', methods: Object.keys(_media)});
				};
		        var _geo = {
		            get: function(opts, fn) {
		                var options = opts || {
		                  enableHighAccuracy: true,
		                  maximumAge: 3600000
		                };
		                if (navigator.geolocation) {
		                 navigator.geolocation.getCurrentPosition(function(pos) {
		                   if (_cfg.notify) { _cfg.notify(NOTIFY.GEOLOC_SUCCESS, pos); }
		                   if (fn) { fn(NOTIFY.GEOLOC_SUCCESS, pos); }
		                 }, function(err) {
		                   if (_cfg.notify) { _cfg.notify(NOTIFY.GEOLOC_ERROR, err); }
		                   if (fn) { fn(NOTIFY.GEOLOC_ERROR, err); }
		                 }, options);
		                }
		            },
		            watch: function(opts, fn) {
		               var options = opts || {
		                  maximumAge: 3600000,
		                  timeout: 3000,
		                  enableHighAccuracy: true,
		               };
		               if (navigator.geolocation) {
		                 var watchID = navigator.geolocation.watchPosition(function(pos) {
		                   if (_cfg.notify) { _cfg.notify(NOTIFY.GEOLOC_SUCCESS, pos); }
		                   if (fn) { fn(NOTIFY.GEOLOC_SUCCESS, pos); }
		                 }, function(err) {
		                   if (_cfg.notify) { _cfg.notify(NOTIFY.GEOLOC_ERROR, err); }
		                   if (fn) { fn(NOTIFY.GEOLOC_ERROR, err); }
		                 }, options);
		                 return watchID;
		               }
		            },
		            clear: function(watchId) {
		              if (navigator.geolocation) { navigator.geolocation.clearWatch(watchId); }
		            }
		        };
		      	enable.geo = function() {
					checkPermission(permissions.ACCESS_COARSE_LOCATION, function() {
					  checkPermission(permissions.ACCESS_FINE_LOCATION, function() {
						checkPermission(permissions.ACCESS_LOCATION_EXTRA_COMMANDS, function() {
						  self.geo = Object.assign(self.geo, _geo);
						}, {type: 'geo', methods: Object.keys(_geo)});
					  }, {type: 'geo', methods: Object.keys(_geo)});
					}, {type: 'geo', methods: Object.keys(_geo)});
				};
		        var _gallery = {
		          	getThumbnail: function(libItm, fn) { // or LibItm.id
		              if (cordova && cordova.plugin && cordova.plugins.photoLibrary) {
		                cordova.plugins.photoLibrary.getThumbnail(libItm, function (libItm) {
		                  if (_cfg.notify) { _cfg.notify(NOTIFY.DEFAULT_SUCCESS, libItm); }
		                  if (fn) { fn(NOTIFY.DEFAULT_SUCCESS, libItm); }
		                }, function (err) {
		                  if (_cfg.notify) { _cfg.notify(NOTIFY.DEFAULT_ERROR, err); }
		                  if (fn) { fn(NOTIFY.DEFAULT_ERROR, err); }
		                });
		              }
		            },
		          	getPhoto: function(libItm, fn) { // or LibItm.id
		              if (cordova && cordova.plugin && cordova.plugins.photoLibrary) {
		                cordova.plugins.photoLibrary.getPhoto(libItm, function (libItm) {
		                  if (_cfg.notify) { _cfg.notify(NOTIFY.DEFAULT_SUCCESS, libItm); }
		                  if (fn) { fn(NOTIFY.DEFAULT_SUCCESS, libItm); }
		                }, function (err) {
		                  if (_cfg.notify) { _cfg.notify(NOTIFY.DEFAULT_ERROR, err); }
		                  if (fn) { fn(NOTIFY.DEFAULT_ERROR, err); }
		                });
		              }
		            },
		            saveImage: function(album, url, fn) {
		              album = album || App.ProductName;
		              if (cordova && cordova.plugin && cordova.plugins.photoLibrary) {
		                cordova.plugins.photoLibrary.saveImage(url, album, function (libItm) {
		                  if (_cfg.notify) { _cfg.notify(NOTIFY.SAVEIMAGE_SUCCESS, libItm); }
		                  if (fn) { fn(NOTIFY.SAVEIMAGE_SUCCESS, libItm); }
		                }, function (err) {
		                  if (_cfg.notify) { _cfg.notify(NOTIFY.SAVEIMAGE_ERROR, err); }
		                  if (fn) { fn(NOTIFY.SAVEIMAGE_ERROR, err); }
		                });
		              }
		            },
		          	saveVideo: function(album, url, fn) {
		              album = album || App.ProductName;
		              if (cordova && cordova.plugin && cordova.plugins.photoLibrary) {
		                cordova.plugins.photoLibrary.saveVideo(url, album, function (libItm) {
		                  if (_cfg.notify) { _cfg.notify(NOTIFY.SAVEVIDEO_SUCCESS, libItm); }
		                  if (fn) { fn(NOTIFY.SAVEVIDEO_SUCCESS, libItm); }
		                }, function (err) {
		                  if (_cfg.notify) { _cfg.notify(NOTIFY.SAVEVIDEO_ERROR, err); }
		                  if (fn) { fn(NOTIFY.SAVEVIDEO_ERROR, err); }
		                });
		              }
		            },
		            getlibrary: function(options, fn) {
		              if (cordova && cordova.plugin && cordova.plugins.photoLibrary) {
		                cordova.plugins.photoLibrary.getLibrary(
		                  function (result) {
		                    var library = result.library;
		                    // Send array of library objects to notify.
		                    if (_cfg.notify) { _cfg.notify(NOTIFY.GETLIBRARY_SUCCESS, library); }
		                    if (fn) { fn(NOTIFY.GETLIBRARY_SUCCESS, library); }
		                  },
		                  function (err) {
		                    if (_cfg.notify) { _cfg.notify(NOTIFY.GETLIBRARY_ERROR, err); }
		                    if (fn) { fn(NOTIFY.GETLIBRARY_ERROR, err); }
		                  },
		                  options || { // optional options
		                    thumbnailWidth: 512,
		                    thumbnailHeight: 384,
		                    quality: 0.8,
		                    includeAlbumData: false // default
		                  }
		                );
		              }
		            },
		            getalbum: function(fn) {
		              if (cordova && cordova.plugin && cordova.plugins.photoLibrary) {
		                cordova.plugins.photoLibrary.getAlbums(
		                  function (albums) {
		                    // Send an array of almbuns to notify.
		                    if (_cfg.notify) { _cfg.notify(NOTIFY.GETALBUM_SUCCESS, albums); }
		                    if (fn) { fn(NOTIFY.GETALBUM_SUCCESS, albums); }
		                  }, 
		                  function (err) {
		                    if (_cfg.notify) { _cfg.notify(NOTIFY.GETALBUM_ERROR, err); }
		                    if (fn) { fn(NOTIFY.GETALBUM_ERROR, err); }
		                  }
		                );
		              }
		            }
		        };
		        enable.gallery = function() {
		          checkPermission(permissions.WRITE_EXTERNAL_STORAGE, function() {
					self.gallery = Object.assign(self.gallery, _gallery);
				  }, {type: 'gallery', methods: Object.keys(_gallery)});
		        };
		      
		      	var _camera = {
		            getpicture: function(options, fn) {
		              if (navigator.camera) {
		                navigator.camera.getPicture(function(imgURI) {
		                  // var image = document.getElementById('myImage');
		                  // image.src = imageURI;
		                  if (_cfg.notify) { _cfg.notify(NOTIFY.CAMERA_SUCCESS, imgURI); }
		                  if (fn) { fn(NOTIFY.CAMERA_SUCCESS, imgURI); }
		                }, function(err) {
		                  if (_cfg.notify) {  _cfg.notify(NOTIFY.CAMERA_ERROR, err); }
		                  if (fn) { fn(NOTIFY.CAMERA_ERROR, err); }
		                }, options);
		              }
		            },
		            cleanup: function(fn) {
		              if (navigator.camera) {
		                navigator.camera.cleanup(function() {
		                  if (_cfg.notify) { _cfg.notify(NOTIFY.CAMCLEANUP_SUCCESS); }
		                  if (fn) { fn(NOTIFY.CAMCLEANUP_SUCCESS); }
		                }, function(err) {
		                  if (_cfg.notify) { _cfg.notify(NOTIFY.CAMCLEANUP_ERROR, err); }
		                  if (fn) { fn(NOTIFY.CAMCLEANUP_ERROR, err); }
		                });
		              }
		            },
		            options: function(quality, srcType) {
		              var options;
		              if (Camera) {
		                options = {
		                    // Some common settings are 20, 50, and 100
		                    // srcType = Camera.PictureSourceType.CAMERA
		                    quality: quality,
		                    destinationType: Camera.DestinationType.FILE_URI,
		                    // In this app, dynamically set the picture source, Camera or photo gallery
		                    sourceType: srcType,
		                    encodingType: Camera.EncodingType.JPEG,
		                    mediaType: Camera.MediaType.PICTURE,
		                    allowEdit: true,
		                    correctOrientation: true
		                };
		              }
		              return options || null;
		            }
		        };
		        enable.camera = function() {
					checkPermission(permissions.CAMERA, function() {
					  checkPermission(permissions.WRITE_EXTERNAL_STORAGE, function() {
						self.camera = Object.assign(self.camera, _camera);
					  }, {type: 'camera', methods: Object.keys(_camera)});
					}, {type: 'camera', methods: Object.keys(_camera)});
				};
		      	// USES: cordova-sms-plugin
		        var _sms = {
					watch: function(fn) {
		              if (window.SMS) {
						  SMS.startWatch(function() {
							if (_cfg.notify) { _cfg.notify(NOTIFY.ENABLE_WATCH_SUCCESS); }
							if (fn) { fn(NOTIFY.ENABLE_WATCH_SUCCESS); }
						  }, function() {
							if (_cfg.notify) { _cfg.notify(NOTIFY.ENABLE_WATCH_ERROR); }
							if (fn) { fn(NOTIFY.ENABLE_WATCH_ERROR); }
						  });
					  }
					},
					intercept: function(fn) {
		              if (window.SMS) {
						  SMS.enableIntercept(true, function() {
							if (_cfg.notify) { _cfg.notify(NOTIFY.ENABLE_INTERCEPT_SUCCESS); }
							if (fn) { fn(NOTIFY.ENABLE_INTERCEPT_SUCCESS); }
						  }, function() {
							if (_cfg.notify) { _cfg.notify(NOTIFY.ENABLE_INTERCEPT_ERROR); }
							if (fn) { fn(NOTIFY.ENABLE_INTERCEPT_ERROR); }
						  });
					  }
					},
		            send: function (addr, msg, fn) {
		              if (window.SMS) { 
		                SMS.sendSMS(addr, msg, function() {
		                  if (_cfg.notify) { _cfg.notify(NOTIFY.SENDMSGS_SUCCESS); }
		                  if (fn) { fn(NOTIFY.SENDMSGS_SUCCESS); }
		                }, function(err) {
		                  if (_cfg.notify) { _cfg.notify(NOTIFY.SENDMSGS_ERROR, err); }
		                  if (fn) { fn(NOTIFY.SENDMSGS_ERROR, err); }
		                });
		              } else { alert('SMS is not loaded!'); }
		            },
		            delete: function(filter, fn) {
		              if (window.SMS) {
						  SMS.deleteSMS(filter, function( n ) {
							if (_cfg.notify) { _cfg.notify(NOTIFY.DELETEMSGS_SUCCESS, n); }
							if (fn) { fn(NOTIFY.DELETEMSGS_SUCCESS, n); }
						  }, function(err) {
							if (_cfg.notify) { _cfg.notify(NOTIFY.DELETEMSGS_ERROR, err); }
							if (fn) { fn(NOTIFY.DELETEMSGS_ERROR, err); }
						  });
					  }
		            },
		            list: function(filter, fn) {
		              if (window.SMS) {
						  SMS.listSMS(filter, function(data) {
							// NOTE: data is an array of messages.
							if (_cfg.notify) { _cfg.notify(NOTIFY.LISTMSGS_SUCCESS, data); }
							if (fn) { fn(NOTIFY.LISTMSGS_SUCCESS, data); }
						  }, function(err) {
							if (_cfg.notify) { _cfg.notify(NOTIFY.LISTMSGS_ERROR, err); }
							if (fn) { fn(NOTIFY.LISTMSGS_ERROR, err); }
						  });
					  }
		            },
		            options: function(options) {
		              if (window.SMS) { SMS.setOptions(options);}
		            }
		        };
				enable.sms = function() {
		          if (!self.sms) { self.sms = {}; }
		          function requestSMSPermission() {
		            var success = function (hasPermission) { 
		              if (!hasPermission) {
		                _sms.requestPermission(function() {
		                  console.log('[OK] Permission accepted');
		                  proceed(true);
		                }, function() {
		                  console.info('[WARN] Permission not accepted');
		                  // Handle permission not accepted
		                });
		              }
		            };
		            var error = function (e) { alert('Something went wrong:' + e); };
		            _sms.hasPermission(success, error);
		          }
		          function error(e) {
		            alert('Something went wrong:' + e);
		          }
		          function proceed(hasPermission) {
		            if (hasPermission) {
		              self.sms.createSms = function(number, msg, opts, cbk) {
		                _sms.send(number, msg, opts, function() {
		                  self.sms._enabled = true;
		                  self.sms._status = 'success';
		                  if (cbk) { cbk(true, 'ok'); }
		                }, function(e) {
		                  if (cbk) { cbk(false, e); }
		                });
		              };
		            } else {
		              requestSMSPermission();
		            }
		          }
		          if (typeof(sms) == 'object') {
		          	_sms.hasPermission(proceed, error);
		          }
		        };
		      	enable.SMS = function() {
		          if (!self.sms) { self.sms = {}; }
		          
		          function onMsg() {
		          }
		          function success(action, result, objAry) {
		            // #id = message id for delete
		            // #num = # of messages for restore
		            // true, ary = array for list
		            // t/f for intercept (on/Off)
		            // t/f for send message
		            // t/f for watch messages
		            
		            switch (action) {
		              case 'delete':
		                var idx = smsList.find(function(it) { return it._id == objAry._id; });
		                if (idx > -1) { smsList.splice(idx, 1); }
		                break;
		                
		              case 'onmsg':
		                smsList.push(result.data);
		                break;
		                
		              case 'list':
		                if (result) {
		                  for (var i in objAry) {
							  if (objAry.hasOwnProperty(i)) {
								smsList.push(objAry[i]);
							  }
		                  }
		                }
		                break;
		            }
		          }
		          function failed(err) {
		            console.log('Error:');
		            console.log(err);
		          }
		          
		          if (typeof(SMS) == 'object') {
		            self.sms.notify = onMsg;
		            self.sms.sendSms = function(sendto, msg) {
		              if(sendto.indexOf(";") >= 0) {
		                  sendto = sendto.split(";");
		                  for (var i in sendto) {
							  if (sendto.hasOwnProperty(i)) {
								sendto[i] = sendto[i].trim();
							  }
		                  }
		              }
		              SMS.sendSMS(sendto, msg, function() {
		                success('send', true);
		              }, failed);
		            };
		            self.sms.listSms = function(filter) {
		              SMS.listSMS(filter || {}, function(data) {
		                success('list', Array.isArray(data), data);
		              }, failed);
		            };
		            self.sms.deleteSms = function(ary) {
		              ary.forEach(function(sms) {
		                SMS.deleteSMS({_id: sms["_id"]}, function(id) {		// jshint ignore:line
		                  success('delete', id, sms);
		                }, failed);
		              });
		            };
		            self.sms.startWatch = function() {
		              SMS.startWatch(function() {
		                success('watch', true);
		              }, failed);
		            };
		            self.sms.stopWatch = function() {
		              SMS.stopWatch(function() {
		                success('watch', false);
		              }, failed);
		            };
		            self.sms.enableIntercept = function(blOnOff) {
		              if (blOnOff) {
		                smsList.length = 0;
		              }
		              SMS.enableIntercept(blOnOff, function() {
		                success('intercept', blOnOff);
		              }, failed);
		            };
		            self.sms.restoreSms = function() {
		              smsList.length = 0;
		              SMS.restoreSMS(smsList, function(num) {
		                success('restore', num);
		              }, failed);
		            };
		            self.sms.setOptions = function(options) {	// jshint ignore:line
		            };
		            document.addEventListener('onSMSArrive', function(e) {
		              success('onmsg', e);
					});
		          }
		        };
		        var _notify = {
		          	vibrate: function(dur) {
		              if (navigator.notification.vibrate) { navigator.notification.vibrate(dur); }
		            },
		          	beep: function(times) {
		              if (navigator.notification.beep) { navigator.notification.beep(times); }
		            },
		            alert: function(msg, cllbk, title, button) {
		              if (navigator.notification.alert) { navigator.notification.alert(msg, cllbk, title, button); }
		            },
		            confirm: function(msg, cllbk, title, button) {
		              if (navigator.notification.confirm) { navigator.notification.confirm(msg, cllbk, title, button); }
		            }
		        };
		        enable.notify = function() {
					checkPermission(permissions.POST_NOTIFICATIONS, function() {
					  self.notify = Object.assign(self.notify, _notify);
					}, {type: 'notify', methods: Object.keys(_notify)});
				};
		      	self.init = function(parms) {
		          if (typeof(cordova) == 'undefined') { return; }
		          
		          _cfg = parms;
		          var plgn = _cfg.plugins || [];
				  
		          // Global Phone Listener/Callback.
		          // parms = {
		          //     plugins: ['sms', 'contact', 'notify'],
		          //     notify: function(result, data) {}
		          // }
		          //
				  // List of plugins to enable.
				  // parms.plugins = ['sms', 'contact', 'notify']
				  // check and enable permissions for each plugin group.
				  plgn.forEach(function(itm) {
					  if (enable && enable[itm] && (typeof(self[itm]) == 'undefined' ||
		                  typeof(self[itm]._status) == 'undefined')) { enable[itm](); }
				  });
				  
				};
		      	self.destroy = function() {
		          if (SMS) {
		            if (_cfg.watch) {
		              SMS.stopWatch(function() {
		                if (_cfg.notify) { _cfg.notify(NOTIFY.DISABLE_WATCH_SUCCESS); }
		              }, function() {
		                if (_cfg.notify) { _cfg.notify(NOTIFY.DISABLE_WATCH_ERROR); }
		              });
		            }
		            
		            if (_cfg.intercept) {
		              SMS.enableIntercept(false, function() {
		                if (_cfg.notify) { _cfg.notify(NOTIFY.DISABLE_INTERCEPT_SUCCESS); }
		              }, function() {
		                if (_cfg.notify) { _cfg.notify(NOTIFY.DISABLE_INTERCEPT_ERROR); }
		              });
		              SMS.restoreSMS(smsList, function( n ) {
		                smsList.length = 0;
		                if (_cfg.notify) { _cfg.notify(NOTIFY.RESTOREMSGS_SUCCESS, n); }
		              }, function(err) {
		                if (_cfg.notify) { _cfg.notify(NOTIFY.RESTOREMSGS_ERROR, err); }
		              });
		            }
		          }
		        };
		      	// Phone Diagnostic Method.
		        // --------------------------
		      	self.diagnose = function(dlg, ctrl) {
		          if (typeof(cordova) == 'undefined') { return; }
		          var info = '', cnt = 0;
		          
		          function log(out) {
		            if (dlg && ctrl && $f.type(dlg, ctrl) == 'textarea') {
		              cnt++;
		              out = (typeof(out) != 'string') ? JSON.stringify(out) : out;
		              info += out + '\n';
		              
		              $f.text(dlg, ctrl, info);
		            } else {
		              console.log(out);
		            }
		          }
		          
		          // All generic mobile information.
		          //
		          log('\nDEVICE:');
		          ['cordova', 'model', 'platform', 'uuid',
		           'version', 'serial', 'manufacturer'].forEach(function(it) {
		          	log(it + ' = ' + self.device.get(it));
		          });
		          
		          log('\nAGENT:');
		          log(self.Agent());
		          
		          log('\nVENDOR:');
		          log(self.Vendor());
		          
				  log('\nLIST OF PLUGINS:');
				  log(self.PluginList());
				  log('\n');
				  
		          if (self.orientation) {
		            log('\nORIENTATION:');
		            log(self.orientation.get());
		          }
		          
		          if (self.network) {
		            log('\nNETWORK:');
		            self.network.update();
		            log('Network Connection = ' + self.network.get());
		          }
		          
		          if (self.battery) {
		            log('\nBATTERY:');
		            log(self.battery.get());
		          }
		          
		          if (self.compass) {
		            self.compass.getHeading(function(result, data) {
		            	log('\nCOMPASS:');
		            	log(data);
		            });
		          }
		          
		          if (self.motion) {
		            self.motion.getMotion(function(result, data) {
		               	log('\nMOTION:');
		           		log(data);
		            });
		          }
		          
		          if (self.globalize) {
		            log('\nGLOBALIZE:');
		            log('Language = ' + self.globalize.getLanguage());
		            log('LocaleName = ' + self.globalize.getLocaleName());
		          }
		        
		          if (self.statusbar) {
		            log('\nSTATUSBAR:');
		            log(self.statusbar.get());
		          }
		          
		          if (self.vibrate) {
		            log('\nVIBRATE:');
		            log('Vibrate 2 second(s).');
		            self.vibrate.play(2000);
		          }
		          
		          if (self.files) {
		            log('\nFILES:');
		            ['app', 'store', 'temp', 'cache', 'docs', 'shared', 'sync'].forEach(function(itm) {
		              log(' - file.path(' + itm + ') = "' + self.files.path(itm) + '"');
		            });
		            // Write, Read, List, Exists, Delete
		            log('\n1. Write test file "test.txt".');
		            self.files.write('./test.txt', 'This is a test ' + (new Date()).Format('#MM#-#DD#-#YYYY# #hh#:#mm# #AMPM#'), function(msg, res) {
		            if (res) {
		              log('2. Check for wrong file "test.png".');
		              self.files.exists('./test.png', function(msg, res) {
		                if (!res) {
		                  log('3. Test for correct file "test.txt".');
		                  self.files.exists('./test.txt', function(msg, res) {
		                    if (res) {
		                      log('4. Read test file.');
		                      self.files.read('./test.txt', function(msg, res) {
		                        log('\nFILE CONTENT:');
		                        log(res);
		                        
		                        log('\n5. Delete file.');
		                        self.files.delete('./test.txt', function(msg, res) {
		                          if (res) {
		                            log('6. Verify deleted file.');
		                            self.files.exists('./test.txt', function(msg, res) {
		                              if (!res) {
		                                log('\nFILE DELETED! File I/O test completed!');
		                              }
		                            });
		                          }
		                        });
		                      });
		                    }
		                  });
		                }
		              });
		            }
		          });
		          }
		          
		          if (self.geo) {
		            self.geo.get(null, function(result, data) {
		              log('\nGEO:');
		              log({result: result, data: data});
		            });
		          }
		          
		          if (self.media) {
		            log('\nMEDIA:');
		            var media = self.media.init(Env.domain() + '/media/drums.mp3', function(msg, res) {
		              if (res && media) {
		                log('Playing drums.mp3');
		                self.media.play(media);
		              }
		            });
		          }
		          
		          if (self.notify) {
		            log('\nNOTIFY:');
		            log('Vibrate for 2 secs.');
		            self.notify.vibrate(2);
		            log('Test notification alert.');
		            self.notify.alert('You are a winner', function() {
		              log('Alert has dismissed.');
		            }, "Confirm:", 'Close');
		            log('Test notification confirmation.');
		            self.notify.confirm('Did this popup work?', function(idx) {
		              log('Button ' + idx + ' was pressed.');
		            }, "Confirm:", ['Yes', 'No']);
		          }
		          
		          if (self.gallery) {
		            self.gallery.getLibrary(null, function(result) {
		                log('\nGALLERY:');
		                log(' Gallery getLibrary:');
		              	var lib = result.library || [];
		              
		              	lib.forEach(function(itm) {
		                  log(itm);
		                });
		            });
		          }
		          
		          if (self.camera) {
		            log('\nCAMERA:');
		            log(' Camera Enabled: ' + self.camera._status);
		          }
		      
		          // Sms
		        };
		      
				// Attach Phone Features when Device is Ready.
				function onDeviceReady() {
		          // Attach files, vibrate, battery, network & device
		          // by default.
		          if (typeof(cordova) != 'undefined') {
		            enable.files();
		            enable.vibrate();
		            enable.battery();
		            enable.network();
		            if (window.device && device.cordova) { enable.device(); }
		          }
				}
				document.addEventListener("deviceready", onDeviceReady, false);
			};
			
		  	Phone.prototype.type = function () {
				return "Phone";
			};
			Phone.prototype.toDto = function () {
				return { };
			};
			return Phone;
		});
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
		/* Strings Component Manager/Factory :
		*/
		FACTORY.Register('Strings', function StringFactory() {
			var Strings = function () {
				var self = this;
				
				function escapeRegExp(text) {
					return text.replace(/[-[\]{}()*+?.,\\^$|\s]/g, '\\$&');
				}
				self.capFirst = function(txt) {
					return txt.substr(0,1).toUpperCase() + txt.substr(1).toLowerCase();
				};
				self.replaceFirst = function(find, repl, str) {
					if (!find) { return str; }
					
					var retval = "";
					repl = repl.toString();
					if (str && typeof str == 'string') {
						find = escapeRegExp(find);
						retval = str.replace(find, repl);
					} else { retval = str; }
					return retval;
				};
				self.replaceAll = KERNEL.replaceAll;
				self.replaceAllIC = function(find, repl, str) {
					if (!find) { return str; }
					
					var retval = "";
					repl = repl.toString();
					if (str && typeof str == 'string') {
						find = escapeRegExp(find);
						retval = str.replace(new RegExp(find, 'gi'), repl);
					} else { retval = str; }
					return retval;
				};
				self.getStrLen = function(sCmd, len) {
					if (sCmd.length >= len) {
						return {
							item: sCmd.substr(0, len),
							remainder: sCmd.substr(len+1)
						};
					} else {
						return {
							item: sCmd,
							remainder: ''
						};
					}
				};
				self.getStrParam = function(sCmd, delim) {
					var p;
					p = sCmd.toLowerCase().indexOf(delim.toLowerCase());
					if (p > -1) {
						return {
							item: sCmd.substr(0, p).trimLeft(),
							remainder: sCmd.substr(p + delim.length)
						};
					} else {
						return {
							item: sCmd.trimLeft(),
							remainder: ''
						};
					}
				};
				self.justifyCode = function(inTxt, tabCnt) {
					var jtab, retval;
					if (inTxt.trim() != '') {
						while (inTxt.right(2) == '\r\n') {
							inTxt = inTxt.left(inTxt.length - 2);
						}
						retval = self.replaceAll('<<' + 'CRLF' + '>>', '\r\n', inTxt);
						retval = self.replaceAll('<<' + 'CR' + '>>', '\r\n', inTxt);
						retval = self.replaceAll('\r\n\r\n', '\r\n', retval);
						if (retval.right(2) != '\r\n') { retval += '\r\n'; }
						jtab = "\t".repeat(tabCnt);
						retval = jtab + self.replaceAll('\r\n', '\r\n' + jtab, retval);
						return '\r\n' + retval;
					} else { return ''; }
				};
				self.justifyCodeLF = function(inTxt, tabCnt) {
					var jtab, retval;
					if (inTxt.trim() != '') {
						while (inTxt.right(2) == '\r\n') {
							inTxt = inTxt.left(inTxt.length - 2);
						}
						retval = self.replaceAll('<<' + 'CRLF' + '>>', '\n', inTxt);
						retval = self.replaceAll('<<' + 'CR' + '>>', '\n', inTxt);
						retval = self.replaceAll('\r\n', '\n', retval);
						retval = self.replaceAll('\n\n', '\n', retval);
						if (retval.substr(retval.length-1) != '\n') { retval += '\n'; }
						
						jtab = "\t".repeat(tabCnt);
						retval = jtab + self.replaceAll('\n', '\n' + jtab, retval);
						retval = self.replaceAll('\t', '    ', retval);
						return '\n' + retval;
					} else { return ''; }
				};
				self.cleanDeadSpace = function(inTxt) {
					var retval = '', inDat, ln, blBlank;
					inDat = inTxt;
					inDat = self.replaceAll('\t', '    ', inDat);
					ln = inDat.split('\r\n');
					for (var x = 0; x < ln.length; x++) {
						if (ln[x].trim() != '') {
							retval = retval + ln[x] + '\r\n';
							blBlank = false;
						} else {
							if (!blBlank) {
								blBlank = true;
								retval = retval + '\r\n';
							}
						}
					}
					return retval;
				};
				
				self.stripNumerics = function(inTxt) {
					var newtext, x, falpha;
					falpha = '0123456789@#$%*^[]=\|<>~';
					newtext = '';
					x = 0;
					while (x < inTxt.length) {
						if (falpha.indexOf(inTxt.substr(x,1)) == -1) {
							newtext += inTxt.substr(x,1);
						}
						x++;
					}
					return newtext.trim();
				};
				self.numericOnly = function(inTxt) {
					var newtext, x, falpha;
					falpha = '1234567890';
					falpha = '.+-*/' + falpha;
					newtext = '';
					x = 0;
					while (x < inTxt.length) {
						if (falpha.indexOf(inTxt.substr(x,1)) > -1) {
							newtext += inTxt.substr(x,1);
						}
						x++;
					}
					return newtext.trim();
				};
				self.alphaOnly = function(inTxt) {
					var newtext, x, falpha;
					falpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
					falpha += falpha.toLowerCase();
					falpha = '._-' + falpha;
					newtext = '';
					x = 0;
					while (x < inTxt.length) {
						if (falpha.indexOf(inTxt.substr(x,1)) > -1) {
							newtext += inTxt.substr(x,1);
						}
						x++;
					}
					return newtext.trim();
				};
				self.alphaNumOnly = function(inTxt) {
					var newtext, x, falpha;
					falpha = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
					falpha += falpha.toLowerCase();
					falpha = '._-' + falpha;
					newtext = '';
					x = 0;
					while (x < inTxt.length) {
						if (falpha.indexOf(inTxt.substr(x,1)) > -1) {
							newtext += inTxt.substr(x,1);
						}
						x++;
					}
					return newtext.trim();
				};
				self.asciiStrip = function(inTxt) {
					var newtext, x, falpha;
					falpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
					falpha += falpha.toLowerCase();
					falpha = '0123456789()._-+' + falpha;
					newtext = '';
					x = 0;
					while (x < inTxt.length) {
						if (falpha.indexOf(inTxt.substr(x,1)) > -1) {
							newtext += inTxt.substr(x,1);
						}
						x++;
					}
					return newtext.trim();
				};
				self.objectNameStrip = function(inTxt) {
					var newtext, x, falpha;
					falpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ()';
					falpha += falpha.toLowerCase();
					falpha = '0123456789%+! ' + falpha;
					newtext = '';
					x = 0;
					while (x < inTxt.length) {
						if (falpha.indexOf(inTxt.substr(x,1)) > -1) {
							newtext += inTxt.substr(x,1);
						}
						x++;
					}
					return newtext.trim();
				};
				self.labelStrip = function(inTxt) {
					var newtext, x, falpha;
					falpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
					falpha += falpha.toLowerCase();
					falpha = '0123456789._+' + falpha;
					newtext = '';
					x = 0;
					while (x < inTxt.length) {
						if (falpha.indexOf(inTxt.substr(x,1)) > -1) {
							newtext += inTxt.substr(x,1);
						}
						x++;
					}
					return newtext.trim();
				};
				self.fileStrip = function(inTxt) {
					var newtext, x, falpha;
					falpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
					falpha += falpha.toLowerCase();
					falpha = '0123456789._-+' + falpha;
					newtext = '';
					x = 0;
					while (x < inTxt.length) {
						if (falpha.indexOf(inTxt.substr(x,1)) > -1) {
							newtext += inTxt.substr(x,1);
						}
						x++;
					}
					return newtext.trim();
				};
				self.formatVal = function(inTxt, num) {
					return self.replaceFirst("#", num, inTxt);
				};
				
				self.colorStrToRGB = function(inTxt) {
					var tmp;
					if (inTxt.toLowerCase().indexOf('rgb') > -1) {
						tmp = inTxt.split('(')[1].split(')')[0];
						return {
							r: Number(tmp.split(',')[0]),
							g: Number(tmp.split(',')[1]),
							b: Number(tmp.split(',')[2]),
						};
					} else {
						return {
							r: 0, g: 0, b: 0
						};
					}
				};
				self.rgbToHEX = function(r,g,b) {
					var rgb = b | (g << 8) | (r << 16);
					return '#' + (0x1000000 + rgb).toString(16).slice(1);
				};
				self.hexToRGB = function(hex) {
					var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
					return result ? {
						r: parseInt(result[1], 16),
						g: parseInt(result[2], 16),
						b: parseInt(result[3], 16)
					} : null;
				};
				
				self.normalizeEOL = function(inTxt) {
					var retval = self.replaceAll('\n', '\r\n', inTxt);
					retval = self.replaceAll('\r\r\n', '\r\n', retval);
					retval = self.replaceAll('\r\n\r\n\r\n', '\r\n\r\n', retval);
					return retval;
				};
				self.normalizeTrailingEOL = function(inTxt) {
					var retval = inTxt;
					while (retval.right(2) == '\r\n') {
						retval = retval.left(retval.length-2);
					}
					retval = retval + '\r\n';
					return retval;
				};
				self.formatJSON = function(inTxt, blSkipComma) {
					var arr, retval = self.replaceAll('\r\n', '\n', inTxt);
					var ary = [], tab = [];
					
					if (!blSkipComma) {
						['",'].forEach(function(it) {
							retval = self.replaceAll(it, it + '\n', retval);
						});
					}
					['}'].forEach(function(it) {
						retval = self.replaceAll(it, '\n' + it, retval);
					});
					
					ary = ['},'];
					if (!blSkipComma) { ary.push('],'); }
					ary.forEach(function(it) {
						retval = self.replaceAll(it, it + '\n', retval);
					});
					
					ary = ['{"', '["', '[{', '}]', '{}', '[]'];
					if (!blSkipComma) { ary.unshift(',"'); }
					ary.forEach(function(it) {
						retval = self.replaceAll(it, it.split('')[0] + '\n' + it.split('')[1], retval);
					});
					retval = self.replaceAll('":', '": ', retval);
					
					arr = retval.split('\n');
					arr.forEach(function(ln, idx, ary) {
						if (['},', '],'].indexOf(ln.right(2)) > -1) { tab.pop(); }
						if (['}', ']'].indexOf(ln.right(1)) > -1) { tab.pop(); }
						ary[idx] = tab.join('') + ln;
						if (['{', '['].indexOf(ln.right(1)) > -1) { tab.push('\t'); }
					});
					return arr.join('\r\n');
				};
			};
			Strings.prototype.type = function () {
				return "Strings";
			};
			Strings.prototype.toDto = function () {
				return { };
			};
			return Strings;
		});
		// TODO: Analysis @ 8/9/2017 8:26AM
		/* WebView Component Manager/Factory :
		*/
		FACTORY.Register('WebView', function WebViewFactory() {
			var WebView = function (config) {
				var self = this;
		      	var view = {dlg: '', ctrl: ''}, main = {dlg: '', ctrl: ''};
		      	// Set the dialog/control which contains
		     	// the iFrame in your project. (last resort)
				self.config = function(parms) {
		          view = parms.view;	// Dialog with iFrame control.
		          main = parms.main;  	// Dialog to show when iFrame is closed.
				};
				self.open = function(url, blCustom) {
		          if (url) {
		          	if (blCustom && view.dlg && main.dlg) {
		              $f.load(view.dlg);
		              $f.setprop(view.dlg, view.ctrl + '.url', 'src', news.url);
		              $f.show(view.dlg);
		              $f.setstyle(view.dlg, '', {opacity: 0});
		              $f.max(view.dlg, function(anim) {
		                if (anim.pos == 100) {
		                  $f.fadeout(main.dlg, '', 40, function() {
		                    $f.hide(main.dlg);
		                  });
		                  $f.fadein(view.dlg, '', 40);
		                }
		              });
		              // TODO: Attach events to view.dlg.
		              // look for back button. [icnback, btnback, icnclose, btnclose]
		              
		            } else if ($nim.Agent.isMobile) {
		              // Use WebView:
		              // If WebKit message handler is available, send the message through it to Cordova application
		              if (window.webkit && webkit.messageHandlers && webkit.messageHandlers.cordova_iab) {
		                  // This means we are in a Cordova WebView
		                  var data = {
		                      // Custom event name
		                      eventName: 'open-external-url-in-new-tab',
		                      url: url
		                  };
		                  // Send message to InAppBrowser event listener so that Cordova app can handle it.
		                  webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify(data));
		              }
		              
		            } else {
		              window.open(url, "News", "_blank");
		            }
		          }
				};
		      
		      	// Attach events to custom dialog.
		      	self.events = {
		          onClose: function(e, itm) {
		            $f.unload(view.dlg);
		            $f.show(main.dlg);
		          },
		          onBack: function(e, itm) {
		            $f.fadeout(view.dlg, '', 40, function() {
		              $f.unload(view.dlg);
		            });
		            $f.fadein(main.dlg, '', 40, function() {
		              $f.show(main.dlg);
		            });
		          }
		        };
			};
				
			WebView.prototype.type = function () {
				return "WebView";
			};
			WebView.prototype.toDto = function () {
				var self = this;
				return { };
			};
			return WebView;
		});
			
	},
	Logon: function(instID) {
	 
	},
	Logoff: function(instID) {
	 
	},
	EndApp: function(instID) {
	 
	},
	StartApp: function(pos) {
	    try {
	        $k.enabled = false;
	        if (typeof($k.fluidDesktop) == "undefined") { DESKTOP.fluidDesktop = globals.fluidDesktop; }
	        if (typeof($k.desktop) == "undefined") { $k.desktop = false; }
	        $k.setuplogo();
	 
	        App.Code.RegisterFactories();
	        if ($fctry.exists("Main")) { Main = $fctry.new("Main"); }
	        else if ($fctry.exists("Events")) { AppEvents = $fctry.new("Events"); }
	 
	        /* This function is called before your Startup Dialog is shown. 
	           The KERNEL is disabled until the Startup Dialog is displayed. 
			     You CAN NOT manually display dialog(s) here. */
	    }
	    catch (err) {
	        if ($k.errhandler) {
	            $k.errhandler(err, null);
	        }
	    }
	    finally {
	        $k.enabled = true;
	    }
	    return pos;
	}
	
};
$k.wrapallfunctions($heap.mobile.Code);
 
/** 
 * Create ALL Dialog Instances -------------------------
 **/
 
/** Form Template --------------------------------------
 *  NAME: appassets
 *
 * version: 5.0
 **/
$heap.mobile['appassets'] = { };
$heap.mobile['appassets'] = {
    _flatten: true,
	_private: false,
	isLoaded: 0,
    isActivated: 0,
	count: 0,
	New: function(pos, show) {
		var instName;
		try {
			if (!KERNEL.enabled) return;
			if (!pos) {
				pos = { left: 0, top: 0, target: FORMS.Target };
			}
			pos.form = pos.form ? pos.form : 'appassets';
			if (!$heap.mobile[pos.form]) { pos.form = 'appassets'; }
			
			$k.instance.newform(pos.form, App.Dialog['appassets']);
			instName = $heap.mobile[pos.form].Load(pos);
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'New', target: {id: 'appassets'}});
			}
		}
		finally {
			if (show) { $heap.mobile[pos.form].Show(pos); }
			$k.instance.setbyelemid(instName);
			
			return instName;
		}
	},
	Menu: function(cmd) {
	},
    Load: function(pos) {
		var widgTarget = "", instID = "", options, props, styles, defPos;
		try {
			
			if (!KERNEL.enabled) return;		
			if (pos && pos.target) { FORMS.Target = pos.target; }
			if (App.Vars.running == false) { App.Vars.running = true; }
			if (App.target) { App.target = FORMS.Target; }
			
			 
			styles = ( null );
			defPos = {target: 'desktop' + DESKTOP.currentDesktop, dock:'RRRR', left:'0', top:'0', width:'480', height:'640'};
			pos = $k.instance.validatepos(pos, defPos);
			instID = $f.surface('appassets',pos.left,pos.top,480,640,styles);
			$f.hide('appassets');
				props = [{"name":"body.version","value":"v5.0"},{"name":"autosize","value":"false"},{"name":"disabled","value":false},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"_private","value":"false"},{"name":"bind","value":"false"},{"name":"clipmenu","value":"true"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"flattenonpull","value":"true"},{"name":"ignorezorder","value":"true"},{"name":"output","value":"normal"},{"name":"shadow","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-surface"},{"name":"useastheme","value":"false"},{"name":"watch","value":"false"}];
				$f.setprop('appassets','', props);
				styles = [{"name":"color","value":"#eeeeee"},{"name":"background-color","value":"#ffffff"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"visibility","value":"visible"},{"name":"displaymode","value":""},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"auto"},{"name":"z-index","value":"2"}];
				$f.setstyle('appassets','', styles);
			
			
			options = 'media/bulb-explode.jpg';
			$f.add('appassets','logo','imagex',options,'0','0','450','160');
				props = [{"name":"disabled","value":false},{"name":"form","value":"appassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-graphicx"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('appassets','logo', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"rgba(0,0,0,0)"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"4px double #888"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"14px"},{"name":"vertical-align","value":"middle"},{"name":"div.border-radius","value":"30%"},{"name":"div.display","value":"block"},{"name":"div.height","value":"100%"},{"name":"div.max-height","value":"160px"},{"name":"div.max-width","value":"160px"},{"name":"div.overflow","value":"hidden"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"div.width","value":"160px"}];
				$f.setstyle('appassets','logo', styles);
			$f.add('appassets','header','div','','0','0','120','32');
				props = [{"name":"disabled","value":false},{"name":"form","value":"appassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"ctype","value":"frame"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('appassets','header', props);
				styles = [{"name":"left","value":""},{"name":"top","value":""},{"name":"width","value":""},{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"1px #bbb dotted"},{"name":"display","value":"block"},{"name":"margin","value":"5px 5px 5px 5px"},{"name":"position","value":"relative"},{"name":"visibility","value":"visible"},{"name":"width","value":"auto"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"middle"}];
				$f.setstyle('appassets','header', styles);
			options = 'media/img_missing.png';
			$f.add($f.getinstname('appassets','header'),'icon4','icon',options,'0','0','28','28');
				props = [{"name":"disabled","value":false},{"name":"form","value":"appassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':''<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-graphic"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"image.class","value":"fa fa-angle-left"},{"name":"image.title","value":"angle-left"}];
				$f.setprop('appassets','icon4', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"bold"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"32px"},{"name":"text-align","value":"center"},{"name":"vertical-align","value":"middle"},{"name":"caption.position","value":"relative"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"image.color","value":"#999999"},{"name":"image.display","value":"block"},{"name":"image.font-size","value":"28px"}];
				$f.setstyle('appassets','icon4', styles);
			$f.add($f.getinstname('appassets','header'),'label1','label','','0','0','105','21');
				props = [{"name":"disabled","value":false},{"name":"form","value":"appassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Back"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':''<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('appassets','label1', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"14px"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"middle"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('appassets','label1', styles);
			$f.add('appassets','openauth','div','','0','0','450','48');
				props = [{"name":"disabled","value":false},{"name":"form","value":"appassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"ctype","value":"frame"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('appassets','openauth', props);
				styles = [{"name":"left","value":""},{"name":"top","value":""},{"name":"width","value":""},{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#ffffff"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0.5px #777 solid"},{"name":"display","value":"block"},{"name":"margin","value":"5px 5px 5px 5px"},{"name":"padding","value":"4px 0px 0px 0px"},{"name":"position","value":"relative"},{"name":"visibility","value":"visible"},{"name":"width","value":"auto"},{"name":"border-radius","value":"4px"},{"name":"box-shadow","value":"3px 3px 8px -1px rgba(0,0,0,0.67) inset"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"center"},{"name":"vertical-align","value":"middle"}];
				$f.setstyle('appassets','openauth', styles);
			options = 'media/img_missing.png';
			$f.add($f.getinstname('appassets','openauth'),'openauth:icnback','icon',options,'0','0','36','36');
				props = [{"name":"event-click","value":"main.auth.loginGoogle"},{"name":"disabled","value":false},{"name":"form","value":"appassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-graphic"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"image.class","value":"fa fa-google-plus-square"},{"name":"image.title","value":"Back"}];
				$f.setprop('appassets','openauth:icnback', props);
				styles = [{"name":"color","value":"#ff0000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"48pt"},{"name":"line-height","value":"48pt"},{"name":"text-align","value":"center"},{"name":"vertical-align","value":"middle"},{"name":"caption.position","value":"relative"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"4px 5px 0px 5px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"div.vertical-align","value":"middle"},{"name":"image.color","value":"inherit"},{"name":"image.display","value":"block"},{"name":"image.font-size","value":"30px"}];
				$f.setstyle('appassets','openauth:icnback', styles);
			options = 'media/img_missing.png';
			$f.add($f.getinstname('appassets','openauth'),'openauth:btnclose','icon',options,'390','8','32','32');
				props = [{"name":"event-click","value":"main.events.onTaskBarHide"},{"name":"disabled","value":false},{"name":"form","value":"appassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-graphic"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"image.class","value":"fa fa-angle-down"},{"name":"image.title","value":"angle-down"}];
				$f.setprop('appassets','openauth:btnclose', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#a1b5cc"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"absolute"},{"name":"border","value":"1px solid #bbb"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"7px"},{"name":"font-size","value":"24pt"},{"name":"line-height","value":"24pt"},{"name":"text-align","value":"center"},{"name":"vertical-align","value":"middle"},{"name":"caption.position","value":"relative"},{"name":"div.display","value":"inline-block"},{"name":"div.left","value":"calc(100% - 40px)"},{"name":"div.margin","value":"0px 6px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"absolute"},{"name":"div.top","value":"8px"},{"name":"image.color","value":"inherit"},{"name":"image.display","value":"block"},{"name":"image.font-size","value":"28px"}];
				$f.setstyle('appassets','openauth:btnclose', styles);
			options = 'media/img_missing.png';
			$f.add($f.getinstname('appassets','openauth'),'openauth:icon1','icon',options,'0','0','28','28');
				props = [{"name":"event-click","value":"main.auth.loginFacebook"},{"name":"disabled","value":false},{"name":"form","value":"appassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-graphic"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"image.class","value":"fa fa-facebook-official"},{"name":"image.title","value":"facebook-official"}];
				$f.setprop('appassets','openauth:icon1', props);
				styles = [{"name":"color","value":"#3f53ef"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"32px"},{"name":"text-align","value":"center"},{"name":"vertical-align","value":"middle"},{"name":"caption.position","value":"relative"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"4px 5px 0px 5px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"image.color","value":"inherit"},{"name":"image.display","value":"block"},{"name":"image.font-size","value":"30px"}];
				$f.setstyle('appassets','openauth:icon1', styles);
			options = 'media/img_missing.png';
			$f.add($f.getinstname('appassets','openauth'),'openauth:icon2','icon',options,'0','0','28','28');
				props = [{"name":"event-click","value":"main.auth.loginLinkedIn"},{"name":"disabled","value":false},{"name":"form","value":"appassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-graphic"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"image.class","value":"fa fa-linkedin-square"},{"name":"image.title","value":"linkedin-square"}];
				$f.setprop('appassets','openauth:icon2', props);
				styles = [{"name":"color","value":"#0000ff"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"32px"},{"name":"text-align","value":"center"},{"name":"vertical-align","value":"middle"},{"name":"caption.position","value":"relative"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"4px 5px 0px 5px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"image.color","value":"inherit"},{"name":"image.display","value":"block"},{"name":"image.font-size","value":"30px"}];
				$f.setstyle('appassets','openauth:icon2', styles);
			options = 'media/img_missing.png';
			$f.add($f.getinstname('appassets','openauth'),'openauth:icon3','icon',options,'0','0','28','28');
				props = [{"name":"event-click","value":"main.auth.loginTwitter"},{"name":"disabled","value":false},{"name":"form","value":"appassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-graphic"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"image.class","value":"fa fa-twitter-square"},{"name":"image.title","value":"twitter-square"}];
				$f.setprop('appassets','openauth:icon3', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"32px"},{"name":"text-align","value":"center"},{"name":"vertical-align","value":"middle"},{"name":"caption.position","value":"relative"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"4px 5px 0px 5px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"image.color","value":"inherit"},{"name":"image.display","value":"block"},{"name":"image.font-size","value":"30px"}];
				$f.setstyle('appassets','openauth:icon3', styles);
			$f.add('appassets','navback','div','','0','0','450','48');
				props = [{"name":"disabled","value":false},{"name":"form","value":"appassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"ctype","value":"frame"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('appassets','navback', props);
				styles = [{"name":"left","value":""},{"name":"top","value":""},{"name":"width","value":""},{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#ffffff"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0.5px #777 solid"},{"name":"display","value":"block"},{"name":"margin","value":"5px 5px 5px 5px"},{"name":"padding","value":"4px 0px 0px 0px"},{"name":"position","value":"relative"},{"name":"visibility","value":"visible"},{"name":"width","value":"auto"},{"name":"border-radius","value":"4px"},{"name":"box-shadow","value":"3px 3px 8px -1px rgba(0,0,0,0.67) inset"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"center"},{"name":"vertical-align","value":"middle"}];
				$f.setstyle('appassets','navback', styles);
			options = 'media/img_missing.png';
			$f.add($f.getinstname('appassets','navback'),'navback:icnback','icon',options,'0','0','36','36');
				props = [{"name":"disabled","value":false},{"name":"form","value":"appassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-graphic"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"image.class","value":"fa fa-angle-double-left"},{"name":"image.title","value":"Back"}];
				$f.setprop('appassets','navback:icnback', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"float","value":"left"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"48pt"},{"name":"line-height","value":"48pt"},{"name":"text-align","value":"center"},{"name":"vertical-align","value":"middle"},{"name":"caption.position","value":"relative"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"0px 0px 0px 8px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"div.vertical-align","value":"middle"},{"name":"image.color","value":"#999999"},{"name":"image.display","value":"block"},{"name":"image.font-size","value":"28px"}];
				$f.setstyle('appassets','navback:icnback', styles);
			options = 'media/img_missing.png';
			$f.add($f.getinstname('appassets','navback'),'navback:btnclose','icon',options,'390','8','32','32');
				props = [{"name":"event-click","value":"main.events.onTaskBarHide"},{"name":"disabled","value":false},{"name":"form","value":"appassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-graphic"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"image.class","value":"fa fa-angle-down"},{"name":"image.title","value":"angle-down"}];
				$f.setprop('appassets','navback:btnclose', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#a1b5cc"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"absolute"},{"name":"border","value":"1px solid #bbb"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"7px"},{"name":"font-size","value":"24pt"},{"name":"line-height","value":"24pt"},{"name":"text-align","value":"center"},{"name":"vertical-align","value":"middle"},{"name":"caption.position","value":"relative"},{"name":"div.display","value":"inline-block"},{"name":"div.left","value":"calc(100% - 40px)"},{"name":"div.margin","value":"0px 6px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"absolute"},{"name":"div.top","value":"8px"},{"name":"image.color","value":"inherit"},{"name":"image.display","value":"block"},{"name":"image.font-size","value":"28px"}];
				$f.setstyle('appassets','navback:btnclose', styles);
			$f.add($f.getinstname('appassets','navback'),'navback:lbback','label','','0','0','47','34');
				props = [{"name":"disabled","value":false},{"name":"form","value":"appassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Back"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('appassets','navback:lbback', props);
				styles = [{"name":"color","value":"#454545"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"float","value":"left"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"12pt"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"middle"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"3px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('appassets','navback:lbback', styles);
			$f.add('appassets','footer','div','','0','0','450','48');
				props = [{"name":"disabled","value":false},{"name":"form","value":"appassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"ctype","value":"frame"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('appassets','footer', props);
				styles = [{"name":"left","value":""},{"name":"top","value":""},{"name":"width","value":""},{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#ffffff"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0.5px #777 solid"},{"name":"display","value":"block"},{"name":"margin","value":"5px 5px 5px 5px"},{"name":"padding","value":"4px 0px 0px 0px"},{"name":"position","value":"relative"},{"name":"visibility","value":"visible"},{"name":"width","value":"auto"},{"name":"border-radius","value":"4px"},{"name":"box-shadow","value":"3px 3px 8px -1px rgba(0,0,0,0.67) inset"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"center"},{"name":"vertical-align","value":"middle"}];
				$f.setstyle('appassets','footer', styles);
			options = 'media/img_missing.png';
			$f.add($f.getinstname('appassets','footer'),'footer:copy','icon',options,'0','0','36','36');
				props = [{"name":"disabled","value":false},{"name":"form","value":"appassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-graphic"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"image.class","value":"fa fa-copy"},{"name":"image.title","value":"Copy"}];
				$f.setprop('appassets','footer:copy', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"48pt"},{"name":"line-height","value":"48pt"},{"name":"text-align","value":"center"},{"name":"vertical-align","value":"middle"},{"name":"caption.position","value":"relative"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"0px 4px 0px -25%"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"image.color","value":"#999999"},{"name":"image.display","value":"block"},{"name":"image.font-size","value":"20px"}];
				$f.setstyle('appassets','footer:copy', styles);
			options = 'media/img_missing.png';
			$f.add($f.getinstname('appassets','footer'),'footer:cut','icon',options,'0','0','28','28');
				props = [{"name":"disabled","value":false},{"name":"form","value":"appassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-graphic"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"image.class","value":"fa fa-cut"},{"name":"image.title","value":"Cut"}];
				$f.setprop('appassets','footer:cut', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"48pt"},{"name":"line-height","value":"48pt"},{"name":"text-align","value":"center"},{"name":"vertical-align","value":"middle"},{"name":"caption.position","value":"relative"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"0px 4px 0px 4px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"image.color","value":"#999999"},{"name":"image.display","value":"block"},{"name":"image.font-size","value":"20px"}];
				$f.setstyle('appassets','footer:cut', styles);
			options = 'media/img_missing.png';
			$f.add($f.getinstname('appassets','footer'),'footer:btnclose','icon',options,'390','10','30','30');
				props = [{"name":"event-click","value":"main.events.onTaskBarHide"},{"name":"disabled","value":false},{"name":"form","value":"appassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-graphic"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"image.class","value":"fa fa-angle-down"},{"name":"image.title","value":"angle-down"}];
				$f.setprop('appassets','footer:btnclose', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#a1b5cc"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"absolute"},{"name":"border","value":"1px solid #bbb"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"7px"},{"name":"font-size","value":"24pt"},{"name":"line-height","value":"24pt"},{"name":"text-align","value":"center"},{"name":"vertical-align","value":"middle"},{"name":"caption.position","value":"relative"},{"name":"div.display","value":"inline-block"},{"name":"div.left","value":"calc(100% - 40px)"},{"name":"div.margin","value":"2px 6px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"absolute"},{"name":"div.top","value":"8px"},{"name":"image.color","value":"inherit"},{"name":"image.display","value":"block"},{"name":"image.font-size","value":"26px"}];
				$f.setstyle('appassets','footer:btnclose', styles);
			options = 'media/img_missing.png';
			$f.add($f.getinstname('appassets','footer'),'footer:paste','icon',options,'0','0','36','36');
				props = [{"name":"disabled","value":false},{"name":"form","value":"appassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-graphic"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"image.class","value":"fa fa-paste"},{"name":"image.title","value":"Paste"}];
				$f.setprop('appassets','footer:paste', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"48pt"},{"name":"line-height","value":"48pt"},{"name":"text-align","value":"center"},{"name":"vertical-align","value":"middle"},{"name":"caption.position","value":"relative"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"0px 4px 0px 4px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"image.color","value":"#999999"},{"name":"image.display","value":"block"},{"name":"image.font-size","value":"20px"}];
				$f.setstyle('appassets','footer:paste', styles);
			options = 'media/img_missing.png';
			$f.add($f.getinstname('appassets','footer'),'footer:download','icon',options,'0','0','36','36');
				props = [{"name":"disabled","value":false},{"name":"form","value":"appassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-graphic"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"image.class","value":"fa fa-download"},{"name":"image.title","value":"Download"}];
				$f.setprop('appassets','footer:download', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"32px"},{"name":"text-align","value":"center"},{"name":"vertical-align","value":"middle"},{"name":"caption.position","value":"relative"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"image.color","value":"#999999"},{"name":"image.display","value":"block"},{"name":"image.font-size","value":"25px"}];
				$f.setstyle('appassets','footer:download', styles);
			options = 'media/img_missing.png';
			$f.add($f.getinstname('appassets','footer'),'footer:share','icon',options,'0','0','36','36');
				props = [{"name":"disabled","value":false},{"name":"form","value":"appassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-graphic"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"image.class","value":"fa fa-share-alt"},{"name":"image.title","value":"Share"}];
				$f.setprop('appassets','footer:share', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"32px"},{"name":"text-align","value":"center"},{"name":"vertical-align","value":"middle"},{"name":"caption.position","value":"relative"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"image.color","value":"#999999"},{"name":"image.display","value":"block"},{"name":"image.font-size","value":"25px"}];
				$f.setstyle('appassets','footer:share', styles);
			options = 'media/img_missing.png';
			$f.add($f.getinstname('appassets','footer'),'footer:menu','icon',options,'0','0','28','28');
				props = [{"name":"event-click","value":"main.events.onShowSideMenu"},{"name":"disabled","value":false},{"name":"form","value":"appassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-graphic"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"image.class","value":"fa fa-bars"},{"name":"image.title","value":"Menu"}];
				$f.setprop('appassets','footer:menu', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"float","value":"left"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"32px"},{"name":"text-align","value":"center"},{"name":"vertical-align","value":"middle"},{"name":"caption.position","value":"relative"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"8px 50px 8px 12px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"image.color","value":"inherit"},{"name":"image.display","value":"block"},{"name":"image.font-size","value":"28px"}];
				$f.setstyle('appassets','footer:menu', styles);
			$f.add('appassets','sidemenu','div','','15','448','200','430');
				props = [{"name":"event-click","value":"side.events.stopEvent"},{"name":"disabled","value":false},{"name":"form","value":"appassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"ctype","value":"frame"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"}];
				$f.setprop('appassets','sidemenu', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"rgba(219,229,251,0.60)"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"roboto"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"absolute"},{"name":"border","value":"3px #224488 double"},{"name":"display","value":"inline-block"},{"name":"padding","value":"50px 15px 15px 5px"},{"name":"position","value":"absolute"},{"name":"visibility","value":"visible"},{"name":"backdrop-filter","value":"blur(3px)"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"max-height","value":"500px"},{"name":"overflow-y","value":"auto"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"middle"},{"name":"z-index","value":"2"}];
				$f.setstyle('appassets','sidemenu', styles);
			$f.add($f.getinstname('appassets','sidemenu'),'sidemenu:mnuitem','div','','0','0','175','44');
				props = [{"name":"event-mouseenter","value":"side.events.onmouseover"},{"name":"event-touchmove","value":"side.events.onmouseover"},{"name":"disabled","value":false},{"name":"form","value":"appassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"ctype","value":"frame"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-height","value":"!!!!"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-size","value":"!!!!"}];
				$f.setprop('appassets','sidemenu:mnuitem', props);
				styles = [{"name":"left","value":""},{"name":"top","value":""},{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px #bbb dotted"},{"name":"display","value":"block"},{"name":"height","value":"auto"},{"name":"padding","value":"8px 20px 8px 20px"},{"name":"position","value":"relative"},{"name":"visibility","value":"visible"},{"name":"width","value":"auto"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"middle"},{"name":"white-space","value":"nowrap"}];
				$f.setstyle('appassets','sidemenu:mnuitem', styles);
			options = 'media/img_missing.png';
			$f.add($f.getinstname('appassets','sidemenu:mnuitem'),'sidemenu:icnhome','icon',options,'0','0','28','28');
				props = [{"name":"disabled","value":false},{"name":"form","value":"appassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':''<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-graphic"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"image.class","value":"fa fa-home"},{"name":"image.title","value":"home"}];
				$f.setprop('appassets','sidemenu:icnhome', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"32px"},{"name":"text-align","value":"center"},{"name":"vertical-align","value":"middle"},{"name":"caption.position","value":"relative"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"image.color","value":"#999999"},{"name":"image.display","value":"block"},{"name":"image.font-size","value":"24px"}];
				$f.setstyle('appassets','sidemenu:icnhome', styles);
			$f.add($f.getinstname('appassets','sidemenu:mnuitem'),'sidemenu:lbhome','label','','0','0','38','17');
				props = [{"name":"event-click","value":"side.events.onMenuItem"},{"name":"disabled","value":false},{"name":"form","value":"appassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Home"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-height","value":"!!!!"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('appassets','sidemenu:lbhome', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"height","value":"auto"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"14px"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"middle"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"0px 0px 0px 12px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('appassets','sidemenu:lbhome', styles);
			$f.add($f.getinstname('appassets','sidemenu'),'sidemenu:mnuitem1','div','','0','0','175','44');
				props = [{"name":"event-mouseenter","value":"side.events.onmouseover"},{"name":"event-touchmove","value":"side.events.onmouseover"},{"name":"disabled","value":false},{"name":"form","value":"appassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"ctype","value":"frame"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-height","value":"!!!!"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-size","value":"!!!!"}];
				$f.setprop('appassets','sidemenu:mnuitem1', props);
				styles = [{"name":"left","value":""},{"name":"top","value":""},{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px #bbb dotted"},{"name":"display","value":"block"},{"name":"height","value":"auto"},{"name":"padding","value":"8px 20px 8px 20px"},{"name":"position","value":"relative"},{"name":"visibility","value":"visible"},{"name":"width","value":"auto"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"middle"},{"name":"white-space","value":"nowrap"}];
				$f.setstyle('appassets','sidemenu:mnuitem1', styles);
			options = 'media/img_missing.png';
			$f.add($f.getinstname('appassets','sidemenu:mnuitem1'),'sidemenu:icnsearch','icon',options,'0','0','28','28');
				props = [{"name":"disabled","value":false},{"name":"form","value":"appassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':''<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-graphic"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"image.class","value":"fa fa-search"},{"name":"image.title","value":"home"}];
				$f.setprop('appassets','sidemenu:icnsearch', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"32px"},{"name":"text-align","value":"center"},{"name":"vertical-align","value":"middle"},{"name":"caption.position","value":"relative"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"image.color","value":"#999999"},{"name":"image.display","value":"block"},{"name":"image.font-size","value":"24px"}];
				$f.setstyle('appassets','sidemenu:icnsearch', styles);
			$f.add($f.getinstname('appassets','sidemenu:mnuitem1'),'sidemenu:lbsearch','label','','0','0','43','17');
				props = [{"name":"event-click","value":"side.events.onMenuItem"},{"name":"disabled","value":false},{"name":"form","value":"appassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Search"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-height","value":"!!!!"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('appassets','sidemenu:lbsearch', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"height","value":"auto"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"14px"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"middle"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"0px 0px 0px 12px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('appassets','sidemenu:lbsearch', styles);
			$f.add($f.getinstname('appassets','sidemenu'),'sidemenu:mnuitem2','div','','0','0','175','44');
				props = [{"name":"event-mouseenter","value":"side.events.onmouseover"},{"name":"event-touchmove","value":"side.events.onmouseover"},{"name":"disabled","value":false},{"name":"form","value":"appassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"ctype","value":"frame"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-height","value":"!!!!"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-size","value":"!!!!"}];
				$f.setprop('appassets','sidemenu:mnuitem2', props);
				styles = [{"name":"left","value":""},{"name":"top","value":""},{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px #bbb dotted"},{"name":"display","value":"block"},{"name":"height","value":"auto"},{"name":"padding","value":"8px 20px 8px 20px"},{"name":"position","value":"relative"},{"name":"visibility","value":"visible"},{"name":"width","value":"auto"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"middle"},{"name":"white-space","value":"nowrap"}];
				$f.setstyle('appassets','sidemenu:mnuitem2', styles);
			options = 'media/img_missing.png';
			$f.add($f.getinstname('appassets','sidemenu:mnuitem2'),'sidemenu:icnnotify','icon',options,'0','0','28','28');
				props = [{"name":"disabled","value":false},{"name":"form","value":"appassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':''<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-graphic"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"image.class","value":"fa fa-bell-o"},{"name":"image.title","value":"home"}];
				$f.setprop('appassets','sidemenu:icnnotify', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"32px"},{"name":"text-align","value":"center"},{"name":"vertical-align","value":"middle"},{"name":"caption.position","value":"relative"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"image.color","value":"#999999"},{"name":"image.display","value":"block"},{"name":"image.font-size","value":"24px"}];
				$f.setstyle('appassets','sidemenu:icnnotify', styles);
			$f.add($f.getinstname('appassets','sidemenu:mnuitem2'),'sidemenu:lbnotify','label','','0','0','80','17');
				props = [{"name":"event-click","value":"side.events.onMenuItem"},{"name":"disabled","value":false},{"name":"form","value":"appassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Notifications"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-height","value":"!!!!"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('appassets','sidemenu:lbnotify', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"height","value":"auto"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"14px"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"middle"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"0px 0px 0px 12px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('appassets','sidemenu:lbnotify', styles);
			$f.add($f.getinstname('appassets','sidemenu'),'sidemenu:mnuitem3','div','','0','0','175','44');
				props = [{"name":"event-mouseenter","value":"side.events.onmouseover"},{"name":"event-touchmove","value":"side.events.onmouseover"},{"name":"disabled","value":false},{"name":"form","value":"appassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"ctype","value":"frame"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-height","value":"!!!!"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-size","value":"!!!!"}];
				$f.setprop('appassets','sidemenu:mnuitem3', props);
				styles = [{"name":"left","value":""},{"name":"top","value":""},{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px #bbb dotted"},{"name":"display","value":"block"},{"name":"height","value":"auto"},{"name":"padding","value":"8px 20px 8px 20px"},{"name":"position","value":"relative"},{"name":"visibility","value":"visible"},{"name":"width","value":"auto"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"middle"},{"name":"white-space","value":"nowrap"}];
				$f.setstyle('appassets','sidemenu:mnuitem3', styles);
			options = 'media/img_missing.png';
			$f.add($f.getinstname('appassets','sidemenu:mnuitem3'),'sidemenu:icnmsgs','icon',options,'0','0','28','28');
				props = [{"name":"disabled","value":false},{"name":"form","value":"appassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':''<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-graphic"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"image.class","value":"fa fa-envelope-o"},{"name":"image.title","value":"home"}];
				$f.setprop('appassets','sidemenu:icnmsgs', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"32px"},{"name":"text-align","value":"center"},{"name":"vertical-align","value":"middle"},{"name":"caption.position","value":"relative"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"image.color","value":"#999999"},{"name":"image.display","value":"block"},{"name":"image.font-size","value":"24px"}];
				$f.setstyle('appassets','sidemenu:icnmsgs', styles);
			$f.add($f.getinstname('appassets','sidemenu:mnuitem3'),'sidemenu:lbmsgs','label','','0','0','64','17');
				props = [{"name":"event-click","value":"side.events.onMenuItem"},{"name":"disabled","value":false},{"name":"form","value":"appassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Messages"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-height","value":"!!!!"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('appassets','sidemenu:lbmsgs', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"height","value":"auto"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"14px"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"middle"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"0px 0px 0px 12px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('appassets','sidemenu:lbmsgs', styles);
			$f.add($f.getinstname('appassets','sidemenu'),'sidemenu:mnuitem4','div','','0','0','175','44');
				props = [{"name":"event-mouseenter","value":"side.events.onmouseover"},{"name":"event-touchmove","value":"side.events.onmouseover"},{"name":"disabled","value":false},{"name":"form","value":"appassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"ctype","value":"frame"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-height","value":"!!!!"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-size","value":"!!!!"}];
				$f.setprop('appassets','sidemenu:mnuitem4', props);
				styles = [{"name":"left","value":""},{"name":"top","value":""},{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px #bbb dotted"},{"name":"display","value":"block"},{"name":"height","value":"auto"},{"name":"margin","value":"0px 0px 0px 0px"},{"name":"padding","value":"8px 20px 8px 20px"},{"name":"position","value":"relative"},{"name":"visibility","value":"visible"},{"name":"width","value":"auto"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"middle"},{"name":"white-space","value":"nowrap"}];
				$f.setstyle('appassets','sidemenu:mnuitem4', styles);
			options = 'media/img_missing.png';
			$f.add($f.getinstname('appassets','sidemenu:mnuitem4'),'sidemenu:icnbookmarks','icon',options,'0','0','28','28');
				props = [{"name":"disabled","value":false},{"name":"form","value":"appassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':''<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-graphic"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"image.class","value":"fa fa-bookmark-o"},{"name":"image.title","value":"home"}];
				$f.setprop('appassets','sidemenu:icnbookmarks', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"32px"},{"name":"text-align","value":"center"},{"name":"vertical-align","value":"middle"},{"name":"caption.position","value":"relative"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"image.color","value":"#999999"},{"name":"image.display","value":"block"},{"name":"image.font-size","value":"24px"}];
				$f.setstyle('appassets','sidemenu:icnbookmarks', styles);
			$f.add($f.getinstname('appassets','sidemenu:mnuitem4'),'sidemenu:lbbookmarks','label','','0','0','71','17');
				props = [{"name":"event-click","value":"side.events.onMenuItem"},{"name":"disabled","value":false},{"name":"form","value":"appassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Bookmarks"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-height","value":"!!!!"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('appassets','sidemenu:lbbookmarks', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"height","value":"auto"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"14px"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"middle"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"0px 0px 0px 12px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('appassets','sidemenu:lbbookmarks', styles);
			$f.add($f.getinstname('appassets','sidemenu'),'sidemenu:mnuitem5','div','','0','0','175','44');
				props = [{"name":"event-mouseenter","value":"side.events.onmouseover"},{"name":"event-touchmove","value":"side.events.onmouseover"},{"name":"disabled","value":false},{"name":"form","value":"appassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"ctype","value":"frame"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-height","value":"!!!!"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-size","value":"!!!!"}];
				$f.setprop('appassets','sidemenu:mnuitem5', props);
				styles = [{"name":"left","value":""},{"name":"top","value":""},{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px #bbb dotted"},{"name":"display","value":"block"},{"name":"height","value":"auto"},{"name":"margin","value":"0px 0px 0px 0px"},{"name":"padding","value":"8px 20px 8px 20px"},{"name":"position","value":"relative"},{"name":"visibility","value":"visible"},{"name":"width","value":"auto"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"middle"},{"name":"white-space","value":"nowrap"}];
				$f.setstyle('appassets','sidemenu:mnuitem5', styles);
			options = 'media/img_missing.png';
			$f.add($f.getinstname('appassets','sidemenu:mnuitem5'),'sidemenu:icncommunities','icon',options,'0','0','28','28');
				props = [{"name":"disabled","value":false},{"name":"form","value":"appassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':''<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-graphic"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"image.class","value":"fa fa-group"},{"name":"image.title","value":"home"}];
				$f.setprop('appassets','sidemenu:icncommunities', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"32px"},{"name":"text-align","value":"center"},{"name":"vertical-align","value":"middle"},{"name":"caption.position","value":"relative"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"image.color","value":"#999999"},{"name":"image.display","value":"block"},{"name":"image.font-size","value":"24px"}];
				$f.setstyle('appassets','sidemenu:icncommunities', styles);
			$f.add($f.getinstname('appassets','sidemenu:mnuitem5'),'sidemenu:lbcommunity','label','','0','0','83','17');
				props = [{"name":"event-click","value":"side.events.onMenuItem"},{"name":"disabled","value":false},{"name":"form","value":"appassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Communities"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-height","value":"!!!!"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('appassets','sidemenu:lbcommunity', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"height","value":"auto"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"14px"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"middle"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"0px 0px 0px 12px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('appassets','sidemenu:lbcommunity', styles);
			$f.add($f.getinstname('appassets','sidemenu'),'sidemenu:mnuitem6','div','','0','0','175','44');
				props = [{"name":"event-mouseenter","value":"side.events.onmouseover"},{"name":"event-touchmove","value":"side.events.onmouseover"},{"name":"disabled","value":false},{"name":"form","value":"appassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"ctype","value":"frame"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-height","value":"!!!!"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-size","value":"!!!!"}];
				$f.setprop('appassets','sidemenu:mnuitem6', props);
				styles = [{"name":"left","value":""},{"name":"top","value":""},{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px #bbb dotted"},{"name":"display","value":"block"},{"name":"height","value":"auto"},{"name":"margin","value":"0px 0px 0px 0px"},{"name":"padding","value":"8px 20px 8px 20px"},{"name":"position","value":"relative"},{"name":"visibility","value":"visible"},{"name":"width","value":"auto"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"middle"},{"name":"white-space","value":"nowrap"}];
				$f.setstyle('appassets','sidemenu:mnuitem6', styles);
			options = 'media/img_missing.png';
			$f.add($f.getinstname('appassets','sidemenu:mnuitem6'),'sidemenu:icnprofile','icon',options,'0','0','28','28');
				props = [{"name":"disabled","value":false},{"name":"form","value":"appassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':''<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-graphic"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"image.class","value":"fa fa-user-circle"},{"name":"image.title","value":"home"}];
				$f.setprop('appassets','sidemenu:icnprofile', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"32px"},{"name":"text-align","value":"center"},{"name":"vertical-align","value":"middle"},{"name":"caption.position","value":"relative"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"image.color","value":"#999999"},{"name":"image.display","value":"block"},{"name":"image.font-size","value":"24px"}];
				$f.setstyle('appassets','sidemenu:icnprofile', styles);
			$f.add($f.getinstname('appassets','sidemenu:mnuitem6'),'sidemenu:lbprofile','label','','0','0','40','17');
				props = [{"name":"event-click","value":"side.events.onMenuItem"},{"name":"disabled","value":false},{"name":"form","value":"appassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Profile"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-height","value":"!!!!"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('appassets','sidemenu:lbprofile', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"height","value":"auto"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"14px"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"middle"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"0px 0px 0px 12px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('appassets','sidemenu:lbprofile', styles);
			$f.add($f.getinstname('appassets','sidemenu'),'sidemenu:mnuitem7','div','','0','0','175','44');
				props = [{"name":"event-mouseenter","value":"side.events.onmouseover"},{"name":"event-touchmove","value":"side.events.onmouseover"},{"name":"disabled","value":false},{"name":"form","value":"appassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"ctype","value":"frame"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-height","value":"!!!!"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-size","value":"!!!!"}];
				$f.setprop('appassets','sidemenu:mnuitem7', props);
				styles = [{"name":"left","value":""},{"name":"top","value":""},{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px #bbb dotted"},{"name":"display","value":"block"},{"name":"height","value":"auto"},{"name":"margin","value":"0px 0px 0px 0px"},{"name":"padding","value":"8px 20px 8px 20px"},{"name":"position","value":"relative"},{"name":"visibility","value":"visible"},{"name":"width","value":"auto"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"middle"},{"name":"white-space","value":"nowrap"}];
				$f.setstyle('appassets','sidemenu:mnuitem7', styles);
			options = 'media/img_missing.png';
			$f.add($f.getinstname('appassets','sidemenu:mnuitem7'),'sidemenu:icnmore','icon',options,'0','0','28','28');
				props = [{"name":"disabled","value":false},{"name":"form","value":"appassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':''<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-graphic"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"image.class","value":"fa fa-circle-o"},{"name":"image.title","value":"home"}];
				$f.setprop('appassets','sidemenu:icnmore', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"32px"},{"name":"text-align","value":"center"},{"name":"vertical-align","value":"middle"},{"name":"caption.position","value":"relative"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"image.color","value":"#999999"},{"name":"image.display","value":"block"},{"name":"image.font-size","value":"24px"}];
				$f.setstyle('appassets','sidemenu:icnmore', styles);
			$f.add($f.getinstname('appassets','sidemenu:mnuitem7'),'sidemenu:lbmore','label','','0','0','32','17');
				props = [{"name":"event-click","value":"side.events.onMenuItem"},{"name":"disabled","value":false},{"name":"form","value":"appassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"More"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-height","value":"!!!!"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('appassets','sidemenu:lbmore', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"height","value":"auto"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"14px"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"middle"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"0px 0px 0px 12px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('appassets','sidemenu:lbmore', styles);
			$f.add('appassets','mnuitem','div','','0','0','120','40');
				props = [{"name":"disabled","value":false},{"name":"form","value":"appassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"ctype","value":"frame"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-height","value":"!!!!"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-size","value":"!!!!"}];
				$f.setprop('appassets','mnuitem', props);
				styles = [{"name":"left","value":""},{"name":"top","value":""},{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"1px #bbb dotted"},{"name":"display","value":"inline-block"},{"name":"height","value":"auto"},{"name":"margin","value":"0px 0px 0px 0px"},{"name":"padding","value":"5px 20px 5px 20px"},{"name":"position","value":"relative"},{"name":"visibility","value":"visible"},{"name":"width","value":"auto"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"middle"},{"name":"white-space","value":"nowrap"}];
				$f.setstyle('appassets','mnuitem', styles);
			options = 'media/img_missing.png';
			$f.add($f.getinstname('appassets','mnuitem'),'mnuitem:icnhome','icon',options,'0','0','28','28');
				props = [{"name":"disabled","value":false},{"name":"form","value":"appassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':''<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-graphic"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"image.class","value":"fa fa-home"},{"name":"image.title","value":"home"}];
				$f.setprop('appassets','mnuitem:icnhome', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"32px"},{"name":"text-align","value":"center"},{"name":"vertical-align","value":"middle"},{"name":"caption.position","value":"relative"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"image.color","value":"#999999"},{"name":"image.display","value":"block"},{"name":"image.font-size","value":"28px"}];
				$f.setstyle('appassets','mnuitem:icnhome', styles);
			$f.add($f.getinstname('appassets','mnuitem'),'mnuitem:lbhome','label','','0','0','41','18');
				props = [{"name":"disabled","value":false},{"name":"form","value":"appassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Home"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-height","value":"!!!!"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('appassets','mnuitem:lbhome', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"height","value":"auto"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"14px"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"middle"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"0px 0px 0px 12px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('appassets','mnuitem:lbhome', styles);
			$f.add('appassets','nodata','div','','0','0','392','140');
				props = [{"name":"disabled","value":false},{"name":"form","value":"appassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"ctype","value":"frame"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('appassets','nodata', props);
				styles = [{"name":"left","value":""},{"name":"top","value":""},{"name":"width","value":""},{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px #bbb dotted"},{"name":"display","value":"block"},{"name":"position","value":"relative"},{"name":"visibility","value":"visible"},{"name":"width","value":"auto"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"middle"}];
				$f.setstyle('appassets','nodata', styles);
			$f.add($f.getinstname('appassets','nodata'),'nodata:label','label-right','','0','0','105','21');
				props = [{"name":"disabled","value":false},{"name":"form","value":"appassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"No content to display."},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('appassets','nodata:label', props);
				styles = [{"name":"color","value":"#999999"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"italic"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"14px"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"middle"},{"name":"caption.display","value":"table-cell"},{"name":"caption.left","value":"0px"},{"name":"caption.position","value":"relative"},{"name":"caption.text-align","value":"center"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"div.top","value":"calc(50% - 8px)"},{"name":"div.width","value":"auto"}];
				$f.setstyle('appassets','nodata:label', styles);
			options = 'media/success.jpg';
			$f.add('appassets','success','imagex',options,'0','0','256','235');
				props = [{"name":"disabled","value":false},{"name":"form","value":"appassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-graphicx"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('appassets','success', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"rgba(0,0,0,0)"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px double #888"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"14px"},{"name":"vertical-align","value":"middle"},{"name":"div.border-radius","value":"30%"},{"name":"div.display","value":"block"},{"name":"div.height","value":"100%"},{"name":"div.left","value":"calc(50% - 128px)"},{"name":"div.max-height","value":"235px"},{"name":"div.max-width","value":"256px"},{"name":"div.overflow","value":"hidden"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"div.width","value":"256px"}];
				$f.setstyle('appassets','success', styles);
			$f.setprop('appassets','','dock',pos.dock);
			
			widgTarget = instID;
			$k.instance.setbyelemid(widgTarget);
			
			// Attach DATABIND Events ----------------
			if ( $f.model('appassets').enabled ) { $f.model('appassets').create('appassets'); }
			$nim.React.build('appassets');
			$f.refresh('appassets');
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Load', target: {id: 'appassets'}});
			}
		}
		finally {
			try {
				// Attach Form Events --------------------
				
				var itm, evnt, evtArr = [
						['openauth:icnback', 'onclick', 'main.auth.loginGoogle'],['openauth:btnclose', 'onclick', 'main.events.onTaskBarHide'],['openauth:icon1', 'onclick', 'main.auth.loginFacebook'],
					['openauth:icon2', 'onclick', 'main.auth.loginLinkedIn'],['openauth:icon3', 'onclick', 'main.auth.loginTwitter'],['navback:btnclose', 'onclick', 'main.events.onTaskBarHide'],['footer:btnclose', 'onclick', 'main.events.onTaskBarHide'],['footer:menu', 'onclick', 'main.events.onShowSideMenu'],
					['sidemenu', 'onclick', 'side.events.stopEvent'],['sidemenu:mnuitem', 'onmouseenter', 'side.events.onmouseover'],['sidemenu:mnuitem', 'touchmove', 'side.events.onmouseover'],['sidemenu:lbhome', 'onclick', 'side.events.onMenuItem'],['sidemenu:mnuitem1', 'onmouseenter', 'side.events.onmouseover'],
					['sidemenu:mnuitem1', 'touchmove', 'side.events.onmouseover'],['sidemenu:lbsearch', 'onclick', 'side.events.onMenuItem'],['sidemenu:mnuitem2', 'onmouseenter', 'side.events.onmouseover'],['sidemenu:mnuitem2', 'touchmove', 'side.events.onmouseover'],['sidemenu:lbnotify', 'onclick', 'side.events.onMenuItem'],
					['sidemenu:mnuitem3', 'onmouseenter', 'side.events.onmouseover'],['sidemenu:mnuitem3', 'touchmove', 'side.events.onmouseover'],['sidemenu:lbmsgs', 'onclick', 'side.events.onMenuItem'],['sidemenu:mnuitem4', 'onmouseenter', 'side.events.onmouseover'],['sidemenu:mnuitem4', 'touchmove', 'side.events.onmouseover'],
					['sidemenu:lbbookmarks', 'onclick', 'side.events.onMenuItem'],['sidemenu:mnuitem5', 'onmouseenter', 'side.events.onmouseover'],['sidemenu:mnuitem5', 'touchmove', 'side.events.onmouseover'],['sidemenu:lbcommunity', 'onclick', 'side.events.onMenuItem'],['sidemenu:mnuitem6', 'onmouseenter', 'side.events.onmouseover'],
					['sidemenu:mnuitem6', 'touchmove', 'side.events.onmouseover'],['sidemenu:lbprofile', 'onclick', 'side.events.onMenuItem'],['sidemenu:mnuitem7', 'onmouseenter', 'side.events.onmouseover'],['sidemenu:mnuitem7', 'touchmove', 'side.events.onmouseover'],['sidemenu:lbmore', 'onclick', 'side.events.onMenuItem']
				];
				for (var i = 0; i < evtArr.length; i++) {
					itm = evtArr[i]; 
					$f.setevent('appassets', itm[0], itm[1], $nim.fn.findEvent('mobile', 'appassets', evtArr[i]));
				}
				
				if (App.InstName == "") { App.InstName = instID; }
				App.Dialog['appassets'].isLoaded = 1;
				App.Dialog['appassets'].isActivated = 0;
				$f.hide('appassets');
			}
			catch (err) {
				if ($k.errhandler) {
					$k.errhandler(err, {type: 'Attach Events', target: {id: 'appassets'}});
				}
			}
			finally {
				// Attach WIDGETS To Dialog ----------------
				var list = $nim.Load32.Clear();
				$nim.Load32.onComplete(function() {
					var styles, props;
					$k.instance.setbyelemid(widgTarget);
					if ('') $f.alter.view.set('appassets','', false, true);
				
					props = [{"name":"body.version","value":"v5.0"}];
					$f.setprop('appassets','', props);
					styles = [{"name":"body.background-color","value":"transparent"},{"name":"body.box-sizing","value":"border-box"},{"name":"body.color","value":"#eeeeee"},{"name":"body.margin","value":"0px 0px 0px 0px"},{"name":"body.overflow-y","value":"auto"},{"name":"body.padding","value":"10px 15px 32px 15px"},{"name":"body.text-align","value":""},{"name":"body.vertical-align","value":""}];
					$f.setstyle('appassets','', styles);
					
					var ctrls = [];
					ctrls.forEach(function(itm) {
						if (itm.widget) { $f.hide(itm.name); } else { $f.hide('appassets', itm.name); }
					});
				
					$f.events('appassets', 'Load')(widgTarget, widgTarget.resolveName());
					$nim.Load32.Clear(true);
					$k.instance.setbyelemid(widgTarget);
					if ($f.getprop('appassets','','forceshow').toLowerCase() == 'true') $heap.mobile['appassets'].Show(pos);
					return;
				});
				if ($nim.Load32.list[list].length > 0) {
					$nim.Load32.ArrayLoad(list, 0);
					return instID;
				} else { $nim.Load32.Load_Complete(list); }
				
				$k.instance.setbyelemid(widgTarget);
				return instID;
			}
		}
    },
	Activate: function() {
		var instID = $k.instance.save('appassets');
		try {
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Activate', target: {id: 'appassets'}});
			}
		}
		finally {
			$k.instance.setbyelemid(instID);
			$f.events('appassets', 'Activate')(instID, instID.resolveName());
			App.Dialog['appassets'].isActivated = 1;
			$k.instance.restore();
		}
	},
	BeforeUnload: function() {
		var blCancel = false;
		var instID = $k.instance.save('appassets');
		try {
			if ($k.islastform('appassets')) { $k.app.unloadwidget('appassets'); }
			
			var itm, evtArr = [
					['openauth:icnback', 'onclick'],['openauth:btnclose', 'onclick'],['openauth:icon1', 'onclick'],
				['openauth:icon2', 'onclick'],['openauth:icon3', 'onclick'],['navback:btnclose', 'onclick'],['footer:btnclose', 'onclick'],['footer:menu', 'onclick'],
				['sidemenu', 'onclick'],['sidemenu:mnuitem', 'onmouseenter'],['sidemenu:mnuitem', 'touchmove'],['sidemenu:lbhome', 'onclick'],['sidemenu:mnuitem1', 'onmouseenter'],
				['sidemenu:mnuitem1', 'touchmove'],['sidemenu:lbsearch', 'onclick'],['sidemenu:mnuitem2', 'onmouseenter'],['sidemenu:mnuitem2', 'touchmove'],['sidemenu:lbnotify', 'onclick'],
				['sidemenu:mnuitem3', 'onmouseenter'],['sidemenu:mnuitem3', 'touchmove'],['sidemenu:lbmsgs', 'onclick'],['sidemenu:mnuitem4', 'onmouseenter'],['sidemenu:mnuitem4', 'touchmove'],
				['sidemenu:lbbookmarks', 'onclick'],['sidemenu:mnuitem5', 'onmouseenter'],['sidemenu:mnuitem5', 'touchmove'],['sidemenu:lbcommunity', 'onclick'],['sidemenu:mnuitem6', 'onmouseenter'],
				['sidemenu:mnuitem6', 'touchmove'],['sidemenu:lbprofile', 'onclick'],['sidemenu:mnuitem7', 'onmouseenter'],['sidemenu:mnuitem7', 'touchmove'],['sidemenu:lbmore', 'onclick']
			];
			for (var i = 0; i < evtArr.length; i++) {
				itm = evtArr[i]; $f.setevent('appassets', itm[0], itm[1], null);
			}
			
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'BeforeUnload', target: {id: 'appassets'}});
			}
		}
		finally {
			$k.instance.setbyelemid(instID);
			blCancel = $f.events('appassets', 'QueryUnload')(instID, instID.resolveName());
			$k.instance.restore();
		}
		return blCancel;
	},
	UnloadAll: function() {
		try {
			$k.instance.save('appassets');
			if (App) {
				var dlgItem = App.Dialog['appassets'], 
					dlgCount = App.Dialog['appassets'].count; 
					
				for (var x = dlgCount; x >= 0; x--) {
					KERNEL.formInst = x;
					dlgItem.Unload();
				}
			}
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'UnloadAll', target: {id: 'appassets'}});
			}
		}
		finally {
			App.Dialog['appassets'].count = 0;
			$k.instance.restore();
			KERNEL.formInst = 0;
		}
	},
	Unload: function() {
		var blCancel = false;
		try {
			var instID = $k.instance.save('appassets');
			blCancel = $f.events('appassets', 'QueryUnload')();
			if (blCancel) {
				return blCancel;
			}
			
			$k.instance.save('appassets');
			$k.instance.restore();
			$f.events('appassets', 'Unload')(instID, instID.resolveName());
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Unload', target: {id: 'appassets'}});
			}
		}
		finally {
			$k.instance.restore();
			if (!blCancel) {
				FORMS.sysUnload("appassets");
				App.Dialog['appassets'].isLoaded = 0;
				App.Dialog['appassets'].isActivated = 0;
				
				if (App) {
					$k.instance.setbyelemid(KERNEL.curId);
					var elem, dlgName = "";
					
					if (!$k.isanyformloaded()) {
						if (!App.App.exiting) { App.End(); }
					}
				}
			}
		}
	},
    Show: function(pos) {
		var retval = "";
		try {
			if (!KERNEL.enabled) return;
			var instID = $k.instance.save('appassets');
			if ($k.isformloaded('appassets') == false) {
				retval = $f.events('appassets', 'Load')(pos);
			}
			
			$k.instance.restore();
			$f.show("appassets");
			
			// Pull DataModel. 
			$k.instance.save('appassets');
			if ($f.model('appassets').enabled) { $f.model('appassets').pull(); }
		}
		catch(err) { 
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Show', target: {id: 'appassets'}});
			}
		}
		finally {
			$k.instance.restore();
			if (!App.Dialog['appassets'].isActivated) {
				$f.events('appassets', 'Activate')();
			}
			return retval;
		}
	},
	Code: { 
	},
	Widgets: { },
	Views: { }, 
	Events: {
		form_Load: function(e, itm) { 
			
		}//-FORM_LOAD
    }
};
$k.wrapallfunctions($heap.mobile['appassets'].Code, 'appassets');
 
/** Form Template --------------------------------------
 *  NAME: frmmain
 *
 * version: 5.0
 **/
$heap.mobile['frmmain'] = { };
$heap.mobile['frmmain'] = {
    _flatten: true,
	_private: false,
	isLoaded: 0,
    isActivated: 0,
	count: 0,
	New: function(pos, show) {
		var instName;
		try {
			if (!KERNEL.enabled) return;
			if (!pos) {
				pos = { left: 0, top: 0, target: FORMS.Target };
			}
			pos.form = pos.form ? pos.form : 'frmmain';
			if (!$heap.mobile[pos.form]) { pos.form = 'frmmain'; }
			
			$k.instance.newform(pos.form, App.Dialog['frmmain']);
			instName = $heap.mobile[pos.form].Load(pos);
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'New', target: {id: 'frmmain'}});
			}
		}
		finally {
			if (show) { $heap.mobile[pos.form].Show(pos); }
			$k.instance.setbyelemid(instName);
			
			return instName;
		}
	},
	Menu: function(cmd) {
	},
    Load: function(pos) {
		var widgTarget = "", instID = "", options, props, styles, defPos;
		try {
			
			if (!KERNEL.enabled) return;		
			if (pos && pos.target) { FORMS.Target = pos.target; }
			if (App.Vars.running == false) { App.Vars.running = true; }
			if (App.target) { App.target = FORMS.Target; }
			
			 
			styles = ( null );
			defPos = {target: 'desktop' + DESKTOP.currentDesktop, dock:'RRRR', left:'0', top:'0', width:'480', height:'640'};
			pos = $k.instance.validatepos(pos, defPos);
			instID = $f.surface('frmmain',pos.left,pos.top,480,640,styles);
			$f.hide('frmmain');
				props = [{"name":"event-click","value":"main.events.onLostFocus"},{"name":"event-mousedown","value":"main.events.onLostFocus"},{"name":"body.version","value":"v5.0"},{"name":"autosize","value":"false"},{"name":"disabled","value":false},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"_private","value":"false"},{"name":"bind","value":"false"},{"name":"clipmenu","value":"true"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"flattenonpull","value":"true"},{"name":"ignorezorder","value":"true"},{"name":"output","value":"normal"},{"name":"shadow","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-surface"},{"name":"useastheme","value":"false"},{"name":"watch","value":"false"}];
				$f.setprop('frmmain','', props);
				styles = [{"name":"color","value":"#eeeeee"},{"name":"background-color","value":"#ffffff"},{"name":"font-family","value":"roboto"},{"name":"font-weight","value":"normal"},{"name":"visibility","value":"visible"},{"name":"displaymode","value":""},{"name":"font-size","value":"14pt"},{"name":"pointer-events","value":"auto"},{"name":"z-index","value":"2"}];
				$f.setstyle('frmmain','', styles);
			
			
			$f.add('frmmain','header','div','','0','0','480','48');
				props = [{"name":"event-click","value":"main.events.onHeaderClick"},{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"ctype","value":"frame"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-size","value":"!!!!"}];
				$f.setprop('frmmain','header', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"rgba(161,181,204,0.40)"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"absolute"},{"name":"border","value":"0.5px solid rgba(20,20,20, 0.60)"},{"name":"display","value":"inline-block"},{"name":"height","value":"48px"},{"name":"padding","value":"4px 8px 4px 8px"},{"name":"position","value":"absolute"},{"name":"visibility","value":"visible"},{"name":"width","value":"100%"},{"name":"backdrop-filter","value":"blur(3px)"},{"name":"border-radius","value":"4px"},{"name":"box-shadow","value":"rgba(80,80,80, 0.60) 2px 4px 8px 0px"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"middle"},{"name":"z-index","value":"5"}];
				$f.setstyle('frmmain','header', styles);
			options = {
			    selectindex: 0,
			    listsize: 3,
			    list: ['App','/','Login'],
			    value: ['app','div1','login']
			};
			$f.add($f.getinstname('frmmain','header'),'route','listbox',options,'0','0','280','36');
				props = [{"name":"event-click","value":"main.events.onBreadCrumbClick"},{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-listbox"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"items.item-dir","value":"horizontal"},{"name":"items.item-style","value":"color=#000;white-space=nowrap;width=auto;background=white;border=1px solid #999;border-radius=3px;margin=3px 0.5px 0px 0.5px;padding=3px 3px;text-align=center;vertical-align=center"}];
				$f.setprop('frmmain','route', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"bold"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"outline","value":"none"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"10px"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"10pt"},{"name":"overflow-x","value":"auto"},{"name":"overflow-y","value":"hidden"},{"name":"vertical-align","value":"middle"},{"name":"white-space","value":"nowrap"},{"name":"div.display","value":"block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"div.width","value":"auto"}];
				$f.setstyle('frmmain','route', styles);
			$f.add('frmmain','footer','div','','0','800','480','72');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"ctype","value":"frame"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-size","value":"!!!!"}];
				$f.setprop('frmmain','footer', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"rgba(161,181,204,0.40)"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"absolute"},{"name":"border","value":"0.5px solid rgba(20,20,20, 0.60)"},{"name":"display","value":"inline-block"},{"name":"height","value":"72px"},{"name":"left","value":"0px"},{"name":"margin","value":"0px 0px 0px 0px"},{"name":"padding","value":"8px 8px 8px 8px"},{"name":"position","value":"absolute"},{"name":"visibility","value":"visible"},{"name":"width","value":"100%"},{"name":"backdrop-filter","value":"blur(3px)"},{"name":"border-radius","value":"4px"},{"name":"box-shadow","value":"rgba(80,80,80, 0.60) 2px 4px 8px 0px"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"middle"},{"name":"z-index","value":"5"}];
				$f.setstyle('frmmain','footer', styles);
			$f.add('frmmain','content','div','','0','0','120','97');
				props = [{"name":"event-click","value":"main.events.onLostFocus"},{"name":"event-mousedown","value":"main.events.onLostFocus"},{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"ctype","value":"frame"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-height","value":"!!!!"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('frmmain','content', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px #bbb dotted"},{"name":"display","value":"table"},{"name":"height","value":"100%"},{"name":"position","value":"relative"},{"name":"visibility","value":"visible"},{"name":"width","value":"100%"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"middle"}];
				$f.setstyle('frmmain','content', styles);
			$f.add('frmmain','btnmenu','div','','0','0','80','6');
				props = [{"name":"event-click","value":"main.events.onTaskBarClick"},{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"ctype","value":"frame"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"}];
				$f.setprop('frmmain','btnmenu', props);
				styles = [{"name":"left","value":""},{"name":"top","value":""},{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"rgba(20,40,80,0.50)"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"1px #bbb dotted"},{"name":"display","value":"inline-block"},{"name":"margin","value":"20px 0px 0px 0px"},{"name":"position","value":"relative"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"10px"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"middle"}];
				$f.setstyle('frmmain','btnmenu', styles);
			$f.add('frmmain','custom1','div','','12','587','96','48');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":"custom1(validate)"},{"name":"caption","value":""},{"name":"ctype","value":"validate"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':''<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-graphic"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"}];
				$f.setprop('frmmain','custom1', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"absolute"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"inline-block"},{"name":"position","value":"absolute"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"none"},{"name":"vertical-align","value":"middle"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"absolute"}];
				$f.setstyle('frmmain','custom1', styles);
			$f.hide('frmmain','custom1');
			$f.add('frmmain','info','div','','24','476','432','90');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"ctype","value":"frame"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-size","value":"!!!!"}];
				$f.setprop('frmmain','info', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"rgba(20,60,120,0.40)"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"absolute"},{"name":"border","value":"4px double rgba(22,44,88,0.70)"},{"name":"display","value":"inline-block"},{"name":"height","value":"90px"},{"name":"left","value":"5%"},{"name":"padding","value":"8px 8px 8px 8px"},{"name":"position","value":"absolute"},{"name":"top","value":"calc(90% - 100px)"},{"name":"visibility","value":"visible"},{"name":"width","value":"90%"},{"name":"backdrop-filter","value":"blur(3px)"},{"name":"border-radius","value":"4px"},{"name":"box-shadow","value":"rgba(80,80,80, 0.60) 2px 4px 8px 0px"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"middle"}];
				$f.setstyle('frmmain','info', styles);
			$f.add($f.getinstname('frmmain','info'),'info:title','label','','0','0','105','24');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Title"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('frmmain','info:title', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"bold"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #000"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-bottom","value":"0px solid #000"},{"name":"font-size","value":"12pt"},{"name":"max-width","value":"calc(100% - 30px)"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"middle"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"0px 0px 4px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"div.width","value":"auto"}];
				$f.setstyle('frmmain','info:title', styles);
			$f.add($f.getinstname('frmmain','info'),'info:msg','label','','0','0','398','40');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"information"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('frmmain','info:msg', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"10pt"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"middle"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"top"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"0px 0px 0px 10px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"div.width","value":"auto"}];
				$f.setstyle('frmmain','info:msg', styles);
			options = 'media/img_missing.png';
			$f.add($f.getinstname('frmmain','info'),'info:icnclose','icon',options,'394','5','24','24');
				props = [{"name":"event-click","value":"msg.close"},{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-graphic"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"image.class","value":"fa fa-times-circle-o"},{"name":"image.title","value":"Dismiss"}];
				$f.setprop('frmmain','info:icnclose', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"absolute"},{"name":"border","value":"0px solid #bbb"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"24"},{"name":"line-height","value":"24"},{"name":"text-align","value":"center"},{"name":"vertical-align","value":"middle"},{"name":"z-index","value":"5"},{"name":"caption.position","value":"relative"},{"name":"div.display","value":"inline-block"},{"name":"div.left","value":"calc(100% - 30px)"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"absolute"},{"name":"div.top","value":"5px"},{"name":"image.color","value":"inherit"},{"name":"image.display","value":"block"},{"name":"image.font-size","value":"20px"}];
				$f.setstyle('frmmain','info:icnclose', styles);
			$f.add('frmmain','err','div','','24','55','432','45');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"ctype","value":"frame"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-size","value":"!!!!"}];
				$f.setprop('frmmain','err', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"rgba(120,60,20,0.40)"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"absolute"},{"name":"border","value":"4px double rgba(88,44,22,0.70)"},{"name":"display","value":"inline-block"},{"name":"height","value":"45px"},{"name":"left","value":"5%"},{"name":"padding","value":"8px 8px 8px 8px"},{"name":"position","value":"absolute"},{"name":"top","value":"55px"},{"name":"visibility","value":"visible"},{"name":"width","value":"90%"},{"name":"backdrop-filter","value":"blur(3px)"},{"name":"border-radius","value":"4px"},{"name":"box-shadow","value":"rgba(80,80,80, 0.60) 2px 4px 8px 0px"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"middle"}];
				$f.setstyle('frmmain','err', styles);
			$f.add($f.getinstname('frmmain','err'),'err:msg','label','','0','0','105','25');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"information"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('frmmain','err:msg', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"bold"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"10pt"},{"name":"letter-spacing","value":"1px"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"middle"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"top"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"0px 0px 0px 10px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"div.width","value":"auto"}];
				$f.setstyle('frmmain','err:msg', styles);
			$f.setprop('frmmain','','dock',pos.dock);
			
			widgTarget = instID;
			$k.instance.setbyelemid(widgTarget);
			
			// Attach DATABIND Events ----------------
			if ( $f.model('frmmain').enabled ) { $f.model('frmmain').create('frmmain'); }
			$nim.React.build('frmmain');
			$f.refresh('frmmain');
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Load', target: {id: 'frmmain'}});
			}
		}
		finally {
			try {
				// Attach Form Events --------------------
				
				var itm, evnt, evtArr = [
						['body', 'onmousedown', 'main.events.onLostFocus'],['body', 'onclick', 'main.events.onLostFocus'],['header', 'onclick', 'main.events.onHeaderClick'],
					['route', 'onclick', 'main.events.onBreadCrumbClick'],['content', 'onmousedown', 'main.events.onLostFocus'],['content', 'onclick', 'main.events.onLostFocus'],['btnmenu', 'onclick', 'main.events.onTaskBarClick'],['info:icnclose', 'onclick', 'msg.close']
				];
				for (var i = 0; i < evtArr.length; i++) {
					itm = evtArr[i]; 
					$f.setevent('frmmain', itm[0], itm[1], $nim.fn.findEvent('mobile', 'frmmain', evtArr[i]));
				}
				
				if (App.InstName == "") { App.InstName = instID; }
				App.Dialog['frmmain'].isLoaded = 1;
				App.Dialog['frmmain'].isActivated = 0;
				$f.hide('frmmain');
			}
			catch (err) {
				if ($k.errhandler) {
					$k.errhandler(err, {type: 'Attach Events', target: {id: 'frmmain'}});
				}
			}
			finally {
				// Attach WIDGETS To Dialog ----------------
				var list = $nim.Load32.Clear();
				$nim.Load32.onComplete(function() {
					var styles, props;
					$k.instance.setbyelemid(widgTarget);
					if ('') $f.alter.view.set('frmmain','', false, true);
				
					props = [{"name":"body.version","value":"v5.0"}];
					$f.setprop('frmmain','', props);
					styles = [{"name":"body.background-color","value":"transparent"},{"name":"body.box-sizing","value":"border-box"},{"name":"body.color","value":"#eeeeee"},{"name":"body.margin","value":"0px 0px 0px 0px"},{"name":"body.overflow-y","value":"hidden"},{"name":"body.padding","value":"10px 15px 48px 15px"},{"name":"body.text-align","value":"center"},{"name":"body.vertical-align","value":""}];
					$f.setstyle('frmmain','', styles);
					
					var ctrls = [{"widget":false,"name":"custom1"}];
					ctrls.forEach(function(itm) {
						if (itm.widget) { $f.hide(itm.name); } else { $f.hide('frmmain', itm.name); }
					});
				
					$f.events('frmmain', 'Load')(widgTarget, widgTarget.resolveName());
					$nim.Load32.Clear(true);
					$k.instance.setbyelemid(widgTarget);
					if ($f.getprop('frmmain','','forceshow').toLowerCase() == 'true') $heap.mobile['frmmain'].Show(pos);
					return;
				});
				if ($nim.Load32.list[list].length > 0) {
					$nim.Load32.ArrayLoad(list, 0);
					return instID;
				} else { $nim.Load32.Load_Complete(list); }
				
				$k.instance.setbyelemid(widgTarget);
				return instID;
			}
		}
    },
	Activate: function() {
		var instID = $k.instance.save('frmmain');
		try {
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Activate', target: {id: 'frmmain'}});
			}
		}
		finally {
			$k.instance.setbyelemid(instID);
			$f.events('frmmain', 'Activate')(instID, instID.resolveName());
			App.Dialog['frmmain'].isActivated = 1;
			$k.instance.restore();
		}
	},
	BeforeUnload: function() {
		var blCancel = false;
		var instID = $k.instance.save('frmmain');
		try {
			if ($k.islastform('frmmain')) { $k.app.unloadwidget('frmmain'); }
			
			var itm, evtArr = [
					['body', 'onmousedown'],['body', 'onclick'],['header', 'onclick'],
				['route', 'onclick'],['content', 'onmousedown'],['content', 'onclick'],['btnmenu', 'onclick'],['info:icnclose', 'onclick']
			];
			for (var i = 0; i < evtArr.length; i++) {
				itm = evtArr[i]; $f.setevent('frmmain', itm[0], itm[1], null);
			}
			
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'BeforeUnload', target: {id: 'frmmain'}});
			}
		}
		finally {
			$k.instance.setbyelemid(instID);
			blCancel = $f.events('frmmain', 'QueryUnload')(instID, instID.resolveName());
			$k.instance.restore();
		}
		return blCancel;
	},
	UnloadAll: function() {
		try {
			$k.instance.save('frmmain');
			if (App) {
				var dlgItem = App.Dialog['frmmain'], 
					dlgCount = App.Dialog['frmmain'].count; 
					
				for (var x = dlgCount; x >= 0; x--) {
					KERNEL.formInst = x;
					dlgItem.Unload();
				}
			}
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'UnloadAll', target: {id: 'frmmain'}});
			}
		}
		finally {
			App.Dialog['frmmain'].count = 0;
			$k.instance.restore();
			KERNEL.formInst = 0;
		}
	},
	Unload: function() {
		var blCancel = false;
		try {
			var instID = $k.instance.save('frmmain');
			blCancel = $f.events('frmmain', 'QueryUnload')();
			if (blCancel) {
				return blCancel;
			}
			
			$k.instance.save('frmmain');
			$k.instance.restore();
			$f.events('frmmain', 'Unload')(instID, instID.resolveName());
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Unload', target: {id: 'frmmain'}});
			}
		}
		finally {
			$k.instance.restore();
			if (!blCancel) {
				FORMS.sysUnload("frmmain");
				App.Dialog['frmmain'].isLoaded = 0;
				App.Dialog['frmmain'].isActivated = 0;
				
				if (App) {
					$k.instance.setbyelemid(KERNEL.curId);
					var elem, dlgName = "";
					
					if (!$k.isanyformloaded()) {
						if (!App.App.exiting) { App.End(); }
					}
				}
			}
		}
	},
    Show: function(pos) {
		var retval = "";
		try {
			if (!KERNEL.enabled) return;
			var instID = $k.instance.save('frmmain');
			if ($k.isformloaded('frmmain') == false) {
				retval = $f.events('frmmain', 'Load')(pos);
			}
			
			$k.instance.restore();
			$f.show("frmmain");
			
			// Pull DataModel. 
			$k.instance.save('frmmain');
			if ($f.model('frmmain').enabled) { $f.model('frmmain').pull(); }
		}
		catch(err) { 
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Show', target: {id: 'frmmain'}});
			}
		}
		finally {
			$k.instance.restore();
			if (!App.Dialog['frmmain'].isActivated) {
				$f.events('frmmain', 'Activate')();
			}
			return retval;
		}
	},
	Code: { 
	},
	Widgets: { },
	Views: { }, 
	Events: {
		form_Load: function(e, itm) { 
			
		}//-FORM_LOAD
    }
};
$k.wrapallfunctions($heap.mobile['frmmain'].Code, 'frmmain');
 
/** Form Template --------------------------------------
 *  NAME: frmtitle
 *
 * version: 5.0
 **/
$heap.mobile['frmtitle'] = { };
$heap.mobile['frmtitle'] = {
    _flatten: true,
	_private: false,
	isLoaded: 0,
    isActivated: 0,
	count: 0,
	New: function(pos, show) {
		var instName;
		try {
			if (!KERNEL.enabled) return;
			if (!pos) {
				pos = { left: 0, top: 0, target: FORMS.Target };
			}
			pos.form = pos.form ? pos.form : 'frmtitle';
			if (!$heap.mobile[pos.form]) { pos.form = 'frmtitle'; }
			
			$k.instance.newform(pos.form, App.Dialog['frmtitle']);
			instName = $heap.mobile[pos.form].Load(pos);
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'New', target: {id: 'frmtitle'}});
			}
		}
		finally {
			if (show) { $heap.mobile[pos.form].Show(pos); }
			$k.instance.setbyelemid(instName);
			
			return instName;
		}
	},
	Menu: function(cmd) {
	},
    Load: function(pos) {
		var widgTarget = "", instID = "", options, props, styles, defPos;
		try {
			
			if (!KERNEL.enabled) return;		
			if (pos && pos.target) { FORMS.Target = pos.target; }
			if (App.Vars.running == false) { App.Vars.running = true; }
			if (App.target) { App.target = FORMS.Target; }
			
			 
			styles = ( null );
			defPos = {target: 'desktop' + DESKTOP.currentDesktop, dock:'RRRR', left:'-999', top:'-999', width:'480', height:'640'};
			pos = $k.instance.validatepos(pos, defPos);
			instID = $f.surface('frmtitle',pos.left,pos.top,480,640,styles);
			$f.hide('frmtitle');
				props = [{"name":"event-activate","value":"main.events.onLoadTitle"},{"name":"event-load","value":"main.events.onLoadTitle"},{"name":"body.version","value":"v5.0"},{"name":"autosize","value":"false"},{"name":"disabled","value":false},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"_private","value":"false"},{"name":"bind","value":"false"},{"name":"clipmenu","value":"true"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"flattenonpull","value":"true"},{"name":"ignorezorder","value":"true"},{"name":"output","value":"normal"},{"name":"shadow","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-surface"},{"name":"useastheme","value":"false"},{"name":"watch","value":"false"}];
				$f.setprop('frmtitle','', props);
				styles = [{"name":"color","value":"#eeeeee"},{"name":"background-color","value":"#ffffff"},{"name":"font-family","value":"roboto"},{"name":"font-weight","value":"normal"},{"name":"visibility","value":"visible"},{"name":"displaymode","value":""},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"auto"},{"name":"z-index","value":"2"}];
				$f.setstyle('frmtitle','', styles);
			
			
			$f.add('frmtitle','image','div','','160','194','170','160');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmtitle"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"ctype","value":"frame"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"}];
				$f.setprop('frmtitle','image', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"absolute"},{"name":"border","value":"0px #bbb dotted"},{"name":"display","value":"inline-block"},{"name":"left","value":"calc(50% - 80px)"},{"name":"position","value":"absolute"},{"name":"top","value":"calc(46% - 100px)"},{"name":"visibility","value":"visible"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"middle"}];
				$f.setstyle('frmtitle','image', styles);
			$f.add('frmtitle','title','label-right','','90','384','300','29');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmtitle"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Your App Here"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-size","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('frmtitle','title', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"bold"},{"name":"displaymode","value":"absolute"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"20pt"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"middle"},{"name":"caption.display","value":"table-cell"},{"name":"caption.left","value":"0px"},{"name":"caption.position","value":"relative"},{"name":"caption.text-align","value":"center"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"inline-block"},{"name":"div.height","value":"29px"},{"name":"div.left","value":"calc(50% - 150px)"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"absolute"},{"name":"div.top","value":"calc(46% + 90px)"},{"name":"div.width","value":"300px"}];
				$f.setstyle('frmtitle','title', styles);
			$f.add('frmtitle','btnenter','div','','155','560','170','40');
				props = [{"name":"event-click","value":"main.events.onCloseTitle"},{"name":"disabled","value":false},{"name":"form","value":"frmtitle"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"ctype","value":"frame"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-frame"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-height","value":"!!!!"},{"name":"lock-pos","value":"!!!!"}];
				$f.setprop('frmtitle','btnenter', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"rgba(20,20,20,.70)"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"absolute"},{"name":"border","value":"1px solid #000"},{"name":"height","value":"auto"},{"name":"left","value":"calc(50% - 85px)"},{"name":"margin","value":"0px 0px 0px 0px"},{"name":"padding","value":"10px 10px 6px 10px"},{"name":"top","value":"calc(100% - 80px)"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"23px"},{"name":"box-shadow","value":"rgba(80,80,80,.40) 0px 2px 2px 0px"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"}];
				$f.setstyle('frmtitle','btnenter', styles);
			$f.add($f.getinstname('frmtitle','btnenter'),'btnenter:caption','label-right','','0','0','103','22');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmtitle"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Let's Go!"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('frmtitle','btnenter:caption', props);
				styles = [{"name":"color","value":"#ffa500"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"bold"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"none"},{"name":"text-align","value":"center"},{"name":"caption.display","value":"table-cell"},{"name":"caption.left","value":"0px"},{"name":"caption.position","value":"relative"},{"name":"caption.text-align","value":"center"},{"name":"caption.vertical-align","value":"top"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.position","value":"relative"}];
				$f.setstyle('frmtitle','btnenter:caption', styles);
			$f.add('frmtitle','custom1','div','','13','576','48','48');
				props = [{"name":"disabled","value":false},{"name":"form","value":"frmtitle"},{"name":"dock","value":"FFFF"},{"name":"title","value":"custom1(google-font)"},{"name":"caption","value":""},{"name":"ctype","value":"googlefont"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':''<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"library","value":"google-font_Roboto"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-graphic"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"google-fontfamily","value":"Roboto"},{"name":"google-fontweight","value":"200,400,500,700"}];
				$f.setprop('frmtitle','custom1', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"absolute"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"inline-block"},{"name":"position","value":"absolute"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"14px"},{"name":"vertical-align","value":"middle"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"absolute"}];
				$f.setstyle('frmtitle','custom1', styles);
			$f.setprop('frmtitle','','dock',pos.dock);
			
			widgTarget = instID;
			$k.instance.setbyelemid(widgTarget);
			
			// Attach DATABIND Events ----------------
			if ( $f.model('frmtitle').enabled ) { $f.model('frmtitle').create('frmtitle'); }
			$nim.React.build('frmtitle');
			$f.refresh('frmtitle');
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Load', target: {id: 'frmtitle'}});
			}
		}
		finally {
			try {
				// Attach Form Events --------------------
				
				var itm, evnt, evtArr = [
						['btnenter', 'onclick', 'main.events.onCloseTitle']
				];
				for (var i = 0; i < evtArr.length; i++) {
					itm = evtArr[i]; 
					$f.setevent('frmtitle', itm[0], itm[1], $nim.fn.findEvent('mobile', 'frmtitle', evtArr[i]));
				}
				
				if (App.InstName == "") { App.InstName = instID; }
				App.Dialog['frmtitle'].isLoaded = 1;
				App.Dialog['frmtitle'].isActivated = 0;
				$f.hide('frmtitle');
			}
			catch (err) {
				if ($k.errhandler) {
					$k.errhandler(err, {type: 'Attach Events', target: {id: 'frmtitle'}});
				}
			}
			finally {
				// Attach WIDGETS To Dialog ----------------
				var list = $nim.Load32.Clear();
				$nim.Load32.onComplete(function() {
					var styles, props;
					$k.instance.setbyelemid(widgTarget);
					if ('') $f.alter.view.set('frmtitle','', false, true);
				
					props = [{"name":"body.version","value":"v5.0"}];
					$f.setprop('frmtitle','', props);
					styles = [{"name":"body.background-color","value":"transparent"},{"name":"body.box-sizing","value":"border-box"},{"name":"body.color","value":"#eeeeee"},{"name":"body.margin","value":"0px 0px 0px 0px"},{"name":"body.overflow-y","value":"auto"},{"name":"body.padding","value":"10px 15px 32px 15px"},{"name":"body.text-align","value":""},{"name":"body.vertical-align","value":""}];
					$f.setstyle('frmtitle','', styles);
					
					var ctrls = [];
					ctrls.forEach(function(itm) {
						if (itm.widget) { $f.hide(itm.name); } else { $f.hide('frmtitle', itm.name); }
					});
				
					$f.events('frmtitle', 'Load')(widgTarget, widgTarget.resolveName());
					$nim.Load32.Clear(true);
					$k.instance.setbyelemid(widgTarget);
					if ($f.getprop('frmtitle','','forceshow').toLowerCase() == 'true') $heap.mobile['frmtitle'].Show(pos);
					return;
				});
				if ($nim.Load32.list[list].length > 0) {
					$nim.Load32.ArrayLoad(list, 0);
					return instID;
				} else { $nim.Load32.Load_Complete(list); }
				
				$k.instance.setbyelemid(widgTarget);
				return instID;
			}
		}
    },
	Activate: function() {
		var instID = $k.instance.save('frmtitle');
		try {
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Activate', target: {id: 'frmtitle'}});
			}
		}
		finally {
			$k.instance.setbyelemid(instID);
			$f.events('frmtitle', 'Activate')(instID, instID.resolveName());
			App.Dialog['frmtitle'].isActivated = 1;
			$k.instance.restore();
		}
	},
	BeforeUnload: function() {
		var blCancel = false;
		var instID = $k.instance.save('frmtitle');
		try {
			if ($k.islastform('frmtitle')) { $k.app.unloadwidget('frmtitle'); }
			
			var itm, evtArr = [
					['btnenter', 'onclick']
			];
			for (var i = 0; i < evtArr.length; i++) {
				itm = evtArr[i]; $f.setevent('frmtitle', itm[0], itm[1], null);
			}
			
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'BeforeUnload', target: {id: 'frmtitle'}});
			}
		}
		finally {
			$k.instance.setbyelemid(instID);
			blCancel = $f.events('frmtitle', 'QueryUnload')(instID, instID.resolveName());
			$k.instance.restore();
		}
		return blCancel;
	},
	UnloadAll: function() {
		try {
			$k.instance.save('frmtitle');
			if (App) {
				var dlgItem = App.Dialog['frmtitle'], 
					dlgCount = App.Dialog['frmtitle'].count; 
					
				for (var x = dlgCount; x >= 0; x--) {
					KERNEL.formInst = x;
					dlgItem.Unload();
				}
			}
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'UnloadAll', target: {id: 'frmtitle'}});
			}
		}
		finally {
			App.Dialog['frmtitle'].count = 0;
			$k.instance.restore();
			KERNEL.formInst = 0;
		}
	},
	Unload: function() {
		var blCancel = false;
		try {
			var instID = $k.instance.save('frmtitle');
			blCancel = $f.events('frmtitle', 'QueryUnload')();
			if (blCancel) {
				return blCancel;
			}
			
			$k.instance.save('frmtitle');
			$k.instance.restore();
			$f.events('frmtitle', 'Unload')(instID, instID.resolveName());
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Unload', target: {id: 'frmtitle'}});
			}
		}
		finally {
			$k.instance.restore();
			if (!blCancel) {
				FORMS.sysUnload("frmtitle");
				App.Dialog['frmtitle'].isLoaded = 0;
				App.Dialog['frmtitle'].isActivated = 0;
				
				if (App) {
					$k.instance.setbyelemid(KERNEL.curId);
					var elem, dlgName = "";
					
					if (!$k.isanyformloaded()) {
						if (!App.App.exiting) { App.End(); }
					}
				}
			}
		}
	},
    Show: function(pos) {
		var retval = "";
		try {
			if (!KERNEL.enabled) return;
			var instID = $k.instance.save('frmtitle');
			if ($k.isformloaded('frmtitle') == false) {
				retval = $f.events('frmtitle', 'Load')(pos);
			}
			
			$k.instance.restore();
			$f.show("frmtitle");
			
			// Pull DataModel. 
			$k.instance.save('frmtitle');
			if ($f.model('frmtitle').enabled) { $f.model('frmtitle').pull(); }
		}
		catch(err) { 
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Show', target: {id: 'frmtitle'}});
			}
		}
		finally {
			$k.instance.restore();
			if (!App.Dialog['frmtitle'].isActivated) {
				$f.events('frmtitle', 'Activate')();
			}
			return retval;
		}
	},
	Code: { 
	},
	Widgets: { },
	Views: { }, 
	Events: {
		form_Activate: function(event, item) { 
			// Your Code Here.. ---
			// -------------------- 

		},
		form_Load: function(e, itm) { 
			
		}//-FORM_LOAD
    }
};
$k.wrapallfunctions($heap.mobile['frmtitle'].Code, 'frmtitle');
 
/** Form Template --------------------------------------
 *  NAME: loginassets
 *
 * version: 5.0
 **/
$heap.mobile['loginassets'] = { };
$heap.mobile['loginassets'] = {
    _flatten: true,
	_private: false,
	isLoaded: 0,
    isActivated: 0,
	count: 0,
	New: function(pos, show) {
		var instName;
		try {
			if (!KERNEL.enabled) return;
			if (!pos) {
				pos = { left: 0, top: 0, target: FORMS.Target };
			}
			pos.form = pos.form ? pos.form : 'loginassets';
			if (!$heap.mobile[pos.form]) { pos.form = 'loginassets'; }
			
			$k.instance.newform(pos.form, App.Dialog['loginassets']);
			instName = $heap.mobile[pos.form].Load(pos);
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'New', target: {id: 'loginassets'}});
			}
		}
		finally {
			if (show) { $heap.mobile[pos.form].Show(pos); }
			$k.instance.setbyelemid(instName);
			
			return instName;
		}
	},
	Menu: function(cmd) {
	},
    Load: function(pos) {
		var widgTarget = "", instID = "", options, props, styles, defPos;
		try {
			
			if (!KERNEL.enabled) return;		
			if (pos && pos.target) { FORMS.Target = pos.target; }
			if (App.Vars.running == false) { App.Vars.running = true; }
			if (App.target) { App.target = FORMS.Target; }
			
			 
			styles = ( null );
			defPos = {target: 'desktop' + DESKTOP.currentDesktop, dock:'RRRR', left:'0', top:'0', width:'400', height:'600'};
			pos = $k.instance.validatepos(pos, defPos);
			instID = $f.surface('loginassets',pos.left,pos.top,400,600,styles);
			$f.hide('loginassets');
				props = [{"name":"body.version","value":"v5.0"},{"name":"autosize","value":"false"},{"name":"disabled","value":false},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"_private","value":"false"},{"name":"bind","value":"false"},{"name":"clipmenu","value":"true"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"flattenonpull","value":"true"},{"name":"ignorezorder","value":"true"},{"name":"output","value":"normal"},{"name":"shadow","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-surface"},{"name":"useastheme","value":"false"},{"name":"watch","value":"false"}];
				$f.setprop('loginassets','', props);
				styles = [{"name":"color","value":"#eeeeee"},{"name":"background-color","value":"#ffffff"},{"name":"font-family","value":"roboto"},{"name":"font-weight","value":"normal"},{"name":"visibility","value":"visible"},{"name":"displaymode","value":""},{"name":"font-size","value":"13pt"},{"name":"pointer-events","value":"auto"},{"name":"z-index","value":"2"}];
				$f.setstyle('loginassets','', styles);
			
			
			$f.add('loginassets','login','div','','0','0','392','351');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"ctype","value":"frame"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-height","value":"!!!!"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"top-margin","value":"calc(50% - 175px)"}];
				$f.setprop('loginassets','login', props);
				styles = [{"name":"left","value":""},{"name":"top","value":""},{"name":"width","value":""},{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px #bbb dotted"},{"name":"display","value":"block"},{"name":"height","value":"auto"},{"name":"margin","value":"0px 0px 0px 0px"},{"name":"padding","value":"16px 16px 16px 16px"},{"name":"position","value":"relative"},{"name":"visibility","value":"visible"},{"name":"width","value":"auto"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"middle"}];
				$f.setstyle('loginassets','login', styles);
			$f.add($f.getinstname('loginassets','login'),'login:logintitle','label','','0','0','420','31');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"App Title Here"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<<LK>CR<RK>>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginassets','login:logintitle', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"26px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"0px 0px 20px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginassets','login:logintitle', styles);
			$f.add($f.getinstname('loginassets','login'),'login:lbwelcome','label','','0','0','148','32');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Welcome back. Please login to your account."},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<<LK>CR<RK>>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginassets','login:lbwelcome', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"12px"},{"name":"max-width","value":"50%"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"0px 0px 25px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginassets','login:lbwelcome', styles);
			$f.add($f.getinstname('loginassets','login'),'login:lbemail','label','','0','0','302','21');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Login or Email"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginassets','login:lbemail', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"12px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginassets','login:lbemail', styles);
			$f.add($f.getinstname('loginassets','login'),'login:login','textbox','','0','0','105','31');
				props = [{"name":"event-keydown","value":"login.events.loginKeyDown"},{"name":"event-lostfocus","value":"login.events.validate"},{"name":"disabled","value":false},{"name":"form","value":"loginassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"true"},{"name":"bindkey","value":"login(value)"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-textbox"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"db-key","value":"false"},{"name":"db-name","value":"login"},{"name":"db-type","value":"text"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('loginassets','login:login', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#f0f0f0"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0.5px solid rgba(104,154,219,0.80)"},{"name":"outline","value":"none"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"2px"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"0px 0px 20px 0px"},{"name":"div.padding","value":"0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginassets','login:login', styles);
			$f.add($f.getinstname('loginassets','login'),'login:lbpassword','label','','0','0','105','21');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Password"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginassets','login:lbpassword', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"12px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginassets','login:lbpassword', styles);
			$f.add($f.getinstname('loginassets','login'),'login:password','textbox','','0','0','303','31');
				props = [{"name":"event-keydown","value":"login.events.passKeyDown"},{"name":"event-lostfocus","value":"login.events.validate"},{"name":"disabled","value":false},{"name":"form","value":"loginassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"true"},{"name":"bindkey","value":"pass(value)"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-textbox"},{"name":"type","value":"password"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"db-key","value":"false"},{"name":"db-name","value":"password"},{"name":"db-type","value":"text"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('loginassets','login:password', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#f0f0f0"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0.5px solid rgba(104,154,219,0.80)"},{"name":"outline","value":"none"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"2px"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"0px 0px 0px 0px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginassets','login:password', styles);
			$f.add($f.getinstname('loginassets','login'),'login:lbreset','label','','0','0','111','15');
				props = [{"name":"event-click","value":"login.events.resetClick"},{"name":"disabled","value":false},{"name":"form","value":"loginassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"I have a reset code."},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginassets','login:lbreset', props);
				styles = [{"name":"color","value":"#224488"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"11px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.left","value":"0px"},{"name":"caption.position","value":"relative"},{"name":"caption.text-align","value":"left"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"div.width","value":"40%"}];
				$f.setstyle('loginassets','login:lbreset', styles);
			$f.add($f.getinstname('loginassets','login'),'login:lbforgot','label-right','','0','0','97','15');
				props = [{"name":"event-click","value":"login.events.forgotClick"},{"name":"disabled","value":false},{"name":"form","value":"loginassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Forgot password?"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginassets','login:lbforgot', props);
				styles = [{"name":"color","value":"#224488"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"11px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.left","value":"0px"},{"name":"caption.position","value":"relative"},{"name":"caption.text-align","value":"right"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"0px 0px 0px 20%"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"div.width","value":"40%"}];
				$f.setstyle('loginassets','login:lbforgot', styles);
			$f.add($f.getinstname('loginassets','login'),'login:lbregister','label-right','','0','0','303','15');
				props = [{"name":"event-click","value":"login.events.registerClick"},{"name":"disabled","value":false},{"name":"form","value":"loginassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Register"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginassets','login:lbregister', props);
				styles = [{"name":"color","value":"#224488"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"11px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.left","value":"0px"},{"name":"caption.position","value":"relative"},{"name":"caption.text-align","value":"right"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"0px 0px 20px 60%"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginassets','login:lbregister', styles);
			$f.add($f.getinstname('loginassets','login'),'login:btnlogin','button','','0','0','100','35');
				props = [{"name":"event-click","value":"login.events.loginClick"},{"name":"disabled","value":true},{"name":"form","value":"loginassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Login"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-button"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"}];
				$f.setprop('loginassets','login:btnlogin', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"rgba(104,154,219,0.80)"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"1px solid #bbb"},{"name":"padding","value":"2px 7.5px"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"3px"},{"name":"font-size","value":"13px"},{"name":"caption.position","value":"absolute"},{"name":"caption.text-align","value":"center"},{"name":"caption.top","value":"calc(50% - 0.6em)"},{"name":"caption.width","value":"calc(100% - 15px)"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginassets','login:btnlogin', styles);
			$f.add($f.getinstname('loginassets','login'),'login:btnsignup','button','','0','0','100','35');
				props = [{"name":"event-click","value":"login.events.registerClick"},{"name":"disabled","value":false},{"name":"form","value":"loginassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Sign Up"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-button"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"}];
				$f.setprop('loginassets','login:btnsignup', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#f0f0f0"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"1px solid rgba(104,154,219,0.80)"},{"name":"padding","value":"2px 7.5px"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"3px"},{"name":"font-size","value":"13px"},{"name":"pointer-events","value":"inherit"},{"name":"caption.position","value":"absolute"},{"name":"caption.text-align","value":"center"},{"name":"caption.top","value":"calc(50% - 0.6em)"},{"name":"caption.width","value":"calc(100% - 15px)"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"0px 0px 0px 10px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginassets','login:btnsignup', styles);
			$f.add('loginassets','register','div','','0','0','359','360');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"ctype","value":"frame"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-height","value":"!!!!"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"top-margin","value":"calc(50% - 175px)"}];
				$f.setprop('loginassets','register', props);
				styles = [{"name":"left","value":""},{"name":"top","value":""},{"name":"width","value":""},{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px #bbb dotted"},{"name":"display","value":"block"},{"name":"margin","value":"0px 0px 0px 0px"},{"name":"padding","value":"16px 16px 16px 16px"},{"name":"position","value":"relative"},{"name":"visibility","value":"visible"},{"name":"width","value":"auto"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"middle"}];
				$f.setstyle('loginassets','register', styles);
			$f.add($f.getinstname('loginassets','register'),'register:lbtitle','label','','0','0','105','21');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Create Your Account"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<<LK>CR<RK>>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginassets','register:lbtitle', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"24px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"0px 0px 25px 0px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginassets','register:lbtitle', styles);
			$f.add($f.getinstname('loginassets','register'),'register:lbusername','label','','0','0','105','21');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Username:"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginassets','register:lbusername', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"12px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginassets','register:lbusername', styles);
			$f.add($f.getinstname('loginassets','register'),'register:login','textbox','','0','0','105','31');
				props = [{"name":"event-keydown","value":"register.events.loginKeyDown"},{"name":"event-lostfocus","value":"register.events.validate"},{"name":"disabled","value":false},{"name":"form","value":"loginassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"true"},{"name":"bindkey","value":"login(value)"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-textbox"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"db-key","value":"false"},{"name":"db-name","value":"login"},{"name":"db-type","value":"text"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('loginassets','register:login', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"rgba(120,150,180,0.25)"},{"name":"font-size","value":"inherit"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0.5px solid #bbb"},{"name":"outline","value":"none"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"2px"},{"name":"box-sizing","value":"border-box"},{"name":"pointer-events","value":"inherit"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"0px 0px 10px 0px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginassets','register:login', styles);
			$f.add($f.getinstname('loginassets','register'),'register:lbemail','label','','0','0','105','21');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Email:"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginassets','register:lbemail', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"12px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginassets','register:lbemail', styles);
			$f.add($f.getinstname('loginassets','register'),'register:email','textbox','','0','0','105','31');
				props = [{"name":"event-keydown","value":"register.events.emailKeyDown"},{"name":"event-lostfocus","value":"register.events.validate"},{"name":"disabled","value":false},{"name":"form","value":"loginassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"true"},{"name":"bindkey","value":"email(value)"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-textbox"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"db-key","value":"false"},{"name":"db-name","value":"email"},{"name":"db-type","value":"text"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('loginassets','register:email', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"rgba(120,150,180,0.25)"},{"name":"font-size","value":"inherit"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0.5px solid #bbb"},{"name":"outline","value":"none"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"2px"},{"name":"box-sizing","value":"border-box"},{"name":"pointer-events","value":"inherit"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"0px 0px 10px 0px"},{"name":"div.padding","value":"0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginassets','register:email', styles);
			$f.add($f.getinstname('loginassets','register'),'register:lbpassword','label','','0','0','311','21');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Password:"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginassets','register:lbpassword', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"12px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginassets','register:lbpassword', styles);
			$f.add($f.getinstname('loginassets','register'),'register:password','textbox','','0','0','105','31');
				props = [{"name":"event-keydown","value":"register.events.passwordKeyDown"},{"name":"event-lostfocus","value":"register.events.validate"},{"name":"disabled","value":false},{"name":"form","value":"loginassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"true"},{"name":"bindkey","value":"password(value)"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-textbox"},{"name":"type","value":"password"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"db-key","value":"false"},{"name":"db-name","value":"password"},{"name":"db-type","value":"text"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('loginassets','register:password', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"rgba(120,150,180,0.25)"},{"name":"font-size","value":"inherit"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0.5px solid #bbb"},{"name":"outline","value":"none"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"2px"},{"name":"box-sizing","value":"border-box"},{"name":"pointer-events","value":"inherit"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"0px 0px 10px 0px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginassets','register:password', styles);
			$f.add($f.getinstname('loginassets','register'),'register:lbconfirm','label','','0','0','311','18');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Confirm password:"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginassets','register:lbconfirm', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"12px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginassets','register:lbconfirm', styles);
			$f.add($f.getinstname('loginassets','register'),'register:confirm','textbox','','0','0','311','31');
				props = [{"name":"event-keydown","value":"register.events.confirmKeyDown"},{"name":"event-lostfocus","value":"register.events.validate"},{"name":"disabled","value":false},{"name":"form","value":"loginassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"true"},{"name":"bindkey","value":"confirm(value)"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-textbox"},{"name":"type","value":"password"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"db-key","value":"false"},{"name":"db-name","value":"confirm"},{"name":"db-type","value":"text"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('loginassets','register:confirm', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"rgba(120,150,180,0.25)"},{"name":"font-size","value":"inherit"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0.5px solid #bbb"},{"name":"outline","value":"none"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"2px"},{"name":"box-sizing","value":"border-box"},{"name":"pointer-events","value":"inherit"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"0px 0px 10px 0px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginassets','register:confirm', styles);
			$f.add($f.getinstname('loginassets','register'),'register:btnclose','button','','0','0','79','35');
				props = [{"name":"event-click","value":"register.events.closeClick"},{"name":"disabled","value":false},{"name":"form","value":"loginassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Cancel"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-button"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"}];
				$f.setprop('loginassets','register:btnclose', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#68789d"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"2px solid rgba(250,250,250,0.80)"},{"name":"float","value":"right"},{"name":"padding","value":"2px 7.5px"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"3px"},{"name":"font-size","value":"13px"},{"name":"pointer-events","value":"inherit"},{"name":"caption.position","value":"absolute"},{"name":"caption.text-align","value":"center"},{"name":"caption.top","value":"calc(50% - 0.6em)"},{"name":"caption.width","value":"calc(100% - 15px)"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"0px 0px 0px 10px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginassets','register:btnclose', styles);
			$f.add($f.getinstname('loginassets','register'),'register:btnregister','button','','0','0','115','35');
				props = [{"name":"event-click","value":"register.events.registerClick"},{"name":"disabled","value":true},{"name":"form","value":"loginassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Register"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-button"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"}];
				$f.setprop('loginassets','register:btnregister', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#68789d"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"2px solid rgba(250,250,250,0.80)"},{"name":"float","value":"right"},{"name":"padding","value":"2px 7.5px"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"3px"},{"name":"font-size","value":"13px"},{"name":"caption.position","value":"absolute"},{"name":"caption.text-align","value":"center"},{"name":"caption.top","value":"calc(50% - 0.6em)"},{"name":"caption.width","value":"calc(100% - 15px)"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"0px 0px 0px 10px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginassets','register:btnregister', styles);
			$f.add('loginassets','reset','div','','0','0','333','363');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"ctype","value":"frame"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"top-margin","value":"calc(50% - 180px)"}];
				$f.setprop('loginassets','reset', props);
				styles = [{"name":"left","value":""},{"name":"top","value":""},{"name":"width","value":""},{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px #bbb dotted"},{"name":"display","value":"block"},{"name":"padding","value":"18px 18px 18px 18px"},{"name":"position","value":"relative"},{"name":"visibility","value":"visible"},{"name":"width","value":"auto"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"middle"}];
				$f.setstyle('loginassets','reset', styles);
			$f.add($f.getinstname('loginassets','reset'),'reset:lbtitle','label','','0','0','105','24');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Change Password"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<<LK>CR<RK>>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginassets','reset:lbtitle', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"24px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"0px 0px 25px 0px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginassets','reset:lbtitle', styles);
			$f.add($f.getinstname('loginassets','reset'),'reset:lbemail','label','','0','0','105','21');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Email:"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginassets','reset:lbemail', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"12px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginassets','reset:lbemail', styles);
			$f.add($f.getinstname('loginassets','reset'),'reset:email','textbox','','0','0','311','31');
				props = [{"name":"event-keydown","value":"register.events.emailKeyDown"},{"name":"event-lostfocus","value":"register.events.validate"},{"name":"disabled","value":false},{"name":"form","value":"loginassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"true"},{"name":"bindkey","value":"email(value)"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-textbox"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"db-key","value":"false"},{"name":"db-name","value":"email"},{"name":"db-type","value":"text"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('loginassets','reset:email', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"rgba(120,150,180,0.25)"},{"name":"font-size","value":"inherit"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0.5px solid #bbb"},{"name":"outline","value":"none"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"2px"},{"name":"box-sizing","value":"border-box"},{"name":"pointer-events","value":"inherit"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"0px 0px 10px 0px"},{"name":"div.padding","value":"0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginassets','reset:email', styles);
			$f.add($f.getinstname('loginassets','reset'),'reset:lbpassword','label','','0','0','311','21');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"New Password:"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginassets','reset:lbpassword', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"12px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginassets','reset:lbpassword', styles);
			$f.add($f.getinstname('loginassets','reset'),'reset:newpw','textbox','','0','0','105','31');
				props = [{"name":"event-keydown","value":"reset.events.newPwKeyDown"},{"name":"event-lostfocus","value":"reset.events.validate"},{"name":"disabled","value":false},{"name":"form","value":"loginassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"true"},{"name":"bindkey","value":"newpw(value)"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-textbox"},{"name":"type","value":"password"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"db-key","value":"false"},{"name":"db-name","value":"newpw"},{"name":"db-type","value":"text"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('loginassets','reset:newpw', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"rgba(120,150,180,0.25)"},{"name":"font-size","value":"inherit"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0.5px solid #bbb"},{"name":"outline","value":"none"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"2px"},{"name":"box-sizing","value":"border-box"},{"name":"pointer-events","value":"inherit"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"0px 0px 10px 0px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginassets','reset:newpw', styles);
			$f.add($f.getinstname('loginassets','reset'),'reset:lbconfirm','label','','0','0','105','21');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Confirm password:"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginassets','reset:lbconfirm', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"12px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginassets','reset:lbconfirm', styles);
			$f.add($f.getinstname('loginassets','reset'),'reset:confirm','textbox','','0','0','105','31');
				props = [{"name":"event-keydown","value":"reset.events.confirmKeyDown"},{"name":"event-lostfocus","value":"reset.events.validate"},{"name":"disabled","value":false},{"name":"form","value":"loginassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"true"},{"name":"bindkey","value":"confirm(value)"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-textbox"},{"name":"type","value":"password"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"db-key","value":"false"},{"name":"db-name","value":"confirm"},{"name":"db-type","value":"text"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('loginassets','reset:confirm', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"rgba(120,150,180,0.25)"},{"name":"font-size","value":"inherit"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0.5px solid #bbb"},{"name":"outline","value":"none"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"2px"},{"name":"box-sizing","value":"border-box"},{"name":"pointer-events","value":"inherit"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"0px 0px 10px 0px"},{"name":"div.padding","value":"0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginassets','reset:confirm', styles);
			$f.add($f.getinstname('loginassets','reset'),'reset:lbcode','label','','0','0','105','21');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Authorization Token:"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginassets','reset:lbcode', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"12px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginassets','reset:lbcode', styles);
			$f.add($f.getinstname('loginassets','reset'),'reset:token','textbox','','0','0','105','31');
				props = [{"name":"event-keydown","value":"reset.events.tokenKeyDown"},{"name":"event-lostfocus","value":"reset.events.validate"},{"name":"disabled","value":false},{"name":"form","value":"loginassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"true"},{"name":"bindkey","value":"token(value)"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-textbox"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"db-key","value":"false"},{"name":"db-name","value":"token"},{"name":"db-type","value":"text"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('loginassets','reset:token', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"rgba(120,150,180,0.25)"},{"name":"font-size","value":"inherit"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0.5px solid #bbb"},{"name":"outline","value":"none"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"2px"},{"name":"box-sizing","value":"border-box"},{"name":"pointer-events","value":"inherit"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"0px 0px 10px 0px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginassets','reset:token', styles);
			$f.add($f.getinstname('loginassets','reset'),'reset:btnclose','button','','0','0','79','35');
				props = [{"name":"event-click","value":"reset.events.closeClick"},{"name":"disabled","value":false},{"name":"form","value":"loginassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Cancel"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-button"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"}];
				$f.setprop('loginassets','reset:btnclose', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#68789d"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"2px solid rgba(250,250,250,0.80)"},{"name":"float","value":"right"},{"name":"padding","value":"2px 7.5px"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"3px"},{"name":"font-size","value":"13px"},{"name":"pointer-events","value":"inherit"},{"name":"caption.position","value":"absolute"},{"name":"caption.text-align","value":"center"},{"name":"caption.top","value":"calc(50% - 0.6em)"},{"name":"caption.width","value":"calc(100% - 15px)"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"0px 0px 0px 10px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginassets','reset:btnclose', styles);
			$f.add($f.getinstname('loginassets','reset'),'reset:btnupdate','button','','0','0','147','35');
				props = [{"name":"event-click","value":"reset.events.resetClick"},{"name":"disabled","value":true},{"name":"form","value":"loginassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Update Password"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<<LK>CR<RK>>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-button"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"}];
				$f.setprop('loginassets','reset:btnupdate', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#68789d"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"2px solid rgba(250,250,250,0.80)"},{"name":"float","value":"right"},{"name":"padding","value":"2px 7.5px"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"3px"},{"name":"font-size","value":"13px"},{"name":"caption.position","value":"absolute"},{"name":"caption.text-align","value":"center"},{"name":"caption.top","value":"calc(50% - 0.6em)"},{"name":"caption.width","value":"calc(100% - 15px)"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"0px 0px 0px 10px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginassets','reset:btnupdate', styles);
			$f.add('loginassets','forgot','div','','0','0','335','38');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"ctype","value":"frame"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-height","value":"!!!!"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"top-margin","value":"calc(50% - 131px)"}];
				$f.setprop('loginassets','forgot', props);
				styles = [{"name":"left","value":""},{"name":"top","value":""},{"name":"width","value":""},{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px #bbb dotted"},{"name":"display","value":"block"},{"name":"height","value":"auto"},{"name":"padding","value":"18px 18px 18px 18px"},{"name":"position","value":"relative"},{"name":"visibility","value":"visible"},{"name":"width","value":"auto"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"middle"}];
				$f.setstyle('loginassets','forgot', styles);
			$f.add($f.getinstname('loginassets','forgot'),'forgot:lbtitle','label','','0','0','105','21');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Forgot Password?"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<<LK>CR<RK>>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginassets','forgot:lbtitle', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"24px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"0px 0px 20px 0px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginassets','forgot:lbtitle', styles);
			$f.add($f.getinstname('loginassets','forgot'),'forgot:lbusername','label','','0','0','105','21');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Username:"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginassets','forgot:lbusername', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"12px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginassets','forgot:lbusername', styles);
			$f.add($f.getinstname('loginassets','forgot'),'forgot:login','textbox','','0','0','105','31');
				props = [{"name":"event-keydown","value":"forgot.events.loginKeyDown"},{"name":"event-lostfocus","value":"forgot.events.loginBlur"},{"name":"disabled","value":false},{"name":"form","value":"loginassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"true"},{"name":"bindkey","value":"login(value)"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-textbox"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"db-key","value":"false"},{"name":"db-name","value":"login"},{"name":"db-type","value":"text"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('loginassets','forgot:login', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"rgba(120,150,180,0.25)"},{"name":"font-size","value":"inherit"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0.5px solid #bbb"},{"name":"outline","value":"none"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"2px"},{"name":"box-sizing","value":"border-box"},{"name":"pointer-events","value":"inherit"},{"name":"div.display","value":"block"},{"name":"div.padding","value":"0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginassets','forgot:login', styles);
			$f.add($f.getinstname('loginassets','forgot'),'forgot:label','label-right','','0','0','105','21');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"- or -"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<<LK>CR<RK>>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginassets','forgot:label', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-size","value":"inherit"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.left","value":"0px"},{"name":"caption.position","value":"relative"},{"name":"caption.text-align","value":"center"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"10px 0px 5px 0px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginassets','forgot:label', styles);
			$f.add($f.getinstname('loginassets','forgot'),'forgot:lbemail','label','','0','0','105','21');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Email:"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginassets','forgot:lbemail', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"12px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginassets','forgot:lbemail', styles);
			$f.add($f.getinstname('loginassets','forgot'),'forgot:email','textbox','','0','0','311','31');
				props = [{"name":"event-keydown","value":"forgot.events.emailKeyDown"},{"name":"event-lostfocus","value":"forgot.events.emailBlur"},{"name":"disabled","value":false},{"name":"form","value":"loginassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"true"},{"name":"bindkey","value":"email(value)"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-textbox"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"db-key","value":"false"},{"name":"db-name","value":"email"},{"name":"db-type","value":"text"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('loginassets','forgot:email', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"rgba(120,150,180,0.25)"},{"name":"font-size","value":"inherit"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0.5px solid #bbb"},{"name":"outline","value":"none"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"2px"},{"name":"box-sizing","value":"border-box"},{"name":"pointer-events","value":"inherit"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"0px 0px 10px 0px"},{"name":"div.padding","value":"0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginassets','forgot:email', styles);
			$f.add($f.getinstname('loginassets','forgot'),'forgot:btnclose','button','','0','0','82','35');
				props = [{"name":"event-click","value":"forgot.events.closeClick"},{"name":"disabled","value":false},{"name":"form","value":"loginassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Cancel"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-button"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"}];
				$f.setprop('loginassets','forgot:btnclose', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#68789d"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"2px solid rgba(250,250,250,0.80)"},{"name":"float","value":"right"},{"name":"padding","value":"2px 7.5px"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"3px"},{"name":"font-size","value":"13px"},{"name":"pointer-events","value":"inherit"},{"name":"caption.position","value":"absolute"},{"name":"caption.text-align","value":"center"},{"name":"caption.top","value":"calc(50% - 0.6em)"},{"name":"caption.width","value":"calc(100% - 15px)"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"0px 0px 0px 10px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginassets','forgot:btnclose', styles);
			$f.add($f.getinstname('loginassets','forgot'),'forgot:btnreset','button','','0','0','147','35');
				props = [{"name":"event-click","value":"forgot.events.resetClick"},{"name":"disabled","value":false},{"name":"form","value":"loginassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Reset Password"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-button"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"}];
				$f.setprop('loginassets','forgot:btnreset', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#68789d"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"2px solid rgba(250,250,250,0.80)"},{"name":"float","value":"right"},{"name":"padding","value":"2px 7.5px"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"3px"},{"name":"font-size","value":"13px"},{"name":"pointer-events","value":"inherit"},{"name":"caption.position","value":"absolute"},{"name":"caption.text-align","value":"center"},{"name":"caption.top","value":"calc(50% - 0.6em)"},{"name":"caption.width","value":"calc(100% - 15px)"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"0px 0px 0px 10px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginassets','forgot:btnreset', styles);
			$f.add('loginassets','nodata','div','','0','0','392','140');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"ctype","value":"frame"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('loginassets','nodata', props);
				styles = [{"name":"left","value":""},{"name":"top","value":""},{"name":"width","value":""},{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px #bbb dotted"},{"name":"display","value":"block"},{"name":"position","value":"relative"},{"name":"visibility","value":"visible"},{"name":"width","value":"auto"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"middle"}];
				$f.setstyle('loginassets','nodata', styles);
			$f.add($f.getinstname('loginassets','nodata'),'nodata:label','label-right','','0','0','105','21');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginassets"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"No content to display."},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginassets','nodata:label', props);
				styles = [{"name":"color","value":"#999999"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"italic"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"14px"},{"name":"text-align","value":"left"},{"name":"vertical-align","value":"middle"},{"name":"caption.display","value":"table-cell"},{"name":"caption.left","value":"0px"},{"name":"caption.position","value":"relative"},{"name":"caption.text-align","value":"center"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"},{"name":"div.top","value":"calc(50% - 16px)"},{"name":"div.width","value":"auto"}];
				$f.setstyle('loginassets','nodata:label', styles);
			$f.setprop('loginassets','','dock',pos.dock);
			
			widgTarget = instID;
			$k.instance.setbyelemid(widgTarget);
			
			// Attach DATABIND Events ----------------
			if ( $f.model('loginassets').enabled ) { $f.model('loginassets').create('loginassets'); }
			$nim.React.build('loginassets');
			$f.refresh('loginassets');
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Load', target: {id: 'loginassets'}});
			}
		}
		finally {
			try {
				// Attach Form Events --------------------
				
				var itm, evnt, evtArr = [
						['login:login', 'onblur', 'login.events.validate'],['login:login', 'onkeydown', 'login.events.loginKeyDown'],['login:password', 'onblur', 'login.events.validate'],
					['login:password', 'onkeydown', 'login.events.passKeyDown'],['login:lbreset', 'onclick', 'login.events.resetClick'],['login:lbforgot', 'onclick', 'login.events.forgotClick'],['login:lbregister', 'onclick', 'login.events.registerClick'],['login:btnlogin', 'onclick', 'login.events.loginClick'],
					['login:btnsignup', 'onclick', 'login.events.registerClick'],['register:login', 'onblur', 'register.events.validate'],['register:login', 'onkeydown', 'register.events.loginKeyDown'],['register:email', 'onblur', 'register.events.validate'],['register:email', 'onkeydown', 'register.events.emailKeyDown'],
					['register:password', 'onblur', 'register.events.validate'],['register:password', 'onkeydown', 'register.events.passwordKeyDown'],['register:confirm', 'onblur', 'register.events.validate'],['register:confirm', 'onkeydown', 'register.events.confirmKeyDown'],['register:btnclose', 'onclick', 'register.events.closeClick'],
					['register:btnregister', 'onclick', 'register.events.registerClick'],['reset:email', 'onblur', 'register.events.validate'],['reset:email', 'onkeydown', 'register.events.emailKeyDown'],['reset:newpw', 'onblur', 'reset.events.validate'],['reset:newpw', 'onkeydown', 'reset.events.newPwKeyDown'],
					['reset:confirm', 'onblur', 'reset.events.validate'],['reset:confirm', 'onkeydown', 'reset.events.confirmKeyDown'],['reset:token', 'onblur', 'reset.events.validate'],['reset:token', 'onkeydown', 'reset.events.tokenKeyDown'],['reset:btnclose', 'onclick', 'reset.events.closeClick'],
					['reset:btnupdate', 'onclick', 'reset.events.resetClick'],['forgot:login', 'onblur', 'forgot.events.loginBlur'],['forgot:login', 'onkeydown', 'forgot.events.loginKeyDown'],['forgot:email', 'onblur', 'forgot.events.emailBlur'],['forgot:email', 'onkeydown', 'forgot.events.emailKeyDown'],
					['forgot:btnclose', 'onclick', 'forgot.events.closeClick'],['forgot:btnreset', 'onclick', 'forgot.events.resetClick']
				];
				for (var i = 0; i < evtArr.length; i++) {
					itm = evtArr[i]; 
					$f.setevent('loginassets', itm[0], itm[1], $nim.fn.findEvent('mobile', 'loginassets', evtArr[i]));
				}
				
				if (App.InstName == "") { App.InstName = instID; }
				App.Dialog['loginassets'].isLoaded = 1;
				App.Dialog['loginassets'].isActivated = 0;
				$f.hide('loginassets');
			}
			catch (err) {
				if ($k.errhandler) {
					$k.errhandler(err, {type: 'Attach Events', target: {id: 'loginassets'}});
				}
			}
			finally {
				// Attach WIDGETS To Dialog ----------------
				var list = $nim.Load32.Clear();
				$nim.Load32.onComplete(function() {
					var styles, props;
					$k.instance.setbyelemid(widgTarget);
					if ('') $f.alter.view.set('loginassets','', false, true);
				
					props = [{"name":"body.version","value":"v5.0"}];
					$f.setprop('loginassets','', props);
					styles = [{"name":"body.background-color","value":"transparent"},{"name":"body.box-sizing","value":"border-box"},{"name":"body.color","value":"#eeeeee"},{"name":"body.overflow-y","value":"auto"},{"name":"body.text-align","value":""},{"name":"body.vertical-align","value":""}];
					$f.setstyle('loginassets','', styles);
					
					var ctrls = [];
					ctrls.forEach(function(itm) {
						if (itm.widget) { $f.hide(itm.name); } else { $f.hide('loginassets', itm.name); }
					});
				
					$f.events('loginassets', 'Load')(widgTarget, widgTarget.resolveName());
					$nim.Load32.Clear(true);
					$k.instance.setbyelemid(widgTarget);
					if ($f.getprop('loginassets','','forceshow').toLowerCase() == 'true') $heap.mobile['loginassets'].Show(pos);
					return;
				});
				if ($nim.Load32.list[list].length > 0) {
					$nim.Load32.ArrayLoad(list, 0);
					return instID;
				} else { $nim.Load32.Load_Complete(list); }
				
				$k.instance.setbyelemid(widgTarget);
				return instID;
			}
		}
    },
	Activate: function() {
		var instID = $k.instance.save('loginassets');
		try {
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Activate', target: {id: 'loginassets'}});
			}
		}
		finally {
			$k.instance.setbyelemid(instID);
			$f.events('loginassets', 'Activate')(instID, instID.resolveName());
			App.Dialog['loginassets'].isActivated = 1;
			$k.instance.restore();
		}
	},
	BeforeUnload: function() {
		var blCancel = false;
		var instID = $k.instance.save('loginassets');
		try {
			if ($k.islastform('loginassets')) { $k.app.unloadwidget('loginassets'); }
			
			var itm, evtArr = [
					['login:login', 'onblur'],['login:login', 'onkeydown'],['login:password', 'onblur'],
				['login:password', 'onkeydown'],['login:lbreset', 'onclick'],['login:lbforgot', 'onclick'],['login:lbregister', 'onclick'],['login:btnlogin', 'onclick'],
				['login:btnsignup', 'onclick'],['register:login', 'onblur'],['register:login', 'onkeydown'],['register:email', 'onblur'],['register:email', 'onkeydown'],
				['register:password', 'onblur'],['register:password', 'onkeydown'],['register:confirm', 'onblur'],['register:confirm', 'onkeydown'],['register:btnclose', 'onclick'],
				['register:btnregister', 'onclick'],['reset:email', 'onblur'],['reset:email', 'onkeydown'],['reset:newpw', 'onblur'],['reset:newpw', 'onkeydown'],
				['reset:confirm', 'onblur'],['reset:confirm', 'onkeydown'],['reset:token', 'onblur'],['reset:token', 'onkeydown'],['reset:btnclose', 'onclick'],
				['reset:btnupdate', 'onclick'],['forgot:login', 'onblur'],['forgot:login', 'onkeydown'],['forgot:email', 'onblur'],['forgot:email', 'onkeydown'],
				['forgot:btnclose', 'onclick'],['forgot:btnreset', 'onclick']
			];
			for (var i = 0; i < evtArr.length; i++) {
				itm = evtArr[i]; $f.setevent('loginassets', itm[0], itm[1], null);
			}
			
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'BeforeUnload', target: {id: 'loginassets'}});
			}
		}
		finally {
			$k.instance.setbyelemid(instID);
			blCancel = $f.events('loginassets', 'QueryUnload')(instID, instID.resolveName());
			$k.instance.restore();
		}
		return blCancel;
	},
	UnloadAll: function() {
		try {
			$k.instance.save('loginassets');
			if (App) {
				var dlgItem = App.Dialog['loginassets'], 
					dlgCount = App.Dialog['loginassets'].count; 
					
				for (var x = dlgCount; x >= 0; x--) {
					KERNEL.formInst = x;
					dlgItem.Unload();
				}
			}
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'UnloadAll', target: {id: 'loginassets'}});
			}
		}
		finally {
			App.Dialog['loginassets'].count = 0;
			$k.instance.restore();
			KERNEL.formInst = 0;
		}
	},
	Unload: function() {
		var blCancel = false;
		try {
			var instID = $k.instance.save('loginassets');
			blCancel = $f.events('loginassets', 'QueryUnload')();
			if (blCancel) {
				return blCancel;
			}
			
			$k.instance.save('loginassets');
			$k.instance.restore();
			$f.events('loginassets', 'Unload')(instID, instID.resolveName());
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Unload', target: {id: 'loginassets'}});
			}
		}
		finally {
			$k.instance.restore();
			if (!blCancel) {
				FORMS.sysUnload("loginassets");
				App.Dialog['loginassets'].isLoaded = 0;
				App.Dialog['loginassets'].isActivated = 0;
				
				if (App) {
					$k.instance.setbyelemid(KERNEL.curId);
					var elem, dlgName = "";
					
					if (!$k.isanyformloaded()) {
						if (!App.App.exiting) { App.End(); }
					}
				}
			}
		}
	},
    Show: function(pos) {
		var retval = "";
		try {
			if (!KERNEL.enabled) return;
			var instID = $k.instance.save('loginassets');
			if ($k.isformloaded('loginassets') == false) {
				retval = $f.events('loginassets', 'Load')(pos);
			}
			
			$k.instance.restore();
			$f.show("loginassets");
			
			// Pull DataModel. 
			$k.instance.save('loginassets');
			if ($f.model('loginassets').enabled) { $f.model('loginassets').pull(); }
		}
		catch(err) { 
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Show', target: {id: 'loginassets'}});
			}
		}
		finally {
			$k.instance.restore();
			if (!App.Dialog['loginassets'].isActivated) {
				$f.events('loginassets', 'Activate')();
			}
			return retval;
		}
	},
	Code: { 
	},
	Widgets: { },
	Views: { }, 
	Events: {
		form_Load: function(e, itm) { 
			
		}//-FORM_LOAD
    }
};
$k.wrapallfunctions($heap.mobile['loginassets'].Code, 'loginassets');
 
// Create New App Instance -----------------------------
var _config = {
	namespace: 'mobile',
	login: {id: 'ZMZA2AZ3qvqZZMZM', email: 'guest@guest.com'},
	
	multiple: false,
	postbox: false,
	mvc: true,
	
	theme: 'v4.0',
	size: 438787,
	canvas: {width: 2048, height: 1101},
	productname: 'nimble App',
	copyright: '(c) 2024',
	compiledon: '06/16/2025 01:14 pm',
	version: '1.0',
	description: 'Created with nimble-ide v5 for Javascript.',
	author: '(Your Name Here)',
	email: 'nimblejs@nimble-ide.com',
	homepage: 'https://www.nimble-ide.com',
	startform: 'frmtitle',
	palette: '"color50":"#e1f5fe","color100":"#b3e5fc","color200":"#81d4fa","color300":"#4fc3f7","color400":"#29b6f6","color500":"#03a9f4","color600":"#039be5","color700":"#0288d1","color800":"#0277bd","color900":"#01579b","colora100":"#80d8ff","colora200":"#40c4ff","colora400":"#00b0ff","colora700":"#0091ea","b50":"#fafafa","b100":"#f5f5f5","b200":"#eeeeee","b300":"#e0e0e0","b400":"#bdbdbd","b500":"#9e9e9e","b600":"#757575","b700":"#616161","b800":"#424242","b900":"#212121","br50":"#efebe9","br100":"#d7ccc8","br200":"#bcaaa4","br300":"#a1887f","br400":"#8d6e63","br500":"#795548","br600":"#6d4c41","br700":"#5d4037","br800":"#4e342e","br900":"#3e2723","bg50":"#eceff1","bg100":"#cfd8dc","bg200":"#b0bec5","bg300":"#90a4ae","bg400":"#78909c","bg500":"#607d8b","bg600":"#546e7a","bg700":"#455a64","bg800":"#37474f","bg900":"#263238"',
	
	// METHODS
	dialog: {
		'appassets': $k.instance.newobject($heap.mobile['appassets']),
		'frmmain': $k.instance.newobject($heap.mobile['frmmain']),
		'frmtitle': $k.instance.newobject($heap.mobile['frmtitle']),
		'loginassets': $k.instance.newobject($heap.mobile['loginassets']),
	},
	onStartup: function(pos) {
		$heap.mobile[pos.form].Load(pos);
	},
	onLoadLibs: function() {
// --------------------------------------
// Include Custom Javascript Libraries //
// --------------------------------------

    /*ICON*/
$nim.Load32.Add('fa4_css', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css', 'css');
    /*~ICON*/
    /*GOOGLE-FONT-ROBOTO*/
$nim.Load32.Add ('google-font_Roboto', 'https://fonts.googleapis.com/css?family=Roboto:200,400,500,700', 'css');
    /*~GOOGLE-FONT-ROBOTO*/
    /*VALIDATE*/
$nim.Load32.Add ('validate', $nim.home_server + 'js/_libs/validate/validate.min.js', 'js');
    /*~VALIDATE*/
    // --------------------------------------
	},
	onClose: function(dlgname) {
	},
	onListeners: function(self) {
		self = self || {};
		/**
		* App Listeners
		* version: 5.0
		**/
		self.KeyPress = function(dlg_name) {
		};
		self.KeyUp = function(dlgname) {
			if (DESKTOP.switching) { return; }
			if (KEYBOARD.isAlt && DESKTOP.currentDesktop != KEYBOARD.Char) {
				if (KEYBOARD.Char >= '0' && KEYBOARD.Char <= defaults.preload.workspaces) {
					DESKTOP.Code.SlideDesktop(DESKTOP.currentDesktop, Number(KEYBOARD.Char));
				}
			}
		};
		self.DragStart = function(dlg_name) {
		};
		self.Drag = function(dlg_name) {
		};
		self.Move = function(dlg_name) {
		};
		self.Minimize = function(dlg_name) {
		};
		self.Maximize = function(dlg_name) {
		};
		self.Restore = function(dlg_name) {
		};
		self.Resize = function(dlg_name) {
			try {
			
			} catch(e) {
			
			} finally {
				$k.app.resizewidgets(dlg_name);
			}
		};
		self.OrientationChange = function() {
			
		};
		self.Orientation = function(event) {
			
		};
		return self;
	},
	onDataModel: function() {
		return [{"form":"loginassets","ctrl":"login:login","bind":"login:login"},{"form":"loginassets","ctrl":"login:password","bind":"login:password"},{"form":"loginassets","ctrl":"register:login","bind":"register:login"},{"form":"loginassets","ctrl":"register:email","bind":"register:email"},{"form":"loginassets","ctrl":"register:password","bind":"register:password"},{"form":"loginassets","ctrl":"register:confirm","bind":"register:confirm"},{"form":"loginassets","ctrl":"reset:email","bind":"reset:email"},{"form":"loginassets","ctrl":"reset:newpw","bind":"reset:newpw"},{"form":"loginassets","ctrl":"reset:confirm","bind":"reset:confirm"},{"form":"loginassets","ctrl":"reset:token","bind":"reset:token"},{"form":"loginassets","ctrl":"forgot:login","bind":"forgot:login"},{"form":"loginassets","ctrl":"forgot:email","bind":"forgot:email"}];
	},
	onBindLists: function() {
		return [{"form":"frmmain","ctrl":"route","list":"nav.lst"}];
	}
};
AppInst = $k.app.createapp(_config, _config.onListeners);
if (AppInst && AppInst.App.id == -1) {
	AppInst.App.isLoaded = true;
	AppInst.App.isWidget = false;
	AppInst.App.id = $k.instance.getappid();
	AppInst.App.guid = '7b0589ac-e743';
	AppInst.App.name = 'mobile';
	AppInst.App.startfrm = _config.startform;
	AppInst.App.query = _config.query || {};
	AppInst.App.icon = 'media/icons/app.gif';
	AppInst.New();
	if (!DESKTOP.Code) { DESKTOP.Code = $heap.mobile.Code; }
}
