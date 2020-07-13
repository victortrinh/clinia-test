import fetch from "node-fetch";

export async function getForms() {
  const data = await fetch(
    "https://clinia-coding-challenge.s3.ca-central-1.amazonaws.com/form.json"
  );
  const result = await data.json();
  return result;
}
