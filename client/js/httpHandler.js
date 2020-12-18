(function() {

  const serverUrl = 'http://127.0.0.1:3000';


  //
  // TODO: build the swim command fetcher here
  //

  var executeSwimCommand = () => {
    $.ajax({
      type: 'GET',
      url: serverUrl,
      success: (data) => {
        if (data) { SwimTeam.move(data) } else { console.log('queue is empty') }
      },
      error: (error) => console.log('error -> ', error)
    });
  };
setInterval( () => executeSwimCommand(), 4000 )


  var getBackgroundImage = () => {

    // make a get request to the server
    // specify that we want a file back
    // if we get a file back
    // update background image
    // if we dont get a file back
    // respond with 404
  }

  /////////////////////////////////////////////////////////////////////
  // The ajax file uplaoder is provided for your convenience!
  // Note: remember to fix the URL below.
  /////////////////////////////////////////////////////////////////////


  // make a get request to the server

  const ajaxFileUplaod = (file) => {
    var formData = new FormData();
    formData.append('file', file);
    $.ajax({
      type: 'POST',
      data: formData,
      url: serverUrl,
      cache: false,
      contentType: false,
      processData: false,
      success: (data) => {

        console.log('data -> ', data)
        // reload the page
        window.location = window.location.href;
      }
    });
  };

  $('form').on('submit', function(e) {
    e.preventDefault();

    var form = $('form .file')[0];
    if (form.files.length === 0) {
      console.log('No file selected!');
      return;
    }

    var file = form.files[0];
    if (file.type !== 'image/jpeg') {
      console.log('Not a jpg file!');
      return;
    }

    ajaxFileUplaod(file);
  });

})();
