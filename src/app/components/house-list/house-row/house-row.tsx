'use client';
import { Component, ReactNode } from "react";
import currencyFormatter from "../../../helpers/currency-formatter";
import House from "../model/house";


interface HouseRowProps {
    house: House
}

class HouseRow extends Component<HouseRowProps> {

    render(): ReactNode {
        const {address, country, price} = this.props.house;
        return (
            <>
                <tr>
                    <td>{address}</td>
                    <td>{country}</td>
                    <td>{currencyFormatter.format(price)}</td>
                </tr>
            </>
        );
    }
}

export default HouseRow;
