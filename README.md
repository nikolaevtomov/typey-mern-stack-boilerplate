# Typey MERN Stack Boilerplate
### CRUD operations using JavaScript for client and server.

#### Install client and server dependencies:
`
$ npm ci
`

#### Build client and server directories:
`
$ npm run build
`

#### Setup environment variables:
Add a file `.env` to the root of the project containing the following env variables:

```bash
DATABASE=*
USERNAME=*
PASSWORD=*
```

Create a free Atlas Mongo DB cloud account and connect your cluster:
https://docs.atlas.mongodb.com/getting-started/


#### Run the following scripts in separate terminal tabs for development:

#### Start node server
`
$ npm run watch:dev:server
`

#### Watch for the server file changes
`
$ npm run watch:server
`

#### Watch for the client file changes
`
$ npm run watch:client
`

#### Client dev server:
```bash
http://localhost:3000/
```

#### Server endpoints:
```bash
http://localhost:3000/api/ping {GET/POST}

{
  "message": "hello",
}
```
```bash
http://localhost:3000/api/samples {GET}
http://localhost:3000/api/sample {POST}
http://localhost:3000/api/sample/:id {GET/PATCH/DELETE}

{
  "name": "sample",
  "value": "4000"
}
```

#### Knowns issues:
- Heroku, static files path need resolving
- Heroku, client router path need fixing
