const preview = document.getElementById("preview");
const previewScale = document.querySelector("#preview-scale");
const previewFlip = document.querySelector("#preview-flip");
const brightnessSlider = document.querySelector("#brightness");
const brightnessSliderValue = document.querySelector("#brightness-value");
const rotateSlider = document.querySelector("#rotate");
const rotateSliderValue = document.querySelector("#rotate-value");

const handleRotate = () => {
  const rotate = rotateSlider.value;
  rotateSliderValue.innerText = rotate;
  preview.style.rotate=rotate+"deg";
  preview.style.transform="scale(1.25)";
  // TODO: write your code here
};

const handleBrightness = () => {
  const brightness = brightnessSlider.value;
  brightnessSliderValue.innerText = brightness;
  preview.style.filter="brightness("+brightness+")";
  // TODO: write your code here
};

const handleFilter = (e) => {
  const { target } = e;
  const { id: filter } = target;
  let b={ id: filter };
  //preview.setAttribute('id',b.id);
  preview.children[0].setAttribute('id',b.id);
  console.log({ id: filter }.id);
  // filter: "grayscale" | "sepia" | "invert" | "hue-rotate" | "contrast" | "saturate" | "blur"

  // TODO: write your code here
};
let elo=true;
const handleFlip = (flip) => {
  //  flip: "vertical" | "horizontal"
  if(elo){
    if(flip=="vertical"){
      elo=false;
      previewFlip.style.transform="rotateX(180deg)";
    }else{
      previewFlip.style.transform="rotateY(180deg)";
    }
    elo=false;
  }
  else{
    if(flip=="vertical"){
      elo=false;
      previewFlip.style.transform="rotateX(0deg)";
    }else{
      previewFlip.style.transform="rotateY(0deg)";
    }
    elo=true;
  }
  // TODO: write your code here
};

const handleMouseEnter = () => {
  preview.style.transform="scale(2)";
  // TODO: write your code here
};

const handleMouseLeave = () => {
  preview.style.transform="scale(1)";
  preview.style.top=0+"px";
  preview.style.left=0+"px";
  preview.style.right=0+"px";
  preview.style.bottom=0+"px";
  // TODO: write your code here
};

let result=document.createElement('div');
const handleMouseMove = (e) => {
  const imageWidth = previewScale.offsetWidth;
  const imageHeight = previewScale.offsetHeight;
  const imageOffsetTop = previewScale.offsetTop;
  const imageOffsetLeft = previewScale.offsetLeft;
  const pageX = e.pageX;
  const pageY = e.pageY;
  preview.style.position="relative";
  previewScale.appendChild(result);
  console.log(pageX);
  // TODO: write your code here
};
previewScale.addEventListener("mousemove",handleMouseMove());
