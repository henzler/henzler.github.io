// Main PDF export function using html2pdf
function exportCVPDF(element) {
    
    const opt = {
        filename: 'henzler_cv.pdf',
        margin: [15, 15, 15, 15],  // mm: top, left, bottom, right
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
            mode: ['avoid-all', 'css'],
        }
    };
    const root = document.documentElement;
    root.classList.add('pdf-export');
    const cleanup = () => root.classList.remove('pdf-export');
    // The PDF font is only requested once pdf-export applies; wait for it so
    // html2canvas doesn't capture a fallback font.
    const pdfFonts = ['400 1em "Charis SIL"', '700 1em "Charis SIL"', 'italic 400 1em "Charis SIL"']
        .map(font => document.fonts.load(font));
    Promise.all(pdfFonts).catch(() => {}).then(() =>
        html2pdf().set(opt).from(element).save().then(cleanup, cleanup));
}

$(document).ready(function() {
    $("#save-pdf-button").click(function() {
        const element = document.getElementById('cv-content');
        exportCVPDF(element);
    });
});