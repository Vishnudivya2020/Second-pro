

let BookData=document.getElementById("book-container");
console.log(BookData);

let currentpage=1;
let itemspage=4;
 // get the data using fetch
 async function fetchData(){
    try{
        BookData.innerHTML="";
        //each page having 4 datas only.
        let startIndex=(currentpage-1)* itemspage;
        let endIndex=startIndex+itemspage
 let API= await fetch("https://api.artic.edu/api/v1/artworks/search?q=cats")
 let msg=await API.json();
 console.log(msg);
// .then((res) => res.json())
// .then(msg=>{
   
    msg.data.slice(startIndex, endIndex).map((ele)=>{
        console.log(ele);
        createDataCard(ele)
        
         
    });

}catch(error){
console.log(error)
}
}
fetchData()


function createDataCard(ele){
    BookData.innerHTML +=`
    <div class="container">
       
        
    <h2>Title:<span class="title">${ele.title}<span></h2>
    <hr></hr>
    <p>API_Model:<span>${ele.api_model}</span></p>
    <p>Score:<span>${ele._score}</span></p>
    <p>Id:<span>${ele.id}</span></p>

</div>


    `
}

//onclick function for buttons.

function prevButton(){
    
       currentpage=1;
        fetchData();
       
    }


function SecBtn(){
    
        currentpage=2;
     fetchData();
    
}

function thirBtn(){
    
    currentpage=3;
    fetchData();
    
}


  

