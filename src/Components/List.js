import React, { useState, useEffect, useContext, useReducer } from 'react';
import PersonContext from '../Context/PersonsContext';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import axios from 'axios';
import { LoadMoreButton, HeadingLabel } from './common/CommonComponents';
import ItemRowCard from './ItemRowCard';
import DetailsModal from './DetailsModal';
import CreatePerson from './CreatePerson';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { getListStyle, getItemStyle, reorder } from '../Utils/_List.js';
const List = props => {
  const [start, setStart] = useState(1);
  const [showCreateModal, setCreateModal] = useState(false);
  const [modalContent, setModalContent] = useState();
  const context = useContext(PersonContext);
  const fetchData = async startVal => {
    setStart(startVal);
    context.loadPersons(startVal);
  };
  const { persons, orderPersons } = context;
  useEffect(() => {
    fetchData(0);
  }, []);
  const loadMore = () => {
    let current = start + 10;
    fetchData(current);
  };
  const onDragEnd = result => {
    if (!result.destination) return;
    const items = reorder(
      persons,
      result.source.index,
      result.destination.index
    );
    orderPersons(items);
  };
  if (!persons.length) return <></>;
  return (
    <>
      <HeadingLabel>
        <span>People&apos;s List</span>
        <span>
          <Button
            className="addpeople"
            onClick={() => {
              setCreateModal(true);
            }}
          >
            <FontAwesomeIcon icon={faPlus} />
          </Button>
        </span>
      </HeadingLabel>
      <DetailsModal
        modalContent={modalContent}
        clear={() => {
          setModalContent(undefined);
        }}
      />
      <CreatePerson
        shown={showCreateModal}
        clear={() => {
          setCreateModal(false);
        }}
      />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {persons.map((item, index) => (
                <Draggable
                  key={'person-' + item.id}
                  draggableId={item.id}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      onClick={e => {
                        setModalContent(item);
                      }}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      <ItemRowCard item={item} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <LoadMoreButton
        onClick={_ => {
          loadMore();
        }}
      >
        Load MOar
      </LoadMoreButton>
    </>
  );
};

export default List;
