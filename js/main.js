/* 	

*				<コ:彡

*	digital library services / university of kentucky
	markdown to bootstrap-friendly table of contents and accordion-friendly markup 
* 	License: MIT

* 	(c) 2013
 	nabil kashyap (nabilk.com)
*

*/


$.markdownCollapse = function() {

	var titles = [];
	var fieldIDs = [];

	$.each($('h4'), function(k,v) {
		var title = $(v).text();
		titles.push(title);
		var label = title.split(' ').join('-').toLowerCase();
		fieldIDs.push(label);
	})

	$('h4').replaceWith(function(i,val){

		return '<div class="accordion-heading"><h4><a>+ ' + this.innerHTML + '</h4></div>';

	});

	$('h4 > a').addClass('accordion-toggle')
		.attr('data-toggle', 'collapse')
		.attr('id', function(i,val){ return fieldIDs[i]; })
		.attr('href', function(i,val){ return '#collapse-' + fieldIDs[i]; });

	$('div + p').replaceWith(function(i,val){

		return '<div class="accordion-body"><p>' + this.innerHTML + '</p></div>';

	});

	$('div.accordion-body').addClass('collapse')
		.attr('id', function(i,val){ return 'collapse-' + fieldIDs[i]; });
		
	$.each($('h2,h3'), function(k,v){
		
		var text = $(v).text();

		var re = new RegExp('\\d\.\\d\\s|\\d\\s');		
		var elementID = text.toLowerCase().trim();
		elementID = elementID.replace(/\d\.\d|\d\s|\:|\+/,'').trim();
		elementID = elementID.replace(/\s/g,'-');
		$(v).attr('id', elementID);
		$('ul.sidenav').append('<li><a>');
		$('ul.sidenav li a').last()
			.attr('href', '#' + elementID)
			.html(text);

	});		

}

$.markdownCollapse();