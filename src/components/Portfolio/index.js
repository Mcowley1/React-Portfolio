// import React, { useState } from 'react';
// import { Document, Page } from 'react-pdf';
// import resume from './assets/matthews-resume.pdf';

// function Portfolio() {
//         const [numPages, setNumPages] = useState(null);
//         const [pageNumber, setPageNumber] = useState(1);
      
//         function onDocumentLoadSuccess({ numPages }) {
//           setNumPages(numPages);
//         }

//     return(
//         <div>
//             <Document
//                file="matthews-resume.pdf"
//                onLoadSuccess={onDocumentLoadSuccess}
//                >
//                <Page pageNumber={pageNumber} />
//             </Document>
//             <p>Page {pageNumber} of {numPages}</p>
//         </div>

//     )
// }

// export default Portfolio;