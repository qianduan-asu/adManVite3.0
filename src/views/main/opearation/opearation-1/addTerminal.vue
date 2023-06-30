<template>
  <el-card class="box-card">
    <Form
      ref="form"
      v-loading="loading"
      :model="formData"
      empty-text="暂无数据"
    >
    <el-form-item label="Activity name">
      <el-input v-model="formData.name" />
    </el-form-item>
    <el-form-item label="Activity zone">
      <el-select v-model="formData.region" placeholder="please select your zone">
        <el-option label="Zone one" value="shanghai" />
        <el-option label="Zone two" value="beijing" />
      </el-select>
    </el-form-item>
    <el-form-item label="Activity time">
      <el-col :span="11">
        <el-date-picker
          v-model="formData.date1"
          type="date"
          placeholder="Pick a date"
          style="width: 100%"
        />
      </el-col>
      <el-col :span="2" class="text-center">
        <span class="text-gray-500">-</span>
      </el-col>
      <el-col :span="11">
        <el-time-picker
          v-model="formData.date2"
          placeholder="Pick a time"
          style="width: 100%"
        />
      </el-col>
    </el-form-item>
    </Form>
  </el-card>
</template>

<script lang="ts">
import { defineComponent,ref } from "vue";
import Form from "@/components/form/index.vue";
export default defineComponent({
  name: "crudForm",
  components: {
    Form,
  },
  setup() {
    const formData = ref({
      name:"",
      region:"",
      date1:"",
      date2:""
    });
    return {formData}
  },
});
</script>

<style lang="scss" scoped>
.box-card {
  margin: 15px;
}
</style>