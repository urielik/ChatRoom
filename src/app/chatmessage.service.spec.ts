import { TestBed, inject } from '@angular/core/testing';

import { ChatmessageService } from './chatmessage.service';

describe('ChatmessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatmessageService]
    });
  });

  it('should be created', inject([ChatmessageService], (service: ChatmessageService) => {
    expect(service).toBeTruthy();
  }));
});
