import { SingletonServiceBase } from './singleton-service-base';

describe('SingletonServiceBase', () => {
  it('should create an instance', () => {
    expect(new SingletonServiceBase()).toBeTruthy();
  });
});
