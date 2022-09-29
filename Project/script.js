window.onload = function () {
  let alphabet = [
    "а", "б", "в", "г", "д", "е", "ё", "ж", "з", "и", "й", 
    "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", 
    "х", "ц", "ч", "ш", "щ", "ъ", "ы", "ь", "э", "ю", "я",
  ];

  let categories; // Array of topics
  let chosenCategory; // Selected catagory
  let word; // Selected word
  let guess; // Geuss
  let geusses = []; // Stored geusses
  let lives = 7; // Lives
  let counter; // Count correct geusses
  let space; // Number of spaces in word '-'
  let letters; //Create ul alphabet
  let correct; // Create ul correct letter

  // Get elements
  let showLives = document.getElementById("mylives");
  let showClue = document.getElementById("clue");
  let myButtons = document.getElementById("buttons");

  let rope = document.getElementById("rope");
  let body = document.getElementById("body");
  let left_arm = document.getElementById("left_arm");
  let right_arm = document.getElementById("right_arm");
  let left_leg = document.getElementById("left_leg");
  let right_leg = document.getElementById("right_leg");
  let head = document.getElementById("head");

  let hangman = [rope, body, left_arm, right_arm, left_leg, right_leg, head];

  // create alphabet ul
  let buttons = function () {
    letters = document.createElement("ul");

    for (let i = 0; i < alphabet.length; i++) {
      letters.id = "alphabet";
      list = document.createElement("li");
      list.id = "letter";
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  };

  // choose category
  let selectCat = function () {
    if (chosenCategory === categories[0]) {
      catagoryName.innerHTML = "Категория: деревья";
    } else if (chosenCategory === categories[1]) {
      catagoryName.innerHTML = "Категория: фильмы";
    } else if (chosenCategory === categories[2]) {
      catagoryName.innerHTML = "Категория: города";
    }
  };

  // Hints ul
  result = function () {
    let wordHolder = document.getElementById("hold");
    correct = document.createElement("ul");

    for (let i = 0; i < word.length; i++) {
      correct.setAttribute("id", "my-word");
      guess = document.createElement("li");
      guess.setAttribute("class", "guess");
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      geusses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  };

  // Show lives
  comments = function () {
    showLives.innerHTML = "Осталось " + lives + " жизней";
    if (lives < 1) {
      showLives.innerHTML = "Вы проиграли!";

    // letters.disabled = true;
    // letters.addEventListener('click', disableButton);
    // document.getElementById("buttons").disabled = true; 
    let letterButton = document.getElementById("alphabet");
    letterButton.classList.add("disabledButton");
    }
    for (let i = 0; i < geusses.length; i++) {
      if (counter + space === geusses.length) {
        showLives.innerHTML = "Вы выиграли!";
      }
    }
  };

  // OnClick Function
  check = function () {
    list.onclick = function () {
      let geuss = this.innerHTML;
      this.setAttribute("class", "active");
      this.onclick = null;
      for (let i = 0; i < word.length; i++) {
        if (word[i] === geuss) {
          geusses[i].innerHTML = geuss;
          counter += 1;
        }
      }
      let j = word.indexOf(geuss);
      if (j === -1) {
        lives -= 1;
        comments();

        switch (lives) {
          case 6:
            rope.classList.remove("hide");
            break;
          case 5:
            head.classList.remove("hide");
            break;
          case 4:
            body.classList.remove("hide");
            break;
          case 3:
            left_arm.classList.remove("hide");
            break;
          case 2:
            right_arm.classList.remove("hide");
            break;
          case 1:
            left_leg.classList.remove("hide");
            break;
          case 0:
            right_leg.classList.remove("hide");
        }
      } else {
        comments();
      }
    };
  };

  // Play
  play = function () {
    categories = [
      ["тополь", "кипарис", "яблоня", "клён", "бук", "черешня", "каштан"],
      ["чужой", "козырные-тузы", "титаник", "зелёная-миля", "хатико"],
      ["днепр", "житомир", "львов", "одесса", "тернополь"],
    ];

    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    counter = 0;
    space = 0;
    result();
    comments();
    selectCat();
  };

  play();

  // Hint

  hint.onclick = function () {
    hints = [
      [
        "жара, июль",
        "вечнозелёное",
        "перед её плодом не устоял Адам",
        "канадцы очень любят сироп из его сока",
        "самоходный зенитный ракетный комплекс",
        "на ней ростут сладкие бордовые ягоды",
        "цветущий символ Киева",
      ],
      [
        "ужастик Ридли Скотта",
        "прозвище Бадди Израэла из боевика о наемных убийцах",
        "повесть о том, как Кейт утопила Лео",
        "драма по роману Стивена Кинга с Томом Хэнксом в главной роли",
        "собака-ждун",
      ],
      [
        "город в центре Украины",
        "печатают бумагу для банкнот всей Европы",
        "западный царь зверей",
        "жемчужина Украины",
        "файне місто",
      ],
    ];

    let catagoryIndex = categories.indexOf(chosenCategory);
    let hintIndex = chosenCategory.indexOf(word);
    showClue.innerHTML = "Подсказка: " + hints[catagoryIndex][hintIndex];
  };

  // Reset

  document.getElementById("reset").onclick = function () {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    showClue.innerHTML = "";
    play();
    lives = 7;

    for (let z = 0; z < hangman.length; z++) {
      hangman[z].classList.add("hide");
    }
    let letterButton = document.getElementById("alphabet");
    letterButton.classList.remove("disabledButton");
  };
};
