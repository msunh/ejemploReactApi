import React from 'react'


const Bebida  = ({bebidaProp}) => {
    return (
        <div>
            <p>
                {bebidaProp.idDrink}
            </p>
            <div>
                {bebidaProp.strDrink}
            </div>
            <p style={
                {
                    color:'white',
                    textAlign:"center",
                    backgroundColor:'black'
                    
                }
            }>
                {bebidaProp.strInstructionsIT}
            </p>

            <div>
                <img src={bebidaProp.strDrinkThumb} alt=""/>
            </div>

            
        </div>
      );
}

export default Bebida ;