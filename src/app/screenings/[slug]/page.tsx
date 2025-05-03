import ScreeningsContent from "@/app/components/ScreeningsContent";
import { getSeatsForScreening } from "@/app/utils/screenings";

const MoviePage = async ({ params }: { params: { slug: string } }) => {
  const screening_id = params.slug;
  const rows = await getSeatsForScreening(screening_id);
  return (
    <div className="flex flex-col justify-center items-center p-4 relative">
      <div className="text-xl md:text-4xl pb-4">Choose your seats</div>
      <ScreeningsContent
        rows={rows}
        screening_id={screening_id}
      ></ScreeningsContent>
    </div>
  );
};

export default MoviePage;
