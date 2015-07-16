$( document ).ready(function() {

		$(".navbar-toggle").click(function(){
			if ($("#navbar").css("aria-expanded", "true") == true){
				
				console.log("collapse")
				;$("#navbar").collapse("hide");
			};
		});

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
			   $(".logo-container").hide(); //Hide logo
			   $(".navbar > .container-fluid").css({"min-width": "0px"}); //Resize navbar container
			   $(".navbar-collapse > .navbar-nav").css({ //Resize navbar elements
				   	"width": "auto",
				   	"min-width": "0px"
				   });
			   $(".navbar-collapse > .navbar-nav > li").css({ //Resize navbar elements
			   		"width": "auto",
			   		"min-width": "0px",
			   		"overflow": "visible"
			   });

			}
			else {
			   $(".logo-container").show();
			}
		});
		//If the site starts in mobile view, the logo will disappear
		 	if ($(window).width() < 768) {
			   $(".logo-container").hide(); //Hide logo
			   $(".navbar > .container-fluid").css({"min-width": "0px"}); //Resize navbar container
			   $(".navbar-collapse > .navbar-nav").css({ //Resize navbar elements
				   	"width": "auto",
				   	"min-width": "0px"
				   });
			   $(".navbar-collapse > .navbar-nav > li").css({ //Resize navbar elements
			   		"width": "auto",
			   		"min-width": "0px",
			   		"overflow": "visible"
			   });

			}
			else {
			   $(".logo-container").show();
			}
	//-------------------NAVBAR COLLAPSE FIX-------------------//
		


});