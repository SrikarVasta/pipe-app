const grid = 8;

export const getListStyle = isDraggingOver => ({
  padding: `8px 5px`,
  width: '100%-5px'
});

export const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: 'none',
  padding: '0px 16px',
  margin: `0 0 ${grid}px 0`,
  background: 'white',
  border: '1px solid #ccc',
  borderRadius: '3px',
  cursor: 'move',
  boxShandow: '0px 1px 2px 0px rgba(9, 30, 66, 0.25)',
  opacity: isDragging ? '0.5 !important' : 1,
  ...draggableStyle
});

export const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};
