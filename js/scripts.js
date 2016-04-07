// class AI {
// 	constructor(){};
// 	if(this.efficentArray[4] === 1){

// 	}
// }


class Board {
  constructor() {
    this.efficentArray = new Int8Array(9);
  }
/////AI expert player (tie only)
// expert(){
// 	///center (4) scenario
// 	if(this.efficentArray[4] === 1){
// 		//go for a corner
// 	}
// 	if(this.efficentArray[1,3,5,7] === 1){
// 		//opposite side
// 	}
// 	if(this.efficentArray[0,2,6,8] === 1){
// 		//move to corner
// 	}


// }

// corners(){
// 	0,2,6,8
// }
// center(){
// 	return 4;
// }

rand(){
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












  mark (player, position){
  	this.efficentArray[position] = player;
  	this.checkWin();
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
  checkWin(){
  	if(this.efficentArray[0] === 1 && this.efficentArray[1] === 1 && this.efficentArray[2] === 1){
  		return 1;
  	}
  	else if(this.efficentArray[3] === 1 && this.efficentArray[4] === 1 && this.efficentArray[5] === 1){
  		return 1;
  	}
  	else if(this.efficentArray[6] === 1 && this.efficentArray[7] === 1 && this.efficentArray[8] === 1){
  		return 1;
  	}
  	else if(this.efficentArray[0] === 1 && this.efficentArray[3] === 1 && this.efficentArray[6] === 1){
  		return 1;
  	}
  	else if(this.efficentArray[1] === 1 && this.efficentArray[4] === 1 && this.efficentArray[7] === 1){
  		return 1;
  	}
  	else if(this.efficentArray[2] === 1 && this.efficentArray[5] === 1 && this.efficentArray[8] === 1){
  		return 1;
  	}
  	else if(this.efficentArray[0] === 1 && this.efficentArray[4] === 1 && this.efficentArray[8] === 1){
  		return 1;
  	}
  	else if(this.efficentArray[2] === 1 && this.efficentArray[4] === 1 && this.efficentArray[6] === 1){
  		return 1;
  	}

  	else if(this.efficentArray[0] === 2 && this.efficentArray[1] === 2 && this.efficentArray[2] === 2){
  		return 2;
  	}
  	else if(this.efficentArray[3] === 2 && this.efficentArray[4] === 2 && this.efficentArray[5] === 2){
  		return 2;
  	}
  	else if(this.efficentArray[6] === 2 && this.efficentArray[7] === 2 && this.efficentArray[8] === 2){
  		return 2;
  	}
  	else if(this.efficentArray[0] === 2 && this.efficentArray[3] === 2 && this.efficentArray[6] === 2){
  		return 2;
  	}
  	else if(this.efficentArray[1] === 2 && this.efficentArray[4] === 2 && this.efficentArray[7] === 2){
  		return 2;
  	}
  	else if(this.efficentArray[2] === 2 && this.efficentArray[5] === 2 && this.efficentArray[8] === 2){
  		return 2;
  	}
  	else if(this.efficentArray[0] === 2 && this.efficentArray[4] === 2 && this.efficentArray[8] === 2){
  		return 2;
  	}
  	else if(this.efficentArray[2] === 2 && this.efficentArray[4] === 2 && this.efficentArray[6] === 2){
  		return 2;
  	}
  	else if(this.iterateArray() === true){
  		return 4;
  	}
  	else{
  		return 3;
  	}
  }
 
}
// var newBoard = new Board(1,2);
// newBoard.move
class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.board= new Board; 
  }

  player1move (position){
  	return this.board.mark(1,position);
  }
  player2move (position){
  	return this.board.mark(2, position);
  }
  // possibleMoves(){
  // 	return 
  // }
}

$(function(event){
	var player1Input = $("#player1").val();
	var player2Input = $("#player2").val();
	
	var example;
	var gameType = 1;

	var playerID = 1;

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
		
	});
	$("#0").click(function(event){
	
		playerID = clickCheck(this.id, example, playerID);
		if(gameType === 2 && playerID === 2){
			noobAiClick(example);
		}
		event.preventDefault();
		
	});
	$("#1").click(function(event){
		playerID = clickCheck(this.id, example, playerID);
		if(gameType === 2 && playerID === 2){
			noobAiClick(example);
		}
		event.preventDefault();
		
	});
	$("#2").click(function(event){
		playerID = clickCheck(this.id, example, playerID);
		if(gameType === 2 && playerID === 2){
			noobAiClick(example);
		}
		event.preventDefault();
		
	});
	$("#3").click(function(event){
		playerID = clickCheck(this.id, example, playerID);
		if(gameType === 2 && playerID === 2){
			noobAiClick(example);
		}
		event.preventDefault();
		
	});
	$("#4").click(function(event){
		playerID = clickCheck(this.id, example, playerID);
		if(gameType === 2 && playerID === 2){
			noobAiClick(example);
		}
		event.preventDefault();
		
	});
	$("#5").click(function(event){
		playerID = clickCheck(this.id, example, playerID);
		if(gameType === 2 && playerID === 2){
			noobAiClick(example);
		}
		event.preventDefault();
		
	});
	$("#6").click(function(event){
		playerID = clickCheck(this.id, example, playerID);
		if(gameType === 2 && playerID === 2){
			noobAiClick(example);
		}
		event.preventDefault();
		
	});
	$("#7").click(function(event){
		playerID = clickCheck(this.id, example, playerID);
		if(gameType === 2 && playerID === 2){
			noobAiClick(example);
		}
		event.preventDefault();
		
	});
	$("#8").click(function(event){
		playerID = clickCheck(this.id, example, playerID);
		if(gameType === 2 && playerID === 2){
			noobAiClick(example);
		}
		event.preventDefault();
		
	});
	$(".closed").click(function(event){
		location.reload();
		
	});
	
});
function clickCheck(id, example, playerID){
	if(example.board.checkSpot(id)){
			example.board.logArray();
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
		
		
}
function checkEnd(example){
	var win = example.board.checkWin();
		if( win === 1){
			$('#myModal').modal('show');
			$("#win").text(example.player1+" Wins!");
		}
		else if(win === 2){
			$('#myModal').modal('show');
			$("#win").text(example.player2+" Wins!");
		}
		else if(win === 4){
			$('#myModal').modal('show');
			$("#win").text("Cat's Game!");
			$("#cat").show();
		}
}
function noobAiClick(example){

	var n = example.board.rand();
	$("#"+n).click();
		

}
	

