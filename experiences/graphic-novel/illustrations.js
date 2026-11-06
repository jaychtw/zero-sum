// Generated from narrative/illustrations.v1.json; node scripts/build-illustrations.mjs
export const illustrations = {
  "schemaVersion": 1,
  "caption": {
    "en": "Provisional reference illustration",
    "zh": "暫用參考插畫"
  },
  "assets": {
    "chase": {
      "src": "assets/chase.webp",
      "width": 1280,
      "height": 720,
      "sha256": "15216234a22c50f6c68c987d03b5b6397d7792edfb5d8c05977d9db181e3541f",
      "rights": "NOT DOCUMENTED; owner review required before public production use",
      "alt": {
        "en": "Alex and his squad pursue a cult convoy through neon-lit streets.",
        "zh": "艾力克斯與小隊在霓虹雨夜中追擊邪教車隊。"
      }
    },
    "hospital": {
      "src": "assets/hospital.webp",
      "width": 1280,
      "height": 720,
      "sha256": "2a896f5fca2de6ed57e446031e1a9c047053d644da8fe405e28d90654483852c",
      "rights": "NOT DOCUMENTED; owner review required before public production use",
      "alt": {
        "en": "Alex and Misaki at the Downtown hospital.",
        "zh": "艾力克斯與美咲在下城區醫院。"
      }
    },
    "jacque": {
      "src": "assets/jacque.webp",
      "width": 1280,
      "height": 720,
      "sha256": "6a9b154d4004c642107976982871ac23d060ed1ef81af1f7ac55fddebe680e3a",
      "rights": "NOT DOCUMENTED; owner review required before public production use",
      "alt": {
        "en": "Alex and Jacque during the pursuit at a damaged bridge.",
        "zh": "艾力克斯與賈克在受損橋樑附近追擊。"
      }
    },
    "junction": {
      "src": "assets/junction.webp",
      "width": 1280,
      "height": 720,
      "sha256": "6b80d8343bfe2676b0b2303b06775a12c75fc0c5ce5587d97eac50a6f6216b3a",
      "rights": "NOT DOCUMENTED; owner review required before public production use",
      "alt": {
        "en": "The pursuit divides at a city junction.",
        "zh": "追擊路線在霓虹閃爍的交流道分開。"
      }
    },
    "misaki": {
      "src": "assets/misaki.webp",
      "width": 1280,
      "height": 720,
      "sha256": "caef2e7b87183446b4d574fdc0698eda7a93201b5e3045457902af87d9d51e2a",
      "rights": "NOT DOCUMENTED; owner review required before public production use",
      "alt": {
        "en": "Misaki during the Downtown pursuit.",
        "zh": "美咲在下城區追擊。"
      }
    },
    "sniper": {
      "src": "assets/sniper.webp",
      "width": 1280,
      "height": 720,
      "sha256": "53133acf4572da771a9d81cc1e144662cfe6402689651ab027b6c9dac44c9aa2",
      "rights": "NOT DOCUMENTED; owner review required before public production use",
      "alt": {
        "en": "Alex aims at Karl near the hangar as civilians pass behind the target.",
        "zh": "艾力克斯在機庫外瞄準卡爾，民眾從目標後方經過。"
      }
    },
    "tackle": {
      "src": "assets/tackle.webp",
      "width": 1280,
      "height": 720,
      "sha256": "f4fa65e59f6306843152188938e20032108695f37d84a560158e0061d88a621d",
      "rights": "NOT DOCUMENTED; owner review required before public production use",
      "alt": {
        "en": "Alex intercepts Karl near the tower.",
        "zh": "艾力克斯在塔樓附近攔截卡爾。"
      }
    },
    "wmd": {
      "src": "assets/wmd.webp",
      "width": 1280,
      "height": 720,
      "sha256": "39e1fad8b6157245949d75d4d2849db45ece62a6a66574f1821344fefcfa475a",
      "rights": "NOT DOCUMENTED; owner review required before public production use",
      "alt": {
        "en": "Alex approaches Karl outside the tower, beside a brilliant white device. Provisional art; the device depiction is not final canon.",
        "zh": "艾力克斯在塔外接近卡爾，旁邊是耀眼的白色裝置。暫用美術；裝置造型尚非正式設定。"
      },
      "allowedVariants": [
        "ascent-left"
      ]
    }
  },
  "variants": {
    "full": {
      "rect": [
        0,
        0,
        1,
        1
      ],
      "status": "active-ready"
    },
    "ascent-left": {
      "rect": [
        0,
        0,
        0.5882352941176471,
        0.5882352941176471
      ],
      "asset": "wmd",
      "status": "active-ready",
      "alt": {
        "en": "Alex approaches the upper tower exterior by jetpack, with the city below.",
        "zh": "艾力克斯以噴射背包接近塔樓頂部外緣，下方是城市街道。"
      }
    },
    "alex-alone": {
      "rect": [
        0.2,
        0.65,
        0.24,
        0.24
      ],
      "asset": "chase",
      "status": "candidate-only",
      "maxDisplayWidth": 307
    },
    "hangar-landmark": {
      "rect": [
        0.59,
        0,
        0.36,
        0.36
      ],
      "asset": "sniper",
      "status": "candidate-only",
      "maxDisplayWidth": 460
    },
    "restraint": {
      "rect": [
        0,
        0.05,
        0.58,
        0.58
      ],
      "asset": "sniper",
      "status": "candidate-only",
      "maxDisplayWidth": 742
    },
    "clinical": {
      "rect": [
        0,
        0,
        0.25,
        0.25
      ],
      "asset": "hospital",
      "status": "candidate-only",
      "maxDisplayWidth": 320
    },
    "alex-portrait": {
      "rect": [
        0.56,
        0.13,
        0.44,
        0.44
      ],
      "asset": "hospital",
      "status": "candidate-only",
      "maxDisplayWidth": 563
    }
  },
  "bindings": {
    "ZS-S003.P04": {
      "asset": "jacque",
      "variant": "full"
    },
    "ZS-S005.P01": {
      "asset": "sniper",
      "variant": "full"
    },
    "ZS-S005.P03": {
      "asset": "sniper",
      "variant": "full"
    },
    "ZS-S007.P01": {
      "asset": "jacque",
      "variant": "full"
    },
    "ZS-S008.P03": {
      "asset": "misaki",
      "variant": "full"
    },
    "ZS-S008.P04": {
      "asset": "misaki",
      "variant": "full"
    },
    "ZS-S010.P01": {
      "asset": "misaki",
      "variant": "full"
    },
    "ZS-S011.P01": {
      "asset": "sniper",
      "variant": "full"
    },
    "ZS-S013.P01": {
      "asset": "wmd",
      "variant": "ascent-left"
    },
    "ZS-S013.P02": {
      "asset": "wmd",
      "variant": "ascent-left"
    },
    "ZS-S013.P03": {
      "asset": "wmd",
      "variant": "ascent-left"
    },
    "ZS-S014.P01": {
      "asset": "tackle",
      "variant": "full"
    },
    "ZS-S016.P01": {
      "asset": "wmd",
      "variant": "ascent-left"
    },
    "ZS-S017.P01": {
      "asset": "hospital",
      "variant": "full"
    }
  }
};
