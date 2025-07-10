/**
 * nimbleJS GLOBALS Constants File
 * Created for the nimbleJS runtime.
 * (c)2016 by Nimble Solutions, All rights reserved.
 *
 * version: 5.0
 **/
 
var defaults = {};

defaults.preload = {
	disabledesktop: '<<DISABLED.DESKTOP>>',
	workspaces: '<<WORKSPACES>>',
	standardcontrols: '<<STANDARD.CONTROLS>>',
	extendedcontrols: '<<EXTENDED.CONTROLS>>'
};
defaults.sounds = {
	background: '',
	close_dialog: '',
	pickup_dialog: '',
	putdown_dialog: 'media/click.mp3',
	launch_app: '',
	typed_key: '',
	button_click: '',
	minimize: '',
	maximize: '',
	restore: ''
};
defaults.scaletype = {
	minWidth: 1,
	maxWidth: 99999,
	minFont: 1,
	maxFont: 40,
	chrPerLine: 50
};
defaults.dialog = {
	docking: false,
	hideChildrenWhenSliding: false,
	max_padleft: 5,
	max_padtop: 5,
	max_padright: 5,
	max_padbottom: 5,
	max_spacing: 5,

	min_padleft: 40,
	min_padtop: 0,
	min_padright: 0,
	min_padbottom: 60,

	min_spacing: 10,
	min_width: 140,
	min_height: 30,

	dlg_width: 400,
	dlg_height: 300,
	dlg_color: '#f0f0f0',
	dlg_border: 2,
	dlg_bdrradius: 3,
	
	bdr_color: 'rgba(128,128,128, .35)',
	back_color: 'rgba(180,180,180, 1)',
	doc_color: '#f0f0f0',
	bdr_text: '#ffffff',

	title_height: 35,
	title_font: 'Tahoma',
	title_fontsize: 15,

	tab_height: 28,
	resize_width: 26,
	resize_height: 28,

	btn_color: '#202020'
};

defaults.menus = {
	menu_height: 26,  			// This value and menu_fontsize are related.
	menu_bordercolor: '#FFF',
	menu_backcolor: '#FFF',
	menu_forecolor: '#222',
	menu_fontfamily: 'Arial',
	menu_fontsize: '16px',			// This value and menu_height are related.
	submenu_bordercolor: '#FFF',
	submenu_backcolor: '#FFF',
	subitem_backcolor: '#FFF',
	subitem_highlight2: 'rgba(0,0,128,.3)',
	subitem_highlight1: 'rgba(250,250,250,.45)',
	subitem_forecolor: '#222',
	subitem_fontfamily: 'Arial',
	subitem_fontsize: '12px'
};
 
var globals = {
	id: '<<APP.GUID>>',
	build: 'free',
	j32Ver: 'v4.2',
	cgiVer: 'v4.2',
	ideVer: 'v5.0',
	mockID: 'mock-sessionId',
	mockFS: '<<FS.MOCK>>',
	remote: '<<FS.REMOTE>>',
	revision: '1',
	appVersion: '<<MAJOR>>.<<MINOR>>.<<REV>>.<<BUILD>>',
	silentErrors: true,
	lockOrientation: '<<LOCK.ORIENTATION>>',
	jQuery: '<<USE.JQUERY>>',
	underScore: '<<USE.USCORE>>',
	defaultApp: '<<DEFAULT.APP>>',
	glb_startjs: '<<STARTUP.APP>>',
	glb_server: '(local)',		// <<SERVER.DOMAIN>>
	livebackground: '<<LIVE.BACKGROUND>>',
	fluidDesktop: '<<FLUID.DESKTOP>>',
	videoDesktop: {file: '<<DESKTOP.VIDEO>>', type: '<<DESKTOP.VIDEOTYPE>>'},
	icon_size: 45
};

console.log('globals.js loaded');

/*JS.GLOBALS*/
