var d=window.document;
try{
	var u='https://nob-m.github.io/bookmarklet/index.js?r='+Math.random();
	var i=d.createElement('script');
	i.src=u;
	i.charset='utf-8';
	d.getElementsByTagName('head')[0].appendChild(i);
}catch(e){
	alert(e);
}
