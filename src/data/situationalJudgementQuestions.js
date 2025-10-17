// Situational Judgment Questions for AFOQT
// Leadership and decision-making scenarios
// Note: Different format - each scenario has 5 responses to rate

export const situationalJudgmentData = [
  {
    id: 1,
    scenario: "You notice a team member consistently arriving late to morning briefings. This has been ongoing for two weeks and is starting to affect team morale. What would you do?",
    responses: [
      {
        id: "a",
        text: "Immediately report them to your supervisor",
        // In real test, test-taker rates from "Most Effective" to "Least Effective"
        // For practice, we'll simplify to selecting most/least
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
    ],
    // For now, just track which they selected - proper scoring needs expert consensus data
    explanation: "Most effective: B and E show leadership through understanding and support. Least effective: C (avoidance) and D (public humiliation damage morale)."
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
  totalQuestions: 50 // 50 scenarios, each with 5 responses
};