import React from 'react'
import Layout from '../../components/layout'
import Navigator from '../../components/navigator'
import fetch from 'isomorphic-unfetch'
import cookie from 'cookie'
import { Table, Chip, Card, TableHead, TableBody, TableCell, CardHeader, CardContent, TableRow, Typography } from '@material-ui/core'
import Modal from './Modal'
import moment from 'moment'
import Compare from './Compare'

const Result = (props) => {
  const { fdata, idata, headers } = props
  return (
    <Layout headers={headers} activeIndex={7}>
      <div style={{ boxShadow: 'none' }}>
        <div>
          <Card style={{ boxShadow: '0 0 1px #808080' }}>
            <CardHeader title={<Typography variant={'h4'}>假冒投诉</Typography>}></CardHeader>
            <CardContent>
              {
                fdata.list && fdata.list.length ? <div style={{ overflow: 'auto', position: 'relative' }}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell width={140}><label style={{ marginLeft: 10 }}>被举报产品名称</label></TableCell>
                        <TableCell width={140}>被举报专利号</TableCell>
                        <TableCell width={100}>举报时间</TableCell>
                        <TableCell width={90}>受理状态</TableCell>
                        <TableCell width={180}>受理意见</TableCell>
                        <TableCell width={100}>对比详情</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {fdata.list && fdata.list.slice(0, 10).map(customer => (
                        <TableRow>
                          <TableCell padding="checkbox">
                            <div style={{ marginLeft: 24 }}>
                              {customer.reportedProductName}
                            </div>
                          </TableCell>
                          <TableCell>
                            {customer.reportedPatentNumber}
                          </TableCell>
                          <TableCell>
                            {moment(customer.createDate).format('YYYY-MM-DD')}
                          </TableCell>
                          <TableCell>
                            {customer.acceptanceStatus == '1' ? <Chip color="secondary" label="未受理" /> : <Chip label="已受理" />}
                          </TableCell>
                          <TableCell>
                            {customer.acceptanceDescription}
                          </TableCell>
                          <TableCell>
                            <Modal title="专利信息对比" label="对比">
                              <div style={{ width: 760 }}>
                                <Compare caption={customer.reportedProductName} data={customer} />
                              </div>
                            </Modal>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div> : <div style={{ padding: 60, textAlign: 'center' }}>
                    <Typography variant="h4">没有数据</Typography>
                  </div>
              }
            </CardContent>
          </Card>
          <Card style={{ marginTop: 24, boxShadow: '0 0 1px #808080' }}>
            <CardHeader title={<Typography variant={'h4'}>侵权投诉</Typography>}></CardHeader>
            <CardContent>
              {
                idata.list && idata.list.length ? <div style={{ overflow: 'auto', position: 'relative' }}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell width={140}><label style={{ marginLeft: 10 }}>被举报产品名称</label></TableCell>
                        <TableCell width="140px">被举报专利号</TableCell>
                        <TableCell width={100}>举报时间</TableCell>
                        <TableCell width={90}>受理状态</TableCell>
                        <TableCell width={180}>受理意见</TableCell>
                        <TableCell width={100}>对比详情</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {idata.list && idata.list.slice(0, 10).map(customer => (
                        <TableRow>
                          <TableCell padding="checkbox">
                            <div style={{ marginLeft: 24 }}>
                              {customer.reportedProductName}
                            </div>
                          </TableCell>
                          <TableCell>
                            {customer.reportedPatentNumber}
                          </TableCell>
                          <TableCell>
                            {moment(customer.createDate).format('YYYY-MM-DD')}
                          </TableCell>
                          <TableCell>
                            {customer.acceptanceStatus == '1' ? <Chip color="secondary" label="未受理" /> : <Chip label="已受理" />}
                          </TableCell>
                          <TableCell>
                            {customer.acceptanceDescription}
                          </TableCell>
                          <TableCell>
                            <Modal title="专利信息对比" label="对比">
                              <div style={{ width: 760 }}>
                                <Compare caption={customer.reportedProductName} data={customer} />
                              </div>
                            </Modal>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div> : <div style={{ padding: 60, textAlign: 'center' }}>
                    <Typography variant="h4">没有数据</Typography>
                  </div>
              }
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  )
}

Result.getInitialProps = async ({ req, query }) => {
  const cookie_ = req.headers.cookie
  const auth = cookie.parse(cookie_)
  const { token } = auth
  const res1 = await fetch(`${process.env.APP_URL}/f/v1/rights-protection-createDate-complaintType?token=${token}&complaintType=1&pageNum=${query.current || 1}&createDate=2019-06-04`)
  const result1 = await res1.json()
  const res2 = await fetch(`${process.env.APP_URL}/f/v1/rights-protection-createDate-complaintType?token=${token}&complaintType=2&pageNum=${query.current || 1}&createDate=2019-06-04`)
  const result2 = await res2.json()
  return { headers: req.headers, fdata: result1.body, idata: result2.body }
}

export default Result