let getButton=document.getElementById('fetch');

const fetchData = () =>{
    fetch('https://www.boredapi.com/api/activity')
    .then(res => res.json())
    .then( active => {
        let result=active.activity;
        console.log(active)
        document.getElementById("gettingdata").innerHTML=result
    })
    .then(res => console.log(res))
    .catch(error=>console.log(error))
}

getButton.addEventListener('click',fetchData);
