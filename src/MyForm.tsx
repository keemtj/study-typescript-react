import React, { useState } from 'react';

// Params를 MyFormProps의 form 객체에 type을 지정한 것과 같다
// type Params = {
//   name: string;
//   dscription: string;
// }

type MyFormProps = {
  // void: 해당 함수에서 아무것도 반환하지 않는다는 뜻
  onSubmit: (form: { name: string; description: string; }) => void;
}

function MyForm({ onSubmit }: MyFormProps) {
  const [form, setForm] = useState({
    name: '',
    description: '',
  });

  const { name, description } = form;
  
  // const onChange = (e: any) => {
  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  // const handleSubmit = (e: any => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      name: '',
      description: '',
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={name} onChange={onChange} />
      <input name="description" value={description} onChange={onChange} />
      <button type="submit">등록</button>
    </form>
  );
}

export default MyForm;