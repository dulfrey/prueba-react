import React from 'react';
import '../../assets/css/App.css';
import searchimg from '../../assets/images/search-img.png'
class SearchBox extends React.Component{

    search(){
        const value = document.getElementById('search').value
        console.log('buscando ...' , value)
    }
    _handleKeyDown(e){
        if (e.key === 'Enter') {
            console.log('do validate' , e.target.value);
            this.search();
          }
    }
    render(){
        return (
        <div className="search-box">
           <input id="search"
            className="light-font"
            type="text"
            data-testid="search-input"
            placeholder="Busca marcas y productos"
            onKeyDown={(e)=>this._handleKeyDown(e)}
           />
           <img onClick={()=>this.search()}
            src={searchimg}
            alt="search"
           />

        </div>);
    }
}

export default SearchBox;