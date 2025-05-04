import { Seat } from "@/types/seat";
import { FunctionComponent } from "react";

interface SeatContainerProps {
  seat: Seat;
  selected: boolean;
  selectSeat: (seat_id: Seat) => void;
}

const SeatContainter: FunctionComponent<SeatContainerProps> = ({
  seat,
  selected,
  selectSeat,
}) => {
  return (
    <div
      className={`text-base border-t-2 border-b-1 border-l-1 border-r-1 w-5 md:w-10 h-5 md:h-10 border-gray-600 bg-black rounded-t-xl p-2  transition-all duration-300 flex justify-center items-center ${
        !seat.availability
          ? "bg-red-700 cursor-not-allowed"
          : `${
              selected
                ? "bg-green-700 hover:brightness-120"
                : "invert-0 hover:invert"
            } cursor-pointer`
      }`}
      onClick={() => {
        if (seat.availability) {
          selectSeat(seat);
        }
      }}
    >
      {seat.seat_number}
    </div>
  );
};

export default SeatContainter;
