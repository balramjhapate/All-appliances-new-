'use client';

export default function TrackableCallLink({ sourceComponent, className, children }) {
  const handleClick = () => {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'call_click', source_component: sourceComponent, page_url: window.location.pathname });
    }
  };
  return (
    <a href="tel:+918889539174" onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
