import React from 'react';

import { Job } from '../../ts/interfaces/job.interface';

import Button from '../button';

import "./index.scss";

interface Props {
  job: Job,
  onShowMoreClick: (slug: string, companySlug: string) => void,
};

const JobListItem = ({ job, onShowMoreClick }: Props) => {
  const handleShowMoreClick = () => {
    onShowMoreClick(job.slug, job.company.slug);
  };

  return (
    <li className="job-list-item-root">
      <h3>{job.title}</h3>
      <h5>{job.commitment.title} commitment at {job.company.name}</h5>
      <div className="job-list-item-description">
        <p>{job.description}</p>
      </div>
      <Button onClick={handleShowMoreClick} fillContainer className="read-more-button">Read More</Button>
    </li>
  );
};

export default JobListItem;