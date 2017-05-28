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
	$('<h1>The Sandboxing</h1>').appendTo('#mblock');
	$('<p>Firejail is one of the great tools for Linux providing a security layer for most of your binary <i>(like Firefox, Pidgin, Vlc, Irssi, Shell...)</i> by running them inside a restricted environment, customizable with numerous of options. Firejail is a relatively young project and have already known some vulnerability trought is development. Despite this, the development is very actif and add on each update, bug/fix and more feature. It is one of security tool of Linux that should be use for each applications.</p> \
		<p>A common usage of Firejail is to use the default predefined profile shipped with Firejail, by running as follow</p> \
		<div class=code><span class=comment># Command line in a linux terminal</span><br><span class=command>$ firejail firefox</span></div> \
	<p>While it\'s very fine to use Firejail with the predefined profiles, it is possible to run, per sandbox, specific options/features of Firejail by passing those in the command line. This allow you to entirely control or restrict the access for each running process. The man of Firejail is outstanding and I can only recommand you to read it. \
	<p>List of somes Firejail options to harden your binary by restricting their layer access (forbid access to the video, sound, 3d, network...), system environment, system ressources and privilege access</p> \
	<div class=list><span> noroot </span> <p>The root access do not exist in the sandbox, only the current user</p> \
					<span> noprofile </span> <p>Do not use the default profile defined for the processus. This option should be use for custom firejail command only</p> \
					<span> nogroups </span> <p>Do not share any other groups of the user. By default, the processus share all the groups</p> \
					<span> nonewprivs </span><p> Any child processes of the running binary will not acquire new privileges by calling a binary with different suid. This protect the running binary to exploit another binary with different permission (higher or not) </p> \
					<span> caps.drop=all </span> <p>The capabilities are a kernel feature that divide the root privilege into differents distinct units. By default a root privilege processus can bypass all kernel capabilities while an unprivilege processus trying to access to a capabilities will be subject to a control. This options will drop all capabilities access to the running process.</p> \
					<span> seccomp </span> <p>The sandboxing tool of the Linux kernel that reduice to the numbers of system calls of the running process.</p> \
					<span> nosound </span> <p>Denied the access of the running process to the sound system (alsa, pulseaudio...) .</p> \
					<span> novideo </span> <p>Denied the access of the running process to the video system.</p> \
					<span> no3d </span> <p>Denied the access of the running process to the 3D acceleration of the system.</p> \
					<span> private </span> <p>Mount a temporary new /root and /home/directory for the sandbox, everything is discarded when the sandbox exit.</p> \
					<span> private=~/directory/ </span> <p>Use the target directory as user home, that ensure the process to be isolated from the main home directory of the user </p> \
					<span> private-tmp </span> <p>Create a temporary and uniq /tmp/ for the running process. The /tmp/ is removed when the processus exit</p> \
					<span> private-dev </span> <p>Create a new directory /dev/ directory for the running process. Only dri, null, full, zero, tty, pts, ptmx, random, snd, urandom, video, log and shm devices are available</p> \
					<span> ipc-namespace </span> <p>Enable a new IPC namespace for the processus. Namespace is a feature of isolation and virtualization of the system ressources, it allow to virtualize ressources like the hostname, network access, filesystems... per thread</p> \
					<span> machine-id </span> <p>Generate a random machine ID, usefull against the fingerprinting.</p> \
					<span> net=none </span> <p>No network connection will be available inside the sandbox. This should be used if you are running a processus like Vlc or LibreOffice that do not require network connection<i>(or in most of the case...)</i></p> \
					<span> dns= </span> <p>Set the dns server to use. You can pass multiples (up to 4) dns= options</p> \
					<span> debug </span> <p>Make the running processus printing debug messages</p> \
					<span> trace </span> <p>Make the running processus printing trace open, access and connect system calls.</p> \
					<span> env= </span> <p>Allow the run a customer environment variable inside the sandbox. --env=LD_PRELOAD=/usr/lib64/torsocks/libtorsocks.so will for example make the network connection trought TOR.</p> \
	 </div> \
	<p>Firejail have more than the bellow listed options and get more as the development progress. Now a few examples of using a custom Firejail sandbox</p> \
	<div class=list><span> Firefox </span> <p>firejail --private-dev --private-tmp --ipc-namespace --machine-id --noprofile --noroot --caps.drop=all --private=~/firejail/ --seccomp --nonewprivs --debug --trace --nosound --no3d firefox</p> \
					<span> Chromium </span> <p>firejail --noprofile --noroot --caps.drop=all --private=~/chromejail/ --seccomp --nonewprivs --private-tmp --machine-id --nosound --no3d --ipc-namespace --dns=8.8.8.8 --debug chromium -no-sandbox</p> \
					<span> Vlc </span> <p>firejail --noprofile --net=none --nonewprivs --private-tmp --seccomp --caps.drop=all vlc</p> \
					<span> Irssi </span> <p>firejail --noprofile --nonewprivs --noroot --caps.drop=all --nosound --private=~/irssijail/ --private-dev --private-tmp --novideo --machine-id --seccomp --nogroups --env=LD_PRELOAD=/usr/lib64/torsocks/libtorsocks.so irssi</p> \
	</div>\
			<p>Keep in mind that somes options/features can broke or not even run the processus if one of the option restrict something required to work, in this case, remove one option and run the command again. If it\'s fail again, remove another one and so on <i>(Or use trace / debug / audit to determine the problem)</i>... The more you restrict, the more your sandbox is secure. Prefer the sandbox by Firejail rather than the shipped one with some applications <i>(as Chromium...)</i></p> \
			<p><a href="https://firejail.wordpress.com" title="Firejail">Official website of Firejail</a></p>').appendTo('#mblock');

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
	$('<p>By default, Firefox is not set with a decent security privacy profile. A good move is to use the following hardened profile that aim privacy/security, especially on the fingerprint</p>').appendTo('#mblock');
	$('<p><a href="https://github.com/pyllyukko/user.js" title="Hardened firefox">Firefox hardened user.js</a></p>').appendTo('#mblock')
});

$('.grsecurity').off('click');
$('.grsecurity').on('click', function() {
	$('#mblock').empty();
	$('<h1>Grsecurity</h1>').appendTo('#mblock');
	$('<p>26 May 2017 was a disaster for the free and public access to one the best (if it\'s not, the best) security stuff. A paper will be wrote in the next few days...</p>').appendTo('#mblock');
	$('<p><a href="https://grsecurity.net" title="grsecurity linux">Grsecurity official website</a></p>').appendTo('#mblock');
});