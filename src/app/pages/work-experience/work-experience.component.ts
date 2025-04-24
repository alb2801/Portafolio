import { Component, OnInit } from '@angular/core';
import { ContactModalComponent } from "../../components/contact-modal/contact-modal.component";

@Component({
  selector: 'app-work-experience',
  imports: [ContactModalComponent],
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  
  ngOnInit() {
    this.setupCarouselModal();
  }

  setupCarouselModal() {
    const imageModal = document.getElementById('imageModal');
    if (imageModal) {
      imageModal.addEventListener('show.bs.modal', (event: any) => {
        const clickedElement = event.relatedTarget;
        // Asegurarse de que el clic viene de un contenedor de imagen
        if (!clickedElement.classList.contains('carousel-image-container')) {
          return;
        }
        
        const carouselId = clickedElement.closest('.carousel').id;
        const sourceCarousel = document.getElementById(carouselId);
        const modalCarousel = document.getElementById('modalCarousel');
        
        if (sourceCarousel && modalCarousel) {
          // Copiar items del carrusel
          const sourceInner = sourceCarousel.querySelector('.carousel-inner');
          const modalInner = modalCarousel.querySelector('.carousel-inner');
          if (sourceInner && modalInner) {
            modalInner.innerHTML = sourceInner.innerHTML;
          }

          // Copiar indicadores
          const sourceIndicators = sourceCarousel.querySelector('.carousel-indicators');
          const modalIndicators = modalCarousel.querySelector('.carousel-indicators');
          if (sourceIndicators && modalIndicators) {
            modalIndicators.innerHTML = sourceIndicators.innerHTML;
          }

          // Actualizar los data-bs-target de los indicadores
          modalCarousel.querySelectorAll('.carousel-indicators button').forEach(button => {
            button.setAttribute('data-bs-target', '#modalCarousel');
          });

          // Mantener el mismo slide activo
          const activeIndex = Array.from(sourceCarousel.querySelectorAll('.carousel-item'))
            .findIndex(item => item.classList.contains('active'));
          modalCarousel.querySelectorAll('.carousel-item').forEach((item, index) => {
            item.classList.remove('active');
            if (index === activeIndex) {
              item.classList.add('active');
            }
          });

          // Quitar los eventos modal de las imágenes dentro del modal
          modalCarousel.querySelectorAll('.carousel-image-container').forEach(container => {
            container.removeAttribute('data-bs-toggle');
            container.removeAttribute('data-bs-target');
          });
        }
      });
    }
  }
}
