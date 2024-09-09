import currencyFormatter from "@/app/helpers/currency-formatter";
import { Component } from "react";
import House from "../house-list/model/house";
import defaultPhoto from "@/app/helpers/default-photo";

interface HouseProps {
    house: House
}
class HouseComponent extends Component<HouseProps> {
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-6">
                        <div className="row">
                            <img 
                            src={this.props.house.photo ? `/images/house-images/${this.props.house.photo}` : defaultPhoto}
                            alt="Image of House" className="img-fluid" /></div>
                    </div>
                    <div className="col-6">
                        <div className="row mt-2">
                            <h5 className="col-12">{this.props.house.country}</h5>
                        </div>
                        <div className="row">
                            <h3 className="col-12">{this.props.house.address}</h3>
                        </div>
                        <div className="row">
                            <h2 className="col-12 theme-font-color">{currencyFormatter.format(this.props.house.price)}</h2>
                        </div>
                        <div className="row">
                            <div className="col-12 mt-3">{this.props.house.description}</div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default HouseComponent;
