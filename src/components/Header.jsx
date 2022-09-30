import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title }) => {
    // const onClick = (e) => {
    //     console.log(e)
    // }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={(e) => console.log("Click")}></Button>
        </header>
    )
}

// Header.defaultProps = {
//     title: "Task Tracker"
// }

Header.PropTypes = {
    title: PropTypes.string.isRequired
}

export default Header