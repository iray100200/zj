import React, { useState, useEffect } from 'react'
import { Grid, Card, CardContent, Button, FormControl, MenuItem, Select, Tabs, Tab } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { fade, makeStyles } from '@material-ui/core/styles';
import Paginate from '../paginate';
import fetch from 'isomorphic-unfetch';
import querystring from 'querystring';
import ItemCard from '../card';
import Autocomplete from '@material-ui/lab/Autocomplete'
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  },
  content: {
    marginTop: -theme.spacing(2)
  },
  results: {
    marginTop: theme.spacing(2),
    paddingTop: theme.spacing(4)
  },
  paginate: {
    marginTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center'
  },
  search: {
    width: 600,
    marginLeft: 0,
    display: 'flex',
    alignItems: 'center',
    height: 55,
    overflow: 'hidden'
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 54,
    background: '#0080fa',
    color: '#fff',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    '&:hover': {
      backgroundColor: '#0060da'
    }
  }
}))

export default (props) => {
  const [searchType, setSearchType] = useState(1)
  const [searched, setSearched] = useState(false)
  const [keyword, setKeyword] = useState('')
  const [total, setTotal] = useState('')
  const [data, setData] = useState([])
  const [pageNum, setPageNum] = useState(0)
  const [patentType, setPatentType] = useState(0)
  const [options = [], setOptions] = useState([])
  const handlePageChange = (page) => {
    setPageNum(page.selected)
    fetchData(page.selected)
  }
  useEffect(() => {
    if (keyword) {
      fetchData()
    }
  }, [patentType])
  const fetchData = async (page) => {
    page = typeof page === 'number' ? page : pageNum
    const params = querystring.stringify({
      pageNum: page + 1,
      pageSize: 10,
      keyword,
      searchType,
      patentType,
    })
    const res = await fetch(`http://47.96.129.81:8081/f/v1/monitor?${params}`, {
      method: 'post'
    })
    const result = await res.json()
    const { list, totalPage: total } = result.body
    setTotal(total)
    setData(list)
    setSearched(true)
  }
  const handleSearch = () => {
    fetchData()
  }
  function debounce(func, wait) {
    var timeout;
    return function (evt) {
      const value = evt.target.value
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        func.call(this, value);
      }, wait)
    }
  }
  const handleKeywordChange = debounce((value) => {
    setKeyword(value)
    complete(value)
  }, 500)
  const complete = async (keyword) => {
    if (patentType > 0) {
      try {
        const res = await fetch(`http://47.96.129.81:8081/f/v1/automaticCompletion?searchType=${patentType}&keyword=${keyword}`)
        const result = await res.json()
        setOptions(result.body || [])
      } catch (e) {
        console.warn(e)
      }
    } else {
      setOptions([])
    }
  }
  const handleCompletionChange = value => () => {
    setKeyword(value)
  }
  const handlePatentChange = (evt, value) => {
    setOptions([])
    setPatentType(value, () => {
      fetchData()
    })
  }
  const handleSearchTypeChange = evt => {
    setSearchType(evt.target.value)
  }
  const classes = useStyles()
  return (
    <Card style={{ boxShadow: 'none' }}>
      <CardContent className={classes.content}>
        <Tabs value={patentType} onChange={handlePatentChange}>
          <Tab value={0} label="全部" />
          <Tab value={2} label="外观专利" />
          <Tab value={4} label="实用新型" />
          <Tab value={6} label="发明专利" />
        </Tabs>
        <Grid>
          <Grid item style={{ display: 'flex', padding: 0, paddingTop: 32 }} xs={12}>
            <FormControl style={{ width: 180, marginRight: 12 }} variant="outlined">
              <Select onChange={handleSearchTypeChange} value={searchType} fullWidth>
                <MenuItem value={1}>产品名称</MenuItem>
                <MenuItem value={2}>专利号</MenuItem>
                <MenuItem value={3}>专利名</MenuItem>
                <MenuItem value={4}>申请人</MenuItem>
              </Select>
            </FormControl>
            <div className={classes.search}>
              <Autocomplete
                freeSolo
                style={{ flex: 1 }}
                options={options}
                renderOption={item => {
                  return <div onClick={handleCompletionChange(item)}>{item}</div>
                }}
                renderInput={params => (
                  <TextField
                    {...params}
                    className="Mui-search"
                    variant="outlined"
                    fullWidth
                    autoFocus
                    placeholder="输入关键字搜索"
                    onChange={handleKeywordChange}
                  />
                )}
              />
              <Button onClick={handleSearch} className={classes.button}>搜索</Button>
            </div>
          </Grid>
          {
            data && data.length ? <Grid item xs={12}>
              <div className={classes.results}>
                <Typography
                  color="textSecondary"
                  gutterBottom
                  variant="body2"
                >
                  共发现{total}条记录
              </Typography>
                {
                  data.map(project => (
                    <ItemCard
                      key={project.id}
                      project={project}
                    />
                  ))
                }
              </div>
              <div className={classes.paginate}>
                <Paginate onPageChange={handlePageChange} pageCount={Math.ceil(total / 10)} />
              </div>
            </Grid> : searched && <div style={{ padding: 40, textAlign: 'center' }}>
              <Typography variant="h4">抱歉，没有发现数据</Typography>
            </div>
          }
        </Grid>
      </CardContent>
    </Card>
  )
}