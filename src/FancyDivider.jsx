import React from 'react';

export default function FancyDivider({ bgColor = "bg-white" }) {
  return (
<div className="my-12 flex items-center justify-center space-x-4">
  <div className="w-24 h-px bg-red-700"></div>
<img  src="/images/logo-small.png" alt="Logo" className="h-6 w-auto"/>
  <div className="w-24 h-px bg-red-700"></div>
</div>
  );
}