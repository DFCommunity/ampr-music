console.log("Player Started");

// APlayer scripts

const ap = new APlayer({
    container: document.getElementById('aplayer'),
    mini: false,
    autoplay: false,
    theme: '#FADFA3',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: 90,
    lrcType: 3,
    audio: [{
            name: 'Hikarunara',
            artist: 'Goose house',
            url: 'Goose house - Hikarunara.mp3',
            cover: 'https://raw.githubusercontent.com/DFCommunity/img-stack/master/AMPr.png',
            theme: '#ebd0c2'
        },
        {
            name: 'Oto No Naru Houe',
            artist: 'Goose house',
            url: 'Goose house - Oto No Naru Houe.mp3',
            cover: 'https://raw.githubusercontent.com/DFCommunity/img-stack/master/AMPr.png',
            theme: '#46718b'
        },
        {
            name: 'Silhouette',
            artist: 'KANA-BOON',
            url: 'KANA-BOON - Silhouette.mp3',
            cover: 'https://raw.githubusercontent.com/DFCommunity/img-stack/master/AMPr.png',
            theme: '#46718b'
        },
        {
            name: 'インフェルノ',
            artist: 'Mrs GREEN APPLE',
            url: 'Mrs GREEN APPLE - インフェルノ.mp3',
            cover: 'https://raw.githubusercontent.com/DFCommunity/img-stack/master/AMPr.png',
            theme: '#46718b'
        },
        {
            name: '青と夏',
            artist: 'Mrs GREEN APPLE',
            url: 'Mrs GREEN APPLE - 青と夏.mp3',
            cover: 'https://raw.githubusercontent.com/DFCommunity/img-stack/master/AMPr.png',
            theme: '#46718b'
        },
        {
            name: 'スパークル',
            artist: 'RADWIMPS',
            url: 'RADWIMPS - スパークル - movie ver.mp3',
            cover: 'https://raw.githubusercontent.com/DFCommunity/img-stack/master/AMPr.png',
            theme: '#46718b'
        },
        {
            name: 'silky heart',
            artist: 'Yui Horie',
            url: 'Yui Horie - silky heart.mp3',
            cover: 'https://raw.githubusercontent.com/DFCommunity/img-stack/master/AMPr.png',
            theme: '#46718b'
        },
        {
            name: 'INSIDE IDENTITY',
            artist: 'ZAQ',
            url: 'ZAQ - INSIDE IDENTITY.mp3',
            cover: 'https://raw.githubusercontent.com/DFCommunity/img-stack/master/AMPr.png',
            theme: '#46718b'
        },
        {
            name: 'PunIshment thIs worLd-VOICE',
            artist: 'ZAQ',
            url: 'ZAQ - PunIshment thIs worLd-VOICE-EpisodeΦ.mp3',
            cover: 'https://raw.githubusercontent.com/DFCommunity/img-stack/master/AMPr.png',
            theme: '#46718b'
        }
    ]
});

// Typedjs scripts
