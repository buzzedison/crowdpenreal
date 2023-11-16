import { useState } from 'react';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="py-4 px-6 w-full text-left text-lg font-medium text-gray-900 flex justify-between items-center"
        onClick={() => setOpen(!isOpen)}
      >
        {title}
        <span className="text-xl">
          {isOpen ? '-' : '+'}
        </span>
      </button>
      {isOpen && (
        <div className="px-6 py-4 text-gray-700 text-2xl">
          {typeof content === 'string' ? content : content}
        </div>
      )}
    </div>
  );
};

const Accordion = ({ data }) => {
  return (
    <div className="divide-y divide-gray-200">
      {data.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;
