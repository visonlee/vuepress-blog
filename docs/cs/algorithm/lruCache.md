## [LeetCode LRU缓存](https://leetcode.com/problems/lru-cache/)

Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

Follow up:
Could you do both operations in O(1) time complexity?

Example:

```java
LRUCache cache = new LRUCache( 2 /* capacity */ );
cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4
```

##s
```java
import java.util.HashMap;

public class LRUCache {

    private int capacity; //缓存的最大个数

    private Entry head;//头结点.不保存数据
    private Entry tail;//尾结点,保存数据

    private int size; //当前缓存的个数

    private HashMap<Integer, Entry> cacheMap;

    private static class Entry {
        private int key;
        private int value;
        private Entry previous;
        private Entry next;

        public Entry() {
        }

        public Entry(int key, int value, Entry previous, Entry next) {
            this.key = key;
            this.value = value;
            this.previous = previous;
            this.next = next;
        }
    }

    public LRUCache(int capacity) {

        if (capacity < 1)
            throw new IllegalArgumentException("Illegal initial capacity: " +
                    capacity);

        head = new Entry(-1,-1, null,null);
        tail = null;
        this.capacity = capacity;
        size = 0;
        cacheMap = new HashMap<>(this.capacity);
    }

    public int get(int key) {

        Entry entry = cacheMap.get(key);

        if (entry != null) {

            if (entry == tail) {
                if (tail.previous != head) {
                    tail = tail.previous;
                }
            }

            linkFirst(entry);
            return entry.value;
        }

        return  -1;
    }

    public void put(int key, int value) {

        Entry entry = cacheMap.get(key);
        if (entry != null) {
            
            if (entry == tail && tail.previous != head) {
                tail = tail.previous;
            }
            entry.value = value;
            cacheMap.put(key,entry);

        }else {
            if (capacity == size) {
                cacheMap.remove(tail.key);
                entry = tail;
                entry.value = value;
                entry.key = key;
                if (tail!=null && tail.previous != head) {
                    tail = tail.previous;
                }
                cacheMap.put(key, entry);
            } else {
                entry = new Entry(key, value, null,null);
                cacheMap.put(key, entry);
                size++;
            }
        }

        linkFirst(entry);
    }

    private void linkFirst(Entry entry) {
        if (entry == null ) {
            throw new NullPointerException("entry == null");
        }

        if (entry.previous != null) {
            entry.previous.next = entry.next;
        }

        if (null != entry.next) {
            entry.next.previous = entry.previous;
        }

        if (null != head.next) {
            entry.next = head.next;
            head.next.previous = entry;
        }else {
            tail = entry;
        }
        entry.previous = head;
        head.next = entry;
    }

}
```