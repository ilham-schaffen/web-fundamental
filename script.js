const phi = 3.14;
function lingkaran(jarijari){
    let luas = phi * jarijari * jarijari;
    alert("Luas lingkaran adalah: " + luas);
}
function kubus(sisi){
    return sisi * sisi * sisi;
}

function tigakubus(satu,dua,tiga){
    let vol1 = kubus(satu);
    let vol2 = kubus(dua);
    let vol3 = kubus(tiga);
    alert("Volume kubus 1: " + vol1 + " | Volume Kubus 2: " + vol2 + " | Volume kubus 3: " + vol3);
}