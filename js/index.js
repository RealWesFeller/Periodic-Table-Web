	var myModalBox = document.getElementById("modal-box__open");
	// BASIC PROPERTIES
	var HTMLatomicNumber = document.getElementById("atomicNumber");
	var HTMLelementSymbol = document.getElementById("elementSymbol");
	var HTMLelementName = document.getElementById("elementName");
	var HTMLelementName2 = document.getElementById("elementName2");
	var HTMLyearDiscovered = document.getElementById("yearDiscovered");
	var HTMLprotons = document.getElementById("protons");
	var HTMLneutrons = document.getElementById("neutrons");
	var HTMLelectrons = document.getElementById("electrons");
	var HTMLatomicMass = document.getElementById("atomicMass");
	var HTMLdensity = document.getElementById("density");
	// var HTMLgroupBlock = document.getElementById("group-block");


	// PHYSICAL PROPERTIES
	
	// CHEMICAL PROPERTIES
	
	// ELECTRICAL PROPERTIES
	
	// THERMODYNAMIC PROPERTIES

	// VALUES
	
	var textAtomicNumber;
	var textElementSymbol;
	var textElementName;
	var textYearDiscovered;
	var textProtons;
	var textNeutrons;
	var textElectrons;
	var textAtomicMass;
	var textDensity;
	var textGroupBlock;
	
	// Legend Variables and Functions

// Legend Options Abbreviated
var isToggledAM__legendOption = false;
var isToggledAM__ptItem = false;
var isToggledAEM__legendOption = false;
var isToggledAEM__ptItem = false;
var isToggledTM__legendOption = false;
var isToggledTM__ptItem = false;
var isToggledPTM__legendOption = false;
var isToggledPTM__ptItem = false;
var isToggledM__legendOption = false;
var isToggledM__ptItem = false;
var isToggledNM__legendOption = false;
var isToggledNM__ptItem = false;
var isToggledH__legendOption = false;
var isToggledH__ptItem = false;
var isToggledNG__legendOption = false;
var isToggledNG__ptItem = false;
var isToggledL__legendOption = false;
var isToggledL__ptItem = false;
var isToggledA__legendOption = false;
var isToggledA__ptItem = false;


function toggleOn__multipleLegendOptions(chemicalGroup) {
	
	let legendOption__alkaliMetal = document.getElementById("legend-option__alkali-metal");
	let legendOption__alkalineEarthMetal = document.getElementById("legend-option__alkaline-earth-metal");
	let legendOption__transitionMetal = document.getElementById("legend-option__transition-metal");
	let legendOption__postTransitionMetal = document.getElementById("legend-option__post-transition-metal");
	let legendOption__metalloid = document.getElementById("legend-option__metalloid");
	let legendOption__nonMetal = document.getElementById("legend-option__non-metal");
	let legendOption__halogen = document.getElementById("legend-option__halogen");
	let legendOption__nobleGas = document.getElementById("legend-option__noble-gas");
	let legendOption__lanthanide = document.getElementById("legend-option__lanthanide");
	let legendOption__actinide = document.getElementById("legend-option__actinide");
	
	// // Making Decisions
	if (chemicalGroup == 'alkali-metal') {
		if (isToggledAM__legendOption == true) {
			toggleOff__legendOption(chemicalGroup);
			removeGroupIndicator(chemicalGroup);
			isToggledAM__legendOption = false;			
		}
		else {
			legendOption__alkaliMetal.classList.add("legend__color__active");
			addGroupIndicator(chemicalGroup);
			isToggledAM__legendOption = true;
			isToggledAM__ptItem = true;
		}
		
	} else if (chemicalGroup == 'alkaline-earth-metal') {
		if (isToggledAEM__legendOption == true) {
			toggleOff__legendOption(chemicalGroup);
			removeGroupIndicator(chemicalGroup);
			isToggledAEM__legendOption = false;
		}
		else {
			legendOption__alkalineEarthMetal.classList.add("legend__color__active");
			addGroupIndicator(chemicalGroup);
			isToggledAEM__legendOption = true;
			isToggledAEM__ptItem = true;
		}
	} else if (chemicalGroup == 'transition-metal') {
		if (isToggledTM__legendOption == true) {
			toggleOff__legendOption(chemicalGroup);
			removeGroupIndicator(chemicalGroup);
			isToggledTM__legendOption = false;
		}
		else {
			legendOption__transitionMetal.classList.add("legend__color__active");
			addGroupIndicator(chemicalGroup);
			isToggledTM__legendOption = true;
			isToggledTM__ptItem = true;
		}
	} else if (chemicalGroup == 'post-transition-metal') {
		if (isToggledPTM__legendOption == true) {
			toggleOff__legendOption(chemicalGroup);
			removeGroupIndicator(chemicalGroup);
			isToggledPTM__legendOption = false;
		}
		else {
			legendOption__postTransitionMetal.classList.add("legend__color__active");
			addGroupIndicator(chemicalGroup);
			isToggledPTM__legendOption = true;
			isToggledPTM__ptItem = true;
		}
	} else if (chemicalGroup == 'metalloid') {
		if (isToggledM__legendOption == true) {
			toggleOff__legendOption(chemicalGroup);
			removeGroupIndicator(chemicalGroup);
			isToggledM__legendOption = false;
		}
		else {
			legendOption__metalloid.classList.add("legend__color__active");
			addGroupIndicator(chemicalGroup);
			isToggledM__legendOption = true;
			isToggledM__ptItem = true;
		}
	} else if (chemicalGroup == 'non-metal') {
		if (isToggledNM__legendOption == true) {
			toggleOff__legendOption(chemicalGroup);
			removeGroupIndicator(chemicalGroup);
			isToggledNM__legendOption = false;
		}
		else {
			legendOption__nonMetal.classList.add("legend__color__active");
			addGroupIndicator(chemicalGroup);
			isToggledNM__legendOption = true;
			isToggledNM__ptItem = true;
		}
	} else if (chemicalGroup == 'halogen') {
		if (isToggledH__legendOption == true) {
			toggleOff__legendOption(chemicalGroup);
			removeGroupIndicator(chemicalGroup);
			isToggledH__legendOption = false;
		}
		else {
			legendOption__halogen.classList.add("legend__color__active");
			addGroupIndicator(chemicalGroup);
			isToggledH__legendOption = true;
			isToggledH__ptItem = true;
		}
	} else if (chemicalGroup == 'noble-gas') {
		if (isToggledNG__legendOption == true) {
			toggleOff__legendOption(chemicalGroup);
			removeGroupIndicator(chemicalGroup);
			isToggledNG__legendOption = false;
		}
		else {
			legendOption__nobleGas.classList.add("legend__color__active");
			addGroupIndicator(chemicalGroup);
			isToggledNG__legendOption = true;
			isToggledNG__ptItem = true;
		}
	} else if (chemicalGroup == 'lanthanide') {
		if (isToggledL__legendOption == true) {
			toggleOff__legendOption(chemicalGroup);
			removeGroupIndicator(chemicalGroup);
			isToggledL__legendOption = false;
		}
		else {
			legendOption__lanthanide.classList.add("legend__color__active");
			addGroupIndicator(chemicalGroup);
			isToggledL__legendOption = true;
			isToggledL__ptItem = true;
		}
	} else if (chemicalGroup == 'actinide') {
		if (isToggledA__legendOption == true) {
			toggleOff__legendOption(chemicalGroup);
			removeGroupIndicator(chemicalGroup);
			isToggledA__legendOption = false;
		}
		else {
			legendOption__actinide.classList.add("legend__color__active");
			addGroupIndicator(chemicalGroup);
			isToggledA__legendOption = true;
			isToggledA__ptItem = true;
		}
	}
}



