export default {
  template: `<section v-show="inProgress.length">
    <h2 class="font-bold mb-2">In Progress</h2>
    <ul>
      <li v-for="assignment in inProgress" :key="assignment.id">
        <label>{{assignment.name}} <input type="checkbox" v-model="assignment.completed"></label>
      </li>
    </ul>
  </section>
  <section v-show="completed.length">
    <h2 class="font-bold mb-2">Completed</h2>
    <ul>
      <li v-for="item in completed" :key="item.id">
        <label>{{item.name}} <input type="checkbox" v-model="item.completed"></label>
      </li>
    </ul>
  </section>`,
  data() {
    return {
      assignments: [
        { name: "Chapter 1", completed: true, id: 1 },
        { name: "Chapter 2", completed: false, id: 2 },
        { name: "Home work", completed: false, id: 3 },
        { name: "Plays", completed: true, id: 4 },
      ],
    };
  },
  computed: {
    inProgress() {
      return this.assignments.filter((assignment) => !assignment.completed);
    },
    completed() {
      return this.assignments.filter((assignment) => assignment.completed);
    },
  },
};
