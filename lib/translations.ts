export const translations = {
  en: {
    navHairCare: "Hair care",
    navBeauty: "Beauty",
    navHotTopics: "Hot topics",
    navAbout: "About",
    heroTitle: "Typ 4 hair at the centre.",
    heroSubtitle:
      "Learn everything about your coily hair, in an easy and understandable way, so you can confidently embrace and care for it.",
    heroCta: "Read more",
    hairCareTitle: "Hair care",
    beautyTitle: "Beauty",
    newsletterTitle: "Sign up for our newsletter",
    newsletterSubtitle: "Discover the latest trends and hair care tips.",
    newsletterFirstNamePlaceholder: "Your first name",
    newsletterPlaceholder: "Your email address",
    newsletterButton: "Subscribe",
    hairCareHubTitle: "Hair Care",
    hairCareHubSubtitle: "Discover everything you need for your coils.",
    beautyHubTitle: "Beauty",
    beautyHubSubtitle: "Beauty tips and news for every hair type.",
    hotTopicsHubTitle: "Hot Topics",
    hotTopicsHubSubtitle: "The latest culture and community conversations.",
    trendingPostsTitle: "Trending Posts",
    aboutHeading: "About It's Coily",
    aboutIntro1:
      "Itscoily is a blog centred around natural type 4 hair. The platform was founded in 2021 with the aim to help you take better care of your beautiful coils.",
    aboutIntro2:
      "Do you have type 4 hair? Then you've come to the right place. Learn everything about your coils, in an easy and understandable way. So you can confidently embrace and care for your hair.",
    aboutQuote: '"Your hair deserves recognition"',
    missionTitle: "Mission",
    missionText:
      "Our mission at It's Coily is to give you the tools you need to care for your type 4 hair with confidence. We understand that sometimes it can be overwhelming to know where to start, or that there isn't enough information available. We also want to break down the negative stigma surrounding the care of tighter hair textures and increase the representation of type 4 hair.",
    visionTitle: "Vision",
    visionText:
      "Our vision is to create a community where, regardless of your hair type, you have the knowledge and confidence to take care of your natural hair and embrace it as it is.",
    founderTitle: "Aurane | Founder of It's Coily",
    founderText:
      "Hi there! I'm Aurane, a passionate natural hair enthusiast who has embraced the beauty of natural hair since 2014. My journey has been filled with learning and discovery, and I could talk about natural hair all day long. As I began wearing my natural hair out more often, I noticed an increasing number of questions from friends and family. Realizing they probably weren't the only ones curious about natural hair care, I decided to start It's Coily.",
  },
  nl: {
    navHairCare: "Haarverzorging",
    navBeauty: "Beauty",
    navHotTopics: "Hot topics",
    navAbout: "Over ons",
    heroTitle: "Type 4 haar centraal.",
    heroSubtitle:
      "Leer alles over jouw krullend haar, op een makkelijke en begrijpelijke manier, zodat je het met vertrouwen kan omarmen en verzorgen.",
    heroCta: "Lees meer",
    hairCareTitle: "Haarverzorging",
    beautyTitle: "Beauty",
    newsletterTitle: "Schrijf je in voor onze nieuwsbrief",
    newsletterSubtitle: "Ontdek de laatste trends en haarverzorgingstips.",
    newsletterFirstNamePlaceholder: "Jouw voornaam",
    newsletterPlaceholder: "Jouw e-mailadres",
    newsletterButton: "Inschrijven",
    hairCareHubTitle: "Haarverzorging",
    hairCareHubSubtitle: "Ontdek alles wat je nodig hebt voor jouw krullen.",
    beautyHubTitle: "Beauty",
    beautyHubSubtitle: "Beautytips en nieuws voor elk haartype.",
    hotTopicsHubTitle: "Hot topics",
    hotTopicsHubSubtitle: "De laatste gesprekken over cultuur en community.",
    trendingPostsTitle: "Populaire artikelen",
    aboutHeading: "Over It's Coily",
    aboutIntro1:
      "Itscoily is een blog rond natuurlijk type 4 haar. Het platform werd in 2021 opgericht om je te helpen beter voor jouw prachtige krullen te zorgen.",
    aboutIntro2:
      "Heb jij type 4 haar? Dan ben je hier aan het juiste adres. Leer alles over jouw krullen, op een makkelijke en begrijpelijke manier. Zodat je jouw haar met vertrouwen kan omarmen en verzorgen.",
    aboutQuote: '"Jouw haar verdient erkenning"',
    missionTitle: "Missie",
    missionText:
      "Onze missie bij It's Coily is om jou de tools te geven die je nodig hebt om met vertrouwen voor jouw type 4 haar te zorgen. We begrijpen dat het soms overweldigend kan zijn om te weten waar te beginnen, of dat er niet genoeg informatie beschikbaar is. Daarnaast willen we ook het negatieve stigma rond de verzorging van strakkere haartexturen doorbreken en de representatie van type 4 haar vergroten.",
    visionTitle: "Visie",
    visionText:
      "Onze visie is om een community te creëren waar je, ongeacht jouw haartype, de kennis en het vertrouwen hebt om voor jouw natuurlijke haar te zorgen en het te omarmen zoals het is.",
    founderTitle: "Aurane | Oprichter van It's Coily",
    founderText:
      "Hoi! Ik ben Aurane, een gepassioneerde natural hair enthousiast die sinds 2014 de schoonheid van natuurlijk haar omarmt. Mijn reis stond vol leren en ontdekken, en ik kan de hele dag praten over natuurlijk haar. Naarmate ik mijn natuurlijke haar vaker los begon te dragen, merkte ik steeds meer vragen op van vrienden en familie. Ik besefte dat zij waarschijnlijk niet de enigen waren die nieuwsgierig waren naar haarverzorging, en besloot om It's Coily te starten.",
  },
} as const;
export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;
