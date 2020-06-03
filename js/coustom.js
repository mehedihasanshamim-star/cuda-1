$(document).ready(function(){
	/*-- progress-bar start --*/
	$(".progress-bar1").loading();


	/*-- isotop-start --*/
	$(".project-filter li").on('click', function() {
		/*-- active-class remove-add --*/
		$(".project-filter li").removeClass('active');
		$(this).addClass('active');
		/*-- active-class remove-add end --*/

		var selector = $(this).attr('data-filter');
		$(".project-list").isotope({
			filter: selector,
		});
	});

	$('.project-list').isotope({

	});
	/*-- isotop-end --*/
});