import { Job } from '../ts/interfaces/job.interface';
import { Subscription } from '../ts/interfaces/subscription.interface';

export const FETCH_JOBS_LIST = 'FETCH_JOBS_LIST';
export const FETCH_JOBS_LIST_SUCCESS = 'FETCH_JOBS_LIST_SUCCESS';
export const FETCH_JOBS_LIST_FAIL = 'FETCH_JOBS_LIST_FAIL';

export const FETCH_JOB_DATA = 'FETCH_JOB_DATA';
export const FETCH_JOB_DATA_SUCCESS = 'FETCH_JOB_DATA_SUCCESS';
export const FETCH_JOB_DATA_FAIL = 'FETCH_JOB_DATA_FAIL';
export const REMOVE_JOB_DATA = 'REMOVE_JOB_DATA';

export const SUBSCRIBE_TO_JOB = 'SUBSCRIBE_TO_JOB';
export const SUBSCRIBE_TO_JOB_SUCCESS = 'SUBSCRIBE_TO_JOB_SUCCESS';
export const SUBSCRIBE_TO_JOB_FAIL = 'SUBSCRIBE_TO_JOB_FAIL';

export const fetchJobsList = () => ({
  type: FETCH_JOBS_LIST,
});

export const fetchJobsListSuccess = (jobs: Array<Job>) => ({
  type: FETCH_JOBS_LIST_SUCCESS,
  list: jobs,
});

export const fetchJobsListFail = () => ({
  type: FETCH_JOBS_LIST_FAIL,
});

export const fetchJobData = (jobSlug: string, companySlug: string) => ({
  type: FETCH_JOB_DATA,
  fetchJobParams: {
    jobSlug,
    companySlug,
  },
});

export const fetchJobDataSuccess = (item: Object) => ({
  type: FETCH_JOB_DATA_SUCCESS,
  item,
});

export const fetchJobDataFail = () => ({
  type: FETCH_JOB_DATA_FAIL,
});

export const removeJobItem = () => ({
  type: REMOVE_JOB_DATA,
});

export const subscribeToJob = (name: string, email: string, jobSlug: string) => ({
  type: SUBSCRIBE_TO_JOB,
  subscribeToJobParams: {
    name,
    email,
    jobSlug,
  },
});

export const subscribeToJobSuccess = (subscription: Subscription) => ({
  type: SUBSCRIBE_TO_JOB_SUCCESS,
  subscription,
});

export const subscribeToJobFail = () => ({
  type: SUBSCRIBE_TO_JOB_FAIL,
});
