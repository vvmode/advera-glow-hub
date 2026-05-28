export const services = [
  {
    id: "iso",
    number: "01",
    title: "ISO Consultancy",
    short: "Implement, document and certify internationally recognised management systems with confidence.",
    body: "Advera specialises in internationally recognised management systems — supporting organisations toward operational excellence, regulatory compliance and continuous improvement. Our practical, results-driven approach to ISO 9001:2015 and adjacent standards is shaped by deep local context and global benchmarks.",
    items: [
      "Gap Analysis & System Assessment",
      "System Design & Documentation",
      "Implementation Support",
      "Internal Audit & Training",
      "Management Review Facilitation",
      "Certification Body Liaison",
      "Continuous Improvement Guidance",
    ],
  },
  {
    id: "strategy",
    number: "02",
    title: "Strategic Management",
    short: "Define a clear vision, build actionable roadmaps and stay ready for what's next.",
    body: "We empower leadership to define a clear vision and long-term goals. Through rigorous market analysis and actionable roadmaps, we align resources with corporate objectives so your organisation remains competitive, agile and prepared to capitalise on emerging opportunities.",
    items: [
      "Vision, Mission & Values articulation",
      "Market & Competitive Analysis",
      "Long-term Strategic Roadmaps",
      "Resource & Capability Alignment",
    ],
  },
  {
    id: "operations",
    number: "03",
    title: "Operational & Business Advisory",
    short: "Optimise the engine room — workflows, costs, people and growth.",
    body: "We identify bottlenecks and lift workflow productivity through process re-engineering, cost reduction and performance benchmarking. From development planning to HR transformation and corporate profile design, we help you scale sustainably while protecting margins and service quality.",
    items: [
      "Development Planning — plans, procedures, charters and forms aligned to national strategies",
      "Management Consultancy — HR policy, performance systems, leadership coaching, change management",
      "Business Development — corporate profiles, business plans, registration and growth strategy",
    ],
  },
  {
    id: "risk",
    number: "04",
    title: "Risk & Compliance",
    short: "Govern with clarity. Anticipate risk. Build digital resilience.",
    body: "We help organisations build strong corporate governance frameworks and effective internal controls — identifying, monitoring and mitigating operational, financial and regulatory risk. With a sharp focus on cybersecurity, we protect against evolving digital threats, data breaches and operational disruption while safeguarding your reputation.",
    items: [
      "Corporate Governance Frameworks",
      "Internal Controls & Audit Readiness",
      "Regulatory & Operational Risk Mapping",
      "Cybersecurity & Digital Resilience",
    ],
  },
  {
    id: "training",
    number: "05",
    title: "Training & Capacity Building",
    short: "Invest in your greatest asset — your people.",
    body: "We design bespoke workshops and coaching programmes that bridge skill gaps and grow leadership capacity. By strengthening both technical competence and professional mindset, we equip your workforce to handle complex challenges and drive continuous innovation.",
    items: [
      "Executive & Leadership Coaching",
      "Bespoke Workshops & Capacity Programmes",
      "Technical & Compliance Training",
      "Mindset & Culture Development",
    ],
  },
] as const;

export type Service = (typeof services)[number];