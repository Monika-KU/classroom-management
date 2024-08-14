import React, { useEffect, useState } from 'react';
function ClassroomList() {
  const [classrooms, setClassrooms] = useState([]);
  useEffect(() => {
    fetch('https://classroom-management.vercel.app/api/classrooms')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setClassrooms(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Classrooms</h1>
      <ul>
        {classrooms.map(classroom => (
          <li key={classroom.id}>
            <strong>Class:</strong> {classroom.class}, <strong>Room:</strong> {classroom.roomNumber}
            <br />
            <strong>Teacher:</strong> {classroom.teachers.map(teacher => teacher.label).join(', ')}
            <br />
            <strong>Students:</strong> {classroom.students.map(student => student.label).join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ClassroomList;
