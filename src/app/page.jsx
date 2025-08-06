'use client'

import { useEffect, useState } from "react";
import NewsTable from "./components/NewsTable";

const LOCAL_STORAGE_KEY = "news_items";

export default function App() {
  const [news, setNews] = useState([]);
  const [isBusy, setBusy] = useState(true);

  // Загрузка из localStorage
  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      setNews(JSON.parse(stored))
    }
    setBusy(false)
  }, []);

  // Сохранение в localStorage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(news));
  }, [news]);

  const addNews = (newItem) => {
    const newId = Date.now();
    setNews([...news, { ...newItem, id: newId }]);
  };

  const editNews = (updatedItem) => {
    const updatedList = news.map(item =>
      item.id === updatedItem.id ? updatedItem : item
    );
    setNews(updatedList);
  };

  const deleteNews = (itemToDelete) => {
    const updatedList = news.filter(item => item.id !== itemToDelete.id);
    setNews(updatedList);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Новости</h1>
      <NewsTable
        isBusy={isBusy}
        news={news}
        addNews={addNews}
        editNews={editNews}
        deleteNews={deleteNews}
      />
    </div>
  );
}
