var currentConversionType = "morseToText";

function convert() {
  var inputText = document.getElementById("inputText").value.trim();
  var outputText = document.getElementById("outputText");

  if (currentConversionType === "morseToText") {
    // Morse to Text
    outputText.value = morseToText(inputText);
  } else {
    // Text to Morse
    outputText.value = textToMorse(inputText.toUpperCase());
  }
}

function updateButtonText() {
  var convertButton = document.querySelector("button");
  convertButton.innerHTML = "Convert";
}

function updatePlaceholder() {
  var inputText = document.getElementById("inputText");
  inputText.placeholder = currentConversionType === "morseToText" ? "Enter Morse code" : "Enter text";
}

function changeConversion() {
  var conversionTypeRadios = document.getElementsByName("conversionType");

  for (var i = 0; i < conversionTypeRadios.length; i++) {
    if (conversionTypeRadios[i].checked) {
      currentConversionType = conversionTypeRadios[i].value;
      break;
    }
  }

  updateButtonText();
  updatePlaceholder();
}

function textToMorse(text) {
  var morseCode = "";
  for (var i = 0; i < text.length; i++) {
    var char = text[i];
    if (char === " ") {
      morseCode += "/ ";
    } else {
      morseCode += charToMorse(char) + " ";
    }
  }
  return morseCode.trim();
}

function charToMorse(char) {
  var morseCode = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
    'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
    'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..',
    '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...',
    '8': '---..', '9': '----.', '0': '-----'
  };
  return morseCode[char];
}

function morseToText(morse) {
  var morseCode = {
    '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E', '..-.': 'F', '--.': 'G', '....': 'H',
    '..': 'I', '.---': 'J', '-.-': 'K', '.-..': 'L', '--': 'M', '-.': 'N', '---': 'O', '.--.': 'P',
    '--.-': 'Q', '.-.': 'R', '...': 'S', '-': 'T', '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X',
    '-.--': 'Y', '--..': 'Z',
    '.----': '1', '..---': '2', '...--': '3', '....-': '4', '.....': '5', '-....': '6', '--...': '7',
    '---..': '8', '----.': '9', '-----': '0'
  };

  var words = morse.split("   ");
  var result = "";

  for (var i = 0; i < words.length; i++) {
    var letters = words[i].split(" ");
    for (var j = 0; j < letters.length; j++) {
      if (letters[j] === "/") {
        result += " ";
      } else {
        result += morseCode[letters[j]];
      }
    }
    if (i < words.length - 1) {
      result += " ";
    }
  }

  return result;
}

document.addEventListener("DOMContentLoaded", function () {
  var indexMenu = document.getElementById("indexMenu");
  var sideIndex = document.querySelector(".side-index");
  var closeBtn = document.querySelector(".close-btn");

  // Toggle side-index when clicking Index menu
  indexMenu.addEventListener("click", function () {
    sideIndex.style.right = sideIndex.style.right === "0%" ? "-100%" : "0%";
  });

  // Close side-index when clicking close button
  closeBtn.addEventListener("click", function () {
    sideIndex.style.right = "-100%";
  });
});


// Set initial button text and placeholder
updateButtonText();
updatePlaceholder();
