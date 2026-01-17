import { siteContent } from "@/content/site";

export default function Stats() {
  const stats = [
    {
      value: siteContent.stats.experience,
      label: siteContent.stats.experienceLabel,
    },
    {
      value: siteContent.stats.trackRecord,
      label: siteContent.stats.trackRecordLabel,
    },
    {
      value: siteContent.stats.frameworks,
      label: siteContent.stats.frameworksLabel,
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-5xl font-bold text-gray-dark mb-2">{stat.value}</div>
              <div className="text-charcoal text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
