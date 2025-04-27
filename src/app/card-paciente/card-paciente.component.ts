import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paciente-card',
  templateUrl: './paciente-card.component.html',
  styleUrls: ['./paciente-card.component.css']
})
export class PacienteCardComponent {
  @Input() paciente: any;
  @Output() newRequest = new EventEmitter<any>();
  @Output() statusUpdated = new EventEmitter<any>();

  onNewRequest() {
    this.newRequest.emit(this.paciente);
  }

  onStatusUpdated() {
    this.statusUpdated.emit(this.paciente);
  }
}
