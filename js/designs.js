class Cat {
    constructor(name) {
        this.name = name
        this.counter = 0
    }
}

//To create a new cat, declare a new Cat here and add to arrayOfCats. Be sure image is exactly named "Catname".png
let Takumi = new Cat("Takumi");
let Elise = new Cat("Elise");
let Garon = new Cat("Garon");
let Melty = new Cat("Melty");
let Felicia = new Cat("Felicia");

let arrayOfCats = [Takumi, Elise, Garon, Melty, Felicia];


let createDOMcat = (function () {
    for (let a = 0; a < arrayOfCats.length; a++) {
        let currentcat = arrayOfCats[a];
        
        //Adds DOM elements for the cat name, portrait, and click counter and event listeners to count clicks
        $("#total").append(`<div id=${currentcat.name}container class="inactive">
                <p>${currentcat.name}</p>
                <img id="${currentcat.name}" class="portrait" src="img/${currentcat.name}.png">
                <div id="${currentcat.name}counter">0 clicks</div>
            </div>`);
        $(`#${currentcat.name}`).click(function () {
            currentcat.counter++;
            $(`#${currentcat.name}counter`).empty().append(`${currentcat.counter} clicks`);
        })
        
        //Adds DOM elements for sidebar list and event listeners to display/hide cats
        $("#list").append(`<p id = "${currentcat.name}list">${currentcat.name}</p>`);
        $(`#${currentcat.name}list`).click(function () {
            for (let b = 0; b < arrayOfCats.length; b++) {
                //Hides all cats on click
                $(`#${arrayOfCats[b].name}container`).addClass("inactive");
                $(`#${arrayOfCats[b].name}container`).removeClass("active");
            }
            //Shows just the one that was clicked
            $(`#${currentcat.name}container`).addClass("active");
            $(`#${currentcat.name}container`).removeClass("inactive");
            $("#start").addClass("inactive");
        })
    }
})();
