import { Link, useFetcher, useNavigate } from '@remix-run/react';

export const loader = ( { request } ) => {

    const { headers } = request;

    if ( ! headers.get( 'cookie' ) )
        return new Response( null, {
            status: 301,
            headers: {
                Location: '/login',
            },
        } );

    return null;

};

export default function Index() {

  const fetcher = useFetcher();

  return (
    <>
        <h1>
            Home
        </h1>
        <button type="button" onClick={ () => fetcher.submit( undefined, { method: 'post', action: '/logout' } ) }>Logout</button>
    </>
  );
}
