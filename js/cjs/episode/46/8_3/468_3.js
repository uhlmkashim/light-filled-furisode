(function (cjs, an) {

    var p; // shortcut to reference prototypes
    var lib={};var ss={};var img={};
    lib.ssMetadata = [];
    
    
    // symbols:
    
    
    
    (lib.bg2 = function() {
        this.initialize(img._468_3_bg2);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,1160,1396);
    
    
    (lib.book1 = function() {
        this.initialize(img._468_3_book1);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,458,272);
    
    
    (lib.book2 = function() {
        this.initialize(img._468_3_book2);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,1163,1400);
    
    
    (lib.book3 = function() {
        this.initialize(img._468_3_book3);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,122,127);
    
    
    (lib.ch_base = function() {
        this.initialize(img._468_3_ch_base);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,1160,1396);
    
    
    (lib.ch_face2 = function() {
        this.initialize(img._468_3_ch_face2);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,280,240);
    
    
    (lib.ch_face3 = function() {
        this.initialize(img._468_3_ch_face3);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,280,240);
    
    
    (lib.ch_face4 = function() {
        this.initialize(img._468_3_ch_face4);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,280,240);
    
    
    (lib.ch_face5 = function() {
        this.initialize(img._468_3_ch_face5);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,280,240);
    
    
    (lib.ch_face6 = function() {
        this.initialize(img._468_3_ch_face6);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,280,240);
    
    
    (lib.finish = function() {
        this.initialize(img._468_3_finish);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,480,620);
    
    
    (lib.finish_blur = function() {
        this.initialize(img._468_3_finish_blur);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,480,620);
    
    
    (lib.kira = function() {
        this.initialize(img._468_3_kira);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,209,283);
    
    
    (lib.tie_fp = function() {
        this.initialize(img._468_3_tie_fp);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,240,32);
    
    
    (lib.tie_sp = function() {
        this.initialize(img._468_3_tie_sp);
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
    
    
    (lib.ha02 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));
    
        // レイヤー_2
        this.instance = new lib.book3();
        this.instance.parent = this;
        this.instance.setTransform(-44.25,-5.15,0.5,0.5,-39.6894);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-44.2,-44.1,87.5,87.80000000000001);
    
    
    (lib.g_snow = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // レイヤー_1
        this.instance = new lib.book2();
        this.instance.parent = this;
        this.instance.setTransform(-291,-350,0.5,0.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-291,-350,581.5,700);
    
    
    (lib.g_book1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // レイヤー_1
        this.instance = new lib.book1();
        this.instance.parent = this;
        this.instance.setTransform(-115,-68,0.5,0.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-115,-68,229,136);
    
    
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
    
    
    (lib.kira_1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // レイヤー_1
        this.instance = new lib.kira();
        this.instance.parent = this;
        this.instance.setTransform(-52,-71,0.5,0.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.kira_1, new cjs.Rectangle(-52,-71,104.5,141.5), null);
    
    
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
    
    }).prototype = getMCSymbolPrototype(lib.character1_face_eyeclose, new cjs.Rectangle(0,0,140,120), null);
    
    
    (lib.character1_base = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // base
        this.instance = new lib.ch_base();
        this.instance.parent = this;
        this.instance.setTransform(-120,-396,0.5,0.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.character1_base, new cjs.Rectangle(-120,-396,580,698), null);
    
    
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
    
    
    (lib.mc_snow = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // timeline functions:
        this.frame_396 = function() {
            this.gotoAndPlay(210);
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(396).call(this.frame_396).wait(228));
    
        // レイヤー_1 コピー 4
        this.instance = new lib.g_snow("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(335.35,-264,0.6417,0.5365,-9.2263,0,0,290.9,350);
        this.instance.alpha = 0.1992;
        this.instance._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(78).to({_off:false},0).wait(1).to({regX:-0.3,regY:0,scaleX:0.6416,rotation:-9.3806,x:118.5,y:-407.8,alpha:0.2108},0).wait(1).to({rotation:0,skewX:-9.5348,skewY:-9.4424,x:116.25,y:-396.3,alpha:0.2224},0).wait(1).to({scaleY:0.5366,skewX:-9.6889,skewY:-9.5505,x:113.95,y:-384.8,alpha:0.234},0).wait(1).to({skewX:-9.8426,skewY:-9.6583,x:111.7,y:-373.3,alpha:0.2456},0).wait(1).to({scaleX:0.6415,skewX:-9.996,skewY:-9.7659,x:109.45,y:-361.85,alpha:0.2571},0).wait(1).to({scaleY:0.5367,skewX:-10.1489,skewY:-9.8731,x:107.2,y:-350.45,alpha:0.2686},0).wait(1).to({skewX:-10.3013,skewY:-9.98,x:104.95,y:-339.05,alpha:0.2801},0).wait(1).to({skewX:-10.453,skewY:-10.0864,x:102.75,y:-327.7,alpha:0.2915},0).wait(1).to({scaleX:0.6414,skewX:-10.604,skewY:-10.1923,x:100.55,y:-316.45,alpha:0.3028},0).wait(1).to({scaleY:0.5368,skewX:-10.7541,skewY:-10.2976,x:98.3,y:-305.2,alpha:0.3141},0).wait(1).to({skewX:-10.9034,skewY:-10.4023,x:96.15,y:-294.05,alpha:0.3253},0).wait(1).to({skewX:-11.0516,skewY:-10.5062,x:93.95,y:-283,alpha:0.3365},0).wait(1).to({scaleX:0.6413,scaleY:0.5369,skewX:-11.1987,skewY:-10.6094,x:91.8,y:-272,alpha:0.3476},0).wait(1).to({skewX:-11.3447,skewY:-10.7118,x:89.65,y:-261.05,alpha:0.3585},0).wait(1).to({skewX:-11.4893,skewY:-10.8133,x:87.55,y:-250.25,alpha:0.3694},0).wait(1).to({skewX:-11.6326,skewY:-10.9138,x:85.45,y:-239.55,alpha:0.3802},0).wait(1).to({scaleX:0.6412,scaleY:0.537,skewX:-11.7745,skewY:-11.0133,x:83.4,y:-228.95,alpha:0.3909},0).wait(1).to({skewX:-11.9148,skewY:-11.1117,x:81.3,y:-218.45,alpha:0.4014},0).wait(1).to({skewX:-12.0536,skewY:-11.2091,x:79.3,y:-208.05,alpha:0.4119},0).wait(1).to({skewX:-12.1907,skewY:-11.3052,x:77.3,y:-197.8,alpha:0.4222},0).wait(1).to({scaleX:0.6411,scaleY:0.5371,skewX:-12.3262,skewY:-11.4002,x:75.3,y:-187.65,alpha:0.4323},0).wait(1).to({skewX:-12.4598,skewY:-11.4939,x:73.35,y:-177.65,alpha:0.4424},0).wait(1).to({skewX:-12.5916,skewY:-11.5864,x:71.45,y:-167.8,alpha:0.4523},0).wait(1).to({scaleY:0.5372,skewX:-12.7215,skewY:-11.6775,x:69.55,y:-158.1,alpha:0.4621},0).wait(1).to({skewX:-12.8495,skewY:-11.7673,x:67.65,y:-148.5,alpha:0.4717},0).wait(1).to({scaleX:0.641,skewX:-12.9756,skewY:-11.8557,x:65.85,y:-139.05,alpha:0.4812},0).wait(1).to({skewX:-13.0997,skewY:-11.9427,x:64,y:-129.8,alpha:0.4905},0).wait(1).to({skewX:-13.2217,skewY:-12.0283,x:62.25,y:-120.65,alpha:0.4997},0).wait(1).to({scaleY:0.5373,skewX:-13.3417,skewY:-12.1125,x:60.5,y:-111.65,alpha:0.5087},0).wait(1).to({scaleX:0.6409,skewX:-13.4597,skewY:-12.1952,x:58.8,y:-102.85,alpha:0.5176},0).wait(1).to({skewX:-13.5755,skewY:-12.2765,x:57.1,y:-94.15,alpha:0.5263},0).wait(1).to({skewX:-13.6893,skewY:-12.3563,x:55.45,y:-85.65,alpha:0.5349},0).wait(1).to({scaleY:0.5374,skewX:-13.801,skewY:-12.4347,x:53.8,y:-77.25,alpha:0.5433},0).wait(1).to({skewX:-13.9106,skewY:-12.5116,x:52.2,y:-69.05,alpha:0.5515},0).wait(1).to({skewX:-14.0182,skewY:-12.587,x:50.65,y:-61,alpha:0.5596},0).wait(1).to({scaleX:0.6408,skewX:-14.1236,skewY:-12.6609,x:49.1,y:-53.1,alpha:0.5675},0).wait(1).to({skewX:-14.227,skewY:-12.7334,x:47.6,y:-45.35,alpha:0.5753},0).wait(1).to({scaleY:0.5375,skewX:-14.3283,skewY:-12.8045,x:46.15,y:-37.8,alpha:0.5829},0).wait(1).to({skewX:-14.4276,skewY:-12.8742,x:44.7,y:-30.35,alpha:0.5904},0).wait(1).to({skewX:-14.5249,skewY:-12.9424,x:43.3,y:-23.05,alpha:0.5977},0).wait(1).to({scaleX:0.6407,skewX:-14.6201,skewY:-13.0092,x:41.9,y:-15.9,alpha:0.6049},0).wait(1).to({skewX:-14.7134,skewY:-13.0746,x:40.55,y:-8.95,alpha:0.6119},0).wait(1).to({skewX:-14.8047,skewY:-13.1386,x:39.2,y:-2.1,alpha:0.6187},0).wait(1).to({scaleY:0.5376,skewX:-14.8941,skewY:-13.2013,x:37.9,y:4.55,alpha:0.6255},0).wait(1).to({skewX:-14.9816,skewY:-13.2627,x:36.65,y:11.1,alpha:0.632},0).wait(1).to({skewX:-15.0672,skewY:-13.3227,x:35.4,y:17.55,alpha:0.6385},0).wait(1).to({skewX:-15.1509,skewY:-13.3815,x:34.2,y:23.8,alpha:0.6448},0).wait(1).to({scaleX:0.6406,skewX:-15.2329,skewY:-13.4389,x:33,y:29.95,alpha:0.6509},0).wait(1).to({skewX:-15.313,skewY:-13.4951,x:31.85,y:35.95,alpha:0.657},0).wait(1).to({scaleY:0.5377,skewX:-15.3914,skewY:-13.5501,x:30.7,y:41.85,alpha:0.6629},0).wait(1).to({skewX:-15.468,skewY:-13.6039,x:29.6,y:47.6,alpha:0.6686},0).wait(1).to({skewX:-15.543,skewY:-13.6565,x:28.5,y:53.2,alpha:0.6743},0).wait(1).to({skewX:-15.6163,skewY:-13.7079,x:27.45,y:58.7,alpha:0.6798},0).wait(1).to({skewX:-15.688,skewY:-13.7581,x:26.4,y:64.05,alpha:0.6852},0).wait(1).to({skewX:-15.758,skewY:-13.8073,x:25.4,y:69.3,alpha:0.6904},0).wait(1).to({scaleX:0.6405,skewX:-15.8265,skewY:-13.8553,x:24.4,y:74.45,alpha:0.6956},0).wait(1).to({scaleY:0.5378,skewX:-15.8935,skewY:-13.9023,x:23.45,y:79.45,alpha:0.7006},0).wait(1).to({skewX:-15.9589,skewY:-13.9482,x:22.5,y:84.4,alpha:0.7056},0).wait(1).to({skewX:-16.0229,skewY:-13.9931,x:21.55,y:89.2,alpha:0.7104},0).wait(1).to({skewX:-16.0855,skewY:-14.0369,x:20.65,y:93.85,alpha:0.7151},0).wait(1).to({skewX:-16.1466,skewY:-14.0798,x:19.8,y:98.45,alpha:0.7197},0).wait(1).to({skewX:-16.2063,skewY:-14.1217,x:18.9,y:102.95,alpha:0.7242},0).wait(1).to({skewX:-16.2647,skewY:-14.1627,x:18.05,y:107.3,alpha:0.7285},0).wait(1).to({skewX:-16.3218,skewY:-14.2027,x:17.25,y:111.6,alpha:0.7328},0).wait(1).to({skewX:-16.3776,skewY:-14.2418,x:16.45,y:115.8,alpha:0.737},0).wait(1).to({scaleX:0.6404,scaleY:0.5379,skewX:-16.4321,skewY:-14.2801,x:15.65,y:119.85,alpha:0.7411},0).wait(1).to({skewX:-16.4853,skewY:-14.3174,x:14.9,y:123.85,alpha:0.7451},0).wait(1).to({skewX:-16.5374,skewY:-14.3539,x:14.15,y:127.75,alpha:0.7491},0).wait(1).to({skewX:-16.5883,skewY:-14.3896,x:13.4,y:131.6,alpha:0.7529},0).wait(1).to({skewX:-16.638,skewY:-14.4245,x:12.7,y:135.3,alpha:0.7566},0).wait(1).to({skewX:-16.6865,skewY:-14.4585,x:12,y:138.95,alpha:0.7603},0).wait(1).to({skewX:-16.734,skewY:-14.4918,x:11.3,y:142.5,alpha:0.7638},0).wait(1).to({skewX:-16.7804,skewY:-14.5244,x:10.6,y:146,alpha:0.7673},0).wait(1).to({skewX:-16.8257,skewY:-14.5561,x:9.95,y:149.4,alpha:0.7707},0).wait(1).to({skewX:-16.87,skewY:-14.5872,x:9.35,y:152.7,alpha:0.7741},0).wait(1).to({scaleY:0.538,skewX:-16.9132,skewY:-14.6175,x:8.7,y:155.95,alpha:0.7773},0).wait(1).to({skewX:-16.9555,skewY:-14.6472,x:8.1,y:159.15,alpha:0.7805},0).wait(1).to({scaleX:0.6403,skewX:-16.9968,skewY:-14.6761,x:7.5,y:162.25,alpha:0.7836},0).wait(1).to({skewX:-17.0371,skewY:-14.7044,x:6.9,y:165.25,alpha:0.7866},0).wait(1).to({skewX:-17.0765,skewY:-14.7321,x:6.35,y:168.2,alpha:0.7896},0).wait(1).to({skewX:-17.115,skewY:-14.759,x:5.8,y:171.1,alpha:0.7925},0).wait(1).to({skewX:-17.1526,skewY:-14.7854,x:5.25,y:173.95,alpha:0.7953},0).wait(1).to({skewX:-17.1893,skewY:-14.8112,x:4.7,y:176.7,alpha:0.7981},0).wait(1).to({regX:290.8,regY:350.2,skewX:-17.2252,skewY:-14.8363,x:240.3,y:311.5,alpha:0.8008},0).wait(1).to({regX:-0.3,regY:0,skewX:-17.2253,skewY:-14.8364,x:4,y:181.85,alpha:0.7827},0).wait(1).to({x:3.7,y:184.4,alpha:0.7651},0).wait(1).to({skewX:-17.2254,skewY:-14.8365,x:3.4,y:186.85,alpha:0.7479},0).wait(1).to({skewX:-17.2255,x:3.15,y:189.25,alpha:0.7311},0).wait(1).to({skewX:-17.2256,x:2.85,y:191.6,alpha:0.7146},0).wait(1).to({skewY:-14.8366,x:2.6,y:193.9,alpha:0.6986},0).wait(1).to({skewX:-17.2257,x:2.35,y:196.15,alpha:0.6829},0).wait(1).to({skewX:-17.2258,x:2.1,y:198.35,alpha:0.6676},0).wait(1).to({skewY:-14.8367,x:1.85,y:200.5,alpha:0.6526},0).wait(1).to({skewX:-17.2259,x:1.6,y:202.6,alpha:0.638},0).wait(1).to({skewX:-17.226,x:1.35,y:204.65,alpha:0.6237},0).wait(1).to({skewY:-14.8368,x:1.15,y:206.65,alpha:0.6098},0).wait(1).to({skewX:-17.2261,x:0.9,y:208.6,alpha:0.5962},0).wait(1).to({x:0.7,y:210.5,alpha:0.5829},0).wait(1).to({skewX:-17.2262,x:0.45,y:212.35,alpha:0.5699},0).wait(1).to({skewX:-17.2263,skewY:-14.8369,x:0.25,y:214.15,alpha:0.5573},0).wait(1).to({x:0.05,y:215.95,alpha:0.5449},0).wait(1).to({skewX:-17.2264,x:-0.15,y:217.65,alpha:0.5329},0).wait(1).to({skewY:-14.837,x:-0.3,y:219.35,alpha:0.5211},0).wait(1).to({skewX:-17.2265,x:-0.5,y:221,alpha:0.5097},0).wait(1).to({x:-0.65,y:222.6,alpha:0.4985},0).wait(1).to({skewX:-17.2266,x:-0.85,y:224.15,alpha:0.4876},0).wait(1).to({skewY:-14.8371,x:-1,y:225.65,alpha:0.4769},0).wait(1).to({x:-1.2,y:227.15,alpha:0.4666},0).wait(1).to({skewX:-17.2267,x:-1.35,y:228.6,alpha:0.4565},0).wait(1).to({x:-1.5,y:230,alpha:0.4466},0).wait(1).to({skewX:-17.2268,x:-1.65,y:231.4,alpha:0.437},0).wait(1).to({skewY:-14.8372,x:-1.85,y:232.7,alpha:0.4277},0).wait(1).to({skewX:-17.2269,x:-2,y:234.05,alpha:0.4186},0).wait(1).to({x:-2.1,y:235.3,alpha:0.4098},0).wait(1).to({x:-2.25,y:236.55,alpha:0.4011},0).wait(1).to({skewX:-17.227,x:-2.4,y:237.75,alpha:0.3927},0).wait(1).to({skewY:-14.8373,x:-2.55,y:238.9,alpha:0.3846},0).wait(1).to({x:-2.65,y:240.05,alpha:0.3766},0).wait(1).to({skewX:-17.2271,x:-2.8,y:241.15,alpha:0.3689},0).wait(1).to({x:-2.9,y:242.2,alpha:0.3614},0).wait(1).to({x:-3.05,y:243.25,alpha:0.3541},0).wait(1).to({skewX:-17.2272,x:-3.15,y:244.3,alpha:0.3471},0).wait(1).to({skewY:-14.8374,x:-3.25,y:245.25,alpha:0.3402},0).wait(1).to({x:-3.4,y:246.2,alpha:0.3335},0).wait(1).to({skewX:-17.2273,x:-3.5,y:247.15,alpha:0.3271},0).wait(1).to({x:-3.6,y:248.05,alpha:0.3208},0).wait(1).to({x:-3.7,y:248.9,alpha:0.3147},0).wait(1).to({x:-3.8,y:249.75,alpha:0.3088},0).wait(1).to({skewX:-17.2274,x:-3.9,y:250.6,alpha:0.3031},0).wait(1).to({x:-3.95,y:251.35,alpha:0.2976},0).wait(1).to({skewY:-14.8375,x:-4.05,y:252.15,alpha:0.2922},0).wait(1).to({x:-4.15,y:252.85,alpha:0.2871},0).wait(1).to({skewX:-17.2275,x:-4.25,y:253.6,alpha:0.2821},0).wait(1).to({x:-4.3,y:254.3,alpha:0.2772},0).wait(1).to({x:-4.4,y:254.95,alpha:0.2726},0).wait(1).to({x:-4.45,y:255.6,alpha:0.2681},0).wait(1).to({x:-4.55,y:256.2,alpha:0.2638},0).wait(1).to({x:-4.6,y:256.8,alpha:0.2596},0).wait(1).to({skewX:-17.2276,x:-4.65,y:257.4,alpha:0.2556},0).wait(1).to({x:-4.75,y:257.95,alpha:0.2518},0).wait(1).to({skewY:-14.8376,x:-4.8,y:258.45,alpha:0.2481},0).wait(1).to({x:-4.85,y:258.95,alpha:0.2446},0).wait(1).to({x:-4.9,y:259.45,alpha:0.2412},0).wait(1).to({x:-4.95,y:259.9,alpha:0.2379},0).wait(1).to({skewX:-17.2277,x:-5,y:260.35,alpha:0.2348},0).wait(1).to({x:-5.05,y:260.8,alpha:0.2319},0).wait(1).to({x:-5.1,y:261.2,alpha:0.2291},0).wait(1).to({x:-5.15,y:261.55,alpha:0.2264},0).wait(1).to({x:-5.2,y:261.9,alpha:0.2239},0).wait(1).to({x:-5.25,y:262.25,alpha:0.2215},0).wait(1).to({y:262.6,alpha:0.2192},0).wait(1).to({x:-5.3,y:262.9,alpha:0.2171},0).wait(1).to({x:-5.35,y:263.2,alpha:0.2151},0).wait(1).to({skewX:-17.2278,y:263.45,alpha:0.2132},0).wait(1).to({x:-5.4,y:263.7,alpha:0.2115},0).wait(1).to({y:263.95,alpha:0.2098},0).wait(1).to({x:-5.45,y:264.15,alpha:0.2083},0).wait(1).to({y:264.35,alpha:0.2069},0).wait(1).to({x:-5.5,y:264.55,alpha:0.2057},0).wait(1).to({y:264.7,alpha:0.2045},0).wait(1).to({skewY:-14.8377,x:-5.55,y:264.85,alpha:0.2035},0).wait(1).to({y:264.95,alpha:0.2026},0).wait(1).to({y:265.1,alpha:0.2018},0).wait(1).to({y:265.2,alpha:0.2011},0).wait(1).to({x:-5.6,y:265.25,alpha:0.2005},0).wait(1).to({y:265.35,alpha:0.2},0).wait(1).to({y:265.4,alpha:0.1997},0).wait(1).to({y:265.45,alpha:0.1994},0).wait(1).to({alpha:0.1993},0).wait(1).to({regX:290.7,regY:350.2,x:230.35,y:397.7,alpha:0.1992},0).to({_off:true},1).wait(16).to({_off:false,regX:290.9,regY:350,scaleX:0.6417,scaleY:0.5365,rotation:-9.2263,skewX:0,skewY:0,x:335.35,y:-264},0).wait(1).to({regX:-0.3,regY:0,scaleX:0.6416,rotation:-9.3806,x:118.5,y:-407.8,alpha:0.2108},0).wait(1).to({rotation:0,skewX:-9.5348,skewY:-9.4424,x:116.25,y:-396.3,alpha:0.2224},0).wait(1).to({scaleY:0.5366,skewX:-9.6889,skewY:-9.5505,x:113.95,y:-384.8,alpha:0.234},0).wait(1).to({skewX:-9.8426,skewY:-9.6583,x:111.7,y:-373.3,alpha:0.2456},0).wait(1).to({scaleX:0.6415,skewX:-9.996,skewY:-9.7659,x:109.45,y:-361.85,alpha:0.2571},0).wait(1).to({scaleY:0.5367,skewX:-10.1489,skewY:-9.8731,x:107.2,y:-350.45,alpha:0.2686},0).wait(1).to({skewX:-10.3013,skewY:-9.98,x:104.95,y:-339.05,alpha:0.2801},0).wait(1).to({skewX:-10.453,skewY:-10.0864,x:102.75,y:-327.7,alpha:0.2915},0).wait(1).to({scaleX:0.6414,skewX:-10.604,skewY:-10.1923,x:100.55,y:-316.45,alpha:0.3028},0).wait(1).to({scaleY:0.5368,skewX:-10.7541,skewY:-10.2976,x:98.3,y:-305.2,alpha:0.3141},0).wait(1).to({skewX:-10.9034,skewY:-10.4023,x:96.15,y:-294.05,alpha:0.3253},0).wait(1).to({skewX:-11.0516,skewY:-10.5062,x:93.95,y:-283,alpha:0.3365},0).wait(1).to({scaleX:0.6413,scaleY:0.5369,skewX:-11.1987,skewY:-10.6094,x:91.8,y:-272,alpha:0.3476},0).wait(1).to({skewX:-11.3447,skewY:-10.7118,x:89.65,y:-261.05,alpha:0.3585},0).wait(1).to({skewX:-11.4893,skewY:-10.8133,x:87.55,y:-250.25,alpha:0.3694},0).wait(1).to({skewX:-11.6326,skewY:-10.9138,x:85.45,y:-239.55,alpha:0.3802},0).wait(1).to({scaleX:0.6412,scaleY:0.537,skewX:-11.7745,skewY:-11.0133,x:83.4,y:-228.95,alpha:0.3909},0).wait(1).to({skewX:-11.9148,skewY:-11.1117,x:81.3,y:-218.45,alpha:0.4014},0).wait(1).to({skewX:-12.0536,skewY:-11.2091,x:79.3,y:-208.05,alpha:0.4119},0).wait(1).to({skewX:-12.1907,skewY:-11.3052,x:77.3,y:-197.8,alpha:0.4222},0).wait(1).to({scaleX:0.6411,scaleY:0.5371,skewX:-12.3262,skewY:-11.4002,x:75.3,y:-187.65,alpha:0.4323},0).wait(1).to({skewX:-12.4598,skewY:-11.4939,x:73.35,y:-177.65,alpha:0.4424},0).wait(1).to({skewX:-12.5916,skewY:-11.5864,x:71.45,y:-167.8,alpha:0.4523},0).wait(1).to({scaleY:0.5372,skewX:-12.7215,skewY:-11.6775,x:69.55,y:-158.1,alpha:0.4621},0).wait(1).to({skewX:-12.8495,skewY:-11.7673,x:67.65,y:-148.5,alpha:0.4717},0).wait(1).to({scaleX:0.641,skewX:-12.9756,skewY:-11.8557,x:65.85,y:-139.05,alpha:0.4812},0).wait(1).to({skewX:-13.0997,skewY:-11.9427,x:64,y:-129.8,alpha:0.4905},0).wait(1).to({skewX:-13.2217,skewY:-12.0283,x:62.25,y:-120.65,alpha:0.4997},0).wait(1).to({scaleY:0.5373,skewX:-13.3417,skewY:-12.1125,x:60.5,y:-111.65,alpha:0.5087},0).wait(1).to({scaleX:0.6409,skewX:-13.4597,skewY:-12.1952,x:58.8,y:-102.85,alpha:0.5176},0).wait(1).to({skewX:-13.5755,skewY:-12.2765,x:57.1,y:-94.15,alpha:0.5263},0).wait(1).to({skewX:-13.6893,skewY:-12.3563,x:55.45,y:-85.65,alpha:0.5349},0).wait(1).to({scaleY:0.5374,skewX:-13.801,skewY:-12.4347,x:53.8,y:-77.25,alpha:0.5433},0).wait(1).to({skewX:-13.9106,skewY:-12.5116,x:52.2,y:-69.05,alpha:0.5515},0).wait(1).to({skewX:-14.0182,skewY:-12.587,x:50.65,y:-61,alpha:0.5596},0).wait(1).to({scaleX:0.6408,skewX:-14.1236,skewY:-12.6609,x:49.1,y:-53.1,alpha:0.5675},0).wait(1).to({skewX:-14.227,skewY:-12.7334,x:47.6,y:-45.35,alpha:0.5753},0).wait(1).to({scaleY:0.5375,skewX:-14.3283,skewY:-12.8045,x:46.15,y:-37.8,alpha:0.5829},0).wait(1).to({skewX:-14.4276,skewY:-12.8742,x:44.7,y:-30.35,alpha:0.5904},0).wait(1).to({skewX:-14.5249,skewY:-12.9424,x:43.3,y:-23.05,alpha:0.5977},0).wait(1).to({scaleX:0.6407,skewX:-14.6201,skewY:-13.0092,x:41.9,y:-15.9,alpha:0.6049},0).wait(1).to({skewX:-14.7134,skewY:-13.0746,x:40.55,y:-8.95,alpha:0.6119},0).wait(1).to({skewX:-14.8047,skewY:-13.1386,x:39.2,y:-2.1,alpha:0.6187},0).wait(1).to({scaleY:0.5376,skewX:-14.8941,skewY:-13.2013,x:37.9,y:4.55,alpha:0.6255},0).wait(1).to({skewX:-14.9816,skewY:-13.2627,x:36.65,y:11.1,alpha:0.632},0).wait(1).to({skewX:-15.0672,skewY:-13.3227,x:35.4,y:17.55,alpha:0.6385},0).wait(1).to({skewX:-15.1509,skewY:-13.3815,x:34.2,y:23.8,alpha:0.6448},0).wait(1).to({scaleX:0.6406,skewX:-15.2329,skewY:-13.4389,x:33,y:29.95,alpha:0.6509},0).wait(1).to({skewX:-15.313,skewY:-13.4951,x:31.85,y:35.95,alpha:0.657},0).wait(1).to({scaleY:0.5377,skewX:-15.3914,skewY:-13.5501,x:30.7,y:41.85,alpha:0.6629},0).wait(1).to({skewX:-15.468,skewY:-13.6039,x:29.6,y:47.6,alpha:0.6686},0).wait(1).to({skewX:-15.543,skewY:-13.6565,x:28.5,y:53.2,alpha:0.6743},0).wait(1).to({skewX:-15.6163,skewY:-13.7079,x:27.45,y:58.7,alpha:0.6798},0).wait(1).to({skewX:-15.688,skewY:-13.7581,x:26.4,y:64.05,alpha:0.6852},0).wait(1).to({skewX:-15.758,skewY:-13.8073,x:25.4,y:69.3,alpha:0.6904},0).wait(1).to({scaleX:0.6405,skewX:-15.8265,skewY:-13.8553,x:24.4,y:74.45,alpha:0.6956},0).wait(1).to({scaleY:0.5378,skewX:-15.8935,skewY:-13.9023,x:23.45,y:79.45,alpha:0.7006},0).wait(1).to({skewX:-15.9589,skewY:-13.9482,x:22.5,y:84.4,alpha:0.7056},0).wait(1).to({skewX:-16.0229,skewY:-13.9931,x:21.55,y:89.2,alpha:0.7104},0).wait(1).to({skewX:-16.0855,skewY:-14.0369,x:20.65,y:93.85,alpha:0.7151},0).wait(1).to({skewX:-16.1466,skewY:-14.0798,x:19.8,y:98.45,alpha:0.7197},0).wait(1).to({skewX:-16.2063,skewY:-14.1217,x:18.9,y:102.95,alpha:0.7242},0).wait(1).to({skewX:-16.2647,skewY:-14.1627,x:18.05,y:107.3,alpha:0.7285},0).wait(1).to({skewX:-16.3218,skewY:-14.2027,x:17.25,y:111.6,alpha:0.7328},0).wait(1).to({skewX:-16.3776,skewY:-14.2418,x:16.45,y:115.8,alpha:0.737},0).wait(1).to({scaleX:0.6404,scaleY:0.5379,skewX:-16.4321,skewY:-14.2801,x:15.65,y:119.85,alpha:0.7411},0).wait(1).to({skewX:-16.4853,skewY:-14.3174,x:14.9,y:123.85,alpha:0.7451},0).wait(1).to({skewX:-16.5374,skewY:-14.3539,x:14.15,y:127.75,alpha:0.7491},0).wait(1).to({skewX:-16.5883,skewY:-14.3896,x:13.4,y:131.6,alpha:0.7529},0).wait(1).to({skewX:-16.638,skewY:-14.4245,x:12.7,y:135.3,alpha:0.7566},0).wait(1).to({skewX:-16.6865,skewY:-14.4585,x:12,y:138.95,alpha:0.7603},0).wait(1).to({skewX:-16.734,skewY:-14.4918,x:11.3,y:142.5,alpha:0.7638},0).wait(1).to({skewX:-16.7804,skewY:-14.5244,x:10.6,y:146,alpha:0.7673},0).wait(1).to({skewX:-16.8257,skewY:-14.5561,x:9.95,y:149.4,alpha:0.7707},0).wait(1).to({skewX:-16.87,skewY:-14.5872,x:9.35,y:152.7,alpha:0.7741},0).wait(1).to({scaleY:0.538,skewX:-16.9132,skewY:-14.6175,x:8.7,y:155.95,alpha:0.7773},0).wait(1).to({skewX:-16.9555,skewY:-14.6472,x:8.1,y:159.15,alpha:0.7805},0).wait(1).to({scaleX:0.6403,skewX:-16.9968,skewY:-14.6761,x:7.5,y:162.25,alpha:0.7836},0).wait(1).to({skewX:-17.0371,skewY:-14.7044,x:6.9,y:165.25,alpha:0.7866},0).wait(1).to({skewX:-17.0765,skewY:-14.7321,x:6.35,y:168.2,alpha:0.7896},0).wait(1).to({skewX:-17.115,skewY:-14.759,x:5.8,y:171.1,alpha:0.7925},0).wait(1).to({skewX:-17.1526,skewY:-14.7854,x:5.25,y:173.95,alpha:0.7953},0).wait(1).to({skewX:-17.1893,skewY:-14.8112,x:4.7,y:176.7,alpha:0.7981},0).wait(1).to({regX:290.8,regY:350.2,skewX:-17.2252,skewY:-14.8363,x:240.3,y:311.5,alpha:0.8008},0).wait(1).to({regX:-0.3,regY:0,skewX:-17.2253,skewY:-14.8364,x:4,y:181.85,alpha:0.7827},0).wait(1).to({x:3.7,y:184.4,alpha:0.7651},0).wait(1).to({skewX:-17.2254,skewY:-14.8365,x:3.4,y:186.85,alpha:0.7479},0).wait(1).to({skewX:-17.2255,x:3.15,y:189.25,alpha:0.7311},0).wait(1).to({skewX:-17.2256,x:2.85,y:191.6,alpha:0.7146},0).wait(1).to({skewY:-14.8366,x:2.6,y:193.9,alpha:0.6986},0).wait(1).to({skewX:-17.2257,x:2.35,y:196.15,alpha:0.6829},0).wait(1).to({skewX:-17.2258,x:2.1,y:198.35,alpha:0.6676},0).wait(1).to({skewY:-14.8367,x:1.85,y:200.5,alpha:0.6526},0).wait(1).to({skewX:-17.2259,x:1.6,y:202.6,alpha:0.638},0).wait(1).to({skewX:-17.226,x:1.35,y:204.65,alpha:0.6237},0).wait(1).to({skewY:-14.8368,x:1.15,y:206.65,alpha:0.6098},0).wait(1).to({skewX:-17.2261,x:0.9,y:208.6,alpha:0.5962},0).wait(1).to({x:0.7,y:210.5,alpha:0.5829},0).wait(1).to({skewX:-17.2262,x:0.45,y:212.35,alpha:0.5699},0).wait(1).to({skewX:-17.2263,skewY:-14.8369,x:0.25,y:214.15,alpha:0.5573},0).wait(1).to({x:0.05,y:215.95,alpha:0.5449},0).wait(1).to({skewX:-17.2264,x:-0.15,y:217.65,alpha:0.5329},0).wait(1).to({skewY:-14.837,x:-0.3,y:219.35,alpha:0.5211},0).wait(1).to({skewX:-17.2265,x:-0.5,y:221,alpha:0.5097},0).wait(1).to({x:-0.65,y:222.6,alpha:0.4985},0).wait(1).to({skewX:-17.2266,x:-0.85,y:224.15,alpha:0.4876},0).wait(1).to({skewY:-14.8371,x:-1,y:225.65,alpha:0.4769},0).wait(1).to({x:-1.2,y:227.15,alpha:0.4666},0).wait(1).to({skewX:-17.2267,x:-1.35,y:228.6,alpha:0.4565},0).wait(1).to({x:-1.5,y:230,alpha:0.4466},0).wait(1).to({skewX:-17.2268,x:-1.65,y:231.4,alpha:0.437},0).wait(1).to({skewY:-14.8372,x:-1.85,y:232.7,alpha:0.4277},0).wait(1).to({skewX:-17.2269,x:-2,y:234.05,alpha:0.4186},0).wait(1).to({x:-2.1,y:235.3,alpha:0.4098},0).wait(1).to({x:-2.25,y:236.55,alpha:0.4011},0).wait(1).to({skewX:-17.227,x:-2.4,y:237.75,alpha:0.3927},0).wait(1).to({skewY:-14.8373,x:-2.55,y:238.9,alpha:0.3846},0).wait(1).to({x:-2.65,y:240.05,alpha:0.3766},0).wait(1).to({skewX:-17.2271,x:-2.8,y:241.15,alpha:0.3689},0).wait(1).to({x:-2.9,y:242.2,alpha:0.3614},0).wait(1).to({x:-3.05,y:243.25,alpha:0.3541},0).wait(1).to({skewX:-17.2272,x:-3.15,y:244.3,alpha:0.3471},0).wait(1).to({skewY:-14.8374,x:-3.25,y:245.25,alpha:0.3402},0).wait(1).to({x:-3.4,y:246.2,alpha:0.3335},0).wait(1).to({skewX:-17.2273,x:-3.5,y:247.15,alpha:0.3271},0).wait(1).to({x:-3.6,y:248.05,alpha:0.3208},0).wait(1).to({x:-3.7,y:248.9,alpha:0.3147},0).wait(1).to({x:-3.8,y:249.75,alpha:0.3088},0).wait(1).to({skewX:-17.2274,x:-3.9,y:250.6,alpha:0.3031},0).wait(1).to({x:-3.95,y:251.35,alpha:0.2976},0).wait(1).to({skewY:-14.8375,x:-4.05,y:252.15,alpha:0.2922},0).wait(1).to({x:-4.15,y:252.85,alpha:0.2871},0).wait(1).to({skewX:-17.2275,x:-4.25,y:253.6,alpha:0.2821},0).wait(1).to({x:-4.3,y:254.3,alpha:0.2772},0).wait(1).to({x:-4.4,y:254.95,alpha:0.2726},0).wait(1).to({x:-4.45,y:255.6,alpha:0.2681},0).wait(1).to({x:-4.55,y:256.2,alpha:0.2638},0).wait(1).to({x:-4.6,y:256.8,alpha:0.2596},0).wait(1).to({skewX:-17.2276,x:-4.65,y:257.4,alpha:0.2556},0).wait(1).to({x:-4.75,y:257.95,alpha:0.2518},0).wait(1).to({skewY:-14.8376,x:-4.8,y:258.45,alpha:0.2481},0).wait(1).to({x:-4.85,y:258.95,alpha:0.2446},0).wait(1).to({x:-4.9,y:259.45,alpha:0.2412},0).wait(1).to({x:-4.95,y:259.9,alpha:0.2379},0).wait(1).to({skewX:-17.2277,x:-5,y:260.35,alpha:0.2348},0).wait(1).to({x:-5.05,y:260.8,alpha:0.2319},0).wait(1).to({x:-5.1,y:261.2,alpha:0.2291},0).wait(1).to({x:-5.15,y:261.55,alpha:0.2264},0).wait(1).to({x:-5.2,y:261.9,alpha:0.2239},0).wait(1).to({x:-5.25,y:262.25,alpha:0.2215},0).wait(1).to({y:262.6,alpha:0.2192},0).wait(1).to({x:-5.3,y:262.9,alpha:0.2171},0).wait(1).to({x:-5.35,y:263.2,alpha:0.2151},0).wait(1).to({skewX:-17.2278,y:263.45,alpha:0.2132},0).wait(1).to({x:-5.4,y:263.7,alpha:0.2115},0).wait(1).to({y:263.95,alpha:0.2098},0).wait(1).to({x:-5.45,y:264.15,alpha:0.2083},0).wait(1).to({y:264.35,alpha:0.2069},0).wait(1).to({x:-5.5,y:264.55,alpha:0.2057},0).wait(1).to({y:264.7,alpha:0.2045},0).wait(1).to({skewY:-14.8377,x:-5.55,y:264.85,alpha:0.2035},0).wait(1).to({y:264.95,alpha:0.2026},0).wait(1).to({y:265.1,alpha:0.2018},0).wait(1).to({y:265.2,alpha:0.2011},0).wait(1).to({x:-5.6,y:265.25,alpha:0.2005},0).wait(1).to({y:265.35,alpha:0.2},0).wait(1).to({y:265.4,alpha:0.1997},0).wait(1).to({y:265.45,alpha:0.1994},0).wait(1).to({alpha:0.1993},0).wait(1).to({regX:290.7,regY:350.2,x:230.35,y:397.7,alpha:0.1992},0).to({_off:true},1).wait(16).to({_off:false,regX:290.9,regY:350,scaleX:0.6417,scaleY:0.5365,rotation:-9.2263,skewX:0,skewY:0,x:335.35,y:-264},0).wait(1).to({regX:-0.3,regY:0,scaleX:0.6416,rotation:-9.3806,x:118.5,y:-407.8,alpha:0.2108},0).wait(1).to({rotation:0,skewX:-9.5348,skewY:-9.4424,x:116.25,y:-396.3,alpha:0.2224},0).wait(1).to({scaleY:0.5366,skewX:-9.6889,skewY:-9.5505,x:113.95,y:-384.8,alpha:0.234},0).wait(1).to({skewX:-9.8426,skewY:-9.6583,x:111.7,y:-373.3,alpha:0.2456},0).wait(1).to({scaleX:0.6415,skewX:-9.996,skewY:-9.7659,x:109.45,y:-361.85,alpha:0.2571},0).wait(1).to({scaleY:0.5367,skewX:-10.1489,skewY:-9.8731,x:107.2,y:-350.45,alpha:0.2686},0).wait(1).to({skewX:-10.3013,skewY:-9.98,x:104.95,y:-339.05,alpha:0.2801},0).wait(1).to({skewX:-10.453,skewY:-10.0864,x:102.75,y:-327.7,alpha:0.2915},0).wait(1).to({scaleX:0.6414,skewX:-10.604,skewY:-10.1923,x:100.55,y:-316.45,alpha:0.3028},0).wait(1).to({scaleY:0.5368,skewX:-10.7541,skewY:-10.2976,x:98.3,y:-305.2,alpha:0.3141},0).wait(1).to({skewX:-10.9034,skewY:-10.4023,x:96.15,y:-294.05,alpha:0.3253},0).wait(1).to({skewX:-11.0516,skewY:-10.5062,x:93.95,y:-283,alpha:0.3365},0).wait(1).to({scaleX:0.6413,scaleY:0.5369,skewX:-11.1987,skewY:-10.6094,x:91.8,y:-272,alpha:0.3476},0).wait(1).to({skewX:-11.3447,skewY:-10.7118,x:89.65,y:-261.05,alpha:0.3585},0).wait(1).to({skewX:-11.4893,skewY:-10.8133,x:87.55,y:-250.25,alpha:0.3694},0).wait(1).to({skewX:-11.6326,skewY:-10.9138,x:85.45,y:-239.55,alpha:0.3802},0).wait(1).to({scaleX:0.6412,scaleY:0.537,skewX:-11.7745,skewY:-11.0133,x:83.4,y:-228.95,alpha:0.3909},0).wait(1).to({skewX:-11.9148,skewY:-11.1117,x:81.3,y:-218.45,alpha:0.4014},0).wait(1).to({skewX:-12.0536,skewY:-11.2091,x:79.3,y:-208.05,alpha:0.4119},0).wait(1).to({skewX:-12.1907,skewY:-11.3052,x:77.3,y:-197.8,alpha:0.4222},0).wait(1).to({scaleX:0.6411,scaleY:0.5371,skewX:-12.3262,skewY:-11.4002,x:75.3,y:-187.65,alpha:0.4323},0).wait(1).to({skewX:-12.4598,skewY:-11.4939,x:73.35,y:-177.65,alpha:0.4424},0).wait(1).to({skewX:-12.5916,skewY:-11.5864,x:71.45,y:-167.8,alpha:0.4523},0).wait(1).to({scaleY:0.5372,skewX:-12.7215,skewY:-11.6775,x:69.55,y:-158.1,alpha:0.4621},0).wait(1).to({skewX:-12.8495,skewY:-11.7673,x:67.65,y:-148.5,alpha:0.4717},0).wait(1).to({scaleX:0.641,skewX:-12.9756,skewY:-11.8557,x:65.85,y:-139.05,alpha:0.4812},0).wait(1).to({skewX:-13.0997,skewY:-11.9427,x:64,y:-129.8,alpha:0.4905},0).wait(1).to({skewX:-13.2217,skewY:-12.0283,x:62.25,y:-120.65,alpha:0.4997},0).wait(1).to({scaleY:0.5373,skewX:-13.3417,skewY:-12.1125,x:60.5,y:-111.65,alpha:0.5087},0).wait(1).to({scaleX:0.6409,skewX:-13.4597,skewY:-12.1952,x:58.8,y:-102.85,alpha:0.5176},0).wait(1).to({skewX:-13.5755,skewY:-12.2765,x:57.1,y:-94.15,alpha:0.5263},0).wait(1).to({skewX:-13.6893,skewY:-12.3563,x:55.45,y:-85.65,alpha:0.5349},0).wait(1).to({scaleY:0.5374,skewX:-13.801,skewY:-12.4347,x:53.8,y:-77.25,alpha:0.5433},0).wait(1).to({skewX:-13.9106,skewY:-12.5116,x:52.2,y:-69.05,alpha:0.5515},0).wait(1).to({skewX:-14.0182,skewY:-12.587,x:50.65,y:-61,alpha:0.5596},0).wait(1).to({scaleX:0.6408,skewX:-14.1236,skewY:-12.6609,x:49.1,y:-53.1,alpha:0.5675},0).wait(1).to({skewX:-14.227,skewY:-12.7334,x:47.6,y:-45.35,alpha:0.5753},0).wait(1).to({scaleY:0.5375,skewX:-14.3283,skewY:-12.8045,x:46.15,y:-37.8,alpha:0.5829},0).wait(1).to({skewX:-14.4276,skewY:-12.8742,x:44.7,y:-30.35,alpha:0.5904},0).wait(1).to({skewX:-14.5249,skewY:-12.9424,x:43.3,y:-23.05,alpha:0.5977},0).wait(1).to({scaleX:0.6407,skewX:-14.6201,skewY:-13.0092,x:41.9,y:-15.9,alpha:0.6049},0).wait(1).to({skewX:-14.7134,skewY:-13.0746,x:40.55,y:-8.95,alpha:0.6119},0).wait(1).to({skewX:-14.8047,skewY:-13.1386,x:39.2,y:-2.1,alpha:0.6187},0).wait(1).to({scaleY:0.5376,skewX:-14.8941,skewY:-13.2013,x:37.9,y:4.55,alpha:0.6255},0).wait(1).to({skewX:-14.9816,skewY:-13.2627,x:36.65,y:11.1,alpha:0.632},0).wait(1).to({skewX:-15.0672,skewY:-13.3227,x:35.4,y:17.55,alpha:0.6385},0).wait(1).to({skewX:-15.1509,skewY:-13.3815,x:34.2,y:23.8,alpha:0.6448},0).wait(1).to({scaleX:0.6406,skewX:-15.2329,skewY:-13.4389,x:33,y:29.95,alpha:0.6509},0).wait(1).to({skewX:-15.313,skewY:-13.4951,x:31.85,y:35.95,alpha:0.657},0).wait(1).to({scaleY:0.5377,skewX:-15.3914,skewY:-13.5501,x:30.7,y:41.85,alpha:0.6629},0).wait(1).to({skewX:-15.468,skewY:-13.6039,x:29.6,y:47.6,alpha:0.6686},0).wait(1).to({skewX:-15.543,skewY:-13.6565,x:28.5,y:53.2,alpha:0.6743},0).wait(1).to({skewX:-15.6163,skewY:-13.7079,x:27.45,y:58.7,alpha:0.6798},0).wait(1).to({skewX:-15.688,skewY:-13.7581,x:26.4,y:64.05,alpha:0.6852},0).wait(1).to({skewX:-15.758,skewY:-13.8073,x:25.4,y:69.3,alpha:0.6904},0).wait(1).to({scaleX:0.6405,skewX:-15.8265,skewY:-13.8553,x:24.4,y:74.45,alpha:0.6956},0).wait(1).to({scaleY:0.5378,skewX:-15.8935,skewY:-13.9023,x:23.45,y:79.45,alpha:0.7006},0).wait(1).to({skewX:-15.9589,skewY:-13.9482,x:22.5,y:84.4,alpha:0.7056},0).wait(1).to({skewX:-16.0229,skewY:-13.9931,x:21.55,y:89.2,alpha:0.7104},0).wait(1).to({skewX:-16.0855,skewY:-14.0369,x:20.65,y:93.85,alpha:0.7151},0).wait(1).to({skewX:-16.1466,skewY:-14.0798,x:19.8,y:98.45,alpha:0.7197},0).wait(1).to({skewX:-16.2063,skewY:-14.1217,x:18.9,y:102.95,alpha:0.7242},0).wait(1).to({skewX:-16.2647,skewY:-14.1627,x:18.05,y:107.3,alpha:0.7285},0).wait(1).to({skewX:-16.3218,skewY:-14.2027,x:17.25,y:111.6,alpha:0.7328},0).wait(1).to({skewX:-16.3776,skewY:-14.2418,x:16.45,y:115.8,alpha:0.737},0).wait(1).to({scaleX:0.6404,scaleY:0.5379,skewX:-16.4321,skewY:-14.2801,x:15.65,y:119.85,alpha:0.7411},0).wait(1).to({skewX:-16.4853,skewY:-14.3174,x:14.9,y:123.85,alpha:0.7451},0).wait(1).to({skewX:-16.5374,skewY:-14.3539,x:14.15,y:127.75,alpha:0.7491},0).wait(1).to({skewX:-16.5883,skewY:-14.3896,x:13.4,y:131.6,alpha:0.7529},0).wait(1).to({skewX:-16.638,skewY:-14.4245,x:12.7,y:135.3,alpha:0.7566},0).wait(1).to({skewX:-16.6865,skewY:-14.4585,x:12,y:138.95,alpha:0.7603},0).wait(1).to({skewX:-16.734,skewY:-14.4918,x:11.3,y:142.5,alpha:0.7638},0).wait(1).to({skewX:-16.7804,skewY:-14.5244,x:10.6,y:146,alpha:0.7673},0).wait(1).to({skewX:-16.8257,skewY:-14.5561,x:9.95,y:149.4,alpha:0.7707},0).wait(1).to({skewX:-16.87,skewY:-14.5872,x:9.35,y:152.7,alpha:0.7741},0).wait(1).to({scaleY:0.538,skewX:-16.9132,skewY:-14.6175,x:8.7,y:155.95,alpha:0.7773},0).wait(1).to({skewX:-16.9555,skewY:-14.6472,x:8.1,y:159.15,alpha:0.7805},0).wait(1).to({scaleX:0.6403,skewX:-16.9968,skewY:-14.6761,x:7.5,y:162.25,alpha:0.7836},0).wait(1).to({skewX:-17.0371,skewY:-14.7044,x:6.9,y:165.25,alpha:0.7866},0).wait(1).to({skewX:-17.0765,skewY:-14.7321,x:6.35,y:168.2,alpha:0.7896},0).wait(1).to({skewX:-17.115,skewY:-14.759,x:5.8,y:171.1,alpha:0.7925},0).wait(1).to({skewX:-17.1526,skewY:-14.7854,x:5.25,y:173.95,alpha:0.7953},0).wait(1).to({skewX:-17.1893,skewY:-14.8112,x:4.7,y:176.7,alpha:0.7981},0).wait(1).to({regX:290.8,regY:350.2,skewX:-17.2252,skewY:-14.8363,x:240.3,y:311.5,alpha:0.8008},0).wait(1).to({regX:-0.3,regY:0,skewX:-17.2253,skewY:-14.8364,x:4,y:181.85,alpha:0.7827},0).wait(1).to({x:3.7,y:184.4,alpha:0.7651},0).wait(1).to({skewX:-17.2254,skewY:-14.8365,x:3.4,y:186.85,alpha:0.7479},0).wait(1).to({skewX:-17.2255,x:3.15,y:189.25,alpha:0.7311},0).wait(1).to({skewX:-17.2256,x:2.85,y:191.6,alpha:0.7146},0).wait(1).to({skewY:-14.8366,x:2.6,y:193.9,alpha:0.6986},0).wait(1).to({skewX:-17.2257,x:2.35,y:196.15,alpha:0.6829},0).wait(1).to({skewX:-17.2258,x:2.1,y:198.35,alpha:0.6676},0).wait(1).to({skewY:-14.8367,x:1.85,y:200.5,alpha:0.6526},0).wait(1).to({skewX:-17.2259,x:1.6,y:202.6,alpha:0.638},0).wait(1).to({skewX:-17.226,x:1.35,y:204.65,alpha:0.6237},0).wait(1).to({skewY:-14.8368,x:1.15,y:206.65,alpha:0.6098},0).wait(1).to({skewX:-17.2261,x:0.9,y:208.6,alpha:0.5962},0).wait(1).to({x:0.7,y:210.5,alpha:0.5829},0).wait(1).to({skewX:-17.2262,x:0.45,y:212.35,alpha:0.5699},0).wait(1).to({skewX:-17.2263,skewY:-14.8369,x:0.25,y:214.15,alpha:0.5573},0).wait(1).to({x:0.05,y:215.95,alpha:0.5449},0).wait(1).to({skewX:-17.2264,x:-0.15,y:217.65,alpha:0.5329},0).wait(1).to({skewY:-14.837,x:-0.3,y:219.35,alpha:0.5211},0).wait(1).to({skewX:-17.2265,x:-0.5,y:221,alpha:0.5097},0).wait(1).to({x:-0.65,y:222.6,alpha:0.4985},0).wait(1).to({skewX:-17.2266,x:-0.85,y:224.15,alpha:0.4876},0).wait(1).to({skewY:-14.8371,x:-1,y:225.65,alpha:0.4769},0).wait(1).to({x:-1.2,y:227.15,alpha:0.4666},0).wait(1).to({skewX:-17.2267,x:-1.35,y:228.6,alpha:0.4565},0).wait(1).to({x:-1.5,y:230,alpha:0.4466},0).wait(1).to({skewX:-17.2268,x:-1.65,y:231.4,alpha:0.437},0).wait(1).to({skewY:-14.8372,x:-1.85,y:232.7,alpha:0.4277},0).wait(1).to({skewX:-17.2269,x:-2,y:234.05,alpha:0.4186},0).wait(1).to({x:-2.1,y:235.3,alpha:0.4098},0).wait(1).to({x:-2.25,y:236.55,alpha:0.4011},0).wait(1).to({skewX:-17.227,x:-2.4,y:237.75,alpha:0.3927},0).wait(1).to({skewY:-14.8373,x:-2.55,y:238.9,alpha:0.3846},0).wait(1).to({x:-2.65,y:240.05,alpha:0.3766},0).wait(1).to({skewX:-17.2271,x:-2.8,y:241.15,alpha:0.3689},0).wait(1).to({x:-2.9,y:242.2,alpha:0.3614},0).wait(1).to({x:-3.05,y:243.25,alpha:0.3541},0).wait(1).to({skewX:-17.2272,x:-3.15,y:244.3,alpha:0.3471},0).wait(1).to({skewY:-14.8374,x:-3.25,y:245.25,alpha:0.3402},0).wait(1).to({x:-3.4,y:246.2,alpha:0.3335},0).wait(1).to({skewX:-17.2273,x:-3.5,y:247.15,alpha:0.3271},0).wait(1).to({x:-3.6,y:248.05,alpha:0.3208},0).wait(1).to({x:-3.7,y:248.9,alpha:0.3147},0).wait(1).to({x:-3.8,y:249.75,alpha:0.3088},0).wait(1).to({skewX:-17.2274,x:-3.9,y:250.6,alpha:0.3031},0).wait(1).to({x:-3.95,y:251.35,alpha:0.2976},0).wait(1).to({skewY:-14.8375,x:-4.05,y:252.15,alpha:0.2922},0).wait(1).to({x:-4.15,y:252.85,alpha:0.2871},0).wait(1).to({skewX:-17.2275,x:-4.25,y:253.6,alpha:0.2821},0).wait(1).to({x:-4.3,y:254.3,alpha:0.2772},0).wait(1).to({x:-4.4,y:254.95,alpha:0.2726},0).wait(1).to({x:-4.45,y:255.6,alpha:0.2681},0).wait(1).to({x:-4.55,y:256.2,alpha:0.2638},0).wait(1).to({x:-4.6,y:256.8,alpha:0.2596},0).wait(1).to({skewX:-17.2276,x:-4.65,y:257.4,alpha:0.2556},0).wait(1).to({x:-4.75,y:257.95,alpha:0.2518},0).wait(1).to({skewY:-14.8376,x:-4.8,y:258.45,alpha:0.2481},0).wait(1).to({x:-4.85,y:258.95,alpha:0.2446},0).wait(1).to({x:-4.9,y:259.45,alpha:0.2412},0).wait(1).to({x:-4.95,y:259.9,alpha:0.2379},0).wait(1).to({skewX:-17.2277,x:-5,y:260.35,alpha:0.2348},0).wait(1).to({x:-5.05,y:260.8,alpha:0.2319},0).wait(1).to({x:-5.1,y:261.2,alpha:0.2291},0).wait(1).to({x:-5.15,y:261.55,alpha:0.2264},0).wait(1).to({x:-5.2,y:261.9,alpha:0.2239},0).wait(1).to({x:-5.25,y:262.25,alpha:0.2215},0).wait(1).to({y:262.6,alpha:0.2192},0).wait(1).to({x:-5.3,y:262.9,alpha:0.2171},0).wait(1).to({x:-5.35,y:263.2,alpha:0.2151},0).wait(1).to({skewX:-17.2278,y:263.45,alpha:0.2132},0).wait(1).to({x:-5.4,y:263.7,alpha:0.2115},0).wait(1).to({y:263.95,alpha:0.2098},0).wait(1).to({x:-5.45,y:264.15,alpha:0.2083},0).wait(1).to({y:264.35,alpha:0.2069},0).wait(1).to({x:-5.5,y:264.55,alpha:0.2057},0).wait(1).to({y:264.7,alpha:0.2045},0).wait(1).to({skewY:-14.8377,x:-5.55,y:264.85,alpha:0.2035},0).wait(1).to({y:264.95,alpha:0.2026},0).wait(1).to({y:265.1,alpha:0.2018},0).wait(1).to({y:265.2,alpha:0.2011},0).wait(1).to({x:-5.6,y:265.25,alpha:0.2005},0).wait(1).to({y:265.35,alpha:0.2},0).wait(1).to({y:265.4,alpha:0.1997},0).wait(1).to({y:265.45,alpha:0.1994},0).wait(1).to({alpha:0.1993},0).wait(1).to({regX:290.7,regY:350.2,x:230.35,y:397.7,alpha:0.1992},0).to({_off:true},1).wait(1));
    
        // レイヤー_1 コピー 3
        this.instance_1 = new lib.g_snow("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(292.05,-278.35,0.6417,0.6417,-6.7025,0,0,290.9,350);
        this.instance_1.alpha = 0.1992;
        this.instance_1._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({_off:false},0).wait(1).to({regX:-0.3,regY:0,x:77.05,y:-466.1,alpha:0.2089},0).wait(1).to({x:73.85,y:-452.65,alpha:0.2185},0).wait(1).to({rotation:-6.7024,x:70.65,y:-439.2,alpha:0.2281},0).wait(1).to({x:67.5,y:-425.75,alpha:0.2377},0).wait(1).to({x:64.35,y:-412.4,alpha:0.2473},0).wait(1).to({x:61.2,y:-399.05,alpha:0.2569},0).wait(1).to({x:58.05,y:-385.75,alpha:0.2664},0).wait(1).to({rotation:-6.7023,x:54.9,y:-372.5,alpha:0.2759},0).wait(1).to({x:51.8,y:-359.3,alpha:0.2853},0).wait(1).to({x:48.7,y:-346.2,alpha:0.2947},0).wait(1).to({x:45.6,y:-333.15,alpha:0.3041},0).wait(1).to({rotation:-6.7022,x:42.55,y:-320.25,alpha:0.3133},0).wait(1).to({x:39.5,y:-307.4,alpha:0.3225},0).wait(1).to({x:36.5,y:-294.65,alpha:0.3316},0).wait(1).to({x:33.5,y:-282,alpha:0.3407},0).wait(1).to({x:30.55,y:-269.5,alpha:0.3496},0).wait(1).to({rotation:-6.7021,x:27.65,y:-257.15,alpha:0.3585},0).wait(1).to({x:24.75,y:-244.85,alpha:0.3673},0).wait(1).to({x:21.85,y:-232.75,alpha:0.376},0).wait(1).to({x:19.05,y:-220.8,alpha:0.3845},0).wait(1).to({x:16.25,y:-208.95,alpha:0.393},0).wait(1).to({rotation:-6.702,x:13.5,y:-197.3,alpha:0.4013},0).wait(1).to({x:10.75,y:-185.8,alpha:0.4096},0).wait(1).to({x:8.1,y:-174.45,alpha:0.4177},0).wait(1).to({x:5.45,y:-163.3,alpha:0.4257},0).wait(1).to({x:2.85,y:-152.25,alpha:0.4336},0).wait(1).to({rotation:-6.7019,x:0.3,y:-141.45,alpha:0.4413},0).wait(1).to({x:-2.2,y:-130.8,alpha:0.449},0).wait(1).to({x:-4.65,y:-120.3,alpha:0.4565},0).wait(1).to({x:-7.1,y:-110,alpha:0.4638},0).wait(1).to({x:-9.5,y:-99.9,alpha:0.4711},0).wait(1).to({rotation:-6.7018,x:-11.85,y:-89.95,alpha:0.4782},0).wait(1).to({x:-14.15,y:-80.2,alpha:0.4852},0).wait(1).to({x:-16.4,y:-70.65,alpha:0.492},0).wait(1).to({x:-18.65,y:-61.25,alpha:0.4988},0).wait(1).to({x:-20.8,y:-52.05,alpha:0.5053},0).wait(1).to({x:-22.95,y:-43.05,alpha:0.5118},0).wait(1).to({x:-25.05,y:-34.2,alpha:0.5181},0).wait(1).to({rotation:-6.7017,x:-27.1,y:-25.5,alpha:0.5243},0).wait(1).to({x:-29.1,y:-17.05,alpha:0.5304},0).wait(1).to({x:-31.05,y:-8.7,alpha:0.5364},0).wait(1).to({x:-33,y:-0.55,alpha:0.5422},0).wait(1).to({x:-34.85,y:7.35,alpha:0.5479},0).wait(1).to({x:-36.7,y:15.15,alpha:0.5535},0).wait(1).to({x:-38.5,y:22.8,alpha:0.559},0).wait(1).to({rotation:-6.7016,x:-40.3,y:30.25,alpha:0.5643},0).wait(1).to({x:-42,y:37.6,alpha:0.5696},0).wait(1).to({x:-43.7,y:44.75,alpha:0.5747},0).wait(1).to({x:-45.35,y:51.7,alpha:0.5797},0).wait(1).to({x:-47,y:58.55,alpha:0.5846},0).wait(1).to({x:-48.55,y:65.25,alpha:0.5894},0).wait(1).to({x:-50.1,y:71.8,alpha:0.5941},0).wait(1).to({x:-51.6,y:78.2,alpha:0.5986},0).wait(1).to({rotation:-6.7015,x:-53.1,y:84.45,alpha:0.6031},0).wait(1).to({x:-54.55,y:90.55,alpha:0.6075},0).wait(1).to({x:-55.95,y:96.55,alpha:0.6118},0).wait(1).to({x:-57.35,y:102.4,alpha:0.616},0).wait(1).to({x:-58.7,y:108.1,alpha:0.6201},0).wait(1).to({x:-60,y:113.7,alpha:0.6241},0).wait(1).to({x:-61.3,y:119.15,alpha:0.628},0).wait(1).to({x:-62.55,y:124.5,alpha:0.6318},0).wait(1).to({x:-63.8,y:129.7,alpha:0.6355},0).wait(1).to({x:-65,y:134.8,alpha:0.6392},0).wait(1).to({x:-66.2,y:139.8,alpha:0.6427},0).wait(1).to({rotation:-6.7014,x:-67.35,y:144.65,alpha:0.6462},0).wait(1).to({x:-68.45,y:149.4,alpha:0.6496},0).wait(1).to({x:-69.55,y:154.05,alpha:0.653},0).wait(1).to({x:-70.65,y:158.6,alpha:0.6562},0).wait(1).to({x:-71.7,y:163.05,alpha:0.6594},0).wait(1).to({x:-72.7,y:167.4,alpha:0.6625},0).wait(1).to({x:-73.7,y:171.65,alpha:0.6655},0).wait(1).to({x:-74.7,y:175.75,alpha:0.6685},0).wait(1).to({x:-75.65,y:179.8,alpha:0.6714},0).wait(1).to({x:-76.6,y:183.8,alpha:0.6742},0).wait(1).to({x:-77.5,y:187.65,alpha:0.677},0).wait(1).to({x:-78.4,y:191.4,alpha:0.6797},0).wait(1).to({x:-79.25,y:195.1,alpha:0.6824},0).wait(1).to({x:-80.1,y:198.7,alpha:0.6849},0).wait(1).to({rotation:-6.7013,x:-80.95,y:202.25,alpha:0.6875},0).wait(1).to({x:-81.75,y:205.65,alpha:0.6899},0).wait(1).to({x:-82.55,y:209.05,alpha:0.6923},0).wait(1).to({x:-83.35,y:212.3,alpha:0.6947},0).wait(1).to({x:-84.1,y:215.5,alpha:0.697},0).wait(1).to({regX:290.9,regY:350.1,scaleX:0.6416,scaleY:0.6416,x:126.95,y:419.95,alpha:0.6992},0).wait(1).to({regX:-0.3,regY:0,scaleX:0.6417,scaleY:0.6417,rotation:-6.7014,x:-85.55,y:221.6,alpha:0.6842},0).wait(1).to({x:-86.25,y:224.55,alpha:0.6696},0).wait(1).to({x:-86.9,y:227.4,alpha:0.6553},0).wait(1).to({rotation:-6.7015,x:-87.55,y:230.2,alpha:0.6413},0).wait(1).to({x:-88.2,y:232.9,alpha:0.6276},0).wait(1).to({x:-88.85,y:235.6,alpha:0.6143},0).wait(1).to({rotation:-6.7016,x:-89.45,y:238.2,alpha:0.6012},0).wait(1).to({x:-90.05,y:240.75,alpha:0.5885},0).wait(1).to({x:-90.65,y:243.2,alpha:0.5761},0).wait(1).to({x:-91.2,y:245.65,alpha:0.5639},0).wait(1).to({rotation:-6.7017,x:-91.75,y:248,alpha:0.5521},0).wait(1).to({x:-92.3,y:250.3,alpha:0.5405},0).wait(1).to({x:-92.85,y:252.6,alpha:0.5292},0).wait(1).to({rotation:-6.7018,x:-93.4,y:254.8,alpha:0.5181},0).wait(1).to({x:-93.9,y:256.95,alpha:0.5073},0).wait(1).to({x:-94.4,y:259.05,alpha:0.4968},0).wait(1).to({x:-94.85,y:261.1,alpha:0.4866},0).wait(1).to({rotation:-6.7019,x:-95.35,y:263.1,alpha:0.4766},0).wait(1).to({x:-95.8,y:265.05,alpha:0.4668},0).wait(1).to({x:-96.25,y:266.95,alpha:0.4573},0).wait(1).to({x:-96.7,y:268.8,alpha:0.448},0).wait(1).to({x:-97.1,y:270.6,alpha:0.4389},0).wait(1).to({rotation:-6.702,x:-97.55,y:272.35,alpha:0.4301},0).wait(1).to({x:-97.95,y:274.1,alpha:0.4214},0).wait(1).to({x:-98.35,y:275.75,alpha:0.413},0).wait(1).to({x:-98.7,y:277.4,alpha:0.4049},0).wait(1).to({x:-99.1,y:279,alpha:0.3969},0).wait(1).to({rotation:-6.7021,x:-99.45,y:280.55,alpha:0.3891},0).wait(1).to({x:-99.8,y:282.05,alpha:0.3816},0).wait(1).to({x:-100.15,y:283.55,alpha:0.3742},0).wait(1).to({x:-100.5,y:284.95,alpha:0.367},0).wait(1).to({x:-100.85,y:286.35,alpha:0.3601},0).wait(1).to({x:-101.15,y:287.7,alpha:0.3533},0).wait(1).to({rotation:-6.7022,x:-101.45,y:289,alpha:0.3467},0).wait(1).to({x:-101.75,y:290.3,alpha:0.3403},0).wait(1).to({x:-102.05,y:291.55,alpha:0.334},0).wait(1).to({x:-102.35,y:292.75,alpha:0.328},0).wait(1).to({x:-102.65,y:293.95,alpha:0.3221},0).wait(1).to({x:-102.9,y:295.05,alpha:0.3164},0).wait(1).to({x:-103.15,y:296.2,alpha:0.3108},0).wait(1).to({rotation:-6.7023,x:-103.4,y:297.25,alpha:0.3055},0).wait(1).to({x:-103.65,y:298.3,alpha:0.3003},0).wait(1).to({x:-103.9,y:299.3,alpha:0.2952},0).wait(1).to({x:-104.15,y:300.3,alpha:0.2903},0).wait(1).to({x:-104.35,y:301.25,alpha:0.2856},0).wait(1).to({x:-104.55,y:302.15,alpha:0.281},0).wait(1).to({x:-104.8,y:303.05,alpha:0.2765},0).wait(1).to({x:-105,y:303.9,alpha:0.2722},0).wait(1).to({x:-105.2,y:304.7,alpha:0.2681},0).wait(1).to({rotation:-6.7024,x:-105.35,y:305.5,alpha:0.2641},0).wait(1).to({x:-105.55,y:306.3,alpha:0.2602},0).wait(1).to({x:-105.75,y:307.05,alpha:0.2565},0).wait(1).to({x:-105.9,y:307.75,alpha:0.2529},0).wait(1).to({x:-106.05,y:308.45,alpha:0.2494},0).wait(1).to({x:-106.2,y:309.1,alpha:0.2461},0).wait(1).to({x:-106.35,y:309.75,alpha:0.2429},0).wait(1).to({x:-106.5,y:310.35,alpha:0.2398},0).wait(1).to({x:-106.65,y:310.95,alpha:0.2369},0).wait(1).to({x:-106.8,y:311.5,alpha:0.2341},0).wait(1).to({x:-106.9,y:312.05,alpha:0.2314},0).wait(1).to({x:-107.05,y:312.55,alpha:0.2288},0).wait(1).to({x:-107.15,y:313.05,alpha:0.2264},0).wait(1).to({rotation:-6.7025,x:-107.25,y:313.5,alpha:0.224},0).wait(1).to({x:-107.35,y:313.95,alpha:0.2218},0).wait(1).to({x:-107.45,y:314.4,alpha:0.2197},0).wait(1).to({x:-107.55,y:314.8,alpha:0.2177},0).wait(1).to({x:-107.65,y:315.15,alpha:0.2158},0).wait(1).to({x:-107.75,y:315.5,alpha:0.2141},0).wait(1).to({x:-107.8,y:315.85,alpha:0.2124},0).wait(1).to({x:-107.9,y:316.15,alpha:0.2108},0).wait(1).to({x:-107.95,y:316.45,alpha:0.2094},0).wait(1).to({x:-108,y:316.7,alpha:0.208},0).wait(1).to({x:-108.05,y:316.95,alpha:0.2068},0).wait(1).to({x:-108.15,y:317.2,alpha:0.2056},0).wait(1).to({y:317.4,alpha:0.2046},0).wait(1).to({x:-108.2,y:317.6,alpha:0.2036},0).wait(1).to({x:-108.25,y:317.75,alpha:0.2028},0).wait(1).to({x:-108.3,y:317.9,alpha:0.202},0).wait(1).to({x:-108.35,y:318.05,alpha:0.2014},0).wait(1).to({y:318.15,alpha:0.2008},0).wait(1).to({x:-108.4,y:318.25,alpha:0.2003},0).wait(1).to({y:318.35,alpha:0.1999},0).wait(1).to({y:318.4,alpha:0.1996},0).wait(1).to({y:318.45,alpha:0.1994},0).wait(1).to({x:-108.45,alpha:0.1993},0).wait(1).to({regX:290.9,regY:350.1,x:103.35,y:519.8,alpha:0.1992},0).to({_off:true},1).wait(16).to({_off:false,regY:350,x:292.05,y:-278.35},0).wait(1).to({regX:-0.3,regY:0,x:77.05,y:-466.1,alpha:0.2089},0).wait(1).to({x:73.85,y:-452.65,alpha:0.2185},0).wait(1).to({rotation:-6.7024,x:70.65,y:-439.2,alpha:0.2281},0).wait(1).to({x:67.5,y:-425.75,alpha:0.2377},0).wait(1).to({x:64.35,y:-412.4,alpha:0.2473},0).wait(1).to({x:61.2,y:-399.05,alpha:0.2569},0).wait(1).to({x:58.05,y:-385.75,alpha:0.2664},0).wait(1).to({rotation:-6.7023,x:54.9,y:-372.5,alpha:0.2759},0).wait(1).to({x:51.8,y:-359.3,alpha:0.2853},0).wait(1).to({x:48.7,y:-346.2,alpha:0.2947},0).wait(1).to({x:45.6,y:-333.15,alpha:0.3041},0).wait(1).to({rotation:-6.7022,x:42.55,y:-320.25,alpha:0.3133},0).wait(1).to({x:39.5,y:-307.4,alpha:0.3225},0).wait(1).to({x:36.5,y:-294.65,alpha:0.3316},0).wait(1).to({x:33.5,y:-282,alpha:0.3407},0).wait(1).to({x:30.55,y:-269.5,alpha:0.3496},0).wait(1).to({rotation:-6.7021,x:27.65,y:-257.15,alpha:0.3585},0).wait(1).to({x:24.75,y:-244.85,alpha:0.3673},0).wait(1).to({x:21.85,y:-232.75,alpha:0.376},0).wait(1).to({x:19.05,y:-220.8,alpha:0.3845},0).wait(1).to({x:16.25,y:-208.95,alpha:0.393},0).wait(1).to({rotation:-6.702,x:13.5,y:-197.3,alpha:0.4013},0).wait(1).to({x:10.75,y:-185.8,alpha:0.4096},0).wait(1).to({x:8.1,y:-174.45,alpha:0.4177},0).wait(1).to({x:5.45,y:-163.3,alpha:0.4257},0).wait(1).to({x:2.85,y:-152.25,alpha:0.4336},0).wait(1).to({rotation:-6.7019,x:0.3,y:-141.45,alpha:0.4413},0).wait(1).to({x:-2.2,y:-130.8,alpha:0.449},0).wait(1).to({x:-4.65,y:-120.3,alpha:0.4565},0).wait(1).to({x:-7.1,y:-110,alpha:0.4638},0).wait(1).to({x:-9.5,y:-99.9,alpha:0.4711},0).wait(1).to({rotation:-6.7018,x:-11.85,y:-89.95,alpha:0.4782},0).wait(1).to({x:-14.15,y:-80.2,alpha:0.4852},0).wait(1).to({x:-16.4,y:-70.65,alpha:0.492},0).wait(1).to({x:-18.65,y:-61.25,alpha:0.4988},0).wait(1).to({x:-20.8,y:-52.05,alpha:0.5053},0).wait(1).to({x:-22.95,y:-43.05,alpha:0.5118},0).wait(1).to({x:-25.05,y:-34.2,alpha:0.5181},0).wait(1).to({rotation:-6.7017,x:-27.1,y:-25.5,alpha:0.5243},0).wait(1).to({x:-29.1,y:-17.05,alpha:0.5304},0).wait(1).to({x:-31.05,y:-8.7,alpha:0.5364},0).wait(1).to({x:-33,y:-0.55,alpha:0.5422},0).wait(1).to({x:-34.85,y:7.35,alpha:0.5479},0).wait(1).to({x:-36.7,y:15.15,alpha:0.5535},0).wait(1).to({x:-38.5,y:22.8,alpha:0.559},0).wait(1).to({rotation:-6.7016,x:-40.3,y:30.25,alpha:0.5643},0).wait(1).to({x:-42,y:37.6,alpha:0.5696},0).wait(1).to({x:-43.7,y:44.75,alpha:0.5747},0).wait(1).to({x:-45.35,y:51.7,alpha:0.5797},0).wait(1).to({x:-47,y:58.55,alpha:0.5846},0).wait(1).to({x:-48.55,y:65.25,alpha:0.5894},0).wait(1).to({x:-50.1,y:71.8,alpha:0.5941},0).wait(1).to({x:-51.6,y:78.2,alpha:0.5986},0).wait(1).to({rotation:-6.7015,x:-53.1,y:84.45,alpha:0.6031},0).wait(1).to({x:-54.55,y:90.55,alpha:0.6075},0).wait(1).to({x:-55.95,y:96.55,alpha:0.6118},0).wait(1).to({x:-57.35,y:102.4,alpha:0.616},0).wait(1).to({x:-58.7,y:108.1,alpha:0.6201},0).wait(1).to({x:-60,y:113.7,alpha:0.6241},0).wait(1).to({x:-61.3,y:119.15,alpha:0.628},0).wait(1).to({x:-62.55,y:124.5,alpha:0.6318},0).wait(1).to({x:-63.8,y:129.7,alpha:0.6355},0).wait(1).to({x:-65,y:134.8,alpha:0.6392},0).wait(1).to({x:-66.2,y:139.8,alpha:0.6427},0).wait(1).to({rotation:-6.7014,x:-67.35,y:144.65,alpha:0.6462},0).wait(1).to({x:-68.45,y:149.4,alpha:0.6496},0).wait(1).to({x:-69.55,y:154.05,alpha:0.653},0).wait(1).to({x:-70.65,y:158.6,alpha:0.6562},0).wait(1).to({x:-71.7,y:163.05,alpha:0.6594},0).wait(1).to({x:-72.7,y:167.4,alpha:0.6625},0).wait(1).to({x:-73.7,y:171.65,alpha:0.6655},0).wait(1).to({x:-74.7,y:175.75,alpha:0.6685},0).wait(1).to({x:-75.65,y:179.8,alpha:0.6714},0).wait(1).to({x:-76.6,y:183.8,alpha:0.6742},0).wait(1).to({x:-77.5,y:187.65,alpha:0.677},0).wait(1).to({x:-78.4,y:191.4,alpha:0.6797},0).wait(1).to({x:-79.25,y:195.1,alpha:0.6824},0).wait(1).to({x:-80.1,y:198.7,alpha:0.6849},0).wait(1).to({rotation:-6.7013,x:-80.95,y:202.25,alpha:0.6875},0).wait(1).to({x:-81.75,y:205.65,alpha:0.6899},0).wait(1).to({x:-82.55,y:209.05,alpha:0.6923},0).wait(1).to({x:-83.35,y:212.3,alpha:0.6947},0).wait(1).to({x:-84.1,y:215.5,alpha:0.697},0).wait(1).to({regX:290.9,regY:350.1,scaleX:0.6416,scaleY:0.6416,x:126.95,y:419.95,alpha:0.6992},0).wait(1).to({regX:-0.3,regY:0,scaleX:0.6417,scaleY:0.6417,rotation:-6.7014,x:-85.55,y:221.6,alpha:0.6842},0).wait(1).to({x:-86.25,y:224.55,alpha:0.6696},0).wait(1).to({x:-86.9,y:227.4,alpha:0.6553},0).wait(1).to({rotation:-6.7015,x:-87.55,y:230.2,alpha:0.6413},0).wait(1).to({x:-88.2,y:232.9,alpha:0.6276},0).wait(1).to({x:-88.85,y:235.6,alpha:0.6143},0).wait(1).to({rotation:-6.7016,x:-89.45,y:238.2,alpha:0.6012},0).wait(1).to({x:-90.05,y:240.75,alpha:0.5885},0).wait(1).to({x:-90.65,y:243.2,alpha:0.5761},0).wait(1).to({x:-91.2,y:245.65,alpha:0.5639},0).wait(1).to({rotation:-6.7017,x:-91.75,y:248,alpha:0.5521},0).wait(1).to({x:-92.3,y:250.3,alpha:0.5405},0).wait(1).to({x:-92.85,y:252.6,alpha:0.5292},0).wait(1).to({rotation:-6.7018,x:-93.4,y:254.8,alpha:0.5181},0).wait(1).to({x:-93.9,y:256.95,alpha:0.5073},0).wait(1).to({x:-94.4,y:259.05,alpha:0.4968},0).wait(1).to({x:-94.85,y:261.1,alpha:0.4866},0).wait(1).to({rotation:-6.7019,x:-95.35,y:263.1,alpha:0.4766},0).wait(1).to({x:-95.8,y:265.05,alpha:0.4668},0).wait(1).to({x:-96.25,y:266.95,alpha:0.4573},0).wait(1).to({x:-96.7,y:268.8,alpha:0.448},0).wait(1).to({x:-97.1,y:270.6,alpha:0.4389},0).wait(1).to({rotation:-6.702,x:-97.55,y:272.35,alpha:0.4301},0).wait(1).to({x:-97.95,y:274.1,alpha:0.4214},0).wait(1).to({x:-98.35,y:275.75,alpha:0.413},0).wait(1).to({x:-98.7,y:277.4,alpha:0.4049},0).wait(1).to({x:-99.1,y:279,alpha:0.3969},0).wait(1).to({rotation:-6.7021,x:-99.45,y:280.55,alpha:0.3891},0).wait(1).to({x:-99.8,y:282.05,alpha:0.3816},0).wait(1).to({x:-100.15,y:283.55,alpha:0.3742},0).wait(1).to({x:-100.5,y:284.95,alpha:0.367},0).wait(1).to({x:-100.85,y:286.35,alpha:0.3601},0).wait(1).to({x:-101.15,y:287.7,alpha:0.3533},0).wait(1).to({rotation:-6.7022,x:-101.45,y:289,alpha:0.3467},0).wait(1).to({x:-101.75,y:290.3,alpha:0.3403},0).wait(1).to({x:-102.05,y:291.55,alpha:0.334},0).wait(1).to({x:-102.35,y:292.75,alpha:0.328},0).wait(1).to({x:-102.65,y:293.95,alpha:0.3221},0).wait(1).to({x:-102.9,y:295.05,alpha:0.3164},0).wait(1).to({x:-103.15,y:296.2,alpha:0.3108},0).wait(1).to({rotation:-6.7023,x:-103.4,y:297.25,alpha:0.3055},0).wait(1).to({x:-103.65,y:298.3,alpha:0.3003},0).wait(1).to({x:-103.9,y:299.3,alpha:0.2952},0).wait(1).to({x:-104.15,y:300.3,alpha:0.2903},0).wait(1).to({x:-104.35,y:301.25,alpha:0.2856},0).wait(1).to({x:-104.55,y:302.15,alpha:0.281},0).wait(1).to({x:-104.8,y:303.05,alpha:0.2765},0).wait(1).to({x:-105,y:303.9,alpha:0.2722},0).wait(1).to({x:-105.2,y:304.7,alpha:0.2681},0).wait(1).to({rotation:-6.7024,x:-105.35,y:305.5,alpha:0.2641},0).wait(1).to({x:-105.55,y:306.3,alpha:0.2602},0).wait(1).to({x:-105.75,y:307.05,alpha:0.2565},0).wait(1).to({x:-105.9,y:307.75,alpha:0.2529},0).wait(1).to({x:-106.05,y:308.45,alpha:0.2494},0).wait(1).to({x:-106.2,y:309.1,alpha:0.2461},0).wait(1).to({x:-106.35,y:309.75,alpha:0.2429},0).wait(1).to({x:-106.5,y:310.35,alpha:0.2398},0).wait(1).to({x:-106.65,y:310.95,alpha:0.2369},0).wait(1).to({x:-106.8,y:311.5,alpha:0.2341},0).wait(1).to({x:-106.9,y:312.05,alpha:0.2314},0).wait(1).to({x:-107.05,y:312.55,alpha:0.2288},0).wait(1).to({x:-107.15,y:313.05,alpha:0.2264},0).wait(1).to({rotation:-6.7025,x:-107.25,y:313.5,alpha:0.224},0).wait(1).to({x:-107.35,y:313.95,alpha:0.2218},0).wait(1).to({x:-107.45,y:314.4,alpha:0.2197},0).wait(1).to({x:-107.55,y:314.8,alpha:0.2177},0).wait(1).to({x:-107.65,y:315.15,alpha:0.2158},0).wait(1).to({x:-107.75,y:315.5,alpha:0.2141},0).wait(1).to({x:-107.8,y:315.85,alpha:0.2124},0).wait(1).to({x:-107.9,y:316.15,alpha:0.2108},0).wait(1).to({x:-107.95,y:316.45,alpha:0.2094},0).wait(1).to({x:-108,y:316.7,alpha:0.208},0).wait(1).to({x:-108.05,y:316.95,alpha:0.2068},0).wait(1).to({x:-108.15,y:317.2,alpha:0.2056},0).wait(1).to({y:317.4,alpha:0.2046},0).wait(1).to({x:-108.2,y:317.6,alpha:0.2036},0).wait(1).to({x:-108.25,y:317.75,alpha:0.2028},0).wait(1).to({x:-108.3,y:317.9,alpha:0.202},0).wait(1).to({x:-108.35,y:318.05,alpha:0.2014},0).wait(1).to({y:318.15,alpha:0.2008},0).wait(1).to({x:-108.4,y:318.25,alpha:0.2003},0).wait(1).to({y:318.35,alpha:0.1999},0).wait(1).to({y:318.4,alpha:0.1996},0).wait(1).to({y:318.45,alpha:0.1994},0).wait(1).to({x:-108.45,alpha:0.1993},0).wait(1).to({regX:290.9,regY:350.1,x:103.35,y:519.8,alpha:0.1992},0).to({_off:true},1).wait(16).to({_off:false,regY:350,x:292.05,y:-278.35},0).wait(1).to({regX:-0.3,regY:0,x:77.05,y:-466.1,alpha:0.2089},0).wait(1).to({x:73.85,y:-452.65,alpha:0.2185},0).wait(1).to({rotation:-6.7024,x:70.65,y:-439.2,alpha:0.2281},0).wait(1).to({x:67.5,y:-425.75,alpha:0.2377},0).wait(1).to({x:64.35,y:-412.4,alpha:0.2473},0).wait(1).to({x:61.2,y:-399.05,alpha:0.2569},0).wait(1).to({x:58.05,y:-385.75,alpha:0.2664},0).wait(1).to({rotation:-6.7023,x:54.9,y:-372.5,alpha:0.2759},0).wait(1).to({x:51.8,y:-359.3,alpha:0.2853},0).wait(1).to({x:48.7,y:-346.2,alpha:0.2947},0).wait(1).to({x:45.6,y:-333.15,alpha:0.3041},0).wait(1).to({rotation:-6.7022,x:42.55,y:-320.25,alpha:0.3133},0).wait(1).to({x:39.5,y:-307.4,alpha:0.3225},0).wait(1).to({x:36.5,y:-294.65,alpha:0.3316},0).wait(1).to({x:33.5,y:-282,alpha:0.3407},0).wait(1).to({x:30.55,y:-269.5,alpha:0.3496},0).wait(1).to({rotation:-6.7021,x:27.65,y:-257.15,alpha:0.3585},0).wait(1).to({x:24.75,y:-244.85,alpha:0.3673},0).wait(1).to({x:21.85,y:-232.75,alpha:0.376},0).wait(1).to({x:19.05,y:-220.8,alpha:0.3845},0).wait(1).to({x:16.25,y:-208.95,alpha:0.393},0).wait(1).to({rotation:-6.702,x:13.5,y:-197.3,alpha:0.4013},0).wait(1).to({x:10.75,y:-185.8,alpha:0.4096},0).wait(1).to({x:8.1,y:-174.45,alpha:0.4177},0).wait(1).to({x:5.45,y:-163.3,alpha:0.4257},0).wait(1).to({x:2.85,y:-152.25,alpha:0.4336},0).wait(1).to({rotation:-6.7019,x:0.3,y:-141.45,alpha:0.4413},0).wait(1).to({x:-2.2,y:-130.8,alpha:0.449},0).wait(1).to({x:-4.65,y:-120.3,alpha:0.4565},0).wait(1).to({x:-7.1,y:-110,alpha:0.4638},0).wait(1).to({x:-9.5,y:-99.9,alpha:0.4711},0).wait(1).to({rotation:-6.7018,x:-11.85,y:-89.95,alpha:0.4782},0).wait(1).to({x:-14.15,y:-80.2,alpha:0.4852},0).wait(1).to({x:-16.4,y:-70.65,alpha:0.492},0).wait(1).to({x:-18.65,y:-61.25,alpha:0.4988},0).wait(1).to({x:-20.8,y:-52.05,alpha:0.5053},0).wait(1).to({x:-22.95,y:-43.05,alpha:0.5118},0).wait(1).to({x:-25.05,y:-34.2,alpha:0.5181},0).wait(1).to({rotation:-6.7017,x:-27.1,y:-25.5,alpha:0.5243},0).wait(1).to({x:-29.1,y:-17.05,alpha:0.5304},0).wait(1).to({x:-31.05,y:-8.7,alpha:0.5364},0).wait(1).to({x:-33,y:-0.55,alpha:0.5422},0).wait(1).to({x:-34.85,y:7.35,alpha:0.5479},0).wait(1).to({x:-36.7,y:15.15,alpha:0.5535},0).wait(1).to({x:-38.5,y:22.8,alpha:0.559},0).wait(1).to({rotation:-6.7016,x:-40.3,y:30.25,alpha:0.5643},0).wait(1).to({x:-42,y:37.6,alpha:0.5696},0).wait(1).to({x:-43.7,y:44.75,alpha:0.5747},0).wait(1).to({x:-45.35,y:51.7,alpha:0.5797},0).wait(1).to({x:-47,y:58.55,alpha:0.5846},0).wait(1).to({x:-48.55,y:65.25,alpha:0.5894},0).wait(1).to({x:-50.1,y:71.8,alpha:0.5941},0).wait(1).to({x:-51.6,y:78.2,alpha:0.5986},0).wait(1).to({rotation:-6.7015,x:-53.1,y:84.45,alpha:0.6031},0).wait(1).to({x:-54.55,y:90.55,alpha:0.6075},0).wait(1).to({x:-55.95,y:96.55,alpha:0.6118},0).wait(1).to({x:-57.35,y:102.4,alpha:0.616},0).wait(1).to({x:-58.7,y:108.1,alpha:0.6201},0).wait(1).to({x:-60,y:113.7,alpha:0.6241},0).wait(1).to({x:-61.3,y:119.15,alpha:0.628},0).wait(1).to({x:-62.55,y:124.5,alpha:0.6318},0).wait(1).to({x:-63.8,y:129.7,alpha:0.6355},0).wait(1).to({x:-65,y:134.8,alpha:0.6392},0).wait(1).to({x:-66.2,y:139.8,alpha:0.6427},0).wait(1).to({rotation:-6.7014,x:-67.35,y:144.65,alpha:0.6462},0).wait(1).to({x:-68.45,y:149.4,alpha:0.6496},0).wait(1).to({x:-69.55,y:154.05,alpha:0.653},0).wait(1).to({x:-70.65,y:158.6,alpha:0.6562},0).wait(1).to({x:-71.7,y:163.05,alpha:0.6594},0).wait(1).to({x:-72.7,y:167.4,alpha:0.6625},0).wait(1).to({x:-73.7,y:171.65,alpha:0.6655},0).wait(1).to({x:-74.7,y:175.75,alpha:0.6685},0).wait(1).to({x:-75.65,y:179.8,alpha:0.6714},0).wait(1).to({x:-76.6,y:183.8,alpha:0.6742},0).wait(1).to({x:-77.5,y:187.65,alpha:0.677},0).wait(1).to({x:-78.4,y:191.4,alpha:0.6797},0).wait(1).to({x:-79.25,y:195.1,alpha:0.6824},0).wait(1).to({x:-80.1,y:198.7,alpha:0.6849},0).wait(1).to({rotation:-6.7013,x:-80.95,y:202.25,alpha:0.6875},0).wait(1).to({x:-81.75,y:205.65,alpha:0.6899},0).wait(1).to({x:-82.55,y:209.05,alpha:0.6923},0).wait(1).to({x:-83.35,y:212.3,alpha:0.6947},0).wait(1).to({x:-84.1,y:215.5,alpha:0.697},0).wait(1).to({regX:290.9,regY:350.1,scaleX:0.6416,scaleY:0.6416,x:126.95,y:419.95,alpha:0.6992},0).wait(1).to({regX:-0.3,regY:0,scaleX:0.6417,scaleY:0.6417,rotation:-6.7014,x:-85.55,y:221.6,alpha:0.6842},0).wait(1).to({x:-86.25,y:224.55,alpha:0.6696},0).wait(1).to({x:-86.9,y:227.4,alpha:0.6553},0).wait(1).to({rotation:-6.7015,x:-87.55,y:230.2,alpha:0.6413},0).wait(1).to({x:-88.2,y:232.9,alpha:0.6276},0).wait(1).to({x:-88.85,y:235.6,alpha:0.6143},0).wait(1).to({rotation:-6.7016,x:-89.45,y:238.2,alpha:0.6012},0).wait(1).to({x:-90.05,y:240.75,alpha:0.5885},0).wait(1).to({x:-90.65,y:243.2,alpha:0.5761},0).wait(1).to({x:-91.2,y:245.65,alpha:0.5639},0).wait(1).to({rotation:-6.7017,x:-91.75,y:248,alpha:0.5521},0).wait(1).to({x:-92.3,y:250.3,alpha:0.5405},0).wait(1).to({x:-92.85,y:252.6,alpha:0.5292},0).wait(1).to({rotation:-6.7018,x:-93.4,y:254.8,alpha:0.5181},0).wait(1).to({x:-93.9,y:256.95,alpha:0.5073},0).wait(1).to({x:-94.4,y:259.05,alpha:0.4968},0).wait(1).to({x:-94.85,y:261.1,alpha:0.4866},0).wait(1).to({rotation:-6.7019,x:-95.35,y:263.1,alpha:0.4766},0).wait(1).to({x:-95.8,y:265.05,alpha:0.4668},0).wait(1).to({x:-96.25,y:266.95,alpha:0.4573},0).wait(1).to({x:-96.7,y:268.8,alpha:0.448},0).wait(1).to({x:-97.1,y:270.6,alpha:0.4389},0).wait(1).to({rotation:-6.702,x:-97.55,y:272.35,alpha:0.4301},0).wait(1).to({x:-97.95,y:274.1,alpha:0.4214},0).wait(1).to({x:-98.35,y:275.75,alpha:0.413},0).wait(1).to({x:-98.7,y:277.4,alpha:0.4049},0).wait(1).to({x:-99.1,y:279,alpha:0.3969},0).wait(1).to({rotation:-6.7021,x:-99.45,y:280.55,alpha:0.3891},0).wait(1).to({x:-99.8,y:282.05,alpha:0.3816},0).wait(1).to({x:-100.15,y:283.55,alpha:0.3742},0).wait(1).to({x:-100.5,y:284.95,alpha:0.367},0).wait(1).to({x:-100.85,y:286.35,alpha:0.3601},0).wait(1).to({x:-101.15,y:287.7,alpha:0.3533},0).wait(1).to({rotation:-6.7022,x:-101.45,y:289,alpha:0.3467},0).wait(1).to({x:-101.75,y:290.3,alpha:0.3403},0).wait(1).to({x:-102.05,y:291.55,alpha:0.334},0).wait(1).to({x:-102.35,y:292.75,alpha:0.328},0).wait(1).to({x:-102.65,y:293.95,alpha:0.3221},0).wait(1).to({x:-102.9,y:295.05,alpha:0.3164},0).wait(1).to({x:-103.15,y:296.2,alpha:0.3108},0).wait(1).to({rotation:-6.7023,x:-103.4,y:297.25,alpha:0.3055},0).wait(1).to({x:-103.65,y:298.3,alpha:0.3003},0).wait(1).to({x:-103.9,y:299.3,alpha:0.2952},0).wait(1).to({x:-104.15,y:300.3,alpha:0.2903},0).wait(1).to({x:-104.35,y:301.25,alpha:0.2856},0).wait(1).to({x:-104.55,y:302.15,alpha:0.281},0).wait(1).to({x:-104.8,y:303.05,alpha:0.2765},0).wait(1).to({x:-105,y:303.9,alpha:0.2722},0).wait(1).to({x:-105.2,y:304.7,alpha:0.2681},0).wait(1).to({rotation:-6.7024,x:-105.35,y:305.5,alpha:0.2641},0).wait(1).to({x:-105.55,y:306.3,alpha:0.2602},0).wait(1).to({x:-105.75,y:307.05,alpha:0.2565},0).wait(1).to({x:-105.9,y:307.75,alpha:0.2529},0).wait(1).to({x:-106.05,y:308.45,alpha:0.2494},0).wait(1).to({x:-106.2,y:309.1,alpha:0.2461},0).wait(1).to({x:-106.35,y:309.75,alpha:0.2429},0).wait(1).to({x:-106.5,y:310.35,alpha:0.2398},0).wait(1).to({x:-106.65,y:310.95,alpha:0.2369},0).wait(1).to({x:-106.8,y:311.5,alpha:0.2341},0).wait(1).to({x:-106.9,y:312.05,alpha:0.2314},0).wait(1).to({x:-107.05,y:312.55,alpha:0.2288},0).wait(1).to({x:-107.15,y:313.05,alpha:0.2264},0).wait(1).to({rotation:-6.7025,x:-107.25,y:313.5,alpha:0.224},0).wait(1).to({x:-107.35,y:313.95,alpha:0.2218},0).wait(1).to({x:-107.45,y:314.4,alpha:0.2197},0).wait(1).to({x:-107.55,y:314.8,alpha:0.2177},0).wait(1).to({x:-107.65,y:315.15,alpha:0.2158},0).wait(1).to({x:-107.75,y:315.5,alpha:0.2141},0).wait(1).to({x:-107.8,y:315.85,alpha:0.2124},0).wait(1).to({x:-107.9,y:316.15,alpha:0.2108},0).wait(1).to({x:-107.95,y:316.45,alpha:0.2094},0).wait(1).to({x:-108,y:316.7,alpha:0.208},0).wait(1).to({x:-108.05,y:316.95,alpha:0.2068},0).wait(1).to({x:-108.15,y:317.2,alpha:0.2056},0).wait(1).to({y:317.4,alpha:0.2046},0).wait(1).to({x:-108.2,y:317.6,alpha:0.2036},0).wait(1).to({x:-108.25,y:317.75,alpha:0.2028},0).wait(1).to({x:-108.3,y:317.9,alpha:0.202},0).wait(1).to({x:-108.35,y:318.05,alpha:0.2014},0).wait(1).to({y:318.15,alpha:0.2008},0).wait(1).to({x:-108.4,y:318.25,alpha:0.2003},0).wait(1).to({y:318.35,alpha:0.1999},0).wait(1).to({y:318.4,alpha:0.1996},0).wait(1).to({y:318.45,alpha:0.1994},0).wait(1).to({x:-108.45,alpha:0.1993},0).wait(1).to({regX:290.9,regY:350.1,x:103.35,y:519.8,alpha:0.1992},0).to({_off:true},1).wait(40));
    
        // レイヤー_1
        this.instance_2 = new lib.g_snow("synched",0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(313,-241.2,0.6417,0.6417,0,0,0,290.8,350.1);
        this.instance_2.alpha = 0.1992;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:-0.3,regY:0,rotation:-0.1293,x:122.1,y:-452.65,alpha:0.205},0).wait(1).to({rotation:-0.2585,x:118,y:-439.5,alpha:0.2108},0).wait(1).to({rotation:-0.3875,x:113.9,y:-426.3,alpha:0.2166},0).wait(1).to({rotation:-0.5164,x:109.8,y:-413.2,alpha:0.2224},0).wait(1).to({rotation:-0.6448,x:105.75,y:-400.1,alpha:0.2282},0).wait(1).to({rotation:-0.773,x:101.7,y:-387,alpha:0.2339},0).wait(1).to({rotation:-0.9006,x:97.65,y:-374,alpha:0.2396},0).wait(1).to({rotation:-1.0277,x:93.65,y:-361.05,alpha:0.2453},0).wait(1).to({rotation:-1.1542,x:89.65,y:-348.15,alpha:0.251},0).wait(1).to({rotation:-1.28,x:85.65,y:-335.3,alpha:0.2567},0).wait(1).to({rotation:-1.405,x:81.7,y:-322.55,alpha:0.2623},0).wait(1).to({rotation:-1.5292,x:77.8,y:-309.9,alpha:0.2679},0).wait(1).to({rotation:-1.6525,x:73.9,y:-297.3,alpha:0.2734},0).wait(1).to({rotation:-1.7747,x:70.05,y:-284.85,alpha:0.2789},0).wait(1).to({rotation:-1.8959,x:66.2,y:-272.45,alpha:0.2843},0).wait(1).to({rotation:-2.016,x:62.4,y:-260.2,alpha:0.2897},0).wait(1).to({rotation:-2.1348,x:58.65,y:-248.1,alpha:0.295},0).wait(1).to({rotation:-2.2524,x:54.95,y:-236.1,alpha:0.3003},0).wait(1).to({rotation:-2.3687,x:51.3,y:-224.2,alpha:0.3055},0).wait(1).to({rotation:-2.4836,x:47.65,y:-212.5,alpha:0.3107},0).wait(1).to({rotation:-2.597,x:44.05,y:-200.9,alpha:0.3158},0).wait(1).to({rotation:-2.709,x:40.55,y:-189.5,alpha:0.3208},0).wait(1).to({rotation:-2.8194,x:37.05,y:-178.2,alpha:0.3258},0).wait(1).to({rotation:-2.9282,x:33.65,y:-167.1,alpha:0.3306},0).wait(1).to({rotation:-3.0355,x:30.25,y:-156.15,alpha:0.3355},0).wait(1).to({rotation:-3.1411,x:26.9,y:-145.35,alpha:0.3402},0).wait(1).to({rotation:-3.245,x:23.65,y:-134.75,alpha:0.3449},0).wait(1).to({rotation:-3.3473,x:20.45,y:-124.3,alpha:0.3495},0).wait(1).to({rotation:-3.4478,x:17.25,y:-114,alpha:0.354},0).wait(1).to({scaleX:0.6416,scaleY:0.6416,rotation:-3.5466,x:14.15,y:-103.9,alpha:0.3584},0).wait(1).to({scaleX:0.6417,scaleY:0.6417,rotation:-3.6437,x:11.1,y:-94,alpha:0.3628},0).wait(1).to({rotation:-3.739,x:8.1,y:-84.25,alpha:0.367},0).wait(1).to({rotation:-3.8326,x:5.15,y:-74.7,alpha:0.3712},0).wait(1).to({rotation:-3.9245,x:2.25,y:-65.3,alpha:0.3754},0).wait(1).to({rotation:-4.0145,x:-0.5,y:-56.1,alpha:0.3794},0).wait(1).to({rotation:-4.1029,x:-3.3,y:-47.1,alpha:0.3834},0).wait(1).to({rotation:-4.1895,x:-6,y:-38.25,alpha:0.3873},0).wait(1).to({rotation:-4.2744,x:-8.7,y:-29.55,alpha:0.3911},0).wait(1).to({rotation:-4.3576,x:-11.3,y:-21.05,alpha:0.3948},0).wait(1).to({rotation:-4.439,x:-13.85,y:-12.75,alpha:0.3985},0).wait(1).to({scaleX:0.6416,scaleY:0.6416,rotation:-4.5189,x:-16.35,y:-4.55,alpha:0.402},0).wait(1).to({scaleX:0.6417,scaleY:0.6417,rotation:-4.597,x:-18.85,y:3.35,alpha:0.4055},0).wait(1).to({rotation:-4.6735,x:-21.25,y:11.2,alpha:0.409},0).wait(1).to({rotation:-4.7484,x:-23.6,y:18.85,alpha:0.4123},0).wait(1).to({rotation:-4.8217,x:-25.9,y:26.35,alpha:0.4156},0).wait(1).to({rotation:-4.8934,x:-28.15,y:33.65,alpha:0.4189},0).wait(1).to({rotation:-4.9635,x:-30.35,y:40.85,alpha:0.422},0).wait(1).to({rotation:-5.0322,x:-32.5,y:47.85,alpha:0.4251},0).wait(1).to({rotation:-5.0993,x:-34.6,y:54.7,alpha:0.4281},0).wait(1).to({rotation:-5.165,x:-36.65,y:61.45,alpha:0.431},0).wait(1).to({rotation:-5.2292,x:-38.7,y:68,alpha:0.4339},0).wait(1).to({rotation:-5.292,x:-40.65,y:74.45,alpha:0.4367},0).wait(1).to({scaleX:0.6416,scaleY:0.6416,rotation:-5.3534,x:-42.55,y:80.7,alpha:0.4395},0).wait(1).to({scaleX:0.6417,scaleY:0.6417,rotation:-5.4135,x:-44.45,y:86.85,alpha:0.4422},0).wait(1).to({rotation:-5.4722,x:-46.3,y:92.85,alpha:0.4448},0).wait(1).to({rotation:-5.5295,x:-48.1,y:98.7,alpha:0.4474},0).wait(1).to({rotation:-5.5856,x:-49.85,y:104.45,alpha:0.4499},0).wait(1).to({rotation:-5.6405,x:-51.6,y:110.05,alpha:0.4524},0).wait(1).to({rotation:-5.6941,x:-53.25,y:115.55,alpha:0.4548},0).wait(1).to({rotation:-5.7465,x:-54.9,y:120.9,alpha:0.4571},0).wait(1).to({rotation:-5.7977,x:-56.5,y:126.15,alpha:0.4594},0).wait(1).to({rotation:-5.8477,x:-58.05,y:131.25,alpha:0.4617},0).wait(1).to({rotation:-5.8967,x:-59.6,y:136.3,alpha:0.4639},0).wait(1).to({rotation:-5.9445,x:-61.1,y:141.15,alpha:0.466},0).wait(1).to({rotation:-5.9912,x:-62.55,y:145.95,alpha:0.4681},0).wait(1).to({rotation:-6.0369,x:-64,y:150.6,alpha:0.4702},0).wait(1).to({rotation:-6.0815,x:-65.4,y:155.2,alpha:0.4722},0).wait(1).to({rotation:-6.1251,x:-66.75,y:159.65,alpha:0.4741},0).wait(1).to({rotation:-6.1677,x:-68.1,y:164,alpha:0.476},0).wait(1).to({scaleX:0.6416,scaleY:0.6416,rotation:-6.2094,x:-69.4,y:168.25,alpha:0.4779},0).wait(1).to({rotation:-6.25,x:-70.65,y:172.45,alpha:0.4797},0).wait(1).to({rotation:-6.2898,x:-71.9,y:176.5,alpha:0.4815},0).wait(1).to({scaleX:0.6417,scaleY:0.6417,rotation:-6.3287,x:-73.15,y:180.5,alpha:0.4833},0).wait(1).to({rotation:-6.3666,x:-74.3,y:184.35,alpha:0.485},0).wait(1).to({rotation:-6.4037,x:-75.5,y:188.15,alpha:0.4866},0).wait(1).to({rotation:-6.44,x:-76.6,y:191.85,alpha:0.4883},0).wait(1).to({rotation:-6.4754,x:-77.75,y:195.5,alpha:0.4899},0).wait(1).to({rotation:-6.5099,x:-78.8,y:199.05,alpha:0.4914},0).wait(1).to({rotation:-6.5437,x:-79.85,y:202.5,alpha:0.4929},0).wait(1).to({rotation:-6.5767,x:-80.9,y:205.85,alpha:0.4944},0).wait(1).to({rotation:-6.609,x:-81.9,y:209.15,alpha:0.4959},0).wait(1).to({rotation:-6.6405,x:-82.9,y:212.4,alpha:0.4973},0).wait(1).to({rotation:-6.6713,x:-83.85,y:215.55,alpha:0.4987},0).wait(1).to({regX:290.9,regY:350.1,scaleX:0.6416,scaleY:0.6416,rotation:-6.7013,x:126.95,y:419.95,alpha:0.5},0).wait(1).to({regX:-0.3,regY:0,scaleX:0.6417,scaleY:0.6417,rotation:-6.7014,x:-85.55,y:221.6,alpha:0.491},0).wait(1).to({x:-86.25,y:224.55,alpha:0.4822},0).wait(1).to({x:-86.9,y:227.4,alpha:0.4736},0).wait(1).to({rotation:-6.7015,x:-87.55,y:230.2,alpha:0.4651},0).wait(1).to({x:-88.2,y:232.9,alpha:0.4569},0).wait(1).to({x:-88.85,y:235.6,alpha:0.4489},0).wait(1).to({rotation:-6.7016,x:-89.45,y:238.2,alpha:0.4411},0).wait(1).to({x:-90.05,y:240.75,alpha:0.4334},0).wait(1).to({x:-90.65,y:243.2,alpha:0.4259},0).wait(1).to({x:-91.2,y:245.65,alpha:0.4186},0).wait(1).to({rotation:-6.7017,x:-91.75,y:248,alpha:0.4115},0).wait(1).to({x:-92.3,y:250.3,alpha:0.4045},0).wait(1).to({x:-92.85,y:252.6,alpha:0.3977},0).wait(1).to({rotation:-6.7018,x:-93.4,y:254.8,alpha:0.3911},0).wait(1).to({x:-93.9,y:256.95,alpha:0.3846},0).wait(1).to({x:-94.4,y:259.05,alpha:0.3783},0).wait(1).to({x:-94.85,y:261.1,alpha:0.3721},0).wait(1).to({rotation:-6.7019,x:-95.35,y:263.1,alpha:0.3661},0).wait(1).to({x:-95.8,y:265.05,alpha:0.3602},0).wait(1).to({x:-96.25,y:266.95,alpha:0.3544},0).wait(1).to({x:-96.7,y:268.8,alpha:0.3489},0).wait(1).to({x:-97.1,y:270.6,alpha:0.3434},0).wait(1).to({rotation:-6.702,x:-97.55,y:272.35,alpha:0.3381},0).wait(1).to({x:-97.95,y:274.1,alpha:0.3329},0).wait(1).to({x:-98.35,y:275.75,alpha:0.3279},0).wait(1).to({x:-98.7,y:277.4,alpha:0.3229},0).wait(1).to({x:-99.1,y:279,alpha:0.3181},0).wait(1).to({rotation:-6.7021,x:-99.45,y:280.55,alpha:0.3135},0).wait(1).to({x:-99.8,y:282.05,alpha:0.3089},0).wait(1).to({x:-100.15,y:283.55,alpha:0.3045},0).wait(1).to({x:-100.5,y:284.95,alpha:0.3002},0).wait(1).to({x:-100.85,y:286.35,alpha:0.296},0).wait(1).to({x:-101.15,y:287.7,alpha:0.2919},0).wait(1).to({rotation:-6.7022,x:-101.45,y:289,alpha:0.2879},0).wait(1).to({x:-101.75,y:290.3,alpha:0.2841},0).wait(1).to({x:-102.05,y:291.55,alpha:0.2803},0).wait(1).to({x:-102.35,y:292.75,alpha:0.2767},0).wait(1).to({x:-102.65,y:293.95,alpha:0.2731},0).wait(1).to({x:-102.9,y:295.05,alpha:0.2697},0).wait(1).to({x:-103.15,y:296.2,alpha:0.2664},0).wait(1).to({rotation:-6.7023,x:-103.4,y:297.25,alpha:0.2631},0).wait(1).to({x:-103.65,y:298.3,alpha:0.26},0).wait(1).to({x:-103.9,y:299.3,alpha:0.257},0).wait(1).to({x:-104.15,y:300.3,alpha:0.254},0).wait(1).to({x:-104.35,y:301.25,alpha:0.2512},0).wait(1).to({x:-104.55,y:302.15,alpha:0.2484},0).wait(1).to({x:-104.8,y:303.05,alpha:0.2457},0).wait(1).to({x:-105,y:303.9,alpha:0.2431},0).wait(1).to({x:-105.2,y:304.7,alpha:0.2406},0).wait(1).to({rotation:-6.7024,x:-105.35,y:305.5,alpha:0.2382},0).wait(1).to({x:-105.55,y:306.3,alpha:0.2359},0).wait(1).to({x:-105.75,y:307.05,alpha:0.2337},0).wait(1).to({x:-105.9,y:307.75,alpha:0.2315},0).wait(1).to({x:-106.05,y:308.45,alpha:0.2294},0).wait(1).to({x:-106.2,y:309.1,alpha:0.2274},0).wait(1).to({x:-106.35,y:309.75,alpha:0.2255},0).wait(1).to({x:-106.5,y:310.35,alpha:0.2237},0).wait(1).to({x:-106.65,y:310.95,alpha:0.2219},0).wait(1).to({x:-106.8,y:311.5,alpha:0.2202},0).wait(1).to({x:-106.9,y:312.05,alpha:0.2186},0).wait(1).to({x:-107.05,y:312.55,alpha:0.217},0).wait(1).to({x:-107.15,y:313.05,alpha:0.2156},0).wait(1).to({rotation:-6.7025,x:-107.25,y:313.5,alpha:0.2141},0).wait(1).to({x:-107.35,y:313.95,alpha:0.2128},0).wait(1).to({x:-107.45,y:314.4,alpha:0.2115},0).wait(1).to({x:-107.55,y:314.8,alpha:0.2103},0).wait(1).to({x:-107.65,y:315.15,alpha:0.2092},0).wait(1).to({x:-107.75,y:315.5,alpha:0.2081},0).wait(1).to({x:-107.8,y:315.85,alpha:0.2071},0).wait(1).to({x:-107.9,y:316.15,alpha:0.2062},0).wait(1).to({x:-107.95,y:316.45,alpha:0.2053},0).wait(1).to({x:-108,y:316.7,alpha:0.2045},0).wait(1).to({x:-108.05,y:316.95,alpha:0.2038},0).wait(1).to({x:-108.15,y:317.2,alpha:0.2031},0).wait(1).to({y:317.4,alpha:0.2024},0).wait(1).to({x:-108.2,y:317.6,alpha:0.2019},0).wait(1).to({x:-108.25,y:317.75,alpha:0.2014},0).wait(1).to({x:-108.3,y:317.9,alpha:0.2009},0).wait(1).to({x:-108.35,y:318.05,alpha:0.2005},0).wait(1).to({y:318.15,alpha:0.2002},0).wait(1).to({x:-108.4,y:318.25,alpha:0.1999},0).wait(1).to({y:318.35,alpha:0.1996},0).wait(1).to({y:318.4,alpha:0.1995},0).wait(1).to({y:318.45,alpha:0.1993},0).wait(1).to({x:-108.45,alpha:0.1992},0).wait(1).to({regX:290.9,regY:350.1,x:103.35,y:519.8},0).to({_off:true},1).wait(16).to({_off:false,regX:290.8,rotation:0,x:313,y:-241.2},0).wait(1).to({regX:-0.3,regY:0,rotation:-0.1293,x:122.1,y:-452.65,alpha:0.205},0).wait(1).to({rotation:-0.2585,x:118,y:-439.5,alpha:0.2108},0).wait(1).to({rotation:-0.3875,x:113.9,y:-426.3,alpha:0.2166},0).wait(1).to({rotation:-0.5164,x:109.8,y:-413.2,alpha:0.2224},0).wait(1).to({rotation:-0.6448,x:105.75,y:-400.1,alpha:0.2282},0).wait(1).to({rotation:-0.773,x:101.7,y:-387,alpha:0.2339},0).wait(1).to({rotation:-0.9006,x:97.65,y:-374,alpha:0.2396},0).wait(1).to({rotation:-1.0277,x:93.65,y:-361.05,alpha:0.2453},0).wait(1).to({rotation:-1.1542,x:89.65,y:-348.15,alpha:0.251},0).wait(1).to({rotation:-1.28,x:85.65,y:-335.3,alpha:0.2567},0).wait(1).to({rotation:-1.405,x:81.7,y:-322.55,alpha:0.2623},0).wait(1).to({rotation:-1.5292,x:77.8,y:-309.9,alpha:0.2679},0).wait(1).to({rotation:-1.6525,x:73.9,y:-297.3,alpha:0.2734},0).wait(1).to({rotation:-1.7747,x:70.05,y:-284.85,alpha:0.2789},0).wait(1).to({rotation:-1.8959,x:66.2,y:-272.45,alpha:0.2843},0).wait(1).to({rotation:-2.016,x:62.4,y:-260.2,alpha:0.2897},0).wait(1).to({rotation:-2.1348,x:58.65,y:-248.1,alpha:0.295},0).wait(1).to({rotation:-2.2524,x:54.95,y:-236.1,alpha:0.3003},0).wait(1).to({rotation:-2.3687,x:51.3,y:-224.2,alpha:0.3055},0).wait(1).to({rotation:-2.4836,x:47.65,y:-212.5,alpha:0.3107},0).wait(1).to({rotation:-2.597,x:44.05,y:-200.9,alpha:0.3158},0).wait(1).to({rotation:-2.709,x:40.55,y:-189.5,alpha:0.3208},0).wait(1).to({rotation:-2.8194,x:37.05,y:-178.2,alpha:0.3258},0).wait(1).to({rotation:-2.9282,x:33.65,y:-167.1,alpha:0.3306},0).wait(1).to({rotation:-3.0355,x:30.25,y:-156.15,alpha:0.3355},0).wait(1).to({rotation:-3.1411,x:26.9,y:-145.35,alpha:0.3402},0).wait(1).to({rotation:-3.245,x:23.65,y:-134.75,alpha:0.3449},0).wait(1).to({rotation:-3.3473,x:20.45,y:-124.3,alpha:0.3495},0).wait(1).to({rotation:-3.4478,x:17.25,y:-114,alpha:0.354},0).wait(1).to({scaleX:0.6416,scaleY:0.6416,rotation:-3.5466,x:14.15,y:-103.9,alpha:0.3584},0).wait(1).to({scaleX:0.6417,scaleY:0.6417,rotation:-3.6437,x:11.1,y:-94,alpha:0.3628},0).wait(1).to({rotation:-3.739,x:8.1,y:-84.25,alpha:0.367},0).wait(1).to({rotation:-3.8326,x:5.15,y:-74.7,alpha:0.3712},0).wait(1).to({rotation:-3.9245,x:2.25,y:-65.3,alpha:0.3754},0).wait(1).to({rotation:-4.0145,x:-0.5,y:-56.1,alpha:0.3794},0).wait(1).to({rotation:-4.1029,x:-3.3,y:-47.1,alpha:0.3834},0).wait(1).to({rotation:-4.1895,x:-6,y:-38.25,alpha:0.3873},0).wait(1).to({rotation:-4.2744,x:-8.7,y:-29.55,alpha:0.3911},0).wait(1).to({rotation:-4.3576,x:-11.3,y:-21.05,alpha:0.3948},0).wait(1).to({rotation:-4.439,x:-13.85,y:-12.75,alpha:0.3985},0).wait(1).to({scaleX:0.6416,scaleY:0.6416,rotation:-4.5189,x:-16.35,y:-4.55,alpha:0.402},0).wait(1).to({scaleX:0.6417,scaleY:0.6417,rotation:-4.597,x:-18.85,y:3.35,alpha:0.4055},0).wait(1).to({rotation:-4.6735,x:-21.25,y:11.2,alpha:0.409},0).wait(1).to({rotation:-4.7484,x:-23.6,y:18.85,alpha:0.4123},0).wait(1).to({rotation:-4.8217,x:-25.9,y:26.35,alpha:0.4156},0).wait(1).to({rotation:-4.8934,x:-28.15,y:33.65,alpha:0.4189},0).wait(1).to({rotation:-4.9635,x:-30.35,y:40.85,alpha:0.422},0).wait(1).to({rotation:-5.0322,x:-32.5,y:47.85,alpha:0.4251},0).wait(1).to({rotation:-5.0993,x:-34.6,y:54.7,alpha:0.4281},0).wait(1).to({rotation:-5.165,x:-36.65,y:61.45,alpha:0.431},0).wait(1).to({rotation:-5.2292,x:-38.7,y:68,alpha:0.4339},0).wait(1).to({rotation:-5.292,x:-40.65,y:74.45,alpha:0.4367},0).wait(1).to({scaleX:0.6416,scaleY:0.6416,rotation:-5.3534,x:-42.55,y:80.7,alpha:0.4395},0).wait(1).to({scaleX:0.6417,scaleY:0.6417,rotation:-5.4135,x:-44.45,y:86.85,alpha:0.4422},0).wait(1).to({rotation:-5.4722,x:-46.3,y:92.85,alpha:0.4448},0).wait(1).to({rotation:-5.5295,x:-48.1,y:98.7,alpha:0.4474},0).wait(1).to({rotation:-5.5856,x:-49.85,y:104.45,alpha:0.4499},0).wait(1).to({rotation:-5.6405,x:-51.6,y:110.05,alpha:0.4524},0).wait(1).to({rotation:-5.6941,x:-53.25,y:115.55,alpha:0.4548},0).wait(1).to({rotation:-5.7465,x:-54.9,y:120.9,alpha:0.4571},0).wait(1).to({rotation:-5.7977,x:-56.5,y:126.15,alpha:0.4594},0).wait(1).to({rotation:-5.8477,x:-58.05,y:131.25,alpha:0.4617},0).wait(1).to({rotation:-5.8967,x:-59.6,y:136.3,alpha:0.4639},0).wait(1).to({rotation:-5.9445,x:-61.1,y:141.15,alpha:0.466},0).wait(1).to({rotation:-5.9912,x:-62.55,y:145.95,alpha:0.4681},0).wait(1).to({rotation:-6.0369,x:-64,y:150.6,alpha:0.4702},0).wait(1).to({rotation:-6.0815,x:-65.4,y:155.2,alpha:0.4722},0).wait(1).to({rotation:-6.1251,x:-66.75,y:159.65,alpha:0.4741},0).wait(1).to({rotation:-6.1677,x:-68.1,y:164,alpha:0.476},0).wait(1).to({scaleX:0.6416,scaleY:0.6416,rotation:-6.2094,x:-69.4,y:168.25,alpha:0.4779},0).wait(1).to({rotation:-6.25,x:-70.65,y:172.45,alpha:0.4797},0).wait(1).to({rotation:-6.2898,x:-71.9,y:176.5,alpha:0.4815},0).wait(1).to({scaleX:0.6417,scaleY:0.6417,rotation:-6.3287,x:-73.15,y:180.5,alpha:0.4833},0).wait(1).to({rotation:-6.3666,x:-74.3,y:184.35,alpha:0.485},0).wait(1).to({rotation:-6.4037,x:-75.5,y:188.15,alpha:0.4866},0).wait(1).to({rotation:-6.44,x:-76.6,y:191.85,alpha:0.4883},0).wait(1).to({rotation:-6.4754,x:-77.75,y:195.5,alpha:0.4899},0).wait(1).to({rotation:-6.5099,x:-78.8,y:199.05,alpha:0.4914},0).wait(1).to({rotation:-6.5437,x:-79.85,y:202.5,alpha:0.4929},0).wait(1).to({rotation:-6.5767,x:-80.9,y:205.85,alpha:0.4944},0).wait(1).to({rotation:-6.609,x:-81.9,y:209.15,alpha:0.4959},0).wait(1).to({rotation:-6.6405,x:-82.9,y:212.4,alpha:0.4973},0).wait(1).to({rotation:-6.6713,x:-83.85,y:215.55,alpha:0.4987},0).wait(1).to({regX:290.9,regY:350.1,scaleX:0.6416,scaleY:0.6416,rotation:-6.7013,x:126.95,y:419.95,alpha:0.5},0).wait(1).to({regX:-0.3,regY:0,scaleX:0.6417,scaleY:0.6417,rotation:-6.7014,x:-85.55,y:221.6,alpha:0.491},0).wait(1).to({x:-86.25,y:224.55,alpha:0.4822},0).wait(1).to({x:-86.9,y:227.4,alpha:0.4736},0).wait(1).to({rotation:-6.7015,x:-87.55,y:230.2,alpha:0.4651},0).wait(1).to({x:-88.2,y:232.9,alpha:0.4569},0).wait(1).to({x:-88.85,y:235.6,alpha:0.4489},0).wait(1).to({rotation:-6.7016,x:-89.45,y:238.2,alpha:0.4411},0).wait(1).to({x:-90.05,y:240.75,alpha:0.4334},0).wait(1).to({x:-90.65,y:243.2,alpha:0.4259},0).wait(1).to({x:-91.2,y:245.65,alpha:0.4186},0).wait(1).to({rotation:-6.7017,x:-91.75,y:248,alpha:0.4115},0).wait(1).to({x:-92.3,y:250.3,alpha:0.4045},0).wait(1).to({x:-92.85,y:252.6,alpha:0.3977},0).wait(1).to({rotation:-6.7018,x:-93.4,y:254.8,alpha:0.3911},0).wait(1).to({x:-93.9,y:256.95,alpha:0.3846},0).wait(1).to({x:-94.4,y:259.05,alpha:0.3783},0).wait(1).to({x:-94.85,y:261.1,alpha:0.3721},0).wait(1).to({rotation:-6.7019,x:-95.35,y:263.1,alpha:0.3661},0).wait(1).to({x:-95.8,y:265.05,alpha:0.3602},0).wait(1).to({x:-96.25,y:266.95,alpha:0.3544},0).wait(1).to({x:-96.7,y:268.8,alpha:0.3489},0).wait(1).to({x:-97.1,y:270.6,alpha:0.3434},0).wait(1).to({rotation:-6.702,x:-97.55,y:272.35,alpha:0.3381},0).wait(1).to({x:-97.95,y:274.1,alpha:0.3329},0).wait(1).to({x:-98.35,y:275.75,alpha:0.3279},0).wait(1).to({x:-98.7,y:277.4,alpha:0.3229},0).wait(1).to({x:-99.1,y:279,alpha:0.3181},0).wait(1).to({rotation:-6.7021,x:-99.45,y:280.55,alpha:0.3135},0).wait(1).to({x:-99.8,y:282.05,alpha:0.3089},0).wait(1).to({x:-100.15,y:283.55,alpha:0.3045},0).wait(1).to({x:-100.5,y:284.95,alpha:0.3002},0).wait(1).to({x:-100.85,y:286.35,alpha:0.296},0).wait(1).to({x:-101.15,y:287.7,alpha:0.2919},0).wait(1).to({rotation:-6.7022,x:-101.45,y:289,alpha:0.2879},0).wait(1).to({x:-101.75,y:290.3,alpha:0.2841},0).wait(1).to({x:-102.05,y:291.55,alpha:0.2803},0).wait(1).to({x:-102.35,y:292.75,alpha:0.2767},0).wait(1).to({x:-102.65,y:293.95,alpha:0.2731},0).wait(1).to({x:-102.9,y:295.05,alpha:0.2697},0).wait(1).to({x:-103.15,y:296.2,alpha:0.2664},0).wait(1).to({rotation:-6.7023,x:-103.4,y:297.25,alpha:0.2631},0).wait(1).to({x:-103.65,y:298.3,alpha:0.26},0).wait(1).to({x:-103.9,y:299.3,alpha:0.257},0).wait(1).to({x:-104.15,y:300.3,alpha:0.254},0).wait(1).to({x:-104.35,y:301.25,alpha:0.2512},0).wait(1).to({x:-104.55,y:302.15,alpha:0.2484},0).wait(1).to({x:-104.8,y:303.05,alpha:0.2457},0).wait(1).to({x:-105,y:303.9,alpha:0.2431},0).wait(1).to({x:-105.2,y:304.7,alpha:0.2406},0).wait(1).to({rotation:-6.7024,x:-105.35,y:305.5,alpha:0.2382},0).wait(1).to({x:-105.55,y:306.3,alpha:0.2359},0).wait(1).to({x:-105.75,y:307.05,alpha:0.2337},0).wait(1).to({x:-105.9,y:307.75,alpha:0.2315},0).wait(1).to({x:-106.05,y:308.45,alpha:0.2294},0).wait(1).to({x:-106.2,y:309.1,alpha:0.2274},0).wait(1).to({x:-106.35,y:309.75,alpha:0.2255},0).wait(1).to({x:-106.5,y:310.35,alpha:0.2237},0).wait(1).to({x:-106.65,y:310.95,alpha:0.2219},0).wait(1).to({x:-106.8,y:311.5,alpha:0.2202},0).wait(1).to({x:-106.9,y:312.05,alpha:0.2186},0).wait(1).to({x:-107.05,y:312.55,alpha:0.217},0).wait(1).to({x:-107.15,y:313.05,alpha:0.2156},0).wait(1).to({rotation:-6.7025,x:-107.25,y:313.5,alpha:0.2141},0).wait(1).to({x:-107.35,y:313.95,alpha:0.2128},0).wait(1).to({x:-107.45,y:314.4,alpha:0.2115},0).wait(1).to({x:-107.55,y:314.8,alpha:0.2103},0).wait(1).to({x:-107.65,y:315.15,alpha:0.2092},0).wait(1).to({x:-107.75,y:315.5,alpha:0.2081},0).wait(1).to({x:-107.8,y:315.85,alpha:0.2071},0).wait(1).to({x:-107.9,y:316.15,alpha:0.2062},0).wait(1).to({x:-107.95,y:316.45,alpha:0.2053},0).wait(1).to({x:-108,y:316.7,alpha:0.2045},0).wait(1).to({x:-108.05,y:316.95,alpha:0.2038},0).wait(1).to({x:-108.15,y:317.2,alpha:0.2031},0).wait(1).to({y:317.4,alpha:0.2024},0).wait(1).to({x:-108.2,y:317.6,alpha:0.2019},0).wait(1).to({x:-108.25,y:317.75,alpha:0.2014},0).wait(1).to({x:-108.3,y:317.9,alpha:0.2009},0).wait(1).to({x:-108.35,y:318.05,alpha:0.2005},0).wait(1).to({y:318.15,alpha:0.2002},0).wait(1).to({x:-108.4,y:318.25,alpha:0.1999},0).wait(1).to({y:318.35,alpha:0.1996},0).wait(1).to({y:318.4,alpha:0.1995},0).wait(1).to({y:318.45,alpha:0.1993},0).wait(1).to({x:-108.45,alpha:0.1992},0).wait(1).to({regX:290.9,regY:350.1,x:103.35,y:519.8},0).to({_off:true},1).wait(16).to({_off:false,regX:290.8,rotation:0,x:313,y:-241.2},0).wait(1).to({regX:-0.3,regY:0,rotation:-0.1293,x:122.1,y:-452.65,alpha:0.205},0).wait(1).to({rotation:-0.2585,x:118,y:-439.5,alpha:0.2108},0).wait(1).to({rotation:-0.3875,x:113.9,y:-426.3,alpha:0.2166},0).wait(1).to({rotation:-0.5164,x:109.8,y:-413.2,alpha:0.2224},0).wait(1).to({rotation:-0.6448,x:105.75,y:-400.1,alpha:0.2282},0).wait(1).to({rotation:-0.773,x:101.7,y:-387,alpha:0.2339},0).wait(1).to({rotation:-0.9006,x:97.65,y:-374,alpha:0.2396},0).wait(1).to({rotation:-1.0277,x:93.65,y:-361.05,alpha:0.2453},0).wait(1).to({rotation:-1.1542,x:89.65,y:-348.15,alpha:0.251},0).wait(1).to({rotation:-1.28,x:85.65,y:-335.3,alpha:0.2567},0).wait(1).to({rotation:-1.405,x:81.7,y:-322.55,alpha:0.2623},0).wait(1).to({rotation:-1.5292,x:77.8,y:-309.9,alpha:0.2679},0).wait(1).to({rotation:-1.6525,x:73.9,y:-297.3,alpha:0.2734},0).wait(1).to({rotation:-1.7747,x:70.05,y:-284.85,alpha:0.2789},0).wait(1).to({rotation:-1.8959,x:66.2,y:-272.45,alpha:0.2843},0).wait(1).to({rotation:-2.016,x:62.4,y:-260.2,alpha:0.2897},0).wait(1).to({rotation:-2.1348,x:58.65,y:-248.1,alpha:0.295},0).wait(1).to({rotation:-2.2524,x:54.95,y:-236.1,alpha:0.3003},0).wait(1).to({rotation:-2.3687,x:51.3,y:-224.2,alpha:0.3055},0).wait(1).to({rotation:-2.4836,x:47.65,y:-212.5,alpha:0.3107},0).wait(1).to({rotation:-2.597,x:44.05,y:-200.9,alpha:0.3158},0).wait(1).to({rotation:-2.709,x:40.55,y:-189.5,alpha:0.3208},0).wait(1).to({rotation:-2.8194,x:37.05,y:-178.2,alpha:0.3258},0).wait(1).to({rotation:-2.9282,x:33.65,y:-167.1,alpha:0.3306},0).wait(1).to({rotation:-3.0355,x:30.25,y:-156.15,alpha:0.3355},0).wait(1).to({rotation:-3.1411,x:26.9,y:-145.35,alpha:0.3402},0).wait(1).to({rotation:-3.245,x:23.65,y:-134.75,alpha:0.3449},0).wait(1).to({rotation:-3.3473,x:20.45,y:-124.3,alpha:0.3495},0).wait(1).to({rotation:-3.4478,x:17.25,y:-114,alpha:0.354},0).wait(1).to({scaleX:0.6416,scaleY:0.6416,rotation:-3.5466,x:14.15,y:-103.9,alpha:0.3584},0).wait(1).to({scaleX:0.6417,scaleY:0.6417,rotation:-3.6437,x:11.1,y:-94,alpha:0.3628},0).wait(1).to({rotation:-3.739,x:8.1,y:-84.25,alpha:0.367},0).wait(1).to({rotation:-3.8326,x:5.15,y:-74.7,alpha:0.3712},0).wait(1).to({rotation:-3.9245,x:2.25,y:-65.3,alpha:0.3754},0).wait(1).to({rotation:-4.0145,x:-0.5,y:-56.1,alpha:0.3794},0).wait(1).to({rotation:-4.1029,x:-3.3,y:-47.1,alpha:0.3834},0).wait(1).to({rotation:-4.1895,x:-6,y:-38.25,alpha:0.3873},0).wait(1).to({rotation:-4.2744,x:-8.7,y:-29.55,alpha:0.3911},0).wait(1).to({rotation:-4.3576,x:-11.3,y:-21.05,alpha:0.3948},0).wait(1).to({rotation:-4.439,x:-13.85,y:-12.75,alpha:0.3985},0).wait(1).to({scaleX:0.6416,scaleY:0.6416,rotation:-4.5189,x:-16.35,y:-4.55,alpha:0.402},0).wait(1).to({scaleX:0.6417,scaleY:0.6417,rotation:-4.597,x:-18.85,y:3.35,alpha:0.4055},0).wait(1).to({rotation:-4.6735,x:-21.25,y:11.2,alpha:0.409},0).wait(1).to({rotation:-4.7484,x:-23.6,y:18.85,alpha:0.4123},0).wait(1).to({rotation:-4.8217,x:-25.9,y:26.35,alpha:0.4156},0).wait(1).to({rotation:-4.8934,x:-28.15,y:33.65,alpha:0.4189},0).wait(1).to({rotation:-4.9635,x:-30.35,y:40.85,alpha:0.422},0).wait(1).to({rotation:-5.0322,x:-32.5,y:47.85,alpha:0.4251},0).wait(1).to({rotation:-5.0993,x:-34.6,y:54.7,alpha:0.4281},0).wait(1).to({rotation:-5.165,x:-36.65,y:61.45,alpha:0.431},0).wait(1).to({rotation:-5.2292,x:-38.7,y:68,alpha:0.4339},0).wait(1).to({rotation:-5.292,x:-40.65,y:74.45,alpha:0.4367},0).wait(1).to({scaleX:0.6416,scaleY:0.6416,rotation:-5.3534,x:-42.55,y:80.7,alpha:0.4395},0).wait(1).to({scaleX:0.6417,scaleY:0.6417,rotation:-5.4135,x:-44.45,y:86.85,alpha:0.4422},0).wait(1).to({rotation:-5.4722,x:-46.3,y:92.85,alpha:0.4448},0).wait(1).to({rotation:-5.5295,x:-48.1,y:98.7,alpha:0.4474},0).wait(1).to({rotation:-5.5856,x:-49.85,y:104.45,alpha:0.4499},0).wait(1).to({rotation:-5.6405,x:-51.6,y:110.05,alpha:0.4524},0).wait(1).to({rotation:-5.6941,x:-53.25,y:115.55,alpha:0.4548},0).wait(1).to({rotation:-5.7465,x:-54.9,y:120.9,alpha:0.4571},0).wait(1).to({rotation:-5.7977,x:-56.5,y:126.15,alpha:0.4594},0).wait(1).to({rotation:-5.8477,x:-58.05,y:131.25,alpha:0.4617},0).wait(1).to({rotation:-5.8967,x:-59.6,y:136.3,alpha:0.4639},0).wait(1).to({rotation:-5.9445,x:-61.1,y:141.15,alpha:0.466},0).wait(1).to({rotation:-5.9912,x:-62.55,y:145.95,alpha:0.4681},0).wait(1).to({rotation:-6.0369,x:-64,y:150.6,alpha:0.4702},0).wait(1).to({rotation:-6.0815,x:-65.4,y:155.2,alpha:0.4722},0).wait(1).to({rotation:-6.1251,x:-66.75,y:159.65,alpha:0.4741},0).wait(1).to({rotation:-6.1677,x:-68.1,y:164,alpha:0.476},0).wait(1).to({scaleX:0.6416,scaleY:0.6416,rotation:-6.2094,x:-69.4,y:168.25,alpha:0.4779},0).wait(1).to({rotation:-6.25,x:-70.65,y:172.45,alpha:0.4797},0).wait(1).to({rotation:-6.2898,x:-71.9,y:176.5,alpha:0.4815},0).wait(1).to({scaleX:0.6417,scaleY:0.6417,rotation:-6.3287,x:-73.15,y:180.5,alpha:0.4833},0).wait(1).to({rotation:-6.3666,x:-74.3,y:184.35,alpha:0.485},0).wait(1).to({rotation:-6.4037,x:-75.5,y:188.15,alpha:0.4866},0).wait(1).to({rotation:-6.44,x:-76.6,y:191.85,alpha:0.4883},0).wait(1).to({rotation:-6.4754,x:-77.75,y:195.5,alpha:0.4899},0).wait(1).to({rotation:-6.5099,x:-78.8,y:199.05,alpha:0.4914},0).wait(1).to({rotation:-6.5437,x:-79.85,y:202.5,alpha:0.4929},0).wait(1).to({rotation:-6.5767,x:-80.9,y:205.85,alpha:0.4944},0).wait(1).to({rotation:-6.609,x:-81.9,y:209.15,alpha:0.4959},0).wait(1).to({rotation:-6.6405,x:-82.9,y:212.4,alpha:0.4973},0).wait(1).to({rotation:-6.6713,x:-83.85,y:215.55,alpha:0.4987},0).wait(1).to({regX:290.9,regY:350.1,scaleX:0.6416,scaleY:0.6416,rotation:-6.7013,x:126.95,y:419.95,alpha:0.5},0).wait(1).to({regX:-0.3,regY:0,scaleX:0.6417,scaleY:0.6417,rotation:-6.7014,x:-85.55,y:221.6,alpha:0.491},0).wait(1).to({x:-86.25,y:224.55,alpha:0.4822},0).wait(1).to({x:-86.9,y:227.4,alpha:0.4736},0).wait(1).to({rotation:-6.7015,x:-87.55,y:230.2,alpha:0.4651},0).wait(1).to({x:-88.2,y:232.9,alpha:0.4569},0).wait(1).to({x:-88.85,y:235.6,alpha:0.4489},0).wait(1).to({rotation:-6.7016,x:-89.45,y:238.2,alpha:0.4411},0).wait(1).to({x:-90.05,y:240.75,alpha:0.4334},0).wait(1).to({x:-90.65,y:243.2,alpha:0.4259},0).wait(1).to({x:-91.2,y:245.65,alpha:0.4186},0).wait(1).to({rotation:-6.7017,x:-91.75,y:248,alpha:0.4115},0).wait(1).to({x:-92.3,y:250.3,alpha:0.4045},0).wait(1).to({x:-92.85,y:252.6,alpha:0.3977},0).wait(1).to({rotation:-6.7018,x:-93.4,y:254.8,alpha:0.3911},0).wait(1).to({x:-93.9,y:256.95,alpha:0.3846},0).wait(1).to({x:-94.4,y:259.05,alpha:0.3783},0).wait(1).to({x:-94.85,y:261.1,alpha:0.3721},0).wait(1).to({rotation:-6.7019,x:-95.35,y:263.1,alpha:0.3661},0).wait(1).to({x:-95.8,y:265.05,alpha:0.3602},0).wait(1).to({x:-96.25,y:266.95,alpha:0.3544},0).wait(1).to({x:-96.7,y:268.8,alpha:0.3489},0).wait(1).to({x:-97.1,y:270.6,alpha:0.3434},0).wait(1).to({rotation:-6.702,x:-97.55,y:272.35,alpha:0.3381},0).wait(1).to({x:-97.95,y:274.1,alpha:0.3329},0).wait(1).to({x:-98.35,y:275.75,alpha:0.3279},0).wait(1).to({x:-98.7,y:277.4,alpha:0.3229},0).wait(1).to({x:-99.1,y:279,alpha:0.3181},0).wait(1).to({rotation:-6.7021,x:-99.45,y:280.55,alpha:0.3135},0).wait(1).to({x:-99.8,y:282.05,alpha:0.3089},0).wait(1).to({x:-100.15,y:283.55,alpha:0.3045},0).wait(1).to({x:-100.5,y:284.95,alpha:0.3002},0).wait(1).to({x:-100.85,y:286.35,alpha:0.296},0).wait(1).to({x:-101.15,y:287.7,alpha:0.2919},0).wait(1).to({rotation:-6.7022,x:-101.45,y:289,alpha:0.2879},0).wait(1).to({x:-101.75,y:290.3,alpha:0.2841},0).wait(1).to({x:-102.05,y:291.55,alpha:0.2803},0).wait(1).to({x:-102.35,y:292.75,alpha:0.2767},0).wait(1).to({x:-102.65,y:293.95,alpha:0.2731},0).wait(1).to({x:-102.9,y:295.05,alpha:0.2697},0).wait(1).to({x:-103.15,y:296.2,alpha:0.2664},0).wait(1).to({rotation:-6.7023,x:-103.4,y:297.25,alpha:0.2631},0).wait(1).to({x:-103.65,y:298.3,alpha:0.26},0).wait(1).to({x:-103.9,y:299.3,alpha:0.257},0).wait(1).to({x:-104.15,y:300.3,alpha:0.254},0).wait(1).to({x:-104.35,y:301.25,alpha:0.2512},0).wait(1).to({x:-104.55,y:302.15,alpha:0.2484},0).wait(1).to({x:-104.8,y:303.05,alpha:0.2457},0).wait(1).to({x:-105,y:303.9,alpha:0.2431},0).wait(1).to({x:-105.2,y:304.7,alpha:0.2406},0).wait(1).to({rotation:-6.7024,x:-105.35,y:305.5,alpha:0.2382},0).wait(1).to({x:-105.55,y:306.3,alpha:0.2359},0).wait(1).to({x:-105.75,y:307.05,alpha:0.2337},0).wait(1).to({x:-105.9,y:307.75,alpha:0.2315},0).wait(1).to({x:-106.05,y:308.45,alpha:0.2294},0).wait(1).to({x:-106.2,y:309.1,alpha:0.2274},0).wait(1).to({x:-106.35,y:309.75,alpha:0.2255},0).wait(1).to({x:-106.5,y:310.35,alpha:0.2237},0).wait(1).to({x:-106.65,y:310.95,alpha:0.2219},0).wait(1).to({x:-106.8,y:311.5,alpha:0.2202},0).wait(1).to({x:-106.9,y:312.05,alpha:0.2186},0).wait(1).to({x:-107.05,y:312.55,alpha:0.217},0).wait(1).to({x:-107.15,y:313.05,alpha:0.2156},0).wait(1).to({rotation:-6.7025,x:-107.25,y:313.5,alpha:0.2141},0).wait(1).to({x:-107.35,y:313.95,alpha:0.2128},0).wait(1).to({x:-107.45,y:314.4,alpha:0.2115},0).wait(1).to({x:-107.55,y:314.8,alpha:0.2103},0).wait(1).to({x:-107.65,y:315.15,alpha:0.2092},0).wait(1).to({x:-107.75,y:315.5,alpha:0.2081},0).wait(1).to({x:-107.8,y:315.85,alpha:0.2071},0).wait(1).to({x:-107.9,y:316.15,alpha:0.2062},0).wait(1).to({x:-107.95,y:316.45,alpha:0.2053},0).wait(1).to({x:-108,y:316.7,alpha:0.2045},0).wait(1).to({x:-108.05,y:316.95,alpha:0.2038},0).wait(1).to({x:-108.15,y:317.2,alpha:0.2031},0).wait(1).to({y:317.4,alpha:0.2024},0).wait(1).to({x:-108.2,y:317.6,alpha:0.2019},0).wait(1).to({x:-108.25,y:317.75,alpha:0.2014},0).wait(1).to({x:-108.3,y:317.9,alpha:0.2009},0).wait(1).to({x:-108.35,y:318.05,alpha:0.2005},0).wait(1).to({y:318.15,alpha:0.2002},0).wait(1).to({x:-108.4,y:318.25,alpha:0.1999},0).wait(1).to({y:318.35,alpha:0.1996},0).wait(1).to({y:318.4,alpha:0.1995},0).wait(1).to({y:318.45,alpha:0.1993},0).wait(1).to({x:-108.45,alpha:0.1992},0).wait(1).to({regX:290.9,regY:350.1,x:103.35,y:519.8},0).to({_off:true},1).wait(79));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-319.9,-724.4,655,1287.6999999999998);
    
    
    (lib.mc_book1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // timeline functions:
        this.frame_90 = function() {
            this.gotoAndPlay(31);
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(90).call(this.frame_90).wait(48));
    
        // レイヤー_1 コピー 2
        this.instance = new lib.g_book1("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(81.1,-17.7,0.4077,0.7412,0,48.1426,67.8295,70.5,-18.1);
        this.instance.alpha = 0.1992;
        this.instance._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).wait(1).to({regX:-0.5,regY:0,scaleX:0.4433,scaleY:0.8059,skewX:48.1427,skewY:67.8294,x:58.3,y:-37.05,alpha:0.2407},0).wait(1).to({scaleX:0.4786,scaleY:0.87,skewX:48.1428,x:56.5,y:-38.6,alpha:0.2817},0).wait(1).to({scaleX:0.5131,scaleY:0.9329,skewX:48.1429,skewY:67.8293,x:54.75,y:-40.1,alpha:0.322},0).wait(1).to({scaleX:0.5466,scaleY:0.9938,skewX:48.143,x:53,y:-41.55,alpha:0.361},0).wait(1).to({scaleX:0.5788,scaleY:1.0523,skewX:48.1431,skewY:67.8292,x:51.35,y:-42.95,alpha:0.3985},0).wait(1).to({scaleX:0.6094,scaleY:1.1078,skewX:48.1432,x:49.8,y:-44.3,alpha:0.434},0).wait(1).to({scaleX:0.6381,scaleY:1.1601,skewX:48.1433,skewY:67.8291,x:48.35,y:-45.55,alpha:0.4675},0).wait(1).to({scaleX:0.665,scaleY:1.2089,skewX:48.1434,x:46.9,y:-46.7,alpha:0.4988},0).wait(1).to({scaleX:0.6898,scaleY:1.2541,skewY:67.829,x:45.65,y:-47.8,alpha:0.5277},0).wait(1).to({scaleX:0.7128,scaleY:1.2959,skewX:48.1435,x:44.45,y:-48.8,alpha:0.5545},0).wait(1).to({scaleX:0.7339,scaleY:1.3342,skewX:48.1436,x:43.4,y:-49.75,alpha:0.5791},0).wait(1).to({regX:70.8,regY:-17.9,scaleX:0.7532,scaleY:1.3694,x:80.95,y:-17.45,alpha:0.6016},0).wait(1).to({regX:-0.5,regY:0,scaleX:0.7714,scaleY:1.4024,skewY:67.8291,x:41.5,y:-51.65,alpha:0.527},0).wait(1).to({scaleX:0.7879,scaleY:1.4325,skewY:67.8292,x:40.65,y:-52.35,alpha:0.4592},0).wait(1).to({scaleX:0.803,scaleY:1.4598,skewX:48.1435,skewY:67.8293,x:39.9,y:-53.05,alpha:0.3975},0).wait(1).to({scaleX:0.8167,scaleY:1.4847,x:39.2,y:-53.7,alpha:0.3413},0).wait(1).to({scaleX:0.8291,scaleY:1.5073,skewY:67.8294,x:38.55,y:-54.25,alpha:0.2903},0).wait(1).to({scaleX:0.8404,scaleY:1.5278,skewY:67.8295,x:38,y:-54.75,alpha:0.244},0).wait(1).to({scaleX:0.8506,scaleY:1.5464,skewX:48.1434,x:37.5,y:-55.2,alpha:0.202},0).wait(1).to({scaleX:0.8599,scaleY:1.5633,skewY:67.8296,x:37,y:-55.6,alpha:0.1638},0).wait(1).to({scaleX:0.8684,scaleY:1.5787,x:36.55,y:-56,alpha:0.1292},0).wait(1).to({scaleX:0.876,scaleY:1.5925,skewY:67.8297,x:36.2,y:-56.35,alpha:0.0979},0).wait(1).to({scaleX:0.8829,scaleY:1.6051,x:35.85,y:-56.65,alpha:0.0695},0).wait(1).to({scaleX:0.8892,scaleY:1.6165,skewY:67.8298,x:35.5,y:-56.9,alpha:0.0439},0).wait(1).to({scaleX:0.8948,scaleY:1.6267,x:35.25,y:-57.15,alpha:0.0208},0).wait(1).to({regX:70.6,regY:-17.9,scaleX:0.8999,scaleY:1.6359,x:80.95,y:-17.6,alpha:0},0).to({_off:true},1).wait(3).to({_off:false,regX:70.5,regY:-18.1,scaleX:0.4077,scaleY:0.7412,skewX:48.1426,skewY:67.8295,x:81.1,y:-17.7,alpha:0.1992},0).wait(1).to({regX:-0.5,regY:0,scaleX:0.4433,scaleY:0.8059,skewX:48.1427,skewY:67.8294,x:58.3,y:-37.05,alpha:0.2407},0).wait(1).to({scaleX:0.4786,scaleY:0.87,skewX:48.1428,x:56.5,y:-38.6,alpha:0.2817},0).wait(1).to({scaleX:0.5131,scaleY:0.9329,skewX:48.1429,skewY:67.8293,x:54.75,y:-40.1,alpha:0.322},0).wait(1).to({scaleX:0.5466,scaleY:0.9938,skewX:48.143,x:53,y:-41.55,alpha:0.361},0).wait(1).to({scaleX:0.5788,scaleY:1.0523,skewX:48.1431,skewY:67.8292,x:51.35,y:-42.95,alpha:0.3985},0).wait(1).to({scaleX:0.6094,scaleY:1.1078,skewX:48.1432,x:49.8,y:-44.3,alpha:0.434},0).wait(1).to({scaleX:0.6381,scaleY:1.1601,skewX:48.1433,skewY:67.8291,x:48.35,y:-45.55,alpha:0.4675},0).wait(1).to({scaleX:0.665,scaleY:1.2089,skewX:48.1434,x:46.9,y:-46.7,alpha:0.4988},0).wait(1).to({scaleX:0.6898,scaleY:1.2541,skewY:67.829,x:45.65,y:-47.8,alpha:0.5277},0).wait(1).to({scaleX:0.7128,scaleY:1.2959,skewX:48.1435,x:44.45,y:-48.8,alpha:0.5545},0).wait(1).to({scaleX:0.7339,scaleY:1.3342,skewX:48.1436,x:43.4,y:-49.75,alpha:0.5791},0).wait(1).to({regX:70.8,regY:-17.9,scaleX:0.7532,scaleY:1.3694,x:80.95,y:-17.45,alpha:0.6016},0).wait(1).to({regX:-0.5,regY:0,scaleX:0.7714,scaleY:1.4024,skewY:67.8291,x:41.5,y:-51.65,alpha:0.527},0).wait(1).to({scaleX:0.7879,scaleY:1.4325,skewY:67.8292,x:40.65,y:-52.35,alpha:0.4592},0).wait(1).to({scaleX:0.803,scaleY:1.4598,skewX:48.1435,skewY:67.8293,x:39.9,y:-53.05,alpha:0.3975},0).wait(1).to({scaleX:0.8167,scaleY:1.4847,x:39.2,y:-53.7,alpha:0.3413},0).wait(1).to({scaleX:0.8291,scaleY:1.5073,skewY:67.8294,x:38.55,y:-54.25,alpha:0.2903},0).wait(1).to({scaleX:0.8404,scaleY:1.5278,skewY:67.8295,x:38,y:-54.75,alpha:0.244},0).wait(1).to({scaleX:0.8506,scaleY:1.5464,skewX:48.1434,x:37.5,y:-55.2,alpha:0.202},0).wait(1).to({scaleX:0.8599,scaleY:1.5633,skewY:67.8296,x:37,y:-55.6,alpha:0.1638},0).wait(1).to({scaleX:0.8684,scaleY:1.5787,x:36.55,y:-56,alpha:0.1292},0).wait(1).to({scaleX:0.876,scaleY:1.5925,skewY:67.8297,x:36.2,y:-56.35,alpha:0.0979},0).wait(1).to({scaleX:0.8829,scaleY:1.6051,x:35.85,y:-56.65,alpha:0.0695},0).wait(1).to({scaleX:0.8892,scaleY:1.6165,skewY:67.8298,x:35.5,y:-56.9,alpha:0.0439},0).wait(1).to({scaleX:0.8948,scaleY:1.6267,x:35.25,y:-57.15,alpha:0.0208},0).wait(1).to({regX:70.6,regY:-17.9,scaleX:0.8999,scaleY:1.6359,x:80.95,y:-17.6,alpha:0},0).to({_off:true},1).wait(3).to({_off:false,regX:70.5,regY:-18.1,scaleX:0.4077,scaleY:0.7412,skewX:48.1426,skewY:67.8295,x:81.1,y:-17.7,alpha:0.1992},0).wait(1).to({regX:-0.5,regY:0,scaleX:0.4433,scaleY:0.8059,skewX:48.1427,skewY:67.8294,x:58.3,y:-37.05,alpha:0.2407},0).wait(1).to({scaleX:0.4786,scaleY:0.87,skewX:48.1428,x:56.5,y:-38.6,alpha:0.2817},0).wait(1).to({scaleX:0.5131,scaleY:0.9329,skewX:48.1429,skewY:67.8293,x:54.75,y:-40.1,alpha:0.322},0).wait(1).to({scaleX:0.5466,scaleY:0.9938,skewX:48.143,x:53,y:-41.55,alpha:0.361},0).wait(1).to({scaleX:0.5788,scaleY:1.0523,skewX:48.1431,skewY:67.8292,x:51.35,y:-42.95,alpha:0.3985},0).wait(1).to({scaleX:0.6094,scaleY:1.1078,skewX:48.1432,x:49.8,y:-44.3,alpha:0.434},0).wait(1).to({scaleX:0.6381,scaleY:1.1601,skewX:48.1433,skewY:67.8291,x:48.35,y:-45.55,alpha:0.4675},0).wait(1).to({scaleX:0.665,scaleY:1.2089,skewX:48.1434,x:46.9,y:-46.7,alpha:0.4988},0).wait(1).to({scaleX:0.6898,scaleY:1.2541,skewY:67.829,x:45.65,y:-47.8,alpha:0.5277},0).wait(1).to({scaleX:0.7128,scaleY:1.2959,skewX:48.1435,x:44.45,y:-48.8,alpha:0.5545},0).wait(1).to({scaleX:0.7339,scaleY:1.3342,skewX:48.1436,x:43.4,y:-49.75,alpha:0.5791},0).wait(1).to({regX:70.8,regY:-17.9,scaleX:0.7532,scaleY:1.3694,x:80.95,y:-17.45,alpha:0.6016},0).wait(1).to({regX:-0.5,regY:0,scaleX:0.7714,scaleY:1.4024,skewY:67.8291,x:41.5,y:-51.65,alpha:0.527},0).wait(1).to({scaleX:0.7879,scaleY:1.4325,skewY:67.8292,x:40.65,y:-52.35,alpha:0.4592},0).wait(1).to({scaleX:0.803,scaleY:1.4598,skewX:48.1435,skewY:67.8293,x:39.9,y:-53.05,alpha:0.3975},0).wait(1).to({scaleX:0.8167,scaleY:1.4847,x:39.2,y:-53.7,alpha:0.3413},0).wait(1).to({scaleX:0.8291,scaleY:1.5073,skewY:67.8294,x:38.55,y:-54.25,alpha:0.2903},0).wait(1).to({scaleX:0.8404,scaleY:1.5278,skewY:67.8295,x:38,y:-54.75,alpha:0.244},0).wait(1).to({scaleX:0.8506,scaleY:1.5464,skewX:48.1434,x:37.5,y:-55.2,alpha:0.202},0).wait(1).to({scaleX:0.8599,scaleY:1.5633,skewY:67.8296,x:37,y:-55.6,alpha:0.1638},0).wait(1).to({scaleX:0.8684,scaleY:1.5787,x:36.55,y:-56,alpha:0.1292},0).wait(1).to({scaleX:0.876,scaleY:1.5925,skewY:67.8297,x:36.2,y:-56.35,alpha:0.0979},0).wait(1).to({scaleX:0.8829,scaleY:1.6051,x:35.85,y:-56.65,alpha:0.0695},0).wait(1).to({scaleX:0.8892,scaleY:1.6165,skewY:67.8298,x:35.5,y:-56.9,alpha:0.0439},0).wait(1).to({scaleX:0.8948,scaleY:1.6267,x:35.25,y:-57.15,alpha:0.0208},0).wait(1).to({regX:70.6,regY:-17.9,scaleX:0.8999,scaleY:1.6359,x:80.95,y:-17.6,alpha:0},0).to({_off:true},1).wait(3).to({_off:false,regX:70.5,regY:-18.1,scaleX:0.4077,scaleY:0.7412,skewX:48.1426,skewY:67.8295,x:81.1,y:-17.7,alpha:0.1992},0).wait(1).to({regX:-0.5,regY:0,scaleX:0.4433,scaleY:0.8059,skewX:48.1427,skewY:67.8294,x:58.3,y:-37.05,alpha:0.2407},0).wait(1).to({scaleX:0.4786,scaleY:0.87,skewX:48.1428,x:56.5,y:-38.6,alpha:0.2817},0).wait(1).to({scaleX:0.5131,scaleY:0.9329,skewX:48.1429,skewY:67.8293,x:54.75,y:-40.1,alpha:0.322},0).wait(1).to({scaleX:0.5466,scaleY:0.9938,skewX:48.143,x:53,y:-41.55,alpha:0.361},0).wait(1).to({scaleX:0.5788,scaleY:1.0523,skewX:48.1431,skewY:67.8292,x:51.35,y:-42.95,alpha:0.3985},0).wait(1).to({scaleX:0.6094,scaleY:1.1078,skewX:48.1432,x:49.8,y:-44.3,alpha:0.434},0).wait(1).to({scaleX:0.6381,scaleY:1.1601,skewX:48.1433,skewY:67.8291,x:48.35,y:-45.55,alpha:0.4675},0).wait(1).to({scaleX:0.665,scaleY:1.2089,skewX:48.1434,x:46.9,y:-46.7,alpha:0.4988},0).wait(1).to({scaleX:0.6898,scaleY:1.2541,skewY:67.829,x:45.65,y:-47.8,alpha:0.5277},0).wait(1).to({scaleX:0.7128,scaleY:1.2959,skewX:48.1435,x:44.45,y:-48.8,alpha:0.5545},0).wait(1).to({scaleX:0.7339,scaleY:1.3342,skewX:48.1436,x:43.4,y:-49.75,alpha:0.5791},0).wait(1).to({regX:70.8,regY:-17.9,scaleX:0.7532,scaleY:1.3694,x:80.95,y:-17.45,alpha:0.6016},0).wait(1).to({regX:-0.5,regY:0,scaleX:0.7714,scaleY:1.4024,skewY:67.8291,x:41.5,y:-51.65,alpha:0.527},0).wait(1).to({scaleX:0.7879,scaleY:1.4325,skewY:67.8292,x:40.65,y:-52.35,alpha:0.4592},0).wait(1).to({scaleX:0.803,scaleY:1.4598,skewX:48.1435,skewY:67.8293,x:39.9,y:-53.05,alpha:0.3975},0).wait(1).to({scaleX:0.8167,scaleY:1.4847,x:39.2,y:-53.7,alpha:0.3413},0).wait(1).to({scaleX:0.8291,scaleY:1.5073,skewY:67.8294,x:38.55,y:-54.25,alpha:0.2903},0).wait(1).to({scaleX:0.8404,scaleY:1.5278,skewY:67.8295,x:38,y:-54.75,alpha:0.244},0).wait(1).to({scaleX:0.8506,scaleY:1.5464,skewX:48.1434,x:37.5,y:-55.2,alpha:0.202},0).wait(1).to({scaleX:0.8599,scaleY:1.5633,skewY:67.8296,x:37,y:-55.6,alpha:0.1638},0).wait(1).to({scaleX:0.8684,scaleY:1.5787,x:36.55,y:-56,alpha:0.1292},0).wait(1).to({scaleX:0.876,scaleY:1.5925,skewY:67.8297,x:36.2,y:-56.35,alpha:0.0979},0).wait(1).to({scaleX:0.8829,scaleY:1.6051,x:35.85,y:-56.65,alpha:0.0695},0).wait(1).to({scaleX:0.8892,scaleY:1.6165,skewY:67.8298,x:35.5,y:-56.9,alpha:0.0439},0).wait(1).to({scaleX:0.8948,scaleY:1.6267,x:35.25,y:-57.15,alpha:0.0208},0).wait(1).to({regX:70.6,regY:-17.9,scaleX:0.8999,scaleY:1.6359,x:80.95,y:-17.6,alpha:0},0).to({_off:true},1).wait(1));
    
        // レイヤー_1 コピー
        this.instance_1 = new lib.g_book1("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(63.95,-20.1,0.484,0.6283,0,26.4804,47.0886,70.8,-17.9);
        this.instance_1.alpha = 0.1992;
        this.instance_1._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).wait(1).to({regX:-0.5,regY:0,scaleX:0.5263,scaleY:0.6832,x:32.9,y:-36.65,alpha:0.2407},0).wait(1).to({scaleX:0.5682,scaleY:0.7375,x:30.45,y:-37.95,alpha:0.2817},0).wait(1).to({scaleX:0.6092,scaleY:0.7908,skewX:26.4803,x:28.05,y:-39.2,alpha:0.322},0).wait(1).to({scaleX:0.649,scaleY:0.8424,skewY:47.0887,x:25.7,y:-40.5,alpha:0.361},0).wait(1).to({scaleX:0.6872,scaleY:0.892,x:23.45,y:-41.65,alpha:0.3985},0).wait(1).to({scaleX:0.7235,scaleY:0.9391,x:21.3,y:-42.8,alpha:0.434},0).wait(1).to({scaleX:0.7576,scaleY:0.9834,x:19.3,y:-43.9,alpha:0.4675},0).wait(1).to({scaleX:0.7895,scaleY:1.0247,skewX:26.4802,x:17.45,y:-44.9,alpha:0.4988},0).wait(1).to({scaleX:0.819,scaleY:1.0631,skewY:47.0888,x:15.65,y:-45.8,alpha:0.5277},0).wait(1).to({scaleX:0.8463,scaleY:1.0985,x:14.05,y:-46.65,alpha:0.5545},0).wait(1).to({scaleX:0.8713,scaleY:1.131,x:12.6,y:-47.4,alpha:0.5791},0).wait(1).to({regX:70.8,regY:-17.9,scaleX:0.8943,scaleY:1.1608,x:63.95,y:-20.15,alpha:0.6016},0).wait(1).to({regX:-0.5,regY:0,scaleX:0.9158,scaleY:1.1888,x:10,y:-48.9,alpha:0.527},0).wait(1).to({scaleX:0.9355,scaleY:1.2142,x:8.85,y:-49.5,alpha:0.4592},0).wait(1).to({scaleX:0.9533,scaleY:1.2374,skewX:26.4803,x:7.8,y:-50.05,alpha:0.3975},0).wait(1).to({scaleX:0.9696,scaleY:1.2585,x:6.8,y:-50.6,alpha:0.3413},0).wait(1).to({scaleX:0.9843,scaleY:1.2777,x:5.95,y:-51.05,alpha:0.2903},0).wait(1).to({scaleX:0.9977,scaleY:1.295,x:5.15,y:-51.45,alpha:0.244},0).wait(1).to({scaleX:1.0099,scaleY:1.3109,skewX:26.4804,x:4.45,y:-51.85,alpha:0.202},0).wait(1).to({scaleX:1.0209,scaleY:1.3252,x:3.8,y:-52.2,alpha:0.1638},0).wait(1).to({scaleX:1.031,scaleY:1.3382,x:3.25,y:-52.55,alpha:0.1292},0).wait(1).to({scaleX:1.04,scaleY:1.35,x:2.7,y:-52.85,alpha:0.0979},0).wait(1).to({scaleX:1.0482,scaleY:1.3606,x:2.2,y:-53.1,alpha:0.0695},0).wait(1).to({scaleX:1.0556,scaleY:1.3702,x:1.8,y:-53.3,alpha:0.0439},0).wait(1).to({scaleX:1.0623,scaleY:1.3789,skewX:26.4805,x:1.4,y:-53.55,alpha:0.0208},0).wait(1).to({regX:70.8,regY:-17.9,scaleX:1.0683,scaleY:1.3867,x:64,y:-20.1,alpha:0},0).to({_off:true},1).wait(3).to({_off:false,scaleX:0.484,scaleY:0.6283,skewX:26.4804,skewY:47.0886,x:63.95,alpha:0.1992},0).wait(1).to({regX:-0.5,regY:0,scaleX:0.5263,scaleY:0.6832,x:32.9,y:-36.65,alpha:0.2407},0).wait(1).to({scaleX:0.5682,scaleY:0.7375,x:30.45,y:-37.95,alpha:0.2817},0).wait(1).to({scaleX:0.6092,scaleY:0.7908,skewX:26.4803,x:28.05,y:-39.2,alpha:0.322},0).wait(1).to({scaleX:0.649,scaleY:0.8424,skewY:47.0887,x:25.7,y:-40.5,alpha:0.361},0).wait(1).to({scaleX:0.6872,scaleY:0.892,x:23.45,y:-41.65,alpha:0.3985},0).wait(1).to({scaleX:0.7235,scaleY:0.9391,x:21.3,y:-42.8,alpha:0.434},0).wait(1).to({scaleX:0.7576,scaleY:0.9834,x:19.3,y:-43.9,alpha:0.4675},0).wait(1).to({scaleX:0.7895,scaleY:1.0247,skewX:26.4802,x:17.45,y:-44.9,alpha:0.4988},0).wait(1).to({scaleX:0.819,scaleY:1.0631,skewY:47.0888,x:15.65,y:-45.8,alpha:0.5277},0).wait(1).to({scaleX:0.8463,scaleY:1.0985,x:14.05,y:-46.65,alpha:0.5545},0).wait(1).to({scaleX:0.8713,scaleY:1.131,x:12.6,y:-47.4,alpha:0.5791},0).wait(1).to({regX:70.8,regY:-17.9,scaleX:0.8943,scaleY:1.1608,x:63.95,y:-20.15,alpha:0.6016},0).wait(1).to({regX:-0.5,regY:0,scaleX:0.9158,scaleY:1.1888,x:10,y:-48.9,alpha:0.527},0).wait(1).to({scaleX:0.9355,scaleY:1.2142,x:8.85,y:-49.5,alpha:0.4592},0).wait(1).to({scaleX:0.9533,scaleY:1.2374,skewX:26.4803,x:7.8,y:-50.05,alpha:0.3975},0).wait(1).to({scaleX:0.9696,scaleY:1.2585,x:6.8,y:-50.6,alpha:0.3413},0).wait(1).to({scaleX:0.9843,scaleY:1.2777,x:5.95,y:-51.05,alpha:0.2903},0).wait(1).to({scaleX:0.9977,scaleY:1.295,x:5.15,y:-51.45,alpha:0.244},0).wait(1).to({scaleX:1.0099,scaleY:1.3109,skewX:26.4804,x:4.45,y:-51.85,alpha:0.202},0).wait(1).to({scaleX:1.0209,scaleY:1.3252,x:3.8,y:-52.2,alpha:0.1638},0).wait(1).to({scaleX:1.031,scaleY:1.3382,x:3.25,y:-52.55,alpha:0.1292},0).wait(1).to({scaleX:1.04,scaleY:1.35,x:2.7,y:-52.85,alpha:0.0979},0).wait(1).to({scaleX:1.0482,scaleY:1.3606,x:2.2,y:-53.1,alpha:0.0695},0).wait(1).to({scaleX:1.0556,scaleY:1.3702,x:1.8,y:-53.3,alpha:0.0439},0).wait(1).to({scaleX:1.0623,scaleY:1.3789,skewX:26.4805,x:1.4,y:-53.55,alpha:0.0208},0).wait(1).to({regX:70.8,regY:-17.9,scaleX:1.0683,scaleY:1.3867,x:64,y:-20.1,alpha:0},0).to({_off:true},1).wait(3).to({_off:false,scaleX:0.484,scaleY:0.6283,skewX:26.4804,skewY:47.0886,x:63.95,alpha:0.1992},0).wait(1).to({regX:-0.5,regY:0,scaleX:0.5263,scaleY:0.6832,x:32.9,y:-36.65,alpha:0.2407},0).wait(1).to({scaleX:0.5682,scaleY:0.7375,x:30.45,y:-37.95,alpha:0.2817},0).wait(1).to({scaleX:0.6092,scaleY:0.7908,skewX:26.4803,x:28.05,y:-39.2,alpha:0.322},0).wait(1).to({scaleX:0.649,scaleY:0.8424,skewY:47.0887,x:25.7,y:-40.5,alpha:0.361},0).wait(1).to({scaleX:0.6872,scaleY:0.892,x:23.45,y:-41.65,alpha:0.3985},0).wait(1).to({scaleX:0.7235,scaleY:0.9391,x:21.3,y:-42.8,alpha:0.434},0).wait(1).to({scaleX:0.7576,scaleY:0.9834,x:19.3,y:-43.9,alpha:0.4675},0).wait(1).to({scaleX:0.7895,scaleY:1.0247,skewX:26.4802,x:17.45,y:-44.9,alpha:0.4988},0).wait(1).to({scaleX:0.819,scaleY:1.0631,skewY:47.0888,x:15.65,y:-45.8,alpha:0.5277},0).wait(1).to({scaleX:0.8463,scaleY:1.0985,x:14.05,y:-46.65,alpha:0.5545},0).wait(1).to({scaleX:0.8713,scaleY:1.131,x:12.6,y:-47.4,alpha:0.5791},0).wait(1).to({regX:70.8,regY:-17.9,scaleX:0.8943,scaleY:1.1608,x:63.95,y:-20.15,alpha:0.6016},0).wait(1).to({regX:-0.5,regY:0,scaleX:0.9158,scaleY:1.1888,x:10,y:-48.9,alpha:0.527},0).wait(1).to({scaleX:0.9355,scaleY:1.2142,x:8.85,y:-49.5,alpha:0.4592},0).wait(1).to({scaleX:0.9533,scaleY:1.2374,skewX:26.4803,x:7.8,y:-50.05,alpha:0.3975},0).wait(1).to({scaleX:0.9696,scaleY:1.2585,x:6.8,y:-50.6,alpha:0.3413},0).wait(1).to({scaleX:0.9843,scaleY:1.2777,x:5.95,y:-51.05,alpha:0.2903},0).wait(1).to({scaleX:0.9977,scaleY:1.295,x:5.15,y:-51.45,alpha:0.244},0).wait(1).to({scaleX:1.0099,scaleY:1.3109,skewX:26.4804,x:4.45,y:-51.85,alpha:0.202},0).wait(1).to({scaleX:1.0209,scaleY:1.3252,x:3.8,y:-52.2,alpha:0.1638},0).wait(1).to({scaleX:1.031,scaleY:1.3382,x:3.25,y:-52.55,alpha:0.1292},0).wait(1).to({scaleX:1.04,scaleY:1.35,x:2.7,y:-52.85,alpha:0.0979},0).wait(1).to({scaleX:1.0482,scaleY:1.3606,x:2.2,y:-53.1,alpha:0.0695},0).wait(1).to({scaleX:1.0556,scaleY:1.3702,x:1.8,y:-53.3,alpha:0.0439},0).wait(1).to({scaleX:1.0623,scaleY:1.3789,skewX:26.4805,x:1.4,y:-53.55,alpha:0.0208},0).wait(1).to({regX:70.8,regY:-17.9,scaleX:1.0683,scaleY:1.3867,x:64,y:-20.1,alpha:0},0).to({_off:true},1).wait(3).to({_off:false,scaleX:0.484,scaleY:0.6283,skewX:26.4804,skewY:47.0886,x:63.95,alpha:0.1992},0).wait(1).to({regX:-0.5,regY:0,scaleX:0.5263,scaleY:0.6832,x:32.9,y:-36.65,alpha:0.2407},0).wait(1).to({scaleX:0.5682,scaleY:0.7375,x:30.45,y:-37.95,alpha:0.2817},0).wait(1).to({scaleX:0.6092,scaleY:0.7908,skewX:26.4803,x:28.05,y:-39.2,alpha:0.322},0).wait(1).to({scaleX:0.649,scaleY:0.8424,skewY:47.0887,x:25.7,y:-40.5,alpha:0.361},0).wait(1).to({scaleX:0.6872,scaleY:0.892,x:23.45,y:-41.65,alpha:0.3985},0).wait(1).to({scaleX:0.7235,scaleY:0.9391,x:21.3,y:-42.8,alpha:0.434},0).wait(1).to({scaleX:0.7576,scaleY:0.9834,x:19.3,y:-43.9,alpha:0.4675},0).wait(1).to({scaleX:0.7895,scaleY:1.0247,skewX:26.4802,x:17.45,y:-44.9,alpha:0.4988},0).wait(1).to({scaleX:0.819,scaleY:1.0631,skewY:47.0888,x:15.65,y:-45.8,alpha:0.5277},0).wait(1).to({scaleX:0.8463,scaleY:1.0985,x:14.05,y:-46.65,alpha:0.5545},0).wait(1).to({scaleX:0.8713,scaleY:1.131,x:12.6,y:-47.4,alpha:0.5791},0).wait(1).to({regX:70.8,regY:-17.9,scaleX:0.8943,scaleY:1.1608,x:63.95,y:-20.15,alpha:0.6016},0).wait(1).to({regX:-0.5,regY:0,scaleX:0.9158,scaleY:1.1888,x:10,y:-48.9,alpha:0.527},0).wait(1).to({scaleX:0.9355,scaleY:1.2142,x:8.85,y:-49.5,alpha:0.4592},0).wait(1).to({scaleX:0.9533,scaleY:1.2374,skewX:26.4803,x:7.8,y:-50.05,alpha:0.3975},0).wait(1).to({scaleX:0.9696,scaleY:1.2585,x:6.8,y:-50.6,alpha:0.3413},0).wait(1).to({scaleX:0.9843,scaleY:1.2777,x:5.95,y:-51.05,alpha:0.2903},0).wait(1).to({scaleX:0.9977,scaleY:1.295,x:5.15,y:-51.45,alpha:0.244},0).wait(1).to({scaleX:1.0099,scaleY:1.3109,skewX:26.4804,x:4.45,y:-51.85,alpha:0.202},0).wait(1).to({scaleX:1.0209,scaleY:1.3252,x:3.8,y:-52.2,alpha:0.1638},0).wait(1).to({scaleX:1.031,scaleY:1.3382,x:3.25,y:-52.55,alpha:0.1292},0).wait(1).to({scaleX:1.04,scaleY:1.35,x:2.7,y:-52.85,alpha:0.0979},0).wait(1).to({scaleX:1.0482,scaleY:1.3606,x:2.2,y:-53.1,alpha:0.0695},0).wait(1).to({scaleX:1.0556,scaleY:1.3702,x:1.8,y:-53.3,alpha:0.0439},0).wait(1).to({scaleX:1.0623,scaleY:1.3789,skewX:26.4805,x:1.4,y:-53.55,alpha:0.0208},0).wait(1).to({regX:70.8,regY:-17.9,scaleX:1.0683,scaleY:1.3867,x:64,y:-20.1,alpha:0},0).to({_off:true},1).wait(13));
    
        // レイヤー_1
        this.instance_2 = new lib.g_book1("synched",0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(71.35,-17.85,0.1805,0.3333,79.4936,0,0,71,-18.1);
        this.instance_2.alpha = 0.1992;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:-0.5,regY:0,scaleX:0.2067,scaleY:0.388,rotation:79.4934,x:61.75,y:-31.1,alpha:0.2403},0).wait(1).to({scaleX:0.2332,scaleY:0.4433,rotation:79.4932,x:60.5,y:-32.75,alpha:0.2818},0).wait(1).to({scaleX:0.2594,scaleY:0.4982,rotation:79.493,x:59.2,y:-34.5,alpha:0.323},0).wait(1).to({scaleX:0.2849,scaleY:0.5514,rotation:79.4929,x:57.9,y:-36.1,alpha:0.3629},0).wait(1).to({scaleX:0.3092,scaleY:0.6022,rotation:79.4927,x:56.75,y:-37.65,alpha:0.4011},0).wait(1).to({scaleX:0.332,scaleY:0.6498,rotation:79.4925,x:55.65,y:-39.1,alpha:0.4368},0).wait(1).to({scaleX:0.3531,scaleY:0.6938,rotation:79.4924,x:54.6,y:-40.45,alpha:0.4698},0).wait(1).to({regX:71,regY:-18.2,scaleX:0.3723,scaleY:0.734,rotation:79.4922,x:71.65,y:-17.95,alpha:0.5},0).wait(1).to({regX:-0.5,regY:0,scaleX:0.3916,scaleY:0.7745,rotation:79.4925,x:52.7,y:-42.9,alpha:0.4261},0).wait(1).to({scaleX:0.409,scaleY:0.8107,rotation:79.4928,x:51.8,y:-44,alpha:0.3598},0).wait(1).to({scaleX:0.4245,scaleY:0.8431,rotation:79.4931,x:51.05,y:-44.95,alpha:0.3007},0).wait(1).to({scaleX:0.4382,scaleY:0.8717,rotation:79.4933,x:50.4,y:-45.8,alpha:0.2484},0).wait(1).to({scaleX:0.4502,scaleY:0.8968,rotation:79.4935,x:49.8,y:-46.55,alpha:0.2024},0).wait(1).to({scaleX:0.4607,scaleY:0.9188,rotation:79.4937,x:49.3,y:-47.3,alpha:0.1622},0).wait(1).to({scaleX:0.4699,scaleY:0.9379,rotation:79.4938,x:48.85,y:-47.85,alpha:0.1273},0).wait(1).to({scaleX:0.4777,scaleY:0.9543,rotation:79.4939,x:48.45,y:-48.35,alpha:0.0974},0).wait(1).to({scaleX:0.4844,scaleY:0.9682,rotation:79.4941,x:48.15,y:-48.75,alpha:0.0719},0).wait(1).to({scaleX:0.49,scaleY:0.9799,x:47.85,y:-49.15,alpha:0.0505},0).wait(1).to({scaleX:0.4946,scaleY:0.9895,rotation:79.4942,x:47.65,y:-49.4,alpha:0.0329},0).wait(1).to({scaleX:0.4983,scaleY:0.9972,rotation:79.4943,x:47.45,y:-49.65,alpha:0.0188},0).wait(1).to({scaleX:0.5011,scaleY:1.0032,x:47.3,y:-49.85,alpha:0.0079},0).wait(1).to({regX:70.8,regY:-18.6,scaleX:0.5032,scaleY:1.0075,rotation:79.4944,x:71.8,y:-17.9,alpha:0},0).to({_off:true},1).wait(7).to({_off:false,regX:71,regY:-18.1,scaleX:0.1805,scaleY:0.3333,rotation:79.4936,x:71.35,y:-17.85,alpha:0.1992},0).wait(1).to({regX:-0.5,regY:0,scaleX:0.2067,scaleY:0.388,rotation:79.4934,x:61.75,y:-31.1,alpha:0.2403},0).wait(1).to({scaleX:0.2332,scaleY:0.4433,rotation:79.4932,x:60.5,y:-32.75,alpha:0.2818},0).wait(1).to({scaleX:0.2594,scaleY:0.4982,rotation:79.493,x:59.2,y:-34.5,alpha:0.323},0).wait(1).to({scaleX:0.2849,scaleY:0.5514,rotation:79.4929,x:57.9,y:-36.1,alpha:0.3629},0).wait(1).to({scaleX:0.3092,scaleY:0.6022,rotation:79.4927,x:56.75,y:-37.65,alpha:0.4011},0).wait(1).to({scaleX:0.332,scaleY:0.6498,rotation:79.4925,x:55.65,y:-39.1,alpha:0.4368},0).wait(1).to({scaleX:0.3531,scaleY:0.6938,rotation:79.4924,x:54.6,y:-40.45,alpha:0.4698},0).wait(1).to({regX:71,regY:-18.2,scaleX:0.3723,scaleY:0.734,rotation:79.4922,x:71.65,y:-17.95,alpha:0.5},0).wait(1).to({regX:-0.5,regY:0,scaleX:0.3916,scaleY:0.7745,rotation:79.4925,x:52.7,y:-42.9,alpha:0.4261},0).wait(1).to({scaleX:0.409,scaleY:0.8107,rotation:79.4928,x:51.8,y:-44,alpha:0.3598},0).wait(1).to({scaleX:0.4245,scaleY:0.8431,rotation:79.4931,x:51.05,y:-44.95,alpha:0.3007},0).wait(1).to({scaleX:0.4382,scaleY:0.8717,rotation:79.4933,x:50.4,y:-45.8,alpha:0.2484},0).wait(1).to({scaleX:0.4502,scaleY:0.8968,rotation:79.4935,x:49.8,y:-46.55,alpha:0.2024},0).wait(1).to({scaleX:0.4607,scaleY:0.9188,rotation:79.4937,x:49.3,y:-47.3,alpha:0.1622},0).wait(1).to({scaleX:0.4699,scaleY:0.9379,rotation:79.4938,x:48.85,y:-47.85,alpha:0.1273},0).wait(1).to({scaleX:0.4777,scaleY:0.9543,rotation:79.4939,x:48.45,y:-48.35,alpha:0.0974},0).wait(1).to({scaleX:0.4844,scaleY:0.9682,rotation:79.4941,x:48.15,y:-48.75,alpha:0.0719},0).wait(1).to({scaleX:0.49,scaleY:0.9799,x:47.85,y:-49.15,alpha:0.0505},0).wait(1).to({scaleX:0.4946,scaleY:0.9895,rotation:79.4942,x:47.65,y:-49.4,alpha:0.0329},0).wait(1).to({scaleX:0.4983,scaleY:0.9972,rotation:79.4943,x:47.45,y:-49.65,alpha:0.0188},0).wait(1).to({scaleX:0.5011,scaleY:1.0032,x:47.3,y:-49.85,alpha:0.0079},0).wait(1).to({regX:70.8,regY:-18.6,scaleX:0.5032,scaleY:1.0075,rotation:79.4944,x:71.8,y:-17.9,alpha:0},0).to({_off:true},1).wait(7).to({_off:false,regX:71,regY:-18.1,scaleX:0.1805,scaleY:0.3333,rotation:79.4936,x:71.35,y:-17.85,alpha:0.1992},0).wait(1).to({regX:-0.5,regY:0,scaleX:0.2067,scaleY:0.388,rotation:79.4934,x:61.75,y:-31.1,alpha:0.2403},0).wait(1).to({scaleX:0.2332,scaleY:0.4433,rotation:79.4932,x:60.5,y:-32.75,alpha:0.2818},0).wait(1).to({scaleX:0.2594,scaleY:0.4982,rotation:79.493,x:59.2,y:-34.5,alpha:0.323},0).wait(1).to({scaleX:0.2849,scaleY:0.5514,rotation:79.4929,x:57.9,y:-36.1,alpha:0.3629},0).wait(1).to({scaleX:0.3092,scaleY:0.6022,rotation:79.4927,x:56.75,y:-37.65,alpha:0.4011},0).wait(1).to({scaleX:0.332,scaleY:0.6498,rotation:79.4925,x:55.65,y:-39.1,alpha:0.4368},0).wait(1).to({scaleX:0.3531,scaleY:0.6938,rotation:79.4924,x:54.6,y:-40.45,alpha:0.4698},0).wait(1).to({regX:71,regY:-18.2,scaleX:0.3723,scaleY:0.734,rotation:79.4922,x:71.65,y:-17.95,alpha:0.5},0).wait(1).to({regX:-0.5,regY:0,scaleX:0.3916,scaleY:0.7745,rotation:79.4925,x:52.7,y:-42.9,alpha:0.4261},0).wait(1).to({scaleX:0.409,scaleY:0.8107,rotation:79.4928,x:51.8,y:-44,alpha:0.3598},0).wait(1).to({scaleX:0.4245,scaleY:0.8431,rotation:79.4931,x:51.05,y:-44.95,alpha:0.3007},0).wait(1).to({scaleX:0.4382,scaleY:0.8717,rotation:79.4933,x:50.4,y:-45.8,alpha:0.2484},0).wait(1).to({scaleX:0.4502,scaleY:0.8968,rotation:79.4935,x:49.8,y:-46.55,alpha:0.2024},0).wait(1).to({scaleX:0.4607,scaleY:0.9188,rotation:79.4937,x:49.3,y:-47.3,alpha:0.1622},0).wait(1).to({scaleX:0.4699,scaleY:0.9379,rotation:79.4938,x:48.85,y:-47.85,alpha:0.1273},0).wait(1).to({scaleX:0.4777,scaleY:0.9543,rotation:79.4939,x:48.45,y:-48.35,alpha:0.0974},0).wait(1).to({scaleX:0.4844,scaleY:0.9682,rotation:79.4941,x:48.15,y:-48.75,alpha:0.0719},0).wait(1).to({scaleX:0.49,scaleY:0.9799,x:47.85,y:-49.15,alpha:0.0505},0).wait(1).to({scaleX:0.4946,scaleY:0.9895,rotation:79.4942,x:47.65,y:-49.4,alpha:0.0329},0).wait(1).to({scaleX:0.4983,scaleY:0.9972,rotation:79.4943,x:47.45,y:-49.65,alpha:0.0188},0).wait(1).to({scaleX:0.5011,scaleY:1.0032,x:47.3,y:-49.85,alpha:0.0079},0).wait(1).to({regX:70.8,regY:-18.6,scaleX:0.5032,scaleY:1.0075,rotation:79.4944,x:71.8,y:-17.9,alpha:0},0).to({_off:true},1).wait(7).to({_off:false,regX:71,regY:-18.1,scaleX:0.1805,scaleY:0.3333,rotation:79.4936,x:71.35,y:-17.85,alpha:0.1992},0).wait(1).to({regX:-0.5,regY:0,scaleX:0.2067,scaleY:0.388,rotation:79.4934,x:61.75,y:-31.1,alpha:0.2403},0).wait(1).to({scaleX:0.2332,scaleY:0.4433,rotation:79.4932,x:60.5,y:-32.75,alpha:0.2818},0).wait(1).to({scaleX:0.2594,scaleY:0.4982,rotation:79.493,x:59.2,y:-34.5,alpha:0.323},0).wait(1).to({scaleX:0.2849,scaleY:0.5514,rotation:79.4929,x:57.9,y:-36.1,alpha:0.3629},0).wait(1).to({scaleX:0.3092,scaleY:0.6022,rotation:79.4927,x:56.75,y:-37.65,alpha:0.4011},0).wait(1).to({scaleX:0.332,scaleY:0.6498,rotation:79.4925,x:55.65,y:-39.1,alpha:0.4368},0).wait(1).to({scaleX:0.3531,scaleY:0.6938,rotation:79.4924,x:54.6,y:-40.45,alpha:0.4698},0).wait(1).to({regX:71,regY:-18.2,scaleX:0.3723,scaleY:0.734,rotation:79.4922,x:71.65,y:-17.95,alpha:0.5},0).wait(1).to({regX:-0.5,regY:0,scaleX:0.3916,scaleY:0.7745,rotation:79.4925,x:52.7,y:-42.9,alpha:0.4261},0).wait(1).to({scaleX:0.409,scaleY:0.8107,rotation:79.4928,x:51.8,y:-44,alpha:0.3598},0).wait(1).to({scaleX:0.4245,scaleY:0.8431,rotation:79.4931,x:51.05,y:-44.95,alpha:0.3007},0).wait(1).to({scaleX:0.4382,scaleY:0.8717,rotation:79.4933,x:50.4,y:-45.8,alpha:0.2484},0).wait(1).to({scaleX:0.4502,scaleY:0.8968,rotation:79.4935,x:49.8,y:-46.55,alpha:0.2024},0).wait(1).to({scaleX:0.4607,scaleY:0.9188,rotation:79.4937,x:49.3,y:-47.3,alpha:0.1622},0).wait(1).to({scaleX:0.4699,scaleY:0.9379,rotation:79.4938,x:48.85,y:-47.85,alpha:0.1273},0).wait(1).to({scaleX:0.4777,scaleY:0.9543,rotation:79.4939,x:48.45,y:-48.35,alpha:0.0974},0).wait(1).to({scaleX:0.4844,scaleY:0.9682,rotation:79.4941,x:48.15,y:-48.75,alpha:0.0719},0).wait(1).to({scaleX:0.49,scaleY:0.9799,x:47.85,y:-49.15,alpha:0.0505},0).wait(1).to({scaleX:0.4946,scaleY:0.9895,rotation:79.4942,x:47.65,y:-49.4,alpha:0.0329},0).wait(1).to({scaleX:0.4983,scaleY:0.9972,rotation:79.4943,x:47.45,y:-49.65,alpha:0.0188},0).wait(1).to({scaleX:0.5011,scaleY:1.0032,x:47.3,y:-49.85,alpha:0.0079},0).wait(1).to({regX:70.8,regY:-18.6,scaleX:0.5032,scaleY:1.0075,rotation:79.4944,x:71.8,y:-17.9,alpha:0},0).to({_off:true},1).wait(25));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-124.2,-227.6,281,348);
    
    
    (lib.ha01 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // glitter
        this.a = new lib.ha02();
        this.a.name = "a";
        this.a.parent = this;
        this.a.setTransform(0,0,0.9983,0.9983,44.8836);
    
        this.timeline.addTween(cjs.Tween.get(this.a).wait(26));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-62.1,-62.3,123.80000000000001,123.69999999999999);
    
    
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
        this.shape.graphics.f("#333333").s().p("AgHAXIg9AEIgBgQIA8gEIgDggIg3AFIgBgQIA3gFIgDgeIAQgBIADAeIA6gEIACAQIg6AEIADAgIA9gEIABAQIg8AEIAFAyIgRABg");
        this.shape.setTransform(71.925,0.5);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#333333").s().p("AgqApQAagGAQgMQARgLAJgSQAJgTABgdIASADQgCAUgFARQgFAQgJANQgJAOgPAJQgOAKgXAHgAgrgPIgEgQIgGgOIAQgEIAFANIAFAQIAEAPIgQAFIgEgPgAgGgTIgEgRIgFgOIAPgDIAFAOIAEAPIADAPIgPAEIgDgOg");
        this.shape_1.setTransform(55.95,2.125);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#333333").s().p("AhDA+QARgFALgGQAMgHAGgIQAGgIADgLQADgJAAgKIhBAAIAAgQICLAAIAAAQIg4AAQgBAMgEAMQgDAMgGAKQgGAKgMAIQgLAIgRAGgAAoguIgEgLIAAAOIheAAIAAgQIBcAAIgCgEIgCgDIALgEIAIAPIAGAOIgLAEIgEgJgAA7g6IgIgOIAKgDIAIANIAGAOIgKAEIgGgOg");
        this.shape_2.setTransform(40.475,0.05);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#333333").s().p("Ag4BJIAAiOIATAAIAAAqIAPAEIAUAHIAUAHIAVAIIASAGIgIATIgdgNIgdgLIgcgJIAABSgAAQgiIgJgJIgIgIIAIgHIAIAHIAKAJIAIAIIgJAJIgIgJgAAhgxIgJgJIgJgHIAJgHIAIAGIAKAJIAIAIIgJAIIgIgIg");
        this.shape_3.setTransform(25.075,0.3);
    
        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#333333").s().p("AgqApQAbgGAQgMQAQgLAJgSQAJgTACgdIARADQgCAUgFARQgFAQgJANQgJAOgPAJQgPAKgWAHgAgrgPIgFgQIgFgOIAQgEIAFANIAFAQIAEAPIgQAFIgEgPgAgGgTIgEgRIgFgOIAQgDIAEAOIAEAPIADAPIgQAEIgCgOg");
        this.shape_4.setTransform(7.95,2.125);
    
        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#333333").s().p("AgyA3QAXgBAQgGQAQgFAKgIQALgIAFgKQAGgKADgLQADgMAAgNIhWAAIAAApIgSAAIAAg4IA0AAIAAgbIARAAIAAAbIA2AAIAAAAQAAAZgFATQgEAUgMAPQgLAOgUAKQgTAKgdAEg");
        this.shape_5.setTransform(-7.8227,0.4);
    
        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#333333").s().p("AgGAzQARgBAOgHQANgGAIgLQAIgLABgQIAAgBQAAgQgGgKQgGgLgKgGQgKgGgMgBQgEAZgFAUQgEASgFANQgFANgFAGQgEAHgGADQgFADgGAAQgFAAgGgCQgGgDgFgGQgFgFgDgJQgEgKAAgNQAAgNAFgOQAGgNAKgLQAKgLAOgGQAOgGARAAIABAAQATAAAOAGQANAGAHAKQAIAKAEALQADALAAAKIAAABQAAAKgEAKQgDALgIAKQgHAKgOAHQgOAHgVADgAgbgrQgJAGgGAIQgHAJgDAKQgEAKAAAJQABAKACAHQADAHAEADQAEADADAAQADAAACgCIAEgEQAEgHAEgMIAJgdQAEgRACgUQgLADgJAGg");
        this.shape_6.setTransform(-23.875,0.975);
    
        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#333333").s().p("Ag+A5QAbgCAVgJQATgJAOgOQAOgNAJgQQAJgQAGgSIAPAMQgDALgHANQgGALgIANQgKAMgOALQgNALgRAIQgUAJgZAEgAgnAFIgRgGIgQgGIAJgPIAPAFIASAIIAQAIIgIAQIgRgKgAgRggIgQgHIgQgGIAJgPIAOAFIARAIQAJADAGAFIgIARIgPgKgAAjgtIgLgMIAJgGIALALIAJALIgJAHIgJgLgAA1g4IgLgMIAJgGIALALIAKALIgJAHIgKgLg");
        this.shape_7.setTransform(-39.7,-0.025);
    
        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#333333").s().p("AgqApQAbgGAQgMQAQgLAJgSQAJgTACgdIARADQgCAUgFARQgFAQgJANQgJAOgPAJQgPAKgXAHgAgqgPIgGgQIgFgOIAPgEIAGANIAFAQIAEAPIgQAFIgDgPgAgGgTIgEgRIgFgOIAQgDIAEAOIAEAPIADAPIgQAEIgCgOg");
        this.shape_8.setTransform(-56.05,2.125);
    
        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#333333").s().p("Ag8A9IAAh5IB5AAIAAB4IgTAAIAAgIIhUAAIAAAJgAgqAlIBUAAIAAhRIhUAAg");
        this.shape_9.setTransform(-72.025,0.9);
    
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
    
    
    (lib.gｌitter_rise_inner3 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{r:106,"-":128});
    
        // timeline functions:
        this.frame_0 = function() {
            this.visible = false;
            
            this.rotationNum = this.rotation;
            //上の階層の角度
            
            this.rotation = this.rotationNum + exportRoot._u.random(15);
            //上の階層の角度変えてる
            
            this.ha.a.gotoAndStop(exportRoot._u.random(3) + 1);
            //葉の種類
            
            this.gotoAndPlay(exportRoot._u.random(100)+1)
            //この階層のどこから始めるか
        }
        this.frame_106 = function() {
            this.visible = true;
        }
        this.frame_128 = function() {
            this.ha.a.gotoAndStop(exportRoot._u.random(3) + 1);
            //葉の種類
            
            this.gotoAndPlay(exportRoot._u.random(100)+1)
            //この階層のどこから始めるか
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(106).call(this.frame_106).wait(22).call(this.frame_128).wait(1));
    
        // レイヤー_1
        this.ha = new lib.ha01();
        this.ha.name = "ha";
        this.ha.parent = this;
        this.ha.setTransform(0,-17.45);
    
        this.timeline.addTween(cjs.Tween.get(this.ha).wait(106).to({x:-1.1,y:-18.05,alpha:0.1992},0).to({guide:{path:[-1.1,-17.9,-35.6,38,-55.2,90.1]},alpha:1},3).to({rotation:-26.1928,guide:{path:[-55.2,90.2,-70.8,131.8,-76.9,170.9,-90.7,259.6,-22.5,381.7,35.8,486.2,35.3,581,35.2,605.2,31.7,630.8]}},16).to({rotation:0,guide:{path:[31.7,630.8,29.5,646.2,26.2,662.2,17.7,702.2,0.7,749.8]},alpha:0.1992},3).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-117.4,-80.4,204.10000000000002,891.6);
    
    
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
        mask.graphics.p("AqxJOIAAybIVjAAIAASbg");
        mask.setTransform(70,60);
    
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
    
        var maskedShapeInstanceList = [this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6];
    
        for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[]},14).wait(1));
    
        // body
        this.b = new lib.character1_base();
        this.b.name = "b";
        this.b.parent = this;
        this.b.setTransform(-96,178);
    
        var maskedShapeInstanceList = [this.b];
    
        for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }
    
        this.timeline.addTween(cjs.Tween.get(this.b).wait(20));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(1,1,138,118);
    
    
    (lib.bg_zoom_half = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // timeline functions:
        this.frame_29 = function() {
            this.gotoAndPlay(12);
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(14));
    
        // glitter コピー 13
        this.instance = new lib.kira_1();
        this.instance.parent = this;
        this.instance.setTransform(424.35,196.7,0.0632,0.0574,1.8132,0,0,1.6,0.8);
        this.instance.alpha = 0.1992;
        this.instance._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).wait(1).to({regX:0.2,regY:-0.2,scaleX:0.0933,scaleY:0.09,rotation:1.8927,x:424.2,y:196.6,alpha:0.5496},0).wait(1).to({scaleX:0.1148,scaleY:0.1133,rotation:1.9494,x:424.15,alpha:0.7998},0).wait(1).to({scaleX:0.1277,scaleY:0.1273,rotation:1.9835,x:424.2,y:196.5,alpha:0.95},0).wait(1).to({regX:0.4,regY:0,scaleX:0.1319,scaleY:0.1319,rotation:1.9948,x:424.35,y:196.7,alpha:1},0).wait(1).to({regX:0.2,regY:-0.2,scaleX:0.1307,scaleY:0.1307,rotation:1.9911,y:196.6,alpha:0.9795},0).wait(1).to({scaleX:0.1272,scaleY:0.1272,rotation:1.9811,alpha:0.923},0).wait(1).to({scaleX:0.1215,scaleY:0.1215,rotation:1.9646,x:424.3,y:196.65,alpha:0.8306},0).wait(1).to({scaleX:0.1136,scaleY:0.1136,rotation:1.9418,alpha:0.7022},0).wait(1).to({scaleX:0.1036,scaleY:0.1036,rotation:1.9125,alpha:0.5379},0).wait(1).to({scaleX:0.0912,scaleY:0.0912,rotation:1.8768,alpha:0.3377},0).wait(1).to({regX:0,regY:0,scaleX:0.0767,scaleY:0.0767,rotation:1.8348,x:424.35,y:196.7,alpha:0.1016},0).to({_off:true},1).wait(6).to({_off:false,regX:1.6,regY:0.8,scaleX:0.0632,scaleY:0.0574,rotation:1.8132,alpha:0.1992},0).wait(1).to({regX:0.2,regY:-0.2,scaleX:0.0933,scaleY:0.09,rotation:1.8927,x:424.2,y:196.6,alpha:0.5496},0).wait(1).to({scaleX:0.1148,scaleY:0.1133,rotation:1.9494,x:424.15,alpha:0.7998},0).wait(1).to({scaleX:0.1277,scaleY:0.1273,rotation:1.9835,x:424.2,y:196.5,alpha:0.95},0).wait(1).to({regX:0.4,regY:0,scaleX:0.1319,scaleY:0.1319,rotation:1.9948,x:424.35,y:196.7,alpha:1},0).wait(1).to({regX:0.2,regY:-0.2,scaleX:0.1307,scaleY:0.1307,rotation:1.9911,y:196.6,alpha:0.9795},0).wait(1).to({scaleX:0.1272,scaleY:0.1272,rotation:1.9811,alpha:0.923},0).wait(1).to({scaleX:0.1215,scaleY:0.1215,rotation:1.9646,x:424.3,y:196.65,alpha:0.8306},0).wait(1).to({scaleX:0.1136,scaleY:0.1136,rotation:1.9418,alpha:0.7022},0).wait(1).to({scaleX:0.1036,scaleY:0.1036,rotation:1.9125,alpha:0.5379},0).wait(1).to({scaleX:0.0912,scaleY:0.0912,rotation:1.8768,alpha:0.3377},0).wait(1).to({regX:0,regY:0,scaleX:0.0767,scaleY:0.0767,rotation:1.8348,x:424.35,y:196.7,alpha:0.1016},0).to({_off:true},1).wait(4));
    
        // glitter コピー 12
        this.instance_1 = new lib.kira_1();
        this.instance_1.parent = this;
        this.instance_1.setTransform(482.05,221.65,0.0564,0.0564,2.8996,0,0,1.9,2.6);
        this.instance_1.alpha = 0.1992;
        this.instance_1._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1).to({regX:0.2,regY:-0.2,scaleX:0.0969,scaleY:0.0969,rotation:2.8297,x:481.85,y:221.35,alpha:0.3958},0).wait(1).to({scaleX:0.1259,scaleY:0.1259,rotation:2.7799,y:221.25,alpha:0.5361},0).wait(1).to({scaleX:0.1433,scaleY:0.1433,rotation:2.75,x:481.8,y:221.2,alpha:0.6204},0).wait(1).to({regX:1.1,regY:0.6,scaleX:0.1491,scaleY:0.1491,rotation:2.74,x:482.05,y:221.65,alpha:0.6484},0).wait(1).to({regX:0.2,regY:-0.2,scaleX:0.1476,scaleY:0.1476,rotation:2.7435,x:481.95,y:221.5,alpha:0.6359},0).wait(1).to({scaleX:0.1437,scaleY:0.1437,rotation:2.7533,alpha:0.6016},0).wait(1).to({scaleX:0.1373,scaleY:0.1373,rotation:2.7692,alpha:0.5453},0).wait(1).to({scaleX:0.1284,scaleY:0.1284,rotation:2.7914,alpha:0.4672},0).wait(1).to({scaleX:0.117,scaleY:0.117,rotation:2.8198,x:481.9,y:221.55,alpha:0.3672},0).wait(1).to({scaleX:0.1031,scaleY:0.1031,rotation:2.8544,alpha:0.2453},0).wait(1).to({regX:1.1,regY:-0.7,scaleX:0.0867,scaleY:0.0867,rotation:2.8951,x:482.05,y:221.65,alpha:0.1016},0).to({_off:true},1).wait(6).to({_off:false,regX:1.9,regY:2.6,scaleX:0.0564,scaleY:0.0564,rotation:2.8996,alpha:0.1992},0).wait(1).to({regX:0.2,regY:-0.2,scaleX:0.0969,scaleY:0.0969,rotation:2.8297,x:481.85,y:221.35,alpha:0.3958},0).wait(1).to({scaleX:0.1259,scaleY:0.1259,rotation:2.7799,y:221.25,alpha:0.5361},0).wait(1).to({scaleX:0.1433,scaleY:0.1433,rotation:2.75,x:481.8,y:221.2,alpha:0.6204},0).wait(1).to({regX:1.1,regY:0.6,scaleX:0.1491,scaleY:0.1491,rotation:2.74,x:482.05,y:221.65,alpha:0.6484},0).wait(1).to({regX:0.2,regY:-0.2,scaleX:0.1476,scaleY:0.1476,rotation:2.7435,x:481.95,y:221.5,alpha:0.6359},0).wait(1).to({scaleX:0.1437,scaleY:0.1437,rotation:2.7533,alpha:0.6016},0).wait(1).to({scaleX:0.1373,scaleY:0.1373,rotation:2.7692,alpha:0.5453},0).wait(1).to({scaleX:0.1284,scaleY:0.1284,rotation:2.7914,alpha:0.4672},0).wait(1).to({scaleX:0.117,scaleY:0.117,rotation:2.8198,x:481.9,y:221.55,alpha:0.3672},0).wait(1).to({scaleX:0.1031,scaleY:0.1031,rotation:2.8544,alpha:0.2453},0).wait(1).to({regX:1.1,regY:-0.7,scaleX:0.0867,scaleY:0.0867,rotation:2.8951,x:482.05,y:221.65,alpha:0.1016},0).to({_off:true},1).wait(12));
    
        // glitter コピー 11
        this.instance_2 = new lib.kira_1();
        this.instance_2.parent = this;
        this.instance_2.setTransform(401.65,261.95,0.0644,0.0561,0.8107,0,0,3.1,1.8);
        this.instance_2.alpha = 0.1992;
        this.instance_2._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({_off:false},0).wait(1).to({regX:0.2,regY:-0.2,scaleX:0.097,scaleY:0.0923,rotation:0.88,x:401.3,y:261.75,alpha:0.418},0).wait(1).to({scaleX:0.1203,scaleY:0.1182,rotation:0.9295,x:401.25,y:261.7,alpha:0.5742},0).wait(1).to({scaleX:0.1343,scaleY:0.1338,rotation:0.9592,y:261.65,alpha:0.668},0).wait(1).to({regX:0.7,regY:0,scaleX:0.1389,scaleY:0.1389,rotation:0.9691,x:401.65,y:261.95,alpha:0.6992},0).wait(1).to({regX:0.2,regY:-0.2,scaleX:0.1376,scaleY:0.1376,rotation:0.966,x:401.6,y:261.85,alpha:0.6856},0).wait(1).to({scaleX:0.1339,scaleY:0.1339,rotation:0.9575,alpha:0.648},0).wait(1).to({scaleX:0.128,scaleY:0.128,rotation:0.9436,alpha:0.5865},0).wait(1).to({scaleX:0.1197,scaleY:0.1197,rotation:0.9242,x:401.55,y:261.9,alpha:0.5011},0).wait(1).to({scaleX:0.109,scaleY:0.109,rotation:0.8994,alpha:0.3919},0).wait(1).to({scaleX:0.096,scaleY:0.096,rotation:0.8692,alpha:0.2587},0).wait(1).to({regX:0.6,regY:-1.2,scaleX:0.0808,scaleY:0.0808,rotation:0.8336,x:401.65,y:261.95,alpha:0.1016},0).to({_off:true},1).wait(6).to({_off:false,regX:3.1,regY:1.8,scaleX:0.0644,scaleY:0.0561,rotation:0.8107,alpha:0.1992},0).wait(1).to({regX:0.2,regY:-0.2,scaleX:0.097,scaleY:0.0923,rotation:0.88,x:401.3,y:261.75,alpha:0.418},0).wait(1).to({scaleX:0.1203,scaleY:0.1182,rotation:0.9295,x:401.25,y:261.7,alpha:0.5742},0).wait(1).to({scaleX:0.1343,scaleY:0.1338,rotation:0.9592,y:261.65,alpha:0.668},0).wait(1).to({regX:0.7,regY:0,scaleX:0.1389,scaleY:0.1389,rotation:0.9691,x:401.65,y:261.95,alpha:0.6992},0).wait(1).to({regX:0.2,regY:-0.2,scaleX:0.1376,scaleY:0.1376,rotation:0.966,x:401.6,y:261.85,alpha:0.6856},0).wait(1).to({scaleX:0.1339,scaleY:0.1339,rotation:0.9575,alpha:0.648},0).wait(1).to({scaleX:0.128,scaleY:0.128,rotation:0.9436,alpha:0.5865},0).wait(1).to({scaleX:0.1197,scaleY:0.1197,rotation:0.9242,x:401.55,y:261.9,alpha:0.5011},0).wait(1).to({scaleX:0.109,scaleY:0.109,rotation:0.8994,alpha:0.3919},0).wait(1).to({scaleX:0.096,scaleY:0.096,rotation:0.8692,alpha:0.2587},0).wait(1).to({regX:0.6,regY:-1.2,scaleX:0.0808,scaleY:0.0808,rotation:0.8336,x:401.65,y:261.95,alpha:0.1016},0).to({_off:true},1).wait(5));
    
        // glitter コピー 10
        this.instance_3 = new lib.kira_1();
        this.instance_3.parent = this;
        this.instance_3.setTransform(456.85,232.85,0.0645,0.0645,2.4142,0,0,1.6,0.7);
        this.instance_3.alpha = 0.1992;
        this.instance_3._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({_off:false},0).wait(1).to({regX:0.2,regY:-0.2,scaleX:0.1108,scaleY:0.1108,rotation:2.3393,x:456.65,y:232.75,alpha:0.5496},0).wait(1).to({scaleX:0.1439,scaleY:0.1439,rotation:2.2858,y:232.65,alpha:0.7998},0).wait(1).to({scaleX:0.1638,scaleY:0.1638,rotation:2.2537,x:456.6,alpha:0.95},0).wait(1).to({regX:0.6,regY:0,scaleX:0.1704,scaleY:0.1704,rotation:2.243,x:456.85,y:232.85,alpha:1},0).wait(1).to({regX:0.2,regY:-0.2,scaleX:0.1688,scaleY:0.1688,rotation:2.2472,x:456.8,y:232.75,alpha:0.9795},0).wait(1).to({scaleX:0.1643,scaleY:0.1643,rotation:2.2587,alpha:0.923},0).wait(1).to({scaleX:0.1569,scaleY:0.1569,rotation:2.2776,alpha:0.8306},0).wait(1).to({scaleX:0.1468,scaleY:0.1468,rotation:2.3038,alpha:0.7022},0).wait(1).to({scaleX:0.1337,scaleY:0.1337,rotation:2.3373,alpha:0.5379},0).wait(1).to({scaleX:0.1179,scaleY:0.1179,rotation:2.3782,x:456.75,y:232.8,alpha:0.3377},0).wait(1).to({regX:1,regY:-0.6,scaleX:0.0991,scaleY:0.0991,rotation:2.4263,x:456.85,y:232.85,alpha:0.1016},0).to({_off:true},1).wait(6).to({_off:false,regX:1.6,regY:0.7,scaleX:0.0645,scaleY:0.0645,rotation:2.4142,alpha:0.1992},0).wait(1).to({regX:0.2,regY:-0.2,scaleX:0.1108,scaleY:0.1108,rotation:2.3393,x:456.65,y:232.75,alpha:0.5496},0).wait(1).to({scaleX:0.1439,scaleY:0.1439,rotation:2.2858,y:232.65,alpha:0.7998},0).wait(1).to({scaleX:0.1638,scaleY:0.1638,rotation:2.2537,x:456.6,alpha:0.95},0).wait(1).to({regX:0.6,regY:0,scaleX:0.1704,scaleY:0.1704,rotation:2.243,x:456.85,y:232.85,alpha:1},0).wait(1).to({regX:0.2,regY:-0.2,scaleX:0.1688,scaleY:0.1688,rotation:2.2472,x:456.8,y:232.75,alpha:0.9795},0).wait(1).to({scaleX:0.1643,scaleY:0.1643,rotation:2.2587,alpha:0.923},0).wait(1).to({scaleX:0.1569,scaleY:0.1569,rotation:2.2776,alpha:0.8306},0).wait(1).to({scaleX:0.1468,scaleY:0.1468,rotation:2.3038,alpha:0.7022},0).wait(1).to({scaleX:0.1337,scaleY:0.1337,rotation:2.3373,alpha:0.5379},0).wait(1).to({scaleX:0.1179,scaleY:0.1179,rotation:2.3782,x:456.75,y:232.8,alpha:0.3377},0).wait(1).to({regX:1,regY:-0.6,scaleX:0.0991,scaleY:0.0991,rotation:2.4263,x:456.85,y:232.85,alpha:0.1016},0).to({_off:true},1).wait(8));
    
        // glitter コピー 9
        this.instance_4 = new lib.kira_1();
        this.instance_4.parent = this;
        this.instance_4.setTransform(484.55,257.85,0.059,0.059,5.138,0,0,1.9,2.4);
        this.instance_4.alpha = 0.1992;
        this.instance_4._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({_off:false},0).wait(1).to({regX:0.2,regY:-0.2,scaleX:0.1014,scaleY:0.1014,rotation:5.0672,x:484.35,y:257.55,alpha:0.3958},0).wait(1).to({scaleX:0.1316,scaleY:0.1316,rotation:5.0166,y:257.45,alpha:0.5361},0).wait(1).to({scaleX:0.1498,scaleY:0.1498,rotation:4.9862,x:484.3,y:257.4,alpha:0.6204},0).wait(1).to({regX:1,regY:0.2,scaleX:0.1559,scaleY:0.1559,rotation:4.9761,x:484.55,y:257.85,alpha:0.6484},0).wait(1).to({regX:0.2,regY:-0.2,scaleX:0.1544,scaleY:0.1544,rotation:4.98,x:484.45,y:257.75,alpha:0.6359},0).wait(1).to({scaleX:0.1503,scaleY:0.1503,rotation:4.9907,alpha:0.6016},0).wait(1).to({scaleX:0.1436,scaleY:0.1436,rotation:5.0083,alpha:0.5453},0).wait(1).to({scaleX:0.1343,scaleY:0.1343,rotation:5.0328,alpha:0.4672},0).wait(1).to({scaleX:0.1223,scaleY:0.1223,rotation:5.0641,x:484.4,y:257.8,alpha:0.3672},0).wait(1).to({scaleX:0.1078,scaleY:0.1078,rotation:5.1023,alpha:0.2453},0).wait(1).to({regX:2.1,regY:-1.3,scaleX:0.0907,scaleY:0.0907,rotation:5.1473,x:484.55,y:257.85,alpha:0.1016},0).to({_off:true},1).wait(6).to({_off:false,regX:1.9,regY:2.4,scaleX:0.059,scaleY:0.059,rotation:5.138,alpha:0.1992},0).wait(1).to({regX:0.2,regY:-0.2,scaleX:0.1014,scaleY:0.1014,rotation:5.0672,x:484.35,y:257.55,alpha:0.3958},0).wait(1).to({scaleX:0.1316,scaleY:0.1316,rotation:5.0166,y:257.45,alpha:0.5361},0).wait(1).to({scaleX:0.1498,scaleY:0.1498,rotation:4.9862,x:484.3,y:257.4,alpha:0.6204},0).wait(1).to({regX:1,regY:0.2,scaleX:0.1559,scaleY:0.1559,rotation:4.9761,x:484.55,y:257.85,alpha:0.6484},0).wait(1).to({regX:0.2,regY:-0.2,scaleX:0.1544,scaleY:0.1544,rotation:4.98,x:484.45,y:257.75,alpha:0.6359},0).wait(1).to({scaleX:0.1503,scaleY:0.1503,rotation:4.9907,alpha:0.6016},0).wait(1).to({scaleX:0.1436,scaleY:0.1436,rotation:5.0083,alpha:0.5453},0).wait(1).to({scaleX:0.1343,scaleY:0.1343,rotation:5.0328,alpha:0.4672},0).wait(1).to({scaleX:0.1223,scaleY:0.1223,rotation:5.0641,x:484.4,y:257.8,alpha:0.3672},0).wait(1).to({scaleX:0.1078,scaleY:0.1078,rotation:5.1023,alpha:0.2453},0).wait(1).to({regX:2.1,regY:-1.3,scaleX:0.0907,scaleY:0.0907,rotation:5.1473,x:484.55,y:257.85,alpha:0.1016},0).to({_off:true},1).wait(11));
    
        // glitter コピー 8
        this.instance_5 = new lib.kira_1();
        this.instance_5.parent = this;
        this.instance_5.setTransform(438.05,263.45,0.0727,0.0726,3.3742,0,0,1.6,2.6);
        this.instance_5.alpha = 0.1992;
        this.instance_5._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8).to({_off:false},0).wait(1).to({regX:0.2,regY:-0.2,scaleX:0.1308,scaleY:0.1188,rotation:3.4422,x:437.9,y:263.1,alpha:0.5496},0).wait(1).to({scaleX:0.1724,scaleY:0.1518,rotation:3.4907,x:437.85,y:262.95,alpha:0.7998},0).wait(1).to({scaleX:0.1973,scaleY:0.1716,rotation:3.5198,x:437.8,y:262.9,alpha:0.95},0).wait(1).to({regX:0.5,regY:0.2,scaleX:0.2056,scaleY:0.1782,rotation:3.5295,x:438.05,y:263.45,alpha:1},0).wait(1).to({regX:0.2,regY:-0.2,scaleX:0.2034,scaleY:0.1767,rotation:3.5261,x:438,y:263.35,alpha:0.9795},0).wait(1).to({scaleX:0.1976,scaleY:0.1725,rotation:3.5168,alpha:0.923},0).wait(1).to({scaleX:0.1879,scaleY:0.1657,rotation:3.5015,alpha:0.8306},0).wait(1).to({scaleX:0.1745,scaleY:0.1562,rotation:3.4802,alpha:0.7022},0).wait(1).to({scaleX:0.1574,scaleY:0.144,rotation:3.453,alpha:0.5379},0).wait(1).to({scaleX:0.1365,scaleY:0.1292,rotation:3.4198,alpha:0.3377},0).wait(1).to({regX:0.9,regY:-0.1,scaleX:0.1118,scaleY:0.1118,rotation:3.3807,x:438.05,y:263.45,alpha:0.1016},0).to({_off:true},1).wait(6).to({_off:false,regX:1.6,regY:2.6,scaleX:0.0727,scaleY:0.0726,rotation:3.3742,alpha:0.1992},0).wait(1).to({regX:0.2,regY:-0.2,scaleX:0.1308,scaleY:0.1188,rotation:3.4422,x:437.9,y:263.1,alpha:0.5496},0).wait(1).to({scaleX:0.1724,scaleY:0.1518,rotation:3.4907,x:437.85,y:262.95,alpha:0.7998},0).wait(1).to({scaleX:0.1973,scaleY:0.1716,rotation:3.5198,x:437.8,y:262.9,alpha:0.95},0).wait(1).to({regX:0.5,regY:0.2,scaleX:0.2056,scaleY:0.1782,rotation:3.5295,x:438.05,y:263.45,alpha:1},0).wait(1).to({regX:0.2,regY:-0.2,scaleX:0.2034,scaleY:0.1767,rotation:3.5261,x:438,y:263.35,alpha:0.9795},0).wait(1).to({scaleX:0.1976,scaleY:0.1725,rotation:3.5168,alpha:0.923},0).wait(1).to({scaleX:0.1879,scaleY:0.1657,rotation:3.5015,alpha:0.8306},0).wait(1).to({scaleX:0.1745,scaleY:0.1562,rotation:3.4802,alpha:0.7022},0).wait(1).to({scaleX:0.1574,scaleY:0.144,rotation:3.453,alpha:0.5379},0).wait(1).to({scaleX:0.1365,scaleY:0.1292,rotation:3.4198,alpha:0.3377},0).wait(1).to({regX:0.9,regY:-0.1,scaleX:0.1118,scaleY:0.1118,rotation:3.3807,x:438.05,y:263.45,alpha:0.1016},0).to({_off:true},1).wait(5));
    
        // glitter コピー 7
        this.instance_6 = new lib.kira_1();
        this.instance_6.parent = this;
        this.instance_6.setTransform(397.7,340.25,0.0608,0.0608,2.1269,0,0,3.3,0.7);
        this.instance_6.alpha = 0.1992;
        this.instance_6._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({_off:false},0).wait(1).to({regX:0.2,regY:-0.2,scaleX:0.1046,scaleY:0.1046,rotation:2.1926,x:397.35,y:340.15,alpha:0.4402},0).wait(1).to({scaleX:0.1359,scaleY:0.1359,rotation:2.2394,x:397.3,y:340.05,alpha:0.6123},0).wait(1).to({scaleX:0.1547,scaleY:0.1547,rotation:2.2676,x:397.2,alpha:0.7156},0).wait(1).to({regX:1.2,regY:-0.4,scaleX:0.1609,scaleY:0.1609,rotation:2.2769,x:397.7,y:340.25,alpha:0.75},0).wait(1).to({regX:0.2,regY:-0.2,scaleX:0.1594,scaleY:0.1594,rotation:2.2738,x:397.55,y:340.2,alpha:0.7352},0).wait(1).to({scaleX:0.1552,scaleY:0.1552,rotation:2.2652,alpha:0.6944},0).wait(1).to({scaleX:0.1482,scaleY:0.1482,rotation:2.2512,alpha:0.6277},0).wait(1).to({scaleX:0.1386,scaleY:0.1386,rotation:2.2317,alpha:0.5351},0).wait(1).to({scaleX:0.1263,scaleY:0.1263,rotation:2.2067,alpha:0.4165},0).wait(1).to({scaleX:0.1113,scaleY:0.1113,rotation:2.1763,y:340.25,alpha:0.272},0).wait(1).to({regX:1.5,regY:-2.2,scaleX:0.0936,scaleY:0.0936,rotation:2.1405,x:397.7,alpha:0.1016},0).to({_off:true},1).wait(6).to({_off:false,regX:3.3,regY:0.7,scaleX:0.0608,scaleY:0.0608,rotation:2.1269,alpha:0.1992},0).wait(1).to({regX:0.2,regY:-0.2,scaleX:0.1046,scaleY:0.1046,rotation:2.1926,x:397.35,y:340.15,alpha:0.4402},0).wait(1).to({scaleX:0.1359,scaleY:0.1359,rotation:2.2394,x:397.3,y:340.05,alpha:0.6123},0).wait(1).to({scaleX:0.1547,scaleY:0.1547,rotation:2.2676,x:397.2,alpha:0.7156},0).wait(1).to({regX:1.2,regY:-0.4,scaleX:0.1609,scaleY:0.1609,rotation:2.2769,x:397.7,y:340.25,alpha:0.75},0).wait(1).to({regX:0.2,regY:-0.2,scaleX:0.1594,scaleY:0.1594,rotation:2.2738,x:397.55,y:340.2,alpha:0.7352},0).wait(1).to({scaleX:0.1552,scaleY:0.1552,rotation:2.2652,alpha:0.6944},0).wait(1).to({scaleX:0.1482,scaleY:0.1482,rotation:2.2512,alpha:0.6277},0).wait(1).to({scaleX:0.1386,scaleY:0.1386,rotation:2.2317,alpha:0.5351},0).wait(1).to({scaleX:0.1263,scaleY:0.1263,rotation:2.2067,alpha:0.4165},0).wait(1).to({scaleX:0.1113,scaleY:0.1113,rotation:2.1763,y:340.25,alpha:0.272},0).wait(1).to({regX:1.5,regY:-2.2,scaleX:0.0936,scaleY:0.0936,rotation:2.1405,x:397.7,alpha:0.1016},0).to({_off:true},1).wait(9));
    
        // glitter コピー 6
        this.instance_7 = new lib.kira_1();
        this.instance_7.parent = this;
        this.instance_7.setTransform(428.35,311.35,0.0869,0.0706,3.2341,0,0,0.6,0.7);
        this.instance_7.alpha = 0.1992;
        this.instance_7._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(3).to({_off:false},0).wait(1).to({regX:0.2,regY:-0.2,scaleX:0.1389,scaleY:0.112,rotation:3.2381,x:428.3,y:311.25,alpha:0.5496},0).wait(1).to({scaleX:0.176,scaleY:0.1417,rotation:3.2409,x:428.25,y:311.2,alpha:0.7998},0).wait(1).to({scaleX:0.1982,scaleY:0.1594,rotation:3.2426,y:311.15,alpha:0.95},0).wait(1).to({regY:0.3,scaleX:0.2056,scaleY:0.1653,rotation:3.2432,x:428.35,y:311.35,alpha:1},0).wait(1).to({regY:-0.2,scaleX:0.2034,scaleY:0.164,rotation:3.2431,y:311.25,alpha:0.9795},0).wait(1).to({scaleX:0.1973,scaleY:0.1605,rotation:3.2429,alpha:0.923},0).wait(1).to({scaleX:0.1873,scaleY:0.1546,rotation:3.2425,alpha:0.8306},0).wait(1).to({scaleX:0.1735,scaleY:0.1465,rotation:3.242,alpha:0.7022},0).wait(1).to({scaleX:0.1557,scaleY:0.1361,rotation:3.2414,alpha:0.5379},0).wait(1).to({scaleX:0.1341,scaleY:0.1235,rotation:3.2406,y:311.3,alpha:0.3377},0).wait(1).to({regX:1.8,regY:-0.6,scaleX:0.1086,scaleY:0.1085,rotation:3.2397,y:311.35,alpha:0.1016},0).to({_off:true},1).wait(6).to({_off:false,regX:0.6,regY:0.7,scaleX:0.0869,scaleY:0.0706,rotation:3.2341,alpha:0.1992},0).wait(1).to({regX:0.2,regY:-0.2,scaleX:0.1389,scaleY:0.112,rotation:3.2381,x:428.3,y:311.25,alpha:0.5496},0).wait(1).to({scaleX:0.176,scaleY:0.1417,rotation:3.2409,x:428.25,y:311.2,alpha:0.7998},0).wait(1).to({scaleX:0.1982,scaleY:0.1594,rotation:3.2426,y:311.15,alpha:0.95},0).wait(1).to({regY:0.3,scaleX:0.2056,scaleY:0.1653,rotation:3.2432,x:428.35,y:311.35,alpha:1},0).wait(1).to({regY:-0.2,scaleX:0.2034,scaleY:0.164,rotation:3.2431,y:311.25,alpha:0.9795},0).wait(1).to({scaleX:0.1973,scaleY:0.1605,rotation:3.2429,alpha:0.923},0).wait(1).to({scaleX:0.1873,scaleY:0.1546,rotation:3.2425,alpha:0.8306},0).wait(1).to({scaleX:0.1735,scaleY:0.1465,rotation:3.242,alpha:0.7022},0).wait(1).to({scaleX:0.1557,scaleY:0.1361,rotation:3.2414,alpha:0.5379},0).wait(1).to({scaleX:0.1341,scaleY:0.1235,rotation:3.2406,y:311.3,alpha:0.3377},0).wait(1).to({regX:1.8,regY:-0.6,scaleX:0.1086,scaleY:0.1085,rotation:3.2397,y:311.35,alpha:0.1016},0).to({_off:true},1).wait(10));
    
        // glitter コピー 5
        this.instance_8 = new lib.kira_1();
        this.instance_8.parent = this;
        this.instance_8.setTransform(491.95,297.7,0.0604,0.0604,4.1867,0,0,1,1.6);
        this.instance_8.alpha = 0.1992;
        this.instance_8._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(6).to({_off:false},0).wait(1).to({regX:0.2,regY:-0.2,scaleX:0.1038,scaleY:0.1038,rotation:4.1198,x:491.85,y:297.5,alpha:0.418},0).wait(1).to({scaleX:0.1348,scaleY:0.1348,rotation:4.072,y:297.4,alpha:0.5742},0).wait(1).to({scaleX:0.1535,scaleY:0.1535,rotation:4.0433,y:297.35,alpha:0.668},0).wait(1).to({regX:0.6,regY:-0.1,scaleX:0.1597,scaleY:0.1597,rotation:4.0337,x:491.95,y:297.7,alpha:0.6992},0).wait(1).to({regX:0.2,regY:-0.2,scaleX:0.1581,scaleY:0.1581,rotation:4.037,x:491.9,y:297.65,alpha:0.6856},0).wait(1).to({scaleX:0.1539,scaleY:0.1539,rotation:4.0458,alpha:0.648},0).wait(1).to({scaleX:0.1471,scaleY:0.1471,rotation:4.0603,alpha:0.5865},0).wait(1).to({scaleX:0.1375,scaleY:0.1375,rotation:4.0805,alpha:0.5011},0).wait(1).to({scaleX:0.1253,scaleY:0.1253,rotation:4.1063,x:491.85,y:297.7,alpha:0.3919},0).wait(1).to({scaleX:0.1104,scaleY:0.1104,rotation:4.1377,alpha:0.2587},0).wait(1).to({regX:1.6,regY:-0.1,scaleX:0.0929,scaleY:0.0929,rotation:4.1748,x:491.95,alpha:0.1016},0).to({_off:true},1).wait(6).to({_off:false,regX:1,regY:1.6,scaleX:0.0604,scaleY:0.0604,rotation:4.1867,alpha:0.1992},0).wait(1).to({regX:0.2,regY:-0.2,scaleX:0.1038,scaleY:0.1038,rotation:4.1198,x:491.85,y:297.5,alpha:0.418},0).wait(1).to({scaleX:0.1348,scaleY:0.1348,rotation:4.072,y:297.4,alpha:0.5742},0).wait(1).to({scaleX:0.1535,scaleY:0.1535,rotation:4.0433,y:297.35,alpha:0.668},0).wait(1).to({regX:0.6,regY:-0.1,scaleX:0.1597,scaleY:0.1597,rotation:4.0337,x:491.95,y:297.7,alpha:0.6992},0).wait(1).to({regX:0.2,regY:-0.2,scaleX:0.1581,scaleY:0.1581,rotation:4.037,x:491.9,y:297.65,alpha:0.6856},0).wait(1).to({scaleX:0.1539,scaleY:0.1539,rotation:4.0458,alpha:0.648},0).wait(1).to({scaleX:0.1471,scaleY:0.1471,rotation:4.0603,alpha:0.5865},0).wait(1).to({scaleX:0.1375,scaleY:0.1375,rotation:4.0805,alpha:0.5011},0).wait(1).to({scaleX:0.1253,scaleY:0.1253,rotation:4.1063,x:491.85,y:297.7,alpha:0.3919},0).wait(1).to({scaleX:0.1104,scaleY:0.1104,rotation:4.1377,alpha:0.2587},0).wait(1).to({regX:1.6,regY:-0.1,scaleX:0.0929,scaleY:0.0929,rotation:4.1748,x:491.95,alpha:0.1016},0).to({_off:true},1).wait(7));
    
        // glitter コピー 4
        this.instance_9 = new lib.kira_1();
        this.instance_9.parent = this;
        this.instance_9.setTransform(467,344.15,0.0778,0.0778,1.4938,0,0,1.3,-0.1);
        this.instance_9.alpha = 0.1992;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:0.2,regY:-0.2,scaleX:0.1337,scaleY:0.1337,rotation:1.4952,x:466.9,y:344.1,alpha:0.5496},0).wait(1).to({scaleX:0.1737,scaleY:0.1737,rotation:1.4962,x:466.85,alpha:0.7998},0).wait(1).to({scaleX:0.1976,scaleY:0.1976,rotation:1.4967,x:466.8,alpha:0.95},0).wait(1).to({regX:0.5,scaleX:0.2056,scaleY:0.2056,rotation:1.4969,x:467.05,y:344.15,alpha:1},0).wait(1).to({regX:0.2,scaleX:0.2037,scaleY:0.2037,rotation:1.4968,x:466.95,y:344.1,alpha:0.9795},0).wait(1).to({scaleX:0.1982,scaleY:0.1982,rotation:1.4964,alpha:0.923},0).wait(1).to({scaleX:0.1894,scaleY:0.1894,rotation:1.4957,alpha:0.8306},0).wait(1).to({scaleX:0.1771,scaleY:0.1771,rotation:1.4948,alpha:0.7022},0).wait(1).to({scaleX:0.1614,scaleY:0.1614,rotation:1.4936,alpha:0.5379},0).wait(1).to({scaleX:0.1423,scaleY:0.1423,rotation:1.4922,alpha:0.3377},0).wait(1).to({regX:0,regY:-0.8,scaleX:0.1197,scaleY:0.1197,rotation:1.4905,x:467,y:344.15,alpha:0.1016},0).to({_off:true},1).wait(6).to({_off:false,regX:1.3,regY:-0.1,scaleX:0.0778,scaleY:0.0778,rotation:1.4938,alpha:0.1992},0).wait(1).to({regX:0.2,regY:-0.2,scaleX:0.1337,scaleY:0.1337,rotation:1.4952,x:466.9,y:344.1,alpha:0.5496},0).wait(1).to({scaleX:0.1737,scaleY:0.1737,rotation:1.4962,x:466.85,alpha:0.7998},0).wait(1).to({scaleX:0.1976,scaleY:0.1976,rotation:1.4967,x:466.8,alpha:0.95},0).wait(1).to({regX:0.5,scaleX:0.2056,scaleY:0.2056,rotation:1.4969,x:467.05,y:344.15,alpha:1},0).wait(1).to({regX:0.2,scaleX:0.2037,scaleY:0.2037,rotation:1.4968,x:466.95,y:344.1,alpha:0.9795},0).wait(1).to({scaleX:0.1982,scaleY:0.1982,rotation:1.4964,alpha:0.923},0).wait(1).to({scaleX:0.1894,scaleY:0.1894,rotation:1.4957,alpha:0.8306},0).wait(1).to({scaleX:0.1771,scaleY:0.1771,rotation:1.4948,alpha:0.7022},0).wait(1).to({scaleX:0.1614,scaleY:0.1614,rotation:1.4936,alpha:0.5379},0).wait(1).to({scaleX:0.1423,scaleY:0.1423,rotation:1.4922,alpha:0.3377},0).wait(1).to({regX:0,regY:-0.8,scaleX:0.1197,scaleY:0.1197,rotation:1.4905,x:467,y:344.15,alpha:0.1016},0).to({_off:true},1).wait(13));
    
        // bg_image
        this.instance_10 = new lib.bg2();
        this.instance_10.parent = this;
        this.instance_10.setTransform(0,0,0.5,0.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(43));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,580,698);
    
    
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
        this.shape.graphics.f("#000000").s().p("AgKBMIAAgKIg9AAIAAgOIA9AAIAAgFIg1AAIAAgMIA1AAIAAgEIgvAAIAAgMIAvAAIAAgFIg/AAIAAgNIA/AAIAAgDIgrAAIAAgIIgCAFIgEAFIgRgMQAFgFACgHQABgGAAgHIAAgLIBBAAIAAAbIAIAAIgFgMIAMgBIALgCIgEgDIgDgCIgFAEIgDACIgKgPQAFgDAEgEIAHgIIAEgHIABgDIASACIgDAGIAnAAIAAAQIgFAAIgGAJIgHAHIALAEIALACIgKARIgPgGIgMgGIgQAFIgOACIAAADIAwAAIAAAPIAQAAIAAANIgQAAIAAARIgwAAIAAAEIA0AAIAAAMIg0AAIAAAFIA+AAIAAAOIg+AAIAAAKgAAKATIAbAAIAAgFIgbAAgAAKABIAbAAIAAgDIgbAAgAgzgQIAAACIApAAIAAgFIgoAAIgBADgAgxgiIAAAEIAaAAIAAgGIgaAAIAAACgAAhguIAGAEIAFgEIADgEIACgBIgWAAIAGAFgAhHg1IAAgQIBHAAIAAAQg");
        this.shape.setTransform(24.025,11.725);
    
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
        this.instance_3.setTransform(224.75,123.45,0.159,0.159,0,0,0,-1.2,2.9);
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
            this.face_blink_ary = [1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1]; 
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
        var mask_graphics_15 = new cjs.Graphics().p("ApWEMIABgzIALhlIB5i4QCmglADABIDLAbIBUiEIBJgxIBOgZIBXgFIB6AGIBaAQIA1AbIBUAgIAVAgIgKAsIgsA0IgsAjIhfAQIjaAwIj4AgIgvAwIggAzIhiAwIgoAbIgkARIhYAfIh4APg");
        var mask_graphics_21 = new cjs.Graphics().p("AjFBuIhLhTIAEgiQADgjABABIATh2ICVgHIBJATICJBEIB6AeIAlgEQgWA4ABBQQAAAgABAaIhEgGIi5Agg");
    
        this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(15).to({graphics:mask_graphics_15,x:72.025,y:51.325}).wait(6).to({graphics:mask_graphics_21,x:31.25,y:41.8}).wait(6));
    
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
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).wait(1).to({alpha:1},0).wait(1).to({regX:70,regY:60,x:70,y:60,alpha:0.3015},0).wait(1).to({alpha:0.0922},0).wait(1).to({regX:35,regY:30,x:35,y:30,alpha:0},0).wait(2).to({alpha:0.1992},0).wait(1).to({alpha:1},0).wait(1).to({regX:70,regY:60,x:70,y:60,alpha:0.3015},0).wait(1).to({alpha:0.0922},0).wait(1).to({regX:35,regY:30,x:35,y:30,alpha:0},0).wait(2));
    
        // f2
        this.f2 = new lib.character1_face();
        this.f2.name = "f2";
        this.f2.parent = this;
        this.f2.setTransform(35,30,1,1,0,0,0,35,30);
    
        this.timeline.addTween(cjs.Tween.get(this.f2).wait(5).to({alpha:0.1992},0).wait(1).to({regX:70,regY:60,x:70,y:60,alpha:0.6441},0).wait(1).to({alpha:0.911},0).wait(1).to({regX:35,regY:30,x:35,y:30,alpha:1},0).wait(19));
    
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
    
        this.timeline.addTween(cjs.Tween.get(this.f1_alpha).wait(5).to({alpha:0.8008},0).wait(1).to({regX:70,regY:60,x:70,y:60,alpha:0.7118},0).wait(1).to({alpha:0.4449},0).wait(1).to({regX:35,regY:30,x:35,y:30,alpha:0},0).wait(19));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-216,-218,580,698);
    
    
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
        this.f.setTransform(-191.1,-299.2);
    
        this.timeline.addTween(cjs.Tween.get(this.f).to({_off:true},1).wait(1));
    
        // base
        this.b = new lib.character1_base();
        this.b.name = "b";
        this.b.parent = this;
        this.b.setTransform(-287.1,-121.2);
    
        this.timeline.addTween(cjs.Tween.get(this.b).wait(2));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-407.1,-517.2,717.3,698);
    
    
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
    
    
    (lib.character1_container = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{standby:0,jump:8,jump2:16,jump_double:25,jump_flower:37,jump_flower2:47,nod:57,nod2:66,nod_double:81,swing:92,swing_on:112,swing_off:121,notice:132,notice_jump:146,laugh:160,chord:181,question:201,question_on:229,question_off:241,exclamation:252,down:268,down2:295,shy_jump:313,shy_down:325,shock:343,sigh:350,happy:369,anger:384,anger2:404,damage:416,concent:433});
    
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
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(1).call(this.frame_8).wait(7).call(this.frame_15).wait(1).call(this.frame_16).wait(8).call(this.frame_24).wait(1).call(this.frame_25).wait(11).call(this.frame_36).wait(1).call(this.frame_37).wait(9).call(this.frame_46).wait(1).call(this.frame_47).wait(9).call(this.frame_56).wait(1).call(this.frame_57).wait(8).call(this.frame_65).wait(1).call(this.frame_66).wait(14).call(this.frame_80).wait(1).call(this.frame_81).wait(10).call(this.frame_91).wait(1).call(this.frame_92).wait(19).call(this.frame_111).wait(1).call(this.frame_112).wait(8).call(this.frame_120).wait(1).call(this.frame_121).wait(10).call(this.frame_131).wait(1).call(this.frame_132).wait(13).call(this.frame_145).wait(1).call(this.frame_146).wait(13).call(this.frame_159).wait(1).call(this.frame_160).wait(20).call(this.frame_180).wait(1).call(this.frame_181).wait(19).call(this.frame_200).wait(1).call(this.frame_201).wait(27).call(this.frame_228).wait(1).call(this.frame_229).wait(11).call(this.frame_240).wait(1).call(this.frame_241).wait(10).call(this.frame_251).wait(1).call(this.frame_252).wait(15).call(this.frame_267).wait(1).call(this.frame_268).wait(26).call(this.frame_294).wait(1).call(this.frame_295).wait(17).call(this.frame_312).wait(1).call(this.frame_313).wait(11).call(this.frame_324).wait(1).call(this.frame_325).wait(17).call(this.frame_342).wait(1).call(this.frame_343).wait(6).call(this.frame_349).wait(1).call(this.frame_350).wait(18).call(this.frame_368).wait(1).call(this.frame_369).wait(14).call(this.frame_383).wait(1).call(this.frame_384).wait(19).call(this.frame_403).wait(1).call(this.frame_404).wait(11).call(this.frame_415).wait(1).call(this.frame_416).wait(16).call(this.frame_432).wait(1).call(this.frame_433).wait(8).call(this.frame_441).wait(1));
    
        // effect2
        this.instance = new lib.drop1_v2("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(-172.45,-340.75,1.1645,1.1645);
        this.instance._off = true;
    
        this.instance_1 = new lib.heart();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-183.15,-289.85,0.4532,0.4532);
        this.instance_1.alpha = 0;
        this.instance_1.compositeOperation = "lighter";
        this.instance_1._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(313).to({_off:false},0).wait(1).to({regX:1.2,regY:1.8,rotation:-33.7496,x:-198.05,y:-349.75,alpha:0.4141},0).wait(1).to({regX:0,regY:0,rotation:-44.9995,x:-209.7,y:-354.05,alpha:0.2188},0).to({_off:true},1).wait(1).to({_off:false,rotation:0,x:-172.45,y:-340.75,alpha:1},0).wait(1).to({regX:1.2,regY:1.8,rotation:-33.7496,x:-198.05,y:-349.75,alpha:0.4141},0).wait(1).to({regX:0,regY:0,rotation:-44.9995,x:-209.7,y:-354.05,alpha:0.2188},0).to({_off:true},1).wait(5).to({_off:false,rotation:0,x:-172.45,y:-340.75,alpha:1},0).wait(1).to({regX:1.2,regY:1.8,rotation:-33.7496,x:-198.05,y:-349.75,alpha:0.4141},0).wait(1).to({regX:0,regY:0,rotation:-44.9995,x:-209.7,y:-354.05,alpha:0.2188},0).to({_off:true},1).wait(1).to({_off:false,rotation:0,x:-172.45,y:-340.75,alpha:1},0).wait(1).to({regX:1.2,regY:1.8,rotation:-33.7496,x:-198.05,y:-349.75,alpha:0.4141},0).wait(1).to({regX:0,regY:0,rotation:-44.9995,x:-209.7,y:-354.05,alpha:0.2188},0).to({_off:true},1).wait(110));
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(370).to({_off:false},0).wait(1).to({regX:2.3,regY:1,scaleX:0.8633,scaleY:0.8633,x:-184.9,y:-304,alpha:0.375},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-188.15,y:-309.85,alpha:0.5},0).wait(1).to({regX:2.3,regY:1,scaleX:0.9896,scaleY:0.9896,x:-185.6,y:-307.7,alpha:0.4444},0).wait(1).to({scaleX:0.9586,scaleY:0.9586,x:-185.05,y:-304.45,alpha:0.2778},0).wait(1).to({regX:0,regY:0,scaleX:0.9068,scaleY:0.9068,x:-186.15,y:-299.85,alpha:0},0).to({_off:true},1).wait(66));
    
        // effect
        this.instance_2 = new lib.spread_flower_pink("synched",0,false);
        this.instance_2.parent = this;
        this.instance_2.setTransform(-118.3,-246.6,1.4808,1.4808);
    
        this.instance_3 = new lib.good_effect("synched",0,false);
        this.instance_3.parent = this;
        this.instance_3.setTransform(-118.3,-246.6,1.481,1.481);
    
        this.instance_4 = new lib.notice();
        this.instance_4.parent = this;
        this.instance_4.setTransform(-190,-336.65,1.187,1.187,0,-169.8305,10.1695,-29.1,20.4);
        this.instance_4._off = true;
    
        this.instance_5 = new lib.laugh("synched",0);
        this.instance_5.parent = this;
        this.instance_5.setTransform(-210.75,-331.25,1.4204,1.4204,35.8424,0,0,-30.2,20.6);
        this.instance_5._off = true;
    
        this.instance_6 = new lib.chord("synched",0,false);
        this.instance_6.parent = this;
        this.instance_6.setTransform(-183.1,-249,1.0029,1.0029,-61.4995,0,0,-23.4,76.9);
    
        this.instance_7 = new lib.question();
        this.instance_7.parent = this;
        this.instance_7.setTransform(-183.75,-333.6,1.053,1.053,-28.4906);
        this.instance_7.alpha = 0;
        this.instance_7._off = true;
    
        this.instance_8 = new lib.mc_exclamation("synched",0,false);
        this.instance_8.parent = this;
        this.instance_8.setTransform(-186,-348.3,1.0929,1.0929,-29.9996,0,0,0,0.1);
    
        this.instance_9 = new lib.drop1a("synched",0);
        this.instance_9.parent = this;
        this.instance_9.setTransform(-180.5,-329.7,1,1,0,0,0,-0.5,0.2);
        this.instance_9._off = true;
    
        this.instance_10 = new lib.drop2_v2("synched",0);
        this.instance_10.parent = this;
        this.instance_10.setTransform(-174.25,-331,0.9876,0.9876,14.9998);
        this.instance_10._off = true;
    
        this.instance_11 = new lib.shock("synched",0);
        this.instance_11.parent = this;
        this.instance_11.setTransform(-183.85,-334.65,1.3878,1.3878,-121.2396);
    
        this.instance_12 = new lib.sigh("synched",0);
        this.instance_12.parent = this;
        this.instance_12.setTransform(-161.35,-180.25);
        this.instance_12.alpha = 0.6016;
        this.instance_12._off = true;
    
        this.instance_13 = new lib.heart("synched",0);
        this.instance_13.parent = this;
        this.instance_13.setTransform(-183.15,-289.85,0.4532,0.4532);
        this.instance_13._off = true;
    
        this.instance_14 = new lib.angry("synched",0);
        this.instance_14.parent = this;
        this.instance_14.setTransform(-45.2,-309.95,0.5276,0.5276);
        this.instance_14._off = true;
    
        this.instance_15 = new lib.mc_punpun();
        this.instance_15.parent = this;
        this.instance_15.setTransform(-176.25,-359.1,1.1377,1.1377);
    
        this.instance_16 = new lib.concent_wrapper("synched",0,false);
        this.instance_16.parent = this;
        this.instance_16.setTransform(-118.55,-247.15,1,1,0,0,0,-0.5,-0.1);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},37).to({state:[{t:this.instance_3}]},10).to({state:[]},10).to({state:[{t:this.instance_4}]},76).to({state:[]},2).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).to({state:[{t:this.instance_4}]},2).to({state:[]},2).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},15).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).to({state:[{t:this.instance_6}]},1).to({state:[]},20).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_7}]},7).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[]},1).to({state:[{t:this.instance_7}]},6).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[]},1).to({state:[{t:this.instance_8}]},5).to({state:[{t:this.instance_9}]},16).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},9).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[]},1).to({state:[{t:this.instance_10}]},24).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[]},1).to({state:[{t:this.instance_10}]},5).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[]},1).to({state:[{t:this.instance_11}]},11).to({state:[]},1).to({state:[{t:this.instance_11}]},1).to({state:[]},1).to({state:[{t:this.instance_11}]},1).to({state:[]},1).to({state:[{t:this.instance_12}]},3).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[]},1).to({state:[{t:this.instance_13}]},11).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[]},1).to({state:[{t:this.instance_14}]},6).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},5).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[]},1).to({state:[{t:this.instance_15}]},2).to({state:[]},12).to({state:[{t:this.instance_16}]},17).wait(9));
        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(133).to({_off:false},0).to({_off:true},2).wait(1).to({_off:false},0).wait(3).to({regX:-28.8,regY:20.5,x:-189.6,alpha:0.6944},0).wait(1).to({alpha:0.4444},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.1111},0).wait(1).to({alpha:0.0278},0).wait(1).to({regX:-29.1,regY:20.4,x:-190,alpha:0},0).to({_off:true},1).wait(2).to({_off:false,alpha:1},0).to({_off:true},2).wait(1).to({_off:false},0).wait(3).to({regX:-28.8,regY:20.5,x:-189.6,alpha:0.6944},0).wait(1).to({alpha:0.4444},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.1111},0).wait(1).to({alpha:0.0278},0).wait(1).to({regX:-29.1,regY:20.4,x:-190,alpha:0},0).to({_off:true},1).wait(283));
        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(160).to({_off:false},0).wait(15).to({startPosition:0},0).wait(1).to({regX:-31.4,regY:22.1,scaleX:1.4203,scaleY:1.4203,x:-213.4,y:-330.5,alpha:0.5625,startPosition:1},0).wait(1).to({alpha:0.25,startPosition:2},0).wait(1).to({alpha:0.0625,startPosition:3},0).wait(1).to({regX:-30.2,regY:20.6,scaleX:1.4204,scaleY:1.4204,x:-210.75,y:-331.25,alpha:0,startPosition:19},0).to({_off:true},1).wait(262));
        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(202).to({_off:false},0).wait(1).to({regX:-0.2,regY:0.2,x:-190.7,y:-347,alpha:0.5556},0).wait(1).to({x:-194.8,y:-355.25,alpha:0.8889},0).wait(1).to({regX:0,regY:0,x:-196.1,y:-358.3,alpha:1},0).wait(1).to({regX:-0.2,regY:0.2,x:-195.85,y:-357.35},0).wait(1).to({x:-194.85,y:-355.5},0).wait(1).to({x:-193.15,y:-352.35},0).wait(1).to({regX:0,regY:0,x:-190.7,y:-348.3},0).to({x:-191.45,y:-349.65},2).wait(8).to({regX:-0.2,regY:0.2,x:-191.2,y:-348.75,alpha:0.9298},0).wait(1).to({x:-190.15,y:-346.8,alpha:0.692},0).wait(1).to({x:-188.55,y:-343.9,alpha:0.339},0).wait(1).to({x:-187.4,y:-341.75,alpha:0.0788},0).wait(1).to({regX:0,regY:0,x:-186.95,y:-341.45,alpha:0},0).to({_off:true},1).wait(6).to({_off:false,x:-184.2,y:-333.2},0).wait(1).to({regX:-0.2,regY:0.2,x:-191.15,y:-346.6,alpha:0.5556},0).wait(1).to({x:-195.25,y:-354.85,alpha:0.8889},0).wait(1).to({regX:0,regY:0,x:-196.55,y:-357.9,alpha:1},0).wait(1).to({regX:-0.2,regY:0.2,x:-196.3,y:-356.95},0).wait(1).to({x:-195.3,y:-355.1},0).wait(1).to({x:-193.6,y:-351.95},0).wait(1).to({regX:0,regY:0,x:-191.15,y:-347.9},0).to({x:-191.9,y:-349.25},2).wait(3).to({regX:-0.2,regY:0.2,x:-191.65,y:-348.35,alpha:0.9298},0).wait(1).to({x:-190.6,y:-346.4,alpha:0.692},0).wait(1).to({x:-189,y:-343.5,alpha:0.339},0).wait(1).to({x:-187.85,y:-341.35,alpha:0.0788},0).wait(1).to({regX:0,regY:0,x:-187.4,y:-341.05,alpha:0},0).to({_off:true},1).wait(195));
        this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(268).to({_off:false},0).wait(1).to({regX:0.5,regY:-0.6,x:-179.5,y:-326},0).wait(1).to({y:-322.15},0).wait(1).to({y:-318.9},0).wait(1).to({y:-316.25},0).wait(1).to({y:-314.15},0).wait(1).to({y:-312.65},0).wait(1).to({y:-311.75},0).wait(1).to({regX:-0.5,regY:0.2,x:-180.5,y:-310.7},0).wait(9).to({startPosition:0},0).wait(1).to({regX:0.5,regY:-0.6,x:-179.5,y:-311.5,alpha:0.4444},0).wait(1).to({alpha:0.1111},0).wait(1).to({regX:-0.5,regY:0.2,x:-180.5,y:-310.7,alpha:0},0).to({_off:true},1).wait(153));
        this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(313).to({_off:false},0).wait(1).to({scaleX:1.1203,scaleY:1.1203,rotation:-18.7494,x:-205.675,y:-326.3875,alpha:0.4141},0).wait(1).to({scaleX:1.1645,scaleY:1.1645,rotation:-29.9991,x:-216.15,y:-324.85,alpha:0.2188},0).to({_off:true},1).wait(1).to({_off:false,scaleX:0.9876,scaleY:0.9876,rotation:14.9998,x:-174.25,y:-331,alpha:1},0).wait(1).to({scaleX:1.1203,scaleY:1.1203,rotation:-18.7494,x:-205.675,y:-330.775,alpha:0.4141},0).wait(1).to({scaleX:1.1645,scaleY:1.1645,rotation:-29.9991,x:-216.15,y:-330.7,alpha:0.2188},0).to({_off:true},1).wait(5).to({_off:false,scaleX:0.9876,scaleY:0.9876,rotation:14.9998,x:-174.25,y:-331,alpha:1},0).wait(1).to({scaleX:1.1203,scaleY:1.1203,rotation:-18.7494,x:-205.675,y:-326.3875,alpha:0.4141},0).wait(1).to({scaleX:1.1645,scaleY:1.1645,rotation:-29.9991,x:-216.15,y:-324.85,alpha:0.2188},0).to({_off:true},1).wait(1).to({_off:false,scaleX:0.9876,scaleY:0.9876,rotation:14.9998,x:-174.25,y:-331,alpha:1},0).wait(1).to({scaleX:1.1203,scaleY:1.1203,rotation:-18.7494,x:-205.675,y:-330.775,alpha:0.4141},0).wait(1).to({scaleX:1.1645,scaleY:1.1645,rotation:-29.9991,x:-216.15,y:-330.7,alpha:0.2188},0).to({_off:true},1).wait(110));
        this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(351).to({_off:false},0).wait(1).to({x:-162.35,y:-179.25,alpha:1},0).wait(1).to({regX:0.9,x:-162.45,y:-178.3,alpha:0.8965},0).wait(1).to({x:-163.8,y:-177.1,alpha:0.7636},0).wait(1).to({x:-165.4,y:-175.65,alpha:0.6048},0).wait(1).to({x:-167.2,y:-174.05,alpha:0.4229},0).wait(1).to({x:-169.2,y:-172.2,alpha:0.2205},0).wait(1).to({regX:0,x:-172.35,y:-170.25,alpha:0},0).to({_off:true},1).wait(83));
        this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(370).to({_off:false},0).wait(1).to({regX:2.3,regY:1,scaleX:0.8633,scaleY:0.8633,x:-184.9,y:-304},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-188.15,y:-309.85},0).wait(1).to({regX:2.3,regY:1,scaleX:0.9896,scaleY:0.9896,x:-185.6,y:-307.7},0).wait(1).to({scaleX:0.9586,scaleY:0.9586,x:-185.05,y:-304.45},0).wait(1).to({regX:0,regY:0,scaleX:0.9068,scaleY:0.9068,x:-186.15,y:-299.85},0).to({scaleX:1,scaleY:1,x:-187.15,y:-303.85},2).wait(3).to({scaleX:1.1165,scaleY:1.1165},0).wait(1).to({regX:2.3,regY:1,scaleX:0.8111,scaleY:0.8111,x:-184.55,y:-302.85,alpha:0.3262},0).wait(1).to({regX:0,regY:0,scaleX:0.7092,scaleY:0.7092,x:-186.15,y:-303.6,alpha:0.1016},0).to({_off:true},1).wait(59));
        this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(389).to({_off:false},0).wait(1).to({scaleX:1.0714,scaleY:1.0714,y:-313.7},0).wait(1).to({scaleX:1.2527,scaleY:1.2527,y:-314.95},0).wait(1).to({scaleX:0.9864,scaleY:0.9864},0).wait(1).to({scaleX:0.8976,scaleY:0.8976},0).wait(5).to({startPosition:0},0).wait(1).to({alpha:0.5009},0).wait(1).to({alpha:0.2014},0).wait(1).to({alpha:0.1016},0).to({_off:true},1).wait(40));
    
        // レイヤー_2
        this.instance_17 = new lib.mc_book1();
        this.instance_17.parent = this;
        this.instance_17.setTransform(-131.45,-105.25,1,1,0,0,0,114.5,68);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(442));
    
        // c
        this.c = new lib.character1_body();
        this.c.name = "c";
        this.c.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.c).wait(9).to({regX:-117.1,regY:-168.2,x:-117.1,y:-176.6},0).wait(1).to({regX:0,regY:0,x:0,y:-10},0).wait(1).to({regX:-117.1,regY:-168.2,x:-117.1,y:-177.4},0).wait(1).to({y:-174.65},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({y:1},0).wait(1).to({y:0},0).wait(1).to({y:2},0).wait(1).to({regX:-117.1,regY:-168.2,x:-117.1,y:-173.7},0).wait(1).to({regX:0,regY:0,x:0,y:-8},0).wait(1).to({regX:-117.1,regY:-168.2,x:-117.1,y:-173.95},0).wait(1).to({y:-167},0).wait(1).to({regX:0,regY:0,x:0,y:4},0).wait(1).to({regX:-117.1,regY:-168.2,x:-117.1,y:-164.95},0).wait(1).to({y:-167.35},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({y:2},0).wait(1).to({y:-7},0).wait(1).to({regX:-117.1,regY:-168.2,x:-117.1,y:-173.15},0).wait(1).to({y:-167.25},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({y:-7},0).wait(1).to({regX:-117.1,regY:-168.2,x:-117.1,y:-173.15},0).wait(1).to({y:-167.25},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({regX:-117.1,regY:-168.2,x:-117.1,y:-167.3},0).wait(1).to({y:-167.95},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({y:6},0).wait(1).to({regX:-117.1,regY:-168.2,x:-117.1,y:-177.2},0).wait(1).to({regX:0,regY:0,x:0,y:-14},0).wait(1).to({regX:-117.1,regY:-168.2,x:-117.1,y:-181.15},0).wait(1).to({y:-177.55},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({regX:-117.1,regY:-168.2,x:-117.1,y:-166.2},0).wait(1).to({regX:0,regY:0,x:0,y:-1},0).wait(1).to({regX:-117.1,regY:-168.2,x:-117.1,y:-168.45},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({y:6},0).wait(1).to({regX:-117.1,regY:-168.2,x:-117.1,y:-177.2},0).wait(1).to({regX:0,regY:0,x:0,y:-14},0).wait(1).to({regX:-117.1,regY:-168.2,x:-117.1,y:-181.15},0).wait(1).to({y:-177.55},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({regX:-117.1,regY:-168.2,x:-117.1,y:-166.2},0).wait(1).to({regX:0,regY:0,x:0,y:-1},0).wait(1).to({regX:-117.1,regY:-168.2,x:-117.1,y:-168.45},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:-117.1,regY:-168.2,x:-117.1,y:-167.6},0).wait(1).to({y:-165.2},0).wait(1).to({y:-162.85},0).wait(1).to({regX:0,regY:0,x:0,y:6},0).wait(1).to({regX:-117.1,regY:-168.2,x:-117.1,y:-162.85},0).wait(1).to({y:-165.2},0).wait(1).to({y:-167.6},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:-117.1,regY:-168.2,x:-117.1,y:-168.05},0).wait(1).to({y:-167.5},0).wait(1).to({y:-166.4},0).wait(1).to({y:-165.05},0).wait(1).to({y:-163.95},0).wait(1).to({y:-163.4},0).wait(1).to({regX:0,regY:0,x:0,y:5},0).wait(1).to({regX:-117.1,regY:-168.2,x:-117.1,y:-163.4},0).wait(1).to({y:-163.95},0).wait(1).to({y:-165.05},0).wait(1).to({y:-166.4},0).wait(1).to({y:-167.5},0).wait(1).to({y:-168.05},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({y:6},2).wait(1).to({regX:-117.1,regY:-168.2,x:-117.1,y:-163.45},0).wait(1).to({y:-167},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).to({y:6},2).wait(1).to({regX:-117.1,regY:-168.2,x:-117.1,y:-166},0).wait(1).to({y:-167.85},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:-117.1,regY:-168.2,rotation:-0.0253,x:-117.15,y:-168.1},0).wait(1).to({rotation:-0.1129,x:-117.35,y:-167.6},0).wait(1).to({rotation:-0.2845,x:-117.6,y:-166.7},0).wait(1).to({rotation:-0.5565,x:-118.05,y:-165.3},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-0.898,x:-118.6,y:-163.45},0).wait(1).to({rotation:-1.2075,x:-119.05,y:-161.85},0).wait(1).to({rotation:-1.4141,x:-119.4,y:-160.7},0).wait(1).to({rotation:-1.5201,x:-119.55,y:-160.1},0).wait(1).to({regX:0,regY:0,rotation:-1.5505,x:2,y:5},0).wait(1).to({regX:-117.1,regY:-168.2,rotation:-1.5305,x:-119.6,y:-160.05},0).wait(1).to({rotation:-1.4624,x:-119.5,y:-160.4},0).wait(1).to({rotation:-1.3309,x:-119.25,y:-161.2},0).wait(1).to({rotation:-1.121,x:-118.95,y:-162.3},0).wait(1).to({rotation:-0.8372,x:-118.5,y:-163.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.534,x:-118,y:-165.45},0).wait(1).to({rotation:-0.2881,x:-117.65,y:-166.75},0).wait(1).to({rotation:-0.1291,x:-117.4,y:-167.65},0).wait(1).to({rotation:-0.0467,x:-117.25,y:-168.05},0).wait(1).to({regX:0,regY:0,rotation:-0.0227,x:0,y:0},0).wait(1).to({rotation:0},0).wait(1).to({regX:-117.1,regY:-168.2,rotation:-0.0253,x:-117.15,y:-168.1},0).wait(1).to({rotation:-0.1129,x:-117.35,y:-167.6},0).wait(1).to({rotation:-0.2845,x:-117.6,y:-166.7},0).wait(1).to({rotation:-0.5565,x:-118.05,y:-165.3},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-0.898,x:-118.6,y:-163.45},0).wait(1).to({rotation:-1.2075,x:-119.05,y:-161.85},0).wait(1).to({rotation:-1.4141,x:-119.4,y:-160.7},0).wait(1).to({rotation:-1.5201,x:-119.55,y:-160.1},0).wait(1).to({regX:0,regY:0,rotation:-1.5505,x:2,y:5},0).wait(1).to({regX:-117.1,regY:-168.2,rotation:-1.5302,x:-119.6,y:-160.05},0).wait(1).to({rotation:-1.461,x:-119.5,y:-160.45},0).wait(1).to({rotation:-1.3276,x:-119.25,y:-161.2},0).wait(1).to({rotation:-1.1146,x:-118.9,y:-162.3},0).wait(1).to({rotation:-0.8266,x:-118.5,y:-163.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.5189,x:-117.95,y:-165.5},0).wait(1).to({rotation:-0.2693,x:-117.6,y:-166.8},0).wait(1).to({rotation:-0.1079,x:-117.3,y:-167.7},0).wait(1).to({rotation:-0.0243,x:-117.15,y:-168.1},0).wait(1).to({regX:0,regY:0,rotation:0,x:0,y:0},0).wait(16).to({regX:-117.1,regY:-168.2,x:-117.1,y:-173.75},0).wait(1).to({y:-175.65},0).wait(1).to({regX:0,regY:0,x:0,y:-8},0).wait(1).to({regX:-117.1,regY:-168.2,x:-117.1,y:-175.55},0).wait(1).to({y:-173.45},0).wait(1).to({regX:0,regY:0,x:0,y:2},0).wait(1).to({y:1},0).wait(1).to({y:0},0).wait(7).to({regX:-117.1,regY:-168.2,x:-117.1,y:-176.6},0).wait(1).to({regX:0,regY:0,x:0,y:-10},0).wait(1).to({regX:-117.1,regY:-168.2,x:-117.1,y:-177.4},0).wait(1).to({y:-174.65},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({y:1},0).wait(1).to({y:0},0).wait(15).to({regX:-117.1,regY:-168.2,x:-117.1,y:-168.1},0).wait(1).to({y:-167.7},0).wait(1).to({y:-166.9},0).wait(1).to({y:-165.7},0).wait(1).to({y:-164.55},0).wait(1).to({y:-163.75},0).wait(1).to({y:-163.35},0).wait(1).to({regX:0,regY:0,x:0,y:5},0).wait(1).to({regX:-117.1,regY:-168.2,x:-117.1,y:-163.35},0).wait(1).to({y:-163.75},0).wait(1).to({y:-164.55},0).wait(1).to({y:-165.7},0).wait(1).to({y:-166.9},0).wait(1).to({y:-167.7},0).wait(1).to({y:-168.1},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(5).to({regX:-117.1,regY:-168.2,rotation:-0.147,x:-117.4,y:-167.45},0).wait(1).to({rotation:-0.7239,x:-118.3,y:-164.4},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-1.3727,x:-119.35,y:-160.95},0).wait(1).to({regX:0,regY:0,rotation:-1.5505,x:2,y:5},0).wait(18).to({regX:-117.1,regY:-168.2,rotation:-1.4913,x:-119.55,y:-160.25},0).wait(1).to({rotation:-1.2701,x:-119.2,y:-161.5},0).wait(1).to({rotation:-0.8372,x:-118.5,y:-163.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.3606,x:-117.75,y:-166.35},0).wait(1).to({rotation:-0.094,x:-117.3,y:-167.8},0).wait(1).to({regX:0,regY:0,rotation:-0.0227,x:0,y:0},0).wait(1).to({rotation:0},0).wait(1).to({regX:-117.1,regY:-168.2,rotation:-0.0894,x:-117.25,y:-167.75},0).wait(1).to({rotation:-0.4358,x:-117.85,y:-165.9},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-1.0316,x:-118.8,y:-162.75},0).wait(1).to({rotation:-1.4426,x:-119.45,y:-160.55},0).wait(1).to({regX:0,regY:0,rotation:-1.5505,x:2,y:5},0).wait(8).to({regX:-117.1,regY:-168.2,rotation:-1.4913,x:-119.55,y:-160.25},0).wait(1).to({rotation:-1.2701,x:-119.2,y:-161.5},0).wait(1).to({rotation:-0.8372,x:-118.5,y:-163.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.3606,x:-117.75,y:-166.35},0).wait(1).to({rotation:-0.094,x:-117.3,y:-167.8},0).wait(1).to({regX:0,regY:0,rotation:-0.0227,x:0,y:0},0).wait(5).to({rotation:0},0).wait(1).to({regX:-117.1,regY:-168.2,x:-117.1,y:-176.6},0).wait(1).to({regX:0,regY:0,x:0,y:-10},0).wait(1).to({regX:-117.1,regY:-168.2,x:-117.1,y:-177.4},0).wait(1).to({y:-174.65},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({y:1},0).wait(1).to({y:0},0).wait(9).to({x:1,y:4},1,cjs.Ease.get(1)).wait(1).to({regX:-117.1,regY:-168.2,x:-119.85,y:-160.45},0).wait(1).to({regX:0,regY:0,x:-4,y:9},0).to({x:0,y:13},4).wait(11).to({regX:-117.1,regY:-168.2,x:-117.1,y:-155.95},0).wait(1).to({y:-158.9},0).wait(1).to({y:-163.85},0).wait(1).to({y:-167.3},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(5).to({y:-1},0).wait(1).to({regX:-117.1,regY:-168.2,x:-117.1,y:-167.2},0).wait(1).to({y:-161.25},0).wait(1).to({regX:0,regY:0,x:0,y:9},0).to({y:8},2).wait(1).to({y:9},0).wait(6).to({regX:-117.1,regY:-168.2,x:-117.1,y:-160.4},0).wait(1).to({y:-164.7},0).wait(1).to({y:-169},0).wait(1).to({regX:0,regY:0,x:0,y:-2},0).wait(1).to({regX:-117.1,regY:-168.2,x:-117.1,y:-168.7},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:-117.1,regY:-168.2,x:-117.1,y:-174.9},0).wait(1).to({regX:0,regY:0,x:0,y:-8},0).wait(1).to({regX:-117.1,regY:-168.2,x:-117.1,y:-175.05},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:-117.1,regY:-168.2,x:-117.1,y:-176.6},0).wait(1).to({regX:0,regY:0,x:0,y:-10},0).wait(1).to({regX:-117.1,regY:-168.2,x:-117.1,y:-177.4},0).wait(1).to({y:-174.65},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({y:1},0).wait(1).to({y:0},0).wait(1).to({x:1,y:4},1,cjs.Ease.get(1)).wait(1).to({regX:-117.1,regY:-168.2,x:-119.85,y:-160.45},0).wait(1).to({regX:0,regY:0,x:-4,y:9},0).to({x:0,y:13},4).wait(8).to({regX:-117.1,regY:-168.2,x:-117.1,y:-157.45},0).wait(1).to({y:-165.2},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({y:2},0).wait(1).to({regX:-117.1,regY:-168.2,x:-117.1,y:-169.2},0).wait(1).to({regX:0,regY:0,x:0,y:-2},0).wait(1).to({regX:-117.1,regY:-168.2,x:-117.1,y:-168.35},0).wait(1).to({regX:0,regY:0,x:0,y:2},0).wait(1).to({regX:-117.1,regY:-168.2,x:-117.1,y:-167.7},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:-117.1,regY:-168.2,x:-117.1,y:-167.6},0).wait(1).to({y:-165.2},0).wait(1).to({y:-162.85},0).wait(1).to({regX:0,regY:0,x:0,y:6},0).wait(1).to({regX:-117.1,regY:-168.2,x:-117.1,y:-162.8},0).wait(1).to({y:-163.1},0).wait(1).to({regX:0,regY:0,x:0,y:5},0).wait(5).to({regX:-117.1,regY:-168.2,x:-117.1,y:-163.6},0).wait(1).to({y:-165.1},0).wait(1).to({y:-167.35},0).wait(1).to({y:-168.8},0).wait(1).to({regX:0,regY:0,x:0,y:-1},0).wait(1).to({regX:-117.1,regY:-168.2,x:-117.1,y:-168.45},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({y:5},0).wait(1).to({regX:-117.1,regY:-168.2,x:-117.1,y:-175.8},0).wait(1).to({regX:0,regY:0,x:0,y:-10},0).wait(1).to({regX:-117.1,regY:-168.2,x:-117.1,y:-177.4},0).wait(1).to({y:-174.65},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({y:1},0).wait(1).to({y:0},0).wait(9).to({regX:-117.1,regY:-168.2,x:-117.1,y:-175.7},0).wait(1).to({regX:0,regY:0,x:0,y:-10},0).wait(2).to({regX:-117.1,regY:-168.2,x:-117.1,y:-176.2},0).wait(1).to({y:-170.2},0).wait(1).to({regX:0,regY:0,x:0,y:8},0).to({y:5},2).wait(7).to({regX:-117.1,regY:-168.2,x:-117.1,y:-163.55},0).wait(1).to({y:-164.75},0).wait(1).to({y:-166.7},0).wait(1).to({y:-167.9},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({y:2},0).wait(1).to({y:-7},0).wait(1).to({regX:-117.1,regY:-168.2,x:-117.1,y:-173.15},0).wait(1).to({y:-167.25},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({y:-7},0).wait(1).to({regX:-117.1,regY:-168.2,x:-117.1,y:-173.15},0).wait(1).to({y:-167.25},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({regX:-117.1,regY:-168.2,x:-117.1,y:-167.3},0).wait(1).to({y:-167.95},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:-117.1,regY:-168.2,x:-114.1,y:-164.8},0).wait(1).to({regX:0,regY:0,x:4,y:4.55},0).to({x:-2,y:8.8},2).wait(1).to({regX:-117.1,regY:-168.2,x:-117.95,y:-158.75},0).wait(1).to({x:-117.3,y:-158.35},0).wait(1).to({regX:0,regY:0,x:0,y:10},0).wait(5).to({regX:-117.1,regY:-168.2,x:-117.1,y:-158.9},0).wait(1).to({y:-161.35},0).wait(1).to({y:-165.05},0).wait(1).to({y:-167.55},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(10));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-524.4,-680.4,881,881.2);
    
    
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
    (lib._468_3 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{end0:14,scene1:15,end1:181,scene2:182,end2:392,scene3:393,end3:606,scene4:607,end4:857,scene5:858,end5:1061,scene6:1062,end6:1258,scene7:1259,end7:1454});
    
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
            exportRoot._g.m1 = "はぁ……";
            exportRoot._g.m2 = "";
            exportRoot._g.m3 = "";
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 1);
            
            //this.ch1.gotoAndPlay("swing");
        }
        this.frame_42 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._g.m2 = "ね……｡";
            exportRoot._g.m3 = "";
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 2);
            
            //this.ch1.gotoAndPlay("swing");
        }
        this.frame_83 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
            exportRoot._g.m3 = "";
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 6);
            
            this.ch1.gotoAndPlay("nod2");
        }
        this.frame_122 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
            exportRoot._g.m3 = "天気予報では､";
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 2);
            
            //this.ch1.gotoAndPlay("swing");
        }
        this.frame_144 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
            exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
            exportRoot._g.m4 = this.m.t[exportRoot._g.idx][4];
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 1);
            
            //this.ch1.gotoAndPlay("swing");
        }
        this.frame_181 = function() {
            exportRoot._u.updateTalk();
            
            //シーンendでは直前のキーフレームの表情を指定してください。
            exportRoot._u.setFace("ch1", 1);
            
            this.ch1.gotoAndPlay("standby");
        }
        this.frame_182 = function() {
            exportRoot._g.m1 = "空は……";
            exportRoot._g.m2 = "";
            exportRoot._g.m3 = "";
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 2);
            
            //this.ch1.gotoAndPlay("swing");
        }
        this.frame_218 = function() {
            exportRoot._g.m1 = "空は……雲に覆われて､";
            exportRoot._g.m2 = "";
            exportRoot._g.m3 = "";
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 1);
            
            //this.ch1.gotoAndPlay("swing");
        }
        this.frame_246 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._g.m2 = "えませんね｡";
            exportRoot._g.m3 = "";
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 5);
            
            //this.ch1.gotoAndPlay("swing");
        }
        this.frame_288 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._g.m2 = "えませんね｡ここは";
            exportRoot._g.m3 = "";
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 1);
            
            //this.ch1.gotoAndPlay("swing");
        }
        this.frame_301 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
            exportRoot._g.m3 = "いますし……";
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 2);
            
            //this.ch1.gotoAndPlay("swing");
        }
        this.frame_342 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
            exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 6);
            
            //this.ch1.gotoAndPlay("swing");
        }
        this.frame_367 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
            exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
            exportRoot._g.m4 = this.m.t[exportRoot._g.idx][4];
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 2);
            
            this.ch1.gotoAndPlay("nod2");
        }
        this.frame_392 = function() {
            exportRoot._u.updateTalk();
            //シーンendでは直前のキーフレームの表情を指定してください。
            
            //シーンendでは直前のキーフレームの表情を指定してください。
            exportRoot._u.setFace("ch1", 2);
            
            this.ch1.gotoAndPlay("standby");
        }
        this.frame_393 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._g.m2 = "";
            exportRoot._g.m3 = "";
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 6);
            
            //this.ch1.gotoAndPlay("swing");
        }
        this.frame_450 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._g.m2 = "黒一色の､";
            exportRoot._g.m3 = "";
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 2);
            
            //this.ch1.gotoAndPlay("swing");
        }
        this.frame_476 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._g.m2 = "黒一色の､静謐な世界｡";
            exportRoot._g.m3 = "";
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 1);
            
            //this.ch1.gotoAndPlay("swing");
        }
        this.frame_527 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
            exportRoot._g.m3 = "ありません｡";
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 5);
            
            //this.ch1.gotoAndPlay("swing");
        }
        this.frame_565 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
            exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 1);
            
            //this.ch1.gotoAndPlay("swing");
        }
        this.frame_589 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
            exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
            exportRoot._g.m4 = this.m.t[exportRoot._g.idx][4];
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 4);
            
            //this.ch1.gotoAndPlay("swing");
        }
        this.frame_606 = function() {
            exportRoot._u.updateTalk();
            //シーンendでは直前のキーフレームの表情を指定してください。
            
            //シーンendでは直前のキーフレームの表情を指定してください。
            exportRoot._u.setFace("ch1", 4);
            
            this.ch1.gotoAndPlay("standby");
        }
        this.frame_607 = function() {
            exportRoot._g.m1 = "でも……";
            exportRoot._g.m2 = "";
            exportRoot._g.m3 = "";
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 1);
            
            //this.ch1.gotoAndPlay("swing");
        }
        this.frame_633 = function() {
            exportRoot._g.m1 = "でも……不思議です｡";
            exportRoot._g.m2 = "";
            exportRoot._g.m3 = "";
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 5);
            
            //this.ch1.gotoAndPlay("swing");
        }
        this.frame_670 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._g.m2 = "静かだと､";
            exportRoot._g.m3 = "";
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 6);
            
            //this.ch1.gotoAndPlay("swing");
        }
        this.frame_705 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
            exportRoot._g.m3 = "て､";
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 2);
            
            //this.ch1.gotoAndPlay("swing");
        }
        this.frame_738 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
            exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
            exportRoot._g.m4 = "が……";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 1);
            
            //this.ch1.gotoAndPlay("swing");
        }
        this.frame_813 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
            exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
            exportRoot._g.m4 = "が……今は､";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 5);
            
            //this.ch1.gotoAndPlay("swing");
        }
        this.frame_833 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
            exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
            exportRoot._g.m4 = this.m.t[exportRoot._g.idx][4];
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 6);
            
            //this.ch1.gotoAndPlay("swing");
        }
        this.frame_857 = function() {
            exportRoot._u.updateTalk();
            //シーンendでは直前のキーフレームの表情を指定してください。
            
            
            //シーンendでは直前のキーフレームの表情を指定してください。
            exportRoot._u.setFace("ch1", 6);
            
            this.ch1.gotoAndPlay("standby");
        }
        this.frame_858 = function() {
            exportRoot._g.m1 = "ただ";
            exportRoot._g.m2 = "";
            exportRoot._g.m3 = "";
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 2);
            
            //this.ch1.gotoAndPlay("swing");
        }
        this.frame_876 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._g.m2 = "て……";
            exportRoot._g.m3 = "";
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 1);
            
            //this.ch1.gotoAndPlay("swing");
        }
        this.frame_920 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._g.m2 = "て……何もしない時間を";
            exportRoot._g.m3 = "";
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 2);
            
            //this.ch1.gotoAndPlay("swing");
        }
        this.frame_952 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
            exportRoot._g.m3 = "ていたいです｡";
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 6);
            
            //this.ch1.gotoAndPlay("swing");
        }
        this.frame_991 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
            exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 2);
            
            //this.ch1.gotoAndPlay("swing");
        }
        this.frame_1028 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
            exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
            exportRoot._g.m4 = this.m.t[exportRoot._g.idx][4];
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 5);
            
            this.ch1.gotoAndPlay("nod2");
        }
        this.frame_1061 = function() {
            exportRoot._u.updateTalk();
            //シーンendでは直前のキーフレームの表情を指定してください。
            
            
            //シーンendでは直前のキーフレームの表情を指定してください。
            exportRoot._u.setFace("ch1", 5);
            
            this.ch1.gotoAndPlay("standby");
        }
        this.frame_1062 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._g.m2 = "ら……";
            exportRoot._g.m3 = "";
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 1);
            
            //this.ch1.gotoAndPlay("swing");
        }
        this.frame_1104 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._g.m2 = "ら……ただ";
            exportRoot._g.m3 = "";
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 5);
            
            //this.ch1.gotoAndPlay("swing");
        }
        this.frame_1121 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
            exportRoot._g.m3 = "";
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 6);
            
            this.ch1.gotoAndPlay("nod2");
        }
        this.frame_1155 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
            exportRoot._g.m3 = "時折言葉を交わして……";
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 2);
            
            //this.ch1.gotoAndPlay("swing");
        }
        this.frame_1204 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
            exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
            exportRoot._g.m4 = "ｸﾘｽﾏｽも､";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 6);
            
            //this.ch1.gotoAndPlay("nod2");
        }
        this.frame_1241 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
            exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
            exportRoot._g.m4 = this.m.t[exportRoot._g.idx][4];
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 2);
            
            //this.ch1.gotoAndPlay("nod2");
        }
        this.frame_1258 = function() {
            exportRoot._u.updateTalk();
            //シーンendでは直前のキーフレームの表情を指定してください。
            
            
            //シーンendでは直前のキーフレームの表情を指定してください。
            exportRoot._u.setFace("ch1", 2);
            
            this.ch1.gotoAndPlay("standby");
        }
        this.frame_1259 = function() {
            exportRoot._g.m1 = "……あ";
            exportRoot._g.m2 = "";
            exportRoot._g.m3 = "";
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 1);
            
            //this.ch1.gotoAndPlay("swing");
        }
        this.frame_1279 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._g.m2 = "です｡";
            exportRoot._g.m3 = "";
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 2);
            
            //this.ch1.gotoAndPlay("swing");
        }
        this.frame_1312 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._g.m2 = "です｡……ふふっ｡";
            exportRoot._g.m3 = "";
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 4);
            
            this.ch1.gotoAndPlay("chord");
        }
        this.frame_1337 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
            exportRoot._g.m3 = "";
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 1);
            
            //this.ch1.gotoAndPlay("swing");
        }
        this.frame_1352 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
            exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 3);
            
            //this.ch1.gotoAndPlay("swing");
        }
        this.frame_1411 = function() {
            exportRoot._g.m4 = "ﾒﾘｰｸﾘｽﾏｽです､";
            exportRoot._g.m5 = "";
            exportRoot._u.setText("finish", 4);
        }
        this.frame_1438 = function() {
            exportRoot._g.m4 = "ﾒﾘｰｸﾘｽﾏｽです､";
            exportRoot._g.m5 = "ﾌﾟﾛﾃﾞｭｰｻｰさん……♪";
            exportRoot._u.setText("finish", 4);
        }
        this.frame_1454 = function() {
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
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1).call(this.frame_15).wait(27).call(this.frame_42).wait(41).call(this.frame_83).wait(39).call(this.frame_122).wait(22).call(this.frame_144).wait(37).call(this.frame_181).wait(1).call(this.frame_182).wait(36).call(this.frame_218).wait(28).call(this.frame_246).wait(42).call(this.frame_288).wait(13).call(this.frame_301).wait(41).call(this.frame_342).wait(25).call(this.frame_367).wait(25).call(this.frame_392).wait(1).call(this.frame_393).wait(57).call(this.frame_450).wait(26).call(this.frame_476).wait(51).call(this.frame_527).wait(38).call(this.frame_565).wait(24).call(this.frame_589).wait(17).call(this.frame_606).wait(1).call(this.frame_607).wait(26).call(this.frame_633).wait(37).call(this.frame_670).wait(35).call(this.frame_705).wait(33).call(this.frame_738).wait(75).call(this.frame_813).wait(20).call(this.frame_833).wait(24).call(this.frame_857).wait(1).call(this.frame_858).wait(18).call(this.frame_876).wait(44).call(this.frame_920).wait(32).call(this.frame_952).wait(39).call(this.frame_991).wait(37).call(this.frame_1028).wait(33).call(this.frame_1061).wait(1).call(this.frame_1062).wait(42).call(this.frame_1104).wait(17).call(this.frame_1121).wait(34).call(this.frame_1155).wait(49).call(this.frame_1204).wait(37).call(this.frame_1241).wait(17).call(this.frame_1258).wait(1).call(this.frame_1259).wait(20).call(this.frame_1279).wait(33).call(this.frame_1312).wait(25).call(this.frame_1337).wait(15).call(this.frame_1352).wait(59).call(this.frame_1411).wait(27).call(this.frame_1438).wait(16).call(this.frame_1454).wait(5));
    
        // shield
        this.instance = new lib.shield();
        this.instance.parent = this;
        this.instance.setTransform(120,160);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1459));
    
        // sender
        this.sender = new lib.sender();
        this.sender.name = "sender";
        this.sender.parent = this;
        this.sender.setTransform(-100,0);
        this.sender._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.sender).wait(1454).to({_off:false},0).wait(5));
    
        // SP_loader
        this.loader = new lib.voice_loader_container();
        this.loader.name = "loader";
        this.loader.parent = this;
        this.loader.setTransform(190.05,12,1,1,0,0,0,-50.1,11);
    
        this.timeline.addTween(cjs.Tween.get(this.loader).wait(1459));
    
        // place
        this.instance_1 = new lib.tie();
        this.instance_1.parent = this;
        this.instance_1.setTransform(120,155);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({alpha:0.1992},3,cjs.Ease.get(1)).to({_off:true},1).wait(1440));
    
        // SP_pusher
        this.instance_2 = new lib.pusher_next();
        this.instance_2.parent = this;
        this.instance_2.setTransform(120,290);
        this.instance_2._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off:false},0).to({_off:true},3).wait(1444));
    
        // fader
        this.instance_3 = new lib.dark();
        this.instance_3.parent = this;
        this.instance_3.setTransform(120,155);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({alpha:0.1016},3).to({_off:true},1).wait(1453));
    
        // window
        this.window_1 = new lib.window_container();
        this.window_1.name = "window_1";
        this.window_1.parent = this;
        this.window_1.setTransform(2,321.1);
    
        this.timeline.addTween(cjs.Tween.get(this.window_1).wait(15).to({y:301.1},0).wait(1).to({regX:132.8,regY:98.8,x:134.8,y:398.6},0).wait(1).to({y:394.65},0).wait(1).to({y:388},0).wait(1).to({y:378.75},0).wait(1).to({y:367.25},0).wait(1).to({y:354.25},0).wait(1).to({y:340.85},0).wait(1).to({y:328.45},0).wait(1).to({y:318.45},0).wait(1).to({y:312},0).wait(1).to({regX:0,regY:0,x:2,y:211},0).wait(1).to({regX:132.8,regY:98.8,x:134.8,y:310.3},0).wait(1).to({y:311.9},0).wait(1).to({regX:0,regY:0,x:2,y:214},0).wait(1362).to({regX:132.8,regY:98.8,x:134.8,y:313.9},0).wait(1).to({y:317.75},0).wait(1).to({y:325},0).wait(1).to({y:336.4},0).wait(1).to({y:351.7},0).wait(1).to({y:368.85},0).wait(1).to({y:384.15},0).wait(1).to({y:395.55},0).wait(1).to({y:402.8},0).wait(1).to({y:406.65},0).wait(1).to({regX:0,regY:0,x:2,y:309},0).to({_off:true},1).wait(57));
    
        // window
        this.window_2 = new lib.finish_text_container();
        this.window_2.name = "window_2";
        this.window_2.parent = this;
        this.window_2.setTransform(120,322);
        this.window_2._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.window_2).wait(1402).to({_off:false},0).wait(1).to({regX:16.8,regY:-1.3,x:136.8,y:320.2},0).wait(1).to({y:318.5},0).wait(1).to({y:315.2},0).wait(1).to({y:309.85},0).wait(1).to({y:302.4},0).wait(1).to({y:294.05},0).wait(1).to({y:287.1},0).wait(1).to({y:282.55},0).wait(1).to({y:280.25},0).wait(1).to({regX:0,regY:0,x:120,y:280.9},0).to({y:282.9},3).wait(44));
    
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
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]},1402).wait(57));
    
        // glitters
        this.glitters = new lib.glitters();
        this.glitters.name = "glitters";
        this.glitters.parent = this;
        this.glitters._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.glitters).wait(1402).to({_off:false},0).wait(57));
    
        // white_mask
        this.ranko_finish_blur = new lib.white_mask();
        this.ranko_finish_blur.name = "ranko_finish_blur";
        this.ranko_finish_blur.parent = this;
        this.ranko_finish_blur.alpha = 0.8516;
        this.ranko_finish_blur.compositeOperation = "lighter";
        this.ranko_finish_blur._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.ranko_finish_blur).wait(1402).to({_off:false},0).wait(1).to({regX:120,regY:155,x:120,y:155,alpha:0.8489},0).wait(1).to({alpha:0.8403},0).wait(1).to({alpha:0.8253},0).wait(1).to({alpha:0.8029},0).wait(1).to({alpha:0.7723},0).wait(1).to({alpha:0.7324},0).wait(1).to({alpha:0.6823},0).wait(1).to({alpha:0.6211},0).wait(1).to({alpha:0.5487},0).wait(1).to({alpha:0.4662},0).wait(1).to({alpha:0.3767},0).wait(1).to({alpha:0.2865},0).wait(1).to({alpha:0.2036},0).wait(1).to({alpha:0.1357},0).wait(1).to({alpha:0.0874},0).wait(1).to({alpha:0.0595},0).wait(1).to({regX:0,regY:0,x:0,y:0,alpha:0.0508},0).to({_off:true},1).wait(39));
    
        // SP_blur
        this.ranko_finish_blur_1 = new lib.ranko_finish_blur();
        this.ranko_finish_blur_1.name = "ranko_finish_blur_1";
        this.ranko_finish_blur_1.parent = this;
        this.ranko_finish_blur_1._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.ranko_finish_blur_1).wait(1402).to({_off:false},0).wait(1).to({regX:120,regY:155,x:120,y:155,alpha:0.9968},0).wait(1).to({alpha:0.9867},0).wait(1).to({alpha:0.9688},0).wait(1).to({alpha:0.9423},0).wait(1).to({alpha:0.906},0).wait(1).to({alpha:0.8587},0).wait(1).to({alpha:0.7993},0).wait(1).to({alpha:0.7268},0).wait(1).to({alpha:0.641},0).wait(1).to({alpha:0.5432},0).wait(1).to({alpha:0.4371},0).wait(1).to({alpha:0.3301},0).wait(1).to({alpha:0.2319},0).wait(1).to({alpha:0.1514},0).wait(1).to({alpha:0.0941},0).wait(1).to({alpha:0.0612},0).wait(1).to({regX:0,regY:0,x:0,y:0,alpha:0.0508},0).to({_off:true},1).wait(39));
    
        // character_face
        this.fns = new lib.finish_1();
        this.fns.name = "fns";
        this.fns.parent = this;
        this.fns.setTransform(120,168,1,1,0,0,0,120,168);
        this.fns._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.fns).wait(1402).to({_off:false},0).wait(57));
    
        // white_mask
        this.instance_9 = new lib.white_mask();
        this.instance_9.parent = this;
        this.instance_9.setTransform(120,155,1,1,0,0,0,120,155);
        this.instance_9.alpha = 0.0508;
        this.instance_9._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1390).to({_off:false},0).to({alpha:0.8984},11).to({_off:true},1).wait(57));
    
        // overlay_black
        this.instance_10 = new lib.dark();
        this.instance_10.parent = this;
        this.instance_10.setTransform(120,155);
        this.instance_10._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1259).to({_off:false},0).to({alpha:0},7).to({_off:true},1).wait(192));
    
        // overlay_top
        this.instance_11 = new lib.overlay_black();
        this.instance_11.parent = this;
        this.instance_11.setTransform(120,-2);
        this.instance_11._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(15).to({_off:false},0).wait(1).to({regX:1,x:121,y:-3.2},0).wait(1).to({y:-6.85},0).wait(1).to({y:-12.75},0).wait(1).to({y:-20.7},0).wait(1).to({y:-30.4},0).wait(1).to({y:-41.5},0).wait(1).to({y:-53.55},0).wait(1).to({y:-65.9},0).wait(1).to({y:-78.05},0).wait(1).to({y:-89.25},0).wait(1).to({y:-98.95},0).wait(1).to({y:-106.45},0).wait(1).to({y:-111.3},0).wait(1).to({regX:0,x:120,y:-113},0).wait(55).to({regX:1,x:121,y:-113.15},0).wait(1).to({y:-113.65},0).wait(1).to({y:-114.5},0).wait(1).to({y:-115.7},0).wait(1).to({y:-117.15},0).wait(1).to({y:-118.95},0).wait(1).to({y:-121},0).wait(1).to({y:-123.3},0).wait(1).to({y:-125.9},0).wait(1).to({y:-128.7},0).wait(1).to({y:-131.7},0).wait(1).to({y:-134.85},0).wait(1).to({y:-138.2},0).wait(1).to({y:-141.7},0).wait(1).to({y:-145.3},0).wait(1).to({y:-149},0).wait(1).to({y:-152.8},0).wait(1).to({y:-156.55},0).wait(1).to({y:-160.4},0).wait(1).to({y:-164.15},0).wait(1).to({y:-167.9},0).wait(1).to({y:-171.55},0).wait(1).to({y:-175.15},0).wait(1).to({y:-178.55},0).wait(1).to({y:-181.8},0).wait(1).to({y:-184.9},0).wait(1).to({y:-187.75},0).wait(1).to({y:-190.35},0).wait(1).to({y:-192.7},0).wait(1).to({y:-194.7},0).wait(1).to({y:-196.45},0).wait(1).to({y:-197.8},0).wait(1).to({y:-198.8},0).wait(1).to({y:-199.4},0).wait(1).to({regX:0,x:120,y:-199.65},0).to({_off:true},1).wait(1340));
    
        // overlay_bottom
        this.instance_12 = new lib.overlay_black();
        this.instance_12.parent = this;
        this.instance_12.setTransform(120,308);
        this.instance_12._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(15).to({_off:false},0).wait(1).to({regX:1,x:121,y:308.45},0).wait(1).to({y:309.8},0).wait(1).to({y:312.05},0).wait(1).to({y:315.05},0).wait(1).to({y:318.75},0).wait(1).to({y:322.95},0).wait(1).to({y:327.5},0).wait(1).to({y:332.15},0).wait(1).to({y:336.75},0).wait(1).to({y:341},0).wait(1).to({y:344.65},0).wait(1).to({y:347.5},0).wait(1).to({y:349.35},0).wait(1).to({regX:0,x:120,y:350},0).wait(55).to({regX:1,x:121,y:350.3},0).wait(1).to({y:351.25},0).wait(1).to({y:352.8},0).wait(1).to({y:354.95},0).wait(1).to({y:357.65},0).wait(1).to({y:360.85},0).wait(1).to({y:364.6},0).wait(1).to({y:368.85},0).wait(1).to({y:373.5},0).wait(1).to({y:378.6},0).wait(1).to({y:384.1},0).wait(1).to({y:389.9},0).wait(1).to({y:396},0).wait(1).to({y:402.35},0).wait(1).to({y:408.95},0).wait(1).to({y:415.7},0).wait(1).to({y:422.55},0).wait(1).to({y:429.5},0).wait(1).to({y:436.4},0).wait(1).to({y:443.3},0).wait(1).to({y:450.15},0).wait(1).to({y:456.85},0).wait(1).to({y:463.3},0).wait(1).to({y:469.55},0).wait(1).to({y:475.5},0).wait(1).to({y:481.1},0).wait(1).to({y:486.3},0).wait(1).to({y:491.05},0).wait(1).to({y:495.3},0).wait(1).to({y:499},0).wait(1).to({y:502.15},0).wait(1).to({y:504.65},0).wait(1).to({y:506.45},0).wait(1).to({y:507.6},0).wait(1).to({regX:0,x:120,y:508},0).to({_off:true},1).wait(1340));
    
        // powapowa1
        this.lighter_tgt = new lib.mc_ring_move();
        this.lighter_tgt.name = "lighter_tgt";
        this.lighter_tgt.parent = this;
        this.lighter_tgt.setTransform(120,155);
        this.lighter_tgt.alpha = 0;
        this.lighter_tgt._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.lighter_tgt).wait(1062).to({_off:false},0).to({alpha:1},16).to({_off:true},181).wait(200));
    
        // powapowa2
        this.lighter_tgt_1 = new lib.mc_bubble_set();
        this.lighter_tgt_1.name = "lighter_tgt_1";
        this.lighter_tgt_1.parent = this;
        this.lighter_tgt_1.setTransform(121,336,1,1,89.9781);
        this.lighter_tgt_1.alpha = 0;
        this.lighter_tgt_1._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.lighter_tgt_1).wait(1062).to({_off:false},0).to({alpha:0.4492},16).to({_off:true},181).wait(200));
    
        // ha
        this.instance_13 = new lib.gｌitter_rise_inner3();
        this.instance_13.parent = this;
        this.instance_13.setTransform(-14.8,-8.15,0.4265,0.4265,0,0,180,0,0.1);
    
        this.instance_14 = new lib.gｌitter_rise_inner3();
        this.instance_14.parent = this;
        this.instance_14.setTransform(245.45,-11.65,0.5051,0.5052,0,0,0,0.1,0.1);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_14},{t:this.instance_13}]},1279).to({state:[]},123).wait(57));
    
        // ha
        this.instance_15 = new lib.gｌitter_rise_inner3();
        this.instance_15.parent = this;
        this.instance_15.setTransform(-9.15,72.1,0.338,0.338,0,0,0,0,-0.1);
    
        this.instance_16 = new lib.gｌitter_rise_inner3();
        this.instance_16.parent = this;
        this.instance_16.setTransform(41.05,-14.25,0.4732,0.4732,0,0,0,-0.1,0);
    
        this.instance_17 = new lib.gｌitter_rise_inner3();
        this.instance_17.parent = this;
        this.instance_17.setTransform(255.7,62,0.338,0.338,0,0,0,0,-0.1);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15}]},1279).to({state:[]},123).wait(57));
    
        // ch
        this.ch1 = new lib.character1_container();
        this.ch1.name = "ch1";
        this.ch1.parent = this;
        this.ch1.setTransform(308.65,382.85,1.1178,1.1178,0,0,0,0.2,0.5);
        this.ch1._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.ch1).wait(15).to({_off:false},0).to({x:237.65},57,cjs.Ease.quadInOut).wait(11).to({regX:0.1,regY:0.4,scaleX:0.8674,scaleY:0.8674,x:208.2,y:321.15},35,cjs.Ease.quadInOut).wait(64).to({regX:0,regY:0,scaleX:0.5338,scaleY:0.5338,x:169,y:224.5},36,cjs.Ease.quadInOut).wait(232).to({regX:0.1,regY:0.2,scaleX:0.7356,scaleY:0.7356,x:193,y:277.8},70,cjs.Ease.quadInOut).wait(338).to({regX:0.2,regY:0.4,scaleX:0.9867,scaleY:0.9867,x:222.2,y:348.7},165,cjs.Ease.quadInOut).wait(236).to({regX:0,regY:0.1,scaleX:0.6418,scaleY:0.6418,x:181.75,y:252.05},0).to({_off:true},143).wait(57));
    
        // snow
        this.instance_18 = new lib.mc_snow();
        this.instance_18.parent = this;
        this.instance_18.setTransform(410.8,505,1,1,0,0,0,290.8,350);
        this.instance_18._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1279).to({_off:false},0).to({_off:true},123).wait(57));
    
        // bg
        this.bg1 = new lib.bg_zoom_half();
        this.bg1.name = "bg1";
        this.bg1.parent = this;
        this.bg1.setTransform(-151.95,-46.75,0.7586,0.7586,0,0,0,-0.2,-0.2);
    
        this.timeline.addTween(cjs.Tween.get(this.bg1).wait(15).to({regX:-0.8,regY:-0.7,scaleX:1.1176,scaleY:1.1176,x:-146.35,y:-195.35},0).to({x:-217.35},57,cjs.Ease.quadInOut).wait(11).to({regY:-0.6,scaleX:0.8673,scaleY:0.8673,x:-145,y:-127.5},35,cjs.Ease.quadInOut).wait(64).to({regX:-0.3,regY:-0.2,scaleX:0.5338,scaleY:0.5338,x:-48.35,y:-51.6},36,cjs.Ease.quadInOut).wait(232).to({regX:-0.7,regY:-0.6,scaleX:0.7355,scaleY:0.7355,x:-106.5,y:-102.6},70,cjs.Ease.quadInOut).wait(338).to({regX:-0.8,regY:-0.7,scaleX:0.9865,scaleY:0.9865,x:-179.55,y:-161.65},165,cjs.Ease.quadInOut).wait(236).to({regX:-0.4,regY:-0.3,scaleX:0.6417,scaleY:0.6417,x:-79.55,y:-79.85},0).to({_off:true},143).wait(57));
    
        // SP_btn_window
        this.toggle_btn = new lib.btn_window();
        this.toggle_btn.name = "toggle_btn";
        this.toggle_btn.parent = this;
        this.toggle_btn.setTransform(200,200);
    
        this.timeline.addTween(cjs.Tween.get(this.toggle_btn).to({_off:true},1390).wait(69));
    
        // btn
        this.stage_btn = new lib.button();
        this.stage_btn.name = "stage_btn";
        this.stage_btn.parent = this;
        this.stage_btn.setTransform(120,155);
    
        this.timeline.addTween(cjs.Tween.get(this.stage_btn).to({_off:true},1402).wait(52).to({_off:false},0).wait(5));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-282,-720,902,1383);
    // library properties:
    lib.properties = {
        id: '_468_3',
        width: 240,
        height: 310,
        fps: 12,
        color: "#FFFFFF",
        opacity: 1.00,
        manifest: [
            {src:"images/bg2.jpg", id:"_468_3_bg2"},
            {src:"images/book1.png", id:"_468_3_book1"},
            {src:"images/book2.png", id:"_468_3_book2"},
            {src:"images/book3.png", id:"_468_3_book3"},
            {src:"images/ch_base.png", id:"_468_3_ch_base"},
            {src:"images/ch_face2.png", id:"_468_3_ch_face2"},
            {src:"images/ch_face3.png", id:"_468_3_ch_face3"},
            {src:"images/ch_face4.png", id:"_468_3_ch_face4"},
            {src:"images/ch_face5.png", id:"_468_3_ch_face5"},
            {src:"images/ch_face6.png", id:"_468_3_ch_face6"},
            {src:"images/finish.jpg", id:"_468_3_finish"},
            {src:"images/finish_blur.jpg", id:"_468_3_finish_blur"},
            {src:"images/kira.png", id:"_468_3_kira"},
            {src:"images/tie_fp.png", id:"_468_3_tie_fp"},
            {src:"images/tie_sp.png", id:"_468_3_tie_sp"}
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
    an.compositions['_468_3'] = {
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