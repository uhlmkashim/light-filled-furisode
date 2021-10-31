(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img._417_2_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,900,1128);


(lib.book = function() {
	this.initialize(img._417_2_book);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1116,500);


(lib.ch_base = function() {
	this.initialize(img._417_2_ch_base);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,900,1128);


(lib.ch_face12 = function() {
	this.initialize(img._417_2_ch_face12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,292,292);


(lib.ch_face3 = function() {
	this.initialize(img._417_2_ch_face3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,292,292);


(lib.ch_face4 = function() {
	this.initialize(img._417_2_ch_face4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,292,292);


(lib.ch_face5 = function() {
	this.initialize(img._417_2_ch_face5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,292,292);


(lib.ch_face6 = function() {
	this.initialize(img._417_2_ch_face6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,292,292);


(lib.ch_face8 = function() {
	this.initialize(img._417_2_ch_face8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,292,292);


(lib.ch_face9 = function() {
	this.initialize(img._417_2_ch_face9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,292,292);


(lib.ch_hair1 = function() {
	this.initialize(img._417_2_ch_hair1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,104);


(lib.ch_hair2 = function() {
	this.initialize(img._417_2_ch_hair2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,104);


(lib.ch_hair3 = function() {
	this.initialize(img._417_2_ch_hair3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,104);


(lib.finish = function() {
	this.initialize(img._417_2_finish);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,620);


(lib.finish_blur = function() {
	this.initialize(img._417_2_finish_blur);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,620);


(lib.leef_a = function() {
	this.initialize(img._417_2_leef_a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,92);


(lib.leef_b = function() {
	this.initialize(img._417_2_leef_b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,136);


(lib.leef_d = function() {
	this.initialize(img._417_2_leef_d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,152);


(lib.leef_e = function() {
	this.initialize(img._417_2_leef_e);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,68);


(lib.leef_f = function() {
	this.initialize(img._417_2_leef_f);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,160);


(lib.leef_g = function() {
	this.initialize(img._417_2_leef_g);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,64);


(lib.leef_l = function() {
	this.initialize(img._417_2_leef_l);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,140);


(lib.sun_light = function() {
	this.initialize(img._417_2_sun_light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,284);


(lib.tie_fp = function() {
	this.initialize(img._417_2_tie_fp);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,32);


(lib.tie_sp = function() {
	this.initialize(img._417_2_tie_sp);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,64);// helper functions:

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


(lib.hair_n = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.ch_hair3();
	this.instance.parent = this;
	this.instance.setTransform(-40,-26,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hair_n, new cjs.Rectangle(-40,-26,80,52), null);


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
	this.shape.graphics.f("rgba(0,0,0,0.702)").s().p("AxJG9QgmAAgUgRQARAHAZAAMAiNAAAQBOAAAChLIAAAEQAABRhRAAgAl8mFQgTgmgJgRIAFAGQAIALAbA3QALAVALAQQgTgUgPgig");
	this.shape.setTransform(118.95,47.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.463)").s().p("AxEHIQg1AAgUghIAIAGQAUAYAtAAMAh8AAAQBUAAAAhTIAAoyQAAgQgDgNIgDgQQAIASAAAbIAAIyQAABWhWAAgAlJk9IAAAAQgQgUgQgeQgag4gJgLQgGgIgHgGIgBgCIgFgFQAMAIAJAMQAJAKAbA5QAUAoAVAUIgMgJg");
	this.shape_1.setTransform(118.45,47.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.58)").s().p("AxGHDQguAAgUgZIAHAFQAVASAmAAMAh7AAAQBSAAgBhRIAAgFIAAo+IAAgMQADAMAAAQIAAIzQAABThUAAgAlYlMQgLgQgKgUQgbg4gIgKIgGgHIgFgJQAHAGAFAIQAJALAbA4QAPAeAQATIgMgMg");
	this.shape_2.setTransform(118.7,47.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.231)").s().p("AxAHRQhGAAgQg2IAGAKQAUApA8AAMAh8AAAQBYAAAAhYIAAoyQAAglgOgVIgIgMQAZAWAAAwIAAIyQAABbhbAAgAkskpIgIgGQgXgTgVgrQgbg5gJgLQgNgRgQgIIgHgGQAVAIARAWQAJAKAbA5QAVArAWATQAKAIALAGIgOgGg");
	this.shape_3.setTransform(118.05,47.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.349)").s().p("AxCHNQg8AAgUgqIAHAHQAUAgA1AAMAh8AAAQBWAAAAhWIAAoyQAAgagIgSIgEgOQAOAWAAAkIAAIyQAABZhYAAgAk7kyQgVgUgUgoQgbg4gJgLQgJgMgMgHIgGgIQAQAJANARQAJAKAbA5QAVArAXATIAIAGIgNgHg");
	this.shape_4.setTransform(118.25,47.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.114)").s().p("Aw+HVQhRAAgLhGQACAHADAHQARA1BGAAMAh7AAAQBbAAAAhbIAAoyQABgvgZgXQgFgHgHgEQAnAVAAA8IAAIyQAABeheAAgAkckiQgMgGgJgIQgXgTgUgqQgcg5gIgLQgRgVgWgIIgJgGQAdAHAVAbQAJALAbA5QAVAqAWASQAQAPAYAGIgVgFg");
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


(lib.gr_bubble_parts = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(252,194,242,0)","rgba(255,255,255,0.6)","rgba(255,196,238,0)"],[0.251,0.855,0.882],0,0,0,0,0,70.4).s().p("AnuHvQjNjMAAkjQAAkiDNjMQDMjNEiAAQEjAADMDNQDNDMAAEiQAAEjjNDMQjMDNkjAAQkiAAjMjNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.gr_bubble_parts, new cjs.Rectangle(-70,-70,140,140), null);


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


(lib.overlay_black = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AyvYOMAAAgwbMAlfAAAMAAAAwbg");
	this.shape.setTransform(1,0,1.0083,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.overlay_black, new cjs.Rectangle(-120,-155,242,310), null);


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


(lib.leef_l_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.leef_l();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.leef_l_1, new cjs.Rectangle(0,0,40,70), null);


(lib.leef_g_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.leef_g();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.leef_g_1, new cjs.Rectangle(0,0,70,32), null);


(lib.leef_f_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.leef_f();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.leef_f_1, new cjs.Rectangle(0,0,26,80), null);


(lib.leef_e_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.leef_e();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.leef_e_1, new cjs.Rectangle(0,0,70,34), null);


(lib.leef_d_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.leef_d();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.leef_d_1, new cjs.Rectangle(0,0,44,76), null);


(lib.leef_b_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.leef_b();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.leef_b_1, new cjs.Rectangle(0,0,72,68), null);


(lib.leef_a_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.leef_a();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.leef_a_1, new cjs.Rectangle(0,0,72,46), null);


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
	this.shape.graphics.f().s("#FF8C00").ss(1.5,1,1).p("ABLjjIgjFTIhPAAIgjlTgAArDkIhVAAIAAhHIBVAAg");
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

}).prototype = getMCSymbolPrototype(lib.character1_face_eyeclose, new cjs.Rectangle(0,0,146,146), null);


(lib.character1_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.instance = new lib.ch_base();
	this.instance.parent = this;
	this.instance.setTransform(-120,-396,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.character1_base, new cjs.Rectangle(-120,-396,450,564), null);


(lib.ch_hair = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11));

	// face
	this.instance = new lib.ch_hair3();
	this.instance.parent = this;

	this.instance_1 = new lib.ch_hair1();
	this.instance_1.parent = this;

	this.instance_2 = new lib.ch_hair2();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},3).wait(2).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).wait(2).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,104);


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


(lib.book_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.book();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1116,500);


(lib.bg_zoom_half = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bg_image
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,450,564);


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


(lib.wind_inner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* gotoAndPlay( random( 4 ) + 2 );
		*/
		
		this.gotoAndPlay(Math.floor(Math.random() * 4 + 1));
	}
	this.frame_5 = function() {
		/* gotoAndPlay( 2 );
		*/
		
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(1));

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQAKIAEgSIASgGIALAOIgOAPg");
	this.shape.setTransform(-0.125,-0.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgBgHIAUgLIgJAaIgcAKg");
	this.shape_1.setTransform(-0.45,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKAGIgJgYIAdAMIAKAag");
	this.shape_2.setTransform(-0.35,-0.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRAAIASgKIARACIgPATg");
	this.shape_3.setTransform(-0.35,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.3,-2.2,4,3.9000000000000004);


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
	this.shape.graphics.f("#333333").s().p("AA2BJIAAgIIhqAAIAAAIIgRAAIAAiRICLAAIAACRgAg0AzIBqAAIAAhtIhqAAgAAgAuIgJgGQgGgEgGgGQgGgFgEgHIAAAdIgQAAIAAgaQgFAIgFAFQgGAFgFACIgEADIgKgPIADAAIAGgCIAIgEIAJgGIgPAAIAAgdIBOAAIAAAcIAHAHIgGAFIgHACIAGADIAGACIACABIgKAMgAASAVIAEADIAFgCIAFgCIAEgDIgWAAIAEAEgAgXAHIAtAAIAAgJIgtAAgAgvgSIAAgLIAoAAIAAgIIgfAAIAAgLIAfAAIAAgGIAPAAIAAAGIAfAAIAAALIgfAAIAAAIIAoAAIAAALg");
	this.shape.setTransform(48,0.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAxA/IgGgKIgaAFIgiAFIgtAHIgFgRIAMgBIALgBIAOgaIAKgZIAIgaIARAIQgFASgIARQgHAQgJAQIAWgEIAUgDIARgFIgLgPIgEgFIAOgJIAEAFIAJANIAMARIAMAUIgQAKIgGgKgAhKgMQAKgHAJgKQAJgJAHgMQAHgLADgLIARAGQgFAMgHANQgIAMgIALQgJAMgKAGgAAogVQgJgMgGgLQgHgLgFgLIAQgGIAKATQAGAKAJAJQAJAKAMAJIgNAPQgMgLgKgKg");
	this.shape_1.setTransform(32.025,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AhEBDIANggIALgjIAJgiIghAAIAAgPIAjAAIADgMIABgJIASABIgEAUIApAAIAAAPIgsAAIgKAlQgFATgGASIgLAggAAdBGIgMgCQgJgBgHgDQgFgEgEgGQgDgFAAgGIABgGIADgHIAPAEIgDADIgBAEQAAADACACIAHAFIAIACIAIABIAJAAIAOAAIAQgEIABASIgOACIgNABIgNgBgAAwgEIgSgBIgOABIgNADIgCgRIASgCIARgBIAQABIAQACIgBARIgTgDg");
	this.shape_2.setTransform(16.025,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgnBIIAAgRIAAgTIAAgLIAAgLIgLAXIgNAYIgOgLIAPgXIAOgXIAJgUIAAgDIgeAAIAAgPIAfgBIABgTIAAgRIASABIgCAQIgBATIgBAUIASgRQAHgIAIgFQAJgFAIAAIACAAQAHAAAEADQAFACACAFIACAIIABAGIgBAOIgBAQIgCAQIgBAMQAAAGACADQACAEAFAAIABAAQAEAAAGgDIALgGIACASQgHAEgIACQgIACgGAAQgEAAgFgCQgFgCgDgFQgEgGAAgKIAAgBIABgNIABgSIACgQIABgMIAAgBQAAgFgCgCQgCgDgEAAIgBAAIgBAAQgFABgIAGIgQAPIgRASIAAALIAAAcIABAbg");
	this.shape_3.setTransform(-0.025,0.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgOBMIAAhPIBOAAIAAA5QAAAJgDAEQgDAFgGABIgPACIgGgPIALgBIAFgBQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgEIgvAAIAAAagAABAmIAvAAIAAgJIgvAAgAABASIAvAAIAAgKIgvAAgAhIBEIAAiGIAuAAIAAB3IgeAAIAAAPgAg4AmIANAAIAAgmIgNAAgAg4gPIANAAIAAgkIgNAAgAgWgLIAAgNIAmAAIAAgKIgeAAIAAgLIAeAAIAAgIIgiAAIAAgMIAiAAIAAgKIARAAIAAAKIAlAAIAAAMIglAAIAAAIIAgAAIAAALIggAAIAAAKIAoAAIAAANg");
	this.shape_4.setTransform(-15.8,0.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AAUA5IgUgPIgWgOIgSgMQgHgEgEgGQgDgEAAgFQAAgEADgFQADgDAGgFIAQgKIAWgNIAVgQQALgHAHgGIAOAOIgUAOIgWANIgSALIgQAKIgGAEIgCADIACADIAFADIAUAMIAVAPIAWAPIAUAOIgRAOIgSgQg");
	this.shape_5.setTransform(-32.175,0.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgaBFQgPAAgJgEQgJgFgEgGQgDgHAAgGQAAgKAFgGQAGgHAJgDQAKgDALAAIABAAIAJABIAKABIgBgTIAAgXIgBgVIgBgTIARAAIAAAfIA3AAIAAAQIg3AAIAAAVIAAASQANADAOAJQAPAIAQAMIgKAQQgLgKgMgIQgMgIgMgGIAAACQAAAKgEAGQgDAIgHAFQgIAEgKAAgAgsAeQgGAEAAAGQAAAHAHAEQAHADALAAIACAAQAIAAAFgFQAEgHABgJIAAgEIgKgCIgJgBQgNAAgHAEg");
	this.shape_6.setTransform(-47.9,0.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

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


(lib.mc_bubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(Math.floor(Math.random() * 20 + 1));
		this.scaleX = this.scaleY = Math.random();
		this.visible = false;
	}
	this.frame_21 = function() {
		this.visible = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21).wait(25));

	// i
	this.instance = new lib.gr_bubble_parts("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.2,0.2,89.9956);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(20).to({_off:false,scaleX:0.9,scaleY:0.9,rotation:89.9874,alpha:0.1016},0).to({scaleX:1,scaleY:1,rotation:89.9974,x:-20,alpha:1},12).to({scaleX:0.95,scaleY:0.95,rotation:-89.9991,x:-40,alpha:0.1016},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.5,-70,169.5,140);


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


(lib.leaf_move_core2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// leef_g
	this.instance = new lib.leef_g_1();
	this.instance.parent = this;
	this.instance.setTransform(-2.8,14.95,0.7558,0.4528,25.2282,0,0,34.8,15.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	// leef_l
	this.instance_1 = new lib.leef_l_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(5.05,17.1,0.4986,0.5367,0,-44.9436,-54.6631,23.9,39.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// leef_f
	this.instance_2 = new lib.leef_f_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-3.25,17.1,0.5654,0.5688,0,-51.3316,-44.9989,13,39.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// leef_b
	this.instance_3 = new lib.leef_b_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(4.7,12.05,0.5385,0.5941,0,87.1574,68.2556,35.8,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.7,-6.8,61.5,45.199999999999996);


(lib.leaf_move_core1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// leef_g
	this.instance = new lib.leef_g_1();
	this.instance.parent = this;
	this.instance.setTransform(51.75,11.85,0.5717,0.3068,0,-113.7255,-125.9517,34.7,15.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	// leef_a
	this.instance_1 = new lib.leef_a_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(50.9,15.75,0.4379,0.5697,0,109.3017,90.3893,35.9,22.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// leef_e
	this.instance_2 = new lib.leef_e_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(49.2,13.9,0.769,0.7163,0,-137.4648,-105.0006,34.9,17.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// leef_d
	this.instance_3 = new lib.leef_d_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(46.9,14.5,0.4515,0.6407,0,-24.8652,-14.998,22.4,37.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(27,-21,41.099999999999994,69.9);


(lib.laugh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(1));

	// mark
	this.instance = new lib.laugh_parts_a("single",0);
	this.instance.parent = this;
	this.instance.setTransform(-30.4,20.5,1.0742,0.9571,0,0,0,-20.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1,x:-28.9},0).wait(3).to({regX:-20.2,scaleX:0.9691,scaleY:1.0171,x:-28.2},0).wait(1).to({regX:-18.7,scaleX:1.1342,scaleY:0.975,x:-29.7,y:22.85,startPosition:1},0).wait(1).to({scaleX:1,scaleY:1,x:-27.2},0).wait(3).to({scaleX:0.9463,scaleY:1.0417,x:-26.2},0).wait(1).to({regX:-20.3,scaleX:1.0742,scaleY:0.9571,x:-30.4,y:20.5,startPosition:0},0).wait(1).to({scaleX:1,scaleY:1,x:-28.9},0).wait(3).to({regX:-20.2,scaleX:0.9691,scaleY:1.0171,x:-28.2},0).wait(1).to({regX:-18.7,scaleX:1.1342,scaleY:0.975,x:-29.7,y:22.85,startPosition:1},0).wait(1).to({scaleX:1,scaleY:1,x:-27.2},0).wait(3).to({scaleX:0.9463,scaleY:1.0417,x:-26.2},0).wait(1).to({regX:-20.3,scaleX:1.0742,scaleY:0.9571,x:-30.4,y:20.5,startPosition:0},0).wait(1).to({scaleX:1,scaleY:1,x:-28.9},0).to({_off:true},3).wait(1));

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
	mask.graphics.p("AszQ9MAAAgh5IZnAAMAAAAh5g");
	mask.setTransform(63.05,36.55);

	// face
	this.instance_2 = new lib.ch_face4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.instance_3 = new lib.ch_face3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,0.5,0.5);

	this.instance_4 = new lib.ch_face9();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,0.5,0.5);

	this.instance_5 = new lib.ch_face5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,0,0.5,0.5);

	this.instance_6 = new lib.ch_face6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,0,0.5,0.5);

	this.instance_7 = new lib.ch_face12();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,0,0.5,0.5);

	this.instance_8 = new lib.ch_face8();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},1).to({state:[]},1).wait(8));

	// body
	this.b = new lib.character1_base();
	this.b.name = "b";
	this.b.parent = this;
	this.b.setTransform(-19,302);

	var maskedShapeInstanceList = [this.b];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.b).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.9,-71.9,164,217);


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


(lib.wind3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();
		_visible = false;
		gotoAndPlay( random( 25 ) );
		 */
	}
	this.frame_25 = function() {
		/* _visible = true;*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(25).call(this.frame_25).wait(40));

	// レイヤー_1
	this.instance = new lib.wind_inner();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(26).to({regX:-0.4,regY:-0.3,x:93.75,y:-5.8},0).wait(1).to({x:156.35,y:14.9},0).wait(1).to({x:199.9,y:21.3},0).wait(1).to({x:236.75,y:21.25},0).wait(1).to({x:264.75,y:22.8},0).wait(1).to({x:291.55,y:26.3},0).wait(1).to({x:320.6,y:33.2},0).wait(1).to({x:344.3,y:39.6},0).wait(1).to({x:363.15,y:42.95},0).wait(1).to({x:382.85,y:43.75},0).wait(1).to({x:405.3,y:42.45},0).wait(1).to({x:425.2,y:40.1},0).wait(1).to({x:441.55,y:37.65},0).wait(1).to({x:455.55,y:36.05},0).wait(1).to({x:468.2,y:35.25},0).wait(1).to({x:480.25,y:35.1},0).wait(1).to({x:491.65,y:35.5},0).wait(1).to({x:502.4,y:36.45},0).wait(1).to({x:512.45,y:37.75},0).wait(1).to({x:521.85,y:39.45},0).wait(1).to({x:530.55,y:41.45},0).wait(1).to({x:538.55,y:43.6},0).wait(1).to({x:545.9,y:45.9},0).wait(1).to({x:552.6,y:48.25},0).wait(1).to({x:559.15,y:50.75},0).wait(1).to({x:565.9,y:53.45},0).wait(1).to({x:571.6,y:55.85},0).wait(1).to({x:576.35,y:57.9},0).wait(1).to({x:580.35,y:59.65},0).wait(1).to({x:583.65,y:61.1},0).wait(1).to({x:586.25,y:62.15},0).wait(1).to({x:588.25,y:62.8},0).wait(1).to({x:589.75,y:63.3},0).wait(1).to({x:590.7,y:63.55},0).wait(1).to({regX:0,regY:0,x:591.45,y:64},0).wait(1).to({regX:-0.4,regY:-0.3,x:592.9,y:64.15,alpha:0.5695},0).wait(1).to({x:594.2,y:64.45,alpha:0.2566},0).wait(1).to({x:595,y:64.6,alpha:0.0651},0).wait(1).to({regX:0,regY:0,x:595.7,y:65.1,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.8,-7.1,599.0999999999999,73.6);


(lib.wind2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();
		_visible = false;
		gotoAndPlay( random( 10 ) );
		 */
		 
		 this.stop();
		 this.visible = false;
		 this.gotoAndPlay(Math.floor(Math.random() * 9));
	}
	this.frame_10 = function() {
		/* _visible = true;*/
		
		this.visible = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(26));

	// レイヤー_1
	this.instance = new lib.wind_inner();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({regX:-0.4,regY:-0.3,x:133.75,y:9.3},0).wait(1).to({x:202.7,y:21.1},0).wait(1).to({x:252.8,y:22.85},0).wait(1).to({x:295.4,y:30.4},0).wait(1).to({x:333.85,y:40.9},0).wait(1).to({x:364,y:43.75},0).wait(1).to({x:397.4,y:41.15},0).wait(1).to({x:424.7,y:37.1},0).wait(1).to({x:445.9,y:35.25},0).wait(1).to({x:464.45,y:35.3},0).wait(1).to({x:481.4,y:36.75},0).wait(1).to({x:496.6,y:39.3},0).wait(1).to({x:510,y:42.65},0).wait(1).to({x:521.65,y:46.4},0).wait(1).to({x:531.75,y:50.3},0).wait(1).to({x:541.6,y:54.45},0).wait(1).to({x:549.45,y:58},0).wait(1).to({x:555.2,y:60.7},0).wait(1).to({x:559.1,y:62.3},0).wait(1).to({x:561.45,y:63.1},0).wait(1).to({regX:0,regY:0,x:562.7,y:63.7},0).wait(1).to({regX:-0.4,regY:-0.3,x:566.65,y:64.5,alpha:0.5716},0).wait(1).to({x:569.45,y:64.9,alpha:0.2588},0).wait(1).to({x:571.35,y:65,alpha:0.0661},0).wait(1).to({regX:0,regY:0,x:572.5,y:65.7,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.8,-1.6,575.9,68.69999999999999);


(lib.wind1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();
		_visible = false;
		gotoAndPlay( random( 30 ) );
		 */
	}
	this.frame_30 = function() {
		/* _visible = true;*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(30).call(this.frame_30).wait(25));

	// レイヤー_1
	this.instance = new lib.wind_inner();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(31).to({regX:-0.4,regY:-0.3,x:129.95,y:11.05},0).wait(1).to({x:196.9,y:21.05},0).wait(1).to({x:244.5,y:23.6},0).wait(1).to({x:287.9,y:33.35},0).wait(1).to({x:322.4,y:42.5},0).wait(1).to({x:353.4,y:43.3},0).wait(1).to({x:385.95,y:39.3},0).wait(1).to({x:409.9,y:35.9},0).wait(1).to({x:429.45,y:35.1},0).wait(1).to({x:447.25,y:36.1},0).wait(1).to({x:463.2,y:38.5},0).wait(1).to({x:477.3,y:41.95},0).wait(1).to({x:489.45,y:45.95},0).wait(1).to({x:499.9,y:50.2},0).wait(1).to({x:510,y:54.75},0).wait(1).to({x:518.05,y:58.65},0).wait(1).to({x:523.85,y:61.45},0).wait(1).to({x:527.8,y:63},0).wait(1).to({x:530.15,y:63.8},0).wait(1).to({regX:0,regY:0,x:531.45,y:64.35},0).wait(1).to({regX:-0.4,regY:-0.3,x:535.65,y:64.9,alpha:0.5718},0).wait(1).to({x:538.45,y:64.95,alpha:0.259},0).wait(1).to({x:540.4,y:64.6,alpha:0.0662},0).wait(1).to({regX:0,regY:0,x:541.5,y:64.7,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.8,-1.6,544.9,68.19999999999999);


(lib.wind_container = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.wind3();
	this.instance.parent = this;
	this.instance.setTransform(-5.65,-23.75,0.6077,0.6077);

	this.instance_1 = new lib.wind1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(31.65,17.4);

	this.instance_2 = new lib.wind1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(7.85,-49.35,0.6897,0.6897);

	this.instance_3 = new lib.wind2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(18.25,24.65,0.542,0.542);

	this.instance_4 = new lib.wind2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(53.55,-86,0.6954,0.6954);

	this.instance_5 = new lib.wind1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(38.65,57.75);

	this.instance_6 = new lib.wind2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(28.35,69.5,0.6336,0.6336);

	this.instance_7 = new lib.wind1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(55.1,38.75,0.6491,0.6491);

	this.instance_8 = new lib.wind1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(29.75,-52.5,0.6197,0.6197);

	this.instance_9 = new lib.wind1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(86.75,-121.75,0.4924,0.4924);

	this.instance_10 = new lib.wind1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(11.7,-17.35,0.6491,0.6491);

	this.instance_11 = new lib.wind1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(27.4,-1.85,0.6123,0.6123);

	this.instance_12 = new lib.wind2();
	this.instance_12.parent = this;
	this.instance_12.setTransform(62.25,-116.25,0.4924,0.4924);

	this.instance_13 = new lib.wind1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(68.9,-96.3,0.5939,0.5939);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.wind_container, new cjs.Rectangle(-6.7,-122.5,94.3,192.9), null);


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


(lib.mc_kirakira = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// kira
	this.instance = new lib.gｌitter_rise_core();
	this.instance.parent = this;
	this.instance.setTransform(54.65,-48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// kira
	this.instance_1 = new lib.gｌitter_rise_core();
	this.instance_1.parent = this;
	this.instance_1.setTransform(63.4,33.75);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// kira
	this.instance_2 = new lib.gｌitter_rise_core();
	this.instance_2.parent = this;
	this.instance_2.setTransform(156.15,-67.25,1.2332,1.2332);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// kira
	this.instance_3 = new lib.gｌitter_rise_core();
	this.instance_3.parent = this;
	this.instance_3.setTransform(54.65,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// kira
	this.instance_4 = new lib.gｌitter_rise_core();
	this.instance_4.parent = this;
	this.instance_4.setTransform(15.2,-31.8,0.6222,0.6222,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// kira
	this.instance_5 = new lib.gｌitter_rise_core();
	this.instance_5.parent = this;
	this.instance_5.setTransform(160.9,-9.25);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// kira
	this.instance_6 = new lib.gｌitter_rise_core();
	this.instance_6.parent = this;
	this.instance_6.setTransform(107.4,-22,0.715,0.715);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// kira
	this.instance_7 = new lib.gｌitter_rise_core();
	this.instance_7.parent = this;
	this.instance_7.setTransform(116.4,49.25);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// kira
	this.instance_8 = new lib.gｌitter_rise_core();
	this.instance_8.parent = this;
	this.instance_8.setTransform(139.65,-31.75,0.715,0.715);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// kira
	this.instance_9 = new lib.gｌitter_rise_core();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-0.6,38.25);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// kira
	this.instance_10 = new lib.gｌitter_rise_core();
	this.instance_10.parent = this;
	this.instance_10.setTransform(90.2,0.55,0.5111,0.5111,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1));

	// kira
	this.instance_11 = new lib.gｌitter_rise_core();
	this.instance_11.parent = this;
	this.instance_11.setTransform(29,-62.05,0.5333,0.5333,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1));

	// kira
	this.instance_12 = new lib.gｌitter_rise_core();
	this.instance_12.parent = this;
	this.instance_12.setTransform(162.65,35.05,0.6222,0.6222,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// kira
	this.instance_13 = new lib.gｌitter_rise_core();
	this.instance_13.parent = this;
	this.instance_13.setTransform(177.75,-41.35,0.5333,0.5333,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// kira
	this.instance_14 = new lib.gｌitter_rise_core();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-8.15,-11.3,0.5556,0.5556,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

	// kira
	this.instance_15 = new lib.gｌitter_rise_core();
	this.instance_15.parent = this;
	this.instance_15.setTransform(9.65,11.25);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-81.1,196.3,141.6);


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
	this.shape.graphics.f("rgba(255,255,255,0.702)").s().p("AxGHNQhQAAAAhQIAAr5QAAhQBQAAIJ+AAQAkAAAYAeQAIALAbA4QAWAuAYAUQAkAeA5gBIUlAAQBQAAAABQIAAI5QAABQhQAAg");
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
	this.shape.graphics.f("#000000").s().p("AgvAzIADAAQAWAAAPgFQAOgEAIgHQAIgIAEgIQADgJAAgHIABgMQAAgLgCgJQgBgJgEgFQgEgGgIAAIgDAAIgFACQgEADgGAIQgGAHgGALQgFAKgEALQgEAMgBANIgVgCIAAgKIAAgLIAAgaIADgaIADgYIAXABIgDARIgEAPIgBAMQAHgRAIgJQAIgKAIgDQAHgDAIAAQAGAAAHACQAHACAGAGQAGAGAFAMQADAMAAAUIAAAIIAAAIQgBAKgGAMQgEAMgLAIQgLAKgQAGQgQAGgYABg");
	this.shape.setTransform(56.2,12);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhKBAQAHgMAGgNQAHgOAEgOIAJgcIgOACIgOABIgBgWIAjgCIACgRIACgQIAYADIgCAOIgDAQIAHgBIAFAAIAFAAQAJABAGAEQAFAEADAHQACAGAAAGIAAANQAAAhgIARQgJASgSABIgBAAIgCAAIgKgBIgJAAIgIgYIAOACIAMABIACAAQACAAADgCQADgCACgFQADgFACgJQABgIAAgPIAAgMQgBgFgCgCQgCgCgEgBIgCAAIgGAAIgJAAQgEASgGAQQgGARgHAPQgGAPgGAJgAAsgOQgHgSgNgOIAUgIQAHAKAHALQAHAKAEANQAEAMACAMIgVAKQgDgVgHgRg");
	this.shape_1.setTransform(40.25,11.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgEA4QARgBALgFQALgEAFgFQAFgGADgFQABgGAAgEIAAgBQAAgIgFgHQgEgFgIgDQgIANgJALQgIANgIAIIAFAIIgRALIgCgCIgCgCQgIAHgGACQgHACgGAAQgHAAgFgDQgGgDgEgFQgEgGAAgJIAAgBQABgLAEgKQAFgMAKgHQAIgKANgFIAAgMIAAgLIgkAAIAAgUIAmAAIABgQIAXAAIgCAQIBBAAIAAAUIhEAAIgBAHIAAAIIAJgBIAJAAIAFAAIAEAAIADgFIACgFIAVAGIgBAEIgCAEQANAGAIAKQAIAJAAAPIAAABQABAHgDAJQgCAHgHAJQgHAHgMAGQgMAGgTADgAgrATQgFAJgBAJIAAACQAAAEACADQACABADAAIAEAAIAEgCIAKgHQgCgIgCgIIgBgSQgJAHgFAIgAgBgGIgJABIAAANIACANIAIgNIAKgPIgEAAIgHABg");
	this.shape_2.setTransform(24.1,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

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


(lib.mc_bubble_set = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// mc
	this.instance = new lib.mc_bubble();
	this.instance.parent = this;
	this.instance.setTransform(-115,116);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// mc
	this.instance_1 = new lib.mc_bubble();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-20,-107);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// mc
	this.instance_2 = new lib.mc_bubble();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-330,80);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// mc
	this.instance_3 = new lib.mc_bubble();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-44,74);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// mc
	this.instance_4 = new lib.mc_bubble();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-250,100);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// mc
	this.instance_5 = new lib.mc_bubble();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-89,-74);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// mc
	this.instance_6 = new lib.mc_bubble();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-300,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// mc
	this.instance_7 = new lib.mc_bubble();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-135,-107);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_bubble_set, new cjs.Rectangle(-344,-124,376.5,254), null);


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


(lib.leef_core = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* gotoAndStop(random(2)+1);*/
		
		this.gotoAndStop(Math.floor(Math.random() * 2));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// leaf_move_core2
	this.instance = new lib.leaf_move_core2();
	this.instance.parent = this;
	this.instance.setTransform(-0.1,10.65,1.1792,1.1792,0,0,0,-0.1,10.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// leaf_move_core1
	this.instance_1 = new lib.leaf_move_core1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(5.9,13.3,1.4971,1.4971,0,0,0,5.9,13.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-21.7,123.8,73.9);


(lib.leef_2_move_pattern = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.leef_core();
	this.instance.parent = this;
	this.instance.setTransform(-92.8,-8,1,1,-12.2117,0,0,59.8,47.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({regX:59.7,rotation:-5.9945,x:-160.65,y:-81.6},0).wait(1).to({regX:32,regY:14.3,scaleY:0.9994,rotation:-6.1954,x:-186.95,y:-115.45},0).wait(1).to({scaleY:0.9977,rotation:0,skewX:-6.7395,skewY:-6.8327,x:-174.35,y:-126.85},0).wait(1).to({scaleY:0.9952,skewX:-7.5595,skewY:-7.7552,x:-155.15,y:-143.55},0).wait(1).to({scaleY:0.9919,skewX:-8.6063,skewY:-8.9329,x:-129.95,y:-164.65},0).wait(1).to({scaleY:0.9881,skewX:-9.8428,skewY:-10.324,x:-99.6,y:-188.75},0).wait(1).to({scaleY:0.9837,skewX:-11.2401,skewY:-11.896,x:-64.8,y:-214.95},0).wait(1).to({scaleY:0.979,skewX:-12.775,skewY:-13.6228,x:-26.05,y:-242.4},0).wait(1).to({scaleY:0.9739,skewX:-14.4286,skewY:-15.4832,x:15.9,y:-270.2},0).wait(1).to({scaleY:0.9684,skewX:-16.1851,skewY:-17.4592,x:61,y:-298},0).wait(1).to({scaleY:0.9627,skewX:-18.031,skewY:-19.5359,x:109.8,y:-325.7},0).wait(1).to({scaleY:0.9567,skewX:-19.9546,skewY:-21.7001,x:162.15,y:-352.8},0).wait(1).to({scaleY:0.9505,skewX:-21.9459,skewY:-23.9403,x:217.7,y:-378.7},0).wait(1).to({scaleY:0.9442,skewX:-23.9957,skewY:-26.2464,x:274.55,y:-402.05},0).wait(1).to({scaleY:0.9377,skewX:-26.0957,skewY:-28.609,x:334.1,y:-423.35},0).wait(1).to({scaleY:0.931,skewX:-28.2385,skewY:-31.0197,x:396.65,y:-442.2},0).wait(1).to({scaleY:0.9243,skewX:-30.4169,skewY:-33.4705,x:462.05,y:-458.05},0).wait(1).to({scaleY:0.9174,skewX:-32.6242,skewY:-35.9538,x:528,y:-471.7},0).wait(1).to({scaleY:0.9105,skewX:-34.8541,skewY:-38.4625,x:590.65,y:-483.3},0).wait(1).to({scaleY:0.9036,skewX:-37.1001,skewY:-40.9894,x:655.75,y:-494},0).wait(1).to({scaleY:0.8966,skewX:-39.3561,skewY:-43.5273,x:723.65,y:-503.4},0).wait(1).to({scaleY:0.8896,skewX:-41.6154,skewY:-46.0692,x:791.7,y:-510.7},0).wait(1).to({scaleY:0.8826,skewX:-43.8716,skewY:-48.6074,x:857.25,y:-515.5},0).wait(1).to({scaleY:0.8756,skewX:-46.1175,skewY:-51.1342,x:924.2,y:-517.9},0).wait(1).to({scaleY:0.8687,skewX:-48.3456,skewY:-53.6409,x:992.25,y:-517.5},0).wait(1).to({scaleY:0.8619,skewX:-50.5476,skewY:-56.1182,x:1060.7,y:-513.7},0).wait(1).to({scaleY:0.8552,skewX:-52.7142,skewY:-58.5557,x:1115.3,y:-507.65},0).wait(1).to({scaleY:0.8486,skewX:-54.8347,skewY:-60.9413,x:1171.65,y:-498.35},0).wait(1).to({scaleY:0.8422,skewX:-56.8966,skewY:-63.261,x:1226.8,y:-485.85},0).wait(1).to({scaleY:0.836,skewX:-58.8848,skewY:-65.4979,x:1280.45,y:-469.75},0).wait(1).to({scaleY:0.8302,skewX:-60.7809,skewY:-67.631,x:1331.7,y:-450.05},0).wait(1).to({scaleY:0.8246,skewX:-62.5613,skewY:-69.6341,x:1379.45,y:-426.95},0).wait(1).to({scaleY:0.8196,skewX:-64.1952,skewY:-71.4722,x:1422.35,y:-401.4},0).wait(1).to({scaleY:0.8151,skewX:-65.6401,skewY:-73.0977,x:1459.05,y:-374.9},0).wait(1).to({scaleY:0.8114,skewX:-66.8347,skewY:-74.4418,x:1488,y:-350.35},0).wait(1).to({scaleY:0.8088,skewX:-67.6841,skewY:-75.3974,x:1507.65,y:-331.3},0).wait(1).to({regX:59.9,regY:47.3,scaleY:0.8077,skewX:-68.0249,skewY:-75.7808,x:1545.05,y:-338.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-189.1,-565.6,1741,560.8000000000001);


(lib.leef_1_move_pattern = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// grass2_core
	this.instance = new lib.leef_core();
	this.instance.parent = this;
	this.instance.setTransform(-120.6,-121.85,0.7999,0.7999,1.5631,0,0,59.9,47.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({regX:59.8,scaleX:0.7996,scaleY:0.7996,rotation:7.8065,x:57.8,y:-255.6},0).wait(1).to({regX:32,regY:14.3,scaleX:0.7997,scaleY:0.7995,rotation:7.7481,x:40.05,y:-283.25},0).wait(1).to({scaleY:0.7991,rotation:7.5827,x:42.3,y:-279.4},0).wait(1).to({scaleX:0.7996,scaleY:0.7985,rotation:0,skewX:7.323,skewY:7.2623,x:45.95,y:-273.2},0).wait(1).to({scaleY:0.7976,skewX:6.9794,skewY:6.8756,x:50.75,y:-265.15},0).wait(1).to({scaleY:0.7965,skewX:6.5607,skewY:6.4044,x:56.65,y:-255.5},0).wait(1).to({scaleY:0.7953,skewX:6.0744,skewY:5.8571,x:63.3,y:-244.8},0).wait(1).to({scaleY:0.794,skewX:5.5269,skewY:5.2408,x:71,y:-232.65},0).wait(1).to({scaleY:0.7925,skewX:4.9236,skewY:4.5618,x:79.7,y:-219.4},0).wait(1).to({scaleY:0.7908,skewX:4.2694,skewY:3.8255,x:89.35,y:-205.2},0).wait(1).to({scaleY:0.7891,skewX:3.5686,skewY:3.0367,x:99.85,y:-190.2},0).wait(1).to({scaleY:0.7872,skewX:2.8249,skewY:2.1997,x:111.3,y:-174.4},0).wait(1).to({scaleY:0.7853,skewX:2.0418,skewY:1.3182,x:123.6,y:-158.05},0).wait(1).to({scaleY:0.7832,skewX:1.2221,skewY:0.3957,x:136.7,y:-141.15},0).wait(1).to({scaleY:0.7811,skewX:0.3687,skewY:-0.5648,x:150.7,y:-123.95},0).wait(1).to({scaleX:0.7995,scaleY:0.7789,skewX:-0.5159,skewY:-1.5605,x:165.4,y:-106.3},0).wait(1).to({scaleY:0.7766,skewX:-1.4295,skewY:-2.5888,x:180.85,y:-88.55},0).wait(1).to({scaleY:0.7743,skewX:-2.3701,skewY:-3.6474,x:196.8,y:-70.95},0).wait(1).to({scaleY:0.7719,skewX:-3.3356,skewY:-4.7341,x:213.5,y:-53.15},0).wait(1).to({scaleY:0.7694,skewX:-4.3244,skewY:-5.8469,x:231,y:-35.3},0).wait(1).to({scaleY:0.7669,skewX:-5.3347,skewY:-6.9841,x:249.35,y:-17.35},0).wait(1).to({scaleY:0.7643,skewX:-6.3651,skewY:-8.1438,x:268.5,y:0.6},0).wait(1).to({scaleY:0.7617,skewX:-7.4141,skewY:-9.3244,x:288.55,y:18.35},0).wait(1).to({scaleY:0.759,skewX:-8.4802,skewY:-10.5244,x:309.4,y:36.1},0).wait(1).to({scaleX:0.7994,scaleY:0.7563,skewX:-9.5624,skewY:-11.7423,x:331,y:53.55},0).wait(1).to({scaleY:0.7536,skewX:-10.6592,skewY:-12.9768,x:353.4,y:70.7},0).wait(1).to({scaleY:0.7508,skewX:-11.7696,skewY:-14.2266,x:376.5,y:87.5},0).wait(1).to({scaleY:0.748,skewX:-12.8924,skewY:-15.4903,x:399.9,y:103.65},0).wait(1).to({scaleY:0.7452,skewX:-14.0266,skewY:-16.7668,x:423.9,y:119.25},0).wait(1).to({scaleY:0.7424,skewX:-15.171,skewY:-18.0549,x:448.65,y:134.4},0).wait(1).to({scaleY:0.7395,skewX:-16.3248,skewY:-19.3535,x:474.1,y:149},0).wait(1).to({scaleX:0.7993,scaleY:0.7366,skewX:-17.4869,skewY:-20.6615,x:500.25,y:163.05},0).wait(1).to({scaleY:0.7337,skewX:-18.6564,skewY:-21.9777,x:527.05,y:176.45},0).wait(1).to({scaleY:0.7307,skewX:-19.8322,skewY:-23.3011,x:554.5,y:189.1},0).wait(1).to({scaleY:0.7278,skewX:-21.0135,skewY:-24.6307,x:582.45,y:200.95},0).wait(1).to({scaleY:0.7248,skewX:-22.1994,skewY:-25.9654,x:610.9,y:212.05},0).wait(1).to({scaleY:0.7219,skewX:-23.3888,skewY:-27.3041,x:639.8,y:222.25},0).wait(1).to({scaleX:0.7992,scaleY:0.7189,skewX:-24.5809,skewY:-28.6458,x:668.85,y:231.9},0).wait(1).to({scaleY:0.7159,skewX:-25.7747,skewY:-29.9895,x:696.1,y:240.6},0).wait(1).to({scaleY:0.7129,skewX:-26.9693,skewY:-31.334,x:723.6,y:249.15},0).wait(1).to({scaleY:0.7099,skewX:-28.1636,skewY:-32.6782,x:751.35,y:257.35},0).wait(1).to({scaleY:0.707,skewX:-29.3567,skewY:-34.0211,x:779.3,y:265.25},0).wait(1).to({scaleY:0.704,skewX:-30.5476,skewY:-35.3614,x:807.4,y:272.85},0).wait(1).to({scaleY:0.701,skewX:-31.7351,skewY:-36.6979,x:835.75,y:280.15},0).wait(1).to({scaleX:0.7991,scaleY:0.6981,skewX:-32.9181,skewY:-38.0294,x:864.2,y:287.1},0).wait(1).to({scaleY:0.6951,skewX:-34.0955,skewY:-39.3546,x:892.8,y:293.65},0).wait(1).to({scaleY:0.6922,skewX:-35.2661,skewY:-40.6721,x:921.55,y:299.8},0).wait(1).to({scaleY:0.6893,skewX:-36.4285,skewY:-41.9804,x:950.3,y:305.55},0).wait(1).to({scaleY:0.6864,skewX:-37.5813,skewY:-43.2779,x:979.1,y:310.8},0).wait(1).to({scaleY:0.6836,skewX:-38.723,skewY:-44.563,x:1007.85,y:315.65},0).wait(1).to({scaleX:0.799,scaleY:0.6808,skewX:-39.8521,skewY:-45.8337,x:1036.55,y:319.95},0).wait(1).to({scaleY:0.678,skewX:-40.9668,skewY:-47.0883,x:1062.9,y:323.55},0).wait(1).to({scaleY:0.6753,skewX:-42.065,skewY:-48.3244,x:1088.85,y:326.7},0).wait(1).to({scaleY:0.6726,skewX:-43.1448,skewY:-49.5397,x:1114.6,y:329.4},0).wait(1).to({scaleY:0.6699,skewX:-44.2038,skewY:-50.7316,x:1140,y:331.65},0).wait(1).to({scaleY:0.6673,skewX:-45.2393,skewY:-51.897,x:1165.05,y:333.45},0).wait(1).to({scaleY:0.6648,skewX:-46.2484,skewY:-53.0328,x:1189.55,y:334.75},0).wait(1).to({scaleY:0.6624,skewX:-47.2278,skewY:-54.1351,x:1213.6,y:335.75},0).wait(1).to({scaleY:0.66,skewX:-48.1735,skewY:-55.1996,x:1236.95,y:336.15},0).wait(1).to({scaleX:0.7989,scaleY:0.6578,skewX:-49.0812,skewY:-56.2212,x:1259.4,y:336.2},0).wait(1).to({scaleY:0.6556,skewX:-49.9457,skewY:-57.1941,x:1281.05,y:335.9},0).wait(1).to({scaleY:0.6536,skewX:-50.7607,skewY:-58.1114,x:1301.5,y:335.25},0).wait(1).to({scaleY:0.6517,skewX:-51.5188,skewY:-58.9647,x:1320.6,y:334.3},0).wait(1).to({scaleY:0.65,skewX:-52.2109,skewY:-59.7436,x:1338.1,y:333.2},0).wait(1).to({scaleY:0.6484,skewX:-52.8256,skewY:-60.4355,x:1353.7,y:331.95},0).wait(1).to({scaleY:0.6471,skewX:-53.3485,skewY:-61.0241,x:1367.05,y:330.75},0).wait(1).to({scaleY:0.6461,skewX:-53.7607,skewY:-61.488,x:1377.55,y:329.7},0).wait(1).to({scaleY:0.6454,skewX:-54.0363,skewY:-61.7982,x:1384.6,y:328.85},0).wait(1).to({regX:59.9,regY:47.3,scaleY:0.6452,skewX:-54.1389,skewY:-61.9137,x:1414.9,y:321.45},0).to({_off:true},1).wait(54).to({_off:false,regX:59.8,regY:47,scaleX:0.7996,scaleY:0.7996,skewX:-112.3352,skewY:67.6648,x:51.95,y:-204.05},0).wait(1).to({regX:32,regY:14.3,scaleY:0.7995,skewX:-112.3457,skewY:67.6603,x:20.15,y:-213.7},0).wait(1).to({scaleY:0.7992,skewX:-112.3757,skewY:67.6476,x:22.7,y:-210.5},0).wait(1).to({scaleY:0.7986,skewX:-112.4229,skewY:67.6275,x:27.25,y:-205.05},0).wait(1).to({scaleY:0.7979,skewX:-112.4857,skewY:67.6008,x:33.2,y:-198},0).wait(1).to({scaleY:0.7971,skewX:-112.5626,skewY:67.5681,x:40.05,y:-190.1},0).wait(1).to({scaleY:0.796,skewX:-112.6522,skewY:67.53,x:47.55,y:-181.6},0).wait(1).to({scaleY:0.7949,skewX:-112.7534,skewY:67.487,x:55.45,y:-172.75},0).wait(1).to({scaleY:0.7936,skewX:-112.8652,skewY:67.4395,x:64.6,y:-162.6},0).wait(1).to({scaleY:0.7922,skewX:-112.9868,skewY:67.3878,x:74.7,y:-151.75},0).wait(1).to({scaleY:0.7907,skewX:-113.1174,skewY:67.3322,x:85.5,y:-140.25},0).wait(1).to({scaleY:0.7891,skewX:-113.2563,skewY:67.2732,x:97.05,y:-128.2},0).wait(1).to({scaleY:0.7874,skewX:-113.403,skewY:67.2108,x:109.25,y:-115.65},0).wait(1).to({scaleY:0.7857,skewX:-113.5567,skewY:67.1454,x:122.1,y:-102.75},0).wait(1).to({scaleY:0.7838,skewX:-113.7172,skewY:67.0772,x:135.4,y:-89.55},0).wait(1).to({scaleX:0.7995,scaleY:0.782,skewX:-113.8838,skewY:67.0063,x:149.1,y:-76.3},0).wait(1).to({scaleY:0.78,skewX:-114.0563,skewY:66.933,x:163.25,y:-62.85},0).wait(1).to({scaleY:0.7779,skewX:-114.2341,skewY:66.8574,x:178,y:-49.05},0).wait(1).to({scaleY:0.7759,skewX:-114.417,skewY:66.7797,x:193.35,y:-35.05},0).wait(1).to({scaleY:0.7737,skewX:-114.6046,skewY:66.6999,x:209.25,y:-20.8},0).wait(1).to({scaleY:0.7715,skewX:-114.7966,skewY:66.6182,x:225.75,y:-6.35},0).wait(1).to({scaleY:0.7693,skewX:-114.9927,skewY:66.5349,x:242.8,y:8.25},0).wait(1).to({scaleY:0.767,skewX:-115.1927,skewY:66.4498,x:260.35,y:22.9},0).wait(1).to({scaleY:0.7647,skewX:-115.3963,skewY:66.3632,x:278.5,y:37.7},0).wait(1).to({scaleY:0.7623,skewX:-115.6033,skewY:66.2752,x:297.15,y:52.5},0).wait(1).to({scaleY:0.7599,skewX:-115.8134,skewY:66.1859,x:316.35,y:67.35},0).wait(1).to({scaleX:0.7994,scaleY:0.7575,skewX:-116.0265,skewY:66.0953,x:335.95,y:82.2},0).wait(1).to({scaleY:0.755,skewX:-116.2423,skewY:66.0035,x:356.1,y:96.95},0).wait(1).to({scaleY:0.7525,skewX:-116.4606,skewY:65.9107,x:376.75,y:111.65},0).wait(1).to({scaleY:0.75,skewX:-116.6813,skewY:65.8169,x:397.85,y:126.25},0).wait(1).to({scaleY:0.7475,skewX:-116.9042,skewY:65.7221,x:419.35,y:140.65},0).wait(1).to({scaleY:0.7449,skewX:-117.129,skewY:65.6265,x:441.25,y:154.9},0).wait(1).to({scaleY:0.7423,skewX:-117.3557,skewY:65.5301,x:461.95,y:167.9},0).wait(1).to({scaleY:0.7397,skewX:-117.5841,skewY:65.433,x:482.95,y:180.7},0).wait(1).to({scaleX:0.7993,scaleY:0.7371,skewX:-117.8139,skewY:65.3353,x:504.4,y:193.35},0).wait(1).to({scaleY:0.7344,skewX:-118.0452,skewY:65.237,x:526.3,y:205.7},0).wait(1).to({scaleY:0.7318,skewX:-118.2776,skewY:65.1381,x:548.65,y:217.85},0).wait(1).to({scaleY:0.7291,skewX:-118.511,skewY:65.0389,x:571.4,y:229.75},0).wait(1).to({scaleY:0.7264,skewX:-118.7454,skewY:64.9392,x:594.6,y:241.3},0).wait(1).to({scaleY:0.7237,skewX:-118.9804,skewY:64.8393,x:618.15,y:252.6},0).wait(1).to({scaleY:0.7211,skewX:-119.2161,skewY:64.7391,x:642.1,y:263.45},0).wait(1).to({scaleX:0.7992,scaleY:0.7183,skewX:-119.4522,skewY:64.6387,x:666.45,y:273.95},0).wait(1).to({scaleY:0.7157,skewX:-119.6886,skewY:64.5382,x:691.15,y:284},0).wait(1).to({scaleY:0.713,skewX:-119.9251,skewY:64.4376,x:716.25,y:293.5},0).wait(1).to({scaleY:0.7102,skewX:-120.1615,skewY:64.3371,x:741.6,y:302.6},0).wait(1).to({scaleY:0.7076,skewX:-120.3978,skewY:64.2366,x:767.2,y:311.2},0).wait(1).to({scaleY:0.7049,skewX:-120.6337,skewY:64.1364,x:793.1,y:319.1},0).wait(1).to({scaleY:0.7022,skewX:-120.869,skewY:64.0363,x:819.25,y:326.5},0).wait(1).to({scaleX:0.7991,scaleY:0.6995,skewX:-121.1036,skewY:63.9365,x:845.6,y:333.25},0).wait(1).to({scaleY:0.6968,skewX:-121.3373,skewY:63.8371,x:872.05,y:339.35},0).wait(1).to({scaleY:0.6942,skewX:-121.5699,skewY:63.7382,x:897.7,y:344.65},0).wait(1).to({scaleY:0.6915,skewX:-121.8013,skewY:63.6399,x:923,y:349.2},0).wait(1).to({scaleY:0.6889,skewX:-122.031,skewY:63.5422,x:948.4,y:353.15},0).wait(1).to({scaleY:0.6863,skewX:-122.2591,skewY:63.4452,x:973.9,y:356.4},0).wait(1).to({scaleY:0.6837,skewX:-122.4851,skewY:63.3491,x:999.3,y:359.05},0).wait(1).to({scaleY:0.6812,skewX:-122.7088,skewY:63.254,x:1024.75,y:361.05},0).wait(1).to({scaleY:0.6786,skewX:-122.93,skewY:63.1599,x:1050.05,y:362.3},0).wait(1).to({scaleX:0.799,scaleY:0.6761,skewX:-123.1484,skewY:63.0671,x:1075.2,y:362.95},0).wait(1).to({scaleY:0.6737,skewX:-123.3636,skewY:62.9756,x:1100.05},0).wait(1).to({scaleY:0.6713,skewX:-123.5752,skewY:62.8856,x:1124.65,y:362.25},0).wait(1).to({scaleY:0.6689,skewX:-123.7828,skewY:62.7973,x:1148.8,y:361},0).wait(1).to({scaleY:0.6666,skewX:-123.9861,skewY:62.7109,x:1172.45,y:359.1},0).wait(1).to({scaleY:0.6643,skewX:-124.1844,skewY:62.6266,x:1195.55,y:356.7},0).wait(1).to({scaleY:0.6621,skewX:-124.3772,skewY:62.5446,x:1218,y:353.85},0).wait(1).to({scaleY:0.66,skewX:-124.5639,skewY:62.4652,x:1239.65,y:350.55},0).wait(1).to({scaleY:0.6579,skewX:-124.7438,skewY:62.3887,x:1260.55,y:346.9},0).wait(1).to({scaleX:0.7989,scaleY:0.656,skewX:-124.916,skewY:62.3155,x:1280.4,y:343},0).wait(1).to({scaleY:0.6541,skewX:-125.0795,skewY:62.246,x:1299.1,y:338.8},0).wait(1).to({scaleY:0.6523,skewX:-125.2331,skewY:62.1807,x:1316.7,y:334.6},0).wait(1).to({scaleY:0.6507,skewX:-125.3755,skewY:62.1201,x:1332.85,y:330.4},0).wait(1).to({scaleY:0.6492,skewX:-125.505,skewY:62.0651,x:1347.5,y:326.4},0).wait(1).to({scaleY:0.6479,skewX:-125.6195,skewY:62.0164,x:1360.4,y:322.65},0).wait(1).to({scaleY:0.6468,skewX:-125.7164,skewY:61.9752,x:1371.15,y:319.3},0).wait(1).to({scaleY:0.6459,skewX:-125.7922,skewY:61.943,x:1379.6,y:316.6},0).wait(1).to({scaleY:0.6454,skewX:-125.8425,skewY:61.9216,x:1385.25,y:314.8},0).wait(1).to({regX:59.9,regY:47.3,scaleY:0.6452,skewX:-125.8611,skewY:61.9137,x:1414.9,y:321.35},0).to({_off:true},1).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.2,-309.3,1564.4,709.8);


(lib.hikari2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hikari_コピー
	this.instance = new lib.bg_hikari();
	this.instance.parent = this;
	this.instance.setTransform(91.2,-191.9,0.876,0.876,0,-42.3003,137.6997);
	this.instance.alpha = 0.0703;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9287,scaleY:0.9287,skewX:-42.4143,skewY:137.5857,x:90.9,y:-184.1,alpha:0.8984},10).wait(1).to({regX:-1.8,regY:94.2,scaleX:0.9295,scaleY:0.9295,skewX:-42.4112,skewY:137.5888,x:151.05,y:-120.45,alpha:0.8779},0).wait(1).to({scaleX:0.932,scaleY:0.932,skewX:-42.4022,skewY:137.5978,x:150.9,y:-119.9,alpha:0.8169},0).wait(1).to({scaleX:0.9358,scaleY:0.9358,skewX:-42.3882,skewY:137.6118,x:150.7,y:-119.15,alpha:0.7217},0).wait(1).to({scaleX:0.9405,scaleY:0.9405,skewX:-42.371,skewY:137.629,x:150.35,y:-118.15,alpha:0.6056},0).wait(1).to({scaleX:0.9453,scaleY:0.9453,skewX:-42.3532,skewY:137.6468,x:150.05,y:-117.1,alpha:0.485},0).wait(1).to({scaleX:0.9498,scaleY:0.9498,skewX:-42.3368,skewY:137.6632,x:149.7,y:-116.15,alpha:0.3738},0).wait(1).to({scaleX:0.9536,scaleY:0.9536,skewX:-42.323,skewY:137.677,x:149.5,y:-115.35,alpha:0.2805},0).wait(1).to({scaleX:0.9565,scaleY:0.9565,skewX:-42.3124,skewY:137.6876,x:149.3,y:-114.7,alpha:0.2087},0).wait(1).to({scaleX:0.9585,scaleY:0.9585,skewX:-42.305,skewY:137.695,x:149.15,y:-114.25,alpha:0.1585},0).wait(1).to({regX:0,regY:0,scaleX:0.9597,scaleY:0.9597,skewX:-42.3007,skewY:137.6993,x:87,y:-179.85,alpha:0.1289},0).to({_off:true},1).wait(24));

	// hikari_コピー_2
	this.instance_1 = new lib.bg_hikari();
	this.instance_1.parent = this;
	this.instance_1.setTransform(110.35,-147,0.9286,0.9286,0,-45.3535,134.6465,-0.1,0.1);
	this.instance_1.alpha = 0.6992;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:-1.8,regY:94.2,scaleX:0.9295,scaleY:0.9295,skewX:-45.3505,skewY:134.6495,x:173.65,y:-86.6,alpha:0.684},0).wait(1).to({scaleX:0.9319,scaleY:0.9319,skewX:-45.3415,skewY:134.6585,x:173.55,y:-86.35,alpha:0.6388},0).wait(1).to({scaleX:0.9358,scaleY:0.9358,skewX:-45.3275,skewY:134.6725,x:173.4,y:-85.9,alpha:0.5682},0).wait(1).to({scaleX:0.9405,scaleY:0.9405,skewX:-45.3104,skewY:134.6896,x:173.25,y:-85.35,alpha:0.4822},0).wait(1).to({scaleX:0.9453,scaleY:0.9453,skewX:-45.2927,skewY:134.7073,x:173.05,y:-84.8,alpha:0.3928},0).wait(1).to({scaleX:0.9498,scaleY:0.9498,skewX:-45.2763,skewY:134.7237,x:172.85,y:-84.3,alpha:0.3104},0).wait(1).to({scaleX:0.9536,scaleY:0.9536,skewX:-45.2626,skewY:134.7374,x:172.7,y:-83.85,alpha:0.2413},0).wait(1).to({scaleX:0.9565,scaleY:0.9565,skewX:-45.252,skewY:134.748,x:172.6,y:-83.5,alpha:0.188},0).wait(1).to({scaleX:0.9585,scaleY:0.9585,skewX:-45.2446,skewY:134.7554,x:172.5,y:-83.35,alpha:0.1508},0).wait(1).to({regX:0,regY:0,scaleX:0.9597,scaleY:0.9597,skewX:-45.2403,skewY:134.7597,x:107.2,y:-145.65,alpha:0.1289},0).to({_off:true},1).wait(23).to({_off:false,regX:-0.1,scaleX:0.876,scaleY:0.876,skewX:-45.2392,skewY:134.7608,x:164.9,y:-95.7,alpha:0.0703},0).to({regY:0.1,scaleX:0.9286,scaleY:0.9286,skewX:-45.3535,skewY:134.6465,x:110.35,y:-147,alpha:0.6992},10).wait(1));

	// hikari
	this.instance_2 = new lib.bg_hikari();
	this.instance_2.parent = this;
	this.instance_2.setTransform(47.4,6.8,1.0076,1.0076,0,-36.6155,143.3845,0,0.1);
	this.instance_2.alpha = 0.6797;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:-1.8,regY:94.2,scaleX:1.0129,scaleY:1.0129,skewX:-36.6134,skewY:143.3866,x:105.15,y:82.3,alpha:0.5671},0).wait(1).to({scaleX:1.0181,scaleY:1.0181,skewX:-36.6114,skewY:143.3886,x:104.9,y:82.8,alpha:0.4544},0).wait(1).to({scaleX:1.0229,scaleY:1.0229,skewX:-36.6095,skewY:143.3905,x:104.75,y:83.3,alpha:0.3526},0).wait(1).to({scaleX:1.0269,scaleY:1.0269,skewX:-36.608,skewY:143.392,x:104.6,y:83.65,alpha:0.2677},0).wait(1).to({scaleX:1.0299,scaleY:1.0299,skewX:-36.6068,skewY:143.3932,x:104.4,y:84,alpha:0.2023},0).wait(1).to({scaleX:1.0321,scaleY:1.0321,skewX:-36.6059,skewY:143.3941,x:104.3,y:84.2,alpha:0.1564},0).wait(1).to({regX:0,regY:0,scaleX:1.0334,scaleY:1.0334,skewX:-36.6054,skewY:143.3946,x:44.85,y:7.35,alpha:0.1289},0).to({_off:true},1).wait(23).to({_off:false,scaleX:0.9432,scaleY:0.9432,skewX:-36.6046,skewY:143.3954,x:46.35,y:7.05,alpha:0.0703},0).to({regX:-0.1,regY:0.1,scaleX:0.9999,scaleY:0.9999,skewX:-36.7202,skewY:143.2798,x:48.45,y:6.5,alpha:0.8984},10).wait(1).to({regX:-1.8,regY:94.2,scaleX:1.0008,scaleY:1.0008,skewX:-36.7078,skewY:143.2922,x:105.95,y:80.95,alpha:0.8725},0).wait(1).to({scaleX:1.0035,scaleY:1.0035,skewX:-36.6712,skewY:143.3288,x:105.75,y:81.25,alpha:0.7961},0).wait(1).to({regX:0,regY:0.1,scaleX:1.0076,scaleY:1.0076,skewX:-36.6155,skewY:143.3845,x:47.4,y:6.8,alpha:0.6797},0).wait(1));

	// hikari
	this.instance_3 = new lib.bg_hikari();
	this.instance_3.parent = this;
	this.instance_3.setTransform(53.05,-1.1,0.9432,0.9432,0,-36.6046,143.3954);
	this.instance_3.alpha = 0.0703;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).to({regX:-0.1,regY:0.1,scaleX:0.9999,scaleY:0.9999,skewX:-36.7202,skewY:143.2798,x:50.6,y:11.6,alpha:1},10).wait(1).to({regX:-1.8,regY:94.2,scaleX:1.0008,scaleY:1.0008,skewX:-36.7171,skewY:143.2829,x:108.15,y:86,alpha:0.9767},0).wait(1).to({scaleX:1.0035,scaleY:1.0035,skewX:-36.7081,skewY:143.2919,x:108,y:86.3,alpha:0.9077},0).wait(1).to({scaleX:1.0076,scaleY:1.0076,skewX:-36.6939,skewY:143.3061,x:107.75,y:86.75,alpha:0.8},0).wait(1).to({scaleX:1.0127,scaleY:1.0127,skewX:-36.6765,skewY:143.3235,x:107.5,y:87.25,alpha:0.6685},0).wait(1).to({scaleX:1.0179,scaleY:1.0179,skewX:-36.6585,skewY:143.3415,x:107.2,y:87.8,alpha:0.532},0).wait(1).to({scaleX:1.0227,scaleY:1.0227,skewX:-36.642,skewY:143.358,x:107,y:88.35,alpha:0.4062},0).wait(1).to({scaleX:1.0268,scaleY:1.0268,skewX:-36.628,skewY:143.372,x:106.75,y:88.75,alpha:0.3006},0).wait(1).to({scaleX:1.0299,scaleY:1.0299,skewX:-36.6173,skewY:143.3827,x:106.55,y:89.05,alpha:0.2192},0).wait(1).to({scaleX:1.0321,scaleY:1.0321,skewX:-36.6098,skewY:143.3902,x:106.5,y:89.35,alpha:0.1624},0).wait(1).to({regX:0,regY:0,scaleX:1.0334,scaleY:1.0334,skewX:-36.6054,skewY:143.3946,x:46.95,y:12.45,alpha:0.1289},0).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.8,-311.6,430.7,605.9000000000001);


(lib.hikari = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hikari_コピー
	this.instance = new lib.bg_hikari();
	this.instance.parent = this;
	this.instance.setTransform(131.7,-293.15,0.9879,0.7767,0,-51.0846,129.2755,-0.1,-0.1);
	this.instance.alpha = 0.0703;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.0474,scaleY:0.8234,skewX:-51.2294,skewY:129.1856,x:131.65,y:-285.25,alpha:0.8984},10).wait(1).to({regX:-1.8,regY:94.2,scaleX:1.0483,scaleY:0.8241,skewX:-51.2255,skewY:129.188,x:193.3,y:-237.8,alpha:0.8779},0).wait(1).to({scaleX:1.0511,scaleY:0.8263,skewX:-51.214,skewY:129.195,x:193.1,y:-237.2,alpha:0.8169},0).wait(1).to({scaleX:1.0554,scaleY:0.8297,skewX:-51.1961,skewY:129.2061,x:192.9,y:-236.3,alpha:0.7217},0).wait(1).to({scaleX:1.0607,scaleY:0.8339,skewX:-51.1742,skewY:129.2196,x:192.6,y:-235.3,alpha:0.6056},0).wait(1).to({scaleX:1.0662,scaleY:0.8382,skewX:-51.1514,skewY:129.2336,x:192.35,y:-234.2,alpha:0.485},0).wait(1).to({scaleX:1.0712,scaleY:0.8422,skewX:-51.1305,skewY:129.2466,x:192.05,y:-233.15,alpha:0.3738},0).wait(1).to({scaleX:1.0755,scaleY:0.8455,skewX:-51.1129,skewY:129.2574,x:191.9,y:-232.3,alpha:0.2805},0).wait(1).to({scaleX:1.0788,scaleY:0.8481,skewX:-51.0993,skewY:129.2658,x:191.7,y:-231.65,alpha:0.2087},0).wait(1).to({scaleX:1.081,scaleY:0.8499,skewX:-51.0898,skewY:129.2716,x:191.65,y:-231.2,alpha:0.1585},0).wait(1).to({regX:0,regY:0,scaleX:1.0824,scaleY:0.8509,skewX:-51.0843,skewY:129.275,x:127.9,y:-279.85,alpha:0.1289},0).to({_off:true},1).wait(24));

	// hikari_コピー_2
	this.instance_1 = new lib.bg_hikari();
	this.instance_1.parent = this;
	this.instance_1.setTransform(152.15,-253.4,1.0465,0.8245,0,-54.9643,126.8734,-0.2,0.1);
	this.instance_1.alpha = 0.6992;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:-1.8,regY:94.2,scaleX:1.0474,scaleY:0.8252,skewX:-54.9604,skewY:126.8758,x:216.65,y:-210.05,alpha:0.684},0).wait(1).to({scaleX:1.0502,scaleY:0.8274,skewX:-54.949,skewY:126.8829,x:216.55,y:-209.8,alpha:0.6388},0).wait(1).to({scaleX:1.0545,scaleY:0.8308,skewX:-54.9311,skewY:126.894,x:216.4,y:-209.3,alpha:0.5682},0).wait(1).to({scaleX:1.0598,scaleY:0.8349,skewX:-54.9093,skewY:126.9075,x:216.25,y:-208.75,alpha:0.4822},0).wait(1).to({scaleX:1.0653,scaleY:0.8392,skewX:-54.8867,skewY:126.9215,x:216.05,y:-208.15,alpha:0.3928},0).wait(1).to({scaleX:1.0704,scaleY:0.8432,skewX:-54.8658,skewY:126.9345,x:215.9,y:-207.6,alpha:0.3104},0).wait(1).to({scaleX:1.0746,scaleY:0.8465,skewX:-54.8483,skewY:126.9454,x:215.8,y:-207.1,alpha:0.2413},0).wait(1).to({scaleX:1.0779,scaleY:0.8491,skewX:-54.8348,skewY:126.9537,x:215.7,y:-206.75,alpha:0.188},0).wait(1).to({scaleX:1.0802,scaleY:0.8509,skewX:-54.8254,skewY:126.9596,x:215.6,y:-206.5,alpha:0.1508},0).wait(1).to({regX:-0.1,regY:0,scaleX:1.0816,scaleY:0.852,skewX:-54.8198,skewY:126.963,x:149,y:-251.2,alpha:0.1289},0).to({_off:true},1).wait(23).to({_off:false,regY:-0.1,scaleX:0.9872,scaleY:0.7776,skewX:-54.8193,skewY:126.9636,x:207.65,y:-216.9,alpha:0.0703},0).to({regX:-0.2,regY:0.1,scaleX:1.0465,scaleY:0.8245,skewX:-54.9643,skewY:126.8734,x:152.15,y:-253.4,alpha:0.6992},10).wait(1));

	// hikari
	this.instance_2 = new lib.bg_hikari();
	this.instance_2.parent = this;
	this.instance_2.setTransform(94.25,-82.65,1.1348,0.8954,0,-43.8621,133.7475,-0.1,0.1);
	this.instance_2.alpha = 0.6797;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:-1.8,regY:94.2,scaleX:1.1407,scaleY:0.9001,skewX:-43.8595,skewY:133.7492,x:153.7,y:-22.65,alpha:0.5671},0).wait(1).to({scaleX:1.1467,scaleY:0.9048,skewX:-43.8569,skewY:133.7509,x:153.55,y:-22.1,alpha:0.4544},0).wait(1).to({scaleX:1.152,scaleY:0.909,skewX:-43.8546,skewY:133.7525,x:153.3,y:-21.55,alpha:0.3526},0).wait(1).to({scaleX:1.1565,scaleY:0.9125,skewX:-43.8526,skewY:133.7538,x:153.15,y:-21.1,alpha:0.2677},0).wait(1).to({scaleX:1.1599,scaleY:0.9152,skewX:-43.8511,skewY:133.7548,x:153.05,y:-20.8,alpha:0.2023},0).wait(1).to({scaleX:1.1624,scaleY:0.9172,skewX:-43.8501,skewY:133.7555,x:152.95,y:-20.55,alpha:0.1564},0).wait(1).to({regX:0,regY:0,scaleX:1.1638,scaleY:0.9183,skewX:-43.8494,skewY:133.7559,x:91.65,y:-81.3,alpha:0.1289},0).to({_off:true},1).wait(23).to({_off:false,regX:-0.1,regY:0.1,scaleX:1.0622,scaleY:0.8381,skewX:-43.8486,skewY:133.7562,x:93.2,y:-82.05,alpha:0.0703},0).to({scaleX:1.1262,scaleY:0.8885,skewX:-43.9945,skewY:133.6655,x:95.2,y:-83.2,alpha:0.8984},10).wait(1).to({regX:-1.8,regY:94.2,scaleX:1.1273,scaleY:0.8893,skewX:-43.9788,skewY:133.6752,x:154.45,y:-24.2,alpha:0.8725},0).wait(1).to({scaleX:1.1302,scaleY:0.8917,skewX:-43.9326,skewY:133.7039,x:154.3,y:-23.8,alpha:0.7961},0).wait(1).to({regX:-0.1,regY:0.1,scaleX:1.1348,scaleY:0.8954,skewX:-43.8621,skewY:133.7475,x:94.25,y:-82.65,alpha:0.6797},0).wait(1));

	// hikari
	this.instance_3 = new lib.bg_hikari();
	this.instance_3.parent = this;
	this.instance_3.setTransform(99.6,-92.05,1.0622,0.8381,0,-43.8486,133.7562,-0.1,0.1);
	this.instance_3.alpha = 0.0703;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).to({scaleX:1.1262,scaleY:0.8885,skewX:-43.9945,skewY:133.6655,x:97.45,y:-78.65,alpha:1},10).wait(1).to({regX:-1.8,regY:94.2,scaleX:1.1272,scaleY:0.8893,skewX:-43.9907,skewY:133.6679,x:156.8,y:-19.7,alpha:0.9767},0).wait(1).to({scaleX:1.1302,scaleY:0.8917,skewX:-43.9792,skewY:133.6751,x:156.6,y:-19.35,alpha:0.9077},0).wait(1).to({scaleX:1.1349,scaleY:0.8953,skewX:-43.9612,skewY:133.6863,x:156.4,y:-18.95,alpha:0.8},0).wait(1).to({scaleX:1.1405,scaleY:0.8998,skewX:-43.9393,skewY:133.6999,x:156.15,y:-18.3,alpha:0.6685},0).wait(1).to({scaleX:1.1464,scaleY:0.9045,skewX:-43.9166,skewY:133.7141,x:155.95,y:-17.65,alpha:0.532},0).wait(1).to({scaleX:1.1519,scaleY:0.9088,skewX:-43.8956,skewY:133.7271,x:155.7,y:-17.1,alpha:0.4062},0).wait(1).to({scaleX:1.1564,scaleY:0.9124,skewX:-43.878,skewY:133.7381,x:155.45,y:-16.6,alpha:0.3006},0).wait(1).to({scaleX:1.1599,scaleY:0.9152,skewX:-43.8645,skewY:133.7465,x:155.35,y:-16.25,alpha:0.2192},0).wait(1).to({scaleX:1.1624,scaleY:0.9172,skewX:-43.855,skewY:133.7524,x:155.2,y:-15.95,alpha:0.1624},0).wait(1).to({regX:-0.1,regY:0.1,scaleX:1.1638,scaleY:0.9183,skewX:-43.8494,skewY:133.7559,x:94,y:-76.8,alpha:0.1289},0).to({_off:true},1).wait(3));

	// hikari_コピー
	this.instance_4 = new lib.bg_hikari();
	this.instance_4.parent = this;
	this.instance_4.setTransform(91.2,-191.9,0.876,0.876,0,-42.3003,137.6997);
	this.instance_4.alpha = 0.0703;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(23).to({_off:false},0).to({scaleX:0.9287,scaleY:0.9287,skewX:-42.4143,skewY:137.5857,x:90.9,y:-184.1,alpha:0.8984},10).wait(1).to({regX:-1.8,regY:94.2,scaleX:0.9295,scaleY:0.9295,skewX:-42.4112,skewY:137.5888,x:151.05,y:-120.45,alpha:0.8779},0).wait(1).to({scaleX:0.932,scaleY:0.932,skewX:-42.4022,skewY:137.5978,x:150.9,y:-119.9,alpha:0.8169},0).wait(1).to({scaleX:0.9358,scaleY:0.9358,skewX:-42.3882,skewY:137.6118,x:150.7,y:-119.15,alpha:0.7217},0).wait(1).to({scaleX:0.9405,scaleY:0.9405,skewX:-42.371,skewY:137.629,x:150.35,y:-118.15,alpha:0.6056},0).wait(1).to({scaleX:0.9453,scaleY:0.9453,skewX:-42.3532,skewY:137.6468,x:150.05,y:-117.1,alpha:0.485},0).wait(1).to({scaleX:0.9498,scaleY:0.9498,skewX:-42.3368,skewY:137.6632,x:149.7,y:-116.15,alpha:0.3738},0).wait(1).to({scaleX:0.9536,scaleY:0.9536,skewX:-42.323,skewY:137.677,x:149.5,y:-115.35,alpha:0.2805},0).wait(1).to({scaleX:0.9565,scaleY:0.9565,skewX:-42.3124,skewY:137.6876,x:149.3,y:-114.7,alpha:0.2087},0).wait(1).to({scaleX:0.9585,scaleY:0.9585,skewX:-42.305,skewY:137.695,x:149.15,y:-114.25,alpha:0.1585},0).wait(1).to({regX:0,regY:0,scaleX:0.9597,scaleY:0.9597,skewX:-42.3007,skewY:137.6993,x:87,y:-179.85,alpha:0.1289},0).wait(2));

	// hikari_コピー_2
	this.instance_5 = new lib.bg_hikari();
	this.instance_5.parent = this;
	this.instance_5.setTransform(164.9,-95.7,0.876,0.876,0,-45.2392,134.7608,-0.1,0);
	this.instance_5.alpha = 0.0703;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(13).to({_off:false},0).to({regY:0.1,scaleX:0.9286,scaleY:0.9286,skewX:-45.3535,skewY:134.6465,x:110.35,y:-147,alpha:0.6992},10).wait(1).to({regX:-1.8,regY:94.2,scaleX:0.9295,scaleY:0.9295,skewX:-45.3505,skewY:134.6495,x:173.65,y:-86.6,alpha:0.684},0).wait(1).to({scaleX:0.9319,scaleY:0.9319,skewX:-45.3415,skewY:134.6585,x:173.55,y:-86.35,alpha:0.6388},0).wait(1).to({scaleX:0.9358,scaleY:0.9358,skewX:-45.3275,skewY:134.6725,x:173.4,y:-85.9,alpha:0.5682},0).wait(1).to({scaleX:0.9405,scaleY:0.9405,skewX:-45.3104,skewY:134.6896,x:173.25,y:-85.35,alpha:0.4822},0).wait(1).to({scaleX:0.9453,scaleY:0.9453,skewX:-45.2927,skewY:134.7073,x:173.05,y:-84.8,alpha:0.3928},0).wait(1).to({scaleX:0.9498,scaleY:0.9498,skewX:-45.2763,skewY:134.7237,x:172.85,y:-84.3,alpha:0.3104},0).wait(1).to({scaleX:0.9536,scaleY:0.9536,skewX:-45.2626,skewY:134.7374,x:172.7,y:-83.85,alpha:0.2413},0).wait(1).to({scaleX:0.9565,scaleY:0.9565,skewX:-45.252,skewY:134.748,x:172.6,y:-83.5,alpha:0.188},0).wait(1).to({scaleX:0.9585,scaleY:0.9585,skewX:-45.2446,skewY:134.7554,x:172.5,y:-83.35,alpha:0.1508},0).wait(1).to({regX:0,regY:0,scaleX:0.9597,scaleY:0.9597,skewX:-45.2403,skewY:134.7597,x:107.2,y:-145.65,alpha:0.1289},0).to({_off:true},1).wait(11));

	// hikari
	this.instance_6 = new lib.bg_hikari();
	this.instance_6.parent = this;
	this.instance_6.setTransform(46.35,7.05,0.9432,0.9432,0,-36.6046,143.3954);
	this.instance_6.alpha = 0.0703;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10).to({_off:false},0).to({regX:-0.1,regY:0.1,scaleX:0.9999,scaleY:0.9999,skewX:-36.7202,skewY:143.2798,x:48.45,y:6.5,alpha:0.8984},10).wait(1).to({regX:-1.8,regY:94.2,scaleX:1.0008,scaleY:1.0008,skewX:-36.7171,skewY:143.2829,x:106,y:80.9,alpha:0.8779},0).wait(1).to({scaleX:1.0035,scaleY:1.0035,skewX:-36.7081,skewY:143.2919,x:105.85,y:81.2,alpha:0.8169},0).wait(1).to({scaleX:1.0076,scaleY:1.0076,skewX:-36.6939,skewY:143.3061,x:105.6,y:81.65,alpha:0.7217},0).wait(1).to({scaleX:1.0127,scaleY:1.0127,skewX:-36.6765,skewY:143.3235,x:105.35,y:82.2,alpha:0.6056},0).wait(1).to({scaleX:1.0179,scaleY:1.0179,skewX:-36.6585,skewY:143.3415,x:105.05,y:82.7,alpha:0.485},0).wait(1).to({scaleX:1.0227,scaleY:1.0227,skewX:-36.642,skewY:143.358,x:104.85,y:83.25,alpha:0.3738},0).wait(1).to({scaleX:1.0268,scaleY:1.0268,skewX:-36.628,skewY:143.372,x:104.6,y:83.65,alpha:0.2805},0).wait(1).to({scaleX:1.0299,scaleY:1.0299,skewX:-36.6173,skewY:143.3827,x:104.45,y:84,alpha:0.2087},0).wait(1).to({scaleX:1.0321,scaleY:1.0321,skewX:-36.6098,skewY:143.3902,x:104.35,y:84.25,alpha:0.1585},0).wait(1).to({regX:0,regY:0,scaleX:1.0334,scaleY:1.0334,skewX:-36.6054,skewY:143.3946,x:44.85,y:7.35,alpha:0.1289},0).to({_off:true},1).wait(14));

	// hikari
	this.instance_7 = new lib.bg_hikari();
	this.instance_7.parent = this;
	this.instance_7.setTransform(53.05,-1.1,0.9432,0.9432,0,-36.6046,143.3954);
	this.instance_7.alpha = 0.0703;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:-0.1,regY:0.1,scaleX:0.9999,scaleY:0.9999,skewX:-36.7202,skewY:143.2798,x:50.6,y:11.6,alpha:1},10).wait(1).to({regX:-1.8,regY:94.2,scaleX:1.0008,scaleY:1.0008,skewX:-36.7171,skewY:143.2829,x:108.15,y:86,alpha:0.9767},0).wait(1).to({scaleX:1.0035,scaleY:1.0035,skewX:-36.7081,skewY:143.2919,x:108,y:86.3,alpha:0.9077},0).wait(1).to({scaleX:1.0076,scaleY:1.0076,skewX:-36.6939,skewY:143.3061,x:107.75,y:86.75,alpha:0.8},0).wait(1).to({scaleX:1.0127,scaleY:1.0127,skewX:-36.6765,skewY:143.3235,x:107.5,y:87.25,alpha:0.6685},0).wait(1).to({scaleX:1.0179,scaleY:1.0179,skewX:-36.6585,skewY:143.3415,x:107.2,y:87.8,alpha:0.532},0).wait(1).to({scaleX:1.0227,scaleY:1.0227,skewX:-36.642,skewY:143.358,x:107,y:88.35,alpha:0.4062},0).wait(1).to({scaleX:1.0268,scaleY:1.0268,skewX:-36.628,skewY:143.372,x:106.75,y:88.75,alpha:0.3006},0).wait(1).to({scaleX:1.0299,scaleY:1.0299,skewX:-36.6173,skewY:143.3827,x:106.55,y:89.05,alpha:0.2192},0).wait(1).to({scaleX:1.0321,scaleY:1.0321,skewX:-36.6098,skewY:143.3902,x:106.5,y:89.35,alpha:0.1624},0).wait(1).to({regX:0,regY:0,scaleX:1.0334,scaleY:1.0334,skewX:-36.6054,skewY:143.3946,x:46.95,y:12.45,alpha:0.1289},0).to({_off:true},1).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.8,-400.1,477.3,694.4000000000001);


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
	this.instance_2.setTransform(204.8,189.7,0.1412,0.1412);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).wait(18));

	// レイヤー_8
	this.instance_3 = new lib.glitter_first();
	this.instance_3.parent = this;
	this.instance_3.setTransform(224.75,123.45,0.159,0.159,0,0,0,-1.3,2.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).wait(16));

	// レイヤー_9
	this.instance_4 = new lib.glitter_first();
	this.instance_4.parent = this;
	this.instance_4.setTransform(217.2,55.5,0.0849,0.0849);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(7).to({_off:false},0).wait(15));

	// レイヤー_10
	this.instance_5 = new lib.glitter_first();
	this.instance_5.parent = this;
	this.instance_5.setTransform(214.75,251.15,0.1618,0.1618);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8).to({_off:false},0).wait(14));

	// レイヤー_11
	this.instance_6 = new lib.glitter_first();
	this.instance_6.parent = this;
	this.instance_6.setTransform(228.3,25.1,0.1362,0.1362);
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
	this.instance_8.setTransform(219.55,220.1,0.1702,0.1702);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(12).to({_off:false},0).wait(10));

	// レイヤー_14
	this.instance_9 = new lib.glitter_first();
	this.instance_9.parent = this;
	this.instance_9.setTransform(216.5,34.05,0.2555,0.2555);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(14).to({_off:false},0).wait(8));

	// レイヤー_15
	this.instance_10 = new lib.glitter_first();
	this.instance_10.parent = this;
	this.instance_10.setTransform(182.7,235.75,0.1176,0.1176);
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


(lib.character1_face_container = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{init:0,run:4,stay:10,s2:11,s3:12,blink1:15,blink2:21});

	// timeline functions:
	this.frame_0 = function() {
		//                     1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12
		this.face_blink_ary = [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1]; 
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
			this.hair.gotoAndStop( this.next_face );
			
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
	var mask_graphics_15 = new cjs.Graphics().p("AmdF2QgogCgWgLQgmgSgRgtIgGgUIgCgEQgLgTgBgkQAAgSADgmQACgYADgRQADgNALghIAGgOIACgBQAOgGARgWIAegoQASgXASgMIAkgUIAYgPQAOgIALgDQAMgDAXAAIA0AAQAaAAAMADQAKACARAGIAbAIQALADAJAAQAGABAIgBQAJgCARgLIAOgKIACAAQAOADAMgFIAVgMIAOgFQAKgCAEgDQAJgFAGgKQAFgIABgJQAJgSAAgbQAAgJgCgJQAKgeAXgdQAWgbAnggQAbgWAUgKQAogSA+AGIAbAEIAOACQAkAHAZAKQAcALAfAVQASANAjAdQApAiATAWIAAABIABADQAGAZABANIABAFQAEAKABALQAAAYgTAaQgGAJgLAMIgTAUIgSAWQgLANgJAIQgLAKghAVIgbATQgQAKgMAGQgqAVg1gCQgtgCgxgRIgHAAQgcgNgUgLIg9gfIgGgEIgNgDIgFAAIgHgGQgTgLgUAJQgJAEgKAKQgRAQgEASQgOAQgKAUQgQAegCAhIABBCQABAngMAXQgKAWgYATQgRAMgfAQQg8AhgmAJQgnALg0AAIgigBg");
	var mask_graphics_21 = new cjs.Graphics().p("AjFBuIhLhTIAEgiQADgjABABIATh2ICVgHIBJATICJBEIB6AeIAlgEQgWA4ABBQQAAAgABAaIhEgGIi5Agg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(15).to({graphics:mask_graphics_15,x:65.975,y:69.3145}).wait(6).to({graphics:mask_graphics_21,x:31.25,y:41.8}).wait(6));

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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).wait(1).to({alpha:1},0).wait(1).to({regX:73,regY:73,x:73,y:73,alpha:0.3015},0).wait(1).to({alpha:0.0922},0).wait(1).to({regX:35,regY:30,x:35,y:30,alpha:0},0).wait(2).to({alpha:0.1992},0).wait(1).to({alpha:1},0).wait(1).to({regX:73,regY:73,x:73,y:73,alpha:0.3015},0).wait(1).to({alpha:0.0922},0).wait(1).to({regX:35,regY:30,x:35,y:30,alpha:0},0).wait(2));

	// hair
	this.hair = new lib.ch_hair();
	this.hair.name = "hair";
	this.hair.parent = this;
	this.hair.setTransform(24.15,-46.4,0.5,0.5,0,0,0,80,52);

	this.timeline.addTween(cjs.Tween.get(this.hair).wait(27));

	// f2
	this.f2 = new lib.character1_face();
	this.f2.name = "f2";
	this.f2.parent = this;
	this.f2.setTransform(35,30,1,1,0,0,0,35,30);

	this.timeline.addTween(cjs.Tween.get(this.f2).wait(5).to({alpha:0.1992},0).wait(1).to({regX:63.1,regY:36.6,x:63.1,y:36.6,alpha:0.6441},0).wait(1).to({alpha:0.911},0).wait(1).to({regX:35,regY:30,x:35,y:30,alpha:1},0).wait(19));

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

	this.timeline.addTween(cjs.Tween.get(this.f1_alpha).wait(5).to({alpha:0.8008},0).wait(1).to({regX:63.1,regY:36.6,x:63.1,y:36.6,alpha:0.7118},0).wait(1).to({alpha:0.4449},0).wait(1).to({regX:35,regY:30,x:35,y:30,alpha:0},0).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139,-94,450,564);


(lib.character1_body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{def:0,nf:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// レイヤー_2
	this.instance = new lib.hair_n();
	this.instance.parent = this;
	this.instance.setTransform(-97,-402.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// face
	this.f = new lib.character1_face_container();
	this.f.name = "f";
	this.f.parent = this;
	this.f.setTransform(-121,-356);

	this.timeline.addTween(cjs.Tween.get(this.f).to({_off:true},1).wait(1));

	// base
	this.b = new lib.character1_base();
	this.b.name = "b";
	this.b.parent = this;
	this.b.setTransform(-139.95,-54);

	this.timeline.addTween(cjs.Tween.get(this.b).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-260,-450,570.2,581.7);


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


(lib.leef_2_move_set = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		/* stop();*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// 風
	this.instance = new lib.wind_container();
	this.instance.parent = this;
	this.instance.setTransform(741.4,-204.6,1,1,0,-14.9992,165.0008,0.3,-0.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(19));

	// leef
	this.instance_1 = new lib.leef_2_move_pattern();
	this.instance_1.parent = this;
	this.instance_1.setTransform(448.5,-284.55,0.4687,0.4687,164.3746);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(19));

	// leef
	this.instance_2 = new lib.leef_2_move_pattern();
	this.instance_2.parent = this;
	this.instance_2.setTransform(662.75,62,0.4783,0.33,147.848,0,0,52.1,43.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({_off:false},0).wait(12));

	// leef
	this.instance_3 = new lib.leef_2_move_pattern();
	this.instance_3.parent = this;
	this.instance_3.setTransform(636.15,-145.3,0.5048,0.5048,151.6563);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-301.6,754.3,358.20000000000005);


(lib.leef_1_move_set = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_115 = function() {
		/* stop();
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(115).call(this.frame_115).wait(1));

	// glass4
	this.instance = new lib.leef_1_move_pattern();
	this.instance.parent = this;
	this.instance.setTransform(775.1,-167.8,1.6,1.6,0,0,0,-168.8,-147.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(61).to({_off:false},0).wait(55));

	// glass4
	this.instance_1 = new lib.leef_1_move_pattern();
	this.instance_1.parent = this;
	this.instance_1.setTransform(38.65,274.95,1.222,1.222,0,0,0,-165.1,-152.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(31).to({_off:false},0).wait(85));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-213.9,899.5,531.2);


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


(lib.leef2_set = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{stop:0,end:3,run_start:11,"run":17});

	// timeline functions:
	this.frame_2 = function() {
		/* stop();*/
		
		this.stop();
	}
	this.frame_10 = function() {
		/* stop();*/
		
		this.stop();
	}
	this.frame_35 = function() {
		/* stop();*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(8).call(this.frame_10).wait(25).call(this.frame_35).wait(1));

	// leef_2_move_set
	this.instance = new lib.leef_2_move_set();
	this.instance.parent = this;
	this.instance.setTransform(14.8,11,1,1,0,0,0,14.8,11);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({alpha:0},6).to({_off:true},1).wait(1).to({_off:false},0).to({alpha:1},6).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.leef1_set = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"stop":0,"end":3,"run_start":13,"run":21});

	// timeline functions:
	this.frame_0 = function() {
		this.play();
	}
	this.frame_2 = function() {
		/* stop();
		*/
		
		this.stop();
	}
	this.frame_3 = function() {
		this.play();
	}
	this.frame_12 = function() {
		/* stop();
		*/
		
		this.stop();
	}
	this.frame_13 = function() {
		this.play();
	}
	this.frame_135 = function() {
		/* stop();
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(1).call(this.frame_3).wait(9).call(this.frame_12).wait(1).call(this.frame_13).wait(122).call(this.frame_135).wait(1));

	// grass_front_move
	this.instance = new lib.leef_1_move_set();
	this.instance.parent = this;
	this.instance.setTransform(7.2,9.5,1,1,0,0,0,7.2,9.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(7).to({regX:7.2,regY:9.5,x:7.2,y:9.5},0).to({_off:true},1).wait(1).to({_off:false,alpha:0},0).wait(1).to({regX:0,regY:0,x:-1.6875,y:-2.2148,alpha:0.2344},0).wait(1).to({x:-3.15,y:-4.1344,alpha:0.4375},0).wait(1).to({x:-4.3875,y:-5.7586,alpha:0.6094},0).wait(1).to({x:-5.4,y:-7.0875,alpha:0.75},0).wait(1).to({x:-6.1875,y:-8.1211,alpha:0.8594},0).wait(1).to({x:-6.75,y:-8.8594,alpha:0.9375},0).wait(1).to({x:-7.0875,y:-9.3023,alpha:0.9844},0).wait(1).to({x:0,y:0,alpha:1},0).wait(115));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.character1_container = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{standby:0,jump:8,jump2:16,jump_double:25,jump_flower:37,jump_flower2:47,nod:57,nod2:66,nod_double:81,swing:92,swing_on:112,swing_off:121,notice:132,notice_jump:146,laugh:160,chord:181,question:196,question_on:224,question_off:236,exclamation:247,down:263,down2:290,shy_jump:308,shy_down:320,shock:338,sigh:345,happy:364,anger:379,anger2:399,damage:411,concent:428,"jump_flower2":437,emphasis:447,emphasis2:462,emphasis3:492,nod_chord:507});

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
	this.frame_195 = function() {
		this.stop();
	}
	this.frame_196 = function() {
		this.play();
	}
	this.frame_223 = function() {
		this.stop();
	}
	this.frame_224 = function() {
		this.play();
	}
	this.frame_235 = function() {
		this.stop();
	}
	this.frame_236 = function() {
		this.play();
	}
	this.frame_246 = function() {
		this.stop();
	}
	this.frame_247 = function() {
		this.play();
	}
	this.frame_262 = function() {
		this.stop();
	}
	this.frame_263 = function() {
		this.play();
	}
	this.frame_289 = function() {
		this.stop();
	}
	this.frame_290 = function() {
		this.play();
	}
	this.frame_307 = function() {
		this.stop();
	}
	this.frame_308 = function() {
		this.play();
	}
	this.frame_319 = function() {
		this.stop();
	}
	this.frame_320 = function() {
		this.play();
	}
	this.frame_337 = function() {
		this.stop();
	}
	this.frame_338 = function() {
		this.play();
	}
	this.frame_344 = function() {
		this.stop();
	}
	this.frame_345 = function() {
		this.play();
	}
	this.frame_363 = function() {
		this.stop();
	}
	this.frame_364 = function() {
		this.play();
	}
	this.frame_378 = function() {
		this.stop();
	}
	this.frame_379 = function() {
		this.play();
	}
	this.frame_398 = function() {
		this.stop();
	}
	this.frame_399 = function() {
		this.play();
	}
	this.frame_410 = function() {
		this.stop();
	}
	this.frame_411 = function() {
		this.play();
	}
	this.frame_427 = function() {
		this.stop();
	}
	this.frame_428 = function() {
		this.play();
	}
	this.frame_436 = function() {
		this.stop();
	}
	this.frame_437 = function() {
		this.play();
	}
	this.frame_446 = function() {
		this.stop();
	}
	this.frame_447 = function() {
		this.play();
	}
	this.frame_461 = function() {
		this.stop();
	}
	this.frame_462 = function() {
		this.play();
	}
	this.frame_491 = function() {
		this.stop();
	}
	this.frame_492 = function() {
		this.play();
	}
	this.frame_506 = function() {
		this.stop();
	}
	this.frame_507 = function() {
		this.play();
	}
	this.frame_521 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(1).call(this.frame_8).wait(7).call(this.frame_15).wait(1).call(this.frame_16).wait(8).call(this.frame_24).wait(1).call(this.frame_25).wait(11).call(this.frame_36).wait(1).call(this.frame_37).wait(9).call(this.frame_46).wait(1).call(this.frame_47).wait(9).call(this.frame_56).wait(1).call(this.frame_57).wait(8).call(this.frame_65).wait(1).call(this.frame_66).wait(14).call(this.frame_80).wait(1).call(this.frame_81).wait(10).call(this.frame_91).wait(1).call(this.frame_92).wait(19).call(this.frame_111).wait(1).call(this.frame_112).wait(8).call(this.frame_120).wait(1).call(this.frame_121).wait(10).call(this.frame_131).wait(1).call(this.frame_132).wait(13).call(this.frame_145).wait(1).call(this.frame_146).wait(13).call(this.frame_159).wait(1).call(this.frame_160).wait(20).call(this.frame_180).wait(1).call(this.frame_181).wait(14).call(this.frame_195).wait(1).call(this.frame_196).wait(27).call(this.frame_223).wait(1).call(this.frame_224).wait(11).call(this.frame_235).wait(1).call(this.frame_236).wait(10).call(this.frame_246).wait(1).call(this.frame_247).wait(15).call(this.frame_262).wait(1).call(this.frame_263).wait(26).call(this.frame_289).wait(1).call(this.frame_290).wait(17).call(this.frame_307).wait(1).call(this.frame_308).wait(11).call(this.frame_319).wait(1).call(this.frame_320).wait(17).call(this.frame_337).wait(1).call(this.frame_338).wait(6).call(this.frame_344).wait(1).call(this.frame_345).wait(18).call(this.frame_363).wait(1).call(this.frame_364).wait(14).call(this.frame_378).wait(1).call(this.frame_379).wait(19).call(this.frame_398).wait(1).call(this.frame_399).wait(11).call(this.frame_410).wait(1).call(this.frame_411).wait(16).call(this.frame_427).wait(1).call(this.frame_428).wait(8).call(this.frame_436).wait(1).call(this.frame_437).wait(9).call(this.frame_446).wait(1).call(this.frame_447).wait(14).call(this.frame_461).wait(1).call(this.frame_462).wait(29).call(this.frame_491).wait(1).call(this.frame_492).wait(14).call(this.frame_506).wait(1).call(this.frame_507).wait(14).call(this.frame_521).wait(7));

	// leef_1
	this.leef_1 = new lib.leef1_set();
	this.leef_1.name = "leef_1";
	this.leef_1.parent = this;
	this.leef_1.setTransform(-270.75,-520.85,0.5893,0.5893,0,0,0,1143,-4.9);

	this.timeline.addTween(cjs.Tween.get(this.leef_1).wait(528));

	// sun_effect
	this.instance = new lib.hikari2();
	this.instance.parent = this;
	this.instance.setTransform(-408.75,-621.25,1.6472,1.9152,0,3.0742,-12.7502,-42.5,-92.7);
	this.instance.alpha = 0.1484;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(528));

	// leef_2
	this.leef_2 = new lib.leef2_set();
	this.leef_2.name = "leef_2";
	this.leef_2.parent = this;
	this.leef_2.setTransform(-270.65,-521.05,0.9998,0.9996,0,1.0488,-177.4502,638.8,-107.9);

	this.timeline.addTween(cjs.Tween.get(this.leef_2).wait(528));

	// effect2
	this.instance_1 = new lib.drop1_v2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-104.95,-373.75,1.1645,1.1645);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(308).to({_off:false},0).wait(1).to({regX:1.2,regY:1.8,rotation:-33.7496,x:-130.55,y:-382.75,alpha:0.4141},0).wait(1).to({regX:0,regY:0,rotation:-44.9995,x:-142.2,y:-387.05,alpha:0.2188},0).to({_off:true},1).wait(1).to({_off:false,rotation:0,x:-104.95,y:-373.75,alpha:1},0).wait(1).to({regX:1.2,regY:1.8,rotation:-33.7496,x:-130.55,y:-382.75,alpha:0.4141},0).wait(1).to({regX:0,regY:0,rotation:-44.9995,x:-142.2,y:-387.05,alpha:0.2188},0).to({_off:true},1).wait(5).to({_off:false,rotation:0,x:-104.95,y:-373.75,alpha:1},0).wait(1).to({regX:1.2,regY:1.8,rotation:-33.7496,x:-130.55,y:-382.75,alpha:0.4141},0).wait(1).to({regX:0,regY:0,rotation:-44.9995,x:-142.2,y:-387.05,alpha:0.2188},0).to({_off:true},1).wait(1).to({_off:false,rotation:0,x:-104.95,y:-373.75,alpha:1},0).wait(1).to({regX:1.2,regY:1.8,rotation:-33.7496,x:-130.55,y:-382.75,alpha:0.4141},0).wait(1).to({regX:0,regY:0,rotation:-44.9995,x:-142.2,y:-387.05,alpha:0.2188},0).to({_off:true},1).wait(201));

	// effect
	this.instance_2 = new lib.spread_flower_pink("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-50.8,-279.6,1.4808,1.4808);

	this.instance_3 = new lib.good_effect("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-50.8,-279.6,1.481,1.481);

	this.instance_4 = new lib.notice();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-149.05,-339.45,1.4007,1.4007,0,-169.8306,10.1694,-29.1,20.4);
	this.instance_4._off = true;

	this.instance_5 = new lib.laugh("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-143.4,-364.35,1.4204,1.4204,35.8424,0,0,-30.3,20.6);
	this.instance_5._off = true;

	this.instance_6 = new lib.chord("synched",0,false);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-115.6,-282,1.0029,1.0029,-61.4995,0,0,-23.4,76.9);

	this.instance_7 = new lib.question();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-116.25,-366.6,1.053,1.053,-28.4906);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.instance_8 = new lib.mc_exclamation("synched",0,false);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-118.5,-381.3,1.0929,1.0929,-29.9996,0,0,0,0.1);

	this.instance_9 = new lib.drop1a("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-113,-362.7,1,1,0,0,0,-0.5,0.2);
	this.instance_9._off = true;

	this.instance_10 = new lib.drop2_v2("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(-106.75,-364,0.9876,0.9876,14.9998);
	this.instance_10._off = true;

	this.instance_11 = new lib.shock("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(-116.35,-367.65,1.3878,1.3878,-121.2396);

	this.instance_12 = new lib.sigh("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(-93.85,-213.25);
	this.instance_12.alpha = 0.6016;
	this.instance_12._off = true;

	this.instance_13 = new lib.heart("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(-115.65,-322.85,0.4532,0.4532);
	this.instance_13._off = true;

	this.instance_14 = new lib.angry("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(22.3,-342.95,0.5276,0.5276);
	this.instance_14._off = true;

	this.instance_15 = new lib.mc_punpun();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-108.75,-392.1,1.1377,1.1377);

	this.instance_16 = new lib.concent_wrapper("synched",0,false);
	this.instance_16.parent = this;
	this.instance_16.setTransform(-51.05,-280.15,1,1,0,0,0,-0.5,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},37).to({state:[{t:this.instance_3}]},10).to({state:[]},10).to({state:[{t:this.instance_4}]},76).to({state:[]},2).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).to({state:[{t:this.instance_4}]},2).to({state:[]},2).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},15).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).to({state:[{t:this.instance_6}]},1).to({state:[]},15).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_7}]},7).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[]},1).to({state:[{t:this.instance_7}]},6).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[]},1).to({state:[{t:this.instance_8}]},5).to({state:[{t:this.instance_9}]},16).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},9).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[]},1).to({state:[{t:this.instance_10}]},24).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[]},1).to({state:[{t:this.instance_10}]},5).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[]},1).to({state:[{t:this.instance_11}]},11).to({state:[]},1).to({state:[{t:this.instance_11}]},1).to({state:[]},1).to({state:[{t:this.instance_11}]},1).to({state:[]},1).to({state:[{t:this.instance_12}]},3).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[]},1).to({state:[{t:this.instance_13}]},11).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[]},1).to({state:[{t:this.instance_14}]},6).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},5).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[]},1).to({state:[{t:this.instance_15}]},2).to({state:[]},12).to({state:[{t:this.instance_16}]},17).to({state:[{t:this.instance_2}]},9).to({state:[{t:this.instance_4}]},10).to({state:[]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).to({state:[{t:this.instance_4}]},2).to({state:[]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).to({state:[{t:this.instance_4}]},17).to({state:[]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).to({state:[{t:this.instance_6}]},2).to({state:[]},20).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(133).to({_off:false},0).to({_off:true},2).wait(1).to({_off:false},0).wait(3).to({regX:-28.8,regY:20.5,x:-148.6,alpha:0.6944},0).wait(1).to({alpha:0.4444},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.1111},0).wait(1).to({alpha:0.0278},0).wait(1).to({regX:-29.1,regY:20.4,x:-149.05,alpha:0},0).to({_off:true},1).wait(2).to({_off:false,scaleX:1.187,scaleY:1.187,skewX:-169.8305,skewY:10.1695,x:-122.5,y:-369.65,alpha:1},0).to({_off:true},2).wait(1).to({_off:false},0).wait(3).to({regX:-28.8,regY:20.5,x:-122.1,alpha:0.6944},0).wait(1).to({alpha:0.4444},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.1111},0).wait(1).to({alpha:0.0278},0).wait(1).to({regX:-29.1,regY:20.4,x:-122.5,alpha:0},0).to({_off:true},1).wait(288).to({_off:false,scaleX:0.9129,scaleY:0.9129,skewX:-55.7994,skewY:124.2006,x:-2.7,y:-123.45,alpha:1},0).to({_off:true},2).wait(2).to({_off:false,skewX:-55.7994},0).wait(3).to({regX:-28.8,regY:20.5,scaleX:0.913,scaleY:0.913,x:-2.75,y:-123.15,alpha:0.6944},0).wait(1).to({alpha:0.4444},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.1111},0).wait(1).to({alpha:0.0278},0).wait(1).to({regX:-29.1,regY:20.4,scaleX:0.9129,scaleY:0.9129,x:-2.7,y:-123.45,alpha:0},0).to({_off:true},1).wait(2).to({_off:false,scaleX:0.8179,scaleY:0.8179,skewX:-92.684,skewY:87.316,x:-67.6,y:-96.65,alpha:1},0).to({_off:true},2).wait(2).to({_off:false},0).wait(3).to({regX:-28.8,regY:20.5,x:-67.45,y:-96.45,alpha:0.6944},0).wait(1).to({alpha:0.4444},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.1111},0).wait(1).to({alpha:0.0278},0).wait(1).to({regX:-29.1,regY:20.4,x:-67.6,y:-96.65,alpha:0},0).to({_off:true},1).wait(17).to({_off:false,regY:20.5,scaleX:1.0197,scaleY:1.0197,skewX:-147.9933,skewY:32.0067,x:-155.1,y:-88,alpha:1},0).to({_off:true},2).wait(2).to({_off:false},0).wait(3).to({regX:-28.8,scaleX:1.0196,scaleY:1.0196,x:-154.85,y:-87.8,alpha:0.6944},0).wait(1).to({alpha:0.4444},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.1111},0).wait(1).to({alpha:0.0278},0).wait(1).to({regX:-29.1,scaleX:1.0197,scaleY:1.0197,x:-155.1,y:-88,alpha:0},0).to({_off:true},1).wait(23));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(160).to({_off:false},0).wait(15).to({startPosition:0},0).wait(1).to({regX:-31.4,regY:22.1,scaleX:1.4203,scaleY:1.4203,x:-145.9,y:-363.5,alpha:0.5625,startPosition:1},0).wait(1).to({alpha:0.25,startPosition:2},0).wait(1).to({alpha:0.0625,startPosition:3},0).wait(1).to({regX:-30.3,regY:20.6,scaleX:1.4204,scaleY:1.4204,x:-143.4,y:-364.35,alpha:0,startPosition:19},0).to({_off:true},1).wait(348));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(197).to({_off:false},0).wait(1).to({regX:-0.2,regY:0.2,x:-123.2,y:-380,alpha:0.5556},0).wait(1).to({x:-127.3,y:-388.25,alpha:0.8889},0).wait(1).to({regX:0,regY:0,x:-128.6,y:-391.3,alpha:1},0).wait(1).to({regX:-0.2,regY:0.2,x:-128.35,y:-390.35},0).wait(1).to({x:-127.35,y:-388.5},0).wait(1).to({x:-125.65,y:-385.35},0).wait(1).to({regX:0,regY:0,x:-123.2,y:-381.3},0).to({x:-123.95,y:-382.65},2).wait(8).to({regX:-0.2,regY:0.2,x:-123.7,y:-381.75,alpha:0.9298},0).wait(1).to({x:-122.65,y:-379.8,alpha:0.692},0).wait(1).to({x:-121.05,y:-376.9,alpha:0.339},0).wait(1).to({x:-119.9,y:-374.75,alpha:0.0788},0).wait(1).to({regX:0,regY:0,x:-119.45,y:-374.45,alpha:0},0).to({_off:true},1).wait(6).to({_off:false,x:-116.7,y:-366.2},0).wait(1).to({regX:-0.2,regY:0.2,x:-123.65,y:-379.6,alpha:0.5556},0).wait(1).to({x:-127.75,y:-387.85,alpha:0.8889},0).wait(1).to({regX:0,regY:0,x:-129.05,y:-390.9,alpha:1},0).wait(1).to({regX:-0.2,regY:0.2,x:-128.8,y:-389.95},0).wait(1).to({x:-127.8,y:-388.1},0).wait(1).to({x:-126.1,y:-384.95},0).wait(1).to({regX:0,regY:0,x:-123.65,y:-380.9},0).to({x:-124.4,y:-382.25},2).wait(3).to({regX:-0.2,regY:0.2,x:-124.15,y:-381.35,alpha:0.9298},0).wait(1).to({x:-123.1,y:-379.4,alpha:0.692},0).wait(1).to({x:-121.5,y:-376.5,alpha:0.339},0).wait(1).to({x:-120.35,y:-374.35,alpha:0.0788},0).wait(1).to({regX:0,regY:0,x:-119.9,y:-374.05,alpha:0},0).to({_off:true},1).wait(286));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(263).to({_off:false},0).wait(1).to({regX:0.5,regY:-0.6,x:-112,y:-359},0).wait(1).to({y:-355.15},0).wait(1).to({y:-351.9},0).wait(1).to({y:-349.25},0).wait(1).to({y:-347.15},0).wait(1).to({y:-345.65},0).wait(1).to({y:-344.75},0).wait(1).to({regX:-0.5,regY:0.2,x:-113,y:-343.7},0).wait(9).to({startPosition:0},0).wait(1).to({regX:0.5,regY:-0.6,x:-112,y:-344.5,alpha:0.4444},0).wait(1).to({alpha:0.1111},0).wait(1).to({regX:-0.5,regY:0.2,x:-113,y:-343.7,alpha:0},0).to({_off:true},1).wait(244));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(308).to({_off:false},0).wait(1).to({scaleX:1.1203,scaleY:1.1203,rotation:-18.7494,x:-138.175,y:-359.3875,alpha:0.4141},0).wait(1).to({scaleX:1.1645,scaleY:1.1645,rotation:-29.9991,x:-148.65,y:-357.85,alpha:0.2188},0).to({_off:true},1).wait(1).to({_off:false,scaleX:0.9876,scaleY:0.9876,rotation:14.9998,x:-106.75,y:-364,alpha:1},0).wait(1).to({scaleX:1.1203,scaleY:1.1203,rotation:-18.7494,x:-138.175,y:-363.775,alpha:0.4141},0).wait(1).to({scaleX:1.1645,scaleY:1.1645,rotation:-29.9991,x:-148.65,y:-363.7,alpha:0.2188},0).to({_off:true},1).wait(5).to({_off:false,scaleX:0.9876,scaleY:0.9876,rotation:14.9998,x:-106.75,y:-364,alpha:1},0).wait(1).to({scaleX:1.1203,scaleY:1.1203,rotation:-18.7494,x:-138.175,y:-359.3875,alpha:0.4141},0).wait(1).to({scaleX:1.1645,scaleY:1.1645,rotation:-29.9991,x:-148.65,y:-357.85,alpha:0.2188},0).to({_off:true},1).wait(1).to({_off:false,scaleX:0.9876,scaleY:0.9876,rotation:14.9998,x:-106.75,y:-364,alpha:1},0).wait(1).to({scaleX:1.1203,scaleY:1.1203,rotation:-18.7494,x:-138.175,y:-363.775,alpha:0.4141},0).wait(1).to({scaleX:1.1645,scaleY:1.1645,rotation:-29.9991,x:-148.65,y:-363.7,alpha:0.2188},0).to({_off:true},1).wait(201));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(346).to({_off:false},0).wait(1).to({x:-94.85,y:-212.25,alpha:1},0).wait(1).to({regX:0.9,x:-94.95,y:-211.3,alpha:0.8965},0).wait(1).to({x:-96.3,y:-210.1,alpha:0.7636},0).wait(1).to({x:-97.9,y:-208.65,alpha:0.6048},0).wait(1).to({x:-99.7,y:-207.05,alpha:0.4229},0).wait(1).to({x:-101.7,y:-205.2,alpha:0.2205},0).wait(1).to({regX:0,x:-104.85,y:-203.25,alpha:0},0).to({_off:true},1).wait(174));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(365).to({_off:false},0).wait(1).to({regX:2.3,regY:1,scaleX:0.8633,scaleY:0.8633,x:-117.4,y:-337},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-120.65,y:-342.85},0).wait(1).to({regX:2.3,regY:1,scaleX:0.9896,scaleY:0.9896,x:-118.1,y:-340.7},0).wait(1).to({scaleX:0.9586,scaleY:0.9586,x:-117.55,y:-337.45},0).wait(1).to({regX:0,regY:0,scaleX:0.9068,scaleY:0.9068,x:-118.65,y:-332.85},0).to({scaleX:1,scaleY:1,x:-119.65,y:-336.85},2).wait(3).to({scaleX:1.1165,scaleY:1.1165},0).wait(1).to({regX:2.3,regY:1,scaleX:0.8111,scaleY:0.8111,x:-117.05,y:-335.85,alpha:0.3262},0).wait(1).to({regX:0,regY:0,scaleX:0.7092,scaleY:0.7092,x:-118.65,y:-336.6,alpha:0.1016},0).to({_off:true},1).wait(150));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(384).to({_off:false},0).wait(1).to({scaleX:1.0714,scaleY:1.0714,y:-346.7},0).wait(1).to({scaleX:1.2527,scaleY:1.2527,y:-347.95},0).wait(1).to({scaleX:0.9864,scaleY:0.9864},0).wait(1).to({scaleX:0.8976,scaleY:0.8976},0).wait(5).to({startPosition:0},0).wait(1).to({alpha:0.5009},0).wait(1).to({alpha:0.2014},0).wait(1).to({alpha:0.1016},0).to({_off:true},1).wait(131));

	// c
	this.c = new lib.character1_body();
	this.c.name = "c";
	this.c.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.c).wait(9).to({regX:-35,regY:-168,x:-35,y:-176.4},0).wait(1).to({regX:0,regY:0,x:0,y:-10},0).wait(1).to({regX:-35,regY:-168,x:-35,y:-177.2},0).wait(1).to({y:-174.45},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({y:1},0).wait(1).to({y:0},0).wait(1).to({y:2},0).wait(1).to({regX:-35,regY:-168,x:-35,y:-173.5},0).wait(1).to({regX:0,regY:0,x:0,y:-8},0).wait(1).to({regX:-35,regY:-168,x:-35,y:-173.75},0).wait(1).to({y:-166.8},0).wait(1).to({regX:0,regY:0,x:0,y:4},0).wait(1).to({regX:-35,regY:-168,x:-35,y:-164.75},0).wait(1).to({y:-167.15},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({y:2},0).wait(1).to({y:-7},0).wait(1).to({regX:-35,regY:-168,x:-35,y:-172.95},0).wait(1).to({y:-167.05},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({y:-7},0).wait(1).to({regX:-35,regY:-168,x:-35,y:-172.95},0).wait(1).to({y:-167.05},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({regX:-35,regY:-168,x:-35,y:-167.1},0).wait(1).to({y:-167.75},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({y:6},0).wait(1).to({regX:-35,regY:-168,x:-35,y:-177},0).wait(1).to({regX:0,regY:0,x:0,y:-14},0).wait(1).to({regX:-35,regY:-168,x:-35,y:-180.95},0).wait(1).to({y:-177.35},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({regX:-35,regY:-168,x:-35,y:-166},0).wait(1).to({regX:0,regY:0,x:0,y:-1},0).wait(1).to({regX:-35,regY:-168,x:-35,y:-168.25},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({y:6},0).wait(1).to({regX:-35,regY:-168,x:-35,y:-177},0).wait(1).to({regX:0,regY:0,x:0,y:-14},0).wait(1).to({regX:-35,regY:-168,x:-35,y:-180.95},0).wait(1).to({y:-177.35},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({regX:-35,regY:-168,x:-35,y:-166},0).wait(1).to({regX:0,regY:0,x:0,y:-1},0).wait(1).to({regX:-35,regY:-168,x:-35,y:-168.25},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:-35,regY:-168,x:-35,y:-167.4},0).wait(1).to({y:-165},0).wait(1).to({y:-162.65},0).wait(1).to({regX:0,regY:0,x:0,y:6},0).wait(1).to({regX:-35,regY:-168,x:-35,y:-162.65},0).wait(1).to({y:-165},0).wait(1).to({y:-167.4},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:-35,regY:-168,x:-35,y:-167.85},0).wait(1).to({y:-167.3},0).wait(1).to({y:-166.2},0).wait(1).to({y:-164.85},0).wait(1).to({y:-163.75},0).wait(1).to({y:-163.2},0).wait(1).to({regX:0,regY:0,x:0,y:5},0).wait(1).to({regX:-35,regY:-168,x:-35,y:-163.2},0).wait(1).to({y:-163.75},0).wait(1).to({y:-164.85},0).wait(1).to({y:-166.2},0).wait(1).to({y:-167.3},0).wait(1).to({y:-167.85},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({y:6},2).wait(1).to({regX:-35,regY:-168,x:-35,y:-163.25},0).wait(1).to({y:-166.8},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).to({y:6},2).wait(1).to({regX:-35,regY:-168,x:-35,y:-165.8},0).wait(1).to({y:-167.65},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:-35,regY:-168,rotation:-0.0253,x:-35.05,y:-167.95},0).wait(1).to({rotation:-0.1129,x:-35.25,y:-167.6},0).wait(1).to({rotation:-0.2845,x:-35.5,y:-166.95},0).wait(1).to({rotation:-0.5565,x:-35.95,y:-165.9},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-0.898,x:-36.5,y:-164.55},0).wait(1).to({rotation:-1.2075,x:-37,y:-163.35},0).wait(1).to({rotation:-1.4141,x:-37.35,y:-162.55},0).wait(1).to({rotation:-1.5201,x:-37.5,y:-162.05},0).wait(1).to({regX:0,regY:0,rotation:-1.5505,x:2,y:5},0).wait(1).to({regX:-35,regY:-168,rotation:-1.5305,x:-37.55,y:-162.05},0).wait(1).to({rotation:-1.4624,x:-37.45,y:-162.3},0).wait(1).to({rotation:-1.3309,x:-37.2,y:-162.9},0).wait(1).to({rotation:-1.121,x:-36.9,y:-163.7},0).wait(1).to({rotation:-0.8372,x:-36.4,y:-164.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.534,x:-35.9,y:-166},0).wait(1).to({rotation:-0.2881,x:-35.55,y:-166.95},0).wait(1).to({rotation:-0.1291,x:-35.3,y:-167.6},0).wait(1).to({rotation:-0.0467,x:-35.15,y:-167.9},0).wait(1).to({regX:0,regY:0,rotation:-0.0227,x:0,y:0},0).wait(1).to({rotation:0},0).wait(1).to({regX:-35,regY:-168,rotation:-0.0253,x:-35.05,y:-167.95},0).wait(1).to({rotation:-0.1129,x:-35.25,y:-167.6},0).wait(1).to({rotation:-0.2845,x:-35.5,y:-166.95},0).wait(1).to({rotation:-0.5565,x:-35.95,y:-165.9},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-0.898,x:-36.5,y:-164.55},0).wait(1).to({rotation:-1.2075,x:-37,y:-163.35},0).wait(1).to({rotation:-1.4141,x:-37.35,y:-162.55},0).wait(1).to({rotation:-1.5201,x:-37.5,y:-162.05},0).wait(1).to({regX:0,regY:0,rotation:-1.5505,x:2,y:5},0).wait(1).to({regX:-35,regY:-168,rotation:-1.5302,x:-37.55,y:-162.05},0).wait(1).to({rotation:-1.461,x:-37.45,y:-162.35},0).wait(1).to({rotation:-1.3276,x:-37.2,y:-162.9},0).wait(1).to({rotation:-1.1146,x:-36.85,y:-163.7},0).wait(1).to({rotation:-0.8266,x:-36.35,y:-164.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.5189,x:-35.85,y:-166.05},0).wait(1).to({rotation:-0.2693,x:-35.5,y:-167},0).wait(1).to({rotation:-0.1079,x:-35.2,y:-167.65},0).wait(1).to({rotation:-0.0243,x:-35.05,y:-167.95},0).wait(1).to({regX:0,regY:0,rotation:0,x:0,y:0},0).wait(16).to({regX:-35,regY:-168,x:-35,y:-173.55},0).wait(1).to({y:-175.45},0).wait(1).to({regX:0,regY:0,x:0,y:-8},0).wait(1).to({regX:-35,regY:-168,x:-35,y:-175.35},0).wait(1).to({y:-173.25},0).wait(1).to({regX:0,regY:0,x:0,y:2},0).wait(1).to({y:1},0).wait(1).to({y:0},0).wait(7).to({regX:-35,regY:-168,x:-35,y:-176.4},0).wait(1).to({regX:0,regY:0,x:0,y:-10},0).wait(1).to({regX:-35,regY:-168,x:-35,y:-177.2},0).wait(1).to({y:-174.45},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({y:1},0).wait(1).to({y:0},0).wait(15).to({regX:-35,regY:-168,rotation:-0.0431,x:-35.1,y:-167.7},0).wait(1).to({rotation:-0.1992,x:-35.35,y:-166.75},0).wait(1).to({rotation:-0.5118,x:-35.85,y:-164.75},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-0.9467,x:-36.55,y:-161.9},0).wait(1).to({rotation:-1.3096,x:-37.2,y:-159.55},0).wait(1).to({rotation:-1.4987,x:-37.5,y:-158.35},0).wait(1).to({regX:0,regY:0,rotation:-1.5505,x:2,y:9},0).wait(1).to({regX:-35,regY:-168,rotation:-1.508,x:-37.5,y:-158.3},0).wait(1).to({rotation:-1.3542,x:-37.25,y:-159.3},0).wait(1).to({rotation:-1.0462,x:-36.75,y:-161.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.6176,x:-36.05,y:-164.1},0).wait(1).to({rotation:-0.26,x:-35.45,y:-166.5},0).wait(1).to({rotation:-0.0738,x:-35.15,y:-167.65},0).wait(1).to({regX:0,regY:0,rotation:-0.0227,x:0,y:0},0).wait(1).to({rotation:0},0).wait(1).to({regX:-35,regY:-168,rotation:-0.147,x:-35.3,y:-167.45},0).wait(1).to({rotation:-0.7239,x:-36.2,y:-165.25},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-1.3727,x:-37.25,y:-162.7},0).wait(1).to({regX:0,regY:0,rotation:-1.5505,x:2,y:5},0).wait(18).to({regX:-35,regY:-168,rotation:-1.4913,x:-37.45,y:-162.2},0).wait(1).to({rotation:-1.2701,x:-37.1,y:-163.1},0).wait(1).to({rotation:-0.8372,x:-36.4,y:-164.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.3606,x:-35.65,y:-166.7},0).wait(1).to({rotation:-0.094,x:-35.2,y:-167.75},0).wait(1).to({regX:0,regY:0,rotation:-0.0227,x:0,y:0},0).wait(1).to({rotation:0},0).wait(1).to({regX:-35,regY:-168,rotation:-0.0894,x:-35.15,y:-167.7},0).wait(1).to({rotation:-0.4358,x:-35.75,y:-166.35},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-1.0316,x:-36.7,y:-164},0).wait(1).to({rotation:-1.4426,x:-37.4,y:-162.4},0).wait(1).to({regX:0,regY:0,rotation:-1.5505,x:2,y:5},0).wait(8).to({regX:-35,regY:-168,rotation:-1.4913,x:-37.45,y:-162.2},0).wait(1).to({rotation:-1.2701,x:-37.1,y:-163.1},0).wait(1).to({rotation:-0.8372,x:-36.4,y:-164.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.3606,x:-35.65,y:-166.7},0).wait(1).to({rotation:-0.094,x:-35.2,y:-167.75},0).wait(1).to({regX:0,regY:0,rotation:-0.0227,x:0,y:0},0).wait(5).to({rotation:0},0).wait(1).to({regX:-35,regY:-168,x:-35,y:-176.4},0).wait(1).to({regX:0,regY:0,x:0,y:-10},0).wait(1).to({regX:-35,regY:-168,x:-35,y:-177.2},0).wait(1).to({y:-174.45},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({y:1},0).wait(1).to({y:0},0).wait(9).to({x:1,y:4},1,cjs.Ease.get(1)).wait(1).to({regX:-35,regY:-168,x:-37.75,y:-160.25},0).wait(1).to({regX:0,regY:0,x:-4,y:9},0).to({x:0,y:13},4).wait(11).to({regX:-35,regY:-168,x:-35,y:-155.75},0).wait(1).to({y:-158.7},0).wait(1).to({y:-163.65},0).wait(1).to({y:-167.1},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(5).to({y:-1},0).wait(1).to({regX:-35,regY:-168,x:-35,y:-167},0).wait(1).to({y:-161.05},0).wait(1).to({regX:0,regY:0,x:0,y:9},0).to({y:8},2).wait(1).to({y:9},0).wait(6).to({regX:-35,regY:-168,x:-35,y:-160.2},0).wait(1).to({y:-164.5},0).wait(1).to({y:-168.8},0).wait(1).to({regX:0,regY:0,x:0,y:-2},0).wait(1).to({regX:-35,regY:-168,x:-35,y:-168.5},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:-35,regY:-168,x:-35,y:-174.7},0).wait(1).to({regX:0,regY:0,x:0,y:-8},0).wait(1).to({regX:-35,regY:-168,x:-35,y:-174.85},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:-35,regY:-168,x:-35,y:-176.4},0).wait(1).to({regX:0,regY:0,x:0,y:-10},0).wait(1).to({regX:-35,regY:-168,x:-35,y:-177.2},0).wait(1).to({y:-174.45},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({y:1},0).wait(1).to({y:0},0).wait(1).to({x:1,y:4},1,cjs.Ease.get(1)).wait(1).to({regX:-35,regY:-168,x:-37.75,y:-160.25},0).wait(1).to({regX:0,regY:0,x:-4,y:9},0).to({x:0,y:13},4).wait(8).to({regX:-35,regY:-168,x:-35,y:-157.25},0).wait(1).to({y:-165},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({y:2},0).wait(1).to({regX:-35,regY:-168,x:-35,y:-169},0).wait(1).to({regX:0,regY:0,x:0,y:-2},0).wait(1).to({regX:-35,regY:-168,x:-35,y:-168.15},0).wait(1).to({regX:0,regY:0,x:0,y:2},0).wait(1).to({regX:-35,regY:-168,x:-35,y:-167.5},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:-35,regY:-168,x:-35,y:-167.4},0).wait(1).to({y:-165},0).wait(1).to({y:-162.65},0).wait(1).to({regX:0,regY:0,x:0,y:6},0).wait(1).to({regX:-35,regY:-168,x:-35,y:-162.6},0).wait(1).to({y:-162.9},0).wait(1).to({regX:0,regY:0,x:0,y:5},0).wait(5).to({regX:-35,regY:-168,x:-35,y:-163.4},0).wait(1).to({y:-164.9},0).wait(1).to({y:-167.15},0).wait(1).to({y:-168.6},0).wait(1).to({regX:0,regY:0,x:0,y:-1},0).wait(1).to({regX:-35,regY:-168,x:-35,y:-168.25},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({y:5},0).wait(1).to({regX:-35,regY:-168,x:-35,y:-175.6},0).wait(1).to({regX:0,regY:0,x:0,y:-10},0).wait(1).to({regX:-35,regY:-168,x:-35,y:-177.2},0).wait(1).to({y:-174.45},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({y:1},0).wait(1).to({y:0},0).wait(9).to({regX:-35,regY:-168,x:-35,y:-175.5},0).wait(1).to({regX:0,regY:0,x:0,y:-10},0).wait(2).to({regX:-35,regY:-168,x:-35,y:-176},0).wait(1).to({y:-170},0).wait(1).to({regX:0,regY:0,x:0,y:8},0).to({y:5},2).wait(7).to({regX:-35,regY:-168,x:-35,y:-163.35},0).wait(1).to({y:-164.55},0).wait(1).to({y:-166.5},0).wait(1).to({y:-167.7},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({y:2},0).wait(1).to({y:-7},0).wait(1).to({regX:-35,regY:-168,x:-35,y:-172.95},0).wait(1).to({y:-167.05},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({y:-7},0).wait(1).to({regX:-35,regY:-168,x:-35,y:-172.95},0).wait(1).to({y:-167.05},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({regX:-35,regY:-168,x:-35,y:-167.1},0).wait(1).to({y:-167.75},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:-35,regY:-168,x:-32,y:-164.6},0).wait(1).to({regX:0,regY:0,x:4,y:4.55},0).to({x:-2,y:8.8},2).wait(1).to({regX:-35,regY:-168,x:-35.85,y:-158.55},0).wait(1).to({x:-35.2,y:-158.15},0).wait(1).to({regX:0,regY:0,x:0,y:10},0).wait(5).to({regX:-35,regY:-168,x:-35,y:-158.7},0).wait(1).to({y:-161.15},0).wait(1).to({y:-164.85},0).wait(1).to({y:-167.35},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(81).to({regX:-35,regY:-168,x:-35,y:-167.85},0).wait(1).to({y:-167.3},0).wait(1).to({y:-166.2},0).wait(1).to({y:-164.85},0).wait(1).to({y:-163.75},0).wait(1).to({y:-163.2},0).wait(1).to({regX:0,regY:0,x:0,y:5},0).wait(1).to({regX:-35,regY:-168,x:-35,y:-163.2},0).wait(1).to({y:-163.75},0).wait(1).to({y:-164.85},0).wait(1).to({y:-166.2},0).wait(1).to({y:-167.3},0).wait(1).to({y:-167.85},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(7));

	// sun_effect
	this.instance_17 = new lib.hikari();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-521.5,-504.7,1.6287,1.9151,0,5.7783,-7.5526,-42.5,-92.7);
	this.instance_17.alpha = 0.1484;
	this.instance_17.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(528));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-507.8,-1116.9,864.4000000000001,1249.4);


// stage content:
(lib._417_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{end0:14,scene1:15,end1:152,scene2:153,end2:276,scene3:277,end3:449,scene4:450,end4:565,scene5:566,end5:689,scene6:690,end6:823,scene7:824,end7:996});

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
	}
	this.frame_15 = function() {
		exportRoot._g.m1 = "王道のうさぎに､";
		exportRoot._g.m2 = "";
		exportRoot._g.m3 = "";
		exportRoot._g.m4 = "";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 1);
	}
	this.frame_28 = function() {
		this.ch1.gotoAndPlay("emphasis");
	}
	this.frame_41 = function() {
		exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
		exportRoot._g.m2 = "符とﾊｰﾄ､";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 2);
	}
	this.frame_55 = function() {
		this.ch1.gotoAndPlay("emphasis2");
	}
	this.frame_81 = function() {
		exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
		exportRoot._g.m3 = "んごろうさん!";
		exportRoot._u.setText();
	}
	this.frame_92 = function() {
		this.ch1.gotoAndPlay("nod");
		this.ch1.gotoAndPlay("emphasis3");
	}
	this.frame_116 = function() {
		exportRoot._g.m3 = "んごろうさん! もちろん､";
		exportRoot._u.setText();
	}
	this.frame_128 = function() {
		exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
		exportRoot._g.m4 = this.m.t[exportRoot._g.idx][4];
		exportRoot._u.setText();
		exportRoot._u.setFace("ch1", 2);
	}
	this.frame_138 = function() {
		this.ch1.gotoAndPlay("chord");
		exportRoot._u.setFace("ch1", 1);
	}
	this.frame_152 = function() {
		exportRoot._u.updateTalk();
		
		exportRoot._u.setFace("ch1", 1);
		
		this.ch1.leef_1.gotoAndPlay("run");
		this.ch1.leef_2.gotoAndPlay("run");
		
		this.ch1.gotoAndPlay("standby");
		this.ch2.gotoAndPlay("standby");
	}
	this.frame_153 = function() {
		exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
		exportRoot._g.m2 = "ですし、";
		exportRoot._g.m3 = "";
		exportRoot._g.m4 = "";
		exportRoot._u.setText();
		this.ch1.c.gotoAndStop("nf");
		exportRoot._u.setFace("ch2", 1);
	}
	this.frame_155 = function() {
		exportRoot._u.setFace("ch2", 1);
	}
	this.frame_194 = function() {
		exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
		exportRoot._g.m3 = "とけばいいかなって♪";
		exportRoot._u.setText();
		exportRoot._u.setFace("ch2", 7);
	}
	this.frame_210 = function() {
		this.ch2.gotoAndPlay("nod_chord");
	}
	this.frame_241 = function() {
		exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
		exportRoot._g.m4 = this.m.t[exportRoot._g.idx][4];
		exportRoot._u.setText();
		exportRoot._u.setFace("ch2", 1);
		this.ch2.gotoAndPlay("jump_flower");
	}
	this.frame_276 = function() {
		exportRoot._u.updateTalk();
		this.ch2.leef_1.gotoAndPlay("run");
		this.ch2.leef_2.gotoAndPlay("run");
		
		exportRoot._u.setFace("ch2", 1);
		
		this.ch2.gotoAndPlay("standby");
	}
	this.frame_277 = function() {
		exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
		exportRoot._g.m2 = "なんで! ";
		exportRoot._g.m3 = "";
		exportRoot._g.m4 = "";
		exportRoot._u.setText();
		exportRoot._u.setFace("ch2", 2);
	}
	this.frame_287 = function() {
		exportRoot._u.setFace("ch2", 6);
		
		this.ch2.gotoAndPlay("nod2");
	}
	this.frame_327 = function() {
		exportRoot._g.m2 = "なんで! …";
		exportRoot._u.setText();
	}
	this.frame_335 = function() {
		exportRoot._g.m2 = "なんで! ……";
		exportRoot._u.setText();
	}
	this.frame_343 = function() {
		exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
		exportRoot._g.m3 = "たか､ですか?";
		exportRoot._u.setText();
		this.ch2.gotoAndPlay("swing_on");
		exportRoot._u.setFace("ch2", 3);
	}
	this.frame_368 = function() {
		this.ch2.gotoAndPlay("swing_off");
	}
	this.frame_391 = function() {
		exportRoot._g.m3 = "たか､ですか? んー､";
		exportRoot._u.setText();
		exportRoot._u.setFace("ch2", 4);
		this.ch2.gotoAndPlay("nod2");
	}
	this.frame_409 = function() {
		exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
		exportRoot._g.m4 = "う?";
		exportRoot._u.setText();
		exportRoot._u.setFace("ch2", 3);
	}
	this.frame_429 = function() {
		exportRoot._g.m4 = this.m.t[exportRoot._g.idx][4];
		exportRoot._u.setText();
	}
	this.frame_449 = function() {
		exportRoot._u.updateTalk();
		exportRoot._u.setFace("ch2", 3);
		
		this.ch2.gotoAndPlay("standby");
	}
	this.frame_450 = function() {
		exportRoot._g.m1 = "楽しいことなら頑張れる?";
		exportRoot._g.m2 = "";
		exportRoot._g.m3 = "";
		exportRoot._g.m4 = "";
		exportRoot._u.setText();
		exportRoot._u.setFace("ch2", 3);
		this.ch2.gotoAndPlay("swing_on");
	}
	this.frame_491 = function() {
		exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
		exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
		exportRoot._u.setText();
		exportRoot._u.setFace("ch2", 2);
		
		this.ch2.gotoAndPlay("swing_off");
	}
	this.frame_530 = function() {
		exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
		exportRoot._g.m4 = "ら!";
		exportRoot._u.setText();
		exportRoot._u.setFace("ch2", 1);
		
		this.ch2.gotoAndPlay("nod");
	}
	this.frame_554 = function() {
		exportRoot._g.m4 = this.m.t[exportRoot._g.idx][4];
		exportRoot._u.setText();
		exportRoot._u.setFace("ch2", 5);
		this.ch2.gotoAndPlay("jump");
	}
	this.frame_565 = function() {
		exportRoot._u.updateTalk();
		exportRoot._u.setFace("ch2", 5);
		
		this.ch2.gotoAndPlay("standby");
	}
	this.frame_566 = function() {
		exportRoot._g.m1 = "あ､";
		exportRoot._g.m2 = "";
		exportRoot._g.m3 = "";
		exportRoot._g.m4 = "";
		exportRoot._u.setText();
		exportRoot._u.setFace("ch2", 3);
		this.ch2.gotoAndPlay("notice");
	}
	this.frame_574 = function() {
		exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
		exportRoot._g.m2 = "ました｡";
		exportRoot._g.m3 = "";
		exportRoot._g.m4 = "";
		exportRoot._u.setText();
		exportRoot._u.setFace("ch2", 2);
		this.ch2.gotoAndPlay("nod2");
	}
	this.frame_612 = function() {
		exportRoot._g.m2 = "ました｡ﾌﾟﾛﾃﾞｭｰｻｰさん､";
		exportRoot._g.m3 = "";
		exportRoot._g.m4 = "";
		exportRoot._u.setText();
		exportRoot._u.setFace("ch2", 1);
	}
	this.frame_630 = function() {
		exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
		exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
		exportRoot._g.m4 = "ら､";
		exportRoot._u.setText();
		this.ch2.gotoAndPlay("swing");
		exportRoot._u.setFace("ch2", 7);
	}
	this.frame_662 = function() {
		exportRoot._g.m4 = "ら､入れようかな!";
		exportRoot._u.setText();
	}
	this.frame_676 = function() {
		exportRoot._g.m4 = this.m.t[exportRoot._g.idx][4];
		exportRoot._u.setText();
		exportRoot._u.setFace("ch2", 5);
		this.ch2.gotoAndPlay("nod")
	}
	this.frame_689 = function() {
		exportRoot._u.updateTalk();
		exportRoot._u.setFace("ch2", 5);
		
		this.ch2.gotoAndPlay("standby");
	}
	this.frame_690 = function() {
		exportRoot._g.m1 = "あとは､";
		exportRoot._g.m2 = "";
		exportRoot._g.m3 = "";
		exportRoot._g.m4 = "";
		exportRoot._u.setText();
		exportRoot._u.setFace("ch2", 4);
	}
	this.frame_712 = function() {
		exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
		exportRoot._g.m2 = "ときの笑顔とか?";
		exportRoot._u.setText();
		exportRoot._u.setFace("ch2", 2);
	}
	this.frame_739 = function() {
		this.ch2.gotoAndPlay("swing");
	}
	this.frame_761 = function() {
		exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
		exportRoot._g.m3 = "で!";
		exportRoot._u.setText();
		exportRoot._u.setFace("ch2", 5);
	}
	this.frame_788 = function() {
		exportRoot._g.m3 = "で! そう考えると､";
		exportRoot._u.setText();
		exportRoot._u.setFace("ch2", 4);
	}
	this.frame_803 = function() {
		exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
		exportRoot._g.m4 = this.m.t[exportRoot._g.idx][4];
		exportRoot._u.setText();
		exportRoot._u.setFace("ch2", 2);
		this.ch2.gotoAndPlay("nod");
	}
	this.frame_823 = function() {
		exportRoot._u.updateTalk();
		exportRoot._u.setFace("ch2", 2);
		
		this.ch2.gotoAndPlay("standby");
	}
	this.frame_824 = function() {
		exportRoot._g.m1 = "ただ頑張るのは難しくても､";
		exportRoot._g.m2 = "";
		exportRoot._g.m3 = "";
		exportRoot._g.m4 = "";
		exportRoot._u.setText();
		exportRoot._u.setFace("ch2", 2);
	}
	this.frame_869 = function() {
		exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
		exportRoot._g.m2 = "しければ頑張れる?";
		exportRoot._u.setText();
		exportRoot._u.setFace("ch2", 3);
		this.ch2.gotoAndPlay("swing");
	}
	this.frame_906 = function() {
		exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
		exportRoot._g.m3 = "ですね!";
		exportRoot._u.setText();
		exportRoot._u.setFace("ch2", 1);
	}
	this.frame_945 = function() {
		// finish指定時は exportRoot._g.m の後ろの数字をsetTextの2つ目の引数に指定する
		exportRoot._g.m5 = "ﾌﾟﾛﾃﾞｭｰｻｰさんに､";
		exportRoot._u.setText("finish", 5);
	}
	this.frame_966 = function() {
		exportRoot._g.m5 = this.m.t[exportRoot._g.idx][5];
		exportRoot._g.m6 = this.m.t[exportRoot._g.idx][6];
		exportRoot._u.setText("finish", 5);
	}
	this.frame_996 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1).call(this.frame_15).wait(13).call(this.frame_28).wait(13).call(this.frame_41).wait(14).call(this.frame_55).wait(26).call(this.frame_81).wait(11).call(this.frame_92).wait(24).call(this.frame_116).wait(12).call(this.frame_128).wait(10).call(this.frame_138).wait(14).call(this.frame_152).wait(1).call(this.frame_153).wait(2).call(this.frame_155).wait(39).call(this.frame_194).wait(16).call(this.frame_210).wait(31).call(this.frame_241).wait(35).call(this.frame_276).wait(1).call(this.frame_277).wait(10).call(this.frame_287).wait(40).call(this.frame_327).wait(8).call(this.frame_335).wait(8).call(this.frame_343).wait(25).call(this.frame_368).wait(23).call(this.frame_391).wait(18).call(this.frame_409).wait(20).call(this.frame_429).wait(20).call(this.frame_449).wait(1).call(this.frame_450).wait(41).call(this.frame_491).wait(39).call(this.frame_530).wait(24).call(this.frame_554).wait(11).call(this.frame_565).wait(1).call(this.frame_566).wait(8).call(this.frame_574).wait(38).call(this.frame_612).wait(18).call(this.frame_630).wait(32).call(this.frame_662).wait(14).call(this.frame_676).wait(13).call(this.frame_689).wait(1).call(this.frame_690).wait(22).call(this.frame_712).wait(27).call(this.frame_739).wait(22).call(this.frame_761).wait(27).call(this.frame_788).wait(15).call(this.frame_803).wait(20).call(this.frame_823).wait(1).call(this.frame_824).wait(45).call(this.frame_869).wait(37).call(this.frame_906).wait(39).call(this.frame_945).wait(21).call(this.frame_966).wait(30).call(this.frame_996).wait(5));

	// shield
	this.instance = new lib.shield();
	this.instance.parent = this;
	this.instance.setTransform(120,160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1001));

	// sender
	this.sender = new lib.sender();
	this.sender.name = "sender";
	this.sender.parent = this;
	this.sender.setTransform(-100,0);
	this.sender._off = true;

	this.timeline.addTween(cjs.Tween.get(this.sender).wait(996).to({_off:false},0).wait(5));

	// SP_loader
	this.loader = new lib.voice_loader_container();
	this.loader.name = "loader";
	this.loader.parent = this;
	this.loader.setTransform(190.05,12,1,1,0,0,0,-50.1,11);

	this.timeline.addTween(cjs.Tween.get(this.loader).wait(1001));

	// place
	this.instance_1 = new lib.tie();
	this.instance_1.parent = this;
	this.instance_1.setTransform(120,155);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({alpha:0.1992},3,cjs.Ease.get(1)).to({_off:true},1).wait(982));

	// SP_pusher
	this.instance_2 = new lib.pusher_next();
	this.instance_2.parent = this;
	this.instance_2.setTransform(120,290);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off:false},0).to({_off:true},3).wait(986));

	// fader
	this.instance_3 = new lib.dark();
	this.instance_3.parent = this;
	this.instance_3.setTransform(120,155);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},15).wait(986));

	// window
	this.window_1 = new lib.window_container();
	this.window_1.name = "window_1";
	this.window_1.parent = this;
	this.window_1.setTransform(2,321.1);

	this.timeline.addTween(cjs.Tween.get(this.window_1).wait(15).to({y:301.1},0).wait(1).to({regX:132.8,regY:98.8,x:134.8,y:398.6},0).wait(1).to({y:394.65},0).wait(1).to({y:388},0).wait(1).to({y:378.75},0).wait(1).to({y:367.25},0).wait(1).to({y:354.25},0).wait(1).to({y:340.85},0).wait(1).to({y:328.45},0).wait(1).to({y:318.45},0).wait(1).to({y:312},0).wait(1).to({regX:0,regY:0,x:2,y:211},0).wait(1).to({regX:132.8,regY:98.8,x:134.8,y:310.3},0).wait(1).to({y:311.9},0).wait(1).to({regX:0,regY:0,x:2,y:214},0).wait(906).to({regX:132.8,regY:98.8,x:134.8,y:313.9},0).wait(1).to({y:317.75},0).wait(1).to({y:325},0).wait(1).to({y:336.4},0).wait(1).to({y:351.7},0).wait(1).to({y:368.85},0).wait(1).to({y:384.15},0).wait(1).to({y:395.55},0).wait(1).to({y:402.8},0).wait(1).to({y:406.65},0).wait(1).to({regX:0,regY:0,x:2,y:309},0).to({_off:true},1).wait(55));

	// window
	this.window_2 = new lib.finish_text_container();
	this.window_2.name = "window_2";
	this.window_2.parent = this;
	this.window_2.setTransform(120,322);
	this.window_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.window_2).wait(945).to({_off:false},0).wait(1).to({regX:16.8,regY:-1.3,x:136.8,y:320.35},0).wait(1).to({y:319.2},0).wait(1).to({y:317.05},0).wait(1).to({y:313.65},0).wait(1).to({y:308.75},0).wait(1).to({y:302.4},0).wait(1).to({y:295.4},0).wait(1).to({y:289.15},0).wait(1).to({y:284.5},0).wait(1).to({y:281.55},0).wait(1).to({y:280.05},0).wait(1).to({regX:0,regY:0,x:120,y:280.9},0).to({y:282.9},3).wait(41));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]},945).wait(56));

	// glitters
	this.glitters = new lib.glitters();
	this.glitters.name = "glitters";
	this.glitters.parent = this;
	this.glitters._off = true;

	this.timeline.addTween(cjs.Tween.get(this.glitters).wait(945).to({_off:false},0).wait(56));

	// SP_blur
	this.ranko_finish_blur = new lib.ranko_finish_blur();
	this.ranko_finish_blur.name = "ranko_finish_blur";
	this.ranko_finish_blur.parent = this;
	this.ranko_finish_blur._off = true;
	this.ranko_finish_blur.filters = [new cjs.ColorFilter(1, 1, 1, 1, 220, 220, 220, 0)];
	this.ranko_finish_blur.cache(-2,-2,244,314);

	this.timeline.addTween(cjs.Tween.get(this.ranko_finish_blur).wait(945).to({_off:false},0).wait(1).to({regX:120,regY:155,x:120,y:155,alpha:0.9974},0).wait(1).to({alpha:0.9894},0).wait(1).to({alpha:0.9754},0).wait(1).to({alpha:0.9546},0).wait(1).to({alpha:0.9264},0).wait(1).to({alpha:0.8899},0).wait(1).to({alpha:0.8443},0).wait(1).to({alpha:0.7888},0).wait(1).to({alpha:0.7226},0).wait(1).to({alpha:0.6459},0).wait(1).to({alpha:0.5593},0).wait(1).to({alpha:0.4655},0).wait(1).to({alpha:0.3691},0).wait(1).to({alpha:0.2767},0).wait(1).to({alpha:0.1954},0).wait(1).to({alpha:0.1307},0).wait(1).to({alpha:0.0852},0).wait(1).to({alpha:0.059},0).wait(1).to({regX:0,regY:0,x:0,y:0,alpha:0.0508},0).to({_off:true},1).wait(36));

	// character_face
	this.fns = new lib.finish_1();
	this.fns.name = "fns";
	this.fns.parent = this;
	this.fns.setTransform(120,168,1,1,0,0,0,120,168);
	this.fns._off = true;

	this.timeline.addTween(cjs.Tween.get(this.fns).wait(945).to({_off:false},0).wait(56));

	// white_mask
	this.instance_9 = new lib.white_mask();
	this.instance_9.parent = this;
	this.instance_9.setTransform(120,155,1,1,0,0,0,120,155);
	this.instance_9.alpha = 0.0508;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(933).to({_off:false},0).to({alpha:0.8984},11).to({_off:true},1).wait(56));

	// overlay_black
	this.instance_10 = new lib.dark();
	this.instance_10.parent = this;
	this.instance_10.setTransform(120,155);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(15).to({_off:false},0).to({alpha:0},3).to({_off:true},1).wait(805).to({_off:false,alpha:1},0).to({alpha:0},7).to({_off:true},1).wait(169));

	// powder
	this.instance_11 = new lib.glitter_rise();
	this.instance_11.parent = this;
	this.instance_11.setTransform(194.25,-43.4,1.0489,1.0489,-2.749,0,0,5.1,-0.4);

	this.instance_12 = new lib.glitter_rise();
	this.instance_12.parent = this;
	this.instance_12.setTransform(125.5,-5.3,1.155,1.0853,-4.8774,0,0,0,6.5);
	this.instance_12.alpha = 0.6992;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11}]}).to({state:[]},15).wait(986));

	// overlay_top
	this.instance_13 = new lib.overlay_black();
	this.instance_13.parent = this;
	this.instance_13.setTransform(120,-113);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(15).to({_off:false},0).wait(96).to({y:-199.65},14,cjs.Ease.quadInOut).to({_off:true},1).wait(875));

	// overlay_bottom
	this.instance_14 = new lib.overlay_black();
	this.instance_14.parent = this;
	this.instance_14.setTransform(120,350);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(15).to({_off:false},0).wait(96).to({y:508},14,cjs.Ease.quadInOut).to({_off:true},1).wait(875));

	// kira
	this.instance_15 = new lib.mc_kirakira("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(54.55,127.55,1,1,0,0,0,9.7,11.3);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(15).to({_off:false},0).to({x:43.15,y:125.8},96,cjs.Ease.none).to({scaleX:0.71,scaleY:0.71,x:54.55,y:258.65,alpha:0.0117},27,cjs.Ease.quadInOut).to({_off:true},1).wait(862));

	// powapowa2
	this.lighter_tgt = new lib.mc_bubble_set();
	this.lighter_tgt.name = "lighter_tgt";
	this.lighter_tgt.parent = this;
	this.lighter_tgt.setTransform(120.7,250.2,0.6918,0.6918,89.9785);
	this.lighter_tgt.alpha = 0;
	this.lighter_tgt._off = true;

	this.timeline.addTween(cjs.Tween.get(this.lighter_tgt).wait(15).to({_off:false},0).to({alpha:0.4492},14).wait(67).to({alpha:0},14).to({_off:true},1).wait(890));

	// effect
	this.instance_16 = new lib.gliter_container();
	this.instance_16.parent = this;
	this.instance_16.setTransform(213.2,-17.85,1.0599,1.0599,-4.2877,0,0,-0.1,2.5);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(15).to({_off:false},0).to({x:143.7,y:-12.25},96,cjs.Ease.none).wait(890));

	// book
	this.instance_17 = new lib.book_1("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(-444.85,217.3,0.3752,0.3751,0,0,0,557.8,250.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(15).to({x:168.95,y:190.75},0).to({x:156.45,y:190.35},96,cjs.Ease.none).to({regX:557.4,regY:250.3,scaleX:0.2595,scaleY:0.2594,x:130.45,y:293.45},27,cjs.Ease.quadInOut).wait(15).to({startPosition:0},0).to({alpha:0.0117},13,cjs.Ease.get(1)).to({_off:true},1).wait(834));

	// ch
	this.ch1 = new lib.character1_container();
	this.ch1.name = "ch1";
	this.ch1.parent = this;
	this.ch1.setTransform(-178,570,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.ch1).wait(15).to({scaleX:0.9304,scaleY:0.9304,x:201.5,y:178.4},0).to({x:189,y:178},96,cjs.Ease.none).to({regX:0.1,regY:0.1,scaleX:0.6436,scaleY:0.6436,x:152.95,y:284.9},27,cjs.Ease.quadInOut).wait(15).to({alpha:0.0117},13,cjs.Ease.get(1)).to({_off:true},1).wait(834));

	// bg
	this.bg1 = new lib.bg_zoom_half();
	this.bg1.name = "bg1";
	this.bg1.parent = this;
	this.bg1.setTransform(-599.6,-278.1,1.27,1.27);

	this.timeline.addTween(cjs.Tween.get(this.bg1).wait(15).to({scaleX:0.9304,scaleY:0.9304,x:-40.3,y:-240.25},0).to({x:-52.8,y:-240.65},96,cjs.Ease.none).to({regX:-0.3,regY:-0.1,scaleX:0.6436,scaleY:0.6436,x:-14.4,y:-4.7},27,cjs.Ease.quadInOut).wait(15).to({alpha:0.0117},13,cjs.Ease.get(1)).to({_off:true},1).wait(834));

	// book
	this.instance_18 = new lib.book_1("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(-796.4,-220.4,0.3168,0.3167,0,0,0,557.3,250.3);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(15).to({_off:false},0).wait(138).to({x:130.45,y:330.7},0).wait(1).to({regX:558,regY:250,x:130.7,y:330.65},0).wait(1).to({y:330.8},0).wait(1).to({y:331.1},0).wait(1).to({y:331.5},0).wait(1).to({y:332.15},0).wait(1).to({y:333.05},0).wait(1).to({y:334.25},0).wait(1).to({y:335.5},0).wait(1).to({y:336.7},0).wait(1).to({y:337.6},0).wait(1).to({y:338.25},0).wait(1).to({y:338.65},0).wait(1).to({y:338.95},0).wait(1).to({y:339.1},0).wait(1).to({regX:557.3,regY:250.3,x:130.45,y:339.2},0).wait(148).to({startPosition:0},0).to({regX:557.2,regY:250.6,scaleX:0.3501,scaleY:0.35,x:132.4,y:371.15},28,cjs.Ease.quadInOut).wait(346).to({startPosition:0},0).wait(1).to({regX:558,regY:250,x:132.7,y:370.95},0).wait(1).to({scaleX:0.3503,scaleY:0.3503,y:371.15},0).wait(1).to({scaleX:0.3507,scaleY:0.3506,x:132.75,y:371.45},0).wait(1).to({scaleX:0.3512,scaleY:0.3512,y:371.95},0).wait(1).to({scaleX:0.352,scaleY:0.3519,x:132.8,y:372.6},0).wait(1).to({scaleX:0.353,scaleY:0.3529,y:373.45},0).wait(1).to({scaleX:0.3543,scaleY:0.3542,x:132.9,y:374.5},0).wait(1).to({scaleX:0.3559,scaleY:0.3558,x:133,y:375.85},0).wait(1).to({scaleX:0.3578,scaleY:0.3578,x:133.05,y:377.5},0).wait(1).to({scaleX:0.3602,scaleY:0.3601,x:133.2,y:379.5},0).wait(1).to({scaleX:0.363,scaleY:0.3629,x:133.35,y:381.85},0).wait(1).to({scaleX:0.3662,scaleY:0.3662,x:133.5,y:384.6},0).wait(1).to({scaleX:0.3698,scaleY:0.3698,x:133.65,y:387.6},0).wait(1).to({scaleX:0.3736,scaleY:0.3736,x:133.9,y:390.85},0).wait(1).to({scaleX:0.3775,scaleY:0.3774,x:134.05,y:394.05},0).wait(1).to({scaleX:0.3811,scaleY:0.381,x:134.25,y:397.1},0).wait(1).to({scaleX:0.3843,scaleY:0.3842,x:134.4,y:399.8},0).wait(1).to({scaleX:0.3871,scaleY:0.387,x:134.55,y:402.15},0).wait(1).to({scaleX:0.3895,scaleY:0.3894,x:134.65,y:404.15},0).wait(1).to({scaleX:0.3914,scaleY:0.3913,x:134.75,y:405.85},0).wait(1).to({scaleX:0.393,scaleY:0.3929,x:134.85,y:407.15},0).wait(1).to({scaleX:0.3943,scaleY:0.3942,x:134.9,y:408.25},0).wait(1).to({scaleX:0.3953,scaleY:0.3952,x:134.95,y:409.05},0).wait(1).to({scaleX:0.3961,scaleY:0.396,x:135,y:409.75},0).wait(1).to({scaleX:0.3966,scaleY:0.3965,y:410.2},0).wait(1).to({scaleX:0.397,scaleY:0.3969,x:135.05,y:410.45},0).wait(1).to({scaleX:0.3972,scaleY:0.3971,x:135,y:410.65},0).wait(1).to({regX:556.9,regY:250.5,scaleY:0.3972,x:134.7,y:411},0).wait(106).to({regY:250.8,scaleX:0.2317,scaleY:0.2316,x:123.5,y:262.45},0).to({_off:true},121).wait(56));

	// ch2
	this.ch2 = new lib.character1_container();
	this.ch2.name = "ch2";
	this.ch2.parent = this;
	this.ch2.setTransform(-768.85,-230.7,0.7858,0.7858,0,0,0,0.2,0.2);
	this.ch2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ch2).wait(15).to({_off:false},0).wait(138).to({x:158,y:320.4},0).wait(1).to({regX:-151.1,regY:-462.5,x:39.15,y:-43.15},0).wait(1).to({y:-43},0).wait(1).to({y:-42.7},0).wait(1).to({y:-42.3},0).wait(1).to({y:-41.65},0).wait(1).to({y:-40.75},0).wait(1).to({y:-39.55},0).wait(1).to({y:-38.3},0).wait(1).to({y:-37.1},0).wait(1).to({y:-36.2},0).wait(1).to({y:-35.55},0).wait(1).to({y:-35.15},0).wait(1).to({y:-34.85},0).wait(1).to({y:-34.7},0).wait(1).to({regX:0.2,regY:0.2,x:158,y:328.9},0).wait(148).to({regX:0.3,regY:0.3,scaleX:0.8683,scaleY:0.8683,x:162.85,y:359.75},28,cjs.Ease.quadInOut).wait(347).to({regX:-151.1,regY:-462.5,scaleX:0.8684,scaleY:0.8684,x:31.4,y:-42.1},0).wait(1).to({scaleX:0.869,scaleY:0.869,x:31.3,y:-42.2},0).wait(1).to({scaleX:0.8699,scaleY:0.8699,x:31.2,y:-42.3},0).wait(1).to({scaleX:0.8712,scaleY:0.8712,x:31.1,y:-42.5},0).wait(1).to({scaleX:0.8731,scaleY:0.8731,x:30.9,y:-42.75},0).wait(1).to({scaleX:0.8756,scaleY:0.8756,x:30.7,y:-43.05},0).wait(1).to({scaleX:0.8788,scaleY:0.8788,x:30.35,y:-43.55},0).wait(1).to({scaleX:0.8827,scaleY:0.8827,x:29.95,y:-44.05},0).wait(1).to({scaleX:0.8876,scaleY:0.8876,x:29.55,y:-44.7},0).wait(1).to({scaleX:0.8935,scaleY:0.8935,x:28.95,y:-45.5},0).wait(1).to({scaleX:0.9004,scaleY:0.9004,x:28.3,y:-46.45},0).wait(1).to({scaleX:0.9084,scaleY:0.9084,x:27.5,y:-47.55},0).wait(1).to({scaleX:0.9173,scaleY:0.9173,x:26.65,y:-48.7},0).wait(1).to({scaleX:0.9268,scaleY:0.9268,x:25.75,y:-50.05},0).wait(1).to({scaleX:0.9363,scaleY:0.9363,x:24.85,y:-51.3},0).wait(1).to({scaleX:0.9452,scaleY:0.9452,x:24,y:-52.5},0).wait(1).to({scaleX:0.9532,scaleY:0.9532,x:23.15,y:-53.6},0).wait(1).to({scaleX:0.9602,scaleY:0.9602,x:22.5,y:-54.5},0).wait(1).to({scaleX:0.966,scaleY:0.966,x:21.95,y:-55.35},0).wait(1).to({scaleX:0.9709,scaleY:0.9709,x:21.5,y:-56},0).wait(1).to({scaleX:0.9748,scaleY:0.9748,x:21.1,y:-56.5},0).wait(1).to({scaleX:0.978,scaleY:0.978,x:20.75,y:-56.95},0).wait(1).to({scaleX:0.9805,scaleY:0.9805,x:20.55,y:-57.25},0).wait(1).to({scaleX:0.9824,scaleY:0.9824,x:20.35,y:-57.55},0).wait(1).to({scaleX:0.9838,scaleY:0.9838,x:20.25,y:-57.75},0).wait(1).to({scaleX:0.9847,scaleY:0.9847,x:20.15,y:-57.85},0).wait(1).to({scaleX:0.9852,scaleY:0.9852,x:20.1,y:-57.95},0).wait(1).to({regX:0.2,regY:0.4,scaleX:0.9854,scaleY:0.9854,x:169.25,y:398.1},0).wait(106).to({regX:0.4,scaleX:0.5746,scaleY:0.5746,x:143.7,y:254.9},0).to({_off:true},121).wait(56));

	// bg2
	this.bg1_1 = new lib.bg_zoom_half();
	this.bg1_1.name = "bg1_1";
	this.bg1_1.parent = this;
	this.bg1_1.setTransform(-973.2,-584.4,0.7858,0.7858,0,0,0,-0.3,-0.2);
	this.bg1_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.bg1_1).wait(15).to({_off:false},0).wait(138).to({x:-46.35,y:-33.3},0).wait(1).to({regX:225,regY:282,x:130.7,y:188.5},0).wait(1).to({y:188.65},0).wait(1).to({y:188.95},0).wait(1).to({y:189.35},0).wait(1).to({y:190},0).wait(1).to({y:190.9},0).wait(1).to({y:192.1},0).wait(1).to({y:193.35},0).wait(1).to({y:194.55},0).wait(1).to({y:195.45},0).wait(1).to({y:196.1},0).wait(1).to({y:196.5},0).wait(1).to({y:196.8},0).wait(1).to({y:196.95},0).wait(1).to({regX:-0.3,regY:-0.2,x:-46.35,y:-24.8},0).wait(148).to({regX:-0.4,regY:-0.3,scaleX:0.8683,scaleY:0.8683,x:-63,y:-31.2},28,cjs.Ease.quadInOut).wait(347).to({regX:225,regY:282,scaleX:0.8684,scaleY:0.8684,x:132.75,y:213.95},0).wait(1).to({scaleX:0.869,scaleY:0.869,y:214.05},0).wait(1).to({scaleX:0.8699,scaleY:0.8699,y:214.2},0).wait(1).to({scaleX:0.8712,scaleY:0.8712,x:132.8,y:214.4},0).wait(1).to({scaleX:0.8731,scaleY:0.8731,x:132.85,y:214.7},0).wait(1).to({scaleX:0.8756,scaleY:0.8756,x:132.9,y:215.1},0).wait(1).to({scaleX:0.8788,scaleY:0.8788,x:132.95,y:215.6},0).wait(1).to({scaleX:0.8827,scaleY:0.8827,x:133,y:216.25},0).wait(1).to({scaleX:0.8876,scaleY:0.8876,x:133.15,y:217},0).wait(1).to({scaleX:0.8935,scaleY:0.8935,x:133.3,y:217.95},0).wait(1).to({scaleX:0.9004,scaleY:0.9004,x:133.4,y:219.05},0).wait(1).to({scaleX:0.9084,scaleY:0.9084,x:133.6,y:220.3},0).wait(1).to({scaleX:0.9173,scaleY:0.9173,x:133.75,y:221.75},0).wait(1).to({scaleX:0.9268,scaleY:0.9268,x:134,y:223.25},0).wait(1).to({scaleX:0.9363,scaleY:0.9363,x:134.15,y:224.8},0).wait(1).to({scaleX:0.9452,scaleY:0.9452,x:134.3,y:226.2},0).wait(1).to({scaleX:0.9532,scaleY:0.9532,x:134.5,y:227.45},0).wait(1).to({scaleX:0.9602,scaleY:0.9602,x:134.65,y:228.55},0).wait(1).to({scaleX:0.966,scaleY:0.966,x:134.75,y:229.5},0).wait(1).to({scaleX:0.9709,scaleY:0.9709,x:134.9,y:230.3},0).wait(1).to({scaleX:0.9748,scaleY:0.9748,x:134.95,y:230.9},0).wait(1).to({scaleX:0.978,scaleY:0.978,x:135,y:231.45},0).wait(1).to({scaleX:0.9805,scaleY:0.9805,x:135.05,y:231.8},0).wait(1).to({scaleX:0.9824,scaleY:0.9824,x:135.15,y:232.15},0).wait(1).to({scaleX:0.9838,scaleY:0.9838,y:232.3},0).wait(1).to({scaleX:0.9847,scaleY:0.9847,y:232.5},0).wait(1).to({scaleX:0.9852,scaleY:0.9852,y:232.55},0).wait(1).to({regX:-0.4,regY:-0.3,scaleX:0.9854,scaleY:0.9854,x:-86.9,y:-45.55},0).wait(106).to({regX:-0.5,regY:-0.4,scaleX:0.5746,scaleY:0.5746,x:-5.8,y:-3.9},0).to({_off:true},121).wait(56));

	// SP_btn_window
	this.toggle_btn = new lib.btn_window();
	this.toggle_btn.name = "toggle_btn";
	this.toggle_btn.parent = this;
	this.toggle_btn.setTransform(200,200);

	this.timeline.addTween(cjs.Tween.get(this.toggle_btn).to({_off:true},933).wait(68));

	// btn
	this.stage_btn = new lib.button();
	this.stage_btn.name = "stage_btn";
	this.stage_btn.parent = this;
	this.stage_btn.setTransform(120,155);

	this.timeline.addTween(cjs.Tween.get(this.stage_btn).to({_off:true},945).wait(51).to({_off:false},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1391,-966.9,2011,1629.9);
// library properties:
lib.properties = {
	id: '_417_2',
	width: 240,
	height: 310,
	fps: 12,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg", id:"_417_2_bg"},
		{src:"images/book.png", id:"_417_2_book"},
		{src:"images/ch_base.png", id:"_417_2_ch_base"},
		{src:"images/ch_face12.png", id:"_417_2_ch_face12"},
		{src:"images/ch_face3.png", id:"_417_2_ch_face3"},
		{src:"images/ch_face4.png", id:"_417_2_ch_face4"},
		{src:"images/ch_face5.png", id:"_417_2_ch_face5"},
		{src:"images/ch_face6.png", id:"_417_2_ch_face6"},
		{src:"images/ch_face8.png", id:"_417_2_ch_face8"},
		{src:"images/ch_face9.png", id:"_417_2_ch_face9"},
		{src:"images/ch_hair1.png", id:"_417_2_ch_hair1"},
		{src:"images/ch_hair2.png", id:"_417_2_ch_hair2"},
		{src:"images/ch_hair3.png", id:"_417_2_ch_hair3"},
		{src:"images/finish.jpg", id:"_417_2_finish"},
		{src:"images/finish_blur.jpg", id:"_417_2_finish_blur"},
		{src:"images/leef_a.png", id:"_417_2_leef_a"},
		{src:"images/leef_b.png", id:"_417_2_leef_b"},
		{src:"images/leef_d.png", id:"_417_2_leef_d"},
		{src:"images/leef_e.png", id:"_417_2_leef_e"},
		{src:"images/leef_f.png", id:"_417_2_leef_f"},
		{src:"images/leef_g.png", id:"_417_2_leef_g"},
		{src:"images/leef_l.png", id:"_417_2_leef_l"},
		{src:"images/sun_light.png", id:"_417_2_sun_light"},
		{src:"images/tie_fp.png", id:"_417_2_tie_fp"},
		{src:"images/tie_sp.png", id:"_417_2_tie_sp"}
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
an.compositions['_417_2'] = {
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;