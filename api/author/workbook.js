import axios from '@nuxtjs/axios'

const create = (params) => axios.post(`/api/v1/workbooks/`, params)

const WorkbookApi = {
  create,
}

export default WorkbookApi
