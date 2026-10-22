document.getElementById("form").onsubmit = function(e) {
    e.preventDefault();

    let n = document.getElementById("name").value.trim();
    let em = document.getElementById("email").value.trim();
    let ev = document.getElementById("event").value.trim();
    let msg = document.getElementById("msg");

    if (n === "" || em === "" || ev === "") {
        msg.innerText = "Please fill all fields";
    } else if (!em.includes("@") || !em.includes(".")) {
        msg.innerText = "Enter a valid email";
    } else {
        msg.innerText =
             "Student Added Successfully! " + n + " - " + ev;
    }
};

document.getElementById("form").onreset = function() {
    document.getElementById("msg").innerText = "";
};


