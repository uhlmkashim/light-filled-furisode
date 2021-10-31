(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img._413_3_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,1400);


(lib.book1 = function() {
	this.initialize(img._413_3_book1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,410,270);


(lib.book2 = function() {
	this.initialize(img._413_3_book2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,505,360);


(lib.book4 = function() {
	this.initialize(img._413_3_book4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,470,254);


(lib.book5 = function() {
	this.initialize(img._413_3_book5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,253,152);


(lib.ch_base = function() {
	this.initialize(img._413_3_ch_base);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,1400);


(lib.ch_face2 = function() {
	this.initialize(img._413_3_ch_face2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,320);


(lib.ch_face3 = function() {
	this.initialize(img._413_3_ch_face3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,320);


(lib.ch_face4 = function() {
	this.initialize(img._413_3_ch_face4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,320);


(lib.ch_face5 = function() {
	this.initialize(img._413_3_ch_face5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,320);


(lib.ch_face6 = function() {
	this.initialize(img._413_3_ch_face6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,320);


(lib.ch_face7 = function() {
	this.initialize(img._413_3_ch_face7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,320);


(lib.finish = function() {
	this.initialize(img._413_3_finish);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,620);


(lib.finish_blur = function() {
	this.initialize(img._413_3_finish_blur);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,620);


(lib.hamon_03_1 = function() {
	this.initialize(img._413_3_hamon_03_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,550,378);


(lib.sun_light = function() {
	this.initialize(img._413_3_sun_light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,284);


(lib.tie_fp = function() {
	this.initialize(img._413_3_tie_fp);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,32);


(lib.tie_sp = function() {
	this.initialize(img._413_3_tie_sp);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,64);


(lib.wave_ukiwa = function() {
	this.initialize(img._413_3_wave_ukiwa);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,537,165);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.white_mask = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyvYOMAAAgwbMAlfAAAMAAAAwbg");
	this.shape.setTransform(120,155);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.white_mask, new cjs.Rectangle(0,0,240,310), null);


(lib.wave_ukiwa_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.wave_ukiwa();
	this.instance.parent = this;
	this.instance.setTransform(-268.5,-82.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.wave_ukiwa_1, new cjs.Rectangle(-268.5,-82.5,537,165), null);


(lib.gr_hamon1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.hamon_03_1();
	this.instance.parent = this;
	this.instance.setTransform(-137.5,-94.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.gr_hamon1, new cjs.Rectangle(-137.5,-94.5,275,189), null);


(lib.book5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.book5();
	this.instance.parent = this;
	this.instance.setTransform(-63.25,-38,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.book5_1, new cjs.Rectangle(-63.2,-38,126.5,76), null);


(lib.book4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.book4();
	this.instance.parent = this;
	this.instance.setTransform(-117.5,-63.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.book4_1, new cjs.Rectangle(-117.5,-63.5,235,127), null);


(lib.yajirusi_p = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444545").s().p("AAjA0IhMAAIAAgfIAoAAIg0gyIAWgWIA1A2IAAgqIAfAAIAABIQACATgRAAIgDAAg");
	this.shape.setTransform(-5.3448,-5.1698);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.yajirusi_p, new cjs.Rectangle(-10.7,-10.3,10.7,10.3), null);


(lib.window_shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.702)").s().p("AxJG9QgmAAgUgRQARAHAZAAIKxAAINvAAIJtAAQBOAAAChLIAAAEQAABRhRAAgAAImFQgRgmgJgRIAFAGQAJAMAaA2QAJAVAMAQQgTgVgQghg");
	this.shape.setTransform(118.95,47.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.463)").s().p("AxEHIQg1AAgUghIAIAGQAUAYAtAAMAh8AAAQBUAAAAhTIAAoyQAAgQgDgNIgDgQQAIASAAAbIAAIyQAABWhWAAgAA8k9IAAAAQgRgUgOgeQgbg4gIgLQgGgIgHgGIgFgHQAKAHAKANQAHAKAcA5QAUAoAVAUg");
	this.shape_1.setTransform(118.45,47.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.58)").s().p("AxGHDQguAAgUgZIAHAFQAVASAmAAMAh7AAAQBSAAgBhRIAAgFIAAo+IAAgMQADAMAAAQIAAIzQAABThUAAgAAtlMQgLgQgKgUQgZg3gKgLIgEgHIgGgJQAHAGAFAIQAJALAaA4QAPAeARATIgNgMg");
	this.shape_2.setTransform(118.7,47.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.231)").s().p("AxAHRQhGAAgQg2IAGAKQAUApA8AAMAh8AAAQBYAAAAhYIAAoyQAAglgOgVIgIgMQAZAWAAAwIAAIyQAABbhbAAgABZkpIgIgGQgYgUgUgqQgag3gKgNQgNgRgQgIIgHgGQAXAJAPAVQAKALAbA4QATApAXAVQAKAHAMAHg");
	this.shape_3.setTransform(118.05,47.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.349)").s().p("AxCHNQg8AAgUgqIAHAHQAUAgA1AAMAh8AAAQBWAAAAhWIAAoyQAAgagIgSIgEgOQAOAWAAAkIAAIyQAABZhYAAgABKkyQgVgUgUgoQgcg5gHgKQgKgNgKgGIgIgIQAQAJAOARQAJAMAaA3QAUAqAYAUIAIAGg");
	this.shape_4.setTransform(118.25,47.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.114)").s().p("Aw+HVQhRAAgLhGQACAHADAHQARA1BGAAMAh7AAAQBbAAAAhbIAAoyQABgvgZgXQgFgHgHgEQAnAVAAA8IAAIyQAABeheAAgABpkiQgMgGgJgIQgXgUgUgpQgbg4gKgMQgPgVgWgIIgJgGQAcAGAUAcQAJALAcA5QATApAYATQAQAPAYAGg");
	this.shape_5.setTransform(117.9,46.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.window_shadow, new cjs.Rectangle(0,0,235.8,93.8), null);


(lib.window_icon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		// ボイスオンオフ関係なしに表示させる
		/*
		if (exportRoot._g.voice_flag == false) {
			this.visible = false;
		}
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// triangle
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgjgbIBHAAIgkA3g");
	this.shape.setTransform(-0.025,0.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// frame
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.498)").s("#FFFFFF").ss(1,1,1).rr(-9,-8.1,18,16.2,2);
	this.shape_1.setTransform(-0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.window_icon, new cjs.Rectangle(-10,-9.1,20,18.2), null);


(lib.window_finish_2line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _line
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.247)").s().p("AxLEHQhaAAAAhaIAAlZQAAhaBaAAMAiXAAAQBaAAAABaIAAFZQAABahaAAgAybisIAAFZQAABQBQAAMAiXAAAQBQAAAAhQIAAlZQAAhQhQAAMgiXAAAQhQAAAABQg");
	this.shape.setTransform(0,-2.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.498)").s().p("AxLD9QhQAAAAhQIAAlZQAAhQBQAAMAiXAAAQBQAAAABQIAAFZQAABQhQAAgAyRisIAAFZQAABGBGAAMAiXAAAQBGAAAAhGIAAlZQAAhGhGAAMgiXAAAQhGAAAABGg");
	this.shape_1.setTransform(0,-2.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AxLDpQg8AAAAg8IAAlZQAAg8A8AAMAiXAAAQA8AAAAA8IAAFZQAAA8g8AAg");
	this.shape_2.setTransform(0,-2.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.749)").s().p("AxLDzQhGAAAAhGIAAlZQAAhGBGAAMAiXAAAQBGAAAABGIAAFZQAABGhGAAgAyHisIAAFZQAAA8A8AAMAiXAAAQA8AAAAg8IAAlZQAAg8g8AAMgiXAAAQg8AAAAA8g");
	this.shape_3.setTransform(0,-2.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.window_finish_2line, new cjs.Rectangle(-119,-28.5,238,52.5), null);


(lib.uru_gra = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.8)").s().p("AgOAXQgHgJAAgOQAAgMAHgKQAGgKAIAAQAJAAAGAKQAHAKAAAMQAAAOgHAJQgGAKgJAAQgIAAgGgKg");
	this.shape.setTransform(0.025,3.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.1,0,4.300000000000001,6.6);


(lib.textfield = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.line4 = new cjs.Text("", "14px 'Arial'");
	this.line4.name = "line4";
	this.line4.lineHeight = 18;
	this.line4.lineWidth = 260;
	this.line4.parent = this;
	this.line4.setTransform(2,50);

	this.line3 = new cjs.Text("", "14px 'Arial'");
	this.line3.name = "line3";
	this.line3.lineHeight = 18;
	this.line3.lineWidth = 260;
	this.line3.parent = this;
	this.line3.setTransform(2,34);

	this.line2 = new cjs.Text("", "14px 'Arial'");
	this.line2.name = "line2";
	this.line2.lineHeight = 18;
	this.line2.lineWidth = 260;
	this.line2.parent = this;
	this.line2.setTransform(2,18);

	this.line1 = new cjs.Text("", "14px 'Arial'");
	this.line1.name = "line1";
	this.line1.lineHeight = 18;
	this.line1.lineWidth = 260;
	this.line1.parent = this;
	this.line1.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.line1},{t:this.line2},{t:this.line3},{t:this.line4}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.textfield, new cjs.Rectangle(0,0,263.6,76.7), null);


(lib.squear = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AgGAHIAAgNIANAAIAAANg");
	this.shape.setTransform(0.725,0.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.squear, new cjs.Rectangle(0,0,1.5,1.5), null);


(lib.spread_flower_circle_pink = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,79,156,0.2)","#FF4194"],[0,1],0,0,0,0,0,47.8).s().p("AlPFQQiLiLAAjFQAAjECLiLQCLiLDEAAQDFAACLCLQCLCLAADEQAADFiLCLQiLCLjFAAQjEAAiLiLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.spread_flower_circle_pink, new cjs.Rectangle(-47.5,-47.5,95,95), null);


(lib.sigh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#07D5F1").ss(1.5,1,1).p("ABEg9QAUgDAQgLQAPgIAKgOQALgPACgHQAAAMgCAMQgDAWgNATQgPAWgVATQAIAKAAAkQAAATgLARQgKAPgNAEQgHADgWgCQgTgCgBABQgDACgbAWQgNAJgXgBQgWgCgPgQQgNgPgHgLQgJgIgNgTQgMgTAEgXQAEgVAPgPQAQgPAIgDIATgbQARgYAkgGQAhgFAhAWQAaASABAIg");
	this.shape.setTransform(0.8654,-0.0398);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// レイヤー_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag1B4QgWgCgPgQQgNgPgHgLQgJgIgNgTQgMgTAEgXQAEgVAPgPQAQgPAIgDIATgbQARgYAkgGQAhgFAhAWQAaASABAIQAUgDAQgLQAPgIAKgOQALgPACgHQAAAMgCAMQgDAWgNATQgPAWgVATQAIAKAAAkQAAATgLARQgKAPgNAEQgHADgWgCQgTgCgBABIgeAYQgLAIgTAAIgGAAg");
	this.shape_1.setTransform(0.8654,-0.0398);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.3,-13,30.400000000000002,26);


(lib.shock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shock2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFCC00").ss(0.5,1,1).p("AgtgvIDzhsIivDKIDCBEIjaAUIBGB+IiYhwQAPgdgDglQgEgfgLgPQgUgZgggIQghgHgRAJIgcisIBUBSIBhiwg");
	this.shape.setTransform(8.325,-2.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFD200","rgba(255,198,88,0.498)"],[0,1],-14.7,3.9,0,-14.7,3.9,24.1).s().p("AhTCVQAPgdgDglQgEgfgLgPQgUgZgggIQghgHgRAJIgcisIBUBSIBhiwIgKDVIDzhsIivDKIDCBEIjaAUIBGB+g");
	this.shape_1.setTransform(8.325,-2.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.6,-29.6,46.7,54.1);


(lib.shield = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhK/BH4MAAAiPvMCV/AAAMAAACPvgA13XcMAlfAAAMAAAgwbMglfAAAg");
	this.shape.setTransform(20,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.shield, new cjs.Rectangle(-460,-460,960,920), null);


(lib.sender = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
		
		this.stop();
	}
	this.frame_1 = function() {
		/* play();
		*/
	}
	this.frame_55 = function() {
		/* /:key_flag = 1;
		gotoAndStop( 1 );
		gotoAndPlay( "/pusher/:l" );
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(54).call(this.frame_55).wait(1));

	// Layer1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Ah8B9IAAj5ID5AAIAAD5g");
	this.shape.setTransform(12.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(56));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25,25);


(lib.roader_ring2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQAFQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAgBgBQABAAAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAIAiAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAg");
	this.shape.setTransform(4.7,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.roader_ring2, new cjs.Rectangle(2,-1,5.5,2), null);


(lib.ranko_finish_blur = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_3
	this.instance = new lib.finish_blur();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ranko_finish_blur, new cjs.Rectangle(0,0,240,310), null);


(lib.question = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#FFDDB6"],[0.463,1],0,-17.7,0.3,17.7).s().p("Ag+CaIAAgPQAAgmARgbQAPgaAjgXQAUgMAIgLQAJgLAAgRQAAgSgNgKQgNgLgWgBQgXABgNARQgOAQAAAgIh4gRQABgwAWgiQAXgjApgSQAogSAzgBQA0AAAnARQAnARAWAeQAXAeAAAoQABApgQAeQgPAdgjAWIgcATQgMAIgGALQgIAKAAAOIABAMIABAMIh3ABIgDgSg");
	this.shape.setTransform(-0.2742,-7.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE1BF").s().p("AhBg7ICDgBIABB4IiEABg");
	this.shape_1.setTransform(-0.2,19.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// レイヤー_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF8C00").ss(3,1,1).p("ABRjIQgigPgtAAQgrAAgjAPQgjAQgUAdQgUAdgBAqIBoAQQAAgcAMgOQALgPAUAAQATABALAJQALAKAAAPQAAAOgIAKQgHAKgRAKQgeAUgOAWQgOAXAAAgQAAAHAAAGQABAIABAHIBmAAQgBgFAAgFQgBgFAAgFQAAgMAHgJQAGgJAKgGQALgIANgJQAfgSANgZQAOgaAAgkQAAgigUgaQgSgagigPgAA3BvIhwAAIAABpIBwAAg");
	this.shape_2.setTransform(-0.1696,0.1705,1.1607,1.1607,-0.47);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag5DYIAAhpIBwAAIAABpgAg0BQIgCgQIAAgNQAAggAOgWQAOgXAegTQARgLAHgJQAIgKAAgPQAAgPgLgKQgLgIgTgCQgUAAgLAPQgMAOAAAcIhogPQABgqAUgdQAUgeAjgQQAjgPArAAQAtABAiAOQAiAPASAaQAUAaAAAiQAAAkgOAaQgNAZgfATIgYAQQgKAGgGAJQgHAJAAANIABAKIABAKg");
	this.shape_3.setTransform(-0.1696,0.1705,1.1607,1.1607,-0.47);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.question, new cjs.Rectangle(-19.5,-26.4,38.5,53.2), null);


(lib.pusher_next_inner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.851)").s().p("AAQA3IAHg1IgtAAIgGA1IgWAAIAPhsIAUAAIgGAxIAtAAIAGgxIAUAAIgLBsg");
	this.shape.setTransform(17.2,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.851)").s().p("AguA3IADgiIAWAAIgCAaIApAAIAEguIg/AAIAIg2IBQAAIgDAeIgVAAIACgXIgnAAIgFAoIA+AAIgEA9g");
	this.shape_1.setTransform(5.95,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.851)").s().p("AgxA2IANhrIAVAAIgMBkIAsAAIANhkIAUAAIgLBrg");
	this.shape_2.setTransform(-4.95,1.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.851)").s().p("AgwA2IAOhrIBTAAIgHA8Ig4AAIACgHIAhAAIAHguIgqAAIgMBkg");
	this.shape_3.setTransform(-16,1.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.2,-12.1,48.4,24.299999999999997);


(lib.pointGlitter2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.988)").s().p("AlaAAIFalaIFaFaIlaFag");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.6,-34.6,69.30000000000001,69.30000000000001);


(lib.placebase_sp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.tie_sp();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.placebase_sp, new cjs.Rectangle(0,0,240,32), null);


(lib.placebase_fp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.tie_fp();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.placebase_fp, new cjs.Rectangle(0,0,240,32), null);


(lib.pin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F96A05").s().p("ALwXgQgcgQgRgcIiWkCIAEAoQAFApgWAjQgWAjgnAPQgTAHgWAAQgeAAgagOQgbgOgQgZInMqnQibCTi/AAQiDAAh4hGQh5hGhZh/QhYh8gTiCQgUiBA0hwQAdg/AxgyQhqg/hKhZQhKhZgnhvQhBi4AtjNQAsjOCQi1QBuiLCvhTQCuhTC1AAQBwAABiAiQBjAiBOBBQA9AzAwBIQBPhlB2gzQBoguB2AAQCXAACKBIQCLBHBRB5QCuEAg5DrQgYBhg8BVQBlAuA2BeQAyBXgDBpQgDBog4BgQgzBahQAwQhPAwhjAAQguAAgvgLICKSxQAFArgXAjQgXAkgoAOQgSAGgUAAQggAAgbgPgAMrV3Iii17IBIAnQBYAoBMAAQCFAABIh8QBSiQhDh8Qgeg4g4ggQg6ghhJAAQhVAAheAwQDsiCA/iyQBFjFiejqQhChhhwg6Qhwg4h4AAQicAAhvBdQh+BqgiDJQgljqiNh3Qh+hpi4AAQiZAAiXBIQiWBHhcB1Qh2CTgqClQgpCjAoCUQApCZB5BrQCBBzDLAuQhnAKhJAyQhHAwgeBOQgfBOAQBcQASBgBDBgQBGBkBdA5QBiA7BmAAQBfAABYg1QBfg5BPhzIIkMqIhEpbg");
	this.shape.setTransform(18.6476,28.4776,0.1749,0.1749,29.9978);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AF2KMIBEJbIoksqQilDxjbgRQhfgIhag6QhWg4hBhdQhDhggShgQgQhcAfhOQAehOBHgwQBJgyBngKQjLguiBhzQh5hrgpiZQgoiUApijQAqilB2iTQBhh7CghIQChhJCfAJQCuAJB1BpQCDB3AjDgQAgi6BthoQBiheCMgOQCDgNB/A5QCAA6BIBrQCgDthKDIQhACujpCAQBmg1BfAFQBdAFA/A7QA9A5AKBVQAKBbg0BcQhaCci5goQg5gNg9gfIgwgbICiV7g");
	this.shape_1.setTransform(18.646,28.4779,0.1749,0.1749,29.9978);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pin, new cjs.Rectangle(0,0,44.6,58.9), null);


(lib.petal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.663)").s().p("Ag3BXQgFgCgDgFQgHgJgCgLQgTgIgIglIAAAAQgGgcAVgSQAOgOAjgHIAFAAQAnACA4gkQAGgEAJACQAMACAEAOQASBFgsAvQgjAphQAEIgCAAQgEAAgEgCgAghgqQgfAGgOAMQgQAPAFAWQAHAjASAEQACAMAHALIAEADIAFABQBLgDAhgmQAogrgQhBQgCgIgGgBQgEgBgDADQg8AmgqgDIAAAAIgCAAg");
	this.shape.setTransform(-0.4522,0.0056);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.329)").s().p("Ag7BgQgHgDgEgHQgGgIgDgJQgUgLgIgpQgHghAYgWQAQgRAngGIAHgBQAlABA0ghQAJgFAKABQALABAHAHQAIAHABAKQAMBRgoArQglAshWAFIgBAAQgHAAgHgEgAgig0QgiAHgPAOQgUATAGAbIAAAAQAHAlATAJQADAKAGAKQADAEAFADQAFACAFAAQBQgFAjgpQAsgvgShFQgEgOgMgCQgJgBgFADQg5AkgngCIgBAAIgEAAg");
	this.shape_1.setTransform(-0.5846,-0.0065);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgzBPIgDgEQgIgLgBgMQgSgEgIgjQgEgWAQgOQANgNAfgGIADAAQApADA8gmQADgCAEABQAGAAACAIQAQBBgnArQghAmhMAEIAAAAIgFgBg");
	this.shape_2.setTransform(-0.4869,-0.0144);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.petal, new cjs.Rectangle(-11.5,-9.9,21.9,19.9), null);


(lib.loading_O = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguAzIANhlIBQAAIgLBlgAgZAsIAqAAIAKhXIgqAAg");
	this.shape.setTransform(0.6,1.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.loading_O, new cjs.Rectangle(-7.3,-11.4,14.6,22.9), null);


(lib.loading_N = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAQAzIgghVIgKBVIgUAAIANhlIATAAIAfBVIALhVIATAAIgLBlg");
	this.shape.setTransform(0.6,1.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.loading_N, new cjs.Rectangle(-7.3,-11.4,14.6,22.9), null);


(lib.loading_L = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AglAyIANhjIAUAAIgNBcIA3AAIgCAHg");
	this.shape.setTransform(0.6,1.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.loading_L, new cjs.Rectangle(-6.4,-11.4,12.9,22.9), null);


(lib.loading_I = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQAyIAOhjIASAAIgMBjg");
	this.shape.setTransform(-0.2,1.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.loading_I, new cjs.Rectangle(-5.1,-11.4,10.2,22.9), null);


(lib.loading_G = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgtAyIANhkIBOAAIgEAfIgTAAIACgYIgmAAIgKBXIApAAIAGgqIgbAAIABgFIAuAAIgHA1g");
	this.shape.setTransform(0.45,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.loading_G, new cjs.Rectangle(-7.3,-11.4,14.7,22.9), null);


(lib.loading_D = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguAzIANhlIBOAAIACAwIgOA1gAgZAsIAnAAIANguIgBgpIgpAAg");
	this.shape.setTransform(0.475,1.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.loading_D, new cjs.Rectangle(-7.4,-11.4,14.8,22.9), null);


(lib.loading_A = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAeAzIgJgpIgjAAIgQApIgUAAIAnhlIAkAAIAaBlgAATADIgLguIgEAAIgQAuIAfAAg");
	this.shape.setTransform(0,1.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.loading_A, new cjs.Rectangle(-7.4,-11.4,14.8,22.9), null);


(lib.loading_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLAKIADgUIAUAAIgCAUg");
	this.shape.setTransform(-0.725,5.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.loading_, new cjs.Rectangle(-5.1,-11.4,10.2,22.9), null);


(lib.laugh_parts1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pink_default
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF00FC","#FFB6FE"],[0,1],-16.7,0,16.8,0).s().p("AimhBIFBgWIAMBlIlCBKgAiTgxIAIBzIEfhCIgJhFg");
	this.shape.setTransform(16.725,28.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF8AF1","#FFFFFF"],[0,0.808],-14.8,0,14.8,0).s().p("AiTgwIEegTIAJBFIkfBCg");
	this.shape_1.setTransform(16.7,28);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FF00FC","#FFB6FE"],[0,1],-13.2,0,13.3,0).s().p("AiEgBIDHiHIBBBPIjDDCgAhsAEIAxBnICoilIgtg2g");
	this.shape_2.setTransform(27.2,44.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FF8AF1","#FFFFFF"],[0,0.808],-10.9,0,10.9,0).s().p("AhsAHICsh0IAtA2IinClg");
	this.shape_3.setTransform(27.15,44.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FF00FC","#FFB6FE"],[0,1],-13.5,0,13.5,0).s().p("Ah+BEIgIiZIENBHIgSBkgAhtA0IDUAPIALhFIjlg7g");
	this.shape_4.setTransform(20.7,8.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FF8AF1","#FFFFFF"],[0,0.808],-11.5,0,11.6,0).s().p("AhsAyIgGhxIDlA7IgLBFg");
	this.shape_5.setTransform(20.6,8.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.laugh_parts1, new cjs.Rectangle(0,-3.9,40.5,62.3), null);


(lib.laugh_parts_a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// orange
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF9933","#FCE99A"],[0,1],-9.8,0,9.9,0).s().p("AhbAyIgHhxIDEA7IgKBEg");
	this.shape.setTransform(-17.85,-20.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FE9E39","#FCE99A"],[0,1],-10.9,0,10.9,0).s().p("AhsAHICth0IAsA2IinClg");
	this.shape_1.setTransform(-13.3,15.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FE9C37","#FCE99A"],[0,1],-14.8,0,14.8,0).s().p("AiTgrIEegSIAJA/IkfA8g");
	this.shape_2.setTransform(-23.75,-1.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF7812").s().p("Ag+CZIDHiHIBBBPIjFDDgAgnCfIAxBnICoimIgsg2gAjJhGIFBgUIAMBcIlCBFgAi2g3IAIBpIEfg7IgJhAgAhSiJIgHiaIDlBHIgQBkgAhEiZIC0AOIAKhFIjEg8g");
	this.shape_3.setTransform(-20.225,0.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FE9E39","#FCE99A"],[0,1],-13.8,0,13.9,0).s().p("AiKApIDtirIAoAuIjnDXg");
	this.shape_4.setTransform(-16.025,14.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FE9E39","#FCE99A"],[0,1],-13.9,0,13.9,0).s().p("AiCAnIgIhjIEVA9IgJA8g");
	this.shape_5.setTransform(-21.65,-21.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FE9E39","#FCE99A"],[0,1],-8.9,0,9,0).s().p("AhQAxIAAgEIAAgEIgBgCIAAgDIAAgEIgBgDIAAgEIAAgBIgBgCIAAgDIAAgDIgBgDIAAgFIAAgCIAAgFIgEguICpgPIAJBAIipA5g");
	this.shape_6.setTransform(-16.9,-3.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF781E").s().p("AiDC1IEDi8IA6BDIkADwgAhwC5IAuBaIDnjYIgogugAhYhiIDHgSIANBeIjHBDgAhHhTIAEAvIAAAEIABADIAAAEIAAAEIABADIAAACIAAADIAAABIAAAEIABACIAAAFIAAABIABACIAAAFIAAADIABANICpg4IgJhBgAivilIgKiGIE3BGIgOBZgAigizIEEAWIAJg8IkVg+g");
	this.shape_7.setTransform(-18.625,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.4,-30,40.4,60.1);


(lib.hikari_ob = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_3
	this.instance = new lib.sun_light();
	this.instance.parent = this;
	this.instance.setTransform(-24,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,0,48,284);


(lib.heart_vector = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgAGArOIgMgDQgPgGgHgMQmLlZnmlZQiAhbjzimQkAiuh1hSQkmjPjajDQkEjoi6jyQjLkKiAkrQiEk0gqlCQhKo8DPoPQDbotHNk0QEZi7FSg8QFQg8FLBOQFaBREYDDQEOC8CFD3QBcilCeiRQCxigDlhtQERiCElghQEpgiEfBFIADABIADAAIABABQHIB0FUFoQFHFZCDHYQCrJoi/KCQi2JknOHaQjuD1jiCuQh0BbiVBoQhiBGitB1QmtEmkQDIQlzETkiD+QgGAMgQAGIgMADIgHABgEgcNgpAQlDBUj7DOQjQCqiYDoQiUDihPEIQhWEagFEsQgFEqBKEgQBWFJC1ExQCuElD7D4QD8D5DQCcQB2BZCbBtIEWC+QGeEaDyC0QC/CPCgCBQBhBOBeBQIBXBLIBKg/ICTh7QCEhsCXh0QDui1E+jdQCXhoExjOQEKi3CxiRQJZnuEIofQCJkaA6kvQA7k3gdkyQgakShikBQhikEihjWQldnPoSiHIgDAAQkRhCkdAgQkcAhj+B+QjaBsihCTQi2CmhYDGQgKAWgdAAQgcAAgKgWQiHkylLjVQktjDllg4Qh7gTh6AAQjIAAjGA0g");
	this.shape.setTransform(206.7985,181.7222,0.6568,0.6568);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FF6B93","#FFB4C8","#FFFFFF"],[0,0.651,1],0,0,0,0,0,224.2).s().p("AAAb7IAAABIAAgBQjKiyjtiwQiYhwj3ipQj7ishbhCQinh7hjhlQljk8iTmWQiFl0A/l4QA9lqDekHQDkkOFHhRQDAgwDHAaQC1AXCnBSQCdBMB2BwQBzBvAzB4QA0h4B0hvQB2hwCbhMQCohSC1gXQDHgaC/AwQFJBRDjEOQDeEHA9FqQA/F4iFF0QiSGWlkE8QhjBlioB7QhaBCj6CsQj4CpiYBwQjtCwjKCyIAAABg");
	this.shape_1.setTransform(206.8,181.7046);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.heart_vector, new cjs.Rectangle(0,0,413.6,363.5), null);


(lib.grip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AkkAAIEkkkIElEkIklElg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.3,-29.3,58.7,58.7);


(lib.gr_exclamation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF8C00").ss(1.5,1,1).p("AArDkIhVAAIAAhHIBVAAgABLjjIgjFTIhPAAIgjlTg");
	this.shape.setTransform(0,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD09A").s().p("AgpAjIAAhFIBTAAIAABFg");
	this.shape_1.setTransform(0,18.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","#FFCE95"],[0,1],0,-7.5,0,7.5).s().p("AgnCqIgjlTICVAAIgjFTg");
	this.shape_2.setTransform(0,-6.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.gr_exclamation, new cjs.Rectangle(-8.5,-24.1,17,47.5), null);


(lib.good_circle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,244,194,0.2)","#FFCA4A"],[0,1],0,0,0,0,0,47.8).s().p("AlPFQQiLiLAAjFQAAjECLiLQCLiLDEAAQDFAACLCLQCLCLAADEQAADFiLCLQiLCLjFAAQjEAAiLiLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.good_circle, new cjs.Rectangle(-47.5,-47.5,95,95), null);


(lib.flower2_good = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC66").s().p("AgXA3QgOgGAIgTQAGgOANgMQgOABgRgGQgTgIAGgOQAGgOATAIQAQAIAKALQgBgOAGgRQAJgTANAGQAOAHgIASQgHAQgMAKQAOgBARAGQATAJgGANQgGAOgTgIQgQgHgKgMQABAOgGARQgHAOgJAAIgGgBg");
	this.shape.setTransform(0.0156,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.6,-5.6,11.3,11.3);


(lib.flower1_good = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF99").s().p("AgCBHQgJgcADgZQgTASgbAJQggAKgIgXQgIgYAhgKQAbgJAZADQgRgRgKgdQgKggAXgIQAYgIAKAhQAJAbgDAaQAQgRAegKQAggLAIAXQAIAYghAKQgbAJgagDQASARAJAdQAMAggYAIQgFABgFAAQgQAAgIgZg");
	this.shape.setTransform(0.017,-0.0159);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.6,-9.6,19.299999999999997,19.299999999999997);


(lib.flower_pink2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF74BA").s().p("AgXA3QgOgGAIgTQAGgOANgMQgOABgRgGQgTgIAGgOQAGgOATAIQAQAIAKALQgBgOAGgRQAJgTANAGQAOAHgIASQgHAQgMAKQAOgBARAGQATAJgGANQgGAOgTgIQgQgHgKgMQABAOgGARQgHAOgJAAIgGgBg");
	this.shape.setTransform(0.0156,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.6,-5.6,11.3,11.3);


(lib.flower_pink1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFA9E9").s().p("AgCBHQgJgcADgZQgTASgbAJQggAKgIgXQgIgYAhgKQAbgJAZADQgRgRgKgdQgKggAXgIQAYgIAKAhQAJAbgDAaQAQgRAegKQAggLAIAXQAIAYghAKQgbAJgagDQASARAJAdQAMAggYAIQgFABgFAAQgQAAgIgZg");
	this.shape.setTransform(0.017,-0.0159);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.6,-9.6,19.299999999999997,19.299999999999997);


(lib.finish_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_2
	this.instance = new lib.finish();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.finish_1, new cjs.Rectangle(0,0,240,310), null);


(lib.drop2_v2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AhMgEQgLAeAnALQAKABAmgHQAhgHAuAKIgbgjQghgjgjgBQgwAAgMAhg");
	this.shape.setTransform(0.004,0.0059);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(255,255,255,0)","#FFFFFF"],[0,0.569],0,0,0,0,0,8.9).s().p("AgwAlQgngLALgeQAMghAwAAQAjABAhAjIAbAjQgugKghAHQghAHgMAAIgDgBg");
	this.shape_1.setTransform(0.004,0.0059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.9,-4.7,17.8,9.5);


(lib.drop1a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAhAhQgCgDAAgEQAAgEACgDQAEgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgEgDgAgoAYQgKgKAAgOQAAgOAKgLQALgKAOAAQAPAAAJAKQAKALAAAOQAAAOgKAKQgJAKgPAAQgOAAgLgKg");
	this.shape.setTransform(-1.075,13.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// レイヤー_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A9E5F2").s().p("AAACjQgcABgNgTQgLgRADgaQADgqAujfQAuDfAEAqQADAagLARQgMATgbAAIgDgBg");
	this.shape_1.setTransform(0.375,2.9024);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// レイヤー_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A9E5F2").s().p("AhKDRQgXgbAFgnQAHg8BRk9IACgDIACgBIADABIACADQBSE9AHA8QAEAmgbAcIAAAAQgcAdguABIgCAAQgtAAgYgegAhSCQQgFAiAUAZQAXAaApAAQAqgBAZgaIAAAAQAYgZgEghIAAAAQgHg6hNkrQhMErgGA6g");
	this.shape_2.setTransform(0.5441,-0.5995);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhDDDQgUgYAFgiQAGg6BMksQBNEsAHA6IAAAAQAEAhgYAZIAAAAQgZAagqABIgBAAQgpAAgWgbg");
	this.shape_3.setTransform(0.5443,0.1378);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.8,-24.5,18.8,47.8);


(lib.drop1_v2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AA4hDQAgAYgfAmQgJAHgrASQglAQgmAqQgDgZAFgdQAJg5AjgZQAvghAhAYg");
	this.shape.setTransform(1.2129,1.7575,1,1,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(255,255,255,0)","#FFFFFF"],[0,0.569],-0.6,-2,0,-0.6,-2,10.4).s().p("AhEAYQAJg5AjgZQAvghAhAYQAgAYgfAmQgJAHgrASQglAQgmAqQgDgZAFgdg");
	this.shape_1.setTransform(1.2129,1.7575,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-7,16.5,17.6);


(lib.dark = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AyvYOMAAAgwbMAlfAAAMAAAAwbg");
	this.shape.setTransform(1,0,1.0083,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.dark, new cjs.Rectangle(-120,-155,242,310), null);


(lib.chord2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FC8D05").s().p("AAZDjQgegIgGgUQgGgVAUgUQAWgUAkgJQAlgIAeAIIAMAEIAAjNQgJgHh6hUIAADGIADAHQAGAUgUAUQgWAUglAJQgkAIgegIQgfgIgGgUQgGgVAVgUQAWgUAkgJQAlgIAeAIIAMAEIAAj3IBXA8QBIAzANALQABAKAAB9IABB8IADAHQAGAUgVAUQgWAUglAJQgSAEgQAAQgRAAgPgEg");
	this.shape.setTransform(16.66,23.1125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.chord2, new cjs.Rectangle(0,0,33.3,46.2), null);


(lib.chord1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCE05F").s().p("Ah3CpQgfgIgGgUQgGgVAVgUQAWgUAkgJQAlgIAeAIIAMAEIAAj3QAIAIAiAKQArALASAJQBKAjgTBgQgShGg9gXQgUgHgVgCIgRAAIAADGIADAHQAGAUgVAUQgVAUglAJQgSAEgQAAQgRAAgPgEg");
	this.shape.setTransform(15.8526,17.3125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.chord1, new cjs.Rectangle(0,0,31.7,34.6), null);


(lib.character1_face_eyeclose = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// as
	this.instance = new lib.ch_face6();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.character1_face_eyeclose, new cjs.Rectangle(0,0,160,160), null);


(lib.character1_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.instance = new lib.ch_base();
	this.instance.parent = this;
	this.instance.setTransform(-120,-396,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.character1_base, new cjs.Rectangle(-120,-396,600,700), null);


(lib.button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(83,83,83,0.008)").s().p("AyvYOMAAAgwbMAlfAAAMAAAAwbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-155,240,310);


(lib.btn_window = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.02)").s().p("AjHDIIAAmPIGPAAIAAGPg");
	this.shape.setTransform(20,20);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40,40);


(lib.bg_zoom_half = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bg_image
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,700);


(lib.angry = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C6002C").ss(2,1,1).p("AgwA7QgGgeAJgdQATg6BOAA");
	this.shape.setTransform(7.5339,8.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#C6002C").ss(2,1,1).p("AAxA7QAHgegKgdQgTg6hOAA");
	this.shape_1.setTransform(-7.468,8.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#C6002C").ss(2,1,1).p("Agwg6IgCATQgBAWAGARQATA7BOAA");
	this.shape_2.setTransform(7.5481,-7.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#C6002C").ss(2,1,1).p("AAxg6IACATQABAWgGARQgTA7hOAA");
	this.shape_3.setTransform(-7.4979,-7.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.6,-14.8,27.299999999999997,29.700000000000003);


(lib.concent2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Agow/IBRACMgAgAh9g");
	this.shape.setTransform(2.575,-204.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.concent2, new cjs.Rectangle(-1.5,-313,8.2,217.7), null);


(lib.concent = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAm8aMAAYA4gIh7AUg");
	this.shape.setTransform(3.475,285.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.concent, new cjs.Rectangle(-2.7,104,12.399999999999999,363.7), null);


(lib.yajirusi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_8 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(1));

	// レイヤー_1
	this.instance = new lib.yajirusi_p();
	this.instance.parent = this;
	this.instance.setTransform(-1.5,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-5.3,regY:-5.2,x:-6.55,y:-6.45},0).wait(1).to({x:-6,y:-5.9},0).wait(1).to({x:-5.45,y:-5.35},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:-5.3,regY:-5.2,x:-5.5,y:-5.4},0).wait(1).to({x:-6.05,y:-5.95},0).wait(1).to({x:-6.6,y:-6.5},0).wait(1).to({regX:0,regY:0,x:-1.5,y:-1.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.2,-11.8,12.2,11.8);


(lib.uru_set = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_5 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(5).call(this.frame_5).wait(1));

	// レイヤー_1
	this.instance = new lib.uru_gra("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,3.3,1,1,0,0,0,0,3.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,-0.1,4.5,6.8999999999999995);


(lib.tie_inner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		if (exportRoot._g.voice_flag == false) {
			this.s.visible = false;
		} else{
			this.f.visible = false;
		};
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// SP_base
	this.s = new lib.placebase_sp();
	this.s.name = "s";
	this.s.parent = this;
	this.s.setTransform(0,0,1,1,0,0,0,120,16);

	this.timeline.addTween(cjs.Tween.get(this.s).wait(1));

	// FP_base
	this.f = new lib.placebase_fp();
	this.f.name = "f";
	this.f.parent = this;
	this.f.setTransform(0,0,1,1,0,0,0,120,16);

	this.timeline.addTween(cjs.Tween.get(this.f).wait(1));

}).prototype = getMCSymbolPrototype(lib.tie_inner, new cjs.Rectangle(-120,-16,240,32), null);


(lib.tie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AhLA6QAMgJAHgMQAIgLADgOQAEgMACgOQABgOAAgOIAAgMIAAgMIASAAIAAALQgBAdgCAWQgDAVgIASQgIASgPAPgAAAAgIAAggIAAhDIAQAAIAAAMIAAARIAAAVIAAAVIAAAVIAAAPQALgFAJgKQAJgJAHgMQAGgLAFgMIANAPQgEAJgIAMQgGALgKAKQgKAKgMAIQgMAHgOADIAAgig");
	this.shape.setTransform(72.15,0.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("Ag+A2QARgFALgGQAMgHAGgIQAGgIADgLQADgJAAgKIhBAAIAAgQICLAAIAAAQIg4AAQgBAMgEAMQgDAMgGAKQgGAKgMAIQgLAIgRAGgAg1gzIAAgQIBrAAIAAAQg");
	this.shape_1.setTransform(55.975,0.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgOBHIgFAAIgFAAIgEAAIgGgSIAJAAIAIABQAGgBADgCQADgCABgFIAAgNIAAgRIgBgTIAAgVIg8AAIAAgQIA8AAIAAgcIARAAIAAAcIA4AAIAAAQIg4AAIAAAXIAAAWIAAARIAAAKIAAAAQAAAKgEAFQgDAFgFACQgFADgFAAIgEAAgAhKA1QAIgKAFgLQAGgLAEgKIAGgTIARADIgGAWIgKAXIgLAVgAAxAkIgLgXIgLgSIAQgFIALAQIAMAVIAJAUIgSAKQgDgKgFgLg");
	this.shape_2.setTransform(39.925,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("Ag4BHIAAiNIATAAIAAApIAPAFIAUAGIAUAHIAVAIIASAHIgIATIgdgOIgdgLIgcgJIAABSg");
	this.shape_3.setTransform(25.075,0.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AhEAJIAAgRICJAAIAAARg");
	this.shape_4.setTransform(8,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("Ag+A8QAdgIATgNQATgNAMgUQALgUAFgfIAAABIgGgNIgHgMIALgDIAGAKIAGAMIAKADQgEAWgGAUQgHASgLAPQgMAPgRAMQgSAMgaAIgAgzgNIgJgUIgJgQIAQgHIAJAOIAKAUIAJAUIgSAIIgIgTgAA1g4IgIgOIALgEIAHANIAHAOIgKAEIgHgNg");
	this.shape_5.setTransform(-7.05,-0.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgqA2QAWgCAOgHQANgFAIgJQAIgJAEgJQADgLAAgJIAAgJIAAgKIAAgRIAAgPIAAgMIATAAIAAAgIAAAgQgBARgGANQgGANgLAJQgLAKgOAFQgOAHgRACgAgwAOIAAhUIASAAIAABUg");
	this.shape_6.setTransform(-23.975,0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgGAzQARgBAOgHQANgGAIgLQAIgLABgQIAAgBQAAgQgGgKQgGgLgKgGQgKgGgMgBQgEAZgFAUQgEASgFANQgFANgFAGQgEAHgGADQgFADgGAAQgFAAgGgCQgGgDgFgGQgFgFgDgJQgEgKAAgNQAAgNAFgOQAGgNAKgLQAKgLAOgGQAOgGARAAIABAAQATAAAOAGQANAGAHAKQAIAKAEALQADALAAAKIAAABQAAAKgEAKQgDALgIAKQgHAKgOAHQgOAHgVADgAgbgrQgJAGgGAIQgHAJgDAKQgEAKAAAJQABAKACAHQADAHAEADQAEADADAAQADAAACgCIAEgEQAEgHAEgMIAJgdQAEgRACgUQgLADgJAGg");
	this.shape_7.setTransform(-39.875,0.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AA2BIIAAgJIhrAAIAAAJIgQAAIAAiQICLAAIAACRgAg1AwIBrAAIAAhpIhrAAgAguAkIAAgNIAmAAIAAgXIgeAAIAAgNIAeAAIAAgSIgiAAIAAgOIBTAAIAAAOIghAAIAAASIAeAAIAAANIgeAAIAAAXIATAAIgEgGIgJgIIALgIIAKAJIAEAFIgJAIIARAAIAAANg");
	this.shape_8.setTransform(-55.975,0.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AAaA8IAQgBQAGAAABgCQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAAAIAAhFIgdAAIALAFIgDAFIgEAFIgDAEIAPAAIAAAOIgeAAIAAANIAhAAIAAAOIghAAIAAAYIgPAAIAAgYIgiAAIAAgOIAiAAIAAgNIgfAAIAAgOIAQAAIgDgEIgEgGIgDgEIAKgFIgcAAIAABaIgRAAIAAhoIA8AAIAAgPIhEAAIAAgQIBEAAIAAgOIAPAAIAAAOIBEAAIAAAQIhEAAIAAAPIA7AAIAABTQAAAJgEAEQgEAFgIABQgIACgKAAgAgMgIIAEAIIACAEIAMAAIAFgIIAFgLIgfAAIADAHg");
	this.shape_9.setTransform(-72,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// base
	this.instance = new lib.tie_inner();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tie, new cjs.Rectangle(-120,-16,240,32), null);


(lib.square2c = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.squear();
	this.instance.parent = this;
	this.instance.setTransform(0.7,20.7,1,1,0,0,0,0.7,0.7);

	this.instance_1 = new lib.squear();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.7,18.2,1,1,0,0,0,0.7,0.7);

	this.instance_2 = new lib.squear();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.7,15.7,1,1,0,0,0,0.7,0.7);

	this.instance_3 = new lib.squear();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0.7,13.2,1,1,0,0,0,0.7,0.7);

	this.instance_4 = new lib.squear();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0.7,10.7,1,1,0,0,0,0.7,0.7);

	this.instance_5 = new lib.squear();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0.7,8.2,1,1,0,0,0,0.7,0.7);

	this.instance_6 = new lib.squear();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0.7,5.7,1,1,0,0,0,0.7,0.7);

	this.instance_7 = new lib.squear();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0.7,3.2,1,1,0,0,0,0.7,0.7);

	this.instance_8 = new lib.squear();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0.7,0.7,1,1,0,0,0,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.square2c, new cjs.Rectangle(0,0,1.5,21.5), null);


(lib.square2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.squear();
	this.instance.parent = this;
	this.instance.setTransform(0.7,25.7,1,1,0,0,0,0.7,0.7);

	this.instance_1 = new lib.squear();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.7,23.2,1,1,0,0,0,0.7,0.7);

	this.instance_2 = new lib.squear();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.7,20.7,1,1,0,0,0,0.7,0.7);

	this.instance_3 = new lib.squear();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0.7,18.2,1,1,0,0,0,0.7,0.7);

	this.instance_4 = new lib.squear();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0.7,15.7,1,1,0,0,0,0.7,0.7);

	this.instance_5 = new lib.squear();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0.7,13.2,1,1,0,0,0,0.7,0.7);

	this.instance_6 = new lib.squear();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0.7,10.7,1,1,0,0,0,0.7,0.7);

	this.instance_7 = new lib.squear();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0.7,8.2,1,1,0,0,0,0.7,0.7);

	this.instance_8 = new lib.squear();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0.7,5.7,1,1,0,0,0,0.7,0.7);

	this.instance_9 = new lib.squear();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0.7,3.2,1,1,0,0,0,0.7,0.7);

	this.instance_10 = new lib.squear();
	this.instance_10.parent = this;
	this.instance_10.setTransform(0.7,0.7,1,1,0,0,0,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.square2, new cjs.Rectangle(0,0,1.5,26.5), null);


(lib.spread_flower_pink = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(1));

	// flower3
	this.instance = new lib.flower_pink2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(21.35,5.15,0.7153,0.7153);
	this.instance.filters = [new cjs.ColorFilter(0.83, 0.83, 0.83, 1, 43.35, 43.35, 43.35, 0)];
	this.instance.cache(-8,-8,15,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.9946,scaleY:0.9946,rotation:-144.6153,x:43.3235,y:3.744,alpha:0.6862},0).wait(1).to({scaleX:1.081,scaleY:1.081,rotation:-189.3044,x:50.1138,y:3.3095,alpha:0.5892},0).wait(1).to({scaleX:1.139,scaleY:1.139,rotation:-219.35,x:54.679,y:3.0174,alpha:0.524},0).wait(1).to({scaleX:1.2095,scaleY:1.2095,rotation:-255.8693,x:60.2279,y:2.6624,alpha:0.4447},0).wait(1).to({scaleX:1.4107,scaleY:1.4107,rotation:-360,x:76.05,y:1.65,alpha:0.2188},0).to({_off:true},1).wait(2));

	// flower2
	this.instance_1 = new lib.flower_pink2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-14,-10.15);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1.2152,scaleY:1.2152,rotation:-144.6153,x:-24.1833,y:-24.009,alpha:0.6862},0).wait(1).to({scaleX:1.2817,scaleY:1.2817,rotation:-189.3044,x:-27.3302,y:-28.2917,alpha:0.5892},0).wait(1).to({scaleX:1.3264,scaleY:1.3264,rotation:-219.35,x:-29.4459,y:-31.171,alpha:0.524},0).wait(1).to({scaleX:1.3808,scaleY:1.3808,rotation:-255.8693,x:-32.0175,y:-34.6708,alpha:0.4447},0).wait(1).to({scaleX:1.5357,scaleY:1.5357,rotation:-360,x:-39.35,y:-44.65,alpha:0.2188},0).to({_off:true},1).wait(2));

	// flower1
	this.instance_2 = new lib.flower_pink1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(15.8,-6.5,0.7927,0.7927);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({scaleX:0.9181,scaleY:0.9181,rotation:-144.6153,x:33.0735,y:-24.6372,alpha:0.6862},0).wait(1).to({scaleX:0.9569,scaleY:0.9569,rotation:-189.3044,x:38.4114,y:-30.2419,alpha:0.5892},0).wait(1).to({scaleX:0.9829,scaleY:0.9829,rotation:-219.35,x:42.0001,y:-34.0102,alpha:0.524},0).wait(1).to({scaleX:1.0146,scaleY:1.0146,rotation:-255.8693,x:46.3622,y:-38.5903,alpha:0.4447},0).wait(1).to({scaleX:1.1049,scaleY:1.1049,rotation:-360,x:58.8,y:-51.65,alpha:0.2188},0).to({_off:true},1).wait(2));

	// flower3
	this.instance_3 = new lib.flower_pink2("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-14.45,14.3,0.7153,0.7153);
	this.instance_3.filters = [new cjs.ColorFilter(0.83, 0.83, 0.83, 1, 43.35, 43.35, 43.35, 0)];
	this.instance_3.cache(-8,-8,15,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({scaleX:0.9946,scaleY:0.9946,rotation:-144.6153,x:-28.0278,y:32.5778,alpha:0.6862},0).wait(1).to({scaleX:1.081,scaleY:1.081,rotation:-189.3044,x:-32.2236,y:38.226,alpha:0.5892},0).wait(1).to({scaleX:1.139,scaleY:1.139,rotation:-219.35,x:-35.0445,y:42.0234,alpha:0.524},0).wait(1).to({scaleX:1.2095,scaleY:1.2095,rotation:-255.8693,x:-38.4733,y:46.639,alpha:0.4447},0).wait(1).to({scaleX:1.4107,scaleY:1.4107,rotation:-360,x:-48.25,y:59.8,alpha:0.2188},0).to({_off:true},1).wait(2));

	// flower3
	this.instance_4 = new lib.flower_pink2("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(5.6,19);
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 153, 204, 0)];
	this.instance_4.cache(-8,-8,15,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({scaleX:1.1953,scaleY:1.1953,rotation:-144.6153,x:13.6543,y:39.8085,alpha:0.6862},0).wait(1).to({scaleX:1.2556,scaleY:1.2556,rotation:-189.3044,x:16.1432,y:46.2388,alpha:0.5892},0).wait(1).to({scaleX:1.2962,scaleY:1.2962,rotation:-219.35,x:17.8166,y:50.562,alpha:0.524},0).wait(1).to({scaleX:1.3455,scaleY:1.3455,rotation:-255.8693,x:19.8505,y:55.8168,alpha:0.4447},0).wait(1).to({scaleX:1.4861,scaleY:1.4861,rotation:-360,x:25.65,y:70.8,alpha:0.2188},0).to({_off:true},1).wait(2));

	// flower2
	this.instance_5 = new lib.flower_pink2("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-20.9,2.15);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({scaleX:1.3587,scaleY:1.3587,rotation:-144.6153,x:-42.1705,y:3.9577,alpha:0.6862},0).wait(1).to({scaleX:1.4695,scaleY:1.4695,rotation:-189.3044,x:-48.7435,y:4.5163,alpha:0.5892},0).wait(1).to({scaleX:1.544,scaleY:1.544,rotation:-219.35,x:-53.1627,y:4.8919,alpha:0.524},0).wait(1).to({scaleX:1.6346,scaleY:1.6346,rotation:-255.8693,x:-58.5341,y:5.3484,alpha:0.4447},0).wait(1).to({scaleX:1.8929,scaleY:1.8929,rotation:-360,x:-73.85,y:6.65,alpha:0.2188},0).to({_off:true},1).wait(2));

	// flower1
	this.instance_6 = new lib.flower_pink1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(0.3,-12.15,0.7812,0.7812,-44.9992);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({scaleX:1.0148,scaleY:1.0148,rotation:43.8468,x:-1.106,y:-37.9799,alpha:0.6862},0).wait(1).to({scaleX:1.087,scaleY:1.087,rotation:-39.9454,x:-1.5405,y:-45.9619,alpha:0.5892},0).wait(1).to({scaleX:1.1355,scaleY:1.1355,rotation:-96.281,x:-1.8326,y:-51.3284,alpha:0.524},0).wait(1).to({scaleX:1.1945,scaleY:1.1945,rotation:-164.7547,x:-2.1876,y:-57.8511,alpha:0.4447},0).wait(1).to({scaleX:1.3627,scaleY:1.3627,rotation:0,x:-3.2,y:-76.45,alpha:0.2188},0).to({_off:true},1).wait(2));

	// レイヤー_1
	this.instance_7 = new lib.spread_flower_circle_pink();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,0,0.5578,0.5578);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1.2947,scaleY:1.2947,alpha:0.3984},1,cjs.Ease.get(1)).to({scaleX:1.7159,scaleY:1.7159,alpha:0.0508},4,cjs.Ease.get(-1)).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.4,-89.6,168.5,171.1);


(lib.pusher_next = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{lp:5});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
		
		// ボイスフラグでの判別をやめる
		/*
		if (exportRoot._g.voice_flag) {
			this.play();
		} else {
			this.visible = false;
		}
		*/
	}
	this.frame_24 = function() {
		this.gotoAndPlay( "lp" );
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(1));

	// text
	this.instance = new lib.pusher_next_inner("synched",0);
	this.instance.parent = this;
	this.instance.alpha = 0.1016;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},5).to({alpha:0},12,cjs.Ease.get(-1)).to({alpha:1},7,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.2,-12.1,48.4,24.299999999999997);


(lib.petal_container = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if(exportRoot._g.ios_flag) {
			this.visible = false;
			this.gotoAndStop(3)
		}else {
			this.gotoAndPlay(exportRoot._u.random(40)+2)
		}
		
		this.x = exportRoot._u.random(240)
	}
	this.frame_58 = function() {
		this._x =exportRoot._u.random(241)
		this.gotoAndPlay(2)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(58).call(this.frame_58).wait(1));

	// 花びら
	this.instance = new lib.petal();
	this.instance.parent = this;
	this.instance.setTransform(-1,-0.3,0.9999,0.9999,-53.9688);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).wait(1).to({regX:-0.6,rotation:39.725,x:-1.35,y:5.45},0).wait(1).to({scaleX:0.9998,scaleY:0.9998,rotation:51.9128,x:-1.9,y:17.3},0).wait(1).to({rotation:68.1772,x:-4.35,y:31.9},0).wait(1).to({scaleX:0.9997,scaleY:0.9997,rotation:87.8992,x:-9.9,y:48.25},0).wait(1).to({scaleX:0.9995,scaleY:0.9995,rotation:109.8503,x:-19.75,y:65.1},0).wait(1).to({scaleX:0.9994,scaleY:0.9994,rotation:131.6233,x:-33.95,y:80.45},0).wait(1).to({scaleX:0.9993,scaleY:0.9993,rotation:150.7176,x:-50.7,y:92.75},0).wait(1).to({scaleX:0.9992,scaleY:0.9992,rotation:165.701,x:-66.55,y:101.25},0).wait(1).to({regX:0,rotation:15.0346,x:-76.45,y:105.35},0).wait(1).to({scaleX:0.9446,scaleY:0.9985,rotation:0,skewX:46.9952,skewY:-133.0049,x:-74.6,y:117.95},0).wait(1).to({regX:-0.6,skewX:45.0775,skewY:-134.9226,x:-73.05,y:122.85},0).wait(1).to({skewX:40.7786,skewY:-139.2214,x:-70.3,y:132.15},0).wait(1).to({skewX:35.1625,skewY:-144.8376,x:-66.1,y:143.85},0).wait(1).to({skewX:28.7159,skewY:-151.2841,x:-59.85,y:157.1},0).wait(1).to({skewX:21.7194,skewY:-158.2805,x:-51.2,y:171.2},0).wait(1).to({skewX:14.3621,skewY:-165.6379,x:-39.6,y:185.4},0).wait(1).to({skewX:6.7903,skewY:-173.2095,x:-24.75,y:198.65},0).wait(1).to({skewX:-0.8645,skewY:-180.8644,x:-7.1,y:210},0).wait(1).to({skewX:-8.4642,skewY:-188.464,x:12.2,y:218.65},0).wait(1).to({skewX:-15.8344,skewY:-195.8341,x:31.65,y:224.65},0).wait(1).to({skewX:-22.7064,skewY:-202.7061,x:49.65,y:228.35},0).wait(1).to({skewX:-28.5462,skewY:-208.5459,x:64.7,y:230.3},0).wait(1).to({regX:0,skewX:-31.6765,skewY:-211.6761,x:72.1,y:231.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:-47.4674,skewX:0,skewY:-360,x:75.1,y:239.7},0).wait(1).to({regX:-0.6,rotation:61.2868,x:73.5,y:243.35},0).wait(1).to({rotation:66.2549,x:70.7,y:251.8},0).wait(1).to({rotation:72.8942,x:66.85,y:262.3},0).wait(1).to({rotation:80.9055,x:61.75,y:274.2},0).wait(1).to({rotation:90.1526,x:55.25,y:287.05},0).wait(1).to({rotation:100.5912,x:47.1,y:300.35},0).wait(1).to({rotation:112.1974,x:37.1,y:313.75},0).wait(1).to({rotation:124.8648,x:24.95,y:326.6},0).wait(1).to({rotation:138.2595,x:10.7,y:338.3},0).wait(1).to({rotation:151.7772,x:-5.3,y:348.15},0).wait(1).to({rotation:164.6089,x:-22.3,y:355.7},0).wait(1).to({rotation:175.9378,x:-38.95,y:360.75},0).wait(1).to({rotation:184.8983,x:-53.1,y:363.65},0).wait(1).to({regX:0,rotation:15.9802,x:-61.15,y:364.75},0).wait(1).to({scaleX:0.9446,scaleY:0.9985,rotation:0,skewX:46.9952,skewY:-493.0049,x:-70.3,y:369.75},0).wait(1).to({regX:-0.6,skewX:134.3444,skewY:-405.6556,x:-70.95,y:374.55},0).wait(1).to({skewX:125.0094,skewY:-414.9906,x:-70.45,y:384.1},0).wait(1).to({skewX:112.2593,skewY:-427.7407,x:-68.55,y:396.55},0).wait(1).to({skewX:96.7257,skewY:-443.2742,x:-64.4,y:410.95},0).wait(1).to({skewX:79.0999,skewY:-460.8999,x:-57.1,y:426.55},0).wait(1).to({skewX:60.6403,skewY:-479.3594,x:-45.95,y:442.15},0).wait(1).to({skewX:42.9229,skewY:-497.0768,x:-31.55,y:456.4},0).wait(1).to({skewX:27.0151,skewY:-512.9845,x:-15.15,y:468.3},0).wait(1).to({skewX:13.1954,skewY:-526.8042,x:1.45,y:477.75},0).wait(1).to({scaleX:0.9447,skewX:1.4332,skewY:-538.5663,x:17.05,y:484.85},0).wait(1).to({scaleX:0.9446,skewX:-7.9622,skewY:-547.9617,x:30.2,y:489.9},0).wait(1).to({regX:0,skewX:-31.5042,skewY:-571.5036,x:36.75,y:492.5},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.2,-14.5,179.7,520.6);


(lib.notice = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(1));

	// mark2
	this.instance = new lib.laugh_parts1();
	this.instance.parent = this;
	this.instance.setTransform(-28.85,20.55,1,1,0,0,0,20.2,29.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49,-8.6,40.4,58.300000000000004);


(lib.mc_exclamation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_18 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(18).call(this.frame_18).wait(1));

	// レイヤー_1
	this.instance = new lib.gr_exclamation();
	this.instance.parent = this;
	this.instance.setTransform(-3.95,12.4,0.4605,0.4605,15.0009);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1401,scaleY:1.1401,rotation:15.0012,x:1.15,y:-3.65},1,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:14.9992,x:-0.1,y:0.35},3,cjs.Ease.get(1)).wait(8).to({scaleX:0.6622,scaleY:0.6622,rotation:14.9988,x:-7.1,y:24.35,alpha:0},4,cjs.Ease.get(1)).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.3,-32.4,33.6,73);


(lib.loader_ring_contaier2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.roader_ring2("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:4.7,x:4.7,alpha:0.9891},0).wait(1).to({alpha:0.952},0).wait(1).to({alpha:0.8798},0).wait(1).to({alpha:0.7623},0).wait(1).to({alpha:0.5979},0).wait(1).to({alpha:0.4148},0).wait(1).to({alpha:0.2634},0).wait(1).to({alpha:0.1658},0).wait(1).to({alpha:0.1159},0).wait(1).to({regX:0,x:0,alpha:0.1016},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.5,7,1);


(lib.laugh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_20 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(20).call(this.frame_20).wait(1));

	// mark
	this.instance = new lib.laugh_parts_a("single",0);
	this.instance.parent = this;
	this.instance.setTransform(-30.4,20.5,1.0742,0.9571,0,0,0,-20.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1,x:-28.9},0).wait(3).to({regX:-20.2,scaleX:0.9691,scaleY:1.0171,x:-28.2},0).wait(1).to({regX:-18.7,scaleX:1.1342,scaleY:0.975,x:-29.7,y:22.85,startPosition:1},0).wait(1).to({scaleX:1,scaleY:1,x:-27.2},0).wait(3).to({scaleX:0.9463,scaleY:1.0417,x:-26.2},0).wait(1).to({regX:-20.3,scaleX:1.0742,scaleY:0.9571,x:-30.4,y:20.5,startPosition:0},0).wait(1).to({scaleX:1,scaleY:1,x:-28.9},0).wait(3).to({regX:-20.2,scaleX:0.9691,scaleY:1.0171,x:-28.2},0).wait(1).to({regX:-18.7,scaleX:1.1342,scaleY:0.975,x:-29.7,y:22.85,startPosition:1},0).wait(1).to({scaleX:1,scaleY:1,x:-27.2},0).wait(3).to({scaleX:0.9463,scaleY:1.0417,x:-26.2},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-9.1,43.5,63.300000000000004);


(lib.heart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_2
	this.instance = new lib.heart_vector();
	this.instance.parent = this;
	this.instance.setTransform(2.45,1.2,0.1194,0.1194,-12.5105,0,0,207.8,183);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-25.5,57.6,53.1);


(lib.good_effect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(5).call(this.frame_5).wait(1));

	// flower3
	this.instance = new lib.flower2_good("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(21.35,5.15,0.7153,0.7153);
	this.instance.filters = [new cjs.ColorFilter(0.83, 0.83, 0.83, 1, 43.35, 43.35, 43.35, 0)];
	this.instance.cache(-8,-8,15,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.4107,scaleY:1.4107,rotation:-360,x:76.05,y:1.65,alpha:0.2188},4,cjs.Ease.get(1)).to({_off:true},1).wait(1));

	// flower2
	this.instance_1 = new lib.flower2_good("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-14,-10.15);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.5357,scaleY:1.5357,rotation:-360,x:-39.35,y:-44.65,alpha:0.2188},4,cjs.Ease.get(1)).to({_off:true},1).wait(1));

	// flower1
	this.instance_2 = new lib.flower1_good("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(15.8,-6.5,0.7927,0.7927);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.1049,scaleY:1.1049,rotation:-360,x:58.8,y:-51.65,alpha:0.2188},4,cjs.Ease.get(1)).to({_off:true},1).wait(1));

	// flower3
	this.instance_3 = new lib.flower2_good("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-14.45,14.3,0.7153,0.7153);
	this.instance_3.filters = [new cjs.ColorFilter(0.83, 0.83, 0.83, 1, 43.35, 43.35, 43.35, 0)];
	this.instance_3.cache(-8,-8,15,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1.4107,scaleY:1.4107,rotation:-360,x:-48.25,y:59.8,alpha:0.2188},4,cjs.Ease.get(1)).to({_off:true},1).wait(1));

	// flower3
	this.instance_4 = new lib.flower2_good("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(5.6,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1.4861,scaleY:1.4861,rotation:-360,x:25.65,y:70.8,alpha:0.2188},4,cjs.Ease.get(1)).to({_off:true},1).wait(1));

	// flower2
	this.instance_5 = new lib.flower2_good("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-20.9,2.15);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1.8929,scaleY:1.8929,rotation:-360,x:-73.85,y:6.65,alpha:0.2188},4,cjs.Ease.get(1)).to({_off:true},1).wait(1));

	// flower1
	this.instance_6 = new lib.flower1_good("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(0.3,-12.15,0.7812,0.7812,-44.9992);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1.3627,scaleY:1.3627,rotation:-720,x:-3.2,y:-76.45,alpha:0.2188},4,cjs.Ease.get(1)).to({_off:true},1).wait(1));

	// en
	this.instance_7 = new lib.good_circle();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,0,0.5578,0.5578);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1.7159,scaleY:1.7159,alpha:0.0508},4,cjs.Ease.get(1)).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.4,-89.6,168.5,171.1);


(lib.glitter_first_inner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.pointGlitter2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.0121,0.6227,59.2024);

	this.instance_1 = new lib.pointGlitter2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.0109,0.7287,-30.7981);

	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#FFFFFF","rgba(255,252,237,0.051)","rgba(255,255,255,0)"],[0,0.055,0.761,1],0,0,0,0,0,5.4).s().p("AgZAtQgTgLgFgUQgGgVALgSQALgTAUgFQAVgGASALQATALAFAUQAGAVgLASQgLATgUAFQgIACgGAAQgNAAgMgHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.glitter_first_inner, new cjs.Rectangle(-18.5,-21.7,37.1,43.4), null);


(lib.glitter_first = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_8 = function() {
		this.gotoAndPlay(this.timeline.position +exportRoot._u.random(7)+1)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(10));

	// grip
	this.instance = new lib.grip();
	this.instance.parent = this;
	this.instance.alpha = 0.6602;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},2).wait(16));

	// glitter
	this.instance_1 = new lib.glitter_first_inner();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.6427,0.6427,-44.822);
	this.instance_1.alpha = 0.4297;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:3.7607,scaleY:3.7607,rotation:-11.2055,alpha:0.8574},0).wait(1).to({scaleX:4.8,scaleY:4.8,rotation:0,alpha:1},0).wait(1).to({scaleX:4.722,scaleY:4.722,rotation:1.9399,alpha:0.971},0).wait(1).to({scaleX:4.5026,scaleY:4.5026,rotation:7.4005,alpha:0.8893},0).wait(1).to({scaleX:4.1415,scaleY:4.1415,rotation:16.3817,alpha:0.7549},0).wait(1).to({scaleX:3.6391,scaleY:3.6391,rotation:28.8836,alpha:0.5678},0).wait(1).to({scaleX:2.9951,scaleY:2.9951,rotation:44.9061,alpha:0.3281},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-105,180,210.1);


(lib.finish_text_container = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* //ラストの台詞が2行の時は「_2line」のレイヤーを使う*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// txt2_2line
	this.line2 = new cjs.Text("", "14px 'MS PGothic'", "#F1439A");
	this.line2.name = "line2";
	this.line2.lineHeight = 16;
	this.line2.lineWidth = 260;
	this.line2.parent = this;
	this.line2.setTransform(-107,0);

	this.timeline.addTween(cjs.Tween.get(this.line2).wait(1));

	// txt2_2line
	this.line1 = new cjs.Text("", "14px 'MS PGothic'", "#F1439A");
	this.line1.name = "line1";
	this.line1.lineHeight = 16;
	this.line1.lineWidth = 260;
	this.line1.parent = this;
	this.line1.setTransform(-107,-18);

	this.timeline.addTween(cjs.Tween.get(this.line1).wait(1));

	// base_2line
	this.instance = new lib.window_finish_2line("single",0);
	this.instance.parent = this;
	this.instance.setTransform(0,1);
	this.instance.alpha = 0.8516;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.finish_text_container, new cjs.Rectangle(-147.5,-27.5,302.1,158.2), null);


(lib.chord = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// chord
	this.instance = new lib.chord2();
	this.instance.parent = this;
	this.instance.setTransform(-36,76.7,0.5582,0.5582,-0.2819,0,0,15.7,17.4);
	this.instance.alpha = 0.1016;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({regX:15.8,scaleX:0.9628,scaleY:0.9628,rotation:14.3457,guide:{path:[-35.9,76.7,-38.6,65.6,-37.5,54.3,-35.4,34.2,-20.7,22.9,-17.1,20.1,-14.2,16.9]},alpha:0.6602},5).wait(1).to({regX:16.7,regY:23.1,scaleX:1.0446,scaleY:1.0446,rotation:-0.4369,x:-5.6,y:11.55,alpha:0.7734},0).wait(1).to({scaleX:1.1264,scaleY:1.1264,rotation:-15.2195,x:0.2,y:-1.85,alpha:0.8867},0).wait(1).to({regX:15.8,regY:17.3,scaleX:1.2081,scaleY:1.2081,rotation:-30.002,x:-2.25,y:-20.85,alpha:1},0).to({scaleX:1.2082,scaleY:1.2082,rotation:-5.5524,guide:{path:[-2.3,-20.8,-2.4,-21.5,-2.6,-22.2,-4,-29.1,-7.5,-33]},alpha:0},3).to({_off:true},1).wait(1));

	// chord
	this.instance_1 = new lib.chord1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-23.5,77.25,0.9892,0.9892,-44.9988,0,0,15.8,17.4);
	this.instance_1.alpha = 0.1016;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:17.3,scaleX:1.2082,scaleY:1.2082,rotation:29.9993,guide:{path:[-23.5,77.2,-22.3,75.1,-21.1,72.9,-6.9,48,13.4,39.4,33.4,31.3,43.7,10,48.3,0.5,50,-7.9]},alpha:1},7).to({rotation:29.9993,x:62.35,y:-32.75,alpha:0},3).to({_off:true},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49,-60.4,138.4,201.20000000000002);


(lib.character1_face = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.b.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20));

	// moisture_lefteye
	this.instance = new lib.uru_set();
	this.instance.parent = this;
	this.instance.setTransform(87,41.9,0.9005,0.5503,0,26.0791,25.8338);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).wait(1));

	// moisture_righteye
	this.instance_1 = new lib.uru_set();
	this.instance_1.parent = this;
	this.instance_1.setTransform(34.65,40.95,1.0632,0.5296,0,32.5646,37.1205,0.7,4.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).wait(1));

	// mask_face (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsfMgIAA4/IY/AAIAAY/g");
	mask.setTransform(80,80);

	// face
	this.instance_2 = new lib.ch_face2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.instance_3 = new lib.ch_face3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,0.5,0.5);

	this.instance_4 = new lib.ch_face4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,0.5,0.5);

	this.instance_5 = new lib.ch_face5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,0,0.5,0.5);

	this.instance_6 = new lib.ch_face6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,0,0.5,0.5);

	this.instance_7 = new lib.ch_face7();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[]},1).wait(13));

	// body
	this.b = new lib.character1_base();
	this.b.name = "b";
	this.b.parent = this;
	this.b.setTransform(-44,190);

	var maskedShapeInstanceList = [this.b];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.b).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,160);


(lib.bg_hikari = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_2
	this.instance = new lib.hikari_ob();
	this.instance.parent = this;
	this.instance.setTransform(27.6,-99.05,0.3298,1,-2.741);

	this.instance_1 = new lib.hikari_ob();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-45,-137,0.3177,1);

	this.instance_2 = new lib.hikari_ob();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-4.7,-107.75,1,1.5251);

	this.instance_3 = new lib.hikari_ob();
	this.instance_3.parent = this;
	this.instance_3.setTransform(27.6,-99.05,0.3298,1,-2.741);
	this.instance_3.alpha = 0.8008;

	this.instance_4 = new lib.hikari_ob();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-45,-137,0.3177,1);
	this.instance_4.alpha = 0.8008;

	this.instance_5 = new lib.hikari_ob();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-4.7,-107.75,1,1.5251);
	this.instance_5.alpha = 0.8008;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_hikari, new cjs.Rectangle(-52.6,-137,101.7,462.4), null);


