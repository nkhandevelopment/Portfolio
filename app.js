(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

const inputs = document.querySelectorAll('.input-control')

inputs.forEach(input => {
    input.innerHTML = input.innerText
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)

})

function sendEmail() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
  
    if (name.trim() === "" || email.trim() === "" || subject.trim() === "" || message.trim() === "") {
      alert("Please fill in all required fields.");
      return;
    }
  
    // Continue with sending the email
    Email.send({
      secureToken: "5d735781-342c-47a3-926e-85020f715f8e",
      To: 'naimkhan12335@gmail.com',
      From: email,
      Subject: "New Contact Form Enquiry",
      Body:
        "Name: " + name +
        "<br> Email: " + email +
        "<br> Subject: " + subject +
        "<br> Message: " + message
    }).then(
      message => {
        alert("Message Sent Successfully");
        resetForm();
      }
    );
  }
  