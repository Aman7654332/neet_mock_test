//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

//Questions and Options array

const quizArray = [
    {
        id: "0",
        question: "In majority of higher animals and plants,_____ and _____ are mutually exclusive events.",
        options: ["growth; nutrition", "nutrition; consciousness", "growth; reproduction", "reproduction; consciousness"],
        correct: "growth; reproduction",
    },
    {
        id: "1",
        question: "In multicellular organisms _____refers to the production of progeny possessing features more or less similar to those of parents.",
        options: ["growth ", "reproduction", "metabolism", "consciousness"],
        correct: "reproduction",
    },
    {
        id: "2",
        question: "Families are characterized on which of the following features of plant species?",
        options: ["	External morphology ", "Anatomy of parts ", "Vegetative and reproductive parts ", "	Seasonal similarities and variations "],
        correct: "Vegetative and reproductive parts",
    },
    {
        id: "3",
        question: "The sum total of all the chemical reactions occurring in our body is known as",
        options: ["metabolism", "growth", "regeneration", "reproduction"],
        correct: "metabolism",
    },
    {
        id: "4",
        question: "Cell division occurs _______in plants and _______in animals.",
        options: ["continuously, only up to a certain age", "only up to a certain age, continuously", "continuously, never", "once, twice"],
        correct: "continuously, only up to a certain age",
    },
    {
        id: "5",
        question: "The fungi, the filamentous algae, the protonema  of mosses, all easily multiply by _____.",
        options: ["budding", "fission", "regeneration ", "fragmentation"],
        correct: "fragmentation",
    }, {
        id: "6",
        question: ". Which of the following factors exclusively affects reproduction in seasonal breeders, both plants and animals? ",
        options: ["Water", "Temperature ", "Photoperiod", "All of these "],
        correct: "Photoperiod",
    },
    {
        id: "7",
        question: "The keys are based on contrasting characters generally in a pair called _______. ",
        options: [" flora ", "couplet ", "both (a) and (b) ", "manuals "],
        correct: "couplet",
    },
    {
        id: "8",
        question: "The order generally ends with ",
        options: ["ales", "aceae", "eae ", "none of these "],
        correct: "ales",
    },
    {
        id: "9",
        question: "Which of the following are unique features of living organisms?",
        options: ["growth and reproduction ", "reproduction and ability to sense environment", "metabolism and interaction", "all of the above"],
        correct: "all of the above",
    },
    {
        id: "10",
        question: "Which of the following aspects is an exclusive characteristic of living things ",
        options: ["isolated metabolic reactions occur in vitro", "increase in mass from inside only", "perception of events happening in the environment and their memory", "Increase in mass by accumulation of material both on surface as well as internally"],
        correct: "perception of events happening in the environment and their memory",
    },
    {
        id: "11",
        question: ". Which of the following term is used to refer the number of varieties of plants and animals on earth ? ",
        options: ["Taxonomy", "Identification", "Biodiversity", "Classification"],
        correct: "Biodiversity",
    },
    {
        id: "12",
        question: "ICBN stands for",
        options: ["International Code of Botanical Nomenclature", "International Congress of Biological Names ", "Indian Code of Botanical Nomenclature ", "Indian Congress of Biological Names "],
        correct: "International Code of Botanical Nomenclature",
    },
    {
        id: "13",
        question: "Binomial nomenclature means  ",
        options: ["one name given by two scientists", "one scientific name consisting of a generic and specific epithet", " two names, one latinized, other of a person", "two names of same plant"],
        correct: "one scientific name consisting of a generic and specific epithet",
    },
    {
        id: "14",
        question: " Herbarium is a ",
        options: ["garden where medicinal plants are grown", "garden where herbaceous plants are grown", "dry garden ", "chemical to kill plants"],
        correct: "dry garden",
    },
    {
        id: "15",
        question: "The famous botanical garden key is located in ",
        options: ["england ", "lucknow", "berlin ", "australia "],
        correct: "england",
    },
    {
        id: "16",
        question: "Which ofthe following taxonomic aid provides information for the identification of names of species found in an area?", 
        options: ["	monograph", "manual ", "flora ", "periodical"],
        correct: "manual",
    },
    {
        id: "17",
        question: "Which one of the taxonomic aids can give comprehensive account of complete compiled information of any one genus or family at a particular time?",
        options: ["taxonomic key", "flora", "herbarium  ", "monograph"],
        correct: "monograph",
    },
    {
        id: "18",
        question: "Which one of the following taxonomical aid is used for identification of plants and animals based on similarities and dissimilarities?",
        options: ["Flora", "Keys", "Monographs", "Catalogues"],
        correct: "Keys",
    },
    {
        id: "19",
        question: "The practical purpose of classification of living organisms is to.",
        options: ["explain the origin of living organsims", "trace the evolution of living organsims", "name the living organisms", "facilitate identification of unknown organisms"],
        correct: "facilitate identification of unknown organisms",
    },
        {
            id: "20",
            question: "Taxon is a.",
            options: ["unit of classification", "species", "highest rank of classification", "group of closely related organisms"],
            correct: "group of closely related organisms",
        },
        {
            id: "21",
            question: "Systematics refers to the",
            options: ["identification and classification of plants and animals", "nomenclature and identification of plants and animals", "diversity of kinds of organisms and the irrelationship", "different kinds of organisms and their classification"],
            correct: "diversity of kinds of organisms and the irrelationship",
        },
        {
            id: "22",
            question: "Keys are generally _______in nature.",
            options: ["physical", "chemical", "analytical", "qualitative"],
            correct: "analytical",
        },
        {
            id: "23",
            question: "Each statement in the key is called _______.",
            options: ["lead", "catalogues", "manuals", "monographs"],
            correct: "lead",
        },
        {
            id: "24",
            question: "Which of the following is not a characteristic of life?",
            options: ["Reproduction", "Complex chemical organization", "Adaptation to environmental changes", "Differentiation from cells to tissues"],
            correct: "Differentiation from cells to tissues",
        },
        {
            id: "25",
            question: "In printed scientific names, only the ______is capitalized.",
            options: ["class", "species", "genus", "family"],
            correct: "genus",
        },
        {
            id: "26",
            question: "Each category of taxonomic hierarchy refers to as a unit of______.",
            options: ["systematic", "identification", "nomenclature", "classification"],
            correct: "classification",
        },
        {
            id: "27",
            question: "Which of the following statement(s) is/are correct?",
            options: ["Only living organisms grow", "Plants grow only up to a certain age", "The growth in living organisms is from inside", "All of the above"],
            correct: "The growth in living organisms is from inside",
        },
        {
            id: "28",
            question: "Which one of the following is not a correct statement?",
            options: ["Botanical gardens have collection of living plants for reference", "A museum has collection of photographs of plants and animals", "Key is a taxonomic aid for identification of specimens", "Herbarium is a store house that contains dried, pressed and preserved plant specimens"],
            correct: "A museum has collection of photographs of plants and animals",
        },
        {
            id: "29",
            question: "Which two points are known as the twin characteristics of growth? (i)	Increase in mass (ii)	Differentiation (iii)	Increase in number of individuals (iv)	Response to stimuli",
            options: ["(i) and (ii)", "(i) and (iv)", "(ii) and (iii)", "(i) and (iii)"],
            correct: "(i) and (iii)",
        },
        {
            id: "30",
            question: "Statement 1 : Taxon and category are different things. Statement 2 : Category shows hierarchical classification.",
            options: ["Statement- 1 and statement-2 are true and statement-2 is a correct explanation for statement -1", "Statement -1 and Statement -2 are true;statement-2 is not a correct explanation for statement - 1", "Statement - 1 is true and statement- 2 is false", "Both the statements are false"],
            correct: "Statement- 1 and statement-2 are true and statement-2 is a correct explanation for statement -1",
        },
        {
            id: "31",
            question: "Which of the following statements regarding nomenclature is correct?",
            options: ["Generic name always begins with capital letter whereas specific name with small letter", "Scientific name should be printed in italics", "Scientific name when typed or handwritten should be underlined", "All of the above"],
            correct: "All of the above",
        },
          
    {
        id: "32",
        question: "Which of the following statements are correct about herbarium? ",
        options: ["It is a store house of collected plant specimens that are dried and preserved on sheets", "Herbarium sheets contain information about date and place of collection, names, family, collector’s name, etc", "It serves as quick referral systems in taxonomical studies", "All of the above"],
        correct: "All of the above",
    },
    {
        id: "33",
        question: "Which of the following statements regarding growth is in correct?",
        options: ["In plants, growth by cell division is seen only up to a certain stage", "Growth exhibited by non-living objects is by accumulation of material on the surface", "A multicellular organism grows by cell division", "Growth in in vitro culture of unicellular organisms can be observed by counting the number of cells"],
        correct: "In plants, growth by cell division is seen only up to a certain stage",
    },
    {
        id: "34",
        question: "Which of the following statement(s) is/are correct for Metabolsim ?",
        options: ["It is the sum total of all physical reactions taking place inside a living system", "All plants, animals, fungi and microbes exhibit metabolism", "Isolated metabolic reactions in-vitro are not living but are living reactions", "All of the above"],
        correct: "All plants, animals, fungi and microbes exhibit metabolism",
    },
    {
        id: "35",
        question: "Which one of the following statements is correct about biodiversity ?",
        options: ["It is the occurrence of varied type of organisms on earth", "Each different kind of plant, animal or organism represents a species", "The number of species that are known and described range between 1.7–1.8million", "All of the above"],
        correct: "All of the above",
    },
    {
        id: "36",
        question: "Which of the following statements(i - vi) are correct ? (i)	Growth cannot be taken as a defining property of living organism. (ii)	Dead organism does not grow. (iii)	Reproduction cannot be an all inclusive defining characteristic of living organisms. (iv)	No non-living object is capable of replicating itself. (v)	Metabolism in a test tube is non-living. (vi)	Metabolism is a defining feature of all living organisms.",
        options: ["(i) and (iii) ", "All except (v) ", "All except (iii) ", "All of these"],
        correct: "All except (v)",
    },
    {
        id: "37",
        question: "Which of the following statements are not correct ? (i)	Lower the taxon, more are the characteristics that the members within the taxon share(ii)	Order is the assemblage of genera which exhibit a few similar characters(iv)	Binomial nomenclature was introduced by Carolus Linnaeus",
        options: ["(i), (ii) and (iii)", "(ii), (iii) and (iv)", "(i) and (iv)", "(ii) and (iii)"],
        correct: "(ii) and (iii)",
    },
    {
        id: "38",
        question: "Which of the following statements are correct? (i) Genus comprises a group of related species. (ii)	Taxon represents a taxonomic group of individual organisms. (iii)	Family comprises a group of related genera. (iv)	Taxonomic category class includes related orders.",
        options: ["(i), (ii), and (iv)", "(ii) and (iv)", "(i), (iii) and (iv)", "(ii), (iii) and (iv)"],
        correct: "(i), (iii) and (iv)",
    },
    {
        id: "39",
        question: "Which of the following statement(s) is/are not correct ? (i)	Reproduction is the production of progeny possessing features dissimilar to their parents. (ii)	The fungi, the filamentous algae, the protonema  of mosses, all multiply by budding. (iii)	Many organisms like mules, sterile worker bees do not reproduce. (iv)	Reproduction is not an all-inclusive defining characteristic of living organisms. ",
        options: ["Only (i)", "Both (i) and (ii)", "Both (ii) and (iv)", "All of these"],
        correct: "Both (i) and (ii)",
    },
    {
        id: "40",
        question: ". Which of the following statement(s) is/are correct ? (i)	All living organisms have ability to respond the environment stimuli which could be physical, chemical or biological. (ii)	Plants respond to external factors like light, water, temperature, other organisms, pollutants, etc. (iii)	Photoperiod affects the process of reproduction.(iv)	Human being is the only organism who has self consciousness.",
        options: ["Only (i)", "Both (ii) and (iii)", "Both (i) and (iv)", "All of these"],
        correct: "All of these",
    },
    {
        id: "41",
        question: "Which of the following statement(s) is/are correct ? (i)	Classification is the providing of standardize names to the organisms such that a particular organism known by the same all over the world. (ii)	Taxonomy is the correct description of an organism and to recognition in its scientific name. The system of naming with two components(binomial nomenclature) is proposed by Carolus Linneaus. ) Zoological names are based on International Code for Zoological Nomenclature (ICZN). A. Only (i)",
        options: ["Only (i)", "(iii) and (iv)", "Only (iv)", "All of these"],
        correct: "(iii) and (iv)",
    },
    {
        id: "42",
        question: "Which of the following taxonomic categories is being described by the given statements(i-iii) ? (i) It is the basic unit of classification. It is defined as the group of individuals which resemble in their morphological and reproductive characters and interbreed among themselves and produce fertile off springs. Human beings belong to the species sapiens which is grouped in the genus Homo.",
        options: ["Species", "Genus", "Orde", "Family"],
        correct: "Species",
    },
    {
        id: "43",
        question: "Which of the following statement(s) is/are not correct ? (i)	Genus comprises a group of related species which has more characters in common in comparison to species of other genera. (ii)	Three different genera such as Solanum, Datura and Petunia are placed in the family malvaceae. ) In case of plants, classes with a few similar characters are assigned to a higher category called phylum.",
        options: ["Both (i) and (ii)", "Only (iii)", "Both (ii) and (iii)", "All of these"],
        correct: "Both (ii) and (iii)",
    },
    {
        id: "44",
        question: "Which of the following taxonomical aids is being described by the given statements(i-iv) ?(i)They generally established in educational institutes. (ii)	They have collections of preserved plant and animals specimens for study and reference. (iii)	Insects are preserved in boxes after collecting, killing and pinning. (iv)	They often have collections of skeletons of animals too. ",
        options: ["Herbarium", "Museum", "Zoological parks", "Botanical gardens"],
        correct: "Museum",
    },
    {
        id: "45",
        question: "Statement 1 : The species is reproductively isolated natural population. Statement 2 : Prokaryotes cannot be kept under differents species on the basis of reproductive isolation. ",
        options: ["Statement-1 and Statement-2 are True and statement-2 is a correct explanation forstatement-1", "Statement -1 and statement -2 are True and statement-2 is not a correct explanation forstatement-1", "Statement-1 is true and statement-2 is false", "Both the statements are false."], 
        correct: "Statement -1 and statement -2 are True and statement-2 is not a correct explanation forstatement-1",
    },
    {
        id: "46",
        question: "Which of the following statements regarding growth is incorrect?",
        options: ["In animals growth is seen up to a certain age", "Increase in body mass is considered as growth", "Growth by cell division occurs continuously throughout their life span in animals", "Increase in mass and number of individuals is the characteristic feature of animal growth"],
        correct: "Growth by cell division occurs continuously throughout their life span in animals",
    },
    {
        id: "47",
        question: "Select the correct statements(i-v) regarding taxonomic categories. (i)	Each step or rank in hierarchy is called taxonomic category. (ii)	Species is a group of individual organisms with fundamental similarities capable of breeding among themselves. (iii)	Taxonomic studies of all unknown organisms have led to the development of common categories like kingdom, phylum or division, class, order, family, genus and species. (iv)	Lower the category, greater is the difficulty of determining the relationship to other taxa at the same level.",
        options: ["(i) & (ii) only", "(ii) & (iv) only", "(i), (ii) & (iii) only", "All of the above"],
        correct: "(i) & (ii) only",
    },
    {
        id: "48",
        question: "Which of the following statements is incorrect?",
        options: ["The scientific name for humans is Homo sapiens", "Organisms placed in the same genus are least closely related",	"Moving from species to kingdom, more  different species are included in each higher category", "Species that are in the same genus share very specific characteristics"],
        correct: "Organisms placed in the same genus are least closely related",
    },
    {
        id: "49",
        question: "Study the following statements and select the correct description of botanical garden. (i)	Plant species are grown for identification purposes. (ii)	Labeling of each plant consists of its botanical name/scientific name and its family. (iii)	Specimens are preserved in the jars and containers. (iv)	It is a type of store house which contains dried, pressed and preserved plants specimens on sheet. (v)	Plant specimen contains a labeling of information about date and place of collection.",
        options: ["(i) and (ii) only", "(i), (ii) and (iii) only", "and (iv) only ", "All the five statements"],
        correct: "(i) and (ii) only",
    },

];

