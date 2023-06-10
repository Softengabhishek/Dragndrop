const itemList = document.getElementsByClassName("item_list")


// Get the image data using this api
async function fetchData(){
    const url = 'https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '51513f6df7msh1caf28a9d409faep1d6ef5jsnbc2fd995c05d',
            'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        result.map((data)=>{
            let {imgSrc}= data
            let image = Object.values(imgSrc)[0];
            let img = document.createElement("img");
            img.src = image
            itemList[0].appendChild(img)

        })

    } catch (error) {
        console.error(error);
    }
}
// fetchData()


const imgList = document.querySelectorAll(".list");
const dragArea = document.querySelector(".drag-area");
console.log(imgList);

imgList.forEach((list)=>{
    console.log("working..")
    list.addEventListener("dragstart",(e)=>{
        e.preventDefault()
        e.dataTransfer.setData("data",e.target)        
        console.log("dragstart")
    })
})



for(list of imgList){
    
    list.addEventListener("dragstart",(e)=>{
        e.preventDefault()

    })
}

dragArea.addEventListener("dragover",(e)=>{
    e.preventDefault()
    console.log("drag over is triggered")
})
dragArea.addEventListener("drop",(e)=>{
    e.preventDefault()
    let data = e.dataTransfer.getData("data")
    console.log(data)
    // dragArea.appendChild(data)

    console.log("Drop is triggered",data)
})

