
export {}

class Magic {}
class Soljer {}

class Taro extends Magic {

}

interface Kenja {
    ionazun(): void

}
interface Senshi {
    kougeki(): void
}

class Jiro implements Kenja, Senshi {
    ionazun(): void {
        console.log('buuuuun')
    }

    kougeki(): void {
        console.log('doon')
    }
}

const jiro = new Jiro()
jiro.ionazun()
jiro.kougeki()



