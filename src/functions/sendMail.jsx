export default function sendMailFunction(name, mail, message, tel) {
  window.location.href = `mailto:d.butler13@outlook.com?subject=Mail from: ${name}&body=Message: \n${message}\n\nMail: ${mail}${tel && '\nTel: ' + tel}`;
}
