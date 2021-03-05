var css = ["normalize.min.css",
			"flexboxgrid.min.css",
			"spectre.min.css",
			"spectre-exp.min.css",
			"spectre-icons.min.css"];			
css.forEach((item)=>{
	
	var stylesheet = window.loadCSS( item );

	window.onloadCSS( stylesheet, function() {

		setTimeout(()=>{

			document.querySelector("body").classList.remove("hide");
			
		},150)		
	});
});