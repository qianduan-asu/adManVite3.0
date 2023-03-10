<template>
  <div class="layout-container">
    <div class="layout-container-form flex space-between">
      <div class="layout-container-form-handle">
        <el-button type="primary" :icon="Plus" @click="handleAdd">{{
          $t("message.common.add")
        }}</el-button>
        <el-popconfirm
          :title="$t('message.common.delTip')"
          @confirm="handleDel(chooseData)"
        >
          <template #reference>
            <el-button
              type="danger"
              :icon="Delete"
              :disabled="chooseData.length === 0"
              >{{ $t("message.common.delBat") }}</el-button
            >
          </template>
        </el-popconfirm>
      </div>
      <div class="layout-container-form-search">
        <el-date-picker
          class="search-tp"
          v-model="datetimes"
          type="daterange"
          unlink-panels
          :range-separator="$t('message.common.toTime')"
          :start-placeholder="$t('message.common.startTime')"
          :end-placeholder="$t('message.common.endTime')"
          :shortcuts="shortcuts"
          @change="timeFn1"
        />
        <el-input
          v-model="KeyWord.input"
          :placeholder="$t('message.common.searchTip')"
          @change="getTableData(true)"
        ></el-input>
        <el-button
          type="primary"
          :icon="Search"
          class="search-btn"
          @click="getTableData(true)"
          >{{ $t("message.common.search") }}</el-button
        >
      </div>
    </div>
    <div class="layout-container-table">
      <Table
        ref="table"
        v-model:page="page"
        v-loading="loading"
        :showIndex="true"
        :showSelection="true"
        :data="tableData"
        @getTableData="getTableData"
        @selection-change="handleSelectionChange"
        empty-text='暂无数据'
      >
        <el-table-column prop="TerminalId" label="终端编号" align="center" />
        <el-table-column prop="TerminalName" label="终端名称" align="center" />
        <el-table-column prop="GroupName" label="所属分组" align="center" />
        <el-table-column
          prop="TerminalTypeExplainName"
          label="终端类型"
          align="center"
        >
          <template #default="scope">
            <p v-if="scope.row.TerminalTypeExplainName">
              {{ scope.row.TerminalTypeExplainName }}
            </p>
            <p v-else>--</p>
          </template>
        </el-table-column>
        <el-table-column prop="ContractOne" label="联系人" align="center" />
        <el-table-column
          prop="ContractPhoneOne"
          label="联系电话"
          align="center"
        />
        <el-table-column prop="Address" label="地址" width="300" align="center" show-overflow-tooltip/>
        <el-table-column
          :label="$t('message.common.handle')"
          align="center"
          fixed="right"
          width="200"
        >
          <template #default="scope">
            <el-button @click="handleEdit(scope.row)">{{
              $t("message.common.update")
            }}</el-button>
            <el-popconfirm
              :title="$t('message.common.delTip')"
              @confirm="handleDel([scope.row])"
            >
              <template #reference>
                <el-button type="danger">{{
                  $t("message.common.del")
                }}</el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </Table>
      <!-- <Layer :layer="layer" @getTableData="getTableData" v-if="layer.show" /> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, watch } from "vue";
