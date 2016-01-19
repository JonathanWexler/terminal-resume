$(document).ready(function(){
    var command = "JonathanWexler$ ";
    $('#text').text(command);

    $('body').hide();
    $('body').fadeIn(1000);
    $(window).focus();

    $(window).keydown(function(e) {
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

        // alert('hi');
        $('#text').text(command);
    });


    var map = {68: false, 69: false, 86: false};
    $(document).keydown(function(e) {
        if (e.keyCode in map) {
            map[e.keyCode] = true;
            if (map[68] && map[69] && map[86]) {
            // FIRE EVENT
        }
    }
    }).keyup(function(e) {
        if (e.keyCode in map) {
            map[e.keyCode] = false;
        }
    });
});