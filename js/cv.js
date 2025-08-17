// Modern browser PDF generation using window.print() API
function exportCVPDF() {
    // Add PDF-specific class for styling
    document.body.classList.add('pdf-export');
    
    // Hide any elements that might interfere with print
    const elementsToHide = document.querySelectorAll('.external-link, .portrait-column');
    elementsToHide.forEach(el => el.style.display = 'none');
    
    // Use the browser's native print-to-PDF functionality
    window.print();
    
    // Clean up after print (whether successful or cancelled)
    setTimeout(() => {
        document.body.classList.remove('pdf-export');
        elementsToHide.forEach(el => el.style.display = '');
    }, 1000);
}

// Fallback html2pdf function with improved settings
function exportCVPDF_Fallback(element) {
    console.log('Using fallback PDF generation...');
    
    var opt = {
        margin: [0.5, 0.4, 0.5, 0.4], // top, left, bottom, right
        filename: 'philipp_henzler_cv.pdf',
        image: { 
            type: 'jpeg', 
            quality: 0.95 
        },
        html2canvas: {
            scale: 1.5,
            useCORS: true,
            logging: true,
            letterRendering: true,
            allowTaint: true,
            backgroundColor: '#ffffff',
            width: 850,  // Fixed width to prevent cutoff
            windowWidth: 850,
            dpi: 96,
            scrollX: 0,
            scrollY: 0
        },
        jsPDF: { 
            unit: 'in', 
            format: 'letter', 
            orientation: 'portrait',
            putOnlyUsedFonts: true,
            compress: true
        },
        pagebreak: { 
            mode: ['avoid-all', 'css'],
            avoid: '.page-break-avoid'
        }
    };
    
    // Add PDF-specific styling class
    element.classList.add('pdf-export');
    
    html2pdf().set(opt).from(element).save().then(() => {
        element.classList.remove('pdf-export');
    }).catch((error) => {
        console.error('PDF generation failed:', error);
        element.classList.remove('pdf-export');
    });
}

$(document).ready(function() {
    $("#save-pdf-button").click(function() {
        const element = document.getElementById('cv-content');
        
        // Try modern browser print first, fallback to html2pdf
        if ('print' in window) {
            exportCVPDF();
        } else {
            exportCVPDF_Fallback(element);
        }
    });
});

  