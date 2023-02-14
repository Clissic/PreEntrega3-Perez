const emailAuthor = document.getElementById("inputNombreContacto").textContent;
const emailFrom = document.getElementById("inputEmailContacto").textContent;
const emailBody = document.getElementById("comentarioContacto").textContent;
const btnEnviarEmail = document.getElementById("btnEnviarEmail");


//APIKey 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

const sendEmail = async () => {
  const details = {
    to: "joaquin.perez.coria@gmail.com",
    from: "joaquin.perez.coria@gmail.com",
    subject: "Comentario de " + `${emailAuthor}`,
    text: `${emailBody}`,
  };

  const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer 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`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [{ email: details.to }],
          subject: details.subject,
        },
      ],
      from: { email: details.from },
      content: [
        {
          type: "text/plain",
          value: details.text,
        },
      ],
    }),
  });

  if (response.ok) {
    console.log("Correo electrónico enviado correctamente");
  } else {
    console.error(
      "Error al enviar el correo electrónico:",
      response.statusText
    );
  }
  
console.log(emailAuthor, emailBody, emailFrom);
};

btnEnviarEmail.addEventListener("click", sendEmail);
