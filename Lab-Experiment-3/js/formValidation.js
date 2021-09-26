function formValidation() {

    // Store the values of the form inputs
    const values = [
        document.forms["myForm"]["tagline"].value,
        document.forms["myForm"]["color"].value,
        document.forms["myForm"]["size"].value,
        document.forms["myForm"]["quantity"].value,
        document.forms["myForm"]["name"].value,
        document.forms["myForm"]["number"].value,
        document.forms["myForm"]["address"].value,
        document.forms["myForm"]["pay"].value,
    ];

    // Validate the user name input
    var lettersName = /^[A-Za-z]+$/;
    if(!values[4].match(lettersName))
    {
        alert('Name must have alphabet characters only');
        values[4].focus();
        return;
    }

    // Validate the user address input
    var lettersAddr = /^[0-9a-zA-Z]+$/;
    if(!values[6].match(lettersAddr))
    {
        alert('Address must have alphanumeric characters only');
        values[6].focus();
        return;
    }

    // Validate the size dropdown list
    if(values[2] == "default")
    {
        alert('Select your size from the list');
        ucountry.focus();
        return;
    }

    // Validate the quantity dropdown list
    if(values[3] == "default")
    {
        alert('Select your quantity from the list');
        ucountry.focus();
        return;
    }

    // Validate the user phone number input
    var phoneno = /^\d{10}$/;
    if(!values[5].match(phoneno))
    {
        alert('Phone number must have 10 digits only');
        values[5].focus();
        return;
    }

    // Validate the user order date input
    todaysDate = new Date();
    var inputDate = new Date(document.forms["myForm"]["orderdate"].value);
    if (inputDate < todaysDate)
    {
        alert('Order date cannot be behind todays date');
        values[8].focus();
        return;
    }

    // Check whether the form inputs are empty or not
    const hasEmptyFields = Object.values(values).some(
        (element) => element === ""
    );

    if (hasEmptyFields) {
        alert("Please fill in all fields");
        return;
    }

    // Make form inputs empty if form is not submitted
    document.getElementById("tagline").value = "";
    var ele = document.getElementsByName("color");
    for (var i = 0; i < ele.length; i++) ele[i].checked = false;
    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
    document.getElementById("address").value = "";
    var ele = document.getElementsByName("pay");
    for (var i = 0; i < ele.length; i++) ele[i].checked = false;

    // Store the form inputs values for the final receipt
    const receipt = {
        tagline: values[0],
        color: values[1],
        size: values[2],
        quantity: values[3],
        name: values[4],
        number: values[5],
        address: values[6],
        payment: values[7],
    };

    // Print the receipt
    const receipt_formatted = `Thank you for shopping!\nHere's your receipt:\nTagline: ${values[0]}\nColor: ${values[1]}\nSize: ${values[2]}\nQuantity: ${values[3]}\nName: ${values[4]}\nPhone Number: ${values[5]}\nAddress: ${values[6]}\nPayment Method: ${values[7]}\n\nDate of receipt: ${todaysDate}`;

    alert(receipt_formatted);
}

const form = document.getElementById("shirt_cart");

form.addEventListener("submit", (event) => {
    event.preventDefault();
});