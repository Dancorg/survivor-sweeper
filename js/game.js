var cityBlocks = {};
var zombies;
var survivors;
var bonus;
var lives;
var firstGame = true;
var mode = 0;
var score = 1000;//
var time = 100;
var pause = false;
var popupTimer;
var quest;


function startGame(){
	$("#StartButton").css({"border-style":"outset"});//lo deja como estaba antes

	quest = {"onquest":-1, "goal":0,"timer":0,"prize":0};
	zombies = 40;
	survivors = 40;
	bonus = 8;
	troops = 1;
	lives = 1;	 
	$("#remainingSurvivors").html("Remaining Survivors: "+survivors);
	$("#remainingRescuers").html("Remaining Rescuers: "+lives);

	//grid: [0]-> zombies [1]-> survivors [2]->
	cityBlocks.grid = [
	[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],
	[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],
	[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],
	[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],
	[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],
	[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],
	[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],
	[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],
	[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],
	[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],
	[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],
	[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],
	[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],
	[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],
	[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],
	[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],
	[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]/*,
	[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],
	[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],
	[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],*/
	];
	//Zombies
	for(var i=0; i<zombies; i++){
		while(true){
			zy = Math.floor(cityBlocks.grid.length*Math.random());
			zx = Math.floor(cityBlocks.grid[0].length*Math.random());
			if(cityBlocks.grid[zy][zx][0] == 0 && cityBlocks.grid[zy][zx][1] == 0){
				cityBlocks.grid[zy][zx][0]=1;
				break;
			}
		}
	}
	//Survivors
	for(var i=0; i<survivors; i++){
		while(true){
			sy = Math.floor(cityBlocks.grid.length*Math.random());
			sx = Math.floor(cityBlocks.grid[0].length*Math.random());
			if(cityBlocks.grid[sy][sx][0] != 1 && cityBlocks.grid[sy][sx][1] == 0){
				cityBlocks.grid[sy][sx][1]=1;
				break;
			}
		}
	} 
	//bonuses
	for(var i=0; i<bonus; i++){
		while(true){
			sy = Math.floor(cityBlocks.grid.length*Math.random());
			sx = Math.floor(cityBlocks.grid[0].length*Math.random());
			if(cityBlocks.grid[sy][sx][0] != 1 && cityBlocks.grid[sy][sx][1] != 1){
				cityBlocks.grid[sy][sx][2]=1+Math.floor(2*Math.random());
				break;
			}
		}
	}
	
	$(function(){
		
		if(firstGame){
			firstGame=false;
			for(var i=0;i<203;i++){
				$(".house:first-child").clone().appendTo("#houses");
			}
		}
		var i =0;
		$("#houses").children().each(function(index){
			$(this).css({
				"left":($(this).width()+0)*(index%12),
				"top":($(this).height()+0)*Math.floor(index/12)
			});
			$(this).attr("id",i);
			i++;
			cityBlocks.grid[(0+parseInt($(this).css("top")))/40][(0+parseInt($(this).css("left")))/40][3]=$(this).attr("id");
			$(this).children().css({"background-color":"#444444"});
			$(this).children().html("");
			$(this).click(clickity);
		});
	});
}

function startQuest(){
	quest.onquest = Math.floor(Math.random()*20);
	if (quest.onquest == 0 && survivors > 10){
		quest.goal = Math.floor(Math.random()*6+2);
		quest.timer = quest.goal*5;
		quest.prize = quest.goal * 200;
		var t = quest.timer;
		popup("Mission: Rescue "+ quest.goal +" in "+t+" seconds",1,2000);
	}else
	if (quest.onquest == 1 && zombies > 15){
		quest.goal = Math.floor(Math.random()*12+2);
		quest.timer = quest.goal*4;
		quest.prize = quest.goal * 500;
		troops += Math.floor(quest.goal/2);
		if (mode == 2) $("#remainingRescuers").html("Remaining Troopers: "+troops);
		var t = quest.timer;
		popup("Mission: Kill "+ quest.goal +" in "+t+" seconds",1,2000);
	}
	else{
		quest.onquest = -1;
	}
}

