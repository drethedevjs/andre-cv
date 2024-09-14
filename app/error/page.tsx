import Link from "next/link";

export default function ErrorPage({ searchParams } : { searchParams: { type: string } }) {
  const { type } = searchParams;
  const knownErrors = ["login-failed"];
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Ooops!</h1>
      {type === "login-failed" && (<strong>Login was not successful, sorry.</strong>
      )}
      {!knownErrors.includes(type) && (
        <strong>
          Something went wrong. Please try again or contact support.
        </strong>
      )}
      <br /><br />
      <Link role="button" href="/">
        Go back.
      </Link>
    </div>
  );
}