// "use client";

// import React from "react";
// import {
//   Document,
//   Page,
//   Text,
//   View,
//   StyleSheet,
//   PDFDownloadLink,
//   Image as PDFImage,
// } from "@react-pdf/renderer";

// const resumeData = {
//   name: "Georges Ishak",
//   role: "Software Engineer | Full-Stack", // Elite title upgrade
//   profileImage: "/images/my-profile.jpeg",

//   contactLeft: [
//     ["Location", "52224 Stolberg, Germany"],
//     ["Email", "georgesishak112@gmail.com"],
//     ["Nationality", "Lebanese"],
//     ["Website", "stachix.vercel.app"],
//   ],
//   contactRight: [
//     ["Phone", "+49 1525 2873320"],
//     ["Date of birth", "12 Oct. 2000"],
//     ["LinkedIn", "linkedin.com/in/george-ishak-879b7b239"],
//     ["Github", "github.com/GeorgesIshak"],
//   ],

//   profile: [
//     "Senior-level Software Engineer with an Engineer’s Degree and a proven track record in architecting high-performance Next.js applications and scalable enterprise systems.",
//     "Specialized in modular UI architecture, complex API integrations, and delivering client-focused products that bridge modern frontend stacks with robust backend logic.",
//     "Expertise in React, TypeScript, and GSAP, with a deep portfolio of 80+ successful digital solutions across e-commerce, SaaS, and creative platforms.",
//   ],

//   workHistory: [
//     {
//       date: "02/2024 – Present",
//       title: "Full-Stack Developer",
//       company: "Freelance",
//       location: "Remote / Lebanon",
//       subtitle:
//         "Client projects across web platforms, e-commerce, and custom product development.",
//       stack:
//         "Tech stack: Next.js, React, TypeScript, Tailwind CSS, GSAP, Framer Motion, WordPress, Shopify, WooCommerce, REST APIs, Vercel",
//       bullets: [
//         "Built 5+ production web applications using Next.js, API routes, and modern component-based architecture.",
//         "Developed interactive, high-fidelity user interfaces with GSAP and Framer Motion for landing pages, portfolio sites, and business platforms.",
//         "Contributed to scalable platform development including a multi-tenant marketplace and an enterprise messaging platform with scheduling and onboarding flows.",
//         "Integrated REST APIs and collaborated with backend teams to deliver responsive, reliable frontend experiences.",
//         "Managed deployments and CI/CD workflows on Vercel while balancing project timelines, client requirements, and technical constraints.",
//       ],
//     },
//     {
//       date: "03/2023 – 09/2025",
//       title: "WordPress Developer",
//       company: "Klev",
//       location: "Dbayeh, Lebanon",
//       subtitle:
//         "Custom WordPress development, client delivery, and e-commerce implementation.",
//       stack:
//         "Tech stack: WordPress, PHP, JavaScript, HTML, CSS, WooCommerce, ACF, Elementor, REST APIs",
//       bullets: [
//         "Delivered 80+ WordPress websites end-to-end, including local setup, custom themes, reusable components, and production deployment.",
//         "Built custom plugins and widgets using PHP and JavaScript to support project-specific business needs.",
//         "Worked directly with clients to gather requirements, present progress, and translate feedback into functional solutions.",
//         "Developed responsive, SEO-aware websites using ACF, Elementor, WooCommerce, and API integrations.",
//         "Improved performance, maintainability, and stability by fixing bugs, optimizing load times, and refactoring legacy code.",
//       ],
//     },
//   ],

//   education: [
//     {
//       date: "2018 – 2023",
//       title: "Engineer’s Degree in Software Engineering & Networks",
//       place: "Antonine University",
//       location: "Beirut, Lebanon",
//     },
//   ],

