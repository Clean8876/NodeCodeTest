import { initCouchbase, getCollection } from '../db/couchbase';

export async function insertDocument<T>(key: string, doc: T): Promise<void> {
  await initCouchbase();
  const coll = getCollection();
  await coll.upsert(key, doc);
  console.log(`Inserted: ${key}`);
}