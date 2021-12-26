import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set,remove } from "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyCRO9TZZLU1W9Ot9GaqMbQh1Z2oAB7nl6Y",
    authDomain: "weekend-81e2a.firebaseapp.com",
    databaseURL: "https://weekend-81e2a-default-rtdb.firebaseio.com",
    projectId: "weekend-81e2a",
    storageBucket: "weekend-81e2a.appspot.com",
    messagingSenderId: "577802374313",
    appId: "1:577802374313:web:904d361d612cbd6bac6db8"
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export function putData(data) {
    if(data.id===0){
    data.id = Math.floor(Math.random() * 500044)
    }
    set(ref(db, 'cards/' + data.id), data);
}
export function removeData(id) {
    if(id!==0){
        remove(ref(db, 'cards/' + id));
    }
    
}

export async function getPayload(id,setData) {
    get(ref(db,'cards/'+id)).then((snapshot) => {
        if (snapshot.exists()) {
            setData(snapshot.val())
            return 1
        } else {
            console.log("No data available");
            return -1
        }
    }).catch((error) => {
        console.error(error);
    });
}


