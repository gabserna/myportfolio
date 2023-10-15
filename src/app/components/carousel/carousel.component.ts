import { animate, style, AnimationBuilder } from '@angular/animations';
import { AfterContentInit, Component, ContentChildren, ElementRef, Input, OnInit, QueryList, Renderer2, ViewChild,
} from '@angular/core';
import { interval } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CarouselSlideComponent } from '../carousel-slide/carousel-slide.component';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements AfterContentInit, OnInit {
  @Input() public timings = '250ms ease-in';
  @Input() public autoplay = true;
  @Input() public interval = 1000;  // change duration of slide
  @Input() public maxWidth!: string;
  @Input() public maintainAspectRatio: boolean = false;
  @Input() public orientation!: string;
  @Input() public proportion!: number;
  @Input() public slideHeight!: string;
  @Input() public hideArrows: boolean = false;
  @Input() public hideIndicators: boolean = false;
  @Input() public color!: string;
  @Input() public loop: boolean = false;
  @Input() public svgIconOverrides: any;

  // Declaración de las imágenes para el carrusel
  slidesList: { image: string }[] = [
    { image: '../../assets/img/new.jpg' },
    { image: '../../assets/img/card2.jpg' },
    { image: '../../assets/img/card3.jpg' },
    { image: '../../assets/img/card4.jpg' },
    { image: '../../assets/img/card5.jpg' },
    { image: '../../assets/img/card6.jpg' },
    { image: '../../assets/img/card7.jpg' },
    { image: '../../assets/img/card8.jpg' },
    { image: '../../assets/img/card9.jpg' },
    { image: '../../assets/img/card0.jpg' },
  ];

  @ContentChildren(CarouselSlideComponent)
  public slideComponents!: QueryList<CarouselSlideComponent>;
  @ViewChild('carouselContainer')
  private carouselContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('carouselList')
  private carouselList!: ElementRef<HTMLElement>;
  private timer$!: any;
  private playing = false;
  currentIndex!: number;

  constructor(
    private animationBuilder: AnimationBuilder,
    private renderer: Renderer2
  ) {}

  public ngAfterContentInit(): void {
    this.startTimer();
  }

  public ngOnInit(): void {}

  public next(): void {
    this.slideTo(this.currentIndex + 1);
  }

  public previous(): void {
    this.slideTo(this.currentIndex - 1);
  }

  public slideTo(index: number): void {
    if (!this.playing && typeof index === 'number' && index >= 0 && index < this.slidesList.length) {
      const offset = index * this.getWidth();
      const translation = `translateX(${offset}px)`;
      const factory = this.animationBuilder.build(
        animate(this.timings, style({ transform: translation }))
      );
      const animation = factory.create(this.carouselList.nativeElement);
  
      animation.onStart(() => (this.playing = true));
      animation.onDone(() => {
        this.playing = false;
        this.renderer.setStyle(
          this.carouselList.nativeElement,
          'transform',
          translation
        );
        animation.destroy();
      });
      animation.play();
    }
  }
  




  private getWidth(): number {
    return this.carouselContainer.nativeElement.clientWidth;
  }

  private startTimer(): void {
    if (this.autoplay) {
      this.timer$ = interval(this.interval);
      this.timer$
        .pipe(takeUntil(this.slideComponents.changes))
        .subscribe(() => this.next());
    }
  }
}
