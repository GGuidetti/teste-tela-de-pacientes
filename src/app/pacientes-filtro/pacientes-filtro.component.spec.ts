import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesFiltroComponent } from './pacientes-filtro.component';

describe('PacientesFiltroComponent', () => {
  let component: PacientesFiltroComponent;
  let fixture: ComponentFixture<PacientesFiltroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacientesFiltroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacientesFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
