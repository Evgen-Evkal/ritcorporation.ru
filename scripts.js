function addTopic() {
    const topicTitle = document.getElementById('topicTitle').value;
    const topicContent = document.getElementById('topicContent').value;

    fetch('/forum/addTopic', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: topicTitle, content: topicContent }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Обновление интерфейса после успешного добавления темы
        const topicsList = document.getElementById('topicsList');
        const newTopic = document.createElement('div');
        newTopic.innerHTML = 
            <><h3>${data.title}</h3><p>${data.content}</p></>
        ;
        topicsList.appendChild(newTopic);
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
}
