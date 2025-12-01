window.onload = () => {
    // 1. Trigger CSS Animations
    document.documentElement.classList.add('loaded');
  
    // 2. Icon Arrays
    const icons = [
      "compass.png","buck.png","hatchet.png","trinity.png","fire.png","teepee.png",
      "cross.png","bow.png","guitar.png","wood.png","fish.png","shoes.png",
      "books.png","beef.png","phone.png","bread.png"
    ];
  
    // 3. Get Slots (Using IDs s1-s4 to match HTML)
    const slots = [
        document.getElementById('s1'),
        document.getElementById('s2'),
        document.getElementById('s3'),
        document.getElementById('s4')
    ];
  
    // Initialize first set of images
    slots[0].src = icons[0]; 
    slots[1].src = icons[5];
    slots[2].src = icons[10]; 
    slots[3].src = icons[15];
  
    // 4. Flip Logic
    let index = 0;
    
    function flipNext() {
      // Determine which card slot to flip (0, 1, 2, or 3)
      const slotIndex = index % 4; 
      
      // Find the parent .flip-card div to apply CSS class
      const card = slots[slotIndex].closest('.flip-card');
      
      // Start Flip
      card.classList.add('flipping');
      
      // Wait for half the animation (when card is invisible/turned), then swap image
      setTimeout(() => {
        // Increment global index through the big list of icons
        index = (index + 1) % icons.length;
        
        // Update the image source
        slots[slotIndex].src = icons[index];
        
        // Remove flip class to reset logic
        card.classList.remove('flipping');
      }, 600); 
    }
  
    // Start loop
    setTimeout(() => { 
        flipNext(); 
        setInterval(flipNext, 2200); 
    }, 1500);
  };