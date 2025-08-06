import { useState } from "react";
import {defaultButtonStyle } from "../styles/Buttons";
import { inputStyle } from "../styles/Inputs";

const editNewsStyle = {
    marginTop: '45px',
    marginBottom: '45px'
}

export default function EditNews({ data, save, cancel }) {
  const [formData, setFormData] = useState({ ...data });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={editNewsStyle}>
      <h3>Редактировать новость</h3>
      <input
        name="name"
        placeholder="Заголовок"
        value={formData.name || ""}
        style={inputStyle}
        onChange={handleChange}
      />
      <input
        name="content"
        placeholder="Контент"
        style={inputStyle}
        value={formData.content || ""}
        onChange={handleChange}
      />
      <button style={defaultButtonStyle} onClick={() => save(formData)}>Сохранить</button>
      <button style={defaultButtonStyle} onClick={cancel}>Отмена</button>
    </div>
  );
}
