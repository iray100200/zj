import React, { useState } from 'react'
import Layout from '../../components/layout'
import Navigator from '../../components/navigator'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import FilesDropzone from '../../components/filesDropzone'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Typography from '@material-ui/core/Typography'
import { CacheConsumer } from '../../components/providers'
import Button from '@material-ui/core/Button'

const Complaint = (props) => {
  const [informer, setInformer] = useState('')
  const [token, setToken] = useState('')
  const [patentType, setPatentType] = useState(1)
  const [investigatorPatentNumber, setInvestigatorPatentNumber] = useState('')
  const [investigatorProductName, setInvestigatorProductName] = useState('')
  const [investigatorProductDesc, setInvestigatorProductDesc] = useState('')
  const [investigatorImagePath, setInvestigatorImagePath] = useState('')
  const [reportedPatentNumber, setReportedPatentNumber] = useState('')
  const [reportedProductName, setReportedProductName] = useState('')
  const [reportedProductDesc, setReportedProductDesc] = useState('')
  const [informerContact, setInformerContact] = useState('')
  const [reportedImagePath, setReportedImagePath] = useState('')
  const handleSubmit = async () => {
    const params = {
      investigatorPatentNumber: '',
      investigatorProductName: '',
      investigatorProductDesc: '',
      investigatorImagePath: '',
      complaintType: 2,
      patentType,
      reportedPatentNumber,
      reportedProductName,
      reportedProductDesc,
      informer,
      reportedImagePath,
      informerContact,
      token
    }
    const res = await fetch(`${process.env.APP_URL}/f/v1/rightsProtection?${querystring.stringify(params)}`, {
      method: 'post'
    })
    const result = await res.json()
    if (result.code === 0) {
      Notification.notice({
        variant: 'success',
        message: '提交成功'
      })
    }
  }
  return (
    <Layout headers={props.headers} activeIndex={7}>
      <Navigator title="举报检测" breadcrumb={[{
        text: '侵权投诉'
      }]} />
      <div className="rightCon fr" style={{ boxShadow: 'none' }}>
        <div>
          <Card>
            <CardHeader title={<Typography variant={'h4'}>相关方信息</Typography>}></CardHeader>
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
                    <Select onChange={e => setPatentType(e.target.value)} fullWidth>
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
                    helperText="请输入我方的专利号"
                    label="专利号"
                    onChange={e => setInvestigatorPatentNumber(e.target.value)}
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
                    label="相关专利名称"
                    onChange={e => setInvestigatorProductName(e.target.value)}
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
                    label="产品描述"
                    onChange={e => setInvestigatorProductDesc(e.target.value)}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  item
                  xs={12}>
                  <FilesDropzone onUpload={val => {
                    setInvestigatorImagePath(val && val.join(','))
                  }} title="上传我方图片" />
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
                  <TextField
                    fullWidth
                    label="被举报专利号"
                    onChange={e => setReportedPatentNumber(e.target.value)}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  item
                  xs={6}
                >
                  <TextField
                    fullWidth
                    label="被举报方产品名称"
                    onChange={e => setReportedProductName(e.target.value)}
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
                    onChange={e => setReportedProductDesc(e.target.value)}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  item
                  xs={12}>
                  <FilesDropzone onUpload={val => {
                    setReportedImagePath(val && val.join(','))
                  }} title="上传被举报方图片" />
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
                        setInformer(data.userName)
                        setToken(data.token)
                        return <TextField
                          disabled
                          fullWidth
                          label="举报人"
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
                    onChange={e => setInformerContact(e.target.value)}
                    required
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div style={{ textAlign: 'center', paddingTop: 28 }}>
            <Button onClick={handleSubmit} variant="contained" color="primary">提交举报信息</Button>
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