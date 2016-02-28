$(document).ready(function() {
    var sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    var lines = [];
    var lineCount = 0;
    $('#next-letter').append('t')
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
    
    $(document).keydown(function(e) {
        if(e.which === 16) {
            $('#keyboard-upper-container').show();
            $('#keyboard-lower-container').hide();
        } else if (e.which == 08) {
            e.preventDefault();
        }
    });
    
    //hide keyboard-upper-container on shift keyup
    
    $(document).keyup(function(e) {
        if(e.which === 16) {
            $('#keyboard-lower-container').show();
            $('#keyboard-upper-container').hide();         
        } else {
            $('.key').removeClass('highlight');
            //$('.removeBox').removeClass('highlight-box');
        }
    });
    
    $(document).keypress(function(e) {
        var divKey = e.charCode;        
        var divTextChar = String.fromCharCode(divKey);
        var divText = $('.letter').first().text();
        e.preventDefault();
        $("#" + divKey).addClass("highlight");
        if (divText != '') {
            $('#' + divText).addClass('highlight');
        };
          
        //event.preventDefault();
        
        if (divTextChar === divText || divText.charCodeAt() == 160 && divKey === 32) {
            $('#words-typed').append('<span class="glyphicon glyphicon-ok"> </span>');
            //$('.letter').first().removeClass().addClass('highlightedLetter');
        } else {
            $('#words-typed').append('<span class="glyphicon glyphicon-remove"> </span>');
        }
        $('.letter').first().addClass('highlight-box removeBox').removeClass('letter');
        if ($('.letter').length === 0) {
            $('#words').append(lines[lineCount]);
            $('.removeBox').hide();
            $('#words-typed').empty();
            lineCount++;
        }
        
        var nextLetter = ($('.letter').first().text());
        $('#next-letter').empty().append(nextLetter);
        $('#'+divKey).addClass('highlight');
        $('#'+divTextChar).addClass('highlight');        
    })
    lineCount++;      
});