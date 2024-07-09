'use client'
import { searchLocation } from 'packages/frontend/src/actions/searchLocation';
import { useFormState } from 'react-dom';
import styles from './searchLocationForm.module.css';
import FormStatus from 'packages/frontend/src/components/formStatus/formStatus';
import { MButton } from '@location-tips/location-tips-uikit/atoms/MButton';

const initialState = {
    searchResult: null,
};

const SearchLocationForm = () => {
    const [state, formAction] = useFormState(searchLocation, initialState);

    console.log(state.queryDescription);

    return <>
        <form action={formAction} className={styles.searchForm}>
            <textarea name="searchText" rows={10}></textarea>
            <MButton type="submit" id="commands">Search</MButton>
            <FormStatus />
        </form>
        {state.searchResult && <div>
            {state.searchResult.map((location: any) => {
                return <div key={location.id}>
                    <h3>{location.location.name} ({location.location.type}) {location.score}</h3>
                    <div>{location.description}</div>
                </div>;
            })}
        </div>}
    </>;
}

export default SearchLocationForm;