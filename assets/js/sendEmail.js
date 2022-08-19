
console.log("Hello from send Email!");
function sendMail(contactForm){
    emailjs.send("service_jdj2x9p", "rosie_zqn5tmi", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response){
            console.log("SUCCESS", response);
        },
        function(error){
            console.log("FAILED", error);
        }
    );
    return false;
}