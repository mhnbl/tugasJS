import React, { useContext, useState } from 'react';
import { LearningTopicsContext } from '../../context/LearningTopicsContext';
import TopicCard from './TopicCard';

const LearningTopics = () => {
    const { topics, setTopics } = useContext(LearningTopicsContext);
  
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [difficulty, setDifficulty] = useState('Beginner');
  
    const addTopic = (e) => {
      e.preventDefault();
      if (!title.trim() || !description.trim()) return;
  
      const newTopic = {
        id: Date.now(),
        title,
        description,
        difficulty,
        backgroundColor: difficulty === 'Beginner' ? '#C8FACC' :
                         difficulty === 'Intermediate' ? '#FFE8B0' :
                         '#FFB3B3'
      };
  
      setTopics(prev => [...prev, newTopic]);
      setTitle('');
      setDescription('');
      setDifficulty('Beginner');
    };
  
    const deleteTopic = (id) => {
      setTopics(prev => prev.filter(topic => topic.id !== id));
    };
  
    return (
      <div>
        <form onSubmit={addTopic} style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <input
            type="text"
            placeholder="Judul topik"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
            style={{ padding: '0.5rem', width: '220px', marginRight: '1rem', borderRadius: '6px', border: '1px solid #ccc' }}
          />
          <input
            type="text"
            placeholder="Deskripsi singkat"
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
            style={{ padding: '0.5rem', width: '300px', marginRight: '1rem', borderRadius: '6px', border: '1px solid #ccc' }}
          />
          <select
            value={difficulty}
            onChange={e => setDifficulty(e.target.value)}
            style={{ padding: '0.5rem', marginRight: '1rem', borderRadius: '6px', border: '1px solid #ccc' }}
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
          <button type="submit">Tambah Topik</button>
  
          <h2 style={{ color: '#213547', paddingTop:'1rem' }}>Learning Topics</h2>
        </form>
  
        <div 
          style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            gap: '1rem',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {topics.length === 0 && <p>Tidak ada topik untuk ditampilkan.</p>}
          {topics.map(topic => (
            <TopicCard
              key={topic.id}
              title={topic.title}
              description={topic.description}
              difficulty={topic.difficulty}
              onDelete={() => deleteTopic(topic.id)}
            />
          ))}
        </div>
      </div>
    );
  };

export default LearningTopics;