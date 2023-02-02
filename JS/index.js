var imageLocation = 1;
var currentImage = document.getElementById("image_slideshow")
setInterval(changeImage, 1500)

function changeImage() {
    switch(imageLocation) {
        case 1:
            currentImage.src = "../Images/copypaste.png"
            console.log("Image changed successfully! (1)")
            imageLocation++
            break;
        case 2:
            currentImage.src = "../Images/nek.png"
            console.log("Image changed successfully! (2)")
            imageLocation++
            break;
        case 3:
            currentImage.src = "../Images/stealth100.png"
            console.log("Image changed successfully! (3)")
            imageLocation++
            break;
        case 4:
            currentImage.src = "../Images/borrowing.png"
            console.log("Image changed successfully! (4)")
            imageLocation = 1
            break;
    }
}
