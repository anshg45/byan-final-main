import React from 'react';

export default function Logo({ className = "w-10 h-10", size = 24 }) {
  return (
    <div className={`relative flex items-center justify-center ${className} group`}>
      <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-900 to-black rounded-xl border border-red-500/30 shadow-[0_0_15px_rgba(220,38,38,0.5)] group-hover:shadow-[0_0_25px_rgba(220,38,38,0.8)] transition-all duration-300"></div>
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 text-white drop-shadow-md">
        <path d="M6 4H12C14.7614 4 17 6.23858 17 9C17 11.7614 14.7614 14 12 14H6V4Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M6 12H13C15.7614 12 18 14.2386 18 17C18 19.7614 15.7614 22 13 22H6V12Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="17" cy="9" r="2" fill="#FECACA" className="animate-pulse"/>
      </svg>
    </div>
  );
}
