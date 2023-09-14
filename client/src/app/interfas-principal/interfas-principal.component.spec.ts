import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfasPrincipalComponent } from './interfas-principal.component';

describe('InterfasPrincipalComponent', () => {
  let component: InterfasPrincipalComponent;
  let fixture: ComponentFixture<InterfasPrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterfasPrincipalComponent]
    });
    fixture = TestBed.createComponent(InterfasPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
