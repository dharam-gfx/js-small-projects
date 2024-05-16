const file=document.querySelector("#file");
const showImage=document.querySelector("#show-image");
const download=document.querySelector("#download");
const controllers=document.querySelectorAll("input[type=range]");

const canvas = document.createElement( "canvas" );
let ctx = canvas.getContext("2d");
let img = new Image(showImage.clientWidth,showImage.clientHeight);
// img.src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
console.log(canvas);
console.log(img,img.width,img.height);

let isImageUploaded=false;
file.addEventListener("change",(e)=>{
    const image = file.files[0];
    img.src = window.URL.createObjectURL(image);
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
console.log(img, img.width,img.height);
    ctx.drawImage(img, 0, 0,img.width,img.width);
    imgURL= canvas.toDataURL();

showImage.style.backgroundImage=`url(${( img.src)})`;
isImageUploaded=true;
    console.log(URL.createObjectURL(image));
})

controllers.forEach((el)=>{
    // console.log(el);
    el.addEventListener("input",()=>{

        if (!isImageUploaded) {
            console.log("image not uploaded");
            return;
        }
        setFlitters(el)
    })
})

const setFlitters=(el)=>{
    let value =el.value;
    id=(el.id).toLowerCase();
    switch (id) {
        case "blur":
            showImage.style.filter=`blur(${value/4}px)`;
            ctx.filter=`blur(${value/4}px)`;
            ctx.drawImage(img, 0, 0,img.width,img.height);
            break;
        case "brightness":
            showImage.style.filter=`brightness(${value}%)`;
            ctx.filter=`brightness(${value}%)`;
            ctx.drawImage(img, 0, 0,showImage.clientWidth,showImage.clientHeight);
            
            break;
        case "contrast":
            showImage.style.filter=`contrast(${value}%)`;
            ctx.filter=`contrast(${value}%)`;
            ctx.drawImage(img, 0, 0,showImage.clientWidth,showImage.clientHeight);
            
            break;
        case "saturate":
            showImage.style.filter=`saturate(${value}%)`;
            ctx.filter=`saturate(${value}%)`;
            ctx.drawImage(img, 0, 0,showImage.clientWidth,showImage.clientHeight);
            
            break;
        case "grayscale":
            showImage.style.filter=`grayscale(${value}%)`;
            ctx.filter=`grayscale(${value}%)`;
            ctx.drawImage(img, 0, 0,showImage.clientWidth,showImage.clientHeight);
            
            break;
        case "hue-rotate":
            showImage.style.filter=`hue-rotate(${value}deg)`;
            ctx.filter=`hue-rotate(${value}deg)`;
            ctx.drawImage(img, 0, 0,showImage.clientWidth,showImage.clientHeight);
            
            break;

        case "invert":
            showImage.style.filter=`invert(${value})`;
            ctx.filter=`invert(${value})`;
            ctx.drawImage(img, 0, 0,showImage.clientWidth,showImage.clientHeight);
            
            break;
        case "opacity":
            showImage.style.filter=`opacity(${value}%)`;
            ctx.filter=`opacity(${value}%)`;
            ctx.drawImage(img, 0, 0,showImage.clientWidth,showImage.clientHeight);
            
            break;
        case "sepia":
            showImage.style.filter=`contrast(${value}%)`;
            ctx.filter=`contrast(${value}%)`;
            ctx.drawImage(img, 0, 0,showImage.clientWidth,showImage.clientHeight);
            
            break;
    
        default:
            break;
    }
}


download.addEventListener('click', function(ev) {
  download.href = canvas.toDataURL();
  console.log( download.href)
  download.download = 'img.png';
}, false);



// download.addEventListener("click",()=>{
//     html2canvas( document.getElementById( "show-image" ) ).then( function ( canvas ) {
//         var anchorTag = document.createElement( "a" );
//         anchorTag.download = "Alpaca.jpg";
//         anchorTag.href = canvas.toDataURL();
//         anchorTag.target = '_blank';
//         anchorTag.click();
//     } );
// })


