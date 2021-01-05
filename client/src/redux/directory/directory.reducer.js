const INITIAL_STATE = {
    sections: [
        {
            title: 'Desks',
            imageUrl: 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
            id: '01',
            linkUrl: 'shop/desks'
        },
        {
            title: 'Monitors',
            imageUrl: 'https://images.unsplash.com/photo-1555940280-66bf87aa823d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            id: '2',
            linkUrl: 'shop/monitors'
        },
        {
            title: 'Keyboards',
            imageUrl: 'https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2378&q=80',
            id: '3',
            linkUrl: 'shop/keyboards'
        },
        {
            title: 'Mice',
            imageUrl: 'https://images.unsplash.com/photo-1586816879360-004f5b0c51e5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3302&q=80',
            size: 'large',
            id: '4',
            linkUrl: 'shop/mice'
        },
        {
            title: 'Headphones',
            imageUrl: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1946&q=80',
            size: 'large',
            id: '5',
            linkUrl: 'shop/headphones'
        },
    ]
}


const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state
    }
}

export default directoryReducer