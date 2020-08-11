<template>
  <div>
    <div id="container" style="width:100%; height:947px"></div>
    <div class="input-card">
      <div class="input-item">
        <input type="checkbox" onclick="toggleScale(this)" />比例尺
      </div>

      <div class="input-item">
        <input
          type="checkbox"
          id="toolbar"
          onclick="toggleToolBar(this)"
        />工具条
      </div>

      <div class="input-item">
        <input
          type="checkbox"
          id="toolbarDirection"
          disabled
          onclick="toggleToolBarDirection(this)"
        />工具条方向盘
      </div>

      <div class="input-item">
        <input
          type="checkbox"
          id="toolbarRuler"
          disabled
          onclick="toggleToolBarRuler(this)"
        />工具条标尺
      </div>

      <div class="input-item">
        <input
          type="checkbox"
          id="overview"
          onclick="toggleOverViewShow(this)"
        />显示鹰眼
      </div>

      <div class="input-item">
        <input
          type="checkbox"
          id="overviewOpen"
          disabled
          onclick="toggleOverViewOpen(this)"
        />展开鹰眼
      </div>
    </div>
  </div>
</template>
<script>
  import {
    AMap
  } from 'AMap';
  import VueAMap from 'vue-amap'
  let amapManager = new VueAMap.AMapManager();

  export default {
      name: "",
      data() {
          return {
            amapManager,
            mapEvents: {
                init(o) {
                     o.setMapStyle('amap://styles/macaron');//自定义的高德地图的样式，我选的是马卡龙
                       
               }
          }
        }
     }
 }