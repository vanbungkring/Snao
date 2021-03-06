/*
 * hammer.js create by Eka pramudita
 * */
$(document).ready(function() {
	// ///// get lookup for searchlocation

	var cityInput = $("#search");
	$("#search").on("input", function(e) {
		var val = cityInput.val();
		if (val === "")
			return;
		if (val.length > 3) {
			console.log(val)
		}
	});

	$('#gaji_bulan').keyup(calc);
	$("#gaji_lain").keyup(calc);
	$("#htg").keyup(calc);
	$('#hrg_brs').keyup(calc_nisab);
	$('#bth_bln').keyup(calc_pdpt2);
	$('#hrg_mas').keyup(calc_nisab2);
});
// /function get location service on local(without search)
function getGeoLocal() {
}
// ///execute getLocation User
function getGeo() {
}
// /execut getGMT function to get Different GMT TIme by Long-lat Geo Location
function getGMT(long, lat) {
	$.ajax({
		type : "GET",
		url : "http://ws.geonames.org/timezone?lat="+long+"&"+lat+",
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
function readSholatTime(a, b, c) {
}
// //end location lookup
// calculation totalgaji
function calc() {
	$('#totalGaji').val(
			((parseInt($('#gaji_bulan').val(), 10) || 0)
					+ (parseInt($("#gaji_lain").val(), 10) || 0) - (parseInt($(
					"#htg").val(), 10) || 0)) * 12);
}
// /end total gaji
// hitung nisab
function calc_nisab() {
	$('#nsb_thn').val((parseInt($('#hrg_brs').val(), 10) || 0) * 520);
	if (parseInt($('#nsb_thn').val(), 10) < parseInt($('#totalGaji').val(), 10)) {
		parseInt($('#zkt_prf').val('WAJIB ZAKAT'));
		calc_zprf();
		calc_pdpt();
	} else {
		parseInt($('#zkt_prf').val('TIDAK WAJIB ZAKAT'));
		parseInt($('#byr_thn').val('0'));
		parseInt($('#byr_bln').val('0'));
		calc_pdpt();
	}
}
// nisab end
// hitung zakat profesi pertahun & perbulan
function calc_zprf() {
	$('#byr_thn').val((parseInt($('#totalGaji').val(), 10)) * 0.025);
	$('#byr_bln').val((parseInt($('#totalGaji').val(), 10)) * 0.025 / 12);
}

// hitung zakat maal pertahun & perbulan
function calc_zmaal() {
	$('#byr_thn2').val((parseInt($('#ss_pdpt').val(), 10)) * 0.025);
	$('#byr_bln2').val((parseInt($('#ss_pdpt').val(), 10)) * 0.025 / 12);
}

// hitung pendapatan setelah dikurangi zakat profesi
function calc_pdpt() {
	$('#pdpt_zkt').val(
			parseInt($('#totalGaji').val(), 10)
					- parseInt($('#byr_thn').val(), 10));
}

// hitung kbthan pertahun & sisa pdpt
function calc_pdpt2() {
	$('#bth_thn').val((parseInt($('#bth_bln').val(), 10) || 0) * 12);
	$('#ss_pdpt').val(
			parseInt($('#pdpt_zkt').val(), 10)
					- parseInt($('#bth_thn').val(), 10));
}

// //calculating nisab 2
function calc_nisab2() {
	$('#bsr_nsb').val((parseInt($('#hrg_mas').val(), 10) || 0) * 85);
	if (parseInt($('#bsr_nsb').val(), 10) < parseInt($('#ss_pdpt').val(), 10)) {
		parseInt($('#wjb_zkt').val('WAJIB ZAKAT'));
		calc_zmaal();
		calc_totzakat()
	} else {
		parseInt($('#wjb_zkt').val('TIDAK WAJIB ZAKAT'));
		parseInt($('#byr_thn2').val('0'));
		parseInt($('#byr_bln2').val('0'));
		calc_totzakat();
	}
}
// /calculating zakat total
function calc_totzakat() {
	$('#tot_zakat_bln').val(
			parseInt($('#byr_bln').val(), 10)
					+ parseInt($('#byr_bln2').val(), 10));
	$('#tot_zakat_thn').val(
			parseInt($('#byr_thn').val(), 10)
					+ parseInt($('#byr_thn2').val(), 10));
}
