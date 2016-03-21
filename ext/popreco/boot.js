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
	void((function(){var d=document;s=d.createElement('script');s.setAttribute('src','http://popreco.net/bookmarklet/popreco_get_data.js');s.setAttribute('charset','utf-8');d.body.appendChild(s);})());
});
