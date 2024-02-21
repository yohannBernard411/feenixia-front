import { Component } from '@angular/core';

@Component({
  selector: 'app-opinions',
  templateUrl: './opinions.component.html',
  styleUrls: ['./opinions.component.scss']
})
export class OpinionsComponent {

  //allOpinions = this.caresService.getAllCares();

  allOpinions = [
    {
      id: 1, 
      title: "Premier commentaire",
      care: "les Guidances",
      user: {
        id: 34,
        img: "https://material.angular.io/assets/img/examples/shiba2.jpg",
        name: "Florian"
      },
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod metus quis sapien accumsan, a blandit ex convallis. Ut id libero fringilla, varius ligula sit amet, rhoncus nulla. Mauris tempor gravida ornare. Nullam feugiat, nibh a euismod lacinia, neque turpis ornare purus, eu sagittis libero nulla at felis. Etiam eget neque et metus euismod porta. Sed mattis dictum placerat. Maecenas pellentesque sapien ac velit rutrum convallis. Donec nibh mi, accumsan sed rhoncus sit amet, dapibus vel eros. Proin velit ex, ornare vitae tincidunt a, placerat in ante. Nulla non lacus eget leo auctor convallis at eget augue. Integer egestas magna velit, ac varius massa mattis ut. Nam vehicula arcu ac risus tincidunt, sit amet fringilla ligula sagittis.", 
      count: 4
    },
    {
      id: 2, 
      title: "Deuxieme commentaire",
      care: "Nettoyage des lieux",
      user: {
        id: 76,
        img: "https://material.angular.io/assets/img/examples/shiba2.jpg",
        name: "Yohann"
      },
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod metus quis sapien accumsan, a blandit ex convallis. Ut id libero fringilla, varius ligula sit amet, rhoncus nulla. Mauris tempor gravida ornare. Nullam feugiat, nibh a euismod lacinia, neque turpis ornare purus, eu sagittis libero nulla at felis. Etiam eget neque et metus euismod porta. Sed mattis dictum placerat. Maecenas pellentesque sapien ac velit rutrum convallis. Donec nibh mi, accumsan sed rhoncus sit amet, dapibus vel eros. Proin velit ex, ornare vitae tincidunt a, placerat in ante. Nulla non lacus eget leo auctor convallis at eget augue. Integer egestas magna velit, ac varius massa mattis ut. Nam vehicula arcu ac risus tincidunt, sit amet fringilla ligula sagittis.", 
      count: 8
    }
  ]


}
