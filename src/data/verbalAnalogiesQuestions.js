// // Word Knowledge Questions for AFOQT
// // Format: Word in context or standalone, find the closest meaning

// export const wordKnowledgeData = [
//   {
//     id: 1,
//     text: "METICULOUS most nearly means:",
//     options: [
//       "Careful and precise",
//       "Quick and efficient",
//       "Lazy and careless",
//       "Angry and hostile"
//     ],
//     correct: 0,
//     explanation: "Meticulous means showing great attention to detail; very careful and precise."
//   },
//   {
//     id: 2,
//     text: "CANDID most nearly means:",
//     options: [
//       "Dishonest",
//       "Frank and honest",
//       "Confused",
//       "Secretive"
//     ],
//     correct: 1,
//     explanation: "Candid means truthful and straightforward; frank and honest in expression."
//   },
//   {
//     id: 3,
//     text: "OBSOLETE most nearly means:",
//     options: [
//       "Modern",
//       "Expensive",
//       "No longer in use",
//       "Difficult to understand"
//     ],
//     correct: 2,
//     explanation: "Obsolete means out of date; no longer produced or used."
//   },
//   {
//     id: 4,
//     text: "PROFICIENT most nearly means:",
//     options: [
//       "Beginner",
//       "Skilled and competent",
//       "Careless",
//       "Uncertain"
//     ],
//     correct: 1,
//     explanation: "Proficient means competent or skilled in doing or using something."
//   },
//   {
//     id: 5,
//     text: "CONCISE most nearly means:",
//     options: [
//       "Lengthy and detailed",
//       "Brief and to the point",
//       "Confusing",
//       "Repetitive"
//     ],
//     correct: 1,
//     explanation: "Concise means giving a lot of information clearly and in few words; brief but comprehensive."
//   }
//   // Venice: Generate 20 more similar questions
//   // Mix difficulty levels: basic, intermediate, advanced vocabulary
//   // Include words commonly used in military/aviation contexts
// ];

// export const WORD_KNOWLEDGE_CONFIG = {
//   timeLimit: 5 * 60, // 5 minutes
//   sectionName: "Word Knowledge",
//   totalQuestions: 25
// };

// Word Knowledge Questions for AFOQT
// Format: Word in context or standalone, find the closest meaning

