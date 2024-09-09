'use client';
import { Component, ReactNode } from "react";
import currencyFormatter from "../../../helpers/currency-formatter";
import House from "../model/house";


interface HouseRowComponentProps {
    house: House;
    setSelectedHouse: (selectedHouse: House) => void;
}

class HouseRowComponent extends Component<HouseRowComponentProps> {

    render(): ReactNode {
        const {address, country, price} = this.props.house;
        return (
            <>
                <tr onClick={() => this.props.setSelectedHouse(this.props.house)}>
                    <td>{address}</td>
                    <td>{country}</td>
                    <td>{currencyFormatter.format(price)}</td>
                </tr>
            </>
        );
    }
}

export default HouseRowComponent;
