import React from 'react';

import { Job } from '../../ts/interfaces/job.interface';
import { Subscription } from '../../ts/interfaces/subscription.interface';

import Modal from '../modal';
import Button from '../button';
import Separator from '../separator';
import Input from '../input';
import Warning from '../warning';

import './index.scss';

interface Props {
  job: Job,
  isSubscribing: boolean,
  name?: string,
  nameError?: string,
  email?: string,
  emailError?: string,
  subscription?: Subscription,
  subscriptionError?: string,
  onCloseClick: Function,
  onSubscribeClick: Function,
  handleInputChange: (event: React.FormEvent<HTMLInputElement>) => void,
};

const JobModal = (props: Props) => {
  const {
    job,
    onCloseClick,
    onSubscribeClick,
    isSubscribing,
    handleInputChange,
    name,
    nameError,
    email,
    emailError,
    subscription,
    subscriptionError,
  } = props;

  return (
    <Modal>
      <h3 className="job-modal-title">{job.title}</h3>
      <h5>{job.commitment.title} commitment at {job.company.name}</h5>
      <Separator />
      <p className="job-modal-description">{job.description}</p>
      <Separator />
      <div className="subscribe-container">
        {
          !isSubscribing && subscription && subscription.jobSlug === job.slug &&
          <>
            <h2>Subscribed!</h2>
            <p>{subscription.name}, you may be called in your email <b>{subscription.email}</b> soon.</p>
          </>
        }
        {
          !isSubscribing && subscriptionError &&
          <Warning message={subscriptionError} />
        }
        {
          (!subscription || subscription.jobSlug !== job.slug) &&
          <>
            <h5>Interested? Subscribe to this oportunity!</h5>
            <Input
              error={nameError}
              onChange={handleInputChange}
              value={name}
              name='name'
              label='Name'
            />
            <Input
              error={emailError}
              onChange={handleInputChange}
              value={email}
              name='email'
              label='Email'
            />
          </>
        }
      </div>
      <div className="job-modal-footer">
        <Button onClick={onCloseClick}>Close</Button>
        {
          (!subscription || subscription.jobSlug !== job.slug) &&
          <Button
            disabled={isSubscribing}
            isLoading={isSubscribing}
            onClick={onSubscribeClick}
          >
            Subscribe
          </Button>
        }
      </div>
    </Modal>    
  );
};

export default JobModal;