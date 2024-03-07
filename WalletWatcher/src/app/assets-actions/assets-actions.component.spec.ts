import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsActionsComponent } from './assets-actions.component';

describe('AssetsActionsComponent', () => {
  let component: AssetsActionsComponent;
  let fixture: ComponentFixture<AssetsActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetsActionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssetsActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
