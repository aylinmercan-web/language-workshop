export const verbs = [
  { inf: 'gelmek', en: 'to come' },
  { inf: 'gitmek', en: 'to go', soft: 'gid' },
  { inf: 'yapmak', en: 'to do / make' },
  { inf: 'okumak', en: 'to read' },
  { inf: 'yazmak', en: 'to write' },
  { inf: 'içmek', en: 'to drink' },
  { inf: 'yemek', en: 'to eat' },
  { inf: 'konuşmak', en: 'to speak' },
  { inf: 'çalışmak', en: 'to work / study' },
  { inf: 'öğrenmek', en: 'to learn' },
  { inf: 'sevmek', en: 'to love / like' },
  { inf: 'istemek', en: 'to want' },
  { inf: 'almak', en: 'to take / buy' },
  { inf: 'vermek', en: 'to give' },
  { inf: 'bakmak', en: 'to look' },
  { inf: 'oturmak', en: 'to sit / live' },
  { inf: 'uyumak', en: 'to sleep' },
  { inf: 'görmek', en: 'to see' },
  { inf: 'bilmek', en: 'to know' },
  { inf: 'anlamak', en: 'to understand' },
  { inf: 'beklemek', en: 'to wait' },
  { inf: 'dinlemek', en: 'to listen' },
  { inf: 'başlamak', en: 'to start' },
  { inf: 'kalmak', en: 'to stay' },
  { inf: 'olmak', en: 'to be / become' },
  { inf: 'söylemek', en: 'to say / tell' },
]

export const persons = [
  { tr: 'Ben', en: 'I' },
  { tr: 'Sen', en: 'you' },
  { tr: 'O', en: 'he / she / it' },
  { tr: 'Biz', en: 'we' },
  { tr: 'Siz', en: 'you (plural / formal)' },
  { tr: 'Onlar', en: 'they' },
]

export const tenses = [
  {
    id: 'present',
    tr: 'Şimdiki zaman',
    en: 'Present continuous',
    tip: '-(i)yor + ending: geliyorum, okuyorsun. A final -a/-e drops: bekle → bekliyor.',
  },
  {
    id: 'past',
    tr: 'Geçmiş zaman',
    en: 'Past tense',
    tip: '-di / -tı + ending: geldim, yaptın. After ç, f, h, k, p, s, ş, t the d becomes t.',
  },
  {
    id: 'future',
    tr: 'Gelecek zaman',
    en: 'Future tense',
    tip: '-(y)ecek / -(y)acak + ending: geleceğim, yapacaksın. The k becomes ğ before a vowel.',
  },
  {
    id: 'aorist',
    tr: 'Geniş zaman',
    en: 'Simple present',
    tip: 'Short verbs take -er/-ar (yapar), longer ones -ir (konuşur). Exceptions: gelir, alır, verir, görür, bilir, kalır, olur.',
  },
]

const VOWELS = 'aeıioöuü'
const HARD = 'çfhkpsşt'
const IR_VERBS = ['al', 'bil', 'bul', 'dur', 'gel', 'gör', 'kal', 'ol', 'öl', 'san', 'var', 'ver', 'vur']

const lastVowel = (w) => [...w].reverse().find((c) => VOWELS.includes(c))
const isVowel = (c) => VOWELS.includes(c)
const two = (w) => ('eiöü'.includes(lastVowel(w)) ? 'e' : 'a')
const four = (w) => ({ a: 'ı', ı: 'ı', o: 'u', u: 'u', e: 'i', i: 'i', ö: 'ü', ü: 'ü' })[lastVowel(w)]

function copula(base, p) {
  const v = isVowel(base.at(-1))
  if (p === 0) return base + (v ? 'y' : '') + four(base) + 'm'
  if (p === 1) return base + 's' + four(base) + 'n'
  if (p === 2) return base
  if (p === 3) return base + (v ? 'y' : '') + four(base) + 'z'
  if (p === 4) return base + 's' + four(base) + 'n' + four(base) + 'z'
  return base + 'l' + two(base) + 'r'
}

function past(base, p) {
  if (p === 0) return base + 'm'
  if (p === 1) return base + 'n'
  if (p === 2) return base
  if (p === 3) return base + 'k'
  if (p === 4) return base + 'n' + four(base) + 'z'
  return base + 'l' + two(base) + 'r'
}

function futureEnd(base, p) {
  const soft = base.slice(0, -1) + 'ğ'
  if (p === 0) return soft + four(base) + 'm'
  if (p === 3) return soft + four(base) + 'z'
  return copula(base, p)
}

export function conjugate(verb, tense, p, negative = false) {
  const stem = verb.inf.slice(0, -3)
  const soft = verb.soft || stem
  const endsVowel = isVowel(stem.at(-1))
  const neg = 'm' + two(stem)

  if (tense === 'present') {
    let base
    if (negative) base = stem + 'm' + four(stem) + 'yor'
    else if (stem === 'ye') base = 'yiyor'
    else if (stem === 'de') base = 'diyor'
    else if (endsVowel && 'ae'.includes(stem.at(-1))) {
      const cut = stem.slice(0, -1)
      base = cut + four(cut) + 'yor'
    } else if (endsVowel) base = stem + 'yor'
    else base = soft + four(stem) + 'yor'
    return copula(base, p)
  }

  if (tense === 'past') {
    const b = negative ? stem + neg : stem
    const d = HARD.includes(b.at(-1)) ? 't' : 'd'
    return past(b + d + four(b), p)
  }

  if (tense === 'future') {
    let base
    if (negative) base = stem + neg + 'y' + two(stem) + 'c' + two(stem) + 'k'
    else if (stem === 'ye') base = 'yiyecek'
    else if (stem === 'de') base = 'diyecek'
    else base = (endsVowel ? stem + 'y' : soft) + two(stem) + 'c' + two(stem) + 'k'
    return futureEnd(base, p)
  }

  if (negative) {
    const m = stem + neg
    if (p === 0) return m + 'm'
    if (p === 3) return m + 'y' + four(m) + 'z'
    return copula(m + 'z', p)
  }
  let base
  if (endsVowel) base = stem + 'r'
  else if (IR_VERBS.includes(stem) || stem.split('').filter(isVowel).length > 1) base = stem + four(stem) + 'r'
  else base = soft + two(stem) + 'r'
  return copula(base, p)
}
