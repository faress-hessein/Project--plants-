let iconBar = document.querySelector(".iconBar");

// handel Manu Bar
if (iconBar) {
  iconBar.onclick = function () {
    console.log("Good");
    document.querySelector(".landing ul").classList.toggle("BarActiv");
  };
}

// handel more Info
let btnMore = document.getElementById("btnMore");

if (btnMore) {
  btnMore.onclick = function () {
    if (btnMore.innerHTML === "More") {
      let boxInfo = document.querySelector(".box-info");
      let info = document.getElementById("info");
      btnMore.innerHTML = "More Less";
      info.innerHTML =
        "It’s a nice way to send plants to people you love who live faraway, Our team preps, prunes, & carefully packs every order—meaning lots of care goes into every stepIf your plant arrives damaged or unhealthy, we replace it for free.";
    } else {
      btnMore.innerHTML = "More";
      info.innerHTML =
        "It’s a nice way to send plants to people you love who live faraway, Our team preps, prunes, & carefully packs every order...";
    }
  };
}

// handel Dark Mode
let darkM = document.querySelector(".darkM");

if (darkM) {
  darkM.onclick = function () {
    if (darkM.classList.contains("fa-sun")) {
      darkM.classList = "fa-solid fa-moon";
      document.body.classList = "darke-theam";
    } else {
      darkM.classList = "fa-solid fa-sun";
      document.body.classList = "";
    }
  };
}

