import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: process.env.SANITY_API_PROJECT_ID,
  dataset: process.env.SANITY_API_DATASET,
  useCdn: false,
  apiVersion: '2022-12-11',
});
