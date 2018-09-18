// remember to add function ready at the end//
// Handler for .ready() called.

var gameObject = {
    questions: [
        {
            question: "What goes up but never comes down?",
            answers: ["Hot air ballon",
                "Birds",
                "Age",
                "None of the above, answer not listed"
            ],
            correctAnswer: '2'
        },
        {
            question: "You throw away the outside and cook the inside. Then you eat the outside and throw away the inside. What did you eat?",
            answers: ["Pistachio Nuts",
                "Ear of Corn",
                "Patato",
                "None of the above, answer not listed"
            ],
            correctAnswer: '1'
        },
        {
            question: "What travels around the world but stays in one spot?",
            answers: ["The Sun",
                "A letter",
                "A Stamp",
                "None of the above, answer not listed"
            ],
            correctAnswer: "2"
        },
        {
            question: "What's black when you get it, red when you use it, and white when you're all through with it?",
            answers: ["Bullet",
                "Lobster",
                "Charcoal",
                "None of the above, answer not listed"
            ],
            correctAnswer: "2"
        },
        {
            question: "What can run but never walks, has a mouth but never talks, has a head but never weeps, and has a bed but never sleeps?",
            answers: ["A River",
                "A Cheetah",
                "A Car",
                "None of the above, answer not listed"
            ],
            correctAnswer: "0"
        },
        {
            question: "I'm tall when I'm young and I'm short when I'm old. What am I?",
            answers: ["A Human",
                "A Tree",
                "A Candle",
                "None of the above, answer not listed"
            ],
            correctAnswer: "2"
        },
        {
            question: "How can a man go eight days without sleep?",
            answers: ["Energy Drinks",
                "Coffee",
                "Constant Physical Exercise",
                "None of the above, answer not listed"
            ],
            correctAnswer: "3"
        },
        {
            question: "A bus driver went right past a stop sign without stopping, he turned left where there was a 'no left turn' sign and he went the wrong way on a one-way street. Then went on the left side of the road past a cop car & didn't break traffic laws. Why not?",
            answers: ["The cop was his friend",
                "the cop car was empty",
                "He wasn't driving, he was walking",
                "None of the above, answer not listed"
            ],
            correctAnswer: "2"
        },
        {
            question: "How can you throw a ball as hard as you can and have it come back to you even if it doesnt hit anything. There is nothing attached to it and no one else catches or throws it?",
            answers: ["Throw it in space because there is no gravity",
                "Throw it to the sky straight above you",
                "Glue the ball to your hand",
                "None of the above, answer not listed"
            ],
            correctAnswer: "1"
        },
        {
            question: "What belongs to you but others use it more than you do?",
            answers: ["Money",
                "Phone Number",
                "Name",
                "None of the above, answer not listed"
            ],
            correctAnswer: "2"
        }

    ],
    correct: 0,
    incorrect: 0,
    notAnswered: 0,
    timerCountDown: 15,
    timerCount: '',
    currentQuestion: 0,
    timer: function () {
        gameObject.timerCountDown -= 1;
        $('#time-remaining').text('Time Remaining: ' + gameObject.timerCountDown + ' Seconds');
        if (gameObject.timerCountDown === 0) {
            gameObject.checkAnswers(4);
        }
    },
    gameStart : function () {
    // Build the Start Button Page//

    $gameContainer.empty();
    var $pContainer = $('<p>');
    $pContainer.attr('class', 'h1 text-light text-center');
    $pContainer.text('Riddle Me This?');
    $gameContainer.append($pContainer);
    var $gameStartDiv = $('<div>');
    $gameStartDiv.attr('class','d-flex justify-content-center mt-5');
    var $gameStartBtn = $('<button>');
    $gameStartBtn.attr({
        'class': 'btn btn-primary outline',
        'id': 'start-button'
    });
    $gameStartBtn.text('Start Game');
    $gameStartDiv.append($gameStartBtn);
    $gameContainer.append($gameStartDiv);
    var startBtn = $('#start-button');
    startBtn.on('click', function () {
        correct = 0;
        incorrect = 0;
        notAnswered = 0;
        gameObject.buildGame();

    });
},
    checkAnswers : function (answerChoice) {
    //console.log('Current Question: ' + gameObject.currentQuestion);
    $('.form-check-input').attr('disabled',true);

    if (answerChoice === 4) {
        $imageHolder.attr('src','./assets/images/Oops.gif');
        $imageContainer.attr('class','d-flex justify-content-center visible');
        gameObject.notAnswered += 1;
        $('#time-remaining').text('Sorry you did not answer! The correct answer was ' + gameObject.questions[gameObject.currentQuestion].answers[gameObject.questions[gameObject.currentQuestion].correctAnswer]);
    //    console.log('Correct'+gameObject.correct,'Incorrect'+ gameObject.incorrect,'Not Answered' + gameObject.notAnswered);

    } else if (answerChoice === gameObject.questions[gameObject.currentQuestion].correctAnswer) {
        gameObject.correct += 1;
        $imageHolder.attr('src','./assets/images/applause.gif_c200');
        $imageContainer.attr('class','d-flex justify-content-center visible');
        // console.log('Correct'+gameObject.correct,'Incorrect'+ gameObject.incorrect,'Not Answered' + gameObject.notAnswered);
        $('#time-remaining').text('Correct! Great Job!');

    } else if(answerChoice !== gameObject.questions[gameObject.currentQuestion].correctAnswer){
        gameObject.incorrect += 1;
        $imageHolder.attr('src','./assets/images/sorry.gif');
        $imageContainer.attr('class','d-flex justify-content-center visible');
        // console.log('Correct'+gameObject.correct,'Incorrect'+ gameObject.incorrect,'Not Answered' + gameObject.notAnswered);
        $('#time-remaining').text('Incorrect! The correct answer was ' + gameObject.questions[gameObject.currentQuestion].answers[gameObject.questions[gameObject.currentQuestion].correctAnswer]);

    }
    gameObject.currentQuestion += 1;
    if (gameObject.currentQuestion === 10) {
        clearInterval(gameObject.timerCount);
        setTimeout(gameObject.gameFinished, 3000);
    }
    else {
        clearInterval(gameObject.timerCount);
        setTimeout(gameObject.buildGame, 3000);
    }

},
    buildGame  : function () {
    $imageContainer.attr('class','d-flex justify-content-center invisible');
    //Start Timer
    gameObject.timerCountDown = 15;
    gameObject.timerCount = setInterval(gameObject.timer, 1000);
    $gameContainer.empty();

    var $pHeaderContainer = $('<p>');
    // Header
    $pHeaderContainer.attr('class', 'h1 text-light text-center');
    $pHeaderContainer.text('Riddle Me This?');
    $gameContainer.append($pHeaderContainer);
    // Timer
    var $divContainer = $('<div>');
    var $pTimeContainer = $('<p>');
    $pTimeContainer.attr({
        'class': 'h3 text-center',
        'id': 'time-remaining'
    });
    $pTimeContainer.text('Time Remaining: ' + gameObject.timerCountDown + ' Seconds');
    $divContainer.append($pTimeContainer);
    $gameContainer.append($divContainer);
    //Question Build
    var $divQContainer = $('<div>');
    $divQContainer.attr({
        'class': 'h3 mx-auto mt-3 text-center',
        'id': 'current-question'
    });
    $divQContainer.text(gameObject.questions[gameObject.currentQuestion].question);
    $divContainer.append($divQContainer);
    // build Answers
    var $answerSectionDiv = $('<div>');
    $answerSectionDiv.attr({
        'class': ' col-5 mx-auto mt-4',
        'id': 'answer-section'
    });
    for (i = 0; i < 4; i++) {
        var $answerButtonDiv = $('<div>');
        var $answerButtonInput = $('<input>');
        var $answerButtonLabel = $('<lable>');
        var idValue = "customRadio" + i;
        $answerButtonDiv.attr('class', 'form-check');
        $answerButtonInput.attr({
            type: 'radio',
            id: idValue,
            name: 'exampleRadios',
            'class': 'form-check-input',
            value: i
        });
        $answerButtonDiv.append($answerButtonInput);
        $answerButtonLabel.attr({
            'class': 'form-check-label',
            for: idValue,
            'data-answer': i
        });
        $answerButtonLabel.text(gameObject.questions[gameObject.currentQuestion].answers[i]);
        $answerButtonDiv.append($answerButtonLabel);
        $answerSectionDiv.append($answerButtonDiv);

    }
    $divContainer.append($answerSectionDiv);
    //Wait for an answer
    var $radioBtn = $('.form-check-input');
    $radioBtn.change(function () {
        gameObject.checkAnswers($(this).val());
    });
},
    gameFinished : function () {
    $imageHolder.attr('src','./assets/images/applause.gif_c200');
    $imageContainer.attr('class','d-flex justify-content-center visible');
    $gameContainer.empty();
    var $pContainer = $('<p>');
    $pContainer.attr('class', 'h1 text-light text-center');
    $pContainer.text('Riddle Me This?');
    $gameContainer.append($pContainer);
    $pContainer = $('<p>');
    $pContainer.attr('class', 'h2 text-light text-center');
    $pContainer.text('You Finished the Game!');
    $gameContainer.append($pContainer);
    $pCorrectAnswers = $('<p>');
    $pCorrectAnswers.attr('class', 'h3 text-light text-center');
    $pCorrectAnswers.text('Correctly Answered: ' + gameObject.correct);
    $gameContainer.append($pCorrectAnswers);
    $pInCorrectAnswers = $('<p>');
    $pInCorrectAnswers.attr('class', 'h3 text-light text-center');
    $pInCorrectAnswers.text('Incorrectly Answered: ' + gameObject.incorrect);
    $gameContainer.append($pInCorrectAnswers);
    $pUnanswered = $('<p>');
    $pUnanswered.attr('class', 'h3 text-light text-center');
    $pUnanswered.text('Not Answered: ' + gameObject.notAnswered);
    $gameContainer.append($pUnanswered);
    var $gameStartDiv = $('<div>');
    $gameStartDiv.attr('class','d-flex justify-content-center mt-5');
    var $gameStartBtn = $('<button>');
    $gameStartBtn.attr({
        'class': 'btn btn-primary outline',
        'id': 'start-button'
    });
    $gameStartBtn.text('Start New Game');
    $gameStartDiv.append($gameStartBtn);
    $gameContainer.append($gameStartDiv);
    $gameStartBtn.on('click', function () {
        gameObject.correct = 0;
        gameObject.incorrect = 0;
        gameObject.notAnswered = 0;
        gameObject.currentQuestion = 0;
        gameObject.buildGame();
    });
}
};
var $gameContainer = $('#question-box');
var $imageContainer = $('#image-div');
var $imageHolder = $('#image');
    gameObject.gameStart();




