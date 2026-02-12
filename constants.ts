import { TestData, TestMetadata } from './types';
import module_1 from './tests/module_1.json';
import module_2 from './tests/module_2.json';

export const TESTS: TestMetadata[] = [
  { id: '1', name: 'Module 1', fileName: 'module_1.json' },
  { id: '2', name: 'Module 2', fileName: 'module_2.json' },
];

export const MOCK_TEST_DATA: Record<string, TestData> = {
  'module_1.json': module_1 as TestData,
  'module_2.json': module_2 as TestData
};
