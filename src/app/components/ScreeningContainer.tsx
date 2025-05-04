import { Screening } from "@/types/screenings";
import Link from "next/link";
import { FunctionComponent } from "react";
import { formatDate } from "../utils/date";

interface ScreeningContainerProps {
  screening: Screening;
}

const ScreeningContainer: FunctionComponent<ScreeningContainerProps> = ({
  screening,
}) => {
  return (
    <Link
      className="text-center text-xl border-2 border-gray-600 bg-black rounded-xl p-4 invert-0 hover:invert transition-all duration-300 h-full flex justify-center items-center"
      href={`/screenings/${screening.id}`}
    >
      <div className="flex justify-center flex-col items-center">
        <div className="pb-2 mb-2 border-b-2">
          {formatDate(new Date(screening.start_time))}
        </div>
        <div className="text-center">Room: {screening.room.name}</div>
      </div>
    </Link>
  );
};

export default ScreeningContainer;
