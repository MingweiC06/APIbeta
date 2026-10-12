import type { ApiEntry } from "@/lib/types";

export const weatherApis: ApiEntry[] = [
  {
    name: "OpenWeatherMap",
    slug: "openweathermap",
    category: "weather",
    shortDescription:
      "Current weather, forecasts and historical data for any location on Earth.",
    longDescription:
      "OpenWeatherMap is one of the most widely used weather APIs, serving current conditions, 5-day forecasts, hourly forecasts and historical weather for any city or set of coordinates. It also provides geocoding endpoints to turn place names into coordinates. A generous free tier makes it a common starting point for hobby and production apps alike.",
    officialDocsUrl: "https://openweathermap.org/current",
    homepageUrl: "https://openweathermap.org",
    pricing: "freemium",
    pricingNotes: "Free plan: about 60 API calls/minute; paid subscriptions raise per-minute and per-month limits and unlock historical and long-forecast data.",
    auth: "api-key",
    sdkLanguages: ["JavaScript", "Python", "Java", "Go", "PHP", "Ruby", ".NET"],
    sampleEndpoints: [
      {
        method: "GET",
        path: "/data/2.5/weather",
        description: "Current weather for a city name or coordinates.",
      },
      {
        method: "GET",
        path: "/data/2.5/forecast",
        description: "5-day / 3-hour weather forecast.",
      },
      {
        method: "GET",
        path: "/geo/1.0/direct",
        description: "Geocoding: resolve a city name to latitude/longitude.",
      },
    ],
    codeExample: {
      language: "curl",
      code: 'curl "https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=YOUR_API_KEY"',
      note: "Returns current weather for London as JSON (temperature in Celsius).",
    },
    howToUse: [
      "Create a free account at openweathermap.org and confirm your email.",
      "Open the API keys tab in your account dashboard and copy your default API key.",
      "Replace YOUR_API_KEY in the example above with your key.",
      "Run the request and confirm you receive JSON with a 'weather' array and 'main' object.",
      "Handle errors and rate limits: the free plan allows about 60 calls/minute (a 429 is returned past the limit).",
      "For production, register for a paid plan that fits your call volume.",
    ],
    alternatives: ["open-meteo", "weatherapi", "tomorrow-io"],
    tags: ["weather", "forecast", "geocoding", "historical-data", "current-conditions"],
    sources: [
      "https://openweathermap.org/current",
      "https://openweathermap.org/api",
      "https://openweathermap.org/price",
    ],
    featured: true,
  },
  {
    name: "Open-Meteo",
    slug: "open-meteo",
    category: "weather",
    shortDescription:
      "Free, open-source weather forecast, historical and geocoding API that needs no API key for non-commercial use.",
    longDescription:
      "Open-Meteo combines high-resolution numerical weather models from national services such as DWD, NOAA and ECMWF into a fast JSON forecast API. It serves up to 16 days of hourly/daily forecasts, current conditions, ERA5 historical data back to 1940 and a place-name geocoder. No API key is required for non-commercial use under a daily call cap, which makes it popular for prototypes and research.",
    officialDocsUrl: "https://open-meteo.com/en/docs",
    homepageUrl: "https://open-meteo.com",
    pricing: "free",
    pricingNotes:
      "Free for non-commercial use up to 10,000 API calls/day with no API key; commercial use requires a license and an apikey on a customer-*.open-meteo.com endpoint.",
    auth: "none",
    sdkLanguages: ["Python", "TypeScript", "Swift"],
    sampleEndpoints: [
      {
        method: "GET",
        path: "/v1/forecast",
        description: "Hourly/daily up-to-16-day forecast and current conditions (api.open-meteo.com).",
      },
      {
        method: "GET",
        path: "/v1/archive",
        description: "Historical ERA5 reanalysis data back to 1940 (archive-api.open-meteo.com).",
      },
      {
        method: "GET",
        path: "/v1/search",
        description: "Geocoding: resolve a place name to coordinates (geocoding-api.open-meteo.com).",
      },
    ],
    codeExample: {
      language: "curl",
      code: 'curl "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m&hourly=temperature_2m&forecast_days=3"',
      note: "Returns current + hourly forecast for Berlin as JSON; no key needed for non-commercial use.",
    },
    howToUse: [
      "Open open-meteo.com/en/docs and configure location, hourly/daily variables and current weather in the playground.",
      "Copy the generated API URL (it already contains latitude, longitude and the selected variables).",
      "Call it directly from your app - no sign-up or API key is required for non-commercial use.",
      "Parse the JSON 'hourly' / 'daily' / 'current' objects returned for your coordinates.",
      "Add &timezone=auto so timestamps render in the location's local time.",
      "For commercial use or higher volume, obtain an apikey and use the customer-*.open-meteo.com host.",
    ],
    alternatives: ["openweathermap", "weatherapi", "tomorrow-io"],
    tags: ["weather", "forecast", "historical-data", "geocoding", "no-api-key"],
    sources: [
      "https://open-meteo.com/en/docs",
      "https://open-meteo.com/en/docs/historical-weather-api",
      "https://open-meteo.com/en/docs/geocoding-api",
    ],
    sponsored: false,
  },
  {
    name: "WeatherAPI.com",
    slug: "weatherapi",
    category: "weather",
    shortDescription:
      "Current weather, forecasts, history, marine and air-quality JSON API with a free starter tier.",
    longDescription:
      "WeatherAPI.com exposes real-time conditions, up-to-14-day forecasts, historical weather, marine/tide data, astronomy, air quality and an IP geolocation lookup through a simple REST JSON/XML API. It accepts city names, lat/lon, zips, postcodes or METAR/IATA codes as the q parameter. A free tier and low-cost paid plans make it an easy drop-in weather backend.",
    officialDocsUrl: "https://www.weatherapi.com/docs/",
    homepageUrl: "https://www.weatherapi.com",
    pricing: "freemium",
    pricingNotes:
      "Free plan: $0/month, 100,000 calls/month, 3-day forecast and 1 day of history (link-back appreciated); paid plans start at $7/month for 3 million calls.",
    auth: "api-key",
    sdkLanguages: [],
    sampleEndpoints: [
      {
        method: "GET",
        path: "/v1/current.json",
        description: "Real-time current weather for a location query.",
      },
      {
        method: "GET",
        path: "/v1/forecast.json",
        description: "Multi-day forecast (up to 14 days depending on plan).",
      },
      {
        method: "GET",
        path: "/v1/search.json",
        description: "City search / autocomplete returning matching locations.",
      },
    ],
    codeExample: {
      language: "curl",
      code: 'curl "https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=London&aqi=no"',
      note: "Returns current weather for London as JSON; the key is passed as the key= query parameter.",
    },
    howToUse: [
      "Sign up at weatherapi.com and copy your API key from the dashboard.",
      "Append key=YOUR_API_KEY and a q= location (city, lat,lon, zip or postcode) to any v1 endpoint.",
      "Call /v1/current.json and confirm the JSON has 'location' and 'current' objects.",
      "Use /v1/forecast.json with &days=N for a multi-day forecast.",
      "Prefer /v1/search.json to resolve a user-typed place name to coordinates first.",
      "Stay under 100,000 calls/month on the free tier; upgrade if you need more calls or history.",
    ],
    alternatives: ["openweathermap", "open-meteo", "tomorrow-io"],
    tags: ["weather", "forecast", "historical-data", "air-quality", "geocoding"],
    sources: [
      "https://www.weatherapi.com/docs/",
      "https://www.weatherapi.com/pricing.aspx",
    ],
    sponsored: false,
  },
  {
    name: "Tomorrow.io",
    slug: "tomorrow-io",
    category: "weather",
    shortDescription:
      "Hyperlocal weather forecast, realtime and historical API with 60+ data layers and a free developer tier.",
    longDescription:
      "Tomorrow.io serves hyperlocal weather conditions and forecasts through a modern REST JSON API covering temperature, wind, precipitation, air quality, pollen, fire and other layers. Its current endpoints return minute-by-minute realtime data and up-to-5-day hourly forecasts on the free plan, with enterprise tiers extending the horizon and adding minutely resolution and maps. Keys are passed as the apikey query parameter.",
    officialDocsUrl: "https://docs.tomorrow.io/reference/weather-forecast",
    homepageUrl: "https://www.tomorrow.io/weather-api/",
    pricing: "freemium",
    pricingNotes:
      "Free developer tier: weather API access with a 5-day forecast, timelines/trendlines and 24 hours of historical data; enterprise plans add 14-day forecasts, minutely resolution and premium layers.",
    auth: "api-key",
    sdkLanguages: [],
    sampleEndpoints: [
      {
        method: "GET",
        path: "/v4/weather/forecast",
        description: "Hourly/daily forecast up to 5 days on the free plan.",
      },
      {
        method: "GET",
        path: "/v4/weather/realtime",
        description: "Current conditions at minute-level resolution.",
      },
    ],
    codeExample: {
      language: "curl",
      code: 'curl "https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&timesteps=1h&units=metric&apikey=YOUR_API_KEY"',
      note: "Returns hourly forecast for the given coordinates as JSON; the key is passed as apikey.",
    },
    howToUse: [
      "Sign up at tomorrow.io and copy your private API key from the developer dashboard.",
      "Set the location parameter (lat,lon, city name, US zip or UK postcode).",
      "Call /v4/weather/realtime for current conditions or /v4/weather/forecast for hourly/daily data.",
      "Append apikey=YOUR_API_KEY to the request and choose units=metric or imperial.",
      "Read the 'data.values' object for realtime fields or the 'timelines' arrays for forecast.",
      "Upgrade to enterprise for a longer forecast horizon, minutely data and premium layers.",
    ],
    alternatives: ["openweathermap", "open-meteo", "weatherapi"],
    tags: ["weather", "forecast", "realtime", "air-quality", "hyperlocal"],
    sources: [
      "https://docs.tomorrow.io/reference/weather-forecast",
      "https://docs.tomorrow.io/reference/realtime-weather",
      "https://www.tomorrow.io/weather-api/",
    ],
    sponsored: false,
  },
];
