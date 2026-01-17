import { siteContent } from "@/content/site";

export default function SectorList() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4 text-center">
          Sectors Served
        </h2>
        <p className="text-xl text-charcoal text-center mb-12 max-w-3xl mx-auto">
          Deep expertise across regulated industries and high-growth sectors
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteContent.sectors.map((sector, idx) => (
            <div key={idx} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-dark mb-3">{sector.name}</h3>
              <p className="text-charcoal text-sm">{sector.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
