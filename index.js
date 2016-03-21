$(function(){
	var speed_sec = 500;
	var list = {
		'now': [],
		'org': [
			//ボタンtxt, js_url, 起動許可url
//			['Follow Editor for beatmania IIDX 22 PENDUAL', nob_m.common.domain.main + nob_m.common.dir.main + 'FollowEditorForIIDX22/main.js', 'p.eagate.573.jp/game/2dx/22/'],
			['SDVX IIIのスコアツール', nob_m.common.domain.boot + nob_m.common.dir.boot + 'ext/bluekingdragon/sdvx3.js', 'p.eagate.573.jp/game/sdvx/iii/'],
			['Popreco', nob_m.common.domain.boot + nob_m.common.dir.boot + 'ext/popreco/boot.js', 'p.eagate.573.jp/game/popn/eclale/p/playdata/mu_top.html'],
			['Popreco', nob_m.common.domain.boot + nob_m.common.dir.boot + 'ext/popreco/boot.js', 'p.eagate.573.jp/game/popn/lapistoria/p/playdata/mu_top.html'],
			['Score Viewer for pop\'n music ラピストリア', nob_m.common.domain.main + nob_m.common.dir.main + 'ScoreViewerForPopn22/main.js', 'p.eagate.573.jp/game/popn/lapistoria/'],
			['Score Viewer for pop\'n music ラピストリア', nob_m.common.domain.main + nob_m.common.dir.main + 'ScoreViewerForPopn22/main.js', 'popupopupopnp.com/']
		],
		'other': [
			['SOUND VOLTEX III GRAVITY WARS', 'http://p.eagate.573.jp/game/sdvx/iii/p/'],
			['pop\'n music éclale', 'http://p.eagate.573.jp/game/popn/eclale/p/'],
			['pop\'n music ラピストリア', 'http://p.eagate.573.jp/game/popn/lapistoria/p/']
		]
	};

	//元のページに戻す処理
	var bodyRestore = function($org, $add){
		$add.fadeOut(speed_sec, function(){
			$add.remove();
		});
		$org.fadeIn(speed_sec, function(){
			$org.children().eq(0).unwrap();
		});
		$.noConflict(true);
	};

	//元の表示部分を保持する
	if($('.' + nob_m.common.class.prefix + nob_m.common.class.org).length == 0){
		$('body').wrapInner($('<div />').addClass(nob_m.common.class.prefix + nob_m.common.class.org));
	}
	var $content_org = $('.' + nob_m.common.class.prefix + nob_m.common.class.org);

	//css read
	var css_href = nob_m.common.domain.boot + nob_m.common.dir.boot + 'index.css';
	if($('link[href="' + css_href + '"]').length === 0){
		$('head').append($('<link />').attr({
			rel: 'stylesheet',
			href: css_href
		}));
	}

	//bookmarklet用領域
	$('.' + nob_m.common.class.prefix + nob_m.common.class.add).remove();
	var $content_add = $('<div />').addClass(nob_m.common.class.prefix + nob_m.common.class.add).hide();
	$('body').append($content_add);
	var $input = $('<input />').attr({
		type: 'button',
		value: '元のページに戻る'
	}).on('click', function(){
		bodyRestore($content_org, $content_add);
	});
	$content_add.append($input);

	//postMessage用, イベント追加関数
	nob_m.addEvent = function(el, name, observer, useCapture){
		if (el.addEventListener) {
			el.addEventListener(name, observer, useCapture);
		}else if (el.attachEvent){
			el.attachEvent('on' + name, observer);
		}else{
			alert('このブラウザはデータ保存に対応していません。');
		}
	}

	//現在起動中のbookmarklet名を表示する部分
	var $span = $('<span />').addClass('name_current_bookmarklet');
	$content_add.append($span);
	var $hr = $('<hr />');
	$content_add.append($hr);

	//起動bookmarklet選択
	var $content_main = $('<div />').addClass(nob_m.common.class.prefix + nob_m.common.class.main);
	$content_add.append($content_main);
	var url_tmp = window.location.href.replace('https://', '').replace('http://', '');
	for (var i=0; i<list.org.length; i++){
		if(url_tmp.indexOf(list.org[i][2]) === 0){
			list.now.push(list.org[i]);
		}
	}

	//起動処理
	nob_m.readMainJs = function(url){
		$.ajax({
			url: url,
			dataType: 'script',
			scriptCharset: 'utf-8',
			error: function(data){
				alert('データ読み込みに失敗しました。');
			}
		});
	}
	if(list.now.length === 0){
		$('.' + nob_m.common.class.prefix + nob_m.common.class.main).html('このページで起動できるものがありません。<br /><br />下記のボタンから各公式サイトへ移動できます。<br />');
		for(var i=0; i<list.other.length; i++){
			var $input = $('<input />').attr({
				type: 'button',
				value: list.other[i][0]
			}).on('click', {url: list.other[i][1]}, function(event){
				window.location.href = event.data.url;
			});
			$('.' + nob_m.common.class.prefix + nob_m.common.class.main).append($input).append('<br />');
		}
	}else if(list.now.length === 1){
		//起動
		nob_m.readMainJs(list.now[0][1]);
	}else{
		for(var i=0; i<list.now.length; i++){
			var $input = $('<input />').attr({
				type: 'button',
				value: list.now[i][0]
			}).on('click', {url: list.now[i][1]}, function(event){
				nob_m.readMainJs(event.data.url);
			});
			$('.' + nob_m.common.class.prefix + nob_m.common.class.main).append($input).append('<br />');
		}
	}

	//メニュー表示
	$content_org.fadeOut(speed_sec);
	$content_add.fadeIn(speed_sec);
});
