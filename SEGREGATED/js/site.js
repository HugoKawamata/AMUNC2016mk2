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

			   $(".navbar > .container-fluid").css({ //Resize navbar container
			  		"min-width": "0px"
			   }); 
			   $(".navbar-collapse > .navbar-nav").css({ //Resize navbar elements
				   	"width": "auto",
				   	"min-width": "0px"
				});
			   $(".navbar-collapse > .navbar-nav > li").css({ //Resize navbar elements
			   		"width": "auto",
			   		"min-width": "0px",
			   		"overflow": "visible"
			   });
			   $(".dropdown-menu").css({
			   		"min-width": "auto",
			   });
			   



			}
			else {
			   $(".logo-container").show();
			   
			   $(".navbar > .container-fluid").css({ //Resize navbar container
			  		"min-width": "1003px"
			   }); 
			   $(".navbar-collapse > .navbar-nav").css({ //Resize navbar elements
				   	"width": "80%",
				   	"min-width": "795px"
				});
			   $(".navbar-collapse > .navbar-nav > li").css({ //Resize navbar elements
			   		"width": "20%",
			   		"min-width": "159px",
			   		"overflow": "visible"
			   	});
			   $(".dropdown-menu").css({ //The dropdown menu's min width is the width of the parent li
			   		"min-width": "100%",
			   });
			   
			   
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