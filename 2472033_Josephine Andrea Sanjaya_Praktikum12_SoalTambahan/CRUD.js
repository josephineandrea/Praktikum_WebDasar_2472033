let daftarProduk = JSON.parse(localStorage.getItem("daftarProduk"));
let currentId = null;

function generateId() {
    let maks = 0;
    for (let product of daftarProduk) {
        if (product.id > maks) {
            maks = product.id;
        }
    }
    return maks + 1;
}

function saveAndRender() {
    localStorage.setItem("daftarProduk", JSON.stringify(daftarProduk));
    renderTable();
    resetForm();
}

function renderTable() {
    let isiTabel = document.getElementById("tableBody");
    isiTabel.innerHTML = "";

    if (daftarProduk.length === 0) {
        isiTabel.innerHTML = `<tr><td colspan="6" class="none">Tidak ada produk</td></tr>`;
        return;
    }

    for (let product of daftarProduk) {
        let baris = document.createElement("tr");
        baris.innerHTML = `
            <td>${product.id}</td>
            <td>${product.nama}</td>
            <td>${product.harga}</td>
            <td>${product.desc}</td>
            <td>${product.stok}</td>
            <td>
                <button class="edit" onclick="editProduct(${product.id})">Edit</button>
                <button class="hapus" onclick="deleteProduct(${product.id})">Hapus</button>
            </td>
        `;
        isiTabel.appendChild(baris);
    }
}

function resetForm() {
    document.getElementById("namaProduk").value = "";
    document.getElementById("hargaProduk").value = "";
    document.getElementById("stokProduk").value = "";
    document.getElementById("descProduk").value = "";
    document.getElementById("submitBtn").textContent = "Tambah Produk";
    currentId = null;
}

function addProduct(product) {
    product.id = generateId();
    daftarProduk.push(product);
    saveAndRender();
}

function updateProduct(updatedProduct) {
    for (let i = 0; i < daftarProduk.length; i++) {
        if (daftarProduk[i].id === updatedProduct.id) {
            daftarProduk[i] = updatedProduct;
            break;
        }
    }
    saveAndRender();
}

function deleteProduct(id) {
    if (confirm("Apakah Anda yakin ingin menghapus produk ini?")) {
        for (let i = 0; i < daftarProduk.length; i++) {
            if (daftarProduk[i].id === id) {
                daftarProduk.splice(i, 1);
                break;
            }
        };
        saveAndRender();
    }
}

function editProduct(id) {
    let product = null;
    for (let i = 0; i < daftarProduk.length; i++) {
        if (daftarProduk[i].id === id) {
            product = daftarProduk[i];
            break;
        }
    };

    if (product) {
        document.getElementById("namaProduk").value = product.nama;
        document.getElementById("hargaProduk").value = product.harga;
        document.getElementById("stokProduk").value = product.stok;
        document.getElementById("descProduk").value = product.desc;
        document.getElementById("submitBtn").textContent = "Update Produk";
        currentId = id;
    }
}

document.getElementById("submitBtn").addEventListener("click", () => {
    let nama = document.getElementById("namaProduk").value.trim();
    let harga = document.getElementById("hargaProduk").value.trim();
    let stok = document.getElementById("stokProduk").value.trim();
    let desc = document.getElementById("descProduk").value.trim();

    let product = {
        id: currentId || generateId(),
        nama,
        harga,
        stok,
        desc,
    };

    if (currentId) {
        updateProduct(product);
    } else {
        addProduct(product);
    }
});

window.onload = renderTable();