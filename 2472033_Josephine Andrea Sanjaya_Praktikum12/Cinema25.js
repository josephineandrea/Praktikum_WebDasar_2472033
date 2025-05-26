let seeBtn = document.querySelector(".seeButton");
seeBtn.addEventListener("click",()=>{
    seeBtn.style.display = "none";
    fetch("./Datamovie.json")
        .then(hasil=>hasil.json())
        .then(data =>{
            data.forEach(element => {
                let kotak = document.querySelector("#wadahMovie");

                let kartuMovie = document.createElement("div");
                kartuMovie.className = "kartuMovie";
                kartuMovie.innerHTML = `
                    <img class="gambar" src="${element.img}" alt="">
                    <h4 class="judulMovie">${element.title}</h4>
                    <p class="genre">${element.genre}</p>
                `
                kotak.appendChild(kartuMovie);
            });
    });
})