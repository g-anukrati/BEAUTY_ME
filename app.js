const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "FOUNDATION",
    price: 119,
    colors: [
      {
        code: "#EDB381",
        img: "./img/f1.jpeg",
      },
      {
        code: "#D8863B",
        img: "./img/f2.jpeg",
      },
    ],
  },
  {
    id: 2,
    title: "LIPSTICK",
    price: 149,
    colors: [
      {
        code: "#480404",
        img: "./img/lips1.jpg",
      },
      {
        code: "#44012D",
        img: "./img/lip2.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "NAILPAINT",
    price: 109,
    colors: [
      {
        code: "#27504B",
        img: "./img/n1.jpeg",
      },
      {
        code: "#2B5D34",
        img: "./img/n2.jpeg",
      },
    ],
  },
  {
    id: 4,
    title: "HAIR CARE",
    price: 129,
    colors: [
      {
        code: "#6F669F",
        img: "./img/hairband1.jpg",
      },
      {
        code: "#335531",
        img: "./img/hairband2.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "PERFUMES",
    price: 99,
    colors: [
      {
        code: "#C6755F",
        img: "./img/fra1.jpg",
      },
      {
        code: "#DFD49F",
        img: "./img/fra2 (2).jpg",
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