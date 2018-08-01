$(function(){
	console.log("first");
	$("h1").on("click",()=>{
		console.log("kt");
		$.ajax({
		url:"/flux",
		success:function(res){
			console.log(res);
	}});
	})
	


})
