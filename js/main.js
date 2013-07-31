/* 	

*				<コ:彡

*	digital library services / university of kentucky
	meta data guidelines
* 	License: MIT

* 	(c) 2013
 	nabil kashyap (nabilk.com)
*

*/


$.markdownCollapse = function() {

	var elements = $('h4');
	var titles = [];
	var classLabels = []

	$.each(elements, function() {
		var title = this.innerHTML.slice(0,-4);
		titles.push(title);
		var label = title.split(' ').join('-').toLowerCase();
		classLabels.push(label);
	})

	$('h4').replaceWith(function(i,val){

		return '<div class="accordion-heading"><h4><a>+ ' + this.innerHTML + '</h4></div>';

	});

	$('h4 > a').addClass('accordion-toggle')
		.attr('data-toggle', 'collapse')
		.attr('href', function(i,val){ return '#' + classLabels[i]; });

	$('div + p').replaceWith(function(i,val){

		return '<div class="accordion-body"><p>' + this.innerHTML + '</p></div>';

	});

	$('div.accordion-body').addClass('collapse')
		.attr('id', function(i,val){ return classLabels[i]; });

}

$.markdownCollapse();