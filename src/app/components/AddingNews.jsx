import { useState } from "react";
import {defaultButtonStyle } from "../styles/Buttons";
import { inputStyle } from "../styles/Inputs";

const addingNewsStyle = {
    marginTop: '45px',
    marginBottom: '45px'
}


export default function AddingNews({ save, cancel }) {
  const [formData, setFormData] = useState({ name: "", content: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={addingNewsStyle}>
      <h3>Добавить новость</h3>
      <div>
        <input
            name="name"
            placeholder="Заголовок"
            value={formData.name}
            style={inputStyle}
            onChange={handleChange}
        />
        <input
            name="content"
            placeholder="Контент"
            value={formData.content}
            style={inputStyle}
            onChange={handleChange}
        />
      </div>
      <div>
        <button style={defaultButtonStyle} onClick={() => save(formData)}>Добавить</button>
        <button style={defaultButtonStyle} onClick={cancel}>Отмена</button>
      </div>
    </div>
  );
}
