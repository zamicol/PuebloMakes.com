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

// GenerateListItem takes an item and adds graphically to the html list 
function GenerateListItem(item) {
	var listItem = $('<div/>', {
		html: $('<a/>', {
			html: item.title,
			href: item.link,
		})
	});

	$.each(item.tags, function(i, data) {
		if (data != ""){
			listItem.append(
				$('<span/>', {
					'text': data,
					'class': 'tag',
					"data-color": "#45f442"
				})
			);
		}

	});

	listItem.appendTo(ListClass);
}


var list = {
	"directoryList": [{
			"title": "Pueblo Economic Development Corporation (PEDCO)",
			"link": "https://www.pedco.org/",
			"tags": ["Financial Capital", "Business", "Entrepreneur"]
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
			"title": "Pueblo Woodturner Club",
			"link": "www.puebloturners.com",
			"tags": ["Maker"]
		},
		{
			"title": "Southern Colorado Innovation Link",
			"link": "https://www.socoinnovationlink.org/",
			"tags": ["Entrepreneur", "Business"]
		},

		{"title": "Pueblo Economic Development Corporation (PEDCO)","link": "","tags": [""]},
		{"title": "Southern Colorado Economic Development District (SCEDD)","link": "","tags": [""]},
		{"title": "EPIC Micro-loan program","link": "","tags": [""]},
		{"title": "Pueblo County Revolving Loan Fund","link": "","tags": [""]},
		{"title": "Success Stories","link": "","tags": [""]},
		{"title": "Home of Heroes","link": "","tags": [""]},
		{"title": "Center for American Values","link": "","tags": [""]},
		{"title": "Historic Arkansas Riverwalk","link": "","tags": [""]},
		{"title": "Pueblo Resevoir","link": "","tags": [""]},
		{"title": "Home of Pueblo Chile","link": "","tags": [""]},
		{"title": "Professional Bull Riders International Headquarters","link": "","tags": [""]},
		{"title": "Colorado State Fair","link": "","tags": [""]},
		{"title": "Economic Clusters","link": "","tags": [""]},
		{"title": "Pueblo Arts Alliance / Creative Corridor","link": "","tags": [""]},
		{"title": "Pueblo Downtown Association","link": "","tags": [""]},
		{"title": "Pueblo Workforce Center","link": "","tags": [""]},
		{"title": "Educational Institutions","link": "","tags": [""]},
		{"title": "Pueblo Library makerspace","link": "","tags": [""]},
		{"title": "Business Accelerator Program","link": "","tags": [""]},
		{"title": "CSU-Pueblo Engineering","link": "","tags": [""]},
		{"title": "Steel City Maker Space","link": "","tags": [""]},
		{"title": "Colorado Center for Metal Arts","link": "","tags": [""]},
		{"title": "Colorado State University-Pueblo","link": "","tags": [""]},
		{"title": "Hasan School of Business","link": "","tags": [""]},
		{"title": "Healy Center","link": "","tags": [""]},
		{"title": "Pueblo Community College","link": "","tags": [""]},
		{"title": "Pueblo Corporate College","link": "","tags": [""]},
		{"title": "Networks","link": "","tags": [""]},
		{"title": "Startup Pueblo Meetup","link": "","tags": [""]},
		{"title": "Business Women’s Network","link": "","tags": [""]},
		{"title": "Latino Chamber (-PTAC)","link": "","tags": [""]},
		{"title": "Pueblo West Chamber","link": "","tags": [""]},
		{"title": "Greater Pueblo Chamber","link": "","tags": [""]},
		{"title": "Infrastructure","link": "","tags": [""]},
		{"title": "Transportation Technology Center","link": "","tags": [""]},
		{"title": "Pueblo Memorial Airport","link": "","tags": [""]},
		{"title": "PuebloPlex","link": "","tags": [""]},
		{"title": "Vestas Wind Systems","link": "","tags": [""]},
		{"title": "Government","link": "","tags": [""]},
		{"title": "Pueblo City Council","link": "","tags": [""]},
		{"title": "Pueblo County Commissioners","link": "","tags": [""]},
		{"title": "Pueblo Urban Renewal Authority","link": "","tags": [""]},
		{"title": "Pueblo West Metro District (PWMD)","link": "","tags": [""]},
		{"title": "Pueblo City-County Library District","link": "","tags": [""]},
		{"title": "Pueblo Regional Building","link": "","tags": [""]},
		{"title": "Startup & Small Business Help","link": "","tags": [""]},
		{"title": "Pueblo Service Corps of Retired Executives (SCORE)","link": "","tags": [""]},
		{"title": "Small Business Development Center","link": "","tags": [""]},
		{"title": "The Business and Technology Center (BTC—Incubator space)","link": "","tags": [""]},

		{
			"title": "Full Circle Wood Works",
			"link": "https://www.fc-woodworks.com/",
			"tags": ["Maker"]
		},
		{
			"title": "",
			"link": "",
			"tags": [""]
		},
	],

	"tagColors": [{
		"Financial Capital": "#45f442"
	}, ]

};