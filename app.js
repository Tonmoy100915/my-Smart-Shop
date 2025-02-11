const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "H.M",
    price: 6,
    colors: [
      {
        code: "black",
        img: "./image/H.M.png",
      },
      
      {
        code: "",
        img: "",
      },
    ],
  },
  {
    id: 2,
    title: "PUMA",
    price: 6,
    colors: [
      {
        code: "lightgray",
        img: "./image/PUMA.png",
      },
      {
        code: "green",
        img: "",
      },
    ],
  },
  {
    id: 3,
    title: "Burberry",
    price: 7,
    colors: [
      {
        code: "Black",
        img: "./image/Burberry.jpg",
      },
      {
        code: "White",
        img: "./image/Burberry.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "Levi's",
    price: 5,
    colors: [
      {
        code: "black",
        img: "./image/Levi's.jpg",
      },
      {
        code: "lightgray",
        img: "./image/Levi's.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "Tommy Hilfiger",
    price: 5,
    colors: [
      {
        code: "gray",
        img: "./image/Tommy Hilfiger.jpg",
      },
      {
        code: "black",
        img: "./image/Tommy Hilfiger.jpg",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});