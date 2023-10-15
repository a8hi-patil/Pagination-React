const data = [
  {
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "1Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  },
  {
    "postId": 1,
    "id": 2,
    "name": "quo vero reiciendis velit similique earum",
    "email": "2Jayne_Kuhic@sydney.com",
    "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
  },
  {
    "postId": 1,
    "id": 3,
    "name": "odio adipisci rerum aut animi",
    "email": "3Nikita@garfield.biz",
    "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
  }, {
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "4Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  },
  {
    "postId": 1,
    "id": 2,
    "name": "quo vero reiciendis velit similique earum",
    "email": "5Jayne_Kuhic@sydney.com",
    "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
  },
  {
    "postId": 1,
    "id": 3,
    "name": "odio adipisci rerum aut animi",
    "email": "6Nikita@garfield.biz",
    "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
  },
  {
    "postId": 1,
    "id": 3,
    "name": "odio adipisci rerum aut animi",
    "email": "7Nikita@garfield.biz",
    "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
  }]


import { useEffect, useState } from 'react'
import './index.css'
function App() {

  const [emails, setEmails] = useState([])
  const [numberOfItems, setNumberOfItems] = useState(100)
  let pages = Math.ceil(emails.length / numberOfItems)
  const [start, setStart] = useState(0)
  let end = start + numberOfItems
  let paginatedMails = emails.slice(start, end)
  let page = [...Array(pages).keys()]

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then((data) => {
        setEmails(data)

      })
  }, [])
  return (
    <>
      {
        paginatedMails.map((email) => {
          return <p>{email.email}</p>
        })
      }
      <span onClick={() => {
        setStart(prevStart => prevStart - numberOfItems)
      }} >Prev</span>

      {

        page.map(p => <span className={(start/numberOfItems == p) ? "active" : "off"} onClick={() => {
          console.log(p * numberOfItems)
          setStart(p * numberOfItems)
        }} > {p+1} |</span >)
      }

      <span onClick={() => {

        setStart(prevStart => prevStart + numberOfItems)
      }} >Next</span>
    </>
  )
}

export default App
