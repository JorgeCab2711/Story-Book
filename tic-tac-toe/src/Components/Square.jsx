import propTypes from 'prop-types';

export const Square = (event, height= "100%", width= "100%",backgroundColor = 'gray') => {
    
    const styles = {
        height,
        width,
        backgroundColor
    }


    return (
        <button 
            className='square-container'
            onClick={event.onClickEvent}
            style={styles}
            >
            {event.value}
        </button>
    );
}

Square.propTypes = {
    height: propTypes.string,
    width: propTypes.string,
    backgroundColor: propTypes.string
}