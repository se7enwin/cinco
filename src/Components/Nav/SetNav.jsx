import { useState } from 'react';
export default function SetNav(props) {

    const [id, setId] = useState('');
    // FullList state 
    const [fullList, setfullList] = useState([]);
    // Full List ids
    const ids = [];
    // Api url
    const apiList = 'www.saintseiyaapi.com/api/characters?limit=5&page=1';
    // Get json from api
    if (fullList[0] == undefined) { getList(); console.log('Ids: ', ids); }
    // Get json from api

    async function getList() {

        // Get full list api

        await fetch(`${props.cors}${apiList}`).then(c => c.json().then(d => setfullList(d.data.characters)));


    }
    /* Push full id list on array*/
    fullList?.map(s => { ids.push(s['_id']) })
    console.log('Ids: ', ids);

    // Handle -  Save data input on state
    function handleSearch(event) {
        //Return real id from subindice array
        setId(ids[((event.target.value) - 1)])
        console.log('Id: ', id)

    }
    return (
        <div id='Nav'>
            {/* Input listener - active handler */}
            <input id='input' type='search' placeholder='Enter Saint - 1 to 5' onChange={handleSearch} />
            {/* Onclick listener - active getApi */}
            <button onClick={() => { if (id !== '') { props.getApi(id) } }}>Search</button>
        </div>
    )

}