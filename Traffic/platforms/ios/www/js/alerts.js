function alertDismissed(){
	//Do whatever
}

function fireAlert(tmpMessage){
	navigator.notification.alert(
		tmpMessage,
		alertDismissed,
		'Alert',
		'Dismiss'
		);
}