// Situational Judgment Questions for AFOQT
// Leadership and decision-making scenarios
// Note: Different format - each scenario has 5 responses to rate

export const situationalJudgmentData = [
  // {
  //   id: 0,
  //   scenario: "You notice a team member consistently arriving late to morning briefings. This has been ongoing for two weeks and is starting to affect team morale. What would you do?",
  //   responses: [
  //     {
  //       id: "a",
  //       text: "Immediately report them to your supervisor",
  //       // In real test, test-taker rates from "Most Effective" to "Least Effective"
  //       // For practice, we'll simplify to selecting most/least
  //     },
  //     {
  //       id: "b", 
  //       text: "Have a private conversation to understand if there are underlying issues"
  //     },
  //     {
  //       id: "c",
  //       text: "Ignore it and hope they improve on their own"
  //     },
  //     {
  //       id: "d",
  //       text: "Publicly call them out during the next briefing"
  //     },
  //     {
  //       id: "e",
  //       text: "Offer to help them with time management if personal issues are affecting punctuality"
  //     }
  //   ],
  //   // For now, just track which they selected - proper scoring needs expert consensus data
  //   explanation: "Most effective: B and E show leadership through understanding and support. Least effective: C (avoidance) and D (public humiliation damage morale)."
  // },
    {
      id: 1,
      scenario: "You notice a team member consistently arriving late to morning briefings. This has been ongoing for two weeks and is starting to affect team morale.",
      responses: [
        {
          id: "a",
          text: "Immediately report them to your supervisor"
        },
        {
          id: "b",
          text: "Have a private conversation to understand if there are underlying issues"
        },
        {
          id: "c",
          text: "Ignore it and hope they improve on their own"
        },
        {
          id: "d",
          text: "Publicly call them out during the next briefing"
        },
        {
          id: "e",
          text: "Offer to help them with time management if personal issues are affecting punctuality"
        }
      ]
    },
    {
      id: 2,
      scenario: "During a critical mission planning session, two of your subordinates have a heated disagreement about the best approach to accomplish the objective.",
      responses: [
        {
          id: "a",
          text: "Let them work it out themselves to build problem-solving skills"
        },
        {
          id: "b",
          text: "Immediately choose one person's approach and move forward"
        },
        {
          id: "c",
          text: "Facilitate a discussion to evaluate both approaches objectively"
        },
        {
          id: "d",
          text: "Postpone the decision until emotions have settled"
        },
        {
          id: "e",
          text: "Seek input from other team members before making a decision"
        }
      ]
    },
    {
      id: 3,
      scenario: "You discover that a close friend and colleague has been falsifying minor administrative reports to make their unit's performance appear better.",
      responses: [
        {
          id: "a",
          text: "Confront your friend privately and give them a chance to correct it"
        },
        {
          id: "b",
          text: "Report the issue to your chain of command immediately"
        },
        {
          id: "c",
          text: "Ignore it since the reports are minor and don't affect operations"
        },
        {
          id: "d",
          text: "Anonymously report the issue to avoid damaging the friendship"
        },
        {
          id: "e",
          text: "Document what you've observed before taking any action"
        }
      ]
    },
    {
      id: 4,
      scenario: "You've been assigned to lead a project with a tight deadline, but you realize your team lacks the necessary expertise to complete it successfully.",
      responses: [
        {
          id: "a",
          text: "Proceed as planned and hope your team can figure it out"
        },
        {
          id: "b",
          text: "Request additional resources or personnel with the required expertise"
        },
        {
          id: "c",
          text: "Arrange for rapid training sessions to upskill your current team"
        },
        {
          id: "d",
          text: "Inform your supervisor of the skill gap and recommend adjusting the timeline"
        },
        {
          id: "e",
          text: "Take on the technical work yourself to ensure it's done correctly"
        }
      ]
    },
    {
      id: 5,
      scenario: "A senior officer asks you to prioritize a task that conflicts with orders you received from your immediate supervisor.",
      responses: [
        {
          id: "a",
          text: "Follow the senior officer's direction without question"
        },
        {
          id: "b",
          text: "Explain the conflict and ask the senior officer to coordinate with your supervisor"
        },
        {
          id: "c",
          text: "Complete your supervisor's task first, then address the senior officer's request"
        },
        {
          id: "d",
          text: "Inform your immediate supervisor of the situation and seek guidance"
        },
        {
          id: "e",
          text: "Attempt to complete both tasks simultaneously"
        }
      ]
    },
    {
      id: 6,
      scenario: "You're leading a team briefing when you realize the information you're presenting contains a significant error that could lead to poor decision-making.",
      responses: [
        {
          id: "a",
          text: "Continue the briefing and correct it privately with individuals afterward"
        },
        {
          id: "b",
          text: "Immediately stop and acknowledge the error to the group"
        },
        {
          id: "c",
          text: "Finish the briefing quickly and send a correction via email"
        },
        {
          id: "d",
          text: "Note the error but wait until questions to address it"
        },
        {
          id: "e",
          text: "Stop the briefing and reconvene once you've verified all information"
        }
      ]
    },
    {
      id: 7,
      scenario: "One of your high-performing team members requests leave during a critical operational period when their skills are essential.",
      responses: [
        {
          id: "a",
          text: "Deny the leave request due to operational needs"
        },
        {
          id: "b",
          text: "Approve the leave and redistribute their responsibilities"
        },
        {
          id: "c",
          text: "Discuss the situation with them to understand the urgency of their request"
        },
        {
          id: "d",
          text: "Approve partial leave or a compromise schedule"
        },
        {
          id: "e",
          text: "Defer the decision to your supervisor"
        }
      ]
    },
    {
      id: 8,
      scenario: "You observe that a new procedure implemented by leadership is inefficient and is frustrating your team, though it achieves the intended result.",
      responses: [
        {
          id: "a",
          text: "Follow the procedure exactly as directed without comment"
        },
        {
          id: "b",
          text: "Gather data on the inefficiencies and present recommendations through proper channels"
        },
        {
          id: "c",
          text: "Modify the procedure slightly to improve efficiency"
        },
        {
          id: "d",
          text: "Encourage your team to follow it while privately expressing your concerns to leadership"
        },
        {
          id: "e",
          text: "Discuss concerns with your peers before taking any action"
        }
      ]
    },
    {
      id: 9,
      scenario: "During a training exercise, you notice a safety violation that could potentially cause injury, but stopping the exercise would disrupt the training schedule.",
      responses: [
        {
          id: "a",
          text: "Immediately stop the exercise and address the safety violation"
        },
        {
          id: "b",
          text: "Make a note to address it in the after-action review"
        },
        {
          id: "c",
          text: "Quietly correct the violation without stopping the exercise"
        },
        {
          id: "d",
          text: "Continue the exercise but increase monitoring of the situation"
        },
        {
          id: "e",
          text: "Consult with the senior person present before taking action"
        }
      ]
    },
    {
      id: 10,
      scenario: "You're assigned to work with a team member who has a reputation for being difficult to work with, but you need their cooperation for mission success.",
      responses: [
        {
          id: "a",
          text: "Request a different team member for the assignment"
        },
        {
          id: "b",
          text: "Meet with them early to establish clear expectations and communication norms"
        },
        {
          id: "c",
          text: "Minimize interaction and only communicate when absolutely necessary"
        },
        {
          id: "d",
          text: "Build rapport by finding common ground before discussing work"
        },
        {
          id: "e",
          text: "Address the situation directly and ask them about their preferred working style"
        }
      ]
    },
    {
      id: 11,
      scenario: "You receive criticism from your supervisor about your leadership style in front of other team members during a meeting.",
      responses: [
        {
          id: "a",
          text: "Defend your approach and explain your reasoning immediately"
        },
        {
          id: "b",
          text: "Accept the feedback professionally and request a private meeting to discuss further"
        },
        {
          id: "c",
          text: "Remain silent during the meeting and address it privately later"
        },
        {
          id: "d",
          text: "Ask clarifying questions to better understand the specific concerns"
        },
        {
          id: "e",
          text: "Thank them for the feedback and commit to improvement"
        }
      ]
    },
    {
      id: 12,
      scenario: "Your unit is tasked with a mission that you believe is inadequately resourced and has a high probability of failure.",
      responses: [
        {
          id: "a",
          text: "Execute the mission as ordered and do your best with available resources"
        },
        {
          id: "b",
          text: "Document your concerns in writing and submit them through the chain of command"
        },
        {
          id: "c",
          text: "Request a mission brief review to discuss resource requirements"
        },
        {
          id: "d",
          text: "Identify creative solutions to overcome resource limitations"
        },
        {
          id: "e",
          text: "Express concerns directly to your commander before mission execution"
        }
      ]
    },
    {
      id: 13,
      scenario: "A team member comes to you with a personal problem that is affecting their work performance, but sharing details makes them uncomfortable.",
      responses: [
        {
          id: "a",
          text: "Respect their privacy and focus only on work performance expectations"
        },
        {
          id: "b",
          text: "Encourage them to seek help from appropriate support services"
        },
        {
          id: "c",
          text: "Insist they provide details so you can properly assess the situation"
        },
        {
          id: "d",
          text: "Offer flexible work arrangements while they address their personal issue"
        },
        {
          id: "e",
          text: "Listen supportively and ask what type of support would be most helpful"
        }
      ]
    },
    {
      id: 14,
      scenario: "You discover that equipment assigned to your unit is damaged and needs repair, but reporting it will delay an important training exercise.",
      responses: [
        {
          id: "a",
          text: "Proceed with training using the damaged equipment carefully"
        },
        {
          id: "b",
          text: "Report the damage immediately and reschedule the training"
        },
        {
          id: "c",
          text: "Use alternative equipment if available and report the damage after training"
        },
        {
          id: "d",
          text: "Assess whether the damage poses a safety risk before deciding"
        },
        {
          id: "e",
          text: "Consult with maintenance personnel about temporary solutions"
        }
      ]
    },
    {
      id: 15,
      scenario: "You're placed in charge of a team where several members have more experience and expertise than you do.",
      responses: [
        {
          id: "a",
          text: "Assert your authority to establish yourself as the leader"
        },
        {
          id: "b",
          text: "Leverage their experience by seeking input on decisions"
        },
        {
          id: "c",
          text: "Acknowledge their expertise and establish a collaborative leadership approach"
        },
        {
          id: "d",
          text: "Delegate heavily to those with more experience"
        },
        {
          id: "e",
          text: "Focus on learning from them while maintaining your leadership responsibilities"
        }
      ]
    },
    {
      id: 16,
      scenario: "Two of your subordinates have a personality conflict that is beginning to affect team cohesion and productivity.",
      responses: [
        {
          id: "a",
          text: "Separate them by reassigning one to different duties"
        },
        {
          id: "b",
          text: "Meet with each individually to understand their perspectives"
        },
        {
          id: "c",
          text: "Facilitate a mediated discussion between them"
        },
        {
          id: "d",
          text: "Set clear expectations that they must work together professionally"
        },
        {
          id: "e",
          text: "Monitor the situation and intervene only if it worsens"
        }
      ]
    },
    {
      id: 17,
      scenario: "You're asked to evaluate a peer's performance, and you know they're struggling, but they're also a friend who is going through personal difficulties.",
      responses: [
        {
          id: "a",
          text: "Provide an honest assessment of their work performance"
        },
        {
          id: "b",
          text: "Give them a favorable review to help them through this difficult time"
        },
        {
          id: "c",
          text: "Discuss your concerns with them before submitting the evaluation"
        },
        {
          id: "d",
          text: "Include context about their personal situation in the evaluation"
        },
        {
          id: "e",
          text: "Request someone else conduct the evaluation due to your relationship"
        }
      ]
    },
    {
      id: 18,
      scenario: "Your supervisor takes credit for work that your team accomplished during a high-visibility briefing.",
      responses: [
        {
          id: "a",
          text: "Publicly correct the record during the briefing"
        },
        {
          id: "b",
          text: "Speak with your supervisor privately after the briefing"
        },
        {
          id: "c",
          text: "Let it go and focus on future recognition opportunities"
        },
        {
          id: "d",
          text: "Ensure your team knows their work is valued regardless of public recognition"
        },
        {
          id: "e",
          text: "Document the situation in case a pattern develops"
        }
      ]
    },
    {
      id: 19,
      scenario: "You're given an order that you believe may be unethical, though it's not clearly illegal.",
      responses: [
        {
          id: "a",
          text: "Follow the order without question"
        },
        {
          id: "b",
          text: "Ask for clarification and express your concerns"
        },
        {
          id: "c",
          text: "Request the order in writing before proceeding"
        },
        {
          id: "d",
          text: "Consult with the legal or ethics office"
        },
        {
          id: "e",
          text: "Discuss your concerns with a trusted mentor or senior officer"
        }
      ]
    },
    {
      id: 20,
      scenario: "A new team member is struggling to meet performance standards despite your coaching efforts over several weeks.",
      responses: [
        {
          id: "a",
          text: "Continue coaching and give them more time to improve"
        },
        {
          id: "b",
          text: "Implement a formal performance improvement plan"
        },
        {
          id: "c",
          text: "Assign them tasks more suited to their current skill level"
        },
        {
          id: "d",
          text: "Recommend they receive formal training in their deficient areas"
        },
        {
          id: "e",
          text: "Have an honest conversation about whether this role is the right fit"
        }
      ]
    },
    {
      id: 21,
      scenario: "During a deployment, you notice morale is declining significantly due to extended work hours and limited rest.",
      responses: [
        {
          id: "a",
          text: "Push through and maintain the current operational tempo"
        },
        {
          id: "b",
          text: "Implement mandatory rest periods even if it slows operations"
        },
        {
          id: "c",
          text: "Organize morale-building activities during limited downtime"
        },
        {
          id: "d",
          text: "Report the situation to leadership and recommend schedule adjustments"
        },
        {
          id: "e",
          text: "Rotate personnel to distribute the workload more evenly"
        }
      ]
    },
    {
      id: 22,
      scenario: "You learn that budget cuts will force you to eliminate a program that your team values highly but is not mission-critical.",
      responses: [
        {
          id: "a",
          text: "Make the cut without explanation to avoid controversy"
        },
        {
          id: "b",
          text: "Communicate the decision transparently and explain the reasoning"
        },
        {
          id: "c",
          text: "Seek alternative funding sources before eliminating the program"
        },
        {
          id: "d",
          text: "Involve the team in identifying which programs should be prioritized"
        },
        {
          id: "e",
          text: "Propose modifications to the program that would reduce costs"
        }
      ]
    },
    {
      id: 23,
      scenario: "You witness a senior officer making inappropriate comments to a subordinate, though the subordinate hasn't formally complained.",
      responses: [
        {
          id: "a",
          text: "Mind your own business since no complaint was made"
        },
        {
          id: "b",
          text: "Speak privately with the subordinate to offer support"
        },
        {
          id: "c",
          text: "Report the behavior through appropriate channels immediately"
        },
        {
          id: "d",
          text: "Address it directly with the senior officer"
        },
        {
          id: "e",
          text: "Document what you witnessed and inform the subordinate of their options"
        }
      ]
    },
    {
      id: 24,
      scenario: "Your team successfully completes a difficult project ahead of schedule, largely due to one person's exceptional effort.",
      responses: [
        {
          id: "a",
          text: "Recognize the individual publicly for their outstanding contribution"
        },
        {
          id: "b",
          text: "Credit the entire team equally to maintain cohesion"
        },
        {
          id: "c",
          text: "Recognize both the individual's effort and the team's support"
        },
        {
          id: "d",
          text: "Submit the individual for formal recognition or awards"
        },
        {
          id: "e",
          text: "Provide private recognition to avoid making others feel inadequate"
        }
      ]
    },
    {
      id: 25,
      scenario: "You're asked to implement a new policy that you personally disagree with, but it comes from senior leadership.",
      responses: [
        {
          id: "a",
          text: "Implement it half-heartedly to show your disagreement"
        },
        {
          id: "b",
          text: "Implement it fully while privately expressing concerns to leadership"
        },
        {
          id: "c",
          text: "Present it to your team with your personal reservations included"
        },
        {
          id: "d",
          text: "Implement it professionally and help your team understand the reasoning"
        },
        {
          id: "e",
          text: "Request clarification on the policy's intent before implementation"
        }
      ]
    },
    {
      id: 26,
      scenario: "A joint operation with another unit is being poorly coordinated by their leadership, potentially compromising mission success.",
      responses: [
        {
          id: "a",
          text: "Focus only on your unit's responsibilities and let them handle theirs"
        },
        {
          id: "b",
          text: "Reach out to their leadership to offer assistance with coordination"
        },
        {
          id: "c",
          text: "Report the coordination issues up your chain of command"
        },
        {
          id: "d",
          text: "Propose a joint planning session to improve coordination"
        },
        {
          id: "e",
          text: "Develop contingency plans for your unit in case their coordination fails"
        }
      ]
    },
    {
      id: 27,
      scenario: "You realize you made a decision that negatively impacted your team, and they're clearly frustrated.",
      responses: [
        {
          id: "a",
          text: "Defend your decision and explain the reasoning behind it"
        },
        {
          id: "b",
          text: "Acknowledge the mistake and work with the team to correct it"
        },
        {
          id: "c",
          text: "Apologize and commit to better decisions in the future"
        },
        {
          id: "d",
          text: "Ask the team for input on how to move forward"
        },
        {
          id: "e",
          text: "Accept responsibility privately but maintain authority publicly"
        }
      ]
    },
    {
      id: 28,
      scenario: "During an inspection, you discover a minor violation that your team could quickly fix before the inspector sees it.",
      responses: [
        {
          id: "a",
          text: "Quickly fix it and say nothing to the inspector"
        },
        {
          id: "b",
          text: "Report the violation honestly to the inspector"
        },
        {
          id: "c",
          text: "Fix it and inform the inspector it was just corrected"
        },
        {
          id: "d",
          text: "Use it as a learning opportunity for your team after the inspection"
        },
        {
          id: "e",
          text: "Ask the inspector for guidance on the proper standard"
        }
      ]
    },
    {
      id: 29,
      scenario: "You have an opportunity to attend valuable professional development training, but it would require your team to operate without you during a busy period.",
      responses: [
        {
          id: "a",
          text: "Decline the training to maintain team continuity"
        },
        {
          id: "b",
          text: "Attend the training after ensuring your team is prepared to operate independently"
        },
        {
          id: "c",
          text: "Request to attend a future session when timing is better"
        },
        {
          id: "d",
          text: "Attend but remain available remotely if critical issues arise"
        },
        {
          id: "e",
          text: "Delegate leadership to a trusted subordinate and attend the training"
        }
      ]
    },
    {
      id: 30,
      scenario: "A subordinate consistently completes tasks adequately but never goes beyond minimum requirements, while others regularly exceed expectations.",
      responses: [
        {
          id: "a",
          text: "Accept their adequate performance since they meet standards"
        },
        {
          id: "b",
          text: "Counsel them about the value of exceeding expectations"
        },
        {
          id: "c",
          text: "Assign them more challenging tasks to encourage growth"
        },
        {
          id: "d",
          text: "Discuss their career goals to understand their motivation"
        },
        {
          id: "e",
          text: "Recognize high performers publicly to set a cultural example"
        }
      ]
    },
    {
      id: 31,
      scenario: "Your unit receives a commendation for work that was primarily accomplished by a subordinate you supervised.",
      responses: [
        {
          id: "a",
          text: "Accept the commendation as the leader responsible"
        },
        {
          id: "b",
          text: "Ensure the subordinate receives appropriate recognition"
        },
        {
          id: "c",
          text: "Share the commendation equally with your entire team"
        },
        {
          id: "d",
          text: "Publicly acknowledge the subordinate's primary contribution"
        },
        {
          id: "e",
          text: "Recommend the subordinate for an individual award"
        }
      ]
    },
    {
      id: 32,
      scenario: "You're assigned to brief senior leadership on a topic you're not fully confident in your understanding of.",
      responses: [
        {
          id: "a",
          text: "Request someone with more expertise deliver the briefing"
        },
        {
          id: "b",
          text: "Prepare thoroughly and consult subject matter experts beforehand"
        },
        {
          id: "c",
          text: "Deliver the briefing and acknowledge knowledge gaps if questioned"
        },
        {
          id: "d",
          text: "Bring a subject matter expert to support you during the briefing"
        },
        {
          id: "e",
          text: "Request additional time to ensure you can brief confidently"
        }
      ]
    },
    {
      id: 33,
      scenario: "A team member approaches you with a suggestion that could improve operations, but implementing it would contradict established procedures.",
      responses: [
        {
          id: "a",
          text: "Thank them but maintain current procedures"
        },
        {
          id: "b",
          text: "Research the suggestion and submit it through proper channels for consideration"
        },
        {
          id: "c",
          text: "Implement the suggestion on a trial basis"
        },
        {
          id: "d",
          text: "Present the suggestion to leadership with your recommendation"
        },
        {
          id: "e",
          text: "Encourage them to develop a formal proposal for the change"
        }
      ]
    },
    {
      id: 34,
      scenario: "During a high-stress operation, one of your team members becomes visibly overwhelmed and their performance degrades.",
      responses: [
        {
          id: "a",
          text: "Remove them from the situation immediately"
        },
        {
          id: "b",
          text: "Provide reassurance and guidance to help them refocus"
        },
        {
          id: "c",
          text: "Temporarily reassign them to a less critical task"
        },
        {
          id: "d",
          text: "Have another team member provide support while they continue"
        },
        {
          id: "e",
          text: "Address it after the operation during a debrief"
        }
      ]
    },
    {
      id: 35,
      scenario: "You discover that your predecessor left the unit with several unresolved problems and poor documentation.",
      responses: [
        {
          id: "a",
          text: "Focus on moving forward without dwelling on past issues"
        },
        {
          id: "b",
          text: "Systematically address each problem while improving documentation"
        },
        {
          id: "c",
          text: "Brief your chain of command on the issues you've inherited"
        },
        {
          id: "d",
          text: "Prioritize the most critical problems first"
        },
        {
          id: "e",
          text: "Involve your team in identifying and solving the problems"
        }
      ]
    },
    {
      id: 36,
      scenario: "A team member requests your recommendation for a competitive program, but you don't believe they're the strongest candidate.",
      responses: [
        {
          id: "a",
          text: "Provide an honest recommendation highlighting both strengths and weaknesses"
        },
        {
          id: "b",
          text: "Decline to write the recommendation"
        },
        {
          id: "c",
          text: "Write a positive recommendation to support their career"
        },
        {
          id: "d",
          text: "Discuss your concerns with them before writing the recommendation"
        },
        {
          id: "e",
          text: "Recommend they gain more experience before applying"
        }
      ]
    },
    {
      id: 37,
      scenario: "Your unit is tasked with additional duties that will significantly increase workload, but you receive no additional personnel or resources.",
      responses: [
        {
          id: "a",
          text: "Accept the tasking and find ways to accomplish it with current resources"
        },
        {
          id: "b",
          text: "Request additional resources through your chain of command"
        },
        {
          id: "c",
          text: "Identify lower-priority tasks that can be reduced or eliminated"
        },
        {
          id: "d",
          text: "Propose a phased implementation plan for the additional duties"
        },
        {
          id: "e",
          text: "Analyze the impact on current operations and present it to leadership"
        }
      ]
    },
    {
      id: 38,
      scenario: "You learn that a decision you supported and implemented is being reversed by senior leadership.",
      responses: [
        {
          id: "a",
          text: "Express your disagreement with the reversal to your team"
        },
        {
          id: "b",
          text: "Implement the new direction professionally regardless of your opinion"
        },
        {
          id: "c",
          text: "Seek to understand the reasoning before communicating it to your team"
        },
        {
          id: "d",
          text: "Present both perspectives to your team and implement the new direction"
        },
        {
          id: "e",
          text: "Request a meeting with leadership to understand the change"
        }
      ]
    },
    {
      id: 39,
      scenario: "A subordinate comes to you with a complaint about how another supervisor is treating them during a joint assignment.",
      responses: [
        {
          id: "a",
          text: "Tell them to work it out directly with the other supervisor"
        },
        {
          id: "b",
          text: "Gather information and speak with the other supervisor if warranted"
        },
        {
          id: "c",
          text: "Coach them on professional strategies to address the situation"
        },
        {
          id: "d",
          text: "Immediately contact the other supervisor to resolve it"
        },
        {
          id: "e",
          text: "Document the complaint and monitor the situation"
        }
      ]
    },
    {
      id: 40,
      scenario: "Your unit achieves an important goal, but you know success was partly due to luck and circumstances beyond your control.",
      responses: [
        {
          id: "a",
          text: "Accept the recognition without mentioning the role of luck"
        },
        {
          id: "b",
          text: "Acknowledge both the team's effort and the favorable circumstances"
        },
        {
          id: "c",
          text: "Use the success as a learning opportunity to improve processes"
        },
        {
          id: "d",
          text: "Focus recognition on the team's preparation that enabled you to capitalize on circumstances"
        },
        {
          id: "e",
          text: "Privately acknowledge the luck while publicly celebrating the team's work"
        }
      ]
    },
  {
    id: 41,
    scenario: "You're leading a team that must complete a physical fitness assessment, but one member confides they're recovering from an injury their doctor hasn't cleared yet.",
    responses: [
      {
        id: "a",
        text: "Tell them to participate anyway to avoid looking weak"
      },
      {
        id: "b",
        text: "Excuse them from the assessment and document the medical situation"
      },
      {
        id: "c",
        text: "Allow them to attempt it but stop if pain occurs"
      },
      {
        id: "d",
        text: "Require them to get written medical clearance before participating"
      },
      {
        id: "e",
        text: "Have them perform modified exercises to show effort"
      }
    ]
  },
  {
    id: 42,
    scenario: "During a training exercise, you notice that safety protocols are being followed but are significantly slowing down the operation.",
    responses: [
      {
        id: "a",
        text: "Maintain strict adherence to all safety protocols despite the delay"
      },
      {
        id: "b",
        text: "Skip non-essential safety steps to improve efficiency"
      },
      {
        id: "c",
        text: "Review the protocols to identify streamlining opportunities without compromising safety"
      },
      {
        id: "d",
        text: "Let your team decide which protocols to follow"
      },
      {
        id: "e",
        text: "Complete the exercise quickly and address safety in the debrief"
      }
    ]
  },
  {
    id: 43,
    scenario: "A team member approaches you privately, claiming another member has been making discriminatory comments during off-duty hours.",
    responses: [
      {
        id: "a",
        text: "Tell them to handle it personally since it happened off-duty"
      },
      {
        id: "b",
        text: "Gather specific details and report it through proper channels"
      },
      {
        id: "c",
        text: "Confront the accused person immediately without investigation"
      },
      {
        id: "d",
        text: "Dismiss it as personal conflict unrelated to military duties"
      },
      {
        id: "e",
        text: "Document the complaint and consult with your supervisor on next steps"
      }
    ]
  },
  {
    id: 44,
    scenario: "You're assigned to mentor a new officer who consistently challenges your decisions in front of the team.",
    responses: [
      {
        id: "a",
        text: "Publicly reprimand them to establish authority"
      },
      {
        id: "b",
        text: "Have a private discussion about appropriate channels for questioning decisions"
      },
      {
        id: "c",
        text: "Ignore the behavior to avoid seeming defensive"
      },
      {
        id: "d",
        text: "Encourage the questioning as it shows critical thinking"
      },
      {
        id: "e",
        text: "Request a different mentee to avoid the conflict"
      }
    ]
  },
  {
    id: 45,
    scenario: "Your unit is preparing for inspection, and you discover equipment that should have been maintained months ago is in poor condition.",
    responses: [
      {
        id: "a",
        text: "Quickly patch the equipment to pass inspection"
      },
      {
        id: "b",
        text: "Report the true condition and accept the consequences"
      },
      {
        id: "c",
        text: "Hide the deficient equipment during inspection"
      },
      {
        id: "d",
        text: "Blame the previous officer in charge to deflect responsibility"
      },
      {
        id: "e",
        text: "Document the issues and present a correction plan to leadership"
      }
    ]
  },
  {
    id: 46,
    scenario: "You receive orders to relocate with short notice, but your spouse has just started a new job they're passionate about.",
    responses: [
      {
        id: "a",
        text: "Request a delay in orders to accommodate your family situation"
      },
      {
        id: "b",
        text: "Follow orders immediately without discussing alternatives"
      },
      {
        id: "c",
        text: "Explore remote work or temporary assignment options"
      },
      {
        id: "d",
        text: "Decline the orders and accept career consequences"
      },
      {
        id: "e",
        text: "Discuss the situation with your chain of command to explore possible solutions"
      }
    ]
  },
  {
    id: 47,
    scenario: "During a joint operation with another service branch, you observe practices that differ significantly from Air Force standards.",
    responses: [
      {
        id: "a",
        text: "Insist they follow Air Force procedures exclusively"
      },
      {
        id: "b",
        text: "Adapt to their methods to maintain good working relationships"
      },
      {
        id: "c",
        text: "Discuss the differences and find common ground that meets both standards"
      },
      {
        id: "d",
        text: "Report their practices as violations of protocol"
      },
      {
        id: "e",
        text: "Keep your team separate to avoid confusion"
      }
    ]
  },
  {
    id: 48,
    scenario: "A high-performing team member requests to be removed from a critical project due to personality conflicts with another member.",
    responses: [
      {
        id: "a",
        text: "Grant the request immediately to keep them happy"
      },
      {
        id: "b",
        text: "Deny the request and order them to work through it"
      },
      {
        id: "c",
        text: "Mediate between the conflicting parties to resolve the issue"
      },
      {
        id: "d",
        text: "Remove the other person instead"
      },
      {
        id: "e",
        text: "Restructure the project to minimize their interaction"
      }
    ]
  },
  {
    id: 49,
    scenario: "You're offered a professional development opportunity that would greatly benefit your career but would require leaving your team during a challenging period.",
    responses: [
      {
        id: "a",
        text: "Accept immediately as career advancement is the priority"
      },
      {
        id: "b",
        text: "Decline to stay with your team during the difficult time"
      },
      {
        id: "c",
        text: "Accept but ensure proper transition and support for your team"
      },
      {
        id: "d",
        text: "Ask if the opportunity can be postponed"
      },
      {
        id: "e",
        text: "Consult with your supervisor to weigh the team's needs against career development"
      }
    ]
  },
  {
    id: 50,
    scenario: "You discover that your predecessor left detailed but unofficial notes suggesting questionable decisions were made under pressure from higher leadership.",
    responses: [
      {
        id: "a",
        text: "Destroy the notes to avoid potential problems"
      },
      {
        id: "b",
        text: "Immediately report the contents to the Inspector General"
      },
      {
        id: "c",
        text: "Keep the notes secured and seek guidance from your supervisor"
      },
      {
        id: "d",
        text: "Ignore the notes and continue with current operations"
      },
      {
        id: "e",
        text: "Investigate the claims independently before taking action"
      }
    ]
  },
  {
    id: 51,
    scenario: "A civilian contractor working with your unit consistently delivers late but produces excellent work.",
    responses: [
      {
        id: "a",
        text: "Terminate the contract due to missed deadlines"
      },
      {
        id: "b",
        text: "Accept the delays since quality is high"
      },
      {
        id: "c",
        text: "Meet with the contractor to address timeline concerns"
      },
      {
        id: "d",
        text: "Adjust deadlines to accommodate their work pace"
      },
      {
        id: "e",
        text: "Document the delays and explore whether timeline expectations are realistic"
      }
    ]
  },
  {
    id: 52,
    scenario: "During deployment, a team member begins showing signs of severe stress but insists they're fine and want to continue their duties.",
    responses: [
      {
        id: "a",
        text: "Take them at their word and monitor from a distance"
      },
      {
        id: "b",
        text: "Immediately remove them from duty"
      },
      {
        id: "c",
        text: "Facilitate access to mental health resources and maintain communication"
      },
      {
        id: "d",
        text: "Ignore it unless their performance declines"
      },
      {
        id: "e",
        text: "Consult with medical personnel about your observations"
      }
    ]
  },
  {
    id: 53,
    scenario: "You're tasked with implementing a new policy that you personally disagree with and believe may negatively impact your team.",
    responses: [
      {
        id: "a",
        text: "Refuse to implement it and explain your disagreement to leadership"
      },
      {
        id: "b",
        text: "Implement it half-heartedly to show your disapproval"
      },
      {
        id: "c",
        text: "Implement it fully while providing feedback through proper channels"
      },
      {
        id: "d",
        text: "Tell your team you disagree but must enforce it"
      },
      {
        id: "e",
        text: "Implement it while documenting impacts to support future policy review"
      }
    ]
  },
  {
    id: 54,
    scenario: "A junior enlisted member asks your advice about whether to report a regulation violation they witnessed by a senior NCO.",
    responses: [
      {
        id: "a",
        text: "Tell them to ignore it to avoid retaliation"
      },
      {
        id: "b",
        text: "Encourage them to report it through proper channels and offer support"
      },
      {
        id: "c",
        text: "Report it yourself without involving them"
      },
      {
        id: "d",
        text: "Tell them to confront the NCO directly first"
      },
      {
        id: "e",
        text: "Investigate the claim yourself before advising them"
      }
    ]
  },
  {
    id: 55,
    scenario: "Your unit receives recognition for a project, but you know a significant portion was completed by a member who left before completion and isn't being credited.",
    responses: [
      {
        id: "a",
        text: "Accept the recognition for the current team"
      },
      {
        id: "b",
        text: "Publicly acknowledge the departed member's contributions"
      },
      {
        id: "c",
        text: "Privately inform leadership of the departed member's role"
      },
      {
        id: "d",
        text: "Decline the recognition entirely"
      },
      {
        id: "e",
        text: "Ensure the departed member is included in official documentation"
      }
    ]
  },
  {
    id: 56,
    scenario: "You're leading a training session when a participant asks a technical question you don't know the answer to.",
    responses: [
      {
        id: "a",
        text: "Make up an answer to maintain credibility"
      },
      {
        id: "b",
        text: "Admit you don't know and commit to finding the answer"
      },
      {
        id: "c",
        text: "Deflect the question to another participant"
      },
      {
        id: "d",
        text: "Criticize the question as too complex for the training level"
      },
      {
        id: "e",
        text: "Research it on the spot if time allows"
      }
    ]
  },
  {
    id: 57,
    scenario: "Budget cuts require you to eliminate a program that benefits team morale but isn't mission-critical.",
    responses: [
      {
        id: "a",
        text: "Fight to keep the program regardless of budget reality"
      },
      {
        id: "b",
        text: "Eliminate it immediately without explanation"
      },
      {
        id: "c",
        text: "Communicate the reason for elimination and explore low-cost alternatives"
      },
      {
        id: "d",
        text: "Keep the program running unofficially"
      },
      {
        id: "e",
        text: "Ask the team to fund it themselves"
      }
    ]
  },
  {
    id: 58,
    scenario: "During an emergency situation, you receive conflicting information from two equally credible sources about the best course of action.",
    responses: [
      {
        id: "a",
        text: "Choose the option from the higher-ranking source"
      },
      {
        id: "b",
        text: "Delay action until you can verify the correct information"
      },
      {
        id: "c",
        text: "Make a decision based on your assessment and available data"
      },
      {
        id: "d",
        text: "Follow the option that seems safer, even if slower"
      },
      {
        id: "e",
        text: "Attempt to quickly reconcile the conflicting information before acting"
      }
    ]
  },
  {
    id: 59,
    scenario: "A team member with excellent technical skills has poor interpersonal abilities that are affecting team cohesion.",
    responses: [
      {
        id: "a",
        text: "Remove them from the team to improve morale"
      },
      {
        id: "b",
        text: "Ignore the interpersonal issues and focus on their technical contributions"
      },
      {
        id: "c",
        text: "Provide coaching and clear expectations for professional behavior"
      },
      {
        id: "d",
        text: "Isolate them in independent work assignments"
      },
      {
        id: "e",
        text: "Recommend they attend leadership or communication training"
      }
    ]
  },
  {
    id: 60,
    scenario: "You're preparing for a major inspection when you learn that a parallel unit failed the same inspection due to issues your unit also has.",
    responses: [
      {
        id: "a",
        text: "Hope the inspectors don't notice the same issues"
      },
      {
        id: "b",
        text: "Immediately address the known deficiencies before inspection"
      },
      {
        id: "c",
        text: "Request postponement of your inspection"
      },
      {
        id: "d",
        text: "Inform your leadership of the issues and your correction plan"
      },
      {
        id: "e",
        text: "Focus only on what the other unit was cited for"
      }
    ]
  },
  {
    id: 61,
    scenario: "A talented officer requests a transfer because they feel their skills are underutilized in their current position.",
    responses: [
      {
        id: "a",
        text: "Deny the transfer to keep your top performer"
      },
      {
        id: "b",
        text: "Approve it immediately without discussion"
      },
      {
        id: "c",
        text: "Explore opportunities to better utilize their skills in the current role"
      },
      {
        id: "d",
        text: "Support their transfer while ensuring smooth transition"
      },
      {
        id: "e",
        text: "Discuss career goals to determine if transfer truly serves their development"
      }
    ]
  },
  {
    id: 62,
    scenario: "During a mission brief, you realize you made an error in your planning that could compromise success but hasn't been implemented yet.",
    responses: [
      {
        id: "a",
        text: "Continue with the plan to avoid looking incompetent"
      },
      {
        id: "b",
        text: "Immediately acknowledge the error and propose corrections"
      },
      {
        id: "c",
        text: "Quietly fix it without drawing attention to the mistake"
      },
      {
        id: "d",
        text: "Blame the error on incomplete information provided"
      },
      {
        id: "e",
        text: "Ask a subordinate to identify the problem so it appears caught early"
      }
    ]
  },
  {
    id: 63,
    scenario: "You observe that a new regulation is being interpreted differently across various units, causing confusion and inconsistency.",
    responses: [
      {
        id: "a",
        text: "Continue with your interpretation and ignore others"
      },
      {
        id: "b",
        text: "Bring the inconsistency to your leadership for clarification"
      },
      {
        id: "c",
        text: "Coordinate with other unit leaders to reach consensus"
      },
      {
        id: "d",
        text: "Choose the most lenient interpretation"
      },
      {
        id: "e",
        text: "Wait for official guidance before implementing"
      }
    ]
  },
  {
    id: 64,
    scenario: "A senior officer asks you to provide an assessment of a peer's performance for a promotion board, and you have concerns about their leadership abilities.",
    responses: [
      {
        id: "a",
        text: "Provide only positive feedback to help their career"
      },
      {
        id: "b",
        text: "Give an honest, balanced assessment including concerns"
      },
      {
        id: "c",
        text: "Decline to provide an assessment"
      },
      {
        id: "d",
        text: "Focus on their strengths and minimize weaknesses"
      },
      {
        id: "e",
        text: "Discuss your concerns with the peer before submitting assessment"
      }
    ]
  },
  {
    id: 65,
    scenario: "Your unit is selected for a high-visibility mission, but you assess that another unit is better equipped and trained for this specific task.",
    responses: [
      {
        id: "a",
        text: "Accept the mission proudly without comment"
      },
      {
        id: "b",
        text: "Recommend the better-suited unit to leadership"
      },
      {
        id: "c",
        text: "Accept the mission but request support from the other unit"
      },
      {
        id: "d",
        text: "Decline the mission citing lack of preparation"
      },
      {
        id: "e",
        text: "Accept and rapidly train your unit to meet requirements"
      }
    ]
  },
  {
    id: 66,
    scenario: "You notice that a popular informal tradition in your unit could be viewed as unprofessional by outside observers.",
    responses: [
      {
        id: "a",
        text: "Immediately end the tradition"
      },
      {
        id: "b",
        text: "Ignore it since it boosts morale and isn't hurting anyone"
      },
      {
        id: "c",
        text: "Discuss with the team whether the tradition should be modified or continued"
      },
      {
        id: "d",
        text: "Continue it but hide it during inspections or visits"
      },
      {
        id: "e",
        text: "Seek guidance from leadership on whether it's appropriate"
      }
    ]
  },
  {
    id: 67,
    scenario: "A subordinate comes to you with a family emergency requiring immediate leave, but you're already short-staffed for a critical period.",
    responses: [
      {
        id: "a",
        text: "Deny the leave due to operational requirements"
      },
      {
        id: "b",
        text: "Approve the leave and redistribute work among remaining staff"
      },
      {
        id: "c",
        text: "Approve partial leave to balance both needs"
      },
      {
        id: "d",
        text: "Approve the leave and request temporary support from other units"
      },
      {
        id: "e",
        text: "Ask them to delay if possible while exploring all options"
      }
    ]
  },
  {
    id: 68,
    scenario: "You're assigned to work with an officer from a foreign military with very different communication styles and expectations.",
    responses: [
      {
        id: "a",
        text: "Expect them to adapt to American military culture"
      },
      {
        id: "b",
        text: "Research their cultural norms and adapt your approach"
      },
      {
        id: "c",
        text: "Avoid direct interaction when possible"
      },
      {
        id: "d",
        text: "Discuss communication preferences openly at the start"
      },
      {
        id: "e",
        text: "Request a different liaison officer"
      }
    ]
  },
  {
    id: 69,
    scenario: "Your unit's performance metrics look poor on paper but you know they don't reflect the actual challenging circumstances your team faced.",
    responses: [
      {
        id: "a",
        text: "Accept the poor metrics without explanation"
      },
      {
        id: "b",
        text: "Manipulate the data to look better"
      },
      {
        id: "c",
        text: "Provide context and documentation of challenges alongside the metrics"
      },
      {
        id: "d",
        text: "Blame external factors for the poor performance"
      },
      {
        id: "e",
        text: "Request different metrics that better capture your unit's situation"
      }
    ]
  },
  {
    id: 70,
    scenario: "You're offered a temporary assignment that would look great on your record but would require breaking a personal commitment to your family.",
    responses: [
      {
        id: "a",
        text: "Accept without hesitation as duty comes first"
      },
      {
        id: "b",
        text: "Decline to honor your family commitment"
      },
      {
        id: "c",
        text: "Discuss with your family before deciding"
      },
      {
        id: "d",
        text: "Ask if the assignment can be adjusted to minimize family impact"
      },
      {
        id: "e",
        text: "Accept and make alternative arrangements for family commitment"
      }
    ]
  },
  {
    id: 71,
    scenario: "During a readiness exercise, you identify a significant vulnerability in your unit's procedures that wasn't caught during planning.",
    responses: [
      {
        id: "a",
        text: "Continue the exercise and address it later"
      },
      {
        id: "b",
        text: "Stop the exercise immediately to fix the vulnerability"
      },
      {
        id: "c",
        text: "Document the finding and brief leadership after the exercise"
      },
      {
        id: "d",
        text: "Keep it quiet to avoid negative attention"
      },
      {
        id: "e",
        text: "Use the exercise to test workarounds for the vulnerability"
      }
    ]
  },
  {
    id: 72,
    scenario: "A team member's religious practices require accommodations that are inconvenient for the standard duty schedule.",
    responses: [
      {
        id: "a",
        text: "Deny the accommodation to maintain schedule consistency"
      },
      {
        id: "b",
        text: "Work with them to find reasonable accommodations"
      },
      {
        id: "c",
        text: "Grant accommodations but express disapproval"
      },
      {
        id: "d",
        text: "Refer them to the chaplain without addressing the schedule"
      },
      {
        id: "e",
        text: "Consult regulation and leadership to ensure proper accommodation"
      }
    ]
  },
  {
    id: 73,
    scenario: "You're tasked with selecting one person from your team for an overseas deployment. Multiple qualified people volunteer.",
    responses: [
      {
        id: "a",
        text: "Select the person you personally get along with best"
      },
      {
        id: "b",
        text: "Choose based on who would benefit most career-wise"
      },
      {
        id: "c",
        text: "Evaluate based on mission requirements and individual capabilities"
      },
      {
        id: "d",
        text: "Let the team vote on who should go"
      },
      {
        id: "e",
        text: "Rotate the opportunity fairly among qualified candidates"
      }
    ]
  },
  {
    id: 74,
    scenario: "You discover that your unit has been inadvertently violating a technical regulation for months, but there have been no negative consequences.",
    responses: [
      {
        id: "a",
        text: "Continue current practices since they're working"
      },
      {
        id: "b",
        text: "Immediately correct the violation and report it"
      },
      {
        id: "c",
        text: "Quietly fix it without reporting past violations"
      },
      {
        id: "d",
        text: "Research whether the regulation should be changed"
      },
      {
        id: "e",
        text: "Document the violation, correct it, and inform leadership"
      }
    ]
  },
  {
    id: 75,
    scenario: "An experienced NCO questions your decision in front of the team in a way that seems disrespectful.",
    responses: [
      {
        id: "a",
        text: "Assert authority immediately to prevent further challenges"
      },
      {
        id: "b",
        text: "Consider their perspective and invite them to discuss privately"
      },
      {
        id: "c",
        text: "Ignore it to avoid escalation"
      },
      {
        id: "d",
        text: "Change your decision if their point is valid"
      },
      {
        id: "e",
        text: "Address the behavior later in a private counseling session"
      }
    ]
  },
  {
    id: 76,
    scenario: "You're asked to evaluate a new technology that could improve efficiency but would require significant retraining of your team.",
    responses: [
      {
        id: "a",
        text: "Reject it to avoid disruption"
      },
      {
        id: "b",
        text: "Accept it immediately without analysis"
      },
      {
        id: "c",
        text: "Conduct a cost-benefit analysis including training time"
      },
      {
        id: "d",
        text: "Pilot test it with a small group first"
      },
      {
        id: "e",
        text: "Survey your team for their input before deciding"
      }
    ]
  },
  {
    id: 77,
    scenario: "During a joint training event, you notice the other service is using outdated tactics that could reduce the effectiveness of the overall exercise.",
    responses: [
      {
        id: "a",
        text: "Focus on your unit's performance and ignore their tactics"
      },
      {
        id: "b",
        text: "Tactfully share current best practices with their leadership"
      },
      {
        id: "c",
        text: "Adapt your tactics to compensate for their approach"
      },
      {
        id: "d",
        text: "Formally report their outdated methods"
      },
      {
        id: "e",
        text: "Use it as a teaching opportunity in your after-action review"
      }
    ]
  },
  {
    id: 78,
    scenario: "A subordinate confides that they're considering leaving the Air Force due to personal reasons, but they're critical to an upcoming mission.",
    responses: [
      {
        id: "a",
        text: "Try to convince them to stay using the mission as leverage"
      },
      {
        id: "b",
        text: "Listen to their concerns and help them think through the decision"
      },
      {
        id: "c",
        text: "Immediately begin cross-training others on their duties"
      },
      {
        id: "d",
        text: "Inform leadership of the potential loss"
      },
      {
        id: "e",
        text: "Respect their decision while ensuring mission readiness"
      }
    ]
  },
  {
    id: 79,
    scenario: "You're leading a diverse team where language barriers occasionally cause misunderstandings that affect work quality.",
    responses: [
      {
        id: "a",
        text: "Require everyone to speak English only at all times"
      },
      {
        id: "b",
        text: "Implement clearer communication protocols and verification steps"
      },
      {
        id: "c",
        text: "Assign tasks to minimize language-dependent interaction"
      },
      {
        id: "d",
        text: "Provide language resources or training for the team"
      },
      {
        id: "e",
        text: "Request reassignment of members with limited English"
      }
    ]
  },
  {
    id: 80,
    scenario: "Your unit receives a commendation for work that was actually completed before you took command.",
    responses: [
      {
        id: "a",
        text: "Accept the commendation as the current commander"
      },
      {
        id: "b",
        text: "Clarify the timeline and credit the previous commander"
      },
      {
        id: "c",
        text: "Share the commendation with your current team"
      },
      {
        id: "d",
        text: "Decline the commendation entirely"
      },
      {
        id: "e",
        text: "Accept it but privately acknowledge the previous commander's role"
      }
    ]
  },
  {
    id: 81,
    scenario: "You must deliver difficult feedback to a senior NCO who has more years of service than you've been alive.",
    responses: [
      {
        id: "a",
        text: "Avoid the conversation to maintain the relationship"
      },
      {
        id: "b",
        text: "Deliver the feedback respectfully and professionally"
      },
      {
        id: "c",
        text: "Have another senior leader deliver the feedback"
      },
      {
        id: "d",
        text: "Frame it as suggestions rather than corrections"
      },
      {
        id: "e",
        text: "Acknowledge their experience while addressing the specific issues"
      }
    ]
  },
  {
    id: 82,
    scenario: "You're organizing a team-building event and some members feel excluded because the activity doesn't accommodate their physical limitations.",
    responses: [
      {
        id: "a",
        text: "Continue with the planned activity since most can participate"
      },
      {
        id: "b",
        text: "Cancel the event to avoid the issue"
      },
      {
        id: "c",
        text: "Modify the activity to be more inclusive"
      },
      {
        id: "d",
        text: "Plan a separate event for those with limitations"
      },
      {
        id: "e",
        text: "Offer alternative roles in the event for those who can't fully participate"
      }
    ]
  },
   {
    id: 83,
    scenario: "You're preparing a presentation for senior leadership when you find data that contradicts the narrative they've been promoting.",
    responses: [
      {
        id: "a",
        text: "Omit the contradictory data to avoid conflict"
      },
      {
        id: "b",
        text: "Present all data objectively and let leadership interpret it"
      },
      {
        id: "c",
        text: "Highlight only the data that supports leadership's position"
      },
      {
        id: "d",
        text: "Privately brief your supervisor on the contradiction before the presentation"
      },
      {
        id: "e",
        text: "Reframe the data to minimize the contradiction"
      }
    ]
  },
  {
    id: 84,
    scenario: "A team member is consistently meeting minimum standards but shows no motivation to improve or take on additional responsibilities.",
    responses: [
      {
        id: "a",
        text: "Accept their performance since they're meeting standards"
      },
      {
        id: "b",
        text: "Counsel them on the importance of continuous improvement"
      },
      {
        id: "c",
        text: "Assign them more challenging tasks to force growth"
      },
      {
        id: "d",
        text: "Investigate whether there are underlying issues affecting motivation"
      },
      {
        id: "e",
        text: "Document the pattern for future performance reviews"
      }
    ]
  },
  {
    id: 85,
    scenario: "You learn that a competing unit achieved better results using methods that violate the spirit, but not the letter, of regulations.",
    responses: [
      {
        id: "a",
        text: "Adopt their methods to remain competitive"
      },
      {
        id: "b",
        text: "Report their methods as violations"
      },
      {
        id: "c",
        text: "Continue with your current ethical approach"
      },
      {
        id: "d",
        text: "Bring the loophole to leadership's attention"
      },
      {
        id: "e",
        text: "Find innovative methods that are both effective and fully compliant"
      }
    ]
  },
  {
    id: 86,
    scenario: "During a high-stress operation, a normally reliable team member freezes and fails to execute their assigned tasks.",
    responses: [
      {
        id: "a",
        text: "Immediately remove them from the operation"
      },
      {
        id: "b",
        text: "Complete their tasks yourself while continuing to lead"
      },
      {
        id: "c",
        text: "Reassign them to a less critical task and have someone cover their role"
      },
      {
        id: "d",
        text: "Talk them through the task to help them regain composure"
      },
      {
        id: "e",
        text: "Continue the operation and address the issue in debrief"
      }
    ]
  },
  {
    id: 87,
    scenario: "You receive a performance report to sign for a subordinate that you believe is inflated compared to their actual contributions.",
    responses: [
      {
        id: "a",
        text: "Sign it without comment to avoid conflict"
      },
      {
        id: "b",
        text: "Refuse to sign and demand it be rewritten accurately"
      },
      {
        id: "c",
        text: "Discuss your concerns with the report writer"
      },
      {
        id: "d",
        text: "Add comments noting your reservations"
      },
      {
        id: "e",
        text: "Sign it but counsel the subordinate separately on actual performance"
      }
    ]
  },
  {
    id: 88,
    scenario: "Your team is tasked with a mission that poses legal risks, but you're assured by legal counsel that it's technically permissible.",
    responses: [
      {
        id: "a",
        text: "Proceed with confidence based on legal approval"
      },
      {
        id: "b",
        text: "Request a second legal opinion"
      },
      {
        id: "c",
        text: "Refuse the mission based on ethical concerns"
      },
      {
        id: "d",
        text: "Document all legal guidance before proceeding"
      },
      {
        id: "e",
        text: "Escalate concerns to higher leadership before execution"
      }
    ]
  },
  {
    id: 89,
    scenario: "A talented but arrogant officer regularly dismisses input from enlisted personnel, creating tension in the team.",
    responses: [
      {
        id: "a",
        text: "Ignore it as long as mission objectives are met"
      },
      {
        id: "b",
        text: "Publicly correct them when they dismiss enlisted input"
      },
      {
        id: "c",
        text: "Coach them privately on the value of diverse perspectives"
      },
      {
        id: "d",
        text: "Restructure team interactions to minimize their contact with enlisted"
      },
      {
        id: "e",
        text: "Document the behavior and provide formal counseling"
      }
    ]
  },
  {
    id: 90,
    scenario: "You're assigned to lead a project using a new system you've never worked with, and nobody else on your team has experience with it either.",
    responses: [
      {
        id: "a",
        text: "Admit your lack of expertise and request a more experienced leader"
      },
      {
        id: "b",
        text: "Accept the challenge and commit to rapid self-education"
      },
      {
        id: "c",
        text: "Request training resources for yourself and your team"
      },
      {
        id: "d",
        text: "Reach out to other units with experience for guidance"
      },
      {
        id: "e",
        text: "Propose hiring a consultant or contractor with expertise"
      }
    ]
  },
  {
    id: 91,
    scenario: "You observe a pattern of minor safety violations during routine operations that haven't caused incidents yet but could potentially lead to serious problems.",
    responses: [
      {
        id: "a",
        text: "Address each violation as you see it without broader action"
      },
      {
        id: "b",
        text: "Conduct a comprehensive safety review and retraining"
      },
      {
        id: "c",
        text: "Wait until an incident occurs to justify corrective action"
      },
      {
        id: "d",
        text: "Document violations and brief leadership on the trend"
      },
      {
        id: "e",
        text: "Implement immediate corrective measures and monitor compliance"
      }
    ]
  },
  {
    id: 92,
    scenario: "A subordinate approaches you claiming they're being treated unfairly compared to others, but you believe the treatment is justified based on performance.",
    responses: [
      {
        id: "a",
        text: "Dismiss their complaint and explain the performance basis"
      },
      {
        id: "b",
        text: "Review the situation objectively to verify your assessment"
      },
      {
        id: "c",
        text: "Adjust treatment to match others to avoid conflict"
      },
      {
        id: "d",
        text: "Provide specific feedback on how they can improve"
      },
      {
        id: "e",
        text: "Listen to their perspective and explain your rationale clearly"
      }
    ]
  },
  {
    id: 93,
    scenario: "You're planning a complex operation when a key piece of equipment fails. Repairs will take weeks, but there's a workaround that's less effective.",
    responses: [
      {
        id: "a",
        text: "Request to postpone the operation until repairs are complete"
      },
      {
        id: "b",
        text: "Use the workaround and adjust expectations accordingly"
      },
      {
        id: "c",
        text: "Attempt to borrow or acquire replacement equipment"
      },
      {
        id: "d",
        text: "Brief leadership on options and recommend a course of action"
      },
      {
        id: "e",
        text: "Modify the operation plan to work around the equipment loss"
      }
    ]
  },
  {
    id: 94,
    scenario: "During a deployment, you discover your unit's living conditions are significantly worse than other units in the area, affecting morale.",
    responses: [
      {
        id: "a",
        text: "Tell your team to adapt and maintain professionalism"
      },
      {
        id: "b",
        text: "Formally request improved conditions through proper channels"
      },
      {
        id: "c",
        text: "Have your team make improvements within available resources"
      },
      {
        id: "d",
        text: "Document the disparity and its morale impact for leadership"
      },
      {
        id: "e",
        text: "Investigate why the disparity exists before taking action"
      }
    ]
  },
  {
    id: 95,
    scenario: "You're asked to mentor a new officer who has a very different leadership style than yours, and you're concerned their approach won't be effective.",
    responses: [
      {
        id: "a",
        text: "Insist they adopt your proven methods"
      },
      {
        id: "b",
        text: "Allow them to develop their own style through experience"
      },
      {
        id: "c",
        text: "Share your approach while respecting their individual style"
      },
      {
        id: "d",
        text: "Focus on core principles rather than specific methods"
      },
      {
        id: "e",
        text: "Request a different mentee who's more compatible"
      }
    ]
  },
  {
    id: 96,
    scenario: "A media outlet requests an interview about your unit's recent accomplishments, but you haven't received authorization to speak to press.",
    responses: [
      {
        id: "a",
        text: "Decline and refer them to public affairs"
      },
      {
        id: "b",
        text: "Accept the interview since it's positive coverage"
      },
      {
        id: "c",
        text: "Provide written responses instead of an interview"
      },
      {
        id: "d",
        text: "Request guidance from your chain of command"
      },
      {
        id: "e",
        text: "Give the interview but avoid specific details"
      }
    ]
  },
  {
    id: 97,
    scenario: "You notice that your unit's administrative processes are outdated and inefficient compared to best practices you've seen elsewhere.",
    responses: [
      {
        id: "a",
        text: "Continue current processes to maintain consistency"
      },
      {
        id: "b",
        text: "Immediately implement the better practices you've observed"
      },
      {
        id: "c",
        text: "Propose improvements through proper change management channels"
      },
      {
        id: "d",
        text: "Pilot test new processes with a small team first"
      },
      {
        id: "e",
        text: "Survey your team for input before proposing changes"
      }
    ]
  },
  {
    id: 98,
    scenario: "During an evaluation period, a subordinate who typically performs well has a noticeable decline in performance coinciding with personal issues.",
    responses: [
      {
        id: "a",
        text: "Evaluate based solely on recent performance"
      },
      {
        id: "b",
        text: "Give them a pass due to personal circumstances"
      },
      {
        id: "c",
        text: "Consider the full evaluation period while noting recent challenges"
      },
      {
        id: "d",
        text: "Offer support resources while maintaining performance standards"
      },
      {
        id: "e",
        text: "Extend the evaluation period to allow for recovery"
      }
    ]
  },
  {
    id: 99,
    scenario: "You're assigned to brief senior leadership on a topic where you have limited expertise, and there's no time to become fully knowledgeable.",
    responses: [
      {
        id: "a",
        text: "Request someone more qualified give the brief"
      },
      {
        id: "b",
        text: "Prepare thoroughly with available resources and clearly state your knowledge limits"
      },
      {
        id: "c",
        text: "Find an expert to co-brief with you"
      },
      {
        id: "d",
        text: "Focus the brief on what you do know and have backup for questions"
      },
      {
        id: "e",
        text: "Decline the assignment as outside your competency"
      }
    ]
  },
  {
    id: 100,
    scenario: "A supplier consistently delivers materials late, impacting your unit's ability to meet deadlines, but they're the only approved vendor.",
    responses: [
      {
        id: "a",
        text: "Accept the delays as unavoidable"
      },
      {
        id: "b",
        text: "Document delivery issues and request approval for alternative vendors"
      },
      {
        id: "c",
        text: "Build larger buffer times into planning"
      },
      {
        id: "d",
        text: "Work with the supplier to identify and resolve root causes"
      },
      {
        id: "e",
        text: "Escalate the issue to contracting or acquisition authorities"
      }
    ]
  },
  {
    id: 101,
    scenario: "You're leading a team discussion when two strong personalities dominate the conversation while quieter members don't contribute.",
    responses: [
      {
        id: "a",
        text: "Let the discussion continue naturally"
      },
      {
        id: "b",
        text: "Directly ask quieter members for their input"
      },
      {
        id: "c",
        text: "Set ground rules to ensure balanced participation"
      },
      {
        id: "d",
        text: "Meet with quieter members separately to get their input"
      },
      {
        id: "e",
        text: "Use structured techniques like round-robin to ensure all voices are heard"
      }
    ]
  },
  {
    id: 102,
    scenario: "You learn that budget cuts will eliminate a position on your team, and you must decide who to recommend for reassignment.",
    responses: [
      {
        id: "a",
        text: "Recommend the newest team member"
      },
      {
        id: "b",
        text: "Recommend the lowest performer"
      },
      {
        id: "c",
        text: "Recommend based on mission needs and individual career opportunities"
      },
      {
        id: "d",
        text: "Let the team members volunteer"
      },
      {
        id: "e",
        text: "Argue for the position to remain and propose alternative cuts"
      }
    ]
  },
  {
    id: 103,
    scenario: "A peer commander asks you to temporarily loan them one of your best performers for an urgent project, leaving you short-handed.",
    responses: [
      {
        id: "a",
        text: "Refuse to maintain your own team's capability"
      },
      {
        id: "b",
        text: "Agree to support the overall mission"
      },
      {
        id: "c",
        text: "Offer an alternative team member who's less critical"
      },
      {
        id: "d",
        text: "Negotiate terms that minimize impact on your operations"
      },
      {
        id: "e",
        text: "Consult with your supervisor before committing"
      }
    ]
  },
  {
    id: 104,
    scenario: "During a training exercise, an inexperienced team member makes a decision that would have serious consequences in a real scenario.",
    responses: [
      {
        id: "a",
        text: "Immediately stop the exercise and correct them"
      },
      {
        id: "b",
        text: "Let the scenario play out to demonstrate consequences"
      },
      {
        id: "c",
        text: "Guide them to recognize the error themselves"
      },
      {
        id: "d",
        text: "Intervene and explain the proper approach"
      },
      {
        id: "e",
        text: "Address it thoroughly in the after-action review"
      }
    ]
  },
  {
    id: 105,
    scenario: "You receive criticism from leadership that you believe is based on incomplete or inaccurate information about your unit's situation.",
    responses: [
      {
        id: "a",
        text: "Accept the criticism without comment"
      },
      {
        id: "b",
        text: "Respectfully provide complete information to clarify the situation"
      },
      {
        id: "c",
        text: "Defend your unit's actions assertively"
      },
      {
        id: "d",
        text: "Request a follow-up meeting to discuss the situation in detail"
      },
      {
        id: "e",
        text: "Document the accurate information for the record"
      }
    ]
  },
  {
    id: 106,
    scenario: "Your unit is scheduled for a major exercise, but several key members have legitimate conflicts that would reduce effectiveness.",
    responses: [
      {
        id: "a",
        text: "Cancel personal commitments to ensure full participation"
      },
      {
        id: "b",
        text: "Request to reschedule the exercise"
      },
      {
        id: "c",
        text: "Proceed with available personnel and adjust expectations"
      },
      {
        id: "d",
        text: "Request augmentation from other units"
      },
      {
        id: "e",
        text: "Use it as an opportunity to train backup personnel"
      }
    ]
  },
  {
    id: 107,
    scenario: "A team member consistently volunteers for additional duties and projects but their quality is declining due to overcommitment.",
    responses: [
      {
        id: "a",
        text: "Continue accepting their volunteers as it shows initiative"
      },
      {
        id: "b",
        text: "Counsel them on maintaining quality over quantity"
      },
      {
        id: "c",
        text: "Limit their additional commitments to protect core performance"
      },
      {
        id: "d",
        text: "Help them prioritize and manage their workload better"
      },
      {
        id: "e",
        text: "Redistribute some of their duties to others"
      }
    ]
  },
  {
    id: 108,
    scenario: "You discover that a long-standing unit tradition violates a recently updated regulation that hasn't been widely publicized.",
    responses: [
      {
        id: "a",
        text: "Continue the tradition until officially notified"
      },
      {
        id: "b",
        text: "Immediately stop the tradition and inform the team"
      },
      {
        id: "c",
        text: "Research whether an exemption or waiver is possible"
      },
      {
        id: "d",
        text: "Modify the tradition to comply with the new regulation"
      },
      {
        id: "e",
        text: "Verify the regulation's applicability before making changes"
      }
    ]
  },
  {
    id: 109,
    scenario: "During a crisis situation, you must make a rapid decision but two subject matter experts give you conflicting recommendations.",
    responses: [
      {
        id: "a",
        text: "Follow the recommendation from the more senior expert"
      },
      {
        id: "b",
        text: "Make a decision based on your own assessment"
      },
      {
        id: "c",
        text: "Delay the decision until consensus is reached"
      },
      {
        id: "d",
        text: "Quickly evaluate the reasoning behind each recommendation"
      },
      {
        id: "e",
        text: "Choose the more conservative option to minimize risk"
      }
    ]
  },
  {
    id: 110,
    scenario: "A subordinate's spouse contacts you directly to discuss concerns about their workload and stress level.",
    responses: [
      {
        id: "a",
        text: "Direct them to speak with their spouse directly"
      },
      {
        id: "b",
        text: "Listen to concerns and discuss with the subordinate privately"
      },
      {
        id: "c",
        text: "Refer them to family support services"
      },
      {
        id: "d",
        text: "Immediately reduce the subordinate's workload"
      },
      {
        id: "e",
        text: "Politely explain you can only discuss work matters with the member"
      }
    ]
  },
  {
    id: 111,
    scenario: "You're tasked with implementing a cost-saving measure that will reduce quality of life for your team without affecting mission capability.",
    responses: [
      {
        id: "a",
        text: "Implement it without comment as ordered"
      },
      {
        id: "b",
        text: "Propose alternative cost savings that have less impact"
      },
      {
        id: "c",
        text: "Implement it but explain the rationale to your team"
      },
      {
        id: "d",
        text: "Advocate against the measure through proper channels"
      },
      {
        id: "e",
        text: "Find ways to minimize the impact while achieving cost savings"
      }
    ]
  },
  {
    id: 112,
    scenario: "Two members of your team who work closely together are in a romantic relationship that isn't prohibited but is affecting team dynamics.",
    responses: [
      {
        id: "a",
        text: "Ignore it unless work performance suffers"
      },
      {
        id: "b",
        text: "Separate them to different teams or shifts"
      },
      {
        id: "c",
        text: "Counsel them on maintaining professionalism at work"
      },
      {
        id: "d",
        text: "Monitor the situation and address specific issues as they arise"
      },
      {
        id: "e",
        text: "Verify the relationship doesn't violate fraternization policies"
      }
    ]
  },
  {
    id: 113,
    scenario: "You're preparing annual performance reports and realize your team's accomplishments don't look impressive on paper despite excellent work.",
    responses: [
      {
        id: "a",
        text: "Submit honest reports even if they seem underwhelming"
      },
      {
        id: "b",
        text: "Reframe accomplishments to better showcase their impact"
      },
      {
        id: "c",
        text: "Add exaggerated language to make them more competitive"
      },
      {
        id: "d",
        text: "Include context explaining the challenging circumstances"
      },
      {
        id: "e",
        text: "Consult with senior raters on effective presentation"
      }
    ]
  },
  {
    id: 114,
    scenario: "A highly qualified external candidate is recommended for a position you believe should go to someone from within your unit.",
    responses: [
      {
        id: "a",
        text: "Advocate strongly for the internal candidate"
      },
      {
        id: "b",
        text: "Accept the external candidate without objection"
      },
      {
        id: "c",
        text: "Request an objective comparison of qualifications"
      },
      {
        id: "d",
        text: "Support whoever is best qualified regardless of origin"
      },
      {
        id: "e",
        text: "Express concerns about team morale if internal candidate is passed over"
      }
    ]
  },
  {
    id: 115,
    scenario: "During a field exercise, weather conditions deteriorate beyond what was planned for, creating potential safety concerns.",
    responses: [
      {
        id: "a",
        text: "Continue the exercise as planned to build resilience"
      },
      {
        id: "b",
        text: "Immediately suspend operations until conditions improve"
      },
      {
        id: "c",
        text: "Modify the exercise to reduce exposure while maintaining training value"
      },
      {
        id: "d",
        text: "Consult with leadership and safety personnel before deciding"
      },
      {
        id: "e",
        text: "Monitor conditions closely and be prepared to suspend if necessary"
      }
    ]
  },
  {
    id: 116,
    scenario: "You learn that your unit will be evaluated using metrics that don't accurately reflect your primary mission accomplishments.",
    responses: [
      {
        id: "a",
        text: "Focus efforts on meeting the metrics as defined"
      },
      {
        id: "b",
        text: "Continue mission focus and accept poor metric ratings"
      },
      {
        id: "c",
        text: "Propose alternative or additional metrics to leadership"
      },
      {
        id: "d",
        text: "Balance mission requirements with metric performance"
      },
      {
        id: "e",
        text: "Document mission accomplishments separately from metrics"
      }
    ]
  },
  {
    id: 117,
    scenario: "A team member asks for your recommendation for a program you don't think they're ready for.",
    responses: [
      {
        id: "a",
        text: "Provide the recommendation to support their aspirations"
      },
      {
        id: "b",
        text: "Decline to recommend them"
      },
      {
        id: "c",
        text: "Give an honest assessment of their readiness"
      },
      {
        id: "d",
        text: "Recommend them but note areas for development"
      },
      {
        id: "e",
        text: "Discuss their readiness and help them develop necessary skills first"
      }
    ]
  },
  {
    id: 118,
    scenario: "You notice that one team member consistently stays late to help others complete their work, which is admirable but may indicate workload imbalance.",
    responses: [
      {
        id: "a",
        text: "Praise their teamwork without further investigation"
      },
      {
        id: "b",
        text: "Analyze workload distribution across the team"
      },
      {
        id: "c",
        text: "Tell them to stop enabling others' poor time management"
      },
      {
        id: "d",
        text: "Ensure they're not being taken advantage of"
      },
      {
        id: "e",
        text: "Investigate whether others need additional training or support"
      }
    ]
  },
  {
    id: 119,
    scenario: "You're assigned to lead a project that directly conflicts with guidance you provided to your team just weeks earlier.",
    responses: [
      {
        id: "a",
        text: "Implement the new project without acknowledging the contradiction"
      },
      {
        id: "b",
        text: "Explain the change to your team openly and honestly"
      },
      {
        id: "c",
        text: "Question leadership about the strategic shift"
      },
      {
        id: "d",
        text: "Delay implementation while seeking clarification"
      },
      {
        id: "e",
        text: "Acknowledge the change and provide context for the new direction"
      }
    ]
  },
  {
    id: 120,
    scenario: "A subordinate reveals to you that they're struggling with substance abuse issues but hasn't sought help yet.",
    responses: [
      {
        id: "a",
        text: "Immediately report it to your chain of command"
      },
      {
        id: "b",
        text: "Encourage them to self-refer to assistance programs"
      },
      {
        id: "c",
        text: "Keep their confidence and monitor the situation"
      },
      {
        id: "d",
        text: "Connect them with appropriate resources while following reporting requirements"
      },
      {
        id: "e",
        text: "Give them a deadline to seek help or you'll intervene"
      }
    ]
  },
  {
    id: 121,
    scenario: "During a multi-day exercise, you realize your initial plan has significant flaws, but changing course now would require significant effort.",
    responses: [
      {
        id: "a",
        text: "Continue with the flawed plan to avoid disruption"
      },
      {
        id: "b",
        text: "Immediately implement a new plan"
      },
      {
        id: "c",
        text: "Make incremental adjustments to address the worst flaws"
      },
      {
        id: "d",
        text: "Acknowledge the issues and use them as learning opportunities"
      },
      {
        id: "e",
        text: "Brief leadership on the situation and your proposed corrections"
      }
    ]
  },
  {
    id: 122,
    scenario: "You're asked to take on additional responsibilities without additional resources or reduction in current duties.",
    responses: [
      {
        id: "a",
        text: "Accept the duties and figure out how to manage"
      },
      {
        id: "b",
        text: "Decline the additional responsibilities"
      },
      {
        id: "c",
        text: "Accept while clearly outlining the resource constraints"
      },
      {
        id: "d",
        text: "Propose which current duties could be reduced or delegated"
      },
      {
        id: "e",
        text: "Accept temporarily while requesting a workload review"
      }
    ]
  },
  {
    id: 123,
    scenario: "A team member consistently produces excellent individual work but struggles when collaborating with others.",
    responses: [
      {
        id: "a",
        text: "Assign them primarily independent work"
      },
      {
        id: "b",
        text: "Force more collaboration opportunities to improve their skills"
      },
      {
        id: "c",
        text: "Provide coaching on effective collaboration techniques"
      },
      {
        id: "d",
        text: "Accept that everyone has different strengths"
      },
      {
        id: "e",
        text: "Pair them with mentors who excel at teamwork"
      }
    ]
  },
  {
    id: 124,
    scenario: "You discover that standard procedures for a routine task are outdated and potentially create unnecessary risk.",
    responses: [
      {
        id: "a",
        text: "Continue following procedures until officially changed"
      },
      {
        id: "b",
        text: "Immediately modify procedures for your unit"
      },
      {
        id: "c",
        text: "Document the risk and submit formal recommendations for revision"
      },
      {
        id: "d",
        text: "Implement risk mitigation while following existing procedures"
      },
      {
        id: "e",
        text: "Consult with safety personnel before making changes"
      }
    ]
  },
  {
    id: 125,
    scenario: "A senior leader asks for your opinion on a decision, but you suspect they've already made up their mind.",
    responses: [
      {
        id: "a",
        text: "Agree with what you think they want to hear"
      },
      {
        id: "b",
        text: "Provide your honest assessment regardless"
      },
      {
        id: "c",
        text: "Ask clarifying questions to understand their thinking first"
      },
      {
        id: "d",
        text: "Offer a balanced perspective showing multiple viewpoints"
      },
      {
        id: "e",
        text: "Decline to comment if you can't be objective"
      }
    ]
  },
  {
    id: 126,
    scenario: "Your unit receives new equipment that could improve operations, but nobody has training or experience using it.",
    responses: [
      {
        id: "a",
        text: "Store it until proper training is available"
      },
      {
        id: "b",
        text: "Have your most technical members figure it out"
      },
      {
        id: "c",
        text: "Request formal training from the manufacturer or experts"
      },
      {
        id: "d",
        text: "Designate operators to self-train using manuals and documentation"
      },
      {
        id: "e",
        text: "Reach out to other units already using the equipment"
      }
    ]
  },
  {
    id: 127,
    scenario: "You're mediating a conflict between two team members when you realize both have valid points and legitimate grievances.",
    responses: [
      {
        id: "a",
        text: "Choose the side you agree with more"
      },
      {
        id: "b",
        text: "Validate both perspectives and facilitate compromise"
      },
      {
        id: "c",
        text: "Mandate a solution that addresses both concerns"
      },
      {
        id: "d",
        text: "Separate them to avoid further conflict"
      },
      {
        id: "e",
        text: "Help them find common ground and mutually agreeable solutions"
      }
    ]
  },
  {
    id: 128,
    scenario: "A training certification deadline is approaching, and several team members won't complete it due to operational demands.",
    responses: [
      {
        id: "a",
        text: "Prioritize operations and accept late certifications"
      },
      {
        id: "b",
        text: "Pull people from operations to complete training"
      },
      {
        id: "c",
        text: "Request an extension based on operational requirements"
      },
      {
        id: "d",
        text: "Find creative scheduling to accomplish both"
      },
      {
        id: "e",
        text: "Brief leadership on the conflict and seek guidance"
      }
    ]
  },
  {
    id: 129,
    scenario: "You witness a peer commander treating their subordinates in a way you find unprofessional, though not abusive.",
    responses: [
      {
        id: "a",
        text: "Mind your own business and focus on your unit"
      },
      {
        id: "b",
        text: "Report their behavior to higher leadership"
      },
      {
        id: "c",
        text: "Speak with them privately about your observations"
      },
      {
        id: "d",
        text: "Set a better example with your own leadership"
      },
      {
        id: "e",
        text: "Discuss with a senior mentor for perspective"
      }
    ]
  },
  {
    id: 130,
    scenario: "Your unit is selected for a high-profile demonstration, but you believe you're being set up to fail due to unrealistic expectations.",
    responses: [
      {
        id: "a",
        text: "Accept the mission and do your best"
      },
      {
        id: "b",
        text: "Clearly articulate constraints and realistic outcomes to leadership"
      },
      {
        id: "c",
        text: "Request additional resources to meet expectations"
      },
      {
        id: "d",
        text: "Attempt to decline or recommend a better-suited unit"
      },
      {
        id: "e",
        text: "Accept but document your concerns and resource limitations"
      }
    ]
  },
  {
    id: 131,
    scenario: "A promising young officer shares that they're considering leaving the Air Force due to family pressures.",
    responses: [
      {
        id: "a",
        text: "Try to convince them to stay by highlighting career benefits"
      },
      {
        id: "b",
        text: "Listen without judgment and help them think through options"
      },
      {
        id: "c",
        text: "Refer them to family support and career counseling resources"
      },
      {
        id: "d",
        text: "Share your own experiences balancing service and family"
      },
      {
        id: "e",
        text: "Respect their decision while ensuring they're aware of all alternatives"
      }
    ]
  },
  {
    id: 132,
    scenario: "During an inspection, an inspector asks about a program you've been told to say is functioning, but you know has significant problems.",
    responses: [
      {
        id: "a",
        text: "Follow instructions and present it positively"
      },
      {
        id: "b",
        text: "Provide honest information about actual status"
      },
      {
        id: "c",
        text: "Present factual data and let them draw conclusions"
      },
      {
        id: "d",
        text: "Redirect questions to your supervisor"
      },
      {
        id: "e",
        text: "Acknowledge problems while showing improvement efforts"
      }
    ]
  },
  {
    id: 133,
    scenario: "You're tasked with cutting costs by 15%, but any cuts you identify will directly impact mission readiness.",
    responses: [
      {
        id: "a",
        text: "Make the cuts as ordered without comment"
      },
      {
        id: "b",
        text: "Refuse to implement cuts that affect readiness"
      },
      {
        id: "c",
        text: "Present analysis showing readiness impact and seek guidance"
      },
      {
        id: "d",
        text: "Find creative efficiencies that minimize readiness impact"
      },
      {
        id: "e",
        text: "Propose alternative areas for cuts outside your unit"
      }
    ]
  },
  {
    id: 134,
    scenario: "A team member privately expresses concerns about the ethics of a mission they've been assigned.",
    responses: [
      {
        id: "a",
        text: "Order them to complete the mission regardless"
      },
      {
        id: "b",
        text: "Listen to their concerns and verify the mission's legitimacy"
      },
      {
        id: "c",
        text: "Refer them to the chaplain or legal office"
      },
      {
        id: "d",
        text: "Reassign them and complete the mission with someone else"
      },
      {
        id: "e",
        text: "Discuss the mission's purpose and legal/ethical basis"
      }
    ]
  },
  {
    id: 135,
    scenario: "You receive conflicting priorities from two different leaders at the same level, both claiming urgency.",
    responses: [
      {
        id: "a",
        text: "Choose the task from the leader you report to more frequently"
      },
      {
        id: "b",
        text: "Work on the task that seems more mission-critical"
      },
      {
        id: "c",
        text: "Inform both leaders of the conflict and request prioritization"
      },
      {
        id: "d",
        text: "Attempt to complete both simultaneously"
      },
      {
        id: "e",
        text: "Escalate to your direct supervisor for guidance"
      }
    ]
  },
  {
    id: 136,
    scenario: "Your predecessor left detailed notes indicating they were planning significant changes that weren't communicated to leadership.",
    responses: [
      {
        id: "a",
        text: "Implement the changes as they apparently intended"
      },
      {
        id: "b",
        text: "Ignore the notes and develop your own plans"
      },
      {
        id: "c",
        text: "Review the proposed changes and brief leadership before proceeding"
      },
      {
        id: "d",
        text: "Contact your predecessor to understand their reasoning"
      },
      {
        id: "e",
        text: "Evaluate the changes on merit and proceed appropriately"
      }
    ]
  },
  {
    id: 137,
    scenario: "During a critical operation, communications fail and you must make a significant decision without guidance from leadership.",
    responses: [
      {
        id: "a",
        text: "Wait for communications to be restored before acting"
      },
      {
        id: "b",
        text: "Make the decision based on your understanding of commander's intent"
      },
      {
        id: "c",
        text: "Choose the most conservative option available"
      },
      {
        id: "d",
        text: "Consult with available senior personnel before deciding"
      },
      {
        id: "e",
        text: "Assess the situation and make the best decision possible with available information"
      }
    ]
  },
  {
    id: 138,
    scenario: "A talented team member is offered a civilian job with significantly better pay and asks your advice on whether to take it.",
    responses: [
      {
        id: "a",
        text: "Encourage them to stay in the Air Force"
      },
      {
        id: "b",
        text: "Encourage them to take the civilian opportunity"
      },
      {
        id: "c",
        text: "Help them objectively compare the opportunities"
      },
      {
        id: "d",
        text: "Decline to advise on such a personal decision"
      },
      {
        id: "e",
        text: "Share your perspective while emphasizing it's their decision"
      }
    ]
  },
  {
    id: 139,
    scenario: "You're implementing a new policy when several team members present valid concerns you hadn't considered.",
    responses: [
      {
        id: "a",
        text: "Continue implementation as planned to maintain credibility"
      },
      {
        id: "b",
        text: "Pause implementation to address the concerns"
      },
      {
        id: "c",
        text: "Modify the policy to account for valid concerns"
      },
      {
        id: "d",
        text: "Acknowledge concerns but proceed with implementation"
      },
      {
        id: "e",
        text: "Consult with leadership about adjusting the policy"
      }
    ]
  },
  {
    id: 140,
    scenario: "A subordinate asks you to support their request for special consideration that would set a precedent you're uncomfortable establishing.",
    responses: [
      {
        id: "a",
        text: "Deny the request to avoid setting the precedent"
      },
      {
        id: "b",
        text: "Approve it based on the individual circumstances"
      },
      {
        id: "c",
        text: "Evaluate the request on its merits and potential precedent"
      },
      {
        id: "d",
        text: "Seek guidance from leadership on handling the request"
      },
      {
        id: "e",
        text: "Approve it but make clear it's an exceptional circumstance"
      }
    ]
  },
  {
    id: 141,
    scenario: "You notice that your team's morale is declining, but performance metrics remain acceptable.",
    responses: [
      {
        id: "a",
        text: "Focus on maintaining performance and ignore morale issues"
      },
      {
        id: "b",
        text: "Investigate underlying causes of declining morale"
      },
      {
        id: "c",
        text: "Organize team-building activities to boost morale"
      },
      {
        id: "d",
        text: "Conduct anonymous surveys to understand concerns"
      },
      {
        id: "e",
        text: "Document innovations and suggest incorporating them into standards"
      }
    ]
  },
  {
    id: 142,
    scenario: "A critical system fails during an important demonstration to senior leadership from outside your organization.",
    responses: [
      {
        id: "a",
        text: "Make excuses about the failure being unusual"
      },
      {
        id: "b",
        text: "Acknowledge the failure honestly and explain corrective measures"
      },
      {
        id: "c",
        text: "Attempt a quick fix to continue the demonstration"
      },
      {
        id: "d",
        text: "Shift focus to systems that are working properly"
      },
      {
        id: "e",
        text: "Reschedule the demonstration after repairs"
      }
    ]
  },
  {
    id: 143,
    scenario: "You're assigned a project with unclear objectives and no clear success criteria from leadership.",
    responses: [
      {
        id: "a",
        text: "Begin work and adjust as you learn more"
      },
      {
        id: "b",
        text: "Request clarification before starting"
      },
      {
        id: "c",
        text: "Define your own objectives based on your understanding"
      },
      {
        id: "d",
        text: "Research similar past projects for guidance"
      },
      {
        id: "e",
        text: "Develop proposed objectives and get leadership approval"
      }
    ]
  },
  {
    id: 144,
    scenario: "A team member consistently questions your decisions privately after meetings, undermining implementation.",
    responses: [
      {
        id: "a",
        text: "Ignore their concerns and expect compliance"
      },
      {
        id: "b",
        text: "Address the pattern of behavior directly"
      },
      {
        id: "c",
        text: "Invite them to voice concerns during meetings instead"
      },
      {
        id: "d",
        text: "Consider whether their concerns have merit"
      },
      {
        id: "e",
        text: "Set clear expectations about supporting team decisions"
      }
    ]
  },
  {
    id: 145,
    scenario: "You discover your unit has been allocated resources meant for another unit due to an administrative error.",
    responses: [
      {
        id: "a",
        text: "Use the resources since you received them officially"
      },
      {
        id: "b",
        text: "Immediately report the error and return the resources"
      },
      {
        id: "c",
        text: "Verify the error before taking action"
      },
      {
        id: "d",
        text: "Contact the other unit to coordinate resolution"
      },
      {
        id: "e",
        text: "Inform your chain of command and await guidance"
      }
    ]
  },
  {
    id: 146,
    scenario: "During deployment, you learn that living conditions for junior enlisted are significantly worse than for officers.",
    responses: [
      {
        id: "a",
        text: "Accept it as normal hierarchical differences"
      },
      {
        id: "b",
        text: "Work to improve conditions for junior enlisted"
      },
      {
        id: "c",
        text: "Voluntarily reduce officer accommodations to share resources"
      },
      {
        id: "d",
        text: "Report the disparity to leadership with recommendations"
      },
      {
        id: "e",
        text: "Investigate whether the disparity is necessary or correctable"
      }
    ]
  },
  {
    id: 147,
    scenario: "You're asked to provide input on a strategy you believe is fundamentally flawed.",
    responses: [
      {
        id: "a",
        text: "Provide input as requested without expressing concerns"
      },
      {
        id: "b",
        text: "Clearly articulate your concerns about the strategy"
      },
      {
        id: "c",
        text: "Offer alternative approaches along with your input"
      },
      {
        id: "d",
        text: "Request more information before providing input"
      },
      {
        id: "e",
        text: "Identify specific flaws and suggest improvements"
      }
    ]
  },
  {
    id: 148,
    scenario: "A subordinate reports that they witnessed security violations by maintenance contractors working on your base.",
    responses: [
      {
        id: "a",
        text: "Tell them to report it to security forces directly"
      },
      {
        id: "b",
        text: "Gather details and report through proper channels"
      },
      {
        id: "c",
        text: "Confront the contractors about the allegations"
      },
      {
        id: "d",
        text: "Document the report and inform your chain of command"
      },
      {
        id: "e",
        text: "Investigate the claims before reporting"
      }
    ]
  },
  {
    id: 149,
    scenario: "Your unit receives recognition for exceptional performance, but you know success was largely due to favorable circumstances rather than superior work.",
    responses: [
      {
        id: "a",
        text: "Accept the recognition graciously"
      },
      {
        id: "b",
        text: "Clarify the role circumstances played in success"
      },
      {
        id: "c",
        text: "Decline the recognition as undeserved"
      },
      {
        id: "d",
        text: "Accept it but privately acknowledge the reality"
      },
      {
        id: "e",
        text: "Credit the team while providing honest context"
      }
    ]
  },
  {
    id: 150,
    scenario: "You're leading a change initiative that faces significant resistance from experienced team members.",
    responses: [
      {
        id: "a",
        text: "Push forward regardless of resistance"
      },
      {
        id: "b",
        text: "Pause to better understand and address concerns"
      },
      {
        id: "c",
        text: "Mandate compliance despite resistance"
      },
      {
        id: "d",
        text: "Involve resisters in refining the initiative"
      },
      {
        id: "e",
        text: "Better communicate the rationale and benefits"
      }
    ]
  },
  {
    id: 151,
    scenario: "A team member's personal appearance has declined noticeably over recent weeks.",
    responses: [
      {
        id: "a",
        text: "Formally counsel them on appearance standards"
      },
      {
        id: "b",
        text: "Privately ask if everything is okay"
      },
      {
        id: "c",
        text: "Ignore it unless it violates regulations"
      },
      {
        id: "d",
        text: "Monitor for other signs of personal issues"
      },
      {
        id: "e",
        text: "Address the appearance while showing concern for wellbeing"
      }
    ]
  },
  {
    id: 152,
    scenario: "You're assigned to evaluate a program you helped design, creating a potential conflict of interest.",
    responses: [
      {
        id: "a",
        text: "Conduct the evaluation objectively despite your involvement"
      },
      {
        id: "b",
        text: "Request someone else perform the evaluation"
      },
      {
        id: "c",
        text: "Disclose the conflict and proceed with transparency"
      },
      {
        id: "d",
        text: "Include additional evaluators to balance your perspective"
      },
      {
        id: "e",
        text: "Focus evaluation on data rather than subjective assessment"
      }
    ]
  },
  {
    id: 153,
    scenario: "During a readiness inspection, you identify deficiencies that your unit could quickly fix but the inspectors haven't noticed yet.",
    responses: [
      {
        id: "a",
        text: "Quickly fix them before inspectors see"
      },
      {
        id: "b",
        text: "Point out the deficiencies proactively"
      },
      {
        id: "c",
        text: "Let the inspection proceed naturally"
      },
      {
        id: "d",
        text: "Fix what you can while being honest if asked"
      },
      {
        id: "e",
        text: "Document them for correction after inspection"
      }
    ]
  },
  {
    id: 154,
    scenario: "A subordinate shares information with you in confidence that suggests another team member may be dealing with mental health issues.",
    responses: [
      {
        id: "a",
        text: "Keep the confidence and take no action"
      },
      {
        id: "b",
        text: "Immediately refer the situation to mental health services"
      },
      {
        id: "c",
        text: "Approach the affected member privately to offer support"
      },
      {
        id: "d",
        text: "Monitor the situation and be prepared to intervene if necessary"
      },
      {
        id: "e",
        text: "Consult with appropriate resources while respecting privacy"
      }
    ]
  },
  {
    id: 155,
    scenario: "You're offered a deployment opportunity that would benefit your career but would mean breaking a promise to attend a significant family event.",
    responses: [
      {
        id: "a",
        text: "Accept the deployment as duty comes first"
      },
      {
        id: "b",
        text: "Decline to honor your family commitment"
      },
      {
        id: "c",
        text: "Discuss the situation honestly with both family and leadership"
      },
      {
        id: "d",
        text: "Accept but work to find alternative family arrangements"
      },
      {
        id: "e",
        text: "Ask if deployment timing can be adjusted"
      }
    ]
  },
  {
    id: 156,
    scenario: "Your unit's social media account posts content that generates negative public attention, though it wasn't intended to be offensive.",
    responses: [
      {
        id: "a",
        text: "Delete the post and ignore the attention"
      },
      {
        id: "b",
        text: "Leave it up and defend the intent"
      },
      {
        id: "c",
        text: "Remove the post and issue a clarification or apology"
      },
      {
        id: "d",
        text: "Consult with public affairs before taking action"
      },
      {
        id: "e",
        text: "Address it proactively and revise social media guidelines"
      }
    ]
  },
  {
    id: 157,
    scenario: "During a joint exercise with reserve or guard units, you notice significant capability gaps in their training.",
    responses: [
      {
        id: "a",
        text: "Report the gaps to their leadership"
      },
      {
        id: "b",
        text: "Adjust the exercise to accommodate their capability level"
      },
      {
        id: "c",
        text: "Offer to provide training or share resources"
      },
      {
        id: "d",
        text: "Focus on your unit's performance"
      },
      {
        id: "e",
        text: "Use the exercise as a mentoring opportunity"
      }
    ]
  },
  {
    id: 158,
    scenario: "You learn that a decision you made weeks ago has created unintended negative consequences you didn't anticipate.",
    responses: [
      {
        id: "a",
        text: "Defend the decision and wait for things to stabilize"
      },
      {
        id: "b",
        text: "Acknowledge the error and reverse the decision"
      },
      {
        id: "c",
        text: "Modify the implementation to address consequences"
      },
      {
        id: "d",
        text: "Communicate the issue transparently and adjust course"
      },
      {
        id: "e",
        text: "Gather input on solutions before taking corrective action"
      }
    ]
  },
  {
    id: 159,
    scenario: "A superior officer asks you to prioritize work on a project for their personal benefit that isn't directly mission-related.",
    responses: [
      {
        id: "a",
        text: "Comply to maintain good relations"
      },
      {
        id: "b",
        text: "Politely decline citing mission priorities"
      },
      {
        id: "c",
        text: "Complete it if time allows without compromising mission work"
      },
      {
        id: "d",
        text: "Report the inappropriate request"
      },
      {
        id: "e",
        text: "Seek clarification on how it relates to official duties"
      }
    ]
  },
  {
    id: 160,
    scenario: "You notice your team is developing an unhealthy 'us versus them' mentality toward other units you work with regularly.",
    responses: [
      {
        id: "a",
        text: "Allow it as healthy competition"
      },
      {
        id: "b",
        text: "Address it directly and promote collaborative attitudes"
      },
      {
        id: "c",
        text: "Arrange joint activities to build better relationships"
      },
      {
        id: "d",
        text: "Model collaborative behavior yourself"
      },
      {
        id: "e",
        text: "Discuss the negative impacts of the mentality"
      }
    ]
  },
  {
    id: 161,
    scenario: "You're preparing for a capability demonstration when you realize your unit can't achieve what was promised without taking shortcuts.",
    responses: [
      {
        id: "a",
        text: "Take necessary shortcuts to meet the commitment"
      },
      {
        id: "b",
        text: "Inform leadership that promised capabilities can't be demonstrated"
      },
      {
        id: "c",
        text: "Demonstrate what you can do safely and properly"
      },
      {
        id: "d",
        text: "Request additional time or resources"
      },
      {
        id: "e",
        text: "Clarify what can be achieved within proper parameters"
      }
    ]
  },
  {
    id: 162,
    scenario: "A team member frequently volunteers for high-visibility tasks but avoids routine but essential work.",
    responses: [
      {
        id: "a",
        text: "Allow it since they're contributing to important work"
      },
      {
        id: "b",
        text: "Counsel them on balanced responsibilities"
      },
      {
        id: "c",
        text: "Assign them to routine work to ensure fairness"
      },
      {
        id: "d",
        text: "Discuss their career goals and motivation"
      },
      {
        id: "e",
        text: "Set clear expectations for completing all assigned duties"
      }
    ]
  },
  {
    id: 163,
    scenario: "You receive orders that conflict with a previous commitment you made to support another commander's operation.",
    responses: [
      {
        id: "a",
        text: "Follow the new orders without notifying the other commander"
      },
      {
        id: "b",
        text: "Honor your commitment and explain the conflict to your chain"
      },
      {
        id: "c",
        text: "Inform both parties of the conflict and seek resolution"
      },
      {
        id: "d",
        text: "Attempt to fulfill both obligations simultaneously"
      },
      {
        id: "e",
        text: "Have the commanders coordinate directly on priorities"
      }
    ]
  },
  {
    id: 164,
    scenario: "During a briefing, you realize you've been presenting incorrect information to leadership for several minutes.",
    responses: [
      {
        id: "a",
        text: "Continue and correct it privately afterward"
      },
      {
        id: "b",
        text: "Immediately stop and acknowledge the error"
      },
      {
        id: "c",
        text: "Finish the section then correct the mistake"
      },
      {
        id: "d",
        text: "Smoothly transition to correct information"
      },
      {
        id: "e",
        text: "Stop, correct it, and continue professionally"
      }
    ]
  },
  {
    id: 165,
    scenario: "You learn that your unit will receive a poor rating due to factors completely outside your control.",
    responses: [
      {
        id: "a",
        text: "Accept the rating without complaint"
      },
      {
        id: "b",
        text: "Document the external factors for the record"
      },
      {
        id: "c",
        text: "Formally appeal the rating with supporting evidence"
      },
      {
        id: "d",
        text: "Request the rater consider the circumstances"
      },
      {
        id: "e",
        text: "Focus on factors within your control going forward"
      }
    ]
  },
  {
    id: 166,
    scenario: "A talented subordinate is offered a position that would be great for their career but would significantly hurt your unit's capabilities.",
    responses: [
      {
        id: "a",
        text: "Try to block the transfer to keep them"
      },
      {
        id: "b",
        text: "Support their career advancement fully"
      },
      {
        id: "c",
        text: "Honestly discuss impacts while supporting their decision"
      },
      {
        id: "d",
        text: "Request a delayed transfer to train a replacement"
      },
      {
        id: "e",
        text: "Support the move while ensuring smooth transition"
      }
    ]
  },
  {
    id: 167,
    scenario: "You're assigned to implement a standardization program, but you observe that flexibility has led to innovative local solutions.",
    responses: [
      {
        id: "a",
        text: "Implement standardization fully as directed"
      },
      {
        id: "b",
        text: "Preserve effective local innovations within standards"
      },
      {
        id: "c",
        text: "Recommend the best local practices for wider adoption"
      },
      {
        id: "d",
        text: "Request flexibility to maintain proven innovations"
      },
      {
        id: "e",
        text: "Address it proactively before it affects performance"
      }
    ]
  },
   {
    id: 168,
    scenario: "A new team member from a different career field brings perspectives that challenge your unit's established ways of doing things.",
    responses: [
      {
        id: "a",
        text: "Encourage them to adapt to existing practices"
      },
      {
        id: "b",
        text: "Welcome their perspective and evaluate their suggestions"
      },
      {
        id: "c",
        text: "Dismiss their ideas as they lack unit-specific experience"
      },
      {
        id: "d",
        text: "Have experienced members explain why current practices exist"
      },
      {
        id: "e",
        text: "Use their fresh perspective to re-examine assumptions"
      }
    ]
  },
  {
    id: 169,
    scenario: "You're conducting performance evaluations when you realize you have unconscious bias toward team members with backgrounds similar to yours.",
    responses: [
      {
        id: "a",
        text: "Continue with evaluations as your judgment is sound"
      },
      {
        id: "b",
        text: "Review evaluations with specific focus on objectivity"
      },
      {
        id: "c",
        text: "Seek input from others to balance your perspective"
      },
      {
        id: "d",
        text: "Focus strictly on documented performance metrics"
      },
      {
        id: "e",
        text: "Acknowledge the bias and take steps to ensure fairness"
      }
    ]
  },
  {
    id: 170,
    scenario: "During a high-tempo operations period, you notice your own decision-making quality declining due to fatigue.",
    responses: [
      {
        id: "a",
        text: "Push through as the mission requires your leadership"
      },
      {
        id: "b",
        text: "Delegate more decisions to well-rested subordinates"
      },
      {
        id: "c",
        text: "Take necessary rest even if it means temporary absence"
      },
      {
        id: "d",
        text: "Implement a sleep plan while maintaining command"
      },
      {
        id: "e",
        text: "Double-check critical decisions with trusted advisors"
      }
    ]
  },
  {
    id: 171,
    scenario: "You learn that a competing unit is achieving better results by exploiting a loophole that violates the intent but not the letter of regulations.",
    responses: [
      {
        id: "a",
        text: "Use the same loophole to remain competitive"
      },
      {
        id: "b",
        text: "Report the loophole for clarification"
      },
      {
        id: "c",
        text: "Continue operating within both letter and spirit of regulations"
      },
      {
        id: "d",
        text: "Bring the issue to leadership's attention"
      },
      {
        id: "e",
        text: "Find ethical ways to improve performance instead"
      }
    ]
  },
  {
    id: 172,
    scenario: "A subordinate requests accommodation for a non-visible disability that some team members question as legitimate.",
    responses: [
      {
        id: "a",
        text: "Require medical documentation before accommodating"
      },
      {
        id: "b",
        text: "Provide the accommodation and address team perceptions"
      },
      {
        id: "c",
        text: "Deny the request to avoid team friction"
      },
      {
        id: "d",
        text: "Consult with medical and legal personnel"
      },
      {
        id: "e",
        text: "Educate the team on non-visible disabilities while processing request"
      }
    ]
  },
  {
    id: 173,
    scenario: "You're tasked with choosing between two qualified candidates for a key position - one is technically superior, the other has better leadership potential.",
    responses: [
      {
        id: "a",
        text: "Select the technically superior candidate"
      },
      {
        id: "b",
        text: "Select the candidate with better leadership potential"
      },
      {
        id: "c",
        text: "Evaluate which quality is more critical for the position"
      },
      {
        id: "d",
        text: "Consider the long-term development of both candidates"
      },
      {
        id: "e",
        text: "Assess which candidate best fits current unit needs"
      }
    ]
  },
  {
    id: 174,
    scenario: "You discover that a popular unit tradition is based on a historical misunderstanding and doesn't actually honor what people think it does.",
    responses: [
      {
        id: "a",
        text: "Correct the misunderstanding publicly"
      },
      {
        id: "b",
        text: "Let the tradition continue as it has positive effects"
      },
      {
        id: "c",
        text: "Quietly phase out the tradition"
      },
      {
        id: "d",
        text: "Share the accurate history and let the team decide"
      },
      {
        id: "e",
        text: "Modify the tradition to reflect accurate history"
      }
    ]
  },
  {
    id: 175,
    scenario: "During a resource allocation meeting, you realize you could gain advantage by withholding information about your unit's actual needs.",
    responses: [
      {
        id: "a",
        text: "Withhold information to secure more resources"
      },
      {
        id: "b",
        text: "Provide complete honest information"
      },
      {
        id: "c",
        text: "Present information strategically but truthfully"
      },
      {
        id: "d",
        text: "Advocate strongly for your needs with full transparency"
      },
      {
        id: "e",
        text: "Request resources based on actual requirements"
      }
    ]
  },
  {
    id: 176,
    scenario: "A team member is performing adequately but has stopped growing professionally and seems content with their current level.",
    responses: [
      {
        id: "a",
        text: "Accept their choice to plateau"
      },
      {
        id: "b",
        text: "Challenge them with stretch assignments"
      },
      {
        id: "c",
        text: "Discuss their career aspirations and motivations"
      },
      {
        id: "d",
        text: "Counsel them on the importance of continuous development"
      },
      {
        id: "e",
        text: "Provide growth opportunities while respecting their preferences"
      }
    ]
  },
  {
    id: 177,
    scenario: "You're leading an investigation into an incident when you discover information that implicates a close friend and mentor.",
    responses: [
      {
        id: "a",
        text: "Excuse yourself from the investigation"
      },
      {
        id: "b",
        text: "Continue objectively despite the relationship"
      },
      {
        id: "c",
        text: "Warn your friend about the findings"
      },
      {
        id: "d",
        text: "Disclose the conflict and request oversight"
      },
      {
        id: "e",
        text: "Document findings factually and let appropriate authorities handle it"
      }
    ]
  },
  {
    id: 178,
    scenario: "Your unit receives a mission that you privately believe is a waste of resources, but you must lead it anyway.",
    responses: [
      {
        id: "a",
        text: "Execute it half-heartedly to show your disagreement"
      },
      {
        id: "b",
        text: "Lead it professionally while providing feedback through channels"
      },
      {
        id: "c",
        text: "Refuse to execute what you view as wasteful"
      },
      {
        id: "d",
        text: "Complete it efficiently to minimize resource use"
      },
      {
        id: "e",
        text: "Execute it fully while hiding your personal disagreement from the team"
      }
    ]
  },
  {
    id: 179,
    scenario: "During a multi-day field exercise, weather becomes severe enough that continuing is unpleasant but not immediately dangerous.",
    responses: [
      {
        id: "a",
        text: "Continue as planned to build mental toughness"
      },
      {
        id: "b",
        text: "Suspend operations until conditions improve"
      },
      {
        id: "c",
        text: "Give team members the option to continue or shelter"
      },
      {
        id: "d",
        text: "Modify the exercise to reduce weather exposure"
      },
      {
        id: "e",
        text: "Continue with increased safety monitoring"
      }
    ]
  },
  {
    id: 180,
    scenario: "You're mentoring a junior officer who asks for advice about reporting a suspected regulation violation by a senior NCO.",
    responses: [
      {
        id: "a",
        text: "Advise them not to report to avoid career damage"
      },
      {
        id: "b",
        text: "Encourage them to report through proper channels"
      },
      {
        id: "c",
        text: "Offer to report it yourself to protect them"
      },
      {
        id: "d",
        text: "Suggest they gather more evidence first"
      },
      {
        id: "e",
        text: "Guide them through proper reporting procedures while supporting their decision"
      }
    ]
  },
  {
    id: 181,
    scenario: "Your unit's standard operating procedures are thorough but so lengthy that people work around them rather than following completely.",
    responses: [
      {
        id: "a",
        text: "Enforce strict compliance with existing procedures"
      },
      {
        id: "b",
        text: "Streamline procedures to improve actual compliance"
      },
      {
        id: "c",
        text: "Accept workarounds if results are acceptable"
      },
      {
        id: "d",
        text: "Review procedures to identify essential versus excessive steps"
      },
      {
        id: "e",
        text: "Train team on why each procedure step matters"
      }
    ]
  },
  {
    id: 182,
    scenario: "A subordinate is selected for a prestigious school, but their attendance would severely impact your unit during a critical period.",
    responses: [
      {
        id: "a",
        text: "Request they defer attendance to a better time"
      },
      {
        id: "b",
        text: "Support their attendance and manage the impact"
      },
      {
        id: "c",
        text: "Try to prevent their selection"
      },
      {
        id: "d",
        text: "Discuss the situation honestly with them and leadership"
      },
      {
        id: "e",
        text: "Support their development while requesting temporary backfill"
      }
    ]
  },
  {
    id: 183,
    scenario: "You notice that one shift in your 24/7 operation consistently outperforms others, creating jealousy and accusations of favoritism.",
    responses: [
      {
        id: "a",
        text: "Rotate personnel to equalize performance"
      },
      {
        id: "b",
        text: "Have the high-performing shift share their practices"
      },
      {
        id: "c",
        text: "Investigate whether advantages exist beyond performance"
      },
      {
        id: "d",
        text: "Set uniform standards while allowing different approaches"
      },
      {
        id: "e",
        text: "Recognize excellence while helping others improve"
      }
    ]
  },
  {
    id: 184,
    scenario: "During a change of command ceremony, you discover significant issues your predecessor didn't disclose during turnover.",
    responses: [
      {
        id: "a",
        text: "Publicly call out the predecessor during the ceremony"
      },
      {
        id: "b",
        text: "Address the issues without assigning blame"
      },
      {
        id: "c",
        text: "Contact the predecessor privately for explanation"
      },
      {
        id: "d",
        text: "Brief leadership on the undisclosed issues"
      },
      {
        id: "e",
        text: "Focus on fixing problems rather than assigning fault"
      }
    ]
  },
  {
    id: 185,
    scenario: "You're asked to evaluate a proposal from a subordinate that's innovative but risky and outside your comfort zone.",
    responses: [
      {
        id: "a",
        text: "Reject it to avoid potential failure"
      },
      {
        id: "b",
        text: "Approve it to encourage innovation"
      },
      {
        id: "c",
        text: "Request additional analysis of risks and benefits"
      },
      {
        id: "d",
        text: "Pilot test it on a small scale first"
      },
      {
        id: "e",
        text: "Seek expert opinions before deciding"
      }
    ]
  },
  {
    id: 186,
    scenario: "A team member confides they're being pressured by their spouse to leave the military, but they want to stay.",
    responses: [
      {
        id: "a",
        text: "Encourage them to prioritize their career"
      },
      {
        id: "b",
        text: "Suggest they prioritize their marriage"
      },
      {
        id: "c",
        text: "Listen without advising on such a personal matter"
      },
      {
        id: "d",
        text: "Refer them to family counseling resources"
      },
      {
        id: "e",
        text: "Help them think through options without pushing either direction"
      }
    ]
  },
  {
    id: 187,
    scenario: "During a training evaluation, you realize the evaluators are testing outdated tactics that don't reflect current best practices.",
    responses: [
      {
        id: "a",
        text: "Execute the outdated tactics to pass evaluation"
      },
      {
        id: "b",
        text: "Execute current tactics and explain the difference"
      },
      {
        id: "c",
        text: "Discuss the discrepancy with evaluators before proceeding"
      },
      {
        id: "d",
        text: "Document the issue for evaluation standards review"
      },
      {
        id: "e",
        text: "Demonstrate current tactics while addressing evaluation criteria"
      }
    ]
  },
  {
    id: 188,
    scenario: "You're assigned to fill a position temporarily while the search for a permanent replacement continues, but you're interested in the job permanently.",
    responses: [
      {
        id: "a",
        text: "Focus on temporary duties without pursuing permanent assignment"
      },
      {
        id: "b",
        text: "Apply for the permanent position formally"
      },
      {
        id: "c",
        text: "Use the temporary role to prove you're the best candidate"
      },
      {
        id: "d",
        text: "Express interest while performing temporary duties professionally"
      },
      {
        id: "e",
        text: "Support the selection of whoever is most qualified"
      }
    ]
  },
  {
    id: 189,
    scenario: "You notice that performance counseling in your unit has become a check-the-box activity without meaningful feedback.",
    responses: [
      {
        id: "a",
        text: "Continue current practices to maintain efficiency"
      },
      {
        id: "b",
        text: "Mandate more thorough counseling sessions"
      },
      {
        id: "c",
        text: "Model effective counseling and provide training"
      },
      {
        id: "d",
        text: "Revise counseling procedures to encourage meaningful dialogue"
      },
      {
        id: "e",
        text: "Discuss with the team why quality counseling matters"
      }
    ]
  },
  {
    id: 190,
    scenario: "A subordinate consistently meets standards but their attitude negatively affects team morale without violating specific regulations.",
    responses: [
      {
        id: "a",
        text: "Accept it since they meet performance standards"
      },
      {
        id: "b",
        text: "Counsel them on the impact of their attitude"
      },
      {
        id: "c",
        text: "Document the morale impact for performance reviews"
      },
      {
        id: "d",
        text: "Address specific behaviors rather than general attitude"
      },
      {
        id: "e",
        text: "Set clear expectations for professional conduct and teamwork"
      }
    ]
  },
   {
    id: 191,
    scenario: "Your unit is assigned a high-profile mission on short notice, but you lack one critical capability that was assumed to be in place.",
    responses: [
      {
        id: "a",
        text: "Accept the mission and find workarounds during execution"
      },
      {
        id: "b",
        text: "Immediately inform leadership of the capability gap"
      },
      {
        id: "c",
        text: "Request the mission be reassigned to a better-equipped unit"
      },
      {
        id: "d",
        text: "Rapidly acquire or develop the missing capability"
      },
      {
        id: "e",
        text: "Propose modified mission parameters that match current capabilities"
      }
    ]
  },
  {
    id: 192,
    scenario: "A team member is going through a difficult divorce and their personal problems are beginning to affect their work and judgment.",
    responses: [
      {
        id: "a",
        text: "Tell them to keep personal issues separate from work"
      },
      {
        id: "b",
        text: "Offer flexibility and connect them with support resources"
      },
      {
        id: "c",
        text: "Remove them from critical duties temporarily"
      },
      {
        id: "d",
        text: "Monitor their performance closely and intervene if necessary"
      },
      {
        id: "e",
        text: "Balance compassion with mission requirements"
      }
    ]
  },
  {
    id: 193,
    scenario: "You're conducting a lessons-learned session after a failed exercise, and it becomes clear that your planning was a major contributing factor.",
    responses: [
      {
        id: "a",
        text: "Deflect blame to other contributing factors"
      },
      {
        id: "b",
        text: "Acknowledge your role and identify specific improvements"
      },
      {
        id: "c",
        text: "Accept responsibility but minimize the impact of your errors"
      },
      {
        id: "d",
        text: "Focus the discussion on what the team can learn"
      },
      {
        id: "e",
        text: "Take ownership and ensure similar mistakes aren't repeated"
      }
    ]
  },
  {
    id: 194,
    scenario: "You discover that your unit has been consistently misreporting minor administrative data to make metrics look better.",
    responses: [
      {
        id: "a",
        text: "Continue the practice since it's been accepted"
      },
      {
        id: "b",
        text: "Immediately stop and correct the reporting"
      },
      {
        id: "c",
        text: "Report the pattern to your chain of command"
      },
      {
        id: "d",
        text: "Investigate the scope and implement accurate reporting"
      },
      {
        id: "e",
        text: "Address it internally and ensure future accuracy"
      }
    ]
  },
  {
    id: 195,
    scenario: "A subordinate who is a top performer requests early separation to pursue a civilian opportunity, affecting your unit's near-term readiness.",
    responses: [
      {
        id: "a",
        text: "Try to convince them to stay through end of commitment"
      },
      {
        id: "b",
        text: "Support their request while managing the transition"
      },
      {
        id: "c",
        text: "Deny the request based on mission needs"
      },
      {
        id: "d",
        text: "Negotiate a departure timeline that minimizes impact"
      },
      {
        id: "e",
        text: "Respect their decision while ensuring knowledge transfer"
      }
    ]
  },
  {
    id: 196,
    scenario: "During a deployment, you learn that another unit's commander is making decisions that put both units at unnecessary risk.",
    responses: [
      {
        id: "a",
        text: "Focus on protecting your own unit only"
      },
      {
        id: "b",
        text: "Discuss your concerns directly with the other commander"
      },
      {
        id: "c",
        text: "Report the risky decisions to higher authority"
      },
      {
        id: "d",
        text: "Coordinate with them to improve overall safety"
      },
      {
        id: "e",
        text: "Document concerns and brief your chain of command"
      }
    ]
  },
  {
    id: 197,
    scenario: "You're assigned to lead a diversity and inclusion initiative, but you personally don't think it should be a priority given other mission demands.",
    responses: [
      {
        id: "a",
        text: "Request to be removed from the assignment"
      },
      {
        id: "b",
        text: "Lead it professionally despite personal reservations"
      },
      {
        id: "c",
        text: "Do the minimum required to complete the task"
      },
      {
        id: "d",
        text: "Educate yourself on the initiative's value before proceeding"
      },
      {
        id: "e",
        text: "Integrate it with mission requirements to show relevance"
      }
    ]
  },
  {
    id: 198,
    scenario: "A team member consistently exceeds expectations but has expressed feeling burned out from the high pace of operations.",
    responses: [
      {
        id: "a",
        text: "Continue utilizing them fully as they're high performers"
      },
      {
        id: "b",
        text: "Provide mandatory rest or reduced workload"
      },
      {
        id: "c",
        text: "Discuss workload management and sustainable pace"
      },
      {
        id: "d",
        text: "Redistribute some of their responsibilities"
      },
      {
        id: "e",
        text: "Monitor closely for signs of serious burnout while providing support"
      }
    ]
  },
  {
    id: 199,
    scenario: "You're evaluating a major equipment purchase recommendation, and you realize the team who prepared it has a bias toward a specific vendor they've worked with before.",
    responses: [
      {
        id: "a",
        text: "Trust their professional judgment and approve it"
      },
      {
        id: "b",
        text: "Require a fresh evaluation from an impartial team"
      },
      {
        id: "c",
        text: "Conduct your own analysis of alternative vendors"
      },
      {
        id: "d",
        text: "Request additional justification for the recommendation"
      },
      {
        id: "e",
        text: "Ensure objective criteria were used despite the relationship"
      }
    ]
  },
  {
    id: 200,
    scenario: "You learn that budget reductions will require eliminating either a program that benefits quality of life or one that enhances but isn't critical to mission accomplishment.",
    responses: [
      {
        id: "a",
        text: "Cut the quality of life program as mission comes first"
      },
      {
        id: "b",
        text: "Cut the mission enhancement as people are the priority"
      },
      {
        id: "c",
        text: "Analyze the long-term impact of each option"
      },
      {
        id: "d",
        text: "Seek team input before making the decision"
      },
      {
        id: "e",
        text: "Propose alternative cost savings to preserve both programs"
      }
    ]
  }  



  // Venice: Generate 49 more scenarios covering:
  // - Team leadership
  // - Conflict resolution  
  // - Resource management
  // - Ethical dilemmas
  // - Communication challenges
  // NOTE: Real AFOQT uses expert consensus for scoring. For practice, focus on teaching good judgment.
];

export const SITUATIONAL_JUDGMENT_CONFIG = {
  timeLimit: 35 * 60,
  sectionName: "Situational Judgment",
  totalQuestions: 225 // 50 scenarios, each with 5 responses
};