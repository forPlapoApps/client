# forPlapoApps
## 概要
プランニングポーカー。

## バージョン
- nodebrew：1.1.0
- node：v16.13.0
- npm：8.5.4
- yarn：1.22.19
## 環境構築
- クローン
> $ mkdir forPlapoApps
>
> $ git clone https://github.com/forPlapoApps/client.git
>
> $ git clone https://github.com/forPlapoApps/server.git

- フロント
> $ cd client
> 
> $ yarn install
> 
> $ yarn dev

localhost:3000で起動

```JSX
// const url = "http://localhost:5000"
const url = 'https://for-plapo-apps-server.herokuapp.com'
↓
const url = "http://localhost:5000"
// const url = 'https://for-plapo-apps-server.herokuapp.com'
```


- サーバー
> $ cd server
> 
> $ yarn install
> 
> $ yarn start

localhost:5000で起動
