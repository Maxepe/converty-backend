import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  title = 'Your App Title'
  activeView: string = 'main'
  selectedPlatforms: string[] = []

  setActiveView(view: string) {
    this.activeView = view
  }

  togglePlatform(platform: string) {
    const index = this.selectedPlatforms.indexOf(platform)
    if (index === -1) {
      this.selectedPlatforms.push(platform)
    } else {
      this.selectedPlatforms.splice(index, 1)
    }
  }

  isSelected(platform: string): boolean {
    return this.selectedPlatforms.includes(platform)
  }
}
