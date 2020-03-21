import React, { useState } from 'react'
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
import fetch from 'isomorphic-unfetch'
import querystring from 'query-string'
import Notification from '../../components/notification'

const Complaint = (props) => {
  const [informer, setInformer] = useState('')
  const [token, setToken] = useState('')
  const [patentType, setPatentType] = useState(1)
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
      complaintType: 1,
      patentType,
      reportedPatentNumber,
      reportedProductName,
      reportedProductDesc,
      informer,
      reportedImagePath,
      informerContact,
      token
    }
    const res = await fetch(`http://47.96.129.81:8081/f/v1/rightsProtection?${querystring.stringify(params)}`, {
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
                    <Select value={patentType} onChange={e => setPatentType(e.target.value)} fullWidth>
                      <MenuItem value={6}>发明专利</MenuItem>
                      <MenuItem value={4}>实用新型</MenuItem>
                      <MenuItem value={2}>外观设计</MenuItem>
                    </Select>
                    <FormHelperText>选择投诉类型</FormHelperText>
                  </FormControl>
                </Grid>
                <Grid
                  item
                  xs={4}
                >
                  <TextField
                    value={reportedPatentNumber}
                    fullWidth
                    label="被举报专利号"
                    onChange={e => setReportedPatentNumber(e.target.value)}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  item
                  xs={4}
                >
                  <TextField
                    value={reportedProductName}
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
                    value={reportedProductDesc}
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
                          value={informer}
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
                    value={informerContact}
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