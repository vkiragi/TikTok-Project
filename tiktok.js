"use strict";


const buttonContinue = document.getElementById("homeContinue");
buttonContinue.addEventListener("click", buttonAction);


async function sendPostRequest(url, data) {
  console.log("about to send post request")

  // sends post request and retrieves the response
  let response = await fetch(url, {
    method: "POST",
    header: {
      "Content-Type": "text/plain",
    },
    body: data,
  });

  if (response.ok) {
    let data = await response.text();
    return data;
  } else {
    throw Error(response.status);
  } 
}

function buttonAction() {
  
let userPick = document.querySelector('#nickname').value;

console.log("sending",userPick);
// sendPostData takes a relative url and the data to send 
// as inputs and returns a Promise object
sendPostRequest('/videoData',userPick)
  .then(function(data) {
    sessionStorage.setItem("pick",userPick);
    window.location = "/result.html";  })
  .catch(function(error) {
    console.log("Error occurred:", error)
  });
}