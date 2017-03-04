/* You must stop waste your time */

$('.termbl').off('click');
$('.termbl').on('click', function() {
	$('#mblock').empty();
	$('<h1>Term borderless on Fluxbox</h1>').appendTo('#mblock');
	$('<p>Edit .fluxbox/keys</p>').appendTo('#mblock')
	$('<p>Add : Control F12 :ToggleDecor</p>').appendTo('#mblock');
	$('<p>Use lxterminal (disable useflag gtk3, avoid segfault)</p>').appendTo('#mblock');
	$('<p>Use Fluxbox right click : Decoration - Save on close</p>').appendTo('#mblock');
	$('<p>Result : <a href="images/borderless.png">Screenshot</a></p>').appendTo('#mblock');
});

$('.firej').off('click');
$('.firej').on('click', function() {
	$('#mblock').empty();
	$('<h1>Firejail</h1>').appendTo('#mblock');
	$('<p>firejail --noprofile --noroot --caps.drop=all --private=~/privdirectory/ --private-dev --seccomp --nonewprivs --private-dev</p>').appendTo('#mblock')
	$('<p>Tor : --env=LD_PRELOAD=/usr/lib64/torsocks/libtorsocks.so</p>').appendTo('#mblock');

});