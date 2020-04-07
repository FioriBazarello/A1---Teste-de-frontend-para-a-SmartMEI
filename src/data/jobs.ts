const jobsListQuery = JSON.stringify({
  query: `
    {
      jobs {
        id,
        title,
        slug,
        commitment {
          id,
          title
        },
        cities {
          id,
          name
        },
        description,
        company {
          id,
          name,
          slug
        },
        isPublished,
      }
    }
  `,
});

export const fetchJobsList = async () => {
  let response = await fetch("https://api.graphql.jobs/", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: jobsListQuery,
  })
  .then(async response => {
    return await response.json();
  });

  return response;
};

const jobDataQuery = (jobSlug: string, companySlug: string) => {
  return JSON.stringify({
    query: `
    {
      job(input:{
        jobSlug: "${jobSlug}",
        companySlug: "${companySlug}"
      }) {
        id,
        title,
        slug,
        commitment {
          id,
          title
        },
        cities {
          id,
          name
        },
        description,
        company {
          id,
          name
        }
      }
    }
    `
  });
}

export const fetchJobData = async (jobSlug: string, companySlug: string) => {
  let response = await fetch("https://api.graphql.jobs/", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: jobDataQuery(jobSlug, companySlug),
  })
  .then(async response => {
    return await response.json();
  });

  return response;
};

const jobSubscribeMutation = (name: string, email: string) => {
  return JSON.stringify({
    query: `
    mutation SubscribeToJob {
      subscribe(input: { name: "${name}", email: "${email}"}) {
        name,
        email
      }
    }
    `
  });
}

export const sendJobSubscription = async (name: string, email: string) => {
  let response = await fetch("https://api.graphql.jobs/", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: jobSubscribeMutation(name, email),
  })
  .then(async response => {
    return await response.json();
  });

  return response;
}