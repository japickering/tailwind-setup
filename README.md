# Getting started with Tailwind CSS
Using this starter kit you can get up and running fast with [Tailwind CSS](https://tailwindcss.com/docs/) and React JS.
Tailwind CSS 2.0 uses npm packages: Purge CSS which strips out un-used css for optimising file size and Craco to configure PostCSS.

## Setup Tailwind CSS and React JS
First cd to your project directory which probably looks like this:
/Users/dev/tailwind-setup/

 and install all the required node packages..
```npm install```

## Extending Tailwind CSS modules
Using the @layer directive we can extend core Tailwind CSS to make re-usable custom css classes.
e.g. 
```
/* index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  .myclass {}
} 
```

## Available Scripts
To start a new local dev server
```npm run start```

To run a production build
```npm run build```

To run your test scripts
```npm run test```
