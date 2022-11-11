# forPlapoApps
## 概要
プランニングポーカー。

## バージョン
- nodebrew：1.1.0
- node：v16.13.0
- npm：8.5.4
- yarn：1.22.19
## 環境構築
### クローン
```
$ mkdir forPlapoApps

$ cd forPlapoApps

$ git clone https://github.com/forPlapoApps/client.git

$ git clone https://github.com/forPlapoApps/server.git
```

### フロント
```
$ cd client

$ yarn install

$ yarn dev
```

```.env.local```ファイルを作成し、
```
SERVER_URL="http://localhost:8000"
```
と記述する。

localhost:3000で起動


### サーバー

```
$ cd server

$ yarn install

$ yarn start
```

localhost:8000で起動
