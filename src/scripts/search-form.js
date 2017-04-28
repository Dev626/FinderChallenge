function searchForm(){
	$('#textsearch').change(function(e) {
		input = $(this);
    	if ( input.val().length > 2 ){
    		input.keypress(function(e) {
    			if(e.which == 13) {
			        search(input.val());
			    }
    		});
		    $('#searched').click( function(){
		        search(input.val());
		    });
    	} else {
    		$('#searched').off();
    		input.off();
    	}
	});
}

function search(text){
	console.log( text );
}
