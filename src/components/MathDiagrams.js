import React from 'react';

// Rectangle with labeled dimensions
export const RectangleDiagram = ({ width, height, widthLabel, heightLabel, unit }) => (
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
      {width} {unit}
    </text>
    
    {/* Height dimension line */}
    <line x1="40" y1="60" x2="40" y2="180" 
          stroke="black" strokeWidth="2" markerEnd="url(#arrowhead)"/>
    <line x1="40" y1="180" x2="40" y2="60" 
          stroke="black" strokeWidth="2" markerEnd="url(#arrowhead)"/>
    <text x="15" y="125" textAnchor="middle" fontSize="18" fontWeight="bold" 
          transform="rotate(0, 15, 125)">
      {height} {unit} 
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
          r = {radius} {unit}
        </text>
      </>
    )}
  </svg>
);

// Circle sector (pizza slice)
export const CircleSectorDiagram = ({ radius, angle, unit = '' }) => {
  const centerX = 160;
  const centerY = 140;
  const r = 100;
  
  // Calculate end point of arc
  const angleRad = (angle * Math.PI) / 180;
  const endX = centerX + r * Math.cos(angleRad);
  const endY = centerY - r * Math.sin(angleRad);
  
  // Large arc flag
  const largeArc = angle > 180 ? 1 : 0;
  
  return (
    <svg width="320" height="280" viewBox="0 0 320 280" className="mx-auto">
      {/* Full circle outline (dashed) */}
      <circle cx={centerX} cy={centerY} r={r} 
              fill="none" stroke="#bdbdbd" strokeWidth="2" strokeDasharray="5,5"/>
      
      {/* Sector (filled) */}
      <path d={`M ${centerX} ${centerY} L ${centerX + r} ${centerY} A ${r} ${r} 0 ${largeArc} 0 ${endX} ${endY} Z`}
            fill="#f3e5f5" stroke="#7b1fa2" strokeWidth="3"/>
      
      {/* Center point */}
      <circle cx={centerX} cy={centerY} r="4" fill="#7b1fa2"/>
      
      {/* Radius lines */}
      <line x1={centerX} y1={centerY} x2={centerX + r} y2={centerY} 
            stroke="#7b1fa2" strokeWidth="2"/>
      <line x1={centerX} y1={centerY} x2={endX} y2={endY} 
            stroke="#7b1fa2" strokeWidth="2"/>
      
      {/* Radius label */}
      <text x={centerX + 50} y={centerY + 20} textAnchor="middle" fontSize="16" fontWeight="bold">
        r = {radius}{unit}
      </text>
      
      {/* Angle label */}
      <text x={centerX + 30} y={centerY - 15} fontSize="18" fontWeight="bold" fill="#d32f2f">
        {angle}°
      </text>
    </svg>
  );
};

// Circle segment (area between chord and arc)
export const CircleSegmentDiagram = ({ radius, angle, unit = '' }) => {
  const centerX = 160;
  const centerY = 140;
  const r = 100;
  
  const angleRad = (angle * Math.PI) / 180;
  const halfAngleRad = angleRad / 2;
  
  // Calculate chord endpoints
  const x1 = centerX + r * Math.cos(halfAngleRad);
  const y1 = centerY - r * Math.sin(halfAngleRad);
  const x2 = centerX + r * Math.cos(-halfAngleRad);
  const y2 = centerY - r * Math.sin(-halfAngleRad);
  
  const largeArc = angle > 180 ? 1 : 0;
  
  return (
    <svg width="320" height="280" viewBox="0 0 320 280" className="mx-auto">
      {/* Full circle outline (dashed) */}
      <circle cx={centerX} cy={centerY} r={r} 
              fill="none" stroke="#bdbdbd" strokeWidth="2" strokeDasharray="5,5"/>
      
      {/* Segment (filled) */}
      <path d={`M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 0 ${x2} ${y2} Z`}
            fill="#fff3e0" stroke="#f57c00" strokeWidth="3"/>
      
      {/* Center point */}
      <circle cx={centerX} cy={centerY} r="4" fill="#424242"/>
      
      {/* Chord */}
      <line x1={x1} y1={y1} x2={x2} y2={y2} 
            stroke="#f57c00" strokeWidth="2"/>
      
      {/* Radius to chord endpoint */}
      <line x1={centerX} y1={centerY} x2={x1} y2={y1} 
            stroke="#424242" strokeWidth="2" strokeDasharray="5,5"/>
      
      {/* Labels */}
      <text x={centerX + 50} y={centerY + 20} textAnchor="middle" fontSize="16" fontWeight="bold">
        r = {radius}{unit}
      </text>
      <text x={centerX + 30} y={centerY - 15} fontSize="18" fontWeight="bold" fill="#d32f2f">
        {angle}°
      </text>
    </svg>
  );
};

