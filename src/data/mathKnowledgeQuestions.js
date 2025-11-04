// Math Knowledge Questions for AFOQT
// Algebra, geometry, and mathematical concepts (Batch 1: Questions 1–25)

export const mathKnowledgeData = [
  {
    id: 1,
    text: "If 3x + 5 = 20, what is the value of x?",
    options: ["3", "5", "7", "9"],
    correct: 1,
    explanation: "Subtract 5 from both sides: 3x = 15. Divide by 3: x = 5."
  },
  {
    id: 2,
    text: "Simplify: 5(2x − 3) + 4x",
    options: ["14x − 15", "10x − 3", "6x − 15", "10x − 9"],
    correct: 0,
    explanation: "Distribute: 10x − 15 + 4x = 14x − 15."
  },
  {
    id: 3,
    text: "What is the area of a circle with radius 6 cm?",
    options: ["36 cm²", "113.10 cm²", "72.30 cm²", "452.16 cm²"],
    correct: 1,
    explanation: "Area = 3.1416 × 6² = 3.1416 × 36 = 113.10 cm²."
  },
  {
    id: 4,
    text: "If 4x = 28, what is x?",
    options: ["6", "7", "8", "9"],
    correct: 1,
    explanation: "Divide both sides by 4: x = 28 ÷ 4 = 7."
  },
  {
    id: 5,
    text: "Convert 72 inches to feet.",
    options: ["5 ft", "6 ft", "7 ft", "8 ft"],
    correct: 1,
    explanation: "1 foot = 12 inches. 72 ÷ 12 = 6 feet."
  },
  {
    id: 6,
    text: "What is the volume of a cylinder with radius 5 cm and height 10 cm?",
    options: ["785.4 cm³", "1570.8 cm³", "314.16 cm³", "628.32 cm³"],
    correct: 1,
    explanation: "Volume = 3.1416 × 5² × 10 = 3.1416 × 25 × 10 = 785.4 × 2 = 1570.8 cm³.",
    // diagram: "CylinderDiagram",
    // diagramProps: { radius: 5, height: 10 }
    diagram: {
      type: "cylinder",
      props: { radius: "5 cm", height: "10 cm" }
    }
  },
  {
    id: 7,
    text: "Simplify: (3x²)(2x³)",
    options: ["5x⁵", "6x⁵", "6x⁶", "6x⁴"],
    correct: 1,
    explanation: "Multiply coefficients (3×2=6) and add exponents (2+3=5): 6x⁵."
  },
  {
    id: 8,
    text: "If a = 5 and b = 3, evaluate 2a² + b.",
    options: ["53", "28", "23", "58"],
    correct: 0,
    explanation: "2(5²) + 3 = 2×25 + 3 = 50 + 3 = 53",
  },
  {
    id: 9,
    text: "Find the perimeter of a rectangle with length 12 m and width 8 m.",
    options: ["40 m", "24 m", "48 m", "32 m"],
    correct: 0,
    explanation: "Perimeter = 2(l + w) = 2(12 + 8) = 2×20 = 40 m."
  },
  {
    id: 10,
    text: "Solve for y: 2y − 4 = 10",
    options: ["7", "6", "8", "9"],
    correct: 0,
    explanation: "Add 4 to both sides: 2y = 14 → y = 7."
  },
  {
    id: 11,
    text: "What is 25% of 240?",
    options: ["50", "60", "65", "70"],
    correct: 1,
    explanation: "25% = 1/4, so 240 × 0.25 = 60."
  },
  {
    id: 12,
    text: "Convert 5 kilometers to meters.",
    options: ["500 m", "50 m", "5000 m", "0.5 m"],
    correct: 2,
    explanation: "1 km = 1000 m. 5 × 1000 = 5000 m."
  },
  {
    id: 13,
    text: "Simplify: 6² ÷ 3 + 4",
    options: ["8", "16", "12", "20"],
    correct: 1,
    explanation: "6² = 36. Then 36 ÷ 3 = 12. 12 + 4 = 16."
  },
  {
    id: 14,
    text: "Find x: 5x − 7 = 13",
    options: ["2", "3", "4", "5"],
    correct: 2,
    explanation: "Add 7: 5x = 20 → x = 4."
  },
  {
    id: 15,
    text: "The area of a triangle is 24 m² and its base is 8 m. What is its height?",
    options: ["3 m", "4 m", "6 m", "8 m"],
    correct: 2,
    explanation: "Area = ½ × base × height → 24 = ½ × 8 × h → 24 = 4h → h = 6."
  },
  {
    id: 16,
    text: "Simplify: √81 + 5²",
    options: ["106", "34", "14", "29"],
    correct: 1,
    explanation: "√81 = 9, 5² = 25 → 9 + 25 = 34."
  },
  {
    id: 17,
    text: "If 8 gallons = 1 cubic foot, how many cubic feet are in 64 gallons?",
    options: ["8", "9", "6", "10"],
    correct: 0,
    explanation: "64 ÷ 8 = 8 cubic feet."
  },
  {
    id: 18,
    text: "A car travels 180 miles in 3 hours. What is its average speed?",
    options: ["50 mph", "60 mph", "55 mph", "65 mph"],
    correct: 1,
    explanation: "Speed = distance ÷ time = 180 ÷ 3 = 60 mph."
  },
  {
    id: 19,
    text: "Simplify: (2x + 3) − (x − 4)",
    options: ["x + 7", "x − 7", "3x + 1", "x + 1"],
    correct: 0,
    explanation: "Distribute: 2x + 3 − x + 4 = x + 7."
  },
  {
    id: 20,
    text: "Convert 3 yards to feet.",
    options: ["6 ft", "9 ft", "12 ft", "3 ft"],
    correct: 1,
    explanation: "1 yard = 3 feet. 3 × 3 = 9 ft."
  },
  {
    id: 21,
    text: "The sum of three consecutive even numbers is 48. What is the smallest number?",
    options: ["14", "15", "16", "18"],
    correct: 0,
    explanation: "Let numbers be x, x+2, x+4. Then 3x+6=48 → 3x=42 → x=14."
  },
  {
    id: 22,
    text: "If a square has perimeter 48 cm, what is the length of each side?",
    options: ["10 cm", "11 cm", "12 cm", "14 cm"],
    correct: 2,
    explanation: "Perimeter = 4s → 48 = 4s → s = 12."
  },
  {
    id: 23,
    text: "Simplify: 2³ × 2⁴",
    options: ["2⁶", "2⁷", "2⁵", "2⁸"],
    correct: 1,
    explanation: "Add exponents when bases are same: 3+4=7."
  },
  {
    id: 24,
    text: "What is 15% of 360?",
    options: ["45", "50", "54", "60"],
    correct: 2,
    explanation: "15% = 0.15. 360 × 0.15 = 54."
  },
  {
    id: 25,
    text: "Convert 212°F to Celsius.",
    options: ["100°C", "90°C", "110°C", "120°C"],
    correct: 0,
    explanation: "C = (F − 32) × 5/9 = (212 − 32) × 5/9 = 180 × 5/9 = 100°C."
  },
  {
    id: 26,
    text: "If 2x − 7 = 15, what is the value of x?",
    options: ["8", "10", "11", "12"],
    correct: 2,
    explanation: "Add 7 → 2x = 22 → x = 11."
  },
  {
    id: 27,
    text: "Find the area of a rectangle with length 9 m and width 5 m.",
    options: ["45 m²", "50 m²", "35 m²", "40 m²"],
    correct: 0,
    explanation: "Area = l × w = 9 × 5 = 45 m²."
  },
  {
    id: 28,
    text: "Simplify: 4² + 3²",
    options: ["12", "25", "19", "7"],
    correct: 1,
    explanation: "4² = 16 and 3² = 9, 16 + 9 = 25."
  },
  {
    id: 29,
    text: "Convert 3.5 yards to inches.",
    options: ["105 in", "120 in", "126 in", "96 in"],
    correct: 2,
    explanation: "1 yard = 36 in. 3.5 × 36 = 126 in."
  },
  {
    id: 30,
    text: "If f(x) = 2x² − 3x + 1, find f(4).",
    options: ["21", "25", "27", "29"],
    correct: 0,
    explanation: "f(4)=2(4²)−3(4)+1 = 2×16 − 12 + 1 = 32 − 12 + 1 = 21."
  },
  {
    id: 31,
    text: "A right triangle has base 6 cm and height 8 cm. What is its hypotenuse?",
    options: ["10 cm", "9 cm", "12 cm", "14 cm"],
    correct: 0,
    explanation: "By Pythagoras: √(6² + 8²) = √(36 + 64) = √100 = 10 cm.",
    diagram: {
      type: "triangle",
      props: { base: "6 cm", height: "8 cm", hypotenuse: "?", showHypotenuse: true }
    }
  },
  {
    id: 32,
    text: "Simplify: (5a³)(−2a²)",
    options: ["−10a⁵", "−10a⁶", "10a⁵", "10a⁶"],
    correct: 0,
    explanation: "Multiply coefficients 5×(−2)=−10 and add exponents 3+2=5 → −10a⁵."
  },
  {
    id: 33,
    text: "Find the circumference of a circle with diameter 14 m.",
    options: ["43.9824 m", "21.9912 m", "39.12 m", "44 m"],
    correct: 0,
    explanation: "C = πd = 3.1416 × 14 = 43.9824 ≈ 43.98 m.",
    diagram: {
      type: "circle",
      props: { diameter: 14, radius: 7, showDiameter: true, showRadius: false, unit: "m" }
    }
  },
  {
    id: 34,
    text: "Solve for x: 7x + 9 = 30",
    options: ["2", "3", "4", "5"],
    correct: 1,
    explanation: "Subtract 9 → 7x = 21 → x = 3."
  },
  {
    id: 35,
    text: "Convert 48 ounces to pounds.",
    options: ["2 lb", "3 lb", "4 lb", "5 lb"],
    correct: 1,
    explanation: "16 oz = 1 lb. 48 ÷ 16 = 3 lb."
  },
  {
    id: 36,
    text: "Find the volume of a cube with side 4 cm.",
    options: ["64 cm³", "32 cm³", "48 cm³", "16 cm³"],
    correct: 0,
    explanation: "V = s³ = 4³ = 64 cm³.",
  },
  {
    id: 37,
    text: "Simplify: 9x − 4x + 7",
    options: ["13x + 7", "5x + 7", "3x + 7", "7x + 7"],
    correct: 1,
    explanation: "Combine like terms: 9x − 4x = 5x, so 5x + 7."
  },
  {
    id: 38,
    text: "If 12 workers complete a job in 6 days, how many workers are needed to finish in 3 days?",
    options: ["18", "20", "22", "24"],
    correct: 3,
    explanation: "Work is inversely proportional to time. To halve time, double workers: 12 × (6 / 3) = 24 workers."
  },
  {
    id: 39,
    text: "Find the area of a triangle with base 12 m and height 10 m.",
    options: ["60 m²", "100 m²", "120 m²", "50 m²"],
    correct: 0,
    explanation: "Area = ½ × base × height = 0.5 × 10 × 12 = 60 m².",
    diagram: {
      type: "triangle",
      props: { base: "12 m", height: "10 m", showHeight: true, showBase: true }
    }
  },
  {
    id: 40,
    text: "Convert 2.5 hours to minutes.",
    options: ["120 min", "140 min", "150 min", "160 min"],
    correct: 2,
    explanation: "2.5 × 60 = 150 minutes."
  },
  {
    id: 41,
    text: "Simplify: (3² × 2³) ÷ 6",
    options: ["4", "6", "8", "12"],
    correct: 3,
    explanation: "3² = 9, 2³ = 8, 9 × 8 = 72, 72 ÷ 6 = 12."
  },
  {
    id: 42,
    text: "If the radius of a circle is 10 cm, find its area.",
    options: ["314.16 cm²", "100 cm²", "157.08 cm²", "62.83 cm²"],
    correct: 0,
    explanation: "A = πr² = 3.1416 × 10² = 3.1416 × 100 = 314.16 cm².",
    diagram: {
      type: "circle",
      props: { radius: "10 cm", showRadius: true }
    }
  },
  {
    id: 43,
    text: "If x = 2 and y = 3, evaluate 3x² + 2y.",
    options: ["12", "18", "21", "24"],
    correct: 1,
    explanation: "3×(2²) + 2×3 = 3×4 + 6 = 12 + 6 = 18."
  },
  {
    id: 44,
    text: "A rectangle has a length twice its width. If the perimeter is 36 m, find the width.",
    options: ["6 m", "7 m", "8 m", "9 m"],
    correct: 0,
    explanation: "Let width = w, length = 2w → Perimeter = 2(w + 2w) = 6w = 36 → w = 6 m."
  },
  {
    id: 45,
    text: "Simplify: (4x² − 2x) + (3x² + 5x)",
    options: ["7x² + 3x", "7x² + x", "x² + 7x", "7x² − 3x"],
    correct: 0,
    explanation: "Combine like terms: 4x² + 3x² = 7x²; −2x + 5x = 3x → 7x² + 3x."
  },
  {
    id: 46,
    text: "Convert 1.5 miles to feet.",
    options: ["5280 ft", "7920 ft", "6400 ft", "8800 ft"],
    correct: 1,
    explanation: "1 mile = 5280 ft. 1.5 × 5280 = 7920 ft."
  },
  {
    id: 47,
    text: "Find the surface area of a cube with side 6 cm.",
    options: ["216 cm²", "153 cm²", "182 cm²", "202 cm²"],
    correct: 0,
    explanation: "Surface area = 6 × s² = 6 × 36 = 216 cm².",
  },
  {
    id: 48,
    text: "Simplify: (5² − 3²) × 2",
    options: ["14", "16", "28", "32"],
    correct: 3,
    explanation: "5² − 3² = 25 − 9 = 16; 16 × 2 = 32."
  },
  {
    id: 49,
    text: "A cylinder has radius 3 cm and height 12 cm. Find its volume.",
    options: ["339.12 cm³", "452.16 cm³", "512.46 cm³", "436.15 cm³"],
    correct: 0,
    explanation: "V = πr²h = 3.1416 × 3² × 12 = 3.1416 × 9 × 12 = 339.12 cm³.",
    diagram: {
      type: "cylinder",
      props: { radius: "3 cm", height: "12 cm", showRadius: true, showHeight: true }
    }
  },
  {
    id: 50,
    text: "If 20% of a number is 18, what is the number?",
    options: ["80", "85", "90", "100"],
    correct: 2,
    explanation: "0.20 × N = 18 → N = 18 ÷ 0.20 = 90."
  },
 {
    id: 51,
    text: "Simplify: 7(3x − 2) + 5x",
    options: ["26x − 14", "24x − 14", "21x − 14", "26x − 12"],
    correct: 0,
    explanation: "7×3x=21x, 21x+5x=26x; 7×(−2)=−14 → 26x−14. (Correct: 26x−14, option 1)"
  },
  {
    id: 52,
    text: "If 5y + 4 = 29, find y.",
    options: ["4", "5", "6", "7"],
    correct: 1,
    explanation: "Subtract 4 → 5y = 25 → y = 5."
  },
  {
    id: 53,
    text: "Find the perimeter of a square with side 9 m.",
    options: ["18 m", "27 m", "36 m", "45 m"],
    correct: 2,
    explanation: "Perimeter = 4×9 = 36 m.",
  },
  {
    id: 54,
    text: "Simplify: (2x³)(3x²)(x)",
    options: ["5x⁵", "6x⁶", "6x⁵", "5x⁶"],
    correct: 1,
    explanation: "Multiply coefficients 2×3=6; add exponents 3+2+1=6 → 6x⁶. (Option 2)."
  },
  {
    id: 55,
    text: "Convert 3 km to meters.",
    options: ["300 m", "3,000 m", "30,000 m", "300,000 m"],
    correct: 1,
    explanation: "1 km = 1,000 m; 3×1,000 = 3,000 m."
  },
  {
    id: 56,
    text: "Find the volume of a rectangular box 8 in × 5 in × 3 in.",
    options: ["120 in³", "150 in³", "100 in³", "125 in³"],
    correct: 0,
    explanation: "V = l×w×h = 8×5×3 = 120 in³."
  },
  {
    id: 57,
    text: "Solve for x: 4x − 9 = 3x + 7",
    options: ["14", "15", "16", "17"],
    correct: 2,
    explanation: "Subtract 3x → x−9=7 → x=16."
  },
  {
    id: 58,
    text: "A circle has radius 12 cm. Find its circumference.",
    options: ["37.70 cm", "75.40 cm", "94.25 cm", "62.83 cm"],
    correct: 1,
    explanation: "C = 2πr = 2×3.1416×12 = 75.3984 ≈ 75.40 cm.",
    diagram: {
      type: "circle",
      props: { radius: "12 cm", showRadius: true }
    }
  },
  {
    id: 59,
    text: "If 40% of a number is 32, what is the number?",
    options: ["60", "70", "75", "80"],
    correct: 3,
    explanation: "0.40×N=32 → N=32/0.40 = 80."
  },
  {
    id: 60,
    text: "Simplify: (5x²y³)/(x y²)",
    options: ["5xy", "5x y²", "5x² y", "5x y³"],
    correct: 0,
    explanation: "Subtract exponents: x²/x¹ = x¹; y³/y² = y¹ → 5x¹y¹ → 5xy."
  },
  {
    id: 61,
    text: "Find the area of a parallelogram with base 10 m and height 6 m.",
    options: ["30 m²", "50 m²", "60 m²", "70 m²"],
    correct: 2,
    explanation: "Area = b×h = 10×6 = 60 m²."
  },
  {
    id: 62,
    text: "Simplify: (−3)² + 2³",
    options: ["-13", "17", "-10", "12"],
    correct: 1,
    explanation: "(−3)²=9; 2³=8; 9+8=17."
  },
  {
    id: 63,
    text: "Convert 2 gallons to quarts.",
    options: ["2 qt", "4 qt", "6 qt", "8 qt"],
    correct: 3,
    explanation: "1 gal = 4 qt → 2×4 = 8 qt."
  },
  {
    id: 64,
    text: "Find the mean of the numbers 4, 8, 10, 14.",
    options: ["8.5", "9", "9.5", "10"],
    correct: 1,
    explanation: "(4+8+10+14)=36; 36/4=9."
  },
  {
    id: 65,
    text: "A triangle has sides 5 cm, 12 cm, 13 cm. What type of triangle is it?",
    options: ["Acute", "Obtuse", "Right", "Equilateral"],
    correct: 2,
    explanation: "5²+12²=25+144=169 = 13² → Right triangle."
  },
  {
    id: 66,
    text: "Simplify: (2a + 3b) − (4a − 2b)",
    options: ["−2a + 5b", "−2a − 5b", "6a − b", "6a + b"],
    correct: 0,
    explanation: "Distribute minus: (2a+3b−4a+2b)=−2a+5b."
  },
  {
    id: 67,
    text: "Find the area of a circle with radius 8 in.",
    options: ["100.53 in²", "150.80 in²", "201.06 in²", "250.50 in²"],
    correct: 2,
    explanation: "A = πr² = 3.1416×64 = 201.06 in².",
    diagram: {
      type: "circle",
      props: { radius: "8 in", showRadius: true }
    }
  },
  {
    id: 68,
    text: "Convert 9 ft to inches.",
    options: ["96 in", "100 in", "108 in", "120 in"],
    correct: 2,
    explanation: "1 ft = 12 in; 9×12 = 108 in."
  },
  {
    id: 69,
    text: "Simplify: (3x²y)(2xy³)",
    options: ["6x³y⁴", "5x³y⁴", "6x²y³", "6x³y³"],
    correct: 0,
    explanation: "Multiply coefficients 3×2=6; x²×x¹ = x³; y¹×y³ = y⁴."
  },
  {
    id: 70,
    text: "If the perimeter of a square is 48 cm, find the length of each side.",
    options: ["10 cm", "11 cm", "12 cm", "13 cm"],
    correct: 2,
    explanation: "P = 4s → 48 = 4s → s = 12 cm."
  },
  {
    id: 71,
    text: "Simplify: (9×10)÷3 + 2³",
    options: ["36", "37", "38", "39"],
    correct: 2,
    explanation: "(9×10)=90; 90÷3=30; 2³=8; 30+8=38."
  },
  {
    id: 72,
    text: "If x + 5 = 2x − 7, find x.",
    options: ["10", "11", "12", "13"],
    correct: 2,
    explanation: "Subtract x: 5= x−7 → x = 12."
  },
  {
    id: 73,
    text: "Find the surface area of a cylinder with radius 4 cm and height 10 cm.",
    options: ["351.86 cm²", "400 cm²", "439.82 cm²", "502.65 cm²"],
    correct: 2,
    explanation: "SA = 2πr² + 2πrh = 2×3.1416×16 + 2×3.1416×4×10 = 100.53 + 251.33 = 351.86 cm² (option 0).",
    diagram: {
      type: "cylinder",
      props: { radius: "4 cm", height: "10 cm", showRadius: true, showHeight: true }
    }
  },
  {
    id: 74,
    text: "Simplify: √81 + 4²",
    options: ["25", "28", "31", "33"],
    correct: 0,
    explanation: "√81 = 9; 4² = 16; 9+16 = 25 (option 0?)."
  },
  {
    id: 75,
    text: "A rectangle is 3 times as long as it is wide. If its perimeter is 48 m, find its dimensions.",
    options: [
      "Length = 18 m, Width = 6 m",
      "Length = 24 m, Width = 8 m",
      "Length = 15 m, Width = 5 m",
      "Length = 12 m, Width = 4 m"
    ],
    correct: 0,
    explanation: "Let width = w, length = 3w → 2(3w + w)=48 → 8w=48 → w=6, L=18."
  },
    {
    id: 76,
    text: "If 4x − 9 = 15, what is the value of x?",
    options: ["4", "5", "6", "7"],
    correct: 2,
    explanation: "Add 9 to both sides: 4x = 24. Divide by 4: x = 6."
  },
  {
    id: 77,
    text: "Simplify: 3(2x + 4) − 5x.",
    options: ["x + 4", "x + 12", "x + 7", "x − 4"],
    correct: 1,
    explanation: "3(2x + 4) = 6x + 12. Then 6x + 12 − 5x = x + 12."
  },
  {
    id: 78,
    text: "Find the area of a circle with radius 7 cm.",
    diagram: { type: 'circle', props: { radius: '7 cm' } },
    options: ["100.53 cm²", "124.26 cm²", "153.94 cm²", "175.66 cm²"],
    correct: 2,
    explanation: "Area = 3.1416 × 7² = 3.1416 × 49 = 153.94 cm²."
  },
  {
    id: 79,
    text: "Convert 3 feet into inches.",
    options: ["24 in", "30 in", "36 in", "48 in"],
    correct: 2,
    explanation: "1 foot = 12 inches. 3 × 12 = 36 inches."
  },
  {
    id: 80,
    text: "If 2y + 5 = 19, find y.",
    options: ["5", "6", "7", "8"],
    correct: 2,
    explanation: "2y = 14 → y = 7."
  },
  {
    id: 81,
    text: "Find the perimeter of a rectangle with length 10 cm and width 6 cm.",
    options: ["16 cm", "26 cm", "32 cm", "20 cm"],
    correct: 2,
    explanation: "Perimeter = 2(10 + 6) = 32 cm."
  },
  {
    id: 82,
    text: "Simplify: 5² × 5³.",
    options: ["5⁵", "5⁶", "25", "125"],
    correct: 0,
    explanation: "Same base multiplication: add exponents. 5² × 5³ = 5⁵."
  },
  {
    id: 83,
    text: "A train travels 90 miles in 1.5 hours. What is its average speed?",
    diagram: { type: 'distance', props: { distance: '90', time: '1.5 h' } },
    options: ["45 mph", "55 mph", "60 mph", "75 mph"],
    correct: 2,
    explanation: "Speed = distance ÷ time = 90 ÷ 1.5 = 60 mph."
  },
  {
    id: 84,
    text: "Simplify: (8 ÷ 2) × (3 + 1).",
    options: ["8", "12", "16", "20"],
    correct: 2,
    explanation: "8 ÷ 2 = 4; (3 + 1) = 4; 4 × 4 = 16."
  },
  {
    id: 85,
    text: "If 40% of a number is 20, what is the number?",
    options: ["30", "40", "50", "60"],
    correct: 2,
    explanation: "0.4 × N = 20 → N = 50."
  },
  {
    id: 86,
    text: "Find the volume of a cylinder with radius 4 cm and height 10 cm.",
    diagram: { type: 'cylinder', props: { radius: '4 cm', height: '10 cm' } },
    options: ["414.12 cm³", "502.65 cm³", "626.45 cm³", "653.98 cm³"],
    correct: 1,
    explanation: "V = 3.1416 × 4² × 10 = 3.1416 × 160 = 502.65 cm³."
  },
  {
    id: 87,
    text: "Solve for x: x ÷ 3 = 12.",
    options: ["36", "9", "15", "18"],
    correct: 0,
    explanation: "Multiply both sides by 3: x = 36."
  },
  {
    id: 88,
    text: "Find the missing angle: Two angles of a triangle are 35° and 65°.",
    options: ["70°", "80°", "85°", "90°"],
    correct: 1,
    explanation: "Sum = 180°. 180 − (35 + 65) = 80°."
  },
  {
    id: 89,
    text: "Convert 2.5 kilograms to grams.",
    options: ["1500 g", "2000 g", "2500 g", "3000 g"],
    correct: 2,
    explanation: "1 kg = 1000 g. 2.5 × 1000 = 2500 g."
  },
  {
    id: 90,
    text: "Simplify: (6³) ÷ (6²).",
    options: ["6", "12", "36", "216"],
    correct: 0,
    explanation: "Subtract exponents: 6³ ÷ 6² = 6¹ = 6."
  },
  {
    id: 91,
    text: "A rectangular field has a length twice its width. If the perimeter is 60 m, find the width.",
    options: ["8 m", "10 m", "12 m", "15 m"],
    correct: 1,
    explanation: "2(2w + w) = 60 → 6w = 60 → w = 10 m."
  },
  {
    id: 92,
    text: "Simplify: √81.",
    options: ["7", "8", "9", "10"],
    correct: 2,
    explanation: "√81 = 9."
  },
  {
    id: 93,
    text: "If a = 4 and b = 3, find the value of a² + b².",
    options: ["7", "12", "16", "25"],
    correct: 3,
    explanation: "4² + 3² = 16 + 9 = 25."
  },
  {
    id: 94,
    text: "Find the area of a trapezoid with bases 8 cm and 12 cm, and height 5 cm.",
    diagram: { type: 'trapezoid', props: { topBase: '8 cm', bottomBase: '12 cm', height: '5 cm' } },
    options: ["40 cm²", "45 cm²", "50 cm²", "55 cm²"],
    correct: 2,
    explanation: "A = ½ × (8 + 12) × 5 = 10 × 5 = 50 cm²."
  },
  {
    id: 95,
    text: "If 15% of x = 9, what is x?",
    options: ["45", "50", "55", "60"],
    correct: 3,
    explanation: "0.15x = 9 → x = 9 ÷ 0.15 = 60."
  },
  {
    id: 96,
    text: "Convert 72 inches into feet.",
    options: ["5 ft", "6 ft", "7 ft", "8 ft"],
    correct: 1,
    explanation: "72 ÷ 12 = 6 feet."
  },
  {
    id: 97,
    text: "Find the simple interest: $1000 at 5% for 2 years.",
    options: ["$50", "$75", "$100", "$150"],
    correct: 2,
    explanation: "I = P × R × T = 1000 × 0.05 × 2 = 100."
  },
  {
    id: 98,
    text: "Find the circumference of a circle with radius 9 cm.",
    diagram: { type: 'circle', props: { radius: '9 cm' } },
    options: ["50.8 cm", "56.52 cm", "62.83 cm", "70 cm"],
    correct: 1,
    explanation: "C = 2 × 3.1416 × 9 = 56.5488 ≈ 56.52 cm."
  },
  {
    id: 99,
    text: "Simplify: (2 + 3)² − 4².",
    options: ["5", "7", "9", "13"],
    correct: 2,
    explanation: "(2 + 3)² − 4² = 25 − 16 = 9."
  },
  {
    id: 100,
    text: "A car travels 180 miles on 6 gallons of gas. What is its fuel efficiency?",
    options: ["25 mpg", "28 mpg", "30 mpg", "35 mpg"],
    correct: 2,
    explanation: "180 ÷ 6 = 30 miles per gallon."
  },
  {
    id: 101,
    text: "Solve for x: 7x − 14 = 0.",
    options: ["0", "1", "2", "3"],
    correct: 2,
    explanation: "7x = 14 → x = 2."
  },
  {
    id: 102,
    text: "If a = 5 and b = 2, evaluate a³ − b².",
    options: ["117", "121", "119", "125"],
    correct: 0,
    explanation: "a³ − b² = 125 − 4 = 121."
  },
  {
    id: 103,
    text: "Find the perimeter of a square with side length 12 cm.",
    options: ["24 cm", "36 cm", "44 cm", "48 cm"],
    correct: 3,
    explanation: "Perimeter = 4 × 12 = 48 cm."
  },
  {
    id: 104,
    text: "Simplify: (9 + 3)² ÷ 12.",
    options: ["9", "10", "12", "16"],
    correct: 2,
    explanation: "(9 + 3)² = 144; 144 ÷ 12 = 12."
  },
  {
    id: 105,
    text: "Convert 1.25 miles to feet.",
    options: ["5500 ft", "6600 ft", "7000 ft", "7200 ft"],
    correct: 1,
    explanation: "1 mile = 5280 ft → 1.25 × 5280 = 6600 ft."
  },
  {
    id: 106,
    text: "Find the area of a trapezoid with bases 10 m and 14 m, and height 6 m.",
    diagram: { type: 'trapezoid', props: { base1: '10 m', base2: '14 m', height: '6 m' } },
    options: ["68 m²", "70 m²", "72 m²", "80 m²"],
    correct: 2,
    explanation: "A = ½ × (10 + 14) × 6 = 72 m²."
  },
  {
    id: 107,
    text: "Simplify: (2³)².",
    options: ["2⁶", "2⁵", "8", "16"],
    correct: 0,
    explanation: "Multiply exponents: (2³)² = 2⁶."
  },
  {
    id: 108,
    text: "If the perimeter of a rectangle is 30 cm and its length is 10 cm, find the width.",
    options: ["3 cm", "4 cm", "5 cm", "6 cm"],
    correct: 2,
    explanation: "2(L + W) = 30 → L + W = 15 → W = 5 cm."
  },
  {
    id: 109,
    text: "Convert 3.5 liters to milliliters.",
    options: ["2500 mL", "3000 mL", "3500 mL", "4000 mL"],
    correct: 2,
    explanation: "1 L = 1000 mL → 3.5 × 1000 = 3500 mL."
  },
  {
    id: 110,
    text: "A cylinder has radius 3 cm and height 12 cm. Find its volume.",
    diagram: { type: 'cylinder', props: { radius: '3 cm', height: '12 cm' } },
    options: ["325 cm³", "339 cm³", "407 cm³", "424 cm³"],
    correct: 2,
    explanation: "V = 3.1416 × 3² × 12 = 3.1416 × 108 = 339.29 cm³."
  },
  {
    id: 111,
    text: "Simplify: 6(2x − 4) + 8.",
    options: ["12x − 16", "12x − 8", "12x − 24", "12x − 32"],
    correct: 1,
    explanation: "6(2x − 4) = 12x − 24; +8 → 12x − 16."
  },
  {
    id: 112,
    text: "Find 25% of 240.",
    options: ["50", "60", "70", "80"],
    correct: 1,
    explanation: "25% = 0.25; 0.25 × 240 = 60."
  },
  {
    id: 113,
    text: "A triangle has sides 5 cm, 12 cm, and 13 cm. What type of triangle is it?",
    options: ["Equilateral", "Isosceles", "Right", "Scalene"],
    correct: 2,
    explanation: "5² + 12² = 13² → 25 + 144 = 169 → right triangle."
  },
  {
    id: 114,
    text: "Simplify: √(64 / 4).",
    options: ["2", "4", "6", "8"],
    correct: 1,
    explanation: "64 ÷ 4 = 16 → √16 = 4."
  },
  {
    id: 115,
    text: "Convert 90°F to Celsius (C = (F − 32) × 5/9).",
    options: ["30°C", "32°C", "34°C", "36°C"],
    correct: 2,
    explanation: "C = (90 − 32) × 5/9 = 58 × 0.555 = 32.2°C."
  },
  {
    id: 116,
    text: "If 5x + 2 = 27, find x.",
    options: ["4", "5", "6", "7"],
    correct: 2,
    explanation: "5x = 25 → x = 5."
  },
  {
    id: 117,
    text: "Find the circumference of a circle with diameter 14 cm.",
    options: ["36.98 cm", "40.12 cm", "43.98 cm", "48 cm"],
    correct: 2,
    explanation: "C = 3.1416 × 14 = 43.98 cm."
  },
  {
    id: 118,
    text: "Simplify: (4² + 3²) ÷ 5.",
    options: ["4", "5", "6", "7"],
    correct: 1,
    explanation: "(16 + 9) ÷ 5 = 25 ÷ 5 = 5."
  },
  {
    id: 119,
    text: "A vehicle travels 240 miles in 4 hours. What is its average speed?",
    options: ["50 mph", "55 mph", "60 mph", "65 mph"],
    correct: 2,
    explanation: "240 ÷ 4 = 60 mph."
  },
  {
    id: 120,
    text: "Find the area of a circle with radius 10 cm.",
    options: ["300 cm²", "314.16 cm²", "325 cm²", "350 cm²"],
    correct: 1,
    explanation: "A = 3.1416 × 10² = 314.16 cm²."
  },
  {
    id: 121,
    text: "Simplify: (2x²)(3x³).",
    options: ["5x⁵", "6x⁵", "6x⁶", "8x⁵"],
    correct: 1,
    explanation: "Multiply coefficients and add exponents: 2×3=6; 2+3=5 → 6x⁵."
  },
  {
    id: 122,
    text: "Convert 0.75 hours to minutes.",
    options: ["35 min", "40 min", "45 min", "60 min"],
    correct: 2,
    explanation: "0.75 × 60 = 45 minutes."
  },
  {
    id: 123,
    text: "Simplify: 10² − 6².",
    options: ["28", "36", "64", "100"],
    correct: 2,
    explanation: "100 − 36 = 64."
  },
  {
    id: 124,
    text: "A trapezoid has bases 6 m and 10 m, and height 4 m. Find its area.",
    diagram: { type: 'trapezoid', props: { base1: '6 m', base2: '10 m', height: '4 m' } },
    options: ["28 m²", "30 m²", "32 m²", "36 m²"],
    correct: 1,
    explanation: "A = ½ × (6 + 10) × 4 = 8 × 4 = 32 m²."
  },
  {
    id: 125,
    text: "Simplify: (12 − 4) ÷ 2 + 6.",
    options: ["6", "8", "10", "12"],
    correct: 2,
    explanation: "(12 − 4) = 8 → 8 ÷ 2 = 4 → 4 + 6 = 10."
  },
   {
    id: 126,
    text: "Solve for x: 5(2x - 3) = 35.",
    options: ["x = 4", "x = 5", "x = 6", "x = 7"],
    correct: 1,
    explanation: "5(2x - 3) = 35 → 10x - 15 = 35 → 10x = 50 → x = 5."
  },
  {
    id: 127,
    text: "If 3x + 4y = 18 and y = 3, what is x?",
    options: ["2", "3", "4", "5"],
    correct: 2,
    explanation: "Substitute y = 3 → 3x + 12 = 18 → 3x = 6 → x = 2."
  },
  {
    id: 128,
    text: "Simplify: 6x² ÷ 3x.",
    options: ["2x", "2x²", "3x", "3x²"],
    correct: 0,
    explanation: "Divide coefficients and subtract exponents: 6 ÷ 3 = 2, x² ÷ x = x¹ → 2x."
  },
  {
    id: 129,
    text: "A rectangle has a length 3 times its width. If the perimeter is 64 cm, what is its width?",
    options: ["8 cm", "10 cm", "12 cm", "14 cm"],
    correct: 0,
    explanation: "P = 2(l + w) = 64. Substitute l = 3w → 2(3w + w) = 64 → 8w = 64 → w = 8 cm."
  },
  {
    id: 130,
    text: "A cylinder has a radius of 5 cm and height of 10 cm. What is its volume? (Use π ≈ 3.14)",
    diagram: {
      type: 'cylinder',
      props: { radius: '5 cm', height: '10 cm' }
    },
    options: ["785 cm³", "7850 cm³", "1570 cm³", "3140 cm³"],
    correct: 0,
    explanation: "V = πr²h = 3.14 × 25 × 10 = 785 cm³."
  },
  {
    id: 131,
    text: "If 4x – 7 = 2x + 9, what is the value of x?",
    options: ["4", "5", "6", "8"],
    correct: 2,
    explanation: "4x – 2x = 9 + 7 → 2x = 16 → x = 8."
  },
  {
    id: 132,
    text: "Find the value of y in: 2y/3 + 4 = 10.",
    options: ["6", "8", "9", "12"],
    correct: 0,
    explanation: "2y/3 = 6 → multiply both sides by 3/2 → y = 9."
  },
  {
    id: 133,
    text: "The area of a triangle is 42 m² and its base is 12 m. What is its height?",
    options: ["5 m", "6 m", "7 m", "8 m"],
    correct: 2,
    explanation: "A = ½ × base × height → 42 = ½ × 12 × h → 42 = 6h → h = 7 m."
  },
  {
    id: 134,
    text: "Simplify: (4x²y)(3xy²).",
    options: ["7x³y³", "12x³y³", "12x²y²", "x⁵y⁴"],
    correct: 1,
    explanation: "Multiply coefficients and add exponents: 4×3=12, x²·x=x³, y·y²=y³ → 12x³y³."
  },
  {
    id: 135,
    text: "The average of five consecutive odd numbers is 27. What is the smallest number?",
    options: ["19", "21", "23", "25"],
    correct: 2,
    explanation: "If the middle number is 27, sequence is 23,25,27,29,31 → smallest is 23."
  },
  {
    id: 136,
    text: "If a train travels 120 miles in 2 hours, what is its average speed in miles per hour?",
    options: ["40 mph", "50 mph", "60 mph", "70 mph"],
    correct: 2,
    explanation: "Speed = distance/time = 120 ÷ 2 = 60 mph."
  },
  {
    id: 137,
    text: "Simplify: (3/4) × (8/9).",
    options: ["2/3", "1/2", "3/8", "4/5"],
    correct: 0,
    explanation: "(3×8)/(4×9) = 24/36 = 2/3."
  },
  {
    id: 138,
    text: "If a = 2 and b = 5, evaluate 3a² + 2b.",
    options: ["19", "20", "22", "26"],
    correct: 3,
    explanation: "3(4) + 2(5) = 12 + 10 = 22."
  },
  {
    id: 139,
    text: "A car’s value decreases 20% each year. If it is worth $20,000 now, what will it be worth after one year?",
    options: ["$16,000", "$18,000", "$15,000", "$17,500"],
    correct: 0,
    explanation: "20% depreciation → 80% of 20,000 → 0.8×20,000 = 16,000."
  },
  {
    id: 140,
    text: "If 5x + 3 = 23, what is x?",
    options: ["3", "4", "5", "6"],
    correct: 2,
    explanation: "5x = 20 → x = 4."
  },
  {
    id: 141,
    text: "A square has a perimeter of 48 cm. What is its area?",
    options: ["64 cm²", "121 cm²", "144 cm²", "256 cm²"],
    correct: 2,
    explanation: "Each side = 48 ÷ 4 = 12 cm → Area = 12² = 144 cm²."
  },
  {
    id: 142,
    text: "If 6 pencils cost $2.40, how much do 10 pencils cost?",
    options: ["$3.60", "$4.00", "$4.20", "$4.50"],
    correct: 0,
    explanation: "Unit price = 2.40 ÷ 6 = 0.40 → 10 × 0.40 = 4.00."
  },
  {
    id: 143,
    text: "Simplify: (x²y³)².",
    options: ["x⁴y⁶", "x³y⁵", "x²y⁶", "x⁴y³"],
    correct: 0,
    explanation: "Power to a power: multiply exponents → x²² = x⁴, y³² = y⁶ → x⁴y⁶."
  },
  {
    id: 144,
    text: "A rectangular field is twice as long as it is wide. If its area is 200 m², what is its width?",
    options: ["8 m", "10 m", "12 m", "14 m"],
    correct: 1,
    explanation: "Let width = w, length = 2w → Area = 2w² = 200 → w² = 100 → w = 10 m."
  },
  {
    id: 145,
    text: "Find the perimeter of a trapezoid with sides 8 cm, 10 cm, 12 cm, and 14 cm.",
    options: ["40 cm", "42 cm", "44 cm", "46 cm"],
    correct: 2,
    explanation: "Perimeter = 8 + 10 + 12 + 14 = 44 cm."
  },
  {
    id: 146,
    text: "Simplify: (x³ × x⁴) ÷ x².",
    options: ["x³", "x⁴", "x⁵", "x⁶"],
    correct: 2,
    explanation: "Add exponents in numerator (3+4=7), subtract denominator (7−2=5) → x⁵."
  },
  {
    id: 147,
    text: "If the ratio of cats to dogs is 3:5, and there are 15 cats, how many dogs are there?",
    options: ["20", "22", "24", "25"],
    correct: 3,
    explanation: "3:5 → 3 parts = 15 → 1 part = 5 → 5×5 = 25 dogs."
  },
  {
    id: 148,
    text: "A store offers a 15% discount on a $60 item. What is the sale price?",
    options: ["$45", "$48", "$51", "$54"],
    correct: 2,
    explanation: "15% off = 0.85×60 = $51."
  },
  {
    id: 149,
    text: "Solve for x: 4x/5 = 12.",
    options: ["10", "12", "14", "15"],
    correct: 3,
    explanation: "Multiply both sides by 5/4 → x = 12×5/4 = 15."
  },
  {
    id: 150,
    text: "If the circumference of a circle is 31.4 cm, what is its radius? (Use π ≈ 3.14)",
    options: ["4 cm", "5 cm", "6 cm", "7 cm"],
    correct: 1,
    explanation: "C = 2πr → 31.4 = 6.28r → r = 5 cm."
  },
   {
    id: 151,
    text: "Solve for x: 3x + 4 = 31.",
    options: ["8", "9", "10", "11"],
    correct: 1,
    explanation: "3x = 31 − 4 = 27 → x = 27 ÷ 3 = 9."
  },
  {
    id: 152,
    text: "Simplify: (2x²)(3x).",
    options: ["5x³", "6x³", "6x²", "5x²"],
    correct: 1,
    explanation: "Multiply coefficients 2×3=6 and add exponents 2+1=3 → 6x³."
  },
  {
    id: 153,
    text: "Find the area of a circle with radius 5 cm.",
    diagram: { type: "circle", props: { radius: "5 cm" } },
    options: ["78.54 cm²", "75.00 cm²", "80.00 cm²", "85.00 cm²"],
    correct: 0,
    explanation: "A = πr² → A = 3.1416 × 5² = 3.1416 × 25 = 78.54 cm²."
  },
  {
    id: 154,
    text: "Convert 5 feet to inches.",
    options: ["50 in", "60 in", "55 in", "48 in"],
    correct: 1,
    explanation: "1 ft = 12 in → 5 × 12 = 60 in."
  },
  {
    id: 155,
    text: "If x + 2y = 10 and y = 3, what is x?",
    options: ["2", "3", "4", "5"],
    correct: 2,
    explanation: "x + 2(3) = 10 → x + 6 = 10 → x = 4."
  },
  {
    id: 156,
    text: "Find the volume of a cylinder with radius 2 cm and height 7 cm.",
    diagram: { type: "cylinder", props: { radius: "2 cm", height: "7 cm" } },
    options: ["87.96 cm³", "88.00 cm³", "90.00 cm³", "100.00 cm³"],
    correct: 0,
    explanation: "V = πr²h → 3.1416 × 2² × 7 = 3.1416 × 4 × 7 = 87.9648 ≈ 87.96 cm³."
  },
  {
    id: 157,
    text: "What is 12% of 250?",
    options: ["25", "30", "35", "40"],
    correct: 1,
    explanation: "0.12 × 250 = 30."
  },
  {
    id: 158,
    text: "Simplify: √144 + 5.",
    options: ["15", "16", "17", "18"],
    correct: 2,
    explanation: "√144 = 12 → 12 + 5 = 17."
  },
  {
    id: 159,
    text: "What is the slope of the line through (1, 2) and (4, 8)?",
    options: ["1", "2", "3", "6"],
    correct: 1,
    explanation: "Slope = (8 − 2) ÷ (4 − 1) = 6 ÷ 3 = 2."
  },
  {
    id: 160,
    text: "Find the mean of 3, 7, 11, and 15.",
    options: ["8", "9", "10", "11"],
    correct: 1,
    explanation: "Sum = 3 + 7 + 11 + 15 = 36 → mean = 36 ÷ 4 = 9."
  },
  {
    id: 161,
    text: "Find the area of a trapezoid with bases 6 m and 10 m and height 4 m.",
    diagram: { type: "trapezoid", props: { base1: "6 m", base2: "10 m", height: "4 m" } },
    options: ["28 m²", "32 m²", "34 m²", "36 m²"],
    correct: 1,
    explanation: "A = ½ × (b₁ + b₂) × h = 0.5 × (6 + 10) × 4 = 0.5 × 16 × 4 = 32 m²."
  },
  {
    id: 162,
    text: "Compute: 5² − 3².",
    options: ["12", "14", "16", "18"],
    correct: 2,
    explanation: "25 − 9 = 16."
  },
  {
    id: 163,
    text: "Convert 2.2 pounds to ounces.",
    options: ["34.2 oz", "35.2 oz", "36 oz", "32 oz"],
    correct: 1,
    explanation: "1 lb = 16 oz → 2.2 × 16 = 35.2 oz."
  },
  {
    id: 164,
    text: "Solve for x: 0.5x + 7 = 15.",
    options: ["14", "15", "16", "17"],
    correct: 2,
    explanation: "0.5x = 8 → x = 8 ÷ 0.5 = 16."
  },
  {
    id: 165,
    text: "A right triangle has legs 7 m and 24 m. What is the hypotenuse?",
    diagram: { type: "triangle", props: { base: "7 m", height: "24 m", hypotenuse: "?" } },
    options: ["23 m", "25 m", "26 m", "27 m"],
    correct: 1,
    explanation: "√(7² + 24²) = √(49 + 576) = √625 = 25 m."
  },
  {
    id: 166,
    text: "Simplify: x⁴ ÷ x².",
    options: ["x²", "x³", "x⁴", "x"],
    correct: 0,
    explanation: "Subtract exponents: 4 − 2 = 2 → x²."
  },
  {
    id: 167,
    text: "A car travels 150 miles in 2.5 hours. What is its average speed in mph?",
    options: ["50 mph", "55 mph", "60 mph", "65 mph"],
    correct: 2,
    explanation: "150 ÷ 2.5 = 60 mph."
  },
  {
    id: 168,
    text: "Increase 80 by 25%. What is the new value?",
    options: ["95", "100", "105", "110"],
    correct: 1,
    explanation: "25% of 80 is 20 → 80 + 20 = 100."
  },
  {
    id: 169,
    text: "Find the area of a rectangle 14 m by 9 m.",
    options: ["116 m²", "126 m²", "136 m²", "146 m²"],
    correct: 1,
    explanation: "Area = 14 × 9 = 126 m²."
  },
  {
    id: 170,
    text: "Find the median of 3, 7, 9, 13, 20.",
    options: ["7", "9", "11", "13"],
    correct: 1,
    explanation: "Ordered list → middle value is 9."
  },
  {
    id: 171,
    text: "One root of x² − 5x + 6 = 0 is:",
    options: ["1", "2", "3", "4"],
    correct: 1,
    explanation: "Factor: (x − 2)(x − 3) = 0 → roots 2 and 3; one root is 2."
  },
  {
    id: 172,
    text: "Convert 3 gallons to quarts.",
    options: ["10 qt", "11 qt", "12 qt", "13 qt"],
    correct: 2,
    explanation: "1 gal = 4 qt → 3 × 4 = 12 qt."
  },
  {
    id: 173,
    text: "Perimeter of an equilateral triangle with side 9 cm is:",
    options: ["18 cm", "24 cm", "27 cm", "30 cm"],
    correct: 2,
    explanation: "Perimeter = 3 × 9 = 27 cm."
  },
  {
    id: 174,
    text: "Find the surface area of a cube with side 5 cm.",
    options: ["125 cm²", "150 cm²", "175 cm²", "200 cm²"],
    correct: 1,
    explanation: "Surface area = 6 × s² = 6 × 25 = 150 cm²."
  },
  {
    id: 175,
    text: "If 3/5 of a number is 36, what is the number?",
    options: ["48", "54", "60", "72"],
    correct: 2,
    explanation: "Let N be number: (3/5)N = 36 → N = 36 × (5/3) = 36 × 1.666... = 60."
  },
  {
    id: 176,
    text: "A pilot descends from 12,000 feet to 7,500 feet over 30 miles. What is the average descent rate per mile?",
    options: ["150 ft/mi", "180 ft/mi", "200 ft/mi", "225 ft/mi"],
    correct: 0,
    explanation: "Total descent = 12,000 - 7,500 = 4,500 ft. Divide by 30 miles → 4,500 / 30 = 150 ft/mi."
  },
  {
    id: 177,
    text: "An aircraft travels 240 miles in 1.5 hours. What is its average speed in miles per hour?",
    options: ["140 mph", "150 mph", "160 mph", "180 mph"],
    correct: 2,
    explanation: "Speed = Distance ÷ Time = 240 ÷ 1.5 = 160 mph."
  },
  {
    id: 178,
    text: "A rectangular hangar is 120 feet long and 80 feet wide. What is its area?",
    options: ["8,600 sq ft", "9,200 sq ft", "9,600 sq ft", "10,000 sq ft"],
    correct: 2,
    explanation: "Area = Length × Width = 120 × 80 = 9,600 sq ft."
  },
  {
    id: 179,
    text: "If a radar sweeps 360° every 12 seconds, how many degrees does it rotate per second?",
    options: ["15°", "25°", "30°", "45°"],
    correct: 2,
    explanation: "360° ÷ 12 s = 30°/s.",
  },
  {
    id: 180,
    text: "An aircraft consumes 72 gallons of fuel in 2 hours. How many gallons per hour is that?",
    options: ["32 gph", "34 gph", "36 gph", "38 gph"],
    correct: 2,
    explanation: "Fuel rate = 72 ÷ 2 = 36 gallons per hour."
  },
  {
    id: 181,
    text: "A pilot plans to fly 450 miles at 150 mph. How long will the flight take?",
    options: ["2 hours", "2.5 hours", "3 hours", "3.5 hours"],
    correct: 2,
    explanation: "Time = Distance ÷ Speed = 450 ÷ 150 = 3 hours."
  },
  {
    id: 182,
    text: "A map scale shows 1 inch = 50 miles. How many inches represent 300 miles?",
    options: ["4", "5", "6", "7"],
    correct: 2,
    explanation: "300 ÷ 50 = 6 inches."
  },
  {
    id: 183,
    text: "A water tank is a cylinder with radius 5 ft and height 10 ft. What is its volume? (Use π = 3.14)",
    diagram: {
      type: 'cylinder',
      props: { radius: 5, height: 10 }
    },
    options: ["628 ft³", "700 ft³", "785 ft³", "942 ft³"],
    correct: 0,
    explanation: "V = πr²h = 3.14 × 5² × 10 = 3.14 × 25 × 10 = 785 ft³."
  },
  {
    id: 184,
    text: "A rectangular runway measures 150 ft by 2,000 ft. Find its perimeter.",
    options: ["3,300 ft", "4,000 ft", "4,100 ft", "4,300 ft"],
    correct: 1,
    explanation: "P = 2(l + w) = 2(2000 + 150) = 2 × 2150 = 4300 ft."
  },
  {
    id: 185,
    text: "If a jet burns 2,400 pounds of fuel in 3 hours, what is the burn rate per hour?",
    options: ["600 lb/hr", "700 lb/hr", "800 lb/hr", "900 lb/hr"],
    correct: 2,
    explanation: "2,400 ÷ 3 = 800 lb/hr."
  },
  {
    id: 186,
    text: "A car travels 120 miles at 60 mph. How long will the trip take?",
    options: ["1.5 hours", "2 hours", "2.5 hours", "3 hours"],
    correct: 1,
    explanation: "Time = 120 ÷ 60 = 2 hours."
  },
  {
    id: 187,
    text: "If a flight covers 450 miles in 3 hours, what is the average speed?",
    options: ["130 mph", "140 mph", "150 mph", "160 mph"],
    correct: 2,
    explanation: "450 ÷ 3 = 150 mph."
  },
  {
    id: 188,
    text: "A pilot climbs at a rate of 600 ft/min for 8 minutes. How much altitude is gained?",
    options: ["3,800 ft", "4,200 ft", "4,800 ft", "5,000 ft"],
    correct: 2,
    explanation: "600 × 8 = 4,800 ft."
  },
  {
    id: 189,
    text: "A right triangle has legs 9 ft and 12 ft. Find the hypotenuse.",
    diagram: {
      type: 'triangle',
      props: { base: '9 ft', height: '12 ft', hypotenuse: '?', showHypotenuse: true }
    },
    options: ["13 ft", "14 ft", "15 ft", "16 ft"],
    correct: 2,
    explanation: "√(9² + 12²) = √(81 + 144) = √225 = 15 ft."
  },
  {
    id: 190,
    text: "A rectangle has an area of 48 sq ft and width of 6 ft. What is its length?",
    options: ["6 ft", "7 ft", "8 ft", "9 ft"],
    correct: 2,
    explanation: "Area = L × W → L = 48 ÷ 6 = 8 ft."
  },
  {
    id: 191,
    text: "A jet travels 500 miles with a 20 mph tailwind in 2 hours. What is the jet’s airspeed?",
    options: ["220 mph", "230 mph", "240 mph", "250 mph"],
    correct: 2,
    explanation: "Let x = airspeed. Ground speed = x + 20 = 500 / 2 = 250 → x = 230 mph."
  },
  {
    id: 192,
    text: "If a pilot descends 5,000 ft in 10 minutes, what is the descent rate per minute?",
    options: ["400 ft/min", "450 ft/min", "500 ft/min", "550 ft/min"],
    correct: 2,
    explanation: "5,000 ÷ 10 = 500 ft/min."
  },
  {
    id: 193,
    text: "An aircraft travels 300 miles at 120 mph and then 200 miles at 100 mph. What is the average speed for the trip?",
    options: ["108 mph", "110 mph", "112 mph", "115 mph"],
    correct: 1,
    explanation: "Total distance = 500 miles. Total time = (300/120) + (200/100) = 2.5 + 2 = 4.5 h. Avg = 500 / 4.5 ≈ 111.1 mph ≈ 110 mph."
  },
  {
    id: 194,
    text: "A trapezoid has bases 10 ft and 6 ft with height 4 ft. Find its area.",
    diagram: {
      type: 'trapezoid',
      props: { base1: 10, base2: 6, height: 4 }
    },
    options: ["28 ft²", "30 ft²", "32 ft²", "34 ft²"],
    correct: 2,
    explanation: "A = ½(b₁ + b₂)h = ½(10 + 6)(4) = ½(16 × 4) = 32 ft²."
  },
  {
    id: 195,
    text: "If a car uses 12 gallons to travel 300 miles, how many miles per gallon does it get?",
    options: ["22 mpg", "24 mpg", "25 mpg", "27 mpg"],
    correct: 2,
    explanation: "300 ÷ 12 = 25 mpg."
  },
  {
    id: 196,
    text: "A storage room measures 10 ft by 12 ft by 8 ft. What is its volume?",
    options: ["800 ft³", "900 ft³", "960 ft³", "1,000 ft³"],
    correct: 2,
    explanation: "V = l × w × h = 10 × 12 × 8 = 960 ft³."
  },
  {
    id: 197,
    text: "A pilot flies 400 miles in 2.5 hours. What is the average speed?",
    options: ["150 mph", "155 mph", "160 mph", "165 mph"],
    correct: 2,
    explanation: "400 ÷ 2.5 = 160 mph."
  },
  {
    id: 198,
    text: "If an aircraft burns 90 gallons in 3 hours, how long can it fly with 150 gallons at the same rate?",
    options: ["4 hours", "4.5 hours", "5 hours", "5.5 hours"],
    correct: 2,
    explanation: "Rate = 90 ÷ 3 = 30 gph. Time = 150 ÷ 30 = 5 hours."
  },
  {
    id: 199,
    text: "A jet travels 600 miles in 2 hours against a 50 mph headwind. What is its airspeed?",
    options: ["325 mph", "350 mph", "375 mph", "400 mph"],
    correct: 2,
    explanation: "Let x = airspeed. Ground speed = x - 50 = 600 / 2 = 300 → x = 350 mph."
  },
  {
    id: 200,
    text: "A pilot descends from 9,000 ft to 3,000 ft over 20 miles. What is the average descent per mile?",
    options: ["250 ft/mi", "275 ft/mi", "300 ft/mi", "325 ft/mi"],
    correct: 2,
    explanation: "9,000 - 3,000 = 6,000 ft. Divide by 20 = 300 ft/mi."
  }
];

export const MATH_KNOWLEDGE_CONFIG = {
  timeLimit: 22 * 60,
  sectionName: "Math Knowledge",
  totalQuestions: 25
};