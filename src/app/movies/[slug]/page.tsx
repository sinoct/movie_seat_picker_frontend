import ScreeningContainer from "@/app/components/ScreeningContainer";
import { getMovie } from "@/app/utils/movies";
import { getScreenings } from "@/app/utils/screenings";

const MoviePage = async ({ params }: { params: { slug: string } }) => {
  const movie_id = params.slug;
  const movie = await getMovie(movie_id);
  if (!movie) {
    return (
      <div className="flex flex-col items-center justify-center p-8">
        <p className="text-3xl">Movie not found.</p>
      </div>
    );
  }
  const screenings = await getScreenings(movie.id);
  return (
    <div className="flex flex-col justify-center items-center p-8">
      <div className="text-4xl pb-4">{movie.title}</div>
      <div className="flex flex-col sm:flex-row gap-4 flex-wrap justify-center w-full">
        {screenings.map((screening) => {
          return (
            <div
              className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 h-48"
              key={screening.id}
            >
              <ScreeningContainer screening={screening}></ScreeningContainer>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MoviePage;
