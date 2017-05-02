
#include "lib/namespaces.js";
#include "lib/Set-Default-Character-Style.jsx";

function main() {
	$.writeln("[" + Date().toString() + "] Post-Process-XML");
	insertElementText(".//pub:x000A", '\r');				// paragraph return
	insertElementText(".//pub:x202F", '\u202F');			// narrow non-breaking space
	insertElementText(".//pub:x2011", SpecialCharacters.NONBREAKING_HYPHEN);
	insertElementText(".//pub:x2002", SpecialCharacters.EN_SPACE);
	insertElementText(".//pub:x2003", SpecialCharacters.EM_SPACE);
	insertElementText(".//pub:x200A", SpecialCharacters.HAIR_SPACE);
	insertElementText(".//pub:x2009", SpecialCharacters.THIN_SPACE);
	insertElementText(".//pub:x2007", SpecialCharacters.FIGURE_SPACE);
	insertElementText(".//pub:x00AD", SpecialCharacters.DISCRETIONARY_HYPHEN);
	insertElementText(".//pub:x00A0", SpecialCharacters.NONBREAKING_SPACE);
	insertElementText(".//pub:x2008", SpecialCharacters.PUNCTUATION_SPACE);
	insertElementText(".//pub:tab[not(@indent)]", '\t');	// (regular) tab
	insertElementText(".//pub:tab[@indent='right']", SpecialCharacters.RIGHT_INDENT_TAB);
	insertElementText(".//pub:tab[@indent='here']", SpecialCharacters.INDENT_HERE_TAB);
	insertElementText(".//pub:linebreak", SpecialCharacters.FORCED_LINE_BREAK);
	insertElementText(".//pub:colbreak", SpecialCharacters.COLUMN_BREAK);
	insertElementText(".//pub:framebreak", SpecialCharacters.FRAME_BREAK);
	insertElementText(".//pub:pagebreak[not(@class)]", SpecialCharacters.PAGE_BREAK);
	insertElementText(".//pub:pagebreak[@class='even']", SpecialCharacters.EVEN_PAGE_BREAK);
	insertElementText(".//pub:pagebreak[@class='odd']", SpecialCharacters.ODD_PAGE_BREAK);
	// insertElementText(".//pub:end-nested-style", SpecialCharacters.END_NESTED_STYLE);

	setDefaultCharacterStyle();
	// setColumnWidths();

	$.writeln("[" + Date().toString() + "]");
}

function insertElementText(xpath, text, position, document) {
	$.writeln("[" + Date().toString() + "] insertElementText(): " + xpath);
	position = position || XMLElementPosition.ELEMENT_END;
	document = document || app.activeDocument;
	for (i=0; i < document.xmlElements.length; i++) {
		var elems = document.xmlElements[i].evaluateXPathExpression(xpath, NS);
		for (j=0; j < elems.length; j++) {
			elems[j].insertTextAsContent(text, position);
		}
	}	
}

main();
