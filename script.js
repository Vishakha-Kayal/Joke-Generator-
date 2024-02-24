const btnEvnt = document.getElementById("bttn")

const apiKey = "ZpfpPy78tmfMwHaiHgwEgVbADD2h1A4k6s3Ley0i";

const options = {
    method : "GET",
    headers : {
        "X-Api-Key" : apiKey,
    },
}
;
const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function joker(){
   const response = await fetch(apiUrl,options);
   const data = await response.json();
   document.querySelector('p').innerHTML = data[0].joke;
   console.log(data);
}

btnEvnt.addEventListener("click",joker)