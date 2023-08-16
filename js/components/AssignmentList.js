import Assignment from "./Assignment.js";

export default {
  template: `<section v-show="assignments.length">
    <h2 class="font-bold mb-2">{{title}}
    <span>({{assignments.length}})</span></h2>
    <div class="flex gap-2">
      <button v-for="tag in tags" class="border rounded px-1 py-px text-xs" @click="()=>{currentTag = tag}">{{tag}}</button>
    </div>
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
      currentTag:'',
    }
  },
  components: {
    Assignment,
  }, 
  computed: {
    tags(){
      return new Set(this.assignments.map((assignment)=>assignment.tag))
    },
    filteredAssignments(){
      return   this.assignments.filter((assignment)=>assignment.tag === this.currentTag)
    }
  }
};
