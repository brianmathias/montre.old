import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { FileService } from '../services/file.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  show: boolean = false;
  subscription: Subscription;

  constructor(private fileService: FileService) { }

  ngOnInit(): void {
    this.subscription = this.fileService.fileLoaded$.subscribe(val => this.show = val);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
