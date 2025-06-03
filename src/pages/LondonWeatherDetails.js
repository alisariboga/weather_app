import React from 'react';
import { useNavigate } from 'react-router-dom';



const LondonWeatherDetails = () => {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/home');
    }

    return (
        <div>
            <button  onClick={goToHome}>Go to Home Page</button>
        </div>
    );
};

export default LondonWeatherDetails;