# vue-material-app

## Project setup
```
npm install vue-material --save
npm install vue-router --save
npm install axios --save
npm install -D sass-loader
npm install -D node-sass
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### errors 
error 
npm error While resolving: vue-material-app@0.1.0
npm error Found: vue@3.5.33
npm error node_modules/vue
npm error   vue@"^3.0.0" from the root project
npm error
npm error Could not resolve dependency:
npm error peer vue@"^2.7.14" from vue-material@1.0.0-beta-16
npm error node_modules/vue-material
npm error   vue-material@"^1.0.0-beta-11" from the root project
solution 
change to "vue": "^2.6.11", 

error 
npm error While resolving: vue-material-app@0.1.0
npm error Found: eslint@5.16.0
npm error node_modules/eslint
npm error   dev eslint@"^5.16.0" from the root project
npm error
npm error Could not resolve dependency:
npm error peer eslint@">=7.5.0" from @vue/cli-plugin-eslint@5.0.9
npm error node_modules/@vue/cli-plugin-eslint
npm error   dev @vue/cli-plugin-eslint@"^5.0.8" from the root project 

"eslint": "^7.32.0",

error 
npm error While resolving: vue-material-app@0.1.0
npm error Found: @vue/cli-service@5.0.9
npm error node_modules/@vue/cli-service
npm error   dev @vue/cli-service@"^5.0.8" from the root project
npm error
npm error Could not resolve dependency:
npm error peer @vue/cli-service@"^3.0.0 || ^4.0.0-0" from @vue/cli-plugin-router@4.5.19
npm error node_modules/@vue/cli-plugin-router
npm error   dev @vue/cli-plugin-router@"^4.1.2" from the root project

"@vue/cli-plugin-router": "^5.0.8",

error 
npm error While resolving: sass-loader@8.0.2
npm error Found: node-sass@9.0.0
npm error node_modules/node-sass
npm error   dev node-sass@"^9.0.0" from the root project
npm error
npm error Could not resolve dependency:
npm error peerOptional node-sass@"^4.0.0" from sass-loader@8.0.2
npm error node_modules/sass-loader
npm error   dev sass-loader@"^8.0.2" from the root project
npm error
npm error Conflicting peer dependency: node-sass@4.14.1
npm error node_modules/node-sass
npm error   peerOptional node-sass@"^4.0.0" from sass-loader@8.0.2
npm error   node_modules/sass-loader
npm error     dev sass-loader@"^8.0.2" from the root project

"sass": "^1.32.7",
"sass-loader": "^12.0.0",
rm -rf node_modules package-lock.json
npm install 

