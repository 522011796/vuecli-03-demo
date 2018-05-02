<template>
  <div id="input">
    <div class="form-group">
      <div class="row">
        <input type="text" class="form-control " @keyup.enter="addTodo" v-model="newTodoList">
        <button class="tbn btn-success  form-control" @click.enter="addTodo" >添加</button>
      </div>
      <ul class="list-group">
        <li class="list-group-item" v-for="(todo, index) in newTodo" style="list-style: none">
          <span class="badge" v-if="todo.done == false">未完成</span>
          <span>{{ todo.todo}}</span>
          <button type="button" @click="deleteTodo(index)">X</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default({
    data(){
      return {
        newTodo : this.$store.state.todoList.todoList,
        newTodoList: '',
      }
    },
    methods : {
      addTodo(){//这里使用commit来提交 addTodoList mutations
        this.$store.commit('addTodoList',this.newTodoList)
      },
      deleteTodo (index){
        console.log(index)
        this.$store.commit('deleteTodo',index)
      }
    }
  })
</script>
