const express = require('express')
const cors = require('cors')

const data = [
  {
    id: 1,
    cohortName: '17-01-WD-DP',
    cohortCode: 'g100',
    number_of_students: 28
  },
  {
    id: 2,
    cohortName: '17-01-DS-GT',
    cohortCode: 'g105',
    numberOfStudents: 24
  },
  {
    id: 3,
    cohortName: '17-02-WD-PX',
    cohortCode: 'g109',
    numberOfStudents: 30
  },
  {
    id: 4,
    cohortName: '17-03-WD-BD',
    cohortCode: 'g110',
    numberOfStudents: 29
  },
]

var port = process.env.PORT || 3000

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

app.listen(port)
