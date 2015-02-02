 // Internet Connection Testing stuff
    function checkConnection() {
        var networkState = navigator.connection.type;

        var states = {};
        states[Connection.UNKNOWN]  = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI]     = 'WiFi connection';
        states[Connection.CELL_2G]  = 'Cell 2G connection';
        states[Connection.CELL_3G]  = 'Cell 3G connection';
        states[Connection.CELL_4G]  = 'Cell 4G connection';
        states[Connection.CELL]     = 'Cell generic connection';
        states[Connection.NONE]     = 'No network connection';

        //return states[networkState];
        if (states[networkState] == 'No network connection'){
          return "Disconnected";
        }  
        else {
          return "Connected";
        }
    }

// The checkforconnection function is needed to check for an active Internet Connection
function checkforconnection(){
  if (checkConnection() != 'Connected'){
    fireAlert("Internet Connection Required");
  }
}
// End checkforconnection function

function wentonline(){
    sessionStorage.connectionstatus = "online";
}
function wentoffline(){
    sessionStorage.connectionstatus = "offline";
}

// End Connection Testing stuff

