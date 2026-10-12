import type { ApiEntry } from "@/lib/types";

export const mapsApis: ApiEntry[] = [
  {
    name: "Google Maps Platform",
    slug: "google-maps-platform",
    category: "maps-geo",
    shortDescription:
      "Full-stack maps, geocoding, routes and places REST APIs powering billions of map views.",
    longDescription:
      "Google Maps Platform is the broadest location stack: embeddable and dynamic maps, forward/reverse geocoding, places search, routing, distance matrix and elevation, all behind a single API key. Responses are returned as JSON or XML and integrate with Google's client libraries. Billing is pay-as-you-go per call, with monthly free usage caps that keep small projects effectively free.",
    officialDocsUrl:
      "https://developers.google.com/maps/documentation/geocoding/overview",
    homepageUrl: "https://mapsplatform.google.com",
    pricing: "freemium",
    pricingNotes:
      "Pay-as-you-go per call; each SKU carries a monthly free usage cap (the long-running ~$200/month credit program), so low-volume projects stay free and paid tiers scale with volume.",
    auth: "api-key",
    sdkLanguages: ["Java", "Python", "Go", "Node.js"],
    sampleEndpoints: [
      {
        method: "GET",
        path: "/maps/api/geocode/json",
        description: "Forward geocoding: convert an address to lat/lng and a Place ID.",
      },
      {
        method: "GET",
        path: "/maps/api/geocode/json",
        description: "Reverse geocoding: convert lat/lng coordinates to a readable address.",
      },
    ],
    codeExample: {
      language: "curl",
      code: 'curl "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY"',
      note: "Returns the coordinates for the given address as JSON; restrict your key in the Cloud Console.",
    },
    howToUse: [
      "Create a Google Cloud project and open Google Maps Platform.",
      "Enable the Geocoding API (and any other products you need) for the project.",
      "Create an API key and restrict it by API and IP/referrer in the Credentials console.",
      "Append key=YOUR_API_KEY to a request against maps.googleapis.com.",
      "Parse the results array; status must be 'OK' before using the geometry.location.",
      "Set a billing account to unlock the monthly free usage credit and avoid call blocks.",
    ],
    alternatives: ["mapbox", "nominatim", "here"],
    tags: ["maps", "geocoding", "places", "routing", "reverse-geocoding"],
    sources: [
      "https://developers.google.com/maps/documentation/geocoding/overview",
      "https://developers.google.com/maps/billing-and-pricing/pricing",
    ],
    sponsored: false,
  },
  {
    name: "Mapbox",
    slug: "mapbox",
    category: "maps-geo",
    shortDescription:
      "Custom-styled interactive maps plus forward and reverse geocoding via a vector-tile and search API.",
    longDescription:
      "Mapbox provides embeddable maps and a Geocoding API that turns addresses into coordinates and back, with structured and free-form input, autocomplete and language control. Results come back as GeoJSON, making it a natural fit for web and mobile map experiences. It bills per request on pay-as-you-go pricing with a generous monthly free allowance.",
    officialDocsUrl: "https://docs.mapbox.com/api/search/geocoding/",
    homepageUrl: "https://www.mapbox.com",
    pricing: "freemium",
    pricingNotes:
      "Pay-as-you-go; the Temporary Geocoding API is free up to 100,000 requests/month, then billed per 1,000 requests. Other products carry their own free monthly caps.",
    auth: "api-key",
    sdkLanguages: ["JavaScript", "iOS", "Android"],
    sampleEndpoints: [
      {
        method: "GET",
        path: "/search/geocode/v6/forward",
        description: "Forward geocoding: place text into coordinates (v6).",
      },
      {
        method: "GET",
        path: "/search/geocode/v6/reverse",
        description: "Reverse geocoding: coordinates into a place and address (v6).",
      },
    ],
    codeExample: {
      language: "curl",
      code: 'curl "https://api.mapbox.com/search/geocode/v6/forward?q=Berlin&limit=1&access_token=YOUR_MAPBOX_ACCESS_TOKEN"',
      note: "Returns GeoJSON features for 'Berlin'; the access_token is passed as a query parameter.",
    },
    howToUse: [
      "Sign up at mapbox.com and copy your access token from the account dashboard.",
      "Call /search/geocode/v6/forward with a q= query and your access_token.",
      "For structured addresses, send address_number, street, place and country instead of q.",
      "Use /search/geocode/v6/reverse with longitude and latitude for lookups.",
      "Read the GeoJSON 'features' array and take geometry.coordinates.",
      "Add &permanent=true only if you intend to store results long-term.",
    ],
    alternatives: ["google-maps-platform", "nominatim", "here"],
    tags: ["maps", "geocoding", "geojson", "search", "reverse-geocoding"],
    sources: [
      "https://docs.mapbox.com/api/search/geocoding/",
      "https://www.mapbox.com/pricing",
    ],
    sponsored: false,
  },
  {
    name: "Nominatim",
    slug: "nominatim",
    category: "maps-geo",
    shortDescription:
      "Free OpenStreetMap-based forward and reverse geocoding; no key but a strict no-heavy-use policy.",
    longDescription:
      "Nominatim is the geocoding service of OpenStreetMap, converting free-form or structured addresses into coordinates and vice versa. The public server is free to use without an API key, but it runs a usage policy: about one request per second, a meaningful HTTP Referer or identifying email, no bulk downloads, and ODbL attribution to OpenStreetMap. It is ideal for low-traffic apps and prototyping, or for self-hosting on your own infrastructure.",
    officialDocsUrl: "https://nominatim.org/release-docs/latest/api/Search/",
    homepageUrl: "https://nominatim.org",
    pricing: "free",
    pricingNotes:
      "Free on the public server under the ODbL usage policy: ~1 request/second, identify your app with a valid HTTP Referer or email= parameter, and do not run heavy or bulk automated use.",
    auth: "none",
    sdkLanguages: [],
    sampleEndpoints: [
      {
        method: "GET",
        path: "/search",
        description: "Forward geocoding: resolve an address or place name to coordinates.",
      },
      {
        method: "GET",
        path: "/reverse",
        description: "Reverse geocoding: resolve coordinates to an address.",
      },
    ],
    codeExample: {
      language: "curl",
      code: 'curl "https://nominatim.openstreetmap.org/search?q=135+pilkington+avenue,+birmingham&format=jsonv2&addressdetails=1&limit=1" -H "User-Agent: YOUR_APP_NAME/1.0"',
      note: "Returns JSONv2 results; identify your app with a User-Agent or email per the usage policy.",
    },
    howToUse: [
      "Read the usage policy at nominatim.org to confirm your use is allowed.",
      "Set a descriptive HTTP User-Agent (or pass an email= parameter) identifying your app.",
      "Call /search with q= and format=jsonv2 to geocode an address.",
      "Use /reverse?lat=..&lon=.. to look up an address from coordinates.",
      "Keep to roughly one request per second and avoid bulk downloading.",
      "Attribute OpenStreetMap contributors (ODbL) when you display the results.",
    ],
    alternatives: ["google-maps-platform", "mapbox", "here"],
    tags: ["geocoding", "openstreetmap", "free", "reverse-geocoding"],
    sources: [
      "https://nominatim.org/release-docs/latest/api/Search/",
      "https://nominatim.org/",
    ],
    sponsored: false,
  },
  {
    name: "HERE Location Services",
    slug: "here",
    category: "maps-geo",
    shortDescription:
      "Global maps, geocoding, reverse geocoding, routing and search APIs with a free developer tier.",
    longDescription:
      "HERE Location Services provides production-grade mapping, geocoding & search, routing, traffic and positioning APIs used widely in automotive and logistics. The Geocoding & Search API resolves addresses to coordinates and back across the world, authenticated with a single apiKey. Developers can start on a free tier and scale with pay-as-you-grow pricing, with native HERE SDKs for mobile and JavaScript.",
    officialDocsUrl: "https://www.here.com/docs/brief/geocoding-api-api-overview",
    homepageUrl: "https://www.here.com",
    pricing: "freemium",
    pricingNotes:
      "Free developer tier with pay-as-you-grow pricing; sign up in the HERE Platform/developer portal and authenticate every call with an apiKey.",
    auth: "api-key",
    sdkLanguages: ["JavaScript", "Android", "iOS"],
    sampleEndpoints: [
      {
        method: "GET",
        path: "/v1/geocode",
        description: "Forward geocoding on geocoder.search.hereapi.com.",
      },
      {
        method: "GET",
        path: "/v1/revgeocode",
        description: "Reverse geocoding on revgeocode.search.hereapi.com.",
      },
    ],
    codeExample: {
      language: "curl",
      code: 'curl "https://geocoder.search.hereapi.com/v1/geocode?q=Berlin&apiKey=YOUR_API_KEY"',
      note: "Returns geocoded locations as JSON; the key is passed as the apiKey query parameter.",
    },
    howToUse: [
      "Create a free account at developer.here.com / the HERE Platform.",
      "Create a project and generate an API key (apiKey) from the developer portal.",
      "Call /v1/geocode with q= and your apiKey to resolve an address.",
      "Use /v1/revgeocode with at=lat,lng for reverse lookups.",
      "Read the items array; each result has a position.lat/lng and address.",
      "Monitor quota and upgrade to pay-as-you-grow as your usage grows.",
    ],
    alternatives: ["google-maps-platform", "mapbox", "nominatim"],
    tags: ["maps", "geocoding", "routing", "search", "reverse-geocoding"],
    sources: [
      "https://www.here.com/docs/brief/geocoding-api-api-overview",
      "https://www.here.com/get-started",
    ],
    sponsored: false,
  },
];
