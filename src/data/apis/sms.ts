import type { ApiEntry } from "@/lib/types";

export const smsApis: ApiEntry[] = [
  {
    name: "Twilio",
    slug: "twilio",
    category: "sms-comms",
    shortDescription:
      "Programmable SMS, voice and messaging for sending and receiving text worldwide.",
    longDescription:
      "Twilio's Programmable Messaging REST API lets applications send and receive SMS, MMS and WhatsApp messages over HTTP. You buy a Twilio phone number, authenticate with your Account SID and Auth Token using HTTP basic auth, and POST message resources. Official helper libraries cover most languages and webhooks handle inbound messages and delivery status.",
    officialDocsUrl: "https://www.twilio.com/docs/sms/send-messages",
    homepageUrl: "https://www.twilio.com",
    pricing: "paid",
    pricingNotes:
      "Pay-as-you-go per outbound message; a new trial account includes a small credit and labels trial sends.",
    auth: "api-key",
    sdkLanguages: ["Python", "Node.js", "Java", "PHP", "C#/.NET", "Go", "Ruby"],
    sampleEndpoints: [
      {
        method: "POST",
        path: "/2010-04-01/Accounts/{AccountSid}/Messages.json",
        description: "Send an SMS or MMS message from a Twilio number.",
      },
      {
        method: "GET",
        path: "/2010-04-01/Accounts/{AccountSid}/Messages.json",
        description: "List messages sent and received on your account.",
      },
      {
        method: "GET",
        path: "/2010-04-01/Accounts/{AccountSid}/Messages/{MessageSid}.json",
        description: "Fetch the status and details of a single message.",
      },
    ],
    codeExample: {
      language: "curl",
      code: 'curl -X POST "https://api.twilio.com/2010-04-01/Accounts/YOUR_ACCOUNT_SID/Messages.json" \\\n  --url-encode \\\n  -d "To=+15558675310" \\\n  -d "From=+15017122661" \\\n  -d "Body=Hello from APIbeta" \\\n  -u YOUR_ACCOUNT_SID:YOUR_AUTH_TOKEN',
      note: "Uses HTTP basic auth with your Account SID as the username and Auth Token as the password.",
    },
    howToUse: [
      "Sign up at twilio.com and keep the free trial plan for testing.",
      "Buy a Twilio phone number capable of sending SMS.",
      "Copy your Account SID and Auth Token from the Twilio console.",
      "Authenticate with HTTP basic auth (AccountSid:AuthToken) on every request.",
      "POST To, From and Body to the Messages resource endpoint.",
      "Read the returned Sid and monitor message status via the message resource.",
      "Set a webhook URL to receive inbound messages and delivery callbacks.",
    ],
    alternatives: ["vonage", "plivo", "sendgrid"],
    tags: ["sms", "messaging", "voice", "webhooks", "2fa"],
    sources: ["https://www.twilio.com/docs/sms/send-messages"],
    featured: true,
  },
  {
    name: "Vonage SMS API",
    slug: "vonage",
    category: "sms-comms",
    shortDescription:
      "Global SMS sending and receiving with low latency through a simple REST API.",
    longDescription:
      "Vonage (formerly Nexmo) provides a REST SMS API to send and receive text messages to over 190 countries. You authenticate with an API key and secret using HTTP basic auth and POST to the rest.nexmo.com endpoint with from, to and text parameters. Official server SDKs are available for many languages and delivery receipts arrive via webhook.",
    officialDocsUrl: "https://developer.vonage.com/en/messaging/sms/overview",
    homepageUrl: "https://www.vonage.com/communications-apis/",
    pricing: "paid",
    pricingNotes:
      "Pay-as-you-go per message; you only pay for the SMS you send, with regional per-country pricing.",
    auth: "api-key",
    sdkLanguages: ["Node.js", "Java", "Kotlin", "C#", "PHP", "Python", "Ruby"],
    sampleEndpoints: [
      {
        method: "POST",
        path: "/sms/json",
        description: "Send an SMS message with a from sender ID and a to number.",
      },
      {
        method: "GET",
        path: "/account/get-balance",
        description: "Retrieve the current credit balance of your Vonage account.",
      },
    ],
    codeExample: {
      language: "curl",
      code: 'curl -X POST https://rest.nexmo.com/sms/json \\\n  -u "YOUR_VONAGE_API_KEY:YOUR_VONAGE_API_SECRET" \\\n  -d "from=APIbeta" \\\n  -d "to=15558675310" \\\n  -d "text=A text message sent using the Vonage SMS API"',
      note: "Returns a JSON array of messages; check messages[0].status for delivery result.",
    },
    howToUse: [
      "Create a Vonage developer account and copy your API key and secret from the dashboard.",
      "Top up credit so outbound messages can be billed.",
      "Authenticate with HTTP basic auth using api_key:api_secret.",
      "POST from, to and text to https://rest.nexmo.com/sms/json.",
      "Parse the JSON response and check each message's status field.",
      "Configure a webhook to receive delivery receipts and inbound messages.",
    ],
    alternatives: ["twilio", "plivo", "sendgrid"],
    tags: ["sms", "messaging", "global", "sender-id", "delivery-receipts"],
    sources: [
      "https://developer.vonage.com/en/messaging/sms/overview",
      "https://developer.vonage.com/en/messaging/sms/code-snippets/send-an-sms",
    ],
  },
  {
    name: "Plivo",
    slug: "plivo",
    category: "sms-comms",
    shortDescription:
      "SMS, MMS and WhatsApp messaging to 200+ countries through a clean REST API.",
    longDescription:
      "Plivo's Message API is a REST interface for sending and receiving SMS, MMS and WhatsApp messages worldwide. Requests are made to api.plivo.com with your Auth ID and Auth Token using HTTP basic auth. It is aimed at transactional messaging, verification alerts and customer engagement, with helper libraries across common languages.",
    officialDocsUrl: "https://www.plivo.com/docs/messaging/api/message",
    homepageUrl: "https://www.plivo.com",
    pricing: "paid",
    pricingNotes:
      "Pay-as-you-go per message with regional pricing; new accounts receive trial credit for testing.",
    auth: "api-key",
    sdkLanguages: ["Python", "Node.js", "Java", "PHP", "Ruby"],
    sampleEndpoints: [
      {
        method: "POST",
        path: "/v1/Account/{auth_id}/Message/",
        description: "Send an SMS with from, dst and text parameters.",
      },
      {
        method: "GET",
        path: "/v1/Account/{auth_id}/Message/",
        description: "List all messages sent and received on your account.",
      },
      {
        method: "GET",
        path: "/v1/Account/{auth_id}/Message/{Uuid}/",
        description: "Retrieve the status and details of a single message.",
      },
    ],
    codeExample: {
      language: "curl",
      code: 'curl -X POST "https://api.plivo.com/v1/Account/YOUR_AUTH_ID/Message/" \\\n  -u "YOUR_AUTH_ID:YOUR_AUTH_TOKEN" \\\n  -H "Content-Type: application/json" \\\n  -d \'{"src": "+15017122661", "dst": "+15558675310", "text": "Hello from Plivo"}\'',
      note: "Authenticates with HTTP basic auth using your Auth ID and Auth Token from the Plivo console.",
    },
    howToUse: [
      "Sign up for a Plivo account and grab your Auth ID and Auth Token from the console.",
      "Rent a Plivo sender number or use an approved sender ID.",
      "Authenticate every request with HTTP basic auth (AuthID:AuthToken).",
      "POST src, dst and text to /v1/Account/{auth_id}/Message/.",
      "Read the returned message UUID and check delivery status.",
      "Point a webhook at your endpoint for inbound messages and delivery callbacks.",
    ],
    alternatives: ["twilio", "vonage", "sendgrid"],
    tags: ["sms", "messaging", "whatsapp", "mms", "alerts"],
    sources: ["https://www.plivo.com/docs/messaging/api/message"],
  },
  {
    name: "SendGrid",
    slug: "sendgrid",
    category: "sms-comms",
    shortDescription:
      "Transactional and marketing email delivery through Twilio's SendGrid v3 Web API.",
    longDescription:
      "Twilio SendGrid's v3 Web API sends transactional and marketing email from your application. All requests go to api.sendgrid.com with an API key in the Authorization Bearer header, and a single POST to /v3/mail/send carries a JSON payload with personalizations, recipients, sender and content. It is grouped here with messaging and communications providers and offers libraries for most languages.",
    officialDocsUrl: "https://docs.sendgrid.com/for-developers/sending-email/api-getting-started",
    homepageUrl: "https://sendgrid.com",
    pricing: "freemium",
    pricingNotes:
      "Free tier historically allows 100 emails/day; paid plans raise the daily send limit and add features.",
    auth: "api-key",
    sdkLanguages: ["PHP", "Python", "Node.js", "Java", "C#", "Go", "Ruby"],
    sampleEndpoints: [
      {
        method: "POST",
        path: "/v3/mail/send",
        description: "Send an email using a JSON personalizations payload.",
      },
      {
        method: "GET",
        path: "/v3/suppression/bounces",
        description: "List bounced emails suppressed from future delivery.",
      },
    ],
    codeExample: {
      language: "curl",
      code: 'curl --request POST https://api.sendgrid.com/v3/mail/send \\\n  --header "Authorization: Bearer YOUR_SENDGRID_API_KEY" \\\n  --header "Content-Type: application/json" \\\n  --data \'{"personalizations":[{"to":[{"email":"john.doe@example.com"}],"subject":"Hello, World!"}],"from":{"email":"sam.smith@example.com"},"content":[{"type":"text/plain","value":"Heya!"}]}\'',
      note: "Basic auth is no longer accepted; you must use an API key as a Bearer token.",
    },
    howToUse: [
      "Create a SendGrid account and complete sender authentication (verified sender or domain).",
      "Create an API key with Mail Send permissions in the SendGrid dashboard.",
      "Set the Authorization: Bearer YOUR_SENDGRID_API_KEY header on requests.",
      "Build a JSON body with personalizations, to, from and content.",
      "POST to https://api.sendgrid.com/v3/mail/send and expect a 202 Accepted response.",
      "Use the free tier (100 emails/day) for testing and upgrade as volume grows.",
    ],
    alternatives: ["twilio", "vonage", "plivo"],
    tags: ["email", "transactional-email", "marketing", "delivery", "mail"],
    sources: ["https://docs.sendgrid.com/for-developers/sending-email/api-getting-started"],
  },
];
