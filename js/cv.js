// Main PDF export function using html2pdf
function exportCVPDF(element) {
    
    const opt = {
        filename: 'henzler_cv.pdf',
        margin: [6,0,6,0],
        html2canvas: {
            scale: 5,
            letterRendering: true,
            useCORS: true,
            // removeContainer: true
        },
        jsPDF: { 
            unit: 'mm', 
            format: 'a4', 
            orientation: 'portrait',
            // putOnlyUsedFonts: true,
            // compress: false,
            // hotfixes: ['px_scaling']
        },
        pagebreak: { 
            mode: ['avoid-all'],
        }
    };
    html2pdf().set(opt).from(element).save();
}

$(document).ready(function() {
    $("#save-pdf-button").click(function() {
        const element = document.getElementById('cv-content');
        exportCVPDF(element);
    });
});