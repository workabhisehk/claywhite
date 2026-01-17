// Placeholder component for case studies/work highlights
// This can be expanded with actual case study data

export default function CaseStudyList() {
  const caseStudies = [
    {
      title: "SOC 2 Readiness for Fintech Startup",
      challenge: "Preparing for Series B with SOC 2 Type II requirement",
      solution: "Implemented comprehensive security controls and prepared for audit in 3 months",
      result: "Successfully achieved SOC 2 Type II certification ahead of funding deadline",
    },
    {
      title: "SEC Readiness for Public Company",
      challenge: "Strengthening SOX compliance and internal controls",
      solution: "Developed financial reporting framework and remediation strategy",
      result: "Cleared SEC review with no material weaknesses identified",
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-12 text-center">
          Work Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, idx) => (
            <div key={idx} className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-dark mb-4">{study.title}</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-charcoal mb-1">Challenge:</p>
                  <p className="text-gray-600">{study.challenge}</p>
                </div>
                <div>
                  <p className="font-semibold text-charcoal mb-1">Solution:</p>
                  <p className="text-gray-600">{study.solution}</p>
                </div>
                <div>
                  <p className="font-semibold text-charcoal mb-1">Result:</p>
                  <p className="text-gray-600">{study.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
