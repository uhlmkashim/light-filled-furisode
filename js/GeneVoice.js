/* 音声格納用 */
var sceneMove = 0;
var sceneNumber = 0;
var returnUrl ='';
var boombox;
var clicked = false;
var ua = navigator.userAgent;
var htc = ua.indexOf('ISW13HT') > -1;
var And = ua.indexOf('Android') >-1;
var soundOn = typeof soundFlag != 'undefined';
if(soundOn){
	var weba = { webaudio:{use:false} };
	boombox.setup( And ? weba : null );
	if( !boombox.isWebAudio() && !boombox.isHTMLAudio() && boombox.isHTMLVideo() ) htc = true;
}
/* Flashから呼ばれる関数1 音声パス */
function voiceControl(n1,n2){
	sceneMove = n2;
	if(!soundOn || n1 =='') {
		var cktime = sceneNumber ? 100: 0;
		setTimeout(function(){
			clicked = true;
		},cktime);
		return;
	}
	
	var option = { "src": [
		{
			"media": "audio/mp4",
			"path": n1
		}
	] };

	$().pexGotoFrame('loader','in');
	clicked =false;
	boombox.load('idolVoice'+sceneNumber, option , htc ,function(err, htmlvideo){
		if(htc){
			$('#container').append(htmlvideo.$el);
			$(htmlvideo.$el).css('position', 'absolute').css({ 'top': '-1000px' , 'left' : '0px' });
		}
		$().pexGotoFrame('loader','out');
		var cktime = sceneNumber ? 500: 0;
		setTimeout(function(){
			clicked = true;
		},cktime);
	});
}

/* Flash演出を見終わった後、戻るページのURL */
function backUrl(n1,n2){
	returnUrl =n1;
	clicked = true;
}

/* Flashから呼ばれる関数2 吹き出しウィンドウ出し入れ */
function btStart(nn,name){
	var mcName = name === undefined ? 'button' : name;
	var ratio = document.getElementById('container').children[0].offsetWidth / 240;//pex表示サイズとswfとの差分
	btGeneration(nn,mcName,ratio);
}

function btGeneration(nn,name,ratio){
	var obj = [];
	var btElem = [];
	var elem = [];
	var touchAct,mcName;
	if(typeof window.orientation == 'undefined') touchAct = 'click';
	else touchAct = 'touchstart';

	for(i=0; i<nn; i++){
		mcName = name+'_'+[i+1];
		obj[i] = $().pexBtacquisition(mcName);

		btElem[i] = {
			x : obj[i][0] * ratio,
			y : obj[i][1] * ratio,
			poX : (obj[i][2] - (obj[i][0] / 2)) * ratio,
			poY : (obj[i][3] - (obj[i][1] / 2)) * ratio,
			label : obj[i][4],
			voicePath : obj[i][5]
		};

		elem[i] = document.createElement('a');
		elem[i].style.width = btElem[i].x + 'px';
		elem[i].style.height = btElem[i].y + 'px';
		elem[i].style.top = btElem[i].poY + 'px';
		elem[i].style.left = btElem[i].poX + 'px';
		elem[i].name = mcName;
		elem[i].href = '#';

		//音声パスが来ない為、ウィンドウ処理
		if(name != 'window'){
			elem[i].rel = btElem[i].label;
			elem[i].className = 'scrollBt';
			elem[i].id = 'scroll_switch';

		}else{
			elem[i].className = 'switchBt';
			elem[i].id = 'window_switch';
		}

		var OBJ = document.getElementById('container');
		OBJ.appendChild(elem[i]);

		elem[i].addEventListener(touchAct, btClick);
	}
}


var windowFlagTime = 0;
var windowAll = 0;
function btClick(e){
	if (returnUrl!='') { $('#voiceTouch').trigger('click'); $(this).remove(); return false; };
	windowAll = 1;
	windowFlagTime = 1;
	$().pexGotoFrame(this.name,'out');
	$('#window_switch').hide();
	setTimeout(function(){
		windowFlagTime = 0;
	}, 700);
	e.preventDefault();
}
$(function(){
	var elem = $('#voiceTouch');
	elem.bind('click',function(){
		if (!clicked) return false; 

		if (returnUrl!='') { 
			if(soundOn) { 
				boombox.dispose(); 
			}
			clicked = false;
			document.location = returnUrl;

			return false;
		}

		if(windowAll){
			if(!windowFlagTime && $('#window_switch').css('display') == 'none'){
				$().pexGotoFrame('window_1','in');
				$('#window_switch').show();
				windowFlagTime = 1;
				setTimeout(function(){
					windowFlagTime = 0;
				}, 700);
				windowAll = 0;
			}
		}else{
			if(soundOn && typeof boombox.get('idolVoice'+sceneNumber) != 'undefined'){
				clicked = false;
				if (sceneNumber-1 >= 0){
					boombox.get('idolVoice'+(sceneNumber-1)).stop();
					boombox.remove('idolVoice'+(sceneNumber-1));
					if(htc) $('#container').find('video[src=undefined]').remove();
				}

				$().pexCallActions(sceneMove);
				boombox.get('idolVoice'+sceneNumber).play();
				sceneNumber++;
				
			}else{
				clicked = false;
				$().pexCallActions(sceneMove);
				sceneNumber++;
			}
		}
		return false;
	});
});
