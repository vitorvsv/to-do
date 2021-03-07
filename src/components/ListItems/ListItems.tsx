import React, { useState, useEffect, useCallback } from 'react';

import ListItem from './ListItem/ListItem';
import FloatButton from '../UI/FloatButton/FloatButton';
import AddModal from '../UI/AddModal/AddModal';
import Loading from '../UI/Loading/Loading';
import classe from './ListItems.module.css';

const ListItems = () => {
  const [listItems, setListItems] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const getListItems = useCallback(async () => {
    setLoading(true);

    fetch('https://todo-3a389-default-rtdb.firebaseio.com/tasks.json', {
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => {
      return res.json();
    })
    .then(body => {
      const listItemsGet: any = []; 
      for (let key in body) {
        listItemsGet.push({
          ...body[key],
          id: key
        })
      }

      setListItems(listItemsGet);
      setLoading(false);
    });
  }, []);

  useEffect(() => { getListItems() }, [getListItems]);
 
  const listItemClickedHandler = (listItemId: string) => {
    const listItemsUpdate: any = [
      ...listItems
    ];
    let itemUpdated: any = {};

    for (let item of listItemsUpdate) {
      if (item.id === listItemId) {
        item.checked = !item.checked;
        itemUpdated = item;
        break;
      }
    }

    fetch(`https://todo-3a389-default-rtdb.firebaseio.com/tasks/${itemUpdated.id}.json`, {
      method: 'PUT',
      body: JSON.stringify(itemUpdated),
      headers: { 'Content-Type': 'application/json' },
    }).then(res => {
      return res.json();
    }).then(body => {
      // console.log(body);
    });

    setListItems(listItemsUpdate);
  }

  const floatButtonClickedHandler = () => {
    setShowAddModal(prevState => {
      return !prevState;
    });
  }

  const closeModalHandler = () => {
    setShowAddModal(false);
  }

  const addItemHandler = (item: any) => {
    if (!item) return;

    const itemsUpdate: any = [...listItems];

    const itemAdded = {
      text: item,
      checked: false
    };
    
    fetch('https://todo-3a389-default-rtdb.firebaseio.com/tasks.json', {
      method: 'POST',
      body: JSON.stringify(itemAdded),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => {
      return res.json();
    })
    .then(body => {
      const idGeneratedByFirebase = Object.keys(body)[0];
      itemsUpdate.push({...itemAdded, id: idGeneratedByFirebase});
      setListItems(itemsUpdate);
    });
  }

  return (
    <React.Fragment>
      <div className={classe.ListItems}>
        <h1>Lista de tarefas</h1>
        { loading && <Loading /> }
        { 
          listItems.map((listItem: any) => (
            <ListItem
              key={listItem.id}
              listItem={listItem}
              clicked={listItemClickedHandler} />
          ))
        }
        <FloatButton clicked={floatButtonClickedHandler} />
        { showAddModal && <AddModal modalTitle="Adicione uma tarefa" onCloseModal={closeModalHandler} onAddItem={addItemHandler}></AddModal> }
      </div>
    </React.Fragment>
  );
}

export default ListItems;