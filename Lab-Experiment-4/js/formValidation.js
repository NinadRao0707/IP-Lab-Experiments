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
    var lettersName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if(!values[4].match(lettersName))
    {
        alert('Name must have alphabets only');
        values[4].focus();
        return;
    }

    // Validate the size dropdown list
    if(values[2] == "default")
    {
        alert('Select your size from the list');
        values[2].focus();
        return;
    }

    // Validate the quantity dropdown list
    if(values[3] == "default")
    {
        alert('Select your quantity from the list');
        values[3].focus();
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

    document.getElementById("tagline").value = "";
    var ele = document.getElementsByName("color");
    for (var i = 0; i < ele.length; i++) ele[i].checked = false;
    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
    document.getElementById("address").value = "";
    var ele = document.getElementsByName("pay");
    for (var i = 0; i < ele.length; i++) ele[i].checked = false;

    // Print the receipt
    const receipt_formatted = `Here's your receipt:\n\nTagline: ${values[0]}\nColor: ${values[1]}\nSize: ${values[2]}\nQuantity: ${values[3]}\nName: ${values[4]}\nPhone Number: ${values[5]}\nAddress: ${values[6]}\nPayment Method: ${values[7]}\nTotal Cost: ₹ 500\n\nDate of receipt: ${todaysDate}`;
    alert(receipt_formatted);
}