import { Subscription } from './subscription.interface';

export interface JobsAction {
  type: string,
  list?: Array<{ [key: string]: any }>,
  item?: { [key: string]: any },
  fetchJobParams?: { [key: string]: string },
  subscribeToJobParams?: { [key: string]: string },
  subscription?: Subscription,
}