//Restart Quiz
restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});

//Next Button
nextBtn.addEventListener(
    "click",
    (displayNext = () => {
        //increment questionCount
        questionCount += 1;
        //if last question
        if (questionCount == quizArray.length) {
            //hide question container and display score
            displayContainer.classList.add("hide");
            scoreContainer.classList.remove("hide");
            //user score
            userScore.innerHTML =
                "Your score is " + scoreCount + " out of " + questionCount;
        } else {
            //display questionCount
            countOfQuestion.innerHTML =
                questionCount + 1 + " of " + quizArray.length + " Question";
            //display quiz
            quizDisplay(questionCount);
            count = 11;
            clearInterval(countdown);
            timerDisplay();
        }
    })
);

//Timer
const timerDisplay = () => {
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = `${count}s`;
        if (count == 0) {
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
};

//Display quiz
const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");
    //Hide other cards
    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    //display current question card
    quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator() {
    //randomly sort questions
    quizArray.sort(() => Math.random() - 0.5);
    //generate quiz
    for (let i of quizArray) {
        //randomly sort options
        i.options.sort(() => Math.random() - 0.5);
        //quiz card creation
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");
        //question number
        countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
        //question
        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);
        //options
        div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
        quizContainer.appendChild(div);
    }
}

//Checker Function to check if option is correct or not
function checker(userOption) {
    let userSolution = userOption.innerText;
    let question =
        document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");

    //if user clicked answer == correct option stored in object
    if (userSolution === quizArray[questionCount].correct) {
        userOption.classList.add("correct");
        scoreCount++;
    } else {
        userOption.classList.add("incorrect");
        //For marking the correct option
        options.forEach((element) => {
            if (element.innerText == quizArray[questionCount].correct) {
                element.classList.add("correct");
            }
        });
    }

    //clear interval(stop timer)
    clearInterval(countdown);
    //disable all options
    options.forEach((element) => {
        element.disabled = true;
    });
}

//initial setup
function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 11;
    clearInterval(countdown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
}

//when user click on start button
startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
});

//hide quiz and display start screen
window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
};