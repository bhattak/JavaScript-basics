import fetch from "node-fetch";
const getData=()=>{
    fetch('www.example.com/api/get/1',{method: "GET"})
        .then((res)=>console.log(res))
            .catch((err)=> console.log(err));
}
getData()

