import journalApi from "@/api/journalApi"


export const loadEntries = async (/*{ commit }*/) =>{
    
    const { data } = await journalApi.get('/entry.json')
    console.log(data)
   /* if ( !data ){
        commit('setEntries', [] )
        return
    }

    const entries = []
    for( let id of Object.keys( data ) ) {
        entries.push({
            id,
            ...data[id]
        })
    }

    commit('setEntries', entries )*/
}

export const updatedEntries = async (/*{ commit }*/) =>{
    
}

export const createdEntries = async (/*{ commit }*/) =>{
    
}