// import React from 'react';

// export default function TableDisplay({ 
//   data,           // 2D array of numbers
//   highlightRow,   // Optional: highlight specific row
//   highlightCol    // Optional: highlight specific column
// }) {
//   const rows = data.length;
//   const cols = data[0]?.length || 0;
  
//   // Calculate cell size based on grid dimensions
//   const cellSize = Math.max(20, Math.min(40, 600 / Math.max(rows, cols)));
//   const fontSize = Math.max(8, cellSize * 0.4);
  
//   return (
//     <svg 
//       width={cols * cellSize + cellSize} 
//       height={rows * cellSize + cellSize}
//       className="mx-auto border-2 border-gray-300"
//     >
//       {/* Draw grid cells */}
//       {data.map((row, rowIdx) => (
//         row.map((value, colIdx) => {
//           const isHighlighted = 
//             (highlightRow !== undefined && rowIdx === highlightRow) ||
//             (highlightCol !== undefined && colIdx === highlightCol);
          
//           return (
//             <g key={`${rowIdx}-${colIdx}`}>
//               <rect
//                 x={colIdx * cellSize + cellSize}
//                 y={rowIdx * cellSize + cellSize}
//                 width={cellSize}
//                 height={cellSize}
//                 fill={isHighlighted ? '#dbeafe' : 'white'}
//                 stroke="#94a3b8"
//                 strokeWidth="1"
//               />
//               <text
//                 x={(colIdx + 1) * cellSize + cellSize / 2}
//                 y={(rowIdx + 1) * cellSize + cellSize / 2}
//                 textAnchor="middle"
//                 dominantBaseline="middle"
//                 fontSize={fontSize}
//                 fill="#1e293b"
//                 fontWeight={isHighlighted ? 'bold' : 'normal'}
//               >
//                 {value}
//               </text>
//             </g>
//           );
//         })
//       ))}
      
//       {/* Row headers */}
//       {data.map((_, rowIdx) => (
//         <g key={`row-${rowIdx}`}>
//           <rect
//             x={0}
//             y={rowIdx * cellSize + cellSize}
//             width={cellSize}
//             height={cellSize}
//             fill="#1e40af"
//             stroke="#1e3a8a"
//             strokeWidth="1"
//           />
//           <text
//             x={cellSize / 2}
//             y={(rowIdx + 1) * cellSize + cellSize / 2}
//             textAnchor="middle"
//             dominantBaseline="middle"
//             fontSize={fontSize}
//             fill="white"
//             fontWeight="bold"
//           >
//             {rowIdx - Math.floor(rows / 2)}
//           </text>
//         </g>
//       ))}
      
//       {/* Column headers */}
//       {data[0]?.map((_, colIdx) => (
//         <g key={`col-${colIdx}`}>
//           <rect
//             x={colIdx * cellSize + cellSize}
//             y={0}
//             width={cellSize}
//             height={cellSize}
//             fill="#1e40af"
//             stroke="#1e3a8a"
//             strokeWidth="1"
//           />
//           <text
//             x={(colIdx + 1) * cellSize + cellSize / 2}
//             y={cellSize / 2}
//             textAnchor="middle"
//             dominantBaseline="middle"
//             fontSize={fontSize}
//             fill="white"
//             fontWeight="bold"
//           >
//             {colIdx - Math.floor(data[0].length / 2)}
//           </text>
//         </g>
//       ))}
//     </svg>
//   );
// }

import React from 'react';

