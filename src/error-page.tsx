import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        maxHeight: "100vh",
      }}
    >
      <h1>404</h1>
      <h2>
        The page you’re looking for doesn’t exist.
      </h2>
      <a href="/">Back Home</a>
    </div>
  );
}
