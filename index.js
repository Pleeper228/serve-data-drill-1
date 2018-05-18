const express = require('express')
const cors = require('cors')

const data = [
  {
    id: 1,
    cohort_name: '17-01-WD-DP',
    cohort_code: 'g100',
    number_of_students: 28
  },
  {
    id: 2,
    cohort_name: '17-01-DS-GT',
    cohort_code: 'g105',
    number_of_students: 24
  },
  {
    id: 3,
    cohort_name: '17-02-WD-PX',
    cohort_code: 'g109',
    number_of_students: 30
  },
  {
    id: 4,
    cohort_name: '17-03-WD-BD',
    cohort_code: 'g110',
    number_of_students: 29
  },
]

function getObjById(data, id) {
  return data.filter(obj => obj.id == id)
}

const app = express()
app.use(cors())

app.get('/', (request, response) => {
  response.json({data})
})

app.get('/:id', (request, response) => {
  const result = getObjById(data, request.params.id)
  if (result.length < 1) {
    response.status(404).json({
      error: {
        message: 'No record found!'
      }
    })
  } else {
    response.json({data: result})
  }
})

app.listen(3000)
