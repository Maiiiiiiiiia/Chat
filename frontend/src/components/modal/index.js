import Add from '../../components/modal/Add'
import Remove from '../../components/modal/Remove'
import Rename from '../../components/modal/Rename'

const modals = {
  adding: Add,
  removing: Remove,
  renaming: Rename,
};

export default (modalName) => modals[modalName];