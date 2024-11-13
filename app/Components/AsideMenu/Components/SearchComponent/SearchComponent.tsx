import styles from "./SearchComponent.module.scss"
import AsideSearch from "./Components/AsideSearch/AsideSearch"
import Options from "./Components/TabSelector/TabSelector";
import LocationList from "./Components/LocationList/LocationList";

const SearchComponent = ()=>{
    return(
        <div className={styles.container}>
            <AsideSearch/>
            <Options/>
            <LocationList/>
        </div>
    )
}
export default SearchComponent;