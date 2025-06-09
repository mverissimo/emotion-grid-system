import '@testing-library/jest-dom/vitest';
import { createSerializer } from '@emotion/jest';

expect.addSnapshotSerializer(createSerializer({ includeStyles: true }));
