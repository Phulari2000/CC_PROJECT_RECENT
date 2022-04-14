const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(
  ".header .nav-bar .nav-list ul li a"
);
const header = document.querySelector(".header.container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = "#29323c";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});


function handleIt(
  name,
  lname,
  service1,
  service2,
  service3,
  service4,
  des1,
  des2,
  des3,
  des4,
  project1,
  project2,
  project3,
  project4,
  prodescription1,
  prodescription2,
  prodescription3,
  prodescription4,
  whoyou,
  whodes,
  contact1,
  contact2,
  email1,
  email2,
  address,
) {
  localStorage.setItem("val1", name + " " + lname);
  localStorage.setItem("val2", lname);
  localStorage.setItem("val3", service1);
  localStorage.setItem("val4", service2);
  localStorage.setItem("val5", service3);
  localStorage.setItem("val6", service4);
  localStorage.setItem("val7", service1);
  localStorage.setItem("val8", des1);
  localStorage.setItem("val9", service2);
  localStorage.setItem("val10", des2);
  localStorage.setItem("val11", service3);
  localStorage.setItem("val12", des3);
  localStorage.setItem("val13", service4);
  localStorage.setItem("val14", des4);
  localStorage.setItem("val15", project1);
  localStorage.setItem("val16", prodescription1);
  localStorage.setItem("val17", project2);
  localStorage.setItem("val18", prodescription2);
  localStorage.setItem("val19", project3);
  localStorage.setItem("val20", prodescription3);
  localStorage.setItem("val21", project4);
  localStorage.setItem("val22", prodescription4);
  localStorage.setItem("val23", whoyou);
  localStorage.setItem("val24", whodes);
  localStorage.setItem("val25", contact1);
  localStorage.setItem("val26", contact2);
  localStorage.setItem("val27", email1);
  localStorage.setItem("val28", email2);
  localStorage.setItem("val29", address);
};

document.getElementById("uid1").innerHTML = localStorage.getItem("val1");
document.getElementById("uid2").innerHTML = localStorage.getItem("val2");
document.getElementById("uid3").innerHTML = localStorage.getItem("val3");
document.getElementById("uid4").innerHTML = localStorage.getItem("val4");
document.getElementById("uid5").innerHTML = localStorage.getItem("val5");
document.getElementById("uid6").innerHTML = localStorage.getItem("val6");
document.getElementById("uid7").innerHTML = localStorage.getItem("val7");
document.getElementById("uid8").innerHTML = localStorage.getItem("val8");
document.getElementById("uid9").innerHTML = localStorage.getItem("val9");
document.getElementById("uid10").innerHTML = localStorage.getItem("val10");
document.getElementById("uid11").innerHTML = localStorage.getItem("val11");
document.getElementById("uid12").innerHTML = localStorage.getItem("val12");
document.getElementById("uid13").innerHTML = localStorage.getItem("val13");
document.getElementById("uid14").innerHTML = localStorage.getItem("val14");
document.getElementById("uid15").innerHTML = localStorage.getItem("val15");
document.getElementById("uid16").innerHTML = localStorage.getItem("val16");
document.getElementById("uid17").innerHTML = localStorage.getItem("val17");
document.getElementById("uid18").innerHTML = localStorage.getItem("val18");
document.getElementById("uid19").innerHTML = localStorage.getItem("val19");
document.getElementById("uid20").innerHTML = localStorage.getItem("val20");
document.getElementById("uid21").innerHTML = localStorage.getItem("val21");
document.getElementById("uid22").innerHTML = localStorage.getItem("val22");
document.getElementById("uid23").innerHTML = localStorage.getItem("val23");
document.getElementById("uid24").innerHTML = localStorage.getItem("val24");
document.getElementById("uid25").innerHTML = localStorage.getItem("val25");
document.getElementById("uid26").innerHTML = localStorage.getItem("val26");
document.getElementById("uid27").innerHTML = localStorage.getItem("val27");
document.getElementById("uid28").innerHTML = localStorage.getItem("val28");
document.getElementById("uid29").innerHTML = localStorage.getItem("val29");
