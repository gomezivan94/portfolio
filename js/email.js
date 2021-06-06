function sendMail(params){
    var tempParams = {
        from_name: document.getElmentById("fromName").value,
        to_name: document.getElementById("toName").value,
        message: document.getElementById("msg").value,
    };

    emailjs.send('service_k9o5okc','template_jdd7owd',tempParams)
    .then(function(res){
        console.log("success", res.status);
    })
}