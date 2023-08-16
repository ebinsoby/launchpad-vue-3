import AssignmentList from "./AssignmentList.js";
export default {
  template: `
    <section class="space-y-6">
    <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
    <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>
    <form @submit.prevent="add" >
    <div class="border border-gray-600 text-black">
    <input v-model="newAssignment" placeholder="New Assignment..." class="p-2"/>
      <button type="submit" class="bg-white p-2 border-l">Add</button>
    </div>
      
    </form>
    </section>
    `,
  data() {
    return {
      assignments: [
        { name: "Chapter 1", completed: true, id: 1 },
        { name: "Chapter 2", completed: false, id: 2 },
        { name: "Home work", completed: false, id: 3 },
        { name: "Plays", completed: true, id: 4 },
      ],
      newAssignment : '',
    };
  },
  computed: {
    filters() {
      return {
        inProgress: this.assignments.filter(
          (assignment) => !assignment.completed
        ),
        completed: this.assignments.filter(
          (assignment) => assignment.completed
        ),
      };
    },
  },
  components: {
    AssignmentList,
  },
  methods : {
    add(){
      this.assignments.push({
        name:this.newAssignment,
        completed:false,
        id:this.assignments.length+1,
      })
      this.newAssignment='';
    }
  },
};
