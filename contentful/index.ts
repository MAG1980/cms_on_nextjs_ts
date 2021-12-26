import { createClient } from 'contentful';

export const client = createClient({
  // space: 'xvkps7zt0tha',
  // accessToken: '2nu9uLfYuYsOapgKNqcz9frYUKQ84b3yTtXi94qBNfY',
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID || '',
  accessToken:
    process.env.REACT_APP_CONTENTFUL_CONTENT_DELIVERY_API_ACCESS_TOKEN || '',
});
