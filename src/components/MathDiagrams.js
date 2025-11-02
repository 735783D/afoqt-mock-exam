import React from 'react';

// Rectangle with labeled dimensions
export const RectangleDiagram = ({ width, height, widthLabel, heightLabel }) => (
  <svg width="320" height="240" viewBox="0 0 320 240" className="mx-auto">
    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
        <polygon points="0 0, 10 3, 0 6" fill="black" />
      </marker>
    </defs>
    
    {/* Rectangle */}
    <rect x="60" y="60" width="200" height="120" 
          fill="#e3f2fd" stroke="#1976d2" strokeWidth="3"/>
    
    {/* Width dimension line */}
    <line x1="60" y1="200" x2="260" y2="200" 
          stroke="black" strokeWidth="2" markerEnd="url(#arrowhead)"/>
    <line x1="260" y1="200" x2="60" y2="200" 
          stroke="black" strokeWidth="2" markerEnd="url(#arrowhead)"/>
    <text x="160" y="220" textAnchor="middle" fontSize="18" fontWeight="bold">
      {widthLabel || `${width} ft`}
    </text>
    
    {/* Height dimension line */}
    <line x1="30" y1="60" x2="30" y2="180" 
          stroke="black" strokeWidth="2" markerEnd="url(#arrowhead)"/>
    <line x1="30" y1="180" x2="30" y2="60" 
          stroke="black" strokeWidth="2" markerEnd="url(#arrowhead)"/>
    <text x="15" y="125" textAnchor="middle" fontSize="18" fontWeight="bold" 
          transform="rotate(-90, 15, 125)">
      {heightLabel || `${height} ft`}
    </text>
  </svg>
);

// Right triangle with labeled sides
export const RightTriangleDiagram = ({ base, height, hypotenuse, showHypotenuse = true }) => (
  <svg width="320" height="280" viewBox="0 0 320 280" className="mx-auto">
    {/* Triangle */}
    <polygon points="60,200 260,200 60,60" 
             fill="#fff3e0" stroke="#f57c00" strokeWidth="3"/>
    
    {/* Right angle marker */}
    <rect x="60" y="185" width="15" height="15" 
          fill="none" stroke="#f57c00" strokeWidth="2"/>
    
    {/* Base label */}
    <text x="160" y="230" textAnchor="middle" fontSize="18" fontWeight="bold">
      {base}
    </text>
    
    {/* Height label */}
    <text x="30" y="135" textAnchor="middle" fontSize="18" fontWeight="bold">
      {height}
    </text>
    
    {/* Hypotenuse label */}
    {showHypotenuse && (
      <text x="180" y="120" textAnchor="middle" fontSize="18" fontWeight="bold"
            transform="rotate(0, 180, 120)">
        {hypotenuse || "?"}
      </text>
    )}
  </svg>
);

// Circle with radius
export const CircleDiagram = ({ radius, showDiameter = false, unit }) => (
  <svg width="320" height="280" viewBox="0 0 320 280" className="mx-auto">
    {/* Circle */}
    <circle cx="160" cy="140" r="100" 
            fill="#f3e5f5" stroke="#7b1fa2" strokeWidth="3"/>
    
    {/* Center point */}
    <circle cx="160" cy="140" r="4" fill="#7b1fa2"/>
    
    {showDiameter ? (
      <>
        {/* Diameter line */}
        <line x1="60" y1="140" x2="260" y2="140" 
              stroke="#7b1fa2" strokeWidth="2" strokeDasharray="5,5"/>
        <text x="160" y="170" textAnchor="middle" fontSize="18" fontWeight="bold">
          d = {radius * 2} {unit}
        </text>
      </>
    ) : (
      <>
        {/* Radius line */}
        <line x1="160" y1="140" x2="260" y2="140" 
              stroke="#7b1fa2" strokeWidth="2"/>
        <text x="210" y="165" textAnchor="middle" fontSize="18" fontWeight="bold">
          r = {radius}
        </text>
      </>
    )}
  </svg>
);

// Trapezoid with labeled dimensions
export const TrapezoidDiagram = ({ topBase, bottomBase, height }) => (
  <svg width="320" height="280" viewBox="0 0 320 280" className="mx-auto">
    {/* Trapezoid */}
    <polygon points="100,60 220,60 260,200 60,200" 
             fill="#e8f5e9" stroke="#388e3c" strokeWidth="3"/>
    
    {/* Height line (dashed) */}
    <line x1="100" y1="60" x2="100" y2="200" 
          stroke="#388e3c" strokeWidth="2" strokeDasharray="5,5"/>
    
    {/* Top base label */}
    <text x="160" y="45" textAnchor="middle" fontSize="18" fontWeight="bold">
      {topBase}
    </text>
    
    {/* Bottom base label */}
    <text x="160" y="230" textAnchor="middle" fontSize="18" fontWeight="bold">
      {bottomBase}
    </text>
    
    {/* Height label */}
    <text x="80" y="135" textAnchor="middle" fontSize="18" fontWeight="bold">
      h = {height}
    </text>
  </svg>
);

// Angle diagram
export const AngleDiagram = ({ angle, showArc = true }) => (
  <svg width="320" height="240" viewBox="0 0 320 240" className="mx-auto">
    {/* Lines forming angle */}
    <line x1="60" y1="180" x2="260" y2="180" 
          stroke="black" strokeWidth="3"/>
    <line x1="60" y1="180" x2="200" y2="60" 
          stroke="black" strokeWidth="3"/>
    
    {showArc && (
      <>
        {/* Arc showing angle */}
        <path d="M 120,180 A 60,60 0 0 1 105,140" 
              fill="none" stroke="#d32f2f" strokeWidth="2"/>
        {/* Angle label */}
        <text x="130" y="160" fontSize="20" fontWeight="bold" fill="#d32f2f">
          {angle}°
        </text>
      </>
    )}
  </svg>
);

