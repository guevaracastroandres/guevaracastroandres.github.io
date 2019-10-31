function windchill(){
    
    var windspeed = parseFloat(document.getElementById('widnspeed').value);
    var temperature =parseFloat(document.getElementById('temperature').value);
    
    if( windspeed > 3 && temperature < 50){
    
        var windPow = Math.pow(windspeed, 0.16)
    
        var output1 = 35.74 + (0.6215 * temperature) - (35.75 * windPow) + (0.4275 * temperature *windPow);
    
        var output = output1.toFixed(2);
    
    }
    
    else {
        var output = "N/A"
    }
    
    
    document.getElementById('output').innerHTML = " " + output; 
    }