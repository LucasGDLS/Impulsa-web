import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonwhatappsComponent } from './botonwhatapps.component';

describe('BotonwhatappsComponent', () => {
  let component: BotonwhatappsComponent;
  let fixture: ComponentFixture<BotonwhatappsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonwhatappsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonwhatappsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
