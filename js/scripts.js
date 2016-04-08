// class AI {
// 	constructor(){};
// 	if(this.efficentArray[4] === 1){

// 	}
// }


class Board {
  constructor() {
    this.efficentArray = new Int8Array(9);
  }
changeValueBoard(XY,value){
	if (XY[0]===0 && XY[1]===0){
		this.efficentArray[0]=value;
	}
	else if (XY[0]===0 && XY[1]===1){
		this.efficentArray[1]=value;
	}
	else if (XY[0]===0 && XY[1]===2){
		this.efficentArray[3]=value;
	}
	else if (XY[0]===1 && XY[1]===0){
		this.efficentArray[3]=value;
	}
	else if (XY[0]===1 && XY[1]===1){
		this.efficentArray[4]=value;
	}
	else if (XY[0]===1 && XY[1]===2){
		this.efficentArray[5]=value;
	}
	else if (XY[0]===2 && XY[1]===0){
		this.efficentArray[6]=value;
	}
	else if (XY[0]===2 && XY[1]===1){
		this.efficentArray[7]=value;
	}
	else if (XY[0]===2 && XY[1]===1){
		this.efficentArray[8]=value;
	}
	else {
		console.log("changeValueBoard failed");
	}
}



returnValueBoard(XY){
	if (XY[0]===0 && XY[1]===0){
		return this.efficentArray[0];
	}
	else if (XY[0]===0 && XY[1]===1){
		return this.efficentArray[1];
	}
	else if (XY[0]===0 && XY[1]===2){
		return this.efficentArray[2];
	}
	else if (XY[0]===1 && XY[1]===0){
		return this.efficentArray[3];
	}
	else if (XY[0]===1 && XY[1]===1){
		return this.efficentArray[4];
	}
	else if (XY[0]===1 && XY[1]===2){
		return this.efficentArray[5];
	}
	else if (XY[0]===2 && XY[1]===0){
		return this.efficentArray[6];
	}
	else if (XY[0]===2 && XY[1]===1){
		return this.efficentArray[7];
	}
	else if (XY[0]===2 && XY[1]===2){
		return this.efficentArray[8];
	}
	else {
		return "returnValueBoard failed";
	}
}
  // AI
  expert (id){
  	var scenarioID = this.start(id);
  	var returnCatcher
  	switch (scenarioID){
  		case 1: 
			returnCatcher = scenarioCorner();
			break;
		case 2:
			break;
		case 3:
			returnCatcher = scenarioCenter();
			break;
  	}
  	return returnCatcher;
  }

returnRow(XY){
	var sum = 0;
	// var y = XY[1];
	var tempCordinate= new Int8Array(2);
	tempCordinate[0] = XY[0];
	for(var i=0;i<3;i++){
		tempCordinate[1]=i;
		sum +=this.returnValueBoard(tempCordinate);
	}
	return sum ;
}
returnColumn(XY){
	var sum = 0;
	// var y = XY[1];
	var tempCordinate= new Int8Array(2);
	tempCordinate[1] = XY[1];
	for(var i=0;i<3;i++){
		tempCordinate[0]=i;
		sum +=this.returnValueBoard(tempCordinate);
	}
	
	return sum;
}
returnDiagonal1(XY){
	var sum = 0;
	if (XY[0]===XY[1]){
		var tempCordinate= new Int8Array(2);
		for(var i=0;i<3;i++){
			tempCordinate[0]=i;
			tempCordinate[1]=i;
			sum +=this.returnValueBoard(tempCordinate);
		}
		return sum;
	}
	else{
		return "wrong use of returnDiagonal1";
	}
}
returnDiagonal2(XY){
	var sum = 0;
		var tempCordinate= new Int8Array(2);
		var x = 0;
		var y = 2;
		for(var i=0;i<3;i++){
			tempCordinate[0]=x;
			tempCordinate[1]=y;
			sum +=this.returnValueBoard(tempCordinate);
			x+=1;
			y-=1;
		}
		return sum;
}


//cornerRand();
// bruteForce(){
// 	var returnValues = [];
// 	var permuted = new Int8Array(9);
// 	while(!){

// 	}
	
// 	// for(var i=0;i<9;i++){

// 	// 	for(var j=1;j<9;j++){
// 	// 		// if (i!==j){
// 	// 		permuted[i]=1;
// 	// 		permuted[j]=2;
// 	// 		returnValues.push(permuted);
// 	// 	// }
// 	// }}
// 	for (var n=0;n<returnValues.length;n++){
// 	console.log(returnValues[n]);
// }
// 	return returnValues;
// }
//
mapToBoard(id){
	var x;
	var y;
	var returnXY= new Int8Array(2);
	switch (id){
		case 0: 
			returnXY[0]=0;
			returnXY[1]=0;
			break;
		case 1:
			returnXY[0]=0;
			returnXY[1]=1;
			break;
		case 2:
			returnXY[0]=0;
			returnXY[1]=2;
			break;
		case 3:
			returnXY[0]=1;
			returnXY[1]=0;
			break;
		case 4: 
			returnXY[0]=1;
			returnXY[1]=1;
			break;
		case 5:
			returnXY[0]=1;
			returnXY[1]=2;
			break;
		case 6:
			returnXY[0]=2;
			returnXY[1]=0;
			break;
		case 7:
			returnXY[0]=2;
			returnXY[1]=1;
			break;
		case 8:
			returnXY[0]=2;
			returnXY[1]=2;
			break;

	}

	return returnXY;
}






//
	start(id){
		var scenarioID;
		var userClick = id;
		switch (userClick){
			// corners
			case 0: 
				scenarioID = 1;
				break;
			case 2:
				scenarioID = 1;
				break;
			case 6:
				scenarioID = 1;
				break;
			case 8:
				scenarioID = 1;
				break;
			//sides
			case 1: 
				scenarioID = 2;
				break;
			case 3:
				scenarioID = 2;
				break;
			case 5:
				scenarioID = 2;
				break;
			case 7:
				scenarioID = 2;
				break;
			//Center
			case 4:
				scenarioID = 3;
				break;

		}
		if (scenarioID===1){
			expertCorners(this.turns());
		}
		else if (scenarioID===2){
			expertSides(this.turns());
		}
		else if (scenarioID===3){
			expertCenter(this.turns());
		}
		else console.log("you done fucked up AI");
	}
	expertCorners(turn){
	}
	expertSides(turn){
		
	}
	expertCenter(turn){
		var returnValue;
		switch (turn){
			case 2:
				returnValue = this.cornerRand();
				break;
			case 4:


			case 6:
				if(checkExpertWin()> -1){
					returnValue = checkExpertWin(); 
				}else{

				}
				break;

		}

		return returnValue

	}
	turns(){
		var turns = 1;
	  	for (var i = 0; i<9; i++){
	  		if (this.efficentArray[i]!==0){
	  			turns++;
	  		}
	  	}
	  	return turns;
	}


