import React from 'react';
import {Header} from './header';
import {Search} from './SearchFolder/Search';

import './MovieDetail.css';

export class MovieDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {
        genres: []
      }
    }
    this.getData = this.getData.bind(this);
  }

  getData() {
    const key = 'bb3cda839e0cf4f922d98d8f8025e07b';
    const id = window.location.pathname.substring(7);

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US&append_to_response=credits`)
      .then(response => {
        if (response.status !== 200) {
          console.log('Error: ' + response.status);
          return;
        }

        response.json().then(data => {
          const movie = data;
          this.setState({ movie });
        });

      })
      .catch(err => {
        console.log('Fetch Error :', err);
      })
  }

  componentDidMount() {
    this.getData();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.movie !== this.state.movie) {
      this.getData();
    }
  }

  render() {
    return(
      <div className="container">
        <Header />
        <Search id="form" />

        <div className="moviePage">
          <div className="poster">
            <img src={this.state.movie.poster_path === null ? 'http://via.placeholder.com/300x450' : `https://image.tmdb.org/t/p/w300${this.state.movie.poster_path}`} alt={`${this.state.movie.title} poster`} className="posterImg" />
            <button className= 'add_collection' onClick= {event =>{
                  
                }}>Add Collection</button>
          </div>

          <section className="MovieDetails">
            <h2 className="sectionTitle">{this.state.movie.title}</h2>
            <ul className="detailsList">
              <li><span className="bold">Release date:</span> {this.state.movie.release_date}</li>
              <li><span className="bold">Rating:</span> {this.state.movie.vote_average}</li>
              <li><span className="bold">Vote count:</span> {this.state.movie.vote_count}</li>
              <li><span className="bold">Genres: </span> {this.state.movie.genres.map((element, index) => {
                  if (index < this.state.movie.genres.length - 1) {
                    return this.state.movie.genres[index].name + ', '
                  } else {
                    return this.state.movie.genres[index].name
                  }
                })}
              </li>
            </ul>

            <p>{this.state.movie.overview}</p>
          </section>
        </div>
      </div>
    );
  }
}

export default MovieDetail