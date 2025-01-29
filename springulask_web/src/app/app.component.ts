import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoAngularMaterialModule } from './DemoAngularMaterialModule';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,DemoAngularMaterialModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'springulask_web';
}
