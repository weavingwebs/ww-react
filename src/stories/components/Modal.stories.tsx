import { Meta } from '@storybook/react';
import { FC } from 'react';
import {
  Modal,
  ModalBody,
  ModalContextProvider,
  ModalHeader,
} from '../../components/Modal';
import { useModal } from '../../hooks';

export const ModalStory: FC = () => {
  const boostrapSmModal = useModal();
  const boostrapMdModal = useModal();
  const boostrapLgModal = useModal();
  const boostrapXlModal = useModal();
  const boostrapFullscreenModal = useModal();
  const bootstrapScollableModal = useModal();
  const defaultModal = useModal();
  const defaultScrollableModal = useModal();

  return (
    <ModalContextProvider>
      <div>
        <button type="button" onClick={boostrapSmModal.onOpen}>
          Open boostrap modal sm
        </button>
      </div>
      <div>
        <button type="button" onClick={boostrapMdModal.onOpen}>
          Open boostrap modal md
        </button>
      </div>
      <div>
        <button type="button" onClick={boostrapFullscreenModal.onOpen}>
          Open boostrap modal FULLSCREEN
        </button>
      </div>
      <div>
        <button type="button" onClick={bootstrapScollableModal.onOpen}>
          Open boostrap scrollable modal
        </button>
      </div>
      <div>
        <button type="button" onClick={defaultModal.onOpen}>
          Open default modal
        </button>
      </div>
      <div>
        <button type="button" onClick={defaultScrollableModal.onOpen}>
          Open default scrollable modal
        </button>
      </div>

      <Modal
        isOpen={boostrapSmModal.isOpen}
        onClose={boostrapSmModal.onClose}
        unstyled
        modalClassName="modal"
        dialogClassName="modal-dialog modal-sm modal-dialog-centered"
        contentClassName="modal-content"
      >
        <ModalHeader
          onClose={boostrapSmModal.onClose}
          title="Bootstrap SM Modal"
          headerClassName="modal-header"
        >
          Modal header extra content
        </ModalHeader>
        <ModalBody modalBodyClassName="modal-body">
          <div>
            <button type="button" onClick={boostrapMdModal.onOpen}>
              Open boostrap modal MD (default)
            </button>
          </div>
        </ModalBody>
      </Modal>

      <Modal
        isOpen={boostrapMdModal.isOpen}
        onClose={boostrapMdModal.onClose}
        unstyled
        modalClassName="modal"
        dialogClassName="modal-dialog modal-dialog-centered"
        contentClassName="modal-content"
      >
        <ModalHeader
          onClose={boostrapMdModal.onClose}
          title="Bootstrap MD Modal"
          headerClassName="modal-header"
        >
          Modal header extra content
        </ModalHeader>
        <ModalBody modalBodyClassName="modal-body">
          <div>
            <button type="button" onClick={boostrapLgModal.onOpen}>
              Open boostrap modal LG
            </button>
          </div>
        </ModalBody>
      </Modal>

      {/* LG */}
      <Modal
        isOpen={boostrapLgModal.isOpen}
        onClose={boostrapLgModal.onClose}
        unstyled
        modalClassName="modal"
        dialogClassName="modal-dialog modal-lg modal-dialog-centered"
        contentClassName="modal-content"
      >
        <ModalHeader
          onClose={boostrapLgModal.onClose}
          title="Bootstrap LG Modal"
          headerClassName="modal-header"
        >
          Modal header extra content
        </ModalHeader>
        <ModalBody modalBodyClassName="modal-body">
          <div>
            <button type="button" onClick={boostrapXlModal.onOpen}>
              Open boostrap modal XL
            </button>
          </div>
        </ModalBody>
      </Modal>

      {/* XL */}
      <Modal
        isOpen={boostrapXlModal.isOpen}
        onClose={boostrapXlModal.onClose}
        unstyled
        modalClassName="modal"
        dialogClassName="modal-dialog modal-xl modal-dialog-centered"
        contentClassName="modal-content"
      >
        <ModalHeader
          onClose={boostrapXlModal.onClose}
          title="Bootstrap XL Modal"
          headerClassName="modal-header"
        >
          Modal header extra content
        </ModalHeader>
        <ModalBody modalBodyClassName="modal-body">
          <div>No further sizes to open</div>
        </ModalBody>
      </Modal>

      {/* Bootstrap Scrollable */}
      <Modal
        isOpen={bootstrapScollableModal.isOpen}
        onClose={bootstrapScollableModal.onClose}
        unstyled
        modalClassName="modal"
        dialogClassName="modal-dialog modal-xl modal-dialog-centered"
        contentClassName="modal-content"
      >
        <ModalHeader
          onClose={bootstrapScollableModal.onClose}
          title="Bootstrap XL Modal"
          headerClassName="modal-header"
        >
          Modal header extra content
        </ModalHeader>
        <ModalBody modalBodyClassName="modal-body">
          <LoremIpsumPara />
        </ModalBody>
      </Modal>

      {/* Fullscreen */}
      <Modal
        isOpen={boostrapFullscreenModal.isOpen}
        onClose={boostrapFullscreenModal.onClose}
        unstyled
        modalClassName="modal"
        dialogClassName="modal-dialog modal-fullscreen modal-dialog-centered"
        contentClassName="modal-content"
      >
        <ModalHeader
          onClose={boostrapFullscreenModal.onClose}
          title="Bootstrap Fullscreen Modal"
          headerClassName="modal-header"
        >
          Modal header extra content
        </ModalHeader>
        <ModalBody modalBodyClassName="modal-body">
          <div>
            <button type="button" onClick={boostrapMdModal.onOpen}>
              Open boostrap modal MD (default)
            </button>
            <LoremIpsumPara />
            <div className="d-flex">
              <div className="col-6">
                <LoremIpsumPara />
              </div>
              <div className="col-6">
                <LoremIpsumPara />
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>

      <Modal isOpen={defaultModal.isOpen} onClose={defaultModal.onClose}>
        <ModalHeader onClose={defaultModal.onClose} title="Default modal" />
        <ModalBody>Modal body...</ModalBody>
      </Modal>

      <Modal
        isOpen={defaultScrollableModal.isOpen}
        onClose={defaultScrollableModal.onClose}
      >
        <ModalHeader
          onClose={defaultScrollableModal.onClose}
          title="Default Scrollable modal"
        />
        <ModalBody>
          <LoremIpsumPara />
        </ModalBody>
      </Modal>
    </ModalContextProvider>
  );
};

