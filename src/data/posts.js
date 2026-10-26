export const categories = [
  { id: 'readings', tr: 'Okumalar', en: 'Readings' },
  { id: 'words', tr: 'Kelimeler ve Dil Bilgisi', en: 'Words & Grammar' },
  { id: 'learning', tr: 'Dil Öğrenme', en: 'Learning Tips' },
  { id: 'culture', tr: 'Kültür', en: 'Culture' },
]

const posts = [
  {
    slug: 'cay-saati',
    category: 'readings',
    date: '2026-10-26',
    level: 'A1',
    minutes: 2,
    title: 'Çay Saati',
    titleEn: 'Tea Time',
    summaryTr: 'Türkiye’de neden her masada bir bardak çay var? Türk çay kültürü hakkında kolay bir ilk okuma.',
    summary: 'Why is there always a glass of tea on the table in Turkey? An easy A1 Turkish reading about tea culture, with English translation and key words.',
    blocks: [
      {
        p: {
          tr: 'Türkiye’de insanlar çok çay içer. Sabah kahvaltıda çay var, öğlen işte çay var, akşam evde yine çay var!',
          en: 'People in Turkey drink a lot of tea. There’s tea at breakfast in the morning, tea at work at noon, and tea at home again in the evening!',
        },
      },
      {
        p: {
          tr: 'Türk çayı küçük ve ince belli bardaklarda içilir. Bardak çok sıcaktır. Bu yüzden insanlar bardağı üstünden tutar.',
          en: 'Turkish tea is drunk from small, tulip-shaped glasses. The glass is very hot, so people hold it by the rim.',
        },
      },
      {
        p: {
          tr: 'Çay, çaydanlıkta demlenir. Çaydanlık iki katlıdır: altta su, üstte çay vardır. Çay açık ya da koyu olabilir. Siz nasıl seversiniz?',
          en: 'Tea is brewed in a çaydanlık, a two-level teapot: water at the bottom, tea on top. Tea can be light or strong. How do you like it?',
        },
      },
      {
        p: {
          tr: 'Bir misafir eve gelince ev sahibi hemen sorar: “Çay içer misiniz?” Türkiye’de çay, misafirperverliğin bir işaretidir.',
          en: 'When a guest comes to the house, the host asks right away: “Would you like some tea?” In Turkey, tea is a sign of hospitality.',
        },
      },
    ],
    glossary: [
      ['çay', 'tea'],
      ['bardak', 'glass'],
      ['kahvaltı', 'breakfast'],
      ['misafir', 'guest'],
      ['ev sahibi', 'host'],
      ['açık / koyu', 'light / strong'],
      ['demlemek', 'to brew, to steep'],
      ['Teşekkürler, yeter.', 'Thanks, that’s enough.'],
    ],
    note: {
      tr: 'Bir bardak daha istemiyorsanız, çay kaşığını boş bardağınızın üstüne koyun. Bu, “Teşekkürler, yeter” demenin kibar bir yoludur.',
      en: 'If you don’t want another glass, place your teaspoon across the top of your empty glass. It’s a polite way of saying “No more, thank you.”',
    },
  },
  {
    slug: 'nazar-boncugu',
    category: 'readings',
    date: '2026-10-26',
    level: 'A2',
    minutes: 3,
    title: 'Nazar Boncuğu',
    titleEn: 'The Evil Eye Bead',
    summaryTr: 'Türkiye’de her yerde gördüğünüz o küçük mavi göz ne anlama geliyor? Nazar boncuğunun hikâyesi.',
    summary: 'What is the little blue eye you see everywhere in Turkey? An A2 Turkish reading about the nazar boncuğu, with English translation and key words.',
    blocks: [
      {
        p: {
          tr: 'Türkiye’de birçok evde, arabada ve dükkânda küçük, mavi bir göz görürsünüz. Bu, nazar boncuğudur. Nazar boncuğu camdan yapılır. Ortasında beyaz ve açık mavi halkalar, en içinde de koyu mavi ya da siyah bir nokta vardır.',
          en: 'In many homes, cars and shops in Turkey, you’ll see a small blue eye. This is a nazar boncuğu. It’s made of glass. In the middle there are white and light blue rings, and at the very centre there is a dark blue or black dot.',
        },
      },
      {
        p: {
          tr: 'Peki “nazar” ne demek? Bazı insanlara göre kıskanç ya da kötü bir bakış, insanlara zarar verebilir. Buna “nazar” denir. Nazar boncuğu bu kötü bakışı üzerine çeker ve insanları korur.',
          en: 'So what does “nazar” mean? Some people believe that a jealous or bad look can harm people. This is called “nazar”, the evil eye. The nazar boncuğu draws this bad look onto itself and protects people.',
        },
      },
      {
        p: {
          tr: 'Yeni doğan bebeklerin kıyafetlerine küçük bir nazar boncuğu takılır. Yeni bir eve taşınan ya da yeni bir dükkân açan kişilere de sık sık nazar boncuğu hediye edilir. Kapıların üstünde, duvarlarda ve anahtarlıklarda da çok görülür.',
          en: 'A small nazar boncuğu is pinned to newborn babies’ clothes. People who move into a new home or open a new shop are often given one as a gift. You also see them a lot above doors, on walls and on key rings.',
        },
      },
      {
        p: {
          tr: 'Bir nazar boncuğu kırılırsa insanlar üzülmez. Onlara göre boncuk kötü bir bakışı durdurmuş ve görevini yapmıştır. Eski boncuk atılır ve yerine yenisi asılır.',
          en: 'If a nazar boncuğu breaks, people aren’t sad. They believe the bead has stopped a bad look and done its job. The old bead is thrown away and a new one is hung in its place.',
        },
      },
      {
        p: {
          tr: 'Birisi bir şeyi çok beğendiğinde Türkler genellikle “Maşallah!” ya da “Nazar değmesin!” der. Bazen de hafifçe tahtaya vurur. Bu küçük gelenekler, nazara karşı bir koruma gibidir.',
          en: 'When someone really admires something, Turks often say “Maşallah!” or “Nazar değmesin!” (May the evil eye not touch it!). Sometimes they also knock lightly on wood. These little traditions are a kind of protection against the evil eye.',
        },
      },
    ],
    glossary: [
      ['nazar', 'the evil eye'],
      ['boncuk', 'bead'],
      ['cam', 'glass'],
      ['kıskanç', 'jealous'],
      ['bakış', 'look, gaze'],
      ['korumak', 'to protect'],
      ['kırılmak', 'to break'],
      ['Nazar değmesin!', 'May the evil eye not touch it!'],
    ],
    note: {
      tr: 'Nazar boncukları geleneksel olarak cam ustaları tarafından elde yapılır. İzmir yakınlarındaki Görece köyü bu el sanatıyla ünlüdür. Bugün nazar boncuğu, Türkiye’den alınan en sevilen hediyelik eşyalardan biridir.',
      en: 'Nazar beads are traditionally handmade by glassmakers. The village of Görece near İzmir is famous for this craft. Today, the nazar boncuğu is one of the most popular souvenirs from Turkey.',
    },
  },
  {
    slug: 'bayram-sabahi',
    category: 'readings',
    date: '2026-10-26',
    level: 'B1',
    minutes: 4,
    title: 'Bayram Sabahı',
    titleEn: 'The Morning of the Holiday',
    summaryTr: 'El öpmek, kapı kapı şeker toplamak ve küslerin barışması: Şeker Bayramı’nın ilk sabahı neler olur?',
    summary: 'Kissing hands, knocking on doors for sweets and making up with old friends: a B1 Turkish reading about the morning of Şeker Bayramı.',
    blocks: [
      {
        p: {
          tr: 'Ramazan ayı bitince Şeker Bayramı başlar. Bayram sabahı evlerde erkenden bir telaş başlar: herkes yeni ya da en güzel kıyafetlerini giyer, sofrada özel bir kahvaltı hazırlanır.',
          en: 'When the month of Ramadan ends, Şeker Bayramı begins. On the morning of the holiday, homes are busy from early on: everyone puts on new or their best clothes, and a special breakfast is prepared.',
        },
      },
      {
        p: {
          tr: 'Bayramın en önemli geleneklerinden biri büyükleri ziyaret etmektir. Çocuklar ve gençler, büyüklerinin elini öper ve sonra eli alınlarına götürür. Bu, saygı göstermenin geleneksel bir yoludur.',
          en: 'One of the most important traditions of the holiday is visiting the elders of the family. Children and young people kiss their elders’ hands and then touch the hand to their forehead. This is a traditional way of showing respect.',
        },
      },
      {
        p: {
          tr: 'Çocuklar için bayramın bir de tatlı tarafı vardır. Komşuların kapılarını tek tek çalarlar ve “İyi bayramlar!” derler. Karşılığında şeker, çikolata, bazen de biraz harçlık alırlar.',
          en: 'For children, the holiday also has a sweet side. They knock on the neighbours’ doors one by one and say “Happy holiday!” In return, they get sweets, chocolate and sometimes a little pocket money.',
        },
      },
      {
        p: {
          tr: 'Misafirlere genellikle lokum, baklava ve tabii ki Türk kahvesi ikram edilir. Bayram; küslerin barıştığı, uzaktaki akrabaların arandığı ve herkesin birbirine biraz daha yaklaştığı bir zamandır.',
          en: 'Guests are usually offered Turkish delight, baklava and, of course, Turkish coffee. Bayram is a time when people who have fallen out make up, relatives far away get a phone call, and everyone comes a little closer to each other.',
        },
      },
    ],
    glossary: [
      ['bayram', 'religious or national holiday'],
      ['telaş', 'hustle and bustle'],
      ['gelenek', 'tradition'],
      ['el öpmek', 'to kiss someone’s hand (to show respect)'],
      ['harçlık', 'pocket money'],
      ['ikram etmek', 'to offer (food or drink) to guests'],
      ['küs', 'not on speaking terms'],
      ['barışmak', 'to make up'],
    ],
    note: {
      tr: 'Şeker Bayramı’na Ramazan Bayramı da denir ve üç gün sürer. Ay takvimine göre kutlandığı için tarihi her yıl yaklaşık on bir gün öne gelir. En çok kullanılan bayram dilekleri “İyi bayramlar!” ve “Bayramınız kutlu olsun!”dur.',
      en: 'Şeker Bayramı (“Sugar Holiday”), also called Ramazan Bayramı, lasts three days. It follows the lunar calendar, so its date moves about eleven days earlier every year. The usual greetings are “İyi bayramlar!” and “Bayramınız kutlu olsun!”',
    },
  },
  {
    slug: 'her-gun-duyacaginiz-turkce-ifadeler',
    category: 'words',
    date: '2026-10-26',
    level: 'A2',
    minutes: 4,
    title: 'Her Gün Duyacağınız Altı Türkçe İfade',
    titleEn: 'Six Turkish Phrases You’ll Hear Every Day',
    summaryTr: 'Kolay gelsin, afiyet olsun, geçmiş olsun… İngilizcede tam karşılığı olmayan ama Türklerin her gün kullandığı ifadeler.',
    summary: 'Kolay gelsin, afiyet olsun, geçmiş olsun: six everyday Turkish phrases with no exact English equivalent, explained with examples.',
    blocks: [
      {
        p: {
          tr: 'Türkçede bazı ifadelerin İngilizcede tam bir karşılığı yoktur. Türkler bu ifadeleri günde birçok kez kullanır: dükkânda, iş yerinde ve yemek masasında. Bu altı ifadeyi öğrenin, Türkçeniz çok daha doğal duyulsun!',
          en: 'Some Turkish phrases have no exact equivalent in English. Turks use them many times a day: in shops, at work and at the dinner table. Learn these six and your Turkish will sound much more natural!',
        },
      },
      { h: { tr: '1. Kolay gelsin', en: 'May it come easy' } },
      {
        p: {
          tr: 'Çalışan birine söylenir: bir satış görevlisine, masasında çalışan bir iş arkadaşınıza ya da evini temizleyen bir arkadaşınıza. Anlamı “İşin kolay olsun” gibidir. Genellikle “Sağ ol” diye cevap verilir.',
          en: 'Say it to someone who is working: a shop assistant, a colleague at their desk or a friend who is cleaning the house. It means something like “May your work be easy.” The usual answer is “Sağ ol” (Thanks).',
        },
      },
      { h: { tr: '2. Afiyet olsun', en: 'Enjoy your meal' } },
      {
        p: {
          tr: 'Yemekten önce ya da sonra söylenir. Garsonlar da yemeğinizi getirirken sık sık “Afiyet olsun” der. Yemeğiniz için teşekkür eden birine de böyle cevap verebilirsiniz.',
          en: 'It’s said before or after a meal. Waiters often say “Afiyet olsun” when they bring your food. It’s also how you reply when someone thanks you for the food you made.',
        },
      },
      { h: { tr: '3. Ellerine sağlık', en: 'Health to your hands' } },
      {
        p: {
          tr: 'Size yemek yapan kişiye ya da elleriyle güzel bir şey yapan birine söylenir. Yemeği yapan kişi genellikle “Afiyet olsun” diye cevap verir.',
          en: 'Say it to the person who cooked for you, or to anyone who made something nice with their hands. The cook usually replies “Afiyet olsun.”',
        },
      },
      { h: { tr: '4. Geçmiş olsun', en: 'Get well soon' } },
      {
        p: {
          tr: 'Hasta olan, kaza geçiren ya da zor bir dönemden geçen birine söylenir. “Bu kötü günler geride kalsın” demektir.',
          en: 'Say it to someone who is ill, has had an accident or is going through a hard time. It means “May these bad days be behind you.”',
        },
      },
      { h: { tr: '5. Güle güle kullan', en: 'Use it with smiles' } },
      {
        p: {
          tr: 'Arkadaşınız yeni bir telefon, araba ya da çanta mı aldı? Ona “Güle güle kullan” deyin. Yeni kıyafetler için “Güle güle giy”, yeni bir ev için de “Güle güle otur” denir.',
          en: 'Has your friend bought a new phone, car or bag? Tell them “Güle güle kullan.” For new clothes, people say “Güle güle giy” (Wear it with smiles), and for a new home, “Güle güle otur” (Live in it with smiles).',
        },
      },
      { h: { tr: '6. Hayırlı olsun', en: 'May it bring you good' } },
      {
        p: {
          tr: 'Yeni başlangıçlar için kullanılır: yeni bir iş, yeni bir ev ya da yeni bir dükkân. “Bu yenilik sana hep iyilik getirsin” anlamındadır.',
          en: 'It’s used for new beginnings: a new job, a new home or a new shop. It means “May this new thing bring you only good.”',
        },
      },
      {
        tip: {
          tr: 'Bir dahaki sefere çalışan birini gördüğünüzde gülümseyin ve “Kolay gelsin!” deyin. Türkçe küçük bir sohbet başlatmanın en kolay yolu bu!',
          en: 'Next time you see someone working, smile and say “Kolay gelsin!” It’s the easiest way to start a little conversation in Turkish!',
        },
      },
    ],
  },
  {
    slug: 'her-gun-15-dakika-turkce-pratik',
    category: 'learning',
    date: '2026-10-26',
    level: 'B1',
    minutes: 4,
    title: 'Her Gün 15 Dakikada Türkçe Pratik',
    titleEn: 'How to Practise Turkish in 15 Minutes a Day',
    summaryTr: 'Türkçede ilerlemek için saatlerce çalışmanız gerekmez. İşe, aileye ve günlük hayata sığan 15 dakikalık bir plan.',
    summary: 'You don’t need hours a day to make progress in Turkish. A simple 15-minute daily routine for reading, listening and speaking practice.',
    blocks: [
      {
        p: {
          tr: 'Türkçede ilerlemek için her gün saatlerce çalışmanız gerekmez. Önemli olan, her gün biraz pratik yapmaktır. İşte işinize, ailenize ve günlük hayatınıza kolayca sığacak 15 dakikalık bir plan.',
          en: 'You don’t need to study for hours every day to make progress in Turkish. What matters is a little practice every single day. Here is a 15-minute plan that fits easily around your work, your family and your daily life.',
        },
      },
      { h: { tr: '1–5. dakika: Kısa bir metin okuyun', en: 'Minutes 1–5: Read a short text' } },
      {
        p: {
          tr: 'Seviyenize uygun kısa bir metin seçin ve iki kez okuyun: önce genel anlamı için, sonra yavaş yavaş. Bu blogdaki okumalar tam da bunun için hazırlandı.',
          en: 'Choose a short text at your level and read it twice: first for the general meaning, then slowly. The readings on this blog were written exactly for this.',
        },
      },
      { h: { tr: '6–10. dakika: Dinleyin ve tekrar edin', en: 'Minutes 6–10: Listen and repeat' } },
      {
        p: {
          tr: 'Kısa bir ses ya da video seçin: bir şarkı, bir podcast ya da bir Türk dizisinden bir sahne. Bir iki cümle dinleyin, durdurun ve yüksek sesle tekrar edin. Sadece kelimeleri değil, cümlenin melodisini de taklit edin. Bu yöntem telaffuz için çok faydalıdır.',
          en: 'Pick a short audio or video clip: a song, a podcast or a scene from a Turkish TV series. Listen to one or two sentences, pause and repeat them out loud. Copy not only the words but also the melody of the sentence. This technique, often called shadowing, is great for pronunciation.',
        },
      },
      { h: { tr: '11–15. dakika: Kendi kendinize Türkçe konuşun', en: 'Minutes 11–15: Talk to yourself in Turkish' } },
      {
        p: {
          tr: 'Ne yaptığınızı basit cümlelerle anlatın. Başta biraz garip gelebilir, ama bu alıştırma kafanızda çeviri yapmadan hızlıca cümle kurmanızı sağlar.',
          en: 'Describe what you are doing in simple sentences. It may feel strange at first, but it trains you to build sentences quickly, without translating in your head.',
        },
      },
      {
        examples: [
          { tr: 'Kahve yapıyorum.', en: 'I’m making coffee.' },
          { tr: 'Şimdi işe gidiyorum.', en: 'Now I’m going to work.' },
          { tr: 'Hava bugün çok güzel.', en: 'The weather is really nice today.' },
        ],
      },
      { h: { tr: 'Bir ifade defteri tutun', en: 'Keep a phrase notebook' } },
      {
        p: {
          tr: 'Yararlı bir ifade öğrendiğinizde onu tek bir kelime olarak değil, bir örnek cümleyle birlikte yazın. Defterinizi haftada bir kez okuyun. Bütün ifadeleri gerçek bir sohbette kullanmak, kelime listelerinden çok daha kolaydır.',
          en: 'When you learn a useful phrase, don’t write it down as a single word: write it with an example sentence. Read your notebook once a week. Whole phrases are much easier to use in a real conversation than word lists.',
        },
      },
      {
        tip: {
          tr: 'Her gün 15 dakika, haftada bir kez iki saatten daha etkilidir. Ve haftada bir kez, öğrendiklerinizi gerçek biriyle konuşarak kullanın!',
          en: 'Fifteen minutes every day works better than two hours once a week. And once a week, use what you’ve learned by talking to a real person!',
        },
      },
    ],
  },
]

export const sortedPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date))

export function featuredPosts(count = 3) {
  const picked = []
  for (const c of categories) {
    const first = sortedPosts.find((p) => p.category === c.id)
    if (first) picked.push(first)
  }
  for (const p of sortedPosts) {
    if (!picked.includes(p)) picked.push(p)
  }
  return picked.slice(0, count)
}

export function categoryOf(post) {
  return categories.find((c) => c.id === post.category)
}

const months = ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara']

export function formatDate(date) {
  const [y, m, d] = date.split('-').map(Number)
  return `${d} ${months[m - 1]} ${y}`
}

export default posts
