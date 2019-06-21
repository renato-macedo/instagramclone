# Instagram Clone Web App
Instagram clone made with Node, React and React Native during Rocketseat's OmniStack Week


## Backend
Install all dependencies:
```javascript
yarn install //npm install
```
Set your Mongo connection inside backend/config/config.json 
```
{
    "PORT": 3001,
    "MONGO_CONNECTION": "YOUR CONNECTION HERE"
}
```

Start the server with: 
```javascript
yarn dev //or npm run dev
```

## Frontend
Install all dependencies:
```javascript
yarn install //npm install
```
Change the server url inside frontend/src/config/config.json 
```
{
    "API_URL": "http://192.168.X.X:3001"
}
```
Start development: 
```javascript
yarn start //or npm start
```

## Mobile
Install all dependencies:
```javascript
yarn install //npm install
```
Change the server url inside mobile/src/config/config.json 
```
{
    "API_URL": "http://192.168.X.X:3001" // you need to use IPv4 Address here if you plan to run the device on usb
}
```

Make sure you have react-native-cli installed and a device running, then install apk with: 
```javascript
react-native run-android // or run-ios but I didn't test on Iphone
```
