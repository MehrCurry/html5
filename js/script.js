  // ensure the web page (DOM) has loaded
  document.addEventListener("DOMContentLoaded", function () {

     // Create a popcorn instance by calling Popcorn("#id-of-my-video")
     var pop = Popcorn("#thevideo");

	 pop.image({
		start: 1,
		end: 11,
		src: "media/Abendvortrag 2011 - Komplex. oder doch nur kompliziert.001.jpg",
		target: "slides" 
	});

	 pop.image({
		start: 12,
		end: 17,
		src: "media/Abendvortrag 2011 - Komplex. oder doch nur kompliziert.002.jpg",
		target: "slides" 
	});

	 pop.image({
		start: 17,
		end: 24,
		src: "media/Abendvortrag 2011 - Komplex. oder doch nur kompliziert.003.jpg",
		target: "slides" 
	});

	 pop.image({
		start: 24,
		end: 32,
		src: "media/Abendvortrag 2011 - Komplex. oder doch nur kompliziert.004.jpg",
		target: "slides" 
	});

     // play the video right away
     pop.play();

  }, false);