//   technicalSkills: [
//     {
//       title: "Frontend",
//       items:
//         "React, Next.js (App Router), TypeScript, Tailwind CSS, GSAP, Framer Motion, HTML5, CSS3",
//     },
//     {
//       title: "Backend & Database",
//       items: "PHP, Laravel, Node.js, Next.js API Routes, Prisma ORM",
//     },
//     {
//       title: "CMS & E-commerce",
//       items:
//         "WordPress, Custom Themes, Custom Plugins, WooCommerce, Advanced Custom Fields (ACF)",
//     },
//     {
//       title: "Other",
//       items:
//         "REST APIs, Technical SEO, Responsive Design, Image Processing, Machine Learning, OpenCV, CNN Model Evaluation",
//     },
//   ],

//   languages: [
//     "Arabic (Mother Tongue)",
//     "English (C1)",
//     "French (B1)",
//     "German (A2, currently in intensive course)"
//   ],

//   certifications: [
//     "Cisco CCNA (Networking Fundamentals: Routing, Switching, Security & Automation)",
//     "PCAP: Python Programming Essentials"
//   ]
// };


// const styles = StyleSheet.create({
//   page: {
//     paddingTop: 36,
//     paddingBottom: 34,
//     paddingHorizontal: 36,
//     backgroundColor: "#f6f6f6",
//     color: "#2f2f2f",
//     fontFamily: "Helvetica",
//     fontSize: 10,
//     lineHeight: 1.45,
//   },

//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     gap: 18,
//   },
//   leftHeader: {
//     flex: 1,
//     paddingRight: 10,
//   },
//   rightHeader: {
//     width: 95,
//     alignItems: "flex-end",
//   },
//   photoWrap: {
//     width: 90,
//     height: 90,
//     borderRadius: 45,
//     overflow: "hidden",
//     backgroundColor: "#a8c8ef",
//   },
//   photo: {
//     width: "100%",
//     height: "100%",
//     objectFit: "cover",
//   },

//   name: {
//     fontSize: 20,
//     fontWeight: 700,
//     letterSpacing: 1.2,
//     color: "#2e2e2e",
//   },
//   role: {
//     marginTop: 10, // more space under your name
//     fontSize: 12,
//     color: "#88a8cf",
//     letterSpacing: 0.8,
//   },
 
// contacts: {
//   marginTop: 16,
//   flexDirection: "row",
//   gap: 12,          // slightly tighter gap
// },
// contactCol: {
//   flex: 1,          // keep left at flex 1
// },
// // Add a separate style for the right column
// contactColRight: {
//   flex: 1.4,        // give it 40% more space
// },
// contactLine: {
//   marginBottom: 4,
//   fontSize: 9.7,
//   lineHeight: 1.35,
// },
//   bold: {
//     fontWeight: 700,
//   },

//   section: {
//     marginTop: 14,
//   },
//   sectionTitle: {
//     fontSize: 11.4,
//     fontWeight: 700,
//     letterSpacing: 1.3,
//     textTransform: "uppercase",
//     color: "#2f2f2f",
//   },
//   divider: {
//     marginTop: 6,
//     height: 1,
//     backgroundColor: "#8cb5e2",
//     width: "100%",
//   },

//   paragraph: {
//     marginTop: 7,
//     fontSize: 9.8,
//     lineHeight: 1.48,
//     color: "#2d2d2d",
//   },

//   job: {
//     marginTop: 11,
//     flexDirection: "row",
//     gap: 10,
//   },
//   jobDate: {
//     width: 94,
//     fontSize: 9.6,
//     color: "#555555",
//   },
//   jobBody: {
//     flex: 1,
//   },
//   jobTitle: {
//     fontSize: 10.5,
//     color: "#88a8cf",
//     letterSpacing: 0.7,
//   },
//   company: {
//     marginTop: 2,
//     fontSize: 10.1,
//     fontWeight: 700,
//     color: "#2f2f2f",
//   },
//   meta: {
//     marginTop: 2,
//     fontSize: 9.6,
//     lineHeight: 1.38,
//     color: "#444444",
//   },

