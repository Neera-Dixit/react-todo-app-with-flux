import appDispatcher from '../dispatcher/appDispatcher';

export default {
    addItem : (item) => {
        appDispatcher.dispatch({
            actionType : 'ADD_ITEM',
            item
        })
    },
    changeItemStatus : (itemId) => {
        appDispatcher.dispatch({
            actionType : 'CHANGEITEM_STATUS',
            itemId
        })
    },
    removeItem : (itemId) => {
        appDispatcher.dispatch({
            actionType : 'REMOVE_ITEM',
            itemId
        })
    }
};