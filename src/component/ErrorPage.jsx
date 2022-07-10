import React from 'react';

function ErrorPage(){
    const [counter, setCounter] = React.useState(5);
    setInterval(() => setCounter(counter-1), 1000);

    window.setTimeout(function() {
        window.location.href = '/portfolio';
    }, 5000);
    return(
        <div className='light'>
            <p>Page not Found</p>
            <p>You are going to get redirect to the home page in {counter}sec</p>
        </div>
    );
}
export default ErrorPage;