import React from 'react'
import Layout from '../../components/layout'
import Navigator from '../../components/navigator'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import FilesDropzone from '../../components/filesDropzone'
import Typography from '@material-ui/core/Typography'
import { CacheConsumer } from '../../components/providers'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

const Complaint = (props) => {
  const handleChange = () => {

  }
  return (
    <Layout activeIndex={7}>
      <Navigator title="举报检测" breadcrumb={[{
        text: '假冒投诉'
      }]} />
      <div className="rightCon fr" style={{ boxShadow: 'none' }}>
        <div>
          <Card>
            <CardHeader title={<Typography variant={'h4'}>被举报方信息</Typography>}></CardHeader>
            <CardContent>
              <Grid
                container
                spacing={4}
              >
                <Grid
                  item
                  xs={4}
                >
                  <FormControl fullWidth variant="outlined">
                    <InputLabel style={{ display: 'inline-block', padding: '0 6px', background: '#fff' }}>
                      投诉类型 *
                    </InputLabel>
                    <Select fullWidth>
                      <MenuItem value={1}>发明专利</MenuItem>
                      <MenuItem value={2}>实用新型</MenuItem>
                      <MenuItem value={3}>外观设计</MenuItem>
                    </Select>
                    <FormHelperText>选择投诉类型</FormHelperText>
                  </FormControl>
                </Grid>
                <Grid
                  item
                  xs={4}
                >
                  <TextField
                    fullWidth
                    label="被举报专利号"
                    onChange={handleChange}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  item
                  xs={4}
                >
                  <TextField
                    fullWidth
                    label="被举报方产品名称"
                    onChange={handleChange}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                >
                  <TextField
                    fullWidth
                    multiline
                    rows={2}
                    label="被举报方产品描述"
                    onChange={handleChange}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  item
                  xs={12}>
                  <FilesDropzone title="上传被举报方图片" />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card style={{ marginTop: 20 }}>
            <CardHeader title={<Typography variant={'h4'}>被举报方信息</Typography>}></CardHeader>
            <CardContent>
              <Grid
                container
                spacing={4}
              >
                <Grid
                  item
                  xs={6}
                >
                  <CacheConsumer>
                    {
                      data => {
                        return <TextField
                          disabled
                          fullWidth
                          label="举报人"
                          onChange={handleChange}
                          required
                          value={data.userName}
                          variant="outlined"
                        />
                      }
                    }
                  </CacheConsumer>
                </Grid>
                <Grid
                  item
                  xs={6}
                >
                  <TextField
                    fullWidth
                    label="联系方式"
                    onChange={handleChange}
                    required
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div style={{ textAlign: 'center', paddingTop: 28 }}>
            <Button variant="contained" color="primary">提交举报信息</Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

Complaint.getInitialProps = async ({ req }) => {
  return { headers: req.headers }
}

export default Complaint