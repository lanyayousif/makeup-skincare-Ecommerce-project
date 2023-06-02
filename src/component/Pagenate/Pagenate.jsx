import React from 'react'

function Pagenate({ postsPerPage, totalPosts, paginate, previousPage, nextPage }) {
    const pageNumbers = [];
 
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
       pageNumbers.push(i);
    }
    
    return (
       <div className="pagination-container">
          <ul className="pagination">
             <li onClick={previousPage} className="page-number">
                Prev
             </li>
             {pageNumbers.map((number) => (
                <li
                   key={number}
                   onClick={() => paginate(number)}
                   className="page-number"
                >
                   {number}
                </li>
             ))}
             <li onClick={nextPage} className="page-number">
                Next
             </li>
          </ul>
       </div>
    );
 };

export default Pagenate


//    <Pagenate
//                postsPerPage={postsPerPage}
//                   totalPosts={blogPosts.length}
//                   paginate={paginate}
//                   previousPage={previousPage}
//                   nextPage={nextPage}
//            /> 



// const previousPage = () => {
//     if (currentPage !== 1) {
//        setCurrentPage(currentPage - 1);
//     }
//  };

//  const nextPage = () => {
//     if (currentPage !== Math.ceil(blogPosts.length / postsPerPage)) {
//        setCurrentPage(currentPage + 1);
//     }
//  };