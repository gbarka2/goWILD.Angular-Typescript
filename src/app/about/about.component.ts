import { Component, OnInit } from '@angular/core';
import {faFile} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faGithubSquare} from '@fortawesome/free-brands-svg-icons'
import {faDesktop} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  faFile = faFile
  faLinkedin = faLinkedin
  faGithubSquare = faGithubSquare
  faDesktop = faDesktop
  
  constructor() { }

  ngOnInit(): void {
  }

}
