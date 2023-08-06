class Slider {
  constructor() {
    this.left = null;
    this.right = null;
    this.img = null;
    this.divImg = null;
  }
  init() {
    this.left = document.querySelector(".left");
    this.right = document.querySelector(".right");
    this.divImg = document.querySelector(".img-div");
    this.left.addEventListener("click", this.onLeftClick.bind(this));
    this.right.addEventListener("click", this.onRightClick.bind(this));
  }
  onLeftClick() {
    this.divImg.scrollLeft -= 669;
  }
  onRightClick() {
    this.divImg.scrollLeft += 669;
  }
  create() {
    let container = document.querySelector(".container");
    let slider = document.createElement("div");
    slider.className = "slider";
    this.divImg = document.createElement("div");
    this.divImg.className = "img-div";

    let divIcon1 = document.createElement("div");
    divIcon1.className = "left icon";
    let icon1 = document.createElement("i");
    icon1.className = "fa-solid fa-angle-left";
    let divIcon2 = document.createElement("div");
    divIcon2.className = "right icon";
    let icon2 = document.createElement("i");
    icon2.className = "fa-solid fa-angle-right";

    divIcon1.appendChild(icon1);
    divIcon2.appendChild(icon2);

    slider.appendChild(this.divImg);
    slider.appendChild(divIcon1);
    slider.appendChild(divIcon2);

    container.append(slider);
    return container;
  }
  sentData(source) {
    console.log(source);
    source.forEach((x) => {
      let img1 = document.createElement("img");
      img1.src = x.img;
      this.divImg.appendChild(img1); 
    });
  }
}
