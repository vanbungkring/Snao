$(document).ready(function() {
	var cityInput = $("#search");
	$("#search").on("input", function(e) {
		var val = cityInput.val();
		if (val === "")
			return;
		if (val.length > 3) {
			console.log(val);
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
			alert("Kesalahan terjadi Sewaktu Menampilkan Data");
		}
	});
};