function updateQuest(){
	if(quest.onquest != -1){
		quest.timer -= 1;
		if(quest.goal == 0){
			var bonus = quest.prize + quest.timer*10;
			score += bonus;
			popup("Quest Completed! Bonus: " + bonus,1,2000);
			quest.onquest = -1;
		} else
		if(quest.timer < 0){
			popup("Quest Failed!",0,2000);
			quest.onquest = -1;
		}
	}
}

function clickity(){
	explorar(this,mode); 
}

function explorar(este,safe){
	
	x = (0+parseInt($(este).css("left")))/40;
	y = (0+parseInt($(este).css("top")))/40;
	
	if (safe == 0 || (troops > 0 && safe == 2 && cityBlocks.grid[y][x][4] != 1)){$(este).children().css({"background-color":"#4444ff"});}
	/*if (safe == 2 && troops == 0 && cityBlocks.grid[y][x][4] != 1){$(este).children().css({"background-color":"#ff44ff"});}*/
	if( (safe == 2 && troops >0) || safe !=2){
		cityBlocks.grid[y][x][4] = 1;
	}
	
	if(cityBlocks.grid[y][x][0] == 1){ 
		if( safe == 0){
			popup("Attacked by Zombie!",0,1000);
			lives -= 1;	
			//score-=500;
			$("#remainingRescuers").html("Remaining Rescuers: "+lives);
			$(este).children().css({"background-color":"#ff4444"});
		}
		if( safe == 2){
			if( troops > 0){
				troops -= 1;
				zombies -= 1;
				score+=50;
				popup("Zombie Killed!",0,1000);
				
				if(quest.onquest == 1){quest.goal-=1;}
				
				$("#remainingRescuers").html("Remaining Troopers: "+troops);
				cityBlocks.grid[y][x][0] = 0; //eliminar al zombie con algun ataque especial
				//$(este).children().css({"background-color":"#ff4444"});
				updateSurrounds(y,x,1);
			}
		}
	}

	if(cityBlocks.grid[y][x][1] == 1 && (safe == 0 || (safe==2 && troops>0) )){
		popup("Survivor Rescued!",1,1000);
		survivors-=1;
		score+=100;
		if(quest.onquest == 0){quest.goal-=1;}
		$("#remainingSurvivors").html("Remaining Survivors: "+survivors);
		cityBlocks.grid[y][x][1] = 0;
		$(este).children().css({"background-color":"#4444ff"});
		updateSurrounds(y,x,1);
		if(survivors == 0){
			Restart("All Survivors Rescued! </br>Score: "+score,1);
		}	
	}
	
	
	if(safe !=2 || (safe==2 && troops>0) ){
		time += 1;
		if (quest.onquest == -1 && Math.floor(Math.random()*1)==0)startQuest();
	
		if (cityBlocks.grid[y][x][2] == 1){
			popup("Rescuer Found!",2,1000);
			lives+=1;
			if (mode == 0) $("#remainingRescuers").html("Remaining Rescuers: "+lives);
			cityBlocks.grid[y][x][2] = 0;
		} else
		if (cityBlocks.grid[y][x][2] == 2){
			popup("Trooper Found!",2,1000);
			troops+=1;
			if (mode == 2) $("#remainingRescuers").html("Remaining Troopers: "+troops);
			cityBlocks.grid[y][x][2] = 0;
		}
	
		z = returnHouse(y+1,x+0,0) + returnHouse(y+1,x+1,0) + returnHouse(y+1,x-1,0) + returnHouse(y+0,x+1,0) + returnHouse(y+0,x-1,0) + returnHouse(y-1,x+0,0) + returnHouse(y-1,x+1,0) + returnHouse(y-1,x-1,0);

		s = returnHouse(y+1,x+0,1) + returnHouse(y+1,x+1,1) + returnHouse(y+1,x-1,1) + returnHouse(y+0,x+1,1) + returnHouse(y+0,x-1,1) + returnHouse(y-1,x+0,1) + returnHouse(y-1,x+1,1) + returnHouse(y-1,x-1,1);

		$(este).children().html(z+":"+s);
		if( cityBlocks.grid[y][x][0] == 0 ){
			if (z >= 1 && s == 0){
				$(este).children().css({"background-color":"#994466"});
			}
			else if(z == 0 ){
				$(este).children().css({"background-color":"#449944"});
				if(s >= 1)$(este).children().css({"background-color":"#44ff44"});
			}
		}
	}
	if(lives <= 0 || time <=0){
		Restart("GAME OVER!</br> Score: "+score,0);
	}
}

