function solution(genres = [], plays = []) {
    /*
    두개씩
    장르 카운트로 줄세우고
    곡 순서별로 줄세우고
    두개씩 뽑아내면 끝?
    */
    const map = new Map();
    for (let i = 0; i < genres.length; i++) {
        const genre = genres[i];
        const play = plays[i];
        if (!map.has(genres[i])) map.set(genre, [0, []]);
        const value = map.get(genre);
        value[0] += play;
        value[1].push([i, play]);
    }
    // console.log(`< map >`, map);

    const sortedEntries = [...map.entries()].sort((a, b) => -a[1][0] + b[1][0]);
    // console.log(`< a >`, JSON.stringify(en));

    let answer = [];
    for (const [key, [count, v]] of sortedEntries) {
        v.sort((a, b) => a[1] - b[1]);
        answer.push(v.pop()[0]);
        answer.push(v.pop()[0]);
    }

    return answer;
}

console.log(
    `<  >`,
    solution(
        ['classic', 'pop', 'classic', 'classic', 'pop'],
        [500, 600, 150, 800, 2500],
    ),
);
