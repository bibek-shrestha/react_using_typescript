import navigation from "@/app/helpers/navigation";
import { Component } from "react";
import HouseListComponent from "../house-list/house-list.component";
import HouseComponent from "../house/house.component";

interface ComponentPickerComponentProps {
    selectedNavigation: string;
}

class ComponentPickerComponent extends Component<ComponentPickerComponentProps> {
    render() {
        switch(this.props.selectedNavigation) {
            case navigation.home:
                return (
                    <>
                        <HouseListComponent />
                    </>
                );
            case navigation.house:
                return (
                    <>
                        <HouseComponent />
                    </>
                );

        }
    }
}

export default ComponentPickerComponent;