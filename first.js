(function(){
	var w = window;
	if(typeof w.nob_m === 'undefined'){
		w.nob_m = {};
	}
	if(typeof w.nob_m.common === 'undefined'){
		w.nob_m.common = {};
	}
	w.nob_m.common.readExtJs = function(u, c, f){
		var d = window.document;
		try{
			var u = u + '?r=' + Math.random();
			var i = d.createElement('script');
			i.src = u;
			if(typeof c === 'string'){
				i.charset = c;
			}
			if(typeof f === 'function'){
				i.onload = function(){f();};
			}
			d.getElementsByTagName('head')[0].appendChild(i);
		}catch(e){
			alert(e);
		}
	};
	w.nob_m.common.readExtJs('https://nob-m.github.io/js/jquery.min.js', 'utf-8', function(){
		$.ajax({
			url: 'https://nob-m.github.io/bookmarklet/index.js',
			dataType: 'script',
			scriptCharset: 'utf-8',
			error: function(data){
				alert('データ読み込みに失敗しました。');
			}
		});
	});
})();
