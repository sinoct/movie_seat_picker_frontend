"use client";
import { Seat } from "@/types/seat";
import { FunctionComponent, useState } from "react";

interface reservationDialogProps {
  selectedSeats: Seat[];
  closeWindow: () => void;
  sendReservation: (type: "LOCKED" | "RESERVED", email: string) => void;
}

const ReservationDialog: FunctionComponent<reservationDialogProps> = ({
  selectedSeats,
  closeWindow,
  sendReservation,
}) => {
  const [email, setEmail] = useState<string>();

  return (
    <div className="flex flex-col justify-evenly items-center p-8 text-black text-center gap-4 h-full max-h-[90vh] w-full">
      <div
        className="absolute top-5 right-5 cursor-pointer"
        onClick={closeWindow}
      >
        X
      </div>
      <div className="text-2xl mb-4">
        Your selected seats are
        <br />
        <span className="text-xs">(Row/Seat)</span>
      </div>
      <div className="flex flex-row gap-4 w-full flex-wrap justify-center">
        {selectedSeats.map((seat: Seat) => {
          return (
            <div
              className="border-2 border-gray-500 rounded-md p-1 w-12"
              key={seat.id}
            >{`${seat.row_number + 1}/${seat.seat_number}`}</div>
          );
        })}
      </div>
      <div className="w-full flex justify-center">
        <input
          className="border-2 border-black rounded-md p-2 w-3/4 flex"
          type="text"
          placeholder="input your email address"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-row justify-center gap-8">
        <div
          className={`text-xl border-2  hover:bg-slate-500 cursor-pointer
           border-gray-600 bg-slate-400 rounded-md p-4 transition-all duration-300 `}
          onClick={() => {
            sendReservation("LOCKED", email || "");
          }}
        >
          Lock
        </div>
        <div
          className={`text-xl border-2 ${
            email && email.length
              ? "hover:bg-slate-600 cursor-pointer"
              : "opacity-50 cursor-not-allowed"
          } border-gray-600 bg-slate-500 rounded-md p-4 transition-all duration-300 `}
          onClick={() => {
            if (email) sendReservation("RESERVED", email);
          }}
        >
          Reserve
        </div>
      </div>
    </div>
  );
};

export default ReservationDialog;
