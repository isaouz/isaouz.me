const tiles = [
    { title: "Netherlands", url: "netherlands.html", image: "https://picsum.photos/seed/netherlands/600/400" },
    { title: "South Korea", url: "south-korea.html", image: "https://picsum.photos/seed/korea/600/400" },
    { title: "Cycling", url: "cycling.html", image: "https://picsum.photos/seed/cycling/600/400" },
    { title: "Bass Guitar", url: "bass-guitar.html", image: "https://picsum.photos/seed/guitar/600/400" },
    { title: "Netherlands 2", url: "netherlands-2.html", image: "https://picsum.photos/seed/amsterdam/600/400" },
    { title: "South Korea 2", url: "south-korea-2.html", image: "https://picsum.photos/seed/seoul/600/400" },
    { title: "Cycling 2", url: "cycling-2.html", image: "https://picsum.photos/seed/bike/600/400" },
    { title: "Bass Guitar 2", url: "bass-guitar-2.html", image: "https://picsum.photos/seed/bass/600/400" },
    { title: "Netherlands 3", url: "netherlands-3.html", image: "https://picsum.photos/seed/dutch/600/400" },
    { title: "South Korea 3", url: "south-korea-3.html", image: "https://picsum.photos/seed/busan/600/400" },
    { title: "Cycling 3", url: "cycling-3.html", image: "https://picsum.photos/seed/road/600/400" },
    { title: "Bass Guitar 3", url: "bass-guitar-3.html", image: "https://picsum.photos/seed/music/600/400" },
];

const sizes = [
    { col: 2, row: 1 },
    { col: 2, row: 1 },
    { col: 3, row: 1 },
    { col: 3, row: 1 },
    { col: 3, row: 1 },
    { col: 3, row: 1 },
    { col: 4, row: 1 },
    { col: 4, row: 1 },
    { col: 3, row: 2 },
    { col: 3, row: 2 },
    { col: 4, row: 2 },
    { col: 6, row: 2 },
];

function getRandomSize() {
    return sizes[Math.floor(Math.random() * sizes.length)];
}

function buildGrid(tileData) {
    const bento = document.querySelector('.bento');
    bento.innerHTML = '';

    tileData.forEach((tile) => {
        const size = getRandomSize();
        const a = document.createElement('a');
        a.href = tile.url;
        a.className = 'tile';
        a.style.gridColumn = `span ${size.col}`;
        a.style.gridRow = `span ${size.row}`;

        a.innerHTML = `
            <img src="${tile.image}" alt="${tile.title}">
            <span>${tile.title}</span>
        `;

        bento.appendChild(a);
    });
}

function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

function shuffleGrid() {
    const shuffledTiles = shuffle(tiles);
    const bento = document.querySelector('.bento');
    bento.innerHTML = '';

    shuffledTiles.forEach((tile) => {
        const size = getRandomSize();
        const a = document.createElement('a');
        a.href = tile.url;
        a.className = 'tile';
        a.style.gridColumn = `span ${size.col}`;
        a.style.gridRow = `span ${size.row}`;

        a.innerHTML = `
            <img src="${tile.image}" alt="${tile.title}">
            <span>${tile.title}</span>
        `;

        bento.appendChild(a);
    });
}

buildGrid(tiles);