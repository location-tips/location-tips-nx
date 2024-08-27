import { useState } from 'react';
import Link from 'next/link';
import { TLocationInResult, LocationsState } from '@types';

import { MCard } from '@location-tips/location-tips-uikit/atoms/MCard';
import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';
import { MText } from '@location-tips/location-tips-uikit/atoms/MText';
import { MButton } from '@location-tips/location-tips-uikit/atoms/MButton';
import { MDropdown } from '@location-tips/location-tips-uikit/atoms/MDropdown';
import { MList } from '@location-tips/location-tips-uikit/atoms/MList';
import { MInput } from '@location-tips/location-tips-uikit/atoms/MInput';
import { MTextarea } from '@location-tips/location-tips-uikit/atoms/MTextarea';

import { ImageWithOverlay } from '@front/components/ImageWithOverlay';
import { MdiDotsHorizontal } from '@front/icons/MdiDotsHorizontal';
import { MdiContentSave } from '@front/icons/MdiContentSave';
import { MdiClose } from '@front/icons/MdiClose';
import { MdiDeleteOutline } from '@front/icons/MdiDeleteOutline';
import { updateLocation } from '@front/actions/updateLocation';
import { deleteLocation } from '@front/actions/deleteLocation';

import './LocationsListItem.vars.css';
import styles from './LocationsListItem.module.css';

type LocationsListItemProps = {
  item: TLocationInResult;
  onUpdate?: (updatedLocation: TLocationInResult) => void;
  onDelete?: (deletedLocation: TLocationInResult) => void;
};

export const LocationsListItem = ({
  item,
  onUpdate = () => {
    return;
  },
  onDelete = () => {
    return;
  },
}: LocationsListItemProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [newTitle, setNewTitle] = useState(item.title);
  const [newDescription, setNewDescription] = useState(
    item.userDescription ?? item.description,
  );

  const toggleDropdownOpen = () => {
    setDropdownOpen((prevDropdownOpen) => !prevDropdownOpen);
    if (isDeleting) {
      setIsDeleting(false);
    }
  };

  const toggleIsEditing = () => {
    setIsEditing((prevIsEditing) => !prevIsEditing);
  };

  const toggleIsDeleting = () => {
    setIsDeleting((prevIsDeleting) => !prevIsDeleting);
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
        toggleIsEditing();
        onUpdate(result);
      }
    } catch (error) {
      console.error('Error while updating location:', error);
    }
  };

  const resetInputFields = () => {
    setNewTitle(item.title);
    setNewDescription(item.userDescription ?? item.description);
  };

  const handleDelete = async () => {
    try {
      const result = await deleteLocation({} as LocationsState, item);
      console.log(result);
      if (result.error) {
        console.log('Error while deleting location:', result.error);
      } else {
        toggleDropdownOpen();
        onDelete(item);
      }
    } catch (error) {
      console.error('Error while updating location:', error);
    }
  };

  const menuOptions = [
    {
      key: 'edit',
      value: (
        <div
          className={styles.editMenuItem}
          onClick={() => {
            toggleIsEditing();
            toggleDropdownOpen();
          }}
        >
          Edit
        </div>
      ),
    },
    {
      key: 'delete',
      value: (
        <>
          {!isDeleting && (
            <div className={styles.editMenuItem} onClick={toggleIsDeleting}>
              Delete
            </div>
          )}
          {isDeleting && (
            <MFlex
              className={styles.editMenuItem}
              wrap="nowrap"
              justify="space-between"
              gap="s"
            >
              <MButton mode="transparent" onClick={handleDelete}>
                <MdiDeleteOutline width={24} height={24} />
              </MButton>
              <MButton mode="transparent" onClick={toggleIsDeleting}>
                <MdiClose width={24} height={24} />
              </MButton>
            </MFlex>
          )}
        </>
      ),
    },
  ];

  return (
    <>
      {isEditing && (
        <form className={styles.editItemForm} onSubmit={handleSubmit}>
          <MCard
            gap="s"
            header={
              <MFlex justify="space-between">
                <MInput
                  status="regular"
                  containerClassName={styles.inputHeader}
                  value={newTitle}
                  autoFocus
                  onChange={(e) => setNewTitle(e.target.value)}
                />
                <MFlex>
                  <MButton mode="transparent" type="submit">
                    <MdiContentSave width={24} height={24} />
                  </MButton>
                  <MButton
                    mode="transparent"
                    onClick={() => {
                      toggleIsEditing();
                      resetInputFields();
                    }}
                    type="button"
                  >
                    <MdiClose width={24} height={24} />
                  </MButton>
                </MFlex>
              </MFlex>
            }
          >
            <MFlex direction="row" wrap="nowrap" gap="m" align="start">
              <ImageWithOverlay
                src={item.images.medium}
                original={item.images.original}
                alt={item.title}
                width={200}
                height={200}
                className={styles.itemImage}
                draggable={false}
              />

              <MTextarea
                value={newDescription}
                maxLength={400}
                containerClassName={styles.inputDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                placeholder={item.userDescription ?? item.description}
                rows={7}
                counter={true}
              />
            </MFlex>
          </MCard>
        </form>
      )}

      {!isEditing && (
        <MCard
          className={styles.itemCard}
          header={
            <MFlex justify="space-between">
              <Link
                href={`/location/${item.id}`}
                title={item.title}
                className={styles.link}
              >
                {item.title}
              </Link>
              <MFlex gap="xs">
                <MDropdown
                  onClose={() => {
                    setDropdownOpen(true);
                  }}
                  noPadding={true}
                  dropdownContent={
                    <MList
                      options={menuOptions}
                      showDivider={false}
                      noPadding={true}
                    />
                  }
                  open={dropdownOpen}
                  align="right"
                  stretch={false}
                >
                  <MButton mode="transparent" onClick={toggleDropdownOpen}>
                    <MdiDotsHorizontal width={24} height={24} />
                  </MButton>
                </MDropdown>
              </MFlex>
            </MFlex>
          }
        >
          <MFlex direction="row" wrap="nowrap" gap="xl">
            <ImageWithOverlay
              src={item.images.medium}
              original={item.images.original}
              alt={item.title}
              width={200}
              height={200}
              className={styles.itemImage}
              draggable={false}
            />
            <MText className={styles.description}>
              {item.userDescription ?? item.description}
            </MText>
          </MFlex>
        </MCard>
      )}
    </>
  );
};

export default LocationsListItem;
