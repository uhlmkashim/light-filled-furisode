(function (cjs, an) {

    var p; // shortcut to reference prototypes
    var lib={};var ss={};var img={};
    lib.ssMetadata = [];
    
    
    // symbols:
    
    
    
    (lib.bg = function() {
        this.initialize(img._440_2_bg);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,1332,1400);
    
    
    (lib.ch_base = function() {
        this.initialize(img._440_2_ch_base);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,1332,1400);
    
    
    (lib.ch_face2 = function() {
        this.initialize(img._440_2_ch_face2);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,256,308);
    
    
    (lib.ch_face3 = function() {
        this.initialize(img._440_2_ch_face3);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,256,308);
    
    
    (lib.ch_face4 = function() {
        this.initialize(img._440_2_ch_face4);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,256,308);
    
    
    (lib.ch_face5 = function() {
        this.initialize(img._440_2_ch_face5);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,256,308);
    
    
    (lib.ch_face6 = function() {
        this.initialize(img._440_2_ch_face6);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,256,308);
    
    
    (lib.ch_face7 = function() {
        this.initialize(img._440_2_ch_face7);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,256,308);
    
    
    (lib.ch_face8 = function() {
        this.initialize(img._440_2_ch_face8);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,256,308);
    
    
    (lib.ch_face9 = function() {
        this.initialize(img._440_2_ch_face9);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,256,308);
    
    
    (lib.ef_prism1 = function() {
        this.initialize(img.ef_prism1);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,268,388);
    
    
    (lib.finish = function() {
        this.initialize(img.finish);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,480,620);
    
    
    (lib.finish_blur = function() {
        this.initialize(img.finish_blur);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,480,620);
    
    
    (lib.hi = function() {
        this.initialize(img.hi);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,460,707);
    
    
    (lib.kirakira = function() {
        this.initialize(img.kirakira);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,35,35);
    
    
    (lib.tie_fp = function() {
        this.initialize(img.tie_fp);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,240,32);
    
    
    (lib.tie_sp = function() {
        this.initialize(img.tie_sp);
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
    
    
    (lib.hizasi = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // hi.png
        this.instance = new lib.hi();
        this.instance.parent = this;
        this.instance.setTransform(-115,0,0.5,0.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-115,0,230,353.5);
    
    
    (lib.eff02 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // レイヤー_1
        this.instance = new lib.kirakira();
        this.instance.parent = this;
        this.instance.setTransform(-18,-18);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-18,-18,35,35);
    
    
    (lib.ef_prism1_1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // レイヤー_1
        this.instance = new lib.ef_prism1();
        this.instance.parent = this;
        this.instance.setTransform(134,-194,1,1,0,0,180);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.ef_prism1_1, new cjs.Rectangle(-134,-194,268,388), null);
    
    
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
    
    
    (lib.white_mask = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // レイヤー_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AyvYOMAAAgwbMAlfAAAMAAAAwbg");
        this.shape.setTransform(120,155);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.white_mask, new cjs.Rectangle(0,0,240,310), null);
    
    
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
    
    
    (lib.flower3_good = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // レイヤー_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FED37F").s().p("AgXA3QgOgGAIgTQAGgOANgMQgOABgRgGQgTgIAGgOQAGgOATAIQAQAIAKALQgBgOAGgRQAJgTANAGQAOAHgIASQgHAQgMAKQAOgBARAGQATAJgGANQgGAOgTgIQgQgHgKgMQABAOgGARQgHAOgJAAIgGgBg");
        this.shape.setTransform(0.0156,0.025);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-5.6,-5.6,11.3,11.3);
    
    
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
    
    
    (lib.flower_pink4 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // レイヤー_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FF99CC").s().p("AgXA3QgOgGAIgTQAGgOANgMQgOABgRgGQgTgIAGgOQAGgOATAIQAQAIAKALQgBgOAGgRQAJgTANAGQAOAHgIASQgHAQgMAKQAOgBARAGQATAJgGANQgGAOgTgIQgQgHgKgMQABAOgGARQgHAOgJAAIgGgBg");
        this.shape.setTransform(0.0156,0.025);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-5.6,-5.6,11.3,11.3);
    
    
    (lib.flower_pink3 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // レイヤー_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FE8BC5").s().p("AgXA3QgOgGAIgTQAGgOANgMQgOABgRgGQgTgIAGgOQAGgOATAIQAQAIAKALQgBgOAGgRQAJgTANAGQAOAHgIASQgHAQgMAKQAOgBARAGQATAJgGANQgGAOgTgIQgQgHgKgMQABAOgGARQgHAOgJAAIgGgBg");
        this.shape.setTransform(0.0156,0.025);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-5.6,-5.6,11.3,11.3);
    
    
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
    
    }).prototype = getMCSymbolPrototype(lib.character1_face_eyeclose, new cjs.Rectangle(0,0,128,154), null);
    
    
    (lib.character1_base = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // base
        this.instance = new lib.ch_base();
        this.instance.parent = this;
        this.instance.setTransform(-120,-396,0.5,0.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.character1_base, new cjs.Rectangle(-120,-396,666,700), null);
    
    
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
    
    
    (lib.hizasi_all = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // ef_prism1
        this.instance = new lib.ef_prism1_1();
        this.instance.parent = this;
        this.instance.setTransform(76.55,149.6,0.12,0.12,0,0,0,0.8,0.8);
        this.instance.compositeOperation = "lighter";
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,x:76.45,y:149.5,alpha:0.9957},0).wait(1).to({alpha:0.9824},0).wait(1).to({alpha:0.9591},0).wait(1).to({alpha:0.925},0).wait(1).to({alpha:0.8793},0).wait(1).to({alpha:0.8216},0).wait(1).to({alpha:0.752},0).wait(1).to({alpha:0.6715},0).wait(1).to({alpha:0.5823},0).wait(1).to({alpha:0.4881},0).wait(1).to({alpha:0.3933},0).wait(1).to({alpha:0.3029},0).wait(1).to({alpha:0.2212},0).wait(1).to({alpha:0.1512},0).wait(1).to({alpha:0.0946},0).wait(1).to({alpha:0.0517},0).wait(1).to({alpha:0.0223},0).wait(1).to({alpha:0.0054},0).wait(1).to({regX:0.8,regY:0.8,x:76.55,y:149.6,alpha:0},0).wait(1).to({regX:0,regY:0,x:76.45,y:149.5,alpha:0.0035},0).wait(1).to({alpha:0.0143},0).wait(1).to({alpha:0.0332},0).wait(1).to({alpha:0.0607},0).wait(1).to({alpha:0.0974},0).wait(1).to({alpha:0.1439},0).wait(1).to({alpha:0.2003},0).wait(1).to({alpha:0.2662},0).wait(1).to({alpha:0.3408},0).wait(1).to({alpha:0.4221},0).wait(1).to({alpha:0.5074},0).wait(1).to({alpha:0.5933},0).wait(1).to({alpha:0.6762},0).wait(1).to({alpha:0.7527},0).wait(1).to({alpha:0.8204},0).wait(1).to({alpha:0.8775},0).wait(1).to({alpha:0.9233},0).wait(1).to({alpha:0.958},0).wait(1).to({alpha:0.9819},0).wait(1).to({alpha:0.9956},0).wait(1).to({regX:0.8,regY:0.8,x:76.55,y:149.6,alpha:1},0).wait(1).to({regX:0,regY:0,x:76.45,y:149.5,alpha:0.9957},0).wait(1).to({alpha:0.9824},0).wait(1).to({alpha:0.9591},0).wait(1).to({alpha:0.925},0).wait(1).to({alpha:0.8793},0).wait(1).to({alpha:0.8216},0).wait(1).to({alpha:0.752},0).wait(1).to({alpha:0.6715},0).wait(1).to({alpha:0.5823},0).wait(1).to({alpha:0.4881},0).wait(1).to({alpha:0.3933},0).wait(1).to({alpha:0.3029},0).wait(1).to({alpha:0.2212},0).wait(1).to({alpha:0.1512},0).wait(1).to({alpha:0.0946},0).wait(1).to({alpha:0.0517},0).wait(1).to({alpha:0.0223},0).wait(1).to({alpha:0.0054},0).wait(1).to({regX:0.8,regY:0.8,x:76.55,y:149.6,alpha:0},0).wait(1).to({regX:0,regY:0,x:76.45,y:149.5,alpha:0.0038},0).wait(1).to({alpha:0.0158},0).wait(1).to({alpha:0.0367},0).wait(1).to({alpha:0.0673},0).wait(1).to({alpha:0.1081},0).wait(1).to({alpha:0.1598},0).wait(1).to({alpha:0.2223},0).wait(1).to({alpha:0.2951},0).wait(1).to({alpha:0.3767},0).wait(1).to({alpha:0.4644},0).wait(1).to({alpha:0.5548},0).wait(1).to({alpha:0.6437},0).wait(1).to({alpha:0.7269},0).wait(1).to({alpha:0.8011},0).wait(1).to({alpha:0.8642},0).wait(1).to({alpha:0.9151},0).wait(1).to({alpha:0.9535},0).wait(1).to({alpha:0.9799},0).wait(1).to({alpha:0.9951},0).wait(1).to({regX:0.8,regY:0.8,x:76.55,y:149.6,alpha:1},0).wait(1));
    
        // ef_prism1
        this.instance_1 = new lib.ef_prism1_1();
        this.instance_1.parent = this;
        this.instance_1.setTransform(347.15,382.25,0.12,0.12,0,0,0,0.8,0.8);
        this.instance_1.alpha = 0;
        this.instance_1.compositeOperation = "lighter";
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:0,regY:0,x:347.05,y:382.15,alpha:0.0043},0).wait(1).to({alpha:0.0176},0).wait(1).to({alpha:0.0409},0).wait(1).to({alpha:0.075},0).wait(1).to({alpha:0.1207},0).wait(1).to({alpha:0.1784},0).wait(1).to({alpha:0.248},0).wait(1).to({alpha:0.3285},0).wait(1).to({alpha:0.4177},0).wait(1).to({alpha:0.5119},0).wait(1).to({alpha:0.6067},0).wait(1).to({alpha:0.6971},0).wait(1).to({alpha:0.7788},0).wait(1).to({alpha:0.8488},0).wait(1).to({alpha:0.9054},0).wait(1).to({alpha:0.9483},0).wait(1).to({alpha:0.9777},0).wait(1).to({alpha:0.9946},0).wait(1).to({regX:0.8,regY:0.8,x:347.15,y:382.25,alpha:1},0).wait(1).to({regX:0,regY:0,x:347.05,y:382.15,alpha:0.9965},0).wait(1).to({alpha:0.9857},0).wait(1).to({alpha:0.9668},0).wait(1).to({alpha:0.9393},0).wait(1).to({alpha:0.9026},0).wait(1).to({alpha:0.8561},0).wait(1).to({alpha:0.7997},0).wait(1).to({alpha:0.7338},0).wait(1).to({alpha:0.6592},0).wait(1).to({alpha:0.5779},0).wait(1).to({alpha:0.4926},0).wait(1).to({alpha:0.4067},0).wait(1).to({alpha:0.3238},0).wait(1).to({alpha:0.2473},0).wait(1).to({alpha:0.1796},0).wait(1).to({alpha:0.1225},0).wait(1).to({alpha:0.0767},0).wait(1).to({alpha:0.042},0).wait(1).to({alpha:0.0181},0).wait(1).to({alpha:0.0044},0).wait(1).to({regX:0.8,regY:0.8,x:347.15,y:382.25,alpha:0},0).wait(1).to({regX:0,regY:0,x:347.05,y:382.15,alpha:0.0043},0).wait(1).to({alpha:0.0176},0).wait(1).to({alpha:0.0409},0).wait(1).to({alpha:0.075},0).wait(1).to({alpha:0.1207},0).wait(1).to({alpha:0.1784},0).wait(1).to({alpha:0.248},0).wait(1).to({alpha:0.3285},0).wait(1).to({alpha:0.4177},0).wait(1).to({alpha:0.5119},0).wait(1).to({alpha:0.6067},0).wait(1).to({alpha:0.6971},0).wait(1).to({alpha:0.7788},0).wait(1).to({alpha:0.8488},0).wait(1).to({alpha:0.9054},0).wait(1).to({alpha:0.9483},0).wait(1).to({alpha:0.9777},0).wait(1).to({alpha:0.9946},0).wait(1).to({regX:0.8,regY:0.8,x:347.15,y:382.25,alpha:1},0).wait(1).to({regX:0,regY:0,x:347.05,y:382.15,alpha:0.9962},0).wait(1).to({alpha:0.9842},0).wait(1).to({alpha:0.9633},0).wait(1).to({alpha:0.9327},0).wait(1).to({alpha:0.8919},0).wait(1).to({alpha:0.8402},0).wait(1).to({alpha:0.7777},0).wait(1).to({alpha:0.7049},0).wait(1).to({alpha:0.6233},0).wait(1).to({alpha:0.5356},0).wait(1).to({alpha:0.4452},0).wait(1).to({alpha:0.3563},0).wait(1).to({alpha:0.2731},0).wait(1).to({alpha:0.1989},0).wait(1).to({alpha:0.1358},0).wait(1).to({alpha:0.0849},0).wait(1).to({alpha:0.0465},0).wait(1).to({alpha:0.0201},0).wait(1).to({alpha:0.0049},0).wait(1).to({regX:0.8,regY:0.8,x:347.15,y:382.25,alpha:0},0).wait(1));
    
        // hi2
        this.instance_2 = new lib.hizasi();
        this.instance_2.parent = this;
        this.instance_2.setTransform(306.75,-207.15,1.3381,1.3381,-25.2697,0,0,0.1,-0.2);
        this.instance_2.alpha = 0;
        this.instance_2.compositeOperation = "lighter";
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-25.27,alpha:1},40,cjs.Ease.quadInOut).to({alpha:0},39,cjs.Ease.quadInOut).wait(1));
    
        // hi2
        this.instance_3 = new lib.hizasi();
        this.instance_3.parent = this;
        this.instance_3.setTransform(284.5,-138.25,1.3382,1.3382,-24.7498,0,0,0,-0.2);
        this.instance_3.compositeOperation = "lighter";
    
        this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:0},40,cjs.Ease.quadInOut).to({alpha:1},39,cjs.Ease.quadInOut).wait(1));
    
        // hi
        this.instance_4 = new lib.hizasi();
        this.instance_4.parent = this;
        this.instance_4.setTransform(11.3,-143.55,1.3382,1.3382,-16.7862,0,0,0,-0.1);
        this.instance_4.alpha = 0;
        this.instance_4.compositeOperation = "lighter";
    
        this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-16.7869,alpha:1},40,cjs.Ease.quadInOut).to({alpha:0},39,cjs.Ease.quadInOut).wait(1));
    
        // hi
        this.instance_5 = new lib.hizasi();
        this.instance_5.parent = this;
        this.instance_5.setTransform(-20.95,-78.75,1.3382,1.3382,-16.266,0,0,-0.1,-0.1);
        this.instance_5.compositeOperation = "lighter";
    
        this.timeline.addTween(cjs.Tween.get(this.instance_5).to({alpha:0},40,cjs.Ease.quadInOut).to({alpha:1},39,cjs.Ease.quadInOut).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-168.5,-272.5,816.4,691.1);
    
    
    (lib.eff02_m = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // timeline functions:
        this.frame_0 = function() {
            this.gotoAndPlay(Math.floor(Math.random() * 40));
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(73));
    
        // レイヤー_1
        this.instance = new lib.eff02("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(0.2,-0.15,0.359,0.359,-75.4871,0,0,0.1,-0.1);
        this.instance._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(64).to({_off:false},0).to({regX:0,regY:0,scaleX:1.27,scaleY:1.27,rotation:0,x:0.6,y:0.6},4).to({regX:0.1,regY:-0.1,scaleX:0.4612,scaleY:0.4612,rotation:111.7539,x:-0.2,y:0.15},4).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-25,-25.3,50.5,50.400000000000006);
    
    
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
        this.instance.setTransform(0,3.2,1,1,0,0,0,0,3.2);
    
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
        this.shape.graphics.f("#333333").s().p("AA1A6IgEgJIghAFIgfAEIgeAEIgZACIgDgSIAKAAIAKgBIAMgfIAKgeIAIgbIAFgWIATAEIgGAYIgJAbIgKAcIgLAZIAdgDIAZgDIAWgDIgOgXIgOgRIAQgIIALAOIANASIAMAUIAJASIgSAKIgDgIg");
        this.shape.setTransform(32.025,0.575);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#333333").s().p("AhEAJIAAgRICJAAIAAARg");
        this.shape_1.setTransform(16,0.4);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#333333").s().p("AhLA6QAMgJAHgMQAIgLADgOQAEgMACgOQABgOAAgOIAAgMIAAgMIASAAIAAALQgBAdgCAWQgDAVgIASQgIASgPAPgAAAAgIAAggIAAhDIAQAAIAAAMIAAARIAAAVIAAAVIAAAVIAAAPQALgFAJgKQAJgJAHgMQAGgLAFgMIANAPQgEAJgIAMQgGALgKAKQgKAKgMAIQgMAHgOADIAAgig");
        this.shape_2.setTransform(0.15,0.525);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#333333").s().p("AhAAvQAbgEATgJQATgHAOgNQANgMAJgQQAIgRAGgVIAQAKIgHAXQgGANgIAMQgHAMgOAMQgNAKgSAKQgUAJgbAFgAgigeIgRgLIgPgIIAMgOIAKAGIANAHIANAJIALAJIgMAPQgHgGgIgHg");
        this.shape_3.setTransform(-15.6,0.8);
    
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#333333").s().p("AgoA3QAUgDANgHQAMgGAHgKQAHgJADgMQACgLAAgPIAAgCIgvAAIAAAnIgRAAIAAgnIghAAIAAgRIAhAAIAAggIARAAIAAAgIAvAAIAAgPIAAgRIARAAIAAAQIAAAQIAhAAIAAARIghAAIAAADQAAAXgGARQgHARgPAMQgNAMgaAGg");
        this.shape_4.setTransform(-31.95,0.6);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
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
        this.instance = new lib.flower_pink3("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(21.35,5.15,0.7153,0.7153);
    
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
        this.instance_3 = new lib.flower_pink3("synched",0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(-14.45,14.3,0.7153,0.7153);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({scaleX:0.9946,scaleY:0.9946,rotation:-144.6153,x:-28.0278,y:32.5778,alpha:0.6862},0).wait(1).to({scaleX:1.081,scaleY:1.081,rotation:-189.3044,x:-32.2236,y:38.226,alpha:0.5892},0).wait(1).to({scaleX:1.139,scaleY:1.139,rotation:-219.35,x:-35.0445,y:42.0234,alpha:0.524},0).wait(1).to({scaleX:1.2095,scaleY:1.2095,rotation:-255.8693,x:-38.4733,y:46.639,alpha:0.4447},0).wait(1).to({scaleX:1.4107,scaleY:1.4107,rotation:-360,x:-48.25,y:59.8,alpha:0.2188},0).to({_off:true},1).wait(2));
    
        // flower3
        this.instance_4 = new lib.flower_pink4("synched",0);
        this.instance_4.parent = this;
        this.instance_4.setTransform(5.6,19);
    
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
    
        // en
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
        this.instance.setTransform(-30.3,20.5,1.0742,0.9571,0,0,0,-20.2,0);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1,x:-28.8},0).wait(3).to({scaleX:0.9691,scaleY:1.0171,x:-28.2},0).wait(1).to({regX:-18.7,scaleX:1.1342,scaleY:0.975,x:-29.7,y:22.85,startPosition:1},0).wait(1).to({scaleX:1,scaleY:1,x:-27.2},0).wait(3).to({scaleX:0.9463,scaleY:1.0417,x:-26.2},0).wait(1).to({regX:-20.2,scaleX:1.0742,scaleY:0.9571,x:-30.3,y:20.5,startPosition:0},0).wait(1).to({scaleX:1,scaleY:1,x:-28.8},0).wait(3).to({scaleX:0.9691,scaleY:1.0171,x:-28.2},0).wait(1).to({regX:-18.7,scaleX:1.1342,scaleY:0.975,x:-29.7,y:22.85,startPosition:1},0).wait(1).to({scaleX:1,scaleY:1,x:-27.2},0).wait(3).to({scaleX:0.9463,scaleY:1.0417,x:-26.2},0).to({_off:true},1).wait(1));
    
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
        this.instance = new lib.flower3_good("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(21.35,5.15,0.7153,0.7153);
    
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
        this.instance_3 = new lib.flower3_good("synched",0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(-14.45,14.3,0.7153,0.7153);
    
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
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({regX:15.8,scaleX:0.9628,scaleY:0.9628,rotation:14.3457,guide:{path:[-35.9,76.7,-38.6,65.6,-37.5,54.3,-35.4,34.2,-20.7,22.9,-17.1,20.1,-14.2,16.9]},alpha:0.6602},5).wait(1).to({regX:16.7,regY:23.1,scaleX:1.0446,scaleY:1.0446,rotation:-0.4369,x:-5.6,y:11.55,alpha:0.7734},0).wait(1).to({scaleX:1.1264,scaleY:1.1264,rotation:-15.2195,x:0.2,y:-1.85,alpha:0.8867},0).wait(1).to({regX:15.8,regY:17.2,scaleX:1.2081,scaleY:1.2081,rotation:-30.002,x:-2.3,y:-20.95,alpha:1},0).to({scaleX:1.2082,scaleY:1.2082,rotation:-5.5524,guide:{path:[-2.3,-20.8,-2.4,-21.5,-2.6,-22.2,-4,-29.1,-7.5,-33]},alpha:0},3).to({_off:true},1).wait(1));
    
        // chord
        this.instance_1 = new lib.chord1();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-23.5,77.25,0.9892,0.9892,-44.9988,0,0,15.8,17.4);
        this.instance_1.alpha = 0.1016;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:17.2,scaleX:1.2082,scaleY:1.2082,rotation:29.9993,guide:{path:[-23.5,77.2,-22.3,75.1,-21.1,72.9,-6.9,48,13.4,39.4,33.4,31.3,43.7,10,48.3,0.5,50,-7.9]},alpha:1},7).to({rotation:29.9993,x:62.4,y:-32.85,alpha:0},3).to({_off:true},1).wait(4));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-49,-60.4,138.4,201.20000000000002);
    
    
    (lib.bg_zoom_half = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // hizasi_all
        this.instance = new lib.hizasi_all();
        this.instance.parent = this;
        this.instance.setTransform(281.55,212.55,1,1,0,0,180,239.7,145.2);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
        // bg_image
        this.instance_1 = new lib.bg();
        this.instance_1.parent = this;
        this.instance_1.setTransform(0,0,0.5,0.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-126.5,-205.2,816.3,905.2);
    
    
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
        mask.graphics.p("Ap1L4IAA3vITrAAIAAXvg");
        mask.setTransform(64,77);
    
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
    
        this.instance_8 = new lib.ch_face9();
        this.instance_8.parent = this;
        this.instance_8.setTransform(0,0,0.5,0.5);
    
        this.instance_9 = new lib.ch_face8();
        this.instance_9.parent = this;
        this.instance_9.setTransform(0,0,0.5,0.5);
    
        var maskedShapeInstanceList = [this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9];
    
        for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).to({state:[{t:this.instance_9}]},2).to({state:[]},1).wait(9));
    
        // body
        this.b = new lib.character1_base();
        this.b.name = "b";
        this.b.parent = this;
        this.b.setTransform(-128,160);
    
        var maskedShapeInstanceList = [this.b];
    
        for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }
    
        this.timeline.addTween(cjs.Tween.get(this.b).wait(20));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(1,1,126,152);
    
    
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
        this.shape.graphics.f("#000000").s().p("AAQA6IgXgRIgWgQIgRgLQgFgEgCgEQgDgFAAgDQAAgFACgEQACgEAFgDIAQgLIAWgOIAWgPIAVgQIATASIgVAOIgWAMIgTAMIgQALIgEACIgBADIABACIADADIARAKIAVAPIAYAOIAVAPIgVASQgJgJgLgIg");
        this.shape.setTransform(39.725,11.8);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#000000").s().p("AgWA2QAVgEAMgKQAMgLAHgQIgSgHIgRgEIgIATIgJAPQgHAKgGADQgHAFgFABIgFABQgGgBgFgCQgFgDgDgFQgDgGAAgIIABgHQABgLAHgKQAHgHAKgHQAMgFANAAIAFAAIADgIIACgIIADgFIADgGIACgHIABgCIgSACIgZAAIAAgTIBDgBIAAANIgJAUIgJAXIARACIAQAFIABgMIABgNIAAgFIAAgEIAWABIgBAVIgDATIAKAEIAKAGIgHAXIgKgGIgJgGQgFANgHAJQgHAKgLAIQgKAHgOAEgAgsAHQgFADgDAFIgDAHIgBAEQAAADACACQAAAAAAABQAAAAABAAQAAAAABAAQAAAAAAAAIABAAIABAAIAGgDQAEgDAEgGIAKgSIgBAAQgLACgGADg");
        this.shape_1.setTransform(24.15,12.25);
    
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
        this.instance.setTransform(91.95,258.25,0.0766,0.0766);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(22));
    
        // レイヤー_5
        this.instance_1 = new lib.glitter_first();
        this.instance_1.parent = this;
        this.instance_1.setTransform(6.05,201.4,0.1958,0.1958);
        this.instance_1._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(21));
    
        // レイヤー_7
        this.instance_2 = new lib.glitter_first();
        this.instance_2.parent = this;
        this.instance_2.setTransform(215.8,184.7,0.1412,0.1412);
        this.instance_2._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).wait(18));
    
        // レイヤー_8
        this.instance_3 = new lib.glitter_first();
        this.instance_3.parent = this;
        this.instance_3.setTransform(226.25,118.45,0.159,0.159,0,0,0,-1.2,2.9);
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
        this.instance_7.setTransform(21.1,169.15,0.1106,0.1106);
        this.instance_7._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(11).to({_off:false},0).wait(11));
    
        // レイヤー_13
        this.instance_8 = new lib.glitter_first();
        this.instance_8.parent = this;
        this.instance_8.setTransform(223.55,220.1,0.1702,0.1702);
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
            this.face_blink_ary = [1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1]; 
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
        var mask_graphics_15 = new cjs.Graphics().p("Al6GeIgpgxQglgtgLgaQgbg+AIhiQALiFAuguQAjgjAyARQA0ASA3glQBNgzBuilQB5i5DQBPQBHAbBBA0QA3AtAIAYQAMAigBAsQgBAlgIAYQgIAWhhA9QhkA+gxAJIiVAOQhpAKgmAZQgnAYgiBaIgoBqQgjAxgHAHQglAnhBAYQgKAEgKAAQgTAAgQgPg");
        var mask_graphics_21 = new cjs.Graphics().p("AjFBuIhLhTIAEgiQADgjABABIATh2ICVgHIBJATICJBEIB6AeIAlgEQgWA4ABBQQAAAgABAaIhEgGIi5Agg");
    
        this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(15).to({graphics:mask_graphics_15,x:62.0374,y:61.8118}).wait(6).to({graphics:mask_graphics_21,x:31.25,y:41.8}).wait(6));
    
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
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).wait(1).to({alpha:1},0).wait(1).to({regX:64,regY:77,x:64,y:77,alpha:0.3015},0).wait(1).to({alpha:0.0922},0).wait(1).to({regX:35,regY:30,x:35,y:30,alpha:0},0).wait(2).to({alpha:0.1992},0).wait(1).to({alpha:1},0).wait(1).to({regX:64,regY:77,x:64,y:77,alpha:0.3015},0).wait(1).to({alpha:0.0922},0).wait(1).to({regX:35,regY:30,x:35,y:30,alpha:0},0).wait(2));
    
        // f2
        this.f2 = new lib.character1_face();
        this.f2.name = "f2";
        this.f2.parent = this;
        this.f2.setTransform(35,30,1,1,0,0,0,35,30);
    
        this.timeline.addTween(cjs.Tween.get(this.f2).wait(5).to({alpha:0.1992},0).wait(1).to({regX:64,regY:77,x:64,y:77,alpha:0.6441},0).wait(1).to({alpha:0.911},0).wait(1).to({regX:35,regY:30,x:35,y:30,alpha:1},0).wait(19));
    
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
    
        this.timeline.addTween(cjs.Tween.get(this.f1_alpha).wait(5).to({alpha:0.8008},0).wait(1).to({regX:64,regY:77,x:64,y:77,alpha:0.7118},0).wait(1).to({alpha:0.4449},0).wait(1).to({regX:35,regY:30,x:35,y:30,alpha:0},0).wait(19));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-248,-236,666,700);
    
    
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
    
        // kira
        this.instance = new lib.eff02_m();
        this.instance.parent = this;
        this.instance.setTransform(-48.2,-171,0.45,0.45,0,0,0,-0.2,0);
        this.instance.compositeOperation = "lighter";
    
        this.instance_1 = new lib.eff02_m();
        this.instance_1.parent = this;
        this.instance_1.setTransform(34.45,-453.85,0.45,0.45,0,0,0,-0.2,0);
        this.instance_1.compositeOperation = "lighter";
    
        this.instance_2 = new lib.eff02_m();
        this.instance_2.parent = this;
        this.instance_2.setTransform(9.4,-222.75,0.36,0.36,0,0,0,-0.1,0);
        this.instance_2.compositeOperation = "lighter";
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(2));
    
        // face
        this.f = new lib.character1_face_container();
        this.f.name = "f";
        this.f.parent = this;
        this.f.setTransform(-92.55,-424);
    
        this.timeline.addTween(cjs.Tween.get(this.f).to({_off:true},1).wait(1));
    
        // base
        this.b = new lib.character1_base();
        this.b.name = "b";
        this.b.parent = this;
        this.b.setTransform(-220.55,-264);
    
        this.timeline.addTween(cjs.Tween.get(this.b).wait(2));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-340.5,-660,666,791.7);
    
    
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
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,y:9.5},0).wait(1).to({rotation:45,y:13.4449},0).wait(1).to({rotation:90,y:31.6824},0).wait(1).to({rotation:135,y:77.8042},0).wait(1).to({regY:0.2,rotation:180,y:93.8},0).to({y:90.8},3,cjs.Ease.get(1)).wait(4).to({regY:0,rotation:150.0004,y:77},0).wait(1).to({scaleX:0.9999,rotation:60.0004,y:37},0).wait(1).to({rotation:29.9992,y:18},0).to({rotation:0,y:7.75},2,cjs.Ease.get(1)).to({y:10},2,cjs.Ease.get(-1)).wait(1));
    
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
    
        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({y:6.45},2,cjs.Ease.get(1)).wait(1).to({regX:-0.2,regY:1.2,x:-38.7,y:8.35},0).wait(1).to({y:10.75},0).wait(1).to({regX:0,regY:0,x:-38.5,y:10.45},0).to({y:9.95},2,cjs.Ease.get(1)).wait(6));
    
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
    
        this.timeline.addTween(cjs.Tween.get(this.instance_9).to({y:6.45},2,cjs.Ease.get(1)).wait(1).to({regX:0.6,regY:1.2,x:-76.8,y:8.35},0).wait(1).to({y:10.75},0).wait(1).to({regX:0,regY:0,x:-77.4,y:10.45},0).to({y:9.95},2,cjs.Ease.get(1)).wait(10));
    
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
    
    
    (lib.glitter_container = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // powder
        this.instance = new lib.glitter_rise();
        this.instance.parent = this;
        this.instance.setTransform(11.9,-34.95,1.0489,1.0489,2.9285,0,0,5.2,-0.2);
    
        this.instance_1 = new lib.glitter_rise();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-39.95,8.25,1.155,1.0852,0.8008,0,0,0.1,6.5);
        this.instance_1.alpha = 0.6992;
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.glitter_container, new cjs.Rectangle(-185.9,-57,335.8,82.3), null);
    
    
    (lib.character1_container = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{standby:0,jump:8,jump2:16,jump_double:25,jump_flower:37,jump_flower2:47,nod:57,nod2:66,nod_double:81,swing:92,swing_on:112,swing_off:121,notice:132,notice_jump:146,laugh:160,chord:181,question:201,question_on:229,question_off:241,exclamation:252,down:268,down2:295,shy_jump:313,shy_down:325,shock:343,sigh:350,happy:369,anger:384,anger2:404,damage:416,concent:433,nod3:442});
    
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
        this.frame_452 = function() {
            this.stop();
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(1).call(this.frame_8).wait(7).call(this.frame_15).wait(1).call(this.frame_16).wait(8).call(this.frame_24).wait(1).call(this.frame_25).wait(11).call(this.frame_36).wait(1).call(this.frame_37).wait(9).call(this.frame_46).wait(1).call(this.frame_47).wait(9).call(this.frame_56).wait(1).call(this.frame_57).wait(8).call(this.frame_65).wait(1).call(this.frame_66).wait(14).call(this.frame_80).wait(1).call(this.frame_81).wait(10).call(this.frame_91).wait(1).call(this.frame_92).wait(19).call(this.frame_111).wait(1).call(this.frame_112).wait(8).call(this.frame_120).wait(1).call(this.frame_121).wait(10).call(this.frame_131).wait(1).call(this.frame_132).wait(13).call(this.frame_145).wait(1).call(this.frame_146).wait(13).call(this.frame_159).wait(1).call(this.frame_160).wait(20).call(this.frame_180).wait(1).call(this.frame_181).wait(19).call(this.frame_200).wait(1).call(this.frame_201).wait(27).call(this.frame_228).wait(1).call(this.frame_229).wait(11).call(this.frame_240).wait(1).call(this.frame_241).wait(10).call(this.frame_251).wait(1).call(this.frame_252).wait(15).call(this.frame_267).wait(1).call(this.frame_268).wait(26).call(this.frame_294).wait(1).call(this.frame_295).wait(17).call(this.frame_312).wait(1).call(this.frame_313).wait(11).call(this.frame_324).wait(1).call(this.frame_325).wait(17).call(this.frame_342).wait(1).call(this.frame_343).wait(6).call(this.frame_349).wait(1).call(this.frame_350).wait(18).call(this.frame_368).wait(1).call(this.frame_369).wait(14).call(this.frame_383).wait(1).call(this.frame_384).wait(19).call(this.frame_403).wait(1).call(this.frame_404).wait(11).call(this.frame_415).wait(1).call(this.frame_416).wait(16).call(this.frame_432).wait(1).call(this.frame_433).wait(8).call(this.frame_441).wait(1).call(this.frame_442).wait(10).call(this.frame_452).wait(1));
    
        // effect2
        this.instance = new lib.drop1_v2("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(-104.85,-453.6,1.1645,1.1645);
        this.instance._off = true;
    
        this.instance_1 = new lib.heart();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-110.2,-357.4,0.4532,0.4532);
        this.instance_1.alpha = 0;
        this.instance_1.compositeOperation = "lighter";
        this.instance_1._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(313).to({_off:false},0).wait(1).to({regX:1.2,regY:1.8,rotation:-33.7496,x:-130.45,y:-462.6,alpha:0.4141},0).wait(1).to({regX:0,regY:0,rotation:-44.9995,x:-142.1,y:-466.9,alpha:0.2188},0).to({_off:true},1).wait(1).to({_off:false,rotation:0,x:-104.85,y:-453.6,alpha:1},0).wait(1).to({regX:1.2,regY:1.8,rotation:-33.7496,x:-130.45,y:-462.6,alpha:0.4141},0).wait(1).to({regX:0,regY:0,rotation:-44.9995,x:-142.1,y:-466.9,alpha:0.2188},0).to({_off:true},1).wait(5).to({_off:false,rotation:0,x:-79.6,y:-438.05,alpha:1},0).wait(1).to({regX:1.2,regY:1.8,rotation:-33.7496,x:-105.2,y:-447.05,alpha:0.4141},0).wait(1).to({regX:0,regY:0,rotation:-44.9995,x:-116.85,y:-451.35,alpha:0.2188},0).to({_off:true},1).wait(1).to({_off:false,rotation:0,x:-79.6,y:-438.05,alpha:1},0).wait(1).to({regX:1.2,regY:1.8,rotation:-33.7496,x:-105.2,y:-447.05,alpha:0.4141},0).wait(1).to({regX:0,regY:0,rotation:-44.9995,x:-116.85,y:-451.35,alpha:0.2188},0).to({_off:true},1).wait(121));
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(370).to({_off:false},0).wait(1).to({regX:2.3,regY:1,scaleX:0.8633,scaleY:0.8633,x:-111.95,y:-371.55,alpha:0.375},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-115.2,y:-377.4,alpha:0.5},0).wait(1).to({regX:2.3,regY:1,scaleX:0.9896,scaleY:0.9896,x:-112.65,y:-375.25,alpha:0.4444},0).wait(1).to({scaleX:0.9586,scaleY:0.9586,x:-112.1,y:-372,alpha:0.2778},0).wait(1).to({regX:0,regY:0,scaleX:0.9068,scaleY:0.9068,x:-113.2,y:-367.4,alpha:0},0).to({_off:true},1).wait(77));
    
        // effect
        this.instance_2 = new lib.spread_flower_pink("synched",0,false);
        this.instance_2.parent = this;
        this.instance_2.setTransform(-25.45,-343.9,1.4808,1.4808);
    
        this.instance_3 = new lib.good_effect("synched",0,false);
        this.instance_3.parent = this;
        this.instance_3.setTransform(-25.45,-343.9,1.481,1.481);
    
        this.instance_4 = new lib.notice();
        this.instance_4.parent = this;
        this.instance_4.setTransform(-141.75,-437.95,1.187,1.187,0,-169.8305,10.1695,-29.1,20.4);
        this.instance_4._off = true;
    
        this.instance_5 = new lib.laugh("synched",0);
        this.instance_5.parent = this;
        this.instance_5.setTransform(-162.5,-432.55,1.4204,1.4204,35.8424,0,0,-30.2,20.6);
        this.instance_5._off = true;
    
        this.instance_6 = new lib.chord("synched",0,false);
        this.instance_6.parent = this;
        this.instance_6.setTransform(-90.25,-346.3,1.0029,1.0029,-61.4995,0,0,-23.4,76.9);
    
        this.instance_7 = new lib.question();
        this.instance_7.parent = this;
        this.instance_7.setTransform(-90.9,-430.9,1.053,1.053,-28.4906);
        this.instance_7.alpha = 0;
        this.instance_7._off = true;
    
        this.instance_8 = new lib.mc_exclamation("synched",0,false);
        this.instance_8.parent = this;
        this.instance_8.setTransform(-93.15,-445.6,1.0929,1.0929,-29.9996,0,0,0,0.1);
    
        this.instance_9 = new lib.drop1a("synched",0);
        this.instance_9.parent = this;
        this.instance_9.setTransform(-87.65,-427,1,1,0,0,0,-0.5,0.2);
        this.instance_9._off = true;
    
        this.instance_10 = new lib.drop2_v2("synched",0);
        this.instance_10.parent = this;
        this.instance_10.setTransform(-106.65,-443.85,0.9876,0.9876,14.9998);
        this.instance_10._off = true;
    
        this.instance_11 = new lib.shock("synched",0);
        this.instance_11.parent = this;
        this.instance_11.setTransform(-91,-431.95,1.3878,1.3878,-121.2396);
    
        this.instance_12 = new lib.sigh("synched",0);
        this.instance_12.parent = this;
        this.instance_12.setTransform(-68.5,-277.55);
        this.instance_12.alpha = 0.6016;
        this.instance_12._off = true;
    
        this.instance_13 = new lib.heart("synched",0);
        this.instance_13.parent = this;
        this.instance_13.setTransform(-110.2,-357.4,0.4532,0.4532);
        this.instance_13._off = true;
    
        this.instance_14 = new lib.angry("synched",0);
        this.instance_14.parent = this;
        this.instance_14.setTransform(47.65,-407.25,0.5276,0.5276);
        this.instance_14._off = true;
    
        this.instance_15 = new lib.mc_punpun();
        this.instance_15.parent = this;
        this.instance_15.setTransform(-83.4,-456.4,1.1377,1.1377);
    
        this.instance_16 = new lib.concent_wrapper("synched",0,false);
        this.instance_16.parent = this;
        this.instance_16.setTransform(-25.7,-344.45,1,1,0,0,0,-0.5,-0.1);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},37).to({state:[{t:this.instance_3}]},10).to({state:[]},10).to({state:[{t:this.instance_4}]},76).to({state:[]},2).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).to({state:[{t:this.instance_4}]},2).to({state:[]},2).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},15).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).to({state:[{t:this.instance_6}]},1).to({state:[]},20).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_7}]},7).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[]},1).to({state:[{t:this.instance_7}]},6).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[]},1).to({state:[{t:this.instance_8}]},5).to({state:[{t:this.instance_9}]},16).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},9).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[]},1).to({state:[{t:this.instance_10}]},24).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[]},1).to({state:[{t:this.instance_10}]},5).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[]},1).to({state:[{t:this.instance_11}]},11).to({state:[]},1).to({state:[{t:this.instance_11}]},1).to({state:[]},1).to({state:[{t:this.instance_11}]},1).to({state:[]},1).to({state:[{t:this.instance_12}]},3).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[]},1).to({state:[{t:this.instance_13}]},11).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[]},1).to({state:[{t:this.instance_14}]},6).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},5).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[]},1).to({state:[{t:this.instance_15}]},2).to({state:[]},12).to({state:[{t:this.instance_16}]},17).to({state:[]},9).wait(11));
        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(133).to({_off:false},0).to({_off:true},2).wait(1).to({_off:false},0).wait(3).to({regX:-28.8,regY:20.5,x:-141.35,alpha:0.6944},0).wait(1).to({alpha:0.4444},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.1111},0).wait(1).to({alpha:0.0278},0).wait(1).to({regX:-29.1,regY:20.4,x:-141.75,alpha:0},0).to({_off:true},1).wait(2).to({_off:false,alpha:1},0).to({_off:true},2).wait(1).to({_off:false},0).wait(3).to({regX:-28.8,regY:20.5,x:-141.35,alpha:0.6944},0).wait(1).to({alpha:0.4444},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.1111},0).wait(1).to({alpha:0.0278},0).wait(1).to({regX:-29.1,regY:20.4,x:-141.75,alpha:0},0).to({_off:true},1).wait(294));
        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(160).to({_off:false},0).wait(15).to({startPosition:0},0).wait(1).to({regX:-31.4,regY:22.1,scaleX:1.4203,scaleY:1.4203,x:-165.15,y:-431.8,alpha:0.5625,startPosition:1},0).wait(1).to({alpha:0.25,startPosition:2},0).wait(1).to({alpha:0.0625,startPosition:3},0).wait(1).to({regX:-30.2,regY:20.6,scaleX:1.4204,scaleY:1.4204,x:-162.5,y:-432.55,alpha:0,startPosition:19},0).to({_off:true},1).wait(273));
        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(202).to({_off:false},0).wait(1).to({regX:-0.2,regY:0.2,x:-97.85,y:-444.3,alpha:0.5556},0).wait(1).to({x:-101.95,y:-452.55,alpha:0.8889},0).wait(1).to({regX:0,regY:0,x:-103.25,y:-455.6,alpha:1},0).wait(1).to({regX:-0.2,regY:0.2,x:-103,y:-454.65},0).wait(1).to({x:-102,y:-452.8},0).wait(1).to({x:-100.3,y:-449.65},0).wait(1).to({regX:0,regY:0,x:-97.85,y:-445.6},0).to({x:-98.6,y:-446.95},2).wait(8).to({regX:-0.2,regY:0.2,x:-98.35,y:-446.05,alpha:0.9298},0).wait(1).to({x:-97.3,y:-444.1,alpha:0.692},0).wait(1).to({x:-95.7,y:-441.2,alpha:0.339},0).wait(1).to({x:-94.55,y:-439.05,alpha:0.0788},0).wait(1).to({regX:0,regY:0,x:-94.1,y:-438.75,alpha:0},0).to({_off:true},1).wait(6).to({_off:false,x:-91.35,y:-430.5},0).wait(1).to({regX:-0.2,regY:0.2,x:-98.3,y:-443.9,alpha:0.5556},0).wait(1).to({x:-102.4,y:-452.15,alpha:0.8889},0).wait(1).to({regX:0,regY:0,x:-103.7,y:-455.2,alpha:1},0).wait(1).to({regX:-0.2,regY:0.2,x:-103.45,y:-454.25},0).wait(1).to({x:-102.45,y:-452.4},0).wait(1).to({x:-100.75,y:-449.25},0).wait(1).to({regX:0,regY:0,x:-98.3,y:-445.2},0).to({x:-99.05,y:-446.55},2).wait(3).to({regX:-0.2,regY:0.2,x:-98.8,y:-445.65,alpha:0.9298},0).wait(1).to({x:-97.75,y:-443.7,alpha:0.692},0).wait(1).to({x:-96.15,y:-440.8,alpha:0.339},0).wait(1).to({x:-95,y:-438.65,alpha:0.0788},0).wait(1).to({regX:0,regY:0,x:-94.55,y:-438.35,alpha:0},0).to({_off:true},1).wait(206));
        this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(268).to({_off:false},0).wait(1).to({regX:0.5,regY:-0.6,x:-86.65,y:-423.3},0).wait(1).to({y:-419.45},0).wait(1).to({y:-416.2},0).wait(1).to({y:-413.55},0).wait(1).to({y:-411.45},0).wait(1).to({y:-409.95},0).wait(1).to({y:-409.05},0).wait(1).to({regX:-0.5,regY:0.2,x:-87.65,y:-408},0).wait(9).to({startPosition:0},0).wait(1).to({regX:0.5,regY:-0.6,x:-86.65,y:-408.8,alpha:0.4444},0).wait(1).to({alpha:0.1111},0).wait(1).to({regX:-0.5,regY:0.2,x:-87.65,y:-408,alpha:0},0).to({_off:true},1).wait(164));
        this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(313).to({_off:false},0).wait(1).to({scaleX:1.1203,scaleY:1.1203,rotation:-18.7494,x:-138.075,y:-439.2375,alpha:0.4141},0).wait(1).to({scaleX:1.1645,scaleY:1.1645,rotation:-29.9991,x:-148.55,y:-437.7,alpha:0.2188},0).to({_off:true},1).wait(1).to({_off:false,scaleX:0.9876,scaleY:0.9876,rotation:14.9998,x:-106.65,y:-443.85,alpha:1},0).wait(1).to({scaleX:1.1203,scaleY:1.1203,rotation:-18.7494,x:-138.075,y:-443.625,alpha:0.4141},0).wait(1).to({scaleX:1.1645,scaleY:1.1645,rotation:-29.9991,x:-148.55,y:-443.55,alpha:0.2188},0).to({_off:true},1).wait(5).to({_off:false,scaleX:0.9876,scaleY:0.9876,rotation:14.9998,x:-81.4,y:-428.3,alpha:1},0).wait(1).to({scaleX:1.1203,scaleY:1.1203,rotation:-18.7494,x:-112.825,y:-423.6875,alpha:0.4141},0).wait(1).to({scaleX:1.1645,scaleY:1.1645,rotation:-29.9991,x:-123.3,y:-422.15,alpha:0.2188},0).to({_off:true},1).wait(1).to({_off:false,scaleX:0.9876,scaleY:0.9876,rotation:14.9998,x:-81.4,y:-428.3,alpha:1},0).wait(1).to({scaleX:1.1203,scaleY:1.1203,rotation:-18.7494,x:-112.825,y:-428.075,alpha:0.4141},0).wait(1).to({scaleX:1.1645,scaleY:1.1645,rotation:-29.9991,x:-123.3,y:-428,alpha:0.2188},0).to({_off:true},1).wait(121));
        this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(351).to({_off:false},0).wait(1).to({x:-69.5,y:-276.55,alpha:1},0).wait(1).to({regX:0.9,x:-69.6,y:-275.6,alpha:0.8965},0).wait(1).to({x:-70.95,y:-274.4,alpha:0.7636},0).wait(1).to({x:-72.55,y:-272.95,alpha:0.6048},0).wait(1).to({x:-74.35,y:-271.35,alpha:0.4229},0).wait(1).to({x:-76.35,y:-269.5,alpha:0.2205},0).wait(1).to({regX:0,x:-79.5,y:-267.55,alpha:0},0).to({_off:true},1).wait(94));
        this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(370).to({_off:false},0).wait(1).to({regX:2.3,regY:1,scaleX:0.8633,scaleY:0.8633,x:-111.95,y:-371.55},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-115.2,y:-377.4},0).wait(1).to({regX:2.3,regY:1,scaleX:0.9896,scaleY:0.9896,x:-112.65,y:-375.25},0).wait(1).to({scaleX:0.9586,scaleY:0.9586,x:-112.1,y:-372},0).wait(1).to({regX:0,regY:0,scaleX:0.9068,scaleY:0.9068,x:-113.2,y:-367.4},0).to({scaleX:1,scaleY:1,x:-114.2,y:-371.4},2).wait(3).to({scaleX:1.1165,scaleY:1.1165},0).wait(1).to({regX:2.3,regY:1,scaleX:0.8111,scaleY:0.8111,x:-111.6,y:-370.4,alpha:0.3262},0).wait(1).to({regX:0,regY:0,scaleX:0.7092,scaleY:0.7092,x:-113.2,y:-371.15,alpha:0.1016},0).to({_off:true},1).wait(70));
        this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(389).to({_off:false},0).wait(1).to({scaleX:1.0714,scaleY:1.0714,y:-411},0).wait(1).to({scaleX:1.2527,scaleY:1.2527,y:-412.25},0).wait(1).to({scaleX:0.9864,scaleY:0.9864},0).wait(1).to({scaleX:0.8976,scaleY:0.8976},0).wait(5).to({startPosition:0},0).wait(1).to({alpha:0.5009},0).wait(1).to({alpha:0.2014},0).wait(1).to({alpha:0.1016},0).to({_off:true},1).wait(51));
    
        // c
        this.c = new lib.character1_body();
        this.c.name = "c";
        this.c.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.c).wait(9).to({regX:-7.6,regY:-310,x:-7.6,y:-318.4},0).wait(1).to({regX:0,regY:0,x:0,y:-10},0).wait(1).to({regX:-7.6,regY:-310,x:-7.6,y:-319.2},0).wait(1).to({y:-316.45},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({y:1},0).wait(1).to({y:0},0).wait(1).to({y:2},0).wait(1).to({regX:-7.6,regY:-310,x:-7.6,y:-315.5},0).wait(1).to({regX:0,regY:0,x:0,y:-8},0).wait(1).to({regX:-7.6,regY:-310,x:-7.6,y:-315.75},0).wait(1).to({y:-308.8},0).wait(1).to({regX:0,regY:0,x:0,y:4},0).wait(1).to({regX:-7.6,regY:-310,x:-7.6,y:-306.75},0).wait(1).to({y:-309.15},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({y:2},0).wait(1).to({y:-7},0).wait(1).to({regX:-7.6,regY:-310,x:-7.6,y:-314.95},0).wait(1).to({y:-309.05},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({y:-7},0).wait(1).to({regX:-7.6,regY:-310,x:-7.6,y:-314.95},0).wait(1).to({y:-309.05},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({regX:-7.6,regY:-310,x:-7.6,y:-309.1},0).wait(1).to({y:-309.75},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({y:6},0).wait(1).to({regX:-7.6,regY:-310,x:-7.6,y:-319},0).wait(1).to({regX:0,regY:0,x:0,y:-14},0).wait(1).to({regX:-7.6,regY:-310,x:-7.6,y:-322.95},0).wait(1).to({y:-319.35},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({regX:-7.6,regY:-310,x:-7.6,y:-308},0).wait(1).to({regX:0,regY:0,x:0,y:-1},0).wait(1).to({regX:-7.6,regY:-310,x:-7.6,y:-310.25},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({y:6},0).wait(1).to({regX:-7.6,regY:-310,x:-7.6,y:-319},0).wait(1).to({regX:0,regY:0,x:0,y:-14},0).wait(1).to({regX:-7.6,regY:-310,x:-7.6,y:-322.95},0).wait(1).to({y:-319.35},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({regX:-7.6,regY:-310,x:-7.6,y:-308},0).wait(1).to({regX:0,regY:0,x:0,y:-1},0).wait(1).to({regX:-7.6,regY:-310,x:-7.6,y:-310.25},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:-7.6,regY:-310,x:-7.6,y:-309.4},0).wait(1).to({y:-307},0).wait(1).to({y:-304.65},0).wait(1).to({regX:0,regY:0,x:0,y:6},0).wait(1).to({regX:-7.6,regY:-310,x:-7.6,y:-304.65},0).wait(1).to({y:-307},0).wait(1).to({y:-309.4},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:-7.6,regY:-310,x:-7.6,y:-309.85},0).wait(1).to({y:-309.3},0).wait(1).to({y:-308.2},0).wait(1).to({y:-306.85},0).wait(1).to({y:-305.75},0).wait(1).to({y:-305.2},0).wait(1).to({regX:0,regY:0,x:0,y:5},0).wait(1).to({regX:-7.6,regY:-310,x:-7.6,y:-305.2},0).wait(1).to({y:-305.75},0).wait(1).to({y:-306.85},0).wait(1).to({y:-308.2},0).wait(1).to({y:-309.3},0).wait(1).to({y:-309.85},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({y:6},2).wait(1).to({regX:-7.6,regY:-310,x:-7.6,y:-305.25},0).wait(1).to({y:-308.8},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).to({y:6},2).wait(1).to({regX:-7.6,regY:-310,x:-7.6,y:-307.8},0).wait(1).to({y:-309.65},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:-7.6,regY:-310,rotation:-0.0253,x:-7.75,y:-309.95},0).wait(1).to({rotation:-0.1129,x:-8.1,y:-309.65},0).wait(1).to({rotation:-0.2845,x:-8.8,y:-309.05},0).wait(1).to({rotation:-0.5565,x:-9.9,y:-308.15},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-0.898,x:-11.3,y:-307},0).wait(1).to({rotation:-1.2075,x:-12.6,y:-305.9},0).wait(1).to({rotation:-1.4141,x:-13.45,y:-305.1},0).wait(1).to({rotation:-1.5201,x:-13.85,y:-304.75},0).wait(1).to({regX:0,regY:0,rotation:-1.5505,x:2,y:5},0).wait(1).to({regX:-7.6,regY:-310,rotation:-1.5305,x:-13.95,y:-304.75},0).wait(1).to({rotation:-1.4624,x:-13.65,y:-304.95},0).wait(1).to({rotation:-1.3309,x:-13.1,y:-305.45},0).wait(1).to({rotation:-1.121,x:-12.25,y:-306.2},0).wait(1).to({rotation:-0.8372,x:-11.1,y:-307.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.534,x:-9.85,y:-308.25},0).wait(1).to({rotation:-0.2881,x:-8.85,y:-309.1},0).wait(1).to({rotation:-0.1291,x:-8.2,y:-309.7},0).wait(1).to({rotation:-0.0467,x:-7.85,y:-309.95},0).wait(1).to({regX:0,regY:0,rotation:-0.0227,x:0,y:0},0).wait(1).to({rotation:0},0).wait(1).to({regX:-7.6,regY:-310,rotation:-0.0253,x:-7.75,y:-309.95},0).wait(1).to({rotation:-0.1129,x:-8.1,y:-309.65},0).wait(1).to({rotation:-0.2845,x:-8.8,y:-309.05},0).wait(1).to({rotation:-0.5565,x:-9.9,y:-308.15},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-0.898,x:-11.3,y:-307},0).wait(1).to({rotation:-1.2075,x:-12.6,y:-305.9},0).wait(1).to({rotation:-1.4141,x:-13.45,y:-305.1},0).wait(1).to({rotation:-1.5201,x:-13.85,y:-304.75},0).wait(1).to({regX:0,regY:0,rotation:-1.5505,x:2,y:5},0).wait(1).to({regX:-7.6,regY:-310,rotation:-1.5302,x:-13.9,y:-304.75},0).wait(1).to({rotation:-1.461,x:-13.65,y:-304.95},0).wait(1).to({rotation:-1.3276,x:-13.1,y:-305.45},0).wait(1).to({rotation:-1.1146,x:-12.25,y:-306.2},0).wait(1).to({rotation:-0.8266,x:-11,y:-307.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.5189,x:-9.75,y:-308.25},0).wait(1).to({rotation:-0.2693,x:-8.75,y:-309.1},0).wait(1).to({rotation:-0.1079,x:-8.1,y:-309.7},0).wait(1).to({rotation:-0.0243,x:-7.75,y:-309.95},0).wait(1).to({regX:0,regY:0,rotation:0,x:0,y:0},0).wait(16).to({regX:-7.6,regY:-310,x:-7.6,y:-315.55},0).wait(1).to({y:-317.45},0).wait(1).to({regX:0,regY:0,x:0,y:-8},0).wait(1).to({regX:-7.6,regY:-310,x:-7.6,y:-317.35},0).wait(1).to({y:-315.25},0).wait(1).to({regX:0,regY:0,x:0,y:2},0).wait(1).to({y:1},0).wait(1).to({y:0},0).wait(7).to({regX:-7.6,regY:-310,x:-7.6,y:-318.4},0).wait(1).to({regX:0,regY:0,x:0,y:-10},0).wait(1).to({regX:-7.6,regY:-310,x:-7.6,y:-319.2},0).wait(1).to({y:-316.45},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({y:1},0).wait(1).to({y:0},0).wait(15).to({regX:-7.6,regY:-310,rotation:-0.0253,x:-7.75,y:-309.9},0).wait(1).to({rotation:-0.1129,x:-8.1,y:-309.35},0).wait(1).to({rotation:-0.2845,x:-8.8,y:-308.3},0).wait(1).to({rotation:-0.5565,x:-9.9,y:-306.7},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-0.898,x:-11.3,y:-304.65},0).wait(1).to({rotation:-1.2075,x:-12.6,y:-302.75},0).wait(1).to({rotation:-1.4141,x:-13.45,y:-301.45},0).wait(1).to({rotation:-1.5201,x:-13.85,y:-300.85},0).wait(1).to({regX:0,regY:0,rotation:-1.5505,x:2,y:9},0).wait(1).to({regX:-7.6,regY:-310,rotation:-1.5305,x:-13.95,y:-300.8},0).wait(1).to({rotation:-1.4624,x:-13.65,y:-301.2},0).wait(1).to({rotation:-1.3309,x:-13.1,y:-302},0).wait(1).to({rotation:-1.121,x:-12.25,y:-303.3},0).wait(1).to({rotation:-0.8372,x:-11.1,y:-305.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.534,x:-9.85,y:-306.9},0).wait(1).to({rotation:-0.2881,x:-8.85,y:-308.4},0).wait(1).to({rotation:-0.1291,x:-8.2,y:-309.4},0).wait(1).to({rotation:-0.0467,x:-7.85,y:-309.9},0).wait(1).to({regX:0,regY:0,rotation:-0.0227,x:0,y:0},0).wait(1).to({rotation:0},0).wait(1).to({regX:-7.6,regY:-310,rotation:-0.147,x:-8.25,y:-309.55},0).wait(1).to({rotation:-0.7239,x:-10.6,y:-307.55},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-1.3727,x:-13.25,y:-305.3},0).wait(1).to({regX:0,regY:0,rotation:-1.5505,x:2,y:5},0).wait(18).to({regX:-7.6,regY:-310,rotation:-1.4913,x:-13.75,y:-304.85},0).wait(1).to({rotation:-1.2701,x:-12.85,y:-305.7},0).wait(1).to({rotation:-0.8372,x:-11.1,y:-307.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.3606,x:-9.15,y:-308.85},0).wait(1).to({rotation:-0.094,x:-8.05,y:-309.8},0).wait(1).to({regX:0,regY:0,rotation:-0.0227,x:0,y:0},0).wait(1).to({rotation:0},0).wait(1).to({regX:-7.6,regY:-310,rotation:-0.0894,x:-8,y:-309.75},0).wait(1).to({rotation:-0.4358,x:-9.4,y:-308.55},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-1.0316,x:-11.9,y:-306.45},0).wait(1).to({rotation:-1.4426,x:-13.55,y:-305},0).wait(1).to({regX:0,regY:0,rotation:-1.5505,x:2,y:5},0).wait(8).to({regX:-7.6,regY:-310,rotation:-1.4913,x:-13.75,y:-304.85},0).wait(1).to({rotation:-1.2701,x:-12.85,y:-305.7},0).wait(1).to({rotation:-0.8372,x:-11.1,y:-307.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.3606,x:-9.15,y:-308.85},0).wait(1).to({rotation:-0.094,x:-8.05,y:-309.8},0).wait(1).to({regX:0,regY:0,rotation:-0.0227,x:0,y:0},0).wait(5).to({rotation:0},0).wait(1).to({regX:-7.6,regY:-310,x:-7.6,y:-318.4},0).wait(1).to({regX:0,regY:0,x:0,y:-10},0).wait(1).to({regX:-7.6,regY:-310,x:-7.6,y:-319.2},0).wait(1).to({y:-316.45},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({y:1},0).wait(1).to({y:0},0).wait(9).to({x:1,y:4},1,cjs.Ease.get(1)).wait(1).to({regX:-7.6,regY:-310,x:-10.35,y:-302.25},0).wait(1).to({regX:0,regY:0,x:-4,y:9},0).to({x:0,y:13},4).wait(11).to({regX:-7.6,regY:-310,x:-7.6,y:-297.75},0).wait(1).to({y:-300.7},0).wait(1).to({y:-305.65},0).wait(1).to({y:-309.1},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(5).to({y:-1},0).wait(1).to({regX:-7.6,regY:-310,x:-7.6,y:-309},0).wait(1).to({y:-303.05},0).wait(1).to({regX:0,regY:0,x:0,y:9},0).to({y:8},2).wait(1).to({y:9},0).wait(6).to({regX:-7.6,regY:-310,x:-7.6,y:-302.2},0).wait(1).to({y:-306.5},0).wait(1).to({y:-310.8},0).wait(1).to({regX:0,regY:0,x:0,y:-2},0).wait(1).to({regX:-7.6,regY:-310,x:-7.6,y:-310.5},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:-7.6,regY:-310,x:-7.6,y:-316.7},0).wait(1).to({regX:0,regY:0,x:0,y:-8},0).wait(1).to({regX:-7.6,regY:-310,x:-7.6,y:-316.85},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:-7.6,regY:-310,x:-7.6,y:-318.4},0).wait(1).to({regX:0,regY:0,x:0,y:-10},0).wait(1).to({regX:-7.6,regY:-310,x:-7.6,y:-319.2},0).wait(1).to({y:-316.45},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({y:1},0).wait(1).to({y:0},0).wait(1).to({x:1,y:4},1,cjs.Ease.get(1)).wait(1).to({regX:-7.6,regY:-310,x:-10.35,y:-302.25},0).wait(1).to({regX:0,regY:0,x:-4,y:9},0).to({x:0,y:13},4).wait(8).to({regX:-7.6,regY:-310,x:-7.6,y:-299.25},0).wait(1).to({y:-307},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({y:2},0).wait(1).to({regX:-7.6,regY:-310,x:-7.6,y:-311},0).wait(1).to({regX:0,regY:0,x:0,y:-2},0).wait(1).to({regX:-7.6,regY:-310,x:-7.6,y:-310.15},0).wait(1).to({regX:0,regY:0,x:0,y:2},0).wait(1).to({regX:-7.6,regY:-310,x:-7.6,y:-309.5},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:-7.6,regY:-310,x:-7.6,y:-309.4},0).wait(1).to({y:-307},0).wait(1).to({y:-304.65},0).wait(1).to({regX:0,regY:0,x:0,y:6},0).wait(1).to({regX:-7.6,regY:-310,x:-7.6,y:-304.6},0).wait(1).to({y:-304.9},0).wait(1).to({regX:0,regY:0,x:0,y:5},0).wait(5).to({regX:-7.6,regY:-310,x:-7.6,y:-305.4},0).wait(1).to({y:-306.9},0).wait(1).to({y:-309.15},0).wait(1).to({y:-310.6},0).wait(1).to({regX:0,regY:0,x:0,y:-1},0).wait(1).to({regX:-7.6,regY:-310,x:-7.6,y:-310.25},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({y:5},0).wait(1).to({regX:-7.6,regY:-310,x:-7.6,y:-317.6},0).wait(1).to({regX:0,regY:0,x:0,y:-10},0).wait(1).to({regX:-7.6,regY:-310,x:-7.6,y:-319.2},0).wait(1).to({y:-316.45},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({y:1},0).wait(1).to({y:0},0).wait(9).to({regX:-7.6,regY:-310,x:-7.6,y:-317.5},0).wait(1).to({regX:0,regY:0,x:0,y:-10},0).wait(2).to({regX:-7.6,regY:-310,x:-7.6,y:-318},0).wait(1).to({y:-312},0).wait(1).to({regX:0,regY:0,x:0,y:8},0).to({y:5},2).wait(7).to({regX:-7.6,regY:-310,x:-7.6,y:-305.35},0).wait(1).to({y:-306.55},0).wait(1).to({y:-308.5},0).wait(1).to({y:-309.7},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({y:2},0).wait(1).to({y:-7},0).wait(1).to({regX:-7.6,regY:-310,x:-7.6,y:-314.95},0).wait(1).to({y:-309.05},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({y:-7},0).wait(1).to({regX:-7.6,regY:-310,x:-7.6,y:-314.95},0).wait(1).to({y:-309.05},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({regX:-7.6,regY:-310,x:-7.6,y:-309.1},0).wait(1).to({y:-309.75},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:-7.6,regY:-310,x:-4.6,y:-306.6},0).wait(1).to({regX:0,regY:0,x:4,y:4.55},0).to({x:-2,y:8.8},2).wait(1).to({regX:-7.6,regY:-310,x:-8.45,y:-300.55},0).wait(1).to({x:-7.8,y:-300.15},0).wait(1).to({regX:0,regY:0,x:0,y:10},0).wait(5).to({regX:-7.6,regY:-310,x:-7.6,y:-300.7},0).wait(1).to({y:-303.15},0).wait(1).to({y:-306.85},0).wait(1).to({y:-309.35},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(11).to({regX:-7.6,regY:-310,x:-7.6,y:-309.1},0).wait(1).to({y:-305.55},0).wait(1).to({y:-300},0).wait(1).to({y:-296.45},0).wait(1).to({regX:0,regY:0,x:0,y:14.5},0).wait(1).to({regX:-7.6,regY:-310,x:-7.6,y:-296.45},0).wait(1).to({y:-300},0).wait(1).to({y:-305.55},0).wait(1).to({y:-309.1},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-447.4,-744.7,829.4,886.6);
    
    
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
    (lib._440_2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{end0:14,scene1:15,end1:226,scene2:227,end2:388,scene3:389,end3:525,scene4:526,end4:660,scene5:661,end5:794,scene6:795,end6:956,scene7:957,end7:1110});
    
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
            exportRoot._g.m1 = "可愛いにゃ～♪";
            exportRoot._g.m2 = "";
            exportRoot._g.m3 = "";
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 3);
            
            this.ch1.gotoAndPlay("swing");
        }
        this.frame_45 = function() {
            this.ch1.gotoAndPlay("swing_on");
        }
        this.frame_71 = function() {
            exportRoot._g.m1 = "可愛いにゃ～♪すんすん……";
            exportRoot._g.m2 = "";
            exportRoot._g.m3 = "";
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 7);
            this.ch1.gotoAndPlay("swing_off");
        }
        this.frame_95 = function() {
            exportRoot._u.setFace("ch1", 3);
            this.ch1.gotoAndPlay("nod2");
        }
        this.frame_111 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 11);
        }
        this.frame_161 = function() {
            exportRoot._g.m3 = "にゃふふっ､";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 3);
        }
        this.frame_183 = function() {
            exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 2);
        }
        this.frame_193 = function() {
            this.ch1.gotoAndPlay("swing");
        }
        this.frame_196 = function() {
            exportRoot._g.m4 = this.m.t[exportRoot._g.idx][4];
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 1);
        }
        this.frame_226 = function() {
            exportRoot._u.updateTalk();
            
            //シーンendでは直前のキーフレームの表情を指定してください。
            exportRoot._u.setFace("ch1", 1);
            
            this.ch1.gotoAndPlay("standby");
        }
        this.frame_227 = function() {
            exportRoot._g.m1 = "撮影まで時間もあるし､";
            exportRoot._g.m2 = "";
            exportRoot._g.m3 = "";
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 2);
        }
        this.frame_249 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._g.m2 = "いていいよね?";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 1);
        }
        this.frame_272 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._g.m2 = "いていいよね? みく､";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 2);
            this.ch1.gotoAndPlay("nod");
        }
        this.frame_281 = function() {
            exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
            exportRoot._g.m3 = "ちゃんとつけるよ!";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 1);
        }
        this.frame_301 = function() {
            exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
            exportRoot._g.m3 = "ちゃんとつけるよ! ……";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 2);
        }
        this.frame_322 = function() {
            exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
            exportRoot._g.m4 = "と!";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 3);
            
            this.ch1.gotoAndPlay("happy");
        }
        this.frame_348 = function() {
            exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
            exportRoot._g.m4 = "と! さすがPﾁｬﾝ､";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 7);
        }
        this.frame_365 = function() {
            exportRoot._g.m4 = this.m.t[exportRoot._g.idx][4];
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 3);
            
            this.ch1.gotoAndPlay("chord");
        }
        this.frame_388 = function() {
            exportRoot._u.updateTalk();
            //シーンendでは直前のキーフレームの表情を指定してください。
            
            exportRoot._u.setFace("ch1", 3);
        }
        this.frame_389 = function() {
            exportRoot._g.m1 = "それにしても､";
            exportRoot._g.m2 = "";
            exportRoot._g.m3 = "";
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 11);
            this.ch1.gotoAndPlay("swing_on");
        }
        this.frame_409 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._g.m2 = "だにゃあ｡";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 6);
        }
        this.frame_454 = function() {
            this.ch1.gotoAndPlay("swing_off");
        }
        this.frame_458 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._g.m2 = "だにゃあ｡きっと､";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 11);
        }
        this.frame_464 = function() {
            exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
            exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
            exportRoot._u.setText();
            
            //exportRoot._u.setFace("ch1", 2);
        }
        this.frame_512 = function() {
            exportRoot._g.m4 = this.m.t[exportRoot._g.idx][4];
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 3);
            
            this.ch1.gotoAndPlay("jump");
        }
        this.frame_525 = function() {
            exportRoot._u.updateTalk();
            //シーンendでは直前のキーフレームの表情を指定してください。
            
            exportRoot._u.setFace("ch1", 3);
            this.ch1.gotoAndPlay("standby");
        }
        this.frame_526 = function() {
            exportRoot._g.m1 = "みくも､";
            exportRoot._g.m2 = "";
            exportRoot._g.m3 = "";
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 2);
            this.ch1.gotoAndPlay("nod");
        }
        this.frame_536 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._g.m2 = "よ!";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 1);
        }
        this.frame_572 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._g.m2 = "よ! だから､";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 2);
        }
        this.frame_579 = function() {
            exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
            exportRoot._g.m3 = "ﾄもわかるの｡";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 1);
            this.ch1.gotoAndPlay("nod2");
        }
        this.frame_615 = function() {
            exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
            exportRoot._g.m4 = this.m.t[exportRoot._g.idx][4];
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 7);
            //this.ch1.gotoAndPlay("nod");
        }
        this.frame_630 = function() {
            this.ch1.gotoAndPlay("swing");
            exportRoot._u.setFace("ch1", 3);
        }
        this.frame_660 = function() {
            exportRoot._u.updateTalk();
            //シーンendでは直前のキーフレームの表情を指定してください。
            
            exportRoot._u.setFace("ch1", 3);
        }
        this.frame_661 = function() {
            exportRoot._g.m1 = "まずは､";
            exportRoot._g.m2 = "";
            exportRoot._g.m3 = "";
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 2);
        }
        this.frame_674 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._g.m2 = "めるｺﾄ!";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 3);
        }
        this.frame_712 = function() {
            exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 7);
            this.ch1.gotoAndPlay("swing");
        }
        this.frame_735 = function() {
            exportRoot._g.m3 = "それからそれから……";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 6);
            this.ch1.gotoAndPlay("nod_double");
        }
        this.frame_761 = function() {
            exportRoot._g.m3 = "それからそれから……ん?";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 11);
            
            this.ch1.gotoAndPlay("notice");
        }
        this.frame_774 = function() {
            exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
            exportRoot._g.m4 = this.m.t[exportRoot._g.idx][4];
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 5);
        }
        this.frame_794 = function() {
            exportRoot._u.updateTalk();
            //シーンendでは直前のキーフレームの表情を指定してください。
            
            exportRoot._u.setFace("ch1", 5);
        }
        this.frame_795 = function() {
            exportRoot._g.m1 = "にゃふっ!";
            exportRoot._g.m2 = "";
            exportRoot._g.m3 = "";
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 7);
            this.ch1.gotoAndPlay("nod2");
        }
        this.frame_811 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 3);
            this.ch1.gotoAndPlay("swing");
        }
        this.frame_836 = function() {
            exportRoot._g.m2 = "……";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 3);
        }
        this.frame_851 = function() {
            exportRoot._g.m2 = "……にゃ?";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 2);
            this.ch1.gotoAndPlay("notice");
        }
        this.frame_868 = function() {
            exportRoot._g.m2 = "……にゃ? うん､";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 1);
        }
        this.frame_878 = function() {
            exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
            exportRoot._g.m3 = "したことにゃい……";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 1);
        }
        this.frame_906 = function() {
            exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
            exportRoot._g.m4 = "よっ｡";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 4);
            this.ch1.gotoAndPlay("shy_jump");
        }
        this.frame_926 = function() {
            exportRoot._g.m4 = this.m.t[exportRoot._g.idx][4];
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 8);
            this.ch1.gotoAndPlay("nod");
        }
        this.frame_935 = function() {
            this.ch1.gotoAndPlay("nod3");
        }
        this.frame_956 = function() {
            exportRoot._u.updateTalk();
            //シーンendでは直前のキーフレームの表情を指定してください。
            
            exportRoot._u.setFace("ch1", 8);
        }
        this.frame_957 = function() {
            exportRoot._g.m1 = "だって､";
            exportRoot._g.m2 = "";
            exportRoot._g.m3 = "";
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 4);
        }
        this.frame_960 = function() {
            this.ch1.gotoAndPlay("nod");
        }
        this.frame_977 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._g.m2 = "くしたら……";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 8);
            this.ch1.gotoAndPlay("swing_on");
        }
        this.frame_1020 = function() {
            exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
            exportRoot._g.m3 = "にゃあ……｡";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 4);
        }
        this.frame_1048 = function() {
            exportRoot._g.m4 = this.m.t[exportRoot._g.idx][4];
            exportRoot._u.setText("finish", 4);
        }
        this.frame_1080 = function() {
            // finish指定時は exportRoot._g.m の後ろの数字をsetTextの2つ目の引数に指定する
            exportRoot._g.m5 = this.m.t[exportRoot._g.idx][5];
            exportRoot._u.setText("finish", 4);
        }
        this.frame_1110 = function() {
            //最後のシーンであることをHTML側に通知
            exportRoot._g.end_flag = true;
            
            //label「scene7」通過後のskip対策
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
            exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
            exportRoot._g.m4 = this.m.t[exportRoot._g.idx][4];
            exportRoot._g.m5 = this.m.t[exportRoot._g.idx][5];
            exportRoot._u.setText("finish", 4);
            
            this.stop();
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1).call(this.frame_15).wait(30).call(this.frame_45).wait(26).call(this.frame_71).wait(24).call(this.frame_95).wait(16).call(this.frame_111).wait(50).call(this.frame_161).wait(22).call(this.frame_183).wait(10).call(this.frame_193).wait(3).call(this.frame_196).wait(30).call(this.frame_226).wait(1).call(this.frame_227).wait(22).call(this.frame_249).wait(23).call(this.frame_272).wait(9).call(this.frame_281).wait(20).call(this.frame_301).wait(21).call(this.frame_322).wait(26).call(this.frame_348).wait(17).call(this.frame_365).wait(23).call(this.frame_388).wait(1).call(this.frame_389).wait(20).call(this.frame_409).wait(45).call(this.frame_454).wait(4).call(this.frame_458).wait(6).call(this.frame_464).wait(48).call(this.frame_512).wait(13).call(this.frame_525).wait(1).call(this.frame_526).wait(10).call(this.frame_536).wait(36).call(this.frame_572).wait(7).call(this.frame_579).wait(36).call(this.frame_615).wait(15).call(this.frame_630).wait(30).call(this.frame_660).wait(1).call(this.frame_661).wait(13).call(this.frame_674).wait(38).call(this.frame_712).wait(23).call(this.frame_735).wait(26).call(this.frame_761).wait(13).call(this.frame_774).wait(20).call(this.frame_794).wait(1).call(this.frame_795).wait(16).call(this.frame_811).wait(25).call(this.frame_836).wait(15).call(this.frame_851).wait(17).call(this.frame_868).wait(10).call(this.frame_878).wait(28).call(this.frame_906).wait(20).call(this.frame_926).wait(9).call(this.frame_935).wait(21).call(this.frame_956).wait(1).call(this.frame_957).wait(3).call(this.frame_960).wait(17).call(this.frame_977).wait(43).call(this.frame_1020).wait(28).call(this.frame_1048).wait(32).call(this.frame_1080).wait(30).call(this.frame_1110).wait(5));
    
        // shield
        this.instance = new lib.shield();
        this.instance.parent = this;
        this.instance.setTransform(120,160);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1115));
    
        // sender
        this.sender = new lib.sender();
        this.sender.name = "sender";
        this.sender.parent = this;
        this.sender.setTransform(-100,0);
        this.sender._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.sender).wait(1110).to({_off:false},0).wait(5));
    
        // SP_loader
        this.loader = new lib.voice_loader_container();
        this.loader.name = "loader";
        this.loader.parent = this;
        this.loader.setTransform(190.05,12,1,1,0,0,0,-50.1,11);
    
        this.timeline.addTween(cjs.Tween.get(this.loader).wait(1115));
    
        // place
        this.instance_1 = new lib.tie();
        this.instance_1.parent = this;
        this.instance_1.setTransform(120,155);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({alpha:0.1992},3,cjs.Ease.get(1)).to({_off:true},1).wait(1096));
    
        // SP_pusher
        this.instance_2 = new lib.pusher_next();
        this.instance_2.parent = this;
        this.instance_2.setTransform(120,290);
        this.instance_2._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off:false},0).to({_off:true},3).wait(1100));
    
        // window
        this.window_1 = new lib.window_container();
        this.window_1.name = "window_1";
        this.window_1.parent = this;
        this.window_1.setTransform(2,321.1);
    
        this.timeline.addTween(cjs.Tween.get(this.window_1).wait(15).to({y:301.1},0).wait(1).to({regX:132.8,regY:98.8,x:134.8,y:398.6},0).wait(1).to({y:394.65},0).wait(1).to({y:388},0).wait(1).to({y:378.75},0).wait(1).to({y:367.25},0).wait(1).to({y:354.25},0).wait(1).to({y:340.85},0).wait(1).to({y:328.45},0).wait(1).to({y:318.45},0).wait(1).to({y:312},0).wait(1).to({regX:0,regY:0,x:2,y:211},0).wait(1).to({regX:132.8,regY:98.8,x:134.8,y:310.3},0).wait(1).to({y:311.9},0).wait(1).to({regX:0,regY:0,x:2,y:214},0).wait(1008).to({regX:132.8,regY:98.8,x:134.8,y:313.9},0).wait(1).to({y:317.75},0).wait(1).to({y:325},0).wait(1).to({y:336.4},0).wait(1).to({y:351.7},0).wait(1).to({y:368.85},0).wait(1).to({y:384.15},0).wait(1).to({y:395.55},0).wait(1).to({y:402.8},0).wait(1).to({y:406.65},0).wait(1).to({regX:0,regY:0,x:2,y:309},0).to({_off:true},1).wait(67));
    
        // window
        this.window_2 = new lib.finish_text_container();
        this.window_2.name = "window_2";
        this.window_2.parent = this;
        this.window_2.setTransform(120,322);
        this.window_2._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.window_2).wait(1048).to({_off:false},0).wait(1).to({regX:16.8,regY:-1.3,x:136.8,y:320.2},0).wait(1).to({y:318.5},0).wait(1).to({y:315.2},0).wait(1).to({y:309.85},0).wait(1).to({y:302.4},0).wait(1).to({y:294.05},0).wait(1).to({y:287.1},0).wait(1).to({y:282.55},0).wait(1).to({y:280.25},0).wait(1).to({regX:0,regY:0,x:120,y:280.9},0).to({y:282.9},3).wait(54));
    
        // petal
        this.instance_3 = new lib.petal_container();
        this.instance_3.parent = this;
        this.instance_3.setTransform(62.2,-84.7,1.3542,1.3542);
    
        this.instance_4 = new lib.petal_container();
        this.instance_4.parent = this;
        this.instance_4.setTransform(102.95,-43.65,2.1061,1.9746,0,0,180);
    
        this.instance_5 = new lib.petal_container();
        this.instance_5.parent = this;
        this.instance_5.setTransform(173.95,-60.5,1.2566,1.6126);
    
        this.instance_6 = new lib.petal_container();
        this.instance_6.parent = this;
        this.instance_6.setTransform(26.5,-31.8,1.2566,1.6126);
    
        this.instance_7 = new lib.petal_container();
        this.instance_7.parent = this;
        this.instance_7.setTransform(203.6,-215.8,3.3643,4.0483,0,0,180);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]},1048).wait(67));
    
        // glitters
        this.glitters = new lib.glitters();
        this.glitters.name = "glitters";
        this.glitters.parent = this;
        this.glitters._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.glitters).wait(1048).to({_off:false},0).wait(67));
    
        // white_mask
        this.ranko_finish_blur = new lib.white_mask();
        this.ranko_finish_blur.name = "ranko_finish_blur";
        this.ranko_finish_blur.parent = this;
        this.ranko_finish_blur.alpha = 0.8516;
        this.ranko_finish_blur.compositeOperation = "lighter";
        this.ranko_finish_blur._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.ranko_finish_blur).wait(1048).to({_off:false},0).wait(1).to({regX:120,regY:155,x:120,y:155,alpha:0.8489},0).wait(1).to({alpha:0.8403},0).wait(1).to({alpha:0.8253},0).wait(1).to({alpha:0.8029},0).wait(1).to({alpha:0.7723},0).wait(1).to({alpha:0.7324},0).wait(1).to({alpha:0.6823},0).wait(1).to({alpha:0.6211},0).wait(1).to({alpha:0.5487},0).wait(1).to({alpha:0.4662},0).wait(1).to({alpha:0.3767},0).wait(1).to({alpha:0.2865},0).wait(1).to({alpha:0.2036},0).wait(1).to({alpha:0.1357},0).wait(1).to({alpha:0.0874},0).wait(1).to({alpha:0.0595},0).wait(1).to({regX:0,regY:0,x:0,y:0,alpha:0.0508},0).to({_off:true},1).wait(49));
    
        // SP_blur
        this.ranko_finish_blur_1 = new lib.ranko_finish_blur();
        this.ranko_finish_blur_1.name = "ranko_finish_blur_1";
        this.ranko_finish_blur_1.parent = this;
        this.ranko_finish_blur_1._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.ranko_finish_blur_1).wait(1048).to({_off:false},0).wait(1).to({regX:120,regY:155,x:120,y:155,alpha:0.9968},0).wait(1).to({alpha:0.9867},0).wait(1).to({alpha:0.9688},0).wait(1).to({alpha:0.9423},0).wait(1).to({alpha:0.906},0).wait(1).to({alpha:0.8587},0).wait(1).to({alpha:0.7993},0).wait(1).to({alpha:0.7268},0).wait(1).to({alpha:0.641},0).wait(1).to({alpha:0.5432},0).wait(1).to({alpha:0.4371},0).wait(1).to({alpha:0.3301},0).wait(1).to({alpha:0.2319},0).wait(1).to({alpha:0.1514},0).wait(1).to({alpha:0.0941},0).wait(1).to({alpha:0.0612},0).wait(1).to({regX:0,regY:0,x:0,y:0,alpha:0.0508},0).to({_off:true},1).wait(49));
    
        // character_face
        this.fns = new lib.finish_1();
        this.fns.name = "fns";
        this.fns.parent = this;
        this.fns.setTransform(120,168,1,1,0,0,0,120,168);
        this.fns._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.fns).wait(1048).to({_off:false},0).wait(67));
    
        // white_mask
        this.instance_8 = new lib.white_mask();
        this.instance_8.parent = this;
        this.instance_8.setTransform(120,155,1,1,0,0,0,120,155);
        this.instance_8.alpha = 0.0508;
        this.instance_8._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1036).to({_off:false},0).to({alpha:0.8984},11).to({_off:true},1).wait(67));
    
        // powder
        this.instance_9 = new lib.glitter_rise();
        this.instance_9.parent = this;
        this.instance_9.setTransform(194.25,-43.4,1.0489,1.0489,-2.749,0,0,5.1,-0.4);
    
        this.instance_10 = new lib.glitter_rise();
        this.instance_10.parent = this;
        this.instance_10.setTransform(125.5,-5.3,1.155,1.0853,-4.8774,0,0,0,6.5);
        this.instance_10.alpha = 0.6992;
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9}]}).to({state:[]},15).wait(1100));
    
        // overlay_top
        this.instance_11 = new lib.overlay_black();
        this.instance_11.parent = this;
        this.instance_11.setTransform(120,-2);
        this.instance_11._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(15).to({_off:false},0).wait(1).to({regX:1,x:121,y:-3.2},0).wait(1).to({y:-6.85},0).wait(1).to({y:-12.75},0).wait(1).to({y:-20.7},0).wait(1).to({y:-30.4},0).wait(1).to({y:-41.5},0).wait(1).to({y:-53.55},0).wait(1).to({y:-65.9},0).wait(1).to({y:-78.05},0).wait(1).to({y:-89.25},0).wait(1).to({y:-98.95},0).wait(1).to({y:-106.45},0).wait(1).to({y:-111.3},0).wait(1).to({regX:0,x:120,y:-113},0).wait(32).to({regX:1,x:121,y:-113.15},0).wait(1).to({y:-113.65},0).wait(1).to({y:-114.5},0).wait(1).to({y:-115.7},0).wait(1).to({y:-117.15},0).wait(1).to({y:-118.95},0).wait(1).to({y:-121},0).wait(1).to({y:-123.3},0).wait(1).to({y:-125.9},0).wait(1).to({y:-128.7},0).wait(1).to({y:-131.7},0).wait(1).to({y:-134.85},0).wait(1).to({y:-138.2},0).wait(1).to({y:-141.7},0).wait(1).to({y:-145.3},0).wait(1).to({y:-149},0).wait(1).to({y:-152.8},0).wait(1).to({y:-156.55},0).wait(1).to({y:-160.4},0).wait(1).to({y:-164.15},0).wait(1).to({y:-167.9},0).wait(1).to({y:-171.55},0).wait(1).to({y:-175.15},0).wait(1).to({y:-178.55},0).wait(1).to({y:-181.8},0).wait(1).to({y:-184.9},0).wait(1).to({y:-187.75},0).wait(1).to({y:-190.35},0).wait(1).to({y:-192.7},0).wait(1).to({y:-194.7},0).wait(1).to({y:-196.45},0).wait(1).to({y:-197.8},0).wait(1).to({y:-198.8},0).wait(1).to({y:-199.4},0).wait(1).to({regX:0,x:120,y:-199.65},0).to({_off:true},1).wait(1019));
    
        // overlay_bottom
        this.instance_12 = new lib.overlay_black();
        this.instance_12.parent = this;
        this.instance_12.setTransform(120,308);
        this.instance_12._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(15).to({_off:false},0).wait(1).to({regX:1,x:121,y:308.45},0).wait(1).to({y:309.8},0).wait(1).to({y:312.05},0).wait(1).to({y:315.05},0).wait(1).to({y:318.75},0).wait(1).to({y:322.95},0).wait(1).to({y:327.5},0).wait(1).to({y:332.15},0).wait(1).to({y:336.75},0).wait(1).to({y:341},0).wait(1).to({y:344.65},0).wait(1).to({y:347.5},0).wait(1).to({y:349.35},0).wait(1).to({regX:0,x:120,y:350},0).wait(32).to({regX:1,x:121,y:350.3},0).wait(1).to({y:351.25},0).wait(1).to({y:352.8},0).wait(1).to({y:354.95},0).wait(1).to({y:357.65},0).wait(1).to({y:360.85},0).wait(1).to({y:364.6},0).wait(1).to({y:368.85},0).wait(1).to({y:373.5},0).wait(1).to({y:378.6},0).wait(1).to({y:384.1},0).wait(1).to({y:389.9},0).wait(1).to({y:396},0).wait(1).to({y:402.35},0).wait(1).to({y:408.95},0).wait(1).to({y:415.7},0).wait(1).to({y:422.55},0).wait(1).to({y:429.5},0).wait(1).to({y:436.4},0).wait(1).to({y:443.3},0).wait(1).to({y:450.15},0).wait(1).to({y:456.85},0).wait(1).to({y:463.3},0).wait(1).to({y:469.55},0).wait(1).to({y:475.5},0).wait(1).to({y:481.1},0).wait(1).to({y:486.3},0).wait(1).to({y:491.05},0).wait(1).to({y:495.3},0).wait(1).to({y:499},0).wait(1).to({y:502.15},0).wait(1).to({y:504.65},0).wait(1).to({y:506.45},0).wait(1).to({y:507.6},0).wait(1).to({regX:0,x:120,y:508},0).to({_off:true},1).wait(1019));
    
        // powapowa1
        this.lighter_tgt = new lib.mc_ring_move();
        this.lighter_tgt.name = "lighter_tgt";
        this.lighter_tgt.parent = this;
        this.lighter_tgt.setTransform(120,155);
        this.lighter_tgt.alpha = 0;
        this.lighter_tgt._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.lighter_tgt).wait(661).to({_off:false},0).to({alpha:1},12).wait(88).to({alpha:0},12).to({_off:true},1).wait(341));
    
        // powapowa2
        this.lighter_tgt_1 = new lib.mc_bubble_set();
        this.lighter_tgt_1.name = "lighter_tgt_1";
        this.lighter_tgt_1.parent = this;
        this.lighter_tgt_1.setTransform(121,336,1,1,89.9781);
        this.lighter_tgt_1.alpha = 0;
        this.lighter_tgt_1._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.lighter_tgt_1).wait(661).to({_off:false},0).to({alpha:0.4492},12).wait(88).to({alpha:0},12).to({_off:true},1).wait(341));
    
        // effect
        this.instance_13 = new lib.glitter_container();
        this.instance_13.parent = this;
        this.instance_13.setTransform(143.7,-12.25,1.0599,1.0599,-4.2877,0,0,-0.1,2.5);
        this.instance_13._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(15).to({_off:false},0).to({_off:true},1033).wait(67));
    
        // ch
        this.ch1 = new lib.character1_container();
        this.ch1.name = "ch1";
        this.ch1.parent = this;
        this.ch1.setTransform(-181.75,415,0.5,0.5,0,0,0,-7.5,-310);
    
        this.timeline.addTween(cjs.Tween.get(this.ch1).wait(15).to({scaleX:0.8722,scaleY:0.8722,x:196.75,y:116.65},0).to({x:177.8},45).wait(1).to({regX:-23.9,regY:-339.2,scaleX:0.8715,scaleY:0.8715,x:163.15,y:91.5},0).wait(1).to({scaleX:0.8704,scaleY:0.8704,x:162.65,y:92},0).wait(1).to({scaleX:0.8689,scaleY:0.8689,x:162,y:92.65},0).wait(1).to({scaleX:0.8668,scaleY:0.8668,x:161.05,y:93.6},0).wait(1).to({scaleX:0.8642,scaleY:0.8642,x:159.8,y:94.85},0).wait(1).to({scaleX:0.8609,scaleY:0.8609,x:158.3,y:96.4},0).wait(1).to({scaleX:0.8568,scaleY:0.8568,x:156.4,y:98.2},0).wait(1).to({scaleX:0.8519,scaleY:0.8519,x:154.2,y:100.45},0).wait(1).to({scaleX:0.8463,scaleY:0.8463,x:151.55,y:103.05},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:148.65,y:105.95},0).wait(1).to({scaleX:0.8332,scaleY:0.8332,x:145.55,y:109.05},0).wait(1).to({scaleX:0.8261,scaleY:0.8261,x:142.3,y:112.3},0).wait(1).to({scaleX:0.8192,scaleY:0.8192,x:139.1,y:115.5},0).wait(1).to({scaleX:0.8126,scaleY:0.8126,x:136.1,y:118.45},0).wait(1).to({scaleX:0.8065,scaleY:0.8065,x:133.3,y:121.3},0).wait(1).to({scaleX:0.8009,scaleY:0.8009,x:130.75,y:123.85},0).wait(1).to({scaleX:0.7959,scaleY:0.7959,x:128.5,y:126.15},0).wait(1).to({scaleX:0.7915,scaleY:0.7915,x:126.45,y:128.2},0).wait(1).to({scaleX:0.7876,scaleY:0.7876,x:124.65,y:129.95},0).wait(1).to({scaleX:0.7841,scaleY:0.7841,x:123,y:131.55},0).wait(1).to({scaleX:0.781,scaleY:0.781,x:121.65,y:133},0).wait(1).to({scaleX:0.7784,scaleY:0.7784,x:120.4,y:134.2},0).wait(1).to({scaleX:0.776,scaleY:0.776,x:119.3,y:135.3},0).wait(1).to({scaleX:0.774,scaleY:0.774,x:118.35,y:136.15},0).wait(1).to({scaleX:0.7722,scaleY:0.7722,x:117.55,y:137},0).wait(1).to({scaleX:0.7707,scaleY:0.7707,x:116.9,y:137.7},0).wait(1).to({scaleX:0.7694,scaleY:0.7694,x:116.25,y:138.3},0).wait(1).to({scaleX:0.7683,scaleY:0.7683,x:115.75,y:138.8},0).wait(1).to({scaleX:0.7674,scaleY:0.7674,x:115.35,y:139.2},0).wait(1).to({scaleX:0.7666,scaleY:0.7666,x:115.05,y:139.55},0).wait(1).to({scaleX:0.7661,scaleY:0.7661,x:114.75,y:139.8},0).wait(1).to({scaleX:0.7656,scaleY:0.7656,x:114.55,y:140},0).wait(1).to({scaleX:0.7653,scaleY:0.7653,x:114.4,y:140.15},0).wait(1).to({scaleX:0.7652,scaleY:0.7652,x:114.3,y:140.2},0).wait(1).to({regX:-7.6,regY:-310,scaleX:0.7651,scaleY:0.7651,x:126.85,y:162.6},0).wait(133).to({regX:-23.9,regY:-339.2,scaleX:0.764,scaleY:0.764,x:114.35,y:140.2},0).wait(1).to({scaleX:0.7625,scaleY:0.7625,x:114.4,y:140.1},0).wait(1).to({scaleX:0.7607,scaleY:0.7607,x:114.35,y:140.05},0).wait(1).to({scaleX:0.7584,scaleY:0.7584,y:139.9},0).wait(1).to({scaleX:0.7557,scaleY:0.7557,x:114.4,y:139.75},0).wait(1).to({scaleX:0.7525,scaleY:0.7525,y:139.6},0).wait(1).to({scaleX:0.7488,scaleY:0.7488,x:114.45,y:139.35},0).wait(1).to({scaleX:0.7444,scaleY:0.7444,y:139.15},0).wait(1).to({scaleX:0.7394,scaleY:0.7394,x:114.55,y:138.85},0).wait(1).to({scaleX:0.7336,scaleY:0.7336,y:138.55},0).wait(1).to({scaleX:0.727,scaleY:0.727,x:114.6,y:138.2},0).wait(1).to({scaleX:0.7196,scaleY:0.7196,x:114.65,y:137.8},0).wait(1).to({scaleX:0.7114,scaleY:0.7114,x:114.7,y:137.35},0).wait(1).to({scaleX:0.7024,scaleY:0.7024,x:114.75,y:136.9},0).wait(1).to({scaleX:0.6928,scaleY:0.6928,x:114.85,y:136.35},0).wait(1).to({scaleX:0.6827,scaleY:0.6827,x:114.9,y:135.8},0).wait(1).to({scaleX:0.6726,scaleY:0.6726,x:115,y:135.3},0).wait(1).to({scaleX:0.6626,scaleY:0.6626,x:115.05,y:134.75},0).wait(1).to({scaleX:0.6529,scaleY:0.6529,x:115.1,y:134.25},0).wait(1).to({scaleX:0.6438,scaleY:0.6438,x:115.15,y:133.75},0).wait(1).to({scaleX:0.6354,scaleY:0.6354,x:115.2,y:133.3},0).wait(1).to({scaleX:0.6276,scaleY:0.6276,x:115.3,y:132.9},0).wait(1).to({scaleX:0.6206,scaleY:0.6206,y:132.5},0).wait(1).to({scaleX:0.6142,scaleY:0.6142,x:115.35,y:132.15},0).wait(1).to({scaleX:0.6085,scaleY:0.6085,x:115.4,y:131.85},0).wait(1).to({scaleX:0.6034,scaleY:0.6034,x:115.45,y:131.6},0).wait(1).to({scaleX:0.5987,scaleY:0.5987,x:115.5,y:131.35},0).wait(1).to({scaleX:0.5946,scaleY:0.5946,x:115.55,y:131.1},0).wait(1).to({scaleX:0.5909,scaleY:0.5909,y:130.9},0).wait(1).to({scaleX:0.5877,scaleY:0.5877,y:130.7},0).wait(1).to({scaleX:0.5847,scaleY:0.5847,y:130.6},0).wait(1).to({scaleX:0.5822,scaleY:0.5822,x:115.6,y:130.45},0).wait(1).to({scaleX:0.5799,scaleY:0.5799,x:115.65,y:130.35},0).wait(1).to({scaleX:0.5779,scaleY:0.5779,y:130.2},0).wait(1).to({scaleX:0.5762,scaleY:0.5762,y:130.15},0).wait(1).to({scaleX:0.5747,scaleY:0.5747,y:130.05},0).wait(1).to({scaleX:0.5735,scaleY:0.5735,y:130},0).wait(1).to({scaleX:0.5724,scaleY:0.5724,y:129.95},0).wait(1).to({scaleX:0.5716,scaleY:0.5716,x:115.7,y:129.9},0).wait(1).to({scaleX:0.5709,scaleY:0.5709,x:115.65,y:129.85},0).wait(1).to({scaleX:0.5704,scaleY:0.5704},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:115.7,y:129.8},0).wait(1).to({scaleX:0.5698,scaleY:0.5698,y:129.75},0).wait(1).to({regX:-7.5,regY:-310.1,x:125.05,y:146.4},0).wait(118).to({regY:-310,scaleX:0.6495,scaleY:0.6495,y:156.1},49,cjs.Ease.quadInOut).wait(223).to({regY:-310.1,scaleX:0.7404,scaleY:0.7404,x:125.2,y:162.95},35,cjs.Ease.quadInOut).wait(115).to({regY:-310,scaleX:0.7774,scaleY:0.7774,x:124.55,y:168.6},24,cjs.Ease.quadInOut).wait(72).to({regX:-23.9,regY:-339.2,scaleX:0.7696,scaleY:0.7696,x:111.95,y:145.45},0).wait(1).to({scaleX:0.7483,scaleY:0.7483,x:112.45,y:144.4},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:113.1,y:143},0).wait(1).to({scaleX:0.6905,scaleY:0.6905,x:113.75,y:141.5},0).wait(1).to({scaleX:0.6628,scaleY:0.6628,x:114.4,y:140.1},0).wait(1).to({scaleX:0.638,scaleY:0.638,x:114.95,y:138.85},0).wait(1).to({scaleX:0.6163,scaleY:0.6163,x:115.45,y:137.75},0).wait(1).to({scaleX:0.5975,scaleY:0.5975,x:115.85,y:136.8},0).wait(1).to({scaleX:0.5812,scaleY:0.5812,x:116.25,y:135.95},0).wait(1).to({scaleX:0.5673,scaleY:0.5673,x:116.55,y:135.3},0).wait(1).to({scaleX:0.5554,scaleY:0.5554,x:116.85,y:134.65},0).wait(1).to({scaleX:0.5454,scaleY:0.5454,x:117.05,y:134.15},0).wait(1).to({scaleX:0.537,scaleY:0.537,x:117.25,y:133.75},0).wait(1).to({scaleX:0.5301,scaleY:0.5301,x:117.4,y:133.4},0).wait(1).to({scaleX:0.5246,scaleY:0.5246,x:117.5,y:133.1},0).wait(1).to({scaleX:0.5202,scaleY:0.5202,x:117.6,y:132.9},0).wait(1).to({scaleX:0.517,scaleY:0.517,x:117.7,y:132.75},0).wait(1).to({scaleX:0.5148,scaleY:0.5148,x:117.75,y:132.65},0).wait(1).to({scaleX:0.5135,scaleY:0.5135,x:117.8,y:132.6},0).wait(1).to({regX:-7.5,regY:-310,scaleX:0.5131,scaleY:0.5131,x:126.2,y:147.55},0).to({_off:true},122).wait(67));
    
        // bg
        this.bg1 = new lib.bg_zoom_half();
        this.bg1.name = "bg1";
        this.bg1.parent = this;
        this.bg1.setTransform(-1.25,197.85,0.8,0.8,0,0,0,333,349.9);
    
        this.timeline.addTween(cjs.Tween.get(this.bg1).wait(15).to({scaleX:0.8722,scaleY:0.8722,x:196.7,y:116.6},0).to({x:177.75},45).wait(1).to({regX:281.6,regY:247.4,scaleX:0.8716,scaleY:0.8716,x:132.65,y:27.55},0).wait(1).to({scaleX:0.8705,scaleY:0.8705,x:132.15,y:28.15},0).wait(1).to({scaleX:0.8689,scaleY:0.8689,x:131.55,y:28.95},0).wait(1).to({scaleX:0.8669,scaleY:0.8669,x:130.65,y:30.05},0).wait(1).to({scaleX:0.8642,scaleY:0.8642,x:129.55,y:31.45},0).wait(1).to({scaleX:0.8609,scaleY:0.8609,x:128.15,y:33.25},0).wait(1).to({scaleX:0.8568,scaleY:0.8568,x:126.45,y:35.45},0).wait(1).to({scaleX:0.852,scaleY:0.852,x:124.35,y:37.95},0).wait(1).to({scaleX:0.8463,scaleY:0.8463,x:122,y:41},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:119.3,y:44.35},0).wait(1).to({scaleX:0.8332,scaleY:0.8332,x:116.4,y:48},0).wait(1).to({scaleX:0.8262,scaleY:0.8262,x:113.45,y:51.7},0).wait(1).to({scaleX:0.8192,scaleY:0.8192,x:110.5,y:55.4},0).wait(1).to({scaleX:0.8126,scaleY:0.8126,x:107.7,y:58.95},0).wait(1).to({scaleX:0.8065,scaleY:0.8065,x:105.1,y:62.2},0).wait(1).to({scaleX:0.8009,scaleY:0.8009,x:102.75,y:65.15},0).wait(1).to({scaleX:0.7959,scaleY:0.7959,x:100.65,y:67.75},0).wait(1).to({scaleX:0.7915,scaleY:0.7915,x:98.75,y:70.1},0).wait(1).to({scaleX:0.7876,scaleY:0.7876,x:97.1,y:72.25},0).wait(1).to({scaleX:0.7841,scaleY:0.7841,x:95.6,y:74.1},0).wait(1).to({scaleX:0.7811,scaleY:0.7811,x:94.35,y:75.7},0).wait(1).to({scaleX:0.7784,scaleY:0.7784,x:93.2,y:77.1},0).wait(1).to({scaleX:0.776,scaleY:0.776,x:92.2,y:78.4},0).wait(1).to({scaleX:0.774,scaleY:0.774,x:91.35,y:79.45},0).wait(1).to({scaleX:0.7722,scaleY:0.7722,x:90.6,y:80.4},0).wait(1).to({scaleX:0.7707,scaleY:0.7707,x:89.95,y:81.2},0).wait(1).to({scaleX:0.7694,scaleY:0.7694,x:89.4,y:81.9},0).wait(1).to({scaleX:0.7683,scaleY:0.7683,x:88.95,y:82.5},0).wait(1).to({scaleX:0.7674,scaleY:0.7674,x:88.55,y:82.95},0).wait(1).to({scaleX:0.7667,scaleY:0.7667,x:88.25,y:83.35},0).wait(1).to({scaleX:0.7661,scaleY:0.7661,x:87.95,y:83.7},0).wait(1).to({scaleX:0.7656,scaleY:0.7656,x:87.8,y:83.85},0).wait(1).to({scaleX:0.7653,scaleY:0.7653,x:87.65,y:84.05},0).wait(1).to({scaleX:0.7652,scaleY:0.7652,x:87.6,y:84.15},0).wait(1).to({regX:333,regY:349.9,scaleX:0.7651,scaleY:0.7651,x:126.9,y:162.55},0).wait(133).to({regX:281.6,regY:247.4,scaleX:0.764,scaleY:0.764,x:87.65,y:84.2},0).wait(1).to({scaleX:0.7625,scaleY:0.7625},0).wait(1).to({scaleX:0.7607,scaleY:0.7607,x:87.75,y:84.25},0).wait(1).to({scaleX:0.7584,scaleY:0.7584,x:87.9,y:84.3},0).wait(1).to({scaleX:0.7558,scaleY:0.7558,x:87.95,y:84.35},0).wait(1).to({scaleX:0.7526,scaleY:0.7526,x:88.1,y:84.45},0).wait(1).to({scaleX:0.7488,scaleY:0.7488,x:88.25,y:84.5},0).wait(1).to({scaleX:0.7444,scaleY:0.7444,x:88.45,y:84.55},0).wait(1).to({scaleX:0.7394,scaleY:0.7394,x:88.65,y:84.65},0).wait(1).to({scaleX:0.7336,scaleY:0.7336,x:88.9,y:84.8},0).wait(1).to({scaleX:0.727,scaleY:0.727,x:89.15,y:84.9},0).wait(1).to({scaleX:0.7196,scaleY:0.7196,x:89.5,y:85.1},0).wait(1).to({scaleX:0.7114,scaleY:0.7114,x:89.8,y:85.25},0).wait(1).to({scaleX:0.7024,scaleY:0.7024,x:90.2,y:85.4},0).wait(1).to({scaleX:0.6928,scaleY:0.6928,x:90.65,y:85.6},0).wait(1).to({scaleX:0.6827,scaleY:0.6827,x:91,y:85.8},0).wait(1).to({scaleX:0.6726,scaleY:0.6726,x:91.45,y:86},0).wait(1).to({scaleX:0.6626,scaleY:0.6626,x:91.85,y:86.2},0).wait(1).to({scaleX:0.6529,scaleY:0.6529,x:92.25,y:86.4},0).wait(1).to({scaleX:0.6438,scaleY:0.6438,x:92.65,y:86.6},0).wait(1).to({scaleX:0.6354,scaleY:0.6354,x:93,y:86.75},0).wait(1).to({scaleX:0.6277,scaleY:0.6277,x:93.35,y:86.9},0).wait(1).to({scaleX:0.6206,scaleY:0.6206,x:93.6,y:87.05},0).wait(1).to({scaleX:0.6143,scaleY:0.6143,x:93.85,y:87.15},0).wait(1).to({scaleX:0.6085,scaleY:0.6085,x:94.1,y:87.25},0).wait(1).to({scaleX:0.6034,scaleY:0.6034,x:94.35,y:87.35},0).wait(1).to({scaleX:0.5987,scaleY:0.5987,x:94.55,y:87.5},0).wait(1).to({scaleX:0.5946,scaleY:0.5946,x:94.7,y:87.55},0).wait(1).to({scaleX:0.5909,scaleY:0.5909,x:94.85,y:87.6},0).wait(1).to({scaleX:0.5877,scaleY:0.5877,x:95,y:87.7},0).wait(1).to({scaleX:0.5847,scaleY:0.5847,x:95.1},0).wait(1).to({scaleX:0.5822,scaleY:0.5822,x:95.25,y:87.8},0).wait(1).to({scaleX:0.5799,scaleY:0.5799,x:95.3},0).wait(1).to({scaleX:0.5779,scaleY:0.5779,x:95.4,y:87.9},0).wait(1).to({scaleX:0.5762,scaleY:0.5762,x:95.45},0).wait(1).to({scaleX:0.5747,scaleY:0.5747,x:95.55,y:87.95},0).wait(1).to({scaleX:0.5735,scaleY:0.5735,x:95.6,y:88},0).wait(1).to({scaleX:0.5724,scaleY:0.5724,x:95.65,y:87.95},0).wait(1).to({scaleX:0.5716,scaleY:0.5716,y:88},0).wait(1).to({scaleX:0.5709,scaleY:0.5709,x:95.7},0).wait(1).to({scaleX:0.5704,scaleY:0.5704},0).wait(1).to({scaleX:0.57,scaleY:0.57},0).wait(1).to({scaleX:0.5698,scaleY:0.5698,x:95.75},0).wait(1).to({regX:333.1,regY:349.9,x:125.05,y:146.4},0).wait(118).to({regX:333,scaleX:0.6495,scaleY:0.6495,x:125,y:156},49,cjs.Ease.quadInOut).wait(223).to({scaleX:0.7404,scaleY:0.7404,x:125.15,y:162.95},35,cjs.Ease.quadInOut).wait(115).to({regX:333.1,scaleX:0.7774,scaleY:0.7774,x:124.6,y:168.5},24,cjs.Ease.quadInOut).wait(72).to({regX:281.6,regY:247.4,scaleX:0.7696,scaleY:0.7696,x:85.05,y:89.05},0).wait(1).to({scaleX:0.7483,scaleY:0.7483,x:86.3,y:89.55},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:87.9,y:90.2},0).wait(1).to({scaleX:0.6905,scaleY:0.6905,x:89.6,y:90.85},0).wait(1).to({scaleX:0.6628,scaleY:0.6628,x:91.2,y:91.5},0).wait(1).to({scaleX:0.638,scaleY:0.638,x:92.6,y:92.05},0).wait(1).to({scaleX:0.6163,scaleY:0.6163,x:93.9,y:92.55},0).wait(1).to({scaleX:0.5975,scaleY:0.5975,x:94.95,y:93},0).wait(1).to({scaleX:0.5812,scaleY:0.5812,x:95.9,y:93.4},0).wait(1).to({scaleX:0.5673,scaleY:0.5673,x:96.7,y:93.7},0).wait(1).to({scaleX:0.5554,scaleY:0.5554,x:97.4,y:93.95},0).wait(1).to({scaleX:0.5454,scaleY:0.5454,x:98,y:94.2},0).wait(1).to({scaleX:0.537,scaleY:0.537,x:98.45,y:94.4},0).wait(1).to({scaleX:0.5301,scaleY:0.5301,x:98.85,y:94.55},0).wait(1).to({scaleX:0.5246,scaleY:0.5246,x:99.15,y:94.65},0).wait(1).to({scaleX:0.5202,scaleY:0.5202,x:99.45,y:94.75},0).wait(1).to({scaleX:0.517,scaleY:0.517,x:99.6,y:94.85},0).wait(1).to({scaleX:0.5148,scaleY:0.5148,x:99.75,y:94.9},0).wait(1).to({scaleX:0.5135,scaleY:0.5135,x:99.8,y:94.95},0).wait(1).to({regX:333,regY:349.9,scaleX:0.5131,scaleY:0.5131,x:126.2,y:147.5},0).to({_off:true},122).wait(67));
    
        // SP_btn_window
        this.toggle_btn = new lib.btn_window();
        this.toggle_btn.name = "toggle_btn";
        this.toggle_btn.parent = this;
        this.toggle_btn.setTransform(200,200);
    
        this.timeline.addTween(cjs.Tween.get(this.toggle_btn).to({_off:true},1036).wait(79));
    
        // btn
        this.stage_btn = new lib.button();
        this.stage_btn.name = "stage_btn";
        this.stage_btn.parent = this;
        this.stage_btn.setTransform(120,155);
    
        this.timeline.addTween(cjs.Tween.get(this.stage_btn).to({_off:true},1048).wait(62).to({_off:false},0).wait(5));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-282,-720,902,1383);
    // library properties:
    lib.properties = {
        id: '_440_2',
        width: 240,
        height: 310,
        fps: 12,
        color: "#FFFFFF",
        opacity: 1.00,
        manifest: [
            {src:"images/bg.jpg", id:"_440_2_bg"},
            {src:"images/ch_base.png", id:"_440_2_ch_base"},
            {src:"images/ch_face2.png", id:"_440_2_ch_face2"},
            {src:"images/ch_face3.png", id:"_440_2_ch_face3"},
            {src:"images/ch_face4.png", id:"_440_2_ch_face4"},
            {src:"images/ch_face5.png", id:"_440_2_ch_face5"},
            {src:"images/ch_face6.png", id:"_440_2_ch_face6"},
            {src:"images/ch_face7.png", id:"_440_2_ch_face7"},
            {src:"images/ch_face8.png", id:"_440_2_ch_face8"},
            {src:"images/ch_face9.png", id:"ch_face9"},
            {src:"images/ef_prism1.png", id:"ef_prism1"},
            {src:"images/finish.jpg", id:"finish"},
            {src:"images/finish_blur.jpg", id:"finish_blur"},
            {src:"images/hi.png", id:"hi"},
            {src:"images/kirakira.png", id:"kirakira"},
            {src:"images/tie_fp.png", id:"tie_fp"},
            {src:"images/tie_sp.png", id:"tie_sp"}
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
    an.compositions['_440_2'] = {
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
    