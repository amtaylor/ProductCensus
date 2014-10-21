/* Activate tooltips */

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

/* Show Tim Ferriss / Amit Taylor sample profile */

$(function () {

	$(".profile-layout").css("border-top", "2px black dotted");
	/* $(".profile-layout").hide(); */
	$(".featured-stacks-side a:first-of-type").click(function() {
		$(".profile-layout").show();	
	});
});




/* replicate first graph 3 times */

$(function () {

	$(".table-side li:first-of-type").clone().appendTo(".table-side ul");
	$(".table-side li:first-of-type").clone().appendTo(".table-side ul");

});