// function toggleOn__legendOption(chemicalGroup) {

	// // Variables / Assignments
	// var legendOption__alkaliMetal = document.getElementById("legend-option__alkali-metal");
	// var legendOption__alkalineEarthMetal = document.getElementById("legend-option__alkaline-earth-metal");
	// var legendOption__transitionMetal = document.getElementById("legend-option__transition-metal");
	// var legendOption__postTransitionMetal = document.getElementById("legend-option__post-transition-metal");
	// var legendOption__metalloid = document.getElementById("legend-option__metalloid");
	// var legendOption__nonMetal = document.getElementById("legend-option__non-metal");
	// var legendOption__halogen = document.getElementById("legend-option__halogen");
	// var legendOption__nobleGas = document.getElementById("legend-option__noble-gas");
	// var legendOption__lanthanide = document.getElementById("legend-option__lanthanide");
	// var legendOption__actinide = document.getElementById("legend-option__actinide");
	
	// // Making Decisions
	// if (chemicalGroup == 'alkali-metal') {
		// toggleOff__legendOption();
		
		// isToggledAM__legendOption = true;
		
		// legendOption__alkaliMetal.classList.add("legend__color__active");
		
		// addGroupIndicator(chemicalGroup);
		// removeGroupIndicator();
		
		// isToggledAM__ptItem = true;
		
	// } else if (chemicalGroup == 'alkaline-earth-metal') {
		// toggleOff__legendOption();
		
		// isToggledAEM__legendOption = true;
		
		// legendOption__alkalineEarthMetal.classList.add("legend__color__active");
		
		// addGroupIndicator(chemicalGroup);
		// removeGroupIndicator();
		
		// isToggledAEM__ptItem = true;
		
	// } else if (chemicalGroup == 'transition-metal') {
		// toggleOff__legendOption();
		
		// isToggledTM__legendOption = true;
		
		// legendOption__transitionMetal.classList.add("legend__color__active");
		
		// addGroupIndicator(chemicalGroup);
		// removeGroupIndicator();
		
		// isToggledTM__ptItem = true;
	// } else if (chemicalGroup == 'post-transition-metal') {
		// toggleOff__legendOption();
	
		// isToggledPTM__legendOption = true;
		
		// legendOption__postTransitionMetal.classList.add("legend__color__active");
		
		// addGroupIndicator(chemicalGroup);
		// removeGroupIndicator();
		
		// isToggledPTM__ptItem = true;
	// } else if (chemicalGroup == 'metalloid') {
		// toggleOff__legendOption();
	
		// isToggledM__legendOption = true;
		
		// legendOption__metalloid.classList.add("legend__color__active");
		
		// addGroupIndicator(chemicalGroup);
		// removeGroupIndicator();
		
		// isToggledM__ptItem = true;
	// } else if (chemicalGroup == 'non-metal') {
		// toggleOff__legendOption();
	
		// isToggledNM__legendOption = true;
		
		// legendOption__nonMetal.classList.add("legend__color__active");
		
		// addGroupIndicator(chemicalGroup);
		// removeGroupIndicator();
		
		// isToggledNM__ptItem = true;
	// } else if (chemicalGroup == 'halogen') {
		// toggleOff__legendOption();
	
		// isToggledH__legendOption = true;
		
		// legendOption__halogen.classList.add("legend__color__active");
		
		// addGroupIndicator(chemicalGroup);
		// removeGroupIndicator();
		
		// isToggledH__ptItem = true;
	// } else if (chemicalGroup == 'noble-gas') {
		// toggleOff__legendOption();
	
		// isToggledNG__legendOption = true;
		
		// legendOption__nobleGas.classList.add("legend__color__active");
		
		// addGroupIndicator(chemicalGroup);
		// removeGroupIndicator();
		
		// isToggledNG__ptItem = true;
	// } else if (chemicalGroup == 'lanthanide') {
		// toggleOff__legendOption();
	
		// isToggledL__legendOption = true;
		
		// legendOption__lanthanide.classList.add("legend__color__active");
		
		// addGroupIndicator(chemicalGroup);
		// removeGroupIndicator();
		
		// isToggledL__ptItem = true;
	// } else if (chemicalGroup == 'actinide') {
		// toggleOff__legendOption();
	
		// isToggledA__legendOption = true;

		// legendOption__actinide.classList.add("legend__color__active");
		
		// addGroupIndicator(chemicalGroup);
		// removeGroupIndicator();
		
		// isToggledA__ptItem = true;
	// }
// }

function toggleOff__legendOption(chemicalGroup) {
	// VariableAssignments
	
	var legendOption__alkaliMetal = document.getElementById("legend-option__alkali-metal");
	var legendOption__alkalineEarthMetal = document.getElementById("legend-option__alkaline-earth-metal");	
	var legendOption__transitionMetal = document.getElementById("legend-option__transition-metal");
	var legendOption__postTransitionMetal = document.getElementById("legend-option__post-transition-metal");
	var legendOption__metalloid = document.getElementById("legend-option__metalloid");
	var legendOption__nonMetal = document.getElementById("legend-option__non-metal");
	var legendOption__halogen = document.getElementById("legend-option__halogen");
	var legendOption__nobleGas = document.getElementById("legend-option__noble-gas");
	var legendOption__lanthanide = document.getElementById("legend-option__lanthanide");
	var legendOption__actinide = document.getElementById("legend-option__actinide");
	
	// // Making Decisions
	if (chemicalGroup == 'alkali-metal') {
		isToggledAM__legendOption = false;
		legendOption__alkaliMetal.classList.remove("legend__color__active");
	} else if (chemicalGroup == 'alkaline-earth-metal') {
		isToggledAEM__legendOption = false;
		legendOption__alkalineEarthMetal.classList.remove("legend__color__active");
	} else if (chemicalGroup == 'transition-metal') {
		isToggledTM__legendOption = false;
		legendOption__transitionMetal.classList.remove("legend__color__active");
	} else if (chemicalGroup == 'post-transition-metal') {
		isToggledPTM__legendOption = false;
		legendOption__postTransitionMetal.classList.remove("legend__color__active");
	} else if (chemicalGroup == 'metalloid') {
		isToggledM__legendOption = false;
		legendOption__metalloid.classList.remove("legend__color__active");
	} else if (chemicalGroup == 'non-metal') {
		isToggledNM__legendOption = false;
		legendOption__nonMetal.classList.remove("legend__color__active");
	} else if (chemicalGroup == 'halogen') {
		isToggledH__legendOption = false;
		legendOption__halogen.classList.remove("legend__color__active");
	} else if (chemicalGroup == 'noble-gas') {
		isToggledNG__legendOption = false;
		legendOption__nobleGas.classList.remove("legend__color__active");
	} else if (chemicalGroup == 'lanthanide') {
		isToggledL__legendOption = false;
		legendOption__lanthanide.classList.remove("legend__color__active");
	} else if (chemicalGroup == 'actinide') {
		isToggledA__legendOption = false;
		legendOption__actinide.classList.remove("legend__color__active");
	}
	
}

