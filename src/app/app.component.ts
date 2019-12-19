import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   
    <router-outlet></router-outlet>

    <footer>
	<p>
		Created with <i class="fa fa-heart"></i> by
		<a target="_blank" href="https://aeboughanmi.com">Ala Eddine</a>
		- Created with by alaa eddine boughanmi, find me 
		<a target="_blank" href="https://www.aeboughanmi.com/about">here</a>
	</p>
</footer>


  `,
  styles: [`footer {
    background-color: #222;
    color: #fff;
    font-size: 14px;
    bottom: 0;
    position: fixed;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 999;
}

footer p {
    margin: 10px 0;
}

footer i {
    color: red;
}

footer a {
    color: #3c97bf;
    text-decoration: none;
}
`]
})
export class AppComponent {
  title = 'Projet-ANG';
}
