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