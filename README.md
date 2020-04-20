# Web-Todolist
G6-王逸琦，马元元，李峰远，吕昕远

***
## 说明  
    [{"id":1,"content":"Restful API homework","status":true}]  
***
说明
1.  id为自增字段，从1开始，唯一。  
delete、get单个item的请求只需要id即可。所有的get请求返回内容时，都是如上的json格式。  
使用post请求新增item时，需要上面的json格式，不需要id。如果post成功，返回201，并附带整个todoList列表。如果存在内容完全相同的item，会失败，返回400。
2. content为todoItem的内容
3. status为一个bool值，false表示未完成，true表示已完成
