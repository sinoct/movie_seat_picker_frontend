import MovieContainer from "../components/MovieContainer";
import { Movie } from "@/types/movie";
import { getMovies } from "../utils/movies";

const Movies = async () => {
  const movies: Movie[] = await getMovies();
  return (
    <div className="flex text-center flex-col justify-center items-center p-8 w-full">
      <div className="text-4xl pb-4">Our Movie palette</div>
      <div className="flex flex-col md:flex-row gap-4 w-full flex-wrap justify-center items-center">
        {movies.map((movie) => {
          return (
            <div key={movie.id} className="w-full md:w-1/4 h-full">
              <MovieContainer movie={movie} key={movie.id}></MovieContainer>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
