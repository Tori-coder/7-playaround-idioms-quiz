// define idiomsArray
const idiomsArray = []
for (let i = 0; i < 25; i++) {
    const idiomObject = {
        idiom: `idiom${i}`,
        meanings: [`meaning${i}a`, `meaning${i}b`, `meaning${i}c`],
        answer: `meaning${i}a`
    };  
    idiomsArray.push(idiomObject);
}