// Annulus (ring/donut - area between two circles)
export const AnnulusDiagram = ({ innerRadius, outerRadius, unit = '' }) => {
  const centerX = 160;
  const centerY = 140;
  const scale = 90 / outerRadius; // Scale to fit
  const rOuter = outerRadius * scale;
  const rInner = innerRadius * scale;
  
  return (
    <svg width="320" height="280" viewBox="0 0 320 280" className="mx-auto">
      {/* Outer circle */}
      <circle cx={centerX} cy={centerY} r={rOuter} 
              fill="#e1bee7" stroke="#7b1fa2" strokeWidth="3"/>
      
      {/* Inner circle (white to create ring) */}
      <circle cx={centerX} cy={centerY} r={rInner} 
              fill="white" stroke="#7b1fa2" strokeWidth="3"/>
      
      {/* Center point */}
      <circle cx={centerX} cy={centerY} r="3" fill="#7b1fa2"/>
      
      {/* Outer radius */}
      <line x1={centerX} y1={centerY} x2={centerX + rOuter} y2={centerY} 
            stroke="#d32f2f" strokeWidth="2"/>
      <text x={centerX + rOuter/2} y={centerY - 10} textAnchor="middle" fontSize="16" fontWeight="bold">
        R = {outerRadius}{unit}
      </text>
      
      {/* Inner radius */}
      <line x1={centerX} y1={centerY} x2={centerX + rInner} y2={centerY - 5} 
            stroke="#1976d2" strokeWidth="2"/>
      <text x={centerX + rInner/2} y={centerY + 20} textAnchor="middle" fontSize="16" fontWeight="bold">
        r = {innerRadius}{unit}
      </text>
    </svg>
  );
};

