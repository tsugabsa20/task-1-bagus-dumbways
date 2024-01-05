function submitForm() {
    event.preventDefault()

        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const phoneNumber = document.getElementById("phoneNumber").value
        const subject = document.getElementById("subject").value
        const yourMessage = document.getElementById("yourMessage").value

        
        if (name="") {
            return alert("Name must be filled")
        } else if ("email") {
            return alert("Email must be filled")
        } else if ("phoneNumber") {
            return alert("Phone Number must be filled")
        } else if ("subject") {
            return alert("Subject must be filled")
        } else if ("yourMessage") {
            return alert("Message must be filled")
        }
        
        
        console.log(name, email, phoneNumber,subject, yourMessage)


}