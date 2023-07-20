import { UserInterface } from 'interfaces/user';
import { SeatInterface } from 'interfaces/seat';
import { GetQueryInterface } from 'interfaces';

export interface BookingInterface {
  id?: string;
  status: string;
  user_id?: string;
  seat_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  seat?: SeatInterface;
  _count?: {};
}

export interface BookingGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  user_id?: string;
  seat_id?: string;
}