export const verbalAnalogiesData = [
  {
    id: 1,
    text: "ALTRUISTIC is to UNSELFISH as SAFETY is to",
    options: ["HEIGHT", "OBJECTIVE", "QUAINT", "SECURITY", "BELT"],
    correct: 3,
    explanation: "ALTRUISTIC and UNSELFISH are synonyms. Likewise, SAFETY and SECURITY share similar meanings."
  },
  {
    id: 2,
    text: "HAPPY is to SAD as RIGID is to",
    options: ["STIFF", "FLEXIBLE", "CONSERVATIVE", "TIGHT", "FAULTY"],
    correct: 1,
    explanation: "HAPPY and SAD are opposites; RIGID and FLEXIBLE are opposites."
  },
  {
    id: 3,
    text: "HAMMER is to NAIL as SCISSORS is to",
    options: ["THREAD", "PAPER", "WOOD", "STRING", "ROCK"],
    correct: 1,
    explanation: "A hammer drives a nail; scissors cut paper — both describe tool-to-function relationships."
  },
  {
    id: 4,
    text: "ARGON is to GAS as MAPLE is to",
    options: ["TREE", "FOREST", "PLANT", "WOOD", "LEAF"],
    correct: 0,
    explanation: "ARGON is a type of GAS; MAPLE is a type of TREE."
  },
  {
    id: 5,
    text: "SINGER is to CHOIR as FOREARM is to",
    options: ["SKELETON", "MUSCLE", "HAND", "ARM", "WRIST"],
    correct: 0,
    explanation: "A SINGER is part of a CHOIR; a FOREARM is part of a SKELETON."
  },
  {
    id: 6,
    text: "DOLLAR is to QUARTER as MONTH is to",
    options: ["WEEK", "DAY", "YEAR", "SEASON", "HOUR"],
    correct: 0,
    explanation: "A QUARTER is part of a DOLLAR; a WEEK is part of a MONTH."
  },
  {
    id: 7,
    text: "BENEVOLENT is to KIND as MALEVOLENT is to",
    options: ["CRUEL", "HAPPY", "GENEROUS", "POLITE", "CALM"],
    correct: 0,
    explanation: "BENEVOLENT and KIND are similar; MALEVOLENT and CRUEL are similar in meaning."
  },
  {
    id: 8,
    text: "IGNITE is to FIRE as FREEZE is to",
    options: ["ICE", "HEAT", "COLD", "CHILL", "SNOW"],
    correct: 0,
    explanation: "IGNITE causes FIRE; FREEZE causes ICE — both show a cause-and-effect relationship."
  },
  {
    id: 9,
    text: "TEACHER is to SCHOOL as PILOT is to",
    options: ["PLANE", "RUNWAY", "AIRLINE", "AIRPORT", "SKY"],
    correct:0,
    explanation: "A TEACHER works in a SCHOOL; a PILOT works in a PLANE."
  },
  {
    id: 10,
    text: "PRIDE is to HUMBLE as ARROGANT is to",
    options: ["MODEST", "PROUD", "SHAMEFUL", "EGOISTIC", "RUDE"],
    correct: 0,
    explanation: "PRIDE and HUMBLE are opposites; ARROGANT and MODEST are opposites."
  },
  {
    id: 11,
    text: "RESTRAIN is to RELEASE as CAPTURE is to",
    options: ["SEIZE", "ESCAPE", "TRAP", "ARREST", "LOCK"],
    correct: 1,
    explanation: "RESTRAIN and RELEASE are opposites; CAPTURE and ESCAPE are opposites."
  },
  {
    id: 12,
    text: "ORDERLY is to CHAOTIC as PEACEFUL is to",
    options: ["CALM", "VIOLENT", "MELLOW", "QUIET", "GENTLE"],
    correct: 1,
    explanation: "ORDERLY and CHAOTIC are opposites; PEACEFUL and VIOLENT are also opposites."
  },
  {
    id: 13,
    text: "DOCTOR is to STETHOSCOPE as WRITER is to",
    options: ["BOOK", "PEN", "WORD", "NOTE", "PAPER"],
    correct: 1,
    explanation: "A DOCTOR uses a STETHOSCOPE; a WRITER uses a PEN — both are tool-to-user relationships."
  },
  {
    id: 14,
    text: "PRUDENT is to CAREFUL as RECKLESS is to",
    options: ["CAUTIOUS", "DANGEROUS", "FOOLISH", "SLOW", "THOUGHTFUL"],
    correct: 1,
    explanation: "PRUDENT and CAREFUL are synonyms; RECKLESS and FOOLISH are synonyms."
  },
  {
    id: 15,
    text: "EYE is to SEE as EAR is to",
    options: ["HEAR", "TASTE", "SOUND", "BALANCE", "LOOK"],
    correct: 0,
    explanation: "The EYE is used to SEE; the EAR is used to HEAR."
  },
  {
    id: 16,
    text: "WOLF is to PACK as BEE is to",
    options: ["HIVE", "FLOWER", "SWARM", "NEST", "BEEKEEPER"],
    correct: 0,
    explanation: "A WOLF belongs to a PACK; a BEE belongs to a HIVE."
  },
  {
    id: 17,
    text: "FRAUD is to HONESTY as DECEIT is to",
    options: ["LIE", "TRUTH", "CUNNING", "EVIL", "CRIME"],
    correct: 1,
    explanation: "FRAUD and HONESTY are opposites; DECEIT and TRUTH are opposites."
  },
  {
    id: 18,
    text: "BIRD is to WING as FISH is to",
    options: ["TAIL", "SCALE", "FIN", "WATER", "OCEAN"],
    correct: 2,
    explanation: "A BIRD uses a WING to fly; a FISH uses a FIN to swim — both show part-to-function relationships."
  },
  {
    id: 19,
    text: "BAROMETER is to PRESSURE as CALIPERS is to",
    options: ["CUTTING", "HEIGHT", "CONSTANCY", "THICKNESS", "PLIERS"],
    correct: 3,
    explanation: "A BAROMETER measures PRESSURE; CALIPERS measure THICKNESS."
  },
  {
    id: 20,
    text: "TOOL is to DRILL as POEM is to",
    options: ["SONG", "MACHINE", "SONNET", "NOVEL", "RHYME"],
    correct: 2,
    explanation: "A DRILL is a type of TOOL; a SONNET is a type of POEM."
  },
  {
    id: 21,
    text: "CANDLE is to LIGHT as STOVE is to",
    options: ["COOKING", "FIRE", "WAX", "FLAME", "ENERGY"],
    correct: 0,
    explanation: "A CANDLE provides LIGHT; a STOVE provides COOKING — both express function."
  },
  {
    id: 22,
    text: "WHEEL is to CAR as PAGE is to",
    options: ["WORD", "CHAPTER", "LETTER", "BOOK", "LIBRARY"],
    correct: 3,
    explanation: "A WHEEL is part of a CAR; a PAGE is part of a BOOK."
  },
  {
    id: 23,
    text: "SUN is to SOLAR as EARTH is to",
    options: ["PLANETARY", "GALACTIC", "COSMIC", "LUNAR", "STELLAR"],
    correct: 0,
    explanation: "SUN relates to SOLAR; EARTH relates to PLANETARY — both show type relationship."
  },
  {
    id: 24,
    text: "WRITER is to NOVEL as COMPOSER is to",
    options: ["MUSIC", "SYMPHONY", "SONG", "BAND", "INSTRUMENT"],
    correct: 1,
    explanation: "A WRITER creates a NOVEL; a COMPOSER creates a SYMPHONY."
  },
  {
    id: 25,
    text: "CHAIR is to FURNITURE as ROSE is to",
    options: ["FLOWER", "PETAL", "STEM", "GARDEN", "PLANT"],
    correct: 0,
    explanation: "A CHAIR is a type of FURNITURE; a ROSE is a type of FLOWER."
  },
  {
    id: 26,
    text: "PEN is to WRITE as SHOVEL is to",
    options: ["DIG", "LIFT", "BUILD", "MOVE", "CARRY"],
    correct: 1,
    explanation: "A PEN is used to WRITE; a SHOVEL is used to DIG."
  },
  {
    id: 27,
    text: "NURSE is to PATIENT as TEACHER is to",
    options: ["STUDENT", "SCHOOL", "LESSON", "CLASS", "PRINCIPAL"],
    correct: 1,
    explanation: "A NURSE cares for a PATIENT; a TEACHER instructs a STUDENT."
  },
  {
    id: 28,
    text: "OBEY is to DISOBEY as WIN is to",
    options: ["VICTORY", "LOSE", "CHAMPION", "SUCCESS", "SCORE"],
    correct: 1,
    explanation: "OBEY and DISOBEY are opposites; WIN and LOSE are opposites."
  },
  {
    id: 29,
    text: "PAINTER is to BRUSH as WRITER is to",
    options: ["BOOK", "PEN", "INK", "PAPER", "PENCIL"],
    correct: 1,
    explanation: "A PAINTER uses a BRUSH; a WRITER uses a PEN."
  },
  {
    id: 30,
    text: "DEMOCRACY is to GOVERNMENT as ROSE is to",
    options: ["PLANT", "FLOWER", "BUSH", "PETAL", "STEM"],
    correct: 1,
    explanation: "DEMOCRACY is a type of GOVERNMENT; ROSE is a type of FLOWER."
  },
  {
    id: 31,
    text: "SOCK is to FOOT as GLOVE is to",
    options: ["HAND", "ARM", "HEAD", "SHOE", "COAT"],
    correct: 1,
    explanation: "A SOCK covers a FOOT; a GLOVE covers a HAND."
  },
  {
    id: 32,
    text: "LION is to PRIDE as FISH is to",
    options: ["SCHOOL", "WATER", "SEA", "OCEAN", "FIN"],
    correct: 1,
    explanation: "A LION belongs to a PRIDE; a FISH belongs to a SCHOOL."
  },
  {
    id: 33,
    text: "JUDGE is to COURT as TEACHER is to",
    options: ["SCHOOL", "CLASS", "STUDENT", "LESSON", "BOARD"],
    correct: 1,
    explanation: "A JUDGE works in a COURT; a TEACHER works in a SCHOOL."
  },
  {
    id: 34,
    text: "ARTIST is to PAINTING as AUTHOR is to",
    options: ["NOVEL", "BOOK", "STORY", "WORD", "POEM"],
    correct: 1,
    explanation: "An ARTIST creates a PAINTING; an AUTHOR creates a NOVEL."
  },
  {
    id: 35,
    text: "SNOW is to WINTER as BLOSSOM is to",
    options: ["SPRING", "SUMMER", "AUTUMN", "FLOWER", "TREE"],
    correct: 1,
    explanation: "SNOW is associated with WINTER; BLOSSOM is associated with SPRING."
  },
  {
    id: 36,
    text: "BRAVE is to COWARDLY as GENEROUS is to",
    options: ["STINGY", "KIND", "SELFLESS", "POLITE", "CAREFUL"],
    correct: 1,
    explanation: "BRAVE and COWARDLY are opposites; GENEROUS and STINGY are opposites."
  },
  {
    id: 37,
    text: "FINGER is to HAND as TOE is to",
    options: ["FOOT", "LEG", "ARM", "BODY", "KNEE"],
    correct: 1,
    explanation: "A FINGER is part of a HAND; a TOE is part of a FOOT."
  },
  {
    id: 38,
    text: "BOOK is to READING as FORK is to",
    options: ["EATING", "COOKING", "CUTTING", "CLEANING", "STIRRING"],
    correct: 1,
    explanation: "A BOOK is used for READING; a FORK is used for EATING."
  },
  {
    id: 39,
    text: "AUTHOR is to WRITE as SINGER is to",
    options: ["SING", "SOUND", "VOICE", "MUSIC", "SONG"],
    correct: 1,
    explanation: "An AUTHOR writes; a SINGER sings — both perform their craft."
  },
  {
    id: 40,
    text: "ELECTRICIAN is to WIRE as PLUMBER is to",
    options: ["PIPE", "WATER", "SINK", "WRENCH", "HOUSE"],
    correct: 1,
    explanation: "An ELECTRICIAN works with WIRE; a PLUMBER works with PIPE."
  },
  {
    id: 41,
    text: "BEE is to HONEY as COW is to",
    options: ["MILK", "GRASS", "BARN", "FARMER", "FIELD"],
    correct: 1,
    explanation: "A BEE produces HONEY; a COW produces MILK."
  },
  {
    id: 42,
    text: "ENGINE is to TRAIN as MOTOR is to",
    options: ["CAR", "PLANE", "BOAT", "BICYCLE", "TRUCK"],
    correct: 1,
    explanation: "An ENGINE powers a TRAIN; a MOTOR powers a CAR."
  },
  {
    id: 43,
    text: "PUPIL is to EYE as PETAL is to",
    options: ["FLOWER", "STEM", "LEAF", "ROOT", "PLANT"],
    correct: 1,
    explanation: "A PUPIL is part of an EYE; a PETAL is part of a FLOWER."
  },
  {
    id: 44,
    text: "SWORD is to SOLDIER as BRUSH is to",
    options: ["PAINTER", "CARPENTER", "TEACHER", "DOCTOR", "SCULPTOR"],
    correct: 1,
    explanation: "A SWORD is a tool of a SOLDIER; a BRUSH is a tool of a PAINTER."
  },
  {
    id: 45,
    text: "LIGHT is to DARK as JOY is to",
    options: ["SADNESS", "HAPPINESS", "DELIGHT", "PLEASURE", "FUN"],
    correct: 1,
    explanation: "LIGHT and DARK are opposites; JOY and SADNESS are opposites."
  },
  {
    id: 46,
    text: "TAILOR is to CLOTHING as CHEF is to",
    options: ["FOOD", "RESTAURANT", "KITCHEN", "PLATE", "CUSTOMER"],
    correct: 1,
    explanation: "A TAILOR makes CLOTHING; a CHEF makes FOOD."
  },
  {
    id: 47,
    text: "SPOON is to STIR as KNIFE is to",
    options: ["CUT", "EAT", "SERVE", "MIX", "CLEAN"],
    correct: 1,
    explanation: "A SPOON is used to STIR; a KNIFE is used to CUT."
  },
  {
    id: 48,
    text: "AUTHOR is to BOOK as COMPOSER is to",
    options: ["SYMPHONY", "MUSIC", "INSTRUMENT", "MELODY", "SONG"],
    correct: 1,
    explanation: "An AUTHOR creates a BOOK; a COMPOSER creates a SYMPHONY."
  },
  {
    id: 49,
    text: "CALM is to AGITATED as QUIET is to",
    options: ["LOUD", "SOFT", "NOISY", "HUSHED", "STILL"],
    correct: 1,
    explanation: "CALM and AGITATED are opposites; QUIET and LOUD are opposites."
  },
  {
    id: 50,
    text: "DOOR is to HINGE as WINDOW is to",
    options: ["GLASS", "FRAME", "CURTAIN", "HOUSE", "LOCK"],
    correct: 1,
    explanation: "A DOOR moves on a HINGE; a WINDOW fits into a FRAME."
  },
  {
    id: 51,
    text: "BEE is to STING as DOG is to",
    options: ["BITE", "BARK", "TAIL", "RUN", "PET"],
    correct: 1,
    explanation: "A BEE can STING; a DOG can BITE — both describe an animal’s defensive action."
  },
  {
    id: 52,
    text: "MOTHER is to PARENT as BROTHER is to",
    options: ["SIBLING", "UNCLE", "COUSIN", "NEPHEW", "CHILD"],
    correct: 1,
    explanation: "A MOTHER is a type of PARENT; a BROTHER is a type of SIBLING."
  },
  {
    id: 53,
    text: "STUDENT is to LEARN as ATHLETE is to",
    options: ["TRAIN", "RUN", "PLAY", "COMPETE", "PRACTICE"],
    correct: 1,
    explanation: "A STUDENT’s purpose is to LEARN; an ATHLETE’s purpose is to TRAIN."
  },
  {
    id: 54,
    text: "PRIDE is to LION as FLOCK is to",
    options: ["SHEEP", "BIRD", "GOAT", "CHICKEN", "HERD"],
    correct: 1,
    explanation: "A group of LIONS is a PRIDE; a group of SHEEP is a FLOCK."
  },
  {
    id: 55,
    text: "SALT is to PEPPER as FORK is to",
    options: ["KNIFE", "SPOON", "PLATE", "CUP", "TABLE"],
    correct: 1,
    explanation: "SALT and PEPPER are often paired; FORK and KNIFE are often paired."
  },
  {
    id: 56,
    text: "AUTHOR is to WRITE as BUILDER is to",
    options: ["CONSTRUCT", "HAMMER", "NAIL", "WOOD", "PLAN"],
    correct: 1,
    explanation: "An AUTHOR writes; a BUILDER constructs — both perform their primary work."
  },
  {
    id: 57,
    text: "PAINTER is to CANVAS as SCULPTOR is to",
    options: ["CLAY", "CHISEL", "STONE", "BRONZE", "MOLD"],
    correct: 1,
    explanation: "A PAINTER works on a CANVAS; a SCULPTOR works with CLAY."
  },
  {
    id: 58,
    text: "FIRE is to HOT as ICE is to",
    options: ["COLD", "FREEZE", "WATER", "MELT", "SNOW"],
    correct: 1,
    explanation: "FIRE is HOT; ICE is COLD — both describe opposite temperature characteristics."
  },
  {
    id: 59,
    text: "CAT is to KITTEN as DOG is to",
    options: ["PUPPY", "WOLF", "PET", "CANINE", "LEASH"],
    correct: 1,
    explanation: "A KITTEN is a young CAT; a PUPPY is a young DOG."
  },
  {
    id: 60,
    text: "FISH is to WATER as BIRD is to",
    options: ["AIR", "SKY", "WING", "TREE", "CLOUD"],
    correct: 1,
    explanation: "A FISH lives in WATER; a BIRD lives in AIR."
  },
  {
    id: 61,
    text: "TEACHER is to EDUCATION as DOCTOR is to",
    options: ["HEALTH", "PATIENT", "MEDICINE", "HOSPITAL", "SCIENCE"],
    correct: 1,
    explanation: "A TEACHER promotes EDUCATION; a DOCTOR promotes HEALTH."
  },
  {
    id: 62,
    text: "BOW is to ARROW as GUN is to",
    options: ["BULLET", "TARGET", "SHOOT", "TRIGGER", "SCOPE"],
    correct: 1,
    explanation: "A BOW shoots an ARROW; a GUN shoots a BULLET."
  },
  {
    id: 63,
    text: "KING is to CROWN as JUDGE is to",
    options: ["GAVEL", "COURT", "LAW", "WIG", "TRIAL"],
    correct: 1,
    explanation: "A KING uses a CROWN as a symbol; a JUDGE uses a GAVEL as a symbol."
  },
  {
    id: 64,
    text: "STUDENT is to SCHOOL as SOLDIER is to",
    options: ["ARMY", "BATTLE", "UNIFORM", "GENERAL", "TROOP"],
    correct: 1,
    explanation: "A STUDENT belongs to a SCHOOL; a SOLDIER belongs to an ARMY."
  },
  {
    id: 65,
    text: "RIVER is to WATER as HIGHWAY is to",
    options: ["CARS", "TRAFFIC", "ROAD", "VEHICLES", "TRUCKS"],
    correct: 1,
    explanation: "A RIVER carries WATER; a HIGHWAY carries CARS."
  },
  {
    id: 66,
    text: "CIRCLE is to ROUND as SQUARE is to",
    options: ["ANGULAR", "FLAT", "RECTANGLE", "LINE", "CUBE"],
    correct: 1,
    explanation: "A CIRCLE is ROUND; a SQUARE is ANGULAR — describing geometric properties."
  },
  {
    id: 67,
    text: "SHEPHERD is to SHEEP as COWBOY is to",
    options: ["CATTLE", "HORSE", "RANCH", "DOG", "FIELD"],
    correct: 1,
    explanation: "A SHEPHERD tends SHEEP; a COWBOY tends CATTLE."
  },
  {
    id: 68,
    text: "POET is to VERSE as PAINTER is to",
    options: ["IMAGE", "CANVAS", "COLOR", "PAINT", "PICTURE"],
    correct: 1,
    explanation: "A POET creates VERSE; a PAINTER creates IMAGE — both are artistic creations."
  },
  {
    id: 69,
    text: "ANT is to COLONY as BEE is to",
    options: ["HIVE", "SWARM", "NEST", "FLOWER", "COMB"],
    correct: 1,
    explanation: "An ANT lives in a COLONY; a BEE lives in a HIVE."
  },
  {
    id: 70,
    text: "MASON is to BRICK as CARPENTER is to",
    options: ["WOOD", "NAIL", "HAMMER", "SAW", "BOARD"],
    correct: 1,
    explanation: "A MASON works with BRICK; a CARPENTER works with WOOD."
  },
  {
    id: 71,
    text: "THORN is to ROSE as STINGER is to",
    options: ["BEE", "INSECT", "BUG", "FLOWER", "HIVE"],
    correct: 1,
    explanation: "A THORN is part of a ROSE; a STINGER is part of a BEE."
  },
  {
    id: 72,
    text: "PILOT is to PLANE as CAPTAIN is to",
    options: ["SHIP", "BOAT", "CREW", "SAILOR", "OCEAN"],
    correct: 1,
    explanation: "A PILOT operates a PLANE; a CAPTAIN operates a SHIP."
  },
  {
    id: 73,
    text: "RAIN is to STORM as SNOW is to",
    options: ["BLIZZARD", "CLOUD", "HAIL", "COLD", "ICE"],
    correct: 1,
    explanation: "RAIN forms a STORM; SNOW forms a BLIZZARD — both are intensified weather forms."
  },
  {
    id: 74,
    text: "FEATHER is to BIRD as SCALE is to",
    options: ["FISH", "REPTILE", "LIZARD", "SNAKE", "FIN"],
    correct: 1,
    explanation: "A FEATHER covers a BIRD; a SCALE covers a FISH."
  },
  {
    id: 75,
    text: "LEAF is to TREE as PETAL is to",
    options: ["FLOWER", "STEM", "ROOT", "PLANT", "BRANCH"],
    correct: 1,
    explanation: "A LEAF is part of a TREE; a PETAL is part of a FLOWER."
  },
  {
    id: 76,
    text: "TEACHER is to SCHOOL as DOCTOR is to",
    options: ["PATIENT", "HOSPITAL", "MEDICINE", "NURSE", "SURGERY"],
    correct: 1,
    explanation: "A TEACHER works in a SCHOOL; a DOCTOR works in a HOSPITAL."
  },
  {
    id: 77,
    text: "SILENCE is to NOISE as STILLNESS is to",
    options: ["MOTION", "CALM", "PEACE", "REST", "SLEEP"],
    correct: 1,
    explanation: "SILENCE is the opposite of NOISE; STILLNESS is the opposite of MOTION."
  },
  {
    id: 78,
    text: "ENGINE is to CAR as HEART is to",
    options: ["BODY", "LUNG", "BRAIN", "MIND", "BLOOD"],
    correct: 1,
    explanation: "An ENGINE powers a CAR; the HEART powers the BODY."
  },
  {
    id: 79,
    text: "PUPPY is to DOG as CALF is to",
    options: ["COW", "HORSE", "BULL", "SHEEP", "GOAT"],
    correct: 1,
    explanation: "A PUPPY grows into a DOG; a CALF grows into a COW."
  },
  {
    id: 80,
    text: "GENEROUS is to STINGY as BRAVE is to",
    options: ["COURAGEOUS", "FEARFUL", "BOLD", "STRONG", "HONEST"],
    correct: 1,
    explanation: "GENEROUS and STINGY are opposites; BRAVE and FEARFUL are opposites."
  },
  {
    id: 81,
    text: "FIRE is to HEAT as ICE is to",
    options: ["COLD", "FREEZE", "SNOW", "WATER", "FROST"],
    correct: 1,
    explanation: "FIRE produces HEAT; ICE produces COLD."
  },
  {
    id: 82,
    text: "AUTHOR is to BOOK as COMPOSER is to",
    options: ["SYMPHONY", "INSTRUMENT", "NOTE", "SHEET", "BAND"],
    correct: 1,
    explanation: "An AUTHOR creates a BOOK; a COMPOSER creates a SYMPHONY."
  },
  {
    id: 83,
    text: "THORN is to ROSE as CLAW is to",
    options: ["CAT", "BIRD", "DOG", "WOLF", "BEAR"],
    correct: 1,
    explanation: "A THORN is part of a ROSE; a CLAW is part of a CAT."
  },
  {
    id: 84,
    text: "CARPENTER is to WOOD as MASON is to",
    options: ["STONE", "BRICK", "CEMENT", "MORTAR", "WALL"],
    correct: 1,
    explanation: "A CARPENTER works with WOOD; a MASON works with STONE."
  },
  {
    id: 85,
    text: "DOUBT is to CERTAINTY as FEAR is to",
    options: ["COURAGE", "DREAD", "ANXIETY", "PANIC", "ALARM"],
    correct: 1,
    explanation: "DOUBT and CERTAINTY are opposites; FEAR and COURAGE are opposites."
  },
  {
    id: 86,
    text: "CHAPTER is to BOOK as SCENE is to",
    options: ["PLAY", "MOVIE", "SCRIPT", "ACTOR", "NOVEL"],
    correct: 1,
    explanation: "A CHAPTER is part of a BOOK; a SCENE is part of a PLAY."
  },
  {
    id: 87,
    text: "SUN is to DAY as MOON is to",
    options: ["NIGHT", "STAR", "PLANET", "EARTH", "DARKNESS"],
    correct: 1,
    explanation: "The SUN appears during the DAY; the MOON appears at NIGHT."
  },
  {
    id: 88,
    text: "ROOT is to TREE as FOUNDATION is to",
    options: ["BUILDING", "HOUSE", "BRICK", "STRUCTURE", "FLOOR"],
    correct: 1,
    explanation: "A ROOT supports a TREE; a FOUNDATION supports a BUILDING."
  },
  {
    id: 89,
    text: "WRITER is to PEN as PAINTER is to",
    options: ["BRUSH", "COLOR", "CANVAS", "ART", "INK"],
    correct: 1,
    explanation: "A WRITER uses a PEN; a PAINTER uses a BRUSH."
  },
  {
    id: 90,
    text: "KING is to THRONE as PILOT is to",
    options: ["COCKPIT", "AIRPLANE", "SEAT", "FLIGHT", "CREW"],
    correct: 1,
    explanation: "A KING sits on a THRONE; a PILOT sits in a COCKPIT."
  },
  {
    id: 91,
    text: "CAT is to FELINE as DOG is to",
    options: ["CANINE", "MAMMAL", "PET", "PUPPY", "WOLF"],
    correct: 1,
    explanation: "A CAT belongs to the FELINE family; a DOG belongs to the CANINE family."
  },
  {
    id: 92,
    text: "HEAT is to FIRE as LIGHT is to",
    options: ["SUN", "BULB", "ENERGY", "LAMP", "CANDLE"],
    correct: 1,
    explanation: "HEAT comes from FIRE; LIGHT comes from the SUN."
  },
  {
    id: 93,
    text: "CIRCLE is to ROUND as SQUARE is to",
    options: ["ANGULAR", "POINTED", "RECTANGLE", "CUBE", "BOX"],
    correct: 1,
    explanation: "A CIRCLE has a ROUND shape; a SQUARE has an ANGULAR shape."
  },
  {
    id: 94,
    text: "LIBRARY is to BOOKS as GALLERY is to",
    options: ["PAINTINGS", "PHOTOS", "ART", "PICTURES", "SCULPTURES"],
    correct: 1,
    explanation: "A LIBRARY holds BOOKS; a GALLERY holds PAINTINGS."
  },
  {
    id: 95,
    text: "PRIDE is to LION as PACK is to",
    options: ["WOLF", "DOG", "FOX", "HYENA", "TIGER"],
    correct: 1,
    explanation: "A group of LIONS is called a PRIDE; a group of WOLVES is called a PACK."
  },
  {
    id: 96,
    text: "PILOT is to AIRPLANE as CAPTAIN is to",
    options: ["SHIP", "CREW", "OCEAN", "BOAT", "SAIL"],
    correct: 1,
    explanation: "A PILOT operates an AIRPLANE; a CAPTAIN operates a SHIP."
  },
  {
    id: 97,
    text: "EYE is to SEE as EAR is to",
    options: ["HEAR", "LISTEN", "NOISE", "SOUND", "VOICE"],
    correct: 1,
    explanation: "The EYE is used to SEE; the EAR is used to HEAR."
  },
  {
    id: 98,
    text: "SWORD is to FIGHTER as PEN is to",
    options: ["WRITER", "INK", "PAPER", "BOOK", "LETTER"],
    correct: 1,
    explanation: "A SWORD is a FIGHTER’s tool; a PEN is a WRITER’s tool."
  },
  {
    id: 99,
    text: "CLOUD is to SKY as WAVE is to",
    options: ["OCEAN", "RIVER", "SHORE", "SEA", "TIDE"],
    correct: 1,
    explanation: "A CLOUD is found in the SKY; a WAVE is found in the OCEAN."
  },
  {
    id: 100,
    text: "BEE is to HONEY as COW is to",
    options: ["MILK", "BARN", "FARM", "HERD", "GRASS"],
    correct: 1,
    explanation: "A BEE produces HONEY; a COW produces MILK."
  },
  {
    id: 101,
    text: "GLOVE is to HAND as SOCK is to",
    options: ["FOOT", "SHOE", "ANKLE", "LEG", "BOOT"],
    correct: 1,
    explanation: "A GLOVE covers a HAND; a SOCK covers a FOOT."
  },
  {
    id: 102,
    text: "DENTIST is to TEETH as OPTOMETRIST is to",
    options: ["EYES", "GLASSES", "VISION", "OPTICS", "LENSES"],
    correct: 1,
    explanation: "A DENTIST treats TEETH; an OPTOMETRIST treats EYES."
  },
  {
    id: 103,
    text: "STUDENT is to LEARN as TEACHER is to",
    options: ["INSTRUCT", "GUIDE", "HELP", "TRAIN", "SPEAK"],
    correct: 1,
    explanation: "A STUDENT learns; a TEACHER instructs."
  },
  {
    id: 104,
    text: "BRANCH is to TREE as ARM is to",
    options: ["BODY", "HAND", "LEG", "SHOULDER", "TRUNK"],
    correct: 1,
    explanation: "A BRANCH is part of a TREE; an ARM is part of the BODY."
  },
  {
    id: 105,
    text: "STORY is to NOVEL as SCENE is to",
    options: ["PLAY", "ACTOR", "FILM", "DRAMA", "SCREEN"],
    correct: 1,
    explanation: "A STORY forms part of a NOVEL; a SCENE forms part of a PLAY."
  },
  {
    id: 106,
    text: "RAIN is to CLOUD as SNOW is to",
    options: ["CLOUD", "COLD", "STORM", "BLIZZARD", "ICE"],
    correct: 1,
    explanation: "RAIN comes from CLOUDS; SNOW also comes from CLOUDS."
  },
  {
    id: 107,
    text: "RIVER is to STREAM as MOUNTAIN is to",
    options: ["HILL", "PEAK", "CLIFF", "RIDGE", "VALLEY"],
    correct: 1,
    explanation: "A STREAM is a smaller RIVER; a HILL is a smaller MOUNTAIN."
  },
  {
    id: 108,
    text: "SOLDIER is to ARMY as SAILOR is to",
    options: ["NAVY", "SHIP", "SEA", "BOAT", "CREW"],
    correct: 1,
    explanation: "A SOLDIER serves in the ARMY; a SAILOR serves in the NAVY."
  },
  {
    id: 109,
    text: "HELMET is to HEAD as SHIELD is to",
    options: ["BODY", "ARMOR", "CHEST", "ENEMY", "SWORD"],
    correct: 1,
    explanation: "A HELMET protects the HEAD; a SHIELD protects the BODY."
  },
  {
    id: 110,
    text: "DOOR is to HOUSE as WINDOW is to",
    options: ["WALL", "ROOM", "BUILDING", "VIEW", "GLASS"],
    correct: 1,
    explanation: "A DOOR is part of a HOUSE; a WINDOW is part of a BUILDING."
  },
  {
    id: 111,
    text: "MUSICIAN is to INSTRUMENT as ARTIST is to",
    options: ["BRUSH", "PAINT", "CANVAS", "MUSEUM", "GALLERY"],
    correct: 1,
    explanation: "A MUSICIAN uses an INSTRUMENT; an ARTIST uses a BRUSH."
  },
  {
    id: 112,
    text: "RAINBOW is to COLORS as CHORD is to",
    options: ["NOTES", "SONG", "GUITAR", "KEYS", "SCALE"],
    correct: 1,
    explanation: "A RAINBOW is made of COLORS; a CHORD is made of NOTES."
  },
  {
    id: 113,
    text: "SHEPHERD is to FLOCK as CAPTAIN is to",
    options: ["CREW", "SHIP", "NAVY", "OFFICER", "SAILOR"],
    correct: 1,
    explanation: "A SHEPHERD leads a FLOCK; a CAPTAIN leads a CREW."
  },
  {
    id: 114,
    text: "DESERT is to SAND as FOREST is to",
    options: ["TREES", "LEAVES", "PLANTS", "WOOD", "GRASS"],
    correct: 1,
    explanation: "A DESERT is filled with SAND; a FOREST is filled with TREES."
  },
  {
    id: 115,
    text: "MOTHER is to PARENT as UNCLE is to",
    options: ["RELATIVE", "BROTHER", "AUNT", "COUSIN", "NEPHEW"],
    correct: 1,
    explanation: "A MOTHER is a PARENT; an UNCLE is a RELATIVE."
  },
  {
    id: 116,
    text: "PENCIL is to WRITE as ERASER is to",
    options: ["REMOVE", "DRAW", "MARK", "COVER", "FIX"],
    correct: 1,
    explanation: "A PENCIL is used to WRITE; an ERASER is used to REMOVE writing."
  },
  {
    id: 117,
    text: "EAGLE is to FLY as FISH is to",
    options: ["SWIM", "DIVE", "FLOAT", "JUMP", "MOVE"],
    correct: 1,
    explanation: "An EAGLE moves by FLYING; a FISH moves by SWIMMING."
  },
  {
    id: 118,
    text: "SWORD is to WARRIOR as STETHOSCOPE is to",
    options: ["DOCTOR", "NURSE", "PATIENT", "HOSPITAL", "SURGEON"],
    correct: 1,
    explanation: "A SWORD is a WARRIOR’s tool; a STETHOSCOPE is a DOCTOR’s tool."
  },
  {
    id: 119,
    text: "HUNGER is to FOOD as THIRST is to",
    options: ["WATER", "DRINK", "BOTTLE", "CUP", "THIRSTY"],
    correct: 1,
    explanation: "HUNGER is satisfied by FOOD; THIRST is satisfied by WATER."
  },
  {
    id: 120,
    text: "KNIFE is to CUT as PEN is to",
    options: ["WRITE", "INK", "DRAW", "MARK", "POINT"],
    correct: 1,
    explanation: "A KNIFE is used to CUT; a PEN is used to WRITE."
  },
  {
    id: 121,
    text: "GASOLINE is to CAR as ELECTRICITY is to",
    options: ["LIGHT", "WIRE", "POWER", "BATTERY", "LAMP"],
    correct: 1,
    explanation: "GASOLINE powers a CAR; ELECTRICITY powers a LIGHT."
  },
  {
    id: 122,
    text: "PILLOW is to BED as CUSHION is to",
    options: ["SOFA", "CHAIR", "COUCH", "BENCH", "SEAT"],
    correct: 1,
    explanation: "A PILLOW belongs on a BED; a CUSHION belongs on a SOFA."
  },
  {
    id: 123,
    text: "DOOR is to OPEN as WINDOW is to",
    options: ["CLOSE", "LOOK", "VIEW", "SEE", "GLASS"],
    correct: 1,
    explanation: "A DOOR is used to OPEN passage; a WINDOW is used to LOOK through."
  },
  {
    id: 124,
    text: "ATHLETE is to SPORT as ACTOR is to",
    options: ["PLAY", "THEATER", "MOVIE", "ROLE", "FILM"],
    correct: 1,
    explanation: "An ATHLETE performs in a SPORT; an ACTOR performs in a PLAY."
  },
  {
    id: 125,
    text: "WING is to AIRPLANE as SAIL is to",
    options: ["BOAT", "SHIP", "SEA", "OCEAN", "WIND"],
    correct: 1,
    explanation: "A WING propels an AIRPLANE; a SAIL propels a BOAT."
  },
  {
    id: 126,
    text: "RING is to FINGER as NECKLACE is to",
    options: ["NECK", "CHEST", "HAND", "EAR", "HEAD"],
    correct: 1,
    explanation: "A RING is worn on a FINGER; a NECKLACE is worn on a NECK."
  },
  {
    id: 127,
    text: "TELESCOPE is to ASTRONOMER as MICROSCOPE is to",
    options: ["SCIENTIST", "BIOLOGIST", "DOCTOR", "RESEARCHER", "CHEMIST"],
    correct: 1,
    explanation: "An ASTRONOMER uses a TELESCOPE; a BIOLOGIST uses a MICROSCOPE."
  },
  {
    id: 128,
    text: "SALT is to PEPPER as KNIFE is to",
    options: ["FORK", "SPOON", "BLADE", "CUT", "TABLE"],
    correct: 1,
    explanation: "SALT and PEPPER are complementary; KNIFE and FORK are also complementary."
  },
  {
    id: 129,
    text: "HORSE is to STABLE as CAR is to",
    options: ["GARAGE", "ROAD", "HIGHWAY", "DRIVER", "VEHICLE"],
    correct: 1,
    explanation: "A HORSE is kept in a STABLE; a CAR is kept in a GARAGE."
  },
  {
    id: 130,
    text: "DOCTOR is to PATIENT as LAWYER is to",
    options: ["CLIENT", "CASE", "COURT", "JUDGE", "LAW"],
    correct: 1,
    explanation: "A DOCTOR helps a PATIENT; a LAWYER helps a CLIENT."
  },
  {
    id: 131,
    text: "BIRD is to FLY as DOLPHIN is to",
    options: ["SWIM", "JUMP", "PLAY", "WAVE", "SEA"],
    correct: 1,
    explanation: "A BIRD moves by FLYING; a DOLPHIN moves by SWIMMING."
  },
  {
    id: 132,
    text: "ENGINEER is to DESIGN as CHEF is to",
    options: ["COOK", "RECIPE", "BAKE", "FOOD", "MENU"],
    correct: 1,
    explanation: "An ENGINEER designs; a CHEF cooks — both create results from skill."
  },
  {
    id: 133,
    text: "SOLDIER is to BATTLE as FIREFIGHTER is to",
    options: ["FIRE", "STATION", "HOSE", "UNIFORM", "ENGINE"],
    correct: 1,
    explanation: "A SOLDIER fights in a BATTLE; a FIREFIGHTER fights a FIRE."
  },
  {
    id: 134,
    text: "BEE is to HIVE as ANT is to",
    options: ["COLONY", "HILL", "TUNNEL", "NEST", "GROUND"],
    correct: 1,
    explanation: "A BEE lives in a HIVE; an ANT lives in a COLONY."
  },
  {
    id: 135,
    text: "STUDENT is to SCHOOL as PATIENT is to",
    options: ["HOSPITAL", "DOCTOR", "BED", "NURSE", "MEDICINE"],
    correct: 1,
    explanation: "A STUDENT goes to SCHOOL; a PATIENT goes to a HOSPITAL."
  },
  {
    id: 136,
    text: "FIRE is to EXTINGUISHER as WOUND is to",
    options: ["BANDAGE", "MEDICINE", "PAIN", "BLOOD", "HEAL"],
    correct: 1,
    explanation: "A FIRE is fought with an EXTINGUISHER; a WOUND is treated with a BANDAGE."
  },
  {
    id: 137,
    text: "MILE is to DISTANCE as POUND is to",
    options: ["WEIGHT", "MASS", "SCALE", "MEASURE", "UNIT"],
    correct: 1,
    explanation: "A MILE measures DISTANCE; a POUND measures WEIGHT."
  },
  {
    id: 138,
    text: "HOUR is to TIME as INCH is to",
    options: ["LENGTH", "WIDTH", "HEIGHT", "DEPTH", "SIZE"],
    correct: 1,
    explanation: "An HOUR measures TIME; an INCH measures LENGTH."
  },
  {
    id: 139,
    text: "FINGER is to HAND as TOE is to",
    options: ["FOOT", "LEG", "SHOE", "ANKLE", "KNEE"],
    correct: 1,
    explanation: "A FINGER is part of a HAND; a TOE is part of a FOOT."
  },
  {
    id: 140,
    text: "NOSE is to SMELL as TONGUE is to",
    options: ["TASTE", "EAT", "SPEAK", "LICK", "CHEW"],
    correct: 1,
    explanation: "The NOSE detects SMELL; the TONGUE detects TASTE."
  },
  {
    id: 141,
    text: "EYE is to VISION as EAR is to",
    options: ["HEARING", "SOUND", "LISTENING", "VOICE", "MUSIC"],
    correct: 1,
    explanation: "The EYE is used for VISION; the EAR is used for HEARING."
  },
  {
    id: 142,
    text: "KEY is to LOCK as PASSWORD is to",
    options: ["ACCOUNT", "LOGIN", "ACCESS", "ENTRY", "USER"],
    correct: 1,
    explanation: "A KEY unlocks a LOCK; a PASSWORD grants ACCESS."
  },
  {
    id: 143,
    text: "ROOF is to HOUSE as CAP is to",
    options: ["BOTTLE", "HEAD", "JAR", "PEN", "TOP"],
    correct: 1,
    explanation: "A ROOF covers a HOUSE; a CAP covers a BOTTLE."
  },
  {
    id: 144,
    text: "ENGINE is to TRAIN as HEART is to",
    options: ["BODY", "VEIN", "LUNG", "BLOOD", "CHEST"],
    correct: 1,
    explanation: "An ENGINE powers a TRAIN; the HEART powers the BODY."
  },
  {
    id: 145,
    text: "THORN is to ROSE as NEEDLE is to",
    options: ["PINE", "TREE", "THREAD", "PIN", "SEW"],
    correct: 1,
    explanation: "A THORN is part of a ROSE; a NEEDLE is part of a PINE."
  },
  {
    id: 146,
    text: "BRICK is to WALL as WORD is to",
    options: ["SENTENCE", "BOOK", "LETTER", "PAGE", "POEM"],
    correct: 1,
    explanation: "A BRICK makes up a WALL; a WORD makes up a SENTENCE."
  },
  {
    id: 147,
    text: "PETAL is to FLOWER as LEAF is to",
    options: ["TREE", "PLANT", "STEM", "ROOT", "BRANCH"],
    correct: 1,
    explanation: "A PETAL is part of a FLOWER; a LEAF is part of a TREE."
  },
  {
    id: 148,
    text: "ISLAND is to LAND as PENINSULA is to",
    options: ["WATER", "SEA", "COAST", "SHORE", "BAY"],
    correct: 1,
    explanation: "An ISLAND is surrounded by LAND; a PENINSULA extends into WATER."
  },
  {
    id: 149,
    text: "PAINTER is to BRUSH as WRITER is to",
    options: ["PEN", "BOOK", "NOTE", "PAGE", "STORY"],
    correct: 1,
    explanation: "A PAINTER uses a BRUSH; a WRITER uses a PEN."
  },
  {
    id: 150,
    text: "SOLDIER is to WAR as TEACHER is to",
    options: ["SCHOOL", "CLASS", "LESSON", "STUDENT", "INSTRUCTION"],
    correct: 1,
    explanation: "A SOLDIER fights in a WAR; a TEACHER works in a SCHOOL."
  },
  {
    id: 150,
    text: "TEACHER is to SCHOOL as DOCTOR is to",
    options: ["HOSPITAL", "CLINIC", "PATIENT", "MEDICINE", "DISEASE"],
    correct: 1,
    explanation: "A TEACHER works in a SCHOOL; a DOCTOR works in a HOSPITAL."
  },
  {
    id: 151,
    text: "FIRE is to HEAT as ICE is to",
    options: ["COLD", "SNOW", "FREEZE", "WATER", "CHILL"],
    correct: 1,
    explanation: "FIRE produces HEAT; ICE produces COLD."
  },
  {
    id: 152,
    text: "LOCK is to KEY as QUESTION is to",
    options: ["ANSWER", "PROBLEM", "SOLUTION", "QUERY", "MYSTERY"],
    correct: 1,
    explanation: "A KEY opens a LOCK; an ANSWER resolves a QUESTION."
  },
  {
    id: 153,
    text: "HUNGER is to EAT as FATIGUE is to",
    options: ["REST", "WORK", "PLAY", "MOVE", "RUN"],
    correct: 1,
    explanation: "One eats to satisfy HUNGER; one rests to relieve FATIGUE."
  },
  {
    id: 154,
    text: "CLOCK is to TIME as THERMOMETER is to",
    options: ["TEMPERATURE", "HEAT", "COLD", "MERCURY", "SCALE"],
    correct: 1,
    explanation: "A CLOCK measures TIME; a THERMOMETER measures TEMPERATURE."
  },
  {
    id: 155,
    text: "SEED is to TREE as EGG is to",
    options: ["BIRD", "HEN", "NEST", "YOLK", "FLIGHT"],
    correct: 1,
    explanation: "A SEED grows into a TREE; an EGG grows into a BIRD."
  },
  {
    id: 156,
    text: "SWORD is to WARRIOR as PEN is to",
    options: ["WRITER", "INK", "PAPER", "LETTER", "AUTHOR"],
    correct: 1,
    explanation: "A WARRIOR uses a SWORD; a WRITER uses a PEN."
  },
  {
    id: 157,
    text: "ROOT is to TREE as FOUNDATION is to",
    options: ["BUILDING", "FLOOR", "HOUSE", "STRUCTURE", "BASEMENT"],
    correct: 1,
    explanation: "ROOT supports a TREE; FOUNDATION supports a BUILDING."
  },
  {
    id: 158,
    text: "PAINTER is to BRUSH as WRITER is to",
    options: ["PEN", "BOOK", "PAGE", "WORD", "DESK"],
    correct: 1,
    explanation: "A PAINTER uses a BRUSH; a WRITER uses a PEN."
  },
  {
    id: 159,
    text: "FISH is to WATER as BIRD is to",
    options: ["AIR", "SKY", "TREE", "WING", "FLIGHT"],
    correct: 1,
    explanation: "A FISH lives in WATER; a BIRD lives in AIR."
  },
  {
    id: 160,
    text: "KEYBOARD is to COMPUTER as WHEEL is to",
    options: ["CAR", "ROAD", "BIKE", "RIM", "TIRE"],
    correct: 1,
    explanation: "A KEYBOARD is part of a COMPUTER; a WHEEL is part of a CAR."
  },
  {
    id: 161,
    text: "MOON is to NIGHT as SUN is to",
    options: ["DAY", "LIGHT", "SKY", "MORNING", "TIME"],
    correct: 1,
    explanation: "The MOON is seen at NIGHT; the SUN is seen during the DAY."
  },
  {
    id: 162,
    text: "DOOR is to ROOM as GATE is to",
    options: ["FENCE", "ENTRANCE", "YARD", "FIELD", "HOUSE"],
    correct: 1,
    explanation: "A DOOR provides entry to a ROOM; a GATE provides entry to a FENCE."
  },
  {
    id: 163,
    text: "BRIDGE is to RIVER as TUNNEL is to",
    options: ["MOUNTAIN", "ROAD", "PATH", "HILL", "TRACK"],
    correct: 1,
    explanation: "A BRIDGE crosses a RIVER; a TUNNEL passes through a MOUNTAIN."
  },
  {
    id: 164,
    text: "CANDLE is to WAX as FIREPLACE is to",
    options: ["BRICK", "WOOD", "FLAME", "HEAT", "STONE"],
    correct: 1,
    explanation: "A CANDLE is made of WAX; a FIREPLACE is made of BRICK."
  },
  {
    id: 165,
    text: "EYE is to SEE as EAR is to",
    options: ["HEAR", "LISTEN", "NOISE", "SOUND", "VOICE"],
    correct: 1,
    explanation: "An EYE is used to SEE; an EAR is used to HEAR."
  },
  {
    id: 166,
    text: "AUTHOR is to BOOK as COMPOSER is to",
    options: ["SONG", "SYMPHONY", "MUSIC", "PIANO", "NOTE"],
    correct: 1,
    explanation: "An AUTHOR writes a BOOK; a COMPOSER writes a SYMPHONY."
  },
  {
    id: 167,
    text: "CAT is to KITTEN as DOG is to",
    options: ["PUPPY", "WOLF", "PET", "TAIL", "BARK"],
    correct: 1,
    explanation: "A BABY CAT is a KITTEN; a BABY DOG is a PUPPY."
  },
  {
    id: 168,
    text: "PILOT is to AIRPLANE as CAPTAIN is to",
    options: ["SHIP", "CREW", "SEA", "COMPASS", "BOAT"],
    correct: 1,
    explanation: "A PILOT operates an AIRPLANE; a CAPTAIN operates a SHIP."
  },
  {
    id: 169,
    text: "THORN is to ROSE as STINGER is to",
    options: ["BEE", "WASP", "BUG", "INSECT", "HONEY"],
    correct: 1,
    explanation: "A THORN belongs to a ROSE; a STINGER belongs to a BEE."
  },
  {
    id: 170,
    text: "BRICK is to WALL as PAGE is to",
    options: ["BOOK", "PAPER", "WORD", "LETTER", "STORY"],
    correct: 1,
    explanation: "A BRICK forms a WALL; a PAGE forms a BOOK."
  },
  {
    id: 171,
    text: "RIVER is to WATER as ROAD is to",
    options: ["CARS", "VEHICLES", "TRAVEL", "HIGHWAY", "PATH"],
    correct: 1,
    explanation: "A RIVER carries WATER; a ROAD carries VEHICLES."
  },
  {
    id: 172,
    text: "FOOT is to SHOE as HAND is to",
    options: ["GLOVE", "FINGER", "RING", "WRIST", "PALM"],
    correct: 1,
    explanation: "A SHOE covers a FOOT; a GLOVE covers a HAND."
  },
  {
    id: 173,
    text: "NEST is to BIRD as DEN is to",
    options: ["BEAR", "FOX", "LION", "WOLF", "TIGER"],
    correct: 1,
    explanation: "A NEST is a BIRD’s home; a DEN is a BEAR’s home."
  },
  {
    id: 174,
    text: "BEAK is to BIRD as SNOUT is to",
    options: ["PIG", "DOG", "HORSE", "RAT", "CAT"],
    correct: 1,
    explanation: "A BEAK belongs to a BIRD; a SNOUT belongs to a PIG."
  },
  {
    id: 175,
    text: "CUP is to DRINK as PLATE is to",
    options: ["EAT", "FOOD", "DISH", "MEAL", "SERVE"],
    correct: 1,
    explanation: "A CUP is used to DRINK; a PLATE is used to EAT."
  },
  {
    id: 176,
    text: "THREAD is to NEEDLE as INK is to",
    options: ["PEN", "BOOK", "PAPER", "STAMP", "WRITER"],
    correct: 1,
    explanation: "THREAD goes through a NEEDLE; INK goes through a PEN."
  },
  {
    id: 177,
    text: "SHEPHERD is to FLOCK as TEACHER is to",
    options: ["STUDENTS", "CLASS", "LESSON", "SCHOOL", "GROUP"],
    correct: 1,
    explanation: "A SHEPHERD leads a FLOCK; a TEACHER leads STUDENTS."
  },
  {
    id: 178,
    text: "HEART is to BLOOD as LUNG is to",
    options: ["AIR", "BREATH", "OXYGEN", "CHEST", "GAS"],
    correct: 1,
    explanation: "The HEART pumps BLOOD; the LUNG processes AIR."
  },
  {
    id: 179,
    text: "CANDLE is to LIGHT as BATTERY is to",
    options: ["POWER", "CHARGE", "ENERGY", "CURRENT", "DEVICE"],
    correct: 1,
    explanation: "A CANDLE provides LIGHT; a BATTERY provides POWER."
  },
  {
    id: 180,
    text: "MAP is to LOCATION as CLOCK is to",
    options: ["TIME", "HOUR", "DAY", "MOMENT", "SECOND"],
    correct: 1,
    explanation: "A MAP shows LOCATION; a CLOCK shows TIME."
  },
  {
    id: 181,
    text: "SOLDIER is to ARMY as SAILOR is to",
    options: ["NAVY", "SEA", "BOAT", "WATER", "SHIP"],
    correct: 1,
    explanation: "A SOLDIER serves in an ARMY; a SAILOR serves in the NAVY."
  },
  {
    id: 182,
    text: "SPIDER is to WEB as BIRD is to",
    options: ["NEST", "TREE", "WING", "FEATHER", "CAGE"],
    correct: 1,
    explanation: "A SPIDER builds a WEB; a BIRD builds a NEST."
  },
  {
    id: 183,
    text: "LAMP is to LIGHT as RADIO is to",
    options: ["SOUND", "MUSIC", "VOICE", "TALK", "STATION"],
    correct: 1,
    explanation: "A LAMP produces LIGHT; a RADIO produces SOUND."
  },
  {
    id: 184,
    text: "BEE is to HONEY as COW is to",
    options: ["MILK", "GRASS", "BARN", "MEADOW", "FARM"],
    correct: 1,
    explanation: "A BEE makes HONEY; a COW provides MILK."
  },
  {
    id: 185,
    text: "FINGER is to HAND as TOE is to",
    options: ["FOOT", "LEG", "SHOE", "HEEL", "ANKLE"],
    correct: 1,
    explanation: "A FINGER is part of a HAND; a TOE is part of a FOOT."
  },
  {
    id: 186,
    text: "SUGAR is to SWEET as SALT is to",
    options: ["SALTY", "BITTER", "SPICY", "SOUR", "HOT"],
    correct: 1,
    explanation: "SUGAR tastes SWEET; SALT tastes SALTY."
  },
  {
    id: 187,
    text: "TREE is to FOREST as HOUSE is to",
    options: ["CITY", "STREET", "BLOCK", "NEIGHBORHOOD", "HOME"],
    correct: 1,
    explanation: "A TREE is part of a FOREST; a HOUSE is part of a CITY."
  },
  {
    id: 188,
    text: "LIGHT is to DARK as HOT is to",
    options: ["COLD", "WARM", "HEAT", "BOIL", "COOL"],
    correct: 1,
    explanation: "LIGHT and DARK are opposites; HOT and COLD are opposites."
  },
  {
    id: 189,
    text: "KING is to THRONE as JUDGE is to",
    options: ["BENCH", "COURT", "LAW", "GAVEL", "CASE"],
    correct: 1,
    explanation: "A KING sits on a THRONE; a JUDGE sits on a BENCH."
  },
  {
    id: 190,
    text: "ARTIST is to PAINTING as SCULPTOR is to",
    options: ["SCULPTURE", "STONE", "STATUE", "CLAY", "MOLD"],
    correct: 1,
    explanation: "An ARTIST makes a PAINTING; a SCULPTOR makes a SCULPTURE."
  },
  {
    id: 191,
    text: "DOG is to BARK as CAT is to",
    options: ["MEOW", "PURR", "SCRATCH", "HISS", "YOWL"],
    correct: 1,
    explanation: "A DOG BARKS; a CAT MEOWS — both are characteristic sounds."
  },
  {
    id: 192,
    text: "FLOOR is to ROOM as GROUND is to",
    options: ["EARTH", "FIELD", "SOIL", "LAND", "SURFACE"],
    correct: 1,
    explanation: "A FLOOR supports a ROOM; the GROUND supports the EARTH."
  },
  {
    id: 193,
    text: "RAIN is to UMBRELLA as SUN is to",
    options: ["SUNGLASSES", "HAT", "SHADE", "HEAT", "LIGHT"],
    correct: 1,
    explanation: "An UMBRELLA protects from RAIN; SUNGLASSES protect from SUN."
  },
  {
    id: 194,
    text: "PENCIL is to WRITE as ERASER is to",
    options: ["REMOVE", "CLEAN", "DELETE", "MARK", "CORRECT"],
    correct: 1,
    explanation: "A PENCIL is used to WRITE; an ERASER is used to REMOVE writing."
  },
  {
    id: 195,
    text: "SOLDIER is to BATTLE as STUDENT is to",
    options: ["CLASS", "STUDY", "BOOK", "EXAM", "LESSON"],
    correct: 1,
    explanation: "A SOLDIER fights a BATTLE; a STUDENT faces an EXAM."
  },
  {
    id: 196,
    text: "MOUTH is to TALK as HAND is to",
    options: ["TOUCH", "FEEL", "WRITE", "GRAB", "HOLD"],
    correct: 1,
    explanation: "A MOUTH is used to TALK; a HAND is used to TOUCH."
  },
  {
    id: 197,
    text: "DOCTOR is to MEDICINE as CHEF is to",
    options: ["FOOD", "KITCHEN", "COOKING", "RECIPE", "DINNER"],
    correct: 1,
    explanation: "A DOCTOR works with MEDICINE; a CHEF works with FOOD."
  },
  {
    id: 198,
    text: "CLOUD is to SKY as WAVE is to",
    options: ["OCEAN", "SEA", "WATER", "TIDE", "SURF"],
    correct: 1,
    explanation: "A CLOUD forms in the SKY; a WAVE forms in the OCEAN."
  },
  {
    id: 199,
    text: "ENGINE is to CAR as HEART is to",
    options: ["BODY", "BLOOD", "CHEST", "LIFE", "ORGAN"],
    correct: 1,
    explanation: "An ENGINE powers a CAR; a HEART powers the BODY."
  },
  {
    id: 200,
    text: "BRAIN is to THINK as STOMACH is to",
    options: ["DIGEST", "EAT", "FOOD", "HUNGER", "ABSORB"],
    correct: 1,
    explanation: "A BRAIN is used to THINK; a STOMACH is used to DIGEST."
  }
];

export const VERBAL_ANALOGIES_CONFIG = {
  timeLimit: 5 * 60, // 5 minutes
  sectionName: "Word Knowledge",
  totalQuestions: 25
};