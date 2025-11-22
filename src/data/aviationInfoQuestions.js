// // Aviation Information Questions for AFOQT
// // General aviation knowledge - terminology, concepts, basic principles

// export const aviationInfoData = [
//   {
//     id: 1,
//     text: "The four forces acting on an aircraft in flight are:",
//     options: [
//       "Lift, weight, thrust, drag",
//       "Speed, altitude, direction, power",
//       "Wind, gravity, momentum, friction",
//       "Pitch, roll, yaw, bank"
//     ],
//     correct: 0,
//     explanation: "The four fundamental forces acting on an aircraft are lift (upward), weight (downward), thrust (forward), and drag (backward)."
//   },
//   {
//     id: 2,
//     text: "The movable control surfaces on the trailing edge of a wing are called:",
//     options: [
//       "Rudders",
//       "Elevators",
//       "Ailerons",
//       "Flaps"
//     ],
//     correct: 2,
//     explanation: "Ailerons are located on the outer trailing edge of each wing and control roll (banking) motion of the aircraft."
//   },
//   {
//     id: 3,
//     text: "Indicated airspeed is measured by which instrument?",
//     options: [
//       "Altimeter",
//       "Airspeed indicator",
//       "Vertical speed indicator",
//       "Attitude indicator"
//     ],
//     correct: 1,
//     explanation: "The airspeed indicator measures and displays the aircraft's speed through the air."
//   },
//   {
//     id: 4,
//     text: "The vertical stabilizer and rudder control movement around which axis?",
//     options: [
//       "Longitudinal (roll)",
//       "Lateral (pitch)",
//       "Vertical (yaw)",
//       "Horizontal"
//     ],
//     correct: 2,
//     explanation: "The rudder controls yaw, which is rotation around the vertical axis (nose left or right)."
//   },
//   {
//     id: 5,
//     text: "What does VFR stand for in aviation?",
//     options: [
//       "Very Fast Rules",
//       "Visual Flight Rules",
//       "Verified Flight Regulations",
//       "Variable Flight Range"
//     ],
//     correct: 1,
//     explanation: "VFR (Visual Flight Rules) refers to regulations for flying when visibility is sufficient to navigate by visual reference to the ground."
//   }
//   // Venice: Generate 15 more questions covering:
//   // - Aircraft components and systems
//   // - Flight principles and aerodynamics
//   // - Weather and meteorology basics
//   // - Aviation regulations and procedures
//   // - Airport operations
//   // Keep accessible - not requiring pilot training to answer
// ];

// export const AVIATION_INFO_CONFIG = {
//   timeLimit: 8 * 60, // 8 minutes
//   sectionName: "Aviation Information",
//   totalQuestions: 20
// };

// Aviation Information Questions for AFOQT
// General aviation knowledge - terminology, concepts, basic principles

