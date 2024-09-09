import currencyFormatter from "@/app/helpers/currency-formatter";
import { Component } from "react";
import defaultPhoto from "@/app/helpers/default-photo";
import HouseContext from "@/app/context/house-context";

class HouseComponent extends Component {
    render() {
        return (
            <HouseContext.Consumer>
                {({ selectedHouse }) => (
                    <>
                        <div className="row">
                            <div className="col-6">
                                <div className="row">
                                    <img
                                        src={selectedHouse && selectedHouse.photo ? `/images/house-images/${selectedHouse.photo}` : defaultPhoto}
                                        alt="Image of House" className="img-fluid" /></div>
                            </div>
                            <div className="col-6">
                                <div className="row mt-2">
                                    <h5 className="col-12">{selectedHouse && selectedHouse.country}</h5>
                                </div>
                                <div className="row">
                                    <h3 className="col-12">{selectedHouse && selectedHouse.address}</h3>
                                </div>
                                <div className="row">
                                    <h2 className="col-12 theme-font-color">{selectedHouse && currencyFormatter.format(selectedHouse.price)}</h2>
                                </div>
                                <div className="row">
                                    <div className="col-12 mt-3">{selectedHouse && selectedHouse.description}</div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </HouseContext.Consumer>
        );
    }
}

export default HouseComponent;
