import { ValidationsMessagesModule } from './validations-messages.module';

describe('ValidationsMessagesModule', () => {
  let validationsMessagesModule: ValidationsMessagesModule;

  beforeEach(() => {
    validationsMessagesModule = new ValidationsMessagesModule();
  });

  it('should create an instance', () => {
    expect(validationsMessagesModule).toBeTruthy();
  });
});