// Coordinate plane with points
export const CoordinatePlaneDiagram = ({ points = [], shapes = [], gridSize = 10, showGrid = true }) => {
  const width = 400;
  const height = 400;
  const centerX = width / 2;
  const centerY = height / 2;
  const scale = 30; // pixels per unit
  
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="mx-auto">
      {/* Grid lines */}
      {showGrid && (
        <g opacity="0.2">
          {[...Array(gridSize * 2 + 1)].map((_, i) => {
            const offset = (i - gridSize) * scale;
            return (
              <g key={i}>
                <line x1={centerX + offset} y1="20" x2={centerX + offset} y2={height - 20} 
                      stroke="#999" strokeWidth="1"/>
                <line x1="20" y1={centerY + offset} x2={width - 20} y2={centerY + offset} 
                      stroke="#999" strokeWidth="1"/>
              </g>
            );
          })}
        </g>
      )}
      
      {/* Axes */}
      <line x1="20" y1={centerY} x2={width - 20} y2={centerY} 
            stroke="black" strokeWidth="2"/>
      <line x1={centerX} y1="20" x2={centerX} y2={height - 20} 
            stroke="black" strokeWidth="2"/>
      
      {/* Axis labels */}
      <text x={width - 30} y={centerY - 10} fontSize="16" fontWeight="bold">x</text>
      <text x={centerX + 10} y="35" fontSize="16" fontWeight="bold">y</text>
      
      {/* Origin */}
      <text x={centerX + 10} y={centerY + 20} fontSize="14">0</text>
      
      {/* Shapes (squares, rectangles, triangles from points) */}
      {shapes.map((shape, idx) => {
        if (shape.type === 'polygon') {
          const pointsStr = shape.points.map(p => 
            `${centerX + p.x * scale},${centerY - p.y * scale}`
          ).join(' ');
          return (
            <polygon key={`shape-${idx}`} points={pointsStr}
                     fill={shape.fill || '#e3f2fd'} 
                     stroke={shape.stroke || '#1976d2'} 
                     strokeWidth="2" 
                     opacity="0.7"/>
          );
        }
        return null;
      })}
      
      {/* Points */}
      {points.map((point, idx) => {
        const px = centerX + point.x * scale;
        const py = centerY - point.y * scale;
        return (
          <g key={idx}>
            <circle cx={px} cy={py} r="5" fill="#d32f2f"/>
            <text x={px + 10} y={py - 10} fontSize="14" fontWeight="bold">
              {point.label || `(${point.x}, ${point.y})`}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

// Composite shape (circle with cutout)
export const CompositeCircleDiagram = ({ outerRadius, cutoutRadius, cutoutType = 'circle', unit = '' }) => {
  const centerX = 160;
  const centerY = 140;
  const rOuter = 100;
  const rCutout = (cutoutRadius / outerRadius) * rOuter;
  
  return (
    <svg width="320" height="280" viewBox="0 0 320 280" className="mx-auto">
      <defs>
        <clipPath id="cutout">
          {cutoutType === 'quarter' ? (
            <path d={`M ${centerX} ${centerY} L ${centerX + rCutout} ${centerY} A ${rCutout} ${rCutout} 0 0 0 ${centerX} ${centerY - rCutout} Z`}/>
          ) : (
            <circle cx={centerX} cy={centerY} r={rCutout}/>
          )}
        </clipPath>
      </defs>
      
      {/* Outer circle */}
      <circle cx={centerX} cy={centerY} r={rOuter} 
              fill="#f3e5f5" stroke="#7b1fa2" strokeWidth="3"/>
      
      {/* Cutout (white fill) */}
      {cutoutType === 'quarter' ? (
        <path d={`M ${centerX} ${centerY} L ${centerX + rCutout} ${centerY} A ${rCutout} ${rCutout} 0 0 0 ${centerX} ${centerY - rCutout} Z`}
              fill="white" stroke="#f57c00" strokeWidth="2"/>
      ) : (
        <circle cx={centerX} cy={centerY} r={rCutout} 
                fill="white" stroke="#f57c00" strokeWidth="2"/>
      )}
      
      {/* Labels */}
      <text x={centerX + rOuter - 30} y={centerY + 20} fontSize="14" fontWeight="bold">
        R = {outerRadius}{unit}
      </text>
      <text x={centerX + rCutout/2} y={centerY - 10} fontSize="14" fontWeight="bold" fill="#f57c00">
        r = {cutoutRadius}{unit}
      </text>
    </svg>
  );
};

// Trapezoid with labeled dimensions
export const TrapezoidDiagram = ({ topBase, bottomBase, height, unit }) => (
  <svg width="320" height="280" viewBox="0 0 320 280" className="mx-auto">
    {/* Trapezoid */}
    <polygon points="100,60 220,60 260,200 60,200" 
             fill="#e8f5e9" stroke="#388e3c" strokeWidth="3"/>
    
    {/* Height line (dashed) */}
    <line x1="100" y1="60" x2="100" y2="200" 
          stroke="#388e3c" strokeWidth="2" strokeDasharray="5,5"/>
    
    {/* Top base label */}
    <text x="160" y="45" textAnchor="middle" fontSize="18" fontWeight="bold">
      {topBase} {unit}
    </text>
    
    {/* Bottom base label */}
    <text x="160" y="230" textAnchor="middle" fontSize="18" fontWeight="bold">
      {bottomBase} {unit}
    </text>
    
    {/* Height label */}
    <text x="80" y="135" textAnchor="middle" fontSize="18" fontWeight="bold">
      {height} {unit}
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
    
    {/* Distance arrow */}
    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
        <polygon points="0 0, 10 3, 0 6" fill="black" />
      </marker>
    </defs>
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
    case 'sector':
      return <CircleSectorDiagram {...props} />;
    case 'segment':
      return <CircleSegmentDiagram {...props} />;
    case 'annulus':
      return <AnnulusDiagram {...props} />;
    case 'composite-circle':
      return <CompositeCircleDiagram {...props} />;
    case 'coordinate-plane':
      return <CoordinatePlaneDiagram {...props} />;
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