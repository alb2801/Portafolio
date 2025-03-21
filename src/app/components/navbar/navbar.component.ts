import { Component } from '@angular/core';
import { ContactModalComponent } from "../contact-modal/contact-modal.component";

@Component({
  selector: 'app-navbar',
  imports: [ContactModalComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
