import { DOCUMENT, ViewportScroller } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { fromEvent, map, Observable } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.css']
})
export class ScrollComponent{

  constructor(@Inject(DOCUMENT) private document: Document, private viewport: ViewportScroller) { }
  
  readonly showScroll$: Observable<boolean> = fromEvent(
    this.document,
    'scroll'
  ).pipe(
    untilDestroyed(this),
    map(() => this.viewport.getScrollPosition()?.[1] > 0)
  );

  onScrollToTop(): void{
    this.viewport.scrollToPosition([0,0]);
  }
}

