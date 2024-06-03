document.getElementById('create-topic-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('topic-title').value;
    const content = document.getElementById('topic-content').value;
    
    document.getElementById('create-topic-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const title = document.getElementById('topic-title').value;
        const content = document.getElementById('topic-content').value;
    
        // Создаем объект с данными для отправки на сервер
        const data = {
            title: title,
            content: content
        };
    
        fetch('file:///C:/Users/Versh/OneDrive/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/forum.html', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.ok) {
                // Обработка успешного ответа от сервера
                return response.json();
            } else {
                // Обработка ошибки
                throw new Error('Произошла ошибка при отправке данных на сервер');
            }
        })
        .then(data => {
            // Обработка ответа от сервера после успешной обработки данных
            console.log(data);
            // Дополнительные действия после успешной обработки формы
        })
        .catch(error => {
            // Обработка ошибок
            console.error(error);
        });
    });
    
    // Например, можно использовать fetch() для отправки данных на сервер

    // После обработки формы можно добавить перенаправление на страницу с новой темой или обновление списка тем
});
