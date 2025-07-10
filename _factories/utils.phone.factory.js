/* Phone Cordova Manager/Factory :
   
*/

FACTORY.Register("Phone", function PhoneFactory() {
	var Phone = function () {
		var self = this;
      	var _cfg = {};
      	var smsList = [];
      
      	var _fsType = '';
      	if (typeof(LocalFileSystem) != 'undefined') {
      		_fsType = LocalFileSystem.PERSISTENT;
        }
      	var permissions = {}, enable = {};
		var NOTIFY = {
          DEFAULT_SUCCESS: 'SUCCESS',
          DEFAULT_ERROR: 'ERROR',
          
          MEDIA_SUCCESS: 'MEDIA_SUCCESS',
          MEDIA_ERROR: 'MEDIA_ERROR',
          MEDIA_POS_SUCCESS: 'MEDIA_POS_SUCCESS',
          MEDIA_POS_ERROR: 'MEDIA_POS_ERROR',
          MEDIA_AMP_SUCCESS: 'MEDIA_AMP_SUCCESS',
          MEDIA_AMP_ERROR: 'MEDIA_AMP_ERROR',
          MEDIA_DUR_SUCCESS: 'MEDIA_DUR_SUCCESS',
          MEDIA_DUR_ERROR: 'MEDIA_DUR_ERROR',
          MEDIA_INTERVAL: 'MEDIA_INTERVAL',
          
          
          FS_SUCCESS: 'FS_SUCCESS',
          FS_ERROR: 'FS_ERROR',
          FS_GETFILE_SUCCESS: 'FS_GETFILE_SUCCESS',
          FS_GETFILE_ERROR: 'FS_GETFILE_ERROR',
          FS_STREAM_SUCCESS: 'FS_STREAM_SUCCESS',
          FS_STREAM_ERROR: 'FS_STREAM_ERROR',
          FS_EXISTS_SUCCESS: 'FS_EXISTS_SUCCESS',
          FS_EXISTS_ERROR: 'FS_EXISTS_ERROR',
          FS_READ_SUCCESS: 'FS_READ_SUCCESS',
          FS_READ_ERROR: 'FS_READ_ERROR',
          FS_WRITE_SUCCESS: 'FS_WRITE_SUCCESS',
          FS_WRITE_ERROR: 'FS_WRITE_ERROR',
          FS_DELETE_SUCCESS: 'FS_DELETE_SUCCESS',
          FS_DELETE_ERROR: 'FS_DELETE_ERROR',
          FS_LIST_SUCCESS: 'FS_LIST_SUCCESS',
          FS_LIST_ERROR: 'FS_LIST_ERROR',
          FS_MKDIR_SUCCESS: 'FS_MKDIR_SUCCESS',
          FS_MKDIR_ERROR: 'FS_MKDIR_ERROR',
          FS_DELDIR_SUCCESS: 'FS_DELDIR_SUCCESS',
          FS_DELDIR_ERROR: 'FS_DELDIR_ERROR',
          FS_DELALL_SUCCESS: 'FS_DELALL_SUCCESS',
          FS_DELALL_ERROR: 'FS_DELALL_ERROR',
          
          GEOLOC_SUCCESS: 'GEOLOC_SUCCESS',
          GEOLOC_ERROR: 'GEOLOC_ERROR',
          
          COMPASS_SUCCESS: 'COMPASS_SUCCESS',
          COMPASS_ERROR: 'COMPASS_ERROR',
          
          MOTION_SUCCESS: 'MOTION_SUCCESS',
          MOTION_ERROR: 'MOTION_ERROR',
          
          GETLIBRARY_SUCCESS: 'GETLIBRARY_SUCCESS',
          GETLIBRARY_ERROR: 'GETLIBRARY_ERROR',
          GETALBUM_SUCCESS: 'GETALBUMN_SUCCESS',
          GETALBUM_ERROR: 'GETALBUMN_ERROR',
          SAVEIMAGE_SUCCESS: 'SAVEIMAGE_SUCCESS',
          SAVEIMAGE_ERROR: 'SAVEIMAGE_ERROR',
          SAVEVIDEO_SUCCESS: 'SAVEVIDEO_SUCCESS',
          SAVEVIDEO_ERROR: 'SAVEVIDEO_ERROR',
          
          CAMERA_SUCCESS: 'CAMERA_SUCCESS',
          CAMERA_ERROR: 'CAMERA_ERROR',
          CAMCLENUP_SUCCESS: 'CAMCLEANUP_SUCCESS',
          CAMCLENUP_ERROR: 'CAMCLEANUP_ERROR',
          
          FINDCONTACT_SUCCESS: 'FINDCONTACT_SUCCESS',
          FINDCONTACT_ERROR: 'FINDCONTACT_ERROR',
          CREATECONTACT_SUCCESS: 'CREATECONTACT_SUCCESS',
          CREATECONTACT_ERROR: 'CREATECONTACT_ERROR',
          PICKCONTACT_SUCCESS: 'PICKCONTACT_SUCCESS',
          PICKCONTACT_ERROR: 'PICKCONTACT_ERROR',
          
          SENDMSGS_SUCCESS: 'SENDMSGS_SUCCESS',
          SENDMSGS_ERROR: 'SENDMSGS_ERROR',
          LISTMSGS_SUCCESS: 'LISTMSGS_SUCCESS',
          LISTMSGS_ERROR: 'LISTMSGS_ERROR',
          DELETEMSGS_SUCCESS: 'DELETEMSGS_SUCCESS',
          DELETEMSGS_ERROR: 'DELETEMSGS_ERROR',
          
          RESTOREMSGS_SUCCESS: 'RESTOREMSGS_SUCCESS',
          RESTOREMSGS_ERROR: 'RESTOREMSGS_ERROR',
          DISABLE_INTERCEPT_SUCCESS: 'DISABLE_INTERCEPT_SUCCESS',
          DISABLE_INTERCEPT_ERROR: 'DISABLE_INTERCEPT_ERROR',
          ENABLE_INTERCEPT_SUCCESS: 'ENABLE_INTERCEPT_SUCCESS',
          ENABLE_INTERCEPT_ERROR: 'ENABLE_INTERCEPT_ERROR',
          DISABLE_WATCH_SUCCESS: 'DISABLE_WATCH_SUCCESS',
          DISABLE_WATCH_ERROR: 'DISABLE_WATCH_ERROR',
          ENABLE_WATCH_SUCCESS: 'ENABLE_WATCH_SUCCESS',
          ENABLE_WATCH_ERROR: 'ENABLE_WATCH_ERROR'
        };
      
      	if (window.cordova) {
      	  permissions = cordova.plugins.permissions;
        }
        function checkPermission(perm, onSuccess, stub) {
          self[stub.type] = self[stub.type] || {};
          
          function onFailed(type, methods) {
            if (methods.length > 0) {
              methods.forEach(function(itm) {
                self[type][itm] = function() { };
              });
            } else {
              self[type] = function() { };
            }
            self[type]._enabled = false;
            self[type]._status = 'failed';
          }
          function error() {
            if (!self[stub.type]._enabled) { onFailed(stub.type, stub.methods); }
          }
          
          permissions.checkPermission(perm, function(status) {
            if (status.hasPermission) {
              if (!self[stub.type]._enabled) {
                self[stub.type]._enabled = true;
                self[stub.type]._status = 'success';
                onSuccess();
              }
            } else { permissions.requestPermission(perm, function() {
				if (!self[stub.type]._enabled) {
					self[stub.type]._enabled = true;
					self[stub.type]._status = 'success';
					onSuccess();
				  }
				}, error);
			}
          }, error);
        }
      	
      	self.info = function() {
          return (window.device && device.cordova) ? {
            cordova: device.cordova,
            model: device.model,
            platform: device.platform,
            uuid: device.uuid,
            version: device.version,
            sernum: device.serial
          } : null;
        };
      	self.isMobile = function() {
          return $nim.Agent.isMobile && ($nim.Agent.usingAndroid || $nim.Agent.usingIPad);
        };
      	self.Agent = function() {
          return navigator.userAgent;
        };
      	self.Vendor = function() {
          return navigator.vendor;
        };
		self.PluginList = function() {
            if (typeof(cordova) != 'undefined') {
              var itms = cordova.plugins ? Object.keys(cordova.plugins) : [];
              itms.forEach(function(itm) {
                console.log('  - ' + itm);
              });
            }
		};
		
		enable.orientation = function() {
			self.orientation = {
              get: function() {
                return screen.orientation.type;
              },
              notify: function() {
                console.log(screen.orientation.type); // e.g. portrait
              }
			};
			window.addEventListener("orientationchange", self.orientation.notfy);
		};
		enable.battery = function() {
          if (!self.battery) {
			self.battery = {
              	_status: '',
              	get: function() {
                  return self.battery._status;
                },
				notify: function(msg, status) {
                  	self.battery._status = {msg: msg, status: status};
					console.log(msg);
					console.log(JSON.stringify(status));
				}
			};
			window.addEventListener("batterystatus", function(status) {
				self.battery.notify('battery status', status);
			}, false);
			window.addEventListener("batterylow", function(status) {
				self.battery.notify('battery low', status);
			}, false);
			window.addEventListener("batterycritical", function(status) {
				self.battery.notify('battery critical', status);
			}, false);
          }
		};
		enable.device = function() {
			self.device = {
				// key: model | platform | uuid | version | manufacturer |
				//      isVirtual | isiOSAppOnMac | serial
				get: function(key) {
					return (device && device[key]) ? device[key] : '';
				}
			};
		};
		enable.compass = function() {
			var compID;
          
          	if (navigator.compass) {
              self.compass = {
                  _status: '',
                  get: function() {
                    return self.compass._status;
                  },
                  notify: function(heading) {
                    self.compass._status = heading;
                    console.log('Heading: ' + heading.magneticHeading);
                  },
                  getHeading: function(fn) {
                    navigator.compass.getCurrentHeading(function(heading) {
                      self.compass.notify(heading);
                      if (fn) { fn(NOTIFY.COMPASS_SUCCESS, heading); }
                    }, self.compass.error);
                  },
                  error: function(errMsg) {
                    console.log(NOTIFY.COMPASS_ERROR);
                    console.log(errMsg);
                  },
                  start: function() {
                      compID = navigator.compass.watchHeading(
                          self.compass.notify, 
                          self.compass.error,
                          {frequency: 3000});
                  },
                  stop: function() {
                      navigator.compass.clearWatch(compID);
                  }
              };
            }
		};
		enable.motion = function() {
		  var watchID;
			
          if (navigator.accelerometer) {
			self.motion = {
                _status: '',
              	get: function() {
                    return self.motion._status;
                },
				notify: function(acceleration) {
                  self.motion._status = acceleration;
                  console.log('Acceleration X: ' + acceleration.x + '\n' +
                              'Acceleration Y: ' + acceleration.y + '\n' +
                              'Acceleration Z: ' + acceleration.z + '\n' +
                              'Timestamp: '      + acceleration.timestamp + '\n');
				},
				getMotion: function(fn) {
					navigator.accelerometer.getCurrentAcceleration(function(acceleration) {
                      self.motion.notify(acceleration);
                      if (fn) { fn(NOTIFY.MOTION_SUCCESS, acceleration); }
                    }, self.motion.error);
				},
				error: function() {
					console.log(NOTIFY.MOTION_ERROR);
				},
				start: function() {
					watchID = navigator.accelerometer.watchAcceleration(
						self.motion.notify, 
						self.motion.error,
						{frequency: 3000});
				},
				stop: function() {
					navigator.accelerometer.clearWatch(watchID);
				}
			};
          }
		};
		
		enable.globalize = function() {
          if (navigator.globalization) {
			self.globalize = {
				notify: function(success, res) {
					console.log('response:' + success);
					console.log('  result:' + res);
				},
				getLanguage: function() {
					navigator.globalization.getPreferredLanguage(function(lang) {
						self.globalize.notify(true, lang);
					}, function() {
						self.globalize.notify(false, null);
					});
				},
				getCurrency: function(curCode) {
					navigator.globalization.getCurrencyPattern(curCode, function(pattern) {
						self.globalize.notify(true, pattern);
					}, function() {
						self.globalize.notify(false, null);
					});
				},
				getLocaleName: function() {
					navigator.globalization.getLocaleName(function(locale) {
						self.globalize.notify(true, locale);
					}, function() {
						self.globalize.notify(false, null);
					});
				},
				stringToDate: function(str, options) { // {formatLength:'short', selector:'date and time'}
					navigator.globalization.stringToDate(str, function(date) {
						self.globalize.notify(true, date);
					}, function() {
						self.globalize.notify(false, null);
					}, options);
				},
				stringToNumber: function(str, options) { // { type: 'decimal' }
					navigator.globalization.stringToDate(str, function(num) {
						self.globalize.notify(true, num);
					}, function() {
						self.globalize.notify(false, null);
					}, options);
				},
				dateToString: function(date, options) {  // { formatLength: 'short', selector: 'date and time' }
					navigator.globalization.dateToString(date, function(lDate) {
						self.globalize.notify(true, lDate);
					}, function() {
						self.globalize.notify(false, null);
					}, options);
				},
				numberToString: function(num, options) { // { type: 'decimal' }
					navigator.globalization.numberToString(num, function(number) {
						self.globalize.notify(true, number);
					}, function() {
						self.globalize.notify(false, null);
					}, options);
				},
				getDateNames: function(options) { // { type: 'wide', item: 'months' }
					navigator.globalization.getDateNames(function(names) {
						self.globalize.notify(true, names);
					}, function() {
						self.globalize.notify(false, null);
					}, options);
				},
				getDatePattern: function(options) { // { formatLength: 'short', selector: 'date and time' }
					navigator.globalization.getDatePattern(function(date) {
						self.globalize.notify(true, date);
					}, function() {
						self.globalize.notify(false, null);
					}, options);
				},
				getFirstDayOfWeek: function() {
					navigator.globalization.getFirstDayOfWeek(function(day) {
						self.globalize.notify(true, day);
					}, function() {
						self.globalize.notify(false, null);
					});
				},
				getNumberPattern: function(options) { // {type: 'decimal'}
					navigator.globalization.getNumberPattern(function(pattern) {
						self.globalize.notify(true, pattern);
					}, function() {
						self.globalize.notify(false, null);
					}, options);
				},
				isDayLightSavingsTime: function(date) {
					navigator.globalization.isDayLightSavingsTime(date, function(date) {
						self.globalize.notify(true, date);
					}, function() {
						self.globalize.notify(false, null);
					});
				}
			};
          }
		};
		enable.network = function() {
          if (!self.network) {
			self.network = {
				state: '',
                get: function() {
                  return self.network.state;
                },
				notify: function(msg) {
					console.log('Network Type  :' + self.network.state);
					console.log('Network Status:' + msg);
				},
				update: function() {
					var networkState = navigator.connection.type;
					var states = {};
					
					if (typeof(Connection) == 'object') {
						states[Connection.UNKNOWN]  = 'Unknown';
						states[Connection.ETHERNET] = 'Ethernet';
						states[Connection.WIFI]     = 'WiFi';
						states[Connection.CELL_2G]  = 'Cell 2G';
						states[Connection.CELL_3G]  = 'Cell 3G';
						states[Connection.CELL_4G]  = 'Cell 4G';
						states[Connection.CELL]     = 'Cell generic';
						states[Connection.NONE]     = 'No network';
					}
					
					self.network.state = states[networkState] || 'Unknown';
				}
			};
			
			document.addEventListener("offline", function() {
				self.network.notify('offline');
			}, false);
			document.addEventListener("online", function() {
				self.network.notify('online');
			}, false);
          }
		};
		enable.browser = function() {
          if (window.cordova && cordova.InAppBrowser) {
			self.browser = {
				open: cordova.InAppBrowser.open
			};
          }
		};
		enable.statusbar = function() {
          if (typeof(StatusBar) == 'object') {
			self.statusbar = {
				get: function() {
					return StatusBar;
				},
				hide: StatusBar.hide,
				show: StatusBar.show
			};
          }
		};
		
      	var _vibrate = {
          play: function(dur) {
            if (navigator.vibrate) { navigator.vibrate(dur); }
          }
        };
        enable.vibrate = function() {
          checkPermission(permissions.VIBRATE, function() {
              self.vibrate = Object.assign(self.vibrate, _vibrate);
			}, {type: 'vibrate', methods: Object.keys(_vibrate)});
        };
      
        var _contacts = {
            create: function(obj, fn) {
              var myContact;

              // {"displayName": "Test User"}
              if (navigator.contacts) {
                try {
                  myContact = navigator.contacts.create(obj);
                  if (_cfg.notify) { _cfg.notify(NOTIFY.CREATECONTACT_SUCCESS, myContact); }
                  if (fn) { fn(NOTIFY.CREATECONTACT_SUCCESS, myContact); }
                } catch(err) {
                  if (_cfg.notify) { _cfg.notify(NOTIFY.CREATECONTACT_ERROR); }
                  if (fn) { fn(NOTIFY.CREATECONTACT_ERROR); }
                }
              }
            },
            find: function(filter, fields, fn) {
              if (navigator.contacts) {
                // find all contacts with 'Bob' in any name field
                // var fields       = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];

                var options      = new ContactFindOptions();
                options.filter   = filter;
                options.multiple = true;
                options.desiredFields = [ fields[0] || navigator.contacts.fieldType.id ];
                options.hasPhoneNumber = true;

                navigator.contacts.find(fields, function(contacts) {
                  if (_cfg.notify) { _cfg.notify(NOTIFY.FINDCONTACT_SUCCESS, contacts); }
                  if (fn) { fn(NOTIFY.FINDCONTACT_SUCCESS, contacts); }
                }, function(err) {
                  if (_cfg.notify) { _cfg.notify(NOTIFY.FINDCONTACT_ERROR, err); }
                  if (fn) { fn(NOTIFY.FINDCONTACT_ERROR, err); }
                }, options);
              }
            },
            pickContact: function(fn) {
              if (navigator.contacts) {
                navigator.contacts.pickContact(function(contact) {
                  if (_cfg.notify) { _cfg.notify(NOTIFY.PICKCONTACT_SUCCESS, contact); }
                  if (fn) { fn(NOTIFY.PICKCONTACT_SUCCESS, contact); }
                },function(err) {
                  if (_cfg.notify) { _cfg.notify(NOTIFY.PICKCONTACT_ERROR, err); }
                  if (fn) { fn(NOTIFY.PICKCONTACT_ERROR, err); }
                });
              }
            }
        };
      	enable.contacts = function() {
			checkPermission(permissions.GET_ACCOUNTS, function() {
			  checkPermission(permissions.READ_CONTACTS, function() {
				checkPermission(permissions.WRITE_CONTACTS, function() { 
				  self.contacts = Object.assign(self.contacts, _contacts);
				}, {type: 'contacts', methods: Object.keys(_contacts)});
			  }, {type: 'contacts', methods: Object.keys(_contacts)});
			}, {type: 'contacts', methods: Object.keys(_contacts)});
		};
      
      	/*
        	CORDOVA App Folder:
            cordova.file.applicationDirectory
            
        	FILE SYSTEM Types:
            - window.TEMPORARY
            = LocalFileSystem.PERSISTENT
        */
        var _files = {
            type: function(type) {
              if (type) {
                _fsType = type;
              } else {
                return _fsType;
              }
            },
            exists: function(file, fn) {
               window.requestFileSystem(_fsType, 0, fsSuccess, fsError);

               function fsSuccess(fs) {
                  fs.root.getFile(file, {create: false}, function() {
                    if (_cfg.notify) { _cfg.notify(NOTIFY.FS_EXISTS_SUCCESS, true); }
                    if (fn) { fn(NOTIFY.FS_EXISTS_SUCCESS, true); }
                  }, function() {
                    if (_cfg.notify) { _cfg.notify(NOTIFY.FS_EXISTS_ERROR, false); }
                    if (fn) { fn(NOTIFY.FS_EXISTS_ERROR, false); }
                  });
               }

               function fsError(err) {
                  if (_cfg.notify) { _cfg.notify(NOTIFY.FS_ERROR, err); }
                  if (fn) { fn(NOTIFY.FS_ERROR, err); }
               }
            },
          	path: function(key) {
              switch (key.toLowerCase()) {
                case 'app':
                  return cordova.file.applicationDirectory;
                  
                case 'store':
                  return cordova.file.applicationStorageDirectory;
 
                case 'temp':
                  return cordova.file.tempDirectory || cordova.file.applicationDirectory + 'temp/';
                  
                case 'cache':
                  return cordova.file.cacheDirectory;
                  
                case 'docs':
                  return cordova.file.documentsDirectory || cordova.file.applicationDirectory + 'docs/';
                  
                case 'shared':
                  return cordova.file.sharedDirectory || cordova.file.applicationDirectory + 'shared/';
                  
                case 'sync':
                  return cordova.file.syncedDataDirectory || cordova.file.applicationDirectory + 'sync/';
                  
                default:
                  return cordova.file.tempDirectory || cordova.file.applicationDirectory + 'temp/';
              }
            },
            list: function(path, fn) {
               window.requestFileSystem(_fsType, 0, fsSuccess, fsError);

               function fsSuccess(fs) {
                  var reader = fs.createReader();
                  reader.readEntries(
                    function (entries) {
                      if (_cfg.notify) { _cfg.notify(NOTIFY.FS_LIST_SUCCESS, entries); }
                      if (fn) { fn(NOTIFY.FS_LIST_SUCCESS, entries); }
                    },
                    function (err) {
                      if (_cfg.notify) { _cfg.notify(NOTIFY.FS_LIST_ERROR, err); }
                      if (fn) { fn(NOTIFY.FS_LIST_ERROR, err); }
                    }
                  );
               }

               function fsError(err) {
                  if (_cfg.notify) { _cfg.notify(NOTIFY.FS_ERROR, err); }
                  if (fn) { fn(NOTIFY.FS_ERROR, err); }
               }
            },
            dirExists: function(folder, fn) {
               window.requestFileSystem(_fsType, 0, fsSuccess, fsError);

               function fsSuccess(fs) {
                  fs.root.getDirectory(folder, {create: false, exclusive: false}, function() {
					if (_cfg.notify) { _cfg.notify(NOTIFY.FS_EXISTS_SUCCESS, true); }
					if (fn) { fn(NOTIFY.FS_EXISTS_SUCCESS, true); }
                  }, function() {
                    if (_cfg.notify) { _cfg.notify(NOTIFY.FS_EXISTS_ERROR, false); }
                    if (fn) { fn(NOTIFY.FS_EXISTS_ERROR, false); }
                  });
               }

               function fsError(err) {
                  if (_cfg.notify) { _cfg.notify(NOTIFY.FS_ERROR, err); }
                  if (fn) { fn(NOTIFY.FS_ERROR, err); }
               }
			},
			delDir: function(folder, fn) {
               window.requestFileSystem(_fsType, 0, fsSuccess, fsError);

               function fsSuccess(fs) {
                  fs.root.getDirectory(folder, {create: false, exclusive: false}, function(parent) {
                    parent.remove(function() {
                      if (_cfg.notify) { _cfg.notify(NOTIFY.FS_DELDIR_SUCCESS, true); }
                      if (fn) { fn(NOTIFY.FS_DELDIR_SUCCESS, true); }
                    }, function() {
                      if (_cfg.notify) { _cfg.notify(NOTIFY.FS_DELDIR_ERROR, false); }
                      if (fn) { fn(NOTIFY.FS_DELDIR_ERROR, false); }
                    });

                  }, function(err) {
                    if (_cfg.notify) { _cfg.notify(NOTIFY.FS_DELDIR_ERROR, err); }
                    if (fn) { fn(NOTIFY.FS_DELDIR_ERROR, err); }
                  });
               }

               function fsError(err) {
                  if (_cfg.notify) { _cfg.notify(NOTIFY.FS_ERROR, err); }
                  if (fn) { fn(NOTIFY.FS_ERROR, err); }
               }
            },
            makeDir: function(folder, fn) {
               window.requestFileSystem(_fsType, 0, fsSuccess, fsError);

               function fsSuccess(fs) {
                  folder = folder || fs.root;
                  fs.root.getDirectory(folder, {create: true, exclusive: false}, function(parent) {
                    if (_cfg.notify) { _cfg.notify(NOTIFY.FS_MKDIR_SUCCESS, parent); }
                    if (fn) { fn(NOTIFY.FS_MKDIR_SUCCESS, parent); }

                  }, function() {
                    if (_cfg.notify) { _cfg.notify(NOTIFY.FS_MKDIR_ERROR, false); }
                    if (fn) { fn(NOTIFY.FS_MKDIR_ERROR, false); }
                  });
               }

               function fsError(err) {
                  if (_cfg.notify) { _cfg.notify(NOTIFY.FS_ERROR, err); }
                  if (fn) { fn(NOTIFY.FS_ERROR, err); }
               }
            },
            read: function(file, fn) {
               window.requestFileSystem(_fsType, 0, fsSuccess, fsError);

               function fsSuccess(fs) {
                  fs.root.getFile(file, {}, function(fileEntry) {

                     fileEntry.file(function(fileHnd) {
                        var reader = new FileReader();

                        reader.onloadend = function() {
                           if (_cfg.notify) { _cfg.notify(NOTIFY.FS_READ_SUCCESS, this.result); }
                           if (fn) { fn(NOTIFY.FS_READ_SUCCESS, this.result); }
                        };
                        reader.readAsText(fileHnd);

                     }, function(err) {
                       if (_cfg.notify) { _cfg.notify(NOTIFY.FS_STREAM_ERROR, err); }
                       if (fn) { fn(NOTIFY.FS_STREAM_ERROR, err); }
                     });

                  }, function(err) {
                    if (_cfg.notify) { _cfg.notify(NOTIFY.FS_GETFILE_ERROR, err); }
                    if (fn) { fn(NOTIFY.FS_GETFILE_ERROR, err); }
                  });
               }

               function fsError(err) {
                 if (_cfg.notify) { _cfg.notify(NOTIFY.FS_ERROR, err); }
                 if (fn) { fn(NOTIFY.FS_ERROR, err); }
               }
            },
            write: function(file, data, fn) {
               window.requestFileSystem(_fsType, 0, fsSuccess, fsError);

               function fsSuccess(fs) {
                  fs.root.getFile(file, {create: true}, function(fileEntry) {

                     fileEntry.createWriter(function(fileWriter) {
                        fileWriter.onwriteend = function(e) {
                           if (_cfg.notify) { _cfg.notify(NOTIFY.FS_WRITE_SUCCESS, e); }
                           if (fn) { fn(NOTIFY.FS_WRITE_SUCCESS, e); }
                        };

                        fileWriter.onerror = function(e) {
                           if (_cfg.notify) { _cfg.notify(NOTIFY.FS_WRITE_ERROR, e); }
                           if (fn) { fn(NOTIFY.FS_WRITE_ERROR, e); }
                        };

                        var blob = new Blob([data], {type: 'text/plain'});
                        fileWriter.write(blob);

                     }, function(err) {
                       if (_cfg.notify) { _cfg.notify(NOTIFY.FS_STREAM_ERROR, err); }
                       if (fn) { fn(NOTIFY.FS_STREAM_ERROR, err); }
                     });

                  }, function(err) {
                    if (_cfg.notify) { _cfg.notify(NOTIFY.FS_GETFILE_ERROR, err); }
                    if (fn) { fn(NOTIFY.FS_GETFILE_ERROR, err); }
                  });
               }

               function fsError(err) {
                 if (_cfg.notify) { _cfg.notify(NOTIFY.FS_ERROR, err); }
				 if (fn) { fn(NOTIFY.FS_ERROR, err); }
               }
            },
            delete: function(file, fn) {
               window.requestFileSystem(_fsType, 0, fsSuccess, fsError);

               function fsSuccess(fs) {
                  fs.root.getFile(file, {create: false}, function(fileEntry) {
                     fileEntry.remove(function() {
                       if (_cfg.notify) { _cfg.notify(NOTIFY.FS_DELETE_SUCCESS, true); }
                       if (fn) { fn(NOTIFY.FS_DELETE_SUCCESS, true); }
                     }, function(err) {
                       if (_cfg.notify) { _cfg.notify(NOTIFY.FS_DELETE_ERROR, err); }
                       if (fn) { fn(NOTIFY.FS_DELETE_ERROR, err); }
                     });

                  }, function(err) {
                    if (_cfg.notify) { _cfg.notify(NOTIFY.FS_GETFILE_ERROR, err); }
                    if (fn) { fn(NOTIFY.FS_GETFILE_ERROR, err); }
                  });
               }

               function fsError(err) {
                  if (_cfg.notify) { _cfg.notify(NOTIFY.FS_ERROR, err); }
                  if (fn) { fn(NOTIFY.FS_ERROR, err); }
               }
            },
            deleteAll: function(path, fn) {
              self.files.list(path, function(status, items) {
                if (status == NOTIFY.FS_LIST_SUCCESS) {
                  items.forEach(function(item) {
                    self.files.delete(path + item);
                    if (_cfg.notify) { _cfg.notify(NOTIFY.FS_DELALL_SUCCESS, true); }
                    if (fn) { fn(NOTIFY.FS_DELALL_SUCCESS, true); }
                  });

                }
              });
            }
        };
      	enable.files = function() {
			checkPermission(permissions.WRITE_EXTERNAL_STORAGE, function() {
			  self.files = Object.assign(self.files, _files);
			}, {type: 'files', methods: Object.keys(_files)});
		};

        var _media = {
            init: function(src, fn) {
              return new Media(src, function() {
                   if (_cfg.notify) { _cfg.notify(NOTIFY.MEDIA_SUCCESS, true); }
                   if (fn) { fn(NOTIFY.MEDIA_SUCCESS, true); }
              }, function(err) {
                   if (_cfg.notify) { _cfg.notify(NOTIFY.MEDIA_ERROR, err); }
                   if (fn) { fn(NOTIFY.MEDIA_ERROR, err); }
              });
            },
            watch: function(dur, fn) {
              var counter = 0;
              return setInterval(function() {
                counter += dur;
                if (fn) { fn(NOTIFY.MEDIA_INTERVAL, counter); }
              }, dur);
            },
            clear: function(watchId) {
              clearInterval(watchId);
            },

            pos: function() {},
            duration: function() {},

            getCurrentAmplitude: function(media, fn) {
              media.getCurrentAmplitude(
                function (pct) {
                  if (_cfg.notify) { _cfg.notify(NOTIFY.MEDIA_AMP_SUCCESS, pct); }
                  if (fn) { fn(NOTIFY.MEDIA_AMP_SUCCESS, pct); }
                },
                function (err) {
                  if (_cfg.notify) { _cfg.notify(NOTIFY.MEDIA_AMP_ERROR, err); }
				  if (fn) { fn(NOTIFY.MEDIA_AMP_ERROR, err); }
                }
              );
            },
            getCurrentPosition: function(media, fn) {
              media.getCurrentPosition(
                function (pos) {
                  if (pos > -1) {
                    if (_cfg.notify) { _cfg.notify(NOTIFY.MEDIA_POS_SUCCESS, pos); }
                    if (fn) { fn(NOTIFY.MEDIA_POS_SUCCESS, pos); }
                  }
                },
                function (err) {
                  if (_cfg.notify) { _cfg.notify(NOTIFY.MEDIA_POS_ERROR, err); }
                  if (fn) { fn(NOTIFY.MEDIA_POS_ERROR, err); }
                }
              );
            },
            getDuration: function(media, fn) {
              var counter = 0;
              var timerDur = setInterval(function() {
                  counter = counter + 100;
                  if (counter > 2000) {
                      clearInterval(timerDur);
                      if (_cfg.notify) { _cfg.notify(NOTIFY.MEDIA_DUR_ERROR, null); }
                      if (fn) { fn(NOTIFY.MEDIA_DUR_ERROR, null); }
                  }
                  var dur = media.getDuration();
                  if (dur > 0) {
                      clearInterval(timerDur);
                      if (_cfg.notify) { _cfg.notify(NOTIFY.MEDIA_DUR_SUCCESS, dur); }
                      if (fn) { fn(NOTIFY.MEDIA_DUR_SUCCESS, dur); }
                  }
              }, 100);
            },
            play: function(media) {
              media.play();
            },
            pause: function(media) {
              media.pause();
            },
            pauseRecord: function(media) {
              media.pauseRecord();
            },
            release: function(media) {
              media.release();
            },
            resumeRecord: function(media) {
              media.resumeRecord();
            },
            startRecord: function(media) {
              media.startRecord();
            },
            stopRecord: function(media) {
              media.stopRecord();
            },
            stop: function(media) {
              media.stop();
            },
            seekTo: function(media, pos) {
              // pos in milliseconds. 1 sec = 1000
              media.seekTo(pos);
            },
            setVolume: function(media, vol) {
              // vol is string from '0.0' to '1.0'
              media.setVolume(vol);
            },
            setRate: function(media, speed) {
              // Playback speed is number from 0.1 - 4.0; (unknown range)
              media.setRate(speed);
            }
        };
      	enable.media = function() {
			checkPermission(permissions.READ_AUDIO, function() { 
			  checkPermission(permissions.MODIFY_AUDIO_SETTINGS, function() { 
				checkPermission(permissions.WRITE_EXTERNAL_STORAGE, function() {
				  self.media = Object.assign(self.media, _media);
				}, {type: 'media', methods: Object.keys(_media)});
			  }, {type: 'media', methods: Object.keys(_media)});
			}, {type: 'media', methods: Object.keys(_media)});
		};

        var _geo = {
            get: function(opts, fn) {
                var options = opts || {
                  enableHighAccuracy: true,
                  maximumAge: 3600000
                };

                if (navigator.geolocation) {
                 navigator.geolocation.getCurrentPosition(function(pos) {
                   if (_cfg.notify) { _cfg.notify(NOTIFY.GEOLOC_SUCCESS, pos); }
                   if (fn) { fn(NOTIFY.GEOLOC_SUCCESS, pos); }
                 }, function(err) {
                   if (_cfg.notify) { _cfg.notify(NOTIFY.GEOLOC_ERROR, err); }
                   if (fn) { fn(NOTIFY.GEOLOC_ERROR, err); }
                 }, options);
                }
            },
            watch: function(opts, fn) {
               var options = opts || {
                  maximumAge: 3600000,
                  timeout: 3000,
                  enableHighAccuracy: true,
               };

               if (navigator.geolocation) {
                 var watchID = navigator.geolocation.watchPosition(function(pos) {
                   if (_cfg.notify) { _cfg.notify(NOTIFY.GEOLOC_SUCCESS, pos); }
                   if (fn) { fn(NOTIFY.GEOLOC_SUCCESS, pos); }
                 }, function(err) {
                   if (_cfg.notify) { _cfg.notify(NOTIFY.GEOLOC_ERROR, err); }
                   if (fn) { fn(NOTIFY.GEOLOC_ERROR, err); }
                 }, options);
                 return watchID;
               }
            },
            clear: function(watchId) {
              if (navigator.geolocation) { navigator.geolocation.clearWatch(watchId); }
            }
        };
      	enable.geo = function() {
			checkPermission(permissions.ACCESS_COARSE_LOCATION, function() {
			  checkPermission(permissions.ACCESS_FINE_LOCATION, function() {
				checkPermission(permissions.ACCESS_LOCATION_EXTRA_COMMANDS, function() {
				  self.geo = Object.assign(self.geo, _geo);
				}, {type: 'geo', methods: Object.keys(_geo)});
			  }, {type: 'geo', methods: Object.keys(_geo)});
			}, {type: 'geo', methods: Object.keys(_geo)});
		};

        var _gallery = {
          	getThumbnail: function(libItm, fn) { // or LibItm.id
              if (cordova && cordova.plugin && cordova.plugins.photoLibrary) {
                cordova.plugins.photoLibrary.getThumbnail(libItm, function (libItm) {
                  if (_cfg.notify) { _cfg.notify(NOTIFY.DEFAULT_SUCCESS, libItm); }
                  if (fn) { fn(NOTIFY.DEFAULT_SUCCESS, libItm); }
                }, function (err) {
                  if (_cfg.notify) { _cfg.notify(NOTIFY.DEFAULT_ERROR, err); }
                  if (fn) { fn(NOTIFY.DEFAULT_ERROR, err); }
                });
              }
            },
          	getPhoto: function(libItm, fn) { // or LibItm.id
              if (cordova && cordova.plugin && cordova.plugins.photoLibrary) {
                cordova.plugins.photoLibrary.getPhoto(libItm, function (libItm) {
                  if (_cfg.notify) { _cfg.notify(NOTIFY.DEFAULT_SUCCESS, libItm); }
                  if (fn) { fn(NOTIFY.DEFAULT_SUCCESS, libItm); }
                }, function (err) {
                  if (_cfg.notify) { _cfg.notify(NOTIFY.DEFAULT_ERROR, err); }
                  if (fn) { fn(NOTIFY.DEFAULT_ERROR, err); }
                });
              }
            },
            saveImage: function(album, url, fn) {
              album = album || App.ProductName;
              if (cordova && cordova.plugin && cordova.plugins.photoLibrary) {
                cordova.plugins.photoLibrary.saveImage(url, album, function (libItm) {
                  if (_cfg.notify) { _cfg.notify(NOTIFY.SAVEIMAGE_SUCCESS, libItm); }
                  if (fn) { fn(NOTIFY.SAVEIMAGE_SUCCESS, libItm); }
                }, function (err) {
                  if (_cfg.notify) { _cfg.notify(NOTIFY.SAVEIMAGE_ERROR, err); }
                  if (fn) { fn(NOTIFY.SAVEIMAGE_ERROR, err); }
                });
              }
            },
          	saveVideo: function(album, url, fn) {
              album = album || App.ProductName;
              if (cordova && cordova.plugin && cordova.plugins.photoLibrary) {
                cordova.plugins.photoLibrary.saveVideo(url, album, function (libItm) {
                  if (_cfg.notify) { _cfg.notify(NOTIFY.SAVEVIDEO_SUCCESS, libItm); }
                  if (fn) { fn(NOTIFY.SAVEVIDEO_SUCCESS, libItm); }
                }, function (err) {
                  if (_cfg.notify) { _cfg.notify(NOTIFY.SAVEVIDEO_ERROR, err); }
                  if (fn) { fn(NOTIFY.SAVEVIDEO_ERROR, err); }
                });
              }
            },
            getlibrary: function(options, fn) {
              if (cordova && cordova.plugin && cordova.plugins.photoLibrary) {
                cordova.plugins.photoLibrary.getLibrary(
                  function (result) {
                    var library = result.library;
                    // Send array of library objects to notify.
                    if (_cfg.notify) { _cfg.notify(NOTIFY.GETLIBRARY_SUCCESS, library); }
                    if (fn) { fn(NOTIFY.GETLIBRARY_SUCCESS, library); }
                  },
                  function (err) {
                    if (_cfg.notify) { _cfg.notify(NOTIFY.GETLIBRARY_ERROR, err); }
                    if (fn) { fn(NOTIFY.GETLIBRARY_ERROR, err); }
                  },
                  options || { // optional options
                    thumbnailWidth: 512,
                    thumbnailHeight: 384,
                    quality: 0.8,
                    includeAlbumData: false // default
                  }
                );
              }
            },
            getalbum: function(fn) {
              if (cordova && cordova.plugin && cordova.plugins.photoLibrary) {
                cordova.plugins.photoLibrary.getAlbums(
                  function (albums) {
                    // Send an array of almbuns to notify.
                    if (_cfg.notify) { _cfg.notify(NOTIFY.GETALBUM_SUCCESS, albums); }
                    if (fn) { fn(NOTIFY.GETALBUM_SUCCESS, albums); }
                  }, 
                  function (err) {
                    if (_cfg.notify) { _cfg.notify(NOTIFY.GETALBUM_ERROR, err); }
                    if (fn) { fn(NOTIFY.GETALBUM_ERROR, err); }
                  }
                );
              }
            }
        };
        enable.gallery = function() {
          checkPermission(permissions.WRITE_EXTERNAL_STORAGE, function() {
			self.gallery = Object.assign(self.gallery, _gallery);
		  }, {type: 'gallery', methods: Object.keys(_gallery)});
        };
      
      	var _camera = {
            getpicture: function(options, fn) {
              if (navigator.camera) {
                navigator.camera.getPicture(function(imgURI) {
                  // var image = document.getElementById('myImage');
                  // image.src = imageURI;
                  if (_cfg.notify) { _cfg.notify(NOTIFY.CAMERA_SUCCESS, imgURI); }
                  if (fn) { fn(NOTIFY.CAMERA_SUCCESS, imgURI); }
                }, function(err) {
                  if (_cfg.notify) {  _cfg.notify(NOTIFY.CAMERA_ERROR, err); }
                  if (fn) { fn(NOTIFY.CAMERA_ERROR, err); }
                }, options);
              }
            },
            cleanup: function(fn) {
              if (navigator.camera) {
                navigator.camera.cleanup(function() {
                  if (_cfg.notify) { _cfg.notify(NOTIFY.CAMCLEANUP_SUCCESS); }
                  if (fn) { fn(NOTIFY.CAMCLEANUP_SUCCESS); }
                }, function(err) {
                  if (_cfg.notify) { _cfg.notify(NOTIFY.CAMCLEANUP_ERROR, err); }
                  if (fn) { fn(NOTIFY.CAMCLEANUP_ERROR, err); }
                });
              }
            },
            options: function(quality, srcType) {
              var options;
              if (Camera) {
                options = {
                    // Some common settings are 20, 50, and 100
                    // srcType = Camera.PictureSourceType.CAMERA
                    quality: quality,
                    destinationType: Camera.DestinationType.FILE_URI,

                    // In this app, dynamically set the picture source, Camera or photo gallery
                    sourceType: srcType,
                    encodingType: Camera.EncodingType.JPEG,
                    mediaType: Camera.MediaType.PICTURE,
                    allowEdit: true,
                    correctOrientation: true
                };
              }
              return options || null;
            }
        };
        enable.camera = function() {
			checkPermission(permissions.CAMERA, function() {
			  checkPermission(permissions.WRITE_EXTERNAL_STORAGE, function() {
				self.camera = Object.assign(self.camera, _camera);
			  }, {type: 'camera', methods: Object.keys(_camera)});
			}, {type: 'camera', methods: Object.keys(_camera)});
		};

      	// USES: cordova-sms-plugin
        var _sms = {
			watch: function(fn) {
              if (window.SMS) {
				  SMS.startWatch(function() {
					if (_cfg.notify) { _cfg.notify(NOTIFY.ENABLE_WATCH_SUCCESS); }
					if (fn) { fn(NOTIFY.ENABLE_WATCH_SUCCESS); }
				  }, function() {
					if (_cfg.notify) { _cfg.notify(NOTIFY.ENABLE_WATCH_ERROR); }
					if (fn) { fn(NOTIFY.ENABLE_WATCH_ERROR); }
				  });
			  }
			},
			intercept: function(fn) {
              if (window.SMS) {
				  SMS.enableIntercept(true, function() {
					if (_cfg.notify) { _cfg.notify(NOTIFY.ENABLE_INTERCEPT_SUCCESS); }
					if (fn) { fn(NOTIFY.ENABLE_INTERCEPT_SUCCESS); }
				  }, function() {
					if (_cfg.notify) { _cfg.notify(NOTIFY.ENABLE_INTERCEPT_ERROR); }
					if (fn) { fn(NOTIFY.ENABLE_INTERCEPT_ERROR); }
				  });
			  }
			},
            send: function (addr, msg, fn) {
              if (window.SMS) { 
                SMS.sendSMS(addr, msg, function() {
                  if (_cfg.notify) { _cfg.notify(NOTIFY.SENDMSGS_SUCCESS); }
                  if (fn) { fn(NOTIFY.SENDMSGS_SUCCESS); }
                }, function(err) {
                  if (_cfg.notify) { _cfg.notify(NOTIFY.SENDMSGS_ERROR, err); }
                  if (fn) { fn(NOTIFY.SENDMSGS_ERROR, err); }
                });
              } else { alert('SMS is not loaded!'); }
            },
            delete: function(filter, fn) {
              if (window.SMS) {
				  SMS.deleteSMS(filter, function( n ) {
					if (_cfg.notify) { _cfg.notify(NOTIFY.DELETEMSGS_SUCCESS, n); }
					if (fn) { fn(NOTIFY.DELETEMSGS_SUCCESS, n); }
				  }, function(err) {
					if (_cfg.notify) { _cfg.notify(NOTIFY.DELETEMSGS_ERROR, err); }
					if (fn) { fn(NOTIFY.DELETEMSGS_ERROR, err); }
				  });
			  }
            },
            list: function(filter, fn) {
              if (window.SMS) {
				  SMS.listSMS(filter, function(data) {
					// NOTE: data is an array of messages.
					if (_cfg.notify) { _cfg.notify(NOTIFY.LISTMSGS_SUCCESS, data); }
					if (fn) { fn(NOTIFY.LISTMSGS_SUCCESS, data); }
				  }, function(err) {
					if (_cfg.notify) { _cfg.notify(NOTIFY.LISTMSGS_ERROR, err); }
					if (fn) { fn(NOTIFY.LISTMSGS_ERROR, err); }
				  });
			  }
            },
            options: function(options) {
              if (window.SMS) { SMS.setOptions(options);}
            }
        };
		enable.sms = function() {
          if (!self.sms) { self.sms = {}; }
          function requestSMSPermission() {
            var success = function (hasPermission) { 
              if (!hasPermission) {
                _sms.requestPermission(function() {
                  console.log('[OK] Permission accepted');
                  proceed(true);
                }, function() {
                  console.info('[WARN] Permission not accepted');
                  // Handle permission not accepted
                });
              }
            };
            var error = function (e) { alert('Something went wrong:' + e); };
            _sms.hasPermission(success, error);
          }
          function error(e) {
            alert('Something went wrong:' + e);
          }

          function proceed(hasPermission) {
            if (hasPermission) {
              self.sms.createSms = function(number, msg, opts, cbk) {
                _sms.send(number, msg, opts, function() {
                  self.sms._enabled = true;
                  self.sms._status = 'success';
                  if (cbk) { cbk(true, 'ok'); }
                }, function(e) {
                  if (cbk) { cbk(false, e); }
                });
              };
            } else {
              requestSMSPermission();
            }
          }

          if (typeof(sms) == 'object') {
          	_sms.hasPermission(proceed, error);
          }
        };
      	enable.SMS = function() {
          if (!self.sms) { self.sms = {}; }
          
          function onMsg() {
          }
          function success(action, result, objAry) {
            // #id = message id for delete
            // #num = # of messages for restore
            // true, ary = array for list
            // t/f for intercept (on/Off)
            // t/f for send message
            // t/f for watch messages
            
            switch (action) {
              case 'delete':
                var idx = smsList.find(function(it) { return it._id == objAry._id; });
                if (idx > -1) { smsList.splice(idx, 1); }
                break;
                
              case 'onmsg':
                smsList.push(result.data);
                break;
                
              case 'list':
                if (result) {
                  for (var i in objAry) {
					  if (objAry.hasOwnProperty(i)) {
						smsList.push(objAry[i]);
					  }
                  }
                }
                break;
            }
          }
          function failed(err) {
            console.log('Error:');
            console.log(err);
          }
          
          if (typeof(SMS) == 'object') {
            self.sms.notify = onMsg;
            self.sms.sendSms = function(sendto, msg) {
              if(sendto.indexOf(";") >= 0) {
                  sendto = sendto.split(";");
                  for (var i in sendto) {
					  if (sendto.hasOwnProperty(i)) {
						sendto[i] = sendto[i].trim();
					  }
                  }
              }
              SMS.sendSMS(sendto, msg, function() {
                success('send', true);
              }, failed);
            };
            self.sms.listSms = function(filter) {
              SMS.listSMS(filter || {}, function(data) {
                success('list', Array.isArray(data), data);
              }, failed);
            };

            self.sms.deleteSms = function(ary) {
              ary.forEach(function(sms) {
                SMS.deleteSMS({_id: sms["_id"]}, function(id) {		// jshint ignore:line
                  success('delete', id, sms);
                }, failed);
              });
            };
            self.sms.startWatch = function() {
              SMS.startWatch(function() {
                success('watch', true);
              }, failed);
            };
            self.sms.stopWatch = function() {
              SMS.stopWatch(function() {
                success('watch', false);
              }, failed);
            };
            self.sms.enableIntercept = function(blOnOff) {
              if (blOnOff) {
                smsList.length = 0;
              }
              SMS.enableIntercept(blOnOff, function() {
                success('intercept', blOnOff);
              }, failed);
            };
            self.sms.restoreSms = function() {
              smsList.length = 0;
              SMS.restoreSMS(smsList, function(num) {
                success('restore', num);
              }, failed);
            };
            self.sms.setOptions = function(options) {	// jshint ignore:line
            };

            document.addEventListener('onSMSArrive', function(e) {
              success('onmsg', e);
			});
          }
        };

        var _notify = {
          	vibrate: function(dur) {
              if (navigator.notification.vibrate) { navigator.notification.vibrate(dur); }
            },
          	beep: function(times) {
              if (navigator.notification.beep) { navigator.notification.beep(times); }
            },
            alert: function(msg, cllbk, title, button) {
              if (navigator.notification.alert) { navigator.notification.alert(msg, cllbk, title, button); }
            },
            confirm: function(msg, cllbk, title, button) {
              if (navigator.notification.confirm) { navigator.notification.confirm(msg, cllbk, title, button); }
            }
        };
        enable.notify = function() {
			checkPermission(permissions.POST_NOTIFICATIONS, function() {
			  self.notify = Object.assign(self.notify, _notify);
			}, {type: 'notify', methods: Object.keys(_notify)});
		};

      	self.init = function(parms) {
          if (typeof(cordova) == 'undefined') { return; }
          
          _cfg = parms;
          var plgn = _cfg.plugins || [];
		  
          // Global Phone Listener/Callback.
          // parms = {
          //     plugins: ['sms', 'contact', 'notify'],
          //     notify: function(result, data) {}
          // }
          //
		  // List of plugins to enable.
		  // parms.plugins = ['sms', 'contact', 'notify']
		  // check and enable permissions for each plugin group.
		  plgn.forEach(function(itm) {
			  if (enable && enable[itm] && (typeof(self[itm]) == 'undefined' ||
                  typeof(self[itm]._status) == 'undefined')) { enable[itm](); }
		  });
		  
		};
      	self.destroy = function() {
          if (SMS) {
            if (_cfg.watch) {
              SMS.stopWatch(function() {
                if (_cfg.notify) { _cfg.notify(NOTIFY.DISABLE_WATCH_SUCCESS); }
              }, function() {
                if (_cfg.notify) { _cfg.notify(NOTIFY.DISABLE_WATCH_ERROR); }
              });
            }
            
            if (_cfg.intercept) {
              SMS.enableIntercept(false, function() {
                if (_cfg.notify) { _cfg.notify(NOTIFY.DISABLE_INTERCEPT_SUCCESS); }
              }, function() {
                if (_cfg.notify) { _cfg.notify(NOTIFY.DISABLE_INTERCEPT_ERROR); }
              });
              SMS.restoreSMS(smsList, function( n ) {
                smsList.length = 0;
                if (_cfg.notify) { _cfg.notify(NOTIFY.RESTOREMSGS_SUCCESS, n); }

              }, function(err) {
                if (_cfg.notify) { _cfg.notify(NOTIFY.RESTOREMSGS_ERROR, err); }
              });
            }
          }
        };

      	// Phone Diagnostic Method.
        // --------------------------
      	self.diagnose = function(dlg, ctrl) {
          if (typeof(cordova) == 'undefined') { return; }
          var info = '', cnt = 0;
          
          function log(out) {
            if (dlg && ctrl && $f.type(dlg, ctrl) == 'textarea') {
              cnt++;
              out = (typeof(out) != 'string') ? JSON.stringify(out) : out;
              info += out + '\n';
              
              $f.text(dlg, ctrl, info);
            } else {
              console.log(out);
            }
          }
          
          // All generic mobile information.
          //
          log('\nDEVICE:');
          ['cordova', 'model', 'platform', 'uuid',
           'version', 'serial', 'manufacturer'].forEach(function(it) {
          	log(it + ' = ' + self.device.get(it));
          });
          
          log('\nAGENT:');
          log(self.Agent());
          
          log('\nVENDOR:');
          log(self.Vendor());
          
		  log('\nLIST OF PLUGINS:');
		  log(self.PluginList());
		  log('\n');
		  
          if (self.orientation) {
            log('\nORIENTATION:');
            log(self.orientation.get());
          }
          
          if (self.network) {
            log('\nNETWORK:');
            self.network.update();
            log('Network Connection = ' + self.network.get());
          }
          
          if (self.battery) {
            log('\nBATTERY:');
            log(self.battery.get());
          }
          
          if (self.compass) {
            self.compass.getHeading(function(result, data) {
            	log('\nCOMPASS:');
            	log(data);
            });
          }
          
          if (self.motion) {
            self.motion.getMotion(function(result, data) {
               	log('\nMOTION:');
           		log(data);
            });
          }
          
          if (self.globalize) {
            log('\nGLOBALIZE:');
            log('Language = ' + self.globalize.getLanguage());
            log('LocaleName = ' + self.globalize.getLocaleName());
          }
        
          if (self.statusbar) {
            log('\nSTATUSBAR:');
            log(self.statusbar.get());
          }
          
          if (self.vibrate) {
            log('\nVIBRATE:');
            log('Vibrate 2 second(s).');
            self.vibrate.play(2000);
          }
          
          if (self.files) {
            log('\nFILES:');
            ['app', 'store', 'temp', 'cache', 'docs', 'shared', 'sync'].forEach(function(itm) {
              log(' - file.path(' + itm + ') = "' + self.files.path(itm) + '"');
            });
            // Write, Read, List, Exists, Delete
            log('\n1. Write test file "test.txt".');
            self.files.write('./test.txt', 'This is a test ' + (new Date()).Format('#MM#-#DD#-#YYYY# #hh#:#mm# #AMPM#'), function(msg, res) {
            if (res) {
              log('2. Check for wrong file "test.png".');
              self.files.exists('./test.png', function(msg, res) {
                if (!res) {
                  log('3. Test for correct file "test.txt".');
                  self.files.exists('./test.txt', function(msg, res) {
                    if (res) {
                      log('4. Read test file.');
                      self.files.read('./test.txt', function(msg, res) {
                        log('\nFILE CONTENT:');
                        log(res);
                        
                        log('\n5. Delete file.');
                        self.files.delete('./test.txt', function(msg, res) {
                          if (res) {
                            log('6. Verify deleted file.');
                            self.files.exists('./test.txt', function(msg, res) {
                              if (!res) {
                                log('\nFILE DELETED! File I/O test completed!');
                              }
                            });
                          }
                        });
                      });
                    }
                  });
                }
              });
            }
          });
          }
          
          if (self.geo) {
            self.geo.get(null, function(result, data) {
              log('\nGEO:');
              log({result: result, data: data});
            });
          }
          
          if (self.media) {
            log('\nMEDIA:');
            var media = self.media.init(Env.domain() + '/media/drums.mp3', function(msg, res) {
              if (res && media) {
                log('Playing drums.mp3');
                self.media.play(media);
              }
            });
          }
          
          if (self.notify) {
            log('\nNOTIFY:');
            log('Vibrate for 2 secs.');
            self.notify.vibrate(2);

            log('Test notification alert.');
            self.notify.alert('You are a winner', function() {
              log('Alert has dismissed.');
            }, "Confirm:", 'Close');

            log('Test notification confirmation.');
            self.notify.confirm('Did this popup work?', function(idx) {
              log('Button ' + idx + ' was pressed.');
            }, "Confirm:", ['Yes', 'No']);
          }
          
          if (self.gallery) {
            self.gallery.getLibrary(null, function(result) {
                log('\nGALLERY:');
                log(' Gallery getLibrary:');
              	var lib = result.library || [];
              
              	lib.forEach(function(itm) {
                  log(itm);
                });
            });
          }
          
          if (self.camera) {
            log('\nCAMERA:');
            log(' Camera Enabled: ' + self.camera._status);
          }
      
          // Sms
        };
      
		// Attach Phone Features when Device is Ready.
		function onDeviceReady() {
          // Attach files, vibrate, battery, network & device
          // by default.
          if (typeof(cordova) != 'undefined') {
            enable.files();
            enable.vibrate();
            enable.battery();
            enable.network();
            if (window.device && device.cordova) { enable.device(); }
          }
		}
		document.addEventListener("deviceready", onDeviceReady, false);
	};
	
  	Phone.prototype.type = function () {
		return "Phone";
	};
	Phone.prototype.toDto = function () {
		return { };
	};
	return Phone;
});
