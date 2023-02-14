const btnEnviarEmail = document.getElementById("btnEnviarEmail");

function sendEmail() {
  const emailAuthor = document.getElementById("inputNombreContacto").value;
  const emailFrom = document.getElementById("inputEmailContacto").value;
  const emailBody = document.getElementById("comentarioContacto").value;

  const options = {
    mode: "no-cors",
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "7049ebc22fmsheabb45373411b9ep13acf3jsn31bea277de44",
      "X-RapidAPI-Host": "rapidprod-sendgrid-v1.p.rapidapi.com",
    },
    body: '{"personalizations":[{"to":[{"email":"joaquin.perez.coria@gmail.com"}],"subject":"Esto es una prueba"}],"from":{"email":"from_address@example.com"},"content":[{"type":"text/plain","value":"Esto es una prueba para ver si funciona"}]}'
};

  fetch("https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}
btnEnviarEmail.addEventListener("click", sendEmail);

//El código de arriba es la solicitud de envío de email con la API de SendGrid. Actualmente me estaría imprimiendo un error por consola 401 "Unauthorized: You do not have authorization to make the request.". Sin embargo, con el mismo código en RapidAPI me envía el email sin problemas. Como se puede ver traigo varios inputs del DOM para crear el email, aunque actualmente en el código decidi dejarlo como me lo daba RapidAPI por si el error lo estaba induciendo yo, aún así no era el motivo por el cual me daba el error.