(lib.punpun = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_5 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(5).call(this.frame_5).wait(1));

	// sigh
	this.instance = new lib.pin();
	this.instance.parent = this;
	this.instance.setTransform(48.85,-2.05,1,1,0,0,0,22.3,29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:18.6,regY:28.5,x:45.4,y:-4.55,alpha:0.9375},0).wait(1).to({x:46.3,y:-9.5,alpha:0.75},0).wait(1).to({x:47.75,y:-17.7,alpha:0.4375},0).wait(1).to({regX:22.3,regY:29.4,x:53.5,y:-28.3,alpha:0},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-57.7,75.8,85.2);


(lib.mc_punpun = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* play();*/
	}
	this.frame_18 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(18).call(this.frame_18).wait(1));

	// レイヤー_3
	this.instance = new lib.punpun("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(96.95,4.95,0.7347,0.7347,45.4813,0,0,48.8,-2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({_off:true},5).wait(3).to({_off:false},0).to({_off:true},4).wait(2));

	// レイヤー_1
	this.instance_1 = new lib.punpun("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.05,-0.05,1,1,-42.2096,0,0,48.9,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},6).wait(3).to({_off:false},0).to({_off:true},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.7,-47.9,173.5,72.7);


(lib.concent_container = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.concent();
	this.instance.parent = this;
	this.instance.setTransform(-0.15,0.5,0.8875,0.8875,-119.2436);

	this.instance_1 = new lib.concent();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.15,0.45,0.8875,0.8875,161.3249);

	this.instance_2 = new lib.concent2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.15,0.45,0.8874,0.8874,-75.9023);

	this.instance_3 = new lib.concent2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.15,0.45,0.8874,0.8874,75.4526);

	this.instance_4 = new lib.concent2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.15,0.45,0.8874,0.8874,109.34);

	this.instance_5 = new lib.concent();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-0.15,0.45,0.8875,0.8875,-14.9518);

	this.instance_6 = new lib.concent();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-0.15,0.45,0.8874,0.8874,77.8353);

	this.instance_7 = new lib.concent2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-0.15,0.45,0.8875,0.8875,-78.9281);

	this.instance_8 = new lib.concent2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-0.15,0.45,0.8875,0.8875,-117.3405);

	this.instance_9 = new lib.concent();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-0.15,0.45,0.8875,0.8875,-164.7438);

	this.instance_10 = new lib.concent2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-0.15,0.45,0.8874,0.8874,133.0127);

	this.instance_11 = new lib.concent();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-0.15,0.45,0.8875,0.8875,-7.2496);

	this.instance_12 = new lib.concent();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-0.1,0.5,0.8874,0.8874,31.1881);

	this.instance_13 = new lib.concent2();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-0.15,0.45,0.8874,0.8874,43.9327);

	this.instance_14 = new lib.concent2();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-0.15,0.45,0.8875,0.8875,-47.2338);

	this.instance_15 = new lib.concent();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-0.15,0.45,0.8875,0.8875,-79.0683);

	this.instance_16 = new lib.concent2();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-0.15,0.45,0.8874,0.8874,24.1813);

	this.instance_17 = new lib.concent();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-0.15,0.45,0.8875,0.8875,28.4561);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.concent_container, new cjs.Rectangle(-406.3,-402.2,815.3,814.7), null);


