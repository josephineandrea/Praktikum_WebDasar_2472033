fetch("./CoffeeShop.json")
    .then(hasil=>hasil.json())
    .then(data =>{
        data.forEach(element => {
            let kotak = document.querySelector("#container");

            let kartuKopi = document.createElement("div");
            kartuKopi.className = "kartuKopi";
            kartuKopi.innerHTML = `
                <img class="gambar" src="${element.img}" alt="">
                <h2 class="judul">${element.nama}</h2>
                <p class="desc">${element.desc}</p>
                <p class="harga">${element.harga}</p>
            `
            kotak.appendChild(kartuKopi);
        });
});