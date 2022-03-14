export const reducer = (state, action) => {
  if (action.type === 'Add_Item') {
    const newPeople = [...state.people, action.paylod]
    return {
      ...state,
      people: newPeople,
      modelContent: 'item added',
      isModel: true,
    }
  }
  if (action.type === 'Empty_Value') {
    return {
      ...state,
      isModel: true,
      modelContent: 'Enter value',
    }
  }
  if (action.type === 'Close_Model') {
    return {
      ...state,
      isModel: false,
    }
  }
  if (action.type === 'Remove_Item') {
    const newPeople = state.people.filter((item) => item.id != action.paylod)
    return {
      ...state,
      people: newPeople,
      isModel: true,
      modelContent: 'item removed',
    }
  }
  throw new Error('error')
}
