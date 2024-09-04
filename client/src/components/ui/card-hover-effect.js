// src/ui/card-hover-effect.js
import React from 'react';

export function HoverEffect({ items }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, index) => (
        <div
          key={index}
          className="p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
        >
          <h3 className="text-xl font-semibold">{item.title}</h3>
          <p className="text-gray-600">{item.description}</p>
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mt-2 block"
          >
            Learn more
          </a>
        </div>
      ))}
    </div>
  );
}
