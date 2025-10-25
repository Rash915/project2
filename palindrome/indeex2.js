      function checkPalindrome() {
            let word = document.getElementById("word").value;
            let reversed = word.split("").reverse().join("");
            if (word === reversed) {
                alert("It is a palindrome!");
            } else {
                alert("Not a palindrome.");
            }
            word.value=""
      }