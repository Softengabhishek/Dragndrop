const itemList = document.getElementsByClassName("item_list")[0]
const imgList = document.querySelectorAll('.list');
const dragArea = document.querySelector(".drag-area");
const btn = document.getElementById("btn")
const header = document.getElementsByClassName("header-drag")[0]

// Drag and Drop logics 
imgList.forEach((list) => {
    list.addEventListener("dragstart", (e) => {
        let imgid = e.target;
        console.log(imgid)
        dragArea.addEventListener("dragover", (e) => {
            e.preventDefault()
            header.innerText = "Leave file over here "
        })

        dragArea.addEventListener("dragleave", (e) => {
            e.preventDefault()
            header.innerText = "Drag & Drop to Upload file"
        })

        // Drop event over the drag area
        dragArea.addEventListener("drop", (e) => {
            let count = 0
            while (count <= 3) {
                if (!dragArea.children[count].classList.contains("hide"))
                    dragArea.children[count].classList.add("hide");
                count++
            }
            dragArea.classList.add("drag-area-after")
            console.log(imgid)
            dragArea.appendChild(imgid)
            imgid=null
        })

        itemList.addEventListener("dragover", (e) => {
            e.preventDefault()
        })

        itemList.addEventListener("drop", (e) => {
            let i = dragArea.children.length
            if (i == 4) {
                while (i--)
                    dragArea.children[i].classList.remove("hide");
            }
            itemList.appendChild(imgid)
            imgid=null
        })
    })
});



// Reset button logic here
const container = document.getElementsByClassName("container")[0]
btn.addEventListener("click", (e) => {
    container.removeChild(itemList)
    let leftBox = document.createElement("div")
    container.insertBefore(leftBox, dragArea)
    leftBox.className = "item_list"
    imgList.forEach((ele) => {
        leftBox.appendChild(ele)
    })
    let count = 0
    while (count <= 3) {
        if (dragArea.children[count].classList.contains("hide"))
            dragArea.children[count].classList.remove("hide");
        count++
    }
    dragArea.classList.remove("drag-area-after")
    header.innerText = "Drag & Drop to Upload file"
})
