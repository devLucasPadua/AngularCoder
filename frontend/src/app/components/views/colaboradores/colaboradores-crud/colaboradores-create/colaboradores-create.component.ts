import { Component, OnInit } from '@angular/core';
import {Colaborador} from "../colaboraores.module";

@Component({
  selector: 'app-colaboradores-create',
  templateUrl: './colaboradores-create.component.html',
  styleUrls: ['./colaboradores-create.component.scss']
})
export class ColaboradoresCreateComponent implements OnInit {

  colaborador: Colaborador = {
    cpf: null,
    matricula: null,
    nome: "",
    sobrenome: "",
    email: "",
    telefone: null,
    cargo: "",
    empresa: "",
    supervisor: "",
    perfil: "",
    permissao: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

}
