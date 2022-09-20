
function handleCredentialResponse(response) {
    const data = jwt_decode(response.credential)
    console.log(data);
    if (data.email_verified === true){
        fullName.textContent = "Bem vindo " + data.name;
        document.getElementById("mImg").style.display = "none"; 
        document.getElementById("buttonDiv").style.display = "none";
        document.getElementById("mPar").innerHTML = "&#128512;";
        document.getElementById("mTitle").innerHTML = "Logado com scuesso!!!";
        document.getElementById("mImgShow").setAttribute('src', data.picture); 
        
    } else {

        fullName.textContent = "Falha ao autenticar-ses";
    }

}

window.onload = function () {
    google.accounts.id.initialize({
    client_id: "<your_client_id_here>",
    callback: handleCredentialResponse
    });

    google.accounts.id.renderButton(
    document.getElementById("buttonDiv"),
    { 
        theme: "outline", 
        size: "large",
        type:"standard",
        shape: "pill"
    } 
    );

    google.accounts.id.prompt(); 
}
