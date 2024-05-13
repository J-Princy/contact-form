function sendToWhatsapp(){
    let number = "+6369618203";

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    var url = "https://wa.me/" + number + "?text="
    + "Name : " +name+ "%0a"
    + "Email : "+email+ "%0a";

    window.open(url, '_blank').focus();
}