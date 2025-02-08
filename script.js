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
