import React from 'react';

/**
 * InstrumentDisplay Component
 * Generates AFOQT-style instrument comprehension diagrams
 * 
 * Props:
 * - pitch: number (-90 to 90) - nose up/down angle
 * - bank: number (-180 to 180) - roll angle
 * - heading: number (0 to 360) - compass heading
 * - width: number (default 400) - display width
 * - height: number (default 300) - display height
 */
const InstrumentDisplay = ({ 
  pitch = 0, 
  bank = 0, 
  heading = 0,
  width = 400,
  height = 300 
}) => {
  // Debug logging
  console.log('InstrumentDisplay rendering with:', { pitch, bank, heading });
  
  // Generate unique IDs for this instance to avoid SVG clip path conflicts
  const uniqueId = `inst-${Math.random().toString(36).substr(2, 9)}`;
  const aiClipId = `aiClip-${uniqueId}`;
  const compassClipId = `compassClip-${uniqueId}`;
  
  // Attitude Indicator dimensions
  const aiSize = 180;
  const aiCenterX = width * 0.3;
  const aiCenterY = height * 0.5;
  
  // Compass dimensions
  const compassSize = 120;
  const compassCenterX = width * 0.7;
  const compassCenterY = height * 0.5;
  
  // Calculate pitch offset (pixels per degree)
  const pitchScale = 2;
  const pitchOffset = pitch * pitchScale;
  
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox={`0 0 ${width} ${height}`}
      style={{ backgroundColor: '#1a1a1a' }}
    >
      {/* Attitude Indicator */}
      <g transform={`translate(${aiCenterX}, ${aiCenterY})`}>
        {/* Outer casing */}
        <circle
          cx={0}
          cy={0}
          r={aiSize / 2}
          fill="#2a2a2a"
          stroke="#666"
          strokeWidth="3"
        />
        
        {/* Clipping mask for horizon */}
        <defs>
          <clipPath id={aiClipId}>
            <circle cx={0} cy={0} r={aiSize / 2 - 5} />
          </clipPath>
        </defs>
        
        {/* Rotating horizon group */}
        <g 
          clipPath={`url(#${aiClipId})`}
          transform={`rotate(${-bank})`}
        >
          {/* Sky (blue) */}
          <rect
            x={-aiSize}
            y={-aiSize * 2 + pitchOffset}
            width={aiSize * 2}
            height={aiSize * 2}
            fill="#4a90e2"
          />
          
          {/* Ground (brown) */}
          <rect
            x={-aiSize}
            y={pitchOffset}
            width={aiSize * 2}
            height={aiSize * 2}
            fill="#8b6914"
          />
          
          {/* Horizon line */}
          <line
            x1={-aiSize}
            y1={pitchOffset}
            x2={aiSize}
            y2={pitchOffset}
            stroke="#fff"
            strokeWidth="3"
          />
          
          {/* Pitch ladder marks */}
          {[-20, -10, 10, 20].map(deg => {
            const y = pitchOffset - (deg * pitchScale);
            const markWidth = deg % 20 === 0 ? 40 : 30;
            return (
              <g key={deg}>
                <line
                  x1={-markWidth}
                  y1={y}
                  x2={markWidth}
                  y2={y}
                  stroke="#fff"
                  strokeWidth="2"
                />
                <text
                  x={-markWidth - 15}
                  y={y + 5}
                  fill="#fff"
                  fontSize="12"
                  textAnchor="end"
                >
                  {Math.abs(deg)}
                </text>
                <text
                  x={markWidth + 15}
                  y={y + 5}
                  fill="#fff"
                  fontSize="12"
                  textAnchor="start"
                >
                  {Math.abs(deg)}
                </text>
              </g>
            );
          })}
        </g>
        
        {/* Fixed aircraft reference (wings) */}
        <g>
          {/* Center dot */}
          <circle cx={0} cy={0} r={4} fill="#ff6b00" />
          
          {/* Left wing */}
          <path
            d="M -60,0 L -20,0 L -20,-3 L -60,-3 Z"
            fill="#ff6b00"
          />
          
          {/* Right wing */}
          <path
            d="M 60,0 L 20,0 L 20,-3 L 60,-3 Z"
            fill="#ff6b00"
          />
          
          {/* Center bar */}
          <rect
            x={-15}
            y={-2}
            width={30}
            height={4}
            fill="#ff6b00"
          />
        </g>
        
        {/* Bank angle marks */}
        {[-60, -45, -30, -20, -10, 0, 10, 20, 30, 45, 60].map(angle => {
          const rad = (angle * Math.PI) / 180;
          const r = aiSize / 2 - 10;
          const x = Math.sin(rad) * r;
          const y = -Math.cos(rad) * r;
          const isMain = angle % 30 === 0;
          
          return (
            <line
              key={angle}
              x1={x}
              y1={y}
              x2={x * 0.9}
              y2={y * 0.9}
              stroke="#fff"
              strokeWidth={isMain ? "3" : "2"}
            />
          );
        })}
        
        {/* Bank pointer (triangle at top) */}
        <g transform={`rotate(${-bank})`}>
          <path
            d="M 0,-${aiSize / 2 + 5} L -6,-${aiSize / 2 + 15} L 6,-${aiSize / 2 + 15} Z"
            fill="#ff6b00"
          />
        </g>
      </g>
      
      {/* Compass/Heading Indicator */}
      <g transform={`translate(${compassCenterX}, ${compassCenterY})`}>
        {/* Outer casing */}
        <circle
          cx={0}
          cy={0}
          r={compassSize / 2}
          fill="#2a2a2a"
          stroke="#666"
          strokeWidth="3"
        />
        
        {/* Rotating compass card */}
        <g transform={`rotate(${-heading})`}>
          <defs>
            <clipPath id={compassClipId}>
              <circle cx={0} cy={0} r={compassSize / 2 - 5} />
            </clipPath>
          </defs>
          
          <g clipPath={`url(#${compassClipId})`}>
            {/* Cardinal directions */}
            {[
              { deg: 0, label: 'N' },
              { deg: 90, label: 'E' },
              { deg: 180, label: 'S' },
              { deg: 270, label: 'W' }
            ].map(({ deg, label }) => {
              const rad = (deg * Math.PI) / 180;
              const r = compassSize / 2 - 25;
              const x = Math.sin(rad) * r;
              const y = -Math.cos(rad) * r;
              
              return (
                <g key={deg}>
                  <line
                    x1={0}
                    y1={0}
                    x2={Math.sin(rad) * (compassSize / 2 - 5)}
                    y2={-Math.cos(rad) * (compassSize / 2 - 5)}
                    stroke="#444"
                    strokeWidth="1"
                  />
                  <text
                    x={x}
                    y={y + 5}
                    fill="#fff"
                    fontSize="16"
                    fontWeight="bold"
                    textAnchor="middle"
                  >
                    {label}
                  </text>
                </g>
              );
            })}
            
            {/* Degree marks every 30 degrees */}
            {[30, 60, 120, 150, 210, 240, 300, 330].map(deg => {
              const rad = (deg * Math.PI) / 180;
              const r = compassSize / 2 - 25;
              const x = Math.sin(rad) * r;
              const y = -Math.cos(rad) * r;
              
              return (
                <g key={deg}>
                  <line
                    x1={Math.sin(rad) * (compassSize / 2 - 15)}
                    y1={-Math.cos(rad) * (compassSize / 2 - 15)}
                    x2={Math.sin(rad) * (compassSize / 2 - 5)}
                    y2={-Math.cos(rad) * (compassSize / 2 - 5)}
                    stroke="#999"
                    strokeWidth="2"
                  />
                  <text
                    x={x}
                    y={y + 4}
                    fill="#aaa"
                    fontSize="11"
                    textAnchor="middle"
                  >
                    {deg}
                  </text>
                </g>
              );
            })}
          </g>
        </g>
        
        {/* Fixed heading indicator (aircraft symbol pointing up) */}
        <path
          d="M 0,-${compassSize / 2 + 5} L -8,-${compassSize / 2 + 15} L 0,-${compassSize / 2 + 10} L 8,-${compassSize / 2 + 15} Z"
          fill="#ff6b00"
        />
        
        {/* Center heading readout - moved below compass */}
        <rect
          x={-30}
          y={compassSize / 2 + 10}
          width={60}
          height={22}
          fill="#000"
          stroke="#666"
          strokeWidth="2"
          rx={3}
        />
        <text
          x={0}
          y={compassSize / 2 + 26}
          fill="#0f0"
          fontSize="14"
          fontWeight="bold"
          textAnchor="middle"
          fontFamily="monospace"
        >
          {String(Math.round(heading)).padStart(3, '0')}°
        </text>
      </g>
      
      {/* 3D Aircraft Perspective (between instruments) */}
      <g transform={`translate(${width * 0.5}, ${height * 0.5})`}>
        <g transform={`rotate(${-bank}) scale(${1 + pitch/100})`}>
          {/* Calculate perspective based on pitch */}
          <defs>
            {/* Wing foreshortening based on pitch */}
            <radialGradient id="wingGradient">
              <stop offset="0%" stopColor="#555" />
              <stop offset="100%" stopColor="#333" />
            </radialGradient>
          </defs>
          
          {/* Wings - foreshortened by pitch */}
          <g transform={`scale(1, ${Math.cos((pitch * Math.PI) / 180) * 0.4 + 0.6})`}>
            {/* Left wing */}
            <path
              d="M -50,0 L -15,5 L -10,8 L -45,3 Z"
              fill="url(#wingGradient)"
              stroke="#222"
              strokeWidth="2"
            />
            {/* Right wing */}
            <path
              d="M 50,0 L 15,5 L 10,8 L 45,3 Z"
              fill="url(#wingGradient)"
              stroke="#222"
              strokeWidth="2"
            />
          </g>
          
          {/* Fuselage - main body */}
          <ellipse
            cx={0}
            cy={pitch > 0 ? -5 : 5}
            rx={12}
            ry={40}
            fill="#444"
            stroke="#222"
            strokeWidth="2"
          />
          
          {/* Nose cone - changes position with pitch */}
          <ellipse
            cx={0}
            cy={30 + pitch * 0.3}
            rx={10}
            ry={12}
            fill="#333"
            stroke="#111"
            strokeWidth="2"
          />
          
          {/* Cockpit canopy */}
          <ellipse
            cx={0}
            cy={pitch > 0 ? -8 : 8}
            rx={9}
            ry={14}
            fill="#4a90e2"
            stroke="#2563eb"
            strokeWidth="1.5"
            opacity="0.8"
          />
          
          {/* Tail section - foreshortened by pitch */}
          <g transform={`scale(1, ${Math.cos((pitch * Math.PI) / 180) * 0.5 + 0.5})`}>
            {/* Horizontal stabilizer */}
            <ellipse
              cx={0}
              cy={-35}
              rx={20}
              ry={6}
              fill="#555"
              stroke="#222"
              strokeWidth="2"
            />
            
            {/* Vertical stabilizer */}
            <path
              d="M -6,-35 L -6,-50 L 6,-50 L 6,-35 Z"
              fill="#666"
              stroke="#222"
              strokeWidth="2"
            />
          </g>
          
          {/* Engine nacelles under wings */}
          <g transform={`scale(1, ${Math.cos((pitch * Math.PI) / 180) * 0.4 + 0.6})`}>
            <ellipse cx={-25} cy={8} rx={4} ry={8} fill="#222" stroke="#111" strokeWidth="1" />
            <ellipse cx={25} cy={8} rx={4} ry={8} fill="#222" stroke="#111" strokeWidth="1" />
          </g>
          
          {/* Shadow/reference line */}
          <line
            x1={-60}
            y1={50}
            x2={60}
            y2={50}
            stroke="#555"
            strokeWidth="1"
            strokeDasharray="4,4"
            opacity="0.3"
          />
        </g>
      </g>
      
      {/* Labels */}
      <text
        x={aiCenterX}
        y={height - 10}
        fill="#aaa"
        fontSize="12"
        textAnchor="middle"
      >
        Attitude Indicator
      </text>
      <text
        x={compassCenterX}
        y={height - 10}
        fill="#aaa"
        fontSize="12"
        textAnchor="middle"
      >
        Heading Indicator
      </text>
    </svg>
  );
};

export default InstrumentDisplay;