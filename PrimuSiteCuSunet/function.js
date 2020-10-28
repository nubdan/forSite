// audio
var a = document.getElementById("unu");
var b = document.getElementById("doi");
var c = document.getElementById("trei");
var d = document.getElementById("patru");
var e = document.getElementById("cinci");
var f = document.getElementById("sase");
var g = document.getElementById("sapte");
var h = document.getElementById("opt");
var i = document.getElementById("noua");
var j = document.getElementById("sozece");
var k = document.getElementById("sounsprezece");
var v = document.getElementById("sodoisprezece");
var z = document.getElementById("final");
var y = document.getElementById("sory");
var p1Score = 0;
var p2Score = 0;

function playAudio() {
  a.play();
}

function playAudio() {
  j.play();
}

function playAudio() {
  k.play();
}

function playAudio() {
  v.play();
}

$("#imgunu").on("mouseenter", function(){
	console.log("Img1");
	a.play();
});

$("#imgdoi").on("mouseenter", function(){
	console.log("Img1");
	b.play();
});

$("#imgtrei").on("mouseenter", function(){
	console.log("Img1");
	c.play();
});

$("#imgpatru").on("mouseenter", function(){
	console.log("Img1");
	d.play();
});

$("#imgcinci").on("mouseenter", function(){
	console.log("Img1");
	e.play();
});

$("#imgsase").on("mouseenter", function(){
	console.log("Img1");
	f.play();
});

$("#imgsapte").on("mouseenter", function(){
	console.log("Img1");
	g.play();
});

$("#imgopt").on("mouseenter", function(){
	console.log("Img1");
	h.play();
});

$("#imgnoua").on("mouseenter", function(){
	console.log("Img1");
	i.play();
});


$("button.btn-outline-primary").click(function(){
	j.play();
	p2Score++;
	minuspct.textContent = p2Score;
	if(p2Score == 8){
		y.play();
		console.log("dfer");
	};
})

$("button.btn-primary").click(function(){
	v.play();
	console.log("sunet");
	$("h2").append("<h2>" + "Tester NIKOLAE NIKI" + "  " + "Tester REMA OLLY" + "</h2>");
})




$("button.btn-outline-success").on("click", function(){
	$(this).parent().fadeOut(1000, function(){
		$(this).remove();
		k.play();
		p1Score++;
		if(p1Score == 9){
			z.play();
		};
		pluspct.textContent = p1Score;
	});
});