export default {
  title: 'Components/Modal',
  component: ModalStory,
} as Meta<typeof ModalStory>;

const LoremIpsumPara: FC = () => (
  <p>
    {`The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum." Section 1.10.32 of "de
            Finibus Bonorum et Malorum", written by Cicero in 45 BC "Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
            dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
            quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?" 1914 translation by H. Rackham "But I must explain to you
            how all this mistaken idea of denouncing pleasure and praising pain
            was born and I will give you a complete account of the system, and
            expound the actual teachings of the great explorer of the truth, the
            master-builder of human happiness. No one rejects, dislikes, or
            avoids pleasure itself, because it is pleasure, but because those
            who do not know how to pursue pleasure rationally encounter
            consequences that are extremely painful. Nor again is there anyone
            who loves or pursues or desires to obtain pain of itself, because it
            is pain, but because occasionally circumstances occur in which toil
            and pain can procure him some great pleasure. To take a trivial
            example, which of us ever undertakes laborious physical exercise,
            except to obtain some advantage from it? But who has any right to
            find fault with a man who chooses to enjoy a pleasure that has no
            annoying consequences, or one who avoids a pain that produces no
            resultant pleasure?" Section 1.10.33 of "de Finibus Bonorum et
            Malorum", written by Cicero in 45 BC "At vero eos et accusamus et
            iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
            deleniti atque corrupti quos dolores et quas molestias excepturi
            sint occaecati cupiditate non provident, similique sunt in culpa qui
            officia deserunt mollitia animi, id est laborum et dolorum fuga. Et
            harum quidem rerum facilis est et expedita distinctio. Nam libero
            tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus id quod maxime placeat facere possimus, omnis voluptas
            assumenda est, omnis dolor repellendus. Temporibus autem quibusdam
            et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
            voluptates repudiandae sint et molestiae non recusandae. Itaque
            earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
            voluptatibus maiores alias consequatur aut perferendis doloribus
            asperiores repellat." 1914 translation by H. Rackham "On the other
            hand, we denounce with righteous indignation and dislike men who are
            so beguiled and demoralized by the charms of pleasure of the moment,
            so blinded by desire, that they cannot foresee the pain and trouble
            that are bound to ensue; and equal blame belongs to those who fail
            in their duty through weakness of will, which is the same as saying
            through shrinking from toil and pain. These cases are perfectly
            simple and easy to distinguish. In a free hour, when our power of
            choice is untrammelled and when nothing prevents our being able to
            do what we like best, every pleasure is to be welcomed and every
            pain avoided. But in certain circumstances and owing to the claims
            of duty or the obligations of business it will frequently occur that
            pleasures have to be repudiated and annoyances accepted. The wise
            man therefore always holds in these matters to this principle of
            selection: he rejects pleasures to secure other greater pleasures,
            or else he endures pains to avoid worse pains."`}
  </p>
);
