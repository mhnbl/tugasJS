import React, { createContext, useState, useEffect } from 'react';

export const LearningTopicsContext = createContext();

export const LearningTopicsProvider = ({ children }) => {
  const [topics, setTopics] = useState([
    {
      id: 1,
      title: "Pengantar Algoritma",
      description: "Dasar-dasar algoritma dan bagaimana menulisnya.",
      difficulty: "Beginner",
      backgroundColor: "#A8E6CF"
    },
    {
      id: 2,
      title: "Struktur Data Lanjut",
      description: "Implementasi pohon dan graf dengan kompleksitas analisis.",
      difficulty: "Advanced",
      backgroundColor: "#FF8C94"
    },
    {
      id: 3,
      title: "Database SQL",
      description: "Cara menggunakan query SQL dasar dan join tabel.",
      difficulty: "Intermediate",
      backgroundColor: "#FFD3B6"
    }
  ]);

  // Contoh useEffect untuk memberi alert saat ada perubahan topics
  useEffect(() => {
    // Jangan alert saat mount pertama kali
    if (topics.length > 0) {
      console.log(`Jumlah topik saat ini: ${topics.length}`);
    }
  }, [topics]);

  return (
    <LearningTopicsContext.Provider value={{ topics, setTopics }}>
      {children}
    </LearningTopicsContext.Provider>
  );
};