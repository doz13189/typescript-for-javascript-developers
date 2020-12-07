今日のテーマは、typescript & vue 3 & 提案 !!

## TypeScript はじめました

TypeScirpt がブラウザで書ける。  
https://www.typescriptlang.org/play?#code/FA1o


### 1 分で学ぶ TypeScript

> ### Types by Inference  
> TypeScript knows the JavaScript language and will generate types for you in many cases. For example in creating a variable and assigning it to a particular value, TypeScript will use the value as its type.

誤訳が怖いので...公式ドキュメントをそのまま引用。

```typescript
let helloWorld = "Hello World";
//  ^ = let helloWorld: string
```

`helloworld` は `string`ということは、`number`の 5 は代入できないはず...
```typescript
helloWorld = 5
// Type 'number' is not assignable to type 'string'.
```

> ### Defining Types
> You can use a wide variety of design patterns in JavaScript. However, some design patterns make it difficult for types to be inferred automatically

`interface` として`object`のプロパティに対して型を定義してもいい！  

```typescript
interface User {
  name: string;
  id: number;
}

const user: User = {
  name: "Hayes",
  id: 0,
};
```

ドキュメントを見てるとこっちの書き方もあるけど、まだ違いはわからねぇ。  
`interface`は関数とかも定義できるので、そういう違い??

```typescript
type User = {
    name: string,
    id: number
}

const user: User = {
  name: "Hayes",
  id: 0,
};
```

続きは、5 分で学ぶ TypeScript は以下参照。  
https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html


## Vue 3 ははじめていません

参照  
https://www.vuemastery.com/courses/vue3-typescript/why-vue-&-typescript

> One of the biggest hurdles that people encountered when using TypeScript in Vue 2 was that while it was technically possible, there was a rather high cost of entry and some things didn’t work as well as they’d like. 

Vue 2 + TypeScript という選択はない。っぽい。

>  Vue 3 was rewritten entirely in TypeScript

TypeScript を言語として採用する場合、TypeScript + React という構成が多いが...Vue 3 からは TypeScript で書かれてるから気にしなくていいぜ、とは言い切れないが、相性はだいぶ良くなったっぽい。


# 提案 !!
次の案件は、TypeScript + Vue 3 はどうでしょう ?  
GraphQL と同じ轍を踏まず...  
TRC のプロジェクトも安定期に入り(!?)、次の案件の "開発" のスタートまでおそらく 1 ~ 2 ヶ月程度あると踏んでいます。少なくとも 30 ~ 40 時間ほど、学習に当てることができると思います。勉強の期間は十分ではないが、存在はしています。  

現状、勉強会が機能していません...よね？
ということで、次の案件で盛り込みたい技術要素を開発チーム内で決めて、それをテーマにとりあえず 1 ヶ月間、勉強会で話すことのテーマとするのはどうでしょう。