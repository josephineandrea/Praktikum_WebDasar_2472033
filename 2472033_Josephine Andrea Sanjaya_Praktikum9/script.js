function startQuiz() {
    let cond = true;
    let score = 0;
    let jumlahSoal = 0;
    while(cond == true) {
        let num1 = Math.floor(Math.random()*20) + 1;
        let num2 = Math.floor(Math.random()*20) + 1;
        let operatorIndex = Math.floor(Math.random()*3);

        if(operatorIndex==0){
            operator = "+"; 
        } 
        else if(operatorIndex==1){
            operator = "-";
        }
        else{
            operator = "*";
        }

        if(operator=="+"){
            keyAnswer = num1 + num2;
        } 
        else if(operator=="-"){
            keyAnswer = num1 - num2;
        }
        else{
            keyAnswer = num1 * num2;
        }

        answer = prompt("What is " + num1 + " " + operator + " " + num2 + "?");

        if((answer=="exit") || (answer==null)) {
            cond = false;
        }
        else if(answer==keyAnswer){
            alert("Correct!");
            score += 1;
            jumlahSoal += 1;
        }
        else{
            alert("Incorrect. The correct answer is " + keyAnswer);
            jumlahSoal += 1;
        }

    }
    
    let hasil = confirm("You got " + score + " out of " + jumlahSoal + " correct. Show results on page?");
    if(hasil==true) {
        let finalScore = document.getElementById("result");
        finalScore.innerHTML = "Final Score: " + score + "/" + jumlahSoal;
        finalScore.style.marginTop = "10px";
        finalScore.style.color = "grey";

        let timeNow = new Date().toLocaleString();
        let timeDesc = document.getElementById("datetime");
        timeDesc.innerHTML = "Finished at: " + timeNow;
        timeDesc.style.marginTop = "10px";
        timeDesc.style.color = "grey";
    }

}