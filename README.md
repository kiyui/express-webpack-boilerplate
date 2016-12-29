# express-webpack-boilerplate
An [express](http://expressjs.com/) and [webpack](https://webpack.github.io/) boilerplate for creating [SPA](https://en.wikipedia.org/wiki/Single-page_application)s.
The boilerplate is frontend agnostic and 
Features:
- hot reload
- convenient configured webpack loaders
- convenient configured express middlewares

## usage
There are 2 ways to use this boilerplate. You can fork the code (shown below) or you can recreate it using it as a guideline like a right copycat.

### forking
This will create a fork with two remotes so you can still push to your own repository and retrieve updates from this.
```
mkdir $APPLICATION_NAME
cd $APPLICATION_NAME
git init
git remote add upstream git@github.com:TimurKiyivinski/express-webpack-boilerplate.git
git pull upstream master
git remote add origin $YOUR_REPO_URL
git push -u origin master
```
That should be it! If you use `HTTPS` instead of `SSH` because you're some sort of hipster that remembers passwords, replace `git@github.com:TimurKiyivinski/express-webpack-boilerplate.git` with `https://github.com/TimurKiyivinski/express-webpack-boilerplate.git` instead.

## getting started
Copy `env.json.example` to `env.json` and run `npm install`. Make sure you have webpack all set up.

### build tools
Webpack is configured in `webpack.config.js` and loaded by `index.js` when the `environment` key in `env.json` is configured as `development`. You may add and customize the loaders depending on your frontend stack. Webpack code is built and bundled to the `public/` directory.

### entrypoint
Your `index.html` should serve as the loader for webpack and should serve as the entrypoint for your webpack bundle.
Your main application entrypoint is in `app/main.js`. Your entire frontend stack goes into the `app/` directory.

### express
This should be logical if you're familiar with Express. You can create your APIs here.
The boilerplate is configured such that all routes for the relative path `assets/` are routed to `index.html` to be handled by your frontend router. Put your Express code after the place noted:
```
// Put your Express code here
app.use((req, res, next) => {
  // This is an example middleware
  next()
})

app.get('/v1/users', ...) // Example
```
