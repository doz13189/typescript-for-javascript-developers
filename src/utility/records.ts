
export {}

// record<K, T>
type Prefectures = 'Tokyo' | 'Chiba' | 'Tottori' | 'Shiga'
type Covid19InfectionInfo = {
    kanji_name: string,
    confirmed_cases: number
}

const covid19Japan: 
        Record<Prefectures, Covid19InfectionInfo>
     = {
        Tokyo: { kanji_name: 't', confirmed_cases: 190 },
        Chiba: { kanji_name: 'c', confirmed_cases: 23 },
        Tottori: { kanji_name: 'to', confirmed_cases: 2 },
        Shiga: { kanji_name: 'shi', confirmed_cases: 3 }
    }

