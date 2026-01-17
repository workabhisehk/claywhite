export const siteContent = {
  principal: {
    name: "Clay White",
    title: "Founder & Principal",
    bio: "Clay White is a seasoned executive with over 20 years of experience in the C-suite, specifically within the realms of Governance, Risk, and Compliance (GRC). His career spans leadership roles at Maximus, Title365, and Aseptic Technology. He is also the founder of Casablanca Cocktails LLC, showcasing an entrepreneurial spirit that informs his practical approach to business operations.",
    locations: ["Dallas, Texas", "Orange County, California"],
    linkedIn: "https://www.linkedin.com/in/claywhite/",
  },
  company: {
    linkedIn: "https://www.linkedin.com/in/whadvisoryservices/",
  },
  hero: {
    headline: "Scalable Compliance. Investor-Ready Growth.",
    subheadline: "Fractional COO/CRO and GRC Advisory for firms that need executive-level oversight without the full-time footprint. We translate complex regulations into practical business processes.",
    primaryCTA: "Schedule a Strategy Audit",
    secondaryCTA: "Explore GRC Frameworks",
  },
  stats: {
    experience: "20+",
    experienceLabel: "Years in C-Suite Leadership",
    trackRecord: "$4B",
    trackRecordLabel: "Public Entities Supported",
    frameworks: "5+",
    frameworksLabel: "GRC Frameworks Mastered",
  },
  services: {
    fractional: {
      title: "Fractional Executive Leadership",
      description: "Bridging the gap between startup agility and enterprise-grade operations.",
      benefits: [
        "Cost-efficient executive leadership",
        "Immediate expertise and strategic guidance",
        "Scalable operations without full-time overhead",
      ],
      models: [
        {
          role: "Fractional COO",
          description: "Operational leadership for growing enterprises, implementing scalable processes and driving efficiency.",
        },
        {
          role: "Fractional CRO",
          description: "Risk and compliance oversight, ensuring your organization meets regulatory requirements while maintaining agility.",
        },
      ],
    },
    grc: {
      title: "GRC & Regulatory Strategy",
      description: "Framework implementation and audit readiness across major compliance standards.",
      frameworks: [
        {
          name: "SOC 2 Type I & II",
          description: "Readiness and audit support for service organization controls.",
        },
        {
          name: "NIST & ISO Security Standards",
          description: "Information security framework implementation and certification support.",
        },
        {
          name: "HIPAA & Healthcare Regulatory Compliance",
          description: "Healthcare data privacy and security compliance for covered entities and business associates.",
        },
        {
          name: "SOX & SEC Financial Controls",
          description: "Financial reporting and internal controls for public market readiness.",
        },
        {
          name: "Third-Party Risk Management (TPRM)",
          description: "Vendor governance and third-party risk assessment and remediation strategies.",
        },
      ],
    },
  },
  sectors: [
    {
      name: "Fintech",
      description: "Heavily regulated technology firms requiring robust compliance frameworks and SEC readiness.",
    },
    {
      name: "Healthcare Technology",
      description: "HIPAA compliance, CMS regulations, and healthcare data security for growing tech companies.",
    },
    {
      name: "Beverage & Manufacturing",
      description: "Operational excellence and regulatory compliance for manufacturing operations, informed by Casablanca Cocktails experience.",
    },
    {
      name: "Public Companies",
      description: "SEC and SOX compliance for companies preparing for or operating in public markets.",
    },
  ],
  companies: [
    {
      name: "Maximus",
      role: "Executive Leadership",
      description: "C-suite role in governance, risk, and compliance.",
    },
    {
      name: "Title365",
      role: "Executive Leadership",
      description: "Strategic leadership in regulated financial services.",
    },
    {
      name: "Aseptic Technology",
      role: "Executive Leadership",
      description: "Operational excellence and compliance in manufacturing.",
    },
    {
      name: "Casablanca Cocktails LLC",
      role: "Founder",
      description: "Built from the ground up, demonstrating practical business operations and entrepreneurial execution.",
    },
  ],
  testimonials: [
    {
      quote: "Clay transformed our compliance from a check-the-box burden into a strategic asset. His fractional CRO model gave us enterprise-grade oversight without the enterprise overhead.",
      author: "CEO",
      company: "Mid-Size Fintech Company",
    },
    {
      quote: "We became investor-ready in record time. Clay's practical approach to SOC 2 and SEC compliance saved us months and countless headaches.",
      author: "Founder",
      company: "Series B Technology Company",
    },
    {
      quote: "Having sat on both sides of the table, Clay understands where the friction is and how to fix it. His fractional leadership model was exactly what we needed to scale.",
      author: "CTO",
      company: "Healthcare Technology Startup",
    },
  ],
  about: {
    narrative: "I've sat on both sides of the table—as an executive for billion-dollar public companies and as a founder building from the ground up. I know where the friction is, and I know how to fix it.",
    valueProposition: "WH Advisory Services transforms compliance from a 'check-the-box' burden into a strategic asset. We specialize in making companies 'investor-ready' by implementing common-sense GRC frameworks and fractional executive leadership that drives scalability without the overhead of a full-time hire.",
  },
  contact: {
    formFields: {
      name: { label: "Name", required: true },
      company: { label: "Company", required: true },
      industry: { label: "Industry", required: false },
      revenueRange: { label: "Revenue Range", required: false, options: ["< $1M", "$1M - $10M", "$10M - $50M", "$50M - $100M", "$100M+"] },
      challenge: { label: "Biggest Compliance Challenge", required: true, multiline: true },
    },
    calendlyPlaceholder: "Calendly embed will be placed here",
  },
};
