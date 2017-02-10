$(window).scroll(function(){
	var n = $(".menu").position().top;
	var m = $(window).scrollTop();
	console.log(n+" "+m);

	if(n<=m){

	$("#m").addClass("navbar-fixed-top");
		
	}
	else{
		$("#m").removeClass("navbar-fixed-top");
	}
});