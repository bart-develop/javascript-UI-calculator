let displ = document.getElementsByClassName("displ")[0];
const signs = [2, 6, 10, 14, 15];
const signs_2 = ["+", "-", "*", "÷", ".", " "];

// w tym przypadku .innerHTML <=> .texContent
// komentarze wewnątrz tagu są zawartością .innerHTML

function display(index){
    if(displ.textContent === "0"){
        if(signs.includes(index)){
       
        }
        else{
            displ.innerHTML = "";
        }
    }
    
    var button_content = document.getElementsByClassName("button")[index].innerHTML;

    if(displ.innerHTML.length > 24) {
        button_content ="";
    }
    //if(((signs_2.includes(displ.innerHTML.slice(-1))) || (signs_2.includes(displ.innerHTML.slice(-2, -1)))) && (signs.includes(index))){
    if(((signs_2.includes(displ.innerHTML.slice(-1))) || (signs_2.includes(displ.innerHTML.slice(-1)))) && (signs.includes(index))){
        button_content = "";
        
    }
    displ.innerHTML += button_content;
}

document.getElementsByClassName("button")[17].onclick = function answer(){
    let ans = displ.textContent.replace("÷", "/");
    let answer = eval(ans);
    answer *= 10000000000;
    answer = Math.round(answer);
    answer /= 10000000000;
    if(Number.isNaN(answer) || answer == Infinity){
        displ.innerHTML = "No debil no";
    }
    else{displ.textContent = answer;}
}

document.getElementsByClassName("button")[0].onclick = clear = () => {          //arrow function in use
    displ.innerHTML = "0";
}


document.getElementsByClassName("button")[1].onclick = function del(){
    if(displ.innerHTML.length < 2 || displ.innerHTML == "No debil no")
        /*displ.innerHTML = "0";*/ clear();
    if(displ.innerHTML.slice(-1) == " "){
        displ.innerHTML = displ.textContent.slice(0, -3);
    }
    else if(displ.innerHTML !== "0"){
        displ.innerHTML = displ.textContent.slice(0, -1);
    } 
}

