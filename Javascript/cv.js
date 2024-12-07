//  archivo CV en formato PDF (puedes cambiar la URL)
const cvURL = '../cv/Cv_Juan Pablo Rojas Contreras.pdf';

// Obtener el botón de descarga
const downloadBtn = document.getElementById('downloadBtn');

// Añadir un evento al botón para iniciar la descarga
downloadBtn.addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = cvURL;
    link.download = 'Cv_Juan Pablo Rojas Contreras.pdf'; // Nombre que tendrá el archivo descargado
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});