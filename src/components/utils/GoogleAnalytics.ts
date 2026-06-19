declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const sendMetrik = (
  eventCategory: string,
  eventAction: string,
  eventLabel: string,
  eventValue: string
): void => {
  if (typeof window.gtag === "function") {
    window.gtag("event", eventAction, {
      event_category: eventCategory,
      event_label: eventLabel,
      value: eventValue,
    });
  }
};
