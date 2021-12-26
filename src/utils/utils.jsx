

export  function getRandomCards(data){
        let temp=Math.floor(Math.random()*(data.length-1))
        return data[temp];  
}

