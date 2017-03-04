$('.termbl').on('click', function() {
	$('#mblock > h1').text('Term borderless on Fluxbox');
	$('#mblock > p').text('Edit .fluxbox/keys');
	$('<p>Add : Control F12 :ToggleDecor</p>').appendTo('#mblock');
	$('<p>Use lxterminal (disable useflag gtk3, avoid segfault)</p>').appendTo('#mblock');
	$('<p>Use Fluxbox right click : Decoration - Save on close</p>').appendTo('#mblock');
	$('<p>Result : <a href="images/borderless.png">Screenshot</a></p>').appendTo('#mblock');
});