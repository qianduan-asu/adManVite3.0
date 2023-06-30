<template>
  <div class="box">
    <basic-template />
     <Card />
     <Charts /> 
    <!-- <el-button-group>
      <el-button type="primary" @click="switchMap">
        <p v-show="googleShow">English</p>
        <p v-show="!googleShow">中文</p>
      </el-button>
    </el-button-group> -->
    <!-- <GMapMap
      v-show="!googleShow"
      :center="{ lat: 51.093048, lng: 6.84212 }"
      :zoom="7"
      map-type-id="terrain"
      style="width: 100vw; height: 900px; display: block"
    >
    </GMapMap> -->
    <!-- <div class="spatialSampling" v-show="googleShow">
      <div id="map_container"></div>
    </div> -->
  </div>
</template>

<script lang="ts">
import { baidu } from "@/utils/system/statistics";
import { log } from "console";
import { defineComponent } from "vue";
import basicTemplate from "./components/basic-template.vue";
import Card from "./components/card/index.vue";
import Charts from "./components/charts/index.vue";
import { ref } from "vue";

export default defineComponent({
  components: {
    Card,
    Charts,
    basicTemplate,
  },

  setup() {
    const googleShow = ref(true);
    return {
      center: { lat: 51.093048, lng: 6.84212 },
      googleShow,
    };
  },
  methods: {
    switchMap() {
      this.googleShow = !this.googleShow;
    },
  },
  // mounted() {
  //   var purpleStyle = [
  //     {
  //       featureType: "land",
  //       elementType: "geometry",
  //       stylers: {
  //         visibility: "on",
  //         color: "#f1f1f1ff",
  //       },
  //     },
  //     {
  //       featureType: "water",
  //       elementType: "geometry",
  //       stylers: {
  //         visibility: "on",
  //         color: "#54afebff",
  //       },
  //     },
  //     {
  //       featureType: "green",
  //       elementType: "geometry",
  //       stylers: {
  //         visibility: "on",
  //         color: "#65a7fcff",
  //       },
  //     },
  //     {
  //       featureType: "building",
  //       elementType: "geometry",
  //       stylers: {
  //         visibility: "on",
  //       },
  //     },
  //     {
  //       featureType: "building",
  //       elementType: "geometry.topfill",
  //       stylers: {
  //         color: "#ffffffb3",
  //       },
  //     },
  //     {
  //       featureType: "building",
  //       elementType: "geometry.sidefill",
  //       stylers: {
  //         color: "#ffffffb3",
  //       },
  //     },
  //     {
  //       featureType: "building",
  //       elementType: "geometry.stroke",
  //       stylers: {
  //         color: "#dadadab3",
  //       },
  //     },
  //     {
  //       featureType: "subwaystation",
  //       elementType: "geometry",
  //       stylers: {
  //         visibility: "on",
  //         color: "#b15454B2",
  //       },
  //     },
  //     {
  //       featureType: "education",
  //       elementType: "geometry",
  //       stylers: {
  //         visibility: "on",
  //         color: "#cdebffff",
  //       },
  //     },
  //     {
  //       featureType: "medical",
  //       elementType: "geometry",
  //       stylers: {
  //         visibility: "on",
  //         color: "#cdebffff",
  //       },
  //     },
  //     {
  //       featureType: "scenicspots",
  //       elementType: "geometry",
  //       stylers: {
  //         visibility: "on",
  //         color: "#cdebffff",
  //       },
  //     },
  //     {
  //       featureType: "highway",
  //       elementType: "geometry",
  //       stylers: {
  //         visibility: "on",
  //         weight: 4,
  //       },
  //     },
  //     {
  //       featureType: "highway",
  //       elementType: "geometry.fill",
  //       stylers: {
  //         color: "#9dcaffff",
  //       },
  //     },
  //     {
  //       featureType: "highway",
  //       elementType: "geometry.stroke",
  //       stylers: {
  //         color: "#fed66900",
  //       },
  //     },
  //     {
  //       featureType: "highway",
  //       elementType: "labels",
  //       stylers: {
  //         visibility: "on",
  //       },
  //     },
  //     {
  //       featureType: "highway",
  //       elementType: "labels.text.fill",
  //       stylers: {
  //         color: "#8f5a33ff",
  //       },
  //     },
  //     {
  //       featureType: "highway",
  //       elementType: "labels.text.stroke",
  //       stylers: {
  //         color: "#ffffffff",
  //       },
  //     },
  //     {
  //       featureType: "highway",
  //       elementType: "labels.icon",
  //       stylers: {
  //         visibility: "on",
  //       },
  //     },
  //     {
  //       featureType: "arterial",
  //       elementType: "geometry",
  //       stylers: {
  //         visibility: "on",
  //         weight: 2,
  //       },
  //     },
  //     {
  //       featureType: "arterial",
  //       elementType: "geometry.fill",
  //       stylers: {
  //         color: "#428ee9ff",
  //       },
  //     },
  //     {
  //       featureType: "arterial",
  //       elementType: "geometry.stroke",
  //       stylers: {
  //         color: "#428ee900",
  //       },
  //     },
  //     {
  //       featureType: "arterial",
  //       elementType: "labels",
  //       stylers: {
  //         visibility: "on",
  //       },
  //     },
  //     {
  //       featureType: "arterial",
  //       elementType: "labels.text.fill",
  //       stylers: {
  //         color: "#ffffffff",
  //       },
  //     },
  //     {
  //       featureType: "arterial",
  //       elementType: "labels.text.stroke",
  //       stylers: {
  //         color: "#428ee9ff",
  //       },
  //     },
  //     {
  //       featureType: "local",
  //       elementType: "geometry",
  //       stylers: {
  //         visibility: "on",
  //         weight: 1,
  //       },
  //     },
  //     {
  //       featureType: "local",
  //       elementType: "geometry.fill",
  //       stylers: {
  //         color: "#ffffffff",
  //       },
  //     },
  //     {
  //       featureType: "local",
  //       elementType: "geometry.stroke",
  //       stylers: {
  //         color: "#ffffffff",
  //       },
  //     },
  //     {
  //       featureType: "local",
  //       elementType: "labels",
  //       stylers: {
  //         visibility: "on",
  //       },
  //     },
  //     {
  //       featureType: "local",
  //       elementType: "labels.text.fill",
  //       stylers: {
  //         color: "#979c9aff",
  //       },
  //     },
  //     {
  //       featureType: "local",
  //       elementType: "labels.text.stroke",
  //       stylers: {
  //         color: "#ffffffff",
  //       },
  //     },
  //     {
  //       featureType: "railway",
  //       elementType: "geometry",
  //       stylers: {
  //         visibility: "off",
  //         weight: 1,
  //       },
  //     },
  //     {
  //       featureType: "railway",
  //       elementType: "geometry.fill",
  //       stylers: {
  //         color: "#949494ff",
  //       },
  //     },
  //     {
  //       featureType: "railway",
  //       elementType: "geometry.stroke",
  //       stylers: {
  //         color: "#ffffffff",
  //       },
  //     },
  //     {
  //       featureType: "subway",
  //       elementType: "geometry",
  //       stylers: {
  //         visibility: "off",
  //         weight: 1,
  //       },
  //     },
  //     {
  //       featureType: "subway",
  //       elementType: "geometry.fill",
  //       stylers: {
  //         color: "#d8d8d8ff",
  //       },
  //     },
  //     {
  //       featureType: "subway",
  //       elementType: "geometry.stroke",
  //       stylers: {
  //         color: "#ffffffff",
  //       },
  //     },
  //     {
  //       featureType: "subway",
  //       elementType: "labels",
  //       stylers: {
  //         visibility: "on",
  //       },
  //     },
  //     {
  //       featureType: "subway",
  //       elementType: "labels.text.fill",
  //       stylers: {
  //         color: "#979c9aff",
  //       },
  //     },
  //     {
  //       featureType: "subway",
  //       elementType: "labels.text.stroke",
  //       stylers: {
  //         color: "#ffffffff",
  //       },
  //     },
  //     {
  //       featureType: "continent",
  //       elementType: "labels",
  //       stylers: {
  //         visibility: "on",
  //       },
  //     },
  //     {
  //       featureType: "continent",
  //       elementType: "labels.icon",
  //       stylers: {
  //         visibility: "on",
  //       },
  //     },
  //     {
  //       featureType: "continent",
  //       elementType: "labels.text.fill",
  //       stylers: {
  //         color: "#333333ff",
  //       },
  //     },
  //     {
  //       featureType: "continent",
  //       elementType: "labels.text.stroke",
  //       stylers: {
  //         color: "#ffffffff",
  //       },
  //     },
  //     {
  //       featureType: "city",
  //       elementType: "labels.icon",
  //       stylers: {
  //         visibility: "off",
  //       },
  //     },
  //     {
  //       featureType: "city",
  //       elementType: "labels",
  //       stylers: {
  //         visibility: "on",
  //       },
  //     },
  //     {
  //       featureType: "city",
  //       elementType: "labels.text.fill",
  //       stylers: {
  //         color: "#ffffffff",
  //       },
  //     },
  //     {
  //       featureType: "city",
  //       elementType: "labels.text.stroke",
  //       stylers: {
  //         color: "#428ee9ff",
  //         weight: 3,
  //       },
  //     },
  //     {
  //       featureType: "town",
  //       elementType: "labels.icon",
  //       stylers: {
  //         visibility: "on",
  //       },
  //     },
  //     {
  //       featureType: "town",
  //       elementType: "labels",
  //       stylers: {
  //         visibility: "off",
  //       },
  //     },
  //     {
  //       featureType: "town",
  //       elementType: "labels.text.fill",
  //       stylers: {
  //         color: "#454d50ff",
  //       },
  //     },
  //     {
  //       featureType: "town",
  //       elementType: "labels.text.stroke",
  //       stylers: {
  //         color: "#ffffffff",
  //       },
  //     },
  //     {
  //       featureType: "road",
  //       elementType: "geometry.fill",
  //       stylers: {
  //         color: "#bddbfdff",
  //       },
  //     },
  //     {
  //       featureType: "poilabel",
  //       elementType: "labels.icon",
  //       stylers: {
  //         visibility: "off",
  //       },
  //     },
  //     {
  //       featureType: "poilabel",
  //       elementType: "labels.text.stroke",
  //       stylers: {
  //         color: "#428ee9ff",
  //         weight: 3,
  //       },
  //     },
  //     {
  //       featureType: "poilabel",
  //       elementType: "labels.text.fill",
  //       stylers: {
  //         color: "#ffffffff",
  //       },
  //     },
  //     {
  //       featureType: "districtlabel",
  //       elementType: "labels",
  //       stylers: {
  //         visibility: "on",
  //       },
  //     },
  //     {
  //       featureType: "manmade",
  //       elementType: "geometry",
  //       stylers: {
  //         color: "#cdebffff",
  //       },
  //     },
  //     {
  //       featureType: "restaurantlabel",
  //       elementType: "labels",
  //       stylers: {
  //         visibility: "off",
  //       },
  //     },
  //     {
  //       featureType: "restaurantlabel",
  //       elementType: "labels.icon",
  //       stylers: {
  //         visibility: "off",
  //       },
  //     },
  //     {
  //       featureType: "lifeservicelabel",
  //       elementType: "labels",
  //       stylers: {
  //         visibility: "off",
  //       },
  //     },
  //     {
  //       featureType: "lifeservicelabel",
  //       elementType: "labels.icon",
  //       stylers: {
  //         visibility: "off",
  //       },
  //     },
  //     {
  //       featureType: "carservicelabel",
  //       elementType: "labels",
  //       stylers: {
  //         visibility: "off",
  //       },
  //     },
  //     {
  //       featureType: "carservicelabel",
  //       elementType: "labels.icon",
  //       stylers: {
  //         visibility: "off",
  //       },
  //     },
  //     {
  //       featureType: "financelabel",
  //       elementType: "labels",
  //       stylers: {
  //         visibility: "off",
  //       },
  //     },
  //     {
  //       featureType: "financelabel",
  //       elementType: "labels.icon",
  //       stylers: {
  //         visibility: "off",
  //       },
  //     },
  //     {
  //       featureType: "otherlabel",
  //       elementType: "labels",
  //       stylers: {
  //         visibility: "off",
  //       },
  //     },
  //     {
  //       featureType: "otherlabel",
  //       elementType: "labels.icon",
  //       stylers: {
  //         visibility: "off",
  //       },
  //     },
  //     {
  //       featureType: "companylabel",
  //       elementType: "labels",
  //       stylers: {
  //         visibility: "off",
  //       },
  //     },
  //     {
  //       featureType: "companylabel",
  //       elementType: "labels.icon",
  //       stylers: {
  //         visibility: "off",
  //       },
  //     },
  //     {
  //       featureType: "businesstowerlabel",
  //       elementType: "labels",
  //       stylers: {
  //         visibility: "off",
  //       },
  //     },
  //     {
  //       featureType: "businesstowerlabel",
  //       elementType: "labels.icon",
  //       stylers: {
  //         visibility: "off",
  //       },
  //     },
  //     {
  //       featureType: "estatelabel",
  //       elementType: "labels",
  //       stylers: {
  //         visibility: "off",
  //       },
  //     },
  //     {
  //       featureType: "estatelabel",
  //       elementType: "labels.icon",
  //       stylers: {
  //         visibility: "off",
  //       },
  //     },
  //     {
  //       featureType: "poilabel",
  //       elementType: "labels",
  //       stylers: {
  //         visibility: "on",
  //       },
  //     },
  //     {
  //       featureType: "highwaysign",
  //       elementType: "labels",
  //       stylers: {
  //         visibility: "off",
  //       },
  //     },
  //     {
  //       featureType: "highwaysign",
  //       elementType: "labels.icon",
  //       stylers: {
  //         visibility: "off",
  //       },
  //     },
  //     {
  //       featureType: "nationalwaysign",
  //       elementType: "labels",
  //       stylers: {
  //         visibility: "off",
  //       },
  //     },
  //     {
  //       featureType: "nationalwaysign",
  //       elementType: "labels.icon",
  //       stylers: {
  //         visibility: "off",
  //       },
  //     },
  //     {
  //       featureType: "provincialwaysign",
  //       elementType: "labels",
  //       stylers: {
  //         visibility: "off",
  //       },
  //     },
  //     {
  //       featureType: "provincialwaysign",
  //       elementType: "labels.icon",
  //       stylers: {
  //         visibility: "off",
  //       },
  //     },
  //     {
  //       featureType: "tertiarywaysign",
  //       elementType: "labels",
  //       stylers: {
  //         visibility: "off",
  //       },
  //     },
  //     {
  //       featureType: "tertiarywaysign",
  //       elementType: "labels.icon",
  //       stylers: {
  //         visibility: "off",
  //       },
  //     },
  //     {
  //       featureType: "subwaylabel",
  //       elementType: "labels.icon",
  //       stylers: {
  //         visibility: "off",
  //       },
  //     },
  //     {
  //       featureType: "subwaylabel",
  //       elementType: "labels",
  //       stylers: {
  //         visibility: "off",
  //       },
  //     },
  //     {
  //       featureType: "nationalway",
  //       elementType: "geometry.fill",
  //       stylers: {
  //         color: "#78b6ffff",
  //       },
  //     },
  //     {
  //       featureType: "road",
  //       elementType: "geometry.stroke",
  //       stylers: {
  //         color: "#69acffff",
  //       },
  //     },
  //     {
  //       featureType: "entertainment",
  //       elementType: "geometry",
  //       stylers: {
  //         color: "#cdebffff",
  //       },
  //     },
  //     {
  //       featureType: "estate",
  //       elementType: "geometry",
  //       stylers: {
  //         color: "#cdebffff",
  //       },
  //     },
  //     {
  //       featureType: "shopping",
  //       elementType: "geometry",
  //       stylers: {
  //         color: "#cdebffff",
  //       },
  //     },
  //     {
  //       featureType: "transportation",
  //       elementType: "geometry",
  //       stylers: {
  //         color: "#cdebffff",
  //       },
  //     },
  //     {
  //       featureType: "tertiaryway",
  //       elementType: "geometry",
  //       stylers: {
  //         visibility: "on",
  //       },
  //     },
  //     {
  //       featureType: "tertiaryway",
  //       elementType: "labels",
  //       stylers: {
  //         visibility: "on",
  //       },
  //     },
  //     {
  //       featureType: "tertiaryway",
  //       elementType: "labels.text.fill",
  //       stylers: {
  //         color: "#ffffffff",
  //       },
  //     },
  //     {
  //       featureType: "tertiaryway",
  //       elementType: "labels.text.stroke",
  //       stylers: {
  //         color: "#428ee9ff",
  //       },
  //     },
  //     {
  //       featureType: "districtlabel",
  //       elementType: "labels.text.fill",
  //       stylers: {
  //         color: "#ffffffff",
  //       },
  //     },
  //     {
  //       featureType: "districtlabel",
  //       elementType: "labels.text.stroke",
  //       stylers: {
  //         color: "#428ee9ff",
  //       },
  //     },
  //     {
  //       featureType: "village",
  //       elementType: "labels",
  //       stylers: {
  //         visibility: "on",
  //       },
  //     },
  //     {
  //       featureType: "district",
  //       elementType: "labels.text",
  //       stylers: {
  //         fontsize: 20,
  //       },
  //     },
  //     {
  //       featureType: "district",
  //       elementType: "labels.text.fill",
  //       stylers: {
  //         color: "#ffffffff",
  //       },
  //     },
  //     {
  //       featureType: "district",
  //       elementType: "labels.text.stroke",
  //       stylers: {
  //         color: "#428ee9ff",
  //       },
  //     },
  //     {
  //       featureType: "highway",
  //       stylers: {
  //         curZoomRegionId: "0",
  //         curZoomRegion: "6,10",
  //         level: "6",
  //       },
  //     },
  //     {
  //       featureType: "highway",
  //       stylers: {
  //         curZoomRegionId: "0",
  //         curZoomRegion: "6,10",
  //         level: "7",
  //       },
  //     },
  //     {
  //       featureType: "highway",
  //       stylers: {
  //         curZoomRegionId: "0",
  //         curZoomRegion: "6,10",
  //         level: "8",
  //       },
  //     },
  //     {
  //       featureType: "highway",
  //       stylers: {
  //         curZoomRegionId: "0",
  //         curZoomRegion: "6,10",
  //         level: "9",
  //       },
  //     },
  //     {
  //       featureType: "highway",
  //       stylers: {
  //         curZoomRegionId: "0",
  //         curZoomRegion: "6,10",
  //         level: "10",
  //       },
  //     },
  //     {
  //       featureType: "highway",
  //       elementType: "geometry",
  //       stylers: {
  //         visibility: "off",
  //         curZoomRegionId: "0",
  //         curZoomRegion: "6,10",
  //         level: "6",
  //       },
  //     },
  //     {
  //       featureType: "highway",
  //       elementType: "geometry",
  //       stylers: {
  //         visibility: "off",
  //         curZoomRegionId: "0",
  //         curZoomRegion: "6,10",
  //         level: "7",
  //       },
  //     },
  //     {
  //       featureType: "highway",
  //       elementType: "geometry",
  //       stylers: {
  //         visibility: "off",
  //         curZoomRegionId: "0",
  //         curZoomRegion: "6,10",
  //         level: "8",
  //       },
  //     },
  //     {
  //       featureType: "highway",
  //       elementType: "geometry",
  //       stylers: {
  //         visibility: "off",
  //         curZoomRegionId: "0",
  //         curZoomRegion: "6,10",
  //         level: "9",
  //       },
  //     },
  //     {
  //       featureType: "highway",
  //       elementType: "geometry",
  //       stylers: {
  //         visibility: "off",
  //         curZoomRegionId: "0",
  //         curZoomRegion: "6,10",
  //         level: "10",
  //       },
  //     },
  //     {
  //       featureType: "highway",
  //       elementType: "labels",
  //       stylers: {
  //         visibility: "off",
  //         curZoomRegionId: "0",
  //         curZoomRegion: "6,10",
  //         level: "6",
  //       },
  //     },
  //     {
  //       featureType: "highway",
  //       elementType: "labels",
  //       stylers: {
  //         visibility: "off",
  //         curZoomRegionId: "0",
  //         curZoomRegion: "6,10",
  //         level: "7",
  //       },
  //     },
  //     {
  //       featureType: "highway",
  //       elementType: "labels",
  //       stylers: {
  //         visibility: "off",
  //         curZoomRegionId: "0",
  //         curZoomRegion: "6,10",
  //         level: "8",
  //       },
  //     },
  //     {
  //       featureType: "highway",
  //       elementType: "labels",
  //       stylers: {
  //         visibility: "off",
  //         curZoomRegionId: "0",
  //         curZoomRegion: "6,10",
  //         level: "9",
  //       },
  //     },
  //     {
  //       featureType: "highway",
  //       elementType: "labels",
  //       stylers: {
  //         visibility: "off",
  //         curZoomRegionId: "0",
  //         curZoomRegion: "6,10",
  //         level: "10",
  //       },
  //     },
  //     {
  //       featureType: "nationalway",
  //       stylers: {
  //         curZoomRegionId: "0",
  //         curZoomRegion: "6,10",
  //         level: "6",
  //       },
  //     },
  //     {
  //       featureType: "nationalway",
  //       stylers: {
  //         curZoomRegionId: "0",
  //         curZoomRegion: "6,10",
  //         level: "7",
  //       },
  //     },
  //     {
  //       featureType: "nationalway",
  //       stylers: {
  //         curZoomRegionId: "0",
  //         curZoomRegion: "6,10",
  //         level: "8",
  //       },
  //     },
  //     {
  //       featureType: "nationalway",
  //       stylers: {
  //         curZoomRegionId: "0",
  //         curZoomRegion: "6,10",
  //         level: "9",
  //       },
  //     },
  //     {
  //       featureType: "nationalway",
  //       stylers: {
  //         curZoomRegionId: "0",
  //         curZoomRegion: "6,10",
  //         level: "10",
  //       },
  //     },
  //     {
  //       featureType: "nationalway",
  //       elementType: "geometry",
  //       stylers: {
  //         visibility: "off",
  //         curZoomRegionId: "0",
  //         curZoomRegion: "6,10",
  //         level: "6",
  //       },
  //     },
  //     {
  //       featureType: "nationalway",
  //       elementType: "geometry",
  //       stylers: {
  //         visibility: "off",
  //         curZoomRegionId: "0",
  //         curZoomRegion: "6,10",
  //         level: "7",
  //       },
  //     },
  //     {
  //       featureType: "nationalway",
  //       elementType: "geometry",
  //       stylers: {
  //         visibility: "off",
  //         curZoomRegionId: "0",
  //         curZoomRegion: "6,10",
  //         level: "8",
  //       },
  //     },
  //     {
  //       featureType: "nationalway",
  //       elementType: "geometry",
  //       stylers: {
  //         visibility: "off",
  //         curZoomRegionId: "0",
  //         curZoomRegion: "6,10",
  //         level: "9",
  //       },
  //     },
  //     {
  //       featureType: "nationalway",
  //       elementType: "geometry",
  //       stylers: {
  //         visibility: "off",
  //         curZoomRegionId: "0",
  //         curZoomRegion: "6,10",
  //         level: "10",
  //       },
  //     },
  //     {
  //       featureType: "nationalway",
  //       elementType: "labels",
  //       stylers: {
  //         visibility: "off",
  //         curZoomRegionId: "0",
  //         curZoomRegion: "6,10",
  //         level: "6",
  //       },
  //     },
  //     {
  //       featureType: "nationalway",
  //       elementType: "labels",
  //       stylers: {
  //         visibility: "off",
  //         curZoomRegionId: "0",
  //         curZoomRegion: "6,10",
  //         level: "7",
  //       },
  //     },
  //     {
  //       featureType: "nationalway",
  //       elementType: "labels",
  //       stylers: {
  //         visibility: "off",
  //         curZoomRegionId: "0",
  //         curZoomRegion: "6,10",
  //         level: "8",
  //       },
  //     },
  //     {
  //       featureType: "nationalway",
  //       elementType: "labels",
  //       stylers: {
  //         visibility: "off",
  //         curZoomRegionId: "0",
  //         curZoomRegion: "6,10",
  //         level: "9",
  //       },
  //     },
  //     {
  //       featureType: "nationalway",
  //       elementType: "labels",
  //       stylers: {
  //         visibility: "off",
  //         curZoomRegionId: "0",
  //         curZoomRegion: "6,10",
  //         level: "10",
  //       },
  //     },
  //     {
  //       featureType: "district",
  //       stylers: {
  //         curZoomRegionId: "0",
  //         curZoomRegion: "8,10",
  //         level: "8",
  //       },
  //     },
  //     {
  //       featureType: "district",
  //       stylers: {
  //         curZoomRegionId: "0",
  //         curZoomRegion: "8,10",
  //         level: "9",
  //       },
  //     },
  //     {
  //       featureType: "district",
  //       stylers: {
  //         curZoomRegionId: "0",
  //         curZoomRegion: "8,10",
  //         level: "10",
  //       },
  //     },
  //     {
  //       featureType: "district",
  //       elementType: "labels",
  //       stylers: {
  //         visibility: "off",
  //         curZoomRegionId: "0",
  //         curZoomRegion: "8,10",
  //         level: "8",
  //       },
  //     },
  //     {
  //       featureType: "district",
  //       elementType: "labels",
  //       stylers: {
  //         visibility: "off",
  //         curZoomRegionId: "0",
  //         curZoomRegion: "8,10",
  //         level: "9",
  //       },
  //     },
  //     {
  //       featureType: "district",
  //       elementType: "labels",
  //       stylers: {
  //         visibility: "off",
  //         curZoomRegionId: "0",
  //         curZoomRegion: "8,10",
  //         level: "10",
  //       },
  //     },
  //     {
  //       featureType: "cityhighway",
  //       elementType: "geometry",
  //       stylers: {
  //         visibility: "on",
  //       },
  //     },
  //     {
  //       featureType: "cityhighway",
  //       stylers: {
  //         curZoomRegionId: "0",
  //         curZoomRegion: "6,9",
  //         level: "6",
  //       },
  //     },
  //     {
  //       featureType: "cityhighway",
  //       stylers: {
  //         curZoomRegionId: "0",
  //         curZoomRegion: "6,9",
  //         level: "7",
  //       },
  //     },
  //     {
  //       featureType: "cityhighway",
  //       stylers: {
  //         curZoomRegionId: "0",
  //         curZoomRegion: "6,9",
  //         level: "8",
  //       },
  //     },
  //     {
  //       featureType: "cityhighway",
  //       stylers: {
  //         curZoomRegionId: "0",
  //         curZoomRegion: "6,9",
  //         level: "9",
  //       },
  //     },
  //     {
  //       featureType: "cityhighway",
  //       elementType: "geometry",
  //       stylers: {
  //         visibility: "off",
  //         curZoomRegionId: "0",
  //         curZoomRegion: "6,9",
  //         level: "6",
  //       },
  //     },
  //     {
  //       featureType: "cityhighway",
  //       elementType: "geometry",
  //       stylers: {
  //         visibility: "off",
  //         curZoomRegionId: "0",
  //         curZoomRegion: "6,9",
  //         level: "7",
  //       },
  //     },
  //     {
  //       featureType: "cityhighway",
  //       elementType: "geometry",
  //       stylers: {
  //         visibility: "off",
  //         curZoomRegionId: "0",
  //         curZoomRegion: "6,9",
  //         level: "8",
  //       },
  //     },
  //     {
  //       featureType: "cityhighway",
  //       elementType: "geometry",
  //       stylers: {
  //         visibility: "off",
  //         curZoomRegionId: "0",
  //         curZoomRegion: "6,9",
  //         level: "9",
  //       },
  //     },
  //     {
  //       featureType: "cityhighway",
  //       elementType: "labels",
  //       stylers: {
  //         visibility: "off",
  //         curZoomRegionId: "0",
  //         curZoomRegion: "6,9",
  //         level: "6",
  //       },
  //     },
  //     {
  //       featureType: "cityhighway",
  //       elementType: "labels",
  //       stylers: {
  //         visibility: "off",
  //         curZoomRegionId: "0",
  //         curZoomRegion: "6,9",
  //         level: "7",
  //       },
  //     },
  //     {
  //       featureType: "cityhighway",
  //       elementType: "labels",
  //       stylers: {
  //         visibility: "off",
  //         curZoomRegionId: "0",
  //         curZoomRegion: "6,9",
  //         level: "8",
  //       },
  //     },
  //     {
  //       featureType: "cityhighway",
  //       elementType: "labels",
  //       stylers: {
  //         visibility: "off",
  //         curZoomRegionId: "0",
  //         curZoomRegion: "6,9",
  //         level: "9",
  //       },
  //     },
  //     {
  //       featureType: "districtlabel",
  //       elementType: "labels.icon",
  //       stylers: {
  //         visibility: "on",
  //       },
  //     },
  //     {
  //       featureType: "country",
  //       elementType: "labels.text.fill",
  //       stylers: {
  //         color: "#ffffffff",
  //       },
  //     },
  //     {
  //       featureType: "country",
  //       elementType: "labels.text.stroke",
  //       stylers: {
  //         color: "#428ee9ff",
  //         weight: 6,
  //       },
  //     },
  //     {
  //       featureType: "nationalway",
  //       elementType: "geometry",
  //       stylers: {
  //         visibility: "on",
  //       },
  //     },
  //     {
  //       featureType: "nationalway",
  //       elementType: "geometry.stroke",
  //       stylers: {
  //         color: "#ffffff00",
  //       },
  //     },
  //     {
  //       featureType: "provincialway",
  //       elementType: "geometry",
  //       stylers: {
  //         visibility: "on",
  //       },
  //     },
  //     {
  //       featureType: "cityhighway",
  //       elementType: "geometry.fill",
  //       stylers: {
  //         color: "#8ec1ffff",
  //       },
  //     },
  //     {
  //       featureType: "educationlabel",
  //       elementType: "labels",
  //       stylers: {
  //         visibility: "on",
  //       },
  //     },
  //     {
  //       featureType: "educationlabel",
  //       elementType: "labels.icon",
  //       stylers: {
  //         visibility: "off",
  //       },
  //     },
  //     {
  //       featureType: "governmentlabel",
  //       elementType: "labels",
  //       stylers: {
  //         visibility: "off",
  //       },
  //     },
  //     {
  //       featureType: "governmentlabel",
  //       elementType: "labels.icon",
  //       stylers: {
  //         visibility: "off",
  //       },
  //     },
  //     {
  //       featureType: "educationlabel",
  //       elementType: "labels.text.fill",
  //       stylers: {
  //         color: "#ffffffff",
  //       },
  //     },
  //     {
  //       featureType: "educationlabel",
  //       elementType: "labels.text.stroke",
  //       stylers: {
  //         color: "#428ee9ff",
  //         weight: 3,
  //       },
  //     },
  //     {
  //       featureType: "fourlevelway",
  //       elementType: "geometry",
  //       stylers: {
  //         visibility: "on",
  //       },
  //     },
  //     {
  //       featureType: "provincialway",
  //       elementType: "geometry.fill",
  //       stylers: {
  //         color: "#c8e1ffff",
  //       },
  //     },
  //     {
  //       featureType: "provincialway",
  //       elementType: "geometry.stroke",
  //       stylers: {
  //         color: "#ffffff00",
  //       },
  //     },
  //     {
  //       featureType: "poilabel",
  //       elementType: "labels.text",
  //       stylers: {
  //         fontsize: 20,
  //       },
  //     },
  //     {
  //       featureType: "cityhighway",
  //       elementType: "labels.text.fill",
  //       stylers: {
  //         color: "#ffffffff",
  //       },
  //     },
  //     {
  //       featureType: "cityhighway",
  //       elementType: "labels.text.stroke",
  //       stylers: {
  //         color: "#428ee9ff",
  //         weight: 3,
  //       },
  //     },
  //     {
  //       featureType: "provincialway",
  //       stylers: {
  //         curZoomRegionId: "0",
  //         curZoomRegion: "8,10",
  //         level: "8",
  //       },
  //     },
  //     {
  //       featureType: "provincialway",
  //       stylers: {
  //         curZoomRegionId: "0",
  //         curZoomRegion: "8,10",
  //         level: "9",
  //       },
  //     },
  //     {
  //       featureType: "provincialway",
  //       stylers: {
  //         curZoomRegionId: "0",
  //         curZoomRegion: "8,10",
  //         level: "10",
  //       },
  //     },
  //     {
  //       featureType: "provincialway",
  //       elementType: "geometry",
  //       stylers: {
  //         visibility: "off",
  //         curZoomRegionId: "0",
  //         weight: 3,
  //         curZoomRegion: "8,10",
  //         level: "8",
  //       },
  //     },
  //     {
  //       featureType: "provincialway",
  //       elementType: "geometry",
  //       stylers: {
  //         visibility: "off",
  //         curZoomRegionId: "0",
  //         weight: 3,
  //         curZoomRegion: "8,10",
  //         level: "9",
  //       },
  //     },
  //     {
  //       featureType: "provincialway",
  //       elementType: "geometry",
  //       stylers: {
  //         visibility: "off",
  //         curZoomRegionId: "0",
  //         weight: 3,
  //         curZoomRegion: "8,10",
  //         level: "10",
  //       },
  //     },
  //     {
  //       featureType: "continent",
  //       stylers: {
  //         curZoomRegionId: "0",
  //         curZoomRegion: "3,5",
  //         level: "3",
  //       },
  //     },
  //     {
  //       featureType: "continent",
  //       stylers: {
  //         curZoomRegionId: "0",
  //         curZoomRegion: "3,5",
  //         level: "4",
  //       },
  //     },
  //     {
  //       featureType: "continent",
  //       stylers: {
  //         curZoomRegionId: "0",
  //         curZoomRegion: "3,5",
  //         level: "5",
  //       },
  //     },
  //     {
  //       featureType: "island",
  //       elementType: "labels",
  //       stylers: {
  //         visibility: "on",
  //       },
  //     },
  //   ];

  //   var map = initMap({
  //     tilt: 48.8,
  //     heading: 0,
  //     center: [105.348145, 28.165926],
  //     zoom: 7,
  //     style: purpleStyle,
  //   });

  //   var view = new mapvgl.View({
  //     map: map,
  //   });

  //   fetch("../public/maps/china.json")
  //     .then((rs) => {
  //       return rs.json();
  //     })
  //     .then((rs) => {
  //       var data1 = [];
  //       var data2 = [];
  //       var data3 = [];
  //       for (var i = 0; i < rs[0].length; i++) {
  //         var geoCoord = rs[0][i].geoCoord;
  //         data1.push({
  //           geometry: {
  //             type: "Point",
  //             coordinates: geoCoord,
  //           },
  //           properties: {
  //             time: Math.random() * 100,
  //           },
  //         });
  //       }

  //       for (var i = 0; i < rs[1].length; i++) {
  //         var geoCoord = rs[1][i].geoCoord;
  //         data2.push({
  //           geometry: {
  //             type: "Point",
  //             coordinates: geoCoord,
  //           },
  //           properties: {
  //             time: Math.random() * 10,
  //           },
  //         });
  //       }

  //       for (var i = 0; i < rs[2].length; i++) {
  //         var geoCoord = rs[2][i].geoCoord;
  //         data3.push({
  //           geometry: {
  //             type: "Point",
  //             coordinates: geoCoord,
  //           },
  //           properties: {
  //             time: Math.random() * 10,
  //           },
  //         });
  //       }

  //       view.addLayer(
  //         new mapvgl.PointLayer({
  //           blend: "lighter",
  //           shape: "circle",
  //           color: "rgba(255, 77, 77, 0.8)", // 点图层1颜色
  //           data: data1,
  //           size: 1,
  //         })
  //       );

  //       view.addLayer(
  //         new mapvgl.PointLayer({
  //           blend: "lighter",
  //           shape: "circle",
  //           color: "rgba(255, 204, 0, 0.6)", // 点图层2颜色
  //           data: data2,
  //           size: 1.5,
  //         })
  //       );

  //       view.addLayer(
  //         new mapvgl.PointLayer({
  //           blend: "lighter",
  //           shape: "circle",
  //           color: "rgba(255, 255, 0, 0.6)", // 点图层3颜色
  //           data: data3,
  //           size: 2,
  //         })
  //       );

  //       view.addLayer(
  //         new mapvgl.PointTripLayer({
  //           blend: "lighter",
  //           shape: "circle",
  //           startTime: 0,
  //           endTime: 100,
  //           step: 0.1,
  //           trailLength: 10,
  //           color: "rgba(255, 255, 153, 0.5)", // 点动画图层颜色
  //           data: data1,
  //           size: 1.5,
  //         })
  //       );
  //     });
  // },
});
</script>

<style lang="scss" scoped>
.box {
  padding: 15px;
}
.spatialSampling {
  width: 100%;
  height: 100%;
  border: 1px solid red;
  position: absolute;
  #map_container {
    width: 100%;
    height: 100%;
  }
}
.el-button-group {
  position: fixed;
  z-index: 9999;
  right: 0;
  margin: 0.5vw 0.5vw 0 0;
}
</style>
