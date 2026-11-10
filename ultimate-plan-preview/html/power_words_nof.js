// Begin XHTML adjustment
$(document).ready(function(){
	if (jQuery.browser.msie && jQuery.browser.version.substr(0, 2) == "6.") {
		$(".nof-clearfix").each(function (i) {
			$(this).append("<div style='clear:both'/>");
			$(this).removeClass("nof-clearfix");
		});
	}
	if (jQuery.browser.safari){
		$(".nof-lyr>br:first").each(function () {
			$(this).replaceWith("<div style='height:0px'>&nbsp;</div>");
		});
	}
});

// End XHTML adjustment

// Begin Navigation Bars
var ButtonsImageMapping = [];
ButtonsImageMapping["NavigationBar3"] = {
	"NavigationButton7" : { image: "../assets/images/autogen/Compelling_Np_Regular.png", rollover: "../assets/images/autogen/Compelling_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton8" : { image: "../assets/images/autogen/Selling_Np_Regular.png", rollover: "../assets/images/autogen/Selling_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton9" : { image: "../assets/images/autogen/Visioneering_Np_Regular.png", rollover: "../assets/images/autogen/Visioneering_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton10" : { image: "../assets/images/autogen/Imaging_Np_Regular.png", rollover: "../assets/images/autogen/Imaging_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton11" : { image: "../assets/images/autogen/Winning_Np_Regular.png", rollover: "../assets/images/autogen/Winning_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton12" : { image: "../assets/images/autogen/Ultimate-PR_Np_Regular.png", rollover: "../assets/images/autogen/Ultimate-PR_NRp_RegularOver.png", w: 152, h: 41 }
};

$(document).ready(function(){
	$.fn.nofNavBarOptions({ navBarId: "NavigationBar3", rollover: true, autoClose: false });
	$("#NavigationBar3").nofNavBar({isMain: true, orientation: "horizontal" });
	$("#NavigationBar3 ul").hide();
});


ButtonsImageMapping["NavigationBar2"] = {
	"NavigationButton13" : { image: "../assets/images/autogen/Home_Np_Regular_1.png", rollover: "../assets/images/autogen/Home_NRp_RegularOver_1.png", w: 152, h: 41 },
	"NavigationButton14" : { image: "../assets/images/autogen/Power-Plan_Np_Regular_1.png", rollover: "../assets/images/autogen/Power-Plan_NRp_RegularOver_1.png", w: 152, h: 41 },
	"NavigationButton15" : { image: "../assets/images/autogen/Power-Points_Hp_Highlighted_1.png", rollover: "../assets/images/autogen/Power-Points_HRp_HighlightedOver_1.png", w: 152, h: 41 },
	"NavigationButton16" : { image: "../assets/images/autogen/Power-Vision_Np_Regular_1.png", rollover: "../assets/images/autogen/Power-Vision_NRp_RegularOver_1.png", w: 152, h: 41 },
	"NavigationButton17" : { image: "../assets/images/autogen/Power-Strategy_Np_Regular_1.png", rollover: "../assets/images/autogen/Power-Strategy_NRp_RegularOver_1.png", w: 152, h: 41 },
	"NavigationButton18" : { image: "../assets/images/autogen/Power-Success_Np_Regular_1.png", rollover: "../assets/images/autogen/Power-Success_NRp_RegularOver_1.png", w: 152, h: 41 }
};

$(document).ready(function(){
	$.fn.nofNavBarOptions({ navBarId: "NavigationBar2", rollover: true, autoClose: false });
	$("#NavigationBar2").nofNavBar({isMain: true, orientation: "horizontal" });
	$("#NavigationBar2 ul").hide();
});


// End Navigation Bars

