"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface RuleItem {
  title: string;
  content: string;
}

interface RulesAccordionProps {
  rules: RuleItem[];
}

export default function RulesAccordion({ rules }: RulesAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full space-y-3 sm:space-y-4 md:space-y-5">
      {rules.map((rule, index) => (
        <div 
          key={index} 
          className="bg-[#0a0000]/60 backdrop-blur-md border-[3px] sm:border-4 border-[#3a0000]/70 shadow-[6px_6px_0_rgba(15,0,0,0.6)] sm:shadow-[8px_8px_0_rgba(15,0,0,0.6)] overflow-hidden transition-all duration-300 hover:border-red-500/80"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 flex items-center justify-between text-left gap-3 sm:gap-4 group hover:bg-red-500/10 transition-colors"
          >
            <div className="flex items-center gap-2.5 sm:gap-4 md:gap-6 min-w-0">
              <span className="font-mono text-[0.75rem] sm:text-[0.95rem] md:text-[1.1rem] text-red-500 font-bold opacity-90 shrink-0 tracking-wider">
                [0{index + 1}]
              </span>
              <h4 className="text-[1rem] sm:text-[1.25rem] md:text-[1.55rem] lg:text-[1.85rem] font-bold uppercase tracking-tight text-[#E7F2FF] wrap-break-words">
                {rule.title}
              </h4>
            </div>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="shrink-0"
            >
              <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-amber-500" />
            </motion.div>
          </button>

          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="px-3 sm:px-4 md:px-6 pb-4 sm:pb-6 md:pb-8 pt-3 border-t-2 border-red-500/30 border-dashed ml-10 sm:ml-12 md:ml-16 mr-3 sm:mr-4 md:mr-6">
                  <p className="text-[0.9rem] sm:text-[1.05rem] md:text-[1.2rem] lg:text-[1.45rem] leading-relaxed text-[#c2aaaa] font-medium">
                    {rule.content}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
