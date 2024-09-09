'use client';
import { Component, ReactNode } from "react";
import currencyFormatter from "../../../helpers/currency-formatter";
import House from "../model/house";
import HouseContext from "@/app/context/house-context";
import navigation from "@/app/helpers/navigation";


interface HouseRowComponentProps {
    house: House;
}

class HouseRowComponent extends Component<HouseRowComponentProps> {

    render(): ReactNode {
        const { address, country, price } = this.props.house;
        return (
            <HouseContext.Consumer>
                {({navigate}) => (
                     <tr onClick={() => navigate(navigation.house, this.props.house)}>
                         <td>{address}</td>
                         <td>{country}</td>
                         <td>{currencyFormatter.format(price)}</td>
                     </tr>
                )}
            </HouseContext.Consumer>
        );
    }
}

export default HouseRowComponent;
