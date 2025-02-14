## How to run?

```bash
cp .env.example .env
```

```
NODE_ENV=
PORT=

# PostgreSQL DB connectionstring
POSTGRES_URL= 

RESEND_API_KEY=

# For development use http://localhost:3000
NEXT_PUBLIC_SERVER_URL=

# openssl rand -base64 32
PAYLOAD_SECRET=

# Stripe secret API key
STRIPE_SECRET=
```

```bash
# install dependencies
yarn
# run the development server
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