function addGroupIndicator(chemicalGroup) {
	// Alkali-Metals INCOMPLETE
	if (chemicalGroup == 'alkali-metal') {
		document.getElementById("element__lithium").classList.remove("legend__color-alkali-metals__inactive");
		document.getElementById("element__lithium").classList.add("legend__color-alkali-metals__active");
		
		document.getElementById("element__sodium").classList.remove("legend__color-alkali-metals__inactive");
		document.getElementById("element__sodium").classList.add("legend__color-alkali-metals__active");
		
		document.getElementById("element__potassium").classList.remove("legend__color-alkali-metals__inactive");
		document.getElementById("element__potassium").classList.add("legend__color-alkali-metals__active");
		
		document.getElementById("element__rubidium").classList.remove("legend__color-alkali-metals__inactive");
		document.getElementById("element__rubidium").classList.add("legend__color-alkali-metals__active");
		
		document.getElementById("element__cesium").classList.remove("legend__color-alkali-metals__inactive");
		document.getElementById("element__cesium").classList.add("legend__color-alkali-metals__active");
		
		document.getElementById("element__francium").classList.remove("legend__color-alkali-metals__inactive");
		document.getElementById("element__francium").classList.add("legend__color-alkali-metals__active");
	}
	// Alkaline-Earth-Metals COMPLETE
	else if (chemicalGroup == 'alkaline-earth-metal') {
		document.getElementById("element__beryllium").classList.remove("legend__color-alkaline-earth-metals__inactive");
		document.getElementById("element__beryllium").classList.add("legend__color-alkaline-earth-metals__active");
		
		document.getElementById("element__magnesium").classList.remove("legend__color-alkaline-earth-metals__inactive");
		document.getElementById("element__magnesium").classList.add("legend__color-alkaline-earth-metals__active");
		
		document.getElementById("element__calcium").classList.remove("legend__color-alkaline-earth-metals__inactive");
		document.getElementById("element__calcium").classList.add("legend__color-alkaline-earth-metals__active");
		
		document.getElementById("element__strontium").classList.remove("legend__color-alkaline-earth-metals__inactive");
		document.getElementById("element__strontium").classList.add("legend__color-alkaline-earth-metals__active");
		
		document.getElementById("element__barium").classList.remove("legend__color-alkaline-earth-metals__inactive");
		document.getElementById("element__barium").classList.add("legend__color-alkaline-earth-metals__active");
		
		document.getElementById("element__radium").classList.remove("legend__color-alkaline-earth-metals__inactive");
		document.getElementById("element__radium").classList.add("legend__color-alkaline-earth-metals__active");
	}
	
	// Transition-Metals INCOMPLETE
	else if (chemicalGroup == 'transition-metal') {
		document.getElementById("element__scandium").classList.remove("legend__color-transition-metals__inactive");
		document.getElementById("element__scandium").classList.add("legend__color-transition-metals__active");
		
		document.getElementById("element__titanium").classList.remove("legend__color-transition-metals__inactive");
		document.getElementById("element__titanium").classList.add("legend__color-transition-metals__active");
		
		document.getElementById("element__vanadium").classList.remove("legend__color-transition-metals__inactive");
		document.getElementById("element__vanadium").classList.add("legend__color-transition-metals__active");
		
		document.getElementById("element__chromium").classList.remove("legend__color-transition-metals__inactive");
		document.getElementById("element__chromium").classList.add("legend__color-transition-metals__active");
		
		document.getElementById("element__manganese").classList.remove("legend__color-transition-metals__inactive");
		document.getElementById("element__manganese").classList.add("legend__color-transition-metals__active");
		
		document.getElementById("element__iron").classList.remove("legend__color-transition-metals__inactive");
		document.getElementById("element__iron").classList.add("legend__color-transition-metals__active");
		
		document.getElementById("element__cobalt").classList.remove("legend__color-transition-metals__inactive");
		document.getElementById("element__cobalt").classList.add("legend__color-transition-metals__active");
		
		document.getElementById("element__nickel").classList.remove("legend__color-transition-metals__inactive");
		document.getElementById("element__nickel").classList.add("legend__color-transition-metals__active");
		
		document.getElementById("element__copper").classList.remove("legend__color-transition-metals__inactive");
		document.getElementById("element__copper").classList.add("legend__color-transition-metals__active");
		
		document.getElementById("element__zinc").classList.remove("legend__color-transition-metals__inactive");
		document.getElementById("element__zinc").classList.add("legend__color-transition-metals__active");
		
		document.getElementById("element__yttrium").classList.remove("legend__color-transition-metals__inactive");
		document.getElementById("element__yttrium").classList.add("legend__color-transition-metals__active");
		
		document.getElementById("element__zirconium").classList.remove("legend__color-transition-metals__inactive");
		document.getElementById("element__zirconium").classList.add("legend__color-transition-metals__active");
		
		document.getElementById("element__niobium").classList.remove("legend__color-transition-metals__inactive");
		document.getElementById("element__niobium").classList.add("legend__color-transition-metals__active");
		
		document.getElementById("element__molybdenum").classList.remove("legend__color-transition-metals__inactive");
		document.getElementById("element__molybdenum").classList.add("legend__color-transition-metals__active");
		
		document.getElementById("element__technetium").classList.remove("legend__color-transition-metals__inactive");
		document.getElementById("element__technetium").classList.add("legend__color-transition-metals__active");
		
		document.getElementById("element__ruthenium").classList.remove("legend__color-transition-metals__inactive");
		document.getElementById("element__ruthenium").classList.add("legend__color-transition-metals__active");
		
		document.getElementById("element__rhodium").classList.remove("legend__color-transition-metals__inactive");
		document.getElementById("element__rhodium").classList.add("legend__color-transition-metals__active");
		
		document.getElementById("element__palladium").classList.remove("legend__color-transition-metals__inactive");
		document.getElementById("element__palladium").classList.add("legend__color-transition-metals__active");
		
		document.getElementById("element__silver").classList.remove("legend__color-transition-metals__inactive");
		document.getElementById("element__silver").classList.add("legend__color-transition-metals__active");
		
		document.getElementById("element__cadmium").classList.remove("legend__color-transition-metals__inactive");
		document.getElementById("element__cadmium").classList.add("legend__color-transition-metals__active");
		
		document.getElementById("element__hafnium").classList.remove("legend__color-transition-metals__inactive");
		document.getElementById("element__hafnium").classList.add("legend__color-transition-metals__active");
		
		document.getElementById("element__tantalum").classList.remove("legend__color-transition-metals__inactive");
		document.getElementById("element__tantalum").classList.add("legend__color-transition-metals__active");
		
		document.getElementById("element__tungsten").classList.remove("legend__color-transition-metals__inactive");
		document.getElementById("element__tungsten").classList.add("legend__color-transition-metals__active");
		
		document.getElementById("element__rhenium").classList.remove("legend__color-transition-metals__inactive");
		document.getElementById("element__rhenium").classList.add("legend__color-transition-metals__active");
		
		document.getElementById("element__osmium").classList.remove("legend__color-transition-metals__inactive");
		document.getElementById("element__osmium").classList.add("legend__color-transition-metals__active");
		
		document.getElementById("element__iridium").classList.remove("legend__color-transition-metals__inactive");
		document.getElementById("element__iridium").classList.add("legend__color-transition-metals__active");
		
		document.getElementById("element__platinum").classList.remove("legend__color-transition-metals__inactive");
		document.getElementById("element__platinum").classList.add("legend__color-transition-metals__active");
		
		document.getElementById("element__gold").classList.remove("legend__color-transition-metals__inactive");
		document.getElementById("element__gold").classList.add("legend__color-transition-metals__active");
		
		document.getElementById("element__mercury").classList.remove("legend__color-transition-metals__inactive");
		document.getElementById("element__mercury").classList.add("legend__color-transition-metals__active");
		
		document.getElementById("element__rutherfordium").classList.remove("legend__color-transition-metals__inactive");
		document.getElementById("element__rutherfordium").classList.add("legend__color-transition-metals__active");
		
		document.getElementById("element__dubnium").classList.remove("legend__color-transition-metals__inactive");
		document.getElementById("element__dubnium").classList.add("legend__color-transition-metals__active");
		
		document.getElementById("element__seaborgium").classList.remove("legend__color-transition-metals__inactive");
		document.getElementById("element__seaborgium").classList.add("legend__color-transition-metals__active");
		
		document.getElementById("element__bohrium").classList.remove("legend__color-transition-metals__inactive");
		document.getElementById("element__bohrium").classList.add("legend__color-transition-metals__active");
		
		document.getElementById("element__hassium").classList.remove("legend__color-transition-metals__inactive");
		document.getElementById("element__hassium").classList.add("legend__color-transition-metals__active");
		
		document.getElementById("element__meitnerium").classList.remove("legend__color-transition-metals__inactive");
		document.getElementById("element__meitnerium").classList.add("legend__color-transition-metals__active");
		
		document.getElementById("element__darmstadtium").classList.remove("legend__color-transition-metals__inactive");
		document.getElementById("element__darmstadtium").classList.add("legend__color-transition-metals__active");
		
		document.getElementById("element__roentgenium").classList.remove("legend__color-transition-metals__inactive");
		document.getElementById("element__roentgenium").classList.add("legend__color-transition-metals__active");
		
		document.getElementById("element__copernicium").classList.remove("legend__color-transition-metals__inactive");
		document.getElementById("element__copernicium").classList.add("legend__color-transition-metals__active");
	}
	// Post-Transition-Metals INCOMPLETE
	else if (chemicalGroup == 'post-transition-metal') {
		document.getElementById("element__aluminum").classList.remove("legend__color-post-transition-metals__inactive");
		document.getElementById("element__aluminum").classList.add("legend__color-post-transition-metals__active");
		
		document.getElementById("element__gallium").classList.remove("legend__color-post-transition-metals__inactive");
		document.getElementById("element__gallium").classList.add("legend__color-post-transition-metals__active");
		
		document.getElementById("element__indium").classList.remove("legend__color-post-transition-metals__inactive");
		document.getElementById("element__indium").classList.add("legend__color-post-transition-metals__active");
		
		document.getElementById("element__tin").classList.remove("legend__color-post-transition-metals__inactive");
		document.getElementById("element__tin").classList.add("legend__color-post-transition-metals__active");
		
		document.getElementById("element__thallium").classList.remove("legend__color-post-transition-metals__inactive");
		document.getElementById("element__thallium").classList.add("legend__color-post-transition-metals__active");
		
		document.getElementById("element__lead").classList.remove("legend__color-post-transition-metals__inactive");
		document.getElementById("element__lead").classList.add("legend__color-post-transition-metals__active");
		
		document.getElementById("element__bismuth").classList.remove("legend__color-post-transition-metals__inactive");
		document.getElementById("element__bismuth").classList.add("legend__color-post-transition-metals__active");
		
		document.getElementById("element__nihonium").classList.remove("legend__color-post-transition-metals__inactive");
		document.getElementById("element__nihonium").classList.add("legend__color-post-transition-metals__active");
		
		document.getElementById("element__flerovium").classList.remove("legend__color-post-transition-metals__inactive");
		document.getElementById("element__flerovium").classList.add("legend__color-post-transition-metals__active");
		
		document.getElementById("element__moscovium").classList.remove("legend__color-post-transition-metals__inactive");
		document.getElementById("element__moscovium").classList.add("legend__color-post-transition-metals__active");
		
		document.getElementById("element__livermorium").classList.remove("legend__color-post-transition-metals__inactive");
		document.getElementById("element__livermorium").classList.add("legend__color-post-transition-metals__active");
	}

	// Metalloids INCOMPLETE
	else if (chemicalGroup == 'metalloid') {
		document.getElementById("element__boron").classList.remove("legend__color-metalloids__inactive");
		document.getElementById("element__boron").classList.add("legend__color-metalloids__active");
		
		document.getElementById("element__silicon").classList.remove("legend__color-metalloids__inactive");
		document.getElementById("element__silicon").classList.add("legend__color-metalloids__active");
		
		document.getElementById("element__germanium").classList.remove("legend__color-metalloids__inactive");
		document.getElementById("element__germanium").classList.add("legend__color-metalloids__active");
		
		document.getElementById("element__arsenic").classList.remove("legend__color-metalloids__inactive");
		document.getElementById("element__arsenic").classList.add("legend__color-metalloids__active");
		
		document.getElementById("element__antimony").classList.remove("legend__color-metalloids__inactive");
		document.getElementById("element__antimony").classList.add("legend__color-metalloids__active");
		
		document.getElementById("element__tellurium").classList.remove("legend__color-metalloids__inactive");
		document.getElementById("element__tellurium").classList.add("legend__color-metalloids__active");
		
		document.getElementById("element__polonium").classList.remove("legend__color-metalloids__inactive");
		document.getElementById("element__polonium").classList.add("legend__color-metalloids__active");
	}
	// Non-Metals INCOMPLETE
	else if (chemicalGroup == 'non-metal') {
		document.getElementById("element__hydrogen").classList.remove("legend__color-non-metals__inactive");
		document.getElementById("element__hydrogen").classList.add("legend__color-non-metals__active");
		
		document.getElementById("element__carbon").classList.remove("legend__color-non-metals__inactive");
		document.getElementById("element__carbon").classList.add("legend__color-non-metals__active");
		
		document.getElementById("element__nitrogen").classList.remove("legend__color-non-metals__inactive");
		document.getElementById("element__nitrogen").classList.add("legend__color-non-metals__active");
		
		document.getElementById("element__oxygen").classList.remove("legend__color-non-metals__inactive");
		document.getElementById("element__oxygen").classList.add("legend__color-non-metals__active");
		
		document.getElementById("element__phosphorus").classList.remove("legend__color-non-metals__inactive");
		document.getElementById("element__phosphorus").classList.add("legend__color-non-metals__active");
		
		document.getElementById("element__sulfur").classList.remove("legend__color-non-metals__inactive");
		document.getElementById("element__sulfur").classList.add("legend__color-non-metals__active");
		
		document.getElementById("element__selenium").classList.remove("legend__color-non-metals__inactive");
		document.getElementById("element__selenium").classList.add("legend__color-non-metals__active");
		
	}
	// Halogens INCOMPLETE
	else if (chemicalGroup == 'halogen') {
		document.getElementById("element__fluorine").classList.remove("legend__color-halogens__inactive");
		document.getElementById("element__fluorine").classList.add("legend__color-halogens__active");
		
		document.getElementById("element__chlorine").classList.remove("legend__color-halogens__inactive");
		document.getElementById("element__chlorine").classList.add("legend__color-halogens__active");
		
		document.getElementById("element__bromine").classList.remove("legend__color-halogens__inactive");
		document.getElementById("element__bromine").classList.add("legend__color-halogens__active");
		
		document.getElementById("element__iodine").classList.remove("legend__color-halogens__inactive");
		document.getElementById("element__iodine").classList.add("legend__color-halogens__active");
		
		document.getElementById("element__astatine").classList.remove("legend__color-halogens__inactive");
		document.getElementById("element__astatine").classList.add("legend__color-halogens__active");
		
		document.getElementById("element__tennessine").classList.remove("legend__color-halogens__inactive");
		document.getElementById("element__tennessine").classList.add("legend__color-halogens__active");		
	}
	// Noble Gases INCOMPLETE
	else if (chemicalGroup == 'noble-gas') {
		document.getElementById("element__helium").classList.remove("legend__color-noble-gases__inactive");
		document.getElementById("element__helium").classList.add("legend__color-noble-gases__active");
		
		document.getElementById("element__neon").classList.remove("legend__color-noble-gases__inactive");
		document.getElementById("element__neon").classList.add("legend__color-noble-gases__active");
		
		document.getElementById("element__argon").classList.remove("legend__color-noble-gases__inactive");
		document.getElementById("element__argon").classList.add("legend__color-noble-gases__active");
		
		document.getElementById("element__krypton").classList.remove("legend__color-noble-gases__inactive");
		document.getElementById("element__krypton").classList.add("legend__color-noble-gases__active");
		
		document.getElementById("element__xenon").classList.remove("legend__color-noble-gases__inactive");
		document.getElementById("element__xenon").classList.add("legend__color-noble-gases__active");
		
		document.getElementById("element__radon").classList.remove("legend__color-noble-gases__inactive");
		document.getElementById("element__radon").classList.add("legend__color-noble-gases__active");	
		
		document.getElementById("element__oganesson").classList.remove("legend__color-noble-gases__inactive");
		document.getElementById("element__oganesson").classList.add("legend__color-noble-gases__active");		
	}
	// Lanthanides INCOMPLETE
	else if (chemicalGroup == 'lanthanide') {
		
		document.getElementById("element__lanthanum").classList.remove("legend__color-lanthanides__inactive");
		document.getElementById("element__lanthanum").classList.add("legend__color-lanthanides__active");
		
		document.getElementById("element__cerium").classList.remove("legend__color-lanthanides__inactive");
		document.getElementById("element__cerium").classList.add("legend__color-lanthanides__active");
		
		document.getElementById("element__praseodymium").classList.remove("legend__color-lanthanides__inactive");
		document.getElementById("element__praseodymium").classList.add("legend__color-lanthanides__active");
		
		document.getElementById("element__neodymium").classList.remove("legend__color-lanthanides__inactive");
		document.getElementById("element__neodymium").classList.add("legend__color-lanthanides__active");
		
		document.getElementById("element__promethium").classList.remove("legend__color-lanthanides__inactive");
		document.getElementById("element__promethium").classList.add("legend__color-lanthanides__active");
		
		document.getElementById("element__samarium").classList.remove("legend__color-lanthanides__inactive");
		document.getElementById("element__samarium").classList.add("legend__color-lanthanides__active");
		
		document.getElementById("element__europium").classList.remove("legend__color-lanthanides__inactive");
		document.getElementById("element__europium").classList.add("legend__color-lanthanides__active");
		
		document.getElementById("element__gadolinium").classList.remove("legend__color-lanthanides__inactive");
		document.getElementById("element__gadolinium").classList.add("legend__color-lanthanides__active");
		
		document.getElementById("element__terbium").classList.remove("legend__color-lanthanides__inactive");
		document.getElementById("element__terbium").classList.add("legend__color-lanthanides__active");
		
		document.getElementById("element__dysprosium").classList.remove("legend__color-lanthanides__inactive");
		document.getElementById("element__dysprosium").classList.add("legend__color-lanthanides__active");
		
		document.getElementById("element__holmium").classList.remove("legend__color-lanthanides__inactive");
		document.getElementById("element__holmium").classList.add("legend__color-lanthanides__active");
		
		document.getElementById("element__erbium").classList.remove("legend__color-lanthanides__inactive");
		document.getElementById("element__erbium").classList.add("legend__color-lanthanides__active");
		
		document.getElementById("element__thulium").classList.remove("legend__color-lanthanides__inactive");
		document.getElementById("element__thulium").classList.add("legend__color-lanthanides__active");
		
		document.getElementById("element__ytterbium").classList.remove("legend__color-lanthanides__inactive");
		document.getElementById("element__ytterbium").classList.add("legend__color-lanthanides__active");
		
		document.getElementById("element__lutetium").classList.remove("legend__color-lanthanides__inactive");
		document.getElementById("element__lutetium").classList.add("legend__color-lanthanides__active");
	}
	// Actinides INCOMPLETE
	else if (chemicalGroup == 'actinide') {
		
		document.getElementById("element__actinium").classList.remove("legend__color-actinides__inactive");
		document.getElementById("element__actinium").classList.add("legend__color-actinides__active");
		
		document.getElementById("element__thorium").classList.remove("legend__color-actinides__inactive");
		document.getElementById("element__thorium").classList.add("legend__color-actinides__active");
		
		document.getElementById("element__protactinium").classList.remove("legend__color-actinides__inactive");
		document.getElementById("element__protactinium").classList.add("legend__color-actinides__active");
		
		document.getElementById("element__uranium").classList.remove("legend__color-actinides__inactive");
		document.getElementById("element__uranium").classList.add("legend__color-actinides__active");
		
		document.getElementById("element__neptunium").classList.remove("legend__color-actinides__inactive");
		document.getElementById("element__neptunium").classList.add("legend__color-actinides__active");
		
		document.getElementById("element__plutonium").classList.remove("legend__color-actinides__inactive");
		document.getElementById("element__plutonium").classList.add("legend__color-actinides__active");
		
		document.getElementById("element__americium").classList.remove("legend__color-actinides__inactive");
		document.getElementById("element__americium").classList.add("legend__color-actinides__active");
		
		document.getElementById("element__curium").classList.remove("legend__color-actinides__inactive");
		document.getElementById("element__curium").classList.add("legend__color-actinides__active");
		
		document.getElementById("element__berkelium").classList.remove("legend__color-actinides__inactive");
		document.getElementById("element__berkelium").classList.add("legend__color-actinides__active");
		
		document.getElementById("element__californium").classList.remove("legend__color-actinides__inactive");
		document.getElementById("element__californium").classList.add("legend__color-actinides__active");
		
		document.getElementById("element__einsteinium").classList.remove("legend__color-actinides__inactive");
		document.getElementById("element__einsteinium").classList.add("legend__color-actinides__active");
		
		document.getElementById("element__fermium").classList.remove("legend__color-actinides__inactive");
		document.getElementById("element__fermium").classList.add("legend__color-actinides__active");
		
		document.getElementById("element__mendelevium").classList.remove("legend__color-actinides__inactive");
		document.getElementById("element__mendelevium").classList.add("legend__color-actinides__active");
		
		document.getElementById("element__nobelium").classList.remove("legend__color-actinides__inactive");
		document.getElementById("element__nobelium").classList.add("legend__color-actinides__active");
		
		document.getElementById("element__lawrencium").classList.remove("legend__color-actinides__inactive");
		document.getElementById("element__lawrencium").classList.add("legend__color-actinides__active");
	}
}

