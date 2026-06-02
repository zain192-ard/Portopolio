function sendToWhatsApp() {
  // Ganti dengan nomor WhatsApp Anda (format: 628xxxxxxxxxx)
  const phoneNumber = "6281357691430";

  // Ambil nilai dari input form
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Format pesan untuk URL WhatsApp
  const formattedMessage = encodeURIComponent(`Halo, saya ${name}.\n\nEmail: ${email}\n\nPesan: ${message}`);

  // Buat URL lengkap
  const url = `https://wa.me/${phoneNumber}?text=${formattedMessage}`;

  // Buka WhatsApp di tab baru
  window.open(url, "_blank");
}
