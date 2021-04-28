import React from 'react';
import '../../assets/css/App.css';


function username(user) {
    return (
        <div className="profile-box">
            <div>
                <span className="username">{user.name}</span>
                <div className="dropdown">
                    <button className="btn color-white dropdown-toggle bg-transparent light-font" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Mi perfil
                    </button>
                    <div className="dropdown-menu bg-superfud" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item bg-superfud" href="#">Mis compras</a>
                        <a className="dropdown-item bg-superfud" href="#">Configuración</a>
                        <a className="dropdown-item bg-superfud" href="#">Salir</a>
                    </div>
                </div>
            </div>
            <div>
                <img 
                    src={user.img}
                    alt="user image"
                />
            </div>
            
        </div>
        
    );
}

class Profile extends React.Component{

    render(){
        return (
        <div className="profile">
            
            <div>
                {username({name:"dulfrey",img:"https://avatars.githubusercontent.com/u/7827523?v=4"})}
            </div>
            
        </div>);
    }
    
}

export default Profile;