// callback

// function fetchData(callback){
//     setTimeout(()=>{
//         callback("data eseche bhai");
//     }, 2000);
// }

// fetchData((dt)=>console.log(dt));

// getUser(function (user){
//   getProfile(user.id, function(profile){
//     getPosts(profile.id, function(posts){
//         console.log(posts);
//     })
//   })
// })

//Class Promise(para){ const data = para constructor(){data = this.data} resolve(){
// const variable = data}}

// function fetchData(){
//     return new Promise((resolve, reject)=>{
//         reject("promise resolved");
//     })
// }

// fetchData().then(data => console.log(data));

// function fetchData(callback){
//     setTimeout(()=>{
//         callback("data eseche bhai");
//     }, 2000);
// }

function fetchData() {
  return new Promise((resolve, reject) => {
    reject("promise resolved");
  });
}

async function getData() {
 
    const res = await fetchData();
    console.log(res);
    
}

getData();
