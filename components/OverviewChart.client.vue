<script setup lang="ts">
import type { BarSeriesOption } from "echarts/charts";
import { BarChart } from "echarts/charts";
import type {
  GridComponentOption,
  TooltipComponentOption,
} from "echarts/components";
import { GridComponent, TooltipComponent } from "echarts/components";
import type { ComposeOption } from "echarts/core";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import VChart from "vue-echarts";

use([GridComponent, BarChart, CanvasRenderer, TooltipComponent]);

type EChartsOption = ComposeOption<
  GridComponentOption | TooltipComponentOption | BarSeriesOption
>;

const options = ref<EChartsOption>({
  grid: {
    right: 20,
    top: 20,
    bottom: 40,
  },
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
    max: function (value) {
      return Math.ceil(value.max! * 1.25);
    },
  },
  tooltip: {
    trigger: "axis", // Display tooltip when hovering over a data point
  },
  series: [
    {
      data: [120000, 200000, 150000, 80000, 70000, 110000, 130000],
      type: "bar",
      barWidth: 30,
      itemStyle: {
        color: "#EBF9A3",
      },
    },
    {
      data: [150000, 100000, 180000, 90000, 60000, 200000, 110000],
      type: "bar",
      barWidth: 30,
      itemStyle: {
        color: "#2A514C",
      },
    },
  ],
});
</script>

<template>
  <VChart class="w-full" :option="options" autoresize />
</template>
