import { testVersionSecondary } from '@nx-sample/test-version-secondary';

export function testVersionMain(): string {
  console.log(testVersionSecondary());
  return 'test-version-main';
}