(lib.window22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dot
	this.instance = new lib.square2();
	this.instance.parent = this;
	this.instance.setTransform(218.95,24.55,1,1,90,0,0,0.7,13.2);

	this.instance_1 = new lib.square2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(191.35,24.55,1,1,90,0,0,0.7,13.2);

	this.instance_2 = new lib.square2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(163.9,24.55,1,1,90,0,0,0.7,13.2);

	this.instance_3 = new lib.square2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(136.45,24.55,1,1,90,0,0,0.7,13.2);

	this.instance_4 = new lib.square2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(108.95,24.55,1,1,90,0,0,0.7,13.2);

	this.instance_5 = new lib.square2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(81.45,24.55,1,1,90,0,0,0.7,13.2);

	this.instance_6 = new lib.square2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(53.95,24.55,1,1,90,0,0,0.7,13.2);

	this.instance_7 = new lib.square2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(26.45,24.55,1,1,90,0,0,0.7,13.2);

	this.instance_8 = new lib.square2c();
	this.instance_8.parent = this;
	this.instance_8.setTransform(5.95,17,1,1,0,0,0,0.7,13.2);

	this.instance_9 = new lib.square2c();
	this.instance_9.parent = this;
	this.instance_9.setTransform(8.6,17,1,1,0,0,0,0.7,13.2);

	this.instance_10 = new lib.square2c();
	this.instance_10.parent = this;
	this.instance_10.setTransform(11.25,17,1,1,0,0,0,0.7,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// plate
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.702)").s().p("AxGHNQhQAAAAhQIAAr5QAAhQBQAAIQEAAQAlAAAWAeQAIALAaA4QAXAuAYAUQAjAeA7gBIOfAAQBQAAAABQIAAI5QAABQhQAAg");
	this.shape.setTransform(117.5,46.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// shadow
	this.instance_11 = new lib.window_shadow();
	this.instance_11.parent = this;
	this.instance_11.setTransform(118.35,47.65,1,1,0,0,0,117.9,46.9);
	this.instance_11.alpha = 0.6992;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

}).prototype = getMCSymbolPrototype(lib.window22, new cjs.Rectangle(0,0,236.3,94.5), null);


(lib.window = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// dummy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhHAwQATgGALgHQALgIAFgJQAGgKACgKQABgLAAgNIAAgIIAXAAIAAAFIAAANIgBAMQARgFAKgLQALgKADgQIgRABIgVAAIgXAAIgXAAIgTAAIgKAAIAAgVICKAAQAAAWgHAQQgHARgNALQgMAKgPAGIgNgQQgCAPgFAMQgGAMgNAKQgMAKgTAIg");
	this.shape.setTransform(103.925,12.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag+AvQAcgCAUgJQATgJANgNQAOgNAIgQQAJgQAFgSIATAPIgJAYQgFALgJANQgJAMgNALQgOALgSAJQgTAIgaAEgAgnABIgRgHIgQgFIALgUIAPAGIASAHIAQAJIgLATIgQgJgAgRgkIgSgHIgQgGIALgTIAPAFIASAHIAPAIIgKAWIgPgKg");
	this.shape_1.setTransform(88.225,12.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag7A4QAYgEARgIQASgIAMgLIgQgNIgTgMIAPgOIAPAKIAUANQAHgKAFgLQAFgKACgKIgzAAQgJAMgLANQgMAKgOALIgTgPQAQgJAMgMQAMgMAIgOQAJgNAEgMIAWAFIgEAIIgEAJIARAAIAUAAIASAAIALAAQgBANgEAPQgEAQgIAOQgIAPgNAOQgNANgSAKQgSAKgaAFg");
	this.shape_2.setTransform(71.575,11.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhJArQAXgGARgJQAQgKALgMQAKgLAHgMQAGgMADgMIhLAAIAAgVIBqAAQgDATgHARQgHAQgJANQAIAEAIAGIARAOIAQAPIgSAVQgMgOgLgLIgVgTQgLAMgLAIQgLAIgMAHQgMAGgMAEg");
	this.shape_3.setTransform(55.9,12.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhBAzQAQgFALgGQAKgGAHgHQAGgHAEgKQADgKAAgNIg/AAIAAgVIA/AAIAAgjIAYAAIAAATIAAAQIA4AAIAAAVIg4AAQgBAPgEANQgDANgIAKQgGAKgMAIQgMAIgSAGg");
	this.shape_4.setTransform(40,11.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhHAwQATgGALgHQALgIAFgJQAGgKACgKQABgLAAgNIAAgIIAXAAIAAAFIAAANIgBAMQARgFAKgLQALgKADgQIgRABIgVAAIgXAAIgXAAIgTAAIgKAAIAAgVICKAAQAAAWgHAQQgHARgNALQgMAKgPAGIgNgQQgCAPgFAMQgGAMgNAKQgMAKgTAIg");
	this.shape_5.setTransform(23.925,12.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// text
	this.text_mc = new lib.textfield();
	this.text_mc.name = "text_mc";
	this.text_mc.parent = this;
	this.text_mc.setTransform(4,25);

	this.timeline.addTween(cjs.Tween.get(this.text_mc).wait(4));

	// arrow
	this.ar = new lib.yajirusi();
	this.ar.name = "ar";
	this.ar.parent = this;
	this.ar.setTransform(231.5,87.5);

	this.timeline.addTween(cjs.Tween.get(this.ar).wait(4));

	// base
	this.instance = new lib.window22();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-4,267.6,105.7);


(lib.loader_ring2_container = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// loader_ring_contaier2
	this.instance = new lib.loader_ring_contaier2("synched",4);
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,150);

	this.instance_1 = new lib.loader_ring_contaier2("synched",5);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.9999,0.9999,119.9987);

	this.instance_2 = new lib.loader_ring_contaier2("synched",6);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,1,1,89.9948);

	this.instance_3 = new lib.loader_ring_contaier2("synched",7);
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0.05,1,1,60);

	this.instance_4 = new lib.loader_ring_contaier2("synched",8);
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,1,1,29.9992);

	this.instance_5 = new lib.loader_ring_contaier2("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,-0.05,0.9999,0.9999,-89.9948);

	this.instance_6 = new lib.loader_ring_contaier2("synched",11);
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,0,1,1,-60.0001);

	this.instance_7 = new lib.loader_ring_contaier2("synched",10);
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,0,0.9999,0.9999,-29.9986);

	this.instance_8 = new lib.loader_ring_contaier2("synched",1);
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,0,1,1,-119.9999);

	this.instance_9 = new lib.loader_ring_contaier2("synched",2);
	this.instance_9.parent = this;
	this.instance_9.setTransform(0,0,0.9999,0.9999,-150.0005);

	this.instance_10 = new lib.loader_ring_contaier2("synched",3);
	this.instance_10.parent = this;
	this.instance_10.setTransform(0,0,1,1,180);

	this.instance_11 = new lib.loader_ring_contaier2("synched",9);
	this.instance_11.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.9,-7,13.9,14);


