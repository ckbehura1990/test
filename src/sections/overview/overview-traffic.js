import PropTypes from 'prop-types';
import ComputerDesktopIcon from '@heroicons/react/24/solid/ComputerDesktopIcon';
import DeviceTabletIcon from '@heroicons/react/24/solid/DeviceTabletIcon';
import PhoneIcon from '@heroicons/react/24/solid/PhoneIcon';
import ReactDOM from 'react-dom';

import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Stack,
  SvgIcon,
  Typography,
  useTheme
} from '@mui/material';
import { Chart } from 'src/components/chart';

const useChartOptions = (labels,updateData) => {
  const theme = useTheme();

  return {
    chart: {
      type: 'donut',
      background: 'transparent',
      events: {
          dataPointSelection: function(event, chartContext, config) {
            console.log(config,chartContext);
            updateData(config);
          }
      },
    },
    colors: [
      theme.palette.primary.main,
      theme.palette.success.main,
      theme.palette.warning.main
    ],
    dataLabels: {
      enabled: false
    },
    labels,
    legend: {
      show: false
    },
    plotOptions: {
      pie: {
        expandOnClick: false
      }
    },
    states: {
      active: {
        filter: {
          type: 'none'
        }
      },
      hover: {
        filter: {
          type: 'none'
        }
      }
    },
    stroke: {
      width: 0
    },
    theme: {
      mode: theme.palette.mode
    },
    // tooltip: {
    //   fillSeriesColor: false
    // },
    tooltip: {
      custom: function({series, seriesIndex, dataPointIndex, w}) {
        //const preRender = () => <OverviewSalesLine/>;

        const element = document.createElement('div');
      //ReactDOM.render(<OverviewSalesLine/>, element);
      console.log(seriesIndex,element.outerHTML);

      let line = "<svg version='1.1' style='font-family: Roboto; font-size: 12px;' xmlns='http://www.w3.org/2000/svg' width='300' height='150' viewBox='0 0 300 150' aria-hidden='false' aria-label='Interactive chart'><defs aria-hidden='true'><clipPath ><rect x='0' y='0' width='246' height='55' fill='none'></rect></clipPath><clipPath ><rect x='0' y='0' width='246' height='55' fill='none'></rect></clipPath></defs><rect fill='#ffffff' x='0' y='0' width='300' height='150' rx='0' ry='0' aria-hidden='true'></rect><rect fill='none' x='44' y='46' width='246' height='55' aria-hidden='true'></rect><g data-z-index='0' aria-hidden='true'></g><rect fill='none' data-z-index='1' x='44' y='46' width='246' height='55' aria-hidden='true'></rect><g data-z-index='1' aria-hidden='true'><path fill='none' stroke-dasharray='none' data-z-index='1' d='M 64.5 46 L 64.5 101' opacity='1'></path><path fill='none' stroke-dasharray='none' data-z-index='1' d='M 84.5 46 L 84.5 101' opacity='1'></path><path fill='none' stroke-dasharray='none' data-z-index='1' d='M 105.5 46 L 105.5 101' opacity='1'></path><path fill='none' stroke-dasharray='none' data-z-index='1' d='M 125.5 46 L 125.5 101' opacity='1'></path><path fill='none' stroke-dasharray='none' data-z-index='1' d='M 146.5 46 L 146.5 101' opacity='1'></path><path fill='none' stroke-dasharray='none' data-z-index='1' d='M 166.5 46 L 166.5 101' opacity='1'></path><path fill='none' stroke-dasharray='none' data-z-index='1' d='M 187.5 46 L 187.5 101' opacity='1'></path><path fill='none' stroke-dasharray='none' data-z-index='1' d='M 207.5 46 L 207.5 101' opacity='1'></path><path fill='none' stroke-dasharray='none' data-z-index='1' d='M 228.5 46 L 228.5 101' opacity='1'></path><path fill='none' stroke-dasharray='none' data-z-index='1' d='M 248.5 46 L 248.5 101' opacity='1'></path><path fill='none' stroke-dasharray='none' data-z-index='1' d='M 269.5 46 L 269.5 101' opacity='1'></path><path fill='none' stroke-dasharray='none' data-z-index='1' d='M 289.5 46 L 289.5 101' opacity='1'></path><path fill='none' stroke-dasharray='none' data-z-index='1' d='M 43.5 46 L 43.5 101' opacity='1'></path></g><g data-z-index='1' aria-hidden='true'><path fill='none' stroke='#e6e6e6' stroke-width='1' stroke-dasharray='none' data-z-index='1' d='M 44 101.5 L 290 101.5' opacity='1'></path><path fill='none' stroke='#e6e6e6' stroke-width='1' stroke-dasharray='none' data-z-index='1' d='M 44 45.5 L 290 45.5' opacity='1'></path></g><g data-z-index='2' aria-hidden='true'><path fill='none' stroke='#ccd6eb' stroke-width='1' data-z-index='7' d='M 44 101.5 L 290 101.5'></path></g><g data-z-index='2' aria-hidden='true'><path fill='none' data-z-index='7' d='M 44 46 L 44 101'></path></g><g data-z-index='3' aria-hidden='false'><g data-z-index='0.1' opacity='1' transform='translate(44,46) scale(1 1)' clip-path='url(#highcharts-m130svy-561-)' aria-hidden='true'><path fill='none' d='M 10.25 19.708333333333 L 30.75 10.541666666666998 L 51.25 41.25 L 71.75 15.125 L 92.25 27.958333333333 L 112.75 36.208333333333 L 133.25 20.625 L 153.75 50.4166666666667 L 174.25 13.291666666666998 L 194.75 37.583333333333 L 215.25 15.583333333333002 L 235.75 15.125' data-z-index='1' stroke='#6f58e9' stroke-width='2' stroke-linejoin='round' stroke-linecap='round'></path><path fill='none' d='M 10.25 19.708333333333 L 30.75 10.541666666666998 L 51.25 41.25 L 71.75 15.125 L 92.25 27.958333333333 L 112.75 36.208333333333 L 133.25 20.625 L 153.75 50.4166666666667 L 174.25 13.291666666666998 L 194.75 37.583333333333 L 215.25 15.583333333333002 L 235.75 15.125' data-z-index='2' stroke-linecap='round' stroke-linejoin='round' stroke='rgba(192,192,192,0.0001)' stroke-width='22' style='cursor: pointer;'></path></g><g data-z-index='0.1' opacity='1' transform='translate(44,46) scale(1 1)' clip-path='none' style='cursor: pointer;' aria-hidden='false'><path fill='#6f58e9' d='M 235 15.125 A 0 0 0 1 1 235 15.125 Z' data-z-index='-1' fill-opacity='0.25' visibility='hidden'></path><path fill='#6f58e9' d='M 10 23.708333333333 A 4 4 0 1 1 10.003999999333336 23.70833133333317 Z' opacity='1' tabindex='-1' role='img' aria-label='Jan, 77. Item 1.' style='outline: none;'></path><path fill='#6f58e9' d='M 30 14.541666666666998 A 4 4 0 1 1 30.003999999333335 14.541664666667165 Z' opacity='1' tabindex='-1' role='img' aria-label='Feb, 97. Item 1.' style='outline: none;'></path><path fill='#6f58e9' d='M 51 45.25 A 4 4 0 1 1 51.00399999933334 45.24999800000017 Z' opacity='1' tabindex='-1' role='img' aria-label='Mar, 30. Item 1.' style='outline: none;'></path><path fill='#6f58e9' d='M 71 19.125 A 4 4 0 1 1 71.00399999933333 19.12499800000017 Z' opacity='1' tabindex='-1' role='img' aria-label='April, 87. Item 1.' style='outline: none;'></path><path fill='#6f58e9' d='M 92 31.958333333333 A 4 4 0 1 1 92.00399999933333 31.95833133333317 Z' opacity='1' tabindex='-1' role='img' aria-label='May, 59. Item 1.' style='outline: none;'></path><path fill='#6f58e9' d='M 112 40.208333333333 A 4 4 0 1 1 112.00399999933333 40.20833133333317 Z' opacity='1' tabindex='-1' role='img' aria-label='June, 41. Item 1.' style='outline: none;'></path><path fill='#6f58e9' d='M 133 24.625 A 4 4 0 1 1 133.00399999933333 24.62499800000017 Z' opacity='1' tabindex='-1' role='img' aria-label='July, 75. Item 1.' style='outline: none;'></path><path fill='#6f58e9' d='M 153 54.4166666666667 A 4 4 0 1 1 153.00399999933333 54.41666466666687 Z' opacity='1' tabindex='-1' role='img' aria-label='Aug, 10. Item 1.' style='outline: none;'></path><path fill='#6f58e9' d='M 174 17.291666666667 A 4 4 0 1 1 174.00399999933333 17.291664666667167 Z' opacity='1' tabindex='-1' role='img' aria-label='Sep, 91. Item 1.' style='outline: none;'></path><path fill='#6f58e9' d='M 194 41.583333333333 A 4 4 0 1 1 194.00399999933333 41.58333133333317 Z' opacity='1' tabindex='-1' role='img' aria-label='Oct, 38. Item 1.' style='outline: none;'></path><path fill='#6f58e9' d='M 215 19.583333333333 A 4 4 0 1 1 215.00399999933333 19.58333133333317 Z' opacity='1' tabindex='-1' role='img' aria-label='Nov, 86. Item 1.' style='outline: none;'></path><path fill='#6f58e9' d='M 235 19.125 A 4 4 0 1 1 235.00399999933333 19.12499800000017 Z' opacity='1' tabindex='-1' role='img' aria-label='Dev, 87. Item 1.' style='outline: none;' stroke-width='0.0011937468193874423'></path></g></g><g data-z-index='3' aria-hidden='true'></g><text font-family='Roboto-Regular,Roboto' x='150' text-anchor='middle' data-z-index='4' style='color: rgb(51, 51, 51); font-size: 18px; fill: rgb(51, 51, 51);' y='24' aria-hidden='true'>Desktop</text><text font-family='Roboto-Regular,Roboto' x='150' text-anchor='middle' data-z-index='4' style='color: rgb(102, 102, 102); fill: rgb(102, 102, 102);' y='45' aria-hidden='true'></text><text font-family='Roboto-Regular,Roboto' x='10' text-anchor='start' data-z-index='4' style='color: rgb(102, 102, 102); fill: rgb(102, 102, 102);' y='147' aria-hidden='true'></text><g data-z-index='7' aria-hidden='true'><text font-family='Roboto-Regular,Roboto' x='56.84272486435067' text-anchor='end' transform='translate(0,0) rotate(-45 56.84272486435067 117)' style='color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);' y='117' opacity='1'>Jan</text><text font-family='Roboto-Regular,Roboto' x='77.34272486435067' text-anchor='end' transform='translate(0,0) rotate(-45 77.34272486435067 117)' style='color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);' y='117' opacity='1'>Feb</text><text font-family='Roboto-Regular,Roboto' x='97.84272486435067' text-anchor='end' transform='translate(0,0) rotate(-45 97.84272486435067 117)' style='color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);' y='117' opacity='1'>Mar</text><text font-family='Roboto-Regular,Roboto' x='118.34272486435069' text-anchor='end' transform='translate(0,0) rotate(-45 118.34272486435069 117)' style='color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);' y='117' opacity='1'>April</text><text font-family='Roboto-Regular,Roboto' x='138.84272486435069' text-anchor='end' transform='translate(0,0) rotate(-45 138.84272486435069 117)' style='color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);' y='117' opacity='1'>May</text><text font-family='Roboto-Regular,Roboto' x='159.34272486435069' text-anchor='end' transform='translate(0,0) rotate(-45 159.34272486435069 117)' style='color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);' y='117' opacity='1'>June</text><text font-family='Roboto-Regular,Roboto' x='179.84272486435069' text-anchor='end' transform='translate(0,0) rotate(-45 179.84272486435069 117)' style='color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);' y='117' opacity='1'>July</text><text font-family='Roboto-Regular,Roboto' x='200.34272486435069' text-anchor='end' transform='translate(0,0) rotate(-45 200.34272486435069 117)' style='color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);' y='117' opacity='1'>Aug</text><text font-family='Roboto-Regular,Roboto' x='220.84272486435069' text-anchor='end' transform='translate(0,0) rotate(-45 220.84272486435069 117)' style='color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);' y='117' opacity='1'>Sep</text><text font-family='Roboto-Regular,Roboto' x='241.34272486435069' text-anchor='end' transform='translate(0,0) rotate(-45 241.34272486435069 117)' style='color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);' y='117' opacity='1'>Oct</text><text font-family='Roboto-Regular,Roboto' x='261.84272486435066' text-anchor='end' transform='translate(0,0) rotate(-45 261.84272486435066 117)' style='color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);' y='117' opacity='1'>Nov</text><text font-family='Roboto-Regular,Roboto' x='282.34272486435066' text-anchor='end' transform='translate(0,0) rotate(-45 282.34272486435066 117)' style='color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);' y='117' opacity='1'>Dev</text></g><g data-z-index='7' aria-hidden='true'><text font-family='Roboto-Regular,Roboto' x='29' text-anchor='end' transform='translate(0,0)' style='color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);' y='106' opacity='1'>0</text><text font-family='Roboto-Regular,Roboto' x='29' text-anchor='end' transform='translate(0,0)' style='color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);' y='51' opacity='1'>120</text></g></svg>";
      if(seriesIndex == 1){
        line = "<svg version='1.1' style='font-family: Roboto; font-size: 12px;' xmlns='http://www.w3.org/2000/svg' width='300' height='150' viewBox='0 0 300 150' aria-hidden='false' aria-label='Interactive chart'><defs aria-hidden='true'><clipPath ><rect x='0' y='0' width='246' height='55' fill='none'></rect></clipPath><clipPath ><rect x='0' y='0' width='246' height='55' fill='none'></rect></clipPath></defs><rect fill='#ffffff' x='0' y='0' width='300' height='150' rx='0' ry='0' aria-hidden='true'></rect><rect fill='none' x='44' y='46' width='246' height='55' aria-hidden='true'></rect><g data-z-index='0' aria-hidden='true'></g><rect fill='none' data-z-index='1' x='44' y='46' width='246' height='55' aria-hidden='true'></rect><g data-z-index='1' aria-hidden='true'><path fill='none' stroke-dasharray='none' data-z-index='1' d='M 64.5 46 L 64.5 101' opacity='1'></path><path fill='none' stroke-dasharray='none' data-z-index='1' d='M 84.5 46 L 84.5 101' opacity='1'></path><path fill='none' stroke-dasharray='none' data-z-index='1' d='M 105.5 46 L 105.5 101' opacity='1'></path><path fill='none' stroke-dasharray='none' data-z-index='1' d='M 125.5 46 L 125.5 101' opacity='1'></path><path fill='none' stroke-dasharray='none' data-z-index='1' d='M 146.5 46 L 146.5 101' opacity='1'></path><path fill='none' stroke-dasharray='none' data-z-index='1' d='M 166.5 46 L 166.5 101' opacity='1'></path><path fill='none' stroke-dasharray='none' data-z-index='1' d='M 187.5 46 L 187.5 101' opacity='1'></path><path fill='none' stroke-dasharray='none' data-z-index='1' d='M 207.5 46 L 207.5 101' opacity='1'></path><path fill='none' stroke-dasharray='none' data-z-index='1' d='M 228.5 46 L 228.5 101' opacity='1'></path><path fill='none' stroke-dasharray='none' data-z-index='1' d='M 248.5 46 L 248.5 101' opacity='1'></path><path fill='none' stroke-dasharray='none' data-z-index='1' d='M 269.5 46 L 269.5 101' opacity='1'></path><path fill='none' stroke-dasharray='none' data-z-index='1' d='M 289.5 46 L 289.5 101' opacity='1'></path><path fill='none' stroke-dasharray='none' data-z-index='1' d='M 43.5 46 L 43.5 101' opacity='1'></path></g><g data-z-index='1' aria-hidden='true'><path fill='none' stroke='#e6e6e6' stroke-width='1' stroke-dasharray='none' data-z-index='1' d='M 44 45.5 L 290 45.5' opacity='1'></path><path fill='none' stroke='#e6e6e6' stroke-width='1' stroke-dasharray='none' data-z-index='1' d='M 44 101.5 L 290 101.5' opacity='1'></path></g><g data-z-index='2' aria-hidden='true'><path fill='none' stroke='#ccd6eb' stroke-width='1' data-z-index='7' d='M 44 101.5 L 290 101.5'></path></g><g data-z-index='2' aria-hidden='true'><path fill='none' data-z-index='7' d='M 44 46 L 44 101'></path></g><g data-z-index='3' aria-hidden='false'><g data-z-index='0.1' opacity='1' transform='translate(44,46) scale(1 1)' clip-path='url(#highcharts-m130svy-697-)' aria-hidden='true'><path fill='none' d='M 10.25 30.25 L 30.75 36.4375 L 51.25 22.6875 L 71.75 8.9375 L 92.25 28.1875 L 112.75 40.5625 L 133.25 17.1875 L 153.75 29.5625 L 174.25 6.1875 L 194.75 42.625 L 215.25 9.625 L 235.75 37.8125' data-z-index='1' stroke='#10b981' stroke-width='2' stroke-linejoin='round' stroke-linecap='round'></path><path fill='none' d='M 10.25 30.25 L 30.75 36.4375 L 51.25 22.6875 L 71.75 8.9375 L 92.25 28.1875 L 112.75 40.5625 L 133.25 17.1875 L 153.75 29.5625 L 174.25 6.1875 L 194.75 42.625 L 215.25 9.625 L 235.75 37.8125' data-z-index='2' stroke-linecap='round' stroke-linejoin='round' stroke='rgba(192,192,192,0.0001)' stroke-width='22' style='cursor: pointer;'></path></g><g data-z-index='0.1' opacity='1' transform='translate(44,46) scale(1 1)' clip-path='none' style='cursor: pointer;' aria-hidden='false'><path fill='#10b981' d='M 215 9.625 A 0 0 0 1 1 215 9.625 Z' data-z-index='-1' fill-opacity='0.25' visibility='hidden'></path><path fill='#10b981' d='M 10 34.25 A 4 4 0 1 1 10.003999999333336 34.24999800000017 Z' opacity='1' tabindex='-1' role='img' aria-label='Jan, 56. Item 1.' style='outline: none;'></path><path fill='#10b981' d='M 30 40.4375 A 4 4 0 1 1 30.003999999333335 40.43749800000017 Z' opacity='1' tabindex='-1' role='img' aria-label='Feb, 47. Item 1.' style='outline: none;'></path><path fill='#10b981' d='M 51 26.6875 A 4 4 0 1 1 51.00399999933334 26.68749800000017 Z' opacity='1' tabindex='-1' role='img' aria-label='Mar, 67. Item 1.' style='outline: none;'></path><path fill='#10b981' d='M 71 12.9375 A 4 4 0 1 1 71.00399999933333 12.937498000000167 Z' opacity='1' tabindex='-1' role='img' aria-label='April, 87. Item 1.' style='outline: none;'></path><path fill='#10b981' d='M 92 32.1875 A 4 4 0 1 1 92.00399999933333 32.18749800000017 Z' opacity='1' tabindex='-1' role='img' aria-label='May, 59. Item 1.' style='outline: none;'></path><path fill='#10b981' d='M 112 44.5625 A 4 4 0 1 1 112.00399999933333 44.56249800000017 Z' opacity='1' tabindex='-1' role='img' aria-label='June, 41. Item 1.' style='outline: none;'></path><path fill='#10b981' d='M 133 21.1875 A 4 4 0 1 1 133.00399999933333 21.18749800000017 Z' opacity='1' tabindex='-1' role='img' aria-label='July, 75. Item 1.' style='outline: none;'></path><path fill='#10b981' d='M 153 33.5625 A 4 4 0 1 1 153.00399999933333 33.56249800000017 Z' opacity='1' tabindex='-1' role='img' aria-label='Aug, 57. Item 1.' style='outline: none;' stroke-width='0.0007992249455124334'></path><path fill='#10b981' d='M 174 10.1875 A 4 4 0 1 1 174.00399999933333 10.187498000000167 Z' opacity='1' tabindex='-1' role='img' aria-label='Sep, 91. Item 1.' style='outline: none;' stroke-width='0.0002467198171342'></path><path fill='#10b981' d='M 194 46.625 A 4 4 0 1 1 194.00399999933333 46.62499800000017 Z' opacity='1' tabindex='-1' role='img' aria-label='Oct, 38. Item 1.' style='outline: none;' stroke-width='0.00028966868506037635'></path><path fill='#10b981' d='M 215 13.625 A 4 4 0 1 1 215.00399999933333 13.624998000000167 Z' opacity='1' tabindex='-1' role='img' aria-label='Nov, 86. Item 1.' style='outline: none;' stroke-width='0.00003947789809188862'></path><path fill='#10b981' d='M 235 41.8125 A 4 4 0 1 1 235.00399999933333 41.81249800000017 Z' opacity='1' tabindex='-1' role='img' aria-label='Dev, 45. Item 1.' style='outline: none;'></path></g></g><text font-family='Roboto-Regular,Roboto' x='150' text-anchor='middle' data-z-index='4' style='color: rgb(51, 51, 51); font-size: 18px; fill: rgb(51, 51, 51);' y='24' aria-hidden='true'>Tablet</text><text font-family='Roboto-Regular,Roboto' x='150' text-anchor='middle' data-z-index='4' style='color: rgb(102, 102, 102); fill: rgb(102, 102, 102);' y='45' aria-hidden='true'></text><text font-family='Roboto-Regular,Roboto' x='10' text-anchor='start' data-z-index='4' style='color: rgb(102, 102, 102); fill: rgb(102, 102, 102);' y='147' aria-hidden='true'></text><g data-z-index='7' aria-hidden='true'><text font-family='Roboto-Regular,Roboto' x='56.84272486435067' text-anchor='end' transform='translate(0,0) rotate(-45 56.84272486435067 117)' style='color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);' y='117' opacity='1'>Jan</text><text font-family='Roboto-Regular,Roboto' x='77.34272486435067' text-anchor='end' transform='translate(0,0) rotate(-45 77.34272486435067 117)' style='color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);' y='117' opacity='1'>Feb</text><text font-family='Roboto-Regular,Roboto' x='97.84272486435067' text-anchor='end' transform='translate(0,0) rotate(-45 97.84272486435067 117)' style='color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);' y='117' opacity='1'>Mar</text><text font-family='Roboto-Regular,Roboto' x='118.34272486435069' text-anchor='end' transform='translate(0,0) rotate(-45 118.34272486435069 117)' style='color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);' y='117' opacity='1'>April</text><text font-family='Roboto-Regular,Roboto' x='138.84272486435069' text-anchor='end' transform='translate(0,0) rotate(-45 138.84272486435069 117)' style='color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);' y='117' opacity='1'>May</text><text font-family='Roboto-Regular,Roboto' x='159.34272486435069' text-anchor='end' transform='translate(0,0) rotate(-45 159.34272486435069 117)' style='color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);' y='117' opacity='1'>June</text><text font-family='Roboto-Regular,Roboto' x='179.84272486435069' text-anchor='end' transform='translate(0,0) rotate(-45 179.84272486435069 117)' style='color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);' y='117' opacity='1'>July</text><text font-family='Roboto-Regular,Roboto' x='200.34272486435069' text-anchor='end' transform='translate(0,0) rotate(-45 200.34272486435069 117)' style='color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);' y='117' opacity='1'>Aug</text><text font-family='Roboto-Regular,Roboto' x='220.84272486435069' text-anchor='end' transform='translate(0,0) rotate(-45 220.84272486435069 117)' style='color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);' y='117' opacity='1'>Sep</text><text font-family='Roboto-Regular,Roboto' x='241.34272486435069' text-anchor='end' transform='translate(0,0) rotate(-45 241.34272486435069 117)' style='color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);' y='117' opacity='1'>Oct</text><text font-family='Roboto-Regular,Roboto' x='261.84272486435066' text-anchor='end' transform='translate(0,0) rotate(-45 261.84272486435066 117)' style='color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);' y='117' opacity='1'>Nov</text><text font-family='Roboto-Regular,Roboto' x='282.34272486435066' text-anchor='end' transform='translate(0,0) rotate(-45 282.34272486435066 117)' style='color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);' y='117' opacity='1'>Dev</text></g><g data-z-index='7' aria-hidden='true'><text font-family='Roboto-Regular,Roboto' x='29' text-anchor='end' transform='translate(0,0)' style='color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);' y='51' opacity='1'>100</text><text font-family='Roboto-Regular,Roboto' x='29' text-anchor='end' transform='translate(0,0)' style='color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);' y='106' opacity='1'>20</text></g></svg>";
      }else if(seriesIndex == 2){
        line = "<svg version='1.1' style='font-family: Roboto; font-size: 12px;' xmlns='http://www.w3.org/2000/svg' width='300' height='150' viewBox='0 0 300 150' aria-hidden='false' aria-label='Interactive chart'><defs aria-hidden='true'><clipPath ><rect x='0' y='0' width='246' height='55' fill='none'></rect></clipPath><clipPath ><rect x='0' y='0' width='246' height='55' fill='none'></rect></clipPath></defs><rect fill='#ffffff' x='0' y='0' width='300' height='150' rx='0' ry='0' aria-hidden='true'></rect><rect fill='none' x='44' y='46' width='246' height='55' aria-hidden='true'></rect><g data-z-index='0' aria-hidden='true'></g><rect fill='none' data-z-index='1' x='44' y='46' width='246' height='55' aria-hidden='true'></rect><g data-z-index='1' aria-hidden='true'><path fill='none' stroke-dasharray='none' data-z-index='1' d='M 64.5 46 L 64.5 101' opacity='1'></path><path fill='none' stroke-dasharray='none' data-z-index='1' d='M 84.5 46 L 84.5 101' opacity='1'></path><path fill='none' stroke-dasharray='none' data-z-index='1' d='M 105.5 46 L 105.5 101' opacity='1'></path><path fill='none' stroke-dasharray='none' data-z-index='1' d='M 125.5 46 L 125.5 101' opacity='1'></path><path fill='none' stroke-dasharray='none' data-z-index='1' d='M 146.5 46 L 146.5 101' opacity='1'></path><path fill='none' stroke-dasharray='none' data-z-index='1' d='M 166.5 46 L 166.5 101' opacity='1'></path><path fill='none' stroke-dasharray='none' data-z-index='1' d='M 187.5 46 L 187.5 101' opacity='1'></path><path fill='none' stroke-dasharray='none' data-z-index='1' d='M 207.5 46 L 207.5 101' opacity='1'></path><path fill='none' stroke-dasharray='none' data-z-index='1' d='M 228.5 46 L 228.5 101' opacity='1'></path><path fill='none' stroke-dasharray='none' data-z-index='1' d='M 248.5 46 L 248.5 101' opacity='1'></path><path fill='none' stroke-dasharray='none' data-z-index='1' d='M 269.5 46 L 269.5 101' opacity='1'></path><path fill='none' stroke-dasharray='none' data-z-index='1' d='M 289.5 46 L 289.5 101' opacity='1'></path><path fill='none' stroke-dasharray='none' data-z-index='1' d='M 43.5 46 L 43.5 101' opacity='1'></path></g><g data-z-index='1' aria-hidden='true'><path fill='none' stroke='#e6e6e6' stroke-width='1' stroke-dasharray='none' data-z-index='1' d='M 44 101.5 L 290 101.5' opacity='1'></path><path fill='none' stroke='#e6e6e6' stroke-width='1' stroke-dasharray='none' data-z-index='1' d='M 44 45.5 L 290 45.5' opacity='1'></path></g><g data-z-index='2' aria-hidden='true'><path fill='none' stroke='#ccd6eb' stroke-width='1' data-z-index='7' d='M 44 101.5 L 290 101.5'></path></g><g data-z-index='2' aria-hidden='true'><path fill='none' data-z-index='7' d='M 44 46 L 44 101'></path></g><g data-z-index='3' aria-hidden='false'><g data-z-index='0.1' opacity='1' transform='translate(44,46) scale(1 1)' clip-path='url(#highcharts-m130svy-765-)' aria-hidden='true'><path fill='none' d='M 10.25 14.299999999999997 L 30.75 42.9 L 51.25 31.9 L 71.75 20.9 L 92.25 36.3 L 112.75 46.2 L 133.25 27.5 L 153.75 37.4 L 174.25 31.9 L 194.75 47.85 L 215.25 43.45 L 235.75 44' data-z-index='1' stroke='#f79009' stroke-width='2' stroke-linejoin='round' stroke-linecap='round'></path><path fill='none' d='M 10.25 14.299999999999997 L 30.75 42.9 L 51.25 31.9 L 71.75 20.9 L 92.25 36.3 L 112.75 46.2 L 133.25 27.5 L 153.75 37.4 L 174.25 31.9 L 194.75 47.85 L 215.25 43.45 L 235.75 44' data-z-index='2' stroke-linecap='round' stroke-linejoin='round' stroke='rgba(192,192,192,0.0001)' stroke-width='22' style='cursor: pointer;'></path></g><g data-z-index='0.1' opacity='1' transform='translate(44,46) scale(1 1)' clip-path='none' style='cursor: pointer;' aria-hidden='false'><path fill='#f79009' d='M 235 44 A 0 0 0 1 1 235 44 Z' data-z-index='-1' fill-opacity='0.25' visibility='hidden'></path><path fill='#f79009' d='M 10 18.299999999999997 A 4 4 0 1 1 10.003999999333336 18.299998000000166 Z' opacity='1' tabindex='-1' role='img' aria-label='Jan, 99. Item 1.' style='outline: none;'></path><path fill='#f79009' d='M 30 46.9 A 4 4 0 1 1 30.003999999333335 46.89999800000017 Z' opacity='1' tabindex='-1' role='img' aria-label='Feb, 47. Item 1.' style='outline: none;'></path><path fill='#f79009' d='M 51 35.9 A 4 4 0 1 1 51.00399999933334 35.89999800000017 Z' opacity='1' tabindex='-1' role='img' aria-label='Mar, 67. Item 1.' style='outline: none;'></path><path fill='#f79009' d='M 71 24.9 A 4 4 0 1 1 71.00399999933333 24.899998000000167 Z' opacity='1' tabindex='-1' role='img' aria-label='April, 87. Item 1.' style='outline: none;'></path><path fill='#f79009' d='M 92 40.3 A 4 4 0 1 1 92.00399999933333 40.299998000000166 Z' opacity='1' tabindex='-1' role='img' aria-label='May, 59. Item 1.' style='outline: none;'></path><path fill='#f79009' d='M 112 50.2 A 4 4 0 1 1 112.00399999933333 50.19999800000017 Z' opacity='1' tabindex='-1' role='img' aria-label='June, 41. Item 1.' style='outline: none;'></path><path fill='#f79009' d='M 133 31.5 A 4 4 0 1 1 133.00399999933333 31.49999800000017 Z' opacity='1' tabindex='-1' role='img' aria-label='July, 75. Item 1.' style='outline: none;'></path><path fill='#f79009' d='M 153 41.4 A 4 4 0 1 1 153.00399999933333 41.39999800000017 Z' opacity='1' tabindex='-1' role='img' aria-label='Aug, 57. Item 1.' style='outline: none;'></path><path fill='#f79009' d='M 174 35.9 A 4 4 0 1 1 174.00399999933333 35.89999800000017 Z' opacity='1' tabindex='-1' role='img' aria-label='Sep, 67. Item 1.' style='outline: none;'></path><path fill='#f79009' d='M 194 51.85 A 4 4 0 1 1 194.00399999933333 51.84999800000017 Z' opacity='1' tabindex='-1' role='img' aria-label='Oct, 38. Item 1.' style='outline: none;' stroke-width='0.000005544334580206978'></path><path fill='#f79009' d='M 215 47.45 A 4 4 0 1 1 215.00399999933333 47.44999800000017 Z' opacity='1' tabindex='-1' role='img' aria-label='Nov, 46. Item 1.' style='outline: none;'></path><path fill='#f79009' d='M 235 48 A 4 4 0 1 1 235.00399999933333 47.99999800000017 Z' opacity='1' tabindex='-1' role='img' aria-label='Dev, 45. Item 1.' style='outline: none;' stroke-width='0.0039426493427611176'></path></g></g><g data-z-index='3' aria-hidden='true'></g><text font-family='Roboto-Regular,Roboto' x='150' text-anchor='middle' data-z-index='4' style='color: rgb(51, 51, 51); font-size: 18px; fill: rgb(51, 51, 51);' y='24' aria-hidden='true'>Phone</text><text font-family='Roboto-Regular,Roboto' x='150' text-anchor='middle' data-z-index='4' style='color: rgb(102, 102, 102); fill: rgb(102, 102, 102);' y='45' aria-hidden='true'></text><text font-family='Roboto-Regular,Roboto' x='10' text-anchor='start' data-z-index='4' style='color: rgb(102, 102, 102); fill: rgb(102, 102, 102);' y='147' aria-hidden='true'></text><g data-z-index='7' aria-hidden='true'><text font-family='Roboto-Regular,Roboto' x='56.84272486435067' text-anchor='end' transform='translate(0,0) rotate(-45 56.84272486435067 117)' style='color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);' y='117' opacity='1'>Jan</text><text font-family='Roboto-Regular,Roboto' x='77.34272486435067' text-anchor='end' transform='translate(0,0) rotate(-45 77.34272486435067 117)' style='color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);' y='117' opacity='1'>Feb</text><text font-family='Roboto-Regular,Roboto' x='97.84272486435067' text-anchor='end' transform='translate(0,0) rotate(-45 97.84272486435067 117)' style='color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);' y='117' opacity='1'>Mar</text><text font-family='Roboto-Regular,Roboto' x='118.34272486435069' text-anchor='end' transform='translate(0,0) rotate(-45 118.34272486435069 117)' style='color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);' y='117' opacity='1'>April</text><text font-family='Roboto-Regular,Roboto' x='138.84272486435069' text-anchor='end' transform='translate(0,0) rotate(-45 138.84272486435069 117)' style='color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);' y='117' opacity='1'>May</text><text font-family='Roboto-Regular,Roboto' x='159.34272486435069' text-anchor='end' transform='translate(0,0) rotate(-45 159.34272486435069 117)' style='color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);' y='117' opacity='1'>June</text><text font-family='Roboto-Regular,Roboto' x='179.84272486435069' text-anchor='end' transform='translate(0,0) rotate(-45 179.84272486435069 117)' style='color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);' y='117' opacity='1'>July</text><text font-family='Roboto-Regular,Roboto' x='200.34272486435069' text-anchor='end' transform='translate(0,0) rotate(-45 200.34272486435069 117)' style='color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);' y='117' opacity='1'>Aug</text><text font-family='Roboto-Regular,Roboto' x='220.84272486435069' text-anchor='end' transform='translate(0,0) rotate(-45 220.84272486435069 117)' style='color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);' y='117' opacity='1'>Sep</text><text font-family='Roboto-Regular,Roboto' x='241.34272486435069' text-anchor='end' transform='translate(0,0) rotate(-45 241.34272486435069 117)' style='color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);' y='117' opacity='1'>Oct</text><text font-family='Roboto-Regular,Roboto' x='261.84272486435066' text-anchor='end' transform='translate(0,0) rotate(-45 261.84272486435066 117)' style='color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);' y='117' opacity='1'>Nov</text><text font-family='Roboto-Regular,Roboto' x='282.34272486435066' text-anchor='end' transform='translate(0,0) rotate(-45 282.34272486435066 117)' style='color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);' y='117' opacity='1'>Dev</text></g><g data-z-index='7' aria-hidden='true'><text font-family='Roboto-Regular,Roboto' x='29' text-anchor='end' transform='translate(0,0)' style='color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);' y='106' opacity='1'>25</text><text font-family='Roboto-Regular,Roboto' x='29' text-anchor='end' transform='translate(0,0)' style='color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);' y='51' opacity='1'>125</text></g></svg>"
      }
      
      return line
      }
    }
  };
};

