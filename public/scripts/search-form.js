function searchForm(){
	$('#textsearch').change(function(e) {
		input = $(this);
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
	console.log( input.val() );
	// var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });

	// console.log(even);

	// $.getJSON( "books-schema.json", function( response ) {
	// 	// console.log("data", response.data);

	// 	// var even =  _.findWhere(response.data, {title: input.val()});
		
	// 	// console.log(even);


	// // 	// var items = [];
	// // 	// $.each( data, function( key, val ) {
	// // 	// items.push( "<li id='" + key + "'>" + val + "</li>" );
	// // 	// });

	// // 	// $( "<ul/>", {
	// // 	// "class": "my-new-list",
	// // 	// html: items.join( "" )
	// // 	// }).appendTo( "body" );
	// });

	// new Awesomplete(input, {
	// 	minChars: 3,
	// 	maxItems: 7,
	// });
}

var ajax = new XMLHttpRequest();
ajax.open("GET", "books-schema.json", true);
ajax.onload = function( response) {
	var json = JSON.parse(ajax.responseText);
	console.log("json", json);
	var list = (json.data).map(function(i) { return i.title; });
	console.log("list", list);
	new Awesomplete(document.querySelector("#textsearch"),{
		minChars: 3,
		maxItems: 7,
		list: list
	});
};
ajax.send();

