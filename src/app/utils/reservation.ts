import { Reservation } from "@/types/reservation";
import axios from "axios";
import { toast } from "react-toastify";

const reserveSeats = async (
  email: string,
  screening_id: string,
  selected_seats: string[],
  type: "LOCKED" | "RESERVED"
) => {
  let reservation;
  try {
    reservation = await axios.post(
      `http://${process.env.NEXT_PUBLIC_BACKEND_URL}:${
        process.env.NEXT_PUBLIC_PORT_NUMBER
      }/api/reservations/${type === "LOCKED" ? "lock" : "reserve"}`,
      {
        email,
        screening_id,
        selected_seats,
      }
    );
  } catch (error: unknown) {
    console.log(error);
    toast.error(
      axios.isAxiosError(error) && error.response
        ? error.response.data.message
        : "Something went wrong"
    );
  }
  return (reservation?.data?.reservation as Reservation) || undefined;
};

export { reserveSeats };
