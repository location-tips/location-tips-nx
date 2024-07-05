'use client'
import { createLocation } from 'packages/frontend/src/actions/createLocation';
import FormStatus from 'packages/frontend/src/components/formStatus/formStatus';
import { useFormState } from 'react-dom'

const initialState = {
    image: null,
};

const CreateLocationForm = () => {
    const [state, formAction] = useFormState(createLocation, initialState)

    return <form action={formAction}>
        <input type="file" name="image" />
        <button type="submit" id="commands">Create</button>

        <FormStatus />
        {state.error && <p>Error: {state.error}</p>}
        {state.description && <p>Location created: {JSON.stringify(state.description, null, "\t")}</p>}
    </form>;
}

export default CreateLocationForm;