// <!-- ... (previous HTML code) ... -->

// Include pdfmake library
const script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.68/vfs_fonts.js';
document.head.appendChild(script);

const quiz = [
    {
        question: "Choose a Service:",
        options: [
            {
                text: "UI/UX Design",
                type: "single",
                next: [
                    {
                        question: "Choose Platform:",
                        options: [
                            {
                                text: "Website Design", type: "single", next: [{
                                    question: "How many number of pages you want?",
                                    options: [
                                        { text: "01 - 05", type: "single" },
                                        { text: "10 - 15", type: "single" },
                                        { text: "15 - 20", type: "single" },
                                    ],
                                }]
                            },
                            {
                                text: "Mobile Application Design", type: "single", next: [{
                                    question: "How many number of pages you want?",
                                    options: [
                                        { text: "01 - 05", type: "single" },
                                        { text: "10 - 15", type: "single" },
                                        { text: "15 - 20", type: "single" },
                                        { text: "20 - 25", type: "single" },
                                    ],
                                }]
                            },
                        ],
                    },
                ],
            },
            {
                text: "Website Development",
                type: "single",
                next: [
                    {
                        question: "Choose Platform:",
                        options: [
                            {
                                text: "Wordpress", type: "single", next: [{
                                    question: "How many number of pages you want?",
                                    options: [
                                        { text: "01 - 05", type: "single" },
                                        { text: "10 - 15", type: "single" },
                                        { text: "15 - 20", type: "single" },
                                    ],
                                }]
                            },
                            {
                                text: "Shopify", type: "single", next: [{
                                    question: "How many number of pages you want?",
                                    options: [
                                        { text: "01 - 05", type: "single" },
                                        { text: "10 - 15", type: "single" },
                                        { text: "15 - 20", type: "single" },
                                        { text: "20 - 25", type: "single" },
                                    ],
                                }]
                            },
                            {
                                text: "Wix", type: "single", next: [{
                                    question: "How many number of pages you want?",
                                    options: [
                                        { text: "01 - 05", type: "single" },
                                        { text: "10 - 15", type: "single" },
                                        { text: "15 - 20", type: "single" },
                                        { text: "20 - 25", type: "single" },
                                    ],
                                }]
                            },
                            {
                                text: "Magento", type: "single", next: [{
                                    question: "How many number of pages you want?",
                                    options: [
                                        { text: "01 - 05", type: "single" },
                                        { text: "10 - 15", type: "single" },
                                        { text: "15 - 20", type: "single" },
                                    ],
                                }]
                            },
                            {
                                text: "Other", type: "single", next: [{
                                    question: "How many number of pages you want?",
                                    options: [
                                        { text: "01 - 05", type: "single" },
                                        { text: "10 - 15", type: "single" },
                                        { text: "15 - 20", type: "single" },
                                    ],
                                }]
                            },
                        ],
                    },
                ],
            },
            {
                text: "Mobile Application Development",
                type: "single",
                next: [
                    {
                        question: "Choose Platform:",
                        options: [
                            {
                                text: "iOS", type: "single", next: [{
                                    question: "What feature your want to include in your app?",
                                    options: [
                                        { text: "Messaging", type: "multiple" },
                                        { text: "Audio", type: "multiple" },
                                        { text: "Video", type: "multiple" },
                                        { text: "Location", type: "multiple" },
                                        { text: "Notification", type: "multiple" },
                                        { text: "In-App Purchase", type: "multiple" },
                                        { text: "Calling", type: "multiple" },
                                        { text: "SMS", type: "multiple" },
                                        { text: "Ordering", type: "multiple" },
                                        { text: "Tracking Location", type: "multiple" },
                                        { text: "Calender", type: "multiple" },
                                        { text: "Video Streaming", type: "multiple" },
                                    ],
                                }]
                            },
                            {
                                text: "Andriod", type: "single", next: [{
                                    question: "What feature your want to include in your app?",
                                    options: [
                                        { text: "Messaging", type: "multiple" },
                                        { text: "Audio", type: "multiple" },
                                        { text: "Video", type: "multiple" },
                                        { text: "Location", type: "multiple" },
                                        { text: "Notification", type: "multiple" },
                                        { text: "In-App Purchase", type: "multiple" },
                                        { text: "Calling", type: "multiple" },
                                        { text: "SMS", type: "multiple" },
                                        { text: "Ordering", type: "multiple" },
                                        { text: "Tracking Location", type: "multiple" },
                                        { text: "Calender", type: "multiple" },
                                        { text: "Video Streaming", type: "multiple" },
                                    ],
                                }]
                            },
                            {
                                text: "Hybird", type: "single", next: [{
                                    question: "What feature your want to include in your app?",
                                    options: [
                                        { text: "Messaging", type: "multiple" },
                                        { text: "Audio", type: "multiple" },
                                        { text: "Video", type: "multiple" },
                                        { text: "Location", type: "multiple" },
                                        { text: "Notification", type: "multiple" },
                                        { text: "In-App Purchase", type: "multiple" },
                                        { text: "Calling", type: "multiple" },
                                        { text: "SMS", type: "multiple" },
                                        { text: "Ordering", type: "multiple" },
                                        { text: "Tracking Location", type: "multiple" },
                                        { text: "Calender", type: "multiple" },
                                        { text: "Video Streaming", type: "multiple" },
                                    ],
                                }]
                            },
                        ],
                    },
                ],
            },
        ],
    },
];

