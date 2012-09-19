$(document).ready(function() {
	var cityInput = $("#search");
	$("#search").on("input", function(e) {
		var val = cityInput.val();
		if (val === "")
			return;
		if (val.length > 3) {
			getCity(val)
		}
	});
	getGMT()
});
function getGMT() {
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
			alert("Kesalahan terjadi Sewaktu Menampilkan Data");
		}
	});
};

function getCity(city) {
	var url = "http://maps.googleapis.com/maps/api/geocode/json?address=jakarta&sensor=true"
	$.getJSON(url, function(data) {
		console.log(data)
	});
};
