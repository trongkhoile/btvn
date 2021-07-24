let a=prompt("nhập số từ 4 đến 20")
if (a <4  || a > 20){
 console.log("số bạn điền không hợp lệ")
} 

else if (a >3 || a <21) {
for (var i = 4; i <= Number(a); i++){
    if (i % 2 == 0){
        console.log(i);
    }
}
}