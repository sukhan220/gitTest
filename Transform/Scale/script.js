



   // Function to create ruler with scale markers
   function createRuler(parent, length, orientation) {
       const ruler = document.createElement('div');
       ruler.classList.add('ruler_' + orientation);
       ruler.style.width = orientation === 'top' ? length + 'px' : '14px';
       ruler.style.height = orientation === 'left' ? length + 'px' : '14px';

       parent.appendChild(ruler);

       for (let i = 0; i <= length; i += 10) {
           const marker = document.createElement('div');
           marker.classList.add('marker');
           marker.style[orientation === 'top' ? 'left' : 'top'] = i + 'px';
           ruler.appendChild(marker);

        //    Add numbers for each centimeter mark
           if (i % 100 === 0) {
               const number = document.createElement('div');
               number.classList.add('number');
               number.textContent = i; // Convert pixels to centimeters
               number.style[orientation === 'top' ? 'left' : 'top'] = (i - 5) + 'px'; // Adjust position for numbers
               ruler.appendChild(number);
           }
       }
   }

   // Function to create block
   function createBlock(parent) {
       const block = document.createElement('div');
       block.classList.add('block');
       block.style.width = '200px';
       block.style.height = '150px';
       block.style.top = '40px';
       block.style.left = '40px';
       parent.appendChild(block);
   }

   // Create rulers and block
   const rulersAndBlock = document.createElement('div');
   rulersAndBlock.id = 'rulers_and_block';
   document.body.appendChild(rulersAndBlock);

   createRuler(rulersAndBlock, 1320, 'top');
   createRuler(rulersAndBlock, 600, 'left');
 