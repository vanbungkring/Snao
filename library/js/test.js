$(document).ready(function() {
	var cityInput = $("#search");
	$("#search").on("input", function(e) {
		var val = cityInput.val();
		if (val === "")
			return;
		if (val.length > 3) {
			GetCityList(val,val);
		}
	});
	getGMT()
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
	$.get("http://maps.googleapis.com/maps/api/geocode/json?address="+city+"&sensor=true", function(res) {
		var dataList = $("#cityResult");
		dataList.empty();
		console.log(city);
/*
			for ( var i = 0, len = res.DATA.length; i < len; i++) {
				var opt = $("<option></option>").attr("value", res.DATA[i][0]);
				dataList.append(opt);
			}
*/
	
	}, "json");
}
