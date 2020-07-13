import fetch from "node-fetch";

export async function getServices() {
  const data = await fetch(
    "https://clinia-coding-challenge.s3.ca-central-1.amazonaws.com/services.json"
  );
  const result = await data.json();
  return result;
}
