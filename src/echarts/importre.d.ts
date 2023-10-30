import type { BarSeriesOption, LineSeriesOption } from "echarts/charts";
import type { TitleComponentOption, TooltipComponentOption, GridComponentOption, DatasetComponentOption } from "echarts/components";
import type { ComposeOption } from "echarts/core";
export type ECOption = ComposeOption<BarSeriesOption | LineSeriesOption | TitleComponentOption | TooltipComponentOption | GridComponentOption | DatasetComponentOption>;
