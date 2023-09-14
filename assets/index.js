function validateAndSubmit() {
  var form = document.getElementById("signupForm");
  var isValid = form.checkValidity();

  if (isValid) {
    form.submit();
  } else {
    alert("Please fill in all required fields.");
  }
}

function handleFormSubmission_1() {
  var dependantSelection = document.querySelector(
    'input[name="dependant"]:checked'
  );

  if (dependantSelection) {
    if (dependantSelection.value === "dependant") {
      // Redirect to Page X
      window.location.href = "dependant.html";
    } else if (dependantSelection.value === "no_dependant") {
      // Redirect to Page Y
      window.location.href = "attendance.html";
    }
  } else {
    alert("Please select whether you have a dependant.");
  }
}

// Attendance
document
  .getElementById("attendanceSelect")
  .addEventListener("change", function () {
    var campingRadio = document.getElementById("no_camping");

    if (this.value === "online") {
      // Automatically select "No" for camping when Online Stream is chosen
      campingRadio.checked = true;
    }
  });

function handleFormSubmission_attendance() {
  var camingSelection = document.querySelector('input[name="camping"]:checked');

  if (camingSelection) {
    if (camingSelection.value === "yes") {
      window.location.href = "camping.html";
    } else if (camingSelection.value === "no") {
      window.location.href = "ministeries.html";
    }
  } else {
    alert("Please select whether you have a dependant.");
  }
}

// Ministering
function handleFormSubmission_ministering() {
  var ministerSelection = document.querySelector(
    'input[name="minister"]:checked'
  );

  if (ministerSelection) {
    if (ministerSelection.value === "yes") {
      window.location.href = "ministers.html";
    } else if (ministerSelection.value === "no") {
      window.location.href = "tcgc.html";
    }
  } else {
    alert("Please select whether you have a dependant.");
  }
}

// tcgc.html
function handleFormSubmission_tcgc() {
  var tcgc_memberSelection = document.querySelector(
    'input[name="tcgc_member"]:checked'
  );

  if (tcgc_memberSelection) {
    if (tcgc_memberSelection.value === "yes") {
      window.location.href = "workforce.html";
    } else if (tcgc_memberSelection.value === "no") {
      window.location.href = "first_time.html";
    }
  } else {
    alert("Please select whether you have a dependant.");
  }
}

// first_time.html
function handleFormSubmission_first_time() {
  var first_timeSelection = document.querySelector(
    'input[name="first_time"]:checked'
  );

  if (first_timeSelection) {
    if (first_timeSelection.value === "yes") {
      window.location.href = "expectations.html";
    } else if (first_timeSelection.value === "no") {
      window.location.href = "past_experience.html";
    }
  } else {
    alert("Please select whether you have a dependant.");
  }
}
