import React from 'react';
import {Link} from 'react-router-dom';
import './Movies.css';

export class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],loading:false, error:false
    }
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=bb3cda839e0cf4f922d98d8f8025e07b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
      .then(response => {
        if (response.status !== 200) {
          console.log('Error: ' + response.status);
          return;
        }

        response.json().then(data => {
          const movies = data.results;
          this.setState({ movies });
        });

      })
      .catch(err => {
        console.log('Fetch Error :', err);
      })
  }

  render() {
    const { loading, error} = this.state
    if (loading){
      return <p>Loading...</p>
    }
    if (error) {
      return <p> Error 500!</p>
    }
    return(
      <section>
        <h2> </h2>
        <div className="Movies">
          {this.state.movies.map((movie, index) => {
            return (
              <Link to={`/movie/${this.state.movies[index].id}`} key={index} className="movieLink">
                <img src={this.state.movies[index].poster_path === null ? 'http://via.placeholder.com/300x450' : `https://image.tmdb.org/t/p/w300/${this.state.movies[index].poster_path}`} alt={`${this.state.movies.title} poster`} className="imgResponsive" />
                
                <button className= 'add_collection' onClick= {event =>{
                  
                }}>Add Collection</button>
              </Link>
            )
          })}
        </div>
      </section>
    );
  }
}
export default Movies