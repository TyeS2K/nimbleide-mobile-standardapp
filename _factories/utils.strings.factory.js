/* Strings Component Manager/Factory :

*/

FACTORY.Register('Strings', function StringFactory() {
	var Strings = function () {
		var self = this;
		
		function escapeRegExp(text) {
			return text.replace(/[-[\]{}()*+?.,\\^$|\s]/g, '\\$&');
		}

		self.capFirst = function(txt) {
			return txt.substr(0,1).toUpperCase() + txt.substr(1).toLowerCase();
		};
		self.replaceFirst = function(find, repl, str) {
			if (!find) { return str; }
			
			var retval = "";
			repl = repl.toString();

			if (str && typeof str == 'string') {
				find = escapeRegExp(find);
				retval = str.replace(find, repl);
			} else { retval = str; }
			return retval;
		};
		self.replaceAll = KERNEL.replaceAll;
		self.replaceAllIC = function(find, repl, str) {
			if (!find) { return str; }
			
			var retval = "";
			repl = repl.toString();

			if (str && typeof str == 'string') {
				find = escapeRegExp(find);
				retval = str.replace(new RegExp(find, 'gi'), repl);
			} else { retval = str; }
			return retval;
		};
		self.getStrLen = function(sCmd, len) {
			if (sCmd.length >= len) {
				return {
					item: sCmd.substr(0, len),
					remainder: sCmd.substr(len+1)
				};
			} else {
				return {
					item: sCmd,
					remainder: ''
				};
			}
		};
		self.getStrParam = function(sCmd, delim) {
			var p;

			p = sCmd.toLowerCase().indexOf(delim.toLowerCase());
			if (p > -1) {
				return {
					item: sCmd.substr(0, p).trimLeft(),
					remainder: sCmd.substr(p + delim.length)
				};
			} else {
				return {
					item: sCmd.trimLeft(),
					remainder: ''
				};
			}
		};

		self.justifyCode = function(inTxt, tabCnt) {
			var jtab, retval;

			if (inTxt.trim() != '') {
				while (inTxt.right(2) == '\r\n') {
					inTxt = inTxt.left(inTxt.length - 2);
				}
				retval = self.replaceAll('<<' + 'CRLF' + '>>', '\r\n', inTxt);
				retval = self.replaceAll('<<' + 'CR' + '>>', '\r\n', inTxt);
				retval = self.replaceAll('\r\n\r\n', '\r\n', retval);
				if (retval.right(2) != '\r\n') { retval += '\r\n'; }

				jtab = "\t".repeat(tabCnt);
				retval = jtab + self.replaceAll('\r\n', '\r\n' + jtab, retval);
				return '\r\n' + retval;
			} else { return ''; }
		};
		self.justifyCodeLF = function(inTxt, tabCnt) {
			var jtab, retval;

			if (inTxt.trim() != '') {
				while (inTxt.right(2) == '\r\n') {
					inTxt = inTxt.left(inTxt.length - 2);
				}
				retval = self.replaceAll('<<' + 'CRLF' + '>>', '\n', inTxt);
				retval = self.replaceAll('<<' + 'CR' + '>>', '\n', inTxt);
				retval = self.replaceAll('\r\n', '\n', retval);
				retval = self.replaceAll('\n\n', '\n', retval);
				if (retval.substr(retval.length-1) != '\n') { retval += '\n'; }
				
				jtab = "\t".repeat(tabCnt);
				retval = jtab + self.replaceAll('\n', '\n' + jtab, retval);
				retval = self.replaceAll('\t', '    ', retval);
				return '\n' + retval;
			} else { return ''; }
		};
		self.cleanDeadSpace = function(inTxt) {
			var retval = '', inDat, ln, blBlank;

			inDat = inTxt;
			inDat = self.replaceAll('\t', '    ', inDat);
			ln = inDat.split('\r\n');
			for (var x = 0; x < ln.length; x++) {
				if (ln[x].trim() != '') {
					retval = retval + ln[x] + '\r\n';
					blBlank = false;
				} else {
					if (!blBlank) {
						blBlank = true;
						retval = retval + '\r\n';
					}
				}
			}
			return retval;
		};
		
		self.stripNumerics = function(inTxt) {
			var newtext, x, falpha;

			falpha = '0123456789@#$%*^[]=\|<>~';

			newtext = '';
			x = 0;
			while (x < inTxt.length) {
				if (falpha.indexOf(inTxt.substr(x,1)) == -1) {
					newtext += inTxt.substr(x,1);
				}
				x++;
			}
			return newtext.trim();
		};
		self.numericOnly = function(inTxt) {
			var newtext, x, falpha;

			falpha = '1234567890';
			falpha = '.+-*/' + falpha;

			newtext = '';
			x = 0;
			while (x < inTxt.length) {
				if (falpha.indexOf(inTxt.substr(x,1)) > -1) {
					newtext += inTxt.substr(x,1);
				}
				x++;
			}
			return newtext.trim();
		};
		self.alphaOnly = function(inTxt) {
			var newtext, x, falpha;

			falpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
			falpha += falpha.toLowerCase();
			falpha = '._-' + falpha;

			newtext = '';
			x = 0;
			while (x < inTxt.length) {
				if (falpha.indexOf(inTxt.substr(x,1)) > -1) {
					newtext += inTxt.substr(x,1);
				}
				x++;
			}
			return newtext.trim();
		};
		self.alphaNumOnly = function(inTxt) {
			var newtext, x, falpha;

			falpha = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
			falpha += falpha.toLowerCase();
			falpha = '._-' + falpha;

			newtext = '';
			x = 0;
			while (x < inTxt.length) {
				if (falpha.indexOf(inTxt.substr(x,1)) > -1) {
					newtext += inTxt.substr(x,1);
				}
				x++;
			}
			return newtext.trim();
		};
		self.asciiStrip = function(inTxt) {
			var newtext, x, falpha;

			falpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
			falpha += falpha.toLowerCase();
			falpha = '0123456789()._-+' + falpha;

			newtext = '';
			x = 0;
			while (x < inTxt.length) {
				if (falpha.indexOf(inTxt.substr(x,1)) > -1) {
					newtext += inTxt.substr(x,1);
				}
				x++;
			}
			return newtext.trim();
		};
		self.objectNameStrip = function(inTxt) {
			var newtext, x, falpha;

			falpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ()';
			falpha += falpha.toLowerCase();
			falpha = '0123456789%+! ' + falpha;

			newtext = '';
			x = 0;
			while (x < inTxt.length) {
				if (falpha.indexOf(inTxt.substr(x,1)) > -1) {
					newtext += inTxt.substr(x,1);
				}
				x++;
			}
			return newtext.trim();
		};
		self.labelStrip = function(inTxt) {
			var newtext, x, falpha;

			falpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
			falpha += falpha.toLowerCase();
			falpha = '0123456789._+' + falpha;

			newtext = '';
			x = 0;
			while (x < inTxt.length) {
				if (falpha.indexOf(inTxt.substr(x,1)) > -1) {
					newtext += inTxt.substr(x,1);
				}
				x++;
			}
			return newtext.trim();
		};
		self.fileStrip = function(inTxt) {
			var newtext, x, falpha;

			falpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
			falpha += falpha.toLowerCase();
			falpha = '0123456789._-+' + falpha;

			newtext = '';
			x = 0;
			while (x < inTxt.length) {
				if (falpha.indexOf(inTxt.substr(x,1)) > -1) {
					newtext += inTxt.substr(x,1);
				}
				x++;
			}
			return newtext.trim();
		};
		self.formatVal = function(inTxt, num) {
			return self.replaceFirst("#", num, inTxt);
		};
		
		self.colorStrToRGB = function(inTxt) {
			var tmp;
			if (inTxt.toLowerCase().indexOf('rgb') > -1) {
				tmp = inTxt.split('(')[1].split(')')[0];
				return {
					r: Number(tmp.split(',')[0]),
					g: Number(tmp.split(',')[1]),
					b: Number(tmp.split(',')[2]),
				};
			} else {
				return {
					r: 0, g: 0, b: 0
				};
			}
		};
		self.rgbToHEX = function(r,g,b) {
			var rgb = b | (g << 8) | (r << 16);
			return '#' + (0x1000000 + rgb).toString(16).slice(1);
		};
		self.hexToRGB = function(hex) {
			var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
			return result ? {
				r: parseInt(result[1], 16),
				g: parseInt(result[2], 16),
				b: parseInt(result[3], 16)
			} : null;
		};
		
		self.normalizeEOL = function(inTxt) {
			var retval = self.replaceAll('\n', '\r\n', inTxt);
			retval = self.replaceAll('\r\r\n', '\r\n', retval);
			retval = self.replaceAll('\r\n\r\n\r\n', '\r\n\r\n', retval);

			return retval;
		};
		self.normalizeTrailingEOL = function(inTxt) {
			var retval = inTxt;
			while (retval.right(2) == '\r\n') {
				retval = retval.left(retval.length-2);
			}
			retval = retval + '\r\n';

			return retval;
		};
		self.formatJSON = function(inTxt, blSkipComma) {
			var arr, retval = self.replaceAll('\r\n', '\n', inTxt);
			var ary = [], tab = [];
			
			if (!blSkipComma) {
				['",'].forEach(function(it) {
					retval = self.replaceAll(it, it + '\n', retval);
				});
			}
			['}'].forEach(function(it) {
				retval = self.replaceAll(it, '\n' + it, retval);
			});
			
			ary = ['},'];
			if (!blSkipComma) { ary.push('],'); }
			ary.forEach(function(it) {
				retval = self.replaceAll(it, it + '\n', retval);
			});
			
			ary = ['{"', '["', '[{', '}]', '{}', '[]'];
			if (!blSkipComma) { ary.unshift(',"'); }
			ary.forEach(function(it) {
				retval = self.replaceAll(it, it.split('')[0] + '\n' + it.split('')[1], retval);
			});
			retval = self.replaceAll('":', '": ', retval);
			
			arr = retval.split('\n');
			arr.forEach(function(ln, idx, ary) {
				if (['},', '],'].indexOf(ln.right(2)) > -1) { tab.pop(); }
				if (['}', ']'].indexOf(ln.right(1)) > -1) { tab.pop(); }
				ary[idx] = tab.join('') + ln;
				if (['{', '['].indexOf(ln.right(1)) > -1) { tab.push('\t'); }
			});

			return arr.join('\r\n');
		};
	};

	Strings.prototype.type = function () {
		return "Strings";
	};
	Strings.prototype.toDto = function () {
		return { };
	};
	return Strings;
});

// TODO: Analysis @ 8/9/2017 8:26AM