function removeGroupIndicator(chemicalGroup) {
	// Alkali-Metals INCOMPLETE
	if (chemicalGroup == 'alkali-metal') {
		
		document.getElementById("element__lithium").classList.remove("legend__color-alkali-metals__active");
		document.getElementById("element__lithium").classList.add("legend__color-alkali-metals__inactive");
		
		document.getElementById("element__sodium").classList.remove("legend__color-alkali-metals__active");
		document.getElementById("element__sodium").classList.add("legend__color-alkali-metals__inactive");
		
		document.getElementById("element__potassium").classList.remove("legend__color-alkali-metals__active");
		document.getElementById("element__potassium").classList.add("legend__color-alkali-metals__inactive");
		
		document.getElementById("element__rubidium").classList.remove("legend__color-alkali-metals__active");
		document.getElementById("element__rubidium").classList.add("legend__color-alkali-metals__inactive");
		
		document.getElementById("element__cesium").classList.remove("legend__color-alkali-metals__active");
		document.getElementById("element__cesium").classList.add("legend__color-alkali-metals__inactive");
		
		document.getElementById("element__francium").classList.remove("legend__color-alkali-metals__active");
		document.getElementById("element__francium").classList.add("legend__color-alkali-metals__inactive");
	}
	// Alkaline-Earth-Metals COMPLETE
	else if (chemicalGroup == 'alkaline-earth-metal') {
		
		document.getElementById("element__beryllium").classList.remove("legend__color-alkaline-earth-metals__active");
		document.getElementById("element__beryllium").classList.add("legend__color-alkaline-earth-metals__inactive");
		
		document.getElementById("element__magnesium").classList.remove("legend__color-alkaline-earth-metals__active");
		document.getElementById("element__magnesium").classList.add("legend__color-alkaline-earth-metals__inactive");
		
		document.getElementById("element__calcium").classList.remove("legend__color-alkaline-earth-metals__active");
		document.getElementById("element__calcium").classList.add("legend__color-alkaline-earth-metals__inactive");
		
		document.getElementById("element__strontium").classList.remove("legend__color-alkaline-earth-metals__active");
		document.getElementById("element__strontium").classList.add("legend__color-alkaline-earth-metals__inactive");
		
		document.getElementById("element__barium").classList.remove("legend__color-alkaline-earth-metals__active");
		document.getElementById("element__barium").classList.add("legend__color-alkaline-earth-metals__inactive");
		
		document.getElementById("element__radium").classList.remove("legend__color-alkaline-earth-metals__active");
		document.getElementById("element__radium").classList.add("legend__color-alkaline-earth-metals__inactive");
	}
	
		
	// Transition-Metals INCOMPLETE
	else if (chemicalGroup == 'transition-metal') {
		
		document.getElementById("element__scandium").classList.remove("legend__color-transition-metals__active");
		document.getElementById("element__scandium").classList.add("legend__color-transition-metals__inactive");
		
		document.getElementById("element__titanium").classList.remove("legend__color-transition-metals__active");
		document.getElementById("element__titanium").classList.add("legend__color-transition-metals__inactive");
		
		document.getElementById("element__vanadium").classList.remove("legend__color-transition-metals__active");
		document.getElementById("element__vanadium").classList.add("legend__color-transition-metals__inactive");
		
		document.getElementById("element__chromium").classList.remove("legend__color-transition-metals__active");
		document.getElementById("element__chromium").classList.add("legend__color-transition-metals__inactive");
		
		document.getElementById("element__manganese").classList.remove("legend__color-transition-metals__active");
		document.getElementById("element__manganese").classList.add("legend__color-transition-metals__inactive");
		
		document.getElementById("element__iron").classList.remove("legend__color-transition-metals__active");
		document.getElementById("element__iron").classList.add("legend__color-transition-metals__inactive");
		
		document.getElementById("element__cobalt").classList.remove("legend__color-transition-metals__active");
		document.getElementById("element__cobalt").classList.add("legend__color-transition-metals__inactive");
		
		document.getElementById("element__nickel").classList.remove("legend__color-transition-metals__active");
		document.getElementById("element__nickel").classList.add("legend__color-transition-metals__inactive");
		
		document.getElementById("element__copper").classList.remove("legend__color-transition-metals__active");
		document.getElementById("element__copper").classList.add("legend__color-transition-metals__inactive");
		
		document.getElementById("element__zinc").classList.remove("legend__color-transition-metals__active");
		document.getElementById("element__zinc").classList.add("legend__color-transition-metals__inactive");
		
		document.getElementById("element__yttrium").classList.remove("legend__color-transition-metals__active");
		document.getElementById("element__yttrium").classList.add("legend__color-transition-metals__inactive");
		
		document.getElementById("element__zirconium").classList.remove("legend__color-transition-metals__active");
		document.getElementById("element__zirconium").classList.add("legend__color-transition-metals__inactive");
		
		document.getElementById("element__niobium").classList.remove("legend__color-transition-metals__active");
		document.getElementById("element__niobium").classList.add("legend__color-transition-metals__inactive");
		
		document.getElementById("element__molybdenum").classList.remove("legend__color-transition-metals__active");
		document.getElementById("element__molybdenum").classList.add("legend__color-transition-metals__inactive");
		
		document.getElementById("element__technetium").classList.remove("legend__color-transition-metals__active");
		document.getElementById("element__technetium").classList.add("legend__color-transition-metals__inactive");
		
		document.getElementById("element__ruthenium").classList.remove("legend__color-transition-metals__active");
		document.getElementById("element__ruthenium").classList.add("legend__color-transition-metals__inactive");
		
		document.getElementById("element__rhodium").classList.remove("legend__color-transition-metals__active");
		document.getElementById("element__rhodium").classList.add("legend__color-transition-metals__inactive");
		
		document.getElementById("element__palladium").classList.remove("legend__color-transition-metals__active");
		document.getElementById("element__palladium").classList.add("legend__color-transition-metals__inactive");
		
		document.getElementById("element__silver").classList.remove("legend__color-transition-metals__active");
		document.getElementById("element__silver").classList.add("legend__color-transition-metals__inactive");
		
		document.getElementById("element__cadmium").classList.remove("legend__color-transition-metals__active");
		document.getElementById("element__cadmium").classList.add("legend__color-transition-metals__inactive");
		
		document.getElementById("element__hafnium").classList.remove("legend__color-transition-metals__active");
		document.getElementById("element__hafnium").classList.add("legend__color-transition-metals__inactive");
		
		document.getElementById("element__tantalum").classList.remove("legend__color-transition-metals__active");
		document.getElementById("element__tantalum").classList.add("legend__color-transition-metals__inactive");
		
		document.getElementById("element__tungsten").classList.remove("legend__color-transition-metals__active");
		document.getElementById("element__tungsten").classList.add("legend__color-transition-metals__inactive");
		
		document.getElementById("element__rhenium").classList.remove("legend__color-transition-metals__active");
		document.getElementById("element__rhenium").classList.add("legend__color-transition-metals__inactive");
		
		document.getElementById("element__osmium").classList.remove("legend__color-transition-metals__active");
		document.getElementById("element__osmium").classList.add("legend__color-transition-metals__inactive");
		
		document.getElementById("element__iridium").classList.remove("legend__color-transition-metals__active");
		document.getElementById("element__iridium").classList.add("legend__color-transition-metals__inactive");
		
		document.getElementById("element__platinum").classList.remove("legend__color-transition-metals__active");
		document.getElementById("element__platinum").classList.add("legend__color-transition-metals__inactive");
		
		document.getElementById("element__gold").classList.remove("legend__color-transition-metals__active");
		document.getElementById("element__gold").classList.add("legend__color-transition-metals__inactive");
		
		document.getElementById("element__mercury").classList.remove("legend__color-transition-metals__active");
		document.getElementById("element__mercury").classList.add("legend__color-transition-metals__inactive");
		
		document.getElementById("element__rutherfordium").classList.remove("legend__color-transition-metals__active");
		document.getElementById("element__rutherfordium").classList.add("legend__color-transition-metals__inactive");
		
		document.getElementById("element__dubnium").classList.remove("legend__color-transition-metals__active");
		document.getElementById("element__dubnium").classList.add("legend__color-transition-metals__inactive");
		
		document.getElementById("element__seaborgium").classList.remove("legend__color-transition-metals__active");
		document.getElementById("element__seaborgium").classList.add("legend__color-transition-metals__inactive");
		
		document.getElementById("element__bohrium").classList.remove("legend__color-transition-metals__active");
		document.getElementById("element__bohrium").classList.add("legend__color-transition-metals__inactive");
		
		document.getElementById("element__hassium").classList.remove("legend__color-transition-metals__active");
		document.getElementById("element__hassium").classList.add("legend__color-transition-metals__inactive");
		
		document.getElementById("element__meitnerium").classList.remove("legend__color-transition-metals__active");
		document.getElementById("element__meitnerium").classList.add("legend__color-transition-metals__inactive");
		
		document.getElementById("element__darmstadtium").classList.remove("legend__color-transition-metals__active");
		document.getElementById("element__darmstadtium").classList.add("legend__color-transition-metals__inactive");
		
		document.getElementById("element__roentgenium").classList.remove("legend__color-transition-metals__active");
		document.getElementById("element__roentgenium").classList.add("legend__color-transition-metals__inactive");
		
		document.getElementById("element__copernicium").classList.remove("legend__color-transition-metals__active");
		document.getElementById("element__copernicium").classList.add("legend__color-transition-metals__inactive");
		
	}
	// Post-Transition-Metals INCOMPLETE
	else if (chemicalGroup == 'post-transition-metal') {
		
		document.getElementById("element__aluminum").classList.remove("legend__color-post-transition-metals__active");
		document.getElementById("element__aluminum").classList.add("legend__color-post-transition-metals__inactive");
		
		document.getElementById("element__gallium").classList.remove("legend__color-post-transition-metals__active");
		document.getElementById("element__gallium").classList.add("legend__color-post-transition-metals__inactive");
		
		document.getElementById("element__indium").classList.remove("legend__color-post-transition-metals__active");
		document.getElementById("element__indium").classList.add("legend__color-post-transition-metals__inactive");
		
		document.getElementById("element__tin").classList.remove("legend__color-post-transition-metals__active");
		document.getElementById("element__tin").classList.add("legend__color-post-transition-metals__inactive");
		
		document.getElementById("element__thallium").classList.remove("legend__color-post-transition-metals__active");
		document.getElementById("element__thallium").classList.add("legend__color-post-transition-metals__inactive");
		
		document.getElementById("element__lead").classList.remove("legend__color-post-transition-metals__active");
		document.getElementById("element__lead").classList.add("legend__color-post-transition-metals__inactive");
		
		document.getElementById("element__bismuth").classList.remove("legend__color-post-transition-metals__active");
		document.getElementById("element__bismuth").classList.add("legend__color-post-transition-metals__inactive");
		
		document.getElementById("element__nihonium").classList.remove("legend__color-post-transition-metals__active");
		document.getElementById("element__nihonium").classList.add("legend__color-post-transition-metals__inactive");
		
		document.getElementById("element__flerovium").classList.remove("legend__color-post-transition-metals__active");
		document.getElementById("element__flerovium").classList.add("legend__color-post-transition-metals__inactive");
		
		document.getElementById("element__moscovium").classList.remove("legend__color-post-transition-metals__active");
		document.getElementById("element__moscovium").classList.add("legend__color-post-transition-metals__inactive");
		
		document.getElementById("element__livermorium").classList.remove("legend__color-post-transition-metals__active");
		document.getElementById("element__livermorium").classList.add("legend__color-post-transition-metals__inactive");
	}
	// Metalloids INCOMPLETE
	else if (chemicalGroup == 'metalloid') {
		
		document.getElementById("element__boron").classList.remove("legend__color-metalloids__active");
		document.getElementById("element__boron").classList.add("legend__color-metalloids__inactive");
		
		document.getElementById("element__silicon").classList.remove("legend__color-metalloids__active");
		document.getElementById("element__silicon").classList.add("legend__color-metalloids__inactive");
		
		document.getElementById("element__germanium").classList.remove("legend__color-metalloids__active");
		document.getElementById("element__germanium").classList.add("legend__color-metalloids__inactive");
		
		document.getElementById("element__arsenic").classList.remove("legend__color-metalloids__active");
		document.getElementById("element__arsenic").classList.add("legend__color-metalloids__inactive");
		
		document.getElementById("element__antimony").classList.remove("legend__color-metalloids__active");
		document.getElementById("element__antimony").classList.add("legend__color-metalloids__inactive");
		
		document.getElementById("element__tellurium").classList.remove("legend__color-metalloids__active");
		document.getElementById("element__tellurium").classList.add("legend__color-metalloids__inactive");
		
		document.getElementById("element__polonium").classList.remove("legend__color-metalloids__active");
		document.getElementById("element__polonium").classList.add("legend__color-metalloids__inactive");
	}
	// Non-Metals INCOMPLETE
	else if (chemicalGroup == 'non-metal') {
		
		document.getElementById("element__hydrogen").classList.remove("legend__color-non-metals__active");
		document.getElementById("element__hydrogen").classList.add("legend__color-non-metals__inactive");
		
		document.getElementById("element__carbon").classList.remove("legend__color-non-metals__active");
		document.getElementById("element__carbon").classList.add("legend__color-non-metals__inactive");
		
		document.getElementById("element__nitrogen").classList.remove("legend__color-non-metals__active");
		document.getElementById("element__nitrogen").classList.add("legend__color-non-metals__inactive");
		
		document.getElementById("element__oxygen").classList.remove("legend__color-non-metals__active");
		document.getElementById("element__oxygen").classList.add("legend__color-non-metals__inactive");
		
		document.getElementById("element__phosphorus").classList.remove("legend__color-non-metals__active");
		document.getElementById("element__phosphorus").classList.add("legend__color-non-metals__inactive");
		
		document.getElementById("element__sulfur").classList.remove("legend__color-non-metals__active");
		document.getElementById("element__sulfur").classList.add("legend__color-non-metals__inactive");
		
		document.getElementById("element__selenium").classList.remove("legend__color-non-metals__active");
		document.getElementById("element__selenium").classList.add("legend__color-non-metals__inactive");
		
	}
	// Halogens INCOMPLETE
	else if (chemicalGroup == 'halogen') {
		
		document.getElementById("element__fluorine").classList.remove("legend__color-halogens__active");
		document.getElementById("element__fluorine").classList.add("legend__color-halogens__inactive");
		
		document.getElementById("element__chlorine").classList.remove("legend__color-halogens__active");
		document.getElementById("element__chlorine").classList.add("legend__color-halogens__inactive");
		
		document.getElementById("element__bromine").classList.remove("legend__color-halogens__active");
		document.getElementById("element__bromine").classList.add("legend__color-halogens__inactive");
		
		document.getElementById("element__iodine").classList.remove("legend__color-halogens__active");
		document.getElementById("element__iodine").classList.add("legend__color-halogens__inactive");
		
		document.getElementById("element__astatine").classList.remove("legend__color-halogens__active");
		document.getElementById("element__astatine").classList.add("legend__color-halogens__inactive");
		
		document.getElementById("element__tennessine").classList.remove("legend__color-halogens__active");
		document.getElementById("element__tennessine").classList.add("legend__color-halogens__inactive");		
	}
	// Noble Gases INCOMPLETE
	else if (chemicalGroup == 'noble-gas') {
		
		document.getElementById("element__helium").classList.remove("legend__color-noble-gases__active");
		document.getElementById("element__helium").classList.add("legend__color-noble-gases__inactive");
		
		document.getElementById("element__neon").classList.remove("legend__color-noble-gases__active");
		document.getElementById("element__neon").classList.add("legend__color-noble-gases__inactive");
		
		document.getElementById("element__argon").classList.remove("legend__color-noble-gases__active");
		document.getElementById("element__argon").classList.add("legend__color-noble-gases__inactive");
		
		document.getElementById("element__krypton").classList.remove("legend__color-noble-gases__active");
		document.getElementById("element__krypton").classList.add("legend__color-noble-gases__inactive");
		
		document.getElementById("element__xenon").classList.remove("legend__color-noble-gases__active");
		document.getElementById("element__xenon").classList.add("legend__color-noble-gases__inactive");
		
		document.getElementById("element__radon").classList.remove("legend__color-noble-gases__active");
		document.getElementById("element__radon").classList.add("legend__color-noble-gases__inactive");	
		
		document.getElementById("element__oganesson").classList.remove("legend__color-noble-gases__active");
		document.getElementById("element__oganesson").classList.add("legend__color-noble-gases__inactive");		
	}
	// Lanthanides INCOMPLETE
	else if (chemicalGroup == 'lanthanide') {
	
		document.getElementById("element__lanthanum").classList.remove("legend__color-lanthanides__active");
		document.getElementById("element__lanthanum").classList.add("legend__color-lanthanides__inactive");
		
		document.getElementById("element__cerium").classList.remove("legend__color-lanthanides__active");
		document.getElementById("element__cerium").classList.add("legend__color-lanthanides__inactive");
		
		document.getElementById("element__praseodymium").classList.remove("legend__color-lanthanides__active");
		document.getElementById("element__praseodymium").classList.add("legend__color-lanthanides__inactive");
		
		document.getElementById("element__neodymium").classList.remove("legend__color-lanthanides__active");
		document.getElementById("element__neodymium").classList.add("legend__color-lanthanides__inactive");
		
		document.getElementById("element__promethium").classList.remove("legend__color-lanthanides__active");
		document.getElementById("element__promethium").classList.add("legend__color-lanthanides__inactive");
		
		document.getElementById("element__samarium").classList.remove("legend__color-lanthanides__active");
		document.getElementById("element__samarium").classList.add("legend__color-lanthanides__inactive");
		
		document.getElementById("element__europium").classList.remove("legend__color-lanthanides__active");
		document.getElementById("element__europium").classList.add("legend__color-lanthanides__inactive");
		
		document.getElementById("element__gadolinium").classList.remove("legend__color-lanthanides__active");
		document.getElementById("element__gadolinium").classList.add("legend__color-lanthanides__inactive");
		
		document.getElementById("element__terbium").classList.remove("legend__color-lanthanides__active");
		document.getElementById("element__terbium").classList.add("legend__color-lanthanides__inactive");
		
		document.getElementById("element__dysprosium").classList.remove("legend__color-lanthanides__active");
		document.getElementById("element__dysprosium").classList.add("legend__color-lanthanides__inactive");
		
		document.getElementById("element__holmium").classList.remove("legend__color-lanthanides__active");
		document.getElementById("element__holmium").classList.add("legend__color-lanthanides__inactive");
		
		document.getElementById("element__erbium").classList.remove("legend__color-lanthanides__active");
		document.getElementById("element__erbium").classList.add("legend__color-lanthanides__inactive");
		
		document.getElementById("element__thulium").classList.remove("legend__color-lanthanides__active");
		document.getElementById("element__thulium").classList.add("legend__color-lanthanides__inactive");
		
		document.getElementById("element__ytterbium").classList.remove("legend__color-lanthanides__active");
		document.getElementById("element__ytterbium").classList.add("legend__color-lanthanides__inactive");
		
		document.getElementById("element__lutetium").classList.remove("legend__color-lanthanides__active");
		document.getElementById("element__lutetium").classList.add("legend__color-lanthanides__inactive");
	}
	// Actinides INCOMPLETE
	else if (chemicalGroup == 'actinide') {
	
		document.getElementById("element__actinium").classList.remove("legend__color-actinides__active");
		document.getElementById("element__actinium").classList.add("legend__color-actinides__inactive");
		
		document.getElementById("element__thorium").classList.remove("legend__color-actinides__active");
		document.getElementById("element__thorium").classList.add("legend__color-actinides__inactive");
		
		document.getElementById("element__protactinium").classList.remove("legend__color-actinides__active");
		document.getElementById("element__protactinium").classList.add("legend__color-actinides__inactive");
		
		document.getElementById("element__uranium").classList.remove("legend__color-actinides__active");
		document.getElementById("element__uranium").classList.add("legend__color-actinides__inactive");
		
		document.getElementById("element__neptunium").classList.remove("legend__color-actinides__active");
		document.getElementById("element__neptunium").classList.add("legend__color-actinides__inactive");
		
		document.getElementById("element__plutonium").classList.remove("legend__color-actinides__active");
		document.getElementById("element__plutonium").classList.add("legend__color-actinides__inactive");
		
		document.getElementById("element__americium").classList.remove("legend__color-actinides__active");
		document.getElementById("element__americium").classList.add("legend__color-actinides__inactive");
		
		document.getElementById("element__curium").classList.remove("legend__color-actinides__active");
		document.getElementById("element__curium").classList.add("legend__color-actinides__inactive");
		
		document.getElementById("element__berkelium").classList.remove("legend__color-actinides__active");
		document.getElementById("element__berkelium").classList.add("legend__color-actinides__inactive");
		
		document.getElementById("element__californium").classList.remove("legend__color-actinides__active");
		document.getElementById("element__californium").classList.add("legend__color-actinides__inactive");
		
		document.getElementById("element__einsteinium").classList.remove("legend__color-actinides__active");
		document.getElementById("element__einsteinium").classList.add("legend__color-actinides__inactive");
		
		document.getElementById("element__fermium").classList.remove("legend__color-actinides__active");
		document.getElementById("element__fermium").classList.add("legend__color-actinides__inactive");
		
		document.getElementById("element__mendelevium").classList.remove("legend__color-actinides__active");
		document.getElementById("element__mendelevium").classList.add("legend__color-actinides__inactive");
		
		document.getElementById("element__nobelium").classList.remove("legend__color-actinides__active");
		document.getElementById("element__nobelium").classList.add("legend__color-actinides__inactive");
		
		document.getElementById("element__lawrencium").classList.remove("legend__color-actinides__active");
		document.getElementById("element__lawrencium").classList.add("legend__color-actinides__inactive");
	}
	
}

