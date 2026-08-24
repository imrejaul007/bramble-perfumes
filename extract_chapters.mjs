import fs from 'fs';

const content = fs.readFileSync('src/StoryPortal.jsx', 'utf8');

// Extract all chapters
const chapterRegex = /\{\s*id:\s*\d+,\s*title:\s*"([^"]+)",\s*content:\s*`([\s\S]*?)`,\s*isPlaceholder:/g;

let match;
const chapters = [];

while ((match = chapterRegex.exec(content)) !== null) {
    chapters.push({
        title: match[1],
        content: match[2]
    });
}

console.log(`Found ${chapters.length} chapters:\n`);

chapters.forEach((ch, i) => {
    console.log(`\n=== CHAPTER ${i + 1}: ${ch.title} ===`);
    console.log(`Character count: ${ch.content.length}`);
    console.log(`Line count: ${ch.content.split('\n').length}`);
});
