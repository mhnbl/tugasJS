import React from 'react';

const stylesByDifficulty = {
  Beginner: {
    backgroundColor: '#C8FACC',
    color: '#1A202C',
    fontWeight: '600',
  },
  Intermediate: {
    backgroundColor: '#FFE8B0',
    color: '#1A202C',
    fontWeight: '600',
  },
  Advanced: {
    backgroundColor: '#FFB3B3',
    color: '#1A202C',
    fontWeight: '600',
  }
};

const TopicCard = ({ title, description, difficulty, onDelete }) => {
  const style = stylesByDifficulty[difficulty] || stylesByDifficulty.Beginner;

  return (
    <div
      style={{
        position: 'relative',
        backgroundColor: style.backgroundColor,
        color: style.color,
        fontWeight: style.fontWeight,
        borderRadius: '10px',
        padding: '1.5rem',
        margin: '0.75rem',
        maxWidth: '280px',
        flex: '1 1 280px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        textAlign: 'left',
        transition: 'transform 0.2s',
        cursor: 'default',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      {/* Tombol delete */}
      <button
        onClick={onDelete}
        style={{
            position: 'absolute',
            top: '5px',
            right: '5px',
            backgroundColor: '#ff4d4f',
            border: 'none',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            color: '#fff',
            fontSize: '12px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
            transition: 'all 0.2s ease-in-out'
        }}
        onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = '#d9363e';
            e.currentTarget.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = '#ff4d4f';
            e.currentTarget.style.transform = 'scale(1)';
        }}
        title="Hapus Topik"
        >
        X
        </button>

      <h2>{title}</h2>
      <p>{description}</p>
      <small><strong>Difficulty:</strong> {difficulty}</small>
    </div>
  );
};

export default TopicCard;