function toggleOn__modal__darkOverlay(chemicalElement) {
	// Displays a dark overlay with 0.7 opacity for the modal
	document.getElementById("modal__dark-overlay").style.top = "0";
	document.getElementById("modal__dark-overlay").style.left = "0";
	document.getElementById("modal__dark-overlay").style.opacity = "0.7";
	
	// Lets modal box open at the top of scroll each time function is executed
	myModalBox.scrollTop = 0;
	// TEST
	// alert(chemicalElement);
	
	printElementDetails(chemicalElement);

};

function toggleOff__modal__darkOverlay() {	
	const myModalBox = document.getElementById("modal-box__open");

	document.getElementById("modal__dark-overlay").style.opacity = "0";
	document.getElementById("modal__dark-overlay").style.removeProperty('top');
	document.getElementById("modal__dark-overlay").style.removeProperty('left');
	
	myModalBox.style.bottom = "-80vh";
	myModalBox.style.padding = "0px";
	myModalBox.style.border = "1px solid #222";
	document.getElementById("modal-box__btn-close").style.padding = "0px";
  
}

function printElementDetails(chemicalElement) {
	let newViewportWidth = window.innerWidth;
	// TEST
	// alert("The chemical element " + chemicalElement + " was successfully passed to function printElementDetails().");
	
	// 1. Add text to appropriate HTML element based on chemical element chosen.
	
	// 2. Display myModalBox
	// Display modal-box 93vh if window width is < 1160px
	if (newViewportWidth < 600) {
		myModalBox.style.bottom = "0";
		myModalBox.style.padding = "0 20px";
		// myModalBox.style.width = "100vw";
		myModalBox.style.height = "78%";
		
	} else {
		myModalBox.style.border = "1px solid #666";
		myModalBox.style.borderBottom = "none";
		myModalBox.style.bottom = "0";
		
		myModalBox.style.padding = "0 20px";
	}
	document.getElementById("modal-box__btn-close").style.display = "block";
		
	
	if(chemicalElement == 'hydrogen') {		
		// TEST
		// alert("YES");
		textAtomicNumber = 1;
		textElementSymbol = "H";
		textElementName = "Hydrogen";
		textYearDiscovered = 1766;
		textProtons = 1;
		textNeutrons = 0;
		textElectrons = 1;
		textAtomicMass = 1.008;
		textDensity = 0.000089;
		textGroupBlock = "Non-Metal";		
		
		fillInnerHTML();
		
	} else if(chemicalElement == 'helium') {
		// TEST
		// alert("YES");
		textAtomicNumber = 2;
		textElementSymbol = "He";
		textElementName = "Helium";
		textYearDiscovered = 1868;
		textProtons = 2;
		textNeutrons = 2;
		textElectrons = 2;
		textAtomicMass = 4.0026;
		textDensity = 0.000179;
		textGroupBlock = "Noble Gas";
		
		fillInnerHTML();
	} else if(chemicalElement == 'lithium') {
		// TEST
		// alert("YES");
		textAtomicNumber = 3;
		textElementSymbol = "Li";
		textElementName = "Lithium";
		textYearDiscovered = 1817;
		textProtons = 3;
		textNeutrons = 3;
		textElectrons = 3;
		textAtomicMass = 7;
		textDensity = 0.534;
		textGroupBlock = "Alkali Metal";
		
		fillInnerHTML();
	} else if(chemicalElement == 'beryllium') {
		// TEST
		// alert("YES");
		textAtomicNumber = 4;
		textElementSymbol = "Be";
		textElementName = "Beryllium";
		textYearDiscovered = 1798;
		textProtons = 4;
		textNeutrons = 4;
		textElectrons = 4;
		textAtomicMass = 9.012183;
		textDensity = 1.85;
		textGroupBlock = "Alkaline Earth Metal";
		
		fillInnerHTML();
	} else if(chemicalElement == 'boron') {
		// TEST
		// alert("YES");
		textAtomicNumber = 4;
		textElementSymbol = "B";
		textElementName = "Boron";
		textYearDiscovered = 1808;
		textProtons = 4;
		textNeutrons = 4;
		textElectrons = 4;
		textAtomicMass = 10.81;
		textDensity = 2.37;
		textGroupBlock = "Metalloid";
		
		fillInnerHTML();
	} else if(chemicalElement == 'carbon') {
		// TEST
		// alert("YES");
		textAtomicNumber = 5;
		textElementSymbol = "C";
		textElementName = "Carbon";
		textYearDiscovered = "Ancient";
		textProtons = 5;
		textNeutrons = 5;
		textElectrons = 5;
		textAtomicMass = 12.011;
		textDensity = 2.267;
		textGroupBlock = "Non-Metal";
		
		fillInnerHTML();
	} else if(chemicalElement == 'nitrogen') {
		// TEST
		// alert("YES");
		textAtomicNumber = 7;
		textElementSymbol = "N";
		textElementName = "Nitrogen";
		textYearDiscovered = 1772;
		textProtons = 7;
		textNeutrons = 7;
		textElectrons = 7;
		textAtomicMass = 14.007;
		textDensity = 0.001251;
		textGroupBlock = "Non-Metal";
		
		fillInnerHTML();
	} else if(chemicalElement == 'oxygen') {
		// TEST
		// alert("YES");
		textAtomicNumber = 8;
		textElementSymbol = "O";
		textElementName = "Oxygen";
		textYearDiscovered = 1817;
		textProtons = 8;
		textNeutrons = 8;
		textElectrons = 8;
		textAtomicMass = 15.999;
		textDensity = 0.001429;
		textGroupBlock = "Non-Metal";
		
		fillInnerHTML();
	} else if(chemicalElement == 'fluorine') {
		// TEST
		// alert("YES");
		textAtomicNumber = 9;
		textElementSymbol = "F";
		textElementName = "Fluorine";
		textYearDiscovered = 1670;
		textProtons = 9;
		textNeutrons = 9;
		textElectrons = 9;
		textAtomicMass = 18.998403;
		textDensity = 0.001696;
		textGroupBlock = "Halogen";
		
		fillInnerHTML();
	} else if(chemicalElement == 'neon') {
		// TEST
		// alert("YES");
		textAtomicNumber = 10;
		textElementSymbol = "Ne";
		textElementName = "Neon";
		textYearDiscovered = 1898;
		textProtons = 10;
		textNeutrons = 10;
		textElectrons = 10;
		textAtomicMass = 20.18;
		textDensity = 0.000899;
		textGroupBlock = "Noble Gas";
		
		fillInnerHTML();
	} else if(chemicalElement == 'sodium') {
		// TEST
		// alert("YES");
		textAtomicNumber = 11;
		textElementSymbol = "Na";
		textElementName = "Sodium";
		textYearDiscovered = 1807;
		textProtons = 11;
		textNeutrons = 11;
		textElectrons = 11;
		textAtomicMass = 22.989769;
		textDensity = 0.97;
		textGroupBlock = "Alkali Metal";
		
		fillInnerHTML();
	} else if(chemicalElement == 'magnesium') {
		// TEST
		// alert("YES");
		textAtomicNumber = 12;
		textElementSymbol = "Mg";
		textElementName = "Magnesium";
		textYearDiscovered = 1808;
		textProtons = 12;
		textNeutrons = 12;
		textElectrons = 12;
		textAtomicMass = 24.305;
		textDensity = 1.74;
		textGroupBlock = "Alkaline Earth Metal";
		
		fillInnerHTML();
	}
	
};

