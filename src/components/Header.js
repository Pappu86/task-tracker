import propTypes from 'prop-types';
import Button from './Button';

const Header = ({title}) => {

    const addTask=()=>{
        console.log('çlick');
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={addTask} />
        </header>
    )
}

Header.defaultProps={
    title:'Task Tracker'
}

Header.propTypes={
    title: propTypes.string.isRequired,
};

export default Header
