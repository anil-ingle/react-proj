# Actions
1. _AC is to dispatch an api call (async) 
2. _ACR is to dispatch action after api call
4. _SC are store calls
5. All action creators end with AC, ACR or SC
6. template of the action is
    1. entity_[field]_[get|create|update|delete]_[AC|ACR] eg: 
    ```javascript
     categories_delete_AC 
     ```
    2. . template of the action is entity_[field]_[get|set]_[SC] eg: 
    ```javascript
     categories_set_SC 
     ```
7. all entities are plural


# API
1. starts with get, post, put, delete, update (Call should not be used)
2. lowerCamelCase to be used
3. entity names should be as per api endpoint
    ```javascript
     getStaticFiles -> get:\\StaticFiles\{}
     postStaticFiles -> post:\\StaticFiles\{} 
     getCartItems -> get:\\Cart\{:id}\Items\{}
    ```

# Selectors
1. selectors are used to select part of Redux Store
2. all methods should begin with ```sel```