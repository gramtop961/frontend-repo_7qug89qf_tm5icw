import React from 'react'

// Simple, clean inline SVG logotype that adapts to our brand colors
export default function BrandMark({ className = 'h-8 w-auto', withWordmark = true }) {
  return (
    <div className={`flex items-center gap-3 ${className ? '' : ''}`}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="kw-g" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF9CB8" />
            <stop offset="1" stopColor="#FF366E" />
          </linearGradient>
        </defs>
        <rect x="6" y="6" width="52" height="52" rx="14" fill="url(#kw-g)" />
        <path
          d="M20 42L29 33c1.5-1.5 1.5-3.9 0-5.4L20 18h8.2l6.8 7.1L45.8 18H52l-12 12 12 12h-6.2l-7.9-7.9-6.7 7.9H20z"
          fill="#002C40"
        />
      </svg>
      {withWordmark && (
        <span className="font-semibold tracking-tight text-[clamp(16px,2.5vw,24px)]" style={{ color: 'var(--brand-ink)' }}>
          Kikarwash
        </span>
      )}
    </div>
  )
}
