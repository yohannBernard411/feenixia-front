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
        img: "https://media.istockphoto.com/id/1319667386/fr/photo/chiot-nouveau-n%C3%A9-minuscule-et-charmant-de-la-race-am%C3%A9ricaine-de-chien-dintimidateur.jpg?s=612x612&w=0&k=20&c=bHdZQI1LH3RgEj_SqsBIuGrD3naU2dosIqU8mJHnZYw=",
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
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfo8ifEhDcDKcVlik5qMdjCW--WApqNbneiesoi-ewMQ&s",
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
        img: "https://i.pinimg.com/originals/1e/fe/82/1efe82bf4b5d665eeb9fd60b649a1a40.jpg",
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
        img: "https://jardinage.lemonde.fr/images/dossiers/2017-11/chihuahua-113418.jpg",
        name: "Leila"
      },
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod metus quis sapien accumsan, a blandit ex convallis. Ut id libero fringilla, varius ligula sit amet, rhoncus nulla. Mauris tempor gravida ornare. Nullam feugiat, nibh a euismod lacinia, neque turpis ornare purus, eu sagittis libero nulla at felis. Etiam eget neque et metus euismod porta. Sed mattis dictum placerat. Maecenas pellentesque sapien ac velit rutrum convallis. Donec nibh mi, accumsan sed rhoncus sit amet, dapibus vel eros. Proin velit ex, ornare vitae tincidunt a, placerat in ante. Nulla non lacus eget leo auctor convallis at eget augue. Integer egestas magna velit, ac varius massa mattis ut. Nam vehicula arcu ac risus tincidunt, sit amet fringilla ligula sagittis.", 
      count: 7
    }
  ]


}
