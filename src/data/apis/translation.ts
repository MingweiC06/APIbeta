import type { ApiEntry } from "@/lib/types";

export const translationApis: ApiEntry[] = [
  {
    name: "Google Cloud Translation API",
    slug: "google-translate",
    category: "translation",
    shortDescription:
      "Neural machine translation and language detection at scale from Google Cloud, with a free monthly credit.",
    longDescription:
      "Google Cloud Translation translates text and documents between thousands of language pairs using Google's neural models, and also detects source language. The Basic (v2) API takes a simple API key, while the Advanced (v3) API offers AutoML custom models, glossaries and batch translation. It is pay-as-you-go, but the first 500,000 characters each month are free (applied as a credit) on both editions.",
    officialDocsUrl: "https://cloud.google.com/translate/docs",
    homepageUrl: "https://cloud.google.com/translate",
    pricing: "freemium",
    pricingNotes:
      "First 500,000 characters/month free (applied as a ~$10 monthly credit); then about $20 per million characters.",
    auth: "api-key",
    sdkLanguages: ["Python", "Node.js", "Java", "Go", "PHP", "Ruby", ".NET"],
    sampleEndpoints: [
      {
        method: "POST",
        path: "/v3/projects/{project}/locations/{location}:translateText",
        description: "Translate text with the Advanced (v3) API.",
      },
      {
        method: "POST",
        path: "/v3/projects/{project}/locations/{location}:detectLanguage",
        description: "Detect the language of input text.",
      },
      {
        method: "GET",
        path: "/language/translate/v2",
        description: "Translate text with the Basic (v2) API using an API key.",
      },
    ],
    codeExample: {
      language: "curl",
      code: 'curl "https://translation.googleapis.com/language/translate/v2?key=YOUR_GOOGLE_API_KEY&q=Hello%2C%20world&target=de"',
      note: "Basic v2 passes the key as a query parameter; the translation sits in data.translations[0].translatedText.",
    },
    howToUse: [
      "Create a project in the Google Cloud Console and enable the Cloud Translation API.",
      "Create an API key under Credentials (or use a service account for v3).",
      "Bill a Cloud Billing account; the first 500,000 characters/month stay free.",
      "Append ?key=YOUR_GOOGLE_API_KEY and q/target parameters to the v2 endpoint.",
      "Parse data.translations[0].translatedText from the JSON response.",
      "Switch to the v3 translateText method for glossaries or custom models.",
    ],
    alternatives: ["deepl", "microsoft-translator"],
    tags: ["translation", "machine-translation", "language-detection", "google", "localization"],
    sources: [
      "https://cloud.google.com/translate/docs",
      "https://cloud.google.com/translate/pricing",
    ],
    sponsored: false,
  },
  {
    name: "DeepL API",
    slug: "deepl",
    category: "translation",
    shortDescription:
      "High-quality neural text and document translation with a free tier and official SDKs in six languages.",
    longDescription:
      "The DeepL API gives programmatic access to DeepL's translation quality for text and documents (DOCX, PDF, PPTX and more), plus glossaries to keep terminology consistent. Free-plan calls go to api-free.deepl.com and paid plans to api.deepl.com, authenticated with a DeepL-Auth-Key header. Official client libraries are available for Python, JavaScript, PHP, .NET, Java and Ruby.",
    officialDocsUrl: "https://developers.deepl.com/docs/getting-started/your-first-api-request",
    homepageUrl: "https://www.deepl.com/pro-api",
    pricing: "freemium",
    pricingNotes:
      "DeepL API Free covers up to 500,000 characters/month; paid Pro plans raise the limit and add features.",
    auth: "api-key",
    sdkLanguages: ["Python", "JavaScript", "PHP", ".NET", "Java", "Ruby"],
    sampleEndpoints: [
      {
        method: "POST",
        path: "/v2/translate",
        description: "Translate one or more texts into a target language.",
      },
      {
        method: "GET",
        path: "/v2/languages",
        description: "List the languages supported by the API.",
      },
      {
        method: "POST",
        path: "/v2/document",
        description: "Upload and translate a document file.",
      },
    ],
    codeExample: {
      language: "curl",
      code: 'curl -X POST https://api-free.deepl.com/v2/translate \\\n  --header "Content-Type: application/json" \\\n  --header "Authorization: DeepL-Auth-Key YOUR_DEEPL_API_KEY" \\\n  --data \'{"text": ["Hello, world!"], "target_lang": "DE"}\'',
      note: "Free plan uses api-free.deepl.com; paid plans use api.deepl.com. Result is in translations[0].text.",
    },
    howToUse: [
      "Sign up for a DeepL API plan (Free or Pro) at deepl.com.",
      "Copy your API key from the account page (Free keys end in :fx).",
      "Use https://api-free.deepl.com on the free plan, or https://api.deepl.com on Pro.",
      "Set the Authorization: DeepL-Auth-Key YOUR_DEEPL_API_KEY header.",
      "POST JSON with a text array and target_lang to /v2/translate.",
      "Read translations[0].text, or use the official library for your language.",
    ],
    alternatives: ["google-translate", "microsoft-translator"],
    tags: ["translation", "machine-translation", "documents", "glossary", "localization"],
    sources: [
      "https://developers.deepl.com/docs/getting-started/your-first-api-request",
      "https://developers.deepl.com/docs/getting-started/about",
    ],
    sponsored: false,
  },
  {
    name: "Azure AI Translator",
    slug: "microsoft-translator",
    category: "translation",
    shortDescription:
      "Microsoft's cloud text translation, detection and dictionary API with a free tier of 2M chars/month.",
    longDescription:
      "Azure AI Translator (Microsoft Translator) is a REST service that translates text between many languages, detects language, transliterates and looks up bilingual dictionary terms. You create a Translator resource in Azure and authenticate with a subscription key and region headers. The free F0 tier allows 2 million characters per month, after which usage moves to pay-as-you-go.",
    officialDocsUrl: "https://learn.microsoft.com/azure/ai-services/translator/",
    homepageUrl: "https://learn.microsoft.com/azure/ai-services/translator/",
    pricing: "freemium",
    pricingNotes:
      "Free F0 tier: 2 million characters/month; then pay-as-you-go at roughly $10 per million characters.",
    auth: "api-key",
    sdkLanguages: [".NET", "Python", "Java", "JavaScript", "Go"],
    sampleEndpoints: [
      {
        method: "POST",
        path: "/translate",
        description: "Translate text into one or more target languages.",
      },
      {
        method: "POST",
        path: "/detect",
        description: "Detect the language of a piece of text.",
      },
      {
        method: "GET",
        path: "/languages",
        description: "List supported languages (no authentication required).",
      },
    ],
    codeExample: {
      language: "curl",
      code: 'curl -X POST "https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=fr" \\\n  -H "Ocp-Apim-Subscription-Key: YOUR_AZURE_TRANSLATOR_KEY" \\\n  -H "Ocp-Apim-Subscription-Region: your-region" \\\n  -H "Content-Type: application/json" \\\n  -d \'[{"Text":"Hello"}]\'',
      note: "Requires both the subscription key and region headers; results are returned in [0].translations[0].text.",
    },
    howToUse: [
      "Create a Translator resource in the Azure portal.",
      "Copy the key and region from the resource's Keys and Endpoint page.",
      "Call api.cognitive.microsofttranslator.com with api-version=3.0.",
      "Set the Ocp-Apim-Subscription-Key and Ocp-Apim-Subscription-Region headers.",
      "POST a JSON array of {Text} objects to /translate with a to query parameter.",
      "Read [0].translations[0].text; the F0 free tier covers 2M characters/month.",
    ],
    alternatives: ["google-translate", "deepl"],
    tags: ["translation", "machine-translation", "azure", "language-detection", "localization"],
    sources: [
      "https://learn.microsoft.com/en-us/azure/ai-services/translator/text-translation-overview",
      "https://azure.microsoft.com/en-us/pricing/details/cognitive-services/translator-text-api/",
    ],
    sponsored: false,
  },
];
