function searchForm(){
	$('#textsearch').change(function(e) {
		input = $(this);
    	if ( input.val().length > 2 ){
    		input.keypress(function(e) {
    			if(e.which == 13 && input.val().length > 2 ) {
			        search(input);
			    }
    		});
    		$('#searched').off();
		    $('#searched').click( function(){
		        search(input);
		    });
    	} else {
    		$('#searched').off();
    	}
	});
}

function search(input){
	$('#result_search').fadeOut('slow', function() {
		$('#result_search').html('');
		list = new Array();
		abc = new Array();
		items = '';
		$.getJSON( "books-schema.json", function( response ) {
			list = (response.data).map(function(i) { return i.title; });
			abc = list.filter(function(i) {
				a = i.toLowerCase();
				b = input.val().toLowerCase();
				if ( a.indexOf(b)  !== -1 ){
					return '<a href="#">' + i + '</a>';
				}
			});
			console.log("abc", abc);
			$.each( abc, function( idx, val ) {
				if ( idx < 9 ){
					console.log("idx, val", idx, val);
					items += "<a href='#'>" + val + "</a>";					
				}
			});
			$('#result_search').html(items);
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

