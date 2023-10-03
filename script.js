window.onload = () => {
    // Calculator Work Start
    // Include pdfmake library
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.68/vfs_fonts.js';
    document.head.appendChild(script);

    const quiz = [
        {
            question: "Choose a Service:",
            options: [
                {
                    text: "Branding",
                    type: "single",
                    next: [
                        {
                            question: "Choose Service:",
                            options: [
                                {
                                    text: "Logo Design", type: "single", next: [{
                                        question: "How many logo versions you want?",
                                        options: [
                                            { text: "01 - 05", type: "single" },
                                            { text: "10 - 15", type: "single" },
                                            { text: "15 - 20", type: "single" },
                                        ],
                                    }]
                                },
                                {
                                    text: "Broucher Design", type: "single", next: [{
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
                                    text: "Complete Branding", type: "single"
                                },
                            ],
                        },
                    ],
                },
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
    let BLOB = null;

    function isCheck() {
        const optionsElement = document.getElementById("options");
        optionsElement.querySelectorAll('input').forEach((inputElement, index) => {
            inputElement.parentElement.classList.remove('active');
            if (inputElement.checked) {
                inputElement.parentElement.classList.add('active');
            }
        });

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

            showResult();

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

        pdfMake.createPdf(docDefinition).getBlob(function (blob) {
            BLOB = blob
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

    displayQuestion();

    $('#backBtn').click(function () {
        back();
    })

    $('#nextBtn').click(function () {
        nextQuestion();
    })

    // Calculator Work End

    $('.info1dv').click(function (e) {
        var slidingID = $(this).attr('href');
        e.preventDefault();
        $('html, body').animate({ scrollTop: $(slidingID).offset().top - 1 }, 1000);
    });

    $('[href="#"]').attr('href', 'javascript:;');

    $('.logosSlider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.portfolioDv').slick({
        infinite: true,
        autoplay: true,
        cssEase: 'linear',
        arrows: false,
        speed: 1000,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        dots: false
    });

    $('.portfolioDvinfo .arrowsDv a').on('click', function () {
        if ($(this).hasClass('pagerDvnext')) {
            $('.portfolioDv').slick('slickNext');
        }
        if ($(this).hasClass('pagerDvprev')) {
            $('.portfolioDv').slick('slickPrev');
        }
    });

    $('.banSlider, .serviceSlider').slick({
        autoplay: true,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        autoplaySpeed: 1000,
        slidesToShow: 1,
        fade: true,
        cssEase: 'linear'
    });

    if ($(window).width() < 768) {
        $('.noslide').remove();
        $('.mobiSlider').slick({
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 1,
            arrows: false,
            dots: false,
            mobileFirst: true
        });

        $('.review-platforms').slick({
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 1,
            arrows: false,
            dots: false,
            mobileFirst: true
        });

        $('.reviewSlider').slick({
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 1,
            arrows: false,
            dots: true,
            mobileFirst: true
        });

        var topwidtH = $('slide .col-md-7').width();

        $('.textslider').css({ 'width': topwidtH });
    }

    $(".formdiv .toggle span").click(function () {
        $('.formdiv').addClass("popformkhulwana");
    });

    $(".formdiv .toggle .croxDv").click(function () {
        $('.formdiv').removeClass("popformkhulwana");
    });

    $('#appCalculator').on('show.bs.collapse', function () {
        document.querySelector('#accordion-icon').classList.add('rotate');
    })

    $('#appCalculator').on('hidden.bs.collapse', function () {
        document.querySelector('#accordion-icon').classList.remove('rotate');
    })


    $(".popupFormOpen").click(function () {
        $('.formdiv').addClass("popformkhulwana");
    });

    // var header = document.getElementById("myHeader");
    // header.classList.add('sticky-header');

    $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
        arrows: false
    });

    $('.testi-slide-arrow').on('click', function () {
        if ($(this).hasClass('testi-next-arrow')) {
            $('.testi-slider').slick('slickNext');
        }
        if ($(this).hasClass('testi-prev-arrow')) {
            $('.testi-slider').slick('slickPrev');
        }
    });

    $('#mobilePortfolio').slick({
        infinite: true,
        autoplay: true,
        cssEase: 'linear',
        arrows: false,
        speed: 500,
        autoplaySpeed: 500,
        slidesToShow: 1,
        dots: false,
        fade: true,
    });

    $('#hotOffer').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.app-screenshot').slick({
        infinite: true,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: "10px",
        slidesToShow: 5,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        waitForAnimate: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: true,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });

    $('#portfolio-screenshot').slick({
        infinite: true,
        slidesToShow: 4,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        testMode: true,
        asNavFor: '.app-sliders',

        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    })

    $('.app-sliders').slick({
        slidesToShow: 1,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        asNavFor: '#portfolio-screenshot'
    })

    $('#industry-cards').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
    });

    // On before slide change
    $('#portfolio-screenshot').on('setPosition', function (a, b) {
        $('#setWidthDynamic').css('width', b.$slides[0].offsetWidth + "px");
    });

    AOS.init();

    const forms = document.querySelectorAll("form");

    // Show Error
    const showError = (input, message) => {
        const formGroup = $(input).closest('.form-group')[0];
        formGroup.className = "form-group error";

        if ($(formGroup).find("small").length !== 0) {
            $(formGroup).find("small").remove();
        }

        const small = document.createElement("small");
        small.innerText = message;

        formGroup.appendChild(small);
    }

    //Show Success
    const showSuccess = (input) => {
        const formGroup = $(input).closest('.form-group')[0];
        formGroup.className = "form-group success";

        if ($(formGroup).find("small").length !== 0) {
            $(formGroup).find("small").remove();
        }
    }

    // Check email is valid
    function checkEmail(input) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(input.value.trim())) {
            showSuccess(input);
        } else {
            showError(input, 'Email is not valid');
        }
    }

    // Get fieldname
    function getFieldName(input) {
        return input.name.charAt(0).toUpperCase() + input.name.slice(1);
    }

    // Check required fields
    function checkRequired(inputArr) {
        let isRequired = false;
        inputArr.forEach(function (input) {
            if (input.value.trim() === '') {
                showError(input, `${getFieldName(input)} is required`);
                isRequired = true;
            } else {
                showSuccess(input);
            }
        });

        return isRequired;
    }

    // Check input length
    function checkLength(input, min, max) {
        if (input.value.length < min) {
            showError(
                input,
                `${getFieldName(input)} must be at least ${min} characters`
            );
        } else if (input.value.length > max) {
            showError(
                input,
                `${getFieldName(input)} must be less than ${max} characters`
            );
        } else {
            showSuccess(input);
        }
    }

    // Loop over them
    Array.from(forms).forEach((form) => {

        //init country dropdwn
        const phoneInput = $(form).find(".phone-number")[0];
        const iti = window.intlTelInput(phoneInput, {
            // any initialisation options go here
            utilsScript: "https://intl-tel-input.com/intl-tel-input/js/utils.js?1690975972744",
        });

        $(phoneInput).val("+" + iti.getSelectedCountryData().dialCode);

        phoneInput.addEventListener("countrychange", function () {
            // do something with iti.getSelectedCountryData()
            $(this).val("+" + iti.getSelectedCountryData().dialCode);
        });

        form.addEventListener(
            "submit",
            (event) => {
                event.preventDefault();
                event.stopPropagation();

                const name = $(form).find('[name="Name"]')[0];
                const email = $(form).find('[name="Email"]')[0];
                const phone = $(form).find('[name="Phone"]')[0];
                const message = $(form).find('[name="Message"]')[0];

                if (checkRequired([name, email, phone, message])) {
                    checkLength(name, 3, 35);
                    checkLength(phone, 10, 16);
                    checkEmail(email);
                } else {
                    var formData = new FormData($(form)[0]);
                    if (BLOB !== null) {
                        formData.append('pdf', BLOB, name.value.trim() + '.pdf');
                    }

                    $.ajax({
                        type: "POST",
                        url: "https://pebtechsolutions.com/leading-mobile-app-development-company/send-email.php",
                        processData: false,
                        contentType: false,
                        cache: false,
                        dataType: "json",
                        data: formData,
                        success: function (response) {
                            if (response.success) {
                                form.reset();
                                location.replace("https://pebtechsolutions.com/thank-you.html");
                            } else { }
                        },
                        error: function (xhr, status, error) {
                            console.log(xhr);
                        },
                    });
                }
            },
            false
        );
    });

    document.querySelector('body').classList.remove('loading')
}