//   bullets: {
//     marginTop: 5,
//   },
//   bulletRow: {
//     flexDirection: "row",
//     alignItems: "flex-start",
//     gap: 6,
//     marginBottom: 3,
//   },
//   bulletDot: {
//     width: 8,
//     fontSize: 10,
//   },
//   bulletText: {
//     flex: 1,
//     fontSize: 9.5,
//     lineHeight: 1.36,
//   },

//   eduRow: {
//     marginTop: 9,
//     flexDirection: "row",
//     gap: 10,
//   },
//   eduDate: {
//     width: 110,
//     fontSize: 9.7,
//     color: "#555555",
//   },
//   eduBody: {
//     flex: 1,
//   },
//   eduText: {
//     fontSize: 9.8,
//     lineHeight: 1.38,
//     color: "#333333",
//   },

//   projectCard: {
//     marginTop: 10,
//   },
//   projectTitle: {
//     fontSize: 10.4,
//     fontWeight: 700,
//     color: "#2f2f2f",
//   },
//   projectSubtitle: {
//     marginTop: 2,
//     fontSize: 9.5,
//     color: "#88a8cf",
//   },

//   skillBlock: {
//     marginTop: 8,
//   },
//   skillTitle: {
//     marginBottom: 2,
//     fontSize: 10,
//     fontWeight: 700,
//     color: "#444444",
//   },
//   skillText: {
//     fontSize: 9.6,
//     lineHeight: 1.42,
//     color: "#2f2f2f",
//   },
// location: {
//   marginTop: 2,
//   fontSize: 9.6,
//   lineHeight: 1.38,
//   color: "#2f2f2f",
//       fontWeight: 400,

//   fontStyle: "normal",
// },
// });

// function SectionTitle({ title }: { title: string }) {
//   return (
//     <View style={styles.section}>
//       <Text style={styles.sectionTitle}>{title}</Text>
//       <View style={styles.divider} />
//     </View>
//   );
// }

// function ResumeDocument() {
//   return (
//     <Document title="Georges-Ishak-Resume" author="Georges Ishak">
//       <Page size="A4" style={styles.page}>
//         {/* HEADER */}
//         <View style={styles.header}>
//           <View style={styles.leftHeader}>
//             <Text style={styles.name}>{resumeData.name}</Text>
//             <Text style={styles.role}>{resumeData.role}</Text>
// <View style={styles.contacts}>
//   <View style={styles.contactCol}>
//     {resumeData.contactLeft.map(([label, value], i) => (
//       <Text key={i} style={styles.contactLine}>
//         <Text style={styles.bold}>{label}: </Text>
//         <Text>{value}</Text>
//       </Text>
//     ))}
//   </View>

//   <View style={styles.contactColRight}>
//     {resumeData.contactRight.map(([label, value], i) => (
//       <Text key={i} style={styles.contactLine}>
//         <Text style={styles.bold}>{label}: </Text>
//         <Text>{value}</Text>
//       </Text>
//     ))}
//   </View>
// </View>

//           </View>

//           <View style={styles.rightHeader}>
//             <View style={styles.photoWrap}>
//               {/* Ensure profileImage points to your professional headshot */}
//               <PDFImage src={resumeData.profileImage} style={styles.photo} />
//             </View>
//           </View>
//         </View>


//         {/* PROFILE */}
//         <SectionTitle title="Professional Profile" />
//         {resumeData.profile.map((p, i) => {
//           if (p.startsWith("Primary stack:")) {
//             return (
//               <Text key={i} style={styles.paragraph}>
//                 <Text style={styles.bold}>Primary stack: </Text>
//                 {p.replace("Primary stack: ", "")}
//               </Text>
//             );
//           }
//           return (
//             <Text key={i} style={styles.paragraph}>
//               {p}
//             </Text>
//           );
//         })}

