// Arithmetic Reasoning Questions for AFOQT
export const arithmeticData = [
  {
    id: 1,
    text: "A rectangular garden has a length of 12 feet and a width of 8 feet. What is the area of the garden?",
    diagram: {
      type: 'rectangle',
      props: { width: 12, height: 8 }
    },
    options: [
      "20 square feet",
      "40 square feet",
      "96 square feet",
      "160 square feet"
    ],
    correct: 2,
    explanation: "Area of a rectangle = length × width. So 12 ft × 8 ft = 96 square feet."
  },
  {
    id: 2,
    text: "An aircraft flies at a constant speed of 250 mph. How far will it travel in 3.5 hours?",
    diagram: {
      type: 'distance',
      props: { distance: '?', speed: 250, time: 3.5 }
    },
    options: [
      "750 miles",
      "825 miles",
      "875 miles",
      "900 miles"
    ],
    correct: 2,
    explanation: "Distance = Speed × Time. So 250 mph × 3.5 hours = 875 miles."
  },
  {
    id: 3,
    text: "A right triangle has a base of 6 inches and a height of 8 inches. What is the length of the hypotenuse?",
    diagram: {
      type: 'triangle',
      props: { base: '6 in', height: '8 in', hypotenuse: '?', showHypotenuse: true }
    },
    options: [
      "10 inches",
      "12 inches",
      "14 inches",
      "16 inches"
    ],
    correct: 0,
    explanation: "Using the Pythagorean theorem: a² + b² = c². So 6² + 8² = 36 + 64 = 100. √100 = 10 inches."
  },
  {
    id: 4,
    text: "If a circular pool has a radius of 12 feet, what is its circumference?",
    diagram: {
      type: 'circle',
      props: { radius: '12 ft', showDiameter: false }
    },
    options: [
      "37.68 feet",
      "75.36 feet",
      "150.72 feet",
      "452.16 feet"
    ],
    correct: 1,
    explanation: "Circumference = 2πr. Using π ≈ 3.14: 2 × 3.14 × 12 = 75.36 feet."
  },
  {
    id: 5,
    text: "A mechanic can service 4 aircraft in 6 hours. At this rate, how many aircraft can be serviced in 15 hours?",
    options: [
      "8 aircraft",
      "10 aircraft",
      "12 aircraft",
      "15 aircraft"
    ],
    correct: 1,
    explanation: "First find the rate: 4 aircraft / 6 hours = 2/3 aircraft per hour. Then multiply by 15 hours: (2/3) × 15 = 10 aircraft."
  },
  {
    id: 6,
    text: "A fuel tank contains 450 gallons. If the tank is currently 60% full, how many gallons are in the tank?",
    options: [
      "180 gallons",
      "225 gallons",
      "270 gallons",
      "300 gallons"
    ],
    correct: 2,
    explanation: "60% of 450 = 0.60 × 450 = 270 gallons."
  },
  {
    id: 7,
    text: "A cylindrical storage tank has a radius of 5 feet and a height of 12 feet. What is its volume?",
    diagram: {
      type: 'cylinder',
      props: { radius: '5 ft', height: '12 ft' }
    },
    options: [
      "188.4 cubic feet",
      "376.8 cubic feet",
      "942 cubic feet",
      "1,884 cubic feet"
    ],
    correct: 2,
    explanation: "Volume of a cylinder = πr²h. Using π ≈ 3.14: V = 3.14 × (5)² × 12 = 3.14 × 25 × 12 = 942 cubic feet."
  },
  {
    id: 8,
    text: "If 5 workers can complete a project in 12 days, how long would it take 8 workers to complete the same project, assuming they work at the same rate?",
    options: [
      "7.5 days",
      "8 days",
      "9.6 days",
      "15 days"
    ],
    correct: 0,
    explanation: "This is an inverse proportion. Total work = 5 × 12 = 60 worker-days. So 60 worker-days ÷ 8 workers = 7.5 days."
  },
  {
    id: 9,
    text: "A supply order costs $1,200 before a 15% discount is applied. What is the final cost after the discount?",
    options: [
      "$180",
      "$900",
      "$1,020",
      "$1,080"
    ],
    correct: 2,
    explanation: "Discount amount = 15% of $1,200 = 0.15 × $1,200 = $180. Final cost = $1,200 - $180 = $1,020."
  },
  {
    id: 10,
    text: "An aircraft climbs from 5,000 feet to 20,000 feet in 10 minutes. What is the average rate of climb in feet per minute?",
    options: [
      "1,000 ft/min",
      "1,250 ft/min",
      "1,500 ft/min",
      "2,000 ft/min"
    ],
    correct: 2,
    explanation: "Change in altitude = 20,000 - 5,000 = 15,000 feet. Rate = 15,000 feet ÷ 10 minutes = 1,500 ft/min."
  },
  {
    id: 11,
    text: "A training squadron has 45 pilots. If 3/5 of them are qualified for night operations, how many pilots are NOT qualified for night operations?",
    options: [
      "15 pilots",
      "18 pilots",
      "27 pilots",
      "30 pilots"
    ],
    correct: 1,
    explanation: "Qualified pilots = 3/5 × 45 = 27. Not qualified = 45 - 27 = 18 pilots."
  },
  {
    id: 12,
    text: "If the ratio of officers to enlisted personnel is 1:4, and there are 60 enlisted personnel, how many officers are there?",
    options: [
      "12 officers",
      "15 officers",
      "18 officers",
      "20 officers"
    ],
    correct: 1,
    explanation: "A ratio of 1:4 means 1 part officers to 4 parts enlisted, totaling 5 parts. If enlisted = 4 parts = 60 people, then 1 part = 60 ÷ 4 = 15. Officers = 1 part = 15 officers."
  },
  {
    id: 13,
    text: "A rectangular room is 15 feet long and 12 feet wide. If carpet costs $3.50 per square foot, how much will it cost to carpet the entire room?",
    diagram: {
      type: 'rectangle',
      props: { width: 15, height: 12, widthLabel: '15 ft', heightLabel: '12 ft' }
    },
    options: [
      "$180",
      "$378",
      "$525",
      "$630"
    ],
    correct: 3,
    explanation: "Area = 15 × 12 = 180 square feet. Cost = 180 × $3.50 = $630."
  },
  {
    id: 14,
    text: "A vehicle travels 240 miles on 12 gallons of fuel. What is the fuel efficiency in miles per gallon?",
    options: [
      "15 mpg",
      "18 mpg",
      "20 mpg",
      "22 mpg"
    ],
    correct: 2,
    explanation: "Fuel efficiency = Total miles ÷ Total gallons = 240 ÷ 12 = 20 miles per gallon."
  },
  {
    id: 15,
    text: "If a square has a perimeter of 48 inches, what is the length of one side?",
    options: [
      "8 inches",
      "10 inches",
      "12 inches",
      "16 inches"
    ],
    correct: 2,
    explanation: "A square has 4 equal sides. Perimeter = 4 × side length. So side = 48 ÷ 4 = 12 inches."
  },
  {
    id: 16,
    text: "An investment of $5,000 earns 6% simple interest per year. How much interest is earned after 3 years?",
    options: [
      "$300",
      "$600",
      "$900",
      "$1,200"
    ],
    correct: 2,
    explanation: "Simple interest = Principal × Rate × Time = $5,000 × 0.06 × 3 = $900."
  },
  {
    id: 17,
    text: "A trapezoid has bases of 8 feet and 12 feet, and a height of 5 feet. What is its area?",
    diagram: {
      type: 'trapezoid',
      props: { topBase: '8 ft', bottomBase: '12 ft', height: '5 ft' }
    },
    options: [
      "40 square feet",
      "50 square feet",
      "60 square feet",
      "100 square feet"
    ],
    correct: 1,
    explanation: "Area of trapezoid = (1/2) × (base₁ + base₂) × height = (1/2) × (8 + 12) × 5 = (1/2) × 20 × 5 = 50 square feet."
  },
  {
    id: 18,
    text: "If 3 pens cost $4.50, how much would 8 pens cost at the same rate?",
    options: [
      "$10.50",
      "$11.00",
      "$12.00",
      "$13.50"
    ],
    correct: 2,
    explanation: "Cost per pen = $4.50 ÷ 3 = $1.50. Cost for 8 pens = 8 × $1.50 = $12.00."
  },
  {
    id: 19,
    text: "A circle has a diameter of 14 inches. What is its area? (Use π ≈ 3.14)",
    diagram: {
      type: 'circle',
      props: { radius: '7 in', showDiameter: true }
    },
    options: [
      "43.96 square inches",
      "87.92 square inches",
      "153.86 square inches",
      "615.44 square inches"
    ],
    correct: 2,
    explanation: "Radius = diameter ÷ 2 = 7 inches. Area = πr² = 3.14 × 7² = 3.14 × 49 = 153.86 square inches."
  },
  {
    id: 20,
    text: "A team completes 2/3 of a project in 8 days. How many more days will it take to complete the entire project at the same rate?",
    options: [
      "2 days",
      "4 days",
      "6 days",
      "8 days"
    ],
    correct: 1,
    explanation: "If 2/3 takes 8 days, then 1/3 takes 4 days (8 ÷ 2). So the remaining 1/3 will take 4 more days."
  },
  {
    id: 21,
    text: "The temperature drops from 68°F to 41°F. What is the decrease in temperature?",
    options: [
      "23°F",
      "27°F",
      "31°F",
      "35°F"
    ],
    correct: 1,
    explanation: "Temperature decrease = 68°F - 41°F = 27°F."
  },
  {
    id: 22,
    text: "A recipe calls for a ratio of 2 cups flour to 3 cups water. If you use 8 cups of flour, how many cups of water do you need?",
    options: [
      "10 cups",
      "11 cups",
      "12 cups",
      "14 cups"
    ],
    correct: 2,
    explanation: "The ratio is 2:3. If flour is multiplied by 4 (from 2 to 8), water must also be multiplied by 4: 3 × 4 = 12 cups."
  },
  {
    id: 23,
    text: "A store sells notebooks for $2.50 each. If you buy 10 or more, you get a 20% discount. How much would 12 notebooks cost?",
    options: [
      "$24.00",
      "$27.50",
      "$30.00",
      "$32.50"
    ],
    correct: 0,
    explanation: "Original cost = 12 × $2.50 = $30. Discount = 20% of $30 = $6. Final cost = $30 - $6 = $24."
  },
  {
    id: 24,
    text: "An aircraft uses 180 gallons of fuel per hour. How many gallons will it use during a 2.5-hour flight?",
    options: [
      "360 gallons",
      "405 gallons",
      "450 gallons",
      "500 gallons"
    ],
    correct: 2,
    explanation: "Total fuel = Rate × Time = 180 gallons/hour × 2.5 hours = 450 gallons."
  },
  {
    id: 25,
    text: "The average of five test scores is 84. If four of the scores are 78, 82, 88, and 90, what is the fifth score?",
    options: [
      "76",
      "80",
      "82",
      "86"
    ],
    correct: 2,
    explanation: "Total of all scores = Average × Number of scores = 84 × 5 = 420. Sum of four scores = 78 + 82 + 88 + 90 = 338. Fifth score = 420 - 338 = 82."
  }
];

export const ARITHMETIC_CONFIG = {
  timeLimit: 29 * 60, // 29 minutes in seconds
  sectionName: "Arithmetic Reasoning"
};