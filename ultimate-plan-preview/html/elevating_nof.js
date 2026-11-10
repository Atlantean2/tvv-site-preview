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
	"NavigationButton7" : { image: "../assets/images/autogen/Managing_Np_Regular.png", rollover: "../assets/images/autogen/Managing_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton8" : { image: "../assets/images/autogen/Atomization_Np_Regular.png", rollover: "../assets/images/autogen/Atomization_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton9" : { image: "../assets/images/autogen/Visioneering_Np_Regular.png", rollover: "../assets/images/autogen/Visioneering_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton10" : { image: "../assets/images/autogen/Competing_Np_Regular.png", rollover: "../assets/images/autogen/Competing_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton11" : { image: "../assets/images/autogen/Compelling_Np_Regular.png", rollover: "../assets/images/autogen/Compelling_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton12" : { image: "../assets/images/autogen/Winning_Np_Regular.png", rollover: "../assets/images/autogen/Winning_NRp_RegularOver.png", w: 152, h: 41 }
};

$(document).ready(function(){
	$.fn.nofNavBarOptions({ navBarId: "NavigationBar3", rollover: true, autoClose: false });
	$("#NavigationBar3").nofNavBar({isMain: true, orientation: "horizontal" });
	$("#NavigationBar3 ul").hide();
});


ButtonsImageMapping["NavigationBar2"] = {
	"NavigationButton13" : { image: "../assets/images/autogen/Home_Np_Regular_1.png", rollover: "../assets/images/autogen/Home_NRp_RegularOver_1.png", w: 152, h: 41 },
	"NavigationButton14" : { image: "../assets/images/autogen/Elevating_Hp_Highlighted_1.png", rollover: "../assets/images/autogen/Elevating_HRp_HighlightedOver_1.png", w: 152, h: 41 },
	"NavigationButton15" : { image: "../assets/images/autogen/Visioneering_Np_Regular_1.png", rollover: "../assets/images/autogen/Visioneering_NRp_RegularOver_1.png", w: 152, h: 41 },
	"NavigationButton16" : { image: "../assets/images/autogen/Compelling_Np_Regular_1.png", rollover: "../assets/images/autogen/Compelling_NRp_RegularOver_1.png", w: 152, h: 41 },
	"NavigationButton17" : { image: "../assets/images/autogen/Entertaining_Np_Regular_1.png", rollover: "../assets/images/autogen/Entertaining_NRp_RegularOver_1.png", w: 152, h: 41 },
	"NavigationButton18" : { image: "../assets/images/autogen/Persuading_Np_Regular_1.png", rollover: "../assets/images/autogen/Persuading_NRp_RegularOver_1.png", w: 152, h: 41 }
};

$(document).ready(function(){
	$.fn.nofNavBarOptions({ navBarId: "NavigationBar2", rollover: true, autoClose: false });
	$("#NavigationBar2").nofNavBar({isMain: true, orientation: "horizontal" });
	$("#NavigationBar2 ul").hide();
});


// End Navigation Bars

