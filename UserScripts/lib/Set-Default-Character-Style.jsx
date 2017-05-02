
#include "namespaces.js";

function setDefaultCharacterStyle(document) {
	$.writeln("[" + Date().toString() + "] setDefaultCharacterStyle()");
	document = document || app.activeDocument;
	ensureCharacterStyleExists("default", document);
	for (i=0; i < document.xmlElements.length; i++) {
		// make sure text with no character style attribute has no character style applied
		var root = document.xmlElements[i];
		var xpath = ".//*[not(@aid:cstyle or ancestor::*[@aid:cstyle] or descendant::*[@aid:cstyle])]";
		var elems = root.evaluateXPathExpression(xpath, NS);
		for (j=0; j < elems.length; j++) {
			var e = elems[j];
			e.applyCharacterStyle("default");
		}
	}
}

function ensureCharacterStyleExists(name, document) {
	document = document || app.activeDocument;
	var cstyleExists = false;
	for (i=0; i < document.allCharacterStyles.length; i++) {
		if (document.allCharacterStyles[i].name=='default') {
			cstyleExists = true;
		}
	}
	if (!cstyleExists) {
		document.characterStyles.add({"name":name});
	}
}