	checkExpertWin(){
		  	if(this.efficentArray[0] + this.efficentArray[1] + this.efficentArray[2] === 10){
		  		if(this.efficentArray[0] === 0){
		  			return 0;
		  		}
		  		else if(this.efficentArray[1] === 0){
		  			return 1;
		  		}
		  		else if(this.efficentArray[2] === 0){
		  			return 2;
		  		}
		  	}
		  	else if(this.efficentArray[3] + this.efficentArray[4] + this.efficentArray[5] === 10){
		  		if(this.efficentArray[3] === 0){
		  			return 3;
		  		}
		  		else if(this.efficentArray[4] === 0){
		  			return 4;
		  		}
		  		else if(this.efficentArray[5] === 0){
		  			return 5;
		  		}
		  	}
		  	else if(this.efficentArray[6] + this.efficentArray[7] + this.efficentArray[8] === 10){
		  		if(this.efficentArray[6] === 0){
		  			return 6;
		  		}
		  		else if(this.efficentArray[7] === 0){
		  			return 7;
		  		}
		  		else if(this.efficentArray[8] === 0){
		  			return 8;
		  		}
		  	}
		  	else if(this.efficentArray[0] + this.efficentArray[3] + this.efficentArray[6] === 10){
		  		if(this.efficentArray[0] === 0){
		  			return 0;
		  		}
		  		else if(this.efficentArray[3] === 0){
		  			return 3;
		  		}
		  		else if(this.efficentArray[6] === 0){
		  			return 6;
		  		}
		  	}
		  	else if(this.efficentArray[1] + this.efficentArray[4] + this.efficentArray[7] === 10){
		  		if(this.efficentArray[1] === 0){
		  			return 1;
		  		}
		  		else if(this.efficentArray[4] === 0){
		  			return 4;
		  		}
		  		else if(this.efficentArray[7] === 0){
		  			return 7;
		  		}
		  	}
		  	else if(this.efficentArray[2] + this.efficentArray[5] + this.efficentArray[8] === 10){
		  		if(this.efficentArray[2] === 0){
		  			return 2;
		  		}
		  		else if(this.efficentArray[5] === 0){
		  			return 5;
		  		}
		  		else if(this.efficentArray[8] === 0){
		  			return 8;
		  		}
		  	}
		  	else if(this.efficentArray[0] + this.efficentArray[4] + this.efficentArray[8] === 10){
		  		if(this.efficentArray[0] === 0){
		  			return 0;
		  		}
		  		else if(this.efficentArray[4] === 0){
		  			return 4;
		  		}
		  		else if(this.efficentArray[8] === 0){
		  			return 8;
		  		}
		  	}
		  	else if(this.efficentArray[2] + this.efficentArray[4] + this.efficentArray[6] === 10){
		  		if(this.efficentArray[2] === 0){
		  			return 2;
		  		}
		  		else if(this.efficentArray[4] === 0){
		  			return 4;
		  		}
		  		else if(this.efficentArray[6] === 0){
		  			return 6;
		  		}
		  	}

		else{
			console.log("checkExpertWin Else");
			return -1;
		}

	}


///RANDOM CORNER
cornerRand(){
	var x =1;
	while(x === 1){
	     var randInt = (Math.floor((Math.random() * 5))*2);
		     if (randInt !== 4){
		     	return randInt;
		     	x = 2;
		     }
	}
	
}
noobRand(){
	var x =1;
	while(x === 1){
	     var randInt = Math.floor((Math.random() * 9));
	     if(!this.iterateArray()){
		     if (this.efficentArray[randInt] === 0){
		     	return randInt;
		     	x = 2;
		     }
		 }
		 else{
		 	x = 2;
		 }
	}
}


