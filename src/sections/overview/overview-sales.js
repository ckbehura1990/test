import PropTypes from 'prop-types';
import ArrowPathIcon from '@heroicons/react/24/solid/ArrowPathIcon';
import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';

import React, { useState,forwardRef, useImperativeHandle, useRef } from 'react';

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  SvgIcon
} from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import { Chart } from 'src/components/chart';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
let cont = 1;

const useChartOptions = () => {
  const theme = useTheme();

  return {
    chart: {
      background: 'transparent',
      stacked: false,
      toolbar: {
        show: false
      }
    },
    colors: [theme.palette.primary.main, alpha(theme.palette.primary.main, 0.25)],
    dataLabels: {
      enabled: false
    },
    fill: {
      opacity: 1,
      type: 'solid'
    },
    grid: {
      borderColor: theme.palette.divider,
      strokeDashArray: 2,
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      }
    },
    legend: {
      show: false
    },
    plotOptions: {
      bar: {
        columnWidth: '40px'
      }
    },
    stroke: {
      colors: ['transparent'],
      show: true,
      width: 2
    },
    theme: {
      mode: theme.palette.mode
    },
    xaxis: {
      axisBorder: {
        color: theme.palette.divider,
        show: true
      },
      axisTicks: {
        color: theme.palette.divider,
        show: true
      },
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ],
      labels: {
        offsetY: 5,
        style: {
          colors: theme.palette.text.secondary
        }
      }
    },
    yaxis: {
      labels: {
        formatter: (value) => (value > 0 ? `${value}K` : `${value}`),
        offsetX: -10,
        style: {
          colors: theme.palette.text.secondary
        }
      }
    }
  };
};




export const OverviewSales = forwardRef((props,ref) => {
  const { chartSeries, sx } = props;
  const chartOptions = useChartOptions();
  const [age, setAge] = React.useState('1');
  const [color, setColor] = React.useState("#6366F1");
  chartOptions.colors = [color, alpha(color, 0.25)];

  const [cart, setCart] = useState([ {
    name: 'This year',
    data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20]
  },
  {
    name: 'Last year',
    data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13]
  }]);
  const syncData = () => {
    cont = cont+0.5;
    setCart([{
      name: 'This year',
      data: [18*cont, 16*cont, 5*cont, 8*cont, 3*cont, 14*cont, 14*cont, 16*cont, 17*cont, 19*cont, 18*cont, 20*cont]
    },
    {
      name: 'Last year',
      data: [12*cont, 11*cont, 4*cont, 6*cont, 2*cont, 9*cont, 9*cont, 10*cont, 11*cont, 12*cont, 13*cont, 13*cont]
    }]);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
    cont = event.target.value;
    if(cont == 2){
      cont = 2.3
    }else if(cont == 3){
      cont = 3.1
    }
    setCart([{
      name: 'This year',
      data: [18*cont, 16*cont, 5*cont, 8*cont, 3*cont, 14*cont, 14*cont, 16*cont, 17*cont, 19*cont, 18*cont, 20*cont]
    },
    {
      name: 'Last year',
      data: [12*cont, 11*cont, 4*cont, 6*cont, 2*cont, 9*cont, 9*cont, 10*cont, 11*cont, 12*cont, 13*cont, 13*cont]
    }]);
  };

  const printSomething = (config) =>{
    console.log('printing from child function',config)
    chartOptions.colors = [config.w.config.colors[config.dataPointIndex], alpha(config.w.config.colors[config.dataPointIndex], 0.25)];
   setColor(config.w.config.colors[config.dataPointIndex]);

   let obj = {0 : "Desktop",1:"Tablet",2:"Phone"};
   setAge(config.dataPointIndex+1);

    cont = cont+0.8;
    setCart([{
      name: 'This year',
      data: [13*cont, 16*cont,15*cont, 8*cont, 13*cont, 14*cont, 14*cont, 16*cont, 17*cont, 9*cont, 18*cont, 20*cont]
    },
    {
      name: 'Last year',
      data: [7*cont, 11*cont, 4*cont, 6*cont, 2*cont, 9*cont, 9*cont, 10*cont, 11*cont, 2*cont, 15*cont, 13*cont]
    }]);
 }
 
 useImperativeHandle(ref, () => ({
   printSomething: printSomething
 }));
  return (
    <Card sx={sx}>
       <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Product</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Desktop"
        >
          
          <MenuItem value={1}>Desktop</MenuItem>
          <MenuItem value={2}>Tablet</MenuItem>
          <MenuItem value={3}>Phone</MenuItem>
        </Select>
      </FormControl>
      <CardHeader
        action={(
          <Button
          onClick={syncData.bind(this)}
            color="inherit"
            size="small"
            startIcon={(
              <SvgIcon fontSize="small">
                <ArrowPathIcon />
              </SvgIcon>
            )}
          >
            Sync
          </Button>

          
        )}
        title="Sales"
      />
       <Button
                    color="inherit"
                    startIcon={(
                      <SvgIcon fontSize="small">
                        <ArrowDownOnSquareIcon />
                      </SvgIcon>
                    )}
                  >
                    Export to Excel
                  </Button>
      <CardContent>
        <Chart
          height={350}
          options={chartOptions}
          series={cart}
          type="bar"
          width="100%"
        />
      </CardContent>
      <Divider />
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button
          color="inherit"
          endIcon={(
            <SvgIcon fontSize="small">
              <ArrowRightIcon />
            </SvgIcon>
          )}
          size="small"
        >
          Overview
        </Button>
      </CardActions>
    </Card>
  );
});

OverviewSales.protoTypes = {
  chartSeries: PropTypes.array.isRequired,
  sx: PropTypes.object
};
