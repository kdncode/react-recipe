import React from 'react';

const Form = (props) => (     // Pass props because it's stateless
    <form onSubmit={props.getReceipe} style={{ marginBottom: '2rem' }}>
        <input className="form__input" type="text" name="recipeName" />
        <button className="form__button">Search</button>
    </form>
);

export default Form;