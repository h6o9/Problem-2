async function getData() { // frist all we did crate the function
    return new Promise((resolve, reject) => { // get return with promise and pass two promise resolve and reject
        reject( new Error ("Async data fetching Erorr.")); // put the reject show the erorr means there is erorr in fetching data
    });
}

async function fetchData() { // creat the async funcation for code improve the userexperience and code readablilty and maintainablity
    try{ //use the try block for try function
    console.log("Wait your data is fetching......"); // that's msg for user 
    const result = await getData();// store the getData function for fetchdata and use the await means function will be await for stroing function
    console.log("Fetched data:", result); // console the msg with result constant
    } 
    catch(error) { // use the catch block
        console.log("Erorr you fetched data:", error.message); // console the erorr msg.
    }
}

fetchData(); // call the function 