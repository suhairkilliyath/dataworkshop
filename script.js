const story = [
    {
        title: "Scenario 1",
        content: "The sun had already set by the time Chandran pulled up to his child's school for the parent-teacher conference. [...]"
        // The rest of the scenario
    },
    {
        title: "Task 1",
        content: "Write down any information you believe would be beneficial for parents and teachers. Think about how this data might empower us to understand our children's academic journey better."
    },
    // Add Scenario 2 and Task 2 in the same format
];

function displayStory() {
    const storyContainer = document.getElementById('story-container');
    const taskContainer = document.getElementById('task-container');

    story.forEach(section => {
        const sectionDiv = document.createElement('div');
        sectionDiv.classList.add(section.title.startsWith('Scenario') ? 'story-section' : 'task-section');
        sectionDiv.innerHTML = `<h2>${section.title}</h2><p>${section.content}</p>`;
        
        if (section.title.startsWith('Scenario')) {
            storyContainer.appendChild(sectionDiv);
        } else {
            taskContainer.appendChild(sectionDiv);
        }
    });
}

// Call the function to display the story and tasks
displayStory();
