let PARAGRAPH_STYLE = `
    background-color:#00ffff;
    color:#ff00ff;
    font-size:24pt;
    font-family:'Times New Roman'
`;
const name = 'Сеть магазинов "ВСЁ ДЛЯ ДОМА"';
const day = new Date();
const today= `${day.getDate()}.${day.getMonth()+1}.${day.getFullYear()}`;
document.write(`<p align=center style="${PARAGRAPH_STYLE}">${name}</p><P>Сегодня ${today}</p>`);