export const aviationInfoData = [
   {
    id: 1,
    text: "During a climb, an airplane pilot is required to",
    options: ["Generate extra thrust to counter increased torque", "Generate extra torque to counter increased lift", "Generate extra lift to counter increased torque", "Generate extra thrust to counter increased drag", "Generate extra torque to counter increased drag"],
    correct: 3,
    explanation: "Climbing increases drag; extra thrust is needed to overcome it."
  },
  {
    id: 2,
    text: "Which of the following best describes the difference between a wing's leading edge and trailing edge?",
    options: ["The leading edge is fatter and more rounded than the trailing edge", "The leading edge is thinner and more rounded than the trailing edge", "The leading edge is of equal thickness but more rounded than the trailing edge", "The leading edge is thinner and less rounded than the trailing edge", "The leading edge is fatter and less rounded than the trailing edge"],
    correct: 0,
    explanation: "The leading edge is typically thicker and more rounded to allow smooth airflow over the wing."
  },
  {
    id: 3,
    text: "During the daytime, the VASI system is effective up to a distance of",
    options: ["20 miles", "5 miles", "10 miles", "15 miles", "25 miles"],
    correct: 2,
    explanation: "The Visual Approach Slope Indicator (VASI) is effective up to about 10 miles during daylight."
  },
  {
    id: 4,
    text: "When a pilot angles the nose of a plane downwards, the wings generate",
    options: ["Higher levels of thrust", "Lower levels of thrust", "Lower levels of lift", "Higher levels of lift", "No change in lift or thrust"],
    correct: 2,
    explanation: "Lowering the nose reduces the angle of attack, decreasing lift."
  },
  {
    id: 5,
    text: "Which of the following pairs are considered viable powerplants for airplanes?",
    options: ["Rudders and propellers", "Engines and rudders", "Engines and throttles", "Propellers and throttles", "Engines and propellers"],
    correct: 4,
    explanation: "Engines and propellers are power-producing components of an aircraft."
  },
  {
    id: 6,
    text: "Translational lift occurs for a helicopter when it is",
    options: ["In forward flight", "Hovering", "Descending", "Spinning", "Taking off"],
    correct: 0,
    explanation: "Translational lift occurs when a helicopter moves forward, improving rotor efficiency."
  },
  {
    id: 7,
    text: "An increase in air density results in",
    options: ["An increase in drag and a decrease in lift", "A decrease in drag and an increase in lift", "An increase in both drag and lift", "A decrease in both drag and lift", "A non-linear impact on drag and lift"],
    correct: 2,
    explanation: "Higher air density increases both lift and drag."
  },
  {
    id: 8,
    text: "An airplane traveling in the same direction as the wind experiences",
    options: ["Higher drag", "Lower lift and higher drag", "Higher lift and lower drag", "Lower lift and drag", "Higher lift and drag"],
    correct: 2,
    explanation: "A tailwind decreases drag and helps maintain lift more efficiently."
  },
  {
    id: 9,
    text: "A helicopter's collective control is used to",
    options: ["Alter the angle of the main blades", "Increase thrust", "Alter the tail rotor", "Tilt the main rotor", "Change yaw"],
    correct: 0,
    explanation: "The collective changes the pitch of all main rotor blades collectively to control lift."
  },
  {
    id: 10,
    text: "A plane's yaw motion is primarily controlled by the",
    options: ["Joystick", "Elevators", "Ailerons", "Cyclic", "Rudder"],
    correct: 4,
    explanation: "Yaw is rotation around the vertical axis, controlled by the rudder."
  },
  {
    id: 11,
    text: "The term 'angle of attack' refers to the angle between",
    options: ["The wing chord line and the oncoming airflow", "The tailplane and the fuselage", "The propeller and the rudder", "The elevator and the horizontal stabilizer", "The aileron and the wingtip"],
    correct: 0,
    explanation: "The angle of attack is between the wing’s chord line and the relative wind."
  },
  {
    id: 12,
    text: "What happens when the angle of attack exceeds the critical angle?",
    options: ["Lift increases rapidly", "The aircraft stalls", "Drag disappears", "The plane rolls sharply", "Thrust is lost"],
    correct: 1,
    explanation: "Exceeding the critical angle causes airflow separation and a stall."
  },
  {
    id: 13,
    text: "The primary purpose of flaps on an aircraft wing is to",
    options: ["Increase lift and drag", "Decrease lift and drag", "Increase thrust", "Reduce engine power", "Control yaw"],
    correct: 0,
    explanation: "Flaps increase lift and drag, allowing slower flight for takeoff and landing."
  },
  {
    id: 14,
    text: "Which axis of flight is controlled by the ailerons?",
    options: ["Longitudinal", "Lateral", "Vertical", "Yaw", "Centerline"],
    correct: 0,
    explanation: "Ailerons control roll about the aircraft’s longitudinal axis."
  },
  {
    id: 15,
    text: "What instrument indicates an aircraft's speed relative to the surrounding air?",
    options: ["Airspeed indicator", "Altimeter", "Vertical speed indicator", "Gyro horizon", "Compass"],
    correct: 0,
    explanation: "The airspeed indicator measures speed through the air."
  },
  {
    id: 16,
    text: "What does the altimeter measure?",
    options: ["Speed", "Altitude", "Direction", "Pitch", "Roll"],
    correct: 1,
    explanation: "The altimeter measures altitude based on air pressure."
  },
  {
    id: 17,
    text: "The purpose of the trim tab is to",
    options: ["Reduce control pressure for steady flight", "Increase lift", "Increase thrust", "Control yaw", "Deploy flaps automatically"],
    correct: 0,
    explanation: "Trim tabs relieve control pressure, helping maintain steady flight."
  },
  {
    id: 18,
    text: "Ground effect is most noticeable when",
    options: ["Flying at high altitude", "Flying close to the ground", "Banking sharply", "Descending rapidly", "Flying in crosswinds"],
    correct: 1,
    explanation: "Ground effect occurs near the surface, reducing drag and increasing lift."
  },
  {
    id: 19,
    text: "When airspeed increases, the amount of lift generated by a wing",
    options: ["Decreases", "Stays constant", "Increases", "Becomes unstable", "Reverses direction"],
    correct: 2,
    explanation: "Lift increases with airspeed due to greater airflow over the wing."
  },
  {
    id: 20,
    text: "A coordinated turn requires simultaneous use of",
    options: ["Elevator and rudder", "Aileron and rudder", "Throttle and elevator", "Aileron and throttle", "Flaps and ailerons"],
    correct: 1,
    explanation: "Aileron and rudder inputs together create a balanced, coordinated turn."
  },
  {
    id: 21,
    text: "What happens to lift when air density decreases?",
    options: ["Lift increases", "Lift decreases", "Lift remains the same", "Lift reverses", "Lift oscillates"],
    correct: 1,
    explanation: "Lower air density reduces lift because fewer air molecules flow over the wing."
  },
  {
    id: 22,
    text: "An airplane's stall speed increases when",
    options: ["Weight decreases", "Bank angle increases", "Altitude decreases", "Power increases", "Flaps are extended"],
    correct: 1,
    explanation: "A higher bank angle increases load factor, raising stall speed."
  },
  {
    id: 23,
    text: "The lift of an aircraft wing is produced primarily by",
    options: ["Air pressure difference between upper and lower surfaces", "Engine thrust", "Tailplane angle", "Propeller wash", "Wing thickness"],
    correct: 0,
    explanation: "Lift is caused by pressure difference from faster airflow over the top of the wing."
  },
  {
    id: 24,
    text: "The vertical stabilizer provides stability around which axis?",
    options: ["Longitudinal", "Lateral", "Vertical", "Centerline", "Pitch"],
    correct: 2,
    explanation: "The vertical stabilizer prevents unwanted yaw motion."
  },
  {
    id: 25,
    text: "What is indicated by a white arc on the airspeed indicator?",
    options: ["Normal operating range", "Caution range", "Flap operating range", "Never exceed speed", "Stall margin"],
    correct: 2,
    explanation: "The white arc shows the flap operating speed range."
  },
  {
    id: 26,
    text: "What is the purpose of the pitot tube?",
    options: ["Measure dynamic pressure for airspeed", "Provide static pressure for altitude", "Control yaw", "Measure humidity", "Provide cabin ventilation"],
    correct: 0,
    explanation: "The pitot tube measures dynamic air pressure for airspeed indication."
  },
  {
    id: 27,
    text: "A higher aspect ratio wing provides",
    options: ["Less drag and better efficiency", "More drag and less efficiency", "Better roll rate", "Poorer glide ratio", "More lift but higher drag"],
    correct: 0,
    explanation: "High aspect ratio wings reduce induced drag and improve lift efficiency."
  },
  {
    id: 28,
    text: "A turbojet engine produces thrust by",
    options: ["Compressing and accelerating air through combustion", "Turning propellers with mechanical energy", "Using wing lift to accelerate air", "Heating air in the cockpit", "Using static electricity"],
    correct: 0,
    explanation: "Turbojets generate thrust by compressing, combusting, and accelerating air rearward."
  },
  {
    id: 29,
    text: "The four forces of flight are",
    options: ["Lift, drag, thrust, and weight", "Pitch, roll, yaw, and thrust", "Torque, lift, drag, and angle", "Momentum, lift, roll, and gravity", "Thrust, roll, yaw, and weight"],
    correct: 0,
    explanation: "The four basic forces of flight are lift, drag, thrust, and weight."
  },
  {
    id: 30,
    text: "What is the purpose of the horizontal stabilizer?",
    options: ["Provides pitch stability", "Controls roll", "Controls yaw", "Provides lift", "Reduces drag"],
    correct: 0,
    explanation: "The horizontal stabilizer prevents unwanted pitch movement."
  },
  {
    id: 31,
    text: "What component of an aircraft controls roll?",
    options: ["Ailerons", "Elevators", "Rudder", "Flaps", "Trim tab"],
    correct: 0,
    explanation: "Ailerons control roll about the longitudinal axis."
  },
  {
    id: 32,
    text: "Which factor most affects the amount of lift produced?",
    options: ["Wing area", "Pilot weight", "Landing gear", "Engine type", "Flap color"],
    correct: 0,
    explanation: "Larger wing area produces more lift."
  },
  {
    id: 33,
    text: "The VSI (Vertical Speed Indicator) measures",
    options: ["Rate of climb or descent", "True altitude", "Airspeed", "Wind speed", "Engine RPM"],
    correct: 0,
    explanation: "The VSI shows the rate of climb or descent in feet per minute."
  },
  {
    id: 34,
    text: "A coordinated turn maintains balance by preventing",
    options: ["Skid or slip", "Yaw", "Pitch", "Roll", "Lift loss"],
    correct: 0,
    explanation: "Coordinated turns balance yaw and roll to prevent skidding or slipping."
  },
  {
    id: 35,
    text: "A stall can occur only by exceeding",
    options: ["Airspeed", "Angle of attack", "Altitude", "Throttle setting", "Temperature"],
    correct: 1,
    explanation: "Stalls are caused by exceeding the critical angle of attack, not by airspeed alone."
  },
  {
    id: 36,
    text: "The purpose of a preflight inspection is to",
    options: ["Ensure aircraft is safe and airworthy", "Warm the engine", "Adjust fuel mixture", "Plan the route", "Check flight times"],
    correct: 0,
    explanation: "Preflight inspections verify aircraft airworthiness and readiness."
  },
  {
    id: 37,
    text: "When bank angle increases, load factor",
    options: ["Decreases", "Increases", "Remains constant", "Becomes unstable", "Drops to zero"],
    correct: 1,
    explanation: "Banking increases load factor due to added lift needed to maintain altitude."
  },
  {
    id: 38,
    text: "What does ATC stand for?",
    options: ["Aircraft Technical Command", "Aviation Timing Center", "Air Traffic Control", "Air Turbine Chamber", "Altitude Training Center"],
    correct: 2,
    explanation: "ATC stands for Air Traffic Control."
  },
  {
    id: 39,
    text: "What is the main function of spoilers?",
    options: ["Increase lift", "Control yaw", "Provide thrust", "Reduce lift and increase drag", "Stabilize pitch"],
    correct: 3,
    explanation: "Spoilers disrupt airflow, reducing lift and increasing drag."
  },
  {
    id: 40,
    text: "When flaps are extended, the aircraft can",
    options: ["Climb faster", "Descend faster", "Fly slower without stalling", "Turn sharper", "Use less fuel"],
    correct: 2,
    explanation: "Flaps allow lower stall speeds and slower, more controlled flight."
  },
  {
    id: 41,
    text: "Which part of a plane controls pitch?",
    options: ["Rudder", "Ailerons", "Spoilers", "Elevators", "Trim tab"],
    correct: 3,
    explanation: "Elevators control pitch about the lateral axis."
  },
  {
    id: 42,
    text: "What happens to takeoff distance at higher altitudes?",
    options: ["It decreases", "It increases", "It remains constant", "It becomes unpredictable", "It reverses"],
    correct: 1,
    explanation: "Thinner air at high altitude reduces lift and thrust, increasing takeoff distance."
  },
  {
    id: 43,
    text: "The magnetic compass is affected by",
    options: ["Humidity", "Air pressure", "Acceleration and turning errors", "Wind direction", "Altitude"],
    correct: 2,
    explanation: "Compass readings can be distorted by acceleration and turns."
  },
  {
    id: 44,
    text: "Which flight control primarily affects yaw?",
    options: ["Elevators", "Ailerons", "Flaps", "Rudder", "Spoilers"],
    correct: 3,
    explanation: "The rudder controls yaw about the vertical axis."
  },
  {
    id: 45,
    text: "What is the primary purpose of the mixture control in piston aircraft?",
    options: ["Control oil pressure", "Change propeller speed", "Adjust fuel-to-air ratio", "Regulate cabin temperature", "Activate de-icing"],
    correct: 2,
    explanation: "Mixture control adjusts the fuel-to-air ratio for efficient combustion."
  },
  {
    id: 46,
    text: "What does a tachometer indicate?",
    options: ["Altitude", "Air temperature", "Airspeed", "Engine RPM", "Fuel flow"],
    correct: 3,
    explanation: "The tachometer shows engine revolutions per minute."
  },
  {
    id: 47,
    text: "A stall warning horn typically activates when",
    options: ["Exceeding Vne", "Approaching critical angle of attack", "Flaps are extended", "Power decreases", "Airspeed is maximum"],
    correct: 1,
    explanation: "The stall horn sounds just before reaching the critical angle of attack."
  },
  {
    id: 48,
    text: "Which component allows an airplane to bank and turn?",
    options: ["Elevators", "Rudder", "Trim tab", "Ailerons", "Spoilers"],
    correct: 3,
    explanation: "Ailerons raise and lower wings for turns."
  },
  {
    id: 49,
    text: "Thrust in a jet engine is produced by",
    options: ["Turning the propeller", "Heating the cockpit", "Expelling accelerated gases rearward", "Changing the wing angle", "Increasing drag"],
    correct: 2,
    explanation: "Thrust is generated when accelerated exhaust gases are expelled backward."
  },
  {
    id: 50,
    text: "The point where all forces on an aircraft are balanced is called the",
    options: ["Center of pressure", "Lift vector", "Center of gravity", "Control point", "Static margin"],
    correct: 2,
    explanation: "The center of gravity is where the aircraft balances in flight."
  },
  {
    id: 51,
    text: "What is the purpose of carburetor heat in a piston engine?",
    options: ["Increase fuel flow", "Adjust throttle response", "Prevent or remove ice formation", "Cool the engine", "Boost air pressure"],
    correct: 2,
    explanation: "Carburetor heat prevents or removes ice buildup that can restrict airflow."
  },
  {
    id: 52,
    text: "What effect does humidity have on engine performance?",
    options: ["No effect", "Reduces engine power", "Improves fuel efficiency", "Lowers stall speed", "Increases engine power"],
    correct: 1,
    explanation: "Moist air is less dense, reducing oxygen and engine performance."
  },
  {
    id: 53,
    text: "The purpose of the magnetos in an aircraft engine is to",
    options: ["Regulate oil pressure", "Provide electrical power to the spark plugs", "Charge the battery", "Control engine temperature", "Control fuel injection"],
    correct: 1,
    explanation: "Magnetos generate electricity to fire spark plugs independently of the aircraft’s battery."
  },
  {
    id: 54,
    text: "What is the term for the speed at which the aircraft can safely fly with full flaps extended?",
    options: ["Vne", "Vy", "Vfe", "Vno", "Vx"],
    correct: 2,
    explanation: "Vfe is the maximum flap extension speed."
  },
  {
    id: 55,
    text: "What is the purpose of the fuel primer?",
    options: ["Pressurize the fuel tank", "Inject fuel directly into the cylinders for starting", "Reduce fuel vapor pressure", "Mix fuel and air automatically", "Control fuel flow rate"],
    correct: 1,
    explanation: "The primer helps start the engine by injecting fuel directly into the cylinders."
  },
  {
    id: 56,
    text: "What happens to atmospheric pressure as altitude increases?",
    options: ["It doubles", "It decreases", "It remains constant", "It oscillates", "It increases"],
    correct: 1,
    explanation: "Atmospheric pressure decreases with altitude, reducing available oxygen."
  },
  {
    id: 57,
    text: "In steady, level flight, lift is equal to",
    options: ["Centripetal force", "Weight", "Drag", "Thrust", "Moment of inertia"],
    correct: 1,
    explanation: "In level flight, lift balances weight."
  },
  {
    id: 58,
    text: "What does the term 'load factor' refer to?",
    options: ["The cargo weight limit", "The ratio of total lift to the airplane’s weight", "The engine’s power-to-weight ratio", "The fuel load compared to thrust", "The amount of fuel per passenger"],
    correct: 1,
    explanation: "Load factor is the ratio of total lift to the aircraft’s actual weight."
  },
  {
    id: 59,
    text: "Which of the following increases load factor?",
    options: ["Ground effect", "Steep turns", "Idle power", "Descent", "Straight-and-level flight"],
    correct: 1,
    explanation: "Steep turns increase load factor as more lift is required to maintain altitude."
  },
  {
    id: 60,
    text: "Which instrument is affected by a blocked pitot tube?",
    options: ["Altimeter", "Airspeed indicator", "Compass", "VSI", "Attitude indicator"],
    correct: 1,
    explanation: "A blocked pitot tube causes incorrect airspeed readings."
  },
  {
    id: 61,
    text: "What type of drag increases with speed?",
    options: ["Lift drag", "Parasite drag", "Control drag", "Wave drag", "Induced drag"],
    correct: 1,
    explanation: "Parasite drag increases as airspeed increases."
  },
  {
    id: 62,
    text: "Induced drag is a byproduct of",
    options: ["Air density", "Lift", "Weight", "Gravity", "Thrust"],
    correct: 1,
    explanation: "Induced drag is created as a result of lift generation."
  },
  {
    id: 63,
    text: "What effect does extending the landing gear have on drag?",
    options: ["Improves lift", "Increases drag", "Decreases drag", "No effect", "Reverses airflow"],
    correct: 1,
    explanation: "Extending landing gear increases parasite drag."
  },
  {
    id: 64,
    text: "What type of stability returns the aircraft to level flight after a disturbance?",
    options: ["Dynamic instability", "Positive stability", "Rotational stability", "Neutral stability", "Negative stability"],
    correct: 1,
    explanation: "Positive stability causes the aircraft to return to its original attitude after disturbance."
  },
  {
    id: 65,
    text: "Which component controls the fuel-air mixture in a piston engine?",
    options: ["Propeller", "Carburetor", "Magneto", "Tachometer", "Manifold gauge"],
    correct: 1,
    explanation: "The carburetor mixes air and fuel in the correct proportions for combustion."
  },
  {
    id: 66,
    text: "What is a spin in aviation?",
    options: ["A rapid roll maneuver", "A stalled, descending, spiraling flight path", "A high-speed climb", "A controlled descent", "A tight turn at low speed"],
    correct: 1,
    explanation: "A spin is a stalled condition where one wing is more stalled than the other, causing rotation."
  },
  {
    id: 67,
    text: "What is the purpose of the rudder trim tab?",
    options: ["Reduce drag", "Relieve rudder pressure during flight", "Increase thrust", "Increase rudder deflection", "Control roll"],
    correct: 1,
    explanation: "Rudder trim helps maintain straight flight without constant rudder input."
  },
  {
    id: 68,
    text: "If a pilot banks the airplane without using rudder, the airplane will",
    options: ["Level out", "Slip or skid", "Descend", "Climb", "Accelerate"],
    correct: 1,
    explanation: "Banking without rudder causes uncoordinated flight, leading to a slip or skid."
  },
  {
    id: 69,
    text: "Which statement about turns is correct?",
    options: ["Turns reduce stall speed", "Steeper turns reduce load factor", "Turns decrease induced drag", "Steeper turns require more lift to maintain altitude", "Turns always increase altitude"],
    correct: 3,
    explanation: "Steeper turns require more lift, which increases load factor."
  },
  {
    id: 70,
    text: "Which factor decreases an airplane’s climb performance?",
    options: ["Cool dense air", "High temperature and high altitude", "Tailwind", "Low weight", "Low temperature and high pressure"],
    correct: 1,
    explanation: "Hot, high, and humid conditions reduce climb performance due to thinner air."
  },
  {
    id: 71,
    text: "The point of maximum camber on an airfoil determines its",
    options: ["Fuel flow", "Lift characteristics", "Temperature", "Magnetic heading", "Weight distribution"],
    correct: 1,
    explanation: "Maximum camber affects how much lift the airfoil can produce."
  },
  {
    id: 72,
    text: "The stall speed of an aircraft is affected by",
    options: ["Propeller pitch only", "Weight and load factor", "Altitude alone", "Engine type", "Color of the fuselage"],
    correct: 1,
    explanation: "Heavier aircraft and higher load factors increase stall speed."
  },
  {
    id: 73,
    text: "What is the purpose of an attitude indicator?",
    options: ["Displays heading", "Shows pitch and bank relative to the horizon", "Measures engine torque", "Shows altitude", "Indicates rate of climb"],
    correct: 1,
    explanation: "The attitude indicator shows the aircraft’s orientation relative to the horizon."
  },
  {
    id: 74,
    text: "A coordinated turn is achieved by balancing",
    options: ["Throttle and ailerons", "Aileron and rudder input", "Flaps and rudder", "Throttle and elevator", "Elevator and flaps"],
    correct: 1,
    explanation: "Balanced aileron and rudder input keep turns coordinated."
  },
  {
    id: 75,
    text: "The standard atmospheric pressure at sea level is approximately",
    options: ["28.50 inches of mercury", "29.92 inches of mercury", "30.50 inches of mercury", "27.00 inches of mercury", "15 inches of mercury"],
    correct: 1,
    explanation: "Standard pressure at sea level is 29.92 inHg."
  },
  {
    id: 76,
    text: "What happens to true airspeed as altitude increases for a given indicated airspeed?",
    options: ["It equals ground speed", "It remains the same", "It increases", "It decreases", "It fluctuates"],
    correct: 2,
    explanation: "True airspeed increases with altitude because air density decreases."
  },
  {
    id: 77,
    text: "The primary flight control used to initiate a roll is the",
    options: ["Flaps", "Trim tab", "Aileron", "Rudder", "Elevator"],
    correct: 2,
    explanation: "Ailerons control roll about the longitudinal axis."
  },
  {
    id: 78,
    text: "When flying in ground effect, induced drag is",
    options: ["Unchanged", "Reduced", "Increased", "Eliminated", "Doubled"],
    correct: 1,
    explanation: "Ground effect reduces induced drag near the surface."
  },
  {
    id: 79,
    text: "The purpose of wing dihedral is to",
    options: ["Control pitch", "Increase lift", "Provide lateral stability", "Reduce drag", "Improve roll rate"],
    correct: 2,
    explanation: "Dihedral angles help restore level flight after a roll disturbance."
  },
  {
    id: 80,
    text: "Which factor most affects an aircraft's takeoff distance?",
    options: ["Aileron trim", "Pilot height", "Weight", "Wing color", "Color"],
    correct: 2,
    explanation: "Heavier aircraft require longer distances to take off."
  },
  {
    id: 81,
    text: "What is the primary function of the oil system in a piston engine?",
    options: ["Increase fuel flow", "Provide thrust", "Lubricate and cool moving parts", "Regulate airspeed", "Control altitude"],
    correct: 2,
    explanation: "Engine oil reduces friction and helps dissipate heat."
  },
  {
    id: 82,
    text: "What happens to lift when the angle of attack is increased?",
    options: ["Lift remains constant", "Lift increases up to a point, then decreases when stall occurs", "Lift and drag both decrease", "Lift decreases steadily", "Lift becomes negative"],
    correct: 1,
    explanation: "Lift increases with angle of attack until the critical angle is exceeded, causing stall."
  },
  {
    id: 83,
    text: "The primary function of flaps during landing is to",
    options: ["Decrease lift and increase speed", "Increase lift and drag to allow a steeper approach", "Control yaw", "Reduce drag and extend glide", "Increase thrust"],
    correct: 1,
    explanation: "Flaps allow slower approach speeds and steeper descent angles."
  },
  {
    id: 84,
    text: "What is the primary purpose of the tail rotor on a helicopter?",
    options: ["Provide forward thrust", "Increase lift", "Counteract main rotor torque", "Reduce drag", "Control altitude"],
    correct: 2,
    explanation: "The tail rotor counteracts torque from the main rotor."
  },
  {
    id: 85,
    text: "Which atmospheric condition will cause the greatest density altitude?",
    options: ["Low temperature, low humidity, high pressure", "Moderate temperature and pressure", "Cold and dry air", "High temperature, high humidity, low pressure", "Low temperature, high pressure"],
    correct: 3,
    explanation: "Hot, humid, and low-pressure conditions increase density altitude, reducing performance."
  },
  {
    id: 86,
    text: "Which factor does NOT affect stall speed?",
    options: ["Load factor", "Weight", "Center of gravity location", "Flap position", "Color of the aircraft"],
    correct: 4,
    explanation: "Aesthetic features like color don’t affect stall speed."
  },
  {
    id: 87,
    text: "What is the effect of a forward center of gravity on stability?",
    options: ["Decreases stability", "Increases stability but requires more control input", "Has no effect", "Reduces lift", "Causes a spin"],
    correct: 1,
    explanation: "A forward CG increases stability but makes pitch control heavier."
  },
  {
    id: 88,
    text: "The lift-to-drag ratio indicates",
    options: ["Engine power", "Weight distribution", "Aircraft efficiency", "Fuel flow rate", "Air density"],
    correct: 2,
    explanation: "A higher lift-to-drag ratio means more efficient flight."
  },
  {
    id: 89,
    text: "Which cloud type is most associated with thunderstorms?",
    options: ["Cirrus", "Altostratus", "Cumulonimbus", "Stratus", "Nimbostratus"],
    correct: 2,
    explanation: "Cumulonimbus clouds are tall and storm-producing."
  },
  {
    id: 90,
    text: "Which instrument shows the aircraft’s direction relative to magnetic north?",
    options: ["Airspeed indicator", "Compass", "Altimeter", "VSI", "Attitude indicator"],
    correct: 1,
    explanation: "The magnetic compass displays direction relative to magnetic north."
  },
  {
    id: 91,
    text: "What is the function of a propeller governor?",
    options: ["Monitors oil pressure", "Maintains constant RPM by adjusting blade pitch", "Controls carburetor temperature", "Regulates fuel flow", "Adjusts throttle automatically"],
    correct: 1,
    explanation: "The governor automatically adjusts propeller pitch to maintain desired RPM."
  },
  {
    id: 92,
    text: "What is the function of an airspeed indicator’s static port?",
    options: ["Measures dynamic pressure", "Provides ambient air pressure for accurate readings", "Controls mixture", "Regulates cabin pressure", "Ventilates the cockpit"],
    correct: 1,
    explanation: "The static port provides ambient pressure for instruments like the airspeed indicator and altimeter."
  },
  {
    id: 93,
    text: "A pilot’s primary control for altitude changes in level flight is the",
    options: ["Elevator", "Throttle", "Trim tab", "Aileron", "Rudder"],
    correct: 0,
    explanation: "The elevator controls pitch, which directly affects altitude."
  },
  {
    id: 94,
    text: "What does a turn coordinator display?",
    options: ["Angle of attack", "Rate and coordination of turn", "Pitch and roll", "True airspeed", "Rate of climb"],
    correct: 1,
    explanation: "It shows both the rate and coordination of a turn."
  },
  {
    id: 95,
    text: "When a plane flies at the best rate of climb speed (Vy), it gains",
    options: ["The highest ground speed", "The most altitude in the least time", "The most altitude over the shortest distance", "Maximum glide range", "The lowest drag"],
    correct: 1,
    explanation: "Vy provides the best climb rate for altitude gain per unit of time."
  },
  {
    id: 96,
    text: "When a plane flies at the best angle of climb speed (Vx), it gains",
    options: ["Maximum ground speed", "The most altitude over the shortest distance", "Minimum drag", "The most altitude per time unit", "Constant altitude"],
    correct: 1,
    explanation: "Vx provides maximum altitude gain for the least horizontal distance."
  },
  {
    id: 97,
    text: "Which instrument indicates the rate of climb or descent?",
    options: ["Gyro horizon", "Compass", "Airspeed indicator", "Altimeter", "VSI"],
    correct: 4,
    explanation: "The VSI (Vertical Speed Indicator) measures climb or descent rate."
  },
  {
    id: 98,
    text: "If the pitot tube and static port are both blocked, which instrument fails?",
    options: ["Turn coordinator", "Airspeed indicator", "Compass", "Heading indicator", "Tachometer"],
    correct: 1,
    explanation: "Both pressures are needed for accurate airspeed readings."
  },
  {
    id: 99,
    text: "Which instrument relies on the gyroscope for operation?",
    options: ["Tachometer", "Airspeed indicator", "Attitude indicator", "Altimeter", "Compass"],
    correct: 2,
    explanation: "The attitude indicator uses a gyroscope to show pitch and bank."
  },
  {
    id: 100,
    text: "The stall warning system typically activates when the airplane is",
    options: ["At full throttle", "Approaching critical angle of attack", "At maximum climb rate", "In straight-and-level flight", "Flying inverted"],
    correct: 1,
    explanation: "The warning system alerts pilots before reaching the critical angle of attack."
  },
  {
    id: 101,
    text: "What does the attitude indicator show?",
    options: ["Aircraft speed", "Climb rate", "Pitch and bank", "Heading", "Altitude"],
    correct: 2,
    explanation: "The attitude indicator shows the aircraft’s orientation relative to the horizon—pitch and bank."
  },
  {
    id: 102,
    text: "Which component controls roll?",
    options: ["Rudder", "Ailerons", "Elevator", "Flaps", "Trim tab"],
    correct: 1,
    explanation: "Ailerons control roll by increasing lift on one wing while decreasing it on the other."
  },
  {
    id: 103,
    text: "The primary purpose of a rudder is to control which movement?",
    options: ["Yaw", "Pitch", "Roll", "Drift", "Slip"],
    correct: 0,
    explanation: "The rudder controls yaw, which is the side-to-side movement of the aircraft’s nose."
  },
  {
    id: 104,
    text: "What happens to air density as altitude increases?",
    options: ["Increases", "Remains constant", "Decreases", "Becomes humid", "Doubles"],
    correct: 2,
    explanation: "As altitude increases, air density decreases, reducing lift and engine performance."
  },
  {
    id: 105,
    text: "The term 'angle of attack' refers to the angle between the chord line and the",
    options: ["Relative wind", "Wingtip", "Fuselage", "Ground", "Horizon"],
    correct: 0,
    explanation: "The angle of attack is the angle between the wing’s chord line and the relative wind."
  },
  {
    id: 106,
    text: "What is the main function of flaps on an aircraft?",
    options: ["Increase lift at low speed", "Reduce drag in cruise", "Balance the aircraft", "Control roll", "Increase thrust"],
    correct: 0,
    explanation: "Flaps increase lift and drag, allowing slower, safer landings and takeoffs."
  },
  {
    id: 107,
    text: "The vertical stabilizer on an airplane helps to control",
    options: ["Pitch", "Roll", "Yaw", "Drag", "Lift"],
    correct: 2,
    explanation: "The vertical stabilizer controls yaw stability, keeping the aircraft aligned with its flight path."
  },
  {
    id: 108,
    text: "What is the purpose of a carburetor heat control?",
    options: ["Prevent engine overheating", "Increase thrust", "Prevent carburetor icing", "Cool the oil", "Increase fuel pressure"],
    correct: 2,
    explanation: "Carburetor heat prevents icing by routing warm air into the carburetor intake."
  },
  {
    id: 109,
    text: "When a pilot increases the pitch of an aircraft, what typically happens to airspeed?",
    options: ["It increases", "It decreases", "It remains constant", "It doubles", "It reverses"],
    correct: 1,
    explanation: "Increasing pitch generally increases drag, causing airspeed to decrease."
  },
  {
    id: 110,
    text: "Which factor most directly affects lift?",
    options: ["Air density", "Oil pressure", "Cabin altitude", "Wing length", "Aircraft color"],
    correct: 0,
    explanation: "Lift depends on air density, airspeed, surface area, and angle of attack."
  },
  {
    id: 111,
    text: "What is the purpose of a preflight inspection?",
    options: ["Check passenger weight", "Test control tower signal", "Ensure airworthiness of the aircraft", "Warm the engine", "Set altimeter pressure"],
    correct: 2,
    explanation: "A preflight inspection ensures the aircraft is safe and airworthy before flight."
  },
  {
    id: 112,
    text: "Which flight instrument uses static and dynamic air pressure?",
    options: ["Altimeter", "Turn coordinator", "Compass", "Heading indicator", "Tachometer"],
    correct: 0,
    explanation: "The altimeter, airspeed indicator, and VSI rely on static and dynamic air pressure."
  },
  {
    id: 113,
    text: "When the airspeed increases, lift generally",
    options: ["Decreases", "Increases", "Remains constant", "Becomes unstable", "Reverses direction"],
    correct: 1,
    explanation: "Lift increases with airspeed due to greater airflow over the wings."
  },
  {
    id: 114,
    text: "What is the function of the ailerons during coordinated turns?",
    options: ["Provide lift", "Control yaw", "Control roll", "Reduce drag", "Adjust pitch"],
    correct: 2,
    explanation: "Ailerons control roll, banking the airplane into and out of turns."
  },
  {
    id: 115,
    text: "When descending, the pilot should reduce power and",
    options: ["Raise the nose", "Lower the nose", "Extend flaps", "Increase throttle", "Retract gear"],
    correct: 1,
    explanation: "To descend, the pilot reduces power and lowers the nose to maintain airspeed."
  },
  {
    id: 116,
    text: "The four forces acting on an airplane in flight are lift, drag, thrust, and",
    options: ["Torque", "Weight", "Pressure", "Centrifugal force", "Friction"],
    correct: 1,
    explanation: "The four fundamental forces are lift, drag, thrust, and weight."
  },
  {
    id: 117,
    text: "An airplane’s center of gravity being too far aft (rearward) can cause",
    options: ["Improved stability", "Reduced control and possible stall", "Higher drag", "Better fuel efficiency", "Increased climb rate"],
    correct: 1,
    explanation: "An aft CG reduces stability and can cause stalls that are difficult to recover from."
  },
  {
    id: 118,
    text: "The pitot tube is used to measure",
    options: ["Altitude", "Airspeed", "Attitude", "Heading", "Temperature"],
    correct: 1,
    explanation: "The pitot tube measures dynamic air pressure, used to calculate airspeed."
  },
  {
    id: 119,
    text: "A crosswind takeoff requires the pilot to use",
    options: ["Opposite aileron into the wind", "Rudder with the wind", "Elevator down", "Flaps up", "Throttle adjustment only"],
    correct: 0,
    explanation: "Aileron input into the wind helps maintain control during crosswind takeoff."
  },
  {
    id: 120,
    text: "Which part of a helicopter changes lift on all blades simultaneously?",
    options: ["Tail rotor", "Cyclic", "Collective", "Swashplate", "Pedals"],
    correct: 2,
    explanation: "The collective changes the pitch of all blades simultaneously to increase or decrease lift."
  },
  {
    id: 121,
    text: "The purpose of trim tabs is to",
    options: ["Reduce control pressure", "Increase thrust", "Adjust lift", "Control roll", "Aid braking"],
    correct: 0,
    explanation: "Trim tabs reduce the need for constant control input, easing control pressures."
  },
  {
    id: 122,
    text: "A 'stall' occurs when",
    options: ["The airplane runs out of fuel", "The angle of attack exceeds critical angle", "Lift exceeds drag", "Throttle is closed", "The propeller stops spinning"],
    correct: 1,
    explanation: "A stall occurs when the critical angle of attack is exceeded, causing loss of lift."
  },
  {
    id: 123,
    text: "What is indicated by a steady green light from the control tower?",
    options: ["Cleared to land", "Cleared to taxi", "Stop immediately", "Give way to traffic", "Return for landing"],
    correct: 0,
    explanation: "A steady green light indicates clearance to land (aircraft) or takeoff (ground)."
  },
  {
    id: 124,
    text: "During takeoff, ground effect causes",
    options: ["Increased drag", "Decreased lift", "Decreased induced drag", "Loss of control", "Higher stall speed"],
    correct: 2,
    explanation: "Ground effect reduces induced drag, allowing lift to increase near the ground."
  },
  {
    id: 125,
    text: "Which instrument shows aircraft heading?",
    options: ["Turn coordinator", "Heading indicator", "Altimeter", "VSI", "Attitude indicator"],
    correct: 1,
    explanation: "The heading indicator shows the aircraft’s compass direction."
  },
  {
    id: 126,
    text: "The altimeter setting is based on",
    options: ["Sea level pressure", "Cabin pressure", "Temperature", "Wind direction", "Humidity"],
    correct: 0,
    explanation: "Altimeter settings are calibrated to local sea-level pressure to ensure altitude accuracy."
  },
  {
    id: 127,
    text: "What causes an airplane to yaw left during takeoff in a single-engine plane?",
    options: ["Torque effect", "Gyroscopic precession", "P-factor", "Spiral slipstream", "All of the above"],
    correct: 4,
    explanation: "All these factors contribute to left-turning tendencies during takeoff."
  },
  {
    id: 128,
    text: "When flying into a headwind, the groundspeed will",
    options: ["Increase", "Decrease", "Remain constant", "Double", "Reverse"],
    correct: 1,
    explanation: "Headwinds reduce groundspeed while maintaining the same airspeed."
  },
  {
    id: 129,
    text: "The lift of an airplane is created by",
    options: ["Air pressure differences above and below the wings", "Engine power", "Rudder deflection", "Aileron drag", "Fuselage shape"],
    correct: 0,
    explanation: "Lift results from lower pressure above and higher pressure below the wings."
  },
  {
    id: 130,
    text: "Which control surface changes the pitch attitude?",
    options: ["Elevator", "Aileron", "Rudder", "Flap", "Trim tab"],
    correct: 0,
    explanation: "The elevator controls pitch by changing the tail’s angle of attack."
  },
  {
    id: 131,
    text: "Which flight instrument provides information about rate of turn?",
    options: ["Heading indicator", "VSI", "Turn coordinator", "Altimeter", "Airspeed indicator"],
    correct: 2,
    explanation: "The turn coordinator shows rate and coordination of turns."
  },
  {
    id: 132,
    text: "What is a coordinated turn?",
    options: ["A turn using ailerons and rudder together", "A turn without rudder", "A steep bank", "A skid or slip", "A climb while turning"],
    correct: 0,
    explanation: "A coordinated turn uses ailerons and rudder in harmony to maintain balanced flight."
  },
  {
    id: 133,
    text: "A 'VSI' measures",
    options: ["Climb and descent rate", "Airspeed", "Heading", "Bank angle", "Wind velocity"],
    correct: 0,
    explanation: "The Vertical Speed Indicator shows rate of climb or descent."
  },
  {
    id: 134,
    text: "When flying at constant altitude and airspeed, lift must equal",
    options: ["Drag", "Weight", "Thrust", "Pressure", "Momentum"],
    correct: 1,
    explanation: "In level flight, lift equals weight, and thrust equals drag."
  },
  {
    id: 135,
    text: "A pilot entering a spin should first",
    options: ["Apply opposite rudder", "Pull back on the yoke", "Increase throttle", "Extend flaps", "Level the wings"],
    correct: 0,
    explanation: "Recovery from a spin begins with applying opposite rudder to stop rotation."
  },
  {
    id: 136,
    text: "A plane’s glide ratio determines",
    options: ["The distance traveled forward for each unit of descent", "Climb rate", "Fuel efficiency", "Turning radius", "Drag coefficient"],
    correct: 0,
    explanation: "Glide ratio indicates how far a plane can travel horizontally while descending."
  },
  {
    id: 137,
    text: "If airspeed increases while maintaining level flight, lift will",
    options: ["Increase", "Decrease", "Stay constant", "Reverse", "Drop to zero"],
    correct: 0,
    explanation: "Lift increases with higher airspeed at a constant angle of attack."
  },
  {
    id: 138,
    text: "What is the function of the mixture control in a piston engine?",
    options: ["Adjust fuel-to-air ratio", "Regulate oil pressure", "Increase thrust", "Control ignition", "Open cowl flaps"],
    correct: 0,
    explanation: "The mixture control adjusts the ratio of fuel to air entering the engine."
  },
  {
    id: 139,
    text: "At high altitude, engine performance typically",
    options: ["Improves", "Decreases", "Remains unchanged", "Doubles", "Becomes unstable"],
    correct: 1,
    explanation: "Thinner air at high altitude reduces engine performance and power output."
  },
  {
    id: 140,
    text: "When flaps are extended, drag",
    options: ["Increases", "Decreases", "Remains constant", "Becomes negative", "Is eliminated"],
    correct: 0,
    explanation: "Extending flaps increases lift and drag, aiding in landing and takeoff."
  },
  {
    id: 141,
    text: "The propeller converts engine torque into",
    options: ["Lift", "Thrust", "Drag", "Weight", "Pressure"],
    correct: 1,
    explanation: "The propeller produces thrust to move the airplane forward."
  },
  {
    id: 142,
    text: "What color are taxiway edge lights?",
    options: ["Blue", "White", "Green", "Red", "Amber"],
    correct: 0,
    explanation: "Taxiway edge lights are blue to distinguish them from runway lighting."
  },
  {
    id: 143,
    text: "What is the function of the turn coordinator?",
    options: ["Measure altitude", "Indicate yaw and roll", "Show fuel level", "Display groundspeed", "Monitor oil pressure"],
    correct: 1,
    explanation: "The turn coordinator shows yaw and roll rate for coordinated flight."
  },
  {
    id: 144,
    text: "The heading indicator is powered by a",
    options: ["Vacuum system", "Static port", "Battery", "Compass", "Pitot tube"],
    correct: 0,
    explanation: "The heading indicator operates using a gyroscope powered by the vacuum system."
  },
  {
    id: 145,
    text: "During approach, pilots maintain glide path using which instrument?",
    options: ["Attitude indicator", "VSI", "VASI or PAPI lights", "Heading indicator", "Altimeter"],
    correct: 2,
    explanation: "Visual Approach Slope Indicators (VASI/PAPI) guide descent angle during approach."
  },
  {
    id: 146,
    text: "A left-turning tendency during climb is caused mainly by",
    options: ["Torque and P-factor", "Rudder deflection", "Gyroscopic precession only", "Flap position", "Propeller pitch"],
    correct: 0,
    explanation: "Torque and P-factor cause yawing to the left during climb."
  },
  {
    id: 147,
    text: "When the temperature-dewpoint spread is small, a pilot can expect",
    options: ["Turbulence", "Fog or low clouds", "Strong lift", "High visibility", "Increased drag"],
    correct: 1,
    explanation: "A small temperature-dewpoint spread often leads to fog or low cloud formation."
  },
  {
    id: 148,
    text: "The magnetic compass tends to be unreliable during",
    options: ["Turns and acceleration", "Straight flight", "Calm winds", "Descent", "Takeoff roll"],
    correct: 0,
    explanation: "During turns and acceleration, magnetic compass readings are prone to error."
  },
  {
    id: 149,
    text: "Which system provides electrical power during normal flight?",
    options: ["Alternator", "Battery", "Hydraulic pump", "Vacuum pump", "Starter motor"],
    correct: 0,
    explanation: "The alternator provides electrical power and charges the battery during flight."
  },
  {
    id: 150,
    text: "When descending through a temperature inversion, a pilot may encounter",
    options: ["Wind shear", "Fog", "Turbulence", "Rain", "Lightning"],
    correct: 0,
    explanation: "Temperature inversions can create wind shear and unstable air layers."
  },
  {
    id: 151,
    text: "What is the standard atmospheric pressure at sea level?",
    options: [
      "29.92 inches of mercury",
      "30.00 inches of mercury",
      "28.50 inches of mercury",
      "31.00 inches of mercury"
    ],
    correct: 0,
    explanation: "Standard atmospheric pressure at sea level is 29.92 inches of mercury (Hg), which is also equivalent to 1013.25 millibars or hectopascals."
  },
  {
    id: 152,
    text: "Which flight control surface is used to control pitch?",
    options: [
      "Rudder",
      "Elevator",
      "Aileron",
      "Spoiler"
    ],
    correct: 1,
    explanation: "The elevator, located on the horizontal stabilizer, controls the pitch (nose up or nose down) of the aircraft."
  },
  {
    id: 153,
    text: "What does the term 'stall' refer to in aviation?",
    options: [
      "Engine failure",
      "Loss of lift due to excessive angle of attack",
      "Running out of fuel",
      "Landing gear malfunction"
    ],
    correct: 1,
    explanation: "A stall occurs when the wing's angle of attack becomes too high, disrupting airflow and causing a sudden loss of lift."
  },
  {
    id: 154,
    text: "What is the purpose of flaps on an aircraft wing?",
    options: [
      "To increase speed during cruise",
      "To increase lift and drag during takeoff and landing",
      "To control roll",
      "To reduce fuel consumption"
    ],
    correct: 1,
    explanation: "Flaps extend from the trailing edge of the wing to increase both lift and drag, allowing for slower speeds during takeoff and landing."
  },
  {
    id: 155,
    text: "What does IFR stand for in aviation?",
    options: [
      "Instrument Flight Rules",
      "International Flight Regulations",
      "Internal Fuel Requirements",
      "Immediate Flight Response"
    ],
    correct: 0,
    explanation: "IFR (Instrument Flight Rules) refers to regulations for flying when weather conditions require navigation by instruments rather than visual reference."
  },
  {
    id: 156,
    text: "Which instrument displays the aircraft's orientation relative to the horizon?",
    options: [
      "Turn coordinator",
      "Heading indicator",
      "Attitude indicator",
      "Vertical speed indicator"
    ],
    correct: 2,
    explanation: "The attitude indicator (artificial horizon) shows the aircraft's pitch and bank orientation relative to the horizon."
  },
  {
    id: 157,
    text: "What is the primary cause of wake turbulence?",
    options: [
      "Engine exhaust",
      "Wing tip vortices",
      "Propeller wash",
      "Sonic booms"
    ],
    correct: 1,
    explanation: "Wake turbulence is primarily caused by wing tip vortices created as high-pressure air beneath the wing flows around the tip to the low-pressure area above."
  },
  {
    id: 158,
    text: "What is the term for the speed at which an aircraft can no longer climb?",
    options: [
      "Stall speed",
      "Critical speed",
      "Service ceiling",
      "Absolute ceiling"
    ],
    correct: 3,
    explanation: "The absolute ceiling is the maximum altitude at which an aircraft can maintain level flight and cannot climb any higher."
  },
  {
    id: 159,
    text: "Which of the following increases an aircraft's takeoff distance?",
    options: [
      "Headwind",
      "High density altitude",
      "Low aircraft weight",
      "Cold temperature"
    ],
    correct: 1,
    explanation: "High density altitude (caused by high temperature, high elevation, or high humidity) reduces engine power and aerodynamic performance, increasing takeoff distance."
  },
  {
    id: 160,
    text: "What is the purpose of a pitot tube?",
    options: [
      "To measure static air pressure",
      "To measure ram air pressure for airspeed indication",
      "To measure fuel flow",
      "To measure engine temperature"
    ],
    correct: 1,
    explanation: "The pitot tube measures ram air pressure (dynamic pressure), which is used along with static pressure to determine airspeed."
  },
  {
    id: 161,
    text: "What does AGL stand for in aviation?",
    options: [
      "Above Ground Level",
      "Automatic Ground Locator",
      "Adjusted Glide Line",
      "Air-to-Ground Link"
    ],
    correct: 0,
    explanation: "AGL (Above Ground Level) refers to altitude measured from the ground directly beneath the aircraft, as opposed to MSL (Mean Sea Level)."
  },
  {
    id: 162,
    text: "Which type of drag increases with airspeed?",
    options: [
      "Induced drag",
      "Parasite drag",
      "Ground effect drag",
      "Form drag only"
    ],
    correct: 1,
    explanation: "Parasite drag (including form, skin friction, and interference drag) increases with the square of airspeed, while induced drag decreases with speed."
  },
  {
    id: 163,
    text: "What is the standard rate turn in aviation?",
    options: [
      "1 degree per second",
      "2 degrees per second",
      "3 degrees per second",
      "5 degrees per second"
    ],
    correct: 2,
    explanation: "A standard rate turn is 3 degrees per second, which completes a 360-degree turn in 2 minutes."
  },
  {
    id: 164,
    text: "What is the primary purpose of winglets on modern aircraft?",
    options: [
      "To increase lift at low speeds",
      "To reduce induced drag and improve fuel efficiency",
      "To enhance aesthetic appeal",
      "To house landing lights"
    ],
    correct: 1,
    explanation: "Winglets reduce induced drag by disrupting wing tip vortices, improving fuel efficiency and range."
  },
  {
    id: 165,
    text: "What does METAR stand for?",
    options: [
      "Meteorological Aerodrome Report",
      "Military Emergency Terminal Alert",
      "Maximum Elevation Terrain Analysis",
      "Measured Temperature and Rain"
    ],
    correct: 0,
    explanation: "METAR is a Meteorological Aerodrome Report, a standardized format for reporting weather observations at airports."
  },
  {
    id: 166,
    text: "Which gyroscopic instrument is affected by precession?",
    options: [
      "Airspeed indicator",
      "Altimeter",
      "Heading indicator",
      "Vertical speed indicator"
    ],
    correct: 2,
    explanation: "The heading indicator is a gyroscopic instrument that experiences precession (drift) and must be periodically realigned with the magnetic compass."
  },
  {
    id: 167,
    text: "What is the purpose of carburetor heat in an aircraft engine?",
    options: [
      "To increase engine power",
      "To prevent or remove ice formation in the carburetor",
      "To cool the engine",
      "To improve fuel efficiency"
    ],
    correct: 1,
    explanation: "Carburetor heat uses hot air from around the engine to prevent or remove ice that can form in the carburetor due to evaporative cooling and pressure drop."
  },
  {
    id: 168,
    text: "What is V1 speed in aviation?",
    options: [
      "Takeoff decision speed",
      "Rotation speed",
      "Stall speed",
      "Maximum operating speed"
    ],
    correct: 0,
    explanation: "V1 is the critical engine failure recognition speed or takeoff decision speed. Beyond V1, the takeoff must be continued even if an engine fails."
  },
  {
    id: 169,
    text: "Which cloud type is most likely to produce severe turbulence?",
    options: [
      "Cirrus",
      "Stratus",
      "Cumulonimbus",
      "Altostratus"
    ],
    correct: 2,
    explanation: "Cumulonimbus clouds are thunderstorm clouds that produce severe turbulence, icing, hail, and lightning."
  },
  {
    id: 170,
    text: "What is the purpose of a magnetic compass deviation card?",
    options: [
      "To show magnetic variation",
      "To show compass errors caused by aircraft metal and electrical systems",
      "To calculate fuel consumption",
      "To determine wind direction"
    ],
    correct: 1,
    explanation: "The compass deviation card shows compass errors caused by magnetic interference from the aircraft's metal structure and electrical systems on different headings."
  },
  {
    id: 171,
    text: "What is the term for the imaginary line from the wing's leading edge to trailing edge?",
    options: [
      "Camber line",
      "Chord line",
      "Flight path",
      "Angle of attack"
    ],
    correct: 1,
    explanation: "The chord line is the straight line connecting the leading edge and trailing edge of an airfoil."
  },
  {
    id: 172,
    text: "Which instrument uses a diaphragm that expands and contracts with pressure changes?",
    options: [
      "Heading indicator",
      "Turn coordinator",
      "Altimeter",
      "Attitude indicator"
    ],
    correct: 2,
    explanation: "The altimeter uses an aneroid wafer (diaphragm) that expands and contracts with changes in atmospheric pressure to measure altitude."
  },
  {
    id: 173,
    text: "What is the primary advantage of a turbofan engine over a turbojet?",
    options: [
      "Higher maximum speed",
      "Better fuel efficiency and quieter operation",
      "Simpler design",
      "Lower initial cost"
    ],
    correct: 1,
    explanation: "Turbofan engines are more fuel-efficient and quieter than turbojets because most thrust comes from the bypass air around the core engine."
  },
  {
    id: 174,
    text: "What does the term 'hydroplaning' refer to in aviation?",
    options: [
      "Landing on water",
      "Tires riding on a film of water during landing or takeoff",
      "Fuel contamination",
      "Ice accumulation on wings"
    ],
    correct: 1,
    explanation: "Hydroplaning occurs when tires ride on a film of water on the runway, reducing braking effectiveness and directional control."
  },
  {
    id: 175,
    text: "What is the purpose of a mixture control in a piston engine aircraft?",
    options: [
      "To control engine speed",
      "To adjust the fuel-to-air ratio",
      "To regulate oil pressure",
      "To control propeller pitch"
    ],
    correct: 1,
    explanation: "The mixture control adjusts the fuel-to-air ratio to optimize engine performance at different altitudes where air density changes."
  },
  {
    id: 176,
    text: "What is the term for the tendency of an aircraft to return to straight and level flight?",
    options: [
      "Adverse yaw",
      "Positive static stability",
      "Dutch roll",
      "Spiral instability"
    ],
    correct: 1,
    explanation: "Positive static stability is the tendency of an aircraft to return to its original attitude after being disturbed."
  },
  {
    id: 177,
    text: "Which type of airspace requires two-way radio communication with ATC?",
    options: [
      "Class G",
      "Class E",
      "Class C",
      "Uncontrolled airspace"
    ],
    correct: 2,
    explanation: "Class C airspace (typically around busy airports) requires pilots to establish two-way radio communication with ATC before entering."
  },
  {
    id: 178,
    text: "What is the primary function of a propeller governor?",
    options: [
      "To control fuel flow",
      "To maintain constant RPM by adjusting blade pitch",
      "To prevent propeller overspeed",
      "To synchronize multiple propellers"
    ],
    correct: 1,
    explanation: "A propeller governor automatically adjusts blade pitch to maintain constant engine RPM under varying flight conditions."
  },
  {
    id: 179,
    text: "What does TAF stand for in aviation weather?",
    options: [
      "Terminal Aerodrome Forecast",
      "Traffic Advisory Frequency",
      "Tactical Air Force",
      "Temperature Altitude Factor"
    ],
    correct: 0,
    explanation: "TAF (Terminal Aerodrome Forecast) is a weather forecast for a specific airport, typically covering a 24-30 hour period."
  },
  {
    id: 180,
    text: "What is the purpose of spoilers on an aircraft wing?",
    options: [
      "To increase lift during takeoff",
      "To reduce lift and increase drag",
      "To control yaw",
      "To improve fuel efficiency"
    ],
    correct: 1,
    explanation: "Spoilers disrupt airflow over the wing to reduce lift and increase drag, used for descent control and as ground brakes after landing."
  },
  {
    id: 181,
    text: "What is the term for the rotational movement around the aircraft's lateral axis?",
    options: [
      "Yaw",
      "Roll",
      "Pitch",
      "Bank"
    ],
    correct: 2,
    explanation: "Pitch is rotation around the lateral (side-to-side) axis, controlled by the elevator, causing the nose to move up or down."
  },
  {
    id: 182,
    text: "Which factor does NOT affect density altitude?",
    options: [
      "Temperature",
      "Atmospheric pressure",
      "Humidity",
      "Aircraft weight"
    ],
    correct: 3,
    explanation: "Density altitude is affected by temperature, pressure, and humidity, but not by aircraft weight. However, high density altitude affects aircraft performance regardless of weight."
  },
  {
    id: 183,
    text: "What is the purpose of a trim tab on a control surface?",
    options: [
      "To increase control surface deflection",
      "To reduce pilot workload by maintaining a desired flight attitude",
      "To provide emergency backup control",
      "To improve aerodynamic efficiency"
    ],
    correct: 1,
    explanation: "Trim tabs are small adjustable surfaces on control surfaces that help reduce or eliminate control pressure, maintaining a desired flight attitude without constant pilot input."
  },
  {
    id: 184,
    text: "What does the term 'ground effect' refer to?",
    options: [
      "Increased lift and reduced drag when flying close to the ground",
      "Turbulence caused by ground obstacles",
      "Reduced engine power near the ground",
      "Increased stall speed near the ground"
    ],
    correct: 0,
    explanation: "Ground effect occurs when flying within one wingspan of the surface, where compressed air between the wing and ground increases lift and reduces induced drag."
  },
  {
    id: 185,
    text: "What is the primary purpose of a fuel pump in an aircraft?",
    options: [
      "To filter fuel",
      "To deliver fuel from the tanks to the engine",
      "To measure fuel quantity",
      "To cool the fuel"
    ],
    correct: 1,
    explanation: "The fuel pump delivers fuel under pressure from the tanks to the engine, ensuring consistent fuel flow especially during critical phases of flight."
  },
  {
    id: 186,
    text: "What is the term for the speed that provides the greatest altitude gain per unit of time?",
    options: [
      "Best glide speed",
      "Best angle of climb speed (Vx)",
      "Best rate of climb speed (Vy)",
      "Cruise climb speed"
    ],
    correct: 2,
    explanation: "Vy (best rate of climb speed) provides the maximum altitude gain per unit of time, measured in feet per minute."
  },
  {
    id: 187,
    text: "Which weather phenomenon is characterized by a rotating column of air extending from a cloud to the ground?",
    options: [
      "Microburst",
      "Wind shear",
      "Tornado",
      "Dust devil"
    ],
    correct: 2,
    explanation: "A tornado is a violently rotating column of air extending from a thunderstorm to the ground, posing extreme danger to aviation."
  },
  {
    id: 188,
    text: "What is the purpose of an ELT (Emergency Locator Transmitter)?",
    options: [
      "To provide navigation guidance",
      "To communicate with ATC",
      "To transmit a distress signal after a crash",
      "To monitor engine performance"
    ],
    correct: 2,
    explanation: "An ELT automatically transmits a distress signal on emergency frequencies after a crash impact, helping search and rescue teams locate the aircraft."
  },
  {
    id: 189,
    text: "What is the term for the angle between the chord line and the relative wind?",
    options: [
      "Pitch angle",
      "Angle of attack",
      "Angle of incidence",
      "Dihedral angle"
    ],
    correct: 1,
    explanation: "The angle of attack is the angle between the wing's chord line and the direction of the relative wind (oncoming airflow)."
  },
  {
    id: 190,
    text: "Which document must be carried on board an aircraft during flight?",
    options: [
      "Airworthiness certificate",
      "Maintenance logs",
      "Owner's manual",
      "Insurance policy"
    ],
    correct: 0,
    explanation: "The airworthiness certificate is one of the required documents (along with registration, operating limitations, and weight and balance) that must be on board during flight."
  },
  {
    id: 191,
    text: "What is the primary cause of a spin in an aircraft?",
    options: [
      "Engine failure",
      "Excessive airspeed",
      "Stall with yaw",
      "Control surface failure"
    ],
    correct: 2,
    explanation: "A spin occurs when one wing is more stalled than the other, combined with yaw, causing the aircraft to rotate and descend in a helical path."
  },
  {
    id: 192,
    text: "What does the term 'gross weight' refer to in aviation?",
    options: [
      "Empty weight of the aircraft",
      "Total weight of fuel",
      "Total weight of the aircraft including fuel, passengers, and cargo",
      "Maximum takeoff weight"
    ],
    correct: 2,
    explanation: "Gross weight is the total weight of the aircraft, including the empty weight plus fuel, passengers, cargo, and any other load."
  },
  {
    id: 193,
    text: "What is the purpose of a vacuum system in an aircraft?",
    options: [
      "To power fuel pumps",
      "To operate gyroscopic instruments",
      "To pressurize the cabin",
      "To cool the engine"
    ],
    correct: 1,
    explanation: "The vacuum system (or pressure system) powers gyroscopic instruments such as the attitude indicator and heading indicator."
  },
  {
    id: 194,
    text: "What is the term for the maximum speed at which an aircraft can be safely flown?",
    options: [
      "Never exceed speed (Vne)",
      "Cruise speed",
      "Stall speed",
      "Best glide speed"
    ],
    correct: 0,
    explanation: "Vne (never exceed speed) is the maximum speed at which an aircraft can be operated without risking structural damage, marked by a red line on the airspeed indicator."
  },
  {
    id: 195,
    text: "Which factor increases the likelihood of carburetor icing?",
    options: [
      "High temperature and low humidity",
      "Temperature between 20°F to 70°F with visible moisture",
      "Very cold temperature below 0°F",
      "High altitude flight"
    ],
    correct: 1,
    explanation: "Carburetor icing is most likely to occur at temperatures between 20°F and 70°F (-7°C to 21°C) with visible moisture or high humidity."
  },
  {
    id: 196,
    text: "What is the purpose of a pre-flight inspection?",
    options: [
      "To refuel the aircraft",
      "To check the aircraft for airworthiness and safety before flight",
      "To calculate weight and balance",
      "To file a flight plan"
    ],
    correct: 1,
    explanation: "A pre-flight inspection is a systematic check of the aircraft's condition to ensure it is airworthy and safe to fly before each flight."
  },
  {
    id: 197,
    text: "What does the term 'crosswind' mean in aviation?",
    options: [
      "Wind blowing directly toward the aircraft",
      "Wind blowing from behind the aircraft",
      "Wind blowing perpendicular to the runway or flight path",
      "Wind blowing at high altitude"
    ],
    correct: 2,
    explanation: "A crosswind is wind blowing perpendicular (at an angle) to the runway or intended flight path, requiring special landing and takeoff techniques."
  },
  {
    id: 198,
    text: "What is the primary function of the oil system in an aircraft engine?",
    options: [
      "To cool and lubricate engine components",
      "To provide hydraulic pressure",
      "To power electrical systems",
      "To increase combustion efficiency"
    ],
    correct: 0,
    explanation: "The oil system lubricates moving parts to reduce friction and wear, and helps cool the engine by dissipating heat from internal components."
  },
  {
    id: 199,
    text: "What is the term for the upward curved shape of a wing from root to tip?",
    options: [
      "Camber",
      "Dihedral",
      "Sweep",
      "Taper"
    ],
    correct: 1,
    explanation: "Dihedral is the upward angle of the wings from root to tip when viewed from the front, which provides lateral stability."
  },
  {
    id: 200,
    text: "What is the purpose of a magneto check during engine runup?",
    options: [
      "To check fuel pressure",
      "To test the independent ignition systems",
      "To verify oil temperature",
      "To calibrate the tachometer"
    ],
    correct: 1,
    explanation: "A magneto check tests each of the two independent ignition systems to ensure both are functioning properly and providing redundancy for engine operation."
  }
];

export const AVIATION_INFO_CONFIG = {
  timeLimit: 8 * 60, // 8 minutes
  sectionName: "Aviation Information",
  totalQuestions: 20
};