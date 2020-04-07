import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import validate from 'validate.js';

import { Job } from '../../ts/interfaces/job.interface';
import { Subscription } from '../../ts/interfaces/subscription.interface';

import {
  fetchJobsList,
  fetchJobData,
  removeJobItem,
  subscribeToJob,
} from '../../actions/jobs';

import LoadingModal from '../../components/loadingModal';
import Header from '../../components/header';
import JobList from '../../components/jobList';
import JobListItem from '../../components/jobListItem';
import Pagination from '../../components/pagination';
import JobModal from '../../components/jobModal';
import Backdrop from '../../components/backdrop';
import Warning from '../../components/warning';

import './index.scss';

interface Props {
  fetchJobsList: () => void,
  fetchJobData: (jobSlug: string, companySlug: string) => void,
  removeJobItem: () => void,
  subscribeToJob: (name: string, email: string, jobSlug: string) => void,
  jobs: Array<Job>,
  currentJob: Job,
  subscribeIsLoading: boolean,
  listIsLoading: boolean,
  jobDataIsLoading: boolean,
  error: string,
  subscription: Subscription,
  subscriptionError: string,
}

const Home = (props: Props) => {
  const {
    jobs,
    error,
    subscribeIsLoading,
    listIsLoading,
    jobDataIsLoading,
    fetchJobsList,
    fetchJobData,
    removeJobItem,
    subscribeToJob,
    currentJob,
    subscription,
    subscriptionError,
  } = props;

  const validationRules = {
    name: {
      presence: {
        allowEmpty: false,
        message: "The name is required",
      }
    },
    email: {
      presence: {
        allowEmpty: false,
        message: "The email is required",
      },
      email: {
          message: "Write a valid email",
      },
    },
  };

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [name, setName] = useState<string>('');
  const [nameError, setNameError] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');

  const handleShowMoreClick = (jobSlug: string, companySlug: string) => {
    fetchJobData(jobSlug, companySlug);
  };

  const handleCloseClick = () => {
    removeJobItem();
  }

  const handleSubscribeClick = () => {
    const validationResults = validate({
      name,
      email,
    },
    validationRules,
    {
        fullMessages: false, // So the validator don't prepend the field name before the message
    });

    if (validationResults?.name) {
      setNameError(validationResults.name[0]);
    }
    if (validationResults?.email) {
      setEmailError(validationResults.email[0]);
    }
    else if (!validationResults) {
      subscribeToJob(name, email, currentJob.slug);
    }
  }

  const handlePageClick = (newCurrentPage: number) => {
    setCurrentPage(newCurrentPage);
  };

  const handleModalInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    event.currentTarget.name === "name" ? setName(event.currentTarget.value) : setEmail(event.currentTarget.value);
  }

  const getCurrentPageItems = (itemsPerPage: number) => {
    const paginationOffset = (currentPage - 1) * itemsPerPage;
    return jobs?.slice(paginationOffset, paginationOffset + itemsPerPage) || [];
  };

  const itemsPerPage = 10;
  const totalCount = jobs?.length;
  const currentPageJobs = getCurrentPageItems(itemsPerPage);

  useEffect(() => {
    fetchJobsList();
  }, [fetchJobsList]);
  
  return (
    <div className="home-root">
      <Header />
      {
        (listIsLoading || jobDataIsLoading) &&
        <>
          <LoadingModal />
          <Backdrop />
        </>
      }
      {
        !listIsLoading && !error &&
        <JobList>
          {
            currentPageJobs.map((job: Job, index: number): JSX.Element => (
              <JobListItem
                key={index}
                job={job}
                onShowMoreClick={handleShowMoreClick}
                />
            ))
          }
        </JobList>
      }
      {
        !listIsLoading && !error &&
        <Pagination
          totalItems={totalCount}
          currentPage={currentPage}
          itemsPerPage={10}
          onPageButtonClick={handlePageClick}
        />
      }
      {
        !listIsLoading && error &&
        <Warning message={error} />
      }
      {
        !jobDataIsLoading && currentJob &&
        <>
          <JobModal
            job={currentJob}
            onCloseClick={handleCloseClick}
            onSubscribeClick={handleSubscribeClick}
            isSubscribing={subscribeIsLoading}
            handleInputChange={handleModalInputChange}
            name={name}
            nameError={nameError}
            email={email}
            emailError={emailError}
            subscription={subscription}
            subscriptionError={subscriptionError}
          />
          <Backdrop onClick={handleCloseClick} />
        </>
      }
    </div>
  );
}

const mapStateToProps = (state: { [key: string]: any }) => {
  return {
    subscribeIsLoading: state.jobsReducer.subscribeIsLoading,
    listIsLoading: state.jobsReducer.listIsLoading,
    jobDataIsLoading: state.jobsReducer.jobDataIsLoading,
    error: state.jobsReducer.error,
    jobs: state.jobsReducer.list,
    currentJob: state.jobsReducer.currentItem,
    subscription: state.jobsReducer.subscription,
    subscriptionError: state.jobsReducer.subscriptionError,
  };
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
    fetchJobsList: () => {
      dispatch(fetchJobsList());
    },
    fetchJobData: (jobSlug: string, companySlug: string) => {
      dispatch(fetchJobData(jobSlug, companySlug));
    },
    removeJobItem: () => {
      dispatch(removeJobItem());
    },
    subscribeToJob: (name: string, email: string, jobSlug: string,) => {
      dispatch(subscribeToJob(name, email, jobSlug));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
