import { ToastService } from './toast/toast.service';
import { AppService } from './app.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import exportFromJSON from 'export-from-json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(
    private formBuilder: FormBuilder, 
    private appService: AppService,
    private toastService: ToastService) {}

  configForm = this.formBuilder.group({
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    alias: ['', Validators.required]
  });

  // exportFromJSON los nombres de estos parámetros neceita ser exactamente: data, fileName, exportType
  onSubmit() {
    const fileName = 'config';
    const exportType = 'json';
    this.appService.addConfig(this.configForm.value).subscribe(data => {
      exportFromJSON({ data, fileName, exportType });
      this.toastService.showSuccess('Enviado correctamente');
    });

    // Borrar todos los elementos de la base de datos: db.json
    this.appService.getConfigs().subscribe(data => {
      data.map((el: any, index: number) => this.appService.deleteConfig(index + 1).subscribe());
    });
  }

}
