/* Reset Component Manager/Factory :
   A template factory example.
*/

FACTORY.Register("Reset", function ResetFactory() {
	var Reset = function (config) {
		var self = this;
		var _tmr;
      	var $api, $views, $strings, $login;
      
      	function initValidation() {
          var checks = { 
            email: {
              presence: { allowEmpty: false, message: "is required." },
              email: { message: "doesn't look like a valid email." }
            },
            newpw: {
              presence: { allowEmpty: false, message: "is required." },
              length: { minimum: 6, tooShort: "must be a minimum of 6 chars.", maximum: 28, tooLong: "can be a maximum of 28 chars." }
            },
            confirm: {
              equality: {
                attribute: "newpw",
                message: "password is not equal.",
                comparator: function(v1, v2) { return v1 == v2; }
              },
              presence: { allowEmpty: false, message: "is required." },
            },
            token: {
              presence: { allowEmpty: false, message: "is required." },
              length: 6
            },
          };

        return {
          rules: checks,
          validate: function() {
              var fld, obj = $f.pull('frmmain', true);

             // Clear state
             for (fld in obj) {
               $f.setprop('frmmain', 'reset:' + fld, 'title', '');
               $f.setstyle('frmmain', 'reset:' + fld, 'border-color', '#222'); 
             }

             // Validate & highlight.
             var result = validate(obj, this.rules);
             for (fld in result) {
               if ($views.curView() == "reset") {
                 AppEvents.err.post({
                   title: 'ERROR:',
                   msg: result[fld][0]
                 });
               }
               $f.setprop('frmmain', 'reset:' + fld, 'title', result[fld][0]);
               $f.setstyle('frmmain', 'reset:' + fld, 'border-color', 'red'); 
             }
             return result;
          }
        };
        }
      	function validateForm() {
            var hnd = initValidation();
          	var result = hnd.validate();
          	$f[result ? 'disable' : 'enable']("frmmain", "reset:btnupdate");
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
          $views.show('reset', null, null, function() {
            //center in frmmain,content
            $f.setstyle('frmmain', 'reset', {
              'margin-top': Math.floor((DESKTOP.height - 350) / 2) + 'px'
            });
            $f.fadein('frmmain', 'content', 50);
          });
        };
        self.hide = function() {
          $views.hide('reset');
        };
      	self.unload = function() {
          $views.unload('reset');
          $login.show();
        };
		self.events = {
			onload: function(e, itm) {
              if ($d.isenabled()) {
                  $f.setprop('frmmain', 'reset', 'tag', 'yes');
                  $d.disable();
              }
			},
			activate: function(e, itm) {
              $f.zindex('frmmain', 10);
              $f.setfocus('frmmain', 'reset:email');
              $f.disable("frmmain", "reset:btnupdate");
			},
			beforeunload: function(e, itm) {
              if ($f.getprop('frmmain', 'reset', 'tag')) { $d.enable(); }
              $f.setprop('frmmain', 'reset', 'tag', '');
              self.hide();
			},
			resetClick: function(e, itm) {
              var hnd = initValidation();
              var result = hnd.validate();

              if (!result) {
                  $api.resetPost('frmmain', function(resp, msgObj) {
                    AppEvents.msg.post(msgObj);
                  });
              } else {
                  $f[result ? 'disable' : 'enable']("frmmain", "reset:btnupdate");
              }
			},
			closeClick: function(e, itm) {
              if ($f.getprop('frmmain', 'reset', 'tag')) { $d.enable(); }
              $f.setprop('frmmain', 'reset', 'tag', '');
              self.unload();
			},
			validate: function(e, itm) {
              check();
			},
          	newPwKeyDown: function(e, itm) {
              if (e.which == 13) {
                  $f.setfocus('frmmain', 'reset:confirm');
              }
              check();
            },
          	confirmKeyDown: function(e, itm) {
              if (e.which == 13) {
                  $f.setfocus('frmmain', 'reset:token');
              }
              check();
            },
          	tokenKeyDown: function(e, itm) {
              if (e.which == 13) {
              	  $f.setfocus('frmmain', 'reset:newpw');
                  self.reset.resetClick(e, itm);
              } else {
               	  validateForm();
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

	Reset.prototype.type = function () {
		return "Reset";
	};
	Reset.prototype.toDto = function () {
		var self = this;
		return { };
	};
	return Reset;
});

