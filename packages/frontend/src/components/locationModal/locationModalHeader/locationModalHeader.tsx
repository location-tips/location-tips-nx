import { MdiBookmarkOutline } from "@front/icons/MdiBookmarkOutline";
import { MdiChevronLeft } from "@front/icons/MdiChevronLeft";
import { MdiShareOutline } from "@front/icons/MdiShareOutline";
import { MButton } from "@location-tips/location-tips-uikit/atoms/MButton";
import { MFlex } from "@location-tips/location-tips-uikit/atoms/MFlex";
import { MText } from "@location-tips/location-tips-uikit/atoms/MText";
import type { TLocationInResult } from "@types";

type LocationModalHeaderProps = {
    location: TLocationInResult;
    onClose: () => void;
}

const LocationModalHeader = ({ location, onClose }: LocationModalHeaderProps) => {
    const onSaveToFavourites = () => {
        console.log('Save to favourites');
    }

    const onShare = () => {
        console.log('Share');
    }

    return (
        <MFlex direction="row" gap="l" justify="space-between" align="center">
            <MButton mode="transparent" onClick={onClose}>
                <MFlex direction="row" gap="s" justify="end" align="center"><MdiChevronLeft width={32} height={32} /><MText>Back to search</MText></MFlex>
            </MButton>
            <MFlex direction="row" gap="l" justify="end" align="center">
                <MButton mode="transparent" onClick={onSaveToFavourites} size="l">
                    <MFlex direction="row" gap="s" justify="end" align="center"><MdiBookmarkOutline width={32} height={32} /><MText>Save</MText></MFlex>
                </MButton>
                <MButton mode="transparent" onClick={onShare} size="l">
                    <MFlex direction="row" gap="s" justify="end" align="center"><MdiShareOutline width={32} height={32}  /><MText>Share</MText></MFlex>
                </MButton>
                {/* <MButton mode="transparent" size="l"><MdiDotsHorizontal width={32} height={32} /></MButton> */}
            </MFlex>
        </MFlex>
    );
};

export default LocationModalHeader;