// import React from 'react'
// import './List.css'
// import AdminNavbar from '../../../Components/Admin Navbar/AdminNavbar'
// import Sidebar from '../../../Components/Admin Sidebar/Sidebar'

// const List = () => {
//   return (
//     <div>
//       <div>
//         <AdminNavbar></AdminNavbar>
//         <hr />
//         <div>
//           <Sidebar></Sidebar>
//           </div>
       
//       </div>
//       {/* --------------------------------------------------------- */}


      
//     </div>
//   )
// }

// export default List



import React from 'react';
import './List.css';
import AdminNavbar from '../../../Components/Admin Navbar/AdminNavbar';
import Sidebar from '../../../Components/Admin Sidebar/Sidebar';

const List = () => {
  return (
    <div className="list-container">
      <AdminNavbar />
      <hr />
      <div className="main">
        <Sidebar />
        <div className="main-content">
          <p>123456</p>
         




         
        </div>
      </div>
    </div>
  );
}

export default List;