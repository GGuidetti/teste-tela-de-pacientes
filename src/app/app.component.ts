import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PacientesListaComponent } from './pacientes-lista/pacientes-lista.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PacientesListaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tela-de-pacientes';
}
