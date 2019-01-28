import { TrimstringPipe } from './trimstring.pipe';

describe('TrimstringPipe', () => {
  it('create an instance', () => {
    const pipe = new TrimstringPipe();
    expect(pipe).toBeTruthy();
  });
});
