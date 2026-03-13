const uploadBtn = document.getElementById("uploadBtn");
const fileInput = document.getElementById("fileUpload");

uploadBtn.addEventListener("click", () => {
    fileInput.click();
});

fileInput.addEventListener("change", () => {

    const file = fileInput.files[0];

    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    fetch("/upload", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log("Upload feito:", data);
    })
    .catch(error => {
        console.error("Erro no upload:", error);
    });

});