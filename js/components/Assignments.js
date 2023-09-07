import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";
export default {
  template: `
    <section class="flex">
    <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
    <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>
    <assignment-create :assignments="assignments" @add="add"></assignment-create>
    </section>
    `,
  data() {
    return {
      assignments: [],
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
  created() {
    fetch("http://localhost:5502/assignments")
      .then((response) => response.json())
      .then((assignments) => {
        this.assignments = assignments;
      });
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
