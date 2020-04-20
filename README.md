# Web-Todolist
G6-王逸琦，马元元，李峰远，吕昕远

***
## 说明  
    [{"id":1,"content":"Restful API homework","status":true}]  
***
说明
1.  id为自增字段，从1开始，唯一。  
delete、get请求返回内容时，都是如上的json格式。  
使用post请求新增item时，需要上面的json格式，不需要id。如果post成功，返回201，并附带整个todoList列表。如果存在内容完全相同的item，会失败，返回400。
2. content为todoItem的内容。
3. status为一个bool值，false表示未完成，true表示已完成。

示例请求  
```
    get    localhost:3000/todoList    //获取整个list。成功返回200和整个list，失败返回500  
    post    localhost:3000/todoList    //添加新的item。成功返回201和整个list，失败返回400  
    put    localhost:3000/todoList/1    //修改item的status（true变false，false变true）。成功返回200（附带整个list），失败返回404。
    delete    locakhost:3000/todoList/1    //删除id为1的item。成功返回200（附带整个list），失败返回404。
```
    
