export function getRandomName() {
    const firstNames = ["Varun", "Samay", "Tannu", "Kristy", "Shreya", "Arjun", "Vinay", "Shri"];
    const lastNames = ["Joshi", "Aggarwal", "Sharma", "Mehta", "Goyal", "Yadav"];
    
    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    
    return `${randomFirstName} ${randomLastName}`;
}

const messages = [
    "Nice Video", 
    "Loving it", 
    "That's awesome!", 
    "Video is too good", 
    "I like this video", 
    "cool", 
    "Awesome video"

];
const emojis = ["😊", "👍", "🔥", "🎉", "😎", "❤️","😍", "🙌"];

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}


export function generateRandomChatMessage() {
    const message = getRandomItem(messages);
    const emoji = Math.random() > 0.5 ? getRandomItem(emojis) : "";  
    
    return `${message} ${emoji}`;
}

