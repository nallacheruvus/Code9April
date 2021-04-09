import axios from "axios";

const reducer = (state = '', action) => {
    switch (action.type) {
        case 'INCREMENT':
            var arr = action.payload.split(';');
            let str = "http://localhost:8089/sdins/" + arr[0] + "/" + arr[1]
            axios.get(str).then(a => { console.log(a.data) });
            return 'Inserted Record';
        // alert('Data Into Reducer');
        case 'DECREMENT':
            return 'KRISHNA';
        default:
            return 'Jyotirmayi';
    }
}

export default reducer;