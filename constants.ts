import { TestData, TestMetadata } from './types';
import module_1 from './tests/module_1.json';
import module_2 from './tests/module_2.json';
import module_3 from './tests/module_3.json';
import module_4 from './tests/module_4.json';
import fulltest_1 from './tests/fulltest_1.json';

export const TESTS: TestMetadata[] = [
  { id: '1', name: 'Module 1', fileName: 'module_1.json' },
  { id: '2', name: 'Module 2', fileName: 'module_2.json' },
  { id: '3', name: 'Module 3', fileName: 'module_3.json' },
  { id: '4', name: 'Full test 1', fileName: 'fulltest_1.json' },
  { id: '5', name: 'Module 4', fileName: 'module_4.json' },
];

export const MOCK_TEST_DATA: Record<string, TestData> = {
  'module_1.json': module_1 as TestData,
  'module_2.json': module_2 as TestData,
  'module_3.json': module_3 as TestData,
  'fulltest_1.json': fulltest_1 as TestData,
  'module_4.json': module_4 as TestData
};