import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Paciente } from '../interfaces/paciente.interface'; 

@Injectable({
  providedIn: 'root'
})
export class PacientesService {
  private pacientes: Paciente[] = [
    {
      initials: "AJ",
      name: "Amanda Júlia Silva",
      status: "Ativo",
      diagnosis: "Hipotireoidismo",
      medication: "Levotiroxina",
      healthProvider: "Unimed Porto Alegre",
      lastRequest: "12/01/2024",
      color: "#d4edda",
      showStatusDropdown: false
    },
    {
      initials: "BS",
      name: "Bruna Souza Costa",
      status: "Inativo",
      diagnosis: "Psoríase",
      medication: "Metotrexato",
      healthProvider: "CEMIG Saúde",
      lastRequest: "15/01/2024",
      color: "#e2f3e4",
      showStatusDropdown: false
    },
    {
      initials: "CK",
      name: "Carlos Kessler",
      status: "Ativo",
      diagnosis: "Asma",
      medication: "Salbutamol",
      healthProvider: "IPSEMG",
      lastRequest: "17/01/2024",
      color: "#e8f7ea",
      showStatusDropdown: false
    },
    {
      initials: "DF",
      name: "Daniele Ferreira",
      status: "Inativo",
      diagnosis: "Artrite Reumatoide",
      medication: "Adalimumabe (Humira)",
      healthProvider: "Hospital das Clínicas",
      lastRequest: "20/12/2023",
      color: "#d4edda",
      showStatusDropdown: false
    },
    {
      initials: "EL",
      name: "Eduardo Lopes",
      status: "Ativo",
      diagnosis: "Diabetes Tipo 2",
      medication: "Metformina",
      healthProvider: "Unimed Belo Horizonte",
      lastRequest: "11/01/2024",
      color: "#e2f3e4",
      showStatusDropdown: false
    },
    {
      initials: "FG",
      name: "Fernanda Gonçalves",
      status: "Inativo",
      diagnosis: "Hipertensão",
      medication: "Losartana",
      healthProvider: "Bradesco Saúde",
      lastRequest: "05/01/2024",
      color: "#e8f7ea",
      showStatusDropdown: false
    },
    {
      initials: "HU",
      name: "Hugo Ulisses",
      status: "Ativo",
      diagnosis: "Lúpus",
      medication: "Hidroxicloroquina",
      healthProvider: "CEMIG Saúde",
      lastRequest: "10/02/2024",
      color: "#d4edda",
      showStatusDropdown: false
    },
    {
      initials: "IS",
      name: "Isabela Silva",
      status: "Ativo",
      diagnosis: "Asma Grave",
      medication: "Abatacept (Orencia)",
      healthProvider: "Unimed Rio",
      lastRequest: "21/01/2024",
      color: "#e2f3e4",
      showStatusDropdown: false
    },
    {
      initials: "JK",
      name: "José Kleyton",
      status: "Inativo",
      diagnosis: "Artrite Psoriásica",
      medication: "Upadacitinibe (Rinvoq)",
      healthProvider: "Santa Casa",
      lastRequest: "15/11/2023",
      color: "#e8f7ea",
      showStatusDropdown: false
    },
    {
      initials: "LM",
      name: "Luciana Martins",
      status: "Ativo",
      diagnosis: "Psoríase",
      medication: "Adalimumabe (Humira)",
      healthProvider: "Hospital São Paulo",
      lastRequest: "23/01/2024",
      color: "#d4edda",
      showStatusDropdown: false
    },
    {
      initials: "MO",
      name: "Marcelo Oliveira",
      status: "Inativo",
      diagnosis: "Artrite Reumatoide",
      medication: "Metotrexato",
      healthProvider: "Unimed São Paulo",
      lastRequest: "28/12/2023",
      color: "#e2f3e4",
      showStatusDropdown: false
    },
    {
      initials: "NR",
      name: "Natália Ribeiro",
      status: "Ativo",
      diagnosis: "Hipertensão",
      medication: "Losartana",
      healthProvider: "CEMIG Saúde",
      lastRequest: "10/01/2024",
      color: "#e8f7ea",
      showStatusDropdown: false
    },
    {
      initials: "OP",
      name: "Otávio Pereira",
      status: "Inativo",
      diagnosis: "Gripe Forte",
      medication: "Paracetamol",
      healthProvider: "Hospital das Clínicas",
      lastRequest: "30/12/2023",
      color: "#d4edda",
      showStatusDropdown: false
    },
    {
      initials: "PR",
      name: "Priscila Rocha",
      status: "Ativo",
      diagnosis: "Lúpus",
      medication: "Hidroxicloroquina",
      healthProvider: "IPSEMG",
      lastRequest: "12/01/2024",
      color: "#e2f3e4",
      showStatusDropdown: false
    },
    {
      initials: "RQ",
      name: "Robson Queiroz",
      status: "Inativo",
      diagnosis: "Asma Grave",
      medication: "Abatacept (Orencia)",
      healthProvider: "CEMIG Saúde",
      lastRequest: "05/01/2024",
      color: "#e8f7ea",
      showStatusDropdown: false
    },
    {
      initials: "SL",
      name: "Sofia Lima",
      status: "Ativo",
      diagnosis: "Artrite Psoriásica",
      medication: "Upadacitinibe (Rinvoq)",
      healthProvider: "Unimed Rio",
      lastRequest: "07/01/2024",
      color: "#d4edda",
      showStatusDropdown: false
    },
    {
      initials: "TM",
      name: "Tatiane Martins",
      status: "Inativo",
      diagnosis: "Artrite Reumatoide",
      medication: "Adalimumabe (Humira)",
      healthProvider: "Hospital das Clínicas",
      lastRequest: "23/12/2023",
      color: "#e2f3e4",
      showStatusDropdown: false
    },
    {
      initials: "UP",
      name: "Uílson Pimentel",
      status: "Ativo",
      diagnosis: "Diabetes Tipo 2",
      medication: "Metformina",
      healthProvider: "Unimed Belo Horizonte",
      lastRequest: "20/01/2024",
      color: "#e8f7ea",
      showStatusDropdown: false
    },
    {
      initials: "VB",
      name: "Vinícius Barbosa",
      status: "Inativo",
      diagnosis: "Hipotireoidismo",
      medication: "Levotiroxina",
      healthProvider: "CEMIG Saúde",
      lastRequest: "11/01/2024",
      color: "#d4edda",
      showStatusDropdown: false
    }
  ];

  constructor() { }

  getPacientes(): Observable<Paciente[]> {
    return of(this.pacientes);
  }
}