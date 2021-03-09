import { Component, OnInit } from '@angular/core';
import {faFile} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faGithubSquare} from '@fortawesome/free-brands-svg-icons'
import {faDesktop} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  faFile = faFile
  faLinkedin = faLinkedin
  faGithubSquare = faGithubSquare
  faDesktop = faDesktop

  constructor() { }

  ngOnInit(): void {
  }

}
