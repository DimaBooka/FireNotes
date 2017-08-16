import { TestBed, inject } from '@angular/core/testing';

import { FirebaseInteractionService } from './firebase-interaction.service';

describe('FirebaseInteractionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirebaseInteractionService]
    });
  });

  it('should be created', inject([FirebaseInteractionService], (service: FirebaseInteractionService) => {
    expect(service).toBeTruthy();
  }));
});
