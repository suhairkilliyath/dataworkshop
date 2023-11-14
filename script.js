const storyContent = [
    {
        text: './TeacherParentStory/StoryNav1.txt',
        image: './path-to-image/story1.jpg'
    },
    {
        text: './TeacherParentStory/StoryNav2.txt',
        image: './path-to-image/story2.jpg'
    },
    {
        text: './TeacherParentStory/StoryNav3.txt',
        image: './path-to-image/story3.jpg'
    },
    {
        text: './TeacherParentStory/Task1.txt',
        image: './path-to-image/Task1.jpg'
    },
    // ... other content
];

async function fetchStoryContent(story) {
    try {
        const response = await fetch(story.text);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const textContent = await response.text();
        return {
            text: textContent,
            image: story.image
        };
    } catch (error) {
        console.error('Fetch error:', error);
        return {
            text: "Content could not be loaded.",
            image: story.image
        };
    }
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
    const content = await fetchStoryContent(storyContent[index]);
    cardText.innerHTML = content.text;
    cardImage.style.backgroundImage = `url('${content.image}')`;

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
