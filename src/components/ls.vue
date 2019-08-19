<template>
  <div class="activity-create-form">
    <a
      v-if="!isFormDisplayed"
      @click="toggleFormDisplay"
      class="button is-primary is-block is-alt is-large"
      href="#"
    >New Activity</a>
    <div v-if="isFormDisplayed" class="create-form">
      <h2>Create Activity</h2>
      <form>
        <div class="field">
          <label class="label">Title</label>
          <div class="control">
            <input v-model="newActivity.title" class="input" type="text" placeholder="Read a Book" />
          </div>
        </div>
        <div class="field">
          <label class="label">Notes</label>
          <div class="control">
            <textarea
              v-model="newActivity.notes"
              class="input"
              type="text"
              placeholder="Read a Book"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Category</label>
          <div class="control">
            <select v-model="newActivity.category" class="select">
              <option disabled value>Please Select</option>
              <option v-for="category in categories" :key="category.id">{{ category.text }}</option>
            </select>
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button
              @click.prevent="createActivity"
              :disabled="!isFormValid"
              class="button is-link"
            >Create</button>
          </div>
          <div class="control">
            <button @click.prevent="toggleFormDisplay" class="button is-text">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { createActivityAPI } from "@/api";
export default {
  name: "ActivityCreate",
  props: {
    categories: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isFormDisplayed: false,
      newActivity: {
        title: "",
        notes: "",
        category: ""
      }
    };
  },
  computed: {
    isFormValid() {
      return (
        this.newActivity.title &&
        this.newActivity.notes &&
        this.newActivity.category
      );
    }
  },
  created() {},
  methods: {
    toggleFormDisplay() {
      this.isFormDisplayed = !this.isFormDisplayed;
    },
    resetActivity() {
      this.newActivity.title = "";
      this.newActivity.notes = "";
      this.newActivity.category = "";
    },
    createActivity() {
      // improve by using rest to send copy of obj
      createActivityAPI({ ...this.newActivity }).then(activity => {
        this.$emit("activityCreated", { ...activity });
        this.resetActivity();
        this.isFormDisplayed = false;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>