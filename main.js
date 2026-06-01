console.log("Welcome to the Community Portal");

window.onload = function () {
    alert("Page Loaded Successfully");

    let saved =
    localStorage.getItem("event");

    if(saved){
        document.getElementById("eventType").value = saved;
    }

    displayEvents();
};

const eventName = "Music Event";
const eventDate = "2025-06-10";

let seats = 50;

let eventInfo =
`${eventName} on ${eventDate}`;

console.log(eventInfo);

seats--;

const events = [
    {
        name:"Music Event",
        category:"Music",
        seats:10,
        date:"2026-06-01"
    },

    {
        name:"Art Workshop",
        category:"Art",
        seats:0,
        date:"2024-01-01"
    },

    {
        name:"Baking Workshop",
        category:"Workshop",
        seats:15,
        date:"2026-08-01"
    }
];

events.forEach(event => {

    if(event.seats > 0){

        console.log(event.name);
    }
});

function addEvent(event){

    events.push(event);
}

function registerUser(eventName){

    try{

        let event =
        events.find(e => e.name === eventName);

        if(!event){
            throw "Event not found";
        }

        if(event.seats <= 0){
            throw "No seats available";
        }

        event.seats--;

        alert("Registration Successful");

        displayEvents();

    }catch(error){

        console.log(error);
    }
}

function filterEventsByCategory(category, callback){

    let filtered =
    events.filter(event => event.category === category);

    callback(filtered);
}

function registrationTracker(){

    let count = 0;

    return function(){

        count++;

        return count;
    };
}

const trackMusicRegistration =
registrationTracker();

class Event{

    constructor(name, seats){

        this.name = name;
        this.seats = seats;
    }
}

Event.prototype.checkAvailability =
function(){

    return this.seats > 0;
};

const sampleEvent =
new Event("Dance Event", 20);

console.log(sampleEvent.checkAvailability());

console.log(Object.entries(sampleEvent));

const musicEvents =
events.filter(event => event.category === "Music");

console.log(musicEvents);

const formatted =
events.map(event =>
`Workshop on ${event.name}`);

console.log(formatted);

function displayEvents(){

    let container =
    document.querySelector("#events");

    container.innerHTML = "";

    events.forEach(event => {

        if(event.seats > 0){

            let card =
            document.createElement("div");

            card.className = "eventCard";

            card.innerHTML = `
                <h3>${event.name}</h3>
                <p>Category: ${event.category}</p>
                <p>Seats: ${event.seats}</p>

                <button onclick=
                "registerUser('${event.name}')">
                Register
                </button>
            `;

            container.appendChild(card);
        }
    });
}

function validatePhone(){

    let phone =
    document.getElementById("phone").value;

    if(phone.length < 10){

        alert("Invalid Phone Number");
    }
}

function showFee(value){

    document.getElementById("fee").innerHTML =
    "Fee : " + value;
}

function submitForm(){

    document.getElementById("msg").innerHTML =
    "Registration Successful";

    alert("Submitted");
}

function enlarge(img){

    img.style.width = "300px";
}

function countChar(){

    let text =
    document.getElementById("feedback").value;

    document.getElementById("count").innerHTML =
    text.length;
}

function videoReady(){

    document.getElementById("videoMsg").innerHTML =
    "Video ready to play";
}

function warningMessage(){

    return "Form not completed";
}

function savePreference(){

    let value =
    document.getElementById("eventType").value;

    localStorage.setItem("event", value);

    sessionStorage.setItem("user","guest");
}

function clearData(){

    localStorage.clear();
    sessionStorage.clear();
}

function findLocation(){

    navigator.geolocation.getCurrentPosition(
        success,
        error,
        {
            enableHighAccuracy:true,
            timeout:5000
        }
    );
}

function success(position){

    document.getElementById("location").innerHTML =
    "Latitude : " +
    position.coords.latitude +
    "<br>Longitude : " +
    position.coords.longitude;
}

function error(){

    alert("Location access denied");
}

async function fetchEvents(){

    let loading =
    document.getElementById("loading");

    loading.innerHTML = "Loading...";

    try{

        let response =
        await fetch(
        "https://jsonplaceholder.typicode.com/posts"
        );

        let data =
        await response.json();

        console.log(data);

        loading.innerHTML =
        "Events Loaded";

    }catch(error){

        loading.innerHTML =
        "Failed to Load";
    }
}

fetch(
"https://jsonplaceholder.typicode.com/posts",
{
    method:"POST",

    body:JSON.stringify({
        name:"User"
    }),

    headers:{
        "Content-type":
        "application/json"
    }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));

setTimeout(() => {

    console.log("Delayed Response");

},2000);

function validateForm(event){

    event.preventDefault();

    let form =
    document.getElementById("registerForm");

    let name =
    form.elements["username"].value;

    let email =
    form.elements["email"].value;

    let selectedEvent =
    form.elements["event"].value;

    if(name === "" ||
       email === "" ||
       selectedEvent === ""){

        document.getElementById("formError")
        .innerHTML =
        "All fields are required";

        return;
    }

    document.getElementById("formError")
    .innerHTML = "";

    alert("Form Submitted");
}

document.addEventListener(
"keydown",
function(event){

    console.log(event.key);
});

const copiedEvents =
[...events];

console.log(copiedEvents);
