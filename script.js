document.addEventListener("DOMContentLoaded", function() {
    const popupBanner = document.getElementById("popup-banner");
    const closeBtn = document.querySelector(".close-btn");

    // Tampilkan pop-up setelah 2 detik
    setTimeout(() => {
        popupBanner.style.display = "block";
    }, 2000);

    // Tutup pop-up jika tombol close diklik
    closeBtn.addEventListener("click", function() {
        popupBanner.style.display = "none";
    });

    // Efek smooth scrolling ke bagian halaman saat klik navbar
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetSection = document.querySelector(this.getAttribute("href"));
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const popupBanner = document.getElementById("popup-banner");
    const closeBtn = document.querySelector(".close-btn");
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".navbar nav ul");

    // Pastikan elemen ditemukan sebelum menambahkan event listener
    if (popupBanner && closeBtn) {
        // Tampilkan pop-up setelah 2 detik
        setTimeout(() => {
            popupBanner.style.display = "block";
        }, 2000);

        // Tutup pop-up jika tombol close diklik
        closeBtn.addEventListener("click", function() {
            popupBanner.style.display = "none";
        });
    }

    // Pastikan elemen menu hamburger ditemukan sebelum dipanggil
    if (menuToggle && navMenu) {
        // Menu Hamburger Toggle
        menuToggle.addEventListener("click", function() {
            navMenu.classList.toggle("active");
        });
    }

    // Efek smooth scrolling ke bagian halaman saat klik navbar
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetSection = document.querySelector(this.getAttribute("href"));
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const packages = document.querySelectorAll(".package");

    packages.forEach(pkg => {
        pkg.addEventListener("click", function () {
            packages.forEach(p => p.classList.remove("selected"));
            this.classList.add("selected");
        });
    });
});

function confirmOrder() {
    const playerId = document.getElementById("player-id").value;
    const selectedPackage = document.querySelector(".package.selected");

    if (!playerId || !selectedPackage) {
        alert("Harap isi ID Pemain dan pilih paket terlebih dahulu!");
        return;
    }

    alert(`Pesanan berhasil untuk ID: ${playerId}, Paket: ${selectedPackage.textContent}`);
}
