import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class CarDetail extends Component {
    handleRedirect(){
        browserHistory.push('/cars');
    }
    render(){
        const cars = this.props.route.data;
        const id = this.props.params.id;
        const car = cars.filter(car => {
            if(car.id == id) {
                return car;
            }
        });

        return (
            <div>
                <div className="card img">
                    <img className="card-img-top" src={car[0].media} alt={car[0].name} />
                    <div className="card-body">
                        <h1 className="card-body-title">{car[0].name}</h1>
                       <ul className="list-group list-group-flush">
                           <li className="list-group-item"><strong>Model</strong>: {car[0].model}</li>
                           <li className="list-group-item"><strong>Make</strong>: {car[0].make}</li>
                           <li className="list-group-item"><strong>Year</strong>: {car[0].year}</li>
                           <li className="list-group-item"><strong>Price</strong>: {car[0].price}</li>
                       </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default CarDetail