
globalNextLabel = 0;
var windowAll = 0;
var windowOff = 0;
var voiceOnPath,pastVoice;
var btTap = 0;
var nowSelect = 0;
var windowFlagTime = 0;
var effectFlg = 0;
var elemCont = document.getElementById('container').offsetWidth;

var soundFlag = (typeof soundFlag != 'undefined' && soundFlag == 1);
var noVoiceSceneFlg = false;
var element = $('#voiceTouch');
var ready = new Object;
var tempUrl = false;
var tutorialCount = 0;
var localPlayed = false;

var returnUrl ='';
var boombox;
var clicked = false;
var loading = false;
var start = false;

var ua = navigator.userAgent;
var htc = ua.indexOf('ISW13HT') > -1;
var And = ua.indexOf('Android') > -1;

if(soundFlag){
	var weba = { webaudio:{ use : false } };
	boombox.setup( And ? weba : null );
	if( !boombox.isWebAudio() && !boombox.isHTMLAudio() && boombox.isHTMLVideo() ) htc = true;
}

(function($){
	$.fn.setVoice = function(cnt){
		if(ready[cnt] != 'off' && ready[cnt].length > 1){
			var option = { "src": [ { "media": "audio/mp4", "path": ready[cnt] } ] };
			$().pexGotoFrame('loader','in');
			loading = true;
			boombox.load('epi'+cnt , option , htc ,function(err, htmlvideo){
				if(htc){
					$('#container').append(htmlvideo.$el);
					$(htmlvideo.$el).css('position', 'absolute').css({ 'top': '-1000px' , 'left' : '0px' });
				}
				setTimeout(function(){
					loading = false;
					$().pexGotoFrame('loader','out');
				},300);

			});
		}else{
			noVoiceSceneFlg = true;
		}
	}
	$.fn.playVoice = function(cnt){
		var expand = Math.floor(cnt / 100);
		var blockEnd = 100*(expand+1);

		if( typeof ready[cnt] == 'undefined' || typeof ready[cnt] != 'undefined' && ready[cnt] == 'off') {
			globalNextLabel = 1;
			if(!localPlayed) tutorialCount++;
			$().pexConsole();
			return false;
		}

		for (var index in ready){
			if (parseInt(index) != cnt){
				boombox.get( 'epi'+ index ).stop();
				if ( parseInt(index) < parseInt(sceneLabel.replace(/\D/g,'')) || parseInt(index) > 100 && parseInt(index) <= blockEnd ){
					boombox.remove( 'epi'+ index );
					delete ready[index];
				}
			}
		}
		if(htc) $('#container').find('video[src=undefined]').remove();
		globalNextLabel = 1;
		if (cnt < 100) $().pexConsole();
		pause_bgm_before_voice();
		boombox.get('epi'+cnt).play();
	}

})(jQuery);


//swf function
function voiceLoad(voicePath,scene_label){
	sceneLabel = scene_label;
	start = true;
	if(soundFlag){
		var scene = scene_label.replace(/\D/g,'');
		if (typeof ready[scene] =='undefined' && !nowSelect){
			ready[scene] = voicePath;
			$().setVoice(scene);
		}else{
			tempUrl = voicePath;
		}
	}
}

//scene skip
function sceneLoad(nextScene){
	sceneLabel = nextScene;
	start = true;
	if(tempUrl){
		var scene = nextScene.replace(/\D/g,'');
		ready[scene] = tempUrl;
		$().setVoice(scene);
		tempUrl = false;
	}
}

//url jump
function backUrl(url){
	windowOff = 1;
	$('.switchBt').hide();
	returnUrl = url;
}

//asから呼ばれるボタン生成
function btStart(nn,name,index){
	var mcName = name === undefined ? 'button' : name;
	var indexNum = index === undefined ? 0 : index;
	var ratio = document.getElementById('container').children[0].offsetWidth / 240;//pex表示サイズとswfとの差分
	btGeneration(nn,mcName,ratio,indexNum);
}

