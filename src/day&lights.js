const DayLights = (() => {
	const toggleDayLigts = () => {
		const day = !jQuery('#switch-day-nights').prop('checked');

		function changecss(theClass,element,value) {
			//Last Updated on July 4, 2011
			//documentation for this script at
			//http://www.shawnolson.net/a/503/altering-css-class-attributes-with-javascript.html
			let cssRules;


			for (let S = 0; S < document.styleSheets.length; S++){
				try{
					document.styleSheets[S].insertRule(theClass+' { '+element+': '+value+'; }',document.styleSheets[S][cssRules].length);

				} catch(err){
					try{document.styleSheets[S].addRule(theClass,element+': '+value+';');

					}catch(err){

						try{
							if (document.styleSheets[S]['rules']) {
								cssRules = 'rules';
							} else if (document.styleSheets[S]['cssRules']) {
								cssRules = 'cssRules';
							} else {
								//no rules found... browser unknown
							}

							for (var R = 0; R < document.styleSheets[S][cssRules].length; R++) {
								if (document.styleSheets[S][cssRules][R].selectorText == theClass) {
									if(document.styleSheets[S][cssRules][R].style[element]){
										document.styleSheets[S][cssRules][R].style[element] = value;
										break;
									}
								}
							}
						} catch (err){}}}}}

		Object.keys(cssDayLights.css).forEach(key => {
			Object.keys(cssDayLights.css[key]).forEach(key2 => {
				changecss(key,key2,day ? cssDayLights.css[key][key2][0] : cssDayLights.css[key][key2][1] )
			});
		});
	};

	return Object.freeze(Object.defineProperties({},{

		toggle : { value : toggleDayLigts }

	}));
})();
