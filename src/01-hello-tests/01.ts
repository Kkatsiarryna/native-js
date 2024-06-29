
export const value01_01 = '01_01';


const sentence = 'hello my friends!';


export function sum(a: number, b: number){
    return a + b;
}

export function mult(a: number, b: number){
    return a * b;
}


export function splitIntoWords(sentence: string)  {
    const words =  sentence.toLocaleLowerCase().split(' ')
    return words.filter(w => w !== '')
        .map(w=> w.replace("!", ''));
}

console.log('test')