function btGeneration(nn,name,ratio,index){

	var obj = [];
	var btElem = [];
	var elem = [];
	var touchAct,mcName,i,ii;
	if(typeof window.orientation == 'undefined') touchAct = 'click';
	else touchAct = 'touchstart';
	if(name != 'window' && name != 'button_scroll' && name != 'voice_icon_1'){
		effectFlg = 1;
		btTap = 1
		setTimeout(function(){
			btTap = 0;
		},2500);
	}

	for(i=0; i<nn; i++){

		if(index > 0) ii = eval(index) + eval(i) - 1;
		else ii = i; 

		mcName = name+'_'+[ii+1];
		obj[ii] = $().pexBtacquisition(mcName);

		btElem[ii] = {
			x : obj[ii][0] * ratio,
			y : obj[ii][1] * ratio,
			poX : (obj[ii][2] - (obj[ii][0] / 2)) * ratio,
			poY : (obj[ii][3] - (obj[ii][1] / 2)) * ratio,
			label : obj[ii][4],
			voicePath : obj[ii][5]
		};

		elem[ii] = document.createElement('a');
		elem[ii].style.width = btElem[ii].x + 'px';
		elem[ii].style.height = btElem[ii].y + 'px';
		elem[ii].style.top = btElem[ii].poY + 'px';
		elem[ii].style.left = btElem[ii].poX + 'px';
		elem[ii].name = mcName;
		elem[ii].href = '#';

		voiceOnPath = btElem[ii].voicePath === undefined ? 'FALSE' : btElem[ii].voicePath;

		//音声パスが来た為、選択肢処理
		if(voiceOnPath != 'FALSE'){
			elem[ii].rel = btElem[ii].label;
			elem[ii].className = 'selectSwitchBt';
			if(btElem[ii].label != 1) windowAll = 1;//ここはnameでとるべき

			if(!soundFlag){
			}else{
				localPlayed = false;
				elem[ii].rev = (nn*100)+ii+tutorialCount;
				ready[(nn*100)+ii+tutorialCount] = btElem[ii].voicePath;
				$().setVoice((nn*100)+ii+tutorialCount);
			}
			nowSelect = 1;
		//音声パスが来ない為、ウィンドウ処理
		}else{
			if(name != 'window'){
				elem[ii].rel = btElem[ii].label;
				elem[ii].className = 'scrollBt';
				elem[ii].id = 'scroll_switch';

			}else{
				elem[ii].className = 'switchBt';
				elem[ii].id = 'window_switch';
			}
		}

		var OBJ = document.getElementById('container');
		OBJ.appendChild(elem[ii]);

		if(voiceOnPath != 'FALSE'){
			btTap = 1;
			elem[ii].addEventListener(touchAct, btClickVoice);
			if(ii == (nn-1) || ii == 3 || ii == 6 || ii == 9){
//				setTimeout(function(){	pex1.0.7 is commont out off
				$().pexGotoFrame('loader','in');
//				}, 100);	pex1.0.7 is comment out off
				setTimeout(function(){
					$().pexGotoFrame('loader','out');
					btTap = 0;
				}, 2000);
			}
		}else{
			elem[ii].addEventListener(touchAct, btClick);
			if(ii == (nn-1)){
				setTimeout(function(){
					btTap = 0;
				}, 500);
			}
		}
	}
}

function btClick(e){
	if(this.name == 'button_scroll_1'){
		$().pexGotoFrame(this.name,this.rel);
		$('#scroll_switch').remove();

	}else if(windowFlagTime != 1 && !windowOff){
		windowAll = 1;
		windowFlagTime = 1;
		$().pexGotoFrame(this.name,'out');
		$('#window_switch').hide();

		setTimeout(function(){
			windowFlagTime = 0;
		}, 700);
	}
	e.preventDefault();
}

