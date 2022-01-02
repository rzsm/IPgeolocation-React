export default async function getInfo() {
  let response = await fetch("https://api.ipify.org?format=json");
  let ip = (await response.json()).ip;
  let info = await fetch(`http://ipwhois.app/json/${ip}`);
  return (await info.json());
}
