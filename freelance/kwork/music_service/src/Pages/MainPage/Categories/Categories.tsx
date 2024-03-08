import {useState} from 'react'
import Select from '../../../Components/ui/Select/Select'


const Categories = () => {
    const [executor, setExecutor] = useState()
  return (
    <div>
        <div>
            Искать по:
        </div>
        <Select/>
        <Select/>
        <Select/>
    </div>
  )
}

export default Categories