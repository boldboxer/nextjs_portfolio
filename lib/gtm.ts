// lib/gtm.ts
type GTMEvent = {
  event: string;
  [key: string]: unknown;
};

const pushToDataLayer = (event: GTMEvent) => {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(event);
  }
};

export const pageview = (url: string) => {
  pushToDataLayer({
    event: "pageview",
    page: url,
  });
};

export const trackEvent = (event: string, params: Record<string, unknown> = {}) => {
  pushToDataLayer({
    event,
    ...params,
  });
};
