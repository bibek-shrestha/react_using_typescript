import React from "react";
import navigation from "../helpers/navigation";
import House from "../components/house-list/model/house";

interface HouseContextProps {
    currentNavigation: string;
    selectedHouse?: House;
    navigate: (navigateTo: string, selectedHouse?: House) => void;
}

const HouseContext = React.createContext<HouseContextProps>({
    currentNavigation: navigation.home,
    selectedHouse: undefined,
    navigate: (navigateTo: string, selectedHouse?: House) => {}
});
export default HouseContext;