let currentQuestionIndex = 0;
let history = [];
const selectedOptions = [];

function isCheck() {
    const optionsElement = document.getElementById("options");
    optionsElement.querySelectorAll('input').forEach((inputElement, index) => {
        inputElement.parentElement.classList.remove('active');
        if (inputElement.checked) {
            inputElement.parentElement.classList.add('active');
        }
    });

}


function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    const currentQuestion = quiz[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsElement.innerHTML = "";
    const currentSelectedOptions = selectedOptions[currentQuestionIndex] || [];

    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement("label");
        let inputElement;

        if (option.type === "multiple") {
            inputElement = document.createElement("input");
            inputElement.type = "checkbox";
        } else {
            inputElement = document.createElement("input");
            inputElement.type = "radio";
            inputElement.name = "option";
        }

        inputElement.value = index;
        if (currentSelectedOptions.includes(index)) {
            inputElement.checked = true;
        }
        inputElement.onclick = () => { isCheck() }
        optionElement.appendChild(inputElement);
        optionElement.appendChild(document.createTextNode(option.text));
        optionElement.className = "option";
        optionsElement.appendChild(optionElement);
    });

    isCheck()
}

function back() {
    if (history.length > 0) {
        currentQuestionIndex = history.pop();
        displayQuestion();
    }
}

function nextQuestion() {
    const selectedIndices = Array.from(document.querySelectorAll('input[type="checkbox"]:checked, input[type="radio"]:checked'))
        .map(input => parseInt(input.value));
    selectedOptions[currentQuestionIndex] = selectedIndices;

    const nextQuestions = [];
    selectedIndices.forEach(index => {
        const next = quiz[currentQuestionIndex].options[index].next;
        if (next) {
            nextQuestions.push(...next);
        }
    });

    if (nextQuestions.length > 0) {
        history.push(currentQuestionIndex);
        currentQuestionIndex++;
        quiz.splice(currentQuestionIndex, 0, ...nextQuestions);
    } else {
        //end result

        document.querySelector('#calculatorDv-01').style.display = "none"
        document.querySelector('#calculatorDv-02').style.display = "flex"

        //showHOURS();

        //  showResult()

    }

    displayQuestion();
}

function showResult() {

    const resultData = [];

    for (let i = 0; i < selectedOptions.length; i++) {
        const questionText = quiz[i].question;
        const selectedIndices = selectedOptions[i];
        const selectedOptionsText = selectedIndices.map(index => quiz[i].options[index].text);


        resultData.push({
            question: questionText,
            selectedOptions: selectedOptionsText,
        });
    }

    const docDefinition = {
        content: [
            { text: 'Service Cost Calculator', style: 'header' },
            { text: '\n' },
            resultData.map((data, index) => {
                return [
                    { text: `Question ${index + 1}:`, style: 'subheader' },
                    data.question,
                    'Selected Options:',
                    data.selectedOptions.join(', '),
                    { text: '\n' },
                ];
            }),
        ],
        styles: {
            header: {
                fontSize: 18,
                bold: true,
            },
            subheader: {
                fontSize: 14,
                bold: true,
            },
        },
    };

    // Generate PDF document
    pdfMake.createPdf(docDefinition).download('app_cost.pdf');
}

displayQuestion();