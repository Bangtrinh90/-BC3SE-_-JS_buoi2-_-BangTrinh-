
    
// // Tinh Luong NV

var btnTinhLuong = document.getElementById("btnTinhLuong");
btnTinhLuong.onclick = function () {

// Dau vao: lấy thông tin
const LUONG_NGAY = 100000;
var soNgayLam = document.getElementById("soNgayLam").value * 1;

// Xử lý
var tongLuong = soNgayLam * LUONG_NGAY;

//format
var currentFormat = new Intl.NumberFormat("VN-vn");

var ketQua = "<p class='alert alert-success'>Tổng lương là: " + currentFormat.format(tongLuong) + " VND </p>"

// Đầu ra
document.getElementById("tinhluongNV").innerHTML = ketQua;
}

// //BT2 Tinh gia tri TB

document.getElementById("btnGiaTriTB").onclick = function () {

// dau vao
var number1 = document.getElementById("number1").value *1;
var number2 = document.getElementById("number2").value *1;
var number3 = document.getElementById("number3").value *1;
var number4 = document.getElementById("number4").value *1;
var number5 = document.getElementById("number5").value *1;

// xu ly
var giaTriTB = (number1 + number2 + number3 + number4 + number5) / 5;

// dau ra
var ketQua2 = "<p>Giá trị trung bình: " + giaTriTB + "</p>";

document.getElementById("GiaTriTB").innerHTML = ketQua2;

}

// BT3 Quy doi USD
document.getElementById("btnTongUSD").onclick = function () {

//dau vao
var nhapUSD = document.getElementById("nhapUSD").value *1;

const USD = 23500;

// xu ly
var vnd = nhapUSD * USD;

//format
var currentFormat = new Intl.NumberFormat("VN-vn")

// dau ra
var ketQua3 = "<p>Tổng tiền quy đổi: " + currentFormat.format(vnd) + " VND</p>" 
document.getElementById("TongUSD").innerHTML = ketQua3;

}

// BT4 HCN
document.getElementById("btncongThucHCN").onclick = function () {

    //dau vao

    var dai = document.getElementById("cDai").value *1;
    var rong = document.getElementById("cRong").value *1;
    
    // xu ly

    var chuVi = (dai + rong) * 2;
    var dienTich = dai * rong;
    
    // dau ra

    var ketQua4 = "<p>Chu vi hình chữ nhật: " + chuVi + "</p>"; 
    ketQua4 += "<p>Diện tích hình chữ nhật: " + dienTich + "</p>"; 

    document.getElementById("congThucHCN").innerHTML = ketQua4;
    
    }


// BT 5 - Tính tổng 2 ký số
    document.getElementById("btntong2KySo").onclick = function () {

        //dau vao
    
        var soNhap = document.getElementById("soNhap").value *1;
                
        // xu ly

        var hangChuc = Math.floor(soNhap / 10);
        var hangDonvi = soNhap % 10
    var tongCong = hangChuc + hangDonvi;
        
        // dau ra
    
        var ketQua5 = "<p>Tổng 2 ký số: " + tongCong + "</p>"; 
        
        document.getElementById("tong2KySo").innerHTML = ketQua5;
                }

