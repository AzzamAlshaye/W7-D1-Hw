// import React from "react";

// const courseData = [
//   {
//     title: "Full-Stack Web Development",
//     description: "Learn React, Node.js, Express, and MongoDB.",
//     duration: "12 weeks",
//   },
//   {
//     title: "Mobile App Development",
//     description: "Build cross-platform apps with Flutter and Dart.",
//     duration: "8 weeks",
//   },
//   {
//     title: "UI/UX Design Fundamentals",
//     description: "Master user-centered design principles and tools.",
//     duration: "6 weeks",
//   },
// ];

// export default function CoursesPage() {
//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 h-[80vh] items-center justify-center text-center px-5">
//       {courseData.map(({ title, description, duration }, idx) => (
//         <div
//           key={idx}
//           className="border rounded-lg p-6 shadow hover:shadow-lg transition h-50"
//         >
//           <h2 className="text-2xl font-semibold mb-2">{title}</h2>
//           <p className="mb-4">{description}</p>
//           <span className="text-sm font-medium text-gray-600">
//             Duration: {duration}
//           </span>
//         </div>
//       ))}
//     </div>
//   );
// }
