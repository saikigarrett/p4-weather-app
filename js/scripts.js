// Scripts

$.simpleWeather({
    location: 'Spokane',
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather.code);
      
      // Display Data
      $('.temp').text(weather.temp);
      $('.city').text(weather.city);
     
      $('img').attr('src', weather.image);
      
      // Change Icon
      $('i').attr('class', 'icon-' + weather.code )
      
      
      if ( weather.code >= 26 && weather.code <= 30 ) {
        
        console.log('CLOUDY');
        
      }
      
      if ( weather.temp >= 80 ) {
        
        $('body').addClass('hot');
        
      }
      
      // Condition Code
      // Reference Condition Codes
      // https://developer.yahoo.com/weather/documentation.html#codes
      console.log(weather.code);
      
    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look outside.');
    }
  
  });


