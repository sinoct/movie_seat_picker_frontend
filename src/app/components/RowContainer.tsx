import { Seat } from "@/types/seat";
import { FunctionComponent } from "react";
import SeatContainer from "./SeatContainer";

interface RowContainterProps {
  row: Seat[];
  selectedSeats: Seat[];
  updateSelectedSeats: (seat_id: Seat) => void;
}

const RowContainer: FunctionComponent<RowContainterProps> = ({
  row,
  selectedSeats,
  updateSelectedSeats,
}) => {
  return (
    <div className="flex flex-row gap-1">
      {row.map((seat) => {
        return (
          <SeatContainer
            seat={seat}
            key={seat.id}
            selected={selectedSeats.some(
              (selection) => selection.id === seat.id
            )}
            selectSeat={updateSelectedSeats}
          ></SeatContainer>
        );
      })}
    </div>
  );
};

export default RowContainer;
