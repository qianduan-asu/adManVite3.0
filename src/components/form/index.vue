<template>
  <div class="system-form-box">
    <el-form
      v-bind="$attrs"
      ref="form"
      class="system-form"
      border
      height="100%"
      :model="model"
      :rules="rules"
      inline-message
      @selection-change="handleSelectionChange"
    >
      <!-- <el-table-column type="selection" align="center" width="50" v-if="showSelection" />
      <el-table-column label="序号" width="60" align="center" v-if="showIndex">
        <template #default="scope">
          {{ (page.index - 1) * page.size + scope.$index + 1 }}
        </template>
      </el-table-column> -->
      <slot></slot>
    </el-form>
     <el-form
      v-bind="$attrs"
      ref="form"
      class="system-form"
      border
      height="100%"
      :model="model"
      :rules="rules"
      inline-message
      @selection-change="handleSelectionChange"
    >
      <!-- <el-table-column type="selection" align="center" width="50" v-if="showSelection" />
      <el-table-column label="序号" width="60" align="center" v-if="showIndex">
        <template #default="scope">
          {{ (page.index - 1) * page.size + scope.$index + 1 }}
        </template>
      </el-table-column> -->
      <slot></slot>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onActivated  } from 'vue'
export default defineComponent({
  props: {
    model: { type: Object, default: () => {} }, // 数据源
    rules: { type: Object, default: () => {} }, // 规则源
    select: { type: Array, default: () => [] }, // 已选择的数据，与selection结合使用
    showIndex: { type: Boolean, default: false }, // 是否展示index选择，默认否
    showSelection: { type: Boolean, default: false }, // 是否展示选择框，默认否
    showPage: { type: Boolean, default: true }, // 是否展示页级组件，默认是
  },
  setup(props, context) {
    const form: any = ref(null)
    let timer: any = null
    // 分页相关：监听页码切换事件
    // 解决BUG：keep-alive组件使用时，表格浮层高度不对的问题
    onActivated(() => {
      form.value.doLayout()
    })
    return {
      form,
    }
  }
})
</script>

<style lang="scss" scoped>
  .system-form-box {
      display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: space-around;
    .system-form {
      flex: 1;
      height: 100%;
    }
    
    .system-page {
      margin-top: 20px;
    }
  }
</style>