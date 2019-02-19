"use strict";


var ListClass = "#dirItems";

$(document).ready(function() {
	GenerateGUIList();
});

// GenerateGUIList creates the cards for everything from the JSON datascructure.  
function GenerateGUIList() {
	console.log("GenerateGUIList");


	$.each(list.directoryList, function(i, data) {
		console.log(data);
		if (data.title != "") {
			GenerateListItem(data);
		}

	});
}


function GenerateListItem(item) {
	var listItem = $('<div/>', {
		html: $('<a/>', {
			html: item.title,
			href: item.link,
		})
	});

	$.each(item.tags, function(i, data) {
		listItem.append(
			$('<span/>', {
				'text': data,
				'class': 'tag',
				"data-color": "#45f442"
			})
		);
	});

	listItem.appendTo(ListClass);
}


var list = {
	"directoryList": [{
			"title": "Pueblo Economic Development Corporation (PEDCO)",
			"link": "https://www.pedco.org/",
			"tags": ["Financial Capital", "Business"]
		},
		{
			"title": "PCC STEM Center",
			"link": "https://www.pueblocc.edu/STEM-Center",
			"tags": ["Education"]
		},
		{
			"title": "Pueblo County Economic Development and Geographic Information Systems",
			"link": "http://county.pueblo.org/government/county/department/edgis/",
			"tags": ["Government"]
		},
		{
			"title": "",
			"link": "",
			"tags": [""]
		}

	],

	"tagColors": [{
		"Financial Capital": "#45f442"
	}, ]

};