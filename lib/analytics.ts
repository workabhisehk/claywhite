// Analytics tracking utilities for GA4 and conversion events
// Set NEXT_PUBLIC_GA_ID in your .env.local file

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Conversion tracking events
export const trackContactFormSubmit = () => {
  event({
    action: 'form_submit',
    category: 'lead_generation',
    label: 'contact_form',
  });
};

export const trackCTAClick = (ctaText: string, location: string) => {
  event({
    action: 'cta_click',
    category: 'engagement',
    label: `${ctaText}_${location}`,
  });
};

export const trackServicePageView = (serviceName: string) => {
  event({
    action: 'page_view',
    category: 'service',
    label: serviceName,
  });
};

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
  }
}
