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

