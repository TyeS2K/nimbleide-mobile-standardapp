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

