import { FC } from 'react';
import { FormErrorComponentProps } from '../../components';
import { BsInvalidFeedback } from '../BsInvalidFeedback';

export const BsFormError: FC<FormErrorComponentProps> = ({ id, error }) => {
  return <BsInvalidFeedback id={id}>{error.message}</BsInvalidFeedback>;
};
