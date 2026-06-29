'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import TopHeader from './TopHeader';
import Header from './Header';
import LpHeader from './LpHeader';

const HIDE_AT  = 60;
const SHOW_AT  = 20;
const HIDE_HDR = 120;

export default function SiteShell({ children }) {
  const pathname = usePathname();
  const isLp = pathname?.startsWith('/lp/');

  const [topBarVisible, setTopBarVisible] = useState(true);
  const [mainHdrHidden, setMainHdrHidden] = useState(false);
  const [topBarH,       setTopBarH]       = useState(40);
  const [mainHdrH,      setMainHdrH]      = useState(64);

  const lastScrollY  = useRef(0);
  const ticking      = useRef(false);
  const closedByUser = useRef(false);

  useEffect(() => {
    const topEl = document.querySelector('[data-topbar]');
    const hdrEl = document.querySelector('[data-site-header]');

    const measure = () => {
      if (topEl) setTopBarH(topEl.offsetHeight);
      if (hdrEl) setMainHdrH(hdrEl.offsetHeight);
    };
    measure();

    const ro = new ResizeObserver(measure);
    if (topEl) ro.observe(topEl);
    if (hdrEl) ro.observe(hdrEl);
    return () => ro.disconnect();
  }, []);

  const handleScroll = useCallback(() => {
    const y    = window.scrollY;
    const down = y > lastScrollY.current;
    lastScrollY.current = y;

    if (!closedByUser.current) {
      setTopBarVisible(prev => {
        if (prev  && down && y > HIDE_AT)  return false;
        if (!prev && !down && y < SHOW_AT) return true;
        return prev;
      });
    }

    setMainHdrHidden(prev => {
      if (!prev && down && y > HIDE_HDR) return true;
      if (prev  && !down)                return false;
      return prev;
    });
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => { handleScroll(); ticking.current = false; });
        ticking.current = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [handleScroll]);

  const handleClose = useCallback(() => {
    closedByUser.current = true;
    setTopBarVisible(false);
  }, []);

  const headerTop  = topBarVisible ? topBarH : 0;
  const translateY = mainHdrHidden ? -mainHdrH : 0;
  const paddingTop = (topBarVisible ? topBarH : 0) + (mainHdrHidden ? 0 : mainHdrH);

  if (isLp) {
    return (
      <>
        <LpHeader />
        <main style={{ paddingTop: 56 }}>
          {children}
        </main>
      </>
    );
  }

  return (
    <>
      <TopHeader visible={topBarVisible} onClose={handleClose} />
      <Header headerTop={headerTop} translateY={translateY} />
      <main style={{ paddingTop, transition: 'padding-top 0.35s cubic-bezier(0.4,0,0.2,1)' }}>
        {children}
      </main>
    </>
  );
}
