const student = {
    name: "David",
    job: "student",
    age: "18",
    height: "6ft"
};

student.name = "john";
const newStudent = {...student, name: 'John'};

const fetchAllFromServer = async () => {
    const getItem = await fetch('https://jsonplaceholder.typicode.com/users',{
        method: 'GET',
    }
    )
    const responseData = await getItem.json();

    for(let i = 0; i < responseData.length; i++){
        const personData = document.createElement('div')
        personData.id = 'personData'

        const pElement1 = document.createElement('p')
        pElement1.className = 'name'
        pElement1.innerHTML = responseData[i].name

        const userDataElement = document.getElementById('data');
        personData.appendChild(pElement1);

        const pElement2 = document.createElement('p')
        pElement2.innerHTML = responseData[i].email
        personData.appendChild(pElement2)

        const pElement3 = document.createElement('p')
        pElement3.innerHTML = responseData[i].username
        personData.appendChild(pElement3)

        const pElement4 = document.createElement('p')
        pElement4.innerHTML = responseData[i].website
        personData.appendChild(pElement4)

        const pElement5 = document.createElement('p')
        pElement5.innerHTML = responseData[i].address.city
        personData.appendChild(pElement5)

        userDataElement.appendChild(personData)
    }
    // console.log(responseData);

    // const person1 = responseData[0]; 
    // let userEmail = document.getElementById('email')
    // userEmail.innerHTML = person1.email

    // let userName = document.getElementById('name')
    // userName.innerHTML = person1.name
    
    // let userNameDisplay = document.getElementById('userName')
    // userNameDisplay.innerHTML = person1.username

    // let userWebsite = document.getElementById('website')
    // userWebsite.innerHTML = person1.website

    // let userAddress = document.getElementById('addressCity')
    // userAddress.innerHTML = person1.address.city
}

// fetchAllFromServer();


const postData = async () => {
    const userDetails = {
        name: "Jason",
        email: "jason@email.com",
        username: "jasonYT",
        website: "jasonPage.com",
        address: {
            city: "lagos"
        }
    }

    const postItem = await fetch('https://jsonplaceholder.typicode.com/users',
        {
            method: 'POST',
            
        },
        userDetails
    )

    const postResponse = await postItem.json()
fetchSingle(10)


    console.log(postResponse);  
}

postData()

const fetchSingle = async (id) => {
    const fetchItem = await fetch('https://jsonplaceholder.typicode.com/users/' + id, {
        method: 'GET',
    }
    )

    const fetchItemDisplay = await fetchItem.json()


    const personData = document.createElement('div')
        personData.id = 'personData'

        const pElement1 = document.createElement('p')
        pElement1.className = 'name'
        pElement1.innerHTML = fetchItemDisplay.name

        const userDataElement = document.getElementById('data');
        personData.appendChild(pElement1);

        const pElement2 = document.createElement('p')
        pElement2.innerHTML = fetchItemDisplay.email
        personData.appendChild(pElement2)

        const pElement3 = document.createElement('p')
        pElement3.innerHTML = fetchItemDisplay.username
        personData.appendChild(pElement3)

        const pElement4 = document.createElement('p')
        pElement4.innerHTML = fetchItemDisplay.website
        personData.appendChild(pElement4)

        const pElement5 = document.createElement('p')
        pElement5.innerHTML = fetchItemDisplay.address.city
        personData.appendChild(pElement5)

        userDataElement.appendChild(personData)


    console.log(fetchItemDisplay)
}
