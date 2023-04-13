$(window).scroll(function() {
	$('.fade-in-text').each(function() {
		var scrollPosition = $(this).offset().top;
		var windowHeight = $(window).height();
		var windowScrollPosition = $(window).scrollTop();

		// Check if the element is within the viewport
		if ((scrollPosition - windowHeight) < windowScrollPosition && (scrollPosition + $(this).outerHeight()) > windowScrollPosition) {
			$(this).css('opacity', '1');
		} else {
			$(this).css('opacity', '0');
		}
	});
});