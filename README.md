# soda-todo

Stack: Node.js and React.

## Install and Run

To install the backend dependencies run
```
npm install
```

in the root folder, while for the client move to `/client` and run

```
npm install
```

You can run both client and server separately, to run the backend in dev mode just run

```
npm run dev
```
The server is listens to port 3001.

To run the client move again to /client and run 

```
npm start
```

it should open a page on the browser at http://localhost:3000.

## Serve the client assets from the server

*create-react-app* exposes a command **npm run build** that compiles all the assets in `/client/build`.

The backend knows it, so once the built is complete you just run the server and on the browser go for `http://localhost:3001` and it will serve the built assets.
