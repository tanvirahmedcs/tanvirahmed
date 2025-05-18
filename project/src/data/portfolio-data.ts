export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  descriptions: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  image?: string;
  link?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

const experiences: Experience[] = [
  {
    company: "Shikhbe Shobai",
    role: "Frontend Developer Intern",
    duration: "Jan 2022 – Mar 2023",
    location: "Dhaka, Bangladesh",
    descriptions: [
      "Developed responsive web interfaces using HTML, CSS, JavaScript.",
      "Collaborated with design & backend teams to create user-friendly UI.",
      "Optimized code for performance & accessibility using best practices."
    ]
  },
  {
    company: "Village Tech",
    role: "WordPress Developer Intern",
    duration: "Jun 2023 – Apr 2024",
    location: "Dhaka, Bangladesh",
    descriptions: [
      "Developed and maintained WordPress-based websites.",
      "Managed theme customizations, plugin integrations, and security measures.",
      "Enhanced frontend appearance & user experience in collaboration with design teams."
    ]
  }
];

const projects: Project[] = [
  {
    title: "Google Cybersecurity Certificate Projects",
    description: "Completed security audit, incident response playbooks, NIST Framework implementation, and Python/SQL security tools as part of the Google Cybersecurity certification.",
    tags: ["Security Audit", "Incident Response", "NIST Framework", "Python", "SQL"],
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "Planning a Computing Project (Pearson-set)",
    description: "Comprehensive project involving risk assessment, compliance verification, and project management methodologies for secure computing environments.",
    tags: ["Risk Assessment", "Compliance", "Project Management"],
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "Encryption & Decryption System",
    description: "Implemented robust encryption and decryption system using AES, RSA, and SHA cryptographic algorithms for secure data transfer.",
    tags: ["Cryptography", "AES", "RSA", "SHA"],
    image: "https://images.pexels.com/photos/374103/pexels-photo-374103.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "Password Hashing System",
    description: "Designed secure authentication system implementing BCrypt, SHA-256, and salting techniques to protect user credentials.",
    tags: ["Authentication", "BCrypt", "SHA-256", "Salting"],
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "AI-Powered Automated Incident Response",
    description: "Developed a machine learning-based threat detection system that can automatically identify and respond to security incidents.",
    tags: ["AI", "Machine Learning", "Incident Response", "Automation"],
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "EmailGuard Malware Detection",
    description: "Created an AI-driven tool that can detect phishing attempts and malware in emails using natural language processing and pattern recognition.",
    tags: ["AI", "Email Security", "Phishing Detection", "Malware Analysis"],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Face Detection System",
    description: "Built a facial recognition attendance system using deep learning algorithms for secure and automated attendance tracking.",
    tags: ["Deep Learning", "Facial Recognition", "Python", "Computer Vision"],
    image: "https://images.pexels.com/photos/2036656/pexels-photo-2036656.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

const certifications: Certification[] = [
  {
    title: "CISSP Certificate",
    issuer: "ISC2",
    date: "2024",
    image: "/image/CISSP Certificate.jpeg"
  },
  {
    title: "Google Cyber Security Certificate",
    issuer: "Coursera",
    date: "2024",
    image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "Google Python Certificate",
    issuer: "Coursera",
    date: "2024",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "Cisco Cyber Security & Ethical Hacking Certificates",
    issuer: "Cisco, Coursera",
    date: "2024",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "Meta Frontend Developer Certificate",
    issuer: "Coursera",
    date: "2024",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "Harvard Cyber Security Certificate",
    issuer: "edX",
    date: "2024",
    image: "/image/Harvard Cyber Security Certificate.jpeg"
  },
  {
    title: "CompTIA Security+ Certificate",
    issuer: "CompTIA",
    date: "2024",
    image: "/image/CompTIA Security+ certificate.jpeg"
  },
  {
    title: "Microsoft Cyber Security Certificate",
    issuer: "Coursera",
    date: "2024",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "IBM Cybersecurity Case Studies & Capstone",
    issuer: "Coursera",
    date: "2024",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "TryHackMe Cyber Security Practical Training",
    issuer: "TryHackMe",
    date: "2024",
    image: "https://images.pexels.com/photos/5474295/pexels-photo-5474295.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "Award for Excellence in Cybersecurity",
    issuer: "Cybersecurity Association",
    date: "2024",
    image: "/image/award image.png"
  }
];

const skills: SkillCategory[] = [
  {
    category: "Programming",
    skills: ["HTML", "CSS", "C", "C++", "Python", "PHP", "JavaScript", "Ruby", "SQL"]
  },
  {
    category: "Frameworks & Libraries",
    skills: ["Bootstrap", "React", "WordPress", "Shopify", "jQuery"]
  },
  {
    category: "Cybersecurity Tools",
    skills: ["Wireshark", "Nmap", "Metasploit", "Burp Suite", "Splunk"]
  },
  {
    category: "Platforms",
    skills: ["ELK Stack", "Microsoft Sentinel", "Google Chronicle SIEM", "Git", "Bash"]
  },
  {
    category: "Databases",
    skills: ["MySQL"]
  },
  {
    category: "Soft Skills",
    skills: ["Analytical Thinking", "Problem-Solving", "Communication", "Teamwork"]
  }
];

const aboutMe = {
  summary: "I am Tanvir Ahmed, a passionate Cybersecurity Analyst Intern currently pursuing a Higher National Diploma (HND) in Cyber Security at Regent Middle East. I specialize in ethical hacking, SIEM tools, network security, and intrusion detection. I hold multiple certifications from renowned organizations including Google, Cisco, CompTIA, Microsoft, and TryHackMe. My expertise lies in risk analysis, secure system design, and proactive threat mitigation.",
  education: {
    institution: "Regent Middle East",
    degree: "BTEC in Cybersecurity",
    location: "Dubai, UAE",
    duration: "June 2024 – July 2026"
  },
  awards: ["Microsoft Guinness World Record Holder for Cybersecurity Innovation"],
  languages: ["English", "Bengali"],
  interests: ["Reading Books", "Tackling Challenges", "Coding", "Cybersecurity Research"]
};

export interface Research {
  title: string;
  link: string;
  description?: string;
}

const researches: Research[] = [
  {
    title: "Online Shopping Scams, Payment Fraud, and Cyberattacks: A Comprehensive Analysis",
    link: "https://www.linkedin.com/pulse/online-shopping-scams-payment-fraud-cyberattacks-analysis-ahmed-zxvdc"
  },
  {
    title: "Why AI is Dangerous and Increases Cybercrime",
    link: "https://www.linkedin.com/pulse/why-ai-dangerous-increases-cybercrime-tanvir-ahmed-scvdc"
  },
  {
    title: "The Impact of Overenthusiasm for AI Adoption on Privacy and Cybersecurity",
    link: "https://www.linkedin.com/pulse/impact-overenthusiasm-ai-adoption-privacy-tanvir-ahmed-rwgee"
  },
  {
    title: "IBM Cybersecurity Case Studies and Capstone Project",
    link: "https://www.coursera.org/learn/ibm-cybersecurity-case-studies-capstone"
  }
];

const contactInfo = {
  email: "tanvir@edu.regenteducation.ae",
  phone: "+971585085205",
  github: "github.com/tanvirahmedcs",
  linkedin: "linkedin.com/in/tanvirahmedcs",
  location: "Dubai, United Arab Emirates"
};

export {
  experiences,
  projects,
  certifications,
  skills,
  aboutMe,
  contactInfo,
  researches
};