(lib.hikari = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hikari_コピー
	this.instance = new lib.bg_hikari();
	this.instance.parent = this;
	this.instance.setTransform(91.2,-191.9,0.876,0.876,0,-42.3003,137.6997);
	this.instance.alpha = 0.0703;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({_off:false},0).to({scaleX:0.9287,scaleY:0.9287,skewX:-42.4143,skewY:137.5857,x:90.9,y:-184.1,alpha:0.8984},10).wait(1).to({regX:-1.8,regY:94.2,scaleX:0.9297,scaleY:0.9297,skewX:-42.4105,skewY:137.5895,x:151.05,y:-120.45,alpha:0.8731},0).wait(1).to({scaleX:0.9327,scaleY:0.9327,skewX:-42.3995,skewY:137.6005,x:150.85,y:-119.75,alpha:0.7983},0).wait(1).to({scaleX:0.9373,scaleY:0.9373,skewX:-42.3827,skewY:137.6173,x:150.55,y:-118.8,alpha:0.6845},0).wait(1).to({scaleX:0.9427,scaleY:0.9427,skewX:-42.3631,skewY:137.6369,x:150.2,y:-117.7,alpha:0.5516},0).wait(1).to({scaleX:0.9479,scaleY:0.9479,skewX:-42.3438,skewY:137.6562,x:149.85,y:-116.55,alpha:0.4214},0).wait(1).to({scaleX:0.9524,scaleY:0.9524,skewX:-42.3273,skewY:137.6727,x:149.55,y:-115.55,alpha:0.3094},0).wait(1).to({scaleX:0.9559,scaleY:0.9559,skewX:-42.3145,skewY:137.6855,x:149.3,y:-114.85,alpha:0.2227},0).wait(1).to({scaleX:0.9583,scaleY:0.9583,skewX:-42.3057,skewY:137.6943,x:149.2,y:-114.35,alpha:0.163},0).wait(1).to({regX:0,regY:0,scaleX:0.9597,scaleY:0.9597,skewX:-42.3007,skewY:137.6993,x:87,y:-179.85,alpha:0.1289},0).to({scaleX:0.9644,scaleY:0.9644,skewX:-42.4147,skewY:137.5853,x:85.35,y:-177.55,alpha:0.1016},1).wait(1));

	// hikari_コピー_2
	this.instance_1 = new lib.bg_hikari();
	this.instance_1.parent = this;
	this.instance_1.setTransform(164.9,-95.7,0.876,0.876,0,-45.2392,134.7608,-0.1,0);
	this.instance_1.alpha = 0.0703;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).to({regY:0.1,scaleX:0.9286,scaleY:0.9286,skewX:-45.3535,skewY:134.6465,x:110.35,y:-147,alpha:0.6992},10).wait(1).to({regX:-1.8,regY:94.2,scaleX:0.9297,scaleY:0.9297,skewX:-45.3498,skewY:134.6502,x:173.6,y:-86.6,alpha:0.6804},0).wait(1).to({scaleX:0.9327,scaleY:0.9327,skewX:-45.3388,skewY:134.6612,x:173.5,y:-86.25,alpha:0.625},0).wait(1).to({scaleX:0.9373,scaleY:0.9373,skewX:-45.322,skewY:134.678,x:173.35,y:-85.7,alpha:0.5407},0).wait(1).to({scaleX:0.9426,scaleY:0.9426,skewX:-45.3025,skewY:134.6975,x:173.1,y:-85.1,alpha:0.4422},0).wait(1).to({scaleX:0.9479,scaleY:0.9479,skewX:-45.2833,skewY:134.7167,x:172.9,y:-84.5,alpha:0.3457},0).wait(1).to({scaleX:0.9524,scaleY:0.9524,skewX:-45.2668,skewY:134.7332,x:172.75,y:-83.95,alpha:0.2626},0).wait(1).to({scaleX:0.9559,scaleY:0.9559,skewX:-45.2541,skewY:134.7459,x:172.6,y:-83.55,alpha:0.1984},0).wait(1).to({scaleX:0.9583,scaleY:0.9583,skewX:-45.2453,skewY:134.7547,x:172.5,y:-83.3,alpha:0.1542},0).wait(1).to({regX:0,regY:0,scaleX:0.9597,scaleY:0.9597,skewX:-45.2403,skewY:134.7597,x:107.2,y:-145.65,alpha:0.1289},0).to({scaleX:0.9644,scaleY:0.9644,skewX:-45.3538,skewY:134.6462,x:106.95,y:-145.45,alpha:0.1016},1).to({_off:true},1).wait(10));

	// hikari
	this.instance_2 = new lib.bg_hikari();
	this.instance_2.parent = this;
	this.instance_2.setTransform(37.6,14.2,0.9432,0.9432,0,-43.0943,136.9057);
	this.instance_2.alpha = 0.0703;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).to({scaleX:0.9999,scaleY:0.9999,skewX:-43.2093,skewY:136.7907,x:39.5,y:13.4,alpha:0.8984},10).wait(1).to({regX:-1.8,regY:94.2,scaleX:1.001,scaleY:1.001,skewX:-43.2055,skewY:136.7945,x:105.2,y:80.9,alpha:0.8731},0).wait(1).to({scaleX:1.0043,scaleY:1.0043,skewX:-43.1944,skewY:136.8056,x:105.1,y:81.25,alpha:0.7983},0).wait(1).to({scaleX:1.0092,scaleY:1.0092,skewX:-43.1775,skewY:136.8225,x:104.9,y:81.85,alpha:0.6845},0).wait(1).to({scaleX:1.015,scaleY:1.015,skewX:-43.1577,skewY:136.8423,x:104.7,y:82.45,alpha:0.5516},0).wait(1).to({scaleX:1.0207,scaleY:1.0207,skewX:-43.1384,skewY:136.8616,x:104.5,y:83.05,alpha:0.4214},0).wait(1).to({scaleX:1.0255,scaleY:1.0255,skewX:-43.1217,skewY:136.8783,x:104.3,y:83.6,alpha:0.3094},0).wait(1).to({scaleX:1.0293,scaleY:1.0293,skewX:-43.1088,skewY:136.8912,x:104.1,y:84.05,alpha:0.2227},0).wait(1).to({scaleX:1.0319,scaleY:1.0319,skewX:-43.0999,skewY:136.9001,x:104,y:84.3,alpha:0.163},0).wait(1).to({regX:0,regY:0,scaleX:1.0334,scaleY:1.0334,skewX:-43.0949,skewY:136.9051,x:36.15,y:14.7,alpha:0.1289},0).to({scaleX:1.0385,scaleY:1.0385,skewX:-43.2079,skewY:136.7921,x:34.9,y:19.05,alpha:0.1016},1).to({_off:true},1).wait(13));

	// hikari
	this.instance_3 = new lib.bg_hikari();
	this.instance_3.parent = this;
	this.instance_3.setTransform(43.35,5.3,0.9432,0.9432,0,-43.0943,136.9057);
	this.instance_3.alpha = 0.0703;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.9999,scaleY:0.9999,skewX:-43.2093,skewY:136.7907,x:42.2,y:18.2,alpha:1},10).wait(1).to({regX:-1.8,regY:94.2,scaleX:1.001,scaleY:1.001,skewX:-43.2055,skewY:136.7945,x:107.9,y:85.7,alpha:0.9713},0).wait(1).to({scaleX:1.0043,scaleY:1.0043,skewX:-43.1944,skewY:136.8056,x:107.8,y:86.05,alpha:0.8867},0).wait(1).to({scaleX:1.0092,scaleY:1.0092,skewX:-43.1775,skewY:136.8225,x:107.55,y:86.65,alpha:0.7579},0).wait(1).to({scaleX:1.015,scaleY:1.015,skewX:-43.1577,skewY:136.8423,x:107.4,y:87.3,alpha:0.6074},0).wait(1).to({scaleX:1.0207,scaleY:1.0207,skewX:-43.1384,skewY:136.8616,x:107.15,y:87.9,alpha:0.46},0).wait(1).to({scaleX:1.0255,scaleY:1.0255,skewX:-43.1217,skewY:136.8783,x:106.95,y:88.45,alpha:0.3332},0).wait(1).to({scaleX:1.0293,scaleY:1.0293,skewX:-43.1088,skewY:136.8912,x:106.75,y:88.95,alpha:0.2351},0).wait(1).to({scaleX:1.0319,scaleY:1.0319,skewX:-43.0999,skewY:136.9001,x:106.65,y:89.2,alpha:0.1675},0).wait(1).to({regX:0,regY:0,scaleX:1.0334,scaleY:1.0334,skewX:-43.0949,skewY:136.9051,x:38.85,y:19.5,alpha:0.1289},0).to({scaleX:1.0385,scaleY:1.0385,skewX:-43.2079,skewY:136.7921,x:38.5,y:19.7,alpha:0.1016},1).to({_off:true},1).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.6,-311.6,447.5,591.4000000000001);


(lib.glitter_first_matome = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// glitter
	this.instance = new lib.glitter_first_inner();
	this.instance.parent = this;
	this.instance.setTransform(69.6,-175.8,0.1558,0.1558,-44.8254,0,0,0.3,-0.3);
	this.instance.alpha = 0.4297;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(62).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:0.912,scaleY:0.912,rotation:-11.2064,x:69.4207,y:-175.4895,alpha:0.8574},0).wait(1).to({scaleX:1.164,scaleY:1.164,rotation:0,x:69.6,y:-175.7,alpha:1},0).wait(1).to({scaleX:1.1451,scaleY:1.1451,rotation:1.9399,x:69.5981,y:-175.7007,alpha:0.971},0).wait(1).to({scaleX:1.0919,scaleY:1.0919,rotation:7.4004,x:69.593,y:-175.7029,alpha:0.8893},0).wait(1).to({scaleX:1.0044,scaleY:1.0044,rotation:16.3815,x:69.5858,y:-175.7075,alpha:0.7549},0).wait(1).to({scaleX:0.8825,scaleY:0.8825,rotation:28.8832,x:69.5786,y:-175.7152,alpha:0.5678},0).wait(1).to({scaleX:0.7263,scaleY:0.7263,rotation:44.9055,x:69.6,y:-175.7,alpha:0.3281},0).to({_off:true},1).wait(7));

	// glitter
	this.instance_1 = new lib.glitter_first_inner();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-44.05,-213.2,0.1039,0.1039,-44.8274,0,0,0.4,-0.4);
	this.instance_1.alpha = 0.4297;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:0.608,scaleY:0.608,rotation:-11.2069,x:-44.2173,y:-212.8919,alpha:0.8574},0).wait(1).to({scaleX:0.776,scaleY:0.776,rotation:0,x:-44.05,y:-213.1,alpha:1},0).wait(1).to({scaleX:0.7634,scaleY:0.7634,rotation:1.9399,x:-44.0513,y:-213.1005,alpha:0.971},0).wait(1).to({scaleX:0.728,scaleY:0.728,rotation:7.4004,x:-44.0547,y:-213.102,alpha:0.8893},0).wait(1).to({scaleX:0.6696,scaleY:0.6696,rotation:16.3815,x:-44.0595,y:-213.105,alpha:0.7549},0).wait(1).to({scaleX:0.5883,scaleY:0.5883,rotation:28.8832,x:-44.0642,y:-213.1101,alpha:0.5678},0).wait(1).to({scaleX:0.4842,scaleY:0.4842,rotation:44.9055,x:-44.05,y:-213.1,alpha:0.3281},0).to({_off:true},1).wait(35));

	// glitter
	this.instance_2 = new lib.glitter_first_inner();
	this.instance_2.parent = this;
	this.instance_2.setTransform(49.4,109.15,0.1088,0.1088,-44.8296,0,0,0.4,0.3);
	this.instance_2.alpha = 0.4297;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(22).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:0.637,scaleY:0.637,rotation:-11.2074,x:49.1372,y:109.055,alpha:0.8574},0).wait(1).to({scaleX:0.813,scaleY:0.813,rotation:0,x:49.35,y:109.2,alpha:1},0).wait(1).to({scaleX:0.7998,scaleY:0.7998,rotation:1.9399,x:49.3505,y:109.1986,alpha:0.971},0).wait(1).to({scaleX:0.7626,scaleY:0.7626,rotation:7.4005,x:49.352,y:109.1951,alpha:0.8893},0).wait(1).to({scaleX:0.7015,scaleY:0.7015,rotation:16.3818,x:49.3553,y:109.1901,alpha:0.7549},0).wait(1).to({scaleX:0.6164,scaleY:0.6164,rotation:28.8836,x:49.3606,y:109.1851,alpha:0.5678},0).wait(1).to({scaleX:0.5073,scaleY:0.5073,rotation:44.9062,x:49.35,y:109.2,alpha:0.3281},0).to({_off:true},1).wait(47));

	// glitter
	this.instance_3 = new lib.glitter_first_inner();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,0.1067,0.1067,-44.8262);
	this.instance_3.alpha = 0.4297;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).wait(1).to({scaleX:0.6246,scaleY:0.6246,rotation:-11.2066,alpha:0.8574},0).wait(1).to({scaleX:0.7971,scaleY:0.7971,rotation:0,alpha:1},0).wait(1).to({scaleX:0.7842,scaleY:0.7842,rotation:1.94,alpha:0.971},0).wait(1).to({scaleX:0.7478,scaleY:0.7478,rotation:7.4006,alpha:0.8893},0).wait(1).to({scaleX:0.6878,scaleY:0.6878,rotation:16.382,alpha:0.7549},0).wait(1).to({scaleX:0.6044,scaleY:0.6044,rotation:28.884,alpha:0.5678},0).wait(1).to({scaleX:0.4974,scaleY:0.4974,rotation:44.9068,alpha:0.3281},0).to({_off:true},1).wait(63));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.6,-230.1,150,357.1);


(lib.gｌitter_rise_core = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
		this.gotoAndPlay( 1 + exportRoot._u.random( 30 ) );
	}
	this.frame_1 = function() {
		this.visible = false;
		this.gotoAndPlay( this.timeline.position +exportRoot._u.random( 20 ) );
	}
	this.frame_31 = function() {
		this.visible = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(30).call(this.frame_31).wait(9));

	// glitter
	this.instance = new lib.glitter_first_inner();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5144,0.5144);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(30).to({_off:false,scaleX:0.1949,scaleY:0.1949,rotation:-44.8223,alpha:0.4297},0).wait(1).to({scaleX:0.4345,scaleY:0.4345,rotation:-11.2056,alpha:0.8574},0).wait(1).to({scaleX:0.5144,scaleY:0.5144,rotation:0,alpha:1},0).wait(1).to({scaleX:0.5051,scaleY:0.5051,rotation:1.9401,alpha:0.971},0).wait(1).to({scaleX:0.479,scaleY:0.479,rotation:7.401,alpha:0.8893},0).wait(1).to({scaleX:0.436,scaleY:0.436,rotation:16.3829,alpha:0.7549},0).wait(1).to({scaleX:0.3762,scaleY:0.3762,rotation:28.8856,alpha:0.5678},0).wait(1).to({scaleX:0.2995,scaleY:0.2995,rotation:44.9092,alpha:0.3281},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.6,-11.2,19.299999999999997,22.5);


