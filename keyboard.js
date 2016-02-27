$(document).ready(function() {
    var sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    //var letter = sentences[];
    
    //hide the keyboard-upper-container on load
    $('#keyboard-upper-container').hide();
    
    //show keyboard-upper-container on shift keydown
    $(document).keydown(function(event) {
        if(event.which === 16) {
            $('#keyboard-upper-container').show();
            $('#keyboard-lower-container').hide();
        }
    });
    
    //hide keyboard-upper-container on shift keyup
    $(document).keyup(function(event) {
        if(event.which === 16) {
            $('#keyboard-lower-container').show();
            $('#keyboard-upper-container').hide();         
        } else {
            $('.key').removeClass('highlight');
        }
    });
    
    $(document).keypress(function(event) {
        var key = event.charCode || event.keyCode;
        var text = String.fromCharCode(key);       
        $('#' + key).addClass('highlight');
        if (text != '') {
            $('#' + text).addClass('highlight');
        };
        
         
    })
       
});