import Banner from "./components/banner/banner";
import HouseList from "./components/house-list/house-list";
export default function Home() {
  return (
    <>
      <Banner headerText="Providing houses all over the world." />
      <HouseList/>
    </>
  );
}
