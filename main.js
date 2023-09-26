// Function to validate Israeli ID number
function is_israeli_id_number(id) {
  id = String(id).trim();
  if (id.length > 9 || isNaN(id)) return false;
  id = id.length < 9 ? ("00000000" + id).slice(-9) : id;
  return (
    Array.from(id, Number).reduce((counter, digit, i) => {
      const step = digit * ((i % 2) + 1);
      return counter + (step > 9 ? step - 9 : step);
    }) %
      10 ===
    0
  );
}

function displayIdType() {
  const idType = document.getElementById("idType");
  const idNumber = document.getElementById("idNumber");
  const selectedOption = idType.options[idType.selectedIndex].text;
  idNumber.placeholder =
    selectedOption === "ID Number"
      ? "Enter valid ID number"
      : "Enter valid passport number";
}

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let idType = document.getElementById("idType").value;
  let idNumber = document.getElementById("idNumber").value;
  let language = document.getElementById("language").value;
  let country = document.getElementById("country").value;
  let guardian = document.getElementById("guardian").checked;

  let firstNameError = document.getElementById("firstNameError");
  let lastNameError = document.getElementById("lastNameError");
  let idNumberError = document.getElementById("idNumberError");
  let guardianError = document.getElementById("guardianError");

  firstNameError.innerText = "";
  lastNameError.innerText = "";
  idNumberError.innerText = "";
  guardianError.innerText = "";

  let isValid = true;

  if (!firstName) {
    firstNameError.innerText = firstNameErrorTxt;
    isValid = false;
  }

  if (!lastName) {
    lastNameError.innerText = lastNameErrorTxt;
    isValid = false;
  }

  if (idType === "idNumber") {
    if (!idNumber) {
      idNumberError.innerText = errorEmptyId;
      isValid = false;
    } else if (
      idNumber.length < 8 ||
      idNumber.length > 9 ||
      !is_israeli_id_number(idNumber)
    ) {
      idNumberError.innerText =
        idNumber.length < 8 || idNumber.length > 9 ? errorRangeOfId : wrongId;
      isValid = false;
    }
  }

  if (idType === "passportNumber") {
    if (!idNumber) {
      idNumberError.innerText = errorEmptyPassport;
      isValid = false;
    } else if (idNumber.length < 8 || idNumber.length > 9) {
      idNumberError.innerText = errorPassportLength;
      isValid = false;
    }
  }

  if (!guardian) {
    guardianError.innerText = "Please check this field.";
    isValid = false;
  }

  if (isValid) {
    const idTypeLabel = idType === "idNumber" ? "ID Number" : "Passport Number";

    alert(
      "First Name: " +
        firstName +
        "\nLast Name: " +
        lastName +
        "\n" +
        idTypeLabel +
        ": " +
        idNumber +
        "\nLanguage: " +
        language +
        "\nCountry: " +
        country
    );
  }
});
