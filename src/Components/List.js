import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import axios from 'axios';
import { LoadMoreButton, HeadingLabel } from './common/CommonComponents';
import ItemRowCard from './ItemRowCard';
import DetailsModal from './DetailsModal';

import { getListStyle, getItemStyle, reorder } from '../Utils/_List.js';

const Layout = props => {
  const [data, setData] = useState([]);
  const [start, setStart] = useState(1);
  const [modalContent, setModalContent] = useState();
  const fields = `:(cc_email,active_flag,id,name,label,org_id,email,phone,closed_deals_count,open_deals_count,next_activity_date,owner_id,next_activity_time)`;
  const fetchData = async startVal => {
    const result = await axios(
      `https://pipedrive-test-a2111a.pipedrive.com/api/v1/persons/list?api_token=5cbf68ebabed739d6922e2fa2fd433644ff4b1f3&user_id=10170341&sort=&label=&start=0&type=person&_=1566827251412&limit=10&start=${startVal}`
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
  console.log('--------modalContent------------');
  console.log(modalContent);
  console.log('--------------------');
  if (!data.length) return <></>;
  return (
    <>
      <HeadingLabel>People&apos;s List</HeadingLabel>

      <DetailsModal
        modalContent={modalContent}
        clear={() => {
          setModalContent(undefined);
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

export default Layout;
