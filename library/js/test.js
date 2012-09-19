function initMain() {
	var url = "http://dailysocial.net/post/investasi-rim-di-indonesia-sebuah-innovation-centre"
	fetchPage(url);
}
function fetchPage(url) {
	$.ajax({
		type : "GET",
		url : url,
		error : function(request, status) {
			alert('Error fetching ' + url);
		},
		success : function(data) {
			parse(data.responseText);
		}
	});
}