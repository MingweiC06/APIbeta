import type { ApiEntry } from "@/lib/types";

export const socialApis: ApiEntry[] = [
  {
    name: "GitHub REST API",
    slug: "github",
    category: "social",
    shortDescription:
      "Read and write repositories, issues, users and gists on GitHub through the official REST API.",
    longDescription:
      "The GitHub REST API at api.github.com lets applications read and manage nearly everything on GitHub: repositories, issues, pull requests, users, gists and notifications. You authenticate with a personal access token sent as a Bearer token, and the API returns JSON with hypermedia links. Generous authenticated rate limits and official Octokit SDKs make it a common choice for developer tooling and automation.",
    officialDocsUrl: "https://docs.github.com/en/rest",
    homepageUrl: "https://docs.github.com/en/rest",
    pricing: "free",
    pricingNotes:
      "Free to use for public and authenticated requests; authenticated rate limit is roughly 5,000 requests per hour.",
    auth: "api-key",
    sdkLanguages: ["JavaScript", ".NET", "Ruby", "Go"],
    sampleEndpoints: [
      {
        method: "GET",
        path: "/users/{username}",
        description: "Get public profile information for a GitHub user.",
      },
      {
        method: "GET",
        path: "/repos/{owner}/{repo}",
        description: "Get metadata and details for a single repository.",
      },
      {
        method: "GET",
        path: "/search/repositories",
        description: "Search repositories by keyword, language and filters.",
      },
      {
        method: "GET",
        path: "/orgs/{org}/repos",
        description: "List the repositories owned by an organization.",
      },
    ],
    codeExample: {
      language: "curl",
      code: 'curl --request GET \\\n  --url "https://api.github.com/user" \\\n  --header "Authorization: Bearer YOUR_GITHUB_TOKEN" \\\n  --header "X-GitHub-Api-Version: 2022-11-28"',
      note: "Authenticates as the token owner; the same header works for authenticated writes.",
    },
    howToUse: [
      "Sign in to GitHub and create a personal access token in Settings > Developer settings.",
      "Give the token the scopes your app needs (e.g. repo for private repositories).",
      "Set the Authorization: Bearer YOUR_GITHUB_TOKEN header on every request.",
      "Include the X-GitHub-Api-Version header to pin the API version.",
      "GET /user to confirm the token works and returns your profile JSON.",
      "Respect the x-ratelimit-remaining and x-ratelimit-reset response headers.",
    ],
    alternatives: ["spotify", "reddit", "youtube-data"],
    tags: ["github", "repositories", "git", "developer-tools", "users"],
    sources: [
      "https://docs.github.com/en/rest",
      "https://docs.github.com/en/rest/overview/resources-in-the-rest-api",
    ],
    sponsored: false,
  },
  {
    name: "Spotify Web API",
    slug: "spotify",
    category: "social",
    shortDescription:
      "Search Spotify's catalog and manage playlists, library and playback for users via OAuth.",
    longDescription:
      "The Spotify Web API at api.spotify.com lets apps search artists, albums and tracks, fetch content metadata, create and manage playlists, and control playback. Every call uses an OAuth 2.0 access token obtained after a user authorizes the app. It is free to use under rate limits, and a Spotify account is required to register an application in the developer dashboard.",
    officialDocsUrl: "https://developer.spotify.com/documentation/web-api",
    homepageUrl: "https://developer.spotify.com/documentation/web-api",
    pricing: "free",
    pricingNotes:
      "Free to use subject to rate limits; register an app in the Spotify developer dashboard and comply with the Developer Terms.",
    auth: "oauth",
    sdkLanguages: ["JavaScript"],
    sampleEndpoints: [
      {
        method: "GET",
        path: "/v1/search",
        description: "Search for tracks, artists, albums and playlists.",
      },
      {
        method: "GET",
        path: "/v1/artists/{id}",
        description: "Get metadata for a single artist.",
      },
      {
        method: "GET",
        path: "/v1/albums/{id}",
        description: "Get metadata and track list for an album.",
      },
      {
        method: "GET",
        path: "/v1/me/playlists",
        description: "List the playlists owned by the authenticated user.",
      },
    ],
    codeExample: {
      language: "curl",
      code: 'curl "https://api.spotify.com/v1/search?q=hello&type=track&limit=5" \\\n  -H "Authorization: Bearer YOUR_SPOTIFY_ACCESS_TOKEN"',
      note: "Pass an OAuth access token; track results come back in the tracks.items array.",
    },
    howToUse: [
      "Log in to the Spotify developer dashboard with a Spotify account and create an app.",
      "Copy the client ID and client secret and configure a redirect URI.",
      "Run the Authorization Code flow to obtain a user access token.",
      "Set the Authorization: Bearer YOUR_SPOTIFY_ACCESS_TOKEN header on requests.",
      "Call GET /v1/search with q and type to test catalog access.",
      "Request additional scopes (e.g. playlist-modify) to read or write user playlists.",
    ],
    alternatives: ["youtube-data", "github", "reddit"],
    tags: ["music", "playlists", "search", "oauth", "streaming"],
    sources: [
      "https://developer.spotify.com/documentation/web-api",
    ],
    sponsored: false,
  },
  {
    name: "Reddit API",
    slug: "reddit",
    category: "social",
    shortDescription:
      "Read subreddits, posts and user data, and interact with Reddit through the OAuth API.",
    longDescription:
      "Reddit's API at oauth.reddit.com exposes subreddits, posts (links), comments and user data as JSON. Developers register an OAuth app, obtain a bearer token, and send a descriptive User-Agent with every request. It is free to use under Reddit's rate limits and developer terms, and supports both script-style and installed-app authorization flows.",
    officialDocsUrl: "https://www.reddit.com/dev/api/",
    homepageUrl: "https://www.reddit.com/dev/api/",
    pricing: "free",
    pricingNotes:
      "Free to use under Reddit's API terms and rate limits; register an app to get OAuth credentials.",
    auth: "oauth",
    sdkLanguages: [],
    sampleEndpoints: [
      {
        method: "GET",
        path: "/api/v1/me",
        description: "Return the identity of the authenticated user.",
      },
      {
        method: "GET",
        path: "/r/{subreddit}/hot",
        description: "List hot posts in a subreddit.",
      },
      {
        method: "GET",
        path: "/user/{username}/about",
        description: "Get karma and profile information for a user.",
      },
      {
        method: "GET",
        path: "/subreddits/search",
        description: "Search for subreddits by name.",
      },
    ],
    codeExample: {
      language: "curl",
      code: 'curl "https://oauth.reddit.com/r/popular/hot?limit=5" \\\n  -H "Authorization: Bearer YOUR_REDDIT_ACCESS_TOKEN" \\\n  -H "User-Agent: YOUR_APP_NAME/0.1 by YOUR_REDDIT_USERNAME"',
      note: "A descriptive User-Agent is required; use raw_json=1 to avoid HTML-escaped entities.",
    },
    howToUse: [
      "Sign in to Reddit and create an app under your account's app preferences.",
      "Copy the client ID and secret for your script or web app.",
      "Exchange credentials for an OAuth bearer token via the appropriate flow.",
      "Set Authorization: Bearer YOUR_REDDIT_ACCESS_TOKEN on every request.",
      "Send a descriptive User-Agent header naming your app and username.",
      "GET /api/v1/me to confirm the token works, then read /r/{subreddit}/hot.",
    ],
    alternatives: ["youtube-data", "spotify", "github"],
    tags: ["reddit", "subreddit", "community", "social", "oauth"],
    sources: [
      "https://www.reddit.com/dev/api/",
    ],
    sponsored: false,
  },
  {
    name: "YouTube Data API",
    slug: "youtube-data",
    category: "social",
    shortDescription:
      "Search videos, channels and playlists, and read video statistics through the YouTube Data API v3.",
    longDescription:
      "The YouTube Data API v3 at www.googleapis.com/youtube/v3 lets applications search videos, retrieve channel and playlist metadata, and read statistics such as view and comment counts. Public read requests authenticate with a simple API key, while write operations use OAuth 2.0. A daily quota (commonly 10,000 units) governs usage, and the required part parameter keeps responses lean.",
    officialDocsUrl: "https://developers.google.com/youtube/v3",
    homepageUrl: "https://developers.google.com/youtube/v3",
    pricing: "free",
    pricingNotes:
      "Free default quota of 10,000 units/day (a search costs 100 units); request a quota extension for higher volume.",
    auth: "api-key",
    sdkLanguages: ["Python", "JavaScript", "Node.js", "PHP", "Java"],
    sampleEndpoints: [
      {
        method: "GET",
        path: "/youtube/v3/videos",
        description: "Return video metadata and statistics by video id.",
      },
      {
        method: "GET",
        path: "/youtube/v3/search",
        description: "Search for videos, channels and playlists.",
      },
      {
        method: "GET",
        path: "/youtube/v3/channels",
        description: "Return channel metadata and statistics by channel id.",
      },
    ],
    codeExample: {
      language: "curl",
      code: 'curl "https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=7lCDEYXw3mM&key=YOUR_YOUTUBE_API_KEY"',
      note: "The API key is passed as the key query parameter; results are in items[].",
    },
    howToUse: [
      "Create a project in the Google Cloud Console and enable the YouTube Data API v3.",
      "Create an API key under Credentials and restrict it to your app.",
      "Append ?key=YOUR_YOUTUBE_API_KEY to your requests.",
      "Set the mandatory part parameter to the properties you need, e.g. snippet,statistics.",
      "Call GET /youtube/v3/videos with an id to confirm JSON items are returned.",
      "Monitor quota in the Cloud Console; use OAuth 2.0 for write operations.",
    ],
    alternatives: ["spotify", "reddit", "github"],
    tags: ["youtube", "video", "search", "channels", "statistics"],
    sources: [
      "https://developers.google.com/youtube/v3/getting-started",
    ],
    sponsored: false,
  },
];
