(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img._406_2_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1048,1264);


(lib.ch_base = function() {
	this.initialize(img._406_2_ch_base);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1048,1264);


(lib.ch_face2 = function() {
	this.initialize(img._406_2_ch_face2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,256);


(lib.ch_face3 = function() {
	this.initialize(img._406_2_ch_face3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,256);


(lib.ch_face4 = function() {
	this.initialize(img._406_2_ch_face4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,256);


(lib.ch_face5 = function() {
	this.initialize(img._406_2_ch_face5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,256);


(lib.ch_face6 = function() {
	this.initialize(img._406_2_ch_face6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,256);


(lib.finish = function() {
	this.initialize(img._406_2_finish);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,620);


(lib.finish_blur = function() {
	this.initialize(img._406_2_finish_blur);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,620);


(lib.scene01 = function() {
	this.initialize(img._406_2_scene01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,460,270);


(lib.scene02 = function() {
	this.initialize(img._406_2_scene02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,385);


(lib.tie_fp = function() {
	this.initialize(img._406_2_tie_fp);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,32);


(lib.tie_sp = function() {
	this.initialize(img._406_2_tie_sp);
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


(lib.scene01_cut02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.scene02();
	this.instance.parent = this;
	this.instance.setTransform(-58,-96,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.scene01_cut02, new cjs.Rectangle(-58,-96,115,192.5), null);


(lib.scene01_cut01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.scene01();
	this.instance.parent = this;
	this.instance.setTransform(-115,-68,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.scene01_cut01, new cjs.Rectangle(-115,-68,230,135), null);


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


(lib.window_finish = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _line
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.247)").s().p("AxLCvQhaAAAAhaIAAipQAAhaBaAAMAiXAAAQBaAAAABaIAACpQAABahaAAgAybhUIAACpQAABQBQAAMAiXAAAQBQAAAAhQIAAipQAAhQhQAAMgiXAAAQhQAAAABQg");
	this.shape.setTransform(0,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.498)").s().p("AxLClQhQAAAAhQIAAipQAAhQBQAAMAiXAAAQBQAAAABQIAACpQAABQhQAAgAyRhUIAACpQAABGBGAAMAiXAAAQBGAAAAhGIAAipQAAhGhGAAMgiXAAAQhGAAAABGg");
	this.shape_1.setTransform(0,6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AxLCRQg8AAAAg8IAAipQAAg8A8AAMAiXAAAQA8AAAAA8IAACpQAAA8g8AAg");
	this.shape_2.setTransform(0,6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.749)").s().p("AxLCbQhGAAAAhGIAAipQAAhGBGAAMAiXAAAQBGAAAABGIAACpQAABGhGAAgAyHhUIAACpQAAA8A8AAMAiXAAAQA8AAAAg8IAAipQAAg8g8AAMgiXAAAQg8AAAAA8g");
	this.shape_3.setTransform(0,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.window_finish, new cjs.Rectangle(-119,-47,238,71), null);


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


(lib.gr_ring = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","rgba(255,255,255,0.788)","#FFFFFF"],[0.471,0.722,1],0,0,0,0,0,129.8).s().p("AuIOJQl3l3AAoSQAAoRF3l3QF3l3IRAAQISAAF3F3QF3F3AAIRQAAISl3F3Ql3F3oSAAQoRAAl3l3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.gr_ring, new cjs.Rectangle(-128,-128,256,256), null);


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

}).prototype = getMCSymbolPrototype(lib.character1_face_eyeclose, new cjs.Rectangle(0,0,120,128), null);


(lib.character1_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.instance = new lib.ch_base();
	this.instance.parent = this;
	this.instance.setTransform(-120,-396,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.character1_base, new cjs.Rectangle(-120,-396,524,632), null);


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
p.nominalBounds = new cjs.Rectangle(0,0,524,632);


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
	this.shape.graphics.f("#333333").s().p("AguA3QAYAAAQgFQAPgFAJgIQAIgHAEgJQAEgIABgHIABgLIgBgPIgCgNIgEgKQgDgFgEgCQgEgDgFAAIgFABIgFACQgDACgGAGQgGAGgHALQgGAKgFANQgFANgBAQIgQgBIgBgJIAAgKIABgaIADgbIADgYIASABIgFAbIgDAUIAEgIIAHgMIAKgMQAGgGAHgDQAGgEAJAAQAKAAAIAEQAJAEAEAIQAEAGACAHIADAQIABARIAAAGIgBAGQgBANgGALQgFALgLAJQgLAJgRAFQgPAGgXAAg");
	this.shape.setTransform(40.275,0.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgLBKIgKgBIgKgBIgGgTIANADIALABIABAAQAIAAAEgFQAEgEADgIIACgKIABgNIABgNIgBgLQgBgGgCgDQgDgCgEgBIgBAAIgDAAIgHABIgKAAQgEASgGAQQgGARgHAPQgHAPgGALIgRgGQAHgMAHgPIAMgdIAJgdIgQABIgPACIgBgQIARgBIATgBIAEgTIABgQIASACIgCAPIgDARIAIAAIAHgBIADAAIADABQAJAAAFAEQAFAEACAFQACAGAAAHIAAALQAAAVgDANQgDANgEAIQgFAHgGADQgFAEgEAAIgHABgAAsgMQgJgRgMgNIAOgGQAIAIAHAKQAHAKAGAMQAGALADANIgQAJQgFgVgJgQgAAsgxIgKgLIAJgGIAKALIAIALIgIAGIgJgLgAA7g7IgJgJIAIgFIAJAIIAIAKIgIAGIgIgKg");
	this.shape_1.setTransform(24.475,-0.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgOBGIAAh7Ig5AAIAAgQICPAAIAAAQIhFAAIAAB7gAAkAIIgQgLIgQgKIAKgOIAQAKIARAMIAPAKIgLAOIgPgLg");
	this.shape_2.setTransform(8,0.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AhABGIAAgNICCAAIAAAOgAgrAuIAAg+IBOAAIgCgGIgCgGIhNAAIAAAEIgBAUQgCAJgDAKQgEALgGAJIgNgNQAHgJADgMQADgLAAgOIAAguICAAAIAAAqIgSAAQADALAFAHIAJAOIAIAJIACAEIgKAQIgEgEIgHgLIgIgPIAAArgAgaAgIA4AAIAAgMIg4AAgAgaAIIA4AAIAAgLIg4AAgAgugrIBfAAIAAgMIhfAAg");
	this.shape_3.setTransform(-8,0.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgGACQgIgHgJgGIAMgMIARAOQAJAJAJALIgOANQgJgNgHgJg");
	this.shape_4.setTransform(-28.875,5.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AAgBMIAAgHIg+AAIAAAHIgRAAIAAg4IgIAGIgKAFIgJgQIAOgFIANgIQAFgDAEgEIgkAAIAAgOIAuAAIAEgGIAEgGIgnAAIAAgMIAsAAIABgDIACgHIg0AAIAAgNIA3AAIAAgCIAAgDIAAgEIAQAAIAAAEIgBADIAAACIA7AAIAAANIg9AAIgCAHIgBADIA7AAIAAAMIgmAAIADAGIAEAGIAuAAIAAAOIgiAAQAEAFAJAFQAIAFANAFIgJAQIgJgGIgJgGIAAA5gAgeA4IA+AAIAAgOIg+AAgAgeAeIA+AAIAAgNIg+AAgAAeAFIgEgFIgGgFIgmAAIgGAFIgFAFIA7AAIAAAAgAAMgTIgEgGIgCgGIgIAAIgEAGIgEAGIAWAAIAAAAg");
	this.shape_5.setTransform(-40,0.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

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


(lib.mc_ring_move = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// i
	this.instance = new lib.gr_ring();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.55,1.672);
	this.instance.alpha = 0.1992;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.5496,scaleY:1.6714,alpha:0.2009},0).wait(1).to({scaleX:1.5482,scaleY:1.6697,alpha:0.2065},0).wait(1).to({scaleX:1.5456,scaleY:1.6664,alpha:0.2169},0).wait(1).to({scaleX:1.5415,scaleY:1.6613,alpha:0.233},0).wait(1).to({scaleX:1.5359,scaleY:1.6542,alpha:0.2555},0).wait(1).to({scaleX:1.5288,scaleY:1.6454,alpha:0.2836},0).wait(1).to({scaleX:1.5212,scaleY:1.6358,alpha:0.314},0).wait(1).to({scaleX:1.5141,scaleY:1.6269,alpha:0.3421},0).wait(1).to({scaleX:1.5085,scaleY:1.6198,alpha:0.3647},0).wait(1).to({scaleX:1.5044,scaleY:1.6147,alpha:0.3808},0).wait(1).to({scaleX:1.5018,scaleY:1.6115,alpha:0.3912},0).wait(1).to({scaleX:1.5004,scaleY:1.6097,alpha:0.3968},0).wait(1).to({scaleX:1.5,scaleY:1.6092,alpha:0.3984},0).wait(1).to({scaleX:1.5004,scaleY:1.6097,alpha:0.3968},0).wait(1).to({scaleX:1.5018,scaleY:1.6115,alpha:0.3912},0).wait(1).to({scaleX:1.5044,scaleY:1.6147,alpha:0.3808},0).wait(1).to({scaleX:1.5085,scaleY:1.6198,alpha:0.3647},0).wait(1).to({scaleX:1.5141,scaleY:1.6269,alpha:0.3421},0).wait(1).to({scaleX:1.5212,scaleY:1.6358,alpha:0.314},0).wait(1).to({scaleX:1.5288,scaleY:1.6454,alpha:0.2836},0).wait(1).to({scaleX:1.5359,scaleY:1.6542,alpha:0.2555},0).wait(1).to({scaleX:1.5415,scaleY:1.6613,alpha:0.233},0).wait(1).to({scaleX:1.5456,scaleY:1.6664,alpha:0.2169},0).wait(1).to({scaleX:1.5482,scaleY:1.6697,alpha:0.2065},0).wait(1).to({scaleX:1.5496,scaleY:1.6714,alpha:0.2009},0).wait(1).to({scaleX:1.55,scaleY:1.672,alpha:0.1992},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-198.4,-214,396.8,428);


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

	// txt_1line
	this.line1 = new cjs.Text("", "14px 'MS PGothic'", "#F1439A");
	this.line1.name = "line1";
	this.line1.lineHeight = 16;
	this.line1.lineWidth = 260;
	this.line1.parent = this;
	this.line1.setTransform(-107,0);

	this.timeline.addTween(cjs.Tween.get(this.line1).wait(1));

	// txt_1line
	this.line2 = new cjs.Text("", "14px 'MS PGothic'", "#F1439A");
	this.line2.name = "line2";
	this.line2.lineHeight = 16;
	this.line2.lineWidth = 260;
	this.line2.parent = this;
	this.line2.setTransform(-145.5,103.95);

	this.timeline.addTween(cjs.Tween.get(this.line2).wait(1));

	// base_1line
	this.instance = new lib.window_finish();
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

	// mask_mouth (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_6 = new cjs.Graphics().p("AiQA2Qgmg7AAg2QAAgZBLgaQBFgYAtAAQBBAAAtAHQBFAMgEAaQgJBGgcA2QgyBhhdADIgFAAQhZAAg0hRg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(6).to({graphics:mask_graphics_6,x:58.8085,y:98.5552}).wait(5).to({graphics:null,x:0,y:0}).wait(9));

	// face
	this.instance_2 = new lib.ch_face6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.instance_3 = new lib.ch_face2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_2,this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(9));

	// mask_face (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("ApNJ2IAAzrISbAAIAATrg");
	mask_1.setTransform(60,64);

	// face
	this.instance_4 = new lib.ch_face2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,0.5,0.5);

	this.instance_5 = new lib.ch_face3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,0,0.5,0.5);

	this.instance_6 = new lib.ch_face4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,0,0.5,0.5);

	this.instance_7 = new lib.ch_face5();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,0,0.5,0.5);

	this.instance_8 = new lib.ch_face6();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[]},1).wait(9));

	// body
	this.b = new lib.character1_base();
	this.b.name = "b";
	this.b.parent = this;
	this.b.setTransform(-80,192);

	var maskedShapeInstanceList = [this.b];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.b).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1,118,126);


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
	this.shape.graphics.f("#000000").s().p("Ag0ANIgHAXIgIATIgHgcIAHgMIAHgOIAGgNIgRAAIAAgTIATAAIAAgRIgDAAIgEABIgDAAIgFAAIgEgVIACAAQAPAAAKgCIAQgDIAEgBIAJAUIgCABIgHABIgJABIAAAUIARAAIAAATIgQAAIAJAPQAFAHAFAFIgLAWIgEgPIgFgTIAABIIgTABgAAkBIIgUAAQgIABgEgDQgEgCAAgHIAAgdIgCANIgFANIgEALIgQgNIAGgLIAEgKIACgJIABgDIAOAGIAAgFIATAAIAAAbIABACIACAAIAIAAIAFAAIABgDIABgJIARAHIgCgIIgFgKIARgHIAHAQIADANIABAFIgRAKIAAgCIgBgEIgBgGIgEAMQgCADgEACIgFAAIgFAAgAAdAoIgDgHIgGgKIAKgFIgpAAIAAg7IAeAAIAAgIIghAAIAAgRIAhAAIAAgJIATAAIAAAJIAjAAIAAARIgjAAIAAAIIAgAAIAAA7IgiAAIAGAHIAEAGIABADIgRAJgAAmADIAOAAIAAgIIgOAAgAAHADIAMAAIAAgIIgMAAgAAmgSIAOAAIAAgIIgOAAgAAHgSIAMAAIAAgIIgMAAg");
	this.shape.setTransform(40,11.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhLA3QAXgCANgFQANgEAFgHIgxAAIAAgSIA5AAIACgDIAAgFIAAgBIAAAAIg8AAIAAgRIA9AAIAAgIIgxAAIAAgRIAxAAIAAgHIg5AAIAAgSIAeAAIgEgGIgEgFIAVgGIAGAIIAFAJIAaAAIAFgIIAEgJIAWAGIgDAFIgEAGIAeAAIAAASIg5AAIAAAHIAxAAIAAARIgxAAIAAAIIA+AAIAAARIg+AAIAAAFIgBAEIA9AAIAAASIgwAAQAHAGANAFQANAEAVADIgKAUQgPgCgKgEQgKgFgJgFQgHgGgFgGIgJgJQgEAIgJAIQgIAIgNAGQgMAFgSACg");
	this.shape_1.setTransform(24.05,11.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(4));

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
	this.instance_2.setTransform(224.85,185.05,0.1412,0.1412);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).wait(18));

	// レイヤー_8
	this.instance_3 = new lib.glitter_first();
	this.instance_3.parent = this;
	this.instance_3.setTransform(233.45,91.9,0.159,0.159,0,0,0,-1.3,2.9);
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
	this.initialize(mode,startPosition,loop,{init:0,run:4,stay:10,s2:11,s3:12,blink1:15,blink2:21});

	// timeline functions:
	this.frame_0 = function() {
		//                     1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12
		this.face_blink_ary = [1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1]; 
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
	var mask_graphics_15 = new cjs.Graphics().p("AnqDZQgpgQgSgPQgggYgHgmQAAg5AWhFQAahRAlgdQBohQBMgNQB6gUAnAeQAQANA8BBQA9A8AqAAQAqAAA7g4QAegdAngoQAOgJAQgRQARgMAjAAIBSgCQAsADAlAbQAqAfAlAyQAkAwARAuQATAxADALQAEASgDAVQgEAYghAkQgjAmgcAHQgeAHgwACQgxABghgFIhQgFQgygCgPgNQgegfgUgRQglgfgcgBQgggChfAcQhbAbgfARQgZANgnALQgTAFg6ANQg3ANgjAEQgUACgPAAQgaAAgQgGg");
	var mask_graphics_21 = new cjs.Graphics().p("AjFBuIhLhTIAEgiQADgjABABIATh2ICVgHIBJATICJBEIB6AeIAlgEQgWA4ABBQQAAAgABAaIhEgGIi5Agg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(15).to({graphics:mask_graphics_15,x:60.1016,y:45.3375}).wait(6).to({graphics:mask_graphics_21,x:31.25,y:41.8}).wait(6));

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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).wait(1).to({alpha:1},0).wait(1).to({regX:60,regY:64,x:60,y:64,alpha:0.3015},0).wait(1).to({alpha:0.0922},0).wait(1).to({regX:35,regY:30,x:35,y:30,alpha:0},0).wait(2).to({alpha:0.1992},0).wait(1).to({alpha:1},0).wait(1).to({regX:60,regY:64,x:60,y:64,alpha:0.3015},0).wait(1).to({alpha:0.0922},0).wait(1).to({regX:35,regY:30,x:35,y:30,alpha:0},0).wait(2));

	// f2
	this.f2 = new lib.character1_face();
	this.f2.name = "f2";
	this.f2.parent = this;
	this.f2.setTransform(35,30,1,1,0,0,0,35,30);

	this.timeline.addTween(cjs.Tween.get(this.f2).wait(5).to({alpha:0.1992},0).wait(1).to({regX:60,regY:64,x:60,y:64,alpha:0.6441},0).wait(1).to({alpha:0.911},0).wait(1).to({regX:35,regY:30,x:35,y:30,alpha:1},0).wait(19));

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

	this.timeline.addTween(cjs.Tween.get(this.f1_alpha).wait(5).to({alpha:0.8008},0).wait(1).to({regX:60,regY:64,x:60,y:64,alpha:0.7118},0).wait(1).to({alpha:0.4449},0).wait(1).to({regX:35,regY:30,x:35,y:30,alpha:0},0).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-204,524,632);


(lib.character1_body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{def:0,nf:1});

	// timeline functions:
	this.frame_0 = function() {
		if(this.name == "c2") {
			this.b.visible = false;
		} else {
			this.b2.visible = false;
		}
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
	this.f.setTransform(43,-238);

	this.timeline.addTween(cjs.Tween.get(this.f).to({_off:true},1).wait(1));

	// レイヤー_5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgiqAq9MAAAhV5MBFVAAAMAAABV5gAIOa8Qg1ABgpADIggADQgRAMAJCeQAJCcARAhQAMAZAggNQBHgeAKgDQA3gMByhXQB0hYgGgdQgIgmiohMQgUgJgQgCQgXgFgnAAIgWABg");
	mask.setTransform(66.175,-85.025);

	// base_body
	this.b = new lib.character1_base();
	this.b.name = "b";
	this.b.parent = this;
	this.b.setTransform(-37,-46);

	var maskedShapeInstanceList = [this.b];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.b).wait(2));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Ai/C0QgRgigJiaQgJieARgNIAhgHQAsgHA0gBQA5gCAaAFQARACASAJQBEAeAcAPQBSArAFAZQAGAdh4BdQh3Bbg2ANQgKAChHAeQgLAFgJAAQgQAAgIgQg");
	mask_1.setTransform(127.1864,106.0429);

	// base_foot
	this.b2 = new lib.character1_base();
	this.b2.name = "b2";
	this.b2.parent = this;
	this.b2.setTransform(-37,-46);

	var maskedShapeInstanceList = [this.b2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.b2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157,-442,524,632);


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
	this.initialize(mode,startPosition,loop,{standby:0,jump:8,jump2:16,jump_double:25,jump_flower:37,jump_flower2:47,nod:57,nod2:66,nod_double:81,swing:92,swing_on:112,swing_off:121,notice:132,notice_jump:146,laugh:160,chord:181,question:201,question_on:229,question_off:241,exclamation:252,down:268,down2:295,shy_jump:313,shy_down:325,shock:343,sigh:350,happy:369,anger:384,anger2:404,damage:416,concent:433,notice_radio:442,laugh_stay:456,sweat:477,flower:495,nod3:505,nod_chord:516});

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
	this.frame_455 = function() {
		this.stop();
	}
	this.frame_456 = function() {
		this.play();
	}
	this.frame_476 = function() {
		this.stop();
	}
	this.frame_477 = function() {
		this.play();
	}
	this.frame_494 = function() {
		this.stop();
	}
	this.frame_495 = function() {
		this.play();
	}
	this.frame_504 = function() {
		this.stop();
	}
	this.frame_505 = function() {
		this.play();
	}
	this.frame_515 = function() {
		this.stop();
	}
	this.frame_516 = function() {
		this.play();
	}
	this.frame_530 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(1).call(this.frame_8).wait(7).call(this.frame_15).wait(1).call(this.frame_16).wait(8).call(this.frame_24).wait(1).call(this.frame_25).wait(11).call(this.frame_36).wait(1).call(this.frame_37).wait(9).call(this.frame_46).wait(1).call(this.frame_47).wait(9).call(this.frame_56).wait(1).call(this.frame_57).wait(8).call(this.frame_65).wait(1).call(this.frame_66).wait(14).call(this.frame_80).wait(1).call(this.frame_81).wait(10).call(this.frame_91).wait(1).call(this.frame_92).wait(19).call(this.frame_111).wait(1).call(this.frame_112).wait(8).call(this.frame_120).wait(1).call(this.frame_121).wait(10).call(this.frame_131).wait(1).call(this.frame_132).wait(13).call(this.frame_145).wait(1).call(this.frame_146).wait(13).call(this.frame_159).wait(1).call(this.frame_160).wait(20).call(this.frame_180).wait(1).call(this.frame_181).wait(19).call(this.frame_200).wait(1).call(this.frame_201).wait(27).call(this.frame_228).wait(1).call(this.frame_229).wait(11).call(this.frame_240).wait(1).call(this.frame_241).wait(10).call(this.frame_251).wait(1).call(this.frame_252).wait(15).call(this.frame_267).wait(1).call(this.frame_268).wait(26).call(this.frame_294).wait(1).call(this.frame_295).wait(17).call(this.frame_312).wait(1).call(this.frame_313).wait(11).call(this.frame_324).wait(1).call(this.frame_325).wait(17).call(this.frame_342).wait(1).call(this.frame_343).wait(6).call(this.frame_349).wait(1).call(this.frame_350).wait(18).call(this.frame_368).wait(1).call(this.frame_369).wait(14).call(this.frame_383).wait(1).call(this.frame_384).wait(19).call(this.frame_403).wait(1).call(this.frame_404).wait(11).call(this.frame_415).wait(1).call(this.frame_416).wait(16).call(this.frame_432).wait(1).call(this.frame_433).wait(8).call(this.frame_441).wait(1).call(this.frame_442).wait(13).call(this.frame_455).wait(1).call(this.frame_456).wait(20).call(this.frame_476).wait(1).call(this.frame_477).wait(17).call(this.frame_494).wait(1).call(this.frame_495).wait(9).call(this.frame_504).wait(1).call(this.frame_505).wait(10).call(this.frame_515).wait(1).call(this.frame_516).wait(14).call(this.frame_530).wait(1));

	// effect_look_to_right2
	this.instance = new lib.drop1_v2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(160.35,-283.3,1.1645,1.1645,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(313).to({_off:false},0).wait(1).to({regX:1.2,regY:1.8,skewX:33.7496,skewY:213.7496,x:185.95,y:-292.3,alpha:0.4141},0).wait(1).to({regX:0,regY:0,skewX:44.9995,skewY:224.9995,x:197.6,y:-296.6,alpha:0.2188},0).to({_off:true},1).wait(1).to({_off:false,skewX:0,skewY:180,x:160.35,y:-283.3,alpha:1},0).wait(1).to({regX:1.2,regY:1.8,skewX:33.7496,skewY:213.7496,x:185.95,y:-292.3,alpha:0.4141},0).wait(1).to({regX:0,regY:0,skewX:44.9995,skewY:224.9995,x:197.6,y:-296.6,alpha:0.2188},0).to({_off:true},1).wait(5).to({_off:false,skewX:0,skewY:180,x:160.35,y:-283.3,alpha:1},0).wait(1).to({regX:1.2,regY:1.8,skewX:33.7496,skewY:213.7496,x:185.95,y:-292.3,alpha:0.4141},0).wait(1).to({regX:0,regY:0,skewX:44.9995,skewY:224.9995,x:197.6,y:-296.6,alpha:0.2188},0).to({_off:true},1).wait(1).to({_off:false,skewX:0,skewY:180,x:160.35,y:-283.3,alpha:1},0).wait(1).to({regX:1.2,regY:1.8,skewX:33.7496,skewY:213.7496,x:185.95,y:-292.3,alpha:0.4141},0).wait(1).to({regX:0,regY:0,skewX:44.9995,skewY:224.9995,x:197.6,y:-296.6,alpha:0.2188},0).to({_off:true},1).wait(145).to({_off:false,skewX:0,skewY:180,x:165.55,y:-261.9,alpha:1},0).wait(1).to({regX:1.2,regY:1.8,skewX:33.7496,skewY:213.7496,x:191.15,y:-270.9,alpha:0.4141},0).wait(1).to({regX:0,regY:0,skewX:44.9995,skewY:224.9995,x:202.8,y:-275.2,alpha:0.2188},0).to({_off:true},1).wait(1).to({_off:false,skewX:0,skewY:180,x:165.55,y:-261.9,alpha:1},0).wait(1).to({regX:1.2,regY:1.8,skewX:33.7496,skewY:213.7496,x:191.15,y:-270.9,alpha:0.4141},0).wait(1).to({regX:0,regY:0,skewX:44.9995,skewY:224.9995,x:202.8,y:-275.2,alpha:0.2188},0).to({_off:true},1).wait(47));

	// effect_look_to_right
	this.instance_1 = new lib.spread_flower_pink("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(102.2,-190.55,1.4807,1.4807,0,0,180);

	this.instance_2 = new lib.good_effect("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(102.25,-190.6,1.481,1.481);

	this.instance_3 = new lib.notice();
	this.instance_3.parent = this;
	this.instance_3.setTransform(199.35,-268.25,1.1857,1.1857,169.9438,0,0,-29.1,20.5);
	this.instance_3._off = true;

	this.instance_4 = new lib.laugh("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(191.9,-275.3,1.4181,1.4181,0,-35.8376,144.173,-30.2,20.5);
	this.instance_4._off = true;

	this.instance_5 = new lib.chord("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(168.8,-192.9,1.0026,1.0026,-6.2632,0,0,-23.4,76.9);

	this.instance_6 = new lib.question();
	this.instance_6.parent = this;
	this.instance_6.setTransform(164.1,-275.8,1.053,1.053,29.448);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.instance_7 = new lib.mc_exclamation("synched",0,false);
	this.instance_7.parent = this;
	this.instance_7.setTransform(167.85,-291.2,1.0929,1.0929,0,30,-150.0007,-0.1,0.1);

	this.instance_8 = new lib.drop1a("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(163.55,-273.7,1,1,0,0,0,-0.5,0.2);
	this.instance_8._off = true;

	this.instance_9 = new lib.drop2_v2("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(162.15,-273.55,0.9876,0.9876,0,-14.9998,165.0002);
	this.instance_9._off = true;

	this.instance_10 = new lib.shock("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(168.6,-276.55,1.3878,1.3878,0,121.2396,-58.7604);

	this.instance_11 = new lib.sigh("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(142.15,-123.25,1,1,0,0,180);
	this.instance_11.alpha = 0.6016;
	this.instance_11._off = true;

	this.instance_12 = new lib.heart("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(168.8,-232.7,0.4532,0.4532,0,0,180);
	this.instance_12._off = true;

	this.instance_13 = new lib.angry("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(175.35,-253.95,0.5276,0.5276);
	this.instance_13._off = true;

	this.instance_14 = new lib.mc_punpun();
	this.instance_14.parent = this;
	this.instance_14.setTransform(44.3,-303.1,1.1377,1.1377);

	this.instance_15 = new lib.concent_wrapper("synched",0,false);
	this.instance_15.parent = this;
	this.instance_15.setTransform(102,-191.15,1,1,0,0,0,-0.5,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},37).to({state:[{t:this.instance_2}]},10).to({state:[]},10).to({state:[{t:this.instance_3}]},76).to({state:[]},2).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).to({state:[{t:this.instance_3}]},2).to({state:[]},2).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},15).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).to({state:[{t:this.instance_5,p:{scaleX:1.0026,scaleY:1.0026,rotation:-6.2632,x:168.8,y:-192.9}}]},1).to({state:[]},20).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_6}]},7).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[]},1).to({state:[{t:this.instance_6}]},6).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[]},1).to({state:[{t:this.instance_7}]},5).to({state:[{t:this.instance_8}]},16).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},9).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).to({state:[{t:this.instance_9}]},24).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[]},1).to({state:[{t:this.instance_9}]},5).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[]},1).to({state:[{t:this.instance_10}]},11).to({state:[]},1).to({state:[{t:this.instance_10}]},1).to({state:[]},1).to({state:[{t:this.instance_10}]},1).to({state:[]},1).to({state:[{t:this.instance_11}]},3).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[]},1).to({state:[{t:this.instance_12}]},11).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_12}]},3).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[]},1).to({state:[{t:this.instance_13}]},6).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},5).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[]},1).to({state:[{t:this.instance_14}]},2).to({state:[]},12).to({state:[{t:this.instance_15}]},17).to({state:[]},9).to({state:[{t:this.instance_3}]},1).to({state:[]},2).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},15).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[]},1).to({state:[{t:this.instance_1}]},11).to({state:[]},10).to({state:[{t:this.instance_5,p:{scaleX:0.7997,scaleY:0.7997,rotation:-6.255,x:157.1,y:-179.85}}]},11).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(133).to({_off:false},0).to({_off:true},2).wait(1).to({_off:false,scaleX:1.1864,scaleY:1.1864,rotation:169.9437,y:-268.3},0).wait(3).to({regX:-28.8,x:198.95,y:-268.15,alpha:0.6944},0).wait(1).to({alpha:0.4444},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.1111},0).wait(1).to({alpha:0.0278},0).wait(1).to({regX:-29.1,x:199.35,y:-268.3,alpha:0},0).to({_off:true},1).wait(2).to({_off:false,scaleX:1.1857,scaleY:1.1857,rotation:169.9438,x:175.9,y:-278.85,alpha:1},0).to({_off:true},2).wait(1).to({_off:false,scaleX:1.1864,scaleY:1.1864,rotation:169.9437,y:-278.9},0).wait(3).to({regX:-28.8,x:175.5,y:-278.75,alpha:0.6944},0).wait(1).to({alpha:0.4444},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.1111},0).wait(1).to({alpha:0.0278},0).wait(1).to({regX:-29.1,x:175.9,y:-278.9,alpha:0},0).to({_off:true},1).wait(284).to({_off:false,regY:20.4,scaleX:1.1856,scaleY:1.1856,rotation:85.4654,x:228.15,y:-24.4,alpha:1},0).to({_off:true},2).wait(1).to({_off:false,regY:20.5,scaleX:1.1863,scaleY:1.1863,rotation:85.4659,x:228,y:-24.35},0).wait(3).to({regX:-28.8,x:228.05,y:-24,alpha:0.6944},0).wait(1).to({alpha:0.4444},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.1111},0).wait(1).to({alpha:0.0278},0).wait(1).to({regX:-29.1,x:228,y:-24.35,alpha:0},0).to({_off:true},1).wait(76));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(160).to({_off:false},0).wait(15).to({regX:-30.3,regY:20.4,skewX:-35.827,skewY:144.1725,x:191.95,y:-275.45},0).wait(1).to({regX:-31.4,regY:22.1,x:194.6,y:-274.4,alpha:0.5625,startPosition:1},0).wait(1).to({alpha:0.25,startPosition:2},0).wait(1).to({alpha:0.0625,startPosition:3},0).wait(1).to({regX:-30.3,regY:20.4,x:191.95,y:-275.45,alpha:0,startPosition:19},0).to({_off:true},1).wait(276).to({_off:false,regX:-30.2,regY:20.6,scaleX:1.1937,scaleY:1.1937,skewX:-35.8372,skewY:144.1734,x:194.75,y:-264.15,alpha:1,startPosition:0},0).wait(15).to({regX:-30.3,regY:20.4,skewX:-35.8266,skewY:144.1728,x:194.7,y:-264.3},0).wait(1).to({regX:-31.4,regY:22.1,x:196.95,y:-263.45,alpha:0.5625,startPosition:1},0).wait(1).to({alpha:0.25,startPosition:2},0).wait(1).to({alpha:0.0625,startPosition:3},0).wait(1).to({regX:-30.3,regY:20.4,x:194.7,y:-264.3,alpha:0,startPosition:19},0).to({_off:true},1).wait(55));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(202).to({_off:false},0).wait(1).to({regX:-0.2,regY:0.2,x:171.75,y:-288.75,alpha:0.5556},0).wait(1).to({x:176.55,y:-296.6,alpha:0.8889},0).wait(1).to({regX:0,regY:0,x:178.5,y:-299.4,alpha:1},0).wait(1).to({regX:-0.2,regY:0.2,x:177.85,y:-298.65},0).wait(1).to({x:176.8,y:-296.8},0).wait(1).to({x:175.05,y:-293.7},0).wait(1).to({regX:0,regY:0,x:172.9,y:-289.5},0).to({x:173.65,y:-290.85},2).wait(8).to({regX:-0.2,regY:0.2,x:173,y:-290.15,alpha:0.9298},0).wait(1).to({x:171.9,y:-288.2,alpha:0.692},0).wait(1).to({x:170.3,y:-285.35,alpha:0.339},0).wait(1).to({x:169.1,y:-283.25,alpha:0.0788},0).wait(1).to({regX:0,regY:0,y:-282.7,alpha:0},0).to({_off:true},1).wait(6).to({_off:false,x:164.1,y:-275.8},0).wait(1).to({regX:-0.2,regY:0.2,x:171.75,y:-288.75,alpha:0.5556},0).wait(1).to({x:176.55,y:-296.6,alpha:0.8889},0).wait(1).to({regX:0,regY:0,x:178.5,y:-299.4,alpha:1},0).wait(1).to({regX:-0.2,regY:0.2,x:177.85,y:-298.65},0).wait(1).to({x:176.8,y:-296.8},0).wait(1).to({x:175.05,y:-293.7},0).wait(1).to({regX:0,regY:0,x:172.9,y:-289.5},0).to({x:173.65,y:-290.85},2).wait(3).to({regX:-0.2,regY:0.2,x:173,y:-290.15,alpha:0.9298},0).wait(1).to({x:171.9,y:-288.2,alpha:0.692},0).wait(1).to({x:170.3,y:-285.35,alpha:0.339},0).wait(1).to({x:169.1,y:-283.25,alpha:0.0788},0).wait(1).to({regX:0,regY:0,y:-282.7,alpha:0},0).to({_off:true},1).wait(284));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(268).to({_off:false},0).wait(1).to({regX:0.5,regY:-0.6,x:164.55,y:-270},0).wait(1).to({y:-266.15},0).wait(1).to({y:-262.9},0).wait(1).to({y:-260.25},0).wait(1).to({y:-258.15},0).wait(1).to({y:-256.65},0).wait(1).to({y:-255.75},0).wait(1).to({regX:-0.5,regY:0.2,x:163.55,y:-254.7},0).wait(9).to({startPosition:0},0).wait(1).to({regX:0.5,regY:-0.6,x:164.55,y:-255.5,alpha:0.4444},0).wait(1).to({alpha:0.1111},0).wait(1).to({regX:-0.5,regY:0.2,x:163.55,y:-254.7,alpha:0},0).to({_off:true},1).wait(242));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(313).to({_off:false},0).wait(1).to({scaleX:1.1203,scaleY:1.1203,skewX:18.7494,skewY:198.7494,x:193.575,y:-268.9375,alpha:0.4141},0).wait(1).to({scaleX:1.1645,scaleY:1.1645,skewX:29.9991,skewY:209.9991,x:204.05,y:-267.4,alpha:0.2188},0).to({_off:true},1).wait(1).to({_off:false,scaleX:0.9876,scaleY:0.9876,skewX:-14.9998,skewY:165.0002,x:162.15,y:-273.55,alpha:1},0).wait(1).to({scaleX:1.1203,scaleY:1.1203,skewX:18.7494,skewY:198.7494,x:193.575,y:-273.325,alpha:0.4141},0).wait(1).to({scaleX:1.1645,scaleY:1.1645,skewX:29.9991,skewY:209.9991,x:204.05,y:-273.25,alpha:0.2188},0).to({_off:true},1).wait(5).to({_off:false,scaleX:0.9876,scaleY:0.9876,skewX:-14.9998,skewY:165.0002,x:162.15,y:-273.55,alpha:1},0).wait(1).to({scaleX:1.1203,scaleY:1.1203,skewX:18.7494,skewY:198.7494,x:193.575,y:-268.9375,alpha:0.4141},0).wait(1).to({scaleX:1.1645,scaleY:1.1645,skewX:29.9991,skewY:209.9991,x:204.05,y:-267.4,alpha:0.2188},0).to({_off:true},1).wait(1).to({_off:false,scaleX:0.9876,scaleY:0.9876,skewX:-14.9998,skewY:165.0002,x:162.15,y:-273.55,alpha:1},0).wait(1).to({scaleX:1.1203,scaleY:1.1203,skewX:18.7494,skewY:198.7494,x:193.575,y:-273.325,alpha:0.4141},0).wait(1).to({scaleX:1.1645,scaleY:1.1645,skewX:29.9991,skewY:209.9991,x:204.05,y:-273.25,alpha:0.2188},0).to({_off:true},1).wait(145).to({_off:false,scaleX:0.9876,scaleY:0.9876,skewX:-14.9998,skewY:165.0002,x:167.35,y:-252.15,alpha:1},0).wait(1).to({scaleX:1.1203,scaleY:1.1203,skewX:18.7494,skewY:198.7494,x:198.775,y:-247.5375,alpha:0.4141},0).wait(1).to({scaleX:1.1645,scaleY:1.1645,skewX:29.9991,skewY:209.9991,x:209.25,y:-246,alpha:0.2188},0).to({_off:true},1).wait(1).to({_off:false,scaleX:0.9876,scaleY:0.9876,skewX:-14.9998,skewY:165.0002,x:167.35,y:-252.15,alpha:1},0).wait(1).to({scaleX:1.1203,scaleY:1.1203,skewX:18.7494,skewY:198.7494,x:198.775,y:-251.925,alpha:0.4141},0).wait(1).to({scaleX:1.1645,scaleY:1.1645,skewX:29.9991,skewY:209.9991,x:209.25,y:-251.85,alpha:0.2188},0).to({_off:true},1).wait(47));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(351).to({_off:false},0).wait(1).to({x:143.15,y:-122.25,alpha:1},0).wait(1).to({regX:0.9,x:143.25,y:-121.3,alpha:0.8965},0).wait(1).to({x:144.6,y:-120.1,alpha:0.7636},0).wait(1).to({x:146.2,y:-118.65,alpha:0.6048},0).wait(1).to({x:148,y:-117.05,alpha:0.4229},0).wait(1).to({x:150,y:-115.2,alpha:0.2205},0).wait(1).to({regX:0,x:153.15,y:-113.25,alpha:0},0).to({_off:true},1).wait(172));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(370).to({_off:false},0).wait(1).to({regX:2.3,regY:1,scaleX:0.8633,scaleY:0.8633,x:170.55,y:-246.85},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:173.8,y:-252.7},0).wait(1).to({regX:2.3,regY:1,scaleX:0.9896,scaleY:0.9896,x:171.25,y:-250.55},0).wait(1).to({scaleX:0.9586,scaleY:0.9586,x:170.7,y:-247.3},0).wait(1).to({regX:0,regY:0,scaleX:0.9068,scaleY:0.9068,x:171.8,y:-242.7},0).to({scaleX:1,scaleY:1,x:172.8,y:-246.7},2).wait(3).to({scaleX:1.1165,scaleY:1.1165},0).wait(1).to({regX:2.3,regY:1,scaleX:0.8111,scaleY:0.8111,x:170.2,y:-245.7,alpha:0.3262},0).wait(1).to({regX:0,regY:0,scaleX:0.7092,scaleY:0.7092,x:171.8,y:-246.45,alpha:0.1016},0).to({_off:true},1).wait(148));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(389).to({_off:false},0).wait(1).to({scaleX:1.0714,scaleY:1.0714,y:-257.7},0).wait(1).to({scaleX:1.2527,scaleY:1.2527,y:-258.95},0).wait(1).to({scaleX:0.9864,scaleY:0.9864},0).wait(1).to({scaleX:0.8976,scaleY:0.8976},0).wait(5).to({startPosition:0},0).wait(1).to({alpha:0.5009},0).wait(1).to({alpha:0.2014},0).wait(1).to({alpha:0.1016},0).to({_off:true},1).wait(129));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AjJERIhQoGIBOgLQBegMBSgDQEDgLAeBPQAfBOgQClQgIBTgOBDIjjArQjZAogLAAIgBAAg");
	var mask_graphics_495 = new cjs.Graphics().p("AjJERIhQoGIBOgLQBegMBSgDQEDgLAeBPQAfBOgQClQgIBTgOBDIjjArQjZAogLAAIgBAAg");
	var mask_graphics_505 = new cjs.Graphics().p("AjJERIhQoGIBOgLQBegMBSgDQEDgLAeBPQAfBOgQClQgIBTgOBDIjjArQjZAogLAAIgBAAg");
	var mask_graphics_516 = new cjs.Graphics().p("AjJERIhQoGIBOgLQBegMBSgDQEDgLAeBPQAfBOgQClQgIBTgOBDIjjArQjZAogLAAIgBAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:133.2253,y:94.3676}).wait(495).to({graphics:mask_graphics_495,x:133.2253,y:94.3676}).wait(10).to({graphics:mask_graphics_505,x:133.2253,y:94.3676}).wait(11).to({graphics:mask_graphics_516,x:133.2253,y:94.3676}).wait(15));

	// clook_to_right2
	this.c2 = new lib.character1_body();
	this.c2.name = "c2";
	this.c2.parent = this;

	var maskedShapeInstanceList = [this.c2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.c2).wait(9).to({regX:66.2,regY:-85,x:66.2,y:-93.4},0).wait(1).to({regX:0,regY:0,x:0,y:-10},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-94.2},0).wait(1).to({y:-91.45},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({y:1},0).wait(1).to({y:0},0).wait(1).to({y:2},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-90.5},0).wait(1).to({regX:0,regY:0,x:0,y:-8},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-90.75},0).wait(1).to({y:-83.8},0).wait(1).to({regX:0,regY:0,x:0,y:4},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-81.75},0).wait(1).to({y:-84.15},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({y:2},0).wait(1).to({y:-7},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-89.95},0).wait(1).to({y:-84.05},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({y:-7},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-89.95},0).wait(1).to({y:-84.05},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-84.1},0).wait(1).to({y:-84.75},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({y:6},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-94},0).wait(1).to({regX:0,regY:0,x:0,y:-14},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-97.95},0).wait(1).to({y:-94.35},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-83},0).wait(1).to({regX:0,regY:0,x:0,y:-1},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-85.25},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({y:6},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-94},0).wait(1).to({regX:0,regY:0,x:0,y:-14},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-97.95},0).wait(1).to({y:-94.35},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-83},0).wait(1).to({regX:0,regY:0,x:0,y:-1},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-85.25},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:66.2,regY:-85,x:66.2,y:-84.4},0).wait(1).to({y:-82},0).wait(1).to({y:-79.65},0).wait(1).to({regX:0,regY:0,x:0,y:6},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-79.65},0).wait(1).to({y:-82},0).wait(1).to({y:-84.4},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:66.2,regY:-85,x:66.2,y:-84.85},0).wait(1).to({y:-84.3},0).wait(1).to({y:-83.2},0).wait(1).to({y:-81.85},0).wait(1).to({y:-80.75},0).wait(1).to({y:-80.2},0).wait(1).to({regX:0,regY:0,x:0,y:5},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-80.2},0).wait(1).to({y:-80.75},0).wait(1).to({y:-81.85},0).wait(1).to({y:-83.2},0).wait(1).to({y:-84.3},0).wait(1).to({y:-84.85},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({y:6},2).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-80.25},0).wait(1).to({y:-83.8},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).to({y:6},2).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-82.8},0).wait(1).to({y:-84.65},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:66.2,regY:-85,rotation:0.0244,x:66.25,y:-84.9},0).wait(1).to({rotation:0.1092,x:66.45,y:-84.5},0).wait(1).to({rotation:0.275,x:66.95,y:-83.8},0).wait(1).to({rotation:0.538,x:67.7,y:-82.65},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:0.8681,x:68.65,y:-81.15},0).wait(1).to({rotation:1.1673,x:69.5,y:-79.75},0).wait(1).to({rotation:1.367,x:70,y:-78.8},0).wait(1).to({rotation:1.4695,x:70.3,y:-78.35},0).wait(1).to({regX:0,regY:0,rotation:1.4989,x:1.95,y:4.95},0).wait(1).to({regX:66.2,regY:-85,rotation:1.479,x:70.25,y:-78.4},0).wait(1).to({rotation:1.4111,x:70.05,y:-78.65},0).wait(1).to({rotation:1.2801,x:69.75,y:-79.25},0).wait(1).to({rotation:1.0711,x:69.15,y:-80.25},0).wait(1).to({rotation:0.7884,x:68.35,y:-81.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.4865,x:67.5,y:-82.85},0).wait(1).to({rotation:0.2415,x:66.8,y:-83.9},0).wait(1).to({rotation:0.0832,x:66.35,y:-84.65},0).wait(1).to({rotation:0.0011,x:66.2,y:-85},0).wait(1).to({regX:0,regY:0,rotation:-0.0227,x:0,y:0},0).wait(1).to({rotation:0},0).wait(1).to({regX:66.2,regY:-85,rotation:0.0244,x:66.25,y:-84.9},0).wait(1).to({rotation:0.1092,x:66.45,y:-84.5},0).wait(1).to({rotation:0.275,x:66.95,y:-83.8},0).wait(1).to({rotation:0.538,x:67.7,y:-82.65},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:0.8681,x:68.65,y:-81.15},0).wait(1).to({rotation:1.1673,x:69.5,y:-79.75},0).wait(1).to({rotation:1.367,x:70,y:-78.8},0).wait(1).to({rotation:1.4695,x:70.3,y:-78.35},0).wait(1).to({regX:0,regY:0,rotation:1.4989,x:1.95,y:4.95},0).wait(1).to({regX:66.2,regY:-85,rotation:1.4793,x:70.25,y:-78.4},0).wait(1).to({rotation:1.4124,x:70.05,y:-78.65},0).wait(1).to({rotation:1.2834,x:69.75,y:-79.25},0).wait(1).to({rotation:1.0775,x:69.15,y:-80.25},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.7991,x:68.4,y:-81.5},0).wait(1).to({rotation:0.5016,x:67.55,y:-82.8},0).wait(1).to({rotation:0.2603,x:66.85,y:-83.9},0).wait(1).to({rotation:0.1043,x:66.4,y:-84.65},0).wait(1).to({rotation:0.0235,x:66.25,y:-84.95},0).wait(1).to({regX:0,regY:0,rotation:0,x:0,y:0},0).wait(16).to({regX:66.2,regY:-85,x:66.2,y:-90.55},0).wait(1).to({y:-92.45},0).wait(1).to({regX:0,regY:0,x:0,y:-8},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-92.35},0).wait(1).to({y:-90.25},0).wait(1).to({regX:0,regY:0,x:0,y:2},0).wait(1).to({y:1},0).wait(1).to({y:0},0).wait(7).to({regX:66.2,regY:-85,x:66.2,y:-93.4},0).wait(1).to({regX:0,regY:0,x:0,y:-10},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-94.2},0).wait(1).to({y:-91.45},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({y:1},0).wait(1).to({y:0},0).wait(15).to({regX:66.2,regY:-85,rotation:-0.0253,x:66.15,y:-84.95},0).wait(1).to({rotation:-0.1129,y:-84.5},0).wait(1).to({rotation:-0.2845,y:-83.7},0).wait(1).to({rotation:-0.5565,x:66.1,y:-82.45},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-0.898,x:66,y:-80.85},0).wait(1).to({rotation:-1.2075,x:65.95,y:-79.35},0).wait(1).to({rotation:-1.4141,x:65.85,y:-78.4},0).wait(1).to({rotation:-1.5201,y:-77.9},0).wait(1).to({regX:0,regY:0,rotation:-1.5505,x:2,y:9},0).wait(1).to({regX:66.2,regY:-85,rotation:-1.5305,x:65.85,y:-77.85},0).wait(1).to({rotation:-1.4624,y:-78.2},0).wait(1).to({rotation:-1.3309,x:65.9,y:-78.8},0).wait(1).to({rotation:-1.121,x:65.95,y:-79.85},0).wait(1).to({rotation:-0.8372,x:66,y:-81.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.534,x:66.05,y:-82.6},0).wait(1).to({rotation:-0.2881,y:-83.8},0).wait(1).to({rotation:-0.1291,x:66.1,y:-84.55},0).wait(1).to({rotation:-0.0467,x:66.15,y:-84.95},0).wait(1).to({regX:0,regY:0,rotation:-0.0227,x:0,y:0},0).wait(1).to({rotation:0},0).wait(1).to({regX:66.2,regY:-85,rotation:0.1421,x:66.55,y:-84.4},0).wait(1).to({rotation:0.6998,x:68.15,y:-81.9},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:1.327,x:69.9,y:-79},0).wait(1).to({regX:0,regY:0,rotation:1.4989,x:1.95,y:4.95},0).wait(18).to({regX:66.2,regY:-85,rotation:1.4399,x:70.15,y:-78.55},0).wait(1).to({rotation:1.2196,x:69.55,y:-79.55},0).wait(1).to({rotation:0.7884,x:68.35,y:-81.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.3138,x:67,y:-83.6},0).wait(1).to({rotation:0.0482,x:66.25,y:-84.8},0).wait(1).to({regX:0,regY:0,rotation:-0.0227,x:0,y:0},0).wait(1).to({rotation:0},0).wait(1).to({regX:66.2,regY:-85,rotation:0.0865,x:66.45,y:-84.65},0).wait(1).to({rotation:0.4213,x:67.35,y:-83.1},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:0.9973,x:69,y:-80.55},0).wait(1).to({rotation:1.3945,x:70.05,y:-78.7},0).wait(1).to({regX:0,regY:0,rotation:1.4989,x:1.95,y:4.95},0).wait(8).to({regX:66.2,regY:-85,rotation:1.4399,x:70.15,y:-78.55},0).wait(1).to({rotation:1.2196,x:69.55,y:-79.55},0).wait(1).to({rotation:0.7884,x:68.35,y:-81.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.3138,x:67,y:-83.6},0).wait(1).to({rotation:0.0482,x:66.25,y:-84.8},0).wait(1).to({regX:0,regY:0,rotation:-0.0227,x:0,y:0},0).wait(5).to({rotation:0},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-93.4},0).wait(1).to({regX:0,regY:0,x:0,y:-10},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-94.2},0).wait(1).to({y:-91.45},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({y:1},0).wait(1).to({y:0},0).wait(9).to({x:1,y:4},1,cjs.Ease.get(1)).wait(1).to({regX:66.2,regY:-85,x:63.45,y:-77.25},0).wait(1).to({regX:0,regY:0,x:-4,y:9},0).to({x:0,y:13},4).wait(11).to({regX:66.2,regY:-85,x:66.2,y:-72.75},0).wait(1).to({y:-75.7},0).wait(1).to({y:-80.65},0).wait(1).to({y:-84.1},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(5).to({y:-1},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-84},0).wait(1).to({y:-78.05},0).wait(1).to({regX:0,regY:0,x:0,y:9},0).to({y:8},2).wait(1).to({y:9},0).wait(6).to({regX:66.2,regY:-85,x:66.2,y:-77.2},0).wait(1).to({y:-81.5},0).wait(1).to({y:-85.8},0).wait(1).to({regX:0,regY:0,x:0,y:-2},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-85.5},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:66.2,regY:-85,x:66.2,y:-91.7},0).wait(1).to({regX:0,regY:0,x:0,y:-8},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-91.85},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-93.4},0).wait(1).to({regX:0,regY:0,x:0,y:-10},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-94.2},0).wait(1).to({y:-91.45},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({y:1},0).wait(1).to({y:0},0).wait(1).to({x:1,y:4},1,cjs.Ease.get(1)).wait(1).to({regX:66.2,regY:-85,x:63.45,y:-77.25},0).wait(1).to({regX:0,regY:0,x:-4,y:9},0).to({x:0,y:13},4).wait(8).to({regX:66.2,regY:-85,x:66.2,y:-74.25},0).wait(1).to({y:-82},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({y:2},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-86},0).wait(1).to({regX:0,regY:0,x:0,y:-2},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-85.15},0).wait(1).to({regX:0,regY:0,x:0,y:2},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-84.5},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:66.2,regY:-85,x:66.2,y:-84.4},0).wait(1).to({y:-82},0).wait(1).to({y:-79.65},0).wait(1).to({regX:0,regY:0,x:0,y:6},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-79.6},0).wait(1).to({y:-79.9},0).wait(1).to({regX:0,regY:0,x:0,y:5},0).wait(5).to({regX:66.2,regY:-85,x:66.2,y:-80.4},0).wait(1).to({y:-81.9},0).wait(1).to({y:-84.15},0).wait(1).to({y:-85.6},0).wait(1).to({regX:0,regY:0,x:0,y:-1},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-85.25},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({y:5},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-92.6},0).wait(1).to({regX:0,regY:0,x:0,y:-10},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-94.2},0).wait(1).to({y:-91.45},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({y:1},0).wait(1).to({y:0},0).wait(9).to({regX:66.2,regY:-85,x:66.2,y:-92.5},0).wait(1).to({regX:0,regY:0,x:0,y:-10},0).wait(2).to({regX:66.2,regY:-85,x:66.2,y:-93},0).wait(1).to({y:-87},0).wait(1).to({regX:0,regY:0,x:0,y:8},0).to({y:5},2).wait(7).to({regX:66.2,regY:-85,x:66.2,y:-80.35},0).wait(1).to({y:-81.55},0).wait(1).to({y:-83.5},0).wait(1).to({y:-84.7},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({y:2},0).wait(1).to({y:-7},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-89.95},0).wait(1).to({y:-84.05},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({y:-7},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-89.95},0).wait(1).to({y:-84.05},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-84.1},0).wait(1).to({y:-84.75},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:66.2,regY:-85,x:69.2,y:-81.6},0).wait(1).to({regX:0,regY:0,x:4,y:4.55},0).to({x:-2,y:8.8},2).wait(1).to({regX:66.2,regY:-85,x:65.35,y:-75.55},0).wait(1).to({x:66,y:-75.15},0).wait(1).to({regX:0,regY:0,x:0,y:10},0).wait(5).to({regX:66.2,regY:-85,x:66.2,y:-75.7},0).wait(1).to({y:-78.15},0).wait(1).to({y:-81.85},0).wait(1).to({y:-84.35},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(74).to({regX:66.2,regY:-85,x:66.2,y:-84.7},0).wait(1).to({y:-83.5},0).wait(1).to({y:-81.55},0).wait(1).to({y:-80.35},0).wait(1).to({regX:0,regY:0,x:0,y:5},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-80.35},0).wait(1).to({y:-81.55},0).wait(1).to({y:-83.5},0).wait(1).to({y:-84.7},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:66.2,regY:-85,x:66.2,y:-84.4},0).wait(1).to({y:-82},0).wait(1).to({y:-79.65},0).wait(1).to({regX:0,regY:0,x:0,y:6},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-79.65},0).wait(1).to({y:-82},0).wait(1).to({y:-84.4},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(7));

	// clook_to_right
	this.c = new lib.character1_body();
	this.c.name = "c";
	this.c.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.c).wait(9).to({regX:66.2,regY:-85,x:66.2,y:-93.4},0).wait(1).to({regX:0,regY:0,x:0,y:-10},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-94.2},0).wait(1).to({y:-91.45},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({y:1},0).wait(1).to({y:0},0).wait(1).to({y:2},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-90.5},0).wait(1).to({regX:0,regY:0,x:0,y:-8},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-90.75},0).wait(1).to({y:-83.8},0).wait(1).to({regX:0,regY:0,x:0,y:4},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-81.75},0).wait(1).to({y:-84.15},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({y:2},0).wait(1).to({y:-7},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-89.95},0).wait(1).to({y:-84.05},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({y:-7},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-89.95},0).wait(1).to({y:-84.05},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-84.1},0).wait(1).to({y:-84.75},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({y:6},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-94},0).wait(1).to({regX:0,regY:0,x:0,y:-14},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-97.95},0).wait(1).to({y:-94.35},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-83},0).wait(1).to({regX:0,regY:0,x:0,y:-1},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-85.25},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({y:6},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-94},0).wait(1).to({regX:0,regY:0,x:0,y:-14},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-97.95},0).wait(1).to({y:-94.35},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-83},0).wait(1).to({regX:0,regY:0,x:0,y:-1},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-85.25},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:66.2,regY:-85,x:66.2,y:-84.4},0).wait(1).to({y:-82},0).wait(1).to({y:-79.65},0).wait(1).to({regX:0,regY:0,x:0,y:6},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-79.65},0).wait(1).to({y:-82},0).wait(1).to({y:-84.4},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:66.2,regY:-85,x:66.2,y:-84.85},0).wait(1).to({y:-84.3},0).wait(1).to({y:-83.2},0).wait(1).to({y:-81.85},0).wait(1).to({y:-80.75},0).wait(1).to({y:-80.2},0).wait(1).to({regX:0,regY:0,x:0,y:5},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-80.2},0).wait(1).to({y:-80.75},0).wait(1).to({y:-81.85},0).wait(1).to({y:-83.2},0).wait(1).to({y:-84.3},0).wait(1).to({y:-84.85},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({y:6},2).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-80.25},0).wait(1).to({y:-83.8},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).to({y:6},2).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-82.8},0).wait(1).to({y:-84.65},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:66.2,regY:-85,rotation:0.0244,x:66.25,y:-84.9},0).wait(1).to({rotation:0.1092,x:66.45,y:-84.5},0).wait(1).to({rotation:0.275,x:66.95,y:-83.8},0).wait(1).to({rotation:0.538,x:67.7,y:-82.65},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:0.8681,x:68.65,y:-81.15},0).wait(1).to({rotation:1.1673,x:69.5,y:-79.75},0).wait(1).to({rotation:1.367,x:70,y:-78.8},0).wait(1).to({rotation:1.4695,x:70.3,y:-78.35},0).wait(1).to({regX:0,regY:0,rotation:1.4989,x:1.95,y:4.95},0).wait(1).to({regX:66.2,regY:-85,rotation:1.479,x:70.25,y:-78.4},0).wait(1).to({rotation:1.4111,x:70.05,y:-78.65},0).wait(1).to({rotation:1.2801,x:69.75,y:-79.25},0).wait(1).to({rotation:1.0711,x:69.15,y:-80.25},0).wait(1).to({rotation:0.7884,x:68.35,y:-81.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.4865,x:67.5,y:-82.85},0).wait(1).to({rotation:0.2415,x:66.8,y:-83.9},0).wait(1).to({rotation:0.0832,x:66.35,y:-84.65},0).wait(1).to({rotation:0.0011,x:66.2,y:-85},0).wait(1).to({regX:0,regY:0,rotation:-0.0227,x:0,y:0},0).wait(1).to({rotation:0},0).wait(1).to({regX:66.2,regY:-85,rotation:0.0244,x:66.25,y:-84.9},0).wait(1).to({rotation:0.1092,x:66.45,y:-84.5},0).wait(1).to({rotation:0.275,x:66.95,y:-83.8},0).wait(1).to({rotation:0.538,x:67.7,y:-82.65},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:0.8681,x:68.65,y:-81.15},0).wait(1).to({rotation:1.1673,x:69.5,y:-79.75},0).wait(1).to({rotation:1.367,x:70,y:-78.8},0).wait(1).to({rotation:1.4695,x:70.3,y:-78.35},0).wait(1).to({regX:0,regY:0,rotation:1.4989,x:1.95,y:4.95},0).wait(1).to({regX:66.2,regY:-85,rotation:1.4793,x:70.25,y:-78.4},0).wait(1).to({rotation:1.4124,x:70.05,y:-78.65},0).wait(1).to({rotation:1.2834,x:69.75,y:-79.25},0).wait(1).to({rotation:1.0775,x:69.15,y:-80.25},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.7991,x:68.4,y:-81.5},0).wait(1).to({rotation:0.5016,x:67.55,y:-82.8},0).wait(1).to({rotation:0.2603,x:66.85,y:-83.9},0).wait(1).to({rotation:0.1043,x:66.4,y:-84.65},0).wait(1).to({rotation:0.0235,x:66.25,y:-84.95},0).wait(1).to({regX:0,regY:0,rotation:0,x:0,y:0},0).wait(16).to({regX:66.2,regY:-85,x:66.2,y:-90.55},0).wait(1).to({y:-92.45},0).wait(1).to({regX:0,regY:0,x:0,y:-8},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-92.35},0).wait(1).to({y:-90.25},0).wait(1).to({regX:0,regY:0,x:0,y:2},0).wait(1).to({y:1},0).wait(1).to({y:0},0).wait(7).to({regX:66.2,regY:-85,x:66.2,y:-93.4},0).wait(1).to({regX:0,regY:0,x:0,y:-10},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-94.2},0).wait(1).to({y:-91.45},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({y:1},0).wait(1).to({y:0},0).wait(15).to({regX:66.2,regY:-85,rotation:-0.0253,x:66.15,y:-84.95},0).wait(1).to({rotation:-0.1129,y:-84.5},0).wait(1).to({rotation:-0.2845,y:-83.7},0).wait(1).to({rotation:-0.5565,x:66.1,y:-82.45},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-0.898,x:66,y:-80.85},0).wait(1).to({rotation:-1.2075,x:65.95,y:-79.35},0).wait(1).to({rotation:-1.4141,x:65.85,y:-78.4},0).wait(1).to({rotation:-1.5201,y:-77.9},0).wait(1).to({regX:0,regY:0,rotation:-1.5505,x:2,y:9},0).wait(1).to({regX:66.2,regY:-85,rotation:-1.5305,x:65.85,y:-77.85},0).wait(1).to({rotation:-1.4624,y:-78.2},0).wait(1).to({rotation:-1.3309,x:65.9,y:-78.8},0).wait(1).to({rotation:-1.121,x:65.95,y:-79.85},0).wait(1).to({rotation:-0.8372,x:66,y:-81.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.534,x:66.05,y:-82.6},0).wait(1).to({rotation:-0.2881,y:-83.8},0).wait(1).to({rotation:-0.1291,x:66.1,y:-84.55},0).wait(1).to({rotation:-0.0467,x:66.15,y:-84.95},0).wait(1).to({regX:0,regY:0,rotation:-0.0227,x:0,y:0},0).wait(1).to({rotation:0},0).wait(1).to({regX:66.2,regY:-85,rotation:0.1421,x:66.55,y:-84.4},0).wait(1).to({rotation:0.6998,x:68.15,y:-81.9},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:1.327,x:69.9,y:-79},0).wait(1).to({regX:0,regY:0,rotation:1.4989,x:1.95,y:4.95},0).wait(18).to({regX:66.2,regY:-85,rotation:1.4399,x:70.15,y:-78.55},0).wait(1).to({rotation:1.2196,x:69.55,y:-79.55},0).wait(1).to({rotation:0.7884,x:68.35,y:-81.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.3138,x:67,y:-83.6},0).wait(1).to({rotation:0.0482,x:66.25,y:-84.8},0).wait(1).to({regX:0,regY:0,rotation:-0.0227,x:0,y:0},0).wait(1).to({rotation:0},0).wait(1).to({regX:66.2,regY:-85,rotation:0.0865,x:66.45,y:-84.65},0).wait(1).to({rotation:0.4213,x:67.35,y:-83.1},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:0.9973,x:69,y:-80.55},0).wait(1).to({rotation:1.3945,x:70.05,y:-78.7},0).wait(1).to({regX:0,regY:0,rotation:1.4989,x:1.95,y:4.95},0).wait(8).to({regX:66.2,regY:-85,rotation:1.4399,x:70.15,y:-78.55},0).wait(1).to({rotation:1.2196,x:69.55,y:-79.55},0).wait(1).to({rotation:0.7884,x:68.35,y:-81.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.3138,x:67,y:-83.6},0).wait(1).to({rotation:0.0482,x:66.25,y:-84.8},0).wait(1).to({regX:0,regY:0,rotation:-0.0227,x:0,y:0},0).wait(5).to({rotation:0},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-93.4},0).wait(1).to({regX:0,regY:0,x:0,y:-10},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-94.2},0).wait(1).to({y:-91.45},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({y:1},0).wait(1).to({y:0},0).wait(9).to({x:1,y:4},1,cjs.Ease.get(1)).wait(1).to({regX:66.2,regY:-85,x:63.45,y:-77.25},0).wait(1).to({regX:0,regY:0,x:-4,y:9},0).to({x:0,y:13},4).wait(11).to({regX:66.2,regY:-85,x:66.2,y:-72.75},0).wait(1).to({y:-75.7},0).wait(1).to({y:-80.65},0).wait(1).to({y:-84.1},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(5).to({y:-1},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-84},0).wait(1).to({y:-78.05},0).wait(1).to({regX:0,regY:0,x:0,y:9},0).to({y:8},2).wait(1).to({y:9},0).wait(6).to({regX:66.2,regY:-85,x:66.2,y:-77.2},0).wait(1).to({y:-81.5},0).wait(1).to({y:-85.8},0).wait(1).to({regX:0,regY:0,x:0,y:-2},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-85.5},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:66.2,regY:-85,x:66.2,y:-91.7},0).wait(1).to({regX:0,regY:0,x:0,y:-8},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-91.85},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-93.4},0).wait(1).to({regX:0,regY:0,x:0,y:-10},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-94.2},0).wait(1).to({y:-91.45},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({y:1},0).wait(1).to({y:0},0).wait(1).to({x:1,y:4},1,cjs.Ease.get(1)).wait(1).to({regX:66.2,regY:-85,x:63.45,y:-77.25},0).wait(1).to({regX:0,regY:0,x:-4,y:9},0).to({x:0,y:13},4).wait(8).to({regX:66.2,regY:-85,x:66.2,y:-74.25},0).wait(1).to({y:-82},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({y:2},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-86},0).wait(1).to({regX:0,regY:0,x:0,y:-2},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-85.15},0).wait(1).to({regX:0,regY:0,x:0,y:2},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-84.5},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:66.2,regY:-85,x:66.2,y:-84.4},0).wait(1).to({y:-82},0).wait(1).to({y:-79.65},0).wait(1).to({regX:0,regY:0,x:0,y:6},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-79.6},0).wait(1).to({y:-79.9},0).wait(1).to({regX:0,regY:0,x:0,y:5},0).wait(5).to({regX:66.2,regY:-85,x:66.2,y:-80.4},0).wait(1).to({y:-81.9},0).wait(1).to({y:-84.15},0).wait(1).to({y:-85.6},0).wait(1).to({regX:0,regY:0,x:0,y:-1},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-85.25},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({y:5},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-92.6},0).wait(1).to({regX:0,regY:0,x:0,y:-10},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-94.2},0).wait(1).to({y:-91.45},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({y:1},0).wait(1).to({y:0},0).wait(9).to({regX:66.2,regY:-85,x:66.2,y:-92.5},0).wait(1).to({regX:0,regY:0,x:0,y:-10},0).wait(2).to({regX:66.2,regY:-85,x:66.2,y:-93},0).wait(1).to({y:-87},0).wait(1).to({regX:0,regY:0,x:0,y:8},0).to({y:5},2).wait(7).to({regX:66.2,regY:-85,x:66.2,y:-80.35},0).wait(1).to({y:-81.55},0).wait(1).to({y:-83.5},0).wait(1).to({y:-84.7},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({y:2},0).wait(1).to({y:-7},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-89.95},0).wait(1).to({y:-84.05},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({y:-7},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-89.95},0).wait(1).to({y:-84.05},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-84.1},0).wait(1).to({y:-84.75},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:66.2,regY:-85,x:69.2,y:-81.6},0).wait(1).to({regX:0,regY:0,x:4,y:4.55},0).to({x:-2,y:8.8},2).wait(1).to({regX:66.2,regY:-85,x:65.35,y:-75.55},0).wait(1).to({x:66,y:-75.15},0).wait(1).to({regX:0,regY:0,x:0,y:10},0).wait(5).to({regX:66.2,regY:-85,x:66.2,y:-75.7},0).wait(1).to({y:-78.15},0).wait(1).to({y:-81.85},0).wait(1).to({y:-84.35},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(74).to({regX:66.2,regY:-85,x:66.2,y:-84.85},0).wait(1).to({y:-84.15},0).wait(1).to({y:-83.1},0).wait(1).to({y:-82.4},0).wait(1).to({regX:0,regY:0,x:0,y:2.8},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-82.4},0).wait(1).to({y:-83.1},0).wait(1).to({y:-84.15},0).wait(1).to({y:-84.85},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:66.2,regY:-85,x:66.2,y:-84.4},0).wait(1).to({y:-82},0).wait(1).to({y:-79.65},0).wait(1).to({regX:0,regY:0,x:0,y:6},0).wait(1).to({regX:66.2,regY:-85,x:66.2,y:-79.65},0).wait(1).to({y:-82},0).wait(1).to({y:-84.4},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-456.9,-680.4,966.5999999999999,901.9);


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
(lib._406_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{end0:14,scene1:15,end1:171,scene2:172,end2:303,scene3:304,end3:448,scene4:449,end4:626,scene5:627,end5:798,scene6:799,end6:963,scene7:964,end7:1117});

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
		exportRoot._g.m1 = "안전벨트, 좋~아.";
		exportRoot._g.m2 = "";
		exportRoot._g.m3 = "";
		exportRoot._g.m4 = "";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 1);
		
		this.ch1.gotoAndPlay("swing");
	}
	this.frame_42 = function() {
		exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
		exportRoot._g.m2 = "좋~아.";
		exportRoot._u.setText();
	}
	this.frame_67 = function() {
		exportRoot._g.m2 = "좋~아.……";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 11);
		
		exportRoot.ch1.gotoAndPlay("nod_double");
	}
	this.frame_84 = function() {
		exportRoot._g.m2 = "좋~아. ……응,";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 9);
		
		exportRoot.ch1.gotoAndPlay("nod");
	}
	this.frame_96 = function() {
		exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
		exportRoot._g.m3 = "빈틈없이";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 3);
		
		exportRoot.ch1.gotoAndPlay("laugh_stay");
	}
	this.frame_130 = function() {
		exportRoot._g.m3 = "빈틈없이…… 아,";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 1);
		
		exportRoot.ch1.gotoAndPlay("notice");
	}
	this.frame_139 = function() {
		exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
		exportRoot._u.setText();
		
		//exportRoot.ch1.gotoAndPlay("sweat");
	}
	this.frame_150 = function() {
		exportRoot._g.m4 = this.m.t[exportRoot._g.idx][4];
		exportRoot._u.setText();
		
		exportRoot.ch1.gotoAndPlay("nod");
	}
	this.frame_171 = function() {
		exportRoot._u.updateTalk();
		
		exportRoot._u.setFace("ch1", 1);
		
		this.ch1.gotoAndPlay("standby");
	}
	this.frame_172 = function() {
		exportRoot._g.m1 = "프로듀서 씨,";
		exportRoot._g.m2 = "";
		exportRoot._g.m3 = "";
		exportRoot._g.m4 = "";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 2);
	}
	this.frame_190 = function() {
		exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
		exportRoot._g.m2 = "괜찮을까요?";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 1);
		
		exportRoot.ch1.gotoAndPlay("swing");
	}
	this.frame_225 = function() {
		exportRoot._g.m2 = "괜찮을까요? 분명,";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 4);
	}
	this.frame_237 = function() {
		exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
		exportRoot._g.m3 = "맘에 드는 방송이……";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 4);
	}
	this.frame_284 = function() {
		exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
		exportRoot._g.m4 = this.m.t[exportRoot._g.idx][4];
		exportRoot._u.setText();
		
		this.ch1.gotoAndPlay("sweat");
		
		exportRoot._u.setFace("ch1", 7);
	}
	this.frame_303 = function() {
		exportRoot._u.updateTalk();
		
		exportRoot._u.setFace("ch1", 7);
	}
	this.frame_304 = function() {
		exportRoot._g.m1 = "이 퍼스널리티 분,";
		exportRoot._g.m2 = "";
		exportRoot._g.m3 = "";
		exportRoot._g.m4 = "";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 2);
	}
	this.frame_331 = function() {
		exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
		exportRoot._g.m2 = "";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 1);
		
		//exportRoot.ch1.gotoAndPlay("swing");
	}
	this.frame_359 = function() {
		exportRoot._g.m2 = "차분한 말투에,";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 9);
	}
	this.frame_385 = function() {
		exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
		exportRoot._g.m3 = "상쾌하고,";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 6);
	}
	this.frame_421 = function() {
		exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
		exportRoot._g.m4 = this.m.t[exportRoot._g.idx][4];
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 2);
		
		//exportRoot.ch1.gotoAndPlay("swing");
	}
	this.frame_432 = function() {
		exportRoot._u.setFace("ch1", 5);
	}
	this.frame_448 = function() {
		exportRoot._u.updateTalk();
		
		exportRoot._u.setFace("ch1", 5);
	}
	this.frame_449 = function() {
		exportRoot._g.m1 = "청취자로부터의 소식도,";
		exportRoot._g.m2 = "";
		exportRoot._g.m3 = "";
		exportRoot._g.m4 = "";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 2);
	}
	this.frame_473 = function() {
		exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
		exportRoot._g.m2 = "읽거든요.";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 1);
	}
	this.frame_502 = function() {
		exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
		exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 10);
	}
	this.frame_513 = function() {
		exportRoot._u.setFace("ch1", 7);
	}
	this.frame_563 = function() {
		exportRoot._g.m4 = "……";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 2);
	}
	this.frame_587 = function() {
		exportRoot._g.m4 = "……오늘의 저는,";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 1);
	}
	this.frame_613 = function() {
		exportRoot._g.m4 = this.m.t[exportRoot._g.idx][4];
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 5);
		
		this.ch1.gotoAndPlay("swing");
	}
	this.frame_626 = function() {
		exportRoot._u.updateTalk();
		
		exportRoot._u.setFace("ch1", 5);
	}
	this.frame_627 = function() {
		exportRoot._g.m1 = "우후훗, 다행이다♪";
		exportRoot._g.m2 = "";
		exportRoot._g.m3 = "";
		exportRoot._g.m4 = "";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 3);
	}
	this.frame_638 = function() {
		exportRoot._u.setFace("ch1", 2);
		
		this.ch1.gotoAndPlay("nod_chord");
	}
	this.frame_658 = function() {
		exportRoot._g.m1 = "우후훗, 다행이다♪ 나도,";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 1);
	}
	this.frame_671 = function() {
		exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
		exportRoot._g.m2 = "성장하고 있는 걸까나.";
		exportRoot._u.setText();
		
		this.ch1.gotoAndPlay("swing");
	}
	this.frame_715 = function() {
		exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
		exportRoot._g.m3 = "살던,";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 5);
	}
	this.frame_738 = function() {
		exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
		exportRoot._g.m4 = "";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 9);
		this.ch1.gotoAndPlay("nod2");
	}
	this.frame_777 = function() {
		exportRoot._g.m4 = this.m.t[exportRoot._g.idx][4];
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 5);
	}
	this.frame_798 = function() {
		exportRoot._u.updateTalk();
		
		exportRoot._u.setFace("ch1", 5);
	}
	this.frame_799 = function() {
		exportRoot._g.m1 = "고향에 있었을 때도,";
		exportRoot._g.m2 = "";
		exportRoot._g.m3 = "";
		exportRoot._g.m4 = "";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 2);
	}
	this.frame_822 = function() {
		exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
		exportRoot._g.m2 = "들었어요.";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 1);
	}
	this.frame_857 = function() {
		exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
		exportRoot._g.m3 = "";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 4);
	}
	this.frame_882 = function() {
		exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
		exportRoot._g.m4 = "";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 1);
		
		//this.ch1.gotoAndPlay("flower");
	}
	this.frame_923 = function() {
		exportRoot._g.m4 = "저의 힘의 원천,";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 3);
	}
	this.frame_956 = function() {
		exportRoot._g.m4 = this.m.t[exportRoot._g.idx][4];
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 10);
		
		//this.ch1.gotoAndPlay("nod");
	}
	this.frame_963 = function() {
		exportRoot._u.updateTalk();
		
		exportRoot._u.setFace("ch1", 10);
	}
	this.frame_964 = function() {
		exportRoot._g.m1 = "";
		exportRoot._g.m2 = "";
		exportRoot._g.m3 = "";
		exportRoot._g.m4 = "";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 2);
	}
	this.frame_977 = function() {
		exportRoot._g.m1 = "그러면,";
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 1);
	}
	this.frame_991 = function() {
		exportRoot._g.m1 = "그러면, 라디오와,";
		exportRoot._u.setText();
	}
	this.frame_1001 = function() {
		exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
		exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 2);
	}
	this.frame_1045 = function() {
		exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
		exportRoot._u.setText();
		
		
		exportRoot._u.setFace("ch1", 1);
	}
	this.frame_1075 = function() {
		exportRoot._g.m4 = this.m.t[exportRoot._g.idx][4];
		exportRoot._u.setText();
		
		exportRoot._u.setFace("ch1", 8);
	}
	this.frame_1097 = function() {
		// finish指定時は exportRoot._g.m の後ろの数字をsetTextの2つ目の引数に指定する
		exportRoot._g.m5 = this.m.t[exportRoot._g.idx][5];
		exportRoot._u.setText("finish", 5);
	}
	this.frame_1117 = function() {
		//最後のシーンであることをHTML側に通知
		exportRoot._g.end_flag = true;
		
		//label「scene7」通過後のskip対策
		exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
		exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
		exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
		exportRoot._g.m4 = this.m.t[exportRoot._g.idx][4];
		exportRoot._g.m5 = this.m.t[exportRoot._g.idx][5];
		exportRoot._u.setText("finish", 5);
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1).call(this.frame_15).wait(27).call(this.frame_42).wait(25).call(this.frame_67).wait(17).call(this.frame_84).wait(12).call(this.frame_96).wait(34).call(this.frame_130).wait(9).call(this.frame_139).wait(11).call(this.frame_150).wait(21).call(this.frame_171).wait(1).call(this.frame_172).wait(18).call(this.frame_190).wait(35).call(this.frame_225).wait(12).call(this.frame_237).wait(47).call(this.frame_284).wait(19).call(this.frame_303).wait(1).call(this.frame_304).wait(27).call(this.frame_331).wait(28).call(this.frame_359).wait(26).call(this.frame_385).wait(36).call(this.frame_421).wait(11).call(this.frame_432).wait(16).call(this.frame_448).wait(1).call(this.frame_449).wait(24).call(this.frame_473).wait(29).call(this.frame_502).wait(11).call(this.frame_513).wait(50).call(this.frame_563).wait(24).call(this.frame_587).wait(26).call(this.frame_613).wait(13).call(this.frame_626).wait(1).call(this.frame_627).wait(11).call(this.frame_638).wait(20).call(this.frame_658).wait(13).call(this.frame_671).wait(44).call(this.frame_715).wait(23).call(this.frame_738).wait(39).call(this.frame_777).wait(21).call(this.frame_798).wait(1).call(this.frame_799).wait(23).call(this.frame_822).wait(35).call(this.frame_857).wait(25).call(this.frame_882).wait(41).call(this.frame_923).wait(33).call(this.frame_956).wait(7).call(this.frame_963).wait(1).call(this.frame_964).wait(13).call(this.frame_977).wait(14).call(this.frame_991).wait(10).call(this.frame_1001).wait(44).call(this.frame_1045).wait(30).call(this.frame_1075).wait(22).call(this.frame_1097).wait(20).call(this.frame_1117).wait(5));

	// shield
	this.instance = new lib.shield();
	this.instance.parent = this;
	this.instance.setTransform(120,160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1122));

	// sender
	this.sender = new lib.sender();
	this.sender.name = "sender";
	this.sender.parent = this;
	this.sender.setTransform(-100,0);
	this.sender._off = true;

	this.timeline.addTween(cjs.Tween.get(this.sender).wait(1117).to({_off:false},0).wait(5));

	// SP_loader
	this.loader = new lib.voice_loader_container();
	this.loader.name = "loader";
	this.loader.parent = this;
	this.loader.setTransform(190.05,12,1,1,0,0,0,-50.1,11);

	this.timeline.addTween(cjs.Tween.get(this.loader).wait(1122));

	// place
	this.instance_1 = new lib.tie();
	this.instance_1.parent = this;
	this.instance_1.setTransform(120,155);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({alpha:0.1992},3,cjs.Ease.get(1)).to({_off:true},1).wait(1103));

	// SP_pusher
	this.instance_2 = new lib.pusher_next();
	this.instance_2.parent = this;
	this.instance_2.setTransform(120,290);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off:false},0).to({_off:true},3).wait(1107));

	// fader
	this.instance_3 = new lib.dark();
	this.instance_3.parent = this;
	this.instance_3.setTransform(120,155);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},15).wait(1107));

	// window
	this.window_1 = new lib.window_container();
	this.window_1.name = "window_1";
	this.window_1.parent = this;
	this.window_1.setTransform(2,321.1);

	this.timeline.addTween(cjs.Tween.get(this.window_1).wait(15).to({y:301.1},0).wait(1).to({regX:132.8,regY:98.8,x:134.8,y:398.6},0).wait(1).to({y:394.65},0).wait(1).to({y:388},0).wait(1).to({y:378.75},0).wait(1).to({y:367.25},0).wait(1).to({y:354.25},0).wait(1).to({y:340.85},0).wait(1).to({y:328.45},0).wait(1).to({y:318.45},0).wait(1).to({y:312},0).wait(1).to({regX:0,regY:0,x:2,y:211},0).wait(1).to({regX:132.8,regY:98.8,x:134.8,y:310.3},0).wait(1).to({y:311.9},0).wait(1).to({regX:0,regY:0,x:2,y:214},0).wait(1057).to({regX:132.8,regY:98.8,x:134.8,y:313.9},0).wait(1).to({y:317.75},0).wait(1).to({y:325},0).wait(1).to({y:336.4},0).wait(1).to({y:351.7},0).wait(1).to({y:368.85},0).wait(1).to({y:384.15},0).wait(1).to({y:395.55},0).wait(1).to({y:402.8},0).wait(1).to({y:406.65},0).wait(1).to({regX:0,regY:0,x:2,y:309},0).to({_off:true},1).wait(25));

	// window
	this.window_2 = new lib.finish_text_container();
	this.window_2.name = "window_2";
	this.window_2.parent = this;
	this.window_2.setTransform(120,322);
	this.window_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.window_2).wait(1097).to({_off:false},0).wait(1).to({regX:3.5,regY:59.1,x:123.5,y:380.6},0).wait(1).to({y:378.9},0).wait(1).to({y:375.6},0).wait(1).to({y:370.25},0).wait(1).to({y:362.8},0).wait(1).to({y:354.45},0).wait(1).to({y:347.5},0).wait(1).to({y:342.95},0).wait(1).to({y:340.65},0).wait(1).to({regX:0,regY:0,x:120,y:280.9},0).to({y:282.9},3).wait(12));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]},1097).wait(25));

	// glitters
	this.glitters = new lib.glitters();
	this.glitters.name = "glitters";
	this.glitters.parent = this;
	this.glitters._off = true;

	this.timeline.addTween(cjs.Tween.get(this.glitters).wait(1097).to({_off:false},0).wait(25));

	// SP_blur
	this.ranko_finish_blur = new lib.ranko_finish_blur();
	this.ranko_finish_blur.name = "ranko_finish_blur";
	this.ranko_finish_blur.parent = this;
	this.ranko_finish_blur._off = true;
	this.ranko_finish_blur.filters = [new cjs.ColorFilter(1, 1, 1, 1, 220, 220, 220, 0)];
	this.ranko_finish_blur.cache(-2,-2,244,314);

	this.timeline.addTween(cjs.Tween.get(this.ranko_finish_blur).wait(1097).to({_off:false},0).wait(1).to({regX:120,regY:155,x:120,y:155,alpha:0.9968},0).wait(1).to({alpha:0.9867},0).wait(1).to({alpha:0.9688},0).wait(1).to({alpha:0.9423},0).wait(1).to({alpha:0.906},0).wait(1).to({alpha:0.8587},0).wait(1).to({alpha:0.7993},0).wait(1).to({alpha:0.7268},0).wait(1).to({alpha:0.641},0).wait(1).to({alpha:0.5432},0).wait(1).to({alpha:0.4371},0).wait(1).to({alpha:0.3301},0).wait(1).to({alpha:0.2319},0).wait(1).to({alpha:0.1514},0).wait(1).to({alpha:0.0941},0).wait(1).to({alpha:0.0612},0).wait(1).to({regX:0,regY:0,x:0,y:0,alpha:0.0508},0).to({_off:true},1).wait(7));

	// character_face
	this.fns = new lib.finish_1();
	this.fns.name = "fns";
	this.fns.parent = this;
	this.fns.setTransform(120,168,1,1,0,0,0,120,168);
	this.fns._off = true;

	this.timeline.addTween(cjs.Tween.get(this.fns).wait(1097).to({_off:false},0).wait(25));

	// white_mask
	this.instance_9 = new lib.white_mask();
	this.instance_9.parent = this;
	this.instance_9.setTransform(120,155,1,1,0,0,0,120,155);
	this.instance_9.alpha = 0.0508;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1085).to({_off:false},0).to({alpha:0.8984},11).to({_off:true},1).wait(25));

	// overlay_black
	this.instance_10 = new lib.dark();
	this.instance_10.parent = this;
	this.instance_10.setTransform(120,155);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(15).to({_off:false},0).to({alpha:0},3).to({_off:true},1).wait(20).to({_off:false},0).to({alpha:1},3).to({alpha:0},3).to({_off:true},1).wait(18).to({_off:false},0).to({alpha:1},3).to({alpha:0},19).to({_off:true},1).wait(712).to({_off:false,alpha:1},0).to({alpha:0},11).to({_off:true},1).wait(311));

	// powder
	this.instance_11 = new lib.glitter_rise();
	this.instance_11.parent = this;
	this.instance_11.setTransform(194.25,-43.4,1.0489,1.0489,-2.749,0,0,5.1,-0.4);

	this.instance_12 = new lib.glitter_rise();
	this.instance_12.parent = this;
	this.instance_12.setTransform(125.5,-5.3,1.155,1.0853,-4.8774,0,0,0,6.5);
	this.instance_12.alpha = 0.6992;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11}]}).to({state:[]},15).wait(1107));

	// overlay_top
	this.instance_13 = new lib.overlay_black();
	this.instance_13.parent = this;
	this.instance_13.setTransform(120,-38.95);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(15).to({_off:false},0).wait(1).to({regX:1,x:121,y:-39.9},0).wait(1).to({y:-42.85},0).wait(1).to({y:-47.55},0).wait(1).to({y:-53.95},0).wait(1).to({y:-61.75},0).wait(1).to({y:-70.65},0).wait(1).to({y:-80.3},0).wait(1).to({y:-90.2},0).wait(1).to({y:-99.95},0).wait(1).to({y:-108.95},0).wait(1).to({regX:0,x:120,y:-116.75},0).wait(1).to({regX:1,x:121,y:-114.2},0).wait(1).to({y:-112.55},0).wait(1).to({regX:0,x:120,y:-112},0).to({_off:true},38).wait(1055));

	// overlay_bottom
	this.instance_14 = new lib.overlay_black();
	this.instance_14.parent = this;
	this.instance_14.setTransform(120,271.05);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(15).to({_off:false},0).wait(1).to({regX:1,x:121,y:272.1},0).wait(1).to({y:275.25},0).wait(1).to({y:280.35},0).wait(1).to({y:287.2},0).wait(1).to({y:295.65},0).wait(1).to({y:305.25},0).wait(1).to({y:315.65},0).wait(1).to({y:326.4},0).wait(1).to({y:336.9},0).wait(1).to({y:346.6},0).wait(1).to({regX:0,x:120,y:355},0).wait(1).to({regX:1,x:121,y:349.1},0).wait(1).to({y:345.3},0).wait(1).to({regX:0,x:120,y:344},0).to({_off:true},38).wait(1055));

	// powapowa1
	this.lighter_tgt = new lib.mc_ring_move();
	this.lighter_tgt.name = "lighter_tgt";
	this.lighter_tgt.parent = this;
	this.lighter_tgt.setTransform(120,155);
	this.lighter_tgt.alpha = 0;
	this.lighter_tgt._off = true;

	this.timeline.addTween(cjs.Tween.get(this.lighter_tgt).wait(715).to({_off:false},0).to({alpha:1},62).to({_off:true},22).wait(323));

	// powapowa2
	this.lighter_tgt_1 = new lib.mc_bubble_set();
	this.lighter_tgt_1.name = "lighter_tgt_1";
	this.lighter_tgt_1.parent = this;
	this.lighter_tgt_1.setTransform(121,336,1,1,89.9781);
	this.lighter_tgt_1.alpha = 0;
	this.lighter_tgt_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.lighter_tgt_1).wait(715).to({_off:false},0).to({alpha:0.4492},62).to({_off:true},22).wait(323));

	// effect
	this.instance_15 = new lib.gliter_container();
	this.instance_15.parent = this;
	this.instance_15.setTransform(143.7,-12.25,1.0599,1.0599,-4.2877,0,0,-0.1,2.5);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(15).to({_off:false},0).wait(452).to({regX:0,scaleX:1.1997,scaleY:1.1997,rotation:-4.2598,x:145.75,y:-12.2},146).wait(509));

	// レイヤー_2
	this.instance_16 = new lib.scene01_cut02();
	this.instance_16.parent = this;
	this.instance_16.setTransform(115.85,87.15,2.28,2.28);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(42).to({_off:false},0).to({y:97.15},24).to({_off:true},1).wait(1055));

	// レイヤー_1
	this.instance_17 = new lib.scene01_cut01();
	this.instance_17.parent = this;
	this.instance_17.setTransform(94,87.9,1.79,1.79);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(15).to({_off:false},0).to({x:104},26).to({_off:true},1).wait(1080));

	// ch
	this.ch1 = new lib.character1_container();
	this.ch1.name = "ch1";
	this.ch1.parent = this;
	this.ch1.setTransform(-178,570,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.ch1).wait(67).to({regX:-0.1,regY:0.2,scaleX:0.9397,scaleY:0.9397,x:28,y:283.05},0).wait(159).to({regX:103.8,regY:-185.9,scaleX:0.9395,scaleY:0.9395,x:125.6,y:108.15},0).wait(1).to({scaleX:0.939,scaleY:0.939,x:125.55,y:108.1},0).wait(1).to({scaleX:0.938,scaleY:0.938,x:125.45,y:108},0).wait(1).to({scaleX:0.9365,scaleY:0.9365,x:125.3,y:107.9},0).wait(1).to({scaleX:0.9346,scaleY:0.9346,x:125.1,y:107.75},0).wait(1).to({scaleX:0.9322,scaleY:0.9322,x:124.9,y:107.55},0).wait(1).to({scaleX:0.9292,scaleY:0.9292,x:124.6,y:107.35},0).wait(1).to({scaleX:0.9256,scaleY:0.9256,x:124.25,y:107.1},0).wait(1).to({scaleX:0.9215,scaleY:0.9215,x:123.85,y:106.8},0).wait(1).to({scaleX:0.9166,scaleY:0.9166,x:123.4,y:106.4},0).wait(1).to({scaleX:0.911,scaleY:0.911,x:122.8,y:106.05},0).wait(1).to({scaleX:0.9047,scaleY:0.9047,x:122.2,y:105.55},0).wait(1).to({scaleX:0.8975,scaleY:0.8975,x:121.5,y:105},0).wait(1).to({scaleX:0.8895,scaleY:0.8895,x:120.7,y:104.45},0).wait(1).to({scaleX:0.8805,scaleY:0.8805,x:119.9,y:103.75},0).wait(1).to({scaleX:0.8706,scaleY:0.8706,x:118.9,y:103.05},0).wait(1).to({scaleX:0.8597,scaleY:0.8597,x:117.85,y:102.25},0).wait(1).to({scaleX:0.8478,scaleY:0.8478,x:116.7,y:101.35},0).wait(1).to({scaleX:0.8349,scaleY:0.8349,x:115.45,y:100.45},0).wait(1).to({scaleX:0.8212,scaleY:0.8212,x:114.15,y:99.4},0).wait(1).to({scaleX:0.8066,scaleY:0.8066,x:112.7,y:98.35},0).wait(1).to({scaleX:0.7914,scaleY:0.7914,x:111.25,y:97.25},0).wait(1).to({scaleX:0.7758,scaleY:0.7758,x:109.75,y:96.1},0).wait(1).to({scaleX:0.7601,scaleY:0.7601,x:108.2,y:94.9},0).wait(1).to({scaleX:0.7444,scaleY:0.7444,x:106.65,y:93.75},0).wait(1).to({scaleX:0.7292,scaleY:0.7292,x:105.2,y:92.65},0).wait(1).to({scaleX:0.7146,scaleY:0.7146,x:103.8,y:91.55},0).wait(1).to({scaleX:0.7009,scaleY:0.7009,x:102.45,y:90.55},0).wait(1).to({scaleX:0.6881,scaleY:0.6881,x:101.2,y:89.65},0).wait(1).to({scaleX:0.6763,scaleY:0.6763,x:100.05,y:88.75},0).wait(1).to({scaleX:0.6657,scaleY:0.6657,x:99.05,y:88},0).wait(1).to({scaleX:0.6562,scaleY:0.6562,x:98.1,y:87.25},0).wait(1).to({scaleX:0.6477,scaleY:0.6477,x:97.3,y:86.65},0).wait(1).to({scaleX:0.6403,scaleY:0.6403,x:96.55,y:86.15},0).wait(1).to({scaleX:0.6338,scaleY:0.6338,x:95.95,y:85.65},0).wait(1).to({scaleX:0.6282,scaleY:0.6282,x:95.4,y:85.2},0).wait(1).to({scaleX:0.6235,scaleY:0.6235,x:94.95,y:84.9},0).wait(1).to({scaleX:0.6196,scaleY:0.6196,x:94.55,y:84.6},0).wait(1).to({scaleX:0.6164,scaleY:0.6164,x:94.3,y:84.35},0).wait(1).to({scaleX:0.6138,scaleY:0.6138,x:94,y:84.2},0).wait(1).to({scaleX:0.612,scaleY:0.612,x:93.8,y:84.05},0).wait(1).to({scaleX:0.6107,scaleY:0.6107,x:93.7,y:83.95},0).wait(1).to({scaleX:0.6099,scaleY:0.6099,x:93.6,y:83.85},0).wait(1).to({regX:-0.1,regY:0.1,scaleX:0.6097,scaleY:0.6097,x:30.3,y:197.3},0).wait(36).to({regX:103.8,regY:-185.9,scaleX:0.61,scaleY:0.61,x:93.65,y:83.9},0).wait(1).to({scaleX:0.6109,scaleY:0.6109,x:93.8,y:84.05},0).wait(1).to({scaleX:0.6124,scaleY:0.6124,x:94,y:84.25},0).wait(1).to({scaleX:0.6147,scaleY:0.6147,x:94.4,y:84.55},0).wait(1).to({scaleX:0.6179,scaleY:0.6179,x:94.9,y:85},0).wait(1).to({scaleX:0.622,scaleY:0.622,x:95.55,y:85.5},0).wait(1).to({scaleX:0.6271,scaleY:0.6271,x:96.35,y:86.2},0).wait(1).to({scaleX:0.6335,scaleY:0.6335,x:97.35,y:87.1},0).wait(1).to({scaleX:0.6411,scaleY:0.6411,x:98.55,y:88.05},0).wait(1).to({scaleX:0.6501,scaleY:0.6501,x:100,y:89.3},0).wait(1).to({scaleX:0.6606,scaleY:0.6606,x:101.65,y:90.7},0).wait(1).to({scaleX:0.6726,scaleY:0.6726,x:103.5,y:92.3},0).wait(1).to({scaleX:0.6858,scaleY:0.6858,x:105.65,y:94.05},0).wait(1).to({scaleX:0.6998,scaleY:0.6998,x:107.85,y:95.95},0).wait(1).to({scaleX:0.7142,scaleY:0.7142,x:110.1,y:97.9},0).wait(1).to({scaleX:0.7282,scaleY:0.7282,x:112.3,y:99.75},0).wait(1).to({scaleX:0.7412,scaleY:0.7412,x:114.4,y:101.45},0).wait(1).to({scaleX:0.7528,scaleY:0.7528,x:116.2,y:103.05},0).wait(1).to({scaleX:0.7629,scaleY:0.7629,x:117.8,y:104.4},0).wait(1).to({scaleX:0.7713,scaleY:0.7713,x:119.1,y:105.5},0).wait(1).to({scaleX:0.7782,scaleY:0.7782,x:120.25,y:106.45},0).wait(1).to({scaleX:0.7836,scaleY:0.7836,x:121.05,y:107.15},0).wait(1).to({scaleX:0.7878,scaleY:0.7878,x:121.75,y:107.75},0).wait(1).to({scaleX:0.7909,scaleY:0.7909,x:122.2,y:108.15},0).wait(1).to({scaleX:0.7929,scaleY:0.7929,x:122.5,y:108.4},0).wait(1).to({scaleX:0.7941,scaleY:0.7941,x:122.75,y:108.6},0).wait(1).to({regX:0,regY:0.3,scaleX:0.7944,scaleY:0.7944,x:40.25,y:256.5},0).wait(232).to({regY:0,y:256.25},0).wait(1).to({regX:103.8,regY:-185.9,scaleX:0.7945,scaleY:0.7945,x:122.65,y:108.55},0).wait(1).to({scaleX:0.7948,scaleY:0.7948,x:122.7},0).wait(1).to({scaleX:0.7953,scaleY:0.7953},0).wait(1).to({scaleX:0.796,scaleY:0.796,x:122.65},0).wait(1).to({scaleX:0.7969,scaleY:0.7969,x:122.7,y:108.5},0).wait(1).to({scaleX:0.798,scaleY:0.798,y:108.55},0).wait(1).to({scaleX:0.7994,scaleY:0.7994},0).wait(1).to({scaleX:0.801,scaleY:0.801},0).wait(1).to({scaleX:0.8029,scaleY:0.8029},0).wait(1).to({scaleX:0.8052,scaleY:0.8052,y:108.5},0).wait(1).to({scaleX:0.8077,scaleY:0.8077,x:122.75},0).wait(1).to({scaleX:0.8106,scaleY:0.8106},0).wait(1).to({scaleX:0.8138,scaleY:0.8138,x:122.7},0).wait(1).to({scaleX:0.8174,scaleY:0.8174,x:122.75},0).wait(1).to({scaleX:0.8214,scaleY:0.8214},0).wait(1).to({scaleX:0.8258,scaleY:0.8258},0).wait(1).to({scaleX:0.8307,scaleY:0.8307,x:122.8},0).wait(1).to({scaleX:0.836,scaleY:0.836},0).wait(1).to({scaleX:0.8418,scaleY:0.8418,x:122.85,y:108.45},0).wait(1).to({scaleX:0.8481,scaleY:0.8481},0).wait(1).to({scaleX:0.8548,scaleY:0.8548},0).wait(1).to({scaleX:0.862,scaleY:0.862,x:122.9},0).wait(1).to({scaleX:0.8696,scaleY:0.8696},0).wait(1).to({scaleX:0.8776,scaleY:0.8776,y:108.4},0).wait(1).to({scaleX:0.8858,scaleY:0.8858,x:122.95,y:108.45},0).wait(1).to({scaleX:0.8943,scaleY:0.8943,y:108.4},0).wait(1).to({scaleX:0.9028,scaleY:0.9028,y:108.35},0).wait(1).to({scaleX:0.9113,scaleY:0.9113,x:123,y:108.4},0).wait(1).to({scaleX:0.9197,scaleY:0.9197,y:108.35},0).wait(1).to({scaleX:0.9278,scaleY:0.9278,x:123.05},0).wait(1).to({scaleX:0.9356,scaleY:0.9356},0).wait(1).to({scaleX:0.9429,scaleY:0.9429,y:108.3},0).wait(1).to({scaleX:0.9498,scaleY:0.9498,x:123.15},0).wait(1).to({scaleX:0.9561,scaleY:0.9561},0).wait(1).to({scaleX:0.962,scaleY:0.962},0).wait(1).to({scaleX:0.9673,scaleY:0.9673},0).wait(1).to({scaleX:0.9721,scaleY:0.9721},0).wait(1).to({scaleX:0.9764,scaleY:0.9764,x:123.2},0).wait(1).to({scaleX:0.9803,scaleY:0.9803,y:108.25},0).wait(1).to({scaleX:0.9837,scaleY:0.9837},0).wait(1).to({scaleX:0.9866,scaleY:0.9866},0).wait(1).to({scaleX:0.9892,scaleY:0.9892},0).wait(1).to({scaleX:0.9913,scaleY:0.9913,x:123.25},0).wait(1).to({scaleX:0.9932,scaleY:0.9932,y:108.2},0).wait(1).to({scaleX:0.9946,scaleY:0.9946,y:108.25},0).wait(1).to({scaleX:0.9958,scaleY:0.9958,x:123.2},0).wait(1).to({scaleX:0.9967,scaleY:0.9967,x:123.25},0).wait(1).to({scaleX:0.9973,scaleY:0.9973,x:123.2},0).wait(1).to({scaleX:0.9977,scaleY:0.9977,x:123.25},0).wait(1).to({regX:0,regY:0,scaleX:0.9978,scaleY:0.9978,x:19.7,y:293.75},0).wait(103).to({regX:103.8,regY:-185.9,scaleX:0.9981,scaleY:0.9981,x:123.25,y:108.25},0).wait(1).to({scaleX:0.9985,scaleY:0.9985},0).wait(1).to({scaleX:0.999,scaleY:0.999,y:108.3},0).wait(1).to({scaleX:0.9995,scaleY:0.9995},0).wait(1).to({scaleX:1.0001,scaleY:1.0001,y:108.35},0).wait(1).to({scaleX:1.0008,scaleY:1.0008,x:123.3,y:108.3},0).wait(1).to({scaleX:1.0015,scaleY:1.0015,y:108.35},0).wait(1).to({scaleX:1.0023,scaleY:1.0023,y:108.4},0).wait(1).to({scaleX:1.0032,scaleY:1.0032,x:123.35},0).wait(1).to({scaleX:1.0041,scaleY:1.0041,y:108.45},0).wait(1).to({scaleX:1.0052,scaleY:1.0052},0).wait(1).to({scaleX:1.0063,scaleY:1.0063,y:108.5},0).wait(1).to({scaleX:1.0076,scaleY:1.0076,x:123.4,y:108.55},0).wait(1).to({scaleX:1.0089,scaleY:1.0089,y:108.6},0).wait(1).to({scaleX:1.0104,scaleY:1.0104,x:123.45},0).wait(1).to({scaleX:1.012,scaleY:1.012,y:108.65},0).wait(1).to({scaleX:1.0138,scaleY:1.0138,x:123.5,y:108.75},0).wait(1).to({scaleX:1.0156,scaleY:1.0156,x:123.45,y:108.8},0).wait(1).to({scaleX:1.0176,scaleY:1.0176,x:123.55,y:108.85},0).wait(1).to({scaleX:1.0197,scaleY:1.0197,y:108.9},0).wait(1).to({scaleX:1.0219,scaleY:1.0219,x:123.6,y:108.95},0).wait(1).to({scaleX:1.0242,scaleY:1.0242,y:109.05},0).wait(1).to({scaleX:1.0266,scaleY:1.0266,y:109.1},0).wait(1).to({scaleX:1.0289,scaleY:1.0289,x:123.65,y:109.15},0).wait(1).to({scaleX:1.0313,scaleY:1.0313,x:123.7,y:109.25},0).wait(1).to({scaleX:1.0337,scaleY:1.0337,x:123.75,y:109.3},0).wait(1).to({scaleX:1.0359,scaleY:1.0359,y:109.35},0).wait(1).to({scaleX:1.0381,scaleY:1.0381,y:109.45},0).wait(1).to({scaleX:1.0402,scaleY:1.0402,x:123.85,y:109.5},0).wait(1).to({scaleX:1.0422,scaleY:1.0422,y:109.55},0).wait(1).to({scaleX:1.0441,scaleY:1.0441,x:123.9,y:109.6},0).wait(1).to({scaleX:1.0459,scaleY:1.0459,x:123.85,y:109.7},0).wait(1).to({scaleX:1.0475,scaleY:1.0475,x:123.9},0).wait(1).to({scaleX:1.049,scaleY:1.049,x:123.95,y:109.8},0).wait(1).to({scaleX:1.0504,scaleY:1.0504,y:109.85},0).wait(1).to({scaleX:1.0517,scaleY:1.0517},0).wait(1).to({scaleX:1.053,scaleY:1.053,x:124,y:109.9},0).wait(1).to({scaleX:1.0541,scaleY:1.0541,y:109.95},0).wait(1).to({scaleX:1.0551,scaleY:1.0551},0).wait(1).to({scaleX:1.0561,scaleY:1.0561,y:110},0).wait(1).to({scaleX:1.0569,scaleY:1.0569},0).wait(1).to({scaleX:1.0577,scaleY:1.0577,x:124.05},0).wait(1).to({scaleX:1.0585,scaleY:1.0585,y:110.05},0).wait(1).to({scaleX:1.0592,scaleY:1.0592},0).wait(1).to({scaleX:1.0598,scaleY:1.0598,y:110.1},0).wait(1).to({scaleX:1.0603,scaleY:1.0603,y:110.15},0).wait(1).to({scaleX:1.0609,scaleY:1.0609},0).wait(1).to({scaleX:1.0613,scaleY:1.0613},0).wait(1).to({scaleX:1.0617,scaleY:1.0617,x:124.1,y:110.2},0).wait(1).to({scaleX:1.0621,scaleY:1.0621,y:110.15},0).wait(1).to({scaleX:1.0625,scaleY:1.0625,y:110.2},0).wait(1).to({scaleX:1.0628,scaleY:1.0628},0).wait(1).to({scaleX:1.063,scaleY:1.063},0).wait(1).to({scaleX:1.0632,scaleY:1.0632},0).wait(1).to({scaleX:1.0634,scaleY:1.0634,x:124.15},0).wait(1).to({scaleX:1.0636,scaleY:1.0636,x:124.1,y:110.25},0).wait(1).to({scaleX:1.0637,scaleY:1.0637,y:110.2},0).wait(1).to({scaleX:1.0639,scaleY:1.0639,x:124.15,y:110.25},0).wait(1).to({y:110.2},0).wait(1).to({scaleX:1.064,scaleY:1.064},0).wait(2).to({regX:0,regY:0,x:13.7,y:308.05},0).wait(22).to({regX:-0.1,regY:0.1,scaleX:0.7168,scaleY:0.7168,x:43.5,y:244.9},0).wait(165).to({regX:0,regY:0,x:43.55,y:244.85},0).wait(1).to({regX:103.8,regY:-185.9,scaleX:0.7174,scaleY:0.7174,x:117.95,y:111.55},0).wait(1).to({scaleX:0.718,scaleY:0.718},0).wait(1).to({scaleX:0.7188,scaleY:0.7188},0).wait(1).to({scaleX:0.7198,scaleY:0.7198},0).wait(1).to({scaleX:0.7209,scaleY:0.7209,x:118},0).wait(1).to({scaleX:0.7222,scaleY:0.7222,y:111.5},0).wait(1).to({scaleX:0.7237,scaleY:0.7237},0).wait(1).to({scaleX:0.7255,scaleY:0.7255,x:118.05},0).wait(1).to({scaleX:0.7275,scaleY:0.7275,y:111.45},0).wait(1).to({scaleX:0.7299,scaleY:0.7299,x:118.1,y:111.4},0).wait(1).to({scaleX:0.7325,scaleY:0.7325,x:118.2},0).wait(1).to({scaleX:0.7354,scaleY:0.7354},0).wait(1).to({scaleX:0.7385,scaleY:0.7385,x:118.25,y:111.35},0).wait(1).to({scaleX:0.7419,scaleY:0.7419,x:118.3,y:111.3},0).wait(1).to({scaleX:0.7453,scaleY:0.7453,x:118.35,y:111.25},0).wait(1).to({scaleX:0.7487,scaleY:0.7487,x:118.4},0).wait(1).to({scaleX:0.7519,scaleY:0.7519,x:118.45},0).wait(1).to({scaleX:0.7549,scaleY:0.7549,x:118.5,y:111.15},0).wait(1).to({scaleX:0.7576,scaleY:0.7576,x:118.55},0).wait(1).to({scaleX:0.7601,scaleY:0.7601},0).wait(1).to({scaleX:0.7623,scaleY:0.7623,x:118.6,y:111.1},0).wait(1).to({scaleX:0.7643,scaleY:0.7643,x:118.65},0).wait(1).to({scaleX:0.766,scaleY:0.766,y:111.05},0).wait(1).to({scaleX:0.7675,scaleY:0.7675},0).wait(1).to({scaleX:0.7688,scaleY:0.7688,x:118.7},0).wait(1).to({scaleX:0.7699,scaleY:0.7699,y:111},0).wait(1).to({scaleX:0.7709,scaleY:0.7709},0).wait(1).to({scaleX:0.7718,scaleY:0.7718,x:118.75},0).wait(1).to({scaleX:0.7725,scaleY:0.7725},0).wait(1).to({scaleX:0.7732,scaleY:0.7732,y:110.95},0).wait(1).to({scaleX:0.7737,scaleY:0.7737},0).wait(1).to({scaleX:0.7741,scaleY:0.7741,y:111},0).wait(1).to({scaleX:0.7745,scaleY:0.7745,x:118.8},0).wait(1).to({scaleX:0.7748,scaleY:0.7748,x:118.75,y:110.95},0).wait(1).to({scaleX:0.775,scaleY:0.775,x:118.8,y:111},0).wait(1).to({scaleX:0.7751,scaleY:0.7751,y:110.95},0).wait(1).to({scaleX:0.7752,scaleY:0.7752},0).wait(1).to({regX:0,regY:0,x:38.35,y:255.1},0).to({_off:true},95).wait(25));

	// bg
	this.bg1 = new lib.bg_zoom_half();
	this.bg1.name = "bg1";
	this.bg1.parent = this;
	this.bg1.setTransform(-921.3,-267,1.27,1.27);

	this.timeline.addTween(cjs.Tween.get(this.bg1).wait(67).to({regX:-0.2,scaleX:0.9397,scaleY:0.9397,x:-119.5,y:-132.2},0).wait(159).to({regX:262,regY:316,scaleX:0.9395,scaleY:0.9395,x:126.9,y:164.75},0).wait(1).to({scaleX:0.939,scaleY:0.939,x:126.85,y:164.65},0).wait(1).to({scaleX:0.938,scaleY:0.938,x:126.75,y:164.55},0).wait(1).to({scaleX:0.9365,scaleY:0.9365,x:126.6,y:164.35},0).wait(1).to({scaleX:0.9346,scaleY:0.9346,x:126.4,y:164.1},0).wait(1).to({scaleX:0.9322,scaleY:0.9322,x:126.2,y:163.75},0).wait(1).to({scaleX:0.9292,scaleY:0.9292,x:125.9,y:163.35},0).wait(1).to({scaleX:0.9256,scaleY:0.9256,x:125.55,y:162.9},0).wait(1).to({scaleX:0.9215,scaleY:0.9215,x:125.1,y:162.35},0).wait(1).to({scaleX:0.9166,scaleY:0.9166,x:124.65,y:161.7},0).wait(1).to({scaleX:0.911,scaleY:0.911,x:124.1,y:160.95},0).wait(1).to({scaleX:0.9047,scaleY:0.9047,x:123.45,y:160.05},0).wait(1).to({scaleX:0.8975,scaleY:0.8975,x:122.8,y:159.1},0).wait(1).to({scaleX:0.8895,scaleY:0.8895,x:122,y:158.05},0).wait(1).to({scaleX:0.8805,scaleY:0.8805,x:121.1,y:156.85},0).wait(1).to({scaleX:0.8706,scaleY:0.8706,x:120.15,y:155.55},0).wait(1).to({scaleX:0.8597,scaleY:0.8597,x:119.05,y:154.05},0).wait(1).to({scaleX:0.8478,scaleY:0.8478,x:117.85,y:152.5},0).wait(1).to({scaleX:0.8349,scaleY:0.8349,x:116.6,y:150.8},0).wait(1).to({scaleX:0.8212,scaleY:0.8212,x:115.25,y:148.95},0).wait(1).to({scaleX:0.8066,scaleY:0.8066,x:113.85,y:147},0).wait(1).to({scaleX:0.7914,scaleY:0.7914,x:112.35,y:144.95},0).wait(1).to({scaleX:0.7758,scaleY:0.7758,x:110.8,y:142.85},0).wait(1).to({scaleX:0.7601,scaleY:0.7601,x:109.25,y:140.75},0).wait(1).to({scaleX:0.7444,scaleY:0.7444,x:107.7,y:138.65},0).wait(1).to({scaleX:0.7292,scaleY:0.7292,x:106.2,y:136.65},0).wait(1).to({scaleX:0.7146,scaleY:0.7146,x:104.8,y:134.65},0).wait(1).to({scaleX:0.7009,scaleY:0.7009,x:103.4,y:132.8},0).wait(1).to({scaleX:0.6881,scaleY:0.6881,x:102.15,y:131.15},0).wait(1).to({scaleX:0.6763,scaleY:0.6763,x:101,y:129.6},0).wait(1).to({scaleX:0.6657,scaleY:0.6657,x:99.95,y:128.1},0).wait(1).to({scaleX:0.6562,scaleY:0.6562,x:99,y:126.85},0).wait(1).to({scaleX:0.6477,scaleY:0.6477,x:98.2,y:125.7},0).wait(1).to({scaleX:0.6403,scaleY:0.6403,x:97.45,y:124.7},0).wait(1).to({scaleX:0.6338,scaleY:0.6338,x:96.8,y:123.85},0).wait(1).to({scaleX:0.6282,scaleY:0.6282,x:96.25,y:123.1},0).wait(1).to({scaleX:0.6235,scaleY:0.6235,x:95.8,y:122.45},0).wait(1).to({scaleX:0.6196,scaleY:0.6196,x:95.4,y:122},0).wait(1).to({scaleX:0.6164,scaleY:0.6164,x:95.1,y:121.5},0).wait(1).to({scaleX:0.6138,scaleY:0.6138,x:94.8,y:121.15},0).wait(1).to({scaleX:0.612,scaleY:0.612,x:94.7,y:120.95},0).wait(1).to({scaleX:0.6107,scaleY:0.6107,x:94.55,y:120.75},0).wait(1).to({scaleX:0.6099,scaleY:0.6099,x:94.45,y:120.7},0).wait(1).to({regX:-0.4,regY:-0.1,scaleX:0.6097,scaleY:0.6097,x:-65.45,y:-72},0).wait(36).to({regX:262,regY:316,scaleX:0.61,scaleY:0.61,x:94.6,y:120.8},0).wait(1).to({scaleX:0.6109,scaleY:0.6109,x:94.75,y:121},0).wait(1).to({scaleX:0.6124,scaleY:0.6124,x:95,y:121.25},0).wait(1).to({scaleX:0.6147,scaleY:0.6147,x:95.35,y:121.7},0).wait(1).to({scaleX:0.6179,scaleY:0.6179,x:95.9,y:122.3},0).wait(1).to({scaleX:0.622,scaleY:0.622,x:96.5,y:123.1},0).wait(1).to({scaleX:0.6271,scaleY:0.6271,x:97.35,y:124.15},0).wait(1).to({scaleX:0.6335,scaleY:0.6335,x:98.3,y:125.35},0).wait(1).to({scaleX:0.6411,scaleY:0.6411,x:99.55,y:126.85},0).wait(1).to({scaleX:0.6501,scaleY:0.6501,x:101,y:128.6},0).wait(1).to({scaleX:0.6606,scaleY:0.6606,x:102.7,y:130.6},0).wait(1).to({scaleX:0.6726,scaleY:0.6726,x:104.55,y:132.95},0).wait(1).to({scaleX:0.6858,scaleY:0.6858,x:106.65,y:135.5},0).wait(1).to({scaleX:0.6998,scaleY:0.6998,x:108.9,y:138.25},0).wait(1).to({scaleX:0.7142,scaleY:0.7142,x:111.15,y:141},0).wait(1).to({scaleX:0.7282,scaleY:0.7282,x:113.4,y:143.7},0).wait(1).to({scaleX:0.7412,scaleY:0.7412,x:115.5,y:146.25},0).wait(1).to({scaleX:0.7528,scaleY:0.7528,x:117.35,y:148.5},0).wait(1).to({scaleX:0.7629,scaleY:0.7629,x:118.9,y:150.45},0).wait(1).to({scaleX:0.7713,scaleY:0.7713,x:120.3,y:152.1},0).wait(1).to({scaleX:0.7782,scaleY:0.7782,x:121.35,y:153.4},0).wait(1).to({scaleX:0.7836,scaleY:0.7836,x:122.2,y:154.5},0).wait(1).to({scaleX:0.7878,scaleY:0.7878,x:122.9,y:155.3},0).wait(1).to({scaleX:0.7909,scaleY:0.7909,x:123.35,y:155.85},0).wait(1).to({scaleX:0.7929,scaleY:0.7929,x:123.7,y:156.25},0).wait(1).to({scaleX:0.7941,scaleY:0.7941,x:123.9,y:156.55},0).wait(1).to({regX:-0.5,regY:-0.2,scaleX:0.7944,scaleY:0.7944,x:-84.55,y:-94.6},0).wait(232).to({regX:0,regY:0,x:-84.15,y:-94.45},0).wait(1).to({regX:262,regY:316,scaleX:0.7945,scaleY:0.7945,x:124,y:156.6},0).wait(1).to({scaleX:0.7948,scaleY:0.7948,x:124.05,y:156.65},0).wait(1).to({scaleX:0.7953,scaleY:0.7953,x:124},0).wait(1).to({scaleX:0.796,scaleY:0.796,x:124.05,y:156.7},0).wait(1).to({scaleX:0.7969,scaleY:0.7969,y:156.75},0).wait(1).to({scaleX:0.798,scaleY:0.798,x:124,y:156.8},0).wait(1).to({scaleX:0.7994,scaleY:0.7994,x:124.05,y:156.9},0).wait(1).to({scaleX:0.801,scaleY:0.801,y:157},0).wait(1).to({scaleX:0.8029,scaleY:0.8029,y:157.15},0).wait(1).to({scaleX:0.8052,scaleY:0.8052,x:124.1,y:157.3},0).wait(1).to({scaleX:0.8077,scaleY:0.8077,x:124.05,y:157.45},0).wait(1).to({scaleX:0.8106,scaleY:0.8106,x:124.1,y:157.6},0).wait(1).to({scaleX:0.8138,scaleY:0.8138,y:157.75},0).wait(1).to({scaleX:0.8174,scaleY:0.8174,x:124.15,y:158},0).wait(1).to({scaleX:0.8214,scaleY:0.8214,y:158.2},0).wait(1).to({scaleX:0.8258,scaleY:0.8258,y:158.5},0).wait(1).to({scaleX:0.8307,scaleY:0.8307,x:124.2,y:158.8},0).wait(1).to({scaleX:0.836,scaleY:0.836,x:124.25,y:159.1},0).wait(1).to({scaleX:0.8418,scaleY:0.8418,y:159.45},0).wait(1).to({scaleX:0.8481,scaleY:0.8481,x:124.3,y:159.85},0).wait(1).to({scaleX:0.8548,scaleY:0.8548,x:124.35,y:160.2},0).wait(1).to({scaleX:0.862,scaleY:0.862,x:124.4,y:160.65},0).wait(1).to({scaleX:0.8696,scaleY:0.8696,x:124.45,y:161.1},0).wait(1).to({scaleX:0.8776,scaleY:0.8776,y:161.6},0).wait(1).to({scaleX:0.8858,scaleY:0.8858,x:124.5,y:162.05},0).wait(1).to({scaleX:0.8943,scaleY:0.8943,x:124.55,y:162.6},0).wait(1).to({scaleX:0.9028,scaleY:0.9028,x:124.6,y:163.1},0).wait(1).to({scaleX:0.9113,scaleY:0.9113,y:163.6},0).wait(1).to({scaleX:0.9197,scaleY:0.9197,x:124.7,y:164.1},0).wait(1).to({scaleX:0.9278,scaleY:0.9278,x:124.75,y:164.6},0).wait(1).to({scaleX:0.9356,scaleY:0.9356,y:165.05},0).wait(1).to({scaleX:0.9429,scaleY:0.9429,x:124.8,y:165.5},0).wait(1).to({scaleX:0.9498,scaleY:0.9498,x:124.85,y:165.9},0).wait(1).to({scaleX:0.9561,scaleY:0.9561,y:166.3},0).wait(1).to({scaleX:0.962,scaleY:0.962,x:124.9,y:166.65},0).wait(1).to({scaleX:0.9673,scaleY:0.9673,x:124.95,y:166.95},0).wait(1).to({scaleX:0.9721,scaleY:0.9721,y:167.25},0).wait(1).to({scaleX:0.9764,scaleY:0.9764,x:125,y:167.5},0).wait(1).to({scaleX:0.9803,scaleY:0.9803,y:167.7},0).wait(1).to({scaleX:0.9837,scaleY:0.9837,y:167.95},0).wait(1).to({scaleX:0.9866,scaleY:0.9866,x:125.05,y:168.1},0).wait(1).to({scaleX:0.9892,scaleY:0.9892,y:168.25},0).wait(1).to({scaleX:0.9913,scaleY:0.9913,x:125.1,y:168.35},0).wait(1).to({scaleX:0.9932,scaleY:0.9932,x:125.05,y:168.5},0).wait(1).to({scaleX:0.9946,scaleY:0.9946,x:125.1,y:168.6},0).wait(1).to({scaleX:0.9958,scaleY:0.9958,y:168.65},0).wait(1).to({scaleX:0.9967,scaleY:0.9967,y:168.7},0).wait(1).to({scaleX:0.9973,scaleY:0.9973,y:168.75},0).wait(1).to({scaleX:0.9977,scaleY:0.9977},0).wait(1).to({regX:0,regY:0,scaleX:0.9978,scaleY:0.9978,x:-136.35,y:-146.55},0).wait(103).to({regX:262,regY:316,scaleX:0.9981,scaleY:0.9981,x:125.1,y:168.8},0).wait(1).to({scaleX:0.9985,scaleY:0.9985,y:168.85},0).wait(1).to({scaleX:0.999,scaleY:0.999,y:168.9},0).wait(1).to({scaleX:0.9995,scaleY:0.9995,x:125.15,y:168.95},0).wait(1).to({scaleX:1.0001,scaleY:1.0001,y:169},0).wait(1).to({scaleX:1.0008,scaleY:1.0008,y:169.05},0).wait(1).to({scaleX:1.0015,scaleY:1.0015,y:169.1},0).wait(1).to({scaleX:1.0023,scaleY:1.0023,y:169.15},0).wait(1).to({scaleX:1.0032,scaleY:1.0032,y:169.25},0).wait(1).to({scaleX:1.0041,scaleY:1.0041,x:125.2,y:169.35},0).wait(1).to({scaleX:1.0052,scaleY:1.0052,y:169.45},0).wait(1).to({scaleX:1.0063,scaleY:1.0063,y:169.55},0).wait(1).to({scaleX:1.0076,scaleY:1.0076,x:125.25,y:169.7},0).wait(1).to({scaleX:1.0089,scaleY:1.0089,x:125.3,y:169.8},0).wait(1).to({scaleX:1.0104,scaleY:1.0104,y:169.95},0).wait(1).to({scaleX:1.012,scaleY:1.012,y:170.1},0).wait(1).to({scaleX:1.0138,scaleY:1.0138,x:125.35,y:170.25},0).wait(1).to({scaleX:1.0156,scaleY:1.0156,x:125.4,y:170.4},0).wait(1).to({scaleX:1.0176,scaleY:1.0176,y:170.6},0).wait(1).to({scaleX:1.0197,scaleY:1.0197,x:125.45,y:170.8},0).wait(1).to({scaleX:1.0219,scaleY:1.0219,x:125.5,y:171},0).wait(1).to({scaleX:1.0242,scaleY:1.0242,y:171.2},0).wait(1).to({scaleX:1.0266,scaleY:1.0266,x:125.55,y:171.4},0).wait(1).to({scaleX:1.0289,scaleY:1.0289,x:125.6,y:171.65},0).wait(1).to({scaleX:1.0313,scaleY:1.0313,y:171.85},0).wait(1).to({scaleX:1.0337,scaleY:1.0337,x:125.65,y:172.1},0).wait(1).to({scaleX:1.0359,scaleY:1.0359,x:125.7,y:172.25},0).wait(1).to({scaleX:1.0381,scaleY:1.0381,x:125.75,y:172.5},0).wait(1).to({scaleX:1.0402,scaleY:1.0402,x:125.8,y:172.65},0).wait(1).to({scaleX:1.0422,scaleY:1.0422,y:172.85},0).wait(1).to({scaleX:1.0441,scaleY:1.0441,x:125.85,y:173.05},0).wait(1).to({scaleX:1.0459,scaleY:1.0459,y:173.2},0).wait(1).to({scaleX:1.0475,scaleY:1.0475,x:125.9,y:173.35},0).wait(1).to({scaleX:1.049,scaleY:1.049,y:173.5},0).wait(1).to({scaleX:1.0504,scaleY:1.0504,y:173.6},0).wait(1).to({scaleX:1.0517,scaleY:1.0517,x:125.95,y:173.75},0).wait(1).to({scaleX:1.053,scaleY:1.053,y:173.85},0).wait(1).to({scaleX:1.0541,scaleY:1.0541,x:126,y:173.95},0).wait(1).to({scaleX:1.0551,scaleY:1.0551,y:174.05},0).wait(1).to({scaleX:1.0561,scaleY:1.0561,x:126.05,y:174.1},0).wait(1).to({scaleX:1.0569,scaleY:1.0569,x:126,y:174.2},0).wait(1).to({scaleX:1.0577,scaleY:1.0577,x:126.05,y:174.3},0).wait(1).to({scaleX:1.0585,scaleY:1.0585,y:174.35},0).wait(1).to({scaleX:1.0592,scaleY:1.0592,x:126.1,y:174.4},0).wait(1).to({scaleX:1.0598,scaleY:1.0598,x:126.05,y:174.5},0).wait(1).to({scaleX:1.0603,scaleY:1.0603,x:126.1},0).wait(1).to({scaleX:1.0609,scaleY:1.0609,y:174.55},0).wait(1).to({scaleX:1.0613,scaleY:1.0613,y:174.6},0).wait(1).to({scaleX:1.0617,scaleY:1.0617,y:174.65},0).wait(1).to({scaleX:1.0621,scaleY:1.0621},0).wait(1).to({scaleX:1.0625,scaleY:1.0625,y:174.75},0).wait(1).to({scaleX:1.0628,scaleY:1.0628,x:126.15},0).wait(1).to({scaleX:1.063,scaleY:1.063},0).wait(1).to({scaleX:1.0632,scaleY:1.0632,x:126.1,y:174.8},0).wait(1).to({scaleX:1.0634,scaleY:1.0634},0).wait(1).to({scaleX:1.0636,scaleY:1.0636,x:126.15},0).wait(1).to({scaleX:1.0637,scaleY:1.0637,y:174.85},0).wait(1).to({scaleX:1.0639,scaleY:1.0639,y:174.8},0).wait(1).to({y:174.85},0).wait(1).to({scaleX:1.064,scaleY:1.064},0).wait(1).to({y:174.9},0).wait(1).to({regX:0,regY:0,x:-152.65,y:-161.4},0).wait(22).to({regX:-0.1,scaleX:0.7168,scaleY:0.7168,x:-69.05,y:-71.8},0).wait(165).to({regX:0,x:-69},0).wait(1).to({regX:262,regY:316,scaleX:0.7174,scaleY:0.7174,x:118.85,y:154.8},0).wait(1).to({scaleX:0.718,scaleY:0.718},0).wait(1).to({scaleX:0.7188,scaleY:0.7188,x:118.9,y:154.85},0).wait(1).to({scaleX:0.7198,scaleY:0.7198,y:154.9},0).wait(1).to({scaleX:0.7209,scaleY:0.7209,x:118.95,y:154.95},0).wait(1).to({scaleX:0.7222,scaleY:0.7222,x:118.9,y:155},0).wait(1).to({scaleX:0.7237,scaleY:0.7237,x:118.95,y:155.1},0).wait(1).to({scaleX:0.7255,scaleY:0.7255,x:119,y:155.2},0).wait(1).to({scaleX:0.7275,scaleY:0.7275,y:155.3},0).wait(1).to({scaleX:0.7299,scaleY:0.7299,x:119.05,y:155.45},0).wait(1).to({scaleX:0.7325,scaleY:0.7325,x:119.1,y:155.55},0).wait(1).to({scaleX:0.7354,scaleY:0.7354,x:119.15,y:155.7},0).wait(1).to({scaleX:0.7385,scaleY:0.7385,x:119.25,y:155.85},0).wait(1).to({scaleX:0.7419,scaleY:0.7419,y:156.05},0).wait(1).to({scaleX:0.7453,scaleY:0.7453,x:119.35,y:156.2},0).wait(1).to({scaleX:0.7487,scaleY:0.7487,x:119.4,y:156.4},0).wait(1).to({scaleX:0.7519,scaleY:0.7519,x:119.45,y:156.6},0).wait(1).to({scaleX:0.7549,scaleY:0.7549,x:119.55,y:156.75},0).wait(1).to({scaleX:0.7576,scaleY:0.7576,y:156.85},0).wait(1).to({scaleX:0.7601,scaleY:0.7601,x:119.6,y:157},0).wait(1).to({scaleX:0.7623,scaleY:0.7623,y:157.15},0).wait(1).to({scaleX:0.7643,scaleY:0.7643,x:119.7,y:157.2},0).wait(1).to({scaleX:0.766,scaleY:0.766,x:119.75,y:157.3},0).wait(1).to({scaleX:0.7675,scaleY:0.7675,y:157.35},0).wait(1).to({scaleX:0.7688,scaleY:0.7688,y:157.45},0).wait(1).to({scaleX:0.7699,scaleY:0.7699,y:157.5},0).wait(1).to({scaleX:0.7709,scaleY:0.7709,x:119.8,y:157.55},0).wait(1).to({scaleX:0.7718,scaleY:0.7718,y:157.65},0).wait(1).to({scaleX:0.7725,scaleY:0.7725,x:119.85},0).wait(1).to({scaleX:0.7732,scaleY:0.7732},0).wait(1).to({scaleX:0.7737,scaleY:0.7737,y:157.75},0).wait(1).to({scaleX:0.7741,scaleY:0.7741,y:157.7},0).wait(1).to({scaleX:0.7745,scaleY:0.7745,y:157.75},0).wait(1).to({scaleX:0.7748,scaleY:0.7748,x:119.9},0).wait(1).to({scaleX:0.775,scaleY:0.775,y:157.8},0).wait(1).to({scaleX:0.7751,scaleY:0.7751,x:119.85},0).wait(1).to({scaleX:0.7752,scaleY:0.7752,x:119.9},0).wait(1).to({regX:0,regY:0,x:-83.25,y:-87.2},0).to({_off:true},95).wait(25));

	// SP_btn_window
	this.toggle_btn = new lib.btn_window();
	this.toggle_btn.name = "toggle_btn";
	this.toggle_btn.parent = this;
	this.toggle_btn.setTransform(200,200);

	this.timeline.addTween(cjs.Tween.get(this.toggle_btn).to({_off:true},1085).wait(37));

	// btn
	this.stage_btn = new lib.button();
	this.stage_btn.name = "stage_btn";
	this.stage_btn.parent = this;
	this.stage_btn.setTransform(120,155);

	this.timeline.addTween(cjs.Tween.get(this.stage_btn).to({_off:true},1097).wait(20).to({_off:false},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-801.3,-720,1421.3,1385);
// library properties:
lib.properties = {
	id: '_406_2',
	width: 240,
	height: 310,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg", id:"_406_2_bg"},
		{src:"images/ch_base.png", id:"_406_2_ch_base"},
		{src:"images/ch_face2.png", id:"_406_2_ch_face2"},
		{src:"images/ch_face3.png", id:"_406_2_ch_face3"},
		{src:"images/ch_face4.png", id:"_406_2_ch_face4"},
		{src:"images/ch_face5.png", id:"_406_2_ch_face5"},
		{src:"images/ch_face6.png", id:"_406_2_ch_face6"},
		{src:"images/finish.jpg", id:"_406_2_finish"},
		{src:"images/finish_blur.jpg", id:"_406_2_finish_blur"},
		{src:"images/scene01.jpg", id:"_406_2_scene01"},
		{src:"images/scene02.jpg", id:"_406_2_scene02"},
		{src:"images/tie_fp.png", id:"_406_2_tie_fp"},
		{src:"images/tie_sp.png", id:"_406_2_tie_sp"}
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
an.compositions['_406_2'] = {
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
