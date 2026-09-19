export const personal = {
  name: "Mayank Manohar",
  role: "Full Stack Developer",
  location: "India",
  bio: "Engineering student focused on MERN development, backend systems, deployment, and applied AI. I enjoy turning ideas into complete, usable products.",
};

export const contact = {
  email: "manoharmayank33@gmail.com",
  phone: "",
  github: "https://github.com/manohar-mayank",
  linkedin: "https://www.linkedin.com/in/manohar-mayank",
  resume: "/assets/Mayank_Resume.pdf",
};

export const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contact.email)}&su=Portfolio%20Contact`;
export const phoneUrl = contact.phone ? `tel:${contact.phone.replace(/[^+\d]/g, "")}` : "";
