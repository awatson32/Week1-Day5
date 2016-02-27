$(document).ready(function() {
    var sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    var lines = [];
    var lineCount = 0;
    $(sentences).each(function() {
        var letters = this.split('');
        var line = $('<div class="letters"></div>');
		$(letters).each(function() {
			var letter = this;
			if (letter == ' ') {
				letter = '&nbsp;';
			}
			line.append($('<div class="letter"> </div>').html(letter));
		});
		lines.push(line);
	});
    
    $('#words').append(lines[lineCount]);
    
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
        var divKey = event.charCode || event.keyCode;        
        var divTextChar = String.fromCharCode(divKey);
        var divText = $(".letter").first().text();
          
        event.preventDefault();
        
        if (divKey === divText || (divText === '' && divKey === 160)) {
            $('<span class="glyphicon glyphicon-ok"> </span>').appendTo('#words-typed');
        } else {
            $('<span class="glyphicon glyphicon-remove"> </span>').appendTo("#words-typed");
        }
        $(".letter").first().addClass("highlight-box remove-box").removeClass("letter");    
        $('#' + divKey).addClass('highlight');
        if (divText != '') {
            $('#' + divText).addClass('highlight');
        };
        
         
    })
       
});