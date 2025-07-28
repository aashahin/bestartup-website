'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

type FaqItemProps = {
  question: string;
  answer: string;
};

export const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-xl border border-slate-200/20 bg-gradient-to-br from-white/80 to-slate-50/50 backdrop-blur-sm transition-all duration-300 hover:bg-white/90 hover:shadow-md dark:border-slate-200/10 dark:from-slate-900/20 dark:to-slate-900/10 dark:hover:bg-slate-900/30">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-x-4 p-4 text-start md:p-6"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${question.replace(/\s/g, '-')}`}
      >
        <span className="text-sm font-medium text-slate-800 dark:text-slate-200 md:text-base">
          {question}
        </span>
        <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-slate-800/10 text-slate-700 transition-all duration-300 hover:bg-slate-800/20 dark:bg-slate-100/10 dark:text-white dark:hover:bg-slate-100/20">
          {isOpen ? (
            <Minus size={18} className="transform transition-transform" />
          ) : (
            <Plus size={18} className="transform transition-transform" />
          )}
        </div>
      </button>

      {/* The content panel with smooth transition */}
      <div
        id={`faq-answer-${question.replace(/\s/g, '-')}`}
        className="grid overflow-hidden transition-all duration-500 ease-in-out"
        style={{
          gridTemplateRows: isOpen ? '1fr' : '0fr',
        }}
      >
        <div className="overflow-hidden">
          <p className="px-4 pb-4 leading-relaxed text-slate-600 dark:text-slate-400 md:px-6 md:pb-6">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};