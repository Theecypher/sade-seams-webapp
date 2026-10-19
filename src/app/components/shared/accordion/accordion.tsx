"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { ReactNode, useState } from "react";

type AccordionProps = {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
};

const Accordion = ({ title, icon, children, defaultOpen }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <section className="border-b border-gray-300 py-4">
      <button
        type="button"
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between text-left"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="flex items-center gap-2">
          {icon}
          <span>{title}</span>
        </span>

        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>

      {isOpen && <div className="mt-4">{children}</div>}
    </section>
  );
};

export default Accordion;
