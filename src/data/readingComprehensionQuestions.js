export const readingComprehensionData = [
  {
    id: 1,
    passage: "The concept of artificial intelligence has evolved dramatically since Alan Turing first proposed his famous test in 1950. Turing suggested that if a machine could engage in conversation indistinguishably from a human, it could be considered intelligent. However, modern AI researchers have moved beyond this simplistic criterion, recognizing that intelligence encompasses far more than conversational ability.\n\nToday's AI systems excel at specific tasks like image recognition or playing chess, yet they lack the general adaptability that characterizes human intelligence. This distinction has led researchers to differentiate between narrow AI, which performs specific tasks, and artificial general intelligence (AGI), which would possess human-like cognitive flexibility. Despite remarkable advances in narrow AI, AGI remains a distant goal, perhaps decades away from realization.",
    questions: [
      {
        id: 1,
        text: "The primary purpose of this passage is to:",
        options: [
          "Predict when AGI will be achieved",
          "Explain the evolution and current state of AI concepts",
          "Argue that the Turing test is outdated",
          "Compare human and machine intelligence"
        ],
        correct: 1,
        explanation: "The passage traces AI from Turing's test to modern distinctions between narrow AI and AGI."
      },
      {
        id: 2,
        text: "According to the passage, narrow AI differs from AGI in that narrow AI:",
        options: [
          "Was developed by Alan Turing",
          "Cannot play chess",
          "Performs specific tasks rather than showing general adaptability",
          "Is more expensive to develop"
        ],
        correct: 2,
        explanation: "The passage explicitly states narrow AI 'performs specific tasks' while AGI 'would possess human-like cognitive flexibility.'"
      }
    ]
  },
  {
    id: 2,
    passage: "The placebo effect represents one of medicine's most intriguing phenomena. When patients believe they are receiving treatment, they often experience real improvements in their condition, even when given inert substances like sugar pills. This effect is not merely psychological—brain imaging studies have shown that placebos can trigger the release of endorphins and other biochemical changes.\n\nThe placebo effect challenges researchers designing clinical trials. To prove a new drug's effectiveness, it must perform better than a placebo in controlled studies. However, the strength of the placebo response varies widely among individuals and conditions. Pain, depression, and anxiety show particularly strong placebo responses, while conditions like cancer or bacterial infections show minimal placebo effects. Understanding these variations helps researchers design more effective studies and may even lead to harnessing the placebo effect therapeutically.",
    questions: [
      {
        id: 3,
        text: "The passage suggests that the placebo effect:",
        options: [
          "Works equally well for all medical conditions",
          "Only affects psychological conditions",
          "Is entirely imaginary",
          "Involves measurable biochemical changes"
        ],
        correct: 3,
        explanation: "The passage states 'brain imaging studies have shown that placebos can trigger the release of endorphins and other biochemical changes.'"
      },
      {
        id: 4,
        text: "According to the passage, which condition would likely show the WEAKEST placebo response?",
        options: [
          "Bacterial infection",
          "Pain",
          "Depression",
          "Anxiety"
        ],
        correct: 0,
        explanation: "The passage states 'conditions like cancer or bacterial infections show minimal placebo effects.'"
      },
      {
        id: 5,
        text: "The placebo effect complicates clinical trials because:",
        options: [
          "Patients refuse to take sugar pills",
          "It cannot be measured scientifically",
          "New drugs must outperform placebo responses",
          "It is too expensive to administer placebos"
        ],
        correct: 2,
        explanation: "The passage states 'To prove a new drug's effectiveness, it must perform better than a placebo in controlled studies.'"
      }
    ]
  },
  {
    id: 3,
    passage: "Urban heat islands occur when cities experience significantly higher temperatures than surrounding rural areas. This phenomenon results from several factors: dark surfaces like asphalt and rooftops absorb more heat than natural landscapes; buildings and pavement replace vegetation that would normally cool through evapotranspiration; and concentrated human activity generates heat from vehicles, air conditioners, and industrial processes.\n\nThe consequences extend beyond mere discomfort. Higher temperatures increase energy demand for cooling, elevating electricity costs and greenhouse gas emissions. Heat islands exacerbate air pollution and pose health risks, particularly for vulnerable populations like the elderly and those with respiratory conditions. Cities are implementing mitigation strategies including green roofs, reflective pavement, and increased tree coverage. These interventions not only reduce temperatures but also provide co-benefits like improved air quality and enhanced urban aesthetics.",
    questions: [
      {
        id: 6,
        text: "Which of the following is NOT mentioned as a cause of urban heat islands?",
        options: [
          "Dark surfaces absorbing heat",
          "Loss of vegetation",
          "Heat from human activities",
          "Industrial pollution"
        ],
        correct: 3,
        explanation: "The passage mentions dark surfaces, loss of vegetation, and heat from human activities. While pollution is mentioned as a consequence, it is not listed as a cause of heat islands."
      },
      {
        id: 7,
        text: "The term 'evapotranspiration' in the passage refers to:",
        options: [
          "Cooling process involving vegetation",
          "Type of urban pavement",
          "Air pollution measurement",
          "Industrial heat generation"
        ],
        correct: 0,
        explanation: "The passage indicates vegetation 'would normally cool through evapotranspiration,' identifying it as a natural cooling process."
      }
    ]
  },
  {
    id: 4,
    passage: "Game theory, developed by mathematician John von Neumann and economist Oskar Morgenstern, analyzes strategic decision-making where one person's choice affects others' outcomes. The field has applications far beyond recreational games, influencing economics, political science, and evolutionary biology. Perhaps the most famous example is the prisoner's dilemma, which demonstrates why rational individuals might not cooperate even when cooperation benefits everyone.\n\nIn the prisoner's dilemma, two suspects are interrogated separately. Each can either cooperate with the other by remaining silent or defect by testifying against their partner. If both remain silent, they receive light sentences. If one testifies while the other stays silent, the defector goes free while the other receives a harsh sentence. If both testify, both receive moderate sentences. Paradoxically, rational self-interest leads both to defect, resulting in a worse outcome than if they had cooperated. This simple scenario illuminates complex real-world situations from arms races to environmental treaties.",
    questions: [
      {
        id: 8,
        text: "The passage indicates that game theory is applied in all of the following fields EXCEPT:",
        options: [
          "Political science",
          "Economics",
          "Evolutionary biology",
          "Medical research"
        ],
        correct: 3,
        explanation: "The passage lists economics, political science, and evolutionary biology as application fields. Medical research is not mentioned."
      },
      {
        id: 9,
        text: "In the prisoner's dilemma, the paradox is that:",
        options: [
          "Game theory cannot predict human behavior",
          "Rational self-interest produces suboptimal results",
          "Cooperation always leads to the best outcome",
          "Criminals never cooperate with each other"
        ],
        correct: 1,
        explanation: "The passage states 'rational self-interest leads both to defect, resulting in a worse outcome than if they had cooperated.'"
      },
      {
        id: 10,
        text: "According to the passage, if both prisoners remain silent, they will:",
        options: [
          "Receive harsh sentences",
          "Go free",
          "Receive moderate sentences",
          "Receive light sentences"
        ],
        correct: 3,
        explanation: "The passage explicitly states 'If both remain silent, they receive light sentences.'"
      }
    ]
  },
  {
    id: 5,
    passage: "The human microbiome—the trillions of bacteria, viruses, and fungi living in and on our bodies—plays a far more significant role in health than previously imagined. Once considered merely passengers or potential pathogens, these microorganisms are now recognized as essential partners in digestion, immune function, and even mental health. The gut microbiome, in particular, produces vitamins, breaks down complex carbohydrates, and trains the immune system to distinguish between harmful and beneficial organisms.\n\nRecent research has revealed surprising connections between the microbiome and conditions ranging from obesity to depression. The gut-brain axis, a bidirectional communication system between intestinal bacteria and the nervous system, may influence mood and behavior. This discovery has led scientists to investigate whether manipulating the microbiome through diet, probiotics, or even fecal transplants could treat various diseases. While many questions remain, it's clear that maintaining a healthy, diverse microbiome is crucial for overall well-being.",
    questions: [
      {
        id: 11,
        text: "The passage's main point is that the human microbiome:",
        options: [
          "Is more important to health than previously thought",
          "Only affects digestive processes",
          "Should be eliminated with antibiotics",
          "Consists primarily of harmful bacteria"
        ],
        correct: 0,
        explanation: "The opening sentence states the microbiome 'plays a far more significant role in health than previously imagined,' and the passage supports this throughout."
      },
      {
        id: 12,
        text: "The 'gut-brain axis' refers to:",
        options: [
          "The process of digesting carbohydrates",
          "Communication between intestinal bacteria and the nervous system",
          "A type of probiotic supplement",
          "A surgical connection between organs"
        ],
        correct: 1,
        explanation: "The passage defines it as 'a bidirectional communication system between intestinal bacteria and the nervous system.'"
      }
    ]
  },
  {
    id: 6,
    passage: "Confirmation bias, the tendency to seek, interpret, and remember information that confirms pre-existing beliefs, poses a significant challenge to rational thinking. People experiencing this bias notice and give more weight to evidence supporting their views while dismissing or forgetting contradictory information. This psychological phenomenon affects everyone, from scientists conducting research to citizens evaluating political claims.\n\nThe internet and social media have amplified confirmation bias through algorithmic filtering. Platforms curate content based on users' past behavior, creating echo chambers where people encounter primarily information aligning with their existing views. This personalized filtering can reinforce misconceptions and increase political polarization. Combating confirmation bias requires conscious effort: actively seeking opposing viewpoints, questioning one's assumptions, and evaluating evidence objectively regardless of whether it supports preferred conclusions. Critical thinking education emphasizing these skills has never been more essential.",
    questions: [
      {
        id: 13,
        text: "According to the passage, confirmation bias causes people to:",
        options: [
          "Avoid using social media",
          "Conduct more thorough research",
          "Favor information supporting their existing beliefs",
          "Change their opinions frequently"
        ],
        correct: 2,
        explanation: "The passage states confirmation bias involves seeking 'information that confirms pre-existing beliefs' and giving 'more weight to evidence supporting their views.'"
      },
      {
        id: 14,
        text: "The passage suggests that social media algorithms:",
        options: [
          "Have no effect on confirmation bias",
          "Help people encounter diverse viewpoints",
          "Deliberately spread misinformation",
          "Create echo chambers reinforcing existing views"
        ],
        correct: 3,
        explanation: "The passage states platforms 'curate content based on users' past behavior, creating echo chambers where people encounter primarily information aligning with their existing views.'"
      },
      {
        id: 15,
        text: "To combat confirmation bias, the passage recommends:",
        options: [
          "Actively seeking opposing viewpoints",
          "Relying on algorithmic curation",
          "Only trusting scientific sources",
          "Avoiding all online information"
        ],
        correct: 0,
        explanation: "The passage explicitly states combating confirmation bias requires 'actively seeking opposing viewpoints, questioning one's assumptions, and evaluating evidence objectively.'"
      }
    ]
  },
  {
    id: 7,
    passage: "The concept of time dilation, predicted by Einstein's theory of relativity, has been repeatedly confirmed through experiments. According to this principle, time passes more slowly for objects moving at high speeds relative to stationary observers. This isn't merely theoretical—atomic clocks flown on aircraft show measurable time differences compared to identical clocks on the ground, though the differences are minuscule at typical aircraft speeds.\n\nGPS satellites provide a practical application of time dilation corrections. These satellites orbit Earth at high speeds and experience weaker gravitational fields than ground-based receivers. Both factors affect the rate at which time passes for the satellites. Without accounting for relativistic effects, GPS calculations would accumulate errors of several kilometers per day. The system's remarkable accuracy—often within meters—depends on incorporating Einstein's century-old insights into everyday technology.",
    questions: [
      {
        id: 16,
        text: "Time dilation refers to the phenomenon where:",
        options: [
          "Satellites lose track of time",
          "Time passes at different rates for different observers",
          "Clocks become less accurate at high altitudes",
          "Time appears to stop completely"
        ],
        correct: 1,
        explanation: "The passage states 'time passes more slowly for objects moving at high speeds relative to stationary observers,' indicating different rates for different observers."
      },
      {
        id: 17,
        text: "According to the passage, GPS satellites must account for relativistic effects because:",
        options: [
          "GPS was invented before Einstein's theory",
          "Atomic clocks malfunction in space",
          "Both their speed and gravitational field affect time passage",
          "They move too slowly to be accurate"
        ],
        correct: 2,
        explanation: "The passage states satellites 'orbit Earth at high speeds and experience weaker gravitational fields' and 'Both factors affect the rate at which time passes for the satellites.'"
      }
    ]
  },
  {
    id: 8,
    passage: "Biomimicry, the practice of learning from and mimicking nature's strategies to solve human problems, has inspired numerous innovations. Evolution has spent billions of years optimizing organisms for survival, resulting in elegant solutions to challenges like adhesion, water collection, and energy efficiency. Engineers studying these natural systems have developed remarkable technologies.\n\nVelcro, for instance, was invented after George de Mestral examined burrs stuck to his dog's fur under a microscope and discovered tiny hooks that caught on loops in the fabric. Similarly, researchers studying the water-repellent properties of lotus leaves have created self-cleaning surfaces. Shark skin's unique structure has inspired more efficient swimsuits and ship hulls that reduce drag. As environmental challenges intensify, biomimicry offers a sustainable approach to innovation, working with nature's principles rather than against them.",
    questions: [
      {
        id: 18,
        text: "The main idea of this passage is that:",
        options: [
          "Velcro was an accidental discovery",
          "Sharks are the most efficient swimmers",
          "Nature provides solutions that humans can adapt for technology",
          "Evolution is faster than human innovation"
        ],
        correct: 2,
        explanation: "The passage focuses on how 'learning from and mimicking nature's strategies' has 'inspired numerous innovations.'"
      },
      {
        id: 19,
        text: "According to the passage, lotus leaves have inspired technology related to:",
        options: [
          "Water collection",
          "Swimming efficiency",
          "Hook-and-loop fasteners",
          "Self-cleaning surfaces"
        ],
        correct: 3,
        explanation: "The passage states 'researchers studying the water-repellent properties of lotus leaves have created self-cleaning surfaces.'"
      },
      {
        id: 20,
        text: "The passage suggests biomimicry is particularly valuable because it:",
        options: [
          "Works with nature's principles sustainably",
          "Requires no scientific knowledge",
          "Always produces perfect solutions",
          "Is cheaper than other research methods"
        ],
        correct: 0,
        explanation: "The passage concludes that biomimicry 'offers a sustainable approach to innovation, working with nature's principles rather than against them.'"
      }
    ]
  },
  {
    id: 9,
    passage: "The decline of coral reefs represents one of the ocean's most pressing environmental crises. These vibrant underwater ecosystems support approximately 25% of all marine species despite covering less than 1% of the ocean floor. Coral bleaching, which occurs when stressed corals expel the symbiotic algae that provide them with nutrients and color, has become increasingly common due to rising ocean temperatures. Without these algae, corals turn white and become vulnerable to disease and death.\n\nBeyond their ecological importance, coral reefs provide significant economic value through fishing, tourism, and coastal protection. They act as natural breakwaters, reducing wave energy and protecting shorelines from erosion and storm damage. The degradation of coral reefs thus threatens not only marine biodiversity but also the livelihoods of millions of people who depend on reef resources. Conservation efforts including marine protected areas, sustainable fishing practices, and climate change mitigation are essential for preserving these irreplaceable ecosystems.",
    questions: [
      {
        id: 21,
        text: "Coral bleaching occurs when:",
        options: [
          "Too many fish eat the coral",
          "Stressed corals expel symbiotic algae",
          "Corals become infected with disease",
          "Ocean temperatures drop too low"
        ],
        correct: 1,
        explanation: "The passage explicitly states bleaching 'occurs when stressed corals expel the symbiotic algae that provide them with nutrients and color.'"
      },
      {
        id: 22,
        text: "The passage indicates that coral reefs:",
        options: [
          "Cover most of the ocean floor",
          "Are not economically important",
          "Support a disproportionately large amount of marine life relative to their size",
          "Only exist in deep ocean waters"
        ],
        correct: 2,
        explanation: "The passage states reefs 'support approximately 25% of all marine species despite covering less than 1% of the ocean floor,' showing disproportionate biodiversity."
      }
    ]
  },
  {
    id: 10,
    passage: "The Dunning-Kruger effect describes a cognitive bias where people with limited knowledge or competence in a domain overestimate their abilities, while experts often underestimate theirs. This phenomenon occurs because incompetent individuals lack the metacognitive skills to recognize their own limitations. Paradoxically, the knowledge needed to be good at something is often the same knowledge needed to recognize how much one doesn't know.\n\nThis effect has significant implications for education, workplace dynamics, and public discourse. Novices may feel confident making pronouncements on complex subjects they barely understand, while true experts recognize the nuances and uncertainties in their fields. The effect partially explains why some people confidently share medical advice without training or dismiss scientific consensus on topics like climate change. Recognizing the Dunning-Kruger effect in ourselves requires humility and a willingness to acknowledge the limits of our knowledge.",
    questions: [
      {
        id: 23,
        text: "According to the passage, the Dunning-Kruger effect occurs because:",
        options: [
          "Incompetent people lack skills to recognize their limitations",
          "Complex subjects are inherently unknowable",
          "Experts deliberately underestimate themselves",
          "Education systems fail to teach basic competence"
        ],
        correct: 0,
        explanation: "The passage states 'This phenomenon occurs because incompetent individuals lack the metacognitive skills to recognize their own limitations.'"
      },
      {
        id: 24,
        text: "The passage suggests that people suffering from the Dunning-Kruger effect might:",
        options: [
          "Refuse to learn new subjects",
          "Always defer to experts",
          "Spend years studying before forming opinions",
          "Confidently make pronouncements on subjects they barely understand"
        ],
        correct: 3,
        explanation: "The passage explicitly states 'Novices may feel confident making pronouncements on complex subjects they barely understand.'"
      },
      {
        id: 25,
        text: "The paradox mentioned in the passage is that:",
        options: [
          "Education makes people less confident",
          "Metacognition cannot be learned",
          "The knowledge to be competent is the same knowledge needed to recognize one's limits",
          "Experts know less than novices"
        ],
        correct: 2,
        explanation: "The passage states 'the knowledge needed to be good at something is often the same knowledge needed to recognize how much one doesn't know.'"
      }
    ]
  },
  {
    id: 11,
    passage: "The printing press, invented by Johannes Gutenberg around 1440, revolutionized information dissemination in ways that parallel today's internet revolution. Before Gutenberg, books were painstakingly copied by hand, making them expensive and rare. The printing press enabled mass production of texts, dramatically reducing costs and increasing availability. This technological shift democratized knowledge, allowing ideas to spread rapidly across Europe.\n\nThe printing press's impact extended far beyond making books cheaper. It facilitated the Protestant Reformation by enabling wide distribution of Martin Luther's critiques of the Catholic Church. It accelerated scientific progress by allowing researchers to share findings more easily. It standardized languages as certain dialects became dominant in print. The printing press fundamentally altered human civilization, demonstrating how a single technological innovation can reshape society in profound and unexpected ways.",
    questions: [
      {
        id: 26,
        text: "The passage compares the printing press to:",
        options: [
          "Hand-copied manuscripts",
          "Scientific research",
          "The Protestant Reformation",
          "The internet"
        ],
        correct: 3,
        explanation: "The opening sentence states the printing press 'revolutionized information dissemination in ways that parallel today's internet revolution.'"
      },
      {
        id: 27,
        text: "According to the passage, the printing press affected language by:",
        options: [
          "Standardizing languages through dominant printed dialects",
          "Making all languages equally common",
          "Translating all books into Latin",
          "Creating new alphabets"
        ],
        correct: 0,
        explanation: "The passage states 'It standardized languages as certain dialects became dominant in print.'"
      },
      {
        id: 28,
        text: "The passage suggests that the printing press's most significant contribution was:",
        options: [
          "Improving handwriting",
          "Fundamentally reshaping society through democratized knowledge",
          "Supporting the Catholic Church",
          "Making books cheaper"
        ],
        correct: 1,
        explanation: "The passage concludes that the printing press 'fundamentally altered human civilization' and enabled the 'democratization of knowledge.'"
      }
    ]
  },
  {
    id: 12,
    passage: "Neuroplasticity, the brain's ability to reorganize itself by forming new neural connections throughout life, challenges the once-dominant view that the adult brain is essentially fixed. Research has demonstrated that the brain can compensate for injury, adjust to new situations, and even physically change in response to learning. Stroke victims, for example, can sometimes recover lost functions as other brain regions assume responsibilities of damaged areas.\n\nThis adaptability has profound implications for education and rehabilitation. Learning a new skill, whether playing an instrument or speaking a language, literally changes brain structure. Even in elderly individuals, cognitive training can improve mental function and may help delay dementia. However, neuroplasticity cuts both ways—chronic pain and negative thought patterns can also become reinforced through repeated neural activation. Understanding neuroplasticity empowers individuals to actively shape their brain development through conscious choices about activities and thoughts.",
    questions: [
      {
        id: 29,
        text: "The concept of neuroplasticity contradicts the earlier belief that:",
        options: [
          "Stroke causes brain damage",
          "Learning is important",
          "The brain controls the body",
          "The adult brain cannot change significantly"
        ],
        correct: 3,
        explanation: "The passage states neuroplasticity 'challenges the once-dominant view that the adult brain is essentially fixed.'"
      },
      {
        id: 30,
        text: "According to the passage, neuroplasticity can have negative effects when:",
        options: [
          "People learn new languages",
          "Negative patterns become reinforced through repetition",
          "The brain compensates for injury",
          "Elderly people receive cognitive training"
        ],
        correct: 1,
        explanation: "The passage states 'neuroplasticity cuts both ways—chronic pain and negative thought patterns can also become reinforced through repeated neural activation.'"
      }
    ]
  },
  {
    id: 13,
    passage: "The tragedy of the commons, a concept introduced by ecologist Garrett Hardin, describes situations where individuals acting in their own self-interest deplete shared resources, ultimately harming everyone. Hardin illustrated this with the example of herders sharing common grazing land. Each herder benefits from adding more animals to their personal herd, but collectively, overgrazing degrades the land for all.\n\nThis dynamic applies to numerous modern challenges: overfishing depletes ocean stocks, excessive groundwater pumping drains aquifers, and carbon emissions contribute to climate change. The tragedy occurs because the costs of resource depletion are distributed among all users while the benefits of exploitation accrue to individuals. Solutions typically involve either privatization, government regulation, or community-based management systems that align individual incentives with collective welfare. The concept remains highly relevant for addressing environmental issues requiring collective action.",
    questions: [
      {
        id: 31,
        text: "The tragedy of the commons occurs because:",
        options: [
          "Resources are too expensive",
          "Governments fail to privatize resources",
          "Individual benefits exceed individual costs, but collective costs exceed collective benefits",
          "People don't understand environmental issues"
        ],
        correct: 2,
        explanation: "The passage explains 'the costs of resource depletion are distributed among all users while the benefits of exploitation accrue to individuals,' creating the tragedy."
      },
      {
        id: 32,
        text: "According to the passage, potential solutions to the tragedy of the commons include all EXCEPT:",
        options: [
          "Privatization",
          "Community-based management",
          "Government regulation",
          "Unlimited individual exploitation"
        ],
        correct: 3,
        explanation: "The passage lists privatization, government regulation, and community-based management as solutions. Unlimited exploitation causes the problem rather than solving it."
      },
      {
        id: 33,
        text: "The passage uses overfishing as an example of:",
        options: [
          "A modern application of the tragedy of the commons",
          "Government regulation benefits",
          "Why privatization fails",
          "Successful resource management"
        ],
        correct: 0,
        explanation: "The passage states 'This dynamic applies to numerous modern challenges: overfishing depletes ocean stocks,' using it as an example of the tragedy."
      }
    ]
  },
  {
    id: 14,
    passage: "Blockchain technology, the system underlying cryptocurrencies like Bitcoin, represents a novel approach to record-keeping that eliminates the need for central authorities. Traditional databases store information in centralized locations controlled by specific organizations. Blockchain instead distributes identical copies of the record across many computers, with new entries validated through cryptographic consensus mechanisms rather than central approval.\n\nThis decentralized structure offers both advantages and limitations. Blockchain records are extremely difficult to alter fraudulently because changing one copy doesn't affect the others, and the network can detect discrepancies. However, this security comes at a cost: blockchain transactions are slower and consume more energy than centralized systems. While cryptocurrency remains blockchain's most prominent application, the technology shows promise for supply chain tracking, digital identity verification, and any situation requiring secure, transparent record-keeping without trusted intermediaries.",
    questions: [
      {
        id: 34,
        text: "The primary difference between blockchain and traditional databases is:",
        options: [
          "Traditional databases are more secure",
          "Blockchain distributes records across many computers rather than centralizing them",
          "Blockchain is faster",
          "Blockchain requires government approval"
        ],
        correct: 1,
        explanation: "The passage contrasts 'centralized locations controlled by specific organizations' with blockchain's distribution of 'identical copies of the record across many computers.'"
      },
      {
        id: 35,
        text: "According to the passage, a disadvantage of blockchain technology is:",
        options: [
          "Inability to verify identity",
          "Lack of transparency",
          "Easy fraudulent alteration",
          "Slower speed and higher energy consumption"
        ],
        correct: 3,
        explanation: "The passage explicitly states 'this security comes at a cost: blockchain transactions are slower and consume more energy than centralized systems.'"
      }
    ]
  },
  {
    id: 15,
    passage: "The bystander effect, extensively studied following the 1964 murder of Kitty Genovese in New York, describes how individuals are less likely to help someone in need when other people are present. Contrary to expectations, the presence of more witnesses often decreases the likelihood that any single person will intervene. This occurs partly due to diffusion of responsibility—each person assumes someone else will help—and partly due to social influence, as people look to others for cues about how to respond.\n\nUnderstanding the bystander effect can help overcome it. Research shows that making eye contact with a specific person and directly requesting help dramatically increases the likelihood of receiving assistance. In emergencies, clearly designating individuals for specific tasks ('You in the blue shirt, call 911') combats diffusion of responsibility. Awareness of this psychological phenomenon doesn't eliminate it entirely, but recognizing its existence helps people consciously resist the tendency to assume others will act.",
    questions: [
      {
        id: 36,
        text: "The bystander effect demonstrates that:",
        options: [
          "Emergencies are rare in crowded places",
          "More witnesses always means more help",
          "The presence of others can decrease individual likelihood of helping",
          "People are generally unwilling to help others"
        ],
        correct: 2,
        explanation: "The passage states 'individuals are less likely to help someone in need when other people are present' and 'the presence of more witnesses often decreases the likelihood that any single person will intervene.'"
      },
      {
        id: 37,
        text: "According to the passage, diffusion of responsibility occurs when:",
        options: [
          "Victims don't ask for help clearly",
          "People are too busy to notice emergencies",
          "No one is present to help",
          "Each person assumes someone else will help"
        ],
        correct: 3,
        explanation: "The passage defines diffusion of responsibility as when 'each person assumes someone else will help.'"
      },
      {
        id: 38,
        text: "To overcome the bystander effect, the passage recommends:",
        options: [
          "Designating specific individuals for specific tasks",
          "Avoiding crowded places",
          "Ignoring social cues",
          "Waiting for professional responders"
        ],
        correct: 0,
        explanation: "The passage states 'clearly designating individuals for specific tasks ('You in the blue shirt, call 911') combats diffusion of responsibility.'"
      }
    ]
  },
  {
    id: 16,
    passage: "Antibiotic resistance poses one of the most serious threats to public health today. Bacteria evolve rapidly, and overuse of antibiotics creates selective pressure favoring resistant strains. When antibiotics are used unnecessarily—such as for viral infections they cannot treat—or when patients fail to complete prescribed courses, resistant bacteria survive and multiply. These resistant strains can then spread through communities and healthcare facilities.\n\nThe consequences are already apparent. Common infections once easily treated with antibiotics now resist multiple drugs, complicating treatment and increasing mortality. Without effective antibiotics, routine surgeries and cancer treatments become significantly riskier. Addressing this crisis requires multiple approaches: developing new antibiotics, implementing antibiotic stewardship programs to ensure appropriate use, improving infection prevention to reduce antibiotic need, and educating both healthcare providers and the public about proper antibiotic use. The problem took decades to develop and will require sustained effort to resolve.",
    questions: [
      {
        id: 39,
        text: "Antibiotic resistance develops because:",
        options: [
          "Doctors prescribe the wrong medications",
          "Patients develop immunity to antibiotics",
          "Antibiotics become weaker over time",
          "Bacteria evolve under selective pressure from antibiotic use"
        ],
        correct: 3,
        explanation: "The passage states 'Bacteria evolve rapidly, and overuse of antibiotics creates selective pressure favoring resistant strains.'"
      },
      {
        id: 40,
        text: "According to the passage, routine surgeries become riskier when:",
        options: [
          "Effective antibiotics are unavailable",
          "Hospitals close down",
          "Patients refuse treatment",
          "Surgeons lack training"
        ],
        correct: 0,
        explanation: "The passage states 'Without effective antibiotics, routine surgeries and cancer treatments become significantly riskier.'"
      }
    ]
  },
  {
    id: 17,
    passage: "The Flynn effect refers to the substantial increase in average IQ scores observed across the developed world over the past century. Each generation has scored higher than the previous one on standardized intelligence tests, with gains averaging about three points per decade. This rise cannot be explained by genetic changes, which occur far too slowly. Instead, researchers attribute the gains to environmental factors including improved nutrition, education, and cognitive stimulation.\n\nInterestingly, different types of intelligence tests show varying rates of improvement. Abstract reasoning and problem-solving skills have increased most dramatically, while vocabulary and arithmetic skills have improved more modestly. Some researchers suggest that modern life, with its technology and complex systems, requires more abstract thinking than agricultural or early industrial societies did. However, recent studies indicate the Flynn effect may be slowing or even reversing in some developed nations, raising questions about whether we've reached a ceiling or whether changing environmental factors are having different effects.",
    questions: [
      {
        id: 41,
        text: "The Flynn effect describes:",
        options: [
          "Differences in intelligence between countries",
          "Rising average IQ scores across generations",
          "Genetic improvement in human intelligence",
          "Declining intelligence over time"
        ],
        correct: 1,
        explanation: "The passage states 'The Flynn effect refers to the substantial increase in average IQ scores observed across the developed world over the past century.'"
      },
      {
        id: 42,
        text: "According to the passage, which cognitive skills have improved MOST dramatically?",
        options: [
          "Vocabulary",
          "Memory",
          "Abstract reasoning and problem-solving",
          "Arithmetic"
        ],
        correct: 2,
        explanation: "The passage states 'Abstract reasoning and problem-solving skills have increased most dramatically, while vocabulary and arithmetic skills have improved more modestly.'"
      },
      {
        id: 43,
        text: "The passage suggests that the Flynn effect is attributed to:",
        options: [
          "Easier tests over time",
          "Better test design",
          "Genetic evolution",
          "Environmental factors like nutrition and education"
        ],
        correct: 3,
        explanation: "The passage states 'researchers attribute the gains to environmental factors including improved nutrition, education, and cognitive stimulation.'"
      }
    ]
  },
  {
    id: 18,
    passage: "Dark matter, which neither emits nor absorbs light, constitutes approximately 85% of the universe's matter according to current estimates. Scientists infer its existence from gravitational effects on visible matter, radiation, and cosmic structure. Galaxies rotate too quickly to hold together based on their visible mass alone—dark matter's gravitational pull provides the additional force needed to prevent them from flying apart.\n\nDespite decades of research, dark matter's composition remains mysterious. It cannot be ordinary matter made of protons and neutrons, which would interact with light. Leading candidates include exotic particles predicted by theories extending beyond the Standard Model of particle physics. Numerous experiments worldwide attempt to detect dark matter directly, but so far it has evaded identification. Understanding dark matter is crucial not only for cosmology but also for fundamental physics, as its discovery would reshape our understanding of the universe's basic constituents.",
    questions: [
      {
        id: 44,
        text: "Scientists know dark matter exists primarily because:",
        options: [
          "Its gravitational effects can be observed",
          "It appears in telescope images",
          "It has been directly measured in laboratories",
          "It emits detectable radiation"
        ],
        correct: 0,
        explanation: "The passage states 'Scientists infer its existence from gravitational effects on visible matter, radiation, and cosmic structure.'"
      },
      {
        id: 45,
        text: "According to the passage, dark matter cannot be ordinary matter because ordinary matter:",
        options: [
          "Has been completely catalogued",
          "Would interact with light",
          "Is too heavy",
          "Doesn't exist in space"
        ],
        correct: 1,
        explanation: "The passage states 'It cannot be ordinary matter made of protons and neutrons, which would interact with light.'"
      }
    ]
  },
  {
    id: 19,
    passage: "Cognitive dissonance theory, developed by psychologist Leon Festinger, explains the psychological discomfort people experience when holding contradictory beliefs or when their actions conflict with their beliefs. This discomfort motivates individuals to reduce the inconsistency, often by changing beliefs rather than behavior. A classic example involves smokers who know smoking causes cancer yet continue smoking—they may minimize the health risks or emphasize other factors to reduce the dissonance.\n\nThe theory has broad applications in understanding human behavior. People who make difficult decisions often become more convinced they made the right choice afterward, as acknowledging a poor decision creates dissonance. Similarly, when people work hard for something, they tend to value it more highly—the effort would feel wasted if they concluded it wasn't worthwhile. Recognizing cognitive dissonance in ourselves can improve decision-making by helping us distinguish between rational evaluation and psychological rationalization designed merely to reduce uncomfortable feelings.",
    questions: [
      {
        id: 46,
        text: "Cognitive dissonance occurs when:",
        options: [
          "People work hard for something",
          "Decisions are too difficult to make",
          "Beliefs contradict each other or actions contradict beliefs",
          "People forget important information"
        ],
        correct: 2,
        explanation: "The passage states cognitive dissonance is 'the psychological discomfort people experience when holding contradictory beliefs or when their actions conflict with their beliefs.'"
      },
      {
        id: 47,
        text: "The smoker example illustrates:",
        options: [
          "How people modify beliefs to reduce dissonance",
          "How people change behaviors to match beliefs",
          "Why health warnings don't work",
          "Why smoking should be banned"
        ],
        correct: 0,
        explanation: "The passage shows smokers 'may minimize the health risks or emphasize other factors to reduce the dissonance' rather than stopping smoking, illustrating belief modification."
      },
      {
        id: 48,
        text: "According to the passage, people tend to value things more highly when they:",
        options: [
          "Receive them as gifts",
          "Pay less for them",
          "Work hard to obtain them",
          "Don't really need them"
        ],
        correct: 2,
        explanation: "The passage states 'when people work hard for something, they tend to value it more highly—the effort would feel wasted if they concluded it wasn't worthwhile.'"
      }
    ]
  },
  {
    id: 20,
    passage: "Renewable energy sources like solar and wind power have become increasingly cost-competitive with fossil fuels, challenging assumptions about economic trade-offs between environmental protection and energy costs. In many regions, new solar or wind installations now produce electricity more cheaply than new coal or natural gas plants. This cost reduction stems from technological improvements, manufacturing scale economies, and accumulated operational experience.\n\nHowever, renewable energy faces the challenge of intermittency—solar panels don't generate power at night, and wind turbines require wind. This variability necessitates energy storage solutions or complementary power sources to ensure reliable electricity supply. Battery technology is improving rapidly but remains expensive for large-scale grid storage. Some experts advocate for maintaining natural gas plants as backup, while others propose expanded electrical grids that can balance supply and demand across wider geographic areas. Successfully transitioning to renewable energy requires not just generating capacity but also solving these integration challenges.",
    questions: [
      {
        id: 49,
        text: "The passage indicates that renewable energy is now:",
        options: [
          "Available only in certain countries",
          "Only viable with government subsidies",
          "More expensive than fossil fuels",
          "Often cost-competitive with fossil fuels"
        ],
        correct: 3,
        explanation: "The passage states renewable energy 'have become increasingly cost-competitive with fossil fuels' and 'new solar or wind installations now produce electricity more cheaply than new coal or natural gas plants.'"
      },
      {
        id: 50,
        text: "The main challenge mentioned for renewable energy is:",
        options: [
          "Public opposition",
          "Intermittency of power generation",
          "Lack of technology",
          "Excessive costs"
        ],
        correct: 1,
        explanation: "The passage identifies 'the challenge of intermittency—solar panels don't generate power at night, and wind turbines require wind' as the main issue."
      }
    ]
  },
  {
    id: 21,
    passage: "The Hawthorne effect describes how people modify their behavior when they know they're being observed. The phenomenon takes its name from studies conducted at Western Electric's Hawthorne Works factory in the 1920s and 1930s. Researchers investigating how lighting levels affected productivity found that worker output increased regardless of whether lights were brightened or dimmed. The key factor wasn't the lighting but rather the workers' awareness that they were subjects of observation and their interpretation of that attention as management interest in their welfare.\n\nThis effect has significant implications for research methodology and workplace management. In research, it can confound study results if participants alter behavior due to observation rather than the variable being tested. In workplaces, temporary productivity improvements from new monitoring systems may reflect the Hawthorne effect rather than the system's inherent value. Conversely, genuine attention to employee welfare—not merely performance monitoring—can sustainably improve workplace satisfaction and productivity. The Hawthorne studies ultimately revealed more about human psychology than about optimal lighting conditions.",
    questions: [
      {
        id: 51,
        text: "The Hawthorne effect occurred because workers:",
        options: [
          "Modified behavior due to awareness of observation",
          "Were paid bonuses for productivity",
          "Preferred brighter lighting",
          "Worked faster in darkness"
        ],
        correct: 0,
        explanation: "The passage states 'The key factor wasn't the lighting but rather the workers' awareness that they were subjects of observation.'"
      },
      {
        id: 52,
        text: "According to the passage, the Hawthorne effect can be problematic for research because it:",
        options: [
          "Only affects factory workers",
          "Makes all research invalid",
          "Is too expensive to control",
          "Can confound results when participants change behavior due to observation"
        ],
        correct: 3,
        explanation: "The passage states the effect 'can confound study results if participants alter behavior due to observation rather than the variable being tested.'"
      },
      {
        id: 53,
        text: "The passage suggests that sustainable workplace improvements require:",
        options: [
          "Better lighting systems",
          "Genuine attention to employee welfare",
          "Constant monitoring",
          "Temporary productivity boosts"
        ],
        correct: 1,
        explanation: "The passage contrasts temporary improvements from monitoring with 'genuine attention to employee welfare' which can 'sustainably improve workplace satisfaction and productivity.'"
      }
    ]
  },
  {
    id: 22,
    passage: "Quantum entanglement, which Einstein famously called 'spooky action at a distance,' occurs when particles become correlated such that measuring one instantly affects the other, regardless of the distance separating them. This phenomenon doesn't violate relativity's speed-of-light limit because no information can be transmitted through entanglement alone. However, it does challenge our intuitive understanding of reality, suggesting that entangled particles share a connection transcending spatial separation.\n\nQuantum entanglement has moved from theoretical curiosity to practical application. Quantum computers exploit entanglement to perform certain calculations exponentially faster than classical computers. Quantum cryptography uses entanglement to create theoretically unbreakable encryption—any attempt to intercept the communication disturbs the entangled state, alerting both parties. While large-scale quantum computers remain years away, the technology's potential to revolutionize computing and communications drives substantial research investment worldwide.",
    questions: [
      {
        id: 54,
        text: "According to the passage, quantum entanglement doesn't violate relativity because:",
        options: [
          "Einstein approved of it",
          "It only works over short distances",
          "No information can be transmitted through entanglement alone",
          "It doesn't actually occur instantly"
        ],
        correct: 2,
        explanation: "The passage states 'This phenomenon doesn't violate relativity's speed-of-light limit because no information can be transmitted through entanglement alone.'"
      },
      {
        id: 55,
        text: "Quantum cryptography is secure because:",
        options: [
          "It operates faster than light",
          "It uses extremely long passwords",
          "Computers cannot process quantum data",
          "Interception attempts disturb the entangled state"
        ],
        correct: 3,
        explanation: "The passage states 'any attempt to intercept the communication disturbs the entangled state, alerting both parties.'"
      }
    ]
  },
  {
    id: 23,
    passage: "The concept of food deserts describes urban and rural areas where residents lack access to affordable, nutritious food. These areas typically lack full-service grocery stores, forcing residents to rely on convenience stores and fast-food restaurants that offer limited fresh produce and healthy options. Food deserts disproportionately affect low-income communities and communities of color, contributing to health disparities including higher rates of obesity, diabetes, and heart disease.\n\nAddressing food deserts requires multifaceted approaches. Some cities incentivize grocery stores to open in underserved areas through tax breaks or grants. Community gardens and urban farms can supplement fresh food availability while building social connections. Mobile markets bring fresh produce to areas lacking permanent stores. However, simply increasing food availability doesn't guarantee improved nutrition—solutions must also address affordability, transportation barriers, and nutrition education. The food desert problem reflects broader issues of economic inequality and urban planning that shape health outcomes in profound yet often invisible ways.",
    questions: [
      {
        id: 56,
        text: "Food deserts are characterized by:",
        options: [
          "Rural farming communities",
          "Too many grocery stores",
          "Lack of restaurants",
          "Insufficient access to affordable, nutritious food"
        ],
        correct: 3,
        explanation: "The passage defines food deserts as 'areas where residents lack access to affordable, nutritious food.'"
      },
      {
        id: 57,
        text: "According to the passage, simply adding grocery stores may be insufficient because:",
        options: [
          "Solutions must also address affordability, transportation, and education",
          "People don't like vegetables",
          "Food deserts don't actually exist",
          "Grocery stores are too expensive to operate"
        ],
        correct: 0,
        explanation: "The passage states 'simply increasing food availability doesn't guarantee improved nutrition—solutions must also address affordability, transportation barriers, and nutrition education.'"
      },
      {
        id: 58,
        text: "The passage indicates that food deserts primarily affect:",
        options: [
          "University campuses",
          "Low-income communities and communities of color",
          "Wealthy suburban communities",
          "Tourist destinations"
        ],
        correct: 1,
        explanation: "The passage explicitly states 'Food deserts disproportionately affect low-income communities and communities of color.'"
      }
    ]
  },
  {
    id: 24,
    passage: "The endowment effect describes people's tendency to value things they own more highly than identical things they don't own. In classic experiments, participants given a coffee mug demanded more money to sell it than other participants were willing to pay to buy an identical mug. This asymmetry contradicts traditional economic theory, which assumes people value goods consistently regardless of ownership.\n\nThe endowment effect has practical implications for negotiations, marketing, and policy. It partially explains why people are reluctant to sell possessions even when offered fair market value—ownership itself adds perceived value. Advertisers exploit this through free trials and money-back guarantees, knowing that once people take possession, they'll be reluctant to return items. Policymakers must account for the endowment effect when implementing changes, as people weigh potential losses more heavily than equivalent gains. Understanding this cognitive bias helps explain seemingly irrational economic behavior and informs strategies in business and public policy.",
    questions: [
      {
        id: 59,
        text: "The endowment effect demonstrates that people:",
        options: [
          "Prefer expensive products",
          "Cannot evaluate market prices accurately",
          "Value owned items more than identical unowned items",
          "Always make rational economic decisions"
        ],
        correct: 2,
        explanation: "The passage states the endowment effect describes 'people's tendency to value things they own more highly than identical things they don't own.'"
      },
      {
        id: 60,
        text: "According to the passage, advertisers use free trials because:",
        options: [
          "People prefer temporary ownership",
          "Trials are required by law",
          "Products are too expensive to buy",
          "Once people possess something, they become reluctant to return it"
        ],
        correct: 3,
        explanation: "The passage states advertisers 'exploit this through free trials and money-back guarantees, knowing that once people take possession, they'll be reluctant to return items.'"
      }
    ]
  },
  {
    id: 25,
    passage: "Circadian rhythms, the approximately 24-hour cycles governing physiological processes, evolved to align organisms with Earth's day-night cycle. These internal clocks regulate sleep-wake patterns, hormone release, body temperature, and numerous other functions. Even without external time cues, humans maintain roughly 24-hour cycles, though they tend to drift slightly longer without light-dark signals for synchronization.\n\nModern life frequently disrupts circadian rhythms through shift work, jet lag, and artificial lighting. These disruptions have consequences beyond mere tiredness—chronic circadian misalignment correlates with increased risks of obesity, diabetes, cardiovascular disease, and certain cancers. The relatively recent invention of electric lighting means humans can now remain active regardless of natural light-dark cycles, but our biology hasn't adapted to this change. Understanding circadian rhythms has practical applications: scheduling important activities during peak alertness periods, timing medication for maximum effectiveness, and designing lighting systems that support rather than disrupt natural rhythms.",
    questions: [
      {
        id: 61,
        text: "Circadian rhythms are described as approximately 24-hour cycles that:",
        options: [
          "Govern multiple physiological processes",
          "Were recently discovered",
          "Can be permanently reset",
          "Only affect sleep patterns"
        ],
        correct: 0,
        explanation: "The passage states circadian rhythms are 'approximately 24-hour cycles governing physiological processes' including 'sleep-wake patterns, hormone release, body temperature, and numerous other functions.'"
      },
      {
        id: 62,
        text: "According to the passage, chronic disruption of circadian rhythms is associated with:",
        options: [
          "Better sleep quality",
          "Improved productivity",
          "Enhanced athletic performance",
          "Increased disease risks"
        ],
        correct: 3,
        explanation: "The passage states 'chronic circadian misalignment correlates with increased risks of obesity, diabetes, cardiovascular disease, and certain cancers.'"
      },
      {
        id: 63,
        text: "The passage suggests that electric lighting has:",
        options: [
          "Had no effect on human health",
          "Helped humans adapt to modern schedules",
          "Completely eliminated circadian rhythms",
          "Allowed activity regardless of natural cycles, but biology hasn't adapted"
        ],
        correct: 3,
        explanation: "The passage states 'electric lighting means humans can now remain active regardless of natural light-dark cycles, but our biology hasn't adapted to this change.'"
      }
    ]
  },
  {
    id: 26,
    passage: "The concept of emotional intelligence, popularized by psychologist Daniel Goleman, encompasses the ability to recognize, understand, and manage one's own emotions while also recognizing and influencing others' emotions. Unlike traditional IQ, which measures cognitive abilities, emotional intelligence focuses on interpersonal and intrapersonal skills. Components include self-awareness, self-regulation, motivation, empathy, and social skills.\n\nResearch suggests emotional intelligence significantly impacts professional success and personal relationships. Leaders with high emotional intelligence often inspire greater loyalty and productivity in their teams. They navigate conflicts more effectively and adapt leadership styles to different situations and individuals. However, emotional intelligence remains somewhat controversial in academic psychology, with debates about whether it represents truly distinct abilities or merely personality traits. Nonetheless, the practical value of skills like empathy and emotional self-regulation is widely recognized, and many organizations now include emotional intelligence training in professional development programs.",
    questions: [
      {
        id: 64,
        text: "Emotional intelligence differs from traditional IQ in that it focuses on:",
        options: [
          "Academic achievement",
          "Memory capacity",
          "Interpersonal and intrapersonal skills",
          "Mathematical ability"
        ],
        correct: 2,
        explanation: "The passage contrasts traditional IQ, which 'measures cognitive abilities,' with emotional intelligence, which 'focuses on interpersonal and intrapersonal skills.'"
      },
      {
        id: 65,
        text: "According to the passage, emotional intelligence remains controversial because:",
        options: [
          "Debates exist about whether it represents distinct abilities or personality traits",
          "It has no practical applications",
          "It cannot be measured",
          "Daniel Goleman disagrees with researchers"
        ],
        correct: 0,
        explanation: "The passage states 'emotional intelligence remains somewhat controversial in academic psychology, with debates about whether it represents truly distinct abilities or merely personality traits.'"
      }
    ]
  },
  {
    id: 27,
    passage: "Desertification, the degradation of fertile land into desert, affects millions of people worldwide, particularly in Africa's Sahel region, parts of Asia, and the southwestern United States. While climate change exacerbates the problem through altered precipitation patterns, human activities often trigger desertification. Overgrazing depletes vegetation that holds soil in place, while unsustainable farming practices exhaust soil nutrients. Deforestation removes trees that would otherwise reduce wind erosion and maintain soil moisture.\n\nCombating desertification requires integrated approaches addressing both environmental restoration and socioeconomic factors. Techniques like terracing reduce erosion on slopes, while drought-resistant crops and efficient irrigation conserve water. Reforestation programs stabilize soil and restore ecological function. However, these technical solutions fail without addressing the economic pressures driving overexploitation. Poverty forces farmers to prioritize short-term survival over long-term sustainability. Successful desertification prevention must therefore combine ecological restoration with economic development that provides sustainable livelihoods.",
    questions: [
      {
        id: 66,
        text: "According to the passage, desertification is primarily caused by:",
        options: [
          "Volcanic activity",
          "Natural climate cycles alone",
          "Excessive rainfall",
          "Combination of climate change and human activities"
        ],
        correct: 3,
        explanation: "The passage states 'While climate change exacerbates the problem' and then lists human activities that 'often trigger desertification,' indicating both factors contribute."
      },
      {
        id: 67,
        text: "The passage suggests that technical solutions to desertification fail without:",
        options: [
          "Government regulation",
          "Better technology",
          "More funding",
          "Addressing economic pressures causing overexploitation"
        ],
        correct: 3,
        explanation: "The passage states 'these technical solutions fail without addressing the economic pressures driving overexploitation' and emphasizes combining 'ecological restoration with economic development.'"
      },
      {
        id: 68,
        text: "Overgrazing contributes to desertification by:",
        options: [
          "Depleting vegetation that holds soil in place",
          "Increasing rainfall",
          "Improving soil quality",
          "Reducing erosion"
        ],
        correct: 0,
        explanation: "The passage explicitly states 'Overgrazing depletes vegetation that holds soil in place.'"
      }
    ]
  },
  {
    id: 28,
    passage: "The concept of universal basic income (UBI) proposes providing all citizens with regular, unconditional cash payments regardless of employment status or income level. Proponents argue UBI could address poverty more efficiently than current welfare systems, reduce bureaucracy, and provide security in an economy increasingly threatened by automation. They contend that removing means-testing stigma and giving people financial flexibility would enable better education and entrepreneurship decisions.\n\nCritics raise several concerns. They question whether UBI is economically feasible at meaningful payment levels and whether it might discourage work, reducing overall economic productivity. Some worry it could dismantle targeted programs serving specific populations better than universal payments could. Small-scale pilot programs have produced mixed results, showing reduced financial stress but no clear consensus on labor market effects. The debate over UBI reflects fundamental questions about social policy: How should societies balance individual freedom with economic efficiency? Should support systems emphasize universal benefits or targeted assistance?",
    questions: [
      {
        id: 69,
        text: "Proponents of UBI argue it would:",
        options: [
          "Discourage education",
          "Increase government bureaucracy",
          "Eliminate all poverty immediately",
          "Address poverty more efficiently than current welfare systems"
        ],
        correct: 3,
        explanation: "The passage states proponents argue 'UBI could address poverty more efficiently than current welfare systems, reduce bureaucracy, and provide security.'"
      },
      {
        id: 70,
        text: "According to the passage, critics worry that UBI might:",
        options: [
          "Eliminate automation",
          "Discourage work and reduce productivity",
          "Increase targeted programs",
          "Cost too little"
        ],
        correct: 1,
        explanation: "The passage states critics 'question whether it might discourage work, reducing overall economic productivity.'"
      }
    ]
  },
  {
    id: 29,
    passage: "The gut-brain axis represents a bidirectional communication network linking the gastrointestinal tract and the central nervous system. This connection operates through multiple pathways including the vagus nerve, immune system signaling, and the production of neurotransmitters by gut bacteria. Remarkably, about 90% of the body's serotonin, a neurotransmitter affecting mood, is produced in the gut, and gut bacteria influence this production.\n\nThis connection has profound implications for mental health treatment. Research indicates that gut microbiome composition correlates with depression and anxiety disorders, suggesting that interventions targeting gut bacteria might alleviate some mental health conditions. Some studies show that probiotics—beneficial bacteria supplements—can reduce symptoms of depression and anxiety in certain individuals. However, the field remains in its early stages, and specific mechanisms remain poorly understood. The gut-brain connection challenges traditional mind-body dualism and suggests that treating mental health may sometimes require addressing digestive health.",
    questions: [
      {
        id: 71,
        text: "The passage indicates that approximately what percentage of the body's serotonin is produced in the gut?",
        options: [
          "75%",
          "50%",
          "10%",
          "90%"
        ],
        correct: 3,
        explanation: "The passage explicitly states 'about 90% of the body's serotonin, a neurotransmitter affecting mood, is produced in the gut.'"
      },
      {
        id: 72,
        text: "According to the passage, the gut-brain axis operates through all of the following EXCEPT:",
        options: [
          "Neurotransmitter production",
          "The vagus nerve",
          "Immune system signaling",
          "Conscious thought processes"
        ],
        correct: 3,
        explanation: "The passage lists the vagus nerve, immune system signaling, and neurotransmitter production as pathways. Conscious thought processes are not mentioned."
      },
      {
        id: 73,
        text: "The passage suggests that probiotics might:",
        options: [
          "Have no effect on mental health",
          "Cure all mental health conditions",
          "Reduce symptoms of depression and anxiety in some individuals",
          "Replace all psychiatric medications"
        ],
        correct: 2,
        explanation: "The passage states 'Some studies show that probiotics...can reduce symptoms of depression and anxiety in certain individuals,' indicating limited but positive effects."
      }
    ]
  },
  {
    id: 30,
    passage: "The Sapir-Whorf hypothesis, also known as linguistic relativity, proposes that the language one speaks influences or determines how one thinks about the world. The strong version claims language determines thought, making certain concepts impossible to understand for speakers of languages lacking relevant vocabulary. The weak version suggests language influences but doesn't determine thought, subtly shaping cognitive patterns and perceptions.\n\nEmpirical evidence supports the weak but not the strong version. Studies show language affects color perception, spatial reasoning, and time conceptualization. For example, speakers of languages without distinct words for blue and green may categorize these colors differently than English speakers. However, people can learn new concepts even when their language lacks corresponding words, contradicting the strong deterministic claim. The hypothesis remains influential in cognitive science and anthropology, reminding us that language and culture shape—though not imprison—human cognition in complex ways.",
    questions: [
      {
        id: 74,
        text: "The strong version of the Sapir-Whorf hypothesis claims that:",
        options: [
          "All languages are equally expressive",
          "Language influences thought",
          "Thought determines language",
          "Language determines thought, making some concepts impossible without relevant vocabulary"
        ],
        correct: 3,
        explanation: "The passage states the strong version 'claims language determines thought, making certain concepts impossible to understand for speakers of languages lacking relevant vocabulary.'"
      },
      {
        id: 75,
        text: "According to the passage, empirical evidence:",
        options: [
          "Disproves all versions of the hypothesis",
          "Supports the weak but not the strong version",
          "Remains inconclusive",
          "Proves the strong version correct"
        ],
        correct: 1,
        explanation: "The passage explicitly states 'Empirical evidence supports the weak but not the strong version.'"
      }
    ]
  },
  {
    id: 31,
    passage: "Ocean acidification, sometimes called climate change's 'equally evil twin,' occurs when atmospheric carbon dioxide dissolves in seawater, forming carbonic acid and lowering ocean pH. Since the industrial revolution, ocean pH has decreased by approximately 0.1 units—a 30% increase in acidity. This change threatens marine ecosystems, particularly organisms with calcium carbonate shells or skeletons, including coral, mollusks, and some plankton species. Lower pH reduces carbonate availability, making it harder for these organisms to build and maintain their structures.\n\nThe consequences extend beyond individual species to entire food webs. Pteropods, tiny swimming snails that form calcium carbonate shells, serve as crucial food sources for salmon, whales, and other species. Their decline could cascade through marine ecosystems. Coral reefs, already stressed by warming waters, face compounded challenges from acidification. Unlike atmospheric carbon dioxide, which disperses relatively quickly, ocean acidification persists for millennia even after emissions cease. This long timescale makes prevention more critical than remediation—damage done today will affect ocean chemistry for thousands of years.",
    questions: [
      {
        id: 76,
        text: "Ocean acidification is caused by:",
        options: [
          "Melting polar ice",
          "Overfishing",
          "Atmospheric carbon dioxide dissolving in seawater",
          "Industrial waste dumped in oceans"
        ],
        correct: 2,
        explanation: "The passage states ocean acidification 'occurs when atmospheric carbon dioxide dissolves in seawater, forming carbonic acid and lowering ocean pH.'"
      },
      {
        id: 77,
        text: "According to the passage, ocean acidification is particularly concerning because:",
        options: [
          "It increases ocean temperature",
          "Its effects persist for millennia",
          "It can be quickly reversed",
          "It only affects a few species"
        ],
        correct: 1,
        explanation: "The passage emphasizes 'ocean acidification persists for millennia even after emissions cease' and 'damage done today will affect ocean chemistry for thousands of years.'"
      },
      {
        id: 78,
        text: "Pteropods are mentioned in the passage as an example of:",
        options: [
          "Species unaffected by acidification",
          "Predators at the top of food chains",
          "Organisms that thrive in acidic conditions",
          "A key food source whose decline could affect entire ecosystems"
        ],
        correct: 3,
        explanation: "The passage states pteropods 'serve as crucial food sources for salmon, whales, and other species' and 'Their decline could cascade through marine ecosystems.'"
      }
    ]
  },
  {
    id: 32,
    passage: "The concept of creative destruction, coined by economist Joseph Schumpeter, describes how innovation constantly revolutionizes economic structures from within, destroying old industries while creating new ones. The automobile industry destroyed the horse-and-buggy trade; digital photography eliminated film-based photography; streaming services disrupted traditional media. This process drives economic growth but creates significant short-term disruption for workers and communities dependent on obsolete industries.\n\nManaging creative destruction poses policy challenges. Unrestricted, it generates inequality as benefits accrue to innovators while displaced workers struggle. Conversely, excessive protection of existing industries stifles innovation and competitiveness. Most economists advocate balanced approaches: allowing competition and innovation while providing transition assistance—retraining programs, unemployment insurance, and regional development initiatives. The key insight is recognizing that creative destruction, while painful, ultimately raises living standards through productivity improvements and new opportunities, provided society helps those displaced by the transition.",
    questions: [
      {
        id: 79,
        text: "Creative destruction refers to:",
        options: [
          "Artistic innovation",
          "Environmental degradation from manufacturing",
          "Innovation destroying old industries while creating new ones",
          "Industrial vandalism"
        ],
        correct: 2,
        explanation: "The passage defines creative destruction as how 'innovation constantly revolutionizes economic structures from within, destroying old industries while creating new ones.'"
      },
      {
        id: 80,
        text: "According to the passage, most economists advocate:",
        options: [
          "Balanced approaches with transition assistance",
          "Preventing all economic disruption",
          "Protecting all existing industries",
          "Unrestricted creative destruction"
        ],
        correct: 0,
        explanation: "The passage states 'Most economists advocate balanced approaches: allowing competition and innovation while providing transition assistance.'"
      }
    ]
  },
  {
    id: 33,
    passage: "Epigenetics studies how environmental factors and behaviors can influence gene expression without changing the DNA sequence itself. Chemical tags added to DNA and associated proteins can switch genes on or off, affecting how cells read genes. These epigenetic changes can result from diet, stress, toxins, and other environmental exposures. Remarkably, some epigenetic modifications can be inherited, meaning parents' environmental experiences may influence their offspring's health.\n\nThis discovery has revolutionary implications for medicine and public health. It helps explain why identical twins with the same DNA develop different diseases. It suggests that prenatal and early childhood experiences can have lifelong health consequences through epigenetic mechanisms. However, it also offers hope: unlike DNA mutations, epigenetic changes are potentially reversible. Lifestyle modifications—diet, exercise, stress management—might reverse harmful epigenetic patterns. This research challenges genetic determinism and emphasizes that genes and environment interact in complex, dynamic ways throughout life.",
    questions: [
      {
        id: 81,
        text: "Epigenetic changes differ from DNA mutations in that they:",
        options: [
          "Change the DNA sequence",
          "Cannot be studied scientifically",
          "Are always harmful",
          "Affect gene expression without changing DNA sequence"
        ],
        correct: 3,
        explanation: "The passage states epigenetics studies 'how environmental factors and behaviors can influence gene expression without changing the DNA sequence itself.'"
      },
      {
        id: 82,
        text: "According to the passage, epigenetic changes offer hope because they:",
        options: [
          "Prevent all diseases",
          "Cannot be inherited",
          "Are potentially reversible",
          "Only affect adults"
        ],
        correct: 2,
        explanation: "The passage states 'Unlike DNA mutations, epigenetic changes are potentially reversible' and lifestyle modifications 'might reverse harmful epigenetic patterns.'"
      },
      {
        id: 83,
        text: "The passage uses identical twins as an example to illustrate:",
        options: [
          "How same DNA can lead to different outcomes due to epigenetics",
          "Why genetics is irrelevant",
          "The superiority of environmental factors",
          "That twins always develop the same diseases"
        ],
        correct: 0,
        explanation: "The passage states epigenetics 'helps explain why identical twins with the same DNA develop different diseases,' showing how environment affects gene expression."
      }
    ]
  },
  {
    id: 34,
    passage: "The paradox of choice describes how having too many options can decrease satisfaction and increase anxiety rather than enhancing freedom and happiness. Psychologist Barry Schwartz argues that while some choice is better than none, excessive options overwhelm decision-making capacity. People facing numerous choices experience greater difficulty deciding, more regret about unchosen alternatives, and higher expectations that chosen options should be perfect.\n\nThis phenomenon has practical implications for marketing, policy, and personal well-being. Retailers limiting product variety sometimes see increased sales as customers face less decision paralysis. Healthcare patients overwhelmed by treatment options may delay important decisions. Simplifying choices—establishing sensible defaults, organizing options into categories, or limiting selections—can improve decision quality and satisfaction. However, the optimal amount of choice varies by individual and context. The paradox reminds us that more options don't automatically improve outcomes and that thoughtful choice architecture can enhance decision-making.",
    questions: [
      {
        id: 84,
        text: "The paradox of choice suggests that excessive options can lead to:",
        options: [
          "Better decisions",
          "Faster decision-making",
          "Increased satisfaction",
          "Decision paralysis and decreased satisfaction"
        ],
        correct: 3,
        explanation: "The passage states excessive options 'can decrease satisfaction and increase anxiety' and cause 'greater difficulty deciding, more regret...and higher expectations.'"
      },
      {
        id: 85,
        text: "According to the passage, retailers sometimes increase sales by:",
        options: [
          "Raising prices",
          "Adding more product variety",
          "Limiting product variety to reduce decision paralysis",
          "Eliminating customer choice"
        ],
        correct: 2,
        explanation: "The passage states 'Retailers limiting product variety sometimes see increased sales as customers face less decision paralysis.'"
      }
    ]
  },
  {
    id: 35,
    passage: "Vertical farming represents an innovative approach to agriculture, growing crops in vertically stacked layers within controlled indoor environments. Using technologies like hydroponics, aeroponics, and LED lighting, vertical farms can produce food year-round regardless of outdoor weather conditions. These systems use significantly less water than traditional farming—up to 95% less in some cases—and require no pesticides since pests can be excluded from controlled environments.\n\nProponents highlight several advantages beyond resource efficiency. Vertical farms can be located in urban areas, reducing transportation costs and emissions while providing fresh produce to city dwellers. They enable farming in climates or locations unsuitable for traditional agriculture. However, vertical farming faces significant challenges. High energy costs for artificial lighting and climate control make it currently economical only for high-value crops like leafy greens and herbs. The technology cannot yet economically produce staple crops like wheat or rice. Whether vertical farming becomes a major food source or remains a niche solution depends largely on reducing energy costs and expanding viable crop varieties.",
    questions: [
      {
        id: 86,
        text: "Vertical farming uses less water than traditional farming because:",
        options: [
          "Vertical farms are located near rivers",
          "Rain provides all necessary water",
          "Crops need less water indoors",
          "Controlled systems recycle and optimize water use"
        ],
        correct: 3,
        explanation: "The passage indicates controlled indoor environments with hydroponics and aeroponics enable water efficiency, using 'up to 95% less in some cases.'"
      },
      {
        id: 87,
        text: "According to the passage, vertical farming is currently economical for:",
        options: [
          "High-value crops like leafy greens and herbs",
          "Animal feed production",
          "All crop types",
          "Staple crops like wheat and rice"
        ],
        correct: 0,
        explanation: "The passage states 'High energy costs...make it currently economical only for high-value crops like leafy greens and herbs.'"
      },
      {
        id: 88,
        text: "The main challenge facing widespread vertical farming adoption is:",
        options: [
          "Lack of water",
          "High energy costs",
          "Too much sunlight",
          "Pest infestations"
        ],
        correct: 1,
        explanation: "The passage emphasizes 'High energy costs for artificial lighting and climate control' as the main economic barrier."
      }
    ]
  },
  {
    id: 36,
    passage: "The hedonic treadmill, also called hedonic adaptation, describes the tendency for people to return to a relatively stable baseline level of happiness despite major positive or negative life changes. Lottery winners experience temporary joy but typically return to their previous happiness levels within a year or two. Similarly, accident victims who become paraplegic often adapt and report life satisfaction closer to their pre-accident levels than most people expect.\n\nThis phenomenon has profound implications for how we pursue happiness. Material acquisitions and achievements provide temporary satisfaction but rarely produce lasting happiness increases. The hedonic treadmill helps explain why wealthier nations aren't proportionally happier than moderately prosperous ones beyond a certain threshold. However, some factors resist adaptation better than others. Social relationships, meaningful work, and personal growth tend to provide more sustained satisfaction than material goods. Understanding the hedonic treadmill suggests that pursuing experiences over possessions and investing in relationships may offer more reliable paths to well-being than chasing external achievements.",
    questions: [
      {
        id: 89,
        text: "The hedonic treadmill describes:",
        options: [
          "Exercise's effect on mood",
          "A fitness routine for mental health",
          "The tendency to return to baseline happiness despite life changes",
          "How wealth creates permanent happiness"
        ],
        correct: 2,
        explanation: "The passage defines the hedonic treadmill as 'the tendency for people to return to a relatively stable baseline level of happiness despite major positive or negative life changes.'"
      },
      {
        id: 90,
        text: "According to the passage, which factor provides more sustained satisfaction?",
        options: [
          "External achievements",
          "Material acquisitions",
          "Lottery winnings",
          "Social relationships and meaningful work"
        ],
        correct: 3,
        explanation: "The passage states 'Social relationships, meaningful work, and personal growth tend to provide more sustained satisfaction than material goods.'"
      }
    ]
  },
  {
    id: 37,
    passage: "Antibiotics revolutionized medicine by providing effective treatments for bacterial infections that once killed millions. However, the misuse and overuse of antibiotics has led to the emergence of antibiotic-resistant bacteria, sometimes called 'superbugs.' When antibiotics are used unnecessarily or patients fail to complete prescribed courses, bacteria that survive the partial treatment can develop resistance mechanisms. These resistant bacteria then multiply and spread, rendering previously effective antibiotics useless.\n\nThe crisis of antibiotic resistance threatens to return medicine to a pre-antibiotic era. Common infections could again become deadly, and routine surgeries would carry much greater risk without effective antibiotics to prevent post-operative infections. New antibiotic development has slowed as pharmaceutical companies find them less profitable than drugs for chronic conditions. Addressing this crisis requires multiple strategies: strict antibiotic stewardship in hospitals and farms, development of rapid diagnostic tests to ensure appropriate prescribing, investment in new antibiotic research, and public education about proper antibiotic use. The problem developed over decades and will require sustained, coordinated effort to resolve.",
    questions: [
      {
        id: 91,
        text: "Antibiotic resistance develops when:",
        options: [
          "Antibiotics are stored improperly",
          "Patients take antibiotics as prescribed",
          "Bacteria surviving partial treatment develop resistance mechanisms",
          "Doctors prescribe too many different antibiotics"
        ],
        correct: 2,
        explanation: "The passage states 'When antibiotics are used unnecessarily or patients fail to complete prescribed courses, bacteria that survive the partial treatment can develop resistance mechanisms.'"
      },
      {
        id: 92,
        text: "According to the passage, antibiotic development has slowed because:",
        options: [
          "Governments ban new antibiotic research",
          "The science is too difficult",
          "Pharmaceutical companies find them less profitable than drugs for chronic conditions",
          "No new bacteria exist"
        ],
        correct: 2,
        explanation: "The passage explicitly states 'New antibiotic development has slowed as pharmaceutical companies find them less profitable than drugs for chronic conditions.'"
      },
      {
        id: 93,
        text: "The passage suggests that without effective antibiotics:",
        options: [
          "Hospitals would close",
          "Medicine would improve",
          "Routine surgeries would carry greater risk",
          "Infections would disappear"
        ],
        correct: 2,
        explanation: "The passage states 'Common infections could again become deadly, and routine surgeries would carry much greater risk without effective antibiotics to prevent post-operative infections.'"
      }
    ]
  },
  {
    id: 38,
    passage: "The Streisand effect describes how attempts to censor or hide information can paradoxically increase its visibility. The phenomenon takes its name from a 2003 incident when Barbara Streisand sued to suppress photographs of her California home, inadvertently drawing far more attention to the images than they would have otherwise received. The internet age has amplified this effect, as content can be rapidly copied and redistributed before suppression attempts succeed.\n\nThe Streisand effect has important implications for privacy, corporate reputation management, and censorship debates. Companies attempting to suppress negative reviews or criticism often find their efforts backfire, generating more publicity for the very information they sought to hide. Governments attempting internet censorship face similar challenges, as suppression attempts can make forbidden content more appealing and motivate people to seek it out. The phenomenon demonstrates the limits of information control in networked societies and suggests that transparency and engagement may be more effective strategies than suppression when dealing with unwanted information.",
    questions: [
      {
        id: 94,
        text: "The Streisand effect occurs when:",
        options: [
          "Censorship attempts increase information visibility",
          "Photographs improve in quality",
          "Celebrities become more popular",
          "Lawsuits succeed in court"
        ],
        correct: 0,
        explanation: "The passage defines the Streisand effect as how 'attempts to censor or hide information can paradoxically increase its visibility.'"
      },
      {
        id: 95,
        text: "According to the passage, the internet age has:",
        options: [
          "Had no impact on information suppression",
          "Made censorship more effective",
          "Eliminated the Streisand effect",
          "Amplified the Streisand effect"
        ],
        correct: 3,
        explanation: "The passage states 'The internet age has amplified this effect, as content can be rapidly copied and redistributed before suppression attempts succeed.'"
      }
    ]
  },
  {
    id: 39,
    passage: "Geothermal energy harnesses heat from Earth's interior to generate electricity or provide direct heating. Unlike solar and wind power, geothermal energy provides consistent baseload power regardless of weather or time of day. Enhanced geothermal systems can potentially access heat resources in locations previously considered unsuitable for geothermal development by drilling deeper and fracturing rock to create artificial reservoirs.\n\nDespite these advantages, geothermal energy faces significant barriers to widespread adoption. Drilling costs are high, and not all locations have accessible geothermal resources. Enhanced geothermal systems, while expanding the range of viable locations, have raised concerns about induced seismicity—human-caused earthquakes triggered by injecting fluids into geological formations. However, improved monitoring and injection protocols can minimize these risks. Geothermal energy's reliability and small physical footprint make it an attractive complement to variable renewable sources, and continued technological development may overcome current economic and technical limitations.",
    questions: [
      {
        id: 96,
        text: "Geothermal energy differs from solar and wind power in that it:",
        options: [
          "Requires no drilling",
          "Is completely free",
          "Provides consistent power regardless of weather",
          "Is available everywhere"
        ],
        correct: 2,
        explanation: "The passage states 'Unlike solar and wind power, geothermal energy provides consistent baseload power regardless of weather or time of day.'"
      },
      {
        id: 97,
        text: "Enhanced geothermal systems have raised concerns about:",
        options: [
          "Air pollution",
          "Induced seismicity",
          "Excessive costs",
          "Groundwater contamination"
        ],
        correct: 1,
        explanation: "The passage states enhanced systems 'have raised concerns about induced seismicity—human-caused earthquakes triggered by injecting fluids into geological formations.'"
      }
    ]
  },
  {
    id: 40,
    passage: "The broken windows theory, proposed by social scientists James Q. Wilson and George L. Kelling, suggests that visible signs of disorder and neglect—like broken windows—create an environment that encourages further crime and antisocial behavior. According to this theory, minor infractions left unaddressed signal that nobody cares, emboldening more serious criminal activity. The theory influenced policing strategies emphasizing addressing minor offenses and maintaining neighborhood order.\n\nThe broken windows approach remains controversial. Supporters credit it with reducing crime in cities like New York during the 1990s. Critics argue that correlation doesn't prove causation—crime decreased nationwide during this period for various reasons including demographic changes and economic improvement. Some research suggests aggressive enforcement of minor violations can damage police-community relations, particularly in minority neighborhoods, without necessarily preventing serious crime. The debate illustrates tensions between different approaches to public safety and raises questions about whether disorder causes crime or merely accompanies it.",
    questions: [
      {
        id: 98,
        text: "The broken windows theory proposes that:",
        options: [
          "Windows should be replaced immediately",
          "Property crime is the most serious offense",
          "Crime cannot be prevented",
          "Visible disorder encourages further crime"
        ],
        correct: 3,
        explanation: "The passage states the theory 'suggests that visible signs of disorder and neglect...create an environment that encourages further crime and antisocial behavior.'"
      },
      {
        id: 99,
        text: "Critics of the broken windows approach argue that:",
        options: [
          "Disorder never accompanies crime",
          "It should be applied more strictly",
          "It eliminated all crime",
          "Correlation with crime reduction doesn't prove causation"
        ],
        correct: 3,
        explanation: "The passage states 'Critics argue that correlation doesn't prove causation—crime decreased nationwide during this period for various reasons.'"
      },
      {
        id: 100,
        text: "According to the passage, aggressive enforcement of minor violations can:",
        options: [
          "Damage police-community relations, particularly in minority neighborhoods",
          "Increase property values",
          "Always improve police-community relations",
          "Eliminate serious crime completely"
        ],
        correct: 0,
        explanation: "The passage states 'Some research suggests aggressive enforcement of minor violations can damage police-community relations, particularly in minority neighborhoods.'"
      }
    ]
  },
  {
    id: 41,
    passage: "The attention economy describes how human attention has become a scarce and valuable resource in the information age. With limitless digital content competing for limited attention spans, businesses increasingly structure their operations around capturing and monetizing attention. Social media platforms, news sites, and streaming services employ sophisticated techniques—from algorithmic content curation to notification systems—designed to maximize user engagement.\n\nThis competition for attention has concerning implications. The most engaging content isn't necessarily the most informative or beneficial—outrage, sensationalism, and superficiality often prove more attention-grabbing than nuanced analysis. Users face constant interruptions and find sustained focus increasingly difficult. Some researchers link the attention economy to rising anxiety, depression, and political polarization. As attention becomes commodified, critics argue we need frameworks treating it as a finite resource deserving protection, much like we protect physical environments from pollution.",
    questions: [
      {
        id: 101,
        text: "The attention economy refers to:",
        options: [
          "Human attention as a scarce, valuable resource",
          "Attention deficit disorders",
          "Economic growth rates",
          "Banking regulations"
        ],
        correct: 0,
        explanation: "The passage states 'The attention economy describes how human attention has become a scarce and valuable resource in the information age.'"
      },
      {
        id: 102,
        text: "According to the passage, the most engaging content is often:",
        options: [
          "Academic research",
          "The most informative",
          "The most beneficial",
          "Outrage, sensationalism, and superficiality"
        ],
        correct: 3,
        explanation: "The passage states 'The most engaging content isn't necessarily the most informative or beneficial—outrage, sensationalism, and superficiality often prove more attention-grabbing.'"
      },
      {
        id: 103,
        text: "The passage suggests that attention should be:",
        options: [
          "Unlimited and unregulated",
          "Protected like a finite resource",
          "Ignored as a concern",
          "Maximized at all costs"
        ],
        correct: 1,
        explanation: "The passage states 'critics argue we need frameworks treating it as a finite resource deserving protection, much like we protect physical environments from pollution.'"
      }
    ]
  },
  {
    id: 42,
    passage: "Loss aversion, a fundamental concept in behavioral economics, describes how people feel losses more intensely than equivalent gains. Losing $100 causes more distress than finding $100 causes joy. This asymmetry affects decision-making profoundly. People take excessive risks to avoid losses while being overly cautious about potential gains. Investors hold losing stocks too long, hoping to break even, while selling winners too quickly to 'lock in' gains.\n\nLoss aversion explains numerous economic behaviors that seem irrational from traditional perspectives. It underlies the endowment effect—we value owned items more because giving them up feels like a loss. It explains why people rarely change insurance providers or cancel subscriptions—switching involves a sense of loss even if the new option is objectively better. Understanding loss aversion helps in framing choices: presenting options as losses rather than foregone gains can dramatically shift preferences.",
    questions: [
      {
        id: 104,
        text: "Loss aversion describes how:",
        options: [
          "Financial decisions are always rational",
          "Gains and losses feel equally intense",
          "People feel losses more intensely than equivalent gains",
          "People enjoy losses"
        ],
        correct: 2,
        explanation: "The passage states loss aversion 'describes how people feel losses more intensely than equivalent gains.'"
      },
      {
        id: 105,
        text: "According to the passage, loss aversion causes investors to:",
        options: [
          "Always make profitable trades",
          "Ignore all market trends",
          "Never invest in stocks",
          "Hold losing stocks too long and sell winners too quickly"
        ],
        correct: 3,
        explanation: "The passage states 'Investors hold losing stocks too long, hoping to break even, while selling winners too quickly to 'lock in' gains.'"
      }
    ]
  },
  {
    id: 43,
    passage: "Gene therapy aims to treat diseases by modifying patients' genetic material. In some approaches, functional genes are inserted to replace defective ones; in others, disease-causing genes are inactivated. Early gene therapy trials in the 1990s faced setbacks including patient deaths, leading to stringent safety requirements. However, recent advances have produced remarkable successes, including treatments for inherited blindness, certain cancers, and sickle cell disease.\n\nTwo types of gene therapy exist: somatic (affecting only the patient) and germline (affecting reproductive cells and thus future generations). While somatic therapy treats individuals without hereditary effects, germline editing could eliminate genetic diseases from family lines—but also raises profound ethical questions. Should humans permanently alter the human germline? Who decides which traits are 'defects' versus natural variation? Most countries ban germline editing pending resolution of these ethical issues.",
    questions: [
      {
        id: 106,
        text: "Gene therapy works by:",
        options: [
          "Dietary changes",
          "Modifying patients' genetic material",
          "Physical therapy exercises",
          "Providing traditional medications"
        ],
        correct: 1,
        explanation: "The passage states gene therapy 'aims to treat diseases by modifying patients' genetic material.'"
      },
      {
        id: 107,
        text: "Germline editing differs from somatic therapy in that it:",
        options: [
          "Has no ethical concerns",
          "Costs less",
          "Is completely safe",
          "Affects reproductive cells and future generations"
        ],
        correct: 3,
        explanation: "The passage distinguishes somatic therapy ('affecting only the patient') from germline editing ('affecting reproductive cells and thus future generations')."
      }
    ]
  },
  {
    id: 44,
    passage: "The digital divide refers to inequality in access to information technology between demographic groups or geographic regions. While internet connectivity has expanded globally, significant gaps remain. In developed nations, the divide often runs along socioeconomic lines—lower-income households have less reliable internet access and older devices. Globally, entire regions lack basic infrastructure. These disparities affect education, employment, healthcare access, and civic participation.\n\nThe pandemic highlighted critical consequences of digital inequality. Students without internet struggled with remote learning, falling behind peers with reliable connections. Telehealth benefited those with technology while excluding others. Remote work options remained unavailable to those lacking equipment or connectivity. Addressing the digital divide requires infrastructure investment, affordable service, device access, and digital literacy training.",
    questions: [
      {
        id: 108,
        text: "The digital divide refers to:",
        options: [
          "Software preferences",
          "Computer programming languages",
          "Inequality in access to information technology",
          "Internet speed differences"
        ],
        correct: 2,
        explanation: "The passage defines the digital divide as 'inequality in access to information technology between demographic groups or geographic regions.'"
      },
      {
        id: 109,
        text: "According to the passage, addressing the digital divide requires:",
        options: [
          "Infrastructure, affordable service, devices, and digital literacy training",
          "Only providing free devices",
          "Waiting for natural market solutions",
          "Eliminating all technology"
        ],
        correct: 0,
        explanation: "The passage states 'Addressing the digital divide requires infrastructure investment, affordable service, device access, and digital literacy training.'"
      },
      {
        id: 110,
        text: "The pandemic demonstrated that digital inequality affects:",
        options: [
          "Nobody significantly",
          "Only rural areas",
          "Education, healthcare, and work opportunities",
          "Only entertainment options"
        ],
        correct: 2,
        explanation: "The passage describes how the pandemic showed digital inequality affecting education, healthcare, and work opportunities."
      }
    ]
  },
  {
    id: 45,
    passage: "Behavioral economics challenges traditional economic theory's assumption that people make rational decisions. Instead, it recognizes that psychological factors, cognitive biases, and emotional states systematically affect economic choices. People use mental shortcuts that sometimes lead to suboptimal decisions. We're influenced by how choices are presented (framing effects), overvalue immediate rewards versus delayed ones (present bias), and follow what others do (herd behavior).\n\nThese insights have practical applications in policy and business. 'Nudges'—subtle changes in choice architecture—can encourage better decisions without restricting freedom. Automatic enrollment in retirement savings plans, with opt-out options, dramatically increases participation compared to opt-in systems, even though freedom to choose remains identical.",
    questions: [
      {
        id: 111,
        text: "Behavioral economics differs from traditional economics by:",
        options: [
          "Assuming perfect rationality",
          "Recognizing psychological factors affect economic decisions",
          "Eliminating mathematics",
          "Ignoring all data"
        ],
        correct: 1,
        explanation: "The passage states behavioral economics 'recognizes that psychological factors, cognitive biases, and emotional states systematically affect economic choices.'"
      },
      {
        id: 112,
        text: "According to the passage, 'nudges' are effective because they:",
        options: [
          "Force specific choices",
          "Require no thought",
          "Subtly change choice architecture while preserving freedom",
          "Eliminate all options"
        ],
        correct: 2,
        explanation: "The passage defines nudges as 'subtle changes in choice architecture' that 'encourage better decisions without restricting freedom.'"
      }
    ]
  },
  {
    id: 46,
    passage: "CRISPR-Cas9 gene editing technology has revolutionized genetic research with its precision, ease, and cost-effectiveness. Unlike earlier methods, CRISPR allows scientists to target specific DNA sequences and make precise modifications. This tool has accelerated research into genetic diseases, enabled development of disease-resistant crops, and opened possibilities for treating previously incurable conditions. Its relative simplicity means smaller labs can conduct experiments once restricted to well-funded institutions.\n\nHowever, CRISPR's accessibility raises concerns. The same tool enabling beneficial research could be misused for harmful purposes—creating dangerous pathogens or attempting enhancement of human capabilities in ethically problematic ways. The technology's power has outpaced regulatory frameworks. International scientific communities have called for moratoria on certain applications, particularly heritable human genome editing, pending fuller consideration of implications.",
    questions: [
      {
        id: 113,
        text: "CRISPR-Cas9 is significant because it:",
        options: [
          "Eliminates all diseases",
          "Requires no scientific knowledge",
          "Offers precise, easy, and cost-effective gene editing",
          "Is the first gene editing tool ever created"
        ],
        correct: 2,
        explanation: "The passage states CRISPR 'has revolutionized genetic research with its precision, ease, and cost-effectiveness.'"
      },
      {
        id: 114,
        text: "According to the passage, CRISPR's accessibility creates concerns because:",
        options: [
          "The same tool enabling beneficial research could be misused",
          "It's too expensive",
          "Few people can use it",
          "It doesn't actually work"
        ],
        correct: 0,
        explanation: "The passage states 'The same tool enabling beneficial research could be misused for harmful purposes.'"
      }
    ]
  },
  {
    id: 47,
    passage: "The concept of food miles—the distance food travels from production to consumption—emerged as an environmental metric in the 1990s. Local food advocates argue that reducing food miles decreases carbon emissions and supports local economies. The appeal is intuitive: surely food traveling thousands of miles generates more emissions than food grown nearby.\n\nHowever, food miles tell an incomplete story. Transportation represents only a fraction of food's total environmental impact. Production methods, processing, storage, and even how consumers travel to purchase food all matter. A study found that driving six miles round-trip to buy locally-grown vegetables can produce more emissions than shipping those vegetables across the country in an efficient cargo system.",
    questions: [
      {
        id: 115,
        text: "The concept of food miles measures:",
        options: [
          "Distance food travels from production to consumption",
          "Storage duration",
          "Price per pound",
          "Nutritional value of food"
        ],
        correct: 0,
        explanation: "The passage defines food miles as 'the distance food travels from production to consumption.'"
      },
      {
        id: 116,
        text: "According to the passage, food miles are an incomplete metric because:",
        options: [
          "Imported food has no carbon footprint",
          "All local food is better",
          "Distance is the only factor that matters",
          "Transportation represents only a fraction of total environmental impact"
        ],
        correct: 3,
        explanation: "The passage states 'Transportation represents only a fraction of food's total environmental impact. Production methods, processing, storage, and even how consumers travel to purchase food all matter.'"
      }
    ]
  },
  {
    id: 48,
    passage: "Telemedicine, the delivery of healthcare services through telecommunications technology, expanded dramatically during the COVID-19 pandemic. Video consultations allowed patients to receive care while minimizing disease exposure. Rural residents gained access to specialists previously requiring long-distance travel. Telemedicine proved particularly effective for mental health services, medication management, and routine follow-ups.\n\nHowever, telemedicine cannot fully replace in-person care. Physical examinations remain essential for many diagnoses. Technical difficulties and poor internet connectivity frustrate both patients and providers. Some patients, particularly elderly individuals less comfortable with technology, struggle with virtual appointments. Telemedicine's permanent role in healthcare will likely involve hybrid models combining virtual and in-person care.",
    questions: [
      {
        id: 117,
        text: "According to the passage, telemedicine proved particularly effective for:",
        options: [
          "Emergency surgery",
          "Mental health services, medication management, and routine follow-ups",
          "Physical therapy only",
          "All medical conditions equally"
        ],
        correct: 1,
        explanation: "The passage explicitly states 'Telemedicine proved particularly effective for mental health services, medication management, and routine follow-ups.'"
      },
      {
        id: 118,
        text: "The passage suggests that telemedicine's future will likely involve:",
        options: [
          "Technology-only healthcare",
          "Returning to pre-pandemic norms completely",
          "Hybrid models combining virtual and in-person care",
          "Eliminating all in-person care"
        ],
        correct: 2,
        explanation: "The passage concludes 'Telemedicine's permanent role in healthcare will likely involve hybrid models combining virtual and in-person care.'"
      }
    ]
  },
  {
    id: 49,
    passage: "The marshmallow test, a famous psychological experiment from the 1960s, offered children a choice: eat one marshmallow immediately or wait 15 minutes and receive two marshmallows. The study found that children who delayed gratification tended to have better life outcomes years later—higher test scores, better health, fewer behavioral problems. These findings suggested that self-control predicts success.\n\nHowever, recent research complicates this narrative. Follow-up studies controlling for family background and economic circumstances found that environmental factors explained much of the correlation between delayed gratification and outcomes. Children from stable, affluent families could afford to trust that promised future rewards would materialize. Those from unstable environments learned that waiting often meant losing the immediate option without gaining the promised reward.",
    questions: [
      {
        id: 119,
        text: "The original marshmallow test suggested that:",
        options: [
          "Self-control cannot be measured",
          "All children prefer marshmallows",
          "Waiting is always impossible",
          "Delayed gratification predicts better life outcomes"
        ],
        correct: 3,
        explanation: "The passage states the study 'found that children who delayed gratification tended to have better life outcomes years later.'"
      },
      {
        id: 120,
        text: "Recent research suggests the marshmallow test may actually measure:",
        options: [
          "Trust in future stability as much as self-control",
          "Hunger levels",
          "Intelligence only",
          "Sugar preferences"
        ],
        correct: 0,
        explanation: "The passage explains that recent research shows environmental factors matter and that children from stable families 'could afford to trust that promised future rewards would materialize,' suggesting the test measures trust as much as self-control."
      }
    ]
  },
  {
    id: 50,
    passage: "Regenerative agriculture represents a farming approach focused on restoring soil health rather than merely sustaining it. Through practices like cover cropping, minimal tillage, crop rotation, and integrating livestock, regenerative farms build organic matter in soil, sequester carbon, improve water retention, and increase biodiversity. Proponents argue this approach can make agriculture climate-positive—absorbing more carbon than it emits—while improving yields and farm resilience.\n\nSkeptics question whether regenerative agriculture can feed a growing global population at the necessary scale. Some practices may reduce yields initially as soil rebuilds. Transitioning requires knowledge and investment that smallholder farmers may lack. Nevertheless, evidence suggests regenerative practices improve long-term farm productivity and environmental outcomes compared to conventional methods relying heavily on chemical inputs.",
    questions: [
      {
        id: 121,
        text: "Regenerative agriculture differs from conventional farming by focusing on:",
        options: [
          "Reducing all crop diversity",
          "Eliminating all livestock",
          "Restoring soil health",
          "Maximum chemical inputs"
        ],
        correct: 2,
        explanation: "The passage states regenerative agriculture is 'a farming approach focused on restoring soil health rather than merely sustaining it.'"
      },
      {
        id: 122,
        text: "According to the passage, challenges facing regenerative agriculture include:",
        options: [
          "Too much profit",
          "Initial yield reductions and knowledge requirements",
          "It improves soil too quickly",
          "Government prohibition"
        ],
        correct: 1,
        explanation: "The passage mentions 'Some practices may reduce yields initially as soil rebuilds' and 'Transitioning requires knowledge and investment that smallholder farmers may lack.'"
      },
      {
        id: 123,
        text: "Regenerative agriculture practices mentioned in the passage include all of the following EXCEPT:",
        options: [
          "Cover cropping",
          "Heavy chemical fertilization",
          "Minimal tillage",
          "Crop rotation"
        ],
        correct: 1,
        explanation: "The passage lists 'cover cropping, minimal tillage, crop rotation, and integrating livestock' as regenerative practices, while noting that conventional methods rely 'heavily on chemical inputs.'"
      },
      {
        id: 124,
        text: "Proponents argue regenerative agriculture can make farming climate-positive by:",
        options: [
          "Eliminating all crops",
          "Absorbing more carbon than it emits",
          "Using more fossil fuels",
          "Reducing all farming"
        ],
        correct: 1,
        explanation: "The passage states proponents argue 'this approach can make agriculture climate-positive—absorbing more carbon than it emits.'"
      },
      {
        id: 125,
        text: "The passage suggests that compared to conventional methods, regenerative practices:",
        options: [
          "Always reduce yields permanently",
          "Require no knowledge",
          "Improve long-term farm productivity and environmental outcomes",
          "Are identical in results"
        ],
        correct: 2,
        explanation: "The passage concludes that 'evidence suggests regenerative practices improve long-term farm productivity and environmental outcomes compared to conventional methods.'"
      }
    ]
  },
  {
    id: 51,
    passage: "The backfire effect describes how correcting misinformation can sometimes strengthen false beliefs rather than changing them. When people receive information contradicting their beliefs, particularly on politically charged issues, they may become more convinced of the original falsehood. This occurs because corrections threaten identity and worldview, triggering defensive reactions.\n\nThe backfire effect has concerning implications for combating misinformation in the digital age. Simply fact-checking false claims may prove insufficient or counterproductive. Research suggests more effective approaches: presenting corrections in ways affirming people's values rather than attacking their intelligence, using trusted messengers from within communities holding false beliefs, and addressing underlying concerns motivating belief in misinformation.",
    questions: [
      {
        id: 126,
        text: "The backfire effect occurs when:",
        options: [
          "No one believes misinformation",
          "People change their minds easily",
          "Correcting misinformation strengthens false beliefs",
          "All corrections work perfectly"
        ],
        correct: 2,
        explanation: "The passage defines the backfire effect as 'how correcting misinformation can sometimes strengthen false beliefs rather than changing them.'"
      }
    ]
  },
  {
    id: 52,
    passage: "Universal design creates products and environments usable by all people without requiring adaptation. Unlike accessibility retrofits added after initial design, universal design incorporates diverse needs from the start. Curb cuts benefit not only wheelchair users but also parents with strollers, delivery workers with carts, and travelers with luggage.\n\nBeyond physical accessibility, universal design principles apply to digital interfaces, educational materials, and communication systems. Captions help not only deaf individuals but also people in noisy environments or non-native speakers. High-contrast text benefits those with vision impairments and anyone reading in bright sunlight.",
    questions: [
      {
        id: 127,
        text: "Universal design differs from accessibility retrofits by:",
        options: [
          "Incorporating diverse needs from initial design",
          "Being more expensive",
          "Requiring government mandates",
          "Only helping disabled people"
        ],
        correct: 0,
        explanation: "The passage contrasts 'accessibility retrofits added after initial design' with universal design which 'incorporates diverse needs from the start.'"
      },
      {
        id: 128,
        text: "According to the passage, curb cuts are an example of universal design because they:",
        options: [
          "Cost nothing to install",
          "Are required by law",
          "Only benefit wheelchair users",
          "Benefit multiple groups of users"
        ],
        correct: 3,
        explanation: "The passage states curb cuts 'benefit not only wheelchair users but also parents with strollers, delivery workers with carts, and travelers with luggage.'"
      }
    ]
  },
  {
    id: 53,
    passage: "Invasive species, organisms introduced to ecosystems where they don't naturally occur, can devastate native ecosystems. Without natural predators or competitors, invasive species often multiply rapidly, outcompeting native species for resources. The brown tree snake eliminated most bird species from Guam. Zebra mussels clog water infrastructure and alter aquatic ecosystems throughout North America.\n\nPreventing invasive species proves far more effective and cost-efficient than attempting eradication after establishment. Border inspections screen for prohibited species, while ballast water regulations limit aquatic invasions from international shipping. However, global trade and travel make complete prevention impossible.",
    questions: [
      {
        id: 129,
        text: "Invasive species often cause problems because:",
        options: [
          "They require special care",
          "They lack natural predators or competitors in new environments",
          "They're always poisonous",
          "They're smaller than native species"
        ],
        correct: 1,
        explanation: "The passage states 'Without natural predators or competitors, invasive species often multiply rapidly, outcompeting native species for resources.'"
      },
      {
        id: 130,
        text: "According to the passage, the most effective approach to invasive species is:",
        options: [
          "Ignoring the problem",
          "Introducing more species",
          "Prevention before establishment",
          "Eradication after establishment"
        ],
        correct: 2,
        explanation: "The passage states 'Preventing invasive species proves far more effective and cost-efficient than attempting eradication after establishment.'"
      }
    ]
  },
  {
    id: 54,
    passage: "Deepfake technology uses artificial intelligence to create convincing fake videos and audio recordings of people saying or doing things they never actually did. By analyzing thousands of images or recordings, AI can learn to realistically replicate someone's appearance, voice, and mannerisms. While the technology has legitimate applications in entertainment and education, it poses serious threats to truth, privacy, and security.\n\nCombating deepfakes requires technical and social solutions. Detection algorithms attempt to identify artificial content, though it's an arms race as creation and detection technologies both improve. Digital provenance systems could verify content authenticity, but require adoption by content creators and platforms. Media literacy education helps people critically evaluate online content.",
    questions: [
      {
        id: 131,
        text: "Deepfake technology works by:",
        options: [
          "Manual animation",
          "Simple photo editing",
          "Only copying audio",
          "Using AI to analyze and replicate appearance, voice, and mannerisms"
        ],
        correct: 3,
        explanation: "The passage states deepfakes use 'artificial intelligence to create convincing fake videos and audio recordings' and 'By analyzing thousands of images or recordings, AI can learn to realistically replicate someone's appearance, voice, and mannerisms.'"
      },
      {
        id: 132,
        text: "According to the passage, combating deepfakes involves:",
        options: [
          "Technical and social solutions including detection, verification, and education",
          "Ignoring the problem",
          "Banning all video",
          "Only technical solutions"
        ],
        correct: 0,
        explanation: "The passage discusses multiple approaches: 'Detection algorithms,' 'Digital provenance systems,' and 'Media literacy education.'"
      }
    ]
  },
  {
    id: 55,
    passage: "The concept of food sovereignty extends beyond food security—merely having enough food—to emphasize communities' rights to define their own food systems. Food sovereignty advocates argue that communities should control how food is produced, distributed, and consumed rather than having these decisions made by distant corporations or international trade agreements.\n\nCritics argue that food sovereignty can conflict with efficiency gains from specialized, large-scale agriculture and international trade. They worry it might romanticize traditional practices while ignoring productivity improvements from modern agriculture necessary to feed growing populations.",
    questions: [
      {
        id: 133,
        text: "Food sovereignty differs from food security by emphasizing:",
        options: [
          "International trade agreements",
          "Communities' rights to define their own food systems",
          "Corporate control",
          "Only having enough food"
        ],
        correct: 1,
        explanation: "The passage states food sovereignty 'extends beyond food security—merely having enough food—to emphasize communities' rights to define their own food systems.'"
      },
      {
        id: 134,
        text: "Critics of food sovereignty worry that it might:",
        options: [
          "Eliminate all farming",
          "Strengthen corporations",
          "Romanticize traditional practices while ignoring productivity improvements",
          "Increase efficiency too much"
        ],
        correct: 2,
        explanation: "The passage states critics 'worry it might romanticize traditional practices while ignoring productivity improvements from modern agriculture.'"
      }
    ]
  },
  {
    id: 56,
    passage: "Deliberate practice, as defined by psychologist Anders Ericsson, goes beyond simply repeating activities. It involves focused effort on improving specific aspects of performance, immediate feedback, and working at the edge of one's abilities. Simply playing music casually for hours differs fundamentally from deliberate practice targeting specific techniques.\n\nThis distinction has implications for skill development across domains. Mere experience doesn't guarantee expertise—the quality of practice matters more than quantity. People can plateau after achieving adequate competence unless they engage in deliberate practice pushing beyond comfort zones.",
    questions: [
      {
        id: 135,
        text: "Deliberate practice differs from casual repetition by involving:",
        options: [
          "Avoiding challenges",
          "Only physical activities",
          "No effort or focus",
          "Focused effort on improvement, feedback, and working at ability edges"
        ],
        correct: 3,
        explanation: "The passage states deliberate practice 'involves focused effort on improving specific aspects of performance, immediate feedback, and working at the edge of one's abilities.'"
      },
      {
        id: 136,
        text: "According to the passage, experience alone doesn't guarantee expertise because:",
        options: [
          "Practice quality matters more than quantity",
          "Everyone becomes expert eventually",
          "Time doesn't exist",
          "Experience is harmful"
        ],
        correct: 0,
        explanation: "The passage states 'Mere experience doesn't guarantee expertise—the quality of practice matters more than quantity.'"
      }
    ]
  },
  {
    id: 57,
    passage: "Soil degradation threatens global food security as intensive agriculture depletes nutrients, erodes topsoil, and reduces organic matter. Industrial farming often prioritizes short-term yields over soil health, leading to declining productivity over time. The United Nations estimates that current practices could render most arable land unusable within decades if trends continue.\n\nReversing soil degradation requires fundamental changes in agricultural practices. Reducing tillage preserves soil structure and prevents erosion. Cover crops prevent nutrient loss and add organic matter. Crop rotation breaks pest cycles and maintains soil fertility.",
    questions: [
      {
        id: 137,
        text: "According to the passage, soil degradation results from:",
        options: [
          "Too much organic matter",
          "Natural weather patterns only",
          "Intensive agriculture depleting nutrients and eroding topsoil",
          "Excessive rainfall"
        ],
        correct: 2,
        explanation: "The passage states 'intensive agriculture depletes nutrients, erodes topsoil, and reduces organic matter' as causes of soil degradation."
      },
      {
        id: 138,
        text: "The passage suggests that reversing soil degradation requires:",
        options: [
          "Continuing current practices",
          "Only government intervention",
          "Fundamental changes in agricultural practices",
          "Ignoring the problem"
        ],
        correct: 2,
        explanation: "The passage states 'Reversing soil degradation requires fundamental changes in agricultural practices' and then lists specific practices."
      }
    ]
  },
  {
    id: 58,
    passage: "The resource curse, also called the paradox of plenty, describes how countries rich in natural resources often experience slower economic growth and worse development outcomes than resource-poor countries. Oil-rich nations frequently have lower GDP growth, more corruption, and less democracy than countries lacking such resources.\n\nSeveral mechanisms explain the resource curse. Resource wealth can cause currency appreciation that hurts other export industries, a phenomenon called 'Dutch disease.' Governments relying on resource revenues may neglect tax systems and accountability to citizens. However, the curse isn't inevitable—countries like Norway and Botswana have managed resource wealth successfully through strong institutions, transparent governance, and investment in human capital.",
    questions: [
      {
        id: 139,
        text: "The resource curse describes how countries with abundant natural resources often:",
        options: [
          "Automatically become democracies",
          "Have no development challenges",
          "Always prosper economically",
          "Experience slower growth and worse outcomes than resource-poor countries"
        ],
        correct: 3,
        explanation: "The passage states resource-rich countries 'often experience slower economic growth and worse development outcomes than resource-poor countries.'"
      },
      {
        id: 140,
        text: "According to the passage, 'Dutch disease' refers to:",
        options: [
          "Currency appreciation hurting other export industries",
          "Agricultural problems",
          "A medical condition",
          "Trade agreements"
        ],
        correct: 0,
        explanation: "The passage defines Dutch disease as when 'Resource wealth can cause currency appreciation that hurts other export industries.'"
      }
    ]
  },
  {
    id: 59,
    passage: "Biophilic design incorporates natural elements into built environments based on humans' innate tendency to seek connections with nature. This approach includes features like natural lighting, living walls, water features, natural materials, and views of vegetation. Research shows biophilic design reduces stress, improves cognitive function, accelerates healing in hospitals, and increases productivity in workplaces.\n\nAs urbanization intensifies and people spend more time indoors, biophilic design becomes increasingly relevant. However, implementing it faces obstacles. Developers may perceive it as expensive or impractical, despite long-term benefits often justifying initial costs.",
    questions: [
      {
        id: 141,
        text: "Biophilic design is based on the idea that:",
        options: [
          "Humans have an innate tendency to seek connections with nature",
          "Technology can replace nature",
          "Nature should be avoided",
          "All buildings should be identical"
        ],
        correct: 0,
        explanation: "The passage states biophilic design is 'based on humans' innate tendency to seek connections with nature.'"
      },
      {
        id: 142,
        text: "According to the passage, research shows biophilic design:",
        options: [
          "Works only in hospitals",
          "Has no measurable effects",
          "Only affects plant growth",
          "Reduces stress, improves cognitive function, and increases productivity"
        ],
        correct: 3,
        explanation: "The passage states 'Research shows biophilic design reduces stress, improves cognitive function, accelerates healing in hospitals, and increases productivity in workplaces.'"
      }
    ]
  },
  {
    id: 60,
    passage: "The attention restoration theory proposes that natural environments help restore depleted attention capacity. Modern life requires directed attention—voluntarily focusing on tasks while filtering distractions. This capacity is limited and becomes depleted through use, causing mental fatigue. Natural settings engage involuntary attention effortlessly—we notice rustling leaves or flowing water without effort. This allows directed attention to rest and recover.\n\nEmpirical research supports the theory. Studies show that time in nature or even viewing natural scenes improves concentration and cognitive performance. Hospital patients with window views of trees recover faster than those viewing walls.",
    questions: [
      {
        id: 143,
        text: "Directed attention differs from involuntary attention in that it:",
        options: [
          "Only works in nature",
          "Requires effort to focus while filtering distractions",
          "Cannot be restored",
          "Never depletes"
        ],
        correct: 1,
        explanation: "The passage defines directed attention as 'voluntarily focusing on tasks while filtering distractions' and states 'This capacity is limited and becomes depleted through use.'"
      },
      {
        id: 144,
        text: "According to the passage, natural environments restore attention by:",
        options: [
          "Eliminating all stimuli",
          "Preventing all thoughts",
          "Engaging involuntary attention effortlessly, allowing directed attention to rest",
          "Requiring intense concentration"
        ],
        correct: 2,
        explanation: "The passage explains 'Natural settings engage involuntary attention effortlessly...This allows directed attention to rest and recover.'"
      },
      {
        id: 145,
        text: "The hospital patient study showed that:",
        options: [
          "Patients with views of trees recovered faster than those viewing walls",
          "All patients recover at the same rate",
          "Nature has no effect on healing",
          "Windows should be eliminated"
        ],
        correct: 0,
        explanation: "The passage states 'Hospital patients with window views of trees recover faster than those viewing walls.'"
      },
      {
        id: 146,
        text: "According to the theory, mental fatigue occurs when:",
        options: [
          "We spend time in natural environments",
          "Directed attention capacity becomes depleted through use",
          "We engage involuntary attention",
          "We view natural scenes"
        ],
        correct: 1,
        explanation: "The passage states that directed attention 'is limited and becomes depleted through use, causing mental fatigue.'"
      },
      {
        id: 147,
        text: "The passage suggests that viewing natural scenes:",
        options: [
          "Has no measurable effect on performance",
          "Only helps if you're physically in nature",
          "Improves concentration and cognitive performance",
          "Depletes directed attention faster"
        ],
        correct: 2,
        explanation: "The passage notes that 'time in nature or even viewing natural scenes improves concentration and cognitive performance.'"
      },
      {
        id: 148,
        text: "Which example best illustrates involuntary attention according to the passage?",
        options: [
          "Studying for an exam while ignoring phone notifications",
          "Noticing rustling leaves without effort",
          "Deliberately focusing on a difficult task",
          "Filtering out background conversations"
        ],
        correct: 1,
        explanation: "The passage provides 'rustling leaves or flowing water' as examples of things we 'notice without effort' that engage involuntary attention."
      }
    ]
  },
  {
    id: 61,
    passage: "The peak-end rule, identified by psychologist Daniel Kahneman, describes how people judge experiences based primarily on the most intense moment (the peak) and the final moment (the end) rather than on the average of all moments. In medical procedures, patients' remembered pain correlates more with peak and end pain than with duration.\n\nThis cognitive quirk has practical implications. Understanding the peak-end rule can improve experience design across contexts. Hospitals might manage pain medication to reduce end-of-procedure discomfort even if this doesn't minimize total pain. Service businesses should ensure strong finishes to customer interactions.",
    questions: [
      {
        id: 149,
        text: "The theory proposes that natural environments help restore:",
        options: [
          "Physical strength only",
          "Depleted attention capacity",
          "Damaged eyesight",
          "Lost memories"
        ],
        correct: 1,
        explanation: "The passage states 'The attention restoration theory proposes that natural environments help restore depleted attention capacity.'"
      },
      {
        id: 150,
        text: "According to the passage, modern life causes mental fatigue because it:",
        options: [
          "Provides too much rest",
          "Requires no attention",
          "Requires directed attention that becomes depleted",
          "Eliminates all distractions"
        ],
        correct: 2,
        explanation: "The passage explains 'Modern life requires directed attention' and 'This capacity is limited and becomes depleted through use, causing mental fatigue.'"
      }
    ]
  },
  {
    id: 62,
    passage: "The circular economy model challenges the traditional linear economy of 'take, make, dispose' by designing waste out of systems. Products are created for durability, reuse, and eventual recycling rather than disposal. Materials circulate through the economy repeatedly rather than flowing from extraction to landfill.\n\nTransitioning to circular economy requires systemic change beyond individual recycling. Product design must facilitate disassembly and material recovery. Business models shift from selling products to providing services—leasing appliances, for instance, incentivizes manufacturers to build durable, repairable items.",
    questions: [
      {
        id: 151,
        text: "The passage suggests that transitioning to a circular economy requires:",
        options: [
          "Only individual recycling efforts",
          "Systemic change including product design and business models",
          "Eliminating all product manufacturing",
          "Focusing solely on waste disposal methods"
        ],
        correct: 1,
        explanation: "The passage states 'Transitioning to circular economy requires systemic change beyond individual recycling' and describes changes needed in product design and business models."
      },
      {
        id: 152,
        text: "The circular economy differs from the linear economy by:",
        options: [
          "Eliminating all manufacturing",
          "Increasing disposable products",
          "Extracting more resources",
          "Designing waste out and circulating materials repeatedly"
        ],
        correct: 3,
        explanation: "The passage contrasts the linear economy's 'take, make, dispose' with circular economy that designs 'waste out of systems' and keeps 'Materials circulate through the economy repeatedly.'"
      },
      {
        id: 153,
        text: "According to the passage, business models in a circular economy might involve:",
        options: [
          "Leasing products and providing services instead of selling",
          "Maximizing waste production",
          "Preventing all repairs",
          "Only selling disposable products"
        ],
        correct: 0,
        explanation: "The passage states 'Business models shift from selling products to providing services—leasing appliances, for instance, incentivizes manufacturers to build durable, repairable items.'"
      }
    ]
  },
  {
    id: 63,
    passage: "Stereotype threat occurs when awareness of negative stereotypes about one's group impairs performance. Women reminded of stereotypes about math ability perform worse on math tests than women not exposed to such reminders, even when actual abilities are identical. The anxiety and cognitive load from worrying about confirming stereotypes consume mental resources needed for the task itself.\n\nUnderstanding stereotype threat has educational and workplace implications. Simple interventions can reduce its effects: affirming students' values, emphasizing that intelligence is malleable rather than fixed, or ensuring diverse representation in challenging domains.",
    questions: [
      {
        id: 154,
        text: "Stereotype threat impairs performance by:",
        options: [
          "Having no effect",
          "Improving concentration",
          "Consuming mental resources through anxiety about confirming stereotypes",
          "Eliminating all ability"
        ],
        correct: 2,
        explanation: "The passage explains 'The anxiety and cognitive load from worrying about confirming stereotypes consume mental resources needed for the task itself.'"
      },
      {
        id: 155,
        text: "According to the passage, interventions that can reduce stereotype threat include:",
        options: [
          "Affirming values and emphasizing malleable intelligence",
          "Emphasizing fixed intelligence",
          "Preventing all testing",
          "Ignoring stereotypes completely"
        ],
        correct: 0,
        explanation: "The passage lists 'affirming students' values, emphasizing that intelligence is malleable rather than fixed' as interventions that reduce stereotype threat."
      }
    ]
  },
  {
    id: 64,
    passage: "Phenology, the study of seasonal biological events like flowering, migration, and hibernation, provides critical evidence of climate change impacts. Scientists compare current observations with historical records spanning decades or centuries. Across numerous species and regions, spring events occur earlier—flowers bloom weeks sooner, birds migrate earlier, and insects emerge ahead of schedule.\n\nMismatches in phenological shifts can cascade through ecosystems. If caterpillars emerge before leaves appear or after migrating birds arrive, both caterpillars and birds suffer. Pollinators and flowers may fall out of sync, affecting reproduction and food production.",
    questions: [
      {
        id: 156,
        text: "Phenology is the study of:",
        options: [
          "Geological formations",
          "Seasonal biological events",
          "Weather patterns only",
          "Chemical reactions"
        ],
        correct: 1,
        explanation: "The passage defines phenology as 'the study of seasonal biological events like flowering, migration, and hibernation.'"
      },
      {
        id: 157,
        text: "According to the passage, phenological mismatches can harm ecosystems when:",
        options: [
          "No changes occur",
          "Everything changes identically",
          "Only one species exists",
          "Interacting species respond differently to temperature changes"
        ],
        correct: 3,
        explanation: "The passage describes how mismatches occur when different species respond differently, giving examples of caterpillars and birds or pollinators and flowers falling out of sync."
      }
    ]
  },
  {
    id: 65,
    passage: "The Overton window describes the range of policies politically acceptable to mainstream voters at any given time. Policies outside this window seem radical or unthinkable regardless of their merits. The window can shift—ideas once unacceptable become mainstream while previously normal positions become extreme. Same-sex marriage moved from outside to inside the Overton window in many countries within a generation.\n\nUnderstanding the Overton window helps explain political change and advocacy strategy. Rather than proposing politically viable compromises, some activists deliberately advocate for positions beyond the current window, making previously radical ideas seem moderate by comparison.",
    questions: [
      {
        id: 158,
        text: "The Overton window refers to:",
        options: [
          "A voting system",
          "A type of architecture",
          "The range of politically acceptable policies",
          "Media censorship"
        ],
        correct: 2,
        explanation: "The passage defines the Overton window as 'the range of policies politically acceptable to mainstream voters at any given time.'"
      },
      {
        id: 159,
        text: "According to the passage, some activists advocate for positions beyond the current window in order to:",
        options: [
          "Confuse voters",
          "Ensure policy failure",
          "Prevent all change",
          "Make previously radical ideas seem moderate by comparison"
        ],
        correct: 3,
        explanation: "The passage states 'some activists deliberately advocate for positions beyond the current window, making previously radical ideas seem moderate by comparison.'"
      }
    ]
  },
  {
    id: 66,
    passage: "Horizontal gene transfer, where organisms acquire genetic material from other organisms rather than from parents, challenges traditional evolutionary tree thinking. While rare in complex organisms, it's common in bacteria. Bacteria can acquire antibiotic resistance genes from other bacterial species, accelerating resistance spread.\n\nUnderstanding horizontal gene transfer has implications beyond tracking resistance. It complicates evolutionary relationships—bacteria might share genes without sharing ancestry. It raises containment concerns for genetically modified organisms—engineered genes might spread to wild relatives or other species.",
    questions: [
      {
        id: 160,
        text: "Horizontal gene transfer differs from traditional inheritance by:",
        options: [
          "Occurring only in plants",
          "Being slower",
          "Never occurring in nature",
          "Acquiring genetic material from other organisms rather than parents"
        ],
        correct: 3,
        explanation: "The passage defines horizontal gene transfer as 'where organisms acquire genetic material from other organisms rather than from parents,' contrasting it with vertical inheritance."
      },
      {
        id: 161,
        text: "According to the passage, horizontal gene transfer helps explain:",
        options: [
          "How antibiotic resistance can emerge rapidly across bacterial populations",
          "Why evolution is impossible",
          "Why all organisms are identical",
          "Why resistance never spreads"
        ],
        correct: 0,
        explanation: "The passage states bacteria 'can acquire antibiotic resistance genes from other bacterial species, accelerating resistance spread.'"
      }
    ]
  },
  {
    id: 67,
    passage: "The attention economy's rise parallels the decline of what some call 'deep work'—focused, uninterrupted concentration on cognitively demanding tasks. Constant connectivity fragments attention into brief intervals. Email, messaging, and notifications interrupt flow states necessary for complex problem-solving and creative work.\n\nReclaiming capacity for deep work requires intentional effort in attention-saturated environments. Strategies include scheduling uninterrupted blocks, creating distraction-free spaces, and establishing clear boundaries around availability. However, organizational cultures often undermine individual efforts—workplaces that expect immediate responses make deep work difficult regardless of personal discipline.",
    questions: [
      {
        id: 162,
        text: "Deep work is characterized by:",
        options: [
          "Multitasking",
          "Focused, uninterrupted concentration on demanding tasks",
          "Constant interruptions",
          "Shallow thinking"
        ],
        correct: 1,
        explanation: "The passage defines deep work as 'focused, uninterrupted concentration on cognitively demanding tasks.'"
      },
      {
        id: 163,
        text: "According to the passage, individual efforts to enable deep work can be undermined by:",
        options: [
          "Too much focus",
          "Personal discipline",
          "Lack of technology",
          "Organizational cultures expecting immediate responses"
        ],
        correct: 3,
        explanation: "The passage states 'organizational cultures often undermine individual efforts—workplaces that expect immediate responses make deep work difficult regardless of personal discipline.'"
      }
    ]
  },
  {
    id: 68,
    passage: "Ecological succession describes how ecosystems change over time following disturbances. Primary succession occurs on bare substrate like volcanic rock, beginning with pioneer species like lichens that can survive harsh conditions. Over decades or centuries, soil develops and increasingly complex communities establish. Secondary succession follows less severe disturbances like fire or logging, occurring more rapidly since soil and seed banks remain.\n\nUnderstanding succession has practical applications in conservation and restoration. Restoration projects can accelerate succession by reintroducing keystone species or modifying conditions to favor desired communities. However, ecosystems don't necessarily return to pre-disturbance states—novel ecosystems may emerge, particularly under climate change.",
    questions: [
      {
        id: 164,
        text: "Primary succession differs from secondary succession in that it:",
        options: [
          "Begins on bare substrate without soil",
          "Never involves plants",
          "Occurs more rapidly",
          "Requires existing soil"
        ],
        correct: 0,
        explanation: "The passage distinguishes primary succession ('occurs on bare substrate like volcanic rock') from secondary succession which 'occurs more rapidly since soil and seed banks remain.'"
      },
      {
        id: 165,
        text: "According to the passage, ecosystems after disturbances:",
        options: [
          "Always return to exactly their previous state",
          "Don't necessarily return to pre-disturbance states and may form novel ecosystems",
          "Immediately become forests",
          "Never change"
        ],
        correct: 1,
        explanation: "The passage states 'ecosystems don't necessarily return to pre-disturbance states—novel ecosystems may emerge, particularly under climate change.'"
      }
    ]
  },
  {
    id: 69,
    passage: "The growth mindset, identified by psychologist Carol Dweck, involves believing that abilities can be developed through effort and learning. This contrasts with a fixed mindset—believing abilities are innate and unchangeable. People with growth mindsets view challenges as opportunities, persist through difficulties, and learn from criticism.\n\nResearch suggests mindsets significantly affect achievement and wellbeing. Growth mindset interventions—teaching students that intelligence is malleable—improve academic performance, particularly for struggling students. However, Dweck herself warns against 'false growth mindset'—praising effort without ensuring productive strategies or ignoring results.",
    questions: [
      {
        id: 166,
        text: "A growth mindset involves believing that:",
        options: [
          "Challenges should be avoided",
          "Effort doesn't matter",
          "Abilities can be developed through effort and learning",
          "Abilities are entirely innate"
        ],
        correct: 2,
        explanation: "The passage defines growth mindset as 'believing that abilities can be developed through effort and learning.'"
      },
      {
        id: 167,
        text: "According to the passage, Carol Dweck warns against:",
        options: [
          "Praising students ever",
          "'False growth mindset' that praises effort without ensuring productive strategies",
          "All growth mindset teaching",
          "Fixed mindsets only"
        ],
        correct: 1,
        explanation: "The passage states 'Dweck herself warns against 'false growth mindset'—praising effort without ensuring productive strategies or ignoring results.'"
      }
    ]
  },
  {
    id: 70,
    passage: "Desalination, the process of removing salt from seawater to produce fresh water, has become increasingly important as freshwater scarcity intensifies. Modern desalination plants use technologies like reverse osmosis, where pressure forces water through membranes that filter out salt and impurities. These facilities can produce millions of gallons of drinking water daily.\n\nHowever, desalination faces significant challenges. The process is energy-intensive, contributing to carbon emissions unless powered by renewables. Brine—the concentrated salt byproduct—must be disposed of carefully to avoid harming marine ecosystems. High costs make desalinated water expensive compared to traditional sources. Despite these limitations, desalination provides a drought-proof water source for coastal regions with few alternatives.",
    questions: [
      {
        id: 168,
        text: "Modern desalination primarily works through:",
        options: [
          "Chemical treatment",
          "Reverse osmosis using membranes",
          "Boiling seawater",
          "Filtering with sand"
        ],
        correct: 1,
        explanation: "The passage states 'Modern desalination plants use technologies like reverse osmosis, where pressure forces water through membranes that filter out salt and impurities.'"
      },
      {
        id: 169,
        text: "According to the passage, challenges facing desalination include:",
        options: [
          "Lack of available technology",
          "Too simple to implement",
          "It produces too much water",
          "Energy intensity and brine disposal"
        ],
        correct: 3,
        explanation: "The passage mentions 'The process is energy-intensive' and 'Brine—the concentrated salt byproduct—must be disposed of carefully' as challenges."
      },
      {
        id: 170,
        text: "In reverse osmosis, water is forced through membranes by:",
        options: [
          "Gravity alone",
          "Pressure",
          "Heat",
          "Magnetic force"
        ],
        correct: 1,
        explanation: "The passage states 'pressure forces water through membranes that filter out salt and impurities.'"
        },
        {
        id: 171,
        text: "Desalination contributes to carbon emissions unless:",
        options: [
          "It is performed at night",
          "Powered by renewable energy",
          "Done in small amounts",
          "Performed manually"
        ],
        correct: 1,
        explanation: "The passage states 'The process is energy-intensive, contributing to carbon emissions unless powered by renewables.'"
      },
      {
        id: 172,
        text: "Brine must be disposed of carefully to avoid:",
        options: [
          "Creating more fresh water",
          "Reducing energy costs",
          "Harming marine ecosystems",
          "Improving water quality"
        ],
        correct: 2,
        explanation: "The passage states 'Brine—the concentrated salt byproduct—must be disposed of carefully to avoid harming marine ecosystems.'"
      },
      {
        id: 173,
        text: "Desalination is described as drought-proof because:",
        options: [
          "It prevents all droughts",
          "It provides water regardless of rainfall",
          "It creates rain",
          "It eliminates the need for water"
        ],
        correct: 1,
        explanation: "The passage describes desalination as providing 'a drought-proof water source,' meaning it can produce water even when rainfall is scarce."
      },
      {
        id: 174,
        text: "The passage indicates that desalination is most practical for:",
        options: [
          "Desert regions far from coasts",
          "Areas with abundant freshwater",
          "Coastal regions with limited alternatives",
          "All regions equally"
        ],
        correct: 2,
        explanation: "The passage states desalination 'provides a drought-proof water source for coastal regions with few alternatives.'"
      },
      {
        id: 175,
        text: "Despite its challenges, desalination is valuable because it:",
        options: [
          "Costs less than all alternatives",
          "Requires no energy",
          "Provides a reliable water source where alternatives are limited",
          "Eliminates all water problems"
        ],
        correct: 2,
        explanation: "The passage concludes 'Despite these limitations, desalination provides a drought-proof water source for coastal regions with few alternatives.'"
      },
    ]
  },
  {
    id: 71,
    passage: "Quantum computing represents a paradigm shift from classical computing by exploiting quantum mechanical phenomena like superposition and entanglement. While classical computers process information as bits (0 or 1), quantum computers use qubits that can exist in multiple states simultaneously. This allows quantum computers to explore many possible solutions in parallel rather than sequentially.\n\nThe potential applications are transformative. Quantum computers could break current encryption methods, necessitating new cryptographic approaches. They could accelerate drug discovery by simulating molecular interactions. They might optimize complex logistics and financial portfolios. However, building stable quantum computers remains challenging. Qubits are extremely fragile, requiring near-absolute-zero temperatures and isolation from environmental interference.",
    questions: [
      {
        id: 176,
        text: "Quantum computers differ from classical computers by:",
        options: [
          "Processing information more slowly",
          "Requiring no electricity",
          "Using qubits that can exist in multiple states simultaneously",
          "Being larger"
        ],
        correct: 2,
        explanation: "The passage states 'While classical computers process information as bits (0 or 1), quantum computers use qubits that can exist in multiple states simultaneously.'"
      },
      {
        id: 177,
        text: "According to the passage, building quantum computers is challenging because:",
        options: [
          "They work too well",
          "They're too simple",
          "Qubits are extremely fragile and require extreme conditions",
          "No one wants them"
        ],
        correct: 2,
        explanation: "The passage states 'Qubits are extremely fragile, requiring near-absolute-zero temperatures and isolation from environmental interference.'"
      }
    ]
  },
  {
    id: 72,
    passage: "The concept of universal basic income (UBI) has gained attention as automation threatens employment. UBI would provide regular cash payments to all citizens regardless of employment status. Proponents argue it would reduce poverty, simplify welfare bureaucracy, and provide security as jobs disappear to automation. It could enable people to pursue education, start businesses, or engage in unpaid but socially valuable work.\n\nCritics question UBI's feasibility and effects. Providing meaningful payments to entire populations would cost trillions. Some worry it might discourage work, reducing economic productivity. Others argue targeted programs better serve specific needs than universal payments. Pilot programs have shown mixed results—reduced financial stress but unclear effects on employment.",
    questions: [
      {
        id: 178,
        text: "Proponents of UBI argue it could:",
        options: [
          "Only help wealthy people",
          "Eliminate all work",
          "Increase bureaucracy",
          "Reduce poverty and provide security amid automation"
        ],
        correct: 3,
        explanation: "The passage states proponents argue UBI 'would reduce poverty, simplify welfare bureaucracy, and provide security as jobs disappear to automation.'"
      },
      {
        id: 179,
        text: "Critics worry that UBI might:",
        options: [
          "Discourage work and reduce economic productivity",
          "Be too easy to implement",
          "Help too many people",
          "Cost too little"
        ],
        correct: 0,
        explanation: "The passage states 'Some worry it might discourage work, reducing economic productivity.'"
      }
    ]
  },
  {
    id: 73,
    passage: "Microplastics—plastic fragments smaller than 5 millimeters—have become ubiquitous environmental pollutants. They originate from larger plastic items breaking down, synthetic clothing fibers washing out, and microbeads in personal care products. These particles have been found everywhere from Arctic ice to the deepest ocean trenches, and even in human blood and organs.\n\nThe health effects remain poorly understood but concerning. Microplastics can carry toxic chemicals and pathogens. Laboratory studies show they can damage cells and trigger inflammation. The particles' small size allows them to cross biological barriers and accumulate in tissues. Reducing microplastic pollution requires addressing plastic use at its source—less single-use plastic, better wastewater treatment, and designing products that shed fewer fibers.",
    questions: [
      {
        id: 180,
        text: "Microplastics originate from:",
        options: [
          "Natural processes",
          "Only industrial sources",
          "Only ocean sources",
          "Larger plastics breaking down, clothing fibers, and product microbeads"
        ],
        correct: 3,
        explanation: "The passage states microplastics 'originate from larger plastic items breaking down, synthetic clothing fibers washing out, and microbeads in personal care products.'"
      },
      {
        id: 181,
        text: "According to the passage, microplastics are concerning because:",
        options: [
          "They can carry toxins, cross biological barriers, and accumulate in tissues",
          "They help the environment",
          "They don't exist",
          "They're too large"
        ],
        correct: 0,
        explanation: "The passage mentions 'Microplastics can carry toxic chemicals and pathogens,' damage cells, and 'The particles' small size allows them to cross biological barriers and accumulate in tissues.'"
      }
    ]
  },
  {
    id: 74,
    passage: "The attention span debate centers on whether digital technology has reduced human attention spans. Headlines claim goldfish now have longer attention spans than humans. However, research presents a more nuanced picture. While digital media consumption involves rapid task-switching and shortened engagement with individual items, humans can still maintain deep focus when motivated and free from distractions.\n\nThe issue isn't necessarily reduced capacity but changed habits and environments. Digital platforms design interfaces to maximize engagement through rapid content delivery and infinite scrolling. This trains behaviors favoring brief interactions over sustained attention. The solution may lie not in individual willpower but in redesigning digital environments to support rather than undermine deep engagement.",
    questions: [
      {
        id: 182,
        text: "According to the passage, the attention span issue involves:",
        options: [
          "Only affecting children",
          "Changed habits and environments rather than reduced capacity",
          "Permanently reduced brain capacity",
          "Being completely fictional"
        ],
        correct: 1,
        explanation: "The passage states 'The issue isn't necessarily reduced capacity but changed habits and environments.'"
      },
      {
        id: 183,
        text: "The passage suggests that solutions to attention challenges may require:",
        options: [
          "Eliminating all technology",
          "Redesigning digital environments to support deep engagement",
          "Nothing at all",
          "Only individual willpower"
        ],
        correct: 1,
        explanation: "The passage states 'The solution may lie not in individual willpower but in redesigning digital environments to support rather than undermine deep engagement.'"
      }
    ]
  },
  {
    id: 75,
    passage: "Rewilding involves restoring ecosystems by reintroducing key species and reducing human management. The approach contrasts with traditional conservation that maintains specific habitats through active intervention. Rewilding advocates argue that reintroducing apex predators and keystone species allows natural processes to reshape landscapes, increasing biodiversity and ecosystem resilience.\n\nWell-known examples include wolf reintroduction to Yellowstone, which triggered trophic cascades affecting everything from elk behavior to riverbank vegetation. However, rewilding faces challenges. Conflicts arise when predators threaten livestock. Large areas are needed for viable populations. Public acceptance varies, particularly in densely populated regions. Success requires balancing ecological goals with human needs and existing land uses.",
    questions: [
      {
        id: 184,
        text: "Rewilding differs from traditional conservation by:",
        options: [
          "Maintaining static habitats",
          "Eliminating all wildlife",
          "Reducing human management and letting natural processes reshape landscapes",
          "Requiring more human management"
        ],
        correct: 2,
        explanation: "The passage states rewilding 'involves restoring ecosystems by reintroducing key species and reducing human management,' contrasting with 'traditional conservation that maintains specific habitats through active intervention.'"
      },
      {
        id: 185,
        text: "The Yellowstone wolf reintroduction example demonstrated:",
        options: [
          "Trophic cascades affecting multiple aspects of the ecosystem",
          "Simple direct effects only",
          "Wolves have no ecological impact",
          "Only negative effects"
        ],
        correct: 0,
        explanation: "The passage states wolf reintroduction 'triggered trophic cascades affecting everything from elk behavior to riverbank vegetation.'"
      }
    ]
  },
  {
    id: 76,
    passage: "The Flynn effect's recent reversal in some developed countries has sparked debate about its causes. After decades of rising IQ scores, some nations now show declining scores, particularly in logical reasoning. Proposed explanations include changing educational priorities that emphasize different skills, increased screen time displacing activities that build cognitive abilities, and environmental factors like nutrition or pollution.\n\nHowever, declining scores don't necessarily indicate decreasing intelligence. Test performance reflects both innate capacity and practiced skills. Modern life may develop different cognitive abilities than standardized tests measure. The debate highlights questions about what intelligence tests actually measure and whether they capture the full range of human cognitive capabilities.",
    questions: [
      {
        id: 186,
        text: "The Flynn effect's reversal refers to:",
        options: [
          "Universal intelligence increases",
          "Rising IQ scores continuing",
          "IQ tests becoming easier",
          "Declining IQ scores in some developed countries after decades of increases"
        ],
        correct: 3,
        explanation: "The passage states 'After decades of rising IQ scores, some nations now show declining scores, particularly in logical reasoning.'"
      },
      {
        id: 187,
        text: "According to the passage, declining test scores:",
        options: [
          "Don't necessarily indicate decreasing intelligence",
          "Only affect one country",
          "Definitely prove decreasing intelligence",
          "Are completely explained"
        ],
        correct: 0,
        explanation: "The passage states 'declining scores don't necessarily indicate decreasing intelligence' and explains tests reflect both capacity and practiced skills."
      }
    ]
  },
  {
    id: 77,
    passage: "Moral licensing describes how people who have done something good feel licensed to do something bad subsequently. Someone who exercises might feel entitled to eat unhealthily. Expressing anti-racist views might make someone less vigilant about their own biases. Making an environmentally friendly choice can paradoxically lead to less eco-friendly subsequent decisions.\n\nThis effect has important implications for promoting prosocial behavior. Simply encouraging people to do good may backfire if it triggers moral licensing. More effective approaches might involve emphasizing identities ('be a person who cares about the environment') rather than isolated actions, or highlighting how choices reflect values rather than tallying good deeds against bad ones.",
    questions: [
      {
        id: 188,
        text: "Moral licensing occurs when:",
        options: [
          "People never make mistakes",
          "Good actions always lead to more good actions",
          "Doing something good makes people feel entitled to subsequently do something bad",
          "People always do good"
        ],
        correct: 2,
        explanation: "The passage defines moral licensing as when 'people who have done something good feel licensed to do something bad subsequently.'"
      },
      {
        id: 189,
        text: "According to the passage, more effective approaches to promote prosocial behavior might:",
        options: [
          "Focus only on punishment",
          "Emphasize identities and values rather than tallying deeds",
          "Ignore moral licensing",
          "Just encourage isolated good actions"
        ],
        correct: 1,
        explanation: "The passage suggests 'emphasizing identities ('be a person who cares about the environment') rather than isolated actions, or highlighting how choices reflect values' as more effective approaches."
      }
    ]
  },
  {
    id: 78,
    passage: "The concept of technological unemployment—job loss due to automation—has concerned economists since the Industrial Revolution. Each technological wave has displaced workers while eventually creating new jobs. Nineteenth-century agricultural mechanization reduced farming employment but enabled industrial growth. Twentieth-century manufacturing automation eliminated assembly line jobs but created service sector positions.\n\nHowever, some argue current AI and robotics differ fundamentally. Previous automation replaced physical labor, while AI can perform cognitive tasks. This might eliminate jobs faster than new ones emerge, or create jobs requiring skills most displaced workers lack. Universal basic income, job guarantees, and massive retraining programs are proposed solutions, but their feasibility and effectiveness remain debated.",
    questions: [
      {
        id: 190,
        text: "Technological unemployment refers to:",
        options: [
          "Voluntary career changes",
          "People refusing to work",
          "Only modern job losses",
          "Job loss due to automation across different eras"
        ],
        correct: 3,
        explanation: "The passage discusses technological unemployment as 'job loss due to automation' and traces it from the Industrial Revolution through modern AI."
      },
      {
        id: 191,
        text: "According to the passage, some argue current automation differs because:",
        options: [
          "AI can perform cognitive tasks, potentially eliminating jobs faster than previous automation",
          "It only affects one industry",
          "It creates more jobs",
          "It's slower than previous waves"
        ],
        correct: 0,
        explanation: "The passage states 'Previous automation replaced physical labor, while AI can perform cognitive tasks. This might eliminate jobs faster than new ones emerge.'"
      }
    ]
  },
  {
    id: 79,
    passage: "Ocean gyres—large systems of rotating ocean currents—have become infamous as collection points for plastic pollution. The Great Pacific Garbage Patch, actually two vast areas of debris concentration, contains an estimated 80,000 tons of plastic. Despite its name, the patch isn't a solid island but rather a diffuse soup of microplastics and larger debris extending throughout the water column.\n\nCleanup efforts face enormous challenges. The patch covers an area larger than Texas at depths making traditional collection methods impractical. Proposed solutions include floating barriers that passively collect debris, but questions remain about environmental impacts and whether cleanup can keep pace with new pollution. The most effective approach remains preventing plastic from entering oceans in the first place through improved waste management and reduced plastic production.",
    questions: [
      {
        id: 192,
        text: "The Great Pacific Garbage Patch is:",
        options: [
          "Easy to clean up",
          "A diffuse soup of microplastics and debris throughout the water column",
          "A solid island of trash",
          "Completely fictional"
        ],
        correct: 1,
        explanation: "The passage clarifies 'Despite its name, the patch isn't a solid island but rather a diffuse soup of microplastics and larger debris extending throughout the water column.'"
      },
      {
        id: 193,
        text: "According to the passage, the most effective approach to ocean plastic is:",
        options: [
          "Preventing plastic from entering oceans through better waste management and reduced production",
          "Ignoring the problem",
          "Building more barriers",
          "Only cleanup efforts"
        ],
        correct: 0,
        explanation: "The passage concludes 'The most effective approach remains preventing plastic from entering oceans in the first place through improved waste management and reduced plastic production.'"
      }
    ]
  },
  {
    id: 80,
    passage: "The hedonic treadmill theory suggests that people maintain relatively stable happiness levels despite life changes because they adapt to new circumstances. Lottery winners return to baseline happiness after initial joy. People who experience tragic accidents often report life satisfaction closer to pre-accident levels than observers expect. This adaptation helps explain why increased wealth beyond a certain point doesn't proportionally increase happiness—people adjust their expectations and desires upward.\n\nHowever, not all life changes show equal adaptation. People adapt poorly to chronic noise, long commutes, and lack of social connection. Conversely, social relationships and meaningful activities provide sustained satisfaction resistant to hedonic adaptation. Understanding these patterns suggests focusing life choices on factors that genuinely promote lasting wellbeing rather than temporary happiness boosts.",
    questions: [
      {
        id: 194,
        text: "The hedonic treadmill describes:",
        options: [
          "Exercise equipment",
          "How people maintain stable happiness levels through adaptation to life changes",
          "A fitness regimen",
          "Why happiness always increases"
        ],
        correct: 1,
        explanation: "The passage states the hedonic treadmill 'suggests that people maintain relatively stable happiness levels despite life changes because they adapt to new circumstances.'"
      },
      {
        id: 195,
        text: "According to the passage, which factors provide satisfaction resistant to adaptation?",
        options: [
          "Material possessions",
          "Lottery winnings",
          "Wealth increases",
          "Social relationships and meaningful activities"
        ],
        correct: 3,
        explanation: "The passage states 'social relationships and meaningful activities provide sustained satisfaction resistant to hedonic adaptation.'"
      },
      {
        id: 196,
        text: "The passage suggests that understanding hedonic adaptation should:",
        options: [
          "Make people give up on happiness",
          "Lead to avoiding all change",
          "Guide life choices toward factors promoting lasting wellbeing",
          "Encourage chasing temporary boosts"
        ],
        correct: 2,
        explanation: "The passage concludes understanding patterns 'suggests focusing life choices on factors that genuinely promote lasting wellbeing rather than temporary happiness boosts.'"
      }
    ]
  },
  {
    id: 81,
    passage: "Ecosystem services—benefits humans derive from nature—include provisions like food and water, regulating services like climate and disease control, cultural services like recreation, and supporting services like nutrient cycling. Economists attempt to assign monetary values to these services, calculating that they contribute tens of trillions of dollars annually to the global economy.\n\nHowever, quantifying nature's value in economic terms remains controversial. Critics argue that reducing nature to dollar figures treats ecosystems as mere resources and may undervalue aspects that defy monetary calculation. Supporters contend that economic valuation helps decision-makers recognize nature's contribution and justify conservation investments. The debate reflects broader questions about whether market frameworks appropriately apply to natural systems.",
    questions: [
      {
        id: 197,
        text: "Ecosystem services include:",
        options: [
          "Nothing measurable",
          "Just recreational benefits",
          "Provisions, regulating services, cultural services, and supporting services",
          "Only food production"
        ],
        correct: 2,
        explanation: "The passage lists four categories: 'provisions like food and water, regulating services like climate and disease control, cultural services like recreation, and supporting services like nutrient cycling.'"
      },
      {
        id: 198,
        text: "Critics of economic valuation of nature argue that:",
        options: [
          "Only economic values matter",
          "All ecosystem services should be monetized",
          "Nature has no value",
          "Economic framing treats ecosystems as mere resources and may undervalue certain aspects"
        ],
        correct: 3,
        explanation: "The passage states 'Critics argue that reducing nature to dollar figures treats ecosystems as mere resources and may undervalue aspects that defy monetary calculation.'"
      },
      {
        id: 199,
        text: "Supporters of economic valuation contend it:",
        options: [
          "Helps decision-makers recognize nature's contribution and justify conservation",
          "Should replace all other conservation arguments",
          "Perfectly captures all of nature's worth",
          "Is completely objective"
        ],
        correct: 0,
        explanation: "The passage states 'Supporters contend that economic valuation helps decision-makers recognize nature's contribution and justify conservation investments.'"
      },
      {
        id: 200,
        text: "The debate over economic valuation of nature reflects questions about:",
        options: [
          "Purely scientific issues",
          "Only technical measurement methods",
          "Whether market frameworks appropriately apply to natural systems",
          "How to eliminate all conservation"
        ],
        correct: 2,
        explanation: "The passage concludes 'The debate reflects broader questions about whether market frameworks appropriately apply to natural systems.'"
      }
    ]
  }
];

export const READING_COMPREHENSION_CONFIG = {
  timeLimit: 5 * 60, // 5 minutes
  sectionName: "Reading Comprehension",
  totalQuestions: 200
};

export default readingComprehensionData;