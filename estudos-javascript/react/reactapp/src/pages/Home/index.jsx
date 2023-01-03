import React, { useState, useEffect } from 'react'
import '../Home/style.css'
import { Card } from '../../components/Card/'

export function Home() {
  const [studentName, setStudentName] = useState()
  const [students, setStudents] = useState([])
  const [user, setUser] = useState({name: '', avatar: ''})

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    }

    setStudents(prevState => [...prevState, newStudent])
  }

  useEffect(() => {
    const urlApi = 'https://api.github.com/users/nycolemendonca'
    
    fetch(urlApi)
      .then(response => response.json())
      .then(data => {
        setUser({
          name: data.login,
          avatar: data.avatar_url,
        })
      })
      .catch()
  }, [])

  return (
    <div className="container">
      <header>
        <h1>Attendance List</h1>
        <div>
          <p>{user.name}</p>
          <img src={user.avatar} alt="Foto de Perfil" />
        </div>
      </header>

      <label hidden>Name</label>
      <input 
        type="text" 
        placeholder="Your Name Here" 
        autoComplete="off"
        onChange={e => setStudentName(e.target.value)}/>
      <button type="button" onClick={handleAddStudent}>
        Add
      </button>

      {
        students.map(student => (
        <Card 
          key={student.time}
          name={student.name} 
          time={student.time}
          />
        ))
      }
    </div>
  )
}