export default function TableDisplay({ 
  data,
  rowLabels,
  columnHeaders
}) {
  const rows = data.length;
  const cols = data[0]?.length || 0;
  
  // Calculate cell size based on grid dimensions
  const cellSize = Math.max(15, Math.min(35, 500 / Math.max(rows, cols)));
  const fontSize = Math.max(7, cellSize * 0.35);
  
  // Find center indices
  const centerRow = Math.floor(rows / 2);
  const centerCol = Math.floor(cols / 2);
  
  return (
    <svg 
      width={cols * cellSize + cellSize * 2} 
      height={rows * cellSize + cellSize * 2}
      className="mx-auto border-2 border-gray-400"
    >
      {/* Draw data grid cells */}
      {data.map((row, rowIdx) => (
        row.map((value, colIdx) => {
          const isCenter = rowIdx === centerRow && colIdx === centerCol;
          
          return (
            <g key={`${rowIdx}-${colIdx}`}>
              {/* <rect
                x={colIdx * cellSize + cellSize}
                y={rowIdx * cellSize + cellSize}
                width={cellSize}
                height={cellSize}
                fill={isCenter ? '#fef3c7' : 'white'}
                stroke={isCenter ? '#f59e0b' : '#cbd5e1'}
                strokeWidth={isCenter ? '2' : '1'}
              /> */}
              <text
                x={(colIdx + 1) * cellSize + cellSize / 2}
                y={(rowIdx + 1) * cellSize + cellSize / 2}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={fontSize}
                fill="#1e293b"
                fontWeight={isCenter ? 'bold' : 'normal'}
              >
                {value}
              </text>
            </g>
          );
        })
      ))}
      
      {/* Row headers - LEFT SIDE */}
      {rowLabels.map((label, rowIdx) => (
        <g key={`row-left-${rowIdx}`}>
          <rect
            x={0}
            y={rowIdx * cellSize + cellSize}
            width={cellSize}
            height={cellSize}
            fill="#1e40af"
            stroke="#1e3a8a"
            strokeWidth="1"
          />
          <text
            x={cellSize / 2}
            y={(rowIdx + 1) * cellSize + cellSize / 2}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={fontSize}
            fill="white"
            fontWeight="bold"
          >
            {label}
          </text>
        </g>
      ))}
      
      {/* Row headers - RIGHT SIDE */}
      {rowLabels.map((label, rowIdx) => (
        <g key={`row-right-${rowIdx}`}>
          <rect
            x={cols * cellSize + cellSize}
            y={rowIdx * cellSize + cellSize}
            width={cellSize}
            height={cellSize}
            fill="#1e40af"
            stroke="#1e3a8a"
            strokeWidth="1"
          />
          <text
            x={(cols + 1) * cellSize + cellSize / 2}
            y={(rowIdx + 1) * cellSize + cellSize / 2}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={fontSize}
            fill="white"
            fontWeight="bold"
          >
            {label}
          </text>
        </g>
      ))}
      
      {/* Column headers - TOP */}
      {columnHeaders.slice(1).map((header, colIdx) => (
        <g key={`col-top-${colIdx}`}>
          <rect
            x={colIdx * cellSize + cellSize}
            y={0}
            width={cellSize}
            height={cellSize}
            fill="#1e40af"
            stroke="#1e3a8a"
            strokeWidth="1"
          />
          <text
            x={(colIdx + 1) * cellSize + cellSize / 2}
            y={cellSize / 2}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={fontSize}
            fill="white"
            fontWeight="bold"
          >
            {header}
          </text>
        </g>
      ))}
      
      {/* Column headers - BOTTOM */}
      {columnHeaders.slice(1).map((header, colIdx) => (
        <g key={`col-bottom-${colIdx}`}>
          <rect
            x={colIdx * cellSize + cellSize}
            y={rows * cellSize + cellSize}
            width={cellSize}
            height={cellSize}
            fill="#1e40af"
            stroke="#1e3a8a"
            strokeWidth="1"
          />
          <text
            x={(colIdx + 1) * cellSize + cellSize / 2}
            y={(rows + 1) * cellSize + cellSize / 2}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={fontSize}
            fill="white"
            fontWeight="bold"
          >
            {header}
          </text>
        </g>
      ))}
      
      {/* Corner cells (empty) */}
      <rect x={0} y={0} width={cellSize} height={cellSize} fill="#0f172a" stroke="#1e3a8a" strokeWidth="1" />
      <rect x={cols * cellSize + cellSize} y={0} width={cellSize} height={cellSize} fill="#0f172a" stroke="#1e3a8a" strokeWidth="1" />
      <rect x={0} y={rows * cellSize + cellSize} width={cellSize} height={cellSize} fill="#0f172a" stroke="#1e3a8a" strokeWidth="1" />
      <rect x={cols * cellSize + cellSize} y={rows * cellSize + cellSize} width={cellSize} height={cellSize} fill="#0f172a" stroke="#1e3a8a" strokeWidth="1" />
      {/* Quadrant divider lines - crosshairs through center */}
      <line
        x1={centerCol * cellSize + cellSize}
        y1={cellSize}
        x2={centerCol * cellSize + cellSize}
        y2={rows * cellSize + cellSize}
        stroke="#000000"
        strokeWidth="1"
      />
      <line
        x1={cellSize}
        y1={centerRow * cellSize + cellSize}
        x2={cols * cellSize + cellSize}
        y2={centerRow * cellSize + cellSize}
        stroke="#000000"
        strokeWidth="1"
      />
    </svg>
  );
}