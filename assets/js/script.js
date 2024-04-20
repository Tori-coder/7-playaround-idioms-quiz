// wait for the DOM to finish loading before running the quiz
document.addEventListener("DOMContentLoaded", function() {

    //generate a random number to choose the current idiom from the array
    let currentIdiomIndex = Math.floor(Math.random() * idiomsArray.length);
    let currentQuestionIndex = 0;
    let score = 0;
    
    // Define click handler function for each option button
    function optionAClickHandler() {
      checkAnswer(idiomsArray[currentIdiomIndex].meanings[0]);
      }
      function optionBClickHandler() {
      checkAnswer(idiomsArray[currentIdiomIndex].meanings[1]);
      }
      function optionCClickHandler() {
      checkAnswer(idiomsArray[currentIdiomIndex].meanings[2]);
    }
    
    // display current idiom
    function displayCurrentIdiom() {
        // set quiz variables with reference to HTML
        const idiomElement = document.getElementById("idiom");
        const optionButtonA = document.getElementById("option-btn-a");
        const optionButtonB = document.getElementById("option-btn-b");
        const optionButtonC = document.getElementById("option-btn-c");
        //display current idiom from idiomsArray
        idiomElement.innerHTML = idiomsArray[currentIdiomIndex].idiom;
        //display meanings options
        optionButtonA.innerHTML = idiomsArray[currentIdiomIndex].meanings[0];
        optionButtonB.innerHTML = idiomsArray[currentIdiomIndex].meanings[1];
        optionButtonC.innerHTML = idiomsArray[currentIdiomIndex].meanings[2];
    }    
        
    function checkAnswer(selectedAnswer) {
        const rightWrongElement = document.getElementById("right-or-wrong");
        const scoreElement = document.getElementById("score");
    
        if (idiomsArray[currentIdiomIndex].answer === selectedAnswer) {
          rightWrongElement.innerHTML = "You got it right!";
          score++;
          scoreElement.innerText = `Your score is: ${score} out of 10`;
        } else {
          rightWrongElement.innerHTML = "You got it wrong!";
          scoreElement.innerText = `Your score is: ${score} out of 10`;
        }
    }
    
    function endOfQuiz() {
      //Display end of quiz message
      document.getElementById("right-or-wrong").innerHTML = "That's the end of the quiz";
      //hide new-quiz btn and show start new quiz button
      document.getElementById("next-btn").classList.add("hidden");
      document.getElementById("new-quiz-btn").classList.remove("hidden");
      // add event listener to start new quiz button
      document.getElementById("new-quiz-btn").addEventListener("click", startNewQuiz);
      // Remove existing event listeners from option buttons
      document.getElementById("option-btn-a").removeEventListener("click", optionAClickHandler);
      document.getElementById("option-btn-b").removeEventListener("click", optionBClickHandler);
      document.getElementById("option-btn-c").removeEventListener("click", optionCClickHandler);
    }
    
    function displayNextIdiom() {
      // Clear the inner HTML content of "right-or-wrong" element
      document.getElementById("right-or-wrong").innerHTML = "";
      //increase the question index
      currentQuestionIndex++;
      //check to see if 5 questions have been asked, and if so, run endOfQuiz
      if (currentQuestionIndex===5) {
          endOfQuiz();
      } else {
      //generate a new random number to choose the current idiom from the array
      currentIdiomIndex = Math.floor(Math.random() * idiomsArray.length);
      //display the new idiom
      displayCurrentIdiom();
      }
    }
    
    function startNewQuiz() {
      // Reset quiz variables
      currentQuestionIndex = 0;
      score = 0;
      // Remove end of quiz message
      document.getElementById("right-or-wrong").innerHTML = "";
      // Reset displayed score
      scoreElement.innerText = `Your score is: ${score} out of 10`;
      // Show next idiom button and hide start-new-quiz button
      document.getElementById("next-btn").classList.remove("hidden");
      document.getElementById("new-quiz-btn").classList.add("hidden");
      // Remove event listener from start new quiz button
      document.getElementById("new-quiz-btn").removeEventListener("click", startNewQuiz);
      // Remove event listener from next idiom button
      document.getElementById("next-btn").removeEventListener("click", displayNextIdiom);
      // Add event listener to next idiom button
      document.getElementById("next-btn").addEventListener("click", displayNextIdiom);
      // Restart the quiz
      runQuiz();
    }
        
    function runQuiz() {
      let currentQuestionIndex = 0;
      displayCurrentIdiom();
      // Remove existing event listeners from option buttons
      document.getElementById("option-btn-a").removeEventListener("click", optionAClickHandler);
      document.getElementById("option-btn-b").removeEventListener("click", optionBClickHandler);
      document.getElementById("option-btn-c").removeEventListener("click", optionCClickHandler);
      // Add event listeners to option buttons
      document.getElementById("option-btn-a").addEventListener("click", optionAClickHandler);
      document.getElementById("option-btn-b").addEventListener("click", optionBClickHandler);
      document.getElementById("option-btn-c").addEventListener("click", optionCClickHandler);
      // Add event listener to next button
      document.getElementById("next-btn").addEventListener("click", displayNextIdiom);
      displayNextIdiom();
    }
    runQuiz()
        
    })