let addImg = (src)=> {
    let imgElement = 
    document.createElement("img")
    imgElement.src = src
    document.body.appendChild(imgElement)
}