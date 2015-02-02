// afterHomeShow
function afterHomeShow(){
    document.addEventListener("online", wentonline, false);
    document.addEventListener("offline", wentoffline, false);
}
// End afterHomeShow

function beforeSettingsShow(){
    //setDataPath();
}

// The afterSettingsShow function is needed for the Kendo UI to load data after the view is loaded
function afterSettingsShow(){
    $('#txtGEMS').val(localStorage.gems);
    $('#lblUserStatus').text(localStorage.Authorized);
    
    if (localStorage.Authorized != "Authenticated"){
        $('#locationreport').hide();
        $('.km-tabstrip').hide();
    }
    
    $('#lblVersion').text("App Version: " + version_display);
    
}
// End afterSettingsShow function

// afterHotelShow function
function afterHotelShow(){
    setDataPath();
    $('#txtHotelSearch').focus();
    
}
// End afterHotelShow function

function afterDirectoryShow(){
    $('#cmSearch').focus();
}