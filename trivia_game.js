function Question(text, choices, answer)  {
	this.text=text;
	this.choices=choices;
	this.answer=answer;
}

Question.class_name.correctAnswer = function(choice) {
	return choice === this.answer;
}

function Quiz(questions)   {
	this.score = 0;
	this.questions = questions;
	this.questionInd = 0;
}

Quiz.prototype.getQuestionIndex = function()   {
	return this.questions[this.questionIndex];
}

Quiz.prototype.isEnd = function()   {
	return this.questions.length === this.questionIndex;
}

Quiz.prototype.guess = function (answer)   {
	this.questionIndex++;

	if(this.getQuestionIndex() .correctAnswer(answer))  {
		this.score++;
	}
}