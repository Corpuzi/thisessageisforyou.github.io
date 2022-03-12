//Since we know we have multiple quotes and each one will be picked out randomly, the best choice would be to store them within an array 
const quotes = [
"Life will be hard. No free passes.\n",
"Good things come to people who wait, but better things come to those who go out and get them.\n",
"Opportunities don't happen, you create them.\n",
"A successful man is one who can lay a firm foundation with the bricks others have thrown at him.\n",
"Don't raise your voice, improve your argument.\n",
"What seems to us as bitter trials are often blessings in disguise.\n",
"He who says he can, and he who says he can’t are both correct.\n",
"Blessed are those who can give without remembering and take without forgetting.\n",
"What's the point of being alive if you don't at least try to do something remarkable.\n",
"Your problem isn't the problem. Your reaction is the problem.\n",
"You can do anything, but not everything.\n",
"There are two types of people who will tell you that you cannot make a difference in this world; those who are afraid to try and those who are afraid you will succeed.\n",
"All progress takes place outside the comfort zone.\n",
"Success is walking from failure to failure with no loss of enthusiasm.\n",
"We become what we think about most of the time.\n",
"The road to success and the road to failure are almost exactly the same.\n",
"The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.\n",
"Whenever you find yourself on the side of the majority, it is time to pause and reflect.\n", 
"If you don't design your own life plan, chances are you'll fall into someone else's plan.\n",
"Don't let the fear of losing be greater than the excitement of winning.\n",
"Successful people do what unsuccessful people are not willing to do. Don't wish it were easier, wish you were better.\n",
"Success does not consist in never making mistakes but in never making the same one a second time.\n",
"Motivation is what gets you started. Habit is what keeps you going.\n",
"You've got to get up every morning with determination if you're going to go to bed with satisfaction.\n",
"To be successful you must accept all challenges that come your way. You can't just accept the ones you like.\n",
"Be miserable. Or motivate yourself. Whatever has to be done, it's always your choice.\n",
"Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.\n",
"Real difficulties can be overcome; it is only the imaginary ones that are unconquerable.\n",
"It is better to fail in originality than to succeed in imitation.\n",
"Don't let what you cannot do interfere with what you can do.\n",
"You may have to fight a battle more than once to win it.\n"
]

//Retrieve a random quote by generating and calling a random array index number
    //Math.floor rounds a number downward to the nearest integer
    //Math.random generates a random decimal number between 0 and 1
function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    
    alert(quotes[randomNumber];
}
