const storyUrls = [
    './TeacherParentStory/StoryNav1.txt',
    './TeacherParentStory/StoryNav2.txt',
    './TeacherParentStory/StoryNav3.txt',
    './TeacherParentStory/Task1.txt',
    // ... other file paths
];

async function fetchStoryContent(index) {
    const response = await fetch(storyUrls[index]);
    const content = await response.text();
    return content;
}

async function displayCard(index) {
    const cardContainer = document.getElementById('card-container');
    const cardImage = document.getElementById('card-image');
    const cardText = document.getElementById('card-text');

    // Fade out the current content
    cardContainer.classList.remove('show-card');

    // Wait for the fade-out transition
    await new Promise(resolve => setTimeout(resolve, 500));

    // Update the content
    const textContent = await fetchStoryContent(storyContent[index].text);
    cardText.innerHTML = textContent;
    cardImage.style.backgroundImage = `url('${storyContent[index].image}')`;

    // Fade in the new content
    cardContainer.classList.add('show-card');
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

displayCard(0).then(() => {
    document.getElementById('card-container').classList.add('show-card');
});
