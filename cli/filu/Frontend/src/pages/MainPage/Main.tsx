import { useQuery } from "react-query"
import file from "../../api/file"
import styles from "styled-components"

// const Wrapper = css`
//   width: 50%,
//   background-color: red;
// `

const Main = () => {
  const { data, error, isLoading } = useQuery(['file'], file.getAllContent)

  return (
    <div>
      {
        isLoading
          ?
          'Loading...'
          :
          data && data.length > 0 && data.map((file, index) => (
            <div key={file.id}>
              <h2>{file.name}</h2>
              <p>{file.content}</p>
              <span>
                <button className='link text-gray-400'>Delete</button>
              </span>
            </div>
          ))
      }
    </div>
  )
}

export default Main