import React from 'react';
import Navbar from '../../Navbar/Navbar';

const Header = (props) => {
   // console.log(props);
    //1 method  props.logo
    //2 methos destructuriz
    return (
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <img src={props.logo} alt='logo' width='200px'/>
            <Navbar cars={props.cars} getInfo={props.getInfo}/>
        </div>
    );
};

export default Header;