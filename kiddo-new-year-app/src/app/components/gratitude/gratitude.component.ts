import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gratitude',
  templateUrl: './gratitude.component.html',
  styleUrls: ['./gratitude.component.css']
})
export class GratitudeComponent implements OnInit {

  currentAudio = new Audio()

  constructor() { }

  ngOnInit(): void {
    this.playGratitudeAudio()
  }

  playGratitudeAudio() {
    this.currentAudio.src = '../assets/audios/Tum-Ho-Toh.mp3'
    this.currentAudio.load();
    this.currentAudio.play();
  }

}
