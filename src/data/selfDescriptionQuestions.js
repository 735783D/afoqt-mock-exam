// Self-Description Inventory for AFOQT
// 220 personality assessment questions
// Response format: Like Me / Not Like Me

export const selfDescriptionData = [
  // Leadership & Initiative (1-30)
  {
    id: 1,
    statement: "I often take charge when working in a group.",
    category: "leadership"
  },
  {
    id: 2,
    statement: "I am comfortable making decisions without consulting others.",
    category: "leadership"
  },
  {
    id: 3,
    statement: "People naturally look to me for direction.",
    category: "leadership"
  },
  {
    id: 4,
    statement: "I enjoy organizing events and activities.",
    category: "leadership"
  },
  {
    id: 5,
    statement: "I prefer to let others take the lead.",
    category: "leadership",
    reverse: true
  },
  {
    id: 6,
    statement: "I am good at motivating others to accomplish goals.",
    category: "leadership"
  },
  {
    id: 7,
    statement: "I feel confident giving orders to others.",
    category: "leadership"
  },
  {
    id: 8,
    statement: "I avoid positions of authority when possible.",
    category: "leadership",
    reverse: true
  },
  {
    id: 9,
    statement: "I can effectively delegate tasks to team members.",
    category: "leadership"
  },
  {
    id: 10,
    statement: "I am comfortable being responsible for others' work.",
    category: "leadership"
  },
  {
    id: 11,
    statement: "I take initiative without being asked.",
    category: "leadership"
  },
  {
    id: 12,
    statement: "I wait for instructions before acting.",
    category: "leadership",
    reverse: true
  },
  {
    id: 13,
    statement: "I actively seek leadership opportunities.",
    category: "leadership"
  },
  {
    id: 14,
    statement: "I am effective at resolving conflicts between people.",
    category: "leadership"
  },
  {
    id: 15,
    statement: "I find it difficult to discipline others.",
    category: "leadership",
    reverse: true
  },
  {
    id: 16,
    statement: "I can inspire others to perform their best.",
    category: "leadership"
  },
  {
    id: 17,
    statement: "I prefer working alone rather than leading a team.",
    category: "leadership",
    reverse: true
  },
  {
    id: 18,
    statement: "I am willing to make unpopular decisions when necessary.",
    category: "leadership"
  },
  {
    id: 19,
    statement: "I feel uncomfortable being in charge of a project.",
    category: "leadership",
    reverse: true
  },
  {
    id: 20,
    statement: "I can maintain team morale during difficult times.",
    category: "leadership"
  },
  {
    id: 21,
    statement: "I set clear expectations for team members.",
    category: "leadership"
  },
  {
    id: 22,
    statement: "I have difficulty asserting my authority.",
    category: "leadership",
    reverse: true
  },
  {
    id: 23,
    statement: "I am comfortable speaking in front of large groups.",
    category: "leadership"
  },
  {
    id: 24,
    statement: "I can make quick decisions under pressure.",
    category: "leadership"
  },
  {
    id: 25,
    statement: "I avoid taking risks as a leader.",
    category: "leadership",
    reverse: true
  },
  {
    id: 26,
    statement: "I hold myself accountable for team failures.",
    category: "leadership"
  },
  {
    id: 27,
    statement: "I am good at identifying others' strengths.",
    category: "leadership"
  },
  {
    id: 28,
    statement: "I struggle to provide constructive criticism.",
    category: "leadership",
    reverse: true
  },
  {
    id: 29,
    statement: "I lead by example.",
    category: "leadership"
  },
  {
    id: 30,
    statement: "I can adapt my leadership style to different situations.",
    category: "leadership"
  },

  // Stress Tolerance & Composure (31-55)
  {
    id: 31,
    statement: "I remain calm in emergency situations.",
    category: "stress_tolerance"
  },
  {
    id: 32,
    statement: "I get overwhelmed easily when under pressure.",
    category: "stress_tolerance",
    reverse: true
  },
  {
    id: 33,
    statement: "I can think clearly during stressful situations.",
    category: "stress_tolerance"
  },
  {
    id: 34,
    statement: "I lose my temper when things go wrong.",
    category: "stress_tolerance",
    reverse: true
  },
  {
    id: 35,
    statement: "I handle criticism well.",
    category: "stress_tolerance"
  },
  {
    id: 36,
    statement: "Unexpected changes make me anxious.",
    category: "stress_tolerance",
    reverse: true
  },
  {
    id: 37,
    statement: "I maintain focus when facing multiple demands.",
    category: "stress_tolerance"
  },
  {
    id: 38,
    statement: "I become irritable when tired or stressed.",
    category: "stress_tolerance",
    reverse: true
  },
  {
    id: 39,
    statement: "I can work effectively under tight deadlines.",
    category: "stress_tolerance"
  },
  {
    id: 40,
    statement: "I worry excessively about making mistakes.",
    category: "stress_tolerance",
    reverse: true
  },
  {
    id: 41,
    statement: "I recover quickly from setbacks.",
    category: "stress_tolerance"
  },
  {
    id: 42,
    statement: "I dwell on past failures.",
    category: "stress_tolerance",
    reverse: true
  },
  {
    id: 43,
    statement: "I stay composed when others are panicking.",
    category: "stress_tolerance"
  },
  {
    id: 44,
    statement: "I have difficulty sleeping when stressed.",
    category: "stress_tolerance",
    reverse: true
  },
  {
    id: 45,
    statement: "I can manage multiple priorities simultaneously.",
    category: "stress_tolerance"
  },
  {
    id: 46,
    statement: "I avoid challenging situations when possible.",
    category: "stress_tolerance",
    reverse: true
  },
  {
    id: 47,
    statement: "I maintain a positive attitude during difficulties.",
    category: "stress_tolerance"
  },
  {
    id: 48,
    statement: "I feel paralyzed when facing important decisions.",
    category: "stress_tolerance",
    reverse: true
  },
  {
    id: 49,
    statement: "I can control my emotions in tense situations.",
    category: "stress_tolerance"
  },
  {
    id: 50,
    statement: "I need frequent breaks to manage stress.",
    category: "stress_tolerance",
    reverse: true
  },
  {
    id: 51,
    statement: "I perform well under observation.",
    category: "stress_tolerance"
  },
  {
    id: 52,
    statement: "I get defensive when questioned.",
    category: "stress_tolerance",
    reverse: true
  },
  {
    id: 53,
    statement: "I can accept responsibility without becoming defensive.",
    category: "stress_tolerance"
  },
  {
    id: 54,
    statement: "I find it hard to concentrate when anxious.",
    category: "stress_tolerance",
    reverse: true
  },
  {
    id: 55,
    statement: "I thrive in high-pressure environments.",
    category: "stress_tolerance"
  },

  // Teamwork & Cooperation (56-80)
  {
    id: 56,
    statement: "I work well with people from diverse backgrounds.",
    category: "teamwork"
  },
  {
    id: 57,
    statement: "I prefer to work independently rather than in teams.",
    category: "teamwork",
    reverse: true
  },
  {
    id: 58,
    statement: "I am a good listener.",
    category: "teamwork"
  },
  {
    id: 59,
    statement: "I have difficulty compromising with others.",
    category: "teamwork",
    reverse: true
  },
  {
    id: 60,
    statement: "I contribute actively in group discussions.",
    category: "teamwork"
  },
  {
    id: 61,
    statement: "I become frustrated when others work differently than I do.",
    category: "teamwork",
    reverse: true
  },
  {
    id: 62,
    statement: "I help team members when they struggle.",
    category: "teamwork"
  },
  {
    id: 63,
    statement: "I keep my opinions to myself in group settings.",
    category: "teamwork",
    reverse: true
  },
  {
    id: 64,
    statement: "I build strong relationships with colleagues.",
    category: "teamwork"
  },
  {
    id: 65,
    statement: "I have trouble trusting others to do their part.",
    category: "teamwork",
    reverse: true
  },
  {
    id: 66,
    statement: "I am flexible in accommodating others' needs.",
    category: "teamwork"
  },
  {
    id: 67,
    statement: "I dominate group conversations.",
    category: "teamwork",
    reverse: true
  },
  {
    id: 68,
    statement: "I value input from all team members.",
    category: "teamwork"
  },
  {
    id: 69,
    statement: "I work better alone than with others.",
    category: "teamwork",
    reverse: true
  },
  {
    id: 70,
    statement: "I can resolve disagreements constructively.",
    category: "teamwork"
  },
  {
    id: 71,
    statement: "I get impatient with slower team members.",
    category: "teamwork",
    reverse: true
  },
  {
    id: 72,
    statement: "I share credit for team successes.",
    category: "teamwork"
  },
  {
    id: 73,
    statement: "I avoid group projects when possible.",
    category: "teamwork",
    reverse: true
  },
  {
    id: 74,
    statement: "I communicate effectively with team members.",
    category: "teamwork"
  },
  {
    id: 75,
    statement: "I have difficulty accepting others' ideas.",
    category: "teamwork",
    reverse: true
  },
  {
    id: 76,
    statement: "I support team decisions even when I disagree.",
    category: "teamwork"
  },
  {
    id: 77,
    statement: "I compete with rather than collaborate with teammates.",
    category: "teamwork",
    reverse: true
  },
  {
    id: 78,
    statement: "I am respectful of different perspectives.",
    category: "teamwork"
  },
  {
    id: 79,
    statement: "I criticize team members who make mistakes.",
    category: "teamwork",
    reverse: true
  },
  {
    id: 80,
    statement: "I enjoy working toward common goals.",
    category: "teamwork"
  },

  // Integrity & Ethics (81-105)
  {
    id: 81,
    statement: "I always tell the truth, even when it's difficult.",
    category: "integrity"
  },
  {
    id: 82,
    statement: "I sometimes bend rules if I think they're unfair.",
    category: "integrity",
    reverse: true
  },
  {
    id: 83,
    statement: "I report violations even when it affects friends.",
    category: "integrity"
  },
  {
    id: 84,
    statement: "I would cover for a colleague who made a mistake.",
    category: "integrity",
    reverse: true
  },
  {
    id: 85,
    statement: "I take responsibility for my errors.",
    category: "integrity"
  },
  {
    id: 86,
    statement: "I exaggerate my accomplishments occasionally.",
    category: "integrity",
    reverse: true
  },
  {
    id: 87,
    statement: "I follow regulations strictly.",
    category: "integrity"
  },
  {
    id: 88,
    statement: "I sometimes take shortcuts to finish quickly.",
    category: "integrity",
    reverse: true
  },
  {
    id: 89,
    statement: "I keep my commitments.",
    category: "integrity"
  },
  {
    id: 90,
    statement: "I call in sick when I just need a break.",
    category: "integrity",
    reverse: true
  },
  {
    id: 91,
    statement: "I am honest about my limitations.",
    category: "integrity"
  },
  {
    id: 92,
    statement: "I blame others when things go wrong.",
    category: "integrity",
    reverse: true
  },
  {
    id: 93,
    statement: "I maintain confidentiality when required.",
    category: "integrity"
  },
  {
    id: 94,
    statement: "I gossip about colleagues.",
    category: "integrity",
    reverse: true
  },
  {
    id: 95,
    statement: "I admit when I don't know something.",
    category: "integrity"
  },
  {
    id: 96,
    statement: "I take credit for others' work if I can.",
    category: "integrity",
    reverse: true
  },
  {
    id: 97,
    statement: "I treat everyone fairly regardless of rank.",
    category: "integrity"
  },
  {
    id: 98,
    statement: "I look the other way when I see minor violations.",
    category: "integrity",
    reverse: true
  },
  {
    id: 99,
    statement: "I do what I say I will do.",
    category: "integrity"
  },
  {
    id: 100,
    statement: "I would lie to protect myself from consequences.",
    category: "integrity",
    reverse: true
  },
  {
    id: 101,
    statement: "I hold myself to high ethical standards.",
    category: "integrity"
  },
  {
    id: 102,
    statement: "I make excuses rather than own mistakes.",
    category: "integrity",
    reverse: true
  },
  {
    id: 103,
    statement: "I report safety concerns immediately.",
    category: "integrity"
  },
  {
    id: 104,
    statement: "I use work resources for personal purposes.",
    category: "integrity",
    reverse: true
  },
  {
    id: 105,
    statement: "I do the right thing even when no one is watching.",
    category: "integrity"
  },

  // Adaptability & Flexibility (106-125)
  {
    id: 106,
    statement: "I adjust well to new situations.",
    category: "adaptability"
  },
  {
    id: 107,
    statement: "I resist change in my routine.",
    category: "adaptability",
    reverse: true
  },
  {
    id: 108,
    statement: "I learn new skills quickly.",
    category: "adaptability"
  },
  {
    id: 109,
    statement: "I prefer familiar tasks over new challenges.",
    category: "adaptability",
    reverse: true
  },
  {
    id: 110,
    statement: "I am open to different ways of doing things.",
    category: "adaptability"
  },
  {
    id: 111,
    statement: "I become frustrated when plans change.",
    category: "adaptability",
    reverse: true
  },
  {
    id: 112,
    statement: "I can switch between tasks efficiently.",
    category: "adaptability"
  },
  {
    id: 113,
    statement: "I need time to warm up to new people.",
    category: "adaptability",
    reverse: true
  },
  {
    id: 114,
    statement: "I thrive in unpredictable environments.",
    category: "adaptability"
  },
  {
    id: 115,
    statement: "I stick to methods I know well.",
    category: "adaptability",
    reverse: true
  },
  {
    id: 116,
    statement: "I embrace new technology easily.",
    category: "adaptability"
  },
  {
    id: 117,
    statement: "I find unexpected changes disruptive.",
    category: "adaptability",
    reverse: true
  },
  {
    id: 118,
    statement: "I can work effectively in different settings.",
    category: "adaptability"
  },
  {
    id: 119,
    statement: "I need clear instructions to function well.",
    category: "adaptability",
    reverse: true
  },
  {
    id: 120,
    statement: "I enjoy learning new procedures.",
    category: "adaptability"
  },
  {
    id: 121,
    statement: "I prefer structured environments.",
    category: "adaptability",
    reverse: true
  },
  {
    id: 122,
    statement: "I can improvise when necessary.",
    category: "adaptability"
  },
  {
    id: 123,
    statement: "I become anxious in unfamiliar situations.",
    category: "adaptability",
    reverse: true
  },
  {
    id: 124,
    statement: "I adapt my communication style to different audiences.",
    category: "adaptability"
  },
  {
    id: 125,
    statement: "I have difficulty adjusting to new leadership.",
    category: "adaptability",
    reverse: true
  },

  // Attention to Detail & Organization (126-150)
  {
    id: 126,
    statement: "I catch small errors that others miss.",
    category: "attention_to_detail"
  },
  {
    id: 127,
    statement: "I often overlook important details.",
    category: "attention_to_detail",
    reverse: true
  },
  {
    id: 128,
    statement: "I keep detailed records of my work.",
    category: "attention_to_detail"
  },
  {
    id: 129,
    statement: "I am disorganized in my approach to tasks.",
    category: "attention_to_detail",
    reverse: true
  },
  {
    id: 130,
    statement: "I double-check my work for accuracy.",
    category: "attention_to_detail"
  },
  {
    id: 131,
    statement: "I rush through tasks to finish quickly.",
    category: "attention_to_detail",
    reverse: true
  },
  {
    id: 132,
    statement: "I maintain organized files and systems.",
    category: "attention_to_detail"
  },
  {
    id: 133,
    statement: "I frequently lose important documents.",
    category: "attention_to_detail",
    reverse: true
  },
  {
    id: 134,
    statement: "I follow procedures precisely.",
    category: "attention_to_detail"
  },
  {
    id: 135,
    statement: "I skip steps when I think they're unnecessary.",
    category: "attention_to_detail",
    reverse: true
  },
  {
    id: 136,
    statement: "I notice when something is out of place.",
    category: "attention_to_detail"
  },
  {
    id: 137,
    statement: "I forget important deadlines.",
    category: "attention_to_detail",
    reverse: true
  },
  {
    id: 138,
    statement: "I plan my work systematically.",
    category: "attention_to_detail"
  },
  {
    id: 139,
    statement: "I work in a cluttered environment.",
    category: "attention_to_detail",
    reverse: true
  },
  {
    id: 140,
    statement: "I proofread everything carefully.",
    category: "attention_to_detail"
  },
  {
    id: 141,
    statement: "I make careless mistakes regularly.",
    category: "attention_to_detail",
    reverse: true
  },
  {
    id: 142,
    statement: "I maintain high standards for quality.",
    category: "attention_to_detail"
  },
  {
    id: 143,
    statement: "I am satisfied with 'good enough' work.",
    category: "attention_to_detail",
    reverse: true
  },
  {
    id: 144,
    statement: "I keep track of multiple details simultaneously.",
    category: "attention_to_detail"
  },
  {
    id: 145,
    statement: "I have trouble remembering specific instructions.",
    category: "attention_to_detail",
    reverse: true
  },
  {
    id: 146,
    statement: "I ensure all requirements are met before submitting work.",
    category: "attention_to_detail"
  },
  {
    id: 147,
    statement: "I wing it rather than prepare thoroughly.",
    category: "attention_to_detail",
    reverse: true
  },
  {
    id: 148,
    statement: "I am meticulous in my work.",
    category: "attention_to_detail"
  },
  {
    id: 149,
    statement: "I prioritize speed over accuracy.",
    category: "attention_to_detail",
    reverse: true
  },
  {
    id: 150,
    statement: "I create checklists to stay organized.",
    category: "attention_to_detail"
  },

  // Physical Stamina & Fitness (151-170)
  {
    id: 151,
    statement: "I maintain a regular exercise routine.",
    category: "physical_fitness"
  },
  {
    id: 152,
    statement: "I tire easily during physical activity.",
    category: "physical_fitness",
    reverse: true
  },
  {
    id: 153,
    statement: "I can work long hours without fatigue.",
    category: "physical_fitness"
  },
  {
    id: 154,
    statement: "I avoid physically demanding tasks.",
    category: "physical_fitness",
    reverse: true
  },
  {
    id: 155,
    statement: "I am physically fit.",
    category: "physical_fitness"
  },
  {
    id: 156,
    statement: "I have difficulty with physical challenges.",
    category: "physical_fitness",
    reverse: true
  },
  {
    id: 157,
    statement: "I recover quickly from physical exertion.",
    category: "physical_fitness"
  },
  {
    id: 158,
    statement: "I prefer sedentary activities.",
    category: "physical_fitness",
    reverse: true
  },
  {
    id: 159,
    statement: "I enjoy challenging physical activities.",
    category: "physical_fitness"
  },
  {
    id: 160,
    statement: "I struggle with activities requiring endurance.",
    category: "physical_fitness",
    reverse: true
  },
  {
    id: 161,
    statement: "I can function well with limited sleep.",
    category: "physical_fitness"
  },
  {
    id: 162,
    statement: "I need at least 8 hours of sleep to function.",
    category: "physical_fitness",
    reverse: true
  },
  {
    id: 163,
    statement: "I maintain healthy eating habits.",
    category: "physical_fitness"
  },
  {
    id: 164,
    statement: "I often feel physically run down.",
    category: "physical_fitness",
    reverse: true
  },
  {
    id: 165,
    statement: "I can handle extreme weather conditions.",
    category: "physical_fitness"
  },
  {
    id: 166,
    statement: "I get sick frequently.",
    category: "physical_fitness",
    reverse: true
  },
  {
    id: 167,
    statement: "I have good hand-eye coordination.",
    category: "physical_fitness"
  },
  {
    id: 168,
    statement: "I am uncomfortable in physically demanding situations.",
    category: "physical_fitness",
    reverse: true
  },
  {
    id: 169,
    statement: "I can maintain focus despite physical discomfort.",
    category: "physical_fitness"
  },
  {
    id: 170,
    statement: "I complain when physically uncomfortable.",
    category: "physical_fitness",
    reverse: true
  },

  // Achievement & Ambition (171-190)
  {
    id: 171,
    statement: "I set ambitious goals for myself.",
    category: "achievement"
  },
  {
    id: 172,
    statement: "I am satisfied with mediocre performance.",
    category: "achievement",
    reverse: true
  },
  {
    id: 173,
    statement: "I strive to be the best at what I do.",
    category: "achievement"
  },
  {
    id: 174,
    statement: "I give up easily when things get difficult.",
    category: "achievement",
    reverse: true
  },
  {
    id: 175,
    statement: "I am motivated by challenges.",
    category: "achievement"
  },
  {
    id: 176,
    statement: "I avoid situations where I might fail.",
    category: "achievement",
    reverse: true
  },
  {
    id: 177,
    statement: "I work hard to achieve my objectives.",
    category: "achievement"
  },
  {
    id: 178,
    statement: "I do only what is required of me.",
    category: "achievement",
    reverse: true
  },
  {
    id: 179,
    statement: "I seek opportunities for advancement.",
    category: "achievement"
  },
  {
    id: 180,
    statement: "I am content with my current level of achievement.",
    category: "achievement",
    reverse: true
  },
  {
    id: 181,
    statement: "I persist until I accomplish my goals.",
    category: "achievement"
  },
  {
    id: 182,
    statement: "I lack the drive to excel.",
    category: "achievement",
    reverse: true
  },
  {
    id: 183,
    statement: "I push myself beyond my comfort zone.",
    category: "achievement"
  },
  {
    id: 184,
    statement: "I settle for adequate results.",
    category: "achievement",
    reverse: true
  },
  {
    id: 185,
    statement: "I am competitive in my pursuits.",
    category: "achievement"
  },
  {
    id: 186,
    statement: "I lack ambition.",
    category: "achievement",
    reverse: true
  },
  {
    id: 187,
    statement: "I constantly seek to improve myself.",
    category: "achievement"
  },
  {
    id: 188,
    statement: "I procrastinate on important tasks.",
    category: "achievement",
    reverse: true
  },
  {
    id: 189,
    statement: "I am driven to succeed.",
    category: "achievement"
  },
  {
    id: 190,
    statement: "I need external motivation to work hard.",
    category: "achievement",
    reverse: true
  },

  // Decisiveness & Judgment (191-220)
  {
    id: 191,
    statement: "I make decisions quickly when needed.",
    category: "decisiveness"
  },
  {
    id: 192,
    statement: "I second-guess my decisions frequently.",
    category: "decisiveness",
    reverse: true
  },
  {
    id: 193,
    statement: "I trust my judgment in difficult situations.",
    category: "decisiveness"
  },
  {
    id: 194,
    statement: "I have trouble making up my mind.",
    category: "decisiveness",
    reverse: true
  },
  {
    id: 195,
    statement: "I can evaluate information rapidly.",
    category: "decisiveness"
  },
  {
    id: 196,
    statement: "I need others' input before deciding.",
    category: "decisiveness",
    reverse: true
  },
  {
    id: 197,
    statement: "I am confident in my decisions.",
    category: "decisiveness"
  },
  {
    id: 198,
    statement: "I overthink simple choices.",
    category: "decisiveness",
    reverse: true
  },
  {
    id: 199,
    statement: "I take decisive action when necessary.",
    category: "decisiveness"
  },
  {
    id: 200,
    statement: "I avoid making important decisions.",
    category: "decisiveness",
    reverse: true
  },
  {
    id: 201,
    statement: "I can prioritize effectively.",
    category: "decisiveness"
  },
  {
    id: 202,
    statement: "I struggle to choose between options.",
    category: "decisiveness",
    reverse: true
  },
  {
    id: 203,
    statement: "I make sound judgments under pressure.",
    category: "decisiveness"
  },
  {
    id: 204,
    statement: "I regret my decisions often.",
    category: "decisiveness",
    reverse: true
  },
  {
    id: 205,
    statement: "I can assess risks accurately.",
    category: "decisiveness"
  },
  {
    id: 206,
    statement: "I am indecisive in critical moments.",
    category: "decisiveness",
    reverse: true
  },
  {
    id: 207,
    statement: "I consider consequences before acting.",
    category: "decisiveness"
  },
  {
    id: 208,
    statement: "I make impulsive decisions I later regret.",
    category: "decisiveness",
    reverse: true
  },
  {
    id: 209,
    statement: "I can distinguish important from trivial matters.",
    category: "decisiveness"
  },
  {
    id: 210,
    statement: "I get stuck analyzing options endlessly.",
    category: "decisiveness",
    reverse: true
  },
  {
    id: 211,
    statement: "I stand by my decisions once made.",
    category: "decisiveness"
  },
  {
    id: 212,
    statement: "I change my mind frequently.",
    category: "decisiveness",
    reverse: true
  },
  {
    id: 213,
    statement: "I balance careful thought with timely action.",
    category: "decisiveness"
  },
  {
    id: 214,
    statement: "I delay decisions hoping problems will resolve themselves.",
    category: "decisiveness",
    reverse: true
  },
  {
    id: 215,
    statement: "I weigh pros and cons efficiently.",
    category: "decisiveness"
  },
  {
    id: 216,
    statement: "I feel paralyzed when faced with important choices.",
    category: "decisiveness",
    reverse: true
  },
  {
    id: 217,
    statement: "I can commit to a course of action confidently.",
    category: "decisiveness"
  },
  {
    id: 218,
    statement: "I seek consensus before making decisions.",
    category: "decisiveness",
    reverse: true
  },
  {
    id: 219,
    statement: "I trust my instincts when time is limited.",
    category: "decisiveness"
  },
  {
    id: 220,
    statement: "I need extensive information before deciding anything.",
    category: "decisiveness",
    reverse: true
  }
];

// Response options for Self-Description Inventory
export const SELF_DESCRIPTION_RESPONSES = [
  { value: 0, label: "Not Like Me" },
  { value: 1, label: "Like Me" }
];

// Configuration
export const SELF_DESCRIPTION_CONFIG = {
  sectionName: "Self-Description Inventory",
  totalQuestions: 220,
  timeLimit: null, // No time limit for personality assessment
  instructions: "Read each statement and decide whether it describes you. Select 'Like Me' if the statement is generally true about you, or 'Not Like Me' if it is generally not true about you. Be honest - there are no right or wrong answers. Your responses help assess your fit for military service.",
  categories: {
    leadership: "Leadership & Initiative",
    stress_tolerance: "Stress Tolerance & Composure",
    teamwork: "Teamwork & Cooperation",
    integrity: "Integrity & Ethics",
    adaptability: "Adaptability & Flexibility",
    attention_to_detail: "Attention to Detail & Organization",
    physical_fitness: "Physical Stamina & Fitness",
    achievement: "Achievement & Ambition",
    decisiveness: "Decisiveness & Judgment"
  }
};

export default selfDescriptionData