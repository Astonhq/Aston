import { ObjectMetadataItem } from '@/object-metadata/types/ObjectMetadataItem';
import { FieldMetadataType } from 'twenty-shared';

export const hasObjectMetadataItemPositionField = (
  objectMetadataItem: ObjectMetadataItem,
) =>
  !objectMetadataItem.isRemote &&
  objectMetadataItem.fields.some(
    (field) => field.type === FieldMetadataType.POSITION,
  );
