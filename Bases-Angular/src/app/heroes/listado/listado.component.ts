import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  heroes: string[]= ['Hulk', 'Ironman','Superman','Thor','Spiderman']
  heroeBorrado: string = '';
  borrarHeroe(): void{
    console.log('Borrando')
    this.heroeBorrado = this.heroes.pop() || '';
  }

}
