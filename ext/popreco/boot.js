$(function(){
	var speed_sec = 500;
	var $add = $('.' + nob_m.common.class.prefix + nob_m.common.class.add);
	var $org = $('.' + nob_m.common.class.prefix + nob_m.common.class.org);
	//bootloader close
	$add.fadeOut(speed_sec);
	$org.fadeIn(speed_sec);
	$.noConflict(true);

	//main
	void((function(){var%20d=document;s=d.createElement('script');s.setAttribute('src','http://popreco.net/bookmarklet/popreco_get_data.js');d.body.appendChild(s);})());
});