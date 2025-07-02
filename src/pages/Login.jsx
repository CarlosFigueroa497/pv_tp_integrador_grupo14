import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === form.email && u.password === form.password);

    if (!user) return toast.error('Credenciales inválidas');

    login(user);
    toast.success(`Bienvenido, ${user.email}`);
    navigate('/');
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '500px' }}>
      <h2 className="mb-4">Iniciar sesión</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="email"
          className="form-control my-2"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          className="form-control my-2"
          placeholder="Contraseña"
          onChange={handleChange}
          required
        />
        <button className="btn btn-success w-100 mt-2" type="submit">
          Entrar
        </button>
      </form>

      <div className="text-center mt-4">
        ¿No tienes cuenta?{' '}
        <Link to="/registro" className="btn btn-link">
          ¡Regístrate!
        </Link>
      </div>
    </div>
  );
}

export default Login;