document.addEventListener('DOMContentLoaded', () => {
    const classroomForm = document.getElementById('create-classroom-form');
    classroomForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(classroomForm);
        const classroom = {
            name: formData.get('classroom-name'),
            startTime: formData.get('start-time'),
            endTime: formData.get('end-time'),
            days: formData.get('days')
        };
        fetch('http://localhost:5000/api/classrooms', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(classroom)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Classroom created:', data);
        })
        .catch(error => console.error('Error:', error));
    });
    fetchData('/api/teachers', 'teachers-table');
    fetchData('/api/students', 'students-table');

    function fetchData(url, tableId) {
        fetch(`http://localhost:5000${url}`)
            .then(response => response.json())
            .then(data => {
                const table = document.getElementById(tableId);
                data.forEach(item => {
                    const row = document.createElement('tr');
                    Object.values(item).forEach(value => {
                        const cell = document.createElement('td');
                        cell.textContent = value;
                        row.appendChild(cell);
                    });
                    table.appendChild(row);
                });
            })
            .catch(error => console.error('Error:', error));
    }
});

