import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from "./banner/banner.component";
import { AboutweComponent } from "./aboutwe/aboutwe.component";
import { EquipoComponent } from "./equipo/equipo.component";
import { ServiciosComponent } from "./servicios/servicios.component";
import { VisionComponent } from './vision/vision.component';
import { TecnologiasComponent } from './tecnologias/tecnologias.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FootComponent } from './foot/foot.component';
import { BotonwhatappsComponent } from './botonwhatapps/botonwhatapps.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, BannerComponent, AboutweComponent, EquipoComponent, ServiciosComponent,VisionComponent,TecnologiasComponent,FormularioComponent,FootComponent,BotonwhatappsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'web-app';

  ngOnInit(): void {
    initFlowbite();
  }

  ngAfterViewInit(): void {
    this.initCarousel();
  }

  initCarousel(): void {
    const wrapper = document.getElementById('carousel-wrapper');
    const items = document.querySelectorAll('[id^="item-"]') as NodeListOf<HTMLElement>;
    let currentIndex = 0;

    function showNextItem() {
      const nextIndex = (currentIndex + 1) % items.length;

      items[currentIndex].classList.remove('translate-x-0');
      items[currentIndex].classList.add('translate-x-full');

      items[nextIndex].classList.remove('translate-x-full');
      items[nextIndex].classList.add('translate-x-0');

      currentIndex = nextIndex;
    }

    function showPrevItem() {
      const prevIndex = (currentIndex - 1 + items.length) % items.length;

      items[currentIndex].classList.remove('translate-x-0');
      items[currentIndex].classList.add('translate-x-full');

      items[prevIndex].classList.remove('translate-x-full');
      items[prevIndex].classList.add('translate-x-0');

      currentIndex = prevIndex;
    }

    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');

    if (nextBtn && prevBtn) {
      nextBtn.addEventListener('click', showNextItem);
      prevBtn.addEventListener('click', showPrevItem);
    }

    // Auto slide every 5 seconds
    setInterval(showNextItem, 10000);
  }
}
