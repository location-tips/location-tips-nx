import { FormEvent, useState } from 'react';
import { LocationsState, TLocationInResult } from '@types';

import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';
import { MHeading } from '@location-tips/location-tips-uikit/atoms/MHeading';
import { MInput } from '@location-tips/location-tips-uikit/atoms/MInput';
import { MTextarea } from '@location-tips/location-tips-uikit/atoms/MTextarea';
import { MButton } from '@location-tips/location-tips-uikit/atoms/MButton';

import useModal from '@front/stores/useModal';
import useMyLocations from '@front/stores/useMyLocations';
import { updateLocation } from '@front/actions/updateLocation';

import './EditLocationForm.vars.css';
import styles from './EditLocationForm.module.css';

type EditLocationFormProps = {
  item: TLocationInResult;
};

export const EditLocationForm = ({ item }: EditLocationFormProps) => {
  const { hideModal } = useModal();
  const { updateLocations } = useMyLocations();
  const [newTitle, setNewTitle] = useState(item.title);
  const [newDescription, setNewDescription] = useState(
    item.userDescription ? item.userDescription : item.description,
  );

  const submitChanges = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('id', item.id as string);
    formData.append('uid', item.uid);
    formData.append('title', newTitle);
    formData.append('userDescription', newDescription);
    try {
      const result = await updateLocation({} as LocationsState, formData);
      if (result.error) {
        console.error('Error while updating location:', result.error);
      } else {
        updateLocations('update', result);
      }
    } catch (error) {
      console.error('Error while updating location:', error);
    }

    hideModal();
  };

  return (
    <form onSubmit={submitChanges}>
      <MFlex direction="column" gap="l" align="start" className={styles.form}>
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
          <MButton type="submit" mode="primary" onClick={submitChanges}>
            Sumbit
          </MButton>
          <MButton type="button" mode="secondary" onClick={() => hideModal()}>
            Cancel
          </MButton>
        </MFlex>
      </MFlex>
    </form>
  );
};

export default EditLocationForm;
