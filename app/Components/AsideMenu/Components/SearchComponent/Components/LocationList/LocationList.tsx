import LocationItem from '../LocationItem/LocationItem';
import styles from './LocationList.module.scss'
import Image from 'next/image'


const LocationList = () => {
    const countries = [
        {
            countryFlag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
            country: "United States",
            locations: "8 Locations",
            isPremium: true,
        },
        {
            countryFlag: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
            country: "France",
            locations: "8 Locations",
            isPremium: false,
        },
        {
            countryFlag: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg",
            country: "Germany",
            locations: "8 Locations",
            isPremium: true,
        },
        {
            countryFlag: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg",
            country: "India",
            locations: "8 Locations",
            isPremium: false,
        },
        {
            countryFlag: "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg",
            country: "Brazil",
            locations: "8 Locations",
            isPremium: true,
        },
        {
            countryFlag: "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg",
            country: "Brazil",
            locations: "8 Locations",
            isPremium: true,
        },
        {
            countryFlag: "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg",
            country: "Brazil",
            locations: "8 Locations",
            isPremium: true,
        },
        {
            countryFlag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
            country: "United States",
            locations: "8 Locations",
            isPremium: true,
        },
        {
            countryFlag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
            country: "United States",
            locations: "8 Locations",
            isPremium: true,
        },
        {
            countryFlag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
            country: "United States",
            locations: "8 Locations",
            isPremium: true,
        },


    ];

    return (
        <div className={styles.content}>
            <div className={styles.container}>
                {countries.map(item => (
                    <LocationItem
                        countryFlag={item.countryFlag}
                        isPremum={item.isPremium}
                        country={item.country}
                        locations={item.locations}
                    />
                ))}
                

            </div>
        </div>

    )
}

export default LocationList;