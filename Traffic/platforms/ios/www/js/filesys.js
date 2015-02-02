function checkforfile(tmpFileName){
    window.resolveLocalFileSystemURL(cordova.file.dataDirectory + tmpFileName, does_exist, does_not_exist);
}

function does_exist(){
    fireAlert("File Exists");
}

function does_not_exist(){
    fireAlert("File Does Not Exist");
}

function getFile(fileurl, saveas){
    window.plugins.spinnerDialog.show();
    var fileTransfer = new FileTransfer();
    var uri = encodeURI(fileurl);
    var fileURL = cordova.file.dataDirectory + saveas;
    
    fileTransfer.download(
                          uri,
                          fileURL,
                          function(entry) {
                          window.plugins.spinnerDialog.hide();
                          },
                          function(error) {
                          window.plugins.spinnerDialog.hide();
                          fireAlert("Error Code: " + error.code);
                          }
                          );
    
}