const iconMap = {
  Desktop: (
    <SvgIcon>
      <ComputerDesktopIcon />
    </SvgIcon>
  ),
  Tablet: (
    <SvgIcon>
      <DeviceTabletIcon />
    </SvgIcon>
  ),
  Phone: (
    <SvgIcon>
      <PhoneIcon />
    </SvgIcon>
  )
};

export const OverviewTraffic = (props) => {
  const { chartSeries, labels, sx,updateData } = props;
  const chartOptions = useChartOptions(labels,updateData);

  return (
    <Card sx={sx}>
      <CardHeader title="Traffic Source" />
      <CardContent>
        <Chart
          height={300}
          options={chartOptions}
          series={chartSeries}
          type="donut"
          width="100%"
        />
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="center"
          spacing={2}
          sx={{ mt: 2 }}
        >
          {chartSeries.map((item, index) => {
            const label = labels[index];

            return (
              <Box
                key={label}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
              >
                {iconMap[label]}
                <Typography
                  sx={{ my: 1 }}
                  variant="h6"
                >
                  {label}
                </Typography>
                <Typography
                  color="text.secondary"
                  variant="subtitle2"
                >
                  {item}%
                </Typography>
              </Box>
            );
          })}
        </Stack>
      </CardContent>
    </Card>
  );
};

OverviewTraffic.propTypes = {
  chartSeries: PropTypes.array.isRequired,
  labels: PropTypes.array.isRequired,
  sx: PropTypes.object
};
