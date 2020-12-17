(function() {

  const serverUrl = 'http://127.0.0.1:3000';

  function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
  }
  var getRandomDirection = () => {
    var directions = ['left','right','down','up']
    return directions[getRandomNumberBetween(0,3)]
  }
  //
  // TODO: build the swim command fetcher here
  //
  var executeSwimCommand = () => {
    $.ajax({
      type: 'GET',
      // contentType: "application/json",
      url: serverUrl,
      // data: JSON.stringify({key: 'hello'}),
      // dataType: 'json',
      success: (data) => {
        // execute our random swim
        // setInterval(SwimTeam.move(getRandomDirection()), 750)

        setInterval( () => SwimTeam.move(getRandomDirection()),750 )
       // reload the page
       // window.location = window.location.href;
      },
      error: (error) => console.log('error -> ', error)
    });
  };


  // call executeSwimCommand from within setInterval
  // upon success of ajax request pass data into SwimTeam.move()
  // move the random direction logic to the server
  //



  // create a ajax request method
  // on ajax success call back get data
  // data will contain

  executeSwimCommand()
  var getData = () => {
    fetch(serverUrl)
    .then(data => console.log('data -> ', data));
    }

  getData();


  /////////////////////////////////////////////////////////////////////
  // The ajax file uplaoder is provided for your convenience!
  // Note: remember to fix the URL below.
  /////////////////////////////////////////////////////////////////////

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
