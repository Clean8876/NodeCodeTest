import { Cluster,Bucket,Collection } from "couchbase";
import * as env from "dotenv"


env.config()

 const COUCHBASE_URI = process.env.COUCHBASE_URI!;
 const COUCHBASE_USERNAME = process.env.COUCHBASE_USERNAME!;
 const COUCHBASE_PASSWORD = process.env.COUCHBASE_PASSWORD!;
 const COUCHBASE_BUCKET = process.env.COUCHBASE_BUCKET!;



let cluster: Cluster;
let bucket: Bucket;
let collection: Collection;


export async function initCouchbase(): Promise<void> {
  if (!cluster) {
    cluster = await Cluster.connect(COUCHBASE_URI, {
      username: COUCHBASE_USERNAME,
      password: COUCHBASE_PASSWORD,
    });
    bucket = cluster.bucket(COUCHBASE_BUCKET);
       const scope = bucket.scope('Project');
        collection = scope.collection('users');
    console.log('Connected to Couchbase');
  }
}

export function getCollection(): Collection {
  if (!collection) throw new Error('Couchbase not initialized');
  return collection;
}