 cats(){
 	for(var i = 0; i<9; i++){
 		if(this.efficentArray[i] === 0){
 			return false;
 		}
 	}
 	return true;
 }








  mark (player, position){
  	this.efficentArray[position] = player;
  	return console.log("marked player"+player+" at["+position+"]")
  }
  checkSpot(id) {
  	if(this.efficentArray[id]===0){
  		return true;
  	}
  	else {
  		false;
  	}
  }
  logArray (){
  	return console.log(this.efficentArray);
  }
  iterateArray(){
  	for (var i = 0; i<9; i++){
  		if (this.efficentArray[i]===0){
  			return false;
  		}
  	}
  	return true;

	}

}
// var newBoard = new Board(1,2);
// newBoard.move
class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.board= new Board;
    // if single player ---> this.bot = new AIMoves
  }

  player1move (position){
  	return this.board.mark(3,position);
  }
  player2move (position){
  	return this.board.mark(5, position);
  }
  boardReturn(){
  	return this.board;
  }
  // possibleMoves(){
  // 	return
  // }
}
class AIMoves{
	constructor(){

	}


}
class AIMovesCenter extends AIMoves{


}
class AIMovesCorner extends AIMoves{

}
class AIMovesSides extends AIMoves{

}

$(function(event){
  $("body").fadeIn(1200);
	var player1Input = $("#player1").val();
	var player2Input = $("#player2").val();

	var example;
	var gameType = 1;

	var playerID = 1;
	$("#heading").click(function(event){
		event.preventDefault();
		document.location.reload();

	});
	$('#myModal').on('hidden.bs.modal', function () {
  		document.location.reload();
	});

	$("#multi").click(function(event){
		$("#buttons").hide();
		$("#player1-group").fadeIn();
		$("#player2-group").fadeIn();
		$("#play").fadeIn();
		gameType = 1;
		event.preventDefault();

	});
	$("#noob").click(function(event){
		$("#buttons").hide();
		$("#player1-group").fadeIn();
		$("#play").fadeIn();
		gameType = 2;
		event.preventDefault();

	});
	$("#Hard").click(function(event){
		$("#buttons").hide();
		$("#player1-group").fadeIn();
		$("#play").fadeIn();
		gameType = 3;
		event.preventDefault();

	});
	$("#play").click(function(event){
		$("#game").fadeIn("slow");
		$("#nameForm").hide();
		$("#play").hide();
		player2Input = $("#player2").val();
		player1Input = $("#player1").val();
		if(!player2Input){
			player2Input = "Computer";
		}
		example = new Game(player1Input, player2Input);
		example.board.cornerRand();
		
	});
	$("#0").click(function(event){

		playerID = clickCheck(this.id, example, playerID);
		if(gameType >1 && playerID === 2){
			AIclick(example, this.id, gameType);
		}
		event.preventDefault();

	});
	$("#1").click(function(event){
		playerID = clickCheck(this.id, example, playerID);
		if(gameType >1 && playerID === 2){
			AIclick(example, this.id, gameType);
		}
		event.preventDefault();

	});
	$("#2").click(function(event){
		playerID = clickCheck(this.id, example, playerID);
		if(gameType >1 && playerID === 2){
			AIclick(example, this.id, gameType);
		}
		event.preventDefault();

	});
	$("#3").click(function(event){
		playerID = clickCheck(this.id, example, playerID);
		if(gameType >1 && playerID === 2){
			AIclick(example, this.id, gameType);
		}
		event.preventDefault();

	});
	$("#4").click(function(event){
		playerID = clickCheck(this.id, example, playerID);
		if(gameType >1 && playerID === 2){
			AIclick(example, this.id, gameType);
		}
		event.preventDefault();

	});
	$("#5").click(function(event){
		playerID = clickCheck(this.id, example, playerID);
		if(gameType >1 && playerID === 2){
			AIclick(example, this.id, gameType);
		}
		event.preventDefault();

	});
	$("#6").click(function(event){
		playerID = clickCheck(this.id, example, playerID);
		if(gameType >1 && playerID === 2){
			AIclick(example, this.id, gameType);
		}
		event.preventDefault();

	});
	$("#7").click(function(event){
		playerID = clickCheck(this.id, example, playerID);
		if(gameType >1 && playerID === 2){
			AIclick(example, this.id, gameType);
		}
		event.preventDefault();

	});
	$("#8").click(function(event){
		playerID = clickCheck(this.id, example, playerID);
		if(gameType >1 && playerID === 2){
			AIclick(example, this.id, gameType);
		}
		event.preventDefault();

	});
	$(".closed").click(function(event){
		location.reload();

	});

});
function clickCheck(id, example, playerID){
	if(example.board.checkSpot(id)){
		

			
			if(playerID === 1){
				example.player1move(id);
				$("#"+id+"b").hide();
				$("#"+id+"x").fadeIn("slow");
				$("#p1").hide();
				$("#p2").fadeIn();
				checkEnd(example);
				return playerID = 2;
			}
			else if(playerID === 2){
				example.player2move(id);
				$("#"+id+"b").hide();
				$("#"+id+"o").fadeIn("slow");
				$("#p2").hide();
				$("#p1").fadeIn();
				checkEnd(example);
				return playerID = 1;
			}
		}
		else{
			console.log("youre dumb")
			return playerID;
		}

example.board.logArray();
}
function checkEnd(example){
	// debugger;
	var cats = example.board.cats();
	var win = winCheck(example);


		if( win === 1){
			$('#myModal').modal('show');
			$("#win").text(example.player1+" Wins!");
      		$("#cup").show();
		}
		else if(win === 2){
			$('#myModal').modal('show');
			$("#win").text(example.player2+" Wins!");
      		$("#cup").show();
		}
		else if(cats){
			$('#myModal').modal('show');
			$("#win").text("Cat's Game!");
			$("#cat").show();
		}
}
function AIclick(example, id, gameType){
	var n;
	if(gameType === 2){
		n = example.board.noobRand();
	}
	if(gameType === 3){
		n = example.board.expert(id);
	}
	$("#"+n).click();


}
function winCheck(example){
		var xyarray = [];
	for(var i = 0; i<3; i++){
		var colArray = example.board.mapToBoard(i);
		if(example.board.returnColumn(colArray) === 9) {
			return 1;
		}
		else if(example.board.returnColumn(colArray) === 15) {
			return 2;
		}
	}
	for(var i = 0; i<7; i = i+3){
		var rowArray = (example.board.mapToBoard(i));
		if(example.board.returnRow(rowArray) === 9) {
			return 1;
		}
		else if(example.board.returnRow(rowArray) === 15) {
			return 2;
		}
	}
	var diag1Array = (example.board.mapToBoard(0));
	var diag2Array = example.board.mapToBoard(2);
		if(example.board.returnDiagonal1(diag1Array) === 9) {
			return 1;
		}
		else if(example.board.returnDiagonal1(diag1Array) === 15) {
			return 2;
		}
		else if(example.board.returnDiagonal2(diag2Array) === 9) {
			return 1;
		}
		else if(example.board.returnDiagonal2(diag2Array) === 15) {
			return 2;
		}

}
