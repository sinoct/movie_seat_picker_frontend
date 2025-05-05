"use client";

import { Movie } from "@/types/movie";
import { FunctionComponent } from "react";
import MovieContainer from "./MovieContainer";
import { toast } from "react-toastify";

interface MoviesContentProps {
  movies: Movie[];
}

const MoviesContent: FunctionComponent<MoviesContentProps> = ({ movies }) => {
  if (!movies || movies.length === 0) {
    toast.error("No Movies Available");
    return <div className="text-4xl pb-4">No Available Movies</div>;
  }
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

export default MoviesContent;
