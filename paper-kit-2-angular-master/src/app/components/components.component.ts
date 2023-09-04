import { Component, OnInit, Renderer2 } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styles: [`
    .presentation-title{
    -webkit-text-fill-color:none !important;

    }
    ngb-progressbar {
        margin-top: 5rem;
    }
    `]
})

export class ComponentsComponent implements OnInit {
    page = 4;
    page1 = 5;
    comidas:any[]=[
        {
            "nombre":"Pollo al disco",
            "estrellas":3,
            "chef":'Matias Torres',

            'asset':"assets/img/RecetApp/fondo.avif"
        },
        {
            "nombre":"Canelones",
            "estrellas":4,
            "chef":'Carlos rodriguez',

            'asset':"assets/img/RecetApp/comida2.jpg"

        },
        {
            "nombre":"Spagetti",
            "estrellas":5,
            "chef":'Hernan puertas',

            'asset':"assets/img/RecetApp/comida3.jpg"

        }
    ]
    focus;
    focus1;
    focus2;
    date: {year: number, month: number};
    model: NgbDateStruct;
    constructor( private renderer : Renderer2) {}
    isWeekend(date: NgbDateStruct) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }

    isDisabled(date: NgbDateStruct, current: {month: number}) {
        return date.month !== current.month;
    }

    ngOnInit() {
        let input_group_focus = document.getElementsByClassName('form-control');
        let input_group = document.getElementsByClassName('input-group');
        for (let i = 0; i < input_group.length; i++) {
            input_group[i].children[0].addEventListener('focus', function (){
                input_group[i].classList.add('input-group-focus');
            });
            input_group[i].children[0].addEventListener('blur', function (){
                input_group[i].classList.remove('input-group-focus');
            });
        }
    }

    numerosDesdeUnoAlDiez() {
        return Array.from({ length: 5 }, (_, index) => index + 1);
      }

}
