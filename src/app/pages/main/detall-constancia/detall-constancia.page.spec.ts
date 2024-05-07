import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallConstanciaPage } from './detall-constancia.page';

describe('DetallConstanciaPage', () => {
  let component: DetallConstanciaPage;
  let fixture: ComponentFixture<DetallConstanciaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallConstanciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
