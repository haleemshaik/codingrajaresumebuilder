document.addEventListener('DOMContentLoaded', function () {
    const resumeForm = document.getElementById('resumeForm');
    const previewBtn = document.getElementById('previewBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    const previewContainer = document.getElementById('previewContainer');
    const previewContent = document.getElementById('previewContent');
  
    // Function to generate preview of resume
    function generatePreview() {
      const formData = new FormData(resumeForm);
      let previewHTML = '<h3>Preview:</h3><ul>';
  
      formData.forEach((value, key) => {
        previewHTML += `<li><strong>${key}:</strong> ${value}</li>`;
      });
  
      previewHTML += '</ul>';
      previewContent.innerHTML = previewHTML;
      previewContainer.classList.remove('hidden');
    }
  
    // Event listener for preview button
    previewBtn.addEventListener('click', function () {
      generatePreview();
    });
  
    // Event listener for form submission (download)
    resumeForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const formData = new FormData(resumeForm);
      let resumeContent = '';
  
      formData.forEach((value, key) => {
        resumeContent += `${key}: ${value}\n`;
      });
  
      // Generate PDF
      const doc = new jsPDF();
      doc.text(resumeContent, 10, 10); // You might need to adjust the formatting based on your requirements
  
      // Download PDF
      doc.save('resume.pdf');
    });
  });
  