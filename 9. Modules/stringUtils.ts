export function capitalize(word: string): string {
    let capWord: string;
    capWord = word[0].toUpperCase() + word.slice(1);
    return capWord;
};