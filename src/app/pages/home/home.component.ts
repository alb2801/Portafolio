import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ContactModalComponent } from "../../components/contact-modal/contact-modal.component";

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, FooterComponent, ContactModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
