// Functions used for determining user location
function getLocation(){
    window.plugins.spinnerDialog.show();
    navigator.geolocation.getCurrentPosition(onLocSuccess, onLocError);
}

function onLocSuccess(position) {
    $.post("https://inside.ipapilot.org/api/putloc.aspx?ver=" + version + "&OS=" + OStype,
           {
           gems: "" + localStorage.gems + "",
           latitude: "" + position.coords.latitude + "",
           longitude: "" + position.coords.longitude + "",
           api: "" + localStorage.apiKey + ""
           },
           function(){
           window.plugins.spinnerDialog.hide();
           fireAlert("Location Uploaded Successfully");
           }
           );
    
}

function onLocError(error) {
    window.plugins.spinnerDialog.hide();
    check_location_service();
}
// End Geolocation stuff

// This function is used to determine if location services are enabled
function check_location_service(){
    window.plugins.spinnerDialog.hide();
    fireAlert("Location Services Must Be Enabled");
}
// End checklocation function
