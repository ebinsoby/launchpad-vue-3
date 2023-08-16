import AssignmentList from './AssignmentList.js'
export default {
    template: `
    <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
    <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>
    `,
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
    filters(){
      return {
        inProgress : this.assignments.filter((assignment) => !assignment.completed),
        completed :  this.assignments.filter((assignment) => assignment.completed),
      }
    }
  },
  components:{
    AssignmentList,
  }
}