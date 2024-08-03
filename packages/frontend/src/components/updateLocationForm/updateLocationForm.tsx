'use client';
import AuthorizedForm from '@front/components/authorizedForm/authorizedForm';
import { MButton } from '@location-tips/location-tips-uikit/atoms/MButton';
import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';
import { MInput } from '@location-tips/location-tips-uikit/atoms/MInput';
import { createLocation } from 'packages/frontend/src/actions/createLocation';
import { updateLocation } from 'packages/frontend/src/actions/updateLocation';
import FormStatus from 'packages/frontend/src/components/formStatus/formStatus';
import { useFormState } from 'react-dom';

const initialState = {
  image: null,
};

const UpdateLocationForm = () => {
  const [state, formAction] = useFormState(createLocation, initialState);
  const [updateState, formUpdateAction] = useFormState(updateLocation, {});

  return (
    <MFlex direction="column" gap="xl">
      <AuthorizedForm action={formAction}>
        <MFlex direction="row" gap="xl" align="center" justify="stretch">
          <MInput type="file" name="image" />

          <FormStatus />

          <MButton type="submit" id="commands">
            Create
          </MButton>
        </MFlex>
      </AuthorizedForm>
      ;{state.error && <p>Error: {state.error}</p>}
      {!state.error && (
        <AuthorizedForm action={formUpdateAction}>
          <input type="hidden" name="id" value={state.id} />
          <MFlex direction="column" gap="xl" align="center" justify="stretch">
            <MInput
              type="text"
              name="title"
              defaultValue={state.title}
              label="Title"
            />
            <MInput
              type="text"
              name="userDescription"
              defaultValue={state.userDescription}
              label="Description"
            />

            <MButton type="submit">Update</MButton>
          </MFlex>
        </AuthorizedForm>
      )}
    </MFlex>
  );
};

export default UpdateLocationForm;
