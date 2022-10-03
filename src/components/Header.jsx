import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title }) => {
    const addTask = () => {

    }
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={() => addTask()}></Button>
        </header>
    )
}

Header.PropTypes = {
    title: PropTypes.string.isRequired
}

export default Header