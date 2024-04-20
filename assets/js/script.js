// wait for the DOM to finish loading before running the quiz
document.addEventListener("DOMContentLoaded", function() {

    //generate a random number to choose the current idiom from the array
    let currentIdiomIndex = Math.floor(Math.random() * idiomsArray.length);

    //start question count at 0
    let currentQuestionIndex = 0;
    let score = 0;

    // define quiz variables
    const idiomElement = document.getElementById("idiom");
    const optionButtonA = document.getElementById("option-btn-a");
    const optionButtonB = document.getElementById("option-btn-b");
    const optionButtonC = document.getElementById("option-btn-c");
    const rightWrongElement = document.getElementById("right-or-wrong");
    const scoreElement = document.getElementById("score");
    
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
       
    function checkAnswer(selectedAnswer) {
        if (idiomsArray[currentIdiomIndex].answer === selectedAnswer) {
          rightWrongElement.innerHTML = "You got it right!";
          score++;
          scoreElement.innerText = `Your score is: ${score} out of 10`;
        } else {
          rightWrongElement.innerHTML = "You got it wrong!";
          scoreElement.innerText = `Your score is: ${score} out of 10`;
        }
        optionButtonA.disabled = true;
        optionButtonB.disabled = true;
        optionButtonC.disabled = true;
    }
    
    function endOfQuiz() {
      // Display end of quiz message
      document.getElementById("right-or-wrong").innerHTML = "That's the end of the quiz";
      // Hide and disable next btn 
      document.getElementById("next-btn").classList.add("hidden");
      document.getElementById("next-btn").disabled = true;
      // Show start-new-quiz button and add event listener
      document.getElementById("new-quiz-btn").classList.remove("hidden");
      document.getElementById("new-quiz-btn").disabled = false;
      document.getElementById("new-quiz-btn").addEventListener("click", startNewQuiz);
      // Remove existing event listeners from option buttons
      optionButtonA.removeEventListener("click", optionAClickHandler);
      optionButtonB.removeEventListener("click", optionBClickHandler);
      optionButtonC.removeEventListener("click", optionCClickHandler);
    }
       
    function startNewQuiz() {
      // Reset quiz variables
      currentQuestionIndex = 0;
      score = 0;
      console.log("hi");
      // Remove end of quiz message
      document.getElementById("right-or-wrong").innerHTML = "";
      // Reset displayed score
      scoreElement.innerText = `Your score is: ${score} out of 10`;
      // Show and enable next idiom button and hide and 
      document.getElementById("next-btn").classList.remove("hidden");
      document.getElementById("next-btn").disabled = false;
      // Hide and disable start-new-quiz button
      document.getElementById("new-quiz-btn").classList.add("hidden");
      document.getElementById("new-quiz-btn").disabled = true;
      // Add event listener to next idiom button
      document.getElementById("next-btn").addEventListener("click", displayNextIdiom);
      // Restart the quiz
      runQuiz();
    }
    
    
    function displayCurrentIdiom() {
        // Display current idiom from idiomsArray
        idiomElement.innerHTML = idiomsArray[currentIdiomIndex].idiom;
        // Display meanings options
        optionButtonA.innerHTML = idiomsArray[currentIdiomIndex].meanings[0];
        optionButtonB.innerHTML = idiomsArray[currentIdiomIndex].meanings[1];
        optionButtonC.innerHTML = idiomsArray[currentIdiomIndex].meanings[2];
    }
    
    function displayNextIdiom() {
      // Re-enable option buttons
        optionButtonA.disabled = false;
        optionButtonB.disabled = false;
        optionButtonC.disabled = false;
      // Clear inner HTML content of "right-or-wrong" element
      document.getElementById("right-or-wrong").innerHTML = "";
      // Increase the question index
      currentQuestionIndex++;
      // Check to see if 5 questions have been asked, and if so, run endOfQuiz
      if (currentQuestionIndex===5) {
          endOfQuiz();
      } else {
      // Generate a new random number to choose the current idiom from the array
      currentIdiomIndex = Math.floor(Math.random() * idiomsArray.length);
      // Display the new idiom
      displayCurrentIdiom();
      }
    } 
    
    function runQuiz() {
      currentQuestionIndex = 0;
      displayCurrentIdiom();
      // Remove existing event listeners from option buttons
      optionButtonA.removeEventListener("click", optionAClickHandler);
      optionButtonB.removeEventListener("click", optionBClickHandler);
      optionButtonC.removeEventListener("click", optionCClickHandler);
      // Add event listeners to option buttons
      optionButtonA.addEventListener("click", optionAClickHandler);
      optionButtonB.addEventListener("click", optionBClickHandler);
      optionButtonC.addEventListener("click", optionCClickHandler);
      // Add event listener to next button
      document.getElementById("next-btn").addEventListener("click", displayNextIdiom);
      displayNextIdiom();
    }
    
    runQuiz()
        
    })
