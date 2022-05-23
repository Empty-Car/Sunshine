import { Bar } from "@nivo/bar";

export const BarChart = ({data}) => (
  <Bar
      width={850}
      height={300}
      margin={{ top: 60, right: 80, bottom: 60, left: 80 }}
      data={data}
      indexBy="country"
      keys={["dp"]}
      labelTextColor="inherit:darker(1.4)"
      enableGridX={true}
      maxValue={40}
      // theme={{
      //   axis: {
      //     ticks: {
      //       line: {
      //         stroke: "green"
      //       },
      //       text: {
      //         fill: "black"
      //       }
      //     }
      //   },
      //   grid: {
      //     line: {
      //       stroke: "pink",
      //       strokeWidth: 2,
      //       strokeDasharray: "4 4"
      //     }
      //   }
      // }}
    />
) 