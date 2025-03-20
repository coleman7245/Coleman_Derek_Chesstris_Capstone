import { useLocation } from 'react-router-dom';

import './EditPage.css';

import Navbar from '../../shared_components/Navbar.jsx';
import Form from './EditForm.jsx';

function EditPage() {

    return (
        <>
            <Navbar />
            <Form />
        </>
    )
}

export default EditPage;