$(document).ready(function() {
	var cityInput = $("#search");
	$("#search").on("input", function(e) {
		var val = cityInput.val();
		if (val === "")
			return;
		if (val.length > 3) {
			GetCityList(val, val);
		}
	});

});
function getGMT() {
	$("#dvContent").append("<ul></ul>");
	$.ajax({
		type : "GET",
		url : "http://ws.geonames.org/timezone?lat=-14.2350040&lng=-51.925280",
		dataType : "xml",
		success : function(xml) {
			$(xml).find('timezone').each(function() {
				var sTitle = $(this).find('gmtOffset').text();
				alert(sTitle)
			});
		},
		error : function() {
			alert("An error occurred while processing XML file.");
		}
	});
};

function GetCityList(city) {
	$.getJSON("http://www.wego.co.id/id/hotels/api/autocomplete/1/locations/10/"+city+".js", function(data) {
		console.log(data.length)
	});

}
