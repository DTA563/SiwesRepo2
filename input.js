const userData = () => {
    // console.log("User data submitted");
    const nameInput = document.getElementById("name").value;
    const ageInput = document.getElementById("age").value;
    const jobInput = document.getElementById("job").value;
    const sexInput = document.getElementById("sex").value;

    const userNameOutput = document.getElementById("userName");
    const userAgeOutput = document.getElementById("userAge");
    const userJobOutput = document.getElementById("userJob");
    const userSexOutput = document.getElementById("userSex");

    userNameOutput.innerHTML = `${nameInput} is the name of the user`;
    userAgeOutput.innerHTML = `${ageInput} is the age of the user`;
    userJobOutput.innerHTML = `${jobInput} is the job of the user`;
    userSexOutput.innerHTML = `${sexInput} is the gender of the user`;

    // console.log(nameInput, ageInput, jobInput, sexInput);
}

const formBtn = document.getElementById("userInput");
formBtn.addEventListener('submit', (e) => {
    e.preventDefault();
    userData();
});

const clearData = () => {
    // console.log("User data cleared");

    const userNameOutput = document.getElementById("userName");
    const userAgeOutput = document.getElementById("userAge");
    const userJobOutput = document.getElementById("userJob");
    const userSexOutput = document.getElementById("userSex");

    userNameOutput.innerHTML = "";
    userAgeOutput.innerHTML = "";
    userJobOutput.innerHTML = "";
    userSexOutput.innerHTML = "";
}

formBtn.addEventListener('reset', () => {
    clearData();
    // formBtn.reset();
});

