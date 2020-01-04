(function() {
	'use strict';
	
	var im_cjs = window.im_cjs || {};
	var p_func = {};
	var loaded_flag = false;
	var pause_flag = false;
	var ua = navigator.userAgent;
	var htc = ua.indexOf('ISW13HT') > -1;
	var And = ua.indexOf('Android') > -1;
	var play_voice = '';
	var current_voice = '';

	// private function
	p_func.get_voice = function(_id, _scene) {
		var option = { "src": [ { "media": "audio/mp4", "path": window.voice_manifest[_scene] } ] };
		
		boombox.load(_id, option, htc, function(err, htmlvideo) {
			if (err) {
				return err;
			}
			loaded_flag = true;
			current_voice = play_voice;
			play_voice = _scene;
		});
	};

	// global function
	im_cjs.init = function() {
		var weba = { webaudio:{ use : false } };
		boombox.setup( And ? weba : null );
		if( !boombox.isWebAudio() && !boombox.isHTMLAudio() && boombox.isHTMLVideo() ) htc = true;
	};

	im_cjs.load_voice = function(_scene) {
		if (!_scene) {
			console.warn("nomatch_voice_id");
		}
		if (loaded_flag) {
			//this.voice_stop();
			//boombox.remove(play_voice);
		}
		// フラグを落とす
		loaded_flag = false;
		pause_flag = false;
		// voiceをロード
		p_func.get_voice(_scene, _scene);
	};

	im_cjs.voice_play = function() {
		if (!loaded_flag) {
			return "no_voice";
		}
		if (pause_flag) {
			boombox.get(play_voice).resume();
			$('#console').text(JSON.stringify(boombox.get(play_voice)));
		} else {
			if (current_voice) {
				boombox.get(current_voice).stop();
			}
			boombox.get(play_voice).play();
			$('#console').text(JSON.stringify(boombox.get(play_voice)));
		}
	};

	im_cjs.voice_stop = function() {
		if (!loaded_flag) {
			return "no_voice";
		}
		//boombox.get(play_voice).stop();
		boombox.get(play_voice).stop();
		return true;
	};

	im_cjs.voice_pause = function() {
		if (!loaded_flag) {
			return "no_voice";
		}
		boombox.get(play_voice).pause();
		pause_flag = true;
		return true;
	};

	im_cjs.loaded_check = function() {
		return loaded_flag;
	};

	im_cjs.init();
	window.im_cjs = im_cjs;
})();