// handel Coming Soon
if (document.querySelector(".manu-one")) {
  let countDounDate = new Date("Dec 31, 2024 00:00:00").getTime();
  let x = setInterval(() => {
    let now = new Date().getTime();
    let discouns = countDounDate - now;

    let dayes = Math.floor(discouns / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (discouns % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((discouns % (1000 * 60 * 60)) / (1000 * 60));
    let secands = Math.floor((discouns % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = (dayes < 10 ? "0" : "") + dayes;
    document.getElementById("hours").innerHTML =
      (hours < 10 ? "0" : "") + hours;
    document.getElementById("minutes").innerHTML =
      (minutes < 10 ? "0" : "") + minutes;
    document.getElementById("secound").innerHTML =
      (secands < 10 ? "0" : "") + secands;

    if (discouns < 0) {
      clearInterval(x);
      document.getElementById("days").innerHTML = "00";
      document.getElementById("hours").innerHTML = "00";
      document.getElementById("minutes").innerHTML = "00";
      document.getElementById("secound").innerHTML = "00";
    }
  }, 1000);
}

let cart = document.querySelector(".cart");

// handel Show cart-shopping
if (cart) {
  document.querySelector(".cart-shopping").onclick = function () {
    cart.style.width = "300px";
  };

  // handel hide cart-shopping
  document.querySelector(".close").onclick = function () {
    cart.style.width = "0%";
  };
}

// Handel All Prodact in Shoping cart
let arrProdact = [
  {
    id: 1,
    name: "Balboa Planter",
    img: "Balboa Planter.png",
    price: "14",
    color: "red",
  },
  {
    id: 2,
    name: "Ficus Audrey Tree",
    img: "Ficus Audrey Tree.png",
    price: "12",
    color: "orange",
  },
  {
    id: 3,
    name: "Grant Planter",
    img: "Grant Planter.png",
    price: "11",
    color: "red",
  },
  {
    id: 4,
    name: "green ZZ Plant",
    img: "green ZZ Plant.png",
    price: "16",
    color: "white",
  },
  {
    id: 5,
    name: "Helena Planter",
    img: "Helena Planter.png",
    price: "17",
    color: "red",
  },
  {
    id: 6,
    name: "Hyde Planter",
    img: "Hyde Planter.png",
    price: "17",
    color: "blue",
  },
  {
    id: 7,
    name: "Cacti plants",
    img: "indoor-plants-studio.png",
    price: "14",
    color: "red",
  },
  {
    id: 8,
    name: "Isabella Planter",
    img: "Isabella Planter.png",
    price: "19",
    color: "white",
  },
  {
    id: 9,
    name: "Monstera Deliciosa",
    img: "Monstera Deliciosa.png",
    price: "18",
    color: "orange",
  },
  {
    id: 10,
    name: "Balboa Planter",
    img: "Balboa Planter.png",
    price: "14",
    color: "red",
  },
  {
    id: 11,
    name: "Olive Tree",
    img: "Olive Tree.png",
    price: "10",
    color: "orange",
  },
  {
    id: 12,
    name: "Pallas Planter",
    img: "Pallas Planter.png",
    price: "20",
    color: "white",
  },
  {
    id: 13,
    name: "Parlor Palm",
    img: "Parlor Palm.png",
    price: "12",
    color: "blue",
  },
  {
    id: 14,
    name: "Round Two Planter",
    img: "Round Two Planter.png",
    price: "19",
    color: "red",
  },
  {
    id: 15,
    name: "Snake Laurentii",
    img: "Snake Plant Laurentii.png",
    price: "17",
    color: "green",
  },
  {
    id: 16,
    name: "Solid Goods",
    img: "Solid Goods Planter with Saucer.png",
    price: "13",
    color: "white",
  },
  {
    id: 17,
    name: "Solid Goods ",
    img: "Solid Goods Planter.png",
    price: "17",
    color: "red",
  },
  {
    id: 18,
    name: "Vriesea Intenso",
    img: "Vriesea Intenso.png",
    price: "19",
    color: "blue",
  },
  {
    id: 19,
    name: "ZZ Plant",
    img: "ZZ Plant.png",
    price: "13",
    color: "green",
  },
  {
    id: 19,
    name: "Duo gray pot",
    img: "zz-plant-gray-pot.png",
    price: "13",
    color: "green",
  },
];

let Prodacts = document.querySelector(".manu");
let body = document.querySelector("body");
let checkOutLest = [];
let quantety = document.querySelector(".quantety");
let total = document.querySelector(".total");

// function handel Add Prodact in manu
function onInit() {
  arrProdact.forEach((item, key) => {
    let div = document.createElement("div");
    div.classList.add("item");
    div.innerHTML = `
            <img src="Media/manu-prodact/${item.img}" />
        <div class="text">
          <h3>${item.name}</h3>
          <span class="${item.color}"></span>
        </div>
        <p><small>$</small>${item.price}</p>
        <i onclick="addToCart(${key})" class="fa-solid fa-cart-shopping add-shopping-cart"></i>
    `;
    Prodacts.appendChild(div);
  });
}
if (cart) {
  onInit();
}

// function add Prodacts To shopping-cart
function addToCart(Id) {
  if (checkOutLest[Id] == null) {
    checkOutLest[Id] = arrProdact[Id];
    checkOutLest[Id].quantety = 1;
  } else {
    checkOutLest[Id].quantety += 1;
  }
  relodCart();
}

let prodactuList = document.querySelector(".prodactuList");

// function add Prodacts To shopping-cart relodCart()
function relodCart() {
  prodactuList.innerHTML = ``;
  let count = 0;
  let totalPrice = 0;

  checkOutLest.forEach((item, key) => {
    totalPrice += parseInt(item.price * item.quantety);
    count += item.quantety;
    let li = document.createElement("li");
    li.innerHTML = `
    <img src="Media/manu-prodact/${item.img}" />
  <h3>${item.name}</h3>
<div>
      <button onclick="cheangQuantity(${key},${item.quantety - 1})" >-</button>
    <p>${item.quantety}</p>
      <button onclick="cheangQuantity(${key},${item.quantety + 1})" >+</button>
</div>
    `;
    prodactuList.appendChild(li);
  });
  quantety.innerHTML = count;
  total.innerHTML = `$${totalPrice}`;
}

function cheangQuantity(key, quantety) {
  if (quantety == 0) {
    delete checkOutLest[key];
  } else {
    checkOutLest[key].quantety = quantety;
  }
  relodCart();
}

// Handel Page Card
document.querySelector(".card-number-input").oninput = () => {
  document.querySelector(".card-number-box").innerHTML =
    document.querySelector(".card-number-input").value;
};

document.querySelector(".card-holder-input").oninput = () => {
  document.querySelector(".card-name-box").innerHTML =
    document.querySelector(".card-holder-input").value;
};

document.querySelector(".month-input").oninput = () => {
  document.querySelector(".card-mm-box").innerHTML =
    document.querySelector(".month-input").value;
};

document.querySelector(".year-input").oninput = () => {
  document.querySelector(".card-yy-box").innerHTML =
    document.querySelector(".year-input").value;
};

document.querySelector(".card-ccv-input").onmouseenter = () => {
  document.querySelector(".front").style.transform =
    "perspective(1000px) rotateY(-180deg)";
  document.querySelector(".back").style.transform =
    "perspective(1000px) rotateY(0deg)";
};

document.querySelector(".card-ccv-input").onmouseleave = () => {
  document.querySelector(".front").style.transform =
    "perspective(1000px) rotateY(0deg)";
  document.querySelector(".back").style.transform =
    "perspective(1000px) rotateY(180deg)";
};

document.querySelector(".card-ccv-input").oninput = () => {
  document.querySelector(".ccv-box").innerHTML =
    document.querySelector(".card-ccv-input").value;
};