(lib.glitters = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_21 = function() {
		/* stop ();
		*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(21).call(this.frame_21).wait(1));

	// レイヤー_4
	this.instance = new lib.glitter_first();
	this.instance.parent = this;
	this.instance.setTransform(41.95,243.25,0.0766,0.0766);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(22));

	// レイヤー_5
	this.instance_1 = new lib.glitter_first();
	this.instance_1.parent = this;
	this.instance_1.setTransform(11.05,226.4,0.1958,0.1958);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(21));

	// レイヤー_7
	this.instance_2 = new lib.glitter_first();
	this.instance_2.parent = this;
	this.instance_2.setTransform(98.8,243.35,0.1412,0.1412);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).wait(18));

	// レイヤー_8
	this.instance_3 = new lib.glitter_first();
	this.instance_3.parent = this;
	this.instance_3.setTransform(107.4,17.05,0.159,0.159,0,0,0,-1.3,2.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).wait(16));

	// レイヤー_9
	this.instance_4 = new lib.glitter_first();
	this.instance_4.parent = this;
	this.instance_4.setTransform(203.15,41.5,0.0849,0.0849);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(7).to({_off:false},0).wait(15));

	// レイヤー_10
	this.instance_5 = new lib.glitter_first();
	this.instance_5.parent = this;
	this.instance_5.setTransform(27.1,54.75,0.1618,0.1618);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8).to({_off:false},0).wait(14));

	// レイヤー_11
	this.instance_6 = new lib.glitter_first();
	this.instance_6.parent = this;
	this.instance_6.setTransform(226.55,92.15,0.1362,0.1362);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10).to({_off:false},0).wait(12));

	// レイヤー_12
	this.instance_7 = new lib.glitter_first();
	this.instance_7.parent = this;
	this.instance_7.setTransform(35.1,184.15,0.1106,0.1106);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(11).to({_off:false},0).wait(11));

	// レイヤー_13
	this.instance_8 = new lib.glitter_first();
	this.instance_8.parent = this;
	this.instance_8.setTransform(134.7,200.8,0.1702,0.1702);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(12).to({_off:false},0).wait(10));

	// レイヤー_14
	this.instance_9 = new lib.glitter_first();
	this.instance_9.parent = this;
	this.instance_9.setTransform(169.4,50.5,0.2555,0.2555);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(14).to({_off:false},0).wait(8));

	// レイヤー_15
	this.instance_10 = new lib.glitter_first();
	this.instance_10.parent = this;
	this.instance_10.setTransform(211,171.15,0.1176,0.1176);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(16).to({_off:false},0).wait(6));

	// レイヤー_16
	this.instance_11 = new lib.glitter_first();
	this.instance_11.parent = this;
	this.instance_11.setTransform(39.4,15.3,0.1138,0.1138);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(17).to({_off:false},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240,320);


(lib.character1_face_container = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{init:0,run:4,stay:10,s2:11,s3:12,blink1:15,blink2:21});

	// timeline functions:
	this.frame_0 = function() {
		//                     1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12
		this.face_blink_ary = [1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1]; 
		this.blink = 80; //まばたきまでの最大フレーム数 (小さい程頻繁にまばたきする)
		// 瞬き関数
		this.setBlink = function () {
			return exportRoot._u.random(this.blink);
		}
		
		this.current_face = 0; //現在の表情
		this.next_face = 0; //次の表情
		this.cnt = 0; //まばたきカウント
		this.gotoAndPlay("stay");
	}
	this.frame_4 = function() {
		this.f1_alpha.visible = false;
		
		if (this.next_face == this.current_face) {
			this.gotoAndPlay( "stay" );
		} else {
			//表情1から表情2に変わる
			this.f1.gotoAndStop( this.current_face );
			this.f2.gotoAndStop( this.next_face );
			
			if( this.current_face == 0 ) {
				this.f1.visible = false;
			} else {
				this.f1.visible = true;
			}
			if( this.next_face == 0 ) {
				this.f1.visible = false;
				this.f2.visible = false;
				this.f1_alpha.visible = true;
				this.f1_alpha.gotoAndStop( this.current_face );
			} else {
				this.f2.visible = true;
			}
		}
	}
	this.frame_8 = function() {
		this.gotoAndPlay( "stay" );
	}
	this.frame_10 = function() {
		this.current_face = this.next_face;
		
		this.f1.gotoAndStop(this.current_face);
		this.f2.gotoAndStop(this.next_face);
		this.f1.visible = false;
		this.f2.visible = true;
		
		this.face_blink = this.face_blink_ary[this.current_face];
		
		//まばたきしないなら止まる
		if (this.face_blink > 0) {
			this.play();
		} else {
			this.stop();
		}
	}
	this.frame_11 = function() {
		//まばたき待ちループ
		if (this.cnt > 0) {
			this.cnt--;
		} else {
			this.cnt = this.setBlink();
			this.gotoAndPlay("blink" + this.face_blink);
		}
	}
	this.frame_12 = function() {
		this.gotoAndPlay("s2");
	}
	this.frame_15 = function() {
		//まばたき
		this.f1.visible = false;
		this.f2.visible = true;
	}
	this.frame_19 = function() {
		this.gotoAndPlay( "stay" );
	}
	this.frame_21 = function() {
		//まばたき
		this.f1.visible = false;
		this.f2.visible = true;
	}
	this.frame_25 = function() {
		this.gotoAndPlay( "stay" );
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(4).call(this.frame_8).wait(2).call(this.frame_10).wait(1).call(this.frame_11).wait(1).call(this.frame_12).wait(3).call(this.frame_15).wait(4).call(this.frame_19).wait(2).call(this.frame_21).wait(4).call(this.frame_25).wait(2));

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_15 = new cjs.Graphics().p("Ag/KfQg5gZgjgjQgbgbgHhfQgFiBgFhQQgGhiAGhFQAKhPAFg/QAHhYgHgoQgDgRgfhVQgVg7gRiuQgIhXgEhLQAAACAZgXQAdgXAXAJQARAGBuA2QBxA4AkAOQAqARAhBNQARApATA8QANAegOAxQgPAzgiATQghATgLAiQgLAeAOAPQAPAPBECVQBICdAHAuQAHAygTBuQgTBsgaA7QgXA1g2AfQgsAZgzAGIgNABQgkAAg0gWg");
	var mask_graphics_21 = new cjs.Graphics().p("AjFBuIhLhTIAEgiQADgjABABIATh2ICVgHIBJATICJBEIB6AeIAlgEQgWA4ABBQQAAAgABAaIhEgGIi5Agg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(15).to({graphics:mask_graphics_15,x:75.9042,y:78.0417}).wait(6).to({graphics:mask_graphics_21,x:31.25,y:41.8}).wait(6));

	// character1_face_close_container
	this.instance = new lib.character1_face_eyeclose();
	this.instance.parent = this;
	this.instance.setTransform(35,30,1,1,0,0,0,35,30);
	this.instance.alpha = 0.1992;
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).wait(1).to({alpha:1},0).wait(1).to({regX:80,regY:80,x:80,y:80,alpha:0.3015},0).wait(1).to({alpha:0.0922},0).wait(1).to({regX:35,regY:30,x:35,y:30,alpha:0},0).wait(2).to({alpha:0.1992},0).wait(1).to({alpha:1},0).wait(1).to({regX:80,regY:80,x:80,y:80,alpha:0.3015},0).wait(1).to({alpha:0.0922},0).wait(1).to({regX:35,regY:30,x:35,y:30,alpha:0},0).wait(2));

	// f2
	this.f2 = new lib.character1_face();
	this.f2.name = "f2";
	this.f2.parent = this;
	this.f2.setTransform(35,30,1,1,0,0,0,35,30);

	this.timeline.addTween(cjs.Tween.get(this.f2).wait(5).to({alpha:0.1992},0).wait(1).to({regX:80,regY:80,x:80,y:80,alpha:0.6441},0).wait(1).to({alpha:0.911},0).wait(1).to({regX:35,regY:30,x:35,y:30,alpha:1},0).wait(19));

	// f1
	this.f1 = new lib.character1_face();
	this.f1.name = "f1";
	this.f1.parent = this;
	this.f1.setTransform(35,30,1,1,0,0,0,35,30);

	this.timeline.addTween(cjs.Tween.get(this.f1).wait(8).to({alpha:0},0).wait(19));

	// f1_alpha
	this.f1_alpha = new lib.character1_face();
	this.f1_alpha.name = "f1_alpha";
	this.f1_alpha.parent = this;
	this.f1_alpha.setTransform(35,30,1,1,0,0,0,35,30);

	this.timeline.addTween(cjs.Tween.get(this.f1_alpha).wait(5).to({alpha:0.8008},0).wait(1).to({regX:80,regY:80,x:80,y:80,alpha:0.7118},0).wait(1).to({alpha:0.4449},0).wait(1).to({regX:35,regY:30,x:35,y:30,alpha:0},0).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164,-206,600,700);


(lib.character1_body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{def:0,nf:1,ng:2});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// glitter
	this.instance = new lib.glitter_first_matome();
	this.instance.parent = this;
	this.instance.setTransform(50.15,-184.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(2));

	// face
	this.f = new lib.character1_face_container();
	this.f.name = "f";
	this.f.parent = this;
	this.f.setTransform(-121,-354);

	this.timeline.addTween(cjs.Tween.get(this.f).to({_off:true},1).wait(1).to({_off:false},0).wait(1));

	// base
	this.b = new lib.character1_base();
	this.b.name = "b";
	this.b.parent = this;
	this.b.setTransform(-165,-164);

	this.timeline.addTween(cjs.Tween.get(this.b).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-285,-560,600,700);


(lib.concent_wrapper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible = true;
		this.play();
	}
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(1));

	// レイヤー_1
	this.instance = new lib.concent_container();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:1.3,regY:5.1,x:1.3,y:5.1,alpha:0.9703},0).wait(1).to({alpha:0.8688},0).wait(1).to({alpha:0.6781},0).wait(1).to({alpha:0.4135},0).wait(1).to({alpha:0.1827},0).wait(1).to({regX:0,regY:0,x:0,y:0,alpha:0.1016},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-406.3,-402.2,815.3,814.7);


(lib.window_container = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{out:1,"in":12});

	// timeline functions:
	this.frame_0 = function() {
		this.w = 40;
		this.h = 40;
		this.x = 220;
		this.y = 220;
		this.scene = "out";
		
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_18 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(7).call(this.frame_18).wait(1));

	// SP_icon_sp
	this.instance = new lib.window_icon();
	this.instance.parent = this;
	this.instance.setTransform(225.5,8.5,0.9999,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,y:9.5},0).wait(1).to({rotation:45,y:13.4449},0).wait(1).to({rotation:90,y:31.6824},0).wait(1).to({rotation:135,y:77.8042},0).wait(1).to({regY:0.3,rotation:180,y:93.7},0).to({y:90.7},3,cjs.Ease.get(1)).wait(4).to({regY:0,rotation:150.0004,y:77},0).wait(1).to({scaleX:0.9999,rotation:60.0004,y:37},0).wait(1).to({rotation:29.9992,y:18},0).to({rotation:0,y:7.75},2,cjs.Ease.get(1)).to({y:10},2,cjs.Ease.get(-1)).wait(1));

	// w2
	this.w2 = new lib.window();
	this.w2.name = "w2";
	this.w2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.w2).wait(2).to({regX:132.8,regY:49.9,x:132.8,y:56.3},0).wait(1).to({y:80.75},0).wait(1).to({y:119},0).wait(1).to({y:143.45},0).wait(1).to({regX:0,regY:0,x:0,y:100},0).wait(3).to({regX:132.8,regY:49.9,x:132.8,y:145.45},0).wait(1).to({y:142.75},0).wait(1).to({regX:0,regY:0,x:0,y:92},0).wait(1).to({y:61},0).wait(1).to({y:21},0).wait(1).to({y:2},0).wait(1).to({regX:132.8,regY:49.9,x:132.8,y:48.9},0).wait(1).to({regX:0,regY:0,x:0,y:-2},0).wait(1).to({regX:132.8,regY:49.9,x:132.8,y:48.4},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-9.5,267.6,211.2);


(lib.voice_loader = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// loading__
	this.instance = new lib.loading_();
	this.instance.parent = this;
	this.instance.setTransform(-5.45,9.95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({y:6.45},2,cjs.Ease.get(1)).wait(1).to({regX:-0.7,regY:5.2,x:-6.15,y:12.35},0).wait(1).to({y:14.75},0).wait(1).to({regX:0,regY:0,x:-5.45,y:10.45},0).to({y:9.95},2,cjs.Ease.get(1)).wait(1));

	// loading__
	this.instance_1 = new lib.loading_();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-9.35,9.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({y:6.45},2,cjs.Ease.get(1)).wait(1).to({regX:-0.7,regY:5.2,x:-10.05,y:12.35},0).wait(1).to({y:14.75},0).wait(1).to({regX:0,regY:0,x:-9.35,y:10.45},0).to({y:9.95},2,cjs.Ease.get(1)).wait(2));

	// loading__
	this.instance_2 = new lib.loading_();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-13.3,9.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({y:6.45},2,cjs.Ease.get(1)).wait(1).to({regX:-0.7,regY:5.2,x:-14,y:12.35},0).wait(1).to({y:14.75},0).wait(1).to({regX:0,regY:0,x:-13.3,y:10.45},0).to({y:9.95},2,cjs.Ease.get(1)).wait(3));

	// loading_G
	this.instance_3 = new lib.loading_G();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-21.55,9.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({y:6.45},2,cjs.Ease.get(1)).wait(1).to({regX:0.4,regY:1.2,x:-21.15,y:8.35},0).wait(1).to({y:10.75},0).wait(1).to({regX:0,regY:0,x:-21.55,y:10.45},0).to({y:9.95},2,cjs.Ease.get(1)).wait(4));

	// loading_N
	this.instance_4 = new lib.loading_N();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-31.95,9.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({y:6.45},2,cjs.Ease.get(1)).wait(1).to({regX:0.6,regY:1.2,x:-31.35,y:8.35},0).wait(1).to({y:10.75},0).wait(1).to({regX:0,regY:0,x:-31.95,y:10.45},0).to({y:9.95},2,cjs.Ease.get(1)).wait(5));

	// loading_I
	this.instance_5 = new lib.loading_I();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-38.5,9.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({y:6.45},2,cjs.Ease.get(1)).wait(1).to({regX:-0.2,regY:1.3,x:-38.7,y:8.45},0).wait(1).to({y:10.85},0).wait(1).to({regX:0,regY:0,x:-38.5,y:10.45},0).to({y:9.95},2,cjs.Ease.get(1)).wait(6));

	// loading_D
	this.instance_6 = new lib.loading_D();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-46.8,9.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(3).to({y:6.45},2,cjs.Ease.get(1)).wait(1).to({regX:0.5,regY:1.2,x:-46.3,y:8.35},0).wait(1).to({y:10.75},0).wait(1).to({regX:0,regY:0,x:-46.8,y:10.45},0).to({y:9.95},2,cjs.Ease.get(1)).wait(7));

	// loading_A
	this.instance_7 = new lib.loading_A();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-57.4,9.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2).to({y:6.45},2,cjs.Ease.get(1)).wait(1).to({regY:1.2,y:8.35},0).wait(1).to({y:10.75},0).wait(1).to({regY:0,y:10.45},0).to({y:9.95},2,cjs.Ease.get(1)).wait(8));

	// loading_O
	this.instance_8 = new lib.loading_O();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-67.85,9.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({y:6.45},2,cjs.Ease.get(1)).wait(1).to({regX:0.6,regY:1.2,x:-67.25,y:8.35},0).wait(1).to({y:10.75},0).wait(1).to({regX:0,regY:0,x:-67.85,y:10.45},0).to({y:9.95},2,cjs.Ease.get(1)).wait(9));

	// loading_L
	this.instance_9 = new lib.loading_L();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-77.4,9.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({y:6.45},2,cjs.Ease.get(1)).wait(1).to({regX:0.6,regY:1.3,x:-76.8,y:8.45},0).wait(1).to({y:10.85},0).wait(1).to({regX:0,regY:0,x:-77.4,y:10.45},0).to({y:9.95},2,cjs.Ease.get(1)).wait(10));

	// circle
	this.instance_10 = new lib.loader_ring2_container();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-90.6,10.6,1,1,0,0,0,-0.1,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.4,2.6,92.4,15.4);


(lib.gｌitter_rise_inner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{r:46,"-":142});

	// timeline functions:
	this.frame_0 = function() {
		this.rotation = this.rotation + exportRoot._u.random(14);
		this.gotoAndPlay(exportRoot._u.random(40)+42)
	}
	this.frame_142 = function() {
		this.gotoAndPlay("r");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(142).call(this.frame_142).wait(1));

	// レイヤー_1
	this.instance = new lib.gｌitter_rise_core();
	this.instance.parent = this;
	this.instance.setTransform(0,-17.45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(46).to({x:0.6,y:355.55},96).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.1,-28.7,86.7,395.5);


(lib.glitter_rise = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.gｌitter_rise_inner();
	this.instance.parent = this;
	this.instance.setTransform(105.4,8.8,0.6479,0.6442);

	this.instance_1 = new lib.gｌitter_rise_inner();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-103.35,13.55,0.6479,0.6442);

	this.instance_2 = new lib.gｌitter_rise_inner();
	this.instance_2.parent = this;
	this.instance_2.setTransform(133.05,1.4,0.3695,0.3674);

	this.instance_3 = new lib.gｌitter_rise_inner();
	this.instance_3.parent = this;
	this.instance_3.setTransform(120.35,4.1,0.3695,0.3674);

	this.instance_4 = new lib.gｌitter_rise_inner();
	this.instance_4.parent = this;
	this.instance_4.setTransform(91.85,12.05,0.6947,0.692);

	this.instance_5 = new lib.gｌitter_rise_inner();
	this.instance_5.parent = this;
	this.instance_5.setTransform(75.65,14.3,0.6947,0.692);

	this.instance_6 = new lib.gｌitter_rise_inner();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-76.5,8.3,0.3962,0.3946);

	this.instance_7 = new lib.gｌitter_rise_inner();
	this.instance_7.parent = this;
	this.instance_7.setTransform(93.05,23.3,0.3962,0.3946);

	this.instance_8 = new lib.gｌitter_rise_inner();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-64.8,16.35,0.6947,0.692);

	this.instance_9 = new lib.gｌitter_rise_inner();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-119.75,9.85,0.6947,0.692);

	this.instance_10 = new lib.gｌitter_rise_inner();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-94.85,9.25,0.6947,0.692);

	this.instance_11 = new lib.gｌitter_rise_inner();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-85.05,-5.15,0.3962,0.3946);

	this.instance_12 = new lib.gｌitter_rise_inner();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-110.9,7.45,0.3962,0.3946);

	this.instance_13 = new lib.gｌitter_rise_inner();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-73.3,2.9,0.6947,0.692);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.glitter_rise, new cjs.Rectangle(-126.4,-16.9,263,37.8), null);


(lib.gliter_container = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// powder
	this.instance = new lib.glitter_rise();
	this.instance.parent = this;
	this.instance.setTransform(11.9,-35.05,1.0489,1.0489,2.9285,0,0,5.2,-0.3);

	this.instance_1 = new lib.glitter_rise();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-39.95,8.25,1.155,1.0852,0.8008,0,0,0.1,6.5);
	this.instance_1.alpha = 0.6992;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.gliter_container, new cjs.Rectangle(-185.9,-57,335.8,82.3), null);


(lib.character1_container = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{standby:0,jump:8,jump2:16,jump_double:25,jump_flower:37,jump_flower2:47,nod:57,nod2:66,nod_double:81,swing:92,swing_on:112,swing_off:121,notice:132,notice_jump:146,laugh:160,chord:181,question:201,question_on:229,question_off:241,exclamation:252,down:268,down2:295,shy_jump:313,shy_down:325,shock:343,sigh:350,happy:369,anger:384,anger2:404,damage:416,concent:433,move:442});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.play();
	}
	this.frame_15 = function() {
		this.stop();
	}
	this.frame_16 = function() {
		this.play();
	}
	this.frame_24 = function() {
		this.stop();
	}
	this.frame_25 = function() {
		this.play();
	}
	this.frame_36 = function() {
		this.stop();
	}
	this.frame_37 = function() {
		this.play();
	}
	this.frame_46 = function() {
		this.stop();
	}
	this.frame_47 = function() {
		this.play();
	}
	this.frame_56 = function() {
		this.stop();
	}
	this.frame_57 = function() {
		this.play();
	}
	this.frame_65 = function() {
		this.stop();
	}
	this.frame_66 = function() {
		this.play();
	}
	this.frame_80 = function() {
		this.stop();
	}
	this.frame_81 = function() {
		this.play();
	}
	this.frame_91 = function() {
		this.stop();
	}
	this.frame_92 = function() {
		this.play();
	}
	this.frame_111 = function() {
		this.stop();
	}
	this.frame_112 = function() {
		this.play();
	}
	this.frame_120 = function() {
		this.stop();
	}
	this.frame_121 = function() {
		this.play();
	}
	this.frame_131 = function() {
		this.stop();
	}
	this.frame_132 = function() {
		this.play();
	}
	this.frame_145 = function() {
		this.stop();
	}
	this.frame_146 = function() {
		this.play();
	}
	this.frame_159 = function() {
		this.stop();
	}
	this.frame_160 = function() {
		this.play();
	}
	this.frame_180 = function() {
		this.stop();
	}
	this.frame_181 = function() {
		this.play();
	}
	this.frame_200 = function() {
		this.stop();
	}
	this.frame_201 = function() {
		this.play();
	}
	this.frame_228 = function() {
		this.stop();
	}
	this.frame_229 = function() {
		this.play();
	}
	this.frame_240 = function() {
		this.stop();
	}
	this.frame_241 = function() {
		this.play();
	}
	this.frame_251 = function() {
		this.stop();
	}
	this.frame_252 = function() {
		this.play();
	}
	this.frame_267 = function() {
		this.stop();
	}
	this.frame_268 = function() {
		this.play();
	}
	this.frame_294 = function() {
		this.stop();
	}
	this.frame_295 = function() {
		this.play();
	}
	this.frame_312 = function() {
		this.stop();
	}
	this.frame_313 = function() {
		this.play();
	}
	this.frame_324 = function() {
		this.stop();
	}
	this.frame_325 = function() {
		this.play();
	}
	this.frame_342 = function() {
		this.stop();
	}
	this.frame_343 = function() {
		this.play();
	}
	this.frame_349 = function() {
		this.stop();
	}
	this.frame_350 = function() {
		this.play();
	}
	this.frame_368 = function() {
		this.stop();
	}
	this.frame_369 = function() {
		this.play();
	}
	this.frame_383 = function() {
		this.stop();
	}
	this.frame_384 = function() {
		this.play();
	}
	this.frame_403 = function() {
		this.stop();
	}
	this.frame_404 = function() {
		this.play();
	}
	this.frame_415 = function() {
		this.stop();
	}
	this.frame_416 = function() {
		this.play();
	}
	this.frame_432 = function() {
		this.stop();
	}
	this.frame_433 = function() {
		this.play();
	}
	this.frame_441 = function() {
		this.stop();
	}
	this.frame_442 = function() {
		this.play();
	}
	this.frame_492 = function() {
		this.gotoAndPlay("move");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(1).call(this.frame_8).wait(7).call(this.frame_15).wait(1).call(this.frame_16).wait(8).call(this.frame_24).wait(1).call(this.frame_25).wait(11).call(this.frame_36).wait(1).call(this.frame_37).wait(9).call(this.frame_46).wait(1).call(this.frame_47).wait(9).call(this.frame_56).wait(1).call(this.frame_57).wait(8).call(this.frame_65).wait(1).call(this.frame_66).wait(14).call(this.frame_80).wait(1).call(this.frame_81).wait(10).call(this.frame_91).wait(1).call(this.frame_92).wait(19).call(this.frame_111).wait(1).call(this.frame_112).wait(8).call(this.frame_120).wait(1).call(this.frame_121).wait(10).call(this.frame_131).wait(1).call(this.frame_132).wait(13).call(this.frame_145).wait(1).call(this.frame_146).wait(13).call(this.frame_159).wait(1).call(this.frame_160).wait(20).call(this.frame_180).wait(1).call(this.frame_181).wait(19).call(this.frame_200).wait(1).call(this.frame_201).wait(27).call(this.frame_228).wait(1).call(this.frame_229).wait(11).call(this.frame_240).wait(1).call(this.frame_241).wait(10).call(this.frame_251).wait(1).call(this.frame_252).wait(15).call(this.frame_267).wait(1).call(this.frame_268).wait(26).call(this.frame_294).wait(1).call(this.frame_295).wait(17).call(this.frame_312).wait(1).call(this.frame_313).wait(11).call(this.frame_324).wait(1).call(this.frame_325).wait(17).call(this.frame_342).wait(1).call(this.frame_343).wait(6).call(this.frame_349).wait(1).call(this.frame_350).wait(18).call(this.frame_368).wait(1).call(this.frame_369).wait(14).call(this.frame_383).wait(1).call(this.frame_384).wait(19).call(this.frame_403).wait(1).call(this.frame_404).wait(11).call(this.frame_415).wait(1).call(this.frame_416).wait(16).call(this.frame_432).wait(1).call(this.frame_433).wait(8).call(this.frame_441).wait(1).call(this.frame_442).wait(50).call(this.frame_492).wait(1));

	// sun_effect
	this.instance = new lib.hikari();
	this.instance.parent = this;
	this.instance.setTransform(325.65,-437.6,1.0552,1.6289,0,11.3091,-168.6914,47,-122.1);
	this.instance.alpha = 0.2813;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(493));

	// effect2
	this.instance_1 = new lib.drop1_v2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-81.9,-365.05,1.1645,1.1645);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(313).to({_off:false},0).wait(1).to({regX:1.2,regY:1.8,rotation:-33.7496,x:-107.5,y:-374.05,alpha:0.4141},0).wait(1).to({regX:0,regY:0,rotation:-44.9995,x:-119.15,y:-378.35,alpha:0.2188},0).to({_off:true},1).wait(1).to({_off:false,rotation:0,x:-81.9,y:-365.05,alpha:1},0).wait(1).to({regX:1.2,regY:1.8,rotation:-33.7496,x:-107.5,y:-374.05,alpha:0.4141},0).wait(1).to({regX:0,regY:0,rotation:-44.9995,x:-119.15,y:-378.35,alpha:0.2188},0).to({_off:true},1).wait(5).to({_off:false,rotation:0,x:-81.9,y:-365.05,alpha:1},0).wait(1).to({regX:1.2,regY:1.8,rotation:-33.7496,x:-107.5,y:-374.05,alpha:0.4141},0).wait(1).to({regX:0,regY:0,rotation:-44.9995,x:-119.15,y:-378.35,alpha:0.2188},0).to({_off:true},1).wait(1).to({_off:false,rotation:0,x:-81.9,y:-365.05,alpha:1},0).wait(1).to({regX:1.2,regY:1.8,rotation:-33.7496,x:-107.5,y:-374.05,alpha:0.4141},0).wait(1).to({regX:0,regY:0,rotation:-44.9995,x:-119.15,y:-378.35,alpha:0.2188},0).to({_off:true},1).wait(161));

	// effect
	this.instance_2 = new lib.spread_flower_pink("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-27.75,-270.9,1.4808,1.4808);

	this.instance_3 = new lib.good_effect("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-27.75,-270.9,1.481,1.481);

	this.instance_4 = new lib.notice();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-99.45,-360.95,1.187,1.187,0,-169.8305,10.1695,-29.1,20.4);
	this.instance_4._off = true;

	this.instance_5 = new lib.laugh("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-120.35,-355.65,1.4204,1.4204,35.8424,0,0,-30.3,20.6);
	this.instance_5._off = true;

	this.instance_6 = new lib.chord("synched",0,false);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-92.55,-273.3,1.0029,1.0029,-61.4995,0,0,-23.4,76.9);

	this.instance_7 = new lib.question();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-93.2,-357.9,1.053,1.053,-28.4906);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.instance_8 = new lib.mc_exclamation("synched",0,false);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-95.45,-372.6,1.0929,1.0929,-29.9996,0,0,0,0.1);

	this.instance_9 = new lib.drop1a("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-89.95,-354,1,1,0,0,0,-0.5,0.2);
	this.instance_9._off = true;

	this.instance_10 = new lib.drop2_v2("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(-83.7,-355.3,0.9876,0.9876,14.9998);
	this.instance_10._off = true;

	this.instance_11 = new lib.shock("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(-93.3,-358.95,1.3878,1.3878,-121.2396);

	this.instance_12 = new lib.sigh("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(-70.8,-204.55);
	this.instance_12.alpha = 0.6016;
	this.instance_12._off = true;

	this.instance_13 = new lib.heart("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(-92.6,-314.15,0.4532,0.4532);
	this.instance_13._off = true;

	this.instance_14 = new lib.angry("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(45.35,-334.25,0.5276,0.5276);
	this.instance_14._off = true;

	this.instance_15 = new lib.mc_punpun();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-85.7,-383.4,1.1377,1.1377);

	this.instance_16 = new lib.concent_wrapper("synched",0,false);
	this.instance_16.parent = this;
	this.instance_16.setTransform(-28,-271.45,1,1,0,0,0,-0.5,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},37).to({state:[{t:this.instance_3}]},10).to({state:[]},10).to({state:[{t:this.instance_4}]},76).to({state:[]},2).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).to({state:[{t:this.instance_4}]},2).to({state:[]},2).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},15).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).to({state:[{t:this.instance_6}]},1).to({state:[]},20).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_7}]},7).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[]},1).to({state:[{t:this.instance_7}]},6).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[]},1).to({state:[{t:this.instance_8}]},5).to({state:[{t:this.instance_9}]},16).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},9).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[]},1).to({state:[{t:this.instance_10}]},24).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[]},1).to({state:[{t:this.instance_10}]},5).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[]},1).to({state:[{t:this.instance_11}]},11).to({state:[]},1).to({state:[{t:this.instance_11}]},1).to({state:[]},1).to({state:[{t:this.instance_11}]},1).to({state:[]},1).to({state:[{t:this.instance_12}]},3).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[]},1).to({state:[{t:this.instance_13}]},11).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[]},1).to({state:[{t:this.instance_14}]},6).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},5).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[]},1).to({state:[{t:this.instance_15}]},2).to({state:[]},12).to({state:[{t:this.instance_16}]},17).to({state:[]},9).wait(51));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(133).to({_off:false},0).to({_off:true},2).wait(1).to({_off:false},0).wait(3).to({regX:-28.8,regY:20.5,x:-99.05,alpha:0.6944},0).wait(1).to({alpha:0.4444},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.1111},0).wait(1).to({alpha:0.0278},0).wait(1).to({regX:-29.1,regY:20.4,x:-99.45,alpha:0},0).to({_off:true},1).wait(2).to({_off:false,alpha:1},0).to({_off:true},2).wait(1).to({_off:false},0).wait(3).to({regX:-28.8,regY:20.5,x:-99.05,alpha:0.6944},0).wait(1).to({alpha:0.4444},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.1111},0).wait(1).to({alpha:0.0278},0).wait(1).to({regX:-29.1,regY:20.4,x:-99.45,alpha:0},0).to({_off:true},1).wait(334));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(160).to({_off:false},0).wait(15).to({startPosition:0},0).wait(1).to({regX:-31.4,regY:22.1,scaleX:1.4203,scaleY:1.4203,x:-122.85,y:-354.8,alpha:0.5625,startPosition:1},0).wait(1).to({alpha:0.25,startPosition:2},0).wait(1).to({alpha:0.0625,startPosition:3},0).wait(1).to({regX:-30.3,regY:20.6,scaleX:1.4204,scaleY:1.4204,x:-120.35,y:-355.65,alpha:0,startPosition:19},0).to({_off:true},1).wait(313));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(202).to({_off:false},0).wait(1).to({regX:-0.2,regY:0.2,x:-100.15,y:-371.3,alpha:0.5556},0).wait(1).to({x:-104.25,y:-379.55,alpha:0.8889},0).wait(1).to({regX:0,regY:0,x:-105.55,y:-382.6,alpha:1},0).wait(1).to({regX:-0.2,regY:0.2,x:-105.3,y:-381.65},0).wait(1).to({x:-104.3,y:-379.8},0).wait(1).to({x:-102.6,y:-376.65},0).wait(1).to({regX:0,regY:0,x:-100.15,y:-372.6},0).to({x:-100.9,y:-373.95},2).wait(8).to({regX:-0.2,regY:0.2,x:-100.65,y:-373.05,alpha:0.9298},0).wait(1).to({x:-99.6,y:-371.1,alpha:0.692},0).wait(1).to({x:-98,y:-368.2,alpha:0.339},0).wait(1).to({x:-96.85,y:-366.05,alpha:0.0788},0).wait(1).to({regX:0,regY:0,x:-96.4,y:-365.75,alpha:0},0).to({_off:true},1).wait(6).to({_off:false,x:-93.65,y:-357.5},0).wait(1).to({regX:-0.2,regY:0.2,x:-100.6,y:-370.9,alpha:0.5556},0).wait(1).to({x:-104.7,y:-379.15,alpha:0.8889},0).wait(1).to({regX:0,regY:0,x:-106,y:-382.2,alpha:1},0).wait(1).to({regX:-0.2,regY:0.2,x:-105.75,y:-381.25},0).wait(1).to({x:-104.75,y:-379.4},0).wait(1).to({x:-103.05,y:-376.25},0).wait(1).to({regX:0,regY:0,x:-100.6,y:-372.2},0).to({x:-101.35,y:-373.55},2).wait(3).to({regX:-0.2,regY:0.2,x:-101.1,y:-372.65,alpha:0.9298},0).wait(1).to({x:-100.05,y:-370.7,alpha:0.692},0).wait(1).to({x:-98.45,y:-367.8,alpha:0.339},0).wait(1).to({x:-97.3,y:-365.65,alpha:0.0788},0).wait(1).to({regX:0,regY:0,x:-96.85,y:-365.35,alpha:0},0).to({_off:true},1).wait(246));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(268).to({_off:false},0).wait(1).to({regX:0.5,regY:-0.6,x:-88.95,y:-350.3},0).wait(1).to({y:-346.45},0).wait(1).to({y:-343.2},0).wait(1).to({y:-340.55},0).wait(1).to({y:-338.45},0).wait(1).to({y:-336.95},0).wait(1).to({y:-336.05},0).wait(1).to({regX:-0.5,regY:0.2,x:-89.95,y:-335},0).wait(9).to({startPosition:0},0).wait(1).to({regX:0.5,regY:-0.6,x:-88.95,y:-335.8,alpha:0.4444},0).wait(1).to({alpha:0.1111},0).wait(1).to({regX:-0.5,regY:0.2,x:-89.95,y:-335,alpha:0},0).to({_off:true},1).wait(204));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(313).to({_off:false},0).wait(1).to({scaleX:1.1203,scaleY:1.1203,rotation:-18.7494,x:-115.125,y:-350.6875,alpha:0.4141},0).wait(1).to({scaleX:1.1645,scaleY:1.1645,rotation:-29.9991,x:-125.6,y:-349.15,alpha:0.2188},0).to({_off:true},1).wait(1).to({_off:false,scaleX:0.9876,scaleY:0.9876,rotation:14.9998,x:-83.7,y:-355.3,alpha:1},0).wait(1).to({scaleX:1.1203,scaleY:1.1203,rotation:-18.7494,x:-115.125,y:-355.075,alpha:0.4141},0).wait(1).to({scaleX:1.1645,scaleY:1.1645,rotation:-29.9991,x:-125.6,y:-355,alpha:0.2188},0).to({_off:true},1).wait(5).to({_off:false,scaleX:0.9876,scaleY:0.9876,rotation:14.9998,x:-83.7,y:-355.3,alpha:1},0).wait(1).to({scaleX:1.1203,scaleY:1.1203,rotation:-18.7494,x:-115.125,y:-350.6875,alpha:0.4141},0).wait(1).to({scaleX:1.1645,scaleY:1.1645,rotation:-29.9991,x:-125.6,y:-349.15,alpha:0.2188},0).to({_off:true},1).wait(1).to({_off:false,scaleX:0.9876,scaleY:0.9876,rotation:14.9998,x:-83.7,y:-355.3,alpha:1},0).wait(1).to({scaleX:1.1203,scaleY:1.1203,rotation:-18.7494,x:-115.125,y:-355.075,alpha:0.4141},0).wait(1).to({scaleX:1.1645,scaleY:1.1645,rotation:-29.9991,x:-125.6,y:-355,alpha:0.2188},0).to({_off:true},1).wait(161));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(351).to({_off:false},0).wait(1).to({x:-71.8,y:-203.55,alpha:1},0).wait(1).to({regX:0.9,x:-71.9,y:-202.6,alpha:0.8965},0).wait(1).to({x:-73.25,y:-201.4,alpha:0.7636},0).wait(1).to({x:-74.85,y:-199.95,alpha:0.6048},0).wait(1).to({x:-76.65,y:-198.35,alpha:0.4229},0).wait(1).to({x:-78.65,y:-196.5,alpha:0.2205},0).wait(1).to({regX:0,x:-81.8,y:-194.55,alpha:0},0).to({_off:true},1).wait(134));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(370).to({_off:false},0).wait(1).to({regX:2.3,regY:1,scaleX:0.8633,scaleY:0.8633,x:-94.35,y:-328.3},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-97.6,y:-334.15},0).wait(1).to({regX:2.3,regY:1,scaleX:0.9896,scaleY:0.9896,x:-95.05,y:-332},0).wait(1).to({scaleX:0.9586,scaleY:0.9586,x:-94.5,y:-328.75},0).wait(1).to({regX:0,regY:0,scaleX:0.9068,scaleY:0.9068,x:-95.6,y:-324.15},0).to({scaleX:1,scaleY:1,x:-96.6,y:-328.15},2).wait(3).to({scaleX:1.1165,scaleY:1.1165},0).wait(1).to({regX:2.3,regY:1,scaleX:0.8111,scaleY:0.8111,x:-94,y:-327.15,alpha:0.3262},0).wait(1).to({regX:0,regY:0,scaleX:0.7092,scaleY:0.7092,x:-95.6,y:-327.9,alpha:0.1016},0).to({_off:true},1).wait(110));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(389).to({_off:false},0).wait(1).to({scaleX:1.0714,scaleY:1.0714,y:-338},0).wait(1).to({scaleX:1.2527,scaleY:1.2527,y:-339.25},0).wait(1).to({scaleX:0.9864,scaleY:0.9864},0).wait(1).to({scaleX:0.8976,scaleY:0.8976},0).wait(5).to({startPosition:0},0).wait(1).to({alpha:0.5009},0).wait(1).to({alpha:0.2014},0).wait(1).to({alpha:0.1016},0).to({_off:true},1).wait(91));

	// book1
	this.instance_17 = new lib.book1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-285,-561);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(493));

	// book2
	this.instance_18 = new lib.book2();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-286,-219);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(493));

	// wave2
	this.instance_19 = new lib.gr_hamon1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-175.4,-114.5,0.4151,0.3966,0,102.354,70.3282,-58.6,-113.8);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(464).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:0.4158,scaleY:0.3972,skewX:102.3541,skewY:70.3281,x:-211.3554,y:-101.2295,alpha:0.0388},0).wait(1).to({scaleX:0.417,scaleY:0.3984,skewX:102.3542,x:-211.459,y:-101.1915,alpha:0.1108},0).wait(1).to({scaleX:0.4184,scaleY:0.3998,skewX:102.3543,skewY:70.328,x:-211.5857,y:-101.145,alpha:0.1988},0).wait(1).to({scaleX:0.4201,scaleY:0.4013,skewX:102.3545,skewY:70.3279,x:-211.7294,y:-101.0922,alpha:0.2988},0).wait(1).to({scaleX:0.4219,scaleY:0.4031,skewX:102.3546,skewY:70.3277,x:-211.8887,y:-101.0338,alpha:0.4095},0).wait(1).to({scaleX:0.4239,scaleY:0.405,skewX:102.3548,skewY:70.3276,x:-212.0642,y:-100.9694,alpha:0.5315},0).wait(1).to({scaleX:0.4262,scaleY:0.4072,skewX:102.355,skewY:70.3275,x:-212.2585,y:-100.8981,alpha:0.6666},0).wait(1).to({scaleX:0.4287,scaleY:0.4096,skewX:102.3552,skewY:70.3273,x:-212.478,y:-100.8176,alpha:0.8192},0).wait(1).to({regX:-58.8,regY:-113.9,scaleX:0.4317,scaleY:0.4125,skewX:102.3555,skewY:70.3271,x:-175.4,y:-114.5,alpha:1},0).wait(1).to({regX:0,regY:0,scaleX:0.4345,scaleY:0.4151,skewX:102.3553,skewY:70.327,x:-212.9939,y:-100.5603,alpha:0.8884},0).wait(1).to({scaleX:0.4371,scaleY:0.4176,skewX:102.3552,skewY:70.3269,x:-213.2245,y:-100.4761,alpha:0.7831},0).wait(1).to({scaleX:0.4396,scaleY:0.42,skewX:102.3551,skewY:70.3268,x:-213.4442,y:-100.3959,alpha:0.6829},0).wait(1).to({scaleX:0.442,scaleY:0.4223,skewX:102.355,skewY:70.3267,x:-213.6535,y:-100.3194,alpha:0.5874},0).wait(1).to({scaleX:0.4443,scaleY:0.4244,skewX:102.3549,x:-213.8523,y:-100.2468,alpha:0.4966},0).wait(1).to({scaleX:0.4464,scaleY:0.4265,skewX:102.3548,skewY:70.3266,x:-214.04,y:-100.1783,alpha:0.4109},0).wait(1).to({scaleX:0.4484,scaleY:0.4284,skewX:102.3547,skewY:70.3265,x:-214.2159,y:-100.114,alpha:0.3307},0).wait(1).to({scaleX:0.4502,scaleY:0.4301,skewX:102.3546,skewY:70.3264,x:-214.3786,y:-100.0546,alpha:0.2564},0).wait(1).to({scaleX:0.4519,scaleY:0.4317,skewX:102.3545,x:-214.5267,y:-100.0005,alpha:0.1888},0).wait(1).to({scaleX:0.4534,scaleY:0.4332,skewX:102.3544,skewY:70.3263,x:-214.6581,y:-99.9525,alpha:0.1289},0).wait(1).to({scaleX:0.4547,scaleY:0.4344,x:-214.7699,y:-99.9117,alpha:0.0778},0).wait(1).to({scaleX:0.4557,scaleY:0.4354,skewX:102.3543,skewY:70.3262,x:-214.8584,y:-99.8793,alpha:0.0375},0).wait(1).to({scaleX:0.4564,scaleY:0.436,x:-214.918,y:-99.8576,alpha:0.0103},0).wait(1).to({regX:-58.6,regY:-113.8,scaleX:0.4566,scaleY:0.4362,x:-175.4,y:-114.5,alpha:0},0).to({_off:true},1).wait(5));

	// wave
	this.instance_20 = new lib.gr_hamon1();
	this.instance_20.parent = this;
	this.instance_20.setTransform(56.45,-27.2,1.0046,0.8132,0,46.0134,20.452,-58.4,-114);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(460).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:1.0062,scaleY:0.8145,x:44.6816,y:57.8321,alpha:0.0388},0).wait(1).to({scaleX:1.0091,scaleY:0.8168,x:44.6471,y:58.0777,alpha:0.1108},0).wait(1).to({scaleX:1.0126,scaleY:0.8197,skewX:46.0135,x:44.6049,y:58.378,alpha:0.1988},0).wait(1).to({scaleX:1.0166,scaleY:0.8229,x:44.557,y:58.7189,alpha:0.2988},0).wait(1).to({scaleX:1.0211,scaleY:0.8265,skewX:46.0136,skewY:20.4521,x:44.5039,y:59.0967,alpha:0.4095},0).wait(1).to({scaleX:1.026,scaleY:0.8305,skewX:46.0137,x:44.4455,y:59.5127,alpha:0.5315},0).wait(1).to({scaleX:1.0314,scaleY:0.8349,x:44.3807,y:59.9735,alpha:0.6666},0).wait(1).to({scaleX:1.0375,scaleY:0.8398,skewX:46.0138,skewY:20.4522,x:44.3076,y:60.4941,alpha:0.8192},0).wait(1).to({regX:-58.5,regY:-113.9,scaleX:1.0448,scaleY:0.8457,skewX:46.0139,x:56.35,y:-27.15,alpha:1},0).wait(1).to({regX:0,regY:0,scaleX:1.0515,scaleY:0.8512,skewX:46.0138,x:44.2197,y:61.6668,alpha:0.8884},0).wait(1).to({scaleX:1.0579,scaleY:0.8563,skewY:20.4523,x:44.1438,y:62.2013,alpha:0.7831},0).wait(1).to({scaleX:1.0639,scaleY:0.8612,skewX:46.0137,x:44.0715,y:62.7107,alpha:0.6829},0).wait(1).to({scaleX:1.0697,scaleY:0.8659,skewX:46.0136,x:44.0026,y:63.196,alpha:0.5874},0).wait(1).to({scaleX:1.0751,scaleY:0.8703,x:43.9371,y:63.657,alpha:0.4966},0).wait(1).to({scaleX:1.0803,scaleY:0.8745,skewX:46.0135,x:43.8753,y:64.0923,alpha:0.4109},0).wait(1).to({scaleX:1.0851,scaleY:0.8784,skewX:46.0134,x:43.8175,y:64.5,alpha:0.3307},0).wait(1).to({scaleX:1.0896,scaleY:0.882,x:43.7639,y:64.8773,alpha:0.2564},0).wait(1).to({scaleX:1.0937,scaleY:0.8853,skewX:46.0133,x:43.7151,y:65.2206,alpha:0.1888},0).wait(1).to({scaleX:1.0973,scaleY:0.8882,x:43.6719,y:65.5252,alpha:0.1289},0).wait(1).to({scaleX:1.1004,scaleY:0.8907,x:43.6351,y:65.7845,alpha:0.0778},0).wait(1).to({scaleX:1.1028,scaleY:0.8927,skewX:46.0132,x:43.606,y:65.9896,alpha:0.0375},0).wait(1).to({scaleX:1.1044,scaleY:0.894,x:43.5863,y:66.1278,alpha:0.0103},0).wait(1).to({regX:-58.6,regY:-114,scaleX:1.1051,scaleY:0.8945,x:56.35,y:-27.2,alpha:0},0).to({_off:true},1).wait(9));

	// book4
	this.instance_21 = new lib.book4_1();
	this.instance_21.parent = this;
	this.instance_21.setTransform(-106.5,-4.5);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(442).to({_off:false},0).wait(1).to({x:-106.5033,y:-4.4944},0).wait(1).to({x:-106.5138,y:-4.4766},0).wait(1).to({x:-106.5323,y:-4.4453},0).wait(1).to({x:-106.5598,y:-4.3987},0).wait(1).to({x:-106.5974,y:-4.3348},0).wait(1).to({x:-106.6467,y:-4.2512},0).wait(1).to({x:-106.7092,y:-4.1453},0).wait(1).to({x:-106.7866,y:-4.014},0).wait(1).to({x:-106.8809,y:-3.8541},0).wait(1).to({x:-106.994,y:-3.6623},0).wait(1).to({x:-107.1273,y:-3.4363},0).wait(1).to({x:-107.2808,y:-3.1761},0).wait(1).to({x:-107.4522,y:-2.8854},0).wait(1).to({x:-107.6358,y:-2.5741},0).wait(1).to({x:-107.8226,y:-2.2574},0).wait(1).to({x:-108.0024,y:-1.9525},0).wait(1).to({x:-108.1667,y:-1.6739},0).wait(1).to({x:-108.3105,y:-1.4301},0).wait(1).to({x:-108.4322,y:-1.2237},0).wait(1).to({x:-108.5325,y:-1.0535},0).wait(1).to({x:-108.6133,y:-0.9166},0).wait(1).to({x:-108.6767,y:-0.8091},0).wait(1).to({x:-108.7248,y:-0.7275},0).wait(1).to({x:-108.7596,y:-0.6685},0).wait(1).to({x:-108.7828,y:-0.6291},0).wait(1).to({x:-108.7959,y:-0.607},0).wait(1).to({x:-108.8,y:-0.6},0).wait(1).to({x:-108.7954,y:-0.6078},0).wait(1).to({x:-108.7807,y:-0.6326},0).wait(1).to({x:-108.7546,y:-0.677},0).wait(1).to({x:-108.7152,y:-0.7438},0).wait(1).to({x:-108.6604,y:-0.8367},0).wait(1).to({x:-108.5878,y:-0.9598},0).wait(1).to({x:-108.4944,y:-1.1182},0).wait(1).to({x:-108.3771,y:-1.317},0).wait(1).to({x:-108.2332,y:-1.5611},0).wait(1).to({x:-108.0611,y:-1.8528},0).wait(1).to({x:-107.8633,y:-2.1883},0).wait(1).to({x:-107.648,y:-2.5534},0).wait(1).to({x:-107.4295,y:-2.924},0).wait(1).to({x:-107.2239,y:-3.2725},0).wait(1).to({x:-107.0432,y:-3.5789},0).wait(1).to({x:-106.8924,y:-3.8346},0).wait(1).to({x:-106.7714,y:-4.0398},0).wait(1).to({x:-106.6775,y:-4.199},0).wait(1).to({x:-106.6072,y:-4.3183},0).wait(1).to({x:-106.557,y:-4.4033},0).wait(1).to({x:-106.524,y:-4.4593},0).wait(1).to({x:-106.5057,y:-4.4903},0).wait(1).to({x:-106.5,y:-4.5},0).wait(1));

	// book5
	this.instance_22 = new lib.book5_1();
	this.instance_22.parent = this;
	this.instance_22.setTransform(222.95,9.55);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(442).to({_off:false},0).wait(1).to({x:222.9539,y:9.5549},0).wait(1).to({x:222.9663,y:9.5704},0).wait(1).to({x:222.988,y:9.5976},0).wait(1).to({x:223.0201,y:9.6379},0).wait(1).to({x:223.064,y:9.6929},0).wait(1).to({x:223.121,y:9.7644},0).wait(1).to({x:223.1928,y:9.8544},0).wait(1).to({x:223.2813,y:9.9655},0).wait(1).to({x:223.3886,y:10.1},0).wait(1).to({x:223.5169,y:10.2609},0).wait(1).to({x:223.6681,y:10.4505},0).wait(1).to({x:223.8434,y:10.6703},0).wait(1).to({x:224.0426,y:10.92},0).wait(1).to({x:224.2625,y:11.1959},0).wait(1).to({x:224.4967,y:11.4895},0).wait(1).to({x:224.7351,y:11.7884},0).wait(1).to({x:224.9664,y:12.0785},0).wait(1).to({x:225.1807,y:12.3472},0).wait(1).to({x:225.3717,y:12.5867},0).wait(1).to({x:225.5366,y:12.7935},0).wait(1).to({x:225.6756,y:12.9678},0).wait(1).to({x:225.7902,y:13.1116},0).wait(1).to({x:225.8829,y:13.2278},0).wait(1).to({x:225.956,y:13.3195},0).wait(1).to({x:226.0119,y:13.3895},0).wait(1).to({x:226.0525,y:13.4405},0).wait(1).to({x:226.0797,y:13.4746},0).wait(1).to({x:226.0951,y:13.4939},0).wait(1).to({x:226.1,y:13.5},0).wait(1).to({x:226.0924,y:13.4905},0).wait(1).to({x:226.0681,y:13.46},0).wait(1).to({x:226.0244,y:13.4051},0).wait(1).to({x:225.9579,y:13.3218},0).wait(1).to({x:225.8647,y:13.205},0).wait(1).to({x:225.74,y:13.0486},0).wait(1).to({x:225.5783,y:12.8458},0).wait(1).to({x:225.3741,y:12.5898},0).wait(1).to({x:225.1241,y:12.2762},0).wait(1).to({x:224.8307,y:11.9084},0).wait(1).to({x:224.5079,y:11.5035},0).wait(1).to({x:224.1812,y:11.0938},0).wait(1).to({x:223.879,y:10.7149},0).wait(1).to({x:223.6204,y:10.3907},0).wait(1).to({x:223.4116,y:10.1288},0).wait(1).to({x:223.25,y:9.9262},0).wait(1).to({x:223.13,y:9.7757},0).wait(1).to({x:223.0451,y:9.6693},0).wait(1).to({x:222.9898,y:9.6},0).wait(1).to({x:222.9594,y:9.5618},0).wait(1).to({x:222.95,y:9.55},0).wait(1));

	// wave4
	this.instance_23 = new lib.wave_ukiwa_1();
	this.instance_23.parent = this;
	this.instance_23.setTransform(49.5,-55.5);
	this.instance_23.alpha = 0;
	this.instance_23.compositeOperation = "lighter";
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(442).to({_off:false},0).wait(1).to({scaleX:1.0001,scaleY:1.0001,x:49.489,y:-55.5086,alpha:0.0005},0).wait(1).to({scaleX:1.0003,scaleY:1.0003,x:49.4543,y:-55.5357,alpha:0.0019},0).wait(1).to({scaleX:1.0008,scaleY:1.0008,x:49.3929,y:-55.5837,alpha:0.0044},0).wait(1).to({scaleX:1.0014,scaleY:1.0014,x:49.3013,y:-55.6552,alpha:0.0082},0).wait(1).to({scaleX:1.0023,scaleY:1.0023,x:49.1753,y:-55.7537,alpha:0.0133},0).wait(1).to({scaleX:1.0035,scaleY:1.0035,x:49.01,y:-55.8827,alpha:0.0201},0).wait(1).to({scaleX:1.005,scaleY:1.005,x:48.8,y:-56.0468,alpha:0.0287},0).wait(1).to({scaleX:1.0068,scaleY:1.0068,x:48.5387,y:-56.2509,alpha:0.0394},0).wait(1).to({scaleX:1.0091,scaleY:1.0091,x:48.2196,y:-56.5002,alpha:0.0525},0).wait(1).to({scaleX:1.0118,scaleY:1.0118,x:47.8366,y:-56.7993,alpha:0.0682},0).wait(1).to({scaleX:1.015,scaleY:1.015,x:47.3863,y:-57.1511,alpha:0.0867},0).wait(1).to({scaleX:1.0186,scaleY:1.0186,x:46.8712,y:-57.5534,alpha:0.1078},0).wait(1).to({scaleX:1.0227,scaleY:1.0227,x:46.3043,y:-57.9963,alpha:0.1311},0).wait(1).to({scaleX:1.0269,scaleY:1.0269,x:45.7109,y:-58.4598,alpha:0.1554},0).wait(1).to({scaleX:1.031,scaleY:1.031,x:45.1251,y:-58.9173,alpha:0.1794},0).wait(1).to({scaleX:1.0349,scaleY:1.0349,x:44.5799,y:-59.3433,alpha:0.2018},0).wait(1).to({scaleX:1.0383,scaleY:1.0383,x:44.0974,y:-59.7201,alpha:0.2216},0).wait(1).to({scaleX:1.0412,scaleY:1.0412,x:43.6871,y:-60.0406,alpha:0.2384},0).wait(1).to({scaleX:1.0436,scaleY:1.0436,x:43.3487,y:-60.305,alpha:0.2523},0).wait(1).to({scaleX:1.0455,scaleY:1.0455,x:43.0767,y:-60.5174,alpha:0.2635},0).wait(1).to({scaleX:1.0471,scaleY:1.0471,x:42.8639,y:-60.6836,alpha:0.2722},0).wait(1).to({scaleX:1.0482,scaleY:1.0482,x:42.7028,y:-60.8095,alpha:0.2788},0).wait(1).to({scaleX:1.049,scaleY:1.049,x:42.5866,y:-60.9002,alpha:0.2836},0).wait(1).to({scaleX:1.0496,scaleY:1.0496,x:42.5094,y:-60.9606,alpha:0.2867},0).wait(1).to({scaleX:1.0499,scaleY:1.0499,x:42.4661,y:-60.9944,alpha:0.2885},0).wait(1).to({regX:0.1,regY:-0.1,scaleX:1.05,scaleY:1.05,x:42.5,y:-61,alpha:0.2891},0).wait(1).to({regX:0,regY:0,scaleX:1.0499,scaleY:1.0499,x:42.4129,y:-60.8899,alpha:0.2886},0).wait(1).to({scaleX:1.0496,scaleY:1.0496,x:42.454,y:-60.8579,alpha:0.2869},0).wait(1).to({scaleX:1.0491,scaleY:1.0491,x:42.5271,y:-60.8009,alpha:0.2841},0).wait(1).to({scaleX:1.0483,scaleY:1.0483,x:42.6368,y:-60.7153,alpha:0.2797},0).wait(1).to({scaleX:1.0472,scaleY:1.0472,x:42.7886,y:-60.5968,alpha:0.2738},0).wait(1).to({scaleX:1.0458,scaleY:1.0458,x:42.9892,y:-60.4403,alpha:0.2659},0).wait(1).to({scaleX:1.044,scaleY:1.044,x:43.2461,y:-60.2399,alpha:0.2558},0).wait(1).to({scaleX:1.0417,scaleY:1.0417,x:43.5676,y:-59.9891,alpha:0.2431},0).wait(1).to({scaleX:1.0389,scaleY:1.0389,x:43.962,y:-59.6815,alpha:0.2276},0).wait(1).to({scaleX:1.0355,scaleY:1.0355,x:44.4347,y:-59.3126,alpha:0.209},0).wait(1).to({scaleX:1.0317,scaleY:1.0317,x:44.9845,y:-58.8837,alpha:0.1874},0).wait(1).to({scaleX:1.0273,scaleY:1.0273,x:45.5969,y:-58.406,alpha:0.1633},0).wait(1).to({scaleX:1.0228,scaleY:1.0228,x:46.2401,y:-57.9042,alpha:0.138},0).wait(1).to({scaleX:1.0183,scaleY:1.0183,x:46.8709,y:-57.412,alpha:0.1132},0).wait(1).to({scaleX:1.0142,scaleY:1.0142,x:47.449,y:-56.9611,alpha:0.0904},0).wait(1).to({scaleX:1.0106,scaleY:1.0106,x:47.9495,y:-56.5706,alpha:0.0707},0).wait(1).to({scaleX:1.0077,scaleY:1.0077,x:48.3645,y:-56.2468,alpha:0.0544},0).wait(1).to({scaleX:1.0053,scaleY:1.0053,x:48.6974,y:-55.9871,alpha:0.0413},0).wait(1).to({scaleX:1.0035,scaleY:1.0035,x:48.9564,y:-55.7851,alpha:0.0311},0).wait(1).to({scaleX:1.0021,scaleY:1.0021,x:49.1512,y:-55.6331,alpha:0.0235},0).wait(1).to({scaleX:1.0011,scaleY:1.0011,x:49.2906,y:-55.5243,alpha:0.018},0).wait(1).to({scaleX:1.0005,scaleY:1.0005,x:49.3827,y:-55.4525,alpha:0.0144},0).wait(1).to({scaleX:1.0001,scaleY:1.0001,x:49.434,y:-55.4125,alpha:0.0123},0).wait(1).to({scaleX:1,scaleY:1,x:49.5,y:-55.5,alpha:0.0117},0).wait(1));

	// c
	this.c = new lib.character1_body();
	this.c.name = "c";
	this.c.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.c).wait(9).to({regX:15,regY:-210,x:15,y:-218.4},0).wait(1).to({regX:0,regY:0,x:0,y:-10},0).wait(1).to({regX:15,regY:-210,x:15,y:-219.2},0).wait(1).to({y:-216.45},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({y:1},0).wait(1).to({y:0},0).wait(1).to({y:2},0).wait(1).to({regX:15,regY:-210,x:15,y:-215.5},0).wait(1).to({regX:0,regY:0,x:0,y:-8},0).wait(1).to({regX:15,regY:-210,x:15,y:-215.75},0).wait(1).to({y:-208.8},0).wait(1).to({regX:0,regY:0,x:0,y:4},0).wait(1).to({regX:15,regY:-210,x:15,y:-206.75},0).wait(1).to({y:-209.15},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({y:2},0).wait(1).to({y:-7},0).wait(1).to({regX:15,regY:-210,x:15,y:-214.95},0).wait(1).to({y:-209.05},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({y:-7},0).wait(1).to({regX:15,regY:-210,x:15,y:-214.95},0).wait(1).to({y:-209.05},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({regX:15,regY:-210,x:15,y:-209.1},0).wait(1).to({y:-209.75},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({y:6},0).wait(1).to({regX:15,regY:-210,x:15,y:-219},0).wait(1).to({regX:0,regY:0,x:0,y:-14},0).wait(1).to({regX:15,regY:-210,x:15,y:-222.95},0).wait(1).to({y:-219.35},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({regX:15,regY:-210,x:15,y:-208},0).wait(1).to({regX:0,regY:0,x:0,y:-1},0).wait(1).to({regX:15,regY:-210,x:15,y:-210.25},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({y:6},0).wait(1).to({regX:15,regY:-210,x:15,y:-219},0).wait(1).to({regX:0,regY:0,x:0,y:-14},0).wait(1).to({regX:15,regY:-210,x:15,y:-222.95},0).wait(1).to({y:-219.35},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({regX:15,regY:-210,x:15,y:-208},0).wait(1).to({regX:0,regY:0,x:0,y:-1},0).wait(1).to({regX:15,regY:-210,x:15,y:-210.25},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:15,regY:-210,x:15,y:-209.4},0).wait(1).to({y:-207},0).wait(1).to({y:-204.65},0).wait(1).to({regX:0,regY:0,x:0,y:6},0).wait(1).to({regX:15,regY:-210,x:15,y:-204.65},0).wait(1).to({y:-207},0).wait(1).to({y:-209.4},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:15,regY:-210,x:15,y:-209.85},0).wait(1).to({y:-209.3},0).wait(1).to({y:-208.2},0).wait(1).to({y:-206.85},0).wait(1).to({y:-205.75},0).wait(1).to({y:-205.2},0).wait(1).to({regX:0,regY:0,x:0,y:5},0).wait(1).to({regX:15,regY:-210,x:15,y:-205.2},0).wait(1).to({y:-205.75},0).wait(1).to({y:-206.85},0).wait(1).to({y:-208.2},0).wait(1).to({y:-209.3},0).wait(1).to({y:-209.85},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({y:6},2).wait(1).to({regX:15,regY:-210,x:15,y:-205.25},0).wait(1).to({y:-208.8},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).to({y:6},2).wait(1).to({regX:15,regY:-210,x:15,y:-207.8},0).wait(1).to({y:-209.65},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:15,regY:-210,rotation:-0.0253,x:14.9,y:-209.95},0).wait(1).to({rotation:-0.1129,x:14.7,y:-209.7},0).wait(1).to({rotation:-0.2845,x:14.3,y:-209.15},0).wait(1).to({rotation:-0.5565,x:13.65,y:-208.4},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-0.898,x:12.85,y:-207.35},0).wait(1).to({rotation:-1.2075,x:12.15,y:-206.4},0).wait(1).to({rotation:-1.4141,x:11.6,y:-205.7},0).wait(1).to({rotation:-1.5201,x:11.4,y:-205.4},0).wait(1).to({regX:0,regY:0,rotation:-1.5505,x:2,y:5},0).wait(1).to({regX:15,regY:-210,rotation:-1.5305,x:11.35,y:-205.4},0).wait(1).to({rotation:-1.4624,x:11.5,y:-205.6},0).wait(1).to({rotation:-1.3309,x:11.85,y:-206},0).wait(1).to({rotation:-1.121,x:12.3,y:-206.7},0).wait(1).to({rotation:-0.8372,x:13,y:-207.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.534,x:13.7,y:-208.5},0).wait(1).to({rotation:-0.2881,x:14.25,y:-209.25},0).wait(1).to({rotation:-0.1291,x:14.65,y:-209.75},0).wait(1).to({rotation:-0.0467,x:14.85,y:-209.95},0).wait(1).to({regX:0,regY:0,rotation:-0.0227,x:0,y:0},0).wait(1).to({rotation:0},0).wait(1).to({regX:15,regY:-210,rotation:-0.0253,x:14.9,y:-209.95},0).wait(1).to({rotation:-0.1129,x:14.7,y:-209.7},0).wait(1).to({rotation:-0.2845,x:14.3,y:-209.15},0).wait(1).to({rotation:-0.5565,x:13.65,y:-208.4},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-0.898,x:12.85,y:-207.35},0).wait(1).to({rotation:-1.2075,x:12.15,y:-206.4},0).wait(1).to({rotation:-1.4141,x:11.6,y:-205.7},0).wait(1).to({rotation:-1.5201,x:11.4,y:-205.4},0).wait(1).to({regX:0,regY:0,rotation:-1.5505,x:2,y:5},0).wait(1).to({regX:15,regY:-210,rotation:-1.5302,x:11.35,y:-205.4},0).wait(1).to({rotation:-1.461,x:11.5,y:-205.6},0).wait(1).to({rotation:-1.3276,x:11.85,y:-206},0).wait(1).to({rotation:-1.1146,x:12.3,y:-206.7},0).wait(1).to({rotation:-0.8266,x:13,y:-207.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.5189,x:13.75,y:-208.5},0).wait(1).to({rotation:-0.2693,x:14.3,y:-209.2},0).wait(1).to({rotation:-0.1079,x:14.7,y:-209.75},0).wait(1).to({rotation:-0.0243,x:14.9,y:-209.95},0).wait(1).to({regX:0,regY:0,rotation:0,x:0,y:0},0).wait(16).to({regX:15,regY:-210,x:15,y:-215.55},0).wait(1).to({y:-217.45},0).wait(1).to({regX:0,regY:0,x:0,y:-8},0).wait(1).to({regX:15,regY:-210,x:15,y:-217.35},0).wait(1).to({y:-215.25},0).wait(1).to({regX:0,regY:0,x:0,y:2},0).wait(1).to({y:1},0).wait(1).to({y:0},0).wait(7).to({regX:15,regY:-210,x:15,y:-218.4},0).wait(1).to({regX:0,regY:0,x:0,y:-10},0).wait(1).to({regX:15,regY:-210,x:15,y:-219.2},0).wait(1).to({y:-216.45},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({y:1},0).wait(1).to({y:0},0).wait(15).to({regX:15,regY:-210,rotation:-0.0253,x:14.9,y:-209.9},0).wait(1).to({rotation:-0.1129,x:14.7,y:-209.4},0).wait(1).to({rotation:-0.2845,x:14.3,y:-208.4},0).wait(1).to({rotation:-0.5565,x:13.65,y:-206.95},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-0.898,x:12.85,y:-205},0).wait(1).to({rotation:-1.2075,x:12.15,y:-203.25},0).wait(1).to({rotation:-1.4141,x:11.6,y:-202.05},0).wait(1).to({rotation:-1.5201,x:11.4,y:-201.5},0).wait(1).to({regX:0,regY:0,rotation:-1.5505,x:2,y:9},0).wait(1).to({regX:15,regY:-210,rotation:-1.5305,x:11.35,y:-201.45},0).wait(1).to({rotation:-1.4624,x:11.5,y:-201.85},0).wait(1).to({rotation:-1.3309,x:11.85,y:-202.55},0).wait(1).to({rotation:-1.121,x:12.3,y:-203.8},0).wait(1).to({rotation:-0.8372,x:13,y:-205.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.534,x:13.7,y:-207.15},0).wait(1).to({rotation:-0.2881,x:14.25,y:-208.55},0).wait(1).to({rotation:-0.1291,x:14.65,y:-209.45},0).wait(1).to({rotation:-0.0467,x:14.85,y:-209.9},0).wait(1).to({regX:0,regY:0,rotation:-0.0227,x:0,y:0},0).wait(1).to({rotation:0},0).wait(1).to({regX:15,regY:-210,rotation:-0.147,x:14.6,y:-209.6},0).wait(1).to({rotation:-0.7239,x:13.25,y:-207.85},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-1.3727,x:11.7,y:-205.85},0).wait(1).to({regX:0,regY:0,rotation:-1.5505,x:2,y:5},0).wait(18).to({regX:15,regY:-210,rotation:-1.4913,x:11.45,y:-205.5},0).wait(1).to({rotation:-1.2701,x:11.95,y:-206.2},0).wait(1).to({rotation:-0.8372,x:13,y:-207.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.3606,x:14.1,y:-209},0).wait(1).to({rotation:-0.094,x:14.7,y:-209.8},0).wait(1).to({regX:0,regY:0,rotation:-0.0227,x:0,y:0},0).wait(1).to({rotation:0},0).wait(1).to({regX:15,regY:-210,rotation:-0.0894,x:14.75,y:-209.75},0).wait(1).to({rotation:-0.4358,x:13.95,y:-208.7},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-1.0316,x:12.5,y:-206.9},0).wait(1).to({rotation:-1.4426,x:11.55,y:-205.65},0).wait(1).to({regX:0,regY:0,rotation:-1.5505,x:2,y:5},0).wait(8).to({regX:15,regY:-210,rotation:-1.4913,x:11.45,y:-205.5},0).wait(1).to({rotation:-1.2701,x:11.95,y:-206.2},0).wait(1).to({rotation:-0.8372,x:13,y:-207.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.3606,x:14.1,y:-209},0).wait(1).to({rotation:-0.094,x:14.7,y:-209.8},0).wait(1).to({regX:0,regY:0,rotation:-0.0227,x:0,y:0},0).wait(5).to({rotation:0},0).wait(1).to({regX:15,regY:-210,x:15,y:-218.4},0).wait(1).to({regX:0,regY:0,x:0,y:-10},0).wait(1).to({regX:15,regY:-210,x:15,y:-219.2},0).wait(1).to({y:-216.45},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({y:1},0).wait(1).to({y:0},0).wait(9).to({x:1,y:4},1,cjs.Ease.get(1)).wait(1).to({regX:15,regY:-210,x:12.25,y:-202.25},0).wait(1).to({regX:0,regY:0,x:-4,y:9},0).to({x:0,y:13},4).wait(11).to({regX:15,regY:-210,x:15,y:-197.75},0).wait(1).to({y:-200.7},0).wait(1).to({y:-205.65},0).wait(1).to({y:-209.1},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(5).to({y:-1},0).wait(1).to({regX:15,regY:-210,x:15,y:-209},0).wait(1).to({y:-203.05},0).wait(1).to({regX:0,regY:0,x:0,y:9},0).to({y:8},2).wait(1).to({y:9},0).wait(6).to({regX:15,regY:-210,x:15,y:-202.2},0).wait(1).to({y:-206.5},0).wait(1).to({y:-210.8},0).wait(1).to({regX:0,regY:0,x:0,y:-2},0).wait(1).to({regX:15,regY:-210,x:15,y:-210.5},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:15,regY:-210,x:15,y:-216.7},0).wait(1).to({regX:0,regY:0,x:0,y:-8},0).wait(1).to({regX:15,regY:-210,x:15,y:-216.85},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:15,regY:-210,x:15,y:-218.4},0).wait(1).to({regX:0,regY:0,x:0,y:-10},0).wait(1).to({regX:15,regY:-210,x:15,y:-219.2},0).wait(1).to({y:-216.45},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({y:1},0).wait(1).to({y:0},0).wait(1).to({x:1,y:4},1,cjs.Ease.get(1)).wait(1).to({regX:15,regY:-210,x:12.25,y:-202.25},0).wait(1).to({regX:0,regY:0,x:-4,y:9},0).to({x:0,y:13},4).wait(8).to({regX:15,regY:-210,x:15,y:-199.25},0).wait(1).to({y:-207},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({y:2},0).wait(1).to({regX:15,regY:-210,x:15,y:-211},0).wait(1).to({regX:0,regY:0,x:0,y:-2},0).wait(1).to({regX:15,regY:-210,x:15,y:-210.15},0).wait(1).to({regX:0,regY:0,x:0,y:2},0).wait(1).to({regX:15,regY:-210,x:15,y:-209.5},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:15,regY:-210,x:15,y:-209.4},0).wait(1).to({y:-207},0).wait(1).to({y:-204.65},0).wait(1).to({regX:0,regY:0,x:0,y:6},0).wait(1).to({regX:15,regY:-210,x:15,y:-204.6},0).wait(1).to({y:-204.9},0).wait(1).to({regX:0,regY:0,x:0,y:5},0).wait(5).to({regX:15,regY:-210,x:15,y:-205.4},0).wait(1).to({y:-206.9},0).wait(1).to({y:-209.15},0).wait(1).to({y:-210.6},0).wait(1).to({regX:0,regY:0,x:0,y:-1},0).wait(1).to({regX:15,regY:-210,x:15,y:-210.25},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({y:5},0).wait(1).to({regX:15,regY:-210,x:15,y:-217.6},0).wait(1).to({regX:0,regY:0,x:0,y:-10},0).wait(1).to({regX:15,regY:-210,x:15,y:-219.2},0).wait(1).to({y:-216.45},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({y:1},0).wait(1).to({y:0},0).wait(9).to({regX:15,regY:-210,x:15,y:-217.5},0).wait(1).to({regX:0,regY:0,x:0,y:-10},0).wait(2).to({regX:15,regY:-210,x:15,y:-218},0).wait(1).to({y:-212},0).wait(1).to({regX:0,regY:0,x:0,y:8},0).to({y:5},2).wait(7).to({regX:15,regY:-210,x:15,y:-205.35},0).wait(1).to({y:-206.55},0).wait(1).to({y:-208.5},0).wait(1).to({y:-209.7},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({y:2},0).wait(1).to({y:-7},0).wait(1).to({regX:15,regY:-210,x:15,y:-214.95},0).wait(1).to({y:-209.05},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({y:-7},0).wait(1).to({regX:15,regY:-210,x:15,y:-214.95},0).wait(1).to({y:-209.05},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({regX:15,regY:-210,x:15,y:-209.1},0).wait(1).to({y:-209.75},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:15,regY:-210,x:18,y:-206.6},0).wait(1).to({regX:0,regY:0,x:4,y:4.55},0).to({x:-2,y:8.8},2).wait(1).to({regX:15,regY:-210,x:14.15,y:-200.55},0).wait(1).to({x:14.8,y:-200.15},0).wait(1).to({regX:0,regY:0,x:0,y:10},0).wait(5).to({regX:15,regY:-210,x:15,y:-200.7},0).wait(1).to({y:-203.15},0).wait(1).to({y:-206.85},0).wait(1).to({y:-209.35},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(11).to({regX:15,regY:-210,x:15,y:-210},0).wait(3).to({y:-209.95},0).wait(1).to({y:-209.9},0).wait(1).to({y:-209.85},0).wait(1).to({y:-209.75},0).wait(1).to({y:-209.65},0).wait(1).to({y:-209.55},0).wait(1).to({y:-209.4},0).wait(1).to({y:-209.25},0).wait(1).to({y:-209.05},0).wait(1).to({y:-208.8},0).wait(1).to({y:-208.6},0).wait(1).to({y:-208.4},0).wait(1).to({y:-208.15},0).wait(1).to({y:-208},0).wait(1).to({y:-207.85},0).wait(1).to({y:-207.7},0).wait(1).to({y:-207.6},0).wait(1).to({y:-207.55},0).wait(1).to({y:-207.45},0).wait(2).to({y:-207.4},0).wait(2).to({regX:0,regY:0,x:0,y:2.65},0).wait(1).to({regX:15,regY:-210,x:15,y:-207.4},0).wait(3).to({y:-207.45},0).wait(1).to({y:-207.5},0).wait(1).to({y:-207.6},0).wait(1).to({y:-207.7},0).wait(1).to({y:-207.8},0).wait(1).to({y:-207.95},0).wait(1).to({y:-208.15},0).wait(1).to({y:-208.35},0).wait(1).to({y:-208.6},0).wait(1).to({y:-208.8},0).wait(1).to({y:-209.05},0).wait(1).to({y:-209.25},0).wait(1).to({y:-209.45},0).wait(1).to({y:-209.6},0).wait(1).to({y:-209.75},0).wait(1).to({y:-209.85},0).wait(1).to({y:-209.9},0).wait(1).to({y:-209.95},0).wait(1).to({y:-210},0).wait(2).to({regX:0,regY:0,x:0,y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-456.9,-680.4,851.8,858.5);


(lib.voice_loader_container = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"in":1,"out":11});

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
		this.stop();
	}
	this.frame_1 = function() {
		this.visible = true;
		this.play();
	}
	this.frame_10 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		this.gotoAndStop( 1 );
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(9).call(this.frame_10).wait(13).call(this.frame_23).wait(1));

	// loader
	this.instance = new lib.voice_loader();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,0.1,1,1,0,0,0,-0.5,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.1016},0).to({alpha:1},1,cjs.Ease.get(1)).wait(9).to({alpha:0.1016},2,cjs.Ease.get(1)).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.4,0,92.4,18);


// stage content:
(lib._413_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{end0:14,scene1:15,end1:206,scene2:207,end2:389,scene3:390,end3:562,scene4:563,end4:780,scene5:781,end5:1002,scene6:1003,end6:1184,scene7:1185,end7:1402});

	// timeline functions:
	this.frame_0 = function() {
		// 01.変数初期化(触るべからず) ------
		var _g = {};
		var _u = {};
		// - 01.END -------------------------
		////////////////////////////////////////
		// 02.共通変数のセット(触ってOK) ---- //
		//    -> 触る必要はないかも           //
		////////////////////////////////////////
		// voice_flagは基本的にサーバーから取得する為、あまり気にする必要はありません。
		// あり=true なし=false (tplから変数をもらわないしない場合は、|| のあとを true か false にしてください。
		// ボイスなしのエピソードを作成する場合は false に設定すると良いかも。
		_g.voice_flag = window.im_cjs.voice_flag || false; 
		_g.skip_flag = false;
		_g.window_flag = true;
		_g.ios_flag = false;
		_g.end_flag = false;
		_g.shell = window._spec.isShellApp;
		
		_g.url = window.im_cjs.jump_url || ''; // (tplから変数をもらわないしない場合は、|| のあとに指定したurlを入れてください
		///////////////////////////////////////////
		//- 02.END ----------------------------- //
		///////////////////////////////////////////
		_g.m1 = '';
		_g.m2 = '';
		_g.m3 = '';
		_g.m4 = '';
		_g.m5 = '';
		_g.m6 = '';
		
		_g.idx = 0;
		_g.t_name = '1';
		_g.t_face = '1';
		_g.face_init_flag = true; // face初期化フラグ
		
		_g.start_time;
		_g.start_frame;
		_g.end_frame;
		_g.monitoring_flg = false;
		
		
		//スマホ対応
		if (createjs.Touch.isSupported()) {
			createjs.Touch.enable(stage, true);
		}
		
		// 03.共通関数の登録(基本的に触るべからず) ------
		//random関数
		_u.random = function (_seed) {
			return Math.floor(Math.random() * _seed);
		}
		
		_u.updateTalk = function () {
			exportRoot._g.skip_flag = false;
		
			//--------一時停止("end"にいる)--------
			exportRoot._g.m1 = window.im_cjs.t[exportRoot._g.idx][1];
			exportRoot._g.m2 = window.im_cjs.t[exportRoot._g.idx][2];
			exportRoot._g.m3 = window.im_cjs.t[exportRoot._g.idx][3];
			exportRoot._g.m4 = window.im_cjs.t[exportRoot._g.idx][4];
			exportRoot._u.setText();
			exportRoot.window_1.w2.ar.visible = true;
			exportRoot._g.idx++;
			exportRoot._g.monitoring_flg = false;
			if (exportRoot._g.voice_flag) {
				window.im_cjs.load_voice("scene" + (exportRoot._g.idx));
				exportRoot.loader.visible = true;
				exportRoot.addEventListener('tick', _ticker);
				exportRoot.stop();
			} else {
				exportRoot.stop();
			}
		
			function _ticker() {
				if (window.im_cjs.loaded_check()) {
					exportRoot.loader.visible = false;
					exportRoot.removeEventListener('tick', _ticker);
				}
			}
		}
		
		// 次のスキップ先の判定
		_u.nextScene = function () {
			if (exportRoot._g.skip_flag) {
				//"scene"にいる
				exportRoot._g.skip_flag = false;
				exportRoot.window_1.w2.ar.visible = true;
				exportRoot.gotoAndStop("end" + exportRoot._g.idx);
				
			} else {
				//"end"にいる
		
				exportRoot._g.skip_flag = true;
				exportRoot.window_1.w2.ar.visible = false;
		
				_g.start_time = new Date().getTime();
				_g.start_frame = exportRoot.timeline.position + 1;
				_g.monitoring_flg = true;
				exportRoot.gotoAndPlay("scene" + (exportRoot._g.idx));		
				
				if (exportRoot._g.voice_flag) {
					window.im_cjs.voice_play();
				}
			}
		}
		
		// 顔情報の更新
		// param _instance: exportRootからの見たインスタンスの位置指定
		// _num faceIdの指定
		_u.setFace = function (_instance, _num) {
			exportRoot[_instance].c.f.next_face = (_num - 1);
			exportRoot[_instance].c.f.gotoAndPlay("run");
		}
		
		_u.stagePlay = function () {
			exportRoot.play();
		}
		
		// テキストセット
		// param _type: finish を指定すると最終フレーム用の更新になる（省略可)
		_u.setText = function (_type, _num) {
			_type = _type || null;
			_num = _num || 4;
			if (_type == "finish") {
				var _text_mc = exportRoot.window_2;
				for (var i = 0, len = 2; i < len; i++) {
					_text_mc["line" + (i + 1)].text = exportRoot._g["m" + (i + _num)];
				}
			} else {
				var _text_mc = exportRoot.window_1.w2.text_mc;
		
				for (var i = 1, len = 4; i <= len; i++) {
					_text_mc["line" + i].text = exportRoot._g["m" + i];
				}
			}
		}
		
		// voiceLoad
		_u.setVoice = function (_path, _scene) {
			if (window.voiceLoad) {
				window.voiceLoad(_path, _scene);
			} else {
				console.warn("voiceLoad が見つかりません");
			}
		}
		
		// sceneLoad
		_u.setScene = function (_scene) {
			if (window.sceneLoad) {
				window.sceneoad(scene);
			} else {
				console.warn("sceneLoad が見つかりません");
			}
		}
		
		//PC用にENTERでも進めるようにする。
		window.addEventListener("keydown", handleKeyDown);
		
		function handleKeyDown(event) {
			var keyCode = event.keyCode;
			if (keyCode == 13) { 
		    // エンターキーが押された時の処理
			// loading時
					if (exportRoot.loader.visible) {
						return;
					}
		
					// 最終フレーム時
					if (exportRoot._g.end_flag) {
						window.location.href = exportRoot._g.url;
						window.removeEventListener("keydown", handleKeyDown);
						return;
					}
		
					if (exportRoot._g.window_flag) {
						exportRoot._u.nextScene();
					} else {
						exportRoot._g.window_flag = true;
						exportRoot.window_1.gotoAndPlay("in");
					}
			}
		}
		
				// ボタンタップ処理
				if (window.navigator.userAgent.indexOf('Android') > 0) {
					var _flag = false;
					exportRoot.stage_btn.addEventListener('mousedown', function (event) {
						var _btn = event.nativeEvent.type || event.type;
						if(_btn != "touchstart" || (event.nativeEvent.type != event.type)) {
							if (!_flag) {
								// loading時
								if (exportRoot.loader.visible) {
									return;
								}
								_flag = true;
								setTimeout(function() {
									_flag = false;
								}, 500);
								
								// 最終フレーム時
								if (exportRoot._g.end_flag) {
									//window.location.href = exportRoot._g.url;
									window.location.assign(exportRoot._g.url);
									exportRoot.stage_btn.removeAllEventListeners();
									return;
								}
		
								if (exportRoot._g.window_flag) {
									exportRoot._u.nextScene();
								} else {
									exportRoot._g.window_flag = true;
									exportRoot.window_1.gotoAndPlay("in");
								}
							}
						}
					});
					var _flag2 = false;
					exportRoot.toggle_btn.addEventListener('mousedown', function (e) {
						if (!_flag2) {
							if (exportRoot._g.window_flag) {
							exportRoot._g.window_flag = false;
							exportRoot.window_1.gotoAndPlay("out");
							} else {
								exportRoot._g.window_flag = true;
								exportRoot.window_1.gotoAndPlay("in");
							}
							e.stopPropagation();
						
							_flag2 = true;
							setTimeout(function() {
								_flag2 = false;
							}, 500);
						}
					});
				} else {
					var _flag = false;
					exportRoot.stage_btn.addEventListener('click', function (event) {
						if (!_flag) {
							// loading時
							if (exportRoot.loader.visible) {
								return;
							}
		
							// 最終フレーム時
							if (exportRoot._g.end_flag) {
								window.location.href = exportRoot._g.url;
								exportRoot.stage_btn.removeAllEventListeners();
								return;
							}
		
							if (exportRoot._g.window_flag) {
								exportRoot._u.nextScene();
							} else {
								exportRoot._g.window_flag = true;
								exportRoot.window_1.gotoAndPlay("in");
							}
							_flag = true;
							setTimeout(function() {
								_flag = false;
							}, 500);
						}
						if (exportRoot.loader.visible) {
							return;
						}
					});
					var _flag2 = false;
					exportRoot.toggle_btn.addEventListener('click', function (e) {
						if (!_flag2) {
							if (exportRoot._g.window_flag) {
							exportRoot._g.window_flag = false;
							exportRoot.window_1.gotoAndPlay("out");
							} else {
								exportRoot._g.window_flag = true;
								exportRoot.window_1.gotoAndPlay("in");
							}
							e.stopPropagation();
						
							_flag2 = true;
							setTimeout(function() {
								_flag2 = false;
							}, 500);
						}
					});
				}
		
		// 03.END ---------------------------------
		
		// 変数をexportRootに格納
		exportRoot._g = _g;
		exportRoot._u = _u;
		
		
		// exportRootタイムラインに限り変数の簡略化変数のセット(exportRoot以外でも使用できるが、保証はしない)
		this.m = window.im_cjs;
		
		var frame_skip_ticker = (function() {
		    var root;
		    var ex_frame = [];
		    var correction_time;
		    var frame_arr_head = 0;
		    var _f = {};
		     
		    _f.init = function() {
		        root = window.exportRoot;
		        correction_time = 1000 / (lib.properties.fps - 0.3); // createjsのtickerはズレる為、補正値(0.3)を入れて経過時間から本来のフレーム数を取得する
		        _f.get_action_frames();
		        createjs.Ticker.addEventListener('tick', _f.frame_monitoring);
		    }
		     
		    _f.frame_monitoring = function() {
		        var _position = root.timeline.position;
		        var _duration = root.timeline.duration;
		        if (_g.monitoring_flg) {
		            var now_time = new Date().getTime();
		             
		            var now_fps = _g.start_frame + Math.floor((now_time - _g.start_time) / correction_time);
		            // createjsの現在のフレーム数より本来のフレーム数が先行してたらフレームスキップ処理を行う
		            if (now_fps > _position) {
		                var this_position = _position;
		                // frame scriptがある場所をサーチして必ず実行する様にする
		                for (var i = frame_arr_head, len = ex_frame.length; i < len; i++) {
		                    var _t = ex_frame[i];
		                    if (_t > _position && _t < now_fps) {
		                        frame_arr_head = i;
		                        play_fps = _t;
		                        break;
		                    } else {
		                        play_fps = now_fps;
		                    }
		                }
		                // 最終フレームを検知する
		                if (play_fps >= _duration) {
		                    _g.monitoring_flg = false;
		                    play_fps = _duration - 1;
		                }
		                root.gotoAndStop(play_fps);
		            }
		        }
		    };
		    _f.get_action_frames = function() {
		        for (var i = 0, len = root.timeline.duration; i < len; i++) {
		            if (root['frame_' + i] != null) {
		                ex_frame.push(i);
		            }
		        }
		        return;
		    };
		    _f.init();
		})();
	}
	this.frame_14 = function() {
		exportRoot._u.updateTalk();
		this.stop();
		
		exportRoot._u.setFace("ch1", 5);
	}
	this.frame_15 = function() {
		exportRoot._g.m1 = "음~♪";
		exportRoot._g.m2 = "";
		exportRoot._g.m3 = "";
		exportRoot._g.m4 = "";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 5);
		
		this.ch1.gotoAndPlay("move");
	}
	this.frame_43 = function() {
		exportRoot._g.m1 = "음~♪남국의 햇살은,";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 3);
		
		//this.ch1.gotoAndPlay("jump");
	}
	this.frame_69 = function() {
		exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
		exportRoot._g.m2 = "……";
		exportRoot._u.setText();
	}
	this.frame_92 = function() {
		exportRoot._g.m2 = "…… 반짝반짝,";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 2);
	}
	this.frame_107 = function() {
		exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 1);
	}
	this.frame_141 = function() {
		exportRoot._g.m3 = "꼭,";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 2);
	}
	this.frame_156 = function() {
		exportRoot._g.m3 = "꼭, 아냐들을,";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 5);
	}
	this.frame_173 = function() {
		exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
		exportRoot._g.m4 = this.m.t[exportRoot._g.idx][4];
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 3);
	}
	this.frame_206 = function() {
		exportRoot._u.updateTalk();
		
		exportRoot._u.setFace("ch1", 3);
		
		//this.ch1.gotoAndPlay("standby");
	}
	this.frame_207 = function() {
		exportRoot._g.m1 = "여기에 와서,";
		exportRoot._g.m2 = "";
		exportRoot._g.m3 = "";
		exportRoot._g.m4 = "";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 1);
	}
	this.frame_223 = function() {
		exportRoot._g.m1 = "여기에 와서, 또 하나,";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 2);
	}
	this.frame_243 = function() {
		exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
		exportRoot._g.m2 = "여름을 알았습니다.";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 5);
	}
	this.frame_282 = function() {
		exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
		exportRoot._g.m3 = "";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 2);
	}
	this.frame_308 = function() {
		exportRoot._g.m3 = "아냐는……";
		exportRoot._u.setText();
	}
	this.frame_331 = function() {
		exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 5);
	}
	this.frame_362 = function() {
		exportRoot._g.m4 = this.m.t[exportRoot._g.idx][4];
		exportRoot._u.setText();
		
		
		exportRoot._u.setFace("ch1", 3);
	}
	this.frame_389 = function() {
		exportRoot._u.updateTalk();
		
		exportRoot._u.setFace("ch1", 3);
	}
	this.frame_390 = function() {
		exportRoot._g.m1 = "자,";
		exportRoot._g.m2 = "";
		exportRoot._g.m3 = "";
		exportRoot._g.m4 = "";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 1);
	}
	this.frame_401 = function() {
		exportRoot._g.m1 = "자, 봐주세요♪";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 2);
	}
	this.frame_424 = function() {
		exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
		exportRoot._g.m2 = "";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 6);
	}
	this.frame_448 = function() {
		exportRoot._g.m2 = "колыбе́ль……";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 7);
	}
	this.frame_473 = function() {
		exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
		exportRoot._u.setText();
	}
	this.frame_487 = function() {
		exportRoot._g.m3 = "흔들리고 있는 것 같아요.";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 6);
	}
	this.frame_520 = function() {
		exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 2);
	}
	this.frame_543 = function() {
		exportRoot._g.m4 = this.m.t[exportRoot._g.idx][4];
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 5);
	}
	this.frame_562 = function() {
		exportRoot._u.updateTalk();
		
		exportRoot._u.setFace("ch1", 5);
	}
	this.frame_563 = function() {
		exportRoot._g.m1 = "프로듀서도……";
		exportRoot._g.m2 = "";
		exportRoot._g.m3 = "";
		exportRoot._g.m4 = "";
		exportRoot._u.setText();
		
		this.ch1.c.gotoAndStop("nf");
		this.ch2.c.gotoAndStop("ng");
	}
	this.frame_591 = function() {
		exportRoot._g.m1 = "프로듀서도…… 한가롭게,";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch2", 2);
	}
	this.frame_607 = function() {
		exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
		exportRoot._g.m2 = "있나요?";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch2", 1);
	}
	this.frame_636 = function() {
		exportRoot._g.m2 = "있나요? 지금은,";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch2", 2);
	}
	this.frame_654 = function() {
		exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
		exportRoot._g.m3 = "있습니다.";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch2", 5);
	}
	this.frame_695 = function() {
		exportRoot._g.m3 = "있습니다. 그러니까,";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch2", 2);
	}
	this.frame_715 = function() {
		exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
		exportRoot._g.m4 = "힘을 빼도,";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch2", 1);
	}
	this.frame_761 = function() {
		exportRoot._g.m4 = this.m.t[exportRoot._g.idx][4];
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch2", 3);
	}
	this.frame_780 = function() {
		exportRoot._u.updateTalk();
		
		exportRoot._u.setFace("ch2", 3);
	}
	this.frame_781 = function() {
		exportRoot._g.m1 = "앞으로도,";
		exportRoot._g.m2 = "";
		exportRoot._g.m3 = "";
		exportRoot._g.m4 = "";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch2", 1);
	}
	this.frame_806 = function() {
		exportRoot._g.m1 = "앞으로도, 어려운 일,";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch2", 7);
	}
	this.frame_834 = function() {
		exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
		exportRoot._g.m2 = "……";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch2", 6);
	}
	this.frame_866 = function() {
		exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
		exportRoot._g.m3 = "";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch2", 2);
	}
	this.frame_882 = function() {
		exportRoot._u.setFace("ch2", 1);
	}
	this.frame_920 = function() {
		exportRoot._g.m3 = "하지만,";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch2", 2);
	}
	this.frame_939 = function() {
		exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
		exportRoot._u.setText();
	}
	this.frame_976 = function() {
		exportRoot._g.m4 = this.m.t[exportRoot._g.idx][4];
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch2", 5);
	}
	this.frame_1002 = function() {
		exportRoot._u.updateTalk();
		
		exportRoot._u.setFace("ch2", 5);
	}
	this.frame_1003 = function() {
		exportRoot._g.m1 = "그러면,";
		exportRoot._g.m2 = "";
		exportRoot._g.m3 = "";
		exportRoot._g.m4 = "";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch2", 2);
	}
	this.frame_1020 = function() {
		exportRoot._g.m1 = "그러면, 또,";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch2", 5);
	}
	this.frame_1027 = function() {
		exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
		exportRoot._u.setText();
		
		//exportRoot._u.setFace("ch2", 5);
	}
	this.frame_1050 = function() {
		exportRoot._g.m2 = "프로듀서와 아냐,";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch2", 1);
	}
	this.frame_1066 = function() {
		exportRoot._u.setFace("ch2", 2);
	}
	this.frame_1081 = function() {
		exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
		exportRoot._u.setText();
		
		//exportRoot._u.setFace("ch2", 2);
	}
	this.frame_1098 = function() {
		exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch2", 5);
	}
	this.frame_1144 = function() {
		exportRoot._g.m4 = "저는,";
		exportRoot._u.setText();
		
		
		exportRoot._u.setFace("ch2", 2);
	}
	this.frame_1161 = function() {
		exportRoot._g.m4 = this.m.t[exportRoot._g.idx][4];
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch2", 1);
	}
	this.frame_1184 = function() {
		exportRoot._u.updateTalk();
		
		exportRoot._u.setFace("ch2", 1);
	}
	this.frame_1185 = function() {
		exportRoot._g.m1 = "후훗,";
		exportRoot._g.m2 = "";
		exportRoot._g.m3 = "";
		exportRoot._g.m4 = "";
		exportRoot._u.setText();
		
		this.ch2.gotoAndPlay("move");
		
		exportRoot._u.setFace("ch2", 5);
		this.ch2.c.gotoAndStop("def");
	}
	this.frame_1204 = function() {
		exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch2", 2);
	}
	this.frame_1244 = function() {
		exportRoot._g.m2 = "평소보다,";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch2", 7);
	}
	this.frame_1262 = function() {
		exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch2", 6);
	}
	this.frame_1300 = function() {
		exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch2", 2);
	}
	this.frame_1338 = function() {
		// finish指定時は exportRoot._g.m の後ろの数字をsetTextの2つ目の引数に指定する
		exportRoot._g.m5 = this.m.t[exportRoot._g.idx][5];
		exportRoot._u.setText("finish", 5);
	}
	this.frame_1363 = function() {
		exportRoot._g.m6 = this.m.t[exportRoot._g.idx][6];
		exportRoot._u.setText("finish", 5);
	}
	this.frame_1402 = function() {
		//最後のシーンであることをHTML側に通知
		exportRoot._g.end_flag = true;
		
		//label「scene7」通過後のskip対策
		exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
		exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
		exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
		exportRoot._g.m4 = this.m.t[exportRoot._g.idx][4];
		exportRoot._g.m5 = this.m.t[exportRoot._g.idx][5];
		exportRoot._g.m6 = this.m.t[exportRoot._g.idx][6]; 
		exportRoot._u.setText("finish", 5);
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1).call(this.frame_15).wait(28).call(this.frame_43).wait(26).call(this.frame_69).wait(23).call(this.frame_92).wait(15).call(this.frame_107).wait(34).call(this.frame_141).wait(15).call(this.frame_156).wait(17).call(this.frame_173).wait(33).call(this.frame_206).wait(1).call(this.frame_207).wait(16).call(this.frame_223).wait(20).call(this.frame_243).wait(39).call(this.frame_282).wait(26).call(this.frame_308).wait(23).call(this.frame_331).wait(31).call(this.frame_362).wait(27).call(this.frame_389).wait(1).call(this.frame_390).wait(11).call(this.frame_401).wait(23).call(this.frame_424).wait(24).call(this.frame_448).wait(25).call(this.frame_473).wait(14).call(this.frame_487).wait(33).call(this.frame_520).wait(23).call(this.frame_543).wait(19).call(this.frame_562).wait(1).call(this.frame_563).wait(28).call(this.frame_591).wait(16).call(this.frame_607).wait(29).call(this.frame_636).wait(18).call(this.frame_654).wait(41).call(this.frame_695).wait(20).call(this.frame_715).wait(46).call(this.frame_761).wait(19).call(this.frame_780).wait(1).call(this.frame_781).wait(25).call(this.frame_806).wait(28).call(this.frame_834).wait(32).call(this.frame_866).wait(16).call(this.frame_882).wait(38).call(this.frame_920).wait(19).call(this.frame_939).wait(37).call(this.frame_976).wait(26).call(this.frame_1002).wait(1).call(this.frame_1003).wait(17).call(this.frame_1020).wait(7).call(this.frame_1027).wait(23).call(this.frame_1050).wait(16).call(this.frame_1066).wait(15).call(this.frame_1081).wait(17).call(this.frame_1098).wait(46).call(this.frame_1144).wait(17).call(this.frame_1161).wait(23).call(this.frame_1184).wait(1).call(this.frame_1185).wait(19).call(this.frame_1204).wait(40).call(this.frame_1244).wait(18).call(this.frame_1262).wait(38).call(this.frame_1300).wait(38).call(this.frame_1338).wait(25).call(this.frame_1363).wait(39).call(this.frame_1402).wait(5));

	// shield
	this.instance = new lib.shield();
	this.instance.parent = this;
	this.instance.setTransform(120,160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1407));

	// sender
	this.sender = new lib.sender();
	this.sender.name = "sender";
	this.sender.parent = this;
	this.sender.setTransform(-100,0);
	this.sender._off = true;

	this.timeline.addTween(cjs.Tween.get(this.sender).wait(1402).to({_off:false},0).wait(5));

	// SP_loader
	this.loader = new lib.voice_loader_container();
	this.loader.name = "loader";
	this.loader.parent = this;
	this.loader.setTransform(190.05,12,1,1,0,0,0,-50.1,11);

	this.timeline.addTween(cjs.Tween.get(this.loader).wait(1407));

	// place
	this.instance_1 = new lib.tie();
	this.instance_1.parent = this;
	this.instance_1.setTransform(120,155);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({alpha:0.1992},3,cjs.Ease.get(1)).to({_off:true},1).wait(1388));

	// SP_pusher
	this.instance_2 = new lib.pusher_next();
	this.instance_2.parent = this;
	this.instance_2.setTransform(120,290);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off:false},0).to({_off:true},3).wait(1392));

	// fader
	this.instance_3 = new lib.dark();
	this.instance_3.parent = this;
	this.instance_3.setTransform(120,155);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},15).wait(1392));

	// window
	this.window_1 = new lib.window_container();
	this.window_1.name = "window_1";
	this.window_1.parent = this;
	this.window_1.setTransform(2,321.1);

	this.timeline.addTween(cjs.Tween.get(this.window_1).wait(15).to({y:301.1},0).wait(1).to({regX:132.8,regY:98.8,x:134.8,y:398.6},0).wait(1).to({y:394.65},0).wait(1).to({y:388},0).wait(1).to({y:378.75},0).wait(1).to({y:367.25},0).wait(1).to({y:354.25},0).wait(1).to({y:340.85},0).wait(1).to({y:328.45},0).wait(1).to({y:318.45},0).wait(1).to({y:312},0).wait(1).to({regX:0,regY:0,x:2,y:211},0).wait(1).to({regX:132.8,regY:98.8,x:134.8,y:310.3},0).wait(1).to({y:311.9},0).wait(1).to({regX:0,regY:0,x:2,y:214},0).wait(1298).to({regX:132.8,regY:98.8,x:134.8,y:313.9},0).wait(1).to({y:317.75},0).wait(1).to({y:325},0).wait(1).to({y:336.4},0).wait(1).to({y:351.7},0).wait(1).to({y:368.85},0).wait(1).to({y:384.15},0).wait(1).to({y:395.55},0).wait(1).to({y:402.8},0).wait(1).to({y:406.65},0).wait(1).to({regX:0,regY:0,x:2,y:309},0).to({_off:true},1).wait(69));

	// window
	this.window_2 = new lib.finish_text_container();
	this.window_2.name = "window_2";
	this.window_2.parent = this;
	this.window_2.setTransform(120,322);
	this.window_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.window_2).wait(1338).to({_off:false},0).wait(1).to({regX:16.8,regY:-1.3,x:136.8,y:320.2},0).wait(1).to({y:318.5},0).wait(1).to({y:315.2},0).wait(1).to({y:309.85},0).wait(1).to({y:302.4},0).wait(1).to({y:294.05},0).wait(1).to({y:287.1},0).wait(1).to({y:282.55},0).wait(1).to({y:280.25},0).wait(1).to({regX:0,regY:0,x:120,y:280.9},0).to({y:282.9},3).wait(56));

	// petal
	this.instance_4 = new lib.petal_container();
	this.instance_4.parent = this;
	this.instance_4.setTransform(62.2,-84.7,1.3542,1.3542);

	this.instance_5 = new lib.petal_container();
	this.instance_5.parent = this;
	this.instance_5.setTransform(102.95,-43.65,2.1061,1.9746,0,0,180);

	this.instance_6 = new lib.petal_container();
	this.instance_6.parent = this;
	this.instance_6.setTransform(173.95,-60.5,1.2566,1.6126);

	this.instance_7 = new lib.petal_container();
	this.instance_7.parent = this;
	this.instance_7.setTransform(26.5,-31.8,1.2566,1.6126);

	this.instance_8 = new lib.petal_container();
	this.instance_8.parent = this;
	this.instance_8.setTransform(203.6,-215.8,3.3643,4.0483,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]},1338).wait(69));

	// glitters
	this.glitters = new lib.glitters();
	this.glitters.name = "glitters";
	this.glitters.parent = this;
	this.glitters._off = true;

	this.timeline.addTween(cjs.Tween.get(this.glitters).wait(1338).to({_off:false},0).wait(69));

	// SP_blur
	this.ranko_finish_blur = new lib.ranko_finish_blur();
	this.ranko_finish_blur.name = "ranko_finish_blur";
	this.ranko_finish_blur.parent = this;
	this.ranko_finish_blur._off = true;
	this.ranko_finish_blur.filters = [new cjs.ColorFilter(1, 1, 1, 1, 220, 220, 220, 0)];
	this.ranko_finish_blur.cache(-2,-2,244,314);

	this.timeline.addTween(cjs.Tween.get(this.ranko_finish_blur).wait(1338).to({_off:false},0).wait(1).to({regX:120,regY:155,x:120,y:155,alpha:0.9945},0).wait(1).to({alpha:0.9767},0).wait(1).to({alpha:0.9447},0).wait(1).to({alpha:0.8961},0).wait(1).to({alpha:0.8283},0).wait(1).to({alpha:0.7389},0).wait(1).to({alpha:0.6267},0).wait(1).to({alpha:0.4949},0).wait(1).to({alpha:0.3544},0).wait(1).to({alpha:0.225},0).wait(1).to({alpha:0.1265},0).wait(1).to({alpha:0.0688},0).wait(1).to({regX:0,regY:0,x:0,y:0,alpha:0.0508},0).to({_off:true},1).wait(55));

	// character_face
	this.fns = new lib.finish_1();
	this.fns.name = "fns";
	this.fns.parent = this;
	this.fns.setTransform(120,168,1,1,0,0,0,120,168);
	this.fns._off = true;

	this.timeline.addTween(cjs.Tween.get(this.fns).wait(1338).to({_off:false},0).wait(69));

	// white_mask
	this.instance_9 = new lib.white_mask();
	this.instance_9.parent = this;
	this.instance_9.setTransform(120,155,1,1,0,0,0,120,155);
	this.instance_9.alpha = 0.0508;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1326).to({_off:false},0).to({alpha:0.8984},11).to({_off:true},1).wait(69));

	// overlay_black
	this.instance_10 = new lib.dark();
	this.instance_10.parent = this;
	this.instance_10.setTransform(120,155);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(15).to({_off:false},0).to({alpha:0},3).to({_off:true},1).wait(1166).to({_off:false,alpha:1},0).to({alpha:0},7).to({_off:true},1).wait(214));

	// powder
	this.instance_11 = new lib.glitter_rise();
	this.instance_11.parent = this;
	this.instance_11.setTransform(194.25,-43.4,1.0489,1.0489,-2.749,0,0,5.1,-0.4);

	this.instance_12 = new lib.glitter_rise();
	this.instance_12.parent = this;
	this.instance_12.setTransform(125.5,-5.3,1.155,1.0853,-4.8774,0,0,0,6.5);
	this.instance_12.alpha = 0.6992;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11}]}).to({state:[]},15).wait(1392));

	// effect
	this.instance_13 = new lib.gliter_container();
	this.instance_13.parent = this;
	this.instance_13.setTransform(143.7,-12.25,1.0599,1.0599,-4.2877,0,0,-0.1,2.5);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(15).to({_off:false},0).wait(566).to({regX:0,scaleX:1.1997,scaleY:1.1997,rotation:-4.2598,x:145.75,y:-12.2},56).wait(770));

	// ch
	this.ch1 = new lib.character1_container();
	this.ch1.name = "ch1";
	this.ch1.parent = this;
	this.ch1.setTransform(-178,570,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.ch1).wait(15).to({regX:0.1,regY:0.3,scaleX:0.63,scaleY:0.63,x:84.25,y:280.3},0).wait(1).to({regX:52.1,regY:-272.6,x:117,y:108.35},0).wait(1).to({x:117.1},0).wait(1).to({x:117.25},0).wait(1).to({x:117.5},0).wait(1).to({x:117.85},0).wait(1).to({x:118.25},0).wait(1).to({x:118.8},0).wait(1).to({x:119.5},0).wait(1).to({x:120.3},0).wait(1).to({x:121.3},0).wait(1).to({x:122.45},0).wait(1).to({x:123.8},0).wait(1).to({x:125.3},0).wait(1).to({x:126.95},0).wait(1).to({x:128.65},0).wait(1).to({x:130.4},0).wait(1).to({x:132},0).wait(1).to({x:133.45},0).wait(1).to({x:134.7},0).wait(1).to({x:135.75},0).wait(1).to({x:136.65},0).wait(1).to({x:137.35},0).wait(1).to({x:137.9},0).wait(1).to({x:138.3},0).wait(1).to({x:138.6},0).wait(1).to({x:138.8},0).wait(1).to({x:138.95},0).wait(1).to({regX:0.1,regY:0.3,x:106.25,y:280.3},0).wait(165).to({regX:52.1,regY:-272.6,x:139,y:108.35},0).wait(1).to({scaleX:0.6301,scaleY:0.6301,x:139.05,y:108.4},0).wait(1).to({scaleX:0.6304,scaleY:0.6304,y:108.35},0).wait(1).to({scaleX:0.6307,scaleY:0.6307},0).wait(1).to({scaleX:0.6312,scaleY:0.6312,x:139.1,y:108.4},0).wait(1).to({scaleX:0.6318,scaleY:0.6318,y:108.45},0).wait(1).to({scaleX:0.6326,scaleY:0.6326,x:139.15,y:108.5},0).wait(1).to({scaleX:0.6337,scaleY:0.6337,x:139.2,y:108.55},0).wait(1).to({scaleX:0.6349,scaleY:0.6349,x:139.3,y:108.65},0).wait(1).to({scaleX:0.6364,scaleY:0.6364,x:139.35,y:108.7},0).wait(1).to({scaleX:0.6381,scaleY:0.6381,x:139.45,y:108.8},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:139.55,y:108.9},0).wait(1).to({scaleX:0.6419,scaleY:0.6419,x:139.65,y:109},0).wait(1).to({scaleX:0.6437,scaleY:0.6437,x:139.75,y:109.15},0).wait(1).to({scaleX:0.6453,scaleY:0.6453,x:139.8,y:109.2},0).wait(1).to({scaleX:0.6466,scaleY:0.6466,x:139.9,y:109.3},0).wait(1).to({scaleX:0.6476,scaleY:0.6476,x:139.95,y:109.35},0).wait(1).to({scaleX:0.6484,scaleY:0.6484,x:140,y:109.4},0).wait(1).to({scaleX:0.649,scaleY:0.649},0).wait(1).to({scaleX:0.6495,scaleY:0.6495,x:140.05,y:109.45},0).wait(1).to({scaleX:0.6498,scaleY:0.6498},0).wait(1).to({scaleX:0.6499,scaleY:0.6499,y:109.5},0).wait(1).to({regX:0.3,regY:0.3,scaleX:0.65,scaleY:0.65,x:106.35,y:286.85},0).wait(161).to({regX:52.1,regY:-272.6,scaleX:0.6498,scaleY:0.6498,x:139.95,y:109.45},0).wait(1).to({scaleX:0.6492,scaleY:0.6492,x:139.9,y:109.5},0).wait(1).to({scaleX:0.6483,scaleY:0.6483,x:139.8,y:109.6},0).wait(1).to({scaleX:0.6468,scaleY:0.6468,x:139.7,y:109.7},0).wait(1).to({scaleX:0.6449,scaleY:0.6449,x:139.55,y:109.85},0).wait(1).to({scaleX:0.6424,scaleY:0.6424,x:139.3,y:110.05},0).wait(1).to({scaleX:0.6392,scaleY:0.6392,x:139.05,y:110.3},0).wait(1).to({scaleX:0.6354,scaleY:0.6354,x:138.7,y:110.6},0).wait(1).to({scaleX:0.6309,scaleY:0.6309,x:138.3,y:110.9},0).wait(1).to({scaleX:0.6255,scaleY:0.6255,x:137.85,y:111.35},0).wait(1).to({scaleX:0.6192,scaleY:0.6192,x:137.3,y:111.8},0).wait(1).to({scaleX:0.6119,scaleY:0.6119,x:136.65,y:112.4},0).wait(1).to({scaleX:0.6035,scaleY:0.6035,x:135.9,y:113.05},0).wait(1).to({scaleX:0.594,scaleY:0.594,x:135.1,y:113.8},0).wait(1).to({scaleX:0.5833,scaleY:0.5833,x:134.15,y:114.6},0).wait(1).to({scaleX:0.5717,scaleY:0.5717,x:133.15,y:115.5},0).wait(1).to({scaleX:0.5593,scaleY:0.5593,x:132.05,y:116.45},0).wait(1).to({scaleX:0.5464,scaleY:0.5464,x:130.9,y:117.45},0).wait(1).to({scaleX:0.5336,scaleY:0.5336,x:129.8,y:118.4},0).wait(1).to({scaleX:0.5211,scaleY:0.5211,x:128.7,y:119.4},0).wait(1).to({scaleX:0.5095,scaleY:0.5095,x:127.7,y:120.25},0).wait(1).to({scaleX:0.4989,scaleY:0.4989,x:126.75,y:121.1},0).wait(1).to({scaleX:0.4896,scaleY:0.4896,x:125.9,y:121.8},0).wait(1).to({scaleX:0.4814,scaleY:0.4814,x:125.25,y:122.45},0).wait(1).to({scaleX:0.4744,scaleY:0.4744,x:124.6,y:123},0).wait(1).to({scaleX:0.4685,scaleY:0.4685,x:124.05,y:123.45},0).wait(1).to({scaleX:0.4636,scaleY:0.4636,x:123.65,y:123.8},0).wait(1).to({scaleX:0.4596,scaleY:0.4596,x:123.3,y:124.1},0).wait(1).to({scaleX:0.4564,scaleY:0.4564,x:123.05,y:124.4},0).wait(1).to({scaleX:0.4539,scaleY:0.4539,x:122.8,y:124.55},0).wait(1).to({scaleX:0.4521,scaleY:0.4521,x:122.65,y:124.7},0).wait(1).to({scaleX:0.4509,scaleY:0.4509,x:122.55,y:124.8},0).wait(1).to({scaleX:0.4502,scaleY:0.4502,x:122.45,y:124.9},0).wait(1).to({regX:0.5,regY:0.6,scaleX:0.45,scaleY:0.45,x:99.15,y:247.7},0).wait(139).to({alpha:0.0117},8,cjs.Ease.get(1)).to({_off:true},1).wait(835));

	// bg
	this.instance_14 = new lib.bg_zoom_half("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(93.05,112.7,0.63,0.63,0,0,0,264.9,297.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(15).to({x:71},0).wait(1).to({regX:300,regY:350,x:93.15,y:145.55},0).wait(1).to({x:93.25},0).wait(1).to({x:93.4},0).wait(1).to({x:93.65},0).wait(1).to({x:94},0).wait(1).to({x:94.4},0).wait(1).to({x:94.95},0).wait(1).to({x:95.65},0).wait(1).to({x:96.45},0).wait(1).to({x:97.45},0).wait(1).to({x:98.6},0).wait(1).to({x:99.95},0).wait(1).to({x:101.45},0).wait(1).to({x:103.1},0).wait(1).to({x:104.85},0).wait(1).to({x:106.55},0).wait(1).to({x:108.15},0).wait(1).to({x:109.6},0).wait(1).to({x:110.9},0).wait(1).to({x:111.95},0).wait(1).to({x:112.8},0).wait(1).to({x:113.55},0).wait(1).to({x:114.1},0).wait(1).to({x:114.5},0).wait(1).to({x:114.8},0).wait(1).to({x:115},0).wait(1).to({x:115.15},0).wait(1).to({regX:264.9,regY:297.9,x:93.05,y:112.7},0).wait(164).to({startPosition:0},0).wait(1).to({regX:300,regY:350,x:115.15,y:145.55},0).wait(1).to({scaleX:0.6301,scaleY:0.6301,x:115.2,y:145.6},0).wait(1).to({scaleX:0.6304,scaleY:0.6304,x:115.15},0).wait(1).to({scaleX:0.6307,scaleY:0.6307,x:115.2,y:145.65},0).wait(1).to({scaleX:0.6312,scaleY:0.6312,y:145.7},0).wait(1).to({scaleX:0.6318,scaleY:0.6318,x:115.25,y:145.75},0).wait(1).to({scaleX:0.6326,scaleY:0.6326,y:145.8},0).wait(1).to({scaleX:0.6337,scaleY:0.6337,x:115.3,y:145.95},0).wait(1).to({scaleX:0.6349,scaleY:0.6349,y:146.05},0).wait(1).to({scaleX:0.6364,scaleY:0.6364,x:115.4,y:146.25},0).wait(1).to({scaleX:0.6381,scaleY:0.6381,x:115.45,y:146.45},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:115.55,y:146.6},0).wait(1).to({scaleX:0.6419,scaleY:0.6419,x:115.6,y:146.8},0).wait(1).to({scaleX:0.6437,scaleY:0.6437,x:115.65,y:147},0).wait(1).to({scaleX:0.6453,scaleY:0.6453,x:115.7,y:147.2},0).wait(1).to({scaleX:0.6466,scaleY:0.6466,x:115.75,y:147.3},0).wait(1).to({scaleX:0.6476,scaleY:0.6476,x:115.8,y:147.4},0).wait(1).to({scaleX:0.6484,scaleY:0.6484,x:115.85,y:147.5},0).wait(1).to({scaleX:0.649,scaleY:0.649,y:147.55},0).wait(1).to({scaleX:0.6495,scaleY:0.6495,y:147.6},0).wait(1).to({scaleX:0.6498,scaleY:0.6498,x:115.9,y:147.65},0).wait(1).to({scaleX:0.6499,scaleY:0.6499},0).wait(1).to({regX:264.8,regY:297.9,scaleX:0.65,scaleY:0.65,x:93,y:113.8},0).wait(160).to({startPosition:0},0).wait(1).to({regX:300,regY:350,scaleX:0.6498,scaleY:0.6498,x:115.9,y:147.7},0).wait(1).to({scaleX:0.6492,scaleY:0.6492,x:115.85},0).wait(1).to({scaleX:0.6483,scaleY:0.6483,x:115.8},0).wait(1).to({scaleX:0.6468,scaleY:0.6468,x:115.75,y:147.75},0).wait(1).to({scaleX:0.6449,scaleY:0.6449,x:115.65,y:147.8},0).wait(1).to({scaleX:0.6424,scaleY:0.6424,x:115.5},0).wait(1).to({scaleX:0.6392,scaleY:0.6392,x:115.35,y:147.95},0).wait(1).to({scaleX:0.6354,scaleY:0.6354,x:115.2,y:148},0).wait(1).to({scaleX:0.6309,scaleY:0.6309,x:114.9,y:148.1},0).wait(1).to({scaleX:0.6255,scaleY:0.6255,x:114.65,y:148.25},0).wait(1).to({scaleX:0.6192,scaleY:0.6192,x:114.35,y:148.4},0).wait(1).to({scaleX:0.6119,scaleY:0.6119,x:113.95,y:148.6},0).wait(1).to({scaleX:0.6035,scaleY:0.6035,x:113.55,y:148.8},0).wait(1).to({scaleX:0.594,scaleY:0.594,x:113.05,y:149.05},0).wait(1).to({scaleX:0.5833,scaleY:0.5833,x:112.5,y:149.25},0).wait(1).to({scaleX:0.5717,scaleY:0.5717,x:111.9,y:149.55},0).wait(1).to({scaleX:0.5593,scaleY:0.5593,x:111.3,y:149.85},0).wait(1).to({scaleX:0.5464,scaleY:0.5464,x:110.65,y:150.15},0).wait(1).to({scaleX:0.5336,scaleY:0.5336,x:109.95,y:150.5},0).wait(1).to({scaleX:0.5211,scaleY:0.5211,x:109.35,y:150.8},0).wait(1).to({scaleX:0.5095,scaleY:0.5095,x:108.7,y:151.05},0).wait(1).to({scaleX:0.4989,scaleY:0.4989,x:108.15,y:151.3},0).wait(1).to({scaleX:0.4896,scaleY:0.4896,x:107.7,y:151.55},0).wait(1).to({scaleX:0.4814,scaleY:0.4814,x:107.25,y:151.75},0).wait(1).to({scaleX:0.4744,scaleY:0.4744,x:106.9,y:151.9},0).wait(1).to({scaleX:0.4685,scaleY:0.4685,x:106.6,y:152.05},0).wait(1).to({scaleX:0.4636,scaleY:0.4636,x:106.4,y:152.15},0).wait(1).to({scaleX:0.4596,scaleY:0.4596,x:106.2,y:152.25},0).wait(1).to({scaleX:0.4564,scaleY:0.4564,x:106,y:152.35},0).wait(1).to({scaleX:0.4539,scaleY:0.4539,x:105.9,y:152.4},0).wait(1).to({scaleX:0.4521,scaleY:0.4521,x:105.8,y:152.45},0).wait(1).to({scaleX:0.4509,scaleY:0.4509,x:105.7},0).wait(1).to({scaleX:0.4502,scaleY:0.4502,x:105.65},0).wait(1).to({regX:264.7,regY:297.9,scaleX:0.45,scaleY:0.45,x:89.8,y:129.05},0).wait(139).to({startPosition:0},0).to({alpha:0.0117},8,cjs.Ease.get(1)).to({_off:true},1).wait(835));

	// ch2
	this.ch2 = new lib.character1_container();
	this.ch2.name = "ch2";
	this.ch2.parent = this;
	this.ch2.setTransform(507.5,338.9,0.45,0.45,0,0,0,0.5,0.6);
	this.ch2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ch2).wait(390).to({_off:false},0).wait(173).to({regX:0,regY:0,scaleX:0.72,scaleY:0.72,x:123.1,y:321.8},0).wait(1).to({regX:52.1,regY:-272.6,x:160.6,y:125.5},0).wait(1).to({y:125.45},0).wait(1).to({y:125.4},0).wait(1).to({y:125.25},0).wait(1).to({y:125.1},0).wait(1).to({y:124.85},0).wait(1).to({y:124.55},0).wait(1).to({y:124.15},0).wait(1).to({y:123.7},0).wait(1).to({y:123.25},0).wait(1).to({y:122.9},0).wait(1).to({y:122.55},0).wait(1).to({y:122.35},0).wait(1).to({y:122.2},0).wait(1).to({y:122.1},0).wait(1).to({y:122.05},0).wait(1).to({regX:0,regY:0,x:123.1,y:318.3},0).wait(202).to({regX:52.1,regY:-272.6,scaleX:0.7201,scaleY:0.7201,x:160.6,y:122},0).wait(1).to({scaleX:0.7205,scaleY:0.7205,x:160.65},0).wait(1).to({scaleX:0.7211,scaleY:0.7211,x:160.7,y:121.95},0).wait(1).to({scaleX:0.7221,scaleY:0.7221,x:160.8},0).wait(1).to({scaleX:0.7235,scaleY:0.7235,x:160.95,y:121.9},0).wait(1).to({scaleX:0.7253,scaleY:0.7253,x:161.15,y:121.85},0).wait(1).to({scaleX:0.7276,scaleY:0.7276,x:161.35,y:121.75},0).wait(1).to({scaleX:0.7305,scaleY:0.7305,x:161.65,y:121.65},0).wait(1).to({scaleX:0.734,scaleY:0.734,x:162.05,y:121.5},0).wait(1).to({scaleX:0.7382,scaleY:0.7382,x:162.45,y:121.35},0).wait(1).to({scaleX:0.7431,scaleY:0.7431,x:162.95,y:121.15},0).wait(1).to({scaleX:0.7487,scaleY:0.7487,x:163.55,y:121},0).wait(1).to({scaleX:0.7548,scaleY:0.7548,x:164.15,y:120.8},0).wait(1).to({scaleX:0.7609,scaleY:0.7609,x:164.85,y:120.6},0).wait(1).to({scaleX:0.7667,scaleY:0.7667,x:165.45,y:120.35},0).wait(1).to({scaleX:0.772,scaleY:0.772,x:165.95,y:120.15},0).wait(1).to({scaleX:0.7765,scaleY:0.7765,x:166.45,y:120.05},0).wait(1).to({scaleX:0.7802,scaleY:0.7802,x:166.8,y:119.85},0).wait(1).to({scaleX:0.7832,scaleY:0.7832,x:167.15,y:119.75},0).wait(1).to({scaleX:0.7855,scaleY:0.7855,x:167.35,y:119.65},0).wait(1).to({scaleX:0.7873,scaleY:0.7873,x:167.55},0).wait(1).to({scaleX:0.7885,scaleY:0.7885,x:167.7,y:119.6},0).wait(1).to({scaleX:0.7894,scaleY:0.7894,x:167.8,y:119.55},0).wait(1).to({scaleX:0.7898,scaleY:0.7898},0).wait(1).to({regX:0,regY:0,scaleX:0.79,scaleY:0.79,x:126.7,y:334.9},0).wait(379).to({scaleX:0.45,scaleY:0.45,x:102.55,y:248.4},0).to({_off:true},153).wait(69));

	// bg
	this.instance_15 = new lib.bg_zoom_half("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(108.35,131.6,0.72,0.72,0,0,0,264.5,297.7);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(563).to({_off:false},0).wait(1).to({regX:300,regY:350,x:133.9,y:169.25},0).wait(1).to({y:169.2},0).wait(1).to({y:169.15},0).wait(1).to({y:169},0).wait(1).to({y:168.85},0).wait(1).to({y:168.6},0).wait(1).to({y:168.3},0).wait(1).to({y:167.9},0).wait(1).to({y:167.45},0).wait(1).to({y:167},0).wait(1).to({y:166.6},0).wait(1).to({y:166.3},0).wait(1).to({y:166.05},0).wait(1).to({y:165.9},0).wait(1).to({y:165.8},0).wait(1).to({y:165.75},0).wait(1).to({regX:264.5,regY:297.7,x:108.35,y:128.05},0).wait(201).to({startPosition:0},0).wait(1).to({regX:300,regY:350,scaleX:0.7201,scaleY:0.7201,x:133.9,y:165.75},0).wait(1).to({scaleX:0.7205,scaleY:0.7205,x:133.95,y:165.7},0).wait(1).to({scaleX:0.7211,scaleY:0.7211,x:134,y:165.75},0).wait(1).to({scaleX:0.7221,scaleY:0.7221,x:134.05,y:165.8},0).wait(1).to({scaleX:0.7235,scaleY:0.7235,x:134.15,y:165.85},0).wait(1).to({scaleX:0.7253,scaleY:0.7253,x:134.25,y:165.95},0).wait(1).to({scaleX:0.7276,scaleY:0.7276,x:134.45,y:166.05},0).wait(1).to({scaleX:0.7305,scaleY:0.7305,x:134.6,y:166.15},0).wait(1).to({scaleX:0.734,scaleY:0.734,x:134.85,y:166.35},0).wait(1).to({scaleX:0.7382,scaleY:0.7382,x:135.1,y:166.5},0).wait(1).to({scaleX:0.7431,scaleY:0.7431,x:135.45,y:166.75},0).wait(1).to({scaleX:0.7487,scaleY:0.7487,x:135.75,y:167},0).wait(1).to({scaleX:0.7548,scaleY:0.7548,x:136.2,y:167.25},0).wait(1).to({scaleX:0.7609,scaleY:0.7609,x:136.55,y:167.5},0).wait(1).to({scaleX:0.7667,scaleY:0.7667,x:136.95,y:167.75},0).wait(1).to({scaleX:0.772,scaleY:0.772,x:137.3,y:168},0).wait(1).to({scaleX:0.7765,scaleY:0.7765,x:137.6,y:168.2},0).wait(1).to({scaleX:0.7802,scaleY:0.7802,x:137.85,y:168.35},0).wait(1).to({scaleX:0.7832,scaleY:0.7832,x:138.05,y:168.5},0).wait(1).to({scaleX:0.7855,scaleY:0.7855,x:138.2,y:168.65},0).wait(1).to({scaleX:0.7873,scaleY:0.7873,x:138.3,y:168.7},0).wait(1).to({scaleX:0.7885,scaleY:0.7885,x:138.4,y:168.75},0).wait(1).to({scaleX:0.7894,scaleY:0.7894,x:138.45},0).wait(1).to({scaleX:0.7898,scaleY:0.7898,y:168.8},0).wait(1).to({regX:264.4,regY:297.5,scaleX:0.79,scaleY:0.79,x:110.35,y:127.45},0).wait(197).to({startPosition:0},0).wait(182).to({regX:264,regY:297.6,scaleX:0.45,scaleY:0.45,x:93.1,y:130.25},0).to({_off:true},153).wait(69));

	// SP_btn_window
	this.toggle_btn = new lib.btn_window();
	this.toggle_btn.name = "toggle_btn";
	this.toggle_btn.parent = this;
	this.toggle_btn.setTransform(200,200);

	this.timeline.addTween(cjs.Tween.get(this.toggle_btn).to({_off:true},1326).wait(81));

	// btn
	this.stage_btn = new lib.button();
	this.stage_btn.name = "stage_btn";
	this.stage_btn.parent = this;
	this.stage_btn.setTransform(120,155);

	this.timeline.addTween(cjs.Tween.get(this.stage_btn).to({_off:true},1338).wait(64).to({_off:false},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-286,-720,971,1383);
// library properties:
lib.properties = {
	id: '_413_3',
	width: 240,
	height: 310,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg", id:"_413_3_bg"},
		{src:"images/book1.png", id:"_413_3_book1"},
		{src:"images/book2.png", id:"_413_3_book2"},
		{src:"images/book4.png", id:"_413_3_book4"},
		{src:"images/book5.png", id:"_413_3_book5"},
		{src:"images/ch_base.png", id:"_413_3_ch_base"},
		{src:"images/ch_face2.png", id:"_413_3_ch_face2"},
		{src:"images/ch_face3.png", id:"_413_3_ch_face3"},
		{src:"images/ch_face4.png", id:"_413_3_ch_face4"},
		{src:"images/ch_face5.png", id:"_413_3_ch_face5"},
		{src:"images/ch_face6.png", id:"_413_3_ch_face6"},
		{src:"images/ch_face7.png", id:"_413_3_ch_face7"},
		{src:"images/finish.jpg", id:"_413_3_finish"},
		{src:"images/finish_blur.jpg", id:"_413_3_finish_blur"},
		{src:"images/hamon_03_1.png", id:"_413_3_hamon_03_1"},
		{src:"images/sun_light.png", id:"_413_3_sun_light"},
		{src:"images/tie_fp.png", id:"_413_3_tie_fp"},
		{src:"images/tie_sp.png", id:"_413_3_tie_sp"},
		{src:"images/wave_ukiwa.png", id:"_413_3_wave_ukiwa"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['_413_3'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
