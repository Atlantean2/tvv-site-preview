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
ButtonsImageMapping["NavigationBar2"] = {
	"NavigationButton1" : { image: "../assets/images/autogen/Home_Np_Regular_1.png", rollover: "../assets/images/autogen/Home_NRp_RegularOver_1.png", w: 152, h: 41 },
	"NavigationButton2" : { image: "../assets/images/autogen/Power-Plan_Hp_Highlighted_1.png", rollover: "../assets/images/autogen/Power-Plan_HRp_HighlightedOver_1.png", w: 152, h: 41 },
	"NavigationButton3" : { image: "../assets/images/autogen/Power-Points_Np_Regular_1.png", rollover: "../assets/images/autogen/Power-Points_NRp_RegularOver_1.png", w: 152, h: 41 },
	"NavigationButton4" : { image: "../assets/images/autogen/Power-Vision_Np_Regular_1.png", rollover: "../assets/images/autogen/Power-Vision_NRp_RegularOver_1.png", w: 152, h: 41 },
	"NavigationButton5" : { image: "../assets/images/autogen/Power-Strategy_Np_Regular_1.png", rollover: "../assets/images/autogen/Power-Strategy_NRp_RegularOver_1.png", w: 152, h: 41 },
	"NavigationButton6" : { image: "../assets/images/autogen/Power-Success_Np_Regular_1.png", rollover: "../assets/images/autogen/Power-Success_NRp_RegularOver_1.png", w: 152, h: 41 }
};

$(document).ready(function(){
	$.fn.nofNavBarOptions({ navBarId: "NavigationBar2", rollover: true, autoClose: false });
	$("#NavigationBar2").nofNavBar({isMain: true, orientation: "horizontal" });
	$("#NavigationBar2 ul").hide();
});


// End Navigation Bars

