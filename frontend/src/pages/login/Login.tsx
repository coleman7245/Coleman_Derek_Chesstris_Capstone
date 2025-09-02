import { useContext } from 'react';
import { GameContext } from '../../App.tsx';

import './Login.css';

import Navbar from '../../shared_components/Navbar.jsx';
import Form from '../../shared_components/Form.jsx';

function Login() {

    return <div>
        <Navbar />
        <Form />
    </div>;
}

export default Login;