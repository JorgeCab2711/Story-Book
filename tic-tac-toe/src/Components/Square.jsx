import propTypes from 'prop-types';

export default function Square ({onClickEvent, value, height= "100%", width= "100%",backgroundColor = 'gray'})  {
    
    const styles = {
        height,
        width,
        backgroundColor
    }


    return (
        <button 
            className='square-container'
            onClick={onClickEvent}
            style={styles}
            >
            {value}
        </button>
    );
}

Square.propTypes = {
    height: propTypes.string,
    width: propTypes.string,
    backgroundColor: propTypes.string
}