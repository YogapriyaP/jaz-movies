import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartdetailsService {
  filteredrData: any = [];
  constructor() {}

  addedItems: any[] = [];
  stocks: number = 10;
  noOfCartEntries: number = 0;
  filteredData: any[] = [];
  productList:any[]=[];

  moviesList = [
    {
      name: 'The Amazing Spiderman',
      language: 'English',
      stocks: 10,
      rating: '4.5/5',
      mode: 'dvd',
      img: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/The_Amazing_Spider_Man_2012_video_game_cover.jpg/220px-The_Amazing_Spider_Man_2012_video_game_cover.jpg',
    },
    {
      name: 'Avengers:Endgame',
      language: 'English',
      stocks: 10,
      rating: '5/5',
      mode: 'dvd',
      img: 'https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810',
    },
    {
      name: 'The Fault In Our Stars',
      language: 'English',
      stocks: 10,
      rating: '3.5/5',
      mode: 'dvd',
      img: 'http://images6.fanpop.com/image/photos/37800000/The-Fault-In-Our-Stars-Poster-the-fault-in-our-stars-37808972-189-266.jpg',
    },
    {
      name: 'Jumanji',
      language: 'English',
      stocks: 1,
      rating: '3/5',
      mode: 'dvd',
      img: 'https://www.pinkvilla.com/files/styles/large/public/Jumanji.jpg',
    },
    {
      name: 'Suicide Squad',
      language: 'English',
      stocks: 10,
      rating: '4/5',
      mode: 'dvd',
      img: 'https://cdn.europosters.eu/image/750/posters/suicide-squad-face-i30255.jpg',
    },
    {
      name: 'The Chronicles of Narnia',
      language: 'English',
      stocks: 10,
      rating: '4.5/5',
      mode: 'dvd',
      img: 'https://lumiere-a.akamaihd.net/v1/images/p_thechronicalsofnarnia_lionwitchwadrobe_19890_fe46d195.jpeg?region=0%2C0%2C540%2C810',
    },
    {
      name: 'The Lion King',
      language: 'English',
      stocks: 10,
      rating: '4.5/5',
      mode: 'dvd',
      img: 'https://cdn.hownd.com/images/Business-4790-9a0bef4d34105041e33890b0a93badfd-lion_king.jpg',
    },
    {
      name: 'Frozen',
      language: 'English',
      stocks: 10,
      rating: '5/5',
      mode: 'dvd',
      img: 'https://lumiere-a.akamaihd.net/v1/images/p_frozen_18373_3131259c.jpeg?region=0%2C0%2C540%2C810',
    },
    {
      name: 'Coco',
      language: 'English',
      stocks: 10,
      rating: '3.5/5',
      mode: 'dvd',
      img: 'https://lumiere-a.akamaihd.net/v1/images/p_coco_19736_fd5fa537.jpeg?region=0%2C0%2C540%2C810',
    },
    {
      name: 'The Conjuring',
      language: 'English',
      stocks: 10,
      rating: '5/5',
      mode: 'dvd',
      img: 'https://i.ytimg.com/vi/jZscaLqS_mQ/movieposter_en.jpg',
    },
  ];

  moviesListDownload = [
    {
      name: 'Baahubali 2',
      language: 'Telugu',
      available:1,
      rating: '4/5',
      
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0HdmiTBkBlIDoHBeXjpN_nwYvX-GE3vP09r4eiVPdQqMu61M-QZBjXoHyNAp42h-fvIE&usqp=CAU',
    },
    {
      name: 'Hridayam',
      language: 'Malayalam',
      available:1,
      rating: '4.5/5',

      img: 'https://m.media-amazon.com/images/M/MV5BNTI1NjNkNmItM2FlZi00MWU1LWJkMmMtMzBjMDI4YmU5YjIyXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg',
    },
    {
      name: 'RRR',
      language: 'Tamil',
      available:1,
      rating: '4/5',

      img: 'https://www.pinkvilla.com/imageresize/rrr-bacchan-runway-clash.jpg?width=752&format=webp&t=pvorg',
    },
    {
      name: 'Doctor',
      language: 'Tamil',
      available:1,
      rating: '4/5',

      img: 'https://moviegalleri.net/wp-content/uploads/2020/02/Sivakarthikeyan-Doctor-Movie-First-Look-Poster-HD.jpg',
    },
    {
      name: 'Rab Ne Bana Di Jodi',
      language: 'Hindi',
      available:1,
      rating: '3.5/5',

      img: 'https://www.makemykaraoke.com/images/detailed/21/Rab_Ne_Dance_pe_chance.jpg',
    },
    {
      name: 'Valimai',
      language: 'Tamil',
      available:1,
      rating: '3.5/5',

      img: 'https://w0.peakpx.com/wallpaper/449/487/HD-wallpaper-valimai-thala-valimaithala-valimaiupdate-ajithkumar-valimai-ajith-valimaiajith-valimaiposter-thumbnail.jpg',
    },
    {
      name: 'Beast',
      language: 'Tamil',
      available:1,
      rating: '4/5',

      img: 'https://moviegalleri.net/wp-content/uploads/2021/06/Thalapathy-65-Vijay-Birthday-Wishes-BEAST-Movie-Second-Look-Poster-HD.jpg',
    },
    {
      name: 'Shyam Singha Roy',
      language: 'Telugu',
      available:1,
      rating: '4/5',

      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZjlerGxMKthLP9bW8PZQSobbJUYirZAm9tCrE_6lmfY_XhmTnh0I4UqIlaJglg6DSBQg&usqp=CAU',
    },
    {
      name: 'Dia',
      language: 'Kannada',
      available:1,
      rating: '4/5',

      img: 'https://m.media-amazon.com/images/M/MV5BNDQxYjRmNWYtNjgyMC00MDg2LTg2OTEtZmIzNWNkMDhkOTk1XkEyXkFqcGdeQXVyMzU0ODc1MTQ@._V1_.jpg',
    },
    {
      name: 'Mudhal Nee Mudivum Nee',
      language: 'Tamil',
      available:1,
      rating: '4.5/5',

      img: 'https://akamaividz2.zee5.com/image/upload/w_630,h_945,c_scale,f_auto,q_auto/resources/0-0-1z575093/portrait/1920x770bc6b8a5d259d44b7b5e8200ffefef2ac.jpg',
    },
  ];

  filterData(value: string, mode: string) {
    if (mode == 'dvd') {
      this.filteredData = [];
      this.moviesList.forEach((item) => {
        if (item.rating == value || item.language == value) {
          this.filteredData.push(item);
        }
      });
    } else {
      this.filteredData = [];
      this.moviesListDownload.forEach((item) => {
        if (item.rating == value || item.language == value) {
          this.filteredData.push(item);
        }
      });
    }
    return this.filteredData;
  }

  getMoviesList() {
    return this.moviesList;
  }

  addToCart(movie: any) {
    this.addedItems.push(movie);
     movie.available=0;
     return movie.available;
  }

  clearCart() {
    this.addedItems = [];
    return this.addedItems;
  }

 updateStocks(movie: any, func: string) {
    let index = this.moviesList.indexOf(
      this.moviesList.filter((a) => {
        return (a.name == movie.name);
      })[0]
    );
    if (func == 'add') {
      this.moviesList[index].stocks = this.moviesList[index].stocks - 1;
    } else {
      this.moviesList[index].stocks = this.moviesList[index].stocks + 1;
    }

    console.log(this.moviesList[index].stocks);
    return this.moviesList[index].stocks;
  }
}
