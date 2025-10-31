import React from 'react';

/**
 * AircraftView Component
 * Generates a 3D perspective view of an aircraft from behind/above
 * Used as answer options in Instrument Comprehension questions
 * 
 * Props:
 * - pitch: number (-90 to 90) - nose up/down angle
 * - bank: number (-180 to 180) - roll angle  
 * - heading: number (0 to 360) - compass heading (for arrow overlay)
 * - size: number (default 150) - display size
 * - showHeadingArrow: boolean (default true) - show direction arrow
 */
const AircraftView = ({ 
  pitch = 0, 
  bank = 0, 
  heading = 0,
  size = 150,
  showHeadingArrow = true
}) => {
  // Calculate perspective foreshortening based on pitch
  // Positive pitch = nose up = wings appear narrower
  // Negative pitch = nose down = wings appear wider
  const wingScale = Math.cos((pitch * Math.PI) / 180) * 0.5 + 0.5; // 0.5 to 1.0
  
  // Nose position shifts based on pitch
  const noseOffset = pitch * 0.4;
  
  // Tail visibility based on pitch
  const tailScale = pitch > 0 ? 1 + (pitch / 100) : 1 - (Math.abs(pitch) / 150);
  
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 150 150"
      style={{ backgroundColor: '#e8f4f8' }}
    >
      {/* Horizon line in background */}
      <line
        x1="0"
        y1={75 + pitch * 0.5}
        x2="150"
        y2={75 + pitch * 0.5}
        stroke="#b0d4e0"
        strokeWidth="2"
      />
      
      {/* Aircraft rotated by bank angle */}
      <g transform={`translate(75, 75) rotate(${-bank})`}>
        
        {/* Shadow/ground reference (only visible when pitched down) */}
        {pitch < -5 && (
          <ellipse
            cx={0}
            cy={60}
            rx={40}
            ry={8}
            fill="#00000020"
          />
        )}
        
        {/* Tail section (drawn first, behind) */}
        <g transform={`scale(1, ${wingScale * tailScale})`}>
          {/* Horizontal stabilizer */}
          <ellipse
            cx={0}
            cy={-25 - noseOffset * 0.5}
            rx={18}
            ry={5}
            fill="#888"
            stroke="#333"
            strokeWidth="1.5"
          />
          
          {/* Vertical stabilizer */}
          <path
            d={`M -4,${-25 - noseOffset * 0.5} L -4,${-38 - noseOffset * 0.5} L 4,${-38 - noseOffset * 0.5} L 4,${-25 - noseOffset * 0.5} Z`}
            fill="#999"
            stroke="#333"
            strokeWidth="1.5"
          />
        </g>
        
        {/* Main wings (foreshortened by pitch) */}
        <g transform={`scale(1, ${wingScale})`}>
          {/* Left wing */}
          <path
            d={`M -45,${5 + noseOffset * 0.3} L -12,${8 + noseOffset * 0.3} L -10,${12 + noseOffset * 0.3} L -40,${10 + noseOffset * 0.3} Z`}
            fill="#666"
            stroke="#222"
            strokeWidth="2"
          />
          
          {/* Right wing */}
          <path
            d={`M 45,${5 + noseOffset * 0.3} L 12,${8 + noseOffset * 0.3} L 10,${12 + noseOffset * 0.3} L 40,${10 + noseOffset * 0.3} Z`}
            fill="#666"
            stroke="#222"
            strokeWidth="2"
          />
          
          {/* Wing tips */}
          <ellipse cx={-42} cy={7 + noseOffset * 0.3} rx={3} ry={3} fill="#444" />
          <ellipse cx={42} cy={7 + noseOffset * 0.3} rx={3} ry={3} fill="#444" />
        </g>
        
        {/* Fuselage */}
        <ellipse
          cx={0}
          cy={noseOffset * 0.5}
          rx={10}
          ry={35}
          fill="#555"
          stroke="#222"
          strokeWidth="2"
        />
        
        {/* Cockpit canopy (reflective blue) */}
        <ellipse
          cx={0}
          cy={-5 + noseOffset * 0.6}
          rx={8}
          ry={12}
          fill="#5ba3d0"
          stroke="#2563eb"
          strokeWidth="1.5"
          opacity="0.85"
        />
        
        {/* Cockpit highlight (glass reflection) */}
        <ellipse
          cx={-2}
          cy={-8 + noseOffset * 0.6}
          rx={4}
          ry={6}
          fill="#ffffff"
          opacity="0.4"
        />
        
        {/* Nose cone */}
        <ellipse
          cx={0}
          cy={25 + noseOffset}
          rx={8}
          ry={pitch > 0 ? 8 : 12}
          fill="#333"
          stroke="#111"
          strokeWidth="2"
        />
        
        {/* Engine nacelles under wings */}
        <g transform={`scale(1, ${wingScale})`}>
          <ellipse cx={-22} cy={12 + noseOffset * 0.3} rx={3.5} ry={8} fill="#2a2a2a" stroke="#111" strokeWidth="1" />
          <ellipse cx={22} cy={12 + noseOffset * 0.3} rx={3.5} ry={8} fill="#2a2a2a" stroke="#111" strokeWidth="1" />
        </g>
        
      </g>
      
      {/* Heading indicator arrow */}
      {showHeadingArrow && (
        <g transform={`translate(135, 15) rotate(${heading})`}>
          {/* Circle background */}
          <circle cx={0} cy={0} r={12} fill="#fff" stroke="#333" strokeWidth="2" />
          
          {/* North arrow */}
          <path
            d="M 0,-8 L -4,-2 L 0,-4 L 4,-2 Z"
            fill="#e74c3c"
            stroke="#333"
            strokeWidth="1"
          />
          
          {/* N label */}
          <text
            x={0}
            y={8}
            fill="#333"
            fontSize="8"
            fontWeight="bold"
            textAnchor="middle"
          >
            N
          </text>
        </g>
      )}
      
      {/* Pitch indicator (optional visual aid) */}
      <g transform="translate(10, 75)">
        <line
          x1="0"
          y1="0"
          x2="5"
          y2="0"
          stroke="#666"
          strokeWidth="1"
        />
        <line
          x1="0"
          y1={-pitch * 0.5}
          x2="5"
          y2={-pitch * 0.5}
          stroke="#e74c3c"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
};

export default AircraftView;