# Simple React application with a library

https://pauloe-me.medium.com/typescript-npm-package-publishing-a-beginners-guide-40b95908e69c

Unfortunately, a library cannot be outside of the “src“ folder of a React app. Moreover the path alias of a library is not straight forward. It is not enough to put into the tsconfig.json.
Here is nice article for howto. You need to use an addition npm package “crarco“
https://blog.logrocket.com/using-path-aliases-cleaner-react-typescript-imports/

Install:

- go to the library folder (/src/libs/examplelib)
- npm i
- npm run build
- go to the root directory
- npm i
- npm run mystart

#todo

- make possible to hot reload. Library can be watched, and when someting changes, then the main project reloads it. (start with --watch)
