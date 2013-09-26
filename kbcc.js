jQuery.noConflict();

function init() {
	jQuery('.kbcc').each(function (index) {
		var $kbcc = jQuery(this);
		var hash = $kbcc.text().toUpperCase().replace('#', '').split(',');
		var alphaKey = ( hash[0] && ABS_SP[hash[0]] ) ? hash[0] : 'WFK';
		var alphaLegend = ( hash[1] && ABS_SP[hash[1]] ) ? hash[1] : 'NN';
		var modsKey = ( hash[2] && ABS_SP[hash[2]] ) ? hash[2] : alphaKey;
		var modsLegend = ( hash[3] && ABS_SP[hash[3]] ) ? hash[3] : alphaLegend;
		var alphaStyle = getStyle(alphaKey, alphaLegend);
		var modsStyle = getStyle(modsKey, modsLegend);
		$kbcc
		.empty()
		.append(jQuery('<div>', { class: 'wrapper' })
			.append(jQuery('<div>', { id: 'keyboard' })
				.append(jQuery('<ul>', { class: 'row bspace050' })
					.append(jQuery('<li>', { class: 'group2 u100 rspace100 small mods' }).append(jQuery('<span>', { style: modsStyle }).append('Esc')))
					.append(jQuery('<li>', { class: 'group1 u100 small alpha' }).append(jQuery('<span>', { style: alphaStyle }).append('F1')))
					.append(jQuery('<li>', { class: 'group1 u100 small alpha' }).append(jQuery('<span>', { style: alphaStyle }).append('F2')))
					.append(jQuery('<li>', { class: 'group1 u100 small alpha' }).append(jQuery('<span>', { style: alphaStyle }).append('F3')))
					.append(jQuery('<li>', { class: 'group1 u100 rspace050 small alpha' }).append(jQuery('<span>', { style: alphaStyle }).append('F4')))
					.append(jQuery('<li>', { class: 'group2 u100 small mods' }).append(jQuery('<span>', { style: modsStyle }).append('F5')))
					.append(jQuery('<li>', { class: 'group2 u100 small mods' }).append(jQuery('<span>', { style: modsStyle }).append('F6')))
					.append(jQuery('<li>', { class: 'group2 u100 small mods' }).append(jQuery('<span>', { style: modsStyle }).append('F7')))
					.append(jQuery('<li>', { class: 'group2 u100 rspace050 small mods' }).append(jQuery('<span>', { style: modsStyle }).append('F8')))
					.append(jQuery('<li>', { class: 'group1 u100 small alpha' }).append(jQuery('<span>', { style: alphaStyle }).append('F9')))
					.append(jQuery('<li>', { class: 'group1 u100 small alpha' }).append(jQuery('<span>', { style: alphaStyle }).append('F10')))
					.append(jQuery('<li>', { class: 'group1 u100 small alpha' }).append(jQuery('<span>', { style: alphaStyle }).append('F11')))
					.append(jQuery('<li>', { class: 'group1 u100 rspace025 small alpha' }).append(jQuery('<span>', { style: alphaStyle }).append('F12')))
					.append(jQuery('<li>', { class: 'group2 u100 smaller mods' }).append(jQuery('<span>', { style: modsStyle }).append('PrtScn')))
					.append(jQuery('<li>', { class: 'group2 u100 smaller mods' }).append(jQuery('<span>', { style: modsStyle }).append('ScLck')))
					.append(jQuery('<li>', { class: 'group2 u100 smaller mods' }).append(jQuery('<span>', { style: modsStyle }).append('Pause Break')))
				)
				.append(jQuery('<ul>', { class: 'row' })
					.append(jQuery('<li>', { class: 'u100 mods' }).append(jQuery('<span>', { style: modsStyle }).append('`')))
					.append(jQuery('<li>', { class: 'u100 alpha' }).append(jQuery('<span>', { style: alphaStyle }).append('1')))
					.append(jQuery('<li>', { class: 'u100 alpha' }).append(jQuery('<span>', { style: alphaStyle }).append('2')))
					.append(jQuery('<li>', { class: 'u100 alpha' }).append(jQuery('<span>', { style: alphaStyle }).append('3')))
					.append(jQuery('<li>', { class: 'u100 alpha' }).append(jQuery('<span>', { style: alphaStyle }).append('4')))
					.append(jQuery('<li>', { class: 'u100 alpha' }).append(jQuery('<span>', { style: alphaStyle }).append('5')))
					.append(jQuery('<li>', { class: 'u100 alpha' }).append(jQuery('<span>', { style: alphaStyle }).append('6')))
					.append(jQuery('<li>', { class: 'u100 alpha' }).append(jQuery('<span>', { style: alphaStyle }).append('7')))
					.append(jQuery('<li>', { class: 'u100 alpha' }).append(jQuery('<span>', { style: alphaStyle }).append('8')))
					.append(jQuery('<li>', { class: 'u100 alpha' }).append(jQuery('<span>', { style: alphaStyle }).append('9')))
					.append(jQuery('<li>', { class: 'u100 alpha' }).append(jQuery('<span>', { style: alphaStyle }).append('0')))
					.append(jQuery('<li>', { class: 'u100 alpha' }).append(jQuery('<span>', { style: alphaStyle }).append('-')))
					.append(jQuery('<li>', { class: 'u100 alpha' }).append(jQuery('<span>', { style: alphaStyle }).append('=')))
					.append(jQuery('<li>', { class: 'u200 rspace025 small mods' }).append(jQuery('<span>', { style: modsStyle }).append('Backspace')))
					.append(jQuery('<li>', { class: 'u100 small mods' }).append(jQuery('<span>', { style: modsStyle }).append('Ins')))
					.append(jQuery('<li>', { class: 'u100 small mods' }).append(jQuery('<span>', { style: modsStyle }).append('Home')))
					.append(jQuery('<li>', { class: 'u100 small mods' }).append(jQuery('<span>', { style: modsStyle }).append('PgUp')))
				)
				.append(jQuery('<ul>', { class: 'row' })
					.append(jQuery('<li>', { class: 'u150 small mods' }).append(jQuery('<span>', { style: modsStyle }).append('Tab')))
					.append(jQuery('<li>', { class: 'u100 alpha' }).append(jQuery('<span>', { style: alphaStyle }).append('Q')))
					.append(jQuery('<li>', { class: 'u100 alpha' }).append(jQuery('<span>', { style: alphaStyle }).append('W')))
					.append(jQuery('<li>', { class: 'u100 alpha' }).append(jQuery('<span>', { style: alphaStyle }).append('E')))
					.append(jQuery('<li>', { class: 'u100 alpha' }).append(jQuery('<span>', { style: alphaStyle }).append('R')))
					.append(jQuery('<li>', { class: 'u100 alpha' }).append(jQuery('<span>', { style: alphaStyle }).append('T')))
					.append(jQuery('<li>', { class: 'u100 alpha' }).append(jQuery('<span>', { style: alphaStyle }).append('Y')))
					.append(jQuery('<li>', { class: 'u100 alpha' }).append(jQuery('<span>', { style: alphaStyle }).append('U')))
					.append(jQuery('<li>', { class: 'u100 alpha' }).append(jQuery('<span>', { style: alphaStyle }).append('I')))
					.append(jQuery('<li>', { class: 'u100 alpha' }).append(jQuery('<span>', { style: alphaStyle }).append('O')))
					.append(jQuery('<li>', { class: 'u100 alpha' }).append(jQuery('<span>', { style: alphaStyle }).append('P')))
					.append(jQuery('<li>', { class: 'u100 alpha' }).append(jQuery('<span>', { style: alphaStyle }).append('[')))
					.append(jQuery('<li>', { class: 'u100 alpha' }).append(jQuery('<span>', { style: alphaStyle }).append(']')))
					.append(jQuery('<li>', { class: 'u150 rspace025 mods' }).append(jQuery('<span>', { style: modsStyle }).append('&#92;')))
					.append(jQuery('<li>', { class: 'u100 small mods' }).append(jQuery('<span>', { style: modsStyle }).append('Del')))
					.append(jQuery('<li>', { class: 'u100 small mods' }).append(jQuery('<span>', { style: modsStyle }).append('End')))
					.append(jQuery('<li>', { class: 'u100 small mods' }).append(jQuery('<span>', { style: modsStyle }).append('PgDn')))
				)
				.append(jQuery('<ul>', { class: 'row' })
					.append(jQuery('<li>', { class: 'u175 small mods' }).append(jQuery('<span>', { style: modsStyle }).append('CapsLock')))
					.append(jQuery('<li>', { class: 'u100 alpha' }).append(jQuery('<span>', { style: alphaStyle }).append('A')))
					.append(jQuery('<li>', { class: 'u100 alpha' }).append(jQuery('<span>', { style: alphaStyle }).append('S')))
					.append(jQuery('<li>', { class: 'u100 alpha' }).append(jQuery('<span>', { style: alphaStyle }).append('D')))
					.append(jQuery('<li>', { class: 'u100 alpha' }).append(jQuery('<span>', { style: alphaStyle }).append('F')))
					.append(jQuery('<li>', { class: 'u100 alpha' }).append(jQuery('<span>', { style: alphaStyle }).append('G')))
					.append(jQuery('<li>', { class: 'u100 alpha' }).append(jQuery('<span>', { style: alphaStyle }).append('H')))
					.append(jQuery('<li>', { class: 'u100 alpha' }).append(jQuery('<span>', { style: alphaStyle }).append('J')))
					.append(jQuery('<li>', { class: 'u100 alpha' }).append(jQuery('<span>', { style: alphaStyle }).append('K')))
					.append(jQuery('<li>', { class: 'u100 alpha' }).append(jQuery('<span>', { style: alphaStyle }).append('L')))
					.append(jQuery('<li>', { class: 'u100 alpha' }).append(jQuery('<span>', { style: alphaStyle }).append(';')))
					.append(jQuery('<li>', { class: 'u100 alpha' }).append(jQuery('<span>', { style: alphaStyle }).append('&#39;')))
					.append(jQuery('<li>', { class: 'u225 rspace325 small mods' }).append(jQuery('<span>', { style: modsStyle }).append('Enter')))
				)
				.append(jQuery('<ul>', { class: 'row' })
					.append(jQuery('<li>', { class: 'u225 small mods' }).append(jQuery('<span>', { style: modsStyle }).append('Shift')))
					.append(jQuery('<li>', { class: 'u100 alpha' }).append(jQuery('<span>', { style: alphaStyle }).append('Z')))
					.append(jQuery('<li>', { class: 'u100 alpha' }).append(jQuery('<span>', { style: alphaStyle }).append('X')))
					.append(jQuery('<li>', { class: 'u100 alpha' }).append(jQuery('<span>', { style: alphaStyle }).append('C')))
					.append(jQuery('<li>', { class: 'u100 alpha' }).append(jQuery('<span>', { style: alphaStyle }).append('V')))
					.append(jQuery('<li>', { class: 'u100 alpha' }).append(jQuery('<span>', { style: alphaStyle }).append('B')))
					.append(jQuery('<li>', { class: 'u100 alpha' }).append(jQuery('<span>', { style: alphaStyle }).append('N')))
					.append(jQuery('<li>', { class: 'u100 alpha' }).append(jQuery('<span>', { style: alphaStyle }).append('M')))
					.append(jQuery('<li>', { class: 'u100 alpha' }).append(jQuery('<span>', { style: alphaStyle }).append(',')))
					.append(jQuery('<li>', { class: 'u100 alpha' }).append(jQuery('<span>', { style: alphaStyle }).append('.')))
					.append(jQuery('<li>', { class: 'u100 alpha' }).append(jQuery('<span>', { style: alphaStyle }).append('/')))
					.append(jQuery('<li>', { class: 'u275 rspace125 small mods' }).append(jQuery('<span>', { style: modsStyle }).append('Shift')))
					.append(jQuery('<li>', { class: 'u100 rspace100 mods' }).append(jQuery('<span>', { style: modsStyle }).append('&uarr;')))
				)
				.append(jQuery('<ul>', { class: 'row' })
					.append(jQuery('<li>', { class: 'u125 small mods' }).append(jQuery('<span>', { style: modsStyle }).append('Ctrl')))
					.append(jQuery('<li>', { class: 'u125 small mods' }).append(jQuery('<span>', { style: modsStyle }).append('Super')))
					.append(jQuery('<li>', { class: 'u125 small mods' }).append(jQuery('<span>', { style: modsStyle }).append('Alt')))
					.append(jQuery('<li>', { class: 'u625 alpha' }).append(jQuery('<span>', { style: alphaStyle }).append('&nbsp;')))
					.append(jQuery('<li>', { class: 'u125 small mods' }).append(jQuery('<span>', { style: modsStyle }).append('Alt')))
					.append(jQuery('<li>', { class: 'u125 small mods' }).append(jQuery('<span>', { style: modsStyle }).append('Super')))
					.append(jQuery('<li>', { class: 'u125 small mods' }).append(jQuery('<span>', { style: modsStyle }).append('Menu')))
					.append(jQuery('<li>', { class: 'u125 rspace025 small mods' }).append(jQuery('<span>', { style: modsStyle }).append('Ctrl')))
					.append(jQuery('<li>', { class: 'u100 mods' }).append(jQuery('<span>', { style: modsStyle }).append('&larr;')))
					.append(jQuery('<li>', { class: 'u100 mods' }).append(jQuery('<span>', { style: modsStyle }).append('&darr;')))
					.append(jQuery('<li>', { class: 'u100 mods' }).append(jQuery('<span>', { style: modsStyle }).append('&rarr;')))
				)
			)
			.append(jQuery('<div>', { id:'alphapreview', class: 'preview' })
				.append(jQuery('<div>', { class: 'keypreview' })
					.append(jQuery('<div>', { class: 'previewcolor', style: getKeyPreviewStyle(alphaKey) }))
					.append(jQuery('<div>', { class: 'previewoverlay', style: getLegendPreviewStyle(alphaLegend) }).append('A'))
				)
				.append(jQuery('<div>', { class: 'summary' })
					.append(jQuery('<div>', { class: 'summarycolor', style: getSummaryStyle(alphaKey) }).append(alphaKey))
					.append(jQuery('<div>', { class: 'summarylegend', style: getSummaryStyle(alphaLegend) }).append(alphaLegend))
				)
			)
			.append(jQuery('<div>', { id:'modpreview', class: 'preview' })
				.append(jQuery('<div>', { class: 'keypreview' })
					.append(jQuery('<div>', { class: 'previewcolor', style: getKeyPreviewStyle(modsKey) }))
					.append(jQuery('<div>', { class: 'previewoverlay', style: getLegendPreviewStyle(modsLegend) }).append('Alt'))
				)
				.append(jQuery('<div>', { class: 'summary' })
					.append(jQuery('<div>', { class: 'summarycolor', style: getSummaryStyle(modsKey) }).append(modsKey))
					.append(jQuery('<div>', { class: 'summarylegend', style: getSummaryStyle(modsLegend) }).append(modsLegend))
				)
			)
			.append(jQuery('<div>', { class: 'footer' })
				.append(jQuery('<a>', { target: '_blank', href: 'http://lab.cubiq.org/kbcc/#' + hash }).append('Keyboard color chooser'))
				.append(', brought to you by Matteo Spinelli, released under GPL license.')
			)
		)
		$kbcc.removeClass('hidden');
	});
}

