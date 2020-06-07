(function(a, g) {
    function l() {
        var a = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
        a.gotoAndStop(this.currentFrame);
        a.paused = this.paused;
        a.framerate = this.framerate;
        return a
    }

    function f(b, d, e) {
        b = a.extend(b, a.MovieClip);
        b.clone = l;
        b.nominalBounds = d;
        b.frameBounds = e;
        return b
    }
    var c, b = {},
        n = {},
        k = {};
    b.ssMetadata = [];
    (b.bg = function() {
        this.initialize(k._407_4_bg)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 992, 1224);
    (b.ch_base = function() {
        this.initialize(k._407_4_ch_base)
    }).prototype =
        c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 992, 1224);
    (b.ch_face2 = function() {
        this.initialize(k._407_4_ch_face2)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 216, 224);
    (b.ch_face3 = function() {
        this.initialize(k._407_4_ch_face3)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 216, 224);
    (b.ch_face4 = function() {
        this.initialize(k._407_4_ch_face4)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 216, 224);
    (b.ch_face6 = function() {
        this.initialize(k._407_4_ch_face6)
    }).prototype =
        c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 216, 224);
    (b.finish = function() {
        this.initialize(k._407_4_finish)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 480, 620);
    (b.finish_blur = function() {
        this.initialize(k._407_4_finish_blur)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 480, 620);
    (b.tie_fp = function() {
        this.initialize(k._407_4_tie_fp)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 240, 32);
    (b.tie_sp = function() {
        this.initialize(k._407_4_tie_sp)
    }).prototype =
        c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 480, 64);
    (b.white_mask = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AyvYOMAAAgwbMAlfAAAMAAAAwbg");
        this.shape.setTransform(120, 155);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = f(b.white_mask, new a.Rectangle(0, 0, 240, 310), null);
    (b.yajirusi_p = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#444545").s().p("AAjA0IhMAAIAAgfIAoAAIg0gyIAWgWIA1A2IAAgqIAfAAIAABIQACATgRAAIgDAAg");
        this.shape.setTransform(-5.3448, -5.1698);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = f(b.yajirusi_p, new a.Rectangle(-10.7, -10.3, 10.7, 10.3), null);
    (b.window_shadow = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("rgba(0,0,0,0.702)").s().p("AxJG9QgmAAgUgRQARAHAZAAMAiNAAAQBOAAAChLIAAAEQAABRhRAAgAl8mFQgTgmgJgRIAFAGQAIALAbA3QALAVALAQQgTgUgPgig");
        this.shape.setTransform(118.95, 47.975);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("rgba(0,0,0,0.463)").s().p("AxEHIQg1AAgUghIAIAGQAUAYAtAAMAh8AAAQBUAAAAhTIAAoyQAAgQgDgNIgDgQQAIASAAAbIAAIyQAABWhWAAgAlJk9IAAAAQgQgUgQgeQgag4gJgLQgGgIgHgGIgBgCIgFgFQAMAIAJAMQAJAKAbA5QAUAoAVAUIgMgJg");
        this.shape_1.setTransform(118.45, 47.425);
        this.shape_2 = new a.Shape;
        this.shape_2.graphics.f("rgba(0,0,0,0.58)").s().p("AxGHDQguAAgUgZIAHAFQAVASAmAAMAh7AAAQBSAAgBhRIAAgFIAAo+IAAgMQADAMAAAQIAAIzQAABThUAAgAlYlMQgLgQgKgUQgbg4gIgKIgGgHIgFgJQAHAGAFAIQAJALAbA4QAPAeAQATIgMgMg");
        this.shape_2.setTransform(118.7, 47.65);
        this.shape_3 = new a.Shape;
        this.shape_3.graphics.f("rgba(0,0,0,0.231)").s().p("AxAHRQhGAAgQg2IAGAKQAUApA8AAMAh8AAAQBYAAAAhYIAAoyQAAglgOgVIgIgMQAZAWAAAwIAAIyQAABbhbAAgAkskpIgIgGQgXgTgVgrQgbg5gJgLQgNgRgQgIIgHgGQAVAIARAWQAJAKAbA5QAVArAWATQAKAIALAGIgOgGg");
        this.shape_3.setTransform(118.05, 47.025);
        this.shape_4 = new a.Shape;
        this.shape_4.graphics.f("rgba(0,0,0,0.349)").s().p("AxCHNQg8AAgUgqIAHAHQAUAgA1AAMAh8AAAQBWAAAAhWIAAoyQAAgagIgSIgEgOQAOAWAAAkIAAIyQAABZhYAAgAk7kyQgVgUgUgoQgbg4gJgLQgJgMgMgHIgGgIQAQAJANARQAJAKAbA5QAVArAXATIAIAGIgNgHg");
        this.shape_4.setTransform(118.25, 47.175);
        this.shape_5 = new a.Shape;
        this.shape_5.graphics.f("rgba(0,0,0,0.114)").s().p("Aw+HVQhRAAgLhGQACAHADAHQARA1BGAAMAh7AAAQBbAAAAhbIAAoyQABgvgZgXQgFgHgHgEQAnAVAAA8IAAIyQAABeheAAgAkckiQgMgGgJgIQgXgTgUgqQgcg5gIgLQgRgVgWgIIgJgGQAdAHAVAbQAJALAbA5QAVAqAWASQAQAPAYAGIgVgFg");
        this.shape_5.setTransform(117.9, 46.875);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1))
    }).prototype = f(b.window_shadow, new a.Rectangle(0, 0, 235.8, 93.8), null);
    (b.window_icon = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.frame_0 = function() {};
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1));
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AgjgbIBHAAIgkA3g");
        this.shape.setTransform(-.025, .75);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1));
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("rgba(255,255,255,0.498)").s("#FFFFFF").ss(1, 1, 1).rr(-9, -8.1, 18, 16.2, 2);
        this.shape_1.setTransform(-.025, -.025);
        this.timeline.addTween(a.Tween.get(this.shape_1).wait(1))
    }).prototype = f(b.window_icon, new a.Rectangle(-10, -9.1, 20, 18.2), null);
    (b.window_finish_2line = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("rgba(255,255,255,0.247)").s().p("AxLEHQhaAAAAhaIAAlZQAAhaBaAAMAiXAAAQBaAAAABaIAAFZQAABahaAAgAybisIAAFZQAABQBQAAMAiXAAAQBQAAAAhQIAAlZQAAhQhQAAMgiXAAAQhQAAAABQg");
        this.shape.setTransform(0, -2.275);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("rgba(255,255,255,0.498)").s().p("AxLD9QhQAAAAhQIAAlZQAAhQBQAAMAiXAAAQBQAAAABQIAAFZQAABQhQAAgAyRisIAAFZQAABGBGAAMAiXAAAQBGAAAAhGIAAlZQAAhGhGAAMgiXAAAQhGAAAABGg");
        this.shape_1.setTransform(0, -2.275);
        this.shape_2 = new a.Shape;
        this.shape_2.graphics.f("#FFFFFF").s().p("AxLDpQg8AAAAg8IAAlZQAAg8A8AAMAiXAAAQA8AAAAA8IAAFZQAAA8g8AAg");
        this.shape_2.setTransform(0, -2.275);
        this.shape_3 = new a.Shape;
        this.shape_3.graphics.f("rgba(255,255,255,0.749)").s().p("AxLDzQhGAAAAhGIAAlZQAAhGBGAAMAiXAAAQBGAAAABGIAAFZQAABGhGAAgAyHisIAAFZQAAA8A8AAMAiXAAAQA8AAAAg8IAAlZQAAg8g8AAMgiXAAAQg8AAAAA8g");
        this.shape_3.setTransform(0, -2.275);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1))
    }).prototype = f(b.window_finish_2line, new a.Rectangle(-119, -28.5, 238, 52.5), null);
    (b.uru_gra = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("rgba(255,255,255,0.8)").s().p("AgOAXQgHgJAAgOQAAgMAHgKQAGgKAIAAQAJAAAGAKQAHAKAAAMQAAAOgHAJQgGAKgJAAQgIAAgGgKg");
        this.shape.setTransform(.025, 3.275);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype =
        c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-2.1, 0, 4.300000000000001, 6.6);
    (b.textfield = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.line4 = new a.Text("", "14px 'Arial'");
        this.line4.name = "line4";
        this.line4.lineHeight = 18;
        this.line4.lineWidth = 260;
        this.line4.parent = this;
        this.line4.setTransform(2, 50);
        this.line3 = new a.Text("", "14px 'Arial'");
        this.line3.name = "line3";
        this.line3.lineHeight = 18;
        this.line3.lineWidth = 260;
        this.line3.parent = this;
        this.line3.setTransform(2, 34);
        this.line2 = new a.Text("", "14px 'Arial'");
        this.line2.name = "line2";
        this.line2.lineHeight = 18;
        this.line2.lineWidth = 260;
        this.line2.parent = this;
        this.line2.setTransform(2, 18);
        this.line1 = new a.Text("", "14px 'Arial'");
        this.line1.name = "line1";
        this.line1.lineHeight = 18;
        this.line1.lineWidth = 260;
        this.line1.parent = this;
        this.line1.setTransform(2, 2);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.line1
            }, {
                t: this.line2
            }, {
                t: this.line3
            }, {
                t: this.line4
            }]
        }).wait(1))
    }).prototype = f(b.textfield, new a.Rectangle(0, 0, 263.6, 76.7), null);
    (b.squear = function(b,
        d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#808080").s().p("AgGAHIAAgNIANAAIAAANg");
        this.shape.setTransform(.725, .725);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = f(b.squear, new a.Rectangle(0, 0, 1.5, 1.5), null);
    (b.spread_flower_circle_pink = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.rf(["rgba(255,79,156,0.2)", "#FF4194"], [0, 1], 0, 0, 0, 0, 0, 47.8).s().p("AlPFQQiLiLAAjFQAAjECLiLQCLiLDEAAQDFAACLCLQCLCLAADEQAADFiLCLQiLCLjFAAQjEAAiLiLg");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = f(b.spread_flower_circle_pink, new a.Rectangle(-47.5, -47.5, 95, 95), null);
    (b.sigh = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f().s("#07D5F1").ss(1.5, 1, 1).p("ABEg9QAUgDAQgLQAPgIAKgOQALgPACgHQAAAMgCAMQgDAWgNATQgPAWgVATQAIAKAAAkQAAATgLARQgKAPgNAEQgHADgWgCQgTgCgBABQgDACgbAWQgNAJgXgBQgWgCgPgQQgNgPgHgLQgJgIgNgTQgMgTAEgXQAEgVAPgPQAQgPAIgDIATgbQARgYAkgGQAhgFAhAWQAaASABAIg");
        this.shape.setTransform(.8654,
            -.0398);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1));
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("#FFFFFF").s().p("Ag1B4QgWgCgPgQQgNgPgHgLQgJgIgNgTQgMgTAEgXQAEgVAPgPQAQgPAIgDIATgbQARgYAkgGQAhgFAhAWQAaASABAIQAUgDAQgLQAPgIAKgOQALgPACgHQAAAMgCAMQgDAWgNATQgPAWgVATQAIAKAAAkQAAATgLARQgKAPgNAEQgHADgWgCQgTgCgBABIgeAYQgLAIgTAAIgGAAg");
        this.shape_1.setTransform(.8654, -.0398);
        this.timeline.addTween(a.Tween.get(this.shape_1).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-14.3,
        -13, 30.400000000000002, 26);
    (b.shock = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f().s("#FFCC00").ss(.5, 1, 1).p("AgtgvIDzhsIivDKIDCBEIjaAUIBGB+IiYhwQAPgdgDglQgEgfgLgPQgUgZgggIQghgHgRAJIgcisIBUBSIBhiwg");
        this.shape.setTransform(8.325, -2.575);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.rf(["#FFD200", "rgba(255,198,88,0.498)"], [0, 1], -14.7, 3.9, 0, -14.7, 3.9, 24.1).s().p("AhTCVQAPgdgDglQgEgfgLgPQgUgZgggIQghgHgRAJIgcisIBUBSIBhiwIgKDVIDzhsIivDKIDCBEIjaAUIBGB+g");
        this.shape_1.setTransform(8.325,
            -2.575);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-15.6, -29.6, 46.7, 54.1);
    (b.shield = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#000000").s().p("EhK/BH4MAAAiPvMCV/AAAMAAACPvgA13XcMAlfAAAMAAAgwbMglfAAAg");
        this.shape.setTransform(20, 0);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = f(b.shield, new a.Rectangle(-460, -460, 960, 920),
        null);
    (b.sender = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.frame_1 = function() {};
        this.frame_55 = function() {};
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(54).call(this.frame_55).wait(1));
        this.shape = new a.Shape;
        this.shape.graphics.f("#333333").s().p("Ah8B9IAAj5ID5AAIAAD5g");
        this.shape.setTransform(12.5, 12.5);
        this.timeline.addTween(a.Tween.get(this.shape).wait(56))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(0,
        0, 25, 25);
    (b.roader_ring2 = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AgQAFQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAgBgBQABAAAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAIAiAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAg");
        this.shape.setTransform(4.7, 0);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype =
        f(b.roader_ring2, new a.Rectangle(2, -1, 5.5, 2), null);
    (b.ranko_finish_blur = function(h, d, e) {
        this.initialize(h, d, e, {});
        this.instance = new b.finish_blur;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = f(b.ranko_finish_blur, new a.Rectangle(0, 0, 240, 310), null);
    (b.question = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.lf(["#FFFFFF", "#FFDDB6"], [.463, 1], 0, -17.7, .3, 17.7).s().p("Ag+CaIAAgPQAAgmARgbQAPgaAjgXQAUgMAIgLQAJgLAAgRQAAgSgNgKQgNgLgWgBQgXABgNARQgOAQAAAgIh4gRQABgwAWgiQAXgjApgSQAogSAzgBQA0AAAnARQAnARAWAeQAXAeAAAoQABApgQAeQgPAdgjAWIgcATQgMAIgGALQgIAKAAAOIABAMIABAMIh3ABIgDgSg");
        this.shape.setTransform(-.2742, -7.725);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("#FFE1BF").s().p("AhBg7ICDgBIABB4IiEABg");
        this.shape_1.setTransform(-.2, 19.175);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1));
        this.shape_2 = new a.Shape;
        this.shape_2.graphics.f().s("#FF8C00").ss(3, 1, 1).p("ABRjIQgigPgtAAQgrAAgjAPQgjAQgUAdQgUAdgBAqIBoAQQAAgcAMgOQALgPAUAAQATABALAJQALAKAAAPQAAAOgIAKQgHAKgRAKQgeAUgOAWQgOAXAAAgQAAAHAAAGQABAIABAHIBmAAQgBgFAAgFQgBgFAAgFQAAgMAHgJQAGgJAKgGQALgIANgJQAfgSANgZQAOgaAAgkQAAgigUgaQgSgagigPgAA3BvIhwAAIAABpIBwAAg");
        this.shape_2.setTransform(-.1696, .1705, 1.1607, 1.1607, -.47);
        this.shape_3 = new a.Shape;
        this.shape_3.graphics.f("#FFFFFF").s().p("Ag5DYIAAhpIBwAAIAABpgAg0BQIgCgQIAAgNQAAggAOgWQAOgXAegTQARgLAHgJQAIgKAAgPQAAgPgLgKQgLgIgTgCQgUAAgLAPQgMAOAAAcIhogPQABgqAUgdQAUgeAjgQQAjgPArAAQAtABAiAOQAiAPASAaQAUAaAAAiQAAAkgOAaQgNAZgfATIgYAQQgKAGgGAJQgHAJAAANIABAKIABAKg");
        this.shape_3.setTransform(-.1696, .1705, 1.1607, 1.1607, -.47);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape_3
            }, {
                t: this.shape_2
            }]
        }).wait(1))
    }).prototype =
        f(b.question, new a.Rectangle(-19.5, -26.4, 38.5, 53.2), null);
    (b.pusher_next_inner = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("rgba(255,255,255,0.851)").s().p("AAQA3IAHg1IgtAAIgGA1IgWAAIAPhsIAUAAIgGAxIAtAAIAGgxIAUAAIgLBsg");
        this.shape.setTransform(17.2, 1.3);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("rgba(255,255,255,0.851)").s().p("AguA3IADgiIAWAAIgCAaIApAAIAEguIg/AAIAIg2IBQAAIgDAeIgVAAIACgXIgnAAIgFAoIA+AAIgEA9g");
        this.shape_1.setTransform(5.95, 1.3);
        this.shape_2 = new a.Shape;
        this.shape_2.graphics.f("rgba(255,255,255,0.851)").s().p("AgxA2IANhrIAVAAIgMBkIAsAAIANhkIAUAAIgLBrg");
        this.shape_2.setTransform(-4.95, 1.325);
        this.shape_3 = new a.Shape;
        this.shape_3.graphics.f("rgba(255,255,255,0.851)").s().p("AgwA2IAOhrIBTAAIgHA8Ig4AAIACgHIAhAAIAHguIgqAAIgMBkg");
        this.shape_3.setTransform(-16, 1.325);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds =
        new a.Rectangle(-24.2, -12.1, 48.4, 24.299999999999997);
    (b.pointGlitter2 = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("rgba(255,255,255,0.988)").s().p("AlaAAIFalaIFaFaIlaFag");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-34.6, -34.6, 69.30000000000001, 69.30000000000001);
    (b.placebase_sp = function(h, d, e) {
        this.initialize(h, d, e, {});
        this.instance = new b.tie_sp;
        this.instance.parent = this;
        this.instance.setTransform(0,
            0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = f(b.placebase_sp, new a.Rectangle(0, 0, 240, 32), null);
    (b.placebase_fp = function(h, d, e) {
        this.initialize(h, d, e, {});
        this.instance = new b.tie_fp;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = f(b.placebase_fp, new a.Rectangle(0, 0, 240, 32), null);
    (b.pin = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#F96A05").s().p("ALwXgQgcgQgRgcIiWkCIAEAoQAFApgWAjQgWAjgnAPQgTAHgWAAQgeAAgagOQgbgOgQgZInMqnQibCTi/AAQiDAAh4hGQh5hGhZh/QhYh8gTiCQgUiBA0hwQAdg/AxgyQhqg/hKhZQhKhZgnhvQhBi4AtjNQAsjOCQi1QBuiLCvhTQCuhTC1AAQBwAABiAiQBjAiBOBBQA9AzAwBIQBPhlB2gzQBoguB2AAQCXAACKBIQCLBHBRB5QCuEAg5DrQgYBhg8BVQBlAuA2BeQAyBXgDBpQgDBog4BgQgzBahQAwQhPAwhjAAQguAAgvgLICKSxQAFArgXAjQgXAkgoAOQgSAGgUAAQggAAgbgPgAMrV3Iii17IBIAnQBYAoBMAAQCFAABIh8QBSiQhDh8Qgeg4g4ggQg6ghhJAAQhVAAheAwQDsiCA/iyQBFjFiejqQhChhhwg6Qhwg4h4AAQicAAhvBdQh+BqgiDJQgljqiNh3Qh+hpi4AAQiZAAiXBIQiWBHhcB1Qh2CTgqClQgpCjAoCUQApCZB5BrQCBBzDLAuQhnAKhJAyQhHAwgeBOQgfBOAQBcQASBgBDBgQBGBkBdA5QBiA7BmAAQBfAABYg1QBfg5BPhzIIkMqIhEpbg");
        this.shape.setTransform(18.6476, 28.4776, .1749, .1749, 29.9978);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("#FFFFFF").s().p("AF2KMIBEJbIoksqQilDxjbgRQhfgIhag6QhWg4hBhdQhDhggShgQgQhcAfhOQAehOBHgwQBJgyBngKQjLguiBhzQh5hrgpiZQgoiUApijQAqilB2iTQBhh7CghIQChhJCfAJQCuAJB1BpQCDB3AjDgQAgi6BthoQBiheCMgOQCDgNB/A5QCAA6BIBrQCgDthKDIQhACujpCAQBmg1BfAFQBdAFA/A7QA9A5AKBVQAKBbg0BcQhaCci5goQg5gNg9gfIgwgbICiV7g");
        this.shape_1.setTransform(18.646, 28.4779, .1749, .1749, 29.9978);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                    t: this.shape_1
                },
                {
                    t: this.shape
                }
            ]
        }).wait(1))
    }).prototype = f(b.pin, new a.Rectangle(0, 0, 44.6, 58.9), null);
    (b.petal = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("rgba(255,255,255,0.663)").s().p("Ag3BXQgFgCgDgFQgHgJgCgLQgTgIgIglIAAAAQgGgcAVgSQAOgOAjgHIAFAAQAnACA4gkQAGgEAJACQAMACAEAOQASBFgsAvQgjAphQAEIgCAAQgEAAgEgCgAghgqQgfAGgOAMQgQAPAFAWQAHAjASAEQACAMAHALIAEADIAFABQBLgDAhgmQAogrgQhBQgCgIgGgBQgEgBgDADQg8AmgqgDIAAAAIgCAAg");
        this.shape.setTransform(-.4522, .0056);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("rgba(255,255,255,0.329)").s().p("Ag7BgQgHgDgEgHQgGgIgDgJQgUgLgIgpQgHghAYgWQAQgRAngGIAHgBQAlABA0ghQAJgFAKABQALABAHAHQAIAHABAKQAMBRgoArQglAshWAFIgBAAQgHAAgHgEgAgig0QgiAHgPAOQgUATAGAbIAAAAQAHAlATAJQADAKAGAKQADAEAFADQAFACAFAAQBQgFAjgpQAsgvgShFQgEgOgMgCQgJgBgFADQg5AkgngCIgBAAIgEAAg");
        this.shape_1.setTransform(-.5846, -.0065);
        this.shape_2 = new a.Shape;
        this.shape_2.graphics.f("#FFFFFF").s().p("AgzBPIgDgEQgIgLgBgMQgSgEgIgjQgEgWAQgOQANgNAfgGIADAAQApADA8gmQADgCAEABQAGAAACAIQAQBBgnArQghAmhMAEIAAAAIgFgBg");
        this.shape_2.setTransform(-.4869, -.0144);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1))
    }).prototype = f(b.petal, new a.Rectangle(-11.5, -9.9, 21.9, 19.9), null);
    (b.loading_O = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AguAzIANhlIBQAAIgLBlgAgZAsIAqAAIAKhXIgqAAg");
        this.shape.setTransform(.6, 1.225);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = f(b.loading_O, new a.Rectangle(-7.3,
        -11.4, 14.6, 22.9), null);
    (b.loading_N = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AAQAzIgghVIgKBVIgUAAIANhlIATAAIAfBVIALhVIATAAIgLBlg");
        this.shape.setTransform(.6, 1.225);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = f(b.loading_N, new a.Rectangle(-7.3, -11.4, 14.6, 22.9), null);
    (b.loading_L = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AglAyIANhjIAUAAIgNBcIA3AAIgCAHg");
        this.shape.setTransform(.6, 1.25);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = f(b.loading_L, new a.Rectangle(-6.4, -11.4, 12.9, 22.9), null);
    (b.loading_I = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AgQAyIAOhjIASAAIgMBjg");
        this.shape.setTransform(-.2, 1.25);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = f(b.loading_I, new a.Rectangle(-5.1, -11.4, 10.2, 22.9), null);
    (b.loading_G = function(b, d, e) {
        this.initialize(b,
            d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AgtAyIANhkIBOAAIgEAfIgTAAIACgYIgmAAIgKBXIApAAIAGgqIgbAAIABgFIAuAAIgHA1g");
        this.shape.setTransform(.45, 1.2);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = f(b.loading_G, new a.Rectangle(-7.3, -11.4, 14.7, 22.9), null);
    (b.loading_D = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AguAzIANhlIBOAAIACAwIgOA1gAgZAsIAnAAIANguIgBgpIgpAAg");
        this.shape.setTransform(.475,
            1.225);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = f(b.loading_D, new a.Rectangle(-7.4, -11.4, 14.8, 22.9), null);
    (b.loading_A = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AAeAzIgJgpIgjAAIgQApIgUAAIAnhlIAkAAIAaBlgAATADIgLguIgEAAIgQAuIAfAAg");
        this.shape.setTransform(0, 1.225);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = f(b.loading_A, new a.Rectangle(-7.4, -11.4, 14.8, 22.9), null);
    (b.loading_ = function(b,
        d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AgLAKIADgUIAUAAIgCAUg");
        this.shape.setTransform(-.725, 5.2);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = f(b.loading_, new a.Rectangle(-5.1, -11.4, 10.2, 22.9), null);
    (b.laugh_parts1 = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.lf(["#FF00FC", "#FFB6FE"], [0, 1], -16.7, 0, 16.8, 0).s().p("AimhBIFBgWIAMBlIlCBKgAiTgxIAIBzIEfhCIgJhFg");
        this.shape.setTransform(16.725,
            28.175);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.lf(["#FF8AF1", "#FFFFFF"], [0, .808], -14.8, 0, 14.8, 0).s().p("AiTgwIEegTIAJBFIkfBCg");
        this.shape_1.setTransform(16.7, 28);
        this.shape_2 = new a.Shape;
        this.shape_2.graphics.lf(["#FF00FC", "#FFB6FE"], [0, 1], -13.2, 0, 13.3, 0).s().p("AiEgBIDHiHIBBBPIjDDCgAhsAEIAxBnICoilIgtg2g");
        this.shape_2.setTransform(27.2, 44.675);
        this.shape_3 = new a.Shape;
        this.shape_3.graphics.lf(["#FF8AF1", "#FFFFFF"], [0, .808], -10.9, 0, 10.9, 0).s().p("AhsAHICsh0IAtA2IinClg");
        this.shape_3.setTransform(27.15,
            44.375);
        this.shape_4 = new a.Shape;
        this.shape_4.graphics.lf(["#FF00FC", "#FFB6FE"], [0, 1], -13.5, 0, 13.5, 0).s().p("Ah+BEIgIiZIENBHIgSBkgAhtA0IDUAPIALhFIjlg7g");
        this.shape_4.setTransform(20.7, 8.55);
        this.shape_5 = new a.Shape;
        this.shape_5.graphics.lf(["#FF8AF1", "#FFFFFF"], [0, .808], -11.5, 0, 11.6, 0).s().p("AhsAyIgGhxIDlA7IgLBFg");
        this.shape_5.setTransform(20.6, 8.75);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1))
    }).prototype =
        f(b.laugh_parts1, new a.Rectangle(0, -3.9, 40.5, 62.3), null);
    (b.laugh_parts_a = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.lf(["#FF9933", "#FCE99A"], [0, 1], -9.8, 0, 9.9, 0).s().p("AhbAyIgHhxIDEA7IgKBEg");
        this.shape.setTransform(-17.85, -20.4);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.lf(["#FE9E39", "#FCE99A"], [0, 1], -10.9, 0, 10.9, 0).s().p("AhsAHICth0IAsA2IinClg");
        this.shape_1.setTransform(-13.3, 15.225);
        this.shape_2 = new a.Shape;
        this.shape_2.graphics.lf(["#FE9C37", "#FCE99A"],
            [0, 1], -14.8, 0, 14.8, 0).s().p("AiTgrIEegSIAJA/IkfA8g");
        this.shape_2.setTransform(-23.75, -1.15);
        this.shape_3 = new a.Shape;
        this.shape_3.graphics.f("#FF7812").s().p("Ag+CZIDHiHIBBBPIjFDDgAgnCfIAxBnICoimIgsg2gAjJhGIFBgUIAMBcIlCBFgAi2g3IAIBpIEfg7IgJhAgAhSiJIgHiaIDlBHIgQBkgAhEiZIC0AOIAKhFIjEg8g");
        this.shape_3.setTransform(-20.225, .025);
        this.shape_4 = new a.Shape;
        this.shape_4.graphics.lf(["#FE9E39", "#FCE99A"], [0, 1], -13.8, 0, 13.9, 0).s().p("AiKApIDtirIAoAuIjnDXg");
        this.shape_4.setTransform(-16.025, 14.425);
        this.shape_5 =
            new a.Shape;
        this.shape_5.graphics.lf(["#FE9E39", "#FCE99A"], [0, 1], -13.9, 0, 13.9, 0).s().p("AiCAnIgIhjIEVA9IgJA8g");
        this.shape_5.setTransform(-21.65, -21.9);
        this.shape_6 = new a.Shape;
        this.shape_6.graphics.lf(["#FE9E39", "#FCE99A"], [0, 1], -8.9, 0, 9, 0).s().p("AhQAxIAAgEIAAgEIgBgCIAAgDIAAgEIgBgDIAAgEIAAgBIgBgCIAAgDIAAgDIgBgDIAAgFIAAgCIAAgFIgEguICpgPIAJBAIipA5g");
        this.shape_6.setTransform(-16.9, -3.8);
        this.shape_7 = new a.Shape;
        this.shape_7.graphics.f("#FF781E").s().p("AiDC1IEDi8IA6BDIkADwgAhwC5IAuBaIDnjYIgogugAhYhiIDHgSIANBeIjHBDgAhHhTIAEAvIAAAEIABADIAAAEIAAAEIABADIAAACIAAADIAAABIAAAEIABACIAAAFIAAABIABACIAAAFIAAADIABANICpg4IgJhBgAivilIgKiGIE3BGIgOBZgAigizIEEAWIAJg8IkVg+g");
        this.shape_7.setTransform(-18.625, .025);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_7
            }, {
                t: this.shape_6
            }, {
                t: this.shape_5
            }, {
                t: this.shape_4
            }]
        }, 1).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-40.4, -30, 40.4, 60.1);
    (b.heart_vector = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("EgAGArOIgMgDQgPgGgHgMQmLlZnmlZQiAhbjzimQkAiuh1hSQkmjPjajDQkEjoi6jyQjLkKiAkrQiEk0gqlCQhKo8DPoPQDbotHNk0QEZi7FSg8QFQg8FLBOQFaBREYDDQEOC8CFD3QBcilCeiRQCxigDlhtQERiCElghQEpgiEfBFIADABIADAAIABABQHIB0FUFoQFHFZCDHYQCrJoi/KCQi2JknOHaQjuD1jiCuQh0BbiVBoQhiBGitB1QmtEmkQDIQlzETkiD+QgGAMgQAGIgMADIgHABgEgcNgpAQlDBUj7DOQjQCqiYDoQiUDihPEIQhWEagFEsQgFEqBKEgQBWFJC1ExQCuElD7D4QD8D5DQCcQB2BZCbBtIEWC+QGeEaDyC0QC/CPCgCBQBhBOBeBQIBXBLIBKg/ICTh7QCEhsCXh0QDui1E+jdQCXhoExjOQEKi3CxiRQJZnuEIofQCJkaA6kvQA7k3gdkyQgakShikBQhikEihjWQldnPoSiHIgDAAQkRhCkdAgQkcAhj+B+QjaBsihCTQi2CmhYDGQgKAWgdAAQgcAAgKgWQiHkylLjVQktjDllg4Qh7gTh6AAQjIAAjGA0g");
        this.shape.setTransform(206.7985, 181.7222, .6568, .6568);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.rf(["#FF6B93", "#FFB4C8", "#FFFFFF"], [0, .651, 1], 0, 0, 0, 0, 0, 224.2).s().p("AAAb7IAAABIAAgBQjKiyjtiwQiYhwj3ipQj7ishbhCQinh7hjhlQljk8iTmWQiFl0A/l4QA9lqDekHQDkkOFHhRQDAgwDHAaQC1AXCnBSQCdBMB2BwQBzBvAzB4QA0h4B0hvQB2hwCbhMQCohSC1gXQDHgaC/AwQFJBRDjEOQDeEHA9FqQA/F4iFF0QiSGWlkE8QhjBlioB7QhaBCj6CsQj4CpiYBwQjtCwjKCyIAAABg");
        this.shape_1.setTransform(206.8, 181.7046);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                    t: this.shape_1
                },
                {
                    t: this.shape
                }
            ]
        }).wait(1))
    }).prototype = f(b.heart_vector, new a.Rectangle(0, 0, 413.6, 363.5), null);
    (b.grip = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.frame_0 = function() {
            this.visible = !1
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(2));
        this.shape = new a.Shape;
        this.shape.graphics.f("#FF0000").s().p("AkkAAIEkkkIElEkIklElg");
        this.timeline.addTween(a.Tween.get(this.shape).wait(2))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-29.3, -29.3, 58.7, 58.7);
    (b.gr_exclamation =
        function(b, d, e) {
            this.initialize(b, d, e, {});
            this.shape = new a.Shape;
            this.shape.graphics.f().s("#FF8C00").ss(1.5, 1, 1).p("AArDkIhVAAIAAhHIBVAAgABLjjIgjFTIhPAAIgjlTg");
            this.shape.setTransform(0, -.4);
            this.shape_1 = new a.Shape;
            this.shape_1.graphics.f("#FFD09A").s().p("AgpAjIAAhFIBTAAIAABFg");
            this.shape_1.setTransform(0, 18.85);
            this.shape_2 = new a.Shape;
            this.shape_2.graphics.lf(["#FFFFFF", "#FFCE95"], [0, 1], 0, -7.5, 0, 7.5).s().p("AgnCqIgjlTICVAAIgjFTg");
            this.shape_2.setTransform(0, -6.15);
            this.timeline.addTween(a.Tween.get({}).to({
                state: [{
                        t: this.shape_2
                    },
                    {
                        t: this.shape_1
                    }, {
                        t: this.shape
                    }
                ]
            }).wait(1))
        }).prototype = f(b.gr_exclamation, new a.Rectangle(-8.5, -24.1, 17, 47.5), null);
    (b.good_circle = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.rf(["rgba(255,244,194,0.2)", "#FFCA4A"], [0, 1], 0, 0, 0, 0, 0, 47.8).s().p("AlPFQQiLiLAAjFQAAjECLiLQCLiLDEAAQDFAACLCLQCLCLAADEQAADFiLCLQiLCLjFAAQjEAAiLiLg");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = f(b.good_circle, new a.Rectangle(-47.5, -47.5, 95, 95), null);
    (b.flower2_good =
        function(b, d, e) {
            this.initialize(b, d, e, {});
            this.shape = new a.Shape;
            this.shape.graphics.f("#FFCC66").s().p("AgXA3QgOgGAIgTQAGgOANgMQgOABgRgGQgTgIAGgOQAGgOATAIQAQAIAKALQgBgOAGgRQAJgTANAGQAOAHgIASQgHAQgMAKQAOgBARAGQATAJgGANQgGAOgTgIQgQgHgKgMQABAOgGARQgHAOgJAAIgGgBg");
            this.shape.setTransform(.0156, .025);
            this.timeline.addTween(a.Tween.get(this.shape).wait(1))
        }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-5.6, -5.6, 11.3, 11.3);
    (b.flower1_good = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape =
            new a.Shape;
        this.shape.graphics.f("#FFFF99").s().p("AgCBHQgJgcADgZQgTASgbAJQggAKgIgXQgIgYAhgKQAbgJAZADQgRgRgKgdQgKggAXgIQAYgIAKAhQAJAbgDAaQAQgRAegKQAggLAIAXQAIAYghAKQgbAJgagDQASARAJAdQAMAggYAIQgFABgFAAQgQAAgIgZg");
        this.shape.setTransform(.017, -.0159);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-9.6, -9.6, 19.299999999999997, 19.299999999999997);
    (b.flower_pink2 = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FF74BA").s().p("AgXA3QgOgGAIgTQAGgOANgMQgOABgRgGQgTgIAGgOQAGgOATAIQAQAIAKALQgBgOAGgRQAJgTANAGQAOAHgIASQgHAQgMAKQAOgBARAGQATAJgGANQgGAOgTgIQgQgHgKgMQABAOgGARQgHAOgJAAIgGgBg");
        this.shape.setTransform(.0156, .025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-5.6, -5.6, 11.3, 11.3);
    (b.flower_pink1 = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFA9E9").s().p("AgCBHQgJgcADgZQgTASgbAJQggAKgIgXQgIgYAhgKQAbgJAZADQgRgRgKgdQgKggAXgIQAYgIAKAhQAJAbgDAaQAQgRAegKQAggLAIAXQAIAYghAKQgbAJgagDQASARAJAdQAMAggYAIQgFABgFAAQgQAAgIgZg");
        this.shape.setTransform(.017, -.0159);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype =
        c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-9.6, -9.6, 19.299999999999997, 19.299999999999997);
    (b.finish_1 = function(h, d, e) {
        this.initialize(h, d, e, {});
        this.instance = new b.finish;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = f(b.finish_1, new a.Rectangle(0, 0, 240, 310), null);
    (b.drop2_v2 = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f().s("#FFFFFF").ss(.5, 1, 1).p("AhMgEQgLAeAnALQAKABAmgHQAhgHAuAKIgbgjQghgjgjgBQgwAAgMAhg");
        this.shape.setTransform(.004, .0059);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.rf(["rgba(255,255,255,0)", "#FFFFFF"], [0, .569], 0, 0, 0, 0, 0, 8.9).s().p("AgwAlQgngLALgeQAMghAwAAQAjABAhAjIAbAjQgugKghAHQghAHgMAAIgDgBg");
        this.shape_1.setTransform(.004, .0059);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-8.9, -4.7, 17.8, 9.5);
    (b.drop1a = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AAhAhQgCgDAAgEQAAgEACgDQAEgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgEgDgAgoAYQgKgKAAgOQAAgOAKgLQALgKAOAAQAPAAAJAKQAKALAAAOQAAAOgKAKQgJAKgPAAQgOAAgLgKg");
        this.shape.setTransform(-1.075, 13.575);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1));
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("#A9E5F2").s().p("AAACjQgcABgNgTQgLgRADgaQADgqAujfQAuDfAEAqQADAagLARQgMATgbAAIgDgBg");
        this.shape_1.setTransform(.375, 2.9024);
        this.timeline.addTween(a.Tween.get(this.shape_1).wait(1));
        this.shape_2 = new a.Shape;
        this.shape_2.graphics.f("#A9E5F2").s().p("AhKDRQgXgbAFgnQAHg8BRk9IACgDIACgBIADABIACADQBSE9AHA8QAEAmgbAcIAAAAQgcAdguABIgCAAQgtAAgYgegAhSCQQgFAiAUAZQAXAaApAAQAqgBAZgaIAAAAQAYgZgEghIAAAAQgHg6hNkrQhMErgGA6g");
        this.shape_2.setTransform(.5441, -.5995);
        this.shape_3 = new a.Shape;
        this.shape_3.graphics.f("#FFFFFF").s().p("AhDDDQgUgYAFgiQAGg6BMksQBNEsAHA6IAAAAQAEAhgYAZIAAAAQgZAagqABIgBAAQgpAAgWgbg");
        this.shape_3.setTransform(.5443, .1378);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                    t: this.shape_3
                },
                {
                    t: this.shape_2
                }
            ]
        }).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-8.8, -24.5, 18.8, 47.8);
    (b.drop1_v2 = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f().s("#FFFFFF").ss(.5, 1, 1).p("AA4hDQAgAYgfAmQgJAHgrASQglAQgmAqQgDgZAFgdQAJg5AjgZQAvghAhAYg");
        this.shape.setTransform(1.2129, 1.7575, 1, 1, 0, 0, 180);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.rf(["rgba(255,255,255,0)", "#FFFFFF"], [0, .569], -.6, -2, 0, -.6, -2, 10.4).s().p("AhEAYQAJg5AjgZQAvghAhAYQAgAYgfAmQgJAHgrASQglAQgmAqQgDgZAFgdg");
        this.shape_1.setTransform(1.2129, 1.7575, 1, 1, 0, 0, 180);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-7, -7, 16.5, 17.6);
    (b.dark = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#000000").s().p("AyvYOMAAAgwbMAlfAAAMAAAAwbg");
        this.shape.setTransform(1, 0, 1.0083, 1);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = f(b.dark, new a.Rectangle(-120,
        -155, 242, 310), null);
    (b.chord2 = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FC8D05").s().p("AAZDjQgegIgGgUQgGgVAUgUQAWgUAkgJQAlgIAeAIIAMAEIAAjNQgJgHh6hUIAADGIADAHQAGAUgUAUQgWAUglAJQgkAIgegIQgfgIgGgUQgGgVAVgUQAWgUAkgJQAlgIAeAIIAMAEIAAj3IBXA8QBIAzANALQABAKAAB9IABB8IADAHQAGAUgVAUQgWAUglAJQgSAEgQAAQgRAAgPgEg");
        this.shape.setTransform(16.66, 23.1125);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = f(b.chord2, new a.Rectangle(0, 0, 33.3, 46.2), null);
    (b.chord1 = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FCE05F").s().p("Ah3CpQgfgIgGgUQgGgVAVgUQAWgUAkgJQAlgIAeAIIAMAEIAAj3QAIAIAiAKQArALASAJQBKAjgTBgQgShGg9gXQgUgHgVgCIgRAAIAADGIADAHQAGAUgVAUQgVAUglAJQgSAEgQAAQgRAAgPgEg");
        this.shape.setTransform(15.8526, 17.3125);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = f(b.chord1, new a.Rectangle(0, 0, 31.7, 34.6), null);
    (b.character1_face_eyeclose = function(h, d, e) {
        this.initialize(h, d, e, {});
        this.instance =
            new b.ch_face6;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = f(b.character1_face_eyeclose, new a.Rectangle(0, 0, 108, 112), null);
    (b.character1_base = function(h, d, e) {
        this.initialize(h, d, e, {});
        this.instance = new b.ch_base;
        this.instance.parent = this;
        this.instance.setTransform(-120, -396, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = f(b.character1_base, new a.Rectangle(-120, -396, 496, 612), null);
    (b.button = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("rgba(83,83,83,0.008)").s().p("AyvYOMAAAgwbMAlfAAAMAAAAwbg");
        this.timeline.addTween(a.Tween.get(this.shape).wait(4))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-120, -155, 240, 310);
    (b.btn_window = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("rgba(0,0,0,0.02)").s().p("AjHDIIAAmPIGPAAIAAGPg");
        this.shape.setTransform(20, 20);
        this.timeline.addTween(a.Tween.get(this.shape).wait(4))
    }).prototype =
        c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(0, 0, 40, 40);
    (b.bg_zoom_half = function(h, d, e) {
        this.initialize(h, d, e, {});
        this.instance = new b.bg;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(0, 0, 496, 612);
    (b.angry = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f().s("#C6002C").ss(2, 1, 1).p("AgwA7QgGgeAJgdQATg6BOAA");
        this.shape.setTransform(7.5339,
            8.025);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f().s("#C6002C").ss(2, 1, 1).p("AAxA7QAHgegKgdQgTg6hOAA");
        this.shape_1.setTransform(-7.468, 8.025);
        this.shape_2 = new a.Shape;
        this.shape_2.graphics.f().s("#C6002C").ss(2, 1, 1).p("Agwg6IgCATQgBAWAGARQATA7BOAA");
        this.shape_2.setTransform(7.5481, -7.975);
        this.shape_3 = new a.Shape;
        this.shape_3.graphics.f().s("#C6002C").ss(2, 1, 1).p("AAxg6IACATQABAWgGARQgTA7hOAA");
        this.shape_3.setTransform(-7.4979, -7.975);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                    t: this.shape_3
                },
                {
                    t: this.shape_2
                }, {
                    t: this.shape_1
                }, {
                    t: this.shape
                }
            ]
        }).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-13.6, -14.8, 27.299999999999997, 29.700000000000003);
    (b.concent2 = function(b, d, e) {
        this.initialize(b, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("Agow/IBRACMgAgAh9g");
        this.shape.setTransform(2.575, -204.175);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = f(b.concent2, new a.Rectangle(-1.5, -313, 8.2, 217.7), null);
    (b.concent = function(b, d, e) {
        this.initialize(b,
            d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AAm8aMAAYA4gIh7AUg");
        this.shape.setTransform(3.475, 285.8);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }).prototype = f(b.concent, new a.Rectangle(-2.7, 104, 12.399999999999999, 363.7), null);
    (b.yajirusi = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_8 = function() {
            this.gotoAndPlay(1)
        };
        this.timeline.addTween(a.Tween.get(this).wait(8).call(this.frame_8).wait(1));
        this.instance = new b.yajirusi_p;
        this.instance.parent = this;
        this.instance.setTransform(-1.5,
            -1.5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            regX: -5.3,
            regY: -5.2,
            x: -6.55,
            y: -6.45
        }, 0).wait(1).to({
            x: -6,
            y: -5.9
        }, 0).wait(1).to({
            x: -5.45,
            y: -5.35
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 0
        }, 0).wait(1).to({
            regX: -5.3,
            regY: -5.2,
            x: -5.5,
            y: -5.4
        }, 0).wait(1).to({
            x: -6.05,
            y: -5.95
        }, 0).wait(1).to({
            x: -6.6,
            y: -6.5
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: -1.5,
            y: -1.5
        }, 0).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-12.2, -11.8, 12.2, 11.8);
    (b.uru_set = function(c, d, e) {
        this.initialize(c,
            d, e, {});
        this.frame_5 = function() {
            this.gotoAndPlay(0)
        };
        this.timeline.addTween(a.Tween.get(this).wait(5).call(this.frame_5).wait(1));
        this.instance = new b.uru_gra("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(0, 3.3, 1, 1, 0, 0, 0, 0, 3.3);
        this.timeline.addTween(a.Tween.get(this.instance).wait(2).to({
            scaleX: 1.05,
            scaleY: 1.05
        }, 0).wait(1).to({
            scaleX: 1,
            scaleY: 1
        }, 0).wait(1).to({
            scaleX: 1.05,
            scaleY: 1.05
        }, 0).wait(2))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-2.2, -.1, 4.5, 6.8999999999999995);
    (b.tie_inner = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.stop();
            0 == exportRoot._g.voice_flag ? this.s.visible = !1 : this.f.visible = !1
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1));
        this.s = new b.placebase_sp;
        this.s.name = "s";
        this.s.parent = this;
        this.s.setTransform(0, 0, 1, 1, 0, 0, 0, 120, 16);
        this.timeline.addTween(a.Tween.get(this.s).wait(1));
        this.f = new b.placebase_fp;
        this.f.name = "f";
        this.f.parent = this;
        this.f.setTransform(0, 0, 1, 1, 0, 0, 0, 120, 16);
        this.timeline.addTween(a.Tween.get(this.f).wait(1))
    }).prototype =
        f(b.tie_inner, new a.Rectangle(-120, -16, 240, 32), null);
    (b.tie = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#333333").s().p("AA1BEIgNgHIgJgGIgKAGIgLAHIgNAEIgKgQIANgDIALgDIAIgFQgIgHgEgGIgHgKIgBgFIANgIIACAEIAGAKIAKALIAIgJIAGgKIADgIIg1AAIAAgPIBHAAIAAANIgBAEIgEAKQgDAGgEAHQgEAGgGAGIANAHQAJADAKABIgJARIgNgEgAhFBIIAAgzIA2AAIAAAuIglgBIAAAGgAg0A0IAVAAIAAgTIgVAAgAhDAKIAAgMIAzAAIAAAMgAgMgaQAIgCAEgFQACgEABgIIABgOIAAgGIAAgHIAyAAIAAAmIABAEIACAAIAEAAIACgEIAAgGIAAgJIAMAIQABALgCAFQgCAGgDACQgDACgGAAIgHAAQgHAAgEgEQgEgEAAgGIAAgbIgSAAQAAAKgBAJQgCAIgFAHQgFAHgJAEgAhDgLIAAgOIAzAAIAAAOgAhLgjIAAgOIBCAAIAAAOgAhDg6IAAgOIAzAAIAAAOg");
        this.shape.setTransform(56, .7);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("#333333").s().p("AhKA9QAGgLADgOQADgNABgPIABgfIAAgMIgMAAIAAgOIAUAAIAAgaIARAAIAAAaIAVAAIAAAOIgfAAIAAAQIAcAAIAAAXIAAAfQAAANgBAHQgCAHgDAEQgDAEgFABQgFABgIAAIgHgQIAHAAIAHAAQACgBABgEIACgLIAAgUIAAgYIgNAAIgCAcQgBAPgEANQgEAOgGAKgAAOBGIgFAAQgEgBgCgEQgDgDAAgHIAAgzIgKACIAAgNIAKgCIAAgOIgEAFIgCACIgLgMIACgDIAIgJIAIgOQAEgJADgMIAOAEIgBAHIgCAHIA3AAIAAAPIg9AAIgGAKIgHAIIAPAAIAAAMIAMgCIAAgVIAPAAIAAATIAcgFIAAAkQAAAIgCAEQgCAFgFABQgFACgIAAIgEgOQAHAAADgCQACgBAAgFIAAgSIgOADIAAArIgPAAIAAgpIgMABIAAAxIABADIACACIACAAIAbAAIAJgBQADgBABgDIABgMIAOAKQABAKgEAFQgDAFgFABIgMABg");
        this.shape_1.setTransform(40, .425);
        this.shape_2 = new a.Shape;
        this.shape_2.graphics.f("#333333").s().p("AhCA7QAagDATgJQASgIAMgNQAMgMAIgPQAHgPAEgPIg1AAQgIAOgMAMQgMALgPAKIgPgNQAMgGAKgIQAJgJAIgKQAIgJAFgKQAFgKACgJIASAEIgCAIIgEAJIArAAIgFgLIgGgLIALgEIAHANIAGANIAKAAQgCANgEAOQgFAPgHAOQgIAOgMAOQgNANgSAKQgSALgbAFgAA7g6IgIgNIALgEIAIANIAGAOIgLAFIgGgPg");
        this.shape_2.setTransform(24.275, .1);
        this.shape_3 = new a.Shape;
        this.shape_3.graphics.f("#333333").s().p("AhAAvQAbgEAUgJQASgHANgNQAOgMAJgQQAJgRAEgVIARAKIgIAXQgEANgIAMQgJAMgMAMQgNAKgTAKQgUAJgbAFgAgigeIgRgLIgPgIIANgOIAKAGIAMAHIANAJIAMAJIgNAPQgHgGgIgHg");
        this.shape_3.setTransform(8.4, .8);
        this.shape_4 = new a.Shape;
        this.shape_4.graphics.f("#333333").s().p("AgXBJIgPAAQgIgBgHgEQgGgDgEgGQgDgHAAgJIAAhlIASAAIAAAMIAAATIAAAWQAVgGATgJQARgIAOgIIALAPQgOAIgOAGIgcAKIgaAIIAAASIgBALQAAAGAEAEQAEAFAHABIALAAIALAAQANAAAQgBQAQgCARgEIgCAUIgVADIgTABIgRAAIgOAAgAAjghQgFgDgDgEQgCgFAAgGQAAgGACgFQADgFAFgDQAFgCAFAAQAHAAAEACQAGADACAFQADAFAAAGQAAAGgDAFQgCAEgGADQgEADgHAAQgFAAgFgDgAAmg7QgDADAAAFQAAAFADADQADADAEAAQAFAAADgDQADgDAAgFQAAgFgDgDQgDgDgFAAQgEAAgDADg");
        this.shape_4.setTransform(-6.7,
            -.15);
        this.shape_5 = new a.Shape;
        this.shape_5.graphics.f("#333333").s().p("AhAAvQAbgEATgJQATgHAOgNQANgMAJgQQAJgRAFgVIAQAKIgHAXQgFANgJAMQgHAMgOAMQgNAKgSAKQgTAJgcAFgAgigeIgRgLIgPgIIAMgOIAKAGIANAHIANAJIALAJIgNAPQgFgGgJgHg");
        this.shape_5.setTransform(-23.6, .8);
        this.shape_6 = new a.Shape;
        this.shape_6.graphics.f("#333333").s().p("AgyA0QAggDATgJQAUgJAKgNQALgPABgQIgSAAIgWAAIgXAAIgUAAIgRABIgGAAIAAgQIB/AAQgBApgaAYQgaAYgxAIgAgxg0IAAgQIBkAAIAAAQg");
        this.shape_6.setTransform(-40.05, .85);
        this.shape_7 = new a.Shape;
        this.shape_7.graphics.f("#333333").s().p("AhCA7QAagDATgJQASgIAMgNQAMgMAIgPQAHgPAEgPIg1AAQgIAOgMAMQgMALgPAKIgPgNQAMgGAKgIQAJgJAIgKQAIgJAFgKQAFgKACgJIASAEIgCAIIgEAJIArAAIgFgLIgGgLIALgEIAHANIAGANIAKAAQgCANgEAOQgFAPgHAOQgIAOgMAOQgNANgSAKQgSALgbAFgAA7g6IgIgNIALgEIAIANIAGAOIgLAFIgGgPg");
        this.shape_7.setTransform(-55.725, .1);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape_7
            }, {
                t: this.shape_6
            }, {
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1));
        this.instance = new b.tie_inner;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = f(b.tie, new a.Rectangle(-120, -16, 240, 32), null);
    (b.square2c = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.squear;
        this.instance.parent =
            this;
        this.instance.setTransform(.7, 20.7, 1, 1, 0, 0, 0, .7, .7);
        this.instance_1 = new b.squear;
        this.instance_1.parent = this;
        this.instance_1.setTransform(.7, 18.2, 1, 1, 0, 0, 0, .7, .7);
        this.instance_2 = new b.squear;
        this.instance_2.parent = this;
        this.instance_2.setTransform(.7, 15.7, 1, 1, 0, 0, 0, .7, .7);
        this.instance_3 = new b.squear;
        this.instance_3.parent = this;
        this.instance_3.setTransform(.7, 13.2, 1, 1, 0, 0, 0, .7, .7);
        this.instance_4 = new b.squear;
        this.instance_4.parent = this;
        this.instance_4.setTransform(.7, 10.7, 1, 1, 0, 0, 0, .7, .7);
        this.instance_5 = new b.squear;
        this.instance_5.parent = this;
        this.instance_5.setTransform(.7, 8.2, 1, 1, 0, 0, 0, .7, .7);
        this.instance_6 = new b.squear;
        this.instance_6.parent = this;
        this.instance_6.setTransform(.7, 5.7, 1, 1, 0, 0, 0, .7, .7);
        this.instance_7 = new b.squear;
        this.instance_7.parent = this;
        this.instance_7.setTransform(.7, 3.2, 1, 1, 0, 0, 0, .7, .7);
        this.instance_8 = new b.squear;
        this.instance_8.parent = this;
        this.instance_8.setTransform(.7, .7, 1, 1, 0, 0, 0, .7, .7);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                    t: this.instance_8
                },
                {
                    t: this.instance_7
                }, {
                    t: this.instance_6
                }, {
                    t: this.instance_5
                }, {
                    t: this.instance_4
                }, {
                    t: this.instance_3
                }, {
                    t: this.instance_2
                }, {
                    t: this.instance_1
                }, {
                    t: this.instance
                }
            ]
        }).wait(1))
    }).prototype = f(b.square2c, new a.Rectangle(0, 0, 1.5, 21.5), null);
    (b.square2 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.squear;
        this.instance.parent = this;
        this.instance.setTransform(.7, 25.7, 1, 1, 0, 0, 0, .7, .7);
        this.instance_1 = new b.squear;
        this.instance_1.parent = this;
        this.instance_1.setTransform(.7, 23.2, 1, 1, 0, 0, 0, .7, .7);
        this.instance_2 =
            new b.squear;
        this.instance_2.parent = this;
        this.instance_2.setTransform(.7, 20.7, 1, 1, 0, 0, 0, .7, .7);
        this.instance_3 = new b.squear;
        this.instance_3.parent = this;
        this.instance_3.setTransform(.7, 18.2, 1, 1, 0, 0, 0, .7, .7);
        this.instance_4 = new b.squear;
        this.instance_4.parent = this;
        this.instance_4.setTransform(.7, 15.7, 1, 1, 0, 0, 0, .7, .7);
        this.instance_5 = new b.squear;
        this.instance_5.parent = this;
        this.instance_5.setTransform(.7, 13.2, 1, 1, 0, 0, 0, .7, .7);
        this.instance_6 = new b.squear;
        this.instance_6.parent = this;
        this.instance_6.setTransform(.7,
            10.7, 1, 1, 0, 0, 0, .7, .7);
        this.instance_7 = new b.squear;
        this.instance_7.parent = this;
        this.instance_7.setTransform(.7, 8.2, 1, 1, 0, 0, 0, .7, .7);
        this.instance_8 = new b.squear;
        this.instance_8.parent = this;
        this.instance_8.setTransform(.7, 5.7, 1, 1, 0, 0, 0, .7, .7);
        this.instance_9 = new b.squear;
        this.instance_9.parent = this;
        this.instance_9.setTransform(.7, 3.2, 1, 1, 0, 0, 0, .7, .7);
        this.instance_10 = new b.squear;
        this.instance_10.parent = this;
        this.instance_10.setTransform(.7, .7, 1, 1, 0, 0, 0, .7, .7);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                    t: this.instance_10
                },
                {
                    t: this.instance_9
                }, {
                    t: this.instance_8
                }, {
                    t: this.instance_7
                }, {
                    t: this.instance_6
                }, {
                    t: this.instance_5
                }, {
                    t: this.instance_4
                }, {
                    t: this.instance_3
                }, {
                    t: this.instance_2
                }, {
                    t: this.instance_1
                }, {
                    t: this.instance
                }
            ]
        }).wait(1))
    }).prototype = f(b.square2, new a.Rectangle(0, 0, 1.5, 26.5), null);
    (b.spread_flower_pink = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_7 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(7).call(this.frame_7).wait(1));
        this.instance = new b.flower_pink2("synched", 0);
        this.instance.parent =
            this;
        this.instance.setTransform(21.35, 5.15, .7153, .7153);
        this.instance.filters = [new a.ColorFilter(.83, .83, .83, 1, 43.35, 43.35, 43.35, 0)];
        this.instance.cache(-8, -8, 15, 15);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            scaleX: .9946,
            scaleY: .9946,
            rotation: -144.6153,
            x: 43.3235,
            y: 3.744,
            alpha: .6862
        }, 0).wait(1).to({
            scaleX: 1.081,
            scaleY: 1.081,
            rotation: -189.3044,
            x: 50.1138,
            y: 3.3095,
            alpha: .5892
        }, 0).wait(1).to({
            scaleX: 1.139,
            scaleY: 1.139,
            rotation: -219.35,
            x: 54.679,
            y: 3.0174,
            alpha: .524
        }, 0).wait(1).to({
            scaleX: 1.2095,
            scaleY: 1.2095,
            rotation: -255.8693,
            x: 60.2279,
            y: 2.6624,
            alpha: .4447
        }, 0).wait(1).to({
            scaleX: 1.4107,
            scaleY: 1.4107,
            rotation: -360,
            x: 76.05,
            y: 1.65,
            alpha: .2188
        }, 0).to({
            _off: !0
        }, 1).wait(2));
        this.instance_1 = new b.flower_pink2("synched", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(-14, -10.15);
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(1).to({
            scaleX: 1.2152,
            scaleY: 1.2152,
            rotation: -144.6153,
            x: -24.1833,
            y: -24.009,
            alpha: .6862
        }, 0).wait(1).to({
            scaleX: 1.2817,
            scaleY: 1.2817,
            rotation: -189.3044,
            x: -27.3302,
            y: -28.2917,
            alpha: .5892
        }, 0).wait(1).to({
            scaleX: 1.3264,
            scaleY: 1.3264,
            rotation: -219.35,
            x: -29.4459,
            y: -31.171,
            alpha: .524
        }, 0).wait(1).to({
            scaleX: 1.3808,
            scaleY: 1.3808,
            rotation: -255.8693,
            x: -32.0175,
            y: -34.6708,
            alpha: .4447
        }, 0).wait(1).to({
            scaleX: 1.5357,
            scaleY: 1.5357,
            rotation: -360,
            x: -39.35,
            y: -44.65,
            alpha: .2188
        }, 0).to({
            _off: !0
        }, 1).wait(2));
        this.instance_2 = new b.flower_pink1("synched", 0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(15.8, -6.5, .7927, .7927);
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(1).to({
            scaleX: .9181,
            scaleY: .9181,
            rotation: -144.6153,
            x: 33.0735,
            y: -24.6372,
            alpha: .6862
        }, 0).wait(1).to({
            scaleX: .9569,
            scaleY: .9569,
            rotation: -189.3044,
            x: 38.4114,
            y: -30.2419,
            alpha: .5892
        }, 0).wait(1).to({
            scaleX: .9829,
            scaleY: .9829,
            rotation: -219.35,
            x: 42.0001,
            y: -34.0102,
            alpha: .524
        }, 0).wait(1).to({
            scaleX: 1.0146,
            scaleY: 1.0146,
            rotation: -255.8693,
            x: 46.3622,
            y: -38.5903,
            alpha: .4447
        }, 0).wait(1).to({
            scaleX: 1.1049,
            scaleY: 1.1049,
            rotation: -360,
            x: 58.8,
            y: -51.65,
            alpha: .2188
        }, 0).to({
            _off: !0
        }, 1).wait(2));
        this.instance_3 = new b.flower_pink2("synched",
            0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(-14.45, 14.3, .7153, .7153);
        this.instance_3.filters = [new a.ColorFilter(.83, .83, .83, 1, 43.35, 43.35, 43.35, 0)];
        this.instance_3.cache(-8, -8, 15, 15);
        this.timeline.addTween(a.Tween.get(this.instance_3).wait(1).to({
            scaleX: .9946,
            scaleY: .9946,
            rotation: -144.6153,
            x: -28.0278,
            y: 32.5778,
            alpha: .6862
        }, 0).wait(1).to({
            scaleX: 1.081,
            scaleY: 1.081,
            rotation: -189.3044,
            x: -32.2236,
            y: 38.226,
            alpha: .5892
        }, 0).wait(1).to({
            scaleX: 1.139,
            scaleY: 1.139,
            rotation: -219.35,
            x: -35.0445,
            y: 42.0234,
            alpha: .524
        }, 0).wait(1).to({
            scaleX: 1.2095,
            scaleY: 1.2095,
            rotation: -255.8693,
            x: -38.4733,
            y: 46.639,
            alpha: .4447
        }, 0).wait(1).to({
            scaleX: 1.4107,
            scaleY: 1.4107,
            rotation: -360,
            x: -48.25,
            y: 59.8,
            alpha: .2188
        }, 0).to({
            _off: !0
        }, 1).wait(2));
        this.instance_4 = new b.flower_pink2("synched", 0);
        this.instance_4.parent = this;
        this.instance_4.setTransform(5.6, 19);
        this.instance_4.filters = [new a.ColorFilter(0, 0, 0, 1, 255, 153, 204, 0)];
        this.instance_4.cache(-8, -8, 15, 15);
        this.timeline.addTween(a.Tween.get(this.instance_4).wait(1).to({
            scaleX: 1.1953,
            scaleY: 1.1953,
            rotation: -144.6153,
            x: 13.6543,
            y: 39.8085,
            alpha: .6862
        }, 0).wait(1).to({
            scaleX: 1.2556,
            scaleY: 1.2556,
            rotation: -189.3044,
            x: 16.1432,
            y: 46.2388,
            alpha: .5892
        }, 0).wait(1).to({
            scaleX: 1.2962,
            scaleY: 1.2962,
            rotation: -219.35,
            x: 17.8166,
            y: 50.562,
            alpha: .524
        }, 0).wait(1).to({
            scaleX: 1.3455,
            scaleY: 1.3455,
            rotation: -255.8693,
            x: 19.8505,
            y: 55.8168,
            alpha: .4447
        }, 0).wait(1).to({
            scaleX: 1.4861,
            scaleY: 1.4861,
            rotation: -360,
            x: 25.65,
            y: 70.8,
            alpha: .2188
        }, 0).to({
            _off: !0
        }, 1).wait(2));
        this.instance_5 = new b.flower_pink2("synched",
            0);
        this.instance_5.parent = this;
        this.instance_5.setTransform(-20.9, 2.15);
        this.timeline.addTween(a.Tween.get(this.instance_5).wait(1).to({
            scaleX: 1.3587,
            scaleY: 1.3587,
            rotation: -144.6153,
            x: -42.1705,
            y: 3.9577,
            alpha: .6862
        }, 0).wait(1).to({
            scaleX: 1.4695,
            scaleY: 1.4695,
            rotation: -189.3044,
            x: -48.7435,
            y: 4.5163,
            alpha: .5892
        }, 0).wait(1).to({
            scaleX: 1.544,
            scaleY: 1.544,
            rotation: -219.35,
            x: -53.1627,
            y: 4.8919,
            alpha: .524
        }, 0).wait(1).to({
            scaleX: 1.6346,
            scaleY: 1.6346,
            rotation: -255.8693,
            x: -58.5341,
            y: 5.3484,
            alpha: .4447
        }, 0).wait(1).to({
            scaleX: 1.8929,
            scaleY: 1.8929,
            rotation: -360,
            x: -73.85,
            y: 6.65,
            alpha: .2188
        }, 0).to({
            _off: !0
        }, 1).wait(2));
        this.instance_6 = new b.flower_pink1("synched", 0);
        this.instance_6.parent = this;
        this.instance_6.setTransform(.3, -12.15, .7812, .7812, -44.9992);
        this.timeline.addTween(a.Tween.get(this.instance_6).wait(1).to({
            scaleX: 1.0148,
            scaleY: 1.0148,
            rotation: 43.8468,
            x: -1.106,
            y: -37.9799,
            alpha: .6862
        }, 0).wait(1).to({
            scaleX: 1.087,
            scaleY: 1.087,
            rotation: -39.9454,
            x: -1.5405,
            y: -45.9619,
            alpha: .5892
        }, 0).wait(1).to({
            scaleX: 1.1355,
            scaleY: 1.1355,
            rotation: -96.281,
            x: -1.8326,
            y: -51.3284,
            alpha: .524
        }, 0).wait(1).to({
            scaleX: 1.1945,
            scaleY: 1.1945,
            rotation: -164.7547,
            x: -2.1876,
            y: -57.8511,
            alpha: .4447
        }, 0).wait(1).to({
            scaleX: 1.3627,
            scaleY: 1.3627,
            rotation: 0,
            x: -3.2,
            y: -76.45,
            alpha: .2188
        }, 0).to({
            _off: !0
        }, 1).wait(2));
        this.instance_7 = new b.spread_flower_circle_pink;
        this.instance_7.parent = this;
        this.instance_7.setTransform(0, 0, .5578, .5578);
        this.timeline.addTween(a.Tween.get(this.instance_7).to({
            scaleX: 1.2947,
            scaleY: 1.2947,
            alpha: .3984
        }, 1, a.Ease.get(1)).to({
            scaleX: 1.7159,
            scaleY: 1.7159,
            alpha: .0508
        }, 4, a.Ease.get(-1)).to({
            _off: !0
        }, 1).wait(2))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-84.4, -89.6, 168.5, 171.1);
    (b.pusher_next = function(c, d, e) {
        this.initialize(c, d, e, {
            lp: 5
        });
        this.frame_0 = function() {
            this.play()
        };
        this.frame_24 = function() {
            this.gotoAndPlay("lp")
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(1));
        this.instance = new b.pusher_next_inner("synched", 0);
        this.instance.parent = this;
        this.instance.alpha = .1016;
        this.timeline.addTween(a.Tween.get(this.instance).to({
                alpha: 1
            },
            5).to({
            alpha: 0
        }, 12, a.Ease.get(-1)).to({
            alpha: 1
        }, 7, a.Ease.get(-1)).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-24.2, -12.1, 48.4, 24.299999999999997);
    (b.petal_container = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            exportRoot._g.ios_flag ? (this.visible = !1, this.gotoAndStop(3)) : this.gotoAndPlay(exportRoot._u.random(40) + 2);
            this.x = exportRoot._u.random(240)
        };
        this.frame_58 = function() {
            this._x = exportRoot._u.random(241);
            this.gotoAndPlay(2)
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(58).call(this.frame_58).wait(1));
        this.instance = new b.petal;
        this.instance.parent = this;
        this.instance.setTransform(-1, -.3, .9999, .9999, -53.9688);
        this.instance._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance).wait(5).to({
            _off: !1
        }, 0).wait(1).to({
            regX: -.6,
            rotation: 39.725,
            x: -1.35,
            y: 5.45
        }, 0).wait(1).to({
            scaleX: .9998,
            scaleY: .9998,
            rotation: 51.9128,
            x: -1.9,
            y: 17.3
        }, 0).wait(1).to({
            rotation: 68.1772,
            x: -4.35,
            y: 31.9
        }, 0).wait(1).to({
            scaleX: .9997,
            scaleY: .9997,
            rotation: 87.8992,
            x: -9.9,
            y: 48.25
        }, 0).wait(1).to({
            scaleX: .9995,
            scaleY: .9995,
            rotation: 109.8503,
            x: -19.75,
            y: 65.1
        }, 0).wait(1).to({
            scaleX: .9994,
            scaleY: .9994,
            rotation: 131.6233,
            x: -33.95,
            y: 80.45
        }, 0).wait(1).to({
            scaleX: .9993,
            scaleY: .9993,
            rotation: 150.7176,
            x: -50.7,
            y: 92.75
        }, 0).wait(1).to({
            scaleX: .9992,
            scaleY: .9992,
            rotation: 165.701,
            x: -66.55,
            y: 101.25
        }, 0).wait(1).to({
            regX: 0,
            rotation: 15.0346,
            x: -76.45,
            y: 105.35
        }, 0).wait(1).to({
            scaleX: .9446,
            scaleY: .9985,
            rotation: 0,
            skewX: 46.9952,
            skewY: -133.0049,
            x: -74.6,
            y: 117.95
        }, 0).wait(1).to({
            regX: -.6,
            skewX: 45.0775,
            skewY: -134.9226,
            x: -73.05,
            y: 122.85
        }, 0).wait(1).to({
            skewX: 40.7786,
            skewY: -139.2214,
            x: -70.3,
            y: 132.15
        }, 0).wait(1).to({
            skewX: 35.1625,
            skewY: -144.8376,
            x: -66.1,
            y: 143.85
        }, 0).wait(1).to({
            skewX: 28.7159,
            skewY: -151.2841,
            x: -59.85,
            y: 157.1
        }, 0).wait(1).to({
            skewX: 21.7194,
            skewY: -158.2805,
            x: -51.2,
            y: 171.2
        }, 0).wait(1).to({
            skewX: 14.3621,
            skewY: -165.6379,
            x: -39.6,
            y: 185.4
        }, 0).wait(1).to({
            skewX: 6.7903,
            skewY: -173.2095,
            x: -24.75,
            y: 198.65
        }, 0).wait(1).to({
            skewX: -.8645,
            skewY: -180.8644,
            x: -7.1,
            y: 210
        }, 0).wait(1).to({
            skewX: -8.4642,
            skewY: -188.464,
            x: 12.2,
            y: 218.65
        }, 0).wait(1).to({
            skewX: -15.8344,
            skewY: -195.8341,
            x: 31.65,
            y: 224.65
        }, 0).wait(1).to({
            skewX: -22.7064,
            skewY: -202.7061,
            x: 49.65,
            y: 228.35
        }, 0).wait(1).to({
            skewX: -28.5462,
            skewY: -208.5459,
            x: 64.7,
            y: 230.3
        }, 0).wait(1).to({
            regX: 0,
            skewX: -31.6765,
            skewY: -211.6761,
            x: 72.1,
            y: 231.3
        }, 0).wait(1).to({
            scaleX: 1,
            scaleY: 1,
            rotation: -47.4674,
            skewX: 0,
            skewY: -360,
            x: 75.1,
            y: 239.7
        }, 0).wait(1).to({
            regX: -.6,
            rotation: 61.2868,
            x: 73.5,
            y: 243.35
        }, 0).wait(1).to({
            rotation: 66.2549,
            x: 70.7,
            y: 251.8
        }, 0).wait(1).to({
            rotation: 72.8942,
            x: 66.85,
            y: 262.3
        }, 0).wait(1).to({
                rotation: 80.9055,
                x: 61.75,
                y: 274.2
            },
            0).wait(1).to({
            rotation: 90.1526,
            x: 55.25,
            y: 287.05
        }, 0).wait(1).to({
            rotation: 100.5912,
            x: 47.1,
            y: 300.35
        }, 0).wait(1).to({
            rotation: 112.1974,
            x: 37.1,
            y: 313.75
        }, 0).wait(1).to({
            rotation: 124.8648,
            x: 24.95,
            y: 326.6
        }, 0).wait(1).to({
            rotation: 138.2595,
            x: 10.7,
            y: 338.3
        }, 0).wait(1).to({
            rotation: 151.7772,
            x: -5.3,
            y: 348.15
        }, 0).wait(1).to({
            rotation: 164.6089,
            x: -22.3,
            y: 355.7
        }, 0).wait(1).to({
            rotation: 175.9378,
            x: -38.95,
            y: 360.75
        }, 0).wait(1).to({
            rotation: 184.8983,
            x: -53.1,
            y: 363.65
        }, 0).wait(1).to({
                regX: 0,
                rotation: 15.9802,
                x: -61.15,
                y: 364.75
            },
            0).wait(1).to({
            scaleX: .9446,
            scaleY: .9985,
            rotation: 0,
            skewX: 46.9952,
            skewY: -493.0049,
            x: -70.3,
            y: 369.75
        }, 0).wait(1).to({
            regX: -.6,
            skewX: 134.3444,
            skewY: -405.6556,
            x: -70.95,
            y: 374.55
        }, 0).wait(1).to({
            skewX: 125.0094,
            skewY: -414.9906,
            x: -70.45,
            y: 384.1
        }, 0).wait(1).to({
            skewX: 112.2593,
            skewY: -427.7407,
            x: -68.55,
            y: 396.55
        }, 0).wait(1).to({
            skewX: 96.7257,
            skewY: -443.2742,
            x: -64.4,
            y: 410.95
        }, 0).wait(1).to({
            skewX: 79.0999,
            skewY: -460.8999,
            x: -57.1,
            y: 426.55
        }, 0).wait(1).to({
            skewX: 60.6403,
            skewY: -479.3594,
            x: -45.95,
            y: 442.15
        }, 0).wait(1).to({
            skewX: 42.9229,
            skewY: -497.0768,
            x: -31.55,
            y: 456.4
        }, 0).wait(1).to({
            skewX: 27.0151,
            skewY: -512.9845,
            x: -15.15,
            y: 468.3
        }, 0).wait(1).to({
            skewX: 13.1954,
            skewY: -526.8042,
            x: 1.45,
            y: 477.75
        }, 0).wait(1).to({
            scaleX: .9447,
            skewX: 1.4332,
            skewY: -538.5663,
            x: 17.05,
            y: 484.85
        }, 0).wait(1).to({
            scaleX: .9446,
            skewX: -7.9622,
            skewY: -547.9617,
            x: 30.2,
            y: 489.9
        }, 0).wait(1).to({
            regX: 0,
            skewX: -31.5042,
            skewY: -571.5036,
            x: 36.75,
            y: 492.5
        }, 0).to({
            _off: !0
        }, 1).wait(2))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-90.2, -14.5, 179.7, 520.6);
    (b.notice =
        function(c, d, e) {
            this.initialize(c, d, e, {});
            this.frame_3 = function() {
                this.stop()
            };
            this.timeline.addTween(a.Tween.get(this).wait(3).call(this.frame_3).wait(1));
            this.instance = new b.laugh_parts1;
            this.instance.parent = this;
            this.instance.setTransform(-28.85, 20.55, 1, 1, 0, 0, 0, 20.2, 29.2);
            this.timeline.addTween(a.Tween.get(this.instance).wait(4))
        }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-49, -8.6, 40.4, 58.300000000000004);
    (b.mc_exclamation = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 =
            function() {
                this.play()
            };
        this.frame_18 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(18).call(this.frame_18).wait(1));
        this.instance = new b.gr_exclamation;
        this.instance.parent = this;
        this.instance.setTransform(-3.95, 12.4, .4605, .4605, 15.0009);
        this.timeline.addTween(a.Tween.get(this.instance).to({
            scaleX: 1.1401,
            scaleY: 1.1401,
            rotation: 15.0012,
            x: 1.15,
            y: -3.65
        }, 1, a.Ease.get(-1)).to({
            scaleX: 1,
            scaleY: 1,
            rotation: 14.9992,
            x: -.1,
            y: .35
        }, 3, a.Ease.get(1)).wait(8).to({
            scaleX: .6622,
            scaleY: .6622,
            rotation: 14.9988,
            x: -7.1,
            y: 24.35,
            alpha: 0
        }, 4, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(2))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-16.3, -32.4, 33.6, 73);
    (b.loader_ring_contaier2 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.roader_ring2("synched", 0);
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            regX: 4.7,
            x: 4.7,
            alpha: .9891
        }, 0).wait(1).to({
            alpha: .952
        }, 0).wait(1).to({
            alpha: .8798
        }, 0).wait(1).to({
            alpha: .7623
        }, 0).wait(1).to({
                alpha: .5979
            },
            0).wait(1).to({
            alpha: .4148
        }, 0).wait(1).to({
            alpha: .2634
        }, 0).wait(1).to({
            alpha: .1658
        }, 0).wait(1).to({
            alpha: .1159
        }, 0).wait(1).to({
            regX: 0,
            x: 0,
            alpha: .1016
        }, 0).to({
            _off: !0
        }, 1).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(0, -.5, 7, 1);
    (b.laugh = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_20 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(20).call(this.frame_20).wait(1));
        this.instance = new b.laugh_parts_a("single", 0);
        this.instance.parent = this;
        this.instance.setTransform(-30.4,
            20.5, 1.0742, .9571, 0, 0, 0, -20.3, 0);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            scaleX: 1,
            scaleY: 1,
            x: -28.9
        }, 0).wait(3).to({
            regX: -20.2,
            scaleX: .9691,
            scaleY: 1.0171,
            x: -28.2
        }, 0).wait(1).to({
            regX: -18.7,
            scaleX: 1.1342,
            scaleY: .975,
            x: -29.7,
            y: 22.85,
            startPosition: 1
        }, 0).wait(1).to({
            scaleX: 1,
            scaleY: 1,
            x: -27.2
        }, 0).wait(3).to({
            scaleX: .9463,
            scaleY: 1.0417,
            x: -26.2
        }, 0).wait(1).to({
            regX: -20.3,
            scaleX: 1.0742,
            scaleY: .9571,
            x: -30.4,
            y: 20.5,
            startPosition: 0
        }, 0).wait(1).to({
            scaleX: 1,
            scaleY: 1,
            x: -28.9
        }, 0).wait(3).to({
            regX: -20.2,
            scaleX: .9691,
            scaleY: 1.0171,
            x: -28.2
        }, 0).wait(1).to({
            regX: -18.7,
            scaleX: 1.1342,
            scaleY: .975,
            x: -29.7,
            y: 22.85,
            startPosition: 1
        }, 0).wait(1).to({
            scaleX: 1,
            scaleY: 1,
            x: -27.2
        }, 0).wait(3).to({
            scaleX: .9463,
            scaleY: 1.0417,
            x: -26.2
        }, 0).to({
            _off: !0
        }, 1).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-52, -9.1, 43.5, 63.300000000000004);
    (b.heart = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.heart_vector;
        this.instance.parent = this;
        this.instance.setTransform(2.45, 1.2, .1194, .1194, -12.5105,
            0, 0, 207.8, 183);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-26.5, -25.5, 57.6, 53.1);
    (b.good_effect = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_5 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(5).call(this.frame_5).wait(1));
        this.instance = new b.flower2_good("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(21.35, 5.15, .7153, .7153);
        this.instance.filters = [new a.ColorFilter(.83, .83,
            .83, 1, 43.35, 43.35, 43.35, 0)];
        this.instance.cache(-8, -8, 15, 15);
        this.timeline.addTween(a.Tween.get(this.instance).to({
            scaleX: 1.4107,
            scaleY: 1.4107,
            rotation: -360,
            x: 76.05,
            y: 1.65,
            alpha: .2188
        }, 4, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(1));
        this.instance_1 = new b.flower2_good("synched", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(-14, -10.15);
        this.timeline.addTween(a.Tween.get(this.instance_1).to({
            scaleX: 1.5357,
            scaleY: 1.5357,
            rotation: -360,
            x: -39.35,
            y: -44.65,
            alpha: .2188
        }, 4, a.Ease.get(1)).to({
                _off: !0
            },
            1).wait(1));
        this.instance_2 = new b.flower1_good("synched", 0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(15.8, -6.5, .7927, .7927);
        this.timeline.addTween(a.Tween.get(this.instance_2).to({
            scaleX: 1.1049,
            scaleY: 1.1049,
            rotation: -360,
            x: 58.8,
            y: -51.65,
            alpha: .2188
        }, 4, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(1));
        this.instance_3 = new b.flower2_good("synched", 0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(-14.45, 14.3, .7153, .7153);
        this.instance_3.filters = [new a.ColorFilter(.83, .83, .83, 1, 43.35,
            43.35, 43.35, 0)];
        this.instance_3.cache(-8, -8, 15, 15);
        this.timeline.addTween(a.Tween.get(this.instance_3).to({
            scaleX: 1.4107,
            scaleY: 1.4107,
            rotation: -360,
            x: -48.25,
            y: 59.8,
            alpha: .2188
        }, 4, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(1));
        this.instance_4 = new b.flower2_good("synched", 0);
        this.instance_4.parent = this;
        this.instance_4.setTransform(5.6, 19);
        this.timeline.addTween(a.Tween.get(this.instance_4).to({
            scaleX: 1.4861,
            scaleY: 1.4861,
            rotation: -360,
            x: 25.65,
            y: 70.8,
            alpha: .2188
        }, 4, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(1));
        this.instance_5 = new b.flower2_good("synched", 0);
        this.instance_5.parent = this;
        this.instance_5.setTransform(-20.9, 2.15);
        this.timeline.addTween(a.Tween.get(this.instance_5).to({
            scaleX: 1.8929,
            scaleY: 1.8929,
            rotation: -360,
            x: -73.85,
            y: 6.65,
            alpha: .2188
        }, 4, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(1));
        this.instance_6 = new b.flower1_good("synched", 0);
        this.instance_6.parent = this;
        this.instance_6.setTransform(.3, -12.15, .7812, .7812, -44.9992);
        this.timeline.addTween(a.Tween.get(this.instance_6).to({
            scaleX: 1.3627,
            scaleY: 1.3627,
            rotation: -720,
            x: -3.2,
            y: -76.45,
            alpha: .2188
        }, 4, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(1));
        this.instance_7 = new b.good_circle;
        this.instance_7.parent = this;
        this.instance_7.setTransform(0, 0, .5578, .5578);
        this.timeline.addTween(a.Tween.get(this.instance_7).to({
            scaleX: 1.7159,
            scaleY: 1.7159,
            alpha: .0508
        }, 4, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-84.4, -89.6, 168.5, 171.1);
    (b.glitter_first_inner = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.pointGlitter2("synched",
            0);
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .0121, .6227, 59.2024);
        this.instance_1 = new b.pointGlitter2("synched", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(0, 0, .0109, .7287, -30.7981);
        this.shape = new a.Shape;
        this.shape.graphics.rf(["#FFFFFF", "#FFFFFF", "rgba(255,252,237,0.051)", "rgba(255,255,255,0)"], [0, .055, .761, 1], 0, 0, 0, 0, 0, 5.4).s().p("AgZAtQgTgLgFgUQgGgVALgSQALgTAUgFQAVgGASALQATALAFAUQAGAVgLASQgLATgUAFQgIACgGAAQgNAAgMgHg");
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                    t: this.shape
                },
                {
                    t: this.instance_1
                }, {
                    t: this.instance
                }
            ]
        }).wait(1))
    }).prototype = f(b.glitter_first_inner, new a.Rectangle(-18.5, -21.7, 37.1, 43.4), null);
    (b.glitter_first = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_8 = function() {
            this.gotoAndPlay(this.timeline.position + exportRoot._u.random(7) + 1)
        };
        this.timeline.addTween(a.Tween.get(this).wait(8).call(this.frame_8).wait(10));
        this.instance = new b.grip;
        this.instance.parent = this;
        this.instance.alpha = .6602;
        this.timeline.addTween(a.Tween.get(this.instance).to({
            _off: !0
        }, 2).wait(16));
        this.instance_1 = new b.glitter_first_inner;
        this.instance_1.parent = this;
        this.instance_1.setTransform(0, 0, .6427, .6427, -44.822);
        this.instance_1.alpha = .4297;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(1).to({
            scaleX: 3.7607,
            scaleY: 3.7607,
            rotation: -11.2055,
            alpha: .8574
        }, 0).wait(1).to({
            scaleX: 4.8,
            scaleY: 4.8,
            rotation: 0,
            alpha: 1
        }, 0).wait(1).to({
            scaleX: 4.722,
            scaleY: 4.722,
            rotation: 1.9399,
            alpha: .971
        }, 0).wait(1).to({
            scaleX: 4.5026,
            scaleY: 4.5026,
            rotation: 7.4005,
            alpha: .8893
        }, 0).wait(1).to({
            scaleX: 4.1415,
            scaleY: 4.1415,
            rotation: 16.3817,
            alpha: .7549
        }, 0).wait(1).to({
            scaleX: 3.6391,
            scaleY: 3.6391,
            rotation: 28.8836,
            alpha: .5678
        }, 0).wait(1).to({
            scaleX: 2.9951,
            scaleY: 2.9951,
            rotation: 44.9061,
            alpha: .3281
        }, 0).to({
            _off: !0
        }, 1).wait(10))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-90, -105, 180, 210.1);
    (b.finish_text_container = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {};
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1));
        this.line2 = new a.Text("", "14px 'MS PGothic'",
            "#F1439A");
        this.line2.name = "line2";
        this.line2.lineHeight = 16;
        this.line2.lineWidth = 260;
        this.line2.parent = this;
        this.line2.setTransform(-107, 0);
        this.timeline.addTween(a.Tween.get(this.line2).wait(1));
        this.line1 = new a.Text("", "14px 'MS PGothic'", "#F1439A");
        this.line1.name = "line1";
        this.line1.lineHeight = 16;
        this.line1.lineWidth = 260;
        this.line1.parent = this;
        this.line1.setTransform(-107, -18);
        this.timeline.addTween(a.Tween.get(this.line1).wait(1));
        this.instance = new b.window_finish_2line("single", 0);
        this.instance.parent =
            this;
        this.instance.setTransform(0, 1);
        this.instance.alpha = .8516;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }).prototype = f(b.finish_text_container, new a.Rectangle(-147.5, -27.5, 302.1, 158.2), null);
    (b.chord = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_14 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(14).call(this.frame_14).wait(1));
        this.instance = new b.chord2;
        this.instance.parent = this;
        this.instance.setTransform(-36, 76.7, .5582, .5582, -.2819, 0, 0, 15.7, 17.4);
        this.instance.alpha =
            .1016;
        this.instance._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance).wait(2).to({
            _off: !1
        }, 0).to({
            regX: 15.8,
            scaleX: .9628,
            scaleY: .9628,
            rotation: 14.3457,
            guide: {
                path: [-35.9, 76.7, -38.6, 65.6, -37.5, 54.3, -35.4, 34.2, -20.7, 22.9, -17.1, 20.1, -14.2, 16.9]
            },
            alpha: .6602
        }, 5).wait(1).to({
            regX: 16.7,
            regY: 23.1,
            scaleX: 1.0446,
            scaleY: 1.0446,
            rotation: -.4369,
            x: -5.6,
            y: 11.55,
            alpha: .7734
        }, 0).wait(1).to({
            scaleX: 1.1264,
            scaleY: 1.1264,
            rotation: -15.2195,
            x: .2,
            y: -1.85,
            alpha: .8867
        }, 0).wait(1).to({
            regX: 15.8,
            regY: 17.3,
            scaleX: 1.2081,
            scaleY: 1.2081,
            rotation: -30.002,
            x: -2.25,
            y: -20.85,
            alpha: 1
        }, 0).to({
            scaleX: 1.2082,
            scaleY: 1.2082,
            rotation: -5.5524,
            guide: {
                path: [-2.3, -20.8, -2.4, -21.5, -2.6, -22.2, -4, -29.1, -7.5, -33]
            },
            alpha: 0
        }, 3).to({
            _off: !0
        }, 1).wait(1));
        this.instance_1 = new b.chord1;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-23.5, 77.25, .9892, .9892, -44.9988, 0, 0, 15.8, 17.4);
        this.instance_1.alpha = .1016;
        this.timeline.addTween(a.Tween.get(this.instance_1).to({
            regY: 17.3,
            scaleX: 1.2082,
            scaleY: 1.2082,
            rotation: 29.9993,
            guide: {
                path: [-23.5,
                    77.2, -22.3, 75.1, -21.1, 72.9, -6.9, 48, 13.4, 39.4, 33.4, 31.3, 43.7, 10, 48.3, .5, 50, -7.9
                ]
            },
            alpha: 1
        }, 7).to({
            rotation: 29.9993,
            x: 62.35,
            y: -32.75,
            alpha: 0
        }, 3).to({
            _off: !0
        }, 1).wait(4))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-49, -60.4, 138.4, 201.20000000000002);
    (b.character1_face = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.stop();
            this.b.visible = !1
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(20));
        this.instance = new b.uru_set;
        this.instance.parent =
            this;
        this.instance.setTransform(87, 41.9, .9005, .5503, 0, 26.0791, 25.8338);
        this.instance._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance).wait(19).to({
            _off: !1
        }, 0).wait(1));
        this.instance_1 = new b.uru_set;
        this.instance_1.parent = this;
        this.instance_1.setTransform(34.65, 40.95, 1.0632, .5296, 0, 32.5646, 37.1205, .7, 4.2);
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(19).to({
            _off: !1
        }, 0).wait(1));
        c = new a.Shape;
        c._off = !0;
        d = (new a.Graphics).p("AhHBbQgugVgLghQgLgjgCgQQgDgRAEgNQAGgKApgDQA5gDAIgCQASgDBDgcQA+gWAHANQAMAVAEAuQAFA0gNAUQgQAYgkAWQgnAWgiACIgIABQgjAAglgRg");
        this.timeline.addTween(a.Tween.get(c).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(4).to({
            graphics: d,
            x: 56.1283,
            y: 81.0069
        }).wait(16));
        this.instance_2 = new b.ch_face2;
        this.instance_2.parent = this;
        this.instance_2.setTransform(0, 0, .5, .5);
        this.instance_3 = new b.ch_face3;
        this.instance_3.parent = this;
        this.instance_3.setTransform(0, 0, .5, .5);
        d = [this.instance_2, this.instance_3];
        for (e = 0; e < d.length; e++) d[e].mask = c;
        this.timeline.addTween(a.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.instance_2
            }]
        }, 4).to({
            state: []
        }, 1).to({
                state: [{
                    t: this.instance_3
                }]
            },
            1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: []
        }, 1).wait(12));
        c = new a.Shape;
        c._off = !0;
        c.graphics.p("AoRImIAAxLIQjAAIAARLg");
        c.setTransform(54, 56);
        this.instance_4 = new b.ch_face2;
        this.instance_4.parent = this;
        this.instance_4.setTransform(0, 0, .5, .5);
        this.instance_5 = new b.ch_face3;
        this.instance_5.parent = this;
        this.instance_5.setTransform(0, 0, .5, .5);
        this.instance_6 = new b.ch_face4;
        this.instance_6.parent = this;
        this.instance_6.setTransform(0, 0, .5, .5);
        this.instance_7 = new b.ch_face6;
        this.instance_7.parent =
            this;
        this.instance_7.setTransform(0, 0, .5, .5);
        d = [this.instance_4, this.instance_5, this.instance_6, this.instance_7];
        for (e = 0; e < d.length; e++) d[e].mask = c;
        this.timeline.addTween(a.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
            state: [{
                t: this.instance_7
            }]
        }, 1).to({
            state: [{
                t: this.instance_7
            }]
        }, 1).to({
            state: []
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).to({
            state: []
        }, 1).wait(12));
        this.b = new b.character1_base;
        this.b.name =
            "b";
        this.b.parent = this;
        this.b.setTransform(-74, 252);
        d = [this.b];
        for (e = 0; e < d.length; e++) d[e].mask = c;
        this.timeline.addTween(a.Tween.get(this.b).wait(20))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(1, 1, 106, 110);
    (b.punpun = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_5 = function() {};
        this.timeline.addTween(a.Tween.get(this).wait(5).call(this.frame_5).wait(1));
        this.instance = new b.pin;
        this.instance.parent = this;
        this.instance.setTransform(48.85, -2.05, 1, 1, 0, 0, 0, 22.3, 29.4);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            regX: 18.6,
            regY: 28.5,
            x: 45.4,
            y: -4.55,
            alpha: .9375
        }, 0).wait(1).to({
            x: 46.3,
            y: -9.5,
            alpha: .75
        }, 0).wait(1).to({
            x: 47.75,
            y: -17.7,
            alpha: .4375
        }, 0).wait(1).to({
            regX: 22.3,
            regY: 29.4,
            x: 53.5,
            y: -28.3,
            alpha: 0
        }, 0).to({
            _off: !0
        }, 1).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(0, -57.7, 75.8, 85.2);
    (b.mc_punpun = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {};
        this.frame_18 = function() {};
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(18).call(this.frame_18).wait(1));
        this.instance =
            new b.punpun("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(96.95, 4.95, .7347, .7347, 45.4813, 0, 0, 48.8, -2);
        this.instance._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance).wait(5).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 5).wait(3).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 4).wait(2));
        this.instance_1 = new b.punpun("synched", 0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(.05, -.05, 1, 1, -42.2096, 0, 0, 48.9, -2);
        this.timeline.addTween(a.Tween.get(this.instance_1).to({
            _off: !0
        }, 6).wait(3).to({
                _off: !1
            },
            0).to({
            _off: !0
        }, 5).wait(5))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-41.7, -47.9, 173.5, 72.7);
    (b.concent_container = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.concent;
        this.instance.parent = this;
        this.instance.setTransform(-.15, .5, .8875, .8875, -119.2436);
        this.instance_1 = new b.concent;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-.15, .45, .8875, .8875, 161.3249);
        this.instance_2 = new b.concent2;
        this.instance_2.parent = this;
        this.instance_2.setTransform(-.15, .45,
            .8874, .8874, -75.9023);
        this.instance_3 = new b.concent2;
        this.instance_3.parent = this;
        this.instance_3.setTransform(-.15, .45, .8874, .8874, 75.4526);
        this.instance_4 = new b.concent2;
        this.instance_4.parent = this;
        this.instance_4.setTransform(-.15, .45, .8874, .8874, 109.34);
        this.instance_5 = new b.concent;
        this.instance_5.parent = this;
        this.instance_5.setTransform(-.15, .45, .8875, .8875, -14.9518);
        this.instance_6 = new b.concent;
        this.instance_6.parent = this;
        this.instance_6.setTransform(-.15, .45, .8874, .8874, 77.8353);
        this.instance_7 =
            new b.concent2;
        this.instance_7.parent = this;
        this.instance_7.setTransform(-.15, .45, .8875, .8875, -78.9281);
        this.instance_8 = new b.concent2;
        this.instance_8.parent = this;
        this.instance_8.setTransform(-.15, .45, .8875, .8875, -117.3405);
        this.instance_9 = new b.concent;
        this.instance_9.parent = this;
        this.instance_9.setTransform(-.15, .45, .8875, .8875, -164.7438);
        this.instance_10 = new b.concent2;
        this.instance_10.parent = this;
        this.instance_10.setTransform(-.15, .45, .8874, .8874, 133.0127);
        this.instance_11 = new b.concent;
        this.instance_11.parent =
            this;
        this.instance_11.setTransform(-.15, .45, .8875, .8875, -7.2496);
        this.instance_12 = new b.concent;
        this.instance_12.parent = this;
        this.instance_12.setTransform(-.1, .5, .8874, .8874, 31.1881);
        this.instance_13 = new b.concent2;
        this.instance_13.parent = this;
        this.instance_13.setTransform(-.15, .45, .8874, .8874, 43.9327);
        this.instance_14 = new b.concent2;
        this.instance_14.parent = this;
        this.instance_14.setTransform(-.15, .45, .8875, .8875, -47.2338);
        this.instance_15 = new b.concent;
        this.instance_15.parent = this;
        this.instance_15.setTransform(-.15,
            .45, .8875, .8875, -79.0683);
        this.instance_16 = new b.concent2;
        this.instance_16.parent = this;
        this.instance_16.setTransform(-.15, .45, .8874, .8874, 24.1813);
        this.instance_17 = new b.concent;
        this.instance_17.parent = this;
        this.instance_17.setTransform(-.15, .45, .8875, .8875, 28.4561);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                    t: this.instance_17
                }, {
                    t: this.instance_16
                }, {
                    t: this.instance_15
                }, {
                    t: this.instance_14
                }, {
                    t: this.instance_13
                }, {
                    t: this.instance_12
                }, {
                    t: this.instance_11
                }, {
                    t: this.instance_10
                }, {
                    t: this.instance_9
                },
                {
                    t: this.instance_8
                }, {
                    t: this.instance_7
                }, {
                    t: this.instance_6
                }, {
                    t: this.instance_5
                }, {
                    t: this.instance_4
                }, {
                    t: this.instance_3
                }, {
                    t: this.instance_2
                }, {
                    t: this.instance_1
                }, {
                    t: this.instance
                }
            ]
        }).wait(1))
    }).prototype = f(b.concent_container, new a.Rectangle(-406.3, -402.2, 815.3, 814.7), null);
    (b.window22 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.square2;
        this.instance.parent = this;
        this.instance.setTransform(218.95, 24.55, 1, 1, 90, 0, 0, .7, 13.2);
        this.instance_1 = new b.square2;
        this.instance_1.parent = this;
        this.instance_1.setTransform(191.35,
            24.55, 1, 1, 90, 0, 0, .7, 13.2);
        this.instance_2 = new b.square2;
        this.instance_2.parent = this;
        this.instance_2.setTransform(163.9, 24.55, 1, 1, 90, 0, 0, .7, 13.2);
        this.instance_3 = new b.square2;
        this.instance_3.parent = this;
        this.instance_3.setTransform(136.45, 24.55, 1, 1, 90, 0, 0, .7, 13.2);
        this.instance_4 = new b.square2;
        this.instance_4.parent = this;
        this.instance_4.setTransform(108.95, 24.55, 1, 1, 90, 0, 0, .7, 13.2);
        this.instance_5 = new b.square2;
        this.instance_5.parent = this;
        this.instance_5.setTransform(81.45, 24.55, 1, 1, 90, 0, 0, .7, 13.2);
        this.instance_6 = new b.square2;
        this.instance_6.parent = this;
        this.instance_6.setTransform(53.95, 24.55, 1, 1, 90, 0, 0, .7, 13.2);
        this.instance_7 = new b.square2;
        this.instance_7.parent = this;
        this.instance_7.setTransform(26.45, 24.55, 1, 1, 90, 0, 0, .7, 13.2);
        this.instance_8 = new b.square2c;
        this.instance_8.parent = this;
        this.instance_8.setTransform(5.95, 17, 1, 1, 0, 0, 0, .7, 13.2);
        this.instance_9 = new b.square2c;
        this.instance_9.parent = this;
        this.instance_9.setTransform(8.6, 17, 1, 1, 0, 0, 0, .7, 13.2);
        this.instance_10 = new b.square2c;
        this.instance_10.parent =
            this;
        this.instance_10.setTransform(11.25, 17, 1, 1, 0, 0, 0, .7, 13.2);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance_10
            }, {
                t: this.instance_9
            }, {
                t: this.instance_8
            }, {
                t: this.instance_7
            }, {
                t: this.instance_6
            }, {
                t: this.instance_5
            }, {
                t: this.instance_4
            }, {
                t: this.instance_3
            }, {
                t: this.instance_2
            }, {
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));
        this.shape = new a.Shape;
        this.shape.graphics.f("rgba(255,255,255,0.702)").s().p("AxGHNQhQAAAAhQIAAr5QAAhQBQAAIJ+AAQAkAAAYAeQAIALAbA4QAWAuAYAUQAkAeA5gBIUlAAQBQAAAABQIAAI5QAABQhQAAg");
        this.shape.setTransform(117.5, 46.125);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1));
        this.instance_11 = new b.window_shadow;
        this.instance_11.parent = this;
        this.instance_11.setTransform(118.35, 47.65, 1, 1, 0, 0, 0, 117.9, 46.9);
        this.instance_11.alpha = .6992;
        this.timeline.addTween(a.Tween.get(this.instance_11).wait(1))
    }).prototype = f(b.window22, new a.Rectangle(0, 0, 236.3, 94.5), null);
    (b.window = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {};
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(4));
        this.shape = new a.Shape;
        this.shape.graphics.f("#000000").s().p("AAmBLIAAgHIhLAAIAAAHIgVAAIAAhHIgIADIgLgUQAPgFAOgGQAOgHALgJIgwAAIAAgUIA9AAIAAgPIATAAIAAAPIA+AAIAAAUIgwAAQAHAGAKAFIATAJIATAGIgKAVQgLgEgLgGQgLgGgKgJQgJgIgHgIIAAAhIgTAAIAAghQgHAIgJAJIgUAPIgMAGIB1AAIAABIgAglAwIBLAAIAAgYIhLAAg");
        this.shape.setTransform(24, 11.775);
        this.timeline.addTween(a.Tween.get(this.shape).wait(4));
        this.text_mc = new b.textfield;
        this.text_mc.name = "text_mc";
        this.text_mc.parent = this;
        this.text_mc.setTransform(4, 25);
        this.timeline.addTween(a.Tween.get(this.text_mc).wait(4));
        this.ar = new b.yajirusi;
        this.ar.name = "ar";
        this.ar.parent = this;
        this.ar.setTransform(231.5, 87.5);
        this.timeline.addTween(a.Tween.get(this.ar).wait(4));
        this.instance = new b.window22;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(4))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(0, -4, 267.6, 105.7);
    (b.loader_ring2_container = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.loader_ring_contaier2("synched", 4);
        this.instance.parent = this;
        this.instance.setTransform(0,
            0, 1, 1, 150);
        this.instance_1 = new b.loader_ring_contaier2("synched", 5);
        this.instance_1.parent = this;
        this.instance_1.setTransform(0, 0, .9999, .9999, 119.9987);
        this.instance_2 = new b.loader_ring_contaier2("synched", 6);
        this.instance_2.parent = this;
        this.instance_2.setTransform(0, 0, 1, 1, 89.9948);
        this.instance_3 = new b.loader_ring_contaier2("synched", 7);
        this.instance_3.parent = this;
        this.instance_3.setTransform(0, .05, 1, 1, 60);
        this.instance_4 = new b.loader_ring_contaier2("synched", 8);
        this.instance_4.parent = this;
        this.instance_4.setTransform(0,
            0, 1, 1, 29.9992);
        this.instance_5 = new b.loader_ring_contaier2("synched", 0);
        this.instance_5.parent = this;
        this.instance_5.setTransform(0, -.05, .9999, .9999, -89.9948);
        this.instance_6 = new b.loader_ring_contaier2("synched", 11);
        this.instance_6.parent = this;
        this.instance_6.setTransform(0, 0, 1, 1, -60.0001);
        this.instance_7 = new b.loader_ring_contaier2("synched", 10);
        this.instance_7.parent = this;
        this.instance_7.setTransform(0, 0, .9999, .9999, -29.9986);
        this.instance_8 = new b.loader_ring_contaier2("synched", 1);
        this.instance_8.parent =
            this;
        this.instance_8.setTransform(0, 0, 1, 1, -119.9999);
        this.instance_9 = new b.loader_ring_contaier2("synched", 2);
        this.instance_9.parent = this;
        this.instance_9.setTransform(0, 0, .9999, .9999, -150.0005);
        this.instance_10 = new b.loader_ring_contaier2("synched", 3);
        this.instance_10.parent = this;
        this.instance_10.setTransform(0, 0, 1, 1, 180);
        this.instance_11 = new b.loader_ring_contaier2("synched", 9);
        this.instance_11.parent = this;
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                    t: this.instance_11
                }, {
                    t: this.instance_10
                },
                {
                    t: this.instance_9
                }, {
                    t: this.instance_8
                }, {
                    t: this.instance_7
                }, {
                    t: this.instance_6
                }, {
                    t: this.instance_5
                }, {
                    t: this.instance_4
                }, {
                    t: this.instance_3
                }, {
                    t: this.instance_2
                }, {
                    t: this.instance_1
                }, {
                    t: this.instance
                }
            ]
        }).wait(12))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-6.9, -7, 13.9, 14);
    (b.g\uff4citter_rise_core = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.visible = !1;
            this.gotoAndPlay(1 + exportRoot._u.random(30))
        };
        this.frame_1 = function() {
            this.visible = !1;
            this.gotoAndPlay(this.timeline.position +
                exportRoot._u.random(20))
        };
        this.frame_31 = function() {
            this.visible = !0
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(30).call(this.frame_31).wait(9));
        this.instance = new b.glitter_first_inner;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5144, .5144);
        this.timeline.addTween(a.Tween.get(this.instance).to({
            _off: !0
        }, 1).wait(30).to({
            _off: !1,
            scaleX: .1949,
            scaleY: .1949,
            rotation: -44.8223,
            alpha: .4297
        }, 0).wait(1).to({
            scaleX: .4345,
            scaleY: .4345,
            rotation: -11.2056,
            alpha: .8574
        }, 0).wait(1).to({
            scaleX: .5144,
            scaleY: .5144,
            rotation: 0,
            alpha: 1
        }, 0).wait(1).to({
            scaleX: .5051,
            scaleY: .5051,
            rotation: 1.9401,
            alpha: .971
        }, 0).wait(1).to({
            scaleX: .479,
            scaleY: .479,
            rotation: 7.401,
            alpha: .8893
        }, 0).wait(1).to({
            scaleX: .436,
            scaleY: .436,
            rotation: 16.3829,
            alpha: .7549
        }, 0).wait(1).to({
            scaleX: .3762,
            scaleY: .3762,
            rotation: 28.8856,
            alpha: .5678
        }, 0).wait(1).to({
            scaleX: .2995,
            scaleY: .2995,
            rotation: 44.9092,
            alpha: .3281
        }, 0).to({
            _off: !0
        }, 1).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-9.6,
        -11.2, 19.299999999999997, 22.5);
    (b.glitters = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_21 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(21).call(this.frame_21).wait(1));
        this.instance = new b.glitter_first;
        this.instance.parent = this;
        this.instance.setTransform(41.95, 243.25, .0766, .0766);
        this.timeline.addTween(a.Tween.get(this.instance).wait(22));
        this.instance_1 = new b.glitter_first;
        this.instance_1.parent = this;
        this.instance_1.setTransform(11.05, 226.4, .1958, .1958);
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(1).to({
            _off: !1
        }, 0).wait(21));
        this.instance_2 = new b.glitter_first;
        this.instance_2.parent = this;
        this.instance_2.setTransform(204.8, 189.7, .1412, .1412);
        this.instance_2._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(4).to({
            _off: !1
        }, 0).wait(18));
        this.instance_3 = new b.glitter_first;
        this.instance_3.parent = this;
        this.instance_3.setTransform(224.75, 123.45, .159, .159, 0, 0, 0, -1.3, 2.9);
        this.instance_3._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_3).wait(6).to({
                _off: !1
            },
            0).wait(16));
        this.instance_4 = new b.glitter_first;
        this.instance_4.parent = this;
        this.instance_4.setTransform(217.2, 55.5, .0849, .0849);
        this.instance_4._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_4).wait(7).to({
            _off: !1
        }, 0).wait(15));
        this.instance_5 = new b.glitter_first;
        this.instance_5.parent = this;
        this.instance_5.setTransform(214.75, 251.15, .1618, .1618);
        this.instance_5._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_5).wait(8).to({
            _off: !1
        }, 0).wait(14));
        this.instance_6 = new b.glitter_first;
        this.instance_6.parent = this;
        this.instance_6.setTransform(228.3, 25.1, .1362, .1362);
        this.instance_6._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_6).wait(10).to({
            _off: !1
        }, 0).wait(12));
        this.instance_7 = new b.glitter_first;
        this.instance_7.parent = this;
        this.instance_7.setTransform(35.1, 184.15, .1106, .1106);
        this.instance_7._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_7).wait(11).to({
            _off: !1
        }, 0).wait(11));
        this.instance_8 = new b.glitter_first;
        this.instance_8.parent = this;
        this.instance_8.setTransform(219.55,
            220.1, .1702, .1702);
        this.instance_8._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_8).wait(12).to({
            _off: !1
        }, 0).wait(10));
        this.instance_9 = new b.glitter_first;
        this.instance_9.parent = this;
        this.instance_9.setTransform(216.5, 34.05, .2555, .2555);
        this.instance_9._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_9).wait(14).to({
            _off: !1
        }, 0).wait(8));
        this.instance_10 = new b.glitter_first;
        this.instance_10.parent = this;
        this.instance_10.setTransform(182.7, 235.75, .1176, .1176);
        this.instance_10._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_10).wait(16).to({
            _off: !1
        }, 0).wait(6));
        this.instance_11 = new b.glitter_first;
        this.instance_11.parent = this;
        this.instance_11.setTransform(39.4, 15.3, .1138, .1138);
        this.instance_11._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_11).wait(17).to({
            _off: !1
        }, 0).wait(5))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(0, 0, 240, 320);
    (b.character1_face_container = function(c, d, e) {
        this.initialize(c, d, e, {
            init: 0,
            run: 4,
            stay: 10,
            s2: 11,
            s3: 12,
            blink1: 15,
            blink2: 21
        });
        this.frame_0 = function() {
            this.face_blink_ary = [1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1];
            this.blink = 80;
            this.setBlink = function() {
                return exportRoot._u.random(this.blink)
            };
            this.cnt = this.next_face = this.current_face = 0;
            this.gotoAndPlay("stay")
        };
        this.frame_4 = function() {
            this.f1_alpha.visible = !1;
            this.next_face == this.current_face ? this.gotoAndPlay("stay") : (this.f1.gotoAndStop(this.current_face), this.f2.gotoAndStop(this.next_face), this.f1.visible = 0 == this.current_face ? !1 : !0, 0 == this.next_face ? (this.f1.visible = !1,
                this.f2.visible = !1, this.f1_alpha.visible = !0, this.f1_alpha.gotoAndStop(this.current_face)) : this.f2.visible = !0)
        };
        this.frame_8 = function() {
            this.gotoAndPlay("stay")
        };
        this.frame_10 = function() {
            this.current_face = this.next_face;
            this.f1.gotoAndStop(this.current_face);
            this.f2.gotoAndStop(this.next_face);
            this.f1.visible = !1;
            this.f2.visible = !0;
            this.face_blink = this.face_blink_ary[this.current_face];
            0 < this.face_blink ? this.play() : this.stop()
        };
        this.frame_11 = function() {
            0 < this.cnt ? this.cnt-- : (this.cnt = this.setBlink(),
                this.gotoAndPlay("blink" + this.face_blink))
        };
        this.frame_12 = function() {
            this.gotoAndPlay("s2")
        };
        this.frame_15 = function() {
            this.f1.visible = !1;
            this.f2.visible = !0
        };
        this.frame_19 = function() {
            this.gotoAndPlay("stay")
        };
        this.frame_21 = function() {
            this.f1.visible = !1;
            this.f2.visible = !0
        };
        this.frame_25 = function() {
            this.gotoAndPlay("stay")
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(4).call(this.frame_8).wait(2).call(this.frame_10).wait(1).call(this.frame_11).wait(1).call(this.frame_12).wait(3).call(this.frame_15).wait(4).call(this.frame_19).wait(2).call(this.frame_21).wait(4).call(this.frame_25).wait(2));
        c = new a.Shape;
        c._off = !0;
        d = (new a.Graphics).p("AmfDfQgbgEgLgEQgRgHgPgWQgQgqgDgzQgDg7ARglQAWgvAvgxQA0g2AlAAQAzAAAcAFQAqAIATAWQBPBdA4gLQAegGAig6IAvhMQATgTAlgOQAlgOAeAAQAkAABUAcQBcAfAfAfQAiAiAcA6QAcA5gFAeQgOBLgpAAQgcAAg8gDQhBgEgWgDQgOgCg8gBQg2gBgNgEQgrgVgjgPQhCgcgeAJQghALgwAhQgsAdgRAUQgNAOgkAPIg2AVQgeANgiALQghAJgUAAQgHAAgGgBg");
        e = (new a.Graphics).p("AjFBuIhLhTIAEgiQADgjABABIATh2ICVgHIBJATICJBEIB6AeIAlgEQgWA4ABBQQAAAgABAaIhEgGIi5Agg");
        this.timeline.addTween(a.Tween.get(c).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(15).to({
            graphics: d,
            x: 55.3225,
            y: 41.4426
        }).wait(6).to({
            graphics: e,
            x: 31.25,
            y: 41.8
        }).wait(6));
        this.instance = new b.character1_face_eyeclose;
        this.instance.parent = this;
        this.instance.setTransform(35, 30, 1, 1, 0, 0, 0, 35, 30);
        this.instance.alpha = .1992;
        this.instance._off = !0;
        d = [this.instance];
        for (e = 0; e < d.length; e++) d[e].mask = c;
        this.timeline.addTween(a.Tween.get(this.instance).wait(15).to({
            _off: !1
        }, 0).wait(1).to({
            alpha: 1
        }, 0).wait(1).to({
            regX: 54,
            regY: 56,
            x: 54,
            y: 56,
            alpha: .3015
        }, 0).wait(1).to({
            alpha: .0922
        }, 0).wait(1).to({
            regX: 35,
            regY: 30,
            x: 35,
            y: 30,
            alpha: 0
        }, 0).wait(2).to({
            alpha: .1992
        }, 0).wait(1).to({
            alpha: 1
        }, 0).wait(1).to({
            regX: 54,
            regY: 56,
            x: 54,
            y: 56,
            alpha: .3015
        }, 0).wait(1).to({
            alpha: .0922
        }, 0).wait(1).to({
            regX: 35,
            regY: 30,
            x: 35,
            y: 30,
            alpha: 0
        }, 0).wait(2));
        this.f2 = new b.character1_face;
        this.f2.name = "f2";
        this.f2.parent = this;
        this.f2.setTransform(35, 30, 1, 1, 0, 0, 0, 35, 30);
        this.timeline.addTween(a.Tween.get(this.f2).wait(5).to({
            alpha: .1992
        }, 0).wait(1).to({
            regX: 54,
            regY: 56,
            x: 54,
            y: 56,
            alpha: .6441
        }, 0).wait(1).to({
            alpha: .911
        }, 0).wait(1).to({
            regX: 35,
            regY: 30,
            x: 35,
            y: 30,
            alpha: 1
        }, 0).wait(19));
        this.f1 = new b.character1_face;
        this.f1.name = "f1";
        this.f1.parent = this;
        this.f1.setTransform(35, 30, 1, 1, 0, 0, 0, 35, 30);
        this.timeline.addTween(a.Tween.get(this.f1).wait(8).to({
            alpha: 0
        }, 0).wait(19));
        this.f1_alpha = new b.character1_face;
        this.f1_alpha.name = "f1_alpha";
        this.f1_alpha.parent = this;
        this.f1_alpha.setTransform(35, 30, 1, 1, 0, 0, 0, 35, 30);
        this.timeline.addTween(a.Tween.get(this.f1_alpha).wait(5).to({
            alpha: .8008
        }, 0).wait(1).to({
            regX: 54,
            regY: 56,
            x: 54,
            y: 56,
            alpha: .7118
        }, 0).wait(1).to({
                alpha: .4449
            },
            0).wait(1).to({
            regX: 35,
            regY: 30,
            x: 35,
            y: 30,
            alpha: 0
        }, 0).wait(19))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-194, -144, 496, 612);
    (b.character1_body = function(c, d, e) {
        this.initialize(c, d, e, {
            def: 0,
            nf: 1
        });
        this.frame_0 = function() {
            this.stop()
        };
        this.frame_1 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));
        this.f = new b.character1_face_container;
        this.f.name = "f";
        this.f.parent = this;
        this.f.setTransform(-129, -350);
        this.timeline.addTween(a.Tween.get(this.f).to({
                _off: !0
            },
            1).wait(1));
        this.b = new b.character1_base;
        this.b.name = "b";
        this.b.parent = this;
        this.b.setTransform(-203, -98);
        this.timeline.addTween(a.Tween.get(this.b).wait(2))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-323, -494, 633.2, 625.7);
    (b.concent_wrapper = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.visible = !0;
            this.play()
        };
        this.frame_7 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(1));
        this.instance =
            new b.concent_container;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            regX: 1.3,
            regY: 5.1,
            x: 1.3,
            y: 5.1,
            alpha: .9703
        }, 0).wait(1).to({
            alpha: .8688
        }, 0).wait(1).to({
            alpha: .6781
        }, 0).wait(1).to({
            alpha: .4135
        }, 0).wait(1).to({
            alpha: .1827
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 0,
            alpha: .1016
        }, 0).to({
            _off: !0
        }, 1).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-406.3, -402.2, 815.3, 814.7);
    (b.window_container = function(c, d, e) {
        this.initialize(c, d, e, {
            out: 1,
            "in": 12
        });
        this.frame_0 = function() {
            this.h = this.w = 40;
            this.y = this.x = 220;
            this.scene = "out";
            this.stop()
        };
        this.frame_11 = function() {
            this.stop()
        };
        this.frame_18 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(7).call(this.frame_18).wait(1));
        this.instance = new b.window_icon;
        this.instance.parent = this;
        this.instance.setTransform(225.5, 8.5, .9999, 1);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            scaleX: 1,
            y: 9.5
        }, 0).wait(1).to({
                rotation: 45,
                y: 13.4449
            },
            0).wait(1).to({
            rotation: 90,
            y: 31.6824
        }, 0).wait(1).to({
            rotation: 135,
            y: 77.8042
        }, 0).wait(1).to({
            regY: .3,
            rotation: 180,
            y: 93.7
        }, 0).to({
            y: 90.7
        }, 3, a.Ease.get(1)).wait(4).to({
            regY: 0,
            rotation: 150.0004,
            y: 77
        }, 0).wait(1).to({
            scaleX: .9999,
            rotation: 60.0004,
            y: 37
        }, 0).wait(1).to({
            rotation: 29.9992,
            y: 18
        }, 0).to({
            rotation: 0,
            y: 7.75
        }, 2, a.Ease.get(1)).to({
            y: 10
        }, 2, a.Ease.get(-1)).wait(1));
        this.w2 = new b.window;
        this.w2.name = "w2";
        this.w2.parent = this;
        this.timeline.addTween(a.Tween.get(this.w2).wait(2).to({
            regX: 132.8,
            regY: 49.9,
            x: 132.8,
            y: 56.3
        }, 0).wait(1).to({
            y: 80.75
        }, 0).wait(1).to({
            y: 119
        }, 0).wait(1).to({
            y: 143.45
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 100
        }, 0).wait(3).to({
            regX: 132.8,
            regY: 49.9,
            x: 132.8,
            y: 145.45
        }, 0).wait(1).to({
            y: 142.75
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 92
        }, 0).wait(1).to({
            y: 61
        }, 0).wait(1).to({
            y: 21
        }, 0).wait(1).to({
            y: 2
        }, 0).wait(1).to({
            regX: 132.8,
            regY: 49.9,
            x: 132.8,
            y: 48.9
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: -2
        }, 0).wait(1).to({
            regX: 132.8,
            regY: 49.9,
            x: 132.8,
            y: 48.4
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 0
        }, 0).wait(1))
    }).prototype =
        c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(0, -9.5, 267.6, 211.2);
    (b.voice_loader = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.loading_;
        this.instance.parent = this;
        this.instance.setTransform(-5.45, 9.95);
        this.timeline.addTween(a.Tween.get(this.instance).wait(9).to({
            y: 6.45
        }, 2, a.Ease.get(1)).wait(1).to({
            regX: -.7,
            regY: 5.2,
            x: -6.15,
            y: 12.35
        }, 0).wait(1).to({
            y: 14.75
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: -5.45,
            y: 10.45
        }, 0).to({
            y: 9.95
        }, 2, a.Ease.get(1)).wait(1));
        this.instance_1 = new b.loading_;
        this.instance_1.parent =
            this;
        this.instance_1.setTransform(-9.35, 9.95);
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(8).to({
            y: 6.45
        }, 2, a.Ease.get(1)).wait(1).to({
            regX: -.7,
            regY: 5.2,
            x: -10.05,
            y: 12.35
        }, 0).wait(1).to({
            y: 14.75
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: -9.35,
            y: 10.45
        }, 0).to({
            y: 9.95
        }, 2, a.Ease.get(1)).wait(2));
        this.instance_2 = new b.loading_;
        this.instance_2.parent = this;
        this.instance_2.setTransform(-13.3, 9.95);
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(7).to({
            y: 6.45
        }, 2, a.Ease.get(1)).wait(1).to({
            regX: -.7,
            regY: 5.2,
            x: -14,
            y: 12.35
        }, 0).wait(1).to({
            y: 14.75
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: -13.3,
            y: 10.45
        }, 0).to({
            y: 9.95
        }, 2, a.Ease.get(1)).wait(3));
        this.instance_3 = new b.loading_G;
        this.instance_3.parent = this;
        this.instance_3.setTransform(-21.55, 9.95);
        this.timeline.addTween(a.Tween.get(this.instance_3).wait(6).to({
            y: 6.45
        }, 2, a.Ease.get(1)).wait(1).to({
            regX: .4,
            regY: 1.2,
            x: -21.15,
            y: 8.35
        }, 0).wait(1).to({
            y: 10.75
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: -21.55,
            y: 10.45
        }, 0).to({
            y: 9.95
        }, 2, a.Ease.get(1)).wait(4));
        this.instance_4 = new b.loading_N;
        this.instance_4.parent = this;
        this.instance_4.setTransform(-31.95, 9.95);
        this.timeline.addTween(a.Tween.get(this.instance_4).wait(5).to({
            y: 6.45
        }, 2, a.Ease.get(1)).wait(1).to({
            regX: .6,
            regY: 1.2,
            x: -31.35,
            y: 8.35
        }, 0).wait(1).to({
            y: 10.75
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: -31.95,
            y: 10.45
        }, 0).to({
            y: 9.95
        }, 2, a.Ease.get(1)).wait(5));
        this.instance_5 = new b.loading_I;
        this.instance_5.parent = this;
        this.instance_5.setTransform(-38.5, 9.95);
        this.timeline.addTween(a.Tween.get(this.instance_5).wait(4).to({
            y: 6.45
        }, 2, a.Ease.get(1)).wait(1).to({
            regX: -.2,
            regY: 1.3,
            x: -38.7,
            y: 8.45
        }, 0).wait(1).to({
            y: 10.85
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: -38.5,
            y: 10.45
        }, 0).to({
            y: 9.95
        }, 2, a.Ease.get(1)).wait(6));
        this.instance_6 = new b.loading_D;
        this.instance_6.parent = this;
        this.instance_6.setTransform(-46.8, 9.95);
        this.timeline.addTween(a.Tween.get(this.instance_6).wait(3).to({
            y: 6.45
        }, 2, a.Ease.get(1)).wait(1).to({
            regX: .5,
            regY: 1.2,
            x: -46.3,
            y: 8.35
        }, 0).wait(1).to({
            y: 10.75
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: -46.8,
            y: 10.45
        }, 0).to({
            y: 9.95
        }, 2, a.Ease.get(1)).wait(7));
        this.instance_7 = new b.loading_A;
        this.instance_7.parent = this;
        this.instance_7.setTransform(-57.4, 9.95);
        this.timeline.addTween(a.Tween.get(this.instance_7).wait(2).to({
            y: 6.45
        }, 2, a.Ease.get(1)).wait(1).to({
            regY: 1.2,
            y: 8.35
        }, 0).wait(1).to({
            y: 10.75
        }, 0).wait(1).to({
            regY: 0,
            y: 10.45
        }, 0).to({
            y: 9.95
        }, 2, a.Ease.get(1)).wait(8));
        this.instance_8 = new b.loading_O;
        this.instance_8.parent = this;
        this.instance_8.setTransform(-67.85, 9.95);
        this.timeline.addTween(a.Tween.get(this.instance_8).wait(1).to({
            y: 6.45
        }, 2, a.Ease.get(1)).wait(1).to({
            regX: .6,
            regY: 1.2,
            x: -67.25,
            y: 8.35
        }, 0).wait(1).to({
            y: 10.75
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: -67.85,
            y: 10.45
        }, 0).to({
            y: 9.95
        }, 2, a.Ease.get(1)).wait(9));
        this.instance_9 = new b.loading_L;
        this.instance_9.parent = this;
        this.instance_9.setTransform(-77.4, 9.95);
        this.timeline.addTween(a.Tween.get(this.instance_9).to({
            y: 6.45
        }, 2, a.Ease.get(1)).wait(1).to({
            regX: .6,
            regY: 1.3,
            x: -76.8,
            y: 8.45
        }, 0).wait(1).to({
            y: 10.85
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: -77.4,
            y: 10.45
        }, 0).to({
            y: 9.95
        }, 2, a.Ease.get(1)).wait(10));
        this.instance_10 = new b.loader_ring2_container;
        this.instance_10.parent = this;
        this.instance_10.setTransform(-90.6, 10.6, 1, 1, 0, 0, 0, -.1, -.4);
        this.timeline.addTween(a.Tween.get(this.instance_10).wait(17))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-97.4, 2.6, 92.4, 15.4);
    (b.g\uff4citter_rise_inner = function(c, d, e) {
        this.initialize(c, d, e, {
            r: 46,
            "-": 142
        });
        this.frame_0 = function() {
            this.rotation += exportRoot._u.random(14);
            this.gotoAndPlay(exportRoot._u.random(40) + 42)
        };
        this.frame_142 = function() {
            this.gotoAndPlay("r")
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(142).call(this.frame_142).wait(1));
        this.instance = new b.g\uff4citter_rise_core;
        this.instance.parent = this;
        this.instance.setTransform(0, -17.45);
        this.timeline.addTween(a.Tween.get(this.instance).wait(46).to({
            x: .6,
            y: 355.55
        }, 96).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-42.1, -28.7, 86.7, 395.5);
    (b.glitter_rise = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.g\uff4citter_rise_inner;
        this.instance.parent = this;
        this.instance.setTransform(105.4, 8.8, .6479, .6442);
        this.instance_1 = new b.g\uff4citter_rise_inner;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-103.35, 13.55, .6479, .6442);
        this.instance_2 = new b.g\uff4citter_rise_inner;
        this.instance_2.parent = this;
        this.instance_2.setTransform(133.05, 1.4, .3695, .3674);
        this.instance_3 = new b.g\uff4citter_rise_inner;
        this.instance_3.parent = this;
        this.instance_3.setTransform(120.35, 4.1, .3695, .3674);
        this.instance_4 = new b.g\uff4citter_rise_inner;
        this.instance_4.parent = this;
        this.instance_4.setTransform(91.85, 12.05, .6947, .692);
        this.instance_5 = new b.g\uff4citter_rise_inner;
        this.instance_5.parent = this;
        this.instance_5.setTransform(75.65, 14.3, .6947, .692);
        this.instance_6 = new b.g\uff4citter_rise_inner;
        this.instance_6.parent = this;
        this.instance_6.setTransform(-76.5, 8.3, .3962, .3946);
        this.instance_7 = new b.g\uff4citter_rise_inner;
        this.instance_7.parent = this;
        this.instance_7.setTransform(93.05, 23.3, .3962, .3946);
        this.instance_8 = new b.g\uff4citter_rise_inner;
        this.instance_8.parent = this;
        this.instance_8.setTransform(-64.8, 16.35, .6947, .692);
        this.instance_9 = new b.g\uff4citter_rise_inner;
        this.instance_9.parent = this;
        this.instance_9.setTransform(-119.75, 9.85, .6947, .692);
        this.instance_10 = new b.g\uff4citter_rise_inner;
        this.instance_10.parent = this;
        this.instance_10.setTransform(-94.85, 9.25, .6947, .692);
        this.instance_11 = new b.g\uff4citter_rise_inner;
        this.instance_11.parent = this;
        this.instance_11.setTransform(-85.05, -5.15, .3962, .3946);
        this.instance_12 = new b.g\uff4citter_rise_inner;
        this.instance_12.parent = this;
        this.instance_12.setTransform(-110.9, 7.45, .3962, .3946);
        this.instance_13 = new b.g\uff4citter_rise_inner;
        this.instance_13.parent = this;
        this.instance_13.setTransform(-73.3, 2.9, .6947, .692);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance_13
            }, {
                t: this.instance_12
            }, {
                t: this.instance_11
            }, {
                t: this.instance_10
            }, {
                t: this.instance_9
            }, {
                t: this.instance_8
            }, {
                t: this.instance_7
            }, {
                t: this.instance_6
            }, {
                t: this.instance_5
            }, {
                t: this.instance_4
            }, {
                t: this.instance_3
            }, {
                t: this.instance_2
            }, {
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1))
    }).prototype = f(b.glitter_rise, new a.Rectangle(-126.4, -16.9, 263, 37.8), null);
    (b.gliter_container =
        function(c, d, e) {
            this.initialize(c, d, e, {});
            this.instance = new b.glitter_rise;
            this.instance.parent = this;
            this.instance.setTransform(11.9, -35.05, 1.0489, 1.0489, 2.9285, 0, 0, 5.2, -.3);
            this.instance_1 = new b.glitter_rise;
            this.instance_1.parent = this;
            this.instance_1.setTransform(-39.95, 8.25, 1.155, 1.0852, .8008, 0, 0, .1, 6.5);
            this.instance_1.alpha = .6992;
            this.timeline.addTween(a.Tween.get({}).to({
                state: [{
                    t: this.instance_1
                }, {
                    t: this.instance
                }]
            }).wait(1))
        }).prototype = f(b.gliter_container, new a.Rectangle(-185.9, -57, 335.8,
        82.3), null);
    (b.character1_container = function(c, d, e) {
        this.initialize(c, d, e, {
            standby: 0,
            jump: 8,
            jump2: 16,
            jump_double: 25,
            jump_flower: 37,
            jump_flower2: 47,
            nod: 57,
            nod2: 66,
            nod_double: 81,
            swing: 92,
            swing_on: 112,
            swing_off: 121,
            notice: 132,
            notice_jump: 146,
            laugh: 160,
            chord: 181,
            question: 201,
            question_on: 229,
            question_off: 241,
            exclamation: 252,
            down: 268,
            down2: 295,
            shy_jump: 313,
            shy_down: 325,
            shock: 343,
            sigh: 350,
            happy: 369,
            anger: 384,
            anger2: 404,
            damage: 416,
            concent: 433,
            chord_nod: 442,
            laugh_stay: 462
        });
        this.frame_0 = function() {
            this.play()
        };
        this.frame_7 = function() {
            this.stop()
        };
        this.frame_8 = function() {
            this.play()
        };
        this.frame_15 = function() {
            this.stop()
        };
        this.frame_16 = function() {
            this.play()
        };
        this.frame_24 = function() {
            this.stop()
        };
        this.frame_25 = function() {
            this.play()
        };
        this.frame_36 = function() {
            this.stop()
        };
        this.frame_37 = function() {
            this.play()
        };
        this.frame_46 = function() {
            this.stop()
        };
        this.frame_47 = function() {
            this.play()
        };
        this.frame_56 = function() {
            this.stop()
        };
        this.frame_57 = function() {
            this.play()
        };
        this.frame_65 = function() {
            this.stop()
        };
        this.frame_66 =
            function() {
                this.play()
            };
        this.frame_80 = function() {
            this.stop()
        };
        this.frame_81 = function() {
            this.play()
        };
        this.frame_91 = function() {
            this.stop()
        };
        this.frame_92 = function() {
            this.play()
        };
        this.frame_111 = function() {
            this.stop()
        };
        this.frame_112 = function() {
            this.play()
        };
        this.frame_120 = function() {
            this.stop()
        };
        this.frame_121 = function() {
            this.play()
        };
        this.frame_131 = function() {
            this.stop()
        };
        this.frame_132 = function() {
            this.play()
        };
        this.frame_145 = function() {
            this.stop()
        };
        this.frame_146 = function() {
            this.play()
        };
        this.frame_159 =
            function() {
                this.stop()
            };
        this.frame_160 = function() {
            this.play()
        };
        this.frame_180 = function() {
            this.stop()
        };
        this.frame_181 = function() {
            this.play()
        };
        this.frame_200 = function() {
            this.stop()
        };
        this.frame_201 = function() {
            this.play()
        };
        this.frame_228 = function() {
            this.stop()
        };
        this.frame_229 = function() {
            this.play()
        };
        this.frame_240 = function() {
            this.stop()
        };
        this.frame_241 = function() {
            this.play()
        };
        this.frame_251 = function() {
            this.stop()
        };
        this.frame_252 = function() {
            this.play()
        };
        this.frame_267 = function() {
            this.stop()
        };
        this.frame_268 =
            function() {
                this.play()
            };
        this.frame_294 = function() {
            this.stop()
        };
        this.frame_295 = function() {
            this.play()
        };
        this.frame_312 = function() {
            this.stop()
        };
        this.frame_313 = function() {
            this.play()
        };
        this.frame_324 = function() {
            this.stop()
        };
        this.frame_325 = function() {
            this.play()
        };
        this.frame_342 = function() {
            this.stop()
        };
        this.frame_343 = function() {
            this.play()
        };
        this.frame_349 = function() {
            this.stop()
        };
        this.frame_350 = function() {
            this.play()
        };
        this.frame_368 = function() {
            this.stop()
        };
        this.frame_369 = function() {
            this.play()
        };
        this.frame_383 =
            function() {
                this.stop()
            };
        this.frame_384 = function() {
            this.play()
        };
        this.frame_403 = function() {
            this.stop()
        };
        this.frame_404 = function() {
            this.play()
        };
        this.frame_415 = function() {
            this.stop()
        };
        this.frame_416 = function() {
            this.play()
        };
        this.frame_432 = function() {
            this.stop()
        };
        this.frame_433 = function() {
            this.play()
        };
        this.frame_441 = function() {
            this.stop()
        };
        this.frame_442 = function() {
            this.play()
        };
        this.frame_461 = function() {
            this.stop()
        };
        this.frame_462 = function() {
            this.play()
        };
        this.frame_482 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(1).call(this.frame_8).wait(7).call(this.frame_15).wait(1).call(this.frame_16).wait(8).call(this.frame_24).wait(1).call(this.frame_25).wait(11).call(this.frame_36).wait(1).call(this.frame_37).wait(9).call(this.frame_46).wait(1).call(this.frame_47).wait(9).call(this.frame_56).wait(1).call(this.frame_57).wait(8).call(this.frame_65).wait(1).call(this.frame_66).wait(14).call(this.frame_80).wait(1).call(this.frame_81).wait(10).call(this.frame_91).wait(1).call(this.frame_92).wait(19).call(this.frame_111).wait(1).call(this.frame_112).wait(8).call(this.frame_120).wait(1).call(this.frame_121).wait(10).call(this.frame_131).wait(1).call(this.frame_132).wait(13).call(this.frame_145).wait(1).call(this.frame_146).wait(13).call(this.frame_159).wait(1).call(this.frame_160).wait(20).call(this.frame_180).wait(1).call(this.frame_181).wait(19).call(this.frame_200).wait(1).call(this.frame_201).wait(27).call(this.frame_228).wait(1).call(this.frame_229).wait(11).call(this.frame_240).wait(1).call(this.frame_241).wait(10).call(this.frame_251).wait(1).call(this.frame_252).wait(15).call(this.frame_267).wait(1).call(this.frame_268).wait(26).call(this.frame_294).wait(1).call(this.frame_295).wait(17).call(this.frame_312).wait(1).call(this.frame_313).wait(11).call(this.frame_324).wait(1).call(this.frame_325).wait(17).call(this.frame_342).wait(1).call(this.frame_343).wait(6).call(this.frame_349).wait(1).call(this.frame_350).wait(18).call(this.frame_368).wait(1).call(this.frame_369).wait(14).call(this.frame_383).wait(1).call(this.frame_384).wait(19).call(this.frame_403).wait(1).call(this.frame_404).wait(11).call(this.frame_415).wait(1).call(this.frame_416).wait(16).call(this.frame_432).wait(1).call(this.frame_433).wait(8).call(this.frame_441).wait(1).call(this.frame_442).wait(19).call(this.frame_461).wait(1).call(this.frame_462).wait(20).call(this.frame_482).wait(1));
        this.instance = new b.drop1_v2("synched", 0);
        this.instance.parent = this;
        this.instance.setTransform(-127.45, -393.25, 1.1645, 1.1645);
        this.instance._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance).wait(313).to({
            _off: !1
        }, 0).wait(1).to({
            regX: 1.2,
            regY: 1.8,
            rotation: -33.7496,
            x: -153.05,
            y: -402.25,
            alpha: .4141
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            rotation: -44.9995,
            x: -164.7,
            y: -406.55,
            alpha: .2188
        }, 0).to({
            _off: !0
        }, 1).wait(1).to({
            _off: !1,
            rotation: 0,
            x: -127.45,
            y: -393.25,
            alpha: 1
        }, 0).wait(1).to({
            regX: 1.2,
            regY: 1.8,
            rotation: -33.7496,
            x: -153.05,
            y: -402.25,
            alpha: .4141
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            rotation: -44.9995,
            x: -164.7,
            y: -406.55,
            alpha: .2188
        }, 0).to({
            _off: !0
        }, 1).wait(5).to({
            _off: !1,
            rotation: 0,
            x: -127.45,
            y: -393.25,
            alpha: 1
        }, 0).wait(1).to({
            regX: 1.2,
            regY: 1.8,
            rotation: -33.7496,
            x: -153.05,
            y: -402.25,
            alpha: .4141
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            rotation: -44.9995,
            x: -164.7,
            y: -406.55,
            alpha: .2188
        }, 0).to({
            _off: !0
        }, 1).wait(1).to({
            _off: !1,
            rotation: 0,
            x: -127.45,
            y: -393.25,
            alpha: 1
        }, 0).wait(1).to({
            regX: 1.2,
            regY: 1.8,
            rotation: -33.7496,
            x: -153.05,
            y: -402.25,
            alpha: .4141
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            rotation: -44.9995,
            x: -164.7,
            y: -406.55,
            alpha: .2188
        }, 0).to({
            _off: !0
        }, 1).wait(151));
        this.instance_1 = new b.spread_flower_pink("synched", 0, !1);
        this.instance_1.parent = this;
        this.instance_1.setTransform(-73.3, -299.1, 1.4808, 1.4808);
        this.instance_2 = new b.good_effect("synched", 0, !1);
        this.instance_2.parent = this;
        this.instance_2.setTransform(-73.3, -299.1, 1.481, 1.481);
        this.instance_3 = new b.notice;
        this.instance_3.parent = this;
        this.instance_3.setTransform(-154.15, -364.75, 1.187,
            1.187, 0, -169.8305, 10.1695, -29.1, 20.4);
        this.instance_3._off = !0;
        this.instance_4 = new b.laugh("synched", 0);
        this.instance_4.parent = this;
        this.instance_4.setTransform(-165.9, -383.85, 1.4204, 1.4204, 35.8424, 0, 0, -30.3, 20.6);
        this.instance_4._off = !0;
        this.instance_5 = new b.chord("synched", 0, !1);
        this.instance_5.parent = this;
        this.instance_5.setTransform(-138.1, -301.5, 1.0029, 1.0029, -61.4995, 0, 0, -23.4, 76.9);
        this.instance_6 = new b.question;
        this.instance_6.parent = this;
        this.instance_6.setTransform(-138.75, -386.1, 1.053, 1.053,
            -28.4906);
        this.instance_6.alpha = 0;
        this.instance_6._off = !0;
        this.instance_7 = new b.mc_exclamation("synched", 0, !1);
        this.instance_7.parent = this;
        this.instance_7.setTransform(-141, -400.8, 1.0929, 1.0929, -29.9996, 0, 0, 0, .1);
        this.instance_8 = new b.drop1a("synched", 0);
        this.instance_8.parent = this;
        this.instance_8.setTransform(-135.5, -382.2, 1, 1, 0, 0, 0, -.5, .2);
        this.instance_8._off = !0;
        this.instance_9 = new b.drop2_v2("synched", 0);
        this.instance_9.parent = this;
        this.instance_9.setTransform(-129.25, -383.5, .9876, .9876, 14.9998);
        this.instance_9._off = !0;
        this.instance_10 = new b.shock("synched", 0);
        this.instance_10.parent = this;
        this.instance_10.setTransform(-138.85, -387.15, 1.3878, 1.3878, -121.2396);
        this.instance_11 = new b.sigh("synched", 0);
        this.instance_11.parent = this;
        this.instance_11.setTransform(-116.35, -232.75);
        this.instance_11.alpha = .6016;
        this.instance_11._off = !0;
        this.instance_12 = new b.heart("synched", 0);
        this.instance_12.parent = this;
        this.instance_12.setTransform(-138.15, -342.35, .4532, .4532);
        this.instance_12._off = !0;
        this.instance_13 =
            new b.angry("synched", 0);
        this.instance_13.parent = this;
        this.instance_13.setTransform(-.2, -362.45, .5276, .5276);
        this.instance_13._off = !0;
        this.instance_14 = new b.mc_punpun;
        this.instance_14.parent = this;
        this.instance_14.setTransform(-131.25, -411.6, 1.1377, 1.1377);
        this.instance_15 = new b.concent_wrapper("synched", 0, !1);
        this.instance_15.parent = this;
        this.instance_15.setTransform(-73.55, -299.65, 1, 1, 0, 0, 0, -.5, -.1);
        this.timeline.addTween(a.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 37).to({
                state: [{
                    t: this.instance_2
                }]
            },
            10).to({
            state: []
        }, 10).to({
            state: [{
                t: this.instance_3
            }]
        }, 76).to({
            state: []
        }, 2).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 2).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: []
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 2).to({
            state: []
        }, 2).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
                state: [{
                    t: this.instance_3
                }]
            },
            2).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: []
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 15).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: []
        }, 1).to({
                state: [{
                    t: this.instance_5
                }]
            },
            1).to({
            state: []
        }, 20).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 2).to({
            state: [{
                t: this.instance_6
            }]
        }, 7).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
                state: [{
                    t: this.instance_6
                }]
            },
            1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
            state: []
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 6).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 2).to({
            state: [{
                t: this.instance_6
            }]
        }, 2).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
                state: [{
                    t: this.instance_6
                }]
            },
            1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
            state: []
        }, 1).to({
            state: [{
                t: this.instance_7
            }]
        }, 5).to({
            state: [{
                t: this.instance_8
            }]
        }, 16).to({
            state: [{
                t: this.instance_8
            }]
        }, 1).to({
            state: [{
                t: this.instance_8
            }]
        }, 1).to({
            state: [{
                t: this.instance_8
            }]
        }, 1).to({
            state: [{
                t: this.instance_8
            }]
        }, 1).to({
            state: [{
                t: this.instance_8
            }]
        }, 1).to({
            state: [{
                t: this.instance_8
            }]
        }, 1).to({
            state: [{
                t: this.instance_8
            }]
        }, 1).to({
            state: [{
                t: this.instance_8
            }]
        }, 1).to({
            state: [{
                t: this.instance_8
            }]
        }, 9).to({
                state: [{
                    t: this.instance_8
                }]
            },
            1).to({
            state: [{
                t: this.instance_8
            }]
        }, 1).to({
            state: [{
                t: this.instance_8
            }]
        }, 1).to({
            state: []
        }, 1).to({
            state: [{
                t: this.instance_9
            }]
        }, 24).to({
            state: [{
                t: this.instance_9
            }]
        }, 1).to({
            state: [{
                t: this.instance_9
            }]
        }, 1).to({
            state: []
        }, 1).to({
            state: [{
                t: this.instance_9
            }]
        }, 1).to({
            state: [{
                t: this.instance_9
            }]
        }, 1).to({
            state: [{
                t: this.instance_9
            }]
        }, 1).to({
            state: []
        }, 1).to({
            state: [{
                t: this.instance_9
            }]
        }, 5).to({
            state: [{
                t: this.instance_9
            }]
        }, 1).to({
            state: [{
                t: this.instance_9
            }]
        }, 1).to({
            state: []
        }, 1).to({
                state: [{
                    t: this.instance_9
                }]
            },
            1).to({
            state: [{
                t: this.instance_9
            }]
        }, 1).to({
            state: [{
                t: this.instance_9
            }]
        }, 1).to({
            state: []
        }, 1).to({
            state: [{
                t: this.instance_10
            }]
        }, 11).to({
            state: []
        }, 1).to({
            state: [{
                t: this.instance_10
            }]
        }, 1).to({
            state: []
        }, 1).to({
            state: [{
                t: this.instance_10
            }]
        }, 1).to({
            state: []
        }, 1).to({
            state: [{
                t: this.instance_11
            }]
        }, 3).to({
            state: [{
                t: this.instance_11
            }]
        }, 1).to({
            state: [{
                t: this.instance_11
            }]
        }, 1).to({
            state: [{
                t: this.instance_11
            }]
        }, 1).to({
            state: [{
                t: this.instance_11
            }]
        }, 1).to({
            state: [{
                t: this.instance_11
            }]
        }, 1).to({
                state: [{
                    t: this.instance_11
                }]
            },
            1).to({
            state: [{
                t: this.instance_11
            }]
        }, 1).to({
            state: []
        }, 1).to({
            state: [{
                t: this.instance_12
            }]
        }, 11).to({
            state: [{
                t: this.instance_12
            }]
        }, 1).to({
            state: [{
                t: this.instance_12
            }]
        }, 1).to({
            state: [{
                t: this.instance_12
            }]
        }, 1).to({
            state: [{
                t: this.instance_12
            }]
        }, 1).to({
            state: [{
                t: this.instance_12
            }]
        }, 1).to({
            state: [{
                t: this.instance_12
            }]
        }, 2).to({
            state: [{
                t: this.instance_12
            }]
        }, 3).to({
            state: [{
                t: this.instance_12
            }]
        }, 1).to({
            state: [{
                t: this.instance_12
            }]
        }, 1).to({
            state: []
        }, 1).to({
            state: [{
                t: this.instance_13
            }]
        }, 6).to({
                state: [{
                    t: this.instance_13
                }]
            },
            1).to({
            state: [{
                t: this.instance_13
            }]
        }, 1).to({
            state: [{
                t: this.instance_13
            }]
        }, 1).to({
            state: [{
                t: this.instance_13
            }]
        }, 1).to({
            state: [{
                t: this.instance_13
            }]
        }, 5).to({
            state: [{
                t: this.instance_13
            }]
        }, 1).to({
            state: [{
                t: this.instance_13
            }]
        }, 1).to({
            state: [{
                t: this.instance_13
            }]
        }, 1).to({
            state: []
        }, 1).to({
            state: [{
                t: this.instance_14
            }]
        }, 2).to({
            state: []
        }, 12).to({
            state: [{
                t: this.instance_15
            }]
        }, 17).to({
            state: [{
                t: this.instance_5
            }]
        }, 9).to({
            state: [{
                t: this.instance_4
            }]
        }, 20).to({
            state: [{
                t: this.instance_4
            }]
        }, 15).to({
                state: [{
                    t: this.instance_4
                }]
            },
            1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: []
        }, 1).wait(1));
        this.timeline.addTween(a.Tween.get(this.instance_3).wait(133).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 2).wait(1).to({
            _off: !1
        }, 0).wait(3).to({
            regX: -28.8,
            regY: 20.5,
            x: -153.75,
            alpha: .6944
        }, 0).wait(1).to({
            alpha: .4444
        }, 0).wait(1).to({
            alpha: .25
        }, 0).wait(1).to({
            alpha: .1111
        }, 0).wait(1).to({
            alpha: .0278
        }, 0).wait(1).to({
            regX: -29.1,
            regY: 20.4,
            x: -154.15,
            alpha: 0
        }, 0).to({
            _off: !0
        }, 1).wait(2).to({
            _off: !1,
            x: -145,
            y: -389.15,
            alpha: 1
        }, 0).to({
            _off: !0
        }, 2).wait(1).to({
            _off: !1
        }, 0).wait(3).to({
            regX: -28.8,
            regY: 20.5,
            x: -144.6,
            alpha: .6944
        }, 0).wait(1).to({
            alpha: .4444
        }, 0).wait(1).to({
            alpha: .25
        }, 0).wait(1).to({
            alpha: .1111
        }, 0).wait(1).to({
            alpha: .0278
        }, 0).wait(1).to({
            regX: -29.1,
            regY: 20.4,
            x: -145,
            alpha: 0
        }, 0).to({
            _off: !0
        }, 1).wait(324));
        this.timeline.addTween(a.Tween.get(this.instance_4).wait(160).to({
            _off: !1
        }, 0).wait(15).to({
            startPosition: 0
        }, 0).wait(1).to({
            regX: -31.4,
            regY: 22.1,
            scaleX: 1.4203,
            scaleY: 1.4203,
            x: -168.4,
            y: -383,
            alpha: .5625,
            startPosition: 1
        }, 0).wait(1).to({
            alpha: .25,
            startPosition: 2
        }, 0).wait(1).to({
            alpha: .0625,
            startPosition: 3
        }, 0).wait(1).to({
            regX: -30.3,
            regY: 20.6,
            scaleX: 1.4204,
            scaleY: 1.4204,
            x: -165.9,
            y: -383.85,
            alpha: 0,
            startPosition: 19
        }, 0).to({
            _off: !0
        }, 1).wait(282).to({
            _off: !1,
            alpha: 1,
            startPosition: 0
        }, 0).wait(15).to({
            startPosition: 0
        }, 0).wait(1).to({
            regX: -31.4,
            regY: 22.1,
            scaleX: 1.4203,
            scaleY: 1.4203,
            x: -168.4,
            y: -383,
            alpha: .5625,
            startPosition: 1
        }, 0).wait(1).to({
            alpha: .25,
            startPosition: 2
        }, 0).wait(1).to({
            alpha: .0625,
            startPosition: 3
        }, 0).wait(1).to({
            regX: -30.3,
            regY: 20.6,
            scaleX: 1.4204,
            scaleY: 1.4204,
            x: -165.9,
            y: -383.85,
            alpha: 0,
            startPosition: 19
        }, 0).to({
            _off: !0
        }, 1).wait(1));
        this.timeline.addTween(a.Tween.get(this.instance_6).wait(202).to({
            _off: !1
        }, 0).wait(1).to({
            regX: -.2,
            regY: .2,
            x: -145.7,
            y: -399.5,
            alpha: .5556
        }, 0).wait(1).to({
            x: -149.8,
            y: -407.75,
            alpha: .8889
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: -151.1,
            y: -410.8,
            alpha: 1
        }, 0).wait(1).to({
            regX: -.2,
            regY: .2,
            x: -150.85,
            y: -409.85
        }, 0).wait(1).to({
            x: -149.85,
            y: -408
        }, 0).wait(1).to({
            x: -148.15,
            y: -404.85
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: -145.7,
            y: -400.8
        }, 0).to({
            x: -146.45,
            y: -402.15
        }, 2).wait(8).to({
            regX: -.2,
            regY: .2,
            x: -146.2,
            y: -401.25,
            alpha: .9298
        }, 0).wait(1).to({
            x: -145.15,
            y: -399.3,
            alpha: .692
        }, 0).wait(1).to({
            x: -143.55,
            y: -396.4,
            alpha: .339
        }, 0).wait(1).to({
            x: -142.4,
            y: -394.25,
            alpha: .0788
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: -141.95,
            y: -393.95,
            alpha: 0
        }, 0).to({
            _off: !0
        }, 1).wait(6).to({
            _off: !1,
            x: -139.2,
            y: -385.7
        }, 0).wait(1).to({
            regX: -.2,
            regY: .2,
            x: -146.15,
            y: -399.1,
            alpha: .5556
        }, 0).wait(1).to({
            x: -150.25,
            y: -407.35,
            alpha: .8889
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: -151.55,
            y: -410.4,
            alpha: 1
        }, 0).wait(1).to({
            regX: -.2,
            regY: .2,
            x: -151.3,
            y: -409.45
        }, 0).wait(1).to({
            x: -150.3,
            y: -407.6
        }, 0).wait(1).to({
            x: -148.6,
            y: -404.45
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: -146.15,
            y: -400.4
        }, 0).to({
            x: -146.9,
            y: -401.75
        }, 2).wait(3).to({
            regX: -.2,
            regY: .2,
            x: -146.65,
            y: -400.85,
            alpha: .9298
        }, 0).wait(1).to({
            x: -145.6,
            y: -398.9,
            alpha: .692
        }, 0).wait(1).to({
            x: -144,
            y: -396,
            alpha: .339
        }, 0).wait(1).to({
            x: -142.85,
            y: -393.85,
            alpha: .0788
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: -142.4,
            y: -393.55,
            alpha: 0
        }, 0).to({
            _off: !0
        }, 1).wait(236));
        this.timeline.addTween(a.Tween.get(this.instance_8).wait(268).to({
            _off: !1
        }, 0).wait(1).to({
            regX: .5,
            regY: -.6,
            x: -134.5,
            y: -378.5
        }, 0).wait(1).to({
            y: -374.65
        }, 0).wait(1).to({
            y: -371.4
        }, 0).wait(1).to({
            y: -368.75
        }, 0).wait(1).to({
            y: -366.65
        }, 0).wait(1).to({
            y: -365.15
        }, 0).wait(1).to({
            y: -364.25
        }, 0).wait(1).to({
            regX: -.5,
            regY: .2,
            x: -135.5,
            y: -363.2
        }, 0).wait(9).to({
            startPosition: 0
        }, 0).wait(1).to({
            regX: .5,
            regY: -.6,
            x: -134.5,
            y: -364,
            alpha: .4444
        }, 0).wait(1).to({
                alpha: .1111
            },
            0).wait(1).to({
            regX: -.5,
            regY: .2,
            x: -135.5,
            y: -363.2,
            alpha: 0
        }, 0).to({
            _off: !0
        }, 1).wait(194));
        this.timeline.addTween(a.Tween.get(this.instance_9).wait(313).to({
            _off: !1
        }, 0).wait(1).to({
            scaleX: 1.1203,
            scaleY: 1.1203,
            rotation: -18.7494,
            x: -160.675,
            y: -378.8875,
            alpha: .4141
        }, 0).wait(1).to({
            scaleX: 1.1645,
            scaleY: 1.1645,
            rotation: -29.9991,
            x: -171.15,
            y: -377.35,
            alpha: .2188
        }, 0).to({
            _off: !0
        }, 1).wait(1).to({
            _off: !1,
            scaleX: .9876,
            scaleY: .9876,
            rotation: 14.9998,
            x: -129.25,
            y: -383.5,
            alpha: 1
        }, 0).wait(1).to({
            scaleX: 1.1203,
            scaleY: 1.1203,
            rotation: -18.7494,
            x: -160.675,
            y: -383.275,
            alpha: .4141
        }, 0).wait(1).to({
            scaleX: 1.1645,
            scaleY: 1.1645,
            rotation: -29.9991,
            x: -171.15,
            y: -383.2,
            alpha: .2188
        }, 0).to({
            _off: !0
        }, 1).wait(5).to({
            _off: !1,
            scaleX: .9876,
            scaleY: .9876,
            rotation: 14.9998,
            x: -129.25,
            y: -383.5,
            alpha: 1
        }, 0).wait(1).to({
            scaleX: 1.1203,
            scaleY: 1.1203,
            rotation: -18.7494,
            x: -160.675,
            y: -378.8875,
            alpha: .4141
        }, 0).wait(1).to({
            scaleX: 1.1645,
            scaleY: 1.1645,
            rotation: -29.9991,
            x: -171.15,
            y: -377.35,
            alpha: .2188
        }, 0).to({
            _off: !0
        }, 1).wait(1).to({
            _off: !1,
            scaleX: .9876,
            scaleY: .9876,
            rotation: 14.9998,
            x: -129.25,
            y: -383.5,
            alpha: 1
        }, 0).wait(1).to({
            scaleX: 1.1203,
            scaleY: 1.1203,
            rotation: -18.7494,
            x: -160.675,
            y: -383.275,
            alpha: .4141
        }, 0).wait(1).to({
            scaleX: 1.1645,
            scaleY: 1.1645,
            rotation: -29.9991,
            x: -171.15,
            y: -383.2,
            alpha: .2188
        }, 0).to({
            _off: !0
        }, 1).wait(151));
        this.timeline.addTween(a.Tween.get(this.instance_11).wait(351).to({
            _off: !1
        }, 0).wait(1).to({
            x: -117.35,
            y: -231.75,
            alpha: 1
        }, 0).wait(1).to({
            regX: .9,
            x: -117.45,
            y: -230.8,
            alpha: .8965
        }, 0).wait(1).to({
            x: -118.8,
            y: -229.6,
            alpha: .7636
        }, 0).wait(1).to({
            x: -120.4,
            y: -228.15,
            alpha: .6048
        }, 0).wait(1).to({
            x: -122.2,
            y: -226.55,
            alpha: .4229
        }, 0).wait(1).to({
            x: -124.2,
            y: -224.7,
            alpha: .2205
        }, 0).wait(1).to({
            regX: 0,
            x: -127.35,
            y: -222.75,
            alpha: 0
        }, 0).to({
            _off: !0
        }, 1).wait(124));
        this.timeline.addTween(a.Tween.get(this.instance_12).wait(370).to({
            _off: !1
        }, 0).wait(1).to({
            regX: 2.3,
            regY: 1,
            scaleX: .8633,
            scaleY: .8633,
            x: -139.9,
            y: -356.5
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            scaleX: 1,
            scaleY: 1,
            x: -143.15,
            y: -362.35
        }, 0).wait(1).to({
            regX: 2.3,
            regY: 1,
            scaleX: .9896,
            scaleY: .9896,
            x: -140.6,
            y: -360.2
        }, 0).wait(1).to({
            scaleX: .9586,
            scaleY: .9586,
            x: -140.05,
            y: -356.95
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            scaleX: .9068,
            scaleY: .9068,
            x: -141.15,
            y: -352.35
        }, 0).to({
            scaleX: 1,
            scaleY: 1,
            x: -142.15,
            y: -356.35
        }, 2).wait(3).to({
            scaleX: 1.1165,
            scaleY: 1.1165
        }, 0).wait(1).to({
            regX: 2.3,
            regY: 1,
            scaleX: .8111,
            scaleY: .8111,
            x: -139.55,
            y: -355.35,
            alpha: .3262
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            scaleX: .7092,
            scaleY: .7092,
            x: -141.15,
            y: -356.1,
            alpha: .1016
        }, 0).to({
            _off: !0
        }, 1).wait(100));
        this.timeline.addTween(a.Tween.get(this.instance_13).wait(389).to({
            _off: !1
        }, 0).wait(1).to({
            scaleX: 1.0714,
            scaleY: 1.0714,
            y: -366.2
        }, 0).wait(1).to({
            scaleX: 1.2527,
            scaleY: 1.2527,
            y: -367.45
        }, 0).wait(1).to({
            scaleX: .9864,
            scaleY: .9864
        }, 0).wait(1).to({
            scaleX: .8976,
            scaleY: .8976
        }, 0).wait(5).to({
            startPosition: 0
        }, 0).wait(1).to({
            alpha: .5009
        }, 0).wait(1).to({
            alpha: .2014
        }, 0).wait(1).to({
            alpha: .1016
        }, 0).to({
            _off: !0
        }, 1).wait(81));
        this.c = new b.character1_body;
        this.c.name = "c";
        this.c.parent = this;
        this.timeline.addTween(a.Tween.get(this.c).wait(9).to({
            regX: -75,
            regY: -188,
            x: -75,
            y: -196.4
        }, 0).wait(1).to({
                regX: 0,
                regY: 0,
                x: 0,
                y: -10
            },
            0).wait(1).to({
            regX: -75,
            regY: -188,
            x: -75,
            y: -197.2
        }, 0).wait(1).to({
            y: -194.45
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 3
        }, 0).wait(1).to({
            y: 1
        }, 0).wait(1).to({
            y: 0
        }, 0).wait(1).to({
            y: 2
        }, 0).wait(1).to({
            regX: -75,
            regY: -188,
            x: -75,
            y: -193.5
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: -8
        }, 0).wait(1).to({
            regX: -75,
            regY: -188,
            x: -75,
            y: -193.75
        }, 0).wait(1).to({
            y: -186.8
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 4
        }, 0).wait(1).to({
            regX: -75,
            regY: -188,
            x: -75,
            y: -184.75
        }, 0).wait(1).to({
            y: -187.15
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 0
        }, 0).wait(1).to({
                y: 2
            },
            0).wait(1).to({
            y: -7
        }, 0).wait(1).to({
            regX: -75,
            regY: -188,
            x: -75,
            y: -192.95
        }, 0).wait(1).to({
            y: -187.05
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 3
        }, 0).wait(1).to({
            y: -7
        }, 0).wait(1).to({
            regX: -75,
            regY: -188,
            x: -75,
            y: -192.95
        }, 0).wait(1).to({
            y: -187.05
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 3
        }, 0).wait(1).to({
            regX: -75,
            regY: -188,
            x: -75,
            y: -187.1
        }, 0).wait(1).to({
            y: -187.75
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 0
        }, 0).wait(1).to({
            y: 6
        }, 0).wait(1).to({
            regX: -75,
            regY: -188,
            x: -75,
            y: -197
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: -14
        }, 0).wait(1).to({
            regX: -75,
            regY: -188,
            x: -75,
            y: -200.95
        }, 0).wait(1).to({
            y: -197.35
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 3
        }, 0).wait(1).to({
            regX: -75,
            regY: -188,
            x: -75,
            y: -186
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: -1
        }, 0).wait(1).to({
            regX: -75,
            regY: -188,
            x: -75,
            y: -188.25
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 0
        }, 0).wait(1).to({
            y: 6
        }, 0).wait(1).to({
            regX: -75,
            regY: -188,
            x: -75,
            y: -197
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: -14
        }, 0).wait(1).to({
            regX: -75,
            regY: -188,
            x: -75,
            y: -200.95
        }, 0).wait(1).to({
            y: -197.35
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 3
        }, 0).wait(1).to({
            regX: -75,
            regY: -188,
            x: -75,
            y: -186
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: -1
        }, 0).wait(1).to({
            regX: -75,
            regY: -188,
            x: -75,
            y: -188.25
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 0
        }, 0).wait(2).to({
            regX: -75,
            regY: -188,
            x: -75,
            y: -187.4
        }, 0).wait(1).to({
            y: -185
        }, 0).wait(1).to({
            y: -182.65
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 6
        }, 0).wait(1).to({
            regX: -75,
            regY: -188,
            x: -75,
            y: -182.65
        }, 0).wait(1).to({
            y: -185
        }, 0).wait(1).to({
            y: -187.4
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 0
        }, 0).wait(2).to({
            regX: -75,
            regY: -188,
            x: -75,
            y: -187.85
        }, 0).wait(1).to({
                y: -187.3
            },
            0).wait(1).to({
            y: -186.2
        }, 0).wait(1).to({
            y: -184.85
        }, 0).wait(1).to({
            y: -183.75
        }, 0).wait(1).to({
            y: -183.2
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 5
        }, 0).wait(1).to({
            regX: -75,
            regY: -188,
            x: -75,
            y: -183.2
        }, 0).wait(1).to({
            y: -183.75
        }, 0).wait(1).to({
            y: -184.85
        }, 0).wait(1).to({
            y: -186.2
        }, 0).wait(1).to({
            y: -187.3
        }, 0).wait(1).to({
            y: -187.85
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 0
        }, 0).wait(1).to({
            y: 6
        }, 2).wait(1).to({
            regX: -75,
            regY: -188,
            x: -75,
            y: -183.25
        }, 0).wait(1).to({
            y: -186.8
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 0
        }, 0).to({
                y: 6
            },
            2).wait(1).to({
            regX: -75,
            regY: -188,
            x: -75,
            y: -185.8
        }, 0).wait(1).to({
            y: -187.65
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 0
        }, 0).wait(2).to({
            regX: -75,
            regY: -188,
            scaleX: 1.0002,
            scaleY: 1.0002,
            rotation: -.0247,
            x: -75.1,
            y: -187.95
        }, 0).wait(1).to({
            scaleX: 1.0007,
            scaleY: 1.0007,
            rotation: -.1102,
            x: -75.55,
            y: -187.75
        }, 0).wait(1).to({
            scaleX: 1.0018,
            scaleY: 1.0018,
            rotation: -.2776,
            x: -76.45,
            y: -187.3
        }, 0).wait(1).to({
            scaleX: 1.0036,
            scaleY: 1.0036,
            rotation: -.5429,
            x: -77.85,
            y: -186.55
        }, 0).wait(1).to({
            scaleX: 1.0057,
            scaleY: 1.0057,
            rotation: -.876,
            x: -79.65,
            y: -185.65
        }, 0).wait(1).to({
            scaleX: 1.0077,
            scaleY: 1.0077,
            rotation: -1.178,
            x: -81.25,
            y: -184.8
        }, 0).wait(1).to({
            scaleX: 1.0091,
            scaleY: 1.0091,
            rotation: -1.3795,
            x: -82.3,
            y: -184.25
        }, 0).wait(1).to({
            scaleX: 1.0097,
            scaleY: 1.0097,
            rotation: -1.483,
            x: -82.9,
            y: -183.95
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            scaleX: 1.0099,
            scaleY: 1.0099,
            rotation: -1.5126,
            x: -2.35,
            y: 3.95
        }, 0).wait(1).to({
            regX: -75,
            regY: -188,
            scaleX: 1.0098,
            scaleY: 1.0098,
            rotation: -1.4931,
            x: -82.95,
            y: -183.95
        }, 0).wait(1).to({
            scaleX: 1.0094,
            scaleY: 1.0094,
            rotation: -1.4266,
            x: -82.6,
            y: -184.1
        }, 0).wait(1).to({
            scaleX: 1.0085,
            scaleY: 1.0085,
            rotation: -1.2984,
            x: -81.9,
            y: -184.5
        }, 0).wait(1).to({
            scaleX: 1.0071,
            scaleY: 1.0071,
            rotation: -1.0938,
            x: -80.75,
            y: -185.05
        }, 0).wait(1).to({
            scaleX: 1.0053,
            scaleY: 1.0053,
            rotation: -.817,
            x: -79.35,
            y: -185.8
        }, 0).wait(1).to({
            scaleX: 1.0033,
            scaleY: 1.0033,
            rotation: -.5213,
            x: -77.7,
            y: -186.6
        }, 0).wait(1).to({
            scaleX: 1.0017,
            scaleY: 1.0017,
            rotation: -.2815,
            x: -76.45,
            y: -187.3
        }, 0).wait(1).to({
            scaleX: 1.0007,
            scaleY: 1.0007,
            rotation: -.1264,
            x: -75.6,
            y: -187.7
        }, 0).wait(1).to({
            scaleX: 1.0001,
            scaleY: 1.0001,
            rotation: -.0461,
            x: -75.15,
            y: -187.9
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            scaleX: 1,
            scaleY: 1,
            rotation: -.0227,
            x: 0,
            y: 0
        }, 0).wait(1).to({
            rotation: 0
        }, 0).wait(1).to({
            regX: -75,
            regY: -188,
            scaleX: 1.0002,
            scaleY: 1.0002,
            rotation: -.0247,
            x: -75.1,
            y: -187.95
        }, 0).wait(1).to({
            scaleX: 1.0007,
            scaleY: 1.0007,
            rotation: -.1102,
            x: -75.55,
            y: -187.75
        }, 0).wait(1).to({
            scaleX: 1.0018,
            scaleY: 1.0018,
            rotation: -.2776,
            x: -76.45,
            y: -187.3
        }, 0).wait(1).to({
            scaleX: 1.0036,
            scaleY: 1.0036,
            rotation: -.5429,
            x: -77.85,
            y: -186.55
        }, 0).wait(1).to({
            scaleX: 1.0057,
            scaleY: 1.0057,
            rotation: -.876,
            x: -79.65,
            y: -185.65
        }, 0).wait(1).to({
            scaleX: 1.0077,
            scaleY: 1.0077,
            rotation: -1.178,
            x: -81.25,
            y: -184.8
        }, 0).wait(1).to({
            scaleX: 1.0091,
            scaleY: 1.0091,
            rotation: -1.3795,
            x: -82.3,
            y: -184.25
        }, 0).wait(1).to({
            scaleX: 1.0097,
            scaleY: 1.0097,
            rotation: -1.483,
            x: -82.9,
            y: -183.95
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            scaleX: 1.0099,
            scaleY: 1.0099,
            rotation: -1.5126,
            x: -2.35,
            y: 3.95
        }, 0).wait(1).to({
            regX: -75,
            regY: -188,
            scaleX: 1.0098,
            scaleY: 1.0098,
            rotation: -1.4928,
            x: -82.95,
            y: -183.95
        }, 0).wait(1).to({
            scaleX: 1.0094,
            scaleY: 1.0094,
            rotation: -1.4253,
            x: -82.6,
            y: -184.1
        }, 0).wait(1).to({
            scaleX: 1.0085,
            scaleY: 1.0085,
            rotation: -1.2951,
            x: -81.9,
            y: -184.5
        }, 0).wait(1).to({
            scaleX: 1.0071,
            scaleY: 1.0071,
            rotation: -1.0874,
            x: -80.75,
            y: -185.05
        }, 0).wait(1).to({
            scaleX: 1.0053,
            scaleY: 1.0053,
            rotation: -.8064,
            x: -79.3,
            y: -185.8
        }, 0).wait(1).to({
            scaleX: 1.0033,
            scaleY: 1.0033,
            rotation: -.5062,
            x: -77.65,
            y: -186.65
        }, 0).wait(1).to({
            scaleX: 1.0017,
            scaleY: 1.0017,
            rotation: -.2627,
            x: -76.4,
            y: -187.3
        }, 0).wait(1).to({
            scaleX: 1.0007,
            scaleY: 1.0007,
            rotation: -.1053,
            x: -75.55,
            y: -187.75
        }, 0).wait(1).to({
            scaleX: 1.0002,
            scaleY: 1.0002,
            rotation: -.0237,
            x: -75.1,
            y: -187.95
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            scaleX: 1,
            scaleY: 1,
            rotation: 0,
            x: 0,
            y: 0
        }, 0).wait(16).to({
            regX: -75,
            regY: -188,
            x: -75,
            y: -193.55
        }, 0).wait(1).to({
            y: -195.45
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: -8
        }, 0).wait(1).to({
            regX: -75,
            regY: -188,
            x: -75,
            y: -195.35
        }, 0).wait(1).to({
            y: -193.25
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 2
        }, 0).wait(1).to({
            y: 1
        }, 0).wait(1).to({
            y: 0
        }, 0).wait(7).to({
            regX: -75,
            regY: -188,
            x: -75,
            y: -196.4
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: -10
        }, 0).wait(1).to({
            regX: -75,
            regY: -188,
            x: -75,
            y: -197.2
        }, 0).wait(1).to({
            y: -194.45
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 3
        }, 0).wait(1).to({
            y: 1
        }, 0).wait(1).to({
            y: 0
        }, 0).wait(15).to({
            regX: -75,
            regY: -188,
            rotation: -.0253,
            x: -75.1,
            y: -187.85
        }, 0).wait(1).to({
            rotation: -.1129,
            x: -75.25,
            y: -187.2
        }, 0).wait(1).to({
            rotation: -.2845,
            x: -75.6,
            y: -186
        }, 0).wait(1).to({
            rotation: -.5565,
            x: -76.1,
            y: -184.05
        }, 0).wait(1).to({
            scaleX: .9999,
            scaleY: .9999,
            rotation: -.898,
            x: -76.8,
            y: -181.6
        }, 0).wait(1).to({
                rotation: -1.2075,
                x: -77.4,
                y: -179.35
            },
            0).wait(1).to({
            rotation: -1.4141,
            x: -77.8,
            y: -177.85
        }, 0).wait(1).to({
            rotation: -1.5201,
            x: -78,
            y: -177.1
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            rotation: -1.5505,
            x: 2,
            y: 9
        }, 0).wait(1).to({
            regX: -75,
            regY: -188,
            rotation: -1.5305,
            x: -78,
            y: -177.05
        }, 0).wait(1).to({
            rotation: -1.4624,
            x: -77.9,
            y: -177.55
        }, 0).wait(1).to({
            rotation: -1.3309,
            x: -77.6,
            y: -178.5
        }, 0).wait(1).to({
            rotation: -1.121,
            x: -77.3,
            y: -180.05
        }, 0).wait(1).to({
            rotation: -.8372,
            x: -76.7,
            y: -182.1
        }, 0).wait(1).to({
            scaleX: 1,
            scaleY: 1,
            rotation: -.534,
            x: -76.1,
            y: -184.3
        }, 0).wait(1).to({
            rotation: -.2881,
            x: -75.65,
            y: -186.05
        }, 0).wait(1).to({
            rotation: -.1291,
            x: -75.3,
            y: -187.25
        }, 0).wait(1).to({
            rotation: -.0467,
            x: -75.15,
            y: -187.85
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            rotation: -.0227,
            x: 0,
            y: 0
        }, 0).wait(1).to({
            rotation: 0
        }, 0).wait(27).to({
            rotation: -.0227
        }, 0).wait(1).to({
            rotation: 0
        }, 0).wait(1).to({
            regX: -75,
            regY: -188,
            rotation: -.0894,
            x: -75.2,
            y: -187.65
        }, 0).wait(1).to({
            rotation: -.4358,
            x: -75.9,
            y: -186.05
        }, 0).wait(1).to({
            scaleX: .9999,
            scaleY: .9999,
            rotation: -1.0316,
            x: -77.1,
            y: -183.3
        }, 0).wait(1).to({
                rotation: -1.4426,
                x: -77.85,
                y: -181.35
            },
            0).wait(1).to({
            regX: 0,
            regY: 0,
            rotation: -1.5505,
            x: 2,
            y: 5
        }, 0).wait(8).to({
            regX: -75,
            regY: -188,
            rotation: -1.4913,
            x: -77.95,
            y: -181.15
        }, 0).wait(1).to({
            rotation: -1.2701,
            x: -77.5,
            y: -182.25
        }, 0).wait(1).to({
            rotation: -.8372,
            x: -76.7,
            y: -184.2
        }, 0).wait(1).to({
            scaleX: 1,
            scaleY: 1,
            rotation: -.3606,
            x: -75.8,
            y: -186.45
        }, 0).wait(1).to({
            rotation: -.094,
            x: -75.25,
            y: -187.7
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            rotation: -.0227,
            x: 0,
            y: 0
        }, 0).wait(5).to({
            rotation: 0
        }, 0).wait(1).to({
            regX: -75,
            regY: -188,
            x: -75,
            y: -196.4
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: -10
        }, 0).wait(1).to({
            regX: -75,
            regY: -188,
            x: -75,
            y: -197.2
        }, 0).wait(1).to({
            y: -194.45
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 3
        }, 0).wait(1).to({
            y: 1
        }, 0).wait(1).to({
            y: 0
        }, 0).wait(9).to({
            x: 1,
            y: 4
        }, 1, a.Ease.get(1)).wait(1).to({
            regX: -75,
            regY: -188,
            x: -77.75,
            y: -180.25
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: -4,
            y: 9
        }, 0).to({
            x: 0,
            y: 13
        }, 4).wait(11).to({
            regX: -75,
            regY: -188,
            x: -75,
            y: -175.75
        }, 0).wait(1).to({
            y: -178.7
        }, 0).wait(1).to({
            y: -183.65
        }, 0).wait(1).to({
            y: -187.1
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 0
        }, 0).wait(5).to({
            y: -1
        }, 0).wait(1).to({
            regX: -75,
            regY: -188,
            x: -75,
            y: -187
        }, 0).wait(1).to({
            y: -181.05
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 9
        }, 0).to({
            y: 8
        }, 2).wait(1).to({
            y: 9
        }, 0).wait(6).to({
            regX: -75,
            regY: -188,
            x: -75,
            y: -180.2
        }, 0).wait(1).to({
            y: -184.5
        }, 0).wait(1).to({
            y: -188.8
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: -2
        }, 0).wait(1).to({
            regX: -75,
            regY: -188,
            x: -75,
            y: -188.5
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 0
        }, 0).wait(2).to({
            regX: -75,
            regY: -188,
            x: -75,
            y: -194.7
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: -8
        }, 0).wait(1).to({
            regX: -75,
            regY: -188,
            x: -75,
            y: -194.85
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 0
        }, 0).wait(1).to({
            regX: -75,
            regY: -188,
            x: -75,
            y: -196.4
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: -10
        }, 0).wait(1).to({
            regX: -75,
            regY: -188,
            x: -75,
            y: -197.2
        }, 0).wait(1).to({
            y: -194.45
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 3
        }, 0).wait(1).to({
            y: 1
        }, 0).wait(1).to({
            y: 0
        }, 0).wait(1).to({
            x: 1,
            y: 4
        }, 1, a.Ease.get(1)).wait(1).to({
            regX: -75,
            regY: -188,
            x: -77.75,
            y: -180.25
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: -4,
            y: 9
        }, 0).to({
            x: 0,
            y: 13
        }, 4).wait(8).to({
            regX: -75,
            regY: -188,
            x: -75,
            y: -177.25
        }, 0).wait(1).to({
            y: -185
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 0
        }, 0).wait(1).to({
            y: 2
        }, 0).wait(1).to({
            regX: -75,
            regY: -188,
            x: -75,
            y: -189
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: -2
        }, 0).wait(1).to({
            regX: -75,
            regY: -188,
            x: -75,
            y: -188.15
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 2
        }, 0).wait(1).to({
            regX: -75,
            regY: -188,
            x: -75,
            y: -187.5
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 0
        }, 0).wait(2).to({
            regX: -75,
            regY: -188,
            x: -75,
            y: -187.4
        }, 0).wait(1).to({
            y: -185
        }, 0).wait(1).to({
            y: -182.65
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 6
        }, 0).wait(1).to({
            regX: -75,
            regY: -188,
            x: -75,
            y: -182.6
        }, 0).wait(1).to({
                y: -182.9
            },
            0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 5
        }, 0).wait(5).to({
            regX: -75,
            regY: -188,
            x: -75,
            y: -183.4
        }, 0).wait(1).to({
            y: -184.9
        }, 0).wait(1).to({
            y: -187.15
        }, 0).wait(1).to({
            y: -188.6
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: -1
        }, 0).wait(1).to({
            regX: -75,
            regY: -188,
            x: -75,
            y: -188.25
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 0
        }, 0).wait(1).to({
            y: 5
        }, 0).wait(1).to({
            regX: -75,
            regY: -188,
            x: -75,
            y: -195.6
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: -10
        }, 0).wait(1).to({
            regX: -75,
            regY: -188,
            x: -75,
            y: -197.2
        }, 0).wait(1).to({
            y: -194.45
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 3
        }, 0).wait(1).to({
            y: 1
        }, 0).wait(1).to({
            y: 0
        }, 0).wait(9).to({
            regX: -75,
            regY: -188,
            x: -75,
            y: -195.5
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: -10
        }, 0).wait(2).to({
            regX: -75,
            regY: -188,
            x: -75,
            y: -196
        }, 0).wait(1).to({
            y: -190
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 8
        }, 0).to({
            y: 5
        }, 2).wait(7).to({
            regX: -75,
            regY: -188,
            x: -75,
            y: -183.35
        }, 0).wait(1).to({
            y: -184.55
        }, 0).wait(1).to({
            y: -186.5
        }, 0).wait(1).to({
            y: -187.7
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 0
        }, 0).wait(1).to({
            y: 2
        }, 0).wait(1).to({
            y: -7
        }, 0).wait(1).to({
            regX: -75,
            regY: -188,
            x: -75,
            y: -192.95
        }, 0).wait(1).to({
            y: -187.05
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 3
        }, 0).wait(1).to({
            y: -7
        }, 0).wait(1).to({
            regX: -75,
            regY: -188,
            x: -75,
            y: -192.95
        }, 0).wait(1).to({
            y: -187.05
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 3
        }, 0).wait(1).to({
            regX: -75,
            regY: -188,
            x: -75,
            y: -187.1
        }, 0).wait(1).to({
            y: -187.75
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 0
        }, 0).wait(2).to({
            regX: -75,
            regY: -188,
            x: -72,
            y: -184.6
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 4,
            y: 4.55
        }, 0).to({
            x: -2,
            y: 8.8
        }, 2).wait(1).to({
            regX: -75,
            regY: -188,
            x: -75.85,
            y: -178.55
        }, 0).wait(1).to({
            x: -75.2,
            y: -178.15
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 10
        }, 0).wait(5).to({
            regX: -75,
            regY: -188,
            x: -75,
            y: -178.7
        }, 0).wait(1).to({
            y: -181.15
        }, 0).wait(1).to({
            y: -184.85
        }, 0).wait(1).to({
            y: -187.35
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 0
        }, 0).wait(11).to({
            regX: -75,
            regY: -188,
            x: -75,
            y: -187.4
        }, 0).wait(1).to({
            y: -185
        }, 0).wait(1).to({
            y: -182.65
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 6
        }, 0).wait(1).to({
            regX: -75,
            regY: -188,
            x: -75,
            y: -182.65
        }, 0).wait(1).to({
            y: -185
        }, 0).wait(1).to({
            y: -187.4
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 0
        }, 0).wait(33))
    }).prototype =
        c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-479.4, -699.9, 836, 835.7);
    (b.voice_loader_container = function(c, d, e) {
        this.initialize(c, d, e, {
            "in": 1,
            out: 11
        });
        this.frame_0 = function() {
            this.visible = !1;
            this.stop()
        };
        this.frame_1 = function() {
            this.visible = !0;
            this.play()
        };
        this.frame_10 = function() {
            this.stop()
        };
        this.frame_23 = function() {
            this.gotoAndStop(1)
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(9).call(this.frame_10).wait(13).call(this.frame_23).wait(1));
        this.instance =
            new b.voice_loader;
        this.instance.parent = this;
        this.instance.setTransform(-.5, .1, 1, 1, 0, 0, 0, -.5, .1);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            alpha: .1016
        }, 0).to({
            alpha: 1
        }, 1, a.Ease.get(1)).wait(9).to({
            alpha: .1016
        }, 2, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(10))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-97.4, 0, 92.4, 18);
    (b._407_4 = function(c, d, e) {
        this.initialize(c, d, e, {
            end0: 14,
            scene1: 15,
            end1: 170,
            scene2: 171,
            end2: 307,
            scene3: 308,
            end3: 492,
            scene4: 493,
            end4: 636,
            scene5: 637,
            end5: 753,
            scene6: 754,
            end6: 889,
            scene7: 890,
            end7: 1046
        });
        this.frame_0 = function() {
            function a(b) {
                13 != b.keyCode || exportRoot.loader.visible || (exportRoot._g.end_flag ? (window.location.href = exportRoot._g.url, window.removeEventListener("keydown", a)) : exportRoot._g.window_flag ? exportRoot._u.nextScene() : (exportRoot._g.window_flag = !0, exportRoot.window_1.gotoAndPlay("in")))
            }
            var c = {},
                d = {};
            c.voice_flag = window.im_cjs.voice_flag || !1;
            c.skip_flag = !1;
            c.window_flag = !0;
            c.ios_flag = !1;
            c.end_flag = !1;
            c.shell = window._spec.isShellApp;
            c.url =
                window.im_cjs.jump_url || "";
            c.m1 = "";
            c.m2 = "";
            c.m3 = "";
            c.m4 = "";
            c.m5 = "";
            c.m6 = "";
            c.idx = 0;
            c.t_name = "1";
            c.t_face = "1";
            c.face_init_flag = !0;
            c.start_time;
            c.start_frame;
            c.end_frame;
            c.monitoring_flg = !1;
            createjs.Touch.isSupported() && createjs.Touch.enable(stage, !0);
            d.random = function(a) {
                return Math.floor(Math.random() * a)
            };
            d.updateTalk = function() {
                function a() {
                    window.im_cjs.loaded_check() && (exportRoot.loader.visible = !1, exportRoot.removeEventListener("tick", a))
                }
                exportRoot._g.skip_flag = !1;
                exportRoot._g.m1 = window.im_cjs.t[exportRoot._g.idx][1];
                exportRoot._g.m2 = window.im_cjs.t[exportRoot._g.idx][2];
                exportRoot._g.m3 = window.im_cjs.t[exportRoot._g.idx][3];
                exportRoot._g.m4 = window.im_cjs.t[exportRoot._g.idx][4];
                exportRoot._u.setText();
                exportRoot.window_1.w2.ar.visible = !0;
                exportRoot._g.idx++;
                exportRoot._g.monitoring_flg = !1;
                exportRoot._g.voice_flag && (window.im_cjs.load_voice("scene" + exportRoot._g.idx), exportRoot.loader.visible = !0, exportRoot.addEventListener("tick", a));
                exportRoot.stop()
            };
            d.nextScene = function() {
                exportRoot._g.skip_flag ? (exportRoot._g.skip_flag = !1, exportRoot.window_1.w2.ar.visible = !0, exportRoot.gotoAndStop("end" + exportRoot._g.idx)) : (exportRoot._g.skip_flag = !0, exportRoot.window_1.w2.ar.visible = !1, c.start_time = (new Date).getTime(), c.start_frame = exportRoot.timeline.position + 1, c.monitoring_flg = !0, exportRoot.gotoAndPlay("scene" + exportRoot._g.idx), exportRoot._g.voice_flag && window.im_cjs.voice_play())
            };
            d.setFace = function(a, b) {
                exportRoot[a].c.f.next_face = b - 1;
                exportRoot[a].c.f.gotoAndPlay("run")
            };
            d.stagePlay = function() {
                exportRoot.play()
            };
            d.setText =
                function(a, b) {
                    b = b || 4;
                    if ("finish" == (a || null)) {
                        a = exportRoot.window_2;
                        for (var c = 0, d = 2; c < d; c++) a["line" + (c + 1)].text = exportRoot._g["m" + (c + b)]
                    } else
                        for (a = exportRoot.window_1.w2.text_mc, c = 1, d = 4; c <= d; c++) a["line" + c].text = exportRoot._g["m" + c]
                };
            d.setVoice = function(a, b) {
                window.voiceLoad ? window.voiceLoad(a, b) : console.warn("voiceLoad \u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093")
            };
            d.setScene = function(a) {
                window.sceneLoad ? window.sceneoad(scene) : console.warn("sceneLoad \u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093")
            };
            window.addEventListener("keydown", a);
            if (0 < window.navigator.userAgent.indexOf("Android")) {
                var e = !1;
                exportRoot.stage_btn.addEventListener("mousedown", function(a) {
                    "touchstart" == (a.nativeEvent.type || a.type) && a.nativeEvent.type == a.type || e || exportRoot.loader.visible || (e = !0, setTimeout(function() {
                        e = !1
                    }, 500), exportRoot._g.end_flag ? (window.location.assign(exportRoot._g.url), exportRoot.stage_btn.removeAllEventListeners()) : exportRoot._g.window_flag ? exportRoot._u.nextScene() : (exportRoot._g.window_flag = !0, exportRoot.window_1.gotoAndPlay("in")))
                });
                var f = !1;
                exportRoot.toggle_btn.addEventListener("mousedown", function(a) {
                    f || (exportRoot._g.window_flag ? (exportRoot._g.window_flag = !1, exportRoot.window_1.gotoAndPlay("out")) : (exportRoot._g.window_flag = !0, exportRoot.window_1.gotoAndPlay("in")), a.stopPropagation(), f = !0, setTimeout(function() {
                        f = !1
                    }, 500))
                })
            } else e = !1, exportRoot.stage_btn.addEventListener("click", function(a) {
                e || exportRoot.loader.visible || (exportRoot._g.end_flag ? (window.location.href = exportRoot._g.url, exportRoot.stage_btn.removeAllEventListeners()) :
                    (exportRoot._g.window_flag ? exportRoot._u.nextScene() : (exportRoot._g.window_flag = !0, exportRoot.window_1.gotoAndPlay("in")), e = !0, setTimeout(function() {
                        e = !1
                    }, 500)))
            }), f = !1, exportRoot.toggle_btn.addEventListener("click", function(a) {
                f || (exportRoot._g.window_flag ? (exportRoot._g.window_flag = !1, exportRoot.window_1.gotoAndPlay("out")) : (exportRoot._g.window_flag = !0, exportRoot.window_1.gotoAndPlay("in")), a.stopPropagation(), f = !0, setTimeout(function() {
                    f = !1
                }, 500))
            });
            exportRoot._g = c;
            exportRoot._u = d;
            this.m = window.im_cjs;
            (function() {
                var a, d = [],
                    e, f = 0,
                    h = {
                        init: function() {
                            a = window.exportRoot;
                            e = 1E3 / (b.properties.fps - .3);
                            h.get_action_frames();
                            createjs.Ticker.addEventListener("tick", h.frame_monitoring)
                        },
                        frame_monitoring: function() {
                            var b = a.timeline.position,
                                h = a.timeline.duration;
                            if (c.monitoring_flg) {
                                var g = (new Date).getTime();
                                g = c.start_frame + Math.floor((g - c.start_time) / e);
                                if (g > b) {
                                    for (var k = f, l = d.length; k < l; k++) {
                                        var m = d[k];
                                        if (m > b && m < g) {
                                            f = k;
                                            play_fps = m;
                                            break
                                        } else play_fps = g
                                    }
                                    play_fps >= h && (c.monitoring_flg = !1, play_fps = h - 1);
                                    a.gotoAndStop(play_fps)
                                }
                            }
                        },
                        get_action_frames: function() {
                            for (var b = 0, c = a.timeline.duration; b < c; b++) null != a["frame_" + b] && d.push(b)
                        }
                    };
                h.init()
            })()
        };
        this.frame_14 = function() {
            exportRoot._u.updateTalk();
            this.stop();
            exportRoot._u.setFace("ch1", 6)
        };
        this.frame_15 = function() {
            exportRoot._g.m1 = "……설마,";
            exportRoot._g.m2 = "";
            exportRoot._g.m3 = "";
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            this.ch1.gotoAndPlay("nod2")
        };
        this.frame_37 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._g.m2 = "올 줄은.";
            exportRoot._u.setText();
            exportRoot._u.setFace("ch1", 1)
        };
        this.frame_85 = function() {
            exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
            exportRoot._g.m3 = "가.";
            exportRoot._u.setText();
            exportRoot._u.setFace("ch1", 2)
        };
        this.frame_93 = function() {};
        this.frame_126 = function() {
            exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
            exportRoot._g.m4 = this.m.t[exportRoot._g.idx][4];
            exportRoot._u.setText();
            exportRoot._u.setFace("ch1", 1)
        };
        this.frame_139 = function() {};
        this.frame_156 = function() {};
        this.frame_170 = function() {
            exportRoot._u.updateTalk();
            exportRoot._u.setFace("ch1", 1);
            this.ch1.gotoAndPlay("standby")
        };
        this.frame_171 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._g.m2 = "";
            exportRoot._g.m3 = "";
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            exportRoot._u.setFace("ch1", 2)
        };
        this.frame_189 = function() {
            exportRoot._u.setFace("ch1", 1)
        };
        this.frame_212 = function() {
            exportRoot._g.m2 = "둘 다 똑같다고~.";
            exportRoot._u.setText();
            exportRoot._u.setFace("ch1", 6)
        };
        this.frame_243 = function() {
            exportRoot._g.m2 =
                this.m.t[exportRoot._g.idx][2];
            exportRoot._g.m3 = "어느 쪽이든 구경만 할거고.";
            exportRoot._u.setText();
            exportRoot._u.setFace("ch1", 2)
        };
        this.frame_277 = function() {
            exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
            exportRoot._g.m4 = this.m.t[exportRoot._g.idx][4];
            exportRoot._u.setText();
            exportRoot._u.setFace("ch1", 1)
        };
        this.frame_307 = function() {
            exportRoot._u.updateTalk();
            exportRoot._u.setFace("ch1", 1)
        };
        this.frame_308 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._g.m2 = "니,";
            exportRoot._g.m3 = "";
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            exportRoot._u.setFace("ch1", 1);
            exportRoot._u.setFace("ch2", 1)
        };
        this.frame_340 = function() {
            exportRoot._g.m2 = "니, 도대체 어떤 계획이……";
            exportRoot._u.setText();
            exportRoot._u.setFace("ch2", 2);
            exportRoot.ch2.gotoAndPlay("swing")
        };
        this.frame_369 = function() {
            exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
            exportRoot._g.m3 = "생각했지만,";
            exportRoot._u.setText();
            exportRoot._u.setFace("ch2", 1)
        };
        this.frame_403 = function() {
            exportRoot._g.m3 = "생각했지만, 음~……";
            exportRoot._u.setText();
            exportRoot._u.setFace("ch2", 5);
            exportRoot.ch2.gotoAndPlay("nod")
        };
        this.frame_424 = function() {
            exportRoot._g.m3 = "생각했지만, 음~…… 뭐,";
            exportRoot._u.setText();
            exportRoot._u.setFace("ch2", 6)
        };
        this.frame_441 = function() {
            exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
            exportRoot._g.m4 = "않아……";
            exportRoot._u.setText();
            exportRoot._u.setFace("ch2", 1);
            exportRoot.ch2.gotoAndPlay("swing_on")
        };
        this.frame_463 = function() {
            exportRoot._g.m4 = "않아……랄까?";
            exportRoot._u.setText();
            exportRoot._u.setFace("ch2", 2);
            exportRoot.ch2.gotoAndPlay("swing_off")
        };
        this.frame_476 = function() {
            exportRoot._g.m4 = this.m.t[exportRoot._g.idx][4];
            exportRoot._u.setText();
            exportRoot._u.setFace("ch2", 3);
            exportRoot.ch2.gotoAndPlay("chord_nod")
        };
        this.frame_492 = function() {
            exportRoot._u.updateTalk();
            exportRoot._u.setFace("ch2", 3);
            exportRoot.ch2.gotoAndPlay("standby")
        };
        this.frame_493 = function() {
            exportRoot._g.m1 = "그치만 말야,";
            exportRoot._g.m2 = "";
            exportRoot._g.m3 = "";
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            exportRoot._u.setFace("ch2", 2);
            this.ch2.gotoAndPlay("nod")
        };
        this.frame_506 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._g.m2 = "말을 거는거야.";
            exportRoot._u.setText();
            exportRoot._u.setFace("ch2", 4)
        };
        this.frame_551 =
            function() {
                exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
                exportRoot._g.m3 = "고.";
                exportRoot._u.setText();
                exportRoot._u.setFace("ch2", 3)
            };
        this.frame_580 = function() {
            exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
            exportRoot._u.setText();
            exportRoot._u.setFace("ch2", 5)
        };
        this.frame_601 = function() {
            exportRoot._g.m4 = "맘껏 게으름 피워라!";
            exportRoot._u.setText();
            exportRoot._u.setFace("ch2", 1)
        };
        this.frame_628 = function() {
            exportRoot._g.m4 = this.m.t[exportRoot._g.idx][4];
            exportRoot._u.setText();
            exportRoot._u.setFace("ch2", 3)
        };
        this.frame_636 = function() {
            exportRoot._u.updateTalk()
        };
        this.frame_637 = function() {
            exportRoot._g.m1 = "그렇게 말하면,";
            exportRoot._g.m2 = "";
            exportRoot._g.m3 = "";
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            exportRoot._u.setFace("ch2", 2)
        };
        this.frame_651 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._g.m2 = "없지.";
            exportRoot._u.setText();
            exportRoot._u.setFace("ch2", 1)
        };
        this.frame_677 =
            function() {
                exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
                exportRoot._g.m3 = "고,";
                exportRoot._u.setText();
                exportRoot._u.setFace("ch2", 5);
                exportRoot.ch2.gotoAndPlay("nod2")
            };
        this.frame_703 = function() {
            exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
            exportRoot._g.m4 = "서,";
            exportRoot._u.setText();
            exportRoot._u.setFace("ch2", 1);
            exportRoot.ch2.gotoAndPlay("swing")
        };
        this.frame_730 = function() {
            exportRoot._g.m4 = this.m.t[exportRoot._g.idx][4];
            exportRoot._u.setText();
            exportRoot._u.setFace("ch2",
                3);
            exportRoot.ch2.gotoAndPlay("laugh_stay")
        };
        this.frame_753 = function() {
            exportRoot._u.updateTalk();
            exportRoot._u.setFace("ch2", 3)
        };
        this.frame_754 = function() {
            exportRoot._g.m1 = "뭐~,";
            exportRoot._g.m2 = "";
            exportRoot._g.m3 = "";
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            exportRoot._u.setFace("ch2", 1)
        };
        this.frame_767 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._g.m2 = "고,";
            exportRoot._u.setText();
            exportRoot._u.setFace("ch2", 2)
        };
        this.frame_781 = function() {
            exportRoot.ch2.gotoAndPlay("nod")
        };
        this.frame_803 = function() {
            exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
            exportRoot._g.m3 = "져.";
            exportRoot._u.setText();
            exportRoot._u.setFace("ch2", 1);
            exportRoot.ch2.gotoAndPlay("swing")
        };
        this.frame_823 = function() {
            exportRoot._u.setFace("ch2", 1)
        };
        this.frame_849 = function() {
            exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            exportRoot._u.setFace("ch2", 2)
        };
        this.frame_870 = function() {
            exportRoot._g.m4 =
                this.m.t[exportRoot._g.idx][4];
            exportRoot._u.setText();
            exportRoot._u.setFace("ch2", 7);
            exportRoot.ch2.gotoAndPlay("nod_double")
        };
        this.frame_889 = function() {
            exportRoot._u.updateTalk();
            exportRoot._u.setFace("ch2", 7)
        };
        this.frame_890 = function() {
            exportRoot._g.m1 = "아~,";
            exportRoot._g.m2 = "";
            exportRoot._g.m3 = "";
            exportRoot._g.m4 = "";
            exportRoot._u.setText();
            exportRoot._u.setFace("ch2", 3)
        };
        this.frame_893 = function() {
            exportRoot.ch2.gotoAndPlay("notice")
        };
        this.frame_903 = function() {
            exportRoot._g.m1 = "아~, 봐봐, 석양!";
            exportRoot._u.setText();
            exportRoot._u.setFace("ch2", 8)
        };
        this.frame_928 = function() {
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._g.m2 = "것만 같아!";
            exportRoot._u.setText();
            exportRoot._u.setFace("ch2", 1)
        };
        this.frame_956 = function() {
            exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
            exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
            exportRoot._u.setText();
            exportRoot._u.setFace("ch2", 2)
        };
        this.frame_999 = function() {
            exportRoot._g.m5 = "……프로듀서도,";
            exportRoot._u.setText("finish", 5)
        };
        this.frame_1021 = function() {
            exportRoot._g.m5 = this.m.t[exportRoot._g.idx][5];
            exportRoot._u.setText("finish", 5)
        };
        this.frame_1042 = function() {
            exportRoot._g.m6 = this.m.t[exportRoot._g.idx][6];
            exportRoot._u.setText("finish", 5)
        };
        this.frame_1046 = function() {
            exportRoot._g.end_flag = !0;
            exportRoot._g.m1 = this.m.t[exportRoot._g.idx][1];
            exportRoot._g.m2 = this.m.t[exportRoot._g.idx][2];
            exportRoot._g.m3 = this.m.t[exportRoot._g.idx][3];
            exportRoot._g.m4 = this.m.t[exportRoot._g.idx][4];
            exportRoot._g.m5 =
                this.m.t[exportRoot._g.idx][5];
            exportRoot._u.setText("finish", 5);
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1).call(this.frame_15).wait(22).call(this.frame_37).wait(48).call(this.frame_85).wait(8).call(this.frame_93).wait(33).call(this.frame_126).wait(13).call(this.frame_139).wait(17).call(this.frame_156).wait(14).call(this.frame_170).wait(1).call(this.frame_171).wait(18).call(this.frame_189).wait(23).call(this.frame_212).wait(31).call(this.frame_243).wait(34).call(this.frame_277).wait(30).call(this.frame_307).wait(1).call(this.frame_308).wait(32).call(this.frame_340).wait(29).call(this.frame_369).wait(34).call(this.frame_403).wait(21).call(this.frame_424).wait(17).call(this.frame_441).wait(22).call(this.frame_463).wait(13).call(this.frame_476).wait(16).call(this.frame_492).wait(1).call(this.frame_493).wait(13).call(this.frame_506).wait(45).call(this.frame_551).wait(29).call(this.frame_580).wait(21).call(this.frame_601).wait(27).call(this.frame_628).wait(8).call(this.frame_636).wait(1).call(this.frame_637).wait(14).call(this.frame_651).wait(26).call(this.frame_677).wait(26).call(this.frame_703).wait(27).call(this.frame_730).wait(23).call(this.frame_753).wait(1).call(this.frame_754).wait(13).call(this.frame_767).wait(14).call(this.frame_781).wait(22).call(this.frame_803).wait(20).call(this.frame_823).wait(26).call(this.frame_849).wait(21).call(this.frame_870).wait(19).call(this.frame_889).wait(1).call(this.frame_890).wait(3).call(this.frame_893).wait(10).call(this.frame_903).wait(25).call(this.frame_928).wait(28).call(this.frame_956).wait(43).call(this.frame_999).wait(22).call(this.frame_1021).wait(21).call(this.frame_1042).wait(4).call(this.frame_1046).wait(5));
        this.instance = new b.shield;
        this.instance.parent = this;
        this.instance.setTransform(120, 160);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1051));
        this.sender = new b.sender;
        this.sender.name = "sender";
        this.sender.parent = this;
        this.sender.setTransform(-100, 0);
        this.sender._off = !0;
        this.timeline.addTween(a.Tween.get(this.sender).wait(1046).to({
            _off: !1
        }, 0).wait(5));
        this.loader = new b.voice_loader_container;
        this.loader.name = "loader";
        this.loader.parent = this;
        this.loader.setTransform(190.05, 12, 1, 1, 0, 0, 0, -50.1,
            11);
        this.timeline.addTween(a.Tween.get(this.loader).wait(1051));
        this.instance_1 = new b.tie;
        this.instance_1.parent = this;
        this.instance_1.setTransform(120, 155);
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(15).to({
            alpha: .1992
        }, 3, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(1032));
        this.instance_2 = new b.pusher_next;
        this.instance_2.parent = this;
        this.instance_2.setTransform(120, 290);
        this.instance_2._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(12).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 3).wait(1036));
        this.instance_3 = new b.dark;
        this.instance_3.parent = this;
        this.instance_3.setTransform(120, 155);
        this.timeline.addTween(a.Tween.get(this.instance_3).wait(15).to({
            alpha: .1016
        }, 3).to({
            _off: !0
        }, 1).wait(1032));
        this.window_1 = new b.window_container;
        this.window_1.name = "window_1";
        this.window_1.parent = this;
        this.window_1.setTransform(2, 321.1);
        this.timeline.addTween(a.Tween.get(this.window_1).wait(15).to({
            y: 301.1
        }, 0).wait(1).to({
            regX: 132.8,
            regY: 98.8,
            x: 134.8,
            y: 398.6
        }, 0).wait(1).to({
            y: 394.65
        }, 0).wait(1).to({
                y: 388
            },
            0).wait(1).to({
            y: 378.75
        }, 0).wait(1).to({
            y: 367.25
        }, 0).wait(1).to({
            y: 354.25
        }, 0).wait(1).to({
            y: 340.85
        }, 0).wait(1).to({
            y: 328.45
        }, 0).wait(1).to({
            y: 318.45
        }, 0).wait(1).to({
            y: 312
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 2,
            y: 211
        }, 0).wait(1).to({
            regX: 132.8,
            regY: 98.8,
            x: 134.8,
            y: 310.3
        }, 0).wait(1).to({
            y: 311.9
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 2,
            y: 214
        }, 0).wait(959).to({
            regX: 132.8,
            regY: 98.8,
            x: 134.8,
            y: 313.9
        }, 0).wait(1).to({
            y: 317.75
        }, 0).wait(1).to({
            y: 325
        }, 0).wait(1).to({
            y: 336.4
        }, 0).wait(1).to({
            y: 351.7
        }, 0).wait(1).to({
                y: 368.85
            },
            0).wait(1).to({
            y: 384.15
        }, 0).wait(1).to({
            y: 395.55
        }, 0).wait(1).to({
            y: 402.8
        }, 0).wait(1).to({
            y: 406.65
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 2,
            y: 309
        }, 0).to({
            _off: !0
        }, 1).wait(52));
        this.window_2 = new b.finish_text_container;
        this.window_2.name = "window_2";
        this.window_2.parent = this;
        this.window_2.setTransform(120, 322);
        this.window_2._off = !0;
        this.timeline.addTween(a.Tween.get(this.window_2).wait(999).to({
            _off: !1
        }, 0).wait(1).to({
            regX: 16.8,
            regY: -1.3,
            x: 136.8,
            y: 320.2
        }, 0).wait(1).to({
            y: 318.5
        }, 0).wait(1).to({
            y: 315.2
        }, 0).wait(1).to({
                y: 309.85
            },
            0).wait(1).to({
            y: 302.4
        }, 0).wait(1).to({
            y: 294.05
        }, 0).wait(1).to({
            y: 287.1
        }, 0).wait(1).to({
            y: 282.55
        }, 0).wait(1).to({
            y: 280.25
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 120,
            y: 280.9
        }, 0).to({
            y: 282.9
        }, 3).wait(39));
        this.instance_4 = new b.petal_container;
        this.instance_4.parent = this;
        this.instance_4.setTransform(62.2, -84.7, 1.3542, 1.3542);
        this.instance_5 = new b.petal_container;
        this.instance_5.parent = this;
        this.instance_5.setTransform(102.95, -43.65, 2.1061, 1.9746, 0, 0, 180);
        this.instance_6 = new b.petal_container;
        this.instance_6.parent =
            this;
        this.instance_6.setTransform(173.95, -60.5, 1.2566, 1.6126);
        this.instance_7 = new b.petal_container;
        this.instance_7.parent = this;
        this.instance_7.setTransform(26.5, -31.8, 1.2566, 1.6126);
        this.instance_8 = new b.petal_container;
        this.instance_8.parent = this;
        this.instance_8.setTransform(203.6, -215.8, 3.3643, 4.0483, 0, 0, 180);
        this.timeline.addTween(a.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.instance_8
            }, {
                t: this.instance_7
            }, {
                t: this.instance_6
            }, {
                t: this.instance_5
            }, {
                t: this.instance_4
            }]
        }, 999).wait(52));
        this.glitters =
            new b.glitters;
        this.glitters.name = "glitters";
        this.glitters.parent = this;
        this.glitters._off = !0;
        this.timeline.addTween(a.Tween.get(this.glitters).wait(999).to({
            _off: !1
        }, 0).wait(52));
        this.ranko_finish_blur = new b.ranko_finish_blur;
        this.ranko_finish_blur.name = "ranko_finish_blur";
        this.ranko_finish_blur.parent = this;
        this.ranko_finish_blur._off = !0;
        this.ranko_finish_blur.filters = [new a.ColorFilter(1, 1, 1, 1, 220, 220, 220, 0)];
        this.ranko_finish_blur.cache(-2, -2, 244, 314);
        this.timeline.addTween(a.Tween.get(this.ranko_finish_blur).wait(999).to({
                _off: !1
            },
            0).wait(1).to({
            regX: 120,
            regY: 155,
            x: 120,
            y: 155,
            alpha: .9968
        }, 0).wait(1).to({
            alpha: .9867
        }, 0).wait(1).to({
            alpha: .9688
        }, 0).wait(1).to({
            alpha: .9423
        }, 0).wait(1).to({
            alpha: .906
        }, 0).wait(1).to({
            alpha: .8587
        }, 0).wait(1).to({
            alpha: .7993
        }, 0).wait(1).to({
            alpha: .7268
        }, 0).wait(1).to({
            alpha: .641
        }, 0).wait(1).to({
            alpha: .5432
        }, 0).wait(1).to({
            alpha: .4371
        }, 0).wait(1).to({
            alpha: .3301
        }, 0).wait(1).to({
            alpha: .2319
        }, 0).wait(1).to({
            alpha: .1514
        }, 0).wait(1).to({
            alpha: .0941
        }, 0).wait(1).to({
            alpha: .0612
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 0,
            alpha: .0508
        }, 0).to({
            _off: !0
        }, 1).wait(34));
        this.fns = new b.finish_1;
        this.fns.name = "fns";
        this.fns.parent = this;
        this.fns.setTransform(120, 168, 1, 1, 0, 0, 0, 120, 168);
        this.fns._off = !0;
        this.timeline.addTween(a.Tween.get(this.fns).wait(999).to({
            _off: !1
        }, 0).wait(52));
        this.instance_9 = new b.white_mask;
        this.instance_9.parent = this;
        this.instance_9.setTransform(120, 155, 1, 1, 0, 0, 0, 120, 155);
        this.instance_9.alpha = .0508;
        this.instance_9._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_9).wait(987).to({
                _off: !1
            },
            0).to({
            alpha: .8984
        }, 11).to({
            _off: !0
        }, 1).wait(52));
        this.instance_10 = new b.dark;
        this.instance_10.parent = this;
        this.instance_10.setTransform(120, 155);
        this.instance_10._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_10).wait(15).to({
            _off: !1
        }, 0).to({
            alpha: 0
        }, 3).to({
            _off: !0
        }, 1).wait(871).to({
            _off: !1,
            alpha: 1
        }, 0).to({
            alpha: 0
        }, 7).to({
            _off: !0
        }, 1).wait(153));
        this.instance_11 = new b.glitter_rise;
        this.instance_11.parent = this;
        this.instance_11.setTransform(194.25, -43.4, 1.0489, 1.0489, -2.749, 0, 0, 5.1, -.4);
        this.instance_12 =
            new b.glitter_rise;
        this.instance_12.parent = this;
        this.instance_12.setTransform(125.5, -5.3, 1.155, 1.0853, -4.8774, 0, 0, 0, 6.5);
        this.instance_12.alpha = .6992;
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance_12
            }, {
                t: this.instance_11
            }]
        }).to({
            state: []
        }, 15).wait(1036));
        this.instance_13 = new b.gliter_container;
        this.instance_13.parent = this;
        this.instance_13.setTransform(143.7, -12.25, 1.0599, 1.0599, -4.2877, 0, 0, -.1, 2.5);
        this.instance_13._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_13).wait(15).to({
                _off: !1
            },
            0).wait(1036));
        this.ch1 = new b.character1_container;
        this.ch1.name = "ch1";
        this.ch1.parent = this;
        this.ch1.setTransform(-178, 570, .5, .5);
        this.timeline.addTween(a.Tween.get(this.ch1).wait(15).to({
            regX: .1,
            regY: .1,
            scaleX: 1.0892,
            scaleY: 1.0892,
            x: 190.6,
            y: 448.9
        }, 0).wait(1).to({
            regX: -71.7,
            regY: -283,
            x: 112.35,
            y: 140.5
        }, 0).wait(1).to({
            scaleX: 1.0889,
            scaleY: 1.0889,
            x: 112.4
        }, 0).wait(1).to({
            scaleX: 1.0884,
            scaleY: 1.0884,
            x: 112.35
        }, 0).wait(1).to({
            scaleX: 1.0876,
            scaleY: 1.0876,
            y: 140.4
        }, 0).wait(1).to({
            scaleX: 1.0865,
            scaleY: 1.0865,
            y: 140.35
        }, 0).wait(1).to({
            scaleX: 1.0849,
            scaleY: 1.0849,
            y: 140.2
        }, 0).wait(1).to({
            scaleX: 1.0829,
            scaleY: 1.0829,
            y: 140.1
        }, 0).wait(1).to({
            scaleX: 1.0803,
            scaleY: 1.0803,
            y: 139.95
        }, 0).wait(1).to({
            scaleX: 1.0772,
            scaleY: 1.0772,
            y: 139.7
        }, 0).wait(1).to({
            scaleX: 1.0737,
            scaleY: 1.0737,
            y: 139.5
        }, 0).wait(1).to({
            scaleX: 1.0698,
            scaleY: 1.0698,
            y: 139.2
        }, 0).wait(1).to({
            scaleX: 1.0658,
            scaleY: 1.0658,
            y: 138.95
        }, 0).wait(1).to({
            scaleX: 1.0613,
            scaleY: 1.0613,
            x: 112.3,
            y: 138.65
        }, 0).wait(1).to({
            scaleX: 1.0562,
            scaleY: 1.0562,
            y: 138.3
        }, 0).wait(1).to({
            scaleX: 1.0503,
            scaleY: 1.0503,
            y: 137.9
        }, 0).wait(1).to({
            scaleX: 1.0437,
            scaleY: 1.0437,
            x: 112.25,
            y: 137.45
        }, 0).wait(1).to({
            scaleX: 1.0362,
            scaleY: 1.0362,
            y: 136.9
        }, 0).wait(1).to({
            scaleX: 1.0277,
            scaleY: 1.0277,
            y: 136.35
        }, 0).wait(1).to({
            scaleX: 1.0183,
            scaleY: 1.0183,
            y: 135.7
        }, 0).wait(1).to({
            scaleX: 1.0079,
            scaleY: 1.0079,
            y: 135
        }, 0).wait(1).to({
            scaleX: .9963,
            scaleY: .9963,
            x: 112.15,
            y: 134.2
        }, 0).wait(1).to({
            scaleX: .9835,
            scaleY: .9835,
            x: 112.2,
            y: 133.35
        }, 0).wait(1).to({
            scaleX: .9694,
            scaleY: .9694,
            x: 112.15,
            y: 132.4
        }, 0).wait(1).to({
            scaleX: .9539,
            scaleY: .9539,
            x: 112.1,
            y: 131.3
        }, 0).wait(1).to({
            scaleX: .9369,
            scaleY: .9369,
            y: 130.15
        }, 0).wait(1).to({
            scaleX: .9184,
            scaleY: .9184,
            x: 112.05,
            y: 128.95
        }, 0).wait(1).to({
            scaleX: .8983,
            scaleY: .8983,
            x: 112,
            y: 127.55
        }, 0).wait(1).to({
            scaleX: .8766,
            scaleY: .8766,
            x: 111.95,
            y: 126.1
        }, 0).wait(1).to({
            scaleX: .8532,
            scaleY: .8532,
            x: 111.9,
            y: 124.5
        }, 0).wait(1).to({
            scaleX: .8284,
            scaleY: .8284,
            x: 111.85,
            y: 122.8
        }, 0).wait(1).to({
            scaleX: .8024,
            scaleY: .8024,
            x: 111.8,
            y: 121.05
        }, 0).wait(1).to({
            scaleX: .7754,
            scaleY: .7754,
            x: 111.75,
            y: 119.2
        }, 0).wait(1).to({
            scaleX: .7481,
            scaleY: .7481,
            x: 111.7,
            y: 117.35
        }, 0).wait(1).to({
            scaleX: .7209,
            scaleY: .7209,
            x: 111.6,
            y: 115.5
        }, 0).wait(1).to({
            scaleX: .6945,
            scaleY: .6945,
            y: 113.75
        }, 0).wait(1).to({
            scaleX: .6697,
            scaleY: .6697,
            x: 111.55,
            y: 112.05
        }, 0).wait(1).to({
            scaleX: .6468,
            scaleY: .6468,
            x: 111.45,
            y: 110.5
        }, 0).wait(1).to({
            scaleX: .6264,
            scaleY: .6264,
            y: 109.1
        }, 0).wait(1).to({
            scaleX: .6085,
            scaleY: .6085,
            x: 111.4,
            y: 107.85
        }, 0).wait(1).to({
            scaleX: .5932,
            scaleY: .5932,
            x: 111.35,
            y: 106.8
        }, 0).wait(1).to({
            scaleX: .5805,
            scaleY: .5805,
            x: 111.4,
            y: 105.95
        }, 0).wait(1).to({
            scaleX: .5703,
            scaleY: .5703,
            x: 111.3,
            y: 105.25
        }, 0).wait(1).to({
            scaleX: .5623,
            scaleY: .5623,
            x: 111.35,
            y: 104.75
        }, 0).wait(1).to({
            scaleX: .5564,
            scaleY: .5564,
            x: 111.3,
            y: 104.35
        }, 0).wait(1).to({
            scaleX: .5524,
            scaleY: .5524,
            y: 104.1
        }, 0).wait(1).to({
            scaleX: .5501,
            scaleY: .5501,
            y: 103.95
        }, 0).wait(1).to({
            regX: .2,
            regY: .1,
            scaleX: .5493,
            scaleY: .5493,
            x: 150.75,
            y: 259.4
        }, 0).wait(110).to({
            regX: -71.7,
            regY: -283,
            scaleX: .5494,
            scaleY: .5494,
            x: 111.25,
            y: 103.85
        }, 0).wait(1).to({
            scaleX: .5497,
            scaleY: .5497,
            y: 103.9
        }, 0).wait(1).to({
                scaleX: .5502,
                scaleY: .5502
            },
            0).wait(1).to({
            scaleX: .5509,
            scaleY: .5509,
            y: 103.95
        }, 0).wait(1).to({
            scaleX: .5519,
            scaleY: .5519
        }, 0).wait(1).to({
            scaleX: .5531,
            scaleY: .5531,
            y: 104
        }, 0).wait(1).to({
            scaleX: .5546,
            scaleY: .5546,
            y: 104.05
        }, 0).wait(1).to({
            scaleX: .5563,
            scaleY: .5563,
            y: 104.1
        }, 0).wait(1).to({
            scaleX: .5584,
            scaleY: .5584,
            y: 104.2
        }, 0).wait(1).to({
            scaleX: .5607,
            scaleY: .5607,
            x: 111.3,
            y: 104.25
        }, 0).wait(1).to({
            scaleX: .5634,
            scaleY: .5634,
            y: 104.35
        }, 0).wait(1).to({
            scaleX: .5663,
            scaleY: .5663,
            y: 104.5
        }, 0).wait(1).to({
                scaleX: .5695,
                scaleY: .5695,
                y: 104.65
            },
            0).wait(1).to({
            scaleX: .573,
            scaleY: .573,
            y: 104.75
        }, 0).wait(1).to({
            scaleX: .5767,
            scaleY: .5767,
            x: 111.35,
            y: 104.9
        }, 0).wait(1).to({
            scaleX: .5806,
            scaleY: .5806,
            x: 111.3,
            y: 105.05
        }, 0).wait(1).to({
            scaleX: .5845,
            scaleY: .5845,
            x: 111.35,
            y: 105.2
        }, 0).wait(1).to({
            scaleX: .5885,
            scaleY: .5885,
            y: 105.3
        }, 0).wait(1).to({
            scaleX: .5923,
            scaleY: .5923,
            x: 111.4,
            y: 105.5
        }, 0).wait(1).to({
            scaleX: .5958,
            scaleY: .5958,
            y: 105.65
        }, 0).wait(1).to({
            scaleX: .5991,
            scaleY: .5991,
            y: 105.75
        }, 0).wait(1).to({
            scaleX: .602,
            scaleY: .602,
            y: 105.85
        }, 0).wait(1).to({
            scaleX: .6044,
            scaleY: .6044,
            y: 105.95
        }, 0).wait(1).to({
            scaleX: .6064,
            scaleY: .6064,
            y: 106
        }, 0).wait(1).to({
            scaleX: .6079,
            scaleY: .6079,
            y: 106.05
        }, 0).wait(1).to({
            scaleX: .6089,
            scaleY: .6089,
            x: 111.45,
            y: 106.1
        }, 0).wait(1).to({
            scaleX: .6096,
            scaleY: .6096,
            y: 106.15
        }, 0).wait(1).to({
            regX: .3,
            regY: .1,
            scaleX: .6098,
            scaleY: .6098,
            x: 155.35,
            y: 278.75
        }, 0).wait(109).to({
            alpha: 0
        }, 9, a.Ease.quadOut).to({
            _off: !0
        }, 1).wait(733));
        this.bg1 = new b.bg_zoom_half;
        this.bg1.name = "bg1";
        this.bg1.parent = this;
        this.bg1.setTransform(-1.95, -279.15, 1.27, 1.27);
        this.timeline.addTween(a.Tween.get(this.bg1).wait(15).to({
            scaleX: 1.0892,
            scaleY: 1.0892,
            x: -161.2,
            y: -89.8
        }, 0).wait(1).to({
            regX: 248,
            regY: 306,
            x: 108.95,
            y: 243.55
        }, 0).wait(1).to({
            scaleX: 1.0889,
            scaleY: 1.0889,
            y: 243.45
        }, 0).wait(1).to({
            scaleX: 1.0884,
            scaleY: 1.0884,
            y: 243.4
        }, 0).wait(1).to({
            scaleX: 1.0876,
            scaleY: 1.0876,
            y: 243.25
        }, 0).wait(1).to({
            scaleX: 1.0865,
            scaleY: 1.0865,
            y: 243.05
        }, 0).wait(1).to({
            scaleX: 1.0849,
            scaleY: 1.0849,
            y: 242.85
        }, 0).wait(1).to({
            scaleX: 1.0829,
            scaleY: 1.0829,
            y: 242.5
        }, 0).wait(1).to({
            scaleX: 1.0803,
            scaleY: 1.0803,
            y: 242.05
        }, 0).wait(1).to({
                scaleX: 1.0772,
                scaleY: 1.0772,
                y: 241.6
            },
            0).wait(1).to({
            scaleX: 1.0737,
            scaleY: 1.0737,
            x: 109,
            y: 241
        }, 0).wait(1).to({
            scaleX: 1.0698,
            scaleY: 1.0698,
            x: 108.95,
            y: 240.35
        }, 0).wait(1).to({
            scaleX: 1.0658,
            scaleY: 1.0658,
            x: 109,
            y: 239.7
        }, 0).wait(1).to({
            scaleX: 1.0613,
            scaleY: 1.0613,
            y: 239
        }, 0).wait(1).to({
            scaleX: 1.0562,
            scaleY: 1.0562,
            y: 238.15
        }, 0).wait(1).to({
            scaleX: 1.0503,
            scaleY: 1.0503,
            y: 237.2
        }, 0).wait(1).to({
            scaleX: 1.0437,
            scaleY: 1.0437,
            x: 109.05,
            y: 236.1
        }, 0).wait(1).to({
            scaleX: 1.0362,
            scaleY: 1.0362,
            x: 109,
            y: 234.9
        }, 0).wait(1).to({
            scaleX: 1.0277,
            scaleY: 1.0277,
            x: 109.05,
            y: 233.55
        }, 0).wait(1).to({
            scaleX: 1.0183,
            scaleY: 1.0183,
            y: 232
        }, 0).wait(1).to({
            scaleX: 1.0079,
            scaleY: 1.0079,
            y: 230.3
        }, 0).wait(1).to({
            scaleX: .9963,
            scaleY: .9963,
            y: 228.45
        }, 0).wait(1).to({
            scaleX: .9835,
            scaleY: .9835,
            x: 109.1,
            y: 226.35
        }, 0).wait(1).to({
            scaleX: .9694,
            scaleY: .9694,
            y: 224.05
        }, 0).wait(1).to({
            scaleX: .9539,
            scaleY: .9539,
            y: 221.55
        }, 0).wait(1).to({
            scaleX: .9369,
            scaleY: .9369,
            x: 109.15,
            y: 218.8
        }, 0).wait(1).to({
            scaleX: .9184,
            scaleY: .9184,
            y: 215.75
        }, 0).wait(1).to({
            scaleX: .8983,
            scaleY: .8983,
            y: 212.5
        }, 0).wait(1).to({
            scaleX: .8766,
            scaleY: .8766,
            x: 109.2,
            y: 208.95
        }, 0).wait(1).to({
            scaleX: .8532,
            scaleY: .8532,
            x: 109.25,
            y: 205.2
        }, 0).wait(1).to({
            scaleX: .8284,
            scaleY: .8284,
            y: 201.2
        }, 0).wait(1).to({
            scaleX: .8024,
            scaleY: .8024,
            x: 109.3,
            y: 196.95
        }, 0).wait(1).to({
            scaleX: .7754,
            scaleY: .7754,
            y: 192.6
        }, 0).wait(1).to({
            scaleX: .7481,
            scaleY: .7481,
            x: 109.35,
            y: 188.1
        }, 0).wait(1).to({
            scaleX: .7209,
            scaleY: .7209,
            x: 109.4,
            y: 183.7
        }, 0).wait(1).to({
            scaleX: .6945,
            scaleY: .6945,
            y: 179.45
        }, 0).wait(1).to({
            scaleX: .6697,
            scaleY: .6697,
            x: 109.45,
            y: 175.35
        }, 0).wait(1).to({
            scaleX: .6468,
            scaleY: .6468,
            y: 171.7
        }, 0).wait(1).to({
            scaleX: .6264,
            scaleY: .6264,
            x: 109.5,
            y: 168.35
        }, 0).wait(1).to({
            scaleX: .6085,
            scaleY: .6085,
            y: 165.45
        }, 0).wait(1).to({
            scaleX: .5932,
            scaleY: .5932,
            y: 162.95
        }, 0).wait(1).to({
            scaleX: .5805,
            scaleY: .5805,
            x: 109.55,
            y: 160.95
        }, 0).wait(1).to({
            scaleX: .5703,
            scaleY: .5703,
            y: 159.25
        }, 0).wait(1).to({
            scaleX: .5623,
            scaleY: .5623,
            x: 109.6,
            y: 157.95
        }, 0).wait(1).to({
            scaleX: .5564,
            scaleY: .5564,
            x: 109.55,
            y: 157
        }, 0).wait(1).to({
            scaleX: .5524,
            scaleY: .5524,
            x: 109.6,
            y: 156.3
        }, 0).wait(1).to({
            scaleX: .5501,
            scaleY: .5501,
            x: 109.55,
            y: 155.95
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            scaleX: .5493,
            scaleY: .5493,
            x: -26.7,
            y: -12.3
        }, 0).wait(110).to({
            regX: 248,
            regY: 306,
            scaleX: .5494,
            scaleY: .5494,
            x: 109.55,
            y: 155.85
        }, 0).wait(1).to({
            scaleX: .5497,
            scaleY: .5497,
            x: 109.6
        }, 0).wait(1).to({
            scaleX: .5502,
            scaleY: .5502,
            x: 109.55,
            y: 155.9
        }, 0).wait(1).to({
            scaleX: .5509,
            scaleY: .5509,
            x: 109.6,
            y: 156.05
        }, 0).wait(1).to({
            scaleX: .5519,
            scaleY: .5519,
            x: 109.55,
            y: 156.2
        }, 0).wait(1).to({
            scaleX: .5531,
            scaleY: .5531,
            y: 156.3
        }, 0).wait(1).to({
            scaleX: .5546,
            scaleY: .5546,
            y: 156.5
        }, 0).wait(1).to({
            scaleX: .5563,
            scaleY: .5563,
            y: 156.75
        }, 0).wait(1).to({
            scaleX: .5584,
            scaleY: .5584,
            y: 157
        }, 0).wait(1).to({
            scaleX: .5607,
            scaleY: .5607,
            y: 157.3
        }, 0).wait(1).to({
            scaleX: .5634,
            scaleY: .5634,
            y: 157.7
        }, 0).wait(1).to({
            scaleX: .5663,
            scaleY: .5663,
            y: 158.1
        }, 0).wait(1).to({
            scaleX: .5695,
            scaleY: .5695,
            y: 158.45
        }, 0).wait(1).to({
            scaleX: .573,
            scaleY: .573,
            y: 158.95
        }, 0).wait(1).to({
            scaleX: .5767,
            scaleY: .5767,
            y: 159.45
        }, 0).wait(1).to({
            scaleX: .5806,
            scaleY: .5806,
            y: 159.95
        }, 0).wait(1).to({
            scaleX: .5845,
            scaleY: .5845,
            y: 160.45
        }, 0).wait(1).to({
            scaleX: .5885,
            scaleY: .5885,
            y: 161
        }, 0).wait(1).to({
            scaleX: .5923,
            scaleY: .5923,
            y: 161.5
        }, 0).wait(1).to({
            scaleX: .5958,
            scaleY: .5958,
            x: 109.5,
            y: 161.95
        }, 0).wait(1).to({
            scaleX: .5991,
            scaleY: .5991,
            y: 162.4
        }, 0).wait(1).to({
            scaleX: .602,
            scaleY: .602,
            x: 109.55,
            y: 162.8
        }, 0).wait(1).to({
            scaleX: .6044,
            scaleY: .6044,
            y: 163.1
        }, 0).wait(1).to({
            scaleX: .6064,
            scaleY: .6064,
            y: 163.35
        }, 0).wait(1).to({
            scaleX: .6079,
            scaleY: .6079,
            y: 163.55
        }, 0).wait(1).to({
            scaleX: .6089,
            scaleY: .6089,
            x: 109.5,
            y: 163.7
        }, 0).wait(1).to({
            scaleX: .6096,
            scaleY: .6096,
            y: 163.75
        }, 0).wait(1).to({
            regX: -.1,
            regY: 0,
            scaleX: .6098,
            scaleY: .6098,
            x: -41.7,
            y: -22.8
        }, 0).wait(109).to({
            alpha: 0
        }, 9, a.Ease.quadOut).to({
            _off: !0
        }, 1).wait(733));
        this.ch2 = new b.character1_container;
        this.ch2.name = "ch2";
        this.ch2.parent = this;
        this.ch2.setTransform(-304.85, 278.75, .6098, .6098, 0, 0, 0, .3, .1);
        this.ch2._off = !0;
        this.timeline.addTween(a.Tween.get(this.ch2).wait(171).to({
            _off: !1
        }, 0).wait(137).to({
            regY: .2,
            scaleX: .8414,
            scaleY: .8414,
            x: 169.25,
            y: 361.65
        }, 0).wait(1).to({
            regX: -71.7,
            regY: -283,
            x: 108.65,
            y: 123.45
        }, 0).wait(1).to({
            y: 123.65
        }, 0).wait(1).to({
                y: 124
            },
            0).wait(1).to({
            y: 124.55
        }, 0).wait(1).to({
            y: 125.25
        }, 0).wait(1).to({
            y: 126.2
        }, 0).wait(1).to({
            y: 127.3
        }, 0).wait(1).to({
            y: 128.55
        }, 0).wait(1).to({
            y: 129.85
        }, 0).wait(1).to({
            y: 131.05
        }, 0).wait(1).to({
            y: 132.1
        }, 0).wait(1).to({
            y: 132.8
        }, 0).wait(1).to({
            y: 133.25
        }, 0).wait(1).to({
            regX: .3,
            regY: .2,
            x: 169.25,
            y: 371.65
        }, 0).wait(185).to({
            regX: -71.7,
            regY: -283,
            scaleX: .8412,
            scaleY: .8412,
            x: 108.65,
            y: 133.35
        }, 0).wait(1).to({
            scaleX: .8405,
            scaleY: .8405,
            y: 133.25
        }, 0).wait(1).to({
            scaleX: .8393,
            scaleY: .8393,
            x: 108.6,
            y: 133.15
        }, 0).wait(1).to({
            scaleX: .8375,
            scaleY: .8375,
            x: 108.65,
            y: 132.95
        }, 0).wait(1).to({
            scaleX: .8352,
            scaleY: .8352,
            x: 108.6,
            y: 132.7
        }, 0).wait(1).to({
            scaleX: .8324,
            scaleY: .8324,
            y: 132.35
        }, 0).wait(1).to({
            scaleX: .8289,
            scaleY: .8289,
            y: 132
        }, 0).wait(1).to({
            scaleX: .8248,
            scaleY: .8248,
            y: 131.55
        }, 0).wait(1).to({
            scaleX: .82,
            scaleY: .82,
            x: 108.55,
            y: 131
        }, 0).wait(1).to({
            scaleX: .8145,
            scaleY: .8145,
            y: 130.45
        }, 0).wait(1).to({
            scaleX: .8083,
            scaleY: .8083,
            y: 129.75
        }, 0).wait(1).to({
            scaleX: .8014,
            scaleY: .8014,
            y: 129
        }, 0).wait(1).to({
                scaleX: .7937,
                scaleY: .7937,
                x: 108.5,
                y: 128.2
            },
            0).wait(1).to({
            scaleX: .7852,
            scaleY: .7852,
            x: 108.45,
            y: 127.3
        }, 0).wait(1).to({
            scaleX: .7761,
            scaleY: .7761,
            y: 126.3
        }, 0).wait(1).to({
            scaleX: .7661,
            scaleY: .7661,
            x: 108.4,
            y: 125.25
        }, 0).wait(1).to({
            scaleX: .7555,
            scaleY: .7555,
            y: 124.1
        }, 0).wait(1).to({
            scaleX: .7443,
            scaleY: .7443,
            x: 108.35,
            y: 122.85
        }, 0).wait(1).to({
            scaleX: .7325,
            scaleY: .7325,
            y: 121.6
        }, 0).wait(1).to({
            scaleX: .7203,
            scaleY: .7203,
            x: 108.25,
            y: 120.25
        }, 0).wait(1).to({
            scaleX: .7079,
            scaleY: .7079,
            y: 118.95
        }, 0).wait(1).to({
            scaleX: .6953,
            scaleY: .6953,
            x: 108.2,
            y: 117.55
        }, 0).wait(1).to({
            scaleX: .6827,
            scaleY: .6827,
            x: 108.15,
            y: 116.2
        }, 0).wait(1).to({
            scaleX: .6705,
            scaleY: .6705,
            y: 114.9
        }, 0).wait(1).to({
            scaleX: .6587,
            scaleY: .6587,
            x: 108.05,
            y: 113.65
        }, 0).wait(1).to({
            scaleX: .6477,
            scaleY: .6477,
            y: 112.4
        }, 0).wait(1).to({
            scaleX: .6374,
            scaleY: .6374,
            x: 108,
            y: 111.25
        }, 0).wait(1).to({
            scaleX: .6281,
            scaleY: .6281,
            x: 107.95,
            y: 110.3
        }, 0).wait(1).to({
            scaleX: .6198,
            scaleY: .6198,
            y: 109.4
        }, 0).wait(1).to({
            scaleX: .6127,
            scaleY: .6127,
            x: 107.9,
            y: 108.6
        }, 0).wait(1).to({
            scaleX: .6067,
            scaleY: .6067,
            y: 107.95
        }, 0).wait(1).to({
            scaleX: .6019,
            scaleY: .6019,
            y: 107.45
        }, 0).wait(1).to({
            scaleX: .5982,
            scaleY: .5982,
            y: 107.05
        }, 0).wait(1).to({
            scaleX: .5956,
            scaleY: .5956,
            y: 106.8
        }, 0).wait(1).to({
            scaleX: .5941,
            scaleY: .5941,
            x: 107.85,
            y: 106.6
        }, 0).wait(1).to({
            regX: .4,
            regY: .3,
            scaleX: .5936,
            scaleY: .5936,
            x: 150.65,
            y: 274.75
        }, 0).wait(95).to({
            regX: 0,
            regY: 0,
            x: 150.4,
            y: 274.55
        }, 0).wait(1).to({
            regX: -71.7,
            regY: -283,
            scaleX: .5938,
            scaleY: .5938,
            x: 107.8,
            y: 106.55
        }, 0).wait(1).to({
            scaleX: .5945,
            scaleY: .5945,
            y: 106.65
        }, 0).wait(1).to({
            scaleX: .5957,
            scaleY: .5957,
            x: 107.85,
            y: 106.75
        }, 0).wait(1).to({
            scaleX: .5974,
            scaleY: .5974,
            x: 107.8,
            y: 106.95
        }, 0).wait(1).to({
            scaleX: .5996,
            scaleY: .5996,
            x: 107.85,
            y: 107.15
        }, 0).wait(1).to({
            scaleX: .6024,
            scaleY: .6024,
            y: 107.45
        }, 0).wait(1).to({
            scaleX: .6059,
            scaleY: .6059,
            y: 107.85
        }, 0).wait(1).to({
            scaleX: .6099,
            scaleY: .6099,
            x: 107.9,
            y: 108.25
        }, 0).wait(1).to({
            scaleX: .6146,
            scaleY: .6146,
            x: 107.95,
            y: 108.75
        }, 0).wait(1).to({
            scaleX: .62,
            scaleY: .62,
            y: 109.35
        }, 0).wait(1).to({
            scaleX: .6262,
            scaleY: .6262,
            x: 108,
            y: 109.95
        }, 0).wait(1).to({
            scaleX: .633,
            scaleY: .633,
            y: 110.7
        }, 0).wait(1).to({
            scaleX: .6406,
            scaleY: .6406,
            x: 108.05,
            y: 111.45
        }, 0).wait(1).to({
            scaleX: .6488,
            scaleY: .6488,
            x: 108.1,
            y: 112.4
        }, 0).wait(1).to({
            scaleX: .6578,
            scaleY: .6578,
            x: 108.15,
            y: 113.3
        }, 0).wait(1).to({
            scaleX: .6673,
            scaleY: .6673,
            x: 108.2,
            y: 114.35
        }, 0).wait(1).to({
            scaleX: .6774,
            scaleY: .6774,
            x: 108.25,
            y: 115.4
        }, 0).wait(1).to({
            scaleX: .6879,
            scaleY: .6879,
            x: 108.3,
            y: 116.5
        }, 0).wait(1).to({
            scaleX: .6986,
            scaleY: .6986,
            x: 108.35,
            y: 117.6
        }, 0).wait(1).to({
            scaleX: .7093,
            scaleY: .7093,
            x: 108.4,
            y: 118.75
        }, 0).wait(1).to({
            scaleX: .7199,
            scaleY: .7199,
            x: 108.5,
            y: 119.85
        }, 0).wait(1).to({
            scaleX: .7301,
            scaleY: .7301,
            y: 120.95
        }, 0).wait(1).to({
            scaleX: .7397,
            scaleY: .7397,
            x: 108.55,
            y: 121.95
        }, 0).wait(1).to({
            scaleX: .7485,
            scaleY: .7485,
            x: 108.6,
            y: 122.85
        }, 0).wait(1).to({
            scaleX: .7564,
            scaleY: .7564,
            x: 108.65,
            y: 123.75
        }, 0).wait(1).to({
            scaleX: .7633,
            scaleY: .7633,
            y: 124.45
        }, 0).wait(1).to({
            scaleX: .7691,
            scaleY: .7691,
            x: 108.7,
            y: 125.05
        }, 0).wait(1).to({
            scaleX: .7737,
            scaleY: .7737,
            y: 125.55
        }, 0).wait(1).to({
            scaleX: .7773,
            scaleY: .7773,
            x: 108.75,
            y: 125.9
        }, 0).wait(1).to({
            scaleX: .7798,
            scaleY: .7798,
            x: 108.8,
            y: 126.2
        }, 0).wait(1).to({
            scaleX: .7813,
            scaleY: .7813,
            y: 126.35
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            scaleX: .7817,
            scaleY: .7817,
            x: 164.85,
            y: 347.65
        }, 0).wait(85).to({
            regX: .5,
            regY: .5,
            x: 165.25,
            y: 348.05
        }, 0).wait(1).to({
            regX: -71.7,
            regY: -283,
            scaleX: .7819,
            scaleY: .7819,
            x: 108.8,
            y: 126.4
        }, 0).wait(1).to({
            scaleX: .7824,
            scaleY: .7824,
            x: 108.75,
            y: 126.45
        }, 0).wait(1).to({
            scaleX: .7832,
            scaleY: .7832,
            x: 108.8
        }, 0).wait(1).to({
            scaleX: .7843,
            scaleY: .7843,
            x: 108.75,
            y: 126.55
        }, 0).wait(1).to({
            scaleX: .7859,
            scaleY: .7859,
            x: 108.8,
            y: 126.6
        }, 0).wait(1).to({
                scaleX: .7879,
                scaleY: .7879,
                y: 126.7
            },
            0).wait(1).to({
            scaleX: .7903,
            scaleY: .7903,
            y: 126.8
        }, 0).wait(1).to({
            scaleX: .7932,
            scaleY: .7932,
            x: 108.85,
            y: 126.95
        }, 0).wait(1).to({
            scaleX: .7965,
            scaleY: .7965,
            y: 127.1
        }, 0).wait(1).to({
            scaleX: .8004,
            scaleY: .8004,
            x: 108.8,
            y: 127.3
        }, 0).wait(1).to({
            scaleX: .8047,
            scaleY: .8047,
            x: 108.85,
            y: 127.5
        }, 0).wait(1).to({
            scaleX: .8094,
            scaleY: .8094,
            y: 127.7
        }, 0).wait(1).to({
            scaleX: .8145,
            scaleY: .8145,
            x: 108.9,
            y: 127.95
        }, 0).wait(1).to({
            scaleX: .8198,
            scaleY: .8198,
            x: 108.85,
            y: 128.2
        }, 0).wait(1).to({
                scaleX: .8252,
                scaleY: .8252,
                x: 108.95,
                y: 128.45
            },
            0).wait(1).to({
            scaleX: .8305,
            scaleY: .8305,
            x: 108.9,
            y: 128.7
        }, 0).wait(1).to({
            scaleX: .8354,
            scaleY: .8354,
            x: 108.95,
            y: 128.95
        }, 0).wait(1).to({
            scaleX: .8399,
            scaleY: .8399,
            x: 109,
            y: 129.15
        }, 0).wait(1).to({
            scaleX: .8438,
            scaleY: .8438,
            x: 108.95,
            y: 129.3
        }, 0).wait(1).to({
            scaleX: .8469,
            scaleY: .8469,
            x: 109,
            y: 129.45
        }, 0).wait(1).to({
            scaleX: .8494,
            scaleY: .8494,
            y: 129.6
        }, 0).wait(1).to({
            scaleX: .8511,
            scaleY: .8511,
            y: 129.7
        }, 0).wait(1).to({
            scaleX: .8521,
            scaleY: .8521
        }, 0).wait(1).to({
                regX: .6,
                regY: .6,
                scaleX: .8524,
                scaleY: .8524,
                x: 170.55,
                y: 371.4
            },
            0).wait(112).to({
            regX: .8,
            regY: .8,
            scaleX: .5742,
            scaleY: .5742,
            x: 151.4,
            y: 271.45
        }, 0).to({
            _off: !0
        }, 109).wait(52));
        this.bg1_1 = new b.bg_zoom_half;
        this.bg1_1.name = "bg1_1";
        this.bg1_1.parent = this;
        this.bg1_1.setTransform(-501.9, -22.8, .6098, .6098, 0, 0, 0, -.1, 0);
        this.bg1_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.bg1_1).wait(171).to({
            _off: !1
        }, 0).wait(137).to({
            scaleX: .8414,
            scaleY: .8414,
            x: -102.65,
            y: -54.55
        }, 0).wait(1).to({
            regX: 248,
            regY: 306,
            x: 106.1,
            y: 203.05
        }, 0).wait(1).to({
            y: 203.25
        }, 0).wait(1).to({
            y: 203.6
        }, 0).wait(1).to({
                y: 204.15
            },
            0).wait(1).to({
            y: 204.85
        }, 0).wait(1).to({
            y: 205.8
        }, 0).wait(1).to({
            y: 206.9
        }, 0).wait(1).to({
            y: 208.15
        }, 0).wait(1).to({
            y: 209.45
        }, 0).wait(1).to({
            y: 210.65
        }, 0).wait(1).to({
            y: 211.7
        }, 0).wait(1).to({
            y: 212.4
        }, 0).wait(1).to({
            y: 212.85
        }, 0).wait(1).to({
            regX: -.1,
            regY: 0,
            x: -102.65,
            y: -44.55
        }, 0).wait(185).to({
            regX: 248,
            regY: 306,
            scaleX: .8412,
            scaleY: .8412,
            x: 106.15,
            y: 212.9
        }, 0).wait(1).to({
            scaleX: .8405,
            scaleY: .8405,
            y: 212.75
        }, 0).wait(1).to({
            scaleX: .8393,
            scaleY: .8393,
            y: 212.5
        }, 0).wait(1).to({
                scaleX: .8375,
                scaleY: .8375,
                y: 212.2
            },
            0).wait(1).to({
            scaleX: .8352,
            scaleY: .8352,
            y: 211.7
        }, 0).wait(1).to({
            scaleX: .8324,
            scaleY: .8324,
            y: 211.1
        }, 0).wait(1).to({
            scaleX: .8289,
            scaleY: .8289,
            y: 210.4
        }, 0).wait(1).to({
            scaleX: .8248,
            scaleY: .8248,
            y: 209.55
        }, 0).wait(1).to({
            scaleX: .82,
            scaleY: .82,
            y: 208.6
        }, 0).wait(1).to({
            scaleX: .8145,
            scaleY: .8145,
            y: 207.5
        }, 0).wait(1).to({
            scaleX: .8083,
            scaleY: .8083,
            y: 206.25
        }, 0).wait(1).to({
            scaleX: .8014,
            scaleY: .8014,
            y: 204.8
        }, 0).wait(1).to({
            scaleX: .7937,
            scaleY: .7937,
            y: 203.25
        }, 0).wait(1).to({
            scaleX: .7852,
            scaleY: .7852,
            y: 201.6
        }, 0).wait(1).to({
            scaleX: .7761,
            scaleY: .7761,
            y: 199.7
        }, 0).wait(1).to({
            scaleX: .7661,
            scaleY: .7661,
            y: 197.7
        }, 0).wait(1).to({
            scaleX: .7555,
            scaleY: .7555,
            x: 106.1,
            y: 195.55
        }, 0).wait(1).to({
            scaleX: .7443,
            scaleY: .7443,
            x: 106.15,
            y: 193.25
        }, 0).wait(1).to({
            scaleX: .7325,
            scaleY: .7325,
            x: 106.1,
            y: 190.85
        }, 0).wait(1).to({
            scaleX: .7203,
            scaleY: .7203,
            x: 106.15,
            y: 188.4
        }, 0).wait(1).to({
            scaleX: .7079,
            scaleY: .7079,
            y: 185.85
        }, 0).wait(1).to({
            scaleX: .6953,
            scaleY: .6953,
            x: 106.1,
            y: 183.3
        }, 0).wait(1).to({
            scaleX: .6827,
            scaleY: .6827,
            y: 180.75
        }, 0).wait(1).to({
            scaleX: .6705,
            scaleY: .6705,
            x: 106.15,
            y: 178.3
        }, 0).wait(1).to({
            scaleX: .6587,
            scaleY: .6587,
            x: 106.1,
            y: 175.9
        }, 0).wait(1).to({
            scaleX: .6477,
            scaleY: .6477,
            y: 173.7
        }, 0).wait(1).to({
            scaleX: .6374,
            scaleY: .6374,
            y: 171.6
        }, 0).wait(1).to({
            scaleX: .6281,
            scaleY: .6281,
            y: 169.7
        }, 0).wait(1).to({
            scaleX: .6198,
            scaleY: .6198,
            y: 168
        }, 0).wait(1).to({
            scaleX: .6127,
            scaleY: .6127,
            y: 166.6
        }, 0).wait(1).to({
            scaleX: .6067,
            scaleY: .6067,
            y: 165.35
        }, 0).wait(1).to({
            scaleX: .6019,
            scaleY: .6019,
            y: 164.35
        }, 0).wait(1).to({
            scaleX: .5982,
            scaleY: .5982,
            y: 163.65
        }, 0).wait(1).to({
            scaleX: .5956,
            scaleY: .5956,
            y: 163.1
        }, 0).wait(1).to({
            scaleX: .5941,
            scaleY: .5941,
            y: 162.8
        }, 0).wait(1).to({
            regX: -.1,
            regY: -.1,
            scaleX: .5936,
            scaleY: .5936,
            x: -41.15,
            y: -18.95
        }, 0).wait(95).to({
            regX: 0,
            regY: 0,
            x: -41.1,
            y: -18.9
        }, 0).wait(1).to({
            regX: 248,
            regY: 306,
            scaleX: .5938,
            scaleY: .5938,
            x: 106.1,
            y: 162.8
        }, 0).wait(1).to({
            scaleX: .5945,
            scaleY: .5945,
            x: 106.15,
            y: 162.95
        }, 0).wait(1).to({
            scaleX: .5957,
            scaleY: .5957,
            y: 163.2
        }, 0).wait(1).to({
            scaleX: .5974,
            scaleY: .5974,
            y: 163.55
        }, 0).wait(1).to({
            scaleX: .5996,
            scaleY: .5996,
            y: 164
        }, 0).wait(1).to({
            scaleX: .6024,
            scaleY: .6024,
            y: 164.55
        }, 0).wait(1).to({
            scaleX: .6059,
            scaleY: .6059,
            y: 165.25
        }, 0).wait(1).to({
            scaleX: .6099,
            scaleY: .6099,
            x: 106.2,
            y: 166.05
        }, 0).wait(1).to({
            scaleX: .6146,
            scaleY: .6146,
            y: 166.95
        }, 0).wait(1).to({
            scaleX: .62,
            scaleY: .62,
            y: 168.1
        }, 0).wait(1).to({
            scaleX: .6262,
            scaleY: .6262,
            x: 106.25,
            y: 169.3
        }, 0).wait(1).to({
            scaleX: .633,
            scaleY: .633,
            y: 170.7
        }, 0).wait(1).to({
            scaleX: .6406,
            scaleY: .6406,
            y: 172.2
        }, 0).wait(1).to({
            scaleX: .6488,
            scaleY: .6488,
            x: 106.3,
            y: 173.9
        }, 0).wait(1).to({
                scaleX: .6578,
                scaleY: .6578,
                x: 106.35,
                y: 175.7
            },
            0).wait(1).to({
            scaleX: .6673,
            scaleY: .6673,
            y: 177.6
        }, 0).wait(1).to({
            scaleX: .6774,
            scaleY: .6774,
            x: 106.4,
            y: 179.65
        }, 0).wait(1).to({
            scaleX: .6879,
            scaleY: .6879,
            y: 181.75
        }, 0).wait(1).to({
            scaleX: .6986,
            scaleY: .6986,
            x: 106.45,
            y: 183.9
        }, 0).wait(1).to({
            scaleX: .7093,
            scaleY: .7093,
            y: 186.05
        }, 0).wait(1).to({
            scaleX: .7199,
            scaleY: .7199,
            x: 106.5,
            y: 188.2
        }, 0).wait(1).to({
            scaleX: .7301,
            scaleY: .7301,
            x: 106.55,
            y: 190.25
        }, 0).wait(1).to({
            scaleX: .7397,
            scaleY: .7397,
            x: 106.6,
            y: 192.2
        }, 0).wait(1).to({
            scaleX: .7485,
            scaleY: .7485,
            y: 193.95
        }, 0).wait(1).to({
            scaleX: .7564,
            scaleY: .7564,
            x: 106.65,
            y: 195.55
        }, 0).wait(1).to({
            scaleX: .7633,
            scaleY: .7633,
            y: 196.9
        }, 0).wait(1).to({
            scaleX: .7691,
            scaleY: .7691,
            x: 106.7,
            y: 198.1
        }, 0).wait(1).to({
            scaleX: .7737,
            scaleY: .7737,
            y: 199
        }, 0).wait(1).to({
            scaleX: .7773,
            scaleY: .7773,
            x: 106.65,
            y: 199.75
        }, 0).wait(1).to({
            scaleX: .7798,
            scaleY: .7798,
            x: 106.7,
            y: 200.25
        }, 0).wait(1).to({
            scaleX: .7813,
            scaleY: .7813,
            y: 200.5
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            scaleX: .7817,
            scaleY: .7817,
            x: -87.2,
            y: -38.6
        }, 0).wait(85).to({
            regX: -.2,
            regY: -.3,
            x: -87.35,
            y: -38.85
        }, 0).wait(1).to({
            regX: 248,
            regY: 306,
            scaleX: .7819,
            scaleY: .7819,
            x: 106.7,
            y: 200.65
        }, 0).wait(1).to({
            scaleX: .7824,
            scaleY: .7824,
            x: 106.65,
            y: 200.7
        }, 0).wait(1).to({
            scaleX: .7832,
            scaleY: .7832,
            y: 200.85
        }, 0).wait(1).to({
            scaleX: .7843,
            scaleY: .7843,
            x: 106.7,
            y: 201
        }, 0).wait(1).to({
            scaleX: .7859,
            scaleY: .7859,
            y: 201.25
        }, 0).wait(1).to({
            scaleX: .7879,
            scaleY: .7879,
            y: 201.5
        }, 0).wait(1).to({
            scaleX: .7903,
            scaleY: .7903,
            y: 201.8
        }, 0).wait(1).to({
            scaleX: .7932,
            scaleY: .7932,
            y: 202.25
        }, 0).wait(1).to({
            scaleX: .7965,
            scaleY: .7965,
            y: 202.75
        }, 0).wait(1).to({
            scaleX: .8004,
            scaleY: .8004,
            y: 203.25
        }, 0).wait(1).to({
            scaleX: .8047,
            scaleY: .8047,
            y: 203.9
        }, 0).wait(1).to({
            scaleX: .8094,
            scaleY: .8094,
            y: 204.6
        }, 0).wait(1).to({
            scaleX: .8145,
            scaleY: .8145,
            y: 205.3
        }, 0).wait(1).to({
            scaleX: .8198,
            scaleY: .8198,
            y: 206.05
        }, 0).wait(1).to({
            scaleX: .8252,
            scaleY: .8252,
            y: 206.8
        }, 0).wait(1).to({
            scaleX: .8305,
            scaleY: .8305,
            y: 207.55
        }, 0).wait(1).to({
            scaleX: .8354,
            scaleY: .8354,
            x: 106.75,
            y: 208.25
        }, 0).wait(1).to({
            scaleX: .8399,
            scaleY: .8399,
            x: 106.7,
            y: 208.9
        }, 0).wait(1).to({
            scaleX: .8438,
            scaleY: .8438,
            y: 209.45
        }, 0).wait(1).to({
            scaleX: .8469,
            scaleY: .8469,
            y: 209.85
        }, 0).wait(1).to({
            scaleX: .8494,
            scaleY: .8494,
            y: 210.2
        }, 0).wait(1).to({
            scaleX: .8511,
            scaleY: .8511,
            y: 210.45
        }, 0).wait(1).to({
            scaleX: .8521,
            scaleY: .8521,
            y: 210.65
        }, 0).wait(1).to({
            regX: -.2,
            regY: -.3,
            scaleX: .8524,
            scaleY: .8524,
            x: -104.85,
            y: -50.4
        }, 0).wait(112).to({
            regX: -.4,
            regY: -.5,
            scaleX: .5742,
            scaleY: .5742,
            x: -34.1,
            y: -12.75
        }, 0).to({
            _off: !0
        }, 109).wait(52));
        this.toggle_btn = new b.btn_window;
        this.toggle_btn.name = "toggle_btn";
        this.toggle_btn.parent = this;
        this.toggle_btn.setTransform(200, 200);
        this.timeline.addTween(a.Tween.get(this.toggle_btn).to({
                _off: !0
            },
            987).wait(64));
        this.stage_btn = new b.button;
        this.stage_btn.name = "stage_btn";
        this.stage_btn.parent = this;
        this.stage_btn.setTransform(120, 155);
        this.timeline.addTween(a.Tween.get(this.stage_btn).to({
            _off: !0
        }, 999).wait(47).to({
            _off: !1
        }, 0).wait(5))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-381.9, -720, 1009.9, 1383);
    b.properties = {
        id: "_407_4",
        width: 240,
        height: 310,
        fps: 12,
        color: "#FFFFFF",
        opacity: 1,
        manifest: [{
            src: "images/bg.jpg",
            id: "_407_4_bg"
        }, {
            src: "images/ch_base.png",
            id: "_407_4_ch_base"
        }, {
            src: "images/ch_face2.png",
            id: "_407_4_ch_face2"
        }, {
            src: "images/ch_face3.png",
            id: "_407_4_ch_face3"
        }, {
            src: "images/ch_face4.png",
            id: "_407_4_ch_face4"
        }, {
            src: "images/ch_face6.png",
            id: "_407_4_ch_face6"
        }, {
            src: "images/finish.jpg",
            id: "_407_4_finish"
        }, {
            src: "images/finish_blur.jpg",
            id: "_407_4_finish_blur"
        }, {
            src: "images/tie_fp.png",
            id: "_407_4_tie_fp"
        }, {
            src: "images/tie_sp.png",
            id: "_407_4_tie_sp"
        }],
        preloads: []
    };
    (b.Stage = function(a) {
        createjs.Stage.call(this, a)
    }).prototype = c = new createjs.Stage;
    c.setAutoPlay = function(a) {
        this.tickEnabled = a
    };
    c.play = function() {
        this.tickEnabled = !0;
        this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())
    };
    c.stop = function(a) {
        a && this.seek(a);
        this.tickEnabled = !1
    };
    c.seek = function(a) {
        this.tickEnabled = !0;
        this.getChildAt(0).gotoAndStop(b.properties.fps * a / 1E3)
    };
    c.getDuration = function() {
        return this.getChildAt(0).totalFrames / b.properties.fps * 1E3
    };
    c.getTimelinePosition = function() {
        return this.getChildAt(0).currentFrame /
            b.properties.fps * 1E3
    };
    g.bootcompsLoaded = g.bootcompsLoaded || [];
    g.bootstrapListeners || (g.bootstrapListeners = []);
    g.bootstrapCallback = function(a) {
        g.bootstrapListeners.push(a);
        if (0 < g.bootcompsLoaded.length)
            for (var b = 0; b < g.bootcompsLoaded.length; ++b) a(g.bootcompsLoaded[b])
    };
    g.compositions = g.compositions || {};
    g.compositions._407_4 = {
        getStage: function() {
            return exportRoot.getStage()
        },
        getLibrary: function() {
            return b
        },
        getSpriteSheet: function() {
            return n
        },
        getImages: function() {
            return k
        }
    };
    g.compositionLoaded = function(a) {
        g.bootcompsLoaded.push(a);
        for (var b = 0; b < g.bootstrapListeners.length; b++) g.bootstrapListeners[b](a)
    };
    g.getComposition = function(a) {
        return g.compositions[a]
    }
})(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;
