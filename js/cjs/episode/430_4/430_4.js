(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img._430_4_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1400,1400);


(lib.book = function() {
	this.initialize(img._430_4_book);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,296,200);


(lib.ch_base = function() {
	this.initialize(img._430_4_ch_base);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1400,1400);


(lib.ch_face10 = function() {
	this.initialize(img._430_4_ch_face10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,288,320);


(lib.ch_face2 = function() {
	this.initialize(img._430_4_ch_face2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,288,320);


(lib.ch_face3 = function() {
	this.initialize(img._430_4_ch_face3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,288,320);


(lib.ch_face4 = function() {
	this.initialize(img._430_4_ch_face4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,288,320);


(lib.ch_face6 = function() {
	this.initialize(img._430_4_ch_face6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,288,320);


(lib.ch_face7 = function() {
	this.initialize(img._430_4_ch_face7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,288,320);


(lib.ch_face8 = function() {
	this.initialize(img._430_4_ch_face8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,288,320);


(lib.ch_face9 = function() {
	this.initialize(img._430_4_ch_face9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,288,320);


(lib.finish = function() {
	this.initialize(img._430_4_finish);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,620);


(lib.finish_blur = function() {
	this.initialize(img._430_4_finish_blur);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,620);


(lib.tie_fp = function() {
	this.initialize(img._430_4_tie_fp);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,32);


(lib.tie_sp = function() {
	this.initialize(img._430_4_tie_sp);
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


(lib.book_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.book();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.book_1, new cjs.Rectangle(0,0,148,100), null);


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


(lib.obj_yuge = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1 コピー 5
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.851)","rgba(255,255,255,0)"],[0,1],0,8.6,0,0,8.6,57.6).s().p("AnnMyQhchoAaitQAairB+iOIAHgIQAiiPBsh4QAzg5A3gnQgJgiAQgyQAWhBA3g+QgEgnAag6QAphkBlhlQBlhlBjgqQBLggAqANIAEgDQApgqAkgYIABAAQArgcALAOQAOALgcAsQgYAkgqAqIgGAHQAHAogcBDIgNAcQAQAcgUA0QgPApggAqQAyAIAmAmQAzA0gEBNQgDBMg3A5QgCARgEAVQgRBCg6A6QAaAKAUAVIABAAQA4A4gSBgQgQBehPBPQhPBOheASIgRACQgkCIhnB0Qh+COiaAdQgiAGgeAAQhvAAhJhQg");
	this.shape.setTransform(37.9094,-96.1745);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(255,255,255,0.612)","rgba(255,255,255,0)"],[0,1],0,8.6,0,0,8.6,57.6).s().p("AntM3IAAAAQhehqAaixIAAgBQAaitCAiPIAGgHQAjiQBsh5QAxg3A2gmQgIgjAQgxQAWhAA2g/QgCgoAZg6IAAABQArhmBmhlQBlhnBkgrIABAAQBKgfAsALIAAAAIAAAAQArgqAkgYIAAgBQAzggANAUQAUANggAzIAAAAQgZAlgqArIgEADQAGAqgcBDIgLAYQAOAfgTA0IAAgBQgOAmgbAmQAtAKAiAjQA3A2gFBSQgDBNg4A6QgBAQgFAUIAAABQgQA/g0A4QAVALARARIAAAAQA8A7gTBkQgRBhhRBRQhQBQhhASIgLABQgmCHhmBzQiACRidAdQgiAHggAAQhyAAhLhUgAEusXQhjAqhlBlQhlBlgpBkQgaA6AEAnQg3A+gWBBQgQAyAJAiQg3AngzA5QhsB4giCPIgHAIQh+COgaCrQgaCtBcBoQBdBnCbgdQCagdB+iOQBnh0AkiIIARgCQBegSBPhOQBPhPAQheQAShgg4g4IgBAAQgUgVgagKQA6g6ARhCQAEgVACgRQA3g5ADhMQAEhNgzg0QgmgmgygIQAggqAPgpQAUg0gQgcIANgcQAchDgHgoIAGgHQAqgqAYgkQAcgsgOgLQgLgOgrAcIgBAAQgkAYgpAqIgEADQgMgEgQAAQglAAg0AXg");
	this.shape_1.setTransform(37.929,-96.1742);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["rgba(255,255,255,0.459)","rgba(255,255,255,0)"],[0,1],-0.1,8.6,0,-0.1,8.6,57.6).s().p("AnzM9QhhhsAbi2QAaiwCCiRIAEgFQAkiRBth6QAwg1AzgmQgFgjAPgvIAAgBQAWhBA2g+QgCgpAZg5QAshnBmhnQBnhnBmgsIAAAAQBKgfAtAKQApgpAkgYQA6glAQAZQAaARglA6IAAAAQgZAlgrAsIgBABQAFAqgcBCIAAAAIgKAWQAOAggUA1IAAgBQgMAigXAiQAnANAgAgIAAAAQA5A5gEBVQgEBOg3A8IgGAjIAAAAQgQA+gwA2QARAJAOAPQA/A9gUBpIABAAQgRBjhUBTQhSBShjASIAAAAIgHABQgmCFhmBzQiCCTifAdQgjAHghAAQh1AAhNhWgAhHlgQg3A+gVBBQgQAxAHAiQg1AmgxA4QhtB5gjCQIgFAGQiBCQgZCtIAAAAQgbCyBfBpIAAABQBfBqCggdQCcgeCAiQQBmh0AmiGIAMgCQBggSBRhQQBRhRARhgQAShlg7g6IAAgBQgSgRgVgKQA1g4AQhAIAAAAQAEgUACgQQA3g7AEhNQAEhRg2g2QgjgjgtgLQAcgmANglIAAAAQAUg0gPgeIAMgZQAchDgGgpIADgEQArgrAYgkIAAgBQAggygTgOQgOgTgyAgIAAAAQglAYgqArIAAgBIgBABQgrgMhLAgIAAAAQhkArhmBmQhlBmgrBlIAAAAQgaA6ADAog");
	this.shape_2.setTransform(37.9554,-96.235);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["rgba(255,255,255,0.306)","rgba(255,255,255,0)"],[0,1],-0.1,8.7,0,-0.1,8.7,57.6).s().p("An5NDIgBAAQhjhvAbi6QAbiyCEiTIgCACIAEgFQAkiSBuh6QAvg1AyglQgEgjAPguIAAgBQAWhBA1g/QgBgoAag6IgBAAQAthoBnhoQBohoBngsIAAgBQBKgfAuAIQAognAjgXIABAAQBBgqATAfQAfATgqBCIAAAAQgYAlgrArQADArgbBCIgIASQAMAigUA2QgLAegTAfQAjANAeAeQA7A7gFBYQgDBRg4A9QgCAPgEASIAAABQgPA7gsA0QANAJALAMIABAAQBBA/gUBuQgRBlhWBVIABAAQhVBUhlASIAAAAIgCABQgnCEhlByQiECViiAeQgkAGgiAAQh5AAhOhYgABaqSQhmBngsBmQgZA6ABAoQg2A/gVBBIAAAAQgQAwAGAiQg0AmgwA2QhtB6gjCQIgFAFQiCCSgaCvQgbC2BhBsQBiBuClgeQCfgeCCiTQBlhyAniFIAGgBIABgBQBjgSBShSQBThTARhjIAAABQAThpg+g+QgPgOgRgKQAxg2APg9IAAgBIAGgiQA4g8ADhPQAFhVg5g5IAAABQggghgogMQAXgiAMgiIAAAAQAUg1gNggIAKgVIgBAAQAchDgEgqIAAgBQAsgrAYglIABgBQAkg6gZgQQgQgag6AmQgkAXgpApQgtgKhKAgIgBAAQhlAshnBng");
	this.shape_3.setTransform(38.0023,-96.2578);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["rgba(255,255,255,0.153)","rgba(255,255,255,0)"],[0,1],-0.1,8.7,0,-0.1,8.7,57.6).s().p("An/NIIgBAAQhmhxAci+IAAAAQAbi0CGiVIgBABIACgDQAkiSBvh8QAugzAxglQgDgjAOgtIABgBQAVhBA1g+QAAgqAZg5IAAAAQAthpBphpQBphqBogtIAAAAQBJgfAwAHQAngmAigWIAAgBQBJgvAVAmQAmAVgvBJIAAAAQgYAlgqAqQACAsgbBBIgHAPQAMAjgUA3IgBABQgJAbgRAbQAgAOAbAbQA+A+gFBcQgDBSg5A/QgBAOgEARIAAABQgPA5gpAzIATAQIAAAAQBFBCgVBzIAAgBQgSBohXBXQhVBUhmAUQgoCDhkBxQiGCXikAfQgmAHgiAAQh9AAhQhcgApCIaQgbC6BjBvIABAAQBkBxCpgfQCigeCEiVQBlhyAniEIACgBIAAAAQBlgSBVhUIgBAAQBWhVARhlQAUhuhBg/IgBAAQgLgMgNgJQAsg0APg7IAAgBQAEgSACgPQA4g9ADhRQAFhYg7g7QgegegjgNQATgfALgeQAUg2gMgiIAIgSQAbhCgDgrQArgrAYglIAAAAQAqhCgfgTQgTgfhBAqIgBAAQgjAXgoAnQgugIhKAfIAAABQhnAshoBoQhnBogtBoIABAAQgaA6ABAoQg1A/gWBBIAAABQgPAuAEAjQgyAlgvA1QhuB6gkCSIgEAFIACgCQiECTgbCyg");
	this.shape_4.setTransform(38.0355,-96.2873);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.obj_yuge, new cjs.Rectangle(-33.9,-189.4,131.2,232.4), null);


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

}).prototype = getMCSymbolPrototype(lib.character1_face_eyeclose, new cjs.Rectangle(0,0,144,160), null);


(lib.character1_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.instance = new lib.ch_base();
	this.instance.parent = this;
	this.instance.setTransform(-120,-396,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.character1_base, new cjs.Rectangle(-120,-396,700,700), null);


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
p.nominalBounds = new cjs.Rectangle(0,0,700,700);


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
	this.shape.graphics.f("#333333").s().p("Ag4BHIAAiNIATAAIAAApIAPAFIAUAGIAUAHIAVAIIASAHIgIATIgdgOIgdgLIgcgJIAABSg");
	this.shape.setTransform(73.075,0.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhFAJIAAgRICKAAIAAARg");
	this.shape_1.setTransform(56,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgqA2QAWgCAOgHQANgFAIgJQAIgJAEgJQADgLAAgJIAAgJIAAgKIAAgRIAAgPIAAgMIATAAIAAAgIAAAgQgBARgGANQgGANgLAJQgLAKgOAFQgOAHgRACgAgwAOIAAhUIASAAIAABUg");
	this.shape_2.setTransform(40.025,0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("Ag4BHIAAiNIATAAIAAApIAPAFIAUAGIAUAHIAVAIIASAHIgIATIgdgOIgdgLIgcgJIAABSg");
	this.shape_3.setTransform(25.075,0.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AhGAvQAWgHARgKQASgLALgMQALgMAHgNQAHgOADgNIhPAAIAAgRIBmAAQgEAUgHARQgGAQgKAMIAQAMIASAOIAQAQIgPAQQgLgPgLgLQgLgLgMgIQgKAMgLAJQgMAIgNAHIgYAKg");
	this.shape_4.setTransform(7.85,0.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AhHAvQAYgHAQgKQASgLAMgMQAKgMAHgNQAHgOADgNIhPAAIAAgRIBmAAQgDAUgIARQgGAQgKAMIAQAMIARAOIARAQIgPAQQgLgPgLgLQgMgLgLgIQgKAMgLAJQgNAIgMAHIgYAKg");
	this.shape_5.setTransform(-8.15,0.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgCAkQgMgNgNgLQgMgLgLgGIANgLQAHAEAJAIIATAOQALgIAKgIQAJgKAHgKQAGgKADgKIhxABIAAgQIAIAAIATAAIAaAAIAcAAIAbAAIAVAAIAKAAQgCAOgGANQgGAMgJALQgIALgKAIQgKAIgJAHIANAOIALAMIgPANQgKgNgLgNg");
	this.shape_6.setTransform(-24.025,1.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AhHAvQAYgHARgKQAQgLAMgMQALgMAHgNQAHgOACgNIhOAAIAAgRIBmAAQgEAUgGARQgHAQgJAMIAQAMIARAOIAPAQIgNAQQgMgPgMgLQgLgLgKgIQgLAMgMAJQgMAIgMAHIgYAKg");
	this.shape_7.setTransform(-40.15,0.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgqA2QAWgCAOgHQANgFAIgJQAIgJAEgJQADgLAAgJIAAgJIAAgKIAAgRIAAgPIAAgMIATAAIAAAgIAAAgQgBARgGANQgGANgLAJQgLAKgOAFQgOAHgRACgAgwAOIAAhUIASAAIAABUg");
	this.shape_8.setTransform(-55.975,0.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("Ag7A4QAagDATgKQASgIAMgMQAMgNAIgOQAHgPAFgPIg1AAQgJANgMAMQgMAMgOAKIgQgNQAMgGAKgIQAJgJAIgKQAIgJAFgKQAFgKACgKIASAFIgDAIIgEAJIANAAIARAAIARAAIAMAAIAIAAQgCANgFAOQgEAPgHANQgIAPgMANQgMANgTALQgSAKgbAGg");
	this.shape_9.setTransform(-72.45,0.45);

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


(lib.mc_pokapoka = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{run:1,run2:20});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.play();
	}
	this.frame_19 = function() {
		this.play();
	}
	this.frame_20 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(18).call(this.frame_19).wait(1).call(this.frame_20).wait(1));

	// レイヤー 3
	this.instance = new lib.obj_yuge();
	this.instance.parent = this;
	this.instance.setTransform(21.2,-32.25,0.599,0.599,-135.1238);
	this.instance.alpha = 0.8984;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(1).to({regX:38,regY:-96.3,scaleX:0.5996,scaleY:0.5996,rotation:-135.1002,x:-35.7,y:-7.35,alpha:0.8931},0).wait(1).to({scaleX:0.6017,scaleY:0.6017,rotation:-135.0232,x:-35.75,y:-6.95,alpha:0.8758},0).wait(1).to({scaleX:0.6054,scaleY:0.6054,rotation:-134.8827,x:-36,y:-6.4,alpha:0.8441},0).wait(1).to({scaleX:0.6111,scaleY:0.6111,rotation:-134.6673,x:-36.3,y:-5.55,alpha:0.7956},0).wait(1).to({scaleX:0.6191,scaleY:0.6191,rotation:-134.3668,x:-36.7,y:-4.3,alpha:0.7279},0).wait(1).to({scaleX:0.6294,scaleY:0.6294,rotation:-133.9784,x:-37.25,y:-2.75,alpha:0.6405},0).wait(1).to({scaleX:0.6416,scaleY:0.6416,rotation:-133.5169,x:-37.95,y:-0.95,alpha:0.5365},0).wait(1).to({scaleX:0.6548,scaleY:0.6548,rotation:-133.0228,x:-38.7,y:1,alpha:0.4252},0).wait(1).to({scaleX:0.6672,scaleY:0.6672,rotation:-132.5522,x:-39.35,y:2.8,alpha:0.3193},0).wait(1).to({scaleX:0.6779,scaleY:0.6779,rotation:-132.1505,x:-39.95,y:4.35,alpha:0.2288},0).wait(1).to({scaleX:0.6862,scaleY:0.6862,rotation:-131.8373,x:-40.4,y:5.55,alpha:0.1583},0).wait(1).to({scaleX:0.6922,scaleY:0.6922,rotation:-131.6121,x:-40.7,y:6.4,alpha:0.1075},0).wait(1).to({scaleX:0.6961,scaleY:0.6961,rotation:-131.4652,x:-40.95,y:7,alpha:0.0744},0).wait(1).to({scaleX:0.6982,scaleY:0.6982,rotation:-131.3848,x:-41.05,y:7.3,alpha:0.0563},0).wait(1).to({regX:0,regY:0,scaleX:0.6989,scaleY:0.6989,rotation:-131.3601,x:27,y:-17.2,alpha:0.0508},0).to({_off:true},1).wait(1));

	// yuge
	this.instance_1 = new lib.obj_yuge();
	this.instance_1.parent = this;
	this.instance_1.setTransform(23.65,-54,0.4992,0.4992,-135.1189);
	this.instance_1.alpha = 0.0508;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1).to({regX:38,regY:-96.3,scaleX:0.579,scaleY:0.579,rotation:-135.1229,x:-35.6,y:-18.2,alpha:0.2102},0).wait(1).to({scaleX:0.5964,scaleY:0.5964,rotation:-135.1237,x:-38.15,y:-14.9,alpha:0.2448},0).wait(1).to({regX:0,regY:0,scaleX:0.599,scaleY:0.599,rotation:-135.1238,x:18.3,y:-39.25,alpha:0.25},0).to({scaleX:0.6489,scaleY:0.6489,rotation:-135.1277,x:14.8,y:-40.25},1).wait(1).to({scaleX:0.6988,scaleY:0.6988,rotation:-135.123,x:11.75,y:-37.5},0).to({_off:true},1).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.8,-87.1,165,168.6);


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
	mask.graphics.p("ArFMWIAA4rIWLAAIAAYrg");
	mask.setTransform(72,80);

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

	this.instance_5 = new lib.ch_face6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,0,0.5,0.5);

	this.instance_6 = new lib.ch_face7();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,0,0.5,0.5);

	this.instance_7 = new lib.ch_face8();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,0,0.5,0.5);

	this.instance_8 = new lib.ch_face9();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,0,0.5,0.5);

	this.instance_9 = new lib.ch_face10();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[]},1).wait(10));

	// body
	this.b = new lib.character1_base();
	this.b.name = "b";
	this.b.parent = this;
	this.b.setTransform(-208,212);

	var maskedShapeInstanceList = [this.b];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.b).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,142,158);


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
	this.shape.graphics.f("#000000").s().p("AgRBKQgIAAgEgCQgEgCAAgIIAAhfIAWAAIAABRIABADIACABIAUAAQADAAACgCQACgBABgEIACgNIABgWIAWAJQgBASgCAMQgBALgEAFQgDAGgGABQgFACgIAAgAhNAnQAFgLADgMIAFgUIACgQIAAgHIAVAIIAAAFIgCAMIgEARIgFAVQgDAKgEAKgAA0AeIgIgaIgKgXIATgJQAIAQAGAQIALAlIgUANIgGgYgAgFgtIgbgKIAMgSIAaAJIAaALIgMAUQgMgGgNgGg");
	this.shape.setTransform(24.025,11.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

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


(lib.glitters2 = function(mode,startPosition,loop) {
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
	this.instance_1.setTransform(17.55,209.35,0.1958,0.1958);
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
	this.instance_7.setTransform(20.05,147.55,0.1106,0.1106);
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
	this.instance_9.setTransform(177.4,28.6,0.2555,0.2555);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(14).to({_off:false},0).wait(8));

	// レイヤー_15
	this.instance_10 = new lib.glitter_first();
	this.instance_10.parent = this;
	this.instance_10.setTransform(26.75,96.95,0.1176,0.1176);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(16).to({_off:false},0).wait(6));

	// レイヤー_16
	this.instance_11 = new lib.glitter_first();
	this.instance_11.parent = this;
	this.instance_11.setTransform(55.8,17.75,0.1138,0.1138);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(17).to({_off:false},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240,320);


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


(lib.character1_face_container = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{init:0,"run":4,stay:10,s2:11,s3:12,blink1:15,blink2:21});

	// timeline functions:
	this.frame_0 = function() {
		//                     1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12
		this.face_blink_ary = [0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]; 
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
	var mask_graphics_15 = new cjs.Graphics().p("AHyGVQgRgKg+gVIhbgiIhJgbQgpgRgSgSQgHgHgwhmQgrhbglgQQgogQiCAcIiYAhQghAAghgHQgmgJg2gVIh+guQhLgbgYgTQgbgUgHgsQgGgjAIgrQAPhEARgnQAag/AkgXQAngYBVgQQBKgPBBAAIBrAAQA4ADAlAUQAqAWAbAdQAZAbAYAsIAvBeQAfA0AhAHQAfAGBVgaQBqghAQgCQA1gJAGABQAQABAyAYQAkASBBAZQAzAbAZA8QAbA+AEBGQACAsgHBAQgIA+gHAcQgMAugYAVQgaAZgnAJQgQAEgNAAQgUAAgNgIg");
	var mask_graphics_21 = new cjs.Graphics().p("AjFBuIhLhTIAEgiQADgjABABIATh2ICVgHIBJATICJBEIB6AeIAlgEQgWA4ABBQQAAAgABAaIhEgGIi5Agg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(15).to({graphics:mask_graphics_15,x:70.5001,y:68.0341}).wait(6).to({graphics:mask_graphics_21,x:31.25,y:41.8}).wait(6));

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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).wait(1).to({alpha:1},0).wait(1).to({regX:72,regY:80,x:72,y:80,alpha:0.3015},0).wait(1).to({alpha:0.0922},0).wait(1).to({regX:35,regY:30,x:35,y:30,alpha:0},0).wait(2).to({alpha:0.1992},0).wait(1).to({alpha:1},0).wait(1).to({regX:72,regY:80,x:72,y:80,alpha:0.3015},0).wait(1).to({alpha:0.0922},0).wait(1).to({regX:35,regY:30,x:35,y:30,alpha:0},0).wait(2));

	// f2
	this.f2 = new lib.character1_face();
	this.f2.name = "f2";
	this.f2.parent = this;
	this.f2.setTransform(35,30,1,1,0,0,0,35,30);

	this.timeline.addTween(cjs.Tween.get(this.f2).wait(5).to({alpha:0.1992},0).wait(1).to({regX:72,regY:80,x:72,y:80,alpha:0.6441},0).wait(1).to({alpha:0.911},0).wait(1).to({regX:35,regY:30,x:35,y:30,alpha:1},0).wait(19));

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

	this.timeline.addTween(cjs.Tween.get(this.f1_alpha).wait(5).to({alpha:0.8008},0).wait(1).to({regX:72,regY:80,x:72,y:80,alpha:0.7118},0).wait(1).to({alpha:0.4449},0).wait(1).to({regX:35,regY:30,x:35,y:30,alpha:0},0).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-328,-184,700,700);


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

	// face
	this.f = new lib.character1_face_container();
	this.f.name = "f";
	this.f.parent = this;
	this.f.setTransform(64,-312);

	this.timeline.addTween(cjs.Tween.get(this.f).to({_off:true},1).wait(1));

	// base
	this.b = new lib.character1_base();
	this.b.name = "b";
	this.b.parent = this;
	this.b.setTransform(-144,-100);

	this.timeline.addTween(cjs.Tween.get(this.b).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-264,-496,700,700);


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
	this.initialize(mode,startPosition,loop,{standby:0,jump:8,jump2:16,jump_double:25,jump_flower:37,jump_flower2:47,nod:57,nod2:66,nod_double:81,swing:92,swing_on:112,swing_off:121,notice:132,notice_jump:146,laugh:160,chord:181,question:201,question_on:229,question_off:241,exclamation:252,down:268,down2:295,shy_jump:313,shy_down:325,shock:343,sigh:350,happy:369,anger:384,anger2:404,damage:416,concent:433,back_step:442,nod_double2:455,nod3:470,nod_chord:479});

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
	this.frame_454 = function() {
		this.stop();
	}
	this.frame_455 = function() {
		this.play();
	}
	this.frame_469 = function() {
		this.stop();
	}
	this.frame_470 = function() {
		this.play();
	}
	this.frame_478 = function() {
		this.stop();
	}
	this.frame_479 = function() {
		this.play();
	}
	this.frame_498 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(1).call(this.frame_8).wait(7).call(this.frame_15).wait(1).call(this.frame_16).wait(8).call(this.frame_24).wait(1).call(this.frame_25).wait(11).call(this.frame_36).wait(1).call(this.frame_37).wait(9).call(this.frame_46).wait(1).call(this.frame_47).wait(9).call(this.frame_56).wait(1).call(this.frame_57).wait(8).call(this.frame_65).wait(1).call(this.frame_66).wait(14).call(this.frame_80).wait(1).call(this.frame_81).wait(10).call(this.frame_91).wait(1).call(this.frame_92).wait(19).call(this.frame_111).wait(1).call(this.frame_112).wait(8).call(this.frame_120).wait(1).call(this.frame_121).wait(10).call(this.frame_131).wait(1).call(this.frame_132).wait(13).call(this.frame_145).wait(1).call(this.frame_146).wait(13).call(this.frame_159).wait(1).call(this.frame_160).wait(20).call(this.frame_180).wait(1).call(this.frame_181).wait(19).call(this.frame_200).wait(1).call(this.frame_201).wait(27).call(this.frame_228).wait(1).call(this.frame_229).wait(11).call(this.frame_240).wait(1).call(this.frame_241).wait(10).call(this.frame_251).wait(1).call(this.frame_252).wait(15).call(this.frame_267).wait(1).call(this.frame_268).wait(26).call(this.frame_294).wait(1).call(this.frame_295).wait(17).call(this.frame_312).wait(1).call(this.frame_313).wait(11).call(this.frame_324).wait(1).call(this.frame_325).wait(17).call(this.frame_342).wait(1).call(this.frame_343).wait(6).call(this.frame_349).wait(1).call(this.frame_350).wait(18).call(this.frame_368).wait(1).call(this.frame_369).wait(14).call(this.frame_383).wait(1).call(this.frame_384).wait(19).call(this.frame_403).wait(1).call(this.frame_404).wait(11).call(this.frame_415).wait(1).call(this.frame_416).wait(16).call(this.frame_432).wait(1).call(this.frame_433).wait(8).call(this.frame_441).wait(1).call(this.frame_442).wait(12).call(this.frame_454).wait(1).call(this.frame_455).wait(14).call(this.frame_469).wait(1).call(this.frame_470).wait(8).call(this.frame_478).wait(1).call(this.frame_479).wait(19).call(this.frame_498).wait(1));

	// breath
	this.breath = new lib.mc_pokapoka();
	this.breath.name = "breath";
	this.breath.parent = this;
	this.breath.setTransform(142.7,-188.25,1.1394,1.0408,23.2177,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.breath).wait(499));

	// effect_look_to_right2
	this.instance = new lib.drop1_v2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(205.85,-340.15,1.3269,1.3269,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(313).to({_off:false},0).wait(1).to({regX:1.2,regY:1.8,scaleX:1.3268,scaleY:1.3268,skewX:33.7497,skewY:213.7497,x:234.95,y:-350.45,alpha:0.4141},0).wait(1).to({regX:0.1,regY:-0.1,skewX:44.9995,skewY:224.9995,x:248.3,y:-355.45,alpha:0.2188},0).to({_off:true},1).wait(1).to({_off:false,regX:0,regY:0,scaleX:1.3269,scaleY:1.3269,skewX:0,skewY:180,x:205.85,y:-340.15,alpha:1},0).wait(1).to({regX:1.2,regY:1.8,scaleX:1.3268,scaleY:1.3268,skewX:33.7497,skewY:213.7497,x:234.95,y:-350.45,alpha:0.4141},0).wait(1).to({regX:0.1,regY:-0.1,skewX:44.9995,skewY:224.9995,x:248.3,y:-355.45,alpha:0.2188},0).to({_off:true},1).wait(5).to({_off:false,regX:0,regY:0,scaleX:1.3269,scaleY:1.3269,skewX:0,skewY:180,x:205.85,y:-340.15,alpha:1},0).wait(1).to({regX:1.2,regY:1.8,scaleX:1.3268,scaleY:1.3268,skewX:33.7497,skewY:213.7497,x:234.95,y:-350.45,alpha:0.4141},0).wait(1).to({regX:0.1,regY:-0.1,skewX:44.9995,skewY:224.9995,x:248.3,y:-355.45,alpha:0.2188},0).to({_off:true},1).wait(1).to({_off:false,regX:0,regY:0,scaleX:1.3269,scaleY:1.3269,skewX:0,skewY:180,x:205.85,y:-340.15,alpha:1},0).wait(1).to({regX:1.2,regY:1.8,scaleX:1.3268,scaleY:1.3268,skewX:33.7497,skewY:213.7497,x:234.95,y:-350.45,alpha:0.4141},0).wait(1).to({regX:0.1,regY:-0.1,skewX:44.9995,skewY:224.9995,x:248.3,y:-355.45,alpha:0.2188},0).to({_off:true},1).wait(167));

	// effect_look_to_right
	this.instance_1 = new lib.spread_flower_pink("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(139.6,-234.45,1.6871,1.6871,0,0,180);

	this.instance_2 = new lib.good_effect("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(139.65,-234.5,1.6874,1.6874);

	this.instance_3 = new lib.notice();
	this.instance_3.parent = this;
	this.instance_3.setTransform(258.35,-296.15,1.3509,1.3509,169.9444,0,0,-29.2,20.5);
	this.instance_3._off = true;

	this.instance_4 = new lib.laugh("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(241.85,-331,1.6158,1.6158,0,-35.838,144.1736,-30.2,20.5);
	this.instance_4._off = true;

	this.instance_5 = new lib.chord("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(215.45,-237.25,1.1423,1.1423,-6.2624,0,0,-23.4,76.8);

	this.instance_6 = new lib.question();
	this.instance_6.parent = this;
	this.instance_6.setTransform(210.25,-331.65,1.1998,1.1998,29.4474,0,0,0.1,-0.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.instance_7 = new lib.mc_exclamation("synched",0,false);
	this.instance_7.parent = this;
	this.instance_7.setTransform(214.35,-349.3,1.2453,1.2453,0,30.0001,-150.0005);

	this.instance_8 = new lib.drop1a("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(209.6,-329.3,1.1394,1.1394,0,0,0,-0.4,0.1);
	this.instance_8._off = true;

	this.instance_9 = new lib.drop2_v2("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(208,-329.1,1.1253,1.1253,0,-14.9992,165.0008,-0.1,0);
	this.instance_9._off = true;

	this.instance_10 = new lib.shock("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(215.25,-332.45,1.5813,1.5813,0,121.2393,-58.7607);

	this.instance_11 = new lib.sigh("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(185.15,-157.85,1.1394,1.1394,0,0,180,0,-0.1);
	this.instance_11.alpha = 0.6016;
	this.instance_11._off = true;

	this.instance_12 = new lib.heart("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(215.55,-282.5,0.5164,0.5164,0,0,180,-0.1,0);
	this.instance_12._off = true;

	this.instance_13 = new lib.angry("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(223,-306.75,0.6011,0.6011,0,0,0,0.1,-0.1);
	this.instance_13._off = true;

	this.instance_14 = new lib.mc_punpun();
	this.instance_14.parent = this;
	this.instance_14.setTransform(73.65,-362.7,1.2963,1.2963);

	this.instance_15 = new lib.concent_wrapper("synched",0,false);
	this.instance_15.parent = this;
	this.instance_15.setTransform(139.4,-235.1,1.1394,1.1394,0,0,0,-0.5,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},37).to({state:[{t:this.instance_2}]},10).to({state:[]},10).to({state:[{t:this.instance_3}]},76).to({state:[]},2).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).to({state:[{t:this.instance_3}]},2).to({state:[]},2).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},15).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},20).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_6}]},7).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[]},1).to({state:[{t:this.instance_6}]},6).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[]},1).to({state:[{t:this.instance_7}]},5).to({state:[{t:this.instance_8}]},16).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},9).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).to({state:[{t:this.instance_9}]},24).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[]},1).to({state:[{t:this.instance_9}]},5).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[]},1).to({state:[{t:this.instance_10}]},11).to({state:[]},1).to({state:[{t:this.instance_10}]},1).to({state:[]},1).to({state:[{t:this.instance_10}]},1).to({state:[]},1).to({state:[{t:this.instance_11}]},3).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[]},1).to({state:[{t:this.instance_12}]},11).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_12}]},3).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[]},1).to({state:[{t:this.instance_13}]},6).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},5).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[]},1).to({state:[{t:this.instance_14}]},2).to({state:[]},12).to({state:[{t:this.instance_15}]},17).to({state:[]},9).to({state:[{t:this.instance_5}]},37).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(133).to({_off:false},0).to({_off:true},2).wait(1).to({_off:false,scaleX:1.3517,scaleY:1.3517,rotation:169.9438,x:258.3,y:-296.2},0).wait(3).to({regX:-28.8,x:257.75,y:-296.05,alpha:0.6944},0).wait(1).to({alpha:0.4444},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.1111},0).wait(1).to({alpha:0.0278},0).wait(1).to({regX:-29.2,x:258.3,y:-296.2,alpha:0},0).to({_off:true},1).wait(2).to({_off:false,scaleX:1.3509,scaleY:1.3509,rotation:169.9444,x:223.75,y:-335.1,alpha:1},0).to({_off:true},2).wait(1).to({_off:false,scaleX:1.3517,scaleY:1.3517,rotation:169.9438,x:223.7,y:-335.15},0).wait(3).to({regX:-28.8,x:223.15,y:-335,alpha:0.6944},0).wait(1).to({alpha:0.4444},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.1111},0).wait(1).to({alpha:0.0278},0).wait(1).to({regX:-29.2,x:223.7,y:-335.15,alpha:0},0).to({_off:true},1).wait(340));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(160).to({_off:false},0).wait(15).to({regX:-30.3,regY:20.4,skewX:-35.8264,y:-331.15},0).wait(1).to({regX:-31.4,regY:22.1,x:244.85,y:-329.95,alpha:0.5625,startPosition:1},0).wait(1).to({alpha:0.25,startPosition:2},0).wait(1).to({alpha:0.0625,startPosition:3},0).wait(1).to({regX:-30.3,regY:20.4,x:241.85,y:-331.15,alpha:0,startPosition:19},0).to({_off:true},1).wait(319));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(202).to({_off:false},0).wait(1).to({regX:-0.2,regY:0.2,x:218.85,y:-346.4,alpha:0.5556},0).wait(1).to({x:224.3,y:-355.3,alpha:0.8889},0).wait(1).to({regX:0,regY:-0.1,x:226.6,y:-358.55,alpha:1},0).wait(1).to({regX:-0.2,regY:0.2,x:225.85,y:-357.6},0).wait(1).to({x:224.65,y:-355.5},0).wait(1).to({x:222.65,y:-351.95},0).wait(1).to({regX:0.1,regY:-0.1,x:220.3,y:-347.25},0).to({regX:0,regY:0,x:221,y:-348.75},2).wait(8).to({regX:-0.2,regY:0.2,x:220.3,y:-348,alpha:0.9298},0).wait(1).to({x:219.05,y:-345.8,alpha:0.692},0).wait(1).to({x:217.2,y:-342.5,alpha:0.339},0).wait(1).to({x:215.85,y:-340.1,alpha:0.0788},0).wait(1).to({regX:0,regY:0,y:-339.45,alpha:0},0).to({_off:true},1).wait(6).to({_off:false,regX:0.1,regY:-0.1,x:210.25,y:-331.65},0).wait(1).to({regX:-0.2,regY:0.2,x:218.85,y:-346.4,alpha:0.5556},0).wait(1).to({x:224.3,y:-355.3,alpha:0.8889},0).wait(1).to({regX:0,regY:-0.1,x:226.6,y:-358.55,alpha:1},0).wait(1).to({regX:-0.2,regY:0.2,x:225.85,y:-357.6},0).wait(1).to({x:224.65,y:-355.5},0).wait(1).to({x:222.65,y:-351.95},0).wait(1).to({regX:0.1,regY:-0.1,x:220.3,y:-347.25},0).to({regX:0,regY:0,x:221,y:-348.75},2).wait(3).to({regX:-0.2,regY:0.2,x:220.3,y:-348,alpha:0.9298},0).wait(1).to({x:219.05,y:-345.8,alpha:0.692},0).wait(1).to({x:217.2,y:-342.5,alpha:0.339},0).wait(1).to({x:215.85,y:-340.1,alpha:0.0788},0).wait(1).to({regX:0,regY:0,y:-339.45,alpha:0},0).to({_off:true},1).wait(252));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(268).to({_off:false},0).wait(1).to({regX:0.5,regY:-0.6,x:210.6,y:-325},0).wait(1).to({y:-320.6},0).wait(1).to({y:-316.9},0).wait(1).to({y:-313.85},0).wait(1).to({y:-311.45},0).wait(1).to({y:-309.75},0).wait(1).to({y:-308.75},0).wait(1).to({regX:-0.4,regY:0.2,x:209.6,y:-307.55},0).wait(9).to({startPosition:0},0).wait(1).to({regX:0.5,regY:-0.6,x:210.6,y:-308.5,alpha:0.4444},0).wait(1).to({alpha:0.1111},0).wait(1).to({regX:-0.4,regY:0.2,x:209.6,y:-307.55,alpha:0},0).to({_off:true},1).wait(210));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(313).to({_off:false},0).wait(1).to({regX:0,scaleX:1.2765,scaleY:1.2765,skewX:18.7498,skewY:198.7498,x:243.6868,y:-323.829,alpha:0.4141},0).wait(1).to({scaleX:1.3268,scaleY:1.3268,skewX:29.9995,skewY:209.9995,x:255.65,y:-322,alpha:0.2188},0).to({_off:true},1).wait(1).to({_off:false,regX:-0.1,scaleX:1.1253,scaleY:1.1253,skewX:-14.9992,skewY:165.0008,x:208,y:-329.1,alpha:1},0).wait(1).to({regX:0,scaleX:1.2765,scaleY:1.2765,skewX:18.7498,skewY:198.7498,x:243.6868,y:-328.854,alpha:0.4141},0).wait(1).to({scaleX:1.3268,scaleY:1.3268,skewX:29.9995,skewY:209.9995,x:255.65,y:-328.7,alpha:0.2188},0).to({_off:true},1).wait(5).to({_off:false,regX:-0.1,scaleX:1.1253,scaleY:1.1253,skewX:-14.9992,skewY:165.0008,x:208,y:-329.1,alpha:1},0).wait(1).to({regX:0,scaleX:1.2765,scaleY:1.2765,skewX:18.7498,skewY:198.7498,x:243.6868,y:-323.829,alpha:0.4141},0).wait(1).to({scaleX:1.3268,scaleY:1.3268,skewX:29.9995,skewY:209.9995,x:255.65,y:-322,alpha:0.2188},0).to({_off:true},1).wait(1).to({_off:false,regX:-0.1,scaleX:1.1253,scaleY:1.1253,skewX:-14.9992,skewY:165.0008,x:208,y:-329.1,alpha:1},0).wait(1).to({regX:0,scaleX:1.2765,scaleY:1.2765,skewX:18.7498,skewY:198.7498,x:243.6868,y:-328.854,alpha:0.4141},0).wait(1).to({scaleX:1.3268,scaleY:1.3268,skewX:29.9995,skewY:209.9995,x:255.65,y:-328.7,alpha:0.2188},0).to({_off:true},1).wait(167));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(351).to({_off:false},0).wait(1).to({x:186.3,y:-156.7,alpha:1},0).wait(1).to({regX:0.9,regY:0,x:186.4,y:-155.5,alpha:0.8965},0).wait(1).to({x:187.9,y:-154.15,alpha:0.7636},0).wait(1).to({x:189.75,y:-152.5,alpha:0.6048},0).wait(1).to({x:191.8,y:-150.65,alpha:0.4229},0).wait(1).to({x:194.1,y:-148.6,alpha:0.2205},0).wait(1).to({regX:-0.1,regY:-0.1,x:197.75,y:-146.45,alpha:0},0).to({_off:true},1).wait(140));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(370).to({_off:false},0).wait(1).to({regX:2.3,regY:1,scaleX:0.9836,scaleY:0.9836,x:217.4,y:-298.6},0).wait(1).to({regX:0,regY:-0.1,scaleX:1.1394,scaleY:1.1394,x:221.2,y:-305.35},0).wait(1).to({regX:2.3,regY:1,scaleX:1.1276,scaleY:1.1276,x:218.35,y:-302.8},0).wait(1).to({scaleX:1.0922,scaleY:1.0922,x:217.7,y:-299.05},0).wait(1).to({regX:0,regY:0,scaleX:1.0331,scaleY:1.0331,x:218.95,y:-293.9},0).to({regX:-0.1,regY:-0.1,scaleX:1.1394,scaleY:1.1394,x:220.15,y:-298.5},2).wait(3).to({scaleX:1.2722,scaleY:1.2722,x:220.2,y:-298.55},0).wait(1).to({regX:2.3,regY:1,scaleX:0.9241,scaleY:0.9241,x:217,y:-297.3,alpha:0.3262},0).wait(1).to({regX:0,regY:-0.1,scaleX:0.8081,scaleY:0.8081,x:218.95,y:-298.25,alpha:0.1016},0).to({_off:true},1).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(389).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:1.2207,scaleY:1.2207,x:222.8965,y:-310.884},0).wait(1).to({scaleX:1.4273,scaleY:1.4273,x:222.95,y:-312.35},0).wait(1).to({scaleX:1.1239,scaleY:1.1239,y:-312.3884},0).wait(1).to({regX:0.1,regY:-0.1,scaleX:1.0227,scaleY:1.0227,x:223.05,y:-312.45},0).wait(5).to({startPosition:0},0).wait(1).to({regX:0,regY:0,x:222.95,y:-312.35,alpha:0.5009},0).wait(1).to({alpha:0.2014},0).wait(1).to({regX:0.1,regY:-0.1,x:223.05,y:-312.45,alpha:0.1016},0).to({_off:true},1).wait(97));

	// clook_to_right
	this.c = new lib.character1_body();
	this.c.name = "c";
	this.c.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.c).wait(9).to({regX:86,regY:-146,x:86,y:-154.4},0).wait(1).to({regX:0,regY:0,x:0,y:-10},0).wait(1).to({regX:86,regY:-146,x:86,y:-155.2},0).wait(1).to({y:-152.45},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({y:1},0).wait(1).to({y:0},0).wait(1).to({y:2},0).wait(1).to({regX:86,regY:-146,x:86,y:-151.5},0).wait(1).to({regX:0,regY:0,x:0,y:-8},0).wait(1).to({regX:86,regY:-146,x:86,y:-151.75},0).wait(1).to({y:-144.8},0).wait(1).to({regX:0,regY:0,x:0,y:4},0).wait(1).to({regX:86,regY:-146,x:86,y:-142.75},0).wait(1).to({y:-145.15},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({y:2},0).wait(1).to({y:-7},0).wait(1).to({regX:86,regY:-146,x:86,y:-150.95},0).wait(1).to({y:-145.05},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({y:-7},0).wait(1).to({regX:86,regY:-146,x:86,y:-150.95},0).wait(1).to({y:-145.05},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({regX:86,regY:-146,x:86,y:-145.1},0).wait(1).to({y:-145.75},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({y:6},0).wait(1).to({regX:86,regY:-146,x:86,y:-155},0).wait(1).to({regX:0,regY:0,x:0,y:-14},0).wait(1).to({regX:86,regY:-146,x:86,y:-158.95},0).wait(1).to({y:-155.35},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({regX:86,regY:-146,x:86,y:-144},0).wait(1).to({regX:0,regY:0,x:0,y:-1},0).wait(1).to({regX:86,regY:-146,x:86,y:-146.25},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({y:6},0).wait(1).to({regX:86,regY:-146,x:86,y:-155},0).wait(1).to({regX:0,regY:0,x:0,y:-14},0).wait(1).to({regX:86,regY:-146,x:86,y:-158.95},0).wait(1).to({y:-155.35},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({regX:86,regY:-146,x:86,y:-144},0).wait(1).to({regX:0,regY:0,x:0,y:-1},0).wait(1).to({regX:86,regY:-146,x:86,y:-146.25},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:86,regY:-146,x:86,y:-145.4},0).wait(1).to({y:-143},0).wait(1).to({y:-140.65},0).wait(1).to({regX:0,regY:0,x:0,y:6},0).wait(1).to({regX:86,regY:-146,x:86,y:-140.65},0).wait(1).to({y:-143},0).wait(1).to({y:-145.4},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:86,regY:-146,x:86,y:-145.85},0).wait(1).to({y:-145.3},0).wait(1).to({y:-144.2},0).wait(1).to({y:-142.85},0).wait(1).to({y:-141.75},0).wait(1).to({y:-141.2},0).wait(1).to({regX:0,regY:0,x:0,y:5},0).wait(1).to({regX:86,regY:-146,x:86,y:-141.2},0).wait(1).to({y:-141.75},0).wait(1).to({y:-142.85},0).wait(1).to({y:-144.2},0).wait(1).to({y:-145.3},0).wait(1).to({y:-145.85},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({y:6},2).wait(1).to({regX:86,regY:-146,x:86,y:-141.25},0).wait(1).to({y:-144.8},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).to({y:6},2).wait(1).to({regX:86,regY:-146,x:86,y:-143.8},0).wait(1).to({y:-145.65},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:86,regY:-146,rotation:0.0244,x:86.1,y:-145.9},0).wait(1).to({rotation:0.1092,x:86.6,y:-145.5},0).wait(1).to({rotation:0.275,x:87.45,y:-144.7},0).wait(1).to({rotation:0.538,x:88.85,y:-143.45},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:0.8681,x:90.65,y:-141.8},0).wait(1).to({rotation:1.1673,x:92.2,y:-140.35},0).wait(1).to({rotation:1.367,x:93.3,y:-139.35},0).wait(1).to({rotation:1.4695,x:93.85,y:-138.85},0).wait(1).to({regX:0,regY:0,rotation:1.4989,x:4.2,y:4.95},0).wait(1).to({regX:86,regY:-146,rotation:1.479,x:93.8,y:-138.9},0).wait(1).to({rotation:1.4111,x:93.5,y:-139.2},0).wait(1).to({rotation:1.2801,x:92.75,y:-139.85},0).wait(1).to({rotation:1.0711,x:91.75,y:-140.85},0).wait(1).to({rotation:0.7884,x:90.2,y:-142.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.4865,x:88.6,y:-143.65},0).wait(1).to({rotation:0.2415,x:87.25,y:-144.85},0).wait(1).to({rotation:0.0832,x:86.4,y:-145.65},0).wait(1).to({rotation:0.0011,x:86,y:-146},0).wait(1).to({regX:0,regY:0,rotation:-0.0227,x:0,y:0},0).wait(1).to({rotation:0},0).wait(1).to({regX:86,regY:-146,rotation:0.0244,x:86.1,y:-145.9},0).wait(1).to({rotation:0.1092,x:86.6,y:-145.5},0).wait(1).to({rotation:0.275,x:87.45,y:-144.7},0).wait(1).to({rotation:0.538,x:88.85,y:-143.45},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:0.8681,x:90.65,y:-141.8},0).wait(1).to({rotation:1.1673,x:92.2,y:-140.35},0).wait(1).to({rotation:1.367,x:93.3,y:-139.35},0).wait(1).to({rotation:1.4695,x:93.85,y:-138.85},0).wait(1).to({regX:0,regY:0,rotation:1.4989,x:4.2,y:4.95},0).wait(1).to({regX:86,regY:-146,rotation:1.4793,x:93.8,y:-138.9},0).wait(1).to({rotation:1.4124,x:93.5,y:-139.2},0).wait(1).to({rotation:1.2834,x:92.75,y:-139.8},0).wait(1).to({rotation:1.0775,x:91.75,y:-140.85},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.7991,x:90.25,y:-142.2},0).wait(1).to({rotation:0.5016,x:88.65,y:-143.65},0).wait(1).to({rotation:0.2603,x:87.3,y:-144.8},0).wait(1).to({rotation:0.1043,x:86.45,y:-145.6},0).wait(1).to({rotation:0.0235,x:86.05,y:-145.95},0).wait(1).to({regX:0,regY:0,rotation:0,x:0,y:0},0).wait(16).to({regX:86,regY:-146,x:86,y:-151.55},0).wait(1).to({y:-153.45},0).wait(1).to({regX:0,regY:0,x:0,y:-8},0).wait(1).to({regX:86,regY:-146,x:86,y:-153.35},0).wait(1).to({y:-151.25},0).wait(1).to({regX:0,regY:0,x:0,y:2},0).wait(1).to({y:1},0).wait(1).to({y:0},0).wait(7).to({regX:86,regY:-146,x:86,y:-154.4},0).wait(1).to({regX:0,regY:0,x:0,y:-10},0).wait(1).to({regX:86,regY:-146,x:86,y:-155.2},0).wait(1).to({y:-152.45},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({y:1},0).wait(1).to({y:0},0).wait(15).to({regX:86,regY:-146,rotation:0.0244,x:86.1,y:-145.9},0).wait(1).to({rotation:0.1092,x:86.6,y:-145.5},0).wait(1).to({rotation:0.275,x:87.45,y:-144.7},0).wait(1).to({rotation:0.538,x:88.85,y:-143.45},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:0.8681,x:90.65,y:-141.8},0).wait(1).to({rotation:1.1673,x:92.2,y:-140.35},0).wait(1).to({rotation:1.367,x:93.3,y:-139.35},0).wait(1).to({rotation:1.4695,x:93.85,y:-138.85},0).wait(1).to({regX:0,regY:0,rotation:1.4989,x:4.2,y:4.95},0).wait(1).to({regX:86,regY:-146,rotation:1.479,x:93.8,y:-138.9},0).wait(1).to({rotation:1.4111,x:93.5,y:-139.2},0).wait(1).to({rotation:1.2801,x:92.75,y:-139.85},0).wait(1).to({rotation:1.0711,x:91.75,y:-140.85},0).wait(1).to({rotation:0.7884,x:90.2,y:-142.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.4865,x:88.6,y:-143.65},0).wait(1).to({rotation:0.2415,x:87.25,y:-144.85},0).wait(1).to({rotation:0.0832,x:86.4,y:-145.65},0).wait(1).to({rotation:0.0011,x:86,y:-146},0).wait(1).to({regX:0,regY:0,rotation:-0.0227,x:0,y:0},0).wait(1).to({rotation:0},0).wait(1).to({regX:86,regY:-146,rotation:0.1421,x:86.5,y:-145.35},0).wait(1).to({rotation:0.6998,x:88.7,y:-142.65},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:1.327,x:91.1,y:-139.55},0).wait(1).to({regX:0,regY:0,rotation:1.4989,x:1.95,y:4.95},0).wait(18).to({regX:86,regY:-146,rotation:1.4399,x:91.45,y:-139.05},0).wait(1).to({rotation:1.2196,x:90.6,y:-140.1},0).wait(1).to({rotation:0.7884,x:89,y:-142.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.3138,x:87.15,y:-144.5},0).wait(1).to({rotation:0.0482,x:86.1,y:-145.8},0).wait(1).to({regX:0,regY:0,rotation:-0.0227,x:0,y:0},0).wait(1).to({rotation:0},0).wait(1).to({regX:86,regY:-146,rotation:0.0865,x:86.3,y:-145.6},0).wait(1).to({rotation:0.4213,x:87.6,y:-143.95},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:0.9973,x:89.85,y:-141.15},0).wait(1).to({rotation:1.3945,x:91.35,y:-139.2},0).wait(1).to({regX:0,regY:0,rotation:1.4989,x:1.95,y:4.95},0).wait(8).to({regX:86,regY:-146,rotation:1.4399,x:91.45,y:-139.05},0).wait(1).to({rotation:1.2196,x:90.6,y:-140.1},0).wait(1).to({rotation:0.7884,x:89,y:-142.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.3138,x:87.15,y:-144.5},0).wait(1).to({rotation:0.0482,x:86.1,y:-145.8},0).wait(1).to({regX:0,regY:0,rotation:-0.0227,x:0,y:0},0).wait(5).to({rotation:0},0).wait(1).to({regX:86,regY:-146,x:86,y:-154.4},0).wait(1).to({regX:0,regY:0,x:0,y:-10},0).wait(1).to({regX:86,regY:-146,x:86,y:-155.2},0).wait(1).to({y:-152.45},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({y:1},0).wait(1).to({y:0},0).wait(9).to({x:1,y:4},1,cjs.Ease.get(1)).wait(1).to({regX:86,regY:-146,x:83.25,y:-138.25},0).wait(1).to({regX:0,regY:0,x:-4,y:9},0).to({x:0,y:13},4).wait(11).to({regX:86,regY:-146,x:86,y:-133.75},0).wait(1).to({y:-136.7},0).wait(1).to({y:-141.65},0).wait(1).to({y:-145.1},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(5).to({y:-1},0).wait(1).to({regX:86,regY:-146,x:86,y:-145},0).wait(1).to({y:-139.05},0).wait(1).to({regX:0,regY:0,x:0,y:9},0).to({y:8},2).wait(1).to({y:9},0).wait(6).to({regX:86,regY:-146,x:86,y:-138.2},0).wait(1).to({y:-142.5},0).wait(1).to({y:-146.8},0).wait(1).to({regX:0,regY:0,x:0,y:-2},0).wait(1).to({regX:86,regY:-146,x:86,y:-146.5},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:86,regY:-146,x:86,y:-152.7},0).wait(1).to({regX:0,regY:0,x:0,y:-8},0).wait(1).to({regX:86,regY:-146,x:86,y:-152.85},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:86,regY:-146,x:86,y:-154.4},0).wait(1).to({regX:0,regY:0,x:0,y:-10},0).wait(1).to({regX:86,regY:-146,x:86,y:-155.2},0).wait(1).to({y:-152.45},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({y:1},0).wait(1).to({y:0},0).wait(1).to({x:1,y:4},1,cjs.Ease.get(1)).wait(1).to({regX:86,regY:-146,x:83.25,y:-138.25},0).wait(1).to({regX:0,regY:0,x:-4,y:9},0).to({x:0,y:13},4).wait(8).to({regX:86,regY:-146,x:86,y:-135.25},0).wait(1).to({y:-143},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({y:2},0).wait(1).to({regX:86,regY:-146,x:86,y:-147},0).wait(1).to({regX:0,regY:0,x:0,y:-2},0).wait(1).to({regX:86,regY:-146,x:86,y:-146.15},0).wait(1).to({regX:0,regY:0,x:0,y:2},0).wait(1).to({regX:86,regY:-146,x:86,y:-145.5},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:86,regY:-146,x:86,y:-145.4},0).wait(1).to({y:-143},0).wait(1).to({y:-140.65},0).wait(1).to({regX:0,regY:0,x:0,y:6},0).wait(1).to({regX:86,regY:-146,x:86,y:-140.6},0).wait(1).to({y:-140.9},0).wait(1).to({regX:0,regY:0,x:0,y:5},0).wait(5).to({regX:86,regY:-146,x:86,y:-141.4},0).wait(1).to({y:-142.9},0).wait(1).to({y:-145.15},0).wait(1).to({y:-146.6},0).wait(1).to({regX:0,regY:0,x:0,y:-1},0).wait(1).to({regX:86,regY:-146,x:86,y:-146.25},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({y:5},0).wait(1).to({regX:86,regY:-146,x:86,y:-153.6},0).wait(1).to({regX:0,regY:0,x:0,y:-10},0).wait(1).to({regX:86,regY:-146,x:86,y:-155.2},0).wait(1).to({y:-152.45},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({y:1},0).wait(1).to({y:0},0).wait(9).to({regX:86,regY:-146,x:86,y:-153.5},0).wait(1).to({regX:0,regY:0,x:0,y:-10},0).wait(2).to({regX:86,regY:-146,x:86,y:-154},0).wait(1).to({y:-148},0).wait(1).to({regX:0,regY:0,x:0,y:8},0).to({y:5},2).wait(7).to({regX:86,regY:-146,x:86,y:-141.35},0).wait(1).to({y:-142.55},0).wait(1).to({y:-144.5},0).wait(1).to({y:-145.7},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({y:2},0).wait(1).to({y:-7},0).wait(1).to({regX:86,regY:-146,x:86,y:-150.95},0).wait(1).to({y:-145.05},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({y:-7},0).wait(1).to({regX:86,regY:-146,x:86,y:-150.95},0).wait(1).to({y:-145.05},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({regX:86,regY:-146,x:86,y:-145.1},0).wait(1).to({y:-145.75},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:86,regY:-146,x:89,y:-142.6},0).wait(1).to({regX:0,regY:0,x:4,y:4.55},0).to({x:-2,y:8.8},2).wait(1).to({regX:86,regY:-146,x:85.15,y:-136.55},0).wait(1).to({x:85.8,y:-136.15},0).wait(1).to({regX:0,regY:0,x:0,y:10},0).wait(5).to({regX:86,regY:-146,x:86,y:-136.7},0).wait(1).to({y:-139.15},0).wait(1).to({y:-142.85},0).wait(1).to({y:-145.35},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(11).to({regX:86,regY:-146,x:86,y:-145.75},0).wait(1).to({y:-144.8},0).wait(1).to({y:-143},0).wait(1).to({y:-141.25},0).wait(1).to({y:-140.3},0).wait(1).to({regX:0,regY:0,x:0,y:6},0).wait(1).to({regX:86,regY:-146,x:86,y:-140.3},0).wait(1).to({y:-141.25},0).wait(1).to({y:-143},0).wait(1).to({y:-144.8},0).wait(1).to({y:-145.75},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:86,regY:-146,x:86,y:-144.8},0).wait(1).to({y:-141.25},0).wait(1).to({regX:0,regY:0,x:0,y:6},0).wait(1).to({regX:86,regY:-146,x:86,y:-143},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:86,regY:-146,x:86,y:-145.2},0).wait(1).to({y:-142},0).wait(1).to({y:-138.85},0).wait(1).to({regX:0,regY:0,x:0,y:8},0).wait(1).to({regX:86,regY:-146,x:86,y:-138.85},0).wait(1).to({y:-142},0).wait(1).to({y:-145.2},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:86,regY:-146,x:86,y:-145.7},0).wait(1).to({y:-144.45},0).wait(1).to({y:-143.2},0).wait(1).to({regX:0,regY:0,x:0,y:3.15},0).wait(1).to({regX:86,regY:-146,x:86,y:-143.2},0).wait(1).to({y:-144.45},0).wait(1).to({y:-145.7},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:86,regY:-146,x:86,y:-145.4},0).wait(1).to({y:-143},0).wait(1).to({y:-140.65},0).wait(1).to({regX:0,regY:0,x:0,y:6},0).wait(1).to({regX:86,regY:-146,x:86,y:-140.65},0).wait(1).to({y:-143},0).wait(1).to({y:-145.4},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-323,-691.2,926.9,926.2);


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
(lib._430_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{end0:14,scene1:15,end1:171,scene2:172,end2:326,scene3:327,end3:466,scene4:467,end4:616,scene5:617,end5:740,scene6:741,end6:862,scene7:863,end7:1031});

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
		exportRoot._g.m1 = "すっごーい!";
		exportRoot._g.m2 = "";
		exportRoot._g.m3 = "";
		exportRoot._g.m4 = "";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 1);
		
		this.ch1.gotoAndPlay("swing");
	}
	this.frame_44 = function() {
		exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
		exportRoot._g.m2 = "けられて､";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 2);
		
		this.ch1.gotoAndPlay("jump");
	}
	this.frame_75 = function() {
		exportRoot._g.m2 = "けられて､きれー……♪";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 2);
		
		this.ch1.gotoAndPlay("jump");
	}
	this.frame_102 = function() {
		exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
		exportRoot._g.m3 = "りｸﾘｽﾏｽって､";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 3);
	}
	this.frame_124 = function() {
		exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 8);
		
		this.ch1.gotoAndPlay("swing");
	}
	this.frame_145 = function() {
		exportRoot._g.m4 = "やぁん､";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 2);
		
		this.ch1.gotoAndPlay("jump");
	}
	this.frame_155 = function() {
		exportRoot._g.m4 = this.m.t[exportRoot._g.idx][4];
		exportRoot._u.setText();
		
		this.ch1.gotoAndPlay("nod_chord");
	}
	this.frame_171 = function() {
		exportRoot._u.updateTalk();
		
		exportRoot._u.setFace("ch1", 2);
		
		this.ch1.gotoAndPlay("standby");
	}
	this.frame_172 = function() {
		exportRoot._g.m1 = "ﾎﾗﾎﾗ､";
		exportRoot._g.m2 = "";
		exportRoot._g.m3 = "";
		exportRoot._g.m4 = "";
		exportRoot._u.setText();
		
		this.ch1.gotoAndPlay("nod_double");
	}
	this.frame_182 = function() {
		exportRoot._g.m1 = "ﾎﾗﾎﾗ､ﾌﾟﾛﾃﾞｭｰｻｰ! ";
		exportRoot._u.setText();
	}
	this.frame_193 = function() {
		exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
		exportRoot._u.setText();
		
		
		exportRoot._u.setFace("ch1", 1);
		this.ch1.gotoAndPlay("swing");
	}
	this.frame_222 = function() {
		exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
		exportRoot._g.m3 = "う? ";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 9);
	}
	this.frame_266 = function() {
		exportRoot._g.m3 = "う? う～ん､";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 7);
		this.ch1.gotoAndPlay("nod2");
	}
	this.frame_284 = function() {
		exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
		exportRoot._g.m4 = "ど､";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 2);
		//this.ch1.gotoAndPlay("nod2");
	}
	this.frame_308 = function() {
		exportRoot._g.m4 = this.m.t[exportRoot._g.idx][4];
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 9);
		this.ch1.gotoAndPlay("swing");
	}
	this.frame_326 = function() {
		exportRoot._u.updateTalk();
		
		exportRoot._u.setFace("ch1", 9);
		
		
		this.ch1.gotoAndPlay("standby");
	}
	this.frame_327 = function() {
		exportRoot._g.m1 = "あ､";
		exportRoot._g.m2 = "";
		exportRoot._g.m3 = "";
		exportRoot._g.m4 = "";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 2);
		this.ch1.gotoAndPlay("notice");
	}
	this.frame_338 = function() {
		exportRoot._g.m1 = "あ､さては照れてんな～? ";
		exportRoot._g.m2 = "";
		exportRoot._g.m3 = "";
		exportRoot._g.m4 = "";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 9);
		this.ch1.gotoAndPlay("swing_on");
	}
	this.frame_365 = function() {
		exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
		exportRoot._g.m2 = "ﾌﾟﾛﾃﾞｭｰｻｰってば☆";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 2);
		this.ch1.gotoAndPlay("swing_off");
	}
	this.frame_380 = function() {
		this.ch1.gotoAndPlay("jump");
	}
	this.frame_392 = function() {
		exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
		exportRoot._g.m3 = "よ～､";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 10);
	}
	this.frame_414 = function() {
		exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
		exportRoot._g.m4 = "よ」って☆";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 6);
		this.ch1.gotoAndPlay("nod2");
	}
	this.frame_443 = function() {
		exportRoot._u.setFace("ch1", 2);
		//this.ch1.gotoAndPlay("jump");
	}
	this.frame_449 = function() {
		exportRoot._g.m4 = this.m.t[exportRoot._g.idx][4];
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 9);
		
		this.ch1.gotoAndPlay("nod_double");
	}
	this.frame_466 = function() {
		exportRoot._u.updateTalk();
		
		exportRoot._u.setFace("ch1", 9);
	}
	this.frame_467 = function() {
		exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
		exportRoot._g.m2 = "";
		exportRoot._g.m3 = "";
		exportRoot._g.m4 = "";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 6);
	}
	this.frame_499 = function() {
		exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
		exportRoot._g.m3 = "じゃん? ";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 9);
		this.ch1.gotoAndPlay("swing");
	}
	this.frame_538 = function() {
		exportRoot._g.m3 = "じゃん? それに､";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 2);
		
		this.ch1.gotoAndPlay("nod");
	}
	this.frame_546 = function() {
		this.ch1.gotoAndPlay("nod");
	}
	this.frame_553 = function() {
		this.ch1.gotoAndPlay("nod");
	}
	this.frame_568 = function() {
		exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
		exportRoot._g.m4 = "には､";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 4);
	}
	this.frame_589 = function() {
		exportRoot._g.m4 = "には､ﾌﾟﾚｾﾞﾝﾄも……";
		exportRoot._u.setText();
	}
	this.frame_609 = function() {
		exportRoot._g.m4 = this.m.t[exportRoot._g.idx][4];
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 3);
		this.ch1.gotoAndPlay("nod");
	}
	this.frame_616 = function() {
		exportRoot._u.updateTalk();
		
		exportRoot._u.setFace("ch1", 3);
	}
	this.frame_617 = function() {
		exportRoot._g.m1 = "ｼﾞｬｰﾝ! ";
		exportRoot._g.m2 = "";
		exportRoot._g.m3 = "";
		exportRoot._g.m4 = "";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 3);
		
		this.ch1.gotoAndPlay("jump");
	}
	this.frame_628 = function() {
		exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 8);
	}
	this.frame_643 = function() {
		exportRoot._g.m2 = "はぁとからの､";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 2);
	}
	this.frame_657 = function() {
		exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
		exportRoot._g.m3 = "詰まったﾌﾟﾚｾﾞﾝﾄ♪";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 10);
	}
	this.frame_696 = function() {
		exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 2);
	}
	this.frame_715 = function() {
		exportRoot._g.m4 = this.m.t[exportRoot._g.idx][4];
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 3);
		
		this.ch1.gotoAndPlay("back_step");
	}
	this.frame_740 = function() {
		exportRoot._u.updateTalk();
		
		exportRoot._u.setFace("ch1", 3);
	}
	this.frame_741 = function() {
		exportRoot._g.m1 = "欲しければ､";
		exportRoot._g.m2 = "";
		exportRoot._g.m3 = "";
		exportRoot._g.m4 = "";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 2);
	}
	this.frame_751 = function() {
		exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
		exportRoot._g.m2 = "みろ☆";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 10);
	}
	this.frame_775 = function() {
		exportRoot._g.m2 = "みろ☆ほれほれ～い､";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 3);
		
		this.ch1.gotoAndPlay("nod_double2");
	}
	this.frame_793 = function() {
		exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
		exportRoot._g.m3 = "こっち♪";
		exportRoot._u.setText();
		
		this.ch1.gotoAndPlay("swing");
	}
	this.frame_802 = function() {
		exportRoot._g.m3 = "こっち♪って､";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 2);
	}
	this.frame_810 = function() {
		exportRoot._g.m3 = "こっち♪って､あ! ";
		exportRoot._u.setText();
		
		this.ch1.gotoAndPlay("exclamation");
	}
	this.frame_817 = function() {
		exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
		exportRoot._u.setText();
	}
	this.frame_829 = function() {
		exportRoot._g.m4 = "あ～ん､";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 9);
		
		this.ch1.gotoAndPlay("nod2");
	}
	this.frame_843 = function() {
		exportRoot._g.m4 = this.m.t[exportRoot._g.idx][4];
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 1);
		
		this.ch1.gotoAndPlay("swing");
	}
	this.frame_862 = function() {
		exportRoot._u.updateTalk();
		
		exportRoot._u.setFace("ch1", 1);
	}
	this.frame_863 = function() {
		exportRoot._g.m1 = "…";
		exportRoot._g.m2 = "";
		exportRoot._g.m3 = "";
		exportRoot._g.m4 = "";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 9);
	}
	this.frame_874 = function() {
		exportRoot._g.m1 = "……";
		exportRoot._g.m2 = "";
		exportRoot._g.m3 = "";
		exportRoot._g.m4 = "";
		exportRoot._u.setText();
	}
	this.frame_887 = function() {
		exportRoot._g.m1 = "……なんかはぁとたち､";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 2);
		
		this.ch1.gotoAndPlay("nod2");
	}
	this.frame_912 = function() {
		exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
		exportRoot._g.m2 = "ﾙっぽいな☆";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 9);
		
		this.ch1.gotoAndPlay("swing");
	}
	this.frame_939 = function() {
		exportRoot._g.m2 = "ﾙっぽいな☆でも､";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 7);
		
		this.ch1.gotoAndPlay("nod");
	}
	this.frame_958 = function() {
		exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
		exportRoot._u.setText();
		
		
		exportRoot._u.setFace("ch1", 3);
		
		this.ch1.gotoAndPlay("swing_on");
	}
	this.frame_981 = function() {
		exportRoot._g.m3 = "ｸﾘｽﾏｽだし､";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 8);
		this.ch1.gotoAndPlay("swing_off");
	}
	this.frame_1001 = function() {
		exportRoot._g.m5 = this.m.t[exportRoot._g.idx][5];
		exportRoot._g.m6 = this.m.t[exportRoot._g.idx][6]; 
		exportRoot._u.setText("finish", 5);
	}
	this.frame_1031 = function() {
		//最後のシーンであることをHTML側に通知
		exportRoot._g.end_flag = true;
		
		//label「scene7」通過後のskip対策
		exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
		exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
		exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
		exportRoot._g.m4 = this.m.t[exportRoot._g.idx][4];
		exportRoot._g.m5 = this.m.t[exportRoot._g.idx][5];
		exportRoot._g.m6 = this.m.t[exportRoot._g.idx][6]; // 2行目がある場合
		
		exportRoot._u.setText("finish", 5);
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1).call(this.frame_15).wait(29).call(this.frame_44).wait(31).call(this.frame_75).wait(27).call(this.frame_102).wait(22).call(this.frame_124).wait(21).call(this.frame_145).wait(10).call(this.frame_155).wait(16).call(this.frame_171).wait(1).call(this.frame_172).wait(10).call(this.frame_182).wait(11).call(this.frame_193).wait(29).call(this.frame_222).wait(44).call(this.frame_266).wait(18).call(this.frame_284).wait(24).call(this.frame_308).wait(18).call(this.frame_326).wait(1).call(this.frame_327).wait(11).call(this.frame_338).wait(27).call(this.frame_365).wait(15).call(this.frame_380).wait(12).call(this.frame_392).wait(22).call(this.frame_414).wait(29).call(this.frame_443).wait(6).call(this.frame_449).wait(17).call(this.frame_466).wait(1).call(this.frame_467).wait(32).call(this.frame_499).wait(39).call(this.frame_538).wait(8).call(this.frame_546).wait(7).call(this.frame_553).wait(15).call(this.frame_568).wait(21).call(this.frame_589).wait(20).call(this.frame_609).wait(7).call(this.frame_616).wait(1).call(this.frame_617).wait(11).call(this.frame_628).wait(15).call(this.frame_643).wait(14).call(this.frame_657).wait(39).call(this.frame_696).wait(19).call(this.frame_715).wait(25).call(this.frame_740).wait(1).call(this.frame_741).wait(10).call(this.frame_751).wait(24).call(this.frame_775).wait(18).call(this.frame_793).wait(9).call(this.frame_802).wait(8).call(this.frame_810).wait(7).call(this.frame_817).wait(12).call(this.frame_829).wait(14).call(this.frame_843).wait(19).call(this.frame_862).wait(1).call(this.frame_863).wait(11).call(this.frame_874).wait(13).call(this.frame_887).wait(25).call(this.frame_912).wait(27).call(this.frame_939).wait(19).call(this.frame_958).wait(23).call(this.frame_981).wait(20).call(this.frame_1001).wait(30).call(this.frame_1031).wait(5));

	// shield
	this.instance = new lib.shield();
	this.instance.parent = this;
	this.instance.setTransform(120,160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1036));

	// sender
	this.sender = new lib.sender();
	this.sender.name = "sender";
	this.sender.parent = this;
	this.sender.setTransform(-100,0);
	this.sender._off = true;

	this.timeline.addTween(cjs.Tween.get(this.sender).wait(1031).to({_off:false},0).wait(5));

	// SP_loader
	this.loader = new lib.voice_loader_container();
	this.loader.name = "loader";
	this.loader.parent = this;
	this.loader.setTransform(190.05,12,1,1,0,0,0,-50.1,11);

	this.timeline.addTween(cjs.Tween.get(this.loader).wait(1036));

	// place
	this.instance_1 = new lib.tie();
	this.instance_1.parent = this;
	this.instance_1.setTransform(120,155);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({alpha:0.1992},3,cjs.Ease.get(1)).to({_off:true},1).wait(1017));

	// SP_pusher
	this.instance_2 = new lib.pusher_next();
	this.instance_2.parent = this;
	this.instance_2.setTransform(120,290);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off:false},0).to({_off:true},3).wait(1021));

	// fader
	this.instance_3 = new lib.dark();
	this.instance_3.parent = this;
	this.instance_3.setTransform(120,155);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},15).wait(1021));

	// window
	this.window_1 = new lib.window_container();
	this.window_1.name = "window_1";
	this.window_1.parent = this;
	this.window_1.setTransform(2,321.1);

	this.timeline.addTween(cjs.Tween.get(this.window_1).wait(15).to({y:301.1},0).wait(1).to({regX:132.8,regY:98.8,x:134.8,y:398.6},0).wait(1).to({y:394.65},0).wait(1).to({y:388},0).wait(1).to({y:378.75},0).wait(1).to({y:367.25},0).wait(1).to({y:354.25},0).wait(1).to({y:340.85},0).wait(1).to({y:328.45},0).wait(1).to({y:318.45},0).wait(1).to({y:312},0).wait(1).to({regX:0,regY:0,x:2,y:211},0).wait(1).to({regX:132.8,regY:98.8,x:134.8,y:310.3},0).wait(1).to({y:311.9},0).wait(1).to({regX:0,regY:0,x:2,y:214},0).wait(961).to({regX:132.8,regY:98.8,x:134.8,y:313.9},0).wait(1).to({y:317.75},0).wait(1).to({y:325},0).wait(1).to({y:336.4},0).wait(1).to({y:351.7},0).wait(1).to({y:368.85},0).wait(1).to({y:384.15},0).wait(1).to({y:395.55},0).wait(1).to({y:402.8},0).wait(1).to({y:406.65},0).wait(1).to({regX:0,regY:0,x:2,y:309},0).to({_off:true},1).wait(35));

	// window
	this.window_2 = new lib.finish_text_container();
	this.window_2.name = "window_2";
	this.window_2.parent = this;
	this.window_2.setTransform(120,322);
	this.window_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.window_2).wait(1001).to({_off:false},0).wait(1).to({regX:16.8,regY:-1.3,x:136.8,y:320.2},0).wait(1).to({y:318.5},0).wait(1).to({y:315.2},0).wait(1).to({y:309.85},0).wait(1).to({y:302.4},0).wait(1).to({y:294.05},0).wait(1).to({y:287.1},0).wait(1).to({y:282.55},0).wait(1).to({y:280.25},0).wait(1).to({regX:0,regY:0,x:120,y:280.9},0).to({y:282.9},3).wait(22));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]},1001).wait(35));

	// glitters
	this.glitters = new lib.glitters();
	this.glitters.name = "glitters";
	this.glitters.parent = this;
	this.glitters._off = true;

	this.timeline.addTween(cjs.Tween.get(this.glitters).wait(1001).to({_off:false},0).wait(35));

	// SP_blur
	this.ranko_finish_blur = new lib.ranko_finish_blur();
	this.ranko_finish_blur.name = "ranko_finish_blur";
	this.ranko_finish_blur.parent = this;
	this.ranko_finish_blur._off = true;
	this.ranko_finish_blur.filters = [new cjs.ColorFilter(1, 1, 1, 1, 220, 220, 220, 0)];
	this.ranko_finish_blur.cache(-2,-2,244,314);

	this.timeline.addTween(cjs.Tween.get(this.ranko_finish_blur).wait(1001).to({_off:false},0).wait(1).to({regX:120,regY:155,x:120,y:155,alpha:0.9968},0).wait(1).to({alpha:0.9867},0).wait(1).to({alpha:0.9688},0).wait(1).to({alpha:0.9423},0).wait(1).to({alpha:0.906},0).wait(1).to({alpha:0.8587},0).wait(1).to({alpha:0.7993},0).wait(1).to({alpha:0.7268},0).wait(1).to({alpha:0.641},0).wait(1).to({alpha:0.5432},0).wait(1).to({alpha:0.4371},0).wait(1).to({alpha:0.3301},0).wait(1).to({alpha:0.2319},0).wait(1).to({alpha:0.1514},0).wait(1).to({alpha:0.0941},0).wait(1).to({alpha:0.0612},0).wait(1).to({regX:0,regY:0,x:0,y:0,alpha:0.0508},0).to({_off:true},1).wait(17));

	// character_face
	this.fns = new lib.finish_1();
	this.fns.name = "fns";
	this.fns.parent = this;
	this.fns.setTransform(120,168,1,1,0,0,0,120,168);
	this.fns._off = true;

	this.timeline.addTween(cjs.Tween.get(this.fns).wait(1001).to({_off:false},0).wait(35));

	// white_mask
	this.instance_9 = new lib.white_mask();
	this.instance_9.parent = this;
	this.instance_9.setTransform(120,155,1,1,0,0,0,120,155);
	this.instance_9.alpha = 0.0508;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(989).to({_off:false},0).to({alpha:0.8984},11).to({_off:true},1).wait(35));

	// overlay_black
	this.instance_10 = new lib.dark();
	this.instance_10.parent = this;
	this.instance_10.setTransform(120,155);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(15).to({_off:false},0).to({alpha:0},3).to({_off:true},1).wait(77).to({_off:false},0).to({alpha:1},6).to({alpha:0},8).to({_off:true},1).wait(506).to({_off:false,alpha:1},0).to({alpha:0},8).to({_off:true},1).wait(83).to({_off:false},0).to({alpha:1},6).to({alpha:0},8).to({_off:true},1).wait(312));

	// powder
	this.instance_11 = new lib.glitter_rise();
	this.instance_11.parent = this;
	this.instance_11.setTransform(194.25,-43.4,1.0489,1.0489,-2.749,0,0,5.1,-0.4);

	this.instance_12 = new lib.glitter_rise();
	this.instance_12.parent = this;
	this.instance_12.setTransform(125.5,-5.3,1.155,1.0853,-4.8774,0,0,0,6.5);
	this.instance_12.alpha = 0.6992;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11}]}).to({state:[]},15).wait(1021));

	// overlay_top
	this.instance_13 = new lib.overlay_black();
	this.instance_13.parent = this;
	this.instance_13.setTransform(120,-2);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(15).to({_off:false},0).wait(1).to({regX:1,x:121,y:-3.2},0).wait(1).to({y:-6.85},0).wait(1).to({y:-12.75},0).wait(1).to({y:-20.7},0).wait(1).to({y:-30.4},0).wait(1).to({y:-41.5},0).wait(1).to({y:-53.55},0).wait(1).to({y:-65.9},0).wait(1).to({y:-78.05},0).wait(1).to({y:-89.25},0).wait(1).to({y:-98.95},0).wait(1).to({y:-106.45},0).wait(1).to({y:-111.3},0).wait(1).to({regX:0,x:120,y:-113},0).to({_off:true},73).wait(515).to({_off:false},0).to({_off:true},98).wait(321));

	// overlay_bottom
	this.instance_14 = new lib.overlay_black();
	this.instance_14.parent = this;
	this.instance_14.setTransform(120,308);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(15).to({_off:false},0).wait(1).to({regX:1,x:121,y:308.45},0).wait(1).to({y:309.8},0).wait(1).to({y:312.05},0).wait(1).to({y:315.05},0).wait(1).to({y:318.75},0).wait(1).to({y:322.95},0).wait(1).to({y:327.5},0).wait(1).to({y:332.15},0).wait(1).to({y:336.75},0).wait(1).to({y:341},0).wait(1).to({y:344.65},0).wait(1).to({y:347.5},0).wait(1).to({y:349.35},0).wait(1).to({regX:0,x:120,y:350},0).to({_off:true},73).wait(515).to({_off:false},0).to({_off:true},98).wait(321));

	// effect
	this.instance_15 = new lib.gliter_container();
	this.instance_15.parent = this;
	this.instance_15.setTransform(143.7,-12.25,1.0599,1.0599,-4.2877,0,0,-0.1,2.5);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(15).to({_off:false},0).wait(470).to({regX:0,scaleX:1.1997,scaleY:1.1997,rotation:-4.2598,x:145.75,y:-12.2},35).wait(516));

	// notice
	this.instance_16 = new lib.notice();
	this.instance_16.parent = this;
	this.instance_16.setTransform(203.3,138.2,1.0476,1.0476,124.0725,0,0,-29.3,20.3);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(628).to({_off:false},0).to({_off:true},2).wait(1).to({_off:false,regX:-29.2,regY:20.4,scaleX:1.0482,scaleY:1.0482,rotation:124.0706,x:203.1,y:138.15},0).wait(3).to({regX:-28.8,regY:20.5,x:202.75,y:138.45,alpha:0.6944},0).wait(1).to({alpha:0.4444},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.1111},0).wait(1).to({alpha:0.0278},0).wait(1).to({regX:-29.2,regY:20.4,x:203.1,y:138.15,alpha:0},0).to({_off:true},1).wait(396));

	// present
	this.instance_17 = new lib.book_1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-254.05,467,1,1,0,0,0,148,100);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(617).to({regX:148.1,scaleX:0.86,scaleY:0.86,x:224.8,y:283.2},0).wait(1).to({regX:74,regY:50,x:161.1,y:237.4},0).wait(1).to({y:225.35},0).wait(1).to({y:201},0).wait(1).to({y:185.4},0).wait(1).to({regX:148.1,regY:100,x:224.8,y:224.85},0).to({y:233.45},3).to({y:231.3},2).to({_off:true},88).wait(321));

	// ch
	this.ch1 = new lib.character1_container();
	this.ch1.name = "ch1";
	this.ch1.parent = this;
	this.ch1.setTransform(-178,570,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.ch1).wait(15).to({scaleX:0.74,scaleY:0.74,x:-588.6,y:316.05},0).wait(87).to({regX:0.1,regY:0.1,scaleX:0.5854,scaleY:0.5854,x:36.65,y:254.4},0).wait(71).to({regX:141.5,regY:-229.2,scaleX:0.5855,scaleY:0.5855,x:119.4,y:120.15},0).wait(1).to({scaleX:0.5858,scaleY:0.5858,x:119.45},0).wait(1).to({scaleX:0.5862,scaleY:0.5862},0).wait(1).to({scaleX:0.5868,scaleY:0.5868},0).wait(1).to({scaleX:0.5876,scaleY:0.5876,y:120.2},0).wait(1).to({scaleX:0.5886,scaleY:0.5886,x:119.5},0).wait(1).to({scaleX:0.5899,scaleY:0.5899,x:119.55,y:120.25},0).wait(1).to({scaleX:0.5916,scaleY:0.5916},0).wait(1).to({scaleX:0.5935,scaleY:0.5935,x:119.6,y:120.3},0).wait(1).to({scaleX:0.5958,scaleY:0.5958,y:120.35},0).wait(1).to({scaleX:0.5985,scaleY:0.5985,x:119.7,y:120.4},0).wait(1).to({scaleX:0.6017,scaleY:0.6017,x:119.75,y:120.5},0).wait(1).to({scaleX:0.6054,scaleY:0.6054,x:119.8,y:120.6},0).wait(1).to({scaleX:0.6097,scaleY:0.6097,x:119.9,y:120.65},0).wait(1).to({scaleX:0.6144,scaleY:0.6144,x:120.05,y:120.8},0).wait(1).to({scaleX:0.6196,scaleY:0.6196,x:120.15,y:120.9},0).wait(1).to({scaleX:0.6251,scaleY:0.6251,x:120.25,y:120.95},0).wait(1).to({scaleX:0.6308,scaleY:0.6308,x:120.35,y:121.15},0).wait(1).to({scaleX:0.6363,scaleY:0.6363,x:120.5,y:121.2},0).wait(1).to({scaleX:0.6415,scaleY:0.6415,x:120.55,y:121.3},0).wait(1).to({scaleX:0.6462,scaleY:0.6462,x:120.7,y:121.45},0).wait(1).to({scaleX:0.6504,scaleY:0.6504,x:120.8,y:121.55},0).wait(1).to({scaleX:0.654,scaleY:0.654,x:120.85,y:121.6},0).wait(1).to({scaleX:0.657,scaleY:0.657,x:120.9,y:121.65},0).wait(1).to({scaleX:0.6596,scaleY:0.6596,x:120.95,y:121.75},0).wait(1).to({scaleX:0.6617,scaleY:0.6617},0).wait(1).to({scaleX:0.6634,scaleY:0.6634,x:121,y:121.8},0).wait(1).to({scaleX:0.6647,scaleY:0.6647,x:121.05,y:121.85},0).wait(1).to({scaleX:0.6658,scaleY:0.6658},0).wait(1).to({scaleX:0.6665,scaleY:0.6665,x:121.1,y:121.9},0).wait(1).to({scaleX:0.667,scaleY:0.667,y:121.85},0).wait(1).to({scaleX:0.6673,scaleY:0.6673,y:121.9},0).wait(1).to({regX:0.1,regY:0.1,scaleX:0.6674,scaleY:0.6674,x:26.75,y:274.9},0).wait(134).to({regX:141.5,regY:-229.2,scaleX:0.6675,scaleY:0.6675,x:121.1,y:121.85},0).wait(1).to({scaleX:0.6677,scaleY:0.6677,x:121.15},0).wait(1).to({scaleX:0.6681,scaleY:0.6681},0).wait(1).to({scaleX:0.6687,scaleY:0.6687,y:121.9},0).wait(1).to({scaleX:0.6696,scaleY:0.6696,x:121.2,y:121.95},0).wait(1).to({scaleX:0.6707,scaleY:0.6707},0).wait(1).to({scaleX:0.6721,scaleY:0.6721,x:121.25,y:122},0).wait(1).to({scaleX:0.6738,scaleY:0.6738,x:121.3,y:122.05},0).wait(1).to({scaleX:0.6759,scaleY:0.6759,x:121.35,y:122.15},0).wait(1).to({scaleX:0.6785,scaleY:0.6785,x:121.4,y:122.2},0).wait(1).to({scaleX:0.6816,scaleY:0.6816,x:121.5,y:122.3},0).wait(1).to({scaleX:0.6852,scaleY:0.6852,x:121.6,y:122.4},0).wait(1).to({scaleX:0.6893,scaleY:0.6893,x:121.75,y:122.5},0).wait(1).to({scaleX:0.6937,scaleY:0.6937,x:121.85,y:122.65},0).wait(1).to({scaleX:0.6981,scaleY:0.6981,x:122,y:122.8},0).wait(1).to({scaleX:0.7024,scaleY:0.7024,x:122.1,y:122.9},0).wait(1).to({scaleX:0.7063,scaleY:0.7063,x:122.2,y:123},0).wait(1).to({scaleX:0.7097,scaleY:0.7097,x:122.25,y:123.15},0).wait(1).to({scaleX:0.7125,scaleY:0.7125,x:122.35,y:123.2},0).wait(1).to({scaleX:0.7148,scaleY:0.7148,x:122.45,y:123.25},0).wait(1).to({scaleX:0.7166,scaleY:0.7166,x:122.5,y:123.35},0).wait(1).to({scaleX:0.718,scaleY:0.718,y:123.4},0).wait(1).to({scaleX:0.7191,scaleY:0.7191,x:122.55,y:123.45},0).wait(1).to({scaleX:0.7199,scaleY:0.7199},0).wait(1).to({scaleX:0.7204,scaleY:0.7204,x:122.6},0).wait(1).to({scaleX:0.7207,scaleY:0.7207},0).wait(1).to({regX:0.2,regY:0.2,scaleX:0.7208,scaleY:0.7208,x:20.75,y:288.8},0).wait(103).to({regX:141.5,regY:-229.2,scaleX:0.7207,scaleY:0.7207,x:122.6,y:123.4},0).wait(1).to({scaleX:0.7205,scaleY:0.7205,x:122.55},0).wait(1).to({scaleX:0.7202,scaleY:0.7202},0).wait(1).to({scaleX:0.7198,scaleY:0.7198,y:123.45},0).wait(1).to({scaleX:0.7192,scaleY:0.7192,x:122.5,y:123.4},0).wait(1).to({scaleX:0.7185,scaleY:0.7185},0).wait(1).to({scaleX:0.7176,scaleY:0.7176,y:123.35},0).wait(1).to({scaleX:0.7165,scaleY:0.7165},0).wait(1).to({scaleX:0.7152,scaleY:0.7152,x:122.45,y:123.3},0).wait(1).to({scaleX:0.7138,scaleY:0.7138,y:123.25},0).wait(1).to({scaleX:0.7121,scaleY:0.7121,x:122.4},0).wait(1).to({scaleX:0.7102,scaleY:0.7102,y:123.2},0).wait(1).to({scaleX:0.7081,scaleY:0.7081,x:122.35,y:123.15},0).wait(1).to({scaleX:0.7057,scaleY:0.7057,x:122.3,y:123.1},0).wait(1).to({scaleX:0.7031,scaleY:0.7031,x:122.25,y:123.05},0).wait(1).to({scaleX:0.7002,scaleY:0.7002,x:122.2,y:123},0).wait(1).to({scaleX:0.6969,scaleY:0.6969,x:122.1,y:122.9},0).wait(1).to({scaleX:0.6934,scaleY:0.6934,x:122.05},0).wait(1).to({scaleX:0.6895,scaleY:0.6895,x:122,y:122.75},0).wait(1).to({scaleX:0.6852,scaleY:0.6852,x:121.9,y:122.7},0).wait(1).to({scaleX:0.6805,scaleY:0.6805,x:121.85,y:122.6},0).wait(1).to({scaleX:0.6754,scaleY:0.6754,x:121.7,y:122.5},0).wait(1).to({scaleX:0.6699,scaleY:0.6699,x:121.65,y:122.35},0).wait(1).to({scaleX:0.664,scaleY:0.664,x:121.5,y:122.25},0).wait(1).to({scaleX:0.6577,scaleY:0.6577,x:121.4,y:122.1},0).wait(1).to({scaleX:0.6509,scaleY:0.6509,x:121.3,y:121.95},0).wait(1).to({scaleX:0.6438,scaleY:0.6438,x:121.15,y:121.85},0).wait(1).to({scaleX:0.6364,scaleY:0.6364,x:121.05,y:121.7},0).wait(1).to({scaleX:0.6288,scaleY:0.6288,x:120.85,y:121.55},0).wait(1).to({scaleX:0.621,scaleY:0.621,x:120.75,y:121.4},0).wait(1).to({scaleX:0.6132,scaleY:0.6132,x:120.6,y:121.2},0).wait(1).to({scaleX:0.6054,scaleY:0.6054,x:120.45,y:121.05},0).wait(1).to({scaleX:0.5979,scaleY:0.5979,x:120.35,y:120.85},0).wait(1).to({scaleX:0.5906,scaleY:0.5906,x:120.15,y:120.75},0).wait(1).to({scaleX:0.5837,scaleY:0.5837,x:120.05,y:120.55},0).wait(1).to({scaleX:0.5772,scaleY:0.5772,x:119.95,y:120.45},0).wait(1).to({scaleX:0.5712,scaleY:0.5712,x:119.8,y:120.35},0).wait(1).to({scaleX:0.5656,scaleY:0.5656,x:119.75,y:120.2},0).wait(1).to({scaleX:0.5605,scaleY:0.5605,x:119.65,y:120.1},0).wait(1).to({scaleX:0.5558,scaleY:0.5558,x:119.55,y:120},0).wait(1).to({scaleX:0.5515,scaleY:0.5515,x:119.5,y:119.95},0).wait(1).to({scaleX:0.5477,scaleY:0.5477,x:119.4,y:119.8},0).wait(1).to({scaleX:0.5442,scaleY:0.5442,x:119.35,y:119.75},0).wait(1).to({scaleX:0.5411,scaleY:0.5411,x:119.25,y:119.7},0).wait(1).to({scaleX:0.5384,scaleY:0.5384,y:119.65},0).wait(1).to({scaleX:0.536,scaleY:0.536,x:119.2,y:119.6},0).wait(1).to({scaleX:0.5338,scaleY:0.5338,y:119.55},0).wait(1).to({scaleX:0.532,scaleY:0.532,x:119.1},0).wait(1).to({scaleX:0.5303,scaleY:0.5303,y:119.5},0).wait(1).to({scaleX:0.529,scaleY:0.529,x:119.05,y:119.45},0).wait(1).to({scaleX:0.5278,scaleY:0.5278,y:119.4},0).wait(1).to({scaleX:0.5269,scaleY:0.5269},0).wait(1).to({scaleX:0.5262,scaleY:0.5262,x:119},0).wait(1).to({scaleX:0.5256,scaleY:0.5256},0).wait(1).to({scaleX:0.5252,scaleY:0.5252,y:119.35},0).wait(1).to({scaleX:0.525,scaleY:0.525},0).wait(1).to({regX:0.2,regY:0.3,scaleX:0.5249,scaleY:0.5249,x:44.85,y:239.8},0).wait(93).to({regX:0.4,regY:0.5,scaleX:0.6197,scaleY:0.6197,x:14.55,y:277.15},0).wait(98).to({regX:0.5,regY:1,scaleX:0.48,scaleY:0.48,x:71.45,y:229.25},0).wait(1).to({regX:141.5,regY:-229.2,scaleX:0.4799,scaleY:0.4799,x:139.05,y:118.65},0).wait(1).to({scaleX:0.4796,scaleY:0.4796,x:138.85,y:118.5},0).wait(1).to({scaleX:0.479,scaleY:0.479,x:138.6,y:118.15},0).wait(1).to({scaleX:0.4781,scaleY:0.4781,x:138.05,y:117.65},0).wait(1).to({scaleX:0.4766,scaleY:0.4766,x:137.3,y:116.75},0).wait(1).to({scaleX:0.4746,scaleY:0.4746,x:136.2,y:115.65},0).wait(1).to({scaleX:0.4723,scaleY:0.4723,x:135,y:114.35},0).wait(1).to({scaleX:0.4705,scaleY:0.4705,x:133.95,y:113.25},0).wait(1).to({scaleX:0.4692,scaleY:0.4692,x:133.3,y:112.5},0).wait(1).to({scaleX:0.4685,scaleY:0.4685,x:132.9,y:112.1},0).wait(1).to({scaleX:0.4681,scaleY:0.4681,x:132.7,y:111.85},0).wait(1).to({regX:0.5,regY:0.8,scaleX:0.468,scaleY:0.468,x:66.7,y:219.55},0).wait(67).to({regX:141.5,regY:-229.2,scaleX:0.4682,scaleY:0.4682,x:132.65,y:111.95},0).wait(1).to({scaleX:0.4689,scaleY:0.4689,y:111.9},0).wait(1).to({scaleX:0.4702,scaleY:0.4702,x:132.7},0).wait(1).to({scaleX:0.4722,scaleY:0.4722,x:132.65},0).wait(1).to({scaleX:0.4749,scaleY:0.4749,x:132.7,y:111.85},0).wait(1).to({scaleX:0.4785,scaleY:0.4785,x:132.75,y:111.9},0).wait(1).to({scaleX:0.4831,scaleY:0.4831,y:111.85},0).wait(1).to({scaleX:0.4889,scaleY:0.4889,x:132.85},0).wait(1).to({scaleX:0.4962,scaleY:0.4962,y:111.8},0).wait(1).to({scaleX:0.5049,scaleY:0.5049,x:132.95,y:111.75},0).wait(1).to({scaleX:0.5153,scaleY:0.5153,x:133,y:111.7},0).wait(1).to({scaleX:0.527,scaleY:0.527,x:133.1,y:111.65},0).wait(1).to({scaleX:0.5393,scaleY:0.5393,x:133.2,y:111.6},0).wait(1).to({scaleX:0.5514,scaleY:0.5514,x:133.35,y:111.55},0).wait(1).to({scaleX:0.5624,scaleY:0.5624,x:133.45,y:111.5},0).wait(1).to({scaleX:0.5718,scaleY:0.5718,x:133.5,y:111.45},0).wait(1).to({scaleX:0.5795,scaleY:0.5795,x:133.55},0).wait(1).to({scaleX:0.5855,scaleY:0.5855,x:133.6,y:111.4},0).wait(1).to({scaleX:0.5902,scaleY:0.5902,y:111.35},0).wait(1).to({scaleX:0.5937,scaleY:0.5937,x:133.65},0).wait(1).to({scaleX:0.5962,scaleY:0.5962},0).wait(1).to({scaleX:0.5978,scaleY:0.5978,x:133.7},0).wait(1).to({scaleX:0.5987,scaleY:0.5987,y:111.3},0).wait(1).to({regX:0.4,regY:0.8,scaleX:0.599,scaleY:0.599,x:49.25,y:249.15},0).to({_off:true},184).wait(35));

	// glitter
	this.instance_18 = new lib.glitters2();
	this.instance_18.parent = this;
	this.instance_18.setTransform(42.95,243.55,1,1,0,0,0,42,243.3);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(15).to({_off:false},0).to({y:307.3},86).to({_off:true},1).wait(934));

	// bg
	this.bg1 = new lib.bg_zoom_half();
	this.bg1.name = "bg1";
	this.bg1.parent = this;
	this.bg1.setTransform(-1187.75,-221,1.27,1.27);

	this.timeline.addTween(cjs.Tween.get(this.bg1).wait(15).to({scaleX:0.85,scaleY:0.85,x:0,y:-15.95},0).to({y:33.75},86).wait(1).to({regX:-0.1,regY:-0.1,scaleX:0.5854,scaleY:0.5854,x:-117.9,y:-36},0).wait(71).to({regX:350,regY:350,scaleX:0.5855,scaleY:0.5855,x:87.1,y:169},0).wait(1).to({scaleX:0.5858,scaleY:0.5858,x:87.05},0).wait(1).to({scaleX:0.5862,scaleY:0.5862,y:169.05},0).wait(1).to({scaleX:0.5868,scaleY:0.5868,x:87,y:169.1},0).wait(1).to({scaleX:0.5876,scaleY:0.5876,y:169.2},0).wait(1).to({scaleX:0.5886,scaleY:0.5886,x:86.95,y:169.3},0).wait(1).to({scaleX:0.5899,scaleY:0.5899,y:169.5},0).wait(1).to({scaleX:0.5916,scaleY:0.5916,x:86.9,y:169.65},0).wait(1).to({scaleX:0.5935,scaleY:0.5935,x:86.8,y:169.8},0).wait(1).to({scaleX:0.5958,scaleY:0.5958,x:86.75,y:170.1},0).wait(1).to({scaleX:0.5985,scaleY:0.5985,x:86.65,y:170.35},0).wait(1).to({scaleX:0.6017,scaleY:0.6017,x:86.5,y:170.7},0).wait(1).to({scaleX:0.6054,scaleY:0.6054,x:86.4,y:171.1},0).wait(1).to({scaleX:0.6097,scaleY:0.6097,x:86.25,y:171.55},0).wait(1).to({scaleX:0.6144,scaleY:0.6144,x:86.1,y:172.05},0).wait(1).to({scaleX:0.6196,scaleY:0.6196,x:85.9,y:172.55},0).wait(1).to({scaleX:0.6251,scaleY:0.6251,x:85.7,y:173.15},0).wait(1).to({scaleX:0.6308,scaleY:0.6308,x:85.5,y:173.75},0).wait(1).to({scaleX:0.6363,scaleY:0.6363,x:85.3,y:174.3},0).wait(1).to({scaleX:0.6415,scaleY:0.6415,x:85.1,y:174.85},0).wait(1).to({scaleX:0.6462,scaleY:0.6462,x:84.95,y:175.35},0).wait(1).to({scaleX:0.6504,scaleY:0.6504,x:84.85,y:175.85},0).wait(1).to({scaleX:0.654,scaleY:0.654,x:84.7,y:176.2},0).wait(1).to({scaleX:0.657,scaleY:0.657,x:84.6,y:176.5},0).wait(1).to({scaleX:0.6596,scaleY:0.6596,x:84.5,y:176.8},0).wait(1).to({scaleX:0.6617,scaleY:0.6617,x:84.45,y:177},0).wait(1).to({scaleX:0.6634,scaleY:0.6634,x:84.4,y:177.2},0).wait(1).to({scaleX:0.6647,scaleY:0.6647,x:84.35,y:177.3},0).wait(1).to({scaleX:0.6658,scaleY:0.6658,x:84.3,y:177.4},0).wait(1).to({scaleX:0.6665,scaleY:0.6665,y:177.55},0).wait(1).to({scaleX:0.667,scaleY:0.667,x:84.25},0).wait(1).to({scaleX:0.6673,scaleY:0.6673,y:177.6},0).wait(1).to({regX:-0.1,regY:-0.1,scaleX:0.6674,scaleY:0.6674,x:-149.4,y:-56.1},0).wait(134).to({regX:350,regY:350,scaleX:0.6675,scaleY:0.6675,x:84.25,y:177.55},0).wait(1).to({scaleX:0.6677,scaleY:0.6677,y:177.6},0).wait(1).to({scaleX:0.6681,scaleY:0.6681,y:177.65},0).wait(1).to({scaleX:0.6687,scaleY:0.6687,y:177.7},0).wait(1).to({scaleX:0.6696,scaleY:0.6696,x:84.2,y:177.8},0).wait(1).to({scaleX:0.6707,scaleY:0.6707,y:177.95},0).wait(1).to({scaleX:0.6721,scaleY:0.6721,x:84.1,y:178.05},0).wait(1).to({scaleX:0.6738,scaleY:0.6738,x:84.05,y:178.25},0).wait(1).to({scaleX:0.6759,scaleY:0.6759,y:178.55},0).wait(1).to({scaleX:0.6785,scaleY:0.6785,x:84,y:178.85},0).wait(1).to({scaleX:0.6816,scaleY:0.6816,x:83.9,y:179.15},0).wait(1).to({scaleX:0.6852,scaleY:0.6852,x:83.75,y:179.55},0).wait(1).to({scaleX:0.6893,scaleY:0.6893,x:83.7,y:180.05},0).wait(1).to({scaleX:0.6937,scaleY:0.6937,x:83.6,y:180.55},0).wait(1).to({scaleX:0.6981,scaleY:0.6981,x:83.45,y:181.05},0).wait(1).to({scaleX:0.7024,scaleY:0.7024,x:83.35,y:181.5},0).wait(1).to({scaleX:0.7063,scaleY:0.7063,x:83.2,y:181.95},0).wait(1).to({scaleX:0.7097,scaleY:0.7097,x:83.15,y:182.35},0).wait(1).to({scaleX:0.7125,scaleY:0.7125,x:83.05,y:182.65},0).wait(1).to({scaleX:0.7148,scaleY:0.7148,x:83,y:182.9},0).wait(1).to({scaleX:0.7166,scaleY:0.7166,x:82.95,y:183.1},0).wait(1).to({scaleX:0.718,scaleY:0.718,x:82.9,y:183.25},0).wait(1).to({scaleX:0.7191,scaleY:0.7191,y:183.4},0).wait(1).to({scaleX:0.7199,scaleY:0.7199,x:82.85,y:183.5},0).wait(1).to({scaleX:0.7204,scaleY:0.7204,y:183.55},0).wait(1).to({scaleX:0.7207,scaleY:0.7207,y:183.6},0).wait(1).to({regX:-0.1,regY:-0.1,scaleX:0.7208,scaleY:0.7208,x:-169.5,y:-68.75},0).wait(103).to({regX:350,regY:350,scaleX:0.7207,scaleY:0.7207,x:82.85,y:183.6},0).wait(1).to({scaleX:0.7205,scaleY:0.7205},0).wait(1).to({scaleX:0.7202,scaleY:0.7202,x:82.9,y:183.55},0).wait(1).to({scaleX:0.7198,scaleY:0.7198,x:82.85,y:183.45},0).wait(1).to({scaleX:0.7192,scaleY:0.7192,x:82.9,y:183.4},0).wait(1).to({scaleX:0.7185,scaleY:0.7185,x:82.95,y:183.35},0).wait(1).to({scaleX:0.7176,scaleY:0.7176,y:183.25},0).wait(1).to({scaleX:0.7165,scaleY:0.7165,x:83,y:183.15},0).wait(1).to({scaleX:0.7152,scaleY:0.7152,x:83.05,y:183},0).wait(1).to({scaleX:0.7138,scaleY:0.7138,x:83.1,y:182.85},0).wait(1).to({scaleX:0.7121,scaleY:0.7121,x:83.2,y:182.7},0).wait(1).to({scaleX:0.7102,scaleY:0.7102,x:83.25,y:182.5},0).wait(1).to({scaleX:0.7081,scaleY:0.7081,x:83.35,y:182.3},0).wait(1).to({scaleX:0.7057,scaleY:0.7057,x:83.4,y:182},0).wait(1).to({scaleX:0.7031,scaleY:0.7031,x:83.5,y:181.75},0).wait(1).to({scaleX:0.7002,scaleY:0.7002,x:83.6,y:181.45},0).wait(1).to({scaleX:0.6969,scaleY:0.6969,x:83.75,y:181.15},0).wait(1).to({scaleX:0.6934,scaleY:0.6934,x:83.9,y:180.75},0).wait(1).to({scaleX:0.6895,scaleY:0.6895,x:84,y:180.3},0).wait(1).to({scaleX:0.6852,scaleY:0.6852,x:84.15,y:179.85},0).wait(1).to({scaleX:0.6805,scaleY:0.6805,x:84.35,y:179.4},0).wait(1).to({scaleX:0.6754,scaleY:0.6754,x:84.55,y:178.85},0).wait(1).to({scaleX:0.6699,scaleY:0.6699,x:84.75,y:178.3},0).wait(1).to({scaleX:0.664,scaleY:0.664,x:84.95,y:177.65},0).wait(1).to({scaleX:0.6577,scaleY:0.6577,x:85.2,y:177.05},0).wait(1).to({scaleX:0.6509,scaleY:0.6509,x:85.4,y:176.3},0).wait(1).to({scaleX:0.6438,scaleY:0.6438,x:85.7,y:175.6},0).wait(1).to({scaleX:0.6364,scaleY:0.6364,x:86,y:174.8},0).wait(1).to({scaleX:0.6288,scaleY:0.6288,x:86.25,y:174},0).wait(1).to({scaleX:0.621,scaleY:0.621,x:86.55,y:173.2},0).wait(1).to({scaleX:0.6132,scaleY:0.6132,x:86.85,y:172.35},0).wait(1).to({scaleX:0.6054,scaleY:0.6054,x:87.15,y:171.55},0).wait(1).to({scaleX:0.5979,scaleY:0.5979,x:87.4,y:170.75},0).wait(1).to({scaleX:0.5906,scaleY:0.5906,x:87.65,y:170},0).wait(1).to({scaleX:0.5837,scaleY:0.5837,x:87.95,y:169.3},0).wait(1).to({scaleX:0.5772,scaleY:0.5772,x:88.2,y:168.65},0).wait(1).to({scaleX:0.5712,scaleY:0.5712,x:88.4,y:168},0).wait(1).to({scaleX:0.5656,scaleY:0.5656,x:88.6,y:167.4},0).wait(1).to({scaleX:0.5605,scaleY:0.5605,x:88.8,y:166.85},0).wait(1).to({scaleX:0.5558,scaleY:0.5558,x:89,y:166.4},0).wait(1).to({scaleX:0.5515,scaleY:0.5515,x:89.15,y:165.95},0).wait(1).to({scaleX:0.5477,scaleY:0.5477,x:89.3,y:165.55},0).wait(1).to({scaleX:0.5442,scaleY:0.5442,x:89.4,y:165.2},0).wait(1).to({scaleX:0.5411,scaleY:0.5411,x:89.5,y:164.85},0).wait(1).to({scaleX:0.5384,scaleY:0.5384,x:89.65,y:164.6},0).wait(1).to({scaleX:0.536,scaleY:0.536,x:89.75,y:164.35},0).wait(1).to({scaleX:0.5338,scaleY:0.5338,x:89.8,y:164.1},0).wait(1).to({scaleX:0.532,scaleY:0.532,x:89.9,y:163.9},0).wait(1).to({scaleX:0.5303,scaleY:0.5303,y:163.7},0).wait(1).to({scaleX:0.529,scaleY:0.529,x:90,y:163.6},0).wait(1).to({scaleX:0.5278,scaleY:0.5278,y:163.5},0).wait(1).to({scaleX:0.5269,scaleY:0.5269,x:90.05,y:163.35},0).wait(1).to({scaleX:0.5262,scaleY:0.5262,y:163.3},0).wait(1).to({scaleX:0.5256,scaleY:0.5256,x:90.1,y:163.25},0).wait(1).to({scaleX:0.5252,scaleY:0.5252,y:163.2},0).wait(1).to({scaleX:0.525,scaleY:0.525},0).wait(1).to({regX:-0.1,regY:0,scaleX:0.5249,scaleY:0.5249,x:-93.7,y:-20.6},0).wait(93).to({scaleX:0.6197,scaleY:0.6197,x:-149,y:-30.3},0).wait(98).to({regX:-0.2,regY:-0.1,scaleX:0.468,scaleY:0.468,x:-56.85,y:-12.7},0).wait(79).to({regX:350,regY:350,scaleX:0.4682,scaleY:0.4682,x:107.05,y:151.15},0).wait(1).to({scaleX:0.4689,scaleY:0.4689,y:151.25},0).wait(1).to({scaleX:0.4702,scaleY:0.4702,x:107,y:151.35},0).wait(1).to({scaleX:0.4722,scaleY:0.4722,x:106.85,y:151.5},0).wait(1).to({scaleX:0.4749,scaleY:0.4749,x:106.75,y:151.7},0).wait(1).to({scaleX:0.4785,scaleY:0.4785,x:106.55,y:152},0).wait(1).to({scaleX:0.4831,scaleY:0.4831,x:106.4,y:152.4},0).wait(1).to({scaleX:0.4889,scaleY:0.4889,x:106.05,y:152.8},0).wait(1).to({scaleX:0.4962,scaleY:0.4962,x:105.75,y:153.4},0).wait(1).to({scaleX:0.5049,scaleY:0.5049,x:105.4,y:154.15},0).wait(1).to({scaleX:0.5153,scaleY:0.5153,x:104.85,y:154.95},0).wait(1).to({scaleX:0.527,scaleY:0.527,x:104.35,y:155.85},0).wait(1).to({scaleX:0.5393,scaleY:0.5393,x:103.75,y:156.85},0).wait(1).to({scaleX:0.5514,scaleY:0.5514,x:103.2,y:157.8},0).wait(1).to({scaleX:0.5624,scaleY:0.5624,x:102.7,y:158.7},0).wait(1).to({scaleX:0.5718,scaleY:0.5718,x:102.3,y:159.45},0).wait(1).to({scaleX:0.5795,scaleY:0.5795,x:101.9,y:160.05},0).wait(1).to({scaleX:0.5855,scaleY:0.5855,x:101.65,y:160.55},0).wait(1).to({scaleX:0.5902,scaleY:0.5902,x:101.4,y:160.85},0).wait(1).to({scaleX:0.5937,scaleY:0.5937,x:101.25,y:161.2},0).wait(1).to({scaleX:0.5962,scaleY:0.5962,x:101.1,y:161.35},0).wait(1).to({scaleX:0.5978,scaleY:0.5978,x:101.05,y:161.5},0).wait(1).to({scaleX:0.5987,scaleY:0.5987,x:101,y:161.55},0).wait(1).to({regX:-0.3,regY:-0.1,scaleX:0.599,scaleY:0.599,x:-108.85,y:-48.1},0).to({_off:true},184).wait(35));

	// SP_btn_window
	this.toggle_btn = new lib.btn_window();
	this.toggle_btn.name = "toggle_btn";
	this.toggle_btn.parent = this;
	this.toggle_btn.setTransform(200,200);

	this.timeline.addTween(cjs.Tween.get(this.toggle_btn).to({_off:true},989).wait(47));

	// btn
	this.stage_btn = new lib.button();
	this.stage_btn.name = "stage_btn";
	this.stage_btn.parent = this;
	this.stage_btn.setTransform(120,155);

	this.timeline.addTween(cjs.Tween.get(this.stage_btn).to({_off:true},1001).wait(30).to({_off:false},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1067.7,-720,1687.7,1392);
// library properties:
lib.properties = {
	id: '_430_4',
	width: 240,
	height: 310,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg", id:"_430_4_bg"},
		{src:"images/book.png", id:"_430_4_book"},
		{src:"images/ch_base.png", id:"_430_4_ch_base"},
		{src:"images/ch_face10.png", id:"_430_4_ch_face10"},
		{src:"images/ch_face2.png", id:"_430_4_ch_face2"},
		{src:"images/ch_face3.png", id:"_430_4_ch_face3"},
		{src:"images/ch_face4.png", id:"_430_4_ch_face4"},
		{src:"images/ch_face6.png", id:"_430_4_ch_face6"},
		{src:"images/ch_face7.png", id:"_430_4_ch_face7"},
		{src:"images/ch_face8.png", id:"_430_4_ch_face8"},
		{src:"images/ch_face9.png", id:"_430_4_ch_face9"},
		{src:"images/finish.jpg", id:"_430_4_finish"},
		{src:"images/finish_blur.jpg", id:"_430_4_finish_blur"},
		{src:"images/tie_fp.png", id:"_430_4_tie_fp"},
		{src:"images/tie_sp.png", id:"_430_4_tie_sp"}
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
an.compositions['_430_4'] = {
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
