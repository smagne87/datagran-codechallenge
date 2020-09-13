import React, { useState, useEffect } from 'react';
import ReactHighcharts from 'react-highcharts';
import TextField from '@material-ui/core/TextField';
import {
  Button, Container, Grid, Select,
} from '@material-ui/core';
import useStyles from './graphStyles';

const Graph = () => {
  const classes = useStyles();
  const [chartData, setChartData] = useState();
  const [csvContent, setCSVContent] = useState('');
  const [csvHeaders, setCSVHeaders] = useState([]);
  const [csvRows, setCSVRows] = useState([]);
  const [csvError, setCSVError] = useState(false);
  const [isInvalidChart, setIsInvalidChart] = useState(true);
  const [xAxis, setXAxis] = useState('');
  const [yAxis, setYAxis] = useState('');

  const handleChartChange = (e) => {
    setCSVContent(e.target.value);
  };

  const handleProcessCSVClick = () => {
    if (csvContent && csvContent !== '') {
      const csvLines = csvContent.split(/[\r\n]+/g).map(line => line.trim());
      if (csvLines.length > 1) {
        const headers = csvLines[0].split(',').map(l => l.trim());
        setCSVHeaders(headers);
        const rows = csvLines.slice(1)
          .map(r => r.split(',')
            .map(i => (Number.isNaN(parseFloat(i.trim())) ? i.trim() : parseFloat(i.trim()))));
        setCSVRows(rows);
        setCSVError(false);
      } else {
        setCSVError(true);
      }
    } else {
      setCSVError(true);
    }
  };

  const handleXAxisChange = (e) => {
    setXAxis(e.target.value);
  };

  const handleYAxisChange = (e) => {
    setYAxis(e.target.value);
  };

  const handleGenerateChartClick = () => {
    const indexXAxis = csvHeaders.findIndex(h => h === xAxis);
    const indexYAxis = csvHeaders.findIndex(h => h === yAxis);

    const xAxisContent = csvRows.map(r => r[indexXAxis]);
    const yAxisContent = csvRows.map(r => r[indexYAxis]);

    const config = {
      xAxis: {
        categories: xAxisContent,
      },
      series: [{
        data: yAxisContent,
      }],
    };

    setChartData(config);
  };

  useEffect(() => {
    setChartData(null);
    setIsInvalidChart(!(xAxis && yAxis && xAxis !== yAxis));
  }, [xAxis, yAxis]);

  return (
    <Container>
      <h2>Graph Page</h2>
      <p>Complete the chart data</p>
      <Grid container>
        <Grid item md={6}>
          <Grid container>
            <Grid item md={12}>
              <TextField
                aria-label="chart data"
                rows={5}
                multiline
                placeholder="Chart data csv format"
                onChange={handleChartChange}
              />
              {csvError && <p className={classes.error}>Invalid csv format</p>}
            </Grid>
            <Grid item>
              <Button className={classes.button} variant="outlined" onClick={handleProcessCSVClick}>
                Process CSV
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4}>
          <Grid container>
            <Grid item md={6}>
              <Select
                native
                onChange={handleXAxisChange}
                className={classes.axisDropdownControl}
                value={xAxis}
              >
                <option value="">Select X Axis</option>
                {csvHeaders.map(axis => (
                  <option key={`x-axis-${axis}`}>{axis}</option>
                ))}
              </Select>
            </Grid>
            <Grid item md={6}>
              <Select
                native
                onChange={handleYAxisChange}
                className={classes.axisDropdownControl}
                value={yAxis}
              >
                <option value="">Select Y Axis</option>
                {csvHeaders.map(axis => (
                  <option key={`y-axis-${axis}`}>{axis}</option>
                ))}
              </Select>
            </Grid>
          </Grid>
          <Grid container>
            <Button
              variant="outlined"
              disabled={isInvalidChart}
              onClick={handleGenerateChartClick}
              className={classes.button}
            >
              Generate Chart
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        {chartData && (<ReactHighcharts config={chartData} />)}
      </Grid>
    </Container>
  );
};

export default Graph;
