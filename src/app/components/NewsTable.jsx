import { useState } from "react";
import EditNews from "./EditNews";
import AddingNews from "./AddingNews";
import { actionButtonStyle, defaultButtonStyle } from "../styles/Buttons";

const tableStyle = {
    marginTop: '20px',
}

export default function NewsTable({ isBusy, news, deleteNews, addNews, editNews }) {
  const [editNewsData, setEditNewsData] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  const startEdit = (item) => {
    setEditNewsData(item);
  };

  const saveEdit = (newData) => {
    editNews(newData);
    setEditNewsData(null);
  };

  const cancelEdit = () => {
    setEditNewsData(null);
  };

  if (isBusy) {
    return <>
        Loading...
    </>
  }

  return (
    <>
      {editNewsData && (
        <EditNews
          data={editNewsData}
          save={saveEdit}
          cancel={cancelEdit}
        />
      )}

      {isAdding && (
        <AddingNews
          save={(newItem) => {
            addNews(newItem);
            setIsAdding(false);
          }}
          cancel={() => setIsAdding(false)}
        />
      )}

      <button style={defaultButtonStyle} onClick={() => setIsAdding(true)}>Добавить новость</button>

      <table border={1} cellPadding={10} style={tableStyle}>
        <thead>
          <tr>
            <th>Заголовок</th>
            <th>Контент</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {
            news.length < 1
            &&
            <tr>
                No news found
            </tr>
          }
          {
            news.length > 0 
            && 
            news.map((item) => (
                <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.content}</td>
                <td>
                    <button style={actionButtonStyle} onClick={() => startEdit(item)}>✏️</button>
                    <button style={actionButtonStyle} onClick={() => deleteNews(item)}>🗑</button>
                </td>
                </tr>
            ))
          }
        </tbody>
      </table>
    </>
  );
}
