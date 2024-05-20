



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
 
   const svg = document.getElementById('clockSVG');
   const viewBoxWidth = 500;
   const viewBoxHeight = 500;
   const radius =200;
   const center = { x: viewBoxWidth / 2, y: viewBoxHeight / 2 };

   // Create clock face
   const clockFace = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
   clockFace.setAttribute('class', 'clock');
   clockFace.setAttribute('cx', center.x);
   clockFace.setAttribute('cy', center.y);
   clockFace.setAttribute('r', radius);
   svg.appendChild(clockFace);

   // Create angle markers
   const markers = document.createElementNS('http://www.w3.org/2000/svg', 'g');
   markers.setAttribute('class', 'markers');
   for (let i = 0; i < 360; i += 15) {
       const angle = i * (Math.PI / 180); // Convert degrees to radians
       const markerX1 = center.x + (radius - 2) * Math.cos(angle);
       const markerY1 = center.y + (radius - 2) * Math.sin(angle);
       const markerX2 = center.x + radius * Math.cos(angle);
       const markerY2 = center.y + radius * Math.sin(angle);
       const marker = document.createElementNS('http://www.w3.org/2000/svg', 'line');
       marker.setAttribute('class', 'marker1');
       marker.setAttribute('x1', markerX1);
       marker.setAttribute('y1', markerY1);
       marker.setAttribute('x2', markerX2);
       marker.setAttribute('y2', markerY2);

       // Add angle text
       const angleText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
       angleText.setAttribute('class', 'angle-text');
       angleText.setAttribute('x', markerX2);
       angleText.setAttribute('y', markerY2);
       angleText.textContent = i.toString(); // Set angle value
       markers.appendChild(marker);
       markers.appendChild(angleText);
   }
   svg.appendChild(markers);