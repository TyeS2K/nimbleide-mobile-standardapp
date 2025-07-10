Services: function(in_msg) {
//<<APP.POSTBOX>>
},
Components: {
//<[REG.COMPONENTS]>
},
RegisterFactories: function() {
//<<REG.FACTORIES>>
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
