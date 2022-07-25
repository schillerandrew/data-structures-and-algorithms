# Hashtables

## Challenge

Implement a hash table class with simple methods that: hash a key, add data to the table, retrieve a single value from the table, see if a single value exists in the table, and retrieve all of the keys from the table.

## Approach & Efficiency

There doesn't seem to be too much variation for setting up a basic hash table. The hash is based on ASCII codes, multiplied by 599 (a prime number), and applied to modulus of 1024. The hash method is modularized and used by the set method. And the Big O will be O(1) for space and time because this is a hash table.

## API

> set

- Arguments: key, value
- Returns: nothing
- This method should hash the key, and set the key and value pair in the table, handling collisions as needed.
- Should a given key already exist, replace its value from the value argument given to this method.

> get

- Arguments: key
- Returns: Value associated with that key in the table

> hash

- Arguments: key
- Returns: Index in the collection for that key
