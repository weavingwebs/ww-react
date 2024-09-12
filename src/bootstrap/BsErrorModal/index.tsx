import Modal from 'react-bootstrap/cjs/Modal.js';
import { FC, PropsWithChildren } from 'react';
import { BsButton } from '../BsButton';
import { BsErrorMessage } from '../BsErrorMessage';

type BsErrorModalProps = PropsWithChildren & {
  error: Error | null;
  onClose: () => void;
  prefix?: string;
  title?: string;
};

// @todo: Use our <Modal/> and make a story.
export const BsErrorModal: FC<BsErrorModalProps> = ({
  error,
  onClose,
  title,
  prefix,
  children,
}) => {
  if (!error) {
    return null;
  }
  // eslint-disable-next-line no-console
  console.error(error);
  return (
    <Modal centered show onHide={onClose} animation={false}>
      <Modal.Header>
        <Modal.Title className="no-transform">
          {title || 'An Error has Occurred'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <BsErrorMessage error={error} className="mb-0" prefix={prefix} />
        {children}
      </Modal.Body>
      <Modal.Footer>
        <BsButton variant="danger" outlined onClick={onClose}>
          Close
        </BsButton>
      </Modal.Footer>
    </Modal>
  );
};
