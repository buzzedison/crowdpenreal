import React, { useState } from 'react';
import Expect from './Expect';
import Panelists from './Panelists';
import DateAndDetails from './Date';
import Tickets from './Tickets';

const tabData = [
  { name: 'panelists', label: 'Panelists', icon: '👥', content: <div><Panelists/></div> },
  { name: 'highlights', label: 'Event Highlights', icon: '⭐', content: <Expect /> },
  
  { name: 'details', label: 'Date & Details', icon: '📅', content: <div><DateAndDetails/></div> },
  { name: 'tickets', label: 'Get Tickets', icon: '🎟️', content: <div><Tickets/></div> },
];

const Tab = ({ label, icon, isActive, onClick }) => (
  <li className="mx-4">
    <button
      className={`text-lg p-4 rounded-md ${isActive ? 'bg-gray-800 text-white' : 'text-gray-700 hover:bg-gray-300 hover:text-black'} transition duration-300 ease-in-out`}
      onClick={onClick}
    >
      <span className="mr-2">{icon}</span>{label}
    </button>
  </li>
);

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('panelists');

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        {/* Tabs */}
        <div className="mb-16">
          <ul className="flex flex-wrap justify-center text-center mb-8">
            {tabData.map((tab) => (
              <Tab
                key={tab.name}
                label={tab.label}
                icon={tab.icon}
                isActive={activeTab === tab.name}
                onClick={() => setActiveTab(tab.name)}
              />
            ))}
          </ul>
          <div className="border-b border-gray-300"></div>
        </div>

        {/* Tab Content */}
        <div>
          {tabData
            .filter((tab) => tab.name === activeTab)
            .map((tab) => (
              <React.Fragment key={tab.name}>{tab.content}</React.Fragment>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
