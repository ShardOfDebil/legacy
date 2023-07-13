import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModesComponentComponent } from './modes-component.component';

describe('ModesComponentComponent', () => {
  let component: ModesComponentComponent;
  let fixture: ComponentFixture<ModesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModesComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
