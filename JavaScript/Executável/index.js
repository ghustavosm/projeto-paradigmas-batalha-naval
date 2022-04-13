(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.background = function() {
	this.initialize(img.background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,900);


(lib.Camada4 = function() {
	this.initialize(img.Camada4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,419,419);


(lib.Camada7 = function() {
	this.initialize(img.Camada7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,419,419);


(lib.Camada8 = function() {
	this.initialize(img.Camada8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,769);


(lib.com_som = function() {
	this.initialize(img.com_som);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,51);


(lib.contratorpedeiro3 = function() {
	this.initialize(img.contratorpedeiro3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,515,81);


(lib.explosao = function() {
	this.initialize(img.explosao);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,42);


(lib.fumaca = function() {
	this.initialize(img.fumaca);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,42);


(lib.logogrande = function() {
	this.initialize(img.logogrande);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,983,273);


(lib.logouepbcomputacao = function() {
	this.initialize(img.logouepbcomputacao);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,788,236);


(lib.naviotanque1 = function() {
	this.initialize(img.naviotanque1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,516,95);


(lib.portaavioes = function() {
	this.initialize(img.portaavioes);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,518,121);


(lib.sem_som = function() {
	this.initialize(img.sem_som);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,51);


(lib.submarino3 = function() {
	this.initialize(img.submarino3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,517,160);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.an_TextInput = function(options) {
	this.initialize();
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.m_submarino = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.instance = new lib.submarino3();
	this.instance.setTransform(0,8,0.1624,0.1624);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1).p("AmjjRINHAAIAAGjItHAAg");
	this.shape.setTransform(42,21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,51,51,0)").s().p("AmjDSIAAmjINHAAIAAGjg");
	this.shape_1.setTransform(42,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.m_submarino, new cjs.Rectangle(-1,-1,86,44), null);


(lib.m_selecao = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,153,0.247)").s().p("AjRDSIAAmjIGjAAIAAGjg");
	this.shape.setTransform(21,21);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.m_selecao, new cjs.Rectangle(0,0,42,42), null);


(lib.m_porta_avioes = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.instance = new lib.portaavioes();
	this.instance.setTransform(1,0,0.4021,0.3547);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1).p("AwZjRMAgzAAAIAAGjMggzAAAg");
	this.shape.setTransform(105,21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,51,51,0)").s().p("AwZDSIAAmjMAgzAAAIAAGjg");
	this.shape_1.setTransform(105,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.m_porta_avioes, new cjs.Rectangle(-1,-1,212,44), null);


(lib.m_navio_tanque = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.instance = new lib.naviotanque1();
	this.instance.setTransform(0,5,0.3256,0.3256);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1).p("AtHjRIaPAAIAAGjI6PAAg");
	this.shape.setTransform(84,21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,51,51,0)").s().p("AtHDSIAAmjIaPAAIAAGjg");
	this.shape_1.setTransform(84,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.m_navio_tanque, new cjs.Rectangle(-1,-1,170,44), null);


(lib.m_fumaca = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.instance = new lib.fumaca();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.m_fumaca, new cjs.Rectangle(0,0,42,42), null);


(lib.m_explosao = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.instance = new lib.explosao();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.m_explosao, new cjs.Rectangle(0,0,42,42), null);


(lib.m_display_jogador = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.text = new cjs.Text("Unidades Restantes:", "13px 'Ubuntu'", "#FFFFFF");
	this.text.lineHeight = 17;
	this.text.lineWidth = 141;
	this.text.parent = this;
	this.text.setTransform(2.2972,119.4,1.1214,1.1214);

	this.unidadesRestantes = new cjs.Text("", "13px 'Ubuntu'", "#FFFFFF");
	this.unidadesRestantes.name = "unidadesRestantes";
	this.unidadesRestantes.textAlign = "right";
	this.unidadesRestantes.lineHeight = 17;
	this.unidadesRestantes.lineWidth = 15;
	this.unidadesRestantes.parent = this;
	this.unidadesRestantes.setTransform(182.2777,119.4,1.1214,1.1214);

	this.text_1 = new cjs.Text("Acertos:", "13px 'Ubuntu'", "#FFFFFF");
	this.text_1.lineHeight = 17;
	this.text_1.lineWidth = 141;
	this.text_1.parent = this;
	this.text_1.setTransform(2.2972,101.1,1.1214,1.1214);

	this.text_2 = new cjs.Text("Erros:", "13px 'Ubuntu'", "#FFFFFF");
	this.text_2.lineHeight = 17;
	this.text_2.lineWidth = 141;
	this.text_2.parent = this;
	this.text_2.setTransform(2.3032,82.6,1.1214,1.1214);

	this.text_3 = new cjs.Text("Total Disparos:", "13px 'Ubuntu'", "#FFFFFF");
	this.text_3.lineHeight = 17;
	this.text_3.lineWidth = 141;
	this.text_3.parent = this;
	this.text_3.setTransform(2.3032,64.1,1.1214,1.1214);

	this.text_4 = new cjs.Text("Disparos Especiais:", "13px 'Ubuntu'", "#FFFFFF");
	this.text_4.lineHeight = 17;
	this.text_4.lineWidth = 141;
	this.text_4.parent = this;
	this.text_4.setTransform(2.3032,45.3,1.1214,1.1214);

	this.text_5 = new cjs.Text("Disparos Rodada:", "13px 'Ubuntu'", "#FFFFFF");
	this.text_5.lineHeight = 17;
	this.text_5.lineWidth = 141;
	this.text_5.parent = this;
	this.text_5.setTransform(2.3032,26.8,1.1214,1.1214);

	this.acertos = new cjs.Text("", "13px 'Ubuntu'", "#FFFFFF");
	this.acertos.name = "acertos";
	this.acertos.textAlign = "right";
	this.acertos.lineHeight = 17;
	this.acertos.lineWidth = 15;
	this.acertos.parent = this;
	this.acertos.setTransform(182.2777,101.1,1.1214,1.1214);

	this.disparosRodada = new cjs.Text("", "13px 'Ubuntu'", "#FFFFFF");
	this.disparosRodada.name = "disparosRodada";
	this.disparosRodada.textAlign = "right";
	this.disparosRodada.lineHeight = 17;
	this.disparosRodada.lineWidth = 15;
	this.disparosRodada.parent = this;
	this.disparosRodada.setTransform(182.2777,26.8,1.1214,1.1214);

	this.disparosEspeciais = new cjs.Text("", "13px 'Ubuntu'", "#FFFFFF");
	this.disparosEspeciais.name = "disparosEspeciais";
	this.disparosEspeciais.textAlign = "right";
	this.disparosEspeciais.lineHeight = 17;
	this.disparosEspeciais.lineWidth = 15;
	this.disparosEspeciais.parent = this;
	this.disparosEspeciais.setTransform(182.2777,45.3,1.1214,1.1214);

	this.totalDisparos = new cjs.Text("", "13px 'Ubuntu'", "#FFFFFF");
	this.totalDisparos.name = "totalDisparos";
	this.totalDisparos.textAlign = "right";
	this.totalDisparos.lineHeight = 17;
	this.totalDisparos.lineWidth = 15;
	this.totalDisparos.parent = this;
	this.totalDisparos.setTransform(182.2777,64.1,1.1214,1.1214);

	this.erros = new cjs.Text("", "13px 'Ubuntu'", "#FFFFFF");
	this.erros.name = "erros";
	this.erros.textAlign = "right";
	this.erros.lineHeight = 17;
	this.erros.lineWidth = 15;
	this.erros.parent = this;
	this.erros.setTransform(182.2777,82.1,1.1214,1.1214);

	this.nome = new cjs.Text("Jogador", "bold 16px 'Ubuntu'", "#FFFFFF");
	this.nome.name = "nome";
	this.nome.lineHeight = 20;
	this.nome.lineWidth = 161;
	this.nome.parent = this;
	this.nome.setTransform(2.2307,2.25,1.1214,1.1214);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nome},{t:this.erros},{t:this.totalDisparos},{t:this.disparosEspeciais},{t:this.disparosRodada},{t:this.acertos},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.unidadesRestantes},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.m_display_jogador, new cjs.Rectangle(0,0,184.5,138), null);


(lib.m_coordenada = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.texto = new cjs.Text("", "bold 16px 'Ubuntu'", "#FFFFFF");
	this.texto.name = "texto";
	this.texto.textAlign = "center";
	this.texto.lineHeight = 20;
	this.texto.lineWidth = 19;
	this.texto.parent = this;
	this.texto.setTransform(21,14.05);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(17,17,17,0.008)").ss(1,1,1).p("AjRjRIGjAAIAAGjImjAAg");
	this.shape.setTransform(21,21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0)").s().p("AjRDSIAAmjIGjAAIAAGjg");
	this.shape_1.setTransform(21,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.texto}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.m_coordenada, new cjs.Rectangle(-1,-1,44,44), null);


(lib.m_contratorpedeiro = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.instance = new lib.contratorpedeiro3();
	this.instance.setTransform(0,11,0.2447,0.2447);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1).p("Ap1jRITrAAIAAGjIzrAAg");
	this.shape.setTransform(63,21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,51,51,0)").s().p("Ap1DSIAAmjITrAAIAAGjg");
	this.shape_1.setTransform(63,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.m_contratorpedeiro, new cjs.Rectangle(-1,-1,128,44), null);


(lib.m_campo_container = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1).p("EggxggxMBBjAAAMAAABBjMhBjAAAg");
	this.shape.setTransform(209.5004,209.5004,0.9988,0.9988);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0)").s().p("EggxAgxMAAAhBiMBBiAAAMAAABBig");
	this.shape_1.setTransform(209.5004,209.5004,0.9988,0.9988);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.m_campo_container, new cjs.Rectangle(-1,-1,421,421), null);


(lib.grafico_pressione_botao = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAgBXIgKgSIgLgSIgLgQIgKgNIgFAAIgFAAIgQAAIAABBIgfAAIAAiqIAZgCIAXgBQAkAAAUANQAUAOAAAcQAAAjgjAMIALAOIAMASIAMAUIALATgAgkg6IAAA3IAOAAQAMAAAJgBQAHgBAGgEQAGgDADgFQADgGAAgIQAAgIgDgGQgDgFgGgDQgFgEgHgBIgRgBIgTABg");
	this.shape.setTransform(457.175,16.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAyBWIgHgUIgHgUIhIAAIgHAVIgHATIgiAAIATgzIARgrIARgoIARglIAcAAIASAlIAQAoIARArIATAzgAgNgUIgPAoIA4AAIgQgpIgMgfIgNAgg");
	this.shape_1.setTransform(440.75,16.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeBTQgNgFgIgJQgJgKgDgMQgEgMgBgPIAAhrIAhAAIAABoQAAALACAJQADAIAEAFQAFAFAHADQAGACAIAAQAIAAAHgCQAHgDAEgFQAFgFADgIQADgJgBgLIAAhoIAhAAIAABrQAAAPgFAMQgEAMgIAKQgJAJgNAFQgNAGgRAAQgRAAgNgGg");
	this.shape_2.setTransform(424.4,16.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAtBWIgTgeIgWghIgWggIgWgcIAAB7IgfAAIAAirIAaAAIAVAYIAXAeIAWAfIATAdIAAhyIAgAAIAACrg");
	this.shape_3.setTransform(407.375,16.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgOBWIAAirIAdAAIAACrg");
	this.shape_4.setTransform(395.45,16.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPBWIAAiQIg1AAIAAgbICJAAIAAAbIg1AAIAACQg");
	this.shape_5.setTransform(385.55,16.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAtBWIgTgeIgWghIgWggIgWgcIAAB7IgfAAIAAirIAaAAIAVAYIAXAeIAWAfIATAdIAAhyIAgAAIAACrg");
	this.shape_6.setTransform(370.075,16.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgfBVQgQgGgLgMQgMgLgGgRQgHgRAAgWQAAgVAHgSQAGgQAMgMQAMgLAPgGQAPgGAQAAQARAAAPAGQAPAGAMALQALAMAHAQQAHASAAAVQAAAWgHARQgGARgMALQgLAMgPAGQgQAFgRABQgQgBgPgFgAgUg5QgKAEgHAIQgGAIgEAMQgEALAAAOQAAAOAEALQAEAMAGAJQAHAHAKAFQAIAFAMgBQALABAKgFQAJgFAHgHQAGgJAEgMQAEgLAAgOQAAgOgEgLQgEgMgGgIQgHgIgJgEQgJgFgMAAQgMAAgIAFg");
	this.shape_7.setTransform(352.05,16.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUBVQgPgHgLgLQgLgMgFgQQgGgRAAgWQAAgVAGgRQAHgRALgLQAMgMAPgGQAQgGARAAQAKAAAKACIAPADIALAFIAFADIgJAaQgGgEgLgDQgLgEgNAAQgMAAgJAEQgJAEgHAHQgHAJgEALQgEAMAAAPQAAANADALQADAMAGAIQAHAJAKAFQAJAEAOAAQARAAALgDIAQgHIAIAaQgDADgFABQgFACgIACIgPADQgJACgJAAQgUgBgPgFg");
	this.shape_8.setTransform(335.65,16.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAyBWIgHgUIgIgUIhIAAIgHAVIgGATIgiAAIATgzIARgrIARgoIARglIAdAAIARAlIARAoIARArIATAzgAgNgUIgPAoIA4AAIgPgpIgNgfIgNAgg");
	this.shape_9.setTransform(314.9,16.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAgBXIgKgSIgLgSIgLgQIgKgNIgFAAIgFAAIgQAAIAABBIgfAAIAAiqIAZgCIAXgBQAkAAAUANQAUAOAAAcQAAAjgjAMIALAOIAMASIAMAUIALATgAgkg6IAAA3IAOAAQAMAAAJgBQAHgBAGgEQAGgDADgFQADgGAAgIQAAgIgDgGQgDgFgGgDQgFgEgHgBIgRgBIgTABg");
	this.shape_10.setTransform(300.225,16.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAyBWIgHgUIgHgUIhIAAIgHAVIgIATIghAAIAUgzIAQgrIARgoIARglIAcAAIASAlIAQAoIARArIATAzgAgNgUIgPAoIA4AAIgQgpIgMgfIgNAgg");
	this.shape_11.setTransform(283.8,16.65);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag+BXIAAiqIAYgCIAYgBQAlAAAUANQAUAOAAAdQAAAQgFALQgFAJgLAHQgKAHgOADQgPADgSAAIgQAAIAAA9gAgfg6IAAA6IAPAAQAWAAAMgGQAMgGAAgSQAAgIgDgGQgDgGgGgDQgFgEgIgBIgQgBIgUABg");
	this.shape_12.setTransform(269.075,16.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgfBVQgQgGgLgMQgMgLgGgRQgHgRAAgWQAAgVAHgSQAGgQAMgMQALgLAQgGQAPgGAQAAQARAAAPAGQAQAGALALQALAMAHAQQAHASAAAVQAAAWgHARQgHARgLALQgLAMgQAGQgPAFgRABQgQgBgPgFgAgVg5QgJAEgHAIQgHAIgDAMQgEALABAOQgBAOAEALQADAMAHAJQAHAHAJAFQAKAFALgBQAMABAJgFQAKgFAGgHQAGgJAFgMQADgLAAgOQAAgOgDgLQgFgMgGgIQgGgIgKgEQgJgFgMAAQgLAAgKAFg");
	this.shape_13.setTransform(247.05,16.65);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAyBxIgHgUIgHgVIhIAAIgHAVIgHAUIgiAAIATgzIARgsIARgnIARgmIAcAAIASAmIAQAnIASAsIASAzgAgNAGIgPApIA4AAIgQgqIgMgfIgNAggAgqhWIADgIIAGgIIAIgGQAFgCAFAAQAFAAAEABIAHADIAHADIAHACQAFAAADgDIAGgIIAPAJIgEAIQgCAEgDADQgFAEgEACQgFADgFAAIgIgBIgIgEIgGgDIgIgBQgFAAgDADQgEADgBAFg");
	this.shape_14.setTransform(229.7,13.975);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgPBWIAAiQIg1AAIAAgbICJAAIAAAbIg1AAIAACQg");
	this.shape_15.setTransform(214.9,16.65);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgfBVQgQgGgLgMQgMgLgGgRQgHgRAAgWQAAgVAHgSQAGgQAMgMQALgLAQgGQAPgGAQAAQARAAAPAGQAQAGALALQALAMAHAQQAHASAAAVQAAAWgHARQgHARgLALQgLAMgQAGQgPAFgRABQgQgBgPgFgAgVg5QgJAEgHAIQgHAIgDAMQgEALABAOQgBAOAEALQADAMAHAJQAHAHAJAFQAKAFALgBQAMABAJgFQAKgFAGgHQAGgJAFgMQADgLAAgOQAAgOgDgLQgFgMgGgIQgGgIgKgEQgJgFgMAAQgLAAgKAFg");
	this.shape_16.setTransform(198.9,16.65);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgoBXQgOAAgKgDIAAioIALgBIANgBIANgBIALAAQAQAAANACQANACAKAGQAKAFAGAJQAGAKgBANQAAAMgFAIQgHAJgKAGQAQAEAIAKQAGAKAAAQQAAAagTAOQgTANgnAAIgcgBgAgiA9IALABIAMAAIARgBQAIgBAGgDQAGgDAEgFQADgGABgJQAAgOgLgGQgLgGgSAAIgcAAgAgYg9IgKABIAAAtIAXAAQARgBAKgFQAKgEAAgOQAAgNgKgFQgLgFgQAAIgNABg");
	this.shape_17.setTransform(182.3,16.65);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AA/BWIgCg+QgBgfgDgeIgGAOIgJASIgIASIgJATIgHASIgGAOIgXAAIgGgOIgHgSIgJgTIgIgTIgIgRIgHgOIgEA9IgDA+IgeAAIACgsIADgtIAEgsIAEgmIAdAAIANAWIANAeIAOAeIALAcIANgcIANgeIAPgeIALgWIAdAAIAFAnIADAsIADAsIADAsg");
	this.shape_18.setTransform(158.75,16.65);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgeBTQgNgFgIgJQgJgKgDgMQgFgMAAgPIAAhrIAhAAIAABoQgBALADAJQADAIAEAFQAFAFAHADQAGACAIAAQAIAAAHgCQAHgDAFgFQAEgFADgIQACgJABgLIAAhoIAgAAIAABrQAAAPgFAMQgEAMgIAKQgJAJgNAFQgNAGgRAAQgRAAgNgGg");
	this.shape_19.setTransform(139.9,16.85);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag6BWIAAirIBvAAIAAAaIhPAAIAAArIBGAAIAAAZIhGAAIAAAzIBUAAIAAAag");
	this.shape_20.setTransform(120.55,16.65);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAtBWIgTgeIgWghIgWggIgWgcIAAB7IgfAAIAAirIAaAAIAVAYIAXAeIAWAfIATAdIAAhyIAgAAIAACrg");
	this.shape_21.setTransform(104.375,16.65);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AggBVQgPgGgMgMQgLgLgHgRQgGgRAAgWQAAgVAGgSQAHgQAMgMQAMgLAPgGQAPgGAQAAQARAAAPAGQAPAGAMALQALAMAHAQQAHASAAAVQAAAWgHARQgGARgMALQgLAMgPAGQgQAFgRABQgQgBgQgFgAgUg5QgKAEgHAIQgHAIgDAMQgDALgBAOQABAOADALQADAMAHAJQAHAHAKAFQAJAFALgBQALABAKgFQAJgFAHgHQAGgJAEgMQAEgLAAgOQAAgOgEgLQgEgMgGgIQgHgIgJgEQgKgFgLAAQgLAAgJAFg");
	this.shape_22.setTransform(86.35,16.65);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgOBWIAAirIAdAAIAACrg");
	this.shape_23.setTransform(73.9,16.65);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgYBZIgPgEIgMgDIgIgFIAJgaQAHAFALADQAMAEAQAAQAQAAAIgGQAHgGAAgKQAAgGgCgFQgDgEgFgEIgMgHIgOgGIgSgHQgIgDgHgFQgGgGgEgJQgEgHAAgMQAAgXAQgNQARgOAbAAQAQAAANAEQAMAEAHAEIgJAZQgJgEgKgDQgKgDgLAAQgMABgHAFQgHAFAAAKQAAAFADAFQACADAEAEIALAGIAMAFIAVAJQAKAFAHAFQAGAHAEAIQADAJAAAMQAAAXgQANQgRAOgfAAQgLAAgJgCg");
	this.shape_24.setTransform(64.525,16.65);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgYBZIgPgEIgMgDIgIgFIAJgaQAHAFALADQAMAEAQAAQAQAAAIgGQAHgGAAgKQAAgGgCgFQgDgEgFgEIgMgHIgOgGIgSgHQgIgDgHgFQgGgGgEgJQgEgHAAgMQAAgXAQgNQARgOAbAAQAQAAANAEQAMAEAHAEIgJAZQgJgEgKgDQgKgDgLAAQgMABgHAFQgHAFAAAKQAAAFADAFQACADAEAEIALAGIAMAFIAVAJQAKAFAHAFQAGAHAEAIQADAJAAAMQAAAXgQANQgRAOgfAAQgLAAgJgCg");
	this.shape_25.setTransform(52.025,16.65);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ag6BWIAAirIBvAAIAAAaIhPAAIAAArIBGAAIAAAZIhGAAIAAAzIBUAAIAAAag");
	this.shape_26.setTransform(39.55,16.65);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAgBXIgKgSIgLgSIgLgQIgKgNIgFAAIgFAAIgQAAIAABBIgfAAIAAiqIAZgCIAXgBQAkAAAUANQAUAOAAAcQAAAjgjAMIALAOIAMASIAMAUIALATgAgkg6IAAA3IAOAAQAMAAAJgBQAHgBAGgEQAGgDADgFQADgGAAgIQAAgIgDgGQgDgFgGgDQgFgEgHgBIgRgBIgTABg");
	this.shape_27.setTransform(25.475,16.55);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("Ag+BXIAAiqIAYgCIAYgBQAlAAAUANQAUAOAAAdQAAAQgFALQgFAJgLAHQgKAHgOADQgPADgSAAIgQAAIAAA9gAgfg6IAAA6IAPAAQAWAAAMgGQAMgGAAgSQAAgIgDgGQgDgGgGgDQgFgEgIgBIgQgBIgUABg");
	this.shape_28.setTransform(10.425,16.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,465.5,32.1);


(lib.g_voltar_menu = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOAjQgGgCgEgFQgEgFgBgFQgCgHAAgIIAAgnIAVAAIAAAlQAAAKADAEQADAFAGAAIAFAAIAEgBIAAg3IAVAAIAABFIgOAEIgRABQgJgBgGgCg");
	this.shape.setTransform(53.125,14.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AALAmIAAgmQAAgKgDgFQgDgEgGAAIgFAAIgEABIAAA4IgVAAIAAhGIAOgDQAIgCAJAAQAJAAAGADQAGACAEAFQAEAEABAGQACAHAAAHIAAApg");
	this.shape_1.setTransform(44.975,13.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMAkQgHgDgGgFQgEgFgCgHQgCgHgBgIQABgJADgIQADgHAEgFQAFgFAHgCQAGgDAFAAQARAAAIAKQAKAJgBATIAAADIAAAEIguAAQABAGAFAEQAFAEAIAAIALgBIAJgDIADARIgFACIgGABIgHABIgHABQgJAAgIgDgAgEgTIgFADIgCAEIgBAGIAbAAIgBgGIgDgEIgEgDQgDgCgDAAQgDAAgCACg");
	this.shape_2.setTransform(36.7,14.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAhAwIgBgeIgCghIgGANIgGANIgGAOIgEALIgPAAIgEgLIgGgOIgGgNIgGgNIgCAhIgBAeIgVAAIABgYIACgZIACgZIACgWIAVAAIAGAMIAHAOIAHAQIAGAQIAGgQIAHgQIAHgOIAGgMIAUAAIACAWIACAZIACAZIABAYg");
	this.shape_3.setTransform(26.325,12.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag7AAIB3h3IAADvg");
	this.shape_4.setTransform(5.975,11.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,61.7,23.9);


(lib.g_som = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Camada_1
	this.instance = new lib.com_som();

	this.instance_1 = new lib.sem_som();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64,51);


(lib.g_sobre = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AACASIACgPIADgNIABgHIAOAAIgCAHIgEANIgGAPgAgVASIACgPIADgNIABgHIANAAIgBAHIgEANIgGAPg");
	this.shape.setTransform(614.375,303.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgGAHQgCgCAAgEQAAgEADgDQADgCADAAQAEAAACABQACADAAAEIgBADIgCAEIgDACIgDABQgEgBgCgCg");
	this.shape_1.setTransform(607.675,311.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgaAfQgGgHAAgLQAAgJACgHQACgJAFgIQAFgIAIgEQAIgFALAAQALAAAHAGQAGAHAAAMQAAAIgCAIQgCAJgFAIQgFAHgIAFQgIAFgLAAQgLAAgHgHgAgEgXQgFAEgDAGQgEAFgBAHQgCAGAAAHQAAAHADAEQADAEAHAAQAGAAAFgEQAFgDADgGQAEgGABgGQACgGAAgHQAAgHgDgEQgDgEgIAAQgGAAgEADg");
	this.shape_2.setTransform(602.775,308.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgSA0IAShIIAMAAIgRBIgAAEgjQgCgCAAgEQAAgFADgCQADgCADgBQADAAADACQACADAAADQAAAEgDADQgDACgDAAQgEAAgCgBg");
	this.shape_3.setTransform(597.475,306.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgbAlIARhFIALgDQAHgBAGAAIAEAAIAEABIADAAIADABIgEALIgGgBIgHgBIgGABIgFABIgOA8g");
	this.shape_4.setTransform(593.2,308.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgUA2QgFgCgDgEQgCgEgCgFQgBgEAAgGQAAgJADgJQADgJAHgGQAGgHAJgEQAJgFANAAIAIABQAGABADACIgLArIgBAGIAAAGIAAAHIACAHIgLACIgCgEIgBgEIgIAGQgEADgIAAQgGAAgEgCgAAAgFQgGADgFAEQgEAFgDAGQgCAHAAAIIABAFIACAGIADAEQADACAEAAQAGAAADgEIAHgFIABgFIABgFIAIgiIgCAAIgDAAQgIAAgGADgAABghIAWgVIAHAKIgYASg");
	this.shape_5.setTransform(586.525,306.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgbAlIARhFIALgDQAGgBAHAAIADAAIAFABIADAAIADABIgEALIgGgBIgHgBIgGABIgFABIgOA8g");
	this.shape_6.setTransform(580.4,308.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgTAsQgFgEAAgJQAAgGACgJIAPg9IANgDIgFAXIAYAAIgDALIgYAAIgHAfIgCAMQABAEACACQACACAGAAQADAAAEgBIAGgDIABALIgHADQgFACgGAAQgKAAgFgFg");
	this.shape_7.setTransform(575.1,307.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AAKAlIAJgiIABgHIABgIQAAgFgDgEQgDgEgIAAIgHABIgFABIgPA8IgNAAIARhFIAOgDIAMgBQAGAAAFACQAEABADADQADADACAFQABAEAAAFIAAAHIgCAGIgJAlg");
	this.shape_8.setTransform(567.85,308.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgaAfQgGgHAAgLQAAgJACgHQACgJAFgIQAFgIAIgEQAIgFALAAQALAAAHAGQAGAHAAAMQAAAIgCAIQgCAJgFAIQgFAHgIAFQgIAFgLAAQgLAAgHgHgAgEgXQgFAEgDAGQgEAFgBAHQgCAGAAAHQAAAHADAEQADAEAHAAQAGAAAFgEQAFgDADgGQAEgGABgGQACgGAAgHQAAgHgDgEQgDgEgIAAQgGAAgEADg");
	this.shape_9.setTransform(560.375,308.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgNAkQgGgCgDgEQgEgDgBgGQgCgFAAgGQAAgJADgIQADgJAFgHQAGgGAIgEQAHgEAKAAIAJAAIAIADIgFALIgFgCIgIgBQgHAAgFADQgEADgEAFQgEAFgCAGQgCAGAAAHIABAHQAAADACACQACADAEABQADACAEAAIAFgBIAFgBIAFgBIACgCIACALIgJADQgFACgHAAQgGAAgFgCg");
	this.shape_10.setTransform(553.775,308.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgaAfQgGgHAAgLQAAgJACgHQACgJAFgIQAFgIAIgEQAIgFALAAQALAAAHAGQAGAHAAAMQAAAIgCAIQgCAJgFAIQgFAHgIAFQgIAFgLAAQgLAAgHgHgAgEgXQgFAEgDAGQgEAFgBAHQgCAGAAAHQAAAHADAEQADAEAHAAQAGAAAFgEQAFgDADgGQAEgGABgGQACgGAAgHQAAgHgDgEQgDgEgIAAQgGAAgEADg");
	this.shape_11.setTransform(543.075,308.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgPAkQgFgCgEgEQgEgDgCgFIgBgKQAAgKADgIQADgJAFgHQAGgHAIgEQAGgEALAAQAFAAAFABQADACADACIAEAGIABAHQAAAGgCAFQgDAFgEADQgDACgGABIgLADIgKABIgLABIgBACIAAABIACAGIADAFQACACADABQAEACAFAAIAFgBIAGgBIAEgCIAEgBIABALIgJADQgHACgHAAQgIAAgEgCgAAAgYIgHAFIgGAIIgDAKIAOgBIALgDQAFgCACgDQAEgDAAgFIgBgDIgCgCIgDgCIgFgBQgFAAgEACg");
	this.shape_12.setTransform(532.45,308.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgVAlIgDgQIgDgSIgCgSIgBgUIANAAIAAAOIABAQIACAOIACANIAJgMIAIgPIAHgQIAGgOIANAAQgDAJgFAKIgKATIgMASIgKAQg");
	this.shape_13.setTransform(526.025,308.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgaAfQgGgHAAgLQAAgJACgHQACgJAFgIQAFgIAIgEQAIgFALAAQALAAAHAGQAGAHAAAMQAAAIgCAIQgCAJgFAIQgFAHgIAFQgIAFgLAAQgLAAgHgHgAgEgXQgFAEgDAGQgEAFgBAHQgCAGAAAHQAAAHADAEQADAEAHAAQAGAAAFgEQAFgDADgGQAEgGABgGQACgGAAgHQAAgHgDgEQgDgEgIAAQgGAAgEADg");
	this.shape_14.setTransform(518.075,308.375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgbAlIARhFIALgDQAGgBAHAAIADAAIAFABIADAAIADABIgEALIgGgBIgHgBIgGABIgFABIgOA8g");
	this.shape_15.setTransform(512,308.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AglAyIAYheIAMgEIAMgBQAHAAAFACQAFACADADQADADACAFQABAFAAAFQAAAKgDAJQgCAIgHAHQgFAHgKAEQgJAEgMAAIgDAAIgEAAIgFAZgAABgmIgDACIgNAyIADAAIADAAQAIAAAGgDQAGgDAFgFQADgEADgHQACgHAAgHIAAgGIgDgFQgBgDgEgBQgDgBgFAAIgHAAg");
	this.shape_16.setTransform(504.7,309.575);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgQAkQgEgCgEgEQgDgDgCgFIgCgKQAAgKADgIQADgJAGgHQAFgHAHgEQAHgEAKAAQAGAAAEABQAEACADACIAEAGIABAHQAAAGgDAFQgCAFgDADQgFACgEABIgMADIgKABIgLABIAAACIAAABIAAAGIADAFQACACAEABQAEACAFAAIAGgBIAFgBIAFgCIACgBIABALIgJADQgGACgHAAQgHAAgGgCgAAAgYIgHAFIgGAIIgEAKIAQgBIAKgDQAFgCADgDQACgDAAgFIAAgDIgCgCIgDgCIgFgBQgFAAgEACg");
	this.shape_17.setTransform(494.6,308.375);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AgPAkQgGgCgDgEQgDgDgDgFIgBgKQAAgKADgIQADgJAFgHQAGgHAIgEQAGgEALAAQAFAAAFABQAEACACACIAEAGIABAHQAAAGgCAFQgDAFgEADQgEACgFABIgKADIgLABIgLABIgBACIAAABIABAGIAEAFQACACADABQAEACAFAAIAFgBIAGgBIAEgCIADgBIACALIgJADQgHACgHAAQgHAAgFgCgAAAgYIgHAFIgGAIIgEAKIAPgBIALgDQAFgCACgDQADgDABgFIgBgDIgCgCIgDgCIgFgBQgFAAgEACg");
	this.shape_18.setTransform(484.1,308.375);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AgEA1QgEgBgDgDQgCgDgBgDQgCgEAAgEIABgHIABgHIARhJIAOgCIgSBMIgBAGIgBAFQAAAFADADQABADAGAAIgDALQgFAAgDgCg");
	this.shape_19.setTransform(478.825,306.625);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AgQAkQgEgCgEgEQgDgDgCgFIgCgKQAAgKADgIQADgJAGgHQAFgHAHgEQAHgEAKAAQAGAAAEABQAEACADACIAEAGIABAHQAAAGgDAFQgCAFgDADQgFACgEABIgMADIgKABIgLABIAAACIAAABIAAAGIADAFQACACAEABQAEACAFAAIAGgBIAFgBIAFgCIACgBIABALIgJADQgGACgHAAQgHAAgGgCgAAAgYIgHAFIgGAIIgEAKIAQgBIAKgDQAFgCADgDQACgDAAgFIAAgDIgCgCIgDgCIgFgBQgFAAgEACg");
	this.shape_20.setTransform(473,308.375);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AgZA1QgEgCgDgDQgDgEgCgFQgBgEAAgGQAAgKADgIQAEgJAGgGQAGgHAJgFQAKgEALAAIAEAAIACABIAIghIAOgCIgUBRIgBAGIgBAGIABAGIACAHIgMACIgCgHIgIAFQgEADgIAAQgGAAgFgCgAgEgGQgHADgFAEQgEAFgCAHQgDAHAAAHIABAHIACAFQABACADACQADABAEAAQAFAAAEgCQAEgDADgDIABgFIAAgGIAJgiIgDAAIgDAAQgIAAgFADg");
	this.shape_21.setTransform(466,306.675);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AgPAkQgGgCgDgEQgDgDgDgFIgBgKQAAgKADgIQADgJAFgHQAGgHAIgEQAGgEALAAQAFAAAFABQAEACACACIAEAGIABAHQAAAGgCAFQgDAFgEADQgEACgFABIgKADIgLABIgLABIgBACIAAABIABAGIAEAFQACACADABQAEACAFAAIAFgBIAGgBIAEgCIADgBIACALIgJADQgHACgHAAQgHAAgFgCgAAAgYIgHAFIgGAIIgEAKIAPgBIALgDQAFgCACgDQADgDABgFIgBgDIgCgCIgDgCIgFgBQgFAAgEACg");
	this.shape_22.setTransform(454.85,308.375);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AgYA1QgFgCgDgDQgDgEgCgFQgBgEAAgGQAAgKAEgIQADgJAGgGQAGgHAJgFQAKgEALAAIADAAIAEABIAHghIAOgCIgUBRIgBAGIAAAGIAAAGIACAHIgLACIgDgHIgIAFQgEADgIAAQgGAAgEgCgAgFgGQgGADgEAEQgFAFgDAHQgCAHAAAHIABAHIACAFQABACAEACQACABADAAQAHAAADgCQAEgDADgDIAAgFIABgGIAJgiIgDAAIgDAAQgIAAgGADg");
	this.shape_23.setTransform(447.85,306.675);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AgSA0IAShIIAMAAIgRBIgAAEgjQgCgCAAgEQAAgFADgCQADgCADgBQADAAADACQACADAAADQAAAEgDADQgDACgDAAQgEAAgCgBg");
	this.shape_24.setTransform(442.025,306.85);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AgVAlIgDgQIgDgSIgCgSIgBgUIANAAIAAAOIABAQIACAOIACANIAJgMIAIgPIAHgQIAGgOIANAAQgDAJgFAKIgKATIgMASIgKAQg");
	this.shape_25.setTransform(437.275,308.35);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AgVAkIgHgGQgDgCgBgFIgBgJIABgHIABgHIAJgkIANAAIgIAiIgCAGIgBAJIABAFIABAEIAEADIAGABQAGAAADgDQAFgCADgDIAAgFIABgFIALgsIANAAIgLAtIgBAGIgBAGIABAHIACAHIgMACIgBgEIgBgEIgEACIgFAEIgFACIgHABQgGAAgEgCg");
	this.shape_26.setTransform(429.575,308.45);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AgZA1QgEgCgDgDQgDgEgCgFQgBgEAAgGQAAgKADgIQADgJAHgGQAGgHAJgFQAKgEALAAIAEAAIACABIAIghIAOgCIgUBRIgBAGIgBAGIABAGIACAHIgMACIgCgHIgHAFQgGADgHAAQgGAAgFgCgAgEgGQgHADgFAEQgEAFgCAHQgDAHAAAHIABAHIACAFQABACADACQADABAEAAQAGAAAEgCQADgDADgDIABgFIABgGIAIgiIgDAAIgDAAQgIAAgFADg");
	this.shape_27.setTransform(422.25,306.675);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AAdAlIAJgiIABgGIABgIIAAgGIgCgEQgCgCgDgBIgGgBQgFAAgEACIgHADIABAEIAAAEIgBAHIgBAFIgJAlIgMAAIAIgiIACgGIABgJIgBgFIgCgEQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAgBIgGgBIgHABIgFABIgPA8IgNAAIARhFIANgDIAOgBQAGAAADACQAEACACADIAEgCIAGgCIAHgCIAHgBQAGAAAFACQAEACACADQADADABAEIABAJIAAAHIgBAGIgKAlg");
	this.shape_28.setTransform(408.525,308.275);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AgPA2QgGgDgDgEQgDgDgDgFIgBgJQAAgKADgJQADgJAFgHQAGgGAIgFQAGgEALAAQAFAAAFACQAEABACADIAEAGIABAGQAAAFgCAFQgCAFgEADQgFADgFABIgKADIgLABIgLABIgBACIAAABIABAGIAEAFQACACADABQAEACAFAAIAFAAIAGgCIAEgCIADgBIACALIgJAEQgHACgHAAQgHAAgFgCgAAAgHIgHAFIgGAHIgEAKIAPgBIALgDQAFgBACgEQADgDABgEIgBgDIgCgCIgDgCIgFgBQgFAAgEACgAABghIAWgVIAIAKIgZASg");
	this.shape_29.setTransform(399.5,306.65);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AgVAkIgHgGQgDgCgBgFIgBgJIABgHIABgHIAJgkIANAAIgIAiIgCAGIgBAJIABAFIABAEIAEADIAGABQAGAAADgDQAFgCADgDIAAgFIABgFIALgsIANAAIgLAtIgBAGIgBAGIABAHIACAHIgMACIgBgEIgBgEIgEACIgFAEIgFACIgHABQgGAAgEgCg");
	this.shape_30.setTransform(392.125,308.45);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AgcAxQgHgCgDgDIAEgKIAJAEQAGABAFAAQAGAAAEgBQAEgCADgDIAFgFIADgJIAAgDIgHAEQgEABgFAAQgLAAgGgGQgHgFABgKQgBgJAEgJQADgJAGgHQAHgHAJgEQAJgEAMAAIAEAAIAFAAIAGACIADACIgOA+IgFAOQgDAGgFAEQgEAEgHADQgHACgLAAQgFAAgGgBgAAEgkQgFAEgFAEQgEAGgDAGQgDAGAAAHQABAHADADQAEADAGAAQAFAAAFgCIAHgEIAKgqIgEAAIgDAAQgIAAgGACg");
	this.shape_31.setTransform(383.8,309.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AgEA1QgEgBgDgDQgCgDgBgDQgCgEAAgEIABgHIABgHIARhJIAOgCIgSBMIgBAGIgBAFQAAAFADADQABADAGAAIgDALQgFAAgDgCg");
	this.shape_32.setTransform(378.825,306.625);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AgUAkQgFgCgDgDQgCgEgCgFQgBgEAAgGQAAgKADgHQADgJAHgHQAGgHAJgFQAJgEANAAIAIABQAGABADACIgLArIgBAGIAAAGIAAAGIACAHIgLACIgCgDIgBgEIgIAFQgEADgIAAQgGAAgEgCgAAAgXQgGADgFAFQgEAFgDAHQgCAGAAAHIABAGIACAGIADAEQADABAEAAQAGAAADgDIAHgFIABgFIABgGIAIghIgCgBIgDAAQgIAAgGADg");
	this.shape_33.setTransform(372.825,308.375);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("AgPAkQgGgCgDgEQgEgDgBgFIgCgKQAAgKADgIQADgJAFgHQAGgHAIgEQAGgEALAAQAFAAAFABQAEACACACIAEAGIABAHQAAAGgCAFQgCAFgEADQgFACgEABIgLADIgLABIgLABIgBACIAAABIABAGIAEAFQABACAEABQAEACAFAAIAFgBIAGgBIAEgCIADgBIACALIgJADQgHACgHAAQgHAAgFgCgAAAgYIgHAFIgGAIIgEAKIAPgBIALgDQAFgCACgDQADgDABgFIgBgDIgCgCIgDgCIgFgBQgFAAgEACg");
	this.shape_34.setTransform(362.15,308.375);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#333333").s().p("AgVAkIgHgGQgDgCgBgFIgBgJIABgHIABgHIAJgkIANAAIgIAiIgCAGIgBAJIABAFIABAEIAEADIAGABQAGAAADgDQAFgCADgDIAAgFIABgFIALgsIANAAIgLAtIgBAGIgBAGIABAHIACAHIgMACIgBgEIgBgEIgEACIgFAEIgFACIgHABQgGAAgEgCg");
	this.shape_35.setTransform(354.775,308.45);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("AgBAyIAGgcIgGADQgEABgFAAQgFAAgFgCQgEgCgEgDQgDgEgBgFQgBgEAAgGQgBgJAEgIQADgJAGgHQAHgHAJgFQAIgEANAAIAJABIAJADIgWBfgAAAgjQgHADgEAFQgFAFgCAHQgCAHgBAHIABAGIACAFQACACADACQADABAEAAQAEAAADgBIAHgEIAMgvIgHgBQgIAAgFADg");
	this.shape_36.setTransform(346.95,309.575);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("AgPA2QgFgDgEgEQgEgDgCgFIgBgJQAAgKADgJQADgJAFgHQAGgGAIgFQAGgEALAAQAFAAAFACQADABADADIAEAGIABAGQAAAFgCAFQgCAFgFADQgDADgGABIgKADIgLABIgLABIgBACIAAABIACAGIADAFQACACADABQAEACAFAAIAFAAIAGgCIAEgCIAEgBIABALIgJAEQgHACgHAAQgIAAgEgCgAAAgHIgHAFIgGAHIgDAKIAOgBIALgDQAFgBACgEQAEgDAAgEIgBgDIgCgCIgDgCIgFgBQgFAAgEACgAABghIAWgVIAHAKIgYASg");
	this.shape_37.setTransform(336.25,306.65);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333333").s().p("AgTAsQgFgEAAgJQAAgGACgJIAPg9IANgDIgGAXIAZAAIgCALIgZAAIgHAfIgCAMQABAEACACQACACAGAAQADAAAEgBIAGgDIABALIgHADQgFACgFAAQgLAAgFgFg");
	this.shape_38.setTransform(330.2,307.325);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#333333").s().p("AgUAkQgFgCgDgDQgCgEgCgFQgBgEAAgGQAAgKADgHQADgJAHgHQAGgHAJgFQAJgEANAAIAIABQAGABADACIgLArIgBAGIAAAGIAAAGIACAHIgLACIgCgDIgBgEIgIAFQgEADgIAAQgGAAgEgCgAAAgXQgGADgFAFQgEAFgDAHQgCAGAAAHIABAGIACAGIADAEQADABAEAAQAGAAADgDIAHgFIABgFIABgGIAIghIgCgBIgDAAQgIAAgGADg");
	this.shape_39.setTransform(323.375,308.375);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#333333").s().p("AgQAkQgEgCgEgEQgEgDgBgFQgCgFAAgFQAAgKADgIQADgJAGgHQAFgHAHgEQAHgEAKAAQAGAAAEABQAFACACACIAEAGIABAHQAAAGgDAFQgBAFgEADQgFACgEABIgMADIgKABIgLABIAAACIAAABIABAGIACAFQACACAEABQAEACAFAAIAGgBIAFgBIAFgCIACgBIABALIgJADQgGACgHAAQgIAAgFgCgAAAgYIgHAFIgGAIIgEAKIAQgBIAKgDQAFgCADgDQACgDAAgFIAAgDIgCgCIgDgCIgFgBQgFAAgEACg");
	this.shape_40.setTransform(312.7,308.375);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#333333").s().p("AgTAsQgFgEAAgJQAAgGACgJIAPg9IANgDIgFAXIAYAAIgDALIgYAAIgHAfIgCAMQAAAEADACQACACAGAAQADAAAEgBIAGgDIABALIgHADQgFACgGAAQgKAAgFgFg");
	this.shape_41.setTransform(306.65,307.325);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#333333").s().p("AgPAlIgHgBIgFgCIgDgBIAGgLIACACIAEABIAGACIAGAAIAGAAIAEgCQACgBACgDQABgCAAgDIgBgEIgCgDIgDgCIgFgDIgGgEIgEgCIgDgFQgCgDAAgEQAAgLAIgGQAHgGAOAAIAMABIAHACIgGALQgBgBgEgBQgFgCgFAAIgFABIgFACIgDADIgBAGQAAADADADQACACAFADIAHADIAFADIADAFIABAHQAAAGgCAFQgDAEgDADQgEADgGACQgEABgGAAIgJgBg");
	this.shape_42.setTransform(300.5,308.375);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#333333").s().p("AgSA0IAShIIAMAAIgRBIgAAEgjQgCgCAAgEQAAgFADgCQADgCADgBQADAAADACQACADAAADQAAAEgDADQgDACgDAAQgEAAgCgBg");
	this.shape_43.setTransform(296.325,306.85);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#333333").s().p("AANAlIgFgOIgHgOIgXAcIgPAAIAiglIgTgjIAPAAIALAaIALgOIAJgMIAOAAIgNASIgPARIAJASIAIATg");
	this.shape_44.setTransform(290.775,308.35);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#333333").s().p("AgPAkQgGgCgDgEQgEgDgCgFIgBgKQAAgKADgIQADgJAFgHQAGgHAIgEQAGgEALAAQAFAAAEABQAEACADACIAEAGIABAHQAAAGgCAFQgCAFgFADQgDACgGABIgLADIgKABIgLABIAAACIAAABIABAGIADAFQABACAEABQAEACAFAAIAFgBIAGgBIAEgCIAEgBIABALIgJADQgHACgHAAQgIAAgEgCgAAAgYIgHAFIgGAIIgDAKIAOgBIALgDQAFgCADgDQADgDAAgFIgBgDIgCgCIgDgCIgFgBQgFAAgEACg");
	this.shape_45.setTransform(284.15,308.375);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#333333").s().p("AgEA1QgEgBgDgDQgCgDgBgDQgCgEAAgEIABgHIABgHIARhJIAOgCIgSBMIgBAGIgBAFQAAAFADADQABADAGAAIgDALQgFAAgDgCg");
	this.shape_46.setTransform(275.625,306.625);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#333333").s().p("AgQAkQgFgCgDgEQgDgDgCgFIgCgKQAAgKADgIQADgJAFgHQAGgHAHgEQAIgEAJAAQAGAAAFABQAEACACACIAEAGIABAHQAAAGgCAFQgDAFgDADQgEACgFABIgLADIgLABIgLABIgBACIAAABIABAGIAEAFQABACAEABQAEACAFAAIAGgBIAFgBIAFgCIACgBIABALIgJADQgGACgHAAQgHAAgGgCgAAAgYIgHAFIgGAIIgEAKIAPgBIALgDQAFgCACgDQADgDAAgFIAAgDIgCgCIgDgCIgFgBQgFAAgEACg");
	this.shape_47.setTransform(269.8,308.375);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#333333").s().p("AgVAlIgDgQIgDgSIgCgSIgBgUIANAAIAAAOIABAQIACAOIACANIAJgMIAIgPIAHgQIAGgOIANAAQgDAJgFAKIgKATIgMASIgKAQg");
	this.shape_48.setTransform(263.375,308.35);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#333333").s().p("AgWA3IAShIIAMAAIgRBIgAgFggIAVgVIAHAKIgXASg");
	this.shape_49.setTransform(258.275,306.55);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#333333").s().p("AgPAlIgHgBIgFgCIgDgBIAGgLIACACIAEABIAGACIAGAAIAGAAIAEgCQADgBABgDQABgCAAgDIgBgEIgCgDIgDgCIgFgDIgGgEIgEgCIgDgFQgCgDAAgEQAAgLAIgGQAHgGAOAAIALABIAIACIgGALQgBgBgEgBQgFgCgFAAIgFABIgFACIgDADIgBAGQAAADADADQACACAFADIAHADIAFADIADAFIABAHQAAAGgCAFQgDAEgDADQgEADgGACQgEABgGAAIgJgBg");
	this.shape_50.setTransform(252.8,308.375);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#333333").s().p("AgPAlIgHgBIgFgCIgDgBIAGgLIACACIAEABIAFACIAHAAIAGAAIAEgCQADgBABgDQACgCAAgDIgCgEIgCgDIgDgCIgFgDIgGgEIgFgCIgCgFQgCgDAAgEQAAgLAIgGQAHgGAOAAIALABIAIACIgGALQgBgBgEgBQgFgCgFAAIgGABIgEACIgDADIgBAGQAAADADADQACACAFADIAHADIAFADIADAFIABAHQAAAGgCAFQgDAEgEADQgDADgGACQgFABgFAAIgJgBg");
	this.shape_51.setTransform(247.05,308.375);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#333333").s().p("AgaAfQgGgHAAgLQAAgJACgHQACgJAFgIQAFgIAIgEQAIgFALAAQALAAAHAGQAGAHAAAMQAAAIgCAIQgCAJgFAIQgFAHgIAFQgIAFgLAAQgLAAgHgHgAgEgXQgFAEgDAGQgEAFgBAHQgCAGAAAHQAAAHADAEQADAEAHAAQAGAAAFgEQAFgDADgGQAEgGABgGQACgGAAgHQAAgHgDgEQgDgEgIAAQgGAAgEADg");
	this.shape_52.setTransform(240.425,308.375);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#333333").s().p("AgkAyIAWheIAOgEIALgBQAHAAAFACQAFACADADQADADACAFQACAFgBAFQAAAKgCAJQgEAIgFAHQgHAHgJAEQgJAEgMAAIgEAAIgDAAIgGAZgAABgmIgDACIgNAyIADAAIAEAAQAIAAAFgDQAGgDAFgFQAEgEACgHQACgHABgHIgBgGIgDgFQgBgDgEgBQgDgBgFAAIgHAAg");
	this.shape_53.setTransform(232.25,309.575);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#333333").s().p("AAdAlIAJgiIABgGIABgIIAAgGIgCgEQgCgCgDgBIgGgBQgFAAgEACIgHADIABAEIAAAEIgBAHIgBAFIgJAlIgMAAIAIgiIACgGIABgJIgBgFIgCgEQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAgBIgGgBIgHABIgFABIgPA8IgNAAIARhFIANgDIAOgBQAGAAADACQAEACACADIAEgCIAGgCIAHgCIAHgBQAGAAAFACQAEACACADQADADABAEIABAJIAAAHIgBAGIgKAlg");
	this.shape_54.setTransform(222.825,308.275);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#333333").s().p("AgSA0IAShIIAMAAIgRBIgAAEgjQgCgCAAgEQAAgFADgCQADgCADgBQADAAADACQACADAAADQAAAEgDADQgDACgDAAQgEAAgCgBg");
	this.shape_55.setTransform(215.875,306.85);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#333333").s().p("AgYAxQgGgDgFgEQgFgFgCgHQgDgHAAgJQAAgMAEgKQADgMAHgJQAHgJALgGQAKgGANAAQAIAAAGADQAHACAFAFQAEAEADAHQADAHAAAJQAAAMgEALQgEALgHAJQgHAJgKAGQgLAGgNAAQgHAAgHgCgAgHghQgIAEgFAIQgFAHgDAJQgDAIAAAJQAAANAGAHQAFAHAMAAQAIAAAIgEQAHgFAGgHQAFgIADgJQACgIAAgJQAAgMgFgIQgFgHgMAAQgJAAgHAFg");
	this.shape_56.setTransform(205.675,307.125);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#333333").s().p("AACASIACgPIADgNIABgHIAOAAIgCAHIgEANIgGAPgAgVASIACgPIADgNIABgHIANAAIgBAHIgEANIgGAPg");
	this.shape_57.setTransform(198.725,303.175);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#333333").s().p("AgLAlIgJgEQgDgDgDgEQgCgFAAgGQABgGACgFQACgEAEgBIAKgFIALgBIAEAAIAEABIAEAAIABABIAAgDIAAgHIgCgFIgGgFQgDgBgEAAIgLABIgIACIgBgLIAIgCIAMgBQAIAAAGACQAFACADAEQAEADABAGQACAEAAAHIAAAtIgFAAIgHABIgJAAIgIABIgLgBgAgCADIgGACIgEAEQgCACAAAEQgBAGAFAEQAEACAIAAIAHAAIAGgBIAAgWIgEgBIgHgBIgGABg");
	this.shape_58.setTransform(195.2,237.55);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#333333").s().p("AgJA1QgHgDgFgFQgFgFgDgHQgCgHAAgJQAAgIACgIQADgFADgFQAFgFAGgDQAGgDAHAAQAGAAAFACIAHADIAAglIANgCIAABqIgMACIgQABQgGAAgHgCgAgGgHQgEACgDAEQgCADgBAFQgBAEAAAGQgBANAHAHQAGAGAKABIAIgBIAGgBIAAgtQgCgCgFgCQgEgCgGAAQgEAAgEACg");
	this.shape_59.setTransform(187.4,235.85);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#333333").s().p("AARAlIAAglIgBgLQgCgFgCgDQgCgDgDgBQgEgCgDAAIgFABIgEAAIgEAAIgDABIAAA8IgMAAIAAhFIALgDQAIgBAJAAQAJAAAFACQAGADAEAEQACAFACAGQACAGgBAHIAAAog");
	this.shape_60.setTransform(179.5,237.475);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgDgEQgCgFABgGQAAgGACgFQADgEADgBIAKgFIALgBIAEAAIAEABIAEAAIACABIAAgDIgBgHIgCgFIgGgFQgDgBgEAAIgLABIgIACIgBgLIAJgCIALgBQAIAAAGACQAFACADAEQADADACAGQABAEAAAHIAAAtIgEAAIgHABIgJAAIgIABIgKgBgAgCADIgGACIgEAEQgCACgBAEQAAAGAFAEQAFACAGAAIAIAAIAHgBIAAgWIgFgBIgHgBIgGABg");
	this.shape_61.setTransform(171.6,237.55);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#333333").s().p("AgGAyQgFgFAAgKIAAhXIAMgCIAABXIABAEQAAABAAABQAAAAAAABQABAAAAAAQAAABAAAAIADACIAGABIgCALQgLAAgFgFg");
	this.shape_62.setTransform(166.6,235.85);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_63.setTransform(160.175,237.575);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#333333").s().p("AAYAwIAAgtIgvAAIAAAtIgNAAIAAhgIANAAIAAApIAvAAIAAgpIANAAIAABgg");
	this.shape_64.setTransform(151.125,236.35);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#333333").s().p("AgKAkQgHgEgFgEQgEgFgCgHQgDgHAAgJQAAgIADgIQADgHAFgEQAEgFAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAACIgxAAQABAMAGAGQAFAFAMABIALgBIAHgDIACALIgIADIgOABQgIAAgHgCgAgFgZIgGAFQgDADgBADIgCAIIAjAAQABgJgFgFQgFgGgIAAQgDAAgDABg");
	this.shape_65.setTransform(138.975,237.55);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#333333").s().p("AgKA1QgGgDgFgFQgFgFgCgHQgDgHAAgJQAAgIADgIQABgFAFgFQAEgFAGgDQAGgDAHAAQAGAAAFACIAHADIAAglIANgCIAABqIgLACIgQABQgHAAgIgCgAgGgHQgEACgCAEQgDADgBAFQgBAEgBAGQABANAGAHQAHAGAJABIAJgBIAFgBIAAgtQgCgCgEgCQgFgCgFAAQgFAAgEACg");
	this.shape_66.setTransform(130.75,235.85);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_67.setTransform(119.475,237.575);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#333333").s().p("AARAlIAAglIgCgLQgBgFgCgDQgCgDgDgBQgDgCgEAAIgFABIgEAAIgEAAIgCABIAAA8IgOAAIAAhFIANgDQAHgBAJAAQAIAAAGACQAGADADAEQAEAFABAGQABAGAAAHIAAAog");
	this.shape_68.setTransform(111.35,237.475);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#333333").s().p("AgFAzIAAhHIALAAIAABHgAgFgkQgDgCAAgEQAAgEADgCQADgCACAAQADAAADACQADACgBAEQABAEgDACQgDACgDAAQgCAAgDgCg");
	this.shape_69.setTransform(105.55,236.05);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#333333").s().p("AgNAjQgFgDgEgEQgDgFgCgGQgBgGAAgHIAAgoIANAAIAAAlQAAANAEAGQAEAGAJAAIAEAAIAEgBIAEAAIACgBIAAg8IANAAIAABGIgLACIgRABQgIAAgGgCg");
	this.shape_70.setTransform(99.725,237.625);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#333333").s().p("AATAyIAAgdIgHADQgFACgGAAQgHAAgGgDQgGgDgFgFQgEgFgBgHQgDgGAAgIQAAgJADgHQADgHAEgFQAFgFAHgCQAGgDAIAAQAJAAAGABIAMADIAABfgAgLgfQgGAHgBANQABAGABAEQABAEADAEQACADAEACQAEACAEAAQAGAAAEgBIAHgEIAAgtIgFgBIgJAAQgJAAgHAGg");
	this.shape_71.setTransform(91.4,238.775);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#333333").s().p("AAfAwIgFgMIgEgMIgrAAIgJAYIgOAAIAKgcIAKgYIAJgWIAKgWIALAAIAKAWIAJAWIAKAYIAKAcgAgIgKIgJAWIAjAAIgJgWIgJgWIgIAWg");
	this.shape_72.setTransform(82.825,236.35);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#333333").s().p("AgKAkQgHgEgFgEQgEgFgCgHQgDgHAAgJQAAgIADgIQADgHAFgEQAEgFAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAACIgxAAQABAMAGAGQAFAFAMABIALgBIAHgDIACALIgIADIgOABQgIAAgHgCgAgFgZIgGAFQgDADgBADIgCAIIAjAAQABgJgFgFQgFgGgIAAQgDAAgDABg");
	this.shape_73.setTransform(70.975,237.55);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#333333").s().p("AAQAlIAAglIgBgLQgBgFgCgDQgCgDgDgBQgDgCgFAAIgEABIgFAAIgDAAIgCABIAAA8IgOAAIAAhFIANgDQAHgBAJAAQAIAAAGACQAGADADAEQADAFACAGQABAGABAHIAAAog");
	this.shape_74.setTransform(63.1,237.475);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_75.setTransform(54.925,237.575);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#333333").s().p("AgKAkQgHgEgFgEQgEgFgCgHQgDgHAAgJQAAgIADgIQADgHAFgEQAEgFAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAACIgxAAQABAMAGAGQAFAFAMABIALgBIAHgDIACALIgIADIgOABQgIAAgHgCgAgFgZIgGAFQgDADgBADIgCAIIAjAAQABgJgFgFQgFgGgIAAQgDAAgDABg");
	this.shape_76.setTransform(46.825,237.55);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#333333").s().p("AAlAlIAAglIgBgLQgBgEgCgEQgBgDgDgBQgDgCgFAAQgGAAgEACIgHADIACAIIAAAJIAAAoIgLAAIAAglIgBgLQgBgEgBgEQgCgDgDgBQgDgCgFAAIgEABIgFAAIgDAAIgCABIAAA8IgOAAIAAhFIAMgDQAIgBAJAAQAHAAAGACQAEACADADIADgCIAEgCIAHgCIAIgBQAJAAAFACQAGADADAEQADAFAAAGIABANIAAAog");
	this.shape_77.setTransform(37,237.475);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#333333").s().p("AgGAzIAAhHIANAAIAABHgAgFgkQgCgCAAgEQAAgEACgCQACgCADAAQAEAAACACQACACABAEQgBAEgCACQgCACgEAAQgDAAgCgCg");
	this.shape_78.setTransform(29.2,236.05);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#333333").s().p("AgMAyIgJgCIgGgCIgFgCIAEgLIAKAEQAHACAJAAQAVAAAAgOQAAgFgCgDIgFgGIgIgEIgIgDIgKgEQgEgBgEgEQgDgDgCgEQgCgEAAgHQAAgMAIgHQAJgIAOAAQAJAAAHACQAIACADADIgFALQgCgCgGgCQgGgCgIAAIgGABQgDABgDACIgEAEIgBAGQAAAEABADIAEAEIAHAEIAHADIAMAFIAJAFQAEAEACAFQACAFAAAGQAAANgJAHQgKAHgQAAIgKgBg");
	this.shape_79.setTransform(23.725,236.325);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgDgFQgBgEAAgGQgBgGADgEQADgFAEgCIAJgDIALgCIAEAAIAEABIAEABIACAAIAAgEIgBgGIgDgFIgEgFQgEgBgEAAIgLABIgHACIgCgLIAJgCIALgBQAIAAAGACQAFACADAEQADAEACAFQACAFgBAFIAAAtIgEABIgHABIgIAAIgJABIgKgBgAgCADIgGACIgEADQgDADAAAEQAAAGAFAEQAFACAGAAIAIAAIAHgBIAAgVIgFgBIgIgBIgFAAg");
	this.shape_80.setTransform(290.75,219.85);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#333333").s().p("AgHAvQgGgCgCgEQgEgEgBgGIgBgMIAAhAIAOgDIAAAXIAaAAIAAALIgaAAIAAAhIAAAJIADAFQACACACABIAFABQAGAAADgBIAGgCIACALIgHACQgFABgGAAQgHABgEgCg");
	this.shape_81.setTransform(284.85,218.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#333333").s().p("AgRAkIgIgCIADgLIAHACQAFACAIAAQAHAAAEgCQAEgCAAgFQAAgEgEgEIgMgFIgIgEIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADADIAFADIAGADIAJADIAHAEQADADABADQACADAAAGQAAAKgIAFQgHAFgNAAQgKAAgFgCg");
	this.shape_82.setTransform(278.525,219.85);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_83.setTransform(271.275,219.875);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#333333").s().p("AgKAwQgIgEgGgGQgGgHgDgJQgEgKAAgMQAAgLAEgJQAEgKAGgGQAGgHAJgDQAIgEAJAAIALABIAIACIAGADIADABIgEALIgEgBIgFgCIgHgCIgHgBQgIAAgFADQgGADgEAFQgFAFgCAHQgCAHAAAIQAAAJACAHQACAHAEAFQAEAFAGADQAFADAIAAQAKAAAGgCIAJgDIAEALIgEABIgGACIgJACIgLABQgJAAgJgDg");
	this.shape_84.setTransform(263.025,218.625);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#333333").s().p("AgLAlIgIgEQgEgDgDgFQgCgEAAgGQABgGACgEQADgFADgCIAKgDIALgCIAEAAIAEABIAEABIABAAIAAgEIAAgGIgCgFIgGgFQgDgBgEAAIgLABIgIACIgBgLIAJgCIALgBQAIAAAGACQAFACADAEQADAEACAFQABAFAAAFIAAAtIgEABIgHABIgJAAIgIABIgLgBgAgCADIgGACIgEADQgCADAAAEQgBAGAFAEQAFACAGAAIAIAAIAGgBIAAgVIgEgBIgHgBIgGAAg");
	this.shape_85.setTransform(251.35,219.85);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#333333").s().p("AgUAlIAAhEIAMgEQAHgBAHAAIAEAAIAEABIAEAAIADABIgCALIgFgBIgKgBIgGABIgFABIAAA8g");
	this.shape_86.setTransform(245.675,219.775);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#333333").s().p("AgFAzIAAhIIALAAIAABIgAgFgkQgCgCAAgEQAAgEACgDQADgBACAAQADAAADABQACADAAAEQAAAEgCACQgDACgDABQgCgBgDgCg");
	this.shape_87.setTransform(240.75,218.35);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#333333").s().p("AgKAjQgHgCgFgGQgEgEgCgIQgDgHAAgIQAAgIADgIQADgHAFgFQAEgEAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAGAMgBIALgBIAHgCIACALIgIADIgOABQgIAAgHgDgAgFgZIgGAFQgDADgBAEIgCAHIAjAAQABgJgFgFQgFgGgIAAQgDAAgDABg");
	this.shape_88.setTransform(235.025,219.85);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#333333").s().p("AgFAzIAAhIIALAAIAABIgAgFgkQgDgCAAgEQAAgEADgDQACgBADAAQADAAADABQACADAAAEQAAAEgCACQgDACgDABQgDgBgCgCg");
	this.shape_89.setTransform(229.4,218.35);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#333333").s().p("AgFAwIgJgVIgKgWIgJgYIgLgcIAPAAIAPAqIAOAmQAIgTAHgTIAPgqIAOAAIgKAcIgJAYIgKAWIgJAVg");
	this.shape_90.setTransform(223.1,218.65);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#333333").s().p("AgRAkIgIgCIADgLIAHACQAFACAIAAQAHAAAEgCQAEgCAAgFQAAgEgEgEIgMgFIgIgEIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADADIAFADIAGADIAJADIAHAEQADADABADQACADAAAGQAAAKgIAFQgHAFgNAAQgKAAgFgCg");
	this.shape_91.setTransform(212.125,219.85);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#333333").s().p("AgKAjQgHgCgFgGQgEgEgCgIQgDgHAAgIQAAgIADgIQADgHAFgFQAEgEAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAGAMgBIALgBIAHgCIACALIgIADIgOABQgIAAgHgDgAgFgZIgGAFQgDADgBAEIgCAHIAjAAQABgJgFgFQgFgGgIAAQgDAAgDABg");
	this.shape_92.setTransform(205.025,219.85);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#333333").s().p("AgFAkIgOghQgIgSgFgVIAOAAIAEAQIAFAPIAFANIAEAOIAFgOIAFgNIAFgPIAEgQIAOAAQgGAVgHASIgOAhg");
	this.shape_93.setTransform(197.675,219.85);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#333333").s().p("AgGAyQgFgFAAgLIAAhWIAMgCIAABWIABAGQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAIACACIAGABIgCALQgLgBgFgEg");
	this.shape_94.setTransform(192.6,218.15);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgDgFQgCgEAAgGQABgGACgEQADgFAEgCIAJgDIALgCIAEAAIAEABIAEABIACAAIAAgEIgBgGIgCgFIgGgFQgDgBgEAAIgLABIgHACIgCgLIAJgCIALgBQAIAAAGACQAFACADAEQADAEACAFQABAFAAAFIAAAtIgEABIgHABIgJAAIgIABIgKgBgAgCADIgGACIgEADQgCADgBAEQAAAGAFAEQAFACAGAAIAIAAIAHgBIAAgVIgFgBIgHgBIgGAAg");
	this.shape_95.setTransform(186.45,219.85);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#333333").s().p("AgEAyIgFgBIACgIIADABIAEAAQAEAAAAgDIgBgDIgDgCIgBAAIABgFIABgEQgGgBgFgDQgGgDgDgFQgEgFgCgHQgCgEAAgIQAAgIADgIQACgGAFgGQAEgFAHgDQAGgCAHAAIAKAAIAJADIgDALIgGgCIgIgBQgKAAgGAHQgGAGAAAOQAAAGABAEQACAEADAEQACADAFADQADABAHAAIAJgBIAHgCIACALIgDABIgFACIgFAAIgFAAIgCAEQAEACACADQACACAAAFIgBACQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAIgFADIgHABIgFgBg");
	this.shape_96.setTransform(179.975,221.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#333333").s().p("AAQAlIAAglIAAgLQgBgFgCgDQgDgDgDgBQgEgCgEAAIgEABIgFAAIgDAAIgDABIAAA8IgMAAIAAhFIALgDQAIgBAJAAQAJAAAFACQAGADAEAEQADAFABAGQABAGAAAHIAAAog");
	this.shape_97.setTransform(172.5,219.775);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_98.setTransform(164.325,219.875);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#333333").s().p("AgLAvQgIgDgGgGQgGgHgDgJQgEgKAAgMQABgLAEgJQADgKAHgGQAFgHAJgDQAJgEAJAAIALABIAJACIAGADIADABIgFAMQgDgDgIgCQgGgCgHAAQgHAAgGADQgFADgFAFQgEAFgDAHQgCAHAAAIQAAAJACAHQACAHAEAFQAFAFAFADQAGADAIAAIAKgBIAFgBIAAgkIAPAAIAAAtIgGACIgHABIgJABIgKABQgJAAgJgEg");
	this.shape_99.setTransform(155.45,218.625);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_100.setTransform(143.425,219.875);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#333333").s().p("AgGAzIAAhIIANAAIAABIgAgFgkQgDgCABgEQgBgEADgDQADgBACAAQAEAAACABQACADABAEQgBAEgCACQgCACgEABQgCgBgDgCg");
	this.shape_101.setTransform(137.55,218.35);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#333333").s().p("AARAlIAAglIgBgLQgCgFgCgDQgCgDgDgBQgEgCgDAAIgFABIgEAAIgEAAIgDABIAAA8IgMAAIAAhFIAMgDQAHgBAJAAQAJAAAFACQAGADAEAEQACAFACAGQACAGgBAHIAAAog");
	this.shape_102.setTransform(131.8,219.775);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#333333").s().p("AgNA0QgGgDgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgGAEgFQAFgFAGgDQAHgDAGAAQAHAAAHADQAGADAFAFQAEAFADAGQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGADQgHADgHAAQgGAAgHgDgAgOgCQgGAGAAAMQAAANAGAHQAGAHAIAAQAKAAAFgHQAGgHAAgNQAAgMgGgGQgFgHgKAAQgIAAgGAHgAAAgoIgNAMIgFgGIASgUIATAUIgFAGg");
	this.shape_103.setTransform(123.625,218.225);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#333333").s().p("AgJA0QgHgCgFgFQgEgFgDgHQgDgHAAgJQAAgJADgGQACgGADgGQAFgEAGgDQAGgDAHAAQAGAAAFABIAHAEIAAglIANgCIAABpIgMADIgQABQgHAAgGgDgAgGgGQgEABgDAEQgCADgBAEQgCAFABAGQAAANAGAHQAHAGAJAAIAIAAIAGgBIAAgtQgCgCgFgBQgEgDgGAAQgEAAgEADg");
	this.shape_104.setTransform(115.15,218.15);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#333333").s().p("AgGAzIAAhIIANAAIAABIgAgFgkQgCgCgBgEQABgEACgDQACgBADAAQADAAADABQADADgBAEQABAEgDACQgDACgDABQgDgBgCgCg");
	this.shape_105.setTransform(109.5,218.35);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#333333").s().p("AgRAkIgIgCIADgLIAHACQAFACAIAAQAHAAAEgCQAEgCAAgFQAAgEgEgEIgMgFIgIgEIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADADIAFADIAGADIAJADIAHAEQADADABADQACADAAAGQAAAKgIAFQgHAFgNAAQgKAAgFgCg");
	this.shape_106.setTransform(104.625,219.85);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#333333").s().p("AgRAkIgIgCIADgLIAHACQAFACAIAAQAHAAAEgCQAEgCAAgFQAAgEgEgEIgMgFIgIgEIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADADIAFADIAGADIAJADIAHAEQADADABADQACADAAAGQAAAKgIAFQgHAFgNAAQgKAAgFgCg");
	this.shape_107.setTransform(98.375,219.85);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_108.setTransform(91.125,219.875);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#333333").s().p("AghAxIAAhfIANgBIANgBQATAAALAIQALAIAAAPQAAAJgDAGQgDAEgGAEQgFAEgIACQgJABgJAAIgLAAIAAAkgAgUgkIAAAmIALAAIALgCIAKgCQADgBADgFQACgEAAgFQAAgGgCgEQgDgDgDgCQgEgCgFgBIgJgBIgOAAg");
	this.shape_109.setTransform(83.125,218.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#333333").s().p("AgRAkIgIgCIADgLIAHACQAFACAIAAQAHAAAEgCQAEgCAAgFQAAgEgEgEIgMgFIgIgEIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADADIAFADIAGADIAJADIAHAEQADADABADQACADAAAGQAAAKgIAFQgHAFgNAAQgKAAgFgCg");
	this.shape_110.setTransform(72.125,219.85);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#333333").s().p("AgNAjQgFgDgEgEQgDgFgCgGQgBgGAAgHIAAgoIANAAIAAAlQAAANAEAGQAEAGAJAAIAEAAIAEgBIAEAAIACgBIAAg8IANAAIAABGIgLACIgRABQgIAAgGgCg");
	this.shape_111.setTransform(64.925,219.925);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#333333").s().p("AgKAjQgHgCgFgGQgEgEgCgIQgDgHAAgIQAAgIADgIQADgHAFgFQAEgEAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAGAMgBIALgBIAHgCIACALIgIADIgOABQgIAAgHgDgAgFgZIgGAFQgDADgBAEIgCAHIAjAAQABgJgFgFQgFgGgIAAQgDAAgDABg");
	this.shape_112.setTransform(56.975,219.85);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#333333").s().p("AAQA2IAAgmIgBgLQgBgFgCgCQgCgDgDgBQgDgCgFAAIgEABIgFAAIgDABIgCABIAAA7IgOAAIAAhpIAOgCIAAAlIAIgCIAHgBQAIAAAGACQAGADADAEQADAFACAFQABAGABAHIAAApg");
	this.shape_113.setTransform(49.15,218.075);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#333333").s().p("AgIAvQgEgCgDgEQgEgEgBgGIAAgMIAAhAIAMgDIAAAXIAbAAIAAALIgbAAIAAAhIABAJIADAFQACACACABIAFABQAGAAADgBIAGgCIACALIgHACQgFABgGAAQgGABgGgCg");
	this.shape_114.setTransform(42.65,218.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgDgFQgBgEAAgGQgBgGADgEQADgFAEgCIAJgDIALgCIAEAAIAEABIAEABIACAAIAAgEIgBgGIgDgFIgEgFQgEgBgEAAIgLABIgHACIgCgLIAJgCIALgBQAIAAAGACQAFACADAEQADAEACAFQACAFgBAFIAAAtIgEABIgHABIgIAAIgJABIgKgBgAgCADIgGACIgEADQgDADAAAEQAAAGAFAEQAFACAGAAIAIAAIAHgBIAAgVIgFgBIgIgBIgFAAg");
	this.shape_115.setTransform(35.6,219.85);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#333333").s().p("AAnAwIgCgnIgDgiIgDAHIgGAKIgFALIgGANIgFALIgEAIIgJAAIgEgIIgFgLIgGgNIgFgLIgGgKIgDgHIgDAiIgCAnIgMAAIABgZIABgYIACgZIADgVIAMAAIAIAOIAJARIAIASIAGAQIAHgQIAJgSIAIgRIAIgOIAMAAQAGAvABAwg");
	this.shape_116.setTransform(26.1,218.65);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#333333").s().p("AgLAlIgIgEQgEgDgDgFQgCgEAAgGQABgGACgFQADgEADgCIAKgDIALgBIAEAAIAEAAIAEABIABAAIAAgDIAAgHIgCgGIgGgDQgDgCgEAAIgLABIgIACIgBgLIAJgCIALgBQAIAAAGACQAFACADADQADAFACAEQABAGAAAFIAAAuIgEAAIgHABIgJABIgIAAIgLgBgAgCADIgGACIgEAEQgCACAAADQgBAIAFACQAFADAGAAIAIAAIAGgBIAAgWIgEAAIgHgBIgGAAg");
	this.shape_117.setTransform(183.85,202.15);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#333333").s().p("AgRAlIgIgDIADgLIAHACQAFACAIAAQAHAAAEgCQAEgCAAgEQAAgGgEgCIgMgHIgIgDIgGgDQgDgCgCgEQgCgDAAgFQAAgKAIgGQAHgFALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAFIAAAEIADADIAFADIAGACIAJAEIAHAEQADADABADQACAEAAAFQAAAKgIAFQgHAFgNAAQgKAAgFgBg");
	this.shape_118.setTransform(177.275,202.15);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#333333").s().p("AgNAjQgFgDgEgEQgDgFgCgGQgBgGAAgHIAAgoIANAAIAAAlQAAANAEAGQAEAGAJAAIAEAAIAEgBIAEAAIACgBIAAg8IANAAIAABGIgLACIgRABQgIAAgGgCg");
	this.shape_119.setTransform(170.075,202.225);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_120.setTransform(161.975,202.175);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#333333").s().p("AgMAyIgJgCIgGgCIgFgCIAEgLIAKAEQAHACAJAAQAVAAAAgOQAAgFgCgDIgFgGIgIgEIgIgDIgKgEQgEgBgEgEQgDgDgCgEQgCgEAAgHQAAgMAIgHQAJgIAOAAQAJAAAHACQAIACADADIgFALQgCgCgGgCQgGgCgIAAIgGABQgDABgDACIgEAEIgBAGQAAAEABADIAEAEIAHAEIAHADIAMAFIAJAFQAEAEACAFQACAFAAAGQAAANgJAHQgKAHgQAAIgKgBg");
	this.shape_121.setTransform(154.125,200.925);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#333333").s().p("AgLAlIgJgEQgDgDgCgFQgCgEAAgGQAAgGACgFQADgEAEgCIAKgDIAKgBIAEAAIAEAAIADABIACAAIAAgDIAAgHIgDgGIgEgDQgEgCgEAAIgLABIgHACIgCgLIAIgCIAMgBQAIAAAFACQAGACADADQADAFACAEQABAGABAFIAAAuIgGAAIgGABIgIABIgJAAIgLgBgAgCADIgGACIgFAEQgCACAAADQABAIAEACQAEADAIAAIAIAAIAFgBIAAgWIgEAAIgIgBIgFAAg");
	this.shape_122.setTransform(143.3,202.15);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#333333").s().p("AgUAlIAAhEIAMgEQAHgBAHAAIAEAAIAEABIAEAAIADABIgCALIgFgBIgKgBIgGABIgFABIAAA8g");
	this.shape_123.setTransform(137.625,202.075);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#333333").s().p("AgGA0IAAhIIANAAIAABIgAgFgkQgCgCgBgEQABgEACgDQACgCADAAQAEAAACACQACADABAEQgBAEgCACQgCADgEgBQgDABgCgDg");
	this.shape_124.setTransform(132.7,200.65);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#333333").s().p("AgKAkQgHgEgFgEQgEgGgCgHQgDgHAAgHQAAgKADgGQADgIAFgFQAEgFAGgCQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAGAMAAIALgCIAHgCIACALIgIADIgOABQgIAAgHgCgAgFgYIgGAEQgDADgBADIgCAIIAjAAQABgIgFgHQgFgFgIAAQgDAAgDACg");
	this.shape_125.setTransform(126.975,202.15);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#333333").s().p("AgFAlIgOgiQgIgSgFgUIAOAAIAEAOIAFAQIAFAOIAEANIAFgNIAFgOIAFgQIAEgOIAOAAQgGAUgHASIgOAig");
	this.shape_126.setTransform(119.625,202.15);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#333333").s().p("AgGA0IAAhIIANAAIAABIgAgFgkQgCgCgBgEQABgEACgDQACgCADAAQAEAAACACQACADAAAEQAAAEgCACQgCADgEgBQgDABgCgDg");
	this.shape_127.setTransform(114.35,200.65);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#333333").s().p("AgGAxQgFgEAAgKIAAhXIAMgCIAABWIABAGQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAIACACIAGABIgCALQgLAAgFgGg");
	this.shape_128.setTransform(111.05,200.45);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#333333").s().p("AgRAwQgIgEgGgGQgHgGgDgKQgFgJAAgNQAAgLAFgKQADgJAHgHQAGgGAIgDQAJgEAIAAQAJAAAJAEQAIADAHAGQAGAHADAJQAEAKAAALQAAANgEAJQgDAKgGAGQgHAGgIAEQgJADgJAAQgIAAgJgDgAgMgjQgHADgDAFQgEAFgDAHQgCAHAAAIQAAAJACAHQADAHAEAFQADAGAHACQAFADAHAAQAHAAAGgDQAGgCAFgGQADgFADgHQACgHAAgJQAAgIgCgHQgDgHgDgFQgFgFgGgDQgGgDgHAAQgHAAgFADg");
	this.shape_129.setTransform(103.3,200.925);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#333333").s().p("AgKAkQgHgEgFgEQgEgGgCgHQgDgHAAgHQAAgKADgGQADgIAFgFQAEgFAGgCQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAGAMAAIALgCIAHgCIACALIgIADIgOABQgIAAgHgCgAgFgYIgGAEQgDADgBADIgCAIIAjAAQABgIgFgHQgFgFgIAAQgDAAgDACg");
	this.shape_130.setTransform(90.625,202.15);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#333333").s().p("AgJA1QgHgDgFgFQgEgFgDgHQgDgHAAgJQAAgJADgGQABgHAEgEQAFgGAGgCQAGgDAHAAQAGAAAFACIAHADIAAglIANgCIAABpIgMADIgPABQgIAAgGgCgAgGgGQgEACgCADQgDACgBAFQgBAGgBAFQABANAGAHQAHAHAJAAIAJgBIAFgBIAAgtQgCgCgFgBQgEgCgGAAQgEAAgEACg");
	this.shape_131.setTransform(82.4,200.45);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#333333").s().p("AgRAlIgIgDIADgLIAHACQAFACAIAAQAHAAAEgCQAEgCAAgEQAAgGgEgCIgMgHIgIgDIgGgDQgDgCgCgEQgCgDAAgFQAAgKAIgGQAHgFALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAFIAAAEIADADIAFADIAGACIAJAEIAHAEQADADABADQACAEAAAFQAAAKgIAFQgHAFgNAAQgKAAgFgBg");
	this.shape_132.setTransform(72.125,202.15);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#333333").s().p("AgNAjQgFgDgEgEQgDgFgCgGQgBgGAAgHIAAgoIANAAIAAAlQAAANAEAGQAEAGAJAAIAEAAIAEgBIAEAAIACgBIAAg8IANAAIAABGIgLACIgRABQgIAAgGgCg");
	this.shape_133.setTransform(64.925,202.225);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#333333").s().p("AgKAkQgHgEgFgEQgEgGgCgHQgDgHAAgHQAAgKADgGQADgIAFgFQAEgFAGgCQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAGAMAAIALgCIAHgCIACALIgIADIgOABQgIAAgHgCgAgFgYIgGAEQgDADgBADIgCAIIAjAAQABgIgFgHQgFgFgIAAQgDAAgDACg");
	this.shape_134.setTransform(56.975,202.15);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#333333").s().p("AAQA2IAAgmIgBgLQgBgFgCgCQgCgDgDgBQgDgCgFAAIgEABIgFAAIgDABIgCABIAAA7IgOAAIAAhpIAOgCIAAAlIAIgCIAHgBQAIAAAGACQAGADADAEQADAFACAFQABAGABAHIAAApg");
	this.shape_135.setTransform(49.15,200.375);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#333333").s().p("AgIAuQgEgCgDgDQgEgEgBgGIAAgMIAAhAIAMgCIAAAWIAbAAIAAALIgbAAIAAAgIABAJIADAHQACABACABIAFABQAGAAADgBIAGgCIACALIgHACQgFABgGAAQgGAAgGgCg");
	this.shape_136.setTransform(42.65,201.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgDgFQgBgEAAgGQgBgGADgFQADgEAEgCIAJgDIALgBIAEAAIAEAAIAEABIACAAIAAgDIgBgHIgDgGIgEgDQgEgCgEAAIgLABIgHACIgCgLIAJgCIALgBQAIAAAGACQAFACADADQADAFACAEQACAGgBAFIAAAuIgEAAIgHABIgIABIgJAAIgKgBgAgCADIgGACIgEAEQgDACAAADQAAAIAFACQAFADAGAAIAIAAIAHgBIAAgWIgFAAIgIgBIgFAAg");
	this.shape_137.setTransform(35.6,202.15);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#333333").s().p("AAnAxIgCgoIgDgiIgDAHIgGAKIgFALIgGANIgFAKIgEAJIgJAAIgEgJIgFgKIgGgNIgFgLIgGgKIgDgHIgDAiIgCAoIgMAAIABgaIABgYIACgZIADgVIAMAAIAIAOIAJARIAIASIAGAQIAHgQIAJgSIAIgRIAIgOIAMAAQAGAuABAyg");
	this.shape_138.setTransform(26.1,200.95);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#333333").s().p("AgRAkIgIgCIADgLIAHADQAFABAIAAQAHAAAEgCQAEgCAAgEQAAgFgEgEIgMgGIgIgDIgGgDQgDgCgCgEQgCgDAAgFQAAgKAIgGQAHgFALAAIAGABIAGAAIAFABIADABIgDALIgGgCIgLgBQgEAAgEACQgEACAAAFIAAAEIADAEIAFACIAGACIAJAFIAHADQADACABAEQACAEAAAFQAAAKgIAFQgHAFgNAAQgKAAgFgCg");
	this.shape_139.setTransform(163.875,184.45);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_140.setTransform(156.625,184.475);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#333333").s().p("AgUAlIAAhEIAMgEQAHgBAHAAIAEAAIAEABIAEAAIADABIgCALIgFgBIgKgBIgGABIgFABIAAA8g");
	this.shape_141.setTransform(150.275,184.375);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#333333").s().p("AgFAzIAAhHIALAAIAABHgAgFgkQgCgCAAgEQAAgEACgCQADgCACAAQADAAADACQACACAAAEQAAAEgCACQgDACgDAAQgCAAgDgCg");
	this.shape_142.setTransform(145.35,182.95);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#333333").s().p("AgKAkQgHgEgFgFQgEgEgCgHQgDgHAAgIQAAgJADgIQADgHAFgEQAEgFAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAACIgxAAQABAMAGAGQAFAFAMABIALgBIAHgDIACALIgIADIgOABQgIAAgHgCgAgFgZIgGAFQgDADgBADIgCAIIAjAAQABgJgFgFQgFgGgIAAQgDAAgDABg");
	this.shape_143.setTransform(139.625,184.45);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#333333").s().p("AgKA1QgGgDgFgFQgFgFgDgHQgCgHAAgJQAAgIACgIQADgFAEgFQAEgFAGgDQAGgDAHAAQAGAAAFACIAHADIAAglIANgCIAABqIgLACIgRABQgHAAgHgCgAgGgHQgEACgCAEQgDADgBAFQgCAEAAAGQAAANAHAHQAGAGAKABIAJgBIAFgBIAAgtQgCgCgEgCQgFgCgFABQgFgBgEACg");
	this.shape_144.setTransform(131.4,182.75);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#333333").s().p("AgKAkQgHgEgFgFQgEgEgCgHQgDgHAAgIQAAgJADgIQADgHAFgEQAEgFAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAACIgxAAQABAMAGAGQAFAFAMABIALgBIAHgDIACALIgIADIgOABQgIAAgHgCgAgFgZIgGAFQgDADgBADIgCAIIAjAAQABgJgFgFQgFgGgIAAQgDAAgDABg");
	this.shape_145.setTransform(123.525,184.45);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#333333").s().p("AAmAwIgBgmIgDgjIgEAHIgEAKIgGALIgGAMIgFAMIgEAIIgKAAIgDgIIgFgMIgGgMIgFgLIgGgKIgDgHIgCAjIgDAmIgNAAIABgZIACgYIACgYIADgXIALAAIAJAPIAIASIAJARIAGARIAIgRIAIgRIAIgSIAIgPIANAAQAEAwACAwg");
	this.shape_146.setTransform(113.6,183.25);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgDgEQgBgFAAgGQgBgGADgFQADgEAEgBIAJgFIALgBIAEAAIAEABIAEAAIACABIAAgDIgBgHIgDgFIgEgFQgEgBgEAAIgLABIgHACIgCgLIAJgCIALgBQAIAAAGACQAFACADAEQADADACAGQACAEgBAHIAAAtIgEAAIgHABIgJAAIgIABIgKgBgAgCADIgGACIgEAEQgDACAAAEQAAAGAFAEQAFACAGAAIAIAAIAHgBIAAgWIgFgBIgIgBIgFABg");
	this.shape_147.setTransform(100.4,184.45);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#333333").s().p("AgFAkIgOghQgIgSgFgUIAOAAIAEAPIAFAOIAFAPIAEAMIAFgMIAFgPIAFgOIAEgPIAOAAQgGAUgHASIgOAhg");
	this.shape_148.setTransform(93.475,184.45);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#333333").s().p("AgGAyQgFgFAAgKIAAhXIAMgCIAABXIABAEQAAABAAABQAAAAAAABQAAAAABAAQAAABAAAAIADACIAGABIgCALQgLAAgFgFg");
	this.shape_149.setTransform(88.4,182.75);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#333333").s().p("AgGAzIAAhHIAMAAIAABHgAgFgkQgDgCABgEQgBgEADgCQADgCACAAQADAAADACQADACAAAEQAAAEgDACQgDACgDAAQgCAAgDgCg");
	this.shape_150.setTransform(84.35,182.95);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#333333").s().p("AgMAyIgJgCIgGgCIgFgCIAEgLIAKAEQAHACAJAAQAVAAAAgOQAAgFgCgDIgFgGIgIgEIgIgDIgKgEQgEgBgEgEQgDgDgCgEQgCgEAAgHQAAgMAIgHQAJgIAOAAQAJAAAHACQAIACADADIgFALQgCgCgGgCQgGgCgIAAIgGABQgDABgDACIgEAEIgBAGQAAAEABADIAEAEIAHAEIAHADIAMAFIAJAFQAEAEACAFQACAFAAAGQAAANgJAHQgKAHgQAAIgKgBg");
	this.shape_151.setTransform(78.875,183.225);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_152.setTransform(67.775,184.475);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#333333").s().p("AgFAkIgOghQgIgSgFgUIAOAAIAEAPIAFAOIAFAPIAEAMIAFgMIAFgPIAFgOIAEgPIAOAAQgGAUgHASIgOAhg");
	this.shape_153.setTransform(60.175,184.45);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgDgEQgCgFABgGQAAgGACgFQADgEADgBIAKgFIALgBIAEAAIAEABIAEAAIACABIAAgDIgBgHIgCgFIgGgFQgDgBgEAAIgLABIgIACIgBgLIAJgCIALgBQAIAAAGACQAFACADAEQADADACAGQABAEAAAHIAAAtIgEAAIgHABIgJAAIgIABIgKgBgAgCADIgGACIgEAEQgCACgBAEQAAAGAFAEQAFACAGAAIAIAAIAHgBIAAgWIgFgBIgHgBIgGABg");
	this.shape_154.setTransform(52.8,184.45);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#333333").s().p("AgHAuQgGgBgCgEQgDgEgCgFIgBgNIAAhAIAOgCIAAAWIAaAAIAAALIgaAAIAAAgIAAAJIACAGQADADACAAIAFABQAFAAAEgCIAGgBIABAKIgGADQgFACgGAAQgHAAgEgDg");
	this.shape_155.setTransform(46.9,183.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#333333").s().p("AgRAkIgIgCIADgLIAHADQAFABAIAAQAHAAAEgCQAEgCAAgEQAAgFgEgEIgMgGIgIgDIgGgDQgDgCgCgEQgCgDAAgFQAAgKAIgGQAHgFALAAIAGABIAGAAIAFABIADABIgDALIgGgCIgLgBQgEAAgEACQgEACAAAFIAAAEIADAEIAFACIAGACIAJAFIAHADQADACABAEQACAEAAAFQAAAKgIAFQgHAFgNAAQgKAAgFgCg");
	this.shape_156.setTransform(40.575,184.45);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#333333").s().p("AgNAjQgFgDgEgEQgDgFgCgGQgBgGAAgHIAAgoIANAAIAAAlQAAANAEAGQAEAGAJAAIAEAAIAEgBIAEAAIACgBIAAg8IANAAIAABGIgLACIgRABQgIAAgGgCg");
	this.shape_157.setTransform(33.375,184.525);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#333333").s().p("AgLAvQgIgDgGgGQgGgHgDgJQgDgKgBgMQAAgLAFgJQADgKAHgGQAFgHAJgDQAJgEAIAAIAMABIAJACIAFADIAEABIgFAMQgEgDgGgCQgHgCgHAAQgIAAgEADQgGADgFAFQgEAFgCAHQgDAHAAAIQAAAJACAHQACAHAFAFQADAFAHADQAEADAJAAIAKgBIAFgBIAAgkIAPAAIAAAtIgGACIgHABIgJABIgKABQgJAAgJgEg");
	this.shape_158.setTransform(24.65,183.225);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_159.setTransform(230.675,166.775);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#333333").s().p("AARA2IAAgmIgBgLQgCgFgCgCQgCgDgDgBQgDgCgEAAIgFABIgEAAIgEABIgDABIAAA7IgMAAIAAhpIAMgCIAAAlIAJgCIAHgBQAIAAAGACQAGADADAEQAEAFABAFQACAGgBAHIAAApg");
	this.shape_160.setTransform(222.6,164.975);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#333333").s().p("AgGAyQgFgFAAgLIAAhWIAMgCIAABXIABAFQAAAAAAABQAAAAAAABQABAAAAAAQAAABAAAAIADACIAGABIgCALQgLgBgFgEg");
	this.shape_161.setTransform(217,165.05);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#333333").s().p("AgKAjQgHgCgFgGQgEgEgCgHQgDgIAAgIQAAgIADgIQADgHAFgFQAEgEAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAGAMgBIALgBIAHgCIACALIgIADIgOABQgIAAgHgDgAgFgZIgGAFQgDADgBAEIgCAHIAjAAQABgJgFgFQgFgGgIAAQgDAAgDABg");
	this.shape_162.setTransform(210.725,166.75);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_163.setTransform(202.725,166.775);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#333333").s().p("AgKAwQgIgEgGgGQgGgHgDgJQgEgKAAgMQAAgLAEgJQAEgKAGgGQAGgHAJgDQAIgEAJAAIALABIAIACIAGADIADABIgEALIgEgBIgFgCIgHgCIgHgBQgIAAgFADQgGADgEAFQgFAFgCAHQgCAHAAAIQAAAJACAHQACAHAEAFQAEAFAGADQAFADAIAAQAKAAAGgCIAJgDIAEALIgEABIgGACIgJACIgLABQgJAAgJgDg");
	this.shape_164.setTransform(194.475,165.525);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#333333").s().p("AgLAlIgJgEQgDgDgCgFQgCgEgBgGQAAgGADgEQACgFAEgCIALgDIAKgCIAEAAIAEABIADABIACAAIAAgEIAAgGIgCgFIgGgFQgDgBgEAAIgLABIgIACIgBgLIAIgCIAMgBQAIAAAFACQAGACADAEQAEAEABAFQABAFABAFIAAAtIgGABIgGABIgIAAIgJABIgLgBgAgCADIgGACIgFADQgBADAAAEQAAAGAEADQAEADAIAAIAIAAIAFgBIAAgVIgEgBIgIgBIgFAAg");
	this.shape_165.setTransform(182.8,166.75);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#333333").s().p("AgFAkIgOghQgIgSgFgVIAOAAIAEAQIAFAPIAFANIAEAOIAFgOIAFgNIAFgPIAEgQIAOAAQgGAVgHASIgOAhg");
	this.shape_166.setTransform(175.875,166.75);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#333333").s().p("AgGAyQgFgFAAgLIAAhWIAMgCIAABXIAAAFQABAAAAABQAAAAAAABQABAAAAAAQAAABABAAIACACIAGABIgCALQgLgBgFgEg");
	this.shape_167.setTransform(170.8,165.05);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#333333").s().p("AgFAzIAAhIIALAAIAABIgAgFgkQgDgCAAgEQAAgEADgDQADgBACAAQADAAADABQADADgBAEQABAEgDACQgDACgDABQgCgBgDgCg");
	this.shape_168.setTransform(166.75,165.25);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#333333").s().p("AgMAyIgJgCIgGgCIgFgCIAEgLIAKAEQAHACAJAAQAVAAAAgOQAAgFgCgDIgFgGIgIgEIgIgDIgKgEQgEgBgEgEQgDgDgCgEQgCgEAAgHQAAgMAIgHQAJgIAOAAQAJAAAHACQAIACADADIgFALQgCgCgGgCQgGgCgIAAIgGABQgDABgDACIgEAEIgBAGQAAAEABADIAEAEIAHAEIAHADIAMAFIAJAFQAEAEACAFQACAFAAAGQAAANgJAHQgKAHgQAAIgKgBg");
	this.shape_169.setTransform(161.275,165.525);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#333333").s().p("AgRAkIgIgCIADgLIAHACQAFACAIAAQAHAAAEgCQAEgCAAgFQAAgEgEgEIgMgFIgIgEIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADADIAFADIAGADIAJADIAHAEQADADABADQACADAAAGQAAAKgIAFQgHAFgNAAQgKAAgFgCg");
	this.shape_170.setTransform(151.175,166.75);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#333333").s().p("AARAlIAAglIgBgLQgBgFgDgDQgBgDgEgBQgEgCgDAAIgFABIgEAAIgEAAIgDABIAAA8IgMAAIAAhFIALgDQAIgBAJAAQAJAAAFACQAGADAEAEQADAFABAGQABAGAAAHIAAAog");
	this.shape_171.setTransform(144.05,166.675);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#333333").s().p("AgFAzIAAhIIALAAIAABIgAgFgkQgCgCAAgEQAAgEACgDQADgBACAAQAEAAACABQADADAAAEQAAAEgDACQgCACgEABQgCgBgDgCg");
	this.shape_172.setTransform(138.25,165.25);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#333333").s().p("AgcAwIAAhfIANAAIAABTIAsAAIAAAMg");
	this.shape_173.setTransform(133.375,165.55);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_174.setTransform(121.875,166.775);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#333333").s().p("AgHAvQgGgCgCgEQgDgEgCgGIgBgMIAAhAIAOgDIAAAXIAaAAIAAALIgaAAIAAAhIAAAJIACAFQADACACABIAFABQAFAAAEgBIAGgCIABALIgGACQgFABgGABQgHAAgEgCg");
	this.shape_175.setTransform(115.3,165.7);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#333333").s().p("AgUAlIAAhEIAMgEQAHgBAHAAIAEAAIAEABIAEAAIADABIgCALIgFgBIgKgBIgGABIgFABIAAA8g");
	this.shape_176.setTransform(109.875,166.675);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#333333").s().p("AgKAjQgHgCgFgGQgEgEgCgHQgDgIAAgIQAAgIADgIQADgHAFgFQAEgEAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAGAMgBIALgBIAHgCIACALIgIADIgOABQgIAAgHgDgAgFgZIgGAFQgDADgBAEIgCAHIAjAAQABgJgFgFQgFgGgIAAQgDAAgDABg");
	this.shape_177.setTransform(102.725,166.75);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#333333").s().p("AgUA2IgLgDIAAhnIANgCIAAAnIAHgEQAFgBAGAAQAHAAAGADQAGADAFAEQAEAGACAGQACAGAAAJQAAAJgDAHQgCAHgFAFQgFAFgGACQgHADgHAAIgRgBgAgLgGIgHADIAAAtIAFABIAJAAQAKAAAGgGQAGgHAAgNIgBgLQgBgEgCgDQgDgEgEgBQgEgDgEAAQgGAAgEADg");
	this.shape_178.setTransform(94.925,165.05);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_179.setTransform(86.475,166.775);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#333333").s().p("AAWAxIgGgLIgHgKIgGgKIgFgHIgEAAIgEAAIgMAAIAAAmIgOAAIAAhfIANgCIANAAQATAAALAIQALAHAAAPQAAAKgFAHQgFAGgKADIAFAIIAIAKIAHAMIAGALgAgWgkIAAAkIAKAAIAMAAQAFAAAEgDQADgCADgDQACgDAAgHQAAgFgCgEIgGgFQgEgCgFgBIgJgBIgNAAg");
	this.shape_180.setTransform(78.425,165.5);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#333333").s().p("AgGAzIAAhIIANAAIAABIgAgFgkQgCgCgBgEQABgEACgDQACgBADAAQADAAADABQADADgBAEQABAEgDACQgDACgDABQgDgBgCgCg");
	this.shape_181.setTransform(68.55,165.25);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgDgFQgBgEAAgGQgBgGADgEQACgFAFgCIAKgDIAKgCIAEAAIAEABIADABIADAAIAAgEIgBgGIgDgFIgEgFQgEgBgEAAIgLABIgHACIgCgLIAJgCIALgBQAIAAAFACQAGACADAEQADAEACAFQACAFgBAFIAAAtIgEABIgHABIgIAAIgJABIgKgBgAgCADIgGACIgFADQgCADAAAEQABAGAEADQAFADAGAAIAJAAIAGgBIAAgVIgFgBIgIgBIgFAAg");
	this.shape_182.setTransform(62.95,166.75);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#333333").s().p("AAQAlIAAglIAAgLQgBgFgCgDQgDgDgDgBQgEgCgEAAIgEABIgEAAIgEAAIgDABIAAA8IgMAAIAAhFIALgDQAIgBAJAAQAJAAAFACQAGADAEAEQADAFABAGQABAGAAAHIAAAog");
	this.shape_183.setTransform(55.5,166.675);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#333333").s().p("AgKAjQgHgCgFgGQgEgEgCgHQgDgIAAgIQAAgIADgIQADgHAFgFQAEgEAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAGAMgBIALgBIAHgCIACALIgIADIgOABQgIAAgHgDgAgFgZIgGAFQgDADgBAEIgCAHIAjAAQABgJgFgFQgFgGgIAAQgDAAgDABg");
	this.shape_184.setTransform(47.475,166.75);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_185.setTransform(39.475,166.775);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#333333").s().p("AgGAzIAAhIIANAAIAABIgAgFgkQgDgCABgEQgBgEADgDQADgBACAAQAEAAACABQACADABAEQgBAEgCACQgCACgEABQgCgBgDgCg");
	this.shape_186.setTransform(33.6,165.25);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#333333").s().p("AgGAyQgFgFAAgLIAAhWIAMgCIAABXIAAAFQABAAAAABQAAAAAAABQAAAAABAAQAAABABAAIADACIAFABIgCALQgLgBgFgEg");
	this.shape_187.setTransform(30.3,165.05);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#333333").s().p("AgeAwIAAhfIA5AAIAAALIgsAAIAAAdIAoAAIAAAKIgoAAIAAAiIAxAAIAAALg");
	this.shape_188.setTransform(24.35,165.55);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#333333").s().p("AgTAzQgKgEgGgHQgHgIgDgKQgEgKAAgMQAAgMAEgKQADgKAHgHQAHgHAJgEQAJgEAKAAQALAAAJAEQAKAEAGAHQAHAHAEAKQADAKAAAMQAAAMgDAKQgEAKgHAIQgGAHgJAEQgKAEgLAAQgKAAgJgEgAgSgYQgGAJAAAPQAAAQAGAIQAHAKALAAQAMAAAHgKQAGgIAAgQQAAgPgGgJQgHgJgMAAQgLAAgHAJg");
	this.shape_189.setTransform(189.825,137.15);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#333333").s().p("AguBIIAAiJIASgEQALgCAMAAQALAAAKAEQAKAEAHAHQAGAHAEAKQAEAKAAANQAAAMgDAJQgDAKgGAHQgGAHgIAEQgJAEgLAAQgGAAgHgCIgKgDIAAAogAgOgxIgIABIAAA6IAJAFQAFABAGAAQAMABAGgKQAGgIAAgPQAAgQgHgJQgIgJgOAAIgHABg");
	this.shape_190.setTransform(178.2,138.85);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#333333").s().p("AgTAyQgIgEgGgGQgFgGgCgKQgCgIAAgLIAAg5IAYAAIAAA1QAAARAFAHQAFAHALAAIAJAAIAIgBIAAhTIAXAAIAABkIgSADQgKACgOAAQgMAAgIgDg");
	this.shape_191.setTransform(166.05,137.25);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#333333").s().p("AgfA2IAAhjIASgFQAKgDAMABIAGAAIAGABIAGABIAFABIgEAUIgJgCIgMgBIgHABIgHABIAABUg");
	this.shape_192.setTransform(156.975,137);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#333333").s().p("AgXBHIgRgEIAFgVQAGADAIABQAIACAJAAQANAAAHgGQAGgGAAgMIAAgEIgKAEQgGABgGAAQgKAAgIgDQgJgDgGgGQgGgGgDgKQgDgIAAgMQAAgMADgJQAEgKAHgHQAGgGAKgEQAJgEAMAAQALAAALACIASAEIAABZQAAAZgNAMQgMALgaAAQgJAAgJgBgAgNgqQgHAJAAAOQAAAPAGAGQAHAHAKAAIALgBQAFgCADgCIAAg1IgHgBIgJgBQgMAAgHAJg");
	this.shape_193.setTransform(146.175,138.875);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#333333").s().p("AgTAzQgKgEgGgHQgHgIgDgKQgEgKAAgMQAAgMAEgKQADgKAHgHQAHgHAJgEQAJgEAKAAQALAAAJAEQAKAEAGAHQAHAHAEAKQADAKAAAMQAAAMgDAKQgEAKgHAIQgGAHgJAEQgKAEgLAAQgKAAgJgEgAgSgYQgGAJAAAPQAAAQAGAIQAHAKALAAQAMAAAHgKQAGgIAAgQQAAgPgGgJQgHgJgMAAQgLAAgHAJg");
	this.shape_194.setTransform(129.975,137.15);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#333333").s().p("AgPBLQgKgEgHgHQgHgHgDgKQgEgKAAgNQAAgMADgKQADgJAGgIQAGgHAJgEQAIgEALAAQAHAAAGACIAKAEIAAgyIAYgEIAACXIgSAEQgLACgMAAQgLAAgKgEgAgPAAQgGAIAAAQQAAAQAHAJQAIAJAMAAIAKgBIAHgBIAAg7IgJgEQgFgCgGAAQgMAAgGAJg");
	this.shape_195.setTransform(117.775,134.725);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#333333").s().p("AgaA1IgLgEIAEgUIANAEQAHACAKAAQAIAAAFgCQAEgDAAgFQAAgGgEgDQgFgDgKgEIgMgFIgKgGQgEgDgCgFQgCgGAAgHQAAgOAKgJQALgIARAAQAJAAAJACQAIABAEACIgEAUIgKgEQgGgBgJAAQgGAAgFACQgEADAAAFIABAFIADADIAGAEIAHADQAJADAGAEQAGACAEAEQAEADACAFQABAFAAAHQAAAPgLAIQgLAIgTAAQgOAAgJgCg");
	this.shape_196.setTransform(102.875,137.125);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#333333").s().p("AgTAzQgKgEgGgHQgHgIgDgKQgEgKAAgMQAAgMAEgKQADgKAHgHQAHgHAJgEQAJgEAKAAQALAAAJAEQAKAEAGAHQAHAHAEAKQADAKAAAMQAAAMgDAKQgEAKgHAIQgGAHgJAEQgKAEgLAAQgKAAgJgEgAgSgYQgGAJAAAPQAAAQAGAIQAHAKALAAQAMAAAHgKQAGgIAAgQQAAgPgGgJQgHgJgMAAQgLAAgHAJg");
	this.shape_197.setTransform(92.325,137.15);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#333333").s().p("AgfA2IAAhjIASgFQAKgDAMABIAGAAIAGABIAGABIAFABIgEAUIgJgCIgMgBIgHABIgHABIAABUg");
	this.shape_198.setTransform(83.025,137);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#333333").s().p("AgcBNIgSgEIAAiTIAYgEIAAA2IAKgEQAHgCAGAAQALAAAIAEQAKAEAFAHQAGAIADAJQADAKAAAMQAAANgDAKQgFAKgGAHQgHAHgKAEQgKAEgLAAQgMAAgLgCgAgOgHQgEACgEACIAAA7IAHABIAJABQANAAAHgJQAJgJgBgQQAAgQgGgIQgGgJgMAAQgGAAgGACg");
	this.shape_199.setTransform(72.65,134.725);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#333333").s().p("AAvA2IAAg2QAAgRgEgHQgEgHgLgBQgGAAgFACIgIAEIACALIABALIAAA6IgXAAIAAg2QAAgRgEgHQgEgHgMgBIgIABIgIABIAABUIgYAAIAAhlIASgEQAMgBAMAAQALAAAHACQAHADAEAFIAFgDIAIgEIAJgCIAJgBQAMgBAIAEQAIADAFAHQAEAGACAJQACAJAAAKIAAA7g");
	this.shape_200.setTransform(57.825,137);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#333333").s().p("AgQAzQgLgEgGgIQgHgHgDgKQgDgKAAgMQAAgMAEgLQAEgKAHgHQAHgHAIgDQAJgEAIAAQAWAAAMANQAMAOAAAaIAAAEIAAAEIhEAAQABANAIAHQAIAHAOAAQAIAAAIgCIALgDIADAUIgFACIgIACIgKABIgKABQgNAAgKgEgAgHggQgEACgDAEQgDADgCAFIgCAJIAsAAQAAgFgBgFIgEgIIgHgFQgEgCgFAAQgFAAgEACg");
	this.shape_201.setTransform(43.375,137.125);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#333333").s().p("AAzBFIgCgyIgEgwIgEALIgHAOIgHAOIgHAQIgGAOIgFALIgSAAIgFgLIgFgOIgHgQIgHgOIgGgOIgGgLQgCAYgBAYIgCAyIgYAAIABgjIACgkIADgjIAEgfIAXAAIAKASIALAXIALAZIAJAWIAKgWIALgZIAMgXIAJgSIAXAAIAEAgIACAjIACAjIACAjg");
	this.shape_202.setTransform(28.85,135.425);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#333333").s().p("AgGAGQgCgDAAgDQAAgDACgDQADgCADAAQAEAAADACQACADAAADQAAADgCADQgDAEgEAAQgDAAgDgEg");
	this.shape_203.setTransform(573.625,100.1);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#333333").s().p("AgbAyIgBgCIAAgBQAAgHADgGQACgFADgFIAIgKIAJgJIAFgFIAGgHIAEgHQABgDAAgEQAAgEgBgDQgBgDgDgCQgCgCgDgBIgFgBIgIABIgGADIgEADIgDACIgGgJIADgDIAGgEIAIgDQAFgCAFAAQAOAAAIAIQAHAHAAAMQAAAGgCAEIgFAJIgIAIIgIAJIgFAGIgGAGIgEAHQgCADAAADIArAAIAAALg");
	this.shape_204.setTransform(567.825,95.875);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#333333").s().p("AgGAGQgCgDAAgDQAAgDACgDQADgCADAAQAEAAADACQACADAAADQAAADgCADQgDAEgEAAQgDAAgDgEg");
	this.shape_205.setTransform(562.275,100.1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#333333").s().p("AAGAxIAAhOIgEADIgEADIgGADIgGACIgEgJQAIgEAHgFQAHgFAGgGIAJAAIAABgg");
	this.shape_206.setTransform(555.875,96);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#333333").s().p("AgbAyIgBgCIAAgBQAAgHADgGQACgFADgFIAIgKIAJgJIAFgFIAGgHIAEgHQABgDAAgEQAAgEgBgDQgBgDgDgCQgCgCgDgBIgFgBIgIABIgGADIgEADIgDACIgGgJIADgDIAGgEIAIgDQAFgCAFAAQAOAAAIAIQAHAHAAAMQAAAGgCAEIgFAJIgIAIIgIAJIgFAGIgGAGIgEAHQgCADAAADIArAAIAAALg");
	this.shape_207.setTransform(548.575,95.875);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#333333").s().p("AgXAmQgIgNAAgZQAAgXAIgNQAJgOAOAAQAPAAAJAOQAIANAAAXQAAAZgIANQgJANgPAAQgOAAgJgNgAgIgjQgDADgDAGQgCAFgBAHIgBAOIABAPIADANQADAFADADQADADAFAAQAFAAAEgDQADgDADgFIADgNIAAgPIAAgOQgBgHgCgFQgDgGgDgDQgEgDgFAAQgFAAgDADg");
	this.shape_208.setTransform(540.8,95.975);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#333333").s().p("AgbAyIgBgCIAAgBQAAgHADgGQACgFADgFIAIgKIAJgJIAFgFIAGgHIAEgHQABgDAAgEQAAgEgBgDQgBgDgDgCQgCgCgDgBIgFgBIgIABIgGADIgEADIgDACIgGgJIADgDIAGgEIAIgDQAFgCAFAAQAOAAAIAIQAHAHAAAMQAAAGgCAEIgFAJIgIAIIgIAJIgFAGIgGAGIgEAHQgCADAAADIArAAIAAALg");
	this.shape_209.setTransform(532.775,95.875);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#333333").s().p("AgKAjQgHgDgFgEQgEgGgCgHQgDgGAAgIQAAgKADgGQADgIAFgFQAEgFAGgCQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAGAMgBIALgBIAHgCIACALIgIADIgOABQgIAAgHgDgAgFgYIgGAEQgDADgBAEIgCAHIAjAAQABgIgFgHQgFgFgIAAQgDAAgDACg");
	this.shape_210.setTransform(521.725,97.2);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#333333").s().p("AgUAlIAAhEIAMgEQAHgBAHAAIAEAAIAEABIAEAAIADABIgCALIgFgBIgKgBIgGABIgFABIAAA8g");
	this.shape_211.setTransform(515.625,97.125);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#333333").s().p("AgIAuQgEgCgEgDQgDgEAAgGIgBgMIAAhAIAMgDIAAAXIAbAAIAAALIgbAAIAAAhIABAJIADAGQABABADABIAFABQAFAAAFgBIAEgCIADALIgHACQgFACgGgBQgGAAgGgCg");
	this.shape_212.setTransform(510,96.15);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#333333").s().p("AgRAlIgIgDIADgLIAHACQAFACAIAAQAHAAAEgCQAEgCAAgEQAAgGgEgCIgMgGIgIgEIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADADIAFADIAGADIAJADIAHAEQADADABADQACAEAAAFQAAAKgIAFQgHAFgNAAQgKAAgFgBg");
	this.shape_213.setTransform(503.675,97.2);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#333333").s().p("AgKAjQgHgDgFgEQgEgGgCgHQgDgGAAgIQAAgKADgGQADgIAFgFQAEgFAGgCQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAGAMgBIALgBIAHgCIACALIgIADIgOABQgIAAgHgDgAgFgYIgGAEQgDADgBAEIgCAHIAjAAQABgIgFgHQgFgFgIAAQgDAAgDACg");
	this.shape_214.setTransform(496.575,97.2);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#333333").s().p("AAlAlIAAglIgBgLQgBgEgBgEQgCgDgDgBQgDgCgFAAQgHAAgEACIgGADIACAIIABAJIAAAoIgNAAIAAglIAAgLQAAgEgCgEQgCgDgDgBQgDgCgFAAIgEABIgFAAIgDAAIgCABIAAA8IgOAAIAAhFIANgDQAHgBAKAAQAHAAAFACQAEACADADIACgCIAGgCIAGgCIAIgBQAJAAAFACQAGADADAEQACAFABAGIABANIAAAog");
	this.shape_215.setTransform(486.75,97.125);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#333333").s().p("AgKAjQgHgDgFgEQgEgGgCgHQgDgGAAgIQAAgKADgGQADgIAFgFQAEgFAGgCQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAGAMgBIALgBIAHgCIACALIgIADIgOABQgIAAgHgDgAgFgYIgGAEQgDADgBAEIgCAHIAjAAQABgIgFgHQgFgFgIAAQgDAAgDACg");
	this.shape_216.setTransform(476.725,97.2);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#333333").s().p("AgRAlIgIgDIADgLIAHACQAFACAIAAQAHAAAEgCQAEgCAAgEQAAgGgEgCIgMgGIgIgEIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADADIAFADIAGADIAJADIAHAEQADADABADQACAEAAAFQAAAKgIAFQgHAFgNAAQgKAAgFgBg");
	this.shape_217.setTransform(469.725,97.2);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_218.setTransform(459.225,97.225);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#333333").s().p("AARAlIAAglIgCgLQgBgFgCgDQgCgDgDgBQgDgCgEAAIgFABIgEAAIgEAAIgCABIAAA8IgOAAIAAhFIANgDQAHgBAJAAQAIAAAGACQAGADADAEQAEAFABAGQABAGAAAHIAAAog");
	this.shape_219.setTransform(451.1,97.125);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#333333").s().p("AgUAlIAAhEIAMgEQAHgBAHAAIAEAAIAEABIAEAAIADABIgCALIgFgBIgKgBIgGABIgFABIAAA8g");
	this.shape_220.setTransform(441.575,97.125);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgCgFQgCgEAAgGQAAgGACgEQADgFAEgCIAKgDIAKgBIAEAAIAEAAIADABIADAAIAAgEIgBgGIgDgGIgEgDQgEgCgEAAIgLABIgHACIgCgLIAIgCIAMgBQAIAAAFACQAGACADADQADAEACAFQABAFAAAGIAAAtIgFABIgGABIgIABIgJAAIgKgBgAgCADIgGACIgFADQgCADAAADQABAIAEACQAEADAHAAIAJAAIAGgBIAAgVIgFgBIgIgBIgFAAg");
	this.shape_221.setTransform(434.55,97.2);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#333333").s().p("AgGA0IAAhJIANAAIAABJgAgFgkQgCgCgBgEQABgEACgDQACgCADAAQAEAAACACQACADAAAEQAAAEgCACQgCACgEABQgDgBgCgCg");
	this.shape_222.setTransform(429.35,95.7);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#333333").s().p("AgNAjQgFgDgEgEQgDgFgCgGQgBgGAAgHIAAgoIANAAIAAAlQAAANAEAGQAEAGAJAAIAEAAIAEgBIAEAAIACgBIAAg8IANAAIAABGIgLACIgRABQgIAAgGgCg");
	this.shape_223.setTransform(423.525,97.275);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#333333").s().p("AgQAxIgKgCIACgMIAKADIAMABQAKAAAFgFQAGgEAAgKIAAgDIgHADQgFACgGAAQgGgBgGgCQgFgCgFgEQgEgFgDgGQgCgGAAgJQAAgIACgHQADgGAEgFQAFgFAGgDQAHgCAHAAQAJgBAHACIALACIAABAQAAARgIAHQgJAJgRgBIgNgBgAgLgfQgGAHAAALQAAAGACAFQACAEACADQADADAEABIAGABQAFAAAFgCIAGgDIAAgqIgFgBIgJAAQgJAAgGAHg");
	this.shape_224.setTransform(415.275,98.45);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#333333").s().p("AAfAxIgFgNIgEgMIgrAAIgJAZIgOAAIAKgdIAKgYIAJgXIAKgUIALAAIAKAUIAJAXIAKAYIAKAdgAgIgKIgJAXIAjAAIgJgXIgJgWIgIAWg");
	this.shape_225.setTransform(406.775,96);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgDgFQgBgEAAgGQgBgGADgEQACgFAFgCIAKgDIAKgBIAEAAIAEAAIADABIADAAIAAgEIgBgGIgDgGIgEgDQgEgCgEAAIgLABIgHACIgCgLIAJgCIALgBQAIAAAFACQAGACADADQADAEACAFQACAFgBAGIAAAtIgEABIgHABIgIABIgJAAIgKgBgAgCADIgGACIgFADQgCADAAADQABAIAEACQAFADAGAAIAJAAIAGgBIAAgVIgFgBIgIgBIgFAAg");
	this.shape_226.setTransform(395.05,97.2);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#333333").s().p("AgRAlIgIgDIADgLIAHACQAFACAIAAQAHAAAEgCQAEgCAAgEQAAgGgEgCIgMgGIgIgEIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADADIAFADIAGADIAJADIAHAEQADADABADQACAEAAAFQAAAKgIAFQgHAFgNAAQgKAAgFgBg");
	this.shape_227.setTransform(388.475,97.2);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_228.setTransform(381.225,97.225);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#333333").s().p("AgUA2IgLgDIAAhnIANgCIAAAnIAHgEQAFgBAGAAQAHAAAGADQAGACAFAFQAEAFACAHQACAGAAAJQAAAJgDAHQgCAHgFAFQgFAFgGACQgHADgHAAIgRgBgAgLgGIgHADIAAAtIAFABIAJAAQAKABAGgHQAGgHAAgNIgBgLQgBgFgCgCQgDgDgEgCQgEgCgEAAQgGAAgEACg");
	this.shape_229.setTransform(373.175,95.5);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#333333").s().p("AgUAlIAAhEIAMgEQAHgBAHAAIAEAAIAEABIAEAAIADABIgCALIgFgBIgKgBIgGABIgFABIAAA8g");
	this.shape_230.setTransform(366.625,97.125);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgDgFQgBgEAAgGQgBgGADgEQADgFAEgCIAJgDIALgBIAEAAIAEAAIAEABIACAAIAAgEIgBgGIgDgGIgEgDQgEgCgEAAIgLABIgHACIgCgLIAJgCIALgBQAIAAAGACQAFACADADQADAEACAFQACAFgBAGIAAAtIgEABIgHABIgJABIgIAAIgKgBgAgCADIgGACIgEADQgDADAAADQAAAIAFACQAFADAGAAIAIAAIAHgBIAAgVIgFgBIgIgBIgFAAg");
	this.shape_231.setTransform(359.6,97.2);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#333333").s().p("AgOAxIgIAAIgHgBIgFgBIAAhdIAFgBIAHgBIAIAAIAFAAQAJAAAGABQAIABAFADQAFADAEAFQADAFAAAHQgBAIgDAFQgEAFgGADQAIACAGAFQAEAFAAAKQAAAPgLAHQgKAIgXAAIgFgBgAgVAlIADAAIAFABIAGAAIAKgBQAGAAAEgDQADgCADgDQACgDABgGQAAgEgCgEIgGgFIgIgDIgKAAIgRAAgAgVglIAAAeIAPAAIAIgBQAEAAAEgCQADgBABgEQACgDAAgEQAAgEgCgDQgCgDgDgCIgIgDIgIAAIgIAAIgGAAg");
	this.shape_232.setTransform(351.9,96);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#333333").s().p("AAQAlIAAglIAAgLQgBgFgCgDQgDgDgDgBQgEgCgDAAIgFABIgEAAIgEAAIgDABIAAA8IgMAAIAAhFIALgDQAIgBAJAAQAJAAAFACQAGADAEAEQADAFABAGQABAGAAAHIAAAog");
	this.shape_233.setTransform(339.9,97.125);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_234.setTransform(331.725,97.225);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#333333").s().p("AgRAlIgIgDIADgLIAHACQAFACAIAAQAHAAAEgCQAEgCAAgEQAAgGgEgCIgMgGIgIgEIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADADIAFADIAGADIAJADIAHAEQADADABADQACAEAAAFQAAAKgIAFQgHAFgNAAQgKAAgFgBg");
	this.shape_235.setTransform(324.475,97.2);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#333333").s().p("AgKAlIgKgEQgDgDgDgFQgCgEAAgGQABgGACgEQADgFADgCIAKgDIALgBIAEAAIAEAAIAEABIABAAIAAgEIAAgGIgCgGIgGgDQgDgCgEAAIgLABIgIACIgBgLIAJgCIALgBQAIAAAGACQAFACADADQADAEACAFQABAFAAAGIAAAtIgEABIgHABIgJABIgIAAIgKgBgAgCADIgGACIgEADQgCADAAADQgBAIAFACQAFADAGAAIAIAAIAGgBIAAgVIgEgBIgHgBIgGAAg");
	this.shape_236.setTransform(317.5,97.2);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#333333").s().p("AgLAxIgHgCIgGgDIgEgCIAGgLIAHAEQAFACAHAAQAJAAAFgEQAEgFAAgNIAAg/IAOAAIAABAQAAAIgCAGQgBAGgEAEQgDAFgHACQgGACgIABIgJgBg");
	this.shape_237.setTransform(310.025,96.1);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#333333").s().p("AAQAlIAAglIgBgLQgBgFgCgDQgCgDgDgBQgDgCgFAAIgEABIgFAAIgDAAIgCABIAAA8IgOAAIAAhFIANgDQAHgBAJAAQAIAAAGACQAGADADAEQADAFACAGQABAGABAHIAAAog");
	this.shape_238.setTransform(299.8,97.125);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_239.setTransform(291.625,97.225);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#333333").s().p("AgRAlIgIgDIADgLIAHACQAFACAIAAQAHAAAEgCQAEgCAAgEQAAgGgEgCIgMgGIgIgEIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADADIAFADIAGADIAJADIAHAEQADADABADQACAEAAAFQAAAKgIAFQgHAFgNAAQgKAAgFgBg");
	this.shape_240.setTransform(284.375,97.2);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#333333").s().p("AgUAlIAAhEIAMgEQAHgBAHAAIAEAAIAEABIAEAAIADABIgCALIgFgBIgKgBIgGABIgFABIAAA8g");
	this.shape_241.setTransform(279.025,97.125);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#333333").s().p("AgKAjQgHgDgFgEQgEgGgCgHQgDgGAAgIQAAgKADgGQADgIAFgFQAEgFAGgCQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAGAMgBIALgBIAHgCIACALIgIADIgOABQgIAAgHgDgAgFgYIgGAEQgDADgBAEIgCAHIAjAAQABgIgFgHQgFgFgIAAQgDAAgDACg");
	this.shape_242.setTransform(271.875,97.2);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#333333").s().p("AgJA0QgHgCgFgFQgEgFgDgHQgDgHAAgJQAAgJADgGQACgHADgFQAFgFAGgCQAGgDAHAAQAGAAAFABIAHAEIAAglIANgCIAABpIgMADIgQABQgHAAgGgDgAgGgGQgEACgDADQgCACgBAFQgCAGABAFQAAANAGAHQAHAHAJgBIAIAAIAGgBIAAgtQgCgCgFgBQgEgCgGAAQgEAAgEACg");
	this.shape_243.setTransform(263.65,95.5);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#333333").s().p("AAQAlIAAglIAAgLQgBgFgCgDQgDgDgDgBQgEgCgDAAIgFABIgFAAIgDAAIgDABIAAA8IgMAAIAAhFIALgDQAIgBAJAAQAJAAAFACQAGADAEAEQADAFABAGQABAGAAAHIAAAog");
	this.shape_244.setTransform(255.75,97.125);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#333333").s().p("AgLAlIgJgEQgDgDgDgFQgCgEAAgGQABgGACgEQACgFAEgCIAKgDIALgBIAEAAIAEAAIAEABIABAAIAAgEIAAgGIgCgGIgGgDQgDgCgEAAIgLABIgIACIgBgLIAIgCIAMgBQAIAAAGACQAFACADADQAEAEABAFQACAFAAAGIAAAtIgGABIgGABIgJABIgIAAIgLgBgAgCADIgGACIgEADQgCADAAADQgBAIAFACQAEADAIAAIAHAAIAGgBIAAgVIgEgBIgHgBIgGAAg");
	this.shape_245.setTransform(247.85,97.2);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#333333").s().p("AgLAxIgHgCIgGgDIgEgCIAGgLIAHAEQAFACAHAAQAJAAAFgEQAEgFAAgNIAAg/IAOAAIAABAQAAAIgCAGQgBAGgEAEQgDAFgHACQgGACgIABIgJgBg");
	this.shape_246.setTransform(240.375,96.1);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#333333").s().p("AgUAlIAAhEIAMgEQAHgBAHAAIAEAAIAEABIAEAAIADABIgCALIgFgBIgKgBIgGABIgFABIAAA8g");
	this.shape_247.setTransform(231.925,97.125);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_248.setTransform(224.625,97.225);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#333333").s().p("AgRAlIgIgDIADgLIAHACQAFACAIAAQAHAAAEgCQAEgCAAgEQAAgGgEgCIgMgGIgIgEIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADADIAFADIAGADIAJADIAHAEQADADABADQACAEAAAFQAAAKgIAFQgHAFgNAAQgKAAgFgBg");
	this.shape_249.setTransform(217.375,97.2);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#333333").s().p("AgRAlIgIgDIADgLIAHACQAFACAIAAQAHAAAEgCQAEgCAAgEQAAgGgEgCIgMgGIgIgEIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADADIAFADIAGADIAJADIAHAEQADADABADQACAEAAAFQAAAKgIAFQgHAFgNAAQgKAAgFgBg");
	this.shape_250.setTransform(211.125,97.2);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#333333").s().p("AgKAjQgHgDgFgEQgEgGgCgHQgDgGAAgIQAAgKADgGQADgIAFgFQAEgFAGgCQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAGAMgBIALgBIAHgCIACALIgIADIgOABQgIAAgHgDgAgFgYIgGAEQgDADgBAEIgCAHIAjAAQABgIgFgHQgFgFgIAAQgDAAgDACg");
	this.shape_251.setTransform(204.025,97.2);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#333333").s().p("AgVA2IAAhOQAAgOAHgIQAHgHANAAIAKAAIAGACIgCALIgFgBIgIgBQgIAAgDAFQgEAFAAAIIAAAGIAbAAIAAALIgbAAIAAA9g");
	this.shape_252.setTransform(198.075,95.425);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_253.setTransform(190.625,97.225);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#333333").s().p("AgUAlIAAhEIAMgEQAHgBAHAAIAEAAIAEABIAEAAIADABIgCALIgFgBIgKgBIgGABIgFABIAAA8g");
	this.shape_254.setTransform(184.275,97.125);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#333333").s().p("AgfAyIAAhfIAMgDQAGgBAKAAQAHAAAHADQAGACAFAFQAFAFACAHQADAHAAAJQAAAIgCAGQgCAHgEAFQgFAFgGADQgGADgHAAQgGAAgFgCIgHgDIAAAdgAgSgkIAAAtIAHAEQAEABAGAAQAEAAAEgCQAEgCADgDQACgEABgEIABgKQAAgNgGgHQgGgGgKAAIgJAAIgFABg");
	this.shape_255.setTransform(177.175,98.425);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_256.setTransform(165.475,97.225);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#333333").s().p("AgGAxQgFgEAAgLIAAhWIAMgCIAABWIAAAGQABAAAAABQAAAAAAABQAAAAABAAQAAABAAAAIAEACIAFABIgCALQgLgBgFgFg");
	this.shape_257.setTransform(159.8,95.5);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#333333").s().p("AgKAjQgHgDgFgEQgEgGgCgHQgDgGAAgIQAAgKADgGQADgIAFgFQAEgFAGgCQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAGAMgBIALgBIAHgCIACALIgIADIgOABQgIAAgHgDgAgFgYIgGAEQgDADgBAEIgCAHIAjAAQABgIgFgHQgFgFgIAAQgDAAgDACg");
	this.shape_258.setTransform(153.525,97.2);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#333333").s().p("AgfAyIAAhfIAMgDQAGgBAKAAQAHAAAHADQAGACAFAFQAFAFACAHQADAHAAAJQAAAIgCAGQgCAHgEAFQgFAFgGADQgGADgHAAQgGAAgFgCIgHgDIAAAdgAgSgkIAAAtIAHAEQAEABAGAAQAEAAAEgCQAEgCADgDQACgEABgEIABgKQAAgNgGgHQgGgGgKAAIgJAAIgFABg");
	this.shape_259.setTransform(145.725,98.425);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#333333").s().p("AgLAlIgJgEQgDgDgCgFQgCgEAAgGQAAgGACgEQADgFAEgCIAKgDIAKgBIAEAAIAEAAIADABIACAAIAAgEIAAgGIgDgGIgEgDQgEgCgEAAIgLABIgHACIgCgLIAIgCIAMgBQAIAAAFACQAGACADADQADAEACAFQABAFABAGIAAAtIgGABIgGABIgIABIgJAAIgLgBgAgCADIgGACIgFADQgCADAAADQABAIAEACQAEADAIAAIAIAAIAFgBIAAgVIgEgBIgIgBIgFAAg");
	this.shape_260.setTransform(134.3,97.2);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#333333").s().p("AgJA0QgHgCgFgFQgEgFgDgHQgDgHAAgJQAAgJADgGQACgHADgFQAFgFAGgCQAGgDAHAAQAGAAAFABIAHAEIAAglIANgCIAABpIgMADIgPABQgIAAgGgDgAgGgGQgEACgCADQgDACgBAFQgBAGAAAFQAAANAGAHQAHAHAJgBIAJAAIAFgBIAAgtQgCgCgFgBQgEgCgGAAQgEAAgEACg");
	this.shape_261.setTransform(126.5,95.5);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgDgFQgBgEAAgGQgBgGADgEQACgFAFgCIAKgDIAKgBIAEAAIAEAAIADABIADAAIAAgEIgBgGIgDgGIgEgDQgEgCgEAAIgLABIgHACIgCgLIAJgCIALgBQAIAAAFACQAGACADADQADAEACAFQACAFgBAGIAAAtIgEABIgHABIgIABIgJAAIgKgBgAgCADIgGACIgFADQgCADAAADQABAIAEACQAFADAGAAIAIAAIAHgBIAAgVIgFgBIgIgBIgFAAg");
	this.shape_262.setTransform(118.75,97.2);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#333333").s().p("AgUAlIAAhEIAMgEQAHgBAHAAIAEAAIAEABIAEAAIADABIgCALIgFgBIgKgBIgGABIgFABIAAA8g");
	this.shape_263.setTransform(113.075,97.125);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#333333").s().p("AgIAuQgEgCgDgDQgEgEgBgGIgBgMIAAhAIANgDIAAAXIAbAAIAAALIgbAAIAAAhIABAJIADAGQACABACABIAFABQAGAAAEgBIAFgCIACALIgHACQgFACgGgBQgGAAgGgCg");
	this.shape_264.setTransform(107.45,96.15);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#333333").s().p("AgRAlIgIgDIADgLIAHACQAFACAIAAQAHAAAEgCQAEgCAAgEQAAgGgEgCIgMgGIgIgEIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADADIAFADIAGADIAJADIAHAEQADADABADQACAEAAAFQAAAKgIAFQgHAFgNAAQgKAAgFgBg");
	this.shape_265.setTransform(101.125,97.2);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#333333").s().p("AgGA0IAAhJIANAAIAABJgAgFgkQgCgCAAgEQAAgEACgDQACgCADAAQAEAAACACQACADABAEQgBAEgCACQgCACgEABQgDgBgCgCg");
	this.shape_266.setTransform(96.25,95.7);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#333333").s().p("AARAlIAAglIgBgLQgBgFgDgDQgBgDgEgBQgEgCgDAAIgFABIgEAAIgEAAIgDABIAAA8IgMAAIAAhFIALgDQAIgBAJAAQAJAAAFACQAGADAEAEQADAFABAGQABAGAAAHIAAAog");
	this.shape_267.setTransform(90.5,97.125);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#333333").s().p("AgFA0IAAhJIALAAIAABJgAgFgkQgCgCAAgEQAAgEACgDQADgCACAAQADAAADACQADADAAAEQAAAEgDACQgDACgDABQgCgBgDgCg");
	this.shape_268.setTransform(84.7,95.7);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#333333").s().p("AAkAlIAAglIAAgLQAAgEgCgEQgCgDgDgBQgDgCgFAAQgGAAgFACIgFADIABAIIABAJIAAAoIgNAAIAAglIAAgLQAAgEgDgEQgBgDgDgBQgDgCgFAAIgEABIgEAAIgEAAIgDABIAAA8IgMAAIAAhFIAMgDQAHgBAKAAQAGAAAFACQAFACADADIACgCIAGgCIAHgCIAIgBQAIAAAFACQAGADACAEQADAFABAGIACANIAAAog");
	this.shape_269.setTransform(77,97.125);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#333333").s().p("AgJAQQAEgHABgIIABgMIAAgEIAAgDIANAAIAAACIAAACQAAAJgDAIQgCAIgFAIg");
	this.shape_270.setTransform(65.775,101.175);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#333333").s().p("AgQA9QAKgNAGgPQAEgPAAgSQAAgRgEgPQgGgQgKgNIAKgGQAJANAHASQAHARAAATQAAAUgHARQgHARgJAOg");
	this.shape_271.setTransform(61.475,96.675);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#333333").s().p("AgOAxIgIAAIgHgBIgFgBIAAhdIAFgBIAHgBIAIAAIAGAAQAIAAAGABQAIABAFADQAFADAEAFQADAFgBAHQAAAIgDAFQgEAFgGADQAJACAEAFQAFAFABAKQAAAPgMAHQgKAIgWAAIgGgBgAgVAlIAEAAIAEABIAGAAIAKgBQAGAAAEgDQADgCADgDQACgDAAgGQAAgEgBgEIgGgFIgIgDIgKAAIgRAAgAgVglIAAAeIAPAAIAIgBQAEAAAEgCQADgBABgEQACgDAAgEQAAgEgCgDQgCgDgDgCIgIgDIgIAAIgIAAIgGAAg");
	this.shape_272.setTransform(55.45,96);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#333333").s().p("AghAxIAAhfIANgCIANAAQATAAALAIQALAHAAAQQAAAJgDAFQgDAFgGAEQgFAEgIACQgJABgJAAIgLAAIAAAkgAgUgjIAAAlIALAAIALgBIAKgDQADgCADgDQACgEAAgGQAAgGgCgDQgDgEgDgCQgEgDgFAAIgJgBIgOABg");
	this.shape_273.setTransform(46.825,95.95);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#333333").s().p("AgfAxIAAhgIA7AAIAAALIgtAAIAAAdIAnAAIAAALIgnAAIAAAhIAwAAIAAAMg");
	this.shape_274.setTransform(38.55,96);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#333333").s().p("AgQAuQgHgDgEgEQgFgGgCgHQgCgGAAgIIAAg8IAOAAIAAA6QAAAPAGAGQAHAHAJgBQAFAAAEgBQAFgCADgDQADgEABgEQACgGAAgHIAAg6IAOAAIAAA8QAAAIgCAGQgDAHgEAGQgFAEgHADQgHAEgJAAQgJAAgHgEg");
	this.shape_275.setTransform(29.375,96.1);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#333333").s().p("AgJAlQgHgRAAgUQAAgTAHgRQAGgSAKgNIAKAGQgKANgGAQQgEAPAAARQAAASAEAPQAGAPAKANIgKAHQgKgOgGgRg");
	this.shape_276.setTransform(22.775,96.675);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgDgEQgBgFAAgGQAAgGACgFQADgEADgBIAKgFIALgBIAEAAIAEABIAEAAIACABIAAgDIgBgHIgCgGIgGgEQgDgBgEAAIgLABIgIACIgBgLIAJgCIALgBQAIAAAGACQAFACADADQADAFACAEQABAFAAAHIAAAtIgEAAIgHABIgJABIgIAAIgKgBgAgCADIgGACIgEAEQgDACAAADQAAAHAFAEQAFACAGAAIAIAAIAHgBIAAgWIgFgBIgHgBIgGABg");
	this.shape_277.setTransform(610.8,79.5);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#333333").s().p("AgUA2IgLgCIAAhoIANgCIAAAnIAHgDQAFgCAGAAQAHAAAGADQAGADAFAFQAEAFACAFQACAIAAAIQAAAJgDAHQgCAHgFAFQgFAFgGADQgHACgHAAIgRgBgAgLgHIgHAEIAAAtIAFABIAJABQAKgBAGgGQAGgHAAgNIgBgKQgBgGgCgCQgDgEgEgCQgEgBgEAAQgGAAgEABg");
	this.shape_278.setTransform(603.425,77.8);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#333333").s().p("AgJA2IAAhIIALAAIAABIgAgMggIARgVIAIAIIgTATg");
	this.shape_279.setTransform(597.75,77.725);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#333333").s().p("AgLAlIgJgEQgDgDgCgEQgDgFAAgGQAAgGADgFQACgEAEgBIAKgFIALgBIAEAAIAEABIADAAIACABIAAgDIAAgHIgCgGIgGgEQgDgBgEAAIgLABIgIACIgBgLIAIgCIAMgBQAIAAAFACQAGACADADQAEAFABAEQACAFAAAHIAAAtIgGAAIgGABIgJABIgIAAIgLgBgAgCADIgGACIgFAEQgBACAAADQgBAHAFAEQAEACAIAAIAIAAIAFgBIAAgWIgEgBIgHgBIgGABg");
	this.shape_280.setTransform(591.75,79.5);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#333333").s().p("AgUAlIAAhEIAMgEQAHgBAHAAIAEAAIAEABIAEAAIADABIgCALIgFgBIgKgBIgGABIgFABIAAA8g");
	this.shape_281.setTransform(586.075,79.425);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#333333").s().p("AgLAlIgJgEQgDgDgDgEQgCgFAAgGQABgGACgFQACgEAEgBIAKgFIALgBIAEAAIAEABIAEAAIABABIAAgDIAAgHIgCgGIgGgEQgDgBgEAAIgLABIgIACIgBgLIAIgCIAMgBQAIAAAGACQAFACADADQAEAFABAEQACAFAAAHIAAAtIgGAAIgGABIgJABIgIAAIgLgBgAgCADIgGACIgEAEQgCACAAADQgBAHAFAEQAEACAIAAIAHAAIAGgBIAAgWIgEgBIgHgBIgGABg");
	this.shape_282.setTransform(579.05,79.5);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#333333").s().p("AghAxIAAheIANgCIANgBQATAAALAIQALAHAAAQQAAAIgDAHQgDAEgGAEQgFADgIACQgJACgJAAIgLAAIAAAkgAgUgjIAAAkIALAAIALgBIAKgBQADgCADgEQACgEAAgGQAAgGgCgDQgDgEgDgCQgEgCgFgBIgJgBIgOABg");
	this.shape_283.setTransform(571.725,78.25);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#333333").s().p("AgLAlIgJgEQgDgDgCgEQgDgFAAgGQAAgGADgFQACgEAEgBIAKgFIALgBIAEAAIAEABIADAAIACABIAAgDIAAgHIgCgGIgGgEQgDgBgEAAIgLABIgIACIgBgLIAIgCIAMgBQAIAAAFACQAGACADADQAEAFABAEQACAFAAAHIAAAtIgGAAIgGABIgJABIgIAAIgLgBgAgCADIgGACIgFAEQgBACAAADQgBAHAFAEQAEACAIAAIAIAAIAFgBIAAgWIgEgBIgHgBIgGABg");
	this.shape_284.setTransform(555.75,79.5);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#333333").s().p("AgJA1QgHgDgFgFQgEgFgDgHQgDgHAAgJQAAgIADgIQACgFADgFQAFgFAGgDQAGgDAHAAQAGAAAFACIAHADIAAglIANgCIAABqIgMACIgQABQgGAAgHgCgAgGgHQgEACgDAEQgCACgBAGQgCAFABAFQgBANAHAHQAGAGAKABIAIgBIAGgBIAAgtQgCgCgFgCQgEgBgGAAQgEAAgEABg");
	this.shape_285.setTransform(547.95,77.8);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#333333").s().p("AgGAxQgFgEAAgKIAAhXIAMgCIAABXIAAAEQABABAAABQAAAAAAABQAAAAABAAQAAABAAAAIAEACIAFABIgCALQgLAAgFgGg");
	this.shape_286.setTransform(535,77.8);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#333333").s().p("AgLAlIgJgEQgDgDgCgEQgDgFAAgGQAAgGADgFQACgEAEgBIALgFIAKgBIAEAAIAEABIADAAIACABIAAgDIAAgHIgDgGIgFgEQgDgBgEAAIgLABIgIACIgBgLIAIgCIAMgBQAIAAAFACQAGACADADQAEAFABAEQABAFABAHIAAAtIgGAAIgGABIgIABIgJAAIgLgBgAgCADIgGACIgFAEQgBACAAADQAAAHAEAEQAEACAIAAIAIAAIAFgBIAAgWIgEgBIgHgBIgGABg");
	this.shape_287.setTransform(528.85,79.5);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#333333").s().p("AgNAjQgFgDgEgEQgDgFgCgGQgBgGAAgHIAAgoIANAAIAAAlQAAANAEAGQAEAGAJAAIAEAAIAEgBIAEAAIACgBIAAg8IANAAIAABGIgLACIgRABQgIAAgGgCg");
	this.shape_288.setTransform(521.325,79.575);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#333333").s().p("AgKA1QgGgDgFgFQgFgFgDgHQgCgHAAgJQAAgIACgIQADgFAEgFQAEgFAGgDQAGgDAHAAQAGAAAFACIAHADIAAglIANgCIAABqIgLACIgQABQgIAAgHgCgAgGgHQgEACgDAEQgCACgBAGQgCAFAAAFQAAANAHAHQAGAGAKABIAIgBIAGgBIAAgtQgCgCgEgCQgFgBgFAAQgFAAgEABg");
	this.shape_289.setTransform(513,77.8);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#333333").s().p("AgLAlIgJgEQgDgDgDgEQgCgFAAgGQABgGACgFQACgEAEgBIAKgFIALgBIAEAAIAEABIAEAAIABABIAAgDIAAgHIgCgGIgGgEQgDgBgEAAIgLABIgIACIgBgLIAIgCIAMgBQAIAAAGACQAFACADADQAEAFABAEQACAFAAAHIAAAtIgFAAIgHABIgJABIgIAAIgLgBgAgCADIgGACIgEAEQgCACAAADQgBAHAFAEQAEACAIAAIAHAAIAGgBIAAgWIgEgBIgHgBIgGABg");
	this.shape_290.setTransform(505.25,79.5);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#333333").s().p("AgHAuQgGgCgDgDQgCgEgBgFIgCgNIAAhAIAOgCIAAAWIAaAAIAAALIgaAAIAAAgIAAAJIACAHQACACADAAIAFABQAFAAAEgCIAFgBIACAKIgGADQgFACgHAAQgFgBgFgCg");
	this.shape_291.setTransform(499.35,78.45);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#333333").s().p("AgRAlIgIgDIADgLIAHADQAFABAIAAQAHAAAEgCQAEgCAAgEQAAgFgEgEIgMgGIgIgDIgGgDQgDgCgCgEQgCgDAAgFQAAgKAIgGQAHgFALAAIAGABIAGAAIAFABIADABIgDALIgGgCIgLgBQgEAAgEACQgEACAAAFIAAAEIADAEIAFACIAGACIAJAFIAHADQADADABADQACAEAAAFQAAAKgIAFQgHAFgNAAQgKAAgFgBg");
	this.shape_292.setTransform(493.025,79.5);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#333333").s().p("AgeAxIAAhhIA5AAIAAAMIgsAAIAAAdIAoAAIAAALIgoAAIAAAhIAxAAIAAAMg");
	this.shape_293.setTransform(486.25,78.3);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#333333").s().p("AgKAkQgHgDgFgFQgEgFgCgHQgDgIAAgHQAAgJADgIQADgHAFgEQAEgFAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAACIgxAAQABAMAGAGQAFAFAMABIALgBIAHgDIACALIgIADIgOABQgIAAgHgCgAgFgZIgGAFQgDADgBADIgCAIIAjAAQABgIgFgHQgFgFgIAAQgDAAgDABg");
	this.shape_294.setTransform(470.425,79.5);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#333333").s().p("AgJA1QgHgDgFgFQgEgFgDgHQgDgHAAgJQAAgIADgIQABgFAEgFQAFgFAGgDQAGgDAHAAQAGAAAFACIAHADIAAglIANgCIAABqIgMACIgPABQgIAAgGgCgAgGgHQgEACgCAEQgDACgBAGQgBAFAAAFQAAANAGAHQAHAGAJABIAJgBIAFgBIAAgtQgCgCgFgCQgEgBgGAAQgEAAgEABg");
	this.shape_295.setTransform(462.2,77.8);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgDgEQgBgFAAgGQgBgGADgFQACgEAFgBIAKgFIAKgBIAEAAIAEABIADAAIADABIAAgDIgBgHIgDgGIgEgEQgEgBgEAAIgLABIgHACIgCgLIAJgCIALgBQAIAAAFACQAGACADADQADAFACAEQACAFgBAHIAAAtIgEAAIgHABIgIABIgJAAIgKgBgAgCADIgGACIgFAEQgCACAAADQABAHAEAEQAFACAGAAIAIAAIAHgBIAAgWIgFgBIgIgBIgFABg");
	this.shape_296.setTransform(454.45,79.5);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#333333").s().p("AgKA1QgGgDgFgFQgFgFgDgHQgCgHAAgJQAAgIACgIQACgFAFgFQAEgFAGgDQAGgDAHAAQAGAAAFACIAHADIAAglIANgCIAABqIgLACIgQABQgHAAgIgCgAgGgHQgEACgCAEQgDACgBAGQgBAFgBAFQABANAGAHQAHAGAJABIAJgBIAFgBIAAgtQgCgCgEgCQgFgBgFAAQgFAAgEABg");
	this.shape_297.setTransform(446.65,77.8);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#333333").s().p("AgFA0IAAhIIALAAIAABIgAgFgkQgCgCAAgEQAAgEACgCQACgCADgBQADABADACQACACAAAEQAAAEgCACQgDACgDAAQgCAAgDgCg");
	this.shape_298.setTransform(441,78);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#333333").s().p("AgRAlIgIgDIADgLIAHADQAFABAIAAQAHAAAEgCQAEgCAAgEQAAgFgEgEIgMgGIgIgDIgGgDQgDgCgCgEQgCgDAAgFQAAgKAIgGQAHgFALAAIAGABIAGAAIAFABIADABIgDALIgGgCIgLgBQgEAAgEACQgEACAAAFIAAAEIADAEIAFACIAGACIAJAFIAHADQADADABADQACAEAAAFQAAAKgIAFQgHAFgNAAQgKAAgFgBg");
	this.shape_299.setTransform(436.125,79.5);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#333333").s().p("AgUAlIAAhEIAMgEQAHgBAHAAIAEAAIAEABIAEAAIADABIgCALIgFgBIgKgBIgGABIgFABIAAA8g");
	this.shape_300.setTransform(430.775,79.425);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#333333").s().p("AgKAkQgHgDgFgFQgEgFgCgHQgDgIAAgHQAAgJADgIQADgHAFgEQAEgFAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAACIgxAAQABAMAGAGQAFAFAMABIALgBIAHgDIACALIgIADIgOABQgIAAgHgCgAgFgZIgGAFQgDADgBADIgCAIIAjAAQABgIgFgHQgFgFgIAAQgDAAgDABg");
	this.shape_301.setTransform(423.625,79.5);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#333333").s().p("AgFAlIgOgiQgIgSgFgUIAOAAIAEAOIAFAPIAFAPIAEAMIAFgMIAFgPIAFgPIAEgOIAOAAQgGAUgHASIgOAig");
	this.shape_302.setTransform(416.275,79.5);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#333333").s().p("AgGA0IAAhIIANAAIAABIgAgFgkQgCgCgBgEQABgEACgCQACgCADgBQADABADACQADACgBAEQABAEgDACQgDACgDAAQgDAAgCgCg");
	this.shape_303.setTransform(411,78);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#333333").s().p("AAQAlIAAglIgBgLQAAgFgCgDQgCgDgEgBQgEgCgEAAIgEABIgFAAIgDAAIgDABIAAA8IgNAAIAAhFIAMgDQAIgBAJAAQAJAAAFACQAGADAEAEQADAFABAGQACAGAAAHIAAAog");
	this.shape_304.setTransform(405.25,79.425);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#333333").s().p("AgQAvQgHgDgEgFQgFgFgCgHQgCgIAAgHIAAg9IAOAAIAAA7QAAAOAGAHQAHAGAJABQAFgBAEgBQAFgBADgEQADgEABgFQACgFAAgHIAAg7IAOAAIAAA9QAAAHgCAIQgDAHgEAFQgFAFgHADQgHACgJAAQgJAAgHgCg");
	this.shape_305.setTransform(396.375,78.4);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgDgEQgBgFAAgGQgBgGADgFQACgEAFgBIAKgFIAKgBIAEAAIAEABIADAAIADABIAAgDIgBgHIgDgGIgEgEQgEgBgEAAIgLABIgHACIgCgLIAJgCIALgBQAIAAAFACQAGACADADQADAFACAEQACAFgBAHIAAAtIgEAAIgHABIgIABIgJAAIgKgBgAgCADIgGACIgFAEQgCACAAADQABAHAEAEQAFACAGAAIAIAAIAHgBIAAgWIgFgBIgIgBIgFABg");
	this.shape_306.setTransform(380.2,79.5);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#333333").s().p("AgKA1QgGgDgFgFQgFgFgDgHQgCgHAAgJQAAgIACgIQACgFAFgFQAEgFAGgDQAGgDAHAAQAGAAAFACIAHADIAAglIANgCIAABqIgLACIgQABQgHAAgIgCgAgGgHQgEACgCAEQgDACgBAGQgBAFgBAFQABANAGAHQAHAGAJABIAJgBIAFgBIAAgtQgCgCgEgCQgFgBgFAAQgFAAgEABg");
	this.shape_307.setTransform(372.4,77.8);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_308.setTransform(356.875,79.525);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#333333").s().p("AgKAzIgJgEQgEgDgDgEQgBgFgBgGQABgGACgEQADgFADgCIAKgEIALgBIAEAAIAEAAIAEABIACAAIAAgDIgBgGIgCgFIgGgEQgDgCgEAAIgLABIgIACIgBgLIAJgCIALgBQAIAAAGACQAFACADAEQAEAEABAFQABAFAAAFIAAAuIgEAAIgHABIgJABIgIAAIgKgBgAgCARIgGACIgEAEQgDACAAAEQAAAHAFADQAFACAGAAIAIAAIAHgBIAAgVIgFgBIgHgBIgGAAgAgTgmIABgEIADgEIAFgDIAFgBIAFABIAEACIAEABIADABQABAAAAAAQABAAAAAAQABAAAAgBQABAAABgBIADgEIAGADIgBAEIgEAEIgEADQgCACgDAAIgFgBIgFgCIgDgCIgEgBQAAAAgBAAQAAAAgBABQAAAAgBAAQAAABgBAAIgDAFg");
	this.shape_309.setTransform(348.9,78.075);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#333333").s().p("AgEAyIgFgCIACgIIADABIAEABQAEAAAAgDIgBgDIgDgCIgBgBIABgEIABgEQgGgBgFgDQgGgDgDgFQgEgFgCgGQgCgGAAgHQAAgJADgGQACgIAFgFQAEgFAHgDQAGgCAHgBIAKABIAJADIgDALIgGgDIgIAAQgKAAgGAGQgGAIAAANQAAAFABAGQACAEADADQACADAFACQADACAHAAIAJgBIAHgCIACALIgDABIgFABIgFABIgFABIgCADQAEACACACQACADAAAEIgBAEQAAAAAAAAQAAABgBAAQAAABAAAAQgBABAAAAIgFACIgHABIgFAAg");
	this.shape_310.setTransform(342.425,80.75);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgCgEQgCgFAAgGQAAgGACgFQADgEAEgBIAKgFIAKgBIAEAAIAEABIADAAIADABIAAgDIgBgHIgDgGIgEgEQgEgBgEAAIgLABIgHACIgCgLIAIgCIAMgBQAIAAAFACQAGACADADQADAFACAEQABAFAAAHIAAAtIgFAAIgGABIgIABIgJAAIgKgBgAgCADIgGACIgFAEQgCACAAADQABAHAEAEQAEACAHAAIAJAAIAGgBIAAgWIgFgBIgIgBIgFABg");
	this.shape_311.setTransform(335.1,79.5);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#333333").s().p("AgIAuQgEgCgEgDQgDgEgBgFIAAgNIAAhAIAMgCIAAAWIAbAAIAAALIgbAAIAAAgIABAJIADAHQABACADAAIAFABQAGAAAEgCIAEgBIADAKIgHADQgFACgGAAQgGgBgGgCg");
	this.shape_312.setTransform(329.2,78.45);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#333333").s().p("AgNAjQgFgDgEgEQgDgFgCgGQgBgGAAgHIAAgoIANAAIAAAlQAAANAEAGQAEAGAJAAIAEAAIAEgBIAEAAIACgBIAAg8IANAAIAABGIgLACIgRABQgIAAgGgCg");
	this.shape_313.setTransform(321.925,79.575);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#333333").s().p("AgfAyIAAhfIAMgDQAGgBAKAAQAHAAAHADQAGACAFAFQAFAFACAHQADAHAAAJQAAAIgCAGQgCAHgEAFQgFAFgGADQgGADgHAAQgGAAgFgCIgHgDIAAAdgAgSgkIAAAtIAHAEQAEABAGAAQAEAAAEgCQAEgCADgDQACgEABgEIABgKQAAgNgGgHQgGgGgKAAIgJAAIgFABg");
	this.shape_314.setTransform(314.025,80.725);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#333333").s().p("AAlAlIAAglIgBgLQgBgEgCgEQgBgDgDgBQgDgCgFAAQgGAAgEACIgHADIACAIIAAAJIAAAoIgLAAIAAglIgBgLQAAgEgDgEQgBgDgDgBQgDgCgFAAIgEABIgFAAIgDAAIgDABIAAA8IgNAAIAAhFIAMgDQAIgBAJAAQAIAAAFACQAEACADADIADgCIAEgCIAHgCIAJgBQAIAAAFACQAFADADAEQAEAFABAGIAAANIAAAog");
	this.shape_315.setTransform(303.75,79.425);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_316.setTransform(293.575,79.525);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#333333").s().p("AgKAwQgIgEgGgGQgGgHgDgJQgEgKAAgMQAAgLAEgJQAEgKAGgGQAGgHAJgDQAIgEAJAAIALABIAIACIAGADIADABIgEALIgEgBIgFgCIgHgCIgHgBQgIAAgFADQgGADgEAFQgFAFgCAHQgCAHAAAIQAAAJACAHQACAHAEAFQAEAFAGADQAFADAIAAQAKAAAGgCIAJgDIAEALIgEABIgGACIgJACIgLABQgJAAgJgDg");
	this.shape_317.setTransform(285.325,78.275);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgCgEQgCgFAAgGQAAgGACgFQADgEAEgBIAKgFIAKgBIAEAAIAEABIADAAIADABIAAgDIgBgHIgDgGIgEgEQgEgBgEAAIgLABIgHACIgCgLIAIgCIAMgBQAIAAAFACQAGACADADQADAFACAEQABAFABAHIAAAtIgGAAIgGABIgIABIgJAAIgKgBgAgCADIgGACIgFAEQgCACAAADQABAHAEAEQAEACAHAAIAJAAIAGgBIAAgWIgFgBIgIgBIgFABg");
	this.shape_318.setTransform(269.4,79.5);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#333333").s().p("AgKA1QgGgDgFgFQgEgFgDgHQgDgHAAgJQAAgIADgIQABgFAFgFQAEgFAGgDQAGgDAHAAQAGAAAFACIAHADIAAglIANgCIAABqIgMACIgPABQgHAAgIgCgAgGgHQgEACgCAEQgDACgBAGQgBAFgBAFQABANAGAHQAGAGAKABIAJgBIAFgBIAAgtQgCgCgEgCQgFgBgGAAQgEAAgEABg");
	this.shape_319.setTransform(261.6,77.8);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#333333").s().p("AgLAlIgJgEQgDgDgCgEQgCgFAAgGQAAgGACgFQADgEAEgBIAKgFIAKgBIAEAAIAEABIADAAIACABIAAgDIAAgHIgDgGIgEgEQgEgBgEAAIgLABIgHACIgCgLIAIgCIAMgBQAIAAAFACQAGACADADQADAFACAEQABAFABAHIAAAtIgGAAIgGABIgIABIgJAAIgLgBgAgCADIgGACIgFAEQgCACABADQAAAHAEAEQAEACAIAAIAIAAIAFgBIAAgWIgEgBIgIgBIgFABg");
	this.shape_320.setTransform(246.35,79.5);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#333333").s().p("AgGA0IAAhIIANAAIAABIgAgFgkQgCgCAAgEQAAgEACgCQACgCADgBQAEABACACQACACABAEQgBAEgCACQgCACgEAAQgDAAgCgCg");
	this.shape_321.setTransform(241.15,78);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#333333").s().p("AAIAmQgIAAgGgCQgHgDgFgFQgEgFgCgHQgDgIAAgHQAAgIADgHQACgHAFgFQAEgGAHgCQAGgDAHAAIAKABIAJACIgDALIgGgCIgIAAQgKAAgGAGQgGAHAAANQAAAFABAFQACAFADADQACAEAFACQADABAHABIAJgBIAHgDIACAMIgEABIgEABIgGABIgGAAg");
	this.shape_322.setTransform(236.375,79.5);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#333333").s().p("AARAlIAAglIgBgLQgCgFgCgDQgCgDgDgBQgDgCgEAAIgFABIgEAAIgEAAIgCABIAAA8IgNAAIAAhFIAMgDQAHgBAJAAQAIAAAGACQAGADADAEQAEAFABAGQACAGgBAHIAAAog");
	this.shape_323.setTransform(228.9,79.425);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#333333").s().p("AgKA0QgHgDgFgFQgEgFgCgHQgDgHAAgIQAAgKADgHQADgHAFgEQAEgFAGgDQAGgCAGAAQAOAAAIAJQAIAKAAARIAAACIAAADIgxAAQABALAGAHQAFAFAMAAIALgBIAHgCIACAKIgIADIgOACQgIAAgHgDgAgFgIIgGAFQgDACgBADIgCAIIAjAAQABgJgFgFQgFgGgIAAQgDAAgDACgAABgoIgMAMIgGgFIASgVIATAVIgFAFg");
	this.shape_324.setTransform(220.875,77.85);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#333333").s().p("AgGA0IAAhIIANAAIAABIgAgFgkQgCgCgBgEQABgEACgCQACgCADgBQADABADACQADACgBAEQABAEgDACQgDACgDAAQgDAAgCgCg");
	this.shape_325.setTransform(215.25,78);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#333333").s().p("AgKAwQgIgEgGgGQgGgHgDgJQgEgKAAgMQAAgLAEgJQAEgKAGgGQAGgHAJgDQAIgEAJAAIALABIAIACIAGADIADABIgEALIgEgBIgFgCIgHgCIgHgBQgIAAgFADQgGADgEAFQgFAFgCAHQgCAHAAAIQAAAJACAHQACAHAEAFQAEAFAGADQAFADAIAAQAKAAAGgCIAJgDIAEALIgEABIgGACIgJACIgLABQgJAAgJgDg");
	this.shape_326.setTransform(209.375,78.275);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#333333").s().p("AgKAkQgHgDgFgFQgEgFgCgHQgDgIAAgHQAAgJADgIQADgHAFgEQAEgFAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAACIgxAAQABAMAGAGQAFAFAMABIALgBIAHgDIACALIgIADIgOABQgIAAgHgCgAgFgZIgGAFQgDADgBADIgCAIIAjAAQABgIgFgHQgFgFgIAAQgDAAgDABg");
	this.shape_327.setTransform(193.325,79.5);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#333333").s().p("AgJA1QgHgDgFgFQgEgFgDgHQgDgHAAgJQAAgIADgIQABgFAFgFQAEgFAGgDQAGgDAHAAQAGAAAFACIAHADIAAglIANgCIAABqIgMACIgPABQgHAAgHgCgAgGgHQgEACgCAEQgDACgBAGQgBAFgBAFQABANAGAHQAGAGAKABIAJgBIAFgBIAAgtQgCgCgEgCQgFgBgGAAQgEAAgEABg");
	this.shape_328.setTransform(185.1,77.8);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_329.setTransform(169.575,79.525);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#333333").s().p("AgRAlIgIgDIADgLIAHADQAFABAIAAQAHAAAEgCQAEgCAAgEQAAgFgEgEIgMgGIgIgDIgGgDQgDgCgCgEQgCgDAAgFQAAgKAIgGQAHgFALAAIAGABIAGAAIAFABIADABIgDALIgGgCIgLgBQgEAAgEACQgEACAAAFIAAAEIADAEIAFACIAGACIAJAFIAHADQADADABADQACAEAAAFQAAAKgIAFQgHAFgNAAQgKAAgFgBg");
	this.shape_330.setTransform(162.325,79.5);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#333333").s().p("AgUAlIAAhEIAMgEQAHgBAHAAIAEAAIAEABIAEAAIADABIgCALIgFgBIgKgBIgGABIgFABIAAA8g");
	this.shape_331.setTransform(156.975,79.425);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#333333").s().p("AgNAjQgFgDgEgEQgDgFgCgGQgBgGAAgHIAAgoIANAAIAAAlQAAANAEAGQAEAGAJAAIAEAAIAEgBIAEAAIACgBIAAg8IANAAIAABGIgLACIgRABQgIAAgGgCg");
	this.shape_332.setTransform(149.725,79.575);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#333333").s().p("AAIAmQgIAAgGgCQgHgDgFgFQgEgFgCgHQgDgIAAgHQAAgIADgHQACgHAFgFQAEgGAHgCQAGgDAHAAIAKABIAJACIgDALIgGgCIgIAAQgKAAgGAGQgGAHAAANQAAAFABAFQACAFADADQACAEAFACQADABAHABIAJgBIAHgDIACAMIgEABIgEABIgGABIgGAAg");
	this.shape_333.setTransform(142.725,79.5);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_334.setTransform(127.625,79.525);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#333333").s().p("AgKA1QgGgDgFgFQgFgFgDgHQgCgHAAgJQAAgIACgIQACgFAFgFQAEgFAGgDQAGgDAHAAQAGAAAFACIAHADIAAglIANgCIAABqIgLACIgQABQgHAAgIgCgAgGgHQgEACgCAEQgDACgBAGQgCAFAAAFQAAANAHAHQAHAGAJABIAJgBIAFgBIAAgtQgCgCgEgCQgFgBgFAAQgFAAgEABg");
	this.shape_335.setTransform(119.15,77.8);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#333333").s().p("AgJAQQAEgHABgIIABgMIAAgEIAAgDIANAAIAAACIAAACQAAAJgDAIQgCAIgFAIg");
	this.shape_336.setTransform(105.825,83.475);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_337.setTransform(100.175,79.525);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#333333").s().p("AgKAzIgJgEQgEgDgDgEQgBgFAAgGQgBgGADgEQACgFAFgCIAKgEIAKgBIAEAAIAEAAIADABIADAAIAAgDIgBgGIgDgFIgEgEQgEgCgEAAIgLABIgHACIgCgLIAJgCIALgBQAIAAAFACQAGACADAEQADAEACAFQACAFgBAFIAAAuIgEAAIgHABIgIABIgJAAIgKgBgAgCARIgGACIgFAEQgCACAAAEQABAHAEADQAFACAGAAIAJAAIAGgBIAAgVIgFgBIgIgBIgFAAgAgTgmIABgEIADgEIAFgDIAFgBIAFABIAEACIAEABIADABQABAAAAAAQABAAAAAAQABAAAAgBQABAAABgBIADgEIAHADIgCAEIgEAEIgDADQgDACgDAAIgFgBIgFgCIgDgCIgEgBQAAAAgBAAQAAAAgBABQAAAAgBAAQAAABgBAAIgDAFg");
	this.shape_338.setTransform(92.2,78.075);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#333333").s().p("AgEAyIgFgCIACgIIADABIAEABQAEAAAAgDIgBgDIgDgCIgBgBIABgEIABgEQgGgBgFgDQgGgDgDgFQgEgFgCgGQgCgGAAgHQAAgJADgGQACgIAFgFQAEgFAHgDQAGgCAHgBIAKABIAJADIgDALIgGgDIgIAAQgKAAgGAGQgGAIAAANQAAAFABAGQACAEADADQACADAFACQADACAHAAIAJgBIAHgCIACALIgDABIgFABIgFABIgFABIgCADQAEACACACQACADAAAEIgBAEQAAAAAAAAQAAABgBAAQAAABAAAAQgBABAAAAIgFACIgHABIgFAAg");
	this.shape_339.setTransform(85.725,80.75);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#333333").s().p("AgLAlIgJgEQgDgDgCgEQgCgFgBgGQAAgGADgFQACgEAEgBIALgFIAKgBIAEAAIAEABIADAAIACABIAAgDIAAgHIgCgGIgGgEQgDgBgEAAIgLABIgIACIgBgLIAIgCIAMgBQAIAAAFACQAGACADADQAEAFABAEQABAFABAHIAAAtIgGAAIgGABIgIABIgJAAIgLgBgAgCADIgGACIgFAEQgBACAAADQAAAHAEAEQAEACAIAAIAIAAIAFgBIAAgWIgEgBIgIgBIgFABg");
	this.shape_340.setTransform(78.4,79.5);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#333333").s().p("AAkAlIAAglIAAgLQAAgEgCgEQgCgDgDgBQgDgCgFAAQgGAAgFACIgFADIABAIIABAJIAAAoIgNAAIAAglIAAgLQgBgEgCgEQgBgDgDgBQgDgCgFAAIgEABIgEAAIgEAAIgDABIAAA8IgMAAIAAhFIALgDQAIgBAKAAQAGAAAFACQAFACADADIACgCIAGgCIAHgCIAIgBQAIAAAFACQAFADADAEQADAFACAGIABANIAAAog");
	this.shape_341.setTransform(69,79.425);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgDgEQgBgFgBgGQABgGACgFQADgEADgBIAKgFIALgBIAEAAIAEABIAEAAIACABIAAgDIgBgHIgCgGIgGgEQgDgBgEAAIgLABIgIACIgBgLIAJgCIALgBQAIAAAGACQAFACADADQAEAFABAEQABAFAAAHIAAAtIgEAAIgHABIgJABIgIAAIgKgBgAgCADIgGACIgEAEQgCACgBADQAAAHAFAEQAFACAGAAIAIAAIAHgBIAAgWIgFgBIgHgBIgGABg");
	this.shape_342.setTransform(59.1,79.5);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#333333").s().p("AgUAlIAAhEIAMgEQAHgBAHAAIAEAAIAEABIAEAAIADABIgCALIgFgBIgKgBIgGABIgFABIAAA8g");
	this.shape_343.setTransform(53.425,79.425);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#333333").s().p("AgQAxIgKgCIACgMIAKADIAMABQAKAAAFgEQAGgFAAgKIAAgDIgHADQgFABgGAAQgGABgGgDQgFgCgFgFQgEgEgDgGQgCgGAAgJQAAgIACgGQADgHAEgFQAFgFAGgDQAHgDAHAAQAJABAHABIALADIAABAQAAAQgIAHQgJAIgRAAIgNgBgAgLgfQgGAHAAALQAAAHACAEQACADACADQADADAEACIAGABQAFAAAFgBIAGgEIAAgpIgFgCIgJAAQgJAAgGAHg");
	this.shape_344.setTransform(45.975,80.75);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_345.setTransform(38.025,79.525);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#333333").s().p("AgUAlIAAhEIAMgEQAHgBAHAAIAEAAIAEABIAEAAIADABIgCALIgFgBIgKgBIgGABIgFABIAAA8g");
	this.shape_346.setTransform(31.675,79.425);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#333333").s().p("AghAxIAAheIANgCIANgBQATAAALAIQALAHAAAQQAAAIgDAHQgDAEgGAEQgFADgIACQgJACgJAAIgLAAIAAAkgAgUgjIAAAkIALAAIALgBIAKgBQADgCADgEQACgEAAgGQAAgGgCgDQgDgEgDgCQgEgCgFgBIgJgBIgOABg");
	this.shape_347.setTransform(24.625,78.25);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#333333").s().p("AgKAjQgHgCgFgGQgEgFgCgGQgDgIAAgIQAAgJADgHQADgHAFgEQAEgFAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAFAMAAIALgBIAHgCIACALIgIADIgOABQgIAAgHgDgAgFgZIgGAFQgDADgBAEIgCAHIAjAAQABgJgFgFQgFgGgIAAQgDAAgDABg");
	this.shape_348.setTransform(610.525,61.8);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#333333").s().p("AgJA0QgHgCgFgFQgFgFgDgHQgCgHAAgJQAAgIACgIQADgGADgFQAFgEAGgDQAGgDAHAAQAGAAAFABIAHAEIAAglIANgCIAABqIgMACIgQABQgGAAgHgDgAgGgHQgEADgDADQgCADgBAFQgBAEAAAGQgBANAHAHQAGAGAKAAIAIAAIAGgBIAAgtQgCgCgFgCQgEgCgGAAQgEAAgEACg");
	this.shape_349.setTransform(602.3,60.1);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#333333").s().p("AgRAkIgIgCIADgLIAHACQAFACAIAAQAHAAAEgCQAEgCAAgFQAAgEgEgEIgMgFIgIgEIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADAEIAFACIAGADIAJADIAHAEQADACABAEQACADAAAGQAAAKgIAFQgHAFgNAAQgKAAgFgCg");
	this.shape_350.setTransform(586.025,61.8);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#333333").s().p("AgLAlIgJgEQgDgDgDgFQgCgEAAgGQABgGACgEQACgFAEgBIAKgFIALgBIAEAAIAEABIAEAAIABABIAAgEIAAgGIgCgFIgGgFQgDgBgEAAIgLABIgIACIgBgLIAIgCIAMgBQAIAAAGACQAFACADAEQAEADABAGQACAFAAAGIAAAsIgGABIgGABIgJAAIgIABIgLgBgAgCADIgGACIgEADQgCADAAAEQgBAGAFAEQAEACAIAAIAHAAIAGgBIAAgVIgEgBIgHgCIgGABg");
	this.shape_351.setTransform(579.05,61.8);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#333333").s().p("AAkAlIAAglIAAgLQgBgEgBgEQgCgDgDgBQgDgCgFAAQgHAAgEACIgGADIACAIIABAJIAAAoIgNAAIAAglIAAgLQAAgEgCgEQgCgDgDgBQgDgCgFAAIgEABIgEAAIgEAAIgCABIAAA8IgOAAIAAhFIANgDQAHgBAKAAQAHAAAEACQAFACADADIACgCIAGgCIAHgCIAHgBQAJAAAFACQAGADADAEQACAFABAGIABANIAAAog");
	this.shape_352.setTransform(569.65,61.725);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#333333").s().p("AgQAxIgKgDIACgLIAKADIAMABQAKAAAFgEQAGgFAAgKIAAgDIgHACQgFACgGAAQgGAAgGgCQgFgCgFgFQgEgDgDgIQgCgFAAgJQAAgIACgGQADgHAEgFQAFgFAGgCQAHgDAHgBQAJAAAHACIALADIAAA/QAAARgIAIQgJAHgRABIgNgCgAgLgfQgGAHAAALQAAAGACAFQACAEACADQADACAEACIAGABQAFAAAFgBIAGgDIAAgqIgFgBIgJgBQgJAAgGAHg");
	this.shape_353.setTransform(559.325,63.05);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#333333").s().p("AgFAzIAAhIIALAAIAABIgAgFgkQgDgCAAgEQAAgEADgDQACgBADAAQADAAADABQADADgBAEQABAEgDACQgDADgDAAQgDAAgCgDg");
	this.shape_354.setTransform(553.75,60.3);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#333333").s().p("AgKA0QgGgCgFgFQgFgFgDgHQgCgHAAgJQAAgIACgIQADgGAEgFQAEgEAGgDQAGgDAHAAQAGAAAFABIAHAEIAAglIANgCIAABqIgLACIgRABQgHAAgHgDgAgGgHQgEADgDADQgCADgBAFQgCAEAAAGQAAANAHAHQAGAGAKAAIAIAAIAGgBIAAgtQgCgCgEgCQgFgCgFAAQgFAAgEACg");
	this.shape_355.setTransform(547.65,60.1);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#333333").s().p("AgLAlIgJgEQgDgDgDgFQgCgEAAgGQABgGACgEQACgFAEgBIAKgFIALgBIAEAAIAEABIAEAAIABABIAAgEIAAgGIgCgFIgGgFQgDgBgEAAIgLABIgIACIgBgLIAIgCIAMgBQAIAAAGACQAFACADAEQAEADABAGQACAFAAAGIAAAsIgFABIgHABIgJAAIgIABIgLgBgAgCADIgGACIgEADQgCADAAAEQgBAGAFAEQAEACAIAAIAHAAIAGgBIAAgVIgEgBIgHgCIgGABg");
	this.shape_356.setTransform(539.9,61.8);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#333333").s().p("AgUAlIAAhEIAMgEQAHgBAHAAIAEAAIAEABIAEAAIADABIgCALIgFgBIgKgBIgGABIgFABIAAA8g");
	this.shape_357.setTransform(534.225,61.725);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#333333").s().p("AgLAlIgJgEQgDgDgDgFQgCgEAAgGQABgGACgEQADgFADgBIAKgFIALgBIAEAAIAEABIAEAAIABABIAAgEIAAgGIgCgFIgGgFQgDgBgEAAIgLABIgIACIgBgLIAJgCIALgBQAIAAAGACQAFACADAEQADADACAGQABAFAAAGIAAAsIgEABIgHABIgJAAIgIABIgLgBgAgCADIgGACIgEADQgCADAAAEQgBAGAFAEQAFACAGAAIAIAAIAGgBIAAgVIgEgBIgHgCIgGABg");
	this.shape_358.setTransform(527.2,61.8);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#333333").s().p("AghAxIAAhfIANgBIANgBQATAAALAIQALAIAAAPQAAAIgDAHQgDAEgGAEQgFADgIADQgJABgJAAIgLAAIAAAkgAgUgkIAAAlIALAAIALgBIAKgCQADgBADgFQACgEAAgFQAAgGgCgEQgDgDgDgCQgEgCgFgBIgJgBIgOAAg");
	this.shape_359.setTransform(519.875,60.55);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgCgFQgCgEAAgGQgBgGADgEQACgFAFgBIAKgFIAKgBIAEAAIAEABIADAAIADABIAAgEIgBgGIgDgFIgEgFQgEgBgEAAIgLABIgHACIgCgLIAJgCIALgBQAIAAAFACQAGACADAEQADADACAGQACAFgBAGIAAAsIgEABIgHABIgIAAIgJABIgKgBgAgCADIgGACIgFADQgCADAAAEQABAGAEAEQAFACAGAAIAJAAIAGgBIAAgVIgFgBIgIgCIgFABg");
	this.shape_360.setTransform(502.15,61.8);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#333333").s().p("AARAlIAAglIgBgLQgBgFgCgDQgDgDgDgBQgEgCgEAAIgEABIgFAAIgDAAIgDABIAAA8IgMAAIAAhFIALgDQAIgBAJAAQAJAAAFACQAGADAEAEQADAFABAGQABAGAAAHIAAAog");
	this.shape_361.setTransform(494.7,61.725);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#333333").s().p("AgFAzIAAhIIALAAIAABIgAgFgkQgDgCABgEQgBgEADgDQADgBACAAQADAAADABQADADAAAEQAAAEgDACQgDADgDAAQgCAAgDgDg");
	this.shape_362.setTransform(488.9,60.3);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#333333").s().p("AgGAyQgFgFAAgLIAAhWIAMgCIAABXIAAAEQABABAAABQAAAAAAABQAAAAABAAQAAABAAAAIAEACIAFABIgCALQgLgBgFgEg");
	this.shape_363.setTransform(485.6,60.1);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#333333").s().p("AgfAyIAAhfIAMgDQAGgBAKAAQAHAAAHADQAGACAFAFQAFAFACAHQADAHAAAJQAAAIgCAGQgCAHgEAFQgFAFgGADQgGADgHAAQgGAAgFgCIgHgDIAAAdgAgSgkIAAAtIAHAEQAEABAGAAQAEAAAEgCQAEgCADgDQACgEABgEIABgKQAAgNgGgHQgGgGgKAAIgJAAIgFABg");
	this.shape_364.setTransform(479.375,63.025);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#333333").s().p("AgFAzIAAhIIALAAIAABIgAgFgkQgDgCAAgEQAAgEADgDQACgBADAAQADAAADABQACADAAAEQAAAEgCACQgDADgDAAQgDAAgCgDg");
	this.shape_365.setTransform(473.3,60.3);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#333333").s().p("AAIAmQgIAAgGgDQgHgCgFgGQgEgFgCgGQgDgIAAgIQAAgHADgHQACgHAFgGQAEgFAHgDQAGgCAHAAIAKAAIAJADIgDAMIgGgDIgIgBQgKABgGAGQgGAHAAAMQAAAGABAFQACAFADADQACAEAFACQADACAHgBIAJgBIAHgBIACALIgEABIgEABIgGABIgGAAg");
	this.shape_366.setTransform(468.525,61.8);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#333333").s().p("AgRAkIgIgCIADgLIAHACQAFACAIAAQAHAAAEgCQAEgCAAgFQAAgEgEgEIgMgFIgIgEIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADAEIAFACIAGADIAJADIAHAEQADACABAEQACADAAAGQAAAKgIAFQgHAFgNAAQgKAAgFgCg");
	this.shape_367.setTransform(461.925,61.8);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#333333").s().p("AgGAzIAAhIIANAAIAABIgAgFgkQgDgCABgEQgBgEADgDQADgBACAAQAEAAACABQACADABAEQgBAEgCACQgCADgEAAQgCAAgDgDg");
	this.shape_368.setTransform(457.05,60.3);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#333333").s().p("AgJA0QgHgCgFgFQgEgFgDgHQgDgHAAgJQAAgIADgIQABgGAEgFQAFgEAGgDQAGgDAHAAQAGAAAFABIAHAEIAAglIANgCIAABqIgMACIgPABQgIAAgGgDgAgGgHQgEADgCADQgDADgBAFQgBAEAAAGQAAANAGAHQAHAGAJAAIAJAAIAFgBIAAgtQgCgCgFgCQgEgCgGAAQgEAAgEACg");
	this.shape_369.setTransform(450.95,60.1);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgDgFQgCgEABgGQAAgGACgEQADgFADgBIAKgFIALgBIAEAAIAEABIAEAAIACABIAAgEIgBgGIgCgFIgGgFQgDgBgEAAIgLABIgIACIgBgLIAJgCIALgBQAIAAAGACQAFACADAEQADADACAGQABAFAAAGIAAAsIgEABIgHABIgJAAIgIABIgKgBgAgCADIgGACIgEADQgCADgBAEQAAAGAFAEQAFACAGAAIAIAAIAHgBIAAgVIgFgBIgHgCIgGABg");
	this.shape_370.setTransform(433.95,61.8);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#333333").s().p("AgKA0QgGgCgFgFQgFgFgDgHQgCgHAAgJQAAgIACgIQADgGAEgFQAEgEAGgDQAGgDAHAAQAGAAAFABIAHAEIAAglIANgCIAABqIgLACIgQABQgIAAgHgDgAgGgHQgEADgDADQgCADgBAFQgCAEAAAGQAAANAHAHQAGAGAKAAIAJAAIAFgBIAAgtQgCgCgEgCQgFgCgFAAQgFAAgEACg");
	this.shape_371.setTransform(426.15,60.1);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#333333").s().p("AgIAvQgEgCgEgEQgDgEAAgFIgBgNIAAhAIAMgDIAAAXIAbAAIAAALIgbAAIAAAhIABAJIADAFQABACADABIAFABQAFAAAFgCIAEgBIADAKIgHADQgFABgGABQgGAAgGgCg");
	this.shape_372.setTransform(410.55,60.75);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#333333").s().p("AgfAyIAAhfIAMgDQAGgBAKAAQAHAAAHADQAGACAFAFQAFAFACAHQADAHAAAJQAAAIgCAGQgCAHgEAFQgFAFgGADQgGADgHAAQgGAAgFgCIgHgDIAAAdgAgSgkIAAAtIAHAEQAEABAGAAQAEAAAEgCQAEgCADgDQACgEABgEIABgKQAAgNgGgHQgGgGgKAAIgJAAIgFABg");
	this.shape_373.setTransform(403.425,63.025);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#333333").s().p("AgFAzIAAhIIALAAIAABIgAgFgkQgCgCAAgEQAAgEACgDQACgBADAAQADAAADABQACADAAAEQAAAEgCACQgDADgDAAQgDAAgCgDg");
	this.shape_374.setTransform(397.35,60.3);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#333333").s().p("AgUAlIAAhEIAMgEQAHgBAHAAIAEAAIAEABIAEAAIADABIgCALIgFgBIgKgBIgGABIgFABIAAA8g");
	this.shape_375.setTransform(393.375,61.725);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#333333").s().p("AAIAmQgIAAgGgDQgHgCgFgGQgEgFgCgGQgDgIAAgIQAAgHADgHQACgHAFgGQAEgFAHgDQAGgCAHAAIAKAAIAJADIgDAMIgGgDIgIgBQgKABgGAGQgGAHAAAMQAAAGABAFQACAFADADQACAEAFACQADACAHgBIAJgBIAHgBIACALIgEABIgEABIgGABIgGAAg");
	this.shape_376.setTransform(387.175,61.8);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#333333").s().p("AgMAyIgJgCIgGgCIgFgCIAEgLIAKAEQAHACAJAAQAVAAAAgOQAAgFgCgDIgFgGIgIgEIgIgDIgKgEQgEgBgEgEQgDgDgCgEQgCgEAAgHQAAgMAIgHQAJgIAOAAQAJAAAHACQAIACADADIgFALQgCgCgGgCQgGgCgIAAIgGABQgDABgDACIgEAEIgBAGQAAAEABADIAEAEIAHAEIAHADIAMAFIAJAFQAEAEACAFQACAFAAAGQAAANgJAHQgKAHgQAAIgKgBg");
	this.shape_377.setTransform(379.975,60.575);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgDgFQgCgEAAgGQABgGACgEQADgFADgBIAKgFIALgBIAEAAIAEABIAEAAIABABIAAgEIAAgGIgCgFIgGgFQgDgBgEAAIgLABIgIACIgBgLIAJgCIALgBQAIAAAGACQAFACADAEQADADACAGQABAFAAAGIAAAsIgEABIgHABIgJAAIgIABIgKgBgAgCADIgGACIgEADQgCADAAAEQgBAGAFAEQAFACAGAAIAIAAIAGgBIAAgVIgEgBIgHgCIgGABg");
	this.shape_378.setTransform(372.4,61.8);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#333333").s().p("AgFAkIgOghQgIgSgFgVIAOAAIAEAQIAFAOIAFAOIAEAOIAFgOIAFgOIAFgOIAEgQIAOAAQgGAVgHASIgOAhg");
	this.shape_379.setTransform(365.475,61.8);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#333333").s().p("AgLAlIgJgEQgDgDgDgFQgCgEAAgGQABgGACgEQACgFAEgBIAKgFIALgBIAEAAIAEABIAEAAIABABIAAgEIAAgGIgCgFIgGgFQgDgBgEAAIgLABIgIACIgBgLIAJgCIALgBQAIAAAGACQAFACADAEQAEADABAGQACAFAAAGIAAAsIgGABIgGABIgJAAIgIABIgLgBgAgCADIgGACIgEADQgCADAAAEQgBAGAFAEQAEACAIAAIAHAAIAGgBIAAgVIgEgBIgHgCIgGABg");
	this.shape_380.setTransform(358.1,61.8);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#333333").s().p("AgLAxIgHgCIgGgCIgEgDIAGgLIAHAFQAFABAHAAQAJAAAFgEQAEgGAAgMIAAhAIAOAAIAABCQAAAGgCAGQgBAHgEAEQgDAEgHADQgGACgIAAIgJAAg");
	this.shape_381.setTransform(350.625,60.7);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#333333").s().p("AAkAlIAAglIAAgLQgBgEgCgEQgBgDgDgBQgDgCgFAAQgGAAgEACIgGADIABAIIAAAJIAAAoIgLAAIAAglIgBgLQgBgEgCgEQgBgDgDgBQgDgCgFAAIgEABIgFAAIgDAAIgDABIAAA8IgMAAIAAhFIALgDQAIgBAJAAQAIAAAEACQAFACADADIADgCIAEgCIAHgCIAJgBQAIAAAFACQAFADADAEQAEAFABAGIABANIAAAog");
	this.shape_382.setTransform(332.45,61.725);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#333333").s().p("AgKAjQgHgCgFgGQgEgFgCgGQgDgIAAgIQAAgJADgHQADgHAFgEQAEgFAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAFAMAAIALgBIAHgCIACALIgIADIgOABQgIAAgHgDgAgFgZIgGAFQgDADgBAEIgCAHIAjAAQABgJgFgFQgFgGgIAAQgDAAgDABg");
	this.shape_383.setTransform(322.425,61.8);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_384.setTransform(305.175,61.825);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#333333").s().p("AgIAvQgEgCgEgEQgDgEgBgFIAAgNIAAhAIAMgDIAAAXIAbAAIAAALIgbAAIAAAhIABAJIADAFQABACADABIAFABQAGAAAEgCIAEgBIADAKIgHADQgFABgGABQgGAAgGgCg");
	this.shape_385.setTransform(298.6,60.75);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#333333").s().p("AgKAjQgHgCgFgGQgEgFgCgGQgDgIAAgIQAAgJADgHQADgHAFgEQAEgFAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAFAMAAIALgBIAHgCIACALIgIADIgOABQgIAAgHgDgAgFgZIgGAFQgDADgBAEIgCAHIAjAAQABgJgFgFQgFgGgIAAQgDAAgDABg");
	this.shape_386.setTransform(291.425,61.8);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#333333").s().p("AgMBAIgFgBIACgKIADAAIAEABQAGAAACgFQADgEAAgIIAAhHIANAAIAABHQAAAOgGAHQgHAGgLAAIgEAAgAADgxQgCgCAAgEQAAgEACgDQADgBADAAQAEAAACABQADADAAAEQAAAEgDACQgCADgEAAQgDAAgDgDg");
	this.shape_387.setTransform(284.875,61.6);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_388.setTransform(279.925,61.825);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#333333").s().p("AgUAlIAAhEIAMgEQAHgBAHAAIAEAAIAEABIAEAAIADABIgCALIgFgBIgKgBIgGABIgFABIAAA8g");
	this.shape_389.setTransform(273.575,61.725);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#333333").s().p("AgfAyIAAhfIAMgDQAGgBAKAAQAHAAAHADQAGACAFAFQAFAFACAHQADAHAAAJQAAAIgCAGQgCAHgEAFQgFAFgGADQgGADgHAAQgGAAgFgCIgHgDIAAAdgAgSgkIAAAtIAHAEQAEABAGAAQAEAAAEgCQAEgCADgDQACgEABgEIABgKQAAgNgGgHQgGgGgKAAIgJAAIgFABg");
	this.shape_390.setTransform(266.475,63.025);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_391.setTransform(248.775,61.825);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#333333").s().p("AgKA0QgGgCgFgFQgFgFgDgHQgCgHAAgJQAAgIACgIQADgGAEgFQAEgEAGgDQAGgDAHAAQAGAAAFABIAHAEIAAglIANgCIAABqIgLACIgRABQgHAAgHgDgAgGgHQgEADgDADQgCADgBAFQgCAEAAAGQAAANAHAHQAGAGAKAAIAIAAIAGgBIAAgtQgCgCgEgCQgFgCgFAAQgFAAgEACg");
	this.shape_392.setTransform(240.3,60.1);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#333333").s().p("AgGAyQgFgFAAgLIAAhWIAMgCIAABXIAAAEQABABAAABQAAAAAAABQAAAAABAAQAAABABAAIADACIAFABIgCALQgLgBgFgEg");
	this.shape_393.setTransform(225.6,60.1);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgCgFQgCgEAAgGQAAgGACgEQADgFAEgBIAKgFIAKgBIAEAAIAEABIADAAIADABIAAgEIgBgGIgDgFIgEgFQgEgBgEAAIgLABIgHACIgCgLIAIgCIAMgBQAIAAAFACQAGACADAEQADADACAGQABAFABAGIAAAsIgGABIgGABIgIAAIgJABIgKgBgAgCADIgGACIgFADQgCADAAAEQABAGAEAEQAEACAHAAIAJAAIAGgBIAAgVIgFgBIgIgCIgFABg");
	this.shape_394.setTransform(219.45,61.8);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#333333").s().p("AARAlIAAglIgBgLQgBgFgDgDQgBgDgEgBQgEgCgDAAIgFABIgEAAIgEAAIgDABIAAA8IgMAAIAAhFIALgDQAIgBAJAAQAJAAAFACQAGADAEAEQADAFABAGQABAGAAAHIAAAog");
	this.shape_395.setTransform(212,61.725);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#333333").s().p("AgFAzIAAhIIALAAIAABIgAgFgkQgCgCAAgEQAAgEACgDQADgBACAAQADAAADABQADADAAAEQAAAEgDACQgDADgDAAQgCAAgDgDg");
	this.shape_396.setTransform(206.2,60.3);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#333333").s().p("AgVA2IAAhOQAAgOAHgIQAHgHANAAIAKAAIAGACIgCALIgFgBIgIgBQgIAAgDAFQgEAFAAAIIAAAGIAbAAIAAALIgbAAIAAA9g");
	this.shape_397.setTransform(202.375,60.025);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_398.setTransform(185.675,61.825);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#333333").s().p("AgKA0QgGgCgFgFQgFgFgDgHQgCgHAAgJQAAgIACgIQACgGAFgFQAEgEAGgDQAGgDAHAAQAGAAAFABIAHAEIAAglIANgCIAABqIgLACIgQABQgIAAgHgDgAgGgHQgEADgCADQgDADgBAFQgCAEAAAGQAAANAHAHQAHAGAJAAIAJAAIAFgBIAAgtQgCgCgEgCQgFgCgFAAQgFAAgEACg");
	this.shape_399.setTransform(177.2,60.1);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#333333").s().p("AgKAlIgKgEQgDgDgDgFQgCgEAAgGQABgGACgEQADgFADgBIAKgFIALgBIAEAAIAEABIAEAAIACABIAAgEIgBgGIgCgFIgGgFQgDgBgEAAIgLABIgIACIgBgLIAJgCIALgBQAIAAAGACQAFACADAEQADADACAGQABAFAAAGIAAAsIgEABIgHABIgJAAIgIABIgKgBgAgCADIgGACIgEADQgCADAAAEQgBAGAFAEQAFACAGAAIAIAAIAHgBIAAgVIgFgBIgHgCIgGABg");
	this.shape_400.setTransform(169.45,61.8);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#333333").s().p("AgHAvQgGgCgCgEQgDgEgCgFIgBgNIAAhAIAOgDIAAAXIAaAAIAAALIgaAAIAAAhIAAAJIACAFQACACADABIAFABQAFAAAEgCIAGgBIABAKIgGADQgFABgHABQgFAAgFgCg");
	this.shape_401.setTransform(163.55,60.75);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#333333").s().p("AgGAyQgFgFAAgLIAAhWIAMgCIAABXIAAAEQABABAAABQAAAAAAABQAAAAABAAQAAABAAAAIAEACIAFABIgCALQgLgBgFgEg");
	this.shape_402.setTransform(158.8,60.1);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#333333").s().p("AgNAjQgFgDgEgEQgDgFgCgGQgBgGAAgHIAAgoIANAAIAAAlQAAANAEAGQAEAGAJAAIAEAAIAEgBIAEAAIACgBIAAg8IANAAIAABGIgLACIgRABQgIAAgGgCg");
	this.shape_403.setTransform(152.425,61.875);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#333333").s().p("AgRAkIgIgCIADgLIAHACQAFACAIAAQAHAAAEgCQAEgCAAgFQAAgEgEgEIgMgFIgIgEIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADAEIAFACIAGADIAJADIAHAEQADACABAEQACADAAAGQAAAKgIAFQgHAFgNAAQgKAAgFgCg");
	this.shape_404.setTransform(145.325,61.8);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#333333").s().p("AgKAjQgHgCgFgGQgEgFgCgGQgDgIAAgIQAAgJADgHQADgHAFgEQAEgFAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAFAMAAIALgBIAHgCIACALIgIADIgOABQgIAAgHgDgAgFgZIgGAFQgDADgBAEIgCAHIAjAAQABgJgFgFQgFgGgIAAQgDAAgDABg");
	this.shape_405.setTransform(138.225,61.8);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#333333").s().p("AgUAlIAAhEIAMgEQAHgBAHAAIAEAAIAEABIAEAAIADABIgCALIgFgBIgKgBIgGABIgFABIAAA8g");
	this.shape_406.setTransform(132.125,61.725);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_407.setTransform(115.575,61.825);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#333333").s().p("AgKA0QgHgCgFgGQgEgFgCgGQgDgIAAgIQAAgKADgHQADgGAFgEQAEgFAGgDQAGgCAGAAQAOAAAIAJQAIAJAAASIAAACIAAADIgxAAQABALAGAGQAFAFAMAAIALgBIAHgCIACALIgIADIgOABQgIAAgHgDgAgFgIIgGAFQgDADgBADIgCAHIAjAAQABgJgFgEQgFgGgIAAQgDAAgDABgAgHggIARgWIAIAIIgTATg");
	this.shape_408.setTransform(98.225,60.1);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_409.setTransform(80.975,61.825);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#333333").s().p("AgQAxIgKgDIACgLIAKADIAMABQAKAAAFgEQAGgFAAgKIAAgDIgHACQgFACgGAAQgGAAgGgCQgFgCgFgFQgEgDgDgIQgCgFAAgJQAAgIACgGQADgHAEgFQAFgFAGgCQAHgDAHgBQAJAAAHACIALADIAAA/QAAARgIAIQgJAHgRABIgNgCgAgLgfQgGAHAAALQAAAGACAFQACAEACADQADACAEACIAGABQAFAAAFgBIAGgDIAAgqIgFgBIgJgBQgJAAgGAHg");
	this.shape_410.setTransform(72.575,63.05);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_411.setTransform(64.625,61.825);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#333333").s().p("AgMBAIgFgBIACgKIADAAIAEABQAGAAACgFQADgEAAgIIAAhHIANAAIAABHQAAAOgGAHQgHAGgLAAIgEAAgAADgxQgCgCAAgEQAAgEACgDQADgBADAAQAEAAACABQADADAAAEQAAAEgDACQgCADgEAAQgDAAgDgDg");
	this.shape_412.setTransform(57.825,61.6);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#333333").s().p("AgKAjQgHgCgFgGQgEgFgCgGQgDgIAAgIQAAgJADgHQADgHAFgEQAEgFAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAFAMAAIALgBIAHgCIACALIgIADIgOABQgIAAgHgDgAgFgZIgGAFQgDADgBAEIgCAHIAjAAQABgJgFgFQgFgGgIAAQgDAAgDABg");
	this.shape_413.setTransform(43.775,61.8);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#333333").s().p("AgHAvQgGgCgCgEQgDgEgCgFIgBgNIAAhAIAOgDIAAAXIAaAAIAAALIgaAAIAAAhIAAAJIACAFQADACACABIAFABQAFAAAEgCIAGgBIABAKIgGADQgFABgHABQgGAAgEgCg");
	this.shape_414.setTransform(37.45,60.75);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#333333").s().p("AgRAkIgIgCIADgLIAHACQAFACAIAAQAHAAAEgCQAEgCAAgFQAAgEgEgEIgMgFIgIgEIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADAEIAFACIAGADIAJADIAHAEQADACABAEQACADAAAGQAAAKgIAFQgHAFgNAAQgKAAgFgCg");
	this.shape_415.setTransform(31.125,61.8);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#333333").s().p("AgeAwIAAhgIA5AAIAAAMIgsAAIAAAdIAoAAIAAAKIgoAAIAAAiIAxAAIAAALg");
	this.shape_416.setTransform(24.35,60.6);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#333333").s().p("AgTAzQgKgEgGgHQgHgIgDgKQgEgKAAgMQAAgMAEgKQADgKAHgHQAHgHAJgEQAJgEAKAAQALAAAJAEQAKAEAGAHQAHAHAEAKQADAKAAAMQAAAMgDAKQgEAKgHAIQgGAHgJAEQgKAEgLAAQgKAAgJgEgAgSgYQgGAJAAAPQAAAPAGAJQAHAKALAAQAMAAAHgKQAGgJAAgPQAAgPgGgJQgHgJgMAAQgLAAgHAJg");
	this.shape_417.setTransform(159.025,32.2);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#333333").s().p("AgMBCQgHgDgFgGQgEgFgCgIQgCgIAAgLIAAhZIAZgEIAAAfIAkAAIAAAUIgkAAIAAAqQAAANADAFQAEAFAJAAQAGAAAGgBIAIgDIAEAUIgLADQgHACgJAAQgLAAgHgDg");
	this.shape_418.setTransform(149.4,30.725);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#333333").s().p("AgQAzQgLgEgGgIQgHgHgDgKQgDgKAAgMQAAgMAEgLQAEgKAHgHQAHgHAIgDQAJgEAIAAQAWAAAMANQAMAOAAAaIAAAEIAAAEIhEAAQABANAIAHQAIAHAOAAQAIAAAIgCQAHgBAEgCIADAUIgFACIgIACIgKABIgKABQgNAAgKgEgAgHggQgEACgDAEQgDADgCAFIgCAJIAsAAQAAgFgBgFIgEgIIgHgFQgEgCgFAAQgFAAgEACg");
	this.shape_419.setTransform(138.975,32.175);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#333333").s().p("AgTBdIgIgCIADgUQAFACAGAAQAIAAAEgFQACgFAAgKIAAhkIAYAAIAABkQAAAVgJAKQgKAKgRAAIgIgBgAADhDQgEgEAAgGQAAgHAEgFQAEgDAGAAQAGAAAFADQAEAFAAAHQAAAGgEAEQgFAEgGAAQgGAAgEgEg");
	this.shape_420.setTransform(129.225,31.75);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#333333").s().p("AgTAzQgKgEgGgHQgHgIgDgKQgEgKAAgMQAAgMAEgKQADgKAHgHQAHgHAJgEQAJgEAKAAQALAAAJAEQAKAEAGAHQAHAHAEAKQADAKAAAMQAAAMgDAKQgEAKgHAIQgGAHgJAEQgKAEgLAAQgKAAgJgEgAgSgYQgGAJAAAPQAAAPAGAJQAHAKALAAQAMAAAHgKQAGgJAAgPQAAgPgGgJQgHgJgMAAQgLAAgHAJg");
	this.shape_421.setTransform(121.825,32.2);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#333333").s().p("AgfA2IAAhjIASgFQAKgCAMAAIAGAAIAGABIAGABIAFABIgEAUIgJgCIgMgBIgHABIgHABIAABUg");
	this.shape_422.setTransform(112.525,32.05);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#333333").s().p("AgyBGIAAiHIAUgDIAUgBQAdAAAQALQAQALAAAYQAAALgEAKQgFAHgIAFQgIAGgMACQgMADgOAAIgMAAIAAAxgAgYgvIAAAvIAMAAQARAAAKgEQAKgGAAgOQAAgGgDgFQgDgFgEgDQgFgCgGgBIgNgBIgPAAg");
	this.shape_423.setTransform(102.075,30.4);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#333333").s().p("AgTAzQgKgEgGgHQgHgIgDgKQgEgKAAgMQAAgMAEgKQADgKAHgHQAHgHAJgEQAJgEAKAAQALAAAJAEQAKAEAGAHQAHAHAEAKQADAKAAAMQAAAMgDAKQgEAKgHAIQgGAHgJAEQgKAEgLAAQgKAAgJgEgAgSgYQgGAJAAAPQAAAPAGAJQAHAKALAAQAMAAAHgKQAGgJAAgPQAAgPgGgJQgHgJgMAAQgLAAgHAJg");
	this.shape_424.setTransform(84.725,32.2);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#333333").s().p("AgQAzQgLgEgGgIQgHgHgDgKQgDgKAAgMQAAgMAEgLQAEgKAHgHQAHgHAIgDQAJgEAIAAQAWAAAMANQAMAOAAAaIAAAEIAAAEIhEAAQABANAIAHQAIAHAOAAQAIAAAIgCQAHgBAEgCIADAUIgFACIgIACIgKABIgKABQgNAAgKgEgAgHggQgEACgDAEQgDADgCAFIgCAJIAsAAQAAgFgBgFIgEgIIgHgFQgEgCgFAAQgFAAgEACg");
	this.shape_425.setTransform(68.375,32.175);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#333333").s().p("AgfA2IAAhjIASgFQAKgCAMAAIAGAAIAGABIAGABIAFABIgEAUIgJgCIgMgBIgHABIgHABIAABUg");
	this.shape_426.setTransform(59.375,32.05);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#333333").s().p("AgcBNIgSgEIAAiTIAYgEIAAA2IALgEQAFgCAHAAQALAAAIAEQAKAEAFAHQAGAIADAJQADAKAAAMQAAANgDAKQgFAKgGAHQgHAHgKAEQgJAEgMAAQgMAAgLgCgAgOgHQgFACgDACIAAA7IAHABIAJABQANAAAIgJQAHgJAAgQQABgQgHgIQgGgJgMAAQgGAAgGACg");
	this.shape_427.setTransform(49,29.775);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#333333").s().p("AgTAzQgKgEgGgHQgHgIgDgKQgEgKAAgMQAAgMAEgKQADgKAHgHQAHgHAJgEQAJgEAKAAQALAAAJAEQAKAEAGAHQAHAHAEAKQADAKAAAMQAAAMgDAKQgEAKgHAIQgGAHgJAEQgKAEgLAAQgKAAgJgEgAgSgYQgGAJAAAPQAAAPAGAJQAHAKALAAQAMAAAHgKQAGgJAAgPQAAgPgGgJQgHgJgMAAQgLAAgHAJg");
	this.shape_428.setTransform(36.775,32.2);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#333333").s().p("AgTBIIgMgEIgKgDIgGgCIAHgWIAPAGQAJADANAAQANABAGgFQAGgEAAgJQAAgFgCgDQgCgEgEgDIgKgGIgLgEIgOgGQgHgCgFgFQgFgFgDgGQgDgGAAgJQAAgTANgLQANgLAVABQANAAAKACQAKADAGAEIgIAUQgHgDgIgDQgIgCgIAAQgKAAgFAFQgGAEAAAHQAAAFACAEIAFAGIAIAEIAKAFIARAGQAIAEAFAEQAGAGACAHQADAGAAAKQAAATgNAKQgNALgZAAIgQgBg");
	this.shape_429.setTransform(25.425,30.45);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#FFFFFF").s().p("EgvqAUoQhQAAAAhQMAAAgmvQAAhQBQAAMBfVAAAQBQAAAABQMAAAAmvQAABQhQAAg");
	this.shape_430.setTransform(318.6273,170.8023,1.0176,1.2936);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,637.1999999999999,341.6);


(lib.g_rank = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.score10 = new cjs.Text("", "14px 'Ubuntu'", "#333333");
	this.score10.name = "score10";
	this.score10.textAlign = "center";
	this.score10.lineHeight = 18;
	this.score10.lineWidth = 101;
	this.score10.parent = this;
	this.score10.setTransform(566.5,292.4);

	this.score9 = new cjs.Text("", "14px 'Ubuntu'", "#333333");
	this.score9.name = "score9";
	this.score9.textAlign = "center";
	this.score9.lineHeight = 18;
	this.score9.lineWidth = 101;
	this.score9.parent = this;
	this.score9.setTransform(566.5,269.4);

	this.score8 = new cjs.Text("", "14px 'Ubuntu'", "#333333");
	this.score8.name = "score8";
	this.score8.textAlign = "center";
	this.score8.lineHeight = 18;
	this.score8.lineWidth = 101;
	this.score8.parent = this;
	this.score8.setTransform(566.5,246.4);

	this.score7 = new cjs.Text("", "14px 'Ubuntu'", "#333333");
	this.score7.name = "score7";
	this.score7.textAlign = "center";
	this.score7.lineHeight = 18;
	this.score7.lineWidth = 101;
	this.score7.parent = this;
	this.score7.setTransform(566.5,223.4);

	this.score6 = new cjs.Text("", "14px 'Ubuntu'", "#333333");
	this.score6.name = "score6";
	this.score6.textAlign = "center";
	this.score6.lineHeight = 18;
	this.score6.lineWidth = 101;
	this.score6.parent = this;
	this.score6.setTransform(566.5,200.4);

	this.score5 = new cjs.Text("", "14px 'Ubuntu'", "#333333");
	this.score5.name = "score5";
	this.score5.textAlign = "center";
	this.score5.lineHeight = 18;
	this.score5.lineWidth = 101;
	this.score5.parent = this;
	this.score5.setTransform(566.5,177.4);

	this.score4 = new cjs.Text("", "14px 'Ubuntu'", "#333333");
	this.score4.name = "score4";
	this.score4.textAlign = "center";
	this.score4.lineHeight = 18;
	this.score4.lineWidth = 101;
	this.score4.parent = this;
	this.score4.setTransform(566.5,154.4);

	this.score3 = new cjs.Text("", "14px 'Ubuntu'", "#333333");
	this.score3.name = "score3";
	this.score3.textAlign = "center";
	this.score3.lineHeight = 18;
	this.score3.lineWidth = 101;
	this.score3.parent = this;
	this.score3.setTransform(566.5,131.4);

	this.score2 = new cjs.Text("", "14px 'Ubuntu'", "#333333");
	this.score2.name = "score2";
	this.score2.textAlign = "center";
	this.score2.lineHeight = 18;
	this.score2.lineWidth = 101;
	this.score2.parent = this;
	this.score2.setTransform(566.5,108.4);

	this.score1 = new cjs.Text("", "14px 'Ubuntu'", "#333333");
	this.score1.name = "score1";
	this.score1.textAlign = "center";
	this.score1.lineHeight = 18;
	this.score1.lineWidth = 101;
	this.score1.parent = this;
	this.score1.setTransform(566.5,85.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgLAjQgHgCgFgGQgFgEgCgIQgCgHAAgIQAAgIADgIQADgHAEgFQAFgFAGgCQAHgCAFgBQAPAAAJAKQAIAJAAATIAAACIAAADIgwAAQABAJAGAFQAFAEAKABIALgBIAIgDIACAOIgEABIgFACIgHABIgHABQgJgBgHgDgAgFgWIgFAEIgDAGIgBAFIAeAAIgBgGIgDgGIgEgDQgDgBgEAAQgDAAgDABg");
	this.shape.setTransform(580.525,71.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgVAlIAAhEIAMgEQAHgBAIgBIAEABIAEAAIAFABIADABIgDAPIgGgCIgIAAIgFAAIgEABIAAA5g");
	this.shape_1.setTransform(574.225,71.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgNAjQgHgCgEgFQgFgFgCgIQgDgHAAgIQAAgIADgHQACgHAFgFQAFgFAGgDQAGgCAHgBQAIABAGACQAHADAEAFQAFAFADAHQACAHAAAIQAAAIgCAHQgDAIgEAFQgFAFgHACQgGADgIABQgHgBgGgDgAgMgRQgFAHAAAKQAAALAFAGQAFAHAHAAQAIAAAFgHQAFgGAAgLQAAgKgFgHQgFgGgIAAQgHAAgFAGg");
	this.shape_2.setTransform(566.725,71.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgHAjQgGgCgGgGQgEgEgCgIQgDgHAAgIQAAgHADgHQADgHAFgGQAEgEAHgEQAGgDAIAAQALAAAJAEIgEAOIgGgCIgIgBQgKAAgFAGQgFAHAAAKQAAALAFAGQAFAGALABIAIgBIAIgCIACANIgJADQgFACgGAAQgJgBgHgDg");
	this.shape_3.setTransform(559.45,71.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgNAyIgIgCIgHgCIgFgCIAGgPIAKAFQAGACAJAAQAJAAAEgEQAFgDAAgGQAAgDgCgDIgEgEIgHgEIgIgEIgJgDIgJgFQgDgDgCgFQgDgEAAgGQAAgOAJgHQAKgIAOAAQAJAAAHADIAMAEIgGAOIgKgEQgGgBgGAAQgGAAgEADQgEADAAAFQAAADABACIAEAFIAGADIAGADIAMAFQAGACADADQAEAEACAFQACAEAAAHQAAANgJAIQgKAHgRAAIgLgBg");
	this.shape_4.setTransform(552.175,70.575);

	this.nome10 = new cjs.Text("", "14px 'Ubuntu'", "#333333");
	this.nome10.name = "nome10";
	this.nome10.lineHeight = 18;
	this.nome10.lineWidth = 492;
	this.nome10.parent = this;
	this.nome10.setTransform(20,292.4);

	this.nome9 = new cjs.Text("", "14px 'Ubuntu'", "#333333");
	this.nome9.name = "nome9";
	this.nome9.lineHeight = 18;
	this.nome9.lineWidth = 492;
	this.nome9.parent = this;
	this.nome9.setTransform(20,269.4);

	this.nome8 = new cjs.Text("", "14px 'Ubuntu'", "#333333");
	this.nome8.name = "nome8";
	this.nome8.lineHeight = 18;
	this.nome8.lineWidth = 492;
	this.nome8.parent = this;
	this.nome8.setTransform(20,246.4);

	this.nome7 = new cjs.Text("", "14px 'Ubuntu'", "#333333");
	this.nome7.name = "nome7";
	this.nome7.lineHeight = 18;
	this.nome7.lineWidth = 492;
	this.nome7.parent = this;
	this.nome7.setTransform(20,223.4);

	this.nome6 = new cjs.Text("", "14px 'Ubuntu'", "#333333");
	this.nome6.name = "nome6";
	this.nome6.lineHeight = 18;
	this.nome6.lineWidth = 492;
	this.nome6.parent = this;
	this.nome6.setTransform(20,200.4);

	this.nome5 = new cjs.Text("", "14px 'Ubuntu'", "#333333");
	this.nome5.name = "nome5";
	this.nome5.lineHeight = 18;
	this.nome5.lineWidth = 492;
	this.nome5.parent = this;
	this.nome5.setTransform(20,177.4);

	this.nome4 = new cjs.Text("", "14px 'Ubuntu'", "#333333");
	this.nome4.name = "nome4";
	this.nome4.lineHeight = 18;
	this.nome4.lineWidth = 492;
	this.nome4.parent = this;
	this.nome4.setTransform(20,154.4);

	this.nome3 = new cjs.Text("", "14px 'Ubuntu'", "#333333");
	this.nome3.name = "nome3";
	this.nome3.lineHeight = 18;
	this.nome3.lineWidth = 492;
	this.nome3.parent = this;
	this.nome3.setTransform(20,131.4);

	this.nome2 = new cjs.Text("", "14px 'Ubuntu'", "#333333");
	this.nome2.name = "nome2";
	this.nome2.lineHeight = 18;
	this.nome2.lineWidth = 492;
	this.nome2.parent = this;
	this.nome2.setTransform(20,108.4);

	this.nome1 = new cjs.Text("", "14px 'Ubuntu'", "#333333");
	this.nome1.name = "nome1";
	this.nome1.lineHeight = 18;
	this.nome1.lineWidth = 492;
	this.nome1.parent = this;
	this.nome1.setTransform(20,85.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgLAjQgHgCgFgGQgFgEgCgIQgCgHAAgIQAAgIADgIQADgHAEgFQAFgFAGgCQAHgCAFgBQAPAAAJAKQAIAJAAATIAAACIAAADIgwAAQABAJAGAFQAFAEAKABIALgBIAIgDIACAOIgEABIgFACIgHABIgHABQgJgBgHgDgAgFgWIgFAEIgDAGIgBAFIAeAAIgBgGIgDgGIgEgDQgDgBgEAAQgDAAgDABg");
	this.shape_5.setTransform(54.775,71.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AAhAlIAAglQAAgLgCgGQgEgEgIAAIgHABIgFACIABAIIAAAIIAAAnIgQAAIAAglQAAgLgDgGQgCgEgIAAIgHAAIgEABIAAA5IgRAAIAAhGIAMgCQAIgBAKgBQAHABAEABQAGACACAEIAEgCIAFgDIAGgCIAHgBQAIABAGACQAFACADAFQAEAFABAFIABAPIAAAng");
	this.shape_6.setTransform(44.8,71.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgNAjQgHgCgEgFQgFgFgCgIQgDgHAAgIQAAgIADgHQACgHAFgFQAFgFAGgDQAGgCAHgBQAIABAGACQAHADAEAFQAFAFADAHQACAHAAAIQAAAIgCAHQgDAIgEAFQgFAFgHACQgGADgIABQgHgBgGgDgAgMgRQgFAHAAAKQAAALAFAGQAFAHAHAAQAIAAAFgHQAFgGAAgLQAAgKgFgHQgFgGgIAAQgHAAgFAGg");
	this.shape_7.setTransform(34.525,71.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AAZAwIgKgRIgNgSIgLgRIgNgQIAABEIgRAAIAAhfIAOAAIAMANIANARIAMARIALAQIAAg/IARAAIAABfg");
	this.shape_8.setTransform(25.175,70.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgaA1IgLgEIAEgUIANAEQAHACAKAAQAIAAAFgCQAEgDAAgFQAAgGgEgDQgFgDgKgEIgMgFIgKgGQgEgDgCgFQgCgGAAgHQAAgOAKgJQALgIARAAQAJAAAJACQAIABAEACIgEAUIgKgEQgGgBgJAAQgGAAgFACQgEADAAAFIABAFIADADIAGAEIAHADQAJADAGAEQAGACAEAEQAEADACAFQABAFAAAHQAAAPgLAIQgLAIgTAAQgOAAgJgCg");
	this.shape_9.setTransform(213.725,38.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgQAzQgLgEgGgIQgHgHgDgKQgDgKAAgMQAAgMAEgLQAEgKAHgHQAHgHAIgDQAJgEAIAAQAWAAAMANQAMAOAAAaIAAAEIAAAEIhEAAQABANAIAHQAIAHAOAAQAIAAAIgCIALgDIADAUIgFACIgIACIgKABIgKABQgNAAgKgEgAgHggQgEACgDAEQgDADgCAFIgCAJIAsAAQAAgFgBgFIgEgIIgHgFQgEgCgFAAQgFAAgEACg");
	this.shape_10.setTransform(203.425,38.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgfA1IAAhiIASgFQAKgDAMAAIAGABIAGABIAGABIAFACIgEATIgJgBIgMgBIgHABIgHABIAABSg");
	this.shape_11.setTransform(194.425,38.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgTAzQgKgEgGgIQgHgGgDgLQgEgKAAgMQAAgMAEgKQADgKAHgHQAHgHAJgFQAJgDAKAAQALAAAJADQAKAFAGAHQAHAHAEAKQADAKAAAMQAAAMgDAKQgEALgHAGQgGAIgJAEQgKAEgLAAQgKAAgJgEgAgSgYQgGAJAAAPQAAAPAGAKQAHAJALAAQAMAAAHgJQAGgKAAgPQAAgPgGgJQgHgJgMAAQgLAAgHAJg");
	this.shape_12.setTransform(183.725,38.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgPBLQgKgEgHgHQgHgHgDgKQgEgKAAgNQAAgMADgKQADgJAGgIQAGgHAJgEQAIgEALAAQAHAAAGACIAKAEIAAgyIAYgEIAACXIgSAEQgLACgMAAQgLAAgKgEgAgPAAQgGAIAAAQQAAAQAHAJQAIAJAMAAIAKgBIAHgBIAAg7IgJgEQgFgCgGAAQgMAAgGAJg");
	this.shape_13.setTransform(171.525,35.775);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgQA1QgIgCgGgEQgFgEgDgHQgDgFAAgKQAAgJADgGQAEgGAGgDQAGgEAIgCQAIgBAHgBIAJABIAJABIAAgDIgBgJQgBgDgDgDQgCgDgEgBQgEgCgFAAQgJAAgHABIgLACIgDgTIANgDQAJgCAJAAQAMAAAIAEQAIACAFAGQAFAFACAIQACAHAAAKIAAA+IgRADQgLABgOAAQgIAAgIgBgAgCAGIgIACQgDACgCADQgCADAAAFQAAAIAFADQAGAEAIgBIARgBIAAgbIgGgBIgIAAIgHAAg");
	this.shape_14.setTransform(160.175,38.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgTAyQgJgEgFgGQgFgHgCgIQgCgKgBgKIAAg6IAZAAIAAA2QAAARAFAHQAEAIAMAAIAJgBIAHgBIAAhUIAZAAIAABlIgSAEQgMABgNAAQgLAAgJgDg");
	this.shape_15.setTransform(149.25,38.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgMBCQgIgDgEgGQgEgFgCgIQgCgIAAgLIAAhZIAYgEIAAAfIAlAAIAAAUIglAAIAAAqQABANAEAFQADAFAJAAQAGAAAGgBIAIgDIAEAUIgLADQgHACgJAAQgKAAgIgDg");
	this.shape_16.setTransform(139.85,36.725);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AATA1IAAg2IgBgOQgBgFgCgFQgDgDgEgCQgEgBgGAAIgJAAIgIABIAABTIgYAAIAAhkIASgDQAMgDANAAQAMAAAJAEQAIADAFAHQAFAGACAJQADAJAAALIAAA5g");
	this.shape_17.setTransform(129.425,38.05);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AgTAzQgKgEgGgIQgHgGgDgLQgEgKAAgMQAAgMAEgKQADgKAHgHQAHgHAJgFQAJgDAKAAQALAAAJADQAKAFAGAHQAHAHAEAKQADAKAAAMQAAAMgDAKQgEALgHAGQgGAIgJAEQgKAEgLAAQgKAAgJgEgAgSgYQgGAJAAAPQAAAPAGAKQAHAJALAAQAMAAAHgJQAGgKAAgPQAAgPgGgJQgHgJgMAAQgLAAgHAJg");
	this.shape_18.setTransform(117.525,38.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AgyBGIAAiHIAUgEIAUAAQAdAAAQALQAQALAAAXQAAAMgEAKQgFAHgIAFQgIAGgMADQgMACgOAAIgMAAIAAAxgAgYguIAAAuIAMAAQARAAAKgFQAKgEAAgPQAAgGgDgFQgDgFgEgDQgFgCgGgBIgNgBIgPABg");
	this.shape_19.setTransform(105.825,36.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AgaA1IgLgEIAEgUIANAEQAHACAKAAQAIAAAFgCQAEgDAAgFQAAgGgEgDQgFgDgKgEIgMgFIgKgGQgEgDgCgFQgCgGAAgHQAAgOAKgJQALgIARAAQAJAAAJACQAIABAEACIgEAUIgKgEQgGgBgJAAQgGAAgFACQgEADAAAFIABAFIADADIAGAEIAHADQAJADAGAEQAGACAEAEQAEADACAFQABAFAAAHQAAAPgLAIQgLAIgTAAQgOAAgJgCg");
	this.shape_20.setTransform(89.875,38.175);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AgQAzQgLgEgGgIQgHgHgDgKQgDgKAAgMQAAgMAEgLQAEgKAHgHQAHgHAIgDQAJgEAIAAQAWAAAMANQAMAOAAAaIAAAEIAAAEIhEAAQABANAIAHQAIAHAOAAQAIAAAIgCIALgDIADAUIgFACIgIACIgKABIgKABQgNAAgKgEgAgHggQgEACgDAEQgDADgCAFIgCAJIAsAAQAAgFgBgFIgEgIIgHgFQgEgCgFAAQgFAAgEACg");
	this.shape_21.setTransform(79.575,38.175);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AgfA1IAAhiIASgFQAKgDAMAAIAGABIAGABIAGABIAFACIgEATIgJgBIgMgBIgHABIgHABIAABSg");
	this.shape_22.setTransform(70.575,38.05);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AgTAzQgKgEgGgIQgHgGgDgLQgEgKAAgMQAAgMAEgKQADgKAHgHQAHgHAJgFQAJgDAKAAQALAAAJADQAKAFAGAHQAHAHAEAKQADAKAAAMQAAAMgDAKQgEALgHAGQgGAIgJAEQgKAEgLAAQgKAAgJgEgAgSgYQgGAJAAAPQAAAPAGAKQAHAJALAAQAMAAAHgJQAGgKAAgPQAAgPgGgJQgHgJgMAAQgLAAgHAJg");
	this.shape_23.setTransform(59.875,38.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AgLBLIAAhoIAXAAIAABogAgJgwQgFgEAAgHQAAgHAFgEQAEgEAFAAQAGAAAFAEQAEAEAAAHQAAAHgEAEQgFADgGAAQgFAAgEgDg");
	this.shape_24.setTransform(51.15,35.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AgQA1QgIgCgGgEQgFgEgDgHQgDgFAAgKQAAgJADgGQAEgGAGgDQAGgEAIgCQAIgBAHgBIAJABIAJABIAAgDIgBgJQgBgDgDgDQgCgDgEgBQgEgCgFAAQgJAAgHABIgLACIgDgTIANgDQAJgCAJAAQAMAAAIAEQAIACAFAGQAFAFACAIQACAHAAAKIAAA+IgRADQgLABgOAAQgIAAgIgBgAgCAGIgIACQgDACgCADQgCADAAAFQAAAIAFADQAGAEAIgBIARgBIAAgbIgGgBIgIAAIgHAAg");
	this.shape_25.setTransform(42.725,38.15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AAzBFIgCgyIgEgwIgEALIgHAOIgHAOIgHAQIgGAOIgFALIgSAAIgFgLIgFgOIgHgQIgHgOIgGgOIgGgLQgCAYgBAYIgCAyIgYAAIABgjIACgkIADgjIAEgfIAXAAIAKASIALAXIALAZIAJAWIAKgWIALgZIAMgXIAJgSIAXAAIAEAgIACAjIACAjIACAjg");
	this.shape_26.setTransform(28.85,36.475);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("EgvqAUoQhQAAAAhQMAAAgmvQAAhQBQAAMBfVAAAQBQAAAABQMAAAAmvQAABQhQAAg");
	this.shape_27.setTransform(318.6273,170.8023,1.0176,1.2936);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.nome1},{t:this.nome2},{t:this.nome3},{t:this.nome4},{t:this.nome5},{t:this.nome6},{t:this.nome7},{t:this.nome8},{t:this.nome9},{t:this.nome10},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.score1},{t:this.score2},{t:this.score3},{t:this.score4},{t:this.score5},{t:this.score6},{t:this.score7},{t:this.score8},{t:this.score9},{t:this.score10}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,637.1999999999999,341.6);


(lib.g_logo_uepb = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.instance = new lib.logouepbcomputacao();
	this.instance.setTransform(-42,-5,0.7162,0.7162);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-5,564.4,169.1);


(lib.g_logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.instance = new lib.logogrande();
	this.instance.setTransform(-385,-107,0.7828,0.7828);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-385,-107,769.6,213.7);


(lib.g_loader_bar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#435865").s().p("EgnEADrIAAnVMBOJAAAIAAHVg");
	this.shape.setTransform(250.05,23.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,500.1,47);


(lib.g_linha = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AAAolIAARL");
	this.shape.setTransform(0,55.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,2,112.1);


(lib.g_instrucoes = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgGAGQgCgDAAgDQAAgDACgCQADgDADAAQAEAAADADQACACAAADQAAADgCADQgDAEgEAAQgDAAgDgEg");
	this.shape.setTransform(364.625,312.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgDgFQgBgEAAgGQgBgGADgFQACgEAFgCIAKgDIAKgBIAEAAIAEAAIADABIADAAIAAgEIgBgGIgDgGIgEgDQgEgCgEAAIgLABIgHACIgCgLIAJgCIALgBQAIAAAFACQAGACADADQADAEACAFQACAFgBAGIAAAtIgEABIgHABIgIABIgJAAIgKgBgAgCADIgGACIgFADQgCADAAADQABAIAEACQAFADAGAAIAJAAIAGgBIAAgWIgFAAIgIgBIgFAAg");
	this.shape_1.setTransform(359.05,309.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgGA0IAAhJIANAAIAABJgAgFgkQgCgCgBgEQABgEACgDQACgCADAAQADAAADACQADADgBAEQABAEgDACQgDACgDAAQgDAAgCgCg");
	this.shape_2.setTransform(353.85,308.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgQAxIgKgCIACgMIAKADIAMABQAKAAAFgFQAGgEAAgKIAAgDIgHADQgFACgGAAQgGgBgGgCQgFgCgFgEQgEgFgDgGQgCgGAAgJQAAgIACgHQADgGAEgFQAFgFAGgDQAHgCAHAAQAJgBAHACIALACIAABAQAAARgIAHQgJAJgRgBIgNgBgAgLgfQgGAHAAALQAAAGACAFQACAEACADQADADAEABIAGABQAFAAAFgCIAGgDIAAgqIgFgBIgJAAQgJAAgGAHg");
	this.shape_3.setTransform(347.825,310.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgKA0QgHgDgFgEQgEgGgCgHQgDgGAAgIQAAgLADgGQADgHAFgFQAEgFAGgCQAGgCAGAAQAOAAAIAJQAIAJAAASIAAACIAAADIgxAAQABALAGAGQAFAGAMgBIALgBIAHgCIACALIgIADIgOABQgIAAgHgDgAgFgHIgGAEQgDADgBADIgCAHIAjAAQABgIgFgGQgFgFgIAAQgDAAgDACgAgHggIARgWIAIAIIgTAUg");
	this.shape_4.setTransform(340.025,307.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgIAuQgEgCgEgDQgDgEgBgGIAAgMIAAhAIAMgDIAAAXIAbAAIAAALIgbAAIAAAhIABAJIADAGQABABADABIAFABQAGAAAEgBIAEgCIADALIgHACQgFACgGgBQgGAAgGgCg");
	this.shape_5.setTransform(333.7,308.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgCgFQgCgEAAgGQgBgGADgFQACgEAFgCIAKgDIAKgBIAEAAIAEAAIADABIADAAIAAgEIgBgGIgDgGIgEgDQgEgCgEAAIgLABIgHACIgCgLIAJgCIALgBQAIAAAFACQAGACADADQADAEACAFQACAFgBAGIAAAtIgEABIgHABIgIABIgJAAIgKgBgAgCADIgGACIgFADQgCADAAADQABAIAEACQAFADAGAAIAJAAIAGgBIAAgWIgFAAIgIgBIgFAAg");
	this.shape_6.setTransform(326.65,309.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgUAlIAAhEIAMgEQAHgBAHAAIAEAAIAEABIAEAAIADABIgCALIgFgBIgKgBIgGABIgFABIAAA8g");
	this.shape_7.setTransform(320.975,309.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgIAuQgEgCgDgDQgEgEgBgGIgBgMIAAhAIANgDIAAAXIAbAAIAAALIgbAAIAAAhIABAJIADAGQACABACABIAFABQAGAAADgBIAGgCIACALIgHACQgFACgGgBQgHAAgFgCg");
	this.shape_8.setTransform(315.35,308.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgRAlIgIgDIADgLIAHACQAFACAIAAQAHAAAEgCQAEgCAAgEQAAgGgEgCIgMgHIgIgDIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADADIAFADIAGADIAJADIAHAEQADACABAEQACAEAAAFQAAAKgIAFQgHAFgNAAQgKAAgFgBg");
	this.shape_9.setTransform(309.025,309.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgKAjQgHgDgFgEQgEgGgCgHQgDgGAAgIQAAgKADgGQADgIAFgFQAEgFAGgCQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAGAMgBIALgBIAHgCIACALIgIADIgOABQgIAAgHgDgAgFgYIgGAEQgDADgBAEIgCAHIAjAAQABgIgFgHQgFgFgIAAQgDAAgDACg");
	this.shape_10.setTransform(301.925,309.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgUAlIAAhEIAMgEQAHgBAHAAIAEAAIAEABIAEAAIADABIgCALIgFgBIgKgBIgGABIgFABIAAA8g");
	this.shape_11.setTransform(292.575,309.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_12.setTransform(285.275,309.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AAQA2IAAgmIgBgLQgBgFgBgCQgCgDgEgBQgEgCgEAAIgEABIgFAAIgDABIgCABIAAA7IgOAAIAAhpIAOgCIAAAlIAIgCIAHgBQAIAAAGACQAGADADAEQADAFACAFQABAGABAHIAAApg");
	this.shape_13.setTransform(277.2,307.825);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgGAxQgFgEAAgLIAAhWIAMgCIAABWIAAAGQABAAAAABQAAAAAAABQABAAAAAAQAAABABAAIACACIAGABIgCALQgLgBgFgFg");
	this.shape_14.setTransform(271.6,307.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgKAjQgHgDgFgEQgEgGgCgHQgDgGAAgIQAAgKADgGQADgIAFgFQAEgFAGgCQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAGAMgBIALgBIAHgCIACALIgIADIgOABQgIAAgHgDgAgFgYIgGAEQgDADgBAEIgCAHIAjAAQABgIgFgHQgFgFgIAAQgDAAgDACg");
	this.shape_15.setTransform(265.325,309.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AAkAlIAAglIAAgLQgBgEgCgEQgBgDgDgBQgDgCgFAAQgGAAgEACIgGADIABAIIAAAJIAAAoIgLAAIAAglIgBgLQgBgEgCgEQgBgDgDgBQgDgCgFAAIgEABIgFAAIgDAAIgDABIAAA8IgMAAIAAhFIALgDQAIgBAJAAQAIAAAEACQAFACADADIADgCIAEgCIAHgCIAJgBQAIAAAFACQAFADADAEQAEAFABAGIABANIAAAog");
	this.shape_16.setTransform(255.5,309.525);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AAkAlIAAglIAAgLQgBgEgBgEQgCgDgDgBQgDgCgFAAQgHAAgEACIgGADIACAIIABAJIAAAoIgNAAIAAglIAAgLQAAgEgCgEQgCgDgDgBQgDgCgFAAIgEABIgEAAIgEAAIgCABIAAA8IgOAAIAAhFIANgDQAHgBAKAAQAHAAAEACQAFACADADIACgCIAGgCIAHgCIAHgBQAJAAAFACQAGADADAEQACAFABAGIABANIAAAog");
	this.shape_17.setTransform(240.25,309.525);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_18.setTransform(230.075,309.625);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AAIAmQgIAAgGgDQgHgDgFgEQgEgGgCgHQgDgGAAgIQAAgIADgHQACgHAFgGQAEgEAHgDQAGgDAHAAIAKAAIAJAEIgDALIgGgDIgIAAQgKgBgGAHQgGAHAAANQAAAFABAFQACAFADAEQACADAFACQADABAHAAIAJgBIAHgCIACALIgEACIgEABIgGABIgGAAg");
	this.shape_19.setTransform(222.925,309.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AgUAlIAAhEIAMgEQAHgBAHAAIAEAAIAEABIAEAAIADABIgCALIgFgBIgKgBIgGABIgFABIAAA8g");
	this.shape_20.setTransform(213.975,309.525);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_21.setTransform(206.675,309.625);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AgJA0QgHgCgFgFQgFgFgDgHQgCgHAAgJQAAgJACgGQADgGADgGQAFgFAGgCQAGgDAHAAQAGAAAFABIAHAEIAAglIANgCIAABpIgLADIgRABQgGAAgHgDgAgGgGQgEACgDADQgCACgBAFQgBAGAAAFQgBANAHAHQAGAHAKgBIAIAAIAGgBIAAgtQgCgCgFgBQgEgCgGAAQgEAAgEACg");
	this.shape_22.setTransform(198.2,307.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AgLAlIgJgEQgDgDgCgFQgCgEgBgGQAAgGADgFQACgEAEgCIALgDIAKgBIAEAAIAEAAIADABIACAAIAAgEIAAgGIgDgGIgFgDQgDgCgEAAIgLABIgIACIgBgLIAIgCIAMgBQAIAAAFACQAGACADADQAEAEABAFQABAFABAGIAAAtIgGABIgGABIgIABIgJAAIgLgBgAgCADIgGACIgFADQgBADAAADQAAAIAEACQAEADAIAAIAIAAIAFgBIAAgWIgEAAIgHgBIgGAAg");
	this.shape_23.setTransform(190.45,309.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AgQAxIgKgCIACgMIAKADIAMABQAKAAAFgFQAGgEAAgKIAAgDIgHADQgFACgGAAQgGgBgGgCQgFgCgFgEQgEgFgDgGQgCgGAAgJQAAgIACgHQADgGAEgFQAFgFAGgDQAHgCAHAAQAJgBAHACIALACIAABAQAAARgIAHQgJAJgRgBIgNgBgAgLgfQgGAHAAALQAAAGACAFQACAEACADQADADAEABIAGABQAFAAAFgCIAGgDIAAgqIgFgBIgJAAQgJAAgGAHg");
	this.shape_24.setTransform(182.725,310.85);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_25.setTransform(174.775,309.625);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AgMBAIgFgBIACgLIADABIAEAAQAGAAACgDQADgFAAgIIAAhHIANAAIAABHQAAAOgGAHQgHAHgLgBIgEAAgAADgxQgCgCAAgEQAAgEACgDQADgCADAAQAEAAACACQADADAAAEQAAAEgDACQgCACgEAAQgDAAgDgCg");
	this.shape_26.setTransform(167.975,309.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_27.setTransform(159.775,309.625);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AgKAjQgHgDgFgEQgEgGgCgHQgDgGAAgIQAAgKADgGQADgIAFgFQAEgFAGgCQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAGAMgBIALgBIAHgCIACALIgIADIgOABQgIAAgHgDgAgFgYIgGAEQgDADgBAEIgCAHIAjAAQABgIgFgHQgFgFgIAAQgDAAgDACg");
	this.shape_28.setTransform(148.425,309.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AAIAmQgIAAgGgDQgHgDgFgEQgEgGgCgHQgDgGAAgIQAAgIADgHQACgHAFgGQAEgEAHgDQAGgDAHAAIAKAAIAJAEIgDALIgGgDIgIAAQgKgBgGAHQgGAHAAANQAAAFABAFQACAFADAEQACADAFACQADABAHAAIAJgBIAHgCIACALIgEACIgEABIgGABIgGAAg");
	this.shape_29.setTransform(141.525,309.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AARAlIAAglIgBgLQgCgFgCgDQgCgDgDgBQgEgCgDAAIgFABIgEAAIgEAAIgDABIAAA8IgMAAIAAhFIAMgDQAHgBAJAAQAJAAAFACQAGADAEAEQACAFACAGQACAGgBAHIAAAog");
	this.shape_30.setTransform(134.05,309.525);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AgKAjQgHgDgFgEQgEgGgCgHQgDgGAAgIQAAgKADgGQADgIAFgFQAEgFAGgCQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAGAMgBIALgBIAHgCIACALIgIADIgOABQgIAAgHgDgAgFgYIgGAEQgDADgBAEIgCAHIAjAAQABgIgFgHQgFgFgIAAQgDAAgDACg");
	this.shape_31.setTransform(126.025,309.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AgFAlIgOgiQgIgSgFgVIAOAAIAEAPIAFAQIAFANIAEAOIAFgOIAFgNIAFgQIAEgPIAOAAQgGAVgHASIgOAig");
	this.shape_32.setTransform(118.675,309.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AgJAQQAEgHABgIIABgMIAAgEIAAgDIANAAIAAACIAAACQAAAJgDAIQgCAIgFAIg");
	this.shape_33.setTransform(109.975,313.575);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("AgKAjQgHgDgFgEQgEgGgCgHQgDgGAAgIQAAgKADgGQADgIAFgFQAEgFAGgCQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAGAMgBIALgBIAHgCIACALIgIADIgOABQgIAAgHgDgAgFgYIgGAEQgDADgBAEIgCAHIAjAAQABgIgFgHQgFgFgIAAQgDAAgDACg");
	this.shape_34.setTransform(104.475,309.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#333333").s().p("AgIAuQgFgCgDgDQgCgEgBgGIgBgMIAAhAIAMgDIAAAXIAbAAIAAALIgbAAIAAAhIABAJIACAGQADABACABIAFABQAGAAAEgBIAEgCIACALIgGACQgFACgHgBQgGAAgFgCg");
	this.shape_35.setTransform(98.15,308.55);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("AgUAlIAAhEIAMgEQAHgBAHAAIAEAAIAEABIAEAAIADABIgCALIgFgBIgKgBIgGABIgFABIAAA8g");
	this.shape_36.setTransform(92.725,309.525);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_37.setTransform(85.425,309.625);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333333").s().p("AgRAlIgIgDIADgLIAHACQAFACAIAAQAHAAAEgCQAEgCAAgEQAAgGgEgCIgMgHIgIgDIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADADIAFADIAGADIAJADIAHAEQADACABAEQACAEAAAFQAAAKgIAFQgHAFgNAAQgKAAgFgBg");
	this.shape_38.setTransform(78.175,309.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#333333").s().p("AgLAlIgJgEQgDgDgCgFQgDgEAAgGQAAgGADgFQACgEAEgCIAKgDIALgBIAEAAIAEAAIADABIACAAIAAgEIAAgGIgCgGIgGgDQgDgCgEAAIgLABIgIACIgBgLIAIgCIAMgBQAIAAAFACQAGACADADQAEAEABAFQACAFAAAGIAAAtIgGABIgGABIgJABIgIAAIgLgBgAgCADIgGACIgFADQgBADAAADQgBAIAFACQAEADAIAAIAIAAIAFgBIAAgWIgEAAIgHgBIgGAAg");
	this.shape_39.setTransform(67.95,309.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#333333").s().p("AgJA0QgHgCgFgFQgEgFgDgHQgDgHAAgJQAAgJADgGQACgGADgGQAFgFAGgCQAGgDAHAAQAGAAAFABIAHAEIAAglIANgCIAABpIgMADIgQABQgGAAgHgDgAgGgGQgEACgDADQgCACgBAFQgCAGABAFQAAANAGAHQAGAHAKgBIAIAAIAGgBIAAgtQgCgCgFgBQgEgCgGAAQgEAAgEACg");
	this.shape_40.setTransform(60.15,307.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#333333").s().p("AAkAlIAAglIAAgLQAAgEgDgEQgBgDgDgBQgDgCgFAAQgGAAgFACIgFADIABAIIABAJIAAAoIgMAAIAAglIgBgLQgBgEgCgEQgBgDgDgBQgDgCgFAAIgEABIgEAAIgEAAIgDABIAAA8IgMAAIAAhFIALgDQAIgBAKAAQAHAAAEACQAFACADADIADgCIAEgCIAIgCIAIgBQAIAAAFACQAFADADAEQADAFACAGIABANIAAAog");
	this.shape_41.setTransform(47.05,309.525);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#333333").s().p("AgKA0QgHgDgFgEQgEgGgCgHQgDgGAAgIQAAgLADgGQADgHAFgFQAEgFAGgCQAGgCAGAAQAOAAAIAJQAIAJAAASIAAACIAAADIgxAAQABALAGAGQAFAGAMgBIALgBIAHgCIACALIgIADIgOABQgIAAgHgDgAgFgHIgGAEQgDADgBADIgCAHIAjAAQABgIgFgGQgFgFgIAAQgDAAgDACgAgHggIARgWIAIAIIgTAUg");
	this.shape_42.setTransform(37.025,307.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#333333").s().p("AgGAxQgFgEAAgLIAAhWIAMgCIAABWIABAGQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAIACACIAGABIgCALQgLgBgFgFg");
	this.shape_43.setTransform(31.6,307.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#333333").s().p("AAfAxIgFgNIgEgMIgrAAIgJAZIgOAAIAKgdIAKgYIAJgXIAKgUIALAAIAKAUIAJAXIAKAYIAKAdgAgIgKIgJAXIAjAAIgJgXIgJgWIgIAWg");
	this.shape_44.setTransform(24.625,308.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#333333").s().p("AgGAGQgCgDAAgDQAAgDACgCQADgEADAAQAEAAADAEQACACAAADQAAADgCADQgDADgEAAQgDAAgDgDg");
	this.shape_45.setTransform(609.475,277.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#333333").s().p("AgLAlIgJgEQgDgDgCgEQgDgFAAgGQAAgGADgEQACgFAEgBIAKgFIALgBIAEAAIAEABIAEAAIABABIAAgEIAAgGIgCgFIgGgFQgDgBgEAAIgLABIgIACIgBgLIAIgCIAMgBQAIAAAGACQAFACADAEQAEADABAGQACAFAAAFIAAAtIgGABIgGABIgJAAIgIABIgLgBgAgCADIgGACIgFADQgBADAAAEQgBAGAFAEQAEACAIAAIAIAAIAFgBIAAgVIgEgBIgHgCIgGABg");
	this.shape_46.setTransform(603.9,274.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#333333").s().p("AAQA2IAAgmIgBgLQAAgFgCgCQgDgDgDgBQgEgCgEAAIgEABIgFAAIgDABIgDABIAAA7IgNAAIAAhpIANgCIAAAlIAIgCIAIgBQAJAAAFACQAGADAEAEQACAFACAFQACAGAAAHIAAApg");
	this.shape_47.setTransform(596.5,272.425);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#333333").s().p("AgGAyQgFgFAAgLIAAhWIAMgCIAABXIAAAEQABABAAABQAAAAAAABQAAAAABAAQAAABAAAAIAEACIAFABIgCALQgLgBgFgEg");
	this.shape_48.setTransform(590.9,272.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#333333").s().p("AgLAlIgJgEQgDgDgCgEQgCgFAAgGQAAgGACgEQACgFAFgBIAKgFIAKgBIAEAAIAEABIADAAIACABIAAgEIAAgGIgDgFIgEgFQgEgBgEAAIgLABIgHACIgCgLIAIgCIAMgBQAIAAAFACQAGACADAEQADADACAGQABAFABAFIAAAtIgGABIgGABIgIAAIgJABIgLgBgAgCADIgGACIgFADQgBADAAAEQAAAGAEAEQAEACAIAAIAIAAIAFgBIAAgVIgEgBIgIgCIgFABg");
	this.shape_49.setTransform(584.75,274.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#333333").s().p("AgIAvQgEgDgEgDQgDgEAAgGIgBgMIAAhAIAMgDIAAAXIAbAAIAAALIgbAAIAAAhIABAJIADAFQABACADABIAFABQAFAAAFgCIAEgBIADAKIgHADQgFABgGABQgGAAgGgCg");
	this.shape_50.setTransform(578.85,273.15);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgCgEQgCgFAAgGQAAgGACgEQADgFAEgBIAKgFIAKgBIAEAAIAEABIADAAIADABIAAgEIgBgGIgDgFIgEgFQgEgBgEAAIgLABIgHACIgCgLIAIgCIAMgBQAIAAAFACQAGACADAEQADADACAGQABAFAAAFIAAAtIgFABIgGABIgIAAIgJABIgKgBgAgCADIgGACIgFADQgCADAAAEQABAGAEAEQAEACAIAAIAIAAIAGgBIAAgVIgFgBIgIgCIgFABg");
	this.shape_51.setTransform(571.8,274.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#333333").s().p("AgUA2IgLgDIAAhnIANgCIAAAnIAHgEQAFgBAGAAQAHAAAGADQAGADAFAEQAEAFACAGQACAIAAAIQAAAJgDAHQgCAHgFAFQgFAFgGACQgHADgHAAIgRgBgAgLgHIgHAEIAAAtIAFABIAJAAQAKAAAGgGQAGgHAAgNIgBgLQgBgEgCgDQgDgDgEgDQgEgCgEAAQgGAAgEACg");
	this.shape_52.setTransform(564.425,272.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#333333").s().p("AgKAjQgHgCgFgGQgEgFgCgGQgDgIAAgIQAAgJADgHQADgHAFgEQAEgFAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAFAMAAIALAAIAHgDIACALIgIADIgOABQgIAAgHgDgAgFgZIgGAFQgDADgBAEIgCAHIAjAAQABgJgFgFQgFgGgIAAQgDAAgDABg");
	this.shape_53.setTransform(552.875,274.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#333333").s().p("AgKA0QgGgCgFgFQgEgFgDgHQgDgHAAgJQAAgIADgIQABgGAFgFQAEgEAGgDQAGgDAHAAQAGAAAFABIAHAEIAAglIANgCIAABpIgMADIgPABQgIAAgHgDgAgGgHQgEADgCADQgDADgBAEQgBAFgBAGQABANAGAHQAGAGAKAAIAJAAIAFgBIAAgtQgCgCgEgCQgFgCgGAAQgEAAgEACg");
	this.shape_54.setTransform(544.65,272.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_55.setTransform(533.375,274.225);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#333333").s().p("AgfAyIAAhfIAMgDQAGgBAKAAQAHAAAHADQAGACAFAFQAFAFACAHQADAHAAAJQAAAIgCAGQgCAHgEAFQgFAFgGADQgGADgHAAQgGAAgFgCIgHgDIAAAdgAgSgkIAAAtIAHAEQAEABAGAAQAEAAAEgCQAEgCADgDQACgEABgEIABgKQAAgNgGgHQgGgGgKAAIgJAAIgFABg");
	this.shape_56.setTransform(525.325,275.425);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#333333").s().p("AAkAlIAAglIAAgLQAAgEgDgEQgBgDgDgBQgDgCgFAAQgGAAgFACIgFADIABAIIABAJIAAAoIgMAAIAAglIgBgLQgBgEgCgEQgBgDgDgBQgDgCgFAAIgEABIgEAAIgEAAIgDABIAAA8IgMAAIAAhFIALgDQAIgBAKAAQAHAAAEACQAFACADADIADgCIAEgCIAIgCIAIgBQAIAAAFACQAFADADAEQADAFACAGIABANIAAAog");
	this.shape_57.setTransform(515.05,274.125);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgDgEQgCgFAAgGQABgGACgEQADgFADgBIAKgFIALgBIAEAAIAEABIAEAAIACABIAAgEIgBgGIgCgFIgGgFQgDgBgEAAIgLABIgIACIgBgLIAJgCIALgBQAIAAAGACQAFACADAEQADADACAGQABAFAAAFIAAAtIgEABIgHABIgJAAIgIABIgKgBgAgCADIgGACIgEADQgCADAAAEQgBAGAFAEQAFACAGAAIAIAAIAHgBIAAgVIgFgBIgHgCIgGABg");
	this.shape_58.setTransform(505.15,274.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#333333").s().p("AAIAmQgIAAgGgDQgHgCgFgGQgEgFgCgGQgDgIAAgIQAAgHADgHQACgHAFgGQAEgFAHgDQAGgCAHAAIAKAAIAJADIgDAMIgGgDIgIgBQgKABgGAGQgGAHAAAMQAAAGABAFQACAFADADQACAEAFACQADACAHgBIAJAAIAHgCIACAKIgEACIgEABIgGABIgGAAg");
	this.shape_59.setTransform(498.675,274.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_60.setTransform(487.825,274.225);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#333333").s().p("AAQAlIAAglIgBgLQgBgFgBgDQgCgDgEgBQgEgCgEAAIgEABIgFAAIgDAAIgCABIAAA8IgOAAIAAhFIANgDQAHgBAJAAQAIAAAGACQAGADADAEQADAFACAGQABAGABAHIAAAog");
	this.shape_61.setTransform(479.7,274.125);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#333333").s().p("AgRAkIgIgCIADgLIAHADQAFABAIAAQAHAAAEgCQAEgCAAgFQAAgEgEgEIgMgFIgIgEIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADADIAFADIAGADIAJADIAHAEQADACABAEQACADAAAGQAAAKgIAFQgHAFgNAAQgKAAgFgCg");
	this.shape_62.setTransform(469.275,274.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#333333").s().p("AgKAjQgHgCgFgGQgEgFgCgGQgDgIAAgIQAAgJADgHQADgHAFgEQAEgFAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAFAMAAIALAAIAHgDIACALIgIADIgOABQgIAAgHgDgAgFgZIgGAFQgDADgBAEIgCAHIAjAAQABgJgFgFQgFgGgIAAQgDAAgDABg");
	this.shape_63.setTransform(462.175,274.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#333333").s().p("AgNAxQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgFQgGAHAAAMQAAANAGAGQAGAIAIAAQAKAAAFgIQAGgGAAgNQAAgMgGgHQgFgHgKAAQgIAAgGAHgAgWgmIACgEIADgEIAEgEIAGAAIAFAAIAEACIAEACIADABQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAgBIADgEIAHADIgCAEIgDAEIgEADQgCACgDAAIgGgCIgDgCIgEgBIgEgBQAAAAgBAAQgBAAAAAAQgBABAAAAQgBABAAAAIgDAFg");
	this.shape_64.setTransform(454.175,272.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#333333").s().p("AgEAyIgFgCIACgHIADABIAEAAQAEAAAAgDIgBgDIgDgCIgBAAIABgFIABgEQgGgBgFgDQgGgDgDgFQgEgFgCgHQgCgEAAgIQAAgJADgHQACgGAFgGQAEgFAHgDQAGgDAHAAIAKABIAJADIgDALIgGgCIgIgBQgKAAgGAGQgGAIAAANQAAAGABAFQACADADAEQACAEAFABQADACAHAAIAJgBIAHgCIACALIgDABIgFACIgFAAIgFABIgCADQAEACACADQACACAAAFIgBADQAAAAAAAAQAAABgBAAQAAABAAAAQgBABAAAAIgFADIgHABIgFgBg");
	this.shape_65.setTransform(447.025,275.45);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#333333").s().p("AgFAzIAAhIIALAAIAABIgAgFgkQgDgCAAgEQAAgEADgDQACgBADAAQADAAADABQACADAAAEQAAAEgCACQgDADgDAAQgDAAgCgDg");
	this.shape_66.setTransform(441.8,272.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#333333").s().p("AgRAkIgIgCIADgLIAHADQAFABAIAAQAHAAAEgCQAEgCAAgFQAAgEgEgEIgMgFIgIgEIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADADIAFADIAGADIAJADIAHAEQADACABAEQACADAAAGQAAAKgIAFQgHAFgNAAQgKAAgFgCg");
	this.shape_67.setTransform(436.925,274.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_68.setTransform(429.675,274.225);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#333333").s().p("AgfAyIAAhfIAMgDQAGgBAKAAQAHAAAHADQAGACAFAFQAFAFACAHQADAHAAAJQAAAIgCAGQgCAHgEAFQgFAFgGADQgGADgHAAQgGAAgFgCIgHgDIAAAdgAgSgkIAAAtIAHAEQAEABAGAAQAEAAAEgCQAEgCADgDQACgEABgEIABgKQAAgNgGgHQgGgGgKAAIgJAAIgFABg");
	this.shape_69.setTransform(421.625,275.425);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#333333").s().p("AgKAjQgHgCgFgGQgEgFgCgGQgDgIAAgIQAAgJADgHQADgHAFgEQAEgFAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAFAMAAIALAAIAHgDIACALIgIADIgOABQgIAAgHgDgAgFgZIgGAFQgDADgBAEIgCAHIAjAAQABgJgFgFQgFgGgIAAQgDAAgDABg");
	this.shape_70.setTransform(410.075,274.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#333333").s().p("AgFAkIgOghQgIgSgFgVIAOAAIAEAQIAFAOIAFAOIAEAOIAFgOIAFgOIAFgOIAEgQIAOAAQgGAVgHASIgOAhg");
	this.shape_71.setTransform(402.725,274.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_72.setTransform(395.075,274.225);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#333333").s().p("AARAlIAAglIgBgLQgCgFgCgDQgCgDgDgBQgEgCgDAAIgFABIgEAAIgEAAIgDABIAAA8IgMAAIAAhFIALgDQAIgBAJAAQAJAAAFACQAGADAEAEQACAFACAGQACAGgBAHIAAAog");
	this.shape_73.setTransform(386.95,274.125);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#333333").s().p("AAlAlIAAglIgBgLQAAgEgDgEQgBgDgDgBQgDgCgFAAQgHAAgDACIgHADIACAIIAAAJIAAAoIgMAAIAAglIAAgLQgBgEgBgEQgCgDgDgBQgDgCgFAAIgEABIgFAAIgDAAIgCABIAAA8IgOAAIAAhFIANgDQAHgBAJAAQAHAAAGACQAEACADADIACgCIAGgCIAGgCIAIgBQAJAAAFACQAFADAEAEQADAFAAAGIABANIAAAog");
	this.shape_74.setTransform(373.7,274.125);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#333333").s().p("AgKAjQgHgCgFgGQgEgFgCgGQgDgIAAgIQAAgJADgHQADgHAFgEQAEgFAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAFAMAAIALAAIAHgDIACALIgIADIgOABQgIAAgHgDgAgFgZIgGAFQgDADgBAEIgCAHIAjAAQABgJgFgFQgFgGgIAAQgDAAgDABg");
	this.shape_75.setTransform(363.675,274.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#333333").s().p("AgQAxIgKgDIACgLIAKADIAMABQAKAAAFgEQAGgFAAgKIAAgDIgHACQgFACgGAAQgGAAgGgCQgFgCgFgFQgEgDgDgIQgCgFAAgJQAAgIACgGQADgHAEgFQAFgFAGgCQAHgDAHgBQAJAAAHACIALADIAAA/QAAARgIAIQgJAHgRABIgNgCgAgLgfQgGAHAAALQAAAGACAFQACADACAEQADACAEACIAGABQAFAAAFgCIAGgCIAAgqIgFgBIgJgBQgJAAgGAHg");
	this.shape_76.setTransform(355.525,275.45);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#333333").s().p("AARAlIAAglIgBgLQgCgFgCgDQgCgDgDgBQgDgCgEAAIgFABIgEAAIgEAAIgDABIAAA8IgMAAIAAhFIAMgDQAHgBAJAAQAIAAAGACQAGADADAEQAEAFABAGQACAGgBAHIAAAog");
	this.shape_77.setTransform(347.7,274.125);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgDgEQgBgFAAgGQgBgGADgEQADgFAEgBIAKgFIAKgBIAEAAIAEABIAEAAIACABIAAgEIgBgGIgDgFIgEgFQgEgBgEAAIgLABIgHACIgCgLIAJgCIALgBQAIAAAGACQAFACADAEQADADACAGQACAFgBAFIAAAtIgEABIgHABIgJAAIgIABIgKgBgAgCADIgGACIgEADQgDADAAAEQAAAGAFAEQAFACAGAAIAIAAIAHgBIAAgVIgFgBIgIgCIgFABg");
	this.shape_78.setTransform(339.8,274.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#333333").s().p("AgUAlIAAhEIAMgEQAHgBAHAAIAEAAIAEABIAEAAIADABIgCALIgFgBIgKgBIgGABIgFABIAAA8g");
	this.shape_79.setTransform(334.125,274.125);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#333333").s().p("AgUA2IgLgDIAAhnIANgCIAAAnIAHgEQAFgBAGAAQAHAAAGADQAGADAFAEQAEAFACAGQACAIAAAIQAAAJgDAHQgCAHgFAFQgFAFgGACQgHADgHAAIgRgBgAgLgHIgHAEIAAAtIAFABIAJAAQAKAAAGgGQAGgHAAgNIgBgLQgBgEgCgDQgDgDgEgDQgEgCgEAAQgGAAgEACg");
	this.shape_80.setTransform(327.025,272.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#333333").s().p("AgLAlIgJgEQgDgDgDgEQgCgFAAgGQABgGACgEQADgFADgBIAKgFIALgBIAEAAIAEABIAEAAIABABIAAgEIAAgGIgCgFIgGgFQgDgBgEAAIgLABIgIACIgBgLIAJgCIALgBQAIAAAGACQAFACADAEQADADACAGQABAFAAAFIAAAtIgEABIgHABIgJAAIgIABIgLgBgAgCADIgGACIgEADQgCADAAAEQgBAGAFAEQAFACAGAAIAIAAIAGgBIAAgVIgEgBIgHgCIgGABg");
	this.shape_81.setTransform(318.85,274.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#333333").s().p("AgKAjQgHgCgFgGQgEgFgCgGQgDgIAAgIQAAgJADgHQADgHAFgEQAEgFAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAFAMAAIALAAIAHgDIACALIgIADIgOABQgIAAgHgDgAgFgZIgGAFQgDADgBAEIgCAHIAjAAQABgJgFgFQgFgGgIAAQgDAAgDABg");
	this.shape_82.setTransform(308.175,274.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#333333").s().p("AgNAjQgFgDgEgEQgDgFgCgGQgBgGAAgHIAAgoIANAAIAAAlQAAANAEAGQAEAGAJAAIAEAAIAEgBIAEAAIACgBIAAg8IANAAIAABGIgLACIgRABQgIAAgGgCg");
	this.shape_83.setTransform(300.225,274.275);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#333333").s().p("AATAyIAAgdIgHADQgFACgGAAQgHAAgGgDQgGgDgFgFQgDgFgCgHQgDgGAAgIQAAgJADgHQADgHAEgFQAFgFAHgCQAHgDAGAAQAKAAAGABIAMADIAABfgAgLgfQgGAHAAANQgBAGACAEQABAEACAEQADADAEACQAEACAEAAQAGAAAEgBIAHgEIAAgtIgFgBIgJAAQgKAAgGAGg");
	this.shape_84.setTransform(291.9,275.425);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#333333").s().p("AgJAQQAEgHABgIIABgMIAAgEIAAgDIANAAIAAACIAAACQAAAJgDAIQgCAIgFAIg");
	this.shape_85.setTransform(282.825,278.175);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#333333").s().p("AgLAlIgJgEQgDgDgDgEQgCgFAAgGQABgGACgEQADgFADgBIAKgFIALgBIAEAAIAEABIAEAAIABABIAAgEIAAgGIgCgFIgGgFQgDgBgEAAIgLABIgIACIgBgLIAJgCIALgBQAIAAAGACQAFACADAEQADADACAGQABAFAAAFIAAAtIgEABIgHABIgJAAIgIABIgLgBgAgCADIgGACIgEADQgCADAAAEQgBAGAFAEQAFACAGAAIAIAAIAGgBIAAgVIgEgBIgHgCIgGABg");
	this.shape_86.setTransform(277.45,274.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#333333").s().p("AgKA0QgGgCgFgFQgEgFgEgHQgCgHAAgJQAAgIACgIQACgGAEgFQAFgEAGgDQAGgDAHAAQAGAAAFABIAHAEIAAglIANgCIAABpIgLADIgRABQgGAAgIgDgAgGgHQgEADgDADQgCADgBAEQgBAFAAAGQgBANAHAHQAGAGAKAAIAIAAIAGgBIAAgtQgCgCgFgCQgEgCgFAAQgFAAgEACg");
	this.shape_87.setTransform(269.65,272.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#333333").s().p("AgGAzIAAhIIANAAIAABIgAgFgkQgDgCABgEQgBgEADgDQADgBACAAQAEAAACABQACADABAEQgBAEgCACQgCADgEAAQgCAAgDgDg");
	this.shape_88.setTransform(264,272.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#333333").s().p("AgIAvQgEgDgEgDQgDgEAAgGIgBgMIAAhAIAMgDIAAAXIAbAAIAAALIgbAAIAAAhIABAJIADAFQABACADABIAFABQAFAAAFgCIAEgBIADAKIgHADQgFABgGABQgGAAgGgCg");
	this.shape_89.setTransform(259.8,273.15);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#333333").s().p("AgUAlIAAhEIAMgEQAHgBAHAAIAEAAIAEABIAEAAIADABIgCALIgFgBIgKgBIgGABIgFABIAAA8g");
	this.shape_90.setTransform(254.375,274.125);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgCgEQgCgFAAgGQAAgGACgEQADgFAEgBIAKgFIAKgBIAEAAIAEABIADAAIADABIAAgEIgBgGIgDgFIgEgFQgEgBgEAAIgLABIgHACIgCgLIAIgCIAMgBQAIAAAFACQAGACADAEQADADACAGQABAFAAAFIAAAtIgFABIgGABIgIAAIgJABIgKgBgAgCADIgGACIgFADQgCADAAAEQABAGAEAEQAEACAIAAIAIAAIAGgBIAAgVIgFgBIgIgCIgFABg");
	this.shape_91.setTransform(247.35,274.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#333333").s().p("AgfAyIAAhfIAMgDQAGgBAKAAQAHAAAHADQAGACAFAFQAFAFACAHQADAHAAAJQAAAIgCAGQgCAHgEAFQgFAFgGADQgGADgHAAQgGAAgFgCIgHgDIAAAdgAgSgkIAAAtIAHAEQAEABAGAAQAEAAAEgCQAEgCADgDQACgEABgEIABgKQAAgNgGgHQgGgGgKAAIgJAAIgFABg");
	this.shape_92.setTransform(239.975,275.425);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#333333").s().p("AgUAlIAAhEIAMgEQAHgBAHAAIAEAAIAEABIAEAAIADABIgCALIgFgBIgKgBIgGABIgFABIAAA8g");
	this.shape_93.setTransform(230.175,274.125);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_94.setTransform(222.875,274.225);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#333333").s().p("AgfAyIAAhfIAMgDQAGgBAKAAQAHAAAHADQAGACAFAFQAFAFACAHQADAHAAAJQAAAIgCAGQgCAHgEAFQgFAFgGADQgGADgHAAQgGAAgFgCIgHgDIAAAdgAgSgkIAAAtIAHAEQAEABAGAAQAEAAAEgCQAEgCADgDQACgEABgEIABgKQAAgNgGgHQgGgGgKAAIgJAAIgFABg");
	this.shape_95.setTransform(214.825,275.425);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#333333").s().p("AgRAkIgIgCIADgLIAHADQAFABAIAAQAHAAAEgCQAEgCAAgFQAAgEgEgEIgMgFIgIgEIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADADIAFADIAGADIAJADIAHAEQADACABAEQACADAAAGQAAAKgIAFQgHAFgNAAQgKAAgFgCg");
	this.shape_96.setTransform(204.125,274.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#333333").s().p("AgFAzIAAhIIALAAIAABIgAgFgkQgDgCAAgEQAAgEADgDQADgBACAAQADAAADABQACADAAAEQAAAEgCACQgDADgDAAQgCAAgDgDg");
	this.shape_97.setTransform(199.25,272.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgDgEQgCgFABgGQAAgGACgEQADgFADgBIAKgFIALgBIAEAAIAEABIAEAAIACABIAAgEIgBgGIgCgFIgGgFQgDgBgEAAIgLABIgIACIgBgLIAJgCIALgBQAIAAAGACQAFACADAEQADADACAGQABAFAAAFIAAAtIgEABIgHABIgJAAIgIABIgKgBgAgCADIgGACIgEADQgCADgBAEQAAAGAFAEQAFACAGAAIAIAAIAHgBIAAgVIgFgBIgHgCIgGABg");
	this.shape_98.setTransform(193.65,274.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#333333").s().p("AgFAzIAAhIIALAAIAABIgAgFgkQgDgCAAgEQAAgEADgDQACgBADAAQADAAADABQACADAAAEQAAAEgCACQgDADgDAAQgDAAgCgDg");
	this.shape_99.setTransform(188.45,272.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#333333").s().p("AAIAmQgIAAgGgDQgHgCgFgGQgEgFgCgGQgDgIAAgIQAAgHADgHQACgHAFgGQAEgFAHgDQAGgCAHAAIAKAAIAJADIgDAMIgGgDIgIgBQgKABgGAGQgGAHAAAMQAAAGABAFQACAFADADQACAEAFACQADACAHgBIAJAAIAHgCIACAKIgEACIgEABIgGABIgGAAg");
	this.shape_100.setTransform(183.675,274.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#333333").s().p("AgKAjQgHgCgFgGQgEgFgCgGQgDgIAAgIQAAgJADgHQADgHAFgEQAEgFAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAFAMAAIALAAIAHgDIACALIgIADIgOABQgIAAgHgDgAgFgZIgGAFQgDADgBAEIgCAHIAjAAQABgJgFgFQgFgGgIAAQgDAAgDABg");
	this.shape_101.setTransform(176.225,274.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#333333").s().p("AgfAyIAAhfIAMgDQAGgBAKAAQAHAAAHADQAGACAFAFQAFAFACAHQADAHAAAJQAAAIgCAGQgCAHgEAFQgFAFgGADQgGADgHAAQgGAAgFgCIgHgDIAAAdgAgSgkIAAAtIAHAEQAEABAGAAQAEAAAEgCQAEgCADgDQACgEABgEIABgKQAAgNgGgHQgGgGgKAAIgJAAIgFABg");
	this.shape_102.setTransform(168.425,275.425);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#333333").s().p("AgRAkIgIgCIADgLIAHADQAFABAIAAQAHAAAEgCQAEgCAAgFQAAgEgEgEIgMgFIgIgEIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADADIAFADIAGADIAJADIAHAEQADACABAEQACADAAAGQAAAKgIAFQgHAFgNAAQgKAAgFgCg");
	this.shape_103.setTransform(160.975,274.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#333333").s().p("AgKAjQgHgCgFgGQgEgFgCgGQgDgIAAgIQAAgJADgHQADgHAFgEQAEgFAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAFAMAAIALAAIAHgDIACALIgIADIgOABQgIAAgHgDgAgFgZIgGAFQgDADgBAEIgCAHIAjAAQABgJgFgFQgFgGgIAAQgDAAgDABg");
	this.shape_104.setTransform(153.875,274.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#333333").s().p("AgRAkIgIgCIADgLIAHADQAFABAIAAQAHAAAEgCQAEgCAAgFQAAgEgEgEIgMgFIgIgEIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADADIAFADIAGADIAJADIAHAEQADACABAEQACADAAAGQAAAKgIAFQgHAFgNAAQgKAAgFgCg");
	this.shape_105.setTransform(143.625,274.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_106.setTransform(136.375,274.225);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#333333").s().p("AgUAlIAAhEIAMgEQAHgBAHAAIAEAAIAEABIAEAAIADABIgCALIgFgBIgKgBIgGABIgFABIAAA8g");
	this.shape_107.setTransform(130.025,274.125);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgDgEQgCgFABgGQAAgGACgEQADgFADgBIAKgFIALgBIAEAAIAEABIAEAAIACABIAAgEIgBgGIgCgFIgFgFQgEgBgEAAIgLABIgIACIgBgLIAJgCIALgBQAIAAAGACQAFACADAEQAEADABAGQABAFAAAFIAAAtIgEABIgHABIgJAAIgIABIgKgBgAgCADIgGACIgEADQgCADgBAEQAAAGAFAEQAFACAGAAIAIAAIAHgBIAAgVIgFgBIgHgCIgGABg");
	this.shape_108.setTransform(123,274.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#333333").s().p("AgfAyIAAhfIAMgDQAGgBAKAAQAHAAAHADQAGACAFAFQAFAFACAHQADAHAAAJQAAAIgCAGQgCAHgEAFQgFAFgGADQgGADgHAAQgGAAgFgCIgHgDIAAAdgAgSgkIAAAtIAHAEQAEABAGAAQAEAAAEgCQAEgCADgDQACgEABgEIABgKQAAgNgGgHQgGgGgKAAIgJAAIgFABg");
	this.shape_109.setTransform(115.625,275.425);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#333333").s().p("AgRAkIgIgCIADgLIAHADQAFABAIAAQAHAAAEgCQAEgCAAgFQAAgEgEgEIgMgFIgIgEIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADADIAFADIAGADIAJADIAHAEQADACABAEQACADAAAGQAAAKgIAFQgHAFgNAAQgKAAgFgCg");
	this.shape_110.setTransform(108.175,274.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#333333").s().p("AgFAzIAAhIIALAAIAABIgAgFgkQgDgCAAgEQAAgEADgDQADgBACAAQADAAADABQADADgBAEQABAEgDACQgDADgDAAQgCAAgDgDg");
	this.shape_111.setTransform(103.3,272.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#333333").s().p("AgKA0QgGgCgFgFQgFgFgDgHQgCgHAAgJQAAgIACgIQADgGAEgFQAEgEAGgDQAGgDAHAAQAGAAAFABIAHAEIAAglIANgCIAABpIgLADIgQABQgIAAgHgDgAgGgHQgEADgDADQgCADgBAEQgCAFAAAGQAAANAHAHQAGAGAKAAIAIAAIAGgBIAAgtQgCgCgEgCQgFgCgFAAQgFAAgEACg");
	this.shape_112.setTransform(97.2,272.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#333333").s().p("AgRAkIgIgCIADgLIAHADQAFABAIAAQAHAAAEgCQAEgCAAgFQAAgEgEgEIgMgFIgIgEIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADADIAFADIAGADIAJADIAHAEQADACABAEQACADAAAGQAAAKgIAFQgHAFgNAAQgKAAgFgCg");
	this.shape_113.setTransform(86.925,274.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#333333").s().p("AgGAzIAAhIIANAAIAABIgAgFgkQgCgCgBgEQABgEACgDQACgBADAAQADAAADABQADADgBAEQABAEgDACQgDADgDAAQgDAAgCgDg");
	this.shape_114.setTransform(82.05,272.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_115.setTransform(76.175,274.225);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#333333").s().p("AgJA0QgHgCgFgFQgFgFgDgHQgCgHAAgJQAAgIACgIQADgGADgFQAFgEAGgDQAGgDAHAAQAGAAAFABIAHAEIAAglIANgCIAABpIgMADIgQABQgGAAgHgDgAgGgHQgEADgDADQgCADgBAEQgBAFAAAGQgBANAHAHQAGAGAKAAIAIAAIAGgBIAAgtQgCgCgFgCQgEgCgGAAQgEAAgEACg");
	this.shape_116.setTransform(67.7,272.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#333333").s().p("AgGAzIAAhIIANAAIAABIgAgFgkQgDgCABgEQgBgEADgDQADgBACAAQAEAAACABQACADABAEQgBAEgCACQgCADgEAAQgCAAgDgDg");
	this.shape_117.setTransform(58.8,272.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#333333").s().p("AgNAjQgFgDgEgEQgDgFgCgGQgBgGAAgHIAAgoIANAAIAAAlQAAANAEAGQAEAGAJAAIAEAAIAEgBIAEAAIACgBIAAg8IANAAIAABGIgLACIgRABQgIAAgGgCg");
	this.shape_118.setTransform(52.975,274.275);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#333333").s().p("AgRAkIgIgCIADgLIAHADQAFABAIAAQAHAAAEgCQAEgCAAgFQAAgEgEgEIgMgFIgIgEIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADADIAFADIAGADIAJADIAHAEQADACABAEQACADAAAGQAAAKgIAFQgHAFgNAAQgKAAgFgCg");
	this.shape_119.setTransform(45.875,274.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#333333").s().p("AgRAkIgIgCIADgLIAHADQAFABAIAAQAHAAAEgCQAEgCAAgFQAAgEgEgEIgMgFIgIgEIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADADIAFADIAGADIAJADIAHAEQADACABAEQACADAAAGQAAAKgIAFQgHAFgNAAQgKAAgFgCg");
	this.shape_120.setTransform(39.625,274.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_121.setTransform(32.375,274.225);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#333333").s().p("AgfAyIAAhfIAMgDQAGgBAKAAQAHAAAHADQAGACAFAFQAFAFACAHQADAHAAAJQAAAIgCAGQgCAHgEAFQgFAFgGADQgGADgHAAQgGAAgFgCIgHgDIAAAdgAgSgkIAAAtIAHAEQAEABAGAAQAEAAAEgCQAEgCADgDQACgEABgEIABgKQAAgNgGgHQgGgGgKAAIgJAAIgFABg");
	this.shape_122.setTransform(24.325,275.425);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#333333").s().p("AAkAlIAAglIAAgLQgBgEgCgEQgBgDgDgBQgDgCgFAAQgGAAgFACIgFADIABAIIAAAJIAAAoIgLAAIAAglIgBgLQgBgEgCgEQgBgDgDgBQgDgCgFAAIgEABIgEAAIgEAAIgDABIAAA8IgMAAIAAhFIALgDQAIgBAJAAQAHAAAFACQAFACADADIADgCIAEgCIAIgCIAIgBQAIAAAFACQAFADADAEQADAFACAGIABANIAAAog");
	this.shape_123.setTransform(608.65,256.425);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#333333").s().p("AgKA0QgHgDgFgEQgEgGgCgHQgDgGAAgIQAAgLADgGQADgHAFgFQAEgFAGgCQAGgCAGAAQAOAAAIAJQAIAJAAASIAAACIAAADIgxAAQABALAGAGQAFAGAMgBIALgBIAHgCIACALIgIADIgOABQgIAAgHgDgAgFgHIgGAEQgDADgBADIgCAHIAjAAQABgIgFgGQgFgFgIAAQgDAAgDACgAgHggIARgWIAIAIIgTAUg");
	this.shape_124.setTransform(598.625,254.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#333333").s().p("AgUA2IgLgDIAAhnIANgCIAAAnIAHgEQAFgBAGAAQAHAAAGADQAGACAFAFQAEAFACAHQACAGAAAJQAAAJgDAHQgCAHgFAFQgFAFgGACQgHADgHAAIgRgBgAgLgGIgHADIAAAtIAFABIAJAAQAKABAGgHQAGgHAAgNIgBgLQgBgFgCgCQgDgDgEgCQgEgCgEAAQgGAAgEACg");
	this.shape_125.setTransform(590.825,254.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#333333").s().p("AAkAlIAAglIAAgLQAAgEgCgEQgCgDgDgBQgDgCgFAAQgHAAgEACIgFADIABAIIABAJIAAAoIgNAAIAAglIAAgLQAAgEgDgEQgBgDgDgBQgDgCgFAAIgEABIgEAAIgEAAIgDABIAAA8IgMAAIAAhFIAMgDQAHgBAKAAQAGAAAFACQAFACADADIACgCIAGgCIAHgCIAIgBQAIAAAFACQAGADADAEQACAFABAGIACANIAAAog");
	this.shape_126.setTransform(580.55,256.425);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgDgFQgBgEAAgGQgBgGADgFQADgEAEgCIAKgDIAKgBIAEAAIAEAAIAEABIACAAIAAgEIgBgGIgDgGIgEgDQgEgCgEAAIgLABIgHACIgCgLIAJgCIALgBQAIAAAGACQAFACADADQADAEACAFQABAFAAAGIAAAtIgEABIgHABIgIABIgJAAIgKgBgAgCADIgGACIgEADQgDADAAADQAAAIAFACQAFADAGAAIAIAAIAHgBIAAgWIgFAAIgIgBIgFAAg");
	this.shape_127.setTransform(570.65,256.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#333333").s().p("AgHAvQgGgDgCgDQgEgEgBgGIgBgMIAAhAIAOgDIAAAXIAaAAIAAALIgaAAIAAAhIAAAJIADAGQACABACABIAFABQAGAAADgBIAGgCIACALIgHACQgFACgGgBQgHAAgEgBg");
	this.shape_128.setTransform(564.75,255.45);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#333333").s().p("AgUAlIAAhEIAMgEQAHgBAHAAIAEAAIAEABIAEAAIADABIgCALIgFgBIgKgBIgGABIgFABIAAA8g");
	this.shape_129.setTransform(554.875,256.425);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_130.setTransform(547.575,256.525);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#333333").s().p("AgKA0QgGgCgFgFQgFgFgDgHQgCgHAAgJQAAgJACgGQADgHAEgFQAEgFAGgCQAGgDAHAAQAGAAAFABIAHAEIAAglIANgCIAABpIgLADIgRABQgHAAgHgDgAgGgGQgEACgCADQgDACgBAFQgCAGAAAFQAAANAHAHQAGAHAKgBIAJAAIAFgBIAAgtQgCgCgEgBQgFgCgFAAQgFAAgEACg");
	this.shape_131.setTransform(539.1,254.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#333333").s().p("AgLAlIgJgEQgDgDgDgFQgCgEAAgGQAAgGADgFQACgEAEgCIAKgDIALgBIAEAAIAEAAIAEABIABAAIAAgEIAAgGIgCgGIgGgDQgDgCgEAAIgLABIgIACIgBgLIAIgCIAMgBQAIAAAGACQAFACADADQAEAEABAFQACAFAAAGIAAAtIgFABIgHABIgJABIgIAAIgLgBgAgCADIgGACIgEADQgCADAAADQgBAIAFACQAEADAIAAIAHAAIAGgBIAAgWIgEAAIgHgBIgGAAg");
	this.shape_132.setTransform(531.35,256.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#333333").s().p("AgQAxIgKgCIACgMIAKADIAMABQAKAAAFgFQAGgEAAgKIAAgDIgHADQgFACgGAAQgGgBgGgCQgFgCgFgEQgEgFgDgGQgCgGAAgJQAAgIACgHQADgGAEgFQAFgFAGgDQAHgCAHAAQAJgBAHACIALACIAABAQAAARgIAHQgJAJgRgBIgNgBgAgLgfQgGAHAAALQAAAGACAFQACAEACADQADADAEABIAGABQAFAAAFgCIAGgDIAAgqIgFgBIgJAAQgJAAgGAHg");
	this.shape_133.setTransform(523.625,257.75);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_134.setTransform(515.675,256.525);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#333333").s().p("AgMBAIgFgBIACgLIADABIAEAAQAGAAACgDQADgFAAgIIAAhHIANAAIAABHQAAAOgGAHQgHAHgLgBIgEAAgAADgxQgCgCAAgEQAAgEACgDQADgCADAAQAEAAACACQADADAAAEQAAAEgDACQgCACgEABQgDgBgDgCg");
	this.shape_135.setTransform(508.875,256.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#333333").s().p("AgKAlIgKgEQgDgDgDgFQgCgEAAgGQABgGACgFQADgEADgCIAKgDIALgBIAEAAIAEAAIAEABIABAAIAAgEIAAgGIgCgGIgGgDQgDgCgEAAIgLABIgIACIgBgLIAJgCIALgBQAIAAAGACQAFACADADQADAEACAFQABAFAAAGIAAAtIgEABIgHABIgJABIgIAAIgKgBgAgCADIgGACIgEADQgCADAAADQgBAIAFACQAFADAGAAIAIAAIAGgBIAAgWIgEAAIgHgBIgGAAg");
	this.shape_136.setTransform(499.75,256.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#333333").s().p("AgKA0QgGgCgFgFQgEgFgEgHQgCgHAAgJQAAgJACgGQACgHAFgFQAEgFAGgCQAGgDAHAAQAGAAAFABIAHAEIAAglIANgCIAABpIgLADIgRABQgGAAgIgDgAgGgGQgEACgDADQgCACgBAFQgBAGAAAFQgBANAHAHQAGAHAKgBIAIAAIAGgBIAAgtQgCgCgFgBQgEgCgFAAQgFAAgEACg");
	this.shape_137.setTransform(491.95,254.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#333333").s().p("AgLAlIgJgEQgDgDgCgFQgDgEAAgGQAAgGADgFQACgEAEgCIAKgDIALgBIAEAAIAEAAIADABIACAAIAAgEIAAgGIgCgGIgGgDQgDgCgEAAIgLABIgIACIgBgLIAIgCIAMgBQAIAAAFACQAGACADADQAEAEABAFQACAFAAAGIAAAtIgGABIgGABIgJABIgIAAIgLgBgAgCADIgGACIgEADQgCADAAADQgBAIAFACQAEADAIAAIAIAAIAFgBIAAgWIgEAAIgHgBIgGAAg");
	this.shape_138.setTransform(484.2,256.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#333333").s().p("AgKAwQgIgEgGgGQgGgHgDgJQgEgKAAgMQAAgLAEgJQAEgKAGgGQAGgHAJgDQAIgEAJAAIALABIAIACIAGADIADABIgEALIgEgBIgFgCIgHgCIgHgBQgIAAgFADQgGADgEAFQgFAFgCAHQgCAHAAAIQAAAJACAHQACAHAEAFQAEAFAGADQAFADAIAAQAKAAAGgCIAJgDIAEALIgEABIgGACIgJACIgLABQgJAAgJgDg");
	this.shape_139.setTransform(476.625,255.275);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#333333").s().p("AgGAGQgCgDAAgDQAAgDACgCQADgDADAAQAEAAADADQACACAAADQAAADgCADQgDAEgEAAQgDAAgDgEg");
	this.shape_140.setTransform(465.875,259.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#333333").s().p("AgRAlIgIgDIADgLIAHACQAFACAIAAQAHAAAEgCQAEgCAAgEQAAgGgEgCIgMgHIgIgDIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADADIAFADIAGADIAJADIAHAEQADADABADQACAEAAAFQAAAKgIAFQgHAFgNAAQgKAAgFgBg");
	this.shape_141.setTransform(461.025,256.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_142.setTransform(453.775,256.525);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#333333").s().p("AgFAlIgOgiQgIgSgFgVIAOAAIAEAPIAFAQIAFANIAEAOIAFgOIAFgNIAFgQIAEgPIAOAAQgGAVgHASIgOAig");
	this.shape_143.setTransform(446.175,256.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#333333").s().p("AgFA0IAAhJIALAAIAABJgAgFgkQgDgCAAgEQAAgEADgDQADgCACAAQADAAADACQACADAAAEQAAAEgCACQgDACgDABQgCgBgDgCg");
	this.shape_144.setTransform(440.9,255);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#333333").s().p("AgHAvQgGgDgCgDQgDgEgCgGIgBgMIAAhAIAOgDIAAAXIAaAAIAAALIgaAAIAAAhIAAAJIACAGQACABADABIAFABQAFAAAEgBIAGgCIABALIgGACQgFACgHgBQgFAAgFgBg");
	this.shape_145.setTransform(436.7,255.45);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#333333").s().p("AgNAjQgFgDgEgEQgDgFgCgGQgBgGAAgHIAAgoIANAAIAAAlQAAANAEAGQAEAGAJAAIAEAAIAEgBIAEAAIACgBIAAg8IANAAIAABGIgLACIgRABQgIAAgGgCg");
	this.shape_146.setTransform(429.425,256.575);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#333333").s().p("AAIAmQgIAAgGgDQgHgDgFgEQgEgGgCgHQgDgGAAgIQAAgIADgHQACgHAFgGQAEgEAHgDQAGgDAHAAIAKAAIAJAEIgDALIgGgDIgIAAQgKgBgGAHQgGAHAAANQAAAFABAFQACAFADAEQACADAFACQADABAHAAIAJgBIAHgCIACALIgEACIgEABIgGABIgGAAg");
	this.shape_147.setTransform(422.425,256.5);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#333333").s().p("AgKAjQgHgDgFgEQgEgGgCgHQgDgGAAgIQAAgKADgGQADgIAFgFQAEgFAGgCQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAGAMgBIALgBIAHgCIACALIgIADIgOABQgIAAgHgDgAgFgYIgGAEQgDADgBAEIgCAHIAjAAQABgIgFgHQgFgFgIAAQgDAAgDACg");
	this.shape_148.setTransform(414.975,256.5);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#333333").s().p("AgRAlIgIgDIADgLIAHACQAFACAIAAQAHAAAEgCQAEgCAAgEQAAgGgEgCIgMgHIgIgDIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADADIAFADIAGADIAJADIAHAEQADADABADQACAEAAAFQAAAKgIAFQgHAFgNAAQgKAAgFgBg");
	this.shape_149.setTransform(407.975,256.5);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#333333").s().p("AAQAlIAAglIgBgLQgBgFgBgDQgCgDgEgBQgEgCgEAAIgEABIgFAAIgDAAIgCABIAAA8IgOAAIAAhFIAMgDQAIgBAJAAQAJAAAFACQAGADADAEQADAFACAGQACAGAAAHIAAAog");
	this.shape_150.setTransform(400.85,256.425);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_151.setTransform(392.675,256.525);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#333333").s().p("AAIAmQgIAAgGgDQgHgDgFgEQgEgGgCgHQgDgGAAgIQAAgIADgHQACgHAFgGQAEgEAHgDQAGgDAHAAIAKAAIAJAEIgDALIgGgDIgIAAQgKgBgGAHQgGAHAAANQAAAFABAFQACAFADAEQACADAFACQADABAHAAIAJgBIAHgCIACALIgEACIgEABIgGABIgGAAg");
	this.shape_152.setTransform(385.525,256.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#333333").s().p("AgRAlIgIgDIADgLIAHACQAFACAIAAQAHAAAEgCQAEgCAAgEQAAgGgEgCIgMgHIgIgDIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADADIAFADIAGADIAJADIAHAEQADADABADQACAEAAAFQAAAKgIAFQgHAFgNAAQgKAAgFgBg");
	this.shape_153.setTransform(374.475,256.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_154.setTransform(367.225,256.525);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#333333").s().p("AgUAlIAAhEIAMgEQAHgBAHAAIAEAAIAEABIAEAAIADABIgCALIgFgBIgKgBIgGABIgFABIAAA8g");
	this.shape_155.setTransform(360.875,256.425);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgDgFQgCgEAAgGQABgGACgFQADgEADgCIAKgDIALgBIAEAAIAEAAIAEABIACAAIAAgEIgBgGIgCgGIgFgDQgEgCgEAAIgLABIgIACIgBgLIAJgCIALgBQAIAAAGACQAFACADADQADAEACAFQABAFAAAGIAAAtIgEABIgHABIgJABIgIAAIgKgBgAgCADIgGACIgEADQgCADgBADQAAAIAFACQAFADAGAAIAIAAIAHgBIAAgWIgFAAIgHgBIgGAAg");
	this.shape_156.setTransform(353.85,256.5);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#333333").s().p("AgfAyIAAhfIAMgDQAGgBAKAAQAHAAAHADQAGACAFAFQAFAFACAHQADAHAAAJQAAAIgCAGQgCAHgEAFQgFAFgGADQgGADgHAAQgGAAgFgCIgHgDIAAAdgAgSgkIAAAtIAHAEQAEABAGAAQAEAAAEgCQAEgCADgDQACgEABgEIABgKQAAgNgGgHQgGgGgKAAIgJAAIgFABg");
	this.shape_157.setTransform(346.475,257.725);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#333333").s().p("AgRAlIgIgDIADgLIAHACQAFACAIAAQAHAAAEgCQAEgCAAgEQAAgGgEgCIgMgHIgIgDIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADADIAFADIAGADIAJADIAHAEQADADABADQACAEAAAFQAAAKgIAFQgHAFgNAAQgKAAgFgBg");
	this.shape_158.setTransform(339.025,256.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#333333").s().p("AgFA0IAAhJIALAAIAABJgAgFgkQgDgCAAgEQAAgEADgDQACgCADAAQADAAADACQADADgBAEQABAEgDACQgDACgDABQgDgBgCgCg");
	this.shape_159.setTransform(334.15,255);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#333333").s().p("AgKA0QgGgCgFgFQgFgFgDgHQgCgHAAgJQAAgJACgGQADgHAEgFQAEgFAGgCQAGgDAHAAQAGAAAFABIAHAEIAAglIANgCIAABpIgLADIgRABQgHAAgHgDgAgGgGQgEACgDADQgCACgBAFQgCAGAAAFQAAANAHAHQAGAHAKgBIAIAAIAGgBIAAgtQgCgCgEgBQgFgCgFAAQgFAAgEACg");
	this.shape_160.setTransform(328.05,254.8);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#333333").s().p("AgRAlIgIgDIADgLIAHACQAFACAIAAQAHAAAEgCQAEgCAAgEQAAgGgEgCIgMgHIgIgDIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADADIAFADIAGADIAJADIAHAEQADADABADQACAEAAAFQAAAKgIAFQgHAFgNAAQgKAAgFgBg");
	this.shape_161.setTransform(316.575,256.5);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#333333").s().p("AgKA0QgHgDgFgFQgEgFgCgHQgDgHAAgIQAAgKADgHQADgGAFgFQAEgFAGgDQAGgBAGAAQAOgBAIAKQAIAIAAATIAAABIAAADIgxAAQABAMAGAFQAFAGAMAAIALgBIAHgCIACALIgIACIgOABQgIABgHgDgAgFgIIgGAFQgDADgBACIgCAHIAjAAQABgIgFgFQgFgFgIAAQgDAAgDABgAABgoIgMAMIgGgGIASgUIATAUIgFAGg");
	this.shape_162.setTransform(309.475,254.85);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#333333").s().p("AgUAlIAAhEIAMgEQAHgBAHAAIAEAAIAEABIAEAAIADABIgCALIgFgBIgKgBIgGABIgFABIAAA8g");
	this.shape_163.setTransform(303.375,256.425);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#333333").s().p("AgHAvQgGgDgCgDQgDgEgBgGIgCgMIAAhAIAOgDIAAAXIAaAAIAAALIgaAAIAAAhIAAAJIACAGQACABADABIAFABQAFAAAEgBIAFgCIACALIgGACQgFACgHgBQgFAAgFgBg");
	this.shape_164.setTransform(297.75,255.45);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#333333").s().p("AgUAlIAAhEIAMgEQAHgBAHAAIAEAAIAEABIAEAAIADABIgCALIgFgBIgKgBIgGABIgFABIAAA8g");
	this.shape_165.setTransform(287.875,256.425);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgDgFQgBgEAAgGQgBgGADgFQADgEAEgCIAJgDIALgBIAEAAIAEAAIAEABIACAAIAAgEIgBgGIgDgGIgEgDQgEgCgEAAIgLABIgHACIgCgLIAJgCIALgBQAIAAAGACQAFACADADQADAEACAFQACAFgBAGIAAAtIgEABIgHABIgJABIgIAAIgKgBgAgCADIgGACIgEADQgDADAAADQAAAIAFACQAFADAGAAIAIAAIAHgBIAAgWIgFAAIgIgBIgFAAg");
	this.shape_166.setTransform(280.85,256.5);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#333333").s().p("AgbAlIAAgJIAJgOIAKgOIAJgNIAJgLIgjAAIAAgMIA0AAIAAALIgIAJIgKAMIgKAPIgKAOIAnAAIAAAMg");
	this.shape_167.setTransform(274.075,256.5);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#333333").s().p("AgGA0IAAhJIANAAIAABJgAgFgkQgCgCgBgEQABgEACgDQACgCADAAQAEAAACACQACADABAEQgBAEgCACQgCACgEABQgDgBgCgCg");
	this.shape_168.setTransform(269.05,255);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#333333").s().p("AgGAxQgFgEAAgLIAAhWIAMgCIAABWIAAAGQABAAAAABQAAAAAAABQABAAAAAAQAAABABAAIACACIAGABIgCALQgLgBgFgFg");
	this.shape_169.setTransform(265.75,254.8);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgDgFQgBgEAAgGQgBgGADgFQACgEAFgCIAKgDIAKgBIAEAAIAEAAIADABIADAAIAAgEIgBgGIgDgGIgEgDQgEgCgEAAIgLABIgHACIgCgLIAJgCIALgBQAIAAAFACQAGACADADQADAEACAFQACAFgBAGIAAAtIgEABIgHABIgIABIgJAAIgKgBgAgCADIgGACIgFADQgCADAAADQABAIAEACQAFADAGAAIAIAAIAHgBIAAgWIgFAAIgIgBIgFAAg");
	this.shape_170.setTransform(259.6,256.5);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#333333").s().p("AgKAjQgHgDgFgEQgEgGgCgHQgDgGAAgIQAAgKADgGQADgIAFgFQAEgFAGgCQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAGAMgBIALgBIAHgCIACALIgIADIgOABQgIAAgHgDgAgFgYIgGAEQgDADgBAEIgCAHIAjAAQABgIgFgHQgFgFgIAAQgDAAgDACg");
	this.shape_171.setTransform(252.175,256.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#333333").s().p("AgUAlIAAhEIAMgEQAHgBAHAAIAEAAIAEABIAEAAIADABIgCALIgFgBIgKgBIgGABIgFABIAAA8g");
	this.shape_172.setTransform(246.075,256.425);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#333333").s().p("AgKAjQgHgDgFgEQgEgGgCgHQgDgGAAgIQAAgKADgGQADgIAFgFQAEgFAGgCQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAGAMgBIALgBIAHgCIACALIgIADIgOABQgIAAgHgDgAgFgYIgGAEQgDADgBAEIgCAHIAjAAQABgIgFgHQgFgFgIAAQgDAAgDACg");
	this.shape_173.setTransform(234.475,256.5);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#333333").s().p("AgFAlIgOgiQgIgSgFgVIAOAAIAEAPIAFAQIAFANIAEAOIAFgOIAFgNIAFgQIAEgPIAOAAQgGAVgHASIgOAig");
	this.shape_174.setTransform(227.125,256.5);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#333333").s().p("AgKAjQgHgDgFgEQgEgGgCgHQgDgGAAgIQAAgKADgGQADgIAFgFQAEgFAGgCQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAGAMgBIALgBIAHgCIACALIgIADIgOABQgIAAgHgDgAgFgYIgGAEQgDADgBAEIgCAHIAjAAQABgIgFgHQgFgFgIAAQgDAAgDACg");
	this.shape_175.setTransform(219.625,256.5);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#333333").s().p("AgKA0QgGgCgFgFQgFgFgDgHQgCgHAAgJQAAgJACgGQACgHAFgFQAEgFAGgCQAGgDAHAAQAGAAAFABIAHAEIAAglIANgCIAABpIgLADIgQABQgIAAgHgDgAgGgGQgEACgCADQgDACgBAFQgCAGAAAFQAAANAHAHQAHAHAJgBIAJAAIAFgBIAAgtQgCgCgEgBQgFgCgFAAQgFAAgEACg");
	this.shape_176.setTransform(211.4,254.8);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#333333").s().p("AgUAlIAAhEIAMgEQAHgBAHAAIAEAAIAEABIAEAAIADABIgCALIgFgBIgKgBIgGABIgFABIAAA8g");
	this.shape_177.setTransform(200.825,256.425);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_178.setTransform(193.525,256.525);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#333333").s().p("AgKA0QgGgCgFgFQgEgFgEgHQgCgHAAgJQAAgJACgGQACgHAEgFQAFgFAGgCQAGgDAHAAQAGAAAFABIAHAEIAAglIANgCIAABpIgLADIgRABQgGAAgIgDgAgGgGQgEACgDADQgCACgBAFQgBAGAAAFQgBANAHAHQAGAHAKgBIAIAAIAGgBIAAgtQgCgCgEgBQgFgCgFAAQgFAAgEACg");
	this.shape_179.setTransform(185.05,254.8);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#333333").s().p("AgLAlIgJgEQgDgDgCgFQgDgEAAgGQAAgGADgFQACgEAEgCIAKgDIALgBIAEAAIAEAAIADABIACAAIAAgEIAAgGIgCgGIgGgDQgDgCgEAAIgLABIgIACIgBgLIAIgCIAMgBQAIAAAFACQAGACADADQAEAEABAFQACAFAAAGIAAAtIgGABIgGABIgJABIgIAAIgLgBgAgCADIgGACIgFADQgBADAAADQgBAIAFACQAEADAIAAIAIAAIAFgBIAAgWIgEAAIgHgBIgGAAg");
	this.shape_180.setTransform(177.3,256.5);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#333333").s().p("AgQAxIgKgCIACgMIAKADIAMABQAKAAAFgFQAGgEAAgKIAAgDIgHADQgFACgGAAQgGgBgGgCQgFgCgFgEQgEgFgDgGQgCgGAAgJQAAgIACgHQADgGAEgFQAFgFAGgDQAHgCAHAAQAJgBAHACIALACIAABAQAAARgIAHQgJAJgRgBIgNgBgAgLgfQgGAHAAALQAAAGACAFQACAEACADQADADAEABIAGABQAFAAAFgCIAGgDIAAgqIgFgBIgJAAQgJAAgGAHg");
	this.shape_181.setTransform(169.575,257.75);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_182.setTransform(161.625,256.525);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#333333").s().p("AgMBAIgFgBIACgLIADABIAEAAQAGAAACgDQADgFAAgIIAAhHIANAAIAABHQAAAOgGAHQgHAHgLgBIgEAAgAADgxQgCgCAAgEQAAgEACgDQADgCADAAQAEAAACACQADADAAAEQAAAEgDACQgCACgEABQgDgBgDgCg");
	this.shape_183.setTransform(154.825,256.3);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#333333").s().p("AgLAlIgJgEQgDgDgDgFQgCgEAAgGQABgGACgFQACgEAEgCIAKgDIALgBIAEAAIAEAAIAEABIABAAIAAgEIAAgGIgCgGIgGgDQgDgCgEAAIgLABIgIACIgBgLIAIgCIAMgBQAIAAAGACQAFACADADQAEAEABAFQACAFAAAGIAAAtIgFABIgHABIgJABIgIAAIgLgBgAgCADIgGACIgEADQgCADAAADQgBAIAFACQAEADAIAAIAHAAIAGgBIAAgWIgEAAIgHgBIgGAAg");
	this.shape_184.setTransform(145.7,256.5);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#333333").s().p("AgJA0QgHgCgFgFQgFgFgDgHQgCgHAAgJQAAgJACgGQADgHADgFQAFgFAGgCQAGgDAHAAQAGAAAFABIAHAEIAAglIANgCIAABpIgMADIgQABQgGAAgHgDgAgGgGQgEACgDADQgCACgBAFQgBAGAAAFQgBANAHAHQAGAHAKgBIAIAAIAGgBIAAgtQgCgCgFgBQgEgCgGAAQgEAAgEACg");
	this.shape_185.setTransform(137.9,254.8);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#333333").s().p("AgLAlIgJgEQgDgDgCgFQgCgEgBgGQAAgGADgFQACgEAEgCIALgDIAKgBIAEAAIAEAAIADABIACAAIAAgEIAAgGIgDgGIgFgDQgDgCgEAAIgLABIgIACIgBgLIAIgCIAMgBQAIAAAFACQAGACADADQAEAEABAFQABAFABAGIAAAtIgGABIgGABIgIABIgJAAIgLgBgAgCADIgGACIgFADQgBADAAADQAAAIAEACQAEADAIAAIAIAAIAFgBIAAgWIgEAAIgIgBIgFAAg");
	this.shape_186.setTransform(130.15,256.5);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#333333").s().p("AAIAmQgIAAgGgDQgHgDgFgEQgEgGgCgHQgDgGAAgIQAAgIADgHQACgHAFgGQAEgEAHgDQAGgDAHAAIAKAAIAJAEIgDALIgGgDIgIAAQgKgBgGAHQgGAHAAANQAAAFABAFQACAFADAEQACADAFACQADABAHAAIAJgBIAHgCIACALIgEACIgEABIgGABIgGAAg");
	this.shape_187.setTransform(123.675,256.5);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#333333").s().p("AgJAQQAEgHABgIIABgMIAAgEIAAgDIANAAIAAACIAAACQAAAJgDAIQgCAIgFAIg");
	this.shape_188.setTransform(113.825,260.475);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#333333").s().p("AgLAlIgJgEQgDgDgCgFQgDgEAAgGQAAgGADgFQACgEAEgCIAKgDIALgBIAEAAIAEAAIADABIACAAIAAgEIAAgGIgCgGIgGgDQgDgCgEAAIgLABIgIACIgBgLIAIgCIAMgBQAIAAAFACQAGACADADQAEAEABAFQACAFAAAGIAAAtIgGABIgGABIgJABIgIAAIgLgBgAgCADIgGACIgFADQgBADAAADQgBAIAFACQAEADAIAAIAIAAIAFgBIAAgWIgEAAIgHgBIgGAAg");
	this.shape_189.setTransform(108.45,256.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#333333").s().p("AgJA0QgHgCgFgFQgEgFgDgHQgDgHAAgJQAAgJADgGQACgHADgFQAFgFAGgCQAGgDAHAAQAGAAAFABIAHAEIAAglIANgCIAABpIgMADIgQABQgGAAgHgDgAgGgGQgEACgDADQgCACgBAFQgCAGABAFQAAANAGAHQAGAHAKgBIAIAAIAGgBIAAgtQgCgCgFgBQgEgCgGAAQgEAAgEACg");
	this.shape_190.setTransform(100.65,254.8);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#333333").s().p("AgLAlIgJgEQgDgDgCgFQgCgEAAgGQAAgGACgFQADgEAEgCIAKgDIAKgBIAEAAIAEAAIADABIACAAIAAgEIAAgGIgDgGIgEgDQgEgCgEAAIgLABIgHACIgCgLIAIgCIAMgBQAIAAAFACQAGACADADQADAEACAFQABAFABAGIAAAtIgGABIgGABIgIABIgJAAIgLgBgAgCADIgGACIgFADQgCADAAADQABAIAEACQAEADAIAAIAIAAIAFgBIAAgWIgEAAIgIgBIgFAAg");
	this.shape_191.setTransform(92.9,256.5);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#333333").s().p("AgJA0QgHgCgFgFQgEgFgDgHQgDgHAAgJQAAgJADgGQACgHADgFQAFgFAGgCQAGgDAHAAQAGAAAFABIAHAEIAAglIANgCIAABpIgMADIgPABQgIAAgGgDgAgGgGQgEACgCADQgDACgBAFQgBAGAAAFQAAANAGAHQAHAHAJgBIAJAAIAFgBIAAgtQgCgCgFgBQgEgCgGAAQgEAAgEACg");
	this.shape_192.setTransform(85.1,254.8);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_193.setTransform(77.075,256.525);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#333333").s().p("AgUAlIAAhEIAMgEQAHgBAHAAIAEAAIAEABIAEAAIADABIgCALIgFgBIgKgBIgGABIgFABIAAA8g");
	this.shape_194.setTransform(70.725,256.425);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgCgFQgCgEAAgGQAAgGACgFQADgEAEgCIAKgDIAKgBIAEAAIAEAAIADABIADAAIAAgEIgBgGIgDgGIgEgDQgEgCgEAAIgLABIgHACIgCgLIAIgCIAMgBQAIAAAFACQAGACADADQADAEACAFQABAFAAAGIAAAtIgFABIgGABIgIABIgJAAIgKgBgAgCADIgGACIgFADQgCADAAADQABAIAEACQAEADAHAAIAJAAIAGgBIAAgWIgFAAIgIgBIgFAAg");
	this.shape_195.setTransform(59.25,256.5);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#333333").s().p("AgKA0QgGgCgFgFQgEgFgDgHQgDgHAAgJQAAgJADgGQABgHAFgFQAEgFAGgCQAGgDAHAAQAGAAAFABIAHAEIAAglIANgCIAABpIgMADIgPABQgHAAgIgDgAgGgGQgEACgCADQgDACgBAFQgBAGgBAFQABANAGAHQAGAHAKgBIAJAAIAFgBIAAgtQgCgCgEgBQgFgCgGAAQgEAAgEACg");
	this.shape_196.setTransform(51.45,254.8);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgDgFQgBgEAAgGQgBgGADgFQADgEAEgCIAJgDIALgBIAEAAIAEAAIAEABIACAAIAAgEIgBgGIgDgGIgEgDQgEgCgEAAIgLABIgHACIgCgLIAJgCIALgBQAIAAAGACQAFACADADQADAEACAFQACAFgBAGIAAAtIgEABIgHABIgJABIgIAAIgKgBgAgCADIgGACIgEADQgDADAAADQAAAIAFACQAFADAGAAIAIAAIAHgBIAAgWIgFAAIgIgBIgFAAg");
	this.shape_197.setTransform(43.7,256.5);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#333333").s().p("AAIAmQgIAAgGgDQgHgDgFgEQgEgGgCgHQgDgGAAgIQAAgIADgHQACgHAFgGQAEgEAHgDQAGgDAHAAIAKAAIAJAEIgDALIgGgDIgIAAQgKgBgGAHQgGAHAAANQAAAFABAFQACAFADAEQACADAFACQADABAHAAIAJgBIAHgCIACALIgEACIgEABIgGABIgGAAg");
	this.shape_198.setTransform(37.225,256.5);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#333333").s().p("AAfAxIgFgNIgEgMIgrAAIgJAZIgOAAIAKgdIAKgYIAJgXIAKgUIALAAIAKAUIAJAXIAKAYIAKAdgAgIgKIgJAXIAjAAIgJgXIgJgWIgIAWg");
	this.shape_199.setTransform(24.625,255.3);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#333333").s().p("AgGAGQgCgDAAgDQAAgDACgCQADgEADAAQAEAAADAEQACACAAADQAAADgCADQgDADgEAAQgDAAgDgDg");
	this.shape_200.setTransform(535.375,224);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#333333").s().p("AgQA9QAKgNAGgPQAEgPAAgSQAAgRgEgPQgGgQgKgNIAKgGQAJANAHASQAHARAAATQAAAUgHARQgHARgJAOg");
	this.shape_201.setTransform(530.875,220.575);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#333333").s().p("AgRAkIgIgCIADgLIAHACQAFACAIAAQAHAAAEgCQAEgCAAgFQAAgEgEgEIgMgFIgIgEIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADAEIAFACIAGADIAJADIAHAEQADACABAEQACADAAAGQAAAKgIAFQgHAFgNAAQgKAAgFgCg");
	this.shape_202.setTransform(525.975,221.1);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#333333").s().p("AgKAjQgHgCgFgGQgEgFgCgGQgDgIAAgIQAAgJADgHQADgHAFgFQAEgEAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAFAMAAIALgBIAHgCIACALIgIADIgOABQgIAAgHgDgAgFgZIgGAFQgDADgBAEIgCAHIAjAAQABgJgFgFQgFgGgIAAQgDAAgDABg");
	this.shape_203.setTransform(518.875,221.1);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#333333").s().p("AgNAxQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgFQgGAHAAAMQAAANAGAGQAGAIAIAAQAKAAAFgIQAGgGAAgNQAAgMgGgHQgFgHgKAAQgIAAgGAHgAgWgmIACgEIADgEIAEgEIAGAAIAFAAIAEACIAEACIADABQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAgBIADgEIAHADIgCAEIgDAEIgEADQgCACgDAAIgGgCIgDgCIgEgBIgEgBQAAAAgBAAQgBAAAAAAQgBABAAAAQgBABAAAAIgDAFg");
	this.shape_204.setTransform(510.875,219.7);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#333333").s().p("AgEAyIgFgCIACgHIADABIAEAAQAEAAAAgDIgBgDIgDgCIgBAAIABgFIABgEQgGgBgFgDQgGgDgDgFQgEgFgCgHQgCgEAAgIQAAgIADgIQACgGAFgGQAEgFAHgDQAGgDAHAAIAKABIAJADIgDALIgGgCIgIgBQgKAAgGAGQgGAIAAANQAAAGABAFQACADADAEQACAEAFABQADACAHAAIAJgBIAHgCIACALIgDABIgFACIgFAAIgFABIgCADQAEACACADQACACAAAFIgBADQAAAAAAAAQAAABgBAAQAAABAAAAQgBABAAAAIgFADIgHABIgFgBg");
	this.shape_205.setTransform(503.725,222.35);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#333333").s().p("AgFAzIAAhIIALAAIAABIgAgFgkQgDgCAAgEQAAgEADgDQACgBADAAQADAAADABQACADAAAEQAAAEgCACQgDADgDAAQgDAAgCgDg");
	this.shape_206.setTransform(498.5,219.6);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#333333").s().p("AgRAkIgIgCIADgLIAHACQAFACAIAAQAHAAAEgCQAEgCAAgFQAAgEgEgEIgMgFIgIgEIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADAEIAFACIAGADIAJADIAHAEQADACABAEQACADAAAGQAAAKgIAFQgHAFgNAAQgKAAgFgCg");
	this.shape_207.setTransform(493.625,221.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_208.setTransform(486.375,221.125);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#333333").s().p("AgfAyIAAhfIAMgDQAGgBAKAAQAHAAAHADQAGACAFAFQAFAFACAHQADAHAAAJQAAAIgCAGQgCAHgEAFQgFAFgGADQgGADgHAAQgGAAgFgCIgHgDIAAAdgAgSgkIAAAtIAHAEQAEABAGAAQAEAAAEgCQAEgCADgDQACgEABgEIABgKQAAgNgGgHQgGgGgKAAIgJAAIgFABg");
	this.shape_209.setTransform(478.325,222.325);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#333333").s().p("AgbAyIgBgCIAAgBQAAgHADgGQACgFADgFIAIgKIAJgJIAFgFIAGgHIAEgHQABgDAAgEQAAgEgBgDQgBgDgDgCQgCgCgDgBIgFgBIgIABIgGADIgEADIgDACIgGgJIADgDIAGgEIAIgDQAFgCAFAAQAOAAAIAIQAHAHAAAMQAAAGgCAEIgFAJIgIAIIgIAJIgFAGIgGAGIgEAHQgCADAAADIArAAIAAALg");
	this.shape_210.setTransform(466.675,219.775);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#333333").s().p("AgJAlQgHgRAAgUQAAgTAHgRQAGgSAKgNIAKAGQgKANgGAQQgEAPAAARQAAASAEAPQAGAPAKANIgKAHQgKgOgGgRg");
	this.shape_211.setTransform(461.075,220.575);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#333333").s().p("AgRAkIgIgCIADgLIAHACQAFACAIAAQAHAAAEgCQAEgCAAgFQAAgEgEgEIgMgFIgIgEIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADAEIAFACIAGADIAJADIAHAEQADACABAEQACADAAAGQAAAKgIAFQgHAFgNAAQgKAAgFgCg");
	this.shape_212.setTransform(451.925,221.1);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_213.setTransform(444.675,221.125);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#333333").s().p("AARAlIAAglIgBgLQgBgFgDgDQgBgDgEgBQgEgCgDAAIgFABIgEAAIgEAAIgDABIAAA8IgMAAIAAhFIALgDQAIgBAJAAQAJAAAFACQAGADAEAEQADAFABAGQABAGAAAHIAAAog");
	this.shape_214.setTransform(436.55,221.025);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#333333").s().p("AgFAzIAAhIIALAAIAABIgAgFgkQgCgCAAgEQAAgEACgDQADgBACAAQADAAADABQADADAAAEQAAAEgDACQgDADgDAAQgCAAgDgDg");
	this.shape_215.setTransform(430.75,219.6);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#333333").s().p("AgUAlIAAhEIAMgEQAHgBAHAAIAEAAIAEABIAEAAIADABIgCALIgFgBIgKgBIgGABIgFABIAAA8g");
	this.shape_216.setTransform(426.775,221.025);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#333333").s().p("AgLAlIgJgEQgDgDgDgFQgCgEAAgGQABgGACgEQACgFAEgBIAKgFIALgBIAEAAIAEABIAEAAIABABIAAgEIAAgGIgCgFIgGgFQgDgBgEAAIgLABIgIACIgBgLIAIgCIAMgBQAIAAAGACQAFACADAEQAEADABAGQACAFAAAGIAAAsIgFABIgHABIgJAAIgIABIgLgBgAgCADIgGACIgEADQgCADAAAEQgBAGAFAEQAEACAIAAIAHAAIAGgBIAAgVIgEgBIgHgCIgGABg");
	this.shape_217.setTransform(419.75,221.1);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#333333").s().p("AAkAlIAAglIAAgLQgBgEgBgEQgCgDgDgBQgDgCgFAAQgHAAgEACIgGADIACAIIABAJIAAAoIgNAAIAAglIAAgLQAAgEgCgEQgCgDgDgBQgDgCgFAAIgEABIgEAAIgEAAIgCABIAAA8IgOAAIAAhFIANgDQAHgBAKAAQAHAAAEACQAFACADADIACgCIAGgCIAHgCIAHgBQAJAAAFACQAGADADAEQACAFABAGIABANIAAAog");
	this.shape_218.setTransform(410.35,221.025);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#333333").s().p("AgUA2IgLgCIAAhoIANgCIAAAnIAHgEQAFgBAGAAQAHAAAGADQAGADAFAEQAEAFACAGQACAIAAAIQAAAJgDAHQgCAHgFAFQgFAFgGACQgHADgHAAIgRgBgAgLgHIgHAEIAAAtIAFABIAJAAQAKAAAGgGQAGgHAAgNIgBgKQgBgFgCgDQgDgDgEgDQgEgCgEAAQgGAAgEACg");
	this.shape_219.setTransform(400.375,219.4);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#333333").s().p("AgNAjQgFgDgEgEQgDgFgCgGQgBgGAAgHIAAgoIANAAIAAAlQAAANAEAGQAEAGAJAAIAEAAIAEgBIAEAAIACgBIAAg8IANAAIAABGIgLACIgRABQgIAAgGgCg");
	this.shape_220.setTransform(391.975,221.175);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#333333").s().p("AgRAkIgIgCIADgLIAHACQAFACAIAAQAHAAAEgCQAEgCAAgFQAAgEgEgEIgMgFIgIgEIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADAEIAFACIAGADIAJADIAHAEQADACABAEQACADAAAGQAAAKgIAFQgHAFgNAAQgKAAgFgCg");
	this.shape_221.setTransform(384.875,221.1);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#333333").s().p("AAKAwIAAgYIgrAAIAAgJIAIgOIAKgRIANgRIAMgPIAMAAIAAA9IAMAAIAAALIgMAAIAAAYgAABgWIgHAMIgIALIgGAMIAeAAIAAgtIgJAKg");
	this.shape_222.setTransform(374.525,219.9);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#333333").s().p("AgKAjQgHgCgFgGQgEgFgCgGQgDgIAAgIQAAgJADgHQADgHAFgFQAEgEAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAFAMAAIALgBIAHgCIACALIgIADIgOABQgIAAgHgDgAgFgZIgGAFQgDADgBAEIgCAHIAjAAQABgJgFgFQgFgGgIAAQgDAAgDABg");
	this.shape_223.setTransform(363.375,221.1);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#333333").s().p("AgQA9QAKgNAGgPQAEgPAAgSQAAgRgEgPQgGgQgKgNIAKgGQAJANAHASQAHARAAATQAAAUgHARQgHARgJAOg");
	this.shape_224.setTransform(353.475,220.575);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#333333").s().p("AgRAkIgIgCIADgLIAHACQAFACAIAAQAHAAAEgCQAEgCAAgFQAAgEgEgEIgMgFIgIgEIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADAEIAFACIAGADIAJADIAHAEQADACABAEQACADAAAGQAAAKgIAFQgHAFgNAAQgKAAgFgCg");
	this.shape_225.setTransform(348.575,221.1);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#333333").s().p("AgKAjQgHgCgFgGQgEgFgCgGQgDgIAAgIQAAgJADgHQADgHAFgFQAEgEAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAFAMAAIALgBIAHgCIACALIgIADIgOABQgIAAgHgDgAgFgZIgGAFQgDADgBAEIgCAHIAjAAQABgJgFgFQgFgGgIAAQgDAAgDABg");
	this.shape_226.setTransform(341.475,221.1);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#333333").s().p("AgNAxQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgFQgGAHAAAMQAAANAGAGQAGAIAIAAQAKAAAFgIQAGgGAAgNQAAgMgGgHQgFgHgKAAQgIAAgGAHgAgWgmIACgEIADgEIAEgEIAGAAIAFAAIAEACIAEACIADABQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAgBIADgEIAHADIgCAEIgDAEIgEADQgCACgDAAIgGgCIgDgCIgEgBIgEgBQAAAAgBAAQgBAAAAAAQgBABAAAAQgBABAAAAIgDAFg");
	this.shape_227.setTransform(333.475,219.7);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#333333").s().p("AgEAyIgFgCIACgHIADABIAEAAQAEAAAAgDIgBgDIgDgCIgBAAIABgFIABgEQgGgBgFgDQgGgDgDgFQgEgFgCgHQgCgEAAgIQAAgIADgIQACgGAFgGQAEgFAHgDQAGgDAHAAIAKABIAJADIgDALIgGgCIgIgBQgKAAgGAGQgGAIAAANQAAAGABAFQACADADAEQACAEAFABQADACAHAAIAJgBIAHgCIACALIgDABIgFACIgFAAIgFABIgCADQAEACACADQACACAAAFIgBADQAAAAAAAAQAAABgBAAQAAABAAAAQgBABAAAAIgFADIgHABIgFgBg");
	this.shape_228.setTransform(326.325,222.35);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#333333").s().p("AgFAzIAAhIIALAAIAABIgAgFgkQgDgCAAgEQAAgEADgDQADgBACAAQADAAADABQADADgBAEQABAEgDACQgDADgDAAQgCAAgDgDg");
	this.shape_229.setTransform(321.1,219.6);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#333333").s().p("AgRAkIgIgCIADgLIAHACQAFACAIAAQAHAAAEgCQAEgCAAgFQAAgEgEgEIgMgFIgIgEIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADAEIAFACIAGADIAJADIAHAEQADACABAEQACADAAAGQAAAKgIAFQgHAFgNAAQgKAAgFgCg");
	this.shape_230.setTransform(316.225,221.1);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_231.setTransform(308.975,221.125);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#333333").s().p("AgfAyIAAhfIAMgDQAGgBAKAAQAHAAAHADQAGACAFAFQAFAFACAHQADAHAAAJQAAAIgCAGQgCAHgEAFQgFAFgGADQgGADgHAAQgGAAgFgCIgHgDIAAAdgAgSgkIAAAtIAHAEQAEABAGAAQAEAAAEgCQAEgCADgDQACgEABgEIABgKQAAgNgGgHQgGgGgKAAIgJAAIgFABg");
	this.shape_232.setTransform(300.925,222.325);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#333333").s().p("AgMAyIgIgBIgGgCIgEgBIADgMIAIADQAFACAJAAQALAAAGgFQAFgFAAgIQAAgFgDgEQgCgDgDgDIgJgDIgJgBIgDAAIAAgJIAEAAIAIgBIAFgCQAEgCACgDQACgEAAgEIgBgHIgFgFQgCgCgCAAIgGgBQgHAAgEACIgIAEIgGgKIAFgCIAFgDIAHgCIAIgBQAHAAAFACQAGACAEAEQADADACAFIACAKQAAAIgEAFQgFAFgFADIAGADQAEABACAEIAFAHQABAEABAFQAAAHgCAFQgDAGgEADQgFAEgHADQgGACgJAAIgHgBg");
	this.shape_233.setTransform(289.25,219.875);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#333333").s().p("AgJAlQgHgRAAgUQAAgTAHgRQAGgSAKgNIAKAGQgKANgGAQQgEAPAAARQAAASAEAPQAGAPAKANIgKAHQgKgOgGgRg");
	this.shape_234.setTransform(283.675,220.575);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#333333").s().p("AgRAkIgIgCIADgLIAHACQAFACAIAAQAHAAAEgCQAEgCAAgFQAAgEgEgEIgMgFIgIgEIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADAEIAFACIAGADIAJADIAHAEQADACABAEQACADAAAGQAAAKgIAFQgHAFgNAAQgKAAgFgCg");
	this.shape_235.setTransform(274.525,221.1);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_236.setTransform(267.275,221.125);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#333333").s().p("AgUAlIAAhEIAMgEQAHgBAHAAIAEAAIAEABIAEAAIADABIgCALIgFgBIgKgBIgGABIgFABIAAA8g");
	this.shape_237.setTransform(260.925,221.025);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#333333").s().p("AgGAzIAAhIIANAAIAABIgAgFgkQgCgCgBgEQABgEACgDQACgBADAAQAEAAACABQACADABAEQgBAEgCACQgCADgEAAQgDAAgCgDg");
	this.shape_238.setTransform(256,219.6);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#333333").s().p("AgKAjQgHgCgFgGQgEgFgCgGQgDgIAAgIQAAgJADgHQADgHAFgFQAEgEAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAFAMAAIALgBIAHgCIACALIgIADIgOABQgIAAgHgDgAgFgZIgGAFQgDADgBAEIgCAHIAjAAQABgJgFgFQgFgGgIAAQgDAAgDABg");
	this.shape_239.setTransform(250.275,221.1);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#333333").s().p("AgJA0QgHgCgFgFQgEgFgDgHQgDgHAAgJQAAgIADgIQACgGADgFQAFgEAGgDQAGgDAHAAQAGAAAFABIAHAEIAAglIANgCIAABqIgMACIgQABQgHAAgGgDgAgGgHQgEADgDADQgCADgBAFQgCAEABAGQAAANAGAHQAHAGAJAAIAIAAIAGgBIAAgtQgCgCgFgCQgEgCgGAAQgEAAgEACg");
	this.shape_240.setTransform(242.05,219.4);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#333333").s().p("AgKAjQgHgCgFgGQgEgFgCgGQgDgIAAgIQAAgJADgHQADgHAFgFQAEgEAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAFAMAAIALgBIAHgCIACALIgIADIgOABQgIAAgHgDgAgFgZIgGAFQgDADgBAEIgCAHIAjAAQABgJgFgFQgFgGgIAAQgDAAgDABg");
	this.shape_241.setTransform(234.175,221.1);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#333333").s().p("AgfAyIAAhfIAMgDQAGgBAKAAQAHAAAHADQAGACAFAFQAFAFACAHQADAHAAAJQAAAIgCAGQgCAHgEAFQgFAFgGADQgGADgHAAQgGAAgFgCIgHgDIAAAdgAgSgkIAAAtIAHAEQAEABAGAAQAEAAAEgCQAEgCADgDQACgEABgEIABgKQAAgNgGgHQgGgGgKAAIgJAAIgFABg");
	this.shape_242.setTransform(226.375,222.325);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#333333").s().p("AgUAlIAAhEIAMgEQAHgBAHAAIAEAAIAEABIAEAAIADABIgCALIgFgBIgKgBIgGABIgFABIAAA8g");
	this.shape_243.setTransform(219.825,221.025);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_244.setTransform(212.525,221.125);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#333333").s().p("AgHAvQgFgCgDgEQgDgEgBgGIgCgMIAAhAIAOgDIAAAXIAaAAIAAALIgaAAIAAAhIAAAJIACAFQACACADABIAFABQAFAAAEgCIAFgBIACAKIgGADQgFABgHABQgFAAgFgCg");
	this.shape_245.setTransform(205.95,220.05);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#333333").s().p("AgLAlIgJgEQgDgDgCgFQgDgEAAgGQAAgGADgEQACgFAEgBIAKgFIALgBIAEAAIAEABIADAAIACABIAAgEIAAgGIgCgFIgGgFQgDgBgEAAIgLABIgIACIgBgLIAIgCIAMgBQAIAAAFACQAGACADAEQAEADABAGQACAFAAAGIAAAsIgGABIgGABIgJAAIgIABIgLgBgAgCADIgGACIgEADQgCADAAAEQgBAGAFAEQAEACAIAAIAIAAIAFgBIAAgVIgEgBIgHgCIgGABg");
	this.shape_246.setTransform(198.9,221.1);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#333333").s().p("AgUAlIAAhEIAMgEQAHgBAHAAIAEAAIAEABIAEAAIADABIgCALIgFgBIgKgBIgGABIgFABIAAA8g");
	this.shape_247.setTransform(193.225,221.025);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#333333").s().p("AgHAvQgFgCgEgEQgCgEgBgGIgBgMIAAhAIANgDIAAAXIAaAAIAAALIgaAAIAAAhIAAAJIACAFQACACADABIAFABQAFAAAFgCIAEgBIACAKIgGADQgFABgHABQgGAAgEgCg");
	this.shape_248.setTransform(187.6,220.05);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#333333").s().p("AARAlIAAglIgBgLQgCgFgCgDQgCgDgDgBQgEgCgDAAIgFABIgEAAIgEAAIgDABIAAA8IgMAAIAAhFIALgDQAIgBAJAAQAJAAAFACQAGADAEAEQACAFACAGQACAGgBAHIAAAog");
	this.shape_249.setTransform(180.4,221.025);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_250.setTransform(172.225,221.125);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#333333").s().p("AAIAmQgIAAgGgDQgHgCgFgGQgEgFgCgGQgDgIAAgIQAAgHADgHQACgHAFgGQAEgFAHgDQAGgCAHAAIAKAAIAJADIgDAMIgGgDIgIgBQgKABgGAGQgGAHAAAMQAAAGABAFQACAFADADQACAEAFACQADACAHgBIAJgBIAHgBIACALIgEABIgEABIgGABIgGAAg");
	this.shape_251.setTransform(165.075,221.1);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#333333").s().p("AgMAyIgIgBIgGgCIgEgBIADgMIAIADQAFACAJAAQALAAAGgFQAFgFAAgIQAAgFgDgEQgCgDgDgDIgJgDIgJgBIgDAAIAAgJIAEAAIAIgBIAGgCQADgCACgDQACgEAAgEIgBgHIgFgFQgCgCgCAAIgGgBQgHAAgEACIgIAEIgGgKIAFgCIAFgDIAHgCIAIgBQAHAAAFACQAGACAEAEQADADACAFIACAKQAAAIgEAFQgFAFgFADIAGADQAEABACAEIAFAHQABAEABAFQAAAHgCAFQgDAGgEADQgFAEgHADQgGACgJAAIgHgBg");
	this.shape_252.setTransform(154.25,219.875);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#333333").s().p("AgJAQQAEgHABgIIABgMIAAgEIAAgDIANAAIAAACIAAACQAAAJgDAIQgCAIgFAIg");
	this.shape_253.setTransform(145.275,225.075);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#333333").s().p("AgQA9QAKgNAGgPQAEgPAAgSQAAgRgEgPQgGgQgKgNIAKgGQAJANAHASQAHARAAATQAAAUgHARQgHARgJAOg");
	this.shape_254.setTransform(140.975,220.575);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#333333").s().p("AgRAkIgIgCIADgLIAHACQAFACAIAAQAHAAAEgCQAEgCAAgFQAAgEgEgEIgMgFIgIgEIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADAEIAFACIAGADIAJADIAHAEQADACABAEQACADAAAGQAAAKgIAFQgHAFgNAAQgKAAgFgCg");
	this.shape_255.setTransform(136.075,221.1);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#333333").s().p("AgKAjQgHgCgFgGQgEgFgCgGQgDgIAAgIQAAgJADgHQADgHAFgFQAEgEAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAFAMAAIALgBIAHgCIACALIgIADIgOABQgIAAgHgDgAgFgZIgGAFQgDADgBAEIgCAHIAjAAQABgJgFgFQgFgGgIAAQgDAAgDABg");
	this.shape_256.setTransform(128.975,221.1);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#333333").s().p("AgNAxQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgFQgGAHAAAMQAAANAGAGQAGAIAIAAQAKAAAFgIQAGgGAAgNQAAgMgGgHQgFgHgKAAQgIAAgGAHgAgWgmIACgEIADgEIAEgEIAGAAIAFAAIAEACIAEACIADABQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAgBIADgEIAHADIgCAEIgDAEIgEADQgCACgDAAIgGgCIgDgCIgEgBIgEgBQAAAAgBAAQgBAAAAAAQgBABAAAAQgBABAAAAIgDAFg");
	this.shape_257.setTransform(120.975,219.7);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#333333").s().p("AgEAyIgFgCIACgHIADABIAEAAQAEAAAAgDIgBgDIgDgCIgBAAIABgFIABgEQgGgBgFgDQgGgDgDgFQgEgFgCgHQgCgEAAgIQAAgIADgIQACgGAFgGQAEgFAHgDQAGgDAHAAIAKABIAJADIgDALIgGgCIgIgBQgKAAgGAGQgGAIAAANQAAAGABAFQACADADAEQACAEAFABQADACAHAAIAJgBIAHgCIACALIgDABIgFACIgFAAIgFABIgCADQAEACACADQACACAAAFIgBADQAAAAAAAAQAAABgBAAQAAABAAAAQgBABAAAAIgFADIgHABIgFgBg");
	this.shape_258.setTransform(113.825,222.35);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#333333").s().p("AgGAzIAAhIIANAAIAABIgAgFgkQgCgCgBgEQABgEACgDQACgBADAAQADAAADABQADADgBAEQABAEgDACQgDADgDAAQgDAAgCgDg");
	this.shape_259.setTransform(108.6,219.6);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#333333").s().p("AgRAkIgIgCIADgLIAHACQAFACAIAAQAHAAAEgCQAEgCAAgFQAAgEgEgEIgMgFIgIgEIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADAEIAFACIAGADIAJADIAHAEQADACABAEQACADAAAGQAAAKgIAFQgHAFgNAAQgKAAgFgCg");
	this.shape_260.setTransform(103.725,221.1);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_261.setTransform(96.475,221.125);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#333333").s().p("AgfAyIAAhfIAMgDQAGgBAKAAQAHAAAHADQAGACAFAFQAFAFACAHQADAHAAAJQAAAIgCAGQgCAHgEAFQgFAFgGADQgGADgHAAQgGAAgFgCIgHgDIAAAdgAgSgkIAAAtIAHAEQAEABAGAAQAEAAAEgCQAEgCADgDQACgEABgEIABgKQAAgNgGgHQgGgGgKAAIgJAAIgFABg");
	this.shape_262.setTransform(88.425,222.325);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#333333").s().p("AAKAwIAAgYIgrAAIAAgJIAIgOIAKgRIANgRIAMgPIAMAAIAAA9IAMAAIAAALIgMAAIAAAYgAABgWIgHAMIgIALIgGAMIAeAAIAAgtIgJAKg");
	this.shape_263.setTransform(76.875,219.9);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#333333").s().p("AgJAlQgHgRAAgUQAAgTAHgRQAGgSAKgNIAKAGQgKANgGAQQgEAPAAARQAAASAEAPQAGAPAKANIgKAHQgKgOgGgRg");
	this.shape_264.setTransform(71.175,220.575);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#333333").s().p("AgKAjQgHgCgFgGQgEgFgCgGQgDgIAAgIQAAgJADgHQADgHAFgFQAEgEAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAFAMAAIALgBIAHgCIACALIgIADIgOABQgIAAgHgDgAgFgZIgGAFQgDADgBAEIgCAHIAjAAQABgJgFgFQgFgGgIAAQgDAAgDABg");
	this.shape_265.setTransform(61.175,221.1);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#333333").s().p("AgNAjQgFgDgEgEQgDgFgCgGQgBgGAAgHIAAgoIANAAIAAAlQAAANAEAGQAEAGAJAAIAEAAIAEgBIAEAAIACgBIAAg8IANAAIAABGIgLACIgRABQgIAAgGgCg");
	this.shape_266.setTransform(53.225,221.175);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#333333").s().p("AATAyIAAgdIgHADQgFACgGAAQgHAAgGgDQgGgDgEgFQgFgFgCgHQgCgGAAgIQAAgJACgHQADgHAFgFQAFgFAGgCQAHgDAIAAQAJAAAHABIALADIAABfgAgLgfQgHAHAAANQAAAGACAEQABAEADAEQACADAEACQAEACAFAAQAFAAAFgBIAGgEIAAgtIgFgBIgJAAQgJAAgHAGg");
	this.shape_267.setTransform(44.9,222.325);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#333333").s().p("AAQAlIAAglIgBgLQgBgFgBgDQgDgDgDgBQgDgCgFAAIgEABIgFAAIgDAAIgCABIAAA8IgOAAIAAhFIANgDQAHgBAJAAQAIAAAGACQAGADADAEQADAFACAGQABAGABAHIAAAog");
	this.shape_268.setTransform(37,221.025);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgCgFQgCgEAAgGQAAgGACgEQADgFAEgBIAKgFIAKgBIAEAAIAEABIADAAIADABIAAgEIgBgGIgDgFIgEgFQgEgBgEAAIgLABIgHACIgCgLIAIgCIAMgBQAIAAAFACQAGACADAEQADADACAGQABAFABAGIAAAsIgGABIgGABIgIAAIgJABIgKgBgAgCADIgGACIgFADQgCADAAAEQABAGAEAEQAEACAHAAIAJAAIAGgBIAAgVIgFgBIgIgCIgFABg");
	this.shape_269.setTransform(29.1,221.1);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#333333").s().p("AgIAvQgEgCgEgEQgDgEgBgGIAAgMIAAhAIAMgDIAAAXIAbAAIAAALIgbAAIAAAhIABAJIADAFQABACADABIAFABQAGAAAEgCIAEgBIADAKIgHADQgFABgGABQgGAAgGgCg");
	this.shape_270.setTransform(23.2,220.05);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#333333").s().p("AgQAGIAAgLIAhAAIAAALg");
	this.shape_271.setTransform(612.825,202.85);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#333333").s().p("AgRAlIgIgDIADgLIAHACQAFACAIAAQAHAAAEgCQAEgCAAgEQAAgGgEgCIgMgHIgIgDIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADADIAFADIAGADIAJADIAHAEQADADABADQACAEAAAFQAAAKgIAFQgHAFgNAAQgKAAgFgBg");
	this.shape_272.setTransform(607.625,203.4);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_273.setTransform(600.375,203.425);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#333333").s().p("AgGA0IAAhJIANAAIAABJgAgFgkQgCgCgBgEQABgEACgDQACgCADAAQAEAAACACQACADAAAEQAAAEgCACQgCACgEAAQgDAAgCgCg");
	this.shape_274.setTransform(594.5,201.9);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#333333").s().p("AgFAlIgOgiQgIgSgFgVIAOAAIAEAPIAFAQIAFANIAEAOIAFgOIAFgNIAFgQIAEgPIAOAAQgGAVgHASIgOAig");
	this.shape_275.setTransform(589.275,203.4);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgDgFQgBgEAAgGQgBgGADgFQADgEAEgCIAKgDIAKgBIAEAAIAEAAIAEABIACAAIAAgEIgBgGIgDgGIgEgDQgEgCgEAAIgLABIgHACIgCgLIAJgCIALgBQAIAAAGACQAFACADADQADAEACAFQABAFAAAGIAAAtIgEABIgHABIgIABIgJAAIgKgBgAgCADIgGACIgEADQgDADAAADQAAAIAFACQAFADAGAAIAIAAIAHgBIAAgWIgFAAIgIgBIgFAAg");
	this.shape_276.setTransform(581.9,203.4);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#333333").s().p("AAQAlIAAglIgBgLQAAgFgCgDQgDgDgDgBQgEgCgEAAIgEABIgFAAIgDAAIgDABIAAA8IgNAAIAAhFIAMgDQAIgBAJAAQAJAAAFACQAGADAEAEQADAFABAGQACAGAAAHIAAAog");
	this.shape_277.setTransform(574.45,203.325);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#333333").s().p("AgbAyIgBgCIAAgBQAAgHADgGQACgFADgFIAIgKIAJgJIAFgFIAGgHIAEgHQABgDAAgEQAAgEgBgDQgBgDgDgCQgCgCgDgBIgFgBIgIABIgGADIgEADIgDACIgGgJIADgDIAGgEIAIgDQAFgCAFAAQAOAAAIAIQAHAHAAAMQAAAGgCAEIgFAJIgIAIIgIAJIgFAGIgGAGIgEAHQgCADAAADIArAAIAAALg");
	this.shape_278.setTransform(562.275,202.075);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#333333").s().p("AgJAQQAEgHABgIIABgMIAAgEIAAgDIANAAIAAACIAAACQAAAJgDAIQgCAIgFAIg");
	this.shape_279.setTransform(552.475,207.375);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#333333").s().p("AgQA9QAKgNAGgPQAEgPAAgSQAAgRgEgPQgGgQgKgNIAKgGQAJANAHASQAHARAAATQAAAUgHARQgHARgJAOg");
	this.shape_280.setTransform(548.175,202.875);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#333333").s().p("AgRAlIgIgDIADgLIAHACQAFACAIAAQAHAAAEgCQAEgCAAgEQAAgGgEgCIgMgHIgIgDIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADADIAFADIAGADIAJADIAHAEQADADABADQACAEAAAFQAAAKgIAFQgHAFgNAAQgKAAgFgBg");
	this.shape_281.setTransform(543.275,203.4);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#333333").s().p("AgKAjQgHgDgFgEQgEgFgCgIQgDgGAAgIQAAgKADgGQADgIAFgFQAEgFAGgCQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAGAMgBIALgBIAHgCIACALIgIADIgOABQgIAAgHgDgAgFgYIgGAEQgDADgBAEIgCAHIAjAAQABgIgFgHQgFgFgIAAQgDAAgDACg");
	this.shape_282.setTransform(536.175,203.4);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#333333").s().p("AgNAxQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgJACgFQADgIAEgFQAFgEAGgDQAHgDAGAAQAHAAAHADQAGADAFAEQAEAFADAIQACAFAAAJQAAAJgCAHQgDAHgEAFQgFAFgGACQgHAEgHAAQgGAAgHgEgAgOgFQgGAHAAAMQAAAMAGAIQAGAHAIAAQAKAAAFgHQAGgIAAgMQAAgMgGgHQgFgGgKAAQgIAAgGAGgAgWgmIACgEIADgEIAEgEIAGgBIAFABIAEADIAEABIADABQAAAAABAAQABAAAAgBQABAAAAAAQABgBAAAAIADgFIAHAEIgCAEIgDAEIgEADQgCABgDABIgGgBIgDgCIgEgCIgEgBQAAAAgBAAQgBAAAAABQgBAAAAAAQgBABAAAAIgDAEg");
	this.shape_283.setTransform(528.175,202);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#333333").s().p("AgEAyIgFgBIACgIIADABIAEAAQAEAAAAgDIgBgDIgDgCIgBgBIABgDIABgFQgGgBgFgDQgGgDgDgFQgEgFgCgGQgCgGAAgHQAAgIADgIQACgGAFgGQAEgFAHgDQAGgDAHABIAKAAIAJADIgDALIgGgDIgIAAQgKAAgGAHQgGAGAAAOQAAAGABAEQACAEADAEQACAEAFACQADABAHAAIAJgBIAHgCIACALIgDABIgFABIgFABIgFAAIgCAEQAEACACACQACADAAAFIgBACQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAIgFADIgHAAIgFAAg");
	this.shape_284.setTransform(521.025,204.65);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#333333").s().p("AgFA0IAAhJIALAAIAABJgAgFgkQgCgCAAgEQAAgEACgDQADgCACAAQADAAADACQADADAAAEQAAAEgDACQgDACgDAAQgCAAgDgCg");
	this.shape_285.setTransform(515.8,201.9);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#333333").s().p("AgRAlIgIgDIADgLIAHACQAFACAIAAQAHAAAEgCQAEgCAAgEQAAgGgEgCIgMgHIgIgDIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADADIAFADIAGADIAJADIAHAEQADADABADQACAEAAAFQAAAKgIAFQgHAFgNAAQgKAAgFgBg");
	this.shape_286.setTransform(510.925,203.4);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_287.setTransform(503.675,203.425);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#333333").s().p("AgfAyIAAhfIAMgDQAGgBAKAAQAHAAAHADQAGACAFAFQAFAFACAHQADAHAAAJQAAAIgCAGQgCAHgEAFQgFAFgGADQgGADgHAAQgGAAgFgCIgHgDIAAAdgAgSgkIAAAtIAHAEQAEABAGAAQAEAAAEgCQAEgCADgDQACgEABgEIABgKQAAgNgGgHQgGgGgKAAIgJAAIgFABg");
	this.shape_288.setTransform(495.625,204.625);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#333333").s().p("AgNAxIgGgBIgGgCIgEgCIADgLIAIADQAFACAHAAQAGAAAEgCIAHgDQADgCABgEIABgGQAAgGgBgEQgDgEgEgDQgEgCgIgCQgHAAgMgBIABgMIACgMIAAgMIABgLIAuAAIAAAKIgjAAIAAAGIgBAHIAAAIIgBAGQAUABAKAIQAKAIAAAOQAAAGgCAGQgDAGgEADQgFAEgGADQgHACgIAAIgIgBg");
	this.shape_289.setTransform(483.25,202.3);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#333333").s().p("AgJAlQgHgRAAgUQAAgTAHgRQAGgSAKgNIAKAGQgKANgGAQQgEAPAAARQAAASAEAPQAGAPAKANIgKAHQgKgOgGgRg");
	this.shape_290.setTransform(477.575,202.875);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#333333").s().p("AgRAlIgIgDIADgLIAHACQAFACAIAAQAHAAAEgCQAEgCAAgEQAAgGgEgCIgMgHIgIgDIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADADIAFADIAGADIAJADIAHAEQADADABADQACAEAAAFQAAAKgIAFQgHAFgNAAQgKAAgFgBg");
	this.shape_291.setTransform(467.625,203.4);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#333333").s().p("AgKAjQgHgDgFgEQgEgFgCgIQgDgGAAgIQAAgKADgGQADgIAFgFQAEgFAGgCQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAGAMgBIALgBIAHgCIACALIgIADIgOABQgIAAgHgDgAgFgYIgGAEQgDADgBAEIgCAHIAjAAQABgIgFgHQgFgFgIAAQgDAAgDACg");
	this.shape_292.setTransform(460.525,203.4);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#333333").s().p("AgNAxQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgJACgFQADgIAEgFQAFgEAGgDQAHgDAGAAQAHAAAHADQAGADAFAEQAEAFADAIQACAFAAAJQAAAJgCAHQgDAHgEAFQgFAFgGACQgHAEgHAAQgGAAgHgEgAgOgFQgGAHAAAMQAAAMAGAIQAGAHAIAAQAKAAAFgHQAGgIAAgMQAAgMgGgHQgFgGgKAAQgIAAgGAGgAgWgmIACgEIADgEIAEgEIAGgBIAFABIAEADIAEABIADABQAAAAABAAQABAAAAgBQABAAAAAAQABgBAAAAIADgFIAHAEIgCAEIgDAEIgEADQgCABgDABIgGgBIgDgCIgEgCIgEgBQAAAAgBAAQgBAAAAABQgBAAAAAAQgBABAAAAIgDAEg");
	this.shape_293.setTransform(452.525,202);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#333333").s().p("AgFA0IAAhJIALAAIAABJgAgFgkQgDgCAAgEQAAgEADgDQACgCADAAQADAAADACQADADgBAEQABAEgDACQgDACgDAAQgDAAgCgCg");
	this.shape_294.setTransform(446.65,201.9);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#333333").s().p("AgFAlIgOgiQgIgSgFgVIAOAAIAEAPIAFAQIAFANIAEAOIAFgOIAFgNIAFgQIAEgPIAOAAQgGAVgHASIgOAig");
	this.shape_295.setTransform(441.425,203.4);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#333333").s().p("AgLAlIgIgEQgEgDgDgFQgCgEAAgGQABgGACgFQADgEADgCIAKgDIALgBIAEAAIAEAAIAEABIACAAIAAgEIgBgGIgCgGIgGgDQgDgCgEAAIgLABIgIACIgBgLIAJgCIALgBQAIAAAGACQAFACADADQADAEACAFQABAFAAAGIAAAtIgEABIgHABIgJABIgIAAIgLgBgAgCADIgGACIgEADQgCADAAADQgBAIAFACQAFADAGAAIAIAAIAHgBIAAgWIgFAAIgHgBIgGAAg");
	this.shape_296.setTransform(434.05,203.4);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#333333").s().p("AgQAGIAAgLIAhAAIAAALg");
	this.shape_297.setTransform(428.525,202.85);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgDgFQgBgEAAgGQgBgGADgFQADgEAEgCIAJgDIALgBIAEAAIAEAAIAEABIACAAIAAgEIgBgGIgDgGIgEgDQgEgCgEAAIgLABIgHACIgCgLIAJgCIALgBQAIAAAGACQAFACADADQADAEACAFQACAFgBAGIAAAtIgEABIgHABIgJABIgIAAIgKgBgAgCADIgGACIgEADQgDADAAADQAAAIAFACQAFADAGAAIAIAAIAHgBIAAgWIgFAAIgIgBIgFAAg");
	this.shape_298.setTransform(422.6,203.4);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#333333").s().p("AgHAvQgGgDgCgDQgEgEgBgGIgBgMIAAhAIAOgDIAAAXIAaAAIAAALIgaAAIAAAhIAAAJIADAGQACABACABIAFABQAGAAADgBIAGgCIACALIgHACQgFACgGgBQgHAAgEgBg");
	this.shape_299.setTransform(416.7,202.35);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#333333").s().p("AgUAlIAAhEIAMgEQAHgBAHAAIAEAAIAEABIAEAAIADABIgCALIgFgBIgKgBIgGABIgFABIAAA8g");
	this.shape_300.setTransform(411.275,203.325);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_301.setTransform(403.975,203.425);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#333333").s().p("AgfAyIAAhfIAMgDQAGgBAKAAQAHAAAHADQAGACAFAFQAFAFACAHQADAHAAAJQAAAIgCAGQgCAHgEAFQgFAFgGADQgGADgHAAQgGAAgFgCIgHgDIAAAdgAgSgkIAAAtIAHAEQAEABAGAAQAEAAAEgCQAEgCADgDQACgEABgEIABgKQAAgNgGgHQgGgGgKAAIgJAAIgFABg");
	this.shape_302.setTransform(395.925,204.625);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#333333").s().p("AAGAxIAAhOIgEADIgEADIgGADIgGACIgEgKQAIgDAHgFQAHgFAGgGIAJAAIAABgg");
	this.shape_303.setTransform(382.875,202.2);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#333333").s().p("AgGAiQgCgDAAgDQAAgEACgDQADgCADAAQAEAAADACQACADAAAEQAAADgCADQgDAEgEAAQgDAAgDgEgAgGgVQgCgCAAgEQAAgDACgDQADgDADgBQAEABADADQACADAAADQAAAEgCACQgDADgEABQgDgBgDgDg");
	this.shape_304.setTransform(373.875,203.5);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_305.setTransform(368.025,203.425);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#333333").s().p("AgKAzIgJgEQgEgDgDgEQgBgFAAgGQgBgGADgEQADgFAEgCIAKgEIAKgBIAEAAIAEAAIAEABIACAAIAAgDIgBgGIgDgFIgEgEQgEgCgEAAIgLABIgHACIgCgLIAJgCIALgBQAIAAAGACQAFACADAEQADAEACAFQACAFgBAFIAAAuIgEAAIgHABIgJABIgIAAIgKgBgAgCARIgGACIgEAEQgDACAAAEQAAAHAFADQAFACAGAAIAIAAIAHgBIAAgVIgFgBIgIgBIgFAAgAgTgmIABgEIADgEIAFgDIAFgBIAFABIAEACIAEABIADABQABAAAAAAQABAAAAAAQABgBAAAAQABAAABgBIADgEIAHADIgCAEIgEAEIgDADQgDACgDAAIgFgBIgFgCIgDgCIgEgBQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABgBAAIgDAFg");
	this.shape_306.setTransform(360.05,201.975);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#333333").s().p("AgRAlIgIgDIADgLIAHACQAFACAIAAQAHAAAEgCQAEgCAAgEQAAgGgEgCIgMgHIgIgDIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADADIAFADIAGADIAJADIAHAEQADADABADQACAEAAAFQAAAKgIAFQgHAFgNAAQgKAAgFgBg");
	this.shape_307.setTransform(353.475,203.4);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#333333").s().p("AgRAlIgIgDIADgLIAHACQAFACAIAAQAHAAAEgCQAEgCAAgEQAAgGgEgCIgMgHIgIgDIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADADIAFADIAGADIAJADIAHAEQADADABADQACAEAAAFQAAAKgIAFQgHAFgNAAQgKAAgFgBg");
	this.shape_308.setTransform(343.175,203.4);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#333333").s().p("AgKAjQgHgDgFgEQgEgFgCgIQgDgGAAgIQAAgKADgGQADgIAFgFQAEgFAGgCQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAGAMgBIALgBIAHgCIACALIgIADIgOABQgIAAgHgDgAgFgYIgGAEQgDADgBAEIgCAHIAjAAQABgIgFgHQgFgFgIAAQgDAAgDACg");
	this.shape_309.setTransform(336.075,203.4);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#333333").s().p("AgKA0QgGgCgFgFQgFgFgDgHQgCgHAAgJQAAgJACgGQACgHAFgFQAEgFAGgCQAGgDAHAAQAGAAAFABIAHAEIAAglIANgCIAABpIgLADIgQABQgHAAgIgDgAgGgGQgEACgCADQgDACgBAFQgBAGgBAFQABANAGAHQAHAHAJgBIAJAAIAFgBIAAgtQgCgCgEgBQgFgCgFAAQgFAAgEACg");
	this.shape_310.setTransform(327.85,201.7);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgDgFQgCgEAAgGQABgGACgFQADgEADgCIAKgDIALgBIAEAAIAEAAIAEABIACAAIAAgEIgBgGIgCgGIgFgDQgEgCgEAAIgLABIgIACIgBgLIAJgCIALgBQAIAAAGACQAFACADADQADAEACAFQABAFAAAGIAAAtIgEABIgHABIgJABIgIAAIgKgBgAgCADIgGACIgEADQgCADgBADQAAAIAFACQAFADAGAAIAIAAIAHgBIAAgWIgFAAIgHgBIgGAAg");
	this.shape_311.setTransform(320.1,203.4);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#333333").s().p("AgKA0QgGgCgFgFQgFgFgDgHQgCgHAAgJQAAgJACgGQADgHAEgFQAEgFAGgCQAGgDAHAAQAGAAAFABIAHAEIAAglIANgCIAABpIgLADIgRABQgHAAgHgDgAgGgGQgEACgDADQgCACgBAFQgCAGAAAFQAAANAHAHQAGAHAKgBIAIAAIAGgBIAAgtQgCgCgEgBQgFgCgFAAQgFAAgEACg");
	this.shape_312.setTransform(312.3,201.7);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#333333").s().p("AgFA0IAAhJIALAAIAABJgAgFgkQgDgCABgEQgBgEADgDQADgCACAAQADAAADACQADADAAAEQAAAEgDACQgDACgDAAQgCAAgDgCg");
	this.shape_313.setTransform(306.65,201.9);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#333333").s().p("AARAlIAAglIgBgLQgCgFgCgDQgCgDgDgBQgDgCgEAAIgFABIgEAAIgEAAIgCABIAAA8IgNAAIAAhFIAMgDQAHgBAJAAQAIAAAGACQAGADADAEQAEAFABAGQACAGgBAHIAAAog");
	this.shape_314.setTransform(300.9,203.325);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#333333").s().p("AgNAjQgFgDgEgEQgDgFgCgGQgBgGAAgHIAAgoIANAAIAAAlQAAANAEAGQAEAGAJAAIAEAAIAEgBIAEAAIACgBIAAg8IANAAIAABGIgLACIgRABQgIAAgGgCg");
	this.shape_315.setTransform(292.775,203.475);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#333333").s().p("AgRAlIgIgDIADgLIAHACQAFACAIAAQAHAAAEgCQAEgCAAgEQAAgGgEgCIgMgHIgIgDIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADADIAFADIAGADIAJADIAHAEQADADABADQACAEAAAFQAAAKgIAFQgHAFgNAAQgKAAgFgBg");
	this.shape_316.setTransform(281.625,203.4);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#333333").s().p("AAfAxIgFgNIgEgMIgrAAIgJAZIgOAAIAKgdIAKgYIAJgXIAKgUIALAAIAKAUIAJAXIAKAYIAKAdgAgIgKIgJAXIAjAAIgJgXIgJgWIgIAWg");
	this.shape_317.setTransform(273.825,202.2);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#333333").s().p("AgGAGQgCgDAAgDQAAgDACgDQADgCADAAQAEAAADACQACADAAADQAAADgCADQgDAEgEAAQgDAAgDgEg");
	this.shape_318.setTransform(263.425,206.3);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#333333").s().p("AgKAjQgHgDgFgEQgEgFgCgIQgDgGAAgIQAAgKADgGQADgIAFgFQAEgFAGgCQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAGAMgBIALgBIAHgCIACALIgIADIgOABQgIAAgHgDgAgFgYIgGAEQgDADgBAEIgCAHIAjAAQABgIgFgHQgFgFgIAAQgDAAgDACg");
	this.shape_319.setTransform(257.725,203.4);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#333333").s().p("AgHAvQgFgDgEgDQgCgEgBgGIgCgMIAAhAIAOgDIAAAXIAaAAIAAALIgaAAIAAAhIAAAJIACAGQACABADABIAFABQAFAAAEgBIAGgCIABALIgGACQgFACgHgBQgFAAgFgBg");
	this.shape_320.setTransform(251.4,202.35);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#333333").s().p("AARAlIAAglIgBgLQgCgFgCgDQgCgDgDgBQgDgCgEAAIgFABIgEAAIgEAAIgCABIAAA8IgNAAIAAhFIAMgDQAHgBAJAAQAIAAAGACQAGADADAEQAEAFABAGQACAGgBAHIAAAog");
	this.shape_321.setTransform(244.2,203.325);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#333333").s().p("AgKAjQgHgDgFgEQgEgFgCgIQgDgGAAgIQAAgKADgGQADgIAFgFQAEgFAGgCQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAGAMgBIALgBIAHgCIACALIgIADIgOABQgIAAgHgDgAgFgYIgGAEQgDADgBAEIgCAHIAjAAQABgIgFgHQgFgFgIAAQgDAAgDACg");
	this.shape_322.setTransform(236.175,203.4);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#333333").s().p("AAlAlIAAglIgBgLQgBgEgCgEQgBgDgDgBQgDgCgFAAQgGAAgEACIgGADIABAIIAAAJIAAAoIgLAAIAAglIgBgLQAAgEgDgEQgBgDgDgBQgDgCgFAAIgEABIgFAAIgDAAIgDABIAAA8IgNAAIAAhFIAMgDQAIgBAJAAQAHAAAGACQAEACADADIADgCIAEgCIAHgCIAIgBQAJAAAFACQAFADADAEQAEAFABAGIABANIAAAog");
	this.shape_323.setTransform(226.35,203.325);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#333333").s().p("AgGAxQgFgEAAgLIAAhWIAMgCIAABWIAAAGQABAAAAABQAAAAAAABQAAAAABAAQAAABAAAAIAEACIAFABIgCALQgLgBgFgFg");
	this.shape_324.setTransform(218.75,201.7);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#333333").s().p("AgLAlIgJgEQgDgDgCgFQgCgEAAgGQAAgGACgFQADgEAEgCIAKgDIAKgBIAEAAIAEAAIADABIACAAIAAgEIAAgGIgDgGIgEgDQgEgCgEAAIgLABIgHACIgCgLIAIgCIAMgBQAIAAAFACQAGACADADQADAEACAFQABAFABAGIAAAtIgGABIgGABIgIABIgJAAIgLgBgAgCADIgGACIgFADQgCADABADQAAAIAEACQAEADAIAAIAIAAIAFgBIAAgWIgEAAIgIgBIgFAAg");
	this.shape_325.setTransform(212.6,203.4);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#333333").s().p("AAIAmQgIAAgGgDQgHgDgFgEQgEgFgCgIQgDgGAAgIQAAgIADgHQACgHAFgGQAEgEAHgDQAGgDAHAAIAKAAIAJAEIgDALIgGgDIgIAAQgKgBgGAHQgGAHAAANQAAAFABAFQACAFADAEQACADAFACQADABAHAAIAJgBIAHgCIACALIgEACIgEABIgGABIgGAAg");
	this.shape_326.setTransform(206.125,203.4);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#333333").s().p("AgGA0IAAhJIAMAAIAABJgAgFgkQgDgCABgEQgBgEADgDQADgCACAAQADAAADACQADADAAAEQAAAEgDACQgDACgDAAQgCAAgDgCg");
	this.shape_327.setTransform(200.9,201.9);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#333333").s().p("AgIAvQgFgDgDgDQgCgEgBgGIgBgMIAAhAIAMgDIAAAXIAbAAIAAALIgbAAIAAAhIABAJIACAGQADABACABIAFABQAGAAAEgBIAEgCIACALIgGACQgFACgHgBQgGAAgFgBg");
	this.shape_328.setTransform(196.7,202.35);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#333333").s().p("AgUAlIAAhEIAMgEQAHgBAHAAIAEAAIAEABIAEAAIADABIgCALIgFgBIgKgBIgGABIgFABIAAA8g");
	this.shape_329.setTransform(191.275,203.325);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#333333").s().p("AgKAjQgHgDgFgEQgEgFgCgIQgDgGAAgIQAAgKADgGQADgIAFgFQAEgFAGgCQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAGAMgBIALgBIAHgCIACALIgIADIgOABQgIAAgHgDgAgFgYIgGAEQgDADgBAEIgCAHIAjAAQABgIgFgHQgFgFgIAAQgDAAgDACg");
	this.shape_330.setTransform(184.125,203.4);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#333333").s().p("AgFAlIgOgiQgIgSgFgVIAOAAIAEAPIAFAQIAFANIAEAOIAFgOIAFgNIAFgQIAEgPIAOAAQgGAVgHASIgOAig");
	this.shape_331.setTransform(176.775,203.4);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#333333").s().p("AgNAjQgFgDgEgEQgDgFgCgGQgBgGAAgHIAAgoIANAAIAAAlQAAANAEAGQAEAGAJAAIAEAAIAEgBIAEAAIACgBIAAg8IANAAIAABGIgLACIgRABQgIAAgGgCg");
	this.shape_332.setTransform(165.125,203.475);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_333.setTransform(157.025,203.425);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#333333").s().p("AgGAxQgFgEAAgLIAAhWIAMgCIAABWIAAAGQABAAAAABQAAAAAAABQAAAAABAAQAAABABAAIADACIAFABIgCALQgLgBgFgFg");
	this.shape_334.setTransform(147.3,201.7);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgCgFQgCgEAAgGQAAgGACgFQADgEAEgCIAKgDIAKgBIAEAAIAEAAIADABIADAAIAAgEIgBgGIgDgGIgEgDQgEgCgEAAIgLABIgHACIgCgLIAIgCIAMgBQAIAAAFACQAGACADADQADAEACAFQABAFAAAGIAAAtIgFABIgGABIgIABIgJAAIgKgBgAgCADIgGACIgFADQgCADAAADQABAIAEACQAEADAIAAIAIAAIAGgBIAAgWIgFAAIgIgBIgFAAg");
	this.shape_335.setTransform(141.15,203.4);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#333333").s().p("AgIAvQgEgDgEgDQgDgEgBgGIAAgMIAAhAIAMgDIAAAXIAbAAIAAALIgbAAIAAAhIABAJIADAGQABABADABIAFABQAGAAAEgBIAEgCIADALIgHACQgFACgGgBQgGAAgGgBg");
	this.shape_336.setTransform(135.25,202.35);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#333333").s().p("AAQAlIAAglIgBgLQAAgFgCgDQgCgDgEgBQgEgCgEAAIgEABIgFAAIgDAAIgDABIAAA8IgNAAIAAhFIAMgDQAIgBAJAAQAJAAAFACQAGADAEAEQADAFABAGQACAGAAAHIAAAog");
	this.shape_337.setTransform(128.05,203.325);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_338.setTransform(119.875,203.425);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#333333").s().p("AgbAlIAAgJIAJgOIAKgOIAJgNIAJgLIgjAAIAAgMIA0AAIAAALIgIAJIgKAMIgKAPIgKAOIAnAAIAAAMg");
	this.shape_339.setTransform(112.425,203.4);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#333333").s().p("AgGA0IAAhJIANAAIAABJgAgFgkQgDgCABgEQgBgEADgDQADgCACAAQAEAAACACQACADABAEQgBAEgCACQgCACgEAAQgCAAgDgCg");
	this.shape_340.setTransform(107.4,201.9);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#333333").s().p("AgUAlIAAhEIAMgEQAHgBAHAAIAEAAIAEABIAEAAIADABIgCALIgFgBIgKgBIgGABIgFABIAAA8g");
	this.shape_341.setTransform(103.425,203.325);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_342.setTransform(96.125,203.425);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#333333").s().p("AARA2IAAgmIgBgLQgCgFgCgCQgCgDgDgBQgDgCgEAAIgFABIgEAAIgEABIgCABIAAA7IgNAAIAAhpIANgCIAAAlIAIgCIAHgBQAIAAAGACQAGADADAEQAEAFABAFQACAGgBAHIAAApg");
	this.shape_343.setTransform(88.05,201.625);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#333333").s().p("AgRAlIgIgDIADgLIAHACQAFACAIAAQAHAAAEgCQAEgCAAgEQAAgGgEgCIgMgHIgIgDIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADADIAFADIAGADIAJADIAHAEQADADABADQACAEAAAFQAAAKgIAFQgHAFgNAAQgKAAgFgBg");
	this.shape_344.setTransform(76.825,203.4);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#333333").s().p("AgLAlIgJgEQgDgDgCgFQgCgEgBgGQAAgGADgFQACgEAEgCIALgDIAKgBIAEAAIAEAAIADABIACAAIAAgEIAAgGIgDgGIgFgDQgDgCgEAAIgLABIgIACIgBgLIAIgCIAMgBQAIAAAFACQAGACADADQAEAEABAFQABAFABAGIAAAtIgGABIgGABIgIABIgJAAIgLgBgAgCADIgGACIgFADQgBADAAADQAAAIAEACQAEADAIAAIAIAAIAFgBIAAgWIgEAAIgIgBIgFAAg");
	this.shape_345.setTransform(69.85,203.4);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#333333").s().p("AgIAvQgFgDgDgDQgCgEgBgGIgBgMIAAhAIAMgDIAAAXIAbAAIAAALIgbAAIAAAhIABAJIACAGQADABACABIAFABQAGAAAEgBIAEgCIACALIgGACQgFACgHgBQgGAAgFgBg");
	this.shape_346.setTransform(63.95,202.35);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#333333").s().p("AgRAlIgIgDIADgLIAHACQAFACAIAAQAHAAAEgCQAEgCAAgEQAAgGgEgCIgMgHIgIgDIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADADIAFADIAGADIAJADIAHAEQADADABADQACAEAAAFQAAAKgIAFQgHAFgNAAQgKAAgFgBg");
	this.shape_347.setTransform(57.625,203.4);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_348.setTransform(50.375,203.425);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#333333").s().p("AgfAyIAAhfIAMgDQAGgBAKAAQAHAAAHADQAGACAFAFQAFAFACAHQADAHAAAJQAAAIgCAGQgCAHgEAFQgFAFgGADQgGADgHAAQgGAAgFgCIgHgDIAAAdgAgSgkIAAAtIAHAEQAEABAGAAQAEAAAEgCQAEgCADgDQACgEABgEIABgKQAAgNgGgHQgGgGgKAAIgJAAIgFABg");
	this.shape_349.setTransform(42.325,204.625);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#333333").s().p("AgRAlIgIgDIADgLIAHACQAFACAIAAQAHAAAEgCQAEgCAAgEQAAgGgEgCIgMgHIgIgDIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADADIAFADIAGADIAJADIAHAEQADADABADQACAEAAAFQAAAKgIAFQgHAFgNAAQgKAAgFgBg");
	this.shape_350.setTransform(34.875,203.4);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#333333").s().p("AgGA0IAAhJIANAAIAABJgAgFgkQgDgCABgEQgBgEADgDQADgCACAAQAEAAACACQACADABAEQgBAEgCACQgCACgEAAQgCAAgDgCg");
	this.shape_351.setTransform(30,201.9);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#333333").s().p("AgJA0QgHgCgFgFQgEgFgDgHQgDgHAAgJQAAgJADgGQABgHAEgFQAFgFAGgCQAGgDAHAAQAGAAAFABIAHAEIAAglIANgCIAABpIgMADIgPABQgIAAgGgDgAgGgGQgEACgCADQgDACgBAFQgBAGgBAFQABANAGAHQAHAHAJgBIAJAAIAFgBIAAgtQgCgCgFgBQgEgCgGAAQgEAAgEACg");
	this.shape_352.setTransform(23.9,201.7);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#333333").s().p("AgUAlIAAhEIAMgEQAHgBAHAAIAEAAIAEABIAEAAIADABIgCALIgFgBIgKgBIgGABIgFABIAAA8g");
	this.shape_353.setTransform(612.325,185.625);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#333333").s().p("AgKAkQgHgDgFgFQgEgFgCgHQgDgIAAgHQAAgJADgHQADgIAFgEQAEgFAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAACIgxAAQABAMAGAGQAFAFAMABIALgBIAHgDIACALIgIADIgOABQgIAAgHgCgAgFgZIgGAFQgDADgBADIgCAIIAjAAQABgIgFgHQgFgFgIAAQgDAAgDABg");
	this.shape_354.setTransform(605.175,185.7);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#333333").s().p("AgRAlIgIgDIADgLIAHADQAFABAIAAQAHAAAEgCQAEgCAAgEQAAgFgEgDIgMgHIgIgDIgGgDQgDgCgCgEQgCgDAAgFQAAgKAIgGQAHgFALAAIAGABIAGAAIAFABIADABIgDALIgGgCIgLgBQgEAAgEACQgEACAAAFIAAAEIADAEIAFACIAGACIAJAFIAHADQADADABADQACAEAAAFQAAAKgIAFQgHAFgNAAQgKAAgFgBg");
	this.shape_355.setTransform(598.175,185.7);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#333333").s().p("AAkAlIAAglIAAgLQgBgEgBgEQgCgDgDgBQgDgCgFAAQgHAAgEACIgGADIACAIIABAJIAAAoIgNAAIAAglIAAgLQAAgEgCgEQgCgDgDgBQgDgCgFAAIgEABIgEAAIgEAAIgCABIAAA8IgOAAIAAhFIANgDQAHgBAKAAQAHAAAEACQAFACADADIACgCIAGgCIAHgCIAHgBQAJAAAFACQAGADADAEQACAFABAGIABANIAAAog");
	this.shape_356.setTransform(582.7,185.625);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#333333").s().p("AgKAkQgHgDgFgFQgEgFgCgHQgDgIAAgHQAAgJADgHQADgIAFgEQAEgFAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAACIgxAAQABAMAGAGQAFAFAMABIALgBIAHgDIACALIgIADIgOABQgIAAgHgCgAgFgZIgGAFQgDADgBADIgCAIIAjAAQABgIgFgHQgFgFgIAAQgDAAgDABg");
	this.shape_357.setTransform(572.675,185.7);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#333333").s().p("AgFAlIgOgiQgIgSgFgUIAOAAIAEAOIAFAPIAFAPIAEAMIAFgMIAFgPIAFgPIAEgOIAOAAQgGAUgHASIgOAig");
	this.shape_358.setTransform(565.325,185.7);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#333333").s().p("AgKAkQgHgDgFgFQgEgFgCgHQgDgIAAgHQAAgJADgHQADgIAFgEQAEgFAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAACIgxAAQABAMAGAGQAFAFAMABIALgBIAHgDIACALIgIADIgOABQgIAAgHgCgAgFgZIgGAFQgDADgBADIgCAIIAjAAQABgIgFgHQgFgFgIAAQgDAAgDABg");
	this.shape_359.setTransform(557.825,185.7);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#333333").s().p("AgKA1QgGgDgFgFQgFgFgCgHQgDgHAAgJQAAgIADgIQABgFAFgFQAEgFAGgDQAGgDAHAAQAGAAAFACIAHADIAAglIANgCIAABqIgMACIgPABQgIAAgHgCgAgGgHQgEACgCAEQgDACgBAGQgBAFgBAFQABANAGAHQAGAGAKABIAJgBIAFgBIAAgtQgCgCgEgCQgFgBgGAAQgEAAgEABg");
	this.shape_360.setTransform(549.6,184);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#333333").s().p("AgKAkQgHgDgFgFQgEgFgCgHQgDgIAAgHQAAgJADgHQADgIAFgEQAEgFAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAACIgxAAQABAMAGAGQAFAFAMABIALgBIAHgDIACALIgIADIgOABQgIAAgHgCgAgFgZIgGAFQgDADgBADIgCAIIAjAAQABgIgFgHQgFgFgIAAQgDAAgDABg");
	this.shape_361.setTransform(535.325,185.7);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#333333").s().p("AgNAjQgFgDgEgEQgDgFgCgGQgBgGAAgHIAAgoIANAAIAAAlQAAANAEAGQAEAGAJAAIAEAAIAEgBIAEAAIACgBIAAg8IANAAIAABGIgLACIgRABQgIAAgGgCg");
	this.shape_362.setTransform(527.375,185.775);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#333333").s().p("AATAyIAAgdIgHADQgFACgGAAQgHAAgGgDQgGgDgFgFQgDgFgDgHQgCgGAAgIQAAgJACgHQADgHAFgFQAFgFAHgCQAHgDAGAAQAKAAAGABIAMADIAABfgAgLgfQgHAHABANQAAAGABAEQABAEACAEQADADAEACQAEACAEAAQAGAAAEgBIAHgEIAAgtIgFgBIgJAAQgKAAgGAGg");
	this.shape_363.setTransform(519.05,186.925);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#333333").s().p("AgJAQQAEgHABgIIABgMIAAgEIAAgDIANAAIAAACIAAACQAAAJgDAIQgCAIgFAIg");
	this.shape_364.setTransform(506.825,189.675);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_365.setTransform(501.175,185.725);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#333333").s().p("AgJA1QgHgDgFgFQgEgFgDgHQgDgHAAgJQAAgIADgIQACgFADgFQAFgFAGgDQAGgDAHAAQAGAAAFACIAHADIAAglIANgCIAABqIgMACIgQABQgHAAgGgCgAgGgHQgEACgDAEQgCACgBAGQgCAFABAFQAAANAGAHQAHAGAJABIAIgBIAGgBIAAgtQgCgCgFgCQgEgBgGAAQgEAAgEABg");
	this.shape_366.setTransform(492.7,184);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#333333").s().p("AgUAlIAAhEIAMgEQAHgBAHAAIAEAAIAEABIAEAAIADABIgCALIgFgBIgKgBIgGABIgFABIAAA8g");
	this.shape_367.setTransform(486.575,185.625);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#333333").s().p("AgKAkQgHgDgFgFQgEgFgCgHQgDgIAAgHQAAgJADgHQADgIAFgEQAEgFAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAACIgxAAQABAMAGAGQAFAFAMABIALgBIAHgDIACALIgIADIgOABQgIAAgHgCgAgFgZIgGAFQgDADgBADIgCAIIAjAAQABgIgFgHQgFgFgIAAQgDAAgDABg");
	this.shape_368.setTransform(479.425,185.7);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#333333").s().p("AgNAjQgFgDgEgEQgDgFgCgGQgBgGAAgHIAAgoIANAAIAAAlQAAANAEAGQAEAGAJAAIAEAAIAEgBIAEAAIACgBIAAg8IANAAIAABGIgLACIgRABQgIAAgGgCg");
	this.shape_369.setTransform(471.475,185.775);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#333333").s().p("AATAyIAAgdIgHADQgFACgGAAQgHAAgGgDQgGgDgFgFQgEgFgCgHQgCgGAAgIQAAgJACgHQAEgHAEgFQAFgFAGgCQAIgDAGAAQAKAAAHABIALADIAABfgAgLgfQgHAHABANQAAAGABAEQABAEACAEQADADAEACQAEACAFAAQAFAAAEgBIAHgEIAAgtIgFgBIgJAAQgKAAgGAGg");
	this.shape_370.setTransform(463.15,186.925);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#333333").s().p("AgRAlIgIgDIADgLIAHADQAFABAIAAQAHAAAEgCQAEgCAAgEQAAgFgEgDIgMgHIgIgDIgGgDQgDgCgCgEQgCgDAAgFQAAgKAIgGQAHgFALAAIAGABIAGAAIAFABIADABIgDALIgGgCIgLgBQgEAAgEACQgEACAAAFIAAAEIADAEIAFACIAGACIAJAFIAHADQADADABADQACAEAAAFQAAAKgIAFQgHAFgNAAQgKAAgFgBg");
	this.shape_371.setTransform(456.125,185.7);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#333333").s().p("AgKAkQgHgDgFgFQgEgFgCgHQgDgIAAgHQAAgJADgHQADgIAFgEQAEgFAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAACIgxAAQABAMAGAGQAFAFAMABIALgBIAHgDIACALIgIADIgOABQgIAAgHgCgAgFgZIgGAFQgDADgBADIgCAIIAjAAQABgIgFgHQgFgFgIAAQgDAAgDABg");
	this.shape_372.setTransform(449.025,185.7);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_373.setTransform(434.625,185.725);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#333333").s().p("AgfAyIAAhfIAMgDQAGgBAKAAQAHAAAHADQAGACAFAFQAFAFACAHQADAHAAAJQAAAIgCAGQgCAHgEAFQgFAFgGADQgGADgHAAQgGAAgFgCIgHgDIAAAdgAgSgkIAAAtIAHAEQAEABAGAAQAEAAAEgCQAEgCADgDQACgEABgEIABgKQAAgNgGgHQgGgGgKAAIgJAAIgFABg");
	this.shape_374.setTransform(426.575,186.925);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#333333").s().p("AAkAlIAAglIAAgLQAAgEgCgEQgCgDgDgBQgDgCgFAAQgGAAgFACIgFADIABAIIABAJIAAAoIgNAAIAAglIAAgLQAAgEgCgEQgCgDgDgBQgDgCgFAAIgEABIgEAAIgEAAIgDABIAAA8IgMAAIAAhFIAMgDQAHgBAKAAQAGAAAFACQAFACADADIACgCIAGgCIAHgCIAIgBQAIAAAFACQAGADACAEQADAFABAGIACANIAAAog");
	this.shape_375.setTransform(416.3,185.625);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgDgEQgBgFAAgGQgBgGADgFQADgEAEgBIAJgFIALgBIAEAAIAEABIAEAAIACABIAAgDIgBgHIgDgGIgEgEQgEgBgEAAIgLABIgHACIgCgLIAJgCIALgBQAIAAAGACQAFACADADQADAFACAEQACAGgBAGIAAAtIgEAAIgHABIgIAAIgJABIgKgBgAgCADIgGACIgEAEQgDACAAADQAAAHAFAEQAFACAGAAIAIAAIAHgBIAAgWIgFgBIgIgBIgFABg");
	this.shape_376.setTransform(406.4,185.7);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#333333").s().p("AAIAmQgIAAgGgCQgHgDgFgFQgEgFgCgHQgDgIAAgHQAAgIADgHQACgHAFgFQAEgGAHgCQAGgDAHAAIAKABIAJADIgDAKIgGgCIgIAAQgKAAgGAGQgGAHAAANQAAAFABAFQACAFADADQACAEAFACQADABAHABIAJgBIAHgDIACAMIgEABIgEABIgGABIgGAAg");
	this.shape_377.setTransform(399.925,185.7);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_378.setTransform(385.925,185.725);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#333333").s().p("AAQAlIAAglIAAgLQgBgFgCgDQgDgDgDgBQgEgCgEAAIgEABIgFAAIgDAAIgDABIAAA8IgMAAIAAhFIALgDQAIgBAJAAQAJAAAFACQAGADAEAEQADAFABAGQACAGAAAHIAAAog");
	this.shape_379.setTransform(377.8,185.625);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#333333").s().p("AgRAlIgIgDIADgLIAHADQAFABAIAAQAHAAAEgCQAEgCAAgEQAAgFgEgDIgMgHIgIgDIgGgDQgDgCgCgEQgCgDAAgFQAAgKAIgGQAHgFALAAIAGABIAGAAIAFABIADABIgDALIgGgCIgLgBQgEAAgEACQgEACAAAFIAAAEIADAEIAFACIAGACIAJAFIAHADQADADABADQACAEAAAFQAAAKgIAFQgHAFgNAAQgKAAgFgBg");
	this.shape_380.setTransform(364.225,185.7);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#333333").s().p("AgKAkQgHgDgFgFQgEgFgCgHQgDgIAAgHQAAgJADgHQADgIAFgEQAEgFAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAACIgxAAQABAMAGAGQAFAFAMABIALgBIAHgDIACALIgIADIgOABQgIAAgHgCgAgFgZIgGAFQgDADgBADIgCAIIAjAAQABgIgFgHQgFgFgIAAQgDAAgDABg");
	this.shape_381.setTransform(357.125,185.7);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#333333").s().p("AgJA1QgHgDgFgFQgEgFgDgHQgDgHAAgJQAAgIADgIQABgFAFgFQAEgFAGgDQAGgDAHAAQAGAAAFACIAHADIAAglIANgCIAABqIgMACIgPABQgHAAgHgCgAgGgHQgEACgCAEQgDACgBAGQgBAFgBAFQABANAGAHQAGAGAKABIAJgBIAFgBIAAgtQgCgCgEgCQgFgBgGAAQgEAAgEABg");
	this.shape_382.setTransform(348.9,184);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgDgEQgBgFAAgGQgBgGADgFQADgEAEgBIAJgFIALgBIAEAAIAEABIAEAAIACABIAAgDIgBgHIgDgGIgEgEQgEgBgEAAIgLABIgHACIgCgLIAJgCIALgBQAIAAAGACQAFACADADQADAFACAEQACAGgBAGIAAAtIgEAAIgHABIgIAAIgJABIgKgBgAgCADIgGACIgEAEQgDACAAADQAAAHAFAEQAFACAGAAIAIAAIAHgBIAAgWIgFgBIgIgBIgFABg");
	this.shape_383.setTransform(341.15,185.7);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#333333").s().p("AgKA1QgGgDgFgFQgFgFgDgHQgCgHAAgJQAAgIACgIQACgFAFgFQAEgFAGgDQAGgDAHAAQAGAAAFACIAHADIAAglIANgCIAABqIgLACIgQABQgIAAgHgCgAgGgHQgEACgCAEQgDACgBAGQgCAFAAAFQAAANAHAHQAHAGAJABIAJgBIAFgBIAAgtQgCgCgEgCQgFgBgFAAQgFAAgEABg");
	this.shape_384.setTransform(333.35,184);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#333333").s().p("AgFA0IAAhIIALAAIAABIgAgFgkQgCgCAAgEQAAgEACgCQADgCACgBQADABADACQADACAAAEQAAAEgDACQgDACgDAAQgCAAgDgCg");
	this.shape_385.setTransform(327.7,184.2);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#333333").s().p("AARAlIAAglIgCgLQgBgFgCgDQgCgDgDgBQgDgCgEAAIgFABIgEAAIgEAAIgCABIAAA8IgOAAIAAhFIANgDQAHgBAJAAQAIAAAGACQAGADADAEQAEAFABAGQABAGAAAHIAAAog");
	this.shape_386.setTransform(321.95,185.625);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#333333").s().p("AgNAjQgFgDgEgEQgDgFgCgGQgBgGAAgHIAAgoIANAAIAAAlQAAANAEAGQAEAGAJAAIAEAAIAEgBIAEAAIACgBIAAg8IANAAIAABGIgLACIgRABQgIAAgGgCg");
	this.shape_387.setTransform(313.825,185.775);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#333333").s().p("AgRAlIgIgDIADgLIAHADQAFABAIAAQAHAAAEgCQAEgCAAgEQAAgFgEgDIgMgHIgIgDIgGgDQgDgCgCgEQgCgDAAgFQAAgKAIgGQAHgFALAAIAGABIAGAAIAFABIADABIgDALIgGgCIgLgBQgEAAgEACQgEACAAAFIAAAEIADAEIAFACIAGACIAJAFIAHADQADADABADQACAEAAAFQAAAKgIAFQgHAFgNAAQgKAAgFgBg");
	this.shape_388.setTransform(300.325,185.7);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgDgEQgBgFAAgGQgBgGADgFQACgEAFgBIAKgFIAKgBIAEAAIAEABIADAAIADABIAAgDIgBgHIgDgGIgEgEQgEgBgEAAIgLABIgHACIgCgLIAJgCIALgBQAIAAAFACQAGACADADQADAFACAEQACAGgBAGIAAAtIgEAAIgHABIgIAAIgJABIgKgBgAgCADIgGACIgFAEQgCACAAADQABAHAEAEQAFACAGAAIAIAAIAHgBIAAgWIgFgBIgIgBIgFABg");
	this.shape_389.setTransform(293.35,185.7);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#333333").s().p("AgNAjQgFgDgEgEQgDgFgCgGQgBgGAAgHIAAgoIANAAIAAAlQAAANAEAGQAEAGAJAAIAEAAIAEgBIAEAAIACgBIAAg8IANAAIAABGIgLACIgRABQgIAAgGgCg");
	this.shape_390.setTransform(285.825,185.775);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#333333").s().p("AgRAlIgIgDIADgLIAHADQAFABAIAAQAHAAAEgCQAEgCAAgEQAAgFgEgDIgMgHIgIgDIgGgDQgDgCgCgEQgCgDAAgFQAAgKAIgGQAHgFALAAIAGABIAGAAIAFABIADABIgDALIgGgCIgLgBQgEAAgEACQgEACAAAFIAAAEIADAEIAFACIAGACIAJAFIAHADQADADABADQACAEAAAFQAAAKgIAFQgHAFgNAAQgKAAgFgBg");
	this.shape_391.setTransform(278.725,185.7);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#333333").s().p("AgRAlIgIgDIADgLIAHADQAFABAIAAQAHAAAEgCQAEgCAAgEQAAgFgEgDIgMgHIgIgDIgGgDQgDgCgCgEQgCgDAAgFQAAgKAIgGQAHgFALAAIAGABIAGAAIAFABIADABIgDALIgGgCIgLgBQgEAAgEACQgEACAAAFIAAAEIADAEIAFACIAGACIAJAFIAHADQADADABADQACAEAAAFQAAAKgIAFQgHAFgNAAQgKAAgFgBg");
	this.shape_392.setTransform(266.075,185.7);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#333333").s().p("AgLAlIgJgEQgDgDgDgEQgCgFAAgGQABgGACgFQACgEAEgBIAKgFIALgBIAEAAIAEABIAEAAIABABIAAgDIAAgHIgCgGIgGgEQgDgBgEAAIgLABIgIACIgBgLIAJgCIALgBQAIAAAGACQAFACADADQAEAFABAEQACAGAAAGIAAAtIgGAAIgGABIgJAAIgIABIgLgBgAgCADIgGACIgEAEQgCACAAADQgBAHAFAEQAEACAIAAIAHAAIAGgBIAAgWIgEgBIgHgBIgGABg");
	this.shape_393.setTransform(259.1,185.7);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#333333").s().p("AgKA2IgJgEQgEgDgDgEQgCgFABgGQAAgGACgFQADgEADgCIAKgFIALgBIAEAAIAEABIAEAAIACABIAAgDIgBgHIgCgFIgGgEQgDgBgEAAIgLABIgIACIgBgLIAJgCIALgBQAIAAAGACQAFACADADQADAFACAEQABAFAAAGIAAAuIgEAAIgHABIgJAAIgIABIgKgBgAgCAUIgGACIgEAEQgCACgBADQAAAHAFAEQAFACAGAAIAIAAIAHgBIAAgWIgFgBIgHgBIgGABgAgGghIARgVIAIAIIgTAUg");
	this.shape_394.setTransform(245.4,184);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#333333").s().p("AgUAlIAAhEIAMgEQAHgBAHAAIAEAAIAEABIAEAAIADABIgCALIgFgBIgKgBIgGABIgFABIAAA8g");
	this.shape_395.setTransform(239.725,185.625);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgDgEQgBgFAAgGQgBgGADgFQADgEAEgBIAKgFIAKgBIAEAAIAEABIAEAAIACABIAAgDIgBgHIgDgGIgEgEQgEgBgEAAIgLABIgHACIgCgLIAJgCIALgBQAIAAAGACQAFACADADQADAFACAEQACAGgBAGIAAAtIgEAAIgHABIgIAAIgJABIgKgBgAgCADIgGACIgEAEQgDACAAADQAAAHAFAEQAFACAGAAIAIAAIAHgBIAAgWIgFgBIgIgBIgFABg");
	this.shape_396.setTransform(232.7,185.7);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#333333").s().p("AAQAlIAAglIAAgLQgBgFgCgDQgCgDgEgBQgEgCgEAAIgEABIgFAAIgDAAIgDABIAAA8IgMAAIAAhFIALgDQAIgBAJAAQAJAAAFACQAGADAEAEQADAFABAGQACAGAAAHIAAAog");
	this.shape_397.setTransform(225.25,185.625);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_398.setTransform(217.075,185.725);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#333333").s().p("AgGA0IAAhIIANAAIAABIgAgFgkQgCgCgBgEQABgEACgCQACgCADgBQADABADACQADACgBAEQABAEgDACQgDACgDAAQgDAAgCgCg");
	this.shape_399.setTransform(211.2,184.2);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#333333").s().p("AAIAmQgIAAgGgCQgHgDgFgFQgEgFgCgHQgDgIAAgHQAAgIADgHQACgHAFgFQAEgGAHgCQAGgDAHAAIAKABIAJADIgDAKIgGgCIgIAAQgKAAgGAGQgGAHAAANQAAAFABAFQACAFADADQACAEAFACQADABAHABIAJgBIAHgDIACAMIgEABIgEABIgGABIgGAAg");
	this.shape_400.setTransform(206.425,185.7);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#333333").s().p("AgGA0IAAhIIANAAIAABIgAgFgkQgCgCgBgEQABgEACgCQACgCADgBQAEABACACQACACABAEQgBAEgCACQgCACgEAAQgDAAgCgCg");
	this.shape_401.setTransform(201.2,184.2);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#333333").s().p("AgRAlIgIgDIADgLIAHADQAFABAIAAQAHAAAEgCQAEgCAAgEQAAgFgEgDIgMgHIgIgDIgGgDQgDgCgCgEQgCgDAAgFQAAgKAIgGQAHgFALAAIAGABIAGAAIAFABIADABIgDALIgGgCIgLgBQgEAAgEACQgEACAAAFIAAAEIADAEIAFACIAGACIAJAFIAHADQADADABADQACAEAAAFQAAAKgIAFQgHAFgNAAQgKAAgFgBg");
	this.shape_402.setTransform(196.325,185.7);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_403.setTransform(189.075,185.725);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#333333").s().p("AgfAyIAAhfIAMgDQAGgBAKAAQAHAAAHADQAGACAFAFQAFAFACAHQADAHAAAJQAAAIgCAGQgCAHgEAFQgFAFgGADQgGADgHAAQgGAAgFgCIgHgDIAAAdgAgSgkIAAAtIAHAEQAEABAGAAQAEAAAEgCQAEgCADgDQACgEABgEIABgKQAAgNgGgHQgGgGgKAAIgJAAIgFABg");
	this.shape_404.setTransform(181.025,186.925);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#333333").s().p("AgKA0QgHgDgFgFQgEgFgCgHQgDgHAAgIQAAgKADgHQADgHAFgEQAEgFAGgDQAGgCAGAAQAOAAAIAJQAIAKAAARIAAACIAAADIgxAAQABALAGAHQAFAFAMAAIALgBIAHgCIACAKIgIADIgOACQgIAAgHgDgAgFgIIgGAEQgDADgBADIgCAIIAjAAQABgJgFgFQgFgGgIAAQgDAAgDACgAABgoIgMAMIgGgFIASgVIATAVIgFAFg");
	this.shape_405.setTransform(166.325,184.05);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#333333").s().p("AAIAmQgIAAgGgCQgHgDgFgFQgEgFgCgHQgDgIAAgHQAAgIADgHQACgHAFgFQAEgGAHgCQAGgDAHAAIAKABIAJADIgDAKIgGgCIgIAAQgKAAgGAGQgGAHAAANQAAAFABAFQACAFADADQACAEAFACQADABAHABIAJgBIAHgDIACAMIgEABIgEABIgGABIgGAAg");
	this.shape_406.setTransform(159.425,185.7);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_407.setTransform(151.825,185.725);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#333333").s().p("AgFAlIgOgiQgIgSgFgUIAOAAIAEAOIAFAPIAFAPIAEAMIAFgMIAFgPIAFgPIAEgOIAOAAQgGAUgHASIgOAig");
	this.shape_408.setTransform(144.225,185.7);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#333333").s().p("AgJAQQAEgHABgIIABgMIAAgEIAAgDIANAAIAAACIAAACQAAAJgDAIQgCAIgFAIg");
	this.shape_409.setTransform(132.375,189.675);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_410.setTransform(126.725,185.725);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#333333").s().p("AgQAxIgKgCIACgMIAKADIAMABQAKAAAFgEQAGgFAAgKIAAgDIgHADQgFABgGAAQgGABgGgDQgFgCgFgFQgEgEgDgGQgCgGAAgJQAAgIACgGQADgHAEgFQAFgFAGgDQAHgDAHAAQAJABAHABIALADIAABAQAAAQgIAHQgJAIgRAAIgNgBgAgLgfQgGAHAAALQAAAHACAEQACADACADQADADAEACIAGABQAFAAAFgBIAGgEIAAgpIgFgCIgJAAQgJAAgGAHg");
	this.shape_411.setTransform(118.325,186.95);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_412.setTransform(110.375,185.725);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#333333").s().p("AgMBBIgFgCIACgLIADABIAEABQAGgBACgEQADgEAAgHIAAhHIANAAIAABGQAAAOgGAHQgHAGgLABIgEAAgAADgxQgCgCAAgEQAAgEACgCQADgCADgBQAEABACACQADACAAAEQAAAEgDACQgCACgEAAQgDAAgDgCg");
	this.shape_413.setTransform(103.575,185.5);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_414.setTransform(92.225,185.725);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#333333").s().p("AgUAlIAAhEIAMgEQAHgBAHAAIAEAAIAEABIAEAAIADABIgCALIgFgBIgKgBIgGABIgFABIAAA8g");
	this.shape_415.setTransform(79.475,185.625);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#333333").s().p("AgLAlIgJgEQgDgDgCgEQgDgFAAgGQAAgGADgFQACgEAEgBIAKgFIALgBIAEAAIAEABIADAAIACABIAAgDIAAgHIgCgGIgGgEQgDgBgEAAIgLABIgIACIgBgLIAIgCIAMgBQAIAAAFACQAGACADADQAEAFABAEQACAGAAAGIAAAtIgGAAIgGABIgJAAIgIABIgLgBgAgCADIgGACIgFAEQgBACAAADQgBAHAFAEQAEACAIAAIAIAAIAFgBIAAgWIgEgBIgHgBIgGABg");
	this.shape_416.setTransform(72.45,185.7);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#333333").s().p("AgGA0IAAhIIAMAAIAABIgAgFgkQgDgCABgEQgBgEADgCQADgCACgBQADABADACQADACAAAEQAAAEgDACQgDACgDAAQgCAAgDgCg");
	this.shape_417.setTransform(67.25,184.2);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#333333").s().p("AAIAmQgIAAgGgCQgHgDgFgFQgEgFgCgHQgDgIAAgHQAAgIADgHQACgHAFgFQAEgGAHgCQAGgDAHAAIAKABIAJADIgDAKIgGgCIgIAAQgKAAgGAGQgGAHAAANQAAAFABAFQACAFADADQACAEAFACQADABAHABIAJgBIAHgDIACAMIgEABIgEABIgGABIgGAAg");
	this.shape_418.setTransform(62.475,185.7);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#333333").s().p("AgFA0IAAhIIALAAIAABIgAgFgkQgCgCAAgEQAAgEACgCQADgCACgBQADABADACQADACAAAEQAAAEgDACQgDACgDAAQgCAAgDgCg");
	this.shape_419.setTransform(57.25,184.2);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#333333").s().p("AARAlIAAglIgCgLQgBgFgCgDQgCgDgDgBQgDgCgEAAIgFABIgEAAIgEAAIgCABIAAA8IgOAAIAAhFIANgDQAHgBAJAAQAIAAAGACQAGADADAEQAEAFABAGQABAGABAHIAAAog");
	this.shape_420.setTransform(51.5,185.625);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#333333").s().p("AgFA0IAAhIIALAAIAABIgAgFgkQgDgCAAgEQAAgEADgCQADgCACgBQADABADACQADACgBAEQABAEgDACQgDACgDAAQgCAAgDgCg");
	this.shape_421.setTransform(45.7,184.2);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_422.setTransform(33.425,185.725);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#333333").s().p("AAfAxIgFgNIgEgMIgrAAIgJAZIgOAAIAKgdIAKgYIAJgXIAKgVIALAAIAKAVIAJAXIAKAYIAKAdgAgIgKIgJAXIAjAAIgJgXIgJgWIgIAWg");
	this.shape_423.setTransform(24.625,184.5);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#333333").s().p("AgGAGQgCgDAAgDQAAgDACgCQADgDADAAQAEAAADADQACACAAADQAAADgCADQgDAEgEAAQgDAAgDgEg");
	this.shape_424.setTransform(210.375,153.2);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgDgFQgBgEAAgGQgBgGADgFQADgEAEgCIAJgDIALgBIAEAAIAEAAIAEABIACAAIAAgEIgBgGIgDgGIgEgDQgEgCgEAAIgLABIgHACIgCgLIAJgCIALgBQAIAAAGACQAFACADADQADAEACAFQACAFgBAGIAAAtIgEABIgHABIgJABIgIAAIgKgBgAgCADIgGACIgEADQgDADAAADQAAAIAFACQAFADAGAAIAIAAIAHgBIAAgWIgFAAIgIgBIgFAAg");
	this.shape_425.setTransform(204.8,150.3);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#333333").s().p("AgKA0QgGgCgFgFQgFgFgDgHQgCgHAAgJQAAgJACgGQACgHAFgFQAEgFAGgCQAGgDAHAAQAGAAAFABIAHAEIAAglIANgCIAABpIgLADIgQABQgIAAgHgDgAgGgGQgEACgCADQgDACgBAFQgCAGAAAFQAAANAHAHQAHAHAJgBIAJAAIAFgBIAAgtQgCgCgEgBQgFgCgFAAQgFAAgEACg");
	this.shape_426.setTransform(197,148.6);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#333333").s().p("AgFA0IAAhJIALAAIAABJgAgFgkQgCgCAAgEQAAgEACgDQADgCACAAQADAAADACQADADAAAEQAAAEgDACQgDACgDAAQgCAAgDgCg");
	this.shape_427.setTransform(191.35,148.8);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#333333").s().p("AgHAuQgFgCgEgDQgCgEgBgGIgBgMIAAhAIANgDIAAAXIAaAAIAAALIgaAAIAAAhIAAAJIACAGQACABADABIAFABQAFAAAFgBIAEgCIACALIgGACQgFACgHgBQgGAAgEgCg");
	this.shape_428.setTransform(187.15,149.25);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#333333").s().p("AgUAlIAAhEIAMgEQAHgBAHAAIAEAAIAEABIAEAAIADABIgCALIgFgBIgKgBIgGABIgFABIAAA8g");
	this.shape_429.setTransform(181.725,150.225);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#333333").s().p("AgLAlIgJgEQgDgDgCgFQgCgEgBgGQAAgGADgFQACgEAEgCIALgDIAKgBIAEAAIAEAAIADABIACAAIAAgEIAAgGIgDgGIgFgDQgDgCgEAAIgLABIgIACIgBgLIAIgCIAMgBQAIAAAFACQAGACADADQAEAEABAFQABAFABAGIAAAtIgGABIgGABIgIABIgJAAIgLgBgAgCADIgGACIgFADQgBADAAADQAAAIAEACQAEADAIAAIAIAAIAFgBIAAgWIgEAAIgHgBIgGAAg");
	this.shape_430.setTransform(174.7,150.3);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#333333").s().p("AgfAyIAAhfIAMgDQAGgBAKAAQAHAAAHADQAGACAFAFQAFAFACAHQADAHAAAJQAAAIgCAGQgCAHgEAFQgFAFgGADQgGADgHAAQgGAAgFgCIgHgDIAAAdgAgSgkIAAAtIAHAEQAEABAGAAQAEAAAEgCQAEgCADgDQACgEABgEIABgKQAAgNgGgHQgGgGgKAAIgJAAIgFABg");
	this.shape_431.setTransform(167.325,151.525);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#333333").s().p("AgLAlIgJgEQgDgDgCgFQgCgEAAgGQAAgGACgFQADgEAEgCIAKgDIAKgBIAEAAIAEAAIADABIACAAIAAgEIAAgGIgDgGIgEgDQgEgCgEAAIgLABIgHACIgCgLIAIgCIAMgBQAIAAAFACQAGACADADQADAEACAFQABAFABAGIAAAtIgGABIgGABIgIABIgJAAIgLgBgAgCADIgGACIgFADQgCADAAADQABAIAEACQAEADAIAAIAIAAIAFgBIAAgWIgEAAIgIgBIgFAAg");
	this.shape_432.setTransform(155.9,150.3);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#333333").s().p("AgJA0QgHgCgFgFQgEgFgDgHQgDgHAAgJQAAgJADgGQACgHADgFQAFgFAGgCQAGgDAHAAQAGAAAFABIAHAEIAAglIANgCIAABpIgMADIgPABQgIAAgGgDgAgGgGQgEACgCADQgDACgBAFQgBAGgBAFQABANAGAHQAHAHAJgBIAJAAIAFgBIAAgtQgCgCgFgBQgEgCgGAAQgEAAgEACg");
	this.shape_433.setTransform(148.1,148.6);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#333333").s().p("AgKAjQgHgDgFgEQgEgGgCgHQgDgGAAgIQAAgKADgGQADgIAFgFQAEgFAGgCQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAGAMgBIALgBIAHgCIACALIgIADIgOABQgIAAgHgDgAgFgYIgGAEQgDADgBAEIgCAHIAjAAQABgIgFgHQgFgFgIAAQgDAAgDACg");
	this.shape_434.setTransform(136.975,150.3);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#333333").s().p("AgJA0QgHgCgFgFQgEgFgDgHQgDgHAAgJQAAgJADgGQACgHADgFQAFgFAGgCQAGgDAHAAQAGAAAFABIAHAEIAAglIANgCIAABpIgMADIgPABQgIAAgGgDgAgGgGQgEACgCADQgDACgBAFQgBAGAAAFQAAANAGAHQAHAHAJgBIAJAAIAFgBIAAgtQgCgCgFgBQgEgCgGAAQgEAAgEACg");
	this.shape_435.setTransform(128.75,148.6);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgDgFQgBgEAAgGQgBgGADgFQACgEAFgCIAKgDIAKgBIAEAAIAEAAIADABIADAAIAAgEIgBgGIgDgGIgEgDQgEgCgEAAIgLABIgHACIgCgLIAJgCIALgBQAIAAAFACQAGACADADQADAEACAFQACAFgBAGIAAAtIgEABIgHABIgIABIgJAAIgKgBgAgCADIgGACIgFADQgCADAAADQABAIAEACQAFADAGAAIAIAAIAHgBIAAgWIgFAAIgIgBIgFAAg");
	this.shape_436.setTransform(121,150.3);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#333333").s().p("AgKA0QgGgCgFgFQgFgFgDgHQgCgHAAgJQAAgJACgGQACgHAFgFQAEgFAGgCQAGgDAHAAQAGAAAFABIAHAEIAAglIANgCIAABpIgLADIgQABQgHAAgIgDgAgGgGQgEACgCADQgDACgBAFQgBAGgBAFQABANAGAHQAHAHAJgBIAJAAIAFgBIAAgtQgCgCgEgBQgFgCgFAAQgFAAgEACg");
	this.shape_437.setTransform(113.2,148.6);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#333333").s().p("AgGAxQgFgEAAgLIAAhWIAMgCIAABWIABAGQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAIADACIAGABIgCALQgLgBgFgFg");
	this.shape_438.setTransform(107.75,148.6);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#333333").s().p("AgNAjQgFgDgEgEQgDgFgCgGQgBgGAAgHIAAgoIANAAIAAAlQAAANAEAGQAEAGAJAAIAEAAIAEgBIAEAAIACgBIAAg8IANAAIAABGIgLACIgRABQgIAAgGgCg");
	this.shape_439.setTransform(101.375,150.375);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#333333").s().p("AAIAmQgIAAgGgDQgHgDgFgEQgEgGgCgHQgDgGAAgIQAAgIADgHQACgHAFgGQAEgEAHgDQAGgDAHAAIAKAAIAJAEIgDALIgGgDIgIAAQgKgBgGAHQgGAHAAANQAAAFABAFQACAFADAEQACADAFACQADABAHAAIAJgBIAHgCIACALIgEACIgEABIgGABIgGAAg");
	this.shape_440.setTransform(94.375,150.3);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#333333").s().p("AgGA0IAAhJIANAAIAABJgAgFgkQgCgCgBgEQABgEACgDQACgCADAAQAEAAACACQACADAAAEQAAAEgCACQgCACgEAAQgDAAgCgCg");
	this.shape_441.setTransform(89.15,148.8);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#333333").s().p("AgVA2IAAhOQAAgOAHgIQAHgHANAAIAKAAIAGACIgCALIgFgBIgIgBQgIAAgDAFQgEAFAAAIIAAAGIAbAAIAAALIgbAAIAAA9g");
	this.shape_442.setTransform(85.325,148.525);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#333333").s().p("AgGA0IAAhJIANAAIAABJgAgFgkQgCgCgBgEQABgEACgDQACgCADAAQADAAADACQADADgBAEQABAEgDACQgDACgDAAQgDAAgCgCg");
	this.shape_443.setTransform(80.25,148.8);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#333333").s().p("AgKA0QgGgCgFgFQgFgFgDgHQgCgHAAgJQAAgJACgGQACgHAFgFQAEgFAGgCQAGgDAHAAQAGAAAFABIAHAEIAAglIANgCIAABpIgLADIgQABQgIAAgHgDgAgGgGQgEACgCADQgDACgBAFQgCAGAAAFQAAANAHAHQAHAHAJgBIAJAAIAFgBIAAgtQgCgCgEgBQgFgCgFAAQgFAAgEACg");
	this.shape_444.setTransform(74.15,148.6);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgDgFQgBgEgBgGQABgGACgFQADgEAEgCIAJgDIALgBIAEAAIAEAAIAEABIACAAIAAgEIgBgGIgCgGIgFgDQgEgCgEAAIgLABIgHACIgCgLIAJgCIALgBQAIAAAGACQAFACADADQADAEACAFQABAFAAAGIAAAtIgEABIgHABIgJABIgIAAIgKgBgAgCADIgGACIgEADQgCADgBADQAAAIAFACQAFADAGAAIAIAAIAHgBIAAgWIgFAAIgHgBIgGAAg");
	this.shape_445.setTransform(63.15,150.3);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#333333").s().p("AgUAlIAAhEIAMgEQAHgBAHAAIAEAAIAEABIAEAAIADABIgCALIgFgBIgKgBIgGABIgFABIAAA8g");
	this.shape_446.setTransform(54.225,150.225);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_447.setTransform(46.925,150.325);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#333333").s().p("AgFA0IAAhJIALAAIAABJgAgFgkQgCgCAAgEQAAgEACgDQADgCACAAQAEAAACACQADADAAAEQAAAEgDACQgCACgEAAQgCAAgDgCg");
	this.shape_448.setTransform(41.05,148.8);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#333333").s().p("AgLAlIgJgEQgDgDgDgFQgCgEAAgGQABgGACgFQACgEAEgCIAKgDIALgBIAEAAIAEAAIAEABIABAAIAAgEIAAgGIgCgGIgGgDQgDgCgEAAIgLABIgIACIgBgLIAJgCIALgBQAIAAAGACQAFACADADQAEAEABAFQACAFAAAGIAAAtIgGABIgGABIgJABIgIAAIgLgBgAgCADIgGACIgEADQgCADAAADQgBAIAFACQAEADAIAAIAHAAIAGgBIAAgWIgEAAIgHgBIgGAAg");
	this.shape_449.setTransform(35.45,150.3);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#333333").s().p("AAkAlIAAglIAAgLQgBgEgBgEQgCgDgDgBQgDgCgFAAQgHAAgEACIgGADIACAIIABAJIAAAoIgNAAIAAglIAAgLQAAgEgCgEQgCgDgDgBQgDgCgFAAIgEABIgEAAIgEAAIgCABIAAA8IgOAAIAAhFIANgDQAHgBAKAAQAHAAAEACQAFACADADIACgCIAGgCIAHgCIAHgBQAJAAAFACQAGADADAEQACAFABAGIABANIAAAog");
	this.shape_450.setTransform(26.05,150.225);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#333333").s().p("AgJAQQAEgHABgIIABgMIAAgEIAAgDIANAAIAAACIAAACQAAAJgDAIQgCAIgFAIg");
	this.shape_451.setTransform(612.675,136.575);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_452.setTransform(607.025,132.625);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#333333").s().p("AgfAyIAAhfIAMgDQAGgBAKAAQAHAAAHADQAGACAFAFQAFAFACAHQADAHAAAJQAAAIgCAGQgCAHgEAFQgFAFgGADQgGADgHAAQgGAAgFgCIgHgDIAAAdgAgSgkIAAAtIAHAEQAEABAGAAQAEAAAEgCQAEgCADgDQACgEABgEIABgKQAAgNgGgHQgGgGgKAAIgJAAIgFABg");
	this.shape_453.setTransform(598.975,133.825);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#333333").s().p("AAlAlIAAglIgBgLQgBgEgCgEQgBgDgDgBQgDgCgFAAQgGAAgEACIgHADIACAIIAAAJIAAAoIgLAAIAAglIgBgLQgBgEgBgEQgCgDgDgBQgDgCgFAAIgEABIgFAAIgDAAIgCABIAAA8IgOAAIAAhFIAMgDQAIgBAJAAQAHAAAGACQAEACADADIADgCIAEgCIAHgCIAIgBQAJAAAFACQAGADADAEQADAFAAAGIABANIAAAog");
	this.shape_454.setTransform(588.7,132.525);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#333333").s().p("AgLAlIgJgEQgDgDgCgEQgDgFAAgGQAAgGADgFQACgEAEgBIALgFIAKgBIAEAAIAEABIADAAIACABIAAgDIAAgHIgDgGIgFgDQgDgCgEAAIgLABIgIACIgBgLIAIgCIAMgBQAIAAAFACQAGACADADQAEAFABAEQABAFABAHIAAAtIgGAAIgGABIgIAAIgJABIgLgBgAgCADIgGACIgFAEQgBACAAADQAAAHAEAEQAEACAIAAIAIAAIAFgBIAAgWIgEgBIgIgBIgFABg");
	this.shape_455.setTransform(578.8,132.6);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#333333").s().p("AAIAmQgIAAgGgCQgHgDgFgFQgEgFgCgHQgDgIAAgHQAAgIADgHQACgHAFgFQAEgGAHgCQAGgDAHAAIAKABIAJACIgDALIgGgCIgIAAQgKAAgGAGQgGAHAAANQAAAFABAFQACAFADAEQACADAFACQADABAHABIAJgBIAHgDIACAMIgEABIgEABIgGABIgGAAg");
	this.shape_456.setTransform(572.325,132.6);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_457.setTransform(558.975,132.625);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#333333").s().p("AgUAlIAAhEIAMgEQAHgBAHAAIAEAAIAEABIAEAAIADABIgCALIgFgBIgKgBIgGABIgFABIAAA8g");
	this.shape_458.setTransform(546.875,132.525);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_459.setTransform(539.575,132.625);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#333333").s().p("AgFA0IAAhIIALAAIAABIgAgFgkQgCgCAAgEQAAgEACgCQACgCADgBQADABADACQACACAAAEQAAAEgCACQgDACgDAAQgDAAgCgCg");
	this.shape_460.setTransform(533.7,131.1);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#333333").s().p("AgKAlIgKgEQgDgDgDgEQgCgFAAgGQABgGACgFQADgEADgBIAKgFIALgBIAEAAIAEABIAEAAIABABIAAgDIAAgHIgCgGIgGgDQgDgCgEAAIgLABIgIACIgBgLIAJgCIALgBQAIAAAGACQAFACADADQADAFACAEQABAFAAAHIAAAtIgEAAIgHABIgJAAIgIABIgKgBgAgCADIgGACIgEAEQgCACAAADQgBAHAFAEQAFACAGAAIAIAAIAGgBIAAgWIgEgBIgHgBIgGABg");
	this.shape_461.setTransform(528.1,132.6);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#333333").s().p("AAlAlIAAglIgBgLQgBgEgBgEQgCgDgDgBQgDgCgFAAQgHAAgEACIgGADIACAIIABAJIAAAoIgNAAIAAglIAAgLQAAgEgCgEQgCgDgDgBQgDgCgFAAIgEABIgFAAIgDAAIgCABIAAA8IgOAAIAAhFIANgDQAHgBAKAAQAGAAAGACQAEACADADIACgCIAGgCIAGgCIAIgBQAJAAAFACQAGADADAEQACAFABAGIABANIAAAog");
	this.shape_462.setTransform(518.7,132.525);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_463.setTransform(502.775,132.625);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#333333").s().p("AgHAuQgFgCgEgDQgCgEgBgFIgCgNIAAhAIAOgCIAAAWIAaAAIAAALIgaAAIAAAgIAAAJIACAHQACACADAAIAFABQAFAAAEgCIAFgBIACAKIgGADQgFACgHAAQgFgBgFgCg");
	this.shape_464.setTransform(496.2,131.55);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#333333").s().p("AARAlIAAglIgBgLQgCgFgCgDQgCgDgDgBQgDgCgEAAIgFABIgEAAIgEAAIgCABIAAA8IgNAAIAAhFIAMgDQAHgBAJAAQAIAAAGACQAGADADAEQAEAFABAGQACAGgBAHIAAAog");
	this.shape_465.setTransform(489,132.525);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgDgEQgBgFAAgGQgBgGADgFQADgEAEgBIAJgFIALgBIAEAAIAEABIAEAAIACABIAAgDIgBgHIgDgGIgEgDQgEgCgEAAIgLABIgHACIgCgLIAJgCIALgBQAIAAAGACQAFACADADQADAFACAEQACAFgBAHIAAAtIgEAAIgHABIgJAAIgIABIgKgBgAgCADIgGACIgEAEQgDACAAADQAAAHAFAEQAFACAGAAIAIAAIAHgBIAAgWIgFgBIgIgBIgFABg");
	this.shape_466.setTransform(481.1,132.6);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#333333").s().p("AgNAjQgFgDgEgEQgDgFgCgGQgBgGAAgHIAAgoIANAAIAAAlQAAANAEAGQAEAGAJAAIAEAAIAEgBIAEAAIACgBIAAg8IANAAIAABGIgLACIgRABQgIAAgGgCg");
	this.shape_467.setTransform(473.575,132.675);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#333333").s().p("AAWA8IgMgEQgFgDgEgEQgDgEgBgGQgIgBgJgDQgHgEgGgGQgFgHgEgJQgDgJAAgLQAAgMADgKQAEgJAGgHQAHgGAJgDQAIgEAJAAQAIAAAJAEQAJADAFAGQAHAHADAJQAFAKAAAMQAAALgDAIQgEAIgEAGQgGAHgGAEQgHADgHACQAAADADACIAHAFIAJACIAKACIgDALIgOgDgAgNgvQgGADgEAFQgDAFgDAHQgCAHAAAJQAAAJACAGQADAHADAFQAEAGAGACQAHADAGAAQAHAAAGgDQAGgCAEgGQAFgFACgHQACgGAAgJQAAgJgCgHQgCgHgFgFQgEgFgGgDQgGgDgHAAQgGAAgHADg");
	this.shape_468.setTransform(464.15,132.575);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#333333").s().p("AgGAHQgCgDAAgEQAAgDACgDQADgCADAAQAEAAADACQACADAAADQAAAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_469.setTransform(451.225,135.5);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_470.setTransform(445.375,132.625);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#333333").s().p("AgQAxIgKgCIACgMIAKADIAMABQAKAAAFgEQAGgFAAgKIAAgDIgHADQgFABgGAAQgGABgGgDQgFgCgFgFQgEgEgDgGQgCgGAAgJQAAgIACgGQADgHAEgFQAFgFAGgDQAHgDAHAAQAJABAHABIALADIAABAQAAAQgIAHQgJAIgRAAIgNgBgAgLgfQgGAHAAALQAAAHACAEQACADACADQADADAEACIAGABQAFAAAFgBIAGgEIAAgpIgFgCIgJAAQgJAAgGAHg");
	this.shape_471.setTransform(436.975,133.85);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_472.setTransform(429.025,132.625);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#333333").s().p("AgMBBIgFgCIACgLIADABIAEABQAGgBACgEQADgEAAgHIAAhHIANAAIAABGQAAAOgGAHQgHAGgLABIgEAAgAADgxQgCgCAAgEQAAgEACgCQADgCADgBQAEABACACQADACAAAEQAAAEgDACQgCACgEAAQgDAAgDgCg");
	this.shape_473.setTransform(422.225,132.4);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_474.setTransform(411.525,132.625);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#333333").s().p("AgJA1QgHgDgFgFQgEgFgDgHQgDgHAAgJQAAgIADgIQACgFADgFQAFgFAGgDQAGgDAHAAQAGAAAFACIAHADIAAglIANgCIAABqIgMACIgQABQgGAAgHgCgAgGgHQgEACgDAEQgCACgBAGQgCAFABAFQgBANAHAHQAGAGAKABIAIgBIAGgBIAAgtQgCgCgFgCQgEgBgGAAQgEAAgEABg");
	this.shape_475.setTransform(403.05,130.9);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_476.setTransform(389.275,132.625);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#333333").s().p("AgFA0IAAhIIALAAIAABIgAgFgkQgCgCAAgEQAAgEACgCQADgCACgBQADABADACQACACAAAEQAAAEgCACQgDACgDAAQgCAAgDgCg");
	this.shape_477.setTransform(383.4,131.1);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#333333").s().p("AAIAmQgIAAgGgCQgHgDgFgFQgEgFgCgHQgDgIAAgHQAAgIADgHQACgHAFgFQAEgGAHgCQAGgDAHAAIAKABIAJACIgDALIgGgCIgIAAQgKAAgGAGQgGAHAAANQAAAFABAFQACAFADAEQACADAFACQADABAHABIAJgBIAHgDIACAMIgEABIgEABIgGABIgGAAg");
	this.shape_478.setTransform(378.625,132.6);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#333333").s().p("AgJA2IAAhIIALAAIAABIgAgMggIARgVIAIAIIgTATg");
	this.shape_479.setTransform(373.8,130.825);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#333333").s().p("AAQAlIAAglIgBgLQgBgFgBgDQgCgDgEgBQgDgCgFAAIgEABIgFAAIgDAAIgCABIAAA8IgOAAIAAhFIANgDQAHgBAJAAQAIAAAGACQAGADADAEQADAFACAGQABAGABAHIAAAog");
	this.shape_480.setTransform(367.65,132.525);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#333333").s().p("AgGA0IAAhIIANAAIAABIgAgFgkQgCgCgBgEQABgEACgCQACgCADgBQAEABACACQACACAAAEQAAAEgCACQgCACgEAAQgDAAgCgCg");
	this.shape_481.setTransform(361.85,131.1);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_482.setTransform(350.225,132.625);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#333333").s().p("AgJA1QgHgDgFgFQgFgFgDgHQgCgHAAgJQAAgIACgIQADgFADgFQAFgFAGgDQAGgDAHAAQAGAAAFACIAHADIAAglIANgCIAABqIgMACIgQABQgGAAgHgCgAgGgHQgEACgDAEQgCACgBAGQgBAFAAAFQgBANAHAHQAGAGAKABIAIgBIAGgBIAAgtQgCgCgFgCQgEgBgFAAQgFAAgEABg");
	this.shape_483.setTransform(341.75,130.9);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#333333").s().p("AgRAlIgIgDIADgLIAHADQAFABAIAAQAHAAAEgCQAEgCAAgEQAAgFgEgEIgMgGIgIgDIgGgDQgDgCgCgEQgCgDAAgFQAAgKAIgGQAHgFALAAIAGABIAGAAIAFABIADABIgDALIgGgCIgLgBQgEAAgEACQgEACAAAFIAAAEIADAEIAFACIAGACIAJAFIAHADQADADABADQACAEAAAFQAAAKgIAFQgHAFgNAAQgKAAgFgBg");
	this.shape_484.setTransform(328.975,132.6);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#333333").s().p("AgKAkQgHgDgFgFQgEgFgCgHQgDgIAAgHQAAgJADgIQADgHAFgEQAEgFAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAACIgxAAQABAMAGAGQAFAFAMABIALgBIAHgDIACALIgIADIgOABQgIAAgHgCgAgFgYIgGAEQgDADgBADIgCAIIAjAAQABgIgFgHQgFgFgIAAQgDAAgDACg");
	this.shape_485.setTransform(321.875,132.6);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#333333").s().p("AgHAuQgGgCgCgDQgDgEgCgFIgBgNIAAhAIAOgCIAAAWIAaAAIAAALIgaAAIAAAgIAAAJIADAHQABACADAAIAFABQAFAAAEgCIAGgBIABAKIgGADQgFACgHAAQgGgBgEgCg");
	this.shape_486.setTransform(315.55,131.55);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#333333").s().p("AAQAlIAAglIgBgLQgBgFgBgDQgDgDgDgBQgDgCgFAAIgEABIgFAAIgDAAIgCABIAAA8IgOAAIAAhFIANgDQAHgBAJAAQAIAAAGACQAGADADAEQADAFACAGQABAGABAHIAAAog");
	this.shape_487.setTransform(308.35,132.525);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgCgEQgCgFAAgGQAAgGACgFQADgEAEgBIAKgFIAKgBIAEAAIAEABIADAAIADABIAAgDIgBgHIgDgGIgEgDQgEgCgEAAIgLABIgHACIgCgLIAIgCIAMgBQAIAAAFACQAGACADADQADAFACAEQABAFAAAHIAAAtIgFAAIgGABIgIAAIgJABIgKgBgAgCADIgGACIgFAEQgCACAAADQABAHAEAEQAEACAIAAIAIAAIAGgBIAAgWIgFgBIgIgBIgFABg");
	this.shape_488.setTransform(300.45,132.6);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_489.setTransform(287.125,132.625);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#333333").s().p("AgfAyIAAhfIAMgDQAGgBAKAAQAHAAAHADQAGACAFAFQAFAFACAHQADAHAAAJQAAAIgCAGQgCAHgEAFQgFAFgGADQgGADgHAAQgGAAgFgCIgHgDIAAAdgAgSgkIAAAtIAHAEQAEABAGAAQAEAAAEgCQAEgCADgDQACgEABgEIABgKQAAgNgGgHQgGgGgKAAIgJAAIgFABg");
	this.shape_490.setTransform(279.075,133.825);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#333333").s().p("AAkAlIAAglIAAgLQAAgEgCgEQgCgDgDgBQgDgCgFAAQgGAAgFACIgFADIABAIIABAJIAAAoIgNAAIAAglIAAgLQgBgEgCgEQgBgDgDgBQgDgCgFAAIgEABIgEAAIgEAAIgDABIAAA8IgMAAIAAhFIALgDQAIgBAKAAQAGAAAFACQAFACADADIACgCIAFgCIAIgCIAIgBQAIAAAFACQAFADADAEQADAFACAGIABANIAAAog");
	this.shape_491.setTransform(268.8,132.525);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgDgEQgCgFAAgGQABgGACgFQADgEADgBIAKgFIALgBIAEAAIAEABIAEAAIACABIAAgDIgBgHIgCgGIgGgDQgDgCgEAAIgLABIgIACIgBgLIAJgCIALgBQAIAAAGACQAFACADADQADAFACAEQABAFAAAHIAAAtIgEAAIgHABIgJAAIgIABIgKgBgAgCADIgGACIgEAEQgCACgBADQAAAHAFAEQAFACAGAAIAIAAIAHgBIAAgWIgFgBIgHgBIgGABg");
	this.shape_492.setTransform(258.9,132.6);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#333333").s().p("AAIAmQgIAAgGgCQgHgDgFgFQgEgFgCgHQgDgIAAgHQAAgIADgHQACgHAFgFQAEgGAHgCQAGgDAHAAIAKABIAJACIgDALIgGgCIgIAAQgKAAgGAGQgGAHAAANQAAAFABAFQACAFADAEQACADAFACQADABAHABIAJgBIAHgDIACAMIgEABIgEABIgGABIgGAAg");
	this.shape_493.setTransform(252.425,132.6);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_494.setTransform(239.075,132.625);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#333333").s().p("AgJA1QgHgDgFgFQgFgFgDgHQgCgHAAgJQAAgIACgIQADgFADgFQAFgFAGgDQAGgDAHAAQAGAAAFACIAHADIAAglIANgCIAABqIgMACIgQABQgGAAgHgCgAgGgHQgEACgDAEQgCACgBAGQgBAFAAAFQgBANAHAHQAGAGAKABIAIgBIAGgBIAAgtQgCgCgFgCQgEgBgGAAQgEAAgEABg");
	this.shape_495.setTransform(230.6,130.9);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_496.setTransform(216.825,132.625);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#333333").s().p("AARA2IAAgmIgBgLQgCgFgCgCQgCgDgDgBQgEgCgDAAIgFABIgEAAIgEABIgDABIAAA7IgMAAIAAhpIAMgCIAAAlIAIgCIAIgBQAJAAAFACQAGADAEAEQACAFACAFQACAGgBAHIAAApg");
	this.shape_497.setTransform(208.75,130.825);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#333333").s().p("AAQAlIAAglIgBgLQgBgFgBgDQgCgDgEgBQgDgCgFAAIgEABIgFAAIgDAAIgCABIAAA8IgOAAIAAhFIANgDQAHgBAJAAQAIAAAGACQAGADADAEQADAFACAGQABAGABAHIAAAog");
	this.shape_498.setTransform(200.7,132.525);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#333333").s().p("AgLAlIgJgEQgDgDgCgEQgCgFAAgGQAAgGACgFQADgEAEgBIAKgFIAKgBIAEAAIAEABIADAAIACABIAAgDIAAgHIgDgGIgEgDQgEgCgEAAIgLABIgHACIgCgLIAIgCIAMgBQAIAAAFACQAGACADADQADAFACAEQABAFABAHIAAAtIgGAAIgGABIgIAAIgJABIgLgBgAgCADIgGACIgFAEQgBACgBADQABAHAEAEQAEACAIAAIAIAAIAFgBIAAgWIgEgBIgIgBIgFABg");
	this.shape_499.setTransform(192.8,132.6);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#333333").s().p("AAkAlIAAglIAAgLQAAgEgCgEQgCgDgDgBQgDgCgFAAQgGAAgFACIgFADIABAIIABAJIAAAoIgMAAIAAglIgBgLQgBgEgCgEQgBgDgDgBQgDgCgFAAIgEABIgEAAIgEAAIgDABIAAA8IgMAAIAAhFIALgDQAIgBAJAAQAIAAAEACQAFACADADIADgCIAEgCIAIgCIAIgBQAIAAAFACQAFADADAEQADAFACAGIABANIAAAog");
	this.shape_500.setTransform(183.4,132.525);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#333333").s().p("AgLAlIgJgEQgDgDgDgEQgCgFAAgGQABgGACgFQADgEADgBIAKgFIALgBIAEAAIAEABIAEAAIACABIAAgDIgBgHIgCgGIgGgDQgDgCgEAAIgLABIgIACIgBgLIAJgCIALgBQAIAAAGACQAFACADADQADAFACAEQABAFAAAHIAAAtIgEAAIgHABIgJAAIgIABIgLgBgAgCADIgGACIgEAEQgCACAAADQgBAHAFAEQAFACAGAAIAIAAIAHgBIAAgWIgFgBIgHgBIgGABg");
	this.shape_501.setTransform(173.5,132.6);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#333333").s().p("AgHAuQgGgCgCgDQgDgEgCgFIgBgNIAAhAIAOgCIAAAWIAaAAIAAALIgaAAIAAAgIAAAJIACAHQACACADAAIAFABQAFAAAEgCIAGgBIABAKIgGADQgFACgHAAQgFgBgFgCg");
	this.shape_502.setTransform(167.6,131.55);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_503.setTransform(154.525,132.625);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#333333").s().p("AgUAlIAAhEIAMgEQAHgBAHAAIAEAAIAEABIAEAAIADABIgCALIgFgBIgKgBIgGABIgFABIAAA8g");
	this.shape_504.setTransform(142.425,132.525);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#333333").s().p("AgKAkQgHgDgFgFQgEgFgCgHQgDgIAAgHQAAgJADgIQADgHAFgEQAEgFAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAACIgxAAQABAMAGAGQAFAFAMABIALgBIAHgDIACALIgIADIgOABQgIAAgHgCgAgFgYIgGAEQgDADgBADIgCAIIAjAAQABgIgFgHQgFgFgIAAQgDAAgDACg");
	this.shape_505.setTransform(135.275,132.6);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#333333").s().p("AAQA2IAAgmIgBgLQgBgFgCgCQgCgDgDgBQgDgCgFAAIgEABIgFAAIgDABIgCABIAAA7IgOAAIAAhpIAOgCIAAAlIAIgCIAHgBQAIAAAGACQAGADADAEQADAFACAFQABAGABAHIAAApg");
	this.shape_506.setTransform(127.45,130.825);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#333333").s().p("AgGAxQgFgEAAgKIAAhXIAMgCIAABXIABAEQAAABAAABQAAAAAAABQABAAAAAAQAAABABAAIACACIAGABIgCALQgLAAgFgGg");
	this.shape_507.setTransform(121.85,130.9);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_508.setTransform(115.425,132.625);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#333333").s().p("AAIAmQgIAAgGgCQgHgDgFgFQgEgFgCgHQgDgIAAgHQAAgIADgHQACgHAFgFQAEgGAHgCQAGgDAHAAIAKABIAJACIgDALIgGgCIgIAAQgKAAgGAGQgGAHAAANQAAAFABAFQACAFADAEQACADAFACQADABAHABIAJgBIAHgDIACAMIgEABIgEABIgGABIgGAAg");
	this.shape_509.setTransform(108.275,132.6);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#333333").s().p("AgRAlIgIgDIADgLIAHADQAFABAIAAQAHAAAEgCQAEgCAAgEQAAgFgEgEIgMgGIgIgDIgGgDQgDgCgCgEQgCgDAAgFQAAgKAIgGQAHgFALAAIAGABIAGAAIAFABIADABIgDALIgGgCIgLgBQgEAAgEACQgEACAAAFIAAAEIADAEIAFACIAGACIAJAFIAHADQADADABADQACAEAAAFQAAAKgIAFQgHAFgNAAQgKAAgFgBg");
	this.shape_510.setTransform(101.675,132.6);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#333333").s().p("AgKAkQgHgDgFgFQgEgFgCgHQgDgIAAgHQAAgJADgIQADgHAFgEQAEgFAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAACIgxAAQABAMAGAGQAFAFAMABIALgBIAHgDIACALIgIADIgOABQgIAAgHgCgAgFgYIgGAEQgDADgBADIgCAIIAjAAQABgIgFgHQgFgFgIAAQgDAAgDACg");
	this.shape_511.setTransform(94.575,132.6);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#333333").s().p("AgGAxQgFgEAAgKIAAhXIAMgCIAABXIAAAEQABABAAABQAAAAAAABQAAAAABAAQAAABABAAIADACIAFABIgCALQgLAAgFgGg");
	this.shape_512.setTransform(83.4,130.9);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#333333").s().p("AgKAkQgHgDgFgFQgEgFgCgHQgDgIAAgHQAAgJADgIQADgHAFgEQAEgFAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAACIgxAAQABAMAGAGQAFAFAMABIALgBIAHgDIACALIgIADIgOABQgIAAgHgCgAgFgYIgGAEQgDADgBADIgCAIIAjAAQABgIgFgHQgFgFgIAAQgDAAgDACg");
	this.shape_513.setTransform(77.125,132.6);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#333333").s().p("AgFAlIgOgiQgIgSgFgUIAOAAIAEAOIAFAPIAFAPIAEAMIAFgMIAFgPIAFgPIAEgOIAOAAQgGAUgHASIgOAig");
	this.shape_514.setTransform(69.775,132.6);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#333333").s().p("AgKA2IAAhIIANAAIAABIgAgMggIARgVIAIAIIgSATg");
	this.shape_515.setTransform(64.9,130.825);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#333333").s().p("AgRAlIgIgDIADgLIAHADQAFABAIAAQAHAAAEgCQAEgCAAgEQAAgFgEgEIgMgGIgIgDIgGgDQgDgCgCgEQgCgDAAgFQAAgKAIgGQAHgFALAAIAGABIAGAAIAFABIADABIgDALIgGgCIgLgBQgEAAgEACQgEACAAAFIAAAEIADAEIAFACIAGACIAJAFIAHADQADADABADQACAEAAAFQAAAKgIAFQgHAFgNAAQgKAAgFgBg");
	this.shape_516.setTransform(59.625,132.6);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#333333").s().p("AgRAlIgIgDIADgLIAHADQAFABAIAAQAHAAAEgCQAEgCAAgEQAAgFgEgEIgMgGIgIgDIgGgDQgDgCgCgEQgCgDAAgFQAAgKAIgGQAHgFALAAIAGABIAGAAIAFABIADABIgDALIgGgCIgLgBQgEAAgEACQgEACAAAFIAAAEIADAEIAFACIAGACIAJAFIAHADQADADABADQACAEAAAFQAAAKgIAFQgHAFgNAAQgKAAgFgBg");
	this.shape_517.setTransform(53.375,132.6);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_518.setTransform(46.125,132.625);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#333333").s().p("AgfAyIAAhfIAMgDQAGgBAKAAQAHAAAHADQAGACAFAFQAFAFACAHQADAHAAAJQAAAIgCAGQgCAHgEAFQgFAFgGADQgGADgHAAQgGAAgFgCIgHgDIAAAdgAgSgkIAAAtIAHAEQAEABAGAAQAEAAAEgCQAEgCADgDQACgEABgEIABgKQAAgNgGgHQgGgGgKAAIgJAAIgFABg");
	this.shape_519.setTransform(38.075,133.825);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#333333").s().p("AgeBBIAAhgIA5AAIAAAMIgsAAIAAAcIAoAAIAAALIgoAAIAAAiIAxAAIAAALgAgHgrIARgVIAIAIIgSATg");
	this.shape_520.setTransform(24.35,129.725);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#333333").s().p("AgGAGQgCgDAAgDQAAgDACgDQADgCADAAQAEAAADACQACADAAADQAAADgCADQgDAEgEAAQgDAAgDgEg");
	this.shape_521.setTransform(88.475,100.1);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#333333").s().p("AgRAlIgIgDIADgLIAHACQAFACAIAAQAHAAAEgCQAEgCAAgEQAAgGgEgCIgMgGIgIgEIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADADIAFADIAGADIAJADIAHAEQADADABADQACAEAAAFQAAAKgIAFQgHAFgNAAQgKAAgFgBg");
	this.shape_522.setTransform(83.625,97.2);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgDgFQgCgEAAgGQABgGACgEQADgFADgCIAKgDIALgBIAEAAIAEAAIAEABIACAAIAAgEIgBgGIgCgGIgFgDQgEgCgEAAIgLABIgIACIgBgLIAJgCIALgBQAIAAAGACQAFACADADQADAEACAFQABAFAAAGIAAAtIgEABIgHABIgJABIgIAAIgKgBgAgCADIgGACIgEADQgCADgBADQAAAIAFACQAFADAGAAIAIAAIAHgBIAAgVIgFgBIgHgBIgGAAg");
	this.shape_523.setTransform(76.65,97.2);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#333333").s().p("AgKA0QgGgCgFgFQgFgFgDgHQgCgHAAgJQAAgJACgGQADgHAEgFQAEgFAGgCQAGgDAHAAQAGAAAFABIAHAEIAAglIANgCIAABpIgLADIgRABQgHAAgHgDgAgGgGQgEACgCADQgDACgBAFQgCAGAAAFQAAANAHAHQAGAHAKgBIAIAAIAGgBIAAgtQgCgCgEgBQgFgCgFAAQgFAAgEACg");
	this.shape_524.setTransform(68.85,95.5);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#333333").s().p("AgKA2IAAhIIAMAAIAABIgAgMggIARgVIAIAIIgTATg");
	this.shape_525.setTransform(63.6,95.425);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#333333").s().p("AgNAjQgFgDgEgEQgDgFgCgGQgBgGAAgHIAAgoIANAAIAAAlQAAANAEAGQAEAGAJAAIAEAAIAEgBIAEAAIACgBIAAg8IANAAIAABGIgLACIgRABQgIAAgGgCg");
	this.shape_526.setTransform(57.375,97.275);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#333333").s().p("AgUAlIAAhEIAMgEQAHgBAHAAIAEAAIAEABIAEAAIADABIgCALIgFgBIgKgBIgGABIgFABIAAA8g");
	this.shape_527.setTransform(51.175,97.125);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#333333").s().p("AgHAuQgGgCgCgDQgDgEgCgGIgBgMIAAhAIAOgDIAAAXIAaAAIAAALIgaAAIAAAhIAAAJIADAGQACABACABIAFABQAFAAAEgBIAGgCIACALIgHACQgFACgHgBQgGAAgEgCg");
	this.shape_528.setTransform(45.55,96.15);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#333333").s().p("AgRAlIgIgDIADgLIAHACQAFACAIAAQAHAAAEgCQAEgCAAgEQAAgGgEgCIgMgGIgIgEIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADADIAFADIAGADIAJADIAHAEQADADABADQACAEAAAFQAAAKgIAFQgHAFgNAAQgKAAgFgBg");
	this.shape_529.setTransform(39.225,97.2);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#333333").s().p("AgKAjQgHgDgFgEQgEgGgCgHQgDgGAAgIQAAgKADgGQADgIAFgFQAEgFAGgCQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAGAMgBIALgBIAHgCIACALIgIADIgOABQgIAAgHgDgAgFgYIgGAEQgDADgBAEIgCAHIAjAAQABgIgFgHQgFgFgIAAQgDAAgDACg");
	this.shape_530.setTransform(32.125,97.2);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#333333").s().p("AgJA0QgHgCgFgFQgEgFgDgHQgDgHAAgJQAAgJADgGQABgHAEgFQAFgFAGgCQAGgDAHAAQAGAAAFABIAHAEIAAglIANgCIAABpIgMADIgPABQgIAAgGgDgAgGgGQgEACgCADQgDACgBAFQgBAGgBAFQABANAGAHQAHAHAJgBIAJAAIAFgBIAAgtQgCgCgFgBQgEgCgGAAQgEAAgEACg");
	this.shape_531.setTransform(23.9,95.5);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#333333").s().p("AAkAlIAAglIAAgLQAAgEgCgEQgCgDgDgBQgDgCgFAAQgGAAgFACIgFADIABAIIABAJIAAAoIgNAAIAAglIAAgLQgBgEgBgEQgCgDgDgBQgDgCgFAAIgEABIgEAAIgEAAIgDABIAAA8IgMAAIAAhFIAMgDQAHgBAKAAQAGAAAFACQAFACADADIACgCIAGgCIAHgCIAIgBQAIAAAFACQAGADACAEQADAFABAGIACANIAAAog");
	this.shape_532.setTransform(608.9,79.425);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgDgEQgBgFAAgGQgBgGADgFQADgEAEgBIAJgFIALgBIAEAAIAEABIAEAAIACABIAAgDIgBgHIgDgGIgEgEQgEgBgEAAIgLABIgHACIgCgLIAJgCIALgBQAIAAAGACQAFACADADQADAFACAEQACAFgBAHIAAAtIgEAAIgHABIgJABIgIAAIgKgBgAgCADIgGACIgEAEQgDACAAADQAAAHAFAEQAFACAGAAIAIAAIAHgBIAAgWIgFgBIgIgBIgFABg");
	this.shape_533.setTransform(599,79.5);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#333333").s().p("AgMBBIgFgCIACgLIADABIAEABQAGgBACgEQADgEAAgHIAAhHIANAAIAABGQAAAOgGAHQgHAGgLABIgEAAgAADgxQgCgCAAgEQAAgEACgCQADgCADgBQAEABACACQADACAAAEQAAAEgDACQgCACgEAAQgDAAgDgCg");
	this.shape_534.setTransform(592.875,79.3);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#333333").s().p("AgKAkQgHgDgFgFQgEgFgCgHQgDgIAAgHQAAgJADgIQADgHAFgEQAEgFAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAACIgxAAQABAMAGAGQAFAFAMABIALgBIAHgDIACALIgIADIgOABQgIAAgHgCgAgFgZIgGAFQgDADgBADIgCAIIAjAAQABgIgFgHQgFgFgIAAQgDAAgDABg");
	this.shape_535.setTransform(588.075,79.5);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#333333").s().p("AgRAlIgIgDIADgLIAHADQAFABAIAAQAHAAAEgCQAEgCAAgEQAAgFgEgEIgMgGIgIgDIgGgDQgDgCgCgEQgCgDAAgFQAAgKAIgGQAHgFALAAIAGABIAGAAIAFABIADABIgDALIgGgCIgLgBQgEAAgEACQgEACAAAFIAAAEIADAEIAFACIAGACIAJAFIAHADQADADABADQACAEAAAFQAAAKgIAFQgHAFgNAAQgKAAgFgBg");
	this.shape_536.setTransform(581.075,79.5);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#333333").s().p("AgRAlIgIgDIADgLIAHADQAFABAIAAQAHAAAEgCQAEgCAAgEQAAgFgEgEIgMgGIgIgDIgGgDQgDgCgCgEQgCgDAAgFQAAgKAIgGQAHgFALAAIAGABIAGAAIAFABIADABIgDALIgGgCIgLgBQgEAAgEACQgEACAAAFIAAAEIADAEIAFACIAGACIAJAFIAHADQADADABADQACAEAAAFQAAAKgIAFQgHAFgNAAQgKAAgFgBg");
	this.shape_537.setTransform(570.325,79.5);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgCgEQgCgFAAgGQgBgGADgFQACgEAFgBIAKgFIAKgBIAEAAIAEABIADAAIADABIAAgDIgBgHIgDgGIgEgEQgEgBgEAAIgLABIgHACIgCgLIAJgCIALgBQAIAAAFACQAGACADADQADAFACAEQACAFgBAHIAAAtIgEAAIgHABIgIABIgJAAIgKgBgAgCADIgGACIgFAEQgCACAAADQABAHAEAEQAFACAGAAIAIAAIAHgBIAAgWIgFgBIgIgBIgFABg");
	this.shape_538.setTransform(563.35,79.5);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#333333").s().p("AgNAjQgFgDgEgEQgDgFgCgGQgBgGAAgHIAAgoIANAAIAAAlQAAANAEAGQAEAGAJAAIAEAAIAEgBIAEAAIACgBIAAg8IANAAIAABGIgLACIgRABQgIAAgGgCg");
	this.shape_539.setTransform(555.825,79.575);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#333333").s().p("AgRAlIgIgDIADgLIAHADQAFABAIAAQAHAAAEgCQAEgCAAgEQAAgFgEgEIgMgGIgIgDIgGgDQgDgCgCgEQgCgDAAgFQAAgKAIgGQAHgFALAAIAGABIAGAAIAFABIADABIgDALIgGgCIgLgBQgEAAgEACQgEACAAAFIAAAEIADAEIAFACIAGACIAJAFIAHADQADADABADQACAEAAAFQAAAKgIAFQgHAFgNAAQgKAAgFgBg");
	this.shape_540.setTransform(548.725,79.5);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#333333").s().p("AgRAlIgIgDIADgLIAHADQAFABAIAAQAHAAAEgCQAEgCAAgEQAAgFgEgEIgMgGIgIgDIgGgDQgDgCgCgEQgCgDAAgFQAAgKAIgGQAHgFALAAIAGABIAGAAIAFABIADABIgDALIgGgCIgLgBQgEAAgEACQgEACAAAFIAAAEIADAEIAFACIAGACIAJAFIAHADQADADABADQACAEAAAFQAAAKgIAFQgHAFgNAAQgKAAgFgBg");
	this.shape_541.setTransform(537.975,79.5);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#333333").s().p("AgLAlIgJgEQgDgDgCgEQgDgFAAgGQAAgGADgFQACgEAEgBIAKgFIALgBIAEAAIAEABIADAAIACABIAAgDIAAgHIgCgGIgGgEQgDgBgEAAIgLABIgIACIgBgLIAIgCIAMgBQAIAAAFACQAGACADADQAEAFABAEQACAFAAAHIAAAtIgGAAIgGABIgJABIgIAAIgLgBgAgCADIgGACIgFAEQgBACAAADQgBAHAFAEQAEACAIAAIAIAAIAFgBIAAgWIgEgBIgHgBIgGABg");
	this.shape_542.setTransform(531,79.5);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#333333").s().p("AgKAkQgHgDgFgFQgEgFgCgHQgDgIAAgHQAAgJADgIQADgHAFgEQAEgFAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAACIgxAAQABAMAGAGQAFAFAMABIALgBIAHgDIACALIgIADIgOABQgIAAgHgCgAgFgZIgGAFQgDADgBADIgCAIIAjAAQABgIgFgHQgFgFgIAAQgDAAgDABg");
	this.shape_543.setTransform(519.075,79.5);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#333333").s().p("AgNAjQgFgDgEgEQgDgFgCgGQgBgGAAgHIAAgoIANAAIAAAlQAAANAEAGQAEAGAJAAIAEAAIAEgBIAEAAIACgBIAAg8IANAAIAABGIgLACIgRABQgIAAgGgCg");
	this.shape_544.setTransform(511.125,79.575);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#333333").s().p("AATAyIAAgdIgHADQgFACgGAAQgHAAgGgDQgGgDgEgFQgFgFgBgHQgDgGAAgIQAAgJADgHQADgHAEgFQAFgFAGgCQAIgDAHAAQAJAAAGABIAMADIAABfgAgLgfQgGAHgBANQABAGABAEQABAEADAEQACADAEACQAEACAEAAQAGAAAFgBIAGgEIAAgtIgFgBIgJAAQgKAAgGAGg");
	this.shape_545.setTransform(502.8,80.725);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#333333").s().p("AgRAlIgIgDIADgLIAHADQAFABAIAAQAHAAAEgCQAEgCAAgEQAAgFgEgEIgMgGIgIgDIgGgDQgDgCgCgEQgCgDAAgFQAAgKAIgGQAHgFALAAIAGABIAGAAIAFABIADABIgDALIgGgCIgLgBQgEAAgEACQgEACAAAFIAAAEIADAEIAFACIAGACIAJAFIAHADQADADABADQACAEAAAFQAAAKgIAFQgHAFgNAAQgKAAgFgBg");
	this.shape_546.setTransform(491.275,79.5);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#333333").s().p("AgKAkQgHgDgFgFQgEgFgCgHQgDgIAAgHQAAgJADgIQADgHAFgEQAEgFAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAACIgxAAQABAMAGAGQAFAFAMABIALgBIAHgDIACALIgIADIgOABQgIAAgHgCgAgFgZIgGAFQgDADgBADIgCAIIAjAAQABgIgFgHQgFgFgIAAQgDAAgDABg");
	this.shape_547.setTransform(484.175,79.5);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#333333").s().p("AgIAuQgEgCgEgDQgCgEgBgFIgBgNIAAhAIAMgCIAAAWIAbAAIAAALIgbAAIAAAgIABAJIACAHQACACADAAIAFABQAFAAAFgCIAEgBIACAKIgGADQgFACgHAAQgGgBgFgCg");
	this.shape_548.setTransform(477.85,78.45);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#333333").s().p("AARAlIAAglIgBgLQgCgFgCgDQgCgDgDgBQgEgCgDAAIgFABIgEAAIgEAAIgDABIAAA8IgMAAIAAhFIALgDQAIgBAJAAQAJAAAFACQAGADAEAEQACAFACAGQACAGgBAHIAAAog");
	this.shape_549.setTransform(470.65,79.425);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgDgEQgCgFAAgGQABgGACgFQADgEADgBIAKgFIALgBIAEAAIAEABIAEAAIACABIAAgDIgBgHIgCgGIgFgEQgEgBgEAAIgLABIgIACIgBgLIAJgCIALgBQAIAAAGACQAFACADADQADAFACAEQABAFAAAHIAAAtIgEAAIgHABIgJABIgIAAIgKgBgAgCADIgGACIgEAEQgCACgBADQAAAHAFAEQAFACAGAAIAIAAIAHgBIAAgWIgFgBIgHgBIgGABg");
	this.shape_550.setTransform(462.75,79.5);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#333333").s().p("AgRAlIgIgDIADgLIAHADQAFABAIAAQAHAAAEgCQAEgCAAgEQAAgFgEgEIgMgGIgIgDIgGgDQgDgCgCgEQgCgDAAgFQAAgKAIgGQAHgFALAAIAGABIAGAAIAFABIADABIgDALIgGgCIgLgBQgEAAgEACQgEACAAAFIAAAEIADAEIAFACIAGACIAJAFIAHADQADADABADQACAEAAAFQAAAKgIAFQgHAFgNAAQgKAAgFgBg");
	this.shape_551.setTransform(451.675,79.5);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#333333").s().p("AgLAlIgJgEQgDgDgCgEQgDgFAAgGQAAgGADgFQACgEAEgBIALgFIAKgBIAEAAIAEABIADAAIACABIAAgDIAAgHIgDgGIgFgEQgDgBgEAAIgLABIgIACIgBgLIAIgCIAMgBQAIAAAFACQAGACADADQAEAFABAEQABAFABAHIAAAtIgGAAIgGABIgIABIgJAAIgLgBgAgCADIgGACIgFAEQgBACAAADQAAAHAEAEQAEACAIAAIAIAAIAFgBIAAgWIgEgBIgIgBIgFABg");
	this.shape_552.setTransform(444.7,79.5);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#333333").s().p("AgQAxIgKgCIACgMIAKADIAMABQAKAAAFgEQAGgFAAgKIAAgDIgHADQgFABgGAAQgGABgGgDQgFgCgFgFQgEgEgDgGQgCgGAAgJQAAgIACgGQADgHAEgFQAFgFAGgDQAHgDAHAAQAJABAHABIALADIAABAQAAAQgIAHQgJAIgRAAIgNgBgAgLgfQgGAHAAALQAAAHACAEQACADACADQADADAEACIAGABQAFAAAFgBIAGgEIAAgpIgFgCIgJAAQgJAAgGAHg");
	this.shape_553.setTransform(436.975,80.75);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#333333").s().p("AgGA0IAAhIIANAAIAABIgAgFgkQgDgCABgEQgBgEADgCQADgCACgBQAEABACACQACACABAEQgBAEgCACQgCACgEAAQgCAAgDgCg");
	this.shape_554.setTransform(431.4,78);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#333333").s().p("AAkAlIAAglIAAgLQAAgEgDgEQgBgDgDgBQgDgCgFAAQgGAAgFACIgFADIABAIIABAJIAAAoIgMAAIAAglIgBgLQgBgEgCgEQgBgDgDgBQgDgCgFAAIgEABIgEAAIgEAAIgDABIAAA8IgMAAIAAhFIALgDQAIgBAJAAQAIAAAEACQAFACADADIADgCIAEgCIAIgCIAIgBQAIAAAFACQAFADADAEQADAFACAGIABANIAAAog");
	this.shape_555.setTransform(423.7,79.425);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#333333").s().p("AgFA0IAAhIIALAAIAABIgAgFgkQgCgCAAgEQAAgEACgCQADgCACgBQAEABACACQADACAAAEQAAAEgDACQgCACgEAAQgCAAgDgCg");
	this.shape_556.setTransform(415.9,78);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#333333").s().p("AARAlIAAglIgCgLQgBgFgCgDQgCgDgDgBQgDgCgEAAIgFABIgEAAIgEAAIgCABIAAA8IgOAAIAAhFIANgDQAHgBAJAAQAIAAAGACQAGADADAEQAEAFABAGQABAGABAHIAAAog");
	this.shape_557.setTransform(410.15,79.425);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#333333").s().p("AgFA0IAAhIIALAAIAABIgAgFgkQgDgCAAgEQAAgEADgCQADgCACgBQADABADACQADACgBAEQABAEgDACQgDACgDAAQgCAAgDgCg");
	this.shape_558.setTransform(404.35,78);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#333333").s().p("AgRAlIgIgDIADgLIAHADQAFABAIAAQAHAAAEgCQAEgCAAgEQAAgFgEgEIgMgGIgIgDIgGgDQgDgCgCgEQgCgDAAgFQAAgKAIgGQAHgFALAAIAGABIAGAAIAFABIADABIgDALIgGgCIgLgBQgEAAgEACQgEACAAAFIAAAEIADAEIAFACIAGACIAJAFIAHADQADADABADQACAEAAAFQAAAKgIAFQgHAFgNAAQgKAAgFgBg");
	this.shape_559.setTransform(394.975,79.5);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#333333").s().p("AgKAkQgHgDgFgFQgEgFgCgHQgDgIAAgHQAAgJADgIQADgHAFgEQAEgFAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAACIgxAAQABAMAGAGQAFAFAMABIALgBIAHgDIACALIgIADIgOABQgIAAgHgCgAgFgZIgGAFQgDADgBADIgCAIIAjAAQABgIgFgHQgFgFgIAAQgDAAgDABg");
	this.shape_560.setTransform(387.875,79.5);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#333333").s().p("AgJA1QgHgDgFgFQgEgFgDgHQgDgHAAgJQAAgIADgIQACgFADgFQAFgFAGgDQAGgDAHAAQAGAAAFACIAHADIAAglIANgCIAABqIgMACIgQABQgGAAgHgCgAgGgHQgEACgDAEQgCACgBAGQgCAFABAFQAAANAGAHQAGAGAKABIAIgBIAGgBIAAgtQgCgCgFgCQgEgBgGAAQgEAAgEABg");
	this.shape_561.setTransform(379.65,77.8);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#333333").s().p("AgLAlIgJgEQgDgDgCgEQgCgFAAgGQAAgGACgFQADgEAEgBIAKgFIAKgBIAEAAIAEABIADAAIACABIAAgDIAAgHIgDgGIgEgEQgEgBgEAAIgLABIgHACIgCgLIAIgCIAMgBQAIAAAFACQAGACADADQADAFACAEQABAFABAHIAAAtIgGAAIgGABIgIABIgJAAIgLgBgAgCADIgGACIgFAEQgCACABADQAAAHAEAEQAEACAIAAIAIAAIAFgBIAAgWIgEgBIgIgBIgFABg");
	this.shape_562.setTransform(371.9,79.5);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#333333").s().p("AgJA1QgHgDgFgFQgEgFgDgHQgDgHAAgJQAAgIADgIQABgFAEgFQAFgFAGgDQAGgDAHAAQAGAAAFACIAHADIAAglIANgCIAABqIgMACIgPABQgIAAgGgCgAgGgHQgEACgCAEQgDACgBAGQgBAFgBAFQABANAGAHQAHAGAJABIAJgBIAFgBIAAgtQgCgCgFgCQgEgBgGAAQgEAAgEABg");
	this.shape_563.setTransform(364.1,77.8);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#333333").s().p("AgFA0IAAhIIAMAAIAABIgAgFgkQgDgCAAgEQAAgEADgCQADgCACgBQADABADACQADACgBAEQABAEgDACQgDACgDAAQgCAAgDgCg");
	this.shape_564.setTransform(358.45,78);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#333333").s().p("AAQAlIAAglIgBgLQgBgFgBgDQgCgDgEgBQgEgCgEAAIgEABIgFAAIgDAAIgCABIAAA8IgOAAIAAhFIAMgDQAIgBAJAAQAJAAAFACQAGADADAEQADAFACAGQACAGAAAHIAAAog");
	this.shape_565.setTransform(352.7,79.425);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#333333").s().p("AgNAjQgFgDgEgEQgDgFgCgGQgBgGAAgHIAAgoIANAAIAAAlQAAANAEAGQAEAGAJAAIAEAAIAEgBIAEAAIACgBIAAg8IANAAIAABGIgLACIgRABQgIAAgGgCg");
	this.shape_566.setTransform(344.575,79.575);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#333333").s().p("AgRAlIgIgDIADgLIAHADQAFABAIAAQAHAAAEgCQAEgCAAgEQAAgFgEgEIgMgGIgIgDIgGgDQgDgCgCgEQgCgDAAgFQAAgKAIgGQAHgFALAAIAGABIAGAAIAFABIADABIgDALIgGgCIgLgBQgEAAgEACQgEACAAAFIAAAEIADAEIAFACIAGACIAJAFIAHADQADADABADQACAEAAAFQAAAKgIAFQgHAFgNAAQgKAAgFgBg");
	this.shape_567.setTransform(332.975,79.5);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#333333").s().p("AgLAlIgJgEQgDgDgCgEQgCgFAAgGQAAgGACgFQACgEAFgBIAKgFIAKgBIAEAAIAEABIADAAIACABIAAgDIAAgHIgDgGIgEgEQgEgBgEAAIgLABIgHACIgCgLIAIgCIAMgBQAIAAAFACQAGACADADQADAFACAEQABAFABAHIAAAtIgGAAIgGABIgIABIgJAAIgLgBgAgCADIgGACIgFAEQgCACAAADQABAHAEAEQAEACAIAAIAIAAIAFgBIAAgWIgEgBIgIgBIgFABg");
	this.shape_568.setTransform(326,79.5);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#333333").s().p("AgRAlIgIgDIADgLIAHADQAFABAIAAQAHAAAEgCQAEgCAAgEQAAgFgEgEIgMgGIgIgDIgGgDQgDgCgCgEQgCgDAAgFQAAgKAIgGQAHgFALAAIAGABIAGAAIAFABIADABIgDALIgGgCIgLgBQgEAAgEACQgEACAAAFIAAAEIADAEIAFACIAGACIAJAFIAHADQADADABADQACAEAAAFQAAAKgIAFQgHAFgNAAQgKAAgFgBg");
	this.shape_569.setTransform(314.925,79.5);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgDgEQgCgFABgGQAAgGACgFQADgEADgBIAKgFIALgBIAEAAIAEABIAEAAIACABIAAgDIgBgHIgCgGIgGgEQgDgBgEAAIgLABIgIACIgBgLIAJgCIALgBQAIAAAGACQAFACADADQADAFACAEQABAFAAAHIAAAtIgEAAIgHABIgJABIgIAAIgKgBgAgCADIgGACIgEAEQgCACgBADQAAAHAFAEQAFACAGAAIAIAAIAHgBIAAgWIgFgBIgHgBIgGABg");
	this.shape_570.setTransform(307.95,79.5);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#333333").s().p("AgKA1QgGgDgFgFQgFgFgDgHQgCgHAAgJQAAgIACgIQADgFAEgFQAEgFAGgDQAGgDAHAAQAGAAAFACIAHADIAAglIANgCIAABqIgLACIgQABQgIAAgHgCgAgGgHQgEACgDAEQgCACgBAGQgCAFAAAFQAAANAHAHQAGAGAKABIAJgBIAFgBIAAgtQgCgCgEgCQgFgBgFAAQgFAAgEABg");
	this.shape_571.setTransform(300.15,77.8);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_572.setTransform(292.125,79.525);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#333333").s().p("AgIAuQgEgCgEgDQgDgEAAgFIgBgNIAAhAIAMgCIAAAWIAbAAIAAALIgbAAIAAAgIABAJIADAHQABACADAAIAFABQAGAAAEgCIAEgBIADAKIgHADQgFACgGAAQgGgBgGgCg");
	this.shape_573.setTransform(285.55,78.45);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#333333").s().p("AgUAlIAAhEIAMgEQAHgBAHAAIAEAAIAEABIAEAAIADABIgCALIgFgBIgKgBIgGABIgFABIAAA8g");
	this.shape_574.setTransform(275.625,79.425);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#333333").s().p("AgFA0IAAhIIAMAAIAABIgAgFgkQgDgCAAgEQAAgEADgCQADgCACgBQADABADACQADACgBAEQABAEgDACQgDACgDAAQgCAAgDgCg");
	this.shape_575.setTransform(270.7,78);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#333333").s().p("AgNAjQgFgDgEgEQgDgFgCgGQgBgGAAgHIAAgoIANAAIAAAlQAAANAEAGQAEAGAJAAIAEAAIAEgBIAEAAIACgBIAAg8IANAAIAABGIgLACIgRABQgIAAgGgCg");
	this.shape_576.setTransform(264.875,79.575);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#333333").s().p("AgUAlIAAhEIAMgEQAHgBAHAAIAEAAIAEABIAEAAIADABIgCALIgFgBIgKgBIgGABIgFABIAAA8g");
	this.shape_577.setTransform(258.675,79.425);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#333333").s().p("AgIAuQgEgCgEgDQgCgEgBgFIgBgNIAAhAIAMgCIAAAWIAbAAIAAALIgbAAIAAAgIABAJIADAHQABACADAAIAFABQAFAAAFgCIAEgBIADAKIgHADQgFACgGAAQgGgBgGgCg");
	this.shape_578.setTransform(253.05,78.45);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#333333").s().p("AgRAlIgIgDIADgLIAHADQAFABAIAAQAHAAAEgCQAEgCAAgEQAAgFgEgEIgMgGIgIgDIgGgDQgDgCgCgEQgCgDAAgFQAAgKAIgGQAHgFALAAIAGABIAGAAIAFABIADABIgDALIgGgCIgLgBQgEAAgEACQgEACAAAFIAAAEIADAEIAFACIAGACIAJAFIAHADQADADABADQACAEAAAFQAAAKgIAFQgHAFgNAAQgKAAgFgBg");
	this.shape_579.setTransform(246.725,79.5);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#333333").s().p("AgKAkQgHgDgFgFQgEgFgCgHQgDgIAAgHQAAgJADgIQADgHAFgEQAEgFAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAACIgxAAQABAMAGAGQAFAFAMABIALgBIAHgDIACALIgIADIgOABQgIAAgHgCgAgFgZIgGAFQgDADgBADIgCAIIAjAAQABgIgFgHQgFgFgIAAQgDAAgDABg");
	this.shape_580.setTransform(239.625,79.5);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#333333").s().p("AgKA1QgGgDgFgFQgEgFgEgHQgCgHAAgJQAAgIACgIQACgFAFgFQAEgFAGgDQAGgDAHAAQAGAAAFACIAHADIAAglIANgCIAABqIgLACIgRABQgGAAgIgCgAgGgHQgEACgDAEQgCACgBAGQgBAFAAAFQgBANAHAHQAGAGAKABIAIgBIAGgBIAAgtQgCgCgFgCQgEgBgFAAQgFAAgEABg");
	this.shape_581.setTransform(231.4,77.8);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#333333").s().p("AgKA1QgHgDgFgFQgEgFgCgHQgDgIAAgHQAAgKADgIQADgGAFgEQAEgFAGgDQAGgCAGAAQAOAAAIAJQAIAJAAASIAAACIAAACIgxAAQABAMAGAGQAFAFAMABIALgBIAHgDIACALIgIADIgOABQgIAAgHgCgAgFgIIgGAFQgDADgBACIgCAIIAjAAQABgIgFgGQgFgFgIAAQgDAAgDABgAgHghIARgVIAIAIIgTAUg");
	this.shape_582.setTransform(219.025,77.8);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_583.setTransform(206.525,79.525);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#333333").s().p("AgFAlIgOgiQgIgSgFgUIAOAAIAEAOIAFAPIAFAPIAEAMIAFgMIAFgPIAFgPIAEgOIAOAAQgGAUgHASIgOAig");
	this.shape_584.setTransform(198.925,79.5);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#333333").s().p("AgGA0IAAhIIANAAIAABIgAgFgkQgCgCgBgEQABgEACgCQACgCADgBQADABADACQADACgBAEQABAEgDACQgDACgDAAQgDAAgCgCg");
	this.shape_585.setTransform(193.65,78);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#333333").s().p("AgHAuQgGgCgCgDQgEgEgBgFIgBgNIAAhAIAOgCIAAAWIAaAAIAAALIgaAAIAAAgIAAAJIADAHQACACACAAIAFABQAGAAADgCIAGgBIACAKIgHADQgFACgGAAQgHgBgEgCg");
	this.shape_586.setTransform(189.45,78.45);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#333333").s().p("AgKAkQgHgDgFgFQgEgFgCgHQgDgIAAgHQAAgJADgIQADgHAFgEQAEgFAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAACIgxAAQABAMAGAGQAFAFAMABIALgBIAHgDIACALIgIADIgOABQgIAAgHgCgAgFgZIgGAFQgDADgBADIgCAIIAjAAQABgIgFgHQgFgFgIAAQgDAAgDABg");
	this.shape_587.setTransform(182.275,79.5);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#333333").s().p("AgMBBIgFgCIACgLIADABIAEABQAGgBACgEQADgEAAgHIAAhHIANAAIAABGQAAAOgGAHQgHAGgLABIgEAAgAADgxQgCgCAAgEQAAgEACgCQADgCADgBQAEABACACQADACAAAEQAAAEgDACQgCACgEAAQgDAAgDgCg");
	this.shape_588.setTransform(175.725,79.3);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#333333").s().p("AgUA2IgLgCIAAhoIANgCIAAAnIAHgDQAFgCAGAAQAHAAAGADQAGADAFAFQAEAFACAFQACAIAAAIQAAAJgDAHQgCAHgFAFQgFAFgGADQgHACgHAAIgRgBgAgLgHIgHAEIAAAtIAFABIAJABQAKgBAGgGQAGgHAAgNIgBgKQgBgGgCgCQgDgEgEgCQgEgBgEAAQgGAAgEABg");
	this.shape_589.setTransform(170.975,77.8);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_590.setTransform(162.525,79.525);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#333333").s().p("AgRAwQgIgEgHgGQgGgGgEgKQgDgJAAgNQAAgLADgKQAEgJAGgHQAHgGAIgDQAJgEAJAAQAJAAAIAEQAIADAHAGQAGAHAEAJQADAKAAALQAAANgDAJQgEAKgGAGQgHAGgIAEQgIADgJAAQgJAAgJgDgAgNgjQgFADgFAFQgEAFgCAHQgCAHAAAIQAAAJACAHQACAHAEAFQAFAGAFACQAHADAGAAQAHAAAGgDQAGgCAFgGQAEgFABgHQADgHAAgJQAAgIgDgHQgBgHgEgFQgFgFgGgDQgGgDgHAAQgGAAgHADg");
	this.shape_591.setTransform(148.45,78.275);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#333333").s().p("AgGAHQgCgDAAgEQAAgDACgDQADgDADAAQAEAAADADQACADAAADQAAAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_592.setTransform(136.775,82.4);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#333333").s().p("AgKAlIgKgEQgDgDgDgEQgCgFAAgGQABgGACgFQADgEADgBIAKgFIALgBIAEAAIAEABIAEAAIACABIAAgDIgBgHIgCgGIgGgEQgDgBgEAAIgLABIgIACIgBgLIAJgCIALgBQAIAAAGACQAFACADADQADAFACAEQABAFAAAHIAAAtIgEAAIgHABIgJABIgIAAIgKgBgAgCADIgGACIgEAEQgCACAAADQgBAHAFAEQAFACAGAAIAIAAIAHgBIAAgWIgFgBIgHgBIgGABg");
	this.shape_593.setTransform(131.2,79.5);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#333333").s().p("AARA2IAAgmIgBgLQgBgFgDgCQgBgDgEgBQgEgCgDAAIgFABIgEAAIgEABIgDABIAAA7IgMAAIAAhpIAMgCIAAAlIAIgCIAIgBQAJAAAFACQAGADAEAEQADAFABAFQABAGAAAHIAAApg");
	this.shape_594.setTransform(123.8,77.725);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#333333").s().p("AgGAxQgFgEAAgKIAAhXIAMgCIAABXIAAAEQABABAAABQAAAAAAABQAAAAABAAQAAABAAAAIAEACIAFABIgCALQgLAAgFgGg");
	this.shape_595.setTransform(118.2,77.8);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#333333").s().p("AgLAlIgJgEQgDgDgCgEQgDgFAAgGQAAgGADgFQACgEAEgBIAKgFIALgBIAEAAIAEABIAEAAIABABIAAgDIAAgHIgCgGIgGgEQgDgBgEAAIgLABIgIACIgBgLIAIgCIAMgBQAIAAAGACQAFACADADQAEAFABAEQACAFAAAHIAAAtIgGAAIgGABIgJABIgIAAIgLgBgAgCADIgGACIgFAEQgBACAAADQgBAHAFAEQAEACAIAAIAIAAIAFgBIAAgWIgEgBIgHgBIgGABg");
	this.shape_596.setTransform(112.05,79.5);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#333333").s().p("AgIAuQgEgCgEgDQgCgEgBgFIgBgNIAAhAIAMgCIAAAWIAbAAIAAALIgbAAIAAAgIABAJIACAHQACACADAAIAFABQAFAAAFgCIAEgBIACAKIgGADQgFACgHAAQgGgBgFgCg");
	this.shape_597.setTransform(106.15,78.45);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#333333").s().p("AgLAlIgJgEQgDgDgCgEQgCgFgBgGQAAgGADgFQACgEAEgBIALgFIAKgBIAEAAIAEABIADAAIACABIAAgDIAAgHIgDgGIgFgEQgDgBgEAAIgLABIgIACIgBgLIAIgCIAMgBQAIAAAFACQAGACADADQAEAFABAEQABAFABAHIAAAtIgGAAIgGABIgIABIgJAAIgLgBgAgCADIgGACIgFAEQgBACAAADQAAAHAEAEQAEACAIAAIAIAAIAFgBIAAgWIgEgBIgIgBIgFABg");
	this.shape_598.setTransform(99.1,79.5);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#333333").s().p("AgUA2IgLgCIAAhoIANgCIAAAnIAHgDQAFgCAGAAQAHAAAGADQAGADAFAFQAEAFACAFQACAIAAAIQAAAJgDAHQgCAHgFAFQgFAFgGADQgHACgHAAIgRgBgAgLgHIgHAEIAAAtIAFABIAJABQAKgBAGgGQAGgHAAgNIgBgKQgBgGgCgCQgDgEgEgCQgEgBgEAAQgGAAgEABg");
	this.shape_599.setTransform(91.725,77.8);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#333333").s().p("AgKAkQgHgDgFgFQgEgFgCgHQgDgIAAgHQAAgJADgIQADgHAFgEQAEgFAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAACIgxAAQABAMAGAGQAFAFAMABIALgBIAHgDIACALIgIADIgOABQgIAAgHgCgAgFgZIgGAFQgDADgBADIgCAIIAjAAQABgIgFgHQgFgFgIAAQgDAAgDABg");
	this.shape_600.setTransform(78.925,79.5);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#333333").s().p("AgJA1QgHgDgFgFQgEgFgDgHQgDgHAAgJQAAgIADgIQACgFADgFQAFgFAGgDQAGgDAHAAQAGAAAFACIAHADIAAglIANgCIAABqIgMACIgPABQgIAAgGgCgAgGgHQgEACgCAEQgDACgBAGQgBAFgBAFQABANAGAHQAHAGAJABIAJgBIAFgBIAAgtQgCgCgFgCQgEgBgGAAQgEAAgEABg");
	this.shape_601.setTransform(70.7,77.8);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_602.setTransform(58.175,79.525);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#333333").s().p("AgfAyIAAhfIAMgDQAGgBAKAAQAHAAAHADQAGACAFAFQAFAFACAHQADAHAAAJQAAAIgCAGQgCAHgEAFQgFAFgGADQgGADgHAAQgGAAgFgCIgHgDIAAAdgAgSgkIAAAtIAHAEQAEABAGAAQAEAAAEgCQAEgCADgDQACgEABgEIABgKQAAgNgGgHQgGgGgKAAIgJAAIgFABg");
	this.shape_603.setTransform(50.125,80.725);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#333333").s().p("AAkAlIAAglIAAgLQAAgEgCgEQgCgDgDgBQgDgCgFAAQgGAAgFACIgFADIABAIIABAJIAAAoIgMAAIAAglIgBgLQgBgEgCgEQgBgDgDgBQgDgCgFAAIgEABIgEAAIgEAAIgDABIAAA8IgMAAIAAhFIALgDQAIgBAJAAQAIAAAEACQAFACADADIADgCIAEgCIAIgCIAIgBQAIAAAFACQAFADADAEQADAFACAGIABANIAAAog");
	this.shape_604.setTransform(39.85,79.425);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#333333").s().p("AgLAlIgJgEQgDgDgDgEQgCgFAAgGQABgGACgFQADgEADgBIAKgFIALgBIAEAAIAEABIAEAAIACABIAAgDIgBgHIgCgGIgGgEQgDgBgEAAIgLABIgIACIgBgLIAJgCIALgBQAIAAAGACQAFACADADQADAFACAEQABAFAAAHIAAAtIgEAAIgHABIgJABIgIAAIgLgBgAgCADIgGACIgEAEQgCACAAADQgBAHAFAEQAFACAGAAIAIAAIAHgBIAAgWIgFgBIgHgBIgGABg");
	this.shape_605.setTransform(29.95,79.5);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#333333").s().p("AAIAmQgIAAgGgCQgHgDgFgFQgEgFgCgHQgDgIAAgHQAAgIADgHQACgHAFgFQAEgGAHgCQAGgDAHAAIAKABIAJACIgDALIgGgCIgIAAQgKAAgGAGQgGAHAAANQAAAFABAFQACAFADADQACAEAFACQADABAHABIAJgBIAHgDIACAMIgEABIgEABIgGABIgGAAg");
	this.shape_606.setTransform(23.475,79.5);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_607.setTransform(610.275,61.825);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#333333").s().p("AARAlIAAglIgBgLQgBgFgDgDQgBgDgEgBQgEgCgDAAIgFABIgEAAIgEAAIgDABIAAA8IgMAAIAAhFIALgDQAIgBAJAAQAJAAAFACQAGADAEAEQADAFABAGQABAGAAAHIAAAog");
	this.shape_608.setTransform(602.15,61.725);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#333333").s().p("AgRAkIgIgCIADgLIAHACQAFACAIAAQAHAAAEgCQAEgCAAgFQAAgEgEgEIgMgFIgIgEIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADAEIAFACIAGADIAJADIAHAEQADACABAEQACADAAAGQAAAKgIAFQgHAFgNAAQgKAAgFgCg");
	this.shape_609.setTransform(589.475,61.8);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_610.setTransform(582.225,61.825);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#333333").s().p("AgKA0QgGgCgFgFQgFgFgDgHQgCgHAAgJQAAgIACgIQADgGAEgFQAEgEAGgDQAGgDAHAAQAGAAAFABIAHAEIAAglIANgCIAABqIgLACIgQABQgIAAgHgDgAgGgHQgEADgDADQgCADgBAFQgCAEAAAGQAAANAHAHQAGAGAKAAIAIAAIAGgBIAAgtQgCgCgEgCQgFgCgFAAQgFAAgEACg");
	this.shape_611.setTransform(573.75,60.1);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#333333").s().p("AgLAlIgJgEQgDgDgDgFQgCgEAAgGQAAgGADgEQACgFAEgBIAKgFIALgBIAEAAIAEABIAEAAIABABIAAgEIAAgGIgCgFIgGgFQgDgBgEAAIgLABIgIACIgBgLIAIgCIAMgBQAIAAAGACQAFACADAEQAEADABAGQACAFAAAGIAAAsIgGABIgGABIgJAAIgIABIgLgBgAgCADIgGACIgEADQgCADAAAEQgBAGAFAEQAEACAIAAIAHAAIAGgBIAAgVIgEgBIgHgCIgGABg");
	this.shape_612.setTransform(566,61.8);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#333333").s().p("AAQAlIAAglIgBgLQgBgFgCgDQgCgDgDgBQgDgCgFAAIgEABIgFAAIgDAAIgCABIAAA8IgOAAIAAhFIANgDQAHgBAJAAQAIAAAGACQAGADADAEQADAFACAGQABAGABAHIAAAog");
	this.shape_613.setTransform(558.55,61.725);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_614.setTransform(550.375,61.825);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#333333").s().p("AgFAzIAAhIIALAAIAABIgAgFgkQgCgCAAgEQAAgEACgDQACgBADAAQADAAADABQACADAAAEQAAAEgCACQgDADgDAAQgDAAgCgDg");
	this.shape_615.setTransform(544.5,60.3);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#333333").s().p("AAIAmQgIAAgGgDQgHgCgFgGQgEgFgCgGQgDgIAAgIQAAgHADgHQACgHAFgGQAEgFAHgDQAGgCAHAAIAKAAIAJADIgDAMIgGgDIgIgBQgKABgGAGQgGAHAAAMQAAAGABAFQACAFADADQACAEAFACQADACAHgBIAJgBIAHgBIACALIgEABIgEABIgGABIgGAAg");
	this.shape_616.setTransform(539.725,61.8);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#333333").s().p("AgFAzIAAhIIALAAIAABIgAgFgkQgDgCAAgEQAAgEADgDQACgBADAAQADAAADABQACADAAAEQAAAEgCACQgDADgDAAQgDAAgCgDg");
	this.shape_617.setTransform(534.5,60.3);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#333333").s().p("AgRAkIgIgCIADgLIAHACQAFACAIAAQAHAAAEgCQAEgCAAgFQAAgEgEgEIgMgFIgIgEIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADAEIAFACIAGADIAJADIAHAEQADACABAEQACADAAAGQAAAKgIAFQgHAFgNAAQgKAAgFgCg");
	this.shape_618.setTransform(529.625,61.8);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_619.setTransform(522.375,61.825);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#333333").s().p("AgfAyIAAhfIAMgDQAGgBAKAAQAHAAAHADQAGACAFAFQAFAFACAHQADAHAAAJQAAAIgCAGQgCAHgEAFQgFAFgGADQgGADgHAAQgGAAgFgCIgHgDIAAAdgAgSgkIAAAtIAHAEQAEABAGAAQAEAAAEgCQAEgCADgDQACgEABgEIABgKQAAgNgGgHQgGgGgKAAIgJAAIgFABg");
	this.shape_620.setTransform(514.325,63.025);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_621.setTransform(500.375,61.825);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#333333").s().p("AgLAzIgJgEQgDgDgCgEQgCgFgBgGQAAgGADgEQACgFAEgCIALgEIAKgBIAEAAIAEAAIADABIACAAIAAgDIAAgGIgDgFIgFgEQgDgCgEAAIgLABIgIACIgBgLIAIgCIAMgBQAIAAAFACQAGACADAEQAEAEABAFQABAFABAFIAAAuIgGAAIgGABIgIABIgJAAIgLgBgAgCARIgGACIgFAEQgBACAAAEQAAAHAEADQAEACAIAAIAIAAIAFgBIAAgVIgEgBIgHgBIgGAAgAgUgmIACgEIAEgEIADgDIAGgBIAFABIAEACIAEABIADABQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAgBIAEgEIAGADIgCAEIgCAEIgFADQgCACgDAAIgGgBIgEgCIgDgCIgDgBQgBAAgBAAQAAAAgBABQAAAAgBAAQAAABgBAAIgDAFg");
	this.shape_622.setTransform(492.4,60.375);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#333333").s().p("AgIAvQgFgCgDgEQgCgEgBgFIgBgNIAAhAIAMgDIAAAXIAbAAIAAALIgbAAIAAAhIABAJIACAFQADACACABIAFABQAGAAAEgCIAEgBIACAKIgGADQgFABgHABQgGAAgFgCg");
	this.shape_623.setTransform(486.5,60.75);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#333333").s().p("AgRAkIgIgCIADgLIAHACQAFACAIAAQAHAAAEgCQAEgCAAgFQAAgEgEgEIgMgFIgIgEIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADAEIAFACIAGADIAJADIAHAEQADACABAEQACADAAAGQAAAKgIAFQgHAFgNAAQgKAAgFgCg");
	this.shape_624.setTransform(480.175,61.8);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#333333").s().p("AgKAjQgHgCgFgGQgEgFgCgGQgDgIAAgIQAAgJADgHQADgHAFgEQAEgFAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAFAMAAIALgBIAHgCIACALIgIADIgOABQgIAAgHgDgAgFgZIgGAFQgDADgBAEIgCAHIAjAAQABgJgFgFQgFgGgIAAQgDAAgDABg");
	this.shape_625.setTransform(473.075,61.8);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#333333").s().p("AgKAjQgHgCgFgGQgEgFgCgGQgDgIAAgIQAAgJADgHQADgHAFgEQAEgFAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAFAMAAIALgBIAHgCIACALIgIADIgOABQgIAAgHgDgAgFgZIgGAFQgDADgBAEIgCAHIAjAAQABgJgFgFQgFgGgIAAQgDAAgDABg");
	this.shape_626.setTransform(459.725,61.8);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#333333").s().p("AgNAjQgFgDgEgEQgDgFgCgGQgBgGAAgHIAAgoIANAAIAAAlQAAANAEAGQAEAGAJAAIAEAAIAEgBIAEAAIACgBIAAg8IANAAIAABGIgLACIgRABQgIAAgGgCg");
	this.shape_627.setTransform(451.775,61.875);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#333333").s().p("AATAyIAAgdIgHADQgFACgGAAQgHAAgGgDQgGgDgFgFQgDgFgDgHQgCgGAAgIQAAgJACgHQADgHAFgFQAFgFAHgCQAHgDAGAAQAKAAAHABIALADIAABfgAgLgfQgHAHABANQAAAGABAEQABAEACAEQADADAEACQAEACAEAAQAGAAAEgBIAHgEIAAgtIgFgBIgJAAQgKAAgGAGg");
	this.shape_628.setTransform(443.45,63.025);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#333333").s().p("AgKAjQgHgCgFgGQgEgFgCgGQgDgIAAgIQAAgJADgHQADgHAFgEQAEgFAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAFAMAAIALgBIAHgCIACALIgIADIgOABQgIAAgHgDgAgFgZIgGAFQgDADgBAEIgCAHIAjAAQABgJgFgFQgFgGgIAAQgDAAgDABg");
	this.shape_629.setTransform(430.075,61.8);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#333333").s().p("AgHAvQgGgCgCgEQgDgEgBgFIgCgNIAAhAIAOgDIAAAXIAaAAIAAALIgaAAIAAAhIAAAJIACAFQACACADABIAFABQAFAAAEgCIAFgBIACAKIgGADQgFABgHABQgFAAgFgCg");
	this.shape_630.setTransform(423.75,60.75);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#333333").s().p("AARAlIAAglIgBgLQgCgFgCgDQgCgDgDgBQgDgCgEAAIgFABIgEAAIgEAAIgDABIAAA8IgMAAIAAhFIAMgDQAHgBAJAAQAIAAAGACQAGADADAEQAEAFABAGQACAGgBAHIAAAog");
	this.shape_631.setTransform(416.55,61.725);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#333333").s().p("AgKAjQgHgCgFgGQgEgFgCgGQgDgIAAgIQAAgJADgHQADgHAFgEQAEgFAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAFAMAAIALgBIAHgCIACALIgIADIgOABQgIAAgHgDgAgFgZIgGAFQgDADgBAEIgCAHIAjAAQABgJgFgFQgFgGgIAAQgDAAgDABg");
	this.shape_632.setTransform(408.525,61.8);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#333333").s().p("AAQAlIAAglIAAgLQgBgFgCgDQgDgDgDgBQgEgCgDAAIgFABIgEAAIgEAAIgDABIAAA8IgMAAIAAhFIALgDQAIgBAJAAQAJAAAFACQAGADAEAEQADAFABAGQABAGAAAHIAAAog");
	this.shape_633.setTransform(400.65,61.725);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_634.setTransform(392.475,61.825);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#333333").s().p("AgfAyIAAhfIAMgDQAGgBAKAAQAHAAAHADQAGACAFAFQAFAFACAHQADAHAAAJQAAAIgCAGQgCAHgEAFQgFAFgGADQgGADgHAAQgGAAgFgCIgHgDIAAAdgAgSgkIAAAtIAHAEQAEABAGAAQAEAAAEgCQAEgCADgDQACgEABgEIABgKQAAgNgGgHQgGgGgKAAIgJAAIgFABg");
	this.shape_635.setTransform(384.425,63.025);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_636.setTransform(375.975,61.825);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_637.setTransform(362.225,61.825);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#333333").s().p("AgJA0QgHgCgFgFQgEgFgDgHQgDgHAAgJQAAgIADgIQABgGAEgFQAFgEAGgDQAGgDAHAAQAGAAAFABIAHAEIAAglIANgCIAABqIgMACIgPABQgIAAgGgDgAgGgHQgEADgCADQgDADgBAFQgBAEgBAGQABANAGAHQAHAGAJAAIAJAAIAFgBIAAgtQgCgCgFgCQgEgCgGAAQgEAAgEACg");
	this.shape_638.setTransform(353.75,60.1);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#333333").s().p("AgRAkIgIgCIADgLIAHACQAFACAIAAQAHAAAEgCQAEgCAAgFQAAgEgEgEIgMgFIgIgEIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADAEIAFACIAGADIAJADIAHAEQADACABAEQACADAAAGQAAAKgIAFQgHAFgNAAQgKAAgFgCg");
	this.shape_639.setTransform(341.225,61.8);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_640.setTransform(333.975,61.825);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#333333").s().p("AgGAzIAAhIIANAAIAABIgAgFgkQgCgCgBgEQABgEACgDQACgBADAAQAEAAACABQACADAAAEQAAAEgCACQgCADgEAAQgDAAgCgDg");
	this.shape_641.setTransform(328.1,60.3);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#333333").s().p("AgFAkIgOghQgIgSgFgVIAOAAIAEAQIAFAOIAFAOIAEAOIAFgOIAFgOIAFgOIAEgQIAOAAQgGAVgHASIgOAhg");
	this.shape_642.setTransform(322.875,61.8);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgDgFQgBgEAAgGQgBgGADgEQADgFAEgBIAJgFIALgBIAEAAIAEABIAEAAIACABIAAgEIgBgGIgDgFIgEgFQgEgBgEAAIgLABIgHACIgCgLIAJgCIALgBQAIAAAGACQAFACADAEQADADACAGQACAFgBAGIAAAsIgEABIgHABIgIAAIgJABIgKgBgAgCADIgGACIgEADQgDADAAAEQAAAGAFAEQAFACAGAAIAIAAIAHgBIAAgVIgFgBIgIgCIgFABg");
	this.shape_643.setTransform(315.5,61.8);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#333333").s().p("AAQAlIAAglIAAgLQgBgFgCgDQgDgDgDgBQgEgCgEAAIgEABIgFAAIgDAAIgDABIAAA8IgMAAIAAhFIALgDQAIgBAJAAQAJAAAFACQAGADAEAEQADAFABAGQACAGAAAHIAAAog");
	this.shape_644.setTransform(308.05,61.725);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#333333").s().p("AgRAkIgIgCIADgLIAHACQAFACAIAAQAHAAAEgCQAEgCAAgFQAAgEgEgEIgMgFIgIgEIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADAEIAFACIAGADIAJADIAHAEQADACABAEQACADAAAGQAAAKgIAFQgHAFgNAAQgKAAgFgCg");
	this.shape_645.setTransform(295.375,61.8);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_646.setTransform(288.125,61.825);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_647.setTransform(274.375,61.825);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#333333").s().p("AgLAzIgJgEQgDgDgCgEQgDgFAAgGQAAgGADgEQACgFAEgCIAKgEIALgBIAEAAIAEAAIAEABIABAAIAAgDIAAgGIgCgFIgGgEQgDgCgEAAIgLABIgIACIgBgLIAIgCIAMgBQAIAAAGACQAFACADAEQAEAEABAFQACAFAAAFIAAAuIgGAAIgGABIgJABIgIAAIgLgBgAgCARIgGACIgFAEQgBACAAAEQgBAHAFADQAEACAIAAIAIAAIAFgBIAAgVIgEgBIgHgBIgGAAgAgUgmIACgEIAEgEIADgDIAGgBIAFABIAEACIAEABIADABQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAgBIAEgEIAGADIgCAEIgCAEIgFADQgCACgDAAIgGgBIgEgCIgDgCIgDgBQgBAAgBAAQAAAAgBABQAAAAgBAAQAAABgBAAIgDAFg");
	this.shape_648.setTransform(266.4,60.375);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#333333").s().p("AgIAvQgEgCgEgEQgCgEgBgFIgBgNIAAhAIAMgDIAAAXIAbAAIAAALIgbAAIAAAhIABAJIACAFQACACADABIAFABQAFAAAFgCIAEgBIACAKIgGADQgFABgHABQgGAAgFgCg");
	this.shape_649.setTransform(260.5,60.75);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#333333").s().p("AgRAkIgIgCIADgLIAHACQAFACAIAAQAHAAAEgCQAEgCAAgFQAAgEgEgEIgMgFIgIgEIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADAEIAFACIAGADIAJADIAHAEQADACABAEQACADAAAGQAAAKgIAFQgHAFgNAAQgKAAgFgCg");
	this.shape_650.setTransform(254.175,61.8);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#333333").s().p("AgKAjQgHgCgFgGQgEgFgCgGQgDgIAAgIQAAgJADgHQADgHAFgEQAEgFAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAFAMAAIALgBIAHgCIACALIgIADIgOABQgIAAgHgDgAgFgZIgGAFQgDADgBAEIgCAHIAjAAQABgJgFgFQgFgGgIAAQgDAAgDABg");
	this.shape_651.setTransform(247.075,61.8);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#333333").s().p("AgKAjQgHgCgFgGQgEgFgCgGQgDgIAAgIQAAgJADgHQADgHAFgEQAEgFAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAFAMAAIALgBIAHgCIACALIgIADIgOABQgIAAgHgDgAgFgZIgGAFQgDADgBAEIgCAHIAjAAQABgJgFgFQgFgGgIAAQgDAAgDABg");
	this.shape_652.setTransform(233.725,61.8);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#333333").s().p("AgJA0QgHgCgFgFQgEgFgDgHQgDgHAAgJQAAgIADgIQABgGAEgFQAFgEAGgDQAGgDAHAAQAGAAAFABIAHAEIAAglIANgCIAABqIgMACIgPABQgIAAgGgDgAgGgHQgEADgCADQgDADgBAFQgBAEgBAGQABANAGAHQAHAGAJAAIAJAAIAFgBIAAgtQgCgCgFgCQgEgCgGAAQgEAAgEACg");
	this.shape_653.setTransform(225.5,60.1);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#333333").s().p("AAQAlIAAglIgBgLQAAgFgCgDQgCgDgEgBQgEgCgEAAIgEABIgFAAIgDAAIgDABIAAA8IgNAAIAAhFIAMgDQAIgBAJAAQAJAAAFACQAGADAEAEQADAFABAGQACAGAAAHIAAAog");
	this.shape_654.setTransform(217.6,61.725);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_655.setTransform(209.425,61.825);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#333333").s().p("AgUAlIAAhEIAMgEQAHgBAHAAIAEAAIAEABIAEAAIADABIgCALIgFgBIgKgBIgGABIgFABIAAA8g");
	this.shape_656.setTransform(197.575,61.725);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#333333").s().p("AgLAlIgJgEQgDgDgCgFQgCgEAAgGQAAgGACgEQADgFAEgBIAKgFIAKgBIAEAAIAEABIADAAIACABIAAgEIAAgGIgDgFIgEgFQgEgBgEAAIgLABIgHACIgCgLIAIgCIAMgBQAIAAAFACQAGACADAEQADADACAGQABAFABAGIAAAsIgGABIgGABIgIAAIgJABIgLgBgAgCADIgGACIgFADQgBADgBAEQABAGAEAEQAEACAIAAIAIAAIAFgBIAAgVIgEgBIgIgCIgFABg");
	this.shape_657.setTransform(190.55,61.8);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#333333").s().p("AAQA2IAAgmIgBgLQgBgFgBgCQgCgDgEgBQgDgCgFAAIgEABIgFAAIgDABIgCABIAAA7IgOAAIAAhpIAOgCIAAAlIAIgCIAHgBQAIAAAGACQAGADADAEQADAFACAFQABAGABAHIAAApg");
	this.shape_658.setTransform(183.15,60.025);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#333333").s().p("AARAlIAAglIgBgLQgBgFgDgDQgBgDgEgBQgEgCgDAAIgFABIgEAAIgEAAIgDABIAAA8IgMAAIAAhFIALgDQAIgBAJAAQAJAAAFACQAGADAEAEQADAFABAGQABAGAAAHIAAAog");
	this.shape_659.setTransform(175.1,61.725);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#333333").s().p("AgFAzIAAhIIALAAIAABIgAgFgkQgCgCAAgEQAAgEACgDQADgBACAAQADAAADABQADADAAAEQAAAEgDACQgDADgDAAQgCAAgDgDg");
	this.shape_660.setTransform(169.3,60.3);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#333333").s().p("AgFAkIgOghQgIgSgFgVIAOAAIAEAQIAFAOIAFAOIAEAOIAFgOIAFgOIAFgOIAEgQIAOAAQgGAVgHASIgOAhg");
	this.shape_661.setTransform(164.075,61.8);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#333333").s().p("AgGAzIAAhIIANAAIAABIgAgFgkQgCgCgBgEQABgEACgDQACgBADAAQAEAAACABQACADABAEQgBAEgCACQgCADgEAAQgDAAgCgDg");
	this.shape_662.setTransform(158.8,60.3);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#333333").s().p("AgKA0QgGgCgFgFQgEgFgDgHQgDgHAAgJQAAgIADgIQABgGAFgFQAEgEAGgDQAGgDAHAAQAGAAAFABIAHAEIAAglIANgCIAABqIgMACIgPABQgHAAgIgDgAgGgHQgEADgCADQgDADgBAFQgBAEgBAGQABANAGAHQAGAGAKAAIAJAAIAFgBIAAgtQgCgCgEgCQgFgCgGAAQgEAAgEACg");
	this.shape_663.setTransform(152.7,60.1);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgDgFQgBgEAAgGQgBgGADgEQADgFAEgBIAKgFIAKgBIAEAAIAEABIAEAAIACABIAAgEIgBgGIgDgFIgEgFQgEgBgEAAIgLABIgHACIgCgLIAJgCIALgBQAIAAAGACQAFACADAEQADADACAGQACAFgBAGIAAAsIgEABIgHABIgIAAIgJABIgKgBgAgCADIgGACIgEADQgDADAAAEQAAAGAFAEQAFACAGAAIAIAAIAHgBIAAgVIgFgBIgIgCIgFABg");
	this.shape_664.setTransform(144.95,61.8);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgCgFQgCgEAAgGQAAgGACgEQADgFAEgBIAKgFIAKgBIAEAAIAEABIADAAIADABIAAgEIgBgGIgDgFIgEgFQgEgBgEAAIgLABIgHACIgCgLIAIgCIAMgBQAIAAAFACQAGACADAEQADADACAGQABAFAAAGIAAAsIgFABIgGABIgIAAIgJABIgKgBgAgCADIgGACIgFADQgCADAAAEQABAGAEAEQAEACAIAAIAIAAIAGgBIAAgVIgFgBIgIgCIgFABg");
	this.shape_665.setTransform(132.15,61.8);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#333333").s().p("AgRAkIgIgCIADgLIAHACQAFACAIAAQAHAAAEgCQAEgCAAgFQAAgEgEgEIgMgFIgIgEIgGgDQgDgDgCgDQgCgDAAgFQAAgKAIgFQAHgGALAAIAGAAIAGABIAFABIADABIgDAMIgGgDIgLgBQgEAAgEACQgEACAAAEIAAAFIADAEIAFACIAGADIAJADIAHAEQADACABAEQACADAAAGQAAAKgIAFQgHAFgNAAQgKAAgFgCg");
	this.shape_666.setTransform(125.575,61.8);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#333333").s().p("AgFAzIAAhIIALAAIAABIgAgFgkQgCgCAAgEQAAgEACgDQADgBACAAQADAAADABQADADAAAEQAAAEgDACQgDADgDAAQgCAAgDgDg");
	this.shape_667.setTransform(120.7,60.3);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#333333").s().p("AAIAmQgIAAgGgDQgHgCgFgGQgEgFgCgGQgDgIAAgIQAAgHADgHQACgHAFgGQAEgFAHgDQAGgCAHAAIAKAAIAJADIgDAMIgGgDIgIgBQgKABgGAGQgGAHAAAMQAAAGABAFQACAFADADQACAEAFACQADACAHgBIAJgBIAHgBIACALIgEABIgEABIgGABIgGAAg");
	this.shape_668.setTransform(115.925,61.8);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#333333").s().p("AgKAjQgHgCgFgGQgEgFgCgGQgDgIAAgIQAAgJADgHQADgHAFgEQAEgFAGgDQAGgCAGAAQAOAAAIAJQAIAJAAATIAAABIAAADIgxAAQABALAGAGQAFAFAMAAIALgBIAHgCIACALIgIADIgOABQgIAAgHgDgAgFgZIgGAFQgDADgBAEIgCAHIAjAAQABgJgFgFQgFgGgIAAQgDAAgDABg");
	this.shape_669.setTransform(108.475,61.8);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#333333").s().p("AgUAlIAAhEIAMgEQAHgBAHAAIAEAAIAEABIAEAAIADABIgCALIgFgBIgKgBIgGABIgFABIAAA8g");
	this.shape_670.setTransform(102.375,61.725);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#333333").s().p("AgfAyIAAhfIAMgDQAGgBAKAAQAHAAAHADQAGACAFAFQAFAFACAHQADAHAAAJQAAAIgCAGQgCAHgEAFQgFAFgGADQgGADgHAAQgGAAgFgCIgHgDIAAAdgAgSgkIAAAtIAHAEQAEABAGAAQAEAAAEgCQAEgCADgDQACgEABgEIABgKQAAgNgGgHQgGgGgKAAIgJAAIgFABg");
	this.shape_671.setTransform(95.275,63.025);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#333333").s().p("AgUAlIAAhEIAMgEQAHgBAHAAIAEAAIAEABIAEAAIADABIgCALIgFgBIgKgBIgGABIgFABIAAA8g");
	this.shape_672.setTransform(83.225,61.725);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_673.setTransform(75.925,61.825);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#333333").s().p("AgJA0QgHgCgFgFQgEgFgDgHQgDgHAAgJQAAgIADgIQACgGADgFQAFgEAGgDQAGgDAHAAQAGAAAFABIAHAEIAAglIANgCIAABqIgMACIgQABQgHAAgGgDgAgGgHQgEADgDADQgCADgBAFQgCAEABAGQAAANAGAHQAHAGAJAAIAIAAIAGgBIAAgtQgCgCgFgCQgEgCgGAAQgEAAgEACg");
	this.shape_674.setTransform(67.45,60.1);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#333333").s().p("AgKAlIgJgEQgEgDgCgFQgCgEAAgGQAAgGACgEQADgFAEgBIAKgFIAKgBIAEAAIAEABIADAAIADABIAAgEIgBgGIgDgFIgEgFQgEgBgEAAIgLABIgHACIgCgLIAIgCIAMgBQAIAAAFACQAGACADAEQADADACAGQABAFAAAGIAAAsIgFABIgGABIgIAAIgJABIgKgBgAgCADIgGACIgFADQgCADAAAEQABAGAEAEQAEACAHAAIAJAAIAGgBIAAgVIgFgBIgIgCIgFABg");
	this.shape_675.setTransform(59.7,61.8);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#333333").s().p("AgQAxIgKgDIACgLIAKADIAMABQAKAAAFgEQAGgFAAgKIAAgDIgHACQgFACgGAAQgGAAgGgCQgFgCgFgFQgEgDgDgIQgCgFAAgJQAAgIACgGQADgHAEgFQAFgFAGgCQAHgDAHgBQAJAAAHACIALADIAAA/QAAARgIAIQgJAHgRABIgNgCgAgLgfQgGAHAAALQAAAGACAFQACAEACADQADACAEACIAGABQAFAAAFgBIAGgDIAAgqIgFgBIgJgBQgJAAgGAHg");
	this.shape_676.setTransform(51.975,63.05);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#333333").s().p("AgNAjQgGgCgFgFQgEgFgDgHQgCgHAAgJQAAgIACgHQADgHAEgFQAFgFAGgDQAHgCAGAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAIQAAAJgCAHQgDAHgEAFQgFAFgGACQgHADgHAAQgGAAgHgDgAgOgTQgGAIAAALQAAAMAGAHQAGAIAIAAQAKAAAFgIQAGgHAAgMQAAgLgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_677.setTransform(44.025,61.825);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#333333").s().p("AgMBAIgFgBIACgKIADAAIAEABQAGAAACgFQADgEAAgIIAAhHIANAAIAABHQAAAOgGAHQgHAGgLAAIgEAAgAADgxQgCgCAAgEQAAgEACgDQADgBADAAQAEAAACABQADADAAAEQAAAEgDACQgCADgEAAQgDAAgDgDg");
	this.shape_678.setTransform(37.225,61.6);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#333333").s().p("AgRAwQgIgEgGgGQgHgGgDgKQgFgJAAgNQAAgLAFgKQADgJAHgHQAGgGAIgDQAJgEAIAAQAJAAAJAEQAIADAHAGQAGAHADAJQAEAKAAALQAAANgEAJQgDAKgGAGQgHAGgIAEQgJADgJAAQgIAAgJgDgAgMgjQgHADgDAFQgEAFgDAHQgCAHAAAIQAAAJACAHQADAHAEAFQADAGAHACQAFADAHAAQAHAAAGgDQAGgCAFgGQADgFADgHQACgHAAgJQAAgIgCgHQgDgHgDgFQgFgFgGgDQgGgDgHAAQgHAAgFADg");
	this.shape_679.setTransform(25.45,60.575);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#333333").s().p("AgaA1IgLgEIAEgUIANAEQAHACAKAAQAIAAAFgCQAEgDAAgFQAAgGgEgDQgFgDgKgEIgMgFIgKgGQgEgDgCgFQgCgGAAgHQAAgOAKgJQALgIARAAQAJAAAJACQAIABAEACIgEAUIgKgEQgGgBgJAAQgGAAgFACQgEADAAAFIABAFIADADIAGAEIAHADQAJADAGAEQAGACAEAEQAEADACAFQABAFAAAHQAAAPgLAIQgLAIgTAAQgOAAgJgCg");
	this.shape_680.setTransform(112.025,32.175);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#333333").s().p("AgQAzQgLgEgGgIQgHgHgDgKQgDgKAAgMQAAgMAEgLQAEgKAHgHQAHgHAIgDQAJgEAIAAQAWAAAMANQAMAOAAAaIAAAEIAAAEIhEAAQABANAIAHQAIAHAOAAQAIAAAIgCQAHgBAEgCIADAUIgFACIgIACIgKABIgKABQgNAAgKgEgAgHggQgEACgDAEQgDADgCAFIgCAJIAsAAQAAgFgBgFIgEgIIgHgFQgEgCgFAAQgFAAgEACg");
	this.shape_681.setTransform(101.725,32.175);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#333333").s().p("AgTBIQgKgEgGgHQgHgIgDgKQgEgKAAgNQAAgMAEgJQADgKAHgHQAHgHAJgEQAJgEAKAAQALAAAJAEQAKAEAGAHQAHAHAEAKQADAJAAAMQAAANgDAKQgEAKgHAIQgGAHgJAEQgKAEgLAAQgKAAgJgEgAgSgDQgGAIAAAPQAAAQAGAJQAHAKALAAQAMAAAHgKQAGgJAAgQQAAgPgGgIQgHgJgMAAQgLAAgHAJgAgig2IADgHIAFgGIAGgFQAEgCAEAAIAHACIAFACIAGACIAGABQAEAAADgCIAEgGIAMAHIgDAGQgCADgDAEIgGAEQgEACgEAAIgHgBIgGgDIgFgCIgGgBQgEAAgCADQgDACgCAEg");
	this.shape_682.setTransform(90.075,30.1);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#333333").s().p("AgPBHIACgOIAGACIAGAAIAEgBQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAgBQAAgDgCgBIgFgDIgCAAIACgGIACgHQgJgBgIgFQgIgEgFgIQgFgGgCgKQgDgHAAgLQAAgMAEgKQAEgKAGgHQAHgIAKgEQAJgEALAAQAPAAANAFIgFAUIgKgDIgLgBQgNAAgHAIQgIAKAAAQQAAAPAHAIQAHAKAQgBIAMAAIAKgDIAEAUIgLACIgOACIgCAEIgBACQAHADACAEQADAEAAAFQAAAHgGAFQgGAFgMAAQgJAAgHgDg");
	this.shape_683.setTransform(79.675,34.1);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#333333").s().p("AgTAyQgIgEgGgGQgFgGgCgKQgCgJAAgKIAAg6IAYAAIAAA2QAAARAFAHQAFAHALAAIAJAAIAIgBIAAhUIAXAAIAABlIgSADQgLACgNAAQgMABgIgEg");
	this.shape_684.setTransform(68.75,32.3);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#333333").s().p("AgfA2IAAhjIASgFQAKgCAMAAIAGAAIAGABIAGABIAFABIgEAUIgJgCIgMgBIgHABIgHABIAABUg");
	this.shape_685.setTransform(59.675,32.05);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#333333").s().p("AgMBCQgHgDgFgGQgEgFgCgIQgCgIAAgLIAAhZIAZgEIAAAfIAkAAIAAAUIgkAAIAAAqQAAANADAFQAEAFAJAAQAGAAAGgBIAIgDIAEAUIgLADQgHACgJAAQgLAAgHgDg");
	this.shape_686.setTransform(51.3,30.725);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#333333").s().p("AgaA1IgLgEIAEgUIANAEQAHACAKAAQAIAAAFgCQAEgDAAgFQAAgGgEgDQgFgDgKgEIgMgFIgKgGQgEgDgCgFQgCgGAAgHQAAgOAKgJQALgIARAAQAJAAAJACQAIABAEACIgEAUIgKgEQgGgBgJAAQgGAAgFACQgEADAAAFIABAFIADADIAGAEIAHADQAJADAGAEQAGACAEAEQAEADACAFQABAFAAAHQAAAPgLAIQgLAIgTAAQgOAAgJgCg");
	this.shape_687.setTransform(42.025,32.175);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#333333").s().p("AATA2IAAg3IgBgOQgBgFgCgEQgDgEgEgCQgEgBgGgBIgJABIgIABIAABUIgYAAIAAhlIASgDQAMgCANAAQAMgBAJAEQAIADAFAHQAFAHACAIQADAJAAALIAAA6g");
	this.shape_688.setTransform(31.725,32.05);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#333333").s().p("AgMBFIAAiJIAZAAIAACJg");
	this.shape_689.setTransform(22.925,30.475);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#FFFFFF").s().p("EgvqAUoQhQAAAAhQMAAAgmvQAAhQBQAAMBfVAAAQBQAAAABQMAAAAmvQAABQhQAAg");
	this.shape_690.setTransform(318.6273,170.8094,1.0176,1.2936);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,637.1999999999999,341.6);


(lib.g_background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.instance = new lib.background();
	this.instance.setTransform(0,0,0.9367,0.9366);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1124,843);


(lib.btn_voltar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgnBDIAAh8QAJgDANgDQANgDAPAAIAHABIAIABIAIABIAGACIgFAZIgLgCQgGgCgJAAIgKABIgIACIAABog");
	this.shape.setTransform(30.525,2.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUBCQgKgCgHgFQgHgFgEgJQgEgHAAgMQAAgLAFgIQAEgHAHgFQAIgEAKgCQAKgCAJgBIALABIAMACIAAgFQAAgGgCgEQgBgFgDgEQgDgDgFgCQgFgCgHAAQgLAAgIABIgPAEIgDgZIARgDQALgCALgBQAPABAKAEQALADAGAGQAGAIACAJQADAKAAALIAABPIgVADQgOADgSAAQgLAAgJgDgAgDAIQgFAAgEACQgEACgDAEQgCAEAAAFQAAALAGAEQAHAEALAAQANAAAIgBIAAgiIgIgBIgKgBIgJABg");
	this.shape_1.setTransform(18.525,2.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPBTQgJgEgGgHQgGgHgCgKQgCgKAAgNIAAhxIAegFIAAAoIAuAAIAAAZIguAAIAAA1QABAPAEAHQAFAHAMAAQAHAAAHgCIAKgDIAFAYQgFACgIACQgJADgMAAQgNAAgJgEg");
	this.shape_2.setTransform(8.65,0.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAABfQgKgDgFgFQgFgFgCgHQgCgIAAgKIAAiVIAdgFIAACVIABAJQABAEACACIAGAEIAKACIgFAZQgNAAgHgDg");
	this.shape_3.setTransform(0.75,-0.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZBAQgLgFgIgJQgJgJgEgNQgFgNAAgPQAAgPAFgMQAEgNAJgJQAIgJAMgFQALgFANAAQAOAAALAFQAMAFAIAJQAJAJAEANQAFAMAAAPQAAAPgFANQgEANgJAJQgIAJgLAFQgMAFgOAAQgNAAgMgFgAgWgeQgJALAAATQAAATAJAMQAIAMAOAAQAPAAAIgMQAJgMAAgTQAAgTgJgLQgIgMgPAAQgOAAgIAMg");
	this.shape_4.setTransform(-10.125,2.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgOBWQgTgogRgsQgSgsgPgsIAjAAIAMAkIANAkIAMAhIAMAeIAMgeIAMghIANgkIAMgkIAiAAQgPAsgSAsQgRAsgTAog");
	this.shape_5.setTransform(-25.175,0.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2F414D").s().p("A0+EnQhQAAAAhQIAAmtQAAhQBQAAMAp9AAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_6.setTransform(0.025,0.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#435865").s().p("A0+EnQhQAAAAhQIAAmtQAAhQBQAAMAp9AAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_7.setTransform(0.025,0.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF9A21").s().p("AgnBDIAAh8QAJgDANgDQANgDAPAAIAHABIAIABIAIABIAGACIgFAZIgLgCQgGgCgJAAIgKABIgIACIAABog");
	this.shape_8.setTransform(31.325,3.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF9A21").s().p("AgUBCQgKgCgHgFQgHgFgEgJQgEgHAAgMQAAgMAFgHQAEgHAHgFQAIgEAKgCQAKgDAJAAIALABIAMACIAAgFQAAgFgCgFQgBgFgDgEQgDgDgFgCQgFgCgHAAQgLAAgIABIgPAEIgDgZIARgDQALgDALAAQAPAAAKAFQALADAGAHQAGAHACAJQADAKAAALIAABPIgVADQgOADgSAAQgLAAgJgDgAgDAIQgFAAgEACQgEACgDAEQgCADAAAGQAAALAGAEQAHAEALABQANgBAIgBIAAgiIgIgBIgKgBIgJABg");
	this.shape_9.setTransform(19.325,3.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF9A21").s().p("AgPBTQgJgEgGgHQgGgHgCgKQgCgKAAgNIAAhxIAegFIAAAoIAuAAIAAAZIguAAIAAA1QABAPAFAHQAEAHAMAAQAHAAAHgCIAKgDIAFAYQgFACgIACQgJADgMAAQgNAAgJgEg");
	this.shape_10.setTransform(9.45,1.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF9A21").s().p("AAABfQgJgDgGgFQgFgFgCgHQgCgIAAgKIAAiVIAdgFIAACVIABAJQABAEACACIAGAEIAKACIgFAZQgNAAgHgDg");
	this.shape_11.setTransform(1.55,0.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF9A21").s().p("AgZBAQgLgFgIgJQgJgJgEgNQgFgNAAgPQAAgPAFgMQAEgNAJgJQAIgJAMgFQALgFANAAQAOAAALAFQAMAFAIAJQAJAJAEANQAFAMAAAPQAAAPgFANQgEANgJAJQgIAJgLAFQgMAFgOAAQgNAAgMgFgAgWgeQgJALAAATQAAATAJAMQAIAMAOAAQAPAAAIgMQAJgMAAgTQAAgTgJgLQgIgMgPAAQgOAAgIAMg");
	this.shape_12.setTransform(-9.325,3.575);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF9A21").s().p("AgOBWQgTgogRgsQgSgsgPgsIAjAAIAMAkIANAkIAMAhIAMAeIAMgeIAMghIANgkIAMgkIAiAAQgPAsgSAsQgRAsgTAog");
	this.shape_13.setTransform(-24.375,1.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#293A46").s().p("A0+EnQhQAAAAhQIAAmtQAAhQBQAAMAp9AAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_14.setTransform(0.825,0.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.2,-29.5,285.29999999999995,59.9);


(lib.btn_sobre = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVA/QgNgFgIgJQgIgJgEgMQgEgNAAgOQAAgRAFgNQAFgNAJgIQAJgJALgEQAKgFALAAQAbAAAPARQAPARAAAhIAAAFIgBAFIhVAAQABAQAKAJQAKAIASAAQALAAAJgCQAKgCAEgCIAFAZIgHACIgKADIgNACIgNABQgQAAgNgGgAgJgoQgFADgEAEQgEAEgCAGIgCALIA2AAQABgGgCgGIgFgKQgDgEgGgCQgFgDgGAAQgGAAgFADg");
	this.shape.setTransform(25.15,2.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnBDIAAh8QAJgDANgDQANgDAPAAIAHABIAIABIAIABIAGACIgFAZIgLgCQgGgCgJAAIgKABIgIACIAABog");
	this.shape_1.setTransform(14.875,2.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjBgQgOgCgJgDIAAi4IAegFIAABEQAGgDAHgCQAIgCAIAAQAOAAALAFQAKAEAIAKQAHAJAEALQAEANAAAPQAAAQgFAMQgEANgJAJQgJAJgMAFQgMAFgPAAQgPAAgNgDgAgRgJQgHACgEADIAABKIAJACIAMAAQAQAAAJgLQAKgMAAgUQAAgTgIgKQgIgLgPAAQgHAAgHACg");
	this.shape_2.setTransform(2.875,-0.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgZBAQgLgFgIgJQgJgJgEgNQgFgNAAgPQAAgPAFgMQAEgNAJgJQAIgJAMgFQALgFANAAQAOAAALAFQAMAFAIAJQAJAJAEANQAFAMAAAPQAAAPgFANQgEANgJAJQgIAJgLAFQgMAFgOAAQgNAAgMgFgAgWgeQgJALAAATQAAATAJAMQAIAMAOAAQAPAAAIgMQAJgMAAgTQAAgTgJgLQgIgMgPAAQgOAAgIAMg");
	this.shape_3.setTransform(-11.425,2.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYBZIgPgEIgMgDIgIgFIAJgaQAHAFALADQAMAEAQAAQAQAAAIgGQAHgFAAgLQAAgHgCgEQgDgFgFgDIgMgHIgOgGQgKgDgIgEQgIgDgHgFQgGgGgEgJQgEgHAAgMQAAgXAQgOQARgMAbAAQAQgBANAEQAMAEAHAEIgJAZQgJgEgKgDQgKgCgLAAQgMAAgHAEQgHAGAAAKQAAAFADAEQACAFAEADIALAGIAMAFIAVAJQAKAEAHAGQAGAGAEAJQADAJAAAMQAAAYgQAMQgRANgfABQgLgBgJgBg");
	this.shape_4.setTransform(-24.625,0.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2F414D").s().p("A0+EnQhQAAAAhQIAAmtQAAhQBQAAMAp9AAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_5.setTransform(0.025,0.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#435865").s().p("A0+EnQhQAAAAhQIAAmtQAAhQBQAAMAp9AAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_6.setTransform(0.025,0.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF9A21").s().p("AgVA/QgNgFgIgJQgIgJgEgMQgEgNAAgOQAAgRAFgNQAFgNAJgIQAJgJALgEQAKgFALAAQAbAAAPARQAPARAAAhIAAAFIgBAFIhVAAQABAQAKAJQAKAIASAAQALAAAJgCQAKgCAFgCIADAZIgGACIgKADIgNACIgNABQgQAAgNgGgAgJgoQgGADgDAEQgEAEgCAGIgCALIA2AAQAAgGgBgGIgFgKQgDgEgGgCQgFgDgGAAQgGAAgFADg");
	this.shape_7.setTransform(25.95,3.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF9A21").s().p("AgnBDIAAh8QAJgDANgDQANgDAPAAIAHABIAIABIAIABIAGACIgFAZIgLgCQgGgCgJAAIgKABIgIACIAABog");
	this.shape_8.setTransform(15.675,3.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF9A21").s().p("AgjBgQgOgCgJgDIAAi4IAegFIAABEQAGgDAHgCQAIgCAIAAQAOAAALAFQAKAEAIAKQAHAJAEALQAEANAAAPQAAAQgFAMQgEANgJAJQgJAJgMAFQgMAFgPAAQgPAAgNgDgAgRgJQgHACgEADIAABKIAJACIAMAAQAQAAAJgLQAKgMAAgUQAAgTgIgKQgIgLgPAAQgHAAgHACg");
	this.shape_9.setTransform(3.675,0.575);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF9A21").s().p("AgZBAQgLgFgIgJQgJgJgEgNQgFgNAAgPQAAgPAFgMQAEgNAJgJQAIgJAMgFQALgFANAAQAOAAALAFQAMAFAIAJQAJAJAEANQAFAMAAAPQAAAPgFANQgEANgJAJQgIAJgLAFQgMAFgOAAQgNAAgMgFgAgWgeQgJALAAATQAAATAJAMQAIAMAOAAQAPAAAIgMQAJgMAAgTQAAgTgJgLQgIgMgPAAQgOAAgIAMg");
	this.shape_10.setTransform(-10.625,3.575);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF9A21").s().p("AgYBZIgPgEIgMgDIgIgFIAJgaQAHAFALADQAMAEAQAAQAQAAAIgGQAHgGAAgKQAAgGgCgFQgDgEgFgEIgMgHIgOgGIgSgHQgIgDgHgFQgGgGgEgJQgEgHAAgMQAAgXAQgOQARgMAbAAQAQAAANADQAMADAHAFIgJAZQgJgEgKgDQgKgCgLAAQgMAAgHAEQgHAGAAAKQAAAFADAFQACADAEAEIALAGIAMAFIAVAJQAKAFAHAFQAGAHAEAIQADAJAAAMQAAAXgQANQgRAOgfAAQgLAAgJgCg");
	this.shape_11.setTransform(-23.825,1.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#293A46").s().p("A0+EnQhQAAAAhQIAAmtQAAhQBQAAMAp9AAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_12.setTransform(0.825,0.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.2,-29.5,285.29999999999995,59.9);


(lib.btn_ranking = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdBYQgMgCgIgDIAFgaIARAGQALABALAAQARAAAIgHQAHgIAAgOIAAgFQgEACgIACQgGADgKAAQgMAAgKgEQgLgFgHgHQgHgIgFgMQgEgKAAgPQABgPAEgMQAEgMAJgIQAIgJAMgFQAMgEAOAAQAPAAANACIAXAFIAABwQAAAfgQAPQgQAOggAAQgMAAgLgCgAgRg1QgIALgBASQAAATAJAIQAIAJANAAQAGAAAHgCIAKgFIAAhDIgHgBIgNgBQgPAAgJALg");
	this.shape.setTransform(36.8,4.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAYBDIAAhEQAAgKgBgIQgBgHgDgFQgEgFgFgCQgGgCgGAAIgNABIgJABIAABpIgdAAIAAh+QAIgCAOgCQAOgDARAAQAPAAALAFQAKAEAHAIQAGAIADALQACALABANIAABJg");
	this.shape_1.setTransform(23.6,2.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOBeIAAiCIAeAAIAACCgAgMg9QgGgFAAgIQAAgJAGgFQAFgFAHAAQAIAAAFAFQAGAFAAAJQAAAIgGAFQgFAFgIAAQgHAAgFgFg");
	this.shape_2.setTransform(13.725,-0.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAXBhIgLgQIgMgRIgNgPQgHgHgHgFIAAA8IgeAAIAAi8IAegFIAAByIANgNIAMgOIALgMIAKgMIAjAAIgaAdIgcAdQAIAGAIAIIAQAUIAPAUIALASg");
	this.shape_3.setTransform(5.225,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAYBDIAAhEQAAgKgBgIQgBgHgEgFQgDgFgFgCQgGgCgGAAIgMABIgJABIAABpIgfAAIAAh+QAJgCAOgCQAOgDARAAQAPAAAKAFQALAEAHAIQAGAIADALQACALAAANIAABJg");
	this.shape_4.setTransform(-8.75,2.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUBCQgKgCgHgFQgHgFgEgJQgEgHAAgMQAAgLAFgIQAEgHAHgFQAIgEAKgCQAKgCAJgBIALABIAMACIAAgFQAAgGgCgEQgBgFgDgEQgDgDgFgCQgFgCgHAAQgLAAgIABIgPAEIgDgZIARgDQALgCALgBQAPABAKAEQALADAGAGQAGAIACAJQADAKAAALIAABPIgVADQgOADgSAAQgLAAgJgDgAgDAIQgFAAgEACQgEACgDAEQgCAEAAAFQAAALAGAEQAHAEALAAQANAAAIgBIAAgiIgIgBIgKgBIgJABg");
	this.shape_5.setTransform(-22.225,2.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAgBXIgKgSIgLgSIgLgPIgKgOIgFAAIgFAAIgQAAIAABBIgfAAIAAiqIAZgDIAXAAQAkAAAUANQAUAOAAAcQAAAigjANIALAOIAMASIAMATIALAUgAgkg7IAAA4IAOAAQAMABAJgCQAHgBAGgDQAGgDADgGQADgGAAgIQAAgIgDgFQgDgGgGgDQgFgDgHgCIgRgBIgTAAg");
	this.shape_6.setTransform(-34.625,0.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2F414D").s().p("A0+EnQhQAAAAhQIAAmtQAAhQBQAAMAp9AAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_7.setTransform(0.025,0.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#435865").s().p("A0+EnQhQAAAAhQIAAmtQAAhQBQAAMAp9AAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_8.setTransform(0.025,0.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF9A21").s().p("AgdBYQgLgCgJgDIAFgaIARAGQALABALAAQARAAAHgHQAIgIAAgOIAAgFQgEACgIACQgHADgJAAQgMAAgKgEQgKgFgIgHQgHgIgFgMQgDgKAAgPQAAgPAEgMQAEgMAJgIQAIgJAMgFQAMgEAOAAQAPAAANACIAXAFIAABwQAAAfgQAPQgQAOggAAQgMAAgLgCgAgRg1QgIALgBASQAAATAJAIQAIAJANAAQAGAAAHgCIAKgFIAAhDIgIgBIgMgBQgPAAgJALg");
	this.shape_9.setTransform(37.6,5.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF9A21").s().p("AAYBDIAAhEQAAgKgBgIQgBgHgDgFQgEgFgFgCQgGgCgGAAIgMABIgJABIAABpIgeAAIAAh+QAIgCAOgCQAOgDARAAQAPAAAKAFQALAEAHAIQAGAIADALQADALAAANIAABJg");
	this.shape_10.setTransform(24.4,3.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF9A21").s().p("AgOBeIAAiCIAeAAIAACCgAgMg9QgGgFAAgIQAAgJAGgFQAFgFAHAAQAIAAAFAFQAGAFAAAJQAAAIgGAFQgFAFgIAAQgHAAgFgFg");
	this.shape_11.setTransform(14.525,0.725);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF9A21").s().p("AAXBhIgLgQIgMgRIgNgPQgHgHgHgFIAAA8IgeAAIAAi8IAegFIAAByIANgOIAMgMIALgOIAKgLIAjAAIgaAdIgcAdQAIAGAIAIIAQATIAPAVIALASg");
	this.shape_12.setTransform(6.025,0.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF9A21").s().p("AAZBDIAAhEQgBgKgBgIQgCgHgDgFQgDgFgFgCQgGgCgGAAIgNABIgJABIAABpIgeAAIAAh+QAJgCAOgCQAOgDARAAQAPAAAKAFQAMAEAGAIQAHAIACALQADALgBANIAABJg");
	this.shape_13.setTransform(-7.95,3.425);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF9A21").s().p("AgUBCQgKgCgHgFQgHgFgEgJQgEgHAAgMQAAgMAFgHQAEgHAHgFQAIgEAKgCQAKgDAJAAIALABIAMACIAAgFQAAgFgCgFQgBgFgDgEQgDgDgFgCQgFgCgHAAQgLAAgIABIgPAEIgDgZIARgDQALgDALAAQAPAAAKAFQALADAGAHQAGAHACAJQADAKAAALIAABPIgVADQgOADgSAAQgLAAgJgDgAgDAIQgFAAgEACQgEACgDAEQgCADAAAGQAAALAGAEQAHAEALABQANgBAIgBIAAgiIgIgBIgKgBIgJABg");
	this.shape_14.setTransform(-21.425,3.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF9A21").s().p("AAgBXIgKgSIgLgSIgLgQIgKgNIgFAAIgFAAIgQAAIAABBIgfAAIAAiqIAZgCIAXgBQAkAAAUANQAUAOAAAcQAAAjgjAMIALAOIAMASIAMATIALAUgAgkg6IAAA3IAOAAQAMABAJgCQAHgBAGgEQAGgDADgFQADgFAAgJQAAgIgDgGQgDgFgGgDQgFgDgHgCIgRgBIgTABg");
	this.shape_15.setTransform(-33.825,1.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#293A46").s().p("A0+EnQhQAAAAhQIAAmtQAAhQBQAAMAp9AAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_16.setTransform(0.825,0.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_8},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.2,-29.5,285.29999999999995,59.9);


(lib.btn_posicao = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.349)").ss(1,1,1).p("AjRjRIGjAAIAAGjImjAAg");
	this.shape.setTransform(21,21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0)").s().p("AjRDSIAAmjIGjAAIAAGjg");
	this.shape_1.setTransform(21,21);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(17,17,17,0.349)").ss(1,1,1).p("AjRjRIGjAAIAAGjImjAAg");
	this.shape_2.setTransform(21,21);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.2)").s().p("AjRDSIAAmjIGjAAIAAGjg");
	this.shape_3.setTransform(21,21);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#111111").ss(1,1,1).p("AjRjRIGjAAIAAGjImjAAg");
	this.shape_4.setTransform(21,21);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AjRDSIAAmjIGjAAIAAGjg");
	this.shape_5.setTransform(21,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,44,44);


(lib.btn_opcao2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.texto = new cjs.Text("Horizontal", "bold 14px 'Ubuntu'");
	this.texto.name = "texto";
	this.texto.textAlign = "center";
	this.texto.lineHeight = 18;
	this.texto.lineWidth = 114;
	this.texto.parent = this;
	this.texto.setTransform(65,8.15);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1).p("Ao5iVIRzAAQBQAAAABQIAACLQAABQhQAAIxzAAQhQAAAAhQIAAiLQAAhQBQAAg");
	this.shape.setTransform(65,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ao5CWQhQAAAAhQIAAiLQAAhQBQAAIRzAAQBQAAAABQIAACLQAABQhQAAg");
	this.shape_1.setTransform(65,15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E7DBC8").s().p("Ao5CWQhQAAAAhQIAAiLQAAhQBQAAIRzAAQBQAAAABQIAACLQAABQhQAAg");
	this.shape_2.setTransform(65,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape,p:{x:65,y:15}},{t:this.texto,p:{x:65,y:8.15}}]}).to({state:[{t:this.shape_2,p:{x:65,y:15}},{t:this.shape,p:{x:65,y:15}},{t:this.texto,p:{x:65,y:8.15}}]},1).to({state:[{t:this.shape_2,p:{x:66,y:16}},{t:this.shape,p:{x:66,y:16}},{t:this.texto,p:{x:66,y:9.15}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,133,33);


(lib.btn_opcao1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.texto = new cjs.Text("Posicionar Auto", "bold 14px 'Ubuntu'");
	this.texto.name = "texto";
	this.texto.textAlign = "center";
	this.texto.lineHeight = 18;
	this.texto.lineWidth = 114;
	this.texto.parent = this;
	this.texto.setTransform(65,8.15);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1).p("Ao5iVIRzAAQBQAAAABQIAACLQAABQhQAAIxzAAQhQAAAAhQIAAiLQAAhQBQAAg");
	this.shape.setTransform(65,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ao5CWQhQAAAAhQIAAiLQAAhQBQAAIRzAAQBQAAAABQIAACLQAABQhQAAg");
	this.shape_1.setTransform(65,15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E7DBC8").s().p("Ao5CWQhQAAAAhQIAAiLQAAhQBQAAIRzAAQBQAAAABQIAACLQAABQhQAAg");
	this.shape_2.setTransform(65,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape,p:{x:65,y:15}},{t:this.texto,p:{x:65,y:8.15}}]}).to({state:[{t:this.shape_2,p:{x:65,y:15}},{t:this.shape,p:{x:65,y:15}},{t:this.texto,p:{x:65,y:8.15}}]},1).to({state:[{t:this.shape_2,p:{x:66,y:16}},{t:this.shape,p:{x:66,y:16}},{t:this.texto,p:{x:66,y:9.15}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,133,33);


(lib.btn_jogar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgnBDIAAh8QAJgDANgDQANgDAPAAIAHABIAIABIAIABIAGACIgFAZIgLgCQgGgCgJAAIgKABIgIACIAABog");
	this.shape.setTransform(27.275,2.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUBCQgKgCgHgFQgHgFgEgJQgEgHAAgMQAAgLAFgIQAEgHAHgFQAIgEAKgCQAKgCAJgBIALABIAMACIAAgFQAAgGgCgEQgBgFgDgEQgDgDgFgCQgFgCgHAAQgLAAgIABIgPAEIgDgZIARgDQALgCALgBQAPABAKAEQALADAGAGQAGAIACAJQADAKAAALIAABPIgVADQgOADgSAAQgLAAgJgDgAgDAIQgFAAgEACQgEACgDAEQgCAEAAAFQAAALAGAEQAHAEALAAQANAAAIgBIAAgiIgIgBIgKgBIgJABg");
	this.shape_1.setTransform(15.275,2.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdBYQgMgCgJgDIAGgaIARAGQALABAKAAQASAAAHgHQAJgIgBgOIAAgFQgEACgHACQgIADgIAAQgMAAgLgEQgLgFgHgHQgHgIgFgMQgDgKAAgPQgBgPAFgMQAEgMAJgIQAIgJAMgFQAMgEAPAAQAOAAANACIAWAFIAABwQAAAfgPAPQgQAOggAAQgLAAgMgCgAgRg1QgJALAAASQAAATAJAIQAIAJAMAAQAIAAAGgCIAKgFIAAhDIgIgBIgLgBQgQAAgJALg");
	this.shape_2.setTransform(2.3,4.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgZBAQgLgFgIgJQgJgJgEgNQgFgNAAgPQAAgPAFgMQAEgNAJgJQAIgJAMgFQALgFANAAQAOAAALAFQAMAFAIAJQAJAJAEANQAFAMAAAPQAAAPgFANQgEANgJAJQgIAJgLAFQgMAFgOAAQgNAAgMgFgAgWgeQgJALAAATQAAATAJAMQAIAMAOAAQAPAAAIgMQAJgMAAgTQAAgTgJgLQgIgMgPAAQgOAAgIAMg");
	this.shape_3.setTransform(-11.125,2.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgiBTQgNgEgGgFIAMgZQAGAFAJADQAJAEAJAAQAQAAAHgIQAHgIAAgTIAAhyIAgAAIAABzQAAAOgDALQgDAKgGAJQgIAIgLAEQgMAGgQAAQgRAAgMgGg");
	this.shape_4.setTransform(-24.95,0.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2F414D").s().p("A0+EnQhQAAAAhQIAAmtQAAhQBQAAMAp9AAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_5.setTransform(0.025,0.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#435865").s().p("A0+EnQhQAAAAhQIAAmtQAAhQBQAAMAp9AAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_6.setTransform(0.025,0.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF9A21").s().p("AgnBDIAAh8QAJgDANgDQANgDAPAAIAHABIAIABIAIABIAGACIgFAZIgLgCQgGgCgJAAIgKABIgIACIAABog");
	this.shape_7.setTransform(28.075,3.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF9A21").s().p("AgUBCQgKgCgHgFQgHgFgEgJQgEgHAAgMQAAgMAFgHQAEgHAHgFQAIgEAKgCQAKgDAJAAIALABIAMACIAAgFQAAgFgCgFQgBgFgDgEQgDgDgFgCQgFgCgHAAQgLAAgIABIgPAEIgDgZIARgDQALgDALAAQAPAAAKAFQALADAGAHQAGAHACAJQADAKAAALIAABPIgVADQgOADgSAAQgLAAgJgDgAgDAIQgFAAgEACQgEACgDAEQgCADAAAGQAAALAGAEQAHAEALABQANgBAIgBIAAgiIgIgBIgKgBIgJABg");
	this.shape_8.setTransform(16.075,3.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF9A21").s().p("AgdBYQgMgCgJgDIAGgaIASAGQAJABALAAQASAAAHgHQAJgIgBgOIAAgFQgEACgHACQgHADgJAAQgMAAgLgEQgLgFgHgHQgHgIgFgMQgDgKAAgPQgBgPAFgMQAFgMAHgIQAJgJAMgFQAMgEAPAAQAOAAANACIAWAFIAABwQAAAfgPAPQgQAOggAAQgLAAgMgCgAgQg1QgKALAAASQABATAIAIQAIAJAMAAQAIAAAGgCIAKgFIAAhDIgIgBIgLgBQgQAAgIALg");
	this.shape_9.setTransform(3.1,5.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF9A21").s().p("AgZBAQgLgFgIgJQgJgJgEgNQgFgNAAgPQAAgPAFgMQAEgNAJgJQAIgJAMgFQALgFANAAQAOAAALAFQAMAFAIAJQAJAJAEANQAFAMAAAPQAAAPgFANQgEANgJAJQgIAJgLAFQgMAFgOAAQgNAAgMgFgAgWgeQgJALAAATQAAATAJAMQAIAMAOAAQAPAAAIgMQAJgMAAgTQAAgTgJgLQgIgMgPAAQgOAAgIAMg");
	this.shape_10.setTransform(-10.325,3.575);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF9A21").s().p("AgiBTQgNgEgGgFIALgZQAHAEAJAEQAJAEAJAAQAPAAAIgIQAHgIAAgTIAAhyIAgAAIAAB0QAAANgDALQgDAKgGAJQgIAIgLAEQgLAFgSABQgQgBgMgFg");
	this.shape_11.setTransform(-24.15,1.65);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#293A46").s().p("A0+EnQhQAAAAhQIAAmtQAAhQBQAAMAp9AAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_12.setTransform(0.825,0.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.2,-29.5,285.29999999999995,59.9);


(lib.btn_iniciar_jogo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZBAQgLgFgIgJQgJgJgEgNQgFgNAAgPQAAgPAFgMQAEgNAJgJQAIgJAMgFQALgFANAAQAOAAALAFQAMAFAIAJQAJAJAEANQAFAMAAAPQAAAPgFANQgEANgJAJQgIAJgLAFQgMAFgOAAQgNAAgMgFgAgWgeQgJALAAATQAAATAJAMQAIAMAOAAQAPAAAIgMQAJgMAAgTQAAgTgJgLQgIgMgPAAQgOAAgIAMg");
	this.shape.setTransform(51.425,2.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdBYQgMgCgIgDIAFgaIARAGQALABALAAQARAAAIgHQAHgIAAgOIAAgFQgEACgIACQgGADgKAAQgMAAgKgEQgLgFgHgHQgHgIgFgMQgEgKAAgPQABgPAEgMQAEgMAJgIQAIgJAMgFQAMgEAOAAQAPAAANACIAXAFIAABwQAAAfgQAPQgQAOggAAQgMAAgLgCgAgRg1QgIALgBASQAAATAJAIQAIAJANAAQAGAAAHgCIAKgFIAAhDIgHgBIgNgBQgPAAgJALg");
	this.shape_1.setTransform(37.25,4.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZBAQgLgFgIgJQgJgJgEgNQgFgNAAgPQAAgPAFgMQAEgNAJgJQAIgJAMgFQALgFANAAQAOAAALAFQAMAFAIAJQAJAJAEANQAFAMAAAPQAAAPgFANQgEANgJAJQgIAJgLAFQgMAFgOAAQgNAAgMgFgAgWgeQgJALAAATQAAATAJAMQAIAMAOAAQAPAAAIgMQAJgMAAgTQAAgTgJgLQgIgMgPAAQgOAAgIAMg");
	this.shape_2.setTransform(23.825,2.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgiBTQgMgEgHgFIAMgZQAGAFAJADQAJAEAKAAQAPAAAGgIQAIgIAAgTIAAhyIAgAAIAABzQAAAOgDALQgCAKgIAJQgGAIgMAEQgMAGgQAAQgRAAgMgGg");
	this.shape_3.setTransform(10,0.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZBAQgLgFgIgJQgJgJgEgNQgFgNAAgPQAAgPAFgMQAEgNAJgJQAIgJAMgFQALgFANAAQAOAAALAFQAMAFAIAJQAJAJAEANQAFAMAAAPQAAAPgFANQgEANgJAJQgIAJgLAFQgMAFgOAAQgNAAgMgFgAgWgeQgJALAAATQAAATAJAMQAIAMAOAAQAPAAAIgMQAJgMAAgTQAAgTgJgLQgIgMgPAAQgOAAgIAMg");
	this.shape_4.setTransform(-6.825,2.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgNBBIgZg7QgNgggLgmIAhAAIAGAXIAHAZIAJAYIAHAVIAIgVIAJgYIAIgZIAGgXIAgAAQgMAmgNAgQgNAhgNAag");
	this.shape_5.setTransform(-19.85,2.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZBAQgLgFgIgJQgJgJgEgNQgFgNAAgPQAAgPAFgMQAEgNAJgJQAIgJAMgFQALgFANAAQAOAAALAFQAMAFAIAJQAJAJAEANQAFAMAAAPQAAAPgFANQgEANgJAJQgIAJgLAFQgMAFgOAAQgNAAgMgFgAgWgeQgJALAAATQAAATAJAMQAIAMAOAAQAPAAAIgMQAJgMAAgTQAAgTgJgLQgIgMgPAAQgOAAgIAMg");
	this.shape_6.setTransform(-32.925,2.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAtBWIgTgeIgWghIgWgfIgWgcIAAB6IgfAAIAAisIAaAAIAVAZIAXAeIAWAfIATAdIAAhzIAgAAIAACsg");
	this.shape_7.setTransform(-48.625,0.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2F414D").s().p("A0+EnQhQAAAAhQIAAmtQAAhQBQAAMAp9AAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_8.setTransform(0.025,0.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#435865").s().p("A0+EnQhQAAAAhQIAAmtQAAhQBQAAMAp9AAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_9.setTransform(0.025,0.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF9A21").s().p("AgZBAQgLgFgIgJQgJgJgEgNQgFgNAAgPQAAgPAFgMQAEgNAJgJQAIgJAMgFQALgFANAAQAOAAALAFQAMAFAIAJQAJAJAEANQAFAMAAAPQAAAPgFANQgEANgJAJQgIAJgLAFQgMAFgOAAQgNAAgMgFgAgWgeQgJALAAATQAAATAJAMQAIAMAOAAQAPAAAIgMQAJgMAAgTQAAgTgJgLQgIgMgPAAQgOAAgIAMg");
	this.shape_10.setTransform(52.225,3.575);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF9A21").s().p("AgdBYQgLgCgJgDIAFgaIARAGQALABALAAQARAAAHgHQAIgIAAgOIAAgFQgEACgIACQgHADgJAAQgMAAgKgEQgKgFgIgHQgHgIgFgMQgDgKAAgPQAAgPAEgMQAEgMAJgIQAIgJAMgFQAMgEAOAAQAPAAANACIAXAFIAABwQAAAfgQAPQgQAOggAAQgMAAgLgCgAgRg1QgIALgBASQAAATAJAIQAIAJANAAQAGAAAHgCIAKgFIAAhDIgIgBIgMgBQgPAAgJALg");
	this.shape_11.setTransform(38.05,5.775);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF9A21").s().p("AgZBAQgLgFgIgJQgJgJgEgNQgFgNAAgPQAAgPAFgMQAEgNAJgJQAIgJAMgFQALgFANAAQAOAAALAFQAMAFAIAJQAJAJAEANQAFAMAAAPQAAAPgFANQgEANgJAJQgIAJgLAFQgMAFgOAAQgNAAgMgFgAgWgeQgJALAAATQAAATAJAMQAIAMAOAAQAPAAAIgMQAJgMAAgTQAAgTgJgLQgIgMgPAAQgOAAgIAMg");
	this.shape_12.setTransform(24.625,3.575);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF9A21").s().p("AgiBTQgNgEgGgFIAMgZQAGAEAJAEQAJAEAKAAQAPAAAGgIQAIgIAAgTIAAhyIAgAAIAAB0QAAANgDALQgDAKgHAJQgHAIgLAEQgMAFgQABQgRgBgMgFg");
	this.shape_13.setTransform(10.8,1.65);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF9A21").s().p("AgZBAQgLgFgIgJQgJgJgEgNQgFgNAAgPQAAgPAFgMQAEgNAJgJQAIgJAMgFQALgFANAAQAOAAALAFQAMAFAIAJQAJAJAEANQAFAMAAAPQAAAPgFANQgEANgJAJQgIAJgLAFQgMAFgOAAQgNAAgMgFgAgWgeQgJALAAATQAAATAJAMQAIAMAOAAQAPAAAIgMQAJgMAAgTQAAgTgJgLQgIgMgPAAQgOAAgIAMg");
	this.shape_14.setTransform(-6.025,3.575);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF9A21").s().p("AgNBBIgZg7QgNgggKgmIAfAAIAHAXIAHAZIAJAYIAIAVIAHgVIAJgYIAIgZIAGgXIAgAAQgMAmgNAgQgNAhgNAag");
	this.shape_15.setTransform(-19.05,3.575);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF9A21").s().p("AgZBAQgLgFgIgJQgJgJgEgNQgFgNAAgPQAAgPAFgMQAEgNAJgJQAIgJAMgFQALgFANAAQAOAAALAFQAMAFAIAJQAJAJAEANQAFAMAAAPQAAAPgFANQgEANgJAJQgIAJgLAFQgMAFgOAAQgNAAgMgFgAgWgeQgJALAAATQAAATAJAMQAIAMAOAAQAPAAAIgMQAJgMAAgTQAAgTgJgLQgIgMgPAAQgOAAgIAMg");
	this.shape_16.setTransform(-32.125,3.575);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF9A21").s().p("AAtBWIgTgeIgWghIgWgfIgWgdIAAB7IgfAAIAAisIAaAAIAVAZIAXAeIAWAfIATAdIAAhzIAgAAIAACsg");
	this.shape_17.setTransform(-47.825,1.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#293A46").s().p("A0+EnQhQAAAAhQIAAmtQAAhQBQAAMAp9AAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_18.setTransform(0.825,0.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_8}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.2,-29.5,285.29999999999995,59.9);


(lib.btn_dificuldade = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.texto = new cjs.Text("Campo: 12x12", "25px 'Ubuntu Medium'", "#FFFFFF");
	this.texto.name = "texto";
	this.texto.textAlign = "center";
	this.texto.lineHeight = 30;
	this.texto.lineWidth = 176;
	this.texto.parent = this;
	this.texto.setTransform(0,-12);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F414D").s().p("A0+EnQhQAAAAhQIAAmtQAAhQBQAAMAp9AAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#435865").s().p("A0+EnQhQAAAAhQIAAmtQAAhQBQAAMAp9AAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_1.setTransform(0.025,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#293A46").s().p("A0+EnQhQAAAAhQIAAmtQAAhQBQAAMAp9AAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_2.setTransform(0.825,0.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.texto,p:{x:0,y:-12,color:"#FFFFFF"}}]}).to({state:[{t:this.shape_1},{t:this.texto,p:{x:0,y:-12,color:"#FFFFFF"}}]},1).to({state:[{t:this.shape_2},{t:this.texto,p:{x:1,y:-11,color:"#FF9A21"}}]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.2,-29.5,285.29999999999995,59.9);


(lib.btn_continuar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.texto = new cjs.Text("Continuar", "bold 14px 'Ubuntu'");
	this.texto.name = "texto";
	this.texto.textAlign = "center";
	this.texto.lineHeight = 18;
	this.texto.lineWidth = 114;
	this.texto.parent = this;
	this.texto.setTransform(65,8.15);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1).p("Ao5iVIRzAAQBQAAAABQIAACLQAABQhQAAIxzAAQhQAAAAhQIAAiLQAAhQBQAAg");
	this.shape.setTransform(65,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ao5CWQhQAAAAhQIAAiLQAAhQBQAAIRzAAQBQAAAABQIAACLQAABQhQAAg");
	this.shape_1.setTransform(65,15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E7DBC8").s().p("Ao5CWQhQAAAAhQIAAiLQAAhQBQAAIRzAAQBQAAAABQIAACLQAABQhQAAg");
	this.shape_2.setTransform(65,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape,p:{x:65,y:15}},{t:this.texto,p:{x:65,y:8.15}}]}).to({state:[{t:this.shape_2,p:{x:65,y:15}},{t:this.shape,p:{x:65,y:15}},{t:this.texto,p:{x:65,y:8.15}}]},1).to({state:[{t:this.shape_2,p:{x:66,y:16}},{t:this.shape,p:{x:66,y:16}},{t:this.texto,p:{x:66,y:9.15}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,133,33);


(lib.btn_comecar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgnBDIAAh8QAJgDANgDQANgDAPAAIAHABIAIABIAIABIAGACIgFAZIgLgCQgGgCgJAAIgKABIgIACIAABog");
	this.shape.setTransform(44.375,2.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUBCQgKgCgHgFQgHgFgEgJQgEgHAAgMQAAgLAFgIQAEgHAHgFQAIgEAKgCQAKgCAJgBIALABIAMACIAAgFQAAgGgCgEQgBgFgDgEQgDgDgFgCQgFgCgHAAQgLAAgIABIgPAEIgDgZIARgDQALgCALgBQAPABAKAEQALADAGAGQAGAIACAJQADAKAAALIAABPIgVADQgOADgSAAQgLAAgJgDgAgDAIQgFAAgEACQgEACgDAEQgCAEAAAFQAAALAGAEQAHAEALAAQANAAAIgBIAAgiIgIgBIgKgBIgJABg");
	this.shape_1.setTransform(32.375,2.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUBZIAEgSIAGACIAIABIAGgBQADgCgBgDQABgEgEgCIgGgDIgCgBIACgHIADgIQgMgCgJgGQgKgFgHgJQgFgJgEgMQgDgKAAgNQAAgOAEgNQAFgNAJgJQAHgJANgGQAMgFAOAAQASAAARAHIgHAZIgLgEQgHgCgIAAQgRAAgJAMQgJALAAAUQAAATAJALQAIALAVAAIAOgBIAOgEIAEAZQgFACgIACQgJACgJAAIgDAEIgBADQAIAEAEAFQADAEAAAHQgBAJgHAGQgHAHgPAAQgMAAgJgEg");
	this.shape_2.setTransform(21.6,5.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVA/QgMgFgJgJQgIgJgEgMQgEgNAAgOQAAgRAFgNQAFgNAJgIQAJgJAKgEQALgFALAAQAaAAAQARQAPARAAAhIAAAFIgBAFIhVAAQABAQALAJQAJAIASAAQALAAAJgCQAJgCAGgCIADAZIgHACIgKADIgLACIgOABQgQAAgNgGgAgJgoQgFADgEAEQgEAEgBAGIgDALIA3AAQgBgGgBgGIgFgKQgEgEgFgCQgEgDgHAAQgGAAgFADg");
	this.shape_3.setTransform(9.1,2.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA7BDIAAhEQAAgUgFgKQgFgJgOAAQgHAAgHADQgGACgDACIACANIABAPIAABIIgdAAIAAhEQAAgUgGgKQgEgJgPAAIgKABIgJABIAABpIgfAAIAAh+QAJgCAOgCQAPgDAPAAQAOAAAIAEQAJADAFAGIAGgEIAKgEIALgDIAMgCQAPAAAKAFQAKAEAFAIQAGAIACALQACALAAANIAABJg");
	this.shape_4.setTransform(-7.75,2.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgZBAQgLgFgIgJQgJgJgEgNQgFgNAAgPQAAgPAFgMQAEgNAJgJQAIgJAMgFQALgFANAAQAOAAALAFQAMAFAIAJQAJAJAEANQAFAMAAAPQAAAPgFANQgEANgJAJQgIAJgLAFQgMAFgOAAQgNAAgMgFgAgWgeQgJALAAATQAAATAJAMQAIAMAOAAQAPAAAIgMQAJgMAAgTQAAgTgJgLQgIgMgPAAQgOAAgIAMg");
	this.shape_5.setTransform(-25.125,2.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUBUQgPgGgLgMQgLgLgFgQQgGgSAAgVQAAgVAGgRQAHgQALgMQAMgMAPgGQAQgGARABQAKAAAKABIAPADIALAFIAFADIgJAaQgGgEgLgEQgLgDgNAAQgMAAgJAEQgJAEgHAHQgHAIgEAMQgEAMAAAPQAAAOADAKQADAMAGAJQAHAIAKAEQAJAFAOAAQARAAALgDIAQgGIAIAZQgDACgFACQgFADgIABIgPADQgJABgJABQgUAAgPgHg");
	this.shape_6.setTransform(-39.2,0.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2F414D").s().p("A0+EnQhQAAAAhQIAAmtQAAhQBQAAMAp9AAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_7.setTransform(0.025,0.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#435865").s().p("A0+EnQhQAAAAhQIAAmtQAAhQBQAAMAp9AAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_8.setTransform(0.025,0.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF9A21").s().p("AgnBDIAAh8QAJgDANgDQANgDAPAAIAHABIAIABIAIABIAGACIgFAZIgLgCQgGgCgJAAIgKABIgIACIAABog");
	this.shape_9.setTransform(45.175,3.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF9A21").s().p("AgUBCQgKgCgHgFQgHgFgEgJQgEgHAAgMQAAgMAFgHQAEgHAHgFQAIgEAKgCQAKgDAJAAIALABIAMACIAAgFQAAgFgCgFQgBgFgDgEQgDgDgFgCQgFgCgHAAQgLAAgIABIgPAEIgDgZIARgDQALgDALAAQAPAAAKAFQALADAGAHQAGAHACAJQADAKAAALIAABPIgVADQgOADgSAAQgLAAgJgDgAgDAIQgFAAgEACQgEACgDAEQgCADAAAGQAAALAGAEQAHAEALABQANgBAIgBIAAgiIgIgBIgKgBIgJABg");
	this.shape_10.setTransform(33.175,3.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF9A21").s().p("AgUBZIAEgSIAGACIAIABIAGgBQADgCgBgDQAAgEgDgCIgGgDIgCgBIACgHIADgIQgMgCgJgGQgKgFgHgJQgFgJgEgMQgDgKAAgNQAAgOAEgNQAFgNAJgJQAIgJAMgGQAMgFAOAAQASAAARAHIgHAZIgLgEQgHgCgIAAQgRAAgJAMQgJALAAAUQAAATAJALQAIALAUAAIAPgBIAOgEIAEAZQgFACgIACQgJACgJAAIgDAEIgBADQAIAEADAFQAEAEAAAHQAAAJgIAGQgHAHgQAAQgKAAgKgEg");
	this.shape_11.setTransform(22.4,5.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF9A21").s().p("AgVA/QgMgFgJgJQgIgJgEgMQgEgNAAgOQAAgRAFgNQAFgNAJgIQAIgJALgEQALgFALAAQAbAAAPARQAPARAAAhIAAAFIAAAFIhWAAQABAQALAJQAJAIASAAQALAAAJgCQAJgCAGgCIADAZIgHACIgKADIgLACIgOABQgQAAgNgGgAgJgoQgGADgDAEQgEAEgBAGIgEALIA4AAQAAgGgCgGIgFgKQgEgEgFgCQgEgDgHAAQgGAAgFADg");
	this.shape_12.setTransform(9.9,3.575);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF9A21").s().p("AA7BDIAAhEQAAgUgFgKQgFgJgOAAQgHAAgHADQgGACgDACIADANIAAAPIAABIIgdAAIAAhEQAAgUgGgKQgEgJgOAAIgLABIgJABIAABpIgfAAIAAh+QAJgCAOgCQAPgDAPAAQANAAAJAEQAJADAFAGQACgCAEgCIAKgEIALgDQAGgCAGAAQAPAAAKAFQAKAEAFAIQAGAIACALQACALAAANIAABJg");
	this.shape_13.setTransform(-6.95,3.425);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF9A21").s().p("AgZBAQgLgFgIgJQgJgJgEgNQgFgNAAgPQAAgPAFgMQAEgNAJgJQAIgJAMgFQALgFANAAQAOAAALAFQAMAFAIAJQAJAJAEANQAFAMAAAPQAAAPgFANQgEANgJAJQgIAJgLAFQgMAFgOAAQgNAAgMgFgAgWgeQgJALAAATQAAATAJAMQAIAMAOAAQAPAAAIgMQAJgMAAgTQAAgTgJgLQgIgMgPAAQgOAAgIAMg");
	this.shape_14.setTransform(-24.325,3.575);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF9A21").s().p("AgUBUQgPgGgLgMQgLgLgFgQQgGgSAAgVQAAgVAHgRQAGgQAMgMQALgMAQgGQAPgGARABQAKAAAKABIAOADIAMAFIAFADIgJAaQgGgEgLgEQgLgDgNAAQgLAAgKAEQgJAEgHAHQgHAJgEALQgFAMABAPQgBAOAEAKQADAMAGAJQAHAIAKAEQAJAFAOAAQARAAALgDIAQgHIAIAaQgDACgFACQgFACgIACIgPADQgJACgKAAQgSgBgQgGg");
	this.shape_15.setTransform(-38.4,1.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7,p:{x:0.025,y:0.025}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_8},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_7,p:{x:0.825,y:0.825}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_7,p:{x:0.025,y:0.025}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.2,-29.5,285.29999999999995,59.9);


(lib.btn_ajuda = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUBCQgKgCgHgFQgHgFgEgJQgEgHAAgMQAAgLAFgIQAEgHAHgFQAIgEAKgCQAKgCAJgBIALABIAMACIAAgFQAAgGgCgEQgBgFgDgEQgDgDgFgCQgFgCgHAAQgLAAgIABIgPAEIgDgZIARgDQALgCALgBQAPABAKAEQALADAGAGQAGAIACAJQADAKAAALIAABPIgVADQgOADgSAAQgLAAgJgDgAgDAIQgFAAgEACQgEACgDAEQgCAEAAAFQAAALAGAEQAHAEALAAQANAAAIgBIAAgiIgIgBIgKgBIgJABg");
	this.shape.setTransform(24.825,2.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTBeQgMgFgJgJQgJgJgFgMQgEgNAAgQQAAgPAEgNQAEgLAHgJQAIgKAKgEQALgFAOAAQAJAAAHACIAMAFIAAg/IAfgFIAAC9QgKADgNACQgNADgPAAQgPAAgMgFgAgTAAQgIAKAAATQAAAUAJAMQAKALAQAAIAMAAIAIgCIAAhKQgEgDgGgCQgHgCgIAAQgPAAgHALg");
	this.shape_1.setTransform(11.75,-0.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZA+QgKgEgHgIQgGgIgDgLQgDgLAAgOIAAhIIAfAAIAABDQAAAVAGAKQAGAJAOAAIAMgBIAJgBIAAhpIAeAAIAAB+QgIACgOACQgPADgQAAQgOAAgMgFg");
	this.shape_2.setTransform(-1.75,2.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXB0QgGAAgFgCIAEgZQAGACAHAAQALAAAEgGQAEgGAAgMIAAh+IAeAAIAAB+QAAAZgMANQgMAMgWAAIgJgBgAADhUQgEgFAAgIQAAgJAEgFQAGgFAIAAQAHAAAFAFQAGAFAAAJQAAAIgGAFQgFAFgHAAQgIAAgGgFg");
	this.shape_3.setTransform(-13.075,2.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAyBWIgHgUIgHgUIhJAAIgGAUIgHAUIgiAAIATgzIARgrIARgoIARgmIAcAAIASAmIAQAoIASArIASAzgAgNgUIgPAoIA4AAIgQgpIgMgfIgNAgg");
	this.shape_4.setTransform(-22.4,0.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2F414D").s().p("A0+EnQhQAAAAhQIAAmtQAAhQBQAAMAp9AAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_5.setTransform(0.025,0.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#435865").s().p("A0+EnQhQAAAAhQIAAmtQAAhQBQAAMAp9AAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_6.setTransform(0.025,0.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF9A21").s().p("AgUBCQgKgCgHgFQgHgFgEgJQgEgHAAgMQAAgMAFgHQAEgHAHgFQAIgEAKgCQAKgDAJAAIALABIAMACIAAgFQAAgFgCgFQgBgFgDgEQgDgDgFgCQgFgCgHAAQgLAAgIABIgPAEIgDgZIARgDQALgDALAAQAPAAAKAFQALADAGAHQAGAHACAJQADAKAAALIAABPIgVADQgOADgSAAQgLAAgJgDgAgDAIQgFAAgEACQgEACgDAEQgCADAAAGQAAALAGAEQAHAEALABQANgBAIgBIAAgiIgIgBIgKgBIgJABg");
	this.shape_7.setTransform(25.625,3.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF9A21").s().p("AgTBeQgMgFgJgJQgJgJgEgMQgFgNAAgQQAAgPAEgNQAEgLAHgJQAIgKAKgEQALgFAOAAQAJAAAHACIAMAFIAAg/IAfgFIAAC9QgKADgNACQgOADgOAAQgPAAgMgFgAgTAAQgIAKAAATQAAAUAKAMQAJALAQAAIAMAAIAIgCIAAhKQgDgDgHgCQgGgCgJAAQgPAAgHALg");
	this.shape_8.setTransform(12.55,0.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF9A21").s().p("AgZA+QgKgEgHgIQgGgIgDgLQgCgLAAgOIAAhIIAeAAIAABDQAAAVAGAKQAHAJANAAIAMgBIAJgBIAAhpIAfAAIAAB+QgJACgOACQgOADgRAAQgPAAgLgFg");
	this.shape_9.setTransform(-0.95,3.725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF9A21").s().p("AgXB0QgGAAgFgCIAEgZQAGACAHAAQALAAAEgGQAEgGAAgMIAAh+IAeAAIAAB+QAAAagMAMQgMAMgWAAIgJgBgAADhUQgEgFAAgJQAAgIAEgFQAGgFAIAAQAHAAAFAFQAGAFAAAIQAAAJgGAFQgFAFgHAAQgIAAgGgFg");
	this.shape_10.setTransform(-12.275,3.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF9A21").s().p("AAyBWIgHgUIgIgUIhIAAIgGAUIgHAUIgiAAIATgzIARgrIARgoIARgmIAcAAIASAmIARAoIARArIATAzgAgNgUIgPAoIA4AAIgPgpIgNgfIgNAgg");
	this.shape_11.setTransform(-21.6,1.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#293A46").s().p("A0+EnQhQAAAAhQIAAmtQAAhQBQAAMAp9AAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_12.setTransform(0.825,0.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.2,-29.5,285.29999999999995,59.9);


(lib.m_pressione_botao = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.instance = new lib.grafico_pressione_botao("synched",0);
	this.instance.setTransform(232.8,16,1,1,0,0,0,232.8,16);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},14).wait(15).to({startPosition:0},0).to({alpha:0},15).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,465.5,32.1);


(lib.m_posicao = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Camada_1
	this.botao = new lib.btn_posicao();
	this.botao.name = "botao";
	new cjs.ButtonHelper(this.botao, 0, 1, 2, false, new lib.btn_posicao(), 3);

	this.timeline.addTween(cjs.Tween.get(this.botao).wait(3));

	// Camada_3
	this.selecao = new lib.m_selecao();
	this.selecao.name = "selecao";
	this.selecao.setTransform(21,21,1,1,0,0,0,21,21);
	this.selecao.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.selecao).wait(3));

	// Camada_2
	this.instance = new lib.m_explosao();
	this.instance.setTransform(21,21,1,1,0,0,0,21,21);
	this.instance.alpha = 0.8008;

	this.instance_1 = new lib.m_fumaca();
	this.instance_1.setTransform(21,21,1,1,0,0,0,21,21);
	this.instance_1.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,44,44);


(lib.m_loader = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#283A46").ss(3,1,1).p("EgnEgDqMBOJAAAIAAHVMhOJAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Camada_2
	this.txt_porcentagem = new cjs.Text("0%", "25px 'Ubuntu'", "#FFFFFF");
	this.txt_porcentagem.name = "txt_porcentagem";
	this.txt_porcentagem.textAlign = "center";
	this.txt_porcentagem.lineHeight = 30;
	this.txt_porcentagem.lineWidth = 100;
	this.txt_porcentagem.parent = this;
	this.txt_porcentagem.setTransform(0,-10.2);

	this.barra_carregamento = new lib.g_loader_bar("synched",0);
	this.barra_carregamento.name = "barra_carregamento";
	this.barra_carregamento.setTransform(0.05,0,1,1,0,0,0,250.1,23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.barra_carregamento},{t:this.txt_porcentagem}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.m_loader, new cjs.Rectangle(-251.5,-25,503.1,50), null);


(lib.m_jogador2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_3
	this.posicoes = new lib.m_campo_container();
	this.posicoes.name = "posicoes";
	this.posicoes.setTransform(209.5,209.5,1,1,0,0,0,209.5,209.5);

	this.timeline.addTween(cjs.Tween.get(this.posicoes).wait(1));

	// Camada_2
	this.unidades = new lib.m_campo_container();
	this.unidades.name = "unidades";
	this.unidades.setTransform(209.5,209.5,1,1,0,0,0,209.5,209.5);

	this.timeline.addTween(cjs.Tween.get(this.unidades).wait(1));

	// Camada_1
	this.instance = new lib.Camada7();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.m_jogador2, new cjs.Rectangle(-0.5,-0.5,420,420), null);


(lib.m_jogador1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_3
	this.posicoes = new lib.m_campo_container();
	this.posicoes.name = "posicoes";
	this.posicoes.setTransform(209.5,209.5,1,1,0,0,0,209.5,209.5);

	this.timeline.addTween(cjs.Tween.get(this.posicoes).wait(1));

	// Camada_2
	this.unidades = new lib.m_campo_container();
	this.unidades.name = "unidades";
	this.unidades.setTransform(209.5,209.5,1,1,0,0,0,209.5,209.5);

	this.timeline.addTween(cjs.Tween.get(this.unidades).wait(1));

	// Camada_1
	this.instance = new lib.Camada4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.m_jogador1, new cjs.Rectangle(-0.5,-0.5,420,420), null);


(lib.m_display = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.mensagem = new cjs.Text("Mensagem", "11px 'Ubuntu Light'", "#FFFF99");
	this.mensagem.name = "mensagem";
	this.mensagem.lineHeight = 14;
	this.mensagem.lineWidth = 224;
	this.mensagem.parent = this;
	this.mensagem.setTransform(13.2323,217.75,1.1214,1.1214);

	this.maquina = new lib.m_display_jogador();
	this.maquina.name = "maquina";
	this.maquina.setTransform(315.7,109.95,1,1,0,0,0,92.2,59.8);

	this.rodada = new cjs.Text("0", "bold 16px 'Ubuntu'", "#FFFFFF");
	this.rodada.name = "rodada";
	this.rodada.lineHeight = 20;
	this.rodada.lineWidth = 30;
	this.rodada.parent = this;
	this.rodada.setTransform(77.4287,2.75,1.1214,1.1214);

	this.text = new cjs.Text("Rodada:", "bold 16px 'Ubuntu'", "#FFFFFF");
	this.text.lineHeight = 20;
	this.text.lineWidth = 63;
	this.text.parent = this;
	this.text.setTransform(2.2642,2.75,1.1214,1.1214);

	this.humano = new lib.m_display_jogador();
	this.humano.name = "humano";
	this.humano.setTransform(103.2,109.95,1,1,0,0,0,92.2,59.8);

	this.tempo = new cjs.Text("00:00:00", "bold 16px 'Ubuntu'", "#FFFFFF");
	this.tempo.name = "tempo";
	this.tempo.textAlign = "right";
	this.tempo.lineHeight = 20;
	this.tempo.lineWidth = 67;
	this.tempo.parent = this;
	this.tempo.setTransform(416.8787,2.75,1.1214,1.1214);

	this.instance = new lib.g_linha("synched",0);
	this.instance.setTransform(209.55,120.05,1.1214,1.2576,0,0,0,0,57.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(17,17,17,0)").ss(1,1,1).p("Egi2gS7MBFsAAAQBQAAAABQMAAAAjXQAABQhQAAMhFsAAAQhQAAAAhQMAAAgjXQAAhQBQAAg");
	this.shape.setTransform(209.509,116.8039,0.9068,0.6749);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.247)").s().p("Egi1AS7QhQAAAAhQMAAAgjVQAAhQBQAAMBFrAAAQBQAAAABQMAAAAjVQAABQhQAAg");
	this.shape_1.setTransform(209.509,116.8039,0.9068,0.6749);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.247)").s().p("A0gCWQhQAAAAhQIAAiLQAAhQBQAAMApBAAAQBQAAAABQIAACLQAABQhQAAg");
	this.shape_2.setTransform(138.85,223.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance},{t:this.tempo},{t:this.humano},{t:this.text},{t:this.rodada},{t:this.maquina},{t:this.mensagem}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.m_display, new cjs.Rectangle(-1,0.5,421.1,238.1), null);


(lib.btn_voltar_seta = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.instance = new lib.g_voltar_menu("synched",0);
	this.instance.setTransform(26.6,12,1,1,0,0,0,26.6,12);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkZB4IAAjvIIzAAIAADvg");
	this.shape.setTransform(28.225,11.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{alpha:1,x:26.6,y:12}}]}).to({state:[{t:this.instance,p:{alpha:0.8008,x:26.6,y:12}}]},1).to({state:[{t:this.instance,p:{alpha:1,x:27.95,y:13.35}}]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63,25.3);


(lib.btn_mute = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Camada_1
	this.icone = new lib.g_som();
	this.icone.name = "icone";
	this.icone.setTransform(10.75,8.55,0.3359,0.3359,0,0,0,32,25.4);
	this.icone.alpha = 0.5;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(17,17,17,0.008)").ss(1,1,1).p("AhrhVIDXAAIAACrIjXAAg");
	this.shape.setTransform(10.75,8.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhrBWIAAirIDXAAIAACrg");
	this.shape_1.setTransform(10.75,8.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.icone,p:{alpha:0.5}}]}).to({state:[{t:this.icone,p:{alpha:0.25}}]},1).to({state:[{t:this.icone,p:{alpha:0.5}}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,23.5,19.2);


// stage content:
(lib.game = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {Jogar:1,Intro:2,Main:81,PressioneBotao:121,Menu:122,Ajuda:123,Sobre:124,Rank:125,NovoJogo:126,InicioRodada:127};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,121];
	// timeline functions:
	this.frame_0 = function() {
		var ui = this;
		
		$(document).ready(function() {
			$('html, body').css({height: '100%'});
			$('body').css({
				backgroundColor: '#cfdddd',
				backgroundImage: 'url("images/bg1-3.jpg")',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover'
			});
			$('#animation_container').css({
				borderRadius: '8px',
			});
			$('#canvas').css({
				borderWidth: '1px',
				borderStyle: 'solid',
				borderColor: '#7d8d87'
			});
		});
		
		ui.jogar.addEventListener('click', function(e) {
			ui.gotoAndPlay('Jogar');
		});
		this.stop();
	}
	this.frame_1 = function() {
		var ui = this;
		
		ui.preload = new createjs.LoadQueue();
		ui.canalUmTocando = null;
		ui.canalUmNovo = null;
		ui.canalDoisTocando = null;
		ui.canalDoisNovo = null;
		ui.bloqueiaClique = false;
		ui.tamanhoCampo = 10;
		ui.tamanhoPosicao = null;
		ui.escala = null;
		ui.evento = 'novo_jogo';
		ui.tipoOpcao = null;
		ui.mensagem = '';
		ui.posicaoSelecionada = null;
		ui.direcaoUnidade = 'H';
		ui.unidadePosicionada = false;
		ui.ordemUnidadesJogador1 = new Array();
		ui.ordemPosicionamentoUnidades = ['portaAvioes', 'navioTanque1', 'navioTanque2', 'contratorpedeiro1', 'contratorpedeiro2', 'contratorpedeiro3', 'submarino1', 'submarino2', 'submarino3', 'submarino4'];
		ui.proximaUnidade = 'portaAvioes';
		ui.posicoesDisparo = new Array();
		ui.jogador1 = {
			posicoes: new Object(),
			unidades: new Object()
		};
		ui.jogador2 = {
			posicoes: new Object(),
			unidades: new Object()
		};
		ui.frames = {
			pressioneTecla: 122,
			novoJogo: 127,
			inicioRodada: 128,	
			resultado: 129
		};
		ui.css = [
			{id: 'styles', src: 'css/styles.css'}
		];
		ui.fonts = [
			{id: 'font-css', src:'fonts/fonts.css'},
			{id: 'font-1', src:'fonts/ubuntu.woff2'},
			{id: 'font-2', src:'fonts/ubuntu-bold.woff2'},
			{id: 'font-3', src:'fonts/ubuntu-bold-italic.woff2'},
			{id: 'font-4', src:'fonts/ubuntu-italic.woff2'},
			{id: 'font-5', src:'fonts/ubuntu-light.woff2'},
			{id: 'font-6', src:'fonts/ubuntu-light-italic.woff2'},
			{id: 'font-7', src:'fonts/ubuntu-medium.woff2'},
			{id: 'font-8', src:'fonts/ubuntu-medium-italic.woff2'}
		];
		ui.sounds = [
			{id: 'theme', src: 'sounds/theme.mp3', type: createjs.Types.SOUND},
			{id: 'game', src: 'sounds/game.mp3', type: createjs.Types.SOUND},
			{id: 'vitoria', src: 'sounds/vitoria.mp3', type: createjs.Types.SOUND},
			{id: 'derrota', src: 'sounds/derrota.mp3', type: createjs.Types.SOUND},
			{id: 'click', src: 'sounds/click.mp3', type:createjs.Types.SOUND},
			{id: 'teclado', src: 'sounds/teclado.mp3', type:createjs.Types.SOUND},
			{id: 'erro', src: 'sounds/erro.mp3', type:createjs.Types.SOUND},
			{id: 'explosao', src: 'sounds/explosao.mp3', type:createjs.Types.SOUND},
			{id: 'agua', src: 'sounds/agua.mp3', type:createjs.Types.SOUND}
		];
		
		ui.init = function() {
			game.fps = 30;
			ui.preload.installPlugin(createjs.Sound);
			ui.preload.on('progress', onProgress);
			ui.preload.on('error', onError);
			ui.preload.on('complete', onComplete);
			ui.preload.loadManifest(ui.fonts.concat(ui.css).concat(ui.sounds));
		}
		
		ui.resetarInterface = function() {
			ui.campoJogador1.posicoes.children = new Array();
			ui.campoJogador1.unidades.children = new Array();
			ui.campoJogador2.posicoes.children = new Array();
			ui.campoJogador2.unidades.children = new Array();
			ui.jogador1 = {
				posicoes: new Object(),
				unidades: new Object()
			};
			ui.jogador2 = {
				posicoes: new Object(),
				unidades: new Object()
			};
		}
			
		ui.tocarCanalUm = function(id, volume = 1, props = {}) {
			ui.pararCanalUm();
			ui.canalUmNovo = createjs.Sound.play(id, props);
			ui.canalUmNovo.volume = volume;
			ui.canalUmTocando = ui.canalUmNovo;
		}
		
		ui.pararCanalUm = function() {
			if(ui.canalUmTocando !== null) {
				ui.canalUmTocando.stop();
			}
		}
		
		ui.muteCanalUm = function() {
			if(ui.canalUmTocando !== null && ui.canalUmTocando.volume != 0) {
				ui.canalUmTocando.volume = 0;
				ui.mute.icone.gotoAndStop(1);
			} else if(ui.canalUmTocando !== null && ui.canalUmTocando.volume == 0) {
				ui.canalUmTocando.volume = 0.10;
				ui.mute.icone.gotoAndStop(0);
			}
		}
			
		ui.tocarCanalDois = function(id, volume = 1, props = {}) {
			ui.pararCanalDois();
			ui.canalDoisNovo = createjs.Sound.play(id, props);
			ui.canalDoisNovo.volume = volume;
			ui.canalDoisTocando = ui.canalDoisNovo;
		}
		
		ui.pararCanalDois = function() {
			if(ui.canalDoisTocando !== null) {
				ui.canalDoisTocando.stop();
			}
		}
		
		ui.gotoInicioRodada = function() {
			ui.gotoAndStop('InicioRodada');
		}
		
		ui.gotoResultado = function() {
			ui.gotoAndPlay('Resultado');
		}
		
		ui.getCurrentFrame = function() {
			return ui.currentFrame + 1;
		}
		
		ui.renderizarCampo = function(campoRender) {
			for(let i = 0; i < ui.tamanhoCampo; i++) {
				let letra = new lib.m_coordenada();
				let numero = new lib.m_coordenada();
				
				campoRender.posicoes.addChild(letra);
				letra.x = i * ui.tamanhoPosicao;
				letra.y = -ui.tamanhoPosicao;
				letra.scaleX = ui.escala;
				letra.scaleY = ui.escala;
				letra.texto.text = game.jogador1.campo.letras[i];
				
				campoRender.posicoes.addChild(numero);
				numero.x = -ui.tamanhoPosicao;
				numero.y = i * ui.tamanhoPosicao;
				numero.scaleX = ui.escala;
				numero.scaleY = ui.escala;
				numero.texto.text = i + 1;
				
				for(let j = 0; j < ui.tamanhoCampo; j++) {
					let posicaoRender = new lib.m_posicao();
					campoRender.posicoes.addChild(posicaoRender);
					posicaoRender.x = j * ui.tamanhoPosicao;
					posicaoRender.y = i * ui.tamanhoPosicao;
					posicaoRender.scaleX = ui.escala;
					posicaoRender.scaleY = ui.escala;
					posicaoRender.codigo = game.jogador1.campo.converterCoordenada([i, j]);
					
					if(campoRender.name == 'campoJogador1') {
						ui.jogador1.posicoes[posicaoRender.codigo] = posicaoRender;
						ui.jogador1.posicoes[posicaoRender.codigo].foiClicado = false;
						ui.jogador1.posicoes[posicaoRender.codigo].gotoAndStop(0);
					} else if(campoRender.name == 'campoJogador2') {
						ui.jogador2.posicoes[posicaoRender.codigo] = posicaoRender;
						ui.jogador2.posicoes[posicaoRender.codigo].foiClicado = false;
						ui.jogador1.posicoes[posicaoRender.codigo].gotoAndStop(0);
					}
					
					posicaoRender.addEventListener('click', function(e) {
						
						let posicao = posicaoRender;
		
						if(ui.evento == 'posicionar') {
							if (campoRender.name == 'campoJogador1') {
								if (posicao.foiClicado) {
									if (ui.unidadePosicionada) {
										ui.unidadePosicionada = false;
										posicao.foiClicado = false;
										ui.posicaoSelecionada = null;
										ui.tocarCanalDois('click');
										posicao.selecao.alpha = 0;
									}
								} else {
									if (!ui.unidadePosicionada) {
										ui.unidadePosicionada = true;
										posicao.foiClicado = true;
										ui.posicaoSelecionada = posicao.codigo;
										ui.tocarCanalDois('click');
										posicao.selecao.alpha = 1;
									}
								}
							}
						} else if (ui.evento == 'vez_jogador1') {
							if (campoRender.name == 'campoJogador2') {
								if (ui.tipoOpcao == 'simples') {
									if (posicao.foiClicado) {
										if (game.jogador1.disparosRodada >= 0 && game.jogador1.disparosRodada < 3 && game.jogador2.campo.getPosicao(posicao.codigo).disparo == null) {
											ui.posicoesDisparo.splice(ui.posicoesDisparo.indexOf(posicao.codigo), 1);
											game.jogador1.disparosRodada++;
											posicao.foiClicado = false;
											ui.tocarCanalDois('click');
											posicao.selecao.alpha = 0;
										}
									} else {
										if (game.jogador1.disparosRodada > 0 && game.jogador2.campo.getPosicao(posicao.codigo).disparo == null) {
											ui.posicoesDisparo.push(posicao.codigo);
											game.jogador1.disparosRodada--;
											posicao.foiClicado = true;
											ui.btnOpcao1.alpha = 0;
											ui.tocarCanalDois('click');
											posicao.selecao.alpha = 1;
										} else {
											ui.tocarCanalDois('erro', 0.7);
										}
									}
								} else if(ui.tipoOpcao == 'especial') {
									if (posicao.foiClicado) {
										if (ui.posicaoSelecionada != null && game.jogador1.disparosEspeciais >= 0 && game.jogador2.campo.getPosicao(posicao.codigo).disparo == null) {
											game.jogador1.disparosEspeciais++;
											posicao.foiClicado = false;
											ui.posicaoSelecionada = null;
											ui.tocarCanalDois('click');
											posicao.selecao.alpha = 0;
										}
									} else {
										if (ui.posicaoSelecionada == null && game.jogador1.disparosEspeciais > 0 && game.jogador2.campo.getPosicao(posicao.codigo).disparo == null) {
											game.jogador1.disparosEspeciais--;
											posicao.foiClicado = true;
											ui.posicaoSelecionada = posicao.codigo;
											ui.btnOpcao1.alpha = 0;
											ui.tocarCanalDois('click');
											posicao.selecao.alpha = 1;
										} else {
											ui.tocarCanalDois('erro', 0.7);
										}
									}
								}
							}
						}
						ui.atualizarDisplay();
					});
				}
			}
		}
		
		ui.renderizarUnidades = function(campoRender, unidades) {
			campoRender.unidades.children = new Array();
			for(let unidade in unidades) {
				unidade = unidades[unidade];
				if(unidade.codigoPosicaoInicial !== null) {
					let [i, j, orientacao] = unidade.campo.converterPosicao(unidade.codigoPosicaoInicial);
					
					let unidadeRender = null;
					
					if(unidade.tipo == 'porta-avioes') {
						unidadeRender = new lib.m_porta_avioes();
					} else if(unidade.tipo == 'navio-tanque') {
						unidadeRender = new lib.m_navio_tanque();
					} else if(unidade.tipo == 'contratorpedeiro') {
						unidadeRender = new lib.m_contratorpedeiro();
					} else if(unidade.tipo == 'submarino') {
						unidadeRender = new lib.m_submarino();
					}
					
					campoRender.unidades.addChild(unidadeRender);
					unidadeRender.x = j * ui.tamanhoPosicao;
					unidadeRender.y = i * ui.tamanhoPosicao;
					unidadeRender.scaleX = ui.escala;
					unidadeRender.scaleY = ui.escala;
					unidadeRender.codigoPosicaoInicial = unidade.codigoPosicaoInicial;
					
					if(orientacao == 'V') {
						unidadeRender.rotation = 90;
						unidadeRender.x = unidadeRender.x + ui.tamanhoPosicao;
					}
					
					if(campoRender.name == 'campoJogador1') {
						ui.jogador1.unidades[unidadeRender.codigoPosicaoInicial] = unidadeRender;
					} else if(campoRender.name == 'campoJogador2') {
						unidadeRender.alpha = 0; // ESCONDER UNIDADES MAQUINA: 0
						ui.jogador2.unidades[unidadeRender.codigoPosicaoInicial] = unidadeRender;
					}
				}
			}
		}
		
		ui.getUnidadeRender = function(codigoPosicao, jogador) {
			let unidadesRender = null;
			
			if(jogador.tipo == 'humano') {
				unidadesRender = ui.jogador1.unidades;
			} else {
				unidadesRender = ui.jogador2.unidades;
			}
			
			let unidade = jogador.campo.getPosicao(codigoPosicao).unidade;
			let codigoPosicaoInicial = unidade.codigoPosicaoInicial;
			
			let unidadeRender = null;
			for (let key in unidadesRender) {
				if(key.indexOf(codigoPosicaoInicial) !== -1) {
					unidadeRender = unidadesRender[key];
				}
			}
			return unidadeRender;
		}
		
		ui.renderizarDisparo = function(posicoes, disparo) {
			if(disparo.acerto) {
				posicoes[disparo.codigoPosicao].gotoAndStop(1);
			} else {
				posicoes[disparo.codigoPosicao].gotoAndStop(2);
			}
		}
		
		ui.renderizarDisparos = function(posicoes, disparos) {
			for(let disparo of disparos) {
				if(disparo.acerto) {
					posicoes[disparo.codigoPosicao].gotoAndStop(1);
				} else {
					posicoes[disparo.codigoPosicao].gotoAndStop(2);
				}
			}
		}
		
		ui.atualizarDisplay = function() {
			ui.display.rodada.text = game.rodada;
			ui.display.humano.nome.text = game.jogador1.nome;
			ui.display.maquina.nome.text = game.jogador2.nome;
			ui.display.humano.disparosRodada.text = game.jogador1.disparosRodada;
			ui.display.humano.disparosEspeciais.text = game.jogador1.disparosEspeciais;
			ui.display.humano.totalDisparos.text = game.jogador1.totalDisparos;
			ui.display.humano.acertos.text = game.jogador1.acertos;
			ui.display.humano.erros.text = game.jogador1.erros;
			ui.display.humano.unidadesRestantes.text = game.jogador1.campo.contarUnidades();
			ui.display.maquina.disparosRodada.text = game.jogador2.disparosRodada;
			ui.display.maquina.disparosEspeciais.text = game.jogador2.disparosEspeciais;
			ui.display.maquina.totalDisparos.text = game.jogador2.totalDisparos;
			ui.display.maquina.acertos.text = game.jogador2.acertos;
			ui.display.maquina.erros.text = game.jogador2.erros;
			ui.display.maquina.unidadesRestantes.text = game.jogador2.campo.contarUnidades();
		}
		
		ui.posicionarUnidade = function(campo, unidade, posicaoInicial, proximaUnidade) {
			let coordenadas = campo.validarPosicao(posicaoInicial, unidade);
			if (coordenadas != null) {
				unidade.posicionar(coordenadas, posicaoInicial);
				ui.ordemUnidadesJogador1.push(unidade);
				ui.proximaUnidade = proximaUnidade;
				if (proximaUnidade != null) {
					ui.display.mensagem.color = '#FFFF99';
					ui.display.mensagem.text = 'Posicione o ' + campo.unidades[ui.proximaUnidade].nome + ' (' + campo.unidades[ui.proximaUnidade].tamanho + ' posicoes)';
				}
				return true;
			}
			ui.display.mensagem.color = '#FF9999';
			ui.tocarCanalDois('erro', 0.7);
			return false;
		}
		
		ui.salvarScore = function(nome, pontuacao) {
			if(typeof(Storage) !== 'undefined') {
				if(localStorage.getItem('score') != null) {			
					let score = JSON.parse(localStorage.getItem('score'));
					score.push({nome: nome, score: pontuacao});
					score.sort((a, b) => (b.score > a.score) ? 1 : -1);
					score = score.slice(0, 10);
					localStorage.setItem('score', JSON.stringify(score));
				} else {
					let score = [];
					score.push({nome: nome, score: pontuacao});
					localStorage.setItem('score', JSON.stringify(score));
				}
			}
		}
			
		function onError(event) {
			console.log('ERRO: ' + event.text);
		}
		
		function onProgress(event) {
			var progress = Math.round(event.loaded * 100);
			ui.preloader.barra_carregamento.scaleX = event.loaded;
			ui.preloader.txt_porcentagem.text = progress + '%';
		}
		
		function onComplete(event) {
			ui.gotoAndPlay('Intro');
			
			ui.tocarCanalUm('theme', 0.10, {interrupt: createjs.Sound.INTERRUPT_ANY, loop: -1});
		
			var entrouNovoJogo = false;
			var entrouInicioRodada = false;
			var entrouResultado = false;
			
			createjs.Ticker.on('tick', function(e) {
				
				if(ui.getCurrentFrame() == ui.frames.novoJogo && entrouNovoJogo == false) {
					entrouNovoJogo = true;
					if(ui.tamanhoCampo == 10) {
						ui.selecionaCampo.texto.text = 'Campo: 10x10';
					} else if(ui.tamanhoCampo == 12) {
						ui.selecionaCampo.texto.text = 'Campo: 12x12';
					} else {
						ui.selecionaCampo.texto.text = 'Campo: 14x14';
					}
					$('#nomeJogador').focus();
					$('#nomeJogador').val(ui.nome);
					$('#nomeJogador').attr('autocomplete', 'off');
					$('#nomeJogador').attr('placeholder', 'Qual o seu nome?');
				} else if(ui.getCurrentFrame() != ui.frames.novoJogo && entrouNovoJogo == true) {
					entrouNovoJogo = false;
				}
				
				if(ui.getCurrentFrame() == ui.frames.inicioRodada) {
					if(ui.evento != 'fim_jogo' && ui.evento != 'posicionar') {
						ui.display.tempo.text = game.getTempo()[3];
						game.timer = game.timer + 1;
					}
				}
		
			});
				
			window.addEventListener('keypress', function(e) {
				if (ui.getCurrentFrame() == ui.frames.pressioneTecla) {
					ui.tocarCanalDois('click');
					ui.gotoAndStop('Menu');
				} else if(ui.getCurrentFrame() == ui.frames.novoJogo) {
					$('#nomeJogador').unbind('keyup').bind('keyup', function(e) {
						ui.tocarCanalDois('teclado');
					});
				}
			});
			
			window.addEventListener('click', function(e) {
				if (ui.getCurrentFrame() == ui.frames.pressioneTecla) {
					ui.tocarCanalDois('click');
					ui.gotoAndStop('Menu');
				}
			});
			
			ui.mute.addEventListener('click', function(e) {
				ui.tocarCanalDois('click');
				ui.muteCanalUm();
			});
			
			ui.novoJogo.addEventListener('click', function(e) {
				ui.tocarCanalDois('click');
				ui.gotoAndStop('NovoJogo');
			});
			
			ui.ranking.addEventListener('click', function(e) {
				ui.tocarCanalDois('click');
				ui.gotoAndStop('Rank');
				
				if(typeof(Storage) !== 'undefined' && localStorage.getItem('score') != null) {			
					let score = JSON.parse(localStorage.getItem('score'));
					let i = 1;
					for(let item of score) {
						ui.tabelaRanking['nome' + i].text = item.nome;
						ui.tabelaRanking['score' + i].text = item.score;
						i++;
					}
				}
			});
			
			ui.ajuda.addEventListener('click', function(e) {
				ui.tocarCanalDois('click');
				ui.gotoAndStop('Ajuda');
			});
			
			ui.sobre.addEventListener('click', function(e) {
				ui.tocarCanalDois('click');
				ui.gotoAndStop('Sobre');
			});
			
			ui.voltarNovoJogo.addEventListener('click', function(e) {
				ui.tocarCanalDois('click');
				ui.gotoAndStop('Menu');
			});
			
			ui.voltarRanking.addEventListener('click', function(e) {
				ui.tocarCanalDois('click');
				ui.gotoAndStop('Menu');
			});
			
			ui.voltarAjuda.addEventListener('click', function(e) {
				ui.tocarCanalDois('click');
				ui.gotoAndStop('Menu');
			});
			
			ui.voltarSobre.addEventListener('click', function(e) {
				ui.tocarCanalDois('click');
				ui.gotoAndStop('Menu');
			});
			
			ui.comecar.addEventListener('click', function(e) {
				if($('#nomeJogador').val() == '') {
					ui.tocarCanalDois('erro', 0.7);
				} else {
					ui.tocarCanalDois('click');
					ui.nome = $('#nomeJogador').val();
					game.criarJogo($('#nomeJogador').val(), ui.tamanhoCampo);
					if(ui.tamanhoCampo == 10) {
						ui.tamanhoPosicao = 42;
						ui.escala = 1;
					} else if(ui.tamanhoCampo == 12) {
						ui.tamanhoPosicao = 35;
						ui.escala = 35/42;
					} else if(ui.tamanhoCampo == 14) {
						ui.tamanhoPosicao = 30;
						ui.escala = 30/42;
					}
		
		            game.rodada = 0;
		            ui.timer = 0;
					ui.btnOpcao1.alpha = 1;
		            ui.btnOpcao1.texto.text = 'Posicionar Auto';
		            ui.evento = 'posicionar';
		            ui.btnOpcao2.texto.text = 'Horizontal';
		            ui.tipoOpcao = 'H';
		            ui.unidadePosicionada = false;
		            ui.proximaUnidade = 'portaAvioes';
		            ui.btnContinuar.texto.text = 'Posicionar';
		            ui.display.mensagem.text = 'Posicione o porta-avioes (5 posicoes)';
					ui.display.mensagem.color = '#FFFF99';
					
					ui.renderizarCampo(ui.campoJogador1);
					ui.renderizarCampo(ui.campoJogador2);
					ui.atualizarDisplay();
					ui.display.tempo.text = game.getTempo()[3];
					ui.tocarCanalUm('game', ui.canalUmTocando.volume, {interrupt: createjs.Sound.INTERRUPT_ANY, loop: -1});
					ui.gotoInicioRodada();
				}
			});
			
			ui.voltarMenu.addEventListener('click', function(e) {
				ui.tocarCanalDois('click');
				ui.evento = 'novo_jogo';
				ui.resetarInterface();
				ui.tocarCanalUm('theme', ui.canalUmTocando.volume, {interrupt: createjs.Sound.INTERRUPT_ANY, loop: -1});
				ui.gotoAndStop('Menu');
			});
			
			ui.selecionaCampo.addEventListener('click', function(e) {
				ui.tocarCanalDois('click');
				if(ui.tamanhoCampo == 14) {
					ui.tamanhoCampo = 10;
					ui.selecionaCampo.texto.text = 'Campo: 10x10';
				} else if(ui.tamanhoCampo == 10) {
					ui.tamanhoCampo = 12;
					ui.selecionaCampo.texto.text = 'Campo: 12x12';
				} else {
					ui.tamanhoCampo = 14;
					ui.selecionaCampo.texto.text = 'Campo: 14x14';
				}
			});
			
			ui.btnOpcao1.addEventListener('click', function(e) {
				if (ui.evento == 'posicionar' && game.rodada == 0) {
					if (game.jogador1.campo.contarUnidades() == 0) {
						ui.evento = 'vez_jogador1';
						ui.display.mensagem.color = '#FFFF99';
						ui.display.mensagem.text = 'Vez do jogador: ' + game.jogador1.nome;
						ui.btnOpcao2.texto.text = 'Disparo Simples';
						ui.tipoOpcao = 'simples';
						ui.btnContinuar.texto.text = 'Disparar';
						ui.btnOpcao1.texto.text = 'Desfazer';
						game.posicionarUnidadesAuto(game.jogador1);
						game.posicionarUnidadesAuto(game.jogador2);
						ui.renderizarUnidades(ui.campoJogador1, game.jogador1.campo.unidades);
						ui.renderizarUnidades(ui.campoJogador2, game.jogador2.campo.unidades);
						game.timer = 0;
						game.rodada++;
						game.jogador1.disparosRodada = 3;
						game.jogador2.disparosRodada = 3;
						game.jogador1.disparosEspeciais = 2;
						game.jogador2.disparosEspeciais = 2;
						if (ui.posicaoSelecionada != null) {
							let posicao = ui.jogador1.posicoes[ui.posicaoSelecionada];
							posicao.foiClicado = false;
							posicao.selecao.alpha = 0;
							ui.unidadePosicionada = false;
							ui.posicaoSelecionada = null;
						}
					} else if(game.jogador1.campo.contarUnidades() > 0) {
						let ultimaUnidade = ui.ordemUnidadesJogador1[ui.ordemUnidadesJogador1.length - 1];
						delete ui.jogador1.unidades[ultimaUnidade.codigoPosicaoInicial];
						ultimaUnidade.desposicionar();
						ui.ordemUnidadesJogador1.pop();
						ui.proximaUnidade = ui.ordemPosicionamentoUnidades[ui.ordemUnidadesJogador1.length];
						ui.display.mensagem.color = '#FFFF99';
						ui.display.mensagem.text = 'Posicione o ' + game.jogador1.campo.unidades[ui.proximaUnidade].nome + ' (' + game.jogador1.campo.unidades[ui.proximaUnidade].tamanho + ' posicoes)';
						if (Object.keys(ui.jogador1.unidades).length == 0) {
							ui.btnOpcao1.texto.text = 'Posicionar Auto';
						}
						ui.renderizarUnidades(ui.campoJogador1, game.jogador1.campo.unidades);
					}
				} else if (ui.evento == 'vez_jogador1' && game.rodada == 1) {
					if (game.jogador1.campo.contarUnidades() == 10) {
						game.desposicionarUnidades(game.jogador1);
						game.desposicionarUnidades(game.jogador2);
						ui.jogador1.unidades = new Object();
						ui.ordemUnidadesJogador1 = new Array();
						ui.campoJogador1.unidades.children = new Array();
						ui.jogador2.unidades = new Object();
						ui.campoJogador2.unidades.children = new Array();
						game.rodada = 0;
						game.timer = 0;
						ui.display.tempo.text = game.getTempo()[3];
						ui.evento = 'posicionar';
						ui.btnOpcao1.texto.text = 'Posicionar Auto';
						ui.btnOpcao2.texto.text = 'Horizontal';
						ui.tipoOpcao = 'H';
						ui.direcaoUnidade = 'H';
						ui.unidadePosicionada = false;
						ui.proximaUnidade = 'portaAvioes';
						ui.btnContinuar.texto.text = 'Posicionar';
						ui.display.mensagem.text = 'Posicione o porta-avioes (5 posicoes)';
						ui.display.mensagem.color = '#FFFF99';
						game.jogador1.disparosRodada = 0;
						game.jogador2.disparosRodada = 0;
						game.jogador1.disparosEspeciais = 0;
						game.jogador2.disparosEspeciais = 0;
					}
				}
				
				ui.atualizarDisplay();
			});
			
			ui.btnOpcao2.addEventListener('click', function(e) {
				let botao = ui.btnOpcao2;
				if(ui.evento == 'posicionar') {
					if (ui.tipoOpcao == 'H') {
						ui.tipoOpcao = 'V';
						botao.texto.text = 'Vertical';
						ui.direcaoUnidade = ui.tipoOpcao;
					} else {
						ui.tipoOpcao = 'H';
						botao.texto.text = 'Horizontal';
						ui.direcaoUnidade = ui.tipoOpcao;
					}
					ui.tocarCanalDois('click');
				} else if (ui.evento == 'vez_jogador1') {
					if (ui.tipoOpcao == 'simples') {
						if(game.jogador1.disparosEspeciais > 0) {
							ui.tipoOpcao = 'especial';
							botao.texto.text = 'Disparo Especial';
							for (let codigo of ui.posicoesDisparo) {
								let posicao = ui.jogador2.posicoes[codigo];
								posicao.foiClicado = false;
								posicao.selecao.alpha = 0;
							}
							ui.posicoesDisparo = new Array();
							game.jogador1.disparosRodada = 3;
							ui.tocarCanalDois('click');
						} else {
							ui.tocarCanalDois('erro', 0.7);
						}
					} else {
						if(game.rodada == 1) {
							game.jogador1.disparosEspeciais = 2;
						} else if (game.jogador1.disparosEspeciais == 0) {
							game.jogador1.disparosEspeciais++;
						}
						ui.tipoOpcao = 'simples';
						botao.texto.text = 'Disparo Simples';
						if(ui.posicaoSelecionada != null) { 
							let posicao = ui.jogador2.posicoes[ui.posicaoSelecionada];
							posicao.foiClicado = false;
							posicao.selecao.alpha = 0;
						}
						ui.posicaoSelecionada = null;
						ui.tocarCanalDois('click');
					}
				} else {
					ui.tocarCanalDois('erro', 0.7);
					ui.display.mensagem.color = '#FF9999';
				}
				
				ui.atualizarDisplay();
			});
			
			ui.btnContinuar.addEventListener('click', function(e) {
				if (ui.evento == 'posicionar') {
					if (game.jogador1.campo.contarUnidades() < 10) {
						if (!ui.unidadePosicionada) {
							ui.display.mensagem.color = '#FF9999';
							ui.tocarCanalDois('erro', 0.7);
						} else {
							ui.btnOpcao1.texto.text = 'Desfazer';
							let campo = game.jogador1.campo;
							let posicaoInicial = ui.posicaoSelecionada + ui.direcaoUnidade;
							
							if (ui.proximaUnidade == 'portaAvioes') {
								ui.posicionarUnidade(campo, campo.unidades.portaAvioes, posicaoInicial, 'navioTanque1');
							} else if(ui.proximaUnidade == 'navioTanque1') {
								ui.posicionarUnidade(campo, campo.unidades.navioTanque1, posicaoInicial, 'navioTanque2');
							} else if (ui.proximaUnidade == 'navioTanque2') {
								ui.posicionarUnidade(campo, campo.unidades.navioTanque2, posicaoInicial, 'contratorpedeiro1');
							} else if (ui.proximaUnidade == 'contratorpedeiro1') {
								ui.posicionarUnidade(campo, campo.unidades.contratorpedeiro1, posicaoInicial, 'contratorpedeiro2');
							} else if (ui.proximaUnidade == 'contratorpedeiro2') {
								ui.posicionarUnidade(campo, campo.unidades.contratorpedeiro2, posicaoInicial, 'contratorpedeiro3');
							} else if (ui.proximaUnidade == 'contratorpedeiro3') {
								ui.posicionarUnidade(campo, campo.unidades.contratorpedeiro3, posicaoInicial, 'submarino1');
							} else if (ui.proximaUnidade == 'submarino1') {
								ui.posicionarUnidade(campo, campo.unidades.submarino1, posicaoInicial, 'submarino2');
							} else if (ui.proximaUnidade == 'submarino2') {
								ui.posicionarUnidade(campo, campo.unidades.submarino2, posicaoInicial, 'submarino3');
							} else if (ui.proximaUnidade == 'submarino3') {
								ui.posicionarUnidade(campo, campo.unidades.submarino3, posicaoInicial, 'submarino4');
							} else if (ui.proximaUnidade == 'submarino4') {
								if(ui.posicionarUnidade(campo, campo.unidades.submarino4, posicaoInicial, null)) {
									ui.display.mensagem.color = '#FFFF99';
									ui.display.mensagem.text = 'Vez do jogador: ' + game.jogador1.nome;
									ui.evento = 'vez_jogador1';
									ui.btnOpcao1.texto.text = 'Desfazer';
									ui.btnOpcao2.texto.text = 'Disparo Simples';
									ui.tipoOpcao = 'simples';
									ui.btnContinuar.texto.text = 'Disparar';
		                            game.posicionarUnidadesAuto(game.jogador2);
		                            ui.renderizarUnidades(ui.campoJogador2, game.jogador2.campo.unidades);
									ui.timer = 0;
									game.rodada++;
								}
							}
							ui.renderizarUnidades(ui.campoJogador1, game.jogador1.campo.unidades);
							let posicao = ui.jogador1.posicoes[ui.posicaoSelecionada];
							posicao.foiClicado = false;
							posicao.selecao.alpha = 0;
							ui.unidadePosicionada = false;
							ui.posicaoSelecionada = null;
							
							if(game.jogador1.campo.contarUnidades() == 10) {
								game.jogador1.disparosRodada = 3;
								game.jogador2.disparosRodada = 3;
								game.jogador1.disparosEspeciais = 2;
								game.jogador2.disparosEspeciais = 2;
							}
						}
					}
				} else if (ui.evento == 'vez_jogador1') {
					if(ui.tipoOpcao == 'simples' && ui.posicoesDisparo.length == 3) {
						game.jogador1.dispararSimples(ui.posicoesDisparo);
						let codigosDisparos = ui.posicoesDisparo;
						let acertos = new Array();
						for (let codigoDisparo of codigosDisparos) {
							if (game.jogador2.campo.getPosicao(codigoDisparo).unidade != null) {
								acertos.push(codigoDisparo);
							}
						}
		
						if (acertos.length > 0) {
							for (let acerto of acertos) {
								let posicao = game.jogador2.campo.getPosicao(acerto);
								if (posicao.unidade.verificarDestruida()) {
									let unidadeRender = ui.jogador2.unidades[posicao.unidade.codigoPosicaoInicial];
									unidadeRender.alpha = 1;
								}
							}
							ui.tocarCanalDois('explosao', 0.4);
						} else {
							ui.tocarCanalDois('agua', 0.2);
						}
		
						let disparos = [
							game.jogador2.campo.getPosicao(codigosDisparos[0]).disparo,
							game.jogador2.campo.getPosicao(codigosDisparos[1]).disparo,
							game.jogador2.campo.getPosicao(codigosDisparos[2]).disparo
		                ];
						
						ui.renderizarDisparos(ui.jogador2.posicoes, disparos);
		
						for (let codigo of ui.posicoesDisparo) {
							let posicao = ui.jogador2.posicoes[codigo];
							posicao.foiClicado = false;
							posicao.selecao.alpha = 0;
						}
		
						ui.posicoesDisparo = new Array();
		
						let vencedor = game.verificarVencedor();
						if (vencedor == null) {
							ui.evento = 'vez_jogador2';
							ui.display.mensagem.color = '#FFFF99';
							ui.display.mensagem.text = 'Vez do jogador: ' + game.jogador2.nome;
							ui.btnContinuar.texto.text = 'Continuar';
						} else {
							ui.evento = 'fim_jogo';
							ui.display.mensagem.color = '#FFFF99';
							ui.display.mensagem.text = 'Voce venceu! (Score: ' + game.calcularScore() + ')';
							ui.btnContinuar.texto.text = 'Continuar';
							ui.tocarCanalUm('vitoria', ui.canalUmTocando.volume, {interrupt: createjs.Sound.INTERRUPT_ANY, loop: -1});
							ui.salvarScore(game.jogador1.nome, game.calcularScore());
						}
					} else if(ui.tipoOpcao == 'especial' && ui.posicaoSelecionada != null && game.jogador2.campo.getVizinhanca(ui.posicaoSelecionada).length == 9) {
						let posicoes = game.jogador1.dispararEspecial(ui.posicaoSelecionada);
						let acertos = new Array();
						let disparos = new Array();
						for (let posicao of posicoes) {
							if (posicao.unidade != null) {
								acertos.push(posicao);
							}
							disparos.push(posicao.disparo);
						}
		
						if (acertos.length > 0) {
							for (let posicao in acertos) {
								posicao = acertos[posicao];
								if (posicao.unidade.verificarDestruida()) {
									let unidadeRender = ui.jogador2.unidades[posicao.unidade.codigoPosicaoInicial];
									unidadeRender.alpha = 1;
								}
							}
							ui.tocarCanalDois('explosao', 0.4);
						} else {
							ui.tocarCanalDois('agua', 0.2);
						}
		
						ui.renderizarDisparos(ui.jogador2.posicoes, disparos);
		
						let iPosicao = ui.jogador2.posicoes[ui.posicaoSelecionada];
						iPosicao.foiClicado = false;
						iPosicao.selecao.alpha = 0;
						ui.posicaoSelecionada = null;
		
						let vencedor = game.verificarVencedor();
						if (vencedor == null) {
							ui.evento = 'vez_jogador2';
							ui.display.mensagem.color = '#FFFF99';
							ui.display.mensagem.text = 'Vez do jogador: ' + game.jogador2.nome;
							ui.btnContinuar.texto.text = 'Continuar';
							if(game.jogador1.disparosEspeciais == 0) {
								ui.tipoOpcao = 'simples';
								ui.btnOpcao2.texto.text = 'Disparo Simples';
							}
						} else {
							ui.evento = 'fim_jogo';
							ui.display.mensagem.color = '#FFFF99';
							ui.display.mensagem.text = 'Voce venceu! (Score: ' + game.calcularScore() + ')';
							ui.btnContinuar.texto.text = 'Continuar';
							ui.tocarCanalUm('vitoria', ui.canalUmTocando.volume, {interrupt: createjs.Sound.INTERRUPT_ANY, loop: -1});
							ui.salvarScore(game.jogador1.nome, game.calcularScore());
						}
					} else {
						ui.tocarCanalDois('erro', 0.7);
						ui.display.mensagem.color = '#FF9999';
					}
				} else if (ui.evento == 'vez_jogador2') {
					let tipoDisparo = 'simples';
					if (game.jogador2.disparosEspeciais > 0) {
						tipoDisparo = 'especial';
					}
		
					let acertos = new Array();
					let disparos = new Array();
					if (tipoDisparo == 'simples') {
						let disparoSimplesAuto = game.jogador2.dispararSimplesAuto();
						acertos = disparoSimplesAuto[0];
						let codigosDisparos = disparoSimplesAuto[1];
						disparos = [
							game.jogador1.campo.getPosicao(codigosDisparos[0]).disparo,
							game.jogador1.campo.getPosicao(codigosDisparos[1]).disparo,
							game.jogador1.campo.getPosicao(codigosDisparos[2]).disparo
						];
					} else {
						let disparoEspecialAuto = game.jogador2.dispararEspecialAuto();
						let posicoes = disparoEspecialAuto[1]
						
						for (let posicao of posicoes) {
							if (posicao.unidade != null) {
								acertos.push(posicao.codigo);
							}
							disparos.push(posicao.disparo);
						}
					}
					
					if (acertos.length > 0) {
						ui.tocarCanalDois('explosao', 0.4);
					} else {
						ui.tocarCanalDois('agua', 0.2);
					}
		
					ui.renderizarDisparos(ui.jogador1.posicoes, disparos);
					game.jogador2.disparosRodada = 3;
		
					let vencedor = game.verificarVencedor();
					if (vencedor == null) {
						if (tipoDisparo == 'especial') {
							game.jogador2.disparosEspeciais--;
						}
						game.rodada++;
						ui.evento = 'vez_jogador1';
						ui.display.mensagem.color = '#FFFF99';
						ui.display.mensagem.text = 'Vez do jogador: ' + game.jogador1.nome;
						ui.btnContinuar.texto.text = 'Disparar';
						game.jogador1.disparosRodada = 3;
						game.jogador2.disparosRodada = 3;
					} else {
						ui.evento = 'fim_jogo';
						ui.display.mensagem.color = '#FF9999';
						ui.display.mensagem.text = 'Voce foi derrotado pela maquina!';
						ui.btnContinuar.texto.text = 'Continuar';
						ui.tocarCanalUm('derrota', ui.canalUmTocando.volume, {interrupt: createjs.Sound.INTERRUPT_ANY, loop: -1});
		
						for (let unidade in ui.jogador2.unidades) {
							ui.jogador2.unidades[unidade].alpha = 1;
						}
					}
				} else if(ui.evento == 'fim_jogo') {
					ui.tocarCanalDois('click');
					ui.evento = 'novo_jogo';
					ui.resetarInterface();
					ui.tocarCanalUm('theme', ui.canalUmTocando.volume, {interrupt: createjs.Sound.INTERRUPT_ANY, loop: -1});
					ui.gotoAndStop('Menu');
				}
				
				ui.atualizarDisplay();
			});
			
		}
		
		ui.init();
		this.stop();
	}
	this.frame_121 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(120).call(this.frame_121).wait(7));

	// Preloader
	this.preloader = new lib.m_loader();
	this.preloader.name = "preloader";
	this.preloader.setTransform(762.1,407.5,1,1,0,0,0,250.1,23.5);
	this.preloader._off = true;

	this.timeline.addTween(cjs.Tween.get(this.preloader).wait(1).to({_off:false},0).to({_off:true},1).wait(126));

	// Mute
	this.mute = new lib.btn_mute();
	this.mute.name = "mute";
	this.mute.setTransform(1004,43.2,1,1,0,0,0,16.2,16.2);
	this.mute._off = true;
	var muteFilter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.mute.filters = [muteFilter_1];
	this.mute.cache(-3,-3,28,23);
	new cjs.ButtonHelper(this.mute, 0, 1, 2, false, new lib.btn_mute(), 3);

	this.timeline.addTween(cjs.Tween.get(this.mute).wait(2).to({_off:false},0).wait(126));
	this.timeline.addTween(cjs.Tween.get(muteFilter_1).wait(2).to(new cjs.ColorFilter(0,0,0,1,255,255,255,0), 0).wait(126));

	// Interacao
	this.btnOpcao1 = new lib.btn_opcao1();
	this.btnOpcao1.name = "btnOpcao1";
	this.btnOpcao1.setTransform(301.5,250.95,1,1,0,0,0,79.5,17.9);
	new cjs.ButtonHelper(this.btnOpcao1, 0, 1, 2);

	this.btnOpcao2 = new lib.btn_opcao2();
	this.btnOpcao2.name = "btnOpcao2";
	this.btnOpcao2.setTransform(441.5,250.95,1,1,0,0,0,79.5,17.9);
	new cjs.ButtonHelper(this.btnOpcao2, 0, 1, 2);

	this.btnContinuar = new lib.btn_continuar();
	this.btnContinuar.name = "btnContinuar";
	this.btnContinuar.setTransform(926.5,250.95,1,1,0,0,0,79.5,17.9);
	new cjs.ButtonHelper(this.btnContinuar, 0, 1, 2);

	this.voltarMenu = new lib.btn_voltar_seta();
	this.voltarMenu.name = "voltarMenu";
	this.voltarMenu.setTransform(31.4,33,0.7092,0.7092,0,0,0,8.6,8.6);
	this.voltarMenu.alpha = 0.5;
	new cjs.ButtonHelper(this.voltarMenu, 0, 1, 2, false, new lib.btn_voltar_seta(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.voltarMenu},{t:this.btnContinuar},{t:this.btnOpcao2},{t:this.btnOpcao1}]},127).wait(1));

	// Display
	this.display = new lib.m_display();
	this.display.name = "display";
	this.display.setTransform(767.4,116.75,1,1,0,0,0,209.5,92);
	this.display._off = true;

	this.timeline.addTween(cjs.Tween.get(this.display).wait(127).to({_off:false},0).wait(1));

	// Elementos
	this.instance = new lib.m_porta_avioes();
	this.instance.setTransform(504,-21.9,1,1,0,0,0,42,21);
	this.instance.visible = false;

	this.instance_1 = new lib.m_navio_tanque();
	this.instance_1.setTransform(336,-21.9,1,1,0,0,0,42,21);
	this.instance_1.visible = false;

	this.instance_2 = new lib.m_contratorpedeiro();
	this.instance_2.setTransform(210,-21.9,1,1,0,0,0,42,21);
	this.instance_2.visible = false;

	this.instance_3 = new lib.m_submarino();
	this.instance_3.setTransform(126,-21.9,1,1,0,0,0,42,21);
	this.instance_3.visible = false;

	this.instance_4 = new lib.m_coordenada();
	this.instance_4.setTransform(63,-21.9,1,1,0,0,0,21,21);
	this.instance_4.visible = false;

	this.instance_5 = new lib.m_posicao();
	this.instance_5.setTransform(21,-21.9,1,1,0,0,0,21,21);
	this.instance_5.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},127).wait(1));

	// Campos
	this.campoJogador2 = new lib.m_jogador2();
	this.campoJogador2.name = "campoJogador2";
	this.campoJogador2.setTransform(767.5,510.5,1,1,0,0,0,209.5,209.5);

	this.campoJogador1 = new lib.m_jogador1();
	this.campoJogador1.name = "campoJogador1";
	this.campoJogador1.setTransform(282.5,510.5,1,1,0,0,0,209.5,209.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.campoJogador1},{t:this.campoJogador2}]},127).wait(1));

	// NovoJogo
	this.comecar = new lib.btn_comecar();
	this.comecar.name = "comecar";
	this.comecar.setTransform(512,540);
	new cjs.ButtonHelper(this.comecar, 0, 1, 2, false, new lib.btn_comecar(), 3);

	this.selecionaCampo = new lib.btn_dificuldade();
	this.selecionaCampo.name = "selecionaCampo";
	this.selecionaCampo.setTransform(512,471);
	new cjs.ButtonHelper(this.selecionaCampo, 0, 1, 2, false, new lib.btn_dificuldade(), 3);

	this.nomeJogador = new lib.an_TextInput({'id': 'nomeJogador', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.nomeJogador.name = "nomeJogador";
	this.nomeJogador.setTransform(512.3,402.55,2.8451,2.6816,0,0,0,50.1,11.2);

	this.voltarNovoJogo = new lib.btn_voltar();
	this.voltarNovoJogo.name = "voltarNovoJogo";
	this.voltarNovoJogo.setTransform(512,639.05);
	new cjs.ButtonHelper(this.voltarNovoJogo, 0, 1, 2, false, new lib.btn_voltar(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.voltarNovoJogo},{t:this.nomeJogador},{t:this.selecionaCampo},{t:this.comecar}]},126).to({state:[]},1).wait(1));

	// Ranking
	this.tabelaRanking = new lib.g_rank("synched",0);
	this.tabelaRanking.name = "tabelaRanking";
	this.tabelaRanking.setTransform(506.45,462.35,1,1,0,0,0,313.1,146.3);

	this.voltarRanking = new lib.btn_voltar();
	this.voltarRanking.name = "voltarRanking";
	this.voltarRanking.setTransform(512,696.6);
	new cjs.ButtonHelper(this.voltarRanking, 0, 1, 2, false, new lib.btn_voltar(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.voltarRanking},{t:this.tabelaRanking}]},125).to({state:[]},1).wait(2));

	// Sobre
	this.instance_6 = new lib.g_sobre("synched",0);
	this.instance_6.setTransform(506.45,462.35,1,1,0,0,0,313.1,146.3);

	this.voltarSobre = new lib.btn_voltar();
	this.voltarSobre.name = "voltarSobre";
	this.voltarSobre.setTransform(512,696.6);
	new cjs.ButtonHelper(this.voltarSobre, 0, 1, 2, false, new lib.btn_voltar(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.voltarSobre},{t:this.instance_6}]},124).to({state:[]},1).wait(3));

	// Ajuda
	this.instance_7 = new lib.g_instrucoes("synched",0);
	this.instance_7.setTransform(506.45,462.35,1,1,0,0,0,313.1,146.3);

	this.voltarAjuda = new lib.btn_voltar();
	this.voltarAjuda.name = "voltarAjuda";
	this.voltarAjuda.setTransform(512,696.6);
	new cjs.ButtonHelper(this.voltarAjuda, 0, 1, 2, false, new lib.btn_voltar(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.voltarAjuda},{t:this.instance_7}]},123).to({state:[]},1).wait(4));

	// Botoes
	this.ajuda = new lib.btn_ajuda();
	this.ajuda.name = "ajuda";
	this.ajuda.setTransform(512,540.05);
	new cjs.ButtonHelper(this.ajuda, 0, 1, 2, false, new lib.btn_ajuda(), 3);

	this.sobre = new lib.btn_sobre();
	this.sobre.name = "sobre";
	this.sobre.setTransform(512,609.1);
	new cjs.ButtonHelper(this.sobre, 0, 1, 2, false, new lib.btn_sobre(), 3);

	this.ranking = new lib.btn_ranking();
	this.ranking.name = "ranking";
	this.ranking.setTransform(512,471);
	new cjs.ButtonHelper(this.ranking, 0, 1, 2, false, new lib.btn_ranking(), 3);

	this.novoJogo = new lib.btn_iniciar_jogo();
	this.novoJogo.name = "novoJogo";
	this.novoJogo.setTransform(512,402);
	new cjs.ButtonHelper(this.novoJogo, 0, 1, 2, false, new lib.btn_iniciar_jogo(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.novoJogo},{t:this.ranking},{t:this.sobre},{t:this.ajuda}]},122).to({state:[]},1).wait(5));

	// Logo_pequena
	this.instance_8 = new lib.g_logo("synched",0);
	this.instance_8.setTransform(510.2,205.7,0.707,0.7068);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(122).to({_off:false},0).wait(5).to({regY:0.1,scaleX:0.4708,scaleY:0.4705,x:246.95,y:111.45},0).wait(1));

	// Pressione_botao
	this.movieClip_1 = new lib.m_pressione_botao();
	this.movieClip_1.name = "movieClip_1";
	this.movieClip_1.setTransform(514.25,616,1,1,0,0,0,235,16);
	this.movieClip_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(121).to({_off:false},0).to({_off:true},1).wait(6));

	// Logo_grande
	this.instance_9 = new lib.g_logo("synched",0);
	this.instance_9.setTransform(512.25,208.3);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(101).to({_off:false},0).to({alpha:1},20).to({_off:true},1).wait(6));

	// Logo_UEPB
	this.instance_10 = new lib.g_logo_uepb("synched",0);
	this.instance_10.setTransform(511.9,383.95,0.734,0.7339,0,0,0,238.3,75.3);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(2).to({_off:false},0).to({alpha:1},19).wait(40).to({startPosition:0},0).to({alpha:0},20).to({_off:true},1).wait(46));

	// Camada_1
	this.jogar = new lib.btn_jogar();
	this.jogar.name = "jogar";
	this.jogar.setTransform(512,384);
	new cjs.ButtonHelper(this.jogar, 0, 1, 2, false, new lib.btn_jogar(), 3);

	this.timeline.addTween(cjs.Tween.get(this.jogar).to({_off:true},1).wait(127));

	// Plano_de_fundo_imagem
	this.instance_11 = new lib.g_background("synched",0);
	this.instance_11.setTransform(512,352,1,1,0,0,0,562,421.5);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.instance_12 = new lib.Camada8();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11}]},81).to({state:[{t:this.instance_11}]},20).to({state:[{t:this.instance_12}]},26).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(81).to({_off:false},0).to({alpha:1},20).to({_off:true},26).wait(1));

	// Plano_de_fundo_solido
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B6C9CC").s().p("EhQyA8zMAAAh5lMChlAAAMAAAB5lg");
	this.shape.setTransform(513.175,385.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},101).wait(27));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.mute, startFrame:2, endFrame:2, x:-3, y:-3, w:28, h:23});
	this.filterCacheList.push({instance: this.mute, startFrame:0, endFrame:0, x:-3, y:-3, w:28, h:23});
	this.filterCacheList.push({instance: this.mute, startFrame:2, endFrame:128, x:-3, y:-3, w:28, h:23});
	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(462,314.5,612,459.79999999999995);
// library properties:
lib.properties = {
	id: '32E3557946A0FD4F9C3779F1E63292B1',
	width: 1024,
	height: 768,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/background.png?1647996913242", id:"background"},
		{src:"images/Camada4.png?1647996913242", id:"Camada4"},
		{src:"images/Camada7.png?1647996913242", id:"Camada7"},
		{src:"images/Camada8.png?1647996913242", id:"Camada8"},
		{src:"images/com_som.png?1647996913242", id:"com_som"},
		{src:"images/contratorpedeiro3.png?1647996913242", id:"contratorpedeiro3"},
		{src:"images/explosao.png?1647996913242", id:"explosao"},
		{src:"images/fumaca.png?1647996913242", id:"fumaca"},
		{src:"images/logogrande.png?1647996913242", id:"logogrande"},
		{src:"images/logouepbcomputacao.png?1647996913242", id:"logouepbcomputacao"},
		{src:"images/naviotanque1.png?1647996913242", id:"naviotanque1"},
		{src:"images/portaavioes.png?1647996913242", id:"portaavioes"},
		{src:"images/sem_som.png?1647996913242", id:"sem_som"},
		{src:"images/submarino3.png?1647996913242", id:"submarino3"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1647996913242", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1647996913242", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js?1647996913242", id:"an.TextInput"}
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
an.compositions['32E3557946A0FD4F9C3779F1E63292B1'] = {
	getStage: function() { return exportRoot.stage; },
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
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;