//         {/* WORK HISTORY */}
//         <SectionTitle title="Work History" />
//         {resumeData.workHistory.map((job, i) => (
//           <View key={i} style={styles.job}>
//             <Text style={styles.jobDate}>{job.date}</Text>

//             <View style={styles.jobBody}>
//               <Text style={styles.jobTitle}>{job.title}</Text>
// <Text style={styles.company}>
//   {job.company}
//   {job.location && (
//     <Text style={styles.location}> - {job.location}</Text>
//   )}
// </Text>
//               <Text style={styles.meta}>{job.subtitle}</Text>
//               <Text style={styles.meta}>{job.stack}</Text>

//               <View style={styles.bullets}>
//                 {job.bullets.map((bullet, index) => (
//                   <View key={index} style={styles.bulletRow}>
//                     <Text style={styles.bulletDot}>•</Text>
//                     <Text style={styles.bulletText}>{bullet}</Text>
//                   </View>
//                 ))}
//               </View>
//             </View>
//           </View>
//         ))}

//         {/* EDUCATION */}
//         <SectionTitle title="Education" />
//         {resumeData.education.map((item, i) => (
//           <View key={i} style={styles.eduRow}>
//             <Text style={styles.eduDate}>{item.date}</Text>

//             <View style={styles.eduBody}>
//               <Text style={styles.eduText}>{item.title}</Text>
//               <Text style={styles.eduText}>{item.place}</Text>

//               {/* LOCATION (NEW) */}
//               {item.location && (
//                 <Text style={styles.meta}>{item.location}</Text>
//               )}
//             </View>
//           </View>
//         ))}

//         {/* SKILLS */}
//         <SectionTitle title="Technical Skills" />
//         {resumeData.technicalSkills.map((skill, i) => (
//           <View key={i} style={styles.skillBlock}>
//             <Text style={styles.skillTitle}>{skill.title}</Text>
//             <Text style={styles.skillText}>{skill.items}</Text>
//           </View>
//         ))}

//         {/* LANGUAGES */}
//         <SectionTitle title="Languages & Certifications" />
//         <View style={styles.skillBlock}>
//           <Text style={styles.skillTitle}>Languages</Text>
//           {resumeData.languages.map((item, i) => (
//             <Text key={i} style={styles.skillText}>
//               • {item}
//             </Text>
//           ))}
//         </View>

//         <View style={styles.skillBlock}>
//           <Text style={styles.skillTitle}>Certifications</Text>
//           {resumeData.certifications.map((item, i) => (
//             <Text key={i} style={styles.skillText}>
//               • {item}
//             </Text>
//           ))}
//         </View>

//       </Page>
//     </Document>
//   );
// }

// export default function ResumePage() {
//   return (
//     <main
//       style={{
//         minHeight: "100vh",
//         background: "#4a36d9",
//         padding: "24px",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <div
//         style={{
//           width: 380,
//           background: "#fff",
//           padding: 24,
//           borderRadius: 12,
//           textAlign: "center",
//           boxShadow: "0 12px 40px rgba(0,0,0,0.18)",
//         }}
//       >
//         <h1 style={{ margin: 0, fontSize: 24, fontWeight: 700 }}>
//           Resume PDF
//         </h1>

//         <p style={{ color: "#555", marginTop: 10, marginBottom: 20 }}>
//           Download your resume as a real PDF.
//         </p>

//         <PDFDownloadLink
//           document={<ResumeDocument />}
//           fileName="Georges-Ishak-Resume.pdf"
//           style={{
//             display: "inline-block",
//             background: "#111",
//             color: "#fff",
//             textDecoration: "none",
//             padding: "12px 18px",
//             borderRadius: 10,
//             fontWeight: 700,
//           }}
//         >
//           {({ loading }) => (loading ? "Generating PDF..." : "Download PDF")}
//         </PDFDownloadLink>
//       </div>
//     </main>
//   );
// }