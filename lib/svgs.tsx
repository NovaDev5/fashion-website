export const reviewstars = (
  <svg
    width="260"
    height="40"
    viewBox="0 0 260 40"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="gold">
      {Array.from({ length: 5 }).map((_, i) => (
        <polygon
          key={i}
          points="12,2 15,9 22,9 16.5,13.5 18.5,21 12,16.5 5.5,21 7.5,13.5 2,9 9,9"
          transform={`translate(${i * 24},5)`}
        />
      ))}
    </g>
  </svg>
);
