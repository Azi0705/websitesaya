<?php
include 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nama = $_POST['nama'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);
    $no_hp = $_POST['no_hp'];

    $stmt = $conn->prepare("INSERT INTO resellers (nama, email, password, no_hp) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $nama, $email, $password, $no_hp);

    if ($stmt->execute()) {
        echo "<script>alert('Pendaftaran berhasil! Tunggu persetujuan admin.'); window.location='login.html';</script>";
    } else {
        echo "<script>alert('Pendaftaran gagal! Email mungkin sudah terdaftar.'); window.location='register.html';</script>";
    }
}
?>
