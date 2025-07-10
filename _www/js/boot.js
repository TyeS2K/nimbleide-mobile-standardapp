/** Boot Loader for the nimbleJS runtime.
 *  (c)2025 by Nimble Solutions, All rights reserved.
 *
 * version: 5.0
 **/

var _protect = function(obj) {
    Object.freeze(obj);
    Object.seal(obj);
    return obj;
};

if (typeof($nim) == 'undefined') { var $nim = {}; }
if (typeof(USER) == 'undefined') { USER = {}; }
if (!$nim.Agent) { $nim.Agent = { }; }
var loc = window.location.href;
$nim.home_server = (loc.indexOf("local=true") > -1 || loc.indexOf("127.0.0.1") > -1) ? "http://127.0.0.1:3031/" : "https://www.nimble-ide.com/";
$nim.core_server = (loc.indexOf("local=true") > -1 || loc.indexOf("127.0.0.1") > -1) ? "http://127.0.0.1:3031/" : "https://www.nimble-ide.com/";

$nim._u = "undefined";
$nim._o = "object";
$nim._f = "function";

var globals = {
	j32Ver: "v4.2",
	cgiVer: "v4.2"
};

function boot() {
	$nim.Version32 = {
		docDimensions : null,
		winDimensions : null,
		
		ieVersion: function() {
		},
		mobileVersion: function() {
			var ua, uv;
			var re, rv = -1;
			
			if (typeof($nim.Agent.usingIE) == $nim._u) { $nim.Agent.usingIE = false; }
			if (typeof($nim.Agent.usingFF) == $nim._u) { $nim.Agent.usingFF = false; }
			if (typeof($nim.Agent.usingO) == $nim._u) { $nim.Agent.usingO = false; }
			if (typeof($nim.Agent.usingS) == $nim._u) { $nim.Agent.usingS = false; }
			if (typeof($nim.Agent.isMobile) == $nim._u) { $nim.Agent.isMobile = false; }
			
			ua = navigator.userAgent;
			uv = navigator.vendor;
			$nim.Agent.usingFF = (ua.indexOf('Firefox') > -1);
			$nim.Agent.usingO = (ua.indexOf('Opera') > -1);
			$nim.Agent.usingS = (uv.indexOf('Apple') > -1 && ua.indexOf('Safari') > -1);
			$nim.Agent.usingIPad = (ua.indexOf('iPad') > -1) || (ua.indexOf('iPhone') > -1);
			$nim.Agent.usingAndroid = (ua.indexOf("Android") > -1);
			$nim.Agent.isMobile = (ua.indexOf('Nimble') > -1) || (ua.indexOf('Mobile') > -1) || $nim.Agent.usingIPad;
			$nim.Agent.isCordova = !!(document.getElementById('cordova'));
			
			// IE Check & Define CSS Prefix
			$nim.Agent.cssPrefix = '-webkit-';
			if ($nim.Agent.usingFF) { $nim.Agent.cssPrefix = '-moz-'; }
			if (navigator.appName == 'Microsoft Internet Explorer') {
				re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
				if (re.exec(ua) != null) rv = parseFloat( RegExp.$1 );
			} else if (navigator.appName == 'Netscape') {
				re	= new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
				if (re.exec(ua) != null) rv = parseFloat( RegExp.$1 );
			}
			if (rv > -1) {
				$nim.Agent.usingIE = true; $nim.Agent.cssPrefix = '-ms-';
				$nim.Agent.version = rv;
			}
		}
	};
	$nim.Version32.mobileVersion();

	$nim.Load32 = {
		async: false,
		reTry: 0,
		listIndex: 0,
		list: { '0': [ ] },
		events: { '0': [ ] },
		_route: function(obj, arr, delm) {
			var retval = true;
			var chk = obj;
			if (typeof(arr) == 'string') arr = arr.split(delm || ',');
			arr.forEach(function(itm) {
				if (chk[itm]) {
					chk = chk[itm];
				} else {
					retval = false;
				}
			});
			return retval;
		},
		onComplete: function(list, fn) {
			if (typeof(list) == 'function') {
				fn = list; list = $nim.Load32.listIndex;
			}
			if (typeof(fn) == 'function') $nim.Load32.events[list].push(fn);
		},
		Random: function() {
			var d = new Date();
			return Math.floor(d.getTime() * Math.random());
		},
		isListComplete: function(list) {
			for (var x = 0; x < $nim.Load32.list[list].length; x++) {
				if (!$nim.Load32.list[list][x].done) {
					return false;
				}
			}
			return true;
		},
		Clear: function(init) {
			var found = false;
			var list = 0;
			
			while (!found) {
				if (!$nim.Load32.list[list]) {
					found = true;
				} else {
					if ($nim.Load32.isListComplete(list) == false) {
						list++;
					} else { found = true; }
				}
			}
			$nim.Load32.reTry = 0;
			$nim.Load32.listIndex = list;
			$nim.Load32.list[list] = [ ];
			$nim.Load32.events[list] = [ ];
			
			if (!init) {
				$nim.Load32.Boot_Complete = null;
			}
			return list;
		},
		Boot_Complete: function() {
			$nim.Load32.Add = function(id, filename, filetype) {
				var doc = document;
				var list = $nim.Load32.listIndex;
				var idx = $nim.Load32.list[list].length;
				
				if ((doc.URL.indexOf('file:///') > -1) || ($nim.Agent.usingIE)) {
					filename = filename.replace(new RegExp('.gz.js', 'g'), '.js');
				}
				var obj = {
					list: list,
					index: idx,
					id: id,
					filename: filename,
					filetype: filetype,
					call: $nim.Load32.Load_Complete
				};

				if (idx > 0) {
					$nim.Load32.list[list][idx-1].call = function() {
						$nim.Load32.ArrayLoad(list, idx);
					};
				}
				$nim.Load32.list[list].push(obj);
			};
		},
		Load_Complete: function(list) {
			if (typeof(list) == 'undefined') list = $nim.Load32.listIndex;
			$nim.Load32.events[list].forEach(function(fn) {
				if (typeof(fn) == 'function') fn();
			});
		},
		Add: function(id, filename, filetype) {
			var doc = document;
			var list = $nim.Load32.listIndex;
			var idx = $nim.Load32.list[list].length;
			
			if ((doc.URL.indexOf('file:///') > -1) || ($nim.Agent.usingIE)) {
				filename = filename.replace(new RegExp('.gz.js', 'g'), '.js');
			}
			var obj = {
				list: list,
				index: idx,
				id: id,
				filename: filename,
				filetype: filetype,
				call: $nim.Load32.Boot_Complete
			};

			if (idx > 0) {
				$nim.Load32.list[list][idx-1].call = function() {
					$nim.Load32.ArrayLoad(list, idx);
				};
			}
			$nim.Load32.list[list].push(obj);
		},
		ArrayLoad: function(list, index) {
			var self = this, doc = document;
			var head = doc.getElementsByTagName("head")[0];
			var fileref;
			var item = $nim.Load32.list;
			
			if (!item || !item[list] || !item[list][index]) return;
			if (doc.getElementById(item[list][index].id) == null) {
				if (item[list][index].filetype == "js") {
					if (typeof module == 'object') { window.module = module; module = undefined; }
					fileref=doc.createElement("script");
					fileref.setAttribute("id", item[list][index].id);
					fileref.setAttribute("list", list);
					fileref.setAttribute("language","javascript");
					fileref.setAttribute("type","text/javascript");
					fileref.async = self.async;
					if (typeof(KERNEL) != $nim._u) { KERNEL.curName = item[list][index].id; }
					
					fileref.onerror = function(e) {
						if (window.module) { module = window.module; }
						var list = e.target.getAttribute("list");
						if (self._route(item,[list,index])) {
							item[list][index].done = true;
							if (self._route(item,[list,index,'call'])) { item[list][index].call(list); }
						}
					};
					fileref.onload = function(e) {
						if (window.module) { module = window.module; }
						var list = e.target.getAttribute("list");
						if (self._route(item,[list,index])) {
							item[list][index].done = true;
							if (self._route(item,[list,index,'call'])) { item[list][index].call(list); }
						}
					};
					fileref.setAttribute("src", item[list][index].filename);
					item[list][index].done = false;
				}
				else if (item[list][index].filetype == "css") {
					fileref=doc.createElement("link");
					fileref.setAttribute("id", item[list][index].id);
					fileref.setAttribute("list", list);
					fileref.setAttribute("rel", "stylesheet");
					fileref.setAttribute("type", "text/css");
					fileref.async = self.async;
					
					fileref.onerror = function(e) {
						var list = e.target.getAttribute("list");
						if (self._route(item,[list,index])) {
							item[list][index].done = true;
							if (self._route(item,[list,index,'call'])) { item[list][index].call(list); }
						}
					};
					fileref.onload = function(e) {
						var list = e.target.getAttribute("list");
						if (self._route(item,[list,index])) {
							item[list][index].done = true;
							if (self._route(item,[list,index,'call'])) { item[list][index].call(list); }
						}
					};
					fileref.setAttribute("href", item[list][index].filename);
					item[list][index].done = false;
				}
				if (typeof fileref != $nim._u) {
					head.appendChild(fileref);
				}
			} else { 
				if (typeof(KERNEL) != $nim._u) {
					if (typeof(KERNEL.curName) != $nim._u) { KERNEL.curName = item[list][index].id; }
				}
				
				item[list][index].done = true;
				if (self._route(item,[list,index,'call'])) item[list][index].call(list);
			}
			doc = null;
		},
		Load: function(id, filename, filetype, callbk) {
			var self = this, doc = document;
			var head = doc.getElementsByTagName("head")[0];
			var fileref;

			if ((doc.URL.indexOf('file:///') > -1) || ($nim.Agent.usingIE)) {
				filename = filename.replace(new RegExp('.gz.js', 'g'), '.js');
			}
			if (doc.getElementById(id) == null) {
				if (filetype=="js") {
					fileref=doc.createElement("script");
					fileref.setAttribute("id", id);
					fileref.setAttribute("language","JavaScript");
					fileref.setAttribute("type","text/javascript");
					fileref.async = false;
					KERNEL.curName = id;

					fileref.onerror = function() {
						if (typeof(callbk) == $nim._f) { callbk(); }
					};
					fileref.onload = function() {
						fileref.onload = null;
						if (typeof(callbk) == $nim._f) { callbk(); }
					};
					fileref.setAttribute("src", filename);
				}
				else if (filetype=="css") {
					fileref=doc.createElement("link");
					fileref.setAttribute("id", id);
					fileref.setAttribute("rel", "stylesheet");
					fileref.setAttribute("type", "text/css");
					fileref.async = false;
					
					fileref.onerror = function() {
						if (typeof(callbk) == $nim._f) { callbk(); }
					};
					fileref.onload = function() {
						fileref.onload = null;
						if (typeof(callbk) == $nim._f) { callbk(); }
					};
					fileref.setAttribute("href", filename);
				}

				if (typeof fileref!=$nim._u) {
					head.appendChild(fileref);
				}
			}

			doc = null;
		}
	};
	 
	/** Core Globals have loaded successfully.
	 *  Start Loading nimbleJS.
	 **/
	var nil, thread = $nim.Load32.Clear(true);
	$nim.Load32.onComplete(thread, function() {
		if (typeof(KERNEL) != $nim._u) {
			$k.login("ZMZA2AZ3qvqZZMZM","guest@guest.com");
		} else {
			alert('There was a critical error during initialization.');
		}
	});
	$nim.Load32.Add ('globals', 'js/globals.js', 'js');
	$nim.Load32.Add ('j32-load', ($nim.Agent.isCordova ? 'js/mobile.' : 'js/') + 'jsloader.js', 'js');
	nil = ($nim.Load32.list[thread].length > 0) ? $nim.Load32.ArrayLoad(thread, 0) : $nim.Load32.Boot_Complete();
}

