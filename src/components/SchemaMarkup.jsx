export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Michael Eddleston",
    "jobTitle": "Software Engineer",
    "description": "Software Engineer specialising in React, TypeScript, and Python. Previously at ARM.",
    "url": "https://michaeleddleston.com",
    "sameAs": [
      "https://www.linkedin.com/in/michael-eddleston-4867a1214/",
      "https://github.com/Micmada"  
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "University of Winchester"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Independent Web Developer" 
    },
    "knowsAbout": [
      "Software Engineering",
      "Web Development",
      "React",
      "TypeScript",
      "JavaScript",
      "Python",
      "Node.js",
      "Full Stack Development"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Milton Keynes",
      "addressCountry": "GB"
    }
  };

  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}