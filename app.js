	var stock=[];

function save(){

	localStorage.setItem("stock",JSON.stringify(stock));
	location.reload();

};

function load(){

	var a = localStorage.getItem("stock");
	if (a != null){
		stock = JSON.parse(a);
	}
	var r = stock[stock.length -1]
	$("#show").html(r);	
};

$(document).ready(function(){
		load();

	$("#enter").click(function(){
		var input = $("#zoneText").val() 
		stock.push(input);
		$("#show").append("<p>"+input+", </p>");
		save();
		load();
	});
		
});