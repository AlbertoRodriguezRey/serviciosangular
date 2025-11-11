import { Component } from '@angular/core';
import { Persona } from '../../models/persona';
import { ServicePersonas } from '../../services/service.personas';

@Component({
  selector: 'app-personas-standalone',
  standalone: true,
  templateUrl: './personas-standalone.html',
  styleUrl: './personas-standalone.css',
  providers: [ServicePersonas]
})
export class PersonasStandalone {
  public personas!: Array<Persona>;
  constructor(private _service: ServicePersonas) {}

  ngOnInit(): void {
    // this._service.getPersonas().subscribe((response => {
    //   console.log("Leyendo")
    //   this.personas = response;
    // }))
    this._service.getPersonasPromise().then((response) => {
      console.log("Leyendo con promesa")
      this.personas = response;
    });
  }
}
