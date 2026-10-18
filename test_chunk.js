const text = "Hello there. How are you? I am fine! \n\n This is a test.";
const cleanText = text.replace(/[*#]/g, '');
const chunks = cleanText.match(/[^.!?\n]+[.!?\n]+/g) || [cleanText];
console.log(chunks.map(c => c.trim()).filter(c => c.length > 0));
