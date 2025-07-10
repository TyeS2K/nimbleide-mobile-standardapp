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
