import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = "Favorite Quotes Club"
  showAddPost: boolean
  subscription: Subscription

  constructor( private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddPost = value)
   }

  ngOnInit(): void {
  }

  toggleAddPost() {
    this.uiService.toggleAddPost()
  }
}
