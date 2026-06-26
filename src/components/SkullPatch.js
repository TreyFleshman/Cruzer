function SkullPatch({ size = 90 }) {
  return (
    <div className="patch-square" style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 100" className="skull-icon">
        <g transform="rotate(45 50 50)">
          <rect x="-9" y="45" width="118" height="10" rx="5" />
          <circle cx="-9" cy="50" r="8" />
          <circle cx="109" cy="50" r="8" />
        </g>
        <g transform="rotate(-45 50 50)">
          <rect x="-9" y="45" width="118" height="10" rx="5" />
          <circle cx="-9" cy="50" r="8" />
          <circle cx="109" cy="50" r="8" />
        </g>

        <ellipse cx="50" cy="46" rx="29" ry="26" />
        <path d="M21,62 Q26,80 31,64 Q36,80 41,64 Q46,80 50,64 Q54,80 59,64 Q64,80 69,64 Q74,80 79,62 Z" />
        <circle cx="36" cy="40" r="9" className="skull-cutout" />
        <circle cx="64" cy="40" r="9" className="skull-cutout" />
        <path d="M45,48 L55,48 L50,60 Z" className="skull-cutout" />
      </svg>
    </div>
  );
}

export default SkullPatch;
