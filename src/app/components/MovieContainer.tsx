import { Movie } from "@/types/movie";
import Link from "next/link";
import { FunctionComponent } from "react";

interface MovieContainerProps {
  movie: Movie;
}

const MovieContainer: FunctionComponent<MovieContainerProps> = ({ movie }) => {
  return (
    <Link
      className="text-3xl border-2 border-gray-600 bg-black rounded-xl p-4 invert-0 hover:invert transition-all duration-300 w-full flex justify-center items-center overflow-hidden h-32 md:h-48"
      href={`/movies/${movie.id}`}
    >
      {movie.title}
    </Link>
  );
};

export default MovieContainer;
