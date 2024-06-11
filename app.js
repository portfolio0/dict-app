const result=document.querySelector('.op');


const input=document.querySelector('#ibox');

// const inputvalue=input.value;

const button=document.querySelector('.button');

button.addEventListener('click',()=>{
    if(input){
// console.log(input.value);
//    input.value=' ';
  
   fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`)
   .then((Response)=>Response.json())
   .then((data)=>{
       console.log("[data]",data);

       const definition=data[0].meanings[0].definitions[0].definition;
       result.innerText=definition;
   })
   .catch((Error)=>{
    result.innerText="word not found";
    console.log(Error);
   })
   input.value='';
    }
    else{
        console.log("enter some value");
    }   


})




