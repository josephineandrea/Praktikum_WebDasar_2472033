function addTugas() {
    let listTugas = prompt("Masukkan hal yang harus dilakukan");
    if(listTugas != "") {
        let tambahIsi = document.createElement("li");
        tambahIsi.innerHTML = listTugas;
        tambahIsi.style.marginBottom = "5px";
        document.querySelector(".isi").appendChild(tambahIsi);

        tambahIsi.addEventListener("click", ()=> {
            let sudahSelesai = confirm("Sudah mengerjakan tugas ini?")
            if(sudahSelesai === true) {
                tambahIsi.style.textDecoration = "line-through";
            }
        })
    }
}

let tambah = document.querySelector(".btn-tambah");
tambah.addEventListener("click",addTugas);