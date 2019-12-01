import React, { useState } from 'react'
import { Grid, Card, CardContent, Button, FormControl, MenuItem, Select } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import Paginate from '../paginate'
import fetch from 'isomorphic-unfetch'
import querystring from 'querystring'
import ItemCard from '../card'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  results: {
    marginTop: theme.spacing(4),
    paddingTop: theme.spacing(4)
  },
  paginate: {
    marginTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center'
  },
  search: {
    width: 600,
    position: 'relative',
    border: '1px solid #ccc',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    display: 'flex'
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
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(2, 2, 2, 2),
    transition: theme.transitions.create('width'),
    width: '100%'
  },
  button: {
    background: '#0080fa',
    color: '#fff',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    margin: -1,
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
  const handlePageChange = (page) => {
    setPageNum(page.selected)
    fetchData(page.selected)
  }
  const fetchData = async (page) => {
    page = typeof page === 'number' ? page : pageNum
    const params = querystring.stringify({
      pageNum: page + 1,
      pageSize: 10,
      keyword,
      searchType
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
  const handleKeywordChange = (evt) => {
    setKeyword(evt.target.value)
  }
  const handleSearchTypeChange = evt => {
    setSearchType(evt.target.value)
  }
  const classes = useStyles()
  const hasNoData = !data || data.length === 0
  return (
    <Card style={{ boxShadow: 'none' }}>
      <CardContent>
        <Grid>
          <Grid item style={{ justifyContent: 'center', display: 'flex', paddingTop: hasNoData && 80, paddingBottom: hasNoData && 80 }} xs={12}>
            <FormControl style={{ width: 180, marginRight: 12 }} variant="outlined">
              <Select onChange={handleSearchTypeChange} value={searchType} fullWidth>
                <MenuItem value={1}>产品名称</MenuItem>
                <MenuItem value={2}>专利号</MenuItem>
                <MenuItem value={3}>专利名</MenuItem>
                <MenuItem value={4}>申请人</MenuItem>
              </Select>
            </FormControl>
            <div className={classes.search}>
              <InputBase
                fullWidth
                placeholder="输入关键字搜索"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                onChange={handleKeywordChange}
                inputProps={{ 'aria-label': 'search' }}
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
                {data.map(project => (
                  <ItemCard
                    key={project.id}
                    project={project}
                  />
                ))}
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