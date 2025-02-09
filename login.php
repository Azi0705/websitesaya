<?php
session_start();
include 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $stmt = $conn->prepare("SELECT id, nama, password, status FROM resellers WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();
    $stmt->bind_result($id, $nama, $hashed_password, $status);

    if ($stmt->num_rows > 0) {
        $stmt->fetch();
        if (password_verify($password, $hashed_password)) {
            if ($status == 'approved') {
                $_SESSION['reseller_id'] = $id;
                $_SESSION['nama'] = $nama;
                header("Location: dashboard.php");
            } else {
                echo "<script>alert('Akun belum disetujui admin.'); window.location='login.html';</script>";
            }
        } else {
            echo "<script>alert('Password salah!'); window.location='login.html';</script>";
        }
    } else {
        echo "<script>alert('Email tidak ditemukan!'); window.location='login.html';</script>";
    }
}
?>
