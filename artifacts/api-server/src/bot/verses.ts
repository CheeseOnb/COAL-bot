export type Translation = "NLT" | "KJV";

export interface VerseData {
  reference: string;
  NLT: string;
  KJV: string;
}

export type Category =
  | "afraid"
  | "anxious"
  | "forgiveness"
  | "joy"
  | "overwhelmed"
  | "protection"
  | "wisdom"
  | "understanding"
  | "rest_renewal"
  | "authority"
  | "identity_in_christ"
  | "covenant_with_jesus";

export const CATEGORY_LABELS: Record<Category, string> = {
  afraid: "Afraid",
  anxious: "Anxious",
  forgiveness: "Forgiveness",
  joy: "Joy",
  overwhelmed: "Overwhelmed",
  protection: "Protection",
  wisdom: "Wisdom",
  understanding: "Understanding",
  rest_renewal: "Rest & Renewal",
  authority: "Authority",
  identity_in_christ: "Identity in Christ",
  covenant_with_jesus: "Covenant with Jesus",
};

export const verses: Record<Category, VerseData[]> = {
  afraid: [
    {
      reference: "Psalm 121:3",
      NLT: "He will not let you stumble; the one who watches over you will not slumber.",
      KJV: "He will not suffer thy foot to be moved: he that keepeth thee will not slumber.",
    },
    {
      reference: "Isaiah 41:13",
      NLT: "For I hold you by your right hand — I, the Lord your God. And I say to you, 'Don't be afraid. I am here to help you.'",
      KJV: "For I the Lord thy God will hold thy right hand, saying unto thee, Fear not; I will help thee.",
    },
    {
      reference: "James 4:8",
      NLT: "Come close to God, and God will come close to you. Wash your hands, you sinners; purify your hearts, for your loyalty is divided between God and the world.",
      KJV: "Draw nigh to God, and he will draw nigh to you. Cleanse your hands, ye sinners; and purify your hearts, ye double minded.",
    },
    {
      reference: "Psalm 56:3",
      NLT: "But when I am afraid, I will put my trust in you.",
      KJV: "What time I am afraid, I will trust in thee.",
    },
    {
      reference: "Joshua 1:9",
      NLT: "This is my command — be strong and courageous! Do not be afraid or discouraged. For the Lord your God is with you wherever you go.",
      KJV: "Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou dismayed: for the Lord thy God is with thee whithersoever thou goest.",
    },
  ],
  anxious: [
    {
      reference: "John 8:12",
      NLT: "Jesus spoke to the people once more and said, 'I am the light of the world. If you follow me, you won't have to walk in darkness, because you will have the light that leads to life.'",
      KJV: "Then spake Jesus again unto them, saying, I am the light of the world: he that followeth me shall not walk in darkness, but shall have the light of life.",
    },
    {
      reference: "Philippians 4:6-7",
      NLT: "Don't worry about anything; instead, pray about everything. Tell God what you need, and thank him for all he has done. Then you will experience God's peace, which exceeds anything we can understand. His peace will guard your hearts and minds as you live in Christ Jesus.",
      KJV: "Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God. And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus.",
    },
    {
      reference: "James 1:17",
      NLT: "Whatever is good and perfect is a gift coming down to us from God our Father, who created all the lights in the heavens. He never changes or casts a shifting shadow.",
      KJV: "Every good gift and every perfect gift is from above, and cometh down from the Father of lights, with whom is no variableness, neither shadow of turning.",
    },
    {
      reference: "1 Peter 5:7",
      NLT: "Give all your worries and cares to God, for he cares about you.",
      KJV: "Casting all your care upon him; for he careth for you.",
    },
    {
      reference: "Psalm 94:19",
      NLT: "When doubts filled my mind, your comfort gave me renewed hope and cheer.",
      KJV: "In the multitude of my thoughts within me thy comforts delight my soul.",
    },
  ],
  forgiveness: [
    {
      reference: "1 John 1:9",
      NLT: "But if we confess our sins to him, he is faithful and just to forgive us our sins and to cleanse us from all wickedness.",
      KJV: "If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness.",
    },
    {
      reference: "Psalm 103:10-12",
      NLT: "He does not punish us for all our sins; he does not deal harshly with us, as we deserve. For his unfailing love toward those who fear him is as great as the height of the heavens above the earth. He has removed our sins as far from us as the east is from the west.",
      KJV: "He hath not dealt with us after our sins; nor rewarded us according to our iniquities. For as the heaven is high above the earth, so great is his mercy toward them that fear him. As far as the east is from the west, so far hath he removed our transgressions from us.",
    },
    {
      reference: "Isaiah 1:18",
      NLT: "'Come now, let's settle this,' says the Lord. 'Though your sins are like scarlet, I will make them as white as snow. Though they are red like crimson, I will make them as white as wool.'",
      KJV: "Come now, and let us reason together, saith the Lord: though your sins be as scarlet, they shall be as white as snow; though they be red like crimson, they shall be as wool.",
    },
    {
      reference: "Ephesians 1:7",
      NLT: "He is so rich in kindness and grace that he purchased our freedom with the blood of his Son and forgave our sins.",
      KJV: "In whom we have redemption through his blood, the forgiveness of sins, according to the riches of his grace.",
    },
  ],
  joy: [
    {
      reference: "Nehemiah 8:10",
      NLT: "And Nehemiah continued, 'Go and celebrate with a feast of rich foods and sweet drinks, and share gifts of food with people who have nothing prepared. This is a sacred day before our Lord. Don't be dejected and sad, for the joy of the Lord is your strength!'",
      KJV: "Then he said unto them, Go your way, eat the fat, and drink the sweet, and send portions unto them for whom nothing is prepared: for this day is holy unto our Lord: neither be ye sorry; for the joy of the Lord is your strength.",
    },
    {
      reference: "Psalm 16:11",
      NLT: "You will show me the way of life, granting me the joy of your presence and the pleasures of living with you forever.",
      KJV: "Thou wilt shew me the path of life: in thy presence is fulness of joy; at thy right hand there are pleasures for evermore.",
    },
    {
      reference: "John 15:11",
      NLT: "I have told you these things so that you will be filled with my joy. Yes, your joy will overflow!",
      KJV: "These things have I spoken unto you, that my joy might remain in you, and that your joy might be full.",
    },
    {
      reference: "Philippians 4:4",
      NLT: "Always be full of joy in the Lord. I say it again — rejoice!",
      KJV: "Rejoice in the Lord alway: and again I say, Rejoice.",
    },
  ],
  overwhelmed: [
    {
      reference: "Psalm 61:2",
      NLT: "From the ends of the earth, I cry to you for help when my heart is overwhelmed. Lead me to the towering rock of safety.",
      KJV: "From the end of the earth will I cry unto thee, when my heart is overwhelmed: lead me to the rock that is higher than I.",
    },
    {
      reference: "Matthew 11:28-30",
      NLT: "Then Jesus said, 'Come to me, all of you who are weary and carry heavy burdens, and I will give you rest. Take my yoke upon you. Let me teach you, because I am humble and gentle at heart, and you will find rest for your souls. For my yoke is easy to bear, and the burden I give you is light.'",
      KJV: "Come unto me, all ye that labour and are heavy laden, and I will give you rest. Take my yoke upon you, and learn of me; for I am meek and lowly in heart: and ye shall find rest unto your souls. For my yoke is easy, and my burden is light.",
    },
    {
      reference: "Psalm 55:22",
      NLT: "Give your burdens to the Lord, and he will take care of you. He will not permit the godly to slip and fall.",
      KJV: "Cast thy burden upon the Lord, and he shall sustain thee: he shall never suffer the righteous to be moved.",
    },
    {
      reference: "Isaiah 43:2",
      NLT: "When you go through deep waters, I will be with you. When you go through rivers of difficulty, you will not drown. When you walk through the fire of oppression, you will not be burned up; the flames will not consume you.",
      KJV: "When thou passest through the waters, I will be with thee; and through the rivers, they shall not overflow thee: when thou walkest through the fire, thou shalt not be burned; neither shall the flame kindle upon thee.",
    },
  ],
  protection: [
    {
      reference: "Psalm 91:1-2",
      NLT: "Those who live in the shelter of the Most High will find rest in the shadow of the Almighty. This I declare about the Lord: He alone is my refuge, my place of safety; he is my God, and I trust him.",
      KJV: "He that dwelleth in the secret place of the most High shall abide under the shadow of the Almighty. I will say of the Lord, He is my refuge and my fortress: my God; in him will I trust.",
    },
    {
      reference: "Psalm 121:7-8",
      NLT: "The Lord keeps you from all harm and watches over your life. The Lord keeps watch over you as you come and go, both now and forever.",
      KJV: "The Lord shall preserve thee from all evil: he shall preserve thy soul. The Lord shall preserve thy going out and thy coming in from this time forth, and even for evermore.",
    },
    {
      reference: "Isaiah 54:17",
      NLT: "But in that coming day no weapon turned against you will succeed. You will silence every voice raised up to accuse you. These benefits are enjoyed by the servants of the Lord; their vindication will come from me. I, the Lord, have spoken!",
      KJV: "No weapon that is formed against thee shall prosper; and every tongue that shall rise against thee in judgment thou shalt condemn. This is the heritage of the servants of the Lord, and their righteousness is of me, saith the Lord.",
    },
    {
      reference: "2 Thessalonians 3:3",
      NLT: "But the Lord is faithful; he will strengthen you and guard you from the evil one.",
      KJV: "But the Lord is faithful, who shall stablish you, and keep you from evil.",
    },
  ],
  wisdom: [
    {
      reference: "James 1:5",
      NLT: "If you need wisdom, ask our generous God, and he will give it to you. He will not rebuke you for asking.",
      KJV: "If any of you lack wisdom, let him ask of God, that giveth to all men liberally, and upbraideth not; and it shall be given him.",
    },
    {
      reference: "Proverbs 2:6",
      NLT: "For the Lord grants wisdom! From his mouth come knowledge and understanding.",
      KJV: "For the Lord giveth wisdom: out of his mouth cometh knowledge and understanding.",
    },
    {
      reference: "Proverbs 4:7",
      NLT: "Getting wisdom is the wisest thing you can do! And whatever else you do, develop good judgment.",
      KJV: "Wisdom is the principal thing; therefore get wisdom: and with all thy getting get understanding.",
    },
    {
      reference: "Colossians 2:2-3",
      NLT: "I want them to be encouraged and knit together by strong ties of love. I want them to have complete confidence that they understand God's mysterious plan, which is Christ himself. In him lie hidden all the treasures of wisdom and knowledge.",
      KJV: "That their hearts might be comforted, being knit together in love, and unto all riches of the full assurance of understanding, to the acknowledgement of the mystery of God, and of the Father, and of Christ; In whom are hid all the treasures of wisdom and knowledge.",
    },
  ],
  understanding: [
    {
      reference: "Proverbs 3:5",
      NLT: "Trust in the Lord with all your heart; do not depend on your own understanding.",
      KJV: "Trust in the Lord with all thine heart; and lean not unto thine own understanding.",
    },
    {
      reference: "Psalm 119:130",
      NLT: "The teaching of your word gives light, so even the simple can understand.",
      KJV: "The entrance of thy words giveth light; it giveth understanding unto the simple.",
    },
    {
      reference: "Ephesians 1:18",
      NLT: "I pray that your hearts will be flooded with light so that you can understand the confident hope he has given to those he called — his holy people who are his rich and glorious inheritance.",
      KJV: "The eyes of your understanding being enlightened; that ye may know what is the hope of his calling, and what the riches of the glory of his inheritance in the saints.",
    },
    {
      reference: "Luke 24:45",
      NLT: "Then he opened their minds to understand the Scriptures.",
      KJV: "Then opened he their understanding, that they might understand the scriptures.",
    },
  ],
  rest_renewal: [
    {
      reference: "Matthew 11:28",
      NLT: "Then Jesus said, 'Come to me, all of you who are weary and carry heavy burdens, and I will give you rest.'",
      KJV: "Come unto me, all ye that labour and are heavy laden, and I will give you rest.",
    },
    {
      reference: "Isaiah 40:31",
      NLT: "But those who trust in the Lord will find new strength. They will soar high on wings like eagles. They will run and not grow weary. They will walk and not faint.",
      KJV: "But they that wait upon the Lord shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint.",
    },
    {
      reference: "Psalm 23:1-3",
      NLT: "The Lord is my shepherd; I have all that I need. He lets me rest in green meadows; he leads me beside peaceful streams. He renews my strength. He guides me along right paths, bringing honor to his name.",
      KJV: "The Lord is my shepherd; I shall not want. He maketh me to lie down in green pastures: he leadeth me beside the still waters. He restoreth my soul: he leadeth me in the paths of righteousness for his name's sake.",
    },
    {
      reference: "2 Corinthians 4:16",
      NLT: "That is why we never give up. Though our bodies are dying, our spirits are being renewed every day.",
      KJV: "For which cause we faint not; but though our outward man perish, yet the inward man is renewed day by day.",
    },
  ],
  authority: [
    {
      reference: "Luke 10:19",
      NLT: "Look, I have given you authority over all the power of the enemy, and you can walk among snakes and scorpions and crush them. Nothing will injure you.",
      KJV: "Behold, I give unto you power to tread on serpents and scorpions, and over all the power of the enemy: and nothing shall by any means hurt you.",
    },
    {
      reference: "Mark 16:17-18",
      NLT: "These miraculous signs will accompany those who believe: They will cast out demons in my name, and they will speak in new languages. They will be able to handle snakes with safety, and if they drink anything poisonous, it won't hurt them. They will be able to place their hands on the sick, and they will be healed.",
      KJV: "And these signs shall follow them that believe; In my name shall they cast out devils; they shall speak with new tongues; They shall take up serpents; and if they drink any deadly thing, it shall not hurt them; they shall lay hands on the sick, and they shall recover.",
    },
    {
      reference: "Ephesians 1:19-21",
      NLT: "I also pray that you will understand the incredible greatness of God's power for us who believe him. This is the same mighty power that raised Christ from the dead and seated him in the place of honor at God's right hand in the heavenly realms. Now he is far above any ruler or authority or power or leader or anything else — not only in this world but also in the world to come.",
      KJV: "And what is the exceeding greatness of his power to us-ward who believe, according to the working of his mighty power, Which he wrought in Christ, when he raised him from the dead, and set him at his own right hand in the heavenly places, Far above all principality, and power, and might, and dominion, and every name that is named, not only in this world, but also in that which is to come.",
    },
    {
      reference: "James 4:7",
      NLT: "So humble yourselves before God. Resist the devil, and he will flee from you.",
      KJV: "Submit yourselves therefore to God. Resist the devil, and he will flee from you.",
    },
  ],
  identity_in_christ: [
    {
      reference: "2 Corinthians 5:17",
      NLT: "This means that anyone who belongs to Christ has become a new person. The old life is gone; a new life has begun!",
      KJV: "Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new.",
    },
    {
      reference: "Galatians 2:20",
      NLT: "My old self has been crucified with Christ. It is no longer I who live, but Christ lives in me. So I live in this earthly body by trusting in the Son of God, who loved me and gave himself for me.",
      KJV: "I am crucified with Christ: nevertheless I live; yet not I, but Christ liveth in me: and the life which I now live in the flesh I live by the faith of the Son of God, who loved me, and gave himself for me.",
    },
    {
      reference: "Ephesians 2:10",
      NLT: "For we are God's masterpiece. He has created us anew in Christ Jesus, so we can do the good things he planned for us long ago.",
      KJV: "For we are his workmanship, created in Christ Jesus unto good works, which God hath before ordained that we should walk in them.",
    },
    {
      reference: "1 Peter 2:9",
      NLT: "But you are not like that, for you are a chosen people. You are royal priests, a holy nation, God's very own possession. As a result, you can show others the goodness of God, for he called you out of the darkness into his wonderful light.",
      KJV: "But ye are a chosen generation, a royal priesthood, an holy nation, a peculiar people; that ye should shew forth the praises of him who hath called you out of darkness into his marvellous light.",
    },
  ],
  covenant_with_jesus: [
    {
      reference: "Hebrews 8:6",
      NLT: "But now Jesus, our High Priest, has been given a ministry that is far superior to the old priesthood, for he is the one who mediates for us a far better covenant with God, based on better promises.",
      KJV: "But now hath he obtained a more excellent ministry, by how much also he is the mediator of a better covenant, which was established upon better promises.",
    },
    {
      reference: "Hebrews 13:20-21",
      NLT: "Now may the God of peace — who brought up from the dead our Lord Jesus, the great Shepherd of the sheep, and ratified an eternal covenant with his blood — may he equip you with all you need for doing his will. May he produce in you, through the power of Jesus Christ, every good thing that is pleasing to him. All glory to him forever and ever! Amen.",
      KJV: "Now the God of peace, that brought again from the dead our Lord Jesus, that great shepherd of the sheep, through the blood of the everlasting covenant, Make you perfect in every good work to do his will, working in you that which is wellpleasing in his sight, through Jesus Christ; to whom be glory for ever and ever. Amen.",
    },
    {
      reference: "Luke 22:20",
      NLT: "After supper he took another cup of wine and said, 'This cup is the new covenant between God and his people — an agreement confirmed with my blood, which is poured out as a sacrifice for you.'",
      KJV: "Likewise also the cup after supper, saying, This cup is the new testament in my blood, which is shed for you.",
    },
    {
      reference: "Hebrews 9:15",
      NLT: "That is why he is the one who mediates a new covenant between God and people, so that all who are called can receive the eternal inheritance God has promised them. For Christ died to set them free from the penalty of the sins they had committed under that first covenant.",
      KJV: "And for this cause he is the mediator of the new testament, that by means of death, for the redemption of the transgressions that were under the first testament, they that are called might receive the promise of eternal inheritance.",
    },
  ],
};

export function getRandomVerse(category: Category): VerseData {
  const list = verses[category];
  return list[Math.floor(Math.random() * list.length)];
}

export function getAllCategories(): Category[] {
  return Object.keys(verses) as Category[];
}
