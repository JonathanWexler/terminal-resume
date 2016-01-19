$(document).ready(function(){
    var command = "JonathanWexler$ ";
    var clear = {93: false, 75: false};

    $('#text').text(command);

    $('body').hide();
    $('body').fadeIn(1000);
    $(window).focus();

    $(window).keydown(function(e) {
        // Check to see if keys are in clear code map
        if (e.keyCode in clear) {
            clear[e.keyCode] = true;
            if (clear[93] && clear[75]) {
                $('#window').html("<span id='exit'></span> <span id='minimize'></span><span id='expand'></span><span id='text'></span><span class='blinking-cursor'>|</span>");
            }
        }
            if (e.keyCode == 13) {
                console.log(command.slice(16));
            // if (command.slice(16).trim() == 'ls') {
                // alert("LSed");
                // $('#text').prepend("<span style='color:blue; font-size: 40px;'>JonathanWexler$ </span>");
                $('#window').prepend("<span class='test'> JonathanWexler$ </span><br/>");
            // };
        };
        // console.log("KeyCode is");
        console.log(e.keyCode);

        if (e.keyCode == 8 && command.length > 16) {
            command = command.slice(0, -1);
        } else {
         if (command.length <= 48) {
            console.log(e.keyCode)
            command += String.fromCharCode(e.which).toLowerCase();
        } else{
            $('#text').fadeIn(10).fadeOut(100).fadeIn(10).fadeOut(100).fadeIn(10);
        };
    };

        $('#text').text(command);
    }).keyup(function(e) {
        // When key is lifted, clear it in code map
        if (e.keyCode in clear) {
            clear[e.keyCode] = false;
        }
    });


});