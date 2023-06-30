// import { defineComponent, ref, reactive } from "vue";
// import { useStore } from "vuex";
// import { useRoute, useRouter } from "vue-router";
// import tabsHook from "@/layout/Tabs/tabsHook"; //面包屑

// export default defineComponent({
//   setup() {
//     let menuList = ref(tabsHook.getItem());
//     let activeMenu: any = reactive({ path: "" });
//     const store = useStore();
//     function initMenu(menu: object) {
//       activeMenu = menu
     
//     }
//     function delMenu(menu: any) {
//       let index = 0;
//      store.commit('keepAlive/delKeepAliveComponentsName', 'addTerminal')
//       index = menuList.value.findIndex((item: any) => item.path === menu.path);
//       menuList.value.splice(index, 1);
//       if (menu.path === activeMenu.path) {
//         index - 1 > 0
//           ? router.push(menuList.value[index - 1].path)
//           : router.push(defaultMenu.path);
//       }
//     }
//     const router = useRouter();
//     const route = useRoute();
//     const handleAdd = () => {
//       delMenu(router.currentRoute._rawValue);
//       //   router.back();
//     };
//     initMenu(route)

//     return {
//       handleAdd,
//       delMenu,
//     };
//   },
// });
