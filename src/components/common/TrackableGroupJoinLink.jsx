'use client';

const GROUP_LINK = 'https://chat.whatsapp.com/ISof1XkNwCw5yBOmW535wR';

export default function TrackableGroupJoinLink({ className, children }) {
  const handleClick = () => {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'whatsapp_group_join', source_component: 'contact_group_join', page_url: window.location.pathname });
    }
  };
  return (
    <a href={GROUP_LINK} target="_blank" rel="noopener noreferrer" onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
