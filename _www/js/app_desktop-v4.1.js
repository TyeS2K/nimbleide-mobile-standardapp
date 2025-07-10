/**
 * Generated with nimble-ide v4.0 on 7/15/2016.
 * Created for the nimbleJS runtime.
 * (c)2016 by Nimble Solutions, All rights reserved.
 **/

if (typeof($heap) == 'undefined') { var $heap = {}; }

$heap.desktop = { };
$heap.desktop.Code = {
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
	StartApp: function() {
		KERNEL.desktop = true;
		$k.setuplogo();
	}
};
$k.wrapallfunctions($heap.desktop.Code);

// Application Template -----------
$heap.desktop.Inst = function() {
	var self = this;
	var desktop_AppInfo = {
		isLoaded: false,
		multiple: false,
		id: -1,
		count: 0,
		name: ''
	};

	self.App = desktop_AppInfo;
	self.instId = 0;
	self.InstName = "desktop";
	self.Vars = {
		running: true,
		started: false,
		misc: 0
	};
	self.Load = function() {
		$k.login("ZMZA2AZ3qvqZZMZM","guest@guest.com");
		$k.element();

		if (!$nim.security.ip) {	
			$k.fetchip(function(ip) { 
				$nim.security.ip = ip;
				$d.inifields( 'Virtual Desktop', 'By : Nimble Solutions', 'Updated On : 2/24/2016', 'Logged on as : LEET' );
			});
		}
		DESKTOP.iconDB = 'icons';
		$d.initdesktop();
		$k.initlogo();
	};
	self.New = function() {
		if ($k.instance.isrunning(self.App.name) == false) {
			var AppInst = new $heap.desktop.Inst();
			$k.instance.new(self, AppInst);
		} else { App = null; }
	};
	self.NoStart = function() {

	};
	self.KeyPress = function(dlgname) {

	};
	self.KeyUp = function(dlgname) {
		if (DESKTOP.switching) { return; }
		if (KEYBOARD.isAlt && DESKTOP.currentDesktop != KEYBOARD.Char) {
			if (KEYBOARD.Char >= '0' && KEYBOARD.Char <= defaults.preload.workspaces) {
				$d.code.slidedesktop(DESKTOP.currentDesktop, Number(KEYBOARD.Char));
			}
		}
	};
	self.Drag = function(dlgname) {

	};
	self.Move = function(dlgname) {

	};
	self.Minimize = function(dlgname) {

	};
	self.Maximize = function(dlgname) {

	};
	self.Restore = function(dlgname) {

	};
	self.Resize = function() {
		$k.resizelogo();
		$d.reseticons(DESKTOP.icondata);
	};
	self.Start = function() {
		if (App.Vars.started == false) {
			App.Vars.started = true;
			$heap.desktop.Code.StartApp();
		}
	};
	self.Close = function() {

	};
	self.End = function() {

	};
};
// ---------------------------

var AppInst = new $heap.desktop.Inst();
if (AppInst.App.id == -1) {
	AppInst.App.isLoaded = true;
	AppInst.App.id = $k.instance.getappid();
	AppInst.App.name = KERNEL.curName;
	AppInst.App.startfrm = '';
	AppInst.App.type = 0;
	
	AppInst.New();
	AppInst.Load();
	AppInst.Start();
	DESKTOP.Code = $heap.desktop.Code;
}
