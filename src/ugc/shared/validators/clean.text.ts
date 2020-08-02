export const nWords = ['nigger', 'cracker', 'beaner', 'queer', 'gook', 'chink', 'heeb']
export const cleanText = text => !nWords.some(word => text.includes(word))