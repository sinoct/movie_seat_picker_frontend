import { Screening } from "@/types/screenings";
import { Seat } from "@/types/seat";
import axios from "axios";

const getScreenings = async (movie_id: string) => {
  const movies = await axios.get(
    `http://${process.env.NEXT_PUBLIC_BACKEND_URL}:${process.env.NEXT_PUBLIC_PORT_NUMBER}/api/screenings/available/${movie_id}`
  );
  return movies.data.screenings as Screening[];
};

const getSeatsForScreening = async (screening_id: string) => {
  const movies = await axios.get(
    `http://${process.env.NEXT_PUBLIC_BACKEND_URL}:${process.env.NEXT_PUBLIC_PORT_NUMBER}/api/screenings/seats/${screening_id}`
  );
  return movies.data.sortedFormattedSeats as Seat[][];
};

export { getScreenings, getSeatsForScreening };
