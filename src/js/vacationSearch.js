
/**
 * Vacation Search Form functionality
 */
export function initVacationSearch() {
  // Initialize custom select elements
  const initCustomSelects = () => {
    const selectElements = document.querySelectorAll('.custom-select');
    
    selectElements.forEach(select => {
      // Set initial data-value attribute
      const selectedValue = select.options[select.selectedIndex].text;
      select.parentNode.setAttribute('data-value', selectedValue);
      
      // Update on change
      select.addEventListener('change', function() {
        const selectedValue = this.options[this.selectedIndex].text;
        this.parentNode.setAttribute('data-value', selectedValue);
      });
    });
  };

  // Handle form submission
  const setupSearchForm = () => {
    const searchBtn = document.getElementById('search-btn');
    if (!searchBtn) return;
    
    searchBtn.addEventListener('click', function() {
      const formData = {
        destination: document.getElementById('destination').value,
        duration: document.getElementById('duration').value,
        budget: document.getElementById('budget').value,
        season: document.getElementById('season').value,
        travelMode: document.getElementById('travel-mode').value,
        luxuryLevel: document.getElementById('luxury-level').value,
      };
      
      // Validate form data
      const requiredFields = ['destination'];
      const isValid = validateFormData(formData, requiredFields);
      
      if (isValid) {
        // In a real application, this would send data to a server
        console.log('Form data:', formData);
        
        // Show success message (placeholder)
        showSearchResults(formData);
      }
    });
  };
  
  // Validate form data
  const validateFormData = (data, requiredFields) => {
    let isValid = true;
    
    requiredFields.forEach(field => {
      if (!data[field]) {
        isValid = false;
        const inputElement = document.getElementById(field);
        if (inputElement) {
          inputElement.classList.add('error');
          
          // Remove error class when user starts typing
          inputElement.addEventListener('input', function() {
            this.classList.remove('error');
          }, { once: true });
        }
      }
    });
    
    if (!isValid) {
      alert('Please fill in all required fields.');
    }
    
    return isValid;
  };
  
  // Show search results (placeholder for now)
  const showSearchResults = (formData) => {
    alert(`Searching for your perfect vacation to ${formData.destination || 'your dream destination'}!`);
    
    // Here you would typically:
    // 1. Show a loading indicator
    // 2. Send an API request to get vacation options
    // 3. Display results in a new section or modal
  };
  
  // Initialize everything
  initCustomSelects();
  setupSearchForm();
}

// Auto-initialize when included directly in the page
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', initVacationSearch);
}
