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
	"NavigationButton71" : { image: "./assets/images/autogen/Home_Hp_Highlighted_1.png", rollover: "./assets/images/autogen/Home_HRp_HighlightedOver_1.png", w: 152, h: 41 },
	"NavigationButton72" : { image: "./assets/images/autogen/Power-Plan_Np_Regular_1.png", rollover: "./assets/images/autogen/Power-Plan_NRp_RegularOver_1.png", w: 152, h: 41, opening: "bottom", offsetX: 2, offsetY: 41 },
	"NavigationButton77" : { image: "./assets/images/autogen/Team_Ns_Regular.png", rollover: "./assets/images/autogen/Team_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton78" : { image: "./assets/images/autogen/UltimateCredibility_Ns_Regular.png", rollover: "./assets/images/autogen/UltimateCredibility_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton79" : { image: "./assets/images/autogen/Adaptive-Planning_Ns_Regular.png", rollover: "./assets/images/autogen/Adaptive-Planning_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton80" : { image: "./assets/images/autogen/Projects_Ns_Regular.png", rollover: "./assets/images/autogen/Projects_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton81" : { image: "./assets/images/autogen/UltimateFeasibility_Ns_Regular.png", rollover: "./assets/images/autogen/UltimateFeasibility_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton82" : { image: "./assets/images/autogen/Products_Ns_Regular.png", rollover: "./assets/images/autogen/Products_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton83" : { image: "./assets/images/autogen/Ultimate-Markets_Ns_Regular.png", rollover: "./assets/images/autogen/Ultimate-Markets_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton84" : { image: "./assets/images/autogen/Financials_Ns_Regular.png", rollover: "./assets/images/autogen/Financials_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton85" : { image: "./assets/images/autogen/Ultimate-Modeling_Ns_Regular.png", rollover: "./assets/images/autogen/Ultimate-Modeling_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton86" : { image: "./assets/images/autogen/Valuation_Ns_Regular.png", rollover: "./assets/images/autogen/Valuation_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton87" : { image: "./assets/images/autogen/Accelerants_Ns_Regular.png", rollover: "./assets/images/autogen/Accelerants_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton88" : { image: "./assets/images/autogen/Glossary_Ns_Regular.png", rollover: "./assets/images/autogen/Glossary_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton89" : { image: "./assets/images/autogen/What-Works_Ns_Regular.png", rollover: "./assets/images/autogen/What-Works_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton90" : { image: "./assets/images/autogen/What-Fails_Ns_Regular.png", rollover: "./assets/images/autogen/What-Fails_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton73" : { image: "./assets/images/autogen/Power-Points_Np_Regular_1.png", rollover: "./assets/images/autogen/Power-Points_NRp_RegularOver_1.png", w: 152, h: 41, opening: "bottom", offsetX: 2, offsetY: 41 },
	"NavigationButton91" : { image: "./assets/images/autogen/Mnemonics_Ns_Regular.png", rollover: "./assets/images/autogen/Mnemonics_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton92" : { image: "./assets/images/autogen/Power-Words_Ns_Regular.png", rollover: "./assets/images/autogen/Power-Words_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton93" : { image: "./assets/images/autogen/Vision_Ns_Regular.png", rollover: "./assets/images/autogen/Vision_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton94" : { image: "./assets/images/autogen/Power-Charts_Ns_Regular.png", rollover: "./assets/images/autogen/Power-Charts_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton95" : { image: "./assets/images/autogen/Execution_Ns_Regular.png", rollover: "./assets/images/autogen/Execution_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton96" : { image: "./assets/images/autogen/Power-Gantts_Ns_Regular.png", rollover: "./assets/images/autogen/Power-Gantts_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton97" : { image: "./assets/images/autogen/People_Ns_Regular.png", rollover: "./assets/images/autogen/People_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton98" : { image: "./assets/images/autogen/Competition_Ns_Regular.png", rollover: "./assets/images/autogen/Competition_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton99" : { image: "./assets/images/autogen/Business-Models_Ns_Regular.png", rollover: "./assets/images/autogen/Business-Models_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton100" : { image: "./assets/images/autogen/Leverage_Ns_Regular.png", rollover: "./assets/images/autogen/Leverage_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton74" : { image: "./assets/images/autogen/Power-Vision_Np_Regular_1.png", rollover: "./assets/images/autogen/Power-Vision_NRp_RegularOver_1.png", w: 152, h: 41, opening: "bottom", offsetX: 2, offsetY: 41 },
	"NavigationButton101" : { image: "./assets/images/autogen/Elevating_Ns_Regular.png", rollover: "./assets/images/autogen/Elevating_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton102" : { image: "./assets/images/autogen/Excelling_Ns_Regular.png", rollover: "./assets/images/autogen/Excelling_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton103" : { image: "./assets/images/autogen/Visioneering_Ns_Regular.png", rollover: "./assets/images/autogen/Visioneering_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton104" : { image: "./assets/images/autogen/Imaging_Ns_Regular.png", rollover: "./assets/images/autogen/Imaging_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton105" : { image: "./assets/images/autogen/Compelling_Ns_Regular.png", rollover: "./assets/images/autogen/Compelling_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton106" : { image: "./assets/images/autogen/Leading_Ns_Regular.png", rollover: "./assets/images/autogen/Leading_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton107" : { image: "./assets/images/autogen/Entertaining_Ns_Regular.png", rollover: "./assets/images/autogen/Entertaining_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton108" : { image: "./assets/images/autogen/Bonding_Ns_Regular.png", rollover: "./assets/images/autogen/Bonding_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton109" : { image: "./assets/images/autogen/Persuading_Ns_Regular.png", rollover: "./assets/images/autogen/Persuading_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton110" : { image: "./assets/images/autogen/Branding_Ns_Regular.png", rollover: "./assets/images/autogen/Branding_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton75" : { image: "./assets/images/autogen/Power-Strategy_Np_Regular_1.png", rollover: "./assets/images/autogen/Power-Strategy_NRp_RegularOver_1.png", w: 152, h: 41, opening: "bottom", offsetX: 2, offsetY: 41 },
	"NavigationButton111" : { image: "./assets/images/autogen/Genius_Ns_Regular.png", rollover: "./assets/images/autogen/Genius_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton112" : { image: "./assets/images/autogen/Idea-Power_Ns_Regular.png", rollover: "./assets/images/autogen/Idea-Power_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton113" : { image: "./assets/images/autogen/IP_Ns_Regular.png", rollover: "./assets/images/autogen/IP_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton114" : { image: "./assets/images/autogen/Management_Ns_Regular.png", rollover: "./assets/images/autogen/Management_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton115" : { image: "./assets/images/autogen/Leader-Power_Ns_Regular.png", rollover: "./assets/images/autogen/Leader-Power_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton116" : { image: "./assets/images/autogen/Directors_Ns_Regular.png", rollover: "./assets/images/autogen/Directors_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton117" : { image: "./assets/images/autogen/Architecting_Ns_Regular.png", rollover: "./assets/images/autogen/Architecting_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton118" : { image: "./assets/images/autogen/Advisor-Power_Ns_Regular.png", rollover: "./assets/images/autogen/Advisor-Power_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton119" : { image: "./assets/images/autogen/Advisors_Ns_Regular.png", rollover: "./assets/images/autogen/Advisors_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton120" : { image: "./assets/images/autogen/Partners_Ns_Regular.png", rollover: "./assets/images/autogen/Partners_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton121" : { image: "./assets/images/autogen/Market-Power_Ns_Regular.png", rollover: "./assets/images/autogen/Market-Power_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton122" : { image: "./assets/images/autogen/Channels_Ns_Regular.png", rollover: "./assets/images/autogen/Channels_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton123" : { image: "./assets/images/autogen/Owners_Ns_Regular.png", rollover: "./assets/images/autogen/Owners_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton124" : { image: "./assets/images/autogen/Investor-Power_Ns_Regular.png", rollover: "./assets/images/autogen/Investor-Power_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton125" : { image: "./assets/images/autogen/Investors_Ns_Regular.png", rollover: "./assets/images/autogen/Investors_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton76" : { image: "./assets/images/autogen/Power-Success_Np_Regular_1.png", rollover: "./assets/images/autogen/Power-Success_NRp_RegularOver_1.png", w: 152, h: 41, opening: "bottom", offsetX: 2, offsetY: 41 },
	"NavigationButton126" : { image: "./assets/images/autogen/Managing_Ns_Regular.png", rollover: "./assets/images/autogen/Managing_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton127" : { image: "./assets/images/autogen/Operations_Ns_Regular.png", rollover: "./assets/images/autogen/Operations_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton128" : { image: "./assets/images/autogen/Supply-Chain_Ns_Regular.png", rollover: "./assets/images/autogen/Supply-Chain_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton129" : { image: "./assets/images/autogen/Selling_Ns_Regular.png", rollover: "./assets/images/autogen/Selling_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton130" : { image: "./assets/images/autogen/Ultimate-Sale_Ns_Regular.png", rollover: "./assets/images/autogen/Ultimate-Sale_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton131" : { image: "./assets/images/autogen/Ultimate-PR_Ns_Regular.png", rollover: "./assets/images/autogen/Ultimate-PR_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton132" : { image: "./assets/images/autogen/Analytics_Ns_Regular.png", rollover: "./assets/images/autogen/Analytics_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton133" : { image: "./assets/images/autogen/Atomization_Ns_Regular.png", rollover: "./assets/images/autogen/Atomization_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton134" : { image: "./assets/images/autogen/Conceptualization_Ns_Regular.png", rollover: "./assets/images/autogen/Conceptualization_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton135" : { image: "./assets/images/autogen/Marketing_Ns_Regular.png", rollover: "./assets/images/autogen/Marketing_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton136" : { image: "./assets/images/autogen/Mktg-Tech_Ns_Regular.png", rollover: "./assets/images/autogen/Mktg-Tech_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton137" : { image: "./assets/images/autogen/MolecularEconomy_Ns_Regular.png", rollover: "./assets/images/autogen/MolecularEconomy_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton138" : { image: "./assets/images/autogen/Winning_Ns_Regular.png", rollover: "./assets/images/autogen/Winning_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton139" : { image: "./assets/images/autogen/Competing_Ns_Regular.png", rollover: "./assets/images/autogen/Competing_NRs_RegularOver.png", w: 150, h: 25 },
	"NavigationButton140" : { image: "./assets/images/autogen/Killing-It_Ns_Regular.png", rollover: "./assets/images/autogen/Killing-It_NRs_RegularOver.png", w: 150, h: 25 }
};

$(document).ready(function(){
	$.fn.nofNavBarOptions({ navBarId: "NavigationBar2", rollover: true, autoClose: false });
	$("#NavigationBar2").nofNavBar({isMain: true, orientation: "horizontal" });
	$("#NavigationBar2_1").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 150, offsetY: 0 });
	$("#NavigationBar2_2").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 150, offsetY: 0 });
	$("#NavigationBar2_3").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 150, offsetY: 0 });
	$("#NavigationBar2_4").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 150, offsetY: 0 });
	$("#NavigationBar2_5").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 150, offsetY: 0 });
	$("#NavigationBar2_6").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 150, offsetY: 0 });
	$("#NavigationBar2_7").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 150, offsetY: 0 });
	$("#NavigationBar2_8").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 150, offsetY: 0 });
	$("#NavigationBar2_9").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 150, offsetY: 0 });
	$("#NavigationBar2_10").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 150, offsetY: 0 });
	$("#NavigationBar2_11").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 150, offsetY: 0 });
	$("#NavigationBar2_12").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 150, offsetY: 0 });
	$("#NavigationBar2_13").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 150, offsetY: 0 });
	$("#NavigationBar2_14").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 150, offsetY: 0 });
	$("#NavigationBar2_15").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 150, offsetY: 0 });
	$("#NavigationBar2_16").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 150, offsetY: 0 });
	$("#NavigationBar2_17").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 150, offsetY: 0 });
	$("#NavigationBar2_18").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 150, offsetY: 0 });
	$("#NavigationBar2_19").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 150, offsetY: 0 });
	$("#NavigationBar2_20").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 150, offsetY: 0 });
	$("#NavigationBar2_21").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 150, offsetY: 0 });
	$("#NavigationBar2_22").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 150, offsetY: 0 });
	$("#NavigationBar2_23").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 150, offsetY: 0 });
	$("#NavigationBar2_24").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 150, offsetY: 0 });
	$("#NavigationBar2_25").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 150, offsetY: 0 });
	$("#NavigationBar2_26").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 150, offsetY: 0 });
	$("#NavigationBar2_27").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 150, offsetY: 0 });
	$("#NavigationBar2_28").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 150, offsetY: 0 });
	$("#NavigationBar2_29").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 150, offsetY: 0 });
	$("#NavigationBar2_30").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 150, offsetY: 0 });
	$("#NavigationBar2_31").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 150, offsetY: 0 });
	$("#NavigationBar2_32").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 150, offsetY: 0 });
	$("#NavigationBar2_33").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 150, offsetY: 0 });
	$("#NavigationBar2_34").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 150, offsetY: 0 });
	$("#NavigationBar2_35").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 150, offsetY: 0 });
	$("#NavigationBar2_36").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 150, offsetY: 0 });
	$("#NavigationBar2_37").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 150, offsetY: 0 });
	$("#NavigationBar2_38").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 150, offsetY: 0 });
	$("#NavigationBar2_39").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 150, offsetY: 0 });
	$("#NavigationBar2_40").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 150, offsetY: 0 });
	$("#NavigationBar2_41").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 150, offsetY: 0 });
	$("#NavigationBar2_42").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 150, offsetY: 0 });
	$("#NavigationBar2_43").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 150, offsetY: 0 });
	$("#NavigationBar2 ul").hide();
});


