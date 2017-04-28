function searchForm(){
	$('#textsearch').change(function(e) {
		input = $(this);
		console.log("input", input);
	    console.log("input.val()", input.val());
	    console.log("input.val().length", input.val().length);
    	if ( input.val().length > 2 ){
    		input.keypress(function(e) {
    			if(e.which == 13) {
			        search(input);
			    }
    		});
		    $('#searched').click( function(){
		        search(input);
		    });
    	} else {
    		$('#searched').off();
    		input.off();
    	}
	});
}

function search(input){
	$('#result_search').fadeOut('slow', function() {
		$('#result_search').html('');
		$.getJSON( "books-schema.json", function( response ) {
			var list = (response.data).map(function(i) { return i.title; });
			var abc = list.filter(function(i) {
				a = i.toLowerCase();
				b = input.val().toLowerCase();
				if ( a.indexOf(b)  !== -1 ){
					return '<a href="#">' + i + '</a>';
				}
			});
			$.each( abc, function( idx, val ) {
				$('#result_search').append("<a href='#'>" + val + "</a>" );
			});
			$('#result_search').show();
		});		
	});;
}

var ajax = new XMLHttpRequest();
ajax.open("GET", "books-schema.json", true);
ajax.onload = function( response) {
	var json = JSON.parse(ajax.responseText);
	var list = (json.data).map(function(i) { return i.title; });
	new Awesomplete(document.querySelector("#textsearch"),{
		minChars: 3,
		maxItems: 7,
		list: list
	});
};
ajax.send();

