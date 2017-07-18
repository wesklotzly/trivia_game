function populate() {
	if(quiz.isEnd())  {
		//showScores();

	}
	else {
		var element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex().text;
	}
}

var questions = [
	new Question("What is the name of the health inspector that regulates bobs restaurant?", ["Hugo", "Bill", "Jeffrey", "Winston"], "Hugo"),
	new Question("What is the name of the pier?", ["Playcity Pier", "Paradise Pier", "Wonder Wharf", "Salty Town"],"Wonder Wharf"),
	new Question("In the Halloween episode, where do the kids get trapped?", ["The Basement", "The Attic", "A Fort", "The Car"], "A Fort"),
	new Question("What does Linda sell to pay for Gene's baseball lessons?", ["House", "Car", "Espresso Machine", "Bob's Favorite Spatula"], "Espresso Machine"),
	new Question("What is the name of the property manager of Bob's restaurant?", ["Mr. Pinelli", "Mr. Smith", "Mr. Graziano", "Mr. Fishoder"], "Mr. Fishoder"),

	]

var quiz = new Quiz(questions);

populate();

