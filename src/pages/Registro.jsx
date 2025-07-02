import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Registro() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '', confirm: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Validaciones
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) return toast.error('Correo inválido');
    if (form.password.length < 6) return toast.error('Contraseña muy corta');
    if (form.password !== form.confirm) return toast.error('Contraseñas no coinciden');

    // Guardar usuario
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existe = users.find(u => u.email === form.email);
    if (existe) return toast.error('El correo ya está registrado');

    users.push({ email: form.email, password: form.password });
    localStorage.setItem('users', JSON.stringify(users));

    toast.success('Registro exitoso');
    navigate('/login');
  };

  return (
    <div className="container mt-5">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" className="form-control my-2" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" className="form-control my-2" placeholder="Contraseña" onChange={handleChange} required />
        <input type="password" name="confirm" className="form-control my-2" placeholder="Confirmar Contraseña" onChange={handleChange} required />
        <button className="btn btn-primary mt-2" type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Registro;