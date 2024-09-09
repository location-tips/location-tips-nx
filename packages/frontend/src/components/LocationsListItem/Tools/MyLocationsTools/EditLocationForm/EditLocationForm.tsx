import { useState } from 'react';
import { LocationsState, TLocationInResult } from '@types';

import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';
import { MHeading } from '@location-tips/location-tips-uikit/atoms/MHeading';
import { MInput } from '@location-tips/location-tips-uikit/atoms/MInput';
import { MTextarea } from '@location-tips/location-tips-uikit/atoms/MTextarea';
import { MButton } from '@location-tips/location-tips-uikit/atoms/MButton';

import useModal from '@front/stores/useModal';
import useMyLocations from '@front/stores/useMyLocations';
import { updateLocation as updateLocationAction } from '@front/actions/updateLocation';
import { AuthorizedForm } from '@front/components/AuthorizedForm';

import './EditLocationForm.vars.css';
import styles from './EditLocationForm.module.css';

type EditLocationFormProps = {
  item: TLocationInResult;
};

export const EditLocationForm = ({ item }: EditLocationFormProps) => {
  const { hideModal } = useModal();
  const { updateLocation } = useMyLocations();
  const [newTitle, setNewTitle] = useState(item.title);
  const [newDescription, setNewDescription] = useState(
    item.userDescription ? item.userDescription : item.description,
  );

  const submitChanges = async (formData: FormData) => {
    try {
      const result = await updateLocationAction({} as LocationsState, formData);
      if (result.error) {
        console.error('Error while updating location:', result.error);
      } else {
        updateLocation(result);
      }
    } catch (error) {
      console.error('Error while updating location:', error);
    }

    hideModal();
  };

  return (
    <AuthorizedForm action={submitChanges}>
      <MFlex direction="column" gap="l" align="start" className={styles.form}>
        <MInput type={'hidden'} name="id" value={item.id} />
        <MInput type={'hidden'} name="uid" value={item.uid} />
        <MFlex
          direction="column"
          gap="s"
          align="start"
          className={styles.inputContainer}
        >
          <MHeading mode="h3">Location title:</MHeading>
          <MInput
            status="regular"
            value={newTitle}
            name="title"
            autoFocus
            onChange={(e) => setNewTitle(e.target.value)}
          />
        </MFlex>
        <MFlex
          direction="column"
          gap="s"
          align="start"
          className={styles.inputContainer}
        >
          <MHeading mode="h3">Description:</MHeading>
          <MTextarea
            value={newDescription}
            name="userDescription"
            maxLength={600}
            onChange={(e) => setNewDescription(e.target.value)}
            placeholder={
              item.userDescription ? item.userDescription : item.description
            }
            rows={7}
            counter={true}
          />
        </MFlex>
        <MFlex>
          <MButton type="submit" mode="primary">
            Sumbit
          </MButton>
          <MButton type="button" mode="secondary" onClick={() => hideModal()}>
            Cancel
          </MButton>
        </MFlex>
      </MFlex>
    </AuthorizedForm>
  );
};

export default EditLocationForm;
