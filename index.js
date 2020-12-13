var readLineSync = require('readline-sync')
var userName = readLineSync.question('Enter username please: ')

console.log("Welcome, ", userName);
console.log("Let's see how much you know me!! Let's begin!")

var questionList = [
  {
    question: 'What is my favorite book series? ',
    answer: 'Harry Potter'
  },
  {
    question: 'What is my favorite color? ',
    answer: 'Orange'
  },
  {
    question: 'Which college did I graduate from? ',
    answer: 'NIT Trichy'
  },
  {
    question: 'Which company do I work in? ',
    answer: 'Morgan Stanley'
  },
  {
    question: 'What do I prefer: Sleep or food? ',
    answer: 'Sleep'

  },
  {
    question: 'Light mode or dark mode? ',
    answer: 'dark mode'

  },
  {
    question: 'What is my favorite programming language? ',
    answer: 'C++'

  },
  {
    question: 'Which city I grew up in childhood? ',
    answer: 'Muscat'

  },
  {
    question: 'Favorite food item? ',
    answer: 'Pizza'

  },
  {
    question: 'Summer or winter? ',
    answer: 'winter'

  }
]

var highScores = [
    {
      name: 'Priya',
      score: 10
    },
    {
      name: 'Pooja',
      score: 9
    }
]

var score = 0;

function play(question,correctAnswer)
{
  var userAnswer = readLineSync.question(question);
  if(userAnswer.toUpperCase() === correctAnswer.toUpperCase())
  {
    score++;
    
    console.log("Wohoo! That's correct. Your score is: ", score);
  }
  else 
  {
    console.log("Oops! That's incorrect")
  }
}

for(var i =0;i<questionList.length;i++)
{
  play(questionList[i].question,questionList[i].answer);
}

console.log("\n", userName, ", your final score is: ", score);

console.log("-----------------")