function btClickVoice(e){

	if(clicked == true) return false;
	clicked = true;

	//touchEffect
	if(effectFlg && !btTap && this.name != 'voice_icon_1'){
		var effectH = touchEffect(this);
		$().pexSetVaris('touch_effect',effectH);
		$().pexGotoFrame('touch_effect','in');
		effectFlg = 0;
	}
	if(!btTap){
		if(this.rel == 1){
			if(!soundFlag){
			}else{
				if(!localPlayed){
					$().playVoice(this.rev);
					tutorialCount++;
					localPlayed = true;
				}else{
					$().playVoice( parseInt(this.rev) - 1);
				}
			}
		}else{
			sceneLabel = this.rel;
			globalNextLabel = 1;
			$().pexConsole();
			if(!soundFlag){
				iWait = 1;
				setTimeout(function(){
					iWait = 0;
				}, 1000);
			}else{
				var a = this.rev;
			//	if(white_flag != 1)idolVoice[n-2].pause();
				setTimeout(function(){
					$().playVoice(a);
					pastVoice = a;
				},500);
			}
			$('.selectSwitchBt').remove();
			windowAll = 0;
			nowSelect = 0;
		}
	}

	setTimeout(function(){
		clicked = false;
	},700);

	e.preventDefault();
}

//touchEffect
function touchEffect(e){

	var hx,hy,eve
	var h = [];
	var button1Elm = [];


	if(typeof window.orientation == 'undefined'){
		if( $('.selectSwitchBt')[0] ){
			button1Elm[0] = $('.selectSwitchBt');
		}

		button1Elm['x'] = button1Elm[0].css('width');
		button1Elm['x'] = button1Elm['x'].replace('px', '');
		button1Elm['y'] = button1Elm[0].css('height');
		button1Elm['y'] = button1Elm['y'].replace('px', '');

		if(e.name != 'button_1'){
			eve = window.event;
			hx = eval(e.style.left.replace('px', '')) / 2;
			hx = eval(hx) + eve.layerX;
			hy = eval(e.style.top.replace('px', '')) / 2;
			hy = eval(hy) + eve.layerY;
			hx = Math.floor(240 * (hx / button1Elm['x'])) * 2;
			hy = Math.floor(310 * (hy / button1Elm['y'])) * 2;

		}else{
			eve = window.event;
			hx = Math.floor(240 * (eve.layerX / button1Elm['x'])) * 2;
			hy = (Math.floor(310 * (eve.layerY / button1Elm['y']))) * 2;
		}

	}else{
		var touchObj = event.touches;
		hx = Math.floor(Math.floor(240 * (touchObj[0].screenX / elemCont)));
		hy = Math.floor(Math.floor(310 * (touchObj[0].screenY / window.innerHeight)));
	}
	if(hx > 240) hx=240;
	if(hy > 310) hy=310;
	h['x'] = hx;
	h['y'] = hy;

	
	return h;
}

element.click(function(){
	if(clicked == true || soundFlag && loading || !start) return false;
	clicked = true;

	if(windowAll){
		if(!windowFlagTime && $('#window_switch').css('display') == 'none'){
			$().pexGotoFrame('window_1','in');
			$('#window_switch').show();
			windowFlagTime = 1;
			setTimeout(function(){
				windowFlagTime = 0;
			}, 700);
			if(!nowSelect) windowAll = 0;
		}
	}else{
		var noReflesh = false;
		if (returnUrl != ''){
			if (soundFlag){
				boombox.dispose();
			}
			noReflesh = true;
			document.location = returnUrl;
			return true;
		}

		if(soundFlag && !noVoiceSceneFlg && sceneLabel.indexOf('scene') > -1){
			$().playVoice(sceneLabel.replace(/\D/g,''));
		}else{
			globalNextLabel = 1;
			noVoiceSceneFlg = false;
			$().pexConsole();
		}
	}

	setTimeout(function(){
		if (!noReflesh) clicked = false;
	},700);

});
