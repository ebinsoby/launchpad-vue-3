export default {
  template: `
        <button :class="{ 'border rounded px-5 py-2 disabled:cursor-not-allowed text-white': true,
        'bg-blue-600 hover:bg-blue-700':type === 'primary', 'bg-purple-200 hover:bg-blue-400':type === 'secondary', 'bg-gray-200 hover:bg-blue-400':type === 'muted',
        'is-loading': processing,}"
         :disabled="processing">
            <slot/>
        </button>
    `,
  props: {
    type: {
      type: String,
      default: "primary",
    },
    processing: Boolean,
  },
};
