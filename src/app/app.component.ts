import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Toast, ButtonModule, RouterOutlet],
  providers: [MessageService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'authProyect';

}
