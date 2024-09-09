import { Component } from "react";
import BannerComponent from "../banner/banner.component";
import House from "../house-list/model/house";
import HouseContext from "@/app/context/house-context";
import navigation from "@/app/helpers/navigation";
import ComponentPickerComponent from "../component-picker/component-picker.component";

interface MainComponentState {
    currentNavigation: string;
    selectedHouse?: House;
    navigate: (navigateTo: string, selectedHouse?: House) => void;
}
export class MainComponent extends Component<object, MainComponentState> {
    constructor(props: object) {
        super(props);
        this.state = {
            currentNavigation: navigation.home,
            selectedHouse: undefined,
            navigate: this.navigate.bind(this)
        }
    }

    navigate(navigateTo: string, selectedHouse?: House): void {
        this.setState({
            currentNavigation: navigateTo,
            selectedHouse: selectedHouse,
            navigate: this.navigate.bind(this)
        })
    }

    render() {
        return (
            <>
                <HouseContext.Provider value={{...this.state}}>
                    <div className="container">
                        <BannerComponent headerText="Providing houses all over the world." />
                        <ComponentPickerComponent selectedNavigation={this.state.currentNavigation} />
                    </div>
                </HouseContext.Provider>
            </>
        );
    }
}