import Table from "@/components/table/index.vue";
import { Page } from "@/components/table/type";
import { getData, del } from "@/api/table";
// import Layer from './layer.vue'
import { ElMessage } from "element-plus";
import type { LayerInterface } from "@/components/layer/index.vue";
// import { selectData, radioData } from './enum'
import { Plus, Search, Delete } from "@element-plus/icons";
import { log } from "node:console";
export default defineComponent({
  name: "crudTable",
  components: {
    Table,
    // Layer
  },
  setup() {
    // 存储搜索用的数据
    const KeyWord = reactive({
      input: "",
    });
    //时间搜索数据

    // 弹窗控制器
    const layer: LayerInterface = reactive({
      show: false,
      title: "新增",
      showButton: true,
    });
    // 分页参数, 供table使用
    const page: Page = reactive({
      index: 1,
      size: 20,
      total: 0,
    });
    const loading = ref(true);
    const datetimes = ref("");
    const StartTime = ref("");
    const EndTime = ref("");

    function timeStr(dataStr) {
      var date = new Date(dataStr);
      var y = date.getFullYear();

      var m = date.getMonth() + 1;
      m = m < 10 ? "0" + m : m;

      var d = date.getDate();
      d = d < 10 ? "0" + d : d;

      var h = date.getHours();
      h = h < 10 ? "0" + h : h;

      //获得分
      var mm = date.getMinutes();
      mm = mm < 10 ? "0" + mm : mm;

      //获得秒
      var ss = date.getSeconds();
      ss = ss < 10 ? "0" + ss : ss;

      // console.log(y+'-'+m+'-'+d+' '+h+':'+mm+':'+ss)

      return y + "-" + m + "-" + d + " " + h + ":" + mm + ":" + ss;
    }
    //用户选定值以后触发
    const timeFn1 = (data) => {
      if (data == null) {
        StartTime.value = "";
        EndTime.value = "";
        //如果data等于null 则表示用户点击了 时间选择器的清空按钮，因为 清空按钮没有回调函数说以用这个方法来解决
      } else {
        //如果data不等于null 就可以把data的值复给 想要的变量
        StartTime.value = timeStr(datetimes.value[0]);
        EndTime.value = timeStr(datetimes.value[1]);
      }
    };
    const tableData = ref([]);
    const chooseData = ref([]);
    const handleSelectionChange = (val: []) => {
      chooseData.value = val;
    };
    const shortcuts = [
      {
        text: "Last week",
        value: () => {
          const end = new Date();
          const start = new Date();
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
          return [start, end];
        },
      },
      {
        text: "Last month",
        value: () => {
          const end = new Date();
          const start = new Date();
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
          return [start, end];
        },
      },
      {
        text: "Last 3 months",
        value: () => {
          const end = new Date();
          const start = new Date();
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
          return [start, end];
        },
      },
    ];
    // 获取表格数据
    // params <init> Boolean ，默认为false，用于判断是否需要初始化分页
    const getTableData = (init: boolean) => {
      loading.value = true;
      if (init) {
        page.index = 1;
      }
      let params = {
        Page: page.index,
        Count: page.size,
        KeyWord: KeyWord.input,
        StartTime: StartTime.value,
        EndTime: EndTime.value,
      };

      getData(params)
        .then((res) => {
          let data = res.Data;
          // if (Array.isArray(data)) {
          //   data.forEach((d) => {
          //     const select = selectData.find(
          //       (select) => select.value === d.choose
          //     );
          //     select
          //       ? (d.chooseName = select.label)
          //       : (d.chooseName = d.choose);
          //     const radio = radioData.find(
          //       (select) => select.value === d.radio
          //     );
          //     radio ? (d.radioName = radio.label) : d.radio;
          //   });
          // }
          tableData.value = res.Data;
          page.total = Number(res.Sum);
        })
        .catch((error) => {
          tableData.value = [];
          page.index = 1;
          page.total = 0;
        })
        .finally(() => {
          loading.value = false;
        });
    };
    // 删除功能
    const handleDel = (data: object[]) => {
      let params = {
        ids: data
          .map((e: any) => {
            return e.id;
          })
          .join(","),
      };
      del(params).then((res) => {
        ElMessage({
          type: "success",
          message: "删除成功",
        });
        getTableData(tableData.value.length === 1 ? true : false);
      });
    };
    // 新增弹窗功能
    const handleAdd = () => {
      layer.title = "新增数据";
      layer.show = true;
      delete layer.row;
    };
    // 编辑弹窗功能
    const handleEdit = (row: object) => {
      layer.title = "编辑数据";
      layer.row = row;
      layer.show = true;
    };
    getTableData(true);
    return {
      Plus,
      Search,
      Delete,
      KeyWord,
      datetimes,
      tableData,
      chooseData,
      loading,
      page,
      layer,
      StartTime,
      EndTime,
      shortcuts,
      handleSelectionChange,
      handleAdd,
      handleEdit,
      handleDel,
      getTableData,

      timeFn1,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
