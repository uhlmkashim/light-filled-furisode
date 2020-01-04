var hybrid  = 'HybridApp';
var shell   = 'ShellApp';
var browser = 'Browser';

function access_type()
{
	if (typeof window.sphybrid !== 'undefined')
	{
		return hybrid;
	}
	else if (typeof mobage !== 'undefined')
	{
		return shell;
	}
	else
	{
		return browser;
	}
}

function app_version(type)
{
	if (shell === type)
	{
		code = mobage.shellapp.App.getVersionCode();
		if (code === 0){ //iOS縺ｯ蟶ｸ縺ｫ0繧定ｿ斐☆
			return mobage.shellapp.App.getVersionName();
		} else {
			return code;
		}
	}
	else if (hybrid === type)
	{
		return window.sphybrid.getAppVersion();
	}
}
function is_sounds(flg)
{
	if(flg == 1)
	{
		return true;
	}
	else
	{
		return false;
	}
}
function is_exists_sound(need_version)
{
	var version = app_version(access_type());
	var verChk = cmpVersion(version,need_version);
	if (verChk >= 0)
	{
		return true;
	}
	else
	{
		return false;
	}
}
function se_play(se_name)
{
	if ( ! is_sounds(se_flg)) { return; }

	if (access_type() == hybrid)
	{
		window.sphybrid.sound.play(se_name);
	}
	else if (access_type() == shell)
	{
		se_name += '.ogg';
		mobage.shellapp.SoundEffect.play(se_name);
	}
}

function bgm_play(bgm_name, fade_time, loop, need_version, default_bgm_name)
{
	if ( ! is_sounds(bgm_flg)) {
		bgm_stop();
		return;
	}

	if (fade_time == undefined) fade_time = 3.0;

	if (loop == undefined) loop = -1;

	if (!is_exists_sound(need_version)) bgm_name = default_bgm_name;
	
	if (access_type() == hybrid)
	{
		window.sphybrid.music.play(bgm_name, fade_time, loop);
	}
	else if (access_type() == shell)
	{
		//Android蛻晏屓繝ｪ繝ｪ繝ｼ繧ｹ譎ゅ�縺ｿ縺ｮ蛟句挨蟇ｾ蠢懊√＠縺ｰ繧峨￥縺励◆繧牙､悶☆
		if (bgm_name == "bgm_win_00"
			|| bgm_name == "bgm_win_01"
			|| bgm_name == "bgm_lose_00"
			|| bgm_name == "bgm_lose_01"
			)
		{
			var version = mobage.shellapp.App.getVersionCode();
			if (version == "1") {
				bgm_name = bgm_name.replace("bgm", "me");
			}
		}
		//縺薙％縺ｾ縺ｧ
		bgm_name += '.ogg';
		mobage.shellapp.Music.play(bgm_name, fade_time, loop);
	}
}

function bgm_stop(fade_time)
{
	if (fade_time == undefined) fade_time = 1.0;

	if (access_type() == hybrid)
	{
		window.sphybrid.music.stop(fade_time);
	}
	else if (access_type() == shell)
	{
		mobage.shellapp.Music.stop(fade_time);
	}
}

function bgm_pause()
{
	if ( ! is_sounds(bgm_flg)) { return; }

	if (access_type() == hybrid)
	{
		window.sphybrid.music.pause();
	}
	else if (access_type() == shell)
	{
		mobage.shellapp.Music.pause();
	}
}

function bgm_resume()
{
	if ( ! is_sounds(bgm_flg)) { return; }

	if (access_type() == hybrid)
	{
		window.sphybrid.music.resume();
	}
	else if (access_type() == shell)
	{
		mobage.shellapp.Music.resume();
	}
}

function cmpVersion(version, minimum_version) {
	if(version===minimum_version) return 0;
	
	var a1 = version.toString().split(".");
	var a2 = minimum_version.toString().split(".");
	for( var i = 0; i < a1.length && i < a2.length; i++ ) {
		var diff = parseInt(a1[i],10) - parseInt(a2[i],10);
		if( diff>0 ) {
			return 1;
		}
		else if( diff<0 ) {
			return -1;
		}
	}
	diff = a1.length - a2.length;
	return (diff>0) ? 1 : (diff<0) ? -1 : 0;
}

// Android縺ｯ繝懊う繧ｹ蜀咲函蜑阪↓BGM繧剃ｸ譎ょ●豁｢縺吶ｋ
function pause_bgm_before_voice()
{
	if (/Android/.test(navigator.userAgent)) {
		bgm_pause();
	}
}
