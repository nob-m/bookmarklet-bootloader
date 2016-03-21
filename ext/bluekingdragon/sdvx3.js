$(function(){
	var speed_sec = 500;
	var $add = $('.' + nob_m.common.class.prefix + nob_m.common.class.add);
	var $org = $('.' + nob_m.common.class.prefix + nob_m.common.class.org);
	//bootloader shutdown
	$add.fadeOut(speed_sec, function(){
		$add.remove();
	});
	$org.fadeIn(speed_sec, function(){
		$org.children().eq(0).unwrap();
	});
	$.noConflict(true);

	//main
	void(!function(d){if(typeof SCORETOOL_DOMAIN!=="undefined"){alert("Scoretool is already running\nReload page and try again");return -1;}SCORETOOL_DOMAIN="http://bluekingdragon.dip.jp/sdvx";var s=d.createElement("script");s.type="text/javascript";s.charset="UTF-8";s.src=SCORETOOL_DOMAIN+"/js/loader.js?ver="+new Date().getTime();d.head.appendChild(s);}(document));
});
