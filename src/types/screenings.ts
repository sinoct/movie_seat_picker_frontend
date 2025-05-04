import { Room } from "./room";

export type Screening = {
  id: string;
  start_time: Date;
  end_time: Date;
  movie_id: string;
  room_id: string;
  room: Room;
};
