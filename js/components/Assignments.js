import AssignmentList from './AssignmentList.js'
export default {
    template: `
    <assignment-list :assignments="inProgress" title="In Progress"></assignment-list>
    <assignment-list :assignments="completed" title="Completed"></assignment-list>
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
    inProgress() {
      return this.assignments.filter((assignment) => !assignment.completed);
    },
    completed() {
      return this.assignments.filter((assignment) => assignment.completed);
    },
  },
  components:{
    AssignmentList,
  }
}