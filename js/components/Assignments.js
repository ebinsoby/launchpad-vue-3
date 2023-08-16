import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";
export default {
  template: `
    <section class="space-y-6">
    <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
    <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>
    <assignment-create :assignments="assignments" @add="add"></assignment-create>
    </section>
    `,
  data() {
    return {
      assignments: [
        { name: "Chapter 1", completed: true, id: 1, tag:'math' },
        { name: "Chapter 2", completed: false, id: 2, tag:'science' },
        { name: "Home work", completed: false, id: 3, tag:'math' },
        { name: "Plays", completed: true, id: 4, tag:'arts' },
      ],
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
    AssignmentCreate,
  },
  methods: {
    add(name) {
      this.assignments.push({
        name: name,
        completed: false,
        id: this.assignments.length + 1,
      });
    },
  },
};
