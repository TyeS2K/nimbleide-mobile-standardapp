/**
* JS Loader for Nimble
*
* version: 5.0
**/
if (!$nim.fn) { $nim.fn = { }; }
if (!$nim.HTML) { $nim.HTML = { }; }
$nim.Start_Desktop = function() {
    var app_server = globals.glb_server;
    if (globals.glb_server == "(local)") { app_server = ""; }
    if (defaults.preload.disabledesktop == 'false') {
        if (globals.j32Ver.indexOf('v') > -1) {
            $nim.JS.Start('desktop', app_server + 'js/app_desktop-' + globals.j32Ver + '.js','js');
        } else {
            $nim.JS.Start('desktop', app_server + 'js/app_desktop-v4.1.js','js');
        }
    }
    if (globals.glb_startjs != "") {
        $nim.JS.Start('startup', app_server + globals.glb_startjs,'js');
    } else { DESKTOP.Show('desktop' + DESKTOP.currentDesktop + '.label'); }
};
try {
    if ($nim.Agent.isCordova) {
        if (globals.lockOrientation && screen && typeof(cordova) != 'object') {
            var orient = 'default';
            if (screen.orientation && screen.orientation.lock) {
                orient = (orient == 'default') ? 'natural' : orient;
                screen.orientation.lock(orient);
            } 
        }
    }
} catch(err) { 
} finally {
    setTimeout(function() {
        $nim.Version32 = null;
        globals.bootlist = $nim.Load32.Clear(true);
        $nim.Load32.onComplete(globals.bootlist, function() {
            if (typeof(KERNEL) != $nim._u) {
                KERNEL.Login("ZMZA2AZ3qvqZZMZM","guest@guest.com");
            } else {
                alert('There was a critical error during initialization.');
            }
        });

        // ---------------------------------------
        // Include Standard nimbleJS Libraries  //
        // ---------------------------------------
        if (globals.jQuery) {
            $nim.Load32.Add ('jquery' + globals.jQuery, $nim.home_server + 'js/jquery-' + globals.jQuery + '.1.1.min.js', 'js');
        }
        if (globals.underScore) {
            if ($nim.Agent.isCordova) {
                $nim.Load32.Add ('uscore', 'js/underscore.min.js', 'js');
            } else {
                $nim.Load32.Add ('uscore', $nim.home_server + 'js/underscore.min.js', 'js');
            }
        }
        if ($nim.Agent.isCordova) {
            $nim.Load32.Add ('j41-full', 'js/' + globals.j32Ver + '/nimblejs.js', 'js');
            $nim.Load32.Add ('j41-elements', 'js/' + globals.j32Ver + '/nimblejs.elements.js', 'js');
        } else {
            $nim.Load32.Add ('j41-full', $nim.home_server + 'js/' + globals.j32Ver + '/nimblejs.js', 'js');
        }
        if ($nim.Load32.list[globals.bootlist].length > 0) { 
            $nim.Load32.ArrayLoad(globals.bootlist, 0); 
        } else { $nim.Load32.Load_Complete(globals.bootlist); }
    }, 100);
}
