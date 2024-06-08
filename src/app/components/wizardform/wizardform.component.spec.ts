import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardformComponent } from './wizardform.component';

describe('WizardformComponent', () => {
  let component: WizardformComponent;
  let fixture: ComponentFixture<WizardformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WizardformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WizardformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
