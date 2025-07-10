		/**
		* Build a router to parse messages coming to
		* this applications PostBox.
		*
		* version: 5.0
		**/
		switch (in_msg.msg) {
			case 'ping':
				alert("<<WEB.NAMESPACE>> received ping sent from: " + in_msg.from);
				break;
				
			default:
		}
	