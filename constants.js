// placeholders constants
const idPlaceholder = "Enter valid Id number";
const passportPlaceholder = "Enter valid passport number";
const firstNamePlacholder = " Enter your first name";
const lastNamePlacholder = " Enter your last name";

// errors constants
const firstNameErrorTxt = "First Name field is a mandatory field.";
const lastNameErrorTxt = "Last Name field is a mandatory field.";
const errorEmptyId = "ID field is a mandatory field";
const errorEmptyPassport = "Passport field is a mandatory field";
const errorRangeOfId = "ID field must consist of 8-9 digits";
const errorPassportLength = "Passport field must consist of 8-9 digits";
const wrongId = "This Id number is not a valid israeli number";

// content constants
const h1 = "With whom do we have the honor";
const h3 = "The person for which this form is submitted";
const labelFname = "First Name:";
const lablelLname = "Last Name:";
const labelIdType = "ID Type:";
const optionId = "ID Number";
const optionPssport = "Passport Number";
const labelIdPassport = "ID/Passport Number:";
const labelArabicNone = "Arabic/None:";
const optionArabic = "Arabic";
const optionHebrew = "Hebrew";
const optionArabicNone = "None";
const labelCountry = "Country:";
const optionIsrael = "Israel";
const labelImGuardian =
  "I'm a legal guardian and I would like to register in the name of the person under my guardianship:";
const sendDataToServer = "Submit";

document.querySelector("h1").innerHTML = h1;
document.querySelector("h3").innerHTML = h3;
document.getElementById("labelFname").innerHTML = labelFname;
document.getElementById("labelLname").innerHTML = lablelLname;
document.getElementById("labelIdType").innerHTML = labelIdType;
document.getElementById("optionId").innerHTML = optionId;
document.getElementById("optionPassport").innerHTML = optionPssport;
document.getElementById("labelIdPassport").innerHTML = labelIdPassport;
document.getElementById("labelArabicNone").innerHTML = labelArabicNone;
document.getElementById("optionArabic").innerHTML = optionArabic;
document.getElementById("optionNone").innerHTML = optionArabicNone;
document.getElementById("labelCountry").innerHTML = labelCountry;
document.getElementById("optionIsrael").innerHTML = optionIsrael;
document.getElementById("labelImGuardian").innerHTML = labelImGuardian;

const btnSubmitToServer = document.querySelector("button");
btnSubmitToServer.innerHTML = sendDataToServer;

document
  .querySelector("#firstName")
  .setAttribute("placeholder", firstNamePlacholder);
document
  .querySelector("#lastName")
  .setAttribute("placeholder", lastNamePlacholder);
