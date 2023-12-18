import { Component, OnInit } from '@angular/core';

import swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {}

  openReadyDialog() {
    swal.fire({
      html: `<h1><b>Sun meri kiddo!</b></h1>
      <p>dekh aisa he!..<br>
      itne saare bure log he dunia me, fir bhi tujhe mujh jaisa acha insan mila he.
      Toh aise bhut lucky he tu!!<br>Samjhi na?</p>
      <p>Par tu bhi enni soni si insan he!
      so here I am taking you in a chotu si creative world which may seem to be illusion to you.
      But irony is, it's not.</p><b>Chal, ab bhini si muskan rakh apne chehre par!</b>`,
      imageUrl:"https://i.pinimg.com/originals/dc/39/2d/dc392d85446448cdd232fae8d89e5f17.gif",
      imageHeight: 100,
      imageAlt: "A tall image",
      confirmButtonText: "Chale?",
      color: "#716add"
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/new-year-wishes'])
      }
    });
  }

}
