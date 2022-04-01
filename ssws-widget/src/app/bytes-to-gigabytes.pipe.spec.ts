import { BytesToGigabytesPipe } from './bytes-to-gigabytes.pipe';

describe('BytesToGigabytesPipe', () => {
  it('create an instance', () => {
    const pipe = new BytesToGigabytesPipe();
    expect(pipe).toBeTruthy();
  });
});
