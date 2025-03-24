// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function Todolist() {
//     const [dolist,setlist]=useState([]);
//     useEffect(() => {
//         axios.get("http://localhost:3001/todos")
//           .then((result) => {
//             console.log("Fetched data:", result.data); // Debugging
//             setlist(result.data);
//           })
//           .catch((error) => {
//             console.error("Error while fetching data:", error);
//           });
//       }, []);
//   return (
//     <>
//    {
//     dolist.length > 0 ? (
//       dolist.map( todo => (
//           <p >todo</p>  // ✅ Safe key handling
//       ))
//   ) : (
//       <p>No tasks available</p>
//   )
//    }
//     </>
//   )
// }

// export default Todolist