ButtonsImageMapping["NavigationBar3"] = {
	"NavigationButton1" : { image: "./assets/images/autogen/Power-Plan_Np_Regular.png", rollover: "./assets/images/autogen/Power-Plan_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton2" : { image: "./assets/images/autogen/Team_Np_Regular.png", rollover: "./assets/images/autogen/Team_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton3" : { image: "./assets/images/autogen/UltimateCredibility_Np_Regular.png", rollover: "./assets/images/autogen/UltimateCredibility_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton4" : { image: "./assets/images/autogen/Adaptive-Planning_Np_Regular.png", rollover: "./assets/images/autogen/Adaptive-Planning_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton5" : { image: "./assets/images/autogen/UltimateFeasibility_Np_Regular.png", rollover: "./assets/images/autogen/UltimateFeasibility_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton6" : { image: "./assets/images/autogen/Winning_Np_Regular.png", rollover: "./assets/images/autogen/Winning_NRp_RegularOver.png", w: 152, h: 41 }
};

$(document).ready(function(){
	$.fn.nofNavBarOptions({ navBarId: "NavigationBar3", rollover: true, autoClose: false });
	$("#NavigationBar3").nofNavBar({isMain: true, orientation: "horizontal" });
	$("#NavigationBar3 ul").hide();
});


ButtonsImageMapping["NavigationBar13"] = {
	"NavigationButton7" : { image: "./assets/images/autogen/Products_Np_Regular.png", rollover: "./assets/images/autogen/Products_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton8" : { image: "./assets/images/autogen/Ultimate-Markets_Np_Regular.png", rollover: "./assets/images/autogen/Ultimate-Markets_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton9" : { image: "./assets/images/autogen/Financials_Np_Regular.png", rollover: "./assets/images/autogen/Financials_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton10" : { image: "./assets/images/autogen/Ultimate-Modeling_Np_Regular.png", rollover: "./assets/images/autogen/Ultimate-Modeling_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton11" : { image: "./assets/images/autogen/Valuation_Np_Regular.png", rollover: "./assets/images/autogen/Valuation_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton12" : { image: "./assets/images/autogen/Power-Plan_Np_Regular.png", rollover: "./assets/images/autogen/Power-Plan_NRp_RegularOver.png", w: 152, h: 41 }
};

$(document).ready(function(){
	$.fn.nofNavBarOptions({ navBarId: "NavigationBar13", rollover: true, autoClose: false });
	$("#NavigationBar13").nofNavBar({isMain: true, orientation: "horizontal" });
	$("#NavigationBar13 ul").hide();
});


ButtonsImageMapping["NavigationBar14"] = {
	"NavigationButton13" : { image: "./assets/images/autogen/Power-Points_Np_Regular.png", rollover: "./assets/images/autogen/Power-Points_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton14" : { image: "./assets/images/autogen/Mnemonics_Np_Regular.png", rollover: "./assets/images/autogen/Mnemonics_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton15" : { image: "./assets/images/autogen/Power-Words_Np_Regular.png", rollover: "./assets/images/autogen/Power-Words_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton16" : { image: "./assets/images/autogen/Power-Charts_Np_Regular.png", rollover: "./assets/images/autogen/Power-Charts_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton17" : { image: "./assets/images/autogen/Power-Gantts_Np_Regular.png", rollover: "./assets/images/autogen/Power-Gantts_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton18" : { image: "./assets/images/autogen/Power-Vision_Np_Regular.png", rollover: "./assets/images/autogen/Power-Vision_NRp_RegularOver.png", w: 152, h: 41 }
};

$(document).ready(function(){
	$.fn.nofNavBarOptions({ navBarId: "NavigationBar14", rollover: true, autoClose: false });
	$("#NavigationBar14").nofNavBar({isMain: true, orientation: "horizontal" });
	$("#NavigationBar14 ul").hide();
});


ButtonsImageMapping["NavigationBar15"] = {
	"NavigationButton19" : { image: "./assets/images/autogen/Vision_Np_Regular.png", rollover: "./assets/images/autogen/Vision_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton20" : { image: "./assets/images/autogen/Leader-Power_Np_Regular.png", rollover: "./assets/images/autogen/Leader-Power_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton21" : { image: "./assets/images/autogen/Power-Strategy_Np_Regular.png", rollover: "./assets/images/autogen/Power-Strategy_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton22" : { image: "./assets/images/autogen/Ultimate-Modeling_Np_Regular.png", rollover: "./assets/images/autogen/Ultimate-Modeling_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton23" : { image: "./assets/images/autogen/Ultimate-Markets_Np_Regular.png", rollover: "./assets/images/autogen/Ultimate-Markets_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton24" : { image: "./assets/images/autogen/Execution_Np_Regular.png", rollover: "./assets/images/autogen/Execution_NRp_RegularOver.png", w: 152, h: 41 }
};

$(document).ready(function(){
	$.fn.nofNavBarOptions({ navBarId: "NavigationBar15", rollover: true, autoClose: false });
	$("#NavigationBar15").nofNavBar({isMain: true, orientation: "horizontal" });
	$("#NavigationBar15 ul").hide();
});


ButtonsImageMapping["NavigationBar16"] = {
	"NavigationButton25" : { image: "./assets/images/autogen/Power-Vision_Np_Regular.png", rollover: "./assets/images/autogen/Power-Vision_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton26" : { image: "./assets/images/autogen/Visioneering_Np_Regular.png", rollover: "./assets/images/autogen/Visioneering_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton27" : { image: "./assets/images/autogen/Imaging_Np_Regular.png", rollover: "./assets/images/autogen/Imaging_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton28" : { image: "./assets/images/autogen/Elevating_Np_Regular.png", rollover: "./assets/images/autogen/Elevating_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton29" : { image: "./assets/images/autogen/Excelling_Np_Regular.png", rollover: "./assets/images/autogen/Excelling_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton30" : { image: "./assets/images/autogen/Compelling_Np_Regular.png", rollover: "./assets/images/autogen/Compelling_NRp_RegularOver.png", w: 152, h: 41 }
};

$(document).ready(function(){
	$.fn.nofNavBarOptions({ navBarId: "NavigationBar16", rollover: true, autoClose: false });
	$("#NavigationBar16").nofNavBar({isMain: true, orientation: "horizontal" });
	$("#NavigationBar16 ul").hide();
});


ButtonsImageMapping["NavigationBar4"] = {
	"NavigationButton31" : { image: "./assets/images/autogen/Leading_Np_Regular.png", rollover: "./assets/images/autogen/Leading_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton32" : { image: "./assets/images/autogen/Entertaining_Np_Regular.png", rollover: "./assets/images/autogen/Entertaining_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton33" : { image: "./assets/images/autogen/Bonding_Np_Regular.png", rollover: "./assets/images/autogen/Bonding_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton34" : { image: "./assets/images/autogen/Branding_Np_Regular.png", rollover: "./assets/images/autogen/Branding_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton35" : { image: "./assets/images/autogen/Persuading_Np_Regular.png", rollover: "./assets/images/autogen/Persuading_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton36" : { image: "./assets/images/autogen/Selling_Np_Regular.png", rollover: "./assets/images/autogen/Selling_NRp_RegularOver.png", w: 152, h: 41 }
};

$(document).ready(function(){
	$.fn.nofNavBarOptions({ navBarId: "NavigationBar4", rollover: true, autoClose: false });
	$("#NavigationBar4").nofNavBar({isMain: true, orientation: "horizontal" });
	$("#NavigationBar4 ul").hide();
});


ButtonsImageMapping["NavigationBar5"] = {
	"NavigationButton37" : { image: "./assets/images/autogen/Selling_Np_Regular.png", rollover: "./assets/images/autogen/Selling_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton38" : { image: "./assets/images/autogen/Ultimate-Sale_Np_Regular.png", rollover: "./assets/images/autogen/Ultimate-Sale_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton39" : { image: "./assets/images/autogen/Ultimate-PR_Np_Regular.png", rollover: "./assets/images/autogen/Ultimate-PR_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton40" : { image: "./assets/images/autogen/Analytics_Np_Regular.png", rollover: "./assets/images/autogen/Analytics_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton41" : { image: "./assets/images/autogen/Atomization_Np_Regular.png", rollover: "./assets/images/autogen/Atomization_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton42" : { image: "./assets/images/autogen/Conceptualization_Np_Regular.png", rollover: "./assets/images/autogen/Conceptualization_NRp_RegularOver.png", w: 152, h: 41 }
};

$(document).ready(function(){
	$.fn.nofNavBarOptions({ navBarId: "NavigationBar5", rollover: true, autoClose: false });
	$("#NavigationBar5").nofNavBar({isMain: true, orientation: "horizontal" });
	$("#NavigationBar5 ul").hide();
});


ButtonsImageMapping["NavigationBar6"] = {
	"NavigationButton43" : { image: "./assets/images/autogen/Business-Models_Np_Regular.png", rollover: "./assets/images/autogen/Business-Models_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton44" : { image: "./assets/images/autogen/Leverage_Np_Regular.png", rollover: "./assets/images/autogen/Leverage_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton45" : { image: "./assets/images/autogen/Leading_Np_Regular.png", rollover: "./assets/images/autogen/Leading_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton46" : { image: "./assets/images/autogen/Entertaining_Np_Regular.png", rollover: "./assets/images/autogen/Entertaining_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton47" : { image: "./assets/images/autogen/Bonding_Np_Regular.png", rollover: "./assets/images/autogen/Bonding_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton48" : { image: "./assets/images/autogen/Persuading_Np_Regular.png", rollover: "./assets/images/autogen/Persuading_NRp_RegularOver.png", w: 152, h: 41 }
};

$(document).ready(function(){
	$.fn.nofNavBarOptions({ navBarId: "NavigationBar6", rollover: true, autoClose: false });
	$("#NavigationBar6").nofNavBar({isMain: true, orientation: "horizontal" });
	$("#NavigationBar6 ul").hide();
});


ButtonsImageMapping["NavigationBar7"] = {
	"NavigationButton49" : { image: "./assets/images/autogen/Power-Strategy_Np_Regular.png", rollover: "./assets/images/autogen/Power-Strategy_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton50" : { image: "./assets/images/autogen/Genius_Np_Regular.png", rollover: "./assets/images/autogen/Genius_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton51" : { image: "./assets/images/autogen/Idea-Power_Np_Regular.png", rollover: "./assets/images/autogen/Idea-Power_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton52" : { image: "./assets/images/autogen/IP_Np_Regular.png", rollover: "./assets/images/autogen/IP_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton53" : { image: "./assets/images/autogen/Partners_Np_Regular.png", rollover: "./assets/images/autogen/Partners_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton54" : { image: "./assets/images/autogen/Market-Power_Np_Regular.png", rollover: "./assets/images/autogen/Market-Power_NRp_RegularOver.png", w: 152, h: 41 }
};

$(document).ready(function(){
	$.fn.nofNavBarOptions({ navBarId: "NavigationBar7", rollover: true, autoClose: false });
	$("#NavigationBar7").nofNavBar({isMain: true, orientation: "horizontal" });
	$("#NavigationBar7 ul").hide();
});


ButtonsImageMapping["NavigationBar8"] = {
	"NavigationButton55" : { image: "./assets/images/autogen/Managing_Np_Regular.png", rollover: "./assets/images/autogen/Managing_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton56" : { image: "./assets/images/autogen/Projects_Np_Regular.png", rollover: "./assets/images/autogen/Projects_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton57" : { image: "./assets/images/autogen/Operations_Np_Regular.png", rollover: "./assets/images/autogen/Operations_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton58" : { image: "./assets/images/autogen/Competing_Np_Regular.png", rollover: "./assets/images/autogen/Competing_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton59" : { image: "./assets/images/autogen/Winning_Np_Regular.png", rollover: "./assets/images/autogen/Winning_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton60" : { image: "./assets/images/autogen/Killing-It_Np_Regular.png", rollover: "./assets/images/autogen/Killing-It_NRp_RegularOver.png", w: 152, h: 41 }
};

$(document).ready(function(){
	$.fn.nofNavBarOptions({ navBarId: "NavigationBar8", rollover: true, autoClose: false });
	$("#NavigationBar8").nofNavBar({isMain: true, orientation: "horizontal" });
	$("#NavigationBar8 ul").hide();
});


ButtonsImageMapping["NavigationBar11"] = {
	"NavigationButton61" : { image: "./assets/images/autogen/Marketing_Np_Regular.png", rollover: "./assets/images/autogen/Marketing_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton62" : { image: "./assets/images/autogen/Mktg-Tech_Np_Regular.png", rollover: "./assets/images/autogen/Mktg-Tech_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton63" : { image: "./assets/images/autogen/Analytics_Np_Regular.png", rollover: "./assets/images/autogen/Analytics_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton64" : { image: "./assets/images/autogen/Channels_Np_Regular.png", rollover: "./assets/images/autogen/Channels_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton65" : { image: "./assets/images/autogen/MolecularEconomy_Np_Regular.png", rollover: "./assets/images/autogen/MolecularEconomy_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton66" : { image: "./assets/images/autogen/Market-Power_Np_Regular.png", rollover: "./assets/images/autogen/Market-Power_NRp_RegularOver.png", w: 152, h: 41 }
};

$(document).ready(function(){
	$.fn.nofNavBarOptions({ navBarId: "NavigationBar11", rollover: true, autoClose: false });
	$("#NavigationBar11").nofNavBar({isMain: true, orientation: "horizontal" });
	$("#NavigationBar11 ul").hide();
});


ButtonsImageMapping["NavigationBar12"] = {
	"NavigationButton67" : { image: "./assets/images/autogen/Accelerants_Np_Regular.png", rollover: "./assets/images/autogen/Accelerants_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton68" : { image: "./assets/images/autogen/What-Works_Np_Regular.png", rollover: "./assets/images/autogen/What-Works_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton69" : { image: "./assets/images/autogen/What-Fails_Np_Regular.png", rollover: "./assets/images/autogen/What-Fails_NRp_RegularOver.png", w: 152, h: 41 },
	"NavigationButton70" : { image: "./assets/images/autogen/Glossary_Np_Regular.png", rollover: "./assets/images/autogen/Glossary_NRp_RegularOver.png", w: 152, h: 41 }
};

$(document).ready(function(){
	$.fn.nofNavBarOptions({ navBarId: "NavigationBar12", rollover: true, autoClose: false });
	$("#NavigationBar12").nofNavBar({isMain: true, orientation: "horizontal" });
	$("#NavigationBar12 ul").hide();
});


// End Navigation Bars

