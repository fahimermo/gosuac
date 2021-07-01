import axios from "axios";
import { SquidexTokenManager } from "./SquidexTokenManager";

const squidexApi = {
  url: "https://cms.gosuac.com",
  appName: "gosuac",
  clientId: "gosuac:website",
  clientSecret: "htu8pecytwf9ghv3cvt3wipcblo4mtg3ubmyypeq9rax",
};

const tokenManager = new SquidexTokenManager(
  `${squidexApi.url}/identity-server/connect/token`,
  squidexApi.clientId,
  squidexApi.clientSecret,
  process.env.DEBUG_TOKEN_CACHE
);

const axiosClient = axios.create({
  baseURL: `${squidexApi.url}/api`,
  responseType: "json",
  timeout: 60000,
  maxRedirects: 0,
  headers: { "User-Agent": "GosuacSite NextJS" },
});

async function request(method, path, data) {
  const token = await tokenManager.getToken();
  try {
    const response = await axiosClient.request({
      method: method,
      url: path,
      data: data,
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (e) {
    //log.error(`😱 Axios private request failed: ${e}`)
    //Sentry.captureException(e)
    throw e;
  }
}

async function getCard(cardID) {
  const response = await request("GET", `/content/gosuac/card/${cardID}`);
  return response.data.data;
}

async function getWhatWeDo() {
  const response = await request(
    "GET",
    "/content/gosuac/home-whatwedo/558dc9ac-837a-4fda-b739-fdab41c5e078"
  );
  return response.data.data;
}

async function getClientList() {
  const response = await request(
    "GET",
    "/content/gosuac/clients/cf719945-b539-4da1-b30d-a625703e7d62"
  );
  return response.data.data;
}

async function getHomePage() {
  const response = await request(
    "GET",
    "/content/gosuac/home-page/1bae9135-6b63-4231-8e31-e6c4a84a38a8"
  );
  const data = response.data.data;
  const cards = [];

  for (const cardID of data.cards.iv) {
    cards.push(await getCard(cardID));
  }

  data.cards = cards;

  data.whatwedo = await getWhatWeDo();

  data.clients = await getClientList();

  return data;
}

async function getExpertisePage() {
  const response = await request(
    "GET",
    "/content/gosuac/expertise-page/c96638b0-7c77-4d92-bca5-9c763e9eb1d7"
  );
  return response.data.data;
}

async function getTeamMember(memberID) {
  const response = await request(
    "GET",
    `/content/gosuac/team-members/${memberID}`
  );
  return response.data.data;
}

async function getTeamPage() {
  const response = await request(
    "GET",
    "/content/gosuac/team-page/73eb260b-851a-4d9f-83f3-7e7fbf8ad3a8"
  );
  const data = response.data.data;
  const members = [];

  for (const memberID of data["team-members"].iv) {
    members.push(await getTeamMember(memberID));
  }

  data["team-members"] = members;

  return data;
}

async function getBlogPage() {
  const response = await request(
    "GET",
    "/content/gosuac/blog-page/dd15c2d6-fd78-4f9e-892b-af6ac1ec5b33"
  );
  return response.data.data;
}

async function getContactPage() {
  const response = await request(
    "GET",
    "/content/gosuac/contact-page/2d303d21-01df-4b47-8050-fbd4179d0fa0"
  );
  return response.data.data;
}

async function getAllPosts() {
  const response = await request("GET", "/content/gosuac/post");
  return response.data;
}

async function getPostBySlug(slug) {
  const response = await request(
    "GET",
    `/content/gosuac/post?$filter=data/slug/es eq '${slug}'`
  );
  return response.data;
}

async function getAllCards() {
  const response = await request("GET", "/content/gosuac/card");
  return response.data;
}

export {
  getHomePage,
  getExpertisePage,
  getTeamPage,
  getBlogPage,
  getContactPage,
  getAllPosts,
  getPostBySlug,
  getAllCards,
};
