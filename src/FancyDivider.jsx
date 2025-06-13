import React from 'react';

export default function FancyDivider({ bgColor = "bg-white" }) {
  return (
<div className="my-12 flex items-center justify-center space-x-4">
  <div className="w-24 h-px bg-red-700"></div>
  <span className="text-red-700 text-xl">⚓</span>
  <div className="w-24 h-px bg-red-700"></div>
</div>
  );
}