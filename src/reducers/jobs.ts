import {
  fetchJobsList,
  fetchJobData,
  sendJobSubscription,
} from '../data/jobs';

import { JobsState } from '../ts/interfaces/jobsState.interface';
import { JobsAction } from '../ts/interfaces/jobsAction.interface';

import {
  fetchJobsListSuccess,
  fetchJobsListFail,
  fetchJobDataSuccess,
  fetchJobDataFail,
  subscribeToJobSuccess,
  subscribeToJobFail,
} from '../actions/jobs';

import store from '../store';

type ActionTypesIndexSignature = {
  [key: string]: (state: JobsState, action?: JobsAction) => Object,
};

const actionTypes: ActionTypesIndexSignature = {
  FETCH_JOBS_LIST: (state: JobsState): Object => {
    fetchJobsList()
    .then((response) => {
      store.dispatch(fetchJobsListSuccess(response.data.jobs));
    })
    .catch(() => {
      store.dispatch(fetchJobsListFail());
    });

    return {
      ...state,
      listIsLoading: true,
    };
  },
  FETCH_JOBS_LIST_SUCCESS: (state: JobsState, action?: JobsAction): Object => {
    return {
      ...state,
      listIsLoading: false,
      error: null,
      list: action?.list || state.list,
    };
  },
  FETCH_JOBS_LIST_FAIL: (state: JobsState): Object => {
    return {
      ...state,
      listIsLoading: false,
      error: "Something happened while loading the jobs list. Try again later.",
    };
  },
  FETCH_JOB_DATA: (state: JobsState, action?: JobsAction): Object => {
    fetchJobData(action?.fetchJobParams?.jobSlug || '', action?.fetchJobParams?.companySlug || '')
    .then((response) => {
      store.dispatch(fetchJobDataSuccess(response.data.job));
    })
    .catch(() => {
      store.dispatch(fetchJobDataFail());
    });

    return {
      ...state,
      jobDataIsLoading: true,
    };
  },
  FETCH_JOB_DATA_SUCCESS: (state: JobsState, action?: JobsAction): Object => {
    return {
      ...state,
      jobDataIsLoading: false,
      error: null,
      currentItem: action?.item || {},
    };
  },
  FETCH_JOB_DATA_FAIL: (state: JobsState): Object => {
    return {
      ...state,
      jobDataIsLoading: false,
      error: "Something happened while loading the job data. Try again later.",
    };
  },
  REMOVE_JOB_DATA: (state: JobsState) => {
    return {
      ...state,
      currentItem: null,
    }
  },

  SUBSCRIBE_TO_JOB: (state: JobsState, action?: JobsAction): Object => {
    sendJobSubscription(action?.subscribeToJobParams?.name || '', action?.subscribeToJobParams?.email || '')
    .then(() => {
      store.dispatch(subscribeToJobSuccess(action?.subscribeToJobParams || {}));
    })
    .catch(() => {
      store.dispatch(subscribeToJobFail());
    });

    return {
      ...state,
      subscribeIsLoading: true,
      subscriptionError: null,
    };
  },
  SUBSCRIBE_TO_JOB_SUCCESS: (state: JobsState, action?: JobsAction): Object => {
    return {
      ...state,
      subscribeIsLoading: false,
      error: null,
      subscription: action?.subscription,
    };
  },
  SUBSCRIBE_TO_JOB_FAIL: (state: JobsState): Object => {
    return {
      ...state,
      subscribeIsLoading: false,
      subscriptionError: "Something happened while subscribing to the job. Verify your subscription information and try again.",
    };
  },
  DEFAULT: (state: JobsState): Object => {
    return state;
  },
};

const jobs = (state: JobsState = {}, action: JobsAction): Object => {
  return (actionTypes[action.type || 'DEFAULT'] && actionTypes[action.type || 'DEFAULT'](state, action)) || state;
};

export default jobs;