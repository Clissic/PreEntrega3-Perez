const emailAuthor = document.getElementById("inputNombreContacto").textContent;
const emailFrom = document.getElementById("inputEmailContacto").textContent;
const emailBody = document.getElementById("comentarioContacto").textContent;
const btnEnviarEmail = document.getElementById("btnEnviarEmail");

const sendEmail = async () => {
	const options = {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
			'X-RapidAPI-Key': '',
			'X-RapidAPI-Host': 'rapidprod-sendgrid-v1.p.rapidapi.com'
		},
		body: '{"personalizations":[{"to":[{"email":"john@example.com"}],"subject":"Hello, World!"}],"from":{"email":"from_address@example.com"},"content":[{"type":"text/plain","value":"Hello, World!"}]}'
	};
	
	fetch('https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send', options)
		.then(response => response.json())
		.then(response => console.log(response))
		.catch(err => console.error(err));
  
console.log(emailAuthor, emailBody, emailFrom);
};

btnEnviarEmail.addEventListener("click", sendEmail);