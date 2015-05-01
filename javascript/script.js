$(document).ready(function(){
	
	drawGrid(16, 1);
	
	$(".reset").click(function(){
		var number = prompt("Enter an integer between 1 and 64:", 16);
		$(".drawBox").empty();
		$(".drawBox").remove();
		drawGrid(number, 1);
	});

	$(".random").click(function(){
		var number = prompt("Enter an integer between 1 and 64:", 16);
		$(".drawBox").empty();
		$(".drawBox").remove();
		drawGrid(number, 2);
	});

	function drawGrid(number, option){
		var pixelsWide = number;
		var pixelSize = Math.floor(700/number);
		var gridSize = pixelsWide * pixelSize;
		
		$(".container").append("<div class='drawBox'></div>");
		$(".drawBox").width(gridSize);
		for(i=0; i<pixelsWide; i++){
			for(j=0; j<pixelsWide; j++){
				$(".drawBox").append("<div class='pixel'></div>");
			}
			$(".drawBox").append("<br style='clear: both;'>");
		}
		
		$(".pixel").css({'height': pixelSize, 'width': pixelSize});
		if(option === 1){
			$(".pixel").mouseenter(function(){
				$(this).addClass("colored");
			});
		}
		else if(option === 2){
			$(".pixel").mouseenter(function(){
				$(this).addClass("colored").css("background-color", "#"+Math.floor(Math.random()*16777216).toString(16));
			});
		}
	}
	
});