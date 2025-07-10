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

