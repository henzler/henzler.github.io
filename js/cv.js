function exportCVPDF(element) {
    showLinks = false;
    var opt = {
        margin: 8,
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
        filename: 'henzler_cv.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: {
            dpi: 384,
            scale: 4,
            letterRendering: true,
            useCORS: true
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf()
        .set(opt)
        .from(element)
        .save()
        .then(() => {
            showLinks = true;
        });
}

$(document).ready(function() {
    $("#save-pdf-button").click(function() {
      const element = document.getElementById('cv-content');
      console.error(element);
      exportCVPDF(element)
    });
  });

  