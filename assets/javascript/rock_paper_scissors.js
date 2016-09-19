// function doAlert(){
// 	alert("Hello");
// }


function getRandomInt(upperLimit){
	return (Math.floor(Math.random() * (upperLimit + 1)));
}


function getComputerChoice(){
	var choiceNum = getRandomInt(2);
	var compChoice;
	
	if(choiceNum == 0){
		$('#computer_value').html("Rock");
		compChoice = "Rock";
	}
	else if(choiceNum == 1){
		$('#computer_value').html("Paper");
		compChoice = "Paper";
	}
	else{
		$('#computer_value').html("Scissors");
		compChoice = "Scissors";
	}
	return compChoice;
}


function getResult(playerChoice, computerChoice){
	if(playerChoice == "Rock"){
		if(computerChoice == "Rock"){
			return "Tie";
		}
		else if(computerChoice == "Paper"){
			return "You Lose";
		}
		else if(computerChoice == "Scissors"){
			return "You Win";
		}
	}

	else if(playerChoice == "Paper"){
		if(computerChoice == "Rock"){
			return "You Win";
		}
		else if (computerChoice == "Paper"){
			return "Tie";
		}
		else if (computerChoice == "Scissors"){
			return "You Lose";
		}
	}

	else if(playerChoice == "Scissors"){
		if(computerChoice == "Rock"){
			return "You Lose";
		}
		else if(computerChoice == "Paper"){
			return "You Win";
		}
		else if(computerChoice == "Scissors"){
			return "Tie";
		}
	}
}


$(document).ready(function(){

	$('#rock').click(function(){
		//alert("Rock");
		$('#you_value').html("Rock");
		var result = getResult("Rock", getComputerChoice());
		$('#result_value').html(result);
	});

	$('#paper').click(function(){
		//alert("Paper");
		$('#you_value').html("Paper");
		var result = getResult("Paper", getComputerChoice());
		$('#result_value').html(result);
	});


	$('#scissors').click(function(){
		//alert("Scissors");
		$('#you_value').html("Scissors");
		var result = getResult("Scissors", getComputerChoice());
		$('#result_value').html(result);
	});

	// $('#rock').click(function(){
	// 	doAlert()
	// });

});