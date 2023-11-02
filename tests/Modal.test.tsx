import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { Modal } from '../src/bootstrap/Modal';

test('Check if overflow-hidden class has been added to document.body on mount and removed on un-mount.', async () => {
  // Mount two modals.
  const modal1 = render(
    <Modal
      onClose={() => {
        throw new Error('noop');
      }}
      title=""
    />
  );

  const modal2 = render(
    <Modal
      onClose={() => {
        throw new Error('noop');
      }}
      title=""
    />
  );

  // Should have .overflow-hidden.
  expect(document.body.classList.contains('overflow-hidden')).toBe(true);

  // Unmount first modal.
  modal1.unmount();

  // Second modal still open, expecting .overflow-hidden.
  expect(document.body.classList.contains('overflow-hidden')).toBe(true);

  // Unmount second modal.
  modal2.unmount();

  // Not expecting body to have .overflow-hidden.
  expect(document.body.classList.contains('overflow-hidden')).toBe(false);
});
