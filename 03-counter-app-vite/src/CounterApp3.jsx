import PropTypes from 'prop-types';

export const CounterApp3 = ({string}) => {
    return (
        <>
        <h1>CounterApp3</h1>
        <h3>{ string }</h3>
        
        </>
    );
}

CounterApp3.propTypes = {
    value: PropTypes.string.isRequired
}