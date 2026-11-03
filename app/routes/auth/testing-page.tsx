import { Link } from "react-router";
import type { Route } from "./+types/testing-page";

export async function loader() {
  return { message: 'Hola mundo desde loader' }
}

export async function clientLoader({serverLoader}: Route.ClientLoaderArgs) {
  // call the server loader
  const serverData = await serverLoader();
  // And/or fetch data on the client
  // Return the data to expose through useLoaderData()
  return { message: 'Hola mundo desde clientloader', serverData }
}

export default function MyRouteComponent({
  loaderData,
  actionData,
  params,
  matches,
}: Route.ComponentProps) {
  return (
    <div>
      <title>Support Chat</title>
      <meta property="og:title" content="Support Chat" />
      <meta
        name="description"
        content="This app is the best"
      />

      <h1 className="font-bold text-2xl">Testing Page</h1>
      <p>Loader Data: {JSON.stringify(loaderData)}</p>
      <p>Action Data: {JSON.stringify(actionData)}</p>
      <p>Route Parameters: {JSON.stringify(params)}</p>
      <p>Matched Routes: {JSON.stringify(matches)}</p>
      <Link to={'/auth/testing-args'} className="text-blue-500 underline text-2xl">Testing Args</Link>
    </div>
  );
}
