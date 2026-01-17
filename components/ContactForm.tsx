"use client";

import { useState } from "react";
import { siteContent } from "@/content/site";
import { trackContactFormSubmit } from "@/lib/analytics";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    industry: "",
    revenueRange: "",
    challenge: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Track conversion event
    trackContactFormSubmit();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const fields = siteContent.contact.formFields;

  return (
    <div className="bg-white rounded-lg p-8 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-dark mb-6">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-charcoal font-semibold mb-2">
            {fields.name.label} {fields.name.required && <span className="text-red-500">*</span>}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required={fields.name.required}
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-charcoal font-semibold mb-2">
            {fields.company.label} {fields.company.required && <span className="text-red-500">*</span>}
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required={fields.company.required}
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold"
          />
        </div>
        <div>
          <label htmlFor="industry" className="block text-charcoal font-semibold mb-2">
            {fields.industry.label}
          </label>
          <input
            type="text"
            id="industry"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold"
          />
        </div>
        {fields.revenueRange && fields.revenueRange.options && (
          <div>
            <label htmlFor="revenueRange" className="block text-charcoal font-semibold mb-2">
              {fields.revenueRange.label}
            </label>
            <select
              id="revenueRange"
              name="revenueRange"
              value={formData.revenueRange}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold"
            >
              <option value="">Select revenue range</option>
              {fields.revenueRange.options.map((option, idx) => (
                <option key={idx} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        )}
        <div>
          <label htmlFor="challenge" className="block text-charcoal font-semibold mb-2">
            {fields.challenge.label} {fields.challenge.required && <span className="text-red-500">*</span>}
          </label>
          <textarea
            id="challenge"
            name="challenge"
            required={fields.challenge.required}
            rows={4}
            value={formData.challenge}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gold text-gray-dark px-8 py-3 rounded-lg font-bold hover:bg-gold-light transition-colors"
        >
          Submit Inquiry
        </button>
      </form>
    </div>
  );
}