function fillInnerHTML() {
	// TEST
	// alert("WOO");
	
	HTMLatomicNumber.innerHTML = textAtomicNumber;
	HTMLelementSymbol.innerHTML = textElementSymbol;
	HTMLelementName.innerHTML = textElementName;
	HTMLelementName2.innerHTML = textGroupBlock;
	HTMLyearDiscovered.innerHTML = textYearDiscovered;
	HTMLprotons.innerHTML = textProtons;
	HTMLneutrons.innerHTML = textNeutrons;
	HTMLelectrons.innerHTML = textElectrons;
	HTMLatomicMass.innerHTML = textAtomicMass;
	HTMLdensity.innerHTML = textDensity;
	// HTMLgroupBlock.innerHTML = textGroupBlock;
}



// What is this doing?
let modalBox__expandButtonClicked = false;

function modalBox__expandLine() {
	let modalBox__expandButton = document.getElementById("modalBox__buttonExpand");
	
	if (modalBox__expandButtonClicked == false) {
		modalBox__expandButton.innerHTML = '-';
		// modalBox__expandButton.style.color = "red";
		modalBox__expandButton.classList.remove('modal-box__button-expand__inactive');
		modalBox__expandButton.classList.add('modal-box__button-expand__active');
		// Add code to expand line vertically for graphics here
		
		modalBox__expandButtonClicked = true;
	} else {
		modalBox__expandButton.innerHTML = '+';
		// modalBox__expandButton.style.color = "lime";
		modalBox__expandButton.classList.remove('modal-box__button-expand__active');
		modalBox__expandButton.classList.add('modal-box__button-expand__inactive');
		
		modalBox__expandButtonClicked = false;
	}
	
}

// modalBox__expandButton.addEventListener('hover', () => {
  // modalBox__expandButton.style.color = 'yellow'; // Change text color
// });