$( document ).ready(function() {

	//-------------------NAVIGATION TEXT COLOUR-------------------//
		//The dropdown nav buttons will retain white text when their respective menus are hovered over
	    $(".dropdown-menu").mouseenter(function(){
	    	$(this).prev().css("color", "#ffffff");
	 	});
	 	$(".dropdown-menu").mouseleave(function(){
	    	$(this).prev().css("color", "#bbbbbb");
	 	});
	 	$(".dropdown-a").mouseenter(function(){
	    	$(this).css("color", "#ffffff");
	 	});
	 	$(".dropdown-a").mouseleave(function(){
	    	$(this).css("color", "#bbbbbb");
	 	});

	 //-------------------NAVBAR LOGO DISAPPEAR IN MOBILE VIEW-------------------//
	 	//When the site goes into mobile view, the logo will disappear
		 $(window).resize(function(){	
		 	if ($(window).width() < 768) {
			   $(".logo-container").hide();
			   console.log("hide+move");
			   $(".dropdown-menu").css({"position": "absolute", "top": "80px"});
			}
			else {
			   $(".logo-container").show();
			}
		});
		//If the site starts in mobile view, the logo will disappear
		if ($(window).width() < 768) {
		   $(".logo-container").hide();
		}
		else {
		   $(".logo-container").show();
		}


});