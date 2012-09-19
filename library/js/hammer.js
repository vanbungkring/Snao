
$(document).ready(function() {
	///////call anything u want
	
	//hitung gaji pertahun
	function calc() {
				$('#totalGaji').val((parseInt($('#gaji_bulan').val(), 10) + parseInt($("#gaji_lain").val(), 10) - parseInt($("#htg").val(), 10)) * 12);
			}
			$('#gaji_bulan').keyup(calc);
			$("#gaji_lain").keyup(calc);
			$("#htg").keyup(calc);
});
