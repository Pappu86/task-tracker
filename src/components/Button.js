import propTypes from 'prop-types';

const Button = ({color, text, onClick}) => {
    return (
        <div>
            <button style={{backgroundColor:color}} className='btn' onClick={onClick}>{text}</button>
        </div>
    )
}

Button.defaultProps={
    color: 'steelblue',
}

Button.propTypes={
    title: propTypes.string,
    color:propTypes.string,
    onClick: propTypes.func,
}

export default Button
