import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export const loader = ( { request } ) => {

    const { headers } = request;

    return {
        user: ( headers.get( 'cookie' ) ) ? headers.get( 'cookie' ).split( '=' ).pop() : undefined,
    }

};

export default function App() {

    const { user } = useLoaderData();

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        { ( user ) ? <p>Hello { user }</p> : null }
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
