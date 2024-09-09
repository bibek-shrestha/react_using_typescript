'use client';
import { Component } from "react";
import HouseRow from "./house-row/house-row.component";
import House from "./model/house";

interface HouseListComponentState {
    houseList: House[]
}
interface HouseListProps {
    setSelectedHouse: (selectedHouse: House) => void; 
}
class HouseListComponent extends Component<HouseListProps, HouseListComponentState> {
    constructor(props: HouseListProps) {
        super(props);
        this.state = {
            houseList: []
        }
    }

    componentDidMount(): void {
        const fetchHouseList = async () => {
            const response = await fetch("https://localhost:9000/api/houses")
            const houseList = await response.json();
            this.setState({
                houseList: [...houseList]
            })
        };
        fetchHouseList();
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
                        {this.state.houseList.map((house) => <HouseRow key={house.id} house={house} setSelectedHouse={this.props.setSelectedHouse} />)}
                    </tbody>
                </table>
                {/* <button className="btn btn-primary" onClick={this.addHouse}>Add</button> */}
            </>
        );
    }
}

export default HouseListComponent;
