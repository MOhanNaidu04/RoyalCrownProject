import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@/components';
import './Accordion.css';

/**
 * Single Accordion Item with full WCAG aria-controls / aria-expanded linkages
 */
export function AccordionItem({
  id,
  title,
  content,
  isOpen,
  onToggle
}) {
  const triggerId = `rcss-accordion-trigger-${id}`;
  const panelId   = `rcss-accordion-panel-${id}`;

  return (
    <div className={`rcss-accordion-item ${isOpen ? 'rcss-accordion-item--open' : ''}`}>
      <button
        type="button"
        id={triggerId}
        className="rcss-accordion-item__trigger"
        onClick={() => onToggle(id)}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span className="rcss-accordion-item__title">{title}</span>
        <span className="rcss-accordion-item__arrow-wrapper" aria-hidden="true">
          <Icon name="arrow-down" size={16} className="rcss-accordion-item__arrow" />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            id={panelId}
            role="region"
            aria-labelledby={triggerId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="rcss-accordion-item__content-wrapper"
          >
            <div className="rcss-accordion-item__content">
              <p>{content}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/**
 * Reusable compound Accordion supporting single/multiple open states
 */
export function Accordion({
  items = [],
  allowMultiple = false,
  className = ''
}) {
  const [activeIds, setActiveIds] = useState(allowMultiple ? [] : null);

  const handleToggle = (id) => {
    if (allowMultiple) {
      setActiveIds((prev) =>
        prev.includes(id) ? prev.filter((activeId) => activeId !== id) : [...prev, id]
      );
    } else {
      setActiveIds((prev) => (prev === id ? null : id));
    }
  };

  const checkIsOpen = (id) => {
    return allowMultiple ? activeIds.includes(id) : activeIds === id;
  };

  return (
    <div className={`rcss-accordion ${className}`}>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          title={item.title}
          content={item.content}
          isOpen={checkIsOpen(item.id)}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
}

export default Accordion;
