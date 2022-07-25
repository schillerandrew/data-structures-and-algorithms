'use strict';

const { LinkedList } = require('../linked-list2/linkedList');

class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key) {
    let characters = key.split('');
    let asciiSum = characters.reduce((sum, character) => {
      return sum + character.charCodeAt(0);
    }, 0);

    let initialHash = asciiSum * 599;

    return initialHash % 1024;
  }

  set(key, value) {
    // hashed ASCII that is an index of the array
    let position = this.hash(key);
    let data = { [key]: value };

    // if the bucket exists, add data
    if (this.buckets[position]) {
      let bucket = this.buckets[position];
      bucket.add(data);
    } else {
      // if the bucket doesnt exist, create a bucket,
      let bucket = new LinkedList();

      // add data to the bucket,
      bucket.add(data);

      // add bucket to its position
      this.buckets[position] = bucket;
    }
  }

  get(key) {
    // hashed ASCII that is an index of the array
    let position = this.hash(key);

    // if the bucket exists
    if (this.buckets[position]) {
      let bucket = this.buckets[position];

      let value = bucket.head.value[key];
      return value;
    }
  }
}
