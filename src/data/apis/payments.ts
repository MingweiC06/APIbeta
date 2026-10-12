import type { ApiEntry } from "@/lib/types";

export const paymentsApis: ApiEntry[] = [
  {
    name: "Stripe",
    slug: "stripe",
    category: "payments",
    shortDescription:
      "The most popular payment platform for accepting cards and running subscriptions online.",
    longDescription:
      "Stripe lets developers accept payments, manage subscriptions, handle refunds and pay out recipients through a single well-documented API. It is known for excellent SDK coverage, rich webhook support and an extensive dashboard. Businesses pay per successful transaction with no setup fee, which keeps the barrier to entry low.",
    officialDocsUrl: "https://docs.stripe.com/api",
    homepageUrl: "https://stripe.com",
    pricing: "paid",
    pricingNotes: "Pay-as-you-go: 2.9% + $0.30 per successful card charge (US standard pricing). No monthly fee.",
    auth: "api-key",
    sdkLanguages: ["JavaScript", "Python", "Java", "Go", ".NET", "Ruby", "PHP"],
    sampleEndpoints: [
      {
        method: "POST",
        path: "/v1/payment_intents",
        description: "Create a payment intent to start charging a customer.",
      },
      {
        method: "GET",
        path: "/v1/charges",
        description: "List recent charges on the account.",
      },
      {
        method: "POST",
        path: "/v1/refunds",
        description: "Refund a previously created charge.",
      },
    ],
    codeExample: {
      language: "curl",
      code: 'curl https://api.stripe.com/v1/payment_intents \\\n  -u sk_test_YOUR_SECRET_KEY: \\\n  -d amount=1099 \\\n  -d currency=usd \\\n  -d "automatic_payment_methods[enabled]=true"',
      note: "Creates a $10.99 USD payment intent with automatic payment methods enabled.",
    },
    howToUse: [
      "Sign up at stripe.com and verify your account details.",
      "Open the Developers section of the dashboard and copy your secret key (sk_test_...).",
      "Use the secret key with the example above to create a payment intent.",
      "On the client, use Stripe.js or the mobile SDKs to collect card details and confirm the payment.",
      "Listen for webhooks (e.g. payment_intent.succeeded) to reconcile orders in your backend.",
      "Go live with your publishable and secret keys only after testing in the sandbox environment.",
    ],
    alternatives: ["paypal", "square", "plaid"],
    tags: ["payments", "subscriptions", "billing", "checkout", "webhooks"],
    sources: [
      "https://docs.stripe.com/api",
      "https://stripe.com/pricing",
      "https://docs.stripe.com/payments",
    ],
    featured: true,
  },
  {
    name: "PayPal",
    slug: "paypal",
    category: "payments",
    shortDescription:
      "Global payments platform with a well-documented, OAuth-authenticated REST API.",
    longDescription:
      "PayPal's REST APIs let developers accept card and PayPal payments, manage orders, subscriptions, invoicing and disputes. Apps authenticate with OAuth 2.0 by exchanging a client ID and secret for a bearer access token, and a full sandbox mirrors production for testing. It is a trusted option for businesses that need a recognized global checkout.",
    officialDocsUrl: "https://developer.paypal.com/api/rest/",
    homepageUrl: "https://www.paypal.com",
    pricing: "paid",
    pricingNotes:
      "Pay-as-you-go per completed transaction with no setup fee; a free sandbox is provided for testing. Exact rates vary by region and product.",
    auth: "oauth",
    sdkLanguages: ["JavaScript", "Node.js", "Java", "PHP", "Python", ".NET"],
    sampleEndpoints: [
      {
        method: "POST",
        path: "/v1/oauth2/token",
        description: "Exchange client ID and secret for an access token.",
      },
      {
        method: "POST",
        path: "/v2/checkout/orders",
        description: "Create an order/checkout session.",
      },
      {
        method: "GET",
        path: "/v2/checkout/orders/{id}",
        description: "Show details of an order.",
      },
    ],
    codeExample: {
      language: "curl",
      code: 'curl -v -X POST "https://api-m.sandbox.paypal.com/v1/oauth2/token" \\\n  -u "YOUR_CLIENT_ID:YOUR_CLIENT_SECRET" \\\n  -H "Content-Type: application/x-www-form-urlencoded" \\\n  -d "grant_type=client_credentials"',
      note: "Returns a bearer access token you use on subsequent v2 calls.",
    },
    howToUse: [
      "Create a PayPal developer account and open Apps & Credentials.",
      "Create an app and copy its client ID and secret.",
      "Exchange them for an access token at /v1/oauth2/token (client_credentials).",
      "Call POST /v2/checkout/orders with the Bearer access token to create an order.",
      "Redirect the buyer to approve, then capture the order on your backend.",
      "Test in sandbox first; switch to the live api-m.paypal.com base once approved.",
    ],
    alternatives: ["stripe", "square", "plaid"],
    tags: ["payments", "checkout", "orders", "subscriptions", "global"],
    sources: [
      "https://developer.paypal.com/api/rest/",
    ],
  },
  {
    name: "Square",
    slug: "square",
    category: "payments",
    shortDescription:
      "Unified payments and commerce platform with a versioned REST API and free sandbox.",
    longDescription:
      "Square's Developer API lets businesses take payments, manage locations, customers, inventory and staff from one platform. API calls use a bearer access token and a required Square-Version header, and every endpoint is documented in a browsable reference. It pairs in-person and online commerce well and provides a free sandbox for development.",
    officialDocsUrl: "https://developer.squareup.com/reference/square/payments-api/create-payment",
    homepageUrl: "https://developer.squareup.com",
    pricing: "paid",
    pricingNotes:
      "Pay-as-you-go per transaction; free sandbox and test accounts for development. No monthly fee to start.",
    auth: "oauth",
    sdkLanguages: ["Node.js", "Python", "Ruby", "PHP", "Java", ".NET"],
    sampleEndpoints: [
      {
        method: "POST",
        path: "/v2/payments",
        description: "Create a payment using a payment source.",
      },
      {
        method: "GET",
        path: "/v2/locations",
        description: "List the business's locations.",
      },
      {
        method: "POST",
        path: "/v2/refunds",
        description: "Refund a previously captured payment.",
      },
    ],
    codeExample: {
      language: "curl",
      code: 'curl https://connect.squareup.com/v2/payments \\\n  -X POST \\\n  -H "Square-Version: 2026-09-16" \\\n  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\\n  -H "Content-Type: application/json" \\\n  -d \'{"idempotency_key":"YOUR_IDEMPOTENCY_KEY","amount_money":{"amount":1000,"currency":"USD"},"source_id":"ccof:YourToken"}\'',
      note: "Charges 1000 cents ($10.00) USD against a payment token from the Web Payments SDK.",
    },
    howToUse: [
      "Create a Square developer account and register an application.",
      "Generate a personal or OAuth access token from the dashboard.",
      "Always send the Authorization: Bearer token and a Square-Version header.",
      "Create a payment with a payment token generated by the Web Payments SDK.",
      "Use a unique idempotency_key on every CreatePayment call to avoid duplicates.",
      "Test against the sandbox environment before going live.",
    ],
    alternatives: ["stripe", "paypal", "plaid"],
    tags: ["payments", "commerce", "pos", "checkout", "sandbox"],
    sources: [
      "https://developer.squareup.com/reference/square/payments-api/create-payment",
    ],
  },
  {
    name: "Plaid",
    slug: "plaid",
    category: "payments",
    shortDescription:
      "Connect users' bank accounts to apps for auth, balance and transaction data.",
    longDescription:
      "Plaid is the standard layer for linking bank accounts to applications, powering Auth, Balance, Identity, Transactions and Money Movement products. Developers create a Link token, have the user connect their institution, then exchange the public token for an access token and read financial data over REST. It is widely used in fintech, accounting and payments.",
    officialDocsUrl: "https://plaid.com/docs/api/products/transactions/",
    homepageUrl: "https://plaid.com",
    pricing: "freemium",
    pricingNotes:
      "Limited Production: up to 200 live API calls per product to start; then pay-as-you-go per product/account.",
    auth: "api-key",
    sdkLanguages: ["Node.js", "Python", "Ruby", "Java", "Go"],
    sampleEndpoints: [
      {
        method: "POST",
        path: "/link/token/create",
        description: "Create a Link token to start account linking.",
      },
      {
        method: "POST",
        path: "/item/public_token/exchange",
        description: "Exchange a public token for an access token.",
      },
      {
        method: "POST",
        path: "/transactions/sync",
        description: "Fetch incremental transactions for an Item using a cursor.",
      },
    ],
    codeExample: {
      language: "curl",
      code: 'curl https://production.plaid.com/transactions/sync \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  -H "PLAID-CLIENT-ID: YOUR_CLIENT_ID" \\\n  -H "PLAID-SECRET: YOUR_SECRET" \\\n  -d \'{"access_token":"YOUR_ACCESS_TOKEN","count":100}\'',
      note: "Pulls the next batch of transaction updates for a linked Item.",
    },
    howToUse: [
      "Sign up at plaid.com and copy your client_id and secret from the dashboard.",
      "Call /link/token/create to initialize Plaid Link for your products.",
      "Drop in Link so the user selects their bank and logs in.",
      "Exchange the returned public_token for an access_token via /item/public_token/exchange.",
      "Call /transactions/sync with the access_token and a cursor to pull transactions.",
      "Handle PRODUCT_NOT_READY and webhooks (SYNC_UPDATES_AVAILABLE) as data becomes available.",
    ],
    alternatives: ["stripe", "paypal", "square"],
    tags: ["banking", "fintech", "auth", "transactions", "aggregation"],
    sources: [
      "https://plaid.com/docs/api/products/transactions/",
      "https://plaid.com/pricing/",
    ],
  },
];
