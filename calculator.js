const quiz = [
    {
        question: "What type of service you want?",
        options: [
            {
                text: "Branding",
                next: [
                    {
                        question: "What type of branding stuff you want?",
                        options: [
                            { text: "Logo", next: [] },
                            {
                                text: "Company Profile",
                                next: [
                                    {
                                        question: "How many pages you want in Company Profile?",
                                        options: [
                                            { text: "01 - 05", next: [] },
                                            { text: "05 - 10", next: [] },
                                            { text: "10 - 15", next: [] },
                                        ],
                                    },
                                ],
                            },
                            {
                                text: "Broucher",
                                next: [
                                    {
                                        question: "How many pages you want in broucher?",
                                        options: [
                                            { text: "01 - 05", next: [] },
                                            { text: "05 - 10", next: [] },
                                            { text: "10 - 15", next: [] },
                                        ],
                                    },
                                ],
                            },
                            { text: "Complete", next: [] },
                        ],
                    },
                ],
            },
            {
                text: "UI/UX Design",
                next: [
                    {
                        question: "What type of UI/UX Design you want?",
                        options: [
                            { text: "Apple", next: [] },
                            { text: "Banana", next: [] },
                            { text: "Orange", next: [] },
                        ],
                    },
                ],
            },
            {
                text: "Website Development",
                next: [
                    {
                        question: "What type of Website you want?",
                        options: [
                            { text: "Wordpress", next: [] },
                            { text: "Shopify", next: [] },
                            { text: "Wix", next: [] },
                            { text: "SquareSpace", next: [] },
                            { text: "Other", next: [] },
                        ],
                    },
                ],
            },
            {
                text: "Mobile Application Development",
                next: [
                    {
                        question: "What type of application you want",
                        options: [
                            {
                                text: "iOS", next: [
                                    {
                                        question: "What type of features you want in your iOS Application?",
                                        options: [
                                            { text: "Messaging", next: [] },
                                            { text: "Calling", next: [] },
                                            { text: "Audio", next: [] },
                                        ],
                                    },
                                ]
                            },
                            { text: "Andriod", next: [] },
                            { text: "Hybird", next: [] },
                        ],
                    },
                ],
            },
        ],
    },
];

let currentQuestionIndex = 0;
let history = [];

function drawOption(text, index, next) {
    let a = document.createElement('label');
    a.classList.add('option');
    let b = document.createElement('input');
    b.setAttribute("type", "radio");
    b.setAttribute("name", "category");
    let c = document.createElement('span');
    c.innerText = text;
    // a.setAttribute("data-index", index)
    // a.setAttribute("data-next", JSON.stringify(next))
    a.onclick = () => selectOption(index, next);
    a.append(b);
    a.append(c);

    return a
}

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    const currentQuestion = quiz[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsElement.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        optionsElement.appendChild(drawOption(option.text, index, option.next))
    });
}

function selectOption(selectedIndex, nextQuestions) {
    if (nextQuestions.length > 0) {
        history.push({ index: currentQuestionIndex, question: quiz[currentQuestionIndex] });
        currentQuestionIndex++;
        quiz.splice(currentQuestionIndex, 0, ...nextQuestions);
        displayQuestion();
    }
}

function goBack() {
    if (history.length > 0) {
        const previousQuestion = history.pop();
        currentQuestionIndex = previousQuestion.index;
        quiz.splice(currentQuestionIndex + 1, quiz.length - currentQuestionIndex - 1);
        displayQuestion();
    }
}

displayQuestion();