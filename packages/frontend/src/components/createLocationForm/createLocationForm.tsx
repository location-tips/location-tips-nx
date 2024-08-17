'use client';
import { createLocation } from 'packages/frontend/src/actions/createLocation';
import { updateLocation } from 'packages/frontend/src/actions/updateLocation';
import { FormStatus } from '@front/components/FormStatus';
import { useFormState } from 'react-dom';

import { MInput } from '@location-tips/location-tips-uikit/atoms/MInput';
import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';
import { MButton } from '@location-tips/location-tips-uikit/atoms/MButton';

import { AuthorizedForm } from '@front/components/AuthorizedForm';

const initialState = {
  image: null,
};

export const CreateLocationForm = () => {
  const [state, formAction] = useFormState(createLocation, initialState);
  const [, formUpdateAction] = useFormState(updateLocation, {});

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

export default CreateLocationForm;
