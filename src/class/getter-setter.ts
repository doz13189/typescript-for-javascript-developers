export {}

// * owner
//   * 所有者
//   * 初期化時に設定できる
//   * 途中で変更できない
//   * 参照できる

// * secretNumber
//   * 個人番号
//   * 初期化時に設定できる
//   * 途中で変更できる
//   * 参照できない

class MyNumberCard { 
    private _owner: string
    private _secretNumber: number

    constructor(owner: string, secretNumber: number) {
        this._owner = owner
        this._secretNumber = secretNumber
    }

    get owner() {
        return this._owner
    }

    set secretNumber(value: number) {
        this._secretNumber = value
    }

    debugPrint() {
        return `secretNumber: ${this._secretNumber}`
    }
}

let card = new MyNumberCard('ham', 12345643)
console.log(card.owner)
console.log(card.debugPrint())
card.secretNumber = 123455

// console.log(card.secretNumber)

