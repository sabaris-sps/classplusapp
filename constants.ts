import { TestData, TestMetadata } from './types';
import module_1 from './tests/module_1.json'

export const TESTS: TestMetadata[] = [
  { id: '1', name: 'Module 1', fileName: 'module_1.json' },
  { id: '2', name: 'Mock Module Test - Physics', fileName: 'module-1.json' },
];

const Module_1_data: TestData = module_1 as TestData;

const MODULE_1_DATA: TestData = {
    "data": {
      "test": {
        "name": "Mock Module Test - Physics",
        "testTotalDuration": 3600000
      },
      "sections": [
        {
          "_id": "sec-1",
          "name": "General Physics",
          "sectionMarks": 20,
          "order": 1,
          "isActive": true,
          "questions": [
             {
                "_id": "q-1",
                "name": "<p>What is the unit of Force?</p>",
                "type": "multiple_choice",
                "options": [
                    { "_id": "o-1", "name": "Newton", "isCorrect": true, "isMarked": false },
                    { "_id": "o-2", "name": "Joule", "isCorrect": false, "isMarked": true },
                    { "_id": "o-3", "name": "Watt", "isCorrect": false, "isMarked": false },
                    { "_id": "o-4", "name": "Pascal", "isCorrect": false, "isMarked": false }
                ],
                "marks": { "positive": 4, "negative": 1 },
                "timeTaken": 45000,
                "isAttempted": true,
                "isCorrect": false,
                "isPartiallyCorrect": false,
                "markForReview": false,
                "sectionId": "sec-1",
                "order": 1,
                "questionSubmitOrder": 1
             }
          ]
        }
      ]
    }
};

export const MOCK_TEST_DATA: Record<string, TestData> = {
  'module_1.json': Module_1_data,
  'module-1.json': MODULE_1_DATA
};