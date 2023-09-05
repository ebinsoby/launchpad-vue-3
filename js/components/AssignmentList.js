import Assignment from "./Assignment.js";
import AssignmentTags from './AssignmentTags.js'

export default {
  template: `<section v-show="assignments.length">
    <h2 class="font-bold mb-2">{{title}}
    <span>({{assignments.length}})</span></h2>
    <assignment-tags :initialTags="this.assignments.map((assignment)=>assignment.tag)" @change="currentTag = $event" :currentTag="currentTag"/>
    <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
      <assignment v-for="assignment in filteredAssignments" :assignment=assignment :key="assignment.id"></assignment>
    </ul>
  </section>`,
  props: {
    assignments: Array, 
    title: String,
  },
  data(){
    return{
      currentTag:'all',
    }
  },
  components: {
    Assignment, AssignmentTags,
  }, 
  computed: {
    filteredAssignments(){
      if(this.currentTag ==='all')return this.assignments;
      return   this.assignments.filter((assignment)=>assignment.tag === this.currentTag)
    }
  }
};
