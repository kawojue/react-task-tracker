import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onShowAddTask, showAdd }) => {
    return (
        <header className='flex justify-between mb-7'>
            <h1>{title}</h1>
            <Button color={showAdd ? 'black' : 'green'} textClr={showAdd ? 'white' : 'black'} text={showAdd ? 'Close' : 'Add'} onClick={() => onShowAddTask()} />
        </header>
    )
}

Header.PropTypes = {
    title: PropTypes.string.isRequired
}

export default Header