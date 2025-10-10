// Reading Comprehension Questions for AFOQT
export const readingCompData = [
  {
    id: 1,
    passage: "Modern fighter aircraft rely heavily on fly-by-wire systems, which replace traditional manual flight controls with electronic interfaces. In these systems, pilot inputs are transmitted to flight computers that interpret the commands and determine the optimal control surface movements. This technology offers several advantages: it reduces pilot workload during complex maneuvers, prevents the aircraft from exceeding structural limitations, and allows for inherently unstable aircraft designs that would be impossible to fly manually but offer superior performance characteristics.\n\nHowever, fly-by-wire systems introduce new challenges. The aircraft becomes dependent on electrical power and computer functionality, requiring multiple redundant systems to ensure safety. Additionally, pilots must trust the computer's interpretation of their commands, which can feel counterintuitive when the system overrides direct inputs to maintain aircraft stability.",
    questions: [
      {
        id: 1,
        text: "According to the passage, which of the following is NOT mentioned as an advantage of fly-by-wire systems?",
        options: [
          "Reduction in pilot workload",
          "Prevention of structural damage",
          "Increased fuel efficiency",
          "Enabling unstable aircraft designs"
        ],
        correct: 2,
        explanation: "The passage lists three advantages: reducing pilot workload, preventing structural damage (exceeding limitations), and enabling unstable designs. Fuel efficiency is never mentioned in the passage."
      },
      {
        id: 2,
        text: "The passage suggests that fly-by-wire systems require redundancy primarily because:",
        options: [
          "Pilots do not trust computer systems",
          "The aircraft depends on electrical and computer systems",
          "Manual controls are more reliable",
          "Complex maneuvers require backup systems"
        ],
        correct: 1,
        explanation: "The passage states 'The aircraft becomes dependent on electrical power and computer functionality, requiring multiple redundant systems to ensure safety.' This directly indicates dependence on electrical/computer systems is why redundancy is needed."
      }
    ]
  },
  {
    id: 2,
    passage: "Hypoxia occurs when body tissues receive insufficient oxygen. At higher altitudes, reduced atmospheric pressure decreases oxygen availability, potentially causing symptoms including confusion, euphoria, and impaired judgment. Military aviators must recognize hypoxia symptoms quickly, as the condition can incapacitate a pilot within seconds at extreme altitudes.",
    questions: [
      {
        id: 3,
        text: "The primary concern with hypoxia for pilots is:",
        options: [
          "It causes permanent damage",
          "It can rapidly impair judgment and cause incapacitation",
          "It only occurs at extreme altitudes",
          "It cannot be treated in flight"
        ],
        correct: 1,
        explanation: "The passage specifically states 'the condition can incapacitate a pilot within seconds at extreme altitudes' and mentions 'impaired judgment' as a symptom. The rapid incapacitation is the primary concern highlighted."
      }
    ]
  },
  {
    id: 3,
    passage: "Effective military leadership requires balancing mission accomplishment with troop welfare. Leaders must make decisions that may put personnel at risk while simultaneously demonstrating genuine care for their subordinates' wellbeing. This paradox defines military leadership: the willingness to accept calculated risks for mission success while doing everything possible to bring everyone home safely.\n\nResearch indicates that the most effective military leaders are those who establish clear standards, communicate expectations explicitly, and hold themselves to the same standards they demand of others. Trust flows both upward and downward in the chain of command, and leaders who demonstrate competence, integrity, and concern for their people typically earn the loyalty and respect necessary for effective unit performance.",
    questions: [
      {
        id: 4,
        text: "The main idea of this passage is that military leadership:",
        options: [
          "Prioritizes mission success over personnel safety",
          "Requires balancing competing priorities",
          "Depends primarily on technical competence",
          "Is learned through experience rather than training"
        ],
        correct: 1,
        explanation: "The passage's opening sentence establishes the theme: 'balancing mission accomplishment with troop welfare.' The word 'paradox' further emphasizes this balance between competing priorities."
      },
      {
        id: 5,
        text: "According to the passage, effective military leaders build trust by:",
        options: [
          "Being lenient with standards",
          "Making independent decisions",
          "Holding themselves to the same standards as subordinates",
          "Prioritizing upward communication"
        ],
        correct: 2,
        explanation: "The passage explicitly states that effective leaders 'hold themselves to the same standards they demand of others.' This consistency builds trust both up and down the chain of command."
      }
    ]
  },
  {
    id: 4,
    passage: "The jet stream is a narrow band of strong winds in the upper atmosphere, typically found at altitudes between 30,000 and 40,000 feet. These high-altitude winds can exceed 200 mph and significantly affect flight times. Pilots flying eastward can use the jet stream to reduce flight time and fuel consumption, while westward flights must often fly at different altitudes to avoid headwinds.",
    questions: [
      {
        id: 6,
        text: "According to the passage, pilots adjust altitude on westward flights primarily to:",
        options: [
          "Improve passenger comfort",
          "Avoid strong headwinds from the jet stream",
          "Reach cruising speed faster",
          "Conserve fuel at higher altitudes"
        ],
        correct: 1,
        explanation: "The passage states 'westward flights must often fly at different altitudes to avoid headwinds.' While fuel conservation is mentioned for eastward flights using tailwinds, avoiding headwinds is the specific reason given for westward altitude adjustments."
      }
    ]
  },
  {
    id: 5,
    passage: "Air traffic control radar systems use two primary types: primary and secondary radar. Primary radar detects aircraft by transmitting radio waves and measuring reflected signals, similar to how bats use echolocation. This system can detect any aircraft regardless of equipment, but provides limited information—only the aircraft's position and bearing.\n\nSecondary radar, in contrast, requires aircraft to carry transponders that receive interrogation signals and transmit detailed responses. These responses include altitude, aircraft identification, and emergency status. While secondary radar provides much richer data, it depends entirely on functioning transponder equipment, making primary radar essential as a backup system.",
    questions: [
      {
        id: 7,
        text: "The passage suggests that primary radar is essential as a backup because:",
        options: [
          "It provides more detailed information",
          "It functions regardless of aircraft equipment",
          "It is more accurate than secondary radar",
          "Secondary radar cannot detect altitude"
        ],
        correct: 1,
        explanation: "The passage states primary radar 'can detect any aircraft regardless of equipment' while secondary radar 'depends entirely on functioning transponder equipment.' This independence from aircraft equipment makes it an essential backup."
      },
      {
        id: 8,
        text: "Secondary radar differs from primary radar in that it:",
        options: [
          "Uses sound waves instead of radio waves",
          "Can detect aircraft at greater distances",
          "Requires aircraft to have functioning transponders",
          "Is less reliable in poor weather"
        ],
        correct: 2,
        explanation: "The passage explicitly states secondary radar 'requires aircraft to carry transponders that receive interrogation signals and transmit detailed responses.' This is the key difference described."
      }
    ]
  },
  {
    id: 6,
    passage: "Spatial disorientation is a leading cause of aircraft accidents, occurring when pilots lose awareness of their aircraft's position, altitude, or motion relative to the Earth. The inner ear's vestibular system, which helps maintain balance on the ground, can provide false sensations during flight, especially in conditions where visual references are limited.",
    questions: [
      {
        id: 9,
        text: "Based on the passage, spatial disorientation is particularly dangerous because:",
        options: [
          "It damages the inner ear permanently",
          "The body's balance system can provide incorrect information during flight",
          "It only affects inexperienced pilots",
          "Visual references are always limited in flight"
        ],
        correct: 1,
        explanation: "The passage states 'The inner ear's vestibular system...can provide false sensations during flight.' This false information from the body's own balance system is what makes spatial disorientation dangerous."
      }
    ]
  },
  {
    id: 7,
    passage: "Meteorological conditions significantly impact flight operations and safety. Instrument Meteorological Conditions (IMC) exist when weather falls below Visual Flight Rules (VFR) minimums, requiring pilots to navigate primarily by reference to instruments rather than visual landmarks. While modern aircraft and pilot training make IMC flight routine, it demands different skills and increased vigilance compared to visual flight.\n\nOne particularly hazardous weather phenomenon is wind shear—a sudden change in wind speed or direction over a short distance. Wind shear during takeoff or landing can be especially dangerous because aircraft are operating at lower speeds with reduced maneuvering capability. Microburst-induced wind shear, caused by powerful downdrafts from thunderstorms, has been responsible for several aviation accidents, leading to the development of specialized detection systems at major airports.",
    questions: [
      {
        id: 10,
        text: "Based on the passage, wind shear is particularly dangerous during takeoff and landing because:",
        options: [
          "Pilots cannot see the runway clearly",
          "Aircraft have less speed and maneuverability",
          "Detection systems are not available",
          "Instrument flight rules do not apply"
        ],
        correct: 1,
        explanation: "The passage directly states 'aircraft are operating at lower speeds with reduced maneuvering capability' during takeoff and landing, making wind shear especially dangerous during these phases."
      },
      {
        id: 11,
        text: "The passage implies that IMC flight:",
        options: [
          "Is more dangerous than visual flight",
          "Requires specialized equipment and skills",
          "Should be avoided when possible",
          "Is only permitted in emergencies"
        ],
        correct: 1,
        explanation: "The passage states IMC flight 'demands different skills and increased vigilance' and requires pilots to navigate 'primarily by reference to instruments.' This implies specialized equipment and training are necessary."
      }
    ]
  },
  {
    id: 8,
    passage: "The phonetic alphabet (Alpha, Bravo, Charlie, etc.) was developed to ensure clear communication in radio transmissions where static, accents, or poor signal quality might cause confusion. Each letter is represented by a word chosen specifically because it sounds distinct from all other alphabet words, even when transmitted through low-quality audio.",
    questions: [
      {
        id: 12,
        text: "The primary reason for using the phonetic alphabet is to:",
        options: [
          "Speed up communication",
          "Maintain security in transmissions",
          "Prevent misunderstanding in poor audio conditions",
          "Comply with international regulations"
        ],
        correct: 2,
        explanation: "The passage states the phonetic alphabet was developed 'to ensure clear communication in radio transmissions where static, accents, or poor signal quality might cause confusion.' Preventing misunderstanding is the key purpose."
      }
    ]
  },
  {
    id: 9,
    passage: "Bernoulli's principle explains that as airflow velocity increases over a surface, pressure decreases. This principle is fundamental to understanding lift generation on aircraft wings. The curved upper surface of a typical wing causes air to travel faster over the top than underneath, creating lower pressure above the wing and higher pressure below, resulting in upward lift force.\n\nHowever, this simplified explanation is incomplete. Modern aerodynamic theory recognizes that lift results from multiple factors, including the Coanda effect (air's tendency to follow curved surfaces) and Newton's third law (the wing deflects air downward, creating an equal and opposite upward force). At high angles of attack, if airflow separates from the wing's upper surface, lift decreases dramatically—a condition called a stall.",
    questions: [
      {
        id: 13,
        text: "According to the passage, a stall occurs when:",
        options: [
          "The aircraft runs out of fuel",
          "Airflow separates from the wing's upper surface",
          "The engine stops producing thrust",
          "Bernoulli's principle stops functioning"
        ],
        correct: 1,
        explanation: "The passage explicitly defines a stall: 'if airflow separates from the wing's upper surface, lift decreases dramatically—a condition called a stall.' This is about airflow separation, not engine or fuel issues."
      },
      {
        id: 14,
        text: "The passage indicates that the complete explanation of lift:",
        options: [
          "Depends solely on Bernoulli's principle",
          "Involves multiple aerodynamic principles",
          "Remains unknown to modern science",
          "Is too complex for practical application"
        ],
        correct: 1,
        explanation: "The passage states the Bernoulli explanation is 'incomplete' and that 'Modern aerodynamic theory recognizes that lift results from multiple factors,' listing the Coanda effect and Newton's third law as additional principles."
      }
    ]
  },
  {
    id: 10,
    passage: "Crew Resource Management (CRM) training emphasizes that effective flight crews function as teams rather than hierarchies. Studies of aviation accidents revealed that crashes sometimes occurred because junior crew members hesitated to challenge captain's decisions, even when they recognized dangerous errors. Modern CRM training encourages assertive communication and mutual monitoring.",
    questions: [
      {
        id: 15,
        text: "CRM training was developed primarily because:",
        options: [
          "Captains lacked technical skills",
          "Crew members failed to communicate critical safety concerns",
          "Aircraft technology became too complex",
          "Regulations required standardized procedures"
        ],
        correct: 1,
        explanation: "The passage states that 'crashes sometimes occurred because junior crew members hesitated to challenge captain's decisions, even when they recognized dangerous errors.' This failure to communicate safety concerns led to CRM development."
      }
    ]
  },
  {
    id: 11,
    passage: "The profession of arms carries unique ethical obligations. Military personnel are entrusted with extraordinary authority, including the legal use of force, and must exercise this power responsibly. The military's core values—integrity, service, and excellence—provide an ethical framework, but real-world situations often present complex dilemmas without clear-cut answers.\n\nConsider the scenario of conflicting orders. While military discipline demands obedience to lawful orders, personnel are also obligated to refuse unlawful orders. Determining legality requires judgment, and in ambiguous situations, military members must weigh their duty to follow the chain of command against their responsibility to adhere to laws of war and moral principles. This tension underscores why military ethics education emphasizes both rule-following and critical thinking.",
    questions: [
      {
        id: 16,
        text: "The primary purpose of this passage is to:",
        options: [
          "Explain military core values",
          "Illustrate the complexity of military ethics",
          "Describe the chain of command",
          "Define lawful versus unlawful orders"
        ],
        correct: 1,
        explanation: "While the passage mentions core values and orders, its main focus is on how 'real-world situations often present complex dilemmas' and the tension between competing obligations. The overall purpose is to show ethical complexity."
      },
      {
        id: 17,
        text: "According to the passage, military ethics education emphasizes both rule-following and critical thinking because:",
        options: [
          "Rules cannot cover every situation",
          "Orders may conflict with laws and morals",
          "Military discipline requires both elements",
          "Personnel must make judgment calls in ambiguous situations"
        ],
        correct: 3,
        explanation: "The passage concludes by stating that the tension in 'ambiguous situations' where military members must 'weigh their duty' is why ethics education emphasizes both approaches. The need for judgment in unclear scenarios is the key reason."
      }
    ]
  },
  {
    id: 12,
    passage: "Aircraft pressurization systems maintain cabin altitude typically between 6,000 and 8,000 feet, even when flying at 35,000 feet or higher. This compromise allows passengers to breathe comfortably without requiring the structural strength needed to maintain sea-level pressure at high altitudes. Sudden loss of cabin pressure requires immediate use of oxygen masks.",
    questions: [
      {
        id: 18,
        text: "Cabins are not pressurized to sea level primarily because:",
        options: [
          "Passengers adapt easily to higher altitudes",
          "It would require stronger aircraft construction",
          "Oxygen masks are readily available",
          "Flight times would increase significantly"
        ],
        correct: 1,
        explanation: "The passage states maintaining sea-level pressure would require 'the structural strength needed to maintain sea-level pressure at high altitudes.' The compromise of 6,000-8,000 feet avoids this structural requirement."
      }
    ]
  },
  {
    id: 13,
    passage: "Global Positioning System (GPS) technology has revolutionized aviation navigation, providing precise position information anywhere on Earth. However, GPS signals can be jammed or spoofed, and solar activity occasionally disrupts satellite communications. For these reasons, military and commercial aviation maintain traditional navigation capabilities as backup systems.\n\nInertial Navigation Systems (INS) calculate position by measuring aircraft acceleration and integrating these measurements over time. Unlike GPS, INS operates independently of external signals, making it immune to jamming. However, small measurement errors accumulate over time, causing position accuracy to drift. Modern aircraft typically use integrated systems that combine GPS accuracy with INS reliability.",
    questions: [
      {
        id: 19,
        text: "The passage suggests that GPS and INS are used together because:",
        options: [
          "GPS is less accurate than INS",
          "They compensate for each other's weaknesses",
          "Regulations require redundant systems",
          "INS cannot determine altitude"
        ],
        correct: 1,
        explanation: "The passage describes GPS vulnerabilities (jamming, spoofing, solar disruption) and INS limitations (accuracy drift over time), then states modern systems 'combine GPS accuracy with INS reliability.' They complement each other's weaknesses."
      },
      {
        id: 20,
        text: "According to the passage, INS position accuracy drifts because:",
        options: [
          "It depends on satellite signals",
          "Solar activity disrupts its operation",
          "Small measurement errors accumulate over time",
          "It cannot measure acceleration precisely"
        ],
        correct: 2,
        explanation: "The passage directly states 'small measurement errors accumulate over time, causing position accuracy to drift.' This accumulation of small errors is the specific cause mentioned."
      }
    ]
  },
  {
    id: 14,
    passage: "Turbulence is irregular air movement caused by atmospheric conditions such as thunderstorms, jet streams, or air flowing over mountains. While turbulence rarely causes structural damage to modern aircraft, it can injure passengers and crew who are not properly restrained. Pilots use weather radar and reports from other aircraft to anticipate and avoid turbulent areas when possible.",
    questions: [
      {
        id: 21,
        text: "The main idea of this passage is that turbulence:",
        options: [
          "Primarily threatens aircraft structural integrity",
          "Can be completely avoided with modern technology",
          "Poses injury risk but is rarely structurally dangerous",
          "Only occurs near thunderstorms"
        ],
        correct: 2,
        explanation: "The passage emphasizes that turbulence 'rarely causes structural damage' but 'can injure passengers and crew.' The contrast between low structural risk and injury potential is the main point."
      }
    ]
  },
  {
    id: 15,
    passage: "Fatigue significantly degrades pilot performance, impairing reaction time, decision-making ability, and situational awareness. Unlike alcohol intoxication, individuals often fail to recognize their own fatigue-related impairment. Research shows that being awake for 17 hours produces performance decrements equivalent to a blood alcohol concentration of 0.05%, and 24 hours of wakefulness is comparable to 0.10%—legally drunk in most jurisdictions.\n\nThe aviation industry has implemented crew rest requirements and fatigue risk management programs to address this issue. However, individual sleep needs vary, and factors such as circadian rhythm disruption from crossing time zones can affect pilots differently. Professional aviators must take personal responsibility for arriving to work adequately rested, as regulations alone cannot guarantee alertness.",
    questions: [
      {
        id: 22,
        text: "According to the passage, fatigue is particularly dangerous because:",
        options: [
          "It affects all pilots equally",
          "Regulations do not address it adequately",
          "People often don't recognize their own impairment",
          "It is more impairing than alcohol"
        ],
        correct: 2,
        explanation: "The passage explicitly states 'Unlike alcohol intoxication, individuals often fail to recognize their own fatigue-related impairment.' This lack of self-awareness is what makes fatigue particularly dangerous."
      },
      {
        id: 23,
        text: "The passage suggests that managing pilot fatigue requires:",
        options: [
          "Stricter regulations only",
          "Both institutional programs and individual responsibility",
          "Eliminating time zone changes",
          "Standardized sleep schedules for all pilots"
        ],
        correct: 1,
        explanation: "The passage mentions both 'crew rest requirements and fatigue risk management programs' (institutional) and states 'Professional aviators must take personal responsibility,' concluding that 'regulations alone cannot guarantee alertness.'"
      }
    ]
  },
  {
    id: 16,
    passage: "Composite materials, such as carbon fiber reinforced polymers, increasingly replace traditional aluminum in modern aircraft construction. Composites offer superior strength-to-weight ratios and corrosion resistance. However, damage to composite structures can be difficult to detect visually, requiring specialized inspection techniques such as ultrasonic testing.",
    questions: [
      {
        id: 24,
        text: "The passage indicates that composite materials:",
        options: [
          "Are heavier than aluminum",
          "Require specialized damage inspection methods",
          "Are more prone to corrosion",
          "Are easier to repair than metal"
        ],
        correct: 1,
        explanation: "The passage states 'damage to composite structures can be difficult to detect visually, requiring specialized inspection techniques such as ultrasonic testing.' This need for specialized inspection is explicitly mentioned."
      }
    ]
  },
  {
    id: 17,
    passage: "The Berlin Airlift of 1948-1949 demonstrated the strategic importance of airlift capability. When Soviet forces blocked ground access to West Berlin, the United States and its allies sustained the city's two million residents entirely by air for nearly a year. At its peak, aircraft landed in Berlin every few minutes, delivering food, fuel, and supplies. The operation's success proved that airpower could overcome geographic obstacles and achieve strategic objectives without military conflict.",
    questions: [
      {
        id: 25,
        text: "The Berlin Airlift is significant primarily because it:",
        options: [
          "Ended World War II",
          "Demonstrated airpower's strategic potential for non-combat missions",
          "Was the first use of military aircraft",
          "Established NATO"
        ],
        correct: 1,
        explanation: "The passage concludes that the airlift 'proved that airpower could overcome geographic obstacles and achieve strategic objectives without military conflict.' This demonstration of non-combat strategic airpower is identified as the key significance."
      }
    ]
  },
  // Add more passages as needed...
];

export const EXAM_CONFIG = {
  timeLimit: 38 * 60, // 38 minutes in seconds
  sectionName: "Reading Comprehension"
};