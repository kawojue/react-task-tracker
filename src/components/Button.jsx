import PropTypes from 'prop-types';

const Button = ({ color, text, onClick }) => {
    return (
        <button className='btn'
            style={{ backgroundColor: color }}
            onClick={onClick}>
            {text}
        </button>
    );
}

Button.PropTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}

export default Button;