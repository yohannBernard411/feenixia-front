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
      care: "Le bien être",
      user: {
        id: 34,
        img: "https://img.nrj.fr/OLo1RjQy0nfOEDF6Yv62g1qimp0=/fit-in/230x346/smart/http%3A%2F%2Fmedia.nrj.fr%2F217x326%2F2013%2F05%2Fbig-bang-theory-howard-wolowitz_772.jpg",
        name: "Florian"
      },
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod metus quis sapien accumsan, a blandit ex convallis. Ut id libero fringilla, varius ligula sit amet, rhoncus nulla. Mauris tempor gravida ornare. Nullam feugiat, nibh a euismod lacinia, neque turpis ornare purus, eu sagittis libero nulla at felis. Etiam eget neque et metus euismod porta. Sed mattis dictum placerat. Maecenas pellentesque sapien ac velit rutrum convallis. Donec nibh mi, accumsan sed rhoncus sit amet, dapibus vel eros. Proin velit ex, ornare vitae tincidunt a, placerat in ante. Nulla non lacus eget leo auctor convallis at eget augue. Integer egestas magna velit, ac varius massa mattis ut. Nam vehicula arcu ac risus tincidunt, sit amet fringilla ligula sagittis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod metus quis sapien accumsan, a blandit ex convallis. Ut id libero fringilla, varius ligula sit amet, rhoncus nulla. Mauris tempor gravida ornare. Nullam feugiat, nibh a euismod lacinia, neque turpis ornare purus, eu sagittis libero nulla at felis. Etiam eget neque et metus euismod porta. Sed mattis dictum placerat. Maecenas pellentesque sapien ac velit rutrum convallis. Donec nibh mi, accumsan sed rhoncus sit amet, dapibus vel eros. Proin velit ex, ornare vitae tincidunt a, placerat in ante. Nulla non lacus eget leo auctor convallis at eget augue. Integer egestas magna velit, ac varius massa mattis ut. Nam vehicula arcu ac risus tincidunt, sit amet fringilla ligula sagittis.", 
      count: 4
    },
    {
      id: 2, 
      title: "Deuxieme commentaire",
      care: "Le magnetisme",
      user: {
        id: 76,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Kaley_Cuoco_at_PaleyFest_2013.jpg/800px-Kaley_Cuoco_at_PaleyFest_2013.jpg",
        name: "Yohann"
      },
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod metus quis sapien accumsan, a blandit ex convallis. Ut id libero fringilla, varius ligula sit amet, rhoncus nulla. Mauris tempor gravida ornare. Nullam feugiat, nibh a euismod lacinia, neque turpis ornare purus, eu sagittis libero nulla at felis. Etiam eget neque et metus euismod porta. Sed mattis dictum placerat. Maecenas pellentesque sapien ac velit rutrum convallis. Donec nibh mi, accumsan sed rhoncus sit amet, dapibus vel eros. Proin velit ex, ornare vitae tincidunt a, placerat in ante. Nulla non lacus eget leo auctor convallis at eget augue. Integer egestas magna velit, ac varius massa mattis ut. Nam vehicula arcu ac risus tincidunt, sit amet fringilla ligula sagittis.", 
      count: 8
    },
    {
      id: 3, 
      title: "Troisieme commentaire",
      care: "Le néttoyage energetique",
      user: {
        id: 78,
        img: "https://cafe-powell.com/wp-content/uploads/2014/07/sheldon-cooper.jpg",
        name: "Lorrie"
      },
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod metus quis sapien accumsan, a blandit ex convallis. Ut id libero fringilla, varius ligula sit amet, rhoncus nulla. Mauris tempor gravida ornare. Nullam feugiat, nibh a euismod lacinia, neque turpis ornare purus, eu sagittis libero nulla at felis. Etiam eget neque et metus euismod porta. Sed mattis dictum placerat. Maecenas pellentesque sapien ac velit rutrum convallis. Donec nibh mi, accumsan sed rhoncus sit amet, dapibus vel eros. Proin velit ex, ornare vitae tincidunt a, placerat in ante. Nulla non lacus eget leo auctor convallis at eget augue. Integer egestas magna velit, ac varius massa mattis ut. Nam vehicula arcu ac risus tincidunt, sit amet fringilla ligula sagittis.", 
      count: 9
    },
    {
      id: 4, 
      title: "Quatrieme commentaire",
      care: "Les guidances",
      user: {
        id: 23,
        img: "https://figurinepop.com/public/bernadette1_1.jpg",
        name: "Leila"
      },
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod metus quis sapien accumsan, a blandit ex convallis. Ut id libero fringilla, varius ligula sit amet, rhoncus nulla. Mauris tempor gravida ornare. Nullam feugiat, nibh a euismod lacinia, neque turpis ornare purus, eu sagittis libero nulla at felis. Etiam eget neque et metus euismod porta. Sed mattis dictum placerat. Maecenas pellentesque sapien ac velit rutrum convallis. Donec nibh mi, accumsan sed rhoncus sit amet, dapibus vel eros. Proin velit ex, ornare vitae tincidunt a, placerat in ante. Nulla non lacus eget leo auctor convallis at eget augue. Integer egestas magna velit, ac varius massa mattis ut. Nam vehicula arcu ac risus tincidunt, sit amet fringilla ligula sagittis.", 
      count: 7
    }
  ]


}
