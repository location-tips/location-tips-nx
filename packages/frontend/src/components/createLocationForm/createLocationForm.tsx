'use client'
import { MButton } from '@location-tips/location-tips-uikit/atoms/MButton';
import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';
import { MInput } from '@location-tips/location-tips-uikit/atoms/MInput';
import { createLocation } from 'packages/frontend/src/actions/createLocation';
import FormStatus from 'packages/frontend/src/components/formStatus/formStatus';
import { useFormState } from 'react-dom'

const initialState = {
    image: null,
};

const CreateLocationForm = () => {
    const [state, formAction] = useFormState(createLocation, initialState)

    return <form action={formAction}>
        <MFlex direction="row" gap="xl" align="center" justify="stretch">
        <MInput type="file" name="image" />

        <FormStatus />

        <MButton type="submit" id="commands">Create</MButton>

        </MFlex>
        {state.error && <p>Error: {state.error}</p>}
        {state.description && <p>Location created: {JSON.stringify(state.description, null, "\t")}</p>}
    </form>;
}

export default CreateLocationForm;