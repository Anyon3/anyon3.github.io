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

$('.iptables').off('click');
$('.iptables').on('click', function() {
	$('#mblock').empty();
	$('<h1>Iptables rules</h1>').appendTo('#mblock');
	$('<p>It does not contain only iptables rules, since it was custom for my requirement.</p>').appendTo('#mblock');
	$('<p><a href="rules.txt">rules.txt</a></p>').appendTo('#mblock');
});

$('.suricata').off('click');
$('.suricata').on('click', function() {
	$('#mblock').empty();
	$('<h1>Suricata</h1>').appendTo('#mblock');
	$('<p>Example of suricata.yaml</p>').appendTo('#mblock');
	$('<p><a href="suricata.txt">suricata.txt</a></p>').appendTo('#mblock');
	$('<p>Add a crontab every 3 days on the following line to get your suricata rules up to data</p>').appendTo('#mblock');
	$('<p>oinkmaster.pl -C /etc/oinkmaster.conf -o /etc/suricata/rules/</p>').appendTo('#mblock');
});

$('.grub').off('click');
$('.grub').on('click', function() {
	$('#mblock').empty();
	$('<h1>grub</h1>').appendTo('#mblock');
	$('<p>Simple grub.cfg with luks and an initramfs</p>').appendTo('#mblock');
	$('<p><a href="grub.txt">grub.txt</a></p>').appendTo('#mblock');
});

$('.dnscrypt').off('click');
$('.dnscrypt').on('click', function() {
	$('#mblock').empty();
	$('<h1>Dnscrypt</h1>').appendTo('#mblock');
	$('<p>Inside a .sh file : sudo dnscrypt-proxy --local-address=127.0.0.1:40 --daemonize --ephemeral-keys --user=dnscrypt --resolver-address=176.56.237.171:443 --provider-key=67C0:0F2C:21C5:5481:45DD:7CB4:6A27:1AF2:EB96:9931:40A3:09B6:2B8D:1653:1185:9C66 --resolver-name=dnscrypt.eu-nl --edns-payload-size=4096 --logfile=/home/dnscrypt/dnscrypt-log</p>').appendTo('#mblock');
	$('<p>Create different .sh with different dnscrypt server and crontab random DNSserver pickup</p>').appendTo('#mblock');
});

$('.firefox').off('click');
$('.firefox').on('click', function() {
	$('#mblock').empty();
	$('<h1>Firefox</h1>').appendTo('#mblock');
	$('<p>By default, Firefox is not set with a decent security/privacy profile. You cannot seriously rely on the options of Firefox as "Private mode" "Security" and co : Those are a smoke screen and the "real" settings that can aim to offer more Security/Privacy are inside the pref.js<br><br>A good move is to use the following hardened profile that aim to offer what Firefox lack to provide by default, especially on the fingerprint. You may be interested by uMatrix plugins, avoid the use of others plugins if possible. If you want more security/privacy, go for Torbrowser as Firefox is limited for this.<br><br> \
		If you are wondering if Google chrome is a better alternative, then I stop you here, this browser is a backdoor, period. No need to details more on the motivation of Google.</p>').appendTo('#mblock');
	$('<p><a href="https://github.com/pyllyukko/user.js" title="Hardened firefox">Firefox hardened user.js</a></p>').appendTo('#mblock')
});

$('.grsecurity').off('click');
$('.grsecurity').on('click', function() {
	$('#mblock').empty();
	$('<h1>Grsecurity</h1>').appendTo('#mblock');
	$('<p>26 May 2017 was a disaster for the free and public access to one the best (if it\'s not, the best) security stuff. A paper will be wrote in the next few days...</p>').appendTo('#mblock');
	$('<p><a href="https://grsecurity.net" title="grsecurity linux">Grsecurity official website</a></p>').appendTo('#mblock');
});