import React, { useState, useEffect } from 'react';
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
const API = process.env.REACT_APP_API_URL,
  TOKEN = process.env.REACT_APP_API_TOKEN,
  USER = process.env.REACT_APP_API_USER;
const List = props => {
  const [data, setData] = useState([]);
  const [start, setStart] = useState(1);
  const [showCreateModal, setCreateModal] = useState(false);
  const [modalContent, setModalContent] = useState();
  const fields = `:(cc_email,active_flag,id,name,label,org_id,email,phone,closed_deals_count,open_deals_count,next_activity_date,owner_id,next_activity_time)`;
  const fetchData = async startVal => {
    const result = await axios(
      `${API}/persons/list?api_token=${TOKEN}&user_id=${USER}&sort=&label=&start=0&type=person&_=1566827251412&limit=10&start=${startVal}`
    );
    if (startVal && data.length) {
      setData([...data, ...(result.data && result.data.data)]);
    } else setData(result.data && result.data.data);
    setStart(startVal);
  };
  useEffect(() => {
    fetchData(0);
  }, []);
  const loadMore = () => {
    let current = start + 10;
    fetchData(current);
  };
  const onDragEnd = result => {
    if (!result.destination) return;
    const items = reorder(data, result.source.index, result.destination.index);
    setData(items);
  };
  if (!data.length) return <></>;
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
              {data.map((item, index) => (
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
