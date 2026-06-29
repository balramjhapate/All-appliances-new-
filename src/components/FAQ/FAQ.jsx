
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ({
  items,
  title = 'Frequently Asked Questions',
}) {
  const [open, setOpen] = useState(null);

  return (
    <section className="relative py-12 md:py-16 overflow-hidden bg-gradient-to-b from-blue-50 via-white to-blue-50">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-blue-200/30 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-8">

          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 text-[#2563EB] text-xs font-bold mb-3">
            FAQ
          </span>

          <h2 className="text-2xl md:text-4xl font-black text-gray-900">
            {title}
          </h2>

          <p className="text-gray-500 text-sm mt-2">
            Quick answers to common customer questions
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">

          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: i * 0.05,
              }}
              className="
                bg-white/80
                backdrop-blur-sm
                border
                border-blue-100
                rounded-2xl
                shadow-lg
                overflow-hidden
              "
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="
                  w-full
                  flex
                  items-center
                  justify-between
                  text-left
                  px-5
                  py-4
                  font-semibold
                  text-gray-900
                "
              >
                <span className="pr-4 text-sm md:text-base">
                  {item.q}
                </span>

                <motion.div
                  animate={{
                    rotate: open === i ? 45 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                  className="
                    flex
                    items-center
                    justify-center
                    w-8
                    h-8
                    rounded-full
                    bg-blue-100
                    text-[#2563EB]
                    text-lg
                    font-bold
                    flex-shrink-0
                  "
                >
                  +
                </motion.div>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: 'auto',
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-blue-100 pt-4">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}

        </div>

        {/* Bottom Trust Text */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
          <span className="text-xs text-gray-500">🔒 Trusted by 10,000+ Customers</span>
          <span className="text-gray-300 text-xs">•</span>
          <a
            href="https://share.google/BE2ReHesatm7UhRpl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-[#4285F4] transition-colors"
          >
            <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 flex-shrink-0">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.91 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
            </svg>
            Read Our Google Reviews →
          </a>
          <span className="text-gray-300 text-xs">•</span>
          <span className="text-xs text-gray-500">🛡️ Warranty Support</span>
        </div>

      </div>
    </section>
  );
}