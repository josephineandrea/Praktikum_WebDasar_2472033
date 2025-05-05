function colorG() {
    let color = "#";
    for(let i=0;i<6;i++) {
        let digit = Math.floor(Math.random()*16);
        if(digit==0){
            color += digit;
        } 
        else if(digit==1){
            color += digit;
        }
        else if(digit==2){
            color += digit;
        }
        else if(digit==3){
            color += digit;
        }
        else if(digit==4){
            color += digit;
        }
        else if(digit==5){
            color += digit;
        }
        else if(digit==6){
            color += digit;
        }
        else if(digit==7){
            color += digit;
        }
        else if(digit==8){
            color += digit;
        }
        else if(digit==9){
            color += digit;
        }
        else if(digit==10){
            color += "A";
        }
        else if(digit==11){
            color += "B";
        }
        else if(digit==12){
            color += "C";
        }
        else if(digit==13){
            color += "D";
        }
        else if(digit==14){
            color += "E";
        }
        else if(digit==15){
            color += "F";
        }
    }
    let latar = document.getElementById("cGenerator");
    latar.style.background = color;
    let text = document.getElementById("hex");
    text.innerHTML = color;
    text.style.marginTop = "10px";
    text.style.fontWeight = "bold";
}
