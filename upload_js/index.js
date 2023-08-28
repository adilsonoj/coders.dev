const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault()
    const file = document.getElementById("file").files[0];

    document.getElementById("fileName").value = file.name

    const size = `${(file.size / 1000).toFixed(2)} kb`
    document.getElementById("fileSize").value = size
}