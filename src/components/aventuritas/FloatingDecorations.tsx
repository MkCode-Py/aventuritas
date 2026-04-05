const Star = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z" />
  </svg>
);

const Heart = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const Cloud = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 32" fill="currentColor">
    <ellipse cx="20" cy="22" rx="16" ry="10" />
    <ellipse cx="36" cy="18" rx="14" ry="12" />
    <ellipse cx="50" cy="22" rx="12" ry="9" />
    <ellipse cx="28" cy="12" rx="12" ry="10" />
  </svg>
);

const Sparkle = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z" />
  </svg>
);

export { Star, Heart, Cloud, Sparkle };
