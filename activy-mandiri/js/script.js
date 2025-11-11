function fn_ValForm() {
    var sMsg = "";
    var emailPattern = /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Validasi nama
    if (name == "") {
        sMsg += "\n* Anda belum mengisikan nama";
    }

    // Validasi email kosong
    if (email == "") {
        sMsg += "\n* Anda belum mengisikan email";
    } 
    // Validasi email format salah
    else if (!emailPattern.test(email)) {
        sMsg += "\n* Format email tidak valid (contoh: nama@email.com)";
    }

    // Validasi pesan
    if (message == "") {
        sMsg += "\n* Anda belum mengisikan pesan";
    }

    // Tampilkan pesan peringatan
    if (sMsg != "") {
        alert("Peringatan:\n" + sMsg);
        return false;
    } else {
        return true;
    }
}