function findServer() {
	window.j = null;
	function getCMD(url, callbk) {
		var xhr  = new XMLHttpRequest();
		
		xhr.open('GET', url, true);
		xhr.onerror = function() {
			if (callbk) { callbk ('error'); }
		};
		xhr.onreadystatechange = function () {
			var resp;
			
			if (xhr.readyState < 4) { return; }
			try {
				resp = JSON.parse(xhr.responseText);
			} catch (err) {
				resp = xhr.responseText || {};
			} finally {
				if (xhr.readyState == 4 && xhr.status == 200) {
					if (callbk) { callbk ('ok', resp); }
				} else {
					if (callbk) { callbk ('error', resp); }
				}
			}
		};
		try {
			xhr.send(null);
		} catch(err) { if (callbk) callbk ('error', ''); }
	}

	var defServer = $nim.home_server + 'as1/';
	getCMD($nim.home_server + 'app-servers', function(hStatus, resp) {
		var ary, err = 0;
		if (hStatus == 'ok') {
			ary = Array.isArray(resp) ? resp : [];
			ary.forEach(function(server) {
				getCMD(server + 'ping', function(sStatus, resp) {
					if (sStatus == 'ok' && defServer == server) {
						$nim.home_server = server;
						defServer = null; boot();
					} else {
						err++;
						if (err == ary.length && defServer) { defServer = null; boot(); }
					}
				});
			});
			if (ary.length == 0) boot();
		} else { defServer = null; boot(); }
	});
}

// jshint ignore:start
if (0 == 1) {
	var url = window.location.href;
	if (url.indexOf('id=') > -1) {
		USER.sessionId = url.split('id=')[1].split('&')[0];
		if (url.indexOf('img=') > -1) USER.sessionImg = url.split('img=')[1];
		findServer();
	} else {
		var rf = url.split('/'),
			dom = (rf.indexOf('file:') == -1) ? (rf[0] + '//' + rf[2]) : 'http://127.0.0.1:3031';
		
		dom = ('').replace('https://www.nimble-ide.com', dom);
		window.location.href = (dom || '') +
			'?p=&' +
			'v=&' +
			's=' + url.replace('http://127.0.0.1:3031/', './') + '&' +
			'f=&' +
			'c=0'; 
	}
} else { findServer(); }
// jshint ignore:end
