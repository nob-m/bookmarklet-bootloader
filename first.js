(function(){
	var w = window;
	if(typeof nob_m === 'undefined'){
		nob_m = {};
	}
	nob_m.common = {
		domain: 'https://nob-m.github.io/',
		dir: 'boot_bookmarklet/',
		class: {
			prefix: 'nob_m_body_',
			org: 'org',
			add: 'add',
			main: 'main',
		},
		readExtJs: function(u, c, f){
			var d = w.document;
			try{
				u = u + '?r=' + Math.random();
				var i = d.createElement('script');
				i.src = u;
				if(typeof c === 'string'){
					i.charset = c;
				}
				if(typeof f === 'function'){
					i.onload = f;
				}
				d.getElementsByTagName('head')[0].appendChild(i);
			}catch(e){
				alert(e);
			}
		}
	};
	nob_m.common.readExtJs(nob_m.common.domain + '/js/jquery.min.js', 'utf-8', function(){
		try{
			$.support.cors = true;
			$.ajax({
				url: nob_m.common.domain + nob_m.common.dir + 'index.js',
				dataType: 'script',
				scriptCharset: 'utf-8',
				error: function(data){
					alert('データ読み込みに失敗しました。');
				}
			});
		}catch(e){
			alert('データ読み込みに失敗しました。');
		}
	});
})();
