import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.css']
})
export class WishComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.openGentleReminderDialog()
  }

  openGentleReminderDialog() {
    swal.fire({
      icon: "success",
      color: "#716add",
      timer: 25000,
      timerProgressBar: true,
      showConfirmButton: false,
      showCloseButton: true,
      // position: 'center-start',
      width: 330,
      html: `
        <div style="text-align:center;">
          <h1><i><b>Gentle Reminder</b></i></h1>
          I am so proud of you. You are beautiful and have the cutest smile, silliest laugh, prettiest eyes,
          finest voice, loveliest hair (though I still crave for curly ones), and an adorable personality.<br>
          You know, your feelings matter. If you ever feel unworthy, remember I am rooting for you.
          No matter how much we grow,
          there will always be space to become better, as it is a never-ending journey.
          Therefore, I want to remind you that - <b>
          <h3><b><i>You are more than enough, always. And you are so very loved.</i></b></h3>
        </div>
      `,
    });
  }

  openNewYearWishesDialog() {
    swal.fire({
      html: `
        <div>
          <i>
            A new year is like starting a new chapter in your life, you get a chance to write
            an incredible story for yourself.<br><br>
            With the new year on the horizon, I wish you embrace it with an open heart and go forward with faith, hope, and courage.
            You have come so far already, so think of how much you’ll grow in the year to come! so,
            please remember to be gentle with yourself as you navigate this next year's chapter.<br>
            May this coming year lead you on a new exciting adventure
            and discover everything you are looking for in the new year right inside yourself!<br><br>
          </i>
          So kiddo, how about listening some music now?
        </div>
      `,
      confirmButtonText: "Let's Listen?",
      color: "#716add"
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/audio-player'])
      }
    });
  }

}
