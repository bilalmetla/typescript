

import { Nedb } from "../src/db";


(async () => {
    const db = new Nedb()
    await db.insert('userCredientials', { username: 'bilal', password: '123456' })
    const results = await db.find('userCredientials', { username: 'bilal' })
    console.log(results)
})();
