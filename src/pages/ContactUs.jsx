// import React, { useState } from "react";

// export default function ContactUs() {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });
//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", form);
//     alert("Thank you for contacting us, " + form.name + "!");
//     setForm({ name: "", email: "", message: "" });
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="max-w-lg mx-auto mt-20 space-y-4 h-[70vh] "
//     >
//       <div>
//         <label className="block font-medium mb-1">Name</label>
//         <input
//           type="text"
//           name="name"
//           value={form.name}
//           onChange={handleChange}
//           required
//           className="w-full border rounded px-3 py-2"
//         />
//       </div>
//       <div>
//         <label className="block font-medium mb-1">Email</label>
//         <input
//           type="email"
//           name="email"
//           value={form.email}
//           onChange={handleChange}
//           required
//           className="w-full border rounded px-3 py-2"
//         />
//       </div>
//       <div>
//         <label className="block font-medium mb-1">Message</label>
//         <textarea
//           name="message"
//           rows="5"
//           value={form.message}
//           onChange={handleChange}
//           required
//           className="w-full border rounded px-3 py-2"
//         />
//       </div>
//       <button
//         type="submit"
//         className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
//       >
//         Send Message
//       </button>
//     </form>
//   );
// }
