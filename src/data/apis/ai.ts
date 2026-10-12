import type { ApiEntry } from "@/lib/types";

export const aiApis: ApiEntry[] = [
  {
    name: "OpenAI",
    slug: "openai",
    category: "ai-ml",
    shortDescription:
      "GPT large language models, embeddings and image generation through one REST API.",
    longDescription:
      "OpenAI's platform gives programmatic access to GPT chat models, embeddings, image and audio models through a single REST API at api.openai.com. Developers authenticate with a secret key and pick a model for each task. Official SDKs across many languages and generous documentation make it a common default for LLM-powered features.",
    officialDocsUrl: "https://platform.openai.com/docs/api-reference",
    homepageUrl: "https://platform.openai.com",
    pricing: "paid",
    pricingNotes:
      "Pay-as-you-go billed per input/output token; no perpetual free tier (new accounts may receive limited trial credit).",
    auth: "api-key",
    sdkLanguages: ["JavaScript", "Python", ".NET", "Java", "Go", "Ruby"],
    sampleEndpoints: [
      {
        method: "POST",
        path: "/v1/chat/completions",
        description: "Create a model response for a chat conversation.",
      },
      {
        method: "GET",
        path: "/v1/models",
        description: "List the models available to your API key.",
      },
      {
        method: "POST",
        path: "/v1/embeddings",
        description: "Create an embedding vector representing input text.",
      },
    ],
    codeExample: {
      language: "curl",
      code: 'curl https://api.openai.com/v1/chat/completions \\\n  -H "Content-Type: application/json" \\\n  -H "Authorization: Bearer YOUR_OPENAI_API_KEY" \\\n  -d \'{\n    "model": "gpt-4o-mini",\n    "messages": [{"role": "user", "content": "Say this is a test"}]\n  }\'',
      note: "Creates a chat completion; the reply text is returned in choices[0].message.content.",
    },
    howToUse: [
      "Create an account at platform.openai.com and complete any required verification.",
      "Open API keys in the dashboard and create a new secret key (sk-...).",
      "Add billing to your account so requests are billed per token.",
      "Replace YOUR_OPENAI_API_KEY in the example above with your secret key.",
      "Run the request and confirm the JSON contains a 'choices' array with a message.",
      "Handle rate limits and spend limits returned in the response headers.",
    ],
    alternatives: ["anthropic", "gemini-api", "hugging-face", "stability-ai"],
    tags: ["llm", "chatgpt", "nlp", "embeddings", "generative-ai"],
    sources: [
      "https://platform.openai.com/docs/api-reference",
      "https://platform.openai.com/docs/libraries",
    ],
    featured: true,
  },
  {
    name: "Anthropic Claude",
    slug: "anthropic",
    category: "ai-ml",
    shortDescription:
      "Claude large language models for conversational AI, tool use and vision via a REST API.",
    longDescription:
      "The Anthropic Claude API is a RESTful service at api.anthropic.com that provides programmatic access to Claude models through the Messages API. It supports multi-turn conversations, vision, tool use, prompt caching and asynchronous message batches. Authentication uses an x-api-key header together with a required anthropic-version header, and official SDKs handle these automatically.",
    officialDocsUrl: "https://docs.anthropic.com/en/api/getting-started",
    homepageUrl: "https://www.anthropic.com/api",
    pricing: "paid",
    pricingNotes:
      "Pay-as-you-go per input/output token; automatic usage tiers raise rate and spend limits as you scale.",
    auth: "api-key",
    sdkLanguages: ["Python", "TypeScript", "Java", "Go", "C#", "Ruby", "PHP"],
    sampleEndpoints: [
      {
        method: "POST",
        path: "/v1/messages",
        description: "Send a conversational message to Claude and get a response.",
      },
      {
        method: "GET",
        path: "/v1/models",
        description: "List the Claude models available to your account.",
      },
      {
        method: "POST",
        path: "/v1/messages/count_tokens",
        description: "Count tokens in a message before sending to manage cost.",
      },
    ],
    codeExample: {
      language: "curl",
      code: 'curl https://api.anthropic.com/v1/messages \\\n  --header "x-api-key: YOUR_ANTHROPIC_API_KEY" \\\n  --header "anthropic-version: 2023-06-01" \\\n  --header "content-type: application/json" \\\n  --data \'{\n    "model": "claude-opus-4-6",\n    "max_tokens": 1024,\n    "messages": [{"role": "user", "content": "Hello, Claude"}]\n  }\'',
      note: "Requires both the x-api-key and anthropic-version headers on every request.",
    },
    howToUse: [
      "Sign in to the Anthropic Console and open Account Settings to create an API key.",
      "Add billing to your workspace so usage is billed per token.",
      "Set the x-api-key header to your key and anthropic-version to the current API version.",
      "POST to /v1/messages with a model name, max_tokens and a messages array.",
      "Parse the returned content array for Claude's text response.",
      "Use count_tokens or the batches API to control cost at higher volumes.",
    ],
    alternatives: ["openai", "gemini-api", "hugging-face"],
    tags: ["llm", "claude", "chat", "tool-use", "vision"],
    sources: ["https://docs.anthropic.com/en/api/getting-started"],
    featured: true,
  },
  {
    name: "Google Gemini API",
    slug: "gemini-api",
    category: "ai-ml",
    shortDescription:
      "Google's Gemini multimodal models for text, images and embeddings with a free tier.",
    longDescription:
      "The Gemini API lets developers call Google's multimodal Gemini models for text, image and audio understanding, plus embeddings, through the generativelanguage.googleapis.com REST endpoint. You create an API key in Google AI Studio and pass it as a query parameter or header. A no-billing free tier with rate limits makes it easy to prototype, while paid tiers raise limits.",
    officialDocsUrl: "https://ai.google.dev/gemini-api/docs/get-started/rest",
    homepageUrl: "https://ai.google.dev/gemini-api",
    pricing: "freemium",
    pricingNotes:
      "Free tier available through Google AI Studio with rate limits; the paid tier unlocks higher limits and paid billing.",
    auth: "api-key",
    sdkLanguages: ["Python", "JavaScript", "Node.js"],
    sampleEndpoints: [
      {
        method: "POST",
        path: "/v1beta/models/{model}:generateContent",
        description: "Generate a response from a text or multimodal prompt.",
      },
      {
        method: "GET",
        path: "/v1beta/models",
        description: "List the Gemini models available through the API.",
      },
      {
        method: "POST",
        path: "/v1beta/models/{model}:countTokens",
        description: "Count tokens for a prompt before generating.",
      },
    ],
    codeExample: {
      language: "curl",
      code: 'curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=YOUR_GOOGLE_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -X POST \\\n  -d \'{"contents": [{"parts": [{"text": "Write a short greeting."}]}]}\'',
      note: "The API key is passed as the key query parameter; the reply text sits in candidates[0].content.parts.",
    },
    howToUse: [
      "Open Google AI Studio and create an API key for a Google account.",
      "Set the key as the key query parameter (or x-goog-api-key header) on requests.",
      "Choose a model name and append :generateContent to its models path.",
      "Send a contents/parts JSON body with your prompt.",
      "Parse candidates[0].content.parts[0].text for the model output.",
      "Stay within the free-tier rate limits, or enable billing for higher volume.",
    ],
    alternatives: ["openai", "anthropic", "hugging-face"],
    tags: ["llm", "gemini", "multimodal", "embeddings", "google"],
    sources: ["https://ai.google.dev/gemini-api/docs/get-started/rest"],
  },
  {
    name: "Hugging Face Inference Providers",
    slug: "hugging-face",
    category: "ai-ml",
    shortDescription:
      "Serverless inference for thousands of open models through one API and your HF token.",
    longDescription:
      "Hugging Face Inference Providers give access to hundreds of open-weight models for text, images, embeddings and speech through a single router API at router.huggingface.co. One Hugging Face token authenticates every request, and the platform automatically routes each call to the fastest or cheapest available provider. It offers an OpenAI-compatible chat completions endpoint plus official Python and JavaScript client libraries.",
    officialDocsUrl: "https://huggingface.co/docs/inference-providers",
    homepageUrl: "https://huggingface.co",
    pricing: "freemium",
    pricingNotes:
      "Free serverless inference with rate limits; paid tiers raise throughput, concurrency and monthly usage.",
    auth: "api-key",
    sdkLanguages: ["Python", "JavaScript"],
    sampleEndpoints: [
      {
        method: "POST",
        path: "/v1/chat/completions",
        description: "OpenAI-compatible chat completion routed to the fastest provider.",
      },
      {
        method: "GET",
        path: "/v1/models",
        description: "List models across providers with pricing and context length.",
      },
    ],
    codeExample: {
      language: "curl",
      code: 'curl https://router.huggingface.co/v1/chat/completions \\\n  -H "Authorization: Bearer YOUR_HF_TOKEN" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "model": "openai/gpt-oss-120b:fastest",\n    "messages": [{"role": "user", "content": "Hello!"}],\n    "stream": false\n  }\'',
      note: "Pass a fine-grained HF token with Inference Providers permissions as a Bearer token.",
    },
    howToUse: [
      "Create a Hugging Face account and generate a fine-grained access token in token settings.",
      "Grant the token the 'Make calls to Inference Providers' permission.",
      "Set the Authorization: Bearer YOUR_HF_TOKEN header on every request.",
      "POST a model id (with an optional :fastest or :cheapest suffix) to /v1/chat/completions.",
      "Parse the returned choices array, just like the OpenAI chat response.",
      "Use the Python or JavaScript InferenceClient to auto-select providers and fail over.",
    ],
    alternatives: ["openai", "anthropic", "gemini-api", "stability-ai"],
    tags: ["open-models", "inference", "llm", "machine-learning", "serverless"],
    sources: ["https://huggingface.co/docs/inference-providers/index"],
  },
  {
    name: "Stability AI",
    slug: "stability-ai",
    category: "ai-ml",
    shortDescription:
      "Stable Diffusion image generation, editing, upscaling and Stable Audio via a REST API.",
    longDescription:
      "Stability AI's REST API at api.stability.ai exposes Stable Diffusion image generation, editing, upscaling and Stable Audio synthesis. Requests carry a Bearer API key and return generated image or audio bytes directly. It is used by apps that need on-demand text-to-image or image editing without running the models themselves.",
    officialDocsUrl: "https://platform.stability.ai/docs/api-reference",
    homepageUrl: "https://stability.ai",
    pricing: "paid",
    pricingNotes:
      "Pay-as-you-go by purchasing credits billed per image/audio generation; no perpetual free tier.",
    auth: "api-key",
    sdkLanguages: ["Python", "JavaScript", "TypeScript", "Go"],
    sampleEndpoints: [
      {
        method: "POST",
        path: "/v2beta/stable-image/generate/sd3",
        description: "Generate an image from a text prompt with Stable Diffusion 3.",
      },
      {
        method: "POST",
        path: "/v2beta/stable-image/upscale/fast",
        description: "Upscale an existing image to a higher resolution.",
      },
      {
        method: "GET",
        path: "/v1/user/account",
        description: "Get account and balance information for your API key.",
      },
    ],
    codeExample: {
      language: "curl",
      code: 'curl -f https://api.stability.ai/v2beta/stable-image/generate/sd3 \\\n  -H "Authorization: Bearer YOUR_STABILITY_API_KEY" \\\n  -H "Accept: image/*" \\\n  -F "prompt=Lighthouse on a cliff overlooking the ocean" \\\n  -F "output_format=jpeg" \\\n  --output lighthouse.jpeg',
      note: "Uses multipart form data; a successful call returns the generated image bytes directly.",
    },
    howToUse: [
      "Sign up at platform.stability.ai and create an API key in your account.",
      "Purchase credits so generations are billed per image or audio output.",
      "Set the Authorization: Bearer YOUR_STABILITY_API_KEY header on requests.",
      "POST your prompt as multipart form data to a generate endpoint.",
      "Save the returned image bytes (Accept: image/*) to a file.",
      "Check /v1/user/account to monitor remaining credit and handle 429 rate-limit responses.",
    ],
    alternatives: ["openai", "hugging-face"],
    tags: ["image-generation", "stable-diffusion", "text-to-image", "audio", "generative-ai"],
    sources: ["https://platform.stability.ai/docs/api-reference"],
  },
];
