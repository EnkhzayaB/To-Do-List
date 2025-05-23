// import { useState } from "react";

// function Test() {
//   //   const [name, setName] = useState("");
//   //   const [email, setEmail] = useState("");
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//   });

//   return (
//     <div className="container">
//       <div className="flex flex-col gap-[10px] items-center h-[300px] justify-center">
//         <input
//           type="text"
//           className="h-[40px] border w-[220px] border-[#e4e4e7] rounded-md pl-4"
//           placeholder="Name"
//           value={formData.name}
//           onChange={(event) =>
//             setFormData({ ...formData, name: event.target.value })
//           }
//           //   value={name}
//           //   onChange={(event) => setName(event.target.value)}
//         />
//         <input
//           type="email"
//           className="h-[40px] border w-[220px] border-[#e4e4e7] rounded-md pl-4"
//           placeholder="Email"
//           value={formData.email}
//           onChange={(event) =>
//             setFormData({ ...formData, email: event.target.value })
//           }
//           //   value={email}
//           //   onChange={(event) => setEmail(event.target.value)}
//         />
//         <input
//           type="number"
//           className="h-[40px] border w-[220px] border-[#e4e4e7] rounded-md pl-4"
//           placeholder="Phone"
//           value={formData.email}
//           onChange={(event) =>
//             setFormData({ ...formData, phone: event.target.value })
//           }
//         />
//         <input
//           type="text"
//           className="h-[40px] border w-[220px] border-[#e4e4e7] rounded-md pl-4"
//           placeholder="address"
//           value={formData.email}
//           onChange={(event) =>
//             setFormData({ ...formData, address: event.target.value })
//           }
//         />
//         <button className="h-[40px] border w-[180px] border-[#e4e4e7] rounded-md pl-4 bg-blue-500">
//           <p className="flex items-center text-white">submit</p>
//         </button>
//         <div className="flex flex-col items-center justify-center">
//           <p>name: {formData.name}</p>
//           <p>email: {formData.email}</p>
//           <p>phone: {formData.phone}</p>
//           <p>address: {formData.address}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Test;

// 2 // import { useState } from "react";

// function Test() {
//   const language = [
//     { id: 1, name: "typescript" },
//     { id: 2, name: "javascript" },
//     { id: 3, name: "ruby" },
//     { id: 4, name: "go" },
//     { id: 5, name: "rust" },
//     { id: 6, name: "python" },
//     { id: 7, name: "node js" },
//     { id: 8, name: "next js" },
//   ];

//   return (
//     <div className="container flex flex-col items-center justify-center gap-1 pt-6">
//       <div className="bg-slate-50 border border-slate-400 w-[500px] h-[45px] rounded-md flex items-center gap-2 pl-1 py-1 flex-wrap overflow-auto">
//         {labels.map((label)=> {
//             return (
//                 <div className="bg-blue-100 text-blue-800 text-xs font-medium py-0.5 px-1 rounded-sm dark:bg:gray-700 dark:text-blue-400 border border-blue-400 flex items-center gap-1 justify-center">
//                     {label}
//                 </div>
//             )
//         })}
//       </div>
//     </div>
//   );
// }

// export default Test;

// // 3
// import { useState } from "react";
// import Notes from "./Notes";
// function Test() {
//   const [inputValue, setInputValue] = useState("");
//   const [note, setNote] = useState([""]);
//   const createTask = () => {
//     const newTask = [
//       {
//         id: Math.random(),
//         text: inputValue,
//         status: "true",
//       },
//     ];
//     setNote(newTask);
//     setInputValue("");
//   };
//   //   []
//   // [
//   //     {
//   //       id: 1,
//   //       text: "sdssds",
//   //       status: "true",
//   //     },
//   // {
//   //     id: 2,
//   //     text: "aaaaa"
//   // }
//   //   ];
//   //   []
//   //   {
//   //   //     id: 2,
//   //   //     text: "aaaaa"
//   //   // }
//   console.log("log", note);

//   return (
//     <div className="container">
//       <div className="flex justify-center bg-[#f3f4f6] h-screen w-screen">
//         <div className="w-[420px] size-fit bg-white mt-[60px] shadow-md rounded-xl py-[24px] px-[16px] flex flex-col items-center">
//           {/* input*/}
//           <div className="flex flex-col w-full gap-5">
//             <h1 className="text-xl font-semibold text-center text-black">
//               Note Taker
//             </h1>
//             <div className="flex flex-col gap-[12px] items-center">
//               <input
//                 type="text"
//                 className="h-[40px] border w-full  border-[#000000] rounded-md pl-4"
//                 placeholder="Add a new task..."
//                 onChange={(event) => {
//                   setInputValue(event.target.value);
//                 }}
//                 value={inputValue}
//               />
//               <button
//                 className="border border-black rounded-md w-[360px] bg-blue-500 text-white"
//                 onClick={createTask}
//               >
//                 Add note
//               </button>
//             </div>
//             <Notes text={inputValue.text} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Test;
