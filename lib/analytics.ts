export function trackEvent(
  eventName: string,
  properties?: Record<string, any>
) {
  if (typeof window === 'undefined') return;

  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  
  if (gaId && (window as any).gtag) {
    (window as any).gtag('event', eventName, properties);
  }

  console.log('Event:', eventName, properties);
}

export const AnalyticsEvents = {
  READING_START: 'reading_start',
  READING_COMPLETE: 'reading_complete',
  CARD_FLIP: 'card_flip',
  READING_SAVE: 'reading_save',
  READING_SHARE: 'reading_share',
  EMAIL_CAPTURE: 'email_capture',
  TIP_JAR_CLICK: 'tip_jar_click',
};
