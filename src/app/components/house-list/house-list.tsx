'use client';
import { Component } from "react";
import HouseRow from "./house-row/house-row";
import House from "./model/house";

const houseList = [
    {
        id: 1,
        address: '40 Albert Street, Rhodes',
        country: 'Australia',
        price: 1000000
    },
    {
        id: 2,
        address: '10 Alva Stree, Strathfield',
        country: 'Australia',
        price: 900000
    }
];

interface HouseListState {
    houseList: House[]
}
class HouseList extends Component<object, HouseListState> {
    constructor(props: object) {
        super(props);
        this.state = {
            houseList: [...houseList]
        }
    }

    addHouse = () => {
        const house = {
            id: 3,
            address: '1 Gathourpe Street, Rhodes',
            country: 'Australia',
            price: 2000000
        }
        this.setState((state) => {
            return {
                houseList: [...state.houseList, house]
            }
        });
    }

    render() {
        return (
            <>
                <div className="row mb-2">
                    <h5 className="theme-font-color text-center">
                        Houses currently on the market.
                    </h5>
                </div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Address</th>
                            <th>Country</th>
                            <th>Asking Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.houseList.map((house) => <HouseRow key={house.id} house={house} />)}
                    </tbody>
                </table>
                <button className="btn btn-primary" onClick={this.addHouse}>Add</button>
            </>
        );
    }
}

export default HouseList;
