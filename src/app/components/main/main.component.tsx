import { Component } from "react";
import BannerComponent from "../banner/banner.component";
import HouseListComponent from "../house-list/house-list.component";
import House from "../house-list/model/house";
import HouseComponent from "../house/house.component";

interface MainComponentState {
    selectedHouse?: House | null
}
export class MainComponent extends Component<object, MainComponentState>  {
    constructor(props: object) {
        super(props);
        this.state = {
            selectedHouse: null
        }
        this.setSelectedHouse = this.setSelectedHouse.bind(this);
    }

    setSelectedHouse(house: House): void {
        this.setState({selectedHouse: house });
    }

    render() {
        const selectedHouse = this.state.selectedHouse;
        return (
            <>
                <div className="container">
                    <BannerComponent headerText="Providing houses all over the world." />
                    {selectedHouse ? <HouseComponent house={selectedHouse} /> : <HouseListComponent setSelectedHouse={this.setSelectedHouse}/>}
                </div>
            </>
        );
    }
}