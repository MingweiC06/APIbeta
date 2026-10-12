import type { ApiEntry } from "@/lib/types";

export const mediaApis: ApiEntry[] = [
  {
    name: "Unsplash",
    slug: "unsplash",
    category: "images-media",
    shortDescription:
      "Free-to-use, high-quality stock photos delivered through a simple search API.",
    longDescription:
      "Unsplash offers millions of high-quality, freely usable photographs through a straightforward REST API. Developers can search photos by keyword, fetch single photos by ID and pull random curated images. The API is free for registered applications under Unsplash's attribution and usage guidelines, which makes it a popular choice for demo apps and editorial sites.",
    officialDocsUrl: "https://unsplash.com/documentation",
    homepageUrl: "https://unsplash.com",
    pricing: "free",
    pricingNotes: "Free for registered applications; attribution to the photographer is required.",
    auth: "api-key",
    sdkLanguages: ["JavaScript", "Python", "Ruby", "Swift", "Kotlin"],
    sampleEndpoints: [
      {
        method: "GET",
        path: "/search/photos",
        description: "Search photos by keyword query.",
      },
      {
        method: "GET",
        path: "/photos/{id}",
        description: "Fetch a single photo by its ID.",
      },
      {
        method: "GET",
        path: "/photos/random",
        description: "Get a random photo (optionally filtered by query).",
      },
    ],
    codeExample: {
      language: "curl",
      code: 'curl "https://api.unsplash.com/search/photos?query=mountains&per_page=3" \\\n  -H "Authorization: Client-ID YOUR_ACCESS_KEY"',
      note: "Searches Unsplash for photos matching 'mountains'.",
    },
    howToUse: [
      "Create an Unsplash developer account and register an application.",
      "Copy your Access Key from the application dashboard.",
      "Replace YOUR_ACCESS_KEY in the example above with your key.",
      "Run the request and confirm the JSON contains a 'results' array of photos.",
      "Follow the attribution guidelines when displaying photos in your product.",
    ],
    alternatives: ["pexels", "giphy", "flickr"],
    tags: ["photos", "stock-images", "images", "search"],
    sources: [
      "https://unsplash.com/documentation",
      "https://unsplash.com/documentation#guidelines",
    ],
    featured: true,
  },
  {
    name: "Pexels",
    slug: "pexels",
    category: "images-media",
    shortDescription:
      "Free stock photos and videos with a generous monthly quota, via a simple REST search API.",
    longDescription:
      "Pexels provides millions of freely usable stock photos and videos through a clean REST API. Developers can search photos and videos by keyword, fetch curated and trending content and retrieve individual media by ID. It is free for registered applications that follow the attribution guidelines, which makes it a popular companion to Unsplash for editorial and demo apps.",
    officialDocsUrl: "https://www.pexels.com/api/documentation/",
    homepageUrl: "https://www.pexels.com/api/",
    pricing: "free",
    pricingNotes:
      "Free for registered apps; rate-limited to 200 requests/hour and 20,000 requests/month (higher limits available on request).",
    auth: "api-key",
    sdkLanguages: ["JavaScript", "Ruby", ".NET"],
    sampleEndpoints: [
      {
        method: "GET",
        path: "/v1/search",
        description: "Search stock photos by keyword query.",
      },
      {
        method: "GET",
        path: "/v1/videos/search",
        description: "Search stock videos by keyword query.",
      },
      {
        method: "GET",
        path: "/v1/photos/{id}",
        description: "Fetch a single photo by its ID.",
      },
      {
        method: "GET",
        path: "/v1/curated",
        description: "Get photos curated by the Pexels team.",
      },
    ],
    codeExample: {
      language: "curl",
      code: 'curl "https://api.pexels.com/v1/search?query=nature&per_page=3" \\\n  -H "Authorization: YOUR_API_KEY"',
      note: "Searches Pexels for photos matching 'nature' (the key is sent raw, no Bearer prefix).",
    },
    howToUse: [
      "Create a free Pexels account and request an API key from the API section.",
      "Copy the key, which is issued instantly.",
      "Send it as the raw key in an Authorization header (no 'Bearer' prefix).",
      "Call /v1/search and confirm the JSON contains a 'photos' array.",
      "Show a Pexels credit and link to the photographer as required by the guidelines.",
      "Track the X-Ratelimit-Remaining / X-Ratelimit-Reset headers to stay within quota.",
    ],
    alternatives: ["unsplash", "flickr", "cloudinary"],
    tags: ["photos", "videos", "stock-images", "search", "free-media"],
    sources: [
      "https://www.pexels.com/api/documentation/",
      "https://www.pexels.com/api/",
    ],
  },
  {
    name: "GIPHY",
    slug: "giphy",
    category: "images-media",
    shortDescription:
      "The largest GIF and sticker library, searchable through a free JSON API.",
    longDescription:
      "GIPHY exposes its massive library of GIFs, stickers and animated content through a simple JSON API. Developers get search, trending, translate, random and get-by-id endpoints to embed reaction GIFs in apps and chat. Keys are free for registered apps, with rate-limited test keys issued instantly and production keys granted on application.",
    officialDocsUrl: "https://developers.giphy.com/docs/api/",
    homepageUrl: "https://developers.giphy.com/",
    pricing: "free",
    pricingNotes:
      "Free API key for registered apps; rate-limited keys issued instantly, production keys available on application.",
    auth: "api-key",
    sdkLanguages: ["JavaScript", "iOS", "Android"],
    sampleEndpoints: [
      {
        method: "GET",
        path: "/v1/gifs/search",
        description: "Search GIFs by a word or phrase.",
      },
      {
        method: "GET",
        path: "/v1/gifs/trending",
        description: "Get the currently trending GIFs.",
      },
      {
        method: "GET",
        path: "/v1/gifs/{gif_id}",
        description: "Fetch a single GIF's metadata by ID.",
      },
      {
        method: "GET",
        path: "/v1/stickers/search",
        description: "Search animated stickers.",
      },
    ],
    codeExample: {
      language: "curl",
      code: 'curl "https://api.giphy.com/v1/gifs/search?q=cheeseburgers&limit=5&api_key=YOUR_API_KEY"',
      note: "Searches GIPHY for GIFs matching 'cheeseburgers'.",
    },
    howToUse: [
      "Sign up at developers.giphy.com and create an app to get an API key.",
      "Copy the key (test keys are rate-limited but issued instantly).",
      "Append api_key=YOUR_API_KEY to any /v1/gifs call.",
      "Call /v1/gifs/search and read the 'data' array of GIF objects.",
      "Use the returned image/rendition URLs to display the GIF.",
      "Apply for a production key once your app is approved for higher limits.",
    ],
    alternatives: ["unsplash", "pexels", "flickr"],
    tags: ["gifs", "stickers", "animation", "search", "messaging"],
    sources: [
      "https://developers.giphy.com/docs/api/",
      "https://developers.giphy.com/",
    ],
  },
  {
    name: "Cloudinary",
    slug: "cloudinary",
    category: "images-media",
    shortDescription:
      "Upload, transform and optimize images and videos at scale through a media management API.",
    longDescription:
      "Cloudinary is a programmable media platform for uploading, transforming, optimizing and delivering images and videos through a CDN. Its Upload and Admin REST APIs let developers manage assets server-side, while transformation URLs resize, crop, compress and reformat media on the fly. A free forever developer plan with monthly credits makes it easy to start.",
    officialDocsUrl: "https://cloudinary.com/documentation/image_upload_api_reference",
    homepageUrl: "https://cloudinary.com",
    pricing: "freemium",
    pricingNotes:
      "Free plan: $0 forever with 25 monthly credits (1 credit = 1,000 transformations, 1 GB storage or 1 GB bandwidth); paid plans start at $99/month.",
    auth: "api-key",
    sdkLanguages: ["JavaScript", "Node.js", "Python", "PHP", "Go", "React", "Vue", "Angular", "Flutter"],
    sampleEndpoints: [
      {
        method: "POST",
        path: "/v1_1/{cloud_name}/image/upload",
        description: "Upload or overwrite an image asset.",
      },
      {
        method: "POST",
        path: "/v1_1/{cloud_name}/video/upload",
        description: "Upload a video (or audio) asset.",
      },
      {
        method: "GET",
        path: "/resources/image",
        description: "Admin API: list uploaded image assets.",
      },
    ],
    codeExample: {
      language: "curl",
      code: 'curl https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload \\\n  -X POST \\\n  -u "YOUR_API_KEY:YOUR_API_SECRET" \\\n  -F "file=https://www.example.com/sample.jpg"',
      note: "Uploads a remote image using HTTP Basic Auth with your API key and secret.",
    },
    howToUse: [
      "Sign up at cloudinary.com and copy your Cloud name, API key and API secret from the console.",
      "Use HTTP Basic Auth with your API key and secret for server-side uploads.",
      "POST a local file or remote URL to /v1_1/<cloud_name>/image/upload.",
      "Read back the secure_url and public_id from the JSON response.",
      "Deliver transformed media by adding transformation parameters to the delivery URL.",
      "Monitor credit usage in the dashboard; the free plan includes 25 credits/month.",
    ],
    alternatives: ["unsplash", "pexels", "flickr"],
    tags: ["image-processing", "video", "cdn", "upload", "optimization"],
    sources: [
      "https://cloudinary.com/documentation/image_upload_api_reference",
      "https://cloudinary.com/pricing",
      "https://cloudinary.com/documentation/cloudinary_references",
    ],
  },
  {
    name: "Flickr",
    slug: "flickr",
    category: "images-media",
    shortDescription:
      "A long-running community photo library accessible through a method-based REST API.",
    longDescription:
      "Flickr hosts one of the largest public libraries of community photographs, exposed through a REST API organized around named methods. Public, read-only calls such as searching photos only need an API key; OAuth is required for user-authenticated or write actions. It is free to use for read access and is a classic source of community-licensed imagery.",
    officialDocsUrl: "https://www.flickr.com/services/api/",
    homepageUrl: "https://www.flickr.com/services/api/",
    pricing: "free",
    pricingNotes:
      "Free read access with an API key; user-authenticated write actions use OAuth. No separate paid public API tier is listed.",
    auth: "api-key",
    sdkLanguages: [],
    sampleEndpoints: [
      {
        method: "GET",
        path: "/services/rest/?method=flickr.photos.search",
        description: "Search public photos by text, tags or location.",
      },
      {
        method: "GET",
        path: "/services/rest/?method=flickr.photos.getInfo",
        description: "Get metadata for a single photo.",
      },
      {
        method: "GET",
        path: "/services/rest/?method=flickr.test.echo",
        description: "Test connectivity and echo back parameters.",
      },
    ],
    codeExample: {
      language: "curl",
      code: 'curl "https://api.flickr.com/services/rest/?method=flickr.photos.search&text=ocean&per_page=5&format=json&nojsoncallback=1&api_key=YOUR_API_KEY"',
      note: "Searches public photos; nojsoncallback=1 returns raw JSON instead of a JSONP wrapper.",
    },
    howToUse: [
      "Create a Yahoo/Flickr account and apply for an API key in the App Garden.",
      "Copy the key from your API apps dashboard.",
      "Call the REST endpoint with method=flickr.photos.search and your api_key.",
      "Add format=json&nojsoncallback=1 to receive clean JSON.",
      "Read the photos.photo array and build image URLs from farm, server, id and secret.",
      "Use OAuth only when you need user-authenticated or write operations.",
    ],
    alternatives: ["unsplash", "pexels", "cloudinary"],
    tags: ["photos", "community", "stock-images", "search"],
    sources: [
      "https://www.flickr.com/services/api/",
      "https://www.flickr.com/services/api/flickr.photos.search.html",
    ],
  },
];
