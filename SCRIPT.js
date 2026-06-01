function showMessage(){
    alert("Thank you for choosing Royal Feast");
}

document.getElementById("reservationForm")
.addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let people = document.getElementById("people").value;

    if(name === "" || email === "" || people === ""){

        alert("Please fill all fields!");

    }

    else{

        alert("Table Reserved Successfully 🍽️");

    }

});
let images = [
    "PIZZA.JPG",
    "BURGER.JPG",
    "PASTA.JPG"
];

let index = 0;

function nextImage(){
    index++;
    if(index >= images.length){
        index = 0;
    }
    document.getElementById("slider").src = images[index];
}

function previousImage(){
    index--;
    if(index < 0){
        index = images.length - 1;
    }

    document.getElementById("slider").src = images[index];
}

async function getJoke(){
    let response = await fetch(
        "https://v2.jokeapi.dev/joke/Any?type=single"
    );
    let data = await response.json();
    document.getElementById("joke").innerText =
    data.joke;
}