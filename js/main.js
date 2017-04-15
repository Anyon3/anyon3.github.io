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
	$('<h1>Sandboxing</h1>').appendTo('#mblock');
	$('<p>firejail --noprofile --noroot --caps.drop=all --private=~/privdirectory/ --private-dev --seccomp --nonewprivs --private-tmp --nogroups --debug --trace --nosound</p>').appendTo('#mblock')
	$('<p>Tor : --env=LD_PRELOAD=/usr/lib64/torsocks/libtorsocks.so</p>').appendTo('#mblock');
	$('<p>Gentoo user : Start firejail inside a sandbox (sys-apps/sandbox) is a wise idea.</p>').appendTo('#mblock');

});

$('.iptables').off('click');
$('.iptables').on('click', function() {
	$('#mblock').empty();
	$('<h1>Iptables rules</h1>').appendTo('#mblock');
	$('<p><a href="rules.txt">rules.txt</a></p>').appendTo('#mblock');
});

$('.suricata').off('click');
$('.suricata').on('click', function() {
	$('#mblock').empty();
	$('<h1>Suricata</h1>').appendTo('#mblock');
	$('<p><a href="suricata.txt">suricata.txt</a></p>').appendTo('#mblock');
	$('<p>Update rules : oinkmaster.pl -C /etc/oinkmaster.conf -o /etc/suricata/rules/</p>').appendTo('#mblock');
});

$('.grub').off('click');
$('.grub').on('click', function() {
	$('#mblock').empty();
	$('<h1>grub</h1>').appendTo('#mblock');
	$('<p>luks entry : <a href="grub.txt">grub.txt</a></p>').appendTo('#mblock');
});

$('.dnscrypt').off('click');
$('.dnscrypt').on('click', function() {
	$('#mblock').empty();
	$('<h1>Dnscrypt</h1>').appendTo('#mblock');
	$('<p>Inside a .sh file : sudo dnscrypt-proxy --local-address=127.0.0.1:40 --daemonize --ephemeral-keys --user=dnscrypt --resolver-address=176.56.237.171:443 --provider-key=67C0:0F2C:21C5:5481:45DD:7CB4:6A27:1AF2:EB96:9931:40A3:09B6:2B8D:1653:1185:9C66 --resolver-name=dnscrypt.eu-nl --edns-payload-size=4096 --logfile=/home/dnscrypt/dnscrypt-log</p>').appendTo('#mblock');
	$('<p>Create different .sh with different dnscrypt server and crontab random DNSserver pickup</p>').appendTo('#mblock');
});

$('.grsecurity').off('click');
$('.grsecurity').on('click', function() {
	$('#mblock').empty();
	$('<h1>Grsecurity</h1>').appendTo('#mblock');
	$('<p>If you think grsecurity patch is not needed for the security of the kernel Linux, you miss half of your life.</p>').appendTo('#mblock');
	$('<p><a href="https://grsecurity.net" title="grsecurity linux">grsecurity.net</a></p>').appendTo('#mblock');
});