function $(par) {
  return document.getElementById(par);
}
function $$(par) {
  return document.getElementsByClassName(par);
}
let bienmat = document.querySelector("#main-2");
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

let name3 = localStorage.getItem("nguoidung");
$("name").innerText = name3;
$("name2").innerText = name3;
let dulieukhoahoc1 = localStorage.getItem(".khoahoc .text1");
$("thongbao-1").innerText = dulieukhoahoc1;
let dulieukithi1 = localStorage.getItem(".kithi .text1");
$("thongbao-1").innerText = dulieukithi1;
$("lichsukhoahoc").onclick = function () {
  $("thongbao-1").innerText = dulieukhoahoc1;
};
$("lichsukithi").onclick = function () {
  $("thongbao-1").innerText = dulieukithi1;
};
$("lichsu").onclick = function () {
  $("thongbao-1").innerText = dulieukithi1 + dulieukhoahoc1;
};
let sudung1 = localStorage.getItem("hienthi1");
$("nhatkihoatdong").onclick = function () {
  $("thongbao-1").innerText = sudung1;
};
