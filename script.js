
let sbtBtn = document.getElementById('sbt-btn');
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let number = document.getElementById("number");
let mail = document.getElementById("mail");
let message = document.getElementById("message");
sbtBtn.addEventListener("click" , () =>{
    if(fname.value.trim() === "") {
        alert("Please fill first name");
    }
    if(lname.value.trim() === "") {
        alert("Please fill the last name");
    }
    if(number.value.trim() === "") {
        alert("Please fill the number");
    }
    if(mail.value.trim() === "") {
        alert("Please fill the mail");
    }
    if(message.value.trim() === "") {
        alert("Please fill the message");
    }
});

let btn =  document.querySelector(".btn");
window.onscroll = function () {
    scrollingFunc()
}

function scrollingFunc() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
    }
    else {
        btn.style.display = "none";
    }
}

// let btn =  document.querySelector(".btn");
btn.addEventListener("click", () =>{
        document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth",
    });
})



