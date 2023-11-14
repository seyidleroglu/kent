<template>
  <div>
  <PartTest></PartTest>
  <Part-Test></Part-Test>
  <part-test></part-test>
  <parttest></parttest>
  <Part2 />
  </div>
</template>

<script>
// import Part1 from "../src/views/Form/part1.vue";
import Part1 from "@/views/Form/part1.vue";
import Part2 from "@/views/Form/part2.vue";

export default {
  data() {
    return {
      name: 'Abd'
    }
  },
  components: {
    'PartTest':Part1,Part2
  },
  computed: {},
  mounted() { },
  methods: {},
  watch: {},
};
</script>
