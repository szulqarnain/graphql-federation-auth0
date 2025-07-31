# Apollo Federation Starter Kit with Auth0 Authentication

This repository contains a complete example of a **GraphQL Federation Gateway** setup using **Apollo Server**, **NestJS** subgraphs, and **Auth0 Authentication (Authorization Code + Client Credentials Flow)**.

> Perfect for developers looking to implement scalable, secure microservices architecture using GraphQL, Apollo Gateway, and Auth0.

---

## 🔧 Tech Stack

- **Apollo Federation Gateway**
- **NestJS Subgraphs** (Modular Microservices)
- **GraphQL**
- **TypeScript**
- **Auth0 OAuth2 Flows (Authorization Code & Client Credentials)**
- **Passport.js**
- **Docker (optional)**

---

## 📁 Project Structure

```
federation/
│
├── gateway/ # Apollo Gateway Server
│ ├── src/
│ └── .env
│
├── user.subgraph/ # User Microservice (GraphQL Subgraph)
│ ├── src/
│ └── .env
│
├── post.subgraph/ # Post Microservice (GraphQL Subgraph)
│ ├── src/
│ └── .env
│
├── docker-compose.yml # Optional: for running all services together
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/apollo-federation-auth0.git
cd apollo-federation-auth0
```

### 2. Install Dependencies

Install dependencies for each service:

```bash
cd gateway && npm install
cd ../user.subgraph && npm install
cd ../post.subgraph && npm install
```

### 3. Set Up Environment Variables

Each service (gateway, user.subgraph, post.subgraph) requires its own `.env` file. You can use `.env.example` as a reference.

**Example .env for Gateway:**

```env
PORT=4000
AUTH0_DOMAIN=your-auth0-domain
AUTH0_AUDIENCE=your-api-audience
AUTH0_CLIENT_ID=your-client-id
AUTH0_CLIENT_SECRET=your-client-secret
```

### 4. Start Services

**Start Subgraphs** (In separate terminals):

```bash
cd user.subgraph && npm run start:dev
cd post.subgraph && npm run start:dev
```

**Start Gateway:**

```bash
cd gateway
npm run start:dev
```

Your Apollo Gateway is now live at: **http://localhost:4000/graphql**

---

## 🔐 Auth0 Setup (Authorization Code + Client Credentials)

This project supports two flows:

- **Authorization Code Flow** (browser-based login)
- **Client Credentials Flow** (machine-to-machine API calls)

### ✅ Permissions & Scopes

- **Scopes** define what actions the client can perform (`read:user`, `write:post`, etc.)
- **Permissions** are defined at the API level in Auth0 and assigned to Roles
- Auth0 token introspection is done at the Gateway level to validate user roles and permissions

---

## 📦 Optional: Docker

You can run the entire stack with Docker (if `docker-compose.yml` is configured):

```bash
docker-compose up --build
```

---

## ✅ Features

- **Auth0 Integration**
- **Authorization Code Flow**
- **Client Credentials Flow**
- **Federated Subgraphs with Apollo Gateway**
- **Type-safe GraphQL APIs**
- **Secure Header Forwarding**
- **Scalable Microservice Design**

---

## 🧠 Use Cases

- Building secure, distributed GraphQL APIs
- Integrating Auth0 OAuth2 flows in microservices
- Learning scalable backend architecture
- Real-world Apollo Federation example with authentication

---

## 📚 Resources

- [Apollo Federation Docs](https://www.apollographql.com/docs/federation/)
- [Auth0 OAuth2 Flows](https://auth0.com/docs/authorization/flows)
- [NestJS GraphQL](https://docs.nestjs.com/graphql/quick-start)

---

## 📣 SEO Tags

GraphQL Federation · Apollo Gateway · Auth0 Authorization Code Flow · NestJS GraphQL Subgraph · OAuth2 Client Credentials · Microservices with GraphQL · Secure GraphQL API · Role-Based Access Control (RBAC) · Passport.js Auth0 Strategy

---

## 🧑‍💻 Author

**Syed Zulqarnain Haider**  
Senior Full Stack Developer | MERN & GraphQL Expert  
🔗 [LinkedIn](https://linkedin.com/in/your-profile) | 🐦 [Twitter](https://twitter.com/your-handle) | 💻 [GitHub](https://github.com/your-username)

---

## 🌟 License

**MIT** - Free to use, improve, and share.

---

> **Note:** Would you like me to generate the `docker-compose.yml` or CI/CD workflow as well?
