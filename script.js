$(function(){
	$(".burger").hover(function(i){
		i.preventDefault();
		$(".burger").toggleClass("middleOpen");
	});
});

$(function(){
	$(".burger").click(function(i){
		i.preventDefault();
		$(".burger").toggleClass("open");
		$(".overlay").toggleClass("open");
		$("header").toggleClass("open");
		$("section").toggleClass("open");
		$("footer").toggleClass("open");
		$("article").toggleClass("open");
	});
});
