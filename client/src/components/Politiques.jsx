// import React, { useEffect, useState } from 'react';
// import Axios from 'axios';


// const Politiques = () =>{
//     const [data, setData] = useState([])

//     useEffect(() => {
//         Axios.get('http://localhost:8000/getAll')
//         .then(res => {
//             console.log("Getting from ::::", res.data)
//             setData(res.data)
//         }).catch(error=> console.log(error))
//     }, [])

//     const arr = data.map((data, index) => {
//         return (
//             <tbody>
//             <tr>
//               <td>{data.id}</td>
//               {/* <th scope="row">moi</th> */}
//               <td>{data.nom}</td>
//               <td>{data.description}</td>
//               <td>{data.image}</td>
//             </tr>
//           </tbody>
//         )
//     })

//     return(
//         <div>
//             <div>
//             jesuis la Politique
//             <table class="table">
//         <thead>
//             <tr>
//             <th scope="col">id</th>
//             <th scope="col">nom</th>
//             <th scope="col">description</th>
//             <th scope="col">image</th>
//             </tr>
//         </thead>
//             {arr}
//             {arr}
//             {arr}
//         </table>
//             </div>
//         </div>
//     )
// }

// export default Politiques