"use client";
import { Seat } from "@/types/seat";
import { FunctionComponent, useState } from "react";
import RowContainer from "./RowContainer";
import ReservationDialog from "./ReservationDialog";
import { reserveSeats } from "../utils/reservation";

interface ScreeningsContentProps {
  rows: Seat[][];
  screening_id: string;
}

const ScreeningsContent: FunctionComponent<ScreeningsContentProps> = ({
  rows,
  screening_id,
}) => {
  const [seats, setSeats] = useState<Seat[][]>(rows);
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);
  const [reservationDialogOpen, setReservationDialogOpen] = useState(false);
  const toggleSeatSelected = (seat: Seat) => {
    if (!selectedSeats.includes(seat)) {
      setSelectedSeats([...selectedSeats, seat]);
    } else {
      setSelectedSeats(
        selectedSeats.filter((selected) => selected.id !== seat.id)
      );
    }
  };
  const handleReservation = async (
    type: "LOCKED" | "RESERVED",
    email: string
  ) => {
    const selectedSeatIds = selectedSeats.map((seat: Seat) => {
      return seat.id;
    });
    const reservation = await reserveSeats(
      email,
      screening_id,
      selectedSeatIds,
      type
    );
    if (reservation) {
      setSeats(
        seats.map((row: Seat[]) => {
          return row.map((seat: Seat) => {
            if (selectedSeatIds.includes(seat.id)) {
              return {
                ...seat,
                availability: false,
              };
            }
            return seat;
          });
        })
      );
      setSelectedSeats([]);
      setReservationDialogOpen(false);
    }
  };
  return (
    <div className="w-full flex">
      {selectedSeats.length > 0 && (
        <div
          className="absolute top-2.5 right-2.5 md:right-5 md:top-5 text-xs md:text-xl border-2 border-gray-600 bg-gray-700 rounded-md p-2 md:p-2 transition-all duration-300 cursor-pointer"
          onClick={() => setReservationDialogOpen(!reservationDialogOpen)}
        >
          Reserve
        </div>
      )}
      <div className="flex flex-col gap-2 md:gap-4 w-full justify-center items-center">
        {seats.map((row, index) => {
          return (
            <div className="flex flex-row items-center gap-4" key={index}>
              Row: {index + 1}
              <RowContainer
                row={row}
                selectedSeats={selectedSeats}
                updateSelectedSeats={(seat: Seat) => {
                  if (!reservationDialogOpen) {
                    toggleSeatSelected(seat);
                  }
                }}
              ></RowContainer>
            </div>
          );
        })}
      </div>
      <div
        className={`
            fixed top-1/2 right-1/2  w-3/4 md:w-1/2 h-2/3 bg-gray-300 rounded-lg transition-transform duration-300 ease-in-out translate-x-1/2
            ${
              reservationDialogOpen ? "-translate-y-1/2 " : "translate-y-[200%]"
            }
          `}
      >
        <ReservationDialog
          selectedSeats={selectedSeats}
          closeWindow={() => setReservationDialogOpen(false)}
          sendReservation={handleReservation}
        ></ReservationDialog>
      </div>
    </div>
  );
};

export default ScreeningsContent;
