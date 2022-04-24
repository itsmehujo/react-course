import { ApiFetcherOptions, ApiFetcherResults } from '@common/types/api';

const fetchApi = async <T>( { query, apiUrl }: ApiFetcherOptions ): Promise<ApiFetcherResults<T>> => {
  const res = await fetch( apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/JSON'
    },
    body: JSON.stringify( {
      query
    } )
  } );
  const { data, errors } = await res.json();
  // If array of errors, return the first one's message ; else returns the only error message
  // (null or undefined check)
  if ( errors ) throw new Error( errors[ 0 ].message ?? errors.message );
  return { data };
};

export default fetchApi;