export const categories = [
  { id: 'readings', tr: 'Okumalar', en: 'Readings' },
  { id: 'words', tr: 'Kelimeler ve Dil Bilgisi', en: 'Words & Grammar' },
  { id: 'learning', tr: 'Dil Öğrenme', en: 'Learning Tips' },
  { id: 'culture', tr: 'Kültür', en: 'Culture' },
]

const posts = [
  {
    slug: 'gobeklitepe',
    category: 'culture',
    date: '2026-11-03',
    level: 'B1',
    minutes: 5,
    title: 'Türkiye’de Gezilecek Yerler 2: Göbeklitepe',
    titleEn: 'Places to See in Turkey 2: Göbeklitepe',
    summaryTr: 'Piramitlerden 7 bin yıl daha eski taş sütunlar, binlerce yıl onları saklayan bir tepe ve hâlâ cevap bekleyen sorular: Göbeklitepe.',
    summary: 'Stone pillars 7,000 years older than the pyramids, a hill that hid them for millennia and questions still waiting for answers. A B1 Turkish reading about Göbeklitepe, with video and key words.',
    blocks: [
      {
        p: {
          tr: 'Şanlıurfa’nın yaklaşık 15 kilometre kuzeydoğusunda, Örencik köyünün yakınında yuvarlak bir tepe vardır. Köylüler bu tepeye yıllarca “Göbekli Tepe” dedi, çünkü uzaktan bakınca karnı şişkin bir göbeğe benziyordu. Tepenin üstünde tek bir dut ağacı vardı ve insanlar oraya dilek dilemeye giderdi. Altında ne olduğunu ise kimse bilmiyordu.',
          en: 'About 15 kilometres north-east of Şanlıurfa, near the village of Örencik, there is a round hill. For years the villagers called it “Göbekli Tepe” (Potbelly Hill), because from a distance it looked like a swollen belly. There was a single mulberry tree on top of the hill, and people used to go there to make wishes. But nobody knew what was underneath.',
        },
      },
      { h: { tr: 'Bir Mezarlık Mı, Bir Tapınak Mı?', en: 'A Cemetery or a Temple?' } },
      {
        p: {
          tr: '1963’te İstanbul Üniversitesi ve Chicago Üniversitesi’nden bir ekip bölgede araştırma yaptı. Tepede kırık taş parçaları gördüler ama bunun bir Orta Çağ mezarlığı olduğunu düşündüler ve çok üzerinde durmadılar. Göbeklitepe otuz yıl daha unutulmuş olarak kaldı.',
          en: 'In 1963 a team from İstanbul University and the University of Chicago carried out a survey in the area. They saw broken pieces of stone on the hill, but they thought it was a medieval cemetery and did not pay much attention to it. Göbeklitepe remained forgotten for another thirty years.',
        },
      },
      {
        p: {
          tr: '1994’te Alman arkeolog Klaus Schmidt eski raporları okurken bu tepeye merak sardı ve bölgeye geldi. Taşlara bakınca bunların sıradan taşlar olmadığını hemen anladı. Bir yıl sonra Şanlıurfa Müzesi ile birlikte kazılara başladı. Toprağın altından çıkanlar bütün dünyayı şaşırttı.',
          en: 'In 1994, while reading old reports, the German archaeologist Klaus Schmidt became curious about this hill and came to the area. When he looked at the stones, he immediately understood that they were not ordinary stones. A year later, together with the Şanlıurfa Museum, he began excavations. What came out from under the ground surprised the whole world.',
        },
      },
      { h: { tr: 'T Şeklinde Dev Sütunlar', en: 'Giant T-Shaped Pillars' } },
      {
        p: {
          tr: 'Kazılarda daire şeklinde yapılar ve bunların içinde T harfi şeklinde dev taş sütunlar bulundu. Bazı sütunlar beş metreden uzun ve tonlarca ağırlıkta. Sütunların üzerinde tilki, yaban domuzu, yılan, akbaba ve akrep gibi hayvanların kabartmaları var. Ortadaki büyük sütunlarda ise kollar, eller ve bir kemer görülüyor. Yani bu sütunlar aslında insan ya da insana benzeyen varlıkları anlatıyor olabilir.',
          en: 'The excavations uncovered circular structures with giant T-shaped stone pillars inside them. Some pillars are more than five metres tall and weigh several tonnes. On the pillars there are reliefs of animals such as foxes, wild boars, snakes, vultures and scorpions. On the large pillars in the middle, you can see arms, hands and a belt. So these pillars may actually represent humans or human-like beings.',
        },
      },
      { h: { tr: 'Piramitlerden 7 Bin Yıl Önce', en: '7,000 Years Before the Pyramids' } },
      {
        p: {
          tr: 'Göbeklitepe’yi bu kadar önemli yapan şey yaşı. Yapılar yaklaşık 12 bin yıl önce yapıldı. Bu, Mısır piramitlerinden 7 bin yıl, İngiltere’deki Stonehenge’den 6 bin yıl daha eski demek. O dönemde insanlar henüz tarım yapmıyordu; yazı, tekerlek ve çanak çömlek de yoktu. İnsanlar avlanarak ve doğadan bitki toplayarak yaşıyordu.',
          en: 'What makes Göbeklitepe so important is its age. The structures were built about 12,000 years ago. That means 7,000 years older than the Egyptian pyramids and 6,000 years older than Stonehenge in England. At that time people were not yet farming; there was no writing, no wheel and no pottery. People lived by hunting and gathering plants from nature.',
        },
      },
      {
        p: {
          tr: 'Uzun yıllar boyunca bilim insanları şöyle düşünüyordu: Önce insanlar tarım yapmaya başladı, köylere yerleşti, sonra da tapınaklar yaptı. Göbeklitepe bu sırayı tersine çevirdi. Klaus Schmidt’e göre burada önce tapınak geldi, sonra şehir. Yani avcı-toplayıcılar büyük bir iş için bir araya geldi ve belki de bu yüzden yerleşik hayata geçti.',
          en: 'For many years, scientists thought like this: first people started farming, settled in villages, and then built temples. Göbeklitepe turned this order upside down. According to Klaus Schmidt, here the temple came first, then the city. In other words, hunter-gatherers came together for a big project, and perhaps that is why they moved to a settled life.',
        },
      },
      {
        p: {
          tr: 'Bugün bazı araştırmacılar Göbeklitepe’nin sadece bir tapınak olmadığını, burada insanların yaşadığını da düşünüyor. Yani tartışma hâlâ devam ediyor. Ama herkesin hemfikir olduğu bir şey var: Göbeklitepe, insanlık tarihini yeniden düşünmemizi sağladı. Bu yüzden ona “tarihin sıfır noktası” deniyor.',
          en: 'Today some researchers think that Göbeklitepe was not only a temple, but that people also lived here. So the debate is still going on. But there is one thing everyone agrees on: Göbeklitepe made us rethink human history. That is why it is called “the zero point of history”.',
        },
      },
      {
        video: {
          id: 'kRow4ELfGO0',
          title: 'Tarihin Akışını Değiştiren Keşif: Göbeklitepe',
          caption: 'Tarihin Akışını Değiştiren Keşif: Göbeklitepe · The Discovery That Changed the Course of History: Göbeklitepe. Video: Koç Üniversitesi (YouTube)',
        },
      },
    ],
    glossary: [
      ['tepe', 'hill'],
      ['göbek', 'belly, navel'],
      ['dilek dilemek', 'to make a wish'],
      ['mezarlık', 'cemetery'],
      ['tapınak', 'temple'],
      ['üzerinde durmak', 'to dwell on, to pay attention to'],
      ['merak sarmak', 'to become curious about'],
      ['kazı', 'excavation'],
      ['sütun', 'pillar, column'],
      ['kabartma', 'relief (carving)'],
      ['akbaba', 'vulture'],
      ['çanak çömlek', 'pottery'],
      ['avcı-toplayıcı', 'hunter-gatherer'],
      ['yerleşik hayat', 'settled life'],
      ['tersine çevirmek', 'to turn upside down, to reverse'],
      ['hemfikir olmak', 'to agree'],
    ],
    note: {
      tr: 'Göbeklitepe 2018’de UNESCO Dünya Mirası Listesi’ne girdi ve 2019 yılı Türkiye’de “Göbeklitepe Yılı” ilan edildi. Bugün ziyaretçiler kazı alanını, üstü kapalı yürüyüş yollarından gezebiliyor. Bulunan sütunların ve heykellerin bir kısmı ise Şanlıurfa Arkeoloji Müzesi’nde.',
      en: 'Göbeklitepe was added to the UNESCO World Heritage List in 2018, and 2019 was declared the “Year of Göbeklitepe” in Turkey. Today visitors can see the excavation site from covered walkways. Some of the pillars and statues found here are in the Şanlıurfa Archaeology Museum.',
    },
  },
  {
    slug: 'sumela-manastirinin-hikayesi',
    category: 'culture',
    date: '2026-11-03',
    level: 'B2',
    minutes: 6,
    title: 'Türkiye’de Gezilecek Yerler 1: Sümela Manastırı’nın Hikâyesi',
    titleEn: 'Places to See in Turkey 1: The Story of Sumela Monastery',
    summaryTr: 'İki keşiş aynı gece aynı rüyayı görür ve Atina’dan Trabzon’a uzanan bir yolculuk başlar. Sümela Manastırı’nın efsanesi.',
    summary: 'Two monks have the same dream on the same night, and a journey from Athens to Trabzon begins. A B2 Turkish reading about the legend of Sumela Monastery, with video and key words.',
    blocks: [
      {
        p: {
          tr: 'Trabzon’un Maçka ilçesinde, Altındere Vadisi’nde, sarp bir kayalığın ortasında bir manastır vardır. Aşağıdan bakınca sanki kayaya yapıştırılmış gibi durur. Bu manastırın nasıl yapıldığına dair yüzyıllardır anlatılan bir efsane var. Efsaneye göre her şey Trabzon’dan çok uzakta, Atina’da başlar.',
          en: 'In the Maçka district of Trabzon, in the Altındere Valley, there is a monastery in the middle of a steep cliff. From below, it looks as if it has been glued to the rock. There is a legend that has been told for centuries about how this monastery was built. According to the legend, everything begins far from Trabzon, in Athens.',
        },
      },
      { h: { tr: 'Aynı Gece, Aynı Rüya', en: 'The Same Night, the Same Dream' } },
      {
        p: {
          tr: 'Yıl 385. Atina’daki bir manastırda yaşayan iki keşiş, Barnabas ile Sophronios, bir kış akşamı her zamanki gibi dualarını bitirip odalarına çekilirler. Barnabas yatmadan önce bir süre kitap okur, sonra gözleri yavaş yavaş kapanır. Uykuyla uyanıklık arasındayken oda birden aydınlanır. Karşısında İsa’nın öğrencilerinden Aziz Luka durmaktadır.',
          en: 'The year is 385. Two monks living in a monastery in Athens, Barnabas and Sophronios, finish their prayers one winter evening as usual and retire to their rooms. Before going to bed, Barnabas reads for a while, then his eyes slowly close. Between sleep and waking, the room suddenly fills with light. In front of him stands Saint Luke, one of the disciples of Jesus.',
        },
      },
      {
        p: {
          tr: 'Aziz Luka’nın elinde Meryem Ana’nın bir ikonası vardır. Barnabas’a şöyle der: “Bu ikona şimdi Karadeniz kıyısında, Trabzon’da bir kilisede duruyor. Sen oraya gideceksin. Sana göstereceğim dağın yamacına bir manastır yapacak ve ikonayı oraya koyacaksın.” Barnabas’ın gözlerinin önünde ormanlarla kaplı dik dağlar belirir, sonra da kayalığın ortasında yükselen bir manastır. Işık söner ve Aziz Luka kaybolur.',
          en: 'Saint Luke is holding an icon of the Virgin Mary. He says to Barnabas: “This icon is now in a church in Trabzon, on the Black Sea coast. You will go there. You will build a monastery on the side of the mountain I will show you, and you will place the icon there.” Steep, forest-covered mountains appear before Barnabas’s eyes, and then a monastery rising in the middle of the cliff. The light goes out and Saint Luke disappears.',
        },
      },
      {
        p: {
          tr: 'Sabah olunca Barnabas gördüklerini baş keşişe anlatmak için kapısının önünde beklemeye başlar. İçeride Sophronios vardır. Sıra kendisine gelince Barnabas rüyasını en başından anlatır. Baş keşiş dinledikçe şaşırır, çünkü birkaç dakika önce Sophronios’tan da tıpatıp aynı hikâyeyi dinlemiştir. İkisini birden karşısına oturtur:',
          en: 'In the morning, Barnabas waits outside the head monk’s door to tell him what he saw. Sophronios is inside. When his turn comes, Barnabas tells his dream from the very beginning. The more the head monk listens, the more surprised he is, because a few minutes earlier he heard exactly the same story from Sophronios. He sits them both down in front of him:',
        },
      },
      {
        p: {
          tr: '“Demek ki ikiniz de aynı gece aynı rüyayı gördünüz. Bu bir tesadüf olamaz. Size verilen görevi yerine getirmek zorundasınız. Ama böyle büyük bir iş için imparatorun izni gerekir. Size bir mektup yazacağım. Konstantinopolis’e gidip bunu Patrik’e verin. O sizi imparatora götürür.”',
          en: '“So you both had the same dream on the same night. This cannot be a coincidence. You must carry out the task you have been given. But a great work like this needs the emperor’s permission. I will write you a letter. Go to Constantinople and give it to the Patriarch. He will take you to the emperor.”',
        },
      },
      { h: { tr: 'İmparatorun Huzurunda', en: 'Before the Emperor' } },
      {
        p: {
          tr: 'İki keşiş ertesi gün yola çıkar. Konstantinopolis’te Patrik onları dinler ve İmparator Theodosius’un huzuruna çıkarır. “Majesteleri, bu iki keşiş sizden bir izin ve biraz da yardım istiyor,” der Patrik. İmparator keşişlere döner: “Anlatın bakalım.”',
          en: 'The two monks set off the next day. In Constantinople, the Patriarch listens to them and brings them before Emperor Theodosius. “Your Majesty, these two monks are asking you for permission and a little help,” says the Patriarch. The emperor turns to the monks: “Go on, tell me.”',
        },
      },
      {
        p: {
          tr: 'Barnabas rüyayı bir kez daha anlatır. İmparator bir süre düşünür, sonra sorar: “Trabzon’a gittiğinizde rüyanızda gördüğünüz yeri gerçekten bulabilecek misiniz? Orası çok büyük bir yer.” “Bulacağız Majesteleri,” der Barnabas. “Aziz Luka bize o yeri o kadar açık gösterdi ki başka bir yerle karıştırmamız imkânsız.”',
          en: 'Barnabas tells the dream once more. The emperor thinks for a while, then asks: “When you go to Trabzon, will you really be able to find the place you saw in your dream? It is a very big place.” “We will find it, Your Majesty,” says Barnabas. “Saint Luke showed us the place so clearly that we cannot possibly mistake it for anywhere else.”',
        },
      },
      {
        p: {
          tr: '“Öyleyse sizi destekleyeceğim,” der imparator. “Trabzon valisine bir mektup yazacağım. Size ne gerekirse verilecek: işçi, malzeme, para. Çalışmalarınızı da yakından takip edeceğim.”',
          en: '“Then I will support you,” says the emperor. “I will write a letter to the governor of Trabzon. You will be given whatever you need: workers, materials, money. I will also follow your work closely.”',
        },
      },
      { h: { tr: 'Mela Tepesi', en: 'Mela Hill' } },
      {
        p: {
          tr: 'Keşişlerin Trabzon’a varması bir buçuk ay sürer. Vali, imparatorun mektubunu okuyunca hemen hazırlıklara başlar. Bir hafta sonra iki keşişin yanına elli işçi verilir, malzemeler arabalara yüklenir ve yola çıkarlar. Günlerce dağlarda dolaşırlar. Sonunda bir derenin kenarında durup başlarını kaldırdıklarında, karşılarındaki yamaçta rüyalarında gördükleri tepeyi tanırlar: Mela Tepesi. Aradıkları yer burasıdır.',
          en: 'It takes the monks a month and a half to reach Trabzon. When the governor reads the emperor’s letter, he starts the preparations at once. A week later, the two monks are given fifty workers, the materials are loaded onto carts and they set off. For days they wander through the mountains. Finally, when they stop by a stream and look up, they recognise the hill from their dream on the slope in front of them: Mela Hill. This is the place they have been looking for.',
        },
      },
      {
        p: {
          tr: 'Ama iş hiç de kolay değildir. Manastırı kayaların içine oyarak yapmaları gerekir ve o dönemin aletleriyle sert kayayı delmek çok zordur. Yine de pes etmezler. İmparatorun emriyle derenin kenarında küçük bir köy kurulur, işçilerin sayısı beş yüze çıkar. Dokuz yıl süren çalışmanın sonunda kayanın içinde ancak bir kilise bölümü açılabilir. Ama bu bile yeterlidir: İlk Sümela Manastırı kurulmuştur. Barnabas ve Sophronios ikonayı yerine koyar ve hayatlarının geri kalanını orada geçirir.',
          en: 'But the work is not easy at all. They have to carve the monastery into the rock, and drilling through hard rock with the tools of that time is very difficult. Still, they do not give up. By the emperor’s order, a small village is built by the stream and the number of workers rises to five hundred. After nine years of work, only a church section can be opened inside the rock. But even this is enough: the first Sumela Monastery has been founded. Barnabas and Sophronios put the icon in its place and spend the rest of their lives there.',
        },
      },
      {
        p: {
          tr: 'Bugün gördüğümüz manastır, yüzyıllar içinde eklenen yeni bölümlerle büyümüştür. Efsanenin ne kadarı gerçek, kimse bilmiyor. Ama o sarp kayalığa bakınca, birilerinin oraya bir manastır yapmayı nasıl düşündüğünü insan merak etmeden duramıyor.',
          en: 'The monastery we see today has grown with new sections added over the centuries. No one knows how much of the legend is true. But when you look at that steep cliff, you cannot help wondering how anyone ever thought of building a monastery there.',
        },
      },
      {
        video: {
          id: '0YLXVOP-nUg',
          title: 'Sümela Manastırı',
          caption: 'Sümela Manastırı hakkında bir video · A video about Sumela Monastery (YouTube)',
        },
      },
      {
        source: {
          tr: 'Yararlanılan kaynak: Hıncal Uluç, “Sümela Manastırı’nın Öyküsü”, Sabah, 16 Mart 2014',
          url: 'https://www.sabah.com.tr/yazarlar/uluc/2014/03/16/sumela-manastirinin-oykusu',
        },
      },
    ],
    glossary: [
      ['keşiş', 'monk'],
      ['manastır', 'monastery'],
      ['ikona', 'icon (religious painting)'],
      ['sarp', 'steep, rugged'],
      ['yamaç', 'slope, hillside'],
      ['kayalık', 'cliff, rocky place'],
      ['odasına çekilmek', 'to retire to one’s room'],
      ['belirmek', 'to appear'],
      ['tıpatıp', 'exactly the same'],
      ['tesadüf', 'coincidence'],
      ['görevi yerine getirmek', 'to carry out a task'],
      ['huzuruna çıkmak', 'to appear before (a ruler)'],
      ['karıştırmak', 'to mix up, to confuse'],
      ['malzeme', 'material, supplies'],
      ['oymak', 'to carve'],
      ['pes etmek', 'to give up'],
    ],
    note: {
      tr: 'Sümela Manastırı her yıl 15 Ağustos’ta Meryem Ana Günü’nde özel bir ayine ev sahipliği yapar. Manastıra, Altındere Vadisi Milli Parkı’ndaki ormanın içinden yürüyerek çıkılır.',
      en: 'Every year on 15 August, the Feast of the Assumption, Sumela Monastery hosts a special service. You reach the monastery on foot through the forest of Altındere Valley National Park.',
    },
  },
  {
    slug: 'ataturkun-hayati',
    category: 'readings',
    date: '2026-11-02',
    level: 'A2',
    minutes: 4,
    title: 'Mustafa Kemal Atatürk’ün Hayatı',
    titleEn: 'The Life of Mustafa Kemal Atatürk',
    summaryTr: 'Selanik’te doğan bir çocuk nasıl Türkiye Cumhuriyeti’nin kurucusu oldu? Atatürk’ün hayatı hakkında kolay bir okuma.',
    summary: 'How did a boy born in Salonica become the founder of the Republic of Turkey? An easy A2 Turkish reading about the life of Atatürk, with English translation and key words.',
    blocks: [
      { image: { src: '/blog/ataturk.jpg', alt: 'Mustafa Kemal Atatürk', caption: 'Mustafa Kemal Atatürk (1881–1938)' } },
      {
        p: {
          tr: 'Türkiye’de her şehirde onun adını görürsünüz: caddelerde, okullarda, havalimanlarında. Paraların ve okul sınıflarının duvarlarında onun fotoğrafı vardır. O, Türkiye Cumhuriyeti’nin kurucusu Mustafa Kemal Atatürk’tür.',
          en: 'You will see his name in every city in Turkey: on streets, schools and airports. His photo is on the money and on the walls of school classrooms. He is Mustafa Kemal Atatürk, the founder of the Republic of Turkey.',
        },
      },
      { h: { tr: 'Çocukluğu', en: 'Childhood' } },
      {
        p: {
          tr: 'Mustafa 1881 yılında Selanik’te doğdu. Babasının adı Ali Rıza Efendi, annesinin adı Zübeyde Hanım’dı. Babası, Mustafa küçükken öldü.',
          en: 'Mustafa was born in Salonica in 1881. His father’s name was Ali Rıza Efendi and his mother’s name was Zübeyde Hanım. His father died when Mustafa was a little boy.',
        },
      },
      {
        p: {
          tr: 'Mustafa askerî okula gitti. Matematik dersini çok seviyordu. Bir gün matematik öğretmeni ona “Kemal” adını verdi. Kemal, “olgunluk, mükemmellik” demektir. O günden sonra adı Mustafa Kemal oldu.',
          en: 'Mustafa went to a military school. He loved maths. One day his maths teacher gave him the name “Kemal”, which means “maturity, perfection”. From that day on, his name was Mustafa Kemal.',
        },
      },
      {
        video: {
          id: '27sKWsx_piI',
          title: 'The Life of Atatürk Part 1 | Childhood Years',
          caption: 'Atatürk’ün çocukluğu hakkında İngilizce kısa bir çizgi film · A short animated film in English about Atatürk’s childhood. Video: Nesillerce Atatürk (YouTube)',
        },
      },
      { h: { tr: 'Asker Mustafa Kemal', en: 'Mustafa Kemal the soldier' } },
      {
        p: {
          tr: 'Mustafa Kemal İstanbul’da Harp Okulu’nu ve Harp Akademisi’ni bitirdi ve subay oldu. 1915’te Çanakkale Savaşı’nda başarılı bir komutan olarak tanındı.',
          en: 'Mustafa Kemal graduated from the Military School and the War Academy in İstanbul and became an officer. In 1915, he became known as a successful commander in the Battle of Gallipoli (Çanakkale).',
        },
      },
      { h: { tr: 'Kurtuluş Savaşı', en: 'The War of Independence' } },
      {
        p: {
          tr: 'Birinci Dünya Savaşı’ndan sonra yabancı ordular Anadolu’nun birçok yerini işgal etti. Mustafa Kemal 19 Mayıs 1919’da Samsun’a gitti ve Kurtuluş Savaşı’nı başlattı. 23 Nisan 1920’de Ankara’da Türkiye Büyük Millet Meclisi açıldı.',
          en: 'After the First World War, foreign armies occupied many parts of Anatolia. On 19 May 1919, Mustafa Kemal went to Samsun and started the War of Independence. On 23 April 1920, the Grand National Assembly of Turkey opened in Ankara.',
        },
      },
      {
        p: {
          tr: 'Savaş zor ve uzun sürdü. 30 Ağustos 1922’de Türk ordusu büyük bir zafer kazandı.',
          en: 'The war was hard and long. On 30 August 1922, the Turkish army won a great victory.',
        },
      },
      { h: { tr: 'Cumhuriyet', en: 'The Republic' } },
      {
        p: {
          tr: '29 Ekim 1923’te Türkiye Cumhuriyeti ilan edildi. Başkent Ankara oldu. Mustafa Kemal Türkiye’nin ilk cumhurbaşkanı oldu.',
          en: 'On 29 October 1923, the Republic of Turkey was declared. Ankara became the capital, and Mustafa Kemal became the first president of Turkey.',
        },
      },
      { h: { tr: 'Yenilikler', en: 'Reforms' } },
      {
        p: {
          tr: 'Atatürk ülkede birçok yenilik yaptı. 1928’de Türkçe için yeni bir alfabe geldi: Bugün sizin öğrendiğiniz Latin harfli Türk alfabesi! Kadınlar 1930’da yerel seçimlerde, 1934’te de milletvekili seçimlerinde oy kullanma hakkı kazandı.',
          en: 'Atatürk made many reforms in the country. In 1928, Turkish got a new alphabet: the Latin-based Turkish alphabet you are learning today! Women won the right to vote in local elections in 1930 and in parliamentary elections in 1934.',
        },
      },
      {
        p: {
          tr: '1934’te Soyadı Kanunu çıktı ve herkes bir soyadı aldı. Meclis, Mustafa Kemal’e “Atatürk” soyadını verdi. Bu soyadı “Türklerin atası” demektir.',
          en: 'In 1934, the Surname Law was passed and everyone took a surname. The Assembly gave Mustafa Kemal the surname “Atatürk”, which means “father of the Turks”.',
        },
      },
      { h: { tr: '10 Kasım', en: '10 November' } },
      {
        p: {
          tr: 'Atatürk 10 Kasım 1938’de, sabah dokuzu beş geçe İstanbul’da, Dolmabahçe Sarayı’nda öldü. Bugün mezarı Ankara’daki Anıtkabir’dedir.',
          en: 'Atatürk died at five past nine in the morning on 10 November 1938, at Dolmabahçe Palace in İstanbul. Today his tomb is at Anıtkabir in Ankara.',
        },
      },
    ],
    glossary: [
      ['doğmak', 'to be born'],
      ['askerî okul', 'military school'],
      ['savaş', 'war'],
      ['komutan', 'commander'],
      ['işgal etmek', 'to occupy'],
      ['zafer', 'victory'],
      ['meclis', 'parliament, assembly'],
      ['cumhuriyet', 'republic'],
      ['cumhurbaşkanı', 'president'],
      ['soyadı', 'surname'],
      ['saygı duruşu', 'moment of silence'],
    ],
    note: {
      tr: 'Her yıl 10 Kasım’da saat 09.05’te Türkiye’de sirenler çalar. İnsanlar olduğu yerde durur, arabalar durur ve herkes iki dakika saygı duruşunda bulunur. O gün Türkiye’deyseniz siz de durabilirsiniz.',
      en: 'Every year on 10 November at 9:05 a.m., sirens sound across Turkey. People stop where they are, cars stop, and everyone stands in silence for two minutes. If you are in Turkey on that day, you can stop too.',
    },
  },
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
    category: 'culture',
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
    category: 'culture',
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
      { h: { tr: 'Bir Bayram Şarkısı', en: 'A Bayram Song' } },
      {
        p: {
          tr: 'Bayram denince birçok kişinin aklına bir şarkı gelir: Barış Manço’nun “Bugün Bayram” şarkısı. Barış Manço 1943’te İstanbul’da doğdu. Uzun saçları, bıyığı ve parmaklarındaki büyük yüzükleriyle tanındı. Televizyondaki “7’den 77’ye” programıyla dünyayı gezdi ve gördüğü ülkeleri Türkiye’ye anlattı.',
          en: 'When people think of bayram, many of them think of a song: “Bugün Bayram” (Today Is a Holiday) by Barış Manço. Barış Manço was born in İstanbul in 1943. He was known for his long hair, his moustache and the big rings on his fingers. With his TV programme “7’den 77’ye” (From 7 to 77), he travelled the world and told Turkey about the countries he saw.',
        },
      },
      {
        p: {
          tr: 'Türkiye’de çocuklar da büyükler de onu çok sevdi. Herkes ona “Barış Abi” dedi. Barış Manço 1 Şubat 1999’da vefat etti. Ama şarkıları bugün hâlâ her yerde dinleniyor ve o, Türkiye’nin simgelerinden biri.',
          en: 'In Turkey, children and adults alike loved him very much. Everyone called him “Barış Abi” (Big Brother Barış). Barış Manço passed away on 1 February 1999. But his songs are still listened to everywhere today, and he is one of the symbols of Turkey.',
        },
      },
      {
        video: {
          id: 'H5DpbAiw83k',
          title: 'Barış Manço - Bugün Bayram',
          caption: 'Barış Manço’nun “Bugün Bayram” şarkısı · “Bugün Bayram” (Today Is a Holiday), a song by Barış Manço. Video: netd müzik (YouTube)',
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
      ['abi', 'big brother; also a warm way to address an older man'],
      ['vefat etmek', 'to pass away'],
      ['simge', 'symbol'],
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
