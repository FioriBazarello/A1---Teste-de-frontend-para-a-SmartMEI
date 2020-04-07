import { Subscription } from './subscription.interface';

export interface JobsState {
  listIsLoading?: boolean,
  jobDataIsLoading?: boolean,
  subscribeIsLoading?: boolean,
  list?: Array<{ [key: string]: string }>,
  currentItem?: { [key: string]: string },
  error?: string,
  subscription?: Subscription,
  subscriptionError?: string,
}