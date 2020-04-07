import React from 'react';

import "./index.scss";

interface Props {
  children: JSX.Element | Array<JSX.Element>,
};

const JobList = ({ children }: Props) => {
  return (
    <ul className="job-list-root">{children}</ul>
  );
};

export default JobList;