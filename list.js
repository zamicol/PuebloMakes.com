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
		GenerateListItem(data);
	});


	GenerateListExample();
}

// function GenerateListExample() {
// 	$('<div/>', {
// 		html: $('<a/>', {
// 			html: "Startup Pueblo Meetup",
// 			href: "https://www.facebook.com/Startup-Pueblo-Meetup-1313360958738317/"
// 		}).add(
// 			$('<span/>', {
// 				'text': "Network",
// 				'class': 'tag',
// 				"style": "background-color: #45f442"
// 			})
// 		)
// 	}).appendTo(ListClass);
// }



function GenerateListItem(item) {
	var listItem = $('<div/>', {
		html: $('<a/>', {
			html: item.title,
			href: item.link,
		})});
		
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


// function GenerateListItem(item) {
// 	var thing = $('<div/>', {
// 		html: $('<a/>', {
// 			html: item.title,
// 			href: item.link,
// 		})});
		
// 		thing.add(
// 			$('<span/>', {
// 				'text': " Network",
// 				'class': 'tag',
// 				"data-color": "#45f442"
// 			})
// 		);
	
		
// 		thing.appendTo(ListClass);
// }



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
		}

	],

	tagColors: [{
		"Financial Capital": "#45f442"
	}, ]

};