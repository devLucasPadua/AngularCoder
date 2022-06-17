import { Component, OnInit } from '@angular/core';
import {EmprestimoCreate} from "../emprestimos.module";
import {EmprestimosService} from "../emprestimos.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-emprestimos-create',
  templateUrl: './emprestimos-create.component.html',
  styleUrls: ['./emprestimos-create.component.scss']
})
export class EmprestimosCreateComponent implements OnInit {

  emprestimo: EmprestimoCreate = {
    ferramentaID: "",
    colaboradorID: "",
    quantidade: 0,
    prazoEmDias: 0,
    observacao: "",
    senhaColaborador: ""
  }

  constructor(private emprestimoService: EmprestimosService,
              private router: Router) { }

  ngOnInit(): void {
  }

  createEmprestimo(): void{
    this.emprestimoService.create(this.emprestimo).subscribe( () => {
      this.emprestimoService.showMessage('Empréstimo realizado com sucesso!')})
    this.router.navigate(['/emprestimos'])
  }

  cancelEmprestimo(): void{
    this.router.navigate(['/emprestimos'])
  }

}
