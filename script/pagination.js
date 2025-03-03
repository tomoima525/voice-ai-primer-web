function setupPagination() {
  const sections = document.querySelectorAll('.chapter-row');
  const indicator = document.createElement('div');
  indicator.id = 'page-indicator';
  
  // Style the indicator
  indicator.style.position = 'fixed';
  indicator.style.bottom = '0';
  indicator.style.left = '0';
  indicator.style.right = '0';
  indicator.style.padding = '12px 2rem';
  indicator.style.background = '#fff';
  indicator.style.border = '1px solid var(--border)';
  indicator.style.display = 'flex';
  indicator.style.justifyContent = 'space-between';
  indicator.style.maxWidth = '1600px';
  indicator.style.margin = '0 auto';
  indicator.style.marginBottom = '5px';
  indicator.style.zIndex = '100';
  indicator.style.opacity = '0';
  indicator.style.transition = 'opacity 0.1s ease';
  indicator.style.marginBottom = '5px';

  
  // Create left and right content containers
  const leftContent = document.createElement('div');
  const rightContent = document.createElement('div');
  
  indicator.appendChild(leftContent);
  indicator.appendChild(rightContent);
  
  document.body.appendChild(indicator);

  window.addEventListener('scroll', () => {
    let current = 1;
    let currentHeader = '';
    let currentSubheader = '';
    
    // Get the first section's bottom position to determine when to show the indicator
    const firstSectionBottom = sections[0] ? sections[0].offsetTop + sections[0].offsetHeight : 0;
    
    // Show indicator only after scrolling past the first page
    if (window.scrollY > firstSectionBottom) {
      indicator.style.opacity = '1';
    } else {
      indicator.style.opacity = '0';
    }
    
    sections.forEach((section, i) => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      
      if (window.scrollY >= top && window.scrollY < bottom) {
        current = i + 1;
        
        // Try to get header and subheader from the current section
        const header = section.querySelector('h2, h1')?.textContent || '';
        const subheader = section.querySelector('h3')?.textContent || '';
        
        currentHeader = header;
        currentSubheader = subheader;
      }
    });
    
    // Update content
    leftContent.textContent = `Voice AI & Voice Agents / ${currentHeader} / ${currentSubheader}`;
    rightContent.textContent = `Page ${current} of ${sections.length}`;
  });
}

document.addEventListener('DOMContentLoaded', setupPagination); 