function updateGui(){
}

function popup(text,type,duration){
	if(type == 0){var color="#ff3344";}
	if(type == 1){var color="#33ff44";}
	if(type == 2){var color="#33ffff";}
	$("#popup").css({
		"visibility":"visible",
		"background":color,
	});
	$("#popuptext").html(text);
	/*$("#popup").html(text);*/
	clearTimeout(popupTimer);
	popupTimer = setTimeout(closePopup,duration);
}

function closePopup(){
	
	$("#popup").css({"visibility":"hidden"});
}

function Restart(text,type){
	$("#houses").children().each(function(index){$(this).off("click");});
	setTimeout(function(){location.reload(true);},3000);
	popup(text,type,3000);
}

function returnHouse (y,x,z){
	try{ return cityBlocks.grid[y][x][z];}
	catch(err){return 0;}
}


function setZ(y,x,z){
	try{cityBlocks.grid[y][x][0]=z;}
	catch(err){}
}

function setS(y,x,s){
	try{cityBlocks.grid[y][x][0]=s;}
	catch(err){}
}

function updateSurrounds (y,x,z){
	updateSurrounds2(y+1,x+1);
	updateSurrounds2(y+1,x);
	updateSurrounds2(y+1,x-1);
	updateSurrounds2(y,x+1);
	updateSurrounds2(y,x-1);
	updateSurrounds2(y-1,x+1);
	updateSurrounds2(y-1,x);
	updateSurrounds2(y-1,x-1);
	updateSurrounds2(y,x);
}

function updateSurrounds2(y,x){
	try{
		var cell = cityBlocks.grid[y][x];
		if(cell[4] == 1){
			explorar($("#"+cell[3]),1);
			//alert(cityBlocks.grid[y][x+1][3]);
		}
	}
	catch(err){}
}

function buyTrooper(este){
	$(este).css({"border-style":"inset"});
	if(score >= 400){
		score -= 400;
		troops += 1;
		if (mode == 2) $("#remainingRescuers").html("Remaining Troopers: "+troops);
	}
}

function buyRescuer(este){
	$(este).css({"border-style":"inset"});
	if(score >= 200){
		score -= 200;
		lives += 1;
		if (mode == 0) $("#remainingRescuers").html("Remaining Rescuers: "+lives);
	}
}

function switchMode(){
	$("#remainingRescuers").css({"border-style":"inset"});
	if(mode == 0){
		mode=2;
		$("#remainingRescuers").html("Remaining Troopers: "+troops);
		$("#remainingRescuers").css({"background":"#bb7777"});
	}
	else {
		mode=0;
		$("#remainingRescuers").html("Remaining Rescuers: "+lives);
		$("#remainingRescuers").css({"background":"#77bb77"});
	}
}

function mouseUp(este){
	$(este).css({"border-style":"outset"});
}

function startButton(){
	$("#StartButton").css({"border-style":"inset"});
	
}

function startButtonUp(){
	$(this).css({"border-style":"outset"});
	startGame();
	setInterval("Timer()",1000);
	document.getElementById("StartScreen").style.visibility="hidden";
}

function Timer(){
	$(window).focus(function (){pause=false;});
	$(window).blur(function (){pause=true;});
	if (pause == false){
		time-=1;
		score-=1;
		if (quest.onquest == -1){
			$("#time").html("Time: "+time);
			$("#time").css({"background":"#999999"});
		}else{
			if(quest.onquest == 0){ 
				var q = " Rescue: " + quest.goal;
				$("#time").css({"background":"#77bb77"});
			}
			if(quest.onquest == 1){ 
				var q = " Kill: " + quest.goal;
				$("#time").css({"background":"#bb7777"});
			}
			$("#time").html("Time: "+time + " Quest: " + quest.timer + q);
		}
		$("#score").html("Score: "+score);
		
		updateQuest();
	}
	//alert(time);
}
