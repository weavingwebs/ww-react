type ArrayReducerState<T extends object> = T[];

type ArrayReducerSetAction<T extends { id: string }> = {
  items: T[];
  type: 'set';
};

type ArrayReducerAddAction<T extends { id: string }> = {
  item: T;
  type: 'add';
};

type ArrayReducerUpdateAction<T extends { id: string }> = {
  item: T;
  type: 'update';
};

type ArrayReducerUpsertAction<T extends { id: string }> = {
  item: T;
  type: 'upsert';
};

type ArrayReducerRemoveAction<T extends { id: string }> = {
  item: T;
  type: 'remove';
};

type ArrayReducerRemoveByIdAction = {
  id: string;
  type: 'remove_by_id';
};

export type ArrayReducerActions<T extends { id: string }> =
  | ArrayReducerSetAction<T>
  | ArrayReducerAddAction<T>
  | ArrayReducerUpdateAction<T>
  | ArrayReducerUpsertAction<T>
  | ArrayReducerRemoveAction<T>
  | ArrayReducerRemoveByIdAction;

export function arrayReducer<
  T extends {
    id: string;
  },
>(s: ArrayReducerState<T>, a: ArrayReducerActions<T>) {
  switch (a.type) {
    case 'set': {
      return a.items;
    }
    case 'add': {
      return [...s, a.item];
    }
    case 'update': {
      const newState = [...s];
      const indexToUpdate = newState.findIndex((item) => item.id === a.item.id);
      if (indexToUpdate === -1) {
        throw new Error('could not find index to update');
      }
      newState[indexToUpdate] = a.item;
      return newState;
    }
    case 'upsert': {
      const newState = [...s];
      const indexToUpdate = newState.findIndex((item) => item.id === a.item.id);
      // Item not in array: add it.
      if (indexToUpdate === -1) {
        newState.push(a.item);
      } else {
        // Or update it.
        newState[indexToUpdate] = a.item;
      }
      return newState;
    }
    case 'remove': {
      return s.filter((item) => item.id !== a.item.id);
    }
    case 'remove_by_id': {
      return s.filter((item) => item.id !== a.id);
    }
    default: {
      throw new Error('unknown action');
    }
  }
}
