import React, { Fragment, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import uuid from 'uuid/v1'
import { useDropzone } from 'react-dropzone'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { makeStyles } from '@material-ui/styles'
import {
  Button,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  colors
} from '@material-ui/core'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import bytesToSize from './bytesToSize'
import fetch from 'isomorphic-unfetch'

const useStyles = uploaded => makeStyles(theme => ({
  root: {},
  dropZone: {
    borderRadius: 4,
    border: `1px dashed #acacaf`,
    padding: theme.spacing(6),
    outline: 'none',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'center',
    '&:hover': {
      backgroundColor: colors.grey[50],
      opacity: uploaded ? 1 : 0.5,
      cursor: 'pointer'
    }
  },
  dragActive: {
    backgroundColor: colors.grey[50],
    opacity: 0.5
  },
  image: {
    width: 130
  },
  info: {
    marginTop: theme.spacing(1)
  },
  list: {
    maxHeight: 320
  },
  actions: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'flex-end',
    '& > * + *': {
      marginLeft: theme.spacing(2)
    }
  }
}))

const FilesDropzone = props => {
  const { className, title, ...rest } = props
  const [files, setFiles] = useState([])
  const [uploaded, setUploaded] = useState(false)
  const classes = useStyles(uploaded)()
  const handleDrop = useCallback(acceptedFiles => {
    setFiles(files => [...files].concat(acceptedFiles))
  }, [])

  const handleRemoveAll = () => {
    setFiles([])
    setUploaded(false)
  }

  const upload = (data) => {
    return fetch(`http://47.96.129.81:8081/f/v1/picture`, {
      method: 'post',
      body: data
    })
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop
  })

  const handleUpload = () => {
    const { onUpload = e => e } = props
    if (files.length < 1) return
    Promise.all(files.map(async (file) => {
      const formData = new FormData()
      formData.set('file', file)
      const res = await upload(formData)
      const result = await res.json()
      if (result.code === 0) {
        return result.body
      }
    })).then(result => {
      onUpload(result)
      setUploaded(true)
    })
  }

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div
        className={clsx({
          [classes.dropZone]: true,
          [classes.dragActive]: isDragActive
        })}
        {...getRootProps()}
      >
        <input {...getInputProps()} disabled={uploaded} accept="image/gif,image/jpeg,image/jpg,image/png,image/svg" />
        <div>
          <img
            alt="选择文件"
            className={classes.image}
            src={uploaded ? "/client/images/undraw_resume_folder_2_arse.svg" : "/client/images/undraw_add_file2_gvbb.svg"}
          />
        </div>
        <div style={{ marginLeft: 8 }}>
          <Typography
            gutterBottom
            variant="h3"
          >
            {uploaded ? '文件已上传' : title}
          </Typography>
          <Typography
            className={classes.info}
            color="textSecondary"
            variant="body1"
          >
            {
              uploaded ? null : <span>
                将文件拖拽至此处或点击 <Link underline="always">浏览文件</Link>{' '}
              </span>
            }
          </Typography>
        </div>
      </div>
      {files.length > 0 && (
        <Fragment>
          <PerfectScrollbar options={{ suppressScrollX: true }}>
            <List className={classes.list}>
              {files.map((file, i) => (
                <ListItem
                  divider={i < files.length - 1}
                  key={uuid()}
                >
                  <ListItemIcon>
                    <FileCopyIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={file.name}
                    primaryTypographyProps={{ variant: 'h5' }}
                    secondary={bytesToSize(file.size)}
                  />
                </ListItem>
              ))}
            </List>
          </PerfectScrollbar>
          <div className={classes.actions}>
            <Button
              variant="outlined"
              onClick={handleRemoveAll}
              size="small"
            >
              {
                uploaded ? '重新选择文件上传' : '全部移除'
              }
            </Button>
            {
              uploaded ? <Button
                variant="outlined"
                color="primary"
                disabled
                size="small">
                已上传
              </Button> : <Button
                  onClick={handleUpload}
                  variant="outlined"
                  color="primary"
                  size="small">
                  上传
            </Button>
            }
          </div>
        </Fragment>
      )}
    </div>
  )
}

FilesDropzone.propTypes = {
  className: PropTypes.string
}

export default FilesDropzone
