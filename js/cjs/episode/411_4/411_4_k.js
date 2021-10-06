(function (cjs, an) {

    var p; // shortcut to reference prototypes
    var lib={};var ss={};var img={};
    lib.ssMetadata = [];
    
    
    // symbols:
    
    
    
    (lib.bg = function() {
        this.initialize(img._411_4_bg);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,1220,1400);
    
    
    (lib.book_1 = function() {
        this.initialize(img._411_4_book_1);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,1220,632);
    
    
    (lib.book_2 = function() {
        this.initialize(img._411_4_book_2);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,400,395);
    
    
    (lib.book_3 = function() {
        this.initialize(img._411_4_book_3);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,310,258);
    
    
    (lib.ch_base = function() {
        this.initialize(img._411_4_ch_base);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,1220,1400);
    
    
    (lib.ch_face2 = function() {
        this.initialize(img._411_4_ch_face2);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,280,280);
    
    
    (lib.ch_face3 = function() {
        this.initialize(img._411_4_ch_face3);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,280,280);
    
    
    (lib.ch_face4 = function() {
        this.initialize(img._411_4_ch_face4);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,280,280);
    
    
    (lib.ch_face5 = function() {
        this.initialize(img._411_4_ch_face5);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,280,280);
    
    
    (lib.ch_face6 = function() {
        this.initialize(img._411_4_ch_face6);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,280,280);
    
    
    (lib.ch_face7 = function() {
        this.initialize(img._411_4_ch_face7);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,280,280);
    
    
    (lib.ch_face8 = function() {
        this.initialize(img._411_4_ch_face8);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,280,280);
    
    
    (lib.finish = function() {
        this.initialize(img._411_4_finish);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,480,620);
    
    
    (lib.finish_blur = function() {
        this.initialize(img._411_4_finish_blur);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,480,620);
    
    
    (lib.star = function() {
        this.initialize(img._411_4_star);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,100,100);
    
    
    (lib.tie_fp = function() {
        this.initialize(img._411_4_tie_fp);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,240,32);
    
    
    (lib.tie_sp = function() {
        this.initialize(img._411_4_tie_sp);
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
    
    
    (lib.star_1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // レイヤー_1
        this.instance = new lib.star();
        this.instance.parent = this;
        this.instance.setTransform(-50,-50);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.star_1, new cjs.Rectangle(-50,-50,100,100), null);
    
    
    (lib.book3_core = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // レイヤー_1
        this.instance = new lib.book_3();
        this.instance.parent = this;
        this.instance.setTransform(-77.5,-64.5,0.5,0.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.book3_core, new cjs.Rectangle(-77.5,-64.5,155,129), null);
    
    
    (lib.book2_core = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // レイヤー_1
        this.instance = new lib.book_2();
        this.instance.parent = this;
        this.instance.setTransform(-100,-98.75,0.5,0.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.book2_core, new cjs.Rectangle(-100,-98.7,200,197.5), null);
    
    
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
    
    }).prototype = getMCSymbolPrototype(lib.character1_face_eyeclose, new cjs.Rectangle(0,0,140,140), null);
    
    
    (lib.character1_base = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // base
        this.instance = new lib.ch_base();
        this.instance.parent = this;
        this.instance.setTransform(-120,-396,0.5,0.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.character1_base, new cjs.Rectangle(-120,-396,610,700), null);
    
    
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
    
    
    (lib.star_anim = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // timeline functions:
        this.frame_17 = function() {
            this.stop();
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(17).call(this.frame_17).wait(1));
    
        // star
        this.instance = new lib.star_1();
        this.instance.parent = this;
        this.instance.setTransform(-1.05,4.1,0.0617,0.0617,0,0,0,0,3.3);
        this.instance.compositeOperation = "lighter";
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:2,regY:2,scaleX:0.05,scaleY:0.05,x:151,y:179.75,alpha:0.0508},16,cjs.Ease.quintOut).to({_off:true},1).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-4.1,0,157.6,182.2);
    
    
    (lib.book_1_1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // レイヤー_3
        this.instance = new lib.book3_core();
        this.instance.parent = this;
        this.instance.setTransform(227.5,93.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
        // レイヤー_2
        this.instance_1 = new lib.book2_core();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-187,23.75);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
    
        // レイヤー_1
        this.instance_2 = new lib.book_1();
        this.instance_2.parent = this;
        this.instance_2.setTransform(-305,-158,0.5,0.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));
    
    }).prototype = getMCSymbolPrototype(lib.book_1_1, new cjs.Rectangle(-305,-158,610,316), null);
    
    
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
        this.shape.graphics.f("#333333").s().p("AArBAQgMgHgIgGQgIAGgKAHQgJAGgNAFIgJgOIAVgJQAJgGAHgGIgMgOIgKgMIgCACIgEAEIgEAFIgLgPQAJgHAGgJQAIgIAEgJIAGgOIAEgIIgnAAIAOAFIgHANIgGAMIAABaIgQAAIAAhHIgHAKIgHAHIgCADIgJgQIAEgEIAKgKIANgRQAFgKAFgMIghAAIAAgPIA/AAIAAgOIAQAAIAAAOIA/AAIAAAPIhBAAIAOAFIgBACIgCAEIgCAHIAvAAIAAALIgBAGIgGAMIgIASQgGAKgHAJQAHAHALAFIAWAJIgJAPQgMgFgLgGgAACgFIgFAIIAJAMIAPAPIAEgEIACgFIADgDIgKgIIgMgKIAJgJIALAIIAJAHIAHgOIABgFIglAAIgGAIg");
        this.shape.setTransform(23.9,0.4);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#333333").s().p("AAABCQgOABgMgEQgLgEgGgGQgHgHABgIQAAgHADgEQAFgFAFgCQAHgCAGAAIACAAQAIAAAHADQAGAFAFAHQAFAIABALQAMgCAIgEQAIgFAFgGQAFgHAAgHIAAgBQAAgIgFgGQgFgFgHgCQgJgEgKAAIgCAAQgJAAgJADIgTAEQgJADgIAFQgHAEgFAFIgLgOIAKgFIAKgFIALgIIAOgIIAMgIIAJgGIADgDIAFgEIAHgEIAGgEIADgCIgFAAIgJABIgKAAIguACIgBgPIBdgBIAAAOIgKAHIgRALIgTANIgTALIgBABIAAAAIABAAIAAAAIATgHQAJgDAKABQAGAAAJABQAIACAIAFQAHADAFAHQAFAHAAALIAAABQAAAOgJALQgJAJgOAHQgOAFgTAAgAgEA1QgBgHgCgEQgCgGgDgCQgEgEgFAAIgBAAIgBAAQgFAAgDADQgDACAAACIAAABQAAAFAIAEQAIAFAOABIAAAAg");
        this.shape_1.setTransform(7.8,0.85);
    
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#333333").s().p("AhJhGIAwAAIAAAPIgLAkIAGAKIADAMQACAGAAAGQAAAHgCAFQgCAFgFAEQgFADgIABIgJgQIAIgBQADgBACgDQADgCAAgGQAAgEgDgHQgDgHgGgLIAJglIgOAAIAACCIgQABgAASBLIAAgVIgsAAIAAgOIAPAAIAAgVIgJAAIAAgPIAmAAIAAgLIAQAAIAAALIAaAAIAAAPIgaAAIAAAVIAkAAIAAAOIgkAAIAAAVgAADAoIAPAAIAAgVIgPAAgAgcgNIAXgFQAJgDAIgFIgJgGIgFgGIgIAHIgDACIgNgNIAEgCIAGgGIAJgKQAFgHACgIIARAEIgCAEIgCAEIAvAAIAAALIgDAEIgHAKIgNALQAHAEAJADIAVAFIgHAPQgNgDgLgFQgLgEgIgGIgTALQgLAFgOADgAAOgqIAKAHIAHgGIAFgGIADgCIggAAIAHAHg");
        this.shape_2.setTransform(-7.85,0.425);
    
        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#333333").s().p("AhEBHIAAgOIBCAAIAAgOIgsAAIAAgMIAsAAIAAgOIgoAAIgJALIgIAIIgCADIgMgNIAEgDIAIgHIAJgLQAEgGADgHIgMAAIAAg+IB3AAIAAA+IgxAAIAAAMIA2AAIAAANIg2AAIAAAOIAvAAIAAAMIgvAAIAAAOIA9AAIAAAOgAgfgBIgCAFIAfAAIAAgMIgaAAIgDAHgAgpgVIBXAAIAAgMIhXAAgAgpgtIBXAAIAAgMIhXAAg");
        this.shape_3.setTransform(-24.2,0.425);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
    
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
    
        // mask_face (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("ArPLQIAA2fIWfAAIAAWfg");
        mask.setTransform(73,73);
    
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
    
        this.instance_8 = new lib.ch_face8();
        this.instance_8.parent = this;
        this.instance_8.setTransform(0,0,0.5,0.5);
    
        var maskedShapeInstanceList = [this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8];
    
        for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).to({state:[{t:this.instance_6}]},1).to({state:[]},1).wait(8));
    
        // body
        this.b = new lib.character1_base();
        this.b.name = "b";
        this.b.parent = this;
        this.b.setTransform(-80,272);
    
        var maskedShapeInstanceList = [this.b];
    
        for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }
    
        this.timeline.addTween(cjs.Tween.get(this.b).wait(20));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(1,1,144,144);
    
    
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
    
    
    (lib.star_anim_matome = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // timeline functions:
        this.frame_9 = function() {
            this.stop();
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));
    
        // star_anim
        this.instance = new lib.star_anim();
        this.instance.parent = this;
        this.instance.setTransform(339.05,16.25);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},9).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,341.1,23.2);
    
    
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
        this.shape.graphics.f("#000000").s().p("Ag0BMIAAg9IgKAAIgHABIgDAAIgCgSIADAAIAJAAIAFgGIAEgHIgJgJIgNgNIALgRIACADIADADIAGgNIAEgOIASAIIgIARIgIAPIACACIACACIAEgIIAFgIIADgIIARAJQgGAMgHALIgOAUIAGAAIAFgBIgBgEIgBgEIAOgFIACAGIACAJIACAJIARgHIAQgIIghAAIAAgSIAZAAIAAgOIgVAAIAAgSIAVAAIAAgQIATAAIAAAQIASAAIAAAOIAFgKIAEgKIARALIgHAOIgJANIAQAAIAAASIgfAAIgFAFIgGADIAgAAIAABKIgUAAIAAgGIgbAAIAAAGIgTAAIAAgyIgEADIgFACIgEgMIgMAEIAAgDIgBgFIgEAAIgDABIAAA+gAATAzIAcAAIAAgKIgcAAgAATAZIAcAAIAAgIIgcAAgAAggaIAGAAIAFgHIAEgHIgPAAgAhKA/IAEgZIABgSIAPADIAAAMIgCAPIgDARgAgbA+IAAgNIgBgOIgBgLIAOgDIABAIIACAKIABAMIABAKIgRADg");
        this.shape.setTransform(39.975,11.775);
    
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#000000").s().p("AgcA2IAIAAIAKAAQAAgBABAAQAAAAABAAQAAgBABAAQAAgBAAAAIABgHIAAgRIg9AAIAAgSICHAAIAAASIg2AAIAAAQIgBAQQgBAHgEADQgCADgHACIgTABgAhKA4IAEgCIAKgFQAGgDAHgFIAMgLIAQALIgOANIgNAKIgJAHIgFABgAA3BFIgOgKQgJgGgLgLIAPgLQALAJAIAFIAPAJIAGADIgQAPgAhMgQQASgDAMgHQANgGAGgIIgtAAIAAgTIA4AAIAEgJIACgGIAUACIgCAHIgCAGIBDAAIAAATIgtAAQALAJAMAFQAMAGAPADIgJATIgPgEIgNgHIAAAJIhPAAIAAgIIgOAIIgQAEgAAZgTIgMgKIgLgLIgEAAIgIALIgLAKIAuAAIAAAAg");
        this.shape_1.setTransform(24,11.75);
    
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
        this.instance_2.setTransform(228.15,169.7,0.1412,0.1412);
        this.instance_2._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).wait(18));
    
        // レイヤー_8
        this.instance_3 = new lib.glitter_first();
        this.instance_3.parent = this;
        this.instance_3.setTransform(27,117.4,0.159,0.159,0,0,0,-1.3,2.9);
        this.instance_3._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).wait(16));
    
        // レイヤー_9
        this.instance_4 = new lib.glitter_first();
        this.instance_4.parent = this;
        this.instance_4.setTransform(222.8,80.55,0.0849,0.0849);
        this.instance_4._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(7).to({_off:false},0).wait(15));
    
        // レイヤー_10
        this.instance_5 = new lib.glitter_first();
        this.instance_5.parent = this;
        this.instance_5.setTransform(219.25,266.2,0.1618,0.1618);
        this.instance_5._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8).to({_off:false},0).wait(14));
    
        // レイヤー_11
        this.instance_6 = new lib.glitter_first();
        this.instance_6.parent = this;
        this.instance_6.setTransform(182.15,14.65,0.1362,0.1362);
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
        this.instance_8.setTransform(225.3,225.65,0.1702,0.1702);
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
        this.instance_10.setTransform(198.75,237.55,0.1176,0.1176);
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
            this.face_blink_ary = [1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1]; 
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
        var mask_graphics_15 = new cjs.Graphics().p("AnXCtQhXg5AHhBQAGg/BUhBQBWhDCBglQBogeBhASQAZAEAqAKQAjAIAXgCQAXgCAggJIA5gSQBJgVA/ASQBDATAdAhQARAUAiA1QAHAJA5A2QAXAVgQAMQgHAGglASQgbANgKAQQgKAcgJAIQgQAMgzgOIhpgVQgygKgXgYQgYgZgogJQgpgKAGAGQhCAqhRAtQikBahQAVQgaAGgaAAQhBAAhBgpg");
        var mask_graphics_21 = new cjs.Graphics().p("AjFBuIhLhTIAEgiQADgjABABIATh2ICVgHIBJATICJBEIB6AeIAlgEQgWA4ABBQQAAAgABAaIhEgGIi5Agg");
    
        this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(15).to({graphics:mask_graphics_15,x:70.7644,y:57.791}).wait(6).to({graphics:mask_graphics_21,x:31.25,y:41.8}).wait(6));
    
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
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).wait(1).to({alpha:1},0).wait(1).to({regX:70,regY:70,x:70,y:70,alpha:0.3015},0).wait(1).to({alpha:0.0922},0).wait(1).to({regX:35,regY:30,x:35,y:30,alpha:0},0).wait(2).to({alpha:0.1992},0).wait(1).to({alpha:1},0).wait(1).to({regX:70,regY:70,x:70,y:70,alpha:0.3015},0).wait(1).to({alpha:0.0922},0).wait(1).to({regX:35,regY:30,x:35,y:30,alpha:0},0).wait(2));
    
        // f2
        this.f2 = new lib.character1_face();
        this.f2.name = "f2";
        this.f2.parent = this;
        this.f2.setTransform(35,30,1,1,0,0,0,35,30);
    
        this.timeline.addTween(cjs.Tween.get(this.f2).wait(5).to({alpha:0.1992},0).wait(1).to({regX:73,regY:73,x:73,y:73,alpha:0.6441},0).wait(1).to({alpha:0.911},0).wait(1).to({regX:35,regY:30,x:35,y:30,alpha:1},0).wait(19));
    
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
    
        this.timeline.addTween(cjs.Tween.get(this.f1_alpha).wait(5).to({alpha:0.8008},0).wait(1).to({regX:73,regY:73,x:73,y:73,alpha:0.7118},0).wait(1).to({alpha:0.4449},0).wait(1).to({regX:35,regY:30,x:35,y:30,alpha:0},0).wait(19));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-200,-124,610,700);
    
    
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
        this.f.setTransform(-123,-370);
    
        this.timeline.addTween(cjs.Tween.get(this.f).to({_off:true},1).wait(1));
    
        // base
        this.b = new lib.character1_base();
        this.b.name = "b";
        this.b.parent = this;
        this.b.setTransform(-203,-98);
    
        this.timeline.addTween(cjs.Tween.get(this.b).wait(2));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-323,-494,633.2,700);
    
    
    (lib.bg_zoom_half = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{"def":0,star:1});
    
        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        }
        this.frame_1 = function() {
            this.stop();
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));
    
        // star_anim_matome
        this.instance = new lib.star_anim_matome();
        this.instance.parent = this;
        this.instance._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));
    
        // bg_image
        this.instance_1 = new lib.bg();
        this.instance_1.parent = this;
        this.instance_1.setTransform(0,0,0.5,0.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,610,700);
    
    
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
        this.initialize(mode,startPosition,loop,{standby:0,jump:8,jump2:16,jump_double:25,jump_flower:37,jump_flower2:47,nod:57,nod2:66,nod_double:81,swing:92,swing_on:112,swing_off:121,notice:132,notice_jump:146,laugh:160,chord:181,question:201,question_on:229,question_off:241,exclamation:252,down:268,down2:295,shy_jump:313,shy_down:325,shock:343,sigh:350,happy:369,anger:384,anger2:404,damage:416,concent:433,nod_chord:442,shy_swing:457,nod3:477});
    
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
        this.frame_456 = function() {
            this.stop();
        }
        this.frame_457 = function() {
            this.play();
        }
        this.frame_476 = function() {
            this.stop();
        }
        this.frame_477 = function() {
            this.play();
        }
        this.frame_490 = function() {
            this.stop();
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(1).call(this.frame_8).wait(7).call(this.frame_15).wait(1).call(this.frame_16).wait(8).call(this.frame_24).wait(1).call(this.frame_25).wait(11).call(this.frame_36).wait(1).call(this.frame_37).wait(9).call(this.frame_46).wait(1).call(this.frame_47).wait(9).call(this.frame_56).wait(1).call(this.frame_57).wait(8).call(this.frame_65).wait(1).call(this.frame_66).wait(14).call(this.frame_80).wait(1).call(this.frame_81).wait(10).call(this.frame_91).wait(1).call(this.frame_92).wait(19).call(this.frame_111).wait(1).call(this.frame_112).wait(8).call(this.frame_120).wait(1).call(this.frame_121).wait(10).call(this.frame_131).wait(1).call(this.frame_132).wait(13).call(this.frame_145).wait(1).call(this.frame_146).wait(13).call(this.frame_159).wait(1).call(this.frame_160).wait(20).call(this.frame_180).wait(1).call(this.frame_181).wait(19).call(this.frame_200).wait(1).call(this.frame_201).wait(27).call(this.frame_228).wait(1).call(this.frame_229).wait(11).call(this.frame_240).wait(1).call(this.frame_241).wait(10).call(this.frame_251).wait(1).call(this.frame_252).wait(15).call(this.frame_267).wait(1).call(this.frame_268).wait(26).call(this.frame_294).wait(1).call(this.frame_295).wait(17).call(this.frame_312).wait(1).call(this.frame_313).wait(11).call(this.frame_324).wait(1).call(this.frame_325).wait(17).call(this.frame_342).wait(1).call(this.frame_343).wait(6).call(this.frame_349).wait(1).call(this.frame_350).wait(18).call(this.frame_368).wait(1).call(this.frame_369).wait(14).call(this.frame_383).wait(1).call(this.frame_384).wait(19).call(this.frame_403).wait(1).call(this.frame_404).wait(11).call(this.frame_415).wait(1).call(this.frame_416).wait(16).call(this.frame_432).wait(1).call(this.frame_433).wait(8).call(this.frame_441).wait(1).call(this.frame_442).wait(14).call(this.frame_456).wait(1).call(this.frame_457).wait(19).call(this.frame_476).wait(1).call(this.frame_477).wait(13).call(this.frame_490).wait(1));
    
        // effect_look_to_right2
        this.instance = new lib.drop1_v2("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(18.8,-392.95,1.1645,1.1645,0,0,180);
        this.instance._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(313).to({_off:false},0).wait(1).to({regX:1.2,regY:1.8,skewX:33.7496,skewY:213.7496,x:44.4,y:-401.95,alpha:0.4141},0).wait(1).to({regX:0,regY:0,skewX:44.9995,skewY:224.9995,x:56.05,y:-406.25,alpha:0.2188},0).to({_off:true},1).wait(1).to({_off:false,skewX:0,skewY:180,x:18.8,y:-392.95,alpha:1},0).wait(1).to({regX:1.2,regY:1.8,skewX:33.7496,skewY:213.7496,x:44.4,y:-401.95,alpha:0.4141},0).wait(1).to({regX:0,regY:0,skewX:44.9995,skewY:224.9995,x:56.05,y:-406.25,alpha:0.2188},0).to({_off:true},1).wait(5).to({_off:false,skewX:0,skewY:180,x:18.8,y:-392.95,alpha:1},0).wait(1).to({regX:1.2,regY:1.8,skewX:33.7496,skewY:213.7496,x:44.4,y:-401.95,alpha:0.4141},0).wait(1).to({regX:0,regY:0,skewX:44.9995,skewY:224.9995,x:56.05,y:-406.25,alpha:0.2188},0).to({_off:true},1).wait(1).to({_off:false,skewX:0,skewY:180,x:18.8,y:-392.95,alpha:1},0).wait(1).to({regX:1.2,regY:1.8,skewX:33.7496,skewY:213.7496,x:44.4,y:-401.95,alpha:0.4141},0).wait(1).to({regX:0,regY:0,skewX:44.9995,skewY:224.9995,x:56.05,y:-406.25,alpha:0.2188},0).to({_off:true},1).wait(125).to({_off:false,skewX:0,skewY:180,x:18.8,y:-392.95,alpha:1},0).wait(1).to({regX:1.2,regY:1.8,skewX:33.7496,skewY:213.7496,x:44.4,y:-401.95,alpha:0.4141},0).wait(1).to({regX:0,regY:0,skewX:44.9995,skewY:224.9995,x:56.05,y:-406.25,alpha:0.2188},0).to({_off:true},1).wait(1).to({_off:false,skewX:0,skewY:180,x:18.8,y:-392.95,alpha:1},0).wait(1).to({regX:1.2,regY:1.8,skewX:33.7496,skewY:213.7496,x:44.4,y:-401.95,alpha:0.4141},0).wait(1).to({regX:0,regY:0,skewX:44.9995,skewY:224.9995,x:56.05,y:-406.25,alpha:0.2188},0).to({_off:true},1).wait(27));
    
        // effect_look_to_right
        this.instance_1 = new lib.spread_flower_pink("synched",0,false);
        this.instance_1.parent = this;
        this.instance_1.setTransform(-39.35,-300.2,1.4807,1.4807,0,0,180);
    
        this.instance_2 = new lib.good_effect("synched",0,false);
        this.instance_2.parent = this;
        this.instance_2.setTransform(-39.3,-300.25,1.481,1.481);
    
        this.instance_3 = new lib.notice();
        this.instance_3.parent = this;
        this.instance_3.setTransform(34.35,-388.5,1.1857,1.1857,169.9438,0,0,-29.1,20.5);
        this.instance_3._off = true;
    
        this.instance_4 = new lib.laugh("synched",0);
        this.instance_4.parent = this;
        this.instance_4.setTransform(50.35,-384.95,1.4181,1.4181,0,-35.8376,144.173,-30.2,20.5);
        this.instance_4._off = true;
    
        this.instance_5 = new lib.chord("synched",0,false);
        this.instance_5.parent = this;
        this.instance_5.setTransform(27.25,-302.55,1.0026,1.0026,-6.2632,0,0,-23.4,76.9);
    
        this.instance_6 = new lib.question();
        this.instance_6.parent = this;
        this.instance_6.setTransform(22.55,-385.45,1.053,1.053,29.448);
        this.instance_6.alpha = 0;
        this.instance_6._off = true;
    
        this.instance_7 = new lib.mc_exclamation("synched",0,false);
        this.instance_7.parent = this;
        this.instance_7.setTransform(26.3,-400.85,1.0929,1.0929,0,30,-150.0007,-0.1,0.1);
    
        this.instance_8 = new lib.drop1a("synched",0);
        this.instance_8.parent = this;
        this.instance_8.setTransform(22,-383.35,1,1,0,0,0,-0.5,0.2);
        this.instance_8._off = true;
    
        this.instance_9 = new lib.drop2_v2("synched",0);
        this.instance_9.parent = this;
        this.instance_9.setTransform(20.6,-383.2,0.9876,0.9876,0,-14.9998,165.0002);
        this.instance_9._off = true;
    
        this.instance_10 = new lib.shock("synched",0);
        this.instance_10.parent = this;
        this.instance_10.setTransform(27.05,-386.2,1.3878,1.3878,0,121.2396,-58.7604);
    
        this.instance_11 = new lib.sigh("synched",0);
        this.instance_11.parent = this;
        this.instance_11.setTransform(0.6,-232.9,1,1,0,0,180);
        this.instance_11.alpha = 0.6016;
        this.instance_11._off = true;
    
        this.instance_12 = new lib.heart("synched",0);
        this.instance_12.parent = this;
        this.instance_12.setTransform(27.25,-342.35,0.4532,0.4532,0,0,180);
        this.instance_12._off = true;
    
        this.instance_13 = new lib.angry("synched",0);
        this.instance_13.parent = this;
        this.instance_13.setTransform(33.8,-363.6,0.5276,0.5276);
        this.instance_13._off = true;
    
        this.instance_14 = new lib.mc_punpun();
        this.instance_14.parent = this;
        this.instance_14.setTransform(-97.25,-412.75,1.1377,1.1377);
    
        this.instance_15 = new lib.concent_wrapper("synched",0,false);
        this.instance_15.parent = this;
        this.instance_15.setTransform(-39.55,-300.8,1,1,0,0,0,-0.5,-0.1);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},37).to({state:[{t:this.instance_2}]},10).to({state:[]},10).to({state:[{t:this.instance_3}]},76).to({state:[]},2).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).to({state:[{t:this.instance_3}]},2).to({state:[]},2).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},15).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).to({state:[{t:this.instance_5,p:{scaleX:1.0026,scaleY:1.0026,rotation:-6.2632,x:27.25,y:-302.55}}]},1).to({state:[]},20).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_6}]},7).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[]},1).to({state:[{t:this.instance_6}]},6).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[]},1).to({state:[{t:this.instance_7}]},5).to({state:[{t:this.instance_8}]},16).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},9).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).to({state:[{t:this.instance_9}]},24).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[]},1).to({state:[{t:this.instance_9}]},5).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[]},1).to({state:[{t:this.instance_10}]},11).to({state:[]},1).to({state:[{t:this.instance_10}]},1).to({state:[]},1).to({state:[{t:this.instance_10}]},1).to({state:[]},1).to({state:[{t:this.instance_11}]},3).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[]},1).to({state:[{t:this.instance_12}]},11).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_12}]},3).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},1).to({state:[]},1).to({state:[{t:this.instance_13}]},6).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},5).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[]},1).to({state:[{t:this.instance_14}]},2).to({state:[]},12).to({state:[{t:this.instance_15}]},17).to({state:[{t:this.instance_5,p:{scaleX:0.8297,scaleY:0.8297,rotation:-6.2559,x:1.55,y:-284.35}}]},9).to({state:[]},14).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[]},1).wait(27));
        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(133).to({_off:false},0).to({_off:true},2).wait(1).to({_off:false,scaleX:1.1864,scaleY:1.1864,rotation:169.9437,y:-388.55},0).wait(3).to({regX:-28.8,x:33.95,y:-388.4,alpha:0.6944},0).wait(1).to({alpha:0.4444},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.1111},0).wait(1).to({alpha:0.0278},0).wait(1).to({regX:-29.1,x:34.35,y:-388.55,alpha:0},0).to({_off:true},1).wait(2).to({_off:false,scaleX:1.1857,scaleY:1.1857,rotation:169.9438,y:-388.5,alpha:1},0).to({_off:true},2).wait(1).to({_off:false,scaleX:1.1864,scaleY:1.1864,rotation:169.9437,y:-388.55},0).wait(3).to({regX:-28.8,x:33.95,y:-388.4,alpha:0.6944},0).wait(1).to({alpha:0.4444},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.1111},0).wait(1).to({alpha:0.0278},0).wait(1).to({regX:-29.1,x:34.35,y:-388.55,alpha:0},0).to({_off:true},1).wait(332));
        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(160).to({_off:false},0).wait(15).to({regX:-30.3,regY:20.4,skewX:-35.827,skewY:144.1725,x:50.4,y:-385.1},0).wait(1).to({regX:-31.4,regY:22.1,x:53.1,y:-384.05,alpha:0.5625,startPosition:1},0).wait(1).to({alpha:0.25,startPosition:2},0).wait(1).to({alpha:0.0625,startPosition:3},0).wait(1).to({regX:-30.3,regY:20.4,x:50.4,y:-385.1,alpha:0,startPosition:19},0).to({_off:true},1).wait(311));
        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(202).to({_off:false},0).wait(1).to({regX:-0.2,regY:0.2,x:30.2,y:-398.4,alpha:0.5556},0).wait(1).to({x:35,y:-406.25,alpha:0.8889},0).wait(1).to({regX:0,regY:0,x:36.95,y:-409.05,alpha:1},0).wait(1).to({regX:-0.2,regY:0.2,x:36.3,y:-408.3},0).wait(1).to({x:35.25,y:-406.45},0).wait(1).to({x:33.5,y:-403.35},0).wait(1).to({regX:0,regY:0,x:31.35,y:-399.15},0).to({x:32.1,y:-400.5},2).wait(8).to({regX:-0.2,regY:0.2,x:31.45,y:-399.8,alpha:0.9298},0).wait(1).to({x:30.35,y:-397.85,alpha:0.692},0).wait(1).to({x:28.75,y:-395,alpha:0.339},0).wait(1).to({x:27.55,y:-392.9,alpha:0.0788},0).wait(1).to({regX:0,regY:0,y:-392.35,alpha:0},0).to({_off:true},1).wait(6).to({_off:false,x:22.55,y:-385.45},0).wait(1).to({regX:-0.2,regY:0.2,x:30.2,y:-398.4,alpha:0.5556},0).wait(1).to({x:35,y:-406.25,alpha:0.8889},0).wait(1).to({regX:0,regY:0,x:36.95,y:-409.05,alpha:1},0).wait(1).to({regX:-0.2,regY:0.2,x:36.3,y:-408.3},0).wait(1).to({x:35.25,y:-406.45},0).wait(1).to({x:33.5,y:-403.35},0).wait(1).to({regX:0,regY:0,x:31.35,y:-399.15},0).to({x:32.1,y:-400.5},2).wait(3).to({regX:-0.2,regY:0.2,x:31.45,y:-399.8,alpha:0.9298},0).wait(1).to({x:30.35,y:-397.85,alpha:0.692},0).wait(1).to({x:28.75,y:-395,alpha:0.339},0).wait(1).to({x:27.55,y:-392.9,alpha:0.0788},0).wait(1).to({regX:0,regY:0,y:-392.35,alpha:0},0).to({_off:true},1).wait(244));
        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(268).to({_off:false},0).wait(1).to({regX:0.5,regY:-0.6,x:23,y:-379.65},0).wait(1).to({y:-375.8},0).wait(1).to({y:-372.55},0).wait(1).to({y:-369.9},0).wait(1).to({y:-367.8},0).wait(1).to({y:-366.3},0).wait(1).to({y:-365.4},0).wait(1).to({regX:-0.5,regY:0.2,x:22,y:-364.35},0).wait(9).to({startPosition:0},0).wait(1).to({regX:0.5,regY:-0.6,x:23,y:-365.15,alpha:0.4444},0).wait(1).to({alpha:0.1111},0).wait(1).to({regX:-0.5,regY:0.2,x:22,y:-364.35,alpha:0},0).to({_off:true},1).wait(202));
        this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(313).to({_off:false},0).wait(1).to({scaleX:1.1203,scaleY:1.1203,skewX:18.7494,skewY:198.7494,x:52.025,y:-378.5875,alpha:0.4141},0).wait(1).to({scaleX:1.1645,scaleY:1.1645,skewX:29.9991,skewY:209.9991,x:62.5,y:-377.05,alpha:0.2188},0).to({_off:true},1).wait(1).to({_off:false,scaleX:0.9876,scaleY:0.9876,skewX:-14.9998,skewY:165.0002,x:20.6,y:-383.2,alpha:1},0).wait(1).to({scaleX:1.1203,scaleY:1.1203,skewX:18.7494,skewY:198.7494,x:52.025,y:-382.975,alpha:0.4141},0).wait(1).to({scaleX:1.1645,scaleY:1.1645,skewX:29.9991,skewY:209.9991,x:62.5,y:-382.9,alpha:0.2188},0).to({_off:true},1).wait(5).to({_off:false,scaleX:0.9876,scaleY:0.9876,skewX:-14.9998,skewY:165.0002,x:20.6,y:-383.2,alpha:1},0).wait(1).to({scaleX:1.1203,scaleY:1.1203,skewX:18.7494,skewY:198.7494,x:52.025,y:-378.5875,alpha:0.4141},0).wait(1).to({scaleX:1.1645,scaleY:1.1645,skewX:29.9991,skewY:209.9991,x:62.5,y:-377.05,alpha:0.2188},0).to({_off:true},1).wait(1).to({_off:false,scaleX:0.9876,scaleY:0.9876,skewX:-14.9998,skewY:165.0002,x:20.6,y:-383.2,alpha:1},0).wait(1).to({scaleX:1.1203,scaleY:1.1203,skewX:18.7494,skewY:198.7494,x:52.025,y:-382.975,alpha:0.4141},0).wait(1).to({scaleX:1.1645,scaleY:1.1645,skewX:29.9991,skewY:209.9991,x:62.5,y:-382.9,alpha:0.2188},0).to({_off:true},1).wait(125).to({_off:false,scaleX:0.9876,scaleY:0.9876,skewX:-14.9998,skewY:165.0002,x:20.6,y:-383.2,alpha:1},0).wait(1).to({scaleX:1.1203,scaleY:1.1203,skewX:18.7494,skewY:198.7494,x:52.025,y:-378.5875,alpha:0.4141},0).wait(1).to({scaleX:1.1645,scaleY:1.1645,skewX:29.9991,skewY:209.9991,x:62.5,y:-377.05,alpha:0.2188},0).to({_off:true},1).wait(1).to({_off:false,scaleX:0.9876,scaleY:0.9876,skewX:-14.9998,skewY:165.0002,x:20.6,y:-383.2,alpha:1},0).wait(1).to({scaleX:1.1203,scaleY:1.1203,skewX:18.7494,skewY:198.7494,x:52.025,y:-382.975,alpha:0.4141},0).wait(1).to({scaleX:1.1645,scaleY:1.1645,skewX:29.9991,skewY:209.9991,x:62.5,y:-382.9,alpha:0.2188},0).to({_off:true},1).wait(27));
        this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(351).to({_off:false},0).wait(1).to({x:1.6,y:-231.9,alpha:1},0).wait(1).to({regX:0.9,x:1.7,y:-230.95,alpha:0.8965},0).wait(1).to({x:3.05,y:-229.75,alpha:0.7636},0).wait(1).to({x:4.65,y:-228.3,alpha:0.6048},0).wait(1).to({x:6.45,y:-226.7,alpha:0.4229},0).wait(1).to({x:8.45,y:-224.85,alpha:0.2205},0).wait(1).to({regX:0,x:11.6,y:-222.9,alpha:0},0).to({_off:true},1).wait(132));
        this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(370).to({_off:false},0).wait(1).to({regX:2.3,regY:1,scaleX:0.8633,scaleY:0.8633,x:29,y:-356.5},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:32.25,y:-362.35},0).wait(1).to({regX:2.3,regY:1,scaleX:0.9896,scaleY:0.9896,x:29.7,y:-360.2},0).wait(1).to({scaleX:0.9586,scaleY:0.9586,x:29.15,y:-356.95},0).wait(1).to({regX:0,regY:0,scaleX:0.9068,scaleY:0.9068,x:30.25,y:-352.35},0).to({scaleX:1,scaleY:1,x:31.25,y:-356.35},2).wait(3).to({scaleX:1.1165,scaleY:1.1165},0).wait(1).to({regX:2.3,regY:1,scaleX:0.8111,scaleY:0.8111,x:28.65,y:-355.35,alpha:0.3262},0).wait(1).to({regX:0,regY:0,scaleX:0.7092,scaleY:0.7092,x:30.25,y:-356.1,alpha:0.1016},0).to({_off:true},1).wait(108));
        this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(389).to({_off:false},0).wait(1).to({scaleX:1.0714,scaleY:1.0714,y:-367.35},0).wait(1).to({scaleX:1.2527,scaleY:1.2527,y:-368.6},0).wait(1).to({scaleX:0.9864,scaleY:0.9864},0).wait(1).to({scaleX:0.8976,scaleY:0.8976},0).wait(5).to({startPosition:0},0).wait(1).to({alpha:0.5009},0).wait(1).to({alpha:0.2014},0).wait(1).to({alpha:0.1016},0).to({_off:true},1).wait(89));
    
        // clook_to_right
        this.c = new lib.character1_body();
        this.c.name = "c";
        this.c.parent = this;
    
        this.timeline.addTween(cjs.Tween.get(this.c).wait(9).to({regX:-18,regY:-144,x:-18,y:-152.4},0).wait(1).to({regX:0,regY:0,x:0,y:-10},0).wait(1).to({regX:-18,regY:-144,x:-18,y:-153.2},0).wait(1).to({y:-150.45},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({y:1},0).wait(1).to({y:0},0).wait(1).to({y:2},0).wait(1).to({regX:-18,regY:-144,x:-18,y:-149.5},0).wait(1).to({regX:0,regY:0,x:0,y:-8},0).wait(1).to({regX:-18,regY:-144,x:-18,y:-149.75},0).wait(1).to({y:-142.8},0).wait(1).to({regX:0,regY:0,x:0,y:4},0).wait(1).to({regX:-18,regY:-144,x:-18,y:-140.75},0).wait(1).to({y:-143.15},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({y:2},0).wait(1).to({y:-7},0).wait(1).to({regX:-18,regY:-144,x:-18,y:-148.95},0).wait(1).to({y:-143.05},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({y:-7},0).wait(1).to({regX:-18,regY:-144,x:-18,y:-148.95},0).wait(1).to({y:-143.05},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({regX:-18,regY:-144,x:-18,y:-143.1},0).wait(1).to({y:-143.75},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({y:6},0).wait(1).to({regX:-18,regY:-144,x:-18,y:-153},0).wait(1).to({regX:0,regY:0,x:0,y:-14},0).wait(1).to({regX:-18,regY:-144,x:-18,y:-156.95},0).wait(1).to({y:-153.35},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({regX:-18,regY:-144,x:-18,y:-142},0).wait(1).to({regX:0,regY:0,x:0,y:-1},0).wait(1).to({regX:-18,regY:-144,x:-18,y:-144.25},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({y:6},0).wait(1).to({regX:-18,regY:-144,x:-18,y:-153},0).wait(1).to({regX:0,regY:0,x:0,y:-14},0).wait(1).to({regX:-18,regY:-144,x:-18,y:-156.95},0).wait(1).to({y:-153.35},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({regX:-18,regY:-144,x:-18,y:-142},0).wait(1).to({regX:0,regY:0,x:0,y:-1},0).wait(1).to({regX:-18,regY:-144,x:-18,y:-144.25},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:-18,regY:-144,x:-18,y:-143.4},0).wait(1).to({y:-141},0).wait(1).to({y:-138.65},0).wait(1).to({regX:0,regY:0,x:0,y:6},0).wait(1).to({regX:-18,regY:-144,x:-18,y:-138.65},0).wait(1).to({y:-141},0).wait(1).to({y:-143.4},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:-18,regY:-144,x:-18,y:-143.85},0).wait(1).to({y:-143.3},0).wait(1).to({y:-142.2},0).wait(1).to({y:-140.85},0).wait(1).to({y:-139.75},0).wait(1).to({y:-139.2},0).wait(1).to({regX:0,regY:0,x:0,y:5},0).wait(1).to({regX:-18,regY:-144,x:-18,y:-139.2},0).wait(1).to({y:-139.75},0).wait(1).to({y:-140.85},0).wait(1).to({y:-142.2},0).wait(1).to({y:-143.3},0).wait(1).to({y:-143.85},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({y:6},2).wait(1).to({regX:-18,regY:-144,x:-18,y:-139.25},0).wait(1).to({y:-142.8},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).to({y:6},2).wait(1).to({regX:-18,regY:-144,x:-18,y:-141.8},0).wait(1).to({y:-143.65},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:-18,regY:-144,rotation:0.0244,x:-17.95,y:-143.95},0).wait(1).to({rotation:0.1092,x:-17.65,y:-143.7},0).wait(1).to({rotation:0.275,x:-16.95,y:-143.2},0).wait(1).to({rotation:0.538,x:-15.95,y:-142.4},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:0.8681,x:-14.65,y:-141.35},0).wait(1).to({rotation:1.1673,x:-13.5,y:-140.45},0).wait(1).to({rotation:1.367,x:-12.75,y:-139.85},0).wait(1).to({rotation:1.4695,x:-12.35,y:-139.5},0).wait(1).to({regX:0,regY:0,rotation:1.4989,x:1.95,y:4.95},0).wait(1).to({regX:-18,regY:-144,rotation:1.479,x:-12.4,y:-139.55},0).wait(1).to({rotation:1.4111,x:-12.65,y:-139.75},0).wait(1).to({rotation:1.2801,x:-13.15,y:-140.15},0).wait(1).to({rotation:1.0711,x:-13.95,y:-140.8},0).wait(1).to({rotation:0.7884,x:-15,y:-141.65},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.4865,x:-16.2,y:-142.55},0).wait(1).to({rotation:0.2415,x:-17.15,y:-143.3},0).wait(1).to({rotation:0.0832,x:-17.75,y:-143.8},0).wait(1).to({rotation:0.0011,x:-18,y:-144},0).wait(1).to({regX:0,regY:0,rotation:-0.0227,x:0,y:0},0).wait(1).to({rotation:0},0).wait(1).to({regX:-18,regY:-144,rotation:0.0244,x:-17.95,y:-143.95},0).wait(1).to({rotation:0.1092,x:-17.65,y:-143.7},0).wait(1).to({rotation:0.275,x:-16.95,y:-143.2},0).wait(1).to({rotation:0.538,x:-15.95,y:-142.4},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:0.8681,x:-14.65,y:-141.35},0).wait(1).to({rotation:1.1673,x:-13.5,y:-140.45},0).wait(1).to({rotation:1.367,x:-12.75,y:-139.85},0).wait(1).to({rotation:1.4695,x:-12.35,y:-139.5},0).wait(1).to({regX:0,regY:0,rotation:1.4989,x:1.95,y:4.95},0).wait(1).to({regX:-18,regY:-144,rotation:1.4793,x:-12.4,y:-139.55},0).wait(1).to({rotation:1.4124,x:-12.65,y:-139.75},0).wait(1).to({rotation:1.2834,x:-13.15,y:-140.15},0).wait(1).to({rotation:1.0775,x:-13.95,y:-140.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.7991,x:-15,y:-141.65},0).wait(1).to({rotation:0.5016,x:-16.15,y:-142.55},0).wait(1).to({rotation:0.2603,x:-17.1,y:-143.3},0).wait(1).to({rotation:0.1043,x:-17.7,y:-143.8},0).wait(1).to({rotation:0.0235,x:-17.95,y:-144},0).wait(1).to({regX:0,regY:0,rotation:0,x:0,y:0},0).wait(16).to({regX:-18,regY:-144,x:-18,y:-149.55},0).wait(1).to({y:-151.45},0).wait(1).to({regX:0,regY:0,x:0,y:-8},0).wait(1).to({regX:-18,regY:-144,x:-18,y:-151.35},0).wait(1).to({y:-149.25},0).wait(1).to({regX:0,regY:0,x:0,y:2},0).wait(1).to({y:1},0).wait(1).to({y:0},0).wait(7).to({regX:-18,regY:-144,x:-18,y:-152.4},0).wait(1).to({regX:0,regY:0,x:0,y:-10},0).wait(1).to({regX:-18,regY:-144,x:-18,y:-153.2},0).wait(1).to({y:-150.45},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({y:1},0).wait(1).to({y:0},0).wait(15).to({regX:-18,regY:-144,rotation:-0.0253,x:-18.05,y:-143.9},0).wait(1).to({rotation:-0.1129,x:-18.2,y:-143.3},0).wait(1).to({rotation:-0.2845,x:-18.35,y:-142.25},0).wait(1).to({rotation:-0.5565,x:-18.7,y:-140.65},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-0.898,x:-19.1,y:-138.45},0).wait(1).to({rotation:-1.2075,x:-19.5,y:-136.55},0).wait(1).to({rotation:-1.4141,x:-19.75,y:-135.3},0).wait(1).to({rotation:-1.5201,x:-19.85,y:-134.65},0).wait(1).to({regX:0,regY:0,rotation:-1.5505,x:2,y:9},0).wait(1).to({regX:-18,regY:-144,rotation:-1.5305,x:-19.9,y:-134.6},0).wait(1).to({rotation:-1.4624,x:-19.8,y:-135.05},0).wait(1).to({rotation:-1.3309,x:-19.65,y:-135.85},0).wait(1).to({rotation:-1.121,x:-19.4,y:-137.15},0).wait(1).to({rotation:-0.8372,x:-19.05,y:-138.95},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.534,x:-18.7,y:-140.85},0).wait(1).to({rotation:-0.2881,x:-18.4,y:-142.35},0).wait(1).to({rotation:-0.1291,x:-18.2,y:-143.35},0).wait(1).to({rotation:-0.0467,x:-18.1,y:-143.9},0).wait(1).to({regX:0,regY:0,rotation:-0.0227,x:0,y:0},0).wait(1).to({rotation:0},0).wait(1).to({regX:-18,regY:-144,rotation:0.1421,x:-17.5,y:-143.6},0).wait(1).to({rotation:0.6998,x:-15.35,y:-141.9},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:1.327,x:-12.9,y:-139.95},0).wait(1).to({regX:0,regY:0,rotation:1.4989,x:1.95,y:4.95},0).wait(18).to({regX:-18,regY:-144,rotation:1.4399,x:-12.55,y:-139.65},0).wait(1).to({rotation:1.2196,x:-13.4,y:-140.35},0).wait(1).to({rotation:0.7884,x:-15,y:-141.65},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.3138,x:-16.85,y:-143.05},0).wait(1).to({rotation:0.0482,x:-17.9,y:-143.85},0).wait(1).to({regX:0,regY:0,rotation:-0.0227,x:0,y:0},0).wait(1).to({rotation:0},0).wait(1).to({regX:-18,regY:-144,rotation:0.0865,x:-17.7,y:-143.8},0).wait(1).to({rotation:0.4213,x:-16.4,y:-142.75},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:0.9973,x:-14.2,y:-140.95},0).wait(1).to({rotation:1.3945,x:-12.65,y:-139.75},0).wait(1).to({regX:0,regY:0,rotation:1.4989,x:1.95,y:4.95},0).wait(8).to({regX:-18,regY:-144,rotation:1.4399,x:-12.55,y:-139.65},0).wait(1).to({rotation:1.2196,x:-13.4,y:-140.35},0).wait(1).to({rotation:0.7884,x:-15,y:-141.65},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.3138,x:-16.85,y:-143.05},0).wait(1).to({rotation:0.0482,x:-17.9,y:-143.85},0).wait(1).to({regX:0,regY:0,rotation:-0.0227,x:0,y:0},0).wait(5).to({rotation:0},0).wait(1).to({regX:-18,regY:-144,x:-18,y:-152.4},0).wait(1).to({regX:0,regY:0,x:0,y:-10},0).wait(1).to({regX:-18,regY:-144,x:-18,y:-153.2},0).wait(1).to({y:-150.45},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({y:1},0).wait(1).to({y:0},0).wait(9).to({x:1,y:4},1,cjs.Ease.get(1)).wait(1).to({regX:-18,regY:-144,x:-20.75,y:-136.25},0).wait(1).to({regX:0,regY:0,x:-4,y:9},0).to({x:0,y:13},4).wait(11).to({regX:-18,regY:-144,x:-18,y:-131.75},0).wait(1).to({y:-134.7},0).wait(1).to({y:-139.65},0).wait(1).to({y:-143.1},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(5).to({y:-1},0).wait(1).to({regX:-18,regY:-144,x:-18,y:-143},0).wait(1).to({y:-137.05},0).wait(1).to({regX:0,regY:0,x:0,y:9},0).to({y:8},2).wait(1).to({y:9},0).wait(2).to({regX:-18,regY:-144,x:-18,y:-136.2},0).wait(1).to({y:-140.5},0).wait(1).to({y:-144.8},0).wait(1).to({regX:0,regY:0,x:0,y:-2},0).wait(1).to({regX:-18,regY:-144,x:-18,y:-144.5},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(6).to({regX:-18,regY:-144,x:-18,y:-150.7},0).wait(1).to({regX:0,regY:0,x:0,y:-8},0).wait(1).to({regX:-18,regY:-144,x:-18,y:-150.85},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:-18,regY:-144,x:-18,y:-152.4},0).wait(1).to({regX:0,regY:0,x:0,y:-10},0).wait(1).to({regX:-18,regY:-144,x:-18,y:-153.2},0).wait(1).to({y:-150.45},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({y:1},0).wait(1).to({y:0},0).wait(1).to({x:1,y:4},1,cjs.Ease.get(1)).wait(1).to({regX:-18,regY:-144,x:-20.75,y:-136.25},0).wait(1).to({regX:0,regY:0,x:-4,y:9},0).to({x:0,y:13},4).wait(8).to({regX:-18,regY:-144,x:-18,y:-133.25},0).wait(1).to({y:-141},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({y:2},0).wait(1).to({regX:-18,regY:-144,x:-18,y:-145},0).wait(1).to({regX:0,regY:0,x:0,y:-2},0).wait(1).to({regX:-18,regY:-144,x:-18,y:-144.15},0).wait(1).to({regX:0,regY:0,x:0,y:2},0).wait(1).to({regX:-18,regY:-144,x:-18,y:-143.5},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:-18,regY:-144,x:-18,y:-143.4},0).wait(1).to({y:-141},0).wait(1).to({y:-138.65},0).wait(1).to({regX:0,regY:0,x:0,y:6},0).wait(1).to({regX:-18,regY:-144,x:-18,y:-138.6},0).wait(1).to({y:-138.9},0).wait(1).to({regX:0,regY:0,x:0,y:5},0).wait(5).to({regX:-18,regY:-144,x:-18,y:-139.4},0).wait(1).to({y:-140.9},0).wait(1).to({y:-143.15},0).wait(1).to({y:-144.6},0).wait(1).to({regX:0,regY:0,x:0,y:-1},0).wait(1).to({regX:-18,regY:-144,x:-18,y:-144.25},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({y:5},0).wait(1).to({regX:-18,regY:-144,x:-18,y:-151.6},0).wait(1).to({regX:0,regY:0,x:0,y:-10},0).wait(1).to({regX:-18,regY:-144,x:-18,y:-153.2},0).wait(1).to({y:-150.45},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({y:1},0).wait(1).to({y:0},0).wait(9).to({regX:-18,regY:-144,x:-18,y:-151.5},0).wait(1).to({regX:0,regY:0,x:0,y:-10},0).wait(2).to({regX:-18,regY:-144,x:-18,y:-152},0).wait(1).to({y:-146},0).wait(1).to({regX:0,regY:0,x:0,y:8},0).to({y:5},2).wait(7).to({regX:-18,regY:-144,x:-18,y:-139.35},0).wait(1).to({y:-140.55},0).wait(1).to({y:-142.5},0).wait(1).to({y:-143.7},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({y:2},0).wait(1).to({y:-7},0).wait(1).to({regX:-18,regY:-144,x:-18,y:-148.95},0).wait(1).to({y:-143.05},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({y:-7},0).wait(1).to({regX:-18,regY:-144,x:-18,y:-148.95},0).wait(1).to({y:-143.05},0).wait(1).to({regX:0,regY:0,x:0,y:3},0).wait(1).to({regX:-18,regY:-144,x:-18,y:-143.1},0).wait(1).to({y:-143.75},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:-18,regY:-144,x:-15,y:-140.6},0).wait(1).to({regX:0,regY:0,x:4,y:4.55},0).to({x:-2,y:8.8},2).wait(1).to({regX:-18,regY:-144,x:-18.85,y:-134.55},0).wait(1).to({x:-18.2,y:-134.15},0).wait(1).to({regX:0,regY:0,x:0,y:10},0).wait(5).to({regX:-18,regY:-144,x:-18,y:-134.7},0).wait(1).to({y:-137.15},0).wait(1).to({y:-140.85},0).wait(1).to({y:-143.35},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(11).to({regX:-18,regY:-144,x:-18,y:-143.4},0).wait(1).to({y:-141},0).wait(1).to({y:-138.65},0).wait(1).to({regX:0,regY:0,x:0,y:6},0).wait(1).to({regX:-18,regY:-144,x:-18,y:-138.65},0).wait(1).to({y:-141},0).wait(1).to({y:-143.4},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(8).to({regX:-18,regY:-144,rotation:0.0244,x:-17.95,y:-143.95},0).wait(1).to({rotation:0.1092,x:-17.65,y:-143.7},0).wait(1).to({rotation:0.275,x:-16.95,y:-143.2},0).wait(1).to({rotation:0.538,x:-15.95,y:-142.4},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:0.8681,x:-14.65,y:-141.35},0).wait(1).to({rotation:1.1673,x:-13.5,y:-140.45},0).wait(1).to({rotation:1.367,x:-12.75,y:-139.85},0).wait(1).to({rotation:1.4695,x:-12.35,y:-139.5},0).wait(1).to({regX:0,regY:0,rotation:1.4989,x:1.95,y:4.95},0).wait(1).to({regX:-18,regY:-144,rotation:1.479,x:-12.4,y:-139.55},0).wait(1).to({rotation:1.4111,x:-12.65,y:-139.75},0).wait(1).to({rotation:1.2801,x:-13.15,y:-140.15},0).wait(1).to({rotation:1.0711,x:-13.95,y:-140.8},0).wait(1).to({rotation:0.7884,x:-15,y:-141.65},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.4865,x:-16.2,y:-142.55},0).wait(1).to({rotation:0.2415,x:-17.15,y:-143.3},0).wait(1).to({rotation:0.0832,x:-17.75,y:-143.8},0).wait(1).to({rotation:0.0011,x:-18,y:-144},0).wait(1).to({regX:0,regY:0,rotation:-0.0227,x:0,y:0},0).wait(1).to({rotation:0,y:-1},0).wait(1).to({regX:-18,regY:-144,x:-18,y:-143},0).wait(1).to({y:-137.05},0).wait(1).to({regX:0,regY:0,x:0,y:9},0).to({y:8},2).wait(1).to({y:9},0).wait(2).to({regX:-18,regY:-144,x:-18,y:-136.2},0).wait(1).to({y:-140.5},0).wait(1).to({y:-144.8},0).wait(1).to({regX:0,regY:0,x:0,y:-2},0).wait(1).to({regX:-18,regY:-144,x:-18,y:-144.5},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-456.9,-701.1,825,924.8);
    
    
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
    (lib._411_4 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{end0:14,scene1:15,end1:179,scene2:180,end2:317,scene3:318,end3:541,scene4:542,end4:690,scene5:691,end5:847,scene6:848,end6:1027,scene7:1028,end7:1221});
    
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
            exportRoot._g.m1 = "우와아……!";
            exportRoot._g.m2 = "";
            exportRoot._g.m3 = "";
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 1);
            
            //this.ch1.gotoAndPlay("swing");
        }
        this.frame_56 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._g.m2 = "같은』이라고들 하지만,";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 2);
            
            //this.ch1.gotoAndPlay("jump");
        }
        this.frame_106 = function() {
            exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
            exportRoot._g.m3 = "정말이었구나!";
            exportRoot._u.setText();
        }
        this.frame_151 = function() {
            exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
            exportRoot._g.m4 = this.m.t[exportRoot._g.idx][4];
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 5);
        }
        this.frame_179 = function() {
            exportRoot._u.updateTalk();
            
            exportRoot._u.setFace("ch1", 5);
            
            this.ch1.gotoAndPlay("standby");
        }
        this.frame_180 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._g.m2 = "";
            exportRoot._g.m3 = "";
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 1);
        }
        this.frame_199 = function() {
            exportRoot._u.setFace("ch1", 3);
        }
        this.frame_220 = function() {
            exportRoot._g.m2 = "이렇게 예쁜걸!";
            exportRoot._u.setText();
            exportRoot._u.setFace("ch1", 8);
            
            //this.ch1.gotoAndPlay("nod");
        }
        this.frame_246 = function() {
            exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
            exportRoot._g.m3 = "";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 5);
        }
        this.frame_277 = function() {
            exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 1);
        }
        this.frame_299 = function() {
            exportRoot._g.m4 = this.m.t[exportRoot._g.idx][4];
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 3);
        }
        this.frame_317 = function() {
            exportRoot._u.updateTalk();
            
            exportRoot._u.setFace("ch1", 3);
        }
        this.frame_318 = function() {
            exportRoot._g.m1 = "…";
            exportRoot._g.m2 = "";
            exportRoot._g.m3 = "";
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
        }
        this.frame_326 = function() {
            exportRoot._g.m1 = "……";
            exportRoot._u.setText();
        }
        this.frame_336 = function() {
            exportRoot._g.m1 = "……헷?";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch1", 1);
        }
        this.frame_349 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._u.setText();
            
            this.ch1.c.gotoAndStop("nf");
            exportRoot._u.setFace("ch2", 1);
        }
        this.frame_392 = function() {
            exportRoot._g.m2 = "라니,";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch2", 1);
            
            this.ch2.gotoAndPlay("jump");
        }
        this.frame_403 = function() {
            exportRoot._g.m2 = "라니, 그,";
            exportRoot._u.setText();
        }
        this.frame_417 = function() {
            exportRoot._g.m2 = "라니, 그, 그래!?";
            exportRoot._u.setText();
            
            this.ch2.gotoAndPlay("shy_swing");
        }
        this.frame_445 = function() {
            exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
            exportRoot._u.setText();
            
            this.ch2.gotoAndPlay("nod_chord");
            
            exportRoot._u.setFace("ch2", 3);
        }
        this.frame_471 = function() {
            exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
            exportRoot._g.m4 = "해야지,";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch2", 1);
        }
        this.frame_527 = function() {
            exportRoot._u.setFace("ch2", 4);
        }
        this.frame_528 = function() {
            exportRoot._g.m4 = this.m.t[exportRoot._g.idx][4];
            exportRoot._u.setText();
            
            
            
            this.ch2.gotoAndPlay("jump");
        }
        this.frame_541 = function() {
            exportRoot._u.updateTalk();
            
            exportRoot._u.setFace("ch2", 4);
        }
        this.frame_542 = function() {
            exportRoot._g.m1 = "그보다,";
            exportRoot._g.m2 = "";
            exportRoot._g.m3 = "";
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch2", 3);
        }
        this.frame_561 = function() {
            exportRoot._g.m1 = "그보다, 찬찬히 보는 건,";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch2", 1);
        }
        this.frame_580 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._g.m2 = "해두라구♪";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch2", 3);
            
            this.ch2.gotoAndPlay("nod");
        }
        this.frame_611 = function() {
            exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
            exportRoot._g.m3 = "";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch2", 1);
        }
        this.frame_631 = function() {
            exportRoot._g.m3 = "바라는 거,";
            exportRoot._u.setText();
            
            //exportRoot._u.setFace("ch2", 3);
            
            this.ch1.gotoAndPlay("nod");
        }
        this.frame_643 = function() {
            exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            
            this.ch2.gotoAndPlay("swing");
            
            exportRoot._u.setFace("ch2", 3);
        }
        this.frame_669 = function() {
            exportRoot._g.m4 = "봐,";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch2", 2);
            
            
            
            
            //this.ch2.gotoAndPlay("swing_off");
        }
        this.frame_678 = function() {
            exportRoot._g.m4 = this.m.t[exportRoot._g.idx][4];
            exportRoot._u.setText();
            
            ///exportRoot._u.setFace("ch2", 5);
        }
        this.frame_682 = function() {
            this.bg2.gotoAndStop("star");
        }
        this.frame_690 = function() {
            exportRoot._u.updateTalk();
            
            //exportRoot._u.setFace("ch2", 5);
            
            //this.ch2.gotoAndStop("standby");
            
            exportRoot._u.setFace("ch2", 2);
        }
        this.frame_691 = function() {
            exportRoot._g.m1 = "아,";
            exportRoot._g.m2 = "";
            exportRoot._g.m3 = "";
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch2", 2);
            
            this.ch2.gotoAndPlay("notice");
        }
        this.frame_701 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch2", 3);
        }
        this.frame_719 = function() {
            exportRoot._g.m2 = "프로듀서 씨의 소원 중에,";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch2", 1);
        }
        this.frame_749 = function() {
            exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch2", 3);
            this.ch2.gotoAndPlay("nod");
        }
        this.frame_765 = function() {
            exportRoot._g.m3 = "내가 이루게 해줘.";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch2", 1);
            this.ch2.gotoAndPlay("swing_on");
        }
        this.frame_795 = function() {
            exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
            exportRoot._g.m4 = "어떤 소원인가는……";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch2", 3);
            this.ch2.gotoAndPlay("swing_off");
        }
        this.frame_830 = function() {
            exportRoot._g.m4 = this.m.t[exportRoot._g.idx][4];
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch2", 1);
            this.ch2.gotoAndPlay("nod2");
        }
        this.frame_847 = function() {
            exportRoot._u.updateTalk();
            
            exportRoot._u.setFace("ch2", 1);
            
            
            this.ch2.gotoAndStop("standby");
        }
        this.frame_848 = function() {
            exportRoot._g.m1 = "…";
            exportRoot._g.m2 = "";
            exportRoot._g.m3 = "";
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch2", 3);
        }
        this.frame_856 = function() {
            exportRoot._g.m1 = "……";
            exportRoot._u.setText();
        }
        this.frame_865 = function() {
            exportRoot._g.m1 = "……응.";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch2", 7);
            this.ch2.gotoAndPlay("nod2");
        }
        this.frame_879 = function() {
            exportRoot._g.m1 = "……응. 그래.";
            exportRoot._u.setText();
            
            
            exportRoot._u.setFace("ch2", 1);
            //this.ch2.gotoAndPlay("swing");
        }
        this.frame_895 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._u.setText();
            
            //exportRoot._u.setFace("ch2", 3);
            //this.ch2.gotoAndPlay("nod");
        }
        this.frame_906 = function() {
            exportRoot._g.m2 = "프로듀서 씨를,";
            exportRoot._u.setText();
            exportRoot._u.setFace("ch2", 3);
        }
        this.frame_930 = function() {
            exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
            exportRoot._g.m3 = "프로듀서로 만든다.";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch2", 1);
            this.ch2.gotoAndPlay("nod3");
        }
        this.frame_937 = function() {
            exportRoot._u.setFace("ch2", 1);
        }
        this.frame_958 = function() {
            //exportRoot._u.setFace("ch2", 4);
            this.ch2.gotoAndPlay("jump");
        }
        this.frame_976 = function() {
            exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch2", 3);
            this.ch2.gotoAndPlay("nod");
        }
        this.frame_993 = function() {
            exportRoot._g.m4 = this.m.t[exportRoot._g.idx][4];
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch2", 1);
        }
        this.frame_1011 = function() {
            this.ch2.gotoAndPlay("swing");
        }
        this.frame_1027 = function() {
            exportRoot._u.updateTalk();
            
            exportRoot._u.setFace("ch2", 1);
        }
        this.frame_1028 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._g.m2 = "";
            exportRoot._g.m3 = "";
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch2", 2);
        }
        this.frame_1058 = function() {
            exportRoot._g.m2 = "눈부시게♪";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch2", 5);
        }
        this.frame_1076 = function() {
            exportRoot._g.m2 = "눈부시게♪ 라니";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch2", 1);
        }
        this.frame_1090 = function() {
            exportRoot._g.m2 = "눈부시게♪ 라니 이래선,";
            exportRoot._u.setText();
            
            //exportRoot._u.setFace("ch2", 3);
        }
        this.frame_1105 = function() {
            exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
            exportRoot._g.m3 = "비는 게 아니라,";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch2", 3);
        }
        this.frame_1133 = function() {
            exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch2", 1);
        }
        this.frame_1157 = function() {
            exportRoot._g.m4 = "뭐,";
            exportRoot._u.setText();
            
            exportRoot._u.setFace("ch2", 7);
        }
        this.frame_1175 = function() {
            exportRoot._g.m4 = this.m.t[exportRoot._g.idx][4];
            exportRoot._u.setText();
            
            
            exportRoot._u.setFace("ch2", 1);
        }
        this.frame_1195 = function() {
            // finish指定時は exportRoot._g.m の後ろの数字をsetTextの2つ目の引数に指定する
            exportRoot._g.m5 = this.m.t[exportRoot._g.idx][5];
            exportRoot._u.setText("finish", 5);
        }
        this.frame_1221 = function() {
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
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1).call(this.frame_15).wait(41).call(this.frame_56).wait(50).call(this.frame_106).wait(45).call(this.frame_151).wait(28).call(this.frame_179).wait(1).call(this.frame_180).wait(19).call(this.frame_199).wait(21).call(this.frame_220).wait(26).call(this.frame_246).wait(31).call(this.frame_277).wait(22).call(this.frame_299).wait(18).call(this.frame_317).wait(1).call(this.frame_318).wait(8).call(this.frame_326).wait(10).call(this.frame_336).wait(13).call(this.frame_349).wait(43).call(this.frame_392).wait(11).call(this.frame_403).wait(14).call(this.frame_417).wait(28).call(this.frame_445).wait(26).call(this.frame_471).wait(56).call(this.frame_527).wait(1).call(this.frame_528).wait(13).call(this.frame_541).wait(1).call(this.frame_542).wait(19).call(this.frame_561).wait(19).call(this.frame_580).wait(31).call(this.frame_611).wait(20).call(this.frame_631).wait(12).call(this.frame_643).wait(26).call(this.frame_669).wait(9).call(this.frame_678).wait(4).call(this.frame_682).wait(8).call(this.frame_690).wait(1).call(this.frame_691).wait(10).call(this.frame_701).wait(18).call(this.frame_719).wait(30).call(this.frame_749).wait(16).call(this.frame_765).wait(30).call(this.frame_795).wait(35).call(this.frame_830).wait(17).call(this.frame_847).wait(1).call(this.frame_848).wait(8).call(this.frame_856).wait(9).call(this.frame_865).wait(14).call(this.frame_879).wait(16).call(this.frame_895).wait(11).call(this.frame_906).wait(24).call(this.frame_930).wait(7).call(this.frame_937).wait(21).call(this.frame_958).wait(18).call(this.frame_976).wait(17).call(this.frame_993).wait(18).call(this.frame_1011).wait(16).call(this.frame_1027).wait(1).call(this.frame_1028).wait(30).call(this.frame_1058).wait(18).call(this.frame_1076).wait(14).call(this.frame_1090).wait(15).call(this.frame_1105).wait(28).call(this.frame_1133).wait(24).call(this.frame_1157).wait(18).call(this.frame_1175).wait(20).call(this.frame_1195).wait(26).call(this.frame_1221).wait(5));
    
        // shield
        this.instance = new lib.shield();
        this.instance.parent = this;
        this.instance.setTransform(120,160);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1226));
    
        // sender
        this.sender = new lib.sender();
        this.sender.name = "sender";
        this.sender.parent = this;
        this.sender.setTransform(-100,0);
        this.sender._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.sender).wait(1221).to({_off:false},0).wait(5));
    
        // SP_loader
        this.loader = new lib.voice_loader_container();
        this.loader.name = "loader";
        this.loader.parent = this;
        this.loader.setTransform(190.05,12,1,1,0,0,0,-50.1,11);
    
        this.timeline.addTween(cjs.Tween.get(this.loader).wait(1226));
    
        // place
        this.instance_1 = new lib.tie();
        this.instance_1.parent = this;
        this.instance_1.setTransform(120,155);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({alpha:0.1992},3,cjs.Ease.get(1)).to({_off:true},1).wait(1207));
    
        // SP_pusher
        this.instance_2 = new lib.pusher_next();
        this.instance_2.parent = this;
        this.instance_2.setTransform(120,290);
        this.instance_2._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off:false},0).to({_off:true},3).wait(1211));
    
        // first_scene
        this.instance_3 = new lib.dark();
        this.instance_3.parent = this;
        this.instance_3.setTransform(121,155,1,1,0,0,0,1,0);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},15).wait(1211));
    
        // window
        this.window_1 = new lib.window_container();
        this.window_1.name = "window_1";
        this.window_1.parent = this;
        this.window_1.setTransform(2,321.1);
    
        this.timeline.addTween(cjs.Tween.get(this.window_1).wait(15).to({y:301.1},0).wait(1).to({regX:132.8,regY:98.8,x:134.8,y:398.6},0).wait(1).to({y:394.65},0).wait(1).to({y:388},0).wait(1).to({y:378.75},0).wait(1).to({y:367.25},0).wait(1).to({y:354.25},0).wait(1).to({y:340.85},0).wait(1).to({y:328.45},0).wait(1).to({y:318.45},0).wait(1).to({y:312},0).wait(1).to({regX:0,regY:0,x:2,y:211},0).wait(1).to({regX:132.8,regY:98.8,x:134.8,y:310.3},0).wait(1).to({y:311.9},0).wait(1).to({regX:0,regY:0,x:2,y:214},0).wait(1154).to({regX:132.8,regY:98.8,x:134.8,y:313.9},0).wait(1).to({y:317.75},0).wait(1).to({y:325},0).wait(1).to({y:336.4},0).wait(1).to({y:351.7},0).wait(1).to({y:368.85},0).wait(1).to({y:384.15},0).wait(1).to({y:395.55},0).wait(1).to({y:402.8},0).wait(1).to({y:406.65},0).wait(1).to({regX:0,regY:0,x:2,y:309},0).to({_off:true},1).wait(32));
    
        // window
        this.window_2 = new lib.finish_text_container();
        this.window_2.name = "window_2";
        this.window_2.parent = this;
        this.window_2.setTransform(120,322);
        this.window_2._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.window_2).wait(1194).to({_off:false},0).wait(1).to({regX:3.5,regY:59.1,x:123.5,y:380.6},0).wait(1).to({y:378.9},0).wait(1).to({y:375.6},0).wait(1).to({y:370.25},0).wait(1).to({y:362.8},0).wait(1).to({y:354.45},0).wait(1).to({y:347.5},0).wait(1).to({y:342.95},0).wait(1).to({y:340.65},0).wait(1).to({regX:0,regY:0,x:120,y:280.9},0).to({y:282.9},3).wait(19));
    
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
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]},1194).wait(32));
    
        // glitters
        this.glitters = new lib.glitters();
        this.glitters.name = "glitters";
        this.glitters.parent = this;
        this.glitters._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.glitters).wait(1194).to({_off:false},0).wait(32));
    
        // SP_blur
        this.ranko_finish_blur = new lib.ranko_finish_blur();
        this.ranko_finish_blur.name = "ranko_finish_blur";
        this.ranko_finish_blur.parent = this;
        this.ranko_finish_blur._off = true;
        this.ranko_finish_blur.filters = [new cjs.ColorFilter(1, 1, 1, 1, 220, 220, 220, 0)];
        this.ranko_finish_blur.cache(-2,-2,244,314);
    
        this.timeline.addTween(cjs.Tween.get(this.ranko_finish_blur).wait(1194).to({_off:false},0).wait(1).to({regX:120,regY:155,x:120,y:155,alpha:0.9968},0).wait(1).to({alpha:0.9867},0).wait(1).to({alpha:0.9688},0).wait(1).to({alpha:0.9423},0).wait(1).to({alpha:0.906},0).wait(1).to({alpha:0.8587},0).wait(1).to({alpha:0.7993},0).wait(1).to({alpha:0.7268},0).wait(1).to({alpha:0.641},0).wait(1).to({alpha:0.5432},0).wait(1).to({alpha:0.4371},0).wait(1).to({alpha:0.3301},0).wait(1).to({alpha:0.2319},0).wait(1).to({alpha:0.1514},0).wait(1).to({alpha:0.0941},0).wait(1).to({alpha:0.0612},0).wait(1).to({regX:0,regY:0,x:0,y:0,alpha:0.0508},0).to({_off:true},1).wait(14));
    
        // character_face
        this.fns = new lib.finish_1();
        this.fns.name = "fns";
        this.fns.parent = this;
        this.fns.setTransform(120,168,1,1,0,0,0,120,168);
        this.fns._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.fns).wait(1194).to({_off:false},0).wait(32));
    
        // white_mask
        this.instance_9 = new lib.white_mask();
        this.instance_9.parent = this;
        this.instance_9.setTransform(120,155,1,1,0,0,0,120,155);
        this.instance_9.alpha = 0.0508;
        this.instance_9._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1182).to({_off:false},0).to({alpha:0.8984},11).to({_off:true},1).wait(32));
    
        // overlay_black
        this.instance_10 = new lib.dark();
        this.instance_10.parent = this;
        this.instance_10.setTransform(120,155);
        this.instance_10._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(15).to({_off:false},0).to({alpha:0},3).to({_off:true},1).wait(80).to({_off:false},0).to({alpha:1},5).to({alpha:0},7).to({_off:true},1).wait(1114));
    
        // overlay_top
        this.instance_11 = new lib.overlay_black();
        this.instance_11.parent = this;
        this.instance_11.setTransform(120,-2);
        this.instance_11._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(15).to({_off:false},0).wait(1).to({regX:1,x:121,y:-3.2},0).wait(1).to({y:-6.85},0).wait(1).to({y:-12.75},0).wait(1).to({y:-20.7},0).wait(1).to({y:-30.4},0).wait(1).to({y:-41.5},0).wait(1).to({y:-53.55},0).wait(1).to({y:-65.9},0).wait(1).to({y:-78.05},0).wait(1).to({y:-89.25},0).wait(1).to({y:-98.95},0).wait(1).to({y:-106.45},0).wait(1).to({y:-111.3},0).wait(1).to({regX:0,x:120,y:-113},0).to({_off:true},75).wait(1122));
    
        // overlay_bottom
        this.instance_12 = new lib.overlay_black();
        this.instance_12.parent = this;
        this.instance_12.setTransform(120,308);
        this.instance_12._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(15).to({_off:false},0).wait(1).to({regX:1,x:121,y:308.45},0).wait(1).to({y:309.8},0).wait(1).to({y:312.05},0).wait(1).to({y:315.05},0).wait(1).to({y:318.75},0).wait(1).to({y:322.95},0).wait(1).to({y:327.5},0).wait(1).to({y:332.15},0).wait(1).to({y:336.75},0).wait(1).to({y:341},0).wait(1).to({y:344.65},0).wait(1).to({y:347.5},0).wait(1).to({y:349.35},0).wait(1).to({regX:0,x:120,y:350},0).to({_off:true},75).wait(1122));
    
        // effect
        this.instance_13 = new lib.gliter_container();
        this.instance_13.parent = this;
        this.instance_13.setTransform(143.7,-12.25,1.0599,1.0599,-4.2877,0,0,-0.1,2.5);
        this.instance_13._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(15).to({_off:false},0).wait(545).to({regX:0,scaleX:1.1997,scaleY:1.1997,rotation:-4.2598,x:145.75,y:-12.2},35).wait(631));
    
        // book
        this.instance_14 = new lib.book_1_1();
        this.instance_14.parent = this;
        this.instance_14.setTransform(127.3,244.4,0.47,0.47,0,0,0,0.2,0);
        this.instance_14._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(104).to({_off:false},0).wait(77).to({regX:0,scaleX:0.4701,scaleY:0.4701,x:127.2031,y:244.4557},0).wait(1).to({scaleX:0.4706,scaleY:0.4706,x:127.2129,y:244.6331},0).wait(1).to({scaleX:0.4714,scaleY:0.4714,x:127.2303,y:244.9491},0).wait(1).to({scaleX:0.4726,scaleY:0.4726,x:127.2564,y:245.4228},0).wait(1).to({scaleX:0.4743,scaleY:0.4743,x:127.2923,y:246.0739},0).wait(1).to({scaleX:0.4766,scaleY:0.4766,x:127.3389,y:246.9196},0).wait(1).to({scaleX:0.4793,scaleY:0.4793,x:127.3968,y:247.9693},0).wait(1).to({scaleX:0.4825,scaleY:0.4825,x:127.4654,y:249.2141},0).wait(1).to({scaleX:0.4862,scaleY:0.4862,x:127.5427,y:250.6152},0).wait(1).to({scaleX:0.4901,scaleY:0.4901,x:127.6245,y:252.0981},0).wait(1).to({scaleX:0.4939,scaleY:0.4939,x:127.7053,y:253.5634},0).wait(1).to({scaleX:0.4974,scaleY:0.4974,x:127.7798,y:254.9147},0).wait(1).to({scaleX:0.5005,scaleY:0.5005,x:127.8443,y:256.0845},0).wait(1).to({scaleX:0.503,scaleY:0.503,x:127.897,y:257.0418},0).wait(1).to({scaleX:0.5049,scaleY:0.5049,x:127.938,y:257.7843},0).wait(1).to({scaleX:0.5063,scaleY:0.5063,x:127.9678,y:258.3259},0).wait(1).to({scaleX:0.5073,scaleY:0.5073,x:127.9878,y:258.687},0).wait(1).to({scaleX:0.5078,scaleY:0.5078,x:127.9989,y:258.8891},0).wait(1).to({regX:0.5,regY:0.3,scaleX:0.508,scaleY:0.508,x:128.1,y:258.95},0).wait(150).to({alpha:0.0117},11,cjs.Ease.get(1)).to({_off:true},1).wait(865));
    
        // ch
        this.ch1 = new lib.character1_container();
        this.ch1.name = "ch1";
        this.ch1.parent = this;
        this.ch1.setTransform(-178,570,0.5,0.5);
    
        this.timeline.addTween(cjs.Tween.get(this.ch1).wait(15).to({scaleX:0.74,scaleY:0.74,x:-264.4,y:344.85},0).wait(89).to({regX:0.2,regY:0.1,scaleX:0.4685,scaleY:0.4685,x:135.8,y:222.4},0).wait(77).to({regX:-37.7,regY:-239.6,scaleX:0.4686,scaleY:0.4686,x:118.05,y:110.05},0).wait(1).to({scaleX:0.4691,scaleY:0.4691,x:118,y:110.1},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:118.05,y:110.2},0).wait(1).to({scaleX:0.4713,scaleY:0.4713,x:118,y:110.3},0).wait(1).to({scaleX:0.473,scaleY:0.473,y:110.4},0).wait(1).to({scaleX:0.4753,scaleY:0.4753,y:110.55},0).wait(1).to({scaleX:0.4782,scaleY:0.4782,x:117.95,y:110.75},0).wait(1).to({scaleX:0.4816,scaleY:0.4816,y:111},0).wait(1).to({scaleX:0.4854,scaleY:0.4854,y:111.25},0).wait(1).to({scaleX:0.4895,scaleY:0.4895,y:111.5},0).wait(1).to({scaleX:0.4935,scaleY:0.4935,y:111.8},0).wait(1).to({scaleX:0.4972,scaleY:0.4972,x:117.9,y:112.1},0).wait(1).to({scaleX:0.5004,scaleY:0.5004,y:112.25},0).wait(1).to({scaleX:0.503,scaleY:0.503,y:112.45},0).wait(1).to({scaleX:0.505,scaleY:0.505,x:117.85,y:112.6},0).wait(1).to({scaleX:0.5065,scaleY:0.5065,y:112.7},0).wait(1).to({scaleX:0.5075,scaleY:0.5075,y:112.75},0).wait(1).to({scaleX:0.508,scaleY:0.508,y:112.8},0).wait(1).to({regX:0.3,regY:0.2,scaleX:0.5082,scaleY:0.5082,x:137.15,y:234.65},0).wait(150).to({alpha:0.0117},11,cjs.Ease.get(1)).to({_off:true},1).wait(865));
    
        // bg
        this.bg = new lib.bg_zoom_half();
        this.bg.name = "bg";
        this.bg.parent = this;
        this.bg.setTransform(-1.95,-279.15,1.27,1.27);
    
        this.timeline.addTween(cjs.Tween.get(this.bg).wait(15).to({scaleX:0.74,scaleY:0.74,x:-170.45,y:39.6},0).to({x:-185.8},88).wait(1).to({regX:-0.2,scaleX:0.4685,scaleY:0.4685,x:-15.55,y:-9.3},0).wait(77).to({regX:305,regY:350,scaleX:0.4686,scaleY:0.4686,x:127.5,y:154.7},0).wait(1).to({scaleX:0.4691,scaleY:0.4691,y:154.8},0).wait(1).to({scaleX:0.47,scaleY:0.47,y:154.95},0).wait(1).to({scaleX:0.4713,scaleY:0.4713,y:155.15},0).wait(1).to({scaleX:0.473,scaleY:0.473,x:127.55,y:155.4},0).wait(1).to({scaleX:0.4753,scaleY:0.4753,x:127.6,y:155.8},0).wait(1).to({scaleX:0.4782,scaleY:0.4782,y:156.25},0).wait(1).to({scaleX:0.4816,scaleY:0.4816,x:127.65,y:156.85},0).wait(1).to({scaleX:0.4854,scaleY:0.4854,x:127.7,y:157.45},0).wait(1).to({scaleX:0.4895,scaleY:0.4895,x:127.8,y:158.1},0).wait(1).to({scaleX:0.4935,scaleY:0.4935,x:127.85,y:158.75},0).wait(1).to({scaleX:0.4972,scaleY:0.4972,x:127.9,y:159.4},0).wait(1).to({scaleX:0.5004,scaleY:0.5004,x:127.95,y:159.9},0).wait(1).to({scaleX:0.503,scaleY:0.503,x:128,y:160.35},0).wait(1).to({scaleX:0.505,scaleY:0.505,y:160.65},0).wait(1).to({scaleX:0.5065,scaleY:0.5065,y:160.9},0).wait(1).to({scaleX:0.5075,scaleY:0.5075,x:128.05,y:161.05},0).wait(1).to({scaleX:0.508,scaleY:0.508,y:161.15},0).wait(1).to({regX:-0.3,regY:-0.1,scaleX:0.5082,scaleY:0.5082,x:-27.05,y:-16.7},0).wait(150).to({alpha:0.0117},11,cjs.Ease.get(1)).to({_off:true},1).wait(865));
    
        // book
        this.instance_15 = new lib.book_1_1();
        this.instance_15.parent = this;
        this.instance_15.setTransform(151.9,169.9,0.889,0.889,0,0,0,0.6,0.4);
        this.instance_15._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(349).to({_off:false},0).wait(1).to({regX:0,regY:0,x:151.35,y:169.7315},0).wait(1).to({y:170.2903},0).wait(1).to({y:171.2488},0).wait(1).to({y:172.6309},0).wait(1).to({y:174.4619},0).wait(1).to({y:176.7685},0).wait(1).to({y:179.5787},0).wait(1).to({y:182.9214},0).wait(1).to({y:186.826},0).wait(1).to({y:191.3217},0).wait(1).to({y:196.4367},0).wait(1).to({y:202.1965},0).wait(1).to({y:208.6225},0).wait(1).to({y:215.7292},0).wait(1).to({y:223.5219},0).wait(1).to({y:231.9926},0).wait(1).to({y:241.1166},0).wait(1).to({y:250.8486},0).wait(1).to({y:261.12},0).wait(1).to({y:271.8371},0).wait(1).to({y:282.8822},0).wait(1).to({y:294.1174},0).wait(1).to({y:305.3914},0).wait(1).to({y:316.5489},0).wait(1).to({y:327.4401},0).wait(1).to({y:337.9302},0).wait(1).to({y:347.9054},0).wait(1).to({y:357.2772},0).wait(1).to({y:365.9824},0).wait(1).to({y:373.9817},0).wait(1).to({y:381.2564},0).wait(1).to({y:387.8042},0).wait(1).to({y:393.6357},0).wait(1).to({y:398.7703},0).wait(1).to({y:403.2339},0).wait(1).to({y:407.0561},0).wait(1).to({y:410.2685},0).wait(1).to({y:412.9034},0).wait(1).to({y:414.9929},0).wait(1).to({y:416.5681},0).wait(1).to({y:417.659},0).wait(1).to({y:418.294},0).wait(1).to({regX:0.6,regY:0.4,x:151.9,y:418.85},0).wait(151).to({regX:0,regY:0,scaleX:0.8889,scaleY:0.8889,x:151.3459,y:418.4626},0).wait(1).to({scaleX:0.8885,scaleY:0.8885,x:151.3331,y:418.3466},0).wait(1).to({scaleX:0.8878,scaleY:0.8878,x:151.311,y:418.1462},0).wait(1).to({scaleX:0.8869,scaleY:0.8869,x:151.2788,y:417.8547},0).wait(1).to({scaleX:0.8856,scaleY:0.8856,x:151.2358,y:417.4654},0).wait(1).to({scaleX:0.884,scaleY:0.884,x:151.1813,y:416.971},0).wait(1).to({scaleX:0.882,scaleY:0.882,x:151.1143,y:416.3638},0).wait(1).to({scaleX:0.8796,scaleY:0.8796,x:151.034,y:415.6363},0).wait(1).to({scaleX:0.8769,scaleY:0.8769,x:150.9396,y:414.7813},0).wait(1).to({scaleX:0.8736,scaleY:0.8736,x:150.8305,y:413.7922},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:150.706,y:412.6646},0).wait(1).to({scaleX:0.8658,scaleY:0.8658,x:150.5661,y:411.3965},0).wait(1).to({scaleX:0.8612,scaleY:0.8612,x:150.4109,y:409.9901},0).wait(1).to({scaleX:0.8562,scaleY:0.8562,x:150.2413,y:408.4536},0).wait(1).to({scaleX:0.8509,scaleY:0.8509,x:150.0591,y:406.802},0).wait(1).to({scaleX:0.8452,scaleY:0.8452,x:149.8667,y:405.0587},0).wait(1).to({scaleX:0.8393,scaleY:0.8393,x:149.6676,y:403.2547},0).wait(1).to({scaleX:0.8333,scaleY:0.8333,x:149.4659,y:401.4271},0).wait(1).to({scaleX:0.8274,scaleY:0.8274,x:149.266,y:399.6158},0).wait(1).to({scaleX:0.8217,scaleY:0.8217,x:149.0723,y:397.8599},0).wait(1).to({scaleX:0.8163,scaleY:0.8163,x:148.8884,y:396.1933},0).wait(1).to({scaleX:0.8112,scaleY:0.8112,x:148.7173,y:394.6428},0).wait(1).to({scaleX:0.8066,scaleY:0.8066,x:148.561,y:393.2269},0).wait(1).to({scaleX:0.8025,scaleY:0.8025,x:148.4207,y:391.9559},0).wait(1).to({scaleX:0.7988,scaleY:0.7988,x:148.2969,y:390.8338},0).wait(1).to({scaleX:0.7956,scaleY:0.7956,x:148.1894,y:389.8596},0).wait(1).to({scaleX:0.7929,scaleY:0.7929,x:148.0977,y:389.0288},0).wait(1).to({scaleX:0.7907,scaleY:0.7907,x:148.0211,y:388.3346},0).wait(1).to({scaleX:0.7888,scaleY:0.7888,x:147.9587,y:387.7693},0).wait(1).to({scaleX:0.7874,scaleY:0.7874,x:147.9096,y:387.3245},0).wait(1).to({scaleX:0.7863,scaleY:0.7863,x:147.8729,y:386.992},0).wait(1).to({scaleX:0.7855,scaleY:0.7855,x:147.8477,y:386.7636},0).wait(1).to({scaleX:0.7851,scaleY:0.7851,x:147.8332,y:386.6317},0).wait(1).to({regX:0.7,regY:0.4,scaleX:0.785,scaleY:0.785,x:148.3,y:386.85},0).wait(93).to({regX:0,regY:0,x:147.75,y:386.55},0).wait(1).to({scaleX:0.7845,scaleY:0.7845,x:147.6008,y:386.4653},0).wait(1).to({scaleX:0.7829,scaleY:0.7829,x:147.0894,y:386.1748},0).wait(1).to({scaleX:0.7798,scaleY:0.7798,x:146.0848,y:385.6042},0).wait(1).to({scaleX:0.7746,scaleY:0.7746,x:144.3933,y:384.6434},0).wait(1).to({scaleX:0.7665,scaleY:0.7665,x:141.7565,y:383.1458},0).wait(1).to({scaleX:0.7548,scaleY:0.7548,x:137.9913,y:381.0071},0).wait(1).to({scaleX:0.7408,scaleY:0.7408,x:133.4286,y:378.4156},0).wait(1).to({scaleX:0.727,scaleY:0.727,x:128.98,y:375.8888},0).wait(1).to({scaleX:0.7155,scaleY:0.7155,x:125.2535,y:373.7722},0).wait(1).to({scaleX:0.7064,scaleY:0.7064,x:122.3007,y:372.0951},0).wait(1).to({scaleX:0.6992,scaleY:0.6992,x:119.9807,y:370.7774},0).wait(1).to({scaleX:0.6936,scaleY:0.6936,x:118.1499,y:369.7375},0).wait(1).to({scaleX:0.6891,scaleY:0.6891,x:116.6985,y:368.9131},0).wait(1).to({scaleX:0.6855,scaleY:0.6855,x:115.547,y:368.259},0).wait(1).to({scaleX:0.6827,scaleY:0.6827,x:114.6374,y:367.7424},0).wait(1).to({scaleX:0.6805,scaleY:0.6805,x:113.9271,y:367.3389},0).wait(1).to({scaleX:0.6789,scaleY:0.6789,x:113.3835,y:367.0302},0).wait(1).to({scaleX:0.6776,scaleY:0.6776,x:112.9818,y:366.802},0).wait(1).to({scaleX:0.6768,scaleY:0.6768,x:112.7023,y:366.6433},0).wait(1).to({scaleX:0.6762,scaleY:0.6762,x:112.5293,y:366.545},0).wait(1).to({scaleX:0.676,scaleY:0.676,x:112.45,y:366.5},0).wait(12).to({scaleX:0.6762,scaleY:0.6762,x:112.5892,y:366.4865},0).wait(1).to({scaleX:0.6768,scaleY:0.6768,x:113.0338,y:366.4435},0).wait(1).to({scaleX:0.678,scaleY:0.678,x:113.8291,y:366.3665},0).wait(1).to({scaleX:0.6797,scaleY:0.6797,x:115.0256,y:366.2507},0).wait(1).to({scaleX:0.6821,scaleY:0.6821,x:116.6744,y:366.0912},0).wait(1).to({scaleX:0.6852,scaleY:0.6852,x:118.8176,y:365.8838},0).wait(1).to({scaleX:0.689,scaleY:0.689,x:121.4676,y:365.6273},0).wait(1).to({scaleX:0.6935,scaleY:0.6935,x:124.5758,y:365.3265},0).wait(1).to({scaleX:0.6984,scaleY:0.6984,x:128.0007,y:364.9951},0).wait(1).to({scaleX:0.7035,scaleY:0.7035,x:131.5093,y:364.6556},0).wait(1).to({scaleX:0.7083,scaleY:0.7083,x:134.8352,y:364.3337},0).wait(1).to({scaleX:0.7125,scaleY:0.7125,x:137.764,y:364.0503},0).wait(1).to({scaleX:0.716,scaleY:0.716,x:140.1805,y:363.8164},0).wait(1).to({scaleX:0.7187,scaleY:0.7187,x:142.0584,y:363.6347},0).wait(1).to({scaleX:0.7207,scaleY:0.7207,x:143.4261,y:363.5023},0).wait(1).to({scaleX:0.722,scaleY:0.722,x:144.335,y:363.4144},0).wait(1).to({scaleX:0.7227,scaleY:0.7227,x:144.8418,y:363.3653},0).wait(1).to({scaleX:0.723,scaleY:0.723,x:145,y:363.35},0).wait(129).to({regX:0.7,regY:0.5,x:145.5,y:363.7},0).wait(1).to({regX:0,regY:0,scaleX:0.7231,scaleY:0.7231,x:145.0033,y:363.3989},0).wait(1).to({scaleX:0.7235,scaleY:0.7235,x:145.0134,y:363.551},0).wait(1).to({scaleX:0.7242,scaleY:0.7242,x:145.031,y:363.8148},0).wait(1).to({scaleX:0.7253,scaleY:0.7253,x:145.0567,y:364.1998},0).wait(1).to({scaleX:0.7267,scaleY:0.7267,x:145.0912,y:364.7161},0).wait(1).to({scaleX:0.7285,scaleY:0.7285,x:145.1351,y:365.3742},0).wait(1).to({scaleX:0.7307,scaleY:0.7307,x:145.1893,y:366.1851},0).wait(1).to({scaleX:0.7333,scaleY:0.7333,x:145.2543,y:367.1593},0).wait(1).to({scaleX:0.7364,scaleY:0.7364,x:145.3309,y:368.3065},0).wait(1).to({scaleX:0.7401,scaleY:0.7401,x:145.4195,y:369.6337},0).wait(1).to({scaleX:0.7442,scaleY:0.7442,x:145.5203,y:371.144},0).wait(1).to({scaleX:0.7487,scaleY:0.7487,x:145.6331,y:372.8341},0).wait(1).to({scaleX:0.7538,scaleY:0.7538,x:145.7571,y:374.6911},0).wait(1).to({scaleX:0.7592,scaleY:0.7592,x:145.8906,y:376.6912},0).wait(1).to({scaleX:0.765,scaleY:0.765,x:146.0312,y:378.7974},0).wait(1).to({scaleX:0.7708,scaleY:0.7708,x:146.1757,y:380.9617},0).wait(1).to({scaleX:0.7767,scaleY:0.7767,x:146.3203,y:383.1283},0).wait(1).to({scaleX:0.7825,scaleY:0.7825,x:146.4613,y:385.2403},0).wait(1).to({scaleX:0.7879,scaleY:0.7879,x:146.5952,y:387.2466},0).wait(1).to({scaleX:0.793,scaleY:0.793,x:146.7194,y:389.1066},0).wait(1).to({scaleX:0.7975,scaleY:0.7975,x:146.832,y:390.7927},0).wait(1).to({scaleX:0.8016,scaleY:0.8016,x:146.9319,y:392.2895},0).wait(1).to({scaleX:0.8052,scaleY:0.8052,x:147.0188,y:393.5921},0).wait(1).to({scaleX:0.8082,scaleY:0.8082,x:147.093,y:394.703},0).wait(1).to({scaleX:0.8107,scaleY:0.8107,x:147.1549,y:395.6295},0).wait(1).to({scaleX:0.8127,scaleY:0.8127,x:147.2051,y:396.3821},0).wait(1).to({scaleX:0.8143,scaleY:0.8143,x:147.2445,y:396.9721},0).wait(1).to({scaleX:0.8155,scaleY:0.8155,x:147.2738,y:397.4117},0).wait(1).to({scaleX:0.8163,scaleY:0.8163,x:147.2939,y:397.7124},0).wait(1).to({scaleX:0.8168,scaleY:0.8168,x:147.3054,y:397.8853},0).wait(1).to({regX:0.7,regY:0.6,scaleX:0.817,scaleY:0.817,x:147.9,y:398.4},0).wait(150).to({regX:0,regY:0,scaleX:0.8166,scaleY:0.8166,x:147.3405,y:397.7405},0).wait(1).to({scaleX:0.8152,scaleY:0.8152,x:147.3109,y:397.2438},0).wait(1).to({scaleX:0.813,scaleY:0.813,x:147.2594,y:396.3806},0).wait(1).to({scaleX:0.8097,scaleY:0.8097,x:147.1842,y:395.1194},0).wait(1).to({scaleX:0.8052,scaleY:0.8052,x:147.0832,y:393.4257},0).wait(1).to({scaleX:0.7995,scaleY:0.7995,x:146.9543,y:391.2637},0).wait(1).to({scaleX:0.7925,scaleY:0.7925,x:146.7953,y:388.5968},0).wait(1).to({scaleX:0.7841,scaleY:0.7841,x:146.6041,y:385.3896},0).wait(1).to({scaleX:0.7741,scaleY:0.7741,x:146.3789,y:381.6117},0).wait(1).to({scaleX:0.7626,scaleY:0.7626,x:146.1183,y:377.2421},0).wait(1).to({scaleX:0.7496,scaleY:0.7496,x:145.8223,y:372.2767},0).wait(1).to({scaleX:0.735,scaleY:0.735,x:145.492,y:366.737},0).wait(1).to({scaleX:0.7191,scaleY:0.7191,x:145.1308,y:360.6795},0).wait(1).to({scaleX:0.702,scaleY:0.702,x:144.7447,y:354.2031},0).wait(1).to({scaleX:0.6843,scaleY:0.6843,x:144.3421,y:347.4499},0).wait(1).to({scaleX:0.6662,scaleY:0.6662,x:143.9335,y:340.5966},0).wait(1).to({scaleX:0.6484,scaleY:0.6484,x:143.5303,y:333.8355},0).wait(1).to({scaleX:0.6314,scaleY:0.6314,x:143.1437,y:327.3501},0).wait(1).to({scaleX:0.6155,scaleY:0.6155,x:142.7826,y:321.2933},0).wait(1).to({scaleX:0.6009,scaleY:0.6009,x:142.4536,y:315.7752},0).wait(1).to({scaleX:0.588,scaleY:0.588,x:142.1606,y:310.8614},0).wait(1).to({scaleX:0.5767,scaleY:0.5767,x:141.9052,y:306.5785},0).wait(1).to({scaleX:0.5671,scaleY:0.5671,x:141.6874,y:302.9246},0).wait(1).to({scaleX:0.5591,scaleY:0.5591,x:141.5057,y:299.8781},0).wait(1).to({scaleX:0.5526,scaleY:0.5526,x:141.3584,y:297.4062},0).wait(1).to({scaleX:0.5475,scaleY:0.5475,x:141.2429,y:295.4702},0).wait(1).to({scaleX:0.5437,scaleY:0.5437,x:141.1571,y:294.0301},0).wait(1).to({scaleX:0.5411,scaleY:0.5411,x:141.0984,y:293.0462},0).wait(1).to({scaleX:0.5397,scaleY:0.5397,x:141.0647,y:292.4811},0).wait(1).to({regX:0.8,regY:0.6,scaleX:0.5392,scaleY:0.5392,x:141.45,y:292.6},0).to({_off:true},136).wait(32));
    
        // ch
        this.ch2 = new lib.character1_container();
        this.ch2.name = "ch2";
        this.ch2.parent = this;
        this.ch2.setTransform(-170.7,234.65,0.5082,0.5082,0,0,0,0.3,0.2);
        this.ch2._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.ch2).wait(180).to({_off:false},0).wait(169).to({scaleX:0.8893,scaleY:0.8893,x:167.7,y:127},0).wait(1).to({regX:-37.7,regY:-239.6,x:133.9,y:-86.15},0).wait(1).to({y:-85.6},0).wait(1).to({y:-84.65},0).wait(1).to({y:-83.25},0).wait(1).to({y:-81.4},0).wait(1).to({y:-79.1},0).wait(1).to({y:-76.3},0).wait(1).to({y:-72.95},0).wait(1).to({y:-69.05},0).wait(1).to({y:-64.55},0).wait(1).to({y:-59.45},0).wait(1).to({y:-53.7},0).wait(1).to({y:-47.25},0).wait(1).to({y:-40.15},0).wait(1).to({y:-32.35},0).wait(1).to({y:-23.9},0).wait(1).to({y:-14.75},0).wait(1).to({y:-5.05},0).wait(1).to({y:5.25},0).wait(1).to({y:15.95},0).wait(1).to({y:27},0).wait(1).to({y:38.25},0).wait(1).to({y:49.5},0).wait(1).to({y:60.65},0).wait(1).to({y:71.55},0).wait(1).to({y:82.05},0).wait(1).to({y:92.05},0).wait(1).to({y:101.4},0).wait(1).to({y:110.1},0).wait(1).to({y:118.1},0).wait(1).to({y:125.4},0).wait(1).to({y:131.95},0).wait(1).to({y:137.75},0).wait(1).to({y:142.9},0).wait(1).to({y:147.35},0).wait(1).to({y:151.2},0).wait(1).to({y:154.4},0).wait(1).to({y:157.05},0).wait(1).to({y:159.1},0).wait(1).to({y:160.7},0).wait(1).to({y:161.8},0).wait(1).to({y:162.4},0).wait(1).to({regX:0.3,regY:0.2,x:167.7,y:375.95},0).wait(151).to({regX:-37.7,regY:-239.6,scaleX:0.8892,scaleY:0.8892,x:133.9,y:162.65},0).wait(1).to({scaleX:0.8888,scaleY:0.8888},0).wait(1).to({scaleX:0.8882,scaleY:0.8882,x:133.85},0).wait(1).to({scaleX:0.8872,scaleY:0.8872},0).wait(1).to({scaleX:0.8859,scaleY:0.8859,y:162.6},0).wait(1).to({scaleX:0.8843,scaleY:0.8843,x:133.8,y:162.55},0).wait(1).to({scaleX:0.8824,scaleY:0.8824},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:133.75,y:162.5},0).wait(1).to({scaleX:0.8772,scaleY:0.8772,y:162.45},0).wait(1).to({scaleX:0.874,scaleY:0.874,x:133.7},0).wait(1).to({scaleX:0.8703,scaleY:0.8703,x:133.65,y:162.4},0).wait(1).to({scaleX:0.8662,scaleY:0.8662,x:133.55,y:162.3},0).wait(1).to({scaleX:0.8616,scaleY:0.8616,x:133.5,y:162.25},0).wait(1).to({scaleX:0.8566,scaleY:0.8566,x:133.4,y:162.15},0).wait(1).to({scaleX:0.8512,scaleY:0.8512,x:133.35,y:162.1},0).wait(1).to({scaleX:0.8455,scaleY:0.8455,x:133.25,y:162},0).wait(1).to({scaleX:0.8397,scaleY:0.8397,x:133.2,y:161.9},0).wait(1).to({scaleX:0.8337,scaleY:0.8337,x:133.1,y:161.85},0).wait(1).to({scaleX:0.8278,scaleY:0.8278,x:133.05,y:161.75},0).wait(1).to({scaleX:0.8221,scaleY:0.8221,x:132.95,y:161.7},0).wait(1).to({scaleX:0.8167,scaleY:0.8167,x:132.85,y:161.55},0).wait(1).to({scaleX:0.8116,scaleY:0.8116,x:132.8},0).wait(1).to({scaleX:0.807,scaleY:0.807,x:132.75,y:161.45},0).wait(1).to({scaleX:0.8029,scaleY:0.8029,x:132.7,y:161.4},0).wait(1).to({scaleX:0.7992,scaleY:0.7992,x:132.6,y:161.35},0).wait(1).to({scaleX:0.7961,scaleY:0.7961,y:161.25},0).wait(1).to({scaleX:0.7934,scaleY:0.7934,x:132.55},0).wait(1).to({scaleX:0.7911,scaleY:0.7911,x:132.5,y:161.2},0).wait(1).to({scaleX:0.7893,scaleY:0.7893,x:132.45},0).wait(1).to({scaleX:0.7878,scaleY:0.7878,y:161.15},0).wait(1).to({scaleX:0.7867,scaleY:0.7867},0).wait(1).to({scaleX:0.786,scaleY:0.786,x:132.4},0).wait(1).to({scaleX:0.7856,scaleY:0.7856,x:132.45},0).wait(1).to({regX:0.3,regY:0.3,scaleX:0.7854,scaleY:0.7854,x:162.3,y:349.55},0).wait(93).to({regX:0,regY:0,x:162.05,y:349.3},0).wait(1).to({regX:-37.7,regY:-239.6,scaleX:0.785,scaleY:0.785,x:132.25,y:161.15},0).wait(1).to({scaleX:0.7834,scaleY:0.7834,x:131.75,y:161.3},0).wait(1).to({scaleX:0.7802,scaleY:0.7802,x:130.85,y:161.6},0).wait(1).to({scaleX:0.775,scaleY:0.775,x:129.25,y:162.1},0).wait(1).to({scaleX:0.7668,scaleY:0.7668,x:126.75,y:162.95},0).wait(1).to({scaleX:0.7551,scaleY:0.7551,x:123.2,y:164.1},0).wait(1).to({scaleX:0.741,scaleY:0.741,x:118.9,y:165.55},0).wait(1).to({scaleX:0.7272,scaleY:0.7272,x:114.7,y:166.9},0).wait(1).to({scaleX:0.7156,scaleY:0.7156,x:111.15,y:168.1},0).wait(1).to({scaleX:0.7064,scaleY:0.7064,x:108.4,y:169.05},0).wait(1).to({scaleX:0.6992,scaleY:0.6992,x:106.2,y:169.75},0).wait(1).to({scaleX:0.6936,scaleY:0.6936,x:104.45,y:170.3},0).wait(1).to({scaleX:0.6891,scaleY:0.6891,x:103.1,y:170.75},0).wait(1).to({scaleX:0.6855,scaleY:0.6855,x:102,y:171.1},0).wait(1).to({scaleX:0.6827,scaleY:0.6827,x:101.15,y:171.4},0).wait(1).to({scaleX:0.6805,scaleY:0.6805,x:100.5,y:171.6},0).wait(1).to({scaleX:0.6788,scaleY:0.6788,x:99.95,y:171.8},0).wait(1).to({scaleX:0.6775,scaleY:0.6775,x:99.6,y:171.9},0).wait(1).to({scaleX:0.6767,scaleY:0.6767,x:99.35,y:172},0).wait(1).to({scaleX:0.6761,scaleY:0.6761,x:99.15,y:172.05},0).wait(1).to({regX:0,regY:0,scaleX:0.6759,scaleY:0.6759,x:124.6,y:334.05},0).wait(12).to({regX:-37.7,regY:-239.6,scaleX:0.6761,scaleY:0.6761,x:99.2,y:172},0).wait(1).to({scaleX:0.6767,scaleY:0.6767,x:99.7,y:171.8},0).wait(1).to({scaleX:0.6779,scaleY:0.6779,x:100.45,y:171.4},0).wait(1).to({scaleX:0.6796,scaleY:0.6796,x:101.65,y:170.75},0).wait(1).to({scaleX:0.682,scaleY:0.682,x:103.2,y:169.9},0).wait(1).to({scaleX:0.6851,scaleY:0.6851,x:105.3,y:168.8},0).wait(1).to({scaleX:0.689,scaleY:0.689,x:107.9,y:167.45},0).wait(1).to({scaleX:0.6935,scaleY:0.6935,x:110.9,y:165.85},0).wait(1).to({scaleX:0.6985,scaleY:0.6985,x:114.25,y:164.1},0).wait(1).to({scaleX:0.7036,scaleY:0.7036,x:117.7,y:162.3},0).wait(1).to({scaleX:0.7084,scaleY:0.7084,x:120.9,y:160.55},0).wait(1).to({scaleX:0.7127,scaleY:0.7127,x:123.8,y:159.1},0).wait(1).to({scaleX:0.7162,scaleY:0.7162,x:126.1,y:157.8},0).wait(1).to({scaleX:0.7189,scaleY:0.7189,x:127.95,y:156.85},0).wait(1).to({scaleX:0.7209,scaleY:0.7209,x:129.25,y:156.2},0).wait(1).to({scaleX:0.7222,scaleY:0.7222,x:130.15,y:155.7},0).wait(1).to({scaleX:0.7229,scaleY:0.7229,x:130.65,y:155.45},0).wait(1).to({regX:0,regY:0,scaleX:0.7232,scaleY:0.7232,x:158.1,y:328.65},0).wait(129).to({regX:0.4,regY:0.3,x:158.4,y:328.85},0).wait(1).to({regX:-37.7,regY:-239.6,scaleX:0.7233,scaleY:0.7233,x:130.85,y:155.35},0).wait(1).to({scaleX:0.7237,scaleY:0.7237,x:130.8,y:155.4},0).wait(1).to({scaleX:0.7244,scaleY:0.7244,x:130.85,y:155.5},0).wait(1).to({scaleX:0.7255,scaleY:0.7255,x:130.8,y:155.55},0).wait(1).to({scaleX:0.7269,scaleY:0.7269,x:130.85,y:155.65},0).wait(1).to({scaleX:0.7287,scaleY:0.7287,y:155.8},0).wait(1).to({scaleX:0.7309,scaleY:0.7309,y:156},0).wait(1).to({scaleX:0.7335,scaleY:0.7335,y:156.2},0).wait(1).to({scaleX:0.7366,scaleY:0.7366,x:130.9,y:156.45},0).wait(1).to({scaleX:0.7402,scaleY:0.7402,x:130.85,y:156.75},0).wait(1).to({scaleX:0.7444,scaleY:0.7444,x:130.9,y:157.05},0).wait(1).to({scaleX:0.7489,scaleY:0.7489,y:157.45},0).wait(1).to({scaleX:0.754,scaleY:0.754,y:157.85},0).wait(1).to({scaleX:0.7594,scaleY:0.7594,y:158.3},0).wait(1).to({scaleX:0.7652,scaleY:0.7652,x:130.95,y:158.75},0).wait(1).to({scaleX:0.771,scaleY:0.771,x:131,y:159.25},0).wait(1).to({scaleX:0.7769,scaleY:0.7769,y:159.7},0).wait(1).to({scaleX:0.7827,scaleY:0.7827,y:160.2},0).wait(1).to({scaleX:0.7881,scaleY:0.7881,x:131.05,y:160.6},0).wait(1).to({scaleX:0.7932,scaleY:0.7932,y:161},0).wait(1).to({scaleX:0.7977,scaleY:0.7977,x:131.1,y:161.4},0).wait(1).to({scaleX:0.8018,scaleY:0.8018,x:131.05,y:161.75},0).wait(1).to({scaleX:0.8054,scaleY:0.8054,x:131.1,y:162.05},0).wait(1).to({scaleX:0.8084,scaleY:0.8084,x:131.05,y:162.25},0).wait(1).to({scaleX:0.8109,scaleY:0.8109,x:131.1,y:162.45},0).wait(1).to({scaleX:0.8129,scaleY:0.8129,y:162.6},0).wait(1).to({scaleX:0.8145,scaleY:0.8145,y:162.8},0).wait(1).to({scaleX:0.8157,scaleY:0.8157,y:162.85},0).wait(1).to({scaleX:0.8165,scaleY:0.8165,y:162.95},0).wait(1).to({scaleX:0.817,scaleY:0.817,y:163},0).wait(1).to({regX:0.4,regY:0.3,scaleX:0.8172,scaleY:0.8172,x:162.3,y:359.05},0).wait(150).to({regX:-37.7,regY:-239.6,scaleX:0.8167,scaleY:0.8167,x:131.1,y:162.95},0).wait(1).to({scaleX:0.8154,scaleY:0.8154,y:162.8},0).wait(1).to({scaleX:0.8132,scaleY:0.8132,y:162.6},0).wait(1).to({scaleX:0.8099,scaleY:0.8099,y:162.3},0).wait(1).to({scaleX:0.8054,scaleY:0.8054,y:161.9},0).wait(1).to({scaleX:0.7997,scaleY:0.7997,x:131.05,y:161.35},0).wait(1).to({scaleX:0.7927,scaleY:0.7927,y:160.7},0).wait(1).to({scaleX:0.7843,scaleY:0.7843,y:159.95},0).wait(1).to({scaleX:0.7743,scaleY:0.7743,x:131,y:159.05},0).wait(1).to({scaleX:0.7628,scaleY:0.7628,x:130.95,y:157.95},0).wait(1).to({scaleX:0.7498,scaleY:0.7498,y:156.75},0).wait(1).to({scaleX:0.7352,scaleY:0.7352,x:130.9,y:155.4},0).wait(1).to({scaleX:0.7192,scaleY:0.7192,x:130.85,y:153.9},0).wait(1).to({scaleX:0.7022,scaleY:0.7022,x:130.8,y:152.35},0).wait(1).to({scaleX:0.6844,scaleY:0.6844,x:130.75,y:150.7},0).wait(1).to({scaleX:0.6664,scaleY:0.6664,x:130.7,y:149.05},0).wait(1).to({scaleX:0.6486,scaleY:0.6486,x:130.65,y:147.4},0).wait(1).to({scaleX:0.6315,scaleY:0.6315,x:130.6,y:145.8},0).wait(1).to({scaleX:0.6156,scaleY:0.6156,x:130.55,y:144.3},0).wait(1).to({scaleX:0.6011,scaleY:0.6011,y:143},0).wait(1).to({scaleX:0.5882,scaleY:0.5882,x:130.5,y:141.8},0).wait(1).to({scaleX:0.5769,scaleY:0.5769,x:130.45,y:140.75},0).wait(1).to({scaleX:0.5673,scaleY:0.5673,x:130.4,y:139.85},0).wait(1).to({scaleX:0.5593,scaleY:0.5593,y:139.1},0).wait(1).to({scaleX:0.5528,scaleY:0.5528,x:130.35,y:138.5},0).wait(1).to({scaleX:0.5477,scaleY:0.5477,y:138.05},0).wait(1).to({scaleX:0.5439,scaleY:0.5439,y:137.7},0).wait(1).to({scaleX:0.5413,scaleY:0.5413,y:137.45},0).wait(1).to({scaleX:0.5398,scaleY:0.5398,y:137.3},0).wait(1).to({regX:0.5,regY:0.3,scaleX:0.5393,scaleY:0.5393,x:150.9,y:266.65},0).to({_off:true},136).wait(32));
    
        // bg
        this.bg2 = new lib.bg_zoom_half();
        this.bg2.name = "bg2";
        this.bg2.parent = this;
        this.bg2.setTransform(-334.9,-16.7,0.5082,0.5082,0,0,0,-0.3,-0.1);
        this.bg2._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.bg2).wait(180).to({_off:false},0).wait(169).to({regX:-0.4,scaleX:0.8893,scaleY:0.8893,x:-119.7,y:-312.85},0).wait(1).to({regX:305,regY:350,x:151.9,y:-1.3},0).wait(1).to({y:-0.75},0).wait(1).to({y:0.2},0).wait(1).to({y:1.6},0).wait(1).to({y:3.45},0).wait(1).to({y:5.75},0).wait(1).to({y:8.55},0).wait(1).to({y:11.9},0).wait(1).to({y:15.8},0).wait(1).to({y:20.3},0).wait(1).to({y:25.4},0).wait(1).to({y:31.15},0).wait(1).to({y:37.6},0).wait(1).to({y:44.7},0).wait(1).to({y:52.5},0).wait(1).to({y:60.95},0).wait(1).to({y:70.1},0).wait(1).to({y:79.8},0).wait(1).to({y:90.1},0).wait(1).to({y:100.8},0).wait(1).to({y:111.85},0).wait(1).to({y:123.1},0).wait(1).to({y:134.35},0).wait(1).to({y:145.5},0).wait(1).to({y:156.4},0).wait(1).to({y:166.9},0).wait(1).to({y:176.9},0).wait(1).to({y:186.25},0).wait(1).to({y:194.95},0).wait(1).to({y:202.95},0).wait(1).to({y:210.25},0).wait(1).to({y:216.8},0).wait(1).to({y:222.6},0).wait(1).to({y:227.75},0).wait(1).to({y:232.2},0).wait(1).to({y:236.05},0).wait(1).to({y:239.25},0).wait(1).to({y:241.9},0).wait(1).to({y:243.95},0).wait(1).to({y:245.55},0).wait(1).to({y:246.65},0).wait(1).to({y:247.25},0).wait(1).to({regX:-0.4,regY:-0.1,x:-119.7,y:-63.9},0).wait(151).to({regX:305,regY:350,scaleX:0.8892,scaleY:0.8892,x:151.9,y:247.45},0).wait(1).to({scaleX:0.8888,scaleY:0.8888},0).wait(1).to({scaleX:0.8882,scaleY:0.8882,y:247.35},0).wait(1).to({scaleX:0.8872,scaleY:0.8872,x:151.85,y:247.25},0).wait(1).to({scaleX:0.8859,scaleY:0.8859,x:151.8,y:247.15},0).wait(1).to({scaleX:0.8843,scaleY:0.8843,x:151.7,y:246.9},0).wait(1).to({scaleX:0.8824,scaleY:0.8824,x:151.65,y:246.7},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:151.6,y:246.45},0).wait(1).to({scaleX:0.8772,scaleY:0.8772,x:151.5,y:246.15},0).wait(1).to({scaleX:0.874,scaleY:0.874,x:151.35,y:245.8},0).wait(1).to({scaleX:0.8703,scaleY:0.8703,x:151.25,y:245.4},0).wait(1).to({scaleX:0.8662,scaleY:0.8662,x:151.1,y:244.95},0).wait(1).to({scaleX:0.8616,scaleY:0.8616,x:150.95,y:244.4},0).wait(1).to({scaleX:0.8566,scaleY:0.8566,x:150.75,y:243.85},0).wait(1).to({scaleX:0.8512,scaleY:0.8512,x:150.55,y:243.25},0).wait(1).to({scaleX:0.8455,scaleY:0.8455,x:150.4,y:242.7},0).wait(1).to({scaleX:0.8397,scaleY:0.8397,x:150.2,y:242.05},0).wait(1).to({scaleX:0.8337,scaleY:0.8337,x:150,y:241.35},0).wait(1).to({scaleX:0.8278,scaleY:0.8278,x:149.8,y:240.75},0).wait(1).to({scaleX:0.8221,scaleY:0.8221,x:149.6,y:240.1},0).wait(1).to({scaleX:0.8167,scaleY:0.8167,x:149.4,y:239.5},0).wait(1).to({scaleX:0.8116,scaleY:0.8116,x:149.2,y:238.9},0).wait(1).to({scaleX:0.807,scaleY:0.807,x:149.05,y:238.4},0).wait(1).to({scaleX:0.8029,scaleY:0.8029,x:148.95,y:237.95},0).wait(1).to({scaleX:0.7992,scaleY:0.7992,x:148.75,y:237.6},0).wait(1).to({scaleX:0.7961,scaleY:0.7961,x:148.65,y:237.2},0).wait(1).to({scaleX:0.7934,scaleY:0.7934,x:148.55,y:236.9},0).wait(1).to({scaleX:0.7911,scaleY:0.7911,x:148.5,y:236.7},0).wait(1).to({scaleX:0.7893,scaleY:0.7893,x:148.4,y:236.5},0).wait(1).to({scaleX:0.7878,scaleY:0.7878,y:236.35},0).wait(1).to({scaleX:0.7867,scaleY:0.7867,x:148.35,y:236.2},0).wait(1).to({scaleX:0.786,scaleY:0.786,x:148.3,y:236.1},0).wait(1).to({scaleX:0.7856,scaleY:0.7856,y:236.05},0).wait(1).to({regX:-0.5,regY:-0.3,scaleX:0.7854,scaleY:0.7854,x:-91.6,y:-39},0).wait(93).to({regX:0,regY:0,x:-91.2,y:-38.75},0).wait(1).to({regX:305,regY:350,scaleX:0.785,scaleY:0.785,x:148.2,y:236.2},0).wait(1).to({scaleX:0.7834,scaleY:0.7834,x:147.7,y:236.15},0).wait(1).to({scaleX:0.7802,scaleY:0.7802,x:146.65,y:236.2},0).wait(1).to({scaleX:0.775,scaleY:0.775,x:144.95},0).wait(1).to({scaleX:0.7668,scaleY:0.7668,x:142.3,y:236.25},0).wait(1).to({scaleX:0.7551,scaleY:0.7551,x:138.45,y:236.3},0).wait(1).to({scaleX:0.741,scaleY:0.741,x:133.85,y:236.35},0).wait(1).to({scaleX:0.7272,scaleY:0.7272,x:129.35},0).wait(1).to({scaleX:0.7156,scaleY:0.7156,x:125.55,y:236.4},0).wait(1).to({scaleX:0.7064,scaleY:0.7064,x:122.55,y:236.45},0).wait(1).to({scaleX:0.6992,scaleY:0.6992,x:120.2,y:236.5},0).wait(1).to({scaleX:0.6936,scaleY:0.6936,x:118.35},0).wait(1).to({scaleX:0.6891,scaleY:0.6891,x:116.9},0).wait(1).to({scaleX:0.6855,scaleY:0.6855,x:115.7},0).wait(1).to({scaleX:0.6827,scaleY:0.6827,x:114.8,y:236.55},0).wait(1).to({scaleX:0.6805,scaleY:0.6805,x:114.1,y:236.5},0).wait(1).to({scaleX:0.6788,scaleY:0.6788,x:113.5},0).wait(1).to({scaleX:0.6775,scaleY:0.6775,x:113.1,y:236.55},0).wait(1).to({scaleX:0.6767,scaleY:0.6767,x:112.85},0).wait(1).to({scaleX:0.6761,scaleY:0.6761,x:112.65},0).wait(1).to({regX:-0.4,regY:-0.1,scaleX:0.6759,scaleY:0.6759,x:-93.6,y:-0.05},0).wait(11).to({regX:0,regY:0,x:-93.35,y:0},0).wait(1).to({regX:305,regY:350,scaleX:0.6761,scaleY:0.6761,x:112.95,y:236.5},0).wait(1).to({scaleX:0.6767,scaleY:0.6767,x:113.4,y:236.35},0).wait(1).to({scaleX:0.6779,scaleY:0.6779,x:114.2,y:236.05},0).wait(1).to({scaleX:0.6796,scaleY:0.6796,x:115.4,y:235.6},0).wait(1).to({scaleX:0.682,scaleY:0.682,x:117.05,y:235},0).wait(1).to({scaleX:0.6851,scaleY:0.6851,x:119.2,y:234.2},0).wait(1).to({scaleX:0.689,scaleY:0.689,x:121.9,y:233.2},0).wait(1).to({scaleX:0.6935,scaleY:0.6935,x:125,y:232.05},0).wait(1).to({scaleX:0.6985,scaleY:0.6985,x:128.45,y:230.75},0).wait(1).to({scaleX:0.7036,scaleY:0.7036,x:132,y:229.45},0).wait(1).to({scaleX:0.7084,scaleY:0.7084,x:135.3,y:228.25},0).wait(1).to({scaleX:0.7127,scaleY:0.7127,x:138.25,y:227.15},0).wait(1).to({scaleX:0.7162,scaleY:0.7162,x:140.7,y:226.2},0).wait(1).to({scaleX:0.7189,scaleY:0.7189,x:142.55,y:225.5},0).wait(1).to({scaleX:0.7209,scaleY:0.7209,x:143.95,y:225},0).wait(1).to({scaleX:0.7222,scaleY:0.7222,x:144.85,y:224.65},0).wait(1).to({scaleX:0.7229,scaleY:0.7229,x:145.4,y:224.5},0).wait(1).to({regX:0,regY:0,scaleX:0.7232,scaleY:0.7232,x:-75.05,y:-28.7},0).wait(129).to({regX:-0.4,regY:-0.1,x:-75.35,y:-28.75},0).wait(1).to({regX:305,regY:350,scaleX:0.7233,scaleY:0.7233,x:145.55,y:224.45},0).wait(1).to({scaleX:0.7237,scaleY:0.7237,y:224.55},0).wait(1).to({scaleX:0.7244,scaleY:0.7244,y:224.65},0).wait(1).to({scaleX:0.7255,scaleY:0.7255,y:224.8},0).wait(1).to({scaleX:0.7269,scaleY:0.7269,x:145.65,y:225.1},0).wait(1).to({scaleX:0.7287,scaleY:0.7287,y:225.4},0).wait(1).to({scaleX:0.7309,scaleY:0.7309,x:145.7,y:225.8},0).wait(1).to({scaleX:0.7335,scaleY:0.7335,x:145.75,y:226.3},0).wait(1).to({scaleX:0.7366,scaleY:0.7366,x:145.85,y:226.8},0).wait(1).to({scaleX:0.7402,scaleY:0.7402,x:145.95,y:227.45},0).wait(1).to({scaleX:0.7444,scaleY:0.7444,x:146,y:228.15},0).wait(1).to({scaleX:0.7489,scaleY:0.7489,x:146.1,y:229},0).wait(1).to({scaleX:0.754,scaleY:0.754,x:146.25,y:229.9},0).wait(1).to({scaleX:0.7594,scaleY:0.7594,x:146.35,y:230.85},0).wait(1).to({scaleX:0.7652,scaleY:0.7652,x:146.5,y:231.85},0).wait(1).to({scaleX:0.771,scaleY:0.771,x:146.65,y:232.9},0).wait(1).to({scaleX:0.7769,scaleY:0.7769,x:146.8,y:233.9},0).wait(1).to({scaleX:0.7827,scaleY:0.7827,x:146.9,y:234.95},0).wait(1).to({scaleX:0.7881,scaleY:0.7881,x:147,y:235.9},0).wait(1).to({scaleX:0.7932,scaleY:0.7932,x:147.15,y:236.8},0).wait(1).to({scaleX:0.7977,scaleY:0.7977,x:147.25,y:237.6},0).wait(1).to({scaleX:0.8018,scaleY:0.8018,x:147.35,y:238.35},0).wait(1).to({scaleX:0.8054,scaleY:0.8054,x:147.45,y:238.95},0).wait(1).to({scaleX:0.8084,scaleY:0.8084,x:147.5,y:239.5},0).wait(1).to({scaleX:0.8109,scaleY:0.8109,x:147.55,y:239.9},0).wait(1).to({scaleX:0.8129,scaleY:0.8129,x:147.65,y:240.25},0).wait(1).to({scaleX:0.8145,scaleY:0.8145,x:147.7,y:240.6},0).wait(1).to({scaleX:0.8157,scaleY:0.8157,y:240.8},0).wait(1).to({scaleX:0.8165,scaleY:0.8165,y:240.95},0).wait(1).to({scaleX:0.817,scaleY:0.817,x:147.75,y:241},0).wait(1).to({regX:-0.5,regY:-0.2,scaleX:0.8172,scaleY:0.8172,x:-101.9,y:-45.1},0).wait(150).to({regX:305,regY:350,scaleX:0.8167,scaleY:0.8167,x:147.75,y:241},0).wait(1).to({scaleX:0.8154,scaleY:0.8154,x:147.7,y:240.75},0).wait(1).to({scaleX:0.8132,scaleY:0.8132,x:147.65,y:240.3},0).wait(1).to({scaleX:0.8099,scaleY:0.8099,x:147.6,y:239.7},0).wait(1).to({scaleX:0.8054,scaleY:0.8054,x:147.5,y:238.9},0).wait(1).to({scaleX:0.7997,scaleY:0.7997,x:147.35,y:237.8},0).wait(1).to({scaleX:0.7927,scaleY:0.7927,x:147.2,y:236.5},0).wait(1).to({scaleX:0.7843,scaleY:0.7843,x:147,y:234.9},0).wait(1).to({scaleX:0.7743,scaleY:0.7743,x:146.75,y:233},0).wait(1).to({scaleX:0.7628,scaleY:0.7628,x:146.5,y:230.9},0).wait(1).to({scaleX:0.7498,scaleY:0.7498,x:146.2,y:228.4},0).wait(1).to({scaleX:0.7352,scaleY:0.7352,x:145.9,y:225.65},0).wait(1).to({scaleX:0.7192,scaleY:0.7192,x:145.5,y:222.7},0).wait(1).to({scaleX:0.7022,scaleY:0.7022,x:145.1,y:219.45},0).wait(1).to({scaleX:0.6844,scaleY:0.6844,x:144.7,y:216.15},0).wait(1).to({scaleX:0.6664,scaleY:0.6664,x:144.3,y:212.75},0).wait(1).to({scaleX:0.6486,scaleY:0.6486,x:143.85,y:209.4},0).wait(1).to({scaleX:0.6315,scaleY:0.6315,x:143.45,y:206.2},0).wait(1).to({scaleX:0.6156,scaleY:0.6156,x:143.1,y:203.15},0).wait(1).to({scaleX:0.6011,scaleY:0.6011,x:142.8,y:200.45},0).wait(1).to({scaleX:0.5882,scaleY:0.5882,x:142.5,y:198},0).wait(1).to({scaleX:0.5769,scaleY:0.5769,x:142.25,y:195.9},0).wait(1).to({scaleX:0.5673,scaleY:0.5673,x:142,y:194.1},0).wait(1).to({scaleX:0.5593,scaleY:0.5593,x:141.8,y:192.6},0).wait(1).to({scaleX:0.5528,scaleY:0.5528,x:141.7,y:191.35},0).wait(1).to({scaleX:0.5477,scaleY:0.5477,x:141.55,y:190.45},0).wait(1).to({scaleX:0.5439,scaleY:0.5439,x:141.5,y:189.7},0).wait(1).to({scaleX:0.5413,scaleY:0.5413,x:141.4,y:189.2},0).wait(1).to({scaleX:0.5398,scaleY:0.5398,y:188.95},0).wait(1).to({regX:-0.5,regY:-0.1,scaleX:0.5393,scaleY:0.5393,x:-23.4,y:-0.05},0).to({_off:true},136).wait(32));
    
        // SP_btn_window
        this.toggle_btn = new lib.btn_window();
        this.toggle_btn.name = "toggle_btn";
        this.toggle_btn.parent = this;
        this.toggle_btn.setTransform(200,200);
    
        this.timeline.addTween(cjs.Tween.get(this.toggle_btn).to({_off:true},1182).wait(44));
    
        // btn
        this.stage_btn = new lib.button();
        this.stage_btn.name = "stage_btn";
        this.stage_btn.parent = this;
        this.stage_btn.setTransform(120,155);
    
        this.timeline.addTween(cjs.Tween.get(this.stage_btn).to({_off:true},1194).wait(27).to({_off:false},0).wait(5));
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-383.4,-720,1156.1999999999998,1393);
    // library properties:
    lib.properties = {
        id: '_411_4',
        width: 240,
        height: 310,
        fps: 12,
        color: "#FFFFFF",
        opacity: 1.00,
        manifest: [
            {src:"images/bg.jpg", id:"_411_4_bg"},
            {src:"images/book_1.png", id:"_411_4_book_1"},
            {src:"images/book_2.png", id:"_411_4_book_2"},
            {src:"images/book_3.png", id:"_411_4_book_3"},
            {src:"images/ch_base.png", id:"_411_4_ch_base"},
            {src:"images/ch_face2.png", id:"_411_4_ch_face2"},
            {src:"images/ch_face3.png", id:"_411_4_ch_face3"},
            {src:"images/ch_face4.png", id:"_411_4_ch_face4"},
            {src:"images/ch_face5.png", id:"_411_4_ch_face5"},
            {src:"images/ch_face6.png", id:"_411_4_ch_face6"},
            {src:"images/ch_face7.png", id:"_411_4_ch_face7"},
            {src:"images/ch_face8.png", id:"_411_4_ch_face8"},
            {src:"images/finish.jpg", id:"_411_4_finish"},
            {src:"images/finish_blur.jpg", id:"_411_4_finish_blur"},
            {src:"images/star.png", id:"_411_4_star"},
            {src:"images/tie_fp.png", id:"_411_4_tie_fp"},
            {src:"images/tie_sp.png", id:"_411_4_tie_sp"}
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
    an.compositions['_411_4'] = {
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