function getStyle(key, legend) {
	return 'background-color: #' + ABS_SP[key].rgb + '; color: #' + ABS_SP[legend].rgb + ';';
}

function getKeyPreviewStyle(color) {
	return 'background-color: #' + ABS_SP[color].rgb + ';'
}

function getLegendPreviewStyle(color) {
	return 'color: #' + ABS_SP[color].rgb + ';'
}

function getSummaryStyle(color) {
	return 'background-color: #' + ABS_SP[color].rgb + '; color: ' + getContrast(ABS_SP[color].rgb) + ';';
}

function getContrast(hexcolor) {
	return (parseInt(hexcolor, 16) > 0xffffff/2) ? 'black' : 'white';
}

var ABS_SP = {
	WFK: { family: 'whites', rgb: 'f2f2f2', name: 'white' },
	WA:  { family: 'whites', rgb: 'eeebeb', name: 'off-white' },
	WCK: { family: 'whites', rgb: 'f2eee4', name: 'cream' },
	WFO: { family: 'whites', rgb: 'ebe7df', name: '' },
	WQ:  { family: 'whites', rgb: 'e6e6e0', name: '' },
	WW:  { family: 'whites', rgb: 'e8e3da', name: '' },
	WFM: { family: 'whites', rgb: 'ece4e0', name: '' },
	WEA: { family: 'whites', rgb: 'e6e0d4', name: '' },
	WBO: { family: 'whites', rgb: 'eae3d0', name: '' },
	WV:  { family: 'whites', rgb: 'e4e2d8', name: '' },
	WAR: { family: 'whites', rgb: 'b8b5a0', name: '' },
//	WBM: { family: 'whites', rgb: 'e5e3d1', name: '' },		// uncalibrated

//	RDA: { family: 'reds', rgb: '753389', name: '' },	// uncalibrated
	RCU: { family: 'reds', rgb: 'ec6b5b', name: 'salmon' },
	RR:  { family: 'reds', rgb: 'e41116', name: '' },
	RCQ: { family: 'reds', rgb: 'da0c12', name: '' },
	RA:  { family: 'reds', rgb: 'd2081b', name: '' },
	RN:  { family: 'reds', rgb: 'b71520', name: '' },
//	RBV: { family: 'reds', rgb: 'a90c15', name: '' },	// uncalibrated
	RDD: { family: 'reds', rgb: 'b7081d', name: '' },
	RAC: { family: 'reds', rgb: 'b5171e', name: '' },
	RAS: { family: 'reds', rgb: 'a9071f', name: '' },
	RBC: { family: 'reds', rgb: '762e33', name: 'burgundy' },
	
	RCJ: { family: 'violets', rgb: 'c4a4d1', name: 'lavender' },
	RCS: { family: 'violets', rgb: 'ebb1d4', name: 'pink' },
	RCR: { family: 'violets', rgb: 'e784b2', name: '' },
	RDA: { family: 'violets', rgb: '793885', name: '' },
	RDE: { family: 'violets', rgb: '751f5b', name: 'purple' },
	
	OAS: { family: 'oranges', rgb: 'fb8704', name: 'tangerine' },
	OBC: { family: 'oranges', rgb: 'ea8300', name: '' },
	ON:  { family: 'oranges', rgb: 'f05902', name: '' },
	OAV: { family: 'oranges', rgb: 'fa4620', name: '' },
	OB:  { family: 'oranges', rgb: 'ec3518', name: '' },

// 	YCA: { family: 'yellows', rgb: 'fefee6', name: '' },	// uncalibrated
	YCC: { family: 'yellows', rgb: 'f7e7aa', name: '' },
	YCE: { family: 'yellows', rgb: 'fbf065', name: '' },
	YY:  { family: 'yellows', rgb: 'f5e22b', name: '' },
// 	YK:  { family: 'yellows', rgb: 'fef58c', name: '' },	// uncalibrated
// 	YCD: { family: 'yellows', rgb: 'f6ea60', name: '' },	// uncalibrated
	YCH: { family: 'yellows', rgb: 'f1dd03', name: '' },
	YCB: { family: 'yellows', rgb: 'e6ce41', name: '' },
	YCF: { family: 'yellows', rgb: 'f4c72b', name: '' },
	YBP: { family: 'yellows', rgb: 'fdc61d', name: '' },
// 	YCG: { family: 'yellows', rgb: 'fdc623', name: '' },	// uncalibrated
	YL:  { family: 'yellows', rgb: 'e19f08', name: '' },
	YW:  { family: 'yellows', rgb: 'd09c24', name: '' },
	YG:  { family: 'yellows', rgb: 'cbac3c', name: '' },

	VBV: { family: 'greens', rgb: '5cdece', name: 'turquoise' },
	VCO: { family: 'greens', rgb: '62e1bc', name: '' },
	VAT: { family: 'greens', rgb: '98dc4b', name: 'lime' },
	VAV: { family: 'greens', rgb: '81ad53', name: '' },
	VBQ: { family: 'greens', rgb: '55994a', name: '' },
	VCS: { family: 'greens', rgb: '028033', name: '' },
	VAF: { family: 'greens', rgb: '65aba3', name: '' },
	VAG: { family: 'greens', rgb: '13af89', name: '' },
	VCK: { family: 'greens', rgb: '009a66', name: '' },
	VCM: { family: 'greens', rgb: '009a55', name: '' },
	VCJ: { family: 'greens', rgb: '008b5c', name: '' },
	VH:  { family: 'greens', rgb: '80a791', name: '' },
	VF:  { family: 'greens', rgb: '4f8a68', name: '' },
	VV:  { family: 'greens', rgb: '03643e', name: '' },

	BFM: { family: 'blues', rgb: 'c2d4eb', name: '' },
	BFO: { family: 'blues', rgb: 'bcd0de', name: '' },
	BFL: { family: 'blues', rgb: '82a8c4', name: '' },
	BFT: { family: 'blues', rgb: '7693ae', name: '' },
	BFQ: { family: 'blues', rgb: '6fdfe4', name: '' },
	BBQ: { family: 'blues', rgb: '10b6c5', name: '' },
	BDG: { family: 'blues', rgb: '42a0b3', name: '' },
	BEY: { family: 'blues', rgb: '4d9aa3', name: '' },
	BFJ: { family: 'blues', rgb: '6a9fbf', name: '' },
	BBJ: { family: 'blues', rgb: '069ec4', name: '' },
	BX:  { family: 'blues', rgb: '4d93ae', name: '' },
	BFN: { family: 'blues', rgb: '5095cf', name: '' },
	BFP: { family: 'blues', rgb: '1c76b9', name: '' },
	BE:  { family: 'blues', rgb: '0275a8', name: '' },
	BDH: { family: 'blues', rgb: '0458ad', name: '' },
	BFK: { family: 'blues', rgb: '0852a0', name: '' },
	BO:  { family: 'blues', rgb: '03498a', name: '' },
	BGA: { family: 'blues', rgb: '0a4779', name: '' },
	BFR: { family: 'blues', rgb: '2b3651', name: '' },
	BED: { family: 'blues', rgb: '123655', name: '' },
	BBI: { family: 'blues', rgb: '192748', name: '' },
	BFU: { family: 'blues', rgb: '131e51', name: '' },
	
//	BM:  { family: 'blues', rgb: '2f405c', name: 'prussian' },		// uncalibrated

	TM:  { family: 'browns', rgb: 'e4dabe', name: '' },
	TN:  { family: 'browns', rgb: 'd9cbaf', name: '' },
	TU:  { family: 'browns', rgb: 'd9c7aa', name: '' },
	TBT: { family: 'browns', rgb: 'cec4af', name: '' },
	TEA: { family: 'browns', rgb: 'dac7a2', name: '' },
	TGG: { family: 'browns', rgb: 'a29a82', name: '' },
	TGH: { family: 'browns', rgb: '61351e', name: 'cappuccino' },
	TBN: { family: 'browns', rgb: '413327', name: 'coffee' },
	TAA: { family: 'browns', rgb: '222423', name: 'ebony' },
	
	// cold
	GA:  { family: 'cold-grays', rgb: '9ea3a1', name: '' },
	GTH: { family: 'cold-grays', rgb: 'a1a8a8', name: '' },
	GSC: { family: 'cold-grays', rgb: '929d9f', name: '' },
	GSP: { family: 'cold-grays', rgb: '839091', name: '' },
	GTD: { family: 'cold-grays', rgb: '818986', name: '' },
	GO:  { family: 'cold-grays', rgb: '767f7c', name: '' },
	GDC: { family: 'cold-grays', rgb: '6b7271', name: '' },
	GPA: { family: 'cold-grays', rgb: '5b686c', name: '' },
	GY:  { family: 'cold-grays', rgb: '6f797a', name: '' },
	GD:  { family: 'cold-grays', rgb: '627379', name: '' },
	GSM: { family: 'cold-grays', rgb: '41596b', name: '' },
	GC:  { family: 'cold-grays', rgb: '535c62', name: '' },
	GTA: { family: 'cold-grays', rgb: '4c5761', name: '' },
	GQM: { family: 'cold-grays', rgb: '404b4e', name: '' },
	GEW: { family: 'cold-grays', rgb: '334248', name: '' },
	GSZ: { family: 'cold-grays', rgb: '2e383c', name: '' },
	GX:  { family: 'cold-grays', rgb: '2a3433', name: '' },
	GB:  { family: 'cold-grays', rgb: '273132', name: '' },
	
	// warm
	GTQ: { family: 'warm-grays', rgb: 'e1dfd3', name: '' },
	GRX: { family: 'warm-grays', rgb: 'dcdad1', name: '' },
	GDX: { family: 'warm-grays', rgb: 'd1c6b1', name: '' },
	GGK: { family: 'warm-grays', rgb: 'cdc6bd', name: '' },
	GTF: { family: 'warm-grays', rgb: 'd1cec0', name: '' },
	GAL: { family: 'warm-grays', rgb: 'd7d4cc', name: '' },
	GFD: { family: 'warm-grays', rgb: 'd6d3c4', name: '' },
	GER: { family: 'warm-grays', rgb: 'd3d1c5', name: '' },
	GCF: { family: 'warm-grays', rgb: 'cbc5b9', name: '' },
	GAY: { family: 'warm-grays', rgb: 'd6d3cb', name: '' },
	GLY: { family: 'warm-grays', rgb: 'cfccc3', name: '' },
	GPR: { family: 'warm-grays', rgb: 'd3cfc9', name: '' },
	GAA: { family: 'warm-grays', rgb: 'bfbfb3', name: '' },
	GTT: { family: 'warm-grays', rgb: 'b2b09d', name: '' },
	GSU: { family: 'warm-grays', rgb: 'aeada7', name: '' },
	GAW: { family: 'warm-grays', rgb: 'bab4a1', name: '' },
	GFW: { family: 'warm-grays', rgb: 'a0a097', name: '' },
	GEV: { family: 'warm-grays', rgb: '999687', name: '' },
	GDV: { family: 'warm-grays', rgb: '9a9b94', name: '' },
	GTM: { family: 'warm-grays', rgb: '9d9f92', name: '' },
	GEQ: { family: 'warm-grays', rgb: 'a5a792', name: '' },
	GTG: { family: 'warm-grays', rgb: '9aa099', name: '' },
	GFE: { family: 'warm-grays', rgb: 'a6a596', name: '' },
	GTV: { family: 'warm-grays', rgb: '8d9287', name: '' },
	GCS: { family: 'warm-grays', rgb: '8f8f7f', name: '' },
	GJV: { family: 'warm-grays', rgb: '8c8c84', name: '' },
	GSY: { family: 'warm-grays', rgb: '878b84', name: '' },
	GE:  { family: 'warm-grays', rgb: '5d645d', name: '' },
	
	// neutral
	GTR: { family: 'grays', rgb: 'd4d6d0', name: '' },
	GGT: { family: 'grays', rgb: 'cfd0cb', name: '' },
	GSL: { family: 'grays', rgb: 'ced0cd', name: '' },
	GLK: { family: 'grays', rgb: 'ced2cd', name: '' },
	GTB: { family: 'grays', rgb: 'c8c8c1', name: '' },
	GSX: { family: 'grays', rgb: 'b8bdbd', name: '' },
	GTL: { family: 'grays', rgb: 'c1c1c3', name: '' },
	GKH: { family: 'grays', rgb: 'b2b6b7', name: '' },
	GN:  { family: 'grays', rgb: 'b4b7b3', name: '' },
	GGM: { family: 'grays', rgb: 'b2b6b4', name: '' },
	GEZ: { family: 'grays', rgb: 'acaea7', name: '' },
	GEA: { family: 'grays', rgb: 'bcbfb8', name: '' },
	GBA: { family: 'grays', rgb: 'b2b7b3', name: '' },
	GRY: { family: 'grays', rgb: '9fa4a1', name: '' },
	GTC: { family: 'grays', rgb: '9ea39d', name: '' },
	GG:  { family: 'grays', rgb: '7e8380', name: '' },
	NN: { family: 'grays', rgb: '020202', name: 'black' }
};
