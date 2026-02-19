// Test Data Index - Export all assessment frameworks

export { strategicIQTest } from './strategic-iq';
export { executiveLeadershipTest } from './executive-leadership';
export { professionalDNATest } from './professional-dna';
export { workplaceTemperamentTest } from './workplace-temperament';
export { emotionalIntelligenceTest } from './emotional-intelligence';
export { careerAgilityTest } from './career-agility';
export { executivePresenceTest } from './executive-presence';

import { strategicIQTest } from './strategic-iq';
import { executiveLeadershipTest } from './executive-leadership';
import { professionalDNATest } from './professional-dna';
import { workplaceTemperamentTest } from './workplace-temperament';
import { emotionalIntelligenceTest } from './emotional-intelligence';
import { careerAgilityTest } from './career-agility';
import { executivePresenceTest } from './executive-presence';

export const allTests = [
  strategicIQTest,
  executiveLeadershipTest,
  professionalDNATest,
  workplaceTemperamentTest,
  emotionalIntelligenceTest,
  careerAgilityTest,
  executivePresenceTest
];

export const getTestById = (id: string) => {
  return allTests.find(test => test.id === id);
};

export default allTests;