// Cylinder with dimensions
export const CylinderDiagram = ({ radius, height }) => (
  <svg width="320" height="320" viewBox="0 0 320 320" className="mx-auto">
    {/* Top ellipse */}
    <ellipse cx="160" cy="80" rx="80" ry="25" 
             fill="#bbdefb" stroke="#1976d2" strokeWidth="2"/>
    
    {/* Cylinder sides */}
    <line x1="80" y1="80" x2="80" y2="240" 
          stroke="#1976d2" strokeWidth="2"/>
    <line x1="240" y1="80" x2="240" y2="240" 
          stroke="#1976d2" strokeWidth="2"/>
    
    {/* Bottom ellipse */}
    <ellipse cx="160" cy="240" rx="80" ry="25" 
             fill="#90caf9" stroke="#1976d2" strokeWidth="2"/>
    
    {/* Radius line on top */}
    <line x1="160" y1="80" x2="240" y2="80" 
          stroke="#d32f2f" strokeWidth="2"/>
    <text x="200" y="70" textAnchor="middle" fontSize="12" fontWeight="bold">
      r = {radius}
    </text>
    
    {/* Height line */}
    <line x1="250" y1="80" x2="250" y2="240" 
          stroke="#388e3c" strokeWidth="2"/>
    <text x="290" y="165" textAnchor="middle" fontSize="12" fontWeight="bold"
          transform="rotate(0, 285, 165)">
      h = {height}
    </text>
  </svg>
);

// Speed/Distance diagram (car traveling)
export const DistanceDiagram = ({ distance, time, speed }) => (
  <svg width="400" height="200" viewBox="0 0 400 200" className="mx-auto">
    {/* Road */}
    {/* <rect x="20" y="90" width="360" height="40" 
          fill="#757575" stroke="#424242" strokeWidth="2"/> */}
    
    {/* Dashed center line */}
    {/* <line x1="20" y1="110" x2="380" y2="110" 
          stroke="white" strokeWidth="3" strokeDasharray="15,10"/> */}
    
    {/* Starting point */}
    <circle cx="50" cy="110" r="8" fill="#4caf50"/>
    <text x="50" y="75" textAnchor="middle" fontSize="14" fontWeight="bold">
      Start
    </text>
    
    {/* Ending point */}
    <circle cx="350" cy="110" r="8" fill="#f44336"/>
    <text x="350" y="75" textAnchor="middle" fontSize="14" fontWeight="bold">
      End
    </text>
    
    {/* Car (simple) */}
    <rect x="170" y="95" width="60" height="30" 
          rx="5" fill="#2196f3" stroke="#0d47a1" strokeWidth="2"/>
    {/* <circle cx="185" cy="130" r="8" fill="black"/>
    <circle cx="245" cy="130" r="8" fill="black"/> */}
    
    {/* Distance arrow */}
    <line x1="60" y1="160" x2="340" y2="160" 
          stroke="black" strokeWidth="2" markerEnd="url(#arrowhead)"/>
    <text x="200" y="180" textAnchor="middle" fontSize="16" fontWeight="bold">
      {distance} miles
    </text>
    
    {/* Info text */}
    {speed && (
      <text x="200" y="30" textAnchor="middle" fontSize="16">
        Speed: {speed} mph
      </text>
    )}
    {time && (
      <text x="200" y="50" textAnchor="middle" fontSize="16">
        Time: {time} hours
      </text>
    )}
  </svg>
);

// Bar chart for data problems
export const BarChartDiagram = ({ data }) => (
  <svg width="400" height="300" viewBox="0 0 400 300" className="mx-auto">
    {/* Y-axis */}
    <line x1="50" y1="30" x2="50" y2="250" stroke="black" strokeWidth="2"/>
    {/* X-axis */}
    <line x1="50" y1="250" x2="380" y2="250" stroke="black" strokeWidth="2"/>
    
    {/* Bars */}
    {data.map((item, idx) => {
      const barWidth = 60;
      const x = 80 + idx * 90;
      const barHeight = (item.value / Math.max(...data.map(d => d.value))) * 200;
      const y = 250 - barHeight;
      
      return (
        <g key={idx}>
          <rect x={x} y={y} width={barWidth} height={barHeight}
                fill="#42a5f5" stroke="#1976d2" strokeWidth="2"/>
          <text x={x + barWidth/2} y={y - 10} textAnchor="middle" 
                fontSize="16" fontWeight="bold">
            {item.value}
          </text>
          <text x={x + barWidth/2} y="270" textAnchor="middle" fontSize="14">
            {item.label}
          </text>
        </g>
      );
    })}
    
    {/* Y-axis label */}
    <text x="20" y="140" textAnchor="middle" fontSize="14" fontWeight="bold"
          transform="rotate(-90, 20, 140)">
      Value
    </text>
  </svg>
);

// Get diagram by type
export const getDiagram = (type, props) => {
  switch(type) {
    case 'rectangle':
      return <RectangleDiagram {...props} />;
    case 'triangle':
      return <RightTriangleDiagram {...props} />;
    case 'circle':
      return <CircleDiagram {...props} />;
    case 'trapezoid':
      return <TrapezoidDiagram {...props} />;
    case 'angle':
      return <AngleDiagram {...props} />;
    case 'cylinder':
      return <CylinderDiagram {...props} />;
    case 'distance':
      return <DistanceDiagram {...props} />;
    case 'barchart':
      return <BarChartDiagram {...props} />;
    default:
      return null;
  }
};