function $(par) {
  return document.getElementById(par);
}
function $$(par) {
  return document.getElementsByClassName(par);
}
let bienmat = document.querySelector(".main");
$("tinnhan").style.display = "none";
$("thongbao").style.display = "none";
$("nhacnho").style.display = "none";
$("dangxuat").style.display = "none";
$("icon-tinnhan").onclick = function () {
  $("tinnhan").style.display = "block";
  $("thongbao").style.display = "none";
  $("nhacnho").style.display = "none";
  $("dangxuat").style.display = "none";
};
bienmat.onclick = function () {
  $("tinnhan").style.display = "none";
  $("thongbao").style.display = "none";
  $("nhacnho").style.display = "none";
  $("dangxuat").style.display = "none";
};
$("icon-thongbao").onclick = function () {
  $("thongbao").style.display = "block";
  $("nhacnho").style.display = "none";
  $("dangxuat").style.display = "none";
  $("tinnhan").style.display = "none";
};
$("icon-nhacnho").onclick = function () {
  $("nhacnho").style.display = "block";
  $("tinnhan").style.display = "none";
  $("thongbao").style.display = "none";
  $("dangxuat").style.display = "none";
};
$("icon-dangxuat").onclick = function () {
  $("dangxuat").style.display = "block";
  $("tinnhan").style.display = "none";
  $("thongbao").style.display = "none";
  $("nhacnho").style.display = "none";
};
// Tên người dùng
let name4 = localStorage.getItem("nguoidung");
$("namename").innerText = name4;
$("namename1").innerText = name4;
//sử dụng gần đây
$("kithia").onclick = function () {
  for (let i = 0; i < $$("khoahoc").length; i++) {
    $$("khoahoc")[i].style.display = "none";
  }
  for (let i = 0; i < $$("kithi").length; i++) {
    $$("kithi")[i].style.display = "block";
  }
};
$("khoahoca").onclick = function () {
  for (let i = 0; i < $$("kithi").length; i++) {
    $$("kithi")[i].style.display = "none";
  }
  for (let i = 0; i < $$("khoahoc").length; i++) {
    $$("khoahoc")[i].style.display = "block";
  }
};
const sudungganday = [];
let textkhoahoc2 = [];
let textkithi2 = [];
for (let i = 0; i < $$("khoahoc").length; i++) {
  $$("khoahoc")[i].onclick = function () {
    let l = document.querySelectorAll(".khoahoc .text1");
    sudungganday.push(l[i].innerText);
    $("hienthi1").innerText = sudungganday.join("\n");
    localStorage.setItem("hienthi1", sudungganday);
    // *************************************************
    let textkhoahoc = document.querySelectorAll(".khoahoc .text1");
    let dulieukhoahoc = textkhoahoc[i].innerText;
    if (textkhoahoc2.includes(dulieukhoahoc)) {
    } else textkhoahoc2.push(dulieukhoahoc);
    localStorage.setItem(".khoahoc .text1", textkhoahoc2);
  };
}
for (let i = 0; i < $$("kithi").length; i++) {
  $$("kithi")[i].onclick = function () {
    let n = document.querySelectorAll(".kithi .text1");
    sudungganday.push(n[i].innerText);
    $("hienthi1").innerText = sudungganday.join("\n");
    // *************************************************
    let textkithi = document.querySelectorAll(".kithi .text1");
    let dulieukithi = textkithi[i].innerText;
    if (textkithi2.includes(dulieukithi)) {
    } else textkithi2.push(dulieukithi);
    localStorage.setItem(".kithi .text1", textkithi2);
  };
}
//tìm kiếm
$("btn").onclick = function a() {
  let menusearch = document.querySelector("#search1");
  let menuitem1 = Array.from(document.querySelectorAll(".khoahoc .text1"));
  let menuitem2 = Array.from(document.querySelectorAll(".kithi .text1"));
  let menukhoahoc = Array.from(document.querySelectorAll(".khoahoc"));
  let menukithi = Array.from(document.querySelectorAll(".kithi"));
  for (let i = 0; i < menuitem1.length; i++) {
    let text2 = menuitem1[i].innerText;
    if (text2.indexOf(menusearch.value) > -1) {
      menukhoahoc[i].style.display = "block";
    } else {
      menukhoahoc[i].style.display = "none";
    }
  }
  for (let i = 0; i < menuitem2.length; i++) {
    let text3 = menuitem2[i].innerText;
    if (text3.indexOf(menusearch.value) > -1) {
      menukithi[i].style.display = "block";
    } else {
      menukithi[i].style.display = "none";
    }
  }
};
for (let index = 1; index < 13; index++) {
  $("khoi" + index).onclick = () => {
    for (let position = 1; position < 13; position++) {
      for (
        let i = 0;
        i <
        Array.from(document.getElementsByClassName("lop" + position)).length;
        i++
      ) {
        Array.from(document.getElementsByClassName("lop" + position))[
          i
        ].style.display = "none";
      }
      for (
        let i = 0;
        i < Array.from(document.getElementsByClassName("lop" + index)).length;
        i++
      ) {
        Array.from(document.getElementsByClassName("lop" + index))[
          i
        ].style.display = "";
      }
    }
  };
}
