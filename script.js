const storyUrls = [
    './TeacherParentStory/StoryNav1.txt',
    './TeacherParentStory/StoryNav2.txt',
    './TeacherParentStory/StoryNav3.txt',
    './TeacherParentStory/StoryNav4.txt',
    './TeacherParentStory/Task1.txt',
    // ... other file paths
];

async function fetchStoryContent(index) {
    const response = await fetch(storyUrls[index]);
    const content = await response.text();
    return content;
}

async function displayCard(index) {
    const content = await fetchStoryContent(index);
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = content; // Display the fetched content
}

let currentCardIndex = 0;

document.getElementById('next-btn').addEventListener('click', async () => {
    if (currentCardIndex < storyUrls.length - 1) {
        currentCardIndex++;
        await displayCard(currentCardIndex);
    }
});

document.getElementById('prev-btn').addEventListener('click', async () => {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        await displayCard(currentCardIndex);
    }
});

displayCard(0);
