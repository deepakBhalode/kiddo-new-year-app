import { Component, OnInit } from '@angular/core';
import { audiosMetadata } from 'src/app/shared/resources/audio-metadata'
import swal from 'sweetalert2';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css']
})
export class AudioPlayerComponent implements OnInit {

  audioNumber = 0
  isAudioPlaying = false
  isAudioPaused = false
  isAudioPlayed = true
  currentAudioTime = 0
  currentAudioTimeInMmSs = "0:00"
  audioProgressValue = 0
  currentAudio = new Audio()
  audio_details = audiosMetadata
  audioId = this.audio_details[this.audioNumber]['songId']
  audioImage = this.audio_details[this.audioNumber]['coverImg']
  audioName = this.audio_details[this.audioNumber]['name']
  artistName = this.audio_details[this.audioNumber]['artistName']
  audioDuration = this.audio_details[this.audioNumber]['duration']

  constructor() { }

  ngOnInit(): void {
    //this.openMusicLoaderDialog()
  }

  openMusicLoaderDialog() {
    swal.fire({
      icon: "success",
      color: "#716add",
      timer: 5000,
      timerProgressBar: true,
      showConfirmButton: false,
      width: 330,
      html: `
        <div style="text-align:center;">
          <h1><b>Hold for sec</b></h1>
          Let me ready the required setup!
        </div>
      `,
    });
  }

  handleAudioPlayPause() {
    if (this.isAudioPlaying == false && this.currentAudio.paused == true) {
      this.playAudio()
    }
    else {
      this.pauseAudio()
    }
  }

  playAudio() {
      this.audioProgressValue = 0
      this.currentAudioTimeInMmSs = "0:00"
      this.isAudioPlaying = true
      this.isAudioPlayed = false
      this.isAudioPaused = true
      this.setAudioDetails();
      this.currentAudio.load();
      this.currentAudio.play();
      this.handleAudioProgress();
  }

  setAudioDetails() {
    this.audioId = this.audio_details[this.audioNumber]['songId']
    this.artistName = this.audio_details[this.audioNumber]['artistName']
    this.audioName = this.audio_details[this.audioNumber]['name']
    this.audioImage = this.audio_details[this.audioNumber]['coverImg']
    this.audioDuration = this.audio_details[this.audioNumber]['duration']
    this.currentAudio.src = this.audio_details[this.audioNumber]['url']
    this.currentAudio.currentTime = this.currentAudioTime;
  }

  handleAudioProgress() {
    this.currentAudio.ontimeupdate = () => {
      let minutes = Math.floor(this.currentAudio.currentTime / 60);
      let seconds = "0" +  Math.floor(this.currentAudio.currentTime - minutes * 60);
      this.currentAudioTimeInMmSs = minutes.toString().substr(-2) + "." + seconds.substr(-2);

      let progressPercent = parseFloat(this.currentAudioTimeInMmSs)/parseFloat(this.audioDuration.replace(':', '.'))
      this.audioProgressValue = parseInt((progressPercent*100).toFixed(0))
      this.currentAudioTimeInMmSs = this.currentAudioTimeInMmSs.replace('.', ':')

      this.currentAudio.onended = () => {
        console.log("Audio ended.")
        this.playNextAudio()
      }
    }
  }

  pauseAudio() {
    this.isAudioPlayed = true
    this.isAudioPaused = false
    this.isAudioPlaying = false
    this.currentAudio.pause();
    this.currentAudioTime = this.currentAudio.currentTime;
  }

  playPreviousAudio() {
    this.currentAudioTime = 0
    if(this.audioNumber == 0) {
      this.audioNumber = 4
    }
    else {
      this.audioNumber = this.audioNumber - 1
    }
    this.playAudio()
  }

  playNextAudio() {
    this.currentAudioTime = 0
    if(this.audioNumber == 4) {
      this.audioNumber = 0
    }
    else {
      this.audioNumber = this.audioNumber + 1
    }
    this.playAudio()
  }



}
