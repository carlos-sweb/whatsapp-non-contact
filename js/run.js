var css = ["node_modules/normalize.css/normalize.min.css",
			"node_modules/flexboxgrid/dist/flexboxgrid.min.css",
			"node_modules/spectre.css/dist/spectre.min.css",
			"node_modules/spectre.css/dist/spectre-exp.min.css",
			"node_modules/spectre.css/dist/spectre-icons.min.css"];			
css.forEach((item)=>{
	
	var stylesheet = window.loadCSS( item );

	window.onloadCSS( stylesheet, function() {

		setTimeout(()=>{

			document.querySelector("body").classList.remove("hide");
			
		},150)		
	});
});