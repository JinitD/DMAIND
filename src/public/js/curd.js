const { db } = require('../../firebase');

async function getCollection() {
    const collec = "datas"
    const collectio = await db.collection(collec).get();
    const datas = collectio.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))
    return datas;
}


module.exports = {
    'getCollection': getCollection
}
