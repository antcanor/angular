import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconoCasaComponent } from './icono-casa.component';

describe('IconoCasaComponent', () => {
  let component: IconoCasaComponent;
  let fixture: ComponentFixture<IconoCasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconoCasaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IconoCasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
