$(function() {
	$('div.nof-positioning').each(function(i, obj) {
		var jObj = $(obj);
		var paddingTop = jObj.css('margin-top');
		jObj.css({
			'margin-top'  : '0px',
			'padding-top' : paddingTop
		});
	})
	$('br').each(function(i, obj) {
		var jObj = $(obj);
		if(jObj.css('line-height') == '0px')
			jObj.css('display', 'none');
	});
});