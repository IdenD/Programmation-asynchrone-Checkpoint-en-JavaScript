// checkpoint Asynchronous Programming 1
console.clear();
function logger (val) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(val);
        }, 1000);
    })
}

 function iterateWithAsyncAwait (arr = []) {
   
        for (let i = 0; i < arr.length; i++) {
            const value = logger(arr[i]);
            console.log(value);
        }
    
 

} 

// async function resultat (arr = []){
//     const result = await iterateWithAsyncAwait(arr);
//     return result;
// }

tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// iterateWithAsyncAwait(tab);



// checkpoint Asynchronous Programming 2
function fetchData () {
        
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([{name: 'John', age: 10}, {name: 'Jane', age: 15}, {name: 'Doe', age: 20}]);
            }, 3000);
        })
    }

async function awaitCall () {
    console.log('Fetching data from the database from http://www.something.com');
    const data = await fetchData();
    console.log(data);
}
// awaitCall();

// checkpoint Asynchronous Programming 3
function fetchData2 () {
        
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // resolve([{name: 'John', age: 10}, {name: 'Jane', age: 15}, {name: 'Doe', age: 20}]);
                reject(new Error('An error occurred'));
            }, 3000);
        })
    }

async function awaitCall2 () {

    console.log('Fetching data from the database from http://www.something.com');
    try {
        const data = await fetchData2();
        // console.log(data);
    }
    catch (error) {
        console.log(error);
    }
}
//awaitCall2();

//========================================================================
//checkpoint Asynchronous Programming 3 suite

function message_one () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('Hello world, this is message one !')
        }, 2000);
    })
}

function message_two () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('Hi, this is message two !')
        }, 2000);
    })
}

function message_three () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('Hello, this is message three !')
        }, 2000);
    })
}

async function chainedAsyncFunctions () {
    try {
        const message1 = await message_one();
        console.log(message1);
        const message2 = await message_two();
        console.log(message2);
        const message3 = await message_three();
        console.log(message3);
    
    } catch (error) {
        console.log(error);
    }
  
}

//chainedAsyncFunctions();

//=======================================================================================================
// checkpoint Asynchronous Programming 4

function concurrentRequests () {
    Promise.all([message_one(), message_two(), message_three()])
    .then((values) => {
       console.log(values);
    });
   
}

// concurrentRequests();

//=======================================================================================================
// checkpoint Asynchronous Programming 5

function parallelCalls (arr = []) {
    let promises = [];
    for (let i = 0; i < arr.length; i++) {
        promises.push(query(arr[i]));
    }

  
    Promise.all(promises).then((values) => {
        for (let i = 0; i < values.length; i++) {
          setTimeout(() => { 
            console.log(`Fetching data from the database from  ${arr[i].url}`);
            console.log(values[i]); 
            console.log('\n');
          
          }, 2000);
           
        }
    });

} 

function query (urlObj) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {  
        // console.log(`Fetching data from the database from ${urlObj.url}`);
          resolve(urlObj.data)
        }, 2000);
    })
}

// function text (textUrl) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           resolve(`Fetching data from the database from ${textUrl.url}`);
//         }, 2000);
//     })

// }



 let urls = [
    {url: 'http://www.something.com', data: [{name: 'John', age: 10}, {name: 'Jane', age: 15}, {name: 'Doe', age: 20}]},

    {url: 'http://www.somethingelse2.com', data: [{name: 'Emmanuel', age: 10}]}, 
  
    {url: 'http://www.somethingelse3.com', data: [{name: 'James', age: 15}, {name: 'Dan', age: 20}]},
 ];
